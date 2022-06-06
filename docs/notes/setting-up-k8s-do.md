---
sidebar_position: 2
slug: /setting-up-k8s-do
---

# Setting up Kubernetes on Digital Ocean For Production

After provisioning Kubernetes on DigitalOcean, it's not really clear what the next steps are. DigitalOcean already 
shares a guide on how to set up [here](https://www.digitalocean.com/community/tutorials/how-to-set-up-an-nginx-ingress-with-cert-manager-on-digitalocean-kubernetes).
However, after trying to set up k8s on DO for production so many times, I've built enough understanding to derive a 
more straightforward approach (per my taste).

This guide also considers that you use DigitalOcean's container registry.

To organise the Kubernetes resources (yaml files, etc) we create while following this guide, 
create a folder called `devops` (for example) in your Documents or wherever you keep code.

Let's get in.

## Install Ingress Nginx Controller

First you need to install Nginx controller which in turn will spawn a load balancer.
This is required so that you can be able to access services from your cluster using domain names.
Enter the following command to install the controller:

```bash
k apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/do/deploy.yaml
```

On the `Networking > Load Balancers` page, you should notice a Load Balancer spawn.
You should wait for it to complete before proceeding to the next step.

You can also check for Ingress Nginx readiness by running this command against your cluster.

```bash
k get svc -n ingress-nginx 
```

You should notice a similar table. What to look out for is an external IP for `ingress-nginx-controller`.
If it's unavailable, then your Load Balancer may still be spawning. You can check the DO dashboard.

```
NAME                                 TYPE           CLUSTER-IP      EXTERNAL-IP    PORT(S)                      AGE
ingress-nginx-controller             LoadBalancer   10.0.0.1        10.0.0.3       80:31710/TCP,443:31213/TCP   3m
ingress-nginx-controller-admission   ClusterIP      10.0.0.2        <none>         443/TCP                      3m
```

> You'll find the installation guide
> here: [Ingress Nginx / Installation Guide](https://kubernetes.github.io/ingress-nginx/deploy/#digital-ocean)


#### Set default ingress class

We need to set the Nginx controller we just installed as the default ingress class<sup>1</sup>.

Run the following command 

```bash
k edit -n ingress-nginx ingressclass nginx
```

This will open the nginx `IngressClass` resource in a vim (terminal) editor. 
Now add the following highlighted annotation. 

Note that, `metadata.annotations` may already have an entry (`kubectl.kubernetes.io/last-applied-configuration`). 
Just add this new entry below it. Please follow the indentation.

```yaml {3}
metadata:
  annotations:
    ingressclass.kubernetes.io/is-default-class: "true"
```

## Set up cert-manager

This is needed to issue certificates for our services.

### Install CRDs

Run the following command to install `cert-manager` resource definitions:

```bash
k apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.8.0/cert-manager.yaml
```

To verify if that went well, run

```bash
k get pods -n cert-manager
```

You should expect a similar table/state:

```
NAME                                       READY   STATUS    RESTARTS   AGE
cert-manager-7dd5854bb4-7rpzw              1/1     Running   0          1m
cert-manager-cainjector-64c049654c-6pm5p   1/1     Running   0          1m
cert-manager-webhook-6bdgfc7c9d-xfszq      1/1     Running   0          1m
```

### Create an Issuer

I personally prefer the ACME (LetsEncrypt) issuer and `DNS-01` verification method.
So I'm providing the guide in that respect:

First let me explain how this works. When you deploy a service, the cert manager requests for a certificate
from our issuer (LetsEncrypt). But the issuer needs to verify that you own the domain. Now, there are
two methods to verify. `HTTP01` and `DNS01`.

The difference between them is that, the former requires you to serve a verification key on a certain path on your
web service (and should be on the domain you're signing). The latter however checks for verification values from
your DNS records.<sup>2</sup>

Note that, these methods don't require you to manually set them up. That's what `cert-manager` is for.

Since we're going to _prefer_ `DNS01` method, we need to allow `cert-manager` to alter our DNS records when needed. To
do that we need to supply it with an access token.

> This article also assumes your nameservers have been moved to DigitalOcean.

#### Create an Access Token

Follow this short guide to create an access
token: [DO/Create Personal Access Token](https://docs.digitalocean.com/reference/api/create-personal-access-token/).
Remember to check write access.

Copy the access token and run this command to encode it

```bash
echo -n 'your-access-token' | base64
```

Then create a resource `Secret` resource

```yaml {7} title="devops/do-token.yml"
apiVersion: v1
kind: Secret
metadata:
  name: digitalocean-dns
data:
  # set the value of access-token to the encoded value
  access-token: "base64 encoded access-token here"
```

Now apply this secret (to the `cert-manager` namespace)

```bash
k apply -n cert-manager -f do-token.yml
```

#### Create/Define an Issuer

```yaml {10,23} title="devops/issuer.yml"
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-default
spec:
  acme:
    # replace with your email. this email will be notified when
    # the certificate is about to expire. but you need not worry
    # because cert-manager will automatically renew certificates
    email: youremail@provider.com 
    server: https://acme-v02.api.letsencrypt.org/directory
    privateKeySecretRef:
      name: default-issuer # can be any name
    solvers:
      - dns01:
          digitalocean:
            tokenSecretRef:
              name: digitalocean-dns
              key: access-token
        selector:
          dnsZones:
            # remember to use your domain
            - "example.com"
```

Apply with the following command (on the `default` namespace)

```bash
k apply -f issuer.yml

# verify with
k get clusterissuer
```

### Done

That's it. Now we can make some deployments.

## Deploy

Deployments normally refer to a combination of pod and replica set definitions in single file. 
But I prefer to set up deployments as a combination of pod, replica set, service and ingress definitions in  a single
file.

### Container Registry

I use DigitalOcean's container registry to host my docker images. If this is the same for you, then you need add the 
`Secret` required to pull images from your registry.

To do that, go to `Container Registry > Settings`. Then click "Edit" in the `DigitalOcean Kubernetes integration` 
section. Now select your k8s cluster and click "Save All".


### Resource File

Time to put together a deployment:

```yaml {6,8,13,17,21,34,41,45,54,57,64,67,69,74} title="deployment.yml"
apiVersion: apps/v1
kind: Deployment
metadata:
  # you can call this deployment anything you want
  # it doesn't have to have "service" in the name either
  name: api-service
  labels:
    app: api-service
spec:
  replicas: 1
  selector:
    matchLabels:
      app: api-service
  template:
    metadata:
      labels:
        app: api-service
    spec:
      containers:
          # you can name it anything
        - name: api
          # set the correct values for `registry-name` and `image`
          image: registry.digitalocean.com/<registry-name>/<image>
          ports:
            - containerPort: 80
          env:
            - name: ENV_VARIABLE_1
              value: env_value
            - name: ENV_VARIABLE_2
              value: another_env_value
      imagePullSecrets:
        # replace this with the name of your container registry
        # if you're using digital ocean's registry
        - name: <container-registry-name>

---
apiVersion: v1
kind: Service
metadata:
  # you can name the service anything
  name: api-service
spec:
  selector:
    # but this selector should match the labels.app above
    app: api-service
  ports:
    - protocol: TCP
      port: 80

---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: api-ingress
  annotations:
    # remember this issuer we created before?
    cert-manager.io/cluster-issuer: letsencrypt-default
spec:
  # you don't need this if you set the default nginx class before
  ingressClassName: nginx
  tls:
    - hosts:
        # this is the domain you want to use for your app
        - api.example.com
      # this will be used to name the certificate secret generated by cert-manager
      # use any value. but should be unique per deployment
      secretName: api-example-com-cert
  rules:
    - host: api.example.com
      http:
        paths:
          - backend:
              service:
                name: api-service
                port:
                  number: 80
            pathType: Prefix
            path: /

```

Now run the follow command to deploy

```bash
k apply -f deployment.yml
```

You're done. Your pods will spawn. Cert-manager will request for certificate issuance from LetsEncrypt. 
And in a matter of seconds your service will be ready for the world to access.

Enjoy!

---

<small><sup>1</sup> Reason can be found here: <a href="https://kubernetes.github.io/ingress-nginx/#what-is-an-ingressclass-and-why-is-it-important-for-users-of-ingress-nginx-controller-now">https://kubernetes.github.io/ingress-nginx/#what-is-an-ingressclass-and-why-is-it-important-for-users-of-ingress-nginx-controller-now</a></small>

<br />

<small><sup>2</sup> Read a little more
here: <a href="https://cert-manager.io/docs/configuration/acme/#solving-challenges">https://cert-manager.io/docs/configuration/acme/#solving-challenges</a></small>
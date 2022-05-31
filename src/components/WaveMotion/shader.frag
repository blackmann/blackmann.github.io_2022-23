varying vec2 vUv;
varying float vWave;
varying float vTextureRedOffset;
uniform sampler2D uTexture;

void main() {
    float wave = vWave * 0.6;
    float redWave = vWave - vTextureRedOffset;

    float r = texture2D(uTexture, vUv + redWave).r;
    float g = texture2D(uTexture, vUv).g;
    float b = texture2D(uTexture, vUv + wave).b;

    gl_FragColor = vec4(vec3(r,g,b), 1.);
}

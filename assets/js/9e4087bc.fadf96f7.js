"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[608],{3012:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var r=a(7294),l=a(8277),n=a(9960),c=a(5999),m=a(1944);function i(e){let{year:t,posts:a}=e;return r.createElement(r.Fragment,null,r.createElement("h3",null,t),r.createElement("ul",null,a.map((e=>r.createElement("li",{key:e.metadata.date},r.createElement(n.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))))))}function s(e){let{years:t}=e;return r.createElement("section",{className:"margin-vert--lg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},t.map(((e,t)=>r.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},r.createElement(i,e)))))))}function o(e){let{archive:t}=e;const a=(0,c.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),n=(0,c.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),i=function(e){const t=e.reduceRight(((e,t)=>{const a=t.metadata.date.split("-")[0],r=e.get(a)??[];return e.set(a,[t,...r])}),new Map);return Array.from(t,(e=>{let[t,a]=e;return{year:t,posts:a}}))}(t.blogPosts);return r.createElement(r.Fragment,null,r.createElement(m.d,{title:a,description:n}),r.createElement(l.Z,null,r.createElement("header",{className:"hero hero--primary"},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},a),r.createElement("p",{className:"hero__subtitle"},n))),r.createElement("main",null,i.length>0&&r.createElement(s,{years:i}))))}}}]);
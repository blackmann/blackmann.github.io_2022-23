"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[368],{8291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>E,contentTitle:()=>x,default:()=>T,frontMatter:()=>h,metadata:()=>w,toc:()=>S});var r=n(7462),a=n(7294),s=n(3905);const o={EnterButton:"EnterButton_cgsG",EnterButtonWrapper:"EnterButtonWrapper_Nd22",TextSpawnApp:"TextSpawnApp_EAoo",TextSpawnInput:"TextSpawnInput_TdMV"},c="TextSpawnCharacter_F3ql",p="DeadCharacter_WXtF";var i=n(9920),l=n(6010);function u(e){let{character:t,drop:n,index:r}=e;const[s,o]=a.useState(65),[u,d]=a.useState(!0),{charCode:m}=(0,i.useSpring)({delay:80*r,from:{charCode:s},to:{charCode:t.charCodeAt(0)},onRest(){o(t.charCodeAt(0)),d(!n)},onStart(){d(!0)}});return a.useEffect((()=>{o((e=>/[a-zA-Z\d]/.test(t)?/[a-z]/.test(t)&&(e<97||e>122)?97:/[A-Z]/.test(t)&&(e<90||e>90)?65:/\d/.test(t)&&(e<48||e>57)?48:e:t.charCodeAt(0)))}),[t,m]),u?a.createElement(i.animated.span,{className:(0,l.Z)(c,{[p]:n})},m.to((e=>String.fromCharCode(e)))):null}function d(e){let{children:t}=e;const n=a.useRef();return a.useMemo((()=>{if(n.current?.length>t.length){const e=n.current.split("").map(((e,n)=>t[n]||(/[a-z]/.test(e)?"a":/[A-Z]/.test(e)?"A":e)));return n.current=t,e}return n.current=t,t.split("")}),[t]).map(((e,n)=>a.createElement(u,{character:e,index:n,drop:n>=t.length,key:n})))}function m(e,t){return e.length>2&&e.shift(2-e.length),[...e,t]}function f(){const[e,t]=a.useReducer(m,[]),[n,r]=a.useState("");return a.createElement("div",{className:o.TextSpawnApp},e.map(((e,t)=>a.createElement("div",{key:t},a.createElement(d,null,e)))),a.createElement("form",{className:"container",onSubmit:function(e){e.preventDefault(),t(n),r("")}},a.createElement("div",{className:(0,l.Z)("row row--align-center",o.InputField)},a.createElement("div",{className:"col--8"},a.createElement("input",{className:o.TextSpawnInput,placeholder:"Type something\u2026",type:"text",value:n,onChange:e=>{let{target:{value:t}}=e;return r(t)}})),a.createElement("div",{className:"col--4"},a.createElement("button",{className:o.EnterButton},"\u2934")))))}const h={sidebar_position:3},x="Text Spawn",w={unversionedId:"rnds/text-spawn",id:"rnds/text-spawn",title:"Text Spawn",description:"Bring texts to life - like from infancy.",source:"@site/docs/rnds/text-spawn.mdx",sourceDirName:"rnds",slug:"/rnds/text-spawn",permalink:"/docs/rnds/text-spawn",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"rnd",previous:{title:"Wave motion",permalink:"/docs/rnds/wave-motion"}},E={},S=[],g={toc:S};function T(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"text-spawn"},"Text Spawn"),(0,s.kt)("p",null,"Bring texts to life - like from infancy."),(0,s.kt)(f,{mdxType:"TextSpawnApp"}))}T.isMDXComponent=!0}}]);
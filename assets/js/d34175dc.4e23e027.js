"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),d=u(n),c=o,m=d["".concat(l,".").concat(c)]||d[c]||p[c]||r;return n?a.createElement(m,s(s({ref:t},h),{},{components:n})):a.createElement(m,s({ref:t},h))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={slug:"i-should-have-written-tests",title:"I should have written tests",tags:[]},s=void 0,i={permalink:"/blog/i-should-have-written-tests",source:"@site/blog/2022-05-24-i-should-have-written-tests.md",title:"I should have written tests",description:"As a freelancer working (solo mostly) on a number of gigs at the same time, the least interesting to do is to write",date:"2022-05-24T00:00:00.000Z",formattedDate:"May 24, 2022",tags:[],readingTime:4.165,truncated:!0,authors:[],frontMatter:{slug:"i-should-have-written-tests",title:"I should have written tests",tags:[]},prevItem:{title:"What I told my younger brother on our way to admit him into SHS",permalink:"/blog/advice-to-my-brother"},nextItem:{title:"Delegation",permalink:"/blog/delegation"}},l={authorsImageUrls:[]},u=[{value:"Functional and OK",id:"functional-and-ok",level:2},{value:"UI, test UI?",id:"ui-test-ui",level:2},{value:"What happened?",id:"what-happened",level:2},{value:"Units",id:"units",level:2},{value:"Changes",id:"changes",level:2}],h={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As a freelancer working (solo mostly) on a number of gigs at the same time, the least interesting to do is to write\ntests. That discipline is not worth the investment. It's an MVP, needs to be ready in two or three months.\nHow does automated tests save me time \u23f0?"),(0,o.kt)("p",null,"This had been an ",(0,o.kt)("em",{parentName:"p"},"implicit reasoning"),(0,o.kt)("sup",null,"1")," for me in the past. I understood it made sense to write\nthem, but it takes a lot more hours to author them - when I could use that same time writing the rest of the features.\nWhat I used to do as a compromise is to write tests for a few critical features."),(0,o.kt)("h2",{id:"functional-and-ok"},"Functional and OK"),(0,o.kt)("p",null,"Now I designed these few ",(0,o.kt)("em",{parentName:"p"},"critical")," tests in a way that if any broke, it could have been caused from many possible\nplaces. I labelled these tests as functional tests. For example, testing the login process, or an item upload, etc."),(0,o.kt)("p",null,"This is okay. ",(0,o.kt)("em",{parentName:"p"},"You can't tell me otherwise"),". It's better than no ","[automated]"," tests at all. But the issue with\nfunctional tests from my experience is that it's easy to miss edge cases (or simply ignore them and focus\non what should work). In fact, it's messy writing this type of tests because ",(0,o.kt)("em",{parentName:"p"},"arranging")," the test takes long lines code."),(0,o.kt)("p",null,"Worse of all with this approach is that, it doesn't force you to arrange/structure your codebase properly. You have the\nfreedom to make one function do ",(0,o.kt)("em",{parentName:"p"},"20 billion")," different things."),(0,o.kt)("p",null,"Don't get me wrong. I understand separation of concerns, single responsibility, yiddih yaddah. You can know all these\nand still have a terrible codebase. You could ",(0,o.kt)("em",{parentName:"p"},"innocently")," assume a logic needs to exist in source ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," but good testing\ntechniques/discipline will have you extracting relevant code into separate sources."),(0,o.kt)("h2",{id:"ui-test-ui"},"UI, test UI?"),(0,o.kt)("p",null,"How do you expect me to write code for that when I'm already clicking around and testing ","[manually]"," already? What's\ngoing to take me by surprise? Yes, I also used to think like this."),(0,o.kt)("p",null,"Another reason I was convicted in not writing UI tests is that I imagined the setup and execution process will\nbe overwhelming. Questions like doesn't the test framework have to spawn a browser or an emulator.\nWouldn't it take a lot of time to run these tests."),(0,o.kt)("p",null,"Yes I had those questions as a way to confirm my bias. Therefore, I didn't want to bother finding answers."),(0,o.kt)("h2",{id:"what-happened"},"What happened?"),(0,o.kt)("p",null,"I launched ",(0,o.kt)("a",{parentName:"p",href:"https://adeton.io"},"Adeton"),"."),(0,o.kt)("p",null,"That's what happened."),(0,o.kt)("p",null,"\u2705 Few functional tests."),(0,o.kt)("p",null,"\u2705 No UI tests."),(0,o.kt)("p",null,"The app was good. Worked ",(0,o.kt)("em",{parentName:"p"},"fl-"),"flawless. Few months in, all good; with the few bug fixes I was consistently making.\nUntil I needed to update the pricing calculation. Until I needed change the shop deployment strategy.\nUntil I needed to add theming capabilities. Until I needed to add ",(0,o.kt)("em",{parentName:"p"},"forgot password"),(0,o.kt)("sup",null,"2"),"."),(0,o.kt)("p",null,"What are the guarantees I had not broken another part of the app or the API while working on any of these? You can\nguess the answer to that."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Had I known\u2026")),(0,o.kt)("h2",{id:"units"},"Units"),(0,o.kt)("p",null,"It was when I joined my current company/workplace (",(0,o.kt)("a",{parentName:"p",href:"https://varsitytutors.com"},"Varsity Tutors LLC"),") that I got to\nexperience the benefit of unit testing. It is required ","[over here]"," to test every single line of code and this was\nmade sure by counting code coverage",(0,o.kt)("sup",null,"4"),"."),(0,o.kt)("p",null,"I work primarily at the frontend, and we write tests for UI (geeezz \ud83d\ude2c). I began to appreciate the effort for writing\nthese tests. I spend time writing and testing a feature at a time, knowing well (almost guaranteed) that other\nexisting tests will catch any breaking change I make."),(0,o.kt)("p",null,"The long term benefit is very huge. I don't have to test the whole application by hand to guarantee everything works\nperfectly just because I changed or added a few lines of code."),(0,o.kt)("p",null,"So around the whole of November and half of December last year, I spent my evenings rearranging and writing unit tests\nfor the backend API of Adeton. My confidence level for this codebase has risen tremendously.\nAbout the frontend, it's still a work-in-progress."),(0,o.kt)("h2",{id:"changes"},"Changes"),(0,o.kt)("p",null,"If you're in the habit of building building building, it's easy to dismiss automated tests. But software development,\nwhich is a vector of programming and time",(0,o.kt)("sup",null,"3"),", requires you to set up your code in a way that anticipates\nchange."),(0,o.kt)("p",null,"One way to guarantee a safe/robust system after changes or upgrades is to put in place best testing practices like\nunit testing (primarily) in combination with other testing methods."),(0,o.kt)("p",null,"I'm changed. I treat tests as sacred now."),(0,o.kt)("p",null,"All the best!"),(0,o.kt)("hr",null),(0,o.kt)("small",null,(0,o.kt)("sup",null,"1")," I made this term up to describe a case where the reason you do something hasn't been placed under logical scrutiny."),(0,o.kt)("br",null),(0,o.kt)("small",null,(0,o.kt)("sup",null,"2"),' Yes Adeton shipped with no "Forgot Password" until about 4-5 months later. Haha. By then we had about 300 users.'),(0,o.kt)("br",null),(0,o.kt)("small",null,(0,o.kt)("sup",null,"3")," I mean software development is a very dynamic process that involves lots of changes with time. It's not just about programming."),(0,o.kt)("br",null),(0,o.kt)("small",null,(0,o.kt)("sup",null,"4")," Definitely not manually. We use jest."))}d.isMDXComponent=!0}}]);
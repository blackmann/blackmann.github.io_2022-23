"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[89],{4118:function(e,t,a){a.d(t,{Z:function(){return Z}});var r=a(3366),n=a(7294),l=a(6010),i=a(8277),m=a(9960),o=a(5999),s="sidebar_TMXw",c="sidebarItemTitle_V4zb",u="sidebarItemList_uHd5",d="sidebarItem_spIe",g="sidebarItemLink_eqrF",p="sidebarItemLinkActive_XZSJ";function v(e){var t=e.sidebar;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(u,"clean-list")},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:d},n.createElement(m.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title))})))))}var h=a(3102);function E(e){var t=e.sidebar;return n.createElement("ul",{className:"menu__list"},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(m.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function b(e){return n.createElement(h.Zo,{component:E,props:e})}var f=a(7524);function N(e){var t=e.sidebar,a=(0,f.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(b,{sidebar:t}):n.createElement(v,{sidebar:t}):null}var _=["sidebar","toc","children"];function Z(e){var t=e.sidebar,a=e.toc,m=e.children,o=(0,r.Z)(e,_),s=t&&t.items.length>0;return n.createElement(i.Z,o,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(N,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},m),a&&n.createElement("div",{className:"col col--2"},a))))}},2754:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var r=a(7294),n=a(2263),l=a(4118),i=a(7510),m=a(5999),o=a(1750);function s(e){var t=e.metadata,a=t.previousPage,n=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,m.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&r.createElement(o.Z,{permalink:a,title:r.createElement(m.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),n&&r.createElement(o.Z,{permalink:n,title:r.createElement(m.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}var c=a(1944),u=a(5281),d=a(4739),g=a(6010);function p(e){var t=e.metadata,a=(0,n.Z)().siteConfig.title,l=t.blogDescription,i=t.blogTitle,m="/"===t.permalink?a:i;return r.createElement(r.Fragment,null,r.createElement(c.d,{title:m,description:l}),r.createElement(d.Z,{tag:"blog_posts_list"}))}function v(e){var t=e.metadata,a=e.items,n=e.sidebar;return r.createElement(l.Z,{sidebar:n},a.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(s,{metadata:t}))}function h(e){return r.createElement(c.FG,{className:(0,g.Z)(u.k.wrapper.blogPages,u.k.page.blogListPage)},r.createElement(p,e),r.createElement(v,e))}},7510:function(e,t,a){a.d(t,{Z:function(){return I}});var r=a(7294),n=a(6010),l=a(5999),i=a(9960),m=a(4996),o=a(2263),s=["zero","one","two","few","many","other"];function c(e){return s.filter((function(t){return e.includes(t)}))}var u={locale:"en",pluralForms:c(["one","other"]),select:function(e){return 1===e?"one":"other"}};function d(){var e=(0,o.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:c(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),u}var t,a}),[e])}function g(){var e=d();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms+"), but the message contains "+r.length+": "+e);var n=a.select(t),l=a.pluralForms.indexOf(n);return r[Math.min(l,r.length-1)]}(a,t,e)}}}var p=a(8780),v=a(5290),h=a(6753),E="blogPostTitle_uMeh",b="blogPostHeadline_ZAxW",f="moreLink_Hlo1",N="blogPostData_Vfxe",_="blogPostDetailsFull_enUA",Z=a(8727);function k(e){return e.href?r.createElement(i.Z,e):r.createElement(r.Fragment,null,e.children)}function P(e){var t=e.author,a=t.name,n=t.title,l=t.url,i=t.imageURL,m=t.email,o=l||m&&"mailto:"+m||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(k,{href:o,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(k,{href:o,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}var w="authorCol_FlmR",T="imageOnlyAuthorRow_trpF",F="imageOnlyAuthorCol_S2np";function y(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var l=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",l?T:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,n.Z)(!l&&"col col--6",l?F:w),key:t},r.createElement(P,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function I(e){var t,a,o=(a=g().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),s=(0,m.C)().withBaseUrl,c=e.children,u=e.frontMatter,d=e.assets,k=e.metadata,P=e.truncated,w=e.isBlogPostPage,T=void 0!==w&&w,F=k.date,I=k.formattedDate,L=k.permalink,A=k.tags,C=k.readingTime,M=k.title,x=k.editUrl,R=k.authors,U=null!=(t=d.image)?t:u.image,B=!T&&P,O=A.length>0,D=T?"h1":"h2";return r.createElement("article",{className:T?void 0:"margin-bottom--md",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(D,{className:T?E:b,itemProp:"headline"},T?M:r.createElement(i.Z,{itemProp:"url",to:L},M)),r.createElement("div",{className:(0,n.Z)(N,{"margin-vert--md":T})},r.createElement("time",{dateTime:F,itemProp:"datePublished"},I),void 0!==C&&r.createElement(r.Fragment,null," \xb7 ",o(C))),r.createElement(y,{authors:R,assets:d})),U&&r.createElement("meta",{itemProp:"image",content:s(U,{absolute:!0})}),r.createElement("div",{id:T?p.blogPostContainerID:void 0,className:(0,n.Z)("markdown",{"margin-vert--md":!T}),itemProp:"articleBody"},r.createElement(v.Z,null,c),!T&&P&&r.createElement(i.Z,{className:f,to:L},"+ more")),(O||P)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",T&&_)},O&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":B})},r.createElement(Z.Z,{tags:A})),T&&x&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(h.Z,{editUrl:x}))))}}}]);
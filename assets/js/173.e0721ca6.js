/*! For license information please see 173.e0721ca6.js.LICENSE.txt */
"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[173],{9222:(e,t)=>{Object.defineProperty(t,Symbol.toStringTag,{value:"Module"});const s=window,i=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap;let o=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const s=void 0!==t&&1===t.length;s&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(t,e))}return e}toString(){return this.cssText}};const a=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,n))(t)})(e):e;var l;const c=window,d=c.trustedTypes,h=d?d.emptyScript:"",u=c.reactiveElementPolyfillSupport,m={toAttribute(e,t){switch(t){case Boolean:e=e?h:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},p=(e,t)=>t!==e&&(t==t||e==e),v={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:p};let g=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,s)=>{const i=this._$Ep(s,t);void 0!==i&&(this._$Ev.set(i,s),e.push(i))})),e}static createProperty(e,t=v){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const s="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,s,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(i){const n=this[e];this[t]=i,this.requestUpdate(e,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of t)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const e of s)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Ep(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,s;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(s=e.hostConnected)||void 0===s||s.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{i?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const i=document.createElement("style"),n=s.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=t.cssText,e.appendChild(i)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EO(e,t,s=v){var i;const n=this.constructor._$Ep(e,s);if(void 0!==n&&!0===s.reflect){const r=(void 0!==(null===(i=s.converter)||void 0===i?void 0:i.toAttribute)?s.converter:m).toAttribute(t,s.type);this._$El=e,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(e,t){var s;const i=this.constructor,n=i._$Ev.get(e);if(void 0!==n&&this._$El!==n){const e=i.getPropertyOptions(n),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(s=e.converter)||void 0===s?void 0:s.fromAttribute)?e.converter:m;this._$El=n,this[n]=r.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,s){let i=!0;void 0!==e&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||p)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===s.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(s)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};var f;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:g}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.5.0");const _=window,$=_.trustedTypes,b=$?$.createPolicy("lit-html",{createHTML:e=>e}):void 0,E=`lit$${(Math.random()+"").slice(9)}$`,y="?"+E,A=`<${y}>`,S=document,C=(e="")=>S.createComment(e),N=e=>null===e||"object"!=typeof e&&"function"!=typeof e,w=Array.isArray,L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,k=/>/g,T=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),x=/'/g,H=/"/g,I=/^(?:script|style|textarea|title)$/i,O=(B=1,(e,...t)=>({_$litType$:B,strings:e,values:t})),M=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),R=new WeakMap,Z=S.createTreeWalker(S,129,null,!1);var B;class G{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,r=0;const o=e.length-1,a=this.parts,[l,c]=((e,t)=>{const s=e.length-1,i=[];let n,r=2===t?"<svg>":"",o=L;for(let l=0;l<s;l++){const t=e[l];let s,a,c=-1,d=0;for(;d<t.length&&(o.lastIndex=d,a=o.exec(t),null!==a);)d=o.lastIndex,o===L?"!--"===a[1]?o=U:void 0!==a[1]?o=k:void 0!==a[2]?(I.test(a[2])&&(n=RegExp("</"+a[2],"g")),o=T):void 0!==a[3]&&(o=T):o===T?">"===a[0]?(o=n??L,c=-1):void 0===a[1]?c=-2:(c=o.lastIndex-a[2].length,s=a[1],o=void 0===a[3]?T:'"'===a[3]?H:x):o===H||o===x?o=T:o===U||o===k?o=L:(o=T,n=void 0);const h=o===T&&e[l+1].startsWith("/>")?" ":"";r+=o===L?t+A:c>=0?(i.push(s),t.slice(0,c)+"$lit$"+t.slice(c)+E+h):t+E+(-2===c?(i.push(void 0),l):h)}const a=r+(e[s]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==b?b.createHTML(a):a,i]})(e,t);if(this.el=G.createElement(l,s),Z.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(i=Z.nextNode())&&a.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const e=[];for(const t of i.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(E)){const s=c[r++];if(e.push(t),void 0!==s){const e=i.getAttribute(s.toLowerCase()+"$lit$").split(E),t=/([.?@])?(.*)/.exec(s);a.push({type:1,index:n,name:t[2],strings:e,ctor:"."===t[1]?V:"?"===t[1]?F:"@"===t[1]?K:j})}else a.push({type:6,index:n})}for(const t of e)i.removeAttribute(t)}if(I.test(i.tagName)){const e=i.textContent.split(E),t=e.length-1;if(t>0){i.textContent=$?$.emptyScript:"";for(let s=0;s<t;s++)i.append(e[s],C()),Z.nextNode(),a.push({type:2,index:++n});i.append(e[t],C())}}}else if(8===i.nodeType)if(i.data===y)a.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(E,e+1));)a.push({type:7,index:n}),e+=E.length-1}n++}}static createElement(e,t){const s=S.createElement("template");return s.innerHTML=e,s}}function D(e,t,s=e,i){var n,r,o,a;if(t===M)return t;let l=void 0!==i?null===(n=s._$Co)||void 0===n?void 0:n[i]:s._$Cl;const c=N(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,s,i)),void 0!==i?(null!==(o=(a=s)._$Co)&&void 0!==o?o:a._$Co=[])[i]=l:s._$Cl=l),void 0!==l&&(t=D(e,l._$AS(e,t.values),l,i)),t}class W{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:s},parts:i}=this._$AD,n=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:S).importNode(s,!0);Z.currentNode=n;let r=Z.nextNode(),o=0,a=0,l=i[0];for(;void 0!==l;){if(o===l.index){let t;2===l.type?t=new z(r,r.nextSibling,this,e):1===l.type?t=new l.ctor(r,l.name,l.strings,this,e):6===l.type&&(t=new q(r,this,e)),this.u.push(t),l=i[++a]}o!==(null==l?void 0:l.index)&&(r=Z.nextNode(),o++)}return n}p(e){let t=0;for(const s of this.u)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class z{constructor(e,t,s,i){var n;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cm=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=D(this,e,t),N(e)?e===P||null==e||""===e?(this._$AH!==P&&this._$AR(),this._$AH=P):e!==this._$AH&&e!==M&&this.g(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>w(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==P&&N(this._$AH)?this._$AA.nextSibling.data=e:this.T(S.createTextNode(e)),this._$AH=e}$(e){var t;const{values:s,_$litType$:i}=e,n="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=G.createElement(i.h,this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===n)this._$AH.p(s);else{const e=new W(n,this),t=e.v(this.options);e.p(s),this.T(t),this._$AH=e}}_$AC(e){let t=R.get(e.strings);return void 0===t&&R.set(e.strings,t=new G(e)),t}k(e){w(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const n of e)i===t.length?t.push(s=new z(this.O(C()),this.O(C()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cm=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}let j=class{constructor(e,t,s,i,n){this.type=1,this._$AH=P,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,i){const n=this.strings;let r=!1;if(void 0===n)e=D(this,e,t,0),r=!N(e)||e!==this._$AH&&e!==M,r&&(this._$AH=e);else{const i=e;let o,a;for(e=n[0],o=0;o<n.length-1;o++)a=D(this,i[s+o],t,o),a===M&&(a=this._$AH[o]),r||(r=!N(a)||a!==this._$AH[o]),a===P?e=P:e!==P&&(e+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!i&&this.j(e)}j(e){e===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};class V extends j{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===P?void 0:e}}const Y=$?$.emptyScript:"";class F extends j{constructor(){super(...arguments),this.type=4}j(e){e&&e!==P?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}}class K extends j{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){var s;if((e=null!==(s=D(this,e,t,0))&&void 0!==s?s:P)===M)return;const i=this._$AH,n=e===P&&i!==P||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==P&&(i===P||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==s?s:this.element,e):this._$AH.handleEvent(e)}}class q{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){D(this,e)}}const J=_.litHtmlPolyfillSupport;null==J||J(G,z),(null!==(f=_.litHtmlVersions)&&void 0!==f?f:_.litHtmlVersions=[]).push("2.5.0");var X,Q;let ee=class extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const s=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=s.firstChild),s}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,s)=>{var i,n;const r=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:t;let o=r._$litPart$;if(void 0===o){const e=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new z(t.insertBefore(C(),e),e,void 0,s??{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return M}};ee.finalized=!0,ee._$litElement$=!0,null===(X=globalThis.litElementHydrateSupport)||void 0===X||X.call(globalThis,{LitElement:ee});const te=globalThis.litElementPolyfillSupport;null==te||te({LitElement:ee}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.2.2");const se=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(s){s.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(s){s.createProperty(t.key,e)}};function ie(e){return(t,s)=>{return void 0!==s?(i=e,n=s,void t.constructor.createProperty(n,i)):se(e,t);var i,n}}var ne;null===(ne=window.HTMLSlotElement)||void 0===ne||ne.prototype.assignedElements;const re=2;let oe=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};const ae=(e,t)=>{var s,i;const n=e._$AN;if(void 0===n)return!1;for(const r of n)null===(i=(s=r)._$AO)||void 0===i||i.call(s,t,!1),ae(r,t);return!0},le=e=>{let t,s;do{if(void 0===(t=e._$AM))break;s=t._$AN,s.delete(e),e=t}while(0===(null==s?void 0:s.size))},ce=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(void 0===s)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),ue(t)}};function de(e){void 0!==this._$AN?(le(this),this._$AM=e,ce(this)):this._$AM=e}function he(e,t=!1,s=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(t)if(Array.isArray(i))for(let r=s;r<i.length;r++)ae(i[r],!1),le(i[r]);else null!=i&&(ae(i,!1),le(i));else ae(this,e)}const ue=e=>{var t,s,i,n;e.type==re&&(null!==(t=(i=e)._$AP)&&void 0!==t||(i._$AP=he),null!==(s=(n=e)._$AQ)&&void 0!==s||(n._$AQ=de))};class me extends oe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,s){super._$AT(e,t,s),ce(this),this.isConnected=e._$AU}_$AO(e,t=!0){var s,i;e!==this.isConnected&&(this.isConnected=e,e?null===(s=this.reconnected)||void 0===s||s.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),t&&(ae(this,e),le(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class pe{}const ve=new WeakMap,ge=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends me{render(e){return P}update(e,[t]){var s;const i=t!==this.Y;return i&&void 0!==this.Y&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=t,this.dt=null===(s=e.options)||void 0===s?void 0:s.host,this.rt(this.ct=e.element)),P}rt(e){var t;if("function"==typeof this.Y){const s=null!==(t=this.dt)&&void 0!==t?t:globalThis;let i=ve.get(s);void 0===i&&(i=new WeakMap,ve.set(s,i)),void 0!==i.get(this.Y)&&this.Y.call(this.dt,void 0),i.set(this.Y,e),void 0!==e&&this.Y.call(this.dt,e)}else this.Y.value=e}get lt(){var e,t,s;return"function"==typeof this.Y?null===(t=ve.get(null!==(e=this.dt)&&void 0!==e?e:globalThis))||void 0===t?void 0:t.get(this.Y):null===(s=this.Y)||void 0===s?void 0:s.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var fe=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,$e=(e,t,s,i)=>{for(var n,r=i>1?void 0:i?_e(t,s):t,o=e.length-1;o>=0;o--)(n=e[o])&&(r=(i?n(t,s,r):n(r))||r);return i&&r&&fe(t,s,r),r};t.GiscusWidget=class extends ee{constructor(){super(),this.GISCUS_SESSION_KEY="giscus-session",this.GISCUS_DEFAULT_HOST="https://giscus.app",this.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",this.__session="",this._iframeRef=new pe,this.messageEventHandler=this.handleMessageEvent.bind(this),this.host=this.GISCUS_DEFAULT_HOST,this.strict="0",this.reactionsEnabled="1",this.emitMetadata="0",this.inputPosition="bottom",this.theme="light",this.lang="en",this.loading="eager",this.setupSession(),window.addEventListener("message",this.messageEventHandler)}get iframeRef(){var e;return null==(e=this._iframeRef)?void 0:e.value}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("message",this.messageEventHandler)}_formatError(e){return`[giscus] An error occurred. Error message: "${e}".`}setupSession(){const e=location.href,t=new URL(e),s=localStorage.getItem(this.GISCUS_SESSION_KEY),i=t.searchParams.get("giscus")||"";if(this.__session="",i)return localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(i)),this.__session=i,t.searchParams.delete("giscus"),void history.replaceState(void 0,document.title,t.toString());if(s)try{this.__session=JSON.parse(s)}catch(n){localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn(`${this._formatError(null==n?void 0:n.message)} Session has been cleared.`)}}handleMessageEvent(e){if(e.origin!==this.host)return;const{data:t}=e;if("object"!=typeof t||!t.giscus||(this.iframeRef&&t.giscus.resizeHeight&&(this.iframeRef.style.height=`${t.giscus.resizeHeight}px`),!t.giscus.error))return;const s=t.giscus.error;if(s.includes("Bad credentials")||s.includes("Invalid state value")||s.includes("State has expired")){if(null!==localStorage.getItem(this.GISCUS_SESSION_KEY))return localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",console.warn(`${this._formatError(s)} Session has been cleared.`),void this.update(new Map);console.error(`${this._formatError(s)} No session is stored initially. ${this.ERROR_SUGGESTION}`)}s.includes("Discussion not found")?console.warn(`[giscus] ${s}. A new discussion will be created if a comment/reaction is submitted.`):console.error(`${this._formatError(s)} ${this.ERROR_SUGGESTION}`)}sendMessage(e){var t,s;null==(s=null==(t=this.iframeRef)?void 0:t.contentWindow)||s.postMessage({giscus:e},this.host)}updateConfig(){const e={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:"1"===this.strict,reactionsEnabled:"1"===this.reactionsEnabled,emitMetadata:"1"===this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(e)}firstUpdated(){var e;null==(e=this.iframeRef)||e.addEventListener("load",(()=>{var e;return null==(e=this.iframeRef)?void 0:e.classList.remove("loading")}))}requestUpdate(e,t,s){this.hasUpdated&&"host"!==e?this.updateConfig():super.requestUpdate(e,t,s)}getMetaContent(e,t=!1){const s=t?`meta[property='og:${e}'],`:"",i=document.querySelector(s+`meta[name='${e}']`);return i?i.content:""}_getCleanedUrl(){const e=new URL(location.href);return e.searchParams.delete("giscus"),e}getTerm(){switch(this.mapping){case"url":return`${this._getCleanedUrl()}`;case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return this.term||"";case"number":return"";default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}getNumber(){return"number"===this.mapping&&this.term||""}getIframeSrc(){const e=this._getCleanedUrl().toString(),t=`${e}${this.id?"#"+this.id:""}`,s=this.getMetaContent("description",!0),i=this.getMetaContent("giscus:backlink")||e,n={origin:t,session:this.__session,repo:this.repo,repoId:this.repoId||"",category:this.category||"",categoryId:this.categoryId||"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:s,backLink:i};return`${this.host||this.GISCUS_DEFAULT_HOST}${this.lang?`/${this.lang}`:""}/widget?${new URLSearchParams(n)}`}render(){return O`
      <iframe
        title="Comments"
        scrolling="no"
        class="loading"
        ${ge(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `}},t.GiscusWidget.styles=((e,...t)=>{const s=1===e.length?e[0]:t.reduce(((t,s,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1]),e[0]);return new o(s,e,n)})`
    :host,
    iframe {
      width: 100%;
      border: none;
      min-height: 150px;
      color-scheme: light dark;
    }

    iframe.loading {
      opacity: 0;
    }
  `,$e([ie({reflect:!0})],t.GiscusWidget.prototype,"host",2),$e([ie({reflect:!0})],t.GiscusWidget.prototype,"repo",2),$e([ie({reflect:!0})],t.GiscusWidget.prototype,"repoId",2),$e([ie({reflect:!0})],t.GiscusWidget.prototype,"category",2),$e([ie({reflect:!0})],t.GiscusWidget.prototype,"categoryId",2),$e([ie({reflect:!0})],t.GiscusWidget.prototype,"mapping",2),$e([ie({reflect:!0})],t.GiscusWidget.prototype,"term",2),$e([ie({reflect:!0})],t.GiscusWidget.prototype,"strict",2),$e([ie({reflect:!0})],t.GiscusWidget.prototype,"reactionsEnabled",2),$e([ie({reflect:!0})],t.GiscusWidget.prototype,"emitMetadata",2),$e([ie({reflect:!0})],t.GiscusWidget.prototype,"inputPosition",2),$e([ie({reflect:!0})],t.GiscusWidget.prototype,"theme",2),$e([ie({reflect:!0})],t.GiscusWidget.prototype,"lang",2),$e([ie({reflect:!0})],t.GiscusWidget.prototype,"loading",2),t.GiscusWidget=$e([(e=>t=>{return"function"==typeof t?(s=e,i=t,customElements.define(s,i),i):((e,t)=>{const{kind:s,elements:i}=t;return{kind:s,elements:i,finisher(t){customElements.define(e,t)}}})(e,t);var s,i})("giscus-widget")],t.GiscusWidget)},8071:(e,t,s)=>{const i=s(5893),n=s(7294);e.exports=function({id:e,host:t,repo:r,repoId:o,category:a,categoryId:l,mapping:c,term:d,strict:h,reactionsEnabled:u,emitMetadata:m,inputPosition:p,theme:v,lang:g,loading:f}){const[_,$]=n.useState(!1);return n.useEffect((()=>{_||(Promise.resolve().then((()=>s(9222))),$(!0))}),[]),_?i.jsx("giscus-widget",{id:e,host:t,repo:r,repoid:o,category:a,categoryid:l,mapping:c,term:d,strict:h,reactionsenabled:u,emitmetadata:m,inputposition:p,theme:v,lang:g,loading:f}):null}},1857:(e,t,s)=>{s.d(t,{Z:()=>ne});var i=s(7294),n=s(6010),r=s(7462),o=s(5999),a=s(1750);function l(e){const{previous:t,next:s}=e;return i.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&i.createElement(a.Z,(0,r.Z)({},t,{subLabel:i.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),s&&i.createElement(a.Z,(0,r.Z)({},s,{subLabel:i.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var c=s(2263),d=s(9960),h=s(5551),u=s(373),m=s(5281),p=s(4477);const v={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return i.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:i.createElement("b",null,s.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return i.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:i.createElement("b",null,s.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function g(e){const t=v[e.versionMetadata.banner];return i.createElement(t,e)}function f(e){let{versionLabel:t,to:s,onClick:n}=e;return i.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:i.createElement("b",null,i.createElement(d.Z,{to:s,onClick:n},i.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function _(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:r}}=(0,c.Z)(),{pluginId:o}=(0,h.gA)({failfast:!0}),{savePreferredVersionName:a}=(0,u.J)(o),{latestDocSuggestion:l,latestVersionSuggestion:d}=(0,h.Jo)(o),p=l??(v=d).docs.find((e=>e.id===v.mainDocId));var v;return i.createElement("div",{className:(0,n.Z)(t,m.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},i.createElement("div",null,i.createElement(g,{siteTitle:r,versionMetadata:s})),i.createElement("div",{className:"margin-top--md"},i.createElement(f,{versionLabel:d.label,to:p.path,onClick:()=>a(d.name)})))}function $(e){let{className:t}=e;const s=(0,p.E)();return s.banner?i.createElement(_,{className:t,versionMetadata:s}):null}function b(e){let{className:t}=e;const s=(0,p.E)();return s.badge?i.createElement("span",{className:(0,n.Z)(t,m.k.docs.docVersionBadge,"badge badge--secondary")},i.createElement(o.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label}},"Version: {versionLabel}")):null}function E(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:s}=e;return i.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:i.createElement("b",null,i.createElement("time",{dateTime:new Date(1e3*t).toISOString()},s))}}," on {date}")}function y(e){let{lastUpdatedBy:t}=e;return i.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:i.createElement("b",null,t)}}," by {user}")}function A(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:s,lastUpdatedBy:n}=e;return i.createElement("span",{className:m.k.common.lastUpdated},i.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&s?i.createElement(E,{lastUpdatedAt:t,formattedLastUpdatedAt:s}):"",byUser:n?i.createElement(y,{lastUpdatedBy:n}):""}},"Last updated{atDate}{byUser}"),!1)}var S=s(6753),C=s(8727);const N="lastUpdated_foO9";function w(e){return i.createElement("div",{className:(0,n.Z)(m.k.docs.docFooterTagsRow,"row margin-bottom--sm")},i.createElement("div",{className:"col"},i.createElement(C.Z,e)))}function L(e){let{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:r,formattedLastUpdatedAt:o}=e;return i.createElement("div",{className:(0,n.Z)(m.k.docs.docFooterEditMetaRow,"row")},i.createElement("div",{className:"col"},t&&i.createElement(S.Z,{editUrl:t})),i.createElement("div",{className:(0,n.Z)("col",N)},(s||r)&&i.createElement(A,{lastUpdatedAt:s,formattedLastUpdatedAt:o,lastUpdatedBy:r})))}function U(e){const{content:t}=e,{metadata:s}=t,{editUrl:r,lastUpdatedAt:o,formattedLastUpdatedAt:a,lastUpdatedBy:l,tags:c}=s,d=c.length>0,h=!!(r||o||l);return d||h?i.createElement("footer",{className:(0,n.Z)(m.k.docs.docFooter,"docusaurus-mt-lg")},d&&i.createElement(w,{tags:c}),h&&i.createElement(L,{editUrl:r,lastUpdatedAt:o,lastUpdatedBy:l,formattedLastUpdatedAt:a})):null}var k=s(1575),T=s(6043);const x="tocCollapsible_bZGK",H="tocCollapsibleContent_NNA8",I="tocCollapsibleExpanded_IqtF";var O=s(721);const M="tocCollapsibleButton_l22C",P="tocCollapsibleButtonExpanded_KeTX";function R(e){let{collapsed:t,...s}=e;return i.createElement("button",(0,r.Z)({type:"button"},s,{className:(0,n.Z)("clean-btn",M,!t&&P,s.className)}),i.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}function Z(e){let{toc:t,className:s,minHeadingLevel:r,maxHeadingLevel:o}=e;const{collapsed:a,toggleCollapsed:l}=(0,T.u)({initialState:!0});return i.createElement("div",{className:(0,n.Z)(x,!a&&I,s)},i.createElement(R,{collapsed:a,onClick:l}),i.createElement(T.z,{lazy:!0,className:H,collapsed:a},i.createElement(O.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:o})))}var B=s(9649);const G="docItemContainer_vinB",D="docItemCol_DM6M",W="tocMobile_TmEX";var z=s(1944),j=s(7524),V=s(2802),Y=s(8596);const F={breadcrumbsContainer:"breadcrumbsContainer_Xlws",breadcrumbHomeIcon:"breadcrumbHomeIcon_kU5B"};var K=s(4996);function q(e){return i.createElement("svg",(0,r.Z)({viewBox:"0 0 24 24"},e),i.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}function J(e){let{children:t,href:s,isLast:n}=e;const r="breadcrumbs__link";return n?i.createElement("span",{className:r,itemProp:"name"},t):s?i.createElement(d.Z,{className:r,href:s,itemProp:"item"},i.createElement("span",{itemProp:"name"},t)):i.createElement("span",{className:r},t)}function X(e){let{children:t,active:s,index:o,addMicrodata:a}=e;return i.createElement("li",(0,r.Z)({},a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,n.Z)("breadcrumbs__item",{"breadcrumbs__item--active":s})}),t,i.createElement("meta",{itemProp:"position",content:String(o+1)}))}function Q(){const e=(0,K.Z)("/");return i.createElement("li",{className:"breadcrumbs__item"},i.createElement(d.Z,{"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,n.Z)("breadcrumbs__link",F.breadcrumbsItemLink),href:e},i.createElement(q,{className:F.breadcrumbHomeIcon})))}function ee(){const e=(0,V.s1)(),t=(0,Y.Ns)();return e?i.createElement("nav",{className:(0,n.Z)(m.k.docs.docBreadcrumbs,F.breadcrumbsContainer),"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},i.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&i.createElement(Q,null),e.map(((t,s)=>{const n=s===e.length-1;return i.createElement(X,{key:s,active:n,index:s,addMicrodata:!!t.href},i.createElement(J,{href:t.href,isLast:n},t.label))})))):null}var te=s(5290);function se(e){const{content:t}=e,{metadata:s,frontMatter:n,assets:r}=t,{keywords:o}=n,{description:a,title:l}=s,c=r.image??n.image;return i.createElement(z.d,{title:l,description:a,keywords:o,image:c})}function ie(e){const{content:t}=e,{metadata:s,frontMatter:r}=t,{hide_title:o,hide_table_of_contents:a,toc_min_heading_level:c,toc_max_heading_level:d}=r,{title:h}=s,u=!o&&void 0===t.contentTitle,p=(0,j.i)(),v=!a&&t.toc&&t.toc.length>0,g=v&&("desktop"===p||"ssr"===p);return i.createElement("div",{className:"row"},i.createElement("div",{className:(0,n.Z)("col",!a&&D)},i.createElement($,null),i.createElement("div",{className:G},i.createElement("article",null,i.createElement(ee,null),i.createElement(b,null),v&&i.createElement(Z,{toc:t.toc,minHeadingLevel:c,maxHeadingLevel:d,className:(0,n.Z)(m.k.docs.docTocMobile,W)}),i.createElement("div",{className:(0,n.Z)(m.k.docs.docMarkdown,"markdown")},u&&i.createElement("header",null,i.createElement(B.Z,{as:"h1"},h)),i.createElement(te.Z,null,i.createElement(t,null))),i.createElement(U,e)),i.createElement(l,{previous:s.previous,next:s.next}))),g&&i.createElement("div",{className:"col col--3"},i.createElement(k.Z,{toc:t.toc,minHeadingLevel:c,maxHeadingLevel:d,className:m.k.docs.docTocDesktop})))}function ne(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`;return i.createElement(z.FG,{className:t},i.createElement(se,e),i.createElement(ie,e))}},1575:(e,t,s)=>{s.d(t,{Z:()=>l});var i=s(7462),n=s(7294),r=s(6010),o=s(721);const a="tableOfContents_cNA8";function l(e){let{className:t,...s}=e;return n.createElement("div",{className:(0,r.Z)(a,"thin-scrollbar",t)},n.createElement(o.Z,(0,i.Z)({},s,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},721:(e,t,s)=>{s.d(t,{Z:()=>p});var i=s(7462),n=s(7294);function r(e){let{toc:t,className:s,linkClassName:i,isChild:o}=e;return t.length?n.createElement("ul",{className:o?void 0:s},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(r,{isChild:!0,toc:e.children,className:s,linkClassName:i}))))):null}const o=n.memo(r);var a=s(6668);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),s=Array(7).fill(-1);t.forEach(((e,t)=>{const i=s.slice(2,e.level);e.parentIndex=Math.max(...i),s[e.level]=t}));const i=[];return t.forEach((e=>{const{parentIndex:s,...n}=e;s>=0?t[s].children.push(n):i.push(n)})),i}function c(e){let{toc:t,minHeadingLevel:s,maxHeadingLevel:i}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:s,maxHeadingLevel:i});return function(e){return e.level>=s&&e.level<=i}(e)?[{...e,children:t}]:t}))}function d(e){const t=e.getBoundingClientRect();return t.top===t.bottom?d(e.parentNode):t}function h(e,t){let{anchorTopOffset:s}=t;const i=e.find((e=>d(e).top>=s));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(d(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function u(){const e=(0,n.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,n.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,n.useRef)(void 0),s=u();(0,n.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:n,minHeadingLevel:r,maxHeadingLevel:o}=e;function a(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),a=function(e){let{minHeadingLevel:t,maxHeadingLevel:s}=e;const i=[];for(let n=t;n<=s;n+=1)i.push(`h${n}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),l=h(a,{anchorTopOffset:s.current}),c=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,s){s?(t.current&&t.current!==e&&t.current?.classList.remove(n),e.classList.add(n),t.current=e):e.classList.remove(n)}(e,e===c)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,s])}function p(e){let{toc:t,className:s="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:d,minHeadingLevel:h,maxHeadingLevel:u,...p}=e;const v=(0,a.L)(),g=h??v.tableOfContents.minHeadingLevel,f=u??v.tableOfContents.maxHeadingLevel,_=function(e){let{toc:t,minHeadingLevel:s,maxHeadingLevel:i}=e;return(0,n.useMemo)((()=>c({toc:l(t),minHeadingLevel:s,maxHeadingLevel:i})),[t,s,i])}({toc:t,minHeadingLevel:g,maxHeadingLevel:f});return m((0,n.useMemo)((()=>{if(r&&d)return{linkClassName:r,linkActiveClassName:d,minHeadingLevel:g,maxHeadingLevel:f}}),[r,d,g,f])),n.createElement(o,(0,i.Z)({toc:_,className:s,linkClassName:r},p))}},4477:(e,t,s)=>{s.d(t,{E:()=>a,q:()=>o});var i=s(7294),n=s(902);const r=i.createContext(null);function o(e){let{children:t,version:s}=e;return i.createElement(r.Provider,{value:s},t)}function a(){const e=(0,i.useContext)(r);if(null===e)throw new n.i6("DocsVersionProvider");return e}},5251:(e,t,s)=>{s(7418);var i=s(7294),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;n=r("react.element"),t.Fragment=r("react.fragment")}var o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var i,r={},c=null,d=null;for(i in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,i)&&!l.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:n,type:e,key:c,ref:d,props:r,_owner:o.current}}t.jsx=c,t.jsxs=c},5893:(e,t,s)=>{e.exports=s(5251)},9861:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s(8071)}}]);
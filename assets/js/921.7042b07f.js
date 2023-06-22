"use strict";(self.webpackChunkhome=self.webpackChunkhome||[]).push([[921],{4921:(e,t,s)=>{const o="vertex",n="none",i="object";var r=s(9477);const a=e=>{const t=[];for(const s in e){const o=e[s];o&&!0===o.isNode&&t.push(s)}return t},c=e=>"number"==typeof e?"float":"boolean"==typeof e?"bool":!0===e?.isVector2?"vec2":!0===e?.isVector3?"vec3":!0===e?.isVector4?"vec4":!0===e?.isMatrix3?"mat3":!0===e?.isMatrix4?"mat4":!0===e?.isColor?"color":null,u=(e,...t)=>{const s=e?.slice(-4);return"color"===e?new r.Ilk(...t):"vec2"===s?new r.FM8(...t):"vec3"===s?new r.Pa4(...t):"vec4"===s?new r.Ltg(...t):"mat3"===s?new r.Vkp(...t):"mat4"===s?new r.yGw(...t):"bool"!==e&&("float"===e||"int"===e||"uint"===e?0:null)};let d=0;class l{constructor(e=null){this.nodeType=e,this.updateType=n,this.uuid=r.M8C.generateUUID(),Object.defineProperty(this,"id",{value:d++})}get type(){return this.constructor.name}getHash(){return this.uuid}getUpdateType(){return this.updateType}getNodeType(){return this.nodeType}update(){console.warn("Abstract function.")}generate(){console.warn("Abstract function.")}analyze(e){const t=this.getHash(e),s=e.getNodeFromHash(t);if(void 0!==s&&this!==s)return s.analyze(e);const o=e.getDataFromNode(this);o.dependenciesCount=void 0===o.dependenciesCount?1:o.dependenciesCount+1;const n=a(this);for(const i of n)this[i].analyze(e)}build(e,t=null){const s=this.getHash(e),o=e.getNodeFromHash(s);if(void 0!==o&&this!==o)return o.build(e,t);e.addNode(this),e.addStack(this);const n=e.getDataFromNode(this);let i=null;if(1===this.generate.length){const s=this.getNodeType(e);i=n.snippet,void 0===i&&(i=this.generate(e)||"",n.snippet=i),i=e.format(i,s,t)}else i=this.generate(e,t)||"";return e.removeStack(this),i}serialize(e){const t=a(this);if(t.length>0){const s={};for(const o of t)s[o]=this[o].toJSON(e.meta).uuid;e.inputNodes=s}}deserialize(e){if(void 0!==e.inputNodes){const t=e.meta.nodes;for(const s in e.inputNodes){const o=e.inputNodes[s];this[s]=t[o]}}}toJSON(e){const{uuid:t,type:s}=this,o=void 0===e||"string"==typeof e;o&&(e={textures:{},images:{},nodes:{}});let n=e.nodes[t];function i(e){const t=[];for(const s in e){const o=e[s];delete o.metadata,t.push(o)}return t}if(void 0===n&&(n={uuid:t,type:s,meta:e,metadata:{version:4.5,type:"Node",generator:"Node.toJSON"}},e.nodes[n.uuid]=n,this.serialize(n),delete n.meta),o){const t=i(e.textures),s=i(e.images),o=i(e.nodes);t.length>0&&(n.textures=t),s.length>0&&(n.images=s),o.length>0&&(n.nodes=o)}return n}}l.prototype.isNode=!0;const p=l;const h=class extends p{constructor(e,t=null){super(),this.node=e,this.name=t}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const t=this.getNodeType(e),s=this.node,n=this.name,i=e.getVaryFromNode(this,t);null!==n&&(i.name=n);const r=e.getPropertyName(i,o);return e.flowNodeFromShaderStage(o,s,t,r),e.getPropertyName(i)}};const g=class extends p{constructor(e,t){super(t),this._attributeName=e}getHash(e){return this.getAttributeName(e)}setAttributeName(e){return this._attributeName=e,this}getAttributeName(){return this._attributeName}generate(e){const t=e.getAttribute(this.getAttributeName(e),this.getNodeType(e));if(e.isShaderStage("vertex"))return t.name;return new h(this).build(e,t.type)}};class N extends p{constructor(e,t){super(),this.outputNode=e,this.callNode=t}getNodeType(e){return this.outputNode.getNodeType(e)}generate(e,t){const s=this.callNode.build(e,"void");return""!==s&&e.addFlowCode(s),this.outputNode.build(e,t)}}N.prototype.isBypassNode=!0;const T=N;class m extends p{constructor(e="",t="code"){super(t),this.code=e,this._includes=[]}setIncludes(e){return this._includes=e,this}getIncludes(){return this._includes}generate(e){const t=this.getIncludes(e);for(const o of t)o.build(e);const s=e.getCodeFromNode(this,this.getNodeType(e));return s.code=this.code,s.code}}m.prototype.isCodeNode=!0;const f=m;class y extends p{constructor(e,t={}){super(),this.node=e,this.context=t}getNodeType(e){return this.node.getNodeType(e)}generate(e,t){const s=e.getContext();e.setContext({...e.context,...this.context});const o=this.node.build(e,t);return e.setContext(s),o}}y.prototype.isContextNode=!0;const w=y;class I extends p{constructor(e){super(e)}build(e,t){const s=e.getVectorType(this.getNodeType(e,t)),o=e.getDataFromNode(this);if(void 0!==o.propertyName)return e.format(o.propertyName,s,t);if(!1!==e.context.temp&&"void "!==s&&"void"!==t&&o.dependenciesCount>1){const n=super.build(e,s),i=e.getVarFromNode(this,s),r=e.getPropertyName(i);return e.addFlowCode(`${r} = ${n}`),o.snippet=n,o.propertyName=r,e.format(o.propertyName,s,t)}return super.build(e,t)}}I.prototype.isTempNode=!0;const O=I;const R=class extends O{constructor(e="",t="void"){super(t),this.snipped=e}generate(e){const t=this.getNodeType(e),s=this.snipped;if("void"!==t)return`( ${s} )`;e.addFlowCode(s)}};const v=class extends O{constructor(e=null,t={}){super(),this.functionNode=e,this.parameters=t}setParameters(e){return this.parameters=e,this}getParameters(){return this.parameters}getNodeType(e){return this.functionNode.getNodeType(e)}generate(e){const t=[],s=this.functionNode,o=s.getInputs(e),n=this.parameters;for(const i of o){const s=n[i.name];if(void 0===s)throw new Error(`FunctionCallNode: Input '${i.name}' not found in FunctionNode.`);t.push(s.build(e,i.type))}return`${s.build(e,"property")}( ${t.join(", ")} )`}};class A extends p{constructor(){super("uint")}generate(e){return e.getInstanceIndex()}}A.prototype.isInstanceIndexNode=!0;const E=A;const M=class extends p{constructor(e=null,t="vec4"){super(t),this.name=e}getHash(e){return this.name||super.getHash(e)}generate(e){const t=e.getVarFromNode(this,this.getNodeType(e)),s=this.name;return null!==s&&(t.name=s),e.getPropertyName(t)}};class b extends p{constructor(e,t=null){super(t),this.value=e}getNodeType(){return null===this.nodeType?c(this.value):this.nodeType}getInputType(e){return this.getNodeType(e)}serialize(e){super.serialize(e),e.value=this.value?.toArray?.()||this.value,e.valueType=c(this.value),e.nodeType=this.nodeType}deserialize(e){super.deserialize(e),this.nodeType=e.nodeType,this.value=u(e.valueType),this.value=this.value?.fromArray?.(e.value)||e.value}generate(){console.warn("Abstract function.")}}b.prototype.isInputNode=!0;const x=b;class C extends x{getUniformHash(e){return this.getHash(e)}generate(e,t){const s=this.getNodeType(e),o=this.getUniformHash(e);let n=e.getNodeFromHash(o);void 0===n&&(e.setHashNode(this,o),n=this);const i=n.getInputType(e),r=e.getUniformFromNode(n,e.shaderStage,i),a=e.getPropertyName(r);return e.format(a,s,t)}}C.prototype.isUniformNode=!0;const S=C;class L extends O{constructor(e,t,s,...o){if(super(),this.op=e,o.length>0){let t=s;for(let s=0;s<o.length;s++)t=new L(e,t,o[s]);s=t}this.aNode=t,this.bNode=s}getNodeType(e,t){const s=this.op,o=this.aNode,n=this.bNode,i=o.getNodeType(e),r=n.getNodeType(e);if("void"===i||"void"===r)return"void";if("="===s||"%"===s)return i;if("&"===s||"|"===s||"^"===s||">>"===s||"<<"===s)return"int";if("=="===s||"&&"===s||"||"===s||"^^"===s)return"bool";if("<"===s||">"===s||"<="===s||">="===s){const s=e.getTypeLength(t);return s>1?`bvec${s}`:"bool"}return"float"===i&&e.isMatrix(r)?r:e.isMatrix(i)&&e.isVector(r)?e.getVectorFromMatrix(i):e.isVector(i)&&e.isMatrix(r)?e.getVectorFromMatrix(r):e.getTypeLength(r)>e.getTypeLength(i)?r:i}generate(e,t){const s=this.op,o=this.aNode,n=this.bNode,i=this.getNodeType(e,t);let r=null,a=null;"void"!==i?(r=o.getNodeType(e),a=n.getNodeType(e),"="===s?a=r:"<"===s||">"===s||"<="===s||">="===s?e.isVector(r)?a=r:r=a="float":e.isMatrix(r)&&e.isVector(a)?a=e.getVectorFromMatrix(r):r=e.isVector(r)&&e.isMatrix(a)?e.getVectorFromMatrix(a):a=i):r=a=i;const c=o.build(e,r),u=n.build(e,a),d=e.getTypeLength(t);return"void"!==t?"="===s?(e.addFlowCode(`${c} ${this.op} ${u}`),c):">"===s&&d>1?e.format(`${e.getMethod("greaterThan")}( ${c}, ${u} )`,i,t):"<="===s&&d>1?e.format(`${e.getMethod("lessThanEqual")}( ${c}, ${u} )`,i,t):e.format(`( ${c} ${this.op} ${u} )`,i,t):"void"!==r?e.format(`${c} ${this.op} ${u}`,i,t):void 0}serialize(e){super.serialize(e),e.op=this.op}deserialize(e){super.deserialize(e),this.op=e.op}}const P=L;const D=class extends p{constructor(e,t=null){super(),this.node=e,this.name=t}op(e,...t){return this.node=new P(e,this.node,...t),this}assign(...e){return this.op("=",...e)}add(...e){return this.op("+",...e)}sub(...e){return this.op("-",...e)}mul(...e){return this.op("*",...e)}div(...e){return this.op("/",...e)}getHash(e){return this.name||super.getHash(e)}getNodeType(e){return this.node.getNodeType(e)}generate(e){const t=this.node;if(!0===t.isTempNode)return t.build(e);const s=this.name,o=e.getVectorType(this.getNodeType(e)),n=t.build(e,o),i=e.getVarFromNode(this,o);null!==s&&(i.name=s);const r=e.getPropertyName(i);return e.addFlowCode(`${r} = ${n}`),r}};class _ extends S{constructor(e,t,s=0){super(e,t),this.bufferType=t,this.bufferCount=s}getInputType(){return"buffer"}}_.prototype.isBufferNode=!0;const F=_;class V extends p{static VIEW_MATRIX="viewMatrix";static NORMAL_MATRIX="normalMatrix";static WORLD_MATRIX="worldMatrix";static POSITION="position";static VIEW_POSITION="viewPosition";constructor(e=V.VIEW_MATRIX,t=null){super(),this.scope=e,this.object3d=t,this.updateType=i,this._uniformNode=new S(null)}getNodeType(){const e=this.scope;return e===V.WORLD_MATRIX||e===V.VIEW_MATRIX?"mat4":e===V.NORMAL_MATRIX?"mat3":e===V.POSITION||e===V.VIEW_POSITION?"vec3":void 0}update(e){const t=null!==this.object3d?this.object3d:e.object,s=this._uniformNode,o=e.camera,n=this.scope;n===V.VIEW_MATRIX?s.value=t.modelViewMatrix:n===V.NORMAL_MATRIX?s.value=t.normalMatrix:n===V.WORLD_MATRIX?s.value=t.matrixWorld:n===V.POSITION?s.value.setFromMatrixPosition(t.matrixWorld):n===V.VIEW_POSITION&&(s.value.setFromMatrixPosition(t.matrixWorld),s.value.applyMatrix4(o.matrixWorldInverse))}generate(e){const t=this.scope;return t===V.WORLD_MATRIX||t===V.VIEW_MATRIX?this._uniformNode.nodeType="mat4":t===V.NORMAL_MATRIX?this._uniformNode.nodeType="mat3":t!==V.POSITION&&t!==V.VIEW_POSITION||(this._uniformNode.nodeType="vec3",this._uniformNode.value=new r.Pa4),this._uniformNode.build(e)}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}const W=V;class z extends W{static PROJECTION_MATRIX="projectionMatrix";constructor(e=z.POSITION){super(e)}getNodeType(e){return this.scope===z.PROJECTION_MATRIX?"mat4":super.getNodeType(e)}update(e){const t=e.camera,s=this._uniformNode,o=this.scope;o===z.PROJECTION_MATRIX?s.value=t.projectionMatrix:o===z.VIEW_MATRIX?s.value=t.matrixWorldInverse:(this.object3d=t,super.update(e))}generate(e){return this.scope===z.PROJECTION_MATRIX&&(this._uniformNode.nodeType="mat4"),super.generate(e)}}const $=z;const X=class extends p{constructor(e,t,s=null){super(),this.property=e,this.uniformType=t,this.object=s,this.node=null,this.updateType=i,this.setNodeType(t)}setNodeType(e){this.node=new S(null,e),this.nodeType=e,"color"===e?this.nodeType="vec3":"texture"===e&&(this.nodeType="vec4")}getNodeType(){return this.uniformType}update(e){const t=(null!==this.object?this.object:e.object)[this.property];this.node.value=t}generate(e){return this.node.build(e,this.getNodeType(e))}};const H=class extends X{constructor(e,t,s=null){super(e,t,s),this.material=s}update(e){this.object=null!==this.material?this.material:e.material,super.update(e)}};class G extends p{static ALPHA_TEST="alphaTest";static COLOR="color";static OPACITY="opacity";static SPECULAR="specular";static ROUGHNESS="roughness";static METALNESS="metalness";constructor(e=G.COLOR){super(),this.scope=e}getNodeType(e){const t=this.scope,s=e.context.material;return t===G.COLOR?null!==s.map?"vec4":"vec3":t===G.OPACITY?"float":t===G.SPECULAR?"vec3":t===G.ROUGHNESS||t===G.METALNESS?"float":void 0}generate(e,t){const s=e.context.material,o=this.scope;let n=null;if(o===G.ALPHA_TEST)n=new H("alphaTest","float");else if(o===G.COLOR){const e=new H("color","color");n=null!==s.map&&void 0!==s.map&&!0===s.map.isTexture?new P("*",e,new H("map","texture")):e}else if(o===G.OPACITY){const e=new H("opacity","float");n=null!==s.alphaMap&&void 0!==s.alphaMap&&!0===s.alphaMap.isTexture?new P("*",e,new H("alphaMap","texture")):e}else if(o===G.SPECULAR){const e=new H("specularColor","color");n=null!==s.specularColorMap&&void 0!==s.specularColorMap&&!0===s.specularColorMap.isTexture?new P("*",e,new H("specularColorMap","texture")):e}else{const t=this.getNodeType(e);n=new H(o,t)}return n.build(e,t)}}const U=G;class j extends W{constructor(e=j.VIEW_MATRIX){super(e)}}const Y=j;const k=class extends p{constructor(e=[]){super(),this.nodes=e}getNodeType(e){return e.getTypeFromLength(this.nodes.reduce(((t,s)=>t+e.getTypeLength(s.getNodeType(e))),0))}generate(e){const t=this.getNodeType(e),s=this.nodes,o=[];for(let n=0;n<s.length;n++){const t=s[n].build(e);o.push(t)}return`${e.getType(t)}( ${o.join(", ")} )`}};class J{constructor(e,t,s,o){this.name=e,this.type=t,this.node=s,this.needsUpdate=o}get value(){return this.node.value}set value(e){this.node.value=e}}J.prototype.isNodeUniform=!0;class B{constructor(e,t){this.name=e,this.type=t}}B.prototype.isNodeAttribute=!0;class Z{constructor(e,t){this.name=e,this.type=t}}Z.prototype.isNodeVary=!0;class q{constructor(e,t){this.name=e,this.type=t}}q.prototype.isNodeVar=!0;const Q=["x","y","z","w"],K=new Map;K.set(1,"float"),K.set(2,"vec2"),K.set(3,"vec3"),K.set(4,"vec4"),K.set(9,"mat3"),K.set(16,"mat4");const ee=class extends p{constructor(e,t="x"){super(),this.node=e,this.components=t}getVectorLength(){let e=this.components.length;for(const t of this.components)e=Math.max(Q.indexOf(t)+1,e);return e}getNodeType(e){return e.getTypeFromLength(this.components.length)}generate(e){const t=this.node,s=e.getTypeLength(t.getNodeType(e));if(s>1){let o=null;this.getVectorLength()>=s&&(o=e.getTypeFromLength(this.getVectorLength()));return`${t.build(e,o)}.${this.components}`}return t.build(e)}serialize(e){super.serialize(e),e.components=this.components}deserialize(e){super.deserialize(e),this.components=e.components}};class te extends O{static RADIANS="radians";static DEGREES="degrees";static EXP="exp";static EXP2="exp2";static LOG="log";static LOG2="log2";static SQRT="sqrt";static INVERSE_SQRT="inversesqrt";static FLOOR="floor";static CEIL="ceil";static NORMALIZE="normalize";static FRACT="fract";static SIN="sin";static COS="cos";static TAN="tan";static ASIN="asin";static ACOS="acos";static ATAN="atan";static ABS="abs";static SIGN="sign";static LENGTH="length";static NEGATE="negate";static INVERT="invert";static DFDX="dFdx";static DFDY="dFdy";static SATURATE="saturate";static ROUND="round";static MIN="min";static MAX="max";static MOD="mod";static STEP="step";static REFLECT="reflect";static DISTANCE="distance";static DOT="dot";static CROSS="cross";static POW="pow";static TRANSFORM_DIRECTION="transformDirection";static MIX="mix";static CLAMP="clamp";static REFRACT="refract";static SMOOTHSTEP="smoothstep";static FACEFORWARD="faceforward";constructor(e,t,s=null,o=null){super(),this.method=e,this.aNode=t,this.bNode=s,this.cNode=o}getInputType(e){const t=this.aNode.getNodeType(e),s=this.bNode?this.bNode.getNodeType(e):null,o=this.cNode?this.cNode.getNodeType(e):null,n=e.isMatrix(t)?0:e.getTypeLength(t),i=e.isMatrix(s)?0:e.getTypeLength(s),r=e.isMatrix(o)?0:e.getTypeLength(o);return n>i&&n>r?t:i>r?s:r>n?o:t}getNodeType(e){const t=this.method;return t===te.LENGTH||t===te.DISTANCE||t===te.DOT?"float":t===te.CROSS?"vec3":this.getInputType(e)}generate(e,t){const s=this.method,o=this.getNodeType(e),n=this.getInputType(e),i=this.aNode,r=this.bNode,a=this.cNode,c=!0===e.renderer.isWebGLRenderer;if(!c||s!==te.DFDX&&s!==te.DFDY||"vec3"!==t){if(s===te.TRANSFORM_DIRECTION){let t=i,s=r;e.isMatrix(t.getNodeType(e))?s=new R(`${e.getType("vec4")}( ${s.build(e,"vec3")}, 0.0 )`,"vec4"):t=new R(`${e.getType("vec4")}( ${t.build(e,"vec3")}, 0.0 )`,"vec4");const o=new ee(new P("*",t,s),"xyz");return new te(te.NORMALIZE,o).build(e)}if(s===te.SATURATE)return e.format(`clamp( ${i.build(e,n)}, 0.0, 1.0 )`,o,t);if(s===te.NEGATE)return e.format("( -"+i.build(e,n)+" )",o,t);if(s===te.INVERT)return e.format("( 1.0 - "+i.build(e,n)+" )",o,t);{const u=[];return s===te.CROSS?u.push(i.build(e,o),r.build(e,o)):s===te.STEP?u.push(i.build(e,1===e.getTypeLength(i.getNodeType(e))?"float":n),r.build(e,n)):c&&(s===te.MIN||s===te.MAX)||s===te.MOD?u.push(i.build(e,n),r.build(e,1===e.getTypeLength(r.getNodeType(e))?"float":n)):s===te.REFRACT?u.push(i.build(e,n),r.build(e,n),a.build(e,"float")):s===te.MIX?u.push(i.build(e,n),r.build(e,n),a.build(e,1===e.getTypeLength(a.getNodeType(e))?"float":n)):(u.push(i.build(e,n)),null!==a?u.push(r.build(e,n),a.build(e,n)):null!==r&&u.push(r.build(e,n))),e.format(`${e.getMethod(s)}( ${u.join(", ")} )`,o,t)}}return new k([new te(s,new ee(i,"x")),new te(s,new ee(i,"y")),new te(s,new ee(i,"z"))]).build(e)}serialize(e){super.serialize(e),e.method=this.method}deserialize(e){super.deserialize(e),this.method=e.method}}const se=te;class oe extends p{static GEOMETRY="geometry";static LOCAL="local";static WORLD="world";static VIEW="view";static VIEW_DIRECTION="viewDirection";constructor(e=oe.LOCAL){super("vec3"),this.scope=e}getHash(){return`position-${this.scope}`}generate(e){const t=this.scope;let s=null;if(t===oe.GEOMETRY)s=new g("position","vec3");else if(t===oe.LOCAL)s=new h(new oe(oe.GEOMETRY));else if(t===oe.WORLD){const e=new se(se.TRANSFORM_DIRECTION,new Y(Y.WORLD_MATRIX),new oe(oe.LOCAL));s=new h(e)}else if(t===oe.VIEW){const e=new P("*",new Y(Y.VIEW_MATRIX),new oe(oe.LOCAL));s=new h(e)}else if(t===oe.VIEW_DIRECTION){const e=new se(se.NEGATE,new oe(oe.VIEW));s=new se(se.NORMALIZE,new h(e))}return s.build(e,this.getNodeType(e))}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}const ne=oe;const ie=class extends p{constructor(e=new ne){super("vec4"),this.position=e}generate(e){const t=this.position,s=new P("*",new $($.PROJECTION_MATRIX),new Y(Y.VIEW_MATRIX));return new P("*",s,t).build(e)}};class re extends p{static GEOMETRY="geometry";static LOCAL="local";static WORLD="world";static VIEW="view";constructor(e=re.LOCAL){super("vec3"),this.scope=e}getHash(){return`normal-${this.scope}`}generate(e){const t=this.scope;let s=null;if(t===re.GEOMETRY)s=new g("normal","vec3");else if(t===re.LOCAL)s=new h(new re(re.GEOMETRY));else if(t===re.VIEW){const e=new P("*",new Y(Y.NORMAL_MATRIX),new re(re.LOCAL));s=new se(se.NORMALIZE,new h(e))}else if(t===re.WORLD){const e=new se(se.TRANSFORM_DIRECTION,new re(re.VIEW),new $($.VIEW_MATRIX));s=new se(se.NORMALIZE,new h(e))}return s.build(e)}serialize(e){super.serialize(e),e.scope=this.scope}deserialize(e){super.deserialize(e),this.scope=e.scope}}const ae=re;class ce extends p{constructor(){super("vec2")}generate(){return"vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y )"}}ce.prototype.isPointUVNode=!0;const ue=ce;class de extends F{constructor(e,t,s=0){super(e,t,s)}getInputType(){return"storageBuffer"}}de.prototype.isStorageBufferNode=!0;class le extends g{constructor(e=0){super(null,"vec2"),this.index=e}getAttributeName(){const e=this.index;return"uv"+(e>0?e+1:"")}serialize(e){super.serialize(e),e.index=this.index}deserialize(e){super.deserialize(e),this.index=e.index}}le.prototype.isUVNode=!0;const pe=le;class he extends S{constructor(e,t=new pe,s=null){super(e,"vec4"),this.uvNode=t,this.biasNode=s}getUniformHash(){return this.value.uuid}getInputType(){return"texture"}generate(e,t){const s=this.value;if(!s||!0!==s.isTexture)throw new Error("TextureNode: Need a three.js texture.");const o=super.generate(e,"texture");if("sampler"===t)return o+"_sampler";if(e.isReference(t))return o;{const s=e.getDataFromNode(this);let n=s.snippet;if(void 0===n){const t=this.uvNode.build(e,"vec2"),i=this.biasNode;if(null!==i){const s=i.build(e,"float");n=e.getTextureBias(o,t,s)}else n=e.getTexture(o,t);s.snippet=n}return e.format(n,"vec4",t)}}serialize(e){super.serialize(e),e.value=this.value.toJSON(e.meta).uuid}deserialize(e){super.deserialize(e),this.value=e.meta.textures[e.value]}}he.prototype.isTextureNode=!0;const ge=he;class Ne extends p{constructor(){super("bool")}generate(e){return e.getFrontFacing()}}Ne.prototype.isFrontFacingNode=!0;const Te=Ne;class me extends p{constructor(e,t,s=[64]){super("void"),this.computeNode=e,this.count=t,this.workgroupSize=s,this.dispatchCount=0,this.updateType=i,this.updateDispatchCount()}updateDispatchCount(){const{count:e,workgroupSize:t}=this;let s=t[0];for(let o=1;o<t.length;o++)s*=t[o];this.dispatchCount=Math.ceil(e/s)}update({renderer:e}){e.compute(this)}generate(e){const{shaderStage:t}=e;if("compute"===t){const t=this.computeNode.build(e,"void");""!==t&&e.addFlowCode(t)}}}me.prototype.isComputeNode=!0;const fe=class extends p{constructor(e,t,s){super(),this.condNode=e,this.ifNode=t,this.elseNode=s}getNodeType(e){const t=this.ifNode.getNodeType(e),s=this.elseNode.getNodeType(e);return e.getTypeLength(s)>e.getTypeLength(t)?s:t}generate(e){const t=this.getNodeType(e),s={temp:!1},o=new M(null,t).build(e),n=new w(this.condNode).build(e,"bool"),i=new w(this.ifNode,s).build(e,t),r=new w(this.elseNode,s).build(e,t);return e.addFlowCode(`if ( ${n} ) {\n\n\t\t${o} = ${i};\n\n\t} else {\n\n\t\t${o} = ${r};\n\n\t}`),o}};const ye=class extends p{constructor(){super("vec3"),this.directDiffuse=new D(new S(new r.Pa4),"DirectDiffuse"),this.directSpecular=new D(new S(new r.Pa4),"DirectSpecular"),this.indirectDiffuse=new D(new S(new r.Pa4),"IndirectDiffuse"),this.indirectSpecular=new D(new S(new r.Pa4),"IndirectSpecular")}generate(e){const{directDiffuse:t,directSpecular:s,indirectDiffuse:o,indirectSpecular:n}=this;return new P("+",t,s,o,n).build(e)}};const we=class extends p{constructor(e,t){super(),this.node=e,this.indexNode=t}getNodeType(e){return this.node.getNodeType(e)}generate(e){return`${this.node.build(e)}[ ${this.indexNode.build(e,"uint")} ]`}};const Ie=class extends p{constructor(e,t){super(),this.node=e,this.convertTo=t}getNodeType(){return this.convertTo}generate(e){const t=this.convertTo,s=this.node;if(!1===e.isReference(t)){const o=s.build(e,t);return e.format(o,this.getNodeType(e),t)}return s.build(e,t)}};class Oe extends x{generateConst(e){return e.getConst(this.getNodeType(e),this.value)}generate(e,t){const s=this.getNodeType(e);return e.format(this.generateConst(e),s,t)}}Oe.prototype.isConstNode=!0;const Re=Oe,ve={construct(e,t){const s=t.shift();return e(Se(s),...t)},get:function(e,t){if("string"==typeof t&&void 0===e[t]){if(!0===/^[xyzwrgbastpq]{1,4}$/.test(t))return t=t.replace(/r|s/g,"x").replace(/g|t/g,"y").replace(/b|p/g,"z").replace(/a|q/g,"w"),Ce(new ee(e,t));if(!0===/^\d+$/.test(t))return Ce(new we(e,new Re(Number(t),"uint")))}return e[t]}},Ae=new WeakMap,Ee=function(e){for(const t in e)e[t]=Ce(e[t]);return e},Me=function(e){const t=e.length;for(let s=0;s<t;s++)e[s]=Ce(e[s]);return e},be=function(e,t=null,s=null){return null===t?(...t)=>Ce(new e(...Le(t))):null===s?(...s)=>Ce(new e(t,...Le(s))):(s=Ce(s),(...o)=>Ce(new e(t,...Le(o),s)))},xe=function(e,...t){return Ce(new e(...Le(t)))},Ce=(new Proxy((function(e){const t={build:e=>(t.call({},e),""),call:(t,s)=>(t=Se(t),Ce(e(t,s)))};return t}),ve),e=>function(e){const t=typeof e;if("number"===t||"boolean"===t)return Ce(je(e));if("object"===t&&!0===e?.isNode){let t=Ae.get(e);return void 0===t&&(t=new Proxy(e,ve),Ae.set(e,t),Ae.set(t,t)),t}return e}(e)),Se=e=>new Ee(e),Le=e=>new Me(e),Pe=(...e)=>new be(...e),De=(...e)=>new xe(...e),_e=[!1,!0],Fe=[0,1,2,3],Ve=[-1,-2],We=[.5,1.5,1/3,1e-6,1e6,Math.PI,2*Math.PI,1/Math.PI,2/Math.PI,1/(2*Math.PI),Math.PI/2],ze=new Map;for(let tt of _e)ze.set(tt,new Re(tt));const $e=new Map;for(let tt of Fe)$e.set(tt,new Re(tt,"uint"));const Xe=new Map([...$e].map((e=>new Re(e.value,"int"))));for(let tt of Ve)Xe.set(tt,new Re(tt,"int"));const He=new Map([...Xe].map((e=>new Re(e.value))));for(let tt of We)He.set(tt,new Re(tt));for(let tt of We)He.set(-tt,new Re(-tt));const Ge={bool:ze,uint:$e,ints:Xe,float:He},Ue=new Map([...ze,...He]),je=e=>Ue.has(e)?Ue.get(e):!0===e.isNode?e:new Re(e),Ye=function(e,t=null){return(...s)=>{if(0===s.length)return Ce(new Re(u(e),e));{if("color"===e&&!0!==s[0].isNode&&(s=[u(e,...s)]),1===s.length&&null!==t&&t.has(s[0]))return t.get(s[0]);const o=s.map(je);return 1===o.length?Ce(o[0].nodeType===e?o[0]:new Ie(o[0],e)):Ce(new Ie(new k(o),e))}}},ke=(new Ye("color"),new Ye("float",Ge.float)),Je=(new Ye("int",Ge.int),new Ye("uint",Ge.uint),new Ye("bool",Ge.bool),new Ye("vec2"),new Ye("ivec2"),new Ye("uvec2"),new Ye("bvec2"),new Ye("vec3"),new Ye("ivec3"),new Ye("uvec3"),new Ye("bvec3"),new Ye("vec4"),new Ye("ivec4"),new Ye("uvec4"),new Ye("bvec4"),new Ye("mat3"),new Ye("imat3"),new Ye("umat3"),new Ye("bmat3"),new Ye("mat4"),new Ye("imat4"),new Ye("umat4"),new Ye("bmat4"),Pe(T),Pe(f),Pe(w),Pe(R),Pe(v),De(E),Pe(D),Pe(h),De($,$.PROJECTION_MATRIX),De($,$.VIEW_MATRIX),De($,$.NORMAL_MATRIX),De($,$.WORLD_MATRIX),De($,$.POSITION),De(U,U.ALPHA_TEST),De(U,U.COLOR),De(U,U.OPACITY),De(U,U.SPECULAR),De(U,U.ROUGHNESS),De(U,U.METALNESS),De(M,"DiffuseColor","vec4"),De(M,"Roughness","float"),De(M,"Metalness","float"),De(M,"AlphaTest","float"),De(M,"SpecularColor","color"),Pe(ie),De(ae,ae.GEOMETRY),De(ae,ae.LOCAL),De(ae,ae.WORLD),De(ae,ae.VIEW)),Be=De(D,Je,"TransformedNormalView"),Ze=(Pe(W,W.VIEW_MATRIX),Pe(W,W.NORMAL_MATRIX),Pe(W,W.WORLD_MATRIX),Pe(W,W.POSITION),Pe(W,W.VIEW_POSITION),De(ne,ne.GEOMETRY),De(ne,ne.LOCAL),De(ne,ne.WORLD),De(ne,ne.VIEW),De(ne,ne.VIEW_DIRECTION)),qe=(Pe(ge),De(ue),ke(1e-6),ke(1e6),Pe(fe),Pe(P,"+"),Pe(P,"-")),Qe=Pe(P,"*"),Ke=(Pe(P,"/"),Pe(P,"%"),Pe(P,"=="),Pe(P,"="),Pe(P,"<"),Pe(P,">"),Pe(P,"<="),Pe(P,">="),Pe(P,"&&"),Pe(P,"||"),Pe(P,"^^"),Pe(P,"&"),Pe(P,"|"),Pe(P,"^"),Pe(P,"<<"),Pe(P,">>"),Pe(se,se.RADIANS),Pe(se,se.DEGREES),Pe(se,se.EXP),Pe(se,se.EXP2),Pe(se,se.LOG),Pe(se,se.LOG2),Pe(se,se.SQRT),Pe(se,se.INVERSE_SQRT),Pe(se,se.FLOOR),Pe(se,se.CEIL),Pe(se,se.NORMALIZE),Pe(se,se.FRACT),Pe(se,se.SIN),Pe(se,se.COS),Pe(se,se.TAN),Pe(se,se.ASIN),Pe(se,se.ACOS),Pe(se,se.ATAN),Pe(se,se.ABS),Pe(se,se.SIGN),Pe(se,se.LENGTH),Pe(se,se.NEGATE),Pe(se,se.INVERT),Pe(se,se.DFDX),Pe(se,se.DFDY),Pe(se,se.SATURATE)),et=(Pe(se,se.ROUND),Pe(se,se.MIN),Pe(se,se.MAX),Pe(se,se.MOD),Pe(se,se.STEP),Pe(se,se.REFLECT),Pe(se,se.DISTANCE),Pe(se,se.DOT));Pe(se,se.CROSS),Pe(se,se.POW),Pe(se,se.POW,2),Pe(se,se.POW,3),Pe(se,se.POW,4),Pe(se,se.TRANSFORM_DIRECTION),Pe(se,se.MIX),Pe(se,se.CLAMP),Pe(se,se.REFRACT),Pe(se,se.SMOOTHSTEP),Pe(se,se.FACEFORWARD),qe(Qe(ke(De(Te)),2),1),Pe(ye),Pe(we),Ke(et(Be,Ze))}}]);
import{u as G,s as U,a2 as K,a3 as q,B as W,a4 as X,m as Y}from"./entry.52bcafe8.js";var j;const g=typeof window<"u",Z=e=>typeof e=="function",k=e=>typeof e=="string",ee=()=>{};g&&((j=window?.navigator)==null?void 0:j.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function x(e){return typeof e=="function"?e():G(e)}function te(e,t){function r(...n){e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})}return r}const J=e=>e();function re(e=J){const t=U(!0);function r(){t.value=!1}function n(){t.value=!0}return{isActive:t,pause:r,resume:n,eventFilter:(...s)=>{t.value&&e(...s)}}}function ne(e){return e}function ae(e){return K()?(q(e),!0):!1}var M=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,ie=(e,t)=>{var r={};for(var n in e)oe.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&M)for(var n of M(e))t.indexOf(n)<0&&se.call(e,n)&&(r[n]=e[n]);return r};function le(e,t,r={}){const n=r,{eventFilter:o=J}=n,s=ie(n,["eventFilter"]);return W(e,te(o,t),s)}var ue=Object.defineProperty,fe=Object.defineProperties,pe=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,N=(e,t,r)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ce=(e,t)=>{for(var r in t||(t={}))L.call(t,r)&&N(e,r,t[r]);if(m)for(var r of m(t))R.call(t,r)&&N(e,r,t[r]);return e},de=(e,t)=>fe(e,pe(t)),we=(e,t)=>{var r={};for(var n in e)L.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&m)for(var n of m(e))t.indexOf(n)<0&&R.call(e,n)&&(r[n]=e[n]);return r};function Oe(e,t,r={}){const n=r,{eventFilter:o}=n,s=we(n,["eventFilter"]),{eventFilter:c,pause:O,resume:v,isActive:u}=re(o);return{stop:le(e,t,de(ce({},s),{eventFilter:c})),pause:O,resume:v,isActive:u}}function ve(e){var t;const r=x(e);return(t=r?.$el)!=null?t:r}const h=g?window:void 0;g&&window.document;g&&window.navigator;g&&window.location;function ye(...e){let t,r,n,o;if(k(e[0])||Array.isArray(e[0])?([r,n,o]=e,t=h):[t,r,n,o]=e,!t)return ee;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const s=[],c=()=>{s.forEach(i=>i()),s.length=0},O=(i,f,d)=>(i.addEventListener(f,d,o),()=>i.removeEventListener(f,d,o)),v=W(()=>ve(t),i=>{c(),i&&s.push(...r.flatMap(f=>n.map(d=>O(i,f,d))))},{immediate:!0,flush:"post"}),u=()=>{v(),c()};return ae(u),u}const P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},I="__vueuse_ssr_handlers__";P[I]=P[I]||{};const ge=P[I];function _e(e,t){return ge[e]||t}function Se(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var me=Object.defineProperty,F=Object.getOwnPropertySymbols,he=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable,A=(e,t,r)=>t in e?me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,D=(e,t)=>{for(var r in t||(t={}))he.call(t,r)&&A(e,r,t[r]);if(F)for(var r of F(t))be.call(t,r)&&A(e,r,t[r]);return e};const Pe={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Ie(e,t,r,n={}){var o;const{flush:s="pre",deep:c=!0,listenToStorageChanges:O=!0,writeDefaults:v=!0,mergeDefaults:u=!1,shallow:i,window:f=h,eventFilter:d,onError:b=a=>{console.error(a)}}=n,w=(i?X:U)(t);if(!r)try{r=_e("getDefaultStorage",()=>{var a;return(a=h)==null?void 0:a.localStorage})()}catch(a){b(a)}if(!r)return w;const p=x(t),E=Se(p),_=(o=n.serializer)!=null?o:Pe[E],{pause:V,resume:z}=Oe(w,()=>B(w.value),{flush:s,deep:c,eventFilter:d});return f&&O&&ye(f,"storage",$),$(),w;function B(a){try{a==null?r.removeItem(e):r.setItem(e,_.write(a))}catch(l){b(l)}}function H(a){V();try{const l=a?a.newValue:r.getItem(e);if(l==null)return v&&p!==null&&r.setItem(e,_.write(p)),p;if(!a&&u){const S=_.read(l);return Z(u)?u(S,p):E==="object"&&!Array.isArray(S)?D(D({},p),S):S}else return typeof l!="string"?l:_.read(l)}catch(l){b(l)}finally{z()}}function $(a){if(!(a&&a.storageArea!==r)){if(a&&a.key===null){w.value=p;return}a&&a.key!==e||(w.value=H(a))}}}function y(e,t,r={}){const{window:n=h}=r;return Ie(e,t,n?.localStorage,r)}var C;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(C||(C={}));var Ee=Object.defineProperty,Q=Object.getOwnPropertySymbols,$e=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,T=(e,t,r)=>t in e?Ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Me=(e,t)=>{for(var r in t||(t={}))$e.call(t,r)&&T(e,r,t[r]);if(Q)for(var r of Q(t))je.call(t,r)&&T(e,r,t[r]);return e};const Ne={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Me({linear:ne},Ne);const Ae=Y({id:"site",state:()=>({colorMode:"dark",fileUploadEnabled:!0,showOnlyMasterPosts:y("showOnlyMasterPosts","false"),slippage:"0.5",swapDeadline:"20"}),getters:{getColorMode(e){const t=y("colorMode",null);return t.value&&(e.colorMode=t.value),e.colorMode},getFileUploadEnabled(e){return e.fileUploadEnabled},getShowOnlyMasterPosts(e){const t=y("showOnlyMasterPosts",null);return t.value&&(e.showOnlyMasterPosts=t.value),e.showOnlyMasterPosts},getSlippage(e){const t=y("swapSlippage","0.5");return t.value&&(e.slippage=t.value),e.slippage},getSwapDeadline(e){const t=y("swapDeadline","20");return t.value&&(e.swapDeadline=t.value),e.swapDeadline}},actions:{setColorMode(e){this.colorMode=e,localStorage.setItem("colorMode",e)},setFileUploadEnabled(e){this.fileUploadEnabled=e},setShowOnlyMasterPosts(e){this.showOnlyMasterPosts=e,localStorage.setItem("showOnlyMasterPosts",e)},setSlippage(e){this.slippage=e,localStorage.setItem("swapSlippage",e)},setSwapDeadline(e){this.swapDeadline=e,localStorage.setItem("swapDeadline",e)}}});export{Ae as u};

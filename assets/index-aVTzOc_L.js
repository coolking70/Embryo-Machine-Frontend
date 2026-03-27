var Om=Object.defineProperty;var Km=(e,n,t)=>n in e?Om(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var Qe=(e,n,t)=>Km(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function Jm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var eu={exports:{}},Uo={},nu={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xa=Symbol.for("react.element"),Bm=Symbol.for("react.portal"),Fm=Symbol.for("react.fragment"),Gm=Symbol.for("react.strict_mode"),Um=Symbol.for("react.profiler"),Hm=Symbol.for("react.provider"),Wm=Symbol.for("react.context"),Zm=Symbol.for("react.forward_ref"),Ym=Symbol.for("react.suspense"),Xm=Symbol.for("react.memo"),Qm=Symbol.for("react.lazy"),ic=Symbol.iterator;function qm(e){return e===null||typeof e!="object"?null:(e=ic&&e[ic]||e["@@iterator"],typeof e=="function"?e:null)}var tu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ru=Object.assign,au={};function fr(e,n,t){this.props=e,this.context=n,this.refs=au,this.updater=t||tu}fr.prototype.isReactComponent={};fr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ou(){}ou.prototype=fr.prototype;function Ys(e,n,t){this.props=e,this.context=n,this.refs=au,this.updater=t||tu}var Xs=Ys.prototype=new ou;Xs.constructor=Ys;ru(Xs,fr.prototype);Xs.isPureReactComponent=!0;var sc=Array.isArray,iu=Object.prototype.hasOwnProperty,Qs={current:null},su={key:!0,ref:!0,__self:!0,__source:!0};function lu(e,n,t){var r,a={},o=null,s=null;if(n!=null)for(r in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=""+n.key),n)iu.call(n,r)&&!su.hasOwnProperty(r)&&(a[r]=n[r]);var c=arguments.length-2;if(c===1)a.children=t;else if(1<c){for(var d=Array(c),u=0;u<c;u++)d[u]=arguments[u+2];a.children=d}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)a[r]===void 0&&(a[r]=c[r]);return{$$typeof:xa,type:e,key:o,ref:s,props:a,_owner:Qs.current}}function ef(e,n){return{$$typeof:xa,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function qs(e){return typeof e=="object"&&e!==null&&e.$$typeof===xa}function nf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var lc=/\/+/g;function mi(e,n){return typeof e=="object"&&e!==null&&e.key!=null?nf(""+e.key):n.toString(36)}function qa(e,n,t,r,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case xa:case Bm:s=!0}}if(s)return s=e,a=a(s),e=r===""?"."+mi(s,0):r,sc(a)?(t="",e!=null&&(t=e.replace(lc,"$&/")+"/"),qa(a,n,t,"",function(u){return u})):a!=null&&(qs(a)&&(a=ef(a,t+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(lc,"$&/")+"/")+e)),n.push(a)),1;if(s=0,r=r===""?".":r+":",sc(e))for(var c=0;c<e.length;c++){o=e[c];var d=r+mi(o,c);s+=qa(o,n,t,d,a)}else if(d=qm(e),typeof d=="function")for(e=d.call(e),c=0;!(o=e.next()).done;)o=o.value,d=r+mi(o,c++),s+=qa(o,n,t,d,a);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function Ca(e,n,t){if(e==null)return e;var r=[],a=0;return qa(e,r,"","",function(o){return n.call(t,o,a++)}),r}function tf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Be={current:null},eo={transition:null},rf={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:eo,ReactCurrentOwner:Qs};function cu(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:Ca,forEach:function(e,n,t){Ca(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Ca(e,function(){n++}),n},toArray:function(e){return Ca(e,function(n){return n})||[]},only:function(e){if(!qs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=fr;re.Fragment=Fm;re.Profiler=Um;re.PureComponent=Ys;re.StrictMode=Gm;re.Suspense=Ym;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rf;re.act=cu;re.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ru({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=Qs.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in n)iu.call(n,d)&&!su.hasOwnProperty(d)&&(r[d]=n[d]===void 0&&c!==void 0?c[d]:n[d])}var d=arguments.length-2;if(d===1)r.children=t;else if(1<d){c=Array(d);for(var u=0;u<d;u++)c[u]=arguments[u+2];r.children=c}return{$$typeof:xa,type:e.type,key:a,ref:o,props:r,_owner:s}};re.createContext=function(e){return e={$$typeof:Wm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Hm,_context:e},e.Consumer=e};re.createElement=lu;re.createFactory=function(e){var n=lu.bind(null,e);return n.type=e,n};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:Zm,render:e}};re.isValidElement=qs;re.lazy=function(e){return{$$typeof:Qm,_payload:{_status:-1,_result:e},_init:tf}};re.memo=function(e,n){return{$$typeof:Xm,type:e,compare:n===void 0?null:n}};re.startTransition=function(e){var n=eo.transition;eo.transition={};try{e()}finally{eo.transition=n}};re.unstable_act=cu;re.useCallback=function(e,n){return Be.current.useCallback(e,n)};re.useContext=function(e){return Be.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return Be.current.useDeferredValue(e)};re.useEffect=function(e,n){return Be.current.useEffect(e,n)};re.useId=function(){return Be.current.useId()};re.useImperativeHandle=function(e,n,t){return Be.current.useImperativeHandle(e,n,t)};re.useInsertionEffect=function(e,n){return Be.current.useInsertionEffect(e,n)};re.useLayoutEffect=function(e,n){return Be.current.useLayoutEffect(e,n)};re.useMemo=function(e,n){return Be.current.useMemo(e,n)};re.useReducer=function(e,n,t){return Be.current.useReducer(e,n,t)};re.useRef=function(e){return Be.current.useRef(e)};re.useState=function(e){return Be.current.useState(e)};re.useSyncExternalStore=function(e,n,t){return Be.current.useSyncExternalStore(e,n,t)};re.useTransition=function(){return Be.current.useTransition()};re.version="18.3.1";nu.exports=re;var j=nu.exports;const af=Jm(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var of=j,sf=Symbol.for("react.element"),lf=Symbol.for("react.fragment"),cf=Object.prototype.hasOwnProperty,df=of.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,uf={key:!0,ref:!0,__self:!0,__source:!0};function du(e,n,t){var r,a={},o=null,s=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(s=n.ref);for(r in n)cf.call(n,r)&&!uf.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)a[r]===void 0&&(a[r]=n[r]);return{$$typeof:sf,type:e,key:o,ref:s,props:a,_owner:df.current}}Uo.Fragment=lf;Uo.jsx=du;Uo.jsxs=du;eu.exports=Uo;var i=eu.exports,Bi={},uu={exports:{}},rn={},pu={exports:{}},mu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(N,V){var B=N.length;N.push(V);e:for(;0<B;){var z=B-1>>>1,R=N[z];if(0<a(R,V))N[z]=V,N[B]=R,B=z;else break e}}function t(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var V=N[0],B=N.pop();if(B!==V){N[0]=B;e:for(var z=0,R=N.length,W=R>>>1;z<W;){var Q=2*(z+1)-1,ee=N[Q],te=Q+1,Z=N[te];if(0>a(ee,B))te<R&&0>a(Z,ee)?(N[z]=Z,N[te]=B,z=te):(N[z]=ee,N[Q]=B,z=Q);else if(te<R&&0>a(Z,B))N[z]=Z,N[te]=B,z=te;else break e}}return V}function a(N,V){var B=N.sortIndex-V.sortIndex;return B!==0?B:N.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,c=s.now();e.unstable_now=function(){return s.now()-c}}var d=[],u=[],p=1,m=null,h=3,g=!1,f=!1,y=!1,I=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(N){for(var V=t(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=N)r(u),V.sortIndex=V.expirationTime,n(d,V);else break;V=t(u)}}function k(N){if(y=!1,b(N),!f)if(t(d)!==null)f=!0,K(T);else{var V=t(u);V!==null&&U(k,V.startTime-N)}}function T(N,V){f=!1,y&&(y=!1,v(C),C=-1),g=!0;var B=h;try{for(b(V),m=t(d);m!==null&&(!(m.expirationTime>V)||N&&!w());){var z=m.callback;if(typeof z=="function"){m.callback=null,h=m.priorityLevel;var R=z(m.expirationTime<=V);V=e.unstable_now(),typeof R=="function"?m.callback=R:m===t(d)&&r(d),b(V)}else r(d);m=t(d)}if(m!==null)var W=!0;else{var Q=t(u);Q!==null&&U(k,Q.startTime-V),W=!1}return W}finally{m=null,h=B,g=!1}}var M=!1,E=null,C=-1,$=5,D=-1;function w(){return!(e.unstable_now()-D<$)}function L(){if(E!==null){var N=e.unstable_now();D=N;var V=!0;try{V=E(!0,N)}finally{V?P():(M=!1,E=null)}}else M=!1}var P;if(typeof x=="function")P=function(){x(L)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,Y=G.port2;G.port1.onmessage=L,P=function(){Y.postMessage(null)}}else P=function(){I(L,0)};function K(N){E=N,M||(M=!0,P())}function U(N,V){C=I(function(){N(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){f||g||(f=!0,K(T))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(d)},e.unstable_next=function(N){switch(h){case 1:case 2:case 3:var V=3;break;default:V=h}var B=h;h=V;try{return N()}finally{h=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,V){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var B=h;h=N;try{return V()}finally{h=B}},e.unstable_scheduleCallback=function(N,V,B){var z=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?z+B:z):B=z,N){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=B+R,N={id:p++,callback:V,priorityLevel:N,startTime:B,expirationTime:R,sortIndex:-1},B>z?(N.sortIndex=B,n(u,N),t(d)===null&&N===t(u)&&(y?(v(C),C=-1):y=!0,U(k,B-z))):(N.sortIndex=R,n(d,N),f||g||(f=!0,K(T))),N},e.unstable_shouldYield=w,e.unstable_wrapCallback=function(N){var V=h;return function(){var B=h;h=V;try{return N.apply(this,arguments)}finally{h=B}}}})(mu);pu.exports=mu;var pf=pu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf=j,tn=pf;function F(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fu=new Set,Wr={};function Dt(e,n){or(e,n),or(e+"Capture",n)}function or(e,n){for(Wr[e]=n,e=0;e<n.length;e++)fu.add(n[e])}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fi=Object.prototype.hasOwnProperty,ff=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cc={},dc={};function gf(e){return Fi.call(dc,e)?!0:Fi.call(cc,e)?!1:ff.test(e)?dc[e]=!0:(cc[e]=!0,!1)}function hf(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xf(e,n,t,r){if(n===null||typeof n>"u"||hf(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Fe(e,n,t,r,a,o,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=s}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ae[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Ae[n]=new Fe(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ae[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ae[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ae[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ae[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ae[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ae[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ae[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var el=/[\-:]([a-z])/g;function nl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(el,nl);Ae[n]=new Fe(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(el,nl);Ae[n]=new Fe(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(el,nl);Ae[n]=new Fe(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ae[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ae[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function tl(e,n,t,r){var a=Ae.hasOwnProperty(n)?Ae[n]:null;(a!==null?a.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(xf(n,t,a,r)&&(t=null),r||a===null?gf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,r=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Un=mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Na=Symbol.for("react.element"),Lt=Symbol.for("react.portal"),Rt=Symbol.for("react.fragment"),rl=Symbol.for("react.strict_mode"),Gi=Symbol.for("react.profiler"),gu=Symbol.for("react.provider"),hu=Symbol.for("react.context"),al=Symbol.for("react.forward_ref"),Ui=Symbol.for("react.suspense"),Hi=Symbol.for("react.suspense_list"),ol=Symbol.for("react.memo"),Wn=Symbol.for("react.lazy"),xu=Symbol.for("react.offscreen"),uc=Symbol.iterator;function Ir(e){return e===null||typeof e!="object"?null:(e=uc&&e[uc]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Object.assign,fi;function $r(e){if(fi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);fi=n&&n[1]||""}return`
`+fi+e}var gi=!1;function hi(e,n){if(!e||gi)return"";gi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),o=r.stack.split(`
`),s=a.length-1,c=o.length-1;1<=s&&0<=c&&a[s]!==o[c];)c--;for(;1<=s&&0<=c;s--,c--)if(a[s]!==o[c]){if(s!==1||c!==1)do if(s--,c--,0>c||a[s]!==o[c]){var d=`
`+a[s].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=s&&0<=c);break}}}finally{gi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?$r(e):""}function vf(e){switch(e.tag){case 5:return $r(e.type);case 16:return $r("Lazy");case 13:return $r("Suspense");case 19:return $r("SuspenseList");case 0:case 2:case 15:return e=hi(e.type,!1),e;case 11:return e=hi(e.type.render,!1),e;case 1:return e=hi(e.type,!0),e;default:return""}}function Wi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rt:return"Fragment";case Lt:return"Portal";case Gi:return"Profiler";case rl:return"StrictMode";case Ui:return"Suspense";case Hi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case hu:return(e.displayName||"Context")+".Consumer";case gu:return(e._context.displayName||"Context")+".Provider";case al:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ol:return n=e.displayName||null,n!==null?n:Wi(e.type)||"Memo";case Wn:n=e._payload,e=e._init;try{return Wi(e(n))}catch{}}return null}function yf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wi(n);case 8:return n===rl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ct(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function bf(e){var n=vu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ma(e){e._valueTracker||(e._valueTracker=bf(e))}function yu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=vu(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function fo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zi(e,n){var t=n.checked;return ye({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function pc(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=ct(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function bu(e,n){n=n.checked,n!=null&&tl(e,"checked",n,!1)}function Yi(e,n){bu(e,n);var t=ct(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Xi(e,n.type,t):n.hasOwnProperty("defaultValue")&&Xi(e,n.type,ct(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function mc(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Xi(e,n,t){(n!=="number"||fo(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ar=Array.isArray;function Xt(e,n,t,r){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&r&&(e[t].defaultSelected=!0)}else{for(t=""+ct(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function Qi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(F(91));return ye({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fc(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(F(92));if(Ar(t)){if(1<t.length)throw Error(F(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ct(t)}}function _u(e,n){var t=ct(n.value),r=ct(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function gc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Iu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qi(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Iu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ta,ku=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Ta=Ta||document.createElement("div"),Ta.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ta.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Zr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var zr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_f=["Webkit","ms","Moz","O"];Object.keys(zr).forEach(function(e){_f.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),zr[n]=zr[e]})});function ju(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||zr.hasOwnProperty(e)&&zr[e]?(""+n).trim():n+"px"}function wu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,a=ju(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,a):e[t]=a}}var If=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function es(e,n){if(n){if(If[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(F(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(F(61))}if(n.style!=null&&typeof n.style!="object")throw Error(F(62))}}function ns(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ts=null;function il(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var rs=null,Qt=null,qt=null;function hc(e){if(e=ba(e)){if(typeof rs!="function")throw Error(F(280));var n=e.stateNode;n&&(n=Xo(n),rs(e.stateNode,e.type,n))}}function Su(e){Qt?qt?qt.push(e):qt=[e]:Qt=e}function Cu(){if(Qt){var e=Qt,n=qt;if(qt=Qt=null,hc(e),n)for(e=0;e<n.length;e++)hc(n[e])}}function Nu(e,n){return e(n)}function Mu(){}var xi=!1;function Tu(e,n,t){if(xi)return e(n,t);xi=!0;try{return Nu(e,n,t)}finally{xi=!1,(Qt!==null||qt!==null)&&(Mu(),Cu())}}function Yr(e,n){var t=e.stateNode;if(t===null)return null;var r=Xo(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(F(231,n,typeof t));return t}var as=!1;if(Jn)try{var kr={};Object.defineProperty(kr,"passive",{get:function(){as=!0}}),window.addEventListener("test",kr,kr),window.removeEventListener("test",kr,kr)}catch{as=!1}function kf(e,n,t,r,a,o,s,c,d){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(p){this.onError(p)}}var Lr=!1,go=null,ho=!1,os=null,jf={onError:function(e){Lr=!0,go=e}};function wf(e,n,t,r,a,o,s,c,d){Lr=!1,go=null,kf.apply(jf,arguments)}function Sf(e,n,t,r,a,o,s,c,d){if(wf.apply(this,arguments),Lr){if(Lr){var u=go;Lr=!1,go=null}else throw Error(F(198));ho||(ho=!0,os=u)}}function $t(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Eu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function xc(e){if($t(e)!==e)throw Error(F(188))}function Cf(e){var n=e.alternate;if(!n){if(n=$t(e),n===null)throw Error(F(188));return n!==e?null:e}for(var t=e,r=n;;){var a=t.return;if(a===null)break;var o=a.alternate;if(o===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===t)return xc(a),e;if(o===r)return xc(a),n;o=o.sibling}throw Error(F(188))}if(t.return!==r.return)t=a,r=o;else{for(var s=!1,c=a.child;c;){if(c===t){s=!0,t=a,r=o;break}if(c===r){s=!0,r=a,t=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===t){s=!0,t=o,r=a;break}if(c===r){s=!0,r=o,t=a;break}c=c.sibling}if(!s)throw Error(F(189))}}if(t.alternate!==r)throw Error(F(190))}if(t.tag!==3)throw Error(F(188));return t.stateNode.current===t?e:n}function Du(e){return e=Cf(e),e!==null?$u(e):null}function $u(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=$u(e);if(n!==null)return n;e=e.sibling}return null}var Au=tn.unstable_scheduleCallback,vc=tn.unstable_cancelCallback,Nf=tn.unstable_shouldYield,Mf=tn.unstable_requestPaint,_e=tn.unstable_now,Tf=tn.unstable_getCurrentPriorityLevel,sl=tn.unstable_ImmediatePriority,Vu=tn.unstable_UserBlockingPriority,xo=tn.unstable_NormalPriority,Ef=tn.unstable_LowPriority,Pu=tn.unstable_IdlePriority,Ho=null,Mn=null;function Df(e){if(Mn&&typeof Mn.onCommitFiberRoot=="function")try{Mn.onCommitFiberRoot(Ho,e,void 0,(e.current.flags&128)===128)}catch{}}var _n=Math.clz32?Math.clz32:Vf,$f=Math.log,Af=Math.LN2;function Vf(e){return e>>>=0,e===0?32:31-($f(e)/Af|0)|0}var Ea=64,Da=4194304;function Vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vo(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,s=t&268435455;if(s!==0){var c=s&~a;c!==0?r=Vr(c):(o&=s,o!==0&&(r=Vr(o)))}else s=t&~a,s!==0?r=Vr(s):o!==0&&(r=Vr(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&a)&&(a=r&-r,o=n&-n,a>=o||a===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-_n(n),a=1<<t,r|=e[t],n&=~a;return r}function Pf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-_n(o),c=1<<s,d=a[s];d===-1?(!(c&t)||c&r)&&(a[s]=Pf(c,n)):d<=n&&(e.expiredLanes|=c),o&=~c}}function is(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zu(){var e=Ea;return Ea<<=1,!(Ea&4194240)&&(Ea=64),e}function vi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function va(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-_n(n),e[n]=t}function Lf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-_n(t),o=1<<a;n[a]=0,r[a]=-1,e[a]=-1,t&=~o}}function ll(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-_n(t),a=1<<r;a&n|e[r]&n&&(e[r]|=n),t&=~a}}var le=0;function Lu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ru,cl,Ou,Ku,Ju,ss=!1,$a=[],nt=null,tt=null,rt=null,Xr=new Map,Qr=new Map,Yn=[],Rf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yc(e,n){switch(e){case"focusin":case"focusout":nt=null;break;case"dragenter":case"dragleave":tt=null;break;case"mouseover":case"mouseout":rt=null;break;case"pointerover":case"pointerout":Xr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qr.delete(n.pointerId)}}function jr(e,n,t,r,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},n!==null&&(n=ba(n),n!==null&&cl(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function Of(e,n,t,r,a){switch(n){case"focusin":return nt=jr(nt,e,n,t,r,a),!0;case"dragenter":return tt=jr(tt,e,n,t,r,a),!0;case"mouseover":return rt=jr(rt,e,n,t,r,a),!0;case"pointerover":var o=a.pointerId;return Xr.set(o,jr(Xr.get(o)||null,e,n,t,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Qr.set(o,jr(Qr.get(o)||null,e,n,t,r,a)),!0}return!1}function Bu(e){var n=vt(e.target);if(n!==null){var t=$t(n);if(t!==null){if(n=t.tag,n===13){if(n=Eu(t),n!==null){e.blockedOn=n,Ju(e.priority,function(){Ou(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function no(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ls(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ts=r,t.target.dispatchEvent(r),ts=null}else return n=ba(t),n!==null&&cl(n),e.blockedOn=t,!1;n.shift()}return!0}function bc(e,n,t){no(e)&&t.delete(n)}function Kf(){ss=!1,nt!==null&&no(nt)&&(nt=null),tt!==null&&no(tt)&&(tt=null),rt!==null&&no(rt)&&(rt=null),Xr.forEach(bc),Qr.forEach(bc)}function wr(e,n){e.blockedOn===n&&(e.blockedOn=null,ss||(ss=!0,tn.unstable_scheduleCallback(tn.unstable_NormalPriority,Kf)))}function qr(e){function n(a){return wr(a,e)}if(0<$a.length){wr($a[0],e);for(var t=1;t<$a.length;t++){var r=$a[t];r.blockedOn===e&&(r.blockedOn=null)}}for(nt!==null&&wr(nt,e),tt!==null&&wr(tt,e),rt!==null&&wr(rt,e),Xr.forEach(n),Qr.forEach(n),t=0;t<Yn.length;t++)r=Yn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yn.length&&(t=Yn[0],t.blockedOn===null);)Bu(t),t.blockedOn===null&&Yn.shift()}var er=Un.ReactCurrentBatchConfig,yo=!0;function Jf(e,n,t,r){var a=le,o=er.transition;er.transition=null;try{le=1,dl(e,n,t,r)}finally{le=a,er.transition=o}}function Bf(e,n,t,r){var a=le,o=er.transition;er.transition=null;try{le=4,dl(e,n,t,r)}finally{le=a,er.transition=o}}function dl(e,n,t,r){if(yo){var a=ls(e,n,t,r);if(a===null)Ni(e,n,r,bo,t),yc(e,r);else if(Of(a,e,n,t,r))r.stopPropagation();else if(yc(e,r),n&4&&-1<Rf.indexOf(e)){for(;a!==null;){var o=ba(a);if(o!==null&&Ru(o),o=ls(e,n,t,r),o===null&&Ni(e,n,r,bo,t),o===a)break;a=o}a!==null&&r.stopPropagation()}else Ni(e,n,r,null,t)}}var bo=null;function ls(e,n,t,r){if(bo=null,e=il(r),e=vt(e),e!==null)if(n=$t(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Eu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return bo=e,null}function Fu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tf()){case sl:return 1;case Vu:return 4;case xo:case Ef:return 16;case Pu:return 536870912;default:return 16}default:return 16}}var qn=null,ul=null,to=null;function Gu(){if(to)return to;var e,n=ul,t=n.length,r,a="value"in qn?qn.value:qn.textContent,o=a.length;for(e=0;e<t&&n[e]===a[e];e++);var s=t-e;for(r=1;r<=s&&n[t-r]===a[o-r];r++);return to=a.slice(e,1<r?1-r:void 0)}function ro(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Aa(){return!0}function _c(){return!1}function an(e){function n(t,r,a,o,s){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(t=e[c],this[c]=t?t(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Aa:_c,this.isPropagationStopped=_c,this}return ye(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Aa)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Aa)},persist:function(){},isPersistent:Aa}),n}var gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pl=an(gr),ya=ye({},gr,{view:0,detail:0}),Ff=an(ya),yi,bi,Sr,Wo=ye({},ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ml,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sr&&(Sr&&e.type==="mousemove"?(yi=e.screenX-Sr.screenX,bi=e.screenY-Sr.screenY):bi=yi=0,Sr=e),yi)},movementY:function(e){return"movementY"in e?e.movementY:bi}}),Ic=an(Wo),Gf=ye({},Wo,{dataTransfer:0}),Uf=an(Gf),Hf=ye({},ya,{relatedTarget:0}),_i=an(Hf),Wf=ye({},gr,{animationName:0,elapsedTime:0,pseudoElement:0}),Zf=an(Wf),Yf=ye({},gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xf=an(Yf),Qf=ye({},gr,{data:0}),kc=an(Qf),qf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},eg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ng={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ng[e])?!!n[e]:!1}function ml(){return tg}var rg=ye({},ya,{key:function(e){if(e.key){var n=qf[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ro(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?eg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ml,charCode:function(e){return e.type==="keypress"?ro(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ro(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ag=an(rg),og=ye({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jc=an(og),ig=ye({},ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ml}),sg=an(ig),lg=ye({},gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),cg=an(lg),dg=ye({},Wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ug=an(dg),pg=[9,13,27,32],fl=Jn&&"CompositionEvent"in window,Rr=null;Jn&&"documentMode"in document&&(Rr=document.documentMode);var mg=Jn&&"TextEvent"in window&&!Rr,Uu=Jn&&(!fl||Rr&&8<Rr&&11>=Rr),wc=" ",Sc=!1;function Hu(e,n){switch(e){case"keyup":return pg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ot=!1;function fg(e,n){switch(e){case"compositionend":return Wu(n);case"keypress":return n.which!==32?null:(Sc=!0,wc);case"textInput":return e=n.data,e===wc&&Sc?null:e;default:return null}}function gg(e,n){if(Ot)return e==="compositionend"||!fl&&Hu(e,n)?(e=Gu(),to=ul=qn=null,Ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Uu&&n.locale!=="ko"?null:n.data;default:return null}}var hg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!hg[e.type]:n==="textarea"}function Zu(e,n,t,r){Su(r),n=_o(n,"onChange"),0<n.length&&(t=new pl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Or=null,ea=null;function xg(e){ip(e,0)}function Zo(e){var n=Bt(e);if(yu(n))return e}function vg(e,n){if(e==="change")return n}var Yu=!1;if(Jn){var Ii;if(Jn){var ki="oninput"in document;if(!ki){var Nc=document.createElement("div");Nc.setAttribute("oninput","return;"),ki=typeof Nc.oninput=="function"}Ii=ki}else Ii=!1;Yu=Ii&&(!document.documentMode||9<document.documentMode)}function Mc(){Or&&(Or.detachEvent("onpropertychange",Xu),ea=Or=null)}function Xu(e){if(e.propertyName==="value"&&Zo(ea)){var n=[];Zu(n,ea,e,il(e)),Tu(xg,n)}}function yg(e,n,t){e==="focusin"?(Mc(),Or=n,ea=t,Or.attachEvent("onpropertychange",Xu)):e==="focusout"&&Mc()}function bg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zo(ea)}function _g(e,n){if(e==="click")return Zo(n)}function Ig(e,n){if(e==="input"||e==="change")return Zo(n)}function kg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var jn=typeof Object.is=="function"?Object.is:kg;function na(e,n){if(jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!Fi.call(n,a)||!jn(e[a],n[a]))return!1}return!0}function Tc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ec(e,n){var t=Tc(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Tc(t)}}function Qu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Qu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function qu(){for(var e=window,n=fo();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=fo(e.document)}return n}function gl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function jg(e){var n=qu(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Qu(t.ownerDocument.documentElement,t)){if(r!==null&&gl(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,o=Math.min(r.start,a);r=r.end===void 0?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=Ec(t,o);var s=Ec(t,r);a&&s&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wg=Jn&&"documentMode"in document&&11>=document.documentMode,Kt=null,cs=null,Kr=null,ds=!1;function Dc(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ds||Kt==null||Kt!==fo(r)||(r=Kt,"selectionStart"in r&&gl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kr&&na(Kr,r)||(Kr=r,r=_o(cs,"onSelect"),0<r.length&&(n=new pl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Kt)))}function Va(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Jt={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionend:Va("Transition","TransitionEnd")},ji={},ep={};Jn&&(ep=document.createElement("div").style,"AnimationEvent"in window||(delete Jt.animationend.animation,delete Jt.animationiteration.animation,delete Jt.animationstart.animation),"TransitionEvent"in window||delete Jt.transitionend.transition);function Yo(e){if(ji[e])return ji[e];if(!Jt[e])return e;var n=Jt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in ep)return ji[e]=n[t];return e}var np=Yo("animationend"),tp=Yo("animationiteration"),rp=Yo("animationstart"),ap=Yo("transitionend"),op=new Map,$c="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ut(e,n){op.set(e,n),Dt(n,[e])}for(var wi=0;wi<$c.length;wi++){var Si=$c[wi],Sg=Si.toLowerCase(),Cg=Si[0].toUpperCase()+Si.slice(1);ut(Sg,"on"+Cg)}ut(np,"onAnimationEnd");ut(tp,"onAnimationIteration");ut(rp,"onAnimationStart");ut("dblclick","onDoubleClick");ut("focusin","onFocus");ut("focusout","onBlur");ut(ap,"onTransitionEnd");or("onMouseEnter",["mouseout","mouseover"]);or("onMouseLeave",["mouseout","mouseover"]);or("onPointerEnter",["pointerout","pointerover"]);or("onPointerLeave",["pointerout","pointerover"]);Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ng=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));function Ac(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Sf(r,n,void 0,e),e.currentTarget=null}function ip(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],a=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var s=r.length-1;0<=s;s--){var c=r[s],d=c.instance,u=c.currentTarget;if(c=c.listener,d!==o&&a.isPropagationStopped())break e;Ac(a,c,u),o=d}else for(s=0;s<r.length;s++){if(c=r[s],d=c.instance,u=c.currentTarget,c=c.listener,d!==o&&a.isPropagationStopped())break e;Ac(a,c,u),o=d}}}if(ho)throw e=os,ho=!1,os=null,e}function me(e,n){var t=n[gs];t===void 0&&(t=n[gs]=new Set);var r=e+"__bubble";t.has(r)||(sp(n,e,2,!1),t.add(r))}function Ci(e,n,t){var r=0;n&&(r|=4),sp(t,e,r,n)}var Pa="_reactListening"+Math.random().toString(36).slice(2);function ta(e){if(!e[Pa]){e[Pa]=!0,fu.forEach(function(t){t!=="selectionchange"&&(Ng.has(t)||Ci(t,!1,e),Ci(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Pa]||(n[Pa]=!0,Ci("selectionchange",!1,n))}}function sp(e,n,t,r){switch(Fu(n)){case 1:var a=Jf;break;case 4:a=Bf;break;default:a=dl}t=a.bind(null,n,t,e),a=void 0,!as||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function Ni(e,n,t,r,a){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===a||c.nodeType===8&&c.parentNode===a)break;if(s===4)for(s=r.return;s!==null;){var d=s.tag;if((d===3||d===4)&&(d=s.stateNode.containerInfo,d===a||d.nodeType===8&&d.parentNode===a))return;s=s.return}for(;c!==null;){if(s=vt(c),s===null)return;if(d=s.tag,d===5||d===6){r=o=s;continue e}c=c.parentNode}}r=r.return}Tu(function(){var u=o,p=il(t),m=[];e:{var h=op.get(e);if(h!==void 0){var g=pl,f=e;switch(e){case"keypress":if(ro(t)===0)break e;case"keydown":case"keyup":g=ag;break;case"focusin":f="focus",g=_i;break;case"focusout":f="blur",g=_i;break;case"beforeblur":case"afterblur":g=_i;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ic;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Uf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=sg;break;case np:case tp:case rp:g=Zf;break;case ap:g=cg;break;case"scroll":g=Ff;break;case"wheel":g=ug;break;case"copy":case"cut":case"paste":g=Xf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=jc}var y=(n&4)!==0,I=!y&&e==="scroll",v=y?h!==null?h+"Capture":null:h;y=[];for(var x=u,b;x!==null;){b=x;var k=b.stateNode;if(b.tag===5&&k!==null&&(b=k,v!==null&&(k=Yr(x,v),k!=null&&y.push(ra(x,k,b)))),I)break;x=x.return}0<y.length&&(h=new g(h,f,null,t,p),m.push({event:h,listeners:y}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&t!==ts&&(f=t.relatedTarget||t.fromElement)&&(vt(f)||f[Bn]))break e;if((g||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,g?(f=t.relatedTarget||t.toElement,g=u,f=f?vt(f):null,f!==null&&(I=$t(f),f!==I||f.tag!==5&&f.tag!==6)&&(f=null)):(g=null,f=u),g!==f)){if(y=Ic,k="onMouseLeave",v="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(y=jc,k="onPointerLeave",v="onPointerEnter",x="pointer"),I=g==null?h:Bt(g),b=f==null?h:Bt(f),h=new y(k,x+"leave",g,t,p),h.target=I,h.relatedTarget=b,k=null,vt(p)===u&&(y=new y(v,x+"enter",f,t,p),y.target=b,y.relatedTarget=I,k=y),I=k,g&&f)n:{for(y=g,v=f,x=0,b=y;b;b=At(b))x++;for(b=0,k=v;k;k=At(k))b++;for(;0<x-b;)y=At(y),x--;for(;0<b-x;)v=At(v),b--;for(;x--;){if(y===v||v!==null&&y===v.alternate)break n;y=At(y),v=At(v)}y=null}else y=null;g!==null&&Vc(m,h,g,y,!1),f!==null&&I!==null&&Vc(m,I,f,y,!0)}}e:{if(h=u?Bt(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var T=vg;else if(Cc(h))if(Yu)T=Ig;else{T=bg;var M=yg}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=_g);if(T&&(T=T(e,u))){Zu(m,T,t,p);break e}M&&M(e,h,u),e==="focusout"&&(M=h._wrapperState)&&M.controlled&&h.type==="number"&&Xi(h,"number",h.value)}switch(M=u?Bt(u):window,e){case"focusin":(Cc(M)||M.contentEditable==="true")&&(Kt=M,cs=u,Kr=null);break;case"focusout":Kr=cs=Kt=null;break;case"mousedown":ds=!0;break;case"contextmenu":case"mouseup":case"dragend":ds=!1,Dc(m,t,p);break;case"selectionchange":if(wg)break;case"keydown":case"keyup":Dc(m,t,p)}var E;if(fl)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Ot?Hu(e,t)&&(C="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(Uu&&t.locale!=="ko"&&(Ot||C!=="onCompositionStart"?C==="onCompositionEnd"&&Ot&&(E=Gu()):(qn=p,ul="value"in qn?qn.value:qn.textContent,Ot=!0)),M=_o(u,C),0<M.length&&(C=new kc(C,e,null,t,p),m.push({event:C,listeners:M}),E?C.data=E:(E=Wu(t),E!==null&&(C.data=E)))),(E=mg?fg(e,t):gg(e,t))&&(u=_o(u,"onBeforeInput"),0<u.length&&(p=new kc("onBeforeInput","beforeinput",null,t,p),m.push({event:p,listeners:u}),p.data=E))}ip(m,n)})}function ra(e,n,t){return{instance:e,listener:n,currentTarget:t}}function _o(e,n){for(var t=n+"Capture",r=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=Yr(e,t),o!=null&&r.unshift(ra(e,o,a)),o=Yr(e,n),o!=null&&r.push(ra(e,o,a))),e=e.return}return r}function At(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vc(e,n,t,r,a){for(var o=n._reactName,s=[];t!==null&&t!==r;){var c=t,d=c.alternate,u=c.stateNode;if(d!==null&&d===r)break;c.tag===5&&u!==null&&(c=u,a?(d=Yr(t,o),d!=null&&s.unshift(ra(t,d,c))):a||(d=Yr(t,o),d!=null&&s.push(ra(t,d,c)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var Mg=/\r\n?/g,Tg=/\u0000|\uFFFD/g;function Pc(e){return(typeof e=="string"?e:""+e).replace(Mg,`
`).replace(Tg,"")}function za(e,n,t){if(n=Pc(n),Pc(e)!==n&&t)throw Error(F(425))}function Io(){}var us=null,ps=null;function ms(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var fs=typeof setTimeout=="function"?setTimeout:void 0,Eg=typeof clearTimeout=="function"?clearTimeout:void 0,zc=typeof Promise=="function"?Promise:void 0,Dg=typeof queueMicrotask=="function"?queueMicrotask:typeof zc<"u"?function(e){return zc.resolve(null).then(e).catch($g)}:fs;function $g(e){setTimeout(function(){throw e})}function Mi(e,n){var t=n,r=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(r===0){e.removeChild(a),qr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=a}while(t);qr(n)}function at(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Lc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var hr=Math.random().toString(36).slice(2),Nn="__reactFiber$"+hr,aa="__reactProps$"+hr,Bn="__reactContainer$"+hr,gs="__reactEvents$"+hr,Ag="__reactListeners$"+hr,Vg="__reactHandles$"+hr;function vt(e){var n=e[Nn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Bn]||t[Nn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Lc(e);e!==null;){if(t=e[Nn])return t;e=Lc(e)}return n}e=t,t=e.parentNode}return null}function ba(e){return e=e[Nn]||e[Bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function Xo(e){return e[aa]||null}var hs=[],Ft=-1;function pt(e){return{current:e}}function fe(e){0>Ft||(e.current=hs[Ft],hs[Ft]=null,Ft--)}function pe(e,n){Ft++,hs[Ft]=e.current,e.current=n}var dt={},Le=pt(dt),He=pt(!1),kt=dt;function ir(e,n){var t=e.type.contextTypes;if(!t)return dt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in t)a[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function We(e){return e=e.childContextTypes,e!=null}function ko(){fe(He),fe(Le)}function Rc(e,n,t){if(Le.current!==dt)throw Error(F(168));pe(Le,n),pe(He,t)}function lp(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var a in r)if(!(a in n))throw Error(F(108,yf(e)||"Unknown",a));return ye({},t,r)}function jo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dt,kt=Le.current,pe(Le,e),pe(He,He.current),!0}function Oc(e,n,t){var r=e.stateNode;if(!r)throw Error(F(169));t?(e=lp(e,n,kt),r.__reactInternalMemoizedMergedChildContext=e,fe(He),fe(Le),pe(Le,e)):fe(He),pe(He,t)}var Pn=null,Qo=!1,Ti=!1;function cp(e){Pn===null?Pn=[e]:Pn.push(e)}function Pg(e){Qo=!0,cp(e)}function mt(){if(!Ti&&Pn!==null){Ti=!0;var e=0,n=le;try{var t=Pn;for(le=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Pn=null,Qo=!1}catch(a){throw Pn!==null&&(Pn=Pn.slice(e+1)),Au(sl,mt),a}finally{le=n,Ti=!1}}return null}var Gt=[],Ut=0,wo=null,So=0,ln=[],cn=0,jt=null,Rn=1,On="";function gt(e,n){Gt[Ut++]=So,Gt[Ut++]=wo,wo=e,So=n}function dp(e,n,t){ln[cn++]=Rn,ln[cn++]=On,ln[cn++]=jt,jt=e;var r=Rn;e=On;var a=32-_n(r)-1;r&=~(1<<a),t+=1;var o=32-_n(n)+a;if(30<o){var s=a-a%5;o=(r&(1<<s)-1).toString(32),r>>=s,a-=s,Rn=1<<32-_n(n)+a|t<<a|r,On=o+e}else Rn=1<<o|t<<a|r,On=e}function hl(e){e.return!==null&&(gt(e,1),dp(e,1,0))}function xl(e){for(;e===wo;)wo=Gt[--Ut],Gt[Ut]=null,So=Gt[--Ut],Gt[Ut]=null;for(;e===jt;)jt=ln[--cn],ln[cn]=null,On=ln[--cn],ln[cn]=null,Rn=ln[--cn],ln[cn]=null}var nn=null,en=null,ge=!1,bn=null;function up(e,n){var t=dn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Kc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,nn=e,en=at(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,nn=e,en=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=jt!==null?{id:Rn,overflow:On}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=dn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,nn=e,en=null,!0):!1;default:return!1}}function xs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vs(e){if(ge){var n=en;if(n){var t=n;if(!Kc(e,n)){if(xs(e))throw Error(F(418));n=at(t.nextSibling);var r=nn;n&&Kc(e,n)?up(r,t):(e.flags=e.flags&-4097|2,ge=!1,nn=e)}}else{if(xs(e))throw Error(F(418));e.flags=e.flags&-4097|2,ge=!1,nn=e}}}function Jc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nn=e}function La(e){if(e!==nn)return!1;if(!ge)return Jc(e),ge=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ms(e.type,e.memoizedProps)),n&&(n=en)){if(xs(e))throw pp(),Error(F(418));for(;n;)up(e,n),n=at(n.nextSibling)}if(Jc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){en=at(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}en=null}}else en=nn?at(e.stateNode.nextSibling):null;return!0}function pp(){for(var e=en;e;)e=at(e.nextSibling)}function sr(){en=nn=null,ge=!1}function vl(e){bn===null?bn=[e]:bn.push(e)}var zg=Un.ReactCurrentBatchConfig;function Cr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(F(309));var r=t.stateNode}if(!r)throw Error(F(147,e));var a=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(s){var c=a.refs;s===null?delete c[o]:c[o]=s},n._stringRef=o,n)}if(typeof e!="string")throw Error(F(284));if(!t._owner)throw Error(F(290,e))}return e}function Ra(e,n){throw e=Object.prototype.toString.call(n),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Bc(e){var n=e._init;return n(e._payload)}function mp(e){function n(v,x){if(e){var b=v.deletions;b===null?(v.deletions=[x],v.flags|=16):b.push(x)}}function t(v,x){if(!e)return null;for(;x!==null;)n(v,x),x=x.sibling;return null}function r(v,x){for(v=new Map;x!==null;)x.key!==null?v.set(x.key,x):v.set(x.index,x),x=x.sibling;return v}function a(v,x){return v=lt(v,x),v.index=0,v.sibling=null,v}function o(v,x,b){return v.index=b,e?(b=v.alternate,b!==null?(b=b.index,b<x?(v.flags|=2,x):b):(v.flags|=2,x)):(v.flags|=1048576,x)}function s(v){return e&&v.alternate===null&&(v.flags|=2),v}function c(v,x,b,k){return x===null||x.tag!==6?(x=zi(b,v.mode,k),x.return=v,x):(x=a(x,b),x.return=v,x)}function d(v,x,b,k){var T=b.type;return T===Rt?p(v,x,b.props.children,k,b.key):x!==null&&(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Wn&&Bc(T)===x.type)?(k=a(x,b.props),k.ref=Cr(v,x,b),k.return=v,k):(k=uo(b.type,b.key,b.props,null,v.mode,k),k.ref=Cr(v,x,b),k.return=v,k)}function u(v,x,b,k){return x===null||x.tag!==4||x.stateNode.containerInfo!==b.containerInfo||x.stateNode.implementation!==b.implementation?(x=Li(b,v.mode,k),x.return=v,x):(x=a(x,b.children||[]),x.return=v,x)}function p(v,x,b,k,T){return x===null||x.tag!==7?(x=It(b,v.mode,k,T),x.return=v,x):(x=a(x,b),x.return=v,x)}function m(v,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return x=zi(""+x,v.mode,b),x.return=v,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Na:return b=uo(x.type,x.key,x.props,null,v.mode,b),b.ref=Cr(v,null,x),b.return=v,b;case Lt:return x=Li(x,v.mode,b),x.return=v,x;case Wn:var k=x._init;return m(v,k(x._payload),b)}if(Ar(x)||Ir(x))return x=It(x,v.mode,b,null),x.return=v,x;Ra(v,x)}return null}function h(v,x,b,k){var T=x!==null?x.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return T!==null?null:c(v,x,""+b,k);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Na:return b.key===T?d(v,x,b,k):null;case Lt:return b.key===T?u(v,x,b,k):null;case Wn:return T=b._init,h(v,x,T(b._payload),k)}if(Ar(b)||Ir(b))return T!==null?null:p(v,x,b,k,null);Ra(v,b)}return null}function g(v,x,b,k,T){if(typeof k=="string"&&k!==""||typeof k=="number")return v=v.get(b)||null,c(x,v,""+k,T);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Na:return v=v.get(k.key===null?b:k.key)||null,d(x,v,k,T);case Lt:return v=v.get(k.key===null?b:k.key)||null,u(x,v,k,T);case Wn:var M=k._init;return g(v,x,b,M(k._payload),T)}if(Ar(k)||Ir(k))return v=v.get(b)||null,p(x,v,k,T,null);Ra(x,k)}return null}function f(v,x,b,k){for(var T=null,M=null,E=x,C=x=0,$=null;E!==null&&C<b.length;C++){E.index>C?($=E,E=null):$=E.sibling;var D=h(v,E,b[C],k);if(D===null){E===null&&(E=$);break}e&&E&&D.alternate===null&&n(v,E),x=o(D,x,C),M===null?T=D:M.sibling=D,M=D,E=$}if(C===b.length)return t(v,E),ge&&gt(v,C),T;if(E===null){for(;C<b.length;C++)E=m(v,b[C],k),E!==null&&(x=o(E,x,C),M===null?T=E:M.sibling=E,M=E);return ge&&gt(v,C),T}for(E=r(v,E);C<b.length;C++)$=g(E,v,C,b[C],k),$!==null&&(e&&$.alternate!==null&&E.delete($.key===null?C:$.key),x=o($,x,C),M===null?T=$:M.sibling=$,M=$);return e&&E.forEach(function(w){return n(v,w)}),ge&&gt(v,C),T}function y(v,x,b,k){var T=Ir(b);if(typeof T!="function")throw Error(F(150));if(b=T.call(b),b==null)throw Error(F(151));for(var M=T=null,E=x,C=x=0,$=null,D=b.next();E!==null&&!D.done;C++,D=b.next()){E.index>C?($=E,E=null):$=E.sibling;var w=h(v,E,D.value,k);if(w===null){E===null&&(E=$);break}e&&E&&w.alternate===null&&n(v,E),x=o(w,x,C),M===null?T=w:M.sibling=w,M=w,E=$}if(D.done)return t(v,E),ge&&gt(v,C),T;if(E===null){for(;!D.done;C++,D=b.next())D=m(v,D.value,k),D!==null&&(x=o(D,x,C),M===null?T=D:M.sibling=D,M=D);return ge&&gt(v,C),T}for(E=r(v,E);!D.done;C++,D=b.next())D=g(E,v,C,D.value,k),D!==null&&(e&&D.alternate!==null&&E.delete(D.key===null?C:D.key),x=o(D,x,C),M===null?T=D:M.sibling=D,M=D);return e&&E.forEach(function(L){return n(v,L)}),ge&&gt(v,C),T}function I(v,x,b,k){if(typeof b=="object"&&b!==null&&b.type===Rt&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Na:e:{for(var T=b.key,M=x;M!==null;){if(M.key===T){if(T=b.type,T===Rt){if(M.tag===7){t(v,M.sibling),x=a(M,b.props.children),x.return=v,v=x;break e}}else if(M.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Wn&&Bc(T)===M.type){t(v,M.sibling),x=a(M,b.props),x.ref=Cr(v,M,b),x.return=v,v=x;break e}t(v,M);break}else n(v,M);M=M.sibling}b.type===Rt?(x=It(b.props.children,v.mode,k,b.key),x.return=v,v=x):(k=uo(b.type,b.key,b.props,null,v.mode,k),k.ref=Cr(v,x,b),k.return=v,v=k)}return s(v);case Lt:e:{for(M=b.key;x!==null;){if(x.key===M)if(x.tag===4&&x.stateNode.containerInfo===b.containerInfo&&x.stateNode.implementation===b.implementation){t(v,x.sibling),x=a(x,b.children||[]),x.return=v,v=x;break e}else{t(v,x);break}else n(v,x);x=x.sibling}x=Li(b,v.mode,k),x.return=v,v=x}return s(v);case Wn:return M=b._init,I(v,x,M(b._payload),k)}if(Ar(b))return f(v,x,b,k);if(Ir(b))return y(v,x,b,k);Ra(v,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,x!==null&&x.tag===6?(t(v,x.sibling),x=a(x,b),x.return=v,v=x):(t(v,x),x=zi(b,v.mode,k),x.return=v,v=x),s(v)):t(v,x)}return I}var lr=mp(!0),fp=mp(!1),Co=pt(null),No=null,Ht=null,yl=null;function bl(){yl=Ht=No=null}function _l(e){var n=Co.current;fe(Co),e._currentValue=n}function ys(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function nr(e,n){No=e,yl=Ht=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ue=!0),e.firstContext=null)}function gn(e){var n=e._currentValue;if(yl!==e)if(e={context:e,memoizedValue:n,next:null},Ht===null){if(No===null)throw Error(F(308));Ht=e,No.dependencies={lanes:0,firstContext:e}}else Ht=Ht.next=e;return n}var yt=null;function Il(e){yt===null?yt=[e]:yt.push(e)}function gp(e,n,t,r){var a=n.interleaved;return a===null?(t.next=t,Il(n)):(t.next=a.next,a.next=t),n.interleaved=t,Fn(e,r)}function Fn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Zn=!1;function kl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Kn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function ot(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var a=r.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n,Fn(e,t)}return a=r.interleaved,a===null?(n.next=n,Il(r)):(n.next=a.next,a.next=n),r.interleaved=n,Fn(e,t)}function ao(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ll(e,t)}}function Fc(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?a=o=s:o=o.next=s,t=t.next}while(t!==null);o===null?a=o=n:o=o.next=n}else a=o=n;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Mo(e,n,t,r){var a=e.updateQueue;Zn=!1;var o=a.firstBaseUpdate,s=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var d=c,u=d.next;d.next=null,s===null?o=u:s.next=u,s=d;var p=e.alternate;p!==null&&(p=p.updateQueue,c=p.lastBaseUpdate,c!==s&&(c===null?p.firstBaseUpdate=u:c.next=u,p.lastBaseUpdate=d))}if(o!==null){var m=a.baseState;s=0,p=u=d=null,c=o;do{var h=c.lane,g=c.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:g,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var f=e,y=c;switch(h=n,g=t,y.tag){case 1:if(f=y.payload,typeof f=="function"){m=f.call(g,m,h);break e}m=f;break e;case 3:f.flags=f.flags&-65537|128;case 0:if(f=y.payload,h=typeof f=="function"?f.call(g,m,h):f,h==null)break e;m=ye({},m,h);break e;case 2:Zn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,h=a.effects,h===null?a.effects=[c]:h.push(c))}else g={eventTime:g,lane:h,tag:c.tag,payload:c.payload,callback:c.callback,next:null},p===null?(u=p=g,d=m):p=p.next=g,s|=h;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;h=c,c=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(!0);if(p===null&&(d=m),a.baseState=d,a.firstBaseUpdate=u,a.lastBaseUpdate=p,n=a.shared.interleaved,n!==null){a=n;do s|=a.lane,a=a.next;while(a!==n)}else o===null&&(a.shared.lanes=0);St|=s,e.lanes=s,e.memoizedState=m}}function Gc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],a=r.callback;if(a!==null){if(r.callback=null,r=t,typeof a!="function")throw Error(F(191,a));a.call(r)}}}var _a={},Tn=pt(_a),oa=pt(_a),ia=pt(_a);function bt(e){if(e===_a)throw Error(F(174));return e}function jl(e,n){switch(pe(ia,n),pe(oa,e),pe(Tn,_a),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:qi(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=qi(n,e)}fe(Tn),pe(Tn,n)}function cr(){fe(Tn),fe(oa),fe(ia)}function xp(e){bt(ia.current);var n=bt(Tn.current),t=qi(n,e.type);n!==t&&(pe(oa,e),pe(Tn,t))}function wl(e){oa.current===e&&(fe(Tn),fe(oa))}var he=pt(0);function To(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ei=[];function Sl(){for(var e=0;e<Ei.length;e++)Ei[e]._workInProgressVersionPrimary=null;Ei.length=0}var oo=Un.ReactCurrentDispatcher,Di=Un.ReactCurrentBatchConfig,wt=0,ve=null,je=null,Ne=null,Eo=!1,Jr=!1,sa=0,Lg=0;function Ve(){throw Error(F(321))}function Cl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!jn(e[t],n[t]))return!1;return!0}function Nl(e,n,t,r,a,o){if(wt=o,ve=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,oo.current=e===null||e.memoizedState===null?Jg:Bg,e=t(r,a),Jr){o=0;do{if(Jr=!1,sa=0,25<=o)throw Error(F(301));o+=1,Ne=je=null,n.updateQueue=null,oo.current=Fg,e=t(r,a)}while(Jr)}if(oo.current=Do,n=je!==null&&je.next!==null,wt=0,Ne=je=ve=null,Eo=!1,n)throw Error(F(300));return e}function Ml(){var e=sa!==0;return sa=0,e}function Cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?ve.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function hn(){if(je===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var n=Ne===null?ve.memoizedState:Ne.next;if(n!==null)Ne=n,je=e;else{if(e===null)throw Error(F(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Ne===null?ve.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function la(e,n){return typeof n=="function"?n(e):n}function $i(e){var n=hn(),t=n.queue;if(t===null)throw Error(F(311));t.lastRenderedReducer=e;var r=je,a=r.baseQueue,o=t.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}r.baseQueue=a=o,t.pending=null}if(a!==null){o=a.next,r=r.baseState;var c=s=null,d=null,u=o;do{var p=u.lane;if((wt&p)===p)d!==null&&(d=d.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};d===null?(c=d=m,s=r):d=d.next=m,ve.lanes|=p,St|=p}u=u.next}while(u!==null&&u!==o);d===null?s=r:d.next=c,jn(r,n.memoizedState)||(Ue=!0),n.memoizedState=r,n.baseState=s,n.baseQueue=d,t.lastRenderedState=r}if(e=t.interleaved,e!==null){a=e;do o=a.lane,ve.lanes|=o,St|=o,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ai(e){var n=hn(),t=n.queue;if(t===null)throw Error(F(311));t.lastRenderedReducer=e;var r=t.dispatch,a=t.pending,o=n.memoizedState;if(a!==null){t.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);jn(o,n.memoizedState)||(Ue=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function vp(){}function yp(e,n){var t=ve,r=hn(),a=n(),o=!jn(r.memoizedState,a);if(o&&(r.memoizedState=a,Ue=!0),r=r.queue,Tl(Ip.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Ne!==null&&Ne.memoizedState.tag&1){if(t.flags|=2048,ca(9,_p.bind(null,t,r,a,n),void 0,null),Me===null)throw Error(F(349));wt&30||bp(t,n,a)}return a}function bp(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ve.updateQueue,n===null?(n={lastEffect:null,stores:null},ve.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function _p(e,n,t,r){n.value=t,n.getSnapshot=r,kp(n)&&jp(e)}function Ip(e,n,t){return t(function(){kp(n)&&jp(e)})}function kp(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!jn(e,t)}catch{return!0}}function jp(e){var n=Fn(e,1);n!==null&&In(n,e,1,-1)}function Uc(e){var n=Cn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:e},n.queue=e,e=e.dispatch=Kg.bind(null,ve,e),[n.memoizedState,e]}function ca(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ve.updateQueue,n===null?(n={lastEffect:null,stores:null},ve.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function wp(){return hn().memoizedState}function io(e,n,t,r){var a=Cn();ve.flags|=e,a.memoizedState=ca(1|n,t,void 0,r===void 0?null:r)}function qo(e,n,t,r){var a=hn();r=r===void 0?null:r;var o=void 0;if(je!==null){var s=je.memoizedState;if(o=s.destroy,r!==null&&Cl(r,s.deps)){a.memoizedState=ca(n,t,o,r);return}}ve.flags|=e,a.memoizedState=ca(1|n,t,o,r)}function Hc(e,n){return io(8390656,8,e,n)}function Tl(e,n){return qo(2048,8,e,n)}function Sp(e,n){return qo(4,2,e,n)}function Cp(e,n){return qo(4,4,e,n)}function Np(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Mp(e,n,t){return t=t!=null?t.concat([e]):null,qo(4,4,Np.bind(null,n,e),t)}function El(){}function Tp(e,n){var t=hn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Cl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Ep(e,n){var t=hn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Cl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Dp(e,n,t){return wt&21?(jn(t,n)||(t=zu(),ve.lanes|=t,St|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=t)}function Rg(e,n){var t=le;le=t!==0&&4>t?t:4,e(!0);var r=Di.transition;Di.transition={};try{e(!1),n()}finally{le=t,Di.transition=r}}function $p(){return hn().memoizedState}function Og(e,n,t){var r=st(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ap(e))Vp(n,t);else if(t=gp(e,n,t,r),t!==null){var a=Je();In(t,e,r,a),Pp(t,n,r)}}function Kg(e,n,t){var r=st(e),a={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ap(e))Vp(n,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var s=n.lastRenderedState,c=o(s,t);if(a.hasEagerState=!0,a.eagerState=c,jn(c,s)){var d=n.interleaved;d===null?(a.next=a,Il(n)):(a.next=d.next,d.next=a),n.interleaved=a;return}}catch{}finally{}t=gp(e,n,a,r),t!==null&&(a=Je(),In(t,e,r,a),Pp(t,n,r))}}function Ap(e){var n=e.alternate;return e===ve||n!==null&&n===ve}function Vp(e,n){Jr=Eo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Pp(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ll(e,t)}}var Do={readContext:gn,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},Jg={readContext:gn,useCallback:function(e,n){return Cn().memoizedState=[e,n===void 0?null:n],e},useContext:gn,useEffect:Hc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,io(4194308,4,Np.bind(null,n,e),t)},useLayoutEffect:function(e,n){return io(4194308,4,e,n)},useInsertionEffect:function(e,n){return io(4,2,e,n)},useMemo:function(e,n){var t=Cn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Cn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Og.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var n=Cn();return e={current:e},n.memoizedState=e},useState:Uc,useDebugValue:El,useDeferredValue:function(e){return Cn().memoizedState=e},useTransition:function(){var e=Uc(!1),n=e[0];return e=Rg.bind(null,e[1]),Cn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ve,a=Cn();if(ge){if(t===void 0)throw Error(F(407));t=t()}else{if(t=n(),Me===null)throw Error(F(349));wt&30||bp(r,n,t)}a.memoizedState=t;var o={value:t,getSnapshot:n};return a.queue=o,Hc(Ip.bind(null,r,o,e),[e]),r.flags|=2048,ca(9,_p.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=Cn(),n=Me.identifierPrefix;if(ge){var t=On,r=Rn;t=(r&~(1<<32-_n(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=sa++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Lg++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Bg={readContext:gn,useCallback:Tp,useContext:gn,useEffect:Tl,useImperativeHandle:Mp,useInsertionEffect:Sp,useLayoutEffect:Cp,useMemo:Ep,useReducer:$i,useRef:wp,useState:function(){return $i(la)},useDebugValue:El,useDeferredValue:function(e){var n=hn();return Dp(n,je.memoizedState,e)},useTransition:function(){var e=$i(la)[0],n=hn().memoizedState;return[e,n]},useMutableSource:vp,useSyncExternalStore:yp,useId:$p,unstable_isNewReconciler:!1},Fg={readContext:gn,useCallback:Tp,useContext:gn,useEffect:Tl,useImperativeHandle:Mp,useInsertionEffect:Sp,useLayoutEffect:Cp,useMemo:Ep,useReducer:Ai,useRef:wp,useState:function(){return Ai(la)},useDebugValue:El,useDeferredValue:function(e){var n=hn();return je===null?n.memoizedState=e:Dp(n,je.memoizedState,e)},useTransition:function(){var e=Ai(la)[0],n=hn().memoizedState;return[e,n]},useMutableSource:vp,useSyncExternalStore:yp,useId:$p,unstable_isNewReconciler:!1};function vn(e,n){if(e&&e.defaultProps){n=ye({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function bs(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:ye({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ei={isMounted:function(e){return(e=e._reactInternals)?$t(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Je(),a=st(e),o=Kn(r,a);o.payload=n,t!=null&&(o.callback=t),n=ot(e,o,a),n!==null&&(In(n,e,a,r),ao(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Je(),a=st(e),o=Kn(r,a);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=ot(e,o,a),n!==null&&(In(n,e,a,r),ao(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Je(),r=st(e),a=Kn(t,r);a.tag=2,n!=null&&(a.callback=n),n=ot(e,a,r),n!==null&&(In(n,e,r,t),ao(n,e,r))}};function Wc(e,n,t,r,a,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):n.prototype&&n.prototype.isPureReactComponent?!na(t,r)||!na(a,o):!0}function zp(e,n,t){var r=!1,a=dt,o=n.contextType;return typeof o=="object"&&o!==null?o=gn(o):(a=We(n)?kt:Le.current,r=n.contextTypes,o=(r=r!=null)?ir(e,a):dt),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ei,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),n}function Zc(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ei.enqueueReplaceState(n,n.state,null)}function _s(e,n,t,r){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},kl(e);var o=n.contextType;typeof o=="object"&&o!==null?a.context=gn(o):(o=We(n)?kt:Le.current,a.context=ir(e,o)),a.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(bs(e,n,o,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&ei.enqueueReplaceState(a,a.state,null),Mo(e,t,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function dr(e,n){try{var t="",r=n;do t+=vf(r),r=r.return;while(r);var a=t}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:a,digest:null}}function Vi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Is(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Gg=typeof WeakMap=="function"?WeakMap:Map;function Lp(e,n,t){t=Kn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Ao||(Ao=!0,Ds=r),Is(e,n)},t}function Rp(e,n,t){t=Kn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=n.value;t.payload=function(){return r(a)},t.callback=function(){Is(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Is(e,n),typeof r!="function"&&(it===null?it=new Set([this]):it.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function Yc(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Gg;var a=new Set;r.set(n,a)}else a=r.get(n),a===void 0&&(a=new Set,r.set(n,a));a.has(t)||(a.add(t),e=oh.bind(null,e,n,t),n.then(e,e))}function Xc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Qc(e,n,t,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Kn(-1,1),n.tag=2,ot(t,n,1))),t.lanes|=1),e)}var Ug=Un.ReactCurrentOwner,Ue=!1;function Ke(e,n,t,r){n.child=e===null?fp(n,null,t,r):lr(n,e.child,t,r)}function qc(e,n,t,r,a){t=t.render;var o=n.ref;return nr(n,a),r=Nl(e,n,t,r,o,a),t=Ml(),e!==null&&!Ue?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Gn(e,n,a)):(ge&&t&&hl(n),n.flags|=1,Ke(e,n,r,a),n.child)}function ed(e,n,t,r,a){if(e===null){var o=t.type;return typeof o=="function"&&!Rl(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,Op(e,n,o,r,a)):(e=uo(t.type,null,r,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&a)){var s=o.memoizedProps;if(t=t.compare,t=t!==null?t:na,t(s,r)&&e.ref===n.ref)return Gn(e,n,a)}return n.flags|=1,e=lt(o,r),e.ref=n.ref,e.return=n,n.child=e}function Op(e,n,t,r,a){if(e!==null){var o=e.memoizedProps;if(na(o,r)&&e.ref===n.ref)if(Ue=!1,n.pendingProps=r=o,(e.lanes&a)!==0)e.flags&131072&&(Ue=!0);else return n.lanes=e.lanes,Gn(e,n,a)}return ks(e,n,t,r,a)}function Kp(e,n,t){var r=n.pendingProps,a=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Zt,qe),qe|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,pe(Zt,qe),qe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,pe(Zt,qe),qe|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,pe(Zt,qe),qe|=r;return Ke(e,n,a,t),n.child}function Jp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function ks(e,n,t,r,a){var o=We(t)?kt:Le.current;return o=ir(n,o),nr(n,a),t=Nl(e,n,t,r,o,a),r=Ml(),e!==null&&!Ue?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Gn(e,n,a)):(ge&&r&&hl(n),n.flags|=1,Ke(e,n,t,a),n.child)}function nd(e,n,t,r,a){if(We(t)){var o=!0;jo(n)}else o=!1;if(nr(n,a),n.stateNode===null)so(e,n),zp(n,t,r),_s(n,t,r,a),r=!0;else if(e===null){var s=n.stateNode,c=n.memoizedProps;s.props=c;var d=s.context,u=t.contextType;typeof u=="object"&&u!==null?u=gn(u):(u=We(t)?kt:Le.current,u=ir(n,u));var p=t.getDerivedStateFromProps,m=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==r||d!==u)&&Zc(n,s,r,u),Zn=!1;var h=n.memoizedState;s.state=h,Mo(n,r,s,a),d=n.memoizedState,c!==r||h!==d||He.current||Zn?(typeof p=="function"&&(bs(n,t,p,r),d=n.memoizedState),(c=Zn||Wc(n,t,c,r,h,d,u))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=d),s.props=r,s.state=d,s.context=u,r=c):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{s=n.stateNode,hp(e,n),c=n.memoizedProps,u=n.type===n.elementType?c:vn(n.type,c),s.props=u,m=n.pendingProps,h=s.context,d=t.contextType,typeof d=="object"&&d!==null?d=gn(d):(d=We(t)?kt:Le.current,d=ir(n,d));var g=t.getDerivedStateFromProps;(p=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==m||h!==d)&&Zc(n,s,r,d),Zn=!1,h=n.memoizedState,s.state=h,Mo(n,r,s,a);var f=n.memoizedState;c!==m||h!==f||He.current||Zn?(typeof g=="function"&&(bs(n,t,g,r),f=n.memoizedState),(u=Zn||Wc(n,t,u,r,h,f,d)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,f,d),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,f,d)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=f),s.props=r,s.state=f,s.context=d,r=u):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return js(e,n,t,r,o,a)}function js(e,n,t,r,a,o){Jp(e,n);var s=(n.flags&128)!==0;if(!r&&!s)return a&&Oc(n,t,!1),Gn(e,n,o);r=n.stateNode,Ug.current=n;var c=s&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&s?(n.child=lr(n,e.child,null,o),n.child=lr(n,null,c,o)):Ke(e,n,c,o),n.memoizedState=r.state,a&&Oc(n,t,!0),n.child}function Bp(e){var n=e.stateNode;n.pendingContext?Rc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Rc(e,n.context,!1),jl(e,n.containerInfo)}function td(e,n,t,r,a){return sr(),vl(a),n.flags|=256,Ke(e,n,t,r),n.child}var ws={dehydrated:null,treeContext:null,retryLane:0};function Ss(e){return{baseLanes:e,cachePool:null,transitions:null}}function Fp(e,n,t){var r=n.pendingProps,a=he.current,o=!1,s=(n.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(a&2)!==0),c?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),pe(he,a&1),e===null)return vs(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=r.children,e=r.fallback,o?(r=n.mode,o=n.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ri(s,r,0,null),e=It(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Ss(t),n.memoizedState=ws,e):Dl(n,s));if(a=e.memoizedState,a!==null&&(c=a.dehydrated,c!==null))return Hg(e,n,s,r,c,a,t);if(o){o=r.fallback,s=n.mode,a=e.child,c=a.sibling;var d={mode:"hidden",children:r.children};return!(s&1)&&n.child!==a?(r=n.child,r.childLanes=0,r.pendingProps=d,n.deletions=null):(r=lt(a,d),r.subtreeFlags=a.subtreeFlags&14680064),c!==null?o=lt(c,o):(o=It(o,s,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,s=e.child.memoizedState,s=s===null?Ss(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~t,n.memoizedState=ws,r}return o=e.child,e=o.sibling,r=lt(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Dl(e,n){return n=ri({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Oa(e,n,t,r){return r!==null&&vl(r),lr(n,e.child,null,t),e=Dl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Hg(e,n,t,r,a,o,s){if(t)return n.flags&256?(n.flags&=-257,r=Vi(Error(F(422))),Oa(e,n,s,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,a=n.mode,r=ri({mode:"visible",children:r.children},a,0,null),o=It(o,a,s,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&lr(n,e.child,null,s),n.child.memoizedState=Ss(s),n.memoizedState=ws,o);if(!(n.mode&1))return Oa(e,n,s,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var c=r.dgst;return r=c,o=Error(F(419)),r=Vi(o,r,void 0),Oa(e,n,s,r)}if(c=(s&e.childLanes)!==0,Ue||c){if(r=Me,r!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|s)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,Fn(e,a),In(r,e,a,-1))}return Ll(),r=Vi(Error(F(421))),Oa(e,n,s,r)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=ih.bind(null,e),a._reactRetry=n,null):(e=o.treeContext,en=at(a.nextSibling),nn=n,ge=!0,bn=null,e!==null&&(ln[cn++]=Rn,ln[cn++]=On,ln[cn++]=jt,Rn=e.id,On=e.overflow,jt=n),n=Dl(n,r.children),n.flags|=4096,n)}function rd(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ys(e.return,n,t)}function Pi(e,n,t,r,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=a)}function Gp(e,n,t){var r=n.pendingProps,a=r.revealOrder,o=r.tail;if(Ke(e,n,r.children,t),r=he.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rd(e,t,n);else if(e.tag===19)rd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(pe(he,r),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&To(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),Pi(n,!1,a,t,o);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&To(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}Pi(n,!0,t,null,o);break;case"together":Pi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function so(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Gn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),St|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(F(153));if(n.child!==null){for(e=n.child,t=lt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=lt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Wg(e,n,t){switch(n.tag){case 3:Bp(n),sr();break;case 5:xp(n);break;case 1:We(n.type)&&jo(n);break;case 4:jl(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,a=n.memoizedProps.value;pe(Co,r._currentValue),r._currentValue=a;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(pe(he,he.current&1),n.flags|=128,null):t&n.child.childLanes?Fp(e,n,t):(pe(he,he.current&1),e=Gn(e,n,t),e!==null?e.sibling:null);pe(he,he.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Gp(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),pe(he,he.current),r)break;return null;case 22:case 23:return n.lanes=0,Kp(e,n,t)}return Gn(e,n,t)}var Up,Cs,Hp,Wp;Up=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Cs=function(){};Hp=function(e,n,t,r){var a=e.memoizedProps;if(a!==r){e=n.stateNode,bt(Tn.current);var o=null;switch(t){case"input":a=Zi(e,a),r=Zi(e,r),o=[];break;case"select":a=ye({},a,{value:void 0}),r=ye({},r,{value:void 0}),o=[];break;case"textarea":a=Qi(e,a),r=Qi(e,r),o=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Io)}es(t,r);var s;t=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var c=a[u];for(s in c)c.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Wr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var d=r[u];if(c=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&d!==c&&(d!=null||c!=null))if(u==="style")if(c){for(s in c)!c.hasOwnProperty(s)||d&&d.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in d)d.hasOwnProperty(s)&&c[s]!==d[s]&&(t||(t={}),t[s]=d[s])}else t||(o||(o=[]),o.push(u,t)),t=d;else u==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(o=o||[]).push(u,d)):u==="children"?typeof d!="string"&&typeof d!="number"||(o=o||[]).push(u,""+d):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Wr.hasOwnProperty(u)?(d!=null&&u==="onScroll"&&me("scroll",e),o||c===d||(o=[])):(o=o||[]).push(u,d))}t&&(o=o||[]).push("style",t);var u=o;(n.updateQueue=u)&&(n.flags|=4)}};Wp=function(e,n,t,r){t!==r&&(n.flags|=4)};function Nr(e,n){if(!ge)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Pe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Zg(e,n,t){var r=n.pendingProps;switch(xl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(n),null;case 1:return We(n.type)&&ko(),Pe(n),null;case 3:return r=n.stateNode,cr(),fe(He),fe(Le),Sl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(La(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,bn!==null&&(Vs(bn),bn=null))),Cs(e,n),Pe(n),null;case 5:wl(n);var a=bt(ia.current);if(t=n.type,e!==null&&n.stateNode!=null)Hp(e,n,t,r,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(F(166));return Pe(n),null}if(e=bt(Tn.current),La(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Nn]=n,r[aa]=o,e=(n.mode&1)!==0,t){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(a=0;a<Pr.length;a++)me(Pr[a],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":pc(r,o),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},me("invalid",r);break;case"textarea":fc(r,o),me("invalid",r)}es(t,o),a=null;for(var s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="children"?typeof c=="string"?r.textContent!==c&&(o.suppressHydrationWarning!==!0&&za(r.textContent,c,e),a=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(o.suppressHydrationWarning!==!0&&za(r.textContent,c,e),a=["children",""+c]):Wr.hasOwnProperty(s)&&c!=null&&s==="onScroll"&&me("scroll",r)}switch(t){case"input":Ma(r),mc(r,o,!0);break;case"textarea":Ma(r),gc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Io)}r=a,n.updateQueue=r,r!==null&&(n.flags|=4)}else{s=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Iu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(t,{is:r.is}):(e=s.createElement(t),t==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,t),e[Nn]=n,e[aa]=r,Up(e,n,!1,!1),n.stateNode=e;e:{switch(s=ns(t,r),t){case"dialog":me("cancel",e),me("close",e),a=r;break;case"iframe":case"object":case"embed":me("load",e),a=r;break;case"video":case"audio":for(a=0;a<Pr.length;a++)me(Pr[a],e);a=r;break;case"source":me("error",e),a=r;break;case"img":case"image":case"link":me("error",e),me("load",e),a=r;break;case"details":me("toggle",e),a=r;break;case"input":pc(e,r),a=Zi(e,r),me("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=ye({},r,{value:void 0}),me("invalid",e);break;case"textarea":fc(e,r),a=Qi(e,r),me("invalid",e);break;default:a=r}es(t,a),c=a;for(o in c)if(c.hasOwnProperty(o)){var d=c[o];o==="style"?wu(e,d):o==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&ku(e,d)):o==="children"?typeof d=="string"?(t!=="textarea"||d!=="")&&Zr(e,d):typeof d=="number"&&Zr(e,""+d):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Wr.hasOwnProperty(o)?d!=null&&o==="onScroll"&&me("scroll",e):d!=null&&tl(e,o,d,s))}switch(t){case"input":Ma(e),mc(e,r,!1);break;case"textarea":Ma(e),gc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ct(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Xt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Xt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Io)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Pe(n),null;case 6:if(e&&n.stateNode!=null)Wp(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(F(166));if(t=bt(ia.current),bt(Tn.current),La(n)){if(r=n.stateNode,t=n.memoizedProps,r[Nn]=n,(o=r.nodeValue!==t)&&(e=nn,e!==null))switch(e.tag){case 3:za(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&za(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Nn]=n,n.stateNode=r}return Pe(n),null;case 13:if(fe(he),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&en!==null&&n.mode&1&&!(n.flags&128))pp(),sr(),n.flags|=98560,o=!1;else if(o=La(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(F(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(F(317));o[Nn]=n}else sr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Pe(n),o=!1}else bn!==null&&(Vs(bn),bn=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||he.current&1?Se===0&&(Se=3):Ll())),n.updateQueue!==null&&(n.flags|=4),Pe(n),null);case 4:return cr(),Cs(e,n),e===null&&ta(n.stateNode.containerInfo),Pe(n),null;case 10:return _l(n.type._context),Pe(n),null;case 17:return We(n.type)&&ko(),Pe(n),null;case 19:if(fe(he),o=n.memoizedState,o===null)return Pe(n),null;if(r=(n.flags&128)!==0,s=o.rendering,s===null)if(r)Nr(o,!1);else{if(Se!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=To(e),s!==null){for(n.flags|=128,Nr(o,!1),r=s.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return pe(he,he.current&1|2),n.child}e=e.sibling}o.tail!==null&&_e()>ur&&(n.flags|=128,r=!0,Nr(o,!1),n.lanes=4194304)}else{if(!r)if(e=To(s),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Nr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ge)return Pe(n),null}else 2*_e()-o.renderingStartTime>ur&&t!==1073741824&&(n.flags|=128,r=!0,Nr(o,!1),n.lanes=4194304);o.isBackwards?(s.sibling=n.child,n.child=s):(t=o.last,t!==null?t.sibling=s:n.child=s,o.last=s)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=_e(),n.sibling=null,t=he.current,pe(he,r?t&1|2:t&1),n):(Pe(n),null);case 22:case 23:return zl(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?qe&1073741824&&(Pe(n),n.subtreeFlags&6&&(n.flags|=8192)):Pe(n),null;case 24:return null;case 25:return null}throw Error(F(156,n.tag))}function Yg(e,n){switch(xl(n),n.tag){case 1:return We(n.type)&&ko(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return cr(),fe(He),fe(Le),Sl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return wl(n),null;case 13:if(fe(he),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(F(340));sr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return fe(he),null;case 4:return cr(),null;case 10:return _l(n.type._context),null;case 22:case 23:return zl(),null;case 24:return null;default:return null}}var Ka=!1,ze=!1,Xg=typeof WeakSet=="function"?WeakSet:Set,H=null;function Wt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){be(e,n,r)}else t.current=null}function Ns(e,n,t){try{t()}catch(r){be(e,n,r)}}var ad=!1;function Qg(e,n){if(us=yo,e=qu(),gl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var s=0,c=-1,d=-1,u=0,p=0,m=e,h=null;n:for(;;){for(var g;m!==t||a!==0&&m.nodeType!==3||(c=s+a),m!==o||r!==0&&m.nodeType!==3||(d=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(g=m.firstChild)!==null;)h=m,m=g;for(;;){if(m===e)break n;if(h===t&&++u===a&&(c=s),h===o&&++p===r&&(d=s),(g=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=g}t=c===-1||d===-1?null:{start:c,end:d}}else t=null}t=t||{start:0,end:0}}else t=null;for(ps={focusedElem:e,selectionRange:t},yo=!1,H=n;H!==null;)if(n=H,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,H=e;else for(;H!==null;){n=H;try{var f=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(f!==null){var y=f.memoizedProps,I=f.memoizedState,v=n.stateNode,x=v.getSnapshotBeforeUpdate(n.elementType===n.type?y:vn(n.type,y),I);v.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=n.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(k){be(n,n.return,k)}if(e=n.sibling,e!==null){e.return=n.return,H=e;break}H=n.return}return f=ad,ad=!1,f}function Br(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&Ns(n,t,o)}a=a.next}while(a!==r)}}function ni(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Ms(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Zp(e){var n=e.alternate;n!==null&&(e.alternate=null,Zp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Nn],delete n[aa],delete n[gs],delete n[Ag],delete n[Vg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Yp(e){return e.tag===5||e.tag===3||e.tag===4}function od(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ts(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Io));else if(r!==4&&(e=e.child,e!==null))for(Ts(e,n,t),e=e.sibling;e!==null;)Ts(e,n,t),e=e.sibling}function Es(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Es(e,n,t),e=e.sibling;e!==null;)Es(e,n,t),e=e.sibling}var Ee=null,yn=!1;function Hn(e,n,t){for(t=t.child;t!==null;)Xp(e,n,t),t=t.sibling}function Xp(e,n,t){if(Mn&&typeof Mn.onCommitFiberUnmount=="function")try{Mn.onCommitFiberUnmount(Ho,t)}catch{}switch(t.tag){case 5:ze||Wt(t,n);case 6:var r=Ee,a=yn;Ee=null,Hn(e,n,t),Ee=r,yn=a,Ee!==null&&(yn?(e=Ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ee.removeChild(t.stateNode));break;case 18:Ee!==null&&(yn?(e=Ee,t=t.stateNode,e.nodeType===8?Mi(e.parentNode,t):e.nodeType===1&&Mi(e,t),qr(e)):Mi(Ee,t.stateNode));break;case 4:r=Ee,a=yn,Ee=t.stateNode.containerInfo,yn=!0,Hn(e,n,t),Ee=r,yn=a;break;case 0:case 11:case 14:case 15:if(!ze&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var o=a,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ns(t,n,s),a=a.next}while(a!==r)}Hn(e,n,t);break;case 1:if(!ze&&(Wt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(c){be(t,n,c)}Hn(e,n,t);break;case 21:Hn(e,n,t);break;case 22:t.mode&1?(ze=(r=ze)||t.memoizedState!==null,Hn(e,n,t),ze=r):Hn(e,n,t);break;default:Hn(e,n,t)}}function id(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Xg),n.forEach(function(r){var a=sh.bind(null,e,r);t.has(r)||(t.add(r),r.then(a,a))})}}function xn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r];try{var o=e,s=n,c=s;e:for(;c!==null;){switch(c.tag){case 5:Ee=c.stateNode,yn=!1;break e;case 3:Ee=c.stateNode.containerInfo,yn=!0;break e;case 4:Ee=c.stateNode.containerInfo,yn=!0;break e}c=c.return}if(Ee===null)throw Error(F(160));Xp(o,s,a),Ee=null,yn=!1;var d=a.alternate;d!==null&&(d.return=null),a.return=null}catch(u){be(a,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Qp(n,e),n=n.sibling}function Qp(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xn(n,e),Sn(e),r&4){try{Br(3,e,e.return),ni(3,e)}catch(y){be(e,e.return,y)}try{Br(5,e,e.return)}catch(y){be(e,e.return,y)}}break;case 1:xn(n,e),Sn(e),r&512&&t!==null&&Wt(t,t.return);break;case 5:if(xn(n,e),Sn(e),r&512&&t!==null&&Wt(t,t.return),e.flags&32){var a=e.stateNode;try{Zr(a,"")}catch(y){be(e,e.return,y)}}if(r&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=t!==null?t.memoizedProps:o,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&o.type==="radio"&&o.name!=null&&bu(a,o),ns(c,s);var u=ns(c,o);for(s=0;s<d.length;s+=2){var p=d[s],m=d[s+1];p==="style"?wu(a,m):p==="dangerouslySetInnerHTML"?ku(a,m):p==="children"?Zr(a,m):tl(a,p,m,u)}switch(c){case"input":Yi(a,o);break;case"textarea":_u(a,o);break;case"select":var h=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Xt(a,!!o.multiple,g,!1):h!==!!o.multiple&&(o.defaultValue!=null?Xt(a,!!o.multiple,o.defaultValue,!0):Xt(a,!!o.multiple,o.multiple?[]:"",!1))}a[aa]=o}catch(y){be(e,e.return,y)}}break;case 6:if(xn(n,e),Sn(e),r&4){if(e.stateNode===null)throw Error(F(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(y){be(e,e.return,y)}}break;case 3:if(xn(n,e),Sn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{qr(n.containerInfo)}catch(y){be(e,e.return,y)}break;case 4:xn(n,e),Sn(e);break;case 13:xn(n,e),Sn(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(Vl=_e())),r&4&&id(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(ze=(u=ze)||p,xn(n,e),ze=u):xn(n,e),Sn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(H=e,p=e.child;p!==null;){for(m=H=p;H!==null;){switch(h=H,g=h.child,h.tag){case 0:case 11:case 14:case 15:Br(4,h,h.return);break;case 1:Wt(h,h.return);var f=h.stateNode;if(typeof f.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,f.props=n.memoizedProps,f.state=n.memoizedState,f.componentWillUnmount()}catch(y){be(r,t,y)}}break;case 5:Wt(h,h.return);break;case 22:if(h.memoizedState!==null){ld(m);continue}}g!==null?(g.return=h,H=g):ld(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{a=m.stateNode,u?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(c=m.stateNode,d=m.memoizedProps.style,s=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=ju("display",s))}catch(y){be(e,e.return,y)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(y){be(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:xn(n,e),Sn(e),r&4&&id(e);break;case 21:break;default:xn(n,e),Sn(e)}}function Sn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Yp(t)){var r=t;break e}t=t.return}throw Error(F(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Zr(a,""),r.flags&=-33);var o=od(e);Es(e,o,a);break;case 3:case 4:var s=r.stateNode.containerInfo,c=od(e);Ts(e,c,s);break;default:throw Error(F(161))}}catch(d){be(e,e.return,d)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function qg(e,n,t){H=e,qp(e)}function qp(e,n,t){for(var r=(e.mode&1)!==0;H!==null;){var a=H,o=a.child;if(a.tag===22&&r){var s=a.memoizedState!==null||Ka;if(!s){var c=a.alternate,d=c!==null&&c.memoizedState!==null||ze;c=Ka;var u=ze;if(Ka=s,(ze=d)&&!u)for(H=a;H!==null;)s=H,d=s.child,s.tag===22&&s.memoizedState!==null?cd(a):d!==null?(d.return=s,H=d):cd(a);for(;o!==null;)H=o,qp(o),o=o.sibling;H=a,Ka=c,ze=u}sd(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,H=o):sd(e)}}function sd(e){for(;H!==null;){var n=H;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ze||ni(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ze)if(t===null)r.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:vn(n.type,t.memoizedProps);r.componentDidUpdate(a,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Gc(n,o,r);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Gc(n,s,t)}break;case 5:var c=n.stateNode;if(t===null&&n.flags&4){t=c;var d=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&t.focus();break;case"img":d.src&&(t.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&qr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ze||n.flags&512&&Ms(n)}catch(h){be(n,n.return,h)}}if(n===e){H=null;break}if(t=n.sibling,t!==null){t.return=n.return,H=t;break}H=n.return}}function ld(e){for(;H!==null;){var n=H;if(n===e){H=null;break}var t=n.sibling;if(t!==null){t.return=n.return,H=t;break}H=n.return}}function cd(e){for(;H!==null;){var n=H;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ni(4,n)}catch(d){be(n,t,d)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var a=n.return;try{r.componentDidMount()}catch(d){be(n,a,d)}}var o=n.return;try{Ms(n)}catch(d){be(n,o,d)}break;case 5:var s=n.return;try{Ms(n)}catch(d){be(n,s,d)}}}catch(d){be(n,n.return,d)}if(n===e){H=null;break}var c=n.sibling;if(c!==null){c.return=n.return,H=c;break}H=n.return}}var eh=Math.ceil,$o=Un.ReactCurrentDispatcher,$l=Un.ReactCurrentOwner,pn=Un.ReactCurrentBatchConfig,oe=0,Me=null,ke=null,$e=0,qe=0,Zt=pt(0),Se=0,da=null,St=0,ti=0,Al=0,Fr=null,Ge=null,Vl=0,ur=1/0,Vn=null,Ao=!1,Ds=null,it=null,Ja=!1,et=null,Vo=0,Gr=0,$s=null,lo=-1,co=0;function Je(){return oe&6?_e():lo!==-1?lo:lo=_e()}function st(e){return e.mode&1?oe&2&&$e!==0?$e&-$e:zg.transition!==null?(co===0&&(co=zu()),co):(e=le,e!==0||(e=window.event,e=e===void 0?16:Fu(e.type)),e):1}function In(e,n,t,r){if(50<Gr)throw Gr=0,$s=null,Error(F(185));va(e,t,r),(!(oe&2)||e!==Me)&&(e===Me&&(!(oe&2)&&(ti|=t),Se===4&&Xn(e,$e)),Ze(e,r),t===1&&oe===0&&!(n.mode&1)&&(ur=_e()+500,Qo&&mt()))}function Ze(e,n){var t=e.callbackNode;zf(e,n);var r=vo(e,e===Me?$e:0);if(r===0)t!==null&&vc(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&vc(t),n===1)e.tag===0?Pg(dd.bind(null,e)):cp(dd.bind(null,e)),Dg(function(){!(oe&6)&&mt()}),t=null;else{switch(Lu(r)){case 1:t=sl;break;case 4:t=Vu;break;case 16:t=xo;break;case 536870912:t=Pu;break;default:t=xo}t=sm(t,em.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function em(e,n){if(lo=-1,co=0,oe&6)throw Error(F(327));var t=e.callbackNode;if(tr()&&e.callbackNode!==t)return null;var r=vo(e,e===Me?$e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Po(e,r);else{n=r;var a=oe;oe|=2;var o=tm();(Me!==e||$e!==n)&&(Vn=null,ur=_e()+500,_t(e,n));do try{rh();break}catch(c){nm(e,c)}while(!0);bl(),$o.current=o,oe=a,ke!==null?n=0:(Me=null,$e=0,n=Se)}if(n!==0){if(n===2&&(a=is(e),a!==0&&(r=a,n=As(e,a))),n===1)throw t=da,_t(e,0),Xn(e,r),Ze(e,_e()),t;if(n===6)Xn(e,r);else{if(a=e.current.alternate,!(r&30)&&!nh(a)&&(n=Po(e,r),n===2&&(o=is(e),o!==0&&(r=o,n=As(e,o))),n===1))throw t=da,_t(e,0),Xn(e,r),Ze(e,_e()),t;switch(e.finishedWork=a,e.finishedLanes=r,n){case 0:case 1:throw Error(F(345));case 2:ht(e,Ge,Vn);break;case 3:if(Xn(e,r),(r&130023424)===r&&(n=Vl+500-_e(),10<n)){if(vo(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Je(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=fs(ht.bind(null,e,Ge,Vn),n);break}ht(e,Ge,Vn);break;case 4:if(Xn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,a=-1;0<r;){var s=31-_n(r);o=1<<s,s=n[s],s>a&&(a=s),r&=~o}if(r=a,r=_e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*eh(r/1960))-r,10<r){e.timeoutHandle=fs(ht.bind(null,e,Ge,Vn),r);break}ht(e,Ge,Vn);break;case 5:ht(e,Ge,Vn);break;default:throw Error(F(329))}}}return Ze(e,_e()),e.callbackNode===t?em.bind(null,e):null}function As(e,n){var t=Fr;return e.current.memoizedState.isDehydrated&&(_t(e,n).flags|=256),e=Po(e,n),e!==2&&(n=Ge,Ge=t,n!==null&&Vs(n)),e}function Vs(e){Ge===null?Ge=e:Ge.push.apply(Ge,e)}function nh(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var a=t[r],o=a.getSnapshot;a=a.value;try{if(!jn(o(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xn(e,n){for(n&=~Al,n&=~ti,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-_n(n),r=1<<t;e[t]=-1,n&=~r}}function dd(e){if(oe&6)throw Error(F(327));tr();var n=vo(e,0);if(!(n&1))return Ze(e,_e()),null;var t=Po(e,n);if(e.tag!==0&&t===2){var r=is(e);r!==0&&(n=r,t=As(e,r))}if(t===1)throw t=da,_t(e,0),Xn(e,n),Ze(e,_e()),t;if(t===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ht(e,Ge,Vn),Ze(e,_e()),null}function Pl(e,n){var t=oe;oe|=1;try{return e(n)}finally{oe=t,oe===0&&(ur=_e()+500,Qo&&mt())}}function Ct(e){et!==null&&et.tag===0&&!(oe&6)&&tr();var n=oe;oe|=1;var t=pn.transition,r=le;try{if(pn.transition=null,le=1,e)return e()}finally{le=r,pn.transition=t,oe=n,!(oe&6)&&mt()}}function zl(){qe=Zt.current,fe(Zt)}function _t(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Eg(t)),ke!==null)for(t=ke.return;t!==null;){var r=t;switch(xl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ko();break;case 3:cr(),fe(He),fe(Le),Sl();break;case 5:wl(r);break;case 4:cr();break;case 13:fe(he);break;case 19:fe(he);break;case 10:_l(r.type._context);break;case 22:case 23:zl()}t=t.return}if(Me=e,ke=e=lt(e.current,null),$e=qe=n,Se=0,da=null,Al=ti=St=0,Ge=Fr=null,yt!==null){for(n=0;n<yt.length;n++)if(t=yt[n],r=t.interleaved,r!==null){t.interleaved=null;var a=r.next,o=t.pending;if(o!==null){var s=o.next;o.next=a,r.next=s}t.pending=r}yt=null}return e}function nm(e,n){do{var t=ke;try{if(bl(),oo.current=Do,Eo){for(var r=ve.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Eo=!1}if(wt=0,Ne=je=ve=null,Jr=!1,sa=0,$l.current=null,t===null||t.return===null){Se=1,da=n,ke=null;break}e:{var o=e,s=t.return,c=t,d=n;if(n=$e,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var u=d,p=c,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var g=Xc(s);if(g!==null){g.flags&=-257,Qc(g,s,c,o,n),g.mode&1&&Yc(o,u,n),n=g,d=u;var f=n.updateQueue;if(f===null){var y=new Set;y.add(d),n.updateQueue=y}else f.add(d);break e}else{if(!(n&1)){Yc(o,u,n),Ll();break e}d=Error(F(426))}}else if(ge&&c.mode&1){var I=Xc(s);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Qc(I,s,c,o,n),vl(dr(d,c));break e}}o=d=dr(d,c),Se!==4&&(Se=2),Fr===null?Fr=[o]:Fr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var v=Lp(o,d,n);Fc(o,v);break e;case 1:c=d;var x=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof x.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(it===null||!it.has(b)))){o.flags|=65536,n&=-n,o.lanes|=n;var k=Rp(o,c,n);Fc(o,k);break e}}o=o.return}while(o!==null)}am(t)}catch(T){n=T,ke===t&&t!==null&&(ke=t=t.return);continue}break}while(!0)}function tm(){var e=$o.current;return $o.current=Do,e===null?Do:e}function Ll(){(Se===0||Se===3||Se===2)&&(Se=4),Me===null||!(St&268435455)&&!(ti&268435455)||Xn(Me,$e)}function Po(e,n){var t=oe;oe|=2;var r=tm();(Me!==e||$e!==n)&&(Vn=null,_t(e,n));do try{th();break}catch(a){nm(e,a)}while(!0);if(bl(),oe=t,$o.current=r,ke!==null)throw Error(F(261));return Me=null,$e=0,Se}function th(){for(;ke!==null;)rm(ke)}function rh(){for(;ke!==null&&!Nf();)rm(ke)}function rm(e){var n=im(e.alternate,e,qe);e.memoizedProps=e.pendingProps,n===null?am(e):ke=n,$l.current=null}function am(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Yg(t,n),t!==null){t.flags&=32767,ke=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Se=6,ke=null;return}}else if(t=Zg(t,n,qe),t!==null){ke=t;return}if(n=n.sibling,n!==null){ke=n;return}ke=n=e}while(n!==null);Se===0&&(Se=5)}function ht(e,n,t){var r=le,a=pn.transition;try{pn.transition=null,le=1,ah(e,n,t,r)}finally{pn.transition=a,le=r}return null}function ah(e,n,t,r){do tr();while(et!==null);if(oe&6)throw Error(F(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Lf(e,o),e===Me&&(ke=Me=null,$e=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ja||(Ja=!0,sm(xo,function(){return tr(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=pn.transition,pn.transition=null;var s=le;le=1;var c=oe;oe|=4,$l.current=null,Qg(e,t),Qp(t,e),jg(ps),yo=!!us,ps=us=null,e.current=t,qg(t),Mf(),oe=c,le=s,pn.transition=o}else e.current=t;if(Ja&&(Ja=!1,et=e,Vo=a),o=e.pendingLanes,o===0&&(it=null),Df(t.stateNode),Ze(e,_e()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],r(a.value,{componentStack:a.stack,digest:a.digest});if(Ao)throw Ao=!1,e=Ds,Ds=null,e;return Vo&1&&e.tag!==0&&tr(),o=e.pendingLanes,o&1?e===$s?Gr++:(Gr=0,$s=e):Gr=0,mt(),null}function tr(){if(et!==null){var e=Lu(Vo),n=pn.transition,t=le;try{if(pn.transition=null,le=16>e?16:e,et===null)var r=!1;else{if(e=et,et=null,Vo=0,oe&6)throw Error(F(331));var a=oe;for(oe|=4,H=e.current;H!==null;){var o=H,s=o.child;if(H.flags&16){var c=o.deletions;if(c!==null){for(var d=0;d<c.length;d++){var u=c[d];for(H=u;H!==null;){var p=H;switch(p.tag){case 0:case 11:case 15:Br(8,p,o)}var m=p.child;if(m!==null)m.return=p,H=m;else for(;H!==null;){p=H;var h=p.sibling,g=p.return;if(Zp(p),p===u){H=null;break}if(h!==null){h.return=g,H=h;break}H=g}}}var f=o.alternate;if(f!==null){var y=f.child;if(y!==null){f.child=null;do{var I=y.sibling;y.sibling=null,y=I}while(y!==null)}}H=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,H=s;else e:for(;H!==null;){if(o=H,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Br(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,H=v;break e}H=o.return}}var x=e.current;for(H=x;H!==null;){s=H;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,H=b;else e:for(s=x;H!==null;){if(c=H,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:ni(9,c)}}catch(T){be(c,c.return,T)}if(c===s){H=null;break e}var k=c.sibling;if(k!==null){k.return=c.return,H=k;break e}H=c.return}}if(oe=a,mt(),Mn&&typeof Mn.onPostCommitFiberRoot=="function")try{Mn.onPostCommitFiberRoot(Ho,e)}catch{}r=!0}return r}finally{le=t,pn.transition=n}}return!1}function ud(e,n,t){n=dr(t,n),n=Lp(e,n,1),e=ot(e,n,1),n=Je(),e!==null&&(va(e,1,n),Ze(e,n))}function be(e,n,t){if(e.tag===3)ud(e,e,t);else for(;n!==null;){if(n.tag===3){ud(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(it===null||!it.has(r))){e=dr(t,e),e=Rp(n,e,1),n=ot(n,e,1),e=Je(),n!==null&&(va(n,1,e),Ze(n,e));break}}n=n.return}}function oh(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Je(),e.pingedLanes|=e.suspendedLanes&t,Me===e&&($e&t)===t&&(Se===4||Se===3&&($e&130023424)===$e&&500>_e()-Vl?_t(e,0):Al|=t),Ze(e,n)}function om(e,n){n===0&&(e.mode&1?(n=Da,Da<<=1,!(Da&130023424)&&(Da=4194304)):n=1);var t=Je();e=Fn(e,n),e!==null&&(va(e,n,t),Ze(e,t))}function ih(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),om(e,t)}function sh(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(n),om(e,t)}var im;im=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||He.current)Ue=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ue=!1,Wg(e,n,t);Ue=!!(e.flags&131072)}else Ue=!1,ge&&n.flags&1048576&&dp(n,So,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;so(e,n),e=n.pendingProps;var a=ir(n,Le.current);nr(n,t),a=Nl(null,n,r,e,a,t);var o=Ml();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,We(r)?(o=!0,jo(n)):o=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,kl(n),a.updater=ei,n.stateNode=a,a._reactInternals=n,_s(n,r,e,t),n=js(null,n,r,!0,o,t)):(n.tag=0,ge&&o&&hl(n),Ke(null,n,a,t),n=n.child),n;case 16:r=n.elementType;e:{switch(so(e,n),e=n.pendingProps,a=r._init,r=a(r._payload),n.type=r,a=n.tag=ch(r),e=vn(r,e),a){case 0:n=ks(null,n,r,e,t);break e;case 1:n=nd(null,n,r,e,t);break e;case 11:n=qc(null,n,r,e,t);break e;case 14:n=ed(null,n,r,vn(r.type,e),t);break e}throw Error(F(306,r,""))}return n;case 0:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:vn(r,a),ks(e,n,r,a,t);case 1:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:vn(r,a),nd(e,n,r,a,t);case 3:e:{if(Bp(n),e===null)throw Error(F(387));r=n.pendingProps,o=n.memoizedState,a=o.element,hp(e,n),Mo(n,r,null,t);var s=n.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){a=dr(Error(F(423)),n),n=td(e,n,r,t,a);break e}else if(r!==a){a=dr(Error(F(424)),n),n=td(e,n,r,t,a);break e}else for(en=at(n.stateNode.containerInfo.firstChild),nn=n,ge=!0,bn=null,t=fp(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(sr(),r===a){n=Gn(e,n,t);break e}Ke(e,n,r,t)}n=n.child}return n;case 5:return xp(n),e===null&&vs(n),r=n.type,a=n.pendingProps,o=e!==null?e.memoizedProps:null,s=a.children,ms(r,a)?s=null:o!==null&&ms(r,o)&&(n.flags|=32),Jp(e,n),Ke(e,n,s,t),n.child;case 6:return e===null&&vs(n),null;case 13:return Fp(e,n,t);case 4:return jl(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=lr(n,null,r,t):Ke(e,n,r,t),n.child;case 11:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:vn(r,a),qc(e,n,r,a,t);case 7:return Ke(e,n,n.pendingProps,t),n.child;case 8:return Ke(e,n,n.pendingProps.children,t),n.child;case 12:return Ke(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,a=n.pendingProps,o=n.memoizedProps,s=a.value,pe(Co,r._currentValue),r._currentValue=s,o!==null)if(jn(o.value,s)){if(o.children===a.children&&!He.current){n=Gn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var d=c.firstContext;d!==null;){if(d.context===r){if(o.tag===1){d=Kn(-1,t&-t),d.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?d.next=d:(d.next=p.next,p.next=d),u.pending=d}}o.lanes|=t,d=o.alternate,d!==null&&(d.lanes|=t),ys(o.return,t,n),c.lanes|=t;break}d=d.next}}else if(o.tag===10)s=o.type===n.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(F(341));s.lanes|=t,c=s.alternate,c!==null&&(c.lanes|=t),ys(s,t,n),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===n){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ke(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,r=n.pendingProps.children,nr(n,t),a=gn(a),r=r(a),n.flags|=1,Ke(e,n,r,t),n.child;case 14:return r=n.type,a=vn(r,n.pendingProps),a=vn(r.type,a),ed(e,n,r,a,t);case 15:return Op(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:vn(r,a),so(e,n),n.tag=1,We(r)?(e=!0,jo(n)):e=!1,nr(n,t),zp(n,r,a),_s(n,r,a,t),js(null,n,r,!0,e,t);case 19:return Gp(e,n,t);case 22:return Kp(e,n,t)}throw Error(F(156,n.tag))};function sm(e,n){return Au(e,n)}function lh(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(e,n,t,r){return new lh(e,n,t,r)}function Rl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ch(e){if(typeof e=="function")return Rl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===al)return 11;if(e===ol)return 14}return 2}function lt(e,n){var t=e.alternate;return t===null?(t=dn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function uo(e,n,t,r,a,o){var s=2;if(r=e,typeof e=="function")Rl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Rt:return It(t.children,a,o,n);case rl:s=8,a|=8;break;case Gi:return e=dn(12,t,n,a|2),e.elementType=Gi,e.lanes=o,e;case Ui:return e=dn(13,t,n,a),e.elementType=Ui,e.lanes=o,e;case Hi:return e=dn(19,t,n,a),e.elementType=Hi,e.lanes=o,e;case xu:return ri(t,a,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gu:s=10;break e;case hu:s=9;break e;case al:s=11;break e;case ol:s=14;break e;case Wn:s=16,r=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return n=dn(s,t,n,a),n.elementType=e,n.type=r,n.lanes=o,n}function It(e,n,t,r){return e=dn(7,e,r,n),e.lanes=t,e}function ri(e,n,t,r){return e=dn(22,e,r,n),e.elementType=xu,e.lanes=t,e.stateNode={isHidden:!1},e}function zi(e,n,t){return e=dn(6,e,null,n),e.lanes=t,e}function Li(e,n,t){return n=dn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function dh(e,n,t,r,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vi(0),this.expirationTimes=vi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vi(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ol(e,n,t,r,a,o,s,c,d){return e=new dh(e,n,t,c,d),n===1?(n=1,o===!0&&(n|=8)):n=0,o=dn(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},kl(o),e}function uh(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Lt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function lm(e){if(!e)return dt;e=e._reactInternals;e:{if($t(e)!==e||e.tag!==1)throw Error(F(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(We(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(F(171))}if(e.tag===1){var t=e.type;if(We(t))return lp(e,t,n)}return n}function cm(e,n,t,r,a,o,s,c,d){return e=Ol(t,r,!0,e,a,o,s,c,d),e.context=lm(null),t=e.current,r=Je(),a=st(t),o=Kn(r,a),o.callback=n??null,ot(t,o,a),e.current.lanes=a,va(e,a,r),Ze(e,r),e}function ai(e,n,t,r){var a=n.current,o=Je(),s=st(a);return t=lm(t),n.context===null?n.context=t:n.pendingContext=t,n=Kn(o,s),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=ot(a,n,s),e!==null&&(In(e,a,s,o),ao(e,a,s)),s}function zo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Kl(e,n){pd(e,n),(e=e.alternate)&&pd(e,n)}function ph(){return null}var dm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Jl(e){this._internalRoot=e}oi.prototype.render=Jl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(F(409));ai(e,n,null,null)};oi.prototype.unmount=Jl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ct(function(){ai(null,e,null,null)}),n[Bn]=null}};function oi(e){this._internalRoot=e}oi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ku();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Yn.length&&n!==0&&n<Yn[t].priority;t++);Yn.splice(t,0,e),t===0&&Bu(e)}};function Bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ii(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function md(){}function mh(e,n,t,r,a){if(a){if(typeof r=="function"){var o=r;r=function(){var u=zo(s);o.call(u)}}var s=cm(n,r,e,0,null,!1,!1,"",md);return e._reactRootContainer=s,e[Bn]=s.current,ta(e.nodeType===8?e.parentNode:e),Ct(),s}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var c=r;r=function(){var u=zo(d);c.call(u)}}var d=Ol(e,0,!1,null,null,!1,!1,"",md);return e._reactRootContainer=d,e[Bn]=d.current,ta(e.nodeType===8?e.parentNode:e),Ct(function(){ai(n,d,t,r)}),d}function si(e,n,t,r,a){var o=t._reactRootContainer;if(o){var s=o;if(typeof a=="function"){var c=a;a=function(){var d=zo(s);c.call(d)}}ai(n,s,e,a)}else s=mh(t,n,e,a,r);return zo(s)}Ru=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Vr(n.pendingLanes);t!==0&&(ll(n,t|1),Ze(n,_e()),!(oe&6)&&(ur=_e()+500,mt()))}break;case 13:Ct(function(){var r=Fn(e,1);if(r!==null){var a=Je();In(r,e,1,a)}}),Kl(e,1)}};cl=function(e){if(e.tag===13){var n=Fn(e,134217728);if(n!==null){var t=Je();In(n,e,134217728,t)}Kl(e,134217728)}};Ou=function(e){if(e.tag===13){var n=st(e),t=Fn(e,n);if(t!==null){var r=Je();In(t,e,n,r)}Kl(e,n)}};Ku=function(){return le};Ju=function(e,n){var t=le;try{return le=e,n()}finally{le=t}};rs=function(e,n,t){switch(n){case"input":if(Yi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var a=Xo(r);if(!a)throw Error(F(90));yu(r),Yi(r,a)}}}break;case"textarea":_u(e,t);break;case"select":n=t.value,n!=null&&Xt(e,!!t.multiple,n,!1)}};Nu=Pl;Mu=Ct;var fh={usingClientEntryPoint:!1,Events:[ba,Bt,Xo,Su,Cu,Pl]},Mr={findFiberByHostInstance:vt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gh={bundleType:Mr.bundleType,version:Mr.version,rendererPackageName:Mr.rendererPackageName,rendererConfig:Mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Un.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Du(e),e===null?null:e.stateNode},findFiberByHostInstance:Mr.findFiberByHostInstance||ph,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ba=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ba.isDisabled&&Ba.supportsFiber)try{Ho=Ba.inject(gh),Mn=Ba}catch{}}rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fh;rn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bl(n))throw Error(F(200));return uh(e,n,null,t)};rn.createRoot=function(e,n){if(!Bl(e))throw Error(F(299));var t=!1,r="",a=dm;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=Ol(e,1,!1,null,null,t,!1,r,a),e[Bn]=n.current,ta(e.nodeType===8?e.parentNode:e),new Jl(n)};rn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=Du(n),e=e===null?null:e.stateNode,e};rn.flushSync=function(e){return Ct(e)};rn.hydrate=function(e,n,t){if(!ii(n))throw Error(F(200));return si(null,e,n,!0,t)};rn.hydrateRoot=function(e,n,t){if(!Bl(e))throw Error(F(405));var r=t!=null&&t.hydratedSources||null,a=!1,o="",s=dm;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=cm(n,null,e,1,t??null,a,!1,o,s),e[Bn]=n.current,ta(e),r)for(e=0;e<r.length;e++)t=r[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new oi(n)};rn.render=function(e,n,t){if(!ii(n))throw Error(F(200));return si(null,e,n,!1,t)};rn.unmountComponentAtNode=function(e){if(!ii(e))throw Error(F(40));return e._reactRootContainer?(Ct(function(){si(null,null,e,!1,function(){e._reactRootContainer=null,e[Bn]=null})}),!0):!1};rn.unstable_batchedUpdates=Pl;rn.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ii(t))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return si(e,n,t,!1,r)};rn.version="18.3.1-next-f1338f8080-20240426";function um(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(um)}catch(e){console.error(e)}}um(),uu.exports=rn;var Ia=uu.exports,fd=Ia;Bi.createRoot=fd.createRoot,Bi.hydrateRoot=fd.hydrateRoot;const rr=["player1","player2","player3","player4","player5","player6","player7","player8"];function hh(e,n){return e.players[n]}function xh(e,n,t){return{...e,players:{...e.players,[n]:t}}}function vh(e,n){const t=e.teams[n];return e.playerIds.filter(r=>r!==n&&e.teams[r]!==t&&!e.players[r].isDefeated)}function De(e){return`P${e.replace("player","")}`}const yh=[{id:"ag-1",unitDeckId:"AG",nameJa:"ランス",nameCn:"长枪",actionType:"melee",frontImageId:"cards/ag/ag-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"ag-2",unitDeckId:"AG",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ag/ag-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ag-3",unitDeckId:"AG",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ag/ag-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ag-4",unitDeckId:"AG",nameJa:"スモールレーザー",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/ag/ag-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2,isEnergyWeapon:!0},{id:"ag-5",unitDeckId:"AG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ag/ag-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"ag-6",unitDeckId:"AG",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ag/ag-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-7",unitDeckId:"AG",nameJa:"ランス",nameCn:"长枪",actionType:"melee",frontImageId:"cards/ag/ag-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"ag-8",unitDeckId:"AG",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ag/ag-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-9",unitDeckId:"AG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/ag/ag-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"ag-10",unitDeckId:"AG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"ag-11",unitDeckId:"AG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/ag/ag-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"ag-12",unitDeckId:"AG",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ag/ag-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"ag-13",unitDeckId:"AG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"ag-14",unitDeckId:"AG",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ag/ag-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-15",unitDeckId:"AG",nameJa:"バーニア",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/ag/ag-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ag-16",unitDeckId:"AG",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/ag/ag-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ag-17",unitDeckId:"AG",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/ag/ag-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ag-18",unitDeckId:"AG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"ag-19",unitDeckId:"AG",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ag/ag-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-20",unitDeckId:"AG",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ag/ag-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-21",unitDeckId:"AG",nameJa:"バーニア",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/ag/ag-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"}],bh=[{id:"ar-1",unitDeckId:"AR",nameJa:"シールド",nameCn:"护盾",actionType:"armor",frontImageId:"cards/ar/ar-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止4点射击伤害。该卡在准备区时，可以将其破坏并防止4点任意伤害。"},{id:"ar-2",unitDeckId:"AR",nameJa:"アンカー",nameCn:"长锚",actionType:"ranged",frontImageId:"cards/ar/ar-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:1,rangeMax:3,damage:void 0,effectText:"射击前可以改变机甲的朝向。命中后，使攻击目标强制移动到自机面前，期间目标朝向不变。"},{id:"ar-3",unitDeckId:"AR",nameJa:"陸上機雷",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/ar/ar-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"在自机周围8格不重叠地设置机雷指示物和替身雷各2个。在各个时机结束时，检查是否有机甲位于指示物所在格。若有，将指示物翻开展示，如果是机雷的话对所在格中的机甲造成伤害，然后将指示物弃掉。"},{id:"ar-4",unitDeckId:"AR",nameJa:"陸上機雷",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/ar/ar-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"在自机周围8格不重叠地设置机雷指示物和替身雷各2个。在各个时机结束时，检查是否有机甲位于指示物所在格。若有，将指示物翻开展示，如果是机雷的话对所在格中的机甲造成伤害，然后将指示物弃掉。"},{id:"ar-5",unitDeckId:"AR",nameJa:"メイス",nameCn:"狼牙棒",actionType:"melee",frontImageId:"cards/ar/ar-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ar-6",unitDeckId:"AR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ar/ar-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ar-7",unitDeckId:"AR",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"ar-8",unitDeckId:"AR",nameJa:"移動６",nameCn:"移动6",actionType:"movement",frontImageId:"cards/ar/ar-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:6,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-9",unitDeckId:"AR",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ar/ar-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"ar-10",unitDeckId:"AR",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/ar/ar-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ar-11",unitDeckId:"AR",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"ar-12",unitDeckId:"AR",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/ar/ar-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ar-13",unitDeckId:"AR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ar/ar-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ar-14",unitDeckId:"AR",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"ar-15",unitDeckId:"AR",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ar/ar-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-16",unitDeckId:"AR",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ar/ar-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-17",unitDeckId:"AR",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ar/ar-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-18",unitDeckId:"AR",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ar/ar-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-19",unitDeckId:"AR",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ar/ar-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-20",unitDeckId:"AR",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ar/ar-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"}],_h=[{id:"bg-1",unitDeckId:"BG",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4,hasBombIcon:!0},{id:"bg-2",unitDeckId:"BG",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4,hasBombIcon:!0},{id:"bg-3",unitDeckId:"BG",nameJa:"ミドルレーザ",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/bg/bg-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3},{id:"bg-4",unitDeckId:"BG",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4,hasBombIcon:!0},{id:"bg-5",unitDeckId:"BG",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/bg/bg-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"bg-6",unitDeckId:"BG",nameJa:"スモールレーザ",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/bg/bg-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2},{id:"bg-7",unitDeckId:"BG",nameJa:"スナイパーライフル",nameCn:"狙击步枪",actionType:"ranged",frontImageId:"cards/bg/bg-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3,hasBombIcon:!0},{id:"bg-8",unitDeckId:"BG",nameJa:"スナイパーライフル",nameCn:"狙击步枪",actionType:"ranged",frontImageId:"cards/bg/bg-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3,hasBombIcon:!0},{id:"bg-9",unitDeckId:"BG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/bg/bg-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"bg-10",unitDeckId:"BG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/bg/bg-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"bg-11",unitDeckId:"BG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/bg/bg-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"bg-12",unitDeckId:"BG",nameJa:"スモールレーザ",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/bg/bg-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2},{id:"bg-13",unitDeckId:"BG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/bg/bg-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"bg-14",unitDeckId:"BG",nameJa:"ミドルレーザ",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/bg/bg-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3},{id:"bg-15",unitDeckId:"BG",nameJa:"スナイパーライフル",nameCn:"狙击步枪",actionType:"ranged",frontImageId:"cards/bg/bg-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3,hasBombIcon:!0},{id:"bg-16",unitDeckId:"BG",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/bg/bg-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"bg-17",unitDeckId:"BG",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/bg/bg-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"bg-18",unitDeckId:"BG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/bg/bg-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"bg-19",unitDeckId:"BG",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/bg/bg-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg-20",unitDeckId:"BG",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/bg/bg-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg-21",unitDeckId:"BG",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/bg/bg-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg-22",unitDeckId:"BG",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/bg/bg-22-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"bg-23",unitDeckId:"BG",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/bg/bg-23-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"}],Ih=[{id:"ho-1",unitDeckId:"HO",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ho/ho-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-2",unitDeckId:"HO",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ho/ho-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-3",unitDeckId:"HO",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ho/ho-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-4",unitDeckId:"HO",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ho/ho-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-5",unitDeckId:"HO",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ho/ho-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"ho-6",unitDeckId:"HO",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ho/ho-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"ho-7",unitDeckId:"HO",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ho/ho-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ho-8",unitDeckId:"HO",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ho/ho-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-9",unitDeckId:"HO",nameJa:"移動６",nameCn:"移动6",actionType:"movement",frontImageId:"cards/ho/ho-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:6,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-10",unitDeckId:"HO",nameJa:"移動７",nameCn:"移动7",actionType:"movement",frontImageId:"cards/ho/ho-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:7,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-11",unitDeckId:"HO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ho/ho-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ho-12",unitDeckId:"HO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ho/ho-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ho-13",unitDeckId:"HO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/ho/ho-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"ho-14",unitDeckId:"HO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/ho/ho-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"ho-15",unitDeckId:"HO",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ho/ho-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ho-16",unitDeckId:"HO",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/ho/ho-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"ho-17",unitDeckId:"HO",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/ho/ho-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"}],kh=[{id:"hy-1",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"hy-2",unitDeckId:"HY",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-3",unitDeckId:"HY",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-4",unitDeckId:"HY",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-5",unitDeckId:"HY",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-6",unitDeckId:"HY",nameJa:"ガトリングガン",nameCn:"加特林",actionType:"ranged",frontImageId:"cards/hy/hy-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:5,damage:3,hasBombIcon:!0},{id:"hy-7",unitDeckId:"HY",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-8",unitDeckId:"HY",nameJa:"ガトリングガン",nameCn:"加特林",actionType:"ranged",frontImageId:"cards/hy/hy-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:5,damage:3,hasBombIcon:!0},{id:"hy-9",unitDeckId:"HY",nameJa:"ホイール",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/hy/hy-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"hy-10",unitDeckId:"HY",nameJa:"ホイール",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/hy/hy-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"hy-11",unitDeckId:"HY",nameJa:"スパイク",nameCn:"长钉",actionType:"charge",frontImageId:"cards/hy/hy-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"不进行突击移动，选择自机正面的机甲为攻击目标。对对方造成自机突击伤害+1的近战伤害。对自机造成对方被突击伤害-1的近战伤害。"},{id:"hy-12",unitDeckId:"HY",nameJa:"シールド",nameCn:"护盾",actionType:"armor",frontImageId:"cards/hy/hy-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止4点射击伤害。该卡在准备区时，可以将其破坏并防止4点任意伤害。"},{id:"hy-13",unitDeckId:"HY",nameJa:"シールド",nameCn:"护盾",actionType:"armor",frontImageId:"cards/hy/hy-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止4点射击伤害。该卡在准备区时，可以将其破坏并防止4点任意伤害。"},{id:"hy-14",unitDeckId:"HY",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/hy/hy-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"hy-15",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"hy-16",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"hy-17",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"hy-18",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"hy-19",unitDeckId:"HY",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/hy/hy-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"hy-20",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"hy-21",unitDeckId:"HY",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/hy/hy-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"hy-22",unitDeckId:"HY",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/hy/hy-22-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"hy-23",unitDeckId:"HY",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/hy/hy-23-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"hy-24",unitDeckId:"HY",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-24-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0}],jh=[{id:"lg-1",unitDeckId:"LG",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/lg/lg-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-2",unitDeckId:"LG",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/lg/lg-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-3",unitDeckId:"LG",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/lg/lg-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-4",unitDeckId:"LG",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/lg/lg-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-5",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"lg-6",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"lg-7",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"lg-8",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"lg-9",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"lg-10",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"lg-11",unitDeckId:"LG",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/lg/lg-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"lg-12",unitDeckId:"LG",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/lg/lg-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"lg-13",unitDeckId:"LG",nameJa:"スパイク",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/lg/lg-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"lg-14",unitDeckId:"LG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/lg/lg-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"lg-15",unitDeckId:"LG",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/lg/lg-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"lg-16",unitDeckId:"LG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/lg/lg-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"lg-17",unitDeckId:"LG",nameJa:"パイルバンカー",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/lg/lg-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"lg-18",unitDeckId:"LG",nameJa:"パイルバンカー",nameCn:"长钉",actionType:"charge",frontImageId:"cards/lg/lg-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"不进行突击移动，选择自机正面的机甲为攻击目标。对对方造成自机突击伤害+1的近战伤害。对自机造成对方被突击伤害-1的近战伤害。"},{id:"lg-19",unitDeckId:"LG",nameJa:"クロー",nameCn:"爪",actionType:"melee",frontImageId:"cards/lg/lg-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:2,effectText:"（结算伤害前）如果攻击目标的手牌、辅助区、准备区中有类别包括“装甲”的卡牌，选择其中两张破坏。"},{id:"lg-20",unitDeckId:"LG",nameJa:"クロー",nameCn:"爪",actionType:"melee",frontImageId:"cards/lg/lg-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:2,effectText:"（结算伤害前）如果攻击目标的手牌、辅助区、准备区中有类别包括“装甲”的卡牌，选择其中两张破坏。"},{id:"lg-21",unitDeckId:"LG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/lg/lg-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"lg-22",unitDeckId:"LG",nameJa:"ホイール",nameCn:"滑轮",actionType:"auxiliary",frontImageId:"cards/lg/lg-22-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:○、近战:×。使用后移动力+2。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"lg-23",unitDeckId:"LG",nameJa:"ホイール",nameCn:"滑轮",actionType:"auxiliary",frontImageId:"cards/lg/lg-23-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:○、近战:×。使用后移动力+2。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"}],wh=[{id:"lo-1",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-2",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-3",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-4",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-5",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-6",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-7",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-8",unitDeckId:"LO",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/lo/lo-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"lo-9",unitDeckId:"LO",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/lo/lo-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"lo-10",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-11",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-12",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-13",unitDeckId:"LO",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/lo/lo-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-14",unitDeckId:"LO",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/lo/lo-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-15",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-16",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-17",unitDeckId:"LO",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/lo/lo-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-18",unitDeckId:"LO",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/lo/lo-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-19",unitDeckId:"LO",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/lo/lo-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-20",unitDeckId:"LO",nameJa:"スモールレーザー",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/lo/lo-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2,isEnergyWeapon:!0}],Sh=[{id:"tr-1",unitDeckId:"TR",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/tr/tr-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-2",unitDeckId:"TR",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/tr/tr-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-3",unitDeckId:"TR",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/tr/tr-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-4",unitDeckId:"TR",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/tr/tr-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-5",unitDeckId:"TR",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/tr/tr-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-6",unitDeckId:"TR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/tr/tr-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"tr-7",unitDeckId:"TR",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/tr/tr-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"tr-8",unitDeckId:"TR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/tr/tr-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"tr-9",unitDeckId:"TR",nameJa:"移動６",nameCn:"移动6",actionType:"movement",frontImageId:"cards/tr/tr-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:6,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-10",unitDeckId:"TR",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/tr/tr-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"tr-11",unitDeckId:"TR",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/tr/tr-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"tr-12",unitDeckId:"TR",nameJa:"アクス",nameCn:"斧头",actionType:"melee",frontImageId:"cards/tr/tr-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"tr-13",unitDeckId:"TR",nameJa:"アクス",nameCn:"斧头",actionType:"melee",frontImageId:"cards/tr/tr-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"tr-14",unitDeckId:"TR",nameJa:"パイルバンカー",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/tr/tr-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"tr-15",unitDeckId:"TR",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/tr/tr-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"tr-16",unitDeckId:"TR",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/tr/tr-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"tr-17",unitDeckId:"TR",nameJa:"パイルバンカー",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/tr/tr-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"tr-18",unitDeckId:"TR",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/tr/tr-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"tr-19",unitDeckId:"TR",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/tr/tr-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0}],Ch=[{id:"zb-1",unitDeckId:"ZB",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ag/ag-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-2",unitDeckId:"ZB",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ag/ag-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-3",unitDeckId:"ZB",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ag/ag-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-4",unitDeckId:"ZB",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ag/ag-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-5",unitDeckId:"ZB",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ag/ag-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-6",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-7",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-8",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-9",unitDeckId:"ZB",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ag/ag-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-10",unitDeckId:"ZB",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ag/ag-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-11",unitDeckId:"ZB",nameJa:"ムーブセンサー",nameCn:"移动感应器",actionType:"auxiliary",frontImageId:"cards/ho/ho-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-12",unitDeckId:"ZB",nameJa:"ムーブセンサー",nameCn:"移动感应器",actionType:"auxiliary",frontImageId:"cards/ho/ho-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-13",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-14",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-15",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-16",unitDeckId:"ZB",nameJa:"ラージレーザー",nameCn:"大口径激光",actionType:"ranged",frontImageId:"cards/bg/bg-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"zb-17",unitDeckId:"ZB",nameJa:"ブレード",nameCn:"剑",actionType:"melee",frontImageId:"cards/zb/zb-17-front.png",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"zb-18",unitDeckId:"ZB",nameJa:"バルカン",nameCn:"火神炮",actionType:"ranged",frontImageId:"cards/zb/zb-18-front.png",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:2,damage:2},{id:"zb-19",unitDeckId:"ZB",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ag/ag-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-20",unitDeckId:"ZB",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ag/ag-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-21",unitDeckId:"ZB",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4},{id:"zb-22",unitDeckId:"ZB",nameJa:"ラージレーザー",nameCn:"大口径激光",actionType:"ranged",frontImageId:"cards/bg/bg-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"zb-23",unitDeckId:"ZB",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4}],Nh=[{id:"ag_plus-1",unitDeckId:"AG+",nameJa:"コルセスカ",nameCn:"长柄三叉矛",actionType:"melee",frontImageId:"cards/ag_plus/ag_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ag_plus-2",unitDeckId:"AG+",nameJa:"コルセスカ",nameCn:"长柄三叉矛",actionType:"melee",frontImageId:"cards/ag_plus/ag_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ag_plus-3",unitDeckId:"AG+",nameJa:"ネット",nameCn:"网",actionType:"ranged",frontImageId:"cards/ag_plus/ag_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:5,damage:void 0},{id:"ag_plus-4",unitDeckId:"AG+",nameJa:"ボーラ",nameCn:"投石索",actionType:"ranged",frontImageId:"cards/ag_plus/ag_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:4,damage:void 0},{id:"ag_plus-5",unitDeckId:"AG+",nameJa:"バルカン",nameCn:"火神炮",actionType:"ranged",frontImageId:"cards/ag_plus/ag_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:2,damage:2}],Mh=[{id:"ar_plus-1",unitDeckId:"AR+",nameJa:"ウォーハンマー",nameCn:"战锤",actionType:"melee",frontImageId:"cards/ar_plus/ar_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"ar_plus-2",unitDeckId:"AR+",nameJa:"強化機雷",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/ar_plus/ar_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,hasBombIcon:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"ar_plus-3",unitDeckId:"AR+",nameJa:"ロングアンカー",nameCn:"长锚",actionType:"ranged",frontImageId:"cards/ar_plus/ar_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:4,damage:1},{id:"ar_plus-4",unitDeckId:"AR+",nameJa:"強化機雷",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/ar_plus/ar_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,hasBombIcon:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5}],Th=[{id:"bg_plus-1",unitDeckId:"BG+",nameJa:"自爆装置",nameCn:"自爆装置",actionType:"mine",frontImageId:"cards/bg_plus/bg_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,hasBombIcon:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg_plus-2",unitDeckId:"BG+",nameJa:"大口径ロケット砲",nameCn:"大口径火箭炮",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:5},{id:"bg_plus-3",unitDeckId:"BG+",nameJa:"大口径ロケット砲",nameCn:"大口径火箭炮",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:5},{id:"bg_plus-4",unitDeckId:"BG+",nameJa:"高品質ライフル",nameCn:"高品质步枪",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3},{id:"bg_plus-5",unitDeckId:"BG+",nameJa:"スモークミサイル",nameCn:"烟雾导弹",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:5,damage:void 0}],Eh=[{id:"ho_plus-1",unitDeckId:"HO+",nameJa:"スタンウィップ",nameCn:"电击鞭",actionType:"melee",frontImageId:"cards/ho_plus/ho_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:1},{id:"ho_plus-2",unitDeckId:"HO+",nameJa:"チェーンブレード",nameCn:"链锯剑",actionType:"melee",frontImageId:"cards/ho_plus/ho_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ho_plus-3",unitDeckId:"HO+",nameJa:"高品質ロケット砲",nameCn:"高品质火箭炮",actionType:"ranged",frontImageId:"cards/ho_plus/ho_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4},{id:"ho_plus-4",unitDeckId:"HO+",nameJa:"火炎放射器",nameCn:"火焰喷射器",actionType:"ranged",frontImageId:"cards/ho_plus/ho_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2}],Dh=[{id:"hy_plus-1",unitDeckId:"HY+",nameJa:"ショットガン",nameCn:"散弹枪",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:3,damage:4},{id:"hy_plus-2",unitDeckId:"HY+",nameJa:"ショットガン",nameCn:"散弹枪",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:3,damage:4},{id:"hy_plus-3",unitDeckId:"HY+",nameJa:"ガトリングカノン",nameCn:"加特林炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:4},{id:"hy_plus-4",unitDeckId:"HY+",nameJa:"ガトリングカノン",nameCn:"加特林炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:4},{id:"hy_plus-5",unitDeckId:"HY+",nameJa:"ガトリングカノン",nameCn:"加特林炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:4},{id:"hy_plus-6",unitDeckId:"HY+",nameJa:"ミサイルシールド",nameCn:"导弹盾",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3},{id:"hy_plus-7",unitDeckId:"HY+",nameJa:"高品質ロケット砲",nameCn:"高品质火箭炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4},{id:"hy_plus-8",unitDeckId:"HY+",nameJa:"ミサイルシールド",nameCn:"导弹盾",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3}],$h=[{id:"lg_plus-1",unitDeckId:"LG+",nameJa:"ヒートクロー",nameCn:"热力爪",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-2",unitDeckId:"LG+",nameJa:"グレネードランチャー",nameCn:"榴弹发射器",actionType:"ranged",frontImageId:"cards/lg_plus/lg_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:5,damage:3},{id:"lg_plus-3",unitDeckId:"LG+",nameJa:"グレネードランチャー",nameCn:"榴弹发射器",actionType:"ranged",frontImageId:"cards/lg_plus/lg_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:5,damage:3},{id:"lg_plus-4",unitDeckId:"LG+",nameJa:"キャタピラ",nameCn:"履带",actionType:"auxiliary",frontImageId:"cards/lg_plus/lg_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-5",unitDeckId:"LG+",nameJa:"リボルバンカー",nameCn:"左轮打桩机",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6},{id:"lg_plus-6",unitDeckId:"LG+",nameJa:"キャタピラ",nameCn:"履带",actionType:"auxiliary",frontImageId:"cards/lg_plus/lg_plus-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-7",unitDeckId:"LG+",nameJa:"ヒートクロー",nameCn:"热力爪",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-8",unitDeckId:"LG+",nameJa:"リボルバンカー",nameCn:"左轮打桩机",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6}],Ah=[{id:"lo_plus-1",unitDeckId:"LO+",nameJa:"防水膜",nameCn:"防水膜",actionType:"auxiliary",frontImageId:"cards/lo_plus/lo_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo_plus-2",unitDeckId:"LO+",nameJa:"追加装甲",nameCn:"附加装甲",actionType:"armor",frontImageId:"cards/lo_plus/lo_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo_plus-3",unitDeckId:"LO+",nameJa:"パルスレーザー",nameCn:"脉冲激光",actionType:"ranged",frontImageId:"cards/lo_plus/lo_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:2,isEnergyWeapon:!0},{id:"lo_plus-4",unitDeckId:"LO+",nameJa:"サウンドストーム",nameCn:"声波风暴",actionType:"melee",frontImageId:"cards/lo_plus/lo_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0}],Vh=[{id:"tr_plus-1",unitDeckId:"TR+",nameJa:"サウンドウェーブ",nameCn:"声波",actionType:"melee",frontImageId:"cards/tr_plus/tr_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr_plus-2",unitDeckId:"TR+",nameJa:"バルディッシュ",nameCn:"长柄斧",actionType:"melee",frontImageId:"cards/tr_plus/tr_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"tr_plus-3",unitDeckId:"TR+",nameJa:"バルディッシュ",nameCn:"长柄斧",actionType:"melee",frontImageId:"cards/tr_plus/tr_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"tr_plus-4",unitDeckId:"TR+",nameJa:"高圧縮レーザー",nameCn:"高压缩激光",actionType:"ranged",frontImageId:"cards/tr_plus/tr_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:4,isEnergyWeapon:!0},{id:"tr_plus-5",unitDeckId:"TR+",nameJa:"高圧縮レーザー",nameCn:"高压缩激光",actionType:"ranged",frontImageId:"cards/tr_plus/tr_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:4,isEnergyWeapon:!0}],Ph=[{id:"zb_plus-1",unitDeckId:"ZB+",nameJa:"広射程ミサイル",nameCn:"广射程导弹",actionType:"ranged",frontImageId:"cards/zb_plus/zb_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:3},{id:"zb_plus-2",unitDeckId:"ZB+",nameJa:"ホバー",nameCn:"悬浮器",actionType:"auxiliary",frontImageId:"cards/zb_plus/zb_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb_plus-3",unitDeckId:"ZB+",nameJa:"ホバー",nameCn:"悬浮器",actionType:"auxiliary",frontImageId:"cards/zb_plus/zb_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb_plus-4",unitDeckId:"ZB+",nameJa:"チェーンブレード",nameCn:"链锯剑",actionType:"melee",frontImageId:"cards/zb_plus/zb_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"zb_plus-5",unitDeckId:"ZB+",nameJa:"ジャイアントシザース",nameCn:"巨型剪刀",actionType:"melee",frontImageId:"cards/zb_plus/zb_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:10},{id:"zb_plus-6",unitDeckId:"ZB+",nameJa:"広射程ミサイル",nameCn:"广射程导弹",actionType:"ranged",frontImageId:"cards/zb_plus/zb_plus-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:3}],zh=[{id:"ダミー-1",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-2",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-3",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-4",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-5",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-6",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-7",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-8",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-9",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-10",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-11",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-12",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-13",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-14",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-15",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-16",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-17",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-18",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-19",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-20",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0}],Lh=[{id:"強化機雷-1",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-2",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-3",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-4",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-5",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-6",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-7",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-8",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-9",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-10",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-11",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-12",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-13",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-14",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-15",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-16",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5}],Rh=[{id:"陸上機雷-1",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-2",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-3",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-4",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-5",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-6",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-7",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-8",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-9",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-10",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-11",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-12",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-13",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-14",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-15",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-16",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-17",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-18",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-19",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-20",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3}],ua={AG:yh,AR:bh,BG:_h,HO:Ih,HY:kh,LG:jh,LO:wh,TR:Sh,ZB:Ch,"AG+":Nh,"AR+":Mh,"BG+":Th,"HO+":Eh,"HY+":Dh,"LG+":$h,"LO+":Ah,"TR+":Vh,"ZB+":Ph,ダミー:zh,強化機雷:Lh,陸上機雷:Rh};let Oh=0;function Kh(e,n){return`${e}-${n}-${Oh++}`}function Jh(e,n){const r=(ua[e]??[]).map(a=>({instanceId:Kh(a.id,n),defId:a.id,destroyed:!1}));return Bh(r)}function Bh(e){const n=[...e];for(let t=n.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[n[t],n[r]]=[n[r],n[t]]}return n}function pm(e,n){const t=[...e];let r=n>>>0;for(let a=t.length-1;a>0;a--){r=r+1831565813>>>0;let o=Math.imul(r^r>>>15,r|1);o^=o+Math.imul(o^o>>>7,o|61);const s=((o^o>>>14)>>>0)/4294967296,c=Math.floor(s*(a+1));[t[a],t[c]]=[t[c],t[a]]}return{shuffled:t,nextSeed:r}}function Fh(e,n){const t=Math.min(n,e.length);return{drawn:e.slice(0,t),remaining:e.slice(t)}}function ne(e){for(const n of Object.values(ua)){const t=n.find(r=>r.id===e);if(t)return t}}const l=(e=0)=>({terrain:"plain",elevation:0,variant:e}),_=(e=0)=>({terrain:"sand",elevation:0,variant:e}),J=(e=0)=>({terrain:"rubble",elevation:0,variant:e}),O=(e=0)=>({terrain:"forest",elevation:0,variant:e}),A=(e=0)=>({terrain:"water",elevation:0,variant:e}),S=e=>({terrain:"highland",elevation:e,variant:e}),Gh={id:"map_1a",nameJa:"基本マップ1a",nameCn:"基础地图1a",width:7,height:11,maxPlayers:2,maxTeams:2,cells:[[_(),_(),_(),_(),_(),_(),_()],[l(),l(),l(),l(),l(),l(),l()],[l(),l(),l(),l(),l(),l(),l()],[S(2),S(1),l(),l(),l(),S(2),S(2)],[S(1),S(1),l(),l(),l(),S(2),l()],[l(),l(),l(),l(),l(),S(2),l()],[l(),l(),l(),l(),l(),l(),l()],[l(),l(),l(),S(1),S(1),S(2),S(2)],[l(),l(),l(),l(),l(),l(),l()],[l(),l(),l(),l(),l(),l(),l()],[J(),J(),J(),J(),J(),J(),J()]],startZones:{0:[{row:0,col:2},{row:0,col:3},{row:0,col:4}],1:[{row:10,col:2},{row:10,col:3},{row:10,col:4}]}},Uh={id:"map_2a",nameJa:"基本マップ2a",nameCn:"基础地图2a",width:7,height:11,maxPlayers:2,maxTeams:2,cells:[[_(),_(),_(),_(),_(),_(),_()],[l(),l(),l(),l(),l(),l(),l()],[S(2),S(2),l(),l(),l(),l(),l()],[S(2),l(),l(),l(),l(),l(),l()],[S(2),l(),l(),l(),l(),l(),l()],[S(2),l(),l(),l(),l(),l(),l()],[S(2),S(2),l(),l(),l(),l(),l()],[l(),l(),l(),l(),O(),O(),l()],[l(),l(),l(),l(),O(),O(),l()],[l(),l(),l(),l(),l(),l(),l()],[_(),_(),_(),_(),_(),_(),_()]],startZones:{0:[{row:0,col:2},{row:0,col:3},{row:0,col:4}],1:[{row:10,col:2},{row:10,col:3},{row:10,col:4}]}},Hh={id:"map_2b",nameJa:"基本マップ2b",nameCn:"基础地图2b",width:7,height:11,maxPlayers:2,maxTeams:2,cells:[[O(),O(),O(),l(),l(),l(),l()],[A(),A(),_(),l(),l(),l(),l()],[A(),A(),_(),l(),l(),l(),l()],[_(),A(),A(),_(),l(),l(),l()],[l(),_(),A(),A(),_(),l(),l()],[l(),l(),_(),A(),A(),_(),l()],[l(),l(),l(),A(),A(),_(),l()],[l(),l(),l(),_(),A(),A(),l()],[l(),l(),l(),l(),_(),A(),A()],[l(),l(),l(),l(),l(),l(),l()],[l(),l(),_(),_(),_(),l(),l()]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:0,col:2}],1:[{row:10,col:2},{row:10,col:3},{row:10,col:4}]}},Wh={id:"map_3a",nameJa:"峡谷要塞",nameCn:"峡谷要塞",width:9,height:13,maxPlayers:4,maxTeams:4,cells:[[_(),_(),_(),_(),_(),_(),_(),_(),_()],[O(0),l(),l(),l(),l(),l(),l(),l(),O(1)],[l(),l(),l(),l(),l(),l(),l(),l(),l()],[S(2),S(3),S(1),l(),l(),l(),S(1),S(2),S(2)],[S(2),S(2),l(),l(),J(1),l(),l(),S(1),S(2)],[S(1),l(),J(0),J(2),l(),J(1),J(3),l(),S(1)],[l(),_(),A(0),A(1),_(),A(2),A(0),_(),l()],[S(1),l(),J(3),J(0),l(),J(2),J(1),l(),S(1)],[S(2),S(1),l(),l(),J(0),l(),l(),S(2),S(2)],[S(2),S(2),S(1),l(),l(),l(),S(1),S(3),S(2)],[l(),l(),l(),l(),l(),l(),l(),l(),l()],[O(2),l(),l(),l(),l(),l(),l(),l(),O(3)],[_(),_(),_(),_(),_(),_(),_(),_(),_()]],startZones:{0:[{row:0,col:1},{row:0,col:3},{row:0,col:4},{row:0,col:5},{row:0,col:7}],1:[{row:12,col:1},{row:12,col:3},{row:12,col:4},{row:12,col:5},{row:12,col:7}],2:[{row:2,col:0},{row:6,col:0}],3:[{row:2,col:8},{row:6,col:8}]}},Zh={id:"map_3b",nameJa:"群島戦域",nameCn:"群岛战域",width:9,height:13,maxPlayers:4,maxTeams:4,cells:[[O(0),O(1),_(),_(),A(0),A(1),l(),l(),l()],[O(2),_(),l(),_(),A(2),l(),l(),_(),A(0)],[_(),A(0),_(),l(),l(),_(),A(1),A(0),A(2)],[A(1),A(2),l(),l(),S(1),l(),l(),A(2),A(1)],[A(0),_(),l(),S(1),S(2),S(1),l(),_(),A(0)],[A(2),l(),S(1),S(2),S(3),S(2),S(1),l(),A(1)],[A(1),_(),l(),S(2),O(0),S(2),l(),_(),A(2)],[A(0),l(),S(1),S(2),S(3),S(2),S(1),l(),A(0)],[A(2),_(),l(),S(1),S(2),S(1),l(),_(),A(1)],[A(1),A(0),l(),l(),S(1),l(),l(),A(0),A(2)],[A(0),A(2),A(1),_(),l(),l(),_(),A(1),_()],[l(),l(),A(0),_(),l(),_(),J(0),_(),J(1)],[l(),l(),l(),A(1),_(),_(),J(2),J(3),J(0)]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:1,col:0},{row:0,col:6},{row:0,col:7}],1:[{row:12,col:6},{row:12,col:7},{row:11,col:8},{row:12,col:0},{row:12,col:1}],2:[{row:2,col:3},{row:3,col:2}],3:[{row:10,col:4},{row:10,col:5}]}},Yh={id:"map_4a",nameJa:"都市廃墟",nameCn:"都市废墟",width:11,height:15,maxPlayers:4,maxTeams:4,cells:[[J(0),_(),_(),_(),_(),_(),_(),_(),_(),_(),J(1)],[J(2),J(3),l(),l(),l(),l(),l(),O(0),O(1),l(),l()],[l(),J(0),J(1),l(),l(),J(2),l(),O(2),l(),l(),l()],[l(),l(),S(1),S(2),l(),J(3),l(),l(),l(),J(0),l()],[l(),l(),S(2),S(1),l(),l(),l(),l(),_(),A(0),_()],[J(1),l(),l(),l(),l(),J(0),l(),_(),A(1),A(2),l()],[J(2),J(0),l(),l(),l(),l(),_(),A(0),_(),l(),l()],[l(),l(),l(),l(),l(),S(3),l(),l(),l(),l(),l()],[l(),l(),_(),A(2),_(),l(),l(),l(),l(),J(1),J(2)],[l(),A(0),A(1),_(),l(),O(0),O(1),l(),l(),l(),J(0)],[l(),J(3),l(),l(),l(),O(2),O(3),l(),S(1),S(2),l()],[l(),l(),l(),J(1),l(),l(),l(),l(),S(2),S(1),l()],[l(),l(),J(2),J(0),l(),l(),l(),l(),l(),l(),l()],[l(),l(),l(),J(3),l(),l(),l(),J(1),J(2),l(),l()],[J(3),_(),_(),_(),_(),_(),_(),_(),_(),_(),J(2)]],startZones:{0:[{row:0,col:1},{row:0,col:3},{row:0,col:5},{row:0,col:7},{row:0,col:9}],1:[{row:14,col:1},{row:14,col:3},{row:14,col:5},{row:14,col:7},{row:14,col:9}],2:[{row:7,col:0},{row:8,col:0}],3:[{row:6,col:10},{row:7,col:10}]}},Xh={id:"map_5a",nameJa:"三叉戦場",nameCn:"三叉战场",width:13,height:17,maxPlayers:6,maxTeams:6,cells:[[l(),l(),l(),_(),_(),_(),_(),_(),_(),_(),l(),l(),l()],[l(),l(),_(),l(),l(),l(),l(),l(),l(),l(),_(),l(),l()],[l(),O(0),l(),l(),l(),l(),l(),l(),l(),l(),l(),O(1),l()],[O(2),O(0),l(),l(),l(),J(0),l(),J(1),l(),l(),l(),O(1),O(3)],[O(0),l(),l(),l(),_(),A(0),_(),A(1),_(),l(),l(),l(),O(2)],[l(),l(),l(),_(),A(1),A(0),l(),A(2),A(0),_(),l(),l(),l()],[l(),l(),S(1),S(2),_(),l(),l(),l(),_(),S(2),S(1),l(),l()],[l(),S(1),S(2),S(3),S(2),l(),l(),l(),S(2),S(3),S(2),S(1),l()],[l(),l(),S(2),S(3),J(0),S(2),S(3),S(2),J(1),S(3),S(2),l(),l()],[l(),S(1),S(2),S(3),S(2),l(),l(),l(),S(2),S(3),S(2),S(1),l()],[l(),l(),S(1),S(2),_(),l(),l(),l(),_(),S(2),S(1),l(),l()],[l(),l(),l(),_(),A(2),A(1),l(),A(0),A(2),_(),l(),l(),l()],[O(1),l(),l(),l(),_(),A(0),_(),A(1),_(),l(),l(),l(),O(0)],[O(3),O(2),l(),l(),l(),J(2),l(),J(3),l(),l(),l(),O(0),O(1)],[l(),O(0),l(),l(),l(),l(),l(),l(),l(),l(),l(),O(2),l()],[_(),_(),_(),_(),l(),l(),l(),l(),l(),_(),_(),_(),_()],[_(),_(),_(),_(),_(),l(),l(),l(),_(),_(),_(),_(),_()]],startZones:{0:[{row:0,col:4},{row:0,col:6},{row:0,col:8}],1:[{row:16,col:0},{row:16,col:1},{row:16,col:2}],2:[{row:16,col:10},{row:16,col:11},{row:16,col:12}],3:[{row:6,col:0},{row:6,col:1},{row:10,col:0}],4:[{row:6,col:11},{row:6,col:12},{row:10,col:12}],5:[{row:2,col:0},{row:2,col:6},{row:2,col:12}]}},Qh={id:"map_6a",nameJa:"環状要塞",nameCn:"环形要塞",width:15,height:17,maxPlayers:8,maxTeams:8,cells:[[l(),l(),l(),l(),_(),_(),_(),_(),_(),_(),_(),l(),l(),l(),l()],[l(),l(),l(),_(),l(),l(),l(),l(),l(),l(),l(),_(),l(),l(),l()],[l(),l(),S(1),S(2),S(2),S(1),l(),l(),l(),S(1),S(2),S(2),S(1),l(),l()],[l(),J(0),S(1),l(),l(),l(),J(1),l(),J(2),l(),l(),l(),S(1),J(3),l()],[_(),l(),l(),l(),O(0),O(1),l(),l(),l(),O(2),O(3),l(),l(),l(),_()],[_(),l(),J(0),l(),O(2),l(),l(),l(),l(),l(),O(0),l(),J(1),l(),_()],[l(),J(2),S(1),l(),l(),l(),J(3),_(),J(0),l(),l(),l(),S(1),J(1),l()],[l(),l(),l(),l(),l(),_(),A(0),A(1),A(2),_(),l(),l(),l(),l(),l()],[l(),l(),l(),l(),_(),A(2),A(0),S(3),A(1),A(0),_(),l(),l(),l(),l()],[l(),l(),l(),l(),l(),_(),A(1),A(2),A(0),_(),l(),l(),l(),l(),l()],[l(),J(3),S(1),l(),l(),l(),J(1),_(),J(2),l(),l(),l(),S(1),J(0),l()],[_(),l(),J(2),l(),O(1),l(),l(),l(),l(),l(),O(3),l(),J(3),l(),_()],[_(),l(),l(),l(),O(3),O(0),l(),l(),l(),O(1),O(2),l(),l(),l(),_()],[l(),J(1),S(1),l(),l(),l(),J(3),l(),J(0),l(),l(),l(),S(1),J(2),l()],[l(),l(),S(1),S(2),S(2),S(1),l(),l(),l(),S(1),S(2),S(2),S(1),l(),l()],[l(),l(),l(),_(),l(),l(),l(),l(),l(),l(),l(),_(),l(),l(),l()],[l(),l(),l(),l(),_(),_(),_(),_(),_(),_(),_(),l(),l(),l(),l()]],startZones:{0:[{row:0,col:5},{row:0,col:6},{row:0,col:7},{row:0,col:8}],1:[{row:16,col:5},{row:16,col:6},{row:16,col:7},{row:16,col:8}],2:[{row:4,col:0},{row:5,col:0},{row:11,col:0},{row:12,col:0}],3:[{row:4,col:14},{row:5,col:14},{row:11,col:14},{row:12,col:14}],4:[{row:0,col:0},{row:0,col:1},{row:0,col:2},{row:0,col:3}],5:[{row:0,col:11},{row:0,col:12},{row:0,col:13},{row:0,col:14}],6:[{row:16,col:0},{row:16,col:1},{row:16,col:2},{row:16,col:3}],7:[{row:16,col:11},{row:16,col:12},{row:16,col:13},{row:16,col:14}]}},qh={id:"map_7a",nameJa:"大陸戦争",nameCn:"大陆战争",width:17,height:19,maxPlayers:8,maxTeams:8,cells:[[_(),_(),_(),_(),l(),l(),l(),l(),l(),l(),l(),l(),l(),_(),_(),_(),_()],[_(),l(),l(),l(),l(),l(),O(0),l(),l(),l(),O(1),l(),l(),l(),l(),l(),_()],[l(),l(),O(0),O(1),l(),O(2),O(0),l(),l(),l(),O(1),O(3),l(),O(2),O(0),l(),l()],[l(),l(),O(2),l(),l(),l(),l(),J(0),l(),J(1),l(),l(),l(),l(),O(1),l(),l()],[l(),l(),l(),l(),S(1),S(2),l(),l(),l(),l(),l(),S(2),S(1),l(),l(),l(),l()],[l(),J(0),l(),S(1),S(2),S(3),S(1),l(),l(),l(),S(1),S(3),S(2),S(1),l(),J(1),l()],[_(),l(),l(),S(1),S(2),l(),l(),_(),A(0),_(),l(),l(),S(2),S(1),l(),l(),_()],[_(),l(),l(),l(),l(),l(),_(),A(1),A(0),A(2),_(),l(),l(),l(),l(),l(),_()],[l(),l(),J(2),l(),l(),_(),A(0),A(2),_(),A(1),A(0),_(),l(),l(),J(3),l(),l()],[l(),l(),l(),l(),_(),A(1),_(),l(),S(3),l(),_(),A(2),_(),l(),l(),l(),l()],[l(),l(),J(1),l(),l(),_(),A(2),A(0),_(),A(0),A(1),_(),l(),l(),J(0),l(),l()],[_(),l(),l(),l(),l(),l(),_(),A(0),A(1),A(2),_(),l(),l(),l(),l(),l(),_()],[_(),l(),l(),S(1),S(2),l(),l(),_(),A(2),_(),l(),l(),S(2),S(1),l(),l(),_()],[l(),J(2),l(),S(1),S(2),S(3),S(1),l(),l(),l(),S(1),S(3),S(2),S(1),l(),J(3),l()],[l(),l(),l(),l(),S(1),S(2),l(),l(),l(),l(),l(),S(2),S(1),l(),l(),l(),l()],[l(),l(),O(3),l(),l(),l(),l(),J(3),l(),J(2),l(),l(),l(),l(),O(0),l(),l()],[l(),l(),O(1),O(2),l(),O(0),O(3),l(),l(),l(),O(2),O(1),l(),O(3),O(2),l(),l()],[_(),l(),l(),l(),l(),l(),O(2),l(),l(),l(),O(0),l(),l(),l(),l(),l(),_()],[_(),_(),_(),_(),l(),l(),l(),l(),l(),l(),l(),l(),l(),_(),_(),_(),_()]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:0,col:2},{row:0,col:3},{row:1,col:0}],1:[{row:0,col:13},{row:0,col:14},{row:0,col:15},{row:0,col:16},{row:1,col:16}],2:[{row:18,col:0},{row:18,col:1},{row:18,col:2},{row:18,col:3},{row:17,col:0}],3:[{row:18,col:13},{row:18,col:14},{row:18,col:15},{row:18,col:16},{row:17,col:16}],4:[{row:6,col:0},{row:7,col:0},{row:7,col:1},{row:11,col:0},{row:12,col:0}],5:[{row:6,col:16},{row:7,col:16},{row:7,col:15},{row:11,col:16},{row:12,col:16}],6:[{row:0,col:6},{row:0,col:7},{row:0,col:8},{row:0,col:9},{row:0,col:10}],7:[{row:18,col:6},{row:18,col:7},{row:18,col:8},{row:18,col:9},{row:18,col:10}]}},e0={id:"map_8a",nameJa:"火山列島",nameCn:"火山列岛",width:15,height:19,maxPlayers:8,maxTeams:8,cells:[[_(),_(),_(),O(0),O(1),A(0),A(1),l(),A(2),A(0),O(2),O(3),_(),_(),_()],[_(),l(),l(),O(2),l(),_(),A(0),l(),A(1),_(),l(),O(0),l(),l(),_()],[O(0),l(),l(),l(),_(),A(1),A(2),l(),A(0),A(2),_(),l(),l(),l(),O(1)],[l(),l(),J(0),_(),A(0),A(1),_(),l(),_(),A(2),A(0),_(),J(1),l(),l()],[l(),l(),l(),l(),_(),_(),l(),l(),l(),_(),_(),l(),l(),l(),l()],[l(),O(0),l(),l(),l(),l(),S(1),l(),S(1),l(),l(),l(),l(),O(1),l()],[l(),O(2),l(),l(),S(1),S(2),S(2),S(1),S(2),S(2),S(1),l(),l(),O(3),l()],[A(0),_(),l(),S(1),S(2),S(3),J(0),S(2),J(1),S(3),S(2),S(1),l(),_(),A(1)],[A(1),_(),l(),S(2),S(3),J(2),S(3),S(3),S(3),J(3),S(3),S(2),l(),_(),A(0)],[A(2),l(),l(),S(1),S(2),S(3),S(3),S(3),S(3),S(3),S(2),S(1),l(),l(),A(2)],[A(0),_(),l(),S(2),S(3),J(0),S(3),S(3),S(3),J(1),S(3),S(2),l(),_(),A(1)],[A(1),_(),l(),S(1),S(2),S(3),J(2),S(2),J(3),S(3),S(2),S(1),l(),_(),A(0)],[l(),O(1),l(),l(),S(1),S(2),S(2),S(1),S(2),S(2),S(1),l(),l(),O(0),l()],[l(),O(3),l(),l(),l(),l(),S(1),l(),S(1),l(),l(),l(),l(),O(2),l()],[l(),l(),l(),l(),_(),_(),l(),l(),l(),_(),_(),l(),l(),l(),l()],[l(),l(),J(2),_(),A(2),A(0),_(),l(),_(),A(1),A(2),_(),J(3),l(),l()],[O(2),l(),l(),l(),_(),A(0),A(1),l(),A(2),A(1),_(),l(),l(),l(),O(3)],[_(),l(),l(),O(1),l(),_(),A(2),l(),A(0),_(),l(),O(3),l(),l(),_()],[_(),_(),_(),O(3),O(2),A(1),A(0),l(),A(1),A(2),O(0),O(1),_(),_(),_()]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:0,col:2},{row:1,col:0}],1:[{row:0,col:12},{row:0,col:13},{row:0,col:14},{row:1,col:14}],2:[{row:18,col:0},{row:18,col:1},{row:18,col:2},{row:17,col:0}],3:[{row:18,col:12},{row:18,col:13},{row:18,col:14},{row:17,col:14}],4:[{row:7,col:1},{row:8,col:1},{row:9,col:1},{row:10,col:1}],5:[{row:7,col:13},{row:8,col:13},{row:9,col:13},{row:10,col:13}],6:[{row:0,col:7},{row:1,col:7},{row:2,col:7},{row:3,col:7}],7:[{row:18,col:7},{row:17,col:7},{row:16,col:7},{row:15,col:7}]}},En=[Gh,Uh,Hh,Wh,Zh,Yh,Xh,Qh,qh,e0];function n0(){try{const e="em_custom_maps_index",n="em_custom_map_",t=localStorage.getItem(e);if(!t)return En;const r=JSON.parse(t),a=[];for(const{id:o}of r){const s=localStorage.getItem(n+o);if(s)try{a.push(JSON.parse(s))}catch{}}return[...En,...a]}catch{return En}}function Fl(e){switch(e.terrain){case"plain":return"/assets/tiles/平地0.png";case"sand":return"/assets/tiles/砂0.png";case"rubble":return`/assets/tiles/瓦礫${e.variant%4}.png`;case"forest":return`/assets/tiles/森${e.variant%4}.png`;case"water":return`/assets/tiles/水${e.variant%3}.png`;case"highland":return`/assets/tiles/高地${e.elevation}.png`;default:return"/assets/tiles/平地0.png"}}const q=[{id:"TR",deckCode:"TR",nameJa:"トルトハーン",nameCn:"托尔特哈恩",type:"M軽/単座",movement:6,evasion:8,assault:5,assaultDef:2,initiative:3,tokenId:"TR-token.jpg"},{id:"HO",deckCode:"HO",nameJa:"フォルニッセ",nameCn:"弗尼塞",type:"SS軽/単座",movement:7,evasion:10,assault:5,assaultDef:2,initiative:1,tokenId:"HO-token.jpg"},{id:"HY",deckCode:"HY",nameJa:"ヒストリクス",nameCn:"希斯特里克斯",type:"L重/単座",movement:3,evasion:3,assault:6,assaultDef:3,initiative:14,tokenId:"HY-token.jpg"},{id:"ZB",deckCode:"ZB",nameJa:"ズィマー・ブーリア",nameCn:"季马尔·布里亚",type:"S重/単座",movement:5,evasion:5,assault:6,assaultDef:3,initiative:9,tokenId:"ZB-token.jpg"},{id:"AR",deckCode:"AR",nameJa:"アラクネ",nameCn:"阿拉克涅",type:"S中/単座",movement:6,evasion:7,assault:5,assaultDef:2,initiative:5,tokenId:"AR-token.jpg"},{id:"BG",deckCode:"BG",nameJa:"ヴィスナー・グローム",nameCn:"维斯纳·格罗姆",type:"LL中/単座",movement:3,evasion:5,assault:6,assaultDef:3,initiative:13,tokenId:"BG-token.jpg"},{id:"LO",deckCode:"LO",nameJa:"リュミエール・デ・オラージュ",nameCn:"吕米耶尔",type:"L軽/単座",movement:5,evasion:7,assault:5,assaultDef:2,initiative:6,tokenId:"LO-token.jpg"},{id:"LG",deckCode:"LG",nameJa:"ルー・ガルー",nameCn:"卢·加鲁",type:"M重/単座",movement:4,evasion:4,assault:6,assaultDef:3,initiative:12,tokenId:"LG-token.jpg"},{id:"AG",deckCode:"AG",nameJa:"アルギュロス",nameCn:"阿尔古罗斯",type:"M中/単座",movement:5,evasion:6,assault:6,assaultDef:3,initiative:7,tokenId:"AG-token.jpg"}];function t0(e,n){const t=[];let r=e.col,a=e.row;const o=n.col,s=n.row,c=Math.abs(o-r),d=Math.abs(s-a),u=r<o?1:-1,p=a<s?1:-1;let m=c-d;const h=(c+d)*2+2;let g=0;for(;g++<h&&(t.push({row:a,col:r}),!(r===o&&a===s));){const f=2*m;f>-d&&(m-=d,r+=u),f<c&&(m+=c,a+=p)}return t}function pa(e,n,t){var c;if(n.row===t.row&&n.col===t.col)return!0;const r=e.cells[n.row][n.col],a=e.cells[t.row][t.col],o=Math.max(r.elevation,a.elevation),s=t0(n,t);for(const d of s){if(d.row===n.row&&d.col===n.col||d.row===t.row&&d.col===t.col)continue;const u=(c=e.cells[d.row])==null?void 0:c[d.col];if(u&&u.terrain==="highland"&&u.elevation>o)return!1}return!0}function we(e,n){return Math.max(Math.abs(e.row-n.row),Math.abs(e.col-n.col))}const r0={plain:{type:"plain",nameJa:"平地",nameCn:"平原",moveCost:1,blocksLOS:!1,enterable:!0,providesCover:!1},sand:{type:"sand",nameJa:"砂地",nameCn:"沙地",moveCost:1,blocksLOS:!1,enterable:!0,providesCover:!1},rubble:{type:"rubble",nameJa:"瓦礫",nameCn:"瓦砾",moveCost:2,blocksLOS:!1,enterable:!0,providesCover:!1},forest:{type:"forest",nameJa:"森",nameCn:"森林",moveCost:2,blocksLOS:!0,enterable:!0,providesCover:!0},water:{type:"water",nameJa:"水辺",nameCn:"水域",moveCost:3,blocksLOS:!1,enterable:!0,providesCover:!1},highland:{type:"highland",nameJa:"高地",nameCn:"高地",moveCost:1,blocksLOS:!1,enterable:!0,providesCover:!1}};function mm(e){const n=r0[e];return n.enterable?n.moveCost:1/0}const Nt=[[-1,0],[1,0],[0,-1],[0,1]];function pr(e){return e==="N"?"S":e==="S"?"N":e==="E"?"W":"E"}function Mt(e,n){return e===-1?"N":e===1?"S":n===-1?"W":"E"}function Tt(e,n,t){return n>=0&&n<e.height&&t>=0&&t<e.width}function se(e,n){return e.row===n.row&&e.col===n.col}function fm(e,n,t,r,a){const o=Array.from({length:e.height},()=>new Array(e.width).fill(-1)),s=[{pos:n,remaining:t}];o[n.row][n.col]=t;const c=[{pos:n,remaining:t}];for(;s.length>0;){const{pos:d,remaining:u}=s.shift();for(const[p,m]of Nt){const h=d.row+p,g=d.col+m;if(!Tt(e,h,g))continue;const f={row:h,col:g},y=e.cells[h][g];let I=mm(y.terrain);if(I===1/0)continue;a!=null&&a.vernier&&(y.terrain==="rubble"||y.terrain==="forest"||y.terrain==="water")&&(I=1);const v=e.cells[d.row][d.col];let x=Math.max(0,y.elevation-v.elevation);a!=null&&a.vernier&&(x=Math.max(0,x-1));const b=I+x;if(u<b)continue;const k=u-b;r.some(M=>se(M,f))||o[h][g]>=k||(o[h][g]=k,c.push({pos:f,remaining:k}),s.push({pos:f,remaining:k}))}}return c}function gm(e,n,t,r,a){return fm(e,n,t,r,a).map(o=>o.pos)}function ma(e,n,t,r,a,o){const s=e.cells[r][a];let c=mm(s.terrain);if(c===1/0)return 1/0;o!=null&&o.vernier&&(s.terrain==="rubble"||s.terrain==="forest"||s.terrain==="water")&&(c=1);const d=e.cells[n][t];let u=Math.max(0,s.elevation-d.elevation);return o!=null&&o.vernier&&(u=Math.max(0,u-1)),c+u}function li(e,n,t,r,a,o="S"){if(t<=0)return[];const s={N:0,S:1,E:2,W:3},c=Array.from({length:e.height},()=>Array.from({length:e.width},()=>new Array(4).fill(-1))),d={pos:n,facing:o,remaining:t};c[n.row][n.col][s[o]]=t;const u=[d],p=[d];for(;u.length>0;){const{pos:g,facing:f,remaining:y}=u.shift(),I=pr(f);for(const[v,x]of Nt){const b=Mt(v,x);if(b===I)continue;const k=g.row+v,T=g.col+x;if(!Tt(e,k,T))continue;const M={row:k,col:T},E=ma(e,g.row,g.col,k,T,a);if(E===1/0||y<E||r.some(w=>se(w,M)))continue;const C=y-E,$=s[b];if(c[k][T][$]>=C)continue;c[k][T][$]=C;const D={pos:M,facing:b,remaining:C};p.push(D),u.push(D)}}function m(g){const{pos:f,facing:y,remaining:I}=g,v=pr(y);for(const[x,b]of Nt){if(Mt(x,b)===v)continue;const T=f.row+x,M=f.col+b;if(!Tt(e,T,M)||r.some(C=>se(C,{row:T,col:M})))continue;const E=ma(e,f.row,f.col,T,M,a);if(E!==1/0&&I>=E)return!0}return!1}const h=new Map;for(const g of p){if(se(g.pos,n)||m(g))continue;const f=`${g.pos.row},${g.pos.col}`,y=h.get(f);(!y||g.remaining>y.remaining)&&h.set(f,{pos:g.pos,remaining:g.remaining})}return Array.from(h.values())}function Gl(e,n,t,r,a,o,s){if(se(n,r))return{path:[],finalFacing:t};const c={N:0,S:1,E:2,W:3},d=Array.from({length:e.height},()=>Array.from({length:e.width},()=>new Array(4).fill(-1))),u={pos:n,facing:t,remaining:a,parent:null};d[n.row][n.col][c[t]]=a;const p=[u];for(;p.length>0;){const m=p.shift();if(se(m.pos,r)){const g=[];let f=m;for(;f&&f.parent!==null;)g.push(f.pos),f=f.parent;return{path:g.reverse(),finalFacing:m.facing}}const h=pr(m.facing);for(const[g,f]of Nt){const y=Mt(g,f);if(y===h)continue;const I=m.pos.row+g,v=m.pos.col+f;if(!Tt(e,I,v))continue;const x={row:I,col:v},b=ma(e,m.pos.row,m.pos.col,I,v,s);if(b===1/0||m.remaining<b||o.some(E=>se(E,x))&&!se(x,r))continue;const T=m.remaining-b,M=c[y];d[I][v][M]>=T||(d[I][v][M]=T,p.push({pos:x,facing:y,remaining:T,parent:m}))}}return null}function gd(e,n,t,r,a,o,s,c=8){if(se(n,r)||a<=0)return[];const d=[];function u(m,h,g){const f=pr(h);for(const[y,I]of Nt){if(Mt(y,I)===f)continue;const x=m.row+y,b=m.col+I;if(!Tt(e,x,b)||o.some(T=>se(T,{row:x,col:b})))continue;const k=ma(e,m.row,m.col,x,b,s);if(k!==1/0&&g>=k)return!1}return!0}function p(m,h,g,f){if(d.length>=c)return;if(se(m,r)){u(m,h,g)&&d.push({path:[...f],finalFacing:h});return}const y=pr(h);for(const[I,v]of Nt){const x=Mt(I,v);if(x===y)continue;const b=m.row+I,k=m.col+v;if(!Tt(e,b,k))continue;const T={row:b,col:k};if(se(T,n)||f.some(C=>se(C,T))||o.some(C=>se(C,T))&&!se(T,r))continue;const E=ma(e,m.row,m.col,b,k,s);E===1/0||g<E||(f.push(T),p(T,x,g-E,f),f.pop())}}return p(n,t,a,[]),d}function hm(e,n,t){const r=[];for(const[a,o]of Nt){const s=n.row+a,c=n.col+o;if(!Tt(e,s,c))continue;const d={row:s,col:c};t.some(u=>se(u,d))||r.push(d)}return r}function a0(e,n,t,r){if(se(n,t))return[];const a=Array.from({length:e.height},()=>new Array(e.width).fill(!1));a[n.row][n.col]=!0;const o=[{pos:n,parent:null}];for(;o.length>0;){const s=o.shift();if(se(s.pos,t)){const p=[];let m=s;for(;m&&m.parent!==null;)p.push(m.pos),m=m.parent;return p.reverse()}const{row:c,col:d}=s.pos,u=[{row:c-1,col:d},{row:c+1,col:d},{row:c,col:d-1},{row:c,col:d+1}];for(const p of u)if(p.row>=0&&p.row<e.height&&p.col>=0&&p.col<e.width){const m=r.some(h=>se(h,p))&&!se(p,t);!a[p.row][p.col]&&!m&&(a[p.row][p.col]=!0,o.push({pos:p,parent:s}))}}return null}function Ri(e,n,t,r){const a=n===1?e.plotSeg1:e.plotSeg2;if(!a)return 0;const o=t(a.defId);return!o||o.actionType!=="movement"?0:(o.movementValue??0)+(r!=null&&r.wheel?2:0)}function o0(e,n,t,r){const a=n===1?e.plotSeg1:e.plotSeg2;if(!a)return!1;const o=t(a.defId);return!o||o.actionType!=="movement"?!1:(o.movementValue??r)>0}function Dn(e,n,t){return e==="N"?t.row<=n.row:e==="S"?t.row>=n.row:e==="E"?t.col>=n.col:e==="W"?t.col<=n.col:!0}function fa(e,n,t){if(n!==2)return 0;if(e.plotSeg1){const r=t(e.plotSeg1.defId);if(r&&r.actionType==="aim")return 1}return 0}function Ps(e,n,t){const r=n===1?e.plotSeg1:e.plotSeg2;if(!r)return 0;const a=t(r.defId);return a&&a.actionType==="armor"?1:0}function zn(e,n,t,r){const a=n===1?e.plotSeg1:e.plotSeg2;if(!a)return null;const o=r(a.defId);return o&&(t==="ranged"&&o.actionType==="ranged"||t==="melee"&&(o.actionType==="melee"||o.actionType==="charge"))?o:null}function Lo(e,n,t,r,a){var u,p;let o=e;const s=[],c=(u=r.cells[n.row])==null?void 0:u[n.col],d=(p=r.cells[t.row])==null?void 0:p[t.col];return(c==null?void 0:c.terrain)==="water"&&a.isEnergyWeapon&&(o-=1,s.push("水域能量衰减-1")),(d==null?void 0:d.terrain)==="forest"&&(o-=1,s.push("森林掩护-1")),{dmg:Math.max(0,o),reasons:s}}function Ul(e,n,t,r,a,o){const s=zn(e,t,r,o);if(!s)return{canAttack:!1,reason:"无攻击牌",damage:0,counterDamage:0,dist:0,card:null};const c=we(e.position,n.position);if(r==="ranged"){if(s.rangeMin===void 0||s.rangeMax===void 0)return{canAttack:!1,reason:"卡牌无射程数据",damage:0,counterDamage:0,dist:c,card:s};if(c<s.rangeMin)return{canAttack:!1,reason:`距离过近 (${c} < ${s.rangeMin})`,damage:0,counterDamage:0,dist:c,card:s};if(c>s.rangeMax)return{canAttack:!1,reason:`射程外 (${c} > ${s.rangeMax})`,damage:0,counterDamage:0,dist:c,card:s};if(!pa(a,e.position,n.position))return{canAttack:!1,reason:"视线被遮挡",damage:0,counterDamage:0,dist:c,card:s};if(!Dn(e.facing,e.position,n.position))return{canAttack:!1,reason:`目标在机体后方（机头朝${e.facing}），无法射击`,damage:0,counterDamage:0,dist:c,card:s};let d=s.damage??0;const u=[];if(s.rangeOptimal!==void 0&&s.damageAttenuation!==void 0){const y=Math.max(0,c-s.rangeOptimal);if(y>0){const I=y*s.damageAttenuation;d=Math.max(0,d-I),u.push(`超射程-${I}`)}}const p=Lo(d,e.position,n.position,a,s),m=fa(e,t,o),h=p.dmg+m,g=[...u,...p.reasons];return m>0&&g.push("瞄准+1"),{canAttack:!0,reason:`有效射击${g.length>0?`（${g.join(", ")}）`:""}`,damage:h,counterDamage:0,dist:c,card:s}}if(r==="melee"&&s.actionType==="melee"){if(c!==1)return{canAttack:!1,reason:`不相邻 (距离 ${c})`,damage:0,counterDamage:0,dist:c,card:s};const d=Lo(s.damage??0,e.position,n.position,a,s),u=fa(e,t,o),p=d.dmg+u,m=[...d.reasons];return u>0&&m.push("瞄准+1"),{canAttack:!0,reason:`有效近战${m.length>0?`（${m.join(", ")}）`:""}`,damage:p,counterDamage:0,dist:c,card:s}}return r==="melee"&&s.actionType==="charge"?{canAttack:!1,reason:"突击卡需使用evaluateCharge()",damage:0,counterDamage:0,dist:c,card:s}:{canAttack:!1,reason:"非攻击时机",damage:0,counterDamage:0,dist:c,card:null}}const i0=new Set(["パイルバンカー","スパイク"]);function s0(e){return i0.has(e.nameJa)}function l0(e,n,t,r,a,o){if(we(n,t)===1)return Dn(o,n,t)?n:null;const c=gm(e,n,r,a).filter(d=>we(d,t)===1&&Dn(o,d,t));return c.length===0?null:(c.sort((d,u)=>we(n,d)-we(n,u)),c[0])}function Ro(e,n,t,r,a,o,s){const c=zn(e,t,"melee",s);if(!c||c.actionType!=="charge")return{canAttack:!1,reason:"无突击牌",damage:0,counterDamage:0,dist:0,card:null};const d=we(e.position,n.position);if(s0(c)){if(d!==1)return{canAttack:!1,reason:`不相邻 (距离 ${d})，${c.nameCn} 无法攻击`,damage:0,counterDamage:0,dist:d,card:c};if(!Dn(e.facing,e.position,n.position))return{canAttack:!1,reason:`目标不在正面弧内（机头朝${e.facing}），${c.nameCn} 无法攻击`,damage:0,counterDamage:0,dist:d,card:c};const b=a.assault+1,k=Lo(b,e.position,n.position,r,c),T=fa(e,t,s),M=k.dmg+T,E=Math.max(0,o.assaultDef-1),C=[...k.reasons];T>0&&C.push("瞄准+1");const $=C.length>0?`（${C.join(", ")}）`:"";return{canAttack:!0,reason:`有效${c.nameCn}攻击${$}`,damage:M,counterDamage:E,dist:d,card:c,chargeDestination:e.position}}const p=a.assault,m=l0(r,e.position,n.position,p,[n.position],e.facing);if(!m)return{canAttack:!1,reason:`突击距离不足或目标不在正面弧内 (距离 ${d}，突击值 ${p})`,damage:0,counterDamage:0,dist:d,card:c};const h=a.assault,g=Lo(h,m,n.position,r,c),f=fa(e,t,s),y=g.dmg+f,I=o.assaultDef,v=[...g.reasons];return f>0&&v.push("瞄准+1"),{canAttack:!0,reason:`有效突击${v.length>0?`（${v.join(", ")}）`:""}`,damage:y,counterDamage:I,dist:d,card:c,chargeDestination:m}}function Et(e){const n=[...e.deck,...e.hand,...e.auxiliary];return e.plotSeg1&&n.push(e.plotSeg1),e.plotSeg2&&n.push(e.plotSeg2),n.filter(t=>!t.destroyed)}function hd(e){return Et(e).length}function ka(e){const n=[...e.hand,...e.auxiliary];return e.plotSeg1&&n.push(e.plotSeg1),e.plotSeg2&&n.push(e.plotSeg2),n.filter(t=>!t.destroyed)}function Hl(e,n){var r,a;const t={...n,destroyed:!0};return{player:{...e,deck:e.deck.map(o=>o.instanceId===n.instanceId?t:o),hand:e.hand.map(o=>o.instanceId===n.instanceId?t:o),auxiliary:e.auxiliary.map(o=>o.instanceId===n.instanceId?t:o),plotSeg1:((r=e.plotSeg1)==null?void 0:r.instanceId)===n.instanceId?t:e.plotSeg1,plotSeg2:((a=e.plotSeg2)==null?void 0:a.instanceId)===n.instanceId?t:e.plotSeg2,destroyedCards:[...e.destroyedCards,t]},destroyed:t}}function zs(e,n,t,r){let a=e;const o=[];let s=n;const c=r?`[${r}] `:"";let d=0;const u=30;for(;s>0&&d<u;){s--,d++;const p=a.deck.filter(f=>!f.destroyed);if(p.length===0){o.push(`    ↳ ${c}【誘爆】牌组已空，无法继续检查`);break}const m=p[0],h=t(m.defId),g=(h==null?void 0:h.nameCn)??m.defId;if(h!=null&&h.hasBombIcon){const{player:f}=Hl(a,m);a=f,s++,o.push(`    ↳ ${c}【💣 誘爆】翻开 ${g}——有炸弹标记，破坏！（连锁+1）`)}else a={...a,deck:a.deck.filter(f=>f.instanceId!==m.instanceId),discard:[...a.discard,m]},o.push(`    ↳ ${c}【誘爆】翻开 ${g}——无炸弹标记，放入弃牌区`)}return{player:a,log:o}}function Qn(e,n,t,r){let a=e;const o=[];let s=n,c=0;for(;s>0;){const d=a.deck.filter(I=>!I.destroyed),u=a.hand.filter(I=>!I.destroyed),p=d[0]??u[0];if(!p)break;const m=t(p.defId),h=(m==null?void 0:m.nameCn)??p.defId,{player:g}=Hl(a,p);a=g,s--;const f=m!=null&&m.hasBombIcon?"【💣】":"",y=r?`[${r}] `:"";if(o.push(`  ▶ ${y}${h} 被摧毁${f}`),m!=null&&m.hasBombIcon&&c++,a.destroyedCards.length>30)break}if(c>0){o.push(`  ─── 誘爆检查（${c}张炸弹卡被破坏）───`);const{player:d,log:u}=zs(a,c,t,r);a=d,o.push(...u)}return{player:a,log:o}}const c0="バーニア",d0="ムーブセンサー",u0="ホイール";function kn(e,n,t){const r=new Map;for(const m of e.auxiliary){if(m.destroyed)continue;const h=n(m.defId);h&&r.set(h.nameJa,(r.get(h.nameJa)??0)+1)}const a=r.get(c0)??0,o=r.get(d0)??0,s=r.get(u0)??0,c=a>=2&&s>=2,d=!c&&a>=2,u=o>=2,p=!c&&s>=2;return{vernier:d&&(t==="movement"||t==="melee"),moveSensor:u&&t==="melee",wheel:p&&(t==="movement"||t==="charge")}}function ue(e){return`P${e.replace("player","")}`}function Oo(e){switch(e){case"movement":return"移动时机";case"ranged":return"射击时机";case"melee":return"近战时机";case"special":return"特殊时机";default:return e}}function p0(e){switch(e){case"movement":return"移动";case"ranged":return"射击";case"melee":return"近战";case"charge":return"突击";case"aim":return"瞄准";case"armor":return"装甲";case"mine":return"机雷";case"special":return"特殊";default:return e}}function Ls(e,n){let t=X(e,`══════ 主要阶段${n}开始 ══════`);t=X(t,`全员翻开阶段${n}盖卡：`);for(const r of e.playerIds){if(t.players[r].isDefeated)continue;const a=t.players[r],o=q.find(u=>u.id===a.unitId),s=ue(r),c=(o==null?void 0:o.nameCn)??r,d=n===1?a.plotSeg1:a.plotSeg2;if(d){const u=ne(d.defId);u?t=X(t,`  ${s}[${c}] →【${u.nameCn}】(${p0(u.actionType)})`):t=X(t,`  ${s}[${c}] → (未知卡牌)`)}else t=X(t,`  ${s}[${c}] → 未配置行动卡`)}return t}function Wl(e,n,t,r="S"){const a=Jh(n,e);return{id:e,unitId:n,position:t,facing:r,deck:a,hand:[],auxiliary:[],plotSeg1:null,plotSeg2:null,discard:[],destroyedCards:[],isDefeated:!1}}function xm(e=2,n=2){const t=En[0],r=rr.slice(0,e),a={};for(let s=0;s<r.length;s++)a[r[s]]=s%n;const o={};for(const s of r){const c=a[s],d=t.startZones[c]??t.startZones[0]??[],u=d[Math.min(1,d.length-1)]??{row:0,col:0},p=c===0?"S":"N";o[s]=Wl(s,"AG",u,p)}return{phase:"setup",roundNumber:0,activePlayer:r[0],players:o,playerIds:r,teams:a,teamCount:n,map:t,mines:[],log:[],turnOrder:[...r],currentTiming:null,plottingStep:null,pendingDamage:null,shuffleSeed:Date.now()}}function de(e,n){return hh(e,n)}function xe(e,n,t){return xh(e,n,t)}function X(e,n){return{...e,log:[...e.log,n]}}function $n(e,n){return{...e,log:[...e.log,`[DBG] ${n}`]}}function m0(e,n){return e.filter(t=>t.instanceId!==n)}function f0(e){const n=[],t=[];for(const r of e.deck){const a=ne(r.defId);a&&a.actionType==="auxiliary"?t.push(r):n.push(r)}return{...e,deck:n,auxiliary:[...e.auxiliary,...t]}}function Ko(e){const n=e.playerIds.filter(a=>!e.players[a].isDefeated),t=e.phase==="action_seg2"?2:1,r=n.map(a=>{const o=e.players[a],s=q.find(u=>u.id===o.unitId),c=(s==null?void 0:s.initiative)??0;let d=(s==null?void 0:s.movement)??0;if(e.currentTiming==="movement"){const u=t===1?o.plotSeg1:o.plotSeg2;if(u){const p=ne(u.defId);p&&p.movementValue!==void 0&&(d=p.movementValue)}}return{id:a,initiative:c,movementValue:d}});return e.currentTiming==="movement"?r.sort((a,o)=>a.movementValue!==o.movementValue?o.movementValue-a.movementValue:o.initiative-a.initiative):r.sort((a,o)=>o.initiative-a.initiative),r.map(a=>a.id)}function g0(e,n){const{playerId:t,unitId:r}=n,a=e.teams[t]??0,o=e.map.startZones[a]??[],s=de(e,t).position,c=o.some(p=>p.row===s.row&&p.col===s.col)?s:o[Math.min(1,o.length-1)]??{row:0,col:0},d=de(e,t).facing,u=Wl(t,r,c,d);return X(xe(e,t,u),`${t} 选择了机体 ${r}`)}function h0(e,n){const t=En.find(o=>o.id===n.mapId);if(!t)return e;const r={},a={};for(const o of e.playerIds){const s=e.teams[o]??0,c=t.startZones[s]??t.startZones[0]??[],d=a[s]??0;a[s]=d+1;const u=c[Math.min(d,c.length-1)]??{row:0,col:0},p=s===0?"S":"N";r[o]=Wl(o,e.players[o].unitId,u,p)}return X({...e,map:t,players:r},`选择了地图 ${t.nameCn}`)}function x0(e,n){if(e.phase!=="setup")return e;const{playerId:t,position:r}=n,a=de(e,t);return xe(e,t,{...a,position:r})}function v0(e,n){if(e.phase!=="setup")return e;const{playerId:t,facing:r}=n,a=de(e,t);return xe(e,t,{...a,facing:r})}function y0(e){var r;const n={...e.players};let t={...e,phase:"draw",roundNumber:1};for(const a of e.playerIds){const o=f0(e.players[a]);n[a]=o;for(const s of o.auxiliary){const c=ne(s.defId);t=X(t,`${a} 补助卡【${(c==null?void 0:c.nameCn)??s.defId}】从卡组移至辅助区`)}}t={...t,players:n};for(const a of e.playerIds){const o=((r=q.find(s=>s.id===t.players[a].unitId))==null?void 0:r.evasion)??5;t=Zl(t,{playerId:a,count:o})}return X({...t,phase:"pregame",plottingStep:null,activePlayer:e.playerIds[0],currentTiming:null},"=== 第 1 回合开始 ===")}function b0(e){if(e.phase!=="pregame")return e;const n=e.playerIds[0];return{...e,phase:"plotting",plottingStep:`transition_to_${n}`,activePlayer:n}}function Zl(e,n){const t=de(e,n.playerId),r=[],a=[];let o=t.deck.filter(h=>!h.destroyed),s=t.discard.filter(h=>!h.destroyed);const c=s.length;let d=!1,u=e.shuffleSeed;for(;a.length<n.count;){if(o.length===0){if(s.length===0)break;const y=pm([...s],u);o=y.shuffled,u=y.nextSeed,s=[],d=!0}const h=n.count-a.length,{drawn:g,remaining:f}=Fh(o,h);o=f;for(const y of g){const I=ne(y.defId);I&&I.actionType==="auxiliary"?r.push(y):a.push(y)}}const p={...t,deck:o,discard:s,hand:[...t.hand,...a],auxiliary:[...t.auxiliary,...r]};let m=xe({...e,shuffleSeed:u},n.playerId,p);d&&(m=X(m,`${n.playerId} 的卡组耗尽，弃牌区（${c} 张）洗入卡组`)),m=X(m,`${n.playerId} 抽了 ${a.length} 张牌`);for(const h of r){const g=ne(h.defId),f=(g==null?void 0:g.nameCn)??h.defId;m=X(m,`  ↳ 辅助卡【${f}】自动放置到辅助区`)}return m}function _0(e,n){var p;const{playerId:t,seg:r,instanceId:a}=n,o=de(e,t),s=o.hand.find(m=>m.instanceId===a);if(!s)return e;const c=((p=ne(s.defId))==null?void 0:p.nameCn)??s.defId;e=$n(e,`PLOT_CARD: ${ue(t)} 配置【${c}】到阶段${r}`);const d=m0(o.hand,a),u={...o,hand:d,plotSeg1:r===1?s:o.plotSeg1,plotSeg2:r===2?s:o.plotSeg2};return xe(e,t,u)}function I0(e,n){const{playerId:t}=n,r=X(e,`${t} 完成了布局`),a=e.playerIds.indexOf(t);if(!(a===e.playerIds.length-1)){const u=e.playerIds[a+1];return{...r,activePlayer:u,plottingStep:`transition_to_${u}`}}const c={...Ls(r,1),activePlayer:e.playerIds[0],phase:"action_seg1",plottingStep:"complete",currentTiming:"movement",turnOrder:[]},d={...c,turnOrder:Ko(c)};return X(d,`▸ ${Oo("movement")} — 行动顺序：${d.turnOrder.map(ue).join(" → ")}`)}function k0(e){const n=e.plottingStep;if(!n)return e;for(const t of e.playerIds)if(n===`transition_to_${t}`)return{...e,plottingStep:t,activePlayer:t};if(n==="transition"){const t=e.playerIds.indexOf(e.activePlayer);if(t>=0&&t<e.playerIds.length-1){const r=e.playerIds[t+1];return{...e,plottingStep:r,activePlayer:r}}}return e}function j0(e,n){const{playerId:t,to:r}=n;let a=de(e,t);const o=a.position;e=$n(e,`MOVE_UNIT: ${ue(t)} (${o.row},${o.col})→(${r.row},${r.col}) 阶段=${e.phase} 时机=${e.currentTiming}`);const s=e.map,c=e.playerIds.filter(g=>g!==t&&!e.players[g].isDefeated).map(g=>de(e,g).position);if(c.some(g=>se(g,r)))return X(e,`${ue(t)} 移动无效：目标位置 (${r.row}, ${r.col}) 已被其他机体占据`);const d=n.path??a0(s,o,r,c);function u(g,f){const y=f.row-g.row,I=f.col-g.col;return Math.abs(y)>=Math.abs(I)?y<0?"N":"S":I>0?"E":"W"}let p=e;if(d&&d.length>0){let g=r,f=!1;for(const y of d){const I=p.mines.filter(v=>v.ownerId!==t&&se(v.position,y));if(I.length>0){g=y,f=!0,a={...a,position:g},p=xe(p,t,a),p=X(p,`${t} 移动途经 (${y.row}, ${y.col})，触发了机雷！`);for(const v of I){p=X(p,`机雷爆炸，对 ${ue(t)} 造成 ${v.damage} 点伤害！`);const x=Qn(a,v.damage,ne,ue(t));for(const b of x.log)p=X(p,b);a=x.player,p=xe(p,t,a),p={...p,mines:p.mines.filter(b=>b.id!==v.id)},p={...p,lastDamageContext:{attackerId:v.ownerId,targetId:t,weaponName:"机雷"}}}break}}if(!f){const y=n.finalFacing??u(o,r);a={...a,position:r,facing:y},p=xe(p,t,a),p=X(p,`${t} 移动到 (${r.row}, ${r.col})，机头朝${y}`)}return sn(p)}const m=n.finalFacing??u(o,r),h={...a,position:r,facing:m};return X(xe(e,t,h),`${t} 移动到 (${r.row}, ${r.col})，机头朝${m}`)}function w0(e,n){const{playerId:t,to:r,damage:a}=n,o={id:`mine-${Date.now()}-${Math.random().toString(36).substring(2,9)}`,ownerId:t,position:r,damage:a};let s={...e,mines:[...e.mines,o]};return s=X(s,`${t} 在 (${r.row}, ${r.col}) 部署了机雷`),s}function xd(e,n,t){var b,k,T;const{attackerId:r,targetId:a}=n,o=e.phase==="action_seg1"?1:2,s=de(e,r),c=de(e,a);e=$n(e,`RESOLVE_${t.toUpperCase()}: ${ue(r)}(${s.position.row},${s.position.col},${s.facing})→${ue(a)}(${c.position.row},${c.position.col},${c.facing}) seg=${o}`);const d=Ul(s,c,o,t,e.map,ne),p=fa(s,o,ne)>0?r:void 0;if(!d.canAttack)return X(e,`${r} 攻击无效：${d.reason}`);const m=((b=q.find(M=>M.id===s.unitId))==null?void 0:b.nameCn)??r,h=((k=q.find(M=>M.id===c.unitId))==null?void 0:k.nameCn)??a,g=((T=d.card)==null?void 0:T.nameCn)??"???",f=t==="ranged"?"射击":"近战",y=Ps(c,o,ne),I=Math.max(0,d.damage-y),v=y>0?` (装甲减伤 -${y}，实际 ${I})`:"";let x=X(e,`${m} 对 ${h} 发动${f}【${g}】→ 造成 ${d.damage} 点伤害${v}`);return x={...x,lastDamageContext:{attackerId:r,targetId:a,weaponName:g}},Ur(x,a,I,t,p)}function Ur(e,n,t,r,a){if(t<=0)return sn(e);const o=de(e,n),s=Et(o);if(s.length===0)return sn(e);if(r!=="ranged"){const c=o.deck.filter(p=>!p.destroyed).length,d=o.discard.filter(p=>!p.destroyed).length;if(!(c===0&&d===0)){let p=e,m=t;const h=Math.min(m,c);if(h>0){const{player:g,log:f}=Qn(de(p,n),h,ne,ue(n));for(const y of f)p=X(p,y);p=xe(p,n,g),m-=h}if(m>0&&d>0){const g=de(p,n),f=g.discard.filter(k=>!k.destroyed),y=g.discard.filter(k=>k.destroyed),{shuffled:I,nextSeed:v}=pm(f,p.shuffleSeed);p={...p,shuffleSeed:v};const x={...g,deck:[...g.deck,...I],discard:y};p=xe(p,n,x),p=X(p,`${ue(n)} 的卡组耗尽，弃牌区（${f.length} 张）洗入卡组`);const b=Math.min(m,f.length);if(b>0){const{player:k,log:T}=Qn(de(p,n),b,ne,ue(n));for(const M of T)p=X(p,M);p=xe(p,n,k),m-=b}}if(m>0){const g=de(p,n),f=Et(g);if(f.length===0)return sn(p);if(f.length<=m){const{player:y,log:I}=Qn(g,m,ne,ue(n));for(const v of I)p=X(p,v);return p=xe(p,n,y),sn(p)}return p=X(p,"牌组与弃牌区已耗尽，切换为防方自选伤害模式"),{...p,pendingDamage:{targetId:n,remaining:m,selectedInstanceIds:[],destroyedBombCount:0,source:r,attackerId:a}}}return sn(p)}e=X(e,`牌组与弃牌区已耗尽，本次${r==="charge"?"突击":"近战"}伤害切换为防方自选模式`)}if(s.length<=t){const{player:c,log:d}=Qn(o,t,ne,ue(n));let u=e;for(const p of d)u=X(u,p);return u=xe(u,n,c),sn(u)}if(r==="ranged"){const c=ka(o).length,d=Math.min(t,c),u=t-d;if(d<=0){const{player:p,log:m}=Qn(o,t,ne,ue(n));let h=e;for(const g of m)h=X(h,g);return h=xe(h,n,p),sn(h)}return{...e,pendingDamage:{targetId:n,remaining:d,selectedInstanceIds:[],destroyedBombCount:0,source:r,attackerId:a,deckAutoCount:u}}}return{...e,pendingDamage:{targetId:n,remaining:t,selectedInstanceIds:[],destroyedBombCount:0,source:r,attackerId:a}}}function S0(e,n){var v;const{attackerId:t,targetId:r}=n,a=e.phase==="action_seg1"?1:2,o=de(e,t),s=de(e,r);e=$n(e,`RESOLVE_CHARGE: ${ue(t)}(${o.position.row},${o.position.col},${o.facing})→${ue(r)}(${s.position.row},${s.position.col},${s.facing}) seg=${a}`);const c=q.find(x=>x.id===o.unitId),d=q.find(x=>x.id===s.unitId),u=Ro(o,s,a,e.map,c,d,ne);if(!u.canAttack)return X(e,`${t} 突击无效：${u.reason}`);const p=c.nameCn,m=d.nameCn,h=((v=u.card)==null?void 0:v.nameCn)??"突击";let g=e;if(u.chargeDestination&&(u.chargeDestination.row!==o.position.row||u.chargeDestination.col!==o.position.col)){const x=u.chargeDestination,b={...o,position:x};g=xe(g,t,b),g=X(g,`${p} 发动突击冲锋，移动至 (${x.row}, ${x.col})`)}const f=Ps(s,a,ne),y=Math.max(0,u.damage-f),I=f>0?` (装甲减伤 -${f}，实际 ${y})`:"";if(g=X(g,`${p} 对 ${m} 发动${h}【突击值 ${c.assault}】→ 对目标造成 ${u.damage} 点近战伤害${I}；自机承受反伤 ${u.counterDamage} 点`),u.counterDamage>0){const x=Ps(de(g,t),a,ne),b=Math.max(0,u.counterDamage-x);if(b>0){g={...g,pendingFollowUpDamage:{targetId:t,amount:b,source:"charge",attackerId:r,weaponName:"突击反伤"}},g={...g,lastDamageContext:{attackerId:t,targetId:r,weaponName:h}};const k=Ur(g,r,y,"charge");if(!k.pendingDamage){if(k.phase==="game_over")return k;const M={...{...k,pendingFollowUpDamage:void 0},lastDamageContext:{attackerId:r,targetId:t,weaponName:"突击反伤"}};return Ur(M,t,b,"charge")}return k}else x>0&&(g=X(g,`  [反伤] ${p} 装甲完全吸收了反伤`))}return g={...g,lastDamageContext:{attackerId:t,targetId:r,weaponName:h}},Ur(g,r,y,"charge")}function Jo(e){if(!e.pendingFollowUpDamage||e.phase==="game_over")return e;const{targetId:n,amount:t,source:r,attackerId:a,weaponName:o}=e.pendingFollowUpDamage;let s={...e,pendingFollowUpDamage:void 0};return a&&o&&(s={...s,lastDamageContext:{attackerId:a,targetId:n,weaponName:o}}),Ur(s,n,t,r,a)}function C0(e,n){const t=e.pendingDamage;if(!t)return e;const{playerId:r,instanceId:a}=n,o=t.selectedInstanceIds.length===0,s=!!t.attackerId&&o&&!t.attackerDesignatedCardId,c=s?t.attackerId:t.targetId;if(r!==c)return e;const d=de(e,t.targetId),u=Et(d).find(x=>x.instanceId===a&&!x.destroyed);if(!u||t.selectedInstanceIds.includes(a))return e;if(t.source==="ranged"){const x=ka(d);if(d.deck.some(k=>k.instanceId===a&&!k.destroyed)&&x.length>0)return e}const{player:p}=Hl(d,u);let m=xe(e,t.targetId,p);const h=ne(u.defId),g=(h==null?void 0:h.nameCn)??u.defId,f=h!=null&&h.hasBombIcon?"【💣】":"";m=X(m,`  ▶ ${g} 被摧毁${f}`);let y=t.remaining-1;const I=(t.destroyedBombCount??0)+(h!=null&&h.hasBombIcon?1:0);if(y<=0){if(m={...m,pendingDamage:null},t.deckAutoCount&&t.deckAutoCount>0){const x=de(m,t.targetId),{player:b,log:k}=Qn(x,t.deckAutoCount,ne,ue(t.targetId));for(const T of k)m=X(m,T);m=xe(m,t.targetId,b)}if(I>0){const x=de(m,t.targetId);m=X(m,`  ─── 誘爆检查（${I}张炸弹卡被破坏）───`);const{player:b,log:k}=zs(x,I,ne,ue(t.targetId));for(const T of k)m=X(m,T);m=xe(m,t.targetId,b)}return m=sn(m),Jo(m)}if(Et(de(m,t.targetId)).length===0){if(m={...m,pendingDamage:null},I>0){const x=de(m,t.targetId);m=X(m,`  ─── 誘爆检查（${I}张炸弹卡被破坏）───`);const{player:b,log:k}=zs(x,I,ne,ue(t.targetId));for(const T of k)m=X(m,T);m=xe(m,t.targetId,b)}return m=sn(m),Jo(m)}return m={...m,pendingDamage:{...t,remaining:y,selectedInstanceIds:[...t.selectedInstanceIds,a],destroyedBombCount:I,attackerDesignatedCardId:s?a:t.attackerDesignatedCardId}},m}function N0(e,n){const t=e.pendingDamage;if(!t)return e;const r=t.selectedInstanceIds.length===0,o=!!t.attackerId&&r&&!t.attackerDesignatedCardId?t.attackerId:t.targetId;if(n.playerId!==o)return e;const s=t.remaining+(t.deckAutoCount??0);if(s>0){const d=de(e,t.targetId),{player:u,log:p}=Qn(d,s,ne,ue(t.targetId));let m=e;for(const h of p)m=X(m,h);return m=xe(m,t.targetId,u),m={...m,pendingDamage:null},m=sn(m),Jo(m)}let c={...e,pendingDamage:null};return Jo(c)}function vd(e){const n=["movement","ranged","melee","special"],t=n.indexOf(e.currentTiming);if(t===-1){console.warn("[GameReducer] Invalid currentTiming:",e.currentTiming);const a=$n(e,`ADVANCE_TIMING: currentTiming 无效(${e.currentTiming})，强制推进阶段`);return mn(a,{type:"ADVANCE_PHASE"})}if(t<n.length-1){const a=n[t+1],o={...e,currentTiming:a},s={...o,turnOrder:Ko(o)};return X(s,`▸ ${Oo(a)} — 行动顺序：${s.turnOrder.map(ue).join(" → ")}`)}const r=$n(e,`ADVANCE_TIMING: ${e.phase}/${e.currentTiming} 时机全部完成，推进到下一阶段`);return mn(r,{type:"ADVANCE_PHASE"})}function M0(e){var t,r;const n=$n(e,`ADVANCE_PHASE: ${e.phase} → 推进`);switch(e.phase){case"draw":{const a=n.playerIds.find(o=>!n.players[o].isDefeated)??n.playerIds[0];return{...n,phase:"plotting",plottingStep:`transition_to_${a}`,activePlayer:a,currentTiming:null}}case"plotting":{const o={...Ls(n,1),phase:"action_seg1",plottingStep:"complete",currentTiming:"movement"};let c={...o,turnOrder:Ko(o)};for(const d of c.playerIds){const u=c.players[d];if(u.isDefeated)continue;const p=u.plotSeg1?((t=ne(u.plotSeg1.defId))==null?void 0:t.nameCn)??u.plotSeg1.defId:"(空)",m=u.plotSeg2?((r=ne(u.plotSeg2.defId))==null?void 0:r.nameCn)??u.plotSeg2.defId:"(空)";c=$n(c,`${ue(d)} 配置: 阶段1=[${p}] 阶段2=[${m}] 位置=${u.position.row},${u.position.col} 朝向=${u.facing}`)}return X(c,`▸ ${Oo("movement")} — 行动顺序：${c.turnOrder.map(ue).join(" → ")}`)}case"action_seg1":{const o={...Ls(n,2),phase:"action_seg2",currentTiming:"movement"},s={...o,turnOrder:Ko(o)};return X(s,`▸ ${Oo("movement")} — 行动顺序：${s.turnOrder.map(ue).join(" → ")}`)}case"action_seg2":return T0(n);default:return n}}function T0(e){let n=$n(e,`CLEANUP: 第${e.roundNumber}回合结束`);for(const c of e.playerIds){const d=e.players[c];n=$n(n,`  ${ue(c)}: 位置=(${d.position.row},${d.position.col}) 朝向=${d.facing} 手牌=${d.hand.length} 牌组=${d.deck.filter(u=>!u.destroyed).length} 弃牌=${d.discard.length} ${d.isDefeated?"已击破":"存活"}`)}e=n;const t=(c,d)=>!d||d.destroyed?c:{...c,discard:[...c.discard,d]},r={...e.players};for(const c of e.playerIds){let d=t(e.players[c],e.players[c].plotSeg1);d=t(d,d.plotSeg2),d={...d,plotSeg1:null,plotSeg2:null},d={...d,discard:[...d.discard,...d.hand.filter(u=>!u.destroyed)],hand:[]},r[c]=d}const a={...e,players:r,phase:"cleanup",currentTiming:null},o=X(a,`--- 第 ${e.roundNumber} 回合结束 ---`),s=sn(o);return s.phase==="game_over"?s:E0(s)}function E0(e){var a;const n=e.roundNumber+1;let t=X({...e,phase:"draw",roundNumber:n},`=== 第 ${n} 回合开始 ===`);for(const o of e.playerIds){if(t.players[o].isDefeated)continue;const s=((a=q.find(c=>c.id===t.players[o].unitId))==null?void 0:a.evasion)??5;t=Zl(t,{playerId:o,count:s})}const r=e.playerIds.find(o=>!t.players[o].isDefeated)??e.playerIds[0];return{...t,phase:"plotting",plottingStep:`transition_to_${r}`,activePlayer:r,currentTiming:null}}function sn(e){const n=s=>{const c=[...s.deck,...s.hand,...s.auxiliary,...s.discard,...s.plotSeg1?[s.plotSeg1]:[],...s.plotSeg2?[s.plotSeg2]:[]].filter(u=>!u.destroyed);return c.length<=3?!0:!c.some(u=>{const p=ne(u.defId);return p&&(p.actionType==="ranged"||p.actionType==="melee"||p.actionType==="charge")})},t={...e.players};let r=!1;for(const s of e.playerIds){if(t[s].isDefeated)continue;n(t[s])&&(t[s]={...t[s],isDefeated:!0},r=!0)}if(!r)return e;let a={...e,players:t};for(const s of e.playerIds)if(!e.players[s].isDefeated&&a.players[s].isDefeated){const c=q.find(m=>m.id===a.players[s].unitId),d=e.playerIds.indexOf(s),u=d>=0?`P${d+1}`:s,p=a.lastDamageContext;if(p&&p.targetId===s&&p.attackerId){const m=q.find(f=>{var y;return f.id===((y=a.players[p.attackerId])==null?void 0:y.unitId)}),h=e.playerIds.indexOf(p.attackerId),g=h>=0?`P${h+1}`:p.attackerId;a=X(a,`💀 ${u}[${(c==null?void 0:c.nameCn)??s}] 被 ${g}[${(m==null?void 0:m.nameCn)??p.attackerId}] 以【${p.weaponName}】击毁！`)}else a=X(a,`💀 ${u}[${(c==null?void 0:c.nameCn)??s}] 机体严重受损，宣告报废！`)}const o=new Set;for(const s of e.playerIds)a.players[s].isDefeated||o.add(a.teams[s]);if(o.size<=1){if(o.size===0)return X({...a,phase:"game_over"},"所有队伍同时全灭！平局！");const s=[...o][0],c=e.playerIds.filter(d=>a.teams[d]===s).map(d=>{const u=q.find(p=>p.id===a.players[d].unitId);return(u==null?void 0:u.nameCn)??d}).join("、");return X({...a,phase:"game_over"},`队伍${s+1}（${c}）获胜！`)}return a}function D0(e,n){if(e.currentTiming!=="melee")return e;const{playerId:t,to:r}=n,a=de(e,t),o=e.playerIds.filter(p=>p!==t).map(p=>de(e,p).position);if(!kn(a,ne,"melee").moveSensor)return X(e,`${t} 移动传感器未激活（需要辅助区中有≥2张）`);if(!hm(e.map,a.position,o).some(p=>se(p,r)))return X(e,`${t} 移动传感器目标格不在有效范围内`);const d={...a,position:r};let u=xe(e,t,d);return u=X(u,`【辅助】${t} 移动传感器：向 (${r.row}, ${r.col}) 移动1格`),u}function $0(e,n){const{playerId:t,facing:r}=n,a=de(e,t),o=q.find(d=>d.id===a.unitId),s=(o==null?void 0:o.nameCn)??t;let c=xe(e,t,{...a,facing:r});return c=X(c,`${s} 调整机头朝向至【${r}】`),c}function mn(e,n){switch(n.type){case"SELECT_UNIT":return g0(e,n);case"SELECT_MAP":return h0(e,n);case"CONFIRM_SETUP":return y0(e);case"START_PLOTTING":return b0(e);case"SET_SPAWN_POSITION":return x0(e,n);case"SET_SPAWN_FACING":return v0(e,n);case"DRAW_CARDS":return Zl(e,n);case"PLOT_CARD":return _0(e,n);case"CONFIRM_PLOT":return I0(e,n);case"ADVANCE_PLOT_STEP":return k0(e);case"MOVE_UNIT":return j0(e,n);case"ADJUST_FACING":return $0(e,n);case"ADVANCE_TIMING":return vd(e);case"ADVANCE_PHASE":return M0(e);case"SKIP_ACTION":return vd(e);case"RESET_GAME":return xm(n.playerCount??2,n.teamCount??2);case"LOAD_GAME":return n.state;case"ADD_LOG":return X(e,n.message);case"RESOLVE_RANGED":return xd(e,n,"ranged");case"RESOLVE_MELEE":return xd(e,n,"melee");case"RESOLVE_CHARGE":return S0(e,n);case"PLACE_MINE":return w0(e,n);case"SELECT_DAMAGE_CARD":return C0(e,n);case"CONFIRM_DAMAGE_SELECTION":return N0(e,n);case"MELEE_SENSOR_MOVE":return D0(e,n);default:return e}}class A0{constructor(){Qe(this,"ctx",null);Qe(this,"_enabled",!0);Qe(this,"_volume",.5)}init(){this.ctx||(this.ctx=new AudioContext),this.ctx.state==="suspended"&&this.ctx.resume()}get enabled(){return this._enabled}set enabled(n){this._enabled=n}get volume(){return this._volume}set volume(n){this._volume=Math.max(0,Math.min(1,n))}ensure(){return!this._enabled||!this.ctx?null:(this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx)}makeGain(n,t){const r=n.createGain();return r.gain.value=t*this._volume,r.connect(n.destination),r}noiseBuffer(n,t){const r=Math.floor(n.sampleRate*t),a=n.createBuffer(1,r,n.sampleRate),o=a.getChannelData(0);for(let s=0;s<r;s++)o[s]=Math.random()*2-1;return a}cardFlip(){const n=this.ensure();if(!n)return;const t=n.currentTime,r=n.createBufferSource();r.buffer=this.noiseBuffer(n,.06);const a=n.createBiquadFilter();a.type="highpass",a.frequency.value=3e3;const o=this.makeGain(n,.25);o.gain.setValueAtTime(.25*this._volume,t),o.gain.exponentialRampToValueAtTime(.001,t+.05),r.connect(a),a.connect(o),r.start(t),r.stop(t+.06)}footstep(){const n=this.ensure();if(!n)return;const t=n.currentTime,r=n.createOscillator();r.type="sine",r.frequency.setValueAtTime(150,t),r.frequency.exponentialRampToValueAtTime(60,t+.05);const a=this.makeGain(n,.2);a.gain.setValueAtTime(.2*this._volume,t),a.gain.exponentialRampToValueAtTime(.001,t+.08),r.connect(a),r.start(t),r.stop(t+.08);const o=n.createBufferSource();o.buffer=this.noiseBuffer(n,.03);const s=n.createBiquadFilter();s.type="bandpass",s.frequency.value=800,s.Q.value=2;const c=this.makeGain(n,.1);c.gain.setValueAtTime(.1*this._volume,t),c.gain.exponentialRampToValueAtTime(.001,t+.03),o.connect(s),s.connect(c),o.start(t),o.stop(t+.03)}weaponFire(){const n=this.ensure();if(!n)return;const t=n.currentTime,r=n.createBufferSource();r.buffer=this.noiseBuffer(n,.15);const a=n.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(1200,t),a.frequency.exponentialRampToValueAtTime(400,t+.12),a.Q.value=3;const o=this.makeGain(n,.3);o.gain.setValueAtTime(.3*this._volume,t),o.gain.exponentialRampToValueAtTime(.001,t+.15),r.connect(a),a.connect(o),r.start(t),r.stop(t+.15);const s=n.createOscillator();s.type="sawtooth",s.frequency.setValueAtTime(800,t),s.frequency.exponentialRampToValueAtTime(200,t+.12);const c=this.makeGain(n,.15);c.gain.setValueAtTime(.15*this._volume,t),c.gain.exponentialRampToValueAtTime(.001,t+.12),s.connect(c),s.start(t),s.stop(t+.12)}metalImpact(){const n=this.ensure();if(!n)return;const t=n.currentTime,r=[200,340];for(const s of r){const c=n.createOscillator();c.type="sine",c.frequency.value=s;const d=this.makeGain(n,.2);d.gain.setValueAtTime(.2*this._volume,t),d.gain.exponentialRampToValueAtTime(.001,t+.25),c.connect(d),c.start(t),c.stop(t+.25)}const a=n.createBufferSource();a.buffer=this.noiseBuffer(n,.02);const o=this.makeGain(n,.25);o.gain.setValueAtTime(.25*this._volume,t),o.gain.exponentialRampToValueAtTime(.001,t+.02),a.connect(o),a.start(t),a.stop(t+.02)}explosion(){const n=this.ensure();if(!n)return;const t=n.currentTime,r=n.createOscillator();r.type="sine",r.frequency.setValueAtTime(60,t),r.frequency.exponentialRampToValueAtTime(30,t+.5);const a=this.makeGain(n,.35);a.gain.setValueAtTime(.35*this._volume,t),a.gain.setValueAtTime(.35*this._volume,t+.1),a.gain.exponentialRampToValueAtTime(.001,t+.5),r.connect(a),r.start(t),r.stop(t+.5);const o=n.createBufferSource();o.buffer=this.noiseBuffer(n,.4);const s=n.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(3e3,t),s.frequency.exponentialRampToValueAtTime(200,t+.35);const c=this.makeGain(n,.3);c.gain.setValueAtTime(.3*this._volume,t),c.gain.exponentialRampToValueAtTime(.001,t+.35),o.connect(s),s.connect(c),o.start(t),o.stop(t+.4)}cardShatter(){const n=this.ensure();if(!n)return;const t=n.currentTime;for(let r=0;r<5;r++){const a=t+r*.03,o=n.createBufferSource();o.buffer=this.noiseBuffer(n,.02);const s=n.createBiquadFilter();s.type="highpass",s.frequency.value=1e3+r*300;const c=this.makeGain(n,.2);c.gain.setValueAtTime(.2*this._volume,a),c.gain.exponentialRampToValueAtTime(.001,a+.02),o.connect(s),s.connect(c),o.start(a),o.stop(a+.02)}}mineBeep(){const n=this.ensure();if(!n)return;const t=n.currentTime,r=[600,800,1e3];for(let a=0;a<r.length;a++){const o=t+a*.1,s=n.createOscillator();s.type="sine",s.frequency.value=r[a];const c=this.makeGain(n,.15);c.gain.setValueAtTime(.15*this._volume,o),c.gain.setValueAtTime(.15*this._volume,o+.05),c.gain.exponentialRampToValueAtTime(.001,o+.08),s.connect(c),s.start(o),s.stop(o+.08)}}chargeRumble(){const n=this.ensure();if(!n)return;const t=n.currentTime,r=n.createOscillator();r.type="sawtooth",r.frequency.setValueAtTime(80,t),r.frequency.linearRampToValueAtTime(120,t+.3);const a=n.createOscillator();a.type="sine",a.frequency.value=15;const o=n.createGain();o.gain.value=.15*this._volume;const s=this.makeGain(n,.25);s.gain.setValueAtTime(.25*this._volume,t),s.gain.exponentialRampToValueAtTime(.001,t+.4),a.connect(o),o.connect(s.gain),r.connect(s),a.start(t),r.start(t),a.stop(t+.4),r.stop(t+.4)}uiBlip(){const n=this.ensure();if(!n)return;const t=n.currentTime,r=n.createOscillator();r.type="sine",r.frequency.value=880;const a=this.makeGain(n,.1);a.gain.setValueAtTime(.1*this._volume,t),a.gain.exponentialRampToValueAtTime(.001,t+.06),r.connect(a),r.start(t),r.stop(t+.06)}}const Te=new A0,V0={move_step:200,card_draw:350,ranged_hit:400,melee_hit:350,charge_move:300,charge_hit:450,card_destroy:400,mine_explode:500,mine_place:300,screen_shake:300,damage_number:600,cleanup_discard:2500,batch_card_draw:1600,deck_reshuffle:800};function P0(e){return V0[e.type]??300}const vm=j.createContext(null);function Yl({children:e}){const[n,t]=j.useState(!1),[r,a]=j.useState(null),[o,s]=j.useState(()=>Object.fromEntries(rr.map(f=>[f,null]))),c=j.useRef([]),d=j.useRef(!1),u=j.useRef(!1),p=j.useRef((()=>{try{const f=localStorage.getItem("em_anim_speed");return f==="fast"?.5:f==="off"?0:1}catch{return 1}})()).current,m=j.useCallback(()=>{if(u.current||c.current.length===0){a(null),t(!1),s(Object.fromEntries(rr.map(I=>[I,null]))),d.current=!1,u.current=!1;return}const f=c.current.shift();a(f),f.type==="move_step"&&s(I=>({...I,[f.playerId]:{pos:f.to,facing:f.facing}})),z0(f);const y=p===0?0:P0(f)*p;y===0?m():setTimeout(()=>m(),y)},[p]),h=j.useCallback(f=>{if(f.length!==0&&p!==0&&(c.current.push(...f),!d.current)){d.current=!0,u.current=!1,t(!0);const y=f.find(I=>I.type==="move_step");y&&s(I=>({...I,[y.playerId]:{pos:y.from,facing:y.facing}})),setTimeout(()=>m(),16)}},[m,p]),g=j.useCallback(()=>{u.current=!0,c.current=[],a(null),t(!1),s(Object.fromEntries(rr.map(f=>[f,null]))),d.current=!1},[]);return i.jsx(vm.Provider,{value:{isAnimating:n,currentEvent:r,animatedPositions:o,enqueueEvents:h,skipAnimation:g,speedMultiplier:p},children:e})}function ja(){const e=j.useContext(vm);if(!e)throw new Error("useAnimation must be used inside <AnimationProvider>");return e}function z0(e){switch(e.type){case"card_draw":Te.cardFlip();break;case"move_step":Te.footstep();break;case"ranged_hit":Te.weaponFire(),setTimeout(()=>Te.metalImpact(),100);break;case"melee_hit":Te.metalImpact();break;case"charge_move":Te.chargeRumble();break;case"charge_hit":Te.explosion(),setTimeout(()=>Te.metalImpact(),80);break;case"card_destroy":e.isBomb?Te.explosion():Te.cardShatter();break;case"mine_explode":Te.explosion();break;case"mine_place":Te.mineBeep();break;case"cleanup_discard":case"batch_card_draw":Te.cardFlip();break;case"deck_reshuffle":Te.cardFlip(),setTimeout(()=>Te.cardFlip(),200);break}}function L0(e,n){const{isAnimating:t,enqueueEvents:r}=ja();return j.useCallback(a=>{const o=a.type==="ADVANCE_TIMING"||a.type==="ADVANCE_PHASE"||a.type==="ADJUST_FACING"||a.type==="START_PLOTTING"||a.type==="SELECT_DAMAGE_CARD"||a.type==="CONFIRM_DAMAGE_SELECTION";if(t&&!o)return;const s=n.current,c=mn(s,a);e(a);const d=R0(s,c,a);d.length>0&&r(d)},[e,n,t,r])}function R0(e,n,t){switch(t.type){case"MOVE_UNIT":return O0(e,n,t);case"RESOLVE_RANGED":return yd(e,n,"ranged",t.attackerId,t.targetId);case"RESOLVE_MELEE":return yd(e,n,"melee",t.attackerId,t.targetId);case"RESOLVE_CHARGE":return K0(e,n,t.attackerId,t.targetId);case"DRAW_CARDS":return J0(e,n,t.playerId);case"ADVANCE_TIMING":return e.phase==="action_seg2"&&n.phase!=="action_seg2"?[B0(e),...bd(e,n,"player1"),...bd(e,n,"player2")]:[];case"PLACE_MINE":return[{type:"mine_place",playerId:t.playerId,position:t.to}];case"SELECT_DAMAGE_CARD":return F0(e,n);default:return[]}}function O0(e,n,t){const{playerId:r}=t,a=fn(e,r),o=fn(n,r),s=a.position;if(se(s,o.position))return[];const c=[],d=t.path&&t.path.length>0?t.path:[o.position];let u=s;for(const h of d){const g=Mt(h.row-u.row,h.col-u.col);if(c.push({type:"move_step",playerId:r,from:u,to:h,facing:g}),u=h,se(h,o.position))break}const p=e.mines.filter(h=>!n.mines.some(g=>g.id===h.id));for(const h of p)c.push({type:"mine_explode",position:h.position,damage:h.damage}),c.push({type:"screen_shake",intensity:"heavy"});const m=ci(e,n,r);return di(c,r,m),c}function yd(e,n,t,r,a){var p;const o=[],s=fn(e,a).position,c=ci(e,n,a),d=c.length;if(d===0&&!n.pendingDamage)return[];const u=d+(((p=n.pendingDamage)==null?void 0:p.remaining)??0);return o.push({type:t==="ranged"?"ranged_hit":"melee_hit",attackerId:r,targetId:a,damage:u,targetPos:s}),o.push({type:"screen_shake",intensity:t==="melee"?"medium":"light"}),u>0&&o.push({type:"damage_number",position:s,value:u}),di(o,a,c),o}function K0(e,n,t,r){var p;const a=[],o=fn(e,t),s=fn(n,t),c=fn(e,r).position;se(o.position,s.position)||(a.push({type:"charge_move",attackerId:t,from:o.position,to:s.position}),a.push({type:"move_step",playerId:t,from:o.position,to:s.position,facing:Mt(s.position.row-o.position.row,s.position.col-o.position.col)}));const d=ci(e,n,r),u=d.length+(((p=n.pendingDamage)==null?void 0:p.remaining)??0);return a.push({type:"charge_hit",attackerId:t,targetId:r,damage:u,targetPos:c}),a.push({type:"screen_shake",intensity:"heavy"}),u>0&&a.push({type:"damage_number",position:c,value:u}),di(a,r,d),a}function J0(e,n,t){const r=[],a=fn(e,t),o=fn(n,t),s=new Set(a.hand.map(u=>u.instanceId)),c=o.hand.filter(u=>!s.has(u.instanceId));if(c.length>0){const u=a.deck.filter(h=>!h.destroyed).length,p=Math.min(c.length,u),m=c.length-p;p>0&&r.push({type:"batch_card_draw",playerId:t,count:p}),m>0&&(r.push({type:"deck_reshuffle",playerId:t}),r.push({type:"batch_card_draw",playerId:t,count:m}))}const d=new Set(a.auxiliary.map(u=>u.instanceId));for(const u of o.auxiliary)d.has(u.instanceId)||r.push({type:"card_draw",playerId:t,card:u,defId:u.defId,isAuxiliary:!0});return r}function B0(e){function n(t){const r=[];for(const a of t.hand)a.destroyed||r.push(a);return t.plotSeg1&&!t.plotSeg1.destroyed&&r.push(t.plotSeg1),t.plotSeg2&&!t.plotSeg2.destroyed&&r.push(t.plotSeg2),r}return{type:"cleanup_discard",p1Cards:n(e.players.player1),p2Cards:n(e.players.player2)}}function bd(e,n,t){const r=[],a=fn(e,t),o=fn(n,t),s=o.hand.length;if(s>0){const d=a.deck.filter(m=>!m.destroyed).length,u=Math.min(s,d),p=s-u;u>0&&r.push({type:"batch_card_draw",playerId:t,count:u}),p>0&&(r.push({type:"deck_reshuffle",playerId:t}),r.push({type:"batch_card_draw",playerId:t,count:p}))}const c=new Set(a.auxiliary.map(d=>d.instanceId));for(const d of o.auxiliary)c.has(d.instanceId)||r.push({type:"card_draw",playerId:t,card:d,defId:d.defId,isAuxiliary:!0});return r}function F0(e,n){const t=e.pendingDamage;if(!t)return[];const r=ci(e,n,t.targetId),a=[];return di(a,t.targetId,r),a}function fn(e,n){return e.players[n]}function ci(e,n,t){const r=new Set(fn(e,t).destroyedCards.map(a=>a.instanceId));return fn(n,t).destroyedCards.filter(a=>!r.has(a.instanceId))}function di(e,n,t){for(let r=0;r<t.length;r++){const a=t[r],o=ne(a.defId);e.push({type:"card_destroy",playerId:n,card:a,defId:a.defId,isBomb:(o==null?void 0:o.hasBombIcon)??!1,index:r,total:t.length})}}const G0={player1:!1,player2:!1,player1Difficulty:"hard",player2Difficulty:"hard",playerAI:{},playerDifficulty:{}};function Ye(e,n){var t;return((t=e.playerAI)==null?void 0:t[n])!==void 0?e.playerAI[n]:n==="player1"?e.player1:n==="player2"?e.player2:!1}function wa(e,n){var t;return((t=e.playerDifficulty)==null?void 0:t[n])!==void 0?e.playerDifficulty[n]:n==="player1"?e.player1Difficulty:n==="player2"?e.player2Difficulty:"hard"}function Xl(e,n){const t=e.teams[n],r=e.players[n].position;let a=null,o=1/0;for(const s of e.playerIds){if(s===n||e.teams[s]===t||e.players[s].isDefeated)continue;const c=e.players[s].position,d=Math.abs(c.row-r.row)+Math.abs(c.col-r.col);d<o&&(o=d,a=s)}return a??e.playerIds.find(s=>s!==n&&!e.players[s].isDefeated&&e.teams[s]!==t)??e.playerIds.find(s=>s!==n)??n}function mr(e,n){return e.players[n]}function U0(e,n,t,r,a,o){if(!n)return 0;const s=we(t.position,r.position);let c;switch(n.actionType){case"ranged":case"melee":case"charge":c=5+(n.damage??0);break;case"movement":c=2+(n.movementValue??0)*.5;break;case"aim":case"armor":c=2;break;case"mine":c=1.5+(n.damage??0)*.2;break;default:c=1}n.hasBombIcon&&(o?c+=5:c+=8);const u=Et(t).filter(p=>p.defId===e.defId&&!p.destroyed).length;if(u>=3?c-=3:u===2&&(c-=1.5),n.actionType==="movement"&&s>=4&&(c+=3),n.actionType==="ranged"){const p=n.rangeMin??1,m=n.rangeMax??6;s>=p&&s<=m&&(c+=4)}return(n.actionType==="melee"||n.actionType==="charge")&&s<=2&&(c+=4),c}function zt(e,n,t,r,a,o){if(e.actionType!=="movement")return[];const s=kn(n,a,"movement"),c=(e.movementValue??0)+(s.wheel?2:0);if(c<=0)return[];const d=[t.position],u=li(r,n.position,c,d,s,n.facing),p=[];for(const{pos:m}of u){const h=Gl(r,n.position,n.facing,m,c,[t.position],s);h&&p.push({pos:m,facing:h.finalFacing,dist:we(m,t.position)})}return p.sort((m,h)=>m.dist-h.dist),p}function H0(e,n,t,r,a,o){const s=zt(e,t,r,a,o);if(s.length===0)return null;if(n.actionType==="melee")return s.find(c=>c.dist===1)??null;if(n.actionType==="ranged"){const c=n.rangeMin??1,d=n.rangeMax??6,u=n.rangeOptimal??Math.round((c+d)/2);let p=null,m=1/0;for(const h of s){if(h.dist<c||h.dist>d||!pa(a,h.pos,r.position)||!Dn(h.facing,h.pos,r.position))continue;const g=Math.abs(h.dist-u);g<m&&(m=g,p=h)}return p}return n.actionType==="charge"?s.find(c=>c.dist<=3)??null:null}function Hr(e,n,t,r,a,o,s){var u;let c=e.damage??0;if(e.actionType==="ranged"&&e.rangeOptimal!==void 0&&e.damageAttenuation!==void 0){const p=Math.max(0,t-e.rangeOptimal);c-=p*e.damageAttenuation}const d=(u=s.cells[n.row])==null?void 0:u[n.col];return(d==null?void 0:d.terrain)==="water"&&e.isEnergyWeapon&&(c-=1),Math.max(0,c)}function W0(e,n){const t=e.hand.filter(a=>!a.destroyed);if(t.length===0)return 0;const r=t.filter(a=>{const o=n(a.defId);return o&&o.actionType==="armor"}).length;return Math.min(1,r/t.length)}function _d(e,n,t,r,a,o){var h,g;const s=we(t.position,r.position),c=(h=a.cells[r.position.row])==null?void 0:h[r.position.col],d=(g=a.cells[t.position.row])==null?void 0:g[t.position.col],u=W0(r,o),p=f=>["ranged","melee","charge"].includes(f.actionType),m=(c==null?void 0:c.terrain)==="forest"?.85:1;if(e.actionType==="movement"&&p(n)){const f=H0(e,n,t,r,a,o);if(f)return Hr(n,f.pos,f.dist,2,!1,!1,a)*(1-u*.5)*m*3.5+2;const y=zt(e,t,r,a,o),I=y.length>0?y[0].dist:s;return(s-I)*1.5+(n.damage??0)*.3}if(e.actionType==="aim"&&p(n)){let f=(n.damage??0)+1,y=!1;if(n.actionType==="ranged"){const v=n.rangeMin??1,x=n.rangeMax??6;if(y=s>=v&&s<=x&&pa(a,t.position,r.position)&&Dn(t.facing,t.position,r.position),y&&n.rangeOptimal&&n.damageAttenuation){const b=Math.max(0,s-n.rangeOptimal);f-=b*n.damageAttenuation}(d==null?void 0:d.terrain)==="water"&&n.isEnergyWeapon&&(f-=1)}else n.actionType==="melee"?y=s===1:n.actionType==="charge"&&(y=s<=3);f=Math.max(0,f);const I=f*(1-u*.5)*m;return y?I*4+3:I*.5}if(p(e)&&n.actionType==="movement"){let f=0;if(e.actionType==="ranged"){const v=e.rangeMin??1,x=e.rangeMax??6;s>=v&&s<=x&&pa(a,t.position,r.position)&&Dn(t.facing,t.position,r.position)?f=Hr(e,t.position,s,1,!1,!1,a)*(1-u*.5)*m*2.5:f=(e.damage??0)*.3}else e.actionType==="melee"?s===1?f=Hr(e,t.position,s,1,!1,!1,a)*(1-u*.5)*3:f=(e.damage??0)*.3:e.actionType==="charge"&&(f=s<=3?(e.damage??0)*2:(e.damage??0)*.3);const y=zt(n,t,r,a,o),I=y.length>0?Math.max(0,s-y[0].dist)*1+1:.5;return f+I}if(p(e)&&n.actionType==="armor"){let f=Fa(e,s,t.position,t.facing,r.position,a,m,u,1);const y=s<=3?2.5:s<=5?1.5:.5;return f+y}if(e.actionType==="armor"&&p(n)){const f=s<=3?2.5:s<=5?1.5:.5;let y=Fa(n,s,t.position,t.facing,r.position,a,m,u,2);return f+y}if(e.actionType==="movement"&&n.actionType==="movement"){if(s<=3)return 1;const f=zt(e,t,r,a,o),y=f.length>0?f[0].dist:s,I=s-y,v=n.movementValue??0;return(I+Math.min(v,y-1))*1.2+.5}if(p(e)&&p(n)){const f=Fa(e,s,t.position,t.facing,r.position,a,m,u,1),y=Fa(n,s,t.position,t.facing,r.position,a,m,u,2),I=f>1&&y>1;return f+y+(I?2:0)}if(e.actionType==="movement"&&n.actionType==="armor"){const f=zt(e,t,r,a,o),y=f.length>0?f[0].dist:s;return(s-y)*1+(y<=3?2:.5)}if(e.actionType==="armor"&&n.actionType==="movement"){const f=s<=3?2:.5,y=zt(n,t,r,a,o),I=y.length>0?y[0].dist:s;return f+(s-I)*1}if(e.actionType==="aim"&&!p(n))return .3+Ga(n,s);if(e.actionType==="mine"||n.actionType==="mine"){const f=s<=3?1.5:.5,y=e.actionType==="mine"?n:e;return f+Ga(y,s)}return Ga(e,s)+Ga(n,s)}function Fa(e,n,t,r,a,o,s,c,d){if(e.actionType==="ranged"){const u=e.rangeMin??1,p=e.rangeMax??6;return n>=u&&n<=p&&pa(o,t,a)&&Dn(r,t,a)?Hr(e,t,n,d,!1,!1,o)*(1-c*.5)*s*2.5:(e.damage??0)*.3}return e.actionType==="melee"?n===1?Hr(e,t,n,d,!1,!1,o)*(1-c*.5)*3:(e.damage??0)*.3:e.actionType==="charge"?n<=3?(e.damage??0)*2:(e.damage??0)*.3:0}function Ga(e,n){switch(e.actionType){case"movement":return(e.movementValue??0)*.4+(n>3?1:.2);case"armor":return n<=3?2:n<=5?1:.3;case"aim":return .3;case"mine":return n<=3?1.5:.5;default:return .1}}function Z0(e,n,t,r,a){const o=e.hand.filter(u=>!u.destroyed);if(o.length===0)return{seg1:null,seg2:null};if(o.length===1)return{seg1:o[0].instanceId,seg2:null};if(r==="easy"){const u=[...o].sort(()=>Math.random()-.5);return{seg1:u[0].instanceId,seg2:u[1].instanceId}}let s=-1/0,c=o[0].instanceId,d=o[1].instanceId;for(let u=0;u<o.length;u++){const p=o[u],m=t(p.defId);if(m)for(let h=0;h<o.length;h++){if(u===h)continue;const g=o[h],f=t(g.defId);if(!f)continue;const y=a?_d(m,f,e,n,a,t):m.actionType!=="movement"&&f.actionType!=="movement"?_d(m,f,e,n,{width:11,height:7,cells:[]},t):0;y>s&&(s=y,c=p.instanceId,d=g.instanceId)}}return{seg1:c,seg2:d}}function Y0(e,n,t,r,a){const o=mr(e,n),s=Xl(e,n),c=mr(e,s),d=kn(o,r,"movement"),u=t===1?o.plotSeg1:o.plotSeg2;if(!u)return null;const p=r(u.defId);if(!p||p.actionType!=="movement")return null;const m=(p.movementValue??0)+(d.wheel?2:0);if(m<=0)return null;const h=e.playerIds.filter(D=>D!==n&&!e.players[D].isDefeated).map(D=>e.players[D].position),g=li(e.map,o.position,m,h,d,o.facing);if(g.length===0)return null;function f(D){const w=Gl(e.map,o.position,o.facing,D,m,h,d);return w?{pos:D,path:w.path,finalFacing:w.finalFacing}:null}if(a==="easy"){if(Math.random()<.5)return null;const D=[...g].sort(()=>Math.random()-.5);for(const{pos:w}of D){const L=f(w);if(L)return L}return null}const I=(t===1?2:1)===1?o.plotSeg1:o.plotSeg2,v=I?r(I.defId):null;let x;if(!v)x=1;else if(v.actionType==="ranged"){const D=v.rangeMin??1,w=v.rangeMax??6;x=v.rangeOptimal??Math.round((D+w)/2)}else v.actionType==="melee"||v.actionType==="charge"?x=1:x=2;const b=ka(c),k=[];for(const D of b){const w=r(D.defId);w&&w.actionType==="ranged"&&k.push({min:w.rangeMin??1,max:w.rangeMax??6})}const T=e.mines.filter(D=>D.ownerId!==n),M=[];for(const{pos:D}of g){const w=we(D,c.position),L=-Math.abs(w-x)*3,G=T.some(N=>se(N.position,D))?-10:0,Y=e.map.cells[D.row][D.col];let K=0;Y.terrain==="forest"?K=1.5:Y.terrain==="water"&&(K=-1);let U=0;for(const N of k)w<N.min||w>N.max?U+=.5:U-=.5;M.push({pos:D,quickScore:L+G+K+U})}M.sort((D,w)=>w.quickScore-D.quickScore);const E=M.slice(0,5);let C=-1/0,$=null;for(const{pos:D,quickScore:w}of E){const L=f(D);if(!L)continue;const P=Dn(L.finalFacing,D,c.position)?1:-1,G=w+P;G>C&&(C=G,$=L)}if(!$)for(const{pos:D}of M.slice(5)){const w=f(D);if(w){$=w;break}}return $}function X0(e,n,t,r,a,o){const s=mr(e,n),c=Xl(e,n),d=mr(e,c),u=zn(s,t,r,a);if(!u)return!1;if(u.actionType==="charge"&&r==="melee"&&o==="hard"){const m=q.find(x=>x.id===s.unitId),h=q.find(x=>x.id===d.unitId);if(!m||!h)return!1;const g=Ro(s,d,t,e.map,m,h,a);if(!g.canAttack)return!1;const f=g.counterDamage,y=hd(s),I=hd(d);return!(g.damage-f<0&&y<=f+2||y<=5&&f>=3||I<=3&&f>=2)}if(u.actionType==="charge"&&r==="melee"){const m=q.find(f=>f.id===s.unitId),h=q.find(f=>f.id===d.unitId);return!m||!h?!1:Ro(s,d,t,e.map,m,h,a).canAttack}return Ul(s,d,t,r,e.map,a).canAttack}function Q0(e,n,t,r,a=!1,o){const s=ka(n);if(s.length===0)return null;if(r==="easy")return s[Math.floor(Math.random()*s.length)].instanceId;const c=o??n;let d=null,u=a?-1/0:1/0;for(const p of s){const m=t(p.defId),h=U0(p,m,n,c,t,a);(a?h>u:h<u)&&(u=h,d=p)}return(d==null?void 0:d.instanceId)??null}function q0(e,n,t,r,a){const o=mr(e,n),s=mr(e,Xl(e,n)),c=t===1?o.plotSeg1:o.plotSeg2;if(!c)return null;const d=r(c.defId);if(!d||d.actionType!=="mine")return null;const u=e.mines.map(f=>f.position),p=[];for(let f=-1;f<=1;f++)for(let y=-1;y<=1;y++){if(f===0&&y===0)continue;const I=o.position.row+f,v=o.position.col+y;if(I<0||I>=e.map.height||v<0||v>=e.map.width)continue;const x={row:I,col:v};se(x,o.position)||se(x,s.position)||u.some(b=>se(b,x))||p.push(x)}if(p.length===0)return null;if(a==="easy")return p.sort((f,y)=>we(f,s.position)-we(y,s.position)),p[0];let m=-1/0,h=null;const g=we(o.position,s.position);for(const f of p){let y=0;const I=we(f,s.position);y+=Math.max(0,5-I);const v=f.row,x=f.col;we(f,o.position)<g&&(y+=2),Dn(s.facing,s.position,f)&&we(s.position,f)<=3&&(y+=1.5);const k=v===0||v===e.map.height-1,T=x===0||x===e.map.width-1;(k||T)&&(y+=1),k&&T&&(y+=.5);const M=e.map.cells[v][x];(M.terrain==="forest"||M.terrain==="water")&&(y+=.5),y>m&&(m=y,h=f)}return h}const ui=1,ex=["slot_1","slot_2","slot_3","slot_4","slot_5"],nx=10,ga="em_saves_index",ha="em_replays_index",Ql=e=>`em_save_${e}`,Bo=e=>`em_replay_${e}`;function xr(e){try{const n=localStorage.getItem(e);return n?JSON.parse(n):[]}catch{return[]}}function pi(e,n){localStorage.setItem(e,JSON.stringify(n))}function Id(){return xr(ga).sort((n,t)=>t.timestamp-n.timestamp)}function ym(e,n,t,r){const a={slotId:e,timestamp:Date.now(),roundNumber:n.roundNumber,phase:n.phase,player1Unit:n.players.player1.unitId,player2Unit:n.players.player2.unitId,mapId:n.map.id,mapName:n.map.nameCn,isAutoSave:r},o={version:ui,metadata:a,gameState:n,aiConfig:t};try{localStorage.setItem(Ql(e),JSON.stringify(o))}catch{throw new Error("存储空间不足，无法保存存档")}const c=xr(ga).filter(d=>d.slotId!==e);return c.push(a),pi(ga,c),a}function tx(e){try{const n=localStorage.getItem(Ql(e));if(!n)return null;const t=JSON.parse(n);if(!ax(t))return null;const r=t;return r.gameState.playerIds||(r.gameState.playerIds=["player1","player2"],r.gameState.teams={player1:0,player2:1},r.gameState.teamCount=2,r.gameState.shuffleSeed=r.metadata.timestamp),r}catch{return null}}function rx(e){localStorage.removeItem(Ql(e));const n=xr(ga);pi(ga,n.filter(t=>t.slotId!==e))}function ax(e){if(!e||typeof e!="object")return!1;const n=e;if(n.version!==ui||!n.gameState||typeof n.gameState!="object")return!1;const t=n.gameState;if(!t.phase||!t.players||!t.map)return!1;const r=t.players;return!(!r.player1||!r.player2||!n.metadata||typeof n.metadata!="object"||!n.aiConfig||typeof n.aiConfig!="object")}function kd(){return xr(ha).sort((n,t)=>t.timestamp-n.timestamp)}function ox(e,n,t){const r=`${Date.now()}`,a={replayId:r,timestamp:Date.now(),totalRounds:e.roundNumber,totalActions:n.length,player1Unit:e.players.player1.unitId,player2Unit:e.players.player2.unitId,mapId:e.map.id,mapName:e.map.nameCn,winner:t},o={version:ui,metadata:a,initialState:e,actions:n};try{localStorage.setItem(Bo(r),JSON.stringify(o))}catch{throw new Error("存储空间不足，无法保存录像")}const s=xr(ha);for(s.push(a),s.sort((c,d)=>c.timestamp-d.timestamp);s.length>nx;){const c=s.shift();localStorage.removeItem(Bo(c.replayId))}return pi(ha,s),a}function jd(e){try{const n=localStorage.getItem(Bo(e));if(!n)return null;const t=JSON.parse(n);if(!sx(t))return null;const r=t;return r.initialState.playerIds||(r.initialState.playerIds=["player1","player2"],r.initialState.teams={player1:0,player2:1},r.initialState.teamCount=2,r.initialState.shuffleSeed=r.metadata.timestamp),r}catch{return null}}function ix(e){localStorage.removeItem(Bo(e));const n=xr(ha);pi(ha,n.filter(t=>t.replayId!==e))}function sx(e){if(!e||typeof e!="object")return!1;const n=e;return!(n.version!==ui||!n.initialState||typeof n.initialState!="object"||!Array.isArray(n.actions)||!n.metadata||typeof n.metadata!="object")}function lx(e,n){let t=e.initialState,r=0;for(;r<e.actions.length&&!(t.roundNumber>=n);r++)t=mn(t,e.actions[r]);return{state:t,actionIndex:r}}const ar={N:"↑北",S:"↓南",E:"→东",W:"←西"},Ua={setup:"配置",pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"行动阶段·段落1",action_seg2:"行动阶段·段落2",cleanup:"清理阶段",game_over:"对局结束"},cx={movement:"移动时序",ranged:"射击时序",melee:"近战时序",special:"特殊时序"},dx={movement:"移动",ranged:"射击",melee:"近战",charge:"突击",aim:"瞄准",armor:"装甲",mine:"机雷",special:"特殊",auxiliary:"辅助"};function Ln(e){var n;return((n=q.find(t=>t.id===e))==null?void 0:n.nameCn)??e}function Rs(e){const n=ne(e);if(!n)return e;const t=dx[n.actionType]??n.actionType;let r="";n.movementValue!=null&&(r=` 值${n.movementValue}`),n.damage!=null&&(r=` 伤害${n.damage}`,n.rangeMin!=null&&n.rangeMax!=null&&(r+=` 射程${n.rangeMin}-${n.rangeMax}`),n.rangeOptimal!=null&&(r+=` 最佳${n.rangeOptimal}`));const a=n.hasBombIcon?" [💣]":"",o=n.isKaiVariant?" [◆改]":"";return`${n.nameCn}(${t}${r}${a}${o})`}function Os(e){const n=Rs(e.defId);return e.destroyed?`${n}[已破坏]`:n}function Ha(e){return e.length===0?"(无)":e.map(n=>Os(n)).join(", ")}function Wa(e,n){const t=[],r=Ln(e.unitId),a=ar[e.facing]??e.facing,o=e.deck.filter(d=>!d.destroyed).length,s=e.hand.filter(d=>!d.destroyed).length,c=e.auxiliary.filter(d=>!d.destroyed).length;if(t.push(`  ${n} [${r}]  位置(${e.position.row},${e.position.col}) 朝向${a}  败北=${e.isDefeated}`),t.push(`    牌库=${o}  手牌=${s}  辅助=${c}/${e.auxiliary.length}  弃牌=${e.discard.length}  破坏=${e.destroyedCards.length}  总存活=${o+s+c+e.discard.length+(e.plotSeg1&&!e.plotSeg1.destroyed?1:0)+(e.plotSeg2&&!e.plotSeg2.destroyed?1:0)}`),t.push(`    手牌: ${Ha(e.hand)}`),e.auxiliary.length>0&&t.push(`    辅助: ${Ha(e.auxiliary)}`),e.plotSeg1||e.plotSeg2){const d=e.plotSeg1?Os(e.plotSeg1):"—",u=e.plotSeg2?Os(e.plotSeg2):"—";t.push(`    布局: 段1=[${d}]  段2=[${u}]`)}return e.discard.length>0&&t.push(`    弃牌: ${Ha(e.discard)}`),e.destroyedCards.length>0&&t.push(`    破坏: ${Ha(e.destroyedCards)}`),t.join(`
`)}function ux(e,n){const t=a=>{const o=n.players[a],s=n.playerIds.indexOf(a);return`${s>=0?`P${s+1}`:a}[${o?Ln(o.unitId):a}]`},r=(a,o)=>{const s=n.players[o];return s?[...s.deck,...s.hand,...s.auxiliary,...s.discard,...s.destroyedCards,...s.plotSeg1?[s.plotSeg1]:[],...s.plotSeg2?[s.plotSeg2]:[]].find(d=>d.instanceId===a):void 0};switch(e.type){case"SELECT_UNIT":{const a=n.playerIds.indexOf(e.playerId);return`${a>=0?`P${a+1}`:e.playerId} 选择机体 ${Ln(e.unitId)}`}case"SELECT_MAP":return`选择地图 ${e.mapId}`;case"CONFIRM_SETUP":return"确认设置，开始对局";case"SET_SPAWN_POSITION":return`${t(e.playerId)} 设置出生点 (${e.position.row},${e.position.col})`;case"SET_SPAWN_FACING":return`${t(e.playerId)} 设置初始朝向 ${ar[e.facing]??e.facing}`;case"START_PLOTTING":return"战前准备结束，进入布局阶段";case"DRAW_CARDS":return`${t(e.playerId)} 抽牌 ${e.count} 张`;case"PLOT_CARD":{const a=r(e.instanceId,e.playerId);return`${t(e.playerId)} 布局段落${e.seg}: ${a?Rs(a.defId):e.instanceId}`}case"CONFIRM_PLOT":return`${t(e.playerId)} 确认布局完成`;case"ADVANCE_PLOT_STEP":return"[系统] 布局步骤推进";case"MOVE_UNIT":{const a=n.players[e.playerId],o=a?`(${a.position.row},${a.position.col})`:"(?,?)",s=`(${e.to.row},${e.to.col})`,c=e.finalFacing?` 朝向→${ar[e.finalFacing]??e.finalFacing}`:"",d=e.path?` 路径[${e.path.map(u=>`(${u.row},${u.col})`).join("→")}]`:"";return`${t(e.playerId)} 移动 ${o}→${s}${c}${d}`}case"ADJUST_FACING":return`${t(e.playerId)} 调整朝向→${ar[e.facing]??e.facing}`;case"RESOLVE_RANGED":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动射击`;case"RESOLVE_MELEE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动近战`;case"RESOLVE_CHARGE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动突击`;case"PLACE_MINE":return`${t(e.playerId)} 在 (${e.to.row},${e.to.col}) 部署机雷 (伤害${e.damage})`;case"SELECT_DAMAGE_CARD":{const a=r(e.instanceId,e.playerId);return`${t(e.playerId)} 选择摧毁: ${a?Rs(a.defId):e.instanceId}`}case"CONFIRM_DAMAGE_SELECTION":return`${t(e.playerId)} 确认伤害结算`;case"SKIP_ACTION":return"[系统] 跳过行动";case"ADVANCE_TIMING":return"[系统] 推进时序";case"ADVANCE_PHASE":return"[系统] 推进阶段";case"MELEE_SENSOR_MOVE":return`${t(e.playerId)} 近战传感器移动至 (${e.to.row},${e.to.col})`;case"RESET_GAME":return"[系统] 重置游戏";case"LOAD_GAME":return"[系统] 加载存档";case"ADD_LOG":return`[系统] ${e.message}`;default:return`[未知] ${e.type}`}}function px(e,n){const t=[],r="═".repeat(72),a="─".repeat(72);t.push(r),t.push("EMBRYO MACHINE — 对局分析日志"),t.push(r),t.push(`生成时间: ${new Date().toISOString()}`),t.push(`地图: ${e.map.nameCn} (${e.map.id}) ${e.map.width}×${e.map.height}`),t.push(`P1: ${Ln(e.players.player1.unitId)} (${e.players.player1.unitId})`),t.push(`P2: ${Ln(e.players.player2.unitId)} (${e.players.player2.unitId})`),t.push(`总操作数: ${n.length}`),t.push(""),t.push("[地图地形]");const o={plain:"平",forest:"森",rubble:"瓦",water:"水",highland:"高",sand:"砂"};let s="     ";for(let I=0;I<e.map.width;I++)s+=`  ${String(I).padStart(2)} `;t.push(s);for(let I=0;I<e.map.height;I++){let v=`  ${String(I).padStart(2)} `;for(let x=0;x<e.map.width;x++){const b=e.map.cells[I][x],k=o[b.terrain]??"?",T=b.elevation>0?String(b.elevation):" ";v+=` ${k}${T} `}t.push(v)}t.push("  地形: 平=平地 森=森林 瓦=瓦砾 水=水域 高=高地 砂=砂地  数字=海拔"),t.push(""),t.push("[初始状态]"),t.push(`  阶段: ${Ua[e.phase]??e.phase}  回合: ${e.roundNumber}`),t.push(Wa(e.players.player1,"P1")),t.push(Wa(e.players.player2,"P2")),e.mines.length>0&&t.push(`  机雷: ${e.mines.map(I=>`(${I.position.row},${I.position.col}) 所有者=${I.ownerId} 伤害=${I.damage}`).join("; ")}`),t.push("");let c=e,d=c.roundNumber,u=c.phase,p=c.currentTiming,m=0,h=c.log.length;for(let I=0;I<n.length;I++){const v=n[I],x=c;c=mn(c,v),m++,c.roundNumber!==d&&(t.push(""),t.push(r),t.push(`══ 第 ${c.roundNumber} 回合 ══`),t.push(r),d=c.roundNumber),c.phase!==u&&(t.push(""),t.push(a),t.push(`── ${Ua[c.phase]??c.phase} ──`),t.push(a),u=c.phase,p=c.currentTiming),c.currentTiming!==p&&c.currentTiming&&(t.push(""),t.push(`  ◆ ${cx[c.currentTiming]??c.currentTiming}  先攻顺序: [${c.turnOrder.join(", ")}]`),p=c.currentTiming);const b=ux(v,x);t.push(`  #${String(m).padStart(4,"0")}  ${b}`);const k=c.log.slice(h);for(const C of k)t.push(`         │ ${C}`);if(h=c.log.length,c.pendingDamage&&!x.pendingDamage){const C=c.pendingDamage;t.push(`         ├─ [交互伤害] 目标=${C.targetId} 剩余=${C.remaining} 来源=${C.source}${C.attackerId?` 攻方=${C.attackerId}(瞄准指定)`:""}`)}const T=c.phase!==x.phase,M=c.roundNumber!==x.roundNumber,E=c.phase==="game_over"&&x.phase!=="game_over";(T||M||E)&&(t.push(""),t.push(`  [状态快照 #${m} | ${Ua[c.phase]??c.phase}]`),t.push(Wa(c.players.player1,"P1")),t.push(Wa(c.players.player2,"P2")),c.mines.length>0&&t.push(`  机雷: ${c.mines.map(C=>`(${C.position.row},${C.position.col}) 所有者=${C.ownerId} 伤害=${C.damage}`).join("; ")}`))}t.push(""),t.push(r),t.push("══ 对局总结 ══"),t.push(r);const g=c,f=wd(g.players.player1),y=wd(g.players.player2);g.phase==="game_over"?g.players.player1.isDefeated&&g.players.player2.isDefeated?t.push("结果: 平局（双方同时击破）"):g.players.player1.isDefeated?t.push(`结果: P2[${Ln(g.players.player2.unitId)}] 获胜`):g.players.player2.isDefeated&&t.push(`结果: P1[${Ln(g.players.player1.unitId)}] 获胜`):t.push(`结果: 对局未结束 (当前阶段: ${Ua[g.phase]??g.phase})`),t.push(`最终回合: ${g.roundNumber}`),t.push(`总操作数: ${n.length}`),t.push(""),t.push(`P1[${Ln(g.players.player1.unitId)}] 最终状态:`),t.push(`  存活卡牌: ${f}  破坏: ${g.players.player1.destroyedCards.length}  败北: ${g.players.player1.isDefeated}`),t.push(`  位置: (${g.players.player1.position.row},${g.players.player1.position.col}) 朝向: ${ar[g.players.player1.facing]}`),t.push(""),t.push(`P2[${Ln(g.players.player2.unitId)}] 最终状态:`),t.push(`  存活卡牌: ${y}  破坏: ${g.players.player2.destroyedCards.length}  败北: ${g.players.player2.isDefeated}`),t.push(`  位置: (${g.players.player2.position.row},${g.players.player2.position.col}) 朝向: ${ar[g.players.player2.facing]}`),t.push(""),t.push(a),t.push("[完整引擎日志]"),t.push(a);for(let I=0;I<g.log.length;I++)t.push(`  ${String(I+1).padStart(4,"0")}  ${g.log[I]}`);return t.push(""),t.push(r),t.push("日志结束"),t.push(r),t.join(`
`)}function wd(e){const n=t=>t.filter(r=>!r.destroyed).length;return n(e.deck)+n(e.hand)+n(e.auxiliary)+e.discard.length+(e.plotSeg1&&!e.plotSeg1.destroyed?1:0)+(e.plotSeg2&&!e.plotSeg2.destroyed?1:0)}const ql=j.createContext(null);function bm({children:e}){const[n,t]=j.useReducer(mn,void 0,xm),[r,a]=j.useState(G0),[o,s]=j.useState(!0),[c,d]=j.useState(!1),u=j.useRef(n);u.current=n;const p=j.useRef([]),m=j.useRef(null),h=j.useRef(-1),g=j.useCallback(v=>{const x=u.current;if(v.type==="RESET_GAME"||v.type==="LOAD_GAME"){p.current=[],m.current=null,h.current=-1,t(v);return}if(v.type==="CONFIRM_SETUP"){const k=mn(x,v);p.current=[],m.current=k,t(v);return}p.current.push(v);const b=mn(x,v);if(t(v),o&&x.phase!=="draw"&&b.phase==="draw"&&b.roundNumber!==h.current){h.current=b.roundNumber;try{ym("auto",b,r,!0)}catch{}}},[r,o]),f=L0(g,u),y=j.useCallback(v=>ne(v),[]),I=j.useCallback(()=>m.current?{initialState:m.current,actions:[...p.current]}:null,[]);return i.jsx(ql.Provider,{value:{state:n,dispatch:f,rawDispatch:g,getCard:y,aiConfig:r,setAIConfig:a,getReplayData:I,autoSaveEnabled:o,setAutoSaveEnabled:s,exposureMode:c,setExposureMode:d},children:e})}function Ce(){const e=j.useContext(ql);if(!e)throw new Error("useGame must be used inside <GameProvider>");return e}function Sa(){return Ce().state}const mx={gameTitle:"Embryo Machine",setupSelectMap:"选择地图",statMovement:"移动力",statEvasion:"回避值",statAssault:"突击",statAssaultDef:"被突击",statInitiative:"先制值"},xt=mx,Oi=["var(--color-accent)","#ff00c8","#00cc88","#ff8800","#6688ff","#cc44ff","#44dddd","#ff4466"],fx=[2,3,4,6,8];function gx(e){const n=[];for(let t=2;t<=e;t++)e%t===0&&n.push(t);return n}function hx({onNext:e,autoFill:n=!1}){const{state:t,dispatch:r,rawDispatch:a,setAIConfig:o,setExposureMode:s}=Ce(),c=j.useMemo(()=>n0(),[]),[d,u]=j.useState(c[0].id),[p,m]=j.useState(2),[h,g]=j.useState(2),[f,y]=j.useState({}),[I,v]=j.useState({}),[x,b]=j.useState({}),k=j.useMemo(()=>rr.slice(0,p),[p]),T=j.useMemo(()=>gx(p),[p]);j.useEffect(()=>{a({type:"RESET_GAME",playerCount:p,teamCount:h}),b({});const N=Math.ceil(p/h),V=c.filter(B=>{if(B.maxPlayers<p||B.maxTeams<h)return!1;for(let z=0;z<h;z++){const R=B.startZones[z];if(!R||R.length<N)return!1}return!0});V.length>0&&(u(V[0].id),r({type:"SELECT_MAP",mapId:V[0].id}))},[p,h]),j.useEffect(()=>{T.includes(h)||g(T[0])},[T,h]);function M(N,V){r({type:"SELECT_UNIT",playerId:N,unitId:V}),b(B=>({...B,[N]:!0}))}function E(N){N!==d&&(u(N),r({type:"SELECT_MAP",mapId:N}))}function C(N,V){y(B=>({...B,[N]:V}))}function $(N,V){v(B=>({...B,[N]:V}))}const D=k.map(N=>{var V;return((V=t.players[N])==null?void 0:V.unitId)??""}),w=D.every(N=>N!==""),L=new Set(D.filter(N=>N!=="")).size===D.filter(N=>N!=="").length,P=k.filter(N=>x[N]).map(N=>{var V;return((V=t.players[N])==null?void 0:V.unitId)??""}).filter(N=>N!==""),G=new Set(P).size===P.length,Y=n?G:w&&L,K={};for(let N=0;N<k.length;N++){const V=N%h;K[V]||(K[V]=[]),K[V].push(k[N])}const U=j.useMemo(()=>c.filter(N=>{if(N.maxPlayers<p||N.maxTeams<h)return!1;const V=Math.ceil(p/h);for(let B=0;B<h;B++){const z=N.startZones[B];if(!z||z.length<V)return!1}return!0}),[p,h]);return j.useEffect(()=>{U.length>0&&!U.find(N=>N.id===d)&&E(U[0].id)},[U]),i.jsxs("div",{className:"setup-screen",children:[i.jsx("h1",{className:"setup-title",children:xt.gameTitle}),i.jsx("p",{className:"setup-subtitle",children:"选择地图与机体"}),i.jsxs("section",{className:"setup-section",children:[i.jsx("h2",{children:"游戏配置"}),i.jsxs("div",{className:"config-row",children:[i.jsxs("label",{className:"config-label",children:["玩家人数",i.jsx("select",{className:"config-select",value:p,onChange:N=>m(Number(N.target.value)),children:fx.map(N=>i.jsxs("option",{value:N,children:[N,"人"]},N))})]}),i.jsxs("label",{className:"config-label",children:["队伍数量",i.jsx("select",{className:"config-select",value:h,onChange:N=>g(Number(N.target.value)),children:T.map(N=>i.jsxs("option",{value:N,children:[N,"队 (",p/N,"人/队)"]},N))})]})]})]}),i.jsxs("section",{className:"setup-section",children:[i.jsx("h2",{children:xt.setupSelectMap}),i.jsx("div",{className:"map-list",children:U.map(N=>i.jsxs("button",{className:`map-btn ${d===N.id?"map-btn--active":""}`,onClick:()=>E(N.id),children:[N.nameCn," ",N.id.startsWith("custom_")?"✦":"",i.jsxs("span",{className:"map-btn__size",children:[N.height,"×",N.width," · ≤",N.maxPlayers,"人"]})]},N.id))})]}),i.jsx("div",{className:"setup-teams",children:Object.entries(K).map(([N,V])=>i.jsxs("div",{className:"setup-team",children:[i.jsxs("h3",{className:"team-header",style:{color:Oi[Number(N)*(p/h)]},children:["队伍 ",Number(N)+1]}),i.jsx("div",{className:"setup-players",children:V.map(B=>{var ee;const z=rr.indexOf(B),R=Oi[z%Oi.length],W=((ee=t.players[B])==null?void 0:ee.unitId)??"",Q=D.filter((te,Z)=>Z!==k.indexOf(B)&&te);return i.jsxs("div",{className:"setup-player-col",children:[i.jsx(xx,{label:`P${z+1}`,selectedUnit:W,blockedUnits:Q,accentColor:R,onSelect:te=>M(B,te)}),i.jsxs("div",{className:"ai-control",children:[i.jsxs("label",{className:"ai-control__label",children:[i.jsx("input",{type:"checkbox",checked:f[B]??!1,onChange:te=>C(B,te.target.checked)}),"AI控制"]}),f[B]&&i.jsxs("select",{className:"ai-control__difficulty",value:I[B]??"hard",onChange:te=>$(B,te.target.value),children:[i.jsx("option",{value:"easy",children:"简单"}),i.jsx("option",{value:"hard",children:"困难"})]})]})]},B)})})]},N))}),i.jsx("button",{className:"start-btn",onClick:()=>{const N=new Set(k.filter(Z=>x[Z]).map(Z=>{var ce;return((ce=t.players[Z])==null?void 0:ce.unitId)??""}).filter(Z=>Z!=="")),B=[...q.map(Z=>Z.id).filter(Z=>!N.has(Z))];for(let Z=B.length-1;Z>0;Z--){const ce=Math.floor(Math.random()*(Z+1));[B[Z],B[ce]]=[B[ce],B[Z]]}const z={...f},R={...I};let W=0;for(const Z of k)n&&!x[Z]&&W<B.length&&(r({type:"SELECT_UNIT",playerId:Z,unitId:B[W]}),W++,z[Z]=!0,R[Z]="hard");const Q={},ee={};for(const Z of k)Q[Z]=z[Z]??!1,ee[Z]=R[Z]??"hard";o({player1:Q.player1??!1,player2:Q.player2??!1,player1Difficulty:ee.player1??"hard",player2Difficulty:ee.player2??"hard",playerAI:Q,playerDifficulty:ee}),k.every(Z=>Q[Z])&&s(!0),e()},disabled:!Y,title:Y?"":"请为所有玩家分别选择不同的机体",children:"下一步 →"}),!Y&&i.jsx("p",{className:"setup-hint",children:n?"手动选择的机体之间不可重复":w?"每位玩家须选择不同的机体":"请为所有玩家各选择一台机体"}),i.jsx("style",{children:bx})]})}function xx({label:e,selectedUnit:n,blockedUnits:t,accentColor:r,onSelect:a}){return i.jsxs("div",{className:"unit-picker",children:[i.jsx("h2",{className:"unit-picker__title",style:{color:r},children:e}),i.jsx("div",{className:"unit-grid",children:q.map(o=>{const s=t.includes(o.id);return i.jsx(vx,{unit:o,isSelected:o.id===n,isBlocked:s,accentColor:r,onSelect:()=>!s&&a(o.id)},o.id)})}),n&&i.jsx(yx,{unit:q.find(o=>o.id===n),accentColor:r})]})}function vx({unit:e,isSelected:n,isBlocked:t,accentColor:r,onSelect:a}){return i.jsxs("button",{className:`unit-card ${n?"unit-card--selected":""} ${t?"unit-card--blocked":""}`,onClick:a,disabled:t,title:t?"该机体已被其他玩家选择":e.nameCn,style:n?{borderColor:r,boxShadow:`0 0 8px ${r}55`}:{},children:[i.jsx("img",{src:`/assets/tokens/${e.tokenId}`,alt:e.nameCn,className:"unit-card__token",onError:o=>{o.target.style.opacity="0.3"}}),i.jsx("span",{className:"unit-card__name",children:e.nameCn}),i.jsxs("span",{className:"unit-card__init",children:["先制 ",e.initiative]})]})}function yx({unit:e,accentColor:n}){return i.jsxs("div",{className:"unit-stats",children:[i.jsxs("div",{className:"unit-stats__name",children:[e.nameCn," ",i.jsxs("small",{children:["(",e.nameJa,")"]})]}),i.jsx("div",{className:"unit-stats__type",children:e.type}),i.jsxs("div",{className:"unit-stats__grid",children:[i.jsx(Tr,{label:xt.statMovement,value:e.movement,color:n}),i.jsx(Tr,{label:xt.statEvasion,value:e.evasion,color:n}),i.jsx(Tr,{label:xt.statAssault,value:e.assault,color:n}),i.jsx(Tr,{label:xt.statAssaultDef,value:e.assaultDef,color:n}),i.jsx(Tr,{label:xt.statInitiative,value:e.initiative,color:n})]})]})}function Tr({label:e,value:n,color:t}){return i.jsxs("div",{className:"stat",children:[i.jsx("span",{className:"stat__label",children:e}),i.jsx("span",{className:"stat__value",style:{color:t},children:n})]})}const bx=`
.setup-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 32px 16px 48px;
  min-height: 100%;
  background: var(--color-bg);
  overflow-y: auto;
}

.setup-title {
  font-size: 2.5rem;
  letter-spacing: 0.05em;
  color: var(--color-accent);
  text-shadow: var(--glow-accent);
  margin: 0;
}

.setup-subtitle {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin: -16px 0 0;
}

.setup-section h2 {
  text-align: center;
  margin-bottom: 12px;
  color: var(--color-text-muted);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.config-row {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
}

.config-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: var(--color-text);
}

.config-select {
  background: var(--color-bg-panel);
  border: 1px solid var(--color-accent);
  color: var(--color-accent);
  font-size: 0.85rem;
  padding: 4px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.map-list {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}

.map-btn {
  padding: 8px 20px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-panel);
  color: var(--color-text);
  border-radius: 4px;
  transition: border-color 0.2s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}
.map-btn:hover { border-color: var(--color-accent); }
.map-btn--active {
  border-color: var(--color-accent);
  background: var(--color-bg-card);
}
.map-btn__size {
  font-size: 0.65rem;
  color: var(--color-text-muted);
}

.setup-teams {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 1200px;
}

.setup-team {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.team-header {
  font-size: 1rem;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.setup-players {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
}

.setup-player-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.ai-control {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 6px;
}

.ai-control__label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  color: var(--color-text-muted);
  cursor: pointer;
  user-select: none;
}

.ai-control__label input[type="checkbox"] {
  width: 14px;
  height: 14px;
  cursor: pointer;
  accent-color: var(--color-accent);
}

.ai-control__difficulty {
  background: var(--color-bg);
  border: 1px solid var(--color-accent);
  color: var(--color-accent);
  font-size: 0.8rem;
  padding: 2px 8px;
  border-radius: 4px;
  cursor: pointer;
}

.unit-picker {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 240px;
  max-width: 280px;
}
.unit-picker__title {
  text-align: center;
  font-size: 1rem;
}

.unit-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.unit-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 4px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-panel);
  color: var(--color-text);
  border-radius: 6px;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s, box-shadow 0.15s;
  gap: 4px;
}
.unit-card:hover:not(:disabled) { border-color: var(--color-accent); background: var(--color-bg-card); }
.unit-card--selected { background: var(--color-bg-card); }
.unit-card--blocked { opacity: 0.35; cursor: not-allowed; }

.unit-card__token {
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-radius: 50%;
}
.unit-card__name { font-size: 0.75rem; }
.unit-card__init { font-size: 0.65rem; color: var(--color-text-muted); }

.unit-stats {
  padding: 12px;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  background: var(--color-bg-panel);
}
.unit-stats__name { font-weight: bold; margin-bottom: 4px; }
.unit-stats__type { font-size: 0.75rem; color: var(--color-text-muted); margin-bottom: 8px; }
.unit-stats__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 16px; }
.stat { display: flex; justify-content: space-between; font-size: 0.85rem; }
.stat__label { color: var(--color-text-muted); }
.stat__value { font-weight: bold; }

.start-btn {
  padding: 14px 48px;
  background: var(--color-accent);
  color: #000;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 0.05em;
  transition: opacity 0.2s;
  cursor: pointer;
}
.start-btn:hover:not(:disabled) { opacity: 0.85; }
.start-btn:disabled { opacity: 0.35; cursor: not-allowed; }

.setup-hint {
  font-size: 0.78rem;
  color: var(--color-text-muted);
  margin: -16px 0 0;
}
`,An=18;function un({id:e,title:n,initialPos:t,width:r=300,height:a,minHeight:o=80,children:s,zIndex:c=10,defaultMinimized:d=!1,onFocus:u,siblingRects:p=[]}){const[m,h]=j.useState(t),[g,f]=j.useState(d),y=j.useRef(null),I=j.useRef(!1);j.useEffect(()=>{I.current||(I.current=!0,h(t))},[]);const v=j.useCallback(x=>{if(x.button!==0)return;x.preventDefault(),u==null||u(e);const b=x.clientX-m.x,k=x.clientY-m.y,T=E=>{var Y;let C=E.clientX-b,$=E.clientY-k;const D=window.innerWidth,w=window.innerHeight,L=(Y=y.current)==null?void 0:Y.getBoundingClientRect(),P=(L==null?void 0:L.width)??r,G=(L==null?void 0:L.height)??40;C<An&&(C=0),$<An&&($=0),C+P>D-An&&(C=D-P),$+G>w-An&&($=w-G);for(const K of p)Math.abs(C+P-K.left)<An&&(C=K.left-P),Math.abs(C-K.right)<An&&(C=K.right),Math.abs($+G-K.top)<An&&($=K.top-G),Math.abs($-K.bottom)<An&&($=K.bottom),Math.abs($-K.top)<An&&($=K.top);h({x:Math.max(0,C),y:Math.max(0,$)})},M=()=>{document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",M)};document.addEventListener("mousemove",T),document.addEventListener("mouseup",M)},[e,m,u,p,r]);return i.jsxs("div",{ref:y,className:`dp ${g?"dp--min":""}`,style:{left:m.x,top:m.y,width:r,height:g?void 0:a,minHeight:g?0:o,zIndex:c},onMouseDown:()=>u==null?void 0:u(e),children:[i.jsxs("div",{className:"dp__bar",onMouseDown:v,children:[i.jsx("span",{className:"dp__title",children:n}),i.jsx("button",{className:"dp__min-btn",onMouseDown:x=>x.stopPropagation(),onClick:()=>f(x=>!x),title:g?"展开":"最小化",children:g?"▢":"▬"})]}),!g&&i.jsx("div",{className:"dp__body",children:s}),i.jsx("style",{children:_x})]})}const _x=`
.dp {
  position: absolute;
  border: 1px solid rgba(0, 240, 255, 0.25);
  border-radius: 8px;
  background: rgba(12, 17, 32, 0.96);
  box-shadow: 0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,240,255,0.08);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  backdrop-filter: blur(8px);
  transition: box-shadow 0.15s;
}
.dp:hover {
  box-shadow: 0 8px 32px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,240,255,0.18);
}
.dp__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  background: rgba(0, 240, 255, 0.06);
  border-bottom: 1px solid rgba(0, 240, 255, 0.15);
  cursor: move;
  user-select: none;
  flex-shrink: 0;
  min-height: 28px;
}
.dp__title {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(0, 240, 255, 0.7);
  pointer-events: none;
}
.dp__min-btn {
  background: none;
  border: 1px solid transparent;
  color: rgba(255,255,255,0.35);
  cursor: pointer;
  font-size: 0.75rem;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  transition: color 0.15s, border-color 0.15s;
  flex-shrink: 0;
}
.dp__min-btn:hover {
  color: var(--color-accent);
  border-color: rgba(0,240,255,0.3);
}
.dp__body {
  flex: 1;
  overflow: auto;
  min-height: 0;
}
.dp--min .dp__bar {
  border-bottom: none;
}
`,Yt=48,Za=["#00f0ff","#ff00c8","#00cc88","#ff8800","#6688ff","#cc44ff","#44dddd","#ff4466"],Ix=[{facing:"N",label:"↑N",title:"朝北"},{facing:"S",label:"↓S",title:"朝南"},{facing:"E",label:"→E",title:"朝东"},{facing:"W",label:"←W",title:"朝西"}],Sd=.25,kx=2,Cd=.1;function jx({onBack:e}){const{state:n,dispatch:t}=Ce(),r=En.find(z=>z.id===n.map.id)??n.map,a=n.playerIds,o=r.width,s=r.height,c=j.useRef(null),[d,u]=j.useState({x:0,y:0,scale:1}),p=j.useRef(null),m=j.useRef(!1);j.useEffect(()=>{const z=c.current;if(!z)return;const R=z.clientWidth,W=z.clientHeight,Q=o*Yt,ee=s*Yt;if(!R||!W)return;const te=Math.min(R/Q,W/ee),Z=Math.max(Sd,Math.min(1.2,te)),ce=(R-Q*Z)/2,ae=(W-ee*Z)/2;u({x:ce,y:ae,scale:Z})},[o,s]),j.useEffect(()=>{const z=c.current;if(!z)return;const R=W=>{W.preventDefault();const Q=W.deltaY<0?Cd:-Cd;u(ee=>({...ee,scale:Math.min(kx,Math.max(Sd,ee.scale+Q))}))};return z.addEventListener("wheel",R,{passive:!1}),()=>z.removeEventListener("wheel",R)},[]);const h=j.useCallback(z=>{z.button===0&&(p.current={startX:z.clientX,startY:z.clientY,origX:d.x,origY:d.y},m.current=!1)},[d.x,d.y]),g=j.useCallback(z=>{if(!p.current)return;const R=z.clientX-p.current.startX,W=z.clientY-p.current.startY;!m.current&&Math.sqrt(R*R+W*W)>5&&(m.current=!0),m.current&&u(Q=>({...Q,x:p.current.origX+R,y:p.current.origY+W}))},[]),f=j.useCallback(()=>{p.current=null,m.current=!1},[]),y=j.useMemo(()=>Object.keys(r.startZones).map(Number).sort((z,R)=>z-R),[r]),[I,v]=j.useState(()=>{const z={};for(let R=0;R<n.teamCount;R++)z[R]=R;return z});j.useEffect(()=>{const z={};for(let R=0;R<n.teamCount;R++)z[R]=R;v(z)},[r.id,n.teamCount]);function x(z,R){v(W=>{const Q=Object.entries(W).find(([,te])=>te===R),ee={...W,[z]:R};return Q&&(ee[Number(Q[0])]=W[z]),ee})}const b=j.useMemo(()=>{const z=new Map;for(let R=0;R<n.teamCount;R++){const W=I[R]??R,Q=r.startZones[W];if(Q)for(const ee of Q){const te=`${ee.row},${ee.col}`,Z=z.get(te)??[];Z.push(R),z.set(te,Z)}}return z},[r,n.teamCount,I]),k=j.useMemo(()=>{const z={};for(const R of a){const W=n.teams[R];z[W]||(z[W]=[]),z[W].push(R)}return z},[a,n.teams]),[T,M]=j.useState(a[0]),[E,C]=j.useState(""),$=j.useMemo(()=>{for(const z of a){const R=n.players[z];if(!R)return!1;const W=n.teams[z],Q=I[W]??W,ee=r.startZones[Q];if(!ee||!ee.some(Z=>Z.row===R.position.row&&Z.col===R.position.col))return!1}return!0},[a,n.players,n.teams,I,r]);function D(z,R){t({type:"SET_SPAWN_POSITION",playerId:z,position:R})}function w(z,R){t({type:"SET_SPAWN_FACING",playerId:z,facing:R})}function L(){$&&t({type:"CONFIRM_SETUP"})}function P(z){const R=a.indexOf(z);return Za[R%Za.length]}function G(z){var W;const R=(W=k[z])==null?void 0:W[0];return R?P(R):Za[z%Za.length]}const Y=j.useMemo(()=>{const z=new Map;for(const R of a){const W=n.players[R];if(!W)continue;const Q=q.find(Z=>Z.id===W.unitId);if(!Q)continue;const ee=`${W.position.row},${W.position.col}`,te=z.get(ee)??[];te.push({pid:R,color:P(R),tokenId:Q.tokenId,name:Q.nameCn}),z.set(ee,te)}return z},[a,n.players]),{x:K,y:U,scale:N}=d,V=220,B=j.useMemo(()=>{const z={},te=Math.floor((window.innerHeight-56-60)/192);return a.forEach((Z,ce)=>{const ae=Math.floor(ce/te),Ie=ce%te;z[Z]={x:window.innerWidth-(V+16)*(ae+1),y:56+Ie*192}}),z},[a]);return i.jsxs("div",{className:"ssm__screen",children:[i.jsxs("div",{className:"ssm__topbar",children:[i.jsx("button",{className:"ssm__back-btn",onClick:e,children:"← 返回"}),i.jsx("span",{className:"ssm__title",children:"选择出击位置"}),i.jsxs("span",{className:"ssm__map-name",children:[r.nameCn," (",s,"×",o,")"]}),i.jsx("span",{style:{flex:1}}),i.jsx("button",{className:`ssm__start-btn${$?"":" ssm__start-btn--disabled"}`,onClick:L,disabled:!$,title:$?"开始战斗":"所有玩家必须先选择出击位置",children:"战斗开始 ▶"})]}),i.jsx("div",{className:"ssm__viewport",ref:c,onMouseDown:h,onMouseMove:g,onMouseUp:f,onMouseLeave:f,children:i.jsx("div",{className:"ssm__map-inner",style:{transform:`translate(${K}px, ${U}px) scale(${N})`,transformOrigin:"top left",display:"grid",gridTemplateColumns:`repeat(${o}, ${Yt}px)`,gridTemplateRows:`repeat(${s}, ${Yt}px)`},children:r.cells.flatMap((z,R)=>z.map((W,Q)=>{const ee=Fl(W),te=`${R},${Q}`,Z=b.get(te)??[],ce=Y.get(te)??[],ae=Z.length>0,Ie=Z.length>0?G(Z[0]):"",Xe=n.teams[T],Re=ae&&Z.includes(Xe);let Oe="ssm__cell";ae&&(Oe+=" ssm__cell--zone"),Re&&(Oe+=" ssm__cell--placeable"),ce.length>0&&(Oe+=" ssm__cell--selected");function wn(ie){m.current||(ie.stopPropagation(),Re&&D(T,{row:R,col:Q}))}return i.jsxs("div",{className:Oe,style:{backgroundImage:`url("${ee}")`,...ae?{borderColor:Ie,boxShadow:ce.length>0?`inset 0 0 10px ${Ie}66, 0 0 6px ${Ie}44`:void 0}:{}},onClick:Re?wn:void 0,children:[ce.length===1&&i.jsx("div",{className:"ssm__token",children:i.jsx("img",{src:`/assets/tokens/${ce[0].tokenId}`,alt:ce[0].name,style:{boxShadow:`0 0 6px ${ce[0].color}`},onError:ie=>{ie.target.style.opacity="0.3"}})}),ce.length>1&&i.jsx("div",{className:"ssm__token ssm__token--multi",children:ce.map(ie=>i.jsx("img",{src:`/assets/tokens/${ie.tokenId}`,alt:ie.name,className:"ssm__token-img-sm",style:{boxShadow:`0 0 4px ${ie.color}`},onError:_r=>{_r.target.style.opacity="0.3"}},ie.pid))})]},te)}))})}),a.map((z,R)=>{var wn;const W=n.players[z],Q=q.find(ie=>ie.id===(W==null?void 0:W.unitId)),ee=P(z),te=E===z,Z=T===z,ce=n.teams[z],ae=((wn=k[ce])==null?void 0:wn[0])===z,Ie=I[ce]??ce,Xe=I[ce]??ce,Oe=(r.startZones[Xe]??[]).some(ie=>ie.row===W.position.row&&ie.col===W.position.col);return i.jsx(un,{id:`spawn-${z}`,title:`P${R+1} ${(Q==null?void 0:Q.nameCn)??"—"}`,initialPos:B[z]??{x:100,y:100},width:V,minHeight:60,zIndex:te?50:10+R,onFocus:()=>{C(z),M(z)},children:i.jsxs("div",{className:`ssm__player-card${Z?" ssm__player-card--active":""}`,style:{borderTop:`2px solid ${ee}`},onClick:()=>M(z),children:[i.jsxs("div",{className:"ssm__player-label",style:{color:ee},children:["P",R+1," ",Z?"◄ 放置中":""," ",Oe?"✓":""]}),ae&&i.jsx("div",{className:"ssm__zone-select",children:i.jsxs("label",{children:["出击区域:",i.jsx("select",{value:Ie,onChange:ie=>x(ce,Number(ie.target.value)),onClick:ie=>ie.stopPropagation(),children:y.slice(0,r.maxTeams).map(ie=>i.jsxs("option",{value:ie,children:["区域 ",ie+1]},ie))})]})}),i.jsx("div",{className:"ssm__unit-name",children:(Q==null?void 0:Q.nameCn)??"—"}),i.jsxs("div",{className:"ssm__pos-display",children:["格 (",W.position.row,", ",W.position.col,")"]}),i.jsx("div",{className:"ssm__facing-grid",children:Ix.map(({facing:ie,label:_r,title:Rm})=>{const oc=W.facing===ie;return i.jsx("button",{className:`ssm__facing-btn${oc?" ssm__facing-btn--active":""}`,style:oc?{borderColor:ee,color:ee}:void 0,title:Rm,onClick:()=>w(z,ie),children:_r},ie)})})]})},z)}),i.jsx("style",{children:wx})]})}const wx=`
.ssm__screen {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: var(--color-bg);
  display: flex;
  flex-direction: column;
}

/* ── Top bar ── */
.ssm__topbar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  background: var(--color-bg-panel);
  border-bottom: 1px solid var(--color-border);
  flex-shrink: 0;
  z-index: 100;
}

.ssm__back-btn {
  padding: 6px 10px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-panel);
  color: var(--color-text-muted);
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: border-color 0.15s, color 0.15s;
  white-space: nowrap;
}
.ssm__back-btn:hover {
  border-color: var(--color-accent);
  color: var(--color-text);
}

.ssm__title {
  font-size: 0.9rem;
  color: var(--color-accent);
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  white-space: nowrap;
}

.ssm__map-name {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
}

.ssm__start-btn {
  padding: 8px 24px;
  background: var(--color-accent);
  color: #000;
  font-weight: bold;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: opacity 0.15s;
  white-space: nowrap;
}
.ssm__start-btn:hover {
  opacity: 0.85;
}
.ssm__start-btn--disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.ssm__start-btn--disabled:hover {
  opacity: 0.4;
}
.ssm__zone-select {
  margin: 4px 0;
  font-size: 0.75rem;
  color: var(--color-text-muted);
}
.ssm__zone-select select {
  margin-left: 4px;
  padding: 2px 4px;
  font-size: 0.75rem;
  background: var(--color-bg);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: 3px;
}

/* ── Map viewport ── */
.ssm__viewport {
  flex: 1;
  position: relative;
  overflow: hidden;
  cursor: grab;
}
.ssm__viewport:active {
  cursor: grabbing;
}

.ssm__map-inner {
  position: absolute;
  top: 0;
  left: 0;
}

/* ── Map cells ── */
.ssm__cell {
  width: ${Yt}px;
  height: ${Yt}px;
  position: relative;
  background-size: cover;
  background-position: center;
  border: 1px solid rgba(0,240,255,0.06);
  box-sizing: border-box;
  cursor: default;
}

.ssm__cell--zone {
  border: 2px solid;
}

.ssm__cell--placeable {
  cursor: pointer;
}
.ssm__cell--placeable:hover {
  filter: brightness(1.3);
}

.ssm__cell--selected {
  border-width: 2px;
  border-style: solid;
}

/* ── Token overlays ── */
.ssm__token {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.ssm__token img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

.ssm__token--multi {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1px;
  pointer-events: none;
}

.ssm__token-img-sm {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  object-fit: cover;
}

/* ── Player info card (inside DraggablePanel) ── */
.ssm__player-card {
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  transition: background 0.15s;
}
.ssm__player-card--active {
  background: rgba(0, 240, 255, 0.06);
}

.ssm__player-label {
  font-weight: bold;
  font-size: 0.85rem;
}

.ssm__unit-name {
  font-size: 0.75rem;
  color: var(--color-text);
}

.ssm__pos-display {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

/* 2×2 facing button grid: N S / E W */
.ssm__facing-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3px;
}

.ssm__facing-btn {
  padding: 4px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-card);
  color: var(--color-text-muted);
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  font-family: var(--font-mono);
  transition: border-color 0.12s, color 0.12s, background 0.12s;
}
.ssm__facing-btn:hover {
  border-color: currentColor;
  color: var(--color-text);
}
.ssm__facing-btn--active {
  background: var(--color-bg);
}
`;function Sx({onStart:e,onOnlinePlay:n,onViewRules:t,onViewData:r,onLoadGame:a,onReplay:o,onMapEditor:s,exposureMode:c,onToggleExposure:d,autoFill:u,onToggleAutoFill:p}){return i.jsxs("div",{className:"hs-screen",children:[i.jsxs("div",{className:"hs-center",children:[i.jsx("h1",{className:"hs-title",children:"Embryo Machine"}),i.jsx("p",{className:"hs-subtitle",children:"战棋机甲对战游戏"}),i.jsx("div",{className:"hs-divider"}),i.jsx("button",{className:"hs-btn hs-btn--primary",onClick:e,children:"▶ 开始游戏"}),i.jsx("button",{className:"hs-btn hs-btn--online",onClick:n,children:"联机对战"}),i.jsx("button",{className:"hs-btn hs-btn--secondary",onClick:a,children:"📂 加载存档"}),i.jsx("button",{className:"hs-btn hs-btn--secondary",onClick:o,children:"🎬 回放录像"}),i.jsx("div",{className:"hs-divider hs-divider--sm"}),i.jsxs("div",{className:"hs-settings",children:[i.jsxs("label",{className:"hs-toggle",onClick:d,children:[i.jsx("span",{className:`hs-toggle__switch${c?" hs-toggle__switch--on":""}`,children:i.jsx("span",{className:"hs-toggle__knob"})}),i.jsx("span",{className:"hs-toggle__label",children:"暴露模式"}),i.jsx("span",{className:"hs-toggle__hint",children:c?"已开启：所有隐藏卡牌将显示正面":"关闭"})]}),i.jsxs("label",{className:"hs-toggle",onClick:p,children:[i.jsx("span",{className:`hs-toggle__switch${u?" hs-toggle__switch--on":""}`,children:i.jsx("span",{className:"hs-toggle__knob"})}),i.jsx("span",{className:"hs-toggle__label",children:"自动补位"}),i.jsx("span",{className:"hs-toggle__hint",children:u?"已开启：空位自动随机选机由AI控制":"关闭"})]})]}),i.jsx("div",{className:"hs-divider hs-divider--sm"}),i.jsxs("div",{className:"hs-links",children:[i.jsx("button",{className:"hs-link-btn",onClick:s,children:"🗺️ 地图编辑器"}),i.jsx("button",{className:"hs-link-btn",onClick:t,children:"📖 游戏规则"}),i.jsx("button",{className:"hs-link-btn",onClick:r,children:"📊 游戏资料"})]})]}),i.jsx("style",{children:Cx})]})}const Cx=`
.hs-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: var(--color-bg);
  padding: 32px 16px;
}

.hs-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 360px;
}

.hs-title {
  font-size: 2.5rem;
  letter-spacing: 0.05em;
  color: var(--color-accent);
  text-shadow: var(--glow-accent);
  margin: 0;
  text-align: center;
}

.hs-subtitle {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  letter-spacing: 0.12em;
  margin: 0;
  text-align: center;
}

.hs-divider {
  width: 200px;
  height: 1px;
  background: var(--color-border);
  margin: 4px 0;
}

.hs-divider--sm {
  width: 120px;
  margin: 0;
}

.hs-btn {
  width: 100%;
  max-width: 280px;
  padding: 16px 48px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, color 0.2s, opacity 0.2s;
  border: none;
}

.hs-btn--primary {
  background: var(--color-accent);
  color: #000;
  border: none;
}
.hs-btn--primary:hover {
  background: var(--color-accent-hover);
}

.hs-btn--online {
  background: transparent;
  color: var(--color-accent);
  border: 2px solid var(--color-accent);
}
.hs-btn--online:hover {
  background: rgba(0, 240, 255, 0.1);
}

.hs-btn--secondary {
  background: var(--color-bg-panel);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  font-weight: normal;
}
.hs-btn--secondary:not(.hs-btn--disabled):hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.hs-btn--disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.hs-links {
  display: flex;
  gap: 12px;
}

.hs-link-btn {
  padding: 7px 18px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-panel);
  color: var(--color-text-muted);
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: border-color 0.2s, color 0.2s;
}
.hs-link-btn:hover {
  border-color: var(--color-accent);
  color: var(--color-text);
}

/* ── Settings / Toggle ── */
.hs-settings {
  width: 100%;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.hs-toggle {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 8px 12px;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  background: var(--color-bg-panel);
  transition: border-color 0.2s;
  user-select: none;
}
.hs-toggle:hover {
  border-color: var(--color-accent);
}

.hs-toggle__switch {
  position: relative;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  background: #444;
  transition: background 0.2s;
  flex-shrink: 0;
}
.hs-toggle__switch--on {
  background: var(--color-accent);
}
.hs-toggle__knob {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  transition: left 0.2s;
}
.hs-toggle__switch--on .hs-toggle__knob {
  left: 18px;
}

.hs-toggle__label {
  font-size: 0.85rem;
  color: var(--color-text);
  font-weight: bold;
}
.hs-toggle__hint {
  font-size: 0.72rem;
  color: var(--color-text-muted);
  margin-left: auto;
}
`,Nd=.4,Md=2.5,Td=.12,Nx=5;function Mx(e=1){const[n,t]=j.useState({x:0,y:0,scale:e}),r=j.useRef(null),a=j.useRef({x:0,y:0}),o=j.useRef(!1),s=j.useRef(null),c=j.useRef({x:0,y:0,scale:e});j.useLayoutEffect(()=>{const g=s.current;if(!g)return;const f=g.querySelector(".game-board");if(!f)return;const y=g.clientWidth,I=g.clientHeight,v=f.offsetWidth,x=f.offsetHeight;if(!y||!I||!v||!x)return;const b=Math.min(y/v,I/x),k=Math.min(Md,Math.max(Nd,b)),T=(y-v*k)/2,M=(I-x*k)/2,E={x:T,y:M,scale:k};c.current=E,t(E)},[]),j.useEffect(()=>{const g=s.current;if(!g)return;const f=y=>{y.preventDefault();const I=y.deltaY<0?Td:-Td;t(v=>({...v,scale:Math.min(Md,Math.max(Nd,v.scale+I))}))};return g.addEventListener("wheel",f,{passive:!1}),()=>g.removeEventListener("wheel",f)},[]);const d=j.useCallback(g=>{g.button===0&&(r.current={x:g.clientX,y:g.clientY},a.current={x:g.clientX,y:g.clientY},o.current=!1)},[]),u=j.useCallback(g=>{if(!r.current)return;const f=g.clientX-r.current.x,y=g.clientY-r.current.y,I=Math.sqrt(f*f+y*y);if(!o.current&&I>Nx&&(o.current=!0),o.current){const v=g.clientX-a.current.x,x=g.clientY-a.current.y;t(b=>({...b,x:b.x+v,y:b.y+x}))}a.current={x:g.clientX,y:g.clientY}},[]),p=j.useCallback(g=>{r.current=null,o.current=!1},[]),m=j.useCallback(()=>{r.current=null,o.current=!1},[]),h=j.useCallback(()=>{t(c.current)},[]);return{transform:n,viewportRef:s,isPanning:o.current,handlers:{onMouseDown:d,onMouseMove:u,onMouseUp:p,onMouseLeave:m},resetView:h}}function Tx({x:e,y:n,value:t}){return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"fx-damage-number",style:{left:e,top:n},children:["-",t]}),i.jsx("style",{children:Ex})]})}const Ex=`
.fx-damage-number {
  position: absolute;
  transform: translate(-50%, -50%);
  font-family: var(--font-mono);
  font-size: 28px;
  font-weight: 900;
  color: #ff3030;
  text-shadow:
    0 0 8px rgba(255, 0, 0, 0.8),
    0 0 16px rgba(255, 0, 0, 0.4),
    2px 2px 0 #000;
  pointer-events: none;
  animation: fx-dmg-float 600ms ease-out forwards;
  z-index: 30;
}

@keyframes fx-dmg-float {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.5);
  }
  30% {
    opacity: 1;
    transform: translate(-50%, -70%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -120%) scale(0.8);
  }
}
`;function Dx({x:e,y:n,variant:t}){return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:`fx-impact fx-impact--${t}`,style:{left:e,top:n},children:[t==="melee"&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"fx-impact__slash fx-impact__slash--1"}),i.jsx("div",{className:"fx-impact__slash fx-impact__slash--2"})]}),t==="ranged"&&i.jsx("div",{className:"fx-impact__beam"}),t==="charge"&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"fx-impact__ring fx-impact__ring--1"}),i.jsx("div",{className:"fx-impact__ring fx-impact__ring--2"})]})]}),i.jsx("style",{children:$x})]})}const $x=`
.fx-impact {
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 25;
}

/* ── Ranged: beam flash ── */
.fx-impact__beam {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, transparent, #fff, #00e0ff, #fff, transparent);
  border-radius: 2px;
  box-shadow: 0 0 20px #00e0ff, 0 0 40px rgba(0, 224, 255, 0.5);
  animation: fx-beam-flash 300ms ease-out forwards;
}

@keyframes fx-beam-flash {
  0% { opacity: 0; transform: scaleX(0.3); }
  20% { opacity: 1; transform: scaleX(1.2); }
  100% { opacity: 0; transform: scaleX(1.5); }
}

/* ── Melee: cross slashes ── */
.fx-impact__slash {
  position: absolute;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, transparent, #fff, #ff6600, #fff, transparent);
  border-radius: 2px;
  box-shadow: 0 0 12px #ff6600;
  top: 50%;
  left: 50%;
  transform-origin: center;
}

.fx-impact__slash--1 {
  transform: translate(-50%, -50%) rotate(45deg);
  animation: fx-slash-in 250ms ease-out forwards;
}

.fx-impact__slash--2 {
  transform: translate(-50%, -50%) rotate(-45deg);
  animation: fx-slash-in 250ms ease-out 60ms forwards;
  opacity: 0;
}

@keyframes fx-slash-in {
  0% { opacity: 0; transform: translate(-50%, -50%) rotate(var(--r, 45deg)) scaleX(0); }
  30% { opacity: 1; transform: translate(-50%, -50%) rotate(var(--r, 45deg)) scaleX(1.3); }
  100% { opacity: 0; transform: translate(-50%, -50%) rotate(var(--r, 45deg)) scaleX(0.8); }
}

.fx-impact__slash--1 { --r: 45deg; }
.fx-impact__slash--2 { --r: -45deg; }

/* ── Charge: impact rings ── */
.fx-impact__ring {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  border: 3px solid #ffaa00;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 15px #ffaa00, inset 0 0 10px rgba(255, 170, 0, 0.3);
}

.fx-impact__ring--1 {
  animation: fx-ring-expand 400ms ease-out forwards;
}

.fx-impact__ring--2 {
  animation: fx-ring-expand 400ms ease-out 100ms forwards;
  opacity: 0;
}

@keyframes fx-ring-expand {
  0% {
    opacity: 1;
    width: 10px;
    height: 10px;
    border-width: 4px;
  }
  100% {
    opacity: 0;
    width: 80px;
    height: 80px;
    border-width: 1px;
  }
}
`;function Ax({x:e,y:n}){return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"fx-explosion",style:{left:e,top:n},children:[i.jsx("div",{className:"fx-explosion__flash"}),i.jsx("div",{className:"fx-explosion__ring fx-explosion__ring--1"}),i.jsx("div",{className:"fx-explosion__ring fx-explosion__ring--2"}),i.jsx("div",{className:"fx-explosion__ring fx-explosion__ring--3"}),Array.from({length:8}).map((t,r)=>i.jsx("div",{className:"fx-explosion__particle",style:{"--angle":`${r*45}deg`,"--delay":`${r*20}ms`,"--dist":`${30+Math.random()*20}px`}},r))]}),i.jsx("style",{children:Vx})]})}const Vx=`
.fx-explosion {
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 25;
}

.fx-explosion__flash {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: radial-gradient(circle, #fff 0%, #ffaa00 40%, transparent 70%);
  animation: fx-exp-flash 200ms ease-out forwards;
}

@keyframes fx-exp-flash {
  0% { opacity: 1; transform: translate(-50%, -50%) scale(0.5); }
  50% { opacity: 1; transform: translate(-50%, -50%) scale(1.5); }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(2); }
}

.fx-explosion__ring {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  border: 2px solid #ff6600;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px #ff6600;
}

.fx-explosion__ring--1 { animation: fx-exp-ring 500ms ease-out forwards; }
.fx-explosion__ring--2 { animation: fx-exp-ring 500ms ease-out 80ms forwards; opacity: 0; }
.fx-explosion__ring--3 { animation: fx-exp-ring 500ms ease-out 160ms forwards; opacity: 0; }

@keyframes fx-exp-ring {
  0% { opacity: 1; width: 10px; height: 10px; border-width: 3px; }
  100% { opacity: 0; width: 100px; height: 100px; border-width: 1px; }
}

.fx-explosion__particle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  background: #ffcc00;
  border-radius: 50%;
  box-shadow: 0 0 4px #ff6600;
  animation: fx-exp-particle 400ms ease-out var(--delay, 0ms) forwards;
}

@keyframes fx-exp-particle {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(var(--angle, 0deg)) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(var(--angle, 0deg)) translateY(calc(-1 * var(--dist, 30px)));
  }
}
`;function Px({defId:e,isAuxiliary:n,playerId:t}){const r=ne(e);if(!r)return null;const a=t==="player1"?"P1":"P2",o=t==="player1"?"var(--color-accent)":"#ff00c8";return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"fx-card-reveal",style:{position:"fixed",bottom:"80px",left:"50%",transform:"translateX(-50%)",zIndex:800,pointerEvents:"none"},children:[i.jsxs("div",{className:"fx-card-reveal__label",style:{color:o},children:[a," ",n?"抽到辅助卡":"抽牌"]}),i.jsx("div",{className:"fx-card-reveal__card",style:{borderColor:o},children:i.jsxs("div",{className:"fx-card-reveal__inner",children:[i.jsx("div",{className:"fx-card-reveal__back",children:i.jsx("img",{src:"/assets/ui/card-back.jpg",alt:"card back"})}),i.jsx("div",{className:"fx-card-reveal__front",children:i.jsx("img",{src:`/assets/${r.frontImageId}`,alt:r.nameCn})})]})}),i.jsxs("div",{className:"fx-card-reveal__name",style:{color:o},children:[r.nameCn,n&&i.jsx("span",{className:"fx-card-reveal__aux-badge",children:"辅助"})]})]}),i.jsx("style",{children:zx})]})}const zx=`
.fx-card-reveal__label {
  text-align: center;
  font-size: 0.75rem;
  font-weight: bold;
  margin-bottom: 4px;
  text-shadow: 0 0 8px currentColor;
}

.fx-card-reveal__card {
  width: 90px;
  height: 126px;
  perspective: 600px;
  border: 2px solid;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  animation: fx-card-appear 350ms ease-out forwards;
}

.fx-card-reveal__inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: fx-card-flip 400ms ease-in-out forwards;
}

.fx-card-reveal__back,
.fx-card-reveal__front {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
}

.fx-card-reveal__back {
  transform: rotateY(0deg);
}

.fx-card-reveal__front {
  transform: rotateY(180deg);
}

.fx-card-reveal__back img,
.fx-card-reveal__front img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fx-card-reveal__name {
  text-align: center;
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: 4px;
  text-shadow: 0 0 4px currentColor, 1px 1px 2px #000;
}

.fx-card-reveal__aux-badge {
  display: inline-block;
  margin-left: 4px;
  padding: 1px 6px;
  background: rgba(255, 170, 0, 0.3);
  border: 1px solid #ffaa00;
  border-radius: 3px;
  font-size: 0.65rem;
  color: #ffaa00;
}

@keyframes fx-card-appear {
  0% { transform: translateY(40px) scale(0.7); opacity: 0; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
}

@keyframes fx-card-flip {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(180deg); }
}
`;function Lx({defId:e,isBomb:n,index:t,total:r}){const a=ne(e);if(!a)return null;const o=n?"fx-card-destroy--bomb":"";return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:`fx-card-destroy ${o}`,style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:810,pointerEvents:"none"},children:[i.jsxs("div",{className:"fx-card-destroy__card",children:[i.jsx("img",{src:`/assets/${a.frontImageId}`,alt:a.nameCn}),i.jsx("div",{className:"fx-card-destroy__flash"})]}),i.jsxs("div",{className:"fx-card-destroy__label",children:[a.nameCn," 被摧毁",n&&i.jsx("span",{className:"fx-card-destroy__bomb-badge",children:"💣 诱爆"})]}),i.jsxs("div",{className:"fx-card-destroy__counter",children:[t+1," / ",r]})]}),i.jsx("style",{children:Rx})]})}const Rx=`
.fx-card-destroy__card {
  width: 100px;
  height: 140px;
  border: 2px solid #ff3030;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 30px rgba(255, 0, 0, 0.5);
  animation: fx-destroy-shatter 400ms ease-in forwards;
}

.fx-card-destroy--bomb .fx-card-destroy__card {
  border-color: #ff8800;
  box-shadow: 0 0 30px rgba(255, 136, 0, 0.6);
}

.fx-card-destroy__card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fx-card-destroy__flash {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,0,0,0.3) 60%, transparent 100%);
  animation: fx-destroy-flash 200ms ease-out forwards;
}

.fx-card-destroy--bomb .fx-card-destroy__flash {
  background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,136,0,0.4) 60%, transparent 100%);
}

.fx-card-destroy__label {
  text-align: center;
  font-size: 0.85rem;
  font-weight: bold;
  color: #ff4040;
  margin-top: 8px;
  text-shadow: 0 0 8px rgba(255, 0, 0, 0.6), 1px 1px 2px #000;
  animation: fx-destroy-label 400ms ease-out forwards;
}

.fx-card-destroy--bomb .fx-card-destroy__label {
  color: #ff8800;
  text-shadow: 0 0 8px rgba(255, 136, 0, 0.6), 1px 1px 2px #000;
}

.fx-card-destroy__bomb-badge {
  display: inline-block;
  margin-left: 6px;
  padding: 1px 6px;
  background: rgba(255, 136, 0, 0.3);
  border: 1px solid #ff8800;
  border-radius: 3px;
  font-size: 0.7rem;
}

.fx-card-destroy__counter {
  text-align: center;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 4px;
}

@keyframes fx-destroy-shatter {
  0% {
    transform: scale(1.2);
    opacity: 1;
    filter: brightness(2);
  }
  25% {
    transform: scale(1.1);
    opacity: 1;
    filter: brightness(1.5);
  }
  100% {
    transform: scale(0.3) rotate(12deg);
    opacity: 0;
    filter: brightness(0.3);
  }
}

@keyframes fx-destroy-flash {
  0% { opacity: 1; }
  100% { opacity: 0; }
}

@keyframes fx-destroy-label {
  0% { opacity: 0; transform: translateY(10px); }
  30% { opacity: 1; transform: translateY(0); }
  80% { opacity: 1; }
  100% { opacity: 0; }
}
`,Ks=62,Ki=Math.round(Ks*(1042/756)),Ed=68,Ox=6,Dd=140;function Kx({p1Cards:e,p2Cards:n}){const[t,r]=j.useState("init"),[a,o]=j.useState(null);return j.useEffect(()=>{const s=document.querySelector(".unit-token-abs--p1"),c=document.querySelector(".unit-token-abs--p2"),d=s==null?void 0:s.getBoundingClientRect(),u=c==null?void 0:c.getBoundingClientRect();o({p1:d?{x:d.left+d.width/2,y:d.top+d.height/2}:{x:window.innerWidth*.3,y:window.innerHeight*.55},p2:u?{x:u.left+u.width/2,y:u.top+u.height/2}:{x:window.innerWidth*.7,y:window.innerHeight*.45}});const p=setTimeout(()=>r("fan"),50),m=setTimeout(()=>r("hold"),650),h=setTimeout(()=>r("cluster"),1650),g=setTimeout(()=>r("exit"),2e3);return()=>{[p,m,h,g].forEach(clearTimeout)}},[]),a?Ia.createPortal(i.jsxs("div",{style:{position:"fixed",inset:0,zIndex:900,pointerEvents:"none"},children:[i.jsx($d,{cards:e,origin:a.p1,phase:t,color:"#00f0ff",label:"P1"}),i.jsx($d,{cards:n,origin:a.p2,phase:t,color:"#ff8844",label:"P2"})]}),document.body):null}function $d({cards:e,origin:n,phase:t,color:r,label:a}){if(e.length===0)return null;const o=e.length,c=(o-1)*Ed>window.innerWidth*.7?Math.floor(window.innerWidth*.7/Math.max(o-1,1)):Ed,d=t==="hold"||t==="cluster";return i.jsxs("div",{style:{position:"fixed",left:n.x,top:n.y},children:[i.jsxs("div",{style:{position:"absolute",top:-(Dd+Ki/2+28),left:0,transform:"translateX(-50%)",color:r,fontSize:"0.78rem",fontWeight:"bold",whiteSpace:"nowrap",textShadow:`0 0 10px ${r}, 1px 1px 3px #000`,opacity:d?1:0,transition:"opacity 250ms",letterSpacing:"0.06em"},children:[a,"  弃牌 ×",o]}),e.map((u,p)=>{const m=ne(u.defId),h=(o-1)/2,g=p-h,f=g*c,y=-Dd,I=g*Ox;let v,x,b,k,T;switch(t){case"init":v=0,x=0,b=0,k=.15,T=0;break;case"fan":case"hold":v=f,x=y,b=I,k=1,T=1;break;case"cluster":v=0,x=y,b=0,k=.85,T=1;break;case"exit":default:v=0,x=y-520,b=0,k=.2,T=0;break}const M=p*28;let E;switch(t){case"fan":E=[`transform 480ms cubic-bezier(0.34,1.56,0.64,1) ${M}ms`,`opacity   300ms ease-out ${M}ms`].join(", ");break;case"hold":E="none";break;case"cluster":E="transform 320ms ease-in, opacity 150ms ease-in";break;case"exit":E="transform 450ms ease-in, opacity 380ms ease-in 60ms";break;default:E="none"}return i.jsx("div",{style:{position:"absolute",width:Ks,height:Ki,left:-Ks/2,top:-Ki/2,borderRadius:5,overflow:"hidden",border:`1px solid ${r}55`,boxShadow:`0 6px 20px rgba(0,0,0,0.7), 0 0 8px ${r}44`,zIndex:p,transform:`translate(${v}px, ${x}px) rotate(${b}deg) scale(${k})`,opacity:T,transition:E,willChange:"transform, opacity"},children:m?i.jsx("img",{src:`/assets/${m.frontImageId}`,alt:m.nameCn,style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1}):i.jsx("div",{style:{width:"100%",height:"100%",background:"#222"}})},u.instanceId)})]})}const Js=62,Ji=Math.round(Js*(1042/756)),Ad=52,Jx=5,Vd=120;function Bx({playerId:e,count:n}){const[t,r]=j.useState("init"),[a,o]=j.useState(null),[s,c]=j.useState(null);if(j.useEffect(()=>{const u=e==="player1"?".mp__deck--p1":".mp__deck--p2",p=document.querySelector(u),m=document.querySelector(e==="player1"?".unit-token-abs--p1":".unit-token-abs--p2"),h=p==null?void 0:p.getBoundingClientRect(),g=m==null?void 0:m.getBoundingClientRect();o(h?{x:h.left+h.width/2,y:h.top+h.height/2}:{x:window.innerWidth*.5,y:window.innerHeight*.85}),c(g?{x:g.left+g.width/2,y:g.top+g.height/2}:{x:e==="player1"?window.innerWidth*.3:window.innerWidth*.7,y:e==="player1"?window.innerHeight*.55:window.innerHeight*.45});const f=setTimeout(()=>r("spread"),50),y=setTimeout(()=>r("hold"),600),I=setTimeout(()=>r("cluster"),900),v=setTimeout(()=>r("fly"),1200);return()=>{[f,y,I,v].forEach(clearTimeout)}},[e]),!a||!s)return null;const d=e==="player1"?"#00f0ff":"#ff8844";return Ia.createPortal(i.jsx("div",{style:{position:"fixed",inset:0,zIndex:900,pointerEvents:"none"},children:i.jsx(Fx,{count:n,deckPos:a,mechaPos:s,phase:t,color:d,playerId:e})}),document.body)}function Fx({count:e,deckPos:n,mechaPos:t,phase:r,color:a,playerId:o}){if(e===0)return null;const s=e,d=(s-1)*Ad>window.innerWidth*.6?Math.floor(window.innerWidth*.6/Math.max(s-1,1)):Ad,u=t.x-n.x,p=t.y-n.y,m=r==="hold"||r==="cluster",h=`${o==="player1"?"P1":"P2"} 抽牌 ×${s}`;return i.jsxs("div",{style:{position:"fixed",left:n.x,top:n.y},children:[i.jsx("div",{style:{position:"absolute",top:-(Vd+Ji/2+28),left:0,transform:"translateX(-50%)",color:a,fontSize:"0.78rem",fontWeight:"bold",whiteSpace:"nowrap",textShadow:`0 0 10px ${a}, 1px 1px 3px #000`,opacity:m?1:0,transition:"opacity 250ms",letterSpacing:"0.06em"},children:h}),Array.from({length:s},(g,f)=>{const y=(s-1)/2,I=f-y,v=I*d,x=-Vd,b=I*Jx;let k,T,M,E,C;switch(r){case"init":k=0,T=0,M=0,E=.15,C=0;break;case"spread":case"hold":k=v,T=x,M=b,E=1,C=1;break;case"cluster":k=0,T=x,M=0,E=.85,C=1;break;case"fly":default:k=u,T=p,M=0,E=.2,C=0;break}const $=f*24;let D;switch(r){case"spread":D=[`transform 480ms cubic-bezier(0.34,1.56,0.64,1) ${$}ms`,`opacity   300ms ease-out ${$}ms`].join(", ");break;case"hold":D="none";break;case"cluster":D="transform 280ms ease-in, opacity 150ms ease-in";break;case"fly":D="transform 400ms cubic-bezier(0.4,0,1,1), opacity 300ms ease-in 80ms";break;default:D="none"}return i.jsx("div",{style:{position:"absolute",width:Js,height:Ji,left:-Js/2,top:-Ji/2,borderRadius:5,overflow:"hidden",border:`1px solid ${a}55`,boxShadow:`0 6px 20px rgba(0,0,0,0.7), 0 0 8px ${a}44`,zIndex:f,transform:`translate(${k}px, ${T}px) rotate(${M}deg) scale(${E})`,opacity:C,transition:D,willChange:"transform, opacity"},children:i.jsx("img",{src:"/assets/ui/card-back.jpg",alt:"card back",style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1})},f)})]})}const Bs=56,Fs=Math.round(Bs*(1042/756));function Gx({playerId:e}){const[n,t]=j.useState("face-up"),[r,a]=j.useState(null);if(j.useEffect(()=>{const s=e==="player1"?".mp__deck--p1":".mp__deck--p2",c=document.querySelector(s),d=c==null?void 0:c.getBoundingClientRect();a(d?{x:d.left+d.width/2,y:d.top+d.height/2}:{x:window.innerWidth*.5,y:window.innerHeight*.85});const u=setTimeout(()=>t("flip"),150),p=setTimeout(()=>t("face-down"),500),m=setTimeout(()=>t("fade"),650);return()=>{[u,p,m].forEach(clearTimeout)}},[e]),!r)return null;const o=e==="player1"?"#00f0ff":"#ff8844";return Ia.createPortal(i.jsxs("div",{style:{position:"fixed",inset:0,zIndex:900,pointerEvents:"none"},children:[i.jsxs("div",{style:{position:"fixed",left:r.x,top:r.y},children:[[0,1,2].map(s=>i.jsx(Ux,{index:s,phase:n,color:o},s)),i.jsx("div",{style:{position:"absolute",top:-(Fs/2+32),left:0,transform:"translateX(-50%)",color:o,fontSize:"0.78rem",fontWeight:"bold",whiteSpace:"nowrap",textShadow:`0 0 10px ${o}, 1px 1px 3px #000`,letterSpacing:"0.06em",opacity:n==="face-up"||n==="flip"||n==="face-down"?1:0,transition:"opacity 200ms"},children:"♻️ 重洗牌组"})]}),i.jsx("style",{children:Hx})]}),document.body)}function Ux({index:e,phase:n,color:t}){const r=(e-1)*3,a=(e-1)*2;let o;switch(n){case"face-up":case"flip":case"face-down":o=1;break;case"fade":o=0;break}const s=n==="flip"?"reshuffle-card--flipping":n==="face-down"||n==="fade"?"reshuffle-card--flipped":"";return i.jsxs("div",{className:`reshuffle-card ${s}`,style:{position:"absolute",width:Bs,height:Fs,left:-Bs/2+r,top:-Fs/2+a,perspective:600,opacity:o,transition:"opacity 200ms ease-in",willChange:"opacity",zIndex:e},children:[i.jsx("div",{className:"reshuffle-card__face reshuffle-card__front",style:{background:t+"33",border:`2px solid ${t}88`,borderRadius:5,boxShadow:`0 0 12px ${t}55`}}),i.jsx("div",{className:"reshuffle-card__face reshuffle-card__back",style:{borderRadius:5,overflow:"hidden",border:"1px solid #ffffff44",boxShadow:"0 4px 12px rgba(0,0,0,0.6)"},children:i.jsx("img",{src:"/assets/ui/card-back.jpg",alt:"card back",style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1})})]})}const Hx=`
.reshuffle-card {
  transform-style: preserve-3d;
  transition: transform 350ms ease-in-out;
}

.reshuffle-card__face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.reshuffle-card__back {
  transform: rotateY(180deg);
}

/* Intermediate state: 90deg (edge-on, invisible) */
.reshuffle-card--flipping {
  transform: rotateY(90deg);
  transition: transform 180ms ease-in;
}

/* Full flip: 180deg (face-down / card-back visible) */
.reshuffle-card--flipped {
  transform: rotateY(180deg);
  transition: transform 180ms ease-out;
}
`,on=68;function Wx(){const{currentEvent:e}=ja();return e?i.jsxs("div",{className:"effects-layer",style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:20},children:[e.type==="damage_number"&&i.jsx(Tx,{x:e.position.col*on+on/2,y:e.position.row*on+on/2,value:e.value},`dmg-${Date.now()}`),(e.type==="ranged_hit"||e.type==="melee_hit"||e.type==="charge_hit")&&i.jsx(Dx,{x:e.targetPos.col*on+on/2,y:e.targetPos.row*on+on/2,variant:e.type==="ranged_hit"?"ranged":e.type==="melee_hit"?"melee":"charge"},`hit-${Date.now()}`),e.type==="mine_explode"&&i.jsx(Ax,{x:e.position.col*on+on/2,y:e.position.row*on+on/2},`exp-${Date.now()}`),e.type==="card_draw"&&i.jsx(Px,{defId:e.defId,isAuxiliary:e.isAuxiliary,playerId:e.playerId},`draw-${e.card.instanceId}`),e.type==="card_destroy"&&i.jsx(Lx,{defId:e.defId,isBomb:e.isBomb,index:e.index,total:e.total},`destroy-${e.card.instanceId}`),e.type==="cleanup_discard"&&i.jsx(Kx,{p1Cards:e.p1Cards,p2Cards:e.p2Cards},`cleanup-${Date.now()}`),e.type==="batch_card_draw"&&i.jsx(Bx,{playerId:e.playerId,count:e.count},`draw-${e.playerId}-${Date.now()}`),e.type==="deck_reshuffle"&&i.jsx(Gx,{playerId:e.playerId},`reshuffle-${e.playerId}-${Date.now()}`)]}):null}const Ya=68;function ec(){const{state:e}=Ce(),{map:n,mines:t}=e,{currentEvent:r,animatedPositions:a}=ja(),{transform:o,viewportRef:s,handlers:c,resetView:d}=Mx(.9),u=(r==null?void 0:r.type)==="screen_shake"?`board-transform board-shake board-shake--${r.intensity}`:"board-transform";return i.jsxs("div",{ref:s,className:"board-viewport",...c,style:{cursor:"grab"},children:[i.jsxs("div",{className:u,style:{transform:`translate(${o.x}px, ${o.y}px) scale(${o.scale})`,transformOrigin:"top left"},children:[i.jsx("div",{className:"game-board",style:{gridTemplateColumns:`repeat(${n.width}, var(--cell-size))`,gridTemplateRows:`repeat(${n.height}, var(--cell-size))`},children:n.cells.flatMap((p,m)=>p.map((h,g)=>i.jsx(Zx,{cell:h,row:m,col:g,mines:t},`${m}-${g}`)))}),e.playerIds.map((p,m)=>{const h=e.players[p];return!h||h.isDefeated?null:i.jsx(Yx,{player:h,side:`p${m+1}`,playerIndex:m,animatedPos:a[p]??null},p)}),i.jsx(Wx,{})]}),i.jsx("button",{className:"board-reset-btn",onClick:d,title:"重置视角",children:"⟳"})]})}function Zx({cell:e,row:n,col:t,mines:r}){const a=Fl(e),o=e.terrain==="highland"&&e.elevation>0?`+${e.elevation}`:null,s=r.filter(c=>c.position.row===n&&c.position.col===t);return i.jsxs("div",{className:`board-cell board-cell--${e.terrain}`,style:{backgroundImage:`url("${a}")`},"data-row":n,"data-col":t,children:[o&&i.jsx("span",{className:"board-cell__elev",children:o}),s.map((c,d)=>i.jsx(Xx,{mine:c,offset:d*4},c.id))]})}const Pd=["#00f0ff","#ff00c8","#00cc88","#ff8800","#6688ff","#cc44ff","#44dddd","#ff4466"];function Yx({player:e,side:n,playerIndex:t,animatedPos:r}){const a=q.find(p=>p.id===e.unitId);if(!a)return null;const o=(r==null?void 0:r.pos)??e.position,s=(r==null?void 0:r.facing)??e.facing,c={N:0,E:90,S:180,W:270}[s]??0,d=Pd[t%Pd.length],u=`P${t+1}`;return i.jsxs("div",{className:`unit-token-abs unit-token-abs--${n}`,style:{left:o.col*Ya,top:o.row*Ya,width:Ya,height:Ya,"--token-color":d},children:[i.jsx("div",{className:"unit-token-abs__label",style:{borderColor:d,backgroundColor:d+"33"},title:`${u} ${a.nameCn}`,children:u}),i.jsx("span",{className:"unit-token-abs__facing-arrow",style:{transform:`rotate(${c}deg)`,color:d},title:`机头朝向：${e.facing}`,children:"▲"})]})}function Xx({mine:e,offset:n}){const t=e.ownerId==="player1";return i.jsx("div",{className:`mine-token mine-token--${t?"p1":"p2"}`,style:{transform:`translate(${n}px, ${n}px)`},title:`机雷 (伤害 ${e.damage})`,children:i.jsx("span",{className:"mine-token__icon",children:"💣"})})}const Qx=250,qx=480,ev=2e3,Fo=252,po=Math.round(Fo*(1042/756)),Vt=12;function vr(){const[e,n]=j.useState(null),t=j.useRef(null),r=j.useRef(null),a=j.useRef(null),o=j.useRef({x:0,y:0}),s=j.useRef(!1),c=()=>{t.current&&(clearTimeout(t.current),t.current=null),r.current&&(clearTimeout(r.current),r.current=null),a.current&&(clearTimeout(a.current),a.current=null)},d=j.useCallback(()=>{c(),n(null)},[]),u=j.useCallback(p=>({onMouseEnter:m=>{o.current={x:m.clientX,y:m.clientY},c(),t.current=setTimeout(()=>{n({src:p,x:o.current.x,y:o.current.y})},Qx)},onMouseMove:m=>{o.current={x:m.clientX,y:m.clientY},n(h=>h&&{...h,x:m.clientX,y:m.clientY})},onMouseLeave:()=>d(),onTouchStart:m=>{const h=m.touches[0];s.current=!1,c(),r.current=setTimeout(()=>{s.current||(n({src:p,x:h.clientX,y:h.clientY}),a.current=setTimeout(()=>n(null),ev))},qx)},onTouchMove:()=>{s.current=!0,d()},onTouchEnd:()=>{c()}}),[d]);return{zoom:e,hide:d,getZoomHandlers:u}}function nv(e,n){const t=window.innerWidth,r=window.innerHeight;let a=e+18;a+Fo+Vt>t&&(a=e-Fo-18);let o=n-po/2;return o<Vt&&(o=Vt),o+po>r-Vt&&(o=r-po-Vt),{left:Math.max(Vt,a),top:o}}function yr({zoom:e}){if(!e)return null;const{left:n,top:t}=nv(e.x,e.y);return Ia.createPortal(i.jsxs("div",{style:{position:"fixed",left:n,top:t,width:Fo,height:po,zIndex:99999,pointerEvents:"none",borderRadius:8,overflow:"hidden",boxShadow:"0 12px 40px rgba(0,0,0,0.75), 0 0 0 2px rgba(255,255,255,0.15)",background:"#111",animation:"card-zoom-in 0.12s ease-out both"},children:[i.jsx("img",{src:e.src,alt:"",style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1}),i.jsx("style",{children:tv})]}),document.body)}const tv=`
@keyframes card-zoom-in {
  from { opacity: 0; transform: scale(0.88); }
  to   { opacity: 1; transform: scale(1); }
}
`,zd=["var(--color-accent)","#ff00c8","#00cc88","#ff8800","#6688ff","#cc44ff","#44dddd","#ff4466"];function Er(e){const n=parseInt(e.replace("player",""),10)-1;return zd[n%zd.length]}function Gs(e){return`P${e.replace("player","")}`}function rv(e,n){const t=ua[n]??[];return[...e].sort((r,a)=>{const o=t.findIndex(c=>c.id===r.defId),s=t.findIndex(c=>c.id===a.defId);return o-s})}function av(e,n,t,r,a,o){function s(g){if(!g)return null;const f=[...e.hand,...e.auxiliary].find(y=>y.instanceId===g);return f?a(f.defId)??null:null}const c=s(t),d=s(r),u=kn(e,a,"movement"),p=e.position,m=[];let h=[p];if(c){if(c.actionType==="movement"){const g=(c.movementValue??0)+(u.wheel?2:0);if(g>0){const f=li(o,p,g,[n],u,e.facing);h=f.map(y=>y.pos),m.push(...f.map(y=>({pos:y.pos,cls:"preview-move-s1"})))}}else if(c.actionType==="ranged"){const g=c.rangeMin??1,f=c.rangeMax??6;for(let y=0;y<o.height;y++)for(let I=0;I<o.width;I++)we(p,{row:y,col:I})>=g&&we(p,{row:y,col:I})<=f&&m.push({pos:{row:y,col:I},cls:"preview-atk-s1"})}else if(c.actionType==="melee"||c.actionType==="charge")for(const[g,f]of[[-1,0],[1,0],[0,-1],[0,1]]){const y=p.row+g,I=p.col+f;y>=0&&y<o.height&&I>=0&&I<o.width&&m.push({pos:{row:y,col:I},cls:"preview-atk-s1"})}}if(d){const g=new Map,f=y=>`${y.row},${y.col}`;if(d.actionType==="movement"){const y=(d.movementValue??0)+(u.wheel?2:0);if(y>0){for(const I of h)fm(o,I,y,[n],u).forEach(v=>g.set(f(v.pos),v.pos));g.forEach(I=>m.push({pos:I,cls:"preview-move-s2"}))}}else if(d.actionType==="ranged"){const y=d.rangeMin??1,I=d.rangeMax??6;for(const v of h)for(let x=0;x<o.height;x++)for(let b=0;b<o.width;b++){const k=we(v,{row:x,col:b});k>=y&&k<=I&&g.set(f({row:x,col:b}),{row:x,col:b})}g.forEach(v=>m.push({pos:v,cls:"preview-atk-s2"}))}else if(d.actionType==="melee"||d.actionType==="charge"){for(const y of h)for(const[I,v]of[[-1,0],[1,0],[0,-1],[0,1]]){const x=y.row+I,b=y.col+v;x>=0&&x<o.height&&b>=0&&b<o.width&&g.set(f({row:x,col:b}),{row:x,col:b})}g.forEach(y=>m.push({pos:y,cls:"preview-atk-s2"}))}}return m}const ov=["board-cell--preview-move-s1","board-cell--preview-move-s2","board-cell--preview-atk-s1","board-cell--preview-atk-s2"];function Ld(){document.querySelectorAll(".board-cell").forEach(e=>ov.forEach(n=>e.classList.remove(n)))}const iv=[{id:"hand",label:"手牌",icon:"🃏"},{id:"auxiliary",label:"辅助区",icon:"⚙️"},{id:"discard",label:"弃牌区",icon:"♻️"},{id:"destroyed",label:"已破坏",icon:"💀"}];function _m(){const{state:e,dispatch:n,aiConfig:t}=Ce(),{isAnimating:r}=ja(),a=()=>n({type:"ADVANCE_PLOT_STEP"});if(j.useEffect(()=>{if(e.phase!=="plotting"||r)return;const s=e.plottingStep;if(!s||!s.startsWith("transition_to_"))return;const c=s.replace("transition_to_","");if(!Ye(t,c))return;const d=setTimeout(a,400);return()=>clearTimeout(d)},[e.plottingStep,e.phase,r,t]),e.phase!=="plotting"||r)return null;const o=e.plottingStep;if(o&&o.startsWith("transition_to_")){const s=o.replace("transition_to_","");return Ye(t,s)?null:i.jsx(cv,{onContinue:a,playerLabel:Gs(s),hint:"请确认对方不在旁后开始布局"})}return null}function Us(){const{state:e,dispatch:n,getCard:t,aiConfig:r}=Ce(),{plottingStep:a}=e;if(e.phase!=="plotting"||a==="complete"||a===null||a.startsWith("transition_to_"))return null;const o=a,s=Ye(r,o),c=wa(r,o);return i.jsx(sv,{activePlottingPlayerId:o,getCard:t,isAI:s,aiDifficulty:c,onConfirm:(d,u)=>{n({type:"PLOT_CARD",playerId:o,seg:1,instanceId:d}),n({type:"PLOT_CARD",playerId:o,seg:2,instanceId:u}),n({type:"CONFIRM_PLOT",playerId:o})}},o)}function sv({activePlottingPlayerId:e,getCard:n,onConfirm:t,isAI:r=!1,aiDifficulty:a="hard"}){const{state:o,dispatch:s,exposureMode:c}=Ce(),[d,u]=j.useState(null),[p,m]=j.useState(null),[h,g]=j.useState("hand"),[f,y]=j.useState(e),I=f===e||c,v=o.players[f],x=o.players[e],b=Er(e),k=(()=>{const w=o.playerIds.filter(Y=>Y!==e&&o.teams[Y]!==o.teams[e]&&!o.players[Y].isDefeated);if(w.length===0)return null;const L=x.position;let P=w[0],G=Math.abs(o.players[w[0]].position.row-L.row)+Math.abs(o.players[w[0]].position.col-L.col);for(let Y=1;Y<w.length;Y++){const K=Math.abs(o.players[w[Y]].position.row-L.row)+Math.abs(o.players[w[Y]].position.col-L.col);K<G&&(P=w[Y],G=K)}return o.players[P]})();j.useEffect(()=>{g(f===e?"hand":"auxiliary")},[f,e]),j.useEffect(()=>{const w=(k==null?void 0:k.position)??{row:0,col:0},L=av(x,w,d,p,n,o.map);return Ld(),L.forEach(({pos:P,cls:G})=>{const Y=document.querySelector(`.board-cell[data-row="${P.row}"][data-col="${P.col}"]`);Y&&Y.classList.add(`board-cell--${G}`)}),Ld},[d,p]),j.useEffect(()=>{if(!r)return;const w=k??x,L=setTimeout(()=>{const{seg1:P,seg2:G}=Z0(x,w,n,a,o.map);P&&G?t(P,G):P?t(P,P):s({type:"CONFIRM_PLOT",playerId:e})},800);return()=>clearTimeout(L)},[r]);function T(w){if(d===w){u(null);return}if(p===w){m(null);return}if(!d){u(w);return}if(!p){m(w);return}m(w)}function M(w){return w==="deck"?v.deck.filter(L=>!L.destroyed).length:w==="hand"?v.hand.filter(L=>!L.destroyed).length:w==="auxiliary"?v.auxiliary.length:w==="discard"?v.discard.length:w==="destroyed"?v.destroyedCards.length:0}function E(w){return w==="deck"?I?rv(v.deck,v.unitId):[]:w==="hand"?v.hand.filter(L=>!L.destroyed):w==="auxiliary"?v.auxiliary:w==="discard"?v.discard:w==="destroyed"?v.destroyedCards:[]}const C=d!==null&&p!==null,$=I,D=h==="deck"&&I;return i.jsxs("div",{className:"plot-content",children:[i.jsxs("div",{className:"plot-panel__header",children:[i.jsx("span",{className:"plot-panel__player",style:{color:b},children:Gs(e)}),i.jsx("span",{className:"plot-panel__prompt",children:"布局中"})]}),i.jsx("div",{className:"plot-tab-row",children:o.playerIds.map(w=>{const L=f===w,P=w===e;return i.jsxs("button",{className:`plot-tab${L?" plot-tab--active":""}`,style:L?{color:Er(w),borderBottomColor:Er(w)}:void 0,onClick:()=>y(w),children:[Gs(w),P&&!L&&i.jsx("span",{className:"plot-tab__dot",style:{background:Er(w)}})]},w)})}),f===e?i.jsxs("div",{className:"plot-slots",children:[i.jsx(Rd,{label:"主要阶段 1",cardInstanceId:d,getCard:n,hand:x.hand,onClear:()=>u(null),color:b}),i.jsx(Rd,{label:"主要阶段 2",cardInstanceId:p,getCard:n,hand:x.hand,onClear:()=>m(null),color:b})]}):c?i.jsxs("div",{className:"plot-slots",children:[i.jsx(Od,{label:"主要阶段 1",card:v.plotSeg1,getCard:n}),i.jsx(Od,{label:"主要阶段 2",card:v.plotSeg2,getCard:n})]}):i.jsxs("div",{className:"plot-slots",children:[i.jsxs("div",{className:"plot-slot-locked",children:[i.jsx("span",{children:"🔒"}),i.jsx("span",{children:"主要阶段 1"}),i.jsx("span",{className:"plot-slot-locked__hint",children:"对方已锁定"})]}),i.jsxs("div",{className:"plot-slot-locked",children:[i.jsx("span",{children:"🔒"}),i.jsx("span",{children:"主要阶段 2"}),i.jsx("span",{className:"plot-slot-locked__hint",children:"对方已锁定"})]})]}),i.jsxs("div",{className:"plot-zone-tabs",children:[i.jsxs("button",{className:`plot-zone-tab${D?" plot-zone-tab--active":""}`,style:D?{borderColor:b}:void 0,onClick:$?()=>g("deck"):void 0,disabled:!$,title:$?"卡组：按资料集顺序查看":"对方卡组不可查看",children:[i.jsx("span",{className:"plot-zone-tab__icon",children:$?"🂠":"🔒"}),i.jsx("span",{className:"plot-zone-tab__label",children:"卡组"}),i.jsx("span",{className:"plot-zone-tab__count",children:v.deck.filter(w=>!w.destroyed).length})]}),iv.map(({id:w,label:L,icon:P})=>{const G=h===w;return i.jsxs("button",{className:`plot-zone-tab${G?" plot-zone-tab--active":""}`,style:G?{borderColor:I?b:Er(f)}:void 0,onClick:()=>g(w),title:`${L}：点击查看`,children:[i.jsx("span",{className:"plot-zone-tab__icon",children:P}),i.jsx("span",{className:"plot-zone-tab__label",children:L}),i.jsx("span",{className:"plot-zone-tab__count",children:M(w)})]},w)})]}),i.jsx("div",{className:"plot-zone-view",children:h==="hand"&&!I?i.jsxs("div",{className:"plot-zone-private",children:["🔒 对方手牌不可查看",i.jsx("br",{}),i.jsxs("span",{className:"plot-zone-private__count",children:["共 ",M("hand")," 张"]})]}):E(h).length===0?i.jsx("p",{className:"plot-zone-empty",children:"（此区域为空）"}):i.jsx("div",{className:"plot-card-grid",children:E(h).map(w=>{const L=n(w.defId),P=h==="hand"&&f===e,G=w.instanceId===d,Y=w.instanceId===p;return i.jsx(lv,{card:w,def:L,isSelected:G||Y,segLabel:G?"①":Y?"②":null,onClick:P?()=>T(w.instanceId):void 0},w.instanceId)})})}),i.jsx("div",{className:"plot-footer",children:i.jsx("button",{className:"plot-confirm-btn",disabled:!C,style:C?{borderColor:b,color:b}:void 0,onClick:()=>{d&&p&&t(d,p)},children:C?"确定布局":`请选择主要阶段 ${d?"2":"1"} 的卡牌`})}),i.jsx("style",{children:dv})]})}function Rd({label:e,cardInstanceId:n,getCard:t,hand:r,onClear:a,color:o}){const s=r.find(h=>h.instanceId===n)??null,c=s?t(s.defId):null,{zoom:d,hide:u,getZoomHandlers:p}=vr(),m=c?`/assets/${c.frontImageId}`:"";return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"plot-slot",children:[i.jsx("div",{className:"plot-slot__label",children:e}),c&&s?i.jsxs("div",{className:"plot-slot__card",onClick:()=>{u(),a()},title:"点击取消选择",style:{borderColor:o,boxShadow:`0 0 8px ${o}55`},...p(m),children:[i.jsx("img",{src:m,alt:c.nameCn,className:"plot-slot__img",onError:h=>{h.target.style.opacity="0.4"}}),i.jsx("span",{className:"plot-slot__name",children:c.nameCn}),i.jsx("span",{className:"plot-slot__clear",children:"✕"})]}):i.jsx("div",{className:"plot-slot__empty",children:"— 未选择 —"})]}),i.jsx(yr,{zoom:d})]})}function Od({label:e,card:n,getCard:t}){const r=n?t(n.defId):null,a=r?`/assets/${r.frontImageId}`:"";return i.jsxs("div",{className:"plot-slot",children:[i.jsx("div",{className:"plot-slot__label",children:e}),r&&n?i.jsxs("div",{className:"plot-slot__card",style:{borderColor:"#888",cursor:"default"},children:[i.jsx("img",{src:a,alt:r.nameCn,className:"plot-slot__img",onError:o=>{o.target.style.opacity="0.4"}}),i.jsx("span",{className:"plot-slot__name",children:r.nameCn})]}):i.jsx("div",{className:"plot-slot__empty",children:"— 未布局 —"})]})}function lv({card:e,def:n,isSelected:t,segLabel:r,onClick:a}){const{zoom:o,getZoomHandlers:s}=vr(),c=n?`/assets/${n.frontImageId}`:"";return i.jsxs(i.Fragment,{children:[i.jsxs("button",{className:`plot-card${t?" plot-card--selected":""}${a?"":" plot-card--readonly"}`,onClick:a,disabled:!a,title:(n==null?void 0:n.nameCn)??"???",...n?s(c):{},children:[n?i.jsxs(i.Fragment,{children:[i.jsx("img",{src:c,alt:n.nameCn,className:"plot-card__img",onError:d=>{d.target.style.opacity="0.3"}}),i.jsx("span",{className:"plot-card__name",children:n.nameCn}),n.damage!==void 0&&i.jsxs("span",{className:"plot-card__stat",children:["💥",n.damage]}),n.movementValue!==void 0&&i.jsxs("span",{className:"plot-card__stat",children:["🏃",n.movementValue]}),n.rangeMin!==void 0&&i.jsxs("span",{className:"plot-card__stat",children:["🎯",n.rangeMin,"–",n.rangeMax]})]}):i.jsx("span",{className:"plot-card__name",children:"???"}),r&&i.jsx("span",{className:"plot-card__badge",children:r})]}),i.jsx(yr,{zoom:o})]})}function cv({onContinue:e,playerLabel:n,hint:t}){return i.jsxs("div",{className:"pass-device-screen",children:[i.jsxs("div",{className:"pass-device-screen__content",children:[i.jsx("div",{className:"pass-device-screen__icon",children:"🤖"}),i.jsx("h2",{className:"pass-device-screen__title",children:"请将设备交给"}),i.jsx("h1",{className:"pass-device-screen__player",children:n}),i.jsx("p",{className:"pass-device-screen__hint",children:t}),i.jsxs("button",{className:"pass-device-screen__btn",onClick:e,children:[n," 已就位，继续"]})]}),i.jsx("style",{children:uv})]})}const dv=`
/* ── Content shell — fills the DraggablePanel body ── */
.plot-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

/* ── Header ── */
.plot-panel__header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: var(--color-bg-panel);
  border-bottom: 1px solid var(--color-border);
  flex-shrink: 0;
}
.plot-panel__player {
  font-size: 1.05rem;
  font-family: var(--font-mono);
  font-weight: bold;
  min-width: 62px;
}
.plot-panel__prompt {
  flex: 1;
  color: var(--color-text-muted);
  font-size: 0.82rem;
}
/* ── Player tab row ── */
.plot-tab-row {
  display: flex;
  flex-shrink: 0;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg-panel);
}
.plot-tab {
  flex: 1;
  padding: 7px 12px;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  font-size: 0.82rem;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: color 0.15s, border-color 0.15s, background 0.15s;
}
.plot-tab:hover { background: var(--color-bg-card); }
.plot-tab--active { font-weight: bold; }
.plot-tab__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
  flex-shrink: 0;
  animation: pp-pulse 1.2s ease-in-out infinite;
}
@keyframes pp-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.2; } }

/* ── Segment slots — compact to leave more room for card grid ── */
.plot-slots {
  display: flex;
  gap: 8px;
  padding: 7px 10px;
  justify-content: center;
  flex-shrink: 0;
  border-bottom: 1px solid var(--color-border);
}
.plot-slot {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.plot-slot__label {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-muted);
}
.plot-slot__card {
  position: relative;
  width: 76px;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  border: 2px solid var(--color-accent);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.15s;
}
.plot-slot__card:hover { transform: translateY(-2px); }
.plot-slot__img {
  width: 76px;
  height: 101px;
  object-fit: cover;
}
.plot-slot__name {
  font-size: 0.6rem;
  padding: 2px 3px;
  background: rgba(0,0,0,0.75);
  width: 100%;
  text-align: center;
  line-height: 1.2;
}
.plot-slot__clear {
  position: absolute;
  top: 3px;
  right: 3px;
  background: rgba(0,0,0,0.65);
  color: #fff;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.55rem;
}
.plot-slot__empty {
  width: 76px;
  height: 115px;
  border: 2px dashed var(--color-border);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  font-size: 0.65rem;
}
/* Locked slots shown when viewing opponent */
.plot-slot-locked {
  flex: 1;
  height: 115px;
  border: 2px dashed var(--color-border);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: var(--color-text-muted);
  font-size: 0.68rem;
  opacity: 0.5;
}
.plot-slot-locked__hint {
  font-size: 0.58rem;
  color: var(--color-text-muted);
}

/* ── Zone tabs: compact single-row horizontal selector ── */
.plot-zone-tabs {
  display: flex;
  gap: 5px;
  padding: 6px 10px;
  flex-shrink: 0;
  border-bottom: 1px solid var(--color-border);
  overflow-x: auto;
  scrollbar-width: none;
}
.plot-zone-tabs::-webkit-scrollbar { display: none; }
.plot-zone-tab {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border: 1px solid var(--color-border);
  border-radius: 5px;
  background: var(--color-bg-panel);
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: border-color 0.15s, background 0.15s;
  font-size: 0.68rem;
}
.plot-zone-tab:not(:disabled):hover {
  border-color: var(--color-accent);
  background: var(--color-bg-card);
}
.plot-zone-tab--active { background: var(--color-bg-card); }
.plot-zone-tab:disabled { opacity: 0.5; cursor: default; }
.plot-zone-tab__icon { font-size: 1rem; line-height: 1; }
.plot-zone-tab__label { color: var(--color-text-muted); }
.plot-zone-tab__count {
  font-family: var(--font-mono);
  font-weight: bold;
  color: var(--color-text);
  font-size: 0.78rem;
}

/* ── Expanded zone viewer ── */
.plot-zone-view {
  flex: 1;
  overflow-y: auto;
  padding: 8px 10px;
  min-height: 0;
}
.plot-zone-empty {
  text-align: center;
  color: var(--color-text-muted);
  font-size: 0.78rem;
  padding: 20px 0;
}
/* Privacy message for opponent hand / locked zones */
.plot-zone-private {
  text-align: center;
  color: var(--color-text-muted);
  font-size: 0.82rem;
  padding: 28px 16px;
  line-height: 1.8;
}
.plot-zone-private__count {
  font-size: 0.72rem;
  font-family: var(--font-mono);
  color: var(--color-text-muted);
}
.plot-card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

/* ── Individual card ── */
.plot-card {
  position: relative;
  background: var(--color-bg-panel);
  border: 1px solid rgba(0, 240, 255, 0.22);
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4px;
  transition: transform 0.15s, border-color 0.15s, box-shadow 0.15s;
  gap: 2px;
}
.plot-card:not(:disabled):hover {
  border-color: var(--color-accent);
  transform: translateY(-2px);
  box-shadow: 0 0 8px rgba(0, 240, 255, 0.4);
}
.plot-card--selected {
  border-color: #ff00c8;
  box-shadow: 0 0 10px rgba(255, 0, 200, 0.5);
  transform: translateY(-3px);
}
.plot-card--readonly {
  cursor: default;
  opacity: 0.88;
}
.plot-card--readonly:hover {
  transform: none !important;
  box-shadow: none !important;
  border-color: rgba(0, 240, 255, 0.22) !important;
}
.plot-card__img {
  width: 100%;
  height: 114px;
  object-fit: cover;
}
.plot-card__name {
  font-size: 0.6rem;
  color: var(--color-text);
  padding: 2px 3px;
  text-align: center;
  line-height: 1.2;
}
.plot-card__stat {
  font-size: 0.56rem;
  color: var(--color-text-muted);
}
.plot-card__badge {
  position: absolute;
  top: 3px;
  right: 3px;
  background: rgba(0, 240, 255, 0.92);
  color: #000;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.62rem;
  font-weight: bold;
}

/* ── Confirm footer ── */
.plot-footer {
  flex-shrink: 0;
  padding: 10px 12px;
  border-top: 1px solid var(--color-border);
  background: var(--color-bg-panel);
}
.plot-confirm-btn {
  width: 100%;
  padding: 11px;
  background: transparent;
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 0.04em;
  cursor: not-allowed;
  transition: all 0.2s;
}
.plot-confirm-btn:not(:disabled) {
  cursor: pointer;
}
.plot-confirm-btn:not(:disabled):hover {
  background: rgba(0, 240, 255, 0.08);
  box-shadow: 0 0 8px rgba(0, 240, 255, 0.3);
}
`,uv=`
.pass-device-screen {
  position: fixed;
  inset: 0;
  background: rgba(13, 14, 21, 0.96);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
}
.pass-device-screen__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
  padding: 40px;
  border: 1px solid var(--color-accent);
  background: var(--color-bg-panel);
  box-shadow: var(--glow-accent);
  border-radius: 12px;
}
.pass-device-screen__icon {
  font-size: 4rem;
  filter: drop-shadow(0 0 10px rgba(0, 240, 255, 0.5));
}
.pass-device-screen__title {
  font-size: 1.4rem;
  color: var(--color-text);
  margin-bottom: -8px;
}
.pass-device-screen__player {
  font-size: 2.5rem;
  font-family: var(--font-mono);
  color: var(--color-accent);
  text-shadow: 0 0 10px rgba(0, 240, 255, 0.6);
}
.pass-device-screen__hint {
  color: var(--color-danger);
  font-size: 0.95rem;
  margin-top: 4px;
}
.pass-device-screen__countdown {
  font-size: 3rem;
  font-family: var(--font-mono);
  font-weight: bold;
  color: var(--color-text);
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pass-device-screen__btn {
  margin-top: 8px;
  padding: 14px 40px;
  background: transparent;
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
  border-radius: 8px;
  font-family: var(--font-mono);
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
}
.pass-device-screen__btn:hover {
  background: rgba(0, 240, 255, 0.15);
  box-shadow: var(--glow-accent);
}
`;function Kd(e,n){const t=vh(e,n);if(t.length===0)return n;if(t.length===1)return t[0];const r=e.players[n].position;let a=t[0],o=1/0;for(const s of t){const c=e.players[s].position,d=Math.abs(c.row-r.row)+Math.abs(c.col-r.col);d<o&&(o=d,a=s)}return a}function Im(){const{state:e,getCard:n}=Ce(),{phase:t,currentTiming:r,turnOrder:a,pendingDamage:o}=e;if(t!=="action_seg1"&&t!=="action_seg2")return null;const s=t==="action_seg1"?1:2;return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"action-hud",style:o?{display:"none"}:void 0,children:[r==="movement"&&i.jsx(pv,{seg:s,turnOrder:a,getCard:n},`mov-${s}`),(r==="ranged"||r==="melee")&&i.jsx(gv,{seg:s,getCard:n},`combat-${s}-${r}`),r==="special"&&i.jsx(xv,{seg:s,turnOrder:a,getCard:n},`special-${s}`),i.jsx("style",{children:Jd})]}),o&&i.jsxs(i.Fragment,{children:[i.jsx(vv,{pendingDamage:o,getCard:n}),i.jsx("style",{children:Jd})]})]})}function pv({seg:e,turnOrder:n,getCard:t}){const{state:r,dispatch:a,aiConfig:o,isOnline:s,localPlayerId:c,currentTurnPlayerId:d}=Ce(),{map:u,pendingDamage:p,playerIds:m}=r,[h,g]=j.useState(new Set),[f,y]=j.useState(null),[I,v]=j.useState([]),[x,b]=j.useState(null),k=j.useRef(!1),T=new Map;for(const K of m){const U=r.players[K],N=q.find(V=>V.id===U.unitId);T.set(K,o0(U,e,t,N.movement))}j.useEffect(()=>{if(!(f!==null||x!==null)&&!k.current&&!p){if(s&&c){if(d!==c)return;if(T.get(c))y(c);else{const K=r.players[c],U=e===1?K.plotSeg1:K.plotSeg2;if(!U)a({type:"ADD_LOG",message:`  ${De(c)} 未配置行动卡，跳过`});else{const N=t(U.defId);N&&N.actionType==="movement"&&a({type:"ADD_LOG",message:`  ${De(c)}【${N.nameCn}】无法发动移动`})}k.current=!0,a({type:"ADVANCE_TIMING"})}return}for(const K of n)if(!h.has(K))if(T.get(K)){y(K);return}else{const U=r.players[K],N=e===1?U.plotSeg1:U.plotSeg2;if(!N)a({type:"ADD_LOG",message:`  ${De(K)} 未配置行动卡，跳过`});else{const V=t(N.defId);V&&V.actionType==="movement"&&a({type:"ADD_LOG",message:`  ${De(K)}【${V.nameCn}】无法发动移动`})}g(V=>new Set([...V,K]));return}k.current=!0,a({type:"ADVANCE_TIMING"})}},[h,f,x,p,d]),j.useEffect(()=>{if(!f){v([]);return}const K=r.players[f],U=m.filter(R=>R!==f).map(R=>r.players[R].position),N=q.find(R=>R.id===K.unitId),V=kn(K,t,"movement"),B=Ri(K,e,t,V)||N.movement,z=li(u,K.position,B,U,V,K.facing);v(z.map(R=>R.pos))},[f,r.players,u,e]),j.useEffect(()=>{if(!f||s&&c&&f!==c||!Ye(o,f))return;const U=wa(o,f),N=setTimeout(()=>{const V=Y0(r,f,e,t,U);V&&a({type:"MOVE_UNIT",playerId:f,to:V.pos,path:V.path,finalFacing:V.finalFacing}),g(B=>new Set([...B,f])),y(null),v([])},800);return()=>clearTimeout(N)},[f]);function M(K,U){if(!f||Ye(o,f)||!I.some(V=>se(V,K)))return;let N=U;if(!N){const V=r.players[f],B=m.filter(Q=>Q!==f).map(Q=>r.players[Q].position),z=q.find(Q=>Q.id===V.unitId),R=kn(V,t,"movement"),W=Ri(V,e,t,R)||z.movement;N=Gl(u,V.position,V.facing,K,W,B,R)}a({type:"MOVE_UNIT",playerId:f,to:K,path:N==null?void 0:N.path,finalFacing:N==null?void 0:N.finalFacing}),v([]),b(f),y(null)}function E(){x&&(g(K=>new Set([...K,x])),b(null),s&&(k.current=!0,a({type:"ADVANCE_TIMING"})))}if(s&&c&&d&&d!==c&&!f&&!x)return i.jsx("div",{className:"action-hud__panel action-hud__panel--waiting",children:i.jsxs("span",{className:"action-hud__hint",children:["等待 ",De(d)," 行动中…"]})});const C=n.every(K=>!T.get(K)||h.has(K));if(!s&&C&&f===null&&x===null||s&&k.current&&f===null&&x===null)return null;if(x!==null){const K=r.players[x],U=De(x),N=pr(K.facing);return i.jsxs("div",{className:"action-hud__panel",children:[i.jsx("span",{className:"action-hud__mover",children:U}),i.jsx("span",{className:"action-hud__hint",children:"移动完毕，可选择调整机头方向（最多90°）"}),i.jsx(mv,{playerId:x,disabledFacing:N}),i.jsx("button",{className:"action-hud__skip-btn",onClick:E,children:"确认方向"})]})}const $=f?Ye(o,f):!1,D=f?De(f):"";if($)return i.jsxs("div",{className:"action-hud__panel action-hud__panel--ai-thinking",children:[i.jsxs("span",{className:"action-hud__mover",children:[D," (AI)"]}),i.jsx("span",{className:"action-hud__divider",children:"│"}),i.jsx("span",{className:"action-hud__hint",children:"思考中…"})]});const w=f?r.players[f]:null,L=f&&w?kn(w,t,"movement"):null,P=w?q.find(K=>K.id===w.unitId):null,G=f&&w&&P?Ri(w,e,t,L??void 0)||P.movement:0,Y=f?m.filter(K=>K!==f).map(K=>r.players[K].position):[];return i.jsxs(i.Fragment,{children:[f&&w&&i.jsx(fv,{reachable:I,map:u,from:w.position,fromFacing:w.facing,movementValue:G,blockedPositions:Y,aux:L??void 0,onCellClick:M}),i.jsx("div",{className:"action-hud__panel",children:f?i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"action-hud__mover",children:D}),i.jsx("span",{className:"action-hud__hint",children:"选择目标格（移动步数必须用尽；悬停可预览路径，滚轮切换路径）"}),(L==null?void 0:L.vernier)&&i.jsx("span",{className:"action-hud__aux-badge",title:"地形移动消耗-1，高低差消耗-1",children:"⚙ 喷射推进器"}),(L==null?void 0:L.wheel)&&i.jsx("span",{className:"action-hud__aux-badge",title:"移动力+2",children:"⚙ 滑轮"})]}):i.jsx("span",{className:"action-hud__hint",children:"计算移动路径中…"})})]})}function mv({playerId:e,disabledFacing:n}){const{state:t,dispatch:r}=Ce(),o=t.players[e].facing,s=[{facing:"N",label:"↑N"},{facing:"E",label:"E→"},{facing:"S",label:"↓S"},{facing:"W",label:"←W"}];return i.jsxs("div",{className:"facing-compass",title:"调整机头朝向（不可掉头）",children:[i.jsx("span",{className:"facing-compass__label",children:"机头"}),s.map(({facing:c,label:d})=>{const u=c===n;return i.jsx("button",{className:["facing-compass__btn",o===c?"facing-compass__btn--active":"",u?"facing-compass__btn--disabled":""].join(" ").trim(),onClick:()=>{u||r({type:"ADJUST_FACING",playerId:e,facing:c})},disabled:u,title:u?"无法180°掉头":`朝${c}方`,children:d},c)})]})}function fv({reachable:e,map:n,from:t,fromFacing:r,movementValue:a,blockedPositions:o,aux:s,onCellClick:c}){const d=j.useRef({allPaths:[],selectedIdx:0,hoveredPos:null}),[u,p]=j.useState(0),m=()=>p(h=>h+1);return j.useEffect(()=>{document.querySelectorAll(".board-cell--path-ghost").forEach(x=>x.classList.remove("board-cell--path-ghost"));const{allPaths:h,selectedIdx:g,hoveredPos:f}=d.current;if(!f||h.length===0)return;const y=h[g];if(!y)return;const I=y.path.slice(0,-1);for(const x of I){const b=document.querySelector(`.board-cell[data-row="${x.row}"][data-col="${x.col}"]`);b==null||b.classList.add("board-cell--path-ghost")}const v=document.querySelector(`.board-cell[data-row="${f.row}"][data-col="${f.col}"]`);return v&&(v.dataset.pathLabel=h.length>1?`${g+1}/${h.length}`:""),()=>{document.querySelectorAll(".board-cell--path-ghost").forEach(x=>x.classList.remove("board-cell--path-ghost")),v&&delete v.dataset.pathLabel}},[u]),j.useEffect(()=>{const h=[];document.querySelectorAll(".board-cell--reachable").forEach(g=>{g.classList.remove("board-cell--reachable")});for(const g of e){const f=document.querySelector(`.board-cell[data-row="${g.row}"][data-col="${g.col}"]`);if(!f)continue;f.classList.add("board-cell--reachable");const y=()=>{const{allPaths:D,selectedIdx:w}=d.current;c(g,D[w]??null)},I=()=>{const D=gd(n,t,r,g,a,o,s);d.current={allPaths:D,selectedIdx:0,hoveredPos:g},m()},v=()=>{d.current={allPaths:[],selectedIdx:0,hoveredPos:null},m()},x=D=>{const{allPaths:w,selectedIdx:L}=d.current;if(w.length<=1)return;D.preventDefault();const P=D.deltaY>0?1:-1;d.current={...d.current,selectedIdx:(L+P+w.length)%w.length},m()};let b=null,k=0,T=0,M=!1;const E=D=>{k=D.touches[0].clientX,T=D.touches[0].clientY,M=!1,b=setTimeout(()=>{M=!0;const w=gd(n,t,r,g,a,o,s);d.current={allPaths:w,selectedIdx:0,hoveredPos:g},m()},400)},C=()=>{b&&(clearTimeout(b),b=null),M&&(d.current={allPaths:[],selectedIdx:0,hoveredPos:null},m()),M=!1},$=D=>{if(!M)return;const w=D.touches[0].clientX-k,L=D.touches[0].clientY-T;if(Math.abs(w)>40||Math.abs(L)>40){const{allPaths:P,selectedIdx:G}=d.current;if(P.length<=1)return;const Y=Math.abs(w)>Math.abs(L)?w>0?1:-1:L>0?1:-1;d.current={...d.current,selectedIdx:(G+Y+P.length)%P.length},m(),k=D.touches[0].clientX,T=D.touches[0].clientY}};f.addEventListener("click",y),f.addEventListener("mouseenter",I),f.addEventListener("mouseleave",v),f.addEventListener("wheel",x,{passive:!1}),f.addEventListener("touchstart",E,{passive:!0}),f.addEventListener("touchend",C),f.addEventListener("touchcancel",C),f.addEventListener("touchmove",$,{passive:!0}),h.push(()=>{b&&clearTimeout(b),f.removeEventListener("click",y),f.removeEventListener("mouseenter",I),f.removeEventListener("mouseleave",v),f.removeEventListener("wheel",x),f.removeEventListener("touchstart",E),f.removeEventListener("touchend",C),f.removeEventListener("touchcancel",C),f.removeEventListener("touchmove",$)})}return()=>{document.querySelectorAll(".board-cell--reachable").forEach(g=>g.classList.remove("board-cell--reachable")),document.querySelectorAll(".board-cell--path-ghost").forEach(g=>g.classList.remove("board-cell--path-ghost")),document.querySelectorAll(".board-cell[data-path-label]").forEach(g=>delete g.dataset.pathLabel),d.current={allPaths:[],selectedIdx:0,hoveredPos:null},h.forEach(g=>g())}},[e,n,t,r,a,o,s,c]),null}function km({reachable:e,onCellClick:n}){return j.useEffect(()=>(document.querySelectorAll(".board-cell").forEach(r=>{r.classList.remove("board-cell--reachable"),r.onclick=null}),e.forEach(r=>{const a=document.querySelector(`.board-cell[data-row="${r.row}"][data-col="${r.col}"]`);a&&(a.classList.add("board-cell--reachable"),a.onclick=()=>n(r))}),()=>{document.querySelectorAll(".board-cell--reachable").forEach(r=>{r.classList.remove("board-cell--reachable"),r.onclick=null})}),[e,n]),null}function gv({seg:e,getCard:n}){const{state:t,dispatch:r,aiConfig:a,isOnline:o,localPlayerId:s,currentTurnPlayerId:c}=Ce(),{map:d,turnOrder:u,currentTiming:p,pendingDamage:m}=t,[h,g]=j.useState(new Set),[f,y]=j.useState(null),[I,v]=j.useState(null),x=j.useRef(!1),[b,k]=j.useState(!1),[T,M]=j.useState([]),[E,C]=j.useState(!1),$=p==="ranged"?"ranged":"melee",D=$==="ranged"?"射击时机":"近战时机";if(j.useEffect(()=>{if(f===null&&!x.current&&!m){if(o&&s){if(c!==s)return;const ae=t.players[s];if(zn(ae,e,$,n))y(s),k(!1),C(!1),M([]);else{const Xe=e===1?ae.plotSeg1:ae.plotSeg2;if(Xe){const Re=n(Xe.defId);Re&&($==="ranged"&&Re.actionType==="ranged"||$==="melee"&&(Re.actionType==="melee"||Re.actionType==="charge"))&&r({type:"ADD_LOG",message:`  ${De(s)}【${Re.nameCn}】条件不满足，无法发动`})}x.current=!0,r({type:"ADVANCE_TIMING"})}return}for(const ae of u){if(h.has(ae))continue;const Ie=t.players[ae];if(!zn(Ie,e,$,n)){const Re=e===1?Ie.plotSeg1:Ie.plotSeg2;if(Re){const Oe=n(Re.defId);Oe&&($==="ranged"&&Oe.actionType==="ranged"||$==="melee"&&(Oe.actionType==="melee"||Oe.actionType==="charge"))&&r({type:"ADD_LOG",message:`  ${De(ae)}【${Oe.nameCn}】条件不满足，无法发动`})}g(Oe=>new Set([...Oe,ae]));return}y(ae),k(!1),C(!1),M([]);return}x.current=!0,r({type:"ADVANCE_TIMING"})}},[h,f,m,n,c]),j.useEffect(()=>{if(!f||m||o&&s&&f!==s||!Ye(a,f))return;const Ie=wa(a,f),Xe=Kd(t,f),Re=setTimeout(()=>{if(X0(t,f,e,$,n,Ie)){const wn=t.players[f],ie=zn(wn,e,$,n),_r=(ie==null?void 0:ie.actionType)==="charge"?"RESOLVE_CHARGE":$==="ranged"?"RESOLVE_RANGED":"RESOLVE_MELEE";r({type:_r,attackerId:f,targetId:Xe})}else{const wn=t.players[f],ie=zn(wn,e,$,n);r({type:"ADD_LOG",message:`  ${De(f)} 放弃发动${ie?`【${ie.nameCn}】`:D}`})}g(wn=>new Set([...wn,f])),y(null),k(!1),C(!1),M([])},800);return()=>clearTimeout(Re)},[f,m]),o&&s&&c&&c!==s&&!f)return i.jsx("div",{className:"action-hud__panel action-hud__panel--waiting",children:i.jsxs("span",{className:"action-hud__hint",children:["等待 ",De(c)," 行动中…"]})});if(!f)return null;const w=t.players[f],L=Kd(t,f),P=t.players[L],G=p==="melee"?kn(w,n,"melee"):{vernier:!1,moveSensor:!1},Y=zn(w,e,$,n),K=(Y==null?void 0:Y.actionType)==="charge",U=Ye(a,f);let N;if(K&&$==="melee"){const ae=q.find(Xe=>Xe.id===w.unitId),Ie=q.find(Xe=>Xe.id===P.unitId);N=Ro(w,P,e,d,ae,Ie,n)}else N=Ul(w,P,e,$,d,n);const V=q.find(ae=>ae.id===w.unitId),B=q.find(ae=>ae.id===P.unitId);function z(){if(!N.canAttack||!f)return;r({type:K?"RESOLVE_CHARGE":$==="ranged"?"RESOLVE_RANGED":"RESOLVE_MELEE",attackerId:f,targetId:L}),v(`${V.nameCn} → ${B.nameCn}：造成 ${N.damage} 伤害`),g(Ie=>new Set([...Ie,f])),y(null),k(!1),C(!1),M([]),o&&(x.current=!0,r({type:"ADVANCE_TIMING"}))}function R(){if(!f)return;const ae=zn(t.players[f],e,$,n);r({type:"ADD_LOG",message:`  ${De(f)} 放弃发动${ae?`【${ae.nameCn}】`:D}`}),v(null),g(Ie=>new Set([...Ie,f])),y(null),k(!1),C(!1),M([]),o&&(x.current=!0,r({type:"ADVANCE_TIMING"}))}function W(){if(!f||b)return;const ae=hm(d,w.position,[P.position]);M(ae),C(!0)}function Q(ae){!f||!E||(r({type:"MELEE_SENSOR_MOVE",playerId:f,to:ae}),k(!0),C(!1),M([]))}function ee(){C(!1),M([])}const te=De(f),Z=N.card?K?`【${N.card.nameCn}】突击值 ${V.assault} vs 防御${B.assaultDef}`:`【${N.card.nameCn}】射程 ${N.card.rangeMin??"—"}–${N.card.rangeMax??"—"}`:null,ce=$==="melee"&&G.moveSensor&&!b;return U?i.jsxs("div",{className:"action-hud__panel action-hud__panel--ai-thinking",children:[i.jsxs("span",{className:"action-hud__mover",children:[De(f)," (AI)"]}),i.jsx("span",{className:"action-hud__divider",children:"│"}),i.jsx("span",{className:"action-hud__hint",children:"思考中…"})]}):i.jsxs(i.Fragment,{children:[E&&i.jsx(km,{reachable:T,onCellClick:Q}),!E&&i.jsx(hv,{targetPos:N.canAttack?P.position:null}),i.jsxs("div",{className:"action-hud__panel action-hud__panel--combat",children:[i.jsx("span",{className:"action-hud__mover",children:te}),i.jsx("span",{className:"action-hud__divider",children:"│"}),i.jsx("span",{className:"action-hud__timing-label",children:D}),G.moveSensor&&i.jsxs("span",{className:`action-hud__aux-badge ${b?"action-hud__aux-badge--used":""}`,title:"近战前可移动1格",children:["⚙ 移动传感器",b?"（已使用）":""]}),G.vernier&&i.jsx("span",{className:"action-hud__aux-badge",title:"地形消耗-1，高低差-1",children:"⚙ 喷射推进器"}),N.card?i.jsxs("span",{className:"action-hud__card-info",children:[Z,N.card.damage!==void 0&&i.jsxs("span",{className:"action-hud__dmg",children:[" 伤害 ",N.card.damage]})]}):i.jsxs("span",{className:"action-hud__hint",children:["无",$==="ranged"?"射击":"近战","牌"]}),i.jsx("span",{className:`action-hud__validity ${N.canAttack?"action-hud__validity--ok":"action-hud__validity--no"}`,children:N.canAttack?K?`距离 ${N.dist} ✓ → 造成 ${N.damage} 伤 / 自机反伤 ${N.counterDamage}`:`距离 ${N.dist} ✓ → ${N.damage} 伤`:N.card?N.reason:""}),I&&i.jsx("span",{className:"action-hud__result",children:I}),E?i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"action-hud__hint",children:"点击高亮格移动（传感器），或"}),i.jsx("button",{className:"action-hud__skip-btn",onClick:ee,children:"取消移动"})]}):i.jsxs(i.Fragment,{children:[ce&&i.jsx("button",{className:"action-hud__sensor-btn",onClick:W,title:"移动传感器：攻击前可移动1格",children:"传感器移动"}),i.jsx("button",{className:"action-hud__attack-btn",onClick:z,disabled:!N.canAttack,title:N.canAttack?`攻击 ${B.nameCn}`:N.reason,children:"执行攻击"}),i.jsxs("button",{className:"action-hud__skip-btn",onClick:R,children:["跳过",$==="ranged"?"射击":"近战"]})]})]})]})}function hv({targetPos:e}){return j.useEffect(()=>{if(document.querySelectorAll(".board-cell--target").forEach(n=>{n.classList.remove("board-cell--target")}),e){const n=document.querySelector(`.board-cell[data-row="${e.row}"][data-col="${e.col}"]`);n==null||n.classList.add("board-cell--target")}return()=>{document.querySelectorAll(".board-cell--target").forEach(n=>{n.classList.remove("board-cell--target")})}},[e]),null}function xv({seg:e,turnOrder:n,getCard:t}){const{state:r,dispatch:a,aiConfig:o,isOnline:s,localPlayerId:c,currentTurnPlayerId:d}=Ce(),{map:u,pendingDamage:p}=r,[m,h]=j.useState(new Set),[g,f]=j.useState(null),[y,I]=j.useState([]),v=j.useRef(!1);if(j.useEffect(()=>{if(g===null&&!v.current&&!p){if(s&&c){if(d!==c)return;const $=r.players[c],D=e===1?$.plotSeg1:$.plotSeg2,w=D?t(D.defId):null;!w||w.actionType!=="mine"&&w.actionType!=="special"?(v.current=!0,a({type:"ADVANCE_TIMING"})):f(c);return}for(const $ of n){if(m.has($))continue;const D=r.players[$],w=e===1?D.plotSeg1:D.plotSeg2,L=w?t(w.defId):null;if(!L||L.actionType!=="mine"&&L.actionType!=="special"){h(P=>new Set([...P,$]));return}f($);return}v.current=!0,a({type:"ADVANCE_TIMING"})}},[m,g,p,t,d]),j.useEffect(()=>{if(!g){I([]);return}const $=r.players[g],D=e===1?$.plotSeg1:$.plotSeg2,w=D?t(D.defId):null;if(w&&w.actionType==="mine"){const L=gm(u,$.position,1,[]);I(L)}else I([])},[g,u,e,r.players,t]),j.useEffect(()=>{if(!g||p||s&&c&&g!==c||!Ye(o,g))return;const D=wa(o,g),w=setTimeout(()=>{const L=q0(r,g,e,t,D);if(L){const P=r.players[g],G=e===1?P.plotSeg1:P.plotSeg2,Y=G?t(G.defId):null;a({type:"PLACE_MINE",playerId:g,to:L,damage:(Y==null?void 0:Y.damage)||3})}h(P=>new Set([...P,g])),f(null)},800);return()=>clearTimeout(w)},[g,p]),s&&c&&d&&d!==c&&!g)return i.jsx("div",{className:"action-hud__panel action-hud__panel--waiting",children:i.jsxs("span",{className:"action-hud__hint",children:["等待 ",De(d)," 行动中…"]})});if(!g)return null;const x=r.players[g],b=e===1?x.plotSeg1:x.plotSeg2,k=b?t(b.defId):null,T=De(g),M=Ye(o,g);function E(){h($=>new Set([...$,g])),f(null),s&&(v.current=!0,a({type:"ADVANCE_TIMING"}))}function C($){!g||!k||k.actionType!=="mine"||y.some(D=>se(D,$))&&(a({type:"PLACE_MINE",playerId:g,to:$,damage:k.damage||3}),h(D=>new Set([...D,g])),f(null),s&&(v.current=!0,a({type:"ADVANCE_TIMING"})))}return M?i.jsxs("div",{className:"action-hud__panel action-hud__panel--ai-thinking",children:[i.jsxs("span",{className:"action-hud__mover",children:[T," (AI)"]}),i.jsx("span",{className:"action-hud__divider",children:"│"}),i.jsx("span",{className:"action-hud__hint",children:"思考中…"})]}):i.jsxs(i.Fragment,{children:[y.length>0&&i.jsx(km,{reachable:y,onCellClick:C}),i.jsxs("div",{className:"action-hud__panel action-hud__panel--special",children:[i.jsx("span",{className:"action-hud__mover",children:T}),i.jsx("span",{className:"action-hud__divider",children:"│"}),i.jsx("span",{className:"action-hud__timing-label",children:"特殊时机"}),i.jsx("span",{className:"action-hud__card-info",children:k?`【${k.nameCn}】效果`:"（无）"}),(k==null?void 0:k.actionType)==="mine"?i.jsx("span",{className:"action-hud__hint",children:"请点击高亮格部署机雷，或"}):i.jsx("span",{className:"action-hud__hint",children:"暂无此牌效果支持，请"}),i.jsx("button",{className:"action-hud__skip-btn",onClick:E,children:"跳过"})]})]})}function vv({pendingDamage:e,getCard:n}){const{state:t,dispatch:r,aiConfig:a,isOnline:o,localPlayerId:s}=Ce(),{targetId:c,remaining:d,selectedInstanceIds:u}=e,{zoom:p,getZoomHandlers:m}=vr(),[h,g]=j.useState(null),f=t.players[c];Et(f);const y=u.length===0,I=!!e.attackerId&&y&&!e.attackerDesignatedCardId,v=I?e.attackerId:c,x=De(v),b=o&&s&&v!==s,k=!b&&Ye(a,v),T=wa(a,v),M=!o&&!k&&v!==h;j.useEffect(()=>{k?g(v):o||g(null)},[v,k,o]),j.useEffect(()=>{if(!k||b||d<=0)return;const K=t.players[c],U=ka(K),N=t.playerIds.filter(z=>z!==c&&t.teams[z]!==t.teams[c]&&!t.players[z].isDefeated),V=N.length>0?t.players[N[0]]:K,B=setTimeout(()=>{if(U.length>0){const z=Q0(e,K,n,T,I,V);r(z?{type:"SELECT_DAMAGE_CARD",playerId:v,instanceId:z}:{type:"CONFIRM_DAMAGE_SELECTION",playerId:v})}else r({type:"CONFIRM_DAMAGE_SELECTION",playerId:v})},600);return()=>clearTimeout(B)},[d,v,k,b,t.players]);function E(K){r({type:"SELECT_DAMAGE_CARD",playerId:v,instanceId:K})}function C(){r({type:"CONFIRM_DAMAGE_SELECTION",playerId:v})}if(b)return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"damage-pass-overlay",children:i.jsxs("div",{className:"damage-pass-card",children:[i.jsx("p",{className:"damage-pass__eyebrow",children:"— 伤害分配 —"}),i.jsx("h2",{className:"damage-pass__title",children:"等待对手选择"}),i.jsx("div",{className:"damage-pass__player",children:x}),i.jsx("p",{className:"damage-pass__context",children:I?"【瞄准加成】攻方正在指定要摧毁的卡牌…":`${x} 正在选择要摧毁的 ${d} 张卡牌…`}),i.jsx("div",{className:"damage-pass__spinner",children:"⏳"})]})}),i.jsx("style",{children:Bd})]});if(M)return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"damage-pass-overlay",children:i.jsxs("div",{className:"damage-pass-card",children:[i.jsx("p",{className:"damage-pass__eyebrow",children:"— 伤害分配 —"}),i.jsx("h2",{className:"damage-pass__title",children:"请将设备交给"}),i.jsx("div",{className:"damage-pass__player",children:x}),i.jsx("p",{className:"damage-pass__context",children:I?"【瞄准加成】攻方有权指定第一张要摧毁的卡牌":`防方选择要摧毁的 ${d} 张卡牌（可自动分配）`}),i.jsxs("button",{className:"damage-pass__btn",onClick:()=>g(v),children:[x," 已准备"]})]})}),i.jsx("style",{children:Bd})]});const $=f.hand.filter(K=>!K.destroyed),D=f.plotSeg1&&!f.plotSeg1.destroyed?[f.plotSeg1]:[],w=f.plotSeg2&&!f.plotSeg2.destroyed?[f.plotSeg2]:[],L=f.auxiliary.filter(K=>!K.destroyed),P=f.deck.filter(K=>!K.destroyed),G=[];$.length>0&&G.push({label:"手牌",cards:$}),D.length>0&&G.push({label:"布局格",sublabel:"主要阶段1",cards:D}),w.length>0&&G.push({label:"布局格",sublabel:"主要阶段2",cards:w}),L.length>0&&G.push({label:"辅助区",cards:L});const Y=P[0]??null;return i.jsxs("div",{className:"action-hud",children:[i.jsxs("div",{className:"action-hud__panel action-hud__panel--damage",children:[i.jsxs("div",{className:"damage-panel__header",children:[i.jsx("span",{className:"damage-panel__title",children:"⚔️ 伤害分配"}),i.jsx("span",{className:"damage-panel__player",children:I?`${x} (瞄准指定)`:x}),i.jsxs("span",{className:"damage-panel__remaining",children:["还需摧毁 ",i.jsx("strong",{children:d})," 张卡牌"]})]}),(e.destroyedBombCount??0)>0&&i.jsxs("div",{className:"damage-panel__bomb-alert",children:["💣 已选中 ",e.destroyedBombCount," 张炸弹卡，选完后将进行誘爆检查"]}),i.jsx("div",{className:"damage-panel__hint",children:I?`【瞄准加成】攻方有权指定第一张要摧毁的卡牌！请 ${x} 选择：`:e.source==="ranged"?"射击伤害：须先从手牌 / 布局格 / 辅助区选择卡牌破坏，不足部分自动从牌组顶破坏。":"牌组与弃牌区已耗尽，近战伤害切换为自选模式。请从手牌 / 布局格 / 辅助区选择。"}),i.jsxs("div",{className:"damage-panel__zones",children:[G.map((K,U)=>i.jsxs("div",{className:"damage-zone",children:[i.jsxs("span",{className:"damage-zone__label",children:[K.label,K.sublabel&&i.jsxs("span",{className:"damage-zone__sub",children:["（",K.sublabel,"）"]})]}),i.jsx("div",{className:"damage-zone__cards",children:K.cards.map(N=>{const V=n(N.defId),B=(V==null?void 0:V.nameCn)??N.defId,z=u.includes(N.instanceId),R=V!=null&&V.frontImageId?`/assets/${V.frontImageId}`:null;return i.jsxs("button",{className:`damage-card-btn ${z?"damage-card-btn--selected":""} ${V!=null&&V.hasBombIcon?"damage-card-btn--bomb":""}`,onClick:()=>E(N.instanceId),disabled:z,title:`${B} (${(V==null?void 0:V.actionType)??"?"})${V!=null&&V.hasBombIcon?" ⚠️ 含诱爆":""}`,...R?m(R):{},children:[i.jsx("span",{className:"damage-card-btn__name",children:B}),(V==null?void 0:V.isKaiVariant)&&i.jsx("span",{className:"damage-card-btn__det",title:"改型",children:"◆"}),(V==null?void 0:V.hasBombIcon)&&i.jsx("span",{className:"damage-card-btn__det damage-card-btn__bomb-icon",title:"诱爆卡",children:"💣"})]},N.instanceId)})})]},U)),Y&&e.source!=="ranged"&&i.jsxs("div",{className:"damage-zone",children:[i.jsxs("span",{className:"damage-zone__label",children:["卡组",i.jsxs("span",{className:"damage-zone__sub",children:["（共 ",P.length," 张，正面朝下）"]})]}),i.jsx("div",{className:"damage-zone__cards",children:i.jsxs("button",{className:"damage-card-btn damage-card-btn--deck",onClick:()=>E(Y.instanceId),title:"从卡组顶部翻开并摧毁 1 张（诱爆正常触发）",children:[i.jsx("span",{className:"damage-card-btn__deck-back",children:"🂠"}),i.jsx("span",{className:"damage-card-btn__name",children:"顶部 × 1"})]})})]}),Y&&e.source==="ranged"&&i.jsxs("div",{className:"damage-zone",children:[i.jsxs("span",{className:"damage-zone__label",children:["卡组",i.jsxs("span",{className:"damage-zone__sub",children:["（共 ",P.length," 张）"]})]}),i.jsx("div",{className:"damage-zone__cards",children:i.jsxs("div",{className:"damage-card-btn damage-card-btn--deck",style:{opacity:.5,cursor:"default"},title:"射击伤害的牌组部分将在选完表牌后自动从顶部破坏",children:[i.jsx("span",{className:"damage-card-btn__deck-back",children:"🂠"}),i.jsx("span",{className:"damage-card-btn__name",children:"自动破坏"})]})})]})]}),i.jsx("div",{className:"damage-panel__actions",children:i.jsx("button",{className:"action-hud__skip-btn",onClick:C,title:"剩余伤害将从牌库顶部自动摧毁",children:"自动分配剩余伤害"})})]}),i.jsx(yr,{zoom:p})]})}const Jd=`
.action-hud {
  /* Always above all DraggablePanels (panels are capped at z-index ~15) */
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 500;
}

.action-hud__panel {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 20px;
  background: rgba(22, 33, 62, 0.95);
  border: 1px solid var(--color-accent);
  border-radius: 8px;
  backdrop-filter: blur(4px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.5);
}

.action-hud__mover {
  font-weight: bold;
  color: var(--color-accent);
  font-size: 1rem;
}
.action-hud__hint {
  color: var(--color-text-muted);
  font-size: 0.9rem;
}
.action-hud__skip-btn {
  padding: 6px 16px;
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 0 5px transparent;
}
.action-hud__skip-btn:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
  box-shadow: 0 0 10px rgba(0, 240, 255, 0.4) inset;
}

/* Facing compass */
.facing-compass {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
}
.facing-compass__label {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
  margin-right: 4px;
  font-family: var(--font-mono);
}
.facing-compass__btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 0.7rem;
  font-family: var(--font-mono);
  cursor: pointer;
  transition: all 0.15s;
}
.facing-compass__btn:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
  box-shadow: 0 0 6px rgba(0, 240, 255, 0.3);
}
.facing-compass__btn--active {
  background: rgba(0, 240, 255, 0.15);
  border-color: var(--color-accent);
  color: var(--color-accent);
  box-shadow: 0 0 8px rgba(0, 240, 255, 0.4);
  font-weight: bold;
}
.facing-compass__btn--disabled,
.facing-compass__btn--disabled:hover {
  opacity: 0.25;
  cursor: not-allowed;
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.2);
  box-shadow: none;
}

/* Auxiliary effects badge */
.action-hud__aux-badge {
  padding: 2px 8px;
  background: rgba(0, 240, 100, 0.12);
  border: 1px solid rgba(0, 240, 100, 0.4);
  border-radius: 4px;
  color: #55ee88;
  font-size: 0.75rem;
  font-family: var(--font-mono);
  white-space: nowrap;
}
.action-hud__aux-badge--used {
  opacity: 0.4;
  border-color: rgba(100, 100, 100, 0.4);
  color: rgba(150, 150, 150, 0.7);
  background: rgba(100, 100, 100, 0.08);
}

/* Sensor move button */
.action-hud__sensor-btn {
  padding: 6px 14px;
  background: rgba(0, 200, 120, 0.12);
  border: 1px solid rgba(0, 200, 120, 0.5);
  color: #44ddaa;
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
}
.action-hud__sensor-btn:hover {
  background: rgba(0, 200, 120, 0.25);
  border-color: #44ddaa;
  box-shadow: 0 0 10px rgba(0, 200, 120, 0.3);
}

/* AI thinking indicator */
.action-hud__panel--ai-thinking {
  opacity: 0.7;
  font-style: italic;
  color: var(--color-text-muted);
  letter-spacing: 0.05em;
}

/* Combat panel layout */
.action-hud__panel--combat {
  flex-wrap: wrap;
  gap: 8px 14px;
  max-width: 640px;
}
.action-hud__divider {
  color: var(--color-border);
  font-size: 0.9rem;
}
.action-hud__timing-label {
  color: #ffb800;
  font-weight: bold;
  font-size: 0.9rem;
  text-shadow: 0 0 8px rgba(255, 184, 0, 0.6);
}
.action-hud__card-info {
  color: var(--color-text);
  font-size: 0.88rem;
  font-family: var(--font-mono);
}
.action-hud__dmg {
  color: var(--color-danger);
  font-weight: bold;
  margin-left: 4px;
  text-shadow: var(--glow-danger);
}
.action-hud__validity {
  font-size: 0.82rem;
  font-weight: bold;
}
.action-hud__validity--ok  { color: #55ee88; }
.action-hud__validity--no  { color: #ff7070; }
.action-hud__result {
  color: #f0c040;
  font-size: 0.82rem;
  font-style: italic;
}
.action-hud__attack-btn {
  padding: 6px 18px;
  background: rgba(255, 0, 60, 0.15);
  border: 1px solid var(--color-danger);
  color: var(--color-danger);
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: bold;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 0 10px rgba(255, 0, 60, 0.2) inset;
}
.action-hud__attack-btn:not(:disabled):hover {
  background: rgba(255, 0, 60, 0.35);
  color: #fff;
  box-shadow: 0 0 15px rgba(255, 0, 60, 0.6) inset, 0 0 10px rgba(255, 0, 60, 0.4);
}
.action-hud__attack-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  filter: grayscale(1);
}

/* ── Damage Selection Panel ── */
.action-hud__panel--damage {
  flex-direction: column;
  gap: 10px;
  max-width: 600px;
  min-width: 360px;
}

.damage-panel__header {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.damage-panel__title {
  font-weight: bold;
  font-size: 1rem;
  color: #ff8844;
}

.damage-panel__player {
  font-weight: bold;
  color: var(--color-accent, #4488ff);
}

.damage-panel__remaining {
  color: #ff6666;
  font-size: 0.9rem;
}

.damage-panel__remaining strong {
  font-size: 1.1rem;
  color: #ff4444;
}

.damage-panel__hint {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.4;
}

/* ── Bomb detonation alert ── */
.damage-panel__bomb-alert {
  padding: 6px 12px;
  background: rgba(255, 100, 20, 0.18);
  border: 1px solid #ff8844;
  border-radius: 4px;
  color: #ff8844;
  font-size: 0.82rem;
  font-weight: bold;
  text-align: center;
  animation: bomb-pulse 0.8s ease-in-out infinite alternate;
}
@keyframes bomb-pulse {
  from { box-shadow: 0 0 4px rgba(255,136,68,0.3); }
  to   { box-shadow: 0 0 12px rgba(255,136,68,0.7); }
}

/* ── Zone-grouped card display ── */
.damage-panel__zones {
  display: flex;
  flex-direction: column;
  gap: 6px;
  max-height: 220px;
  overflow-y: auto;
}

.damage-zone {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.damage-zone__label {
  font-size: 0.68rem;
  color: rgba(255, 255, 255, 0.45);
  font-family: var(--font-mono);
  letter-spacing: 0.06em;
  padding: 0 2px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.damage-zone__sub {
  color: rgba(255, 255, 255, 0.3);
  margin-left: 4px;
}

.damage-zone__cards {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.damage-card-btn {
  padding: 5px 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.08);
  color: #eee;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.78rem;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: all 0.12s;
}

.damage-card-btn:hover:not(:disabled) {
  border-color: #ff6644;
  background: rgba(255, 100, 70, 0.2);
  color: #fff;
}

/* Bomb cards get an amber border to warn the player */
.damage-card-btn--bomb {
  border-color: rgba(255, 136, 68, 0.5);
  background: rgba(255, 136, 68, 0.08);
}
.damage-card-btn--bomb:hover:not(:disabled) {
  border-color: #ff8844;
  background: rgba(255, 136, 68, 0.22);
}

.damage-card-btn--selected,
.damage-card-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  text-decoration: line-through;
}

.damage-card-btn__name {
  white-space: nowrap;
}

.damage-card-btn__det {
  color: #ff6060;
  font-weight: bold;
  font-size: 0.9rem;
}

.damage-card-btn__bomb-icon {
  font-size: 0.8rem;
}

/* Deck top-card button — visually distinct (face-down card style) */
.damage-card-btn--deck {
  border-color: rgba(100, 160, 255, 0.4);
  background: rgba(60, 100, 200, 0.12);
  gap: 6px;
}
.damage-card-btn--deck:hover:not(:disabled) {
  border-color: #6ab4ff;
  background: rgba(60, 130, 255, 0.22);
  color: #fff;
}
.damage-card-btn__deck-back {
  font-size: 1.1rem;
  line-height: 1;
  color: rgba(150, 190, 255, 0.7);
}

.damage-panel__actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
`,Bd=`
.damage-pass-overlay {
  position: fixed;
  inset: 0;
  z-index: 510;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.88);
  backdrop-filter: blur(3px);
}

.damage-pass-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 360px;
  width: 100%;
  padding: 40px 48px;
  background: var(--color-bg-panel);
  border: 1px solid #ff8844;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(255, 136, 68, 0.25);
}

.damage-pass__eyebrow {
  margin: 0;
  font-size: 0.75rem;
  color: #ff8844;
  font-family: var(--font-mono);
  letter-spacing: 0.12em;
  text-align: center;
}

.damage-pass__title {
  margin: 0;
  font-size: 1rem;
  color: var(--color-text-muted);
  font-weight: normal;
  text-align: center;
}

.damage-pass__player {
  font-size: 2.2rem;
  font-weight: bold;
  color: #ff8844;
  text-shadow: 0 0 12px rgba(255, 136, 68, 0.7);
  text-align: center;
  font-family: var(--font-mono);
}

.damage-pass__context {
  margin: 0;
  font-size: 0.82rem;
  color: var(--color-text-muted);
  text-align: center;
  line-height: 1.5;
}

.damage-pass__btn {
  padding: 12px 32px;
  background: rgba(255, 136, 68, 0.12);
  border: 1px solid #ff8844;
  color: #ff8844;
  border-radius: 6px;
  font-family: var(--font-mono);
  font-size: 1rem;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition: all 0.2s;
}

.damage-pass__btn:hover {
  background: rgba(255, 136, 68, 0.28);
  box-shadow: 0 0 15px rgba(255, 136, 68, 0.45);
}
`;function yv({onBack:e}){return i.jsxs("div",{className:"rules-page",children:[i.jsxs("div",{className:"rules-page__header",children:[i.jsx("button",{className:"rules-back-btn",onClick:e,children:"← 返回"}),i.jsx("h1",{className:"rules-page__title",children:"游戏规则"}),i.jsx("span",{className:"rules-page__subtitle",children:"エムブリオマシン"})]}),i.jsxs("div",{className:"rules-page__body",children:[i.jsxs("section",{className:"rules-section",children:[i.jsx("h2",{className:"rules-section__title",children:"游戏概述"}),i.jsx("p",{children:"《胚胎机器》是一款双人对战策略游戏。每位玩家控制一台战机（机体），通过秘密布置行动牌来控制机体的移动与战斗。 当对手满足任意一项败北条件时，本方获胜。"})]}),i.jsxs("section",{className:"rules-section",children:[i.jsx("h2",{className:"rules-section__title",children:"准备阶段"}),i.jsxs("ol",{className:"rules-list",children:[i.jsx("li",{children:"双方各选择一台机体，机体自带专属牌组。"}),i.jsx("li",{children:"选择地图，确定双方初始出生区域（地图短边中央3格）。"}),i.jsxs("li",{children:["将各自牌组洗混，游戏开始时双方各抽取等同于本机",i.jsx("b",{children:"回避值"}),"数量的手牌。"]}),i.jsx("li",{children:"双方机体初始机头朝向对手方向（玩家1朝南，玩家2朝北）。"})]})]}),i.jsxs("section",{className:"rules-section",children:[i.jsx("h2",{className:"rules-section__title",children:"回合流程"}),i.jsxs("div",{className:"rules-flow",children:[i.jsxs("div",{className:"rules-flow__step",children:[i.jsx("span",{className:"rules-flow__num",children:"1"}),i.jsxs("div",{children:[i.jsx("strong",{children:"抽牌阶段"}),i.jsxs("p",{children:["双方各从牌组顶抽取等同于自己机体",i.jsx("b",{children:"回避值"}),"数量的牌。若牌组耗尽，废弃区的牌重新洗混后继续抽取。"]})]})]}),i.jsxs("div",{className:"rules-flow__step",children:[i.jsx("span",{className:"rules-flow__num",children:"2"}),i.jsxs("div",{children:[i.jsx("strong",{children:"布局阶段"}),i.jsxs("p",{children:["双方各自秘密为",i.jsx("b",{children:"主要阶段1"}),"和",i.jsx("b",{children:"主要阶段2"}),"各布置一张行动牌（面朝下）， 然后将设备交给对方进行同样操作。双方确认后，翻开亮牌，进入行动阶段。"]})]})]}),i.jsxs("div",{className:"rules-flow__step",children:[i.jsx("span",{className:"rules-flow__num",children:"3"}),i.jsxs("div",{children:[i.jsx("strong",{children:"行动主要阶段1 & 主要阶段2"}),i.jsxs("p",{children:["每个段落依次经历四个时机：",i.jsx("b",{children:"移动 → 射击 → 近战 → 特殊"}),'。 每个时机内，双方按该时机的优先顺序依次行动（详见"行动顺序"）。']})]})]}),i.jsxs("div",{className:"rules-flow__step",children:[i.jsx("span",{className:"rules-flow__num",children:"4"}),i.jsxs("div",{children:[i.jsx("strong",{children:"清理阶段"}),i.jsx("p",{children:"将已布置的牌（主要阶段1→主要阶段2顺序）和手中剩余的牌全部放入废弃区，准备下一回合。"})]})]})]})]}),i.jsxs("section",{className:"rules-section",children:[i.jsx("h2",{className:"rules-section__title",children:"行动顺序与先制值"}),i.jsxs("p",{children:["每台机体有固定的",i.jsx("b",{children:"先制值（数字越大越快）"}),"。先制值高的玩家在每个时机优先行动，但不同时机的排序逻辑有所不同："]}),i.jsxs("ul",{className:"rules-list",children:[i.jsxs("li",{children:[i.jsx("b",{children:"移动时机："}),"先比较该段落的",i.jsx("b",{children:"移动牌面数值"}),"（移动值大的先动）；移动值相同时再比先制值。"]}),i.jsxs("li",{children:[i.jsx("b",{children:"射击/近战/特殊时机："}),"直接按",i.jsx("b",{children:"先制值"}),"排序（高者先行动）。"]}),i.jsxs("li",{children:[i.jsx("b",{children:"平局处理："}),"先制值相同时，玩家1优先行动。"]})]})]}),i.jsxs("section",{className:"rules-section",children:[i.jsx("h2",{className:"rules-section__title",children:"机头朝向与攻击扇区"}),i.jsxs("p",{children:["每台机体具有明确的",i.jsx("b",{children:"机头朝向"}),"（N/S/E/W），初始朝向对手方向。"]}),i.jsxs("ul",{className:"rules-list",children:[i.jsxs("li",{children:[i.jsx("b",{children:"攻击限制："}),"射击攻击只能对准",i.jsx("b",{children:"机体正前方（含正侧方延长线）180°扇区"}),"内的目标。目标在机体正后方时无法射击。"]}),i.jsxs("li",{children:[i.jsx("b",{children:"朝向更新："}),"机体移动后，机头自动朝向移动方向。"]}),i.jsxs("li",{children:[i.jsx("b",{children:"手动调整："}),'可在白兵时机前使用"调整朝向"按钮免费更改机头方向，无需消耗任何牌。']}),i.jsxs("li",{children:[i.jsx("b",{children:"近战无扇区限制："}),"白兵/突击攻击不受前方扇区约束，可攻击相邻格的敌方。"]})]}),i.jsx("p",{className:"rules-note",children:"注：扇区边界（正侧方延长线上的格子）视为前方，可以攻击。"})]}),i.jsxs("section",{className:"rules-section",children:[i.jsx("h2",{className:"rules-section__title",children:"行动时机说明"}),i.jsxs("div",{className:"rules-timing-grid",children:[i.jsxs("div",{className:"rules-timing-card",children:[i.jsx("span",{className:"rules-timing-icon",children:"🏃"}),i.jsx("strong",{children:"移动时机"}),i.jsxs("p",{children:["若该段落布局的是",i.jsx("b",{children:"移动牌"}),"，则可在地图上移动。移动力数值决定可移动格数；地形代价和高度差均额外消耗移动力。无移动牌则自动跳过。"]})]}),i.jsxs("div",{className:"rules-timing-card",children:[i.jsx("span",{className:"rules-timing-icon",children:"🎯"}),i.jsx("strong",{children:"射击时机"}),i.jsxs("p",{children:["若该段落布局的是",i.jsx("b",{children:"射击牌"}),"，可对正前方扇区内、射程范围内且视线通畅的敌方发动远程攻击。若",i.jsx("b",{children:"主要阶段1布置了瞄准牌"}),"，则主要阶段2的射击伤害额外+1。"]})]}),i.jsxs("div",{className:"rules-timing-card",children:[i.jsx("span",{className:"rules-timing-icon",children:"⚔️"}),i.jsx("strong",{children:"近战时机"}),i.jsxs("p",{children:["若该段落布局的是",i.jsx("b",{children:"近战牌"}),"，可对",i.jsx("b",{children:"相邻格（切比雪夫距离=1）"}),"的敌方发动近战攻击，无扇区限制。主要阶段1有瞄准牌时，主要阶段2的近战伤害也+1。"]})]}),i.jsxs("div",{className:"rules-timing-card",children:[i.jsx("span",{className:"rules-timing-icon",children:"⚡"}),i.jsx("strong",{children:"特殊时机"}),i.jsxs("p",{children:[i.jsx("b",{children:"突击牌"}),"→冲锋至目标相邻格再发动突击；",i.jsx("b",{children:"机雷牌"}),"→在附近格部署机雷；",i.jsx("b",{children:"护甲牌"}),"→在本时机被动生效（减少受到的伤害）。无特殊牌则跳过。"]})]})]})]}),i.jsxs("section",{className:"rules-section",children:[i.jsx("h2",{className:"rules-section__title",children:"移动规则"}),i.jsxs("p",{children:["移动时，机体从当前格出发按移动牌数值进行扩展，每进入一个格子消耗对应地形的基础代价 ",i.jsx("b",{children:"加上高度差"}),"："]}),i.jsxs("table",{className:"rules-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"地形"}),i.jsx("th",{children:"基础移动代价"}),i.jsx("th",{children:"战斗效果"})]})}),i.jsxs("tbody",{children:[i.jsxs("tr",{children:[i.jsx("td",{children:"平地"}),i.jsx("td",{children:"1"}),i.jsx("td",{children:"无"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"砂地"}),i.jsx("td",{children:"1"}),i.jsx("td",{children:"无"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"废墟"}),i.jsx("td",{children:"2"}),i.jsx("td",{children:"无"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"森林"}),i.jsx("td",{children:"2"}),i.jsx("td",{children:"处于其中的机体受到射击伤害 −1（掩护）"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"高地"}),i.jsx("td",{children:"1 + 高度差*"}),i.jsx("td",{children:"可遮蔽视线（高地墙）；本身无伤害加成"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"水域"}),i.jsx("td",{children:"3"}),i.jsx("td",{children:"在其中发射能量武器时伤害 −1"})]})]})]}),i.jsx("p",{className:"rules-note",children:"* 高度差代价：进入比当前格海拔更高的地形时，额外消耗等同于高度差的移动力（例如从海拔0进入海拔2，共消耗 1+2=3 点）。下坡无额外代价。"}),i.jsx("p",{className:"rules-note",children:"注：机体不能占据对手所在的格子。移动途中触碰到敌方机雷将立即停止并引爆。"})]}),i.jsxs("section",{className:"rules-section",children:[i.jsx("h2",{className:"rules-section__title",children:"射程、视线与距离衰减"}),i.jsxs("p",{children:["距离使用",i.jsx("b",{children:"切比雪夫距离"}),"（8方向棋格距离：行差与列差的最大值）。 射击牌有最小射程和最大射程，目标须在此范围内。"]}),i.jsx("p",{children:"视线（LOS）检查规则："}),i.jsxs("ul",{className:"rules-list",children:[i.jsxs("li",{children:[i.jsx("b",{children:"森林不阻断视线，"}),"但能为处于其中的机体提供掩护（受击伤害-1）。"]}),i.jsxs("li",{children:[i.jsx("b",{children:"高地阻断："}),"若射线上存在海拔高于攻防双方的高地格，则视线被遮挡，无法射击。"]}),i.jsx("li",{children:"其他地形（平地、砂地、废墟、水域）均不影响视线。"})]}),i.jsxs("p",{children:[i.jsx("b",{children:"距离衰减（部分武器）："}),'部分武器卡设有"最佳射程"，超出最佳射程后每多1格伤害递减（递减值见卡面），但不超过最大射程仍可开火。']})]}),i.jsxs("section",{className:"rules-section",children:[i.jsx("h2",{className:"rules-section__title",children:"伤害与摧毁"}),i.jsxs("p",{children:["攻击命中后，系统计算最终伤害值，然后进入",i.jsx("b",{children:"伤害分配"}),"。伤害来源不同，分配规则不同："]}),i.jsx("p",{children:i.jsx("b",{children:"🎯 射击伤害（防守方自由选择）："})}),i.jsxs("ul",{className:"rules-list",children:[i.jsxs("li",{children:["防守方可自由选择要摧毁的牌，范围包括：手牌、辅助区、",i.jsx("b",{children:"已布局的牌（主要阶段1/2）"}),"以及牌组中的牌。"]}),i.jsx("li",{children:'每次选1张，直至选满伤害值。也可点击"确认"将剩余伤害交由系统从牌组顶端自动处理。'}),i.jsxs("li",{children:[i.jsx("b",{children:"使用了瞄准牌的射击："}),"攻击方额外获得一项权利——可",i.jsx("b",{children:"指定"}),"防守方必须销毁的第一张牌。"]})]}),i.jsx("p",{children:i.jsx("b",{children:"⚔️ 白兵/突击伤害（强制翻牌库顶）："})}),i.jsxs("ul",{className:"rules-list",children:[i.jsx("li",{children:"防守方无权选择，系统直接从牌库顶翻牌销毁，数量等于最终伤害值。"}),i.jsx("li",{children:"牌库翻完后从废弃区重洗继续。"})]}),i.jsx("p",{children:i.jsx("b",{children:"💣 爆弹标记诱爆："})}),i.jsxs("ul",{className:"rules-list",children:[i.jsxs("li",{children:["若被摧毁的牌带有",i.jsx("b",{children:"爆弹标记（💣）"}),"，将额外追加摧毁1张牌（从牌库顶强制翻出）。"]}),i.jsxs("li",{children:["该额外摧毁",i.jsx("b",{children:"不会"}),"再触发新的连锁诱爆（每次伤害结算中仅触发1次诱爆）。"]}),i.jsx("li",{children:'注意：◆标记是区分"改"型变种卡的符号，与诱爆无关。'})]}),i.jsx("p",{className:"rules-note",children:"注：若牌组耗尽，继续从废弃区（重新洗混后）取牌销毁。"})]}),i.jsxs("section",{className:"rules-section",children:[i.jsx("h2",{className:"rules-section__title",children:"卡牌类型"}),i.jsxs("table",{className:"rules-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"类型"}),i.jsx("th",{children:"使用时机"}),i.jsx("th",{children:"说明"})]})}),i.jsxs("tbody",{children:[i.jsxs("tr",{children:[i.jsx("td",{children:"移动牌"}),i.jsx("td",{children:"移动时机"}),i.jsx("td",{children:"按牌面数值移动；机体沿4方向移动，移动后机头自动朝向移动方向"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"射击牌"}),i.jsx("td",{children:"射击时机"}),i.jsx("td",{children:"远程攻击，需在机头前方扇区内、射程内且视线通畅；部分武器具有距离衰减"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"近战牌"}),i.jsx("td",{children:"近战时机"}),i.jsx("td",{children:"攻击相邻格（切比雪夫距离=1）的敌方，无扇区限制"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"突击牌"}),i.jsx("td",{children:"特殊时机"}),i.jsx("td",{children:"先冲锋至目标相邻格，再以（突击值−被突击防御值）为基础伤害发动突击；白兵/突击伤害强制从牌库顶翻出"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"护甲牌"}),i.jsx("td",{children:"被动防御"}),i.jsx("td",{children:"布局后，本段受到攻击时每张护甲牌抵消1点伤害"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"瞄准牌"}),i.jsx("td",{children:"攻击辅助"}),i.jsxs("td",{children:["布置于",i.jsx("b",{children:"主要阶段1"}),"时，使",i.jsx("b",{children:"主要阶段2"}),"的射击/近战/突击攻击伤害+1，且攻方可指定防守方销毁目标"]})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"机雷牌"}),i.jsx("td",{children:"特殊时机"}),i.jsx("td",{children:"在机体周围格部署机雷；敌方移动途经该格时自动引爆，造成机雷伤害"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"特殊牌"}),i.jsx("td",{children:"—"}),i.jsx("td",{children:"ダミー等占位牌，无实际效果"})]})]})]})]}),i.jsxs("section",{className:"rules-section",children:[i.jsx("h2",{className:"rules-section__title",children:"胜利条件"}),i.jsx("p",{children:"每次伤害结算结束后，系统自动检查双方是否满足败北条件。满足任意一条即判败："}),i.jsxs("ul",{className:"rules-list",children:[i.jsxs("li",{children:[i.jsx("b",{children:"牌组耗尽："}),"尚未进入破坏区的所有牌（手牌 + 牌库 + 辅助区 + ",i.jsx("b",{children:"已布局的牌"}),"）总数 ≤ 3"]}),i.jsxs("li",{children:[i.jsx("b",{children:"战力耗尽："}),"所有",i.jsx("b",{children:"攻击牌"}),"（射击牌、近战牌、突击牌）均被摧毁"]})]}),i.jsxs("ul",{className:"rules-list",children:[i.jsxs("li",{children:["若对手率先满足败北条件 → ",i.jsx("b",{children:"己方获胜"})]}),i.jsxs("li",{children:["若双方同时满足 → ",i.jsx("b",{children:"平局"})]})]})]}),i.jsxs("section",{className:"rules-section",children:[i.jsx("h2",{className:"rules-section__title",children:"高级效果速查"}),i.jsxs("table",{className:"rules-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"效果"}),i.jsx("th",{children:"触发条件"}),i.jsx("th",{children:"具体效果"})]})}),i.jsxs("tbody",{children:[i.jsxs("tr",{children:[i.jsx("td",{children:"瞄准"}),i.jsx("td",{children:"主要阶段1布局瞄准牌 + 主要阶段2布局攻击牌"}),i.jsxs("td",{children:["主要阶段2的射击/近战/突击伤害+1；且攻方可指定防守方",i.jsx("b",{children:"必须"}),"销毁的第一张牌"]})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"装甲"}),i.jsx("td",{children:"防守方在被攻击段落布局了护甲牌"}),i.jsx("td",{children:"每张护甲牌抵消1点最终伤害（下限为0）"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"森林掩护"}),i.jsx("td",{children:"防守方站在森林格中被射击"}),i.jsx("td",{children:"受到的射击伤害 −1（近战/突击无此效果）"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"水域衰减"}),i.jsx("td",{children:"攻击方站在水域中使用能量武器射击"}),i.jsx("td",{children:"射击伤害 −1"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"突击冲锋"}),i.jsx("td",{children:"突击牌布局后在特殊时机选择目标"}),i.jsx("td",{children:'先自动移动至目标相邻格，再造成（突击值−被突击防御）点伤害；伤害来源为"突击"，强制从牌库顶翻出'})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"机雷部署"}),i.jsx("td",{children:"机雷牌布局后在特殊时机选择格子"}),i.jsx("td",{children:"放置机雷标记；敌方途经时立即停止并承受机雷伤害，机雷随即消失"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"💣 爆弹诱爆"}),i.jsx("td",{children:"带爆弹标记（💣）的牌被摧毁时"}),i.jsx("td",{children:"额外从牌库顶翻出1张牌强制销毁；该额外销毁不再触发新的连锁"})]})]})]})]}),i.jsxs("section",{className:"rules-section rules-section--diff",children:[i.jsx("h2",{className:"rules-section__title rules-section__title--diff",children:"⚠ 本版本与官方原版的已知差异"}),i.jsx("p",{className:"rules-note",children:"以下是本网游版出于实现便捷性而保留的简化，与桌游官方规则（规则书/FAQ）存在差异。"}),i.jsxs("table",{className:"rules-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"规则项"}),i.jsx("th",{children:"本版本实现"}),i.jsx("th",{children:"官方原版规则"})]})}),i.jsxs("tbody",{children:[i.jsxs("tr",{children:[i.jsx("td",{children:"诱爆机制"}),i.jsx("td",{children:"爆弹牌被销毁时立即追加1次额外销毁，连锁止于1层"}),i.jsx("td",{children:"所有伤害结算完毕后，统计本次被销毁的爆弹牌数N，从牌库顶翻N张：其中有爆弹标记的被销毁，无标记的入废弃堆（可能触发多轮连锁）"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"射击伤害选牌顺序"}),i.jsx("td",{children:"防守方可自由从任意区域（含牌库）选择销毁目标"}),i.jsx("td",{children:"应优先从手牌、辅助区、布局区中选择，牌库最后选取"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"回避掷骰"}),i.jsx("td",{children:"未实现；机体回避值仅影响抽牌数量"}),i.jsx("td",{children:"攻击命中前需进行回避判定；回避值影响躲避成功率"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"先制平局"}),i.jsx("td",{children:"先制值相同时玩家1固定优先"}),i.jsx("td",{children:"应由队伍标记物编号（チームチット番号）决定"})]}),i.jsxs("tr",{children:[i.jsx("td",{children:"对战模式"}),i.jsx("td",{children:"本机热座 1v1"}),i.jsx("td",{children:"官方支持最多 4v4 双人组队对战"})]})]})]})]})]}),i.jsx("style",{children:bv})]})}const bv=`
.rules-page {
  min-height: 100%;
  background: var(--color-bg);
  display: flex;
  flex-direction: column;
}

.rules-page__header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 24px;
  background: var(--color-bg-panel);
  border-bottom: 1px solid var(--color-border);
}

.rules-back-btn {
  padding: 6px 16px;
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: border-color 0.15s;
  white-space: nowrap;
}
.rules-back-btn:hover { border-color: var(--color-accent); color: var(--color-accent); }

.rules-page__title {
  font-size: 1.4rem;
  color: var(--color-accent);
  margin: 0;
}
.rules-page__subtitle {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  font-style: italic;
}

.rules-page__body {
  max-width: 800px;
  margin: 0 auto;
  padding: 32px 24px 64px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.rules-section {
  border-left: 3px solid var(--color-accent);
  padding-left: 20px;
}

.rules-section--diff {
  border-left-color: #b8860b;
}

.rules-section__title {
  font-size: 1.15rem;
  color: var(--color-accent);
  margin-bottom: 12px;
}

.rules-section__title--diff {
  color: #b8860b;
}

.rules-section p {
  font-size: 0.95rem;
  color: var(--color-text);
  line-height: 1.7;
  margin-bottom: 8px;
}

.rules-list {
  padding-left: 20px;
  margin: 8px 0;
  color: var(--color-text);
  font-size: 0.95rem;
  line-height: 1.7;
}
.rules-list li { margin-bottom: 4px; }

.rules-note {
  font-size: 0.82rem !important;
  color: var(--color-text-muted) !important;
  font-style: italic;
}

/* Flow steps */
.rules-flow {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.rules-flow__step {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}
.rules-flow__num {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  min-width: 28px;
  background: var(--color-accent);
  color: white;
  border-radius: 50%;
  font-weight: bold;
  font-size: 0.85rem;
}
.rules-flow__step div { flex: 1; }
.rules-flow__step strong {
  display: block;
  margin-bottom: 4px;
  color: var(--color-text);
  font-size: 0.95rem;
}
.rules-flow__step p {
  font-size: 0.88rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin: 0;
}

/* Timing cards */
.rules-timing-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 8px;
}
@media (max-width: 560px) {
  .rules-timing-grid { grid-template-columns: 1fr; }
}
.rules-timing-card {
  background: var(--color-bg-panel);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 14px;
}
.rules-timing-icon { font-size: 1.5rem; display: block; margin-bottom: 6px; }
.rules-timing-card strong { color: var(--color-text); display: block; margin-bottom: 6px; }
.rules-timing-card p { font-size: 0.82rem; color: var(--color-text-muted); line-height: 1.6; margin: 0; }

/* Table */
.rules-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.88rem;
  margin: 8px 0;
}
.rules-table th {
  text-align: left;
  padding: 6px 12px;
  background: var(--color-bg-panel);
  color: var(--color-text-muted);
  font-size: 0.75rem;
  text-transform: uppercase;
  border-bottom: 1px solid var(--color-border);
}
.rules-table td {
  padding: 7px 12px;
  color: var(--color-text);
  border-bottom: 1px solid rgba(255,255,255,0.04);
}
.rules-table td:first-child { color: var(--color-accent); font-weight: 500; }

code {
  background: rgba(255,255,255,0.08);
  padding: 1px 5px;
  border-radius: 3px;
  font-size: 0.85em;
}
`;function _v({onBack:e}){const[n,t]=j.useState("maps");return i.jsxs("div",{className:"data-page",children:[i.jsxs("div",{className:"data-page__header",children:[i.jsx("button",{className:"data-page__back",onClick:e,children:"← 返回"}),i.jsx("h1",{className:"data-page__title",children:"游戏资料"})]}),i.jsxs("div",{className:"data-page__tabs",children:[i.jsx("button",{className:`data-tab ${n==="maps"?"data-tab--active":""}`,onClick:()=>t("maps"),children:"地图"}),i.jsx("button",{className:`data-tab ${n==="units"?"data-tab--active":""}`,onClick:()=>t("units"),children:"机体"}),i.jsx("button",{className:`data-tab ${n==="cards"?"data-tab--active":""}`,onClick:()=>t("cards"),children:"卡牌"})]}),i.jsxs("div",{className:"data-page__content",children:[n==="maps"&&i.jsx(Iv,{}),n==="units"&&i.jsx(wv,{}),n==="cards"&&i.jsx(Sv,{})]}),i.jsx("style",{children:Mv})]})}const jm={plain:"#8fbc5a",sand:"#d4b483",rubble:"#9e8f7a",forest:"#2d7a2d",water:"#4477cc",highland:"#c4955a"},wm={plain:"平地",sand:"沙地",rubble:"瓦砾",forest:"森林",water:"水域",highland:"高地"};function Iv(){const[e,n]=j.useState(En[0].id),t=En.find(r=>r.id===e);return i.jsxs("div",{className:"maps-panel",children:[i.jsx("div",{className:"maps-panel__selector",children:En.map(r=>i.jsx("button",{className:`map-sel-btn ${r.id===e?"map-sel-btn--active":""}`,onClick:()=>n(r.id),children:r.nameCn},r.id))}),i.jsxs("div",{className:"maps-panel__body",children:[i.jsx(kv,{map:t}),i.jsx(jv,{})]})]})}function kv({map:e}){const n=new Set(e.startZones[0].map(r=>`${r.row},${r.col}`)),t=new Set(e.startZones[1].map(r=>`${r.row},${r.col}`));return i.jsxs("div",{className:"mini-map-wrapper",children:[i.jsxs("div",{className:"mini-map__title",children:[e.nameCn,"（",e.width,"×",e.height,"）"]}),i.jsx("div",{className:"mini-map__grid",style:{gridTemplateColumns:`repeat(${e.width}, 28px)`,gridTemplateRows:`repeat(${e.height}, 28px)`},children:e.cells.flatMap((r,a)=>r.map((o,s)=>{const c=`${a},${s}`,d=n.has(c),u=t.has(c),p=jm[o.terrain]??"#888";return i.jsxs("div",{className:"mini-map__cell",style:{background:p},title:`(${s},${a}) ${wm[o.terrain]??o.terrain}${o.terrain==="highland"?" Lv"+o.elevation:""}`,children:[d&&i.jsx("span",{className:"mini-map__marker mini-map__marker--p1",children:"①"}),u&&i.jsx("span",{className:"mini-map__marker mini-map__marker--p2",children:"②"}),o.terrain==="highland"&&i.jsx("span",{className:"mini-map__elev",children:o.elevation})]},c)}))})]})}function jv(){return i.jsxs("div",{className:"map-legend",children:[i.jsx("div",{className:"map-legend__title",children:"地形图例"}),Object.entries(wm).map(([e,n])=>i.jsxs("div",{className:"map-legend__item",children:[i.jsx("span",{className:"map-legend__swatch",style:{background:jm[e]}}),i.jsx("span",{children:n})]},e)),i.jsxs("div",{className:"map-legend__item",children:[i.jsx("span",{className:"map-legend__marker-demo mini-map__marker--p1",children:"①"}),i.jsx("span",{children:"玩家1出发区"})]}),i.jsxs("div",{className:"map-legend__item",children:[i.jsx("span",{className:"map-legend__marker-demo mini-map__marker--p2",children:"②"}),i.jsx("span",{children:"玩家2出发区"})]}),i.jsx("div",{className:"map-legend__note",children:"高地格显示海拔等级（1–3），移动力消耗与平地相同，提供射程视野优势。"})]})}function wv(){return i.jsxs("div",{className:"units-panel",children:[i.jsxs("table",{className:"units-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"机体"}),i.jsx("th",{children:"日文名"}),i.jsx("th",{children:"型号"}),i.jsx("th",{children:"先制"}),i.jsx("th",{children:"移动"}),i.jsx("th",{children:"回避"}),i.jsx("th",{children:"突击"}),i.jsx("th",{children:"防突击"})]})}),i.jsx("tbody",{children:[...q].sort((e,n)=>e.initiative-n.initiative).map(e=>i.jsxs("tr",{children:[i.jsxs("td",{className:"units-table__name",children:[i.jsx("img",{src:`/assets/tokens/${e.tokenId}`,alt:e.nameCn,className:"units-table__token",onError:n=>{n.target.style.display="none"}}),e.nameCn]}),i.jsx("td",{className:"units-table__ja",children:e.nameJa}),i.jsx("td",{children:e.type}),i.jsx("td",{className:"units-table__num",children:e.initiative}),i.jsx("td",{className:"units-table__num",children:e.movement}),i.jsx("td",{className:"units-table__num",children:e.evasion}),i.jsx("td",{className:"units-table__num",children:e.assault}),i.jsx("td",{className:"units-table__num",children:e.assaultDef})]},e.id))})]}),i.jsxs("div",{className:"units-note",children:[i.jsx("strong",{children:"型号说明："}),"SS/S/M/L/LL = 体型；軽/中/重 = 重量等级；単座 = 单人驾驶。 先制值越小先手越快，移动值为每回合最大移动格数，回避值为被击中时消耗的伤害数量。"]})]})}const Sm={movement:"移动",ranged:"射击",melee:"近战",special:"特殊",mine:"机雷",aim:"瞄准",armor:"装甲",charge:"突击",auxiliary:"辅助"},Cm={movement:"#66ccaa",ranged:"#4499ee",melee:"#ff9944",special:"#cc88ff",mine:"#ff6688",aim:"#ffdd44",armor:"#88aacc",charge:"#ff6644",auxiliary:"#aaaacc"};function Sv(){const e=Object.keys(ua),[n,t]=j.useState(e[0]),r=ua[n]??[];let a=n;const o=q.find(s=>n.startsWith(s.deckCode));return o&&(n.endsWith("+")?a=`${o.nameCn} (Plus)`:a=o.nameCn),i.jsxs("div",{className:"cards-panel",children:[i.jsx("div",{className:"cards-panel__unit-tabs",children:e.map(s=>{const c=q.find(p=>s.startsWith(p.deckCode));let d=s,u=null;return c&&(u=`/assets/tokens/${c.tokenId}`,d=s.endsWith("+")?`${c.nameCn}+`:c.nameCn),i.jsxs("button",{className:`unit-tab ${s===n?"unit-tab--active":""}`,onClick:()=>t(s),children:[u&&i.jsx("img",{src:u,alt:d,className:"unit-tab__token",onError:p=>{p.target.style.display="none"}}),i.jsx("span",{children:d})]},s)})}),i.jsxs("div",{className:"cards-panel__header",children:[i.jsx("span",{className:"cards-panel__unit-name",children:a}),i.jsxs("span",{className:"cards-panel__count",children:["共 ",r.length," 张卡牌"]})]}),i.jsx("div",{className:"cards-panel__summary",children:i.jsx(Cv,{deck:r})}),i.jsx("div",{className:"cards-panel__list",children:r.map(s=>i.jsx(Nv,{card:s},s.id))})]})}function Cv({deck:e}){const n={};for(const t of e)n[t.actionType]=(n[t.actionType]??0)+1;return i.jsx("div",{className:"card-type-summary",children:Object.entries(n).sort(([t],[r])=>t.localeCompare(r)).map(([t,r])=>i.jsxs("span",{className:"card-type-badge",style:{background:Cm[t]??"#888"},children:[Sm[t]??t," ×",r]},t))})}function Nv({card:e}){const n=Sm[e.actionType]??e.actionType,t=Cm[e.actionType]??"#888",{zoom:r,getZoomHandlers:a}=vr(),o=`/assets/${e.frontImageId}`;let s="";return e.actionType==="movement"&&e.movementValue!==void 0?s=`移动 ${e.movementValue}`:(e.actionType==="ranged"||e.actionType==="melee")&&e.damage!==void 0?e.rangeMin!==void 0&&e.rangeMax!==void 0?s=`射程 ${e.rangeMin}–${e.rangeMax}  伤害 ${e.damage}`:s=`伤害 ${e.damage}`:e.actionType==="charge"&&e.damage!==void 0&&(s=`伤害 ${e.damage}`),i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"card-row",...a(o),children:[i.jsx("div",{className:"card-row__image-wrap",children:i.jsx("img",{src:o,alt:e.nameCn,className:"card-row__image",onError:c=>{c.target.style.display="none"}})}),i.jsx("span",{className:"card-row__type",style:{background:t},children:n}),i.jsx("span",{className:"card-row__name",children:e.nameCn}),e.effectText?i.jsx("span",{className:"card-row__effect",children:e.effectText}):s&&i.jsx("span",{className:"card-row__detail",children:s}),e.isKaiVariant&&i.jsx("span",{className:"card-row__kai",title:"改型标记",children:"◆"}),e.hasBombIcon&&i.jsx("span",{className:"card-row__bomb",title:"诱爆",children:"💥"})]}),i.jsx(yr,{zoom:r})]})}const Mv=`
.data-page {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: var(--color-bg);
  color: var(--color-text);
}

.data-page__header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 24px;
  background: var(--color-bg-panel);
  border-bottom: 1px solid var(--color-border);
  flex-shrink: 0;
}

.data-page__back {
  padding: 6px 14px;
  background: transparent;
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.15s;
}
.data-page__back:hover { background: rgba(var(--color-accent-rgb, 50,120,200), 0.15); }

.data-page__title {
  font-size: 1.4rem;
  color: var(--color-accent);
  margin: 0;
}

.data-page__tabs {
  display: flex;
  gap: 0;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg-panel);
  flex-shrink: 0;
}

.data-tab {
  padding: 10px 28px;
  background: transparent;
  color: var(--color-text-muted);
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  font-size: 0.95rem;
  transition: color 0.15s, border-color 0.15s;
}
.data-tab:hover { color: var(--color-text); }
.data-tab--active {
  color: var(--color-accent);
  border-bottom-color: var(--color-accent);
}

.data-page__content {
  flex: 1;
  overflow-y: auto;
  padding: 24px;
}

/* ── Maps ─────────────────────────────────── */
.maps-panel {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.maps-panel__selector {
  display: flex;
  gap: 8px;
}

.map-sel-btn {
  padding: 7px 20px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-panel);
  color: var(--color-text);
  border-radius: 4px;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
}
.map-sel-btn:hover { border-color: var(--color-accent); }
.map-sel-btn--active { border-color: var(--color-accent); background: var(--color-bg-card); }

.maps-panel__body {
  display: flex;
  gap: 32px;
  align-items: flex-start;
  flex-wrap: wrap;
}

.mini-map-wrapper { display: flex; flex-direction: column; gap: 8px; }
.mini-map__title { font-size: 0.85rem; color: var(--color-text-muted); }

.mini-map__grid {
  display: grid;
  gap: 1px;
  background: #333;
  border: 1px solid #444;
}

.mini-map__cell {
  width: 28px;
  height: 28px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.5rem;
}

.mini-map__marker {
  position: absolute;
  top: 1px;
  left: 1px;
  font-size: 0.55rem;
  line-height: 1;
  font-weight: bold;
  pointer-events: none;
}
.mini-map__marker--p1 { color: #ffe060; text-shadow: 0 0 2px #000; }
.mini-map__marker--p2 { color: #66ccff; text-shadow: 0 0 2px #000; }

.mini-map__elev {
  font-size: 0.55rem;
  color: rgba(255,255,255,0.8);
  font-weight: bold;
  pointer-events: none;
}

.map-legend {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 160px;
}
.map-legend__title {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 4px;
}
.map-legend__item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
}
.map-legend__swatch {
  width: 16px;
  height: 16px;
  border-radius: 2px;
  border: 1px solid rgba(255,255,255,0.2);
  flex-shrink: 0;
}
.map-legend__marker-demo {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
  flex-shrink: 0;
}
.map-legend__note {
  margin-top: 8px;
  font-size: 0.75rem;
  color: var(--color-text-muted);
  line-height: 1.5;
  max-width: 240px;
}

/* ── Units ────────────────────────────────── */
.units-panel {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.units-table {
  border-collapse: collapse;
  width: 100%;
  font-size: 0.9rem;
}
.units-table th {
  padding: 8px 12px;
  text-align: left;
  border-bottom: 2px solid var(--color-border);
  color: var(--color-text-muted);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  white-space: nowrap;
}
.units-table td {
  padding: 8px 12px;
  border-bottom: 1px solid var(--color-border);
  vertical-align: middle;
}
.units-table tr:hover td { background: var(--color-bg-panel); }
.units-table__name {
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  font-weight: 500;
}
.units-table__token {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: contain;
}
.units-table__ja { color: var(--color-text-muted); font-size: 0.8rem; }
.units-table__num {
  text-align: center;
  font-weight: bold;
  color: var(--color-accent);
}
.units-note {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  padding: 12px;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  background: var(--color-bg-panel);
  line-height: 1.6;
}

/* ── Cards ────────────────────────────────── */
.cards-panel {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cards-panel__unit-tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.unit-tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-panel);
  color: var(--color-text-muted);
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.75rem;
  transition: border-color 0.15s, color 0.15s;
  min-width: 60px;
}
.unit-tab:hover { border-color: var(--color-accent); color: var(--color-text); }
.unit-tab--active { border-color: var(--color-accent); color: var(--color-accent); background: var(--color-bg-card); }

.unit-tab__token {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: contain;
}

.cards-panel__header {
  display: flex;
  align-items: baseline;
  gap: 12px;
}
.cards-panel__unit-name { font-size: 1.1rem; font-weight: bold; color: var(--color-accent); }
.cards-panel__count { font-size: 0.85rem; color: var(--color-text-muted); }

.card-type-summary {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.card-type-badge {
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.78rem;
  font-weight: bold;
  color: #111;
}

.cards-panel__list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.card-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 10px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background: var(--color-bg-panel);
  font-size: 0.85rem;
  transition: background 0.1s;
}
.card-row:hover { background: var(--color-bg-card); }

.card-row__image-wrap {
  width: 32px;
  height: 44px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 2px;
  background: #333;
}
.card-row__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-row__type {
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: bold;
  color: #111;
  flex-shrink: 0;
}
.card-row__name { font-weight: 500; flex-shrink: 0; min-width: 60px; max-width: 80px; }
.card-row__effect {
  color: var(--color-text-muted);
  font-size: 0.72rem;
  line-height: 1.35;
  flex: 1;
  min-width: 0;
}
.card-row__detail { color: var(--color-text-muted); font-size: 0.78rem; flex: 1; white-space: nowrap; }
.card-row__kai {
  color: var(--color-accent);
  font-weight: bold;
  font-size: 0.85rem;
  flex-shrink: 0;
}
.card-row__bomb {
  margin-left: auto;
  flex-shrink: 0;
  font-size: 1rem;
  line-height: 1;
  title: '诱爆';
}
`;function Nm(){const{state:e,getCard:n,exposureMode:t}=Ce(),[r,a]=j.useState(null),{zoom:o,getZoomHandlers:s}=vr(),c=e.phase==="plotting"?e.plottingStep==="player2"?"player2":"player1":e.activePlayer??"player1",d=r??c,u=e.players[d],p=q.find(g=>g.id===u.unitId),m=t?!1:Tv(e),h={N:"↑北",S:"↓南",E:"→东",W:"←西"}[u.facing]??u.facing;return i.jsxs("div",{className:"mp",children:[i.jsxs("div",{className:"mp__tabs",children:[e.playerIds.map(g=>i.jsxs("button",{className:`mp__tab ${d===g?"mp__tab--active":""}`,onClick:()=>a(f=>f===g?null:g),children:[`P${e.playerIds.indexOf(g)+1}`,g===c&&i.jsx("span",{className:"mp__tab-dot"})]},g)),i.jsx("span",{className:"mp__phase-hint",children:e.phase==="plotting"?"布局中":"行动中"})]}),p&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"mp__header",children:[i.jsx("img",{src:`/assets/tokens/${p.tokenId}`,alt:p.nameCn,className:"mp__token",onError:g=>{g.target.style.opacity="0.3"}}),i.jsxs("div",{className:"mp__header-info",children:[i.jsx("div",{className:"mp__unit-name",children:p.nameCn}),i.jsx("div",{className:"mp__unit-sub",children:p.nameJa}),i.jsxs("div",{className:"mp__pos",children:["格 (",u.position.row,",",u.position.col,")   ",h]})]})]}),i.jsxs("div",{className:"mp__stats",children:[i.jsx(Dr,{label:"先制",value:p.initiative,color:"#f0c040"}),i.jsx(Dr,{label:"移动",value:p.movement,color:"#66ccaa"}),i.jsx(Dr,{label:"回避",value:p.evasion,color:"#88aaff"}),i.jsx(Dr,{label:"突击",value:p.assault,color:"#ff9944"}),i.jsx(Dr,{label:"被突",value:p.assaultDef,color:"#ff6666"})]}),i.jsxs("div",{className:"mp__zones",children:[i.jsxs("div",{className:"mp__zone mp__zone--aux",children:[i.jsx("div",{className:"mp__zone-label",children:"辅助区"}),u.auxiliary.length===0?i.jsx("div",{className:"mp__zone-empty",children:"—"}):(()=>{const g=new Map;for(const y of u.auxiliary){const I=n(y.defId),v=(I==null?void 0:I.nameJa)??y.defId,x=g.get(v);x?(x.totalCount++,y.destroyed||x.liveCount++):g.set(v,{nameCn:(I==null?void 0:I.nameCn)??y.defId,liveCount:y.destroyed?0:1,totalCount:1})}const f=y=>{const I=kn(u,n,"movement"),v=kn(u,n,"melee"),x=kn(u,n,"charge");return y==="バーニア"?I.vernier||v.vernier:y==="ムーブセンサー"?v.moveSensor:y==="ホイール"?I.wheel||x.wheel:!1};return i.jsxs(i.Fragment,{children:[u.auxiliary.map(y=>{const I=n(y.defId),v=I!=null&&I.frontImageId?`/assets/${I.frontImageId}`:null;return i.jsxs("div",{className:`mp__aux-card${y.destroyed?" mp__aux-card--destroyed":""}`,...v?s(v):{},children:[i.jsx("span",{className:"mp__aux-name",children:(I==null?void 0:I.nameCn)??y.defId}),y.destroyed&&i.jsx("span",{className:"mp__aux-dead",children:"✕"})]},y.instanceId)}),i.jsx("div",{className:"mp__aux-badges",children:Array.from(g.entries()).map(([y,I])=>{const v=f(y);return i.jsxs("div",{className:`mp__aux-status ${v?"mp__aux-status--on":"mp__aux-status--off"}`,title:v?"效果激活中":"需要≥2张存活才能激活",children:[v?"✓":"✗"," ",I.nameCn,i.jsxs("span",{className:"mp__aux-count",children:["(",I.liveCount,"/",I.totalCount,")"]})]},y)})})]})})()]}),i.jsxs("div",{className:"mp__counts",children:[i.jsx(Xa,{icon:"🃏",label:"手牌",count:u.hand.filter(g=>!g.destroyed).length}),i.jsx(Xa,{icon:"📚",label:"牌库",count:u.deck.filter(g=>!g.destroyed).length}),i.jsx(Xa,{icon:"♻️",label:"弃牌",count:u.discard.filter(g=>!g.destroyed).length}),i.jsx(Xa,{icon:"💀",label:"破坏",count:u.destroyedCards.length})]})]}),i.jsxs("div",{className:"mp__plot",children:[i.jsx("div",{className:"mp__plot-label",children:"布局段落"}),i.jsxs("div",{className:"mp__plot-slots",children:[i.jsx(Fd,{label:"主要阶段一",card:u.plotSeg1,getCard:n,hidden:m,getZoomHandlers:s}),i.jsx(Fd,{label:"主要阶段二",card:u.plotSeg2,getCard:n,hidden:m,getZoomHandlers:s})]})]})]}),i.jsx("style",{children:Ev}),i.jsx(yr,{zoom:o})]})}function Tv(e,n){return e.phase==="plotting"?e.plottingStep!=="complete":!1}function Dr({label:e,value:n,color:t}){return i.jsxs("div",{className:"mp__stat",children:[i.jsx("span",{className:"mp__stat-lbl",children:e}),i.jsx("span",{className:"mp__stat-val",style:{color:t},children:n})]})}function Xa({icon:e,label:n,count:t}){return i.jsxs("div",{className:"mp__zcount",children:[i.jsx("span",{className:"mp__zcount-icon",children:e}),i.jsx("span",{className:"mp__zcount-lbl",children:n}),i.jsx("span",{className:"mp__zcount-n",children:t})]})}function Fd({label:e,card:n,getCard:t,hidden:r,getZoomHandlers:a}){const o=n?t(n.defId):null,s=o!=null&&o.frontImageId?`/assets/${o.frontImageId}`:null;return i.jsxs("div",{className:"mp__slot",children:[i.jsx("div",{className:"mp__slot-lbl",children:e}),n?r?i.jsx("div",{className:"mp__slot-hidden",children:"???"}):i.jsxs("div",{className:"mp__slot-card",...s?a(s):{},children:[i.jsx("span",{className:"mp__slot-name",children:(o==null?void 0:o.nameCn)??n.defId}),i.jsx("span",{className:`mp__slot-type mp__slot-type--${(o==null?void 0:o.actionType)??"unknown"}`,children:(o==null?void 0:o.actionType)??"?"})]}):i.jsx("div",{className:"mp__slot-empty",children:"— 未布局 —"})]})}const Ev=`
.mp {
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  font-size: 0.8rem;
  min-width: 260px;
}
.mp__tabs {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
}
.mp__tab {
  position: relative;
  padding: 3px 12px;
  border: 1px solid rgba(0,240,255,0.2);
  background: transparent;
  color: rgba(255,255,255,0.45);
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.72rem;
  font-family: var(--font-mono);
  font-weight: bold;
  letter-spacing: 0.06em;
  transition: all 0.15s;
}
.mp__tab:hover { color: var(--color-accent); border-color: rgba(0,240,255,0.4); }
.mp__tab--active {
  background: rgba(0,240,255,0.12);
  color: var(--color-accent);
  border-color: var(--color-accent);
}
.mp__tab-dot {
  position: absolute;
  top: 3px; right: 3px;
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--color-accent);
  box-shadow: 0 0 6px var(--color-accent);
}
.mp__phase-hint {
  margin-left: auto;
  font-size: 0.65rem;
  color: rgba(255,255,255,0.3);
  font-family: var(--font-mono);
}

/* Header */
.mp__header {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 6px 8px;
  background: rgba(0,0,0,0.3);
  border-radius: 6px;
  border: 1px solid rgba(0,240,255,0.12);
}
.mp__token {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 1px solid rgba(0,240,255,0.3);
}
.mp__header-info { flex: 1; min-width: 0; }
.mp__unit-name { font-weight: bold; color: var(--color-accent); font-size: 0.88rem; }
.mp__unit-sub  { font-size: 0.65rem; color: rgba(255,255,255,0.4); margin-bottom: 2px; }
.mp__pos       { font-size: 0.7rem; color: rgba(255,255,255,0.5); font-family: var(--font-mono); }

/* Stats */
.mp__stats {
  display: flex;
  gap: 4px;
  justify-content: space-between;
}
.mp__stat {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px 2px;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 4px;
  background: rgba(0,0,0,0.25);
  min-width: 0;
}
.mp__stat-lbl { font-size: 0.6rem; color: rgba(255,255,255,0.4); margin-bottom: 1px; }
.mp__stat-val { font-family: var(--font-mono); font-weight: bold; font-size: 0.9rem; }

/* Card zones */
.mp__zones {
  display: flex;
  gap: 6px;
  align-items: flex-start;
}
.mp__zone {
  flex: 1;
  border: 1px solid rgba(0,240,255,0.15);
  border-radius: 4px;
  padding: 4px 6px;
  background: rgba(0,0,0,0.2);
  min-height: 36px;
}
.mp__zone-label {
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(0,240,255,0.5);
  margin-bottom: 3px;
  font-family: var(--font-mono);
}
.mp__zone-empty { color: rgba(255,255,255,0.2); font-size: 0.72rem; }
.mp__aux-card {
  padding: 2px 4px;
  margin-bottom: 2px;
  background: rgba(0,240,255,0.08);
  border-radius: 3px;
  border: 1px solid rgba(0,240,255,0.2);
  display: flex;
  align-items: center;
  gap: 4px;
}
.mp__aux-card--destroyed {
  opacity: 0.35;
  text-decoration: line-through;
  border-color: rgba(255,255,255,0.1);
  background: rgba(0,0,0,0.1);
}
.mp__aux-dead { font-size: 0.65rem; color: #ff5555; }
.mp__aux-name { font-size: 0.7rem; color: rgba(255,255,255,0.8); flex: 1; }

/* Activation status badges per card type */
.mp__aux-badges {
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.mp__aux-status {
  font-size: 0.65rem;
  font-family: var(--font-mono);
  padding: 1px 5px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.mp__aux-status--on {
  color: #55ee88;
  background: rgba(80, 220, 130, 0.1);
  border: 1px solid rgba(80, 220, 130, 0.3);
}
.mp__aux-status--off {
  color: rgba(160, 160, 160, 0.6);
  background: rgba(100, 100, 100, 0.08);
  border: 1px solid rgba(100, 100, 100, 0.2);
}
.mp__aux-count {
  opacity: 0.7;
  margin-left: 2px;
}
.mp__counts {
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex-shrink: 0;
  min-width: 80px;
}
.mp__zcount {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 3px 6px;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 4px;
  background: rgba(0,0,0,0.2);
}
.mp__zcount-icon { font-size: 0.8rem; }
.mp__zcount-lbl  { flex: 1; font-size: 0.68rem; color: rgba(255,255,255,0.45); }
.mp__zcount-n    { font-family: var(--font-mono); font-weight: bold; font-size: 0.85rem; }

/* Plot area */
.mp__plot {
  border-top: 1px solid rgba(0,240,255,0.12);
  padding-top: 6px;
}
.mp__plot-label {
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(0,240,255,0.45);
  font-family: var(--font-mono);
  margin-bottom: 5px;
  text-align: center;
}
.mp__plot-slots { display: flex; gap: 6px; }
.mp__slot {
  flex: 1;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 4px;
  padding: 4px 6px;
  background: rgba(0,0,0,0.25);
  text-align: center;
}
.mp__slot-lbl {
  font-size: 0.6rem;
  color: rgba(255,255,255,0.3);
  margin-bottom: 3px;
  font-family: var(--font-mono);
}
.mp__slot-hidden {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.25);
  letter-spacing: 0.1em;
  font-style: italic;
}
.mp__slot-card { display: flex; flex-direction: column; gap: 1px; }
.mp__slot-name { font-size: 0.75rem; color: var(--color-text); }
.mp__slot-type {
  font-size: 0.6rem;
  font-family: var(--font-mono);
  opacity: 0.6;
}
.mp__slot-type--movement { color: #66ccaa; }
.mp__slot-type--ranged   { color: #88aaff; }
.mp__slot-type--melee    { color: #ff9944; }
.mp__slot-type--charge   { color: #ffcc44; }
.mp__slot-type--aim      { color: #f0c040; }
.mp__slot-type--armor    { color: #aaaaaa; }
.mp__slot-type--mine     { color: #ff6666; }
.mp__slot-type--special  { color: #cc88ff; }
.mp__slot-empty {
  font-size: 0.7rem;
  color: rgba(255,255,255,0.18);
  font-style: italic;
}
`,Dv={slot_1:"存档位 1",slot_2:"存档位 2",slot_3:"存档位 3",slot_4:"存档位 4",slot_5:"存档位 5",auto:"自动存档"},$v=[...ex,"auto"];function Av(e){const n=new Date(e),t=r=>String(r).padStart(2,"0");return`${n.getFullYear()}-${t(n.getMonth()+1)}-${t(n.getDate())} ${t(n.getHours())}:${t(n.getMinutes())}`}function Gd({mode:e,onBack:n,onLoad:t,currentState:r,aiConfig:a}){const[o,s]=j.useState([]),[c,d]=j.useState(null),[u,p]=j.useState(null),[m,h]=j.useState(null),[g,f]=j.useState(null);j.useEffect(()=>{s(Id())},[]);function y(){s(Id())}function I(E){h(E),setTimeout(()=>h(null),2e3)}function v(E){return o.find(C=>C.slotId===E)}function x(E){if(!r||!a)return;if(v(E)){p(E);return}b(E)}function b(E){if(!(!r||!a))try{ym(E,r,a,!1),y(),p(null),I("存档已保存")}catch(C){f(C instanceof Error?C.message:"保存失败")}}function k(E){const C=tx(E);if(!C){f("存档数据已损坏，无法加载");return}t==null||t(C)}function T(E){rx(E),y(),d(null),I("存档已删除")}const M=e==="save"?"保存游戏":"加载存档";return i.jsxs("div",{className:"sl-screen",children:[i.jsxs("div",{className:"sl-panel",children:[i.jsx("h2",{className:"sl-title",children:M}),i.jsx("div",{className:"sl-slots",children:$v.map(E=>{const C=v(E),D=e==="save"&&!(E==="auto")&&r!=null;return i.jsxs("div",{className:`sl-slot ${C?"sl-slot--occupied":"sl-slot--empty"}`,children:[i.jsxs("div",{className:"sl-slot__label",children:[Dv[E],(C==null?void 0:C.isAutoSave)&&i.jsx("span",{className:"sl-badge",children:"自动"})]}),C?i.jsxs("div",{className:"sl-slot__info",children:[i.jsxs("span",{className:"sl-slot__units",children:[C.player1Unit," vs ",C.player2Unit]}),i.jsx("span",{className:"sl-slot__map",children:C.mapName}),i.jsxs("span",{className:"sl-slot__round",children:["第 ",C.roundNumber," 回合"]}),i.jsx("span",{className:"sl-slot__time",children:Av(C.timestamp)})]}):i.jsx("div",{className:"sl-slot__info sl-slot__empty-label",children:"空存档位"}),i.jsxs("div",{className:"sl-slot__actions",children:[e==="load"&&C&&i.jsx("button",{className:"sl-btn sl-btn--primary",onClick:()=>k(E),children:"加载"}),D&&i.jsx("button",{className:"sl-btn sl-btn--primary",onClick:()=>x(E),children:C?"覆盖":"保存"}),C&&(c===E?i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"sl-confirm-text",children:"确认删除？"}),i.jsx("button",{className:"sl-btn sl-btn--danger",onClick:()=>T(E),children:"确认"}),i.jsx("button",{className:"sl-btn",onClick:()=>d(null),children:"取消"})]}):i.jsx("button",{className:"sl-btn sl-btn--ghost",onClick:()=>d(E),children:"删除"}))]}),u===E&&i.jsxs("div",{className:"sl-overwrite",children:[i.jsx("span",{children:"覆盖此存档？"}),i.jsx("button",{className:"sl-btn sl-btn--primary",onClick:()=>b(E),children:"确认"}),i.jsx("button",{className:"sl-btn",onClick:()=>p(null),children:"取消"})]})]},E)})}),g&&i.jsxs("div",{className:"sl-error",onClick:()=>f(null),children:["⚠ ",g]}),i.jsx("button",{className:"sl-back-btn",onClick:n,children:"← 返回"})]}),m&&i.jsx("div",{className:"sl-toast",children:m}),i.jsx("style",{children:Vv})]})}const Vv=`
.sl-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: var(--color-bg);
  padding: 24px 16px;
}

.sl-panel {
  width: 100%;
  max-width: 540px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.sl-title {
  font-size: 1.4rem;
  color: var(--color-accent);
  text-align: center;
  margin: 0;
  letter-spacing: 0.06em;
}

.sl-slots {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sl-slot {
  background: var(--color-bg-panel);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: border-color 0.15s;
}

.sl-slot--occupied {
  border-color: var(--color-border);
}

.sl-slot--empty {
  opacity: 0.65;
}

.sl-slot__label {
  font-size: 0.78rem;
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  gap: 6px;
  letter-spacing: 0.04em;
}

.sl-badge {
  font-size: 0.65rem;
  background: var(--color-accent);
  color: #000;
  padding: 1px 5px;
  border-radius: 3px;
  font-weight: bold;
}

.sl-slot__info {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.85rem;
  color: var(--color-text);
}

.sl-slot__empty-label {
  color: var(--color-text-muted);
  font-style: italic;
  font-size: 0.82rem;
}

.sl-slot__units { font-weight: bold; color: var(--color-accent); }
.sl-slot__round { color: var(--color-text-muted); font-size: 0.78rem; }
.sl-slot__map   { color: var(--color-text-muted); font-size: 0.78rem; }
.sl-slot__time  { color: var(--color-text-muted); font-size: 0.72rem; margin-left: auto; }

.sl-slot__actions {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
}

.sl-confirm-text {
  font-size: 0.8rem;
  color: #ff8080;
}

.sl-overwrite {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  color: #ffcc66;
  margin-top: 4px;
}

.sl-btn {
  padding: 5px 14px;
  border-radius: 4px;
  font-size: 0.82rem;
  cursor: pointer;
  border: 1px solid var(--color-border);
  background: var(--color-bg-panel);
  color: var(--color-text);
  transition: background 0.15s, border-color 0.15s;
}
.sl-btn:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
.sl-btn--primary {
  background: var(--color-accent);
  color: #000;
  border-color: var(--color-accent);
  font-weight: bold;
}
.sl-btn--primary:hover {
  opacity: 0.85;
  color: #000;
}
.sl-btn--danger {
  border-color: #ff6060;
  color: #ff6060;
}
.sl-btn--danger:hover {
  background: #ff6060;
  color: #000;
}
.sl-btn--ghost {
  opacity: 0.55;
}
.sl-btn--ghost:hover {
  opacity: 1;
}

.sl-error {
  background: rgba(255,80,80,0.12);
  border: 1px solid #ff6060;
  color: #ff9090;
  padding: 10px 14px;
  border-radius: 5px;
  font-size: 0.85rem;
  cursor: pointer;
  text-align: center;
}

.sl-back-btn {
  align-self: center;
  padding: 9px 32px;
  background: var(--color-bg-panel);
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s;
}
.sl-back-btn:hover {
  border-color: var(--color-accent);
  color: var(--color-text);
}

.sl-toast {
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.85);
  border: 1px solid var(--color-accent);
  color: var(--color-accent);
  padding: 10px 28px;
  border-radius: 6px;
  font-size: 0.9rem;
  pointer-events: none;
  backdrop-filter: blur(4px);
  z-index: 9999;
}
`;function Pv({currentState:e}){const{rawDispatch:n}=Ce();return j.useEffect(()=>{n({type:"LOAD_GAME",state:e})},[e,n]),i.jsx("div",{style:{height:"100%",width:"100%"},children:i.jsx(ec,{})})}function zv({currentState:e}){return i.jsx(Yl,{children:i.jsx(bm,{children:i.jsx(Pv,{currentState:e})})})}function Lv({onBack:e}){const[n,t]=j.useState("list"),[r,a]=j.useState(null);function o(c){a(c),t("playback")}function s(){a(null),t("list")}return n==="playback"&&r?i.jsx(Jv,{replayData:r,onExit:s}):i.jsx(Rv,{onBack:e,onPlay:o})}function Mm(e){const n=px(e.initialState,e.actions),t=new Blob([n],{type:"text/plain;charset=utf-8"}),r=URL.createObjectURL(t),a=document.createElement("a");a.href=r;const o=new Date(e.metadata.timestamp),s=d=>String(d).padStart(2,"0"),c=`replay_${e.metadata.player1Unit}_vs_${e.metadata.player2Unit}_${o.getFullYear()}${s(o.getMonth()+1)}${s(o.getDate())}_${s(o.getHours())}${s(o.getMinutes())}.txt`;a.download=c,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(r)}function Rv({onBack:e,onPlay:n}){const[t,r]=j.useState([]),[a,o]=j.useState(null),[s,c]=j.useState(null);j.useEffect(()=>{r(kd())},[]);function d(m){const h=jd(m);if(!h){c("录像数据已损坏，无法播放");return}n(h)}function u(m){const h=jd(m);if(!h){c("录像数据已损坏，无法导出");return}Mm(h)}function p(m){ix(m),r(kd()),o(null)}return i.jsxs("div",{className:"rp-screen",children:[i.jsxs("div",{className:"rp-panel",children:[i.jsx("h2",{className:"rp-title",children:"回放录像"}),t.length===0?i.jsx("div",{className:"rp-empty",children:"暂无保存的录像"}):i.jsx("div",{className:"rp-list",children:t.map(m=>i.jsxs("div",{className:"rp-item",children:[i.jsxs("div",{className:"rp-item__info",children:[i.jsxs("span",{className:"rp-item__units",children:[m.player1Unit," vs ",m.player2Unit]}),i.jsx("span",{className:"rp-item__map",children:m.mapName}),i.jsxs("span",{className:"rp-item__rounds",children:[m.totalRounds," 回合"]}),m.winner&&i.jsx("span",{className:"rp-item__winner",children:m.winner==="draw"?"平局":`${m.winner==="player1"?"P1":"P2"} 获胜`}),i.jsx("span",{className:"rp-item__time",children:Bv(m.timestamp)})]}),i.jsxs("div",{className:"rp-item__actions",children:[i.jsx("button",{className:"rp-btn rp-btn--primary",onClick:()=>d(m.replayId),children:"▶ 播放"}),i.jsx("button",{className:"rp-btn",onClick:()=>u(m.replayId),children:"导出日志"}),a===m.replayId?i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"rp-confirm",children:"确认删除？"}),i.jsx("button",{className:"rp-btn rp-btn--danger",onClick:()=>p(m.replayId),children:"确认"}),i.jsx("button",{className:"rp-btn",onClick:()=>o(null),children:"取消"})]}):i.jsx("button",{className:"rp-btn rp-btn--ghost",onClick:()=>o(m.replayId),children:"删除"})]})]},m.replayId))}),s&&i.jsxs("div",{className:"rp-error",onClick:()=>c(null),children:["⚠ ",s]}),i.jsx("button",{className:"rp-back-btn",onClick:e,children:"← 返回"})]}),i.jsx("style",{children:Tm})]})}function Ov(e){const n=[0];let t=e.initialState;for(let r=0;r<e.actions.length;r++){const a=t.phase,o=t.roundNumber,s=t.plottingStep,c=t.currentTiming;t=mn(t,e.actions[r]),(t.phase!==a||t.roundNumber!==o||t.plottingStep!==s||t.currentTiming!==c)&&n.push(r+1)}return n[n.length-1]!==e.actions.length&&n.push(e.actions.length),n}function Ud(e,n){let t=e.initialState;for(let r=0;r<n&&r<e.actions.length;r++)t=mn(t,e.actions[r]);return t}function Kv(e,n){const t=o=>{const s=n.players[o],c=q.find(d=>d.id===s.unitId);return(c==null?void 0:c.nameCn)??o},r=o=>{const s=ne(o);return(s==null?void 0:s.nameCn)??o},a=(o,s)=>{const c=n.players[s],u=[...c.deck,...c.hand,...c.auxiliary,...c.discard,...c.destroyedCards,...c.plotSeg1?[c.plotSeg1]:[],...c.plotSeg2?[c.plotSeg2]:[]].find(p=>p.instanceId===o);return u?r(u.defId):o};switch(e.type){case"DRAW_CARDS":return`${t(e.playerId)} 抽取 ${e.count} 张牌`;case"PLOT_CARD":{const o=a(e.instanceId,e.playerId);return`${t(e.playerId)} 布局段落${e.seg}：${o}`}case"CONFIRM_PLOT":return`${t(e.playerId)} 确认布局`;case"ADVANCE_PLOT_STEP":return"布局阶段推进";case"MOVE_UNIT":return`${t(e.playerId)} 移动至 (${e.to.row},${e.to.col})`;case"ADJUST_FACING":return`${t(e.playerId)} 调整朝向 → ${e.facing}`;case"RESOLVE_RANGED":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动射击`;case"RESOLVE_MELEE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动近战`;case"RESOLVE_CHARGE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动突击`;case"PLACE_MINE":return`${t(e.playerId)} 在 (${e.to.row},${e.to.col}) 布雷 (${e.damage}伤害)`;case"SELECT_DAMAGE_CARD":{const o=a(e.instanceId,e.playerId);return`${t(e.playerId)} 选择摧毁：${o}`}case"CONFIRM_DAMAGE_SELECTION":return`${t(e.playerId)} 确认伤害结算`;case"SKIP_ACTION":return"跳过行动";case"ADVANCE_TIMING":return"推进时序";case"ADVANCE_PHASE":return"推进阶段";case"MELEE_SENSOR_MOVE":return`${t(e.playerId)} 近战传感器移动至 (${e.to.row},${e.to.col})`;case"START_PLOTTING":return"进入布局阶段";default:return e.type}}function Hd({player:e,label:n}){const t=q.find(c=>c.id===e.unitId),{zoom:r,getZoomHandlers:a}=vr(),o=c=>c.filter(d=>!d.destroyed),s={N:"↑北",S:"↓南",E:"→东",W:"←西"}[e.facing]??e.facing;return i.jsxs("div",{className:"rpp",children:[i.jsxs("div",{className:"rpp__header",children:[t&&i.jsx("img",{src:`/assets/tokens/${t.tokenId}`,alt:t.nameCn,className:"rpp__token",onError:c=>{c.target.style.opacity="0.3"}}),i.jsxs("div",{children:[i.jsxs("div",{className:"rpp__name",children:[n,": ",(t==null?void 0:t.nameCn)??e.unitId]}),i.jsxs("div",{className:"rpp__pos",children:["(",e.position.row,",",e.position.col,") ",s]})]})]}),i.jsxs("div",{className:"rpp__counts",children:[i.jsxs("span",{className:"rpp__count",title:"牌库",children:["📚",o(e.deck).length]}),i.jsxs("span",{className:"rpp__count",title:"手牌",children:["🃏",e.hand.length]}),i.jsxs("span",{className:"rpp__count",title:"弃牌",children:["♻️",e.discard.length]}),i.jsxs("span",{className:"rpp__count",title:"破坏",children:["💀",e.destroyedCards.length]})]}),i.jsx("div",{className:"rpp__section-label",children:"布局"}),i.jsxs("div",{className:"rpp__plot-row",children:[i.jsx(Wd,{label:"阶段1",card:e.plotSeg1,getZoomHandlers:a}),i.jsx(Wd,{label:"阶段2",card:e.plotSeg2,getZoomHandlers:a})]}),i.jsxs("div",{className:"rpp__section-label",children:["手牌 (",e.hand.length,")"]}),i.jsx("div",{className:"rpp__card-list",children:e.hand.length===0?i.jsx("span",{className:"rpp__empty",children:"—"}):e.hand.map(c=>i.jsx(Zd,{card:c,getZoomHandlers:a},c.instanceId))}),e.auxiliary.length>0&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"rpp__section-label",children:["辅助 (",o(e.auxiliary).length,"/",e.auxiliary.length,")"]}),i.jsx("div",{className:"rpp__card-list",children:e.auxiliary.map(c=>i.jsx(Zd,{card:c,getZoomHandlers:a},c.instanceId))})]}),i.jsx(yr,{zoom:r})]})}function Wd({label:e,card:n,getZoomHandlers:t}){const r=n?ne(n.defId):null,a=r!=null&&r.frontImageId?`/assets/${r.frontImageId}`:null,s=r?{movement:"#66ccaa",ranged:"#ff9944",melee:"#ff6060",charge:"#ff4444",aim:"#f0c040",armor:"#88aaff",mine:"#cc88ff",special:"#aaa",auxiliary:"#77ddaa"}[r.actionType]??"#888":"#555";return i.jsxs("div",{className:"rpp__plot-slot",children:[i.jsx("div",{className:"rpp__plot-label",children:e}),n&&r?i.jsxs("div",{className:"rpp__plot-card",style:{borderColor:s},...a?t(a):{},children:[i.jsx("span",{className:"rpp__plot-type",style:{color:s},children:r.actionType}),i.jsx("span",{className:"rpp__plot-name",children:r.nameCn})]}):i.jsx("div",{className:"rpp__plot-empty",children:"—"})]})}function Zd({card:e,getZoomHandlers:n}){const t=ne(e.defId),r=t!=null&&t.frontImageId?`/assets/${t.frontImageId}`:null,o=t?{movement:"#66ccaa",ranged:"#ff9944",melee:"#ff6060",charge:"#ff4444",aim:"#f0c040",armor:"#88aaff",mine:"#cc88ff",special:"#aaa",auxiliary:"#77ddaa"}[t.actionType]??"#888":"#555";return i.jsxs("span",{className:`rpp__chip${e.destroyed?" rpp__chip--dead":""}`,style:{borderColor:o},...r?n(r):{},children:[(t==null?void 0:t.nameCn)??e.defId,e.destroyed&&i.jsx("span",{className:"rpp__chip-x",children:"✕"})]})}function Jv({replayData:e,onExit:n}){const t=j.useMemo(()=>Ov(e),[e]),r=e.actions.length,[a,o]=j.useState(0),[s,c]=j.useState(e.initialState),[d,u]=j.useState(!1),[p,m]=j.useState(1),[h,g]=j.useState(""),[f,y]=j.useState(e.initialState.log.length),I=j.useRef(null),v=j.useRef(s),x=j.useRef(a);v.current=s,x.current=a;const b=j.useRef(null);j.useEffect(()=>{var U;(U=b.current)==null||U.scrollIntoView({behavior:"smooth"})},[s.log.length]);const k=j.useCallback(()=>{I.current!=null&&(clearInterval(I.current),I.current=null)},[]),T=j.useCallback(()=>{const U=x.current;if(U>=r)return k(),u(!1),!1;const N=e.actions[U],V=mn(v.current,N);return y(v.current.log.length),c(V),o(U+1),!0},[e,r,k]),M=j.useCallback(()=>{const U=x.current;if(U>=r)return;const V=t.find(R=>R>U)??r;let B=v.current;const z=B.log.length;for(let R=U;R<V;R++)B=mn(B,e.actions[R]);y(z),c(B),o(V),V>=r&&(k(),u(!1))},[e,r,t,k]),E=j.useCallback(()=>{const U=x.current,N=t.filter(z=>z<U),V=N.length>=2?N[N.length-2]:0,B=Ud(e,V);y(0),c(B),o(V)},[e,t]);j.useEffect(()=>(k(),d&&(I.current=setInterval(()=>{if(x.current>=r){k(),u(!1);return}M()},Math.round(1500/p))),k),[d,p,M,r,k]);function C(){u(U=>!U)}function $(){u(!1),y(0),c(e.initialState),o(0)}function D(){const U=parseInt(h,10);if(isNaN(U)||U<1)return;u(!1);const{state:N,actionIndex:V}=lx(e,U);y(0),c(N),o(V)}const w=a>0?e.actions[a-1]:null,L=w?Kv(w,a>=2?Ud(e,a-1):e.initialState):null,P=a>=r,G=a===0,Y={pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"行动阶段1",action_seg2:"行动阶段2",cleanup:"清理阶段",game_over:"游戏结束"},K={movement:"移动",ranged:"射击",melee:"近战",special:"特殊"};return i.jsxs("div",{className:"rpv-screen",children:[i.jsxs("div",{className:"rpv-topbar",children:[i.jsxs("span",{className:"rpv-topbar__round",children:["第 ",s.roundNumber," 回合"]}),i.jsx("span",{className:"rpv-topbar__phase",children:Y[s.phase]??s.phase}),s.currentTiming&&i.jsxs("span",{className:"rpv-topbar__timing",children:["▶ ",K[s.currentTiming]]}),i.jsx("span",{style:{flex:1}}),i.jsx("button",{className:"rpv-btn",onClick:$,disabled:G,title:"回到开始",children:"⏮"}),i.jsx("button",{className:"rpv-btn",onClick:E,disabled:G,title:"上一阶段",children:"◀◀"}),i.jsx("button",{className:"rpv-btn",onClick:()=>{u(!1),T()},disabled:P,title:"单步前进（单个操作）",children:"▶|"}),i.jsx("button",{className:"rpv-btn",onClick:()=>{u(!1),M()},disabled:P,title:"下一阶段",children:"▶▶"}),i.jsx("button",{className:"rpv-btn rpv-btn--primary",onClick:C,children:d?"⏸ 暂停":"▶ 自动"}),i.jsx("span",{className:"rpv-sep"}),i.jsx("span",{className:"rpv-label",children:"速度"}),[1,2,4].map(U=>i.jsxs("button",{className:`rpv-btn rpv-btn--speed ${p===U?"rpv-btn--active":""}`,onClick:()=>m(U),children:[U,"x"]},U)),i.jsx("span",{className:"rpv-sep"}),i.jsx("span",{className:"rpv-label",children:"跳至"}),i.jsx("input",{className:"rpv-input",type:"number",min:1,value:h,onChange:U=>g(U.target.value),onKeyDown:U=>U.key==="Enter"&&D(),placeholder:"回合"}),i.jsx("button",{className:"rpv-btn",onClick:D,children:"跳转"}),i.jsx("span",{className:"rpv-sep"}),i.jsxs("span",{className:"rpv-progress",children:[a,"/",r]}),i.jsx("button",{className:"rpv-btn",onClick:()=>Mm(e),title:"导出完整分析日志",children:"导出日志"}),i.jsx("button",{className:"rpv-btn rpv-btn--exit",onClick:n,children:"✕ 退出"})]}),i.jsxs("div",{className:"rpv-main",children:[i.jsxs("div",{className:"rpv-map-col",children:[i.jsx("div",{className:"rpv-map-area",children:i.jsx(zv,{currentState:s})}),L&&i.jsxs("div",{className:"rpv-action-desc",children:["▶ ",L]}),i.jsxs("div",{className:"rpv-log",children:[i.jsx("div",{className:"rpv-log__header",children:"行动日志"}),i.jsxs("div",{className:"rpv-log__entries",children:[s.log.map((U,N)=>{const V=N>=f;return i.jsx("div",{className:`rpv-log__entry ${Fv(U)}${V?" rpv-log__entry--new":""}`,children:U},N)}),i.jsx("div",{ref:b})]})]})]}),i.jsxs("div",{className:"rpv-info-col",children:[i.jsx(Hd,{player:s.players.player1,label:"P1"}),i.jsx("div",{className:"rpv-info-divider"}),i.jsx(Hd,{player:s.players.player2,label:"P2"})]})]}),i.jsx("style",{children:Tm}),i.jsx("style",{children:Gv})]})}function Bv(e){const n=new Date(e),t=r=>String(r).padStart(2,"0");return`${n.getFullYear()}-${t(n.getMonth()+1)}-${t(n.getDate())} ${t(n.getHours())}:${t(n.getMinutes())}`}function Fv(e){return e.startsWith("===")?"rpv-log__entry--round":e.startsWith("---")?"rpv-log__entry--sep":e.includes("发动")||e.includes("攻击")?"rpv-log__entry--attack":e.includes("摧毁")||e.includes("连锁")||e.includes("诱爆")?"rpv-log__entry--damage":e.includes("移动到")?"rpv-log__entry--move":e.includes("获胜")||e.includes("击破")||e.includes("平局")?"rpv-log__entry--victory":""}const Tm=`
.rp-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: var(--color-bg);
  padding: 24px 16px;
}

.rp-panel {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.rp-title {
  font-size: 1.4rem;
  color: var(--color-accent);
  text-align: center;
  margin: 0;
  letter-spacing: 0.06em;
}

.rp-empty {
  text-align: center;
  color: var(--color-text-muted);
  padding: 32px 0;
  font-size: 0.9rem;
}

.rp-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.rp-item {
  background: var(--color-bg-panel);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  padding: 12px 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.rp-item__info {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.85rem;
}

.rp-item__units  { font-weight: bold; color: var(--color-accent); }
.rp-item__map    { color: var(--color-text-muted); font-size: 0.78rem; }
.rp-item__rounds { color: var(--color-text-muted); font-size: 0.78rem; }
.rp-item__winner { color: #66ccaa; font-size: 0.78rem; }
.rp-item__time   { color: var(--color-text-muted); font-size: 0.72rem; margin-left: auto; }

.rp-item__actions {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
}

.rp-confirm {
  font-size: 0.8rem;
  color: #ff8080;
}

.rp-btn {
  padding: 5px 14px;
  border-radius: 4px;
  font-size: 0.82rem;
  cursor: pointer;
  border: 1px solid var(--color-border);
  background: var(--color-bg-panel);
  color: var(--color-text);
  transition: background 0.15s, border-color 0.15s;
}
.rp-btn:hover { border-color: var(--color-accent); color: var(--color-accent); }
.rp-btn--primary {
  background: var(--color-accent);
  color: #000;
  border-color: var(--color-accent);
  font-weight: bold;
}
.rp-btn--primary:hover { opacity: 0.85; color: #000; }
.rp-btn--danger  { border-color: #ff6060; color: #ff6060; }
.rp-btn--danger:hover { background: #ff6060; color: #000; }
.rp-btn--ghost   { opacity: 0.55; }
.rp-btn--ghost:hover { opacity: 1; }

.rp-error {
  background: rgba(255,80,80,0.12);
  border: 1px solid #ff6060;
  color: #ff9090;
  padding: 10px 14px;
  border-radius: 5px;
  font-size: 0.85rem;
  cursor: pointer;
  text-align: center;
}

.rp-back-btn {
  align-self: center;
  padding: 9px 32px;
  background: var(--color-bg-panel);
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s;
}
.rp-back-btn:hover { border-color: var(--color-accent); color: var(--color-text); }
`,Gv=`
/* ── Top bar ── */
.rpv-screen {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: var(--color-bg);
  overflow: hidden;
}

.rpv-topbar {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: var(--color-bg-panel);
  border-bottom: 1px solid var(--color-border);
  flex-wrap: wrap;
}
.rpv-topbar__round { color: var(--color-text-muted); font-size: 0.85rem; }
.rpv-topbar__phase { font-weight: bold; color: var(--color-accent); font-size: 0.85rem; }
.rpv-topbar__timing { color: var(--color-text-muted); font-size: 0.78rem; }

.rpv-btn {
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.78rem;
  cursor: pointer;
  border: 1px solid var(--color-border);
  background: var(--color-bg-panel);
  color: var(--color-text);
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;
}
.rpv-btn:disabled { opacity: 0.3; cursor: not-allowed; }
.rpv-btn:not(:disabled):hover { border-color: var(--color-accent); color: var(--color-accent); }
.rpv-btn--primary {
  background: var(--color-accent);
  color: #000;
  border-color: var(--color-accent);
  font-weight: bold;
  padding: 4px 14px;
}
.rpv-btn--primary:hover { opacity: 0.85; color: #000; }
.rpv-btn--speed { min-width: 32px; text-align: center; }
.rpv-btn--active { border-color: var(--color-accent); color: var(--color-accent); }
.rpv-btn--exit { border-color: #888; margin-left: 4px; }
.rpv-btn--exit:hover { border-color: #ff6060; color: #ff6060; }

.rpv-sep {
  width: 1px;
  height: 18px;
  background: var(--color-border);
  margin: 0 2px;
}

.rpv-label {
  font-size: 0.72rem;
  color: var(--color-text-muted);
  white-space: nowrap;
}

.rpv-input {
  width: 52px;
  padding: 3px 6px;
  border-radius: 4px;
  border: 1px solid var(--color-border);
  background: var(--color-bg);
  color: var(--color-text);
  font-size: 0.78rem;
  text-align: center;
}

.rpv-progress {
  font-size: 0.72rem;
  color: var(--color-text-muted);
  white-space: nowrap;
  font-family: var(--font-mono);
}

/* ── 2-column main layout: map+log left, player info right ── */
.rpv-main {
  flex: 1;
  display: flex;
  overflow: hidden;
  min-height: 0;
}

.rpv-map-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
}

.rpv-info-col {
  width: 280px;
  flex-shrink: 0;
  overflow-y: auto;
  border-left: 1px solid var(--color-border);
  padding: 6px;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.rpv-info-divider {
  height: 1px;
  background: var(--color-border);
  margin: 6px 0;
  flex-shrink: 0;
}

.rpv-map-area {
  flex: 1;
  min-height: 200px;
  overflow: hidden;
  position: relative;
}

.rpv-action-desc {
  flex-shrink: 0;
  padding: 5px 12px;
  background: rgba(0, 240, 255, 0.06);
  border-top: 1px solid rgba(0, 240, 255, 0.15);
  border-bottom: 1px solid rgba(0, 240, 255, 0.15);
  color: var(--color-accent);
  font-size: 0.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ── Log panel ── */
.rpv-log {
  flex-shrink: 0;
  height: 180px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--color-border);
}
.rpv-log__header {
  flex-shrink: 0;
  padding: 4px 12px;
  font-size: 0.72rem;
  color: rgba(0, 240, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-family: var(--font-mono);
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.rpv-log__entries {
  flex: 1;
  overflow-y: auto;
  padding: 4px 12px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.rpv-log__entry {
  font-size: 0.76rem;
  color: var(--color-text);
  padding: 1px 0;
  line-height: 1.4;
}
.rpv-log__entry--new {
  background: rgba(0, 240, 255, 0.08);
  border-radius: 2px;
  padding: 1px 4px;
}
.rpv-log__entry--round { color: #f0c040; font-weight: bold; }
.rpv-log__entry--sep   { color: var(--color-text-muted); font-style: italic; }
.rpv-log__entry--attack { color: #ff9944; }
.rpv-log__entry--damage { color: #ff6060; }
.rpv-log__entry--move   { color: #66ccaa; }
.rpv-log__entry--victory { color: var(--color-accent); font-weight: bold; }

/* ── Player panel ── */
.rpp {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 0.78rem;
}

.rpp__header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 6px;
  background: rgba(0,0,0,0.3);
  border-radius: 5px;
  border: 1px solid rgba(0,240,255,0.12);
}
.rpp__token {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 1px solid rgba(0,240,255,0.3);
}
.rpp__name {
  font-weight: bold;
  color: var(--color-accent);
  font-size: 0.82rem;
}
.rpp__pos {
  font-size: 0.68rem;
  color: rgba(255,255,255,0.5);
  font-family: var(--font-mono);
}

.rpp__counts {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.rpp__count {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-text-muted);
  padding: 2px 5px;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 3px;
  background: rgba(0,0,0,0.2);
}

.rpp__section-label {
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(0,240,255,0.5);
  font-family: var(--font-mono);
  margin-top: 2px;
  padding-left: 2px;
}

.rpp__empty { color: rgba(255,255,255,0.2); font-size: 0.72rem; }

/* Plot slots */
.rpp__plot-row {
  display: flex;
  gap: 4px;
}
.rpp__plot-slot {
  flex: 1;
  min-width: 0;
}
.rpp__plot-label {
  font-size: 0.6rem;
  color: rgba(255,255,255,0.35);
  margin-bottom: 2px;
}
.rpp__plot-card {
  padding: 3px 5px;
  background: rgba(0,0,0,0.3);
  border: 1px solid;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 1px;
}
.rpp__plot-type {
  font-size: 0.58rem;
  text-transform: uppercase;
  font-family: var(--font-mono);
  letter-spacing: 0.06em;
}
.rpp__plot-name {
  font-size: 0.74rem;
  color: rgba(255,255,255,0.9);
}
.rpp__plot-empty {
  padding: 3px 5px;
  color: rgba(255,255,255,0.2);
  font-size: 0.72rem;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 4px;
  text-align: center;
}

/* Card chips */
.rpp__card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
}
.rpp__chip {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 2px 5px;
  border: 1px solid;
  border-radius: 3px;
  font-size: 0.68rem;
  color: rgba(255,255,255,0.85);
  background: rgba(0,0,0,0.25);
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.12s;
}
.rpp__chip:hover {
  background: rgba(0,240,255,0.1);
}
.rpp__chip--dead {
  opacity: 0.3;
  text-decoration: line-through;
}
.rpp__chip-x {
  font-size: 0.6rem;
  color: #ff5555;
}
`,Uv=50;function Em(){return{terrain:"plain",elevation:0,variant:0}}function Dm(e,n){const t=Array.from({length:n},()=>Array.from({length:e},()=>Em()));return{id:`custom_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,nameJa:"新しいマップ",nameCn:"新地图",width:e,height:n,cells:t,startZones:{0:[{row:0,col:Math.floor(e/2)}],1:[{row:n-1,col:Math.floor(e/2)}]},maxPlayers:2,maxTeams:2}}function Hs(e){return{map:e??Dm(7,11),activeTool:"terrain",selectedTerrain:"plain",selectedElevation:1,selectedVariant:0,selectedZoneTeam:0,brushSize:1,isDirty:!1,undoStack:[],redoStack:[],showCoords:!1}}function mo(e){return{...e,cells:e.cells.map(n=>n.map(t=>({...t}))),startZones:Object.fromEntries(Object.entries(e.startZones).map(([n,t])=>[n,t.map(r=>({...r}))]))}}function ft(e){const n=[...e.undoStack,mo(e.map)];return n.length>Uv&&n.shift(),{...e,undoStack:n,redoStack:[],isDirty:!0}}function Yd(e,n,t,r,a,o){if(n<0||n>=e.height||t<0||t>=e.width)return e;const s=e.cells.map((c,d)=>d===n?c.map((u,p)=>p===t?{terrain:r,elevation:r==="highland"?a:0,variant:r==="highland"?a:o}:u):c);return{...e,cells:s}}function Hv(e,n){switch(n.type){case"SET_TOOL":return{...e,activeTool:n.tool};case"SET_TERRAIN":return{...e,selectedTerrain:n.terrain,activeTool:"terrain"};case"SET_ELEVATION":return{...e,selectedElevation:n.elevation};case"SET_VARIANT":return{...e,selectedVariant:n.variant};case"SET_BRUSH_SIZE":return{...e,brushSize:n.size};case"SET_ZONE_TEAM":return{...e,selectedZoneTeam:n.team};case"TOGGLE_COORDS":return{...e,showCoords:!e.showCoords};case"PAINT_CELL":{const t=ft(e),r=Yd(t.map,n.row,n.col,t.selectedTerrain,t.selectedElevation,t.selectedVariant);return{...t,map:r}}case"PAINT_AREA":{const t=ft(e);let r=t.map;for(const{row:a,col:o}of n.cells)r=Yd(r,a,o,t.selectedTerrain,t.selectedElevation,t.selectedVariant);return{...t,map:r}}case"ADD_ZONE_CELL":{const t=ft(e),{team:r,position:a}=n,o=t.map.startZones[r]??[];if(o.some(c=>c.row===a.row&&c.col===a.col))return e;const s={...t.map.startZones,[r]:[...o,a]};return{...t,map:{...t.map,startZones:s}}}case"REMOVE_ZONE_CELL":{const t=ft(e),{team:r,position:a}=n,s=(t.map.startZones[r]??[]).filter(d=>d.row!==a.row||d.col!==a.col),c={...t.map.startZones,[r]:s};return{...t,map:{...t.map,startZones:c}}}case"CLEAR_ZONE":{const t=ft(e),r={...t.map.startZones,[n.team]:[]};return{...t,map:{...t.map,startZones:r}}}case"SET_MAP_META":{const t=ft(e),r={...t.map};return n.nameJa!==void 0&&(r.nameJa=n.nameJa),n.nameCn!==void 0&&(r.nameCn=n.nameCn),n.maxPlayers!==void 0&&(r.maxPlayers=n.maxPlayers),n.maxTeams!==void 0&&(r.maxTeams=n.maxTeams),{...t,map:r}}case"RESIZE_MAP":{const t=ft(e),{newWidth:r,newHeight:a}=n,o=Array.from({length:a},(c,d)=>Array.from({length:r},(u,p)=>d<t.map.height&&p<t.map.width?{...t.map.cells[d][p]}:Em())),s={};for(const[c,d]of Object.entries(t.map.startZones))s[Number(c)]=d.filter(u=>u.row<a&&u.col<r);return{...t,map:{...t.map,width:r,height:a,cells:o,startZones:s}}}case"UNDO":{if(e.undoStack.length===0)return e;const t=e.undoStack[e.undoStack.length-1];return{...e,map:t,undoStack:e.undoStack.slice(0,-1),redoStack:[...e.redoStack,mo(e.map)],isDirty:!0}}case"REDO":{if(e.redoStack.length===0)return e;const t=e.redoStack[e.redoStack.length-1];return{...e,map:t,redoStack:e.redoStack.slice(0,-1),undoStack:[...e.undoStack,mo(e.map)],isDirty:!0}}case"LOAD_MAP":return{...Hs(mo(n.map)),isDirty:!1};case"NEW_MAP":return Hs(Dm(n.width,n.height));case"MARK_SAVED":return{...e,isDirty:!1};default:return e}}const nc="em_custom_maps_index",tc="em_custom_map_",Wv=["plain","sand","rubble","forest","water","highland"];function rc(){try{const e=localStorage.getItem(nc);return e?JSON.parse(e):[]}catch{return[]}}function Zv(e){const n={id:e.id,nameCn:e.nameCn,nameJa:e.nameJa,width:e.width,height:e.height,maxPlayers:e.maxPlayers,maxTeams:e.maxTeams,savedAt:Date.now()},t=rc().filter(r=>r.id!==e.id);t.push(n),localStorage.setItem(nc,JSON.stringify(t)),localStorage.setItem(tc+e.id,JSON.stringify(e))}function Yv(e){try{const n=localStorage.getItem(tc+e);if(!n)return null;const t=JSON.parse(n);return $m(t)?t:null}catch{return null}}function Xv(e){const n=rc().filter(t=>t.id!==e);localStorage.setItem(nc,JSON.stringify(n)),localStorage.removeItem(tc+e)}function Qv(e){return JSON.stringify(e,null,2)}function qv(e){try{const n=JSON.parse(e);return $m(n)?(n.id=`custom_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,n):null}catch{return null}}function ey(e){const n=Qv(e),t=new Blob([n],{type:"application/json"}),r=URL.createObjectURL(t),a=document.createElement("a");a.href=r,a.download=`${e.nameCn||e.id}.json`,a.click(),URL.revokeObjectURL(r)}function $m(e){if(!e||typeof e!="object")return!1;const n=e;if(typeof n.id!="string"||(typeof n.nameCn!="string"&&(n.nameCn="未命名"),typeof n.nameJa!="string"&&(n.nameJa=""),typeof n.width!="number"||n.width<3||n.width>25)||typeof n.height!="number"||n.height<3||n.height>25||(typeof n.maxPlayers!="number"&&(n.maxPlayers=2),typeof n.maxTeams!="number"&&(n.maxTeams=2),!Array.isArray(n.cells))||n.cells.length!==n.height)return!1;for(const t of n.cells){if(!Array.isArray(t)||t.length!==n.width)return!1;for(const r of t)if(!r||typeof r!="object"||!Wv.includes(r.terrain))return!1}return(!n.startZones||typeof n.startZones!="object")&&(n.startZones={}),!0}const Am=j.createContext(null);function br(){const e=j.useContext(Am);if(!e)throw new Error("useEditor must be inside EditorCtx.Provider");return e}const Qa=48,Xd=.2,ny=3,Qd=.1,Ws=[{terrain:"plain",label:"平原",icon:"🟩"},{terrain:"sand",label:"砂地",icon:"🟨"},{terrain:"rubble",label:"瓦砾",icon:"🟫"},{terrain:"forest",label:"森林",icon:"🌲"},{terrain:"water",label:"水域",icon:"🟦"},{terrain:"highland",label:"高地",icon:"⛰️"}],Go=["#00f0ff","#ff00c8","#00cc88","#ff8800","#6688ff","#cc44ff","#44dddd","#ff4466"];function ty({onBack:e}){const[n,t]=j.useReducer(Hv,void 0,()=>Hs()),r=j.useMemo(()=>({state:n,dispatch:t}),[n]);j.useEffect(()=>{function s(c){if((c.ctrlKey||c.metaKey)&&(c.key==="z"&&!c.shiftKey&&(c.preventDefault(),t({type:"UNDO"})),c.key==="z"&&c.shiftKey&&(c.preventDefault(),t({type:"REDO"})),c.key==="y"&&(c.preventDefault(),t({type:"REDO"})),c.key==="s"&&(c.preventDefault(),a())),!c.ctrlKey&&!c.metaKey&&!c.altKey){const d=parseInt(c.key)-1;d>=0&&d<Ws.length&&t({type:"SET_TERRAIN",terrain:Ws[d].terrain})}}return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[]);function a(){Zv(n.map),t({type:"MARK_SAVED"})}function o(){n.isDirty&&!window.confirm("有未保存的更改，确定要退出吗？")||e()}return i.jsx(Am.Provider,{value:r,children:i.jsxs("div",{className:"me__screen",children:[i.jsx(ry,{onBack:o,onSave:a}),i.jsx(oy,{}),i.jsx(un,{id:"me-terrain",title:"地形画笔",initialPos:{x:8,y:56},width:200,minHeight:60,zIndex:20,children:i.jsx(iy,{})}),i.jsx(un,{id:"me-props",title:"地图属性",initialPos:{x:8,y:380},width:200,minHeight:60,zIndex:19,children:i.jsx(sy,{})}),i.jsx(un,{id:"me-zones",title:"出击区域",initialPos:{x:8,y:600},width:200,minHeight:60,zIndex:18,children:i.jsx(ly,{})}),i.jsx("style",{children:cy})]})})}function ry({onBack:e,onSave:n}){const{state:t,dispatch:r}=br(),[a,o]=j.useState(!1),s=j.useRef(null);function c(){t.isDirty&&!window.confirm("有未保存的更改，确定要新建吗？")||r({type:"NEW_MAP",width:7,height:11})}function d(){ey(t.map)}function u(){var m;(m=s.current)==null||m.click()}function p(m){var f;const h=(f=m.target.files)==null?void 0:f[0];if(!h)return;const g=new FileReader;g.onload=()=>{const y=qv(g.result);y?r({type:"LOAD_MAP",map:y}):alert("无效的地图文件")},g.readAsText(h),m.target.value=""}return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"me__topbar",children:[i.jsx("button",{className:"me__btn",onClick:e,children:"← 返回"}),i.jsx("span",{className:"me__title",children:"地图编辑器"}),i.jsxs("span",{className:"me__map-name",children:[t.map.nameCn," (",t.map.height,"×",t.map.width,")",t.isDirty&&" *"]}),i.jsx("span",{style:{flex:1}}),i.jsx("button",{className:"me__btn",onClick:c,children:"新建"}),i.jsx("button",{className:"me__btn",onClick:()=>o(!0),children:"打开"}),i.jsx("button",{className:"me__btn me__btn--accent",onClick:n,children:"保存"}),i.jsx("button",{className:"me__btn",onClick:d,children:"导出"}),i.jsx("button",{className:"me__btn",onClick:u,children:"导入"}),i.jsx("input",{ref:s,type:"file",accept:".json",style:{display:"none"},onChange:p}),i.jsx("span",{className:"me__sep"}),i.jsx("button",{className:"me__btn",onClick:()=>r({type:"UNDO"}),disabled:t.undoStack.length===0,children:"撤销"}),i.jsx("button",{className:"me__btn",onClick:()=>r({type:"REDO"}),disabled:t.redoStack.length===0,children:"重做"}),i.jsx("button",{className:`me__btn${t.showCoords?" me__btn--active":""}`,onClick:()=>r({type:"TOGGLE_COORDS"}),children:"坐标"})]}),a&&i.jsx(ay,{onClose:()=>o(!1)})]})}function ay({onClose:e}){const{dispatch:n,state:t}=br(),[r]=j.useState(()=>rc());function a(c){if(t.isDirty&&!window.confirm("有未保存的更改，确定要打开吗？"))return;const d=Yv(c);d&&(n({type:"LOAD_MAP",map:d}),e())}function o(c){if(t.isDirty&&!window.confirm("有未保存的更改，确定要打开吗？"))return;const d={...c,id:`custom_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,cells:c.cells.map(u=>u.map(p=>({...p}))),startZones:Object.fromEntries(Object.entries(c.startZones).map(([u,p])=>[u,p.map(m=>({...m}))]))};n({type:"LOAD_MAP",map:d}),e()}function s(c){window.confirm("确定删除此地图？")&&(Xv(c),e())}return i.jsx("div",{className:"me__overlay",onClick:e,children:i.jsxs("div",{className:"me__dialog",onClick:c=>c.stopPropagation(),children:[i.jsx("h3",{children:"打开地图"}),r.length>0&&i.jsxs(i.Fragment,{children:[i.jsx("h4",{children:"自定义地图"}),i.jsx("div",{className:"me__dialog-list",children:r.map(c=>i.jsxs("div",{className:"me__dialog-item",children:[i.jsxs("span",{children:[c.nameCn," (",c.height,"×",c.width,")"]}),i.jsx("span",{className:"me__dialog-date",children:new Date(c.savedAt).toLocaleDateString()}),i.jsx("button",{className:"me__btn me__btn--sm",onClick:()=>a(c.id),children:"打开"}),i.jsx("button",{className:"me__btn me__btn--sm me__btn--danger",onClick:()=>s(c.id),children:"删除"})]},c.id))})]}),i.jsx("h4",{children:"内置地图 (作为模板)"}),i.jsx("div",{className:"me__dialog-list",children:En.map(c=>i.jsxs("div",{className:"me__dialog-item",children:[i.jsxs("span",{children:[c.nameCn," (",c.height,"×",c.width,")"]}),i.jsx("button",{className:"me__btn me__btn--sm",onClick:()=>o(c),children:"复制"})]},c.id))}),i.jsx("div",{className:"me__dialog-actions",children:i.jsx("button",{className:"me__btn",onClick:e,children:"取消"})})]})})}function oy(){const{state:e,dispatch:n}=br(),t=j.useRef(null),[r,a]=j.useState({x:0,y:0,scale:1}),o=j.useRef(null),s=j.useRef(!1),c=j.useRef(!1),d=j.useRef(new Set),{map:u,activeTool:p,showCoords:m,selectedZoneTeam:h,brushSize:g}=e,{width:f,height:y}=u;j.useEffect(()=>{const C=t.current;if(!C)return;const $=C.clientWidth,D=C.clientHeight,w=f*Qa,L=y*Qa;if(!$||!D)return;const P=Math.max(Xd,Math.min(1.5,Math.min($/w,D/L)));a({x:($-w*P)/2,y:(D-L*P)/2,scale:P})},[f,y]),j.useEffect(()=>{const C=t.current;if(!C)return;const $=D=>{D.preventDefault();const w=D.deltaY<0?Qd:-Qd;a(L=>({...L,scale:Math.min(ny,Math.max(Xd,L.scale+w))}))};return C.addEventListener("wheel",$,{passive:!1}),()=>C.removeEventListener("wheel",$)},[]);const I=j.useCallback(C=>{C.button!==2&&(o.current={startX:C.clientX,startY:C.clientY,origX:r.x,origY:r.y},s.current=!1,c.current=!1,d.current.clear())},[r.x,r.y]),v=j.useCallback(C=>{if(!o.current)return;const $=C.clientX-o.current.startX,D=C.clientY-o.current.startY;!s.current&&Math.sqrt($*$+D*D)>5&&(C.buttons===4||C.buttons===2?s.current=!0:p==="terrain"||p==="startZone"||p==="eraseZone"?c.current=!0:s.current=!0),s.current&&a(w=>({...w,x:o.current.origX+$,y:o.current.origY+D}))},[p]),x=j.useCallback(()=>{o.current=null,s.current=!1,c.current=!1,d.current.clear()},[]),b=j.useMemo(()=>{const C=new Map;for(const[$,D]of Object.entries(u.startZones)){const w=Number($);for(const L of D)C.set(`${L.row},${L.col}`,w)}return C},[u.startZones]);function k(C,$){const D=`${C},${$}`;if(p==="terrain")if(g===1)d.current.has(D)||(d.current.add(D),n({type:"PAINT_CELL",row:C,col:$}));else{const w=[],L=Math.floor(g/2);for(let P=-L;P<=L;P++)for(let G=-L;G<=L;G++){const Y=C+P,K=$+G;if(Y>=0&&Y<y&&K>=0&&K<f){const U=`${Y},${K}`;d.current.has(U)||(d.current.add(U),w.push({row:Y,col:K}))}}w.length&&n({type:"PAINT_AREA",cells:w})}else if(p==="startZone")n({type:"ADD_ZONE_CELL",team:h,position:{row:C,col:$}});else if(p==="eraseZone"){const w=b.get(D);w!==void 0&&n({type:"REMOVE_ZONE_CELL",team:w,position:{row:C,col:$}})}}const{x:T,y:M,scale:E}=r;return i.jsx("div",{className:"me__viewport",ref:t,onMouseDown:I,onMouseMove:v,onMouseUp:x,onMouseLeave:x,onContextMenu:C=>C.preventDefault(),children:i.jsx("div",{className:"me__grid",style:{transform:`translate(${T}px, ${M}px) scale(${E})`,transformOrigin:"top left",display:"grid",gridTemplateColumns:`repeat(${f}, ${Qa}px)`,gridTemplateRows:`repeat(${y}, ${Qa}px)`},children:u.cells.flatMap((C,$)=>C.map((D,w)=>{const L=Fl(D),P=`${$},${w}`,G=b.get(P),Y=G!==void 0?Go[G%Go.length]:"";return i.jsxs("div",{className:`me__cell${G!==void 0?" me__cell--zone":""}`,style:{backgroundImage:`url("${L}")`,backgroundSize:"cover",...G!==void 0?{borderColor:Y,boxShadow:`inset 0 0 8px ${Y}66`}:{}},onMouseDown:K=>{K.button===0&&!s.current&&k($,w)},onMouseEnter:()=>{c.current&&k($,w)},children:[D.terrain==="highland"&&i.jsxs("span",{className:"me__cell-elev",children:["+",D.elevation]}),m&&i.jsxs("span",{className:"me__cell-coord",children:[$,",",w]}),G!==void 0&&i.jsxs("span",{className:"me__cell-zone",style:{color:Y},children:["Z",G]})]},P)}))})})}function iy(){const{state:e,dispatch:n}=br();return i.jsxs("div",{className:"me__palette",children:[i.jsx("div",{className:"me__palette-grid",children:Ws.map(({terrain:t,label:r,icon:a},o)=>i.jsxs("button",{className:`me__palette-btn${e.selectedTerrain===t&&e.activeTool==="terrain"?" me__palette-btn--active":""}`,onClick:()=>n({type:"SET_TERRAIN",terrain:t}),title:`${r} (${o+1})`,children:[a," ",r]},t))}),e.selectedTerrain==="highland"&&i.jsxs("div",{className:"me__sub-option",children:[i.jsx("label",{children:"高度:"}),[1,2,3].map(t=>i.jsxs("button",{className:`me__mini-btn${e.selectedElevation===t?" me__mini-btn--active":""}`,onClick:()=>n({type:"SET_ELEVATION",elevation:t}),children:["+",t]},t))]}),e.selectedTerrain!=="highland"&&e.selectedTerrain!=="plain"&&i.jsxs("div",{className:"me__sub-option",children:[i.jsx("label",{children:"变体:"}),[0,1,2,3].map(t=>i.jsx("button",{className:`me__mini-btn${e.selectedVariant===t?" me__mini-btn--active":""}`,onClick:()=>n({type:"SET_VARIANT",variant:t}),children:t},t))]}),i.jsxs("div",{className:"me__sub-option",children:[i.jsx("label",{children:"笔刷:"}),[1,2,3].map(t=>i.jsxs("button",{className:`me__mini-btn${e.brushSize===t?" me__mini-btn--active":""}`,onClick:()=>n({type:"SET_BRUSH_SIZE",size:t}),children:[t,"×",t]},t))]})]})}function sy(){const{state:e,dispatch:n}=br(),{map:t}=e;return i.jsxs("div",{className:"me__props",children:[i.jsxs("label",{className:"me__prop-row",children:[i.jsx("span",{children:"名称(中)"}),i.jsx("input",{type:"text",value:t.nameCn,onChange:r=>n({type:"SET_MAP_META",nameCn:r.target.value})})]}),i.jsxs("label",{className:"me__prop-row",children:[i.jsx("span",{children:"名称(日)"}),i.jsx("input",{type:"text",value:t.nameJa,onChange:r=>n({type:"SET_MAP_META",nameJa:r.target.value})})]}),i.jsxs("div",{className:"me__prop-row",children:[i.jsx("span",{children:"尺寸"}),i.jsx("input",{type:"number",min:3,max:25,value:t.width,onChange:r=>n({type:"RESIZE_MAP",newWidth:Number(r.target.value),newHeight:t.height}),style:{width:50}}),"×",i.jsx("input",{type:"number",min:3,max:25,value:t.height,onChange:r=>n({type:"RESIZE_MAP",newWidth:t.width,newHeight:Number(r.target.value)}),style:{width:50}})]}),i.jsxs("label",{className:"me__prop-row",children:[i.jsx("span",{children:"最大玩家"}),i.jsx("select",{value:t.maxPlayers,onChange:r=>n({type:"SET_MAP_META",maxPlayers:Number(r.target.value)}),children:[2,3,4,6,8].map(r=>i.jsx("option",{value:r,children:r},r))})]}),i.jsxs("label",{className:"me__prop-row",children:[i.jsx("span",{children:"最大队伍"}),i.jsx("select",{value:t.maxTeams,onChange:r=>n({type:"SET_MAP_META",maxTeams:Number(r.target.value)}),children:Array.from({length:t.maxPlayers},(r,a)=>a+1).filter(r=>r>=2).map(r=>i.jsx("option",{value:r,children:r},r))})]})]})}function ly(){const{state:e,dispatch:n}=br(),{map:t,activeTool:r,selectedZoneTeam:a}=e;return i.jsxs("div",{className:"me__zones",children:[i.jsxs("div",{className:"me__zones-tools",children:[i.jsx("button",{className:`me__btn me__btn--sm${r==="startZone"?" me__btn--active":""}`,onClick:()=>n({type:"SET_TOOL",tool:"startZone"}),children:"添加点"}),i.jsx("button",{className:`me__btn me__btn--sm${r==="eraseZone"?" me__btn--active":""}`,onClick:()=>n({type:"SET_TOOL",tool:"eraseZone"}),children:"删除点"})]}),Array.from({length:t.maxTeams},(o,s)=>s).map(o=>{const s=t.startZones[o]??[],c=Go[o%Go.length],d=a===o;return i.jsxs("div",{className:`me__zone-row${d?" me__zone-row--active":""}`,style:{borderLeftColor:c},onClick:()=>n({type:"SET_ZONE_TEAM",team:o}),children:[i.jsxs("span",{style:{color:c},children:["区域 ",o+1]}),i.jsxs("span",{className:"me__zone-count",children:[s.length," 点"]}),i.jsx("button",{className:"me__btn me__btn--sm me__btn--danger",onClick:u=>{u.stopPropagation(),n({type:"CLEAR_ZONE",team:o})},children:"清空"})]},o)})]})}const cy=`
.me__screen {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: var(--color-bg);
  display: flex;
  flex-direction: column;
}

/* ── Top bar ── */
.me__topbar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: var(--color-bg-panel);
  border-bottom: 1px solid var(--color-border);
  flex-shrink: 0;
  z-index: 100;
}
.me__title {
  font-size: 1rem;
  font-weight: bold;
  color: var(--color-accent);
  margin-right: 8px;
}
.me__map-name {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
}
.me__sep {
  width: 1px;
  height: 20px;
  background: var(--color-border);
  margin: 0 4px;
}

/* ── Buttons ── */
.me__btn {
  padding: 4px 10px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-panel);
  color: var(--color-text-muted);
  cursor: pointer;
  border-radius: 4px;
  font-size: 0.8rem;
  white-space: nowrap;
  transition: all 0.1s;
}
.me__btn:hover { color: var(--color-text); border-color: var(--color-accent); }
.me__btn:disabled { opacity: 0.35; cursor: default; }
.me__btn--accent { color: var(--color-accent); border-color: var(--color-accent); }
.me__btn--active { background: var(--color-accent); color: #000; border-color: var(--color-accent); }
.me__btn--danger { color: #ff4466; border-color: #ff4466; }
.me__btn--danger:hover { background: #ff4466; color: #000; }
.me__btn--sm { padding: 2px 6px; font-size: 0.7rem; }

/* ── Viewport ── */
.me__viewport {
  flex: 1;
  position: relative;
  overflow: hidden;
  cursor: crosshair;
}
.me__grid {
  position: absolute;
  top: 0; left: 0;
}

/* ── Cells ── */
.me__cell {
  position: relative;
  border: 1px solid rgba(255,255,255,0.08);
  box-sizing: border-box;
  cursor: crosshair;
  transition: border-color 0.1s;
}
.me__cell:hover {
  border-color: var(--color-accent);
  z-index: 1;
}
.me__cell--zone {
  border-width: 2px;
}
.me__cell-elev {
  position: absolute;
  top: 1px; right: 2px;
  font-size: 10px;
  color: #fff;
  text-shadow: 0 0 3px #000;
  font-family: var(--font-mono);
  pointer-events: none;
}
.me__cell-coord {
  position: absolute;
  bottom: 0; left: 1px;
  font-size: 8px;
  color: rgba(255,255,255,0.5);
  font-family: var(--font-mono);
  pointer-events: none;
}
.me__cell-zone {
  position: absolute;
  top: 1px; left: 2px;
  font-size: 9px;
  font-weight: bold;
  text-shadow: 0 0 3px #000;
  pointer-events: none;
}

/* ── Palette ── */
.me__palette {
  padding: 6px;
}
.me__palette-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
}
.me__palette-btn {
  padding: 6px 4px;
  border: 1px solid var(--color-border);
  background: var(--color-bg);
  color: var(--color-text-muted);
  cursor: pointer;
  border-radius: 4px;
  font-size: 0.75rem;
  text-align: center;
  transition: all 0.1s;
}
.me__palette-btn:hover { border-color: var(--color-accent); color: var(--color-text); }
.me__palette-btn--active {
  background: var(--color-accent);
  color: #000;
  border-color: var(--color-accent);
  font-weight: bold;
}

.me__sub-option {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 6px;
  font-size: 0.75rem;
  color: var(--color-text-muted);
}
.me__mini-btn {
  padding: 2px 6px;
  border: 1px solid var(--color-border);
  background: var(--color-bg);
  color: var(--color-text-muted);
  cursor: pointer;
  border-radius: 3px;
  font-size: 0.7rem;
}
.me__mini-btn:hover { border-color: var(--color-accent); }
.me__mini-btn--active {
  background: var(--color-accent);
  color: #000;
  border-color: var(--color-accent);
}

/* ── Properties ── */
.me__props {
  padding: 6px;
}
.me__prop-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
  font-size: 0.75rem;
  color: var(--color-text-muted);
}
.me__prop-row span:first-child {
  min-width: 55px;
  flex-shrink: 0;
}
.me__prop-row input,
.me__prop-row select {
  flex: 1;
  padding: 3px 6px;
  background: var(--color-bg);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: 3px;
  font-size: 0.75rem;
}

/* ── Zones ── */
.me__zones {
  padding: 6px;
}
.me__zones-tools {
  display: flex;
  gap: 4px;
  margin-bottom: 8px;
}
.me__zone-row {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 6px;
  border-left: 3px solid transparent;
  margin-bottom: 2px;
  cursor: pointer;
  border-radius: 0 3px 3px 0;
  font-size: 0.75rem;
  transition: background 0.1s;
}
.me__zone-row:hover { background: rgba(255,255,255,0.05); }
.me__zone-row--active { background: rgba(255,255,255,0.08); }
.me__zone-count {
  flex: 1;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  font-size: 0.7rem;
}

/* ── Overlay / Dialog ── */
.me__overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
}
.me__dialog {
  background: var(--color-bg-panel);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 20px;
  min-width: 400px;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
}
.me__dialog h3 {
  margin: 0 0 12px;
  color: var(--color-accent);
}
.me__dialog h4 {
  margin: 12px 0 6px;
  color: var(--color-text-muted);
  font-size: 0.85rem;
}
.me__dialog-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.me__dialog-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  font-size: 0.8rem;
  color: var(--color-text);
}
.me__dialog-item span:first-child { flex: 1; }
.me__dialog-date {
  color: var(--color-text-muted);
  font-size: 0.7rem;
  flex: 0 !important;
}
.me__dialog-actions {
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
}
`;function dy(e){return e?`(${e.row},${e.col})`:"(无)"}function Pt(e){if(!e)return"(空)";const n=ne(e.defId),t=(n==null?void 0:n.nameCn)??e.defId,r=e.destroyed?" [已摧毁]":"";return`${t}(${e.defId})${r}`}function uy(e,n){const t=e.players[n];if(!t)return`  ${n}: (不存在)`;const r=q.find(o=>o.id===t.unitId),a=[];return a.push(`  ── ${n} ──`),a.push(`    机体: ${(r==null?void 0:r.nameCn)??t.unitId} (${t.unitId})`),a.push(`    位置: ${dy(t.position)}  朝向: ${t.facing}`),a.push(`    状态: ${t.isDefeated?"已击破":"存活"}`),a.push(`    手牌(${t.hand.length}): ${t.hand.map(o=>Pt(o)).join(", ")||"(无)"}`),a.push(`    阶段1配置: ${Pt(t.plotSeg1)}`),a.push(`    阶段2配置: ${Pt(t.plotSeg2)}`),a.push(`    辅助区(${t.auxiliary.length}): ${t.auxiliary.map(o=>Pt(o)).join(", ")||"(无)"}`),a.push(`    弃牌堆(${t.discard.length}): ${t.discard.map(o=>Pt(o)).join(", ")||"(无)"}`),a.push(`    摧毁区(${t.destroyedCards.length}): ${t.destroyedCards.map(o=>Pt(o)).join(", ")||"(无)"}`),a.push(`    卡组剩余: ${t.deck.filter(o=>!o.destroyed).length} 张`),a.join(`
`)}function py(e){var t,r;const n=[];if(n.push("══════════════════════════════════════════"),n.push("  当前状态快照"),n.push("══════════════════════════════════════════"),n.push(`回合: ${e.roundNumber}`),n.push(`阶段: ${e.phase}`),n.push(`当前时机: ${e.currentTiming??"(无)"}`),n.push(`行动顺序: ${e.turnOrder.length>0?e.turnOrder.join(" → "):"(无)"}`),n.push(`布局步骤: ${e.plottingStep??"(无)"}`),n.push(`活跃玩家: ${e.activePlayer}`),n.push(`地图: ${((t=e.map)==null?void 0:t.id)??"(无)"}`),n.push(`地雷数: ${((r=e.mines)==null?void 0:r.length)??0}`),e.pendingDamage){const a=e.pendingDamage;n.push(`待处理伤害: 目标=${a.targetId}, 剩余=${a.remaining}, 来源=${a.source}, 攻击者=${a.attackerId??"(无)"}, 已选=${a.selectedInstanceIds.length}`)}n.push(""),n.push("── 玩家状态 ──");for(const a of e.playerIds)n.push(uy(e,a));return n.push(""),n.join(`
`)}function Vm(e,n){const t=new Date,r=t.toISOString().replace(/[:.]/g,"-").slice(0,19),a=[];a.push("╔══════════════════════════════════════════╗"),a.push("║   Embryo Machine — 全量游戏日志导出      ║"),a.push("╚══════════════════════════════════════════╝"),a.push(`导出时间: ${t.toLocaleString("zh-CN")}`),n!=null&&n.localPlayerId&&a.push(`本地玩家: ${n.localPlayerId}`),n!=null&&n.connectionStatus&&a.push(`连接状态: ${n.connectionStatus}`),a.push(""),a.push(py(e)),a.push("══════════════════════════════════════════"),a.push("  完整游戏日志 (按时间顺序)"),a.push("══════════════════════════════════════════");for(let u=0;u<e.log.length;u++)a.push(`[${String(u+1).padStart(4," ")}] ${e.log[u]}`);a.push(""),a.push(`── 共 ${e.log.length} 条日志 ──`);const o=a.join(`
`),s=new Blob([o],{type:"text/plain;charset=utf-8"}),c=URL.createObjectURL(s),d=document.createElement("a");d.href=c,d.download=`embryo-log-${r}.txt`,d.click(),URL.revokeObjectURL(c)}const qd=[1e3,2e3,4e3,8e3,15e3];class my{constructor(n,t,r){Qe(this,"ws",null);Qe(this,"url");Qe(this,"sessionId");Qe(this,"onMessage");Qe(this,"onStatus");Qe(this,"reconnectAttempt",0);Qe(this,"reconnectTimer",null);Qe(this,"intentionallyClosed",!1);Qe(this,"hasEverConnected",!1);this.url=n,this.sessionId=localStorage.getItem("embryo-session-id"),this.onMessage=t,this.onStatus=r}connect(){this.intentionallyClosed=!1,this.onStatus("connecting");const n=this.sessionId?`?sessionId=${this.sessionId}`:"";this.ws=new WebSocket(`${this.url}${n}`),this.ws.onopen=()=>{var t;if(this.intentionallyClosed){(t=this.ws)==null||t.close(),this.ws=null,this.onStatus("disconnected");return}this.hasEverConnected=!0,this.reconnectAttempt=0,this.onStatus("connected")},this.ws.onmessage=t=>{try{const r=JSON.parse(t.data);r.type==="SESSION_ID"&&(this.sessionId=r.sessionId,localStorage.setItem("embryo-session-id",r.sessionId)),this.onMessage(r)}catch{console.warn("[GameSocket] Failed to parse message:",t.data)}},this.ws.onclose=()=>{if(this.intentionallyClosed){this.onStatus("disconnected");return}this.hasEverConnected||(this.sessionId=null,localStorage.removeItem("embryo-session-id")),this.onStatus("reconnecting"),this.scheduleReconnect()},this.ws.onerror=()=>{}}send(n){var t;((t=this.ws)==null?void 0:t.readyState)===WebSocket.OPEN?this.ws.send(JSON.stringify(n)):console.warn("[GameSocket] Cannot send — not connected")}disconnect(){if(this.intentionallyClosed=!0,this.reconnectTimer&&(clearTimeout(this.reconnectTimer),this.reconnectTimer=null),this.ws){const n=this.ws.readyState;n===WebSocket.OPEN||n===WebSocket.CLOSING?(this.ws.close(),this.ws=null):n===WebSocket.CONNECTING&&(this.ws.onmessage=null,this.ws.onerror=null)}this.onStatus("disconnected")}clearSession(){this.sessionId=null,localStorage.removeItem("embryo-session-id")}get isConnected(){var n;return((n=this.ws)==null?void 0:n.readyState)===WebSocket.OPEN}scheduleReconnect(){const n=qd[Math.min(this.reconnectAttempt,qd.length-1)];this.reconnectAttempt++,this.reconnectTimer=setTimeout(()=>{this.reconnectTimer=null,this.connect()},n)}}const Pm=j.createContext(null);function fy({serverUrl:e,children:n}){const[t,r]=j.useState(null),[a,o]=j.useState(null),[s,c]=j.useState(null),[d,u]=j.useState("disconnected"),[p,m]=j.useState(null),[h,g]=j.useState(null),[f,y]=j.useState([]),[I,v]=j.useState(null),[x,b]=j.useState(null),k=j.useRef(null),T=j.useRef(null),M=j.useRef(-1),E=j.useCallback(P=>{switch(P.type){case"SESSION_ID":break;case"ROOM_STATE":o(P.room),c(P.yourPlayerId);break;case"ROOM_LIST":y(P.rooms);break;case"GAME_STATE":{P.state.phase==="plotting"&&(T.current!=="plotting"||M.current!==P.state.roundNumber)&&m(null),T.current=P.state.phase,M.current=P.state.roundNumber,r(P.state),c(P.yourPlayerId),v(P.currentTurnPlayerId??null),b(P.turnDeadline??null);break}case"PLOTTING_STATUS":m({confirmed:P.confirmed,total:P.total});break;case"GAME_STARTED":break;case"RECONNECTED":o(P.room),r(P.state),c(P.yourPlayerId);break;case"ACTION_REJECTED":g(P.reason),setTimeout(()=>g(null),5e3);break;case"PLAYER_JOINED":case"PLAYER_LEFT":case"PLAYER_RECONNECTED":case"PLAYER_DISCONNECTED":break;case"ERROR":g(P.message),setTimeout(()=>g(null),5e3);break}},[]);j.useEffect(()=>{const P=new my(e,E,u);return k.current=P,P.connect(),()=>{P.clearSession(),P.disconnect(),k.current=null}},[e,E]);const C=j.useCallback(P=>{var G;(G=k.current)==null||G.send({type:"GAME_ACTION",action:P})},[]),$=j.useCallback(P=>{var G;(G=k.current)==null||G.send({type:"LOBBY_ACTION",action:P})},[]),D=j.useCallback(P=>{var G;(G=k.current)==null||G.send(P)},[]),w=j.useCallback(P=>ne(P),[]),L={state:t,room:a,localPlayerId:s,dispatch:C,sendLobbyAction:$,send:D,getCard:w,connectionStatus:d,plottingStatus:p,isOnline:!0,lastError:h,roomList:f,currentTurnPlayerId:I,turnDeadline:x};return i.jsx(Pm.Provider,{value:L,children:n})}function ac(){const e=j.useContext(Pm);if(!e)throw new Error("useOnlineGame must be used within OnlineGameProvider");return e}function gy({children:e}){const{state:n,localPlayerId:t,dispatch:r,getCard:a,plottingStatus:o,send:s,currentTurnPlayerId:c}=ac(),d=j.useCallback(h=>{if(h.type==="ADVANCE_TIMING"||h.type==="ADVANCE_PHASE"){s({type:"TIMING_DONE"});return}h.type==="START_PLOTTING"||h.type==="DRAW_CARDS"||r(h)},[r,s]);if(!n||!t)return null;let u=n;if(n.phase==="plotting"){const h=(o==null?void 0:o.confirmed.includes(t))??!1;u={...n,plottingStep:h?"complete":t}}const p={player1:t!=="player1",player2:t!=="player2",player1Difficulty:"easy",player2Difficulty:"easy",playerAI:Object.fromEntries(n.playerIds.map(h=>[h,h!==t])),playerDifficulty:Object.fromEntries(n.playerIds.map(h=>[h,"easy"]))},m={state:u,dispatch:d,rawDispatch:d,getCard:a,aiConfig:p,setAIConfig:()=>{},getReplayData:()=>null,autoSaveEnabled:!1,setAutoSaveEnabled:()=>{},exposureMode:!1,setExposureMode:()=>{},isOnline:!0,localPlayerId:t,currentTurnPlayerId:c};return i.jsx(ql.Provider,{value:m,children:e})}const hy={lobby:"等待中",playing:"游戏中",finished:"已结束"};function zm({onBack:e,onCreateRoom:n,onJoinRoom:t,roomList:r,onRefreshRooms:a}){const[o,s]=j.useState("create"),[c,d]=j.useState(()=>localStorage.getItem("embryo-player-name")??""),[u,p]=j.useState(""),[m,h]=j.useState(""),[g,f]=j.useState(2),[y,I]=j.useState("default"),[v,x]=j.useState(""),[b,k]=j.useState(!1),[T,M]=j.useState(0);function E(){const w=c.trim()||`Player_${Math.random().toString(36).slice(2,6)}`;return localStorage.setItem("embryo-player-name",w),w}function C(){n(E(),{maxPlayers:g,teamCount:g,mapId:y,turnTimeoutSeconds:T,password:b?v:void 0})}function $(){const w=u.trim().toUpperCase();w&&t(w,E(),m||void 0)}function D(w,L){p(w),L?(s("join"),h("")):t(w,E())}return i.jsxs("div",{className:"ol-screen",children:[i.jsxs("div",{className:"ol-center",children:[i.jsx("h1",{className:"ol-title",children:"联机对战"}),i.jsx("p",{className:"ol-subtitle",children:"创建、加入或浏览房间"}),i.jsx("div",{className:"ol-divider"}),i.jsxs("div",{className:"ol-field",children:[i.jsx("label",{className:"ol-label",children:"昵称"}),i.jsx("input",{className:"ol-input",value:c,onChange:w=>d(w.target.value),placeholder:"输入昵称…",maxLength:16})]}),i.jsxs("div",{className:"ol-tabs",children:[i.jsx("button",{className:`ol-tab${o==="create"?" ol-tab--active":""}`,onClick:()=>s("create"),children:"创建房间"}),i.jsx("button",{className:`ol-tab${o==="join"?" ol-tab--active":""}`,onClick:()=>s("join"),children:"加入房间"}),i.jsx("button",{className:`ol-tab${o==="browse"?" ol-tab--active":""}`,onClick:()=>{s("browse"),a==null||a()},children:"浏览房间"})]}),o==="create"&&i.jsxs("div",{className:"ol-panel",children:[i.jsxs("div",{className:"ol-field",children:[i.jsx("label",{className:"ol-label",children:"最大玩家数"}),i.jsx("select",{className:"ol-select",value:g,onChange:w=>f(+w.target.value),children:[2,3,4,5,6,7,8].map(w=>i.jsxs("option",{value:w,children:[w," 人"]},w))})]}),i.jsxs("div",{className:"ol-field",children:[i.jsx("label",{className:"ol-label",children:"地图"}),i.jsx("select",{className:"ol-select",value:y,onChange:w=>I(w.target.value),children:i.jsx("option",{value:"default",children:"默认地图"})})]}),i.jsxs("div",{className:"ol-field",children:[i.jsx("label",{className:"ol-label",children:"回合限时"}),i.jsxs("select",{className:"ol-select",value:T,onChange:w=>M(+w.target.value),children:[i.jsx("option",{value:0,children:"无限制"}),i.jsx("option",{value:30,children:"30 秒"}),i.jsx("option",{value:60,children:"60 秒"}),i.jsx("option",{value:90,children:"90 秒"}),i.jsx("option",{value:120,children:"120 秒"})]})]}),i.jsxs("label",{className:"ol-check",onClick:()=>k(!b),children:[i.jsx("span",{className:`ol-check__box${b?" ol-check__box--on":""}`,children:b?"✓":""}),i.jsx("span",{children:"设置房间密码"})]}),b&&i.jsx("div",{className:"ol-field",children:i.jsx("input",{className:"ol-input",value:v,onChange:w=>x(w.target.value),placeholder:"输入密码…",maxLength:20,type:"password"})}),i.jsx("button",{className:"ol-btn ol-btn--primary",onClick:C,children:"创建房间"})]}),o==="join"&&i.jsxs("div",{className:"ol-panel",children:[i.jsxs("div",{className:"ol-field",children:[i.jsx("label",{className:"ol-label",children:"房间号"}),i.jsx("input",{className:"ol-input ol-input--code",value:u,onChange:w=>p(w.target.value.toUpperCase()),placeholder:"输入6位房间号",maxLength:6})]}),i.jsxs("div",{className:"ol-field",children:[i.jsx("label",{className:"ol-label",children:"密码（若有）"}),i.jsx("input",{className:"ol-input",value:m,onChange:w=>h(w.target.value),placeholder:"无密码可留空",maxLength:20,type:"password"})]}),i.jsx("button",{className:"ol-btn ol-btn--primary",onClick:$,disabled:u.trim().length<1,children:"加入房间"})]}),o==="browse"&&i.jsxs("div",{className:"ol-panel",children:[i.jsxs("div",{className:"ol-browse-header",children:[i.jsx("span",{className:"ol-label",children:"在线房间"}),i.jsx("button",{className:"ol-refresh-btn",onClick:a,children:"刷新"})]}),!r||r.length===0?i.jsx("div",{className:"ol-empty",children:"暂无房间，创建一个吧"}):i.jsx("div",{className:"ol-room-list",children:r.map(w=>i.jsxs("div",{className:"ol-room-row",children:[i.jsx("span",{className:"ol-room-row__code",children:w.roomCode}),i.jsx("span",{className:"ol-room-row__host",children:w.hostName}),i.jsx("span",{className:`ol-room-row__status ol-room-row__status--${w.status}`,children:hy[w.status]??w.status}),i.jsxs("span",{className:"ol-room-row__count",children:[w.playerCount,"/",w.maxPlayers]}),w.hasPassword&&i.jsx("span",{className:"ol-room-row__lock",title:"需要密码",children:"🔒"}),i.jsx("button",{className:"ol-room-row__join",onClick:()=>D(w.roomCode,w.hasPassword),disabled:w.status!=="lobby",children:w.status==="lobby"?"加入":"观战"})]},w.roomCode))})]}),i.jsx("button",{className:"ol-btn ol-btn--back",onClick:e,children:"返回主菜单"})]}),i.jsx("style",{children:xy})]})}const xy=`
.ol-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: var(--color-bg);
  padding: 32px 16px;
}
.ol-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  width: 100%;
  max-width: 480px;
}
.ol-title {
  font-size: 2rem;
  color: var(--color-accent);
  text-shadow: var(--glow-accent);
  margin: 0;
}
.ol-subtitle {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin: 0;
}
.ol-divider {
  width: 200px;
  height: 1px;
  background: var(--color-border);
  margin: 4px 0;
}

/* Tabs */
.ol-tabs {
  display: flex;
  gap: 0;
  width: 100%;
  max-width: 420px;
}
.ol-tab {
  flex: 1;
  padding: 10px 0;
  border: 1px solid var(--color-border);
  background: var(--color-bg-panel);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
}
.ol-tab:first-child { border-radius: 6px 0 0 6px; }
.ol-tab:last-child  { border-radius: 0 6px 6px 0; }
.ol-tab:not(:first-child) { border-left: none; }
.ol-tab--active {
  background: var(--color-accent);
  color: #000;
  font-weight: bold;
  border-color: var(--color-accent);
}

/* Panel */
.ol-panel {
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: var(--color-bg-panel);
}

/* Fields */
.ol-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  max-width: 420px;
}
.ol-label {
  font-size: 0.78rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.ol-input, .ol-select {
  padding: 10px 12px;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  background: var(--color-bg);
  color: var(--color-text);
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s;
}
.ol-input:focus, .ol-select:focus {
  border-color: var(--color-accent);
}
.ol-input--code {
  text-align: center;
  font-size: 1.3rem;
  letter-spacing: 0.3em;
  font-family: var(--font-mono);
}

/* Checkbox */
.ol-check {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  color: var(--color-text);
  user-select: none;
}
.ol-check__box {
  width: 20px;
  height: 20px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background: var(--color-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: var(--color-accent);
  transition: all 0.15s;
}
.ol-check__box--on {
  border-color: var(--color-accent);
  background: rgba(0, 240, 255, 0.1);
}

/* Buttons */
.ol-btn {
  padding: 12px 32px;
  border-radius: 6px;
  font-size: 0.95rem;
  cursor: pointer;
  border: none;
  transition: opacity 0.2s;
}
.ol-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.ol-btn--primary {
  background: var(--color-accent);
  color: #000;
  font-weight: bold;
}
.ol-btn--primary:hover:not(:disabled) {
  opacity: 0.85;
}
.ol-btn--back {
  background: none;
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
  font-size: 0.85rem;
  margin-top: 8px;
}
.ol-btn--back:hover {
  border-color: var(--color-accent);
  color: var(--color-text);
}

/* Browse tab */
.ol-browse-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.ol-refresh-btn {
  padding: 4px 12px;
  border: 1px solid var(--color-border);
  background: var(--color-bg);
  color: var(--color-text-muted);
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.78rem;
}
.ol-refresh-btn:hover {
  border-color: var(--color-accent);
  color: var(--color-text);
}
.ol-empty {
  text-align: center;
  color: var(--color-text-muted);
  font-size: 0.85rem;
  padding: 16px 0;
}
.ol-room-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 260px;
  overflow-y: auto;
}
.ol-room-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  background: var(--color-bg);
  font-size: 0.82rem;
}
.ol-room-row__code {
  font-family: var(--font-mono);
  color: var(--color-accent);
  font-weight: bold;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
}
.ol-room-row__host {
  color: var(--color-text);
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ol-room-row__status {
  font-size: 0.72rem;
  padding: 2px 8px;
  border-radius: 8px;
}
.ol-room-row__status--lobby {
  color: #00c864;
  border: 1px solid rgba(0, 200, 100, 0.3);
  background: rgba(0, 200, 100, 0.1);
}
.ol-room-row__status--playing {
  color: #ffa000;
  border: 1px solid rgba(255, 160, 0, 0.3);
  background: rgba(255, 160, 0, 0.1);
}
.ol-room-row__count {
  color: var(--color-text-muted);
  font-size: 0.78rem;
  font-family: var(--font-mono);
}
.ol-room-row__lock {
  font-size: 0.72rem;
}
.ol-room-row__join {
  padding: 3px 12px;
  border: 1px solid var(--color-accent);
  background: transparent;
  color: var(--color-accent);
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.78rem;
  transition: all 0.15s;
}
.ol-room-row__join:hover:not(:disabled) {
  background: var(--color-accent);
  color: #000;
}
.ol-room-row__join:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
`;function vy({room:e,localPlayerId:n,connectionStatus:t,lastError:r,send:a,onLeave:o}){var T;const[s,c]=j.useState(""),d=e.slots.find(M=>M.playerId===n),u=n!=null&&n===((T=e.slots[0])==null?void 0:T.playerId),p=(d==null?void 0:d.isReady)??!1,m=e.slots.filter(M=>M.type!=="empty"),h=m.length>=2&&m.every(M=>M.isReady),g=e.slots.filter(M=>M.type!=="empty"&&M.playerId!==n).map(M=>M.unitId),f=j.useState(!1);j.useEffect(()=>{if(f[0]||!n)return;if(d!=null&&d.unitId&&d.unitId!=="TR"){c(d.unitId),f[1](!0);return}const M=q.filter(E=>!g.includes(E.id));if(M.length>0){const E=M[Math.floor(Math.random()*M.length)];c(E.id),a({type:"LOBBY_ACTION",action:{type:"SELECT_UNIT",playerId:n,unitId:E.id}}),f[1](!0)}},[n]);function y(M){c(M),a({type:"LOBBY_ACTION",action:{type:"SELECT_UNIT",playerId:n,unitId:M}})}function I(){const M=q.filter(C=>!g.includes(C.id)&&C.id!==s);if(M.length===0)return;const E=M[Math.floor(Math.random()*M.length)];y(E.id)}function v(){a({type:p?"UNREADY":"READY"})}function x(){a({type:"START_GAME"})}function b(M,E){a({type:"SET_SLOT_TYPE",playerId:M,slotType:E})}function k(){a({type:"LEAVE_ROOM"}),o()}return i.jsxs("div",{className:"rm-screen",children:[i.jsxs("div",{className:"rm-center",children:[i.jsxs("div",{className:"rm-header",children:[i.jsx("h2",{className:"rm-room-title",children:"房间"}),i.jsx("div",{className:"rm-room-code",children:e.roomCode}),e.hasPassword&&i.jsx("span",{className:"rm-lock",title:"有密码",children:"🔒"}),i.jsx("div",{className:"rm-room-status",children:t==="connected"?i.jsx("span",{className:"rm-status rm-status--ok",children:"已连接"}):i.jsx("span",{className:"rm-status rm-status--warn",children:t})})]}),r&&i.jsx("div",{className:"rm-error",children:r}),i.jsx("div",{className:"rm-slots",children:e.slots.map((M,E)=>i.jsx(yy,{slot:M,isLocal:M.playerId===n,isHost:u,onSetSlotType:b},E))}),i.jsxs("div",{className:"rm-section",children:[i.jsxs("div",{className:"rm-section-header",children:[i.jsx("div",{className:"rm-section-title",children:"选择机体"}),i.jsx("button",{className:"rm-random-btn",onClick:I,title:"随机选择机体",children:"🎲 随机"})]}),i.jsx("div",{className:"rm-unit-grid",children:q.map(M=>{const E=s||(d==null?void 0:d.unitId),C=g.includes(M.id),$=E===M.id;return i.jsxs("button",{className:`rm-unit-btn${$?" rm-unit-btn--selected":""}${C?" rm-unit-btn--taken":""}`,onClick:()=>!C&&y(M.id),disabled:C,title:`${M.nameCn} (${M.nameJa}) - MOV:${M.movement} EVA:${M.evasion} ASL:${M.assault} INIT:${M.initiative}`,children:[i.jsx("span",{className:"rm-unit-code",children:M.id}),i.jsx("span",{className:"rm-unit-name",children:M.nameCn})]},M.id)})})]}),i.jsxs("div",{className:"rm-actions",children:[i.jsx("button",{className:`rm-btn${p?" rm-btn--unready":" rm-btn--ready"}`,onClick:v,children:p?"取消准备":"准备"}),u&&i.jsx("button",{className:"rm-btn rm-btn--start",onClick:x,disabled:!h,title:h?"开始游戏":"等待所有玩家准备",children:"开始游戏"}),i.jsx("button",{className:"rm-btn rm-btn--leave",onClick:k,children:"离开房间"})]})]}),i.jsx("style",{children:by})]})}function yy({slot:e,isLocal:n,isHost:t,onSetSlotType:r}){const a=q.find(o=>o.id===e.unitId);return e.type==="empty"?i.jsxs("div",{className:"rm-slot rm-slot--empty",children:[i.jsxs("span",{className:"rm-slot__index",children:["#",e.index+1]}),i.jsx("span",{className:"rm-slot__name",children:"空位"}),t&&i.jsx("button",{className:"rm-slot__toggle",onClick:()=>r(e.playerId,"ai"),children:"+AI"})]}):i.jsxs("div",{className:`rm-slot${n?" rm-slot--local":""}${e.isConnected?"":" rm-slot--dc"}`,children:[i.jsxs("span",{className:"rm-slot__index",children:["#",e.index+1]}),i.jsx("span",{className:"rm-slot__type-badge",children:e.type==="ai"?"AI":""}),i.jsxs("span",{className:"rm-slot__name",children:[e.playerName||e.playerId,n&&" (你)"]}),i.jsx("span",{className:"rm-slot__unit",children:a?a.nameCn:e.unitId||"未选择"}),i.jsx("span",{className:`rm-slot__ready${e.isReady?" rm-slot__ready--yes":""}`,children:e.isReady?"已准备":"未准备"}),!e.isConnected&&i.jsx("span",{className:"rm-slot__dc",children:"断线"}),t&&e.type==="ai"&&i.jsx("button",{className:"rm-slot__toggle",onClick:()=>r(e.playerId,"empty"),children:"移除"})]})}const by=`
.rm-screen {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;
  background: var(--color-bg);
  padding: 32px 16px;
}
.rm-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 520px;
}

/* Header */
.rm-header {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
}
.rm-room-title {
  font-size: 1.2rem;
  color: var(--color-text);
  margin: 0;
}
.rm-room-code {
  font-size: 1.6rem;
  font-family: var(--font-mono);
  color: var(--color-accent);
  letter-spacing: 0.2em;
  font-weight: bold;
  text-shadow: var(--glow-accent);
}
.rm-room-status {
  margin-left: auto;
}
.rm-status {
  font-size: 0.75rem;
  padding: 3px 10px;
  border-radius: 10px;
}
.rm-status--ok {
  background: rgba(0, 200, 100, 0.15);
  color: #00c864;
  border: 1px solid rgba(0, 200, 100, 0.3);
}
.rm-status--warn {
  background: rgba(255, 160, 0, 0.15);
  color: #ffa000;
  border: 1px solid rgba(255, 160, 0, 0.3);
}

.rm-error {
  width: 100%;
  padding: 8px 12px;
  background: rgba(255, 60, 60, 0.12);
  border: 1px solid rgba(255, 60, 60, 0.3);
  border-radius: 6px;
  color: #ff6060;
  font-size: 0.85rem;
}

/* Slots */
.rm-slots {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.rm-slot {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  background: var(--color-bg-panel);
  font-size: 0.85rem;
}
.rm-slot--local {
  border-color: var(--color-accent);
  background: rgba(0, 240, 255, 0.05);
}
.rm-slot--empty {
  opacity: 0.5;
}
.rm-slot--dc {
  opacity: 0.6;
}
.rm-slot__index {
  color: var(--color-text-muted);
  font-size: 0.75rem;
  width: 24px;
}
.rm-slot__type-badge {
  font-size: 0.7rem;
  color: #ffa000;
  font-weight: bold;
  width: 20px;
}
.rm-slot__name {
  color: var(--color-text);
  font-weight: bold;
  flex: 1;
}
.rm-slot__unit {
  color: var(--color-text-muted);
  font-size: 0.78rem;
}
.rm-slot__ready {
  font-size: 0.72rem;
  color: var(--color-text-muted);
  padding: 2px 8px;
  border-radius: 8px;
  border: 1px solid var(--color-border);
}
.rm-slot__ready--yes {
  color: #00c864;
  border-color: rgba(0, 200, 100, 0.3);
  background: rgba(0, 200, 100, 0.1);
}
.rm-slot__dc {
  color: #ff6060;
  font-size: 0.72rem;
}
.rm-slot__toggle {
  padding: 2px 8px;
  border: 1px solid var(--color-border);
  background: var(--color-bg);
  color: var(--color-text-muted);
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.72rem;
}
.rm-slot__toggle:hover {
  border-color: var(--color-accent);
  color: var(--color-text);
}

/* Header extras */
.rm-lock {
  font-size: 0.9rem;
}

/* Unit selection */
.rm-section {
  width: 100%;
}
.rm-section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.rm-section-title {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.rm-random-btn {
  padding: 4px 12px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-panel);
  color: var(--color-text);
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.78rem;
  transition: all 0.15s;
}
.rm-random-btn:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
.rm-unit-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  gap: 6px;
}
.rm-unit-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 8px 4px;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  background: var(--color-bg-panel);
  color: var(--color-text);
  cursor: pointer;
  transition: all 0.15s;
}
.rm-unit-btn:hover:not(:disabled) {
  border-color: var(--color-accent);
}
.rm-unit-btn--selected {
  border-color: var(--color-accent);
  background: rgba(0, 240, 255, 0.1);
  box-shadow: 0 0 8px rgba(0, 240, 255, 0.2);
}
.rm-unit-btn--taken {
  opacity: 0.3;
  cursor: not-allowed;
}
.rm-unit-code {
  font-size: 0.9rem;
  font-weight: bold;
  font-family: var(--font-mono);
  color: var(--color-accent);
}
.rm-unit-name {
  font-size: 0.68rem;
  color: var(--color-text-muted);
}

/* Actions */
.rm-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
.rm-btn {
  padding: 10px 24px;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  border: none;
  transition: opacity 0.15s;
}
.rm-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.rm-btn--ready {
  background: var(--color-accent);
  color: #000;
  font-weight: bold;
}
.rm-btn--unready {
  background: var(--color-bg-panel);
  color: var(--color-text);
  border: 1px solid var(--color-accent);
}
.rm-btn--start {
  background: #00c864;
  color: #000;
  font-weight: bold;
}
.rm-btn--start:hover:not(:disabled) { opacity: 0.85; }
.rm-btn--leave {
  background: none;
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
  font-size: 0.82rem;
}
.rm-btn--leave:hover {
  border-color: #ff6060;
  color: #ff6060;
}
`;function _y(){return"wss://embryo-machine.onrender.com"}const Iy=_y();function ky({onBack:e}){const[n]=j.useState(Iy),[t,r]=j.useState("lobby"),[a,o]=j.useState(null),s=j.useCallback((p,m)=>{o({type:"create",playerName:p,settings:m}),r("connected")},[]),c=j.useCallback((p,m,h)=>{o({type:"join",roomCode:p,playerName:m,password:h}),r("connected")},[]),d=j.useCallback(()=>{t!=="connected"&&(o({type:"browse"}),r("connected"))},[t]),u=j.useCallback(()=>{o(null),r("lobby")},[]);return t==="lobby"?i.jsx(zm,{onBack:e,onCreateRoom:s,onJoinRoom:c,onRefreshRooms:d}):i.jsx(fy,{serverUrl:n,children:i.jsx(jy,{pendingAction:a,onBack:e,onDisconnect:u})})}function jy({pendingAction:e,onDisconnect:n}){const{state:t,room:r,localPlayerId:a,send:o,connectionStatus:s,lastError:c,roomList:d}=ac(),[u,p]=j.useState(!1);return!u&&s==="connected"&&e&&(e.type==="create"?o({type:"CREATE_ROOM",playerName:e.playerName,settings:e.settings}):e.type==="join"?o({type:"JOIN_ROOM",roomCode:e.roomCode,playerName:e.playerName,password:e.password}):e.type==="browse"&&o({type:"LIST_ROOMS"}),p(!0)),(e==null?void 0:e.type)==="browse"&&!r&&!t?i.jsx(zm,{onBack:n,onCreateRoom:(m,h)=>{o({type:"CREATE_ROOM",playerName:m,settings:h})},onJoinRoom:(m,h,g)=>{o({type:"JOIN_ROOM",roomCode:m,playerName:h,password:g})},roomList:d,onRefreshRooms:()=>o({type:"LIST_ROOMS"})}):s==="connecting"?i.jsxs("div",{className:"og-connecting",children:[i.jsx("div",{className:"og-spinner"}),i.jsx("p",{children:"正在连接服务器…"}),i.jsx("button",{className:"ol-btn ol-btn--back",onClick:n,children:"取消"}),i.jsx("style",{children:Zs})]}):r&&!t?i.jsx(vy,{room:r,localPlayerId:a,connectionStatus:s,lastError:c,send:o,onLeave:n}):t?i.jsx(Yl,{children:i.jsx(gy,{children:i.jsx(wy,{})})}):i.jsxs("div",{className:"og-connecting",children:[i.jsx("div",{className:"og-spinner"}),i.jsx("p",{children:"等待服务器响应…"}),c&&i.jsx("div",{className:"rm-error",children:c}),i.jsx("button",{className:"ol-btn ol-btn--back",onClick:n,children:"返回"}),i.jsx("style",{children:Zs})]})}function wy(){const e=Sa(),{dispatch:n,aiConfig:t}=Ce(),{localPlayerId:r,connectionStatus:a,plottingStatus:o,lastError:s,turnDeadline:c}=ac(),[d,u]=j.useState(null);j.useEffect(()=>{if(!c){u(null);return}const k=()=>{const M=Math.max(0,Math.ceil((c-Date.now())/1e3));u(M)};k();const T=setInterval(k,500);return()=>clearInterval(T)},[c]),j.useEffect(()=>{e.phase==="pregame"&&n({type:"START_PLOTTING"})},[e.phase,n]);const[p,m]=j.useState([{id:"map",zIndex:10},{id:"log",zIndex:11},{id:"mecha",zIndex:12},{id:"plot",zIndex:100}]),h=j.useCallback(k=>{m(T=>{const M=Math.max(...T.map(L=>L.zIndex)),E=T.find(L=>L.id===k);if(E&&E.zIndex===M)return T;const C=[...T].sort((L,P)=>L.zIndex-P.zIndex),$=10,D=new Map;let w=0;for(const L of C)L.id!==k&&D.set(L.id,$+w++);return D.set(k,$+C.length-1),T.map(L=>({...L,zIndex:D.get(L.id)??L.zIndex}))})},[]),g=k=>{var T;return((T=p.find(M=>M.id===k))==null?void 0:T.zIndex)??10},f=j.useCallback(k=>[],[]),y=Math.max(400,Math.min(window.innerWidth*.6,620)),I=300,v=window.innerWidth-I-16,x=380,b=window.innerWidth-x-16;return i.jsxs("div",{className:"game-screen",style:{position:"relative",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[i.jsxs("div",{className:"og-status-bar",children:[i.jsxs("span",{className:"og-round",children:["第 ",e.roundNumber," 回合"]}),i.jsx("span",{className:"og-phase",children:Sy(e.phase)}),e.currentTiming&&i.jsxs("span",{className:"og-timing",children:["▶ ",Cy(e.currentTiming)]}),e.turnOrder.length>0&&i.jsxs("span",{className:"og-debug-info",title:"当前行动顺序",children:["[",e.turnOrder.map(k=>k.replace("player","P")).join("→"),"]"]}),d!==null&&d>0&&i.jsxs("span",{className:`og-countdown${d<=10?" og-countdown--warn":""}`,children:["⏱ ",d,"s"]}),i.jsx("span",{style:{flex:1}}),o&&e.phase==="plotting"&&i.jsxs("span",{className:"og-plotting",children:["布局进度: ",o.confirmed.length,"/",o.total]}),i.jsx("button",{className:"og-export-btn",onClick:()=>Vm(e,{localPlayerId:r??void 0,connectionStatus:a}),title:"导出全量日志（含调试状态快照）",children:"📋 导出日志"}),i.jsx("span",{className:`og-conn og-conn--${a}`,children:a==="connected"?"在线":a}),r&&i.jsx("span",{className:"og-pid",children:r.replace("player","P")})]}),s&&i.jsx("div",{className:"rm-error",style:{margin:"4px 16px 0"},children:s}),i.jsxs("div",{style:{position:"relative",flex:1},children:[i.jsx(un,{id:"map",title:"地图",initialPos:{x:16,y:8},width:y,minHeight:300,zIndex:g("map"),onFocus:h,siblingRects:f("map"),children:i.jsx("div",{style:{height:"calc(100vh - 100px)",minHeight:300},children:i.jsx(ec,{})})}),i.jsx(un,{id:"log",title:"行动日志",initialPos:{x:v,y:8},width:I,height:260,minHeight:120,zIndex:g("log"),onFocus:h,siblingRects:f("log"),children:i.jsx(Lm,{})}),i.jsx(un,{id:"mecha",title:"机体信息",initialPos:{x:v,y:280},width:I,minHeight:160,zIndex:g("mecha"),onFocus:h,siblingRects:f("mecha"),children:i.jsx(Nm,{})}),e.phase==="plotting"&&e.plottingStep!=="complete"&&e.plottingStep!==null&&!e.plottingStep.startsWith("transition_to_")&&!Ye(t,e.plottingStep)&&i.jsx(un,{id:"plot",title:"布局阶段",initialPos:{x:b,y:8},width:x,height:620,minHeight:80,zIndex:g("plot"),onFocus:h,siblingRects:f("plot"),children:i.jsx(Us,{})})]}),i.jsx(_m,{}),i.jsx(Im,{}),i.jsx("style",{children:Zs})]})}function Sy(e){return{pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"主要阶段 1",action_seg2:"主要阶段 2",cleanup:"清理阶段",game_over:"游戏结束"}[e]??e}function Cy(e){return{movement:"移动",ranged:"射击",melee:"近战",special:"特殊"}[e]??e}const Zs=`
.og-connecting {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 16px;
  background: var(--color-bg);
  color: var(--color-text);
}
.og-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--color-border);
  border-top-color: var(--color-accent);
  border-radius: 50%;
  animation: og-spin 0.8s linear infinite;
}
@keyframes og-spin { to { transform: rotate(360deg); } }

.og-status-bar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 16px;
  background: var(--color-bg-panel);
  border-bottom: 1px solid var(--color-border);
  font-size: 0.85rem;
  flex-shrink: 0;
}
.og-phase { font-weight: bold; color: var(--color-accent); }
.og-round { color: var(--color-text-muted); }
.og-timing { color: var(--color-text-muted); font-size: 0.8rem; }
.og-countdown {
  font-size: 0.85rem;
  font-weight: bold;
  color: #4fc3f7;
  padding: 2px 8px;
  border: 1px solid rgba(79, 195, 247, 0.3);
  border-radius: 8px;
  background: rgba(79, 195, 247, 0.1);
  font-variant-numeric: tabular-nums;
}
.og-countdown--warn {
  color: #ff6060;
  border-color: rgba(255, 96, 96, 0.4);
  background: rgba(255, 96, 96, 0.15);
  animation: og-countdown-blink 1s ease-in-out infinite;
}
@keyframes og-countdown-blink {
  50% { opacity: 0.6; }
}
.og-plotting {
  font-size: 0.78rem;
  color: #ffa000;
  padding: 2px 8px;
  border: 1px solid rgba(255, 160, 0, 0.3);
  border-radius: 8px;
  background: rgba(255, 160, 0, 0.1);
}
.og-conn {
  font-size: 0.72rem;
  padding: 2px 8px;
  border-radius: 8px;
}
.og-conn--connected {
  color: #00c864;
  border: 1px solid rgba(0, 200, 100, 0.3);
  background: rgba(0, 200, 100, 0.1);
}
.og-conn--reconnecting, .og-conn--connecting {
  color: #ffa000;
  border: 1px solid rgba(255, 160, 0, 0.3);
  background: rgba(255, 160, 0, 0.1);
}
.og-conn--disconnected {
  color: #ff6060;
  border: 1px solid rgba(255, 60, 60, 0.3);
  background: rgba(255, 60, 60, 0.1);
}
.og-pid {
  font-size: 0.78rem;
  font-weight: bold;
  color: var(--color-accent);
  font-family: var(--font-mono);
}
.og-export-btn {
  font-size: 0.72rem;
  padding: 2px 8px;
  border-radius: 6px;
  border: 1px solid var(--color-border);
  background: var(--color-bg);
  color: var(--color-text);
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s, border-color 0.15s;
}
.og-export-btn:hover {
  background: var(--color-bg-panel);
  border-color: var(--color-accent);
}
.og-debug-info {
  font-size: 0.72rem;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  opacity: 0.7;
}
`;function Ny(){const e=Sa(),{rawDispatch:n,aiConfig:t,setAIConfig:r,getReplayData:a,autoSaveEnabled:o,setAutoSaveEnabled:s,exposureMode:c,setExposureMode:d}=Ce(),[u,p]=j.useState("home"),[m,h]=j.useState("units"),[g,f]=j.useState(!0);function y(I){n({type:"LOAD_GAME",state:I.gameState}),r(I.aiConfig),p("game")}return u==="rules"?i.jsx(yv,{onBack:()=>p((e.phase==="setup","game"))}):u==="data"?i.jsx(_v,{onBack:()=>p("game")}):u==="load"?i.jsx(Gd,{mode:"load",onBack:()=>p("home"),onLoad:y}):u==="replay"?i.jsx(Lv,{onBack:()=>p("home")}):u==="save"?i.jsx(Gd,{mode:"save",onBack:()=>p("game"),currentState:e,aiConfig:t}):u==="mapEditor"?i.jsx(ty,{onBack:()=>p("home")}):u==="online"?i.jsx(ky,{onBack:()=>p("home")}):u==="home"?i.jsx(Sx,{onStart:()=>{Te.init(),h("units"),p("game")},onOnlinePlay:()=>{Te.init(),p("online")},onViewRules:()=>p("rules"),onViewData:()=>p("data"),onLoadGame:()=>p("load"),onReplay:()=>p("replay"),onMapEditor:()=>p("mapEditor"),exposureMode:c,onToggleExposure:()=>d(!c),autoFill:g,onToggleAutoFill:()=>f(!g)}):e.phase==="setup"?m==="units"?i.jsx(hx,{onNext:()=>h("spawn"),autoFill:g}):i.jsx(jx,{onBack:()=>h("units")}):e.phase==="game_over"?i.jsx(Dy,{onHome:()=>{p("home"),h("units")},onSaveReplay:()=>{const I=a();if(!I)return;const v=e.players.player1.isDefeated,x=e.players.player2.isDefeated,b=v&&x?"draw":v?"player2":x?"player1":null;try{ox(I.initialState,I.actions,b),alert("录像已保存！")}catch{alert("保存失败，存储空间可能不足。")}}}):i.jsx(My,{onSave:()=>p("save"),autoSaveEnabled:o,onToggleAutoSave:()=>s(!o)})}function My({onSave:e,autoSaveEnabled:n,onToggleAutoSave:t}){const r=Sa(),{dispatch:a,exposureMode:o,getCard:s,aiConfig:c}=Ce();j.useEffect(()=>{r.phase==="pregame"&&a({type:"START_PLOTTING"})},[r.phase,a]);const d=j.useRef(r.phase);j.useEffect(()=>{const T=d.current;if(d.current=r.phase,!!o&&T==="plotting"&&r.phase==="action_seg1"){const M=E=>{if(!E)return"无";const C=s(E.defId);return C?C.nameCn:E.defId};for(const E of r.playerIds){const C=r.players[E];if(C.isDefeated)continue;const $=`P${E.replace("player","")}`;a({type:"ADD_LOG",message:`[暴露] ${$} 布局: 段1=${M(C.plotSeg1)} / 段2=${M(C.plotSeg2)}`})}}},[r.phase]);const[u,p]=j.useState([{id:"map",zIndex:10},{id:"log",zIndex:11},{id:"mecha",zIndex:12},{id:"plot",zIndex:100}]),m=j.useRef(new Map),h=j.useCallback(T=>{p(M=>{const E=Math.max(...M.map(P=>P.zIndex)),C=M.find(P=>P.id===T);if(C&&C.zIndex===E)return M;const $=[...M].sort((P,G)=>P.zIndex-G.zIndex),D=10,w=new Map;let L=0;for(const P of $)P.id!==T&&w.set(P.id,D+L++);return w.set(T,D+$.length-1),M.map(P=>({...P,zIndex:w.get(P.id)??P.zIndex}))})},[]),g=T=>{var M;return((M=u.find(E=>E.id===T))==null?void 0:M.zIndex)??10},f=j.useCallback(T=>{const M=[];return m.current.forEach((E,C)=>{C!==T&&E&&M.push(E.getBoundingClientRect())}),M},[]),y=Math.max(400,Math.min(window.innerWidth*.6,620)),I=300,v=window.innerWidth-I-16,x=36,b=380,k=window.innerWidth-b-16;return i.jsxs("div",{className:"game-screen",style:{position:"relative",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[i.jsx("div",{className:"game-screen__header",style:{flexShrink:0},children:i.jsx(Ty,{onSave:e,autoSaveEnabled:n,onToggleAutoSave:t})}),i.jsxs("div",{style:{position:"relative",flex:1},children:[i.jsx(un,{id:"map",title:"地图",initialPos:{x:16,y:8},width:y,minHeight:300,zIndex:g("map"),onFocus:h,siblingRects:f("map"),children:i.jsx("div",{style:{height:`calc(100vh - ${x+60}px)`,minHeight:300},children:i.jsx(ec,{})})}),i.jsx(un,{id:"log",title:"行动日志",initialPos:{x:v,y:8},width:I,height:260,minHeight:120,zIndex:g("log"),onFocus:h,siblingRects:f("log"),children:i.jsx(Lm,{})}),i.jsx(un,{id:"mecha",title:"机体信息",initialPos:{x:v,y:280},width:I,minHeight:160,zIndex:g("mecha"),onFocus:h,siblingRects:f("mecha"),children:i.jsx(Nm,{})}),r.phase==="plotting"&&r.plottingStep!=="complete"&&r.plottingStep!==null&&!r.plottingStep.startsWith("transition_to_")&&!Ye(c,r.plottingStep)&&i.jsx(un,{id:"plot",title:"布局阶段",initialPos:{x:k,y:8},width:b,height:620,minHeight:80,zIndex:g("plot"),onFocus:h,siblingRects:f("plot"),children:i.jsx(Us,{})}),r.phase==="plotting"&&r.plottingStep!=="complete"&&r.plottingStep!==null&&!r.plottingStep.startsWith("transition_to_")&&Ye(c,r.plottingStep)&&i.jsx("div",{style:{position:"absolute",width:0,height:0,overflow:"hidden",opacity:0,pointerEvents:"none"},children:i.jsx(Us,{})})]}),i.jsx(_m,{}),i.jsx(Im,{}),i.jsx($y,{}),i.jsx("style",{children:Vy})]})}function Ty({onSave:e,autoSaveEnabled:n,onToggleAutoSave:t}){const r=Sa(),a={pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"行动阶段 [主要阶段 1]",action_seg2:"行动阶段 [主要阶段 2]",cleanup:"清理阶段",game_over:"游戏结束"},o={movement:"移动",ranged:"射击",melee:"近战",special:"特殊"};return i.jsxs("div",{className:"phase-bar",children:[i.jsxs("span",{className:"phase-bar__round",children:["第 ",r.roundNumber," 回合"]}),i.jsx("span",{className:"phase-bar__phase",children:a[r.phase]??r.phase}),r.currentTiming&&i.jsxs("span",{className:"phase-bar__timing",children:["▶ ",o[r.currentTiming]??r.currentTiming]}),i.jsx("span",{style:{flex:1}}),i.jsx("button",{className:"phase-bar__autosave-btn",onClick:t,title:n?"自动存档已开启（点击关闭）":"自动存档已关闭（点击开启）",children:n?"💾 自动":"💾 关"}),i.jsx("button",{className:"phase-bar__save-btn",onClick:e,title:"保存游戏",children:"💾 保存"}),i.jsx("button",{className:"phase-bar__save-btn",onClick:()=>Vm(r),title:"导出全量日志（含调试状态快照）",children:"📋 日志"})]})}function Ey(e){return e.startsWith("[DBG]")?"log-panel__entry log-panel__entry--debug":e.startsWith("===")?"log-panel__entry log-panel__entry--round-start":e.startsWith("---")?"log-panel__entry log-panel__entry--round-end":e.includes("发动")||e.includes("攻击")?"log-panel__entry log-panel__entry--attack":e.includes("摧毁")||e.includes("连锁")||e.includes("诱爆")?"log-panel__entry log-panel__entry--damage":e.includes("移动到")?"log-panel__entry log-panel__entry--move":e.includes("获胜")||e.includes("击破")||e.includes("平局")?"log-panel__entry log-panel__entry--victory":"log-panel__entry"}function Lm(){const e=Sa();return i.jsx("div",{className:"log-panel",children:i.jsx("div",{className:"log-panel__entries",children:[...e.log].reverse().map((n,t)=>i.jsx("div",{className:Ey(n),children:n},t))})})}function Dy({onHome:e,onSaveReplay:n}){const{state:t,dispatch:r}=Ce(),a=t.log[t.log.length-1]??"游戏结束",o=t.players.player1.isDefeated,s=t.players.player2.isDefeated,c=o&&s?"双方同时击破":o?"玩家 2 获胜":"玩家 1 获胜";function d(){r({type:"RESET_GAME"}),e()}return i.jsxs("div",{className:"gameover-screen",children:[i.jsx("div",{className:"gameover-icon",children:"💥"}),i.jsx("h1",{className:"gameover-title",children:c}),i.jsx("p",{className:"gameover-sub",children:a}),i.jsxs("div",{className:"gameover-actions",children:[i.jsx("button",{className:"gameover-restart",onClick:d,children:"返回主菜单"}),i.jsx("button",{className:"gameover-save-replay",onClick:n,children:"🎬 保存录像"})]}),i.jsx("style",{children:Py})]})}function $y(){const{isAnimating:e,skipAnimation:n}=ja();return e?i.jsx("button",{className:"skip-anim-btn",onClick:n,children:"⏩ 跳过"}):null}function Ay(){return i.jsx(Yl,{children:i.jsx(bm,{children:i.jsx(Ny,{})})})}const Vy=`
.game-screen__header {
  background: var(--color-bg-panel);
  border-bottom: 1px solid var(--color-border);
}

.skip-anim-btn {
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 900;
  padding: 8px 20px;
  background: rgba(0,0,0,0.7);
  color: #fff;
  border: 1px solid var(--color-accent);
  border-radius: 6px;
  font-size: 0.85rem;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: background 0.15s;
}
.skip-anim-btn:hover {
  background: rgba(0,0,0,0.9);
}

.phase-bar {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 6px 16px;
  font-size: 0.9rem;
}
.phase-bar__round { color: var(--color-text-muted); }
.phase-bar__phase { font-weight: bold; color: var(--color-accent); }
.phase-bar__timing { color: var(--color-text-muted); font-size: 0.8rem; }

.phase-bar__save-btn,
.phase-bar__autosave-btn {
  padding: 3px 10px;
  border-radius: 4px;
  font-size: 0.75rem;
  cursor: pointer;
  border: 1px solid var(--color-border);
  background: var(--color-bg-panel);
  color: var(--color-text-muted);
  transition: border-color 0.15s, color 0.15s;
}
.phase-bar__save-btn:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
.phase-bar__autosave-btn {
  font-size: 0.72rem;
}
.phase-bar__autosave-btn:hover {
  border-color: var(--color-accent);
  color: var(--color-text);
}

.log-panel {
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.log-panel__entries {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  scrollbar-width: thin;
  scrollbar-color: rgba(255,255,255,0.2) transparent;
}
.log-panel__entries::-webkit-scrollbar {
  width: 6px;
}
.log-panel__entries::-webkit-scrollbar-track {
  background: transparent;
}
.log-panel__entries::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.2);
  border-radius: 3px;
}
.log-panel__entries::-webkit-scrollbar-thumb:hover {
  background: rgba(255,255,255,0.35);
}
.log-panel__entry {
  font-size: 0.78rem;
  color: var(--color-text);
  padding: 2px 0;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  line-height: 1.4;
}
.log-panel__entry--debug       { color: #888; font-size: 0.68rem; font-family: var(--font-mono); opacity: 0.7; border-bottom-color: transparent; }
.log-panel__entry--round-start { color: #f0c040; font-weight: bold; padding-top: 6px; }
.log-panel__entry--round-end   { color: var(--color-text-muted); font-style: italic; }
.log-panel__entry--attack      { color: #ff9944; }
.log-panel__entry--damage      { color: #ff6060; font-size: 0.72rem; }
.log-panel__entry--move        { color: #66ccaa; }
.log-panel__entry--victory     { color: var(--color-accent); font-weight: bold; font-size: 0.85rem; }
`,Py=`
.gameover-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;
  background: var(--color-bg);
}
.gameover-icon { font-size: 4rem; animation: pulse 1.5s infinite; }
@keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.15)} }
.gameover-title { font-size: 2.5rem; color: var(--color-accent); text-align: center; margin: 0; }
.gameover-sub   { font-size: 1rem; color: var(--color-text-muted); margin: 0; }
.gameover-actions {
  display: flex;
  gap: 12px;
  margin-top: 12px;
  flex-wrap: wrap;
  justify-content: center;
}
.gameover-restart {
  padding: 12px 40px;
  background: var(--color-accent);
  color: #000;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}
.gameover-restart:hover { opacity: 0.85; }
.gameover-save-replay {
  padding: 12px 32px;
  background: var(--color-bg-panel);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s;
}
.gameover-save-replay:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
`;Bi.createRoot(document.getElementById("root")).render(i.jsx(af.StrictMode,{children:i.jsx(Ay,{})}));

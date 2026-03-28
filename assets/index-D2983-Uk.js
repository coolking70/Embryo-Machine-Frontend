var Xf=Object.defineProperty;var Qf=(e,n,t)=>n in e?Xf(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var en=(e,n,t)=>Qf(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function qf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var uu={exports:{}},Qo={},pu={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _r=Symbol.for("react.element"),em=Symbol.for("react.portal"),nm=Symbol.for("react.fragment"),tm=Symbol.for("react.strict_mode"),am=Symbol.for("react.profiler"),rm=Symbol.for("react.provider"),om=Symbol.for("react.context"),im=Symbol.for("react.forward_ref"),sm=Symbol.for("react.suspense"),lm=Symbol.for("react.memo"),cm=Symbol.for("react.lazy"),mc=Symbol.iterator;function dm(e){return e===null||typeof e!="object"?null:(e=mc&&e[mc]||e["@@iterator"],typeof e=="function"?e:null)}var fu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mu=Object.assign,gu={};function xa(e,n,t){this.props=e,this.context=n,this.refs=gu,this.updater=t||fu}xa.prototype.isReactComponent={};xa.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};xa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hu(){}hu.prototype=xa.prototype;function il(e,n,t){this.props=e,this.context=n,this.refs=gu,this.updater=t||fu}var sl=il.prototype=new hu;sl.constructor=il;mu(sl,xa.prototype);sl.isPureReactComponent=!0;var gc=Array.isArray,xu=Object.prototype.hasOwnProperty,ll={current:null},vu={key:!0,ref:!0,__self:!0,__source:!0};function bu(e,n,t){var a,r={},i=null,s=null;if(n!=null)for(a in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(i=""+n.key),n)xu.call(n,a)&&!vu.hasOwnProperty(a)&&(r[a]=n[a]);var c=arguments.length-2;if(c===1)r.children=t;else if(1<c){for(var d=Array(c),u=0;u<c;u++)d[u]=arguments[u+2];r.children=d}if(e&&e.defaultProps)for(a in c=e.defaultProps,c)r[a]===void 0&&(r[a]=c[a]);return{$$typeof:_r,type:e,key:i,ref:s,props:r,_owner:ll.current}}function um(e,n){return{$$typeof:_r,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function cl(e){return typeof e=="object"&&e!==null&&e.$$typeof===_r}function pm(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var hc=/\/+/g;function Ii(e,n){return typeof e=="object"&&e!==null&&e.key!=null?pm(""+e.key):n.toString(36)}function to(e,n,t,a,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case _r:case em:s=!0}}if(s)return s=e,r=r(s),e=a===""?"."+Ii(s,0):a,gc(r)?(t="",e!=null&&(t=e.replace(hc,"$&/")+"/"),to(r,n,t,"",function(u){return u})):r!=null&&(cl(r)&&(r=um(r,t+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(hc,"$&/")+"/")+e)),n.push(r)),1;if(s=0,a=a===""?".":a+":",gc(e))for(var c=0;c<e.length;c++){i=e[c];var d=a+Ii(i,c);s+=to(i,n,t,d,r)}else if(d=dm(e),typeof d=="function")for(e=d.call(e),c=0;!(i=e.next()).done;)i=i.value,d=a+Ii(i,c++),s+=to(i,n,t,d,r);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function Er(e,n,t){if(e==null)return e;var a=[],r=0;return to(e,a,"","",function(i){return n.call(t,i,r++)}),a}function fm(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Ge={current:null},ao={transition:null},mm={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:ao,ReactCurrentOwner:ll};function yu(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:Er,forEach:function(e,n,t){Er(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Er(e,function(){n++}),n},toArray:function(e){return Er(e,function(n){return n})||[]},only:function(e){if(!cl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ae.Component=xa;ae.Fragment=nm;ae.Profiler=am;ae.PureComponent=il;ae.StrictMode=tm;ae.Suspense=sm;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mm;ae.act=yu;ae.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=mu({},e.props),r=e.key,i=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,s=ll.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in n)xu.call(n,d)&&!vu.hasOwnProperty(d)&&(a[d]=n[d]===void 0&&c!==void 0?c[d]:n[d])}var d=arguments.length-2;if(d===1)a.children=t;else if(1<d){c=Array(d);for(var u=0;u<d;u++)c[u]=arguments[u+2];a.children=c}return{$$typeof:_r,type:e.type,key:r,ref:i,props:a,_owner:s}};ae.createContext=function(e){return e={$$typeof:om,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:rm,_context:e},e.Consumer=e};ae.createElement=bu;ae.createFactory=function(e){var n=bu.bind(null,e);return n.type=e,n};ae.createRef=function(){return{current:null}};ae.forwardRef=function(e){return{$$typeof:im,render:e}};ae.isValidElement=cl;ae.lazy=function(e){return{$$typeof:cm,_payload:{_status:-1,_result:e},_init:fm}};ae.memo=function(e,n){return{$$typeof:lm,type:e,compare:n===void 0?null:n}};ae.startTransition=function(e){var n=ao.transition;ao.transition={};try{e()}finally{ao.transition=n}};ae.unstable_act=yu;ae.useCallback=function(e,n){return Ge.current.useCallback(e,n)};ae.useContext=function(e){return Ge.current.useContext(e)};ae.useDebugValue=function(){};ae.useDeferredValue=function(e){return Ge.current.useDeferredValue(e)};ae.useEffect=function(e,n){return Ge.current.useEffect(e,n)};ae.useId=function(){return Ge.current.useId()};ae.useImperativeHandle=function(e,n,t){return Ge.current.useImperativeHandle(e,n,t)};ae.useInsertionEffect=function(e,n){return Ge.current.useInsertionEffect(e,n)};ae.useLayoutEffect=function(e,n){return Ge.current.useLayoutEffect(e,n)};ae.useMemo=function(e,n){return Ge.current.useMemo(e,n)};ae.useReducer=function(e,n,t){return Ge.current.useReducer(e,n,t)};ae.useRef=function(e){return Ge.current.useRef(e)};ae.useState=function(e){return Ge.current.useState(e)};ae.useSyncExternalStore=function(e,n,t){return Ge.current.useSyncExternalStore(e,n,t)};ae.useTransition=function(){return Ge.current.useTransition()};ae.version="18.3.1";pu.exports=ae;var w=pu.exports;const gm=qf(w);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm=w,xm=Symbol.for("react.element"),vm=Symbol.for("react.fragment"),bm=Object.prototype.hasOwnProperty,ym=hm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_m={key:!0,ref:!0,__self:!0,__source:!0};function _u(e,n,t){var a,r={},i=null,s=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(s=n.ref);for(a in n)bm.call(n,a)&&!_m.hasOwnProperty(a)&&(r[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps,n)r[a]===void 0&&(r[a]=n[a]);return{$$typeof:xm,type:e,key:i,ref:s,props:r,_owner:ym.current}}Qo.Fragment=vm;Qo.jsx=_u;Qo.jsxs=_u;uu.exports=Qo;var o=uu.exports,ns={},Iu={exports:{}},on={},ku={exports:{}},ju={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(N,V){var F=N.length;N.push(V);e:for(;0<F;){var P=F-1>>>1,R=N[P];if(0<r(R,V))N[P]=V,N[F]=R,F=P;else break e}}function t(N){return N.length===0?null:N[0]}function a(N){if(N.length===0)return null;var V=N[0],F=N.pop();if(F!==V){N[0]=F;e:for(var P=0,R=N.length,Z=R>>>1;P<Z;){var Q=2*(P+1)-1,ne=N[Q],te=Q+1,Y=N[te];if(0>r(ne,F))te<R&&0>r(Y,ne)?(N[P]=Y,N[te]=F,P=te):(N[P]=ne,N[Q]=F,P=Q);else if(te<R&&0>r(Y,F))N[P]=Y,N[te]=F,P=te;else break e}}return V}function r(N,V){var F=N.sortIndex-V.sortIndex;return F!==0?F:N.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,c=s.now();e.unstable_now=function(){return s.now()-c}}var d=[],u=[],p=1,f=null,g=3,h=!1,m=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var V=t(u);V!==null;){if(V.callback===null)a(u);else if(V.startTime<=N)a(u),V.sortIndex=V.expirationTime,n(d,V);else break;V=t(u)}}function k(N){if(b=!1,y(N),!m)if(t(d)!==null)m=!0,B(T);else{var V=t(u);V!==null&&U(k,V.startTime-N)}}function T(N,V){m=!1,b&&(b=!1,v(S),S=-1),h=!0;var F=g;try{for(y(V),f=t(d);f!==null&&(!(f.expirationTime>V)||N&&!$());){var P=f.callback;if(typeof P=="function"){f.callback=null,g=f.priorityLevel;var R=P(f.expirationTime<=V);V=e.unstable_now(),typeof R=="function"?f.callback=R:f===t(d)&&a(d),y(V)}else a(d);f=t(d)}if(f!==null)var Z=!0;else{var Q=t(u);Q!==null&&U(k,Q.startTime-V),Z=!1}return Z}finally{f=null,g=F,h=!1}}var z=!1,j=null,S=-1,D=5,E=-1;function $(){return!(e.unstable_now()-E<D)}function L(){if(j!==null){var N=e.unstable_now();E=N;var V=!0;try{V=j(!0,N)}finally{V?M():(z=!1,j=null)}}else z=!1}var M;if(typeof x=="function")M=function(){x(L)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,H=O.port2;O.port1.onmessage=L,M=function(){H.postMessage(null)}}else M=function(){_(L,0)};function B(N){j=N,z||(z=!0,M())}function U(N,V){S=_(function(){N(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){m||h||(m=!0,B(T))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(d)},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var V=3;break;default:V=g}var F=g;g=V;try{return N()}finally{g=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,V){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var F=g;g=N;try{return V()}finally{g=F}},e.unstable_scheduleCallback=function(N,V,F){var P=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?P+F:P):F=P,N){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=F+R,N={id:p++,callback:V,priorityLevel:N,startTime:F,expirationTime:R,sortIndex:-1},F>P?(N.sortIndex=F,n(u,N),t(d)===null&&N===t(u)&&(b?(v(S),S=-1):b=!0,U(k,F-P))):(N.sortIndex=R,n(d,N),m||h||(m=!0,B(T))),N},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(N){var V=g;return function(){var F=g;g=V;try{return N.apply(this,arguments)}finally{g=F}}}})(ju);ku.exports=ju;var Im=ku.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km=w,rn=Im;function G(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wu=new Set,Xa={};function Dt(e,n){ia(e,n),ia(e+"Capture",n)}function ia(e,n){for(Xa[e]=n,e=0;e<n.length;e++)wu.add(n[e])}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ts=Object.prototype.hasOwnProperty,jm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xc={},vc={};function wm(e){return ts.call(vc,e)?!0:ts.call(xc,e)?!1:jm.test(e)?vc[e]=!0:(xc[e]=!0,!1)}function Sm(e,n,t,a){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cm(e,n,t,a){if(n===null||typeof n>"u"||Sm(e,n,t,a))return!0;if(a)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ue(e,n,t,a,r,i,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=s}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ae[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Ae[n]=new Ue(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ae[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ae[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ae[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ae[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ae[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ae[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ae[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var dl=/[\-:]([a-z])/g;function ul(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(dl,ul);Ae[n]=new Ue(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(dl,ul);Ae[n]=new Ue(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(dl,ul);Ae[n]=new Ue(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ae[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ae[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function pl(e,n,t,a){var r=Ae.hasOwnProperty(n)?Ae[n]:null;(r!==null?r.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Cm(n,t,r,a)&&(t=null),a||r===null?wm(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,a=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,a?e.setAttributeNS(a,n,t):e.setAttribute(n,t))))}var Un=km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Dr=Symbol.for("react.element"),Lt=Symbol.for("react.portal"),Rt=Symbol.for("react.fragment"),fl=Symbol.for("react.strict_mode"),as=Symbol.for("react.profiler"),Su=Symbol.for("react.provider"),Cu=Symbol.for("react.context"),ml=Symbol.for("react.forward_ref"),rs=Symbol.for("react.suspense"),os=Symbol.for("react.suspense_list"),gl=Symbol.for("react.memo"),Wn=Symbol.for("react.lazy"),Nu=Symbol.for("react.offscreen"),bc=Symbol.iterator;function wa(e){return e===null||typeof e!="object"?null:(e=bc&&e[bc]||e["@@iterator"],typeof e=="function"?e:null)}var be=Object.assign,ki;function Va(e){if(ki===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ki=n&&n[1]||""}return`
`+ki+e}var ji=!1;function wi(e,n){if(!e||ji)return"";ji=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var a=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){a=u}e.call(n.prototype)}else{try{throw Error()}catch(u){a=u}e()}}catch(u){if(u&&a&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),i=a.stack.split(`
`),s=r.length-1,c=i.length-1;1<=s&&0<=c&&r[s]!==i[c];)c--;for(;1<=s&&0<=c;s--,c--)if(r[s]!==i[c]){if(s!==1||c!==1)do if(s--,c--,0>c||r[s]!==i[c]){var d=`
`+r[s].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=s&&0<=c);break}}}finally{ji=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Va(e):""}function Nm(e){switch(e.tag){case 5:return Va(e.type);case 16:return Va("Lazy");case 13:return Va("Suspense");case 19:return Va("SuspenseList");case 0:case 2:case 15:return e=wi(e.type,!1),e;case 11:return e=wi(e.type.render,!1),e;case 1:return e=wi(e.type,!0),e;default:return""}}function is(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rt:return"Fragment";case Lt:return"Portal";case as:return"Profiler";case fl:return"StrictMode";case rs:return"Suspense";case os:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cu:return(e.displayName||"Context")+".Consumer";case Su:return(e._context.displayName||"Context")+".Provider";case ml:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gl:return n=e.displayName||null,n!==null?n:is(e.type)||"Memo";case Wn:n=e._payload,e=e._init;try{return is(e(n))}catch{}}return null}function Mm(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return is(n);case 8:return n===fl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ct(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Tm(e){var n=Mu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(s){a=""+s,i.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function $r(e){e._valueTracker||(e._valueTracker=Tm(e))}function Tu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Mu(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function xo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ss(e,n){var t=n.checked;return be({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function yc(e,n){var t=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;t=ct(n.value!=null?n.value:t),e._wrapperState={initialChecked:a,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Eu(e,n){n=n.checked,n!=null&&pl(e,"checked",n,!1)}function ls(e,n){Eu(e,n);var t=ct(n.value),a=n.type;if(t!=null)a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?cs(e,n.type,t):n.hasOwnProperty("defaultValue")&&cs(e,n.type,ct(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function _c(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function cs(e,n,t){(n!=="number"||xo(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Pa=Array.isArray;function Qt(e,n,t,a){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&a&&(e[t].defaultSelected=!0)}else{for(t=""+ct(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function ds(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(G(91));return be({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ic(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(G(92));if(Pa(t)){if(1<t.length)throw Error(G(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ct(t)}}function Du(e,n){var t=ct(n.value),a=ct(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),a!=null&&(e.defaultValue=""+a)}function kc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function $u(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function us(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?$u(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zr,zu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,a,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,a,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(zr=zr||document.createElement("div"),zr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Qa(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Em=["Webkit","ms","Moz","O"];Object.keys(Oa).forEach(function(e){Em.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Oa[n]=Oa[e]})});function Au(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Oa.hasOwnProperty(e)&&Oa[e]?(""+n).trim():n+"px"}function Vu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var a=t.indexOf("--")===0,r=Au(t,n[t],a);t==="float"&&(t="cssFloat"),a?e.setProperty(t,r):e[t]=r}}var Dm=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ps(e,n){if(n){if(Dm[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(G(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(G(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(G(61))}if(n.style!=null&&typeof n.style!="object")throw Error(G(62))}}function fs(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ms=null;function hl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gs=null,qt=null,ea=null;function jc(e){if(e=jr(e)){if(typeof gs!="function")throw Error(G(280));var n=e.stateNode;n&&(n=ai(n),gs(e.stateNode,e.type,n))}}function Pu(e){qt?ea?ea.push(e):ea=[e]:qt=e}function Lu(){if(qt){var e=qt,n=ea;if(ea=qt=null,jc(e),n)for(e=0;e<n.length;e++)jc(n[e])}}function Ru(e,n){return e(n)}function Ou(){}var Si=!1;function Ku(e,n,t){if(Si)return e(n,t);Si=!0;try{return Ru(e,n,t)}finally{Si=!1,(qt!==null||ea!==null)&&(Ou(),Lu())}}function qa(e,n){var t=e.stateNode;if(t===null)return null;var a=ai(t);if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(G(231,n,typeof t));return t}var hs=!1;if(Jn)try{var Sa={};Object.defineProperty(Sa,"passive",{get:function(){hs=!0}}),window.addEventListener("test",Sa,Sa),window.removeEventListener("test",Sa,Sa)}catch{hs=!1}function $m(e,n,t,a,r,i,s,c,d){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(p){this.onError(p)}}var Ka=!1,vo=null,bo=!1,xs=null,zm={onError:function(e){Ka=!0,vo=e}};function Am(e,n,t,a,r,i,s,c,d){Ka=!1,vo=null,$m.apply(zm,arguments)}function Vm(e,n,t,a,r,i,s,c,d){if(Am.apply(this,arguments),Ka){if(Ka){var u=vo;Ka=!1,vo=null}else throw Error(G(198));bo||(bo=!0,xs=u)}}function $t(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ju(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function wc(e){if($t(e)!==e)throw Error(G(188))}function Pm(e){var n=e.alternate;if(!n){if(n=$t(e),n===null)throw Error(G(188));return n!==e?null:e}for(var t=e,a=n;;){var r=t.return;if(r===null)break;var i=r.alternate;if(i===null){if(a=r.return,a!==null){t=a;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===t)return wc(r),e;if(i===a)return wc(r),n;i=i.sibling}throw Error(G(188))}if(t.return!==a.return)t=r,a=i;else{for(var s=!1,c=r.child;c;){if(c===t){s=!0,t=r,a=i;break}if(c===a){s=!0,a=r,t=i;break}c=c.sibling}if(!s){for(c=i.child;c;){if(c===t){s=!0,t=i,a=r;break}if(c===a){s=!0,a=i,t=r;break}c=c.sibling}if(!s)throw Error(G(189))}}if(t.alternate!==a)throw Error(G(190))}if(t.tag!==3)throw Error(G(188));return t.stateNode.current===t?e:n}function Bu(e){return e=Pm(e),e!==null?Fu(e):null}function Fu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Fu(e);if(n!==null)return n;e=e.sibling}return null}var Gu=rn.unstable_scheduleCallback,Sc=rn.unstable_cancelCallback,Lm=rn.unstable_shouldYield,Rm=rn.unstable_requestPaint,_e=rn.unstable_now,Om=rn.unstable_getCurrentPriorityLevel,xl=rn.unstable_ImmediatePriority,Uu=rn.unstable_UserBlockingPriority,yo=rn.unstable_NormalPriority,Km=rn.unstable_LowPriority,Hu=rn.unstable_IdlePriority,qo=null,Tn=null;function Jm(e){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(qo,e,void 0,(e.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:Gm,Bm=Math.log,Fm=Math.LN2;function Gm(e){return e>>>=0,e===0?32:31-(Bm(e)/Fm|0)|0}var Ar=64,Vr=4194304;function La(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _o(e,n){var t=e.pendingLanes;if(t===0)return 0;var a=0,r=e.suspendedLanes,i=e.pingedLanes,s=t&268435455;if(s!==0){var c=s&~r;c!==0?a=La(c):(i&=s,i!==0&&(a=La(i)))}else s=t&~r,s!==0?a=La(s):i!==0&&(a=La(i));if(a===0)return 0;if(n!==0&&n!==a&&!(n&r)&&(r=a&-a,i=n&-n,r>=i||r===16&&(i&4194240)!==0))return n;if(a&4&&(a|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)t=31-In(n),r=1<<t,a|=e[t],n&=~r;return a}function Um(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hm(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-In(i),c=1<<s,d=r[s];d===-1?(!(c&t)||c&a)&&(r[s]=Um(c,n)):d<=n&&(e.expiredLanes|=c),i&=~c}}function vs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Wu(){var e=Ar;return Ar<<=1,!(Ar&4194240)&&(Ar=64),e}function Ci(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ir(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-In(n),e[n]=t}function Wm(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-In(t),i=1<<r;n[r]=0,a[r]=-1,e[r]=-1,t&=~i}}function vl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-In(t),r=1<<a;r&n|e[a]&n&&(e[a]|=n),t&=~r}}var le=0;function Zu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Yu,bl,Xu,Qu,qu,bs=!1,Pr=[],nt=null,tt=null,at=null,er=new Map,nr=new Map,Yn=[],Zm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cc(e,n){switch(e){case"focusin":case"focusout":nt=null;break;case"dragenter":case"dragleave":tt=null;break;case"mouseover":case"mouseout":at=null;break;case"pointerover":case"pointerout":er.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":nr.delete(n.pointerId)}}function Ca(e,n,t,a,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:i,targetContainers:[r]},n!==null&&(n=jr(n),n!==null&&bl(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Ym(e,n,t,a,r){switch(n){case"focusin":return nt=Ca(nt,e,n,t,a,r),!0;case"dragenter":return tt=Ca(tt,e,n,t,a,r),!0;case"mouseover":return at=Ca(at,e,n,t,a,r),!0;case"pointerover":var i=r.pointerId;return er.set(i,Ca(er.get(i)||null,e,n,t,a,r)),!0;case"gotpointercapture":return i=r.pointerId,nr.set(i,Ca(nr.get(i)||null,e,n,t,a,r)),!0}return!1}function ep(e){var n=vt(e.target);if(n!==null){var t=$t(n);if(t!==null){if(n=t.tag,n===13){if(n=Ju(t),n!==null){e.blockedOn=n,qu(e.priority,function(){Xu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ro(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=ys(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);ms=a,t.target.dispatchEvent(a),ms=null}else return n=jr(t),n!==null&&bl(n),e.blockedOn=t,!1;n.shift()}return!0}function Nc(e,n,t){ro(e)&&t.delete(n)}function Xm(){bs=!1,nt!==null&&ro(nt)&&(nt=null),tt!==null&&ro(tt)&&(tt=null),at!==null&&ro(at)&&(at=null),er.forEach(Nc),nr.forEach(Nc)}function Na(e,n){e.blockedOn===n&&(e.blockedOn=null,bs||(bs=!0,rn.unstable_scheduleCallback(rn.unstable_NormalPriority,Xm)))}function tr(e){function n(r){return Na(r,e)}if(0<Pr.length){Na(Pr[0],e);for(var t=1;t<Pr.length;t++){var a=Pr[t];a.blockedOn===e&&(a.blockedOn=null)}}for(nt!==null&&Na(nt,e),tt!==null&&Na(tt,e),at!==null&&Na(at,e),er.forEach(n),nr.forEach(n),t=0;t<Yn.length;t++)a=Yn[t],a.blockedOn===e&&(a.blockedOn=null);for(;0<Yn.length&&(t=Yn[0],t.blockedOn===null);)ep(t),t.blockedOn===null&&Yn.shift()}var na=Un.ReactCurrentBatchConfig,Io=!0;function Qm(e,n,t,a){var r=le,i=na.transition;na.transition=null;try{le=1,yl(e,n,t,a)}finally{le=r,na.transition=i}}function qm(e,n,t,a){var r=le,i=na.transition;na.transition=null;try{le=4,yl(e,n,t,a)}finally{le=r,na.transition=i}}function yl(e,n,t,a){if(Io){var r=ys(e,n,t,a);if(r===null)Pi(e,n,a,ko,t),Cc(e,a);else if(Ym(r,e,n,t,a))a.stopPropagation();else if(Cc(e,a),n&4&&-1<Zm.indexOf(e)){for(;r!==null;){var i=jr(r);if(i!==null&&Yu(i),i=ys(e,n,t,a),i===null&&Pi(e,n,a,ko,t),i===r)break;r=i}r!==null&&a.stopPropagation()}else Pi(e,n,a,null,t)}}var ko=null;function ys(e,n,t,a){if(ko=null,e=hl(a),e=vt(e),e!==null)if(n=$t(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ju(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ko=e,null}function np(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Om()){case xl:return 1;case Uu:return 4;case yo:case Km:return 16;case Hu:return 536870912;default:return 16}default:return 16}}var qn=null,_l=null,oo=null;function tp(){if(oo)return oo;var e,n=_l,t=n.length,a,r="value"in qn?qn.value:qn.textContent,i=r.length;for(e=0;e<t&&n[e]===r[e];e++);var s=t-e;for(a=1;a<=s&&n[t-a]===r[i-a];a++);return oo=r.slice(e,1<a?1-a:void 0)}function io(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Lr(){return!0}function Mc(){return!1}function sn(e){function n(t,a,r,i,s){this._reactName=t,this._targetInst=r,this.type=a,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(t=e[c],this[c]=t?t(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Lr:Mc,this.isPropagationStopped=Mc,this}return be(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Lr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Lr)},persist:function(){},isPersistent:Lr}),n}var va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Il=sn(va),kr=be({},va,{view:0,detail:0}),eg=sn(kr),Ni,Mi,Ma,ei=be({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ma&&(Ma&&e.type==="mousemove"?(Ni=e.screenX-Ma.screenX,Mi=e.screenY-Ma.screenY):Mi=Ni=0,Ma=e),Ni)},movementY:function(e){return"movementY"in e?e.movementY:Mi}}),Tc=sn(ei),ng=be({},ei,{dataTransfer:0}),tg=sn(ng),ag=be({},kr,{relatedTarget:0}),Ti=sn(ag),rg=be({},va,{animationName:0,elapsedTime:0,pseudoElement:0}),og=sn(rg),ig=be({},va,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sg=sn(ig),lg=be({},va,{data:0}),Ec=sn(lg),cg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ug={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ug[e])?!!n[e]:!1}function kl(){return pg}var fg=be({},kr,{key:function(e){if(e.key){var n=cg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=io(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kl,charCode:function(e){return e.type==="keypress"?io(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?io(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mg=sn(fg),gg=be({},ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dc=sn(gg),hg=be({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kl}),xg=sn(hg),vg=be({},va,{propertyName:0,elapsedTime:0,pseudoElement:0}),bg=sn(vg),yg=be({},ei,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_g=sn(yg),Ig=[9,13,27,32],jl=Jn&&"CompositionEvent"in window,Ja=null;Jn&&"documentMode"in document&&(Ja=document.documentMode);var kg=Jn&&"TextEvent"in window&&!Ja,ap=Jn&&(!jl||Ja&&8<Ja&&11>=Ja),$c=" ",zc=!1;function rp(e,n){switch(e){case"keyup":return Ig.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function op(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ot=!1;function jg(e,n){switch(e){case"compositionend":return op(n);case"keypress":return n.which!==32?null:(zc=!0,$c);case"textInput":return e=n.data,e===$c&&zc?null:e;default:return null}}function wg(e,n){if(Ot)return e==="compositionend"||!jl&&rp(e,n)?(e=tp(),oo=_l=qn=null,Ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ap&&n.locale!=="ko"?null:n.data;default:return null}}var Sg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ac(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Sg[e.type]:n==="textarea"}function ip(e,n,t,a){Pu(a),n=jo(n,"onChange"),0<n.length&&(t=new Il("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var Ba=null,ar=null;function Cg(e){xp(e,0)}function ni(e){var n=Bt(e);if(Tu(n))return e}function Ng(e,n){if(e==="change")return n}var sp=!1;if(Jn){var Ei;if(Jn){var Di="oninput"in document;if(!Di){var Vc=document.createElement("div");Vc.setAttribute("oninput","return;"),Di=typeof Vc.oninput=="function"}Ei=Di}else Ei=!1;sp=Ei&&(!document.documentMode||9<document.documentMode)}function Pc(){Ba&&(Ba.detachEvent("onpropertychange",lp),ar=Ba=null)}function lp(e){if(e.propertyName==="value"&&ni(ar)){var n=[];ip(n,ar,e,hl(e)),Ku(Cg,n)}}function Mg(e,n,t){e==="focusin"?(Pc(),Ba=n,ar=t,Ba.attachEvent("onpropertychange",lp)):e==="focusout"&&Pc()}function Tg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ni(ar)}function Eg(e,n){if(e==="click")return ni(n)}function Dg(e,n){if(e==="input"||e==="change")return ni(n)}function $g(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var wn=typeof Object.is=="function"?Object.is:$g;function rr(e,n){if(wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var r=t[a];if(!ts.call(n,r)||!wn(e[r],n[r]))return!1}return!0}function Lc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rc(e,n){var t=Lc(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Lc(t)}}function cp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?cp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function dp(){for(var e=window,n=xo();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=xo(e.document)}return n}function wl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function zg(e){var n=dp(),t=e.focusedElem,a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&cp(t.ownerDocument.documentElement,t)){if(a!==null&&wl(t)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,i=Math.min(a.start,r);a=a.end===void 0?i:Math.min(a.end,r),!e.extend&&i>a&&(r=a,a=i,i=r),r=Rc(t,i);var s=Rc(t,a);r&&s&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),i>a?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ag=Jn&&"documentMode"in document&&11>=document.documentMode,Kt=null,_s=null,Fa=null,Is=!1;function Oc(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Is||Kt==null||Kt!==xo(a)||(a=Kt,"selectionStart"in a&&wl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Fa&&rr(Fa,a)||(Fa=a,a=jo(_s,"onSelect"),0<a.length&&(n=new Il("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Kt)))}function Rr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Jt={animationend:Rr("Animation","AnimationEnd"),animationiteration:Rr("Animation","AnimationIteration"),animationstart:Rr("Animation","AnimationStart"),transitionend:Rr("Transition","TransitionEnd")},$i={},up={};Jn&&(up=document.createElement("div").style,"AnimationEvent"in window||(delete Jt.animationend.animation,delete Jt.animationiteration.animation,delete Jt.animationstart.animation),"TransitionEvent"in window||delete Jt.transitionend.transition);function ti(e){if($i[e])return $i[e];if(!Jt[e])return e;var n=Jt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in up)return $i[e]=n[t];return e}var pp=ti("animationend"),fp=ti("animationiteration"),mp=ti("animationstart"),gp=ti("transitionend"),hp=new Map,Kc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ut(e,n){hp.set(e,n),Dt(n,[e])}for(var zi=0;zi<Kc.length;zi++){var Ai=Kc[zi],Vg=Ai.toLowerCase(),Pg=Ai[0].toUpperCase()+Ai.slice(1);ut(Vg,"on"+Pg)}ut(pp,"onAnimationEnd");ut(fp,"onAnimationIteration");ut(mp,"onAnimationStart");ut("dblclick","onDoubleClick");ut("focusin","onFocus");ut("focusout","onBlur");ut(gp,"onTransitionEnd");ia("onMouseEnter",["mouseout","mouseover"]);ia("onMouseLeave",["mouseout","mouseover"]);ia("onPointerEnter",["pointerout","pointerover"]);ia("onPointerLeave",["pointerout","pointerover"]);Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ra));function Jc(e,n,t){var a=e.type||"unknown-event";e.currentTarget=t,Vm(a,n,void 0,e),e.currentTarget=null}function xp(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],r=a.event;a=a.listeners;e:{var i=void 0;if(n)for(var s=a.length-1;0<=s;s--){var c=a[s],d=c.instance,u=c.currentTarget;if(c=c.listener,d!==i&&r.isPropagationStopped())break e;Jc(r,c,u),i=d}else for(s=0;s<a.length;s++){if(c=a[s],d=c.instance,u=c.currentTarget,c=c.listener,d!==i&&r.isPropagationStopped())break e;Jc(r,c,u),i=d}}}if(bo)throw e=xs,bo=!1,xs=null,e}function fe(e,n){var t=n[Cs];t===void 0&&(t=n[Cs]=new Set);var a=e+"__bubble";t.has(a)||(vp(n,e,2,!1),t.add(a))}function Vi(e,n,t){var a=0;n&&(a|=4),vp(t,e,a,n)}var Or="_reactListening"+Math.random().toString(36).slice(2);function or(e){if(!e[Or]){e[Or]=!0,wu.forEach(function(t){t!=="selectionchange"&&(Lg.has(t)||Vi(t,!1,e),Vi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Or]||(n[Or]=!0,Vi("selectionchange",!1,n))}}function vp(e,n,t,a){switch(np(n)){case 1:var r=Qm;break;case 4:r=qm;break;default:r=yl}t=r.bind(null,n,t,e),r=void 0,!hs||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function Pi(e,n,t,a,r){var i=a;if(!(n&1)&&!(n&2)&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var c=a.stateNode.containerInfo;if(c===r||c.nodeType===8&&c.parentNode===r)break;if(s===4)for(s=a.return;s!==null;){var d=s.tag;if((d===3||d===4)&&(d=s.stateNode.containerInfo,d===r||d.nodeType===8&&d.parentNode===r))return;s=s.return}for(;c!==null;){if(s=vt(c),s===null)return;if(d=s.tag,d===5||d===6){a=i=s;continue e}c=c.parentNode}}a=a.return}Ku(function(){var u=i,p=hl(t),f=[];e:{var g=hp.get(e);if(g!==void 0){var h=Il,m=e;switch(e){case"keypress":if(io(t)===0)break e;case"keydown":case"keyup":h=mg;break;case"focusin":m="focus",h=Ti;break;case"focusout":m="blur",h=Ti;break;case"beforeblur":case"afterblur":h=Ti;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Tc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=tg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=xg;break;case pp:case fp:case mp:h=og;break;case gp:h=bg;break;case"scroll":h=eg;break;case"wheel":h=_g;break;case"copy":case"cut":case"paste":h=sg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Dc}var b=(n&4)!==0,_=!b&&e==="scroll",v=b?g!==null?g+"Capture":null:g;b=[];for(var x=u,y;x!==null;){y=x;var k=y.stateNode;if(y.tag===5&&k!==null&&(y=k,v!==null&&(k=qa(x,v),k!=null&&b.push(ir(x,k,y)))),_)break;x=x.return}0<b.length&&(g=new h(g,m,null,t,p),f.push({event:g,listeners:b}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",g&&t!==ms&&(m=t.relatedTarget||t.fromElement)&&(vt(m)||m[Bn]))break e;if((h||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,h?(m=t.relatedTarget||t.toElement,h=u,m=m?vt(m):null,m!==null&&(_=$t(m),m!==_||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(b=Tc,k="onMouseLeave",v="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(b=Dc,k="onPointerLeave",v="onPointerEnter",x="pointer"),_=h==null?g:Bt(h),y=m==null?g:Bt(m),g=new b(k,x+"leave",h,t,p),g.target=_,g.relatedTarget=y,k=null,vt(p)===u&&(b=new b(v,x+"enter",m,t,p),b.target=y,b.relatedTarget=_,k=b),_=k,h&&m)n:{for(b=h,v=m,x=0,y=b;y;y=zt(y))x++;for(y=0,k=v;k;k=zt(k))y++;for(;0<x-y;)b=zt(b),x--;for(;0<y-x;)v=zt(v),y--;for(;x--;){if(b===v||v!==null&&b===v.alternate)break n;b=zt(b),v=zt(v)}b=null}else b=null;h!==null&&Bc(f,g,h,b,!1),m!==null&&_!==null&&Bc(f,_,m,b,!0)}}e:{if(g=u?Bt(u):window,h=g.nodeName&&g.nodeName.toLowerCase(),h==="select"||h==="input"&&g.type==="file")var T=Ng;else if(Ac(g))if(sp)T=Dg;else{T=Tg;var z=Mg}else(h=g.nodeName)&&h.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(T=Eg);if(T&&(T=T(e,u))){ip(f,T,t,p);break e}z&&z(e,g,u),e==="focusout"&&(z=g._wrapperState)&&z.controlled&&g.type==="number"&&cs(g,"number",g.value)}switch(z=u?Bt(u):window,e){case"focusin":(Ac(z)||z.contentEditable==="true")&&(Kt=z,_s=u,Fa=null);break;case"focusout":Fa=_s=Kt=null;break;case"mousedown":Is=!0;break;case"contextmenu":case"mouseup":case"dragend":Is=!1,Oc(f,t,p);break;case"selectionchange":if(Ag)break;case"keydown":case"keyup":Oc(f,t,p)}var j;if(jl)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Ot?rp(e,t)&&(S="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&(ap&&t.locale!=="ko"&&(Ot||S!=="onCompositionStart"?S==="onCompositionEnd"&&Ot&&(j=tp()):(qn=p,_l="value"in qn?qn.value:qn.textContent,Ot=!0)),z=jo(u,S),0<z.length&&(S=new Ec(S,e,null,t,p),f.push({event:S,listeners:z}),j?S.data=j:(j=op(t),j!==null&&(S.data=j)))),(j=kg?jg(e,t):wg(e,t))&&(u=jo(u,"onBeforeInput"),0<u.length&&(p=new Ec("onBeforeInput","beforeinput",null,t,p),f.push({event:p,listeners:u}),p.data=j))}xp(f,n)})}function ir(e,n,t){return{instance:e,listener:n,currentTarget:t}}function jo(e,n){for(var t=n+"Capture",a=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=qa(e,t),i!=null&&a.unshift(ir(e,i,r)),i=qa(e,n),i!=null&&a.push(ir(e,i,r))),e=e.return}return a}function zt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bc(e,n,t,a,r){for(var i=n._reactName,s=[];t!==null&&t!==a;){var c=t,d=c.alternate,u=c.stateNode;if(d!==null&&d===a)break;c.tag===5&&u!==null&&(c=u,r?(d=qa(t,i),d!=null&&s.unshift(ir(t,d,c))):r||(d=qa(t,i),d!=null&&s.push(ir(t,d,c)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var Rg=/\r\n?/g,Og=/\u0000|\uFFFD/g;function Fc(e){return(typeof e=="string"?e:""+e).replace(Rg,`
`).replace(Og,"")}function Kr(e,n,t){if(n=Fc(n),Fc(e)!==n&&t)throw Error(G(425))}function wo(){}var ks=null,js=null;function ws(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ss=typeof setTimeout=="function"?setTimeout:void 0,Kg=typeof clearTimeout=="function"?clearTimeout:void 0,Gc=typeof Promise=="function"?Promise:void 0,Jg=typeof queueMicrotask=="function"?queueMicrotask:typeof Gc<"u"?function(e){return Gc.resolve(null).then(e).catch(Bg)}:Ss;function Bg(e){setTimeout(function(){throw e})}function Li(e,n){var t=n,a=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(a===0){e.removeChild(r),tr(n);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=r}while(t);tr(n)}function rt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Uc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var ba=Math.random().toString(36).slice(2),Mn="__reactFiber$"+ba,sr="__reactProps$"+ba,Bn="__reactContainer$"+ba,Cs="__reactEvents$"+ba,Fg="__reactListeners$"+ba,Gg="__reactHandles$"+ba;function vt(e){var n=e[Mn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Bn]||t[Mn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Uc(e);e!==null;){if(t=e[Mn])return t;e=Uc(e)}return n}e=t,t=e.parentNode}return null}function jr(e){return e=e[Mn]||e[Bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(G(33))}function ai(e){return e[sr]||null}var Ns=[],Ft=-1;function pt(e){return{current:e}}function me(e){0>Ft||(e.current=Ns[Ft],Ns[Ft]=null,Ft--)}function pe(e,n){Ft++,Ns[Ft]=e.current,e.current=n}var dt={},Oe=pt(dt),Ye=pt(!1),kt=dt;function sa(e,n){var t=e.type.contextTypes;if(!t)return dt;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in t)r[i]=n[i];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function Xe(e){return e=e.childContextTypes,e!=null}function So(){me(Ye),me(Oe)}function Hc(e,n,t){if(Oe.current!==dt)throw Error(G(168));pe(Oe,n),pe(Ye,t)}function bp(e,n,t){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return t;a=a.getChildContext();for(var r in a)if(!(r in n))throw Error(G(108,Mm(e)||"Unknown",r));return be({},t,a)}function Co(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dt,kt=Oe.current,pe(Oe,e),pe(Ye,Ye.current),!0}function Wc(e,n,t){var a=e.stateNode;if(!a)throw Error(G(169));t?(e=bp(e,n,kt),a.__reactInternalMemoizedMergedChildContext=e,me(Ye),me(Oe),pe(Oe,e)):me(Ye),pe(Ye,t)}var Vn=null,ri=!1,Ri=!1;function yp(e){Vn===null?Vn=[e]:Vn.push(e)}function Ug(e){ri=!0,yp(e)}function ft(){if(!Ri&&Vn!==null){Ri=!0;var e=0,n=le;try{var t=Vn;for(le=1;e<t.length;e++){var a=t[e];do a=a(!0);while(a!==null)}Vn=null,ri=!1}catch(r){throw Vn!==null&&(Vn=Vn.slice(e+1)),Gu(xl,ft),r}finally{le=n,Ri=!1}}return null}var Gt=[],Ut=0,No=null,Mo=0,dn=[],un=0,jt=null,Rn=1,On="";function gt(e,n){Gt[Ut++]=Mo,Gt[Ut++]=No,No=e,Mo=n}function _p(e,n,t){dn[un++]=Rn,dn[un++]=On,dn[un++]=jt,jt=e;var a=Rn;e=On;var r=32-In(a)-1;a&=~(1<<r),t+=1;var i=32-In(n)+r;if(30<i){var s=r-r%5;i=(a&(1<<s)-1).toString(32),a>>=s,r-=s,Rn=1<<32-In(n)+r|t<<r|a,On=i+e}else Rn=1<<i|t<<r|a,On=e}function Sl(e){e.return!==null&&(gt(e,1),_p(e,1,0))}function Cl(e){for(;e===No;)No=Gt[--Ut],Gt[Ut]=null,Mo=Gt[--Ut],Gt[Ut]=null;for(;e===jt;)jt=dn[--un],dn[un]=null,On=dn[--un],dn[un]=null,Rn=dn[--un],dn[un]=null}var an=null,tn=null,ge=!1,_n=null;function Ip(e,n){var t=pn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Zc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,an=e,tn=rt(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,an=e,tn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=jt!==null?{id:Rn,overflow:On}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=pn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,an=e,tn=null,!0):!1;default:return!1}}function Ms(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ts(e){if(ge){var n=tn;if(n){var t=n;if(!Zc(e,n)){if(Ms(e))throw Error(G(418));n=rt(t.nextSibling);var a=an;n&&Zc(e,n)?Ip(a,t):(e.flags=e.flags&-4097|2,ge=!1,an=e)}}else{if(Ms(e))throw Error(G(418));e.flags=e.flags&-4097|2,ge=!1,an=e}}}function Yc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;an=e}function Jr(e){if(e!==an)return!1;if(!ge)return Yc(e),ge=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ws(e.type,e.memoizedProps)),n&&(n=tn)){if(Ms(e))throw kp(),Error(G(418));for(;n;)Ip(e,n),n=rt(n.nextSibling)}if(Yc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){tn=rt(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}tn=null}}else tn=an?rt(e.stateNode.nextSibling):null;return!0}function kp(){for(var e=tn;e;)e=rt(e.nextSibling)}function la(){tn=an=null,ge=!1}function Nl(e){_n===null?_n=[e]:_n.push(e)}var Hg=Un.ReactCurrentBatchConfig;function Ta(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(G(309));var a=t.stateNode}if(!a)throw Error(G(147,e));var r=a,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(s){var c=r.refs;s===null?delete c[i]:c[i]=s},n._stringRef=i,n)}if(typeof e!="string")throw Error(G(284));if(!t._owner)throw Error(G(290,e))}return e}function Br(e,n){throw e=Object.prototype.toString.call(n),Error(G(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Xc(e){var n=e._init;return n(e._payload)}function jp(e){function n(v,x){if(e){var y=v.deletions;y===null?(v.deletions=[x],v.flags|=16):y.push(x)}}function t(v,x){if(!e)return null;for(;x!==null;)n(v,x),x=x.sibling;return null}function a(v,x){for(v=new Map;x!==null;)x.key!==null?v.set(x.key,x):v.set(x.index,x),x=x.sibling;return v}function r(v,x){return v=lt(v,x),v.index=0,v.sibling=null,v}function i(v,x,y){return v.index=y,e?(y=v.alternate,y!==null?(y=y.index,y<x?(v.flags|=2,x):y):(v.flags|=2,x)):(v.flags|=1048576,x)}function s(v){return e&&v.alternate===null&&(v.flags|=2),v}function c(v,x,y,k){return x===null||x.tag!==6?(x=Ui(y,v.mode,k),x.return=v,x):(x=r(x,y),x.return=v,x)}function d(v,x,y,k){var T=y.type;return T===Rt?p(v,x,y.props.children,k,y.key):x!==null&&(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Wn&&Xc(T)===x.type)?(k=r(x,y.props),k.ref=Ta(v,x,y),k.return=v,k):(k=mo(y.type,y.key,y.props,null,v.mode,k),k.ref=Ta(v,x,y),k.return=v,k)}function u(v,x,y,k){return x===null||x.tag!==4||x.stateNode.containerInfo!==y.containerInfo||x.stateNode.implementation!==y.implementation?(x=Hi(y,v.mode,k),x.return=v,x):(x=r(x,y.children||[]),x.return=v,x)}function p(v,x,y,k,T){return x===null||x.tag!==7?(x=It(y,v.mode,k,T),x.return=v,x):(x=r(x,y),x.return=v,x)}function f(v,x,y){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Ui(""+x,v.mode,y),x.return=v,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Dr:return y=mo(x.type,x.key,x.props,null,v.mode,y),y.ref=Ta(v,null,x),y.return=v,y;case Lt:return x=Hi(x,v.mode,y),x.return=v,x;case Wn:var k=x._init;return f(v,k(x._payload),y)}if(Pa(x)||wa(x))return x=It(x,v.mode,y,null),x.return=v,x;Br(v,x)}return null}function g(v,x,y,k){var T=x!==null?x.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:c(v,x,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Dr:return y.key===T?d(v,x,y,k):null;case Lt:return y.key===T?u(v,x,y,k):null;case Wn:return T=y._init,g(v,x,T(y._payload),k)}if(Pa(y)||wa(y))return T!==null?null:p(v,x,y,k,null);Br(v,y)}return null}function h(v,x,y,k,T){if(typeof k=="string"&&k!==""||typeof k=="number")return v=v.get(y)||null,c(x,v,""+k,T);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Dr:return v=v.get(k.key===null?y:k.key)||null,d(x,v,k,T);case Lt:return v=v.get(k.key===null?y:k.key)||null,u(x,v,k,T);case Wn:var z=k._init;return h(v,x,y,z(k._payload),T)}if(Pa(k)||wa(k))return v=v.get(y)||null,p(x,v,k,T,null);Br(x,k)}return null}function m(v,x,y,k){for(var T=null,z=null,j=x,S=x=0,D=null;j!==null&&S<y.length;S++){j.index>S?(D=j,j=null):D=j.sibling;var E=g(v,j,y[S],k);if(E===null){j===null&&(j=D);break}e&&j&&E.alternate===null&&n(v,j),x=i(E,x,S),z===null?T=E:z.sibling=E,z=E,j=D}if(S===y.length)return t(v,j),ge&&gt(v,S),T;if(j===null){for(;S<y.length;S++)j=f(v,y[S],k),j!==null&&(x=i(j,x,S),z===null?T=j:z.sibling=j,z=j);return ge&&gt(v,S),T}for(j=a(v,j);S<y.length;S++)D=h(j,v,S,y[S],k),D!==null&&(e&&D.alternate!==null&&j.delete(D.key===null?S:D.key),x=i(D,x,S),z===null?T=D:z.sibling=D,z=D);return e&&j.forEach(function($){return n(v,$)}),ge&&gt(v,S),T}function b(v,x,y,k){var T=wa(y);if(typeof T!="function")throw Error(G(150));if(y=T.call(y),y==null)throw Error(G(151));for(var z=T=null,j=x,S=x=0,D=null,E=y.next();j!==null&&!E.done;S++,E=y.next()){j.index>S?(D=j,j=null):D=j.sibling;var $=g(v,j,E.value,k);if($===null){j===null&&(j=D);break}e&&j&&$.alternate===null&&n(v,j),x=i($,x,S),z===null?T=$:z.sibling=$,z=$,j=D}if(E.done)return t(v,j),ge&&gt(v,S),T;if(j===null){for(;!E.done;S++,E=y.next())E=f(v,E.value,k),E!==null&&(x=i(E,x,S),z===null?T=E:z.sibling=E,z=E);return ge&&gt(v,S),T}for(j=a(v,j);!E.done;S++,E=y.next())E=h(j,v,S,E.value,k),E!==null&&(e&&E.alternate!==null&&j.delete(E.key===null?S:E.key),x=i(E,x,S),z===null?T=E:z.sibling=E,z=E);return e&&j.forEach(function(L){return n(v,L)}),ge&&gt(v,S),T}function _(v,x,y,k){if(typeof y=="object"&&y!==null&&y.type===Rt&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Dr:e:{for(var T=y.key,z=x;z!==null;){if(z.key===T){if(T=y.type,T===Rt){if(z.tag===7){t(v,z.sibling),x=r(z,y.props.children),x.return=v,v=x;break e}}else if(z.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Wn&&Xc(T)===z.type){t(v,z.sibling),x=r(z,y.props),x.ref=Ta(v,z,y),x.return=v,v=x;break e}t(v,z);break}else n(v,z);z=z.sibling}y.type===Rt?(x=It(y.props.children,v.mode,k,y.key),x.return=v,v=x):(k=mo(y.type,y.key,y.props,null,v.mode,k),k.ref=Ta(v,x,y),k.return=v,v=k)}return s(v);case Lt:e:{for(z=y.key;x!==null;){if(x.key===z)if(x.tag===4&&x.stateNode.containerInfo===y.containerInfo&&x.stateNode.implementation===y.implementation){t(v,x.sibling),x=r(x,y.children||[]),x.return=v,v=x;break e}else{t(v,x);break}else n(v,x);x=x.sibling}x=Hi(y,v.mode,k),x.return=v,v=x}return s(v);case Wn:return z=y._init,_(v,x,z(y._payload),k)}if(Pa(y))return m(v,x,y,k);if(wa(y))return b(v,x,y,k);Br(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,x!==null&&x.tag===6?(t(v,x.sibling),x=r(x,y),x.return=v,v=x):(t(v,x),x=Ui(y,v.mode,k),x.return=v,v=x),s(v)):t(v,x)}return _}var ca=jp(!0),wp=jp(!1),To=pt(null),Eo=null,Ht=null,Ml=null;function Tl(){Ml=Ht=Eo=null}function El(e){var n=To.current;me(To),e._currentValue=n}function Es(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function ta(e,n){Eo=e,Ml=Ht=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(We=!0),e.firstContext=null)}function hn(e){var n=e._currentValue;if(Ml!==e)if(e={context:e,memoizedValue:n,next:null},Ht===null){if(Eo===null)throw Error(G(308));Ht=e,Eo.dependencies={lanes:0,firstContext:e}}else Ht=Ht.next=e;return n}var bt=null;function Dl(e){bt===null?bt=[e]:bt.push(e)}function Sp(e,n,t,a){var r=n.interleaved;return r===null?(t.next=t,Dl(n)):(t.next=r.next,r.next=t),n.interleaved=t,Fn(e,a)}function Fn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Zn=!1;function $l(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Kn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function ot(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,oe&2){var r=a.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),a.pending=n,Fn(e,t)}return r=a.interleaved,r===null?(n.next=n,Dl(a)):(n.next=r.next,r.next=n),a.interleaved=n,Fn(e,t)}function so(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,vl(e,t)}}function Qc(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var r=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?r=i=s:i=i.next=s,t=t.next}while(t!==null);i===null?r=i=n:i=i.next=n}else r=i=n;t={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:a.shared,effects:a.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Do(e,n,t,a){var r=e.updateQueue;Zn=!1;var i=r.firstBaseUpdate,s=r.lastBaseUpdate,c=r.shared.pending;if(c!==null){r.shared.pending=null;var d=c,u=d.next;d.next=null,s===null?i=u:s.next=u,s=d;var p=e.alternate;p!==null&&(p=p.updateQueue,c=p.lastBaseUpdate,c!==s&&(c===null?p.firstBaseUpdate=u:c.next=u,p.lastBaseUpdate=d))}if(i!==null){var f=r.baseState;s=0,p=u=d=null,c=i;do{var g=c.lane,h=c.eventTime;if((a&g)===g){p!==null&&(p=p.next={eventTime:h,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var m=e,b=c;switch(g=n,h=t,b.tag){case 1:if(m=b.payload,typeof m=="function"){f=m.call(h,f,g);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=b.payload,g=typeof m=="function"?m.call(h,f,g):m,g==null)break e;f=be({},f,g);break e;case 2:Zn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,g=r.effects,g===null?r.effects=[c]:g.push(c))}else h={eventTime:h,lane:g,tag:c.tag,payload:c.payload,callback:c.callback,next:null},p===null?(u=p=h,d=f):p=p.next=h,s|=g;if(c=c.next,c===null){if(c=r.shared.pending,c===null)break;g=c,c=g.next,g.next=null,r.lastBaseUpdate=g,r.shared.pending=null}}while(!0);if(p===null&&(d=f),r.baseState=d,r.firstBaseUpdate=u,r.lastBaseUpdate=p,n=r.shared.interleaved,n!==null){r=n;do s|=r.lane,r=r.next;while(r!==n)}else i===null&&(r.shared.lanes=0);St|=s,e.lanes=s,e.memoizedState=f}}function qc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],r=a.callback;if(r!==null){if(a.callback=null,a=t,typeof r!="function")throw Error(G(191,r));r.call(a)}}}var wr={},En=pt(wr),lr=pt(wr),cr=pt(wr);function yt(e){if(e===wr)throw Error(G(174));return e}function zl(e,n){switch(pe(cr,n),pe(lr,e),pe(En,wr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:us(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=us(n,e)}me(En),pe(En,n)}function da(){me(En),me(lr),me(cr)}function Np(e){yt(cr.current);var n=yt(En.current),t=us(n,e.type);n!==t&&(pe(lr,e),pe(En,t))}function Al(e){lr.current===e&&(me(En),me(lr))}var he=pt(0);function $o(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Oi=[];function Vl(){for(var e=0;e<Oi.length;e++)Oi[e]._workInProgressVersionPrimary=null;Oi.length=0}var lo=Un.ReactCurrentDispatcher,Ki=Un.ReactCurrentBatchConfig,wt=0,ve=null,we=null,Me=null,zo=!1,Ga=!1,dr=0,Wg=0;function Ve(){throw Error(G(321))}function Pl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!wn(e[t],n[t]))return!1;return!0}function Ll(e,n,t,a,r,i){if(wt=i,ve=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,lo.current=e===null||e.memoizedState===null?Qg:qg,e=t(a,r),Ga){i=0;do{if(Ga=!1,dr=0,25<=i)throw Error(G(301));i+=1,Me=we=null,n.updateQueue=null,lo.current=e0,e=t(a,r)}while(Ga)}if(lo.current=Ao,n=we!==null&&we.next!==null,wt=0,Me=we=ve=null,zo=!1,n)throw Error(G(300));return e}function Rl(){var e=dr!==0;return dr=0,e}function Nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?ve.memoizedState=Me=e:Me=Me.next=e,Me}function xn(){if(we===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var n=Me===null?ve.memoizedState:Me.next;if(n!==null)Me=n,we=e;else{if(e===null)throw Error(G(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Me===null?ve.memoizedState=Me=e:Me=Me.next=e}return Me}function ur(e,n){return typeof n=="function"?n(e):n}function Ji(e){var n=xn(),t=n.queue;if(t===null)throw Error(G(311));t.lastRenderedReducer=e;var a=we,r=a.baseQueue,i=t.pending;if(i!==null){if(r!==null){var s=r.next;r.next=i.next,i.next=s}a.baseQueue=r=i,t.pending=null}if(r!==null){i=r.next,a=a.baseState;var c=s=null,d=null,u=i;do{var p=u.lane;if((wt&p)===p)d!==null&&(d=d.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),a=u.hasEagerState?u.eagerState:e(a,u.action);else{var f={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};d===null?(c=d=f,s=a):d=d.next=f,ve.lanes|=p,St|=p}u=u.next}while(u!==null&&u!==i);d===null?s=a:d.next=c,wn(a,n.memoizedState)||(We=!0),n.memoizedState=a,n.baseState=s,n.baseQueue=d,t.lastRenderedState=a}if(e=t.interleaved,e!==null){r=e;do i=r.lane,ve.lanes|=i,St|=i,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Bi(e){var n=xn(),t=n.queue;if(t===null)throw Error(G(311));t.lastRenderedReducer=e;var a=t.dispatch,r=t.pending,i=n.memoizedState;if(r!==null){t.pending=null;var s=r=r.next;do i=e(i,s.action),s=s.next;while(s!==r);wn(i,n.memoizedState)||(We=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,a]}function Mp(){}function Tp(e,n){var t=ve,a=xn(),r=n(),i=!wn(a.memoizedState,r);if(i&&(a.memoizedState=r,We=!0),a=a.queue,Ol($p.bind(null,t,a,e),[e]),a.getSnapshot!==n||i||Me!==null&&Me.memoizedState.tag&1){if(t.flags|=2048,pr(9,Dp.bind(null,t,a,r,n),void 0,null),Te===null)throw Error(G(349));wt&30||Ep(t,n,r)}return r}function Ep(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ve.updateQueue,n===null?(n={lastEffect:null,stores:null},ve.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Dp(e,n,t,a){n.value=t,n.getSnapshot=a,zp(n)&&Ap(e)}function $p(e,n,t){return t(function(){zp(n)&&Ap(e)})}function zp(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!wn(e,t)}catch{return!0}}function Ap(e){var n=Fn(e,1);n!==null&&kn(n,e,1,-1)}function ed(e){var n=Nn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ur,lastRenderedState:e},n.queue=e,e=e.dispatch=Xg.bind(null,ve,e),[n.memoizedState,e]}function pr(e,n,t,a){return e={tag:e,create:n,destroy:t,deps:a,next:null},n=ve.updateQueue,n===null?(n={lastEffect:null,stores:null},ve.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e)),e}function Vp(){return xn().memoizedState}function co(e,n,t,a){var r=Nn();ve.flags|=e,r.memoizedState=pr(1|n,t,void 0,a===void 0?null:a)}function oi(e,n,t,a){var r=xn();a=a===void 0?null:a;var i=void 0;if(we!==null){var s=we.memoizedState;if(i=s.destroy,a!==null&&Pl(a,s.deps)){r.memoizedState=pr(n,t,i,a);return}}ve.flags|=e,r.memoizedState=pr(1|n,t,i,a)}function nd(e,n){return co(8390656,8,e,n)}function Ol(e,n){return oi(2048,8,e,n)}function Pp(e,n){return oi(4,2,e,n)}function Lp(e,n){return oi(4,4,e,n)}function Rp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Op(e,n,t){return t=t!=null?t.concat([e]):null,oi(4,4,Rp.bind(null,n,e),t)}function Kl(){}function Kp(e,n){var t=xn();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&Pl(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function Jp(e,n){var t=xn();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&Pl(n,a[1])?a[0]:(e=e(),t.memoizedState=[e,n],e)}function Bp(e,n,t){return wt&21?(wn(t,n)||(t=Wu(),ve.lanes|=t,St|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=t)}function Zg(e,n){var t=le;le=t!==0&&4>t?t:4,e(!0);var a=Ki.transition;Ki.transition={};try{e(!1),n()}finally{le=t,Ki.transition=a}}function Fp(){return xn().memoizedState}function Yg(e,n,t){var a=st(e);if(t={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null},Gp(e))Up(n,t);else if(t=Sp(e,n,t,a),t!==null){var r=Fe();kn(t,e,a,r),Hp(t,n,a)}}function Xg(e,n,t){var a=st(e),r={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null};if(Gp(e))Up(n,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var s=n.lastRenderedState,c=i(s,t);if(r.hasEagerState=!0,r.eagerState=c,wn(c,s)){var d=n.interleaved;d===null?(r.next=r,Dl(n)):(r.next=d.next,d.next=r),n.interleaved=r;return}}catch{}finally{}t=Sp(e,n,r,a),t!==null&&(r=Fe(),kn(t,e,a,r),Hp(t,n,a))}}function Gp(e){var n=e.alternate;return e===ve||n!==null&&n===ve}function Up(e,n){Ga=zo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Hp(e,n,t){if(t&4194240){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,vl(e,t)}}var Ao={readContext:hn,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},Qg={readContext:hn,useCallback:function(e,n){return Nn().memoizedState=[e,n===void 0?null:n],e},useContext:hn,useEffect:nd,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,co(4194308,4,Rp.bind(null,n,e),t)},useLayoutEffect:function(e,n){return co(4194308,4,e,n)},useInsertionEffect:function(e,n){return co(4,2,e,n)},useMemo:function(e,n){var t=Nn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var a=Nn();return n=t!==void 0?t(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Yg.bind(null,ve,e),[a.memoizedState,e]},useRef:function(e){var n=Nn();return e={current:e},n.memoizedState=e},useState:ed,useDebugValue:Kl,useDeferredValue:function(e){return Nn().memoizedState=e},useTransition:function(){var e=ed(!1),n=e[0];return e=Zg.bind(null,e[1]),Nn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var a=ve,r=Nn();if(ge){if(t===void 0)throw Error(G(407));t=t()}else{if(t=n(),Te===null)throw Error(G(349));wt&30||Ep(a,n,t)}r.memoizedState=t;var i={value:t,getSnapshot:n};return r.queue=i,nd($p.bind(null,a,i,e),[e]),a.flags|=2048,pr(9,Dp.bind(null,a,i,t,n),void 0,null),t},useId:function(){var e=Nn(),n=Te.identifierPrefix;if(ge){var t=On,a=Rn;t=(a&~(1<<32-In(a)-1)).toString(32)+t,n=":"+n+"R"+t,t=dr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Wg++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},qg={readContext:hn,useCallback:Kp,useContext:hn,useEffect:Ol,useImperativeHandle:Op,useInsertionEffect:Pp,useLayoutEffect:Lp,useMemo:Jp,useReducer:Ji,useRef:Vp,useState:function(){return Ji(ur)},useDebugValue:Kl,useDeferredValue:function(e){var n=xn();return Bp(n,we.memoizedState,e)},useTransition:function(){var e=Ji(ur)[0],n=xn().memoizedState;return[e,n]},useMutableSource:Mp,useSyncExternalStore:Tp,useId:Fp,unstable_isNewReconciler:!1},e0={readContext:hn,useCallback:Kp,useContext:hn,useEffect:Ol,useImperativeHandle:Op,useInsertionEffect:Pp,useLayoutEffect:Lp,useMemo:Jp,useReducer:Bi,useRef:Vp,useState:function(){return Bi(ur)},useDebugValue:Kl,useDeferredValue:function(e){var n=xn();return we===null?n.memoizedState=e:Bp(n,we.memoizedState,e)},useTransition:function(){var e=Bi(ur)[0],n=xn().memoizedState;return[e,n]},useMutableSource:Mp,useSyncExternalStore:Tp,useId:Fp,unstable_isNewReconciler:!1};function bn(e,n){if(e&&e.defaultProps){n=be({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ds(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:be({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ii={isMounted:function(e){return(e=e._reactInternals)?$t(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var a=Fe(),r=st(e),i=Kn(a,r);i.payload=n,t!=null&&(i.callback=t),n=ot(e,i,r),n!==null&&(kn(n,e,r,a),so(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=Fe(),r=st(e),i=Kn(a,r);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=ot(e,i,r),n!==null&&(kn(n,e,r,a),so(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Fe(),a=st(e),r=Kn(t,a);r.tag=2,n!=null&&(r.callback=n),n=ot(e,r,a),n!==null&&(kn(n,e,a,t),so(n,e,a))}};function td(e,n,t,a,r,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,s):n.prototype&&n.prototype.isPureReactComponent?!rr(t,a)||!rr(r,i):!0}function Wp(e,n,t){var a=!1,r=dt,i=n.contextType;return typeof i=="object"&&i!==null?i=hn(i):(r=Xe(n)?kt:Oe.current,a=n.contextTypes,i=(a=a!=null)?sa(e,r):dt),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ii,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),n}function ad(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&ii.enqueueReplaceState(n,n.state,null)}function $s(e,n,t,a){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},$l(e);var i=n.contextType;typeof i=="object"&&i!==null?r.context=hn(i):(i=Xe(n)?kt:Oe.current,r.context=sa(e,i)),r.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Ds(e,n,i,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&ii.enqueueReplaceState(r,r.state,null),Do(e,t,r,a),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function ua(e,n){try{var t="",a=n;do t+=Nm(a),a=a.return;while(a);var r=t}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:r,digest:null}}function Fi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function zs(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var n0=typeof WeakMap=="function"?WeakMap:Map;function Zp(e,n,t){t=Kn(-1,t),t.tag=3,t.payload={element:null};var a=n.value;return t.callback=function(){Po||(Po=!0,Fs=a),zs(e,n)},t}function Yp(e,n,t){t=Kn(-1,t),t.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var r=n.value;t.payload=function(){return a(r)},t.callback=function(){zs(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){zs(e,n),typeof a!="function"&&(it===null?it=new Set([this]):it.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function rd(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new n0;var r=new Set;a.set(n,r)}else r=a.get(n),r===void 0&&(r=new Set,a.set(n,r));r.has(t)||(r.add(t),e=g0.bind(null,e,n,t),n.then(e,e))}function od(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function id(e,n,t,a,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Kn(-1,1),n.tag=2,ot(t,n,1))),t.lanes|=1),e)}var t0=Un.ReactCurrentOwner,We=!1;function Be(e,n,t,a){n.child=e===null?wp(n,null,t,a):ca(n,e.child,t,a)}function sd(e,n,t,a,r){t=t.render;var i=n.ref;return ta(n,r),a=Ll(e,n,t,a,i,r),t=Rl(),e!==null&&!We?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Gn(e,n,r)):(ge&&t&&Sl(n),n.flags|=1,Be(e,n,a,r),n.child)}function ld(e,n,t,a,r){if(e===null){var i=t.type;return typeof i=="function"&&!Zl(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Xp(e,n,i,a,r)):(e=mo(t.type,null,a,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&r)){var s=i.memoizedProps;if(t=t.compare,t=t!==null?t:rr,t(s,a)&&e.ref===n.ref)return Gn(e,n,r)}return n.flags|=1,e=lt(i,a),e.ref=n.ref,e.return=n,n.child=e}function Xp(e,n,t,a,r){if(e!==null){var i=e.memoizedProps;if(rr(i,a)&&e.ref===n.ref)if(We=!1,n.pendingProps=a=i,(e.lanes&r)!==0)e.flags&131072&&(We=!0);else return n.lanes=e.lanes,Gn(e,n,r)}return As(e,n,t,a,r)}function Qp(e,n,t){var a=n.pendingProps,r=a.children,i=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Zt,nn),nn|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,pe(Zt,nn),nn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=i!==null?i.baseLanes:t,pe(Zt,nn),nn|=a}else i!==null?(a=i.baseLanes|t,n.memoizedState=null):a=t,pe(Zt,nn),nn|=a;return Be(e,n,r,t),n.child}function qp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function As(e,n,t,a,r){var i=Xe(t)?kt:Oe.current;return i=sa(n,i),ta(n,r),t=Ll(e,n,t,a,i,r),a=Rl(),e!==null&&!We?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Gn(e,n,r)):(ge&&a&&Sl(n),n.flags|=1,Be(e,n,t,r),n.child)}function cd(e,n,t,a,r){if(Xe(t)){var i=!0;Co(n)}else i=!1;if(ta(n,r),n.stateNode===null)uo(e,n),Wp(n,t,a),$s(n,t,a,r),a=!0;else if(e===null){var s=n.stateNode,c=n.memoizedProps;s.props=c;var d=s.context,u=t.contextType;typeof u=="object"&&u!==null?u=hn(u):(u=Xe(t)?kt:Oe.current,u=sa(n,u));var p=t.getDerivedStateFromProps,f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==a||d!==u)&&ad(n,s,a,u),Zn=!1;var g=n.memoizedState;s.state=g,Do(n,a,s,r),d=n.memoizedState,c!==a||g!==d||Ye.current||Zn?(typeof p=="function"&&(Ds(n,t,p,a),d=n.memoizedState),(c=Zn||td(n,t,c,a,g,d,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=d),s.props=a,s.state=d,s.context=u,a=c):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{s=n.stateNode,Cp(e,n),c=n.memoizedProps,u=n.type===n.elementType?c:bn(n.type,c),s.props=u,f=n.pendingProps,g=s.context,d=t.contextType,typeof d=="object"&&d!==null?d=hn(d):(d=Xe(t)?kt:Oe.current,d=sa(n,d));var h=t.getDerivedStateFromProps;(p=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==f||g!==d)&&ad(n,s,a,d),Zn=!1,g=n.memoizedState,s.state=g,Do(n,a,s,r);var m=n.memoizedState;c!==f||g!==m||Ye.current||Zn?(typeof h=="function"&&(Ds(n,t,h,a),m=n.memoizedState),(u=Zn||td(n,t,u,a,g,m,d)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,m,d),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,m,d)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=m),s.props=a,s.state=m,s.context=d,a=u):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),a=!1)}return Vs(e,n,t,a,i,r)}function Vs(e,n,t,a,r,i){qp(e,n);var s=(n.flags&128)!==0;if(!a&&!s)return r&&Wc(n,t,!1),Gn(e,n,i);a=n.stateNode,t0.current=n;var c=s&&typeof t.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&s?(n.child=ca(n,e.child,null,i),n.child=ca(n,null,c,i)):Be(e,n,c,i),n.memoizedState=a.state,r&&Wc(n,t,!0),n.child}function ef(e){var n=e.stateNode;n.pendingContext?Hc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Hc(e,n.context,!1),zl(e,n.containerInfo)}function dd(e,n,t,a,r){return la(),Nl(r),n.flags|=256,Be(e,n,t,a),n.child}var Ps={dehydrated:null,treeContext:null,retryLane:0};function Ls(e){return{baseLanes:e,cachePool:null,transitions:null}}function nf(e,n,t){var a=n.pendingProps,r=he.current,i=!1,s=(n.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(r&2)!==0),c?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),pe(he,r&1),e===null)return Ts(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=a.children,e=a.fallback,i?(a=n.mode,i=n.child,s={mode:"hidden",children:s},!(a&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=ci(s,a,0,null),e=It(e,a,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Ls(t),n.memoizedState=Ps,e):Jl(n,s));if(r=e.memoizedState,r!==null&&(c=r.dehydrated,c!==null))return a0(e,n,s,a,c,r,t);if(i){i=a.fallback,s=n.mode,r=e.child,c=r.sibling;var d={mode:"hidden",children:a.children};return!(s&1)&&n.child!==r?(a=n.child,a.childLanes=0,a.pendingProps=d,n.deletions=null):(a=lt(r,d),a.subtreeFlags=r.subtreeFlags&14680064),c!==null?i=lt(c,i):(i=It(i,s,t,null),i.flags|=2),i.return=n,a.return=n,a.sibling=i,n.child=a,a=i,i=n.child,s=e.child.memoizedState,s=s===null?Ls(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~t,n.memoizedState=Ps,a}return i=e.child,e=i.sibling,a=lt(i,{mode:"visible",children:a.children}),!(n.mode&1)&&(a.lanes=t),a.return=n,a.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=a,n.memoizedState=null,a}function Jl(e,n){return n=ci({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Fr(e,n,t,a){return a!==null&&Nl(a),ca(n,e.child,null,t),e=Jl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function a0(e,n,t,a,r,i,s){if(t)return n.flags&256?(n.flags&=-257,a=Fi(Error(G(422))),Fr(e,n,s,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=a.fallback,r=n.mode,a=ci({mode:"visible",children:a.children},r,0,null),i=It(i,r,s,null),i.flags|=2,a.return=n,i.return=n,a.sibling=i,n.child=a,n.mode&1&&ca(n,e.child,null,s),n.child.memoizedState=Ls(s),n.memoizedState=Ps,i);if(!(n.mode&1))return Fr(e,n,s,null);if(r.data==="$!"){if(a=r.nextSibling&&r.nextSibling.dataset,a)var c=a.dgst;return a=c,i=Error(G(419)),a=Fi(i,a,void 0),Fr(e,n,s,a)}if(c=(s&e.childLanes)!==0,We||c){if(a=Te,a!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(a.suspendedLanes|s)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,Fn(e,r),kn(a,e,r,-1))}return Wl(),a=Fi(Error(G(421))),Fr(e,n,s,a)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=h0.bind(null,e),r._reactRetry=n,null):(e=i.treeContext,tn=rt(r.nextSibling),an=n,ge=!0,_n=null,e!==null&&(dn[un++]=Rn,dn[un++]=On,dn[un++]=jt,Rn=e.id,On=e.overflow,jt=n),n=Jl(n,a.children),n.flags|=4096,n)}function ud(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Es(e.return,n,t)}function Gi(e,n,t,a,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:r}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=t,i.tailMode=r)}function tf(e,n,t){var a=n.pendingProps,r=a.revealOrder,i=a.tail;if(Be(e,n,a.children,t),a=he.current,a&2)a=a&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ud(e,t,n);else if(e.tag===19)ud(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(pe(he,a),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&$o(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),Gi(n,!1,r,t,i);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&$o(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}Gi(n,!0,t,null,i);break;case"together":Gi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function uo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Gn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),St|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(G(153));if(n.child!==null){for(e=n.child,t=lt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=lt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function r0(e,n,t){switch(n.tag){case 3:ef(n),la();break;case 5:Np(n);break;case 1:Xe(n.type)&&Co(n);break;case 4:zl(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,r=n.memoizedProps.value;pe(To,a._currentValue),a._currentValue=r;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(pe(he,he.current&1),n.flags|=128,null):t&n.child.childLanes?nf(e,n,t):(pe(he,he.current&1),e=Gn(e,n,t),e!==null?e.sibling:null);pe(he,he.current&1);break;case 19:if(a=(t&n.childLanes)!==0,e.flags&128){if(a)return tf(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),pe(he,he.current),a)break;return null;case 22:case 23:return n.lanes=0,Qp(e,n,t)}return Gn(e,n,t)}var af,Rs,rf,of;af=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Rs=function(){};rf=function(e,n,t,a){var r=e.memoizedProps;if(r!==a){e=n.stateNode,yt(En.current);var i=null;switch(t){case"input":r=ss(e,r),a=ss(e,a),i=[];break;case"select":r=be({},r,{value:void 0}),a=be({},a,{value:void 0}),i=[];break;case"textarea":r=ds(e,r),a=ds(e,a),i=[];break;default:typeof r.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=wo)}ps(t,a);var s;t=null;for(u in r)if(!a.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var c=r[u];for(s in c)c.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xa.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in a){var d=a[u];if(c=r!=null?r[u]:void 0,a.hasOwnProperty(u)&&d!==c&&(d!=null||c!=null))if(u==="style")if(c){for(s in c)!c.hasOwnProperty(s)||d&&d.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in d)d.hasOwnProperty(s)&&c[s]!==d[s]&&(t||(t={}),t[s]=d[s])}else t||(i||(i=[]),i.push(u,t)),t=d;else u==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(i=i||[]).push(u,d)):u==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(u,""+d):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xa.hasOwnProperty(u)?(d!=null&&u==="onScroll"&&fe("scroll",e),i||c===d||(i=[])):(i=i||[]).push(u,d))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};of=function(e,n,t,a){t!==a&&(n.flags|=4)};function Ea(e,n){if(!ge)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Pe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags&14680064,a|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function o0(e,n,t){var a=n.pendingProps;switch(Cl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(n),null;case 1:return Xe(n.type)&&So(),Pe(n),null;case 3:return a=n.stateNode,da(),me(Ye),me(Oe),Vl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Jr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,_n!==null&&(Hs(_n),_n=null))),Rs(e,n),Pe(n),null;case 5:Al(n);var r=yt(cr.current);if(t=n.type,e!==null&&n.stateNode!=null)rf(e,n,t,a,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(G(166));return Pe(n),null}if(e=yt(En.current),Jr(n)){a=n.stateNode,t=n.type;var i=n.memoizedProps;switch(a[Mn]=n,a[sr]=i,e=(n.mode&1)!==0,t){case"dialog":fe("cancel",a),fe("close",a);break;case"iframe":case"object":case"embed":fe("load",a);break;case"video":case"audio":for(r=0;r<Ra.length;r++)fe(Ra[r],a);break;case"source":fe("error",a);break;case"img":case"image":case"link":fe("error",a),fe("load",a);break;case"details":fe("toggle",a);break;case"input":yc(a,i),fe("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!i.multiple},fe("invalid",a);break;case"textarea":Ic(a,i),fe("invalid",a)}ps(t,i),r=null;for(var s in i)if(i.hasOwnProperty(s)){var c=i[s];s==="children"?typeof c=="string"?a.textContent!==c&&(i.suppressHydrationWarning!==!0&&Kr(a.textContent,c,e),r=["children",c]):typeof c=="number"&&a.textContent!==""+c&&(i.suppressHydrationWarning!==!0&&Kr(a.textContent,c,e),r=["children",""+c]):Xa.hasOwnProperty(s)&&c!=null&&s==="onScroll"&&fe("scroll",a)}switch(t){case"input":$r(a),_c(a,i,!0);break;case"textarea":$r(a),kc(a);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(a.onclick=wo)}a=r,n.updateQueue=a,a!==null&&(n.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$u(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=s.createElement(t,{is:a.is}):(e=s.createElement(t),t==="select"&&(s=e,a.multiple?s.multiple=!0:a.size&&(s.size=a.size))):e=s.createElementNS(e,t),e[Mn]=n,e[sr]=a,af(e,n,!1,!1),n.stateNode=e;e:{switch(s=fs(t,a),t){case"dialog":fe("cancel",e),fe("close",e),r=a;break;case"iframe":case"object":case"embed":fe("load",e),r=a;break;case"video":case"audio":for(r=0;r<Ra.length;r++)fe(Ra[r],e);r=a;break;case"source":fe("error",e),r=a;break;case"img":case"image":case"link":fe("error",e),fe("load",e),r=a;break;case"details":fe("toggle",e),r=a;break;case"input":yc(e,a),r=ss(e,a),fe("invalid",e);break;case"option":r=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},r=be({},a,{value:void 0}),fe("invalid",e);break;case"textarea":Ic(e,a),r=ds(e,a),fe("invalid",e);break;default:r=a}ps(t,r),c=r;for(i in c)if(c.hasOwnProperty(i)){var d=c[i];i==="style"?Vu(e,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&zu(e,d)):i==="children"?typeof d=="string"?(t!=="textarea"||d!=="")&&Qa(e,d):typeof d=="number"&&Qa(e,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Xa.hasOwnProperty(i)?d!=null&&i==="onScroll"&&fe("scroll",e):d!=null&&pl(e,i,d,s))}switch(t){case"input":$r(e),_c(e,a,!1);break;case"textarea":$r(e),kc(e);break;case"option":a.value!=null&&e.setAttribute("value",""+ct(a.value));break;case"select":e.multiple=!!a.multiple,i=a.value,i!=null?Qt(e,!!a.multiple,i,!1):a.defaultValue!=null&&Qt(e,!!a.multiple,a.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=wo)}switch(t){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Pe(n),null;case 6:if(e&&n.stateNode!=null)of(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(G(166));if(t=yt(cr.current),yt(En.current),Jr(n)){if(a=n.stateNode,t=n.memoizedProps,a[Mn]=n,(i=a.nodeValue!==t)&&(e=an,e!==null))switch(e.tag){case 3:Kr(a.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Kr(a.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else a=(t.nodeType===9?t:t.ownerDocument).createTextNode(a),a[Mn]=n,n.stateNode=a}return Pe(n),null;case 13:if(me(he),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&tn!==null&&n.mode&1&&!(n.flags&128))kp(),la(),n.flags|=98560,i=!1;else if(i=Jr(n),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(G(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(G(317));i[Mn]=n}else la(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Pe(n),i=!1}else _n!==null&&(Hs(_n),_n=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,n.mode&1&&(e===null||he.current&1?Ce===0&&(Ce=3):Wl())),n.updateQueue!==null&&(n.flags|=4),Pe(n),null);case 4:return da(),Rs(e,n),e===null&&or(n.stateNode.containerInfo),Pe(n),null;case 10:return El(n.type._context),Pe(n),null;case 17:return Xe(n.type)&&So(),Pe(n),null;case 19:if(me(he),i=n.memoizedState,i===null)return Pe(n),null;if(a=(n.flags&128)!==0,s=i.rendering,s===null)if(a)Ea(i,!1);else{if(Ce!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=$o(e),s!==null){for(n.flags|=128,Ea(i,!1),a=s.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=t,t=n.child;t!==null;)i=t,e=a,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return pe(he,he.current&1|2),n.child}e=e.sibling}i.tail!==null&&_e()>pa&&(n.flags|=128,a=!0,Ea(i,!1),n.lanes=4194304)}else{if(!a)if(e=$o(s),e!==null){if(n.flags|=128,a=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ea(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ge)return Pe(n),null}else 2*_e()-i.renderingStartTime>pa&&t!==1073741824&&(n.flags|=128,a=!0,Ea(i,!1),n.lanes=4194304);i.isBackwards?(s.sibling=n.child,n.child=s):(t=i.last,t!==null?t.sibling=s:n.child=s,i.last=s)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=_e(),n.sibling=null,t=he.current,pe(he,a?t&1|2:t&1),n):(Pe(n),null);case 22:case 23:return Hl(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&n.mode&1?nn&1073741824&&(Pe(n),n.subtreeFlags&6&&(n.flags|=8192)):Pe(n),null;case 24:return null;case 25:return null}throw Error(G(156,n.tag))}function i0(e,n){switch(Cl(n),n.tag){case 1:return Xe(n.type)&&So(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return da(),me(Ye),me(Oe),Vl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Al(n),null;case 13:if(me(he),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(G(340));la()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return me(he),null;case 4:return da(),null;case 10:return El(n.type._context),null;case 22:case 23:return Hl(),null;case 24:return null;default:return null}}var Gr=!1,Le=!1,s0=typeof WeakSet=="function"?WeakSet:Set,W=null;function Wt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(a){ye(e,n,a)}else t.current=null}function Os(e,n,t){try{t()}catch(a){ye(e,n,a)}}var pd=!1;function l0(e,n){if(ks=Io,e=dp(),wl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var r=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var s=0,c=-1,d=-1,u=0,p=0,f=e,g=null;n:for(;;){for(var h;f!==t||r!==0&&f.nodeType!==3||(c=s+r),f!==i||a!==0&&f.nodeType!==3||(d=s+a),f.nodeType===3&&(s+=f.nodeValue.length),(h=f.firstChild)!==null;)g=f,f=h;for(;;){if(f===e)break n;if(g===t&&++u===r&&(c=s),g===i&&++p===a&&(d=s),(h=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=h}t=c===-1||d===-1?null:{start:c,end:d}}else t=null}t=t||{start:0,end:0}}else t=null;for(js={focusedElem:e,selectionRange:t},Io=!1,W=n;W!==null;)if(n=W,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,W=e;else for(;W!==null;){n=W;try{var m=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var b=m.memoizedProps,_=m.memoizedState,v=n.stateNode,x=v.getSnapshotBeforeUpdate(n.elementType===n.type?b:bn(n.type,b),_);v.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(G(163))}}catch(k){ye(n,n.return,k)}if(e=n.sibling,e!==null){e.return=n.return,W=e;break}W=n.return}return m=pd,pd=!1,m}function Ua(e,n,t){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var r=a=a.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&Os(n,t,i)}r=r.next}while(r!==a)}}function si(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var a=t.create;t.destroy=a()}t=t.next}while(t!==n)}}function Ks(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function sf(e){var n=e.alternate;n!==null&&(e.alternate=null,sf(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Mn],delete n[sr],delete n[Cs],delete n[Fg],delete n[Gg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lf(e){return e.tag===5||e.tag===3||e.tag===4}function fd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Js(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=wo));else if(a!==4&&(e=e.child,e!==null))for(Js(e,n,t),e=e.sibling;e!==null;)Js(e,n,t),e=e.sibling}function Bs(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Bs(e,n,t),e=e.sibling;e!==null;)Bs(e,n,t),e=e.sibling}var De=null,yn=!1;function Hn(e,n,t){for(t=t.child;t!==null;)cf(e,n,t),t=t.sibling}function cf(e,n,t){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(qo,t)}catch{}switch(t.tag){case 5:Le||Wt(t,n);case 6:var a=De,r=yn;De=null,Hn(e,n,t),De=a,yn=r,De!==null&&(yn?(e=De,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):De.removeChild(t.stateNode));break;case 18:De!==null&&(yn?(e=De,t=t.stateNode,e.nodeType===8?Li(e.parentNode,t):e.nodeType===1&&Li(e,t),tr(e)):Li(De,t.stateNode));break;case 4:a=De,r=yn,De=t.stateNode.containerInfo,yn=!0,Hn(e,n,t),De=a,yn=r;break;case 0:case 11:case 14:case 15:if(!Le&&(a=t.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){r=a=a.next;do{var i=r,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Os(t,n,s),r=r.next}while(r!==a)}Hn(e,n,t);break;case 1:if(!Le&&(Wt(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=t.memoizedProps,a.state=t.memoizedState,a.componentWillUnmount()}catch(c){ye(t,n,c)}Hn(e,n,t);break;case 21:Hn(e,n,t);break;case 22:t.mode&1?(Le=(a=Le)||t.memoizedState!==null,Hn(e,n,t),Le=a):Hn(e,n,t);break;default:Hn(e,n,t)}}function md(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new s0),n.forEach(function(a){var r=x0.bind(null,e,a);t.has(a)||(t.add(a),a.then(r,r))})}}function vn(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var r=t[a];try{var i=e,s=n,c=s;e:for(;c!==null;){switch(c.tag){case 5:De=c.stateNode,yn=!1;break e;case 3:De=c.stateNode.containerInfo,yn=!0;break e;case 4:De=c.stateNode.containerInfo,yn=!0;break e}c=c.return}if(De===null)throw Error(G(160));cf(i,s,r),De=null,yn=!1;var d=r.alternate;d!==null&&(d.return=null),r.return=null}catch(u){ye(r,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)df(n,e),n=n.sibling}function df(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vn(n,e),Cn(e),a&4){try{Ua(3,e,e.return),si(3,e)}catch(b){ye(e,e.return,b)}try{Ua(5,e,e.return)}catch(b){ye(e,e.return,b)}}break;case 1:vn(n,e),Cn(e),a&512&&t!==null&&Wt(t,t.return);break;case 5:if(vn(n,e),Cn(e),a&512&&t!==null&&Wt(t,t.return),e.flags&32){var r=e.stateNode;try{Qa(r,"")}catch(b){ye(e,e.return,b)}}if(a&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,s=t!==null?t.memoizedProps:i,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&i.type==="radio"&&i.name!=null&&Eu(r,i),fs(c,s);var u=fs(c,i);for(s=0;s<d.length;s+=2){var p=d[s],f=d[s+1];p==="style"?Vu(r,f):p==="dangerouslySetInnerHTML"?zu(r,f):p==="children"?Qa(r,f):pl(r,p,f,u)}switch(c){case"input":ls(r,i);break;case"textarea":Du(r,i);break;case"select":var g=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?Qt(r,!!i.multiple,h,!1):g!==!!i.multiple&&(i.defaultValue!=null?Qt(r,!!i.multiple,i.defaultValue,!0):Qt(r,!!i.multiple,i.multiple?[]:"",!1))}r[sr]=i}catch(b){ye(e,e.return,b)}}break;case 6:if(vn(n,e),Cn(e),a&4){if(e.stateNode===null)throw Error(G(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(b){ye(e,e.return,b)}}break;case 3:if(vn(n,e),Cn(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{tr(n.containerInfo)}catch(b){ye(e,e.return,b)}break;case 4:vn(n,e),Cn(e);break;case 13:vn(n,e),Cn(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(Gl=_e())),a&4&&md(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(Le=(u=Le)||p,vn(n,e),Le=u):vn(n,e),Cn(e),a&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(W=e,p=e.child;p!==null;){for(f=W=p;W!==null;){switch(g=W,h=g.child,g.tag){case 0:case 11:case 14:case 15:Ua(4,g,g.return);break;case 1:Wt(g,g.return);var m=g.stateNode;if(typeof m.componentWillUnmount=="function"){a=g,t=g.return;try{n=a,m.props=n.memoizedProps,m.state=n.memoizedState,m.componentWillUnmount()}catch(b){ye(a,t,b)}}break;case 5:Wt(g,g.return);break;case 22:if(g.memoizedState!==null){hd(f);continue}}h!==null?(h.return=g,W=h):hd(f)}p=p.sibling}e:for(p=null,f=e;;){if(f.tag===5){if(p===null){p=f;try{r=f.stateNode,u?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(c=f.stateNode,d=f.memoizedProps.style,s=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=Au("display",s))}catch(b){ye(e,e.return,b)}}}else if(f.tag===6){if(p===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(b){ye(e,e.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;p===f&&(p=null),f=f.return}p===f&&(p=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:vn(n,e),Cn(e),a&4&&md(e);break;case 21:break;default:vn(n,e),Cn(e)}}function Cn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(lf(t)){var a=t;break e}t=t.return}throw Error(G(160))}switch(a.tag){case 5:var r=a.stateNode;a.flags&32&&(Qa(r,""),a.flags&=-33);var i=fd(e);Bs(e,i,r);break;case 3:case 4:var s=a.stateNode.containerInfo,c=fd(e);Js(e,c,s);break;default:throw Error(G(161))}}catch(d){ye(e,e.return,d)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function c0(e,n,t){W=e,uf(e)}function uf(e,n,t){for(var a=(e.mode&1)!==0;W!==null;){var r=W,i=r.child;if(r.tag===22&&a){var s=r.memoizedState!==null||Gr;if(!s){var c=r.alternate,d=c!==null&&c.memoizedState!==null||Le;c=Gr;var u=Le;if(Gr=s,(Le=d)&&!u)for(W=r;W!==null;)s=W,d=s.child,s.tag===22&&s.memoizedState!==null?xd(r):d!==null?(d.return=s,W=d):xd(r);for(;i!==null;)W=i,uf(i),i=i.sibling;W=r,Gr=c,Le=u}gd(e)}else r.subtreeFlags&8772&&i!==null?(i.return=r,W=i):gd(e)}}function gd(e){for(;W!==null;){var n=W;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Le||si(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!Le)if(t===null)a.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:bn(n.type,t.memoizedProps);a.componentDidUpdate(r,t.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&qc(n,i,a);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}qc(n,s,t)}break;case 5:var c=n.stateNode;if(t===null&&n.flags&4){t=c;var d=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&t.focus();break;case"img":d.src&&(t.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var f=p.dehydrated;f!==null&&tr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(G(163))}Le||n.flags&512&&Ks(n)}catch(g){ye(n,n.return,g)}}if(n===e){W=null;break}if(t=n.sibling,t!==null){t.return=n.return,W=t;break}W=n.return}}function hd(e){for(;W!==null;){var n=W;if(n===e){W=null;break}var t=n.sibling;if(t!==null){t.return=n.return,W=t;break}W=n.return}}function xd(e){for(;W!==null;){var n=W;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{si(4,n)}catch(d){ye(n,t,d)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var r=n.return;try{a.componentDidMount()}catch(d){ye(n,r,d)}}var i=n.return;try{Ks(n)}catch(d){ye(n,i,d)}break;case 5:var s=n.return;try{Ks(n)}catch(d){ye(n,s,d)}}}catch(d){ye(n,n.return,d)}if(n===e){W=null;break}var c=n.sibling;if(c!==null){c.return=n.return,W=c;break}W=n.return}}var d0=Math.ceil,Vo=Un.ReactCurrentDispatcher,Bl=Un.ReactCurrentOwner,fn=Un.ReactCurrentBatchConfig,oe=0,Te=null,je=null,ze=0,nn=0,Zt=pt(0),Ce=0,fr=null,St=0,li=0,Fl=0,Ha=null,He=null,Gl=0,pa=1/0,An=null,Po=!1,Fs=null,it=null,Ur=!1,et=null,Lo=0,Wa=0,Gs=null,po=-1,fo=0;function Fe(){return oe&6?_e():po!==-1?po:po=_e()}function st(e){return e.mode&1?oe&2&&ze!==0?ze&-ze:Hg.transition!==null?(fo===0&&(fo=Wu()),fo):(e=le,e!==0||(e=window.event,e=e===void 0?16:np(e.type)),e):1}function kn(e,n,t,a){if(50<Wa)throw Wa=0,Gs=null,Error(G(185));Ir(e,t,a),(!(oe&2)||e!==Te)&&(e===Te&&(!(oe&2)&&(li|=t),Ce===4&&Xn(e,ze)),Qe(e,a),t===1&&oe===0&&!(n.mode&1)&&(pa=_e()+500,ri&&ft()))}function Qe(e,n){var t=e.callbackNode;Hm(e,n);var a=_o(e,e===Te?ze:0);if(a===0)t!==null&&Sc(t),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(t!=null&&Sc(t),n===1)e.tag===0?Ug(vd.bind(null,e)):yp(vd.bind(null,e)),Jg(function(){!(oe&6)&&ft()}),t=null;else{switch(Zu(a)){case 1:t=xl;break;case 4:t=Uu;break;case 16:t=yo;break;case 536870912:t=Hu;break;default:t=yo}t=bf(t,pf.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function pf(e,n){if(po=-1,fo=0,oe&6)throw Error(G(327));var t=e.callbackNode;if(aa()&&e.callbackNode!==t)return null;var a=_o(e,e===Te?ze:0);if(a===0)return null;if(a&30||a&e.expiredLanes||n)n=Ro(e,a);else{n=a;var r=oe;oe|=2;var i=mf();(Te!==e||ze!==n)&&(An=null,pa=_e()+500,_t(e,n));do try{f0();break}catch(c){ff(e,c)}while(!0);Tl(),Vo.current=i,oe=r,je!==null?n=0:(Te=null,ze=0,n=Ce)}if(n!==0){if(n===2&&(r=vs(e),r!==0&&(a=r,n=Us(e,r))),n===1)throw t=fr,_t(e,0),Xn(e,a),Qe(e,_e()),t;if(n===6)Xn(e,a);else{if(r=e.current.alternate,!(a&30)&&!u0(r)&&(n=Ro(e,a),n===2&&(i=vs(e),i!==0&&(a=i,n=Us(e,i))),n===1))throw t=fr,_t(e,0),Xn(e,a),Qe(e,_e()),t;switch(e.finishedWork=r,e.finishedLanes=a,n){case 0:case 1:throw Error(G(345));case 2:ht(e,He,An);break;case 3:if(Xn(e,a),(a&130023424)===a&&(n=Gl+500-_e(),10<n)){if(_o(e,0)!==0)break;if(r=e.suspendedLanes,(r&a)!==a){Fe(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Ss(ht.bind(null,e,He,An),n);break}ht(e,He,An);break;case 4:if(Xn(e,a),(a&4194240)===a)break;for(n=e.eventTimes,r=-1;0<a;){var s=31-In(a);i=1<<s,s=n[s],s>r&&(r=s),a&=~i}if(a=r,a=_e()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*d0(a/1960))-a,10<a){e.timeoutHandle=Ss(ht.bind(null,e,He,An),a);break}ht(e,He,An);break;case 5:ht(e,He,An);break;default:throw Error(G(329))}}}return Qe(e,_e()),e.callbackNode===t?pf.bind(null,e):null}function Us(e,n){var t=Ha;return e.current.memoizedState.isDehydrated&&(_t(e,n).flags|=256),e=Ro(e,n),e!==2&&(n=He,He=t,n!==null&&Hs(n)),e}function Hs(e){He===null?He=e:He.push.apply(He,e)}function u0(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var a=0;a<t.length;a++){var r=t[a],i=r.getSnapshot;r=r.value;try{if(!wn(i(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xn(e,n){for(n&=~Fl,n&=~li,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-In(n),a=1<<t;e[t]=-1,n&=~a}}function vd(e){if(oe&6)throw Error(G(327));aa();var n=_o(e,0);if(!(n&1))return Qe(e,_e()),null;var t=Ro(e,n);if(e.tag!==0&&t===2){var a=vs(e);a!==0&&(n=a,t=Us(e,a))}if(t===1)throw t=fr,_t(e,0),Xn(e,n),Qe(e,_e()),t;if(t===6)throw Error(G(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ht(e,He,An),Qe(e,_e()),null}function Ul(e,n){var t=oe;oe|=1;try{return e(n)}finally{oe=t,oe===0&&(pa=_e()+500,ri&&ft())}}function Ct(e){et!==null&&et.tag===0&&!(oe&6)&&aa();var n=oe;oe|=1;var t=fn.transition,a=le;try{if(fn.transition=null,le=1,e)return e()}finally{le=a,fn.transition=t,oe=n,!(oe&6)&&ft()}}function Hl(){nn=Zt.current,me(Zt)}function _t(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Kg(t)),je!==null)for(t=je.return;t!==null;){var a=t;switch(Cl(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&So();break;case 3:da(),me(Ye),me(Oe),Vl();break;case 5:Al(a);break;case 4:da();break;case 13:me(he);break;case 19:me(he);break;case 10:El(a.type._context);break;case 22:case 23:Hl()}t=t.return}if(Te=e,je=e=lt(e.current,null),ze=nn=n,Ce=0,fr=null,Fl=li=St=0,He=Ha=null,bt!==null){for(n=0;n<bt.length;n++)if(t=bt[n],a=t.interleaved,a!==null){t.interleaved=null;var r=a.next,i=t.pending;if(i!==null){var s=i.next;i.next=r,a.next=s}t.pending=a}bt=null}return e}function ff(e,n){do{var t=je;try{if(Tl(),lo.current=Ao,zo){for(var a=ve.memoizedState;a!==null;){var r=a.queue;r!==null&&(r.pending=null),a=a.next}zo=!1}if(wt=0,Me=we=ve=null,Ga=!1,dr=0,Bl.current=null,t===null||t.return===null){Ce=1,fr=n,je=null;break}e:{var i=e,s=t.return,c=t,d=n;if(n=ze,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var u=d,p=c,f=p.tag;if(!(p.mode&1)&&(f===0||f===11||f===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var h=od(s);if(h!==null){h.flags&=-257,id(h,s,c,i,n),h.mode&1&&rd(i,u,n),n=h,d=u;var m=n.updateQueue;if(m===null){var b=new Set;b.add(d),n.updateQueue=b}else m.add(d);break e}else{if(!(n&1)){rd(i,u,n),Wl();break e}d=Error(G(426))}}else if(ge&&c.mode&1){var _=od(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),id(_,s,c,i,n),Nl(ua(d,c));break e}}i=d=ua(d,c),Ce!==4&&(Ce=2),Ha===null?Ha=[i]:Ha.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var v=Zp(i,d,n);Qc(i,v);break e;case 1:c=d;var x=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof x.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(it===null||!it.has(y)))){i.flags|=65536,n&=-n,i.lanes|=n;var k=Yp(i,c,n);Qc(i,k);break e}}i=i.return}while(i!==null)}hf(t)}catch(T){n=T,je===t&&t!==null&&(je=t=t.return);continue}break}while(!0)}function mf(){var e=Vo.current;return Vo.current=Ao,e===null?Ao:e}function Wl(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),Te===null||!(St&268435455)&&!(li&268435455)||Xn(Te,ze)}function Ro(e,n){var t=oe;oe|=2;var a=mf();(Te!==e||ze!==n)&&(An=null,_t(e,n));do try{p0();break}catch(r){ff(e,r)}while(!0);if(Tl(),oe=t,Vo.current=a,je!==null)throw Error(G(261));return Te=null,ze=0,Ce}function p0(){for(;je!==null;)gf(je)}function f0(){for(;je!==null&&!Lm();)gf(je)}function gf(e){var n=vf(e.alternate,e,nn);e.memoizedProps=e.pendingProps,n===null?hf(e):je=n,Bl.current=null}function hf(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=i0(t,n),t!==null){t.flags&=32767,je=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ce=6,je=null;return}}else if(t=o0(t,n,nn),t!==null){je=t;return}if(n=n.sibling,n!==null){je=n;return}je=n=e}while(n!==null);Ce===0&&(Ce=5)}function ht(e,n,t){var a=le,r=fn.transition;try{fn.transition=null,le=1,m0(e,n,t,a)}finally{fn.transition=r,le=a}return null}function m0(e,n,t,a){do aa();while(et!==null);if(oe&6)throw Error(G(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(G(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Wm(e,i),e===Te&&(je=Te=null,ze=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ur||(Ur=!0,bf(yo,function(){return aa(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=fn.transition,fn.transition=null;var s=le;le=1;var c=oe;oe|=4,Bl.current=null,l0(e,t),df(t,e),zg(js),Io=!!ks,js=ks=null,e.current=t,c0(t),Rm(),oe=c,le=s,fn.transition=i}else e.current=t;if(Ur&&(Ur=!1,et=e,Lo=r),i=e.pendingLanes,i===0&&(it=null),Jm(t.stateNode),Qe(e,_e()),n!==null)for(a=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],a(r.value,{componentStack:r.stack,digest:r.digest});if(Po)throw Po=!1,e=Fs,Fs=null,e;return Lo&1&&e.tag!==0&&aa(),i=e.pendingLanes,i&1?e===Gs?Wa++:(Wa=0,Gs=e):Wa=0,ft(),null}function aa(){if(et!==null){var e=Zu(Lo),n=fn.transition,t=le;try{if(fn.transition=null,le=16>e?16:e,et===null)var a=!1;else{if(e=et,et=null,Lo=0,oe&6)throw Error(G(331));var r=oe;for(oe|=4,W=e.current;W!==null;){var i=W,s=i.child;if(W.flags&16){var c=i.deletions;if(c!==null){for(var d=0;d<c.length;d++){var u=c[d];for(W=u;W!==null;){var p=W;switch(p.tag){case 0:case 11:case 15:Ua(8,p,i)}var f=p.child;if(f!==null)f.return=p,W=f;else for(;W!==null;){p=W;var g=p.sibling,h=p.return;if(sf(p),p===u){W=null;break}if(g!==null){g.return=h,W=g;break}W=h}}}var m=i.alternate;if(m!==null){var b=m.child;if(b!==null){m.child=null;do{var _=b.sibling;b.sibling=null,b=_}while(b!==null)}}W=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,W=s;else e:for(;W!==null;){if(i=W,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ua(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,W=v;break e}W=i.return}}var x=e.current;for(W=x;W!==null;){s=W;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,W=y;else e:for(s=x;W!==null;){if(c=W,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:si(9,c)}}catch(T){ye(c,c.return,T)}if(c===s){W=null;break e}var k=c.sibling;if(k!==null){k.return=c.return,W=k;break e}W=c.return}}if(oe=r,ft(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(qo,e)}catch{}a=!0}return a}finally{le=t,fn.transition=n}}return!1}function bd(e,n,t){n=ua(t,n),n=Zp(e,n,1),e=ot(e,n,1),n=Fe(),e!==null&&(Ir(e,1,n),Qe(e,n))}function ye(e,n,t){if(e.tag===3)bd(e,e,t);else for(;n!==null;){if(n.tag===3){bd(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(it===null||!it.has(a))){e=ua(t,e),e=Yp(n,e,1),n=ot(n,e,1),e=Fe(),n!==null&&(Ir(n,1,e),Qe(n,e));break}}n=n.return}}function g0(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),n=Fe(),e.pingedLanes|=e.suspendedLanes&t,Te===e&&(ze&t)===t&&(Ce===4||Ce===3&&(ze&130023424)===ze&&500>_e()-Gl?_t(e,0):Fl|=t),Qe(e,n)}function xf(e,n){n===0&&(e.mode&1?(n=Vr,Vr<<=1,!(Vr&130023424)&&(Vr=4194304)):n=1);var t=Fe();e=Fn(e,n),e!==null&&(Ir(e,n,t),Qe(e,t))}function h0(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),xf(e,t)}function x0(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(G(314))}a!==null&&a.delete(n),xf(e,t)}var vf;vf=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ye.current)We=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return We=!1,r0(e,n,t);We=!!(e.flags&131072)}else We=!1,ge&&n.flags&1048576&&_p(n,Mo,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;uo(e,n),e=n.pendingProps;var r=sa(n,Oe.current);ta(n,t),r=Ll(null,n,a,e,r,t);var i=Rl();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Xe(a)?(i=!0,Co(n)):i=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,$l(n),r.updater=ii,n.stateNode=r,r._reactInternals=n,$s(n,a,e,t),n=Vs(null,n,a,!0,i,t)):(n.tag=0,ge&&i&&Sl(n),Be(null,n,r,t),n=n.child),n;case 16:a=n.elementType;e:{switch(uo(e,n),e=n.pendingProps,r=a._init,a=r(a._payload),n.type=a,r=n.tag=b0(a),e=bn(a,e),r){case 0:n=As(null,n,a,e,t);break e;case 1:n=cd(null,n,a,e,t);break e;case 11:n=sd(null,n,a,e,t);break e;case 14:n=ld(null,n,a,bn(a.type,e),t);break e}throw Error(G(306,a,""))}return n;case 0:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:bn(a,r),As(e,n,a,r,t);case 1:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:bn(a,r),cd(e,n,a,r,t);case 3:e:{if(ef(n),e===null)throw Error(G(387));a=n.pendingProps,i=n.memoizedState,r=i.element,Cp(e,n),Do(n,a,null,t);var s=n.memoizedState;if(a=s.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){r=ua(Error(G(423)),n),n=dd(e,n,a,t,r);break e}else if(a!==r){r=ua(Error(G(424)),n),n=dd(e,n,a,t,r);break e}else for(tn=rt(n.stateNode.containerInfo.firstChild),an=n,ge=!0,_n=null,t=wp(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(la(),a===r){n=Gn(e,n,t);break e}Be(e,n,a,t)}n=n.child}return n;case 5:return Np(n),e===null&&Ts(n),a=n.type,r=n.pendingProps,i=e!==null?e.memoizedProps:null,s=r.children,ws(a,r)?s=null:i!==null&&ws(a,i)&&(n.flags|=32),qp(e,n),Be(e,n,s,t),n.child;case 6:return e===null&&Ts(n),null;case 13:return nf(e,n,t);case 4:return zl(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=ca(n,null,a,t):Be(e,n,a,t),n.child;case 11:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:bn(a,r),sd(e,n,a,r,t);case 7:return Be(e,n,n.pendingProps,t),n.child;case 8:return Be(e,n,n.pendingProps.children,t),n.child;case 12:return Be(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(a=n.type._context,r=n.pendingProps,i=n.memoizedProps,s=r.value,pe(To,a._currentValue),a._currentValue=s,i!==null)if(wn(i.value,s)){if(i.children===r.children&&!Ye.current){n=Gn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var c=i.dependencies;if(c!==null){s=i.child;for(var d=c.firstContext;d!==null;){if(d.context===a){if(i.tag===1){d=Kn(-1,t&-t),d.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?d.next=d:(d.next=p.next,p.next=d),u.pending=d}}i.lanes|=t,d=i.alternate,d!==null&&(d.lanes|=t),Es(i.return,t,n),c.lanes|=t;break}d=d.next}}else if(i.tag===10)s=i.type===n.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(G(341));s.lanes|=t,c=s.alternate,c!==null&&(c.lanes|=t),Es(s,t,n),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===n){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Be(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,a=n.pendingProps.children,ta(n,t),r=hn(r),a=a(r),n.flags|=1,Be(e,n,a,t),n.child;case 14:return a=n.type,r=bn(a,n.pendingProps),r=bn(a.type,r),ld(e,n,a,r,t);case 15:return Xp(e,n,n.type,n.pendingProps,t);case 17:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:bn(a,r),uo(e,n),n.tag=1,Xe(a)?(e=!0,Co(n)):e=!1,ta(n,t),Wp(n,a,r),$s(n,a,r,t),Vs(null,n,a,!0,e,t);case 19:return tf(e,n,t);case 22:return Qp(e,n,t)}throw Error(G(156,n.tag))};function bf(e,n){return Gu(e,n)}function v0(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(e,n,t,a){return new v0(e,n,t,a)}function Zl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function b0(e){if(typeof e=="function")return Zl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ml)return 11;if(e===gl)return 14}return 2}function lt(e,n){var t=e.alternate;return t===null?(t=pn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function mo(e,n,t,a,r,i){var s=2;if(a=e,typeof e=="function")Zl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Rt:return It(t.children,r,i,n);case fl:s=8,r|=8;break;case as:return e=pn(12,t,n,r|2),e.elementType=as,e.lanes=i,e;case rs:return e=pn(13,t,n,r),e.elementType=rs,e.lanes=i,e;case os:return e=pn(19,t,n,r),e.elementType=os,e.lanes=i,e;case Nu:return ci(t,r,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Su:s=10;break e;case Cu:s=9;break e;case ml:s=11;break e;case gl:s=14;break e;case Wn:s=16,a=null;break e}throw Error(G(130,e==null?e:typeof e,""))}return n=pn(s,t,n,r),n.elementType=e,n.type=a,n.lanes=i,n}function It(e,n,t,a){return e=pn(7,e,a,n),e.lanes=t,e}function ci(e,n,t,a){return e=pn(22,e,a,n),e.elementType=Nu,e.lanes=t,e.stateNode={isHidden:!1},e}function Ui(e,n,t){return e=pn(6,e,null,n),e.lanes=t,e}function Hi(e,n,t){return n=pn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function y0(e,n,t,a,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ci(0),this.expirationTimes=Ci(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ci(0),this.identifierPrefix=a,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Yl(e,n,t,a,r,i,s,c,d){return e=new y0(e,n,t,c,d),n===1?(n=1,i===!0&&(n|=8)):n=0,i=pn(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:a,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},$l(i),e}function _0(e,n,t){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Lt,key:a==null?null:""+a,children:e,containerInfo:n,implementation:t}}function yf(e){if(!e)return dt;e=e._reactInternals;e:{if($t(e)!==e||e.tag!==1)throw Error(G(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Xe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(G(171))}if(e.tag===1){var t=e.type;if(Xe(t))return bp(e,t,n)}return n}function _f(e,n,t,a,r,i,s,c,d){return e=Yl(t,a,!0,e,r,i,s,c,d),e.context=yf(null),t=e.current,a=Fe(),r=st(t),i=Kn(a,r),i.callback=n??null,ot(t,i,r),e.current.lanes=r,Ir(e,r,a),Qe(e,a),e}function di(e,n,t,a){var r=n.current,i=Fe(),s=st(r);return t=yf(t),n.context===null?n.context=t:n.pendingContext=t,n=Kn(i,s),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=ot(r,n,s),e!==null&&(kn(e,r,s,i),so(e,r,s)),s}function Oo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Xl(e,n){yd(e,n),(e=e.alternate)&&yd(e,n)}function I0(){return null}var If=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ql(e){this._internalRoot=e}ui.prototype.render=Ql.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(G(409));di(e,n,null,null)};ui.prototype.unmount=Ql.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ct(function(){di(null,e,null,null)}),n[Bn]=null}};function ui(e){this._internalRoot=e}ui.prototype.unstable_scheduleHydration=function(e){if(e){var n=Qu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Yn.length&&n!==0&&n<Yn[t].priority;t++);Yn.splice(t,0,e),t===0&&ep(e)}};function ql(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _d(){}function k0(e,n,t,a,r){if(r){if(typeof a=="function"){var i=a;a=function(){var u=Oo(s);i.call(u)}}var s=_f(n,a,e,0,null,!1,!1,"",_d);return e._reactRootContainer=s,e[Bn]=s.current,or(e.nodeType===8?e.parentNode:e),Ct(),s}for(;r=e.lastChild;)e.removeChild(r);if(typeof a=="function"){var c=a;a=function(){var u=Oo(d);c.call(u)}}var d=Yl(e,0,!1,null,null,!1,!1,"",_d);return e._reactRootContainer=d,e[Bn]=d.current,or(e.nodeType===8?e.parentNode:e),Ct(function(){di(n,d,t,a)}),d}function fi(e,n,t,a,r){var i=t._reactRootContainer;if(i){var s=i;if(typeof r=="function"){var c=r;r=function(){var d=Oo(s);c.call(d)}}di(n,s,e,r)}else s=k0(t,n,e,r,a);return Oo(s)}Yu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=La(n.pendingLanes);t!==0&&(vl(n,t|1),Qe(n,_e()),!(oe&6)&&(pa=_e()+500,ft()))}break;case 13:Ct(function(){var a=Fn(e,1);if(a!==null){var r=Fe();kn(a,e,1,r)}}),Xl(e,1)}};bl=function(e){if(e.tag===13){var n=Fn(e,134217728);if(n!==null){var t=Fe();kn(n,e,134217728,t)}Xl(e,134217728)}};Xu=function(e){if(e.tag===13){var n=st(e),t=Fn(e,n);if(t!==null){var a=Fe();kn(t,e,n,a)}Xl(e,n)}};Qu=function(){return le};qu=function(e,n){var t=le;try{return le=e,n()}finally{le=t}};gs=function(e,n,t){switch(n){case"input":if(ls(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var r=ai(a);if(!r)throw Error(G(90));Tu(a),ls(a,r)}}}break;case"textarea":Du(e,t);break;case"select":n=t.value,n!=null&&Qt(e,!!t.multiple,n,!1)}};Ru=Ul;Ou=Ct;var j0={usingClientEntryPoint:!1,Events:[jr,Bt,ai,Pu,Lu,Ul]},Da={findFiberByHostInstance:vt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},w0={bundleType:Da.bundleType,version:Da.version,rendererPackageName:Da.rendererPackageName,rendererConfig:Da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Un.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bu(e),e===null?null:e.stateNode},findFiberByHostInstance:Da.findFiberByHostInstance||I0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hr.isDisabled&&Hr.supportsFiber)try{qo=Hr.inject(w0),Tn=Hr}catch{}}on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j0;on.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ql(n))throw Error(G(200));return _0(e,n,null,t)};on.createRoot=function(e,n){if(!ql(e))throw Error(G(299));var t=!1,a="",r=If;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=Yl(e,1,!1,null,null,t,!1,a,r),e[Bn]=n.current,or(e.nodeType===8?e.parentNode:e),new Ql(n)};on.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(G(188)):(e=Object.keys(e).join(","),Error(G(268,e)));return e=Bu(n),e=e===null?null:e.stateNode,e};on.flushSync=function(e){return Ct(e)};on.hydrate=function(e,n,t){if(!pi(n))throw Error(G(200));return fi(null,e,n,!0,t)};on.hydrateRoot=function(e,n,t){if(!ql(e))throw Error(G(405));var a=t!=null&&t.hydratedSources||null,r=!1,i="",s=If;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=_f(n,null,e,1,t??null,r,!1,i,s),e[Bn]=n.current,or(e),a)for(e=0;e<a.length;e++)t=a[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new ui(n)};on.render=function(e,n,t){if(!pi(n))throw Error(G(200));return fi(null,e,n,!1,t)};on.unmountComponentAtNode=function(e){if(!pi(e))throw Error(G(40));return e._reactRootContainer?(Ct(function(){fi(null,null,e,!1,function(){e._reactRootContainer=null,e[Bn]=null})}),!0):!1};on.unstable_batchedUpdates=Ul;on.unstable_renderSubtreeIntoContainer=function(e,n,t,a){if(!pi(t))throw Error(G(200));if(e==null||e._reactInternals===void 0)throw Error(G(38));return fi(e,n,t,!1,a)};on.version="18.3.1-next-f1338f8080-20240426";function kf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kf)}catch(e){console.error(e)}}kf(),Iu.exports=on;var Sr=Iu.exports,Id=Sr;ns.createRoot=Id.createRoot,ns.hydrateRoot=Id.hydrateRoot;const ra=["player1","player2","player3","player4","player5","player6","player7","player8"];function S0(e,n){return e.players[n]}function C0(e,n,t){return{...e,players:{...e.players,[n]:t}}}function N0(e,n){const t=e.teams[n];return e.playerIds.filter(a=>a!==n&&e.teams[a]!==t&&!e.players[a].isDefeated)}function $e(e){return`P${e.replace("player","")}`}const M0=[{id:"ag-1",unitDeckId:"AG",nameJa:"ランス",nameCn:"长枪",actionType:"melee",frontImageId:"cards/ag/ag-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"ag-2",unitDeckId:"AG",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ag/ag-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ag-3",unitDeckId:"AG",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ag/ag-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ag-4",unitDeckId:"AG",nameJa:"スモールレーザー",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/ag/ag-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2,isEnergyWeapon:!0},{id:"ag-5",unitDeckId:"AG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ag/ag-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"ag-6",unitDeckId:"AG",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ag/ag-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-7",unitDeckId:"AG",nameJa:"ランス",nameCn:"长枪",actionType:"melee",frontImageId:"cards/ag/ag-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"ag-8",unitDeckId:"AG",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ag/ag-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-9",unitDeckId:"AG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/ag/ag-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"ag-10",unitDeckId:"AG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"ag-11",unitDeckId:"AG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/ag/ag-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"ag-12",unitDeckId:"AG",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ag/ag-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"ag-13",unitDeckId:"AG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"ag-14",unitDeckId:"AG",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ag/ag-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-15",unitDeckId:"AG",nameJa:"バーニア",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/ag/ag-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ag-16",unitDeckId:"AG",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/ag/ag-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ag-17",unitDeckId:"AG",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/ag/ag-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ag-18",unitDeckId:"AG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"ag-19",unitDeckId:"AG",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ag/ag-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-20",unitDeckId:"AG",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ag/ag-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-21",unitDeckId:"AG",nameJa:"バーニア",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/ag/ag-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"}],T0=[{id:"ar-1",unitDeckId:"AR",nameJa:"シールド",nameCn:"护盾",actionType:"armor",frontImageId:"cards/ar/ar-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止4点射击伤害。该卡在准备区时，可以将其破坏并防止4点任意伤害。"},{id:"ar-2",unitDeckId:"AR",nameJa:"アンカー",nameCn:"长锚",actionType:"ranged",frontImageId:"cards/ar/ar-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:1,rangeMax:3,damage:void 0,effectText:"射击前可以改变机甲的朝向。命中后，使攻击目标强制移动到自机面前，期间目标朝向不变。"},{id:"ar-3",unitDeckId:"AR",nameJa:"陸上機雷",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/ar/ar-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"在自机周围8格不重叠地设置机雷指示物和替身雷各2个。在各个时机结束时，检查是否有机甲位于指示物所在格。若有，将指示物翻开展示，如果是机雷的话对所在格中的机甲造成伤害，然后将指示物弃掉。"},{id:"ar-4",unitDeckId:"AR",nameJa:"陸上機雷",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/ar/ar-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"在自机周围8格不重叠地设置机雷指示物和替身雷各2个。在各个时机结束时，检查是否有机甲位于指示物所在格。若有，将指示物翻开展示，如果是机雷的话对所在格中的机甲造成伤害，然后将指示物弃掉。"},{id:"ar-5",unitDeckId:"AR",nameJa:"メイス",nameCn:"狼牙棒",actionType:"melee",frontImageId:"cards/ar/ar-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ar-6",unitDeckId:"AR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ar/ar-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ar-7",unitDeckId:"AR",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"ar-8",unitDeckId:"AR",nameJa:"移動６",nameCn:"移动6",actionType:"movement",frontImageId:"cards/ar/ar-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:6,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-9",unitDeckId:"AR",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ar/ar-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"ar-10",unitDeckId:"AR",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/ar/ar-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ar-11",unitDeckId:"AR",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"ar-12",unitDeckId:"AR",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/ar/ar-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ar-13",unitDeckId:"AR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ar/ar-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ar-14",unitDeckId:"AR",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"ar-15",unitDeckId:"AR",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ar/ar-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-16",unitDeckId:"AR",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ar/ar-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-17",unitDeckId:"AR",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ar/ar-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-18",unitDeckId:"AR",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ar/ar-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-19",unitDeckId:"AR",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ar/ar-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-20",unitDeckId:"AR",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ar/ar-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"}],E0=[{id:"bg-1",unitDeckId:"BG",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4,hasBombIcon:!0},{id:"bg-2",unitDeckId:"BG",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4,hasBombIcon:!0},{id:"bg-3",unitDeckId:"BG",nameJa:"ミドルレーザ",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/bg/bg-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3},{id:"bg-4",unitDeckId:"BG",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4,hasBombIcon:!0},{id:"bg-5",unitDeckId:"BG",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/bg/bg-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"bg-6",unitDeckId:"BG",nameJa:"スモールレーザ",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/bg/bg-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2},{id:"bg-7",unitDeckId:"BG",nameJa:"スナイパーライフル",nameCn:"狙击步枪",actionType:"ranged",frontImageId:"cards/bg/bg-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3,hasBombIcon:!0},{id:"bg-8",unitDeckId:"BG",nameJa:"スナイパーライフル",nameCn:"狙击步枪",actionType:"ranged",frontImageId:"cards/bg/bg-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3,hasBombIcon:!0},{id:"bg-9",unitDeckId:"BG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/bg/bg-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"bg-10",unitDeckId:"BG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/bg/bg-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"bg-11",unitDeckId:"BG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/bg/bg-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"bg-12",unitDeckId:"BG",nameJa:"スモールレーザ",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/bg/bg-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2},{id:"bg-13",unitDeckId:"BG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/bg/bg-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"bg-14",unitDeckId:"BG",nameJa:"ミドルレーザ",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/bg/bg-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3},{id:"bg-15",unitDeckId:"BG",nameJa:"スナイパーライフル",nameCn:"狙击步枪",actionType:"ranged",frontImageId:"cards/bg/bg-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3,hasBombIcon:!0},{id:"bg-16",unitDeckId:"BG",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/bg/bg-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"bg-17",unitDeckId:"BG",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/bg/bg-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"bg-18",unitDeckId:"BG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/bg/bg-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"bg-19",unitDeckId:"BG",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/bg/bg-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg-20",unitDeckId:"BG",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/bg/bg-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg-21",unitDeckId:"BG",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/bg/bg-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg-22",unitDeckId:"BG",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/bg/bg-22-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"bg-23",unitDeckId:"BG",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/bg/bg-23-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"}],D0=[{id:"ho-1",unitDeckId:"HO",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ho/ho-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-2",unitDeckId:"HO",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ho/ho-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-3",unitDeckId:"HO",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ho/ho-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-4",unitDeckId:"HO",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ho/ho-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-5",unitDeckId:"HO",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ho/ho-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"ho-6",unitDeckId:"HO",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ho/ho-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"ho-7",unitDeckId:"HO",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ho/ho-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ho-8",unitDeckId:"HO",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ho/ho-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-9",unitDeckId:"HO",nameJa:"移動６",nameCn:"移动6",actionType:"movement",frontImageId:"cards/ho/ho-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:6,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-10",unitDeckId:"HO",nameJa:"移動７",nameCn:"移动7",actionType:"movement",frontImageId:"cards/ho/ho-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:7,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-11",unitDeckId:"HO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ho/ho-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ho-12",unitDeckId:"HO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ho/ho-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ho-13",unitDeckId:"HO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/ho/ho-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"ho-14",unitDeckId:"HO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/ho/ho-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"ho-15",unitDeckId:"HO",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ho/ho-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ho-16",unitDeckId:"HO",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/ho/ho-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"ho-17",unitDeckId:"HO",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/ho/ho-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"}],$0=[{id:"hy-1",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"hy-2",unitDeckId:"HY",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-3",unitDeckId:"HY",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-4",unitDeckId:"HY",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-5",unitDeckId:"HY",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-6",unitDeckId:"HY",nameJa:"ガトリングガン",nameCn:"加特林",actionType:"ranged",frontImageId:"cards/hy/hy-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:5,damage:3,hasBombIcon:!0},{id:"hy-7",unitDeckId:"HY",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-8",unitDeckId:"HY",nameJa:"ガトリングガン",nameCn:"加特林",actionType:"ranged",frontImageId:"cards/hy/hy-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:5,damage:3,hasBombIcon:!0},{id:"hy-9",unitDeckId:"HY",nameJa:"ホイール",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/hy/hy-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"hy-10",unitDeckId:"HY",nameJa:"ホイール",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/hy/hy-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"hy-11",unitDeckId:"HY",nameJa:"スパイク",nameCn:"长钉",actionType:"charge",frontImageId:"cards/hy/hy-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"不进行突击移动，选择自机正面的机甲为攻击目标。对对方造成自机突击伤害+1的近战伤害。对自机造成对方被突击伤害-1的近战伤害。"},{id:"hy-12",unitDeckId:"HY",nameJa:"シールド",nameCn:"护盾",actionType:"armor",frontImageId:"cards/hy/hy-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止4点射击伤害。该卡在准备区时，可以将其破坏并防止4点任意伤害。"},{id:"hy-13",unitDeckId:"HY",nameJa:"シールド",nameCn:"护盾",actionType:"armor",frontImageId:"cards/hy/hy-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止4点射击伤害。该卡在准备区时，可以将其破坏并防止4点任意伤害。"},{id:"hy-14",unitDeckId:"HY",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/hy/hy-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"hy-15",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"hy-16",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"hy-17",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"hy-18",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"hy-19",unitDeckId:"HY",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/hy/hy-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"hy-20",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"hy-21",unitDeckId:"HY",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/hy/hy-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"hy-22",unitDeckId:"HY",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/hy/hy-22-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"hy-23",unitDeckId:"HY",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/hy/hy-23-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"hy-24",unitDeckId:"HY",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-24-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0}],z0=[{id:"lg-1",unitDeckId:"LG",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/lg/lg-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-2",unitDeckId:"LG",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/lg/lg-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-3",unitDeckId:"LG",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/lg/lg-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-4",unitDeckId:"LG",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/lg/lg-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-5",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"lg-6",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"lg-7",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"lg-8",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"lg-9",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"lg-10",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"lg-11",unitDeckId:"LG",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/lg/lg-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"lg-12",unitDeckId:"LG",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/lg/lg-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"lg-13",unitDeckId:"LG",nameJa:"スパイク",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/lg/lg-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"lg-14",unitDeckId:"LG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/lg/lg-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"lg-15",unitDeckId:"LG",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/lg/lg-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"lg-16",unitDeckId:"LG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/lg/lg-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"lg-17",unitDeckId:"LG",nameJa:"パイルバンカー",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/lg/lg-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"lg-18",unitDeckId:"LG",nameJa:"パイルバンカー",nameCn:"长钉",actionType:"charge",frontImageId:"cards/lg/lg-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"不进行突击移动，选择自机正面的机甲为攻击目标。对对方造成自机突击伤害+1的近战伤害。对自机造成对方被突击伤害-1的近战伤害。"},{id:"lg-19",unitDeckId:"LG",nameJa:"クロー",nameCn:"爪",actionType:"melee",frontImageId:"cards/lg/lg-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:2,effectText:"（结算伤害前）如果攻击目标的手牌、辅助区、准备区中有类别包括“装甲”的卡牌，选择其中两张破坏。"},{id:"lg-20",unitDeckId:"LG",nameJa:"クロー",nameCn:"爪",actionType:"melee",frontImageId:"cards/lg/lg-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:2,effectText:"（结算伤害前）如果攻击目标的手牌、辅助区、准备区中有类别包括“装甲”的卡牌，选择其中两张破坏。"},{id:"lg-21",unitDeckId:"LG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/lg/lg-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"lg-22",unitDeckId:"LG",nameJa:"ホイール",nameCn:"滑轮",actionType:"auxiliary",frontImageId:"cards/lg/lg-22-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:○、近战:×。使用后移动力+2。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"lg-23",unitDeckId:"LG",nameJa:"ホイール",nameCn:"滑轮",actionType:"auxiliary",frontImageId:"cards/lg/lg-23-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:○、近战:×。使用后移动力+2。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"}],A0=[{id:"lo-1",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-2",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-3",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-4",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-5",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-6",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-7",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-8",unitDeckId:"LO",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/lo/lo-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"lo-9",unitDeckId:"LO",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/lo/lo-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"lo-10",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-11",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-12",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-13",unitDeckId:"LO",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/lo/lo-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-14",unitDeckId:"LO",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/lo/lo-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-15",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-16",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-17",unitDeckId:"LO",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/lo/lo-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-18",unitDeckId:"LO",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/lo/lo-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-19",unitDeckId:"LO",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/lo/lo-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-20",unitDeckId:"LO",nameJa:"スモールレーザー",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/lo/lo-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2,isEnergyWeapon:!0}],V0=[{id:"tr-1",unitDeckId:"TR",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/tr/tr-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-2",unitDeckId:"TR",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/tr/tr-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-3",unitDeckId:"TR",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/tr/tr-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-4",unitDeckId:"TR",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/tr/tr-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-5",unitDeckId:"TR",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/tr/tr-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-6",unitDeckId:"TR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/tr/tr-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"tr-7",unitDeckId:"TR",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/tr/tr-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"tr-8",unitDeckId:"TR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/tr/tr-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"tr-9",unitDeckId:"TR",nameJa:"移動６",nameCn:"移动6",actionType:"movement",frontImageId:"cards/tr/tr-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:6,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-10",unitDeckId:"TR",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/tr/tr-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"tr-11",unitDeckId:"TR",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/tr/tr-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"tr-12",unitDeckId:"TR",nameJa:"アクス",nameCn:"斧头",actionType:"melee",frontImageId:"cards/tr/tr-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"tr-13",unitDeckId:"TR",nameJa:"アクス",nameCn:"斧头",actionType:"melee",frontImageId:"cards/tr/tr-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"tr-14",unitDeckId:"TR",nameJa:"パイルバンカー",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/tr/tr-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"tr-15",unitDeckId:"TR",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/tr/tr-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"tr-16",unitDeckId:"TR",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/tr/tr-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"tr-17",unitDeckId:"TR",nameJa:"パイルバンカー",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/tr/tr-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"tr-18",unitDeckId:"TR",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/tr/tr-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"tr-19",unitDeckId:"TR",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/tr/tr-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0}],P0=[{id:"zb-1",unitDeckId:"ZB",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ag/ag-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-2",unitDeckId:"ZB",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ag/ag-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-3",unitDeckId:"ZB",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ag/ag-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-4",unitDeckId:"ZB",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ag/ag-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-5",unitDeckId:"ZB",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ag/ag-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-6",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-7",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-8",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-9",unitDeckId:"ZB",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ag/ag-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-10",unitDeckId:"ZB",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ag/ag-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-11",unitDeckId:"ZB",nameJa:"ムーブセンサー",nameCn:"移动感应器",actionType:"auxiliary",frontImageId:"cards/ho/ho-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-12",unitDeckId:"ZB",nameJa:"ムーブセンサー",nameCn:"移动感应器",actionType:"auxiliary",frontImageId:"cards/ho/ho-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-13",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-14",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-15",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-16",unitDeckId:"ZB",nameJa:"ラージレーザー",nameCn:"大口径激光",actionType:"ranged",frontImageId:"cards/bg/bg-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"zb-17",unitDeckId:"ZB",nameJa:"ブレード",nameCn:"剑",actionType:"melee",frontImageId:"cards/zb/zb-17-front.png",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"zb-18",unitDeckId:"ZB",nameJa:"バルカン",nameCn:"火神炮",actionType:"ranged",frontImageId:"cards/zb/zb-18-front.png",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:2,damage:2},{id:"zb-19",unitDeckId:"ZB",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ag/ag-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-20",unitDeckId:"ZB",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ag/ag-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-21",unitDeckId:"ZB",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4},{id:"zb-22",unitDeckId:"ZB",nameJa:"ラージレーザー",nameCn:"大口径激光",actionType:"ranged",frontImageId:"cards/bg/bg-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"zb-23",unitDeckId:"ZB",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4}],L0=[{id:"ag_plus-1",unitDeckId:"AG+",nameJa:"コルセスカ",nameCn:"长柄三叉矛",actionType:"melee",frontImageId:"cards/ag_plus/ag_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ag_plus-2",unitDeckId:"AG+",nameJa:"コルセスカ",nameCn:"长柄三叉矛",actionType:"melee",frontImageId:"cards/ag_plus/ag_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ag_plus-3",unitDeckId:"AG+",nameJa:"ネット",nameCn:"网",actionType:"ranged",frontImageId:"cards/ag_plus/ag_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:5,damage:void 0},{id:"ag_plus-4",unitDeckId:"AG+",nameJa:"ボーラ",nameCn:"投石索",actionType:"ranged",frontImageId:"cards/ag_plus/ag_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:4,damage:void 0},{id:"ag_plus-5",unitDeckId:"AG+",nameJa:"バルカン",nameCn:"火神炮",actionType:"ranged",frontImageId:"cards/ag_plus/ag_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:2,damage:2}],R0=[{id:"ar_plus-1",unitDeckId:"AR+",nameJa:"ウォーハンマー",nameCn:"战锤",actionType:"melee",frontImageId:"cards/ar_plus/ar_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"ar_plus-2",unitDeckId:"AR+",nameJa:"強化機雷",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/ar_plus/ar_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,hasBombIcon:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"ar_plus-3",unitDeckId:"AR+",nameJa:"ロングアンカー",nameCn:"长锚",actionType:"ranged",frontImageId:"cards/ar_plus/ar_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:4,damage:1},{id:"ar_plus-4",unitDeckId:"AR+",nameJa:"強化機雷",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/ar_plus/ar_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,hasBombIcon:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5}],O0=[{id:"bg_plus-1",unitDeckId:"BG+",nameJa:"自爆装置",nameCn:"自爆装置",actionType:"mine",frontImageId:"cards/bg_plus/bg_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,hasBombIcon:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg_plus-2",unitDeckId:"BG+",nameJa:"大口径ロケット砲",nameCn:"大口径火箭炮",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:5},{id:"bg_plus-3",unitDeckId:"BG+",nameJa:"大口径ロケット砲",nameCn:"大口径火箭炮",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:5},{id:"bg_plus-4",unitDeckId:"BG+",nameJa:"高品質ライフル",nameCn:"高品质步枪",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3},{id:"bg_plus-5",unitDeckId:"BG+",nameJa:"スモークミサイル",nameCn:"烟雾导弹",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:5,damage:void 0}],K0=[{id:"ho_plus-1",unitDeckId:"HO+",nameJa:"スタンウィップ",nameCn:"电击鞭",actionType:"melee",frontImageId:"cards/ho_plus/ho_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:1},{id:"ho_plus-2",unitDeckId:"HO+",nameJa:"チェーンブレード",nameCn:"链锯剑",actionType:"melee",frontImageId:"cards/ho_plus/ho_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ho_plus-3",unitDeckId:"HO+",nameJa:"高品質ロケット砲",nameCn:"高品质火箭炮",actionType:"ranged",frontImageId:"cards/ho_plus/ho_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4},{id:"ho_plus-4",unitDeckId:"HO+",nameJa:"火炎放射器",nameCn:"火焰喷射器",actionType:"ranged",frontImageId:"cards/ho_plus/ho_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2}],J0=[{id:"hy_plus-1",unitDeckId:"HY+",nameJa:"ショットガン",nameCn:"散弹枪",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:3,damage:4},{id:"hy_plus-2",unitDeckId:"HY+",nameJa:"ショットガン",nameCn:"散弹枪",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:3,damage:4},{id:"hy_plus-3",unitDeckId:"HY+",nameJa:"ガトリングカノン",nameCn:"加特林炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:4},{id:"hy_plus-4",unitDeckId:"HY+",nameJa:"ガトリングカノン",nameCn:"加特林炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:4},{id:"hy_plus-5",unitDeckId:"HY+",nameJa:"ガトリングカノン",nameCn:"加特林炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:4},{id:"hy_plus-6",unitDeckId:"HY+",nameJa:"ミサイルシールド",nameCn:"导弹盾",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3},{id:"hy_plus-7",unitDeckId:"HY+",nameJa:"高品質ロケット砲",nameCn:"高品质火箭炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4},{id:"hy_plus-8",unitDeckId:"HY+",nameJa:"ミサイルシールド",nameCn:"导弹盾",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3}],B0=[{id:"lg_plus-1",unitDeckId:"LG+",nameJa:"ヒートクロー",nameCn:"热力爪",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-2",unitDeckId:"LG+",nameJa:"グレネードランチャー",nameCn:"榴弹发射器",actionType:"ranged",frontImageId:"cards/lg_plus/lg_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:5,damage:3},{id:"lg_plus-3",unitDeckId:"LG+",nameJa:"グレネードランチャー",nameCn:"榴弹发射器",actionType:"ranged",frontImageId:"cards/lg_plus/lg_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:5,damage:3},{id:"lg_plus-4",unitDeckId:"LG+",nameJa:"キャタピラ",nameCn:"履带",actionType:"auxiliary",frontImageId:"cards/lg_plus/lg_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-5",unitDeckId:"LG+",nameJa:"リボルバンカー",nameCn:"左轮打桩机",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6},{id:"lg_plus-6",unitDeckId:"LG+",nameJa:"キャタピラ",nameCn:"履带",actionType:"auxiliary",frontImageId:"cards/lg_plus/lg_plus-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-7",unitDeckId:"LG+",nameJa:"ヒートクロー",nameCn:"热力爪",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-8",unitDeckId:"LG+",nameJa:"リボルバンカー",nameCn:"左轮打桩机",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6}],F0=[{id:"lo_plus-1",unitDeckId:"LO+",nameJa:"防水膜",nameCn:"防水膜",actionType:"auxiliary",frontImageId:"cards/lo_plus/lo_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo_plus-2",unitDeckId:"LO+",nameJa:"追加装甲",nameCn:"附加装甲",actionType:"armor",frontImageId:"cards/lo_plus/lo_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo_plus-3",unitDeckId:"LO+",nameJa:"パルスレーザー",nameCn:"脉冲激光",actionType:"ranged",frontImageId:"cards/lo_plus/lo_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:2,isEnergyWeapon:!0},{id:"lo_plus-4",unitDeckId:"LO+",nameJa:"サウンドストーム",nameCn:"声波风暴",actionType:"melee",frontImageId:"cards/lo_plus/lo_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0}],G0=[{id:"tr_plus-1",unitDeckId:"TR+",nameJa:"サウンドウェーブ",nameCn:"声波",actionType:"melee",frontImageId:"cards/tr_plus/tr_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr_plus-2",unitDeckId:"TR+",nameJa:"バルディッシュ",nameCn:"长柄斧",actionType:"melee",frontImageId:"cards/tr_plus/tr_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"tr_plus-3",unitDeckId:"TR+",nameJa:"バルディッシュ",nameCn:"长柄斧",actionType:"melee",frontImageId:"cards/tr_plus/tr_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"tr_plus-4",unitDeckId:"TR+",nameJa:"高圧縮レーザー",nameCn:"高压缩激光",actionType:"ranged",frontImageId:"cards/tr_plus/tr_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:4,isEnergyWeapon:!0},{id:"tr_plus-5",unitDeckId:"TR+",nameJa:"高圧縮レーザー",nameCn:"高压缩激光",actionType:"ranged",frontImageId:"cards/tr_plus/tr_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:4,isEnergyWeapon:!0}],U0=[{id:"zb_plus-1",unitDeckId:"ZB+",nameJa:"広射程ミサイル",nameCn:"广射程导弹",actionType:"ranged",frontImageId:"cards/zb_plus/zb_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:3},{id:"zb_plus-2",unitDeckId:"ZB+",nameJa:"ホバー",nameCn:"悬浮器",actionType:"auxiliary",frontImageId:"cards/zb_plus/zb_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb_plus-3",unitDeckId:"ZB+",nameJa:"ホバー",nameCn:"悬浮器",actionType:"auxiliary",frontImageId:"cards/zb_plus/zb_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb_plus-4",unitDeckId:"ZB+",nameJa:"チェーンブレード",nameCn:"链锯剑",actionType:"melee",frontImageId:"cards/zb_plus/zb_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"zb_plus-5",unitDeckId:"ZB+",nameJa:"ジャイアントシザース",nameCn:"巨型剪刀",actionType:"melee",frontImageId:"cards/zb_plus/zb_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:10},{id:"zb_plus-6",unitDeckId:"ZB+",nameJa:"広射程ミサイル",nameCn:"广射程导弹",actionType:"ranged",frontImageId:"cards/zb_plus/zb_plus-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:3}],H0=[{id:"ダミー-1",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-2",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-3",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-4",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-5",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-6",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-7",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-8",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-9",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-10",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-11",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-12",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-13",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-14",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-15",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-16",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-17",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-18",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-19",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-20",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0}],W0=[{id:"強化機雷-1",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-2",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-3",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-4",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-5",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-6",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-7",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-8",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-9",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-10",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-11",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-12",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-13",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-14",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-15",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-16",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5}],Z0=[{id:"陸上機雷-1",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-2",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-3",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-4",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-5",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-6",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-7",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-8",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-9",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-10",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-11",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-12",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-13",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-14",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-15",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-16",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-17",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-18",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-19",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-20",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3}],fa={AG:M0,AR:T0,BG:E0,HO:D0,HY:$0,LG:z0,LO:A0,TR:V0,ZB:P0,"AG+":L0,"AR+":R0,"BG+":O0,"HO+":K0,"HY+":J0,"LG+":B0,"LO+":F0,"TR+":G0,"ZB+":U0,ダミー:H0,強化機雷:W0,陸上機雷:Z0};let Y0=0;function X0(e,n){return`${e}-${n}-${Y0++}`}function Q0(e,n){const a=(fa[e]??[]).map(r=>({instanceId:X0(r.id,n),defId:r.id,destroyed:!1}));return q0(a)}function q0(e){const n=[...e];for(let t=n.length-1;t>0;t--){const a=Math.floor(Math.random()*(t+1));[n[t],n[a]]=[n[a],n[t]]}return n}function jf(e,n){const t=[...e];let a=n>>>0;for(let r=t.length-1;r>0;r--){a=a+1831565813>>>0;let i=Math.imul(a^a>>>15,a|1);i^=i+Math.imul(i^i>>>7,i|61);const s=((i^i>>>14)>>>0)/4294967296,c=Math.floor(s*(r+1));[t[r],t[c]]=[t[c],t[r]]}return{shuffled:t,nextSeed:a}}function eh(e,n){const t=Math.min(n,e.length);return{drawn:e.slice(0,t),remaining:e.slice(t)}}function ee(e){for(const n of Object.values(fa)){const t=n.find(a=>a.id===e);if(t)return t}}const l=(e=0)=>({terrain:"plain",elevation:0,variant:e}),I=(e=0)=>({terrain:"sand",elevation:0,variant:e}),J=(e=0)=>({terrain:"rubble",elevation:0,variant:e}),K=(e=0)=>({terrain:"forest",elevation:0,variant:e}),A=(e=0)=>({terrain:"water",elevation:0,variant:e}),C=e=>({terrain:"highland",elevation:e,variant:e}),nh={id:"map_1a",nameJa:"基本マップ1a",nameCn:"基础地图1a",width:7,height:11,maxPlayers:2,maxTeams:2,cells:[[I(),I(),I(),I(),I(),I(),I()],[l(),l(),l(),l(),l(),l(),l()],[l(),l(),l(),l(),l(),l(),l()],[C(2),C(1),l(),l(),l(),C(2),C(2)],[C(1),C(1),l(),l(),l(),C(2),l()],[l(),l(),l(),l(),l(),C(2),l()],[l(),l(),l(),l(),l(),l(),l()],[l(),l(),l(),C(1),C(1),C(2),C(2)],[l(),l(),l(),l(),l(),l(),l()],[l(),l(),l(),l(),l(),l(),l()],[J(),J(),J(),J(),J(),J(),J()]],startZones:{0:[{row:0,col:2},{row:0,col:3},{row:0,col:4}],1:[{row:10,col:2},{row:10,col:3},{row:10,col:4}]}},th={id:"map_2a",nameJa:"基本マップ2a",nameCn:"基础地图2a",width:7,height:11,maxPlayers:2,maxTeams:2,cells:[[I(),I(),I(),I(),I(),I(),I()],[l(),l(),l(),l(),l(),l(),l()],[C(2),C(2),l(),l(),l(),l(),l()],[C(2),l(),l(),l(),l(),l(),l()],[C(2),l(),l(),l(),l(),l(),l()],[C(2),l(),l(),l(),l(),l(),l()],[C(2),C(2),l(),l(),l(),l(),l()],[l(),l(),l(),l(),K(),K(),l()],[l(),l(),l(),l(),K(),K(),l()],[l(),l(),l(),l(),l(),l(),l()],[I(),I(),I(),I(),I(),I(),I()]],startZones:{0:[{row:0,col:2},{row:0,col:3},{row:0,col:4}],1:[{row:10,col:2},{row:10,col:3},{row:10,col:4}]}},ah={id:"map_2b",nameJa:"基本マップ2b",nameCn:"基础地图2b",width:7,height:11,maxPlayers:2,maxTeams:2,cells:[[K(),K(),K(),l(),l(),l(),l()],[A(),A(),I(),l(),l(),l(),l()],[A(),A(),I(),l(),l(),l(),l()],[I(),A(),A(),I(),l(),l(),l()],[l(),I(),A(),A(),I(),l(),l()],[l(),l(),I(),A(),A(),I(),l()],[l(),l(),l(),A(),A(),I(),l()],[l(),l(),l(),I(),A(),A(),l()],[l(),l(),l(),l(),I(),A(),A()],[l(),l(),l(),l(),l(),l(),l()],[l(),l(),I(),I(),I(),l(),l()]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:0,col:2}],1:[{row:10,col:2},{row:10,col:3},{row:10,col:4}]}},rh={id:"map_3a",nameJa:"峡谷要塞",nameCn:"峡谷要塞",width:9,height:13,maxPlayers:4,maxTeams:4,cells:[[I(),I(),I(),I(),I(),I(),I(),I(),I()],[K(0),l(),l(),l(),l(),l(),l(),l(),K(1)],[l(),l(),l(),l(),l(),l(),l(),l(),l()],[C(2),C(3),C(1),l(),l(),l(),C(1),C(2),C(2)],[C(2),C(2),l(),l(),J(1),l(),l(),C(1),C(2)],[C(1),l(),J(0),J(2),l(),J(1),J(3),l(),C(1)],[l(),I(),A(0),A(1),I(),A(2),A(0),I(),l()],[C(1),l(),J(3),J(0),l(),J(2),J(1),l(),C(1)],[C(2),C(1),l(),l(),J(0),l(),l(),C(2),C(2)],[C(2),C(2),C(1),l(),l(),l(),C(1),C(3),C(2)],[l(),l(),l(),l(),l(),l(),l(),l(),l()],[K(2),l(),l(),l(),l(),l(),l(),l(),K(3)],[I(),I(),I(),I(),I(),I(),I(),I(),I()]],startZones:{0:[{row:0,col:1},{row:0,col:3},{row:0,col:4},{row:0,col:5},{row:0,col:7}],1:[{row:12,col:1},{row:12,col:3},{row:12,col:4},{row:12,col:5},{row:12,col:7}],2:[{row:2,col:0},{row:6,col:0}],3:[{row:2,col:8},{row:6,col:8}]}},oh={id:"map_3b",nameJa:"群島戦域",nameCn:"群岛战域",width:9,height:13,maxPlayers:4,maxTeams:4,cells:[[K(0),K(1),I(),I(),A(0),A(1),l(),l(),l()],[K(2),I(),l(),I(),A(2),l(),l(),I(),A(0)],[I(),A(0),I(),l(),l(),I(),A(1),A(0),A(2)],[A(1),A(2),l(),l(),C(1),l(),l(),A(2),A(1)],[A(0),I(),l(),C(1),C(2),C(1),l(),I(),A(0)],[A(2),l(),C(1),C(2),C(3),C(2),C(1),l(),A(1)],[A(1),I(),l(),C(2),K(0),C(2),l(),I(),A(2)],[A(0),l(),C(1),C(2),C(3),C(2),C(1),l(),A(0)],[A(2),I(),l(),C(1),C(2),C(1),l(),I(),A(1)],[A(1),A(0),l(),l(),C(1),l(),l(),A(0),A(2)],[A(0),A(2),A(1),I(),l(),l(),I(),A(1),I()],[l(),l(),A(0),I(),l(),I(),J(0),I(),J(1)],[l(),l(),l(),A(1),I(),I(),J(2),J(3),J(0)]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:1,col:0},{row:0,col:6},{row:0,col:7}],1:[{row:12,col:6},{row:12,col:7},{row:11,col:8},{row:12,col:0},{row:12,col:1}],2:[{row:2,col:3},{row:3,col:2}],3:[{row:10,col:4},{row:10,col:5}]}},ih={id:"map_4a",nameJa:"都市廃墟",nameCn:"都市废墟",width:11,height:15,maxPlayers:4,maxTeams:4,cells:[[J(0),I(),I(),I(),I(),I(),I(),I(),I(),I(),J(1)],[J(2),J(3),l(),l(),l(),l(),l(),K(0),K(1),l(),l()],[l(),J(0),J(1),l(),l(),J(2),l(),K(2),l(),l(),l()],[l(),l(),C(1),C(2),l(),J(3),l(),l(),l(),J(0),l()],[l(),l(),C(2),C(1),l(),l(),l(),l(),I(),A(0),I()],[J(1),l(),l(),l(),l(),J(0),l(),I(),A(1),A(2),l()],[J(2),J(0),l(),l(),l(),l(),I(),A(0),I(),l(),l()],[l(),l(),l(),l(),l(),C(3),l(),l(),l(),l(),l()],[l(),l(),I(),A(2),I(),l(),l(),l(),l(),J(1),J(2)],[l(),A(0),A(1),I(),l(),K(0),K(1),l(),l(),l(),J(0)],[l(),J(3),l(),l(),l(),K(2),K(3),l(),C(1),C(2),l()],[l(),l(),l(),J(1),l(),l(),l(),l(),C(2),C(1),l()],[l(),l(),J(2),J(0),l(),l(),l(),l(),l(),l(),l()],[l(),l(),l(),J(3),l(),l(),l(),J(1),J(2),l(),l()],[J(3),I(),I(),I(),I(),I(),I(),I(),I(),I(),J(2)]],startZones:{0:[{row:0,col:1},{row:0,col:3},{row:0,col:5},{row:0,col:7},{row:0,col:9}],1:[{row:14,col:1},{row:14,col:3},{row:14,col:5},{row:14,col:7},{row:14,col:9}],2:[{row:7,col:0},{row:8,col:0}],3:[{row:6,col:10},{row:7,col:10}]}},sh={id:"map_5a",nameJa:"三叉戦場",nameCn:"三叉战场",width:13,height:17,maxPlayers:6,maxTeams:6,cells:[[l(),l(),l(),I(),I(),I(),I(),I(),I(),I(),l(),l(),l()],[l(),l(),I(),l(),l(),l(),l(),l(),l(),l(),I(),l(),l()],[l(),K(0),l(),l(),l(),l(),l(),l(),l(),l(),l(),K(1),l()],[K(2),K(0),l(),l(),l(),J(0),l(),J(1),l(),l(),l(),K(1),K(3)],[K(0),l(),l(),l(),I(),A(0),I(),A(1),I(),l(),l(),l(),K(2)],[l(),l(),l(),I(),A(1),A(0),l(),A(2),A(0),I(),l(),l(),l()],[l(),l(),C(1),C(2),I(),l(),l(),l(),I(),C(2),C(1),l(),l()],[l(),C(1),C(2),C(3),C(2),l(),l(),l(),C(2),C(3),C(2),C(1),l()],[l(),l(),C(2),C(3),J(0),C(2),C(3),C(2),J(1),C(3),C(2),l(),l()],[l(),C(1),C(2),C(3),C(2),l(),l(),l(),C(2),C(3),C(2),C(1),l()],[l(),l(),C(1),C(2),I(),l(),l(),l(),I(),C(2),C(1),l(),l()],[l(),l(),l(),I(),A(2),A(1),l(),A(0),A(2),I(),l(),l(),l()],[K(1),l(),l(),l(),I(),A(0),I(),A(1),I(),l(),l(),l(),K(0)],[K(3),K(2),l(),l(),l(),J(2),l(),J(3),l(),l(),l(),K(0),K(1)],[l(),K(0),l(),l(),l(),l(),l(),l(),l(),l(),l(),K(2),l()],[I(),I(),I(),I(),l(),l(),l(),l(),l(),I(),I(),I(),I()],[I(),I(),I(),I(),I(),l(),l(),l(),I(),I(),I(),I(),I()]],startZones:{0:[{row:0,col:4},{row:0,col:6},{row:0,col:8}],1:[{row:16,col:0},{row:16,col:1},{row:16,col:2}],2:[{row:16,col:10},{row:16,col:11},{row:16,col:12}],3:[{row:6,col:0},{row:6,col:1},{row:10,col:0}],4:[{row:6,col:11},{row:6,col:12},{row:10,col:12}],5:[{row:2,col:0},{row:2,col:6},{row:2,col:12}]}},lh={id:"map_6a",nameJa:"環状要塞",nameCn:"环形要塞",width:15,height:17,maxPlayers:8,maxTeams:8,cells:[[l(),l(),l(),l(),I(),I(),I(),I(),I(),I(),I(),l(),l(),l(),l()],[l(),l(),l(),I(),l(),l(),l(),l(),l(),l(),l(),I(),l(),l(),l()],[l(),l(),C(1),C(2),C(2),C(1),l(),l(),l(),C(1),C(2),C(2),C(1),l(),l()],[l(),J(0),C(1),l(),l(),l(),J(1),l(),J(2),l(),l(),l(),C(1),J(3),l()],[I(),l(),l(),l(),K(0),K(1),l(),l(),l(),K(2),K(3),l(),l(),l(),I()],[I(),l(),J(0),l(),K(2),l(),l(),l(),l(),l(),K(0),l(),J(1),l(),I()],[l(),J(2),C(1),l(),l(),l(),J(3),I(),J(0),l(),l(),l(),C(1),J(1),l()],[l(),l(),l(),l(),l(),I(),A(0),A(1),A(2),I(),l(),l(),l(),l(),l()],[l(),l(),l(),l(),I(),A(2),A(0),C(3),A(1),A(0),I(),l(),l(),l(),l()],[l(),l(),l(),l(),l(),I(),A(1),A(2),A(0),I(),l(),l(),l(),l(),l()],[l(),J(3),C(1),l(),l(),l(),J(1),I(),J(2),l(),l(),l(),C(1),J(0),l()],[I(),l(),J(2),l(),K(1),l(),l(),l(),l(),l(),K(3),l(),J(3),l(),I()],[I(),l(),l(),l(),K(3),K(0),l(),l(),l(),K(1),K(2),l(),l(),l(),I()],[l(),J(1),C(1),l(),l(),l(),J(3),l(),J(0),l(),l(),l(),C(1),J(2),l()],[l(),l(),C(1),C(2),C(2),C(1),l(),l(),l(),C(1),C(2),C(2),C(1),l(),l()],[l(),l(),l(),I(),l(),l(),l(),l(),l(),l(),l(),I(),l(),l(),l()],[l(),l(),l(),l(),I(),I(),I(),I(),I(),I(),I(),l(),l(),l(),l()]],startZones:{0:[{row:0,col:5},{row:0,col:6},{row:0,col:7},{row:0,col:8}],1:[{row:16,col:5},{row:16,col:6},{row:16,col:7},{row:16,col:8}],2:[{row:4,col:0},{row:5,col:0},{row:11,col:0},{row:12,col:0}],3:[{row:4,col:14},{row:5,col:14},{row:11,col:14},{row:12,col:14}],4:[{row:0,col:0},{row:0,col:1},{row:0,col:2},{row:0,col:3}],5:[{row:0,col:11},{row:0,col:12},{row:0,col:13},{row:0,col:14}],6:[{row:16,col:0},{row:16,col:1},{row:16,col:2},{row:16,col:3}],7:[{row:16,col:11},{row:16,col:12},{row:16,col:13},{row:16,col:14}]}},ch={id:"map_7a",nameJa:"大陸戦争",nameCn:"大陆战争",width:17,height:19,maxPlayers:8,maxTeams:8,cells:[[I(),I(),I(),I(),l(),l(),l(),l(),l(),l(),l(),l(),l(),I(),I(),I(),I()],[I(),l(),l(),l(),l(),l(),K(0),l(),l(),l(),K(1),l(),l(),l(),l(),l(),I()],[l(),l(),K(0),K(1),l(),K(2),K(0),l(),l(),l(),K(1),K(3),l(),K(2),K(0),l(),l()],[l(),l(),K(2),l(),l(),l(),l(),J(0),l(),J(1),l(),l(),l(),l(),K(1),l(),l()],[l(),l(),l(),l(),C(1),C(2),l(),l(),l(),l(),l(),C(2),C(1),l(),l(),l(),l()],[l(),J(0),l(),C(1),C(2),C(3),C(1),l(),l(),l(),C(1),C(3),C(2),C(1),l(),J(1),l()],[I(),l(),l(),C(1),C(2),l(),l(),I(),A(0),I(),l(),l(),C(2),C(1),l(),l(),I()],[I(),l(),l(),l(),l(),l(),I(),A(1),A(0),A(2),I(),l(),l(),l(),l(),l(),I()],[l(),l(),J(2),l(),l(),I(),A(0),A(2),I(),A(1),A(0),I(),l(),l(),J(3),l(),l()],[l(),l(),l(),l(),I(),A(1),I(),l(),C(3),l(),I(),A(2),I(),l(),l(),l(),l()],[l(),l(),J(1),l(),l(),I(),A(2),A(0),I(),A(0),A(1),I(),l(),l(),J(0),l(),l()],[I(),l(),l(),l(),l(),l(),I(),A(0),A(1),A(2),I(),l(),l(),l(),l(),l(),I()],[I(),l(),l(),C(1),C(2),l(),l(),I(),A(2),I(),l(),l(),C(2),C(1),l(),l(),I()],[l(),J(2),l(),C(1),C(2),C(3),C(1),l(),l(),l(),C(1),C(3),C(2),C(1),l(),J(3),l()],[l(),l(),l(),l(),C(1),C(2),l(),l(),l(),l(),l(),C(2),C(1),l(),l(),l(),l()],[l(),l(),K(3),l(),l(),l(),l(),J(3),l(),J(2),l(),l(),l(),l(),K(0),l(),l()],[l(),l(),K(1),K(2),l(),K(0),K(3),l(),l(),l(),K(2),K(1),l(),K(3),K(2),l(),l()],[I(),l(),l(),l(),l(),l(),K(2),l(),l(),l(),K(0),l(),l(),l(),l(),l(),I()],[I(),I(),I(),I(),l(),l(),l(),l(),l(),l(),l(),l(),l(),I(),I(),I(),I()]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:0,col:2},{row:0,col:3},{row:1,col:0}],1:[{row:0,col:13},{row:0,col:14},{row:0,col:15},{row:0,col:16},{row:1,col:16}],2:[{row:18,col:0},{row:18,col:1},{row:18,col:2},{row:18,col:3},{row:17,col:0}],3:[{row:18,col:13},{row:18,col:14},{row:18,col:15},{row:18,col:16},{row:17,col:16}],4:[{row:6,col:0},{row:7,col:0},{row:7,col:1},{row:11,col:0},{row:12,col:0}],5:[{row:6,col:16},{row:7,col:16},{row:7,col:15},{row:11,col:16},{row:12,col:16}],6:[{row:0,col:6},{row:0,col:7},{row:0,col:8},{row:0,col:9},{row:0,col:10}],7:[{row:18,col:6},{row:18,col:7},{row:18,col:8},{row:18,col:9},{row:18,col:10}]}},dh={id:"map_8a",nameJa:"火山列島",nameCn:"火山列岛",width:15,height:19,maxPlayers:8,maxTeams:8,cells:[[I(),I(),I(),K(0),K(1),A(0),A(1),l(),A(2),A(0),K(2),K(3),I(),I(),I()],[I(),l(),l(),K(2),l(),I(),A(0),l(),A(1),I(),l(),K(0),l(),l(),I()],[K(0),l(),l(),l(),I(),A(1),A(2),l(),A(0),A(2),I(),l(),l(),l(),K(1)],[l(),l(),J(0),I(),A(0),A(1),I(),l(),I(),A(2),A(0),I(),J(1),l(),l()],[l(),l(),l(),l(),I(),I(),l(),l(),l(),I(),I(),l(),l(),l(),l()],[l(),K(0),l(),l(),l(),l(),C(1),l(),C(1),l(),l(),l(),l(),K(1),l()],[l(),K(2),l(),l(),C(1),C(2),C(2),C(1),C(2),C(2),C(1),l(),l(),K(3),l()],[A(0),I(),l(),C(1),C(2),C(3),J(0),C(2),J(1),C(3),C(2),C(1),l(),I(),A(1)],[A(1),I(),l(),C(2),C(3),J(2),C(3),C(3),C(3),J(3),C(3),C(2),l(),I(),A(0)],[A(2),l(),l(),C(1),C(2),C(3),C(3),C(3),C(3),C(3),C(2),C(1),l(),l(),A(2)],[A(0),I(),l(),C(2),C(3),J(0),C(3),C(3),C(3),J(1),C(3),C(2),l(),I(),A(1)],[A(1),I(),l(),C(1),C(2),C(3),J(2),C(2),J(3),C(3),C(2),C(1),l(),I(),A(0)],[l(),K(1),l(),l(),C(1),C(2),C(2),C(1),C(2),C(2),C(1),l(),l(),K(0),l()],[l(),K(3),l(),l(),l(),l(),C(1),l(),C(1),l(),l(),l(),l(),K(2),l()],[l(),l(),l(),l(),I(),I(),l(),l(),l(),I(),I(),l(),l(),l(),l()],[l(),l(),J(2),I(),A(2),A(0),I(),l(),I(),A(1),A(2),I(),J(3),l(),l()],[K(2),l(),l(),l(),I(),A(0),A(1),l(),A(2),A(1),I(),l(),l(),l(),K(3)],[I(),l(),l(),K(1),l(),I(),A(2),l(),A(0),I(),l(),K(3),l(),l(),I()],[I(),I(),I(),K(3),K(2),A(1),A(0),l(),A(1),A(2),K(0),K(1),I(),I(),I()]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:0,col:2},{row:1,col:0}],1:[{row:0,col:12},{row:0,col:13},{row:0,col:14},{row:1,col:14}],2:[{row:18,col:0},{row:18,col:1},{row:18,col:2},{row:17,col:0}],3:[{row:18,col:12},{row:18,col:13},{row:18,col:14},{row:17,col:14}],4:[{row:7,col:1},{row:8,col:1},{row:9,col:1},{row:10,col:1}],5:[{row:7,col:13},{row:8,col:13},{row:9,col:13},{row:10,col:13}],6:[{row:0,col:7},{row:1,col:7},{row:2,col:7},{row:3,col:7}],7:[{row:18,col:7},{row:17,col:7},{row:16,col:7},{row:15,col:7}]}},Ze=[nh,th,ah,rh,oh,ih,sh,lh,ch,dh];function uh(){try{const e="em_custom_maps_index",n="em_custom_map_",t=localStorage.getItem(e);if(!t)return Ze;const a=JSON.parse(t),r=[];for(const{id:i}of a){const s=localStorage.getItem(n+i);if(s)try{r.push(JSON.parse(s))}catch{}}return[...Ze,...r]}catch{return Ze}}function ec(e){switch(e.terrain){case"plain":return"/assets/tiles/平地0.png";case"sand":return"/assets/tiles/砂0.png";case"rubble":return`/assets/tiles/瓦礫${e.variant%4}.png`;case"forest":return`/assets/tiles/森${e.variant%4}.png`;case"water":return`/assets/tiles/水${e.variant%3}.png`;case"highland":return`/assets/tiles/高地${e.elevation}.png`;default:return"/assets/tiles/平地0.png"}}const q=[{id:"TR",deckCode:"TR",nameJa:"トルトハーン",nameCn:"托尔特哈恩",type:"M軽/単座",movement:6,evasion:8,assault:5,assaultDef:2,initiative:3,tokenId:"TR-token.jpg"},{id:"HO",deckCode:"HO",nameJa:"フォルニッセ",nameCn:"弗尼塞",type:"SS軽/単座",movement:7,evasion:10,assault:5,assaultDef:2,initiative:1,tokenId:"HO-token.jpg"},{id:"HY",deckCode:"HY",nameJa:"ヒストリクス",nameCn:"希斯特里克斯",type:"L重/単座",movement:3,evasion:3,assault:6,assaultDef:3,initiative:14,tokenId:"HY-token.jpg"},{id:"ZB",deckCode:"ZB",nameJa:"ズィマー・ブーリア",nameCn:"季马尔·布里亚",type:"S重/単座",movement:5,evasion:5,assault:6,assaultDef:3,initiative:9,tokenId:"ZB-token.jpg"},{id:"AR",deckCode:"AR",nameJa:"アラクネ",nameCn:"阿拉克涅",type:"S中/単座",movement:6,evasion:7,assault:5,assaultDef:2,initiative:5,tokenId:"AR-token.jpg"},{id:"BG",deckCode:"BG",nameJa:"ヴィスナー・グローム",nameCn:"维斯纳·格罗姆",type:"LL中/単座",movement:3,evasion:5,assault:6,assaultDef:3,initiative:13,tokenId:"BG-token.jpg"},{id:"LO",deckCode:"LO",nameJa:"リュミエール・デ・オラージュ",nameCn:"吕米耶尔",type:"L軽/単座",movement:5,evasion:7,assault:5,assaultDef:2,initiative:6,tokenId:"LO-token.jpg"},{id:"LG",deckCode:"LG",nameJa:"ルー・ガルー",nameCn:"卢·加鲁",type:"M重/単座",movement:4,evasion:4,assault:6,assaultDef:3,initiative:12,tokenId:"LG-token.jpg"},{id:"AG",deckCode:"AG",nameJa:"アルギュロス",nameCn:"阿尔古罗斯",type:"M中/単座",movement:5,evasion:6,assault:6,assaultDef:3,initiative:7,tokenId:"AG-token.jpg"}];function ph(e,n){const t=[];let a=e.col,r=e.row;const i=n.col,s=n.row,c=Math.abs(i-a),d=Math.abs(s-r),u=a<i?1:-1,p=r<s?1:-1;let f=c-d;const g=(c+d)*2+2;let h=0;for(;h++<g&&(t.push({row:r,col:a}),!(a===i&&r===s));){const m=2*f;m>-d&&(f-=d,a+=u),m<c&&(f+=c,r+=p)}return t}function mr(e,n,t){var c;if(n.row===t.row&&n.col===t.col)return!0;const a=e.cells[n.row][n.col],r=e.cells[t.row][t.col],i=Math.max(a.elevation,r.elevation),s=ph(n,t);for(const d of s){if(d.row===n.row&&d.col===n.col||d.row===t.row&&d.col===t.col)continue;const u=(c=e.cells[d.row])==null?void 0:c[d.col];if(u&&u.terrain==="highland"&&u.elevation>i)return!1}return!0}function Se(e,n){return Math.max(Math.abs(e.row-n.row),Math.abs(e.col-n.col))}const fh={plain:{type:"plain",nameJa:"平地",nameCn:"平原",moveCost:1,blocksLOS:!1,enterable:!0,providesCover:!1},sand:{type:"sand",nameJa:"砂地",nameCn:"沙地",moveCost:1,blocksLOS:!1,enterable:!0,providesCover:!1},rubble:{type:"rubble",nameJa:"瓦礫",nameCn:"瓦砾",moveCost:2,blocksLOS:!1,enterable:!0,providesCover:!1},forest:{type:"forest",nameJa:"森",nameCn:"森林",moveCost:2,blocksLOS:!0,enterable:!0,providesCover:!0},water:{type:"water",nameJa:"水辺",nameCn:"水域",moveCost:3,blocksLOS:!1,enterable:!0,providesCover:!1},highland:{type:"highland",nameJa:"高地",nameCn:"高地",moveCost:1,blocksLOS:!1,enterable:!0,providesCover:!1}};function wf(e){const n=fh[e];return n.enterable?n.moveCost:1/0}const Nt=[[-1,0],[1,0],[0,-1],[0,1]];function ma(e){return e==="N"?"S":e==="S"?"N":e==="E"?"W":"E"}function Mt(e,n){return e===-1?"N":e===1?"S":n===-1?"W":"E"}function Tt(e,n,t){return n>=0&&n<e.height&&t>=0&&t<e.width}function se(e,n){return e.row===n.row&&e.col===n.col}function Sf(e,n,t,a,r){const i=Array.from({length:e.height},()=>new Array(e.width).fill(-1)),s=[{pos:n,remaining:t}];i[n.row][n.col]=t;const c=[{pos:n,remaining:t}];for(;s.length>0;){const{pos:d,remaining:u}=s.shift();for(const[p,f]of Nt){const g=d.row+p,h=d.col+f;if(!Tt(e,g,h))continue;const m={row:g,col:h},b=e.cells[g][h];let _=wf(b.terrain);if(_===1/0)continue;r!=null&&r.vernier&&(b.terrain==="rubble"||b.terrain==="forest"||b.terrain==="water")&&(_=1);const v=e.cells[d.row][d.col];let x=Math.max(0,b.elevation-v.elevation);r!=null&&r.vernier&&(x=Math.max(0,x-1));const y=_+x;if(u<y)continue;const k=u-y;a.some(z=>se(z,m))||i[g][h]>=k||(i[g][h]=k,c.push({pos:m,remaining:k}),s.push({pos:m,remaining:k}))}}return c}function Cf(e,n,t,a,r){return Sf(e,n,t,a,r).map(i=>i.pos)}function gr(e,n,t,a,r,i){const s=e.cells[a][r];let c=wf(s.terrain);if(c===1/0)return 1/0;i!=null&&i.vernier&&(s.terrain==="rubble"||s.terrain==="forest"||s.terrain==="water")&&(c=1);const d=e.cells[n][t];let u=Math.max(0,s.elevation-d.elevation);return i!=null&&i.vernier&&(u=Math.max(0,u-1)),c+u}function mi(e,n,t,a,r,i="S"){if(t<=0)return[];const s={N:0,S:1,E:2,W:3},c=Array.from({length:e.height},()=>Array.from({length:e.width},()=>new Array(4).fill(-1))),d={pos:n,facing:i,remaining:t};c[n.row][n.col][s[i]]=t;const u=[d],p=[d];for(;u.length>0;){const{pos:h,facing:m,remaining:b}=u.shift(),_=ma(m);for(const[v,x]of Nt){const y=Mt(v,x);if(y===_)continue;const k=h.row+v,T=h.col+x;if(!Tt(e,k,T))continue;const z={row:k,col:T},j=gr(e,h.row,h.col,k,T,r);if(j===1/0||b<j||a.some($=>se($,z)))continue;const S=b-j,D=s[y];if(c[k][T][D]>=S)continue;c[k][T][D]=S;const E={pos:z,facing:y,remaining:S};p.push(E),u.push(E)}}function f(h){const{pos:m,facing:b,remaining:_}=h,v=ma(b);for(const[x,y]of Nt){if(Mt(x,y)===v)continue;const T=m.row+x,z=m.col+y;if(!Tt(e,T,z)||a.some(S=>se(S,{row:T,col:z})))continue;const j=gr(e,m.row,m.col,T,z,r);if(j!==1/0&&_>=j)return!0}return!1}const g=new Map;for(const h of p){if(se(h.pos,n)||f(h))continue;const m=`${h.pos.row},${h.pos.col}`,b=g.get(m);(!b||h.remaining>b.remaining)&&g.set(m,{pos:h.pos,remaining:h.remaining})}return Array.from(g.values())}function nc(e,n,t,a,r,i,s){if(se(n,a))return{path:[],finalFacing:t};const c={N:0,S:1,E:2,W:3},d=Array.from({length:e.height},()=>Array.from({length:e.width},()=>new Array(4).fill(-1))),u={pos:n,facing:t,remaining:r,parent:null};d[n.row][n.col][c[t]]=r;const p=[u];for(;p.length>0;){const f=p.shift();if(se(f.pos,a)){const h=[];let m=f;for(;m&&m.parent!==null;)h.push(m.pos),m=m.parent;return{path:h.reverse(),finalFacing:f.facing}}const g=ma(f.facing);for(const[h,m]of Nt){const b=Mt(h,m);if(b===g)continue;const _=f.pos.row+h,v=f.pos.col+m;if(!Tt(e,_,v))continue;const x={row:_,col:v},y=gr(e,f.pos.row,f.pos.col,_,v,s);if(y===1/0||f.remaining<y||i.some(j=>se(j,x))&&!se(x,a))continue;const T=f.remaining-y,z=c[b];d[_][v][z]>=T||(d[_][v][z]=T,p.push({pos:x,facing:b,remaining:T,parent:f}))}}return null}function Wi(e,n,t,a,r,i,s,c=8){if(se(n,a)||r<=0)return[];const d=[];function u(f,g,h){const m=ma(g);for(const[b,_]of Nt){if(Mt(b,_)===m)continue;const x=f.row+b,y=f.col+_;if(!Tt(e,x,y)||i.some(T=>se(T,{row:x,col:y})))continue;const k=gr(e,f.row,f.col,x,y,s);if(k!==1/0&&h>=k)return!1}return!0}function p(f,g,h,m){if(d.length>=c)return;if(se(f,a)){u(f,g,h)&&d.push({path:[...m],finalFacing:g});return}const b=ma(g);for(const[_,v]of Nt){const x=Mt(_,v);if(x===b)continue;const y=f.row+_,k=f.col+v;if(!Tt(e,y,k))continue;const T={row:y,col:k};if(se(T,n)||m.some(S=>se(S,T))||i.some(S=>se(S,T))&&!se(T,a))continue;const j=gr(e,f.row,f.col,y,k,s);j===1/0||h<j||(m.push(T),p(T,x,h-j,m),m.pop())}}return p(n,t,r,[]),d}function Nf(e,n,t){const a=[];for(const[r,i]of Nt){const s=n.row+r,c=n.col+i;if(!Tt(e,s,c))continue;const d={row:s,col:c};t.some(u=>se(u,d))||a.push(d)}return a}function mh(e,n,t,a){if(se(n,t))return[];const r=Array.from({length:e.height},()=>new Array(e.width).fill(!1));r[n.row][n.col]=!0;const i=[{pos:n,parent:null}];for(;i.length>0;){const s=i.shift();if(se(s.pos,t)){const p=[];let f=s;for(;f&&f.parent!==null;)p.push(f.pos),f=f.parent;return p.reverse()}const{row:c,col:d}=s.pos,u=[{row:c-1,col:d},{row:c+1,col:d},{row:c,col:d-1},{row:c,col:d+1}];for(const p of u)if(p.row>=0&&p.row<e.height&&p.col>=0&&p.col<e.width){const f=a.some(g=>se(g,p))&&!se(p,t);!r[p.row][p.col]&&!f&&(r[p.row][p.col]=!0,i.push({pos:p,parent:s}))}}return null}function Zi(e,n,t,a){const r=n===1?e.plotSeg1:e.plotSeg2;if(!r)return 0;const i=t(r.defId);return!i||i.actionType!=="movement"?0:(i.movementValue??0)+(a!=null&&a.wheel?2:0)}function gh(e,n,t,a){const r=n===1?e.plotSeg1:e.plotSeg2;if(!r)return!1;const i=t(r.defId);return!i||i.actionType!=="movement"?!1:(i.movementValue??a)>0}function Dn(e,n,t){return e==="N"?t.row<=n.row:e==="S"?t.row>=n.row:e==="E"?t.col>=n.col:e==="W"?t.col<=n.col:!0}function hr(e,n,t){if(n!==2)return 0;if(e.plotSeg1){const a=t(e.plotSeg1.defId);if(a&&a.actionType==="aim")return 1}return 0}function Ws(e,n,t){const a=n===1?e.plotSeg1:e.plotSeg2;if(!a)return 0;const r=t(a.defId);return r&&r.actionType==="armor"?1:0}function Pn(e,n,t,a){const r=n===1?e.plotSeg1:e.plotSeg2;if(!r)return null;const i=a(r.defId);return i&&(t==="ranged"&&i.actionType==="ranged"||t==="melee"&&(i.actionType==="melee"||i.actionType==="charge"))?i:null}function Ko(e,n,t,a,r){var u,p;let i=e;const s=[],c=(u=a.cells[n.row])==null?void 0:u[n.col],d=(p=a.cells[t.row])==null?void 0:p[t.col];return(c==null?void 0:c.terrain)==="water"&&r.isEnergyWeapon&&(i-=1,s.push("水域能量衰减-1")),(d==null?void 0:d.terrain)==="forest"&&(i-=1,s.push("森林掩护-1")),{dmg:Math.max(0,i),reasons:s}}function tc(e,n,t,a,r,i){const s=Pn(e,t,a,i);if(!s)return{canAttack:!1,reason:"无攻击牌",damage:0,counterDamage:0,dist:0,card:null};const c=Se(e.position,n.position);if(a==="ranged"){if(s.rangeMin===void 0||s.rangeMax===void 0)return{canAttack:!1,reason:"卡牌无射程数据",damage:0,counterDamage:0,dist:c,card:s};if(c<s.rangeMin)return{canAttack:!1,reason:`距离过近 (${c} < ${s.rangeMin})`,damage:0,counterDamage:0,dist:c,card:s};if(c>s.rangeMax)return{canAttack:!1,reason:`射程外 (${c} > ${s.rangeMax})`,damage:0,counterDamage:0,dist:c,card:s};if(!mr(r,e.position,n.position))return{canAttack:!1,reason:"视线被遮挡",damage:0,counterDamage:0,dist:c,card:s};if(!Dn(e.facing,e.position,n.position))return{canAttack:!1,reason:`目标在机体后方（机头朝${e.facing}），无法射击`,damage:0,counterDamage:0,dist:c,card:s};let d=s.damage??0;const u=[];if(s.rangeOptimal!==void 0&&s.damageAttenuation!==void 0){const b=Math.max(0,c-s.rangeOptimal);if(b>0){const _=b*s.damageAttenuation;d=Math.max(0,d-_),u.push(`超射程-${_}`)}}const p=Ko(d,e.position,n.position,r,s),f=hr(e,t,i),g=p.dmg+f,h=[...u,...p.reasons];return f>0&&h.push("瞄准+1"),{canAttack:!0,reason:`有效射击${h.length>0?`（${h.join(", ")}）`:""}`,damage:g,counterDamage:0,dist:c,card:s}}if(a==="melee"&&s.actionType==="melee"){if(c!==1)return{canAttack:!1,reason:`不相邻 (距离 ${c})`,damage:0,counterDamage:0,dist:c,card:s};const d=Ko(s.damage??0,e.position,n.position,r,s),u=hr(e,t,i),p=d.dmg+u,f=[...d.reasons];return u>0&&f.push("瞄准+1"),{canAttack:!0,reason:`有效近战${f.length>0?`（${f.join(", ")}）`:""}`,damage:p,counterDamage:0,dist:c,card:s}}return a==="melee"&&s.actionType==="charge"?{canAttack:!1,reason:"突击卡需使用evaluateCharge()",damage:0,counterDamage:0,dist:c,card:s}:{canAttack:!1,reason:"非攻击时机",damage:0,counterDamage:0,dist:c,card:null}}const hh=new Set(["パイルバンカー","スパイク"]);function xh(e){return hh.has(e.nameJa)}function vh(e,n,t,a,r,i){if(Se(n,t)===1)return Dn(i,n,t)?n:null;const c=Cf(e,n,a,r).filter(d=>Se(d,t)===1&&Dn(i,d,t));return c.length===0?null:(c.sort((d,u)=>Se(n,d)-Se(n,u)),c[0])}function Jo(e,n,t,a,r,i,s){const c=Pn(e,t,"melee",s);if(!c||c.actionType!=="charge")return{canAttack:!1,reason:"无突击牌",damage:0,counterDamage:0,dist:0,card:null};const d=Se(e.position,n.position);if(xh(c)){if(d!==1)return{canAttack:!1,reason:`不相邻 (距离 ${d})，${c.nameCn} 无法攻击`,damage:0,counterDamage:0,dist:d,card:c};if(!Dn(e.facing,e.position,n.position))return{canAttack:!1,reason:`目标不在正面弧内（机头朝${e.facing}），${c.nameCn} 无法攻击`,damage:0,counterDamage:0,dist:d,card:c};const y=r.assault+1,k=Ko(y,e.position,n.position,a,c),T=hr(e,t,s),z=k.dmg+T,j=Math.max(0,i.assaultDef-1),S=[...k.reasons];T>0&&S.push("瞄准+1");const D=S.length>0?`（${S.join(", ")}）`:"";return{canAttack:!0,reason:`有效${c.nameCn}攻击${D}`,damage:z,counterDamage:j,dist:d,card:c,chargeDestination:e.position}}const p=r.assault,f=vh(a,e.position,n.position,p,[n.position],e.facing);if(!f)return{canAttack:!1,reason:`突击距离不足或目标不在正面弧内 (距离 ${d}，突击值 ${p})`,damage:0,counterDamage:0,dist:d,card:c};const g=r.assault,h=Ko(g,f,n.position,a,c),m=hr(e,t,s),b=h.dmg+m,_=i.assaultDef,v=[...h.reasons];return m>0&&v.push("瞄准+1"),{canAttack:!0,reason:`有效突击${v.length>0?`（${v.join(", ")}）`:""}`,damage:b,counterDamage:_,dist:d,card:c,chargeDestination:f}}function Et(e){const n=[...e.deck,...e.hand,...e.auxiliary];return e.plotSeg1&&n.push(e.plotSeg1),e.plotSeg2&&n.push(e.plotSeg2),n.filter(t=>!t.destroyed)}function kd(e){return Et(e).length}function Cr(e){const n=[...e.hand,...e.auxiliary];return e.plotSeg1&&n.push(e.plotSeg1),e.plotSeg2&&n.push(e.plotSeg2),n.filter(t=>!t.destroyed)}function ac(e,n){var a,r;const t={...n,destroyed:!0};return{player:{...e,deck:e.deck.map(i=>i.instanceId===n.instanceId?t:i),hand:e.hand.map(i=>i.instanceId===n.instanceId?t:i),auxiliary:e.auxiliary.map(i=>i.instanceId===n.instanceId?t:i),plotSeg1:((a=e.plotSeg1)==null?void 0:a.instanceId)===n.instanceId?t:e.plotSeg1,plotSeg2:((r=e.plotSeg2)==null?void 0:r.instanceId)===n.instanceId?t:e.plotSeg2,destroyedCards:[...e.destroyedCards,t]},destroyed:t}}function Zs(e,n,t,a){let r=e;const i=[];let s=n;const c=a?`[${a}] `:"";let d=0;const u=30;for(;s>0&&d<u;){s--,d++;const p=r.deck.filter(m=>!m.destroyed);if(p.length===0){i.push(`    ↳ ${c}【誘爆】牌组已空，无法继续检查`);break}const f=p[0],g=t(f.defId),h=(g==null?void 0:g.nameCn)??f.defId;if(g!=null&&g.hasBombIcon){const{player:m}=ac(r,f);r=m,s++,i.push(`    ↳ ${c}【💣 誘爆】翻开 ${h}——有炸弹标记，破坏！（连锁+1）`)}else r={...r,deck:r.deck.filter(m=>m.instanceId!==f.instanceId),discard:[...r.discard,f]},i.push(`    ↳ ${c}【誘爆】翻开 ${h}——无炸弹标记，放入弃牌区`)}return{player:r,log:i}}function Qn(e,n,t,a){let r=e;const i=[];let s=n,c=0;for(;s>0;){const d=r.deck.filter(_=>!_.destroyed),u=r.hand.filter(_=>!_.destroyed),p=d[0]??u[0];if(!p)break;const f=t(p.defId),g=(f==null?void 0:f.nameCn)??p.defId,{player:h}=ac(r,p);r=h,s--;const m=f!=null&&f.hasBombIcon?"【💣】":"",b=a?`[${a}] `:"";if(i.push(`  ▶ ${b}${g} 被摧毁${m}`),f!=null&&f.hasBombIcon&&c++,r.destroyedCards.length>30)break}if(c>0){i.push(`  ─── 誘爆检查（${c}张炸弹卡被破坏）───`);const{player:d,log:u}=Zs(r,c,t,a);r=d,i.push(...u)}return{player:r,log:i}}const bh="バーニア",yh="ムーブセンサー",_h="ホイール";function jn(e,n,t){const a=new Map;for(const f of e.auxiliary){if(f.destroyed)continue;const g=n(f.defId);g&&a.set(g.nameJa,(a.get(g.nameJa)??0)+1)}const r=a.get(bh)??0,i=a.get(yh)??0,s=a.get(_h)??0,c=r>=2&&s>=2,d=!c&&r>=2,u=i>=2,p=!c&&s>=2;return{vernier:d&&(t==="movement"||t==="melee"),moveSensor:u&&t==="melee",wheel:p&&(t==="movement"||t==="charge")}}function ue(e){return`P${e.replace("player","")}`}function Bo(e){switch(e){case"movement":return"移动时机";case"ranged":return"射击时机";case"melee":return"近战时机";case"special":return"特殊时机";default:return e}}function Ih(e){switch(e){case"movement":return"移动";case"ranged":return"射击";case"melee":return"近战";case"charge":return"突击";case"aim":return"瞄准";case"armor":return"装甲";case"mine":return"机雷";case"special":return"特殊";default:return e}}function Ys(e,n){let t=X(e,`══════ 主要阶段${n}开始 ══════`);t=X(t,`全员翻开阶段${n}盖卡：`);for(const a of e.playerIds){if(t.players[a].isDefeated)continue;const r=t.players[a],i=q.find(u=>u.id===r.unitId),s=ue(a),c=(i==null?void 0:i.nameCn)??a,d=n===1?r.plotSeg1:r.plotSeg2;if(d){const u=ee(d.defId);u?t=X(t,`  ${s}[${c}] →【${u.nameCn}】(${Ih(u.actionType)})`):t=X(t,`  ${s}[${c}] → (未知卡牌)`)}else t=X(t,`  ${s}[${c}] → 未配置行动卡`)}return t}function rc(e,n,t,a="S"){const r=Q0(n,e);return{id:e,unitId:n,position:t,facing:a,deck:r,hand:[],auxiliary:[],plotSeg1:null,plotSeg2:null,discard:[],destroyedCards:[],isDefeated:!1}}function Mf(e=2,n=2){const t=Ze[0],a=ra.slice(0,e),r={};for(let s=0;s<a.length;s++)r[a[s]]=s%n;const i={};for(const s of a){const c=r[s],d=t.startZones[c]??t.startZones[0]??[],u=d[Math.min(1,d.length-1)]??{row:0,col:0},p=c===0?"S":"N";i[s]=rc(s,"AG",u,p)}return{phase:"setup",roundNumber:0,activePlayer:a[0],players:i,playerIds:a,teams:r,teamCount:n,map:t,mines:[],log:[],turnOrder:[...a],currentTiming:null,plottingStep:null,pendingDamage:null,shuffleSeed:Date.now()}}function de(e,n){return S0(e,n)}function xe(e,n,t){return C0(e,n,t)}function X(e,n){return{...e,log:[...e.log,n]}}function $n(e,n){return{...e,log:[...e.log,`[DBG] ${n}`]}}function kh(e,n){return e.filter(t=>t.instanceId!==n)}function jh(e){const n=[],t=[];for(const a of e.deck){const r=ee(a.defId);r&&r.actionType==="auxiliary"?t.push(a):n.push(a)}return{...e,deck:n,auxiliary:[...e.auxiliary,...t]}}function Fo(e){const n=e.playerIds.filter(r=>!e.players[r].isDefeated),t=e.phase==="action_seg2"?2:1,a=n.map(r=>{const i=e.players[r],s=q.find(u=>u.id===i.unitId),c=(s==null?void 0:s.initiative)??0;let d=(s==null?void 0:s.movement)??0;if(e.currentTiming==="movement"){const u=t===1?i.plotSeg1:i.plotSeg2;if(u){const p=ee(u.defId);p&&p.movementValue!==void 0&&(d=p.movementValue)}}return{id:r,initiative:c,movementValue:d}});return e.currentTiming==="movement"?a.sort((r,i)=>r.movementValue!==i.movementValue?i.movementValue-r.movementValue:i.initiative-r.initiative):a.sort((r,i)=>i.initiative-r.initiative),a.map(r=>r.id)}function wh(e,n){const{playerId:t,unitId:a}=n,r=e.teams[t]??0,i=e.map.startZones[r]??[],s=de(e,t).position,c=i.some(p=>p.row===s.row&&p.col===s.col)?s:i[Math.min(1,i.length-1)]??{row:0,col:0},d=de(e,t).facing,u=rc(t,a,c,d);return X(xe(e,t,u),`${t} 选择了机体 ${a}`)}function Sh(e,n){const t=Ze.find(i=>i.id===n.mapId);if(!t)return e;const a={},r={};for(const i of e.playerIds){const s=e.teams[i]??0,c=t.startZones[s]??t.startZones[0]??[],d=r[s]??0;r[s]=d+1;const u=c[Math.min(d,c.length-1)]??{row:0,col:0},p=s===0?"S":"N";a[i]=rc(i,e.players[i].unitId,u,p)}return X({...e,map:t,players:a},`选择了地图 ${t.nameCn}`)}function Ch(e,n){if(e.phase!=="setup")return e;const{playerId:t,position:a}=n,r=de(e,t);return xe(e,t,{...r,position:a})}function Nh(e,n){if(e.phase!=="setup")return e;const{playerId:t,facing:a}=n,r=de(e,t);return xe(e,t,{...r,facing:a})}function Mh(e){var a;const n={...e.players};let t={...e,phase:"draw",roundNumber:1};for(const r of e.playerIds){const i=jh(e.players[r]);n[r]=i;for(const s of i.auxiliary){const c=ee(s.defId);t=X(t,`${r} 补助卡【${(c==null?void 0:c.nameCn)??s.defId}】从卡组移至辅助区`)}}t={...t,players:n};for(const r of e.playerIds){const i=((a=q.find(s=>s.id===t.players[r].unitId))==null?void 0:a.evasion)??5;t=oc(t,{playerId:r,count:i})}return X({...t,phase:"pregame",plottingStep:null,activePlayer:e.playerIds[0],currentTiming:null},"=== 第 1 回合开始 ===")}function Th(e){if(e.phase!=="pregame")return e;const n=e.playerIds[0];return{...e,phase:"plotting",plottingStep:`transition_to_${n}`,activePlayer:n}}function oc(e,n){const t=de(e,n.playerId),a=[],r=[];let i=t.deck.filter(g=>!g.destroyed),s=t.discard.filter(g=>!g.destroyed);const c=s.length;let d=!1,u=e.shuffleSeed;for(;r.length<n.count;){if(i.length===0){if(s.length===0)break;const b=jf([...s],u);i=b.shuffled,u=b.nextSeed,s=[],d=!0}const g=n.count-r.length,{drawn:h,remaining:m}=eh(i,g);i=m;for(const b of h){const _=ee(b.defId);_&&_.actionType==="auxiliary"?a.push(b):r.push(b)}}const p={...t,deck:i,discard:s,hand:[...t.hand,...r],auxiliary:[...t.auxiliary,...a]};let f=xe({...e,shuffleSeed:u},n.playerId,p);d&&(f=X(f,`${n.playerId} 的卡组耗尽，弃牌区（${c} 张）洗入卡组`)),f=X(f,`${n.playerId} 抽了 ${r.length} 张牌`);for(const g of a){const h=ee(g.defId),m=(h==null?void 0:h.nameCn)??g.defId;f=X(f,`  ↳ 辅助卡【${m}】自动放置到辅助区`)}return f}function Eh(e,n){var p;const{playerId:t,seg:a,instanceId:r}=n,i=de(e,t),s=i.hand.find(f=>f.instanceId===r);if(!s)return e;const c=((p=ee(s.defId))==null?void 0:p.nameCn)??s.defId;e=$n(e,`PLOT_CARD: ${ue(t)} 配置【${c}】到阶段${a}`);const d=kh(i.hand,r),u={...i,hand:d,plotSeg1:a===1?s:i.plotSeg1,plotSeg2:a===2?s:i.plotSeg2};return xe(e,t,u)}function Dh(e,n){const{playerId:t}=n,a=X(e,`${t} 完成了布局`),r=e.playerIds.indexOf(t);if(!(r===e.playerIds.length-1)){const u=e.playerIds[r+1];return{...a,activePlayer:u,plottingStep:`transition_to_${u}`}}const c={...Ys(a,1),activePlayer:e.playerIds[0],phase:"action_seg1",plottingStep:"complete",currentTiming:"movement",turnOrder:[]},d={...c,turnOrder:Fo(c)};return X(d,`▸ ${Bo("movement")} — 行动顺序：${d.turnOrder.map(ue).join(" → ")}`)}function $h(e){const n=e.plottingStep;if(!n)return e;for(const t of e.playerIds)if(n===`transition_to_${t}`)return{...e,plottingStep:t,activePlayer:t};if(n==="transition"){const t=e.playerIds.indexOf(e.activePlayer);if(t>=0&&t<e.playerIds.length-1){const a=e.playerIds[t+1];return{...e,plottingStep:a,activePlayer:a}}}return e}function zh(e,n){const{playerId:t,to:a}=n;let r=de(e,t);const i=r.position;e=$n(e,`MOVE_UNIT: ${ue(t)} (${i.row},${i.col})→(${a.row},${a.col}) 阶段=${e.phase} 时机=${e.currentTiming}`);const s=e.map,c=e.playerIds.filter(h=>h!==t&&!e.players[h].isDefeated).map(h=>de(e,h).position);if(c.some(h=>se(h,a)))return X(e,`${ue(t)} 移动无效：目标位置 (${a.row}, ${a.col}) 已被其他机体占据`);const d=n.path??mh(s,i,a,c);function u(h,m){const b=m.row-h.row,_=m.col-h.col;return Math.abs(b)>=Math.abs(_)?b<0?"N":"S":_>0?"E":"W"}let p=e;if(d&&d.length>0){let h=a,m=!1;for(const b of d){const _=p.mines.filter(v=>v.ownerId!==t&&se(v.position,b));if(_.length>0){h=b,m=!0,r={...r,position:h},p=xe(p,t,r),p=X(p,`${t} 移动途经 (${b.row}, ${b.col})，触发了机雷！`);for(const v of _){p=X(p,`机雷爆炸，对 ${ue(t)} 造成 ${v.damage} 点伤害！`);const x=Qn(r,v.damage,ee,ue(t));for(const y of x.log)p=X(p,y);r=x.player,p=xe(p,t,r),p={...p,mines:p.mines.filter(y=>y.id!==v.id)},p={...p,lastDamageContext:{attackerId:v.ownerId,targetId:t,weaponName:"机雷"}}}break}}if(!m){const b=n.finalFacing??u(i,a);r={...r,position:a,facing:b},p=xe(p,t,r),p=X(p,`${t} 移动到 (${a.row}, ${a.col})，机头朝${b}`)}return cn(p)}const f=n.finalFacing??u(i,a),g={...r,position:a,facing:f};return X(xe(e,t,g),`${t} 移动到 (${a.row}, ${a.col})，机头朝${f}`)}function Ah(e,n){const{playerId:t,to:a,damage:r}=n,i={id:`mine-${Date.now()}-${Math.random().toString(36).substring(2,9)}`,ownerId:t,position:a,damage:r};let s={...e,mines:[...e.mines,i]};return s=X(s,`${t} 在 (${a.row}, ${a.col}) 部署了机雷`),s}function jd(e,n,t){var y,k,T;const{attackerId:a,targetId:r}=n,i=e.phase==="action_seg1"?1:2,s=de(e,a),c=de(e,r);e=$n(e,`RESOLVE_${t.toUpperCase()}: ${ue(a)}(${s.position.row},${s.position.col},${s.facing})→${ue(r)}(${c.position.row},${c.position.col},${c.facing}) seg=${i}`);const d=tc(s,c,i,t,e.map,ee),p=hr(s,i,ee)>0?a:void 0;if(!d.canAttack)return X(e,`${a} 攻击无效：${d.reason}`);const f=((y=q.find(z=>z.id===s.unitId))==null?void 0:y.nameCn)??a,g=((k=q.find(z=>z.id===c.unitId))==null?void 0:k.nameCn)??r,h=((T=d.card)==null?void 0:T.nameCn)??"???",m=t==="ranged"?"射击":"近战",b=Ws(c,i,ee),_=Math.max(0,d.damage-b),v=b>0?` (装甲减伤 -${b}，实际 ${_})`:"";let x=X(e,`${f} 对 ${g} 发动${m}【${h}】→ 造成 ${d.damage} 点伤害${v}`);return x={...x,lastDamageContext:{attackerId:a,targetId:r,weaponName:h}},Za(x,r,_,t,p)}function Za(e,n,t,a,r){if(t<=0)return cn(e);const i=de(e,n),s=Et(i);if(s.length===0)return cn(e);if(a!=="ranged"){const c=i.deck.filter(p=>!p.destroyed).length,d=i.discard.filter(p=>!p.destroyed).length;if(!(c===0&&d===0)){let p=e,f=t;const g=Math.min(f,c);if(g>0){const{player:h,log:m}=Qn(de(p,n),g,ee,ue(n));for(const b of m)p=X(p,b);p=xe(p,n,h),f-=g}if(f>0&&d>0){const h=de(p,n),m=h.discard.filter(k=>!k.destroyed),b=h.discard.filter(k=>k.destroyed),{shuffled:_,nextSeed:v}=jf(m,p.shuffleSeed);p={...p,shuffleSeed:v};const x={...h,deck:[...h.deck,..._],discard:b};p=xe(p,n,x),p=X(p,`${ue(n)} 的卡组耗尽，弃牌区（${m.length} 张）洗入卡组`);const y=Math.min(f,m.length);if(y>0){const{player:k,log:T}=Qn(de(p,n),y,ee,ue(n));for(const z of T)p=X(p,z);p=xe(p,n,k),f-=y}}if(f>0){const h=de(p,n),m=Et(h);if(m.length===0)return cn(p);if(m.length<=f){const{player:b,log:_}=Qn(h,f,ee,ue(n));for(const v of _)p=X(p,v);return p=xe(p,n,b),cn(p)}return p=X(p,"牌组与弃牌区已耗尽，切换为防方自选伤害模式"),{...p,pendingDamage:{targetId:n,remaining:f,selectedInstanceIds:[],destroyedBombCount:0,source:a,attackerId:r}}}return cn(p)}e=X(e,`牌组与弃牌区已耗尽，本次${a==="charge"?"突击":"近战"}伤害切换为防方自选模式`)}if(s.length<=t){const{player:c,log:d}=Qn(i,t,ee,ue(n));let u=e;for(const p of d)u=X(u,p);return u=xe(u,n,c),cn(u)}if(a==="ranged"){const c=Cr(i).length,d=Math.min(t,c),u=t-d;if(d<=0){const{player:p,log:f}=Qn(i,t,ee,ue(n));let g=e;for(const h of f)g=X(g,h);return g=xe(g,n,p),cn(g)}return{...e,pendingDamage:{targetId:n,remaining:d,selectedInstanceIds:[],destroyedBombCount:0,source:a,attackerId:r,deckAutoCount:u}}}return{...e,pendingDamage:{targetId:n,remaining:t,selectedInstanceIds:[],destroyedBombCount:0,source:a,attackerId:r}}}function Vh(e,n){var v;const{attackerId:t,targetId:a}=n,r=e.phase==="action_seg1"?1:2,i=de(e,t),s=de(e,a);e=$n(e,`RESOLVE_CHARGE: ${ue(t)}(${i.position.row},${i.position.col},${i.facing})→${ue(a)}(${s.position.row},${s.position.col},${s.facing}) seg=${r}`);const c=q.find(x=>x.id===i.unitId),d=q.find(x=>x.id===s.unitId),u=Jo(i,s,r,e.map,c,d,ee);if(!u.canAttack)return X(e,`${t} 突击无效：${u.reason}`);const p=c.nameCn,f=d.nameCn,g=((v=u.card)==null?void 0:v.nameCn)??"突击";let h=e;if(u.chargeDestination&&(u.chargeDestination.row!==i.position.row||u.chargeDestination.col!==i.position.col)){const x=u.chargeDestination,y={...i,position:x};h=xe(h,t,y),h=X(h,`${p} 发动突击冲锋，移动至 (${x.row}, ${x.col})`)}const m=Ws(s,r,ee),b=Math.max(0,u.damage-m),_=m>0?` (装甲减伤 -${m}，实际 ${b})`:"";if(h=X(h,`${p} 对 ${f} 发动${g}【突击值 ${c.assault}】→ 对目标造成 ${u.damage} 点近战伤害${_}；自机承受反伤 ${u.counterDamage} 点`),u.counterDamage>0){const x=Ws(de(h,t),r,ee),y=Math.max(0,u.counterDamage-x);if(y>0){h={...h,pendingFollowUpDamage:{targetId:t,amount:y,source:"charge",attackerId:a,weaponName:"突击反伤"}},h={...h,lastDamageContext:{attackerId:t,targetId:a,weaponName:g}};const k=Za(h,a,b,"charge");if(!k.pendingDamage){if(k.phase==="game_over")return k;const z={...{...k,pendingFollowUpDamage:void 0},lastDamageContext:{attackerId:a,targetId:t,weaponName:"突击反伤"}};return Za(z,t,y,"charge")}return k}else x>0&&(h=X(h,`  [反伤] ${p} 装甲完全吸收了反伤`))}return h={...h,lastDamageContext:{attackerId:t,targetId:a,weaponName:g}},Za(h,a,b,"charge")}function Go(e){if(!e.pendingFollowUpDamage||e.phase==="game_over")return e;const{targetId:n,amount:t,source:a,attackerId:r,weaponName:i}=e.pendingFollowUpDamage;let s={...e,pendingFollowUpDamage:void 0};return r&&i&&(s={...s,lastDamageContext:{attackerId:r,targetId:n,weaponName:i}}),Za(s,n,t,a,r)}function Ph(e,n){const t=e.pendingDamage;if(!t)return e;const{playerId:a,instanceId:r}=n,i=t.selectedInstanceIds.length===0,s=!!t.attackerId&&i&&!t.attackerDesignatedCardId,c=s?t.attackerId:t.targetId;if(a!==c)return e;const d=de(e,t.targetId),u=Et(d).find(x=>x.instanceId===r&&!x.destroyed);if(!u||t.selectedInstanceIds.includes(r))return e;if(t.source==="ranged"&&!s){const x=Cr(d);if(d.deck.some(k=>k.instanceId===r&&!k.destroyed)&&x.length>0)return e}const{player:p}=ac(d,u);let f=xe(e,t.targetId,p);const g=ee(u.defId),h=(g==null?void 0:g.nameCn)??u.defId,m=g!=null&&g.hasBombIcon?"【💣】":"";f=X(f,`  ▶ ${h} 被摧毁${m}`);let b=t.remaining-1;const _=(t.destroyedBombCount??0)+(g!=null&&g.hasBombIcon?1:0);if(b<=0){if(f={...f,pendingDamage:null},t.deckAutoCount&&t.deckAutoCount>0){const x=de(f,t.targetId),{player:y,log:k}=Qn(x,t.deckAutoCount,ee,ue(t.targetId));for(const T of k)f=X(f,T);f=xe(f,t.targetId,y)}if(_>0){const x=de(f,t.targetId);f=X(f,`  ─── 誘爆检查（${_}张炸弹卡被破坏）───`);const{player:y,log:k}=Zs(x,_,ee,ue(t.targetId));for(const T of k)f=X(f,T);f=xe(f,t.targetId,y)}return f=cn(f),Go(f)}if(Et(de(f,t.targetId)).length===0){if(f={...f,pendingDamage:null},_>0){const x=de(f,t.targetId);f=X(f,`  ─── 誘爆检查（${_}张炸弹卡被破坏）───`);const{player:y,log:k}=Zs(x,_,ee,ue(t.targetId));for(const T of k)f=X(f,T);f=xe(f,t.targetId,y)}return f=cn(f),Go(f)}return f={...f,pendingDamage:{...t,remaining:b,selectedInstanceIds:[...t.selectedInstanceIds,r],destroyedBombCount:_,attackerDesignatedCardId:s?r:t.attackerDesignatedCardId}},f}function Lh(e,n){const t=e.pendingDamage;if(!t)return e;const a=t.selectedInstanceIds.length===0,i=!!t.attackerId&&a&&!t.attackerDesignatedCardId?t.attackerId:t.targetId;if(n.playerId!==i)return e;const s=t.remaining+(t.deckAutoCount??0);if(s>0){const d=de(e,t.targetId),{player:u,log:p}=Qn(d,s,ee,ue(t.targetId));let f=e;for(const g of p)f=X(f,g);return f=xe(f,t.targetId,u),f={...f,pendingDamage:null},f=cn(f),Go(f)}let c={...e,pendingDamage:null};return Go(c)}function wd(e){const n=["movement","ranged","melee","special"],t=n.indexOf(e.currentTiming);if(t===-1){console.warn("[GameReducer] Invalid currentTiming:",e.currentTiming);const r=$n(e,`ADVANCE_TIMING: currentTiming 无效(${e.currentTiming})，强制推进阶段`);return mn(r,{type:"ADVANCE_PHASE"})}if(t<n.length-1){const r=n[t+1],i={...e,currentTiming:r},s={...i,turnOrder:Fo(i)};return X(s,`▸ ${Bo(r)} — 行动顺序：${s.turnOrder.map(ue).join(" → ")}`)}const a=$n(e,`ADVANCE_TIMING: ${e.phase}/${e.currentTiming} 时机全部完成，推进到下一阶段`);return mn(a,{type:"ADVANCE_PHASE"})}function Rh(e){var t,a;const n=$n(e,`ADVANCE_PHASE: ${e.phase} → 推进`);switch(e.phase){case"draw":{const r=n.playerIds.find(i=>!n.players[i].isDefeated)??n.playerIds[0];return{...n,phase:"plotting",plottingStep:`transition_to_${r}`,activePlayer:r,currentTiming:null}}case"plotting":{const i={...Ys(n,1),phase:"action_seg1",plottingStep:"complete",currentTiming:"movement"};let c={...i,turnOrder:Fo(i)};for(const d of c.playerIds){const u=c.players[d];if(u.isDefeated)continue;const p=u.plotSeg1?((t=ee(u.plotSeg1.defId))==null?void 0:t.nameCn)??u.plotSeg1.defId:"(空)",f=u.plotSeg2?((a=ee(u.plotSeg2.defId))==null?void 0:a.nameCn)??u.plotSeg2.defId:"(空)";c=$n(c,`${ue(d)} 配置: 阶段1=[${p}] 阶段2=[${f}] 位置=${u.position.row},${u.position.col} 朝向=${u.facing}`)}return X(c,`▸ ${Bo("movement")} — 行动顺序：${c.turnOrder.map(ue).join(" → ")}`)}case"action_seg1":{const i={...Ys(n,2),phase:"action_seg2",currentTiming:"movement"},s={...i,turnOrder:Fo(i)};return X(s,`▸ ${Bo("movement")} — 行动顺序：${s.turnOrder.map(ue).join(" → ")}`)}case"action_seg2":return Oh(n);default:return n}}function Oh(e){let n=$n(e,`CLEANUP: 第${e.roundNumber}回合结束`);for(const c of e.playerIds){const d=e.players[c];n=$n(n,`  ${ue(c)}: 位置=(${d.position.row},${d.position.col}) 朝向=${d.facing} 手牌=${d.hand.length} 牌组=${d.deck.filter(u=>!u.destroyed).length} 弃牌=${d.discard.length} ${d.isDefeated?"已击破":"存活"}`)}e=n;const t=(c,d)=>!d||d.destroyed?c:{...c,discard:[...c.discard,d]},a={...e.players};for(const c of e.playerIds){let d=t(e.players[c],e.players[c].plotSeg1);d=t(d,d.plotSeg2),d={...d,plotSeg1:null,plotSeg2:null},d={...d,discard:[...d.discard,...d.hand.filter(u=>!u.destroyed)],hand:[]},a[c]=d}const r={...e,players:a,phase:"cleanup",currentTiming:null},i=X(r,`--- 第 ${e.roundNumber} 回合结束 ---`),s=cn(i);return s.phase==="game_over"?s:Kh(s)}function Kh(e){var r;const n=e.roundNumber+1;let t=X({...e,phase:"draw",roundNumber:n},`=== 第 ${n} 回合开始 ===`);for(const i of e.playerIds){if(t.players[i].isDefeated)continue;const s=((r=q.find(c=>c.id===t.players[i].unitId))==null?void 0:r.evasion)??5;t=oc(t,{playerId:i,count:s})}const a=e.playerIds.find(i=>!t.players[i].isDefeated)??e.playerIds[0];return{...t,phase:"plotting",plottingStep:`transition_to_${a}`,activePlayer:a,currentTiming:null}}function cn(e){const n=s=>{const c=[...s.deck,...s.hand,...s.auxiliary,...s.discard,...s.plotSeg1?[s.plotSeg1]:[],...s.plotSeg2?[s.plotSeg2]:[]].filter(u=>!u.destroyed);return c.length<=3?!0:!c.some(u=>{const p=ee(u.defId);return p&&(p.actionType==="ranged"||p.actionType==="melee"||p.actionType==="charge")})},t={...e.players};let a=!1;for(const s of e.playerIds){if(t[s].isDefeated)continue;n(t[s])&&(t[s]={...t[s],isDefeated:!0},a=!0)}if(!a)return e;let r={...e,players:t};for(const s of e.playerIds)if(!e.players[s].isDefeated&&r.players[s].isDefeated){const c=q.find(f=>f.id===r.players[s].unitId),d=e.playerIds.indexOf(s),u=d>=0?`P${d+1}`:s,p=r.lastDamageContext;if(p&&p.targetId===s&&p.attackerId){const f=q.find(m=>{var b;return m.id===((b=r.players[p.attackerId])==null?void 0:b.unitId)}),g=e.playerIds.indexOf(p.attackerId),h=g>=0?`P${g+1}`:p.attackerId;r=X(r,`💀 ${u}[${(c==null?void 0:c.nameCn)??s}] 被 ${h}[${(f==null?void 0:f.nameCn)??p.attackerId}] 以【${p.weaponName}】击毁！`)}else r=X(r,`💀 ${u}[${(c==null?void 0:c.nameCn)??s}] 机体严重受损，宣告报废！`)}const i=new Set;for(const s of e.playerIds)r.players[s].isDefeated||i.add(r.teams[s]);if(i.size<=1){if(i.size===0)return X({...r,phase:"game_over"},"所有队伍同时全灭！平局！");const s=[...i][0],c=e.playerIds.filter(d=>r.teams[d]===s).map(d=>{const u=q.find(p=>p.id===r.players[d].unitId);return(u==null?void 0:u.nameCn)??d}).join("、");return X({...r,phase:"game_over"},`队伍${s+1}（${c}）获胜！`)}return r}function Jh(e,n){if(e.currentTiming!=="melee")return e;const{playerId:t,to:a}=n,r=de(e,t),i=e.playerIds.filter(p=>p!==t).map(p=>de(e,p).position);if(!jn(r,ee,"melee").moveSensor)return X(e,`${t} 移动传感器未激活（需要辅助区中有≥2张）`);if(!Nf(e.map,r.position,i).some(p=>se(p,a)))return X(e,`${t} 移动传感器目标格不在有效范围内`);const d={...r,position:a};let u=xe(e,t,d);return u=X(u,`【辅助】${t} 移动传感器：向 (${a.row}, ${a.col}) 移动1格`),u}function Bh(e,n){const{playerId:t,facing:a}=n,r=de(e,t),i=q.find(d=>d.id===r.unitId),s=(i==null?void 0:i.nameCn)??t;let c=xe(e,t,{...r,facing:a});return c=X(c,`${s} 调整机头朝向至【${a}】`),c}function mn(e,n){switch(n.type){case"SELECT_UNIT":return wh(e,n);case"SELECT_MAP":return Sh(e,n);case"CONFIRM_SETUP":return Mh(e);case"START_PLOTTING":return Th(e);case"SET_SPAWN_POSITION":return Ch(e,n);case"SET_SPAWN_FACING":return Nh(e,n);case"DRAW_CARDS":return oc(e,n);case"PLOT_CARD":return Eh(e,n);case"CONFIRM_PLOT":return Dh(e,n);case"ADVANCE_PLOT_STEP":return $h(e);case"MOVE_UNIT":return zh(e,n);case"ADJUST_FACING":return Bh(e,n);case"ADVANCE_TIMING":return wd(e);case"ADVANCE_PHASE":return Rh(e);case"SKIP_ACTION":return wd(e);case"RESET_GAME":return Mf(n.playerCount??2,n.teamCount??2);case"LOAD_GAME":return n.state;case"ADD_LOG":return X(e,n.message);case"RESOLVE_RANGED":return jd(e,n,"ranged");case"RESOLVE_MELEE":return jd(e,n,"melee");case"RESOLVE_CHARGE":return Vh(e,n);case"PLACE_MINE":return Ah(e,n);case"SELECT_DAMAGE_CARD":return Ph(e,n);case"CONFIRM_DAMAGE_SELECTION":return Lh(e,n);case"MELEE_SENSOR_MOVE":return Jh(e,n);default:return e}}class Fh{constructor(){en(this,"ctx",null);en(this,"_enabled",!0);en(this,"_volume",.5)}init(){this.ctx||(this.ctx=new AudioContext),this.ctx.state==="suspended"&&this.ctx.resume()}get enabled(){return this._enabled}set enabled(n){this._enabled=n}get volume(){return this._volume}set volume(n){this._volume=Math.max(0,Math.min(1,n))}ensure(){return!this._enabled||!this.ctx?null:(this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx)}makeGain(n,t){const a=n.createGain();return a.gain.value=t*this._volume,a.connect(n.destination),a}noiseBuffer(n,t){const a=Math.floor(n.sampleRate*t),r=n.createBuffer(1,a,n.sampleRate),i=r.getChannelData(0);for(let s=0;s<a;s++)i[s]=Math.random()*2-1;return r}cardFlip(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createBufferSource();a.buffer=this.noiseBuffer(n,.06);const r=n.createBiquadFilter();r.type="highpass",r.frequency.value=3e3;const i=this.makeGain(n,.25);i.gain.setValueAtTime(.25*this._volume,t),i.gain.exponentialRampToValueAtTime(.001,t+.05),a.connect(r),r.connect(i),a.start(t),a.stop(t+.06)}footstep(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createOscillator();a.type="sine",a.frequency.setValueAtTime(150,t),a.frequency.exponentialRampToValueAtTime(60,t+.05);const r=this.makeGain(n,.2);r.gain.setValueAtTime(.2*this._volume,t),r.gain.exponentialRampToValueAtTime(.001,t+.08),a.connect(r),a.start(t),a.stop(t+.08);const i=n.createBufferSource();i.buffer=this.noiseBuffer(n,.03);const s=n.createBiquadFilter();s.type="bandpass",s.frequency.value=800,s.Q.value=2;const c=this.makeGain(n,.1);c.gain.setValueAtTime(.1*this._volume,t),c.gain.exponentialRampToValueAtTime(.001,t+.03),i.connect(s),s.connect(c),i.start(t),i.stop(t+.03)}weaponFire(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createBufferSource();a.buffer=this.noiseBuffer(n,.15);const r=n.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(1200,t),r.frequency.exponentialRampToValueAtTime(400,t+.12),r.Q.value=3;const i=this.makeGain(n,.3);i.gain.setValueAtTime(.3*this._volume,t),i.gain.exponentialRampToValueAtTime(.001,t+.15),a.connect(r),r.connect(i),a.start(t),a.stop(t+.15);const s=n.createOscillator();s.type="sawtooth",s.frequency.setValueAtTime(800,t),s.frequency.exponentialRampToValueAtTime(200,t+.12);const c=this.makeGain(n,.15);c.gain.setValueAtTime(.15*this._volume,t),c.gain.exponentialRampToValueAtTime(.001,t+.12),s.connect(c),s.start(t),s.stop(t+.12)}metalImpact(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=[200,340];for(const s of a){const c=n.createOscillator();c.type="sine",c.frequency.value=s;const d=this.makeGain(n,.2);d.gain.setValueAtTime(.2*this._volume,t),d.gain.exponentialRampToValueAtTime(.001,t+.25),c.connect(d),c.start(t),c.stop(t+.25)}const r=n.createBufferSource();r.buffer=this.noiseBuffer(n,.02);const i=this.makeGain(n,.25);i.gain.setValueAtTime(.25*this._volume,t),i.gain.exponentialRampToValueAtTime(.001,t+.02),r.connect(i),r.start(t),r.stop(t+.02)}explosion(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createOscillator();a.type="sine",a.frequency.setValueAtTime(60,t),a.frequency.exponentialRampToValueAtTime(30,t+.5);const r=this.makeGain(n,.35);r.gain.setValueAtTime(.35*this._volume,t),r.gain.setValueAtTime(.35*this._volume,t+.1),r.gain.exponentialRampToValueAtTime(.001,t+.5),a.connect(r),a.start(t),a.stop(t+.5);const i=n.createBufferSource();i.buffer=this.noiseBuffer(n,.4);const s=n.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(3e3,t),s.frequency.exponentialRampToValueAtTime(200,t+.35);const c=this.makeGain(n,.3);c.gain.setValueAtTime(.3*this._volume,t),c.gain.exponentialRampToValueAtTime(.001,t+.35),i.connect(s),s.connect(c),i.start(t),i.stop(t+.4)}cardShatter(){const n=this.ensure();if(!n)return;const t=n.currentTime;for(let a=0;a<5;a++){const r=t+a*.03,i=n.createBufferSource();i.buffer=this.noiseBuffer(n,.02);const s=n.createBiquadFilter();s.type="highpass",s.frequency.value=1e3+a*300;const c=this.makeGain(n,.2);c.gain.setValueAtTime(.2*this._volume,r),c.gain.exponentialRampToValueAtTime(.001,r+.02),i.connect(s),s.connect(c),i.start(r),i.stop(r+.02)}}mineBeep(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=[600,800,1e3];for(let r=0;r<a.length;r++){const i=t+r*.1,s=n.createOscillator();s.type="sine",s.frequency.value=a[r];const c=this.makeGain(n,.15);c.gain.setValueAtTime(.15*this._volume,i),c.gain.setValueAtTime(.15*this._volume,i+.05),c.gain.exponentialRampToValueAtTime(.001,i+.08),s.connect(c),s.start(i),s.stop(i+.08)}}chargeRumble(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(80,t),a.frequency.linearRampToValueAtTime(120,t+.3);const r=n.createOscillator();r.type="sine",r.frequency.value=15;const i=n.createGain();i.gain.value=.15*this._volume;const s=this.makeGain(n,.25);s.gain.setValueAtTime(.25*this._volume,t),s.gain.exponentialRampToValueAtTime(.001,t+.4),r.connect(i),i.connect(s.gain),a.connect(s),r.start(t),a.start(t),r.stop(t+.4),a.stop(t+.4)}uiBlip(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createOscillator();a.type="sine",a.frequency.value=880;const r=this.makeGain(n,.1);r.gain.setValueAtTime(.1*this._volume,t),r.gain.exponentialRampToValueAtTime(.001,t+.06),a.connect(r),a.start(t),a.stop(t+.06)}}const Ee=new Fh,Gh={move_step:200,card_draw:350,ranged_hit:400,melee_hit:350,charge_move:300,charge_hit:450,card_destroy:400,mine_explode:500,mine_place:300,screen_shake:300,damage_number:600,cleanup_discard:2500,batch_card_draw:1600,deck_reshuffle:800};function Uh(e){return Gh[e.type]??300}const Tf=w.createContext(null);function gi({children:e}){const[n,t]=w.useState(!1),[a,r]=w.useState(null),[i,s]=w.useState(()=>Object.fromEntries(ra.map(m=>[m,null]))),c=w.useRef([]),d=w.useRef(!1),u=w.useRef(!1),p=w.useRef((()=>{try{const m=localStorage.getItem("em_anim_speed");return m==="fast"?.5:m==="off"?0:1}catch{return 1}})()).current,f=w.useCallback(()=>{if(u.current||c.current.length===0){r(null),t(!1),s(Object.fromEntries(ra.map(_=>[_,null]))),d.current=!1,u.current=!1;return}const m=c.current.shift();r(m),m.type==="move_step"&&s(_=>({..._,[m.playerId]:{pos:m.to,facing:m.facing}})),Hh(m);const b=p===0?0:Uh(m)*p;b===0?f():setTimeout(()=>f(),b)},[p]),g=w.useCallback(m=>{if(m.length!==0&&p!==0&&(c.current.push(...m),!d.current)){d.current=!0,u.current=!1,t(!0);const b=m.find(_=>_.type==="move_step");b&&s(_=>({..._,[b.playerId]:{pos:b.from,facing:b.facing}})),setTimeout(()=>f(),16)}},[f,p]),h=w.useCallback(()=>{u.current=!0,c.current=[],r(null),t(!1),s(Object.fromEntries(ra.map(m=>[m,null]))),d.current=!1},[]);return o.jsx(Tf.Provider,{value:{isAnimating:n,currentEvent:a,animatedPositions:i,enqueueEvents:g,skipAnimation:h,speedMultiplier:p},children:e})}function Nr(){const e=w.useContext(Tf);if(!e)throw new Error("useAnimation must be used inside <AnimationProvider>");return e}function Hh(e){switch(e.type){case"card_draw":Ee.cardFlip();break;case"move_step":Ee.footstep();break;case"ranged_hit":Ee.weaponFire(),setTimeout(()=>Ee.metalImpact(),100);break;case"melee_hit":Ee.metalImpact();break;case"charge_move":Ee.chargeRumble();break;case"charge_hit":Ee.explosion(),setTimeout(()=>Ee.metalImpact(),80);break;case"card_destroy":e.isBomb?Ee.explosion():Ee.cardShatter();break;case"mine_explode":Ee.explosion();break;case"mine_place":Ee.mineBeep();break;case"cleanup_discard":case"batch_card_draw":Ee.cardFlip();break;case"deck_reshuffle":Ee.cardFlip(),setTimeout(()=>Ee.cardFlip(),200);break}}function Wh(e,n){const{isAnimating:t,enqueueEvents:a}=Nr();return w.useCallback(r=>{const i=r.type==="ADVANCE_TIMING"||r.type==="ADVANCE_PHASE"||r.type==="ADJUST_FACING"||r.type==="START_PLOTTING"||r.type==="SELECT_DAMAGE_CARD"||r.type==="CONFIRM_DAMAGE_SELECTION";if(t&&!i)return;const s=n.current,c=mn(s,r);e(r);const d=Zh(s,c,r);d.length>0&&a(d)},[e,n,t,a])}function Zh(e,n,t){switch(t.type){case"MOVE_UNIT":return Yh(e,n,t);case"RESOLVE_RANGED":return Sd(e,n,"ranged",t.attackerId,t.targetId);case"RESOLVE_MELEE":return Sd(e,n,"melee",t.attackerId,t.targetId);case"RESOLVE_CHARGE":return Xh(e,n,t.attackerId,t.targetId);case"DRAW_CARDS":return Qh(e,n,t.playerId);case"ADVANCE_TIMING":return e.phase==="action_seg2"&&n.phase!=="action_seg2"?[qh(e),...Cd(e,n,"player1"),...Cd(e,n,"player2")]:[];case"PLACE_MINE":return[{type:"mine_place",playerId:t.playerId,position:t.to}];case"SELECT_DAMAGE_CARD":return ex(e,n);default:return[]}}function Yh(e,n,t){const{playerId:a}=t,r=gn(e,a),i=gn(n,a),s=r.position;if(se(s,i.position))return[];const c=[],d=t.path&&t.path.length>0?t.path:[i.position];let u=s;for(const g of d){const h=Mt(g.row-u.row,g.col-u.col);if(c.push({type:"move_step",playerId:a,from:u,to:g,facing:h}),u=g,se(g,i.position))break}const p=e.mines.filter(g=>!n.mines.some(h=>h.id===g.id));for(const g of p)c.push({type:"mine_explode",position:g.position,damage:g.damage}),c.push({type:"screen_shake",intensity:"heavy"});const f=hi(e,n,a);return xi(c,a,f),c}function Sd(e,n,t,a,r){var p;const i=[],s=gn(e,r).position,c=hi(e,n,r),d=c.length;if(d===0&&!n.pendingDamage)return[];const u=d+(((p=n.pendingDamage)==null?void 0:p.remaining)??0);return i.push({type:t==="ranged"?"ranged_hit":"melee_hit",attackerId:a,targetId:r,damage:u,targetPos:s}),i.push({type:"screen_shake",intensity:t==="melee"?"medium":"light"}),u>0&&i.push({type:"damage_number",position:s,value:u}),xi(i,r,c),i}function Xh(e,n,t,a){var p;const r=[],i=gn(e,t),s=gn(n,t),c=gn(e,a).position;se(i.position,s.position)||(r.push({type:"charge_move",attackerId:t,from:i.position,to:s.position}),r.push({type:"move_step",playerId:t,from:i.position,to:s.position,facing:Mt(s.position.row-i.position.row,s.position.col-i.position.col)}));const d=hi(e,n,a),u=d.length+(((p=n.pendingDamage)==null?void 0:p.remaining)??0);return r.push({type:"charge_hit",attackerId:t,targetId:a,damage:u,targetPos:c}),r.push({type:"screen_shake",intensity:"heavy"}),u>0&&r.push({type:"damage_number",position:c,value:u}),xi(r,a,d),r}function Qh(e,n,t){const a=[],r=gn(e,t),i=gn(n,t),s=new Set(r.hand.map(u=>u.instanceId)),c=i.hand.filter(u=>!s.has(u.instanceId));if(c.length>0){const u=r.deck.filter(g=>!g.destroyed).length,p=Math.min(c.length,u),f=c.length-p;p>0&&a.push({type:"batch_card_draw",playerId:t,count:p}),f>0&&(a.push({type:"deck_reshuffle",playerId:t}),a.push({type:"batch_card_draw",playerId:t,count:f}))}const d=new Set(r.auxiliary.map(u=>u.instanceId));for(const u of i.auxiliary)d.has(u.instanceId)||a.push({type:"card_draw",playerId:t,card:u,defId:u.defId,isAuxiliary:!0});return a}function qh(e){function n(t){const a=[];for(const r of t.hand)r.destroyed||a.push(r);return t.plotSeg1&&!t.plotSeg1.destroyed&&a.push(t.plotSeg1),t.plotSeg2&&!t.plotSeg2.destroyed&&a.push(t.plotSeg2),a}return{type:"cleanup_discard",p1Cards:n(e.players.player1),p2Cards:n(e.players.player2)}}function Cd(e,n,t){const a=[],r=gn(e,t),i=gn(n,t),s=i.hand.length;if(s>0){const d=r.deck.filter(f=>!f.destroyed).length,u=Math.min(s,d),p=s-u;u>0&&a.push({type:"batch_card_draw",playerId:t,count:u}),p>0&&(a.push({type:"deck_reshuffle",playerId:t}),a.push({type:"batch_card_draw",playerId:t,count:p}))}const c=new Set(r.auxiliary.map(d=>d.instanceId));for(const d of i.auxiliary)c.has(d.instanceId)||a.push({type:"card_draw",playerId:t,card:d,defId:d.defId,isAuxiliary:!0});return a}function ex(e,n){const t=e.pendingDamage;if(!t)return[];const a=hi(e,n,t.targetId),r=[];return xi(r,t.targetId,a),r}function gn(e,n){return e.players[n]}function hi(e,n,t){const a=new Set(gn(e,t).destroyedCards.map(r=>r.instanceId));return gn(n,t).destroyedCards.filter(r=>!a.has(r.instanceId))}function xi(e,n,t){for(let a=0;a<t.length;a++){const r=t[a],i=ee(r.defId);e.push({type:"card_destroy",playerId:n,card:r,defId:r.defId,isBomb:(i==null?void 0:i.hasBombIcon)??!1,index:a,total:t.length})}}const nx={player1:!1,player2:!1,player1Difficulty:"hard",player2Difficulty:"hard",playerAI:{},playerDifficulty:{}};function Re(e,n){var t;return((t=e.playerAI)==null?void 0:t[n])!==void 0?e.playerAI[n]:n==="player1"?e.player1:n==="player2"?e.player2:!1}function Mr(e,n){var t;return((t=e.playerDifficulty)==null?void 0:t[n])!==void 0?e.playerDifficulty[n]:n==="player1"?e.player1Difficulty:n==="player2"?e.player2Difficulty:"hard"}function ic(e,n){const t=e.teams[n],a=e.players[n].position;let r=null,i=1/0;for(const s of e.playerIds){if(s===n||e.teams[s]===t||e.players[s].isDefeated)continue;const c=e.players[s].position,d=Math.abs(c.row-a.row)+Math.abs(c.col-a.col);d<i&&(i=d,r=s)}return r??e.playerIds.find(s=>s!==n&&!e.players[s].isDefeated&&e.teams[s]!==t)??e.playerIds.find(s=>s!==n)??n}function ga(e,n){return e.players[n]}function tx(e,n,t,a,r,i){if(!n)return 0;const s=Se(t.position,a.position);let c;switch(n.actionType){case"ranged":case"melee":case"charge":c=5+(n.damage??0);break;case"movement":c=2+(n.movementValue??0)*.5;break;case"aim":case"armor":c=2;break;case"mine":c=1.5+(n.damage??0)*.2;break;default:c=1}n.hasBombIcon&&(i?c+=5:c+=8);const u=Et(t).filter(p=>p.defId===e.defId&&!p.destroyed).length;if(u>=3?c-=3:u===2&&(c-=1.5),n.actionType==="movement"&&s>=4&&(c+=3),n.actionType==="ranged"){const p=n.rangeMin??1,f=n.rangeMax??6;s>=p&&s<=f&&(c+=4)}return(n.actionType==="melee"||n.actionType==="charge")&&s<=2&&(c+=4),c}function Pt(e,n,t,a,r,i){if(e.actionType!=="movement")return[];const s=jn(n,r,"movement"),c=(e.movementValue??0)+(s.wheel?2:0);if(c<=0)return[];const d=[t.position],u=mi(a,n.position,c,d,s,n.facing),p=[];for(const{pos:f}of u){const g=nc(a,n.position,n.facing,f,c,[t.position],s);g&&p.push({pos:f,facing:g.finalFacing,dist:Se(f,t.position)})}return p.sort((f,g)=>f.dist-g.dist),p}function ax(e,n,t,a,r,i){const s=Pt(e,t,a,r,i);if(s.length===0)return null;if(n.actionType==="melee")return s.find(c=>c.dist===1)??null;if(n.actionType==="ranged"){const c=n.rangeMin??1,d=n.rangeMax??6,u=n.rangeOptimal??Math.round((c+d)/2);let p=null,f=1/0;for(const g of s){if(g.dist<c||g.dist>d||!mr(r,g.pos,a.position)||!Dn(g.facing,g.pos,a.position))continue;const h=Math.abs(g.dist-u);h<f&&(f=h,p=g)}return p}return n.actionType==="charge"?s.find(c=>c.dist<=3)??null:null}function Ya(e,n,t,a,r,i,s){var u;let c=e.damage??0;if(e.actionType==="ranged"&&e.rangeOptimal!==void 0&&e.damageAttenuation!==void 0){const p=Math.max(0,t-e.rangeOptimal);c-=p*e.damageAttenuation}const d=(u=s.cells[n.row])==null?void 0:u[n.col];return(d==null?void 0:d.terrain)==="water"&&e.isEnergyWeapon&&(c-=1),Math.max(0,c)}function rx(e,n){const t=e.hand.filter(r=>!r.destroyed);if(t.length===0)return 0;const a=t.filter(r=>{const i=n(r.defId);return i&&i.actionType==="armor"}).length;return Math.min(1,a/t.length)}function Nd(e,n,t,a,r,i){var g,h;const s=Se(t.position,a.position),c=(g=r.cells[a.position.row])==null?void 0:g[a.position.col],d=(h=r.cells[t.position.row])==null?void 0:h[t.position.col],u=rx(a,i),p=m=>["ranged","melee","charge"].includes(m.actionType),f=(c==null?void 0:c.terrain)==="forest"?.85:1;if(e.actionType==="movement"&&p(n)){const m=ax(e,n,t,a,r,i);if(m)return Ya(n,m.pos,m.dist,2,!1,!1,r)*(1-u*.5)*f*3.5+2;const b=Pt(e,t,a,r,i),_=b.length>0?b[0].dist:s;return(s-_)*1.5+(n.damage??0)*.3}if(e.actionType==="aim"&&p(n)){let m=(n.damage??0)+1,b=!1;if(n.actionType==="ranged"){const v=n.rangeMin??1,x=n.rangeMax??6;if(b=s>=v&&s<=x&&mr(r,t.position,a.position)&&Dn(t.facing,t.position,a.position),b&&n.rangeOptimal&&n.damageAttenuation){const y=Math.max(0,s-n.rangeOptimal);m-=y*n.damageAttenuation}(d==null?void 0:d.terrain)==="water"&&n.isEnergyWeapon&&(m-=1)}else n.actionType==="melee"?b=s===1:n.actionType==="charge"&&(b=s<=3);m=Math.max(0,m);const _=m*(1-u*.5)*f;return b?_*4+3:_*.5}if(p(e)&&n.actionType==="movement"){let m=0;if(e.actionType==="ranged"){const v=e.rangeMin??1,x=e.rangeMax??6;s>=v&&s<=x&&mr(r,t.position,a.position)&&Dn(t.facing,t.position,a.position)?m=Ya(e,t.position,s,1,!1,!1,r)*(1-u*.5)*f*2.5:m=(e.damage??0)*.3}else e.actionType==="melee"?s===1?m=Ya(e,t.position,s,1,!1,!1,r)*(1-u*.5)*3:m=(e.damage??0)*.3:e.actionType==="charge"&&(m=s<=3?(e.damage??0)*2:(e.damage??0)*.3);const b=Pt(n,t,a,r,i),_=b.length>0?Math.max(0,s-b[0].dist)*1+1:.5;return m+_}if(p(e)&&n.actionType==="armor"){let m=Wr(e,s,t.position,t.facing,a.position,r,f,u,1);const b=s<=3?2.5:s<=5?1.5:.5;return m+b}if(e.actionType==="armor"&&p(n)){const m=s<=3?2.5:s<=5?1.5:.5;let b=Wr(n,s,t.position,t.facing,a.position,r,f,u,2);return m+b}if(e.actionType==="movement"&&n.actionType==="movement"){if(s<=3)return 1;const m=Pt(e,t,a,r,i),b=m.length>0?m[0].dist:s,_=s-b,v=n.movementValue??0;return(_+Math.min(v,b-1))*1.2+.5}if(p(e)&&p(n)){const m=Wr(e,s,t.position,t.facing,a.position,r,f,u,1),b=Wr(n,s,t.position,t.facing,a.position,r,f,u,2),_=m>1&&b>1;return m+b+(_?2:0)}if(e.actionType==="movement"&&n.actionType==="armor"){const m=Pt(e,t,a,r,i),b=m.length>0?m[0].dist:s;return(s-b)*1+(b<=3?2:.5)}if(e.actionType==="armor"&&n.actionType==="movement"){const m=s<=3?2:.5,b=Pt(n,t,a,r,i),_=b.length>0?b[0].dist:s;return m+(s-_)*1}if(e.actionType==="aim"&&!p(n))return .3+Zr(n,s);if(e.actionType==="mine"||n.actionType==="mine"){const m=s<=3?1.5:.5,b=e.actionType==="mine"?n:e;return m+Zr(b,s)}return Zr(e,s)+Zr(n,s)}function Wr(e,n,t,a,r,i,s,c,d){if(e.actionType==="ranged"){const u=e.rangeMin??1,p=e.rangeMax??6;return n>=u&&n<=p&&mr(i,t,r)&&Dn(a,t,r)?Ya(e,t,n,d,!1,!1,i)*(1-c*.5)*s*2.5:(e.damage??0)*.3}return e.actionType==="melee"?n===1?Ya(e,t,n,d,!1,!1,i)*(1-c*.5)*3:(e.damage??0)*.3:e.actionType==="charge"?n<=3?(e.damage??0)*2:(e.damage??0)*.3:0}function Zr(e,n){switch(e.actionType){case"movement":return(e.movementValue??0)*.4+(n>3?1:.2);case"armor":return n<=3?2:n<=5?1:.3;case"aim":return .3;case"mine":return n<=3?1.5:.5;default:return .1}}function ox(e,n,t,a,r){const i=e.hand.filter(u=>!u.destroyed);if(i.length===0)return{seg1:null,seg2:null};if(i.length===1)return{seg1:i[0].instanceId,seg2:null};if(a==="easy"){const u=[...i].sort(()=>Math.random()-.5);return{seg1:u[0].instanceId,seg2:u[1].instanceId}}let s=-1/0,c=i[0].instanceId,d=i[1].instanceId;for(let u=0;u<i.length;u++){const p=i[u],f=t(p.defId);if(f)for(let g=0;g<i.length;g++){if(u===g)continue;const h=i[g],m=t(h.defId);if(!m)continue;const b=r?Nd(f,m,e,n,r,t):f.actionType!=="movement"&&m.actionType!=="movement"?Nd(f,m,e,n,{width:11,height:7,cells:[]},t):0;b>s&&(s=b,c=p.instanceId,d=h.instanceId)}}return{seg1:c,seg2:d}}function ix(e,n,t,a,r){const i=ga(e,n),s=ic(e,n),c=ga(e,s),d=jn(i,a,"movement"),u=t===1?i.plotSeg1:i.plotSeg2;if(!u)return null;const p=a(u.defId);if(!p||p.actionType!=="movement")return null;const f=(p.movementValue??0)+(d.wheel?2:0);if(f<=0)return null;const g=e.playerIds.filter(E=>E!==n&&!e.players[E].isDefeated).map(E=>e.players[E].position),h=mi(e.map,i.position,f,g,d,i.facing);if(h.length===0)return null;function m(E){const $=nc(e.map,i.position,i.facing,E,f,g,d);return $?{pos:E,path:$.path,finalFacing:$.finalFacing}:null}if(r==="easy"){if(Math.random()<.5)return null;const E=[...h].sort(()=>Math.random()-.5);for(const{pos:$}of E){const L=m($);if(L)return L}return null}const _=(t===1?2:1)===1?i.plotSeg1:i.plotSeg2,v=_?a(_.defId):null;let x;if(!v)x=1;else if(v.actionType==="ranged"){const E=v.rangeMin??1,$=v.rangeMax??6;x=v.rangeOptimal??Math.round((E+$)/2)}else v.actionType==="melee"||v.actionType==="charge"?x=1:x=2;const y=Cr(c),k=[];for(const E of y){const $=a(E.defId);$&&$.actionType==="ranged"&&k.push({min:$.rangeMin??1,max:$.rangeMax??6})}const T=e.mines.filter(E=>E.ownerId!==n),z=[];for(const{pos:E}of h){const $=Se(E,c.position),L=-Math.abs($-x)*3,O=T.some(N=>se(N.position,E))?-10:0,H=e.map.cells[E.row][E.col];let B=0;H.terrain==="forest"?B=1.5:H.terrain==="water"&&(B=-1);let U=0;for(const N of k)$<N.min||$>N.max?U+=.5:U-=.5;z.push({pos:E,quickScore:L+O+B+U})}z.sort((E,$)=>$.quickScore-E.quickScore);const j=z.slice(0,5);let S=-1/0,D=null;for(const{pos:E,quickScore:$}of j){const L=m(E);if(!L)continue;const M=Dn(L.finalFacing,E,c.position)?1:-1,O=$+M;O>S&&(S=O,D=L)}if(!D)for(const{pos:E}of z.slice(5)){const $=m(E);if($){D=$;break}}return D}function sx(e,n,t,a,r,i){const s=ga(e,n),c=ic(e,n),d=ga(e,c),u=Pn(s,t,a,r);if(!u)return!1;if(u.actionType==="charge"&&a==="melee"&&i==="hard"){const f=q.find(x=>x.id===s.unitId),g=q.find(x=>x.id===d.unitId);if(!f||!g)return!1;const h=Jo(s,d,t,e.map,f,g,r);if(!h.canAttack)return!1;const m=h.counterDamage,b=kd(s),_=kd(d);return!(h.damage-m<0&&b<=m+2||b<=5&&m>=3||_<=3&&m>=2)}if(u.actionType==="charge"&&a==="melee"){const f=q.find(m=>m.id===s.unitId),g=q.find(m=>m.id===d.unitId);return!f||!g?!1:Jo(s,d,t,e.map,f,g,r).canAttack}return tc(s,d,t,a,e.map,r).canAttack}function lx(e,n,t,a,r=!1,i){const s=Cr(n);if(s.length===0)return null;if(a==="easy")return s[Math.floor(Math.random()*s.length)].instanceId;const c=i??n;let d=null,u=r?-1/0:1/0;for(const p of s){const f=t(p.defId),g=tx(p,f,n,c,t,r);(r?g>u:g<u)&&(u=g,d=p)}return(d==null?void 0:d.instanceId)??null}function cx(e,n,t,a,r){const i=ga(e,n),s=ga(e,ic(e,n)),c=t===1?i.plotSeg1:i.plotSeg2;if(!c)return null;const d=a(c.defId);if(!d||d.actionType!=="mine")return null;const u=e.mines.map(m=>m.position),p=[];for(let m=-1;m<=1;m++)for(let b=-1;b<=1;b++){if(m===0&&b===0)continue;const _=i.position.row+m,v=i.position.col+b;if(_<0||_>=e.map.height||v<0||v>=e.map.width)continue;const x={row:_,col:v};se(x,i.position)||se(x,s.position)||u.some(y=>se(y,x))||p.push(x)}if(p.length===0)return null;if(r==="easy")return p.sort((m,b)=>Se(m,s.position)-Se(b,s.position)),p[0];let f=-1/0,g=null;const h=Se(i.position,s.position);for(const m of p){let b=0;const _=Se(m,s.position);b+=Math.max(0,5-_);const v=m.row,x=m.col;Se(m,i.position)<h&&(b+=2),Dn(s.facing,s.position,m)&&Se(s.position,m)<=3&&(b+=1.5);const k=v===0||v===e.map.height-1,T=x===0||x===e.map.width-1;(k||T)&&(b+=1),k&&T&&(b+=.5);const z=e.map.cells[v][x];(z.terrain==="forest"||z.terrain==="water")&&(b+=.5),b>f&&(f=b,g=m)}return g}const vi=1,dx=["slot_1","slot_2","slot_3","slot_4","slot_5"],ux=10,xr="em_saves_index",vr="em_replays_index",sc=e=>`em_save_${e}`,Uo=e=>`em_replay_${e}`;function ya(e){try{const n=localStorage.getItem(e);return n?JSON.parse(n):[]}catch{return[]}}function bi(e,n){localStorage.setItem(e,JSON.stringify(n))}function Md(){return ya(xr).sort((n,t)=>t.timestamp-n.timestamp)}function Ef(e,n,t,a){const r={slotId:e,timestamp:Date.now(),roundNumber:n.roundNumber,phase:n.phase,player1Unit:n.players.player1.unitId,player2Unit:n.players.player2.unitId,mapId:n.map.id,mapName:n.map.nameCn,isAutoSave:a},i={version:vi,metadata:r,gameState:n,aiConfig:t};try{localStorage.setItem(sc(e),JSON.stringify(i))}catch{throw new Error("存储空间不足，无法保存存档")}const c=ya(xr).filter(d=>d.slotId!==e);return c.push(r),bi(xr,c),r}function px(e){try{const n=localStorage.getItem(sc(e));if(!n)return null;const t=JSON.parse(n);if(!mx(t))return null;const a=t;return a.gameState.playerIds||(a.gameState.playerIds=["player1","player2"],a.gameState.teams={player1:0,player2:1},a.gameState.teamCount=2,a.gameState.shuffleSeed=a.metadata.timestamp),a}catch{return null}}function fx(e){localStorage.removeItem(sc(e));const n=ya(xr);bi(xr,n.filter(t=>t.slotId!==e))}function mx(e){if(!e||typeof e!="object")return!1;const n=e;if(n.version!==vi||!n.gameState||typeof n.gameState!="object")return!1;const t=n.gameState;if(!t.phase||!t.players||!t.map)return!1;const a=t.players;return!(!a.player1||!a.player2||!n.metadata||typeof n.metadata!="object"||!n.aiConfig||typeof n.aiConfig!="object")}function Td(){return ya(vr).sort((n,t)=>t.timestamp-n.timestamp)}function gx(e,n,t){const a=`${Date.now()}`,r={replayId:a,timestamp:Date.now(),totalRounds:e.roundNumber,totalActions:n.length,player1Unit:e.players.player1.unitId,player2Unit:e.players.player2.unitId,mapId:e.map.id,mapName:e.map.nameCn,winner:t},i={version:vi,metadata:r,initialState:e,actions:n};try{localStorage.setItem(Uo(a),JSON.stringify(i))}catch{throw new Error("存储空间不足，无法保存录像")}const s=ya(vr);for(s.push(r),s.sort((c,d)=>c.timestamp-d.timestamp);s.length>ux;){const c=s.shift();localStorage.removeItem(Uo(c.replayId))}return bi(vr,s),r}function Ed(e){try{const n=localStorage.getItem(Uo(e));if(!n)return null;const t=JSON.parse(n);if(!xx(t))return null;const a=t;return a.initialState.playerIds||(a.initialState.playerIds=["player1","player2"],a.initialState.teams={player1:0,player2:1},a.initialState.teamCount=2,a.initialState.shuffleSeed=a.metadata.timestamp),a}catch{return null}}function hx(e){localStorage.removeItem(Uo(e));const n=ya(vr);bi(vr,n.filter(t=>t.replayId!==e))}function xx(e){if(!e||typeof e!="object")return!1;const n=e;return!(n.version!==vi||!n.initialState||typeof n.initialState!="object"||!Array.isArray(n.actions)||!n.metadata||typeof n.metadata!="object")}function vx(e,n){let t=e.initialState,a=0;for(;a<e.actions.length&&!(t.roundNumber>=n);a++)t=mn(t,e.actions[a]);return{state:t,actionIndex:a}}const oa={N:"↑北",S:"↓南",E:"→东",W:"←西"},Yr={setup:"配置",pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"行动阶段·段落1",action_seg2:"行动阶段·段落2",cleanup:"清理阶段",game_over:"对局结束"},bx={movement:"移动时序",ranged:"射击时序",melee:"近战时序",special:"特殊时序"},yx={movement:"移动",ranged:"射击",melee:"近战",charge:"突击",aim:"瞄准",armor:"装甲",mine:"机雷",special:"特殊",auxiliary:"辅助"};function Ln(e){var n;return((n=q.find(t=>t.id===e))==null?void 0:n.nameCn)??e}function Xs(e){const n=ee(e);if(!n)return e;const t=yx[n.actionType]??n.actionType;let a="";n.movementValue!=null&&(a=` 值${n.movementValue}`),n.damage!=null&&(a=` 伤害${n.damage}`,n.rangeMin!=null&&n.rangeMax!=null&&(a+=` 射程${n.rangeMin}-${n.rangeMax}`),n.rangeOptimal!=null&&(a+=` 最佳${n.rangeOptimal}`));const r=n.hasBombIcon?" [💣]":"",i=n.isKaiVariant?" [◆改]":"";return`${n.nameCn}(${t}${a}${r}${i})`}function Qs(e){const n=Xs(e.defId);return e.destroyed?`${n}[已破坏]`:n}function Xr(e){return e.length===0?"(无)":e.map(n=>Qs(n)).join(", ")}function Qr(e,n){const t=[],a=Ln(e.unitId),r=oa[e.facing]??e.facing,i=e.deck.filter(d=>!d.destroyed).length,s=e.hand.filter(d=>!d.destroyed).length,c=e.auxiliary.filter(d=>!d.destroyed).length;if(t.push(`  ${n} [${a}]  位置(${e.position.row},${e.position.col}) 朝向${r}  败北=${e.isDefeated}`),t.push(`    牌库=${i}  手牌=${s}  辅助=${c}/${e.auxiliary.length}  弃牌=${e.discard.length}  破坏=${e.destroyedCards.length}  总存活=${i+s+c+e.discard.length+(e.plotSeg1&&!e.plotSeg1.destroyed?1:0)+(e.plotSeg2&&!e.plotSeg2.destroyed?1:0)}`),t.push(`    手牌: ${Xr(e.hand)}`),e.auxiliary.length>0&&t.push(`    辅助: ${Xr(e.auxiliary)}`),e.plotSeg1||e.plotSeg2){const d=e.plotSeg1?Qs(e.plotSeg1):"—",u=e.plotSeg2?Qs(e.plotSeg2):"—";t.push(`    布局: 段1=[${d}]  段2=[${u}]`)}return e.discard.length>0&&t.push(`    弃牌: ${Xr(e.discard)}`),e.destroyedCards.length>0&&t.push(`    破坏: ${Xr(e.destroyedCards)}`),t.join(`
`)}function _x(e,n){const t=r=>{const i=n.players[r],s=n.playerIds.indexOf(r);return`${s>=0?`P${s+1}`:r}[${i?Ln(i.unitId):r}]`},a=(r,i)=>{const s=n.players[i];return s?[...s.deck,...s.hand,...s.auxiliary,...s.discard,...s.destroyedCards,...s.plotSeg1?[s.plotSeg1]:[],...s.plotSeg2?[s.plotSeg2]:[]].find(d=>d.instanceId===r):void 0};switch(e.type){case"SELECT_UNIT":{const r=n.playerIds.indexOf(e.playerId);return`${r>=0?`P${r+1}`:e.playerId} 选择机体 ${Ln(e.unitId)}`}case"SELECT_MAP":return`选择地图 ${e.mapId}`;case"CONFIRM_SETUP":return"确认设置，开始对局";case"SET_SPAWN_POSITION":return`${t(e.playerId)} 设置出生点 (${e.position.row},${e.position.col})`;case"SET_SPAWN_FACING":return`${t(e.playerId)} 设置初始朝向 ${oa[e.facing]??e.facing}`;case"START_PLOTTING":return"战前准备结束，进入布局阶段";case"DRAW_CARDS":return`${t(e.playerId)} 抽牌 ${e.count} 张`;case"PLOT_CARD":{const r=a(e.instanceId,e.playerId);return`${t(e.playerId)} 布局段落${e.seg}: ${r?Xs(r.defId):e.instanceId}`}case"CONFIRM_PLOT":return`${t(e.playerId)} 确认布局完成`;case"ADVANCE_PLOT_STEP":return"[系统] 布局步骤推进";case"MOVE_UNIT":{const r=n.players[e.playerId],i=r?`(${r.position.row},${r.position.col})`:"(?,?)",s=`(${e.to.row},${e.to.col})`,c=e.finalFacing?` 朝向→${oa[e.finalFacing]??e.finalFacing}`:"",d=e.path?` 路径[${e.path.map(u=>`(${u.row},${u.col})`).join("→")}]`:"";return`${t(e.playerId)} 移动 ${i}→${s}${c}${d}`}case"ADJUST_FACING":return`${t(e.playerId)} 调整朝向→${oa[e.facing]??e.facing}`;case"RESOLVE_RANGED":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动射击`;case"RESOLVE_MELEE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动近战`;case"RESOLVE_CHARGE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动突击`;case"PLACE_MINE":return`${t(e.playerId)} 在 (${e.to.row},${e.to.col}) 部署机雷 (伤害${e.damage})`;case"SELECT_DAMAGE_CARD":{const r=a(e.instanceId,e.playerId);return`${t(e.playerId)} 选择摧毁: ${r?Xs(r.defId):e.instanceId}`}case"CONFIRM_DAMAGE_SELECTION":return`${t(e.playerId)} 确认伤害结算`;case"SKIP_ACTION":return"[系统] 跳过行动";case"ADVANCE_TIMING":return"[系统] 推进时序";case"ADVANCE_PHASE":return"[系统] 推进阶段";case"MELEE_SENSOR_MOVE":return`${t(e.playerId)} 近战传感器移动至 (${e.to.row},${e.to.col})`;case"RESET_GAME":return"[系统] 重置游戏";case"LOAD_GAME":return"[系统] 加载存档";case"ADD_LOG":return`[系统] ${e.message}`;default:return`[未知] ${e.type}`}}function Ix(e,n){const t=[],a="═".repeat(72),r="─".repeat(72);t.push(a),t.push("EMBRYO MACHINE — 对局分析日志"),t.push(a),t.push(`生成时间: ${new Date().toISOString()}`),t.push(`地图: ${e.map.nameCn} (${e.map.id}) ${e.map.width}×${e.map.height}`),t.push(`P1: ${Ln(e.players.player1.unitId)} (${e.players.player1.unitId})`),t.push(`P2: ${Ln(e.players.player2.unitId)} (${e.players.player2.unitId})`),t.push(`总操作数: ${n.length}`),t.push(""),t.push("[地图地形]");const i={plain:"平",forest:"森",rubble:"瓦",water:"水",highland:"高",sand:"砂"};let s="     ";for(let _=0;_<e.map.width;_++)s+=`  ${String(_).padStart(2)} `;t.push(s);for(let _=0;_<e.map.height;_++){let v=`  ${String(_).padStart(2)} `;for(let x=0;x<e.map.width;x++){const y=e.map.cells[_][x],k=i[y.terrain]??"?",T=y.elevation>0?String(y.elevation):" ";v+=` ${k}${T} `}t.push(v)}t.push("  地形: 平=平地 森=森林 瓦=瓦砾 水=水域 高=高地 砂=砂地  数字=海拔"),t.push(""),t.push("[初始状态]"),t.push(`  阶段: ${Yr[e.phase]??e.phase}  回合: ${e.roundNumber}`),t.push(Qr(e.players.player1,"P1")),t.push(Qr(e.players.player2,"P2")),e.mines.length>0&&t.push(`  机雷: ${e.mines.map(_=>`(${_.position.row},${_.position.col}) 所有者=${_.ownerId} 伤害=${_.damage}`).join("; ")}`),t.push("");let c=e,d=c.roundNumber,u=c.phase,p=c.currentTiming,f=0,g=c.log.length;for(let _=0;_<n.length;_++){const v=n[_],x=c;c=mn(c,v),f++,c.roundNumber!==d&&(t.push(""),t.push(a),t.push(`══ 第 ${c.roundNumber} 回合 ══`),t.push(a),d=c.roundNumber),c.phase!==u&&(t.push(""),t.push(r),t.push(`── ${Yr[c.phase]??c.phase} ──`),t.push(r),u=c.phase,p=c.currentTiming),c.currentTiming!==p&&c.currentTiming&&(t.push(""),t.push(`  ◆ ${bx[c.currentTiming]??c.currentTiming}  先攻顺序: [${c.turnOrder.join(", ")}]`),p=c.currentTiming);const y=_x(v,x);t.push(`  #${String(f).padStart(4,"0")}  ${y}`);const k=c.log.slice(g);for(const S of k)t.push(`         │ ${S}`);if(g=c.log.length,c.pendingDamage&&!x.pendingDamage){const S=c.pendingDamage;t.push(`         ├─ [交互伤害] 目标=${S.targetId} 剩余=${S.remaining} 来源=${S.source}${S.attackerId?` 攻方=${S.attackerId}(瞄准指定)`:""}`)}const T=c.phase!==x.phase,z=c.roundNumber!==x.roundNumber,j=c.phase==="game_over"&&x.phase!=="game_over";(T||z||j)&&(t.push(""),t.push(`  [状态快照 #${f} | ${Yr[c.phase]??c.phase}]`),t.push(Qr(c.players.player1,"P1")),t.push(Qr(c.players.player2,"P2")),c.mines.length>0&&t.push(`  机雷: ${c.mines.map(S=>`(${S.position.row},${S.position.col}) 所有者=${S.ownerId} 伤害=${S.damage}`).join("; ")}`))}t.push(""),t.push(a),t.push("══ 对局总结 ══"),t.push(a);const h=c,m=Dd(h.players.player1),b=Dd(h.players.player2);h.phase==="game_over"?h.players.player1.isDefeated&&h.players.player2.isDefeated?t.push("结果: 平局（双方同时击破）"):h.players.player1.isDefeated?t.push(`结果: P2[${Ln(h.players.player2.unitId)}] 获胜`):h.players.player2.isDefeated&&t.push(`结果: P1[${Ln(h.players.player1.unitId)}] 获胜`):t.push(`结果: 对局未结束 (当前阶段: ${Yr[h.phase]??h.phase})`),t.push(`最终回合: ${h.roundNumber}`),t.push(`总操作数: ${n.length}`),t.push(""),t.push(`P1[${Ln(h.players.player1.unitId)}] 最终状态:`),t.push(`  存活卡牌: ${m}  破坏: ${h.players.player1.destroyedCards.length}  败北: ${h.players.player1.isDefeated}`),t.push(`  位置: (${h.players.player1.position.row},${h.players.player1.position.col}) 朝向: ${oa[h.players.player1.facing]}`),t.push(""),t.push(`P2[${Ln(h.players.player2.unitId)}] 最终状态:`),t.push(`  存活卡牌: ${b}  破坏: ${h.players.player2.destroyedCards.length}  败北: ${h.players.player2.isDefeated}`),t.push(`  位置: (${h.players.player2.position.row},${h.players.player2.position.col}) 朝向: ${oa[h.players.player2.facing]}`),t.push(""),t.push(r),t.push("[完整引擎日志]"),t.push(r);for(let _=0;_<h.log.length;_++)t.push(`  ${String(_+1).padStart(4,"0")}  ${h.log[_]}`);return t.push(""),t.push(a),t.push("日志结束"),t.push(a),t.join(`
`)}function Dd(e){const n=t=>t.filter(a=>!a.destroyed).length;return n(e.deck)+n(e.hand)+n(e.auxiliary)+e.discard.length+(e.plotSeg1&&!e.plotSeg1.destroyed?1:0)+(e.plotSeg2&&!e.plotSeg2.destroyed?1:0)}const yi=w.createContext(null);function Df({children:e}){const[n,t]=w.useReducer(mn,void 0,Mf),[a,r]=w.useState(nx),[i,s]=w.useState(!0),[c,d]=w.useState(!1),u=w.useRef(n);u.current=n;const p=w.useRef([]),f=w.useRef(null),g=w.useRef(-1),h=w.useCallback(v=>{const x=u.current;if(v.type==="RESET_GAME"||v.type==="LOAD_GAME"){p.current=[],f.current=null,g.current=-1,t(v);return}if(v.type==="CONFIRM_SETUP"){const k=mn(x,v);p.current=[],f.current=k,t(v);return}p.current.push(v);const y=mn(x,v);if(t(v),i&&x.phase!=="draw"&&y.phase==="draw"&&y.roundNumber!==g.current){g.current=y.roundNumber;try{Ef("auto",y,a,!0)}catch{}}},[a,i]),m=Wh(h,u),b=w.useCallback(v=>ee(v),[]),_=w.useCallback(()=>f.current?{initialState:f.current,actions:[...p.current]}:null,[]);return o.jsx(yi.Provider,{value:{state:n,dispatch:m,rawDispatch:h,getCard:b,aiConfig:a,setAIConfig:r,getReplayData:_,autoSaveEnabled:i,setAutoSaveEnabled:s,exposureMode:c,setExposureMode:d},children:e})}function Ne(){const e=w.useContext(yi);if(!e)throw new Error("useGame must be used inside <GameProvider>");return e}function Tr(){return Ne().state}const kx={gameTitle:"Embryo Machine",setupSelectMap:"选择地图",statMovement:"移动力",statEvasion:"回避值",statAssault:"突击",statAssaultDef:"被突击",statInitiative:"先制值"},xt=kx,Yi=["var(--color-accent)","#ff00c8","#00cc88","#ff8800","#6688ff","#cc44ff","#44dddd","#ff4466"],jx=[2,3,4,6,8];function wx(e){const n=[];for(let t=2;t<=e;t++)e%t===0&&n.push(t);return n}function Sx({onNext:e,autoFill:n=!1}){const{state:t,dispatch:a,rawDispatch:r,setAIConfig:i,setExposureMode:s}=Ne(),c=w.useMemo(()=>uh(),[]),[d,u]=w.useState(c[0].id),[p,f]=w.useState(2),[g,h]=w.useState(2),[m,b]=w.useState({}),[_,v]=w.useState({}),[x,y]=w.useState({}),k=w.useMemo(()=>ra.slice(0,p),[p]),T=w.useMemo(()=>wx(p),[p]);w.useEffect(()=>{r({type:"RESET_GAME",playerCount:p,teamCount:g}),y({});const N=Math.ceil(p/g),V=c.filter(F=>{if(F.maxPlayers<p||F.maxTeams<g)return!1;for(let P=0;P<g;P++){const R=F.startZones[P];if(!R||R.length<N)return!1}return!0});V.length>0&&(u(V[0].id),a({type:"SELECT_MAP",mapId:V[0].id}))},[p,g]),w.useEffect(()=>{T.includes(g)||h(T[0])},[T,g]);function z(N,V){a({type:"SELECT_UNIT",playerId:N,unitId:V}),y(F=>({...F,[N]:!0}))}function j(N){N!==d&&(u(N),a({type:"SELECT_MAP",mapId:N}))}function S(N,V){b(F=>({...F,[N]:V}))}function D(N,V){v(F=>({...F,[N]:V}))}const E=k.map(N=>{var V;return((V=t.players[N])==null?void 0:V.unitId)??""}),$=E.every(N=>N!==""),L=new Set(E.filter(N=>N!=="")).size===E.filter(N=>N!=="").length,M=k.filter(N=>x[N]).map(N=>{var V;return((V=t.players[N])==null?void 0:V.unitId)??""}).filter(N=>N!==""),O=new Set(M).size===M.length,H=n?O:$&&L,B={};for(let N=0;N<k.length;N++){const V=N%g;B[V]||(B[V]=[]),B[V].push(k[N])}const U=w.useMemo(()=>c.filter(N=>{if(N.maxPlayers<p||N.maxTeams<g)return!1;const V=Math.ceil(p/g);for(let F=0;F<g;F++){const P=N.startZones[F];if(!P||P.length<V)return!1}return!0}),[p,g]);return w.useEffect(()=>{U.length>0&&!U.find(N=>N.id===d)&&j(U[0].id)},[U]),o.jsxs("div",{className:"setup-screen",children:[o.jsx("h1",{className:"setup-title",children:xt.gameTitle}),o.jsx("p",{className:"setup-subtitle",children:"选择地图与机体"}),o.jsxs("section",{className:"setup-section",children:[o.jsx("h2",{children:"游戏配置"}),o.jsxs("div",{className:"config-row",children:[o.jsxs("label",{className:"config-label",children:["玩家人数",o.jsx("select",{className:"config-select",value:p,onChange:N=>f(Number(N.target.value)),children:jx.map(N=>o.jsxs("option",{value:N,children:[N,"人"]},N))})]}),o.jsxs("label",{className:"config-label",children:["队伍数量",o.jsx("select",{className:"config-select",value:g,onChange:N=>h(Number(N.target.value)),children:T.map(N=>o.jsxs("option",{value:N,children:[N,"队 (",p/N,"人/队)"]},N))})]})]})]}),o.jsxs("section",{className:"setup-section",children:[o.jsx("h2",{children:xt.setupSelectMap}),o.jsx("div",{className:"map-list",children:U.map(N=>o.jsxs("button",{className:`map-btn ${d===N.id?"map-btn--active":""}`,onClick:()=>j(N.id),children:[N.nameCn," ",N.id.startsWith("custom_")?"✦":"",o.jsxs("span",{className:"map-btn__size",children:[N.height,"×",N.width," · ≤",N.maxPlayers,"人"]})]},N.id))})]}),o.jsx("div",{className:"setup-teams",children:Object.entries(B).map(([N,V])=>o.jsxs("div",{className:"setup-team",children:[o.jsxs("h3",{className:"team-header",style:{color:Yi[Number(N)*(p/g)]},children:["队伍 ",Number(N)+1]}),o.jsx("div",{className:"setup-players",children:V.map(F=>{var ne;const P=ra.indexOf(F),R=Yi[P%Yi.length],Z=((ne=t.players[F])==null?void 0:ne.unitId)??"",Q=E.filter((te,Y)=>Y!==k.indexOf(F)&&te);return o.jsxs("div",{className:"setup-player-col",children:[o.jsx(Cx,{label:`P${P+1}`,selectedUnit:Z,blockedUnits:Q,accentColor:R,onSelect:te=>z(F,te)}),o.jsxs("div",{className:"ai-control",children:[o.jsxs("label",{className:"ai-control__label",children:[o.jsx("input",{type:"checkbox",checked:m[F]??!1,onChange:te=>S(F,te.target.checked)}),"AI控制"]}),m[F]&&o.jsxs("select",{className:"ai-control__difficulty",value:_[F]??"hard",onChange:te=>D(F,te.target.value),children:[o.jsx("option",{value:"easy",children:"简单"}),o.jsx("option",{value:"hard",children:"困难"})]})]})]},F)})})]},N))}),o.jsx("button",{className:"start-btn",onClick:()=>{const N=new Set(k.filter(Y=>x[Y]).map(Y=>{var ce;return((ce=t.players[Y])==null?void 0:ce.unitId)??""}).filter(Y=>Y!=="")),F=[...q.map(Y=>Y.id).filter(Y=>!N.has(Y))];for(let Y=F.length-1;Y>0;Y--){const ce=Math.floor(Math.random()*(Y+1));[F[Y],F[ce]]=[F[ce],F[Y]]}const P={...m},R={..._};let Z=0;for(const Y of k)n&&!x[Y]&&Z<F.length&&(a({type:"SELECT_UNIT",playerId:Y,unitId:F[Z]}),Z++,P[Y]=!0,R[Y]="hard");const Q={},ne={};for(const Y of k)Q[Y]=P[Y]??!1,ne[Y]=R[Y]??"hard";i({player1:Q.player1??!1,player2:Q.player2??!1,player1Difficulty:ne.player1??"hard",player2Difficulty:ne.player2??"hard",playerAI:Q,playerDifficulty:ne}),k.every(Y=>Q[Y])&&s(!0),e()},disabled:!H,title:H?"":"请为所有玩家分别选择不同的机体",children:"下一步 →"}),!H&&o.jsx("p",{className:"setup-hint",children:n?"手动选择的机体之间不可重复":$?"每位玩家须选择不同的机体":"请为所有玩家各选择一台机体"}),o.jsx("style",{children:Tx})]})}function Cx({label:e,selectedUnit:n,blockedUnits:t,accentColor:a,onSelect:r}){return o.jsxs("div",{className:"unit-picker",children:[o.jsx("h2",{className:"unit-picker__title",style:{color:a},children:e}),o.jsx("div",{className:"unit-grid",children:q.map(i=>{const s=t.includes(i.id);return o.jsx(Nx,{unit:i,isSelected:i.id===n,isBlocked:s,accentColor:a,onSelect:()=>!s&&r(i.id)},i.id)})}),n&&o.jsx(Mx,{unit:q.find(i=>i.id===n),accentColor:a})]})}function Nx({unit:e,isSelected:n,isBlocked:t,accentColor:a,onSelect:r}){return o.jsxs("button",{className:`unit-card ${n?"unit-card--selected":""} ${t?"unit-card--blocked":""}`,onClick:r,disabled:t,title:t?"该机体已被其他玩家选择":e.nameCn,style:n?{borderColor:a,boxShadow:`0 0 8px ${a}55`}:{},children:[o.jsx("img",{src:`/assets/tokens/${e.tokenId}`,alt:e.nameCn,className:"unit-card__token",onError:i=>{i.target.style.opacity="0.3"}}),o.jsx("span",{className:"unit-card__name",children:e.nameCn}),o.jsxs("span",{className:"unit-card__init",children:["先制 ",e.initiative]})]})}function Mx({unit:e,accentColor:n}){return o.jsxs("div",{className:"unit-stats",children:[o.jsxs("div",{className:"unit-stats__name",children:[e.nameCn," ",o.jsxs("small",{children:["(",e.nameJa,")"]})]}),o.jsx("div",{className:"unit-stats__type",children:e.type}),o.jsxs("div",{className:"unit-stats__grid",children:[o.jsx($a,{label:xt.statMovement,value:e.movement,color:n}),o.jsx($a,{label:xt.statEvasion,value:e.evasion,color:n}),o.jsx($a,{label:xt.statAssault,value:e.assault,color:n}),o.jsx($a,{label:xt.statAssaultDef,value:e.assaultDef,color:n}),o.jsx($a,{label:xt.statInitiative,value:e.initiative,color:n})]})]})}function $a({label:e,value:n,color:t}){return o.jsxs("div",{className:"stat",children:[o.jsx("span",{className:"stat__label",children:e}),o.jsx("span",{className:"stat__value",style:{color:t},children:n})]})}const Tx=`
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

/* ═══════════════════════════════════════════════════════
   Mobile Responsive Overrides
   ═══════════════════════════════════════════════════════ */
@media (max-width: 768px) {
  .setup-screen {
    padding: 20px 12px 40px;
    gap: 16px;
  }

  .setup-title {
    font-size: 1.6rem;
  }

  .setup-subtitle {
    font-size: 0.7rem;
    margin-top: -10px;
  }

  .config-row {
    gap: 12px;
  }

  .config-select {
    min-height: 44px;
    padding: 6px 14px;
  }

  .map-btn {
    padding: 10px 16px;
    min-height: 44px;
    min-width: 44px;
  }

  .unit-picker {
    min-width: 0;
    max-width: 100%;
    width: 100%;
  }

  .unit-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
  }

  .unit-card {
    padding: 8px 2px;
    min-height: 44px;
  }

  .unit-card__token {
    width: 40px;
    height: 40px;
  }

  .setup-players {
    gap: 16px;
    width: 100%;
  }

  .setup-player-col {
    width: 100%;
    max-width: 340px;
  }

  .ai-control {
    width: 100%;
    justify-content: center;
  }

  .start-btn {
    padding: 16px 32px;
    font-size: 1rem;
    min-height: 48px;
    width: 100%;
    max-width: 300px;
  }
}
`,$d=768;function _i(){const[e,n]=w.useState(()=>typeof window<"u"&&window.innerWidth<=$d);return w.useEffect(()=>{const t=window.matchMedia(`(max-width: ${$d}px)`),a=r=>n(r.matches);return t.addEventListener("change",a),n(t.matches),()=>t.removeEventListener("change",a)},[]),e}const zn=18;function ke({id:e,title:n,initialPos:t,width:a=300,height:r,minHeight:i=80,children:s,zIndex:c=10,defaultMinimized:d=!1,onFocus:u,siblingRects:p=[]}){const f=_i(),[g,h]=w.useState(t),[m,b]=w.useState(d),_=w.useRef(null),v=w.useRef(!1);w.useEffect(()=>{v.current||(v.current=!0,h(t))},[]);const x=w.useCallback(y=>{if(f||y.button!==0)return;y.preventDefault(),u==null||u(e);const k=y.clientX-g.x,T=y.clientY-g.y,z=S=>{var B;let D=S.clientX-k,E=S.clientY-T;const $=window.innerWidth,L=window.innerHeight,M=(B=_.current)==null?void 0:B.getBoundingClientRect(),O=(M==null?void 0:M.width)??a,H=(M==null?void 0:M.height)??40;D<zn&&(D=0),E<zn&&(E=0),D+O>$-zn&&(D=$-O),E+H>L-zn&&(E=L-H);for(const U of p)Math.abs(D+O-U.left)<zn&&(D=U.left-O),Math.abs(D-U.right)<zn&&(D=U.right),Math.abs(E+H-U.top)<zn&&(E=U.top-H),Math.abs(E-U.bottom)<zn&&(E=U.bottom),Math.abs(E-U.top)<zn&&(E=U.top);h({x:Math.max(0,D),y:Math.max(0,E)})},j=()=>{document.removeEventListener("mousemove",z),document.removeEventListener("mouseup",j)};document.addEventListener("mousemove",z),document.addEventListener("mouseup",j)},[e,g,u,p,a,f]);return f?o.jsxs("div",{ref:_,className:`dp dp--mobile ${m?"dp--min":""}`,onClick:()=>u==null?void 0:u(e),children:[o.jsxs("div",{className:"dp__bar dp__bar--mobile",onClick:()=>b(y=>!y),children:[o.jsx("span",{className:"dp__title",children:n}),o.jsx("span",{className:"dp__min-btn dp__min-btn--mobile",children:m?"▼":"▲"})]}),!m&&o.jsx("div",{className:"dp__body dp__body--mobile",children:s}),o.jsx("style",{children:zd})]}):o.jsxs("div",{ref:_,className:`dp ${m?"dp--min":""}`,style:{left:g.x,top:g.y,width:a,height:m?void 0:r,minHeight:m?0:i,zIndex:c},onMouseDown:()=>u==null?void 0:u(e),children:[o.jsxs("div",{className:"dp__bar",onMouseDown:x,children:[o.jsx("span",{className:"dp__title",children:n}),o.jsx("button",{className:"dp__min-btn",onMouseDown:y=>y.stopPropagation(),onClick:()=>b(y=>!y),title:m?"展开":"最小化",children:m?"▢":"▬"})]}),!m&&o.jsx("div",{className:"dp__body",children:s}),o.jsx("style",{children:zd})]})}const zd=`
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

/* ═══════════════════════════════════════════════════════
   Mobile Overrides — Stacked full-width panels
   ═══════════════════════════════════════════════════════ */
.dp--mobile {
  position: relative !important;
  left: auto !important;
  top: auto !important;
  width: 100% !important;
  height: auto !important;
  min-height: 0 !important;
  border-radius: 0;
  border-left: none;
  border-right: none;
  box-shadow: none;
  z-index: auto !important;
  border-bottom: 1px solid rgba(0, 240, 255, 0.15);
}
.dp--mobile + .dp--mobile {
  border-top: none;
}
.dp__bar--mobile {
  cursor: pointer;
  min-height: 44px;
  padding: 8px 14px;
}
.dp__bar--mobile .dp__title {
  pointer-events: auto;
  font-size: 0.8rem;
}
.dp__min-btn--mobile {
  width: 44px;
  height: 44px;
  font-size: 1rem;
  color: rgba(0, 240, 255, 0.6);
  border: none;
  min-height: 0;
  min-width: 0;
}
.dp__body--mobile {
  max-height: 50vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
`,Yt=48,qr=["#00f0ff","#ff00c8","#00cc88","#ff8800","#6688ff","#cc44ff","#44dddd","#ff4466"],Ex=[{facing:"N",label:"↑N",title:"朝北"},{facing:"S",label:"↓S",title:"朝南"},{facing:"E",label:"→E",title:"朝东"},{facing:"W",label:"←W",title:"朝西"}],Ad=.25,Dx=2,Vd=.1;function $x({onBack:e}){const{state:n,dispatch:t}=Ne(),a=Ze.find(P=>P.id===n.map.id)??n.map,r=n.playerIds,i=a.width,s=a.height,c=w.useRef(null),[d,u]=w.useState({x:0,y:0,scale:1}),p=w.useRef(null),f=w.useRef(!1);w.useEffect(()=>{const P=c.current;if(!P)return;const R=P.clientWidth,Z=P.clientHeight,Q=i*Yt,ne=s*Yt;if(!R||!Z)return;const te=Math.min(R/Q,Z/ne),Y=Math.max(Ad,Math.min(1.2,te)),ce=(R-Q*Y)/2,re=(Z-ne*Y)/2;u({x:ce,y:re,scale:Y})},[i,s]),w.useEffect(()=>{const P=c.current;if(!P)return;const R=Z=>{Z.preventDefault();const Q=Z.deltaY<0?Vd:-Vd;u(ne=>({...ne,scale:Math.min(Dx,Math.max(Ad,ne.scale+Q))}))};return P.addEventListener("wheel",R,{passive:!1}),()=>P.removeEventListener("wheel",R)},[]);const g=w.useCallback(P=>{P.button===0&&(p.current={startX:P.clientX,startY:P.clientY,origX:d.x,origY:d.y},f.current=!1)},[d.x,d.y]),h=w.useCallback(P=>{if(!p.current)return;const R=P.clientX-p.current.startX,Z=P.clientY-p.current.startY;!f.current&&Math.sqrt(R*R+Z*Z)>5&&(f.current=!0),f.current&&u(Q=>({...Q,x:p.current.origX+R,y:p.current.origY+Z}))},[]),m=w.useCallback(()=>{p.current=null,f.current=!1},[]),b=w.useMemo(()=>Object.keys(a.startZones).map(Number).sort((P,R)=>P-R),[a]),[_,v]=w.useState(()=>{const P={};for(let R=0;R<n.teamCount;R++)P[R]=R;return P});w.useEffect(()=>{const P={};for(let R=0;R<n.teamCount;R++)P[R]=R;v(P)},[a.id,n.teamCount]);function x(P,R){v(Z=>{const Q=Object.entries(Z).find(([,te])=>te===R),ne={...Z,[P]:R};return Q&&(ne[Number(Q[0])]=Z[P]),ne})}const y=w.useMemo(()=>{const P=new Map;for(let R=0;R<n.teamCount;R++){const Z=_[R]??R,Q=a.startZones[Z];if(Q)for(const ne of Q){const te=`${ne.row},${ne.col}`,Y=P.get(te)??[];Y.push(R),P.set(te,Y)}}return P},[a,n.teamCount,_]),k=w.useMemo(()=>{const P={};for(const R of r){const Z=n.teams[R];P[Z]||(P[Z]=[]),P[Z].push(R)}return P},[r,n.teams]),[T,z]=w.useState(r[0]),[j,S]=w.useState(""),D=w.useMemo(()=>{for(const P of r){const R=n.players[P];if(!R)return!1;const Z=n.teams[P],Q=_[Z]??Z,ne=a.startZones[Q];if(!ne||!ne.some(Y=>Y.row===R.position.row&&Y.col===R.position.col))return!1}return!0},[r,n.players,n.teams,_,a]);function E(P,R){t({type:"SET_SPAWN_POSITION",playerId:P,position:R})}function $(P,R){t({type:"SET_SPAWN_FACING",playerId:P,facing:R})}function L(){D&&t({type:"CONFIRM_SETUP"})}function M(P){const R=r.indexOf(P);return qr[R%qr.length]}function O(P){var Z;const R=(Z=k[P])==null?void 0:Z[0];return R?M(R):qr[P%qr.length]}const H=w.useMemo(()=>{const P=new Map;for(const R of r){const Z=n.players[R];if(!Z)continue;const Q=q.find(Y=>Y.id===Z.unitId);if(!Q)continue;const ne=`${Z.position.row},${Z.position.col}`,te=P.get(ne)??[];te.push({pid:R,color:M(R),tokenId:Q.tokenId,name:Q.nameCn}),P.set(ne,te)}return P},[r,n.players]),{x:B,y:U,scale:N}=d,V=220,F=w.useMemo(()=>{const P={},te=Math.floor((window.innerHeight-56-60)/192);return r.forEach((Y,ce)=>{const re=Math.floor(ce/te),Ie=ce%te;P[Y]={x:window.innerWidth-(V+16)*(re+1),y:56+Ie*192}}),P},[r]);return o.jsxs("div",{className:"ssm__screen",children:[o.jsxs("div",{className:"ssm__topbar",children:[o.jsx("button",{className:"ssm__back-btn",onClick:e,children:"← 返回"}),o.jsx("span",{className:"ssm__title",children:"选择出击位置"}),o.jsxs("span",{className:"ssm__map-name",children:[a.nameCn," (",s,"×",i,")"]}),o.jsx("span",{style:{flex:1}}),o.jsx("button",{className:`ssm__start-btn${D?"":" ssm__start-btn--disabled"}`,onClick:L,disabled:!D,title:D?"开始战斗":"所有玩家必须先选择出击位置",children:"战斗开始 ▶"})]}),o.jsx("div",{className:"ssm__viewport",ref:c,onMouseDown:g,onMouseMove:h,onMouseUp:m,onMouseLeave:m,children:o.jsx("div",{className:"ssm__map-inner",style:{transform:`translate(${B}px, ${U}px) scale(${N})`,transformOrigin:"top left",display:"grid",gridTemplateColumns:`repeat(${i}, ${Yt}px)`,gridTemplateRows:`repeat(${s}, ${Yt}px)`},children:a.cells.flatMap((P,R)=>P.map((Z,Q)=>{const ne=ec(Z),te=`${R},${Q}`,Y=y.get(te)??[],ce=H.get(te)??[],re=Y.length>0,Ie=Y.length>0?O(Y[0]):"",qe=n.teams[T],Ke=re&&Y.includes(qe);let Je="ssm__cell";re&&(Je+=" ssm__cell--zone"),Ke&&(Je+=" ssm__cell--placeable"),ce.length>0&&(Je+=" ssm__cell--selected");function Sn(ie){f.current||(ie.stopPropagation(),Ke&&E(T,{row:R,col:Q}))}return o.jsxs("div",{className:Je,style:{backgroundImage:`url("${ne}")`,...re?{borderColor:Ie,boxShadow:ce.length>0?`inset 0 0 10px ${Ie}66, 0 0 6px ${Ie}44`:void 0}:{}},onClick:Ke?Sn:void 0,children:[ce.length===1&&o.jsx("div",{className:"ssm__token",children:o.jsx("img",{src:`/assets/tokens/${ce[0].tokenId}`,alt:ce[0].name,style:{boxShadow:`0 0 6px ${ce[0].color}`},onError:ie=>{ie.target.style.opacity="0.3"}})}),ce.length>1&&o.jsx("div",{className:"ssm__token ssm__token--multi",children:ce.map(ie=>o.jsx("img",{src:`/assets/tokens/${ie.tokenId}`,alt:ie.name,className:"ssm__token-img-sm",style:{boxShadow:`0 0 4px ${ie.color}`},onError:ja=>{ja.target.style.opacity="0.3"}},ie.pid))})]},te)}))})}),r.map((P,R)=>{var Sn;const Z=n.players[P],Q=q.find(ie=>ie.id===(Z==null?void 0:Z.unitId)),ne=M(P),te=j===P,Y=T===P,ce=n.teams[P],re=((Sn=k[ce])==null?void 0:Sn[0])===P,Ie=_[ce]??ce,qe=_[ce]??ce,Je=(a.startZones[qe]??[]).some(ie=>ie.row===Z.position.row&&ie.col===Z.position.col);return o.jsx(ke,{id:`spawn-${P}`,title:`P${R+1} ${(Q==null?void 0:Q.nameCn)??"—"}`,initialPos:F[P]??{x:100,y:100},width:V,minHeight:60,zIndex:te?50:10+R,onFocus:()=>{S(P),z(P)},children:o.jsxs("div",{className:`ssm__player-card${Y?" ssm__player-card--active":""}`,style:{borderTop:`2px solid ${ne}`},onClick:()=>z(P),children:[o.jsxs("div",{className:"ssm__player-label",style:{color:ne},children:["P",R+1," ",Y?"◄ 放置中":""," ",Je?"✓":""]}),re&&o.jsx("div",{className:"ssm__zone-select",children:o.jsxs("label",{children:["出击区域:",o.jsx("select",{value:Ie,onChange:ie=>x(ce,Number(ie.target.value)),onClick:ie=>ie.stopPropagation(),children:b.slice(0,a.maxTeams).map(ie=>o.jsxs("option",{value:ie,children:["区域 ",ie+1]},ie))})]})}),o.jsx("div",{className:"ssm__unit-name",children:(Q==null?void 0:Q.nameCn)??"—"}),o.jsxs("div",{className:"ssm__pos-display",children:["格 (",Z.position.row,", ",Z.position.col,")"]}),o.jsx("div",{className:"ssm__facing-grid",children:Ex.map(({facing:ie,label:ja,title:Yf})=>{const fc=Z.facing===ie;return o.jsx("button",{className:`ssm__facing-btn${fc?" ssm__facing-btn--active":""}`,style:fc?{borderColor:ne,color:ne}:void 0,title:Yf,onClick:()=>$(P,ie),children:ja},ie)})})]})},P)}),o.jsx("style",{children:zx})]})}const zx=`
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
`;function Ax({onStart:e,onOnlinePlay:n,onViewRules:t,onViewData:a,onLoadGame:r,onReplay:i,onMapEditor:s,exposureMode:c,onToggleExposure:d,autoFill:u,onToggleAutoFill:p}){return o.jsxs("div",{className:"hs-screen",children:[o.jsxs("div",{className:"hs-center",children:[o.jsx("h1",{className:"hs-title",children:"Embryo Machine"}),o.jsx("p",{className:"hs-subtitle",children:"战棋机甲对战游戏"}),o.jsx("div",{className:"hs-divider"}),o.jsx("button",{className:"hs-btn hs-btn--primary",onClick:e,children:"▶ 开始游戏"}),o.jsx("button",{className:"hs-btn hs-btn--online",onClick:n,children:"联机对战"}),o.jsx("button",{className:"hs-btn hs-btn--secondary",onClick:r,children:"📂 加载存档"}),o.jsx("button",{className:"hs-btn hs-btn--secondary",onClick:i,children:"🎬 回放录像"}),o.jsx("div",{className:"hs-divider hs-divider--sm"}),o.jsxs("div",{className:"hs-settings",children:[o.jsxs("label",{className:"hs-toggle",onClick:d,children:[o.jsx("span",{className:`hs-toggle__switch${c?" hs-toggle__switch--on":""}`,children:o.jsx("span",{className:"hs-toggle__knob"})}),o.jsx("span",{className:"hs-toggle__label",children:"暴露模式"}),o.jsx("span",{className:"hs-toggle__hint",children:c?"已开启：所有隐藏卡牌将显示正面":"关闭"})]}),o.jsxs("label",{className:"hs-toggle",onClick:p,children:[o.jsx("span",{className:`hs-toggle__switch${u?" hs-toggle__switch--on":""}`,children:o.jsx("span",{className:"hs-toggle__knob"})}),o.jsx("span",{className:"hs-toggle__label",children:"自动补位"}),o.jsx("span",{className:"hs-toggle__hint",children:u?"已开启：空位自动随机选机由AI控制":"关闭"})]})]}),o.jsx("div",{className:"hs-divider hs-divider--sm"}),o.jsxs("div",{className:"hs-links",children:[o.jsx("button",{className:"hs-link-btn",onClick:s,children:"🗺️ 地图编辑器"}),o.jsx("button",{className:"hs-link-btn",onClick:t,children:"📖 游戏规则"}),o.jsx("button",{className:"hs-link-btn",onClick:a,children:"📊 游戏资料"})]})]}),o.jsx("style",{children:Vx})]})}const Vx=`
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

/* ═══════════════════════════════════════════════════════
   Mobile Responsive Overrides
   ═══════════════════════════════════════════════════════ */
@media (max-width: 768px) {
  .hs-title {
    font-size: 1.8rem;
  }

  .hs-btn {
    padding: 14px 24px;
    font-size: 0.95rem;
    min-height: 48px;
    max-width: 100%;
  }

  .hs-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
  }

  .hs-link-btn {
    padding: 10px 16px;
    font-size: 0.82rem;
    min-height: 44px;
    min-width: 44px;
  }

  .hs-toggle {
    padding: 10px 14px;
  }

  .hs-toggle__hint {
    font-size: 0.68rem;
  }
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
`;function Px({phase:e,loaded:n,total:t,onConfirm:a,onSkip:r}){const i=t>0?Math.round(n/t*100):0,s=n>=t&&t>0;return o.jsxs("div",{className:"apd-overlay",children:[o.jsxs("div",{className:"apd-box",children:[e==="asking"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"apd-icon",children:"⚠"}),o.jsx("h2",{className:"apd-title",children:"资源未完全缓存"}),o.jsxs("p",{className:"apd-body",children:["检测到游戏图像资源（卡牌、地形、地图等）尚未完全缓存。",o.jsx("br",{}),"首次加载游戏时可能出现图片闪烁或延迟。"]}),o.jsxs("p",{className:"apd-body apd-body--sub",children:["是否现在一次性加载全部资源？",o.jsx("br",{}),o.jsxs("span",{className:"apd-hint",children:["共约 ",t," 张图片，需要较短等待时间。"]})]}),o.jsxs("div",{className:"apd-actions",children:[o.jsx("button",{className:"apd-btn apd-btn--primary",onClick:a,children:"是，立即加载"}),o.jsx("button",{className:"apd-btn apd-btn--secondary",onClick:r,children:"否，边玩边加载"})]})]}),e==="loading"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"apd-icon",children:s?"✓":"↓"}),o.jsx("h2",{className:"apd-title",children:s?"加载完成":"正在加载资源…"}),o.jsx("div",{className:"apd-bar-track",children:o.jsx("div",{className:"apd-bar-fill",style:{width:`${i}%`}})}),o.jsxs("p",{className:"apd-progress-text",children:[n," / ",t,"  (",i,"%)"]}),s&&o.jsx("p",{className:"apd-body apd-body--sub",children:"资源已全部缓存，正在进入游戏…"})]})]}),o.jsx("style",{children:Lx})]})}const Lx=`
.apd-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.82);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.apd-box {
  background: var(--color-bg-panel);
  border: 1px solid var(--color-accent);
  border-radius: 8px;
  box-shadow: 0 0 32px rgba(0, 240, 255, 0.18);
  padding: 36px 32px 28px;
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
}

.apd-icon {
  font-size: 2rem;
  color: var(--color-accent);
  line-height: 1;
}

.apd-title {
  font-size: 1.15rem;
  color: var(--color-accent);
  margin: 0;
  letter-spacing: 0.04em;
}

.apd-body {
  font-size: 0.88rem;
  color: var(--color-text);
  margin: 0;
  line-height: 1.6;
}

.apd-body--sub {
  color: var(--color-text-muted);
}

.apd-hint {
  font-size: 0.78rem;
  font-family: var(--font-mono);
  color: var(--color-text-muted);
}

.apd-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-top: 4px;
}

.apd-btn {
  width: 100%;
  padding: 13px 24px;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: background 0.15s, color 0.15s, opacity 0.15s;
}

.apd-btn--primary {
  background: var(--color-accent);
  color: #000;
}
.apd-btn--primary:hover {
  background: var(--color-accent-hover);
}

.apd-btn--secondary {
  background: transparent;
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
}
.apd-btn--secondary:hover {
  border-color: var(--color-accent);
  color: var(--color-text);
}

/* Progress bar */
.apd-bar-track {
  width: 100%;
  height: 10px;
  background: var(--color-bg);
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid var(--color-border);
}

.apd-bar-fill {
  height: 100%;
  background: var(--color-accent);
  border-radius: 5px;
  transition: width 0.12s linear;
  box-shadow: 0 0 8px rgba(0, 240, 255, 0.5);
}

.apd-progress-text {
  font-size: 0.82rem;
  font-family: var(--font-mono);
  color: var(--color-text-muted);
  margin: 0;
}

@media (max-width: 480px) {
  .apd-box {
    padding: 28px 20px 22px;
  }
}
`,Rx={"72ea91e355f9729a4f906f4a5981ccb94deb6c3a1eb4c9a4f255cbc86ac068a5":"/assets/cards/ag/ag-7-front.jpg",de64d1812f33cab1363e0191b2e1fe10766940cf72c1ae602a1537d6d59dee87:"/assets/ui/card-back.jpg",ca3a08c40eed141b502fe1a227ec29253a864fba0fda52930a7e55d1910a6698:"/assets/cards/ag/ag-3-front.jpg","00fec5279b30da9801db7c84419764909d349e1c210543de132af209cd3f0abd":"/assets/cards/ag/ag-4-front.jpg","608720fd8dcc5e7fe60d00f88b206e99c0688cfc20ef38f4eea05359b2ec0861":"/assets/cards/ag/ag-5-front.jpg",b0389d207312bbef32c2910744518f6f30c73796f27e573cfaec51c355862a97:"/assets/cards/ag/ag-6-front.jpg","29fa020388f199454a71e6673a19d76c4aafc4e8e8f34af0a9eeafe41c172391":"/assets/cards/ag/ag-8-front.jpg",c25abc7656b2d1eb27be27d09fecde25fd22427409e5afc79caf0ee09a8ff4f0:"/assets/cards/ag/ag-11-front.jpg","31e6d6800110b0ebfe8793074ba169f13b6fa02ea67f7e77739a4bf003670ba1":"/assets/cards/ag/ag-18-front.jpg","9762039c262e506e6bddc0449ed1ddc0449d1c6234afba1327ebfdb81a388e54":"/assets/cards/ag/ag-12-front.jpg",aa1286d4f7814991279a7aac4a75c0b194b8e7f9d6510fb8e63362939d04ec1e:"/assets/cards/ag/ag-14-front.jpg",dfe234f8d5372742a6ed4ab9f521f1ad9c693a228003aad19750c34aa7d1d49b:"/assets/cards/ag/ag-21-front.jpg","12e25c69082cbfe495f5dc49006c7c5aebc1f73574c59c39ffc5ed5b8b2fbc6d":"/assets/cards/ag/ag-17-front.jpg","9ba8361aa29742693bc83360c55e367632471dfea59493136210cfd09fd1aa48":"/assets/cards/ag/ag-19-front.jpg","67a686db8c4db82340e640db02b289fb998f14b79ede162eaffb1d2f5488a3a4":"/assets/cards/ag/ag-20-front.jpg",eb56b8c9f9b270690d535f55ac55c846dae5537649cec7021639211ff7f6cc22:"/assets/cards/ag_plus/ag_plus-2-front.jpg",e4c12ee3ba0ef3bd8c2ee9b1bb41e74c404f09b62dba8cb2e35faa2e520895e5:"/assets/cards/ag_plus/ag_plus-3-front.jpg","8f2248399528f6a051509d01cc0c78398afd381b7ad8f9915ab6381297026282":"/assets/cards/ag_plus/ag_plus-4-front.jpg",ebac68b5f2d7cf81a64094a12da6386a77e2434776de373d72ed8be4ba13159c:"/assets/cards/ag_plus/ag_plus-5-front.jpg","35999dd2727c1847d4a12d8061029cf3555bdbb7452b03c3978443401ac1022c":"/assets/cards/ar/ar-1-front.jpg","2f4a7328aaa21e26023208758042e122b483ca242c1b95ee4c64952eb7bb1dc3":"/assets/cards/ar/ar-2-front.jpg",c414ed84946840c69b6bdc4393af27f50d70a81b56a8c1849d1bfdaaa27531c1:"/assets/cards/ar/ar-4-front.jpg","9eca454c2c4f5cdb16902adfa101484f2257d1a9fe6c7985d3aaba990982c725":"/assets/cards/ar/ar-5-front.jpg",dc0d77a5ec25f65aa1ab091a1ede028f7fb1f7ebfbea4945b907adef2ece4281:"/assets/cards/ar/ar-13-front.jpg","6fbefeb90155b45f8872740038dfa38116530750caa1e623a99bab29b5f40a21":"/assets/cards/ar/ar-14-front.jpg","33a35f67e85d189889a7e8fa66ff1719a0d2680027105d1075f802d94d772bb4":"/assets/cards/ar/ar-8-front.jpg","6e7e1e6dde63265f8df8809db768b684e794f4331f9c3d7f4185a1dc612c0701":"/assets/cards/ar/ar-9-front.jpg","2f73e47fe817e7ae747aee252cc07cc1d556c8bd1b2acdf54f9a678f1ff51e02":"/assets/cards/ar/ar-12-front.jpg",aecf39488eb7018c47ea85aa4073aad5f196b9440e2c9248ed960d91e6696f22:"/assets/cards/ar/ar-15-front.jpg",cf41932a7f074826ffbd6c2e14e3bb173d95e38982bac18c2bf04773923903dd:"/assets/cards/ar/ar-16-front.jpg",cfe5a7626bb3fb179d3d056519cf477fa9bd6db3e441a7d7b3204eb4f8e5c2cb:"/assets/cards/ar/ar-17-front.jpg",a26a8dd85af73fe69b123ac4e0beae7cac68442afe22c8d44bf0312a9081381d:"/assets/cards/ar/ar-18-front.jpg","6b6d4acdc02336939dff11c9c962d9f4fe1246ee51003dfc1a70569ebd740664":"/assets/cards/ar/ar-19-front.jpg","2d5acd9b8353db95858fc7dbdcae061bda7df49032e5aea255431ad33aca98d0":"/assets/cards/ar/ar-20-front.jpg",a2d445e888ff59aa58f2ad514a9a031b486a3d56621fa7ddb5f930a045a513b2:"/assets/cards/ar_plus/ar_plus-1-front.jpg",fd85ee9cb1b56cfc5f7e5284a4cf1c67f406b29a068253f7164ea628c1e5c43a:"/assets/cards/ar_plus/ar_plus-4-front.jpg","48cbd3a065ccfa5cbcba4f0247cb0fcf166291740d54ca162580765e5d5c1d4e":"/assets/cards/ar_plus/ar_plus-3-front.jpg",f395a843fb92ff32392d84d9c8dde21b95bf3bf41b8eb787d5d8480878952bcb:"/assets/cards/bg/bg-4-front.jpg","193f6b1b0a647be282bb1b7d5013924039743a46a48383f64d5cb726859f25aa":"/assets/cards/bg/bg-14-front.jpg","0e54f575524cacb092b31f8983a537c18487fdf7405caa924653a39e4bc544db":"/assets/cards/bg/bg-16-front.jpg","2fce52c5e8cde4295b30baed6b7de68e6a2839f5e086d7e1e530ea996ffe0435":"/assets/cards/bg/bg-12-front.jpg",a391b8c4020883f8d080a6e6e83864670158aef7be5eab6d7b348ef6e6b93d10:"/assets/cards/bg/bg-15-front.jpg",fd79d96009f9b66e23c02f25edfcce4a13fdf61c3fe8188269cf83916766df31:"/assets/cards/bg/bg-18-front.jpg",ad7a449d1edd5300a57a8bae2cab2a607d5422ea37c397b7c8c69df5b3096502:"/assets/cards/bg/bg-13-front.jpg","8571242343bc19329436ac669a422140b9dfbc7544cf1de2ec298eef9b3a9257":"/assets/cards/bg/bg-17-front.jpg","64ba521997fc2f8ddbb544dd45bcc58e3145822f4927860039ec7a7921d01757":"/assets/cards/bg/bg-19-front.jpg",ab0196704ba0510bc85e9e58e6bb8323c43cddc2e8f986e6ad79a11852e2c421:"/assets/cards/bg/bg-20-front.jpg","8514e5d83cf922f035f5600a0e96d2bf3ae85d064807759af4f08155ffbe6145":"/assets/cards/bg/bg-21-front.jpg",f495acab04c9e7b539619082b1c7eab387e329794a866f80f4d49f3b8f1f693e:"/assets/cards/bg/bg-23-front.jpg",d4e423814ead1fd2c384492fac1be79e014d771712d0db3c78d93b4e2daf6699:"/assets/cards/bg_plus/bg_plus-1-front.jpg","602d9c6187bb0bb67e3435b95461e1d0f6aa432b5408d2addfe77416d08b2862":"/assets/cards/bg_plus/bg_plus-3-front.jpg",e97efab0e571ea9441ecfcef69388ac5833e96b52f196073127b5930532f920d:"/assets/cards/bg_plus/bg_plus-4-front.jpg","9e27878685e0972914ec6db331732131c20f51b80aef11ca2ed7850338dc56a5":"/assets/cards/bg_plus/bg_plus-5-front.jpg","50793b3633188783f2e78b770a325549b99cc2b0cae8be0f837c1c1bd7958bcd":"/assets/cards/ho/ho-1-front.jpg","23be89f666a01394bded8d8b4e845a176efe96c1e33b40d9edacf15c715a3dd9":"/assets/cards/ho/ho-2-front.jpg",f9b7e9cd2182ade25b13d7355f2297ca1bedd4426b653e89a45aa14ce6221ff6:"/assets/cards/ho/ho-3-front.jpg","120ffbd79d44d8dce99f704baf79e62487e73935e18b8e18bec3fe352e603da0":"/assets/cards/ho/ho-4-front.jpg","926cccef6ed7a746b53a370664d9b1e60fb27d976c4707a0f34e390dcd7ef985":"/assets/cards/ho/ho-5-front.jpg","17b7289bdbdf1c8fc0ddf23c146d0b51e2c66e8e70a20545e64685e087f78496":"/assets/cards/ho/ho-6-front.jpg","38309819fe704c2f7e58cd5c35110ca71a78198b221595d966f711f4ee17d558":"/assets/cards/ho/ho-15-front.jpg","002453cf5ab95a93e69365838d45c421e90a106e3c0bbe20d038355a8495827e":"/assets/cards/ho/ho-8-front.jpg",da0d31d7f836a648f062ee69c549fe2b3806fcc729015bcff634ea427bc94c54:"/assets/cards/ho/ho-9-front.jpg","49d1feafa8f7a1608f6ea2c9205581b056cd4d3a352a903b065be7b613d73d93":"/assets/cards/ho/ho-10-front.jpg",e23e9d4556a4c1f84670f09e14f3abb1050f0effd6b004b190bb0d51c0567a16:"/assets/cards/ho/ho-12-front.jpg",ef5f963cdb85d776e30cc08f406812b628139e1c0762da6cdd76a995d526b132:"/assets/cards/ho/ho-14-front.jpg","76445d956a01a1a6759748880ff112510881dde7c531af86812ced9080f6027d":"/assets/cards/ho/ho-17-front.jpg","5dcb19c46fe4c87775c42969ee66a2e4edf407066eb7b6e9f75ae7f06c544237":"/assets/cards/ho_plus/ho_plus-1-front.jpg",d3608718aa56d2713c83f5d14a2957ae82680551c65c06caf10fa7aab623f2b4:"/assets/cards/ho_plus/ho_plus-2-front.jpg",c0138ea658ae0afcbfe06f7c46d1dfba00a459fd012b0c81aae9c63582923191:"/assets/cards/ho_plus/ho_plus-3-front.jpg","84f830f1410ddc1388ff00d0094af433f20688408ac72c20cfd5e90bf077a494":"/assets/cards/ho_plus/ho_plus-4-front.jpg","6d418c369626afc07e65702585463fa8d7e6dc9518dab01039c73a66907ed553":"/assets/cards/hy/hy-20-front.jpg","3e5c8c4b0dc1c5c6a2e65f80c779cda8035f41399837d032585b13c9a2e58d7b":"/assets/cards/hy/hy-7-front.jpg","9541ab0e2700ffb0df842826dd163204ef7832414a0bcaa1f54f7ac98fde834f":"/assets/cards/hy/hy-24-front.jpg",e8b1063f07dd998149120cc48ce4bb6d98a7bd93967160088eba9d96b710f421:"/assets/cards/hy/hy-8-front.jpg","4f64597b35d42ae5ff6c550c73830d48ef671f57d68ff01cc630e7b2ccaf43cd":"/assets/cards/hy/hy-10-front.jpg","91850bf85a43f889c8889936afdf4db90bde65dc9e65c1b5e0108a8932ac47a9":"/assets/cards/hy/hy-11-front.jpg","91c2ebb2087607ac70d7c081e0291cc298b78781e7e3faf2ec7fc86be248dfd4":"/assets/cards/hy/hy-13-front.jpg","640e4fcde89541cd02119f60f24deed7bad79a678cf1d99cce9e7ba73f71692e":"/assets/cards/hy/hy-14-front.jpg",b24622641e65a1b75e971a3e8c31a2bf0588ba84875b5bf7d03f27f0a63af9fc:"/assets/cards/hy/hy-19-front.jpg","1576e9779c12faed9bad26006fa8a12e7be0756ed264ea3b1deb05127d239b3c":"/assets/cards/hy/hy-21-front.jpg","3674a92a567de26b6304f6aebb9823606e1f72ce9e925d7488152e2f084ec86f":"/assets/cards/hy/hy-22-front.jpg","794136e3f4a27259a85a053cf7c7adc772875f6d5e042bb0eb4aa48d4b46e434":"/assets/cards/hy/hy-23-front.jpg",d17b8a6c61b023f8b09f9ffb1748e0de2eb751a638f2d376983ae14d0bd8564d:"/assets/cards/hy_plus/hy_plus-2-front.jpg",c8310aa2df0cdec2acf8913edbd16d60aaa22deab68867b14f70cd4bba59e4f6:"/assets/cards/hy_plus/hy_plus-5-front.jpg",a8188b32f23968b98e88cb685d8af599d5a2f6570f43f4330b189dd9ce669672:"/assets/cards/hy_plus/hy_plus-8-front.jpg","237ae5dbe95f95a334369a3f6d2c4f628bc2ef4c4cfda81f637169448b0b2a78":"/assets/cards/hy_plus/hy_plus-7-front.jpg",d7c9c03a695431a59b976da9ef1433b1969e905ce1b0f7165960910d8dcda7e7:"/assets/cards/lg/lg-1-front.jpg","54e91ee7019cf98518ceff5d5eb3ae24a2c490991d9ef700107919c1d7216133":"/assets/cards/lg/lg-2-front.jpg","5109d921c42001dd49deb4453c84680c485dbd03acbbf184db44c52e20df0947":"/assets/cards/lg/lg-3-front.jpg","238151d3ee802a63f7cfab27eba567809e0f434dd0ae7ab5cbfd67e17aab320c":"/assets/cards/lg/lg-4-front.jpg",cbd722c55b5f4530d1f909ee512accfb976e160669d861b03ba8a9f1ac812088:"/assets/cards/lg/lg-10-front.jpg","51cb5bbee96271ee7948d123f441fd961511c5664f85d880339ac81e76d297ce":"/assets/cards/lg/lg-12-front.jpg","5a50ab7bd0284e099caf5991bcaebf3fd5e2f6f852a41e8164548250372e13ee":"/assets/cards/lg/lg-13-front.jpg","8b83c2b2d3abe743003e29e8ace677d3669fee9012700fbd9405fb2581c2f1c1":"/assets/cards/lg/lg-14-front.jpg",e3f20637a74add18073f9b306a299693bccd9ff1318dd1cb35bb5b237ae03b3d:"/assets/cards/lg/lg-15-front.jpg","36b7cec7580d4de56edb5692bc83f9c3c08e4a94c7a75d3dca6b9aab5c70e886":"/assets/cards/lg/lg-21-front.jpg","307424a85866d9131ebaf92eee6aa49d75c7fe86937ebb0ddb7651431de5fc2d":"/assets/cards/lg/lg-18-front.jpg","653861f0980a12fb43cbfebda4071b3ca37e094bdc80c8698d0e183d90a83ed2":"/assets/cards/lg/lg-20-front.jpg","3f3a90dac9d0a565694982c55380f9b5fb3b914147aacd6b05c37a9ca8fd19d2":"/assets/cards/lg/lg-23-front.jpg","2b4298eafb47c327a290152fbccd471da28923c5769d2a645c574c16be6a039d":"/assets/cards/lg_plus/lg_plus-7-front.jpg","3074578f141dd1726916bf8e3e4532b4b82c72b7e2d30cbd3205b91609bbfbf2":"/assets/cards/lg_plus/lg_plus-3-front.jpg",bdd1e79a3a0f11fb4aeb486ae199ac2a971f957f90ce61439360e64f5c1ffc22:"/assets/cards/lg_plus/lg_plus-6-front.jpg",c3b9c862179da114428f8db2318e87e2770ad861b7bda0046c875ddaf884683c:"/assets/cards/lg_plus/lg_plus-8-front.jpg","3b6e2c61dd5d3c61e285d5c5f1bae42d08319f1ccd8ab950dabc7012fcae2ec8":"/assets/cards/lo/lo-12-front.jpg",ec8a31e551ec7a31602e8f6dfb7266c4dd377717704a34ee1647c288e9e64013:"/assets/cards/lo/lo-10-front.jpg","58a7b4c3f1fb01ee43a7269374ed04e71909609a51d488407b9754efcd055604":"/assets/cards/lo/lo-7-front.jpg",fdffe9ed90791948ae05fe76630b10ceca9d7bd442c41e2da584527d72ad98de:"/assets/cards/lo/lo-8-front.jpg",d4574f1615eb69b5470822b40ffd0d27da741f7f3e179c671c54290ca51afc0c:"/assets/cards/lo/lo-9-front.jpg",ab0f524c4935a2945d72db20beb4776d764df5de49672ed46e91eadce168e065:"/assets/cards/lo/lo-15-front.jpg","32297c12e7745ecb9bac5727434e7fff2784c25fe2b744d73f36218acc43b0b2":"/assets/cards/lo/lo-13-front.jpg",d9ef4060c364dea670bd525f0aad18687149d8797f5a9946c66b8f14681cff0f:"/assets/cards/lo/lo-14-front.jpg","7cabdc1509214622489311c85cc0cc2857daac93cb4fc31f515fb5fb638f6098":"/assets/cards/lo/lo-16-front.jpg",d2fc0f3677e4dd64bb2bf580951612085ce1f5a36d84742f94101ba0aeb0bebd:"/assets/cards/lo/lo-17-front.jpg","492722fef12f5835e2e0917c18b55b226be409f5f60973130cfda3daaba2a963":"/assets/cards/lo/lo-18-front.jpg","03b051e124ef4ec1c76498960f9a5317bdf1bd3f91973329062ce1b1a905c796":"/assets/cards/lo/lo-19-front.jpg",c9fdad2b74bc9c08941a4348c934616abadbc335d218914419e7972dc54aaa27:"/assets/cards/lo/lo-20-front.jpg","2753d376c59037359099d989ebc9ecdc6f35b0bcc1966a526919a62e9492ba5d":"/assets/cards/lo_plus/lo_plus-1-front.jpg","78e76504372580ad38ecea1cf6ca8b6eef7f24beb4bb173023d493a2900c9213":"/assets/cards/lo_plus/lo_plus-2-front.jpg",cfd41bad24efba992152437f01605cfa070b96c24171d158eb6b38c6e062b997:"/assets/cards/lo_plus/lo_plus-3-front.jpg","56b654c93edf5b33422b575efd3ece648df66bb3b245576bcb100db2cf463b90":"/assets/cards/lo_plus/lo_plus-4-front.jpg","83e4cf361d79bf56cab85b3165d8a502c3b6369a7d91d9d74008e7446ecee5aa":"/assets/cards/tr/tr-1-front.jpg",fac9e08ed1dd2007eff99f64f58456b8f28c887ea72caf3631798f19f586c2cf:"/assets/cards/tr/tr-2-front.jpg","49e88188dd73d2dc1889616077e7b3d3a01274be0936f3cf94b0ba13ffcdd3ec":"/assets/cards/tr/tr-3-front.jpg",f9ace908e376ccf677350bf8b04446db76d5b7810e1238eed78f9636917732d5:"/assets/cards/tr/tr-4-front.jpg",e176ed5572f8b0fec1afdf7338922f6287cb2bd7e8da531363f03afad38d2855:"/assets/cards/tr/tr-5-front.jpg",dcd6e5c81f720c301fdf8b8a9bdc7d1332f5d49d859cc3b7a888c4b47abb437c:"/assets/cards/tr/tr-8-front.jpg","7a3a4bc99a08007a8634615d14bb6e8701d8046b4b357e2e53a6816b1fa4b952":"/assets/cards/tr/tr-7-front.jpg","751ef0172ef4154fa9ada26cf0748253cbdb26e77ee5d7fbeb0cb448f0417815":"/assets/cards/tr/tr-9-front.jpg","637e9420cee8da61167a68a33b51a5955c1b96d79b8b104b70a8d721fcb76d2a":"/assets/cards/tr/tr-10-front.jpg","4096df60204fa108f6f86b2219c8a27d83e68a1ccb196df7df46de4392c2b41c":"/assets/cards/tr/tr-15-front.jpg",bf2f3bb722b82651f6eae93503ee371f2eb0aeb19a3c7048ee204c111f0f7eb4:"/assets/cards/tr/tr-13-front.jpg",e3e51452f907f7c993bd47093ca97798e5c685c2662bbf839e24c197bcdec634:"/assets/cards/tr/tr-17-front.jpg","188c6abac72e21173f1f0b02deb68d8204fe9d8773eea4bf01d633d170e226e4":"/assets/cards/tr/tr-19-front.jpg","9350f91bb06a35e92994e0129874a9c12e075ecde1d97595dc94424a3d445bdf":"/assets/cards/tr_plus/tr_plus-1-front.jpg","427ee044bae11fec56f65f194e7d6f8abcb7e904b199fc4a96c58ca93bfef239":"/assets/cards/tr_plus/tr_plus-3-front.jpg",e300e383916c326e28c6ced9e9705531a202a5daef21fdee6763ad2d11e3a2d8:"/assets/cards/tr_plus/tr_plus-5-front.jpg","7438c901962c7ce3370464463ea4f1e65b4d2a4ef220b5a4032115503fc32b0b":"/assets/cards/zb/zb-1-front.jpg","1c5ed46f16057ca9fa0f10685d323abe71b88b2a416eef661e520e9ff3a4fbcf":"/assets/cards/zb/zb-2-front.jpg","64fc21d85fcd6d3a3928ce9667186a0c8316e440396b6e6ebf162ed69ea6abeb":"/assets/cards/zb/zb-3-front.jpg","69f3d2ddd129e0a3b0a3245525786cf068b2e5eafc11897c9b83e4e208fc8270":"/assets/cards/zb/zb-4-front.jpg",a96dbaf805bf2dce31353b8d02732c389101196ac8220074dd161ad97ad3b61d:"/assets/cards/zb/zb-5-front.jpg",b15c50b1b10ce0e6ee1b76b5532ba9eed3b56cdf024ff27bc6d8c5195dcd76ff:"/assets/cards/zb/zb-15-front.jpg","04c9a1429211640a93676e76f7dfe02150d7e5cd921ee79222aa156800173a71":"/assets/cards/zb/zb-9-front.jpg",cf513f83dd7e6ac363f0aaa0a028c0527a164a283b340fb356b1f607b38a8a46:"/assets/cards/zb/zb-10-front.jpg","08a5474a86442dc9ddbfbebcf9994d7d5485108285168acaa865e44cc14d5462":"/assets/cards/zb/zb-12-front.jpg","732218f61fd334436d5359accff815df2d8c54adbeb7c402336e2f2b9f04b3cd":"/assets/cards/zb/zb-22-front.jpg",ce950419d660dcd87a9760439cf739ec7878df58f21a4af49a44cc4a2265c05b:"/assets/cards/zb/zb-17-front.jpg","7efd605546127d01ae40e1be52a64b45f4174bed74d1d9c8a15a6ba2d3129bc6":"/assets/cards/zb/zb-18-front.jpg","92c305b7877de46785ee7e5b4e5c92bf94c2e761047bb4d37d3fed4ec100d8d7":"/assets/cards/zb/zb-20-front.jpg","030fd7997dc5ccd629a0e184c0ac0ad1b33d1fff9366a4131c4a1d74dbe8a9c0":"/assets/cards/zb/zb-23-front.jpg","3b5c39538c0cf52273b845c15580993cc60e2a4a67f7c27b449243029108d538":"/assets/cards/zb_plus/zb_plus-6-front.jpg","4b42de4bbd91e229d41b666598cefd2a340285f228dc0395856b5b7a22b5381b":"/assets/cards/zb_plus/zb_plus-3-front.jpg","31cd007c783ba3389e6b0a7f3ce398515d65b3ab550aab70ebfcb3d86665ad52":"/assets/cards/zb_plus/zb_plus-4-front.jpg","39a0f3d3578f021253fac1a4fb293accd68267719a9bd4707fda7419257ccfc1":"/assets/cards/zb_plus/zb_plus-5-front.jpg","2a75d8802f569be782f6ca9ef865988ecefd6f447442dd8933154a8e70dd2895":"/assets/cards/強化機雷/強化機雷-16-front.jpg","506eb3f1ac120bb2d1a61d693b9b8f00ef56b788c42a231b9203fdad0ad3aed5":"/assets/ui/card-back.jpg","2e25e08a0277638ffbe37080471ac50fe51ab4e24ea0d52a5af46b7980f76340":"/assets/cards/陸上機雷/陸上機雷-20-front.jpg","149f2bc4a9dce26a9250c94e4a9338f0edf8c90a415c999216c00440ea0a3667":"/assets/cards/ダミー/ダミー-20-front.jpg","444338c10747b07f50d0f5baeb6e9e014141c55507d748ae8d5001fe1b3e5ee3":"/assets/maps/444338c10747b07f50d0f5baeb6e9e014141c55507d748ae8d5001fe1b3e5ee3.jpg","04c1b08a573b97d5296d712ef796a7d9c5e4ed3200d8a4ae268295628de18e55":"/assets/maps/04c1b08a573b97d5296d712ef796a7d9c5e4ed3200d8a4ae268295628de18e55.jpg","9e3fcbc86b5a5563c4bb5566031e7c1fd35fda1f32d981a242889b0c2561049c":"/assets/maps/9e3fcbc86b5a5563c4bb5566031e7c1fd35fda1f32d981a242889b0c2561049c.jpg","582cf873071464b2f3ca6232d0a20b36347ffa948125d0642b330b4d8dc9c478":"/assets/maps/582cf873071464b2f3ca6232d0a20b36347ffa948125d0642b330b4d8dc9c478.jpg","0f7fd469ef1f476fc05c15df2f949f575920a92751d52fc7135f2490eb035118":"/assets/maps/0f7fd469ef1f476fc05c15df2f949f575920a92751d52fc7135f2490eb035118.jpg","224304b43b96cc1dcfb865ed84556e7b06f4068c3a5fd8c21b342a8c53c36a72":"/assets/maps/224304b43b96cc1dcfb865ed84556e7b06f4068c3a5fd8c21b342a8c53c36a72.jpg","9429fd9c15d9a339f30f6cd8ad890af69a9570e0347267c2d6636091aec8266f":"/assets/maps/9429fd9c15d9a339f30f6cd8ad890af69a9570e0347267c2d6636091aec8266f.jpg","44f518c3e3df7c83027cf6ee5990dd411a6b828f9a6d5ed1717f0a352c1654e0":"/assets/maps/44f518c3e3df7c83027cf6ee5990dd411a6b828f9a6d5ed1717f0a352c1654e0.jpg",f0abd1d4ae4b2039ed4d1b54562a66a6c9fe9b718582f6946893f42ab522a53b:"/assets/maps/f0abd1d4ae4b2039ed4d1b54562a66a6c9fe9b718582f6946893f42ab522a53b.jpg","3f14f36d964a2093258d568ac4ce3691a767cd369f3ec5ec6679a610e9f6d9bb":"/assets/maps/3f14f36d964a2093258d568ac4ce3691a767cd369f3ec5ec6679a610e9f6d9bb.jpg",e450e91d172a2414c49fef4702f6799f98b794e6ee77a412e28f81bf374ed853:"/assets/maps/e450e91d172a2414c49fef4702f6799f98b794e6ee77a412e28f81bf374ed853.jpg"},$f="embryo_preload_v1",Ox=["/assets/tiles/平地0.png","/assets/tiles/砂0.png","/assets/tiles/瓦礫0.png","/assets/tiles/瓦礫1.png","/assets/tiles/瓦礫2.png","/assets/tiles/瓦礫3.png","/assets/tiles/森0.png","/assets/tiles/森1.png","/assets/tiles/森2.png","/assets/tiles/森3.png","/assets/tiles/水0.png","/assets/tiles/水1.png","/assets/tiles/水2.png","/assets/tiles/高地1.png","/assets/tiles/高地2.png","/assets/tiles/高地3.png"],Kx=["/assets/tokens/AG-token.jpg","/assets/tokens/AR-token.jpg","/assets/tokens/BG-token.jpg","/assets/tokens/FO-token.jpg","/assets/tokens/HO-token.jpg","/assets/tokens/HY-token.jpg","/assets/tokens/LG-token.jpg","/assets/tokens/LO-token.jpg","/assets/tokens/TR-token.jpg","/assets/tokens/ZB-token.jpg"];function lc(){const e=new Set;for(const n of Object.values(fa))for(const t of n)e.add(`/assets/${t.frontImageId}`),e.add(`/assets/${t.backImageId}`);for(const n of Ox)e.add(n);for(const n of Object.values(Rx))n.startsWith("/assets/maps/")&&e.add(n);for(const n of Kx)e.add(n);return[...e]}function Jx(){try{const e=localStorage.getItem($f);if(!e)return!1;const{total:n}=JSON.parse(e);return n===lc().length}catch{return!1}}function Bx(e){localStorage.setItem($f,JSON.stringify({total:e,ts:Date.now()}))}async function Fx(e,n){const t=lc(),a=t.length;let r=0;e(0,a);const i=c=>new Promise(d=>{if(n!=null&&n.aborted){d();return}const u=new Image;u.onload=u.onerror=()=>{r++,e(r,a),d()},u.src=c}),s=10;for(let c=0;c<t.length&&!(n!=null&&n.aborted);c+=s)await Promise.all(t.slice(c,c+s).map(i));n!=null&&n.aborted||Bx(a)}const Xi=.4,Qi=2.5,Pd=.12,Ld=5;function Gx(e=1){const[n,t]=w.useState({x:0,y:0,scale:e}),a=w.useRef(null),r=w.useRef({x:0,y:0}),i=w.useRef(!1),s=w.useRef(null),c=w.useRef({x:0,y:0,scale:e});w.useLayoutEffect(()=>{const h=s.current;if(!h)return;const m=h.querySelector(".game-board");if(!m)return;const b=h.clientWidth,_=h.clientHeight,v=m.offsetWidth,x=m.offsetHeight;if(!b||!_||!v||!x)return;const y=Math.min(b/v,_/x),k=Math.min(Qi,Math.max(Xi,y)),T=(b-v*k)/2,z=(_-x*k)/2,j={x:T,y:z,scale:k};c.current=j,t(j)},[]),w.useEffect(()=>{const h=s.current;if(!h)return;const m=b=>{b.preventDefault();const _=b.deltaY<0?Pd:-Pd;t(v=>({...v,scale:Math.min(Qi,Math.max(Xi,v.scale+_))}))};return h.addEventListener("wheel",m,{passive:!1}),()=>h.removeEventListener("wheel",m)},[]),w.useEffect(()=>{const h=s.current;if(!h)return;let m=0,b=0,_=0,v=!1,x={x:0,y:0};const y=(j,S)=>Math.sqrt((S.clientX-j.clientX)**2+(S.clientY-j.clientY)**2),k=j=>{j.touches.length===1?(m=j.touches[0].clientX,b=j.touches[0].clientY,x={x:m,y:b},v=!1):j.touches.length===2&&(j.preventDefault(),_=y(j.touches[0],j.touches[1]),m=(j.touches[0].clientX+j.touches[1].clientX)/2,b=(j.touches[0].clientY+j.touches[1].clientY)/2)},T=j=>{if(j.touches.length===1){const S=j.touches[0].clientX-m,D=j.touches[0].clientY-b;if(!v){const E=j.touches[0].clientX-x.x,$=j.touches[0].clientY-x.y;Math.sqrt(E**2+$**2)>Ld&&(v=!0)}v&&(j.preventDefault(),t(E=>({...E,x:E.x+S,y:E.y+D}))),m=j.touches[0].clientX,b=j.touches[0].clientY}else if(j.touches.length===2){j.preventDefault();const S=y(j.touches[0],j.touches[1]),D=(j.touches[0].clientX+j.touches[1].clientX)/2,E=(j.touches[0].clientY+j.touches[1].clientY)/2;if(_>0){const M=S/_;t(O=>{const H=Math.min(Qi,Math.max(Xi,O.scale*M));return{...O,scale:H}})}const $=D-m,L=E-b;t(M=>({...M,x:M.x+$,y:M.y+L})),_=S,m=D,b=E}},z=j=>{j.touches.length<2&&(_=0),j.touches.length===0&&(v=!1),j.touches.length===1&&(m=j.touches[0].clientX,b=j.touches[0].clientY)};return h.addEventListener("touchstart",k,{passive:!1}),h.addEventListener("touchmove",T,{passive:!1}),h.addEventListener("touchend",z),h.addEventListener("touchcancel",z),()=>{h.removeEventListener("touchstart",k),h.removeEventListener("touchmove",T),h.removeEventListener("touchend",z),h.removeEventListener("touchcancel",z)}},[]);const d=w.useCallback(h=>{h.button===0&&(a.current={x:h.clientX,y:h.clientY},r.current={x:h.clientX,y:h.clientY},i.current=!1)},[]),u=w.useCallback(h=>{if(!a.current)return;const m=h.clientX-a.current.x,b=h.clientY-a.current.y,_=Math.sqrt(m*m+b*b);if(!i.current&&_>Ld&&(i.current=!0),i.current){const v=h.clientX-r.current.x,x=h.clientY-r.current.y;t(y=>({...y,x:y.x+v,y:y.y+x}))}r.current={x:h.clientX,y:h.clientY}},[]),p=w.useCallback(h=>{a.current=null,i.current=!1},[]),f=w.useCallback(()=>{a.current=null,i.current=!1},[]),g=w.useCallback(()=>{t(c.current)},[]);return{transform:n,viewportRef:s,isPanning:i.current,handlers:{onMouseDown:d,onMouseMove:u,onMouseUp:p,onMouseLeave:f},resetView:g}}function Ux({x:e,y:n,value:t}){return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"fx-damage-number",style:{left:e,top:n},children:["-",t]}),o.jsx("style",{children:Hx})]})}const Hx=`
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
`;function Wx({x:e,y:n,variant:t}){return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:`fx-impact fx-impact--${t}`,style:{left:e,top:n},children:[t==="melee"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"fx-impact__slash fx-impact__slash--1"}),o.jsx("div",{className:"fx-impact__slash fx-impact__slash--2"})]}),t==="ranged"&&o.jsx("div",{className:"fx-impact__beam"}),t==="charge"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"fx-impact__ring fx-impact__ring--1"}),o.jsx("div",{className:"fx-impact__ring fx-impact__ring--2"})]})]}),o.jsx("style",{children:Zx})]})}const Zx=`
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
`;function Yx({x:e,y:n}){return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"fx-explosion",style:{left:e,top:n},children:[o.jsx("div",{className:"fx-explosion__flash"}),o.jsx("div",{className:"fx-explosion__ring fx-explosion__ring--1"}),o.jsx("div",{className:"fx-explosion__ring fx-explosion__ring--2"}),o.jsx("div",{className:"fx-explosion__ring fx-explosion__ring--3"}),Array.from({length:8}).map((t,a)=>o.jsx("div",{className:"fx-explosion__particle",style:{"--angle":`${a*45}deg`,"--delay":`${a*20}ms`,"--dist":`${30+Math.random()*20}px`}},a))]}),o.jsx("style",{children:Xx})]})}const Xx=`
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
`;function Qx({defId:e,isAuxiliary:n,playerId:t}){const a=ee(e);if(!a)return null;const r=t==="player1"?"P1":"P2",i=t==="player1"?"var(--color-accent)":"#ff00c8";return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"fx-card-reveal",style:{position:"fixed",bottom:"80px",left:"50%",transform:"translateX(-50%)",zIndex:800,pointerEvents:"none"},children:[o.jsxs("div",{className:"fx-card-reveal__label",style:{color:i},children:[r," ",n?"抽到辅助卡":"抽牌"]}),o.jsx("div",{className:"fx-card-reveal__card",style:{borderColor:i},children:o.jsxs("div",{className:"fx-card-reveal__inner",children:[o.jsx("div",{className:"fx-card-reveal__back",children:o.jsx("img",{src:"/assets/ui/card-back.jpg",alt:"card back"})}),o.jsx("div",{className:"fx-card-reveal__front",children:o.jsx("img",{src:`/assets/${a.frontImageId}`,alt:a.nameCn})})]})}),o.jsxs("div",{className:"fx-card-reveal__name",style:{color:i},children:[a.nameCn,n&&o.jsx("span",{className:"fx-card-reveal__aux-badge",children:"辅助"})]})]}),o.jsx("style",{children:qx})]})}const qx=`
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
`;function ev({defId:e,isBomb:n,index:t,total:a}){const r=ee(e);if(!r)return null;const i=n?"fx-card-destroy--bomb":"";return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:`fx-card-destroy ${i}`,style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:810,pointerEvents:"none"},children:[o.jsxs("div",{className:"fx-card-destroy__card",children:[o.jsx("img",{src:`/assets/${r.frontImageId}`,alt:r.nameCn}),o.jsx("div",{className:"fx-card-destroy__flash"})]}),o.jsxs("div",{className:"fx-card-destroy__label",children:[r.nameCn," 被摧毁",n&&o.jsx("span",{className:"fx-card-destroy__bomb-badge",children:"💣 诱爆"})]}),o.jsxs("div",{className:"fx-card-destroy__counter",children:[t+1," / ",a]})]}),o.jsx("style",{children:nv})]})}const nv=`
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
`,qs=62,qi=Math.round(qs*(1042/756)),Rd=68,tv=6,Od=140;function av({p1Cards:e,p2Cards:n}){const[t,a]=w.useState("init"),[r,i]=w.useState(null);return w.useEffect(()=>{const s=document.querySelector(".unit-token-abs--p1"),c=document.querySelector(".unit-token-abs--p2"),d=s==null?void 0:s.getBoundingClientRect(),u=c==null?void 0:c.getBoundingClientRect();i({p1:d?{x:d.left+d.width/2,y:d.top+d.height/2}:{x:window.innerWidth*.3,y:window.innerHeight*.55},p2:u?{x:u.left+u.width/2,y:u.top+u.height/2}:{x:window.innerWidth*.7,y:window.innerHeight*.45}});const p=setTimeout(()=>a("fan"),50),f=setTimeout(()=>a("hold"),650),g=setTimeout(()=>a("cluster"),1650),h=setTimeout(()=>a("exit"),2e3);return()=>{[p,f,g,h].forEach(clearTimeout)}},[]),r?Sr.createPortal(o.jsxs("div",{style:{position:"fixed",inset:0,zIndex:900,pointerEvents:"none"},children:[o.jsx(Kd,{cards:e,origin:r.p1,phase:t,color:"#00f0ff",label:"P1"}),o.jsx(Kd,{cards:n,origin:r.p2,phase:t,color:"#ff8844",label:"P2"})]}),document.body):null}function Kd({cards:e,origin:n,phase:t,color:a,label:r}){if(e.length===0)return null;const i=e.length,c=(i-1)*Rd>window.innerWidth*.7?Math.floor(window.innerWidth*.7/Math.max(i-1,1)):Rd,d=t==="hold"||t==="cluster";return o.jsxs("div",{style:{position:"fixed",left:n.x,top:n.y},children:[o.jsxs("div",{style:{position:"absolute",top:-(Od+qi/2+28),left:0,transform:"translateX(-50%)",color:a,fontSize:"0.78rem",fontWeight:"bold",whiteSpace:"nowrap",textShadow:`0 0 10px ${a}, 1px 1px 3px #000`,opacity:d?1:0,transition:"opacity 250ms",letterSpacing:"0.06em"},children:[r,"  弃牌 ×",i]}),e.map((u,p)=>{const f=ee(u.defId),g=(i-1)/2,h=p-g,m=h*c,b=-Od,_=h*tv;let v,x,y,k,T;switch(t){case"init":v=0,x=0,y=0,k=.15,T=0;break;case"fan":case"hold":v=m,x=b,y=_,k=1,T=1;break;case"cluster":v=0,x=b,y=0,k=.85,T=1;break;case"exit":default:v=0,x=b-520,y=0,k=.2,T=0;break}const z=p*28;let j;switch(t){case"fan":j=[`transform 480ms cubic-bezier(0.34,1.56,0.64,1) ${z}ms`,`opacity   300ms ease-out ${z}ms`].join(", ");break;case"hold":j="none";break;case"cluster":j="transform 320ms ease-in, opacity 150ms ease-in";break;case"exit":j="transform 450ms ease-in, opacity 380ms ease-in 60ms";break;default:j="none"}return o.jsx("div",{style:{position:"absolute",width:qs,height:qi,left:-qs/2,top:-qi/2,borderRadius:5,overflow:"hidden",border:`1px solid ${a}55`,boxShadow:`0 6px 20px rgba(0,0,0,0.7), 0 0 8px ${a}44`,zIndex:p,transform:`translate(${v}px, ${x}px) rotate(${y}deg) scale(${k})`,opacity:T,transition:j,willChange:"transform, opacity"},children:f?o.jsx("img",{src:`/assets/${f.frontImageId}`,alt:f.nameCn,style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1}):o.jsx("div",{style:{width:"100%",height:"100%",background:"#222"}})},u.instanceId)})]})}const el=62,es=Math.round(el*(1042/756)),Jd=52,rv=5,Bd=120;function ov({playerId:e,count:n}){const[t,a]=w.useState("init"),[r,i]=w.useState(null),[s,c]=w.useState(null);if(w.useEffect(()=>{const u=e==="player1"?".mp__deck--p1":".mp__deck--p2",p=document.querySelector(u),f=document.querySelector(e==="player1"?".unit-token-abs--p1":".unit-token-abs--p2"),g=p==null?void 0:p.getBoundingClientRect(),h=f==null?void 0:f.getBoundingClientRect();i(g?{x:g.left+g.width/2,y:g.top+g.height/2}:{x:window.innerWidth*.5,y:window.innerHeight*.85}),c(h?{x:h.left+h.width/2,y:h.top+h.height/2}:{x:e==="player1"?window.innerWidth*.3:window.innerWidth*.7,y:e==="player1"?window.innerHeight*.55:window.innerHeight*.45});const m=setTimeout(()=>a("spread"),50),b=setTimeout(()=>a("hold"),600),_=setTimeout(()=>a("cluster"),900),v=setTimeout(()=>a("fly"),1200);return()=>{[m,b,_,v].forEach(clearTimeout)}},[e]),!r||!s)return null;const d=e==="player1"?"#00f0ff":"#ff8844";return Sr.createPortal(o.jsx("div",{style:{position:"fixed",inset:0,zIndex:900,pointerEvents:"none"},children:o.jsx(iv,{count:n,deckPos:r,mechaPos:s,phase:t,color:d,playerId:e})}),document.body)}function iv({count:e,deckPos:n,mechaPos:t,phase:a,color:r,playerId:i}){if(e===0)return null;const s=e,d=(s-1)*Jd>window.innerWidth*.6?Math.floor(window.innerWidth*.6/Math.max(s-1,1)):Jd,u=t.x-n.x,p=t.y-n.y,f=a==="hold"||a==="cluster",g=`${i==="player1"?"P1":"P2"} 抽牌 ×${s}`;return o.jsxs("div",{style:{position:"fixed",left:n.x,top:n.y},children:[o.jsx("div",{style:{position:"absolute",top:-(Bd+es/2+28),left:0,transform:"translateX(-50%)",color:r,fontSize:"0.78rem",fontWeight:"bold",whiteSpace:"nowrap",textShadow:`0 0 10px ${r}, 1px 1px 3px #000`,opacity:f?1:0,transition:"opacity 250ms",letterSpacing:"0.06em"},children:g}),Array.from({length:s},(h,m)=>{const b=(s-1)/2,_=m-b,v=_*d,x=-Bd,y=_*rv;let k,T,z,j,S;switch(a){case"init":k=0,T=0,z=0,j=.15,S=0;break;case"spread":case"hold":k=v,T=x,z=y,j=1,S=1;break;case"cluster":k=0,T=x,z=0,j=.85,S=1;break;case"fly":default:k=u,T=p,z=0,j=.2,S=0;break}const D=m*24;let E;switch(a){case"spread":E=[`transform 480ms cubic-bezier(0.34,1.56,0.64,1) ${D}ms`,`opacity   300ms ease-out ${D}ms`].join(", ");break;case"hold":E="none";break;case"cluster":E="transform 280ms ease-in, opacity 150ms ease-in";break;case"fly":E="transform 400ms cubic-bezier(0.4,0,1,1), opacity 300ms ease-in 80ms";break;default:E="none"}return o.jsx("div",{style:{position:"absolute",width:el,height:es,left:-el/2,top:-es/2,borderRadius:5,overflow:"hidden",border:`1px solid ${r}55`,boxShadow:`0 6px 20px rgba(0,0,0,0.7), 0 0 8px ${r}44`,zIndex:m,transform:`translate(${k}px, ${T}px) rotate(${z}deg) scale(${j})`,opacity:S,transition:E,willChange:"transform, opacity"},children:o.jsx("img",{src:"/assets/ui/card-back.jpg",alt:"card back",style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1})},m)})]})}const nl=56,tl=Math.round(nl*(1042/756));function sv({playerId:e}){const[n,t]=w.useState("face-up"),[a,r]=w.useState(null);if(w.useEffect(()=>{const s=e==="player1"?".mp__deck--p1":".mp__deck--p2",c=document.querySelector(s),d=c==null?void 0:c.getBoundingClientRect();r(d?{x:d.left+d.width/2,y:d.top+d.height/2}:{x:window.innerWidth*.5,y:window.innerHeight*.85});const u=setTimeout(()=>t("flip"),150),p=setTimeout(()=>t("face-down"),500),f=setTimeout(()=>t("fade"),650);return()=>{[u,p,f].forEach(clearTimeout)}},[e]),!a)return null;const i=e==="player1"?"#00f0ff":"#ff8844";return Sr.createPortal(o.jsxs("div",{style:{position:"fixed",inset:0,zIndex:900,pointerEvents:"none"},children:[o.jsxs("div",{style:{position:"fixed",left:a.x,top:a.y},children:[[0,1,2].map(s=>o.jsx(lv,{index:s,phase:n,color:i},s)),o.jsx("div",{style:{position:"absolute",top:-(tl/2+32),left:0,transform:"translateX(-50%)",color:i,fontSize:"0.78rem",fontWeight:"bold",whiteSpace:"nowrap",textShadow:`0 0 10px ${i}, 1px 1px 3px #000`,letterSpacing:"0.06em",opacity:n==="face-up"||n==="flip"||n==="face-down"?1:0,transition:"opacity 200ms"},children:"♻️ 重洗牌组"})]}),o.jsx("style",{children:cv})]}),document.body)}function lv({index:e,phase:n,color:t}){const a=(e-1)*3,r=(e-1)*2;let i;switch(n){case"face-up":case"flip":case"face-down":i=1;break;case"fade":i=0;break}const s=n==="flip"?"reshuffle-card--flipping":n==="face-down"||n==="fade"?"reshuffle-card--flipped":"";return o.jsxs("div",{className:`reshuffle-card ${s}`,style:{position:"absolute",width:nl,height:tl,left:-nl/2+a,top:-tl/2+r,perspective:600,opacity:i,transition:"opacity 200ms ease-in",willChange:"opacity",zIndex:e},children:[o.jsx("div",{className:"reshuffle-card__face reshuffle-card__front",style:{background:t+"33",border:`2px solid ${t}88`,borderRadius:5,boxShadow:`0 0 12px ${t}55`}}),o.jsx("div",{className:"reshuffle-card__face reshuffle-card__back",style:{borderRadius:5,overflow:"hidden",border:"1px solid #ffffff44",boxShadow:"0 4px 12px rgba(0,0,0,0.6)"},children:o.jsx("img",{src:"/assets/ui/card-back.jpg",alt:"card back",style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1})})]})}const cv=`
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
`,ln=68;function dv(){const{currentEvent:e}=Nr();return e?o.jsxs("div",{className:"effects-layer",style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:20},children:[e.type==="damage_number"&&o.jsx(Ux,{x:e.position.col*ln+ln/2,y:e.position.row*ln+ln/2,value:e.value},`dmg-${Date.now()}`),(e.type==="ranged_hit"||e.type==="melee_hit"||e.type==="charge_hit")&&o.jsx(Wx,{x:e.targetPos.col*ln+ln/2,y:e.targetPos.row*ln+ln/2,variant:e.type==="ranged_hit"?"ranged":e.type==="melee_hit"?"melee":"charge"},`hit-${Date.now()}`),e.type==="mine_explode"&&o.jsx(Yx,{x:e.position.col*ln+ln/2,y:e.position.row*ln+ln/2},`exp-${Date.now()}`),e.type==="card_draw"&&o.jsx(Qx,{defId:e.defId,isAuxiliary:e.isAuxiliary,playerId:e.playerId},`draw-${e.card.instanceId}`),e.type==="card_destroy"&&o.jsx(ev,{defId:e.defId,isBomb:e.isBomb,index:e.index,total:e.total},`destroy-${e.card.instanceId}`),e.type==="cleanup_discard"&&o.jsx(av,{p1Cards:e.p1Cards,p2Cards:e.p2Cards},`cleanup-${Date.now()}`),e.type==="batch_card_draw"&&o.jsx(ov,{playerId:e.playerId,count:e.count},`draw-${e.playerId}-${Date.now()}`),e.type==="deck_reshuffle"&&o.jsx(sv,{playerId:e.playerId},`reshuffle-${e.playerId}-${Date.now()}`)]}):null}function ha(){const{state:e}=Ne(),{map:n,mines:t}=e,{currentEvent:a,animatedPositions:r}=Nr(),{transform:i,viewportRef:s,handlers:c,resetView:d}=Gx(.9),u=(a==null?void 0:a.type)==="screen_shake"?`board-transform board-shake board-shake--${a.intensity}`:"board-transform";return o.jsxs("div",{ref:s,className:"board-viewport",...c,style:{cursor:"grab"},children:[o.jsxs("div",{className:u,style:{transform:`translate(${i.x}px, ${i.y}px) scale(${i.scale})`,transformOrigin:"top left"},children:[o.jsx("div",{className:"game-board",style:{gridTemplateColumns:`repeat(${n.width}, var(--cell-size))`,gridTemplateRows:`repeat(${n.height}, var(--cell-size))`},children:n.cells.flatMap((p,f)=>p.map((g,h)=>o.jsx(uv,{cell:g,row:f,col:h,mines:t},`${f}-${h}`)))}),e.playerIds.map((p,f)=>{const g=e.players[p];return!g||g.isDefeated?null:o.jsx(pv,{player:g,side:`p${f+1}`,playerIndex:f,animatedPos:r[p]??null},p)}),o.jsx(dv,{})]}),o.jsx("button",{className:"board-reset-btn",onClick:d,title:"重置视角",children:"⟳"})]})}function uv({cell:e,row:n,col:t,mines:a}){const r=ec(e),i=e.terrain==="highland"&&e.elevation>0?`+${e.elevation}`:null,s=a.filter(c=>c.position.row===n&&c.position.col===t);return o.jsxs("div",{className:`board-cell board-cell--${e.terrain}`,style:{backgroundImage:`url("${r}")`},"data-row":n,"data-col":t,children:[i&&o.jsx("span",{className:"board-cell__elev",children:i}),s.map((c,d)=>o.jsx(fv,{mine:c,offset:d*4},c.id))]})}const Fd=["#00f0ff","#ff00c8","#00cc88","#ff8800","#6688ff","#cc44ff","#44dddd","#ff4466"];function pv({player:e,side:n,playerIndex:t,animatedPos:a}){const r=q.find(p=>p.id===e.unitId);if(!r)return null;const i=(a==null?void 0:a.pos)??e.position,s=(a==null?void 0:a.facing)??e.facing,c={N:0,E:90,S:180,W:270}[s]??0,d=Fd[t%Fd.length],u=`P${t+1}`;return o.jsxs("div",{className:`unit-token-abs unit-token-abs--${n}`,style:{left:`calc(${i.col} * var(--cell-size))`,top:`calc(${i.row} * var(--cell-size))`,width:"var(--cell-size)",height:"var(--cell-size)","--token-color":d},children:[o.jsx("div",{className:"unit-token-abs__label",style:{borderColor:d,backgroundColor:d+"33"},title:`${u} ${r.nameCn}`,children:u}),o.jsx("span",{className:"unit-token-abs__facing-arrow",style:{transform:`rotate(${c}deg)`,color:d},title:`机头朝向：${e.facing}`,children:"▲"})]})}function fv({mine:e,offset:n}){const t=e.ownerId==="player1";return o.jsx("div",{className:`mine-token mine-token--${t?"p1":"p2"}`,style:{transform:`translate(${n}px, ${n}px)`},title:`机雷 (伤害 ${e.damage})`,children:o.jsx("span",{className:"mine-token__icon",children:"💣"})})}const mv=250,gv=480,hv=2e3,Ho=252,go=Math.round(Ho*(1042/756)),At=12;function _a(){const[e,n]=w.useState(null),t=w.useRef(null),a=w.useRef(null),r=w.useRef(null),i=w.useRef({x:0,y:0}),s=w.useRef(!1),c=()=>{t.current&&(clearTimeout(t.current),t.current=null),a.current&&(clearTimeout(a.current),a.current=null),r.current&&(clearTimeout(r.current),r.current=null)},d=w.useCallback(()=>{c(),n(null)},[]),u=w.useCallback(p=>({onMouseEnter:f=>{i.current={x:f.clientX,y:f.clientY},c(),t.current=setTimeout(()=>{n({src:p,x:i.current.x,y:i.current.y})},mv)},onMouseMove:f=>{i.current={x:f.clientX,y:f.clientY},n(g=>g&&{...g,x:f.clientX,y:f.clientY})},onMouseLeave:()=>d(),onTouchStart:f=>{const g=f.touches[0];s.current=!1,c(),a.current=setTimeout(()=>{s.current||(n({src:p,x:g.clientX,y:g.clientY}),r.current=setTimeout(()=>n(null),hv))},gv)},onTouchMove:()=>{s.current=!0,d()},onTouchEnd:()=>{c()}}),[d]);return{zoom:e,hide:d,getZoomHandlers:u}}function xv(e,n){const t=window.innerWidth,a=window.innerHeight;let r=e+18;r+Ho+At>t&&(r=e-Ho-18);let i=n-go/2;return i<At&&(i=At),i+go>a-At&&(i=a-go-At),{left:Math.max(At,r),top:i}}function Ia({zoom:e}){if(!e)return null;const{left:n,top:t}=xv(e.x,e.y);return Sr.createPortal(o.jsxs("div",{style:{position:"fixed",left:n,top:t,width:Ho,height:go,zIndex:99999,pointerEvents:"none",borderRadius:8,overflow:"hidden",boxShadow:"0 12px 40px rgba(0,0,0,0.75), 0 0 0 2px rgba(255,255,255,0.15)",background:"#111",animation:"card-zoom-in 0.12s ease-out both"},children:[o.jsx("img",{src:e.src,alt:"",style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1}),o.jsx("style",{children:vv})]}),document.body)}const vv=`
@keyframes card-zoom-in {
  from { opacity: 0; transform: scale(0.88); }
  to   { opacity: 1; transform: scale(1); }
}
`,Gd=["var(--color-accent)","#ff00c8","#00cc88","#ff8800","#6688ff","#cc44ff","#44dddd","#ff4466"];function za(e){const n=parseInt(e.replace("player",""),10)-1;return Gd[n%Gd.length]}function al(e){return`P${e.replace("player","")}`}function bv(e,n){const t=fa[n]??[];return[...e].sort((a,r)=>{const i=t.findIndex(c=>c.id===a.defId),s=t.findIndex(c=>c.id===r.defId);return i-s})}function yv(e,n,t,a,r,i){function s(h){if(!h)return null;const m=[...e.hand,...e.auxiliary].find(b=>b.instanceId===h);return m?r(m.defId)??null:null}const c=s(t),d=s(a),u=jn(e,r,"movement"),p=e.position,f=[];let g=[p];if(c){if(c.actionType==="movement"){const h=(c.movementValue??0)+(u.wheel?2:0);if(h>0){const m=mi(i,p,h,[n],u,e.facing);g=m.map(b=>b.pos),f.push(...m.map(b=>({pos:b.pos,cls:"preview-move-s1"})))}}else if(c.actionType==="ranged"){const h=c.rangeMin??1,m=c.rangeMax??6;for(let b=0;b<i.height;b++)for(let _=0;_<i.width;_++)Se(p,{row:b,col:_})>=h&&Se(p,{row:b,col:_})<=m&&f.push({pos:{row:b,col:_},cls:"preview-atk-s1"})}else if(c.actionType==="melee"||c.actionType==="charge")for(const[h,m]of[[-1,0],[1,0],[0,-1],[0,1]]){const b=p.row+h,_=p.col+m;b>=0&&b<i.height&&_>=0&&_<i.width&&f.push({pos:{row:b,col:_},cls:"preview-atk-s1"})}}if(d){const h=new Map,m=b=>`${b.row},${b.col}`;if(d.actionType==="movement"){const b=(d.movementValue??0)+(u.wheel?2:0);if(b>0){for(const _ of g)Sf(i,_,b,[n],u).forEach(v=>h.set(m(v.pos),v.pos));h.forEach(_=>f.push({pos:_,cls:"preview-move-s2"}))}}else if(d.actionType==="ranged"){const b=d.rangeMin??1,_=d.rangeMax??6;for(const v of g)for(let x=0;x<i.height;x++)for(let y=0;y<i.width;y++){const k=Se(v,{row:x,col:y});k>=b&&k<=_&&h.set(m({row:x,col:y}),{row:x,col:y})}h.forEach(v=>f.push({pos:v,cls:"preview-atk-s2"}))}else if(d.actionType==="melee"||d.actionType==="charge"){for(const b of g)for(const[_,v]of[[-1,0],[1,0],[0,-1],[0,1]]){const x=b.row+_,y=b.col+v;x>=0&&x<i.height&&y>=0&&y<i.width&&h.set(m({row:x,col:y}),{row:x,col:y})}h.forEach(b=>f.push({pos:b,cls:"preview-atk-s2"}))}}return f}const _v=["board-cell--preview-move-s1","board-cell--preview-move-s2","board-cell--preview-atk-s1","board-cell--preview-atk-s2"];function Ud(){document.querySelectorAll(".board-cell").forEach(e=>_v.forEach(n=>e.classList.remove(n)))}const Iv=[{id:"hand",label:"手牌",icon:"🃏"},{id:"auxiliary",label:"辅助区",icon:"⚙️"},{id:"discard",label:"弃牌区",icon:"♻️"},{id:"destroyed",label:"已破坏",icon:"💀"}];function Wo(){const{state:e,dispatch:n,aiConfig:t}=Ne(),{isAnimating:a}=Nr(),r=()=>n({type:"ADVANCE_PLOT_STEP"});if(w.useEffect(()=>{if(e.phase!=="plotting"||a)return;const s=e.plottingStep;if(!s||!s.startsWith("transition_to_"))return;const c=s.replace("transition_to_","");if(!Re(t,c))return;const d=setTimeout(r,400);return()=>clearTimeout(d)},[e.plottingStep,e.phase,a,t]),e.phase!=="plotting"||a)return null;const i=e.plottingStep;if(i&&i.startsWith("transition_to_")){const s=i.replace("transition_to_","");return Re(t,s)?null:o.jsx(wv,{onContinue:r,playerLabel:al(s),hint:"请确认对方不在旁后开始布局"})}return null}function Xt(){const{state:e,dispatch:n,getCard:t,aiConfig:a}=Ne(),{plottingStep:r}=e;if(e.phase!=="plotting"||r==="complete"||r===null||r.startsWith("transition_to_"))return null;const i=r,s=Re(a,i),c=Mr(a,i);return o.jsx(kv,{activePlottingPlayerId:i,getCard:t,isAI:s,aiDifficulty:c,onConfirm:(d,u)=>{n({type:"PLOT_CARD",playerId:i,seg:1,instanceId:d}),n({type:"PLOT_CARD",playerId:i,seg:2,instanceId:u}),n({type:"CONFIRM_PLOT",playerId:i})}},i)}function kv({activePlottingPlayerId:e,getCard:n,onConfirm:t,isAI:a=!1,aiDifficulty:r="hard"}){const{state:i,dispatch:s,exposureMode:c}=Ne(),[d,u]=w.useState(null),[p,f]=w.useState(null),[g,h]=w.useState("hand"),[m,b]=w.useState(e),_=m===e||c,v=i.players[m],x=i.players[e],y=za(e),k=(()=>{const $=i.playerIds.filter(H=>H!==e&&i.teams[H]!==i.teams[e]&&!i.players[H].isDefeated);if($.length===0)return null;const L=x.position;let M=$[0],O=Math.abs(i.players[$[0]].position.row-L.row)+Math.abs(i.players[$[0]].position.col-L.col);for(let H=1;H<$.length;H++){const B=Math.abs(i.players[$[H]].position.row-L.row)+Math.abs(i.players[$[H]].position.col-L.col);B<O&&(M=$[H],O=B)}return i.players[M]})();w.useEffect(()=>{h(m===e?"hand":"auxiliary")},[m,e]),w.useEffect(()=>{const $=(k==null?void 0:k.position)??{row:0,col:0},L=yv(x,$,d,p,n,i.map);return Ud(),L.forEach(({pos:M,cls:O})=>{const H=document.querySelector(`.board-cell[data-row="${M.row}"][data-col="${M.col}"]`);H&&H.classList.add(`board-cell--${O}`)}),Ud},[d,p]),w.useEffect(()=>{if(!a)return;const $=k??x,L=setTimeout(()=>{const{seg1:M,seg2:O}=ox(x,$,n,r,i.map);M&&O?t(M,O):M?t(M,M):s({type:"CONFIRM_PLOT",playerId:e})},800);return()=>clearTimeout(L)},[a]);function T($){if(d===$){u(null);return}if(p===$){f(null);return}if(!d){u($);return}if(!p){f($);return}f($)}function z($){return $==="deck"?v.deck.filter(L=>!L.destroyed).length:$==="hand"?v.hand.filter(L=>!L.destroyed).length:$==="auxiliary"?v.auxiliary.length:$==="discard"?v.discard.length:$==="destroyed"?v.destroyedCards.length:0}function j($){return $==="deck"?_?bv(v.deck,v.unitId):[]:$==="hand"?v.hand.filter(L=>!L.destroyed):$==="auxiliary"?v.auxiliary:$==="discard"?v.discard:$==="destroyed"?v.destroyedCards:[]}const S=d!==null&&p!==null,D=_,E=g==="deck"&&_;return o.jsxs("div",{className:"plot-content",children:[o.jsxs("div",{className:"plot-panel__header",children:[o.jsx("span",{className:"plot-panel__player",style:{color:y},children:al(e)}),o.jsx("span",{className:"plot-panel__prompt",children:"布局中"})]}),o.jsx("div",{className:"plot-tab-row",children:i.playerIds.map($=>{const L=m===$,M=$===e;return o.jsxs("button",{className:`plot-tab${L?" plot-tab--active":""}`,style:L?{color:za($),borderBottomColor:za($)}:void 0,onClick:()=>b($),children:[al($),M&&!L&&o.jsx("span",{className:"plot-tab__dot",style:{background:za($)}})]},$)})}),m===e?o.jsxs("div",{className:"plot-slots",children:[o.jsx(Hd,{label:"主要阶段 1",cardInstanceId:d,getCard:n,hand:x.hand,onClear:()=>u(null),color:y}),o.jsx(Hd,{label:"主要阶段 2",cardInstanceId:p,getCard:n,hand:x.hand,onClear:()=>f(null),color:y})]}):c?o.jsxs("div",{className:"plot-slots",children:[o.jsx(Wd,{label:"主要阶段 1",card:v.plotSeg1,getCard:n}),o.jsx(Wd,{label:"主要阶段 2",card:v.plotSeg2,getCard:n})]}):o.jsxs("div",{className:"plot-slots",children:[o.jsxs("div",{className:"plot-slot-locked",children:[o.jsx("span",{children:"🔒"}),o.jsx("span",{children:"主要阶段 1"}),o.jsx("span",{className:"plot-slot-locked__hint",children:"对方已锁定"})]}),o.jsxs("div",{className:"plot-slot-locked",children:[o.jsx("span",{children:"🔒"}),o.jsx("span",{children:"主要阶段 2"}),o.jsx("span",{className:"plot-slot-locked__hint",children:"对方已锁定"})]})]}),o.jsxs("div",{className:"plot-zone-tabs",children:[o.jsxs("button",{className:`plot-zone-tab${E?" plot-zone-tab--active":""}`,style:E?{borderColor:y}:void 0,onClick:D?()=>h("deck"):void 0,disabled:!D,title:D?"卡组：按资料集顺序查看":"对方卡组不可查看",children:[o.jsx("span",{className:"plot-zone-tab__icon",children:D?"🂠":"🔒"}),o.jsx("span",{className:"plot-zone-tab__label",children:"卡组"}),o.jsx("span",{className:"plot-zone-tab__count",children:v.deck.filter($=>!$.destroyed).length})]}),Iv.map(({id:$,label:L,icon:M})=>{const O=g===$;return o.jsxs("button",{className:`plot-zone-tab${O?" plot-zone-tab--active":""}`,style:O?{borderColor:_?y:za(m)}:void 0,onClick:()=>h($),title:`${L}：点击查看`,children:[o.jsx("span",{className:"plot-zone-tab__icon",children:M}),o.jsx("span",{className:"plot-zone-tab__label",children:L}),o.jsx("span",{className:"plot-zone-tab__count",children:z($)})]},$)})]}),o.jsx("div",{className:"plot-zone-view",children:g==="hand"&&!_?o.jsxs("div",{className:"plot-zone-private",children:["🔒 对方手牌不可查看",o.jsx("br",{}),o.jsxs("span",{className:"plot-zone-private__count",children:["共 ",z("hand")," 张"]})]}):j(g).length===0?o.jsx("p",{className:"plot-zone-empty",children:"（此区域为空）"}):o.jsx("div",{className:"plot-card-grid",children:j(g).map($=>{const L=n($.defId),M=g==="hand"&&m===e,O=$.instanceId===d,H=$.instanceId===p;return o.jsx(jv,{card:$,def:L,isSelected:O||H,segLabel:O?"①":H?"②":null,onClick:M?()=>T($.instanceId):void 0},$.instanceId)})})}),o.jsx("div",{className:"plot-footer",children:o.jsx("button",{className:"plot-confirm-btn",disabled:!S,style:S?{borderColor:y,color:y}:void 0,onClick:()=>{d&&p&&t(d,p)},children:S?"确定布局":`请选择主要阶段 ${d?"2":"1"} 的卡牌`})}),o.jsx("style",{children:Sv})]})}function Hd({label:e,cardInstanceId:n,getCard:t,hand:a,onClear:r,color:i}){const s=a.find(g=>g.instanceId===n)??null,c=s?t(s.defId):null,{zoom:d,hide:u,getZoomHandlers:p}=_a(),f=c?`/assets/${c.frontImageId}`:"";return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"plot-slot",children:[o.jsx("div",{className:"plot-slot__label",children:e}),c&&s?o.jsxs("div",{className:"plot-slot__card",onClick:()=>{u(),r()},title:"点击取消选择",style:{borderColor:i,boxShadow:`0 0 8px ${i}55`},...p(f),children:[o.jsx("img",{src:f,alt:c.nameCn,className:"plot-slot__img",onError:g=>{g.target.style.opacity="0.4"}}),o.jsx("span",{className:"plot-slot__name",children:c.nameCn}),o.jsx("span",{className:"plot-slot__clear",children:"✕"})]}):o.jsx("div",{className:"plot-slot__empty",children:"— 未选择 —"})]}),o.jsx(Ia,{zoom:d})]})}function Wd({label:e,card:n,getCard:t}){const a=n?t(n.defId):null,r=a?`/assets/${a.frontImageId}`:"";return o.jsxs("div",{className:"plot-slot",children:[o.jsx("div",{className:"plot-slot__label",children:e}),a&&n?o.jsxs("div",{className:"plot-slot__card",style:{borderColor:"#888",cursor:"default"},children:[o.jsx("img",{src:r,alt:a.nameCn,className:"plot-slot__img",onError:i=>{i.target.style.opacity="0.4"}}),o.jsx("span",{className:"plot-slot__name",children:a.nameCn})]}):o.jsx("div",{className:"plot-slot__empty",children:"— 未布局 —"})]})}function jv({card:e,def:n,isSelected:t,segLabel:a,onClick:r}){const{zoom:i,getZoomHandlers:s}=_a(),c=n?`/assets/${n.frontImageId}`:"";return o.jsxs(o.Fragment,{children:[o.jsxs("button",{className:`plot-card${t?" plot-card--selected":""}${r?"":" plot-card--readonly"}`,onClick:r,disabled:!r,title:(n==null?void 0:n.nameCn)??"???",...n?s(c):{},children:[n?o.jsxs(o.Fragment,{children:[o.jsx("img",{src:c,alt:n.nameCn,className:"plot-card__img",onError:d=>{d.target.style.opacity="0.3"}}),o.jsx("span",{className:"plot-card__name",children:n.nameCn}),n.damage!==void 0&&o.jsxs("span",{className:"plot-card__stat",children:["💥",n.damage]}),n.movementValue!==void 0&&o.jsxs("span",{className:"plot-card__stat",children:["🏃",n.movementValue]}),n.rangeMin!==void 0&&o.jsxs("span",{className:"plot-card__stat",children:["🎯",n.rangeMin,"–",n.rangeMax]})]}):o.jsx("span",{className:"plot-card__name",children:"???"}),a&&o.jsx("span",{className:"plot-card__badge",children:a})]}),o.jsx(Ia,{zoom:i})]})}function wv({onContinue:e,playerLabel:n,hint:t}){return o.jsxs("div",{className:"pass-device-screen",children:[o.jsxs("div",{className:"pass-device-screen__content",children:[o.jsx("div",{className:"pass-device-screen__icon",children:"🤖"}),o.jsx("h2",{className:"pass-device-screen__title",children:"请将设备交给"}),o.jsx("h1",{className:"pass-device-screen__player",children:n}),o.jsx("p",{className:"pass-device-screen__hint",children:t}),o.jsxs("button",{className:"pass-device-screen__btn",onClick:e,children:[n," 已就位，继续"]})]}),o.jsx("style",{children:Cv})]})}const Sv=`
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

/* ═══════════════════════════════════════════════════════
   Mobile Responsive Overrides
   ═══════════════════════════════════════════════════════ */
@media (max-width: 768px) {
  .plot-card-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 6px;
  }

  .plot-card__img {
    height: 100px;
  }

  .plot-card__name {
    font-size: 0.65rem;
  }

  .plot-slot__card {
    width: 64px;
  }

  .plot-slot__img {
    width: 64px;
    height: 86px;
  }

  .plot-slot__empty {
    width: 64px;
    height: 96px;
  }

  .plot-slot-locked {
    height: 96px;
  }

  .plot-zone-tabs {
    gap: 3px;
    padding: 5px 6px;
  }

  .plot-zone-tab {
    padding: 6px 6px;
    font-size: 0.65rem;
    min-height: 40px;
    min-width: 0;
  }

  .plot-zone-tab__icon {
    font-size: 0.85rem;
  }

  .plot-tab {
    padding: 8px 8px;
    font-size: 0.78rem;
    min-height: 40px;
  }

  .plot-confirm-btn {
    padding: 14px;
    font-size: 0.95rem;
    min-height: 48px;
  }

  .plot-zone-view {
    max-height: 35vh;
  }
}
`,Cv=`
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

@media (max-width: 768px) {
  .pass-device-screen__content {
    padding: 28px 20px;
    margin: 0 16px;
    width: calc(100% - 32px);
  }

  .pass-device-screen__icon {
    font-size: 3rem;
  }

  .pass-device-screen__title {
    font-size: 1.1rem;
  }

  .pass-device-screen__player {
    font-size: 1.8rem;
  }

  .pass-device-screen__btn {
    padding: 16px 32px;
    min-height: 48px;
    width: 100%;
  }
}
`;function Zd(e,n){const t=N0(e,n);if(t.length===0)return n;if(t.length===1)return t[0];const a=e.players[n].position;let r=t[0],i=1/0;for(const s of t){const c=e.players[s].position,d=Math.abs(c.row-a.row)+Math.abs(c.col-a.col);d<i&&(i=d,r=s)}return r}function Zo(){const{state:e,getCard:n}=Ne(),{phase:t,currentTiming:a,turnOrder:r,pendingDamage:i}=e;if(t!=="action_seg1"&&t!=="action_seg2")return null;const s=t==="action_seg1"?1:2;return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"action-hud",style:i?{display:"none"}:void 0,children:[a==="movement"&&o.jsx(Nv,{seg:s,turnOrder:r,getCard:n},`mov-${s}`),(a==="ranged"||a==="melee")&&o.jsx(Ev,{seg:s,getCard:n},`combat-${s}-${a}`),a==="special"&&o.jsx($v,{seg:s,turnOrder:r,getCard:n},`special-${s}`),o.jsx("style",{children:Yd})]}),i&&o.jsxs(o.Fragment,{children:[o.jsx(zv,{pendingDamage:i,getCard:n}),o.jsx("style",{children:Yd})]})]})}function Nv({seg:e,turnOrder:n,getCard:t}){const{state:a,dispatch:r,aiConfig:i,isOnline:s,localPlayerId:c,currentTurnPlayerId:d}=Ne(),{map:u,pendingDamage:p,playerIds:f}=a,[g,h]=w.useState(new Set),[m,b]=w.useState(null),[_,v]=w.useState([]),[x,y]=w.useState(null),k=w.useRef(!1),T=new Map;for(const B of f){const U=a.players[B],N=q.find(V=>V.id===U.unitId);T.set(B,gh(U,e,t,N.movement))}w.useEffect(()=>{if(!(m!==null||x!==null)&&!k.current&&!p){if(s&&c){if(d!==c)return;if(T.get(c))b(c);else{const B=a.players[c],U=e===1?B.plotSeg1:B.plotSeg2;if(!U)r({type:"ADD_LOG",message:`  ${$e(c)} 未配置行动卡，跳过`});else{const N=t(U.defId);N&&N.actionType==="movement"&&r({type:"ADD_LOG",message:`  ${$e(c)}【${N.nameCn}】无法发动移动`})}k.current=!0,r({type:"ADVANCE_TIMING"})}return}for(const B of n)if(!g.has(B))if(T.get(B)){b(B);return}else{const U=a.players[B],N=e===1?U.plotSeg1:U.plotSeg2;if(!N)r({type:"ADD_LOG",message:`  ${$e(B)} 未配置行动卡，跳过`});else{const V=t(N.defId);V&&V.actionType==="movement"&&r({type:"ADD_LOG",message:`  ${$e(B)}【${V.nameCn}】无法发动移动`})}h(V=>new Set([...V,B]));return}k.current=!0,r({type:"ADVANCE_TIMING"})}},[g,m,x,p,d]),w.useEffect(()=>{if(!m){v([]);return}const B=a.players[m],U=f.filter(R=>R!==m).map(R=>a.players[R].position),N=q.find(R=>R.id===B.unitId),V=jn(B,t,"movement"),F=Zi(B,e,t,V)||N.movement,P=mi(u,B.position,F,U,V,B.facing);v(P.map(R=>R.pos))},[m,a.players,u,e]),w.useEffect(()=>{if(!m||s&&c&&m!==c||!Re(i,m))return;const U=Mr(i,m),N=setTimeout(()=>{const V=ix(a,m,e,t,U);V&&r({type:"MOVE_UNIT",playerId:m,to:V.pos,path:V.path,finalFacing:V.finalFacing}),h(F=>new Set([...F,m])),b(null),v([])},800);return()=>clearTimeout(N)},[m]);function z(B,U){if(!m||Re(i,m)||!_.some(V=>se(V,B)))return;let N=U;if(!N){const V=a.players[m],F=f.filter(Q=>Q!==m).map(Q=>a.players[Q].position),P=q.find(Q=>Q.id===V.unitId),R=jn(V,t,"movement"),Z=Zi(V,e,t,R)||P.movement;N=nc(u,V.position,V.facing,B,Z,F,R)}r({type:"MOVE_UNIT",playerId:m,to:B,path:N==null?void 0:N.path,finalFacing:N==null?void 0:N.finalFacing}),v([]),y(m),b(null)}function j(){x&&(h(B=>new Set([...B,x])),y(null),s&&(k.current=!0,r({type:"ADVANCE_TIMING"})))}if(s&&c&&d&&d!==c&&!m&&!x)return o.jsx("div",{className:"action-hud__panel action-hud__panel--waiting",children:o.jsxs("span",{className:"action-hud__hint",children:["等待 ",$e(d)," 行动中…"]})});const S=n.every(B=>!T.get(B)||g.has(B));if(!s&&S&&m===null&&x===null||s&&k.current&&m===null&&x===null)return null;if(x!==null){const B=a.players[x],U=$e(x),N=ma(B.facing);return o.jsxs("div",{className:"action-hud__panel",children:[o.jsx("span",{className:"action-hud__mover",children:U}),o.jsx("span",{className:"action-hud__hint",children:"移动完毕，可选择调整机头方向（最多90°）"}),o.jsx(Mv,{playerId:x,disabledFacing:N}),o.jsx("button",{className:"action-hud__skip-btn",onClick:j,children:"确认方向"})]})}const D=m?Re(i,m):!1,E=m?$e(m):"";if(D)return o.jsxs("div",{className:"action-hud__panel action-hud__panel--ai-thinking",children:[o.jsxs("span",{className:"action-hud__mover",children:[E," (AI)"]}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__hint",children:"思考中…"})]});const $=m?a.players[m]:null,L=m&&$?jn($,t,"movement"):null,M=$?q.find(B=>B.id===$.unitId):null,O=m&&$&&M?Zi($,e,t,L??void 0)||M.movement:0,H=m?f.filter(B=>B!==m).map(B=>a.players[B].position):[];return o.jsxs(o.Fragment,{children:[m&&$&&o.jsx(Tv,{reachable:_,map:u,from:$.position,fromFacing:$.facing,movementValue:O,blockedPositions:H,aux:L??void 0,onCellClick:z}),o.jsx("div",{className:"action-hud__panel",children:m?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"action-hud__mover",children:E}),o.jsx("span",{className:"action-hud__hint",children:"选择目标格（步数须用尽；点击选择路径）"}),(L==null?void 0:L.vernier)&&o.jsx("span",{className:"action-hud__aux-badge",title:"地形移动消耗-1，高低差消耗-1",children:"⚙ 喷射推进器"}),(L==null?void 0:L.wheel)&&o.jsx("span",{className:"action-hud__aux-badge",title:"移动力+2",children:"⚙ 滑轮"})]}):o.jsx("span",{className:"action-hud__hint",children:"计算移动路径中…"})})]})}function Mv({playerId:e,disabledFacing:n}){const{state:t,dispatch:a}=Ne(),i=t.players[e].facing,s=[{facing:"N",label:"↑N"},{facing:"E",label:"E→"},{facing:"S",label:"↓S"},{facing:"W",label:"←W"}];return o.jsxs("div",{className:"facing-compass",title:"调整机头朝向（不可掉头）",children:[o.jsx("span",{className:"facing-compass__label",children:"机头"}),s.map(({facing:c,label:d})=>{const u=c===n;return o.jsx("button",{className:["facing-compass__btn",i===c?"facing-compass__btn--active":"",u?"facing-compass__btn--disabled":""].join(" ").trim(),onClick:()=>{u||a({type:"ADJUST_FACING",playerId:e,facing:c})},disabled:u,title:u?"无法180°掉头":`朝${c}方`,children:d},c)})]})}function Tv({reachable:e,map:n,from:t,fromFacing:a,movementValue:r,blockedPositions:i,aux:s,onCellClick:c}){const d=_i(),u=w.useRef({allPaths:[],selectedIdx:0,hoveredPos:null}),[p,f]=w.useState(0),g=()=>f(m=>m+1);w.useEffect(()=>{document.querySelectorAll(".board-cell--path-ghost").forEach(k=>k.classList.remove("board-cell--path-ghost"));const{allPaths:m,selectedIdx:b,hoveredPos:_}=u.current;if(!_||m.length===0)return;const v=m[b];if(!v)return;const x=v.path.slice(0,-1);for(const k of x){const T=document.querySelector(`.board-cell[data-row="${k.row}"][data-col="${k.col}"]`);T==null||T.classList.add("board-cell--path-ghost")}const y=document.querySelector(`.board-cell[data-row="${_.row}"][data-col="${_.col}"]`);return y&&(y.dataset.pathLabel=m.length>1?`${b+1}/${m.length}`:""),()=>{document.querySelectorAll(".board-cell--path-ghost").forEach(k=>k.classList.remove("board-cell--path-ghost")),y&&delete y.dataset.pathLabel}},[p]),w.useEffect(()=>{const m=[];document.querySelectorAll(".board-cell--reachable").forEach(b=>{b.classList.remove("board-cell--reachable")});for(const b of e){const _=document.querySelector(`.board-cell[data-row="${b.row}"][data-col="${b.col}"]`);if(!_)continue;_.classList.add("board-cell--reachable");const v=()=>{const{allPaths:L,selectedIdx:M}=u.current;c(b,L[M]??null)},x=()=>{const L=Wi(n,t,a,b,r,i,s);u.current={allPaths:L,selectedIdx:0,hoveredPos:b},g()},y=()=>{u.current={allPaths:[],selectedIdx:0,hoveredPos:null},g()},k=L=>{const{allPaths:M,selectedIdx:O}=u.current;if(M.length<=1)return;L.preventDefault();const H=L.deltaY>0?1:-1;u.current={...u.current,selectedIdx:(O+H+M.length)%M.length},g()};let T=null,z=0,j=0,S=!1;const D=L=>{if(z=L.touches[0].clientX,j=L.touches[0].clientY,S=!1,d){const{hoveredPos:M}=u.current;if(M&&M.row===b.row&&M.col===b.col)return;const O=Wi(n,t,a,b,r,i,s);u.current={allPaths:O,selectedIdx:0,hoveredPos:b},g(),L.preventDefault();return}T=setTimeout(()=>{S=!0;const M=Wi(n,t,a,b,r,i,s);u.current={allPaths:M,selectedIdx:0,hoveredPos:b},g()},400)},E=()=>{T&&(clearTimeout(T),T=null),S&&!d&&(u.current={allPaths:[],selectedIdx:0,hoveredPos:null},g()),S=!1},$=L=>{if(d||!S)return;const M=L.touches[0].clientX-z,O=L.touches[0].clientY-j;if(Math.abs(M)>40||Math.abs(O)>40){const{allPaths:H,selectedIdx:B}=u.current;if(H.length<=1)return;const U=Math.abs(M)>Math.abs(O)?M>0?1:-1:O>0?1:-1;u.current={...u.current,selectedIdx:(B+U+H.length)%H.length},g(),z=L.touches[0].clientX,j=L.touches[0].clientY}};_.addEventListener("click",v),_.addEventListener("mouseenter",x),_.addEventListener("mouseleave",y),_.addEventListener("wheel",k,{passive:!1}),_.addEventListener("touchstart",D,{passive:!0}),_.addEventListener("touchend",E),_.addEventListener("touchcancel",E),_.addEventListener("touchmove",$,{passive:!0}),m.push(()=>{T&&clearTimeout(T),_.removeEventListener("click",v),_.removeEventListener("mouseenter",x),_.removeEventListener("mouseleave",y),_.removeEventListener("wheel",k),_.removeEventListener("touchstart",D),_.removeEventListener("touchend",E),_.removeEventListener("touchcancel",E),_.removeEventListener("touchmove",$)})}return()=>{document.querySelectorAll(".board-cell--reachable").forEach(b=>b.classList.remove("board-cell--reachable")),document.querySelectorAll(".board-cell--path-ghost").forEach(b=>b.classList.remove("board-cell--path-ghost")),document.querySelectorAll(".board-cell[data-path-label]").forEach(b=>delete b.dataset.pathLabel),u.current={allPaths:[],selectedIdx:0,hoveredPos:null},m.forEach(b=>b())}},[e,n,t,a,r,i,s,c]);const h=w.useCallback(()=>{const{allPaths:m,selectedIdx:b}=u.current;m.length<=1||(u.current={...u.current,selectedIdx:(b+1)%m.length},g())},[]);if(d){const{allPaths:m,hoveredPos:b}=u.current;if(b&&m.length>1)return o.jsxs("button",{className:"move-cycle-btn",onClick:h,style:{position:"fixed",bottom:80,left:"50%",transform:"translateX(-50%)",zIndex:600,padding:"10px 24px",background:"rgba(22, 33, 62, 0.95)",border:"1px solid #ffea00",borderRadius:8,color:"#ffea00",fontFamily:"var(--font-mono)",fontSize:"0.85rem",fontWeight:"bold",cursor:"pointer",minHeight:44,backdropFilter:"blur(4px)"},children:["切换路径 (",u.current.selectedIdx+1,"/",m.length,")"]})}return null}function zf({reachable:e,onCellClick:n}){return w.useEffect(()=>(document.querySelectorAll(".board-cell").forEach(a=>{a.classList.remove("board-cell--reachable"),a.onclick=null}),e.forEach(a=>{const r=document.querySelector(`.board-cell[data-row="${a.row}"][data-col="${a.col}"]`);r&&(r.classList.add("board-cell--reachable"),r.onclick=()=>n(a))}),()=>{document.querySelectorAll(".board-cell--reachable").forEach(a=>{a.classList.remove("board-cell--reachable"),a.onclick=null})}),[e,n]),null}function Ev({seg:e,getCard:n}){const{state:t,dispatch:a,aiConfig:r,isOnline:i,localPlayerId:s,currentTurnPlayerId:c}=Ne(),{map:d,turnOrder:u,currentTiming:p,pendingDamage:f}=t,[g,h]=w.useState(new Set),[m,b]=w.useState(null),[_,v]=w.useState(null),x=w.useRef(!1),[y,k]=w.useState(!1),[T,z]=w.useState([]),[j,S]=w.useState(!1),D=p==="ranged"?"ranged":"melee",E=D==="ranged"?"射击时机":"近战时机";if(w.useEffect(()=>{if(m===null&&!x.current&&!f){if(i&&s){if(c!==s)return;const re=t.players[s];if(Pn(re,e,D,n))b(s),k(!1),S(!1),z([]);else{const qe=e===1?re.plotSeg1:re.plotSeg2;if(qe){const Ke=n(qe.defId);Ke&&(D==="ranged"&&Ke.actionType==="ranged"||D==="melee"&&(Ke.actionType==="melee"||Ke.actionType==="charge"))&&a({type:"ADD_LOG",message:`  ${$e(s)}【${Ke.nameCn}】条件不满足，无法发动`})}x.current=!0,a({type:"ADVANCE_TIMING"})}return}for(const re of u){if(g.has(re))continue;const Ie=t.players[re];if(!Pn(Ie,e,D,n)){const Ke=e===1?Ie.plotSeg1:Ie.plotSeg2;if(Ke){const Je=n(Ke.defId);Je&&(D==="ranged"&&Je.actionType==="ranged"||D==="melee"&&(Je.actionType==="melee"||Je.actionType==="charge"))&&a({type:"ADD_LOG",message:`  ${$e(re)}【${Je.nameCn}】条件不满足，无法发动`})}h(Je=>new Set([...Je,re]));return}b(re),k(!1),S(!1),z([]);return}x.current=!0,a({type:"ADVANCE_TIMING"})}},[g,m,f,n,c]),w.useEffect(()=>{if(!m||f||i&&s&&m!==s||!Re(r,m))return;const Ie=Mr(r,m),qe=Zd(t,m),Ke=setTimeout(()=>{if(sx(t,m,e,D,n,Ie)){const Sn=t.players[m],ie=Pn(Sn,e,D,n),ja=(ie==null?void 0:ie.actionType)==="charge"?"RESOLVE_CHARGE":D==="ranged"?"RESOLVE_RANGED":"RESOLVE_MELEE";a({type:ja,attackerId:m,targetId:qe})}else{const Sn=t.players[m],ie=Pn(Sn,e,D,n);a({type:"ADD_LOG",message:`  ${$e(m)} 放弃发动${ie?`【${ie.nameCn}】`:E}`})}h(Sn=>new Set([...Sn,m])),b(null),k(!1),S(!1),z([])},800);return()=>clearTimeout(Ke)},[m,f]),i&&s&&c&&c!==s&&!m)return o.jsx("div",{className:"action-hud__panel action-hud__panel--waiting",children:o.jsxs("span",{className:"action-hud__hint",children:["等待 ",$e(c)," 行动中…"]})});if(!m)return null;const $=t.players[m],L=Zd(t,m),M=t.players[L],O=p==="melee"?jn($,n,"melee"):{vernier:!1,moveSensor:!1},H=Pn($,e,D,n),B=(H==null?void 0:H.actionType)==="charge",U=Re(r,m);let N;if(B&&D==="melee"){const re=q.find(qe=>qe.id===$.unitId),Ie=q.find(qe=>qe.id===M.unitId);N=Jo($,M,e,d,re,Ie,n)}else N=tc($,M,e,D,d,n);const V=q.find(re=>re.id===$.unitId),F=q.find(re=>re.id===M.unitId);function P(){if(!N.canAttack||!m)return;a({type:B?"RESOLVE_CHARGE":D==="ranged"?"RESOLVE_RANGED":"RESOLVE_MELEE",attackerId:m,targetId:L}),v(`${V.nameCn} → ${F.nameCn}：造成 ${N.damage} 伤害`),h(Ie=>new Set([...Ie,m])),b(null),k(!1),S(!1),z([]),i&&(x.current=!0,a({type:"ADVANCE_TIMING"}))}function R(){if(!m)return;const re=Pn(t.players[m],e,D,n);a({type:"ADD_LOG",message:`  ${$e(m)} 放弃发动${re?`【${re.nameCn}】`:E}`}),v(null),h(Ie=>new Set([...Ie,m])),b(null),k(!1),S(!1),z([]),i&&(x.current=!0,a({type:"ADVANCE_TIMING"}))}function Z(){if(!m||y)return;const re=Nf(d,$.position,[M.position]);z(re),S(!0)}function Q(re){!m||!j||(a({type:"MELEE_SENSOR_MOVE",playerId:m,to:re}),k(!0),S(!1),z([]))}function ne(){S(!1),z([])}const te=$e(m),Y=N.card?B?`【${N.card.nameCn}】突击值 ${V.assault} vs 防御${F.assaultDef}`:`【${N.card.nameCn}】射程 ${N.card.rangeMin??"—"}–${N.card.rangeMax??"—"}`:null,ce=D==="melee"&&O.moveSensor&&!y;return U?o.jsxs("div",{className:"action-hud__panel action-hud__panel--ai-thinking",children:[o.jsxs("span",{className:"action-hud__mover",children:[$e(m)," (AI)"]}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__hint",children:"思考中…"})]}):o.jsxs(o.Fragment,{children:[j&&o.jsx(zf,{reachable:T,onCellClick:Q}),!j&&o.jsx(Dv,{targetPos:N.canAttack?M.position:null}),o.jsxs("div",{className:"action-hud__panel action-hud__panel--combat",children:[o.jsx("span",{className:"action-hud__mover",children:te}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__timing-label",children:E}),O.moveSensor&&o.jsxs("span",{className:`action-hud__aux-badge ${y?"action-hud__aux-badge--used":""}`,title:"近战前可移动1格",children:["⚙ 移动传感器",y?"（已使用）":""]}),O.vernier&&o.jsx("span",{className:"action-hud__aux-badge",title:"地形消耗-1，高低差-1",children:"⚙ 喷射推进器"}),N.card?o.jsxs("span",{className:"action-hud__card-info",children:[Y,N.card.damage!==void 0&&o.jsxs("span",{className:"action-hud__dmg",children:[" 伤害 ",N.card.damage]})]}):o.jsxs("span",{className:"action-hud__hint",children:["无",D==="ranged"?"射击":"近战","牌"]}),o.jsx("span",{className:`action-hud__validity ${N.canAttack?"action-hud__validity--ok":"action-hud__validity--no"}`,children:N.canAttack?B?`距离 ${N.dist} ✓ → 造成 ${N.damage} 伤 / 自机反伤 ${N.counterDamage}`:`距离 ${N.dist} ✓ → ${N.damage} 伤`:N.card?N.reason:""}),_&&o.jsx("span",{className:"action-hud__result",children:_}),j?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"action-hud__hint",children:"点击高亮格移动（传感器），或"}),o.jsx("button",{className:"action-hud__skip-btn",onClick:ne,children:"取消移动"})]}):o.jsxs(o.Fragment,{children:[ce&&o.jsx("button",{className:"action-hud__sensor-btn",onClick:Z,title:"移动传感器：攻击前可移动1格",children:"传感器移动"}),o.jsx("button",{className:"action-hud__attack-btn",onClick:P,disabled:!N.canAttack,title:N.canAttack?`攻击 ${F.nameCn}`:N.reason,children:"执行攻击"}),o.jsxs("button",{className:"action-hud__skip-btn",onClick:R,children:["跳过",D==="ranged"?"射击":"近战"]})]})]})]})}function Dv({targetPos:e}){return w.useEffect(()=>{if(document.querySelectorAll(".board-cell--target").forEach(n=>{n.classList.remove("board-cell--target")}),e){const n=document.querySelector(`.board-cell[data-row="${e.row}"][data-col="${e.col}"]`);n==null||n.classList.add("board-cell--target")}return()=>{document.querySelectorAll(".board-cell--target").forEach(n=>{n.classList.remove("board-cell--target")})}},[e]),null}function $v({seg:e,turnOrder:n,getCard:t}){const{state:a,dispatch:r,aiConfig:i,isOnline:s,localPlayerId:c,currentTurnPlayerId:d}=Ne(),{map:u,pendingDamage:p}=a,[f,g]=w.useState(new Set),[h,m]=w.useState(null),[b,_]=w.useState([]),v=w.useRef(!1);if(w.useEffect(()=>{if(h===null&&!v.current&&!p){if(s&&c){if(d!==c)return;const D=a.players[c],E=e===1?D.plotSeg1:D.plotSeg2,$=E?t(E.defId):null;!$||$.actionType!=="mine"&&$.actionType!=="special"?(v.current=!0,r({type:"ADVANCE_TIMING"})):m(c);return}for(const D of n){if(f.has(D))continue;const E=a.players[D],$=e===1?E.plotSeg1:E.plotSeg2,L=$?t($.defId):null;if(!L||L.actionType!=="mine"&&L.actionType!=="special"){g(M=>new Set([...M,D]));return}m(D);return}v.current=!0,r({type:"ADVANCE_TIMING"})}},[f,h,p,t,d]),w.useEffect(()=>{if(!h){_([]);return}const D=a.players[h],E=e===1?D.plotSeg1:D.plotSeg2,$=E?t(E.defId):null;if($&&$.actionType==="mine"){const L=Cf(u,D.position,1,[]);_(L)}else _([])},[h,u,e,a.players,t]),w.useEffect(()=>{if(!h||p||s&&c&&h!==c||!Re(i,h))return;const E=Mr(i,h),$=setTimeout(()=>{const L=cx(a,h,e,t,E);if(L){const M=a.players[h],O=e===1?M.plotSeg1:M.plotSeg2,H=O?t(O.defId):null;r({type:"PLACE_MINE",playerId:h,to:L,damage:(H==null?void 0:H.damage)||3})}g(M=>new Set([...M,h])),m(null)},800);return()=>clearTimeout($)},[h,p]),s&&c&&d&&d!==c&&!h)return o.jsx("div",{className:"action-hud__panel action-hud__panel--waiting",children:o.jsxs("span",{className:"action-hud__hint",children:["等待 ",$e(d)," 行动中…"]})});if(!h)return null;const x=a.players[h],y=e===1?x.plotSeg1:x.plotSeg2,k=y?t(y.defId):null,T=$e(h),z=Re(i,h);function j(){g(D=>new Set([...D,h])),m(null),s&&(v.current=!0,r({type:"ADVANCE_TIMING"}))}function S(D){!h||!k||k.actionType!=="mine"||b.some(E=>se(E,D))&&(r({type:"PLACE_MINE",playerId:h,to:D,damage:k.damage||3}),g(E=>new Set([...E,h])),m(null),s&&(v.current=!0,r({type:"ADVANCE_TIMING"})))}return z?o.jsxs("div",{className:"action-hud__panel action-hud__panel--ai-thinking",children:[o.jsxs("span",{className:"action-hud__mover",children:[T," (AI)"]}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__hint",children:"思考中…"})]}):o.jsxs(o.Fragment,{children:[b.length>0&&o.jsx(zf,{reachable:b,onCellClick:S}),o.jsxs("div",{className:"action-hud__panel action-hud__panel--special",children:[o.jsx("span",{className:"action-hud__mover",children:T}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__timing-label",children:"特殊时机"}),o.jsx("span",{className:"action-hud__card-info",children:k?`【${k.nameCn}】效果`:"（无）"}),(k==null?void 0:k.actionType)==="mine"?o.jsx("span",{className:"action-hud__hint",children:"请点击高亮格部署机雷，或"}):o.jsx("span",{className:"action-hud__hint",children:"暂无此牌效果支持，请"}),o.jsx("button",{className:"action-hud__skip-btn",onClick:j,children:"跳过"})]})]})}function zv({pendingDamage:e,getCard:n}){const{state:t,dispatch:a,aiConfig:r,isOnline:i,localPlayerId:s}=Ne(),{targetId:c,remaining:d,selectedInstanceIds:u}=e,{zoom:p,getZoomHandlers:f}=_a(),[g,h]=w.useState(null),m=t.players[c];Et(m);const b=u.length===0,_=!!e.attackerId&&b&&!e.attackerDesignatedCardId,v=_?e.attackerId:c,x=$e(v),y=i&&s&&v!==s,k=!y&&Re(r,v),T=Mr(r,v),z=!i&&!k&&v!==g;w.useEffect(()=>{k?h(v):i||h(null)},[v,k,i]),w.useEffect(()=>{if(!k||y||d<=0)return;const B=t.players[c],U=Cr(B),N=t.playerIds.filter(P=>P!==c&&t.teams[P]!==t.teams[c]&&!t.players[P].isDefeated),V=N.length>0?t.players[N[0]]:B,F=setTimeout(()=>{if(U.length>0){const P=lx(e,B,n,T,_,V);a(P?{type:"SELECT_DAMAGE_CARD",playerId:v,instanceId:P}:{type:"CONFIRM_DAMAGE_SELECTION",playerId:v})}else a({type:"CONFIRM_DAMAGE_SELECTION",playerId:v})},600);return()=>clearTimeout(F)},[d,v,k,y,t.players]);function j(B){a({type:"SELECT_DAMAGE_CARD",playerId:v,instanceId:B})}function S(){a({type:"CONFIRM_DAMAGE_SELECTION",playerId:v})}if(y)return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"damage-pass-overlay",children:o.jsxs("div",{className:"damage-pass-card",children:[o.jsx("p",{className:"damage-pass__eyebrow",children:"— 伤害分配 —"}),o.jsx("h2",{className:"damage-pass__title",children:"等待对手选择"}),o.jsx("div",{className:"damage-pass__player",children:x}),o.jsx("p",{className:"damage-pass__context",children:_?"【瞄准加成】攻方正在指定要摧毁的卡牌…":`${x} 正在选择要摧毁的 ${d} 张卡牌…`}),o.jsx("div",{className:"damage-pass__spinner",children:"⏳"})]})}),o.jsx("style",{children:Xd})]});if(z)return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"damage-pass-overlay",children:o.jsxs("div",{className:"damage-pass-card",children:[o.jsx("p",{className:"damage-pass__eyebrow",children:"— 伤害分配 —"}),o.jsx("h2",{className:"damage-pass__title",children:"请将设备交给"}),o.jsx("div",{className:"damage-pass__player",children:x}),o.jsx("p",{className:"damage-pass__context",children:_?"【瞄准加成】攻方有权指定第一张要摧毁的卡牌":`防方选择要摧毁的 ${d} 张卡牌（可自动分配）`}),o.jsxs("button",{className:"damage-pass__btn",onClick:()=>h(v),children:[x," 已准备"]})]})}),o.jsx("style",{children:Xd})]});const D=m.hand.filter(B=>!B.destroyed),E=m.plotSeg1&&!m.plotSeg1.destroyed?[m.plotSeg1]:[],$=m.plotSeg2&&!m.plotSeg2.destroyed?[m.plotSeg2]:[],L=m.auxiliary.filter(B=>!B.destroyed),M=m.deck.filter(B=>!B.destroyed),O=[];D.length>0&&O.push({label:"手牌",cards:D}),E.length>0&&O.push({label:"布局格",sublabel:"主要阶段1",cards:E}),$.length>0&&O.push({label:"布局格",sublabel:"主要阶段2",cards:$}),L.length>0&&O.push({label:"辅助区",cards:L});const H=M[0]??null;return o.jsxs("div",{className:"action-hud",children:[o.jsxs("div",{className:"action-hud__panel action-hud__panel--damage",children:[o.jsxs("div",{className:"damage-panel__header",children:[o.jsx("span",{className:"damage-panel__title",children:"⚔️ 伤害分配"}),o.jsx("span",{className:"damage-panel__player",children:_?`${x} (瞄准指定)`:x}),o.jsxs("span",{className:"damage-panel__remaining",children:["还需摧毁 ",o.jsx("strong",{children:d})," 张卡牌"]})]}),(e.destroyedBombCount??0)>0&&o.jsxs("div",{className:"damage-panel__bomb-alert",children:["💣 已选中 ",e.destroyedBombCount," 张炸弹卡，选完后将进行誘爆检查"]}),o.jsx("div",{className:"damage-panel__hint",children:_?`【瞄准加成】攻方有权指定第一张要摧毁的卡牌！可从手牌、辅助区、卡组、布局格中选择。请 ${x} 选择：`:e.source==="ranged"?"射击伤害：须先从手牌 / 布局格 / 辅助区选择卡牌破坏，不足部分自动从牌组顶破坏。":"牌组与弃牌区已耗尽，近战伤害切换为自选模式。请从手牌 / 布局格 / 辅助区选择。"}),o.jsxs("div",{className:"damage-panel__zones",children:[O.map((B,U)=>o.jsxs("div",{className:"damage-zone",children:[o.jsxs("span",{className:"damage-zone__label",children:[B.label,B.sublabel&&o.jsxs("span",{className:"damage-zone__sub",children:["（",B.sublabel,"）"]})]}),o.jsx("div",{className:"damage-zone__cards",children:B.cards.map(N=>{const V=n(N.defId),F=(V==null?void 0:V.nameCn)??N.defId,P=u.includes(N.instanceId),R=V!=null&&V.frontImageId?`/assets/${V.frontImageId}`:null;return o.jsxs("button",{className:`damage-card-btn ${P?"damage-card-btn--selected":""} ${V!=null&&V.hasBombIcon?"damage-card-btn--bomb":""}`,onClick:()=>j(N.instanceId),disabled:P,title:`${F} (${(V==null?void 0:V.actionType)??"?"})${V!=null&&V.hasBombIcon?" ⚠️ 含诱爆":""}`,...R?f(R):{},children:[o.jsx("span",{className:"damage-card-btn__name",children:F}),(V==null?void 0:V.isKaiVariant)&&o.jsx("span",{className:"damage-card-btn__det",title:"改型",children:"◆"}),(V==null?void 0:V.hasBombIcon)&&o.jsx("span",{className:"damage-card-btn__det damage-card-btn__bomb-icon",title:"诱爆卡",children:"💣"})]},N.instanceId)})})]},U)),H&&(e.source!=="ranged"||_)&&o.jsxs("div",{className:"damage-zone",children:[o.jsxs("span",{className:"damage-zone__label",children:["卡组",o.jsxs("span",{className:"damage-zone__sub",children:["（共 ",M.length," 张，正面朝下）"]})]}),o.jsx("div",{className:"damage-zone__cards",children:o.jsxs("button",{className:"damage-card-btn damage-card-btn--deck",onClick:()=>j(H.instanceId),title:"从卡组顶部翻开并摧毁 1 张（诱爆正常触发）",children:[o.jsx("span",{className:"damage-card-btn__deck-back",children:"🂠"}),o.jsx("span",{className:"damage-card-btn__name",children:"顶部 × 1"})]})})]}),H&&e.source==="ranged"&&!_&&o.jsxs("div",{className:"damage-zone",children:[o.jsxs("span",{className:"damage-zone__label",children:["卡组",o.jsxs("span",{className:"damage-zone__sub",children:["（共 ",M.length," 张）"]})]}),o.jsx("div",{className:"damage-zone__cards",children:o.jsxs("div",{className:"damage-card-btn damage-card-btn--deck",style:{opacity:.5,cursor:"default"},title:"射击伤害的牌组部分将在选完表牌后自动从顶部破坏",children:[o.jsx("span",{className:"damage-card-btn__deck-back",children:"🂠"}),o.jsx("span",{className:"damage-card-btn__name",children:"自动破坏"})]})})]})]}),o.jsx("div",{className:"damage-panel__actions",children:o.jsx("button",{className:"action-hud__skip-btn",onClick:S,title:"剩余伤害将从牌库顶部自动摧毁",children:"自动分配剩余伤害"})})]}),o.jsx(Ia,{zoom:p})]})}const Yd=`
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

/* ═══════════════════════════════════════════════════════
   Mobile Responsive Overrides
   ═══════════════════════════════════════════════════════ */
@media (max-width: 768px) {
  .action-hud {
    left: 0;
    right: 0;
    bottom: 0;
    transform: none;
    padding: 0;
  }

  .action-hud__panel {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
    padding: 10px 14px;
    border-radius: 0;
    border-left: none;
    border-right: none;
    border-bottom: none;
    max-width: none;
    width: 100%;
  }

  .action-hud__panel--combat {
    max-width: none;
  }

  .action-hud__mover {
    font-size: 0.9rem;
  }

  .action-hud__hint {
    font-size: 0.78rem;
  }

  .action-hud__skip-btn,
  .action-hud__attack-btn,
  .action-hud__sensor-btn {
    padding: 12px 20px;
    font-size: 0.9rem;
    min-height: 44px;
    width: 100%;
    text-align: center;
  }

  .facing-compass {
    justify-content: center;
    gap: 6px;
    padding: 6px 12px;
  }

  .facing-compass__btn {
    padding: 8px 14px;
    font-size: 0.85rem;
    min-height: 44px;
    min-width: 44px;
  }

  /* Damage selection panel */
  .action-hud__panel--damage {
    max-width: none;
    min-width: 0;
    max-height: 70vh;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  .damage-panel__zones {
    max-height: 40vh;
  }

  .damage-card-btn {
    padding: 8px 12px;
    font-size: 0.82rem;
    min-height: 44px;
  }

  .damage-panel__actions {
    justify-content: stretch;
  }

  .damage-panel__actions .action-hud__skip-btn {
    width: 100%;
  }
}
`,Xd=`
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

@media (max-width: 768px) {
  .damage-pass-card {
    max-width: 90vw;
    padding: 28px 20px;
  }

  .damage-pass__player {
    font-size: 1.6rem;
  }

  .damage-pass__btn {
    padding: 14px 28px;
    min-height: 48px;
    width: 100%;
  }

  .damage-pass__spinner {
    font-size: 2rem;
  }
}
`;function Av({onBack:e}){return o.jsxs("div",{className:"rules-page",children:[o.jsxs("div",{className:"rules-page__header",children:[o.jsx("button",{className:"rules-back-btn",onClick:e,children:"← 返回"}),o.jsx("h1",{className:"rules-page__title",children:"游戏规则"}),o.jsx("span",{className:"rules-page__subtitle",children:"エムブリオマシン"})]}),o.jsxs("div",{className:"rules-page__body",children:[o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"游戏概述"}),o.jsx("p",{children:"《胚胎机器》是一款双人对战策略游戏。每位玩家控制一台战机（机体），通过秘密布置行动牌来控制机体的移动与战斗。 当对手满足任意一项败北条件时，本方获胜。"})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"准备阶段"}),o.jsxs("ol",{className:"rules-list",children:[o.jsx("li",{children:"双方各选择一台机体，机体自带专属牌组。"}),o.jsx("li",{children:"选择地图，确定双方初始出生区域（地图短边中央3格）。"}),o.jsxs("li",{children:["将各自牌组洗混，游戏开始时双方各抽取等同于本机",o.jsx("b",{children:"回避值"}),"数量的手牌。"]}),o.jsx("li",{children:"双方机体初始机头朝向对手方向（玩家1朝南，玩家2朝北）。"})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"回合流程"}),o.jsxs("div",{className:"rules-flow",children:[o.jsxs("div",{className:"rules-flow__step",children:[o.jsx("span",{className:"rules-flow__num",children:"1"}),o.jsxs("div",{children:[o.jsx("strong",{children:"抽牌阶段"}),o.jsxs("p",{children:["双方各从牌组顶抽取等同于自己机体",o.jsx("b",{children:"回避值"}),"数量的牌。若牌组耗尽，废弃区的牌重新洗混后继续抽取。"]})]})]}),o.jsxs("div",{className:"rules-flow__step",children:[o.jsx("span",{className:"rules-flow__num",children:"2"}),o.jsxs("div",{children:[o.jsx("strong",{children:"布局阶段"}),o.jsxs("p",{children:["双方各自秘密为",o.jsx("b",{children:"主要阶段1"}),"和",o.jsx("b",{children:"主要阶段2"}),"各布置一张行动牌（面朝下）， 然后将设备交给对方进行同样操作。双方确认后，翻开亮牌，进入行动阶段。"]})]})]}),o.jsxs("div",{className:"rules-flow__step",children:[o.jsx("span",{className:"rules-flow__num",children:"3"}),o.jsxs("div",{children:[o.jsx("strong",{children:"行动主要阶段1 & 主要阶段2"}),o.jsxs("p",{children:["每个段落依次经历四个时机：",o.jsx("b",{children:"移动 → 射击 → 近战 → 特殊"}),'。 每个时机内，双方按该时机的优先顺序依次行动（详见"行动顺序"）。']})]})]}),o.jsxs("div",{className:"rules-flow__step",children:[o.jsx("span",{className:"rules-flow__num",children:"4"}),o.jsxs("div",{children:[o.jsx("strong",{children:"清理阶段"}),o.jsx("p",{children:"将已布置的牌（主要阶段1→主要阶段2顺序）和手中剩余的牌全部放入废弃区，准备下一回合。"})]})]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"行动顺序与先制值"}),o.jsxs("p",{children:["每台机体有固定的",o.jsx("b",{children:"先制值（数字越大越快）"}),"。先制值高的玩家在每个时机优先行动，但不同时机的排序逻辑有所不同："]}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"移动时机："}),"先比较该段落的",o.jsx("b",{children:"移动牌面数值"}),"（移动值大的先动）；移动值相同时再比先制值。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"射击/近战/特殊时机："}),"直接按",o.jsx("b",{children:"先制值"}),"排序（高者先行动）。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"平局处理："}),"先制值相同时，玩家1优先行动。"]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"机头朝向与攻击扇区"}),o.jsxs("p",{children:["每台机体具有明确的",o.jsx("b",{children:"机头朝向"}),"（N/S/E/W），初始朝向对手方向。"]}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"攻击限制："}),"射击攻击只能对准",o.jsx("b",{children:"机体正前方（含正侧方延长线）180°扇区"}),"内的目标。目标在机体正后方时无法射击。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"朝向更新："}),"机体移动后，机头自动朝向移动方向。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"手动调整："}),'可在白兵时机前使用"调整朝向"按钮免费更改机头方向，无需消耗任何牌。']}),o.jsxs("li",{children:[o.jsx("b",{children:"近战无扇区限制："}),"白兵/突击攻击不受前方扇区约束，可攻击相邻格的敌方。"]})]}),o.jsx("p",{className:"rules-note",children:"注：扇区边界（正侧方延长线上的格子）视为前方，可以攻击。"})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"行动时机说明"}),o.jsxs("div",{className:"rules-timing-grid",children:[o.jsxs("div",{className:"rules-timing-card",children:[o.jsx("span",{className:"rules-timing-icon",children:"🏃"}),o.jsx("strong",{children:"移动时机"}),o.jsxs("p",{children:["若该段落布局的是",o.jsx("b",{children:"移动牌"}),"，则可在地图上移动。移动力数值决定可移动格数；地形代价和高度差均额外消耗移动力。无移动牌则自动跳过。"]})]}),o.jsxs("div",{className:"rules-timing-card",children:[o.jsx("span",{className:"rules-timing-icon",children:"🎯"}),o.jsx("strong",{children:"射击时机"}),o.jsxs("p",{children:["若该段落布局的是",o.jsx("b",{children:"射击牌"}),"，可对正前方扇区内、射程范围内且视线通畅的敌方发动远程攻击。若",o.jsx("b",{children:"主要阶段1布置了瞄准牌"}),"，则主要阶段2的射击伤害额外+1。"]})]}),o.jsxs("div",{className:"rules-timing-card",children:[o.jsx("span",{className:"rules-timing-icon",children:"⚔️"}),o.jsx("strong",{children:"近战时机"}),o.jsxs("p",{children:["若该段落布局的是",o.jsx("b",{children:"近战牌"}),"，可对",o.jsx("b",{children:"相邻格（切比雪夫距离=1）"}),"的敌方发动近战攻击，无扇区限制。主要阶段1有瞄准牌时，主要阶段2的近战伤害也+1。"]})]}),o.jsxs("div",{className:"rules-timing-card",children:[o.jsx("span",{className:"rules-timing-icon",children:"⚡"}),o.jsx("strong",{children:"特殊时机"}),o.jsxs("p",{children:[o.jsx("b",{children:"突击牌"}),"→冲锋至目标相邻格再发动突击；",o.jsx("b",{children:"机雷牌"}),"→在附近格部署机雷；",o.jsx("b",{children:"护甲牌"}),"→在本时机被动生效（减少受到的伤害）。无特殊牌则跳过。"]})]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"移动规则"}),o.jsxs("p",{children:["移动时，机体从当前格出发按移动牌数值进行扩展，每进入一个格子消耗对应地形的基础代价 ",o.jsx("b",{children:"加上高度差"}),"："]}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"地形"}),o.jsx("th",{children:"基础移动代价"}),o.jsx("th",{children:"战斗效果"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"平地"}),o.jsx("td",{children:"1"}),o.jsx("td",{children:"无"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"砂地"}),o.jsx("td",{children:"1"}),o.jsx("td",{children:"无"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"废墟"}),o.jsx("td",{children:"2"}),o.jsx("td",{children:"无"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"森林"}),o.jsx("td",{children:"2"}),o.jsx("td",{children:"处于其中的机体受到射击伤害 −1（掩护）"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"高地"}),o.jsx("td",{children:"1 + 高度差*"}),o.jsx("td",{children:"可遮蔽视线（高地墙）；本身无伤害加成"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"水域"}),o.jsx("td",{children:"3"}),o.jsx("td",{children:"在其中发射能量武器时伤害 −1"})]})]})]}),o.jsx("p",{className:"rules-note",children:"* 高度差代价：进入比当前格海拔更高的地形时，额外消耗等同于高度差的移动力（例如从海拔0进入海拔2，共消耗 1+2=3 点）。下坡无额外代价。"}),o.jsx("p",{className:"rules-note",children:"注：机体不能占据对手所在的格子。移动途中触碰到敌方机雷将立即停止并引爆。"})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"射程、视线与距离衰减"}),o.jsxs("p",{children:["距离使用",o.jsx("b",{children:"切比雪夫距离"}),"（8方向棋格距离：行差与列差的最大值）。 射击牌有最小射程和最大射程，目标须在此范围内。"]}),o.jsx("p",{children:"视线（LOS）检查规则："}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"森林不阻断视线，"}),"但能为处于其中的机体提供掩护（受击伤害-1）。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"高地阻断："}),"若射线上存在海拔高于攻防双方的高地格，则视线被遮挡，无法射击。"]}),o.jsx("li",{children:"其他地形（平地、砂地、废墟、水域）均不影响视线。"})]}),o.jsxs("p",{children:[o.jsx("b",{children:"距离衰减（部分武器）："}),'部分武器卡设有"最佳射程"，超出最佳射程后每多1格伤害递减（递减值见卡面），但不超过最大射程仍可开火。']})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"伤害与摧毁"}),o.jsxs("p",{children:["攻击命中后，系统计算最终伤害值，然后进入",o.jsx("b",{children:"伤害分配"}),"。伤害来源不同，分配规则不同："]}),o.jsx("p",{children:o.jsx("b",{children:"🎯 射击伤害（防守方自由选择）："})}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:["防守方可自由选择要摧毁的牌，范围包括：手牌、辅助区、",o.jsx("b",{children:"已布局的牌（主要阶段1/2）"}),"以及牌组中的牌。"]}),o.jsx("li",{children:'每次选1张，直至选满伤害值。也可点击"确认"将剩余伤害交由系统从牌组顶端自动处理。'}),o.jsxs("li",{children:[o.jsx("b",{children:"使用了瞄准牌的射击："}),"攻击方额外获得一项权利——可",o.jsx("b",{children:"指定"}),"防守方必须销毁的第一张牌。"]})]}),o.jsx("p",{children:o.jsx("b",{children:"⚔️ 白兵/突击伤害（强制翻牌库顶）："})}),o.jsxs("ul",{className:"rules-list",children:[o.jsx("li",{children:"防守方无权选择，系统直接从牌库顶翻牌销毁，数量等于最终伤害值。"}),o.jsx("li",{children:"牌库翻完后从废弃区重洗继续。"})]}),o.jsx("p",{children:o.jsx("b",{children:"💣 爆弹标记诱爆："})}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:["若被摧毁的牌带有",o.jsx("b",{children:"爆弹标记（💣）"}),"，将额外追加摧毁1张牌（从牌库顶强制翻出）。"]}),o.jsxs("li",{children:["该额外摧毁",o.jsx("b",{children:"不会"}),"再触发新的连锁诱爆（每次伤害结算中仅触发1次诱爆）。"]}),o.jsx("li",{children:'注意：◆标记是区分"改"型变种卡的符号，与诱爆无关。'})]}),o.jsx("p",{className:"rules-note",children:"注：若牌组耗尽，继续从废弃区（重新洗混后）取牌销毁。"})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"卡牌类型"}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"类型"}),o.jsx("th",{children:"使用时机"}),o.jsx("th",{children:"说明"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"移动牌"}),o.jsx("td",{children:"移动时机"}),o.jsx("td",{children:"按牌面数值移动；机体沿4方向移动，移动后机头自动朝向移动方向"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"射击牌"}),o.jsx("td",{children:"射击时机"}),o.jsx("td",{children:"远程攻击，需在机头前方扇区内、射程内且视线通畅；部分武器具有距离衰减"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"近战牌"}),o.jsx("td",{children:"近战时机"}),o.jsx("td",{children:"攻击相邻格（切比雪夫距离=1）的敌方，无扇区限制"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"突击牌"}),o.jsx("td",{children:"特殊时机"}),o.jsx("td",{children:"先冲锋至目标相邻格，再以（突击值−被突击防御值）为基础伤害发动突击；白兵/突击伤害强制从牌库顶翻出"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"护甲牌"}),o.jsx("td",{children:"被动防御"}),o.jsx("td",{children:"布局后，本段受到攻击时每张护甲牌抵消1点伤害"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"瞄准牌"}),o.jsx("td",{children:"攻击辅助"}),o.jsxs("td",{children:["布置于",o.jsx("b",{children:"主要阶段1"}),"时，使",o.jsx("b",{children:"主要阶段2"}),"的射击/近战/突击攻击伤害+1，且攻方可指定防守方销毁目标"]})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"机雷牌"}),o.jsx("td",{children:"特殊时机"}),o.jsx("td",{children:"在机体周围格部署机雷；敌方移动途经该格时自动引爆，造成机雷伤害"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"特殊牌"}),o.jsx("td",{children:"—"}),o.jsx("td",{children:"ダミー等占位牌，无实际效果"})]})]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"胜利条件"}),o.jsx("p",{children:"每次伤害结算结束后，系统自动检查双方是否满足败北条件。满足任意一条即判败："}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"牌组耗尽："}),"尚未进入破坏区的所有牌（手牌 + 牌库 + 辅助区 + ",o.jsx("b",{children:"已布局的牌"}),"）总数 ≤ 3"]}),o.jsxs("li",{children:[o.jsx("b",{children:"战力耗尽："}),"所有",o.jsx("b",{children:"攻击牌"}),"（射击牌、近战牌、突击牌）均被摧毁"]})]}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:["若对手率先满足败北条件 → ",o.jsx("b",{children:"己方获胜"})]}),o.jsxs("li",{children:["若双方同时满足 → ",o.jsx("b",{children:"平局"})]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"高级效果速查"}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"效果"}),o.jsx("th",{children:"触发条件"}),o.jsx("th",{children:"具体效果"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"瞄准"}),o.jsx("td",{children:"主要阶段1布局瞄准牌 + 主要阶段2布局攻击牌"}),o.jsxs("td",{children:["主要阶段2的射击/近战/突击伤害+1；且攻方可指定防守方",o.jsx("b",{children:"必须"}),"销毁的第一张牌"]})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"装甲"}),o.jsx("td",{children:"防守方在被攻击段落布局了护甲牌"}),o.jsx("td",{children:"每张护甲牌抵消1点最终伤害（下限为0）"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"森林掩护"}),o.jsx("td",{children:"防守方站在森林格中被射击"}),o.jsx("td",{children:"受到的射击伤害 −1（近战/突击无此效果）"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"水域衰减"}),o.jsx("td",{children:"攻击方站在水域中使用能量武器射击"}),o.jsx("td",{children:"射击伤害 −1"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"突击冲锋"}),o.jsx("td",{children:"突击牌布局后在特殊时机选择目标"}),o.jsx("td",{children:'先自动移动至目标相邻格，再造成（突击值−被突击防御）点伤害；伤害来源为"突击"，强制从牌库顶翻出'})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"机雷部署"}),o.jsx("td",{children:"机雷牌布局后在特殊时机选择格子"}),o.jsx("td",{children:"放置机雷标记；敌方途经时立即停止并承受机雷伤害，机雷随即消失"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"💣 爆弹诱爆"}),o.jsx("td",{children:"带爆弹标记（💣）的牌被摧毁时"}),o.jsx("td",{children:"额外从牌库顶翻出1张牌强制销毁；该额外销毁不再触发新的连锁"})]})]})]})]}),o.jsxs("section",{className:"rules-section rules-section--diff",children:[o.jsx("h2",{className:"rules-section__title rules-section__title--diff",children:"⚠ 本版本与官方原版的已知差异"}),o.jsx("p",{className:"rules-note",children:"以下是本网游版出于实现便捷性而保留的简化，与桌游官方规则（规则书/FAQ）存在差异。"}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"规则项"}),o.jsx("th",{children:"本版本实现"}),o.jsx("th",{children:"官方原版规则"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"诱爆机制"}),o.jsx("td",{children:"爆弹牌被销毁时立即追加1次额外销毁，连锁止于1层"}),o.jsx("td",{children:"所有伤害结算完毕后，统计本次被销毁的爆弹牌数N，从牌库顶翻N张：其中有爆弹标记的被销毁，无标记的入废弃堆（可能触发多轮连锁）"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"射击伤害选牌顺序"}),o.jsx("td",{children:"防守方可自由从任意区域（含牌库）选择销毁目标"}),o.jsx("td",{children:"应优先从手牌、辅助区、布局区中选择，牌库最后选取"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"回避掷骰"}),o.jsx("td",{children:"未实现；机体回避值仅影响抽牌数量"}),o.jsx("td",{children:"攻击命中前需进行回避判定；回避值影响躲避成功率"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"先制平局"}),o.jsx("td",{children:"先制值相同时玩家1固定优先"}),o.jsx("td",{children:"应由队伍标记物编号（チームチット番号）决定"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"对战模式"}),o.jsx("td",{children:"本机热座 1v1"}),o.jsx("td",{children:"官方支持最多 4v4 双人组队对战"})]})]})]})]})]}),o.jsx("style",{children:Vv})]})}const Vv=`
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
`;function Pv({onBack:e}){const[n,t]=w.useState("maps");return o.jsxs("div",{className:"data-page",children:[o.jsxs("div",{className:"data-page__header",children:[o.jsx("button",{className:"data-page__back",onClick:e,children:"← 返回"}),o.jsx("h1",{className:"data-page__title",children:"游戏资料"})]}),o.jsxs("div",{className:"data-page__tabs",children:[o.jsx("button",{className:`data-tab ${n==="maps"?"data-tab--active":""}`,onClick:()=>t("maps"),children:"地图"}),o.jsx("button",{className:`data-tab ${n==="units"?"data-tab--active":""}`,onClick:()=>t("units"),children:"机体"}),o.jsx("button",{className:`data-tab ${n==="cards"?"data-tab--active":""}`,onClick:()=>t("cards"),children:"卡牌"})]}),o.jsxs("div",{className:"data-page__content",children:[n==="maps"&&o.jsx(Lv,{}),n==="units"&&o.jsx(Kv,{}),n==="cards"&&o.jsx(Jv,{})]}),o.jsx("style",{children:Gv})]})}const Af={plain:"#8fbc5a",sand:"#d4b483",rubble:"#9e8f7a",forest:"#2d7a2d",water:"#4477cc",highland:"#c4955a"},Vf={plain:"平地",sand:"沙地",rubble:"瓦砾",forest:"森林",water:"水域",highland:"高地"};function Lv(){const[e,n]=w.useState(Ze[0].id),t=Ze.find(a=>a.id===e);return o.jsxs("div",{className:"maps-panel",children:[o.jsx("div",{className:"maps-panel__selector",children:Ze.map(a=>o.jsx("button",{className:`map-sel-btn ${a.id===e?"map-sel-btn--active":""}`,onClick:()=>n(a.id),children:a.nameCn},a.id))}),o.jsxs("div",{className:"maps-panel__body",children:[o.jsx(Rv,{map:t}),o.jsx(Ov,{})]})]})}function Rv({map:e}){const n=new Set(e.startZones[0].map(a=>`${a.row},${a.col}`)),t=new Set(e.startZones[1].map(a=>`${a.row},${a.col}`));return o.jsxs("div",{className:"mini-map-wrapper",children:[o.jsxs("div",{className:"mini-map__title",children:[e.nameCn,"（",e.width,"×",e.height,"）"]}),o.jsx("div",{className:"mini-map__grid",style:{gridTemplateColumns:`repeat(${e.width}, 28px)`,gridTemplateRows:`repeat(${e.height}, 28px)`},children:e.cells.flatMap((a,r)=>a.map((i,s)=>{const c=`${r},${s}`,d=n.has(c),u=t.has(c),p=Af[i.terrain]??"#888";return o.jsxs("div",{className:"mini-map__cell",style:{background:p},title:`(${s},${r}) ${Vf[i.terrain]??i.terrain}${i.terrain==="highland"?" Lv"+i.elevation:""}`,children:[d&&o.jsx("span",{className:"mini-map__marker mini-map__marker--p1",children:"①"}),u&&o.jsx("span",{className:"mini-map__marker mini-map__marker--p2",children:"②"}),i.terrain==="highland"&&o.jsx("span",{className:"mini-map__elev",children:i.elevation})]},c)}))})]})}function Ov(){return o.jsxs("div",{className:"map-legend",children:[o.jsx("div",{className:"map-legend__title",children:"地形图例"}),Object.entries(Vf).map(([e,n])=>o.jsxs("div",{className:"map-legend__item",children:[o.jsx("span",{className:"map-legend__swatch",style:{background:Af[e]}}),o.jsx("span",{children:n})]},e)),o.jsxs("div",{className:"map-legend__item",children:[o.jsx("span",{className:"map-legend__marker-demo mini-map__marker--p1",children:"①"}),o.jsx("span",{children:"玩家1出发区"})]}),o.jsxs("div",{className:"map-legend__item",children:[o.jsx("span",{className:"map-legend__marker-demo mini-map__marker--p2",children:"②"}),o.jsx("span",{children:"玩家2出发区"})]}),o.jsx("div",{className:"map-legend__note",children:"高地格显示海拔等级（1–3），移动力消耗与平地相同，提供射程视野优势。"})]})}function Kv(){return o.jsxs("div",{className:"units-panel",children:[o.jsxs("table",{className:"units-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"机体"}),o.jsx("th",{children:"日文名"}),o.jsx("th",{children:"型号"}),o.jsx("th",{children:"先制"}),o.jsx("th",{children:"移动"}),o.jsx("th",{children:"回避"}),o.jsx("th",{children:"突击"}),o.jsx("th",{children:"防突击"})]})}),o.jsx("tbody",{children:[...q].sort((e,n)=>e.initiative-n.initiative).map(e=>o.jsxs("tr",{children:[o.jsxs("td",{className:"units-table__name",children:[o.jsx("img",{src:`/assets/tokens/${e.tokenId}`,alt:e.nameCn,className:"units-table__token",onError:n=>{n.target.style.display="none"}}),e.nameCn]}),o.jsx("td",{className:"units-table__ja",children:e.nameJa}),o.jsx("td",{children:e.type}),o.jsx("td",{className:"units-table__num",children:e.initiative}),o.jsx("td",{className:"units-table__num",children:e.movement}),o.jsx("td",{className:"units-table__num",children:e.evasion}),o.jsx("td",{className:"units-table__num",children:e.assault}),o.jsx("td",{className:"units-table__num",children:e.assaultDef})]},e.id))})]}),o.jsxs("div",{className:"units-note",children:[o.jsx("strong",{children:"型号说明："}),"SS/S/M/L/LL = 体型；軽/中/重 = 重量等级；単座 = 单人驾驶。 先制值越小先手越快，移动值为每回合最大移动格数，回避值为被击中时消耗的伤害数量。"]})]})}const Pf={movement:"移动",ranged:"射击",melee:"近战",special:"特殊",mine:"机雷",aim:"瞄准",armor:"装甲",charge:"突击",auxiliary:"辅助"},Lf={movement:"#66ccaa",ranged:"#4499ee",melee:"#ff9944",special:"#cc88ff",mine:"#ff6688",aim:"#ffdd44",armor:"#88aacc",charge:"#ff6644",auxiliary:"#aaaacc"};function Jv(){const e=Object.keys(fa),[n,t]=w.useState(e[0]),a=fa[n]??[];let r=n;const i=q.find(s=>n.startsWith(s.deckCode));return i&&(n.endsWith("+")?r=`${i.nameCn} (Plus)`:r=i.nameCn),o.jsxs("div",{className:"cards-panel",children:[o.jsx("div",{className:"cards-panel__unit-tabs",children:e.map(s=>{const c=q.find(p=>s.startsWith(p.deckCode));let d=s,u=null;return c&&(u=`/assets/tokens/${c.tokenId}`,d=s.endsWith("+")?`${c.nameCn}+`:c.nameCn),o.jsxs("button",{className:`unit-tab ${s===n?"unit-tab--active":""}`,onClick:()=>t(s),children:[u&&o.jsx("img",{src:u,alt:d,className:"unit-tab__token",onError:p=>{p.target.style.display="none"}}),o.jsx("span",{children:d})]},s)})}),o.jsxs("div",{className:"cards-panel__header",children:[o.jsx("span",{className:"cards-panel__unit-name",children:r}),o.jsxs("span",{className:"cards-panel__count",children:["共 ",a.length," 张卡牌"]})]}),o.jsx("div",{className:"cards-panel__summary",children:o.jsx(Bv,{deck:a})}),o.jsx("div",{className:"cards-panel__list",children:a.map(s=>o.jsx(Fv,{card:s},s.id))})]})}function Bv({deck:e}){const n={};for(const t of e)n[t.actionType]=(n[t.actionType]??0)+1;return o.jsx("div",{className:"card-type-summary",children:Object.entries(n).sort(([t],[a])=>t.localeCompare(a)).map(([t,a])=>o.jsxs("span",{className:"card-type-badge",style:{background:Lf[t]??"#888"},children:[Pf[t]??t," ×",a]},t))})}function Fv({card:e}){const n=Pf[e.actionType]??e.actionType,t=Lf[e.actionType]??"#888",{zoom:a,getZoomHandlers:r}=_a(),i=`/assets/${e.frontImageId}`;let s="";return e.actionType==="movement"&&e.movementValue!==void 0?s=`移动 ${e.movementValue}`:(e.actionType==="ranged"||e.actionType==="melee")&&e.damage!==void 0?e.rangeMin!==void 0&&e.rangeMax!==void 0?s=`射程 ${e.rangeMin}–${e.rangeMax}  伤害 ${e.damage}`:s=`伤害 ${e.damage}`:e.actionType==="charge"&&e.damage!==void 0&&(s=`伤害 ${e.damage}`),o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"card-row",...r(i),children:[o.jsx("div",{className:"card-row__image-wrap",children:o.jsx("img",{src:i,alt:e.nameCn,className:"card-row__image",onError:c=>{c.target.style.display="none"}})}),o.jsx("span",{className:"card-row__type",style:{background:t},children:n}),o.jsx("span",{className:"card-row__name",children:e.nameCn}),e.effectText?o.jsx("span",{className:"card-row__effect",children:e.effectText}):s&&o.jsx("span",{className:"card-row__detail",children:s}),e.isKaiVariant&&o.jsx("span",{className:"card-row__kai",title:"改型标记",children:"◆"}),e.hasBombIcon&&o.jsx("span",{className:"card-row__bomb",title:"诱爆",children:"💥"})]}),o.jsx(Ia,{zoom:a})]})}const Gv=`
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
`;function Yo(){const{state:e,getCard:n,exposureMode:t}=Ne(),[a,r]=w.useState(null),{zoom:i,getZoomHandlers:s}=_a(),c=e.phase==="plotting"?e.plottingStep==="player2"?"player2":"player1":e.activePlayer??"player1",d=a??c,u=e.players[d],p=q.find(h=>h.id===u.unitId),f=t?!1:Uv(e),g={N:"↑北",S:"↓南",E:"→东",W:"←西"}[u.facing]??u.facing;return o.jsxs("div",{className:"mp",children:[o.jsxs("div",{className:"mp__tabs",children:[e.playerIds.map(h=>o.jsxs("button",{className:`mp__tab ${d===h?"mp__tab--active":""}`,onClick:()=>r(m=>m===h?null:h),children:[`P${e.playerIds.indexOf(h)+1}`,h===c&&o.jsx("span",{className:"mp__tab-dot"})]},h)),o.jsx("span",{className:"mp__phase-hint",children:e.phase==="plotting"?"布局中":"行动中"})]}),p&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"mp__header",children:[o.jsx("img",{src:`/assets/tokens/${p.tokenId}`,alt:p.nameCn,className:"mp__token",onError:h=>{h.target.style.opacity="0.3"}}),o.jsxs("div",{className:"mp__header-info",children:[o.jsx("div",{className:"mp__unit-name",children:p.nameCn}),o.jsx("div",{className:"mp__unit-sub",children:p.nameJa}),o.jsxs("div",{className:"mp__pos",children:["格 (",u.position.row,",",u.position.col,")   ",g]})]})]}),o.jsxs("div",{className:"mp__stats",children:[o.jsx(Aa,{label:"先制",value:p.initiative,color:"#f0c040"}),o.jsx(Aa,{label:"移动",value:p.movement,color:"#66ccaa"}),o.jsx(Aa,{label:"回避",value:p.evasion,color:"#88aaff"}),o.jsx(Aa,{label:"突击",value:p.assault,color:"#ff9944"}),o.jsx(Aa,{label:"被突",value:p.assaultDef,color:"#ff6666"})]}),o.jsxs("div",{className:"mp__zones",children:[o.jsxs("div",{className:"mp__zone mp__zone--aux",children:[o.jsx("div",{className:"mp__zone-label",children:"辅助区"}),u.auxiliary.length===0?o.jsx("div",{className:"mp__zone-empty",children:"—"}):(()=>{const h=new Map;for(const b of u.auxiliary){const _=n(b.defId),v=(_==null?void 0:_.nameJa)??b.defId,x=h.get(v);x?(x.totalCount++,b.destroyed||x.liveCount++):h.set(v,{nameCn:(_==null?void 0:_.nameCn)??b.defId,liveCount:b.destroyed?0:1,totalCount:1})}const m=b=>{const _=jn(u,n,"movement"),v=jn(u,n,"melee"),x=jn(u,n,"charge");return b==="バーニア"?_.vernier||v.vernier:b==="ムーブセンサー"?v.moveSensor:b==="ホイール"?_.wheel||x.wheel:!1};return o.jsxs(o.Fragment,{children:[u.auxiliary.map(b=>{const _=n(b.defId),v=_!=null&&_.frontImageId?`/assets/${_.frontImageId}`:null;return o.jsxs("div",{className:`mp__aux-card${b.destroyed?" mp__aux-card--destroyed":""}`,...v?s(v):{},children:[o.jsx("span",{className:"mp__aux-name",children:(_==null?void 0:_.nameCn)??b.defId}),b.destroyed&&o.jsx("span",{className:"mp__aux-dead",children:"✕"})]},b.instanceId)}),o.jsx("div",{className:"mp__aux-badges",children:Array.from(h.entries()).map(([b,_])=>{const v=m(b);return o.jsxs("div",{className:`mp__aux-status ${v?"mp__aux-status--on":"mp__aux-status--off"}`,title:v?"效果激活中":"需要≥2张存活才能激活",children:[v?"✓":"✗"," ",_.nameCn,o.jsxs("span",{className:"mp__aux-count",children:["(",_.liveCount,"/",_.totalCount,")"]})]},b)})})]})})()]}),o.jsxs("div",{className:"mp__counts",children:[o.jsx(eo,{icon:"🃏",label:"手牌",count:u.hand.filter(h=>!h.destroyed).length}),o.jsx(eo,{icon:"📚",label:"牌库",count:u.deck.filter(h=>!h.destroyed).length}),o.jsx(eo,{icon:"♻️",label:"弃牌",count:u.discard.filter(h=>!h.destroyed).length}),o.jsx(eo,{icon:"💀",label:"破坏",count:u.destroyedCards.length})]})]}),o.jsxs("div",{className:"mp__plot",children:[o.jsx("div",{className:"mp__plot-label",children:"布局段落"}),o.jsxs("div",{className:"mp__plot-slots",children:[o.jsx(Qd,{label:"主要阶段一",card:u.plotSeg1,getCard:n,hidden:f,getZoomHandlers:s}),o.jsx(Qd,{label:"主要阶段二",card:u.plotSeg2,getCard:n,hidden:f,getZoomHandlers:s})]})]})]}),o.jsx("style",{children:Hv}),o.jsx(Ia,{zoom:i})]})}function Uv(e,n){return e.phase==="plotting"?e.plottingStep!=="complete":!1}function Aa({label:e,value:n,color:t}){return o.jsxs("div",{className:"mp__stat",children:[o.jsx("span",{className:"mp__stat-lbl",children:e}),o.jsx("span",{className:"mp__stat-val",style:{color:t},children:n})]})}function eo({icon:e,label:n,count:t}){return o.jsxs("div",{className:"mp__zcount",children:[o.jsx("span",{className:"mp__zcount-icon",children:e}),o.jsx("span",{className:"mp__zcount-lbl",children:n}),o.jsx("span",{className:"mp__zcount-n",children:t})]})}function Qd({label:e,card:n,getCard:t,hidden:a,getZoomHandlers:r}){const i=n?t(n.defId):null,s=i!=null&&i.frontImageId?`/assets/${i.frontImageId}`:null;return o.jsxs("div",{className:"mp__slot",children:[o.jsx("div",{className:"mp__slot-lbl",children:e}),n?a?o.jsx("div",{className:"mp__slot-hidden",children:"???"}):o.jsxs("div",{className:"mp__slot-card",...s?r(s):{},children:[o.jsx("span",{className:"mp__slot-name",children:(i==null?void 0:i.nameCn)??n.defId}),o.jsx("span",{className:`mp__slot-type mp__slot-type--${(i==null?void 0:i.actionType)??"unknown"}`,children:(i==null?void 0:i.actionType)??"?"})]}):o.jsx("div",{className:"mp__slot-empty",children:"— 未布局 —"})]})}const Hv=`
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

/* ═══════════════════════════════════════════════════════
   Mobile Responsive Overrides
   ═══════════════════════════════════════════════════════ */
@media (max-width: 768px) {
  .mp {
    min-width: 0;
    padding: 10px 12px;
    font-size: 0.85rem;
  }

  .mp__tabs {
    gap: 6px;
  }

  .mp__tab {
    padding: 6px 14px;
    font-size: 0.78rem;
    min-height: 36px;
    min-width: 36px;
  }

  .mp__stat {
    padding: 6px 4px;
  }

  .mp__stat-lbl {
    font-size: 0.65rem;
  }

  .mp__stat-val {
    font-size: 0.95rem;
  }

  .mp__zones {
    flex-direction: column;
  }

  .mp__counts {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 4px;
    min-width: 0;
  }

  .mp__zcount {
    flex: 1;
    min-width: 70px;
    padding: 4px 8px;
  }

  .mp__plot-slots {
    gap: 8px;
  }

  .mp__slot {
    padding: 6px 8px;
  }
}
`,Wv={slot_1:"存档位 1",slot_2:"存档位 2",slot_3:"存档位 3",slot_4:"存档位 4",slot_5:"存档位 5",auto:"自动存档"},Zv=[...dx,"auto"];function Yv(e){const n=new Date(e),t=a=>String(a).padStart(2,"0");return`${n.getFullYear()}-${t(n.getMonth()+1)}-${t(n.getDate())} ${t(n.getHours())}:${t(n.getMinutes())}`}function qd({mode:e,onBack:n,onLoad:t,currentState:a,aiConfig:r}){const[i,s]=w.useState([]),[c,d]=w.useState(null),[u,p]=w.useState(null),[f,g]=w.useState(null),[h,m]=w.useState(null);w.useEffect(()=>{s(Md())},[]);function b(){s(Md())}function _(j){g(j),setTimeout(()=>g(null),2e3)}function v(j){return i.find(S=>S.slotId===j)}function x(j){if(!a||!r)return;if(v(j)){p(j);return}y(j)}function y(j){if(!(!a||!r))try{Ef(j,a,r,!1),b(),p(null),_("存档已保存")}catch(S){m(S instanceof Error?S.message:"保存失败")}}function k(j){const S=px(j);if(!S){m("存档数据已损坏，无法加载");return}t==null||t(S)}function T(j){fx(j),b(),d(null),_("存档已删除")}const z=e==="save"?"保存游戏":"加载存档";return o.jsxs("div",{className:"sl-screen",children:[o.jsxs("div",{className:"sl-panel",children:[o.jsx("h2",{className:"sl-title",children:z}),o.jsx("div",{className:"sl-slots",children:Zv.map(j=>{const S=v(j),E=e==="save"&&!(j==="auto")&&a!=null;return o.jsxs("div",{className:`sl-slot ${S?"sl-slot--occupied":"sl-slot--empty"}`,children:[o.jsxs("div",{className:"sl-slot__label",children:[Wv[j],(S==null?void 0:S.isAutoSave)&&o.jsx("span",{className:"sl-badge",children:"自动"})]}),S?o.jsxs("div",{className:"sl-slot__info",children:[o.jsxs("span",{className:"sl-slot__units",children:[S.player1Unit," vs ",S.player2Unit]}),o.jsx("span",{className:"sl-slot__map",children:S.mapName}),o.jsxs("span",{className:"sl-slot__round",children:["第 ",S.roundNumber," 回合"]}),o.jsx("span",{className:"sl-slot__time",children:Yv(S.timestamp)})]}):o.jsx("div",{className:"sl-slot__info sl-slot__empty-label",children:"空存档位"}),o.jsxs("div",{className:"sl-slot__actions",children:[e==="load"&&S&&o.jsx("button",{className:"sl-btn sl-btn--primary",onClick:()=>k(j),children:"加载"}),E&&o.jsx("button",{className:"sl-btn sl-btn--primary",onClick:()=>x(j),children:S?"覆盖":"保存"}),S&&(c===j?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"sl-confirm-text",children:"确认删除？"}),o.jsx("button",{className:"sl-btn sl-btn--danger",onClick:()=>T(j),children:"确认"}),o.jsx("button",{className:"sl-btn",onClick:()=>d(null),children:"取消"})]}):o.jsx("button",{className:"sl-btn sl-btn--ghost",onClick:()=>d(j),children:"删除"}))]}),u===j&&o.jsxs("div",{className:"sl-overwrite",children:[o.jsx("span",{children:"覆盖此存档？"}),o.jsx("button",{className:"sl-btn sl-btn--primary",onClick:()=>y(j),children:"确认"}),o.jsx("button",{className:"sl-btn",onClick:()=>p(null),children:"取消"})]})]},j)})}),h&&o.jsxs("div",{className:"sl-error",onClick:()=>m(null),children:["⚠ ",h]}),o.jsx("button",{className:"sl-back-btn",onClick:n,children:"← 返回"})]}),f&&o.jsx("div",{className:"sl-toast",children:f}),o.jsx("style",{children:Xv})]})}const Xv=`
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
`;function Qv({currentState:e}){const{rawDispatch:n}=Ne();return w.useEffect(()=>{n({type:"LOAD_GAME",state:e})},[e,n]),o.jsx("div",{style:{height:"100%",width:"100%"},children:o.jsx(ha,{})})}function qv({currentState:e}){return o.jsx(gi,{children:o.jsx(Df,{children:o.jsx(Qv,{currentState:e})})})}function eb({onBack:e}){const[n,t]=w.useState("list"),[a,r]=w.useState(null);function i(c){r(c),t("playback")}function s(){r(null),t("list")}return n==="playback"&&a?o.jsx(rb,{replayData:a,onExit:s}):o.jsx(nb,{onBack:e,onPlay:i})}function Rf(e){const n=Ix(e.initialState,e.actions),t=new Blob([n],{type:"text/plain;charset=utf-8"}),a=URL.createObjectURL(t),r=document.createElement("a");r.href=a;const i=new Date(e.metadata.timestamp),s=d=>String(d).padStart(2,"0"),c=`replay_${e.metadata.player1Unit}_vs_${e.metadata.player2Unit}_${i.getFullYear()}${s(i.getMonth()+1)}${s(i.getDate())}_${s(i.getHours())}${s(i.getMinutes())}.txt`;r.download=c,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(a)}function nb({onBack:e,onPlay:n}){const[t,a]=w.useState([]),[r,i]=w.useState(null),[s,c]=w.useState(null);w.useEffect(()=>{a(Td())},[]);function d(f){const g=Ed(f);if(!g){c("录像数据已损坏，无法播放");return}n(g)}function u(f){const g=Ed(f);if(!g){c("录像数据已损坏，无法导出");return}Rf(g)}function p(f){hx(f),a(Td()),i(null)}return o.jsxs("div",{className:"rp-screen",children:[o.jsxs("div",{className:"rp-panel",children:[o.jsx("h2",{className:"rp-title",children:"回放录像"}),t.length===0?o.jsx("div",{className:"rp-empty",children:"暂无保存的录像"}):o.jsx("div",{className:"rp-list",children:t.map(f=>o.jsxs("div",{className:"rp-item",children:[o.jsxs("div",{className:"rp-item__info",children:[o.jsxs("span",{className:"rp-item__units",children:[f.player1Unit," vs ",f.player2Unit]}),o.jsx("span",{className:"rp-item__map",children:f.mapName}),o.jsxs("span",{className:"rp-item__rounds",children:[f.totalRounds," 回合"]}),f.winner&&o.jsx("span",{className:"rp-item__winner",children:f.winner==="draw"?"平局":`${f.winner==="player1"?"P1":"P2"} 获胜`}),o.jsx("span",{className:"rp-item__time",children:ob(f.timestamp)})]}),o.jsxs("div",{className:"rp-item__actions",children:[o.jsx("button",{className:"rp-btn rp-btn--primary",onClick:()=>d(f.replayId),children:"▶ 播放"}),o.jsx("button",{className:"rp-btn",onClick:()=>u(f.replayId),children:"导出日志"}),r===f.replayId?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"rp-confirm",children:"确认删除？"}),o.jsx("button",{className:"rp-btn rp-btn--danger",onClick:()=>p(f.replayId),children:"确认"}),o.jsx("button",{className:"rp-btn",onClick:()=>i(null),children:"取消"})]}):o.jsx("button",{className:"rp-btn rp-btn--ghost",onClick:()=>i(f.replayId),children:"删除"})]})]},f.replayId))}),s&&o.jsxs("div",{className:"rp-error",onClick:()=>c(null),children:["⚠ ",s]}),o.jsx("button",{className:"rp-back-btn",onClick:e,children:"← 返回"})]}),o.jsx("style",{children:Of})]})}function tb(e){const n=[0];let t=e.initialState;for(let a=0;a<e.actions.length;a++){const r=t.phase,i=t.roundNumber,s=t.plottingStep,c=t.currentTiming;t=mn(t,e.actions[a]),(t.phase!==r||t.roundNumber!==i||t.plottingStep!==s||t.currentTiming!==c)&&n.push(a+1)}return n[n.length-1]!==e.actions.length&&n.push(e.actions.length),n}function eu(e,n){let t=e.initialState;for(let a=0;a<n&&a<e.actions.length;a++)t=mn(t,e.actions[a]);return t}function ab(e,n){const t=i=>{const s=n.players[i],c=q.find(d=>d.id===s.unitId);return(c==null?void 0:c.nameCn)??i},a=i=>{const s=ee(i);return(s==null?void 0:s.nameCn)??i},r=(i,s)=>{const c=n.players[s],u=[...c.deck,...c.hand,...c.auxiliary,...c.discard,...c.destroyedCards,...c.plotSeg1?[c.plotSeg1]:[],...c.plotSeg2?[c.plotSeg2]:[]].find(p=>p.instanceId===i);return u?a(u.defId):i};switch(e.type){case"DRAW_CARDS":return`${t(e.playerId)} 抽取 ${e.count} 张牌`;case"PLOT_CARD":{const i=r(e.instanceId,e.playerId);return`${t(e.playerId)} 布局段落${e.seg}：${i}`}case"CONFIRM_PLOT":return`${t(e.playerId)} 确认布局`;case"ADVANCE_PLOT_STEP":return"布局阶段推进";case"MOVE_UNIT":return`${t(e.playerId)} 移动至 (${e.to.row},${e.to.col})`;case"ADJUST_FACING":return`${t(e.playerId)} 调整朝向 → ${e.facing}`;case"RESOLVE_RANGED":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动射击`;case"RESOLVE_MELEE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动近战`;case"RESOLVE_CHARGE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动突击`;case"PLACE_MINE":return`${t(e.playerId)} 在 (${e.to.row},${e.to.col}) 布雷 (${e.damage}伤害)`;case"SELECT_DAMAGE_CARD":{const i=r(e.instanceId,e.playerId);return`${t(e.playerId)} 选择摧毁：${i}`}case"CONFIRM_DAMAGE_SELECTION":return`${t(e.playerId)} 确认伤害结算`;case"SKIP_ACTION":return"跳过行动";case"ADVANCE_TIMING":return"推进时序";case"ADVANCE_PHASE":return"推进阶段";case"MELEE_SENSOR_MOVE":return`${t(e.playerId)} 近战传感器移动至 (${e.to.row},${e.to.col})`;case"START_PLOTTING":return"进入布局阶段";default:return e.type}}function nu({player:e,label:n}){const t=q.find(c=>c.id===e.unitId),{zoom:a,getZoomHandlers:r}=_a(),i=c=>c.filter(d=>!d.destroyed),s={N:"↑北",S:"↓南",E:"→东",W:"←西"}[e.facing]??e.facing;return o.jsxs("div",{className:"rpp",children:[o.jsxs("div",{className:"rpp__header",children:[t&&o.jsx("img",{src:`/assets/tokens/${t.tokenId}`,alt:t.nameCn,className:"rpp__token",onError:c=>{c.target.style.opacity="0.3"}}),o.jsxs("div",{children:[o.jsxs("div",{className:"rpp__name",children:[n,": ",(t==null?void 0:t.nameCn)??e.unitId]}),o.jsxs("div",{className:"rpp__pos",children:["(",e.position.row,",",e.position.col,") ",s]})]})]}),o.jsxs("div",{className:"rpp__counts",children:[o.jsxs("span",{className:"rpp__count",title:"牌库",children:["📚",i(e.deck).length]}),o.jsxs("span",{className:"rpp__count",title:"手牌",children:["🃏",e.hand.length]}),o.jsxs("span",{className:"rpp__count",title:"弃牌",children:["♻️",e.discard.length]}),o.jsxs("span",{className:"rpp__count",title:"破坏",children:["💀",e.destroyedCards.length]})]}),o.jsx("div",{className:"rpp__section-label",children:"布局"}),o.jsxs("div",{className:"rpp__plot-row",children:[o.jsx(tu,{label:"阶段1",card:e.plotSeg1,getZoomHandlers:r}),o.jsx(tu,{label:"阶段2",card:e.plotSeg2,getZoomHandlers:r})]}),o.jsxs("div",{className:"rpp__section-label",children:["手牌 (",e.hand.length,")"]}),o.jsx("div",{className:"rpp__card-list",children:e.hand.length===0?o.jsx("span",{className:"rpp__empty",children:"—"}):e.hand.map(c=>o.jsx(au,{card:c,getZoomHandlers:r},c.instanceId))}),e.auxiliary.length>0&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"rpp__section-label",children:["辅助 (",i(e.auxiliary).length,"/",e.auxiliary.length,")"]}),o.jsx("div",{className:"rpp__card-list",children:e.auxiliary.map(c=>o.jsx(au,{card:c,getZoomHandlers:r},c.instanceId))})]}),o.jsx(Ia,{zoom:a})]})}function tu({label:e,card:n,getZoomHandlers:t}){const a=n?ee(n.defId):null,r=a!=null&&a.frontImageId?`/assets/${a.frontImageId}`:null,s=a?{movement:"#66ccaa",ranged:"#ff9944",melee:"#ff6060",charge:"#ff4444",aim:"#f0c040",armor:"#88aaff",mine:"#cc88ff",special:"#aaa",auxiliary:"#77ddaa"}[a.actionType]??"#888":"#555";return o.jsxs("div",{className:"rpp__plot-slot",children:[o.jsx("div",{className:"rpp__plot-label",children:e}),n&&a?o.jsxs("div",{className:"rpp__plot-card",style:{borderColor:s},...r?t(r):{},children:[o.jsx("span",{className:"rpp__plot-type",style:{color:s},children:a.actionType}),o.jsx("span",{className:"rpp__plot-name",children:a.nameCn})]}):o.jsx("div",{className:"rpp__plot-empty",children:"—"})]})}function au({card:e,getZoomHandlers:n}){const t=ee(e.defId),a=t!=null&&t.frontImageId?`/assets/${t.frontImageId}`:null,i=t?{movement:"#66ccaa",ranged:"#ff9944",melee:"#ff6060",charge:"#ff4444",aim:"#f0c040",armor:"#88aaff",mine:"#cc88ff",special:"#aaa",auxiliary:"#77ddaa"}[t.actionType]??"#888":"#555";return o.jsxs("span",{className:`rpp__chip${e.destroyed?" rpp__chip--dead":""}`,style:{borderColor:i},...a?n(a):{},children:[(t==null?void 0:t.nameCn)??e.defId,e.destroyed&&o.jsx("span",{className:"rpp__chip-x",children:"✕"})]})}function rb({replayData:e,onExit:n}){const t=w.useMemo(()=>tb(e),[e]),a=e.actions.length,[r,i]=w.useState(0),[s,c]=w.useState(e.initialState),[d,u]=w.useState(!1),[p,f]=w.useState(1),[g,h]=w.useState(""),[m,b]=w.useState(e.initialState.log.length),_=w.useRef(null),v=w.useRef(s),x=w.useRef(r);v.current=s,x.current=r;const y=w.useRef(null);w.useEffect(()=>{var U;(U=y.current)==null||U.scrollIntoView({behavior:"smooth"})},[s.log.length]);const k=w.useCallback(()=>{_.current!=null&&(clearInterval(_.current),_.current=null)},[]),T=w.useCallback(()=>{const U=x.current;if(U>=a)return k(),u(!1),!1;const N=e.actions[U],V=mn(v.current,N);return b(v.current.log.length),c(V),i(U+1),!0},[e,a,k]),z=w.useCallback(()=>{const U=x.current;if(U>=a)return;const V=t.find(R=>R>U)??a;let F=v.current;const P=F.log.length;for(let R=U;R<V;R++)F=mn(F,e.actions[R]);b(P),c(F),i(V),V>=a&&(k(),u(!1))},[e,a,t,k]),j=w.useCallback(()=>{const U=x.current,N=t.filter(P=>P<U),V=N.length>=2?N[N.length-2]:0,F=eu(e,V);b(0),c(F),i(V)},[e,t]);w.useEffect(()=>(k(),d&&(_.current=setInterval(()=>{if(x.current>=a){k(),u(!1);return}z()},Math.round(1500/p))),k),[d,p,z,a,k]);function S(){u(U=>!U)}function D(){u(!1),b(0),c(e.initialState),i(0)}function E(){const U=parseInt(g,10);if(isNaN(U)||U<1)return;u(!1);const{state:N,actionIndex:V}=vx(e,U);b(0),c(N),i(V)}const $=r>0?e.actions[r-1]:null,L=$?ab($,r>=2?eu(e,r-1):e.initialState):null,M=r>=a,O=r===0,H={pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"行动阶段1",action_seg2:"行动阶段2",cleanup:"清理阶段",game_over:"游戏结束"},B={movement:"移动",ranged:"射击",melee:"近战",special:"特殊"};return o.jsxs("div",{className:"rpv-screen",children:[o.jsxs("div",{className:"rpv-topbar",children:[o.jsxs("span",{className:"rpv-topbar__round",children:["第 ",s.roundNumber," 回合"]}),o.jsx("span",{className:"rpv-topbar__phase",children:H[s.phase]??s.phase}),s.currentTiming&&o.jsxs("span",{className:"rpv-topbar__timing",children:["▶ ",B[s.currentTiming]]}),o.jsx("span",{style:{flex:1}}),o.jsx("button",{className:"rpv-btn",onClick:D,disabled:O,title:"回到开始",children:"⏮"}),o.jsx("button",{className:"rpv-btn",onClick:j,disabled:O,title:"上一阶段",children:"◀◀"}),o.jsx("button",{className:"rpv-btn",onClick:()=>{u(!1),T()},disabled:M,title:"单步前进（单个操作）",children:"▶|"}),o.jsx("button",{className:"rpv-btn",onClick:()=>{u(!1),z()},disabled:M,title:"下一阶段",children:"▶▶"}),o.jsx("button",{className:"rpv-btn rpv-btn--primary",onClick:S,children:d?"⏸ 暂停":"▶ 自动"}),o.jsx("span",{className:"rpv-sep"}),o.jsx("span",{className:"rpv-label",children:"速度"}),[1,2,4].map(U=>o.jsxs("button",{className:`rpv-btn rpv-btn--speed ${p===U?"rpv-btn--active":""}`,onClick:()=>f(U),children:[U,"x"]},U)),o.jsx("span",{className:"rpv-sep"}),o.jsx("span",{className:"rpv-label",children:"跳至"}),o.jsx("input",{className:"rpv-input",type:"number",min:1,value:g,onChange:U=>h(U.target.value),onKeyDown:U=>U.key==="Enter"&&E(),placeholder:"回合"}),o.jsx("button",{className:"rpv-btn",onClick:E,children:"跳转"}),o.jsx("span",{className:"rpv-sep"}),o.jsxs("span",{className:"rpv-progress",children:[r,"/",a]}),o.jsx("button",{className:"rpv-btn",onClick:()=>Rf(e),title:"导出完整分析日志",children:"导出日志"}),o.jsx("button",{className:"rpv-btn rpv-btn--exit",onClick:n,children:"✕ 退出"})]}),o.jsxs("div",{className:"rpv-main",children:[o.jsxs("div",{className:"rpv-map-col",children:[o.jsx("div",{className:"rpv-map-area",children:o.jsx(qv,{currentState:s})}),L&&o.jsxs("div",{className:"rpv-action-desc",children:["▶ ",L]}),o.jsxs("div",{className:"rpv-log",children:[o.jsx("div",{className:"rpv-log__header",children:"行动日志"}),o.jsxs("div",{className:"rpv-log__entries",children:[s.log.map((U,N)=>{const V=N>=m;return o.jsx("div",{className:`rpv-log__entry ${ib(U)}${V?" rpv-log__entry--new":""}`,children:U},N)}),o.jsx("div",{ref:y})]})]})]}),o.jsxs("div",{className:"rpv-info-col",children:[o.jsx(nu,{player:s.players.player1,label:"P1"}),o.jsx("div",{className:"rpv-info-divider"}),o.jsx(nu,{player:s.players.player2,label:"P2"})]})]}),o.jsx("style",{children:Of}),o.jsx("style",{children:sb})]})}function ob(e){const n=new Date(e),t=a=>String(a).padStart(2,"0");return`${n.getFullYear()}-${t(n.getMonth()+1)}-${t(n.getDate())} ${t(n.getHours())}:${t(n.getMinutes())}`}function ib(e){return e.startsWith("===")?"rpv-log__entry--round":e.startsWith("---")?"rpv-log__entry--sep":e.includes("发动")||e.includes("攻击")?"rpv-log__entry--attack":e.includes("摧毁")||e.includes("连锁")||e.includes("诱爆")?"rpv-log__entry--damage":e.includes("移动到")?"rpv-log__entry--move":e.includes("获胜")||e.includes("击破")||e.includes("平局")?"rpv-log__entry--victory":""}const Of=`
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
`,sb=`
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
`,lb=50;function Kf(){return{terrain:"plain",elevation:0,variant:0}}function Jf(e,n){const t=Array.from({length:n},()=>Array.from({length:e},()=>Kf()));return{id:`custom_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,nameJa:"新しいマップ",nameCn:"新地图",width:e,height:n,cells:t,startZones:{0:[{row:0,col:Math.floor(e/2)}],1:[{row:n-1,col:Math.floor(e/2)}]},maxPlayers:2,maxTeams:2}}function rl(e){return{map:e??Jf(7,11),activeTool:"terrain",selectedTerrain:"plain",selectedElevation:1,selectedVariant:0,selectedZoneTeam:0,brushSize:1,isDirty:!1,undoStack:[],redoStack:[],showCoords:!1}}function ho(e){return{...e,cells:e.cells.map(n=>n.map(t=>({...t}))),startZones:Object.fromEntries(Object.entries(e.startZones).map(([n,t])=>[n,t.map(a=>({...a}))]))}}function mt(e){const n=[...e.undoStack,ho(e.map)];return n.length>lb&&n.shift(),{...e,undoStack:n,redoStack:[],isDirty:!0}}function ru(e,n,t,a,r,i){if(n<0||n>=e.height||t<0||t>=e.width)return e;const s=e.cells.map((c,d)=>d===n?c.map((u,p)=>p===t?{terrain:a,elevation:a==="highland"?r:0,variant:a==="highland"?r:i}:u):c);return{...e,cells:s}}function cb(e,n){switch(n.type){case"SET_TOOL":return{...e,activeTool:n.tool};case"SET_TERRAIN":return{...e,selectedTerrain:n.terrain,activeTool:"terrain"};case"SET_ELEVATION":return{...e,selectedElevation:n.elevation};case"SET_VARIANT":return{...e,selectedVariant:n.variant};case"SET_BRUSH_SIZE":return{...e,brushSize:n.size};case"SET_ZONE_TEAM":return{...e,selectedZoneTeam:n.team};case"TOGGLE_COORDS":return{...e,showCoords:!e.showCoords};case"PAINT_CELL":{const t=mt(e),a=ru(t.map,n.row,n.col,t.selectedTerrain,t.selectedElevation,t.selectedVariant);return{...t,map:a}}case"PAINT_AREA":{const t=mt(e);let a=t.map;for(const{row:r,col:i}of n.cells)a=ru(a,r,i,t.selectedTerrain,t.selectedElevation,t.selectedVariant);return{...t,map:a}}case"ADD_ZONE_CELL":{const t=mt(e),{team:a,position:r}=n,i=t.map.startZones[a]??[];if(i.some(c=>c.row===r.row&&c.col===r.col))return e;const s={...t.map.startZones,[a]:[...i,r]};return{...t,map:{...t.map,startZones:s}}}case"REMOVE_ZONE_CELL":{const t=mt(e),{team:a,position:r}=n,s=(t.map.startZones[a]??[]).filter(d=>d.row!==r.row||d.col!==r.col),c={...t.map.startZones,[a]:s};return{...t,map:{...t.map,startZones:c}}}case"CLEAR_ZONE":{const t=mt(e),a={...t.map.startZones,[n.team]:[]};return{...t,map:{...t.map,startZones:a}}}case"SET_MAP_META":{const t=mt(e),a={...t.map};return n.nameJa!==void 0&&(a.nameJa=n.nameJa),n.nameCn!==void 0&&(a.nameCn=n.nameCn),n.maxPlayers!==void 0&&(a.maxPlayers=n.maxPlayers),n.maxTeams!==void 0&&(a.maxTeams=n.maxTeams),{...t,map:a}}case"RESIZE_MAP":{const t=mt(e),{newWidth:a,newHeight:r}=n,i=Array.from({length:r},(c,d)=>Array.from({length:a},(u,p)=>d<t.map.height&&p<t.map.width?{...t.map.cells[d][p]}:Kf())),s={};for(const[c,d]of Object.entries(t.map.startZones))s[Number(c)]=d.filter(u=>u.row<r&&u.col<a);return{...t,map:{...t.map,width:a,height:r,cells:i,startZones:s}}}case"UNDO":{if(e.undoStack.length===0)return e;const t=e.undoStack[e.undoStack.length-1];return{...e,map:t,undoStack:e.undoStack.slice(0,-1),redoStack:[...e.redoStack,ho(e.map)],isDirty:!0}}case"REDO":{if(e.redoStack.length===0)return e;const t=e.redoStack[e.redoStack.length-1];return{...e,map:t,redoStack:e.redoStack.slice(0,-1),undoStack:[...e.undoStack,ho(e.map)],isDirty:!0}}case"LOAD_MAP":return{...rl(ho(n.map)),isDirty:!1};case"NEW_MAP":return rl(Jf(n.width,n.height));case"MARK_SAVED":return{...e,isDirty:!1};default:return e}}const cc="em_custom_maps_index",dc="em_custom_map_",db=["plain","sand","rubble","forest","water","highland"];function uc(){try{const e=localStorage.getItem(cc);return e?JSON.parse(e):[]}catch{return[]}}function ub(e){const n={id:e.id,nameCn:e.nameCn,nameJa:e.nameJa,width:e.width,height:e.height,maxPlayers:e.maxPlayers,maxTeams:e.maxTeams,savedAt:Date.now()},t=uc().filter(a=>a.id!==e.id);t.push(n),localStorage.setItem(cc,JSON.stringify(t)),localStorage.setItem(dc+e.id,JSON.stringify(e))}function pb(e){try{const n=localStorage.getItem(dc+e);if(!n)return null;const t=JSON.parse(n);return Bf(t)?t:null}catch{return null}}function fb(e){const n=uc().filter(t=>t.id!==e);localStorage.setItem(cc,JSON.stringify(n)),localStorage.removeItem(dc+e)}function mb(e){return JSON.stringify(e,null,2)}function gb(e){try{const n=JSON.parse(e);return Bf(n)?(n.id=`custom_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,n):null}catch{return null}}function hb(e){const n=mb(e),t=new Blob([n],{type:"application/json"}),a=URL.createObjectURL(t),r=document.createElement("a");r.href=a,r.download=`${e.nameCn||e.id}.json`,r.click(),URL.revokeObjectURL(a)}function Bf(e){if(!e||typeof e!="object")return!1;const n=e;if(typeof n.id!="string"||(typeof n.nameCn!="string"&&(n.nameCn="未命名"),typeof n.nameJa!="string"&&(n.nameJa=""),typeof n.width!="number"||n.width<3||n.width>25)||typeof n.height!="number"||n.height<3||n.height>25||(typeof n.maxPlayers!="number"&&(n.maxPlayers=2),typeof n.maxTeams!="number"&&(n.maxTeams=2),!Array.isArray(n.cells))||n.cells.length!==n.height)return!1;for(const t of n.cells){if(!Array.isArray(t)||t.length!==n.width)return!1;for(const a of t)if(!a||typeof a!="object"||!db.includes(a.terrain))return!1}return(!n.startZones||typeof n.startZones!="object")&&(n.startZones={}),!0}const Ff=w.createContext(null);function ka(){const e=w.useContext(Ff);if(!e)throw new Error("useEditor must be inside EditorCtx.Provider");return e}const no=48,ou=.2,xb=3,iu=.1,ol=[{terrain:"plain",label:"平原",icon:"🟩"},{terrain:"sand",label:"砂地",icon:"🟨"},{terrain:"rubble",label:"瓦砾",icon:"🟫"},{terrain:"forest",label:"森林",icon:"🌲"},{terrain:"water",label:"水域",icon:"🟦"},{terrain:"highland",label:"高地",icon:"⛰️"}],Xo=["#00f0ff","#ff00c8","#00cc88","#ff8800","#6688ff","#cc44ff","#44dddd","#ff4466"];function vb({onBack:e}){const[n,t]=w.useReducer(cb,void 0,()=>rl()),a=w.useMemo(()=>({state:n,dispatch:t}),[n]);w.useEffect(()=>{function s(c){if((c.ctrlKey||c.metaKey)&&(c.key==="z"&&!c.shiftKey&&(c.preventDefault(),t({type:"UNDO"})),c.key==="z"&&c.shiftKey&&(c.preventDefault(),t({type:"REDO"})),c.key==="y"&&(c.preventDefault(),t({type:"REDO"})),c.key==="s"&&(c.preventDefault(),r())),!c.ctrlKey&&!c.metaKey&&!c.altKey){const d=parseInt(c.key)-1;d>=0&&d<ol.length&&t({type:"SET_TERRAIN",terrain:ol[d].terrain})}}return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[]);function r(){ub(n.map),t({type:"MARK_SAVED"})}function i(){n.isDirty&&!window.confirm("有未保存的更改，确定要退出吗？")||e()}return o.jsx(Ff.Provider,{value:a,children:o.jsxs("div",{className:"me__screen",children:[o.jsx(bb,{onBack:i,onSave:r}),o.jsx(_b,{}),o.jsx(ke,{id:"me-terrain",title:"地形画笔",initialPos:{x:8,y:56},width:200,minHeight:60,zIndex:20,children:o.jsx(Ib,{})}),o.jsx(ke,{id:"me-props",title:"地图属性",initialPos:{x:8,y:380},width:200,minHeight:60,zIndex:19,children:o.jsx(kb,{})}),o.jsx(ke,{id:"me-zones",title:"出击区域",initialPos:{x:8,y:600},width:200,minHeight:60,zIndex:18,children:o.jsx(jb,{})}),o.jsx("style",{children:wb})]})})}function bb({onBack:e,onSave:n}){const{state:t,dispatch:a}=ka(),[r,i]=w.useState(!1),s=w.useRef(null);function c(){t.isDirty&&!window.confirm("有未保存的更改，确定要新建吗？")||a({type:"NEW_MAP",width:7,height:11})}function d(){hb(t.map)}function u(){var f;(f=s.current)==null||f.click()}function p(f){var m;const g=(m=f.target.files)==null?void 0:m[0];if(!g)return;const h=new FileReader;h.onload=()=>{const b=gb(h.result);b?a({type:"LOAD_MAP",map:b}):alert("无效的地图文件")},h.readAsText(g),f.target.value=""}return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"me__topbar",children:[o.jsx("button",{className:"me__btn",onClick:e,children:"← 返回"}),o.jsx("span",{className:"me__title",children:"地图编辑器"}),o.jsxs("span",{className:"me__map-name",children:[t.map.nameCn," (",t.map.height,"×",t.map.width,")",t.isDirty&&" *"]}),o.jsx("span",{style:{flex:1}}),o.jsx("button",{className:"me__btn",onClick:c,children:"新建"}),o.jsx("button",{className:"me__btn",onClick:()=>i(!0),children:"打开"}),o.jsx("button",{className:"me__btn me__btn--accent",onClick:n,children:"保存"}),o.jsx("button",{className:"me__btn",onClick:d,children:"导出"}),o.jsx("button",{className:"me__btn",onClick:u,children:"导入"}),o.jsx("input",{ref:s,type:"file",accept:".json",style:{display:"none"},onChange:p}),o.jsx("span",{className:"me__sep"}),o.jsx("button",{className:"me__btn",onClick:()=>a({type:"UNDO"}),disabled:t.undoStack.length===0,children:"撤销"}),o.jsx("button",{className:"me__btn",onClick:()=>a({type:"REDO"}),disabled:t.redoStack.length===0,children:"重做"}),o.jsx("button",{className:`me__btn${t.showCoords?" me__btn--active":""}`,onClick:()=>a({type:"TOGGLE_COORDS"}),children:"坐标"})]}),r&&o.jsx(yb,{onClose:()=>i(!1)})]})}function yb({onClose:e}){const{dispatch:n,state:t}=ka(),[a]=w.useState(()=>uc());function r(c){if(t.isDirty&&!window.confirm("有未保存的更改，确定要打开吗？"))return;const d=pb(c);d&&(n({type:"LOAD_MAP",map:d}),e())}function i(c){if(t.isDirty&&!window.confirm("有未保存的更改，确定要打开吗？"))return;const d={...c,id:`custom_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,cells:c.cells.map(u=>u.map(p=>({...p}))),startZones:Object.fromEntries(Object.entries(c.startZones).map(([u,p])=>[u,p.map(f=>({...f}))]))};n({type:"LOAD_MAP",map:d}),e()}function s(c){window.confirm("确定删除此地图？")&&(fb(c),e())}return o.jsx("div",{className:"me__overlay",onClick:e,children:o.jsxs("div",{className:"me__dialog",onClick:c=>c.stopPropagation(),children:[o.jsx("h3",{children:"打开地图"}),a.length>0&&o.jsxs(o.Fragment,{children:[o.jsx("h4",{children:"自定义地图"}),o.jsx("div",{className:"me__dialog-list",children:a.map(c=>o.jsxs("div",{className:"me__dialog-item",children:[o.jsxs("span",{children:[c.nameCn," (",c.height,"×",c.width,")"]}),o.jsx("span",{className:"me__dialog-date",children:new Date(c.savedAt).toLocaleDateString()}),o.jsx("button",{className:"me__btn me__btn--sm",onClick:()=>r(c.id),children:"打开"}),o.jsx("button",{className:"me__btn me__btn--sm me__btn--danger",onClick:()=>s(c.id),children:"删除"})]},c.id))})]}),o.jsx("h4",{children:"内置地图 (作为模板)"}),o.jsx("div",{className:"me__dialog-list",children:Ze.map(c=>o.jsxs("div",{className:"me__dialog-item",children:[o.jsxs("span",{children:[c.nameCn," (",c.height,"×",c.width,")"]}),o.jsx("button",{className:"me__btn me__btn--sm",onClick:()=>i(c),children:"复制"})]},c.id))}),o.jsx("div",{className:"me__dialog-actions",children:o.jsx("button",{className:"me__btn",onClick:e,children:"取消"})})]})})}function _b(){const{state:e,dispatch:n}=ka(),t=w.useRef(null),[a,r]=w.useState({x:0,y:0,scale:1}),i=w.useRef(null),s=w.useRef(!1),c=w.useRef(!1),d=w.useRef(new Set),{map:u,activeTool:p,showCoords:f,selectedZoneTeam:g,brushSize:h}=e,{width:m,height:b}=u;w.useEffect(()=>{const S=t.current;if(!S)return;const D=S.clientWidth,E=S.clientHeight,$=m*no,L=b*no;if(!D||!E)return;const M=Math.max(ou,Math.min(1.5,Math.min(D/$,E/L)));r({x:(D-$*M)/2,y:(E-L*M)/2,scale:M})},[m,b]),w.useEffect(()=>{const S=t.current;if(!S)return;const D=E=>{E.preventDefault();const $=E.deltaY<0?iu:-iu;r(L=>({...L,scale:Math.min(xb,Math.max(ou,L.scale+$))}))};return S.addEventListener("wheel",D,{passive:!1}),()=>S.removeEventListener("wheel",D)},[]);const _=w.useCallback(S=>{S.button!==2&&(i.current={startX:S.clientX,startY:S.clientY,origX:a.x,origY:a.y},s.current=!1,c.current=!1,d.current.clear())},[a.x,a.y]),v=w.useCallback(S=>{if(!i.current)return;const D=S.clientX-i.current.startX,E=S.clientY-i.current.startY;!s.current&&Math.sqrt(D*D+E*E)>5&&(S.buttons===4||S.buttons===2?s.current=!0:p==="terrain"||p==="startZone"||p==="eraseZone"?c.current=!0:s.current=!0),s.current&&r($=>({...$,x:i.current.origX+D,y:i.current.origY+E}))},[p]),x=w.useCallback(()=>{i.current=null,s.current=!1,c.current=!1,d.current.clear()},[]),y=w.useMemo(()=>{const S=new Map;for(const[D,E]of Object.entries(u.startZones)){const $=Number(D);for(const L of E)S.set(`${L.row},${L.col}`,$)}return S},[u.startZones]);function k(S,D){const E=`${S},${D}`;if(p==="terrain")if(h===1)d.current.has(E)||(d.current.add(E),n({type:"PAINT_CELL",row:S,col:D}));else{const $=[],L=Math.floor(h/2);for(let M=-L;M<=L;M++)for(let O=-L;O<=L;O++){const H=S+M,B=D+O;if(H>=0&&H<b&&B>=0&&B<m){const U=`${H},${B}`;d.current.has(U)||(d.current.add(U),$.push({row:H,col:B}))}}$.length&&n({type:"PAINT_AREA",cells:$})}else if(p==="startZone")n({type:"ADD_ZONE_CELL",team:g,position:{row:S,col:D}});else if(p==="eraseZone"){const $=y.get(E);$!==void 0&&n({type:"REMOVE_ZONE_CELL",team:$,position:{row:S,col:D}})}}const{x:T,y:z,scale:j}=a;return o.jsx("div",{className:"me__viewport",ref:t,onMouseDown:_,onMouseMove:v,onMouseUp:x,onMouseLeave:x,onContextMenu:S=>S.preventDefault(),children:o.jsx("div",{className:"me__grid",style:{transform:`translate(${T}px, ${z}px) scale(${j})`,transformOrigin:"top left",display:"grid",gridTemplateColumns:`repeat(${m}, ${no}px)`,gridTemplateRows:`repeat(${b}, ${no}px)`},children:u.cells.flatMap((S,D)=>S.map((E,$)=>{const L=ec(E),M=`${D},${$}`,O=y.get(M),H=O!==void 0?Xo[O%Xo.length]:"";return o.jsxs("div",{className:`me__cell${O!==void 0?" me__cell--zone":""}`,style:{backgroundImage:`url("${L}")`,backgroundSize:"cover",...O!==void 0?{borderColor:H,boxShadow:`inset 0 0 8px ${H}66`}:{}},onMouseDown:B=>{B.button===0&&!s.current&&k(D,$)},onMouseEnter:()=>{c.current&&k(D,$)},children:[E.terrain==="highland"&&o.jsxs("span",{className:"me__cell-elev",children:["+",E.elevation]}),f&&o.jsxs("span",{className:"me__cell-coord",children:[D,",",$]}),O!==void 0&&o.jsxs("span",{className:"me__cell-zone",style:{color:H},children:["Z",O]})]},M)}))})})}function Ib(){const{state:e,dispatch:n}=ka();return o.jsxs("div",{className:"me__palette",children:[o.jsx("div",{className:"me__palette-grid",children:ol.map(({terrain:t,label:a,icon:r},i)=>o.jsxs("button",{className:`me__palette-btn${e.selectedTerrain===t&&e.activeTool==="terrain"?" me__palette-btn--active":""}`,onClick:()=>n({type:"SET_TERRAIN",terrain:t}),title:`${a} (${i+1})`,children:[r," ",a]},t))}),e.selectedTerrain==="highland"&&o.jsxs("div",{className:"me__sub-option",children:[o.jsx("label",{children:"高度:"}),[1,2,3].map(t=>o.jsxs("button",{className:`me__mini-btn${e.selectedElevation===t?" me__mini-btn--active":""}`,onClick:()=>n({type:"SET_ELEVATION",elevation:t}),children:["+",t]},t))]}),e.selectedTerrain!=="highland"&&e.selectedTerrain!=="plain"&&o.jsxs("div",{className:"me__sub-option",children:[o.jsx("label",{children:"变体:"}),[0,1,2,3].map(t=>o.jsx("button",{className:`me__mini-btn${e.selectedVariant===t?" me__mini-btn--active":""}`,onClick:()=>n({type:"SET_VARIANT",variant:t}),children:t},t))]}),o.jsxs("div",{className:"me__sub-option",children:[o.jsx("label",{children:"笔刷:"}),[1,2,3].map(t=>o.jsxs("button",{className:`me__mini-btn${e.brushSize===t?" me__mini-btn--active":""}`,onClick:()=>n({type:"SET_BRUSH_SIZE",size:t}),children:[t,"×",t]},t))]})]})}function kb(){const{state:e,dispatch:n}=ka(),{map:t}=e;return o.jsxs("div",{className:"me__props",children:[o.jsxs("label",{className:"me__prop-row",children:[o.jsx("span",{children:"名称(中)"}),o.jsx("input",{type:"text",value:t.nameCn,onChange:a=>n({type:"SET_MAP_META",nameCn:a.target.value})})]}),o.jsxs("label",{className:"me__prop-row",children:[o.jsx("span",{children:"名称(日)"}),o.jsx("input",{type:"text",value:t.nameJa,onChange:a=>n({type:"SET_MAP_META",nameJa:a.target.value})})]}),o.jsxs("div",{className:"me__prop-row",children:[o.jsx("span",{children:"尺寸"}),o.jsx("input",{type:"number",min:3,max:25,value:t.width,onChange:a=>n({type:"RESIZE_MAP",newWidth:Number(a.target.value),newHeight:t.height}),style:{width:50}}),"×",o.jsx("input",{type:"number",min:3,max:25,value:t.height,onChange:a=>n({type:"RESIZE_MAP",newWidth:t.width,newHeight:Number(a.target.value)}),style:{width:50}})]}),o.jsxs("label",{className:"me__prop-row",children:[o.jsx("span",{children:"最大玩家"}),o.jsx("select",{value:t.maxPlayers,onChange:a=>n({type:"SET_MAP_META",maxPlayers:Number(a.target.value)}),children:[2,3,4,6,8].map(a=>o.jsx("option",{value:a,children:a},a))})]}),o.jsxs("label",{className:"me__prop-row",children:[o.jsx("span",{children:"最大队伍"}),o.jsx("select",{value:t.maxTeams,onChange:a=>n({type:"SET_MAP_META",maxTeams:Number(a.target.value)}),children:Array.from({length:t.maxPlayers},(a,r)=>r+1).filter(a=>a>=2).map(a=>o.jsx("option",{value:a,children:a},a))})]})]})}function jb(){const{state:e,dispatch:n}=ka(),{map:t,activeTool:a,selectedZoneTeam:r}=e;return o.jsxs("div",{className:"me__zones",children:[o.jsxs("div",{className:"me__zones-tools",children:[o.jsx("button",{className:`me__btn me__btn--sm${a==="startZone"?" me__btn--active":""}`,onClick:()=>n({type:"SET_TOOL",tool:"startZone"}),children:"添加点"}),o.jsx("button",{className:`me__btn me__btn--sm${a==="eraseZone"?" me__btn--active":""}`,onClick:()=>n({type:"SET_TOOL",tool:"eraseZone"}),children:"删除点"})]}),Array.from({length:t.maxTeams},(i,s)=>s).map(i=>{const s=t.startZones[i]??[],c=Xo[i%Xo.length],d=r===i;return o.jsxs("div",{className:`me__zone-row${d?" me__zone-row--active":""}`,style:{borderLeftColor:c},onClick:()=>n({type:"SET_ZONE_TEAM",team:i}),children:[o.jsxs("span",{style:{color:c},children:["区域 ",i+1]}),o.jsxs("span",{className:"me__zone-count",children:[s.length," 点"]}),o.jsx("button",{className:"me__btn me__btn--sm me__btn--danger",onClick:u=>{u.stopPropagation(),n({type:"CLEAR_ZONE",team:i})},children:"清空"})]},i)})]})}const wb=`
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
`;function Sb(e){return e?`(${e.row},${e.col})`:"(无)"}function Vt(e){if(!e)return"(空)";const n=ee(e.defId),t=(n==null?void 0:n.nameCn)??e.defId,a=e.destroyed?" [已摧毁]":"";return`${t}(${e.defId})${a}`}function Cb(e,n){const t=e.players[n];if(!t)return`  ${n}: (不存在)`;const a=q.find(i=>i.id===t.unitId),r=[];return r.push(`  ── ${n} ──`),r.push(`    机体: ${(a==null?void 0:a.nameCn)??t.unitId} (${t.unitId})`),r.push(`    位置: ${Sb(t.position)}  朝向: ${t.facing}`),r.push(`    状态: ${t.isDefeated?"已击破":"存活"}`),r.push(`    手牌(${t.hand.length}): ${t.hand.map(i=>Vt(i)).join(", ")||"(无)"}`),r.push(`    阶段1配置: ${Vt(t.plotSeg1)}`),r.push(`    阶段2配置: ${Vt(t.plotSeg2)}`),r.push(`    辅助区(${t.auxiliary.length}): ${t.auxiliary.map(i=>Vt(i)).join(", ")||"(无)"}`),r.push(`    弃牌堆(${t.discard.length}): ${t.discard.map(i=>Vt(i)).join(", ")||"(无)"}`),r.push(`    摧毁区(${t.destroyedCards.length}): ${t.destroyedCards.map(i=>Vt(i)).join(", ")||"(无)"}`),r.push(`    卡组剩余: ${t.deck.filter(i=>!i.destroyed).length} 张`),r.join(`
`)}function Nb(e){var t,a;const n=[];if(n.push("══════════════════════════════════════════"),n.push("  当前状态快照"),n.push("══════════════════════════════════════════"),n.push(`回合: ${e.roundNumber}`),n.push(`阶段: ${e.phase}`),n.push(`当前时机: ${e.currentTiming??"(无)"}`),n.push(`行动顺序: ${e.turnOrder.length>0?e.turnOrder.join(" → "):"(无)"}`),n.push(`布局步骤: ${e.plottingStep??"(无)"}`),n.push(`活跃玩家: ${e.activePlayer}`),n.push(`地图: ${((t=e.map)==null?void 0:t.id)??"(无)"}`),n.push(`地雷数: ${((a=e.mines)==null?void 0:a.length)??0}`),e.pendingDamage){const r=e.pendingDamage;n.push(`待处理伤害: 目标=${r.targetId}, 剩余=${r.remaining}, 来源=${r.source}, 攻击者=${r.attackerId??"(无)"}, 已选=${r.selectedInstanceIds.length}`)}n.push(""),n.push("── 玩家状态 ──");for(const r of e.playerIds)n.push(Cb(e,r));return n.push(""),n.join(`
`)}function Gf(e,n){const t=new Date,a=t.toISOString().replace(/[:.]/g,"-").slice(0,19),r=[];r.push("╔══════════════════════════════════════════╗"),r.push("║   Embryo Machine — 全量游戏日志导出      ║"),r.push("╚══════════════════════════════════════════╝"),r.push(`导出时间: ${t.toLocaleString("zh-CN")}`),n!=null&&n.localPlayerId&&r.push(`本地玩家: ${n.localPlayerId}`),n!=null&&n.connectionStatus&&r.push(`连接状态: ${n.connectionStatus}`),r.push(""),r.push(Nb(e)),r.push("══════════════════════════════════════════"),r.push("  完整游戏日志 (按时间顺序)"),r.push("══════════════════════════════════════════");for(let u=0;u<e.log.length;u++)r.push(`[${String(u+1).padStart(4," ")}] ${e.log[u]}`);r.push(""),r.push(`── 共 ${e.log.length} 条日志 ──`);const i=r.join(`
`),s=new Blob([i],{type:"text/plain;charset=utf-8"}),c=URL.createObjectURL(s),d=document.createElement("a");d.href=c,d.download=`embryo-log-${a}.txt`,d.click(),URL.revokeObjectURL(c)}const su=[1e3,2e3,4e3,8e3,15e3];class Mb{constructor(n,t,a){en(this,"ws",null);en(this,"url");en(this,"sessionId");en(this,"onMessage");en(this,"onStatus");en(this,"reconnectAttempt",0);en(this,"reconnectTimer",null);en(this,"intentionallyClosed",!1);en(this,"hasEverConnected",!1);this.url=n,this.sessionId=localStorage.getItem("embryo-session-id"),this.onMessage=t,this.onStatus=a}connect(){this.intentionallyClosed=!1,this.onStatus("connecting");const n=this.sessionId?`?sessionId=${this.sessionId}`:"";this.ws=new WebSocket(`${this.url}${n}`),this.ws.onopen=()=>{var t;if(this.intentionallyClosed){(t=this.ws)==null||t.close(),this.ws=null,this.onStatus("disconnected");return}this.hasEverConnected=!0,this.reconnectAttempt=0,this.onStatus("connected")},this.ws.onmessage=t=>{try{const a=JSON.parse(t.data);a.type==="SESSION_ID"&&(this.sessionId=a.sessionId,localStorage.setItem("embryo-session-id",a.sessionId)),this.onMessage(a)}catch{console.warn("[GameSocket] Failed to parse message:",t.data)}},this.ws.onclose=()=>{if(this.intentionallyClosed){this.onStatus("disconnected");return}this.hasEverConnected||(this.sessionId=null,localStorage.removeItem("embryo-session-id")),this.onStatus("reconnecting"),this.scheduleReconnect()},this.ws.onerror=()=>{}}send(n){var t;((t=this.ws)==null?void 0:t.readyState)===WebSocket.OPEN?this.ws.send(JSON.stringify(n)):console.warn("[GameSocket] Cannot send — not connected")}disconnect(){if(this.intentionallyClosed=!0,this.reconnectTimer&&(clearTimeout(this.reconnectTimer),this.reconnectTimer=null),this.ws){const n=this.ws.readyState;n===WebSocket.OPEN||n===WebSocket.CLOSING?(this.ws.close(),this.ws=null):n===WebSocket.CONNECTING&&(this.ws.onmessage=null,this.ws.onerror=null)}this.onStatus("disconnected")}clearSession(){this.sessionId=null,localStorage.removeItem("embryo-session-id")}get isConnected(){var n;return((n=this.ws)==null?void 0:n.readyState)===WebSocket.OPEN}scheduleReconnect(){const n=su[Math.min(this.reconnectAttempt,su.length-1)];this.reconnectAttempt++,this.reconnectTimer=setTimeout(()=>{this.reconnectTimer=null,this.connect()},n)}}const Uf=w.createContext(null);function Tb({serverUrl:e,children:n}){const[t,a]=w.useState(null),[r,i]=w.useState(null),[s,c]=w.useState(null),[d,u]=w.useState("disconnected"),[p,f]=w.useState(null),[g,h]=w.useState(null),[m,b]=w.useState([]),[_,v]=w.useState(null),[x,y]=w.useState(null),k=w.useRef(null),T=w.useRef(null),z=w.useRef(-1),j=w.useCallback(M=>{switch(M.type){case"SESSION_ID":break;case"ROOM_STATE":i(M.room),c(M.yourPlayerId);break;case"ROOM_LIST":b(M.rooms);break;case"GAME_STATE":{M.state.phase==="plotting"&&(T.current!=="plotting"||z.current!==M.state.roundNumber)&&f(null),T.current=M.state.phase,z.current=M.state.roundNumber,a(M.state),c(M.yourPlayerId),v(M.currentTurnPlayerId??null),y(M.turnDeadline??null);break}case"PLOTTING_STATUS":f({confirmed:M.confirmed,total:M.total});break;case"GAME_STARTED":break;case"RECONNECTED":i(M.room),a(M.state),c(M.yourPlayerId),v(M.currentTurnPlayerId??null),y(M.turnDeadline??null),T.current=M.state.phase,z.current=M.state.roundNumber;break;case"SPECTATE_STATE":a(M.state),i(M.room),c(null);break;case"ACTION_REJECTED":h(M.reason),setTimeout(()=>h(null),5e3);break;case"PLAYER_JOINED":case"PLAYER_LEFT":case"PLAYER_RECONNECTED":case"PLAYER_DISCONNECTED":break;case"ERROR":h(M.message),setTimeout(()=>h(null),5e3);break}},[]);w.useEffect(()=>{const M=new Mb(e,j,u);return k.current=M,M.connect(),()=>{M.clearSession(),M.disconnect(),k.current=null}},[e,j]);const S=w.useCallback(M=>{var O;(O=k.current)==null||O.send({type:"GAME_ACTION",action:M})},[]),D=w.useCallback(M=>{var O;(O=k.current)==null||O.send({type:"LOBBY_ACTION",action:M})},[]),E=w.useCallback(M=>{var O;(O=k.current)==null||O.send(M)},[]),$=w.useCallback(M=>ee(M),[]),L={state:t,room:r,localPlayerId:s,dispatch:S,sendLobbyAction:D,send:E,getCard:$,connectionStatus:d,plottingStatus:p,isOnline:!0,lastError:g,roomList:m,currentTurnPlayerId:_,turnDeadline:x};return o.jsx(Uf.Provider,{value:L,children:n})}function pc(){const e=w.useContext(Uf);if(!e)throw new Error("useOnlineGame must be used within OnlineGameProvider");return e}function Eb({children:e}){const{state:n,localPlayerId:t,dispatch:a,getCard:r,plottingStatus:i,send:s,currentTurnPlayerId:c}=pc(),d=w.useCallback(g=>{if(g.type==="ADVANCE_TIMING"||g.type==="ADVANCE_PHASE"){s({type:"TIMING_DONE"});return}g.type==="START_PLOTTING"||g.type==="DRAW_CARDS"||a(g)},[a,s]);if(!n||!t)return null;let u=n;if(n.phase==="plotting"){const g=(i==null?void 0:i.confirmed.includes(t))??!1;u={...n,plottingStep:g?"complete":t}}const p={player1:t!=="player1",player2:t!=="player2",player1Difficulty:"easy",player2Difficulty:"easy",playerAI:Object.fromEntries(n.playerIds.map(g=>[g,g!==t])),playerDifficulty:Object.fromEntries(n.playerIds.map(g=>[g,"easy"]))},f={state:u,dispatch:d,rawDispatch:d,getCard:r,aiConfig:p,setAIConfig:()=>{},getReplayData:()=>null,autoSaveEnabled:!1,setAutoSaveEnabled:()=>{},exposureMode:!1,setExposureMode:()=>{},isOnline:!0,localPlayerId:t,currentTurnPlayerId:c};return o.jsx(yi.Provider,{value:f,children:e})}const Db={lobby:"等待中",playing:"游戏中",finished:"已结束"};function Hf({onBack:e,onCreateRoom:n,onJoinRoom:t,roomList:a,onRefreshRooms:r,onSpectate:i}){const[s,c]=w.useState("create"),[d,u]=w.useState(()=>localStorage.getItem("embryo-player-name")??""),[p,f]=w.useState(""),[g,h]=w.useState(""),[m,b]=w.useState(2),[_,v]=w.useState(Ze[0].id);function x(M){b(M);const O=Ze.find(H=>H.id===_);if(!O||O.maxPlayers<M){const H=Ze.find(B=>B.maxPlayers>=M);H&&v(H.id)}}const[y,k]=w.useState(""),[T,z]=w.useState(!1),[j,S]=w.useState(0);function D(){const M=d.trim()||`Player_${Math.random().toString(36).slice(2,6)}`;return localStorage.setItem("embryo-player-name",M),M}function E(){n(D(),{maxPlayers:m,teamCount:m,mapId:_,turnTimeoutSeconds:j,password:T?y:void 0})}function $(){const M=p.trim().toUpperCase();M&&t(M,D(),g||void 0)}function L(M,O){f(M),O?(c("join"),h("")):t(M,D())}return o.jsxs("div",{className:"ol-screen",children:[o.jsxs("div",{className:"ol-center",children:[o.jsx("h1",{className:"ol-title",children:"联机对战"}),o.jsx("p",{className:"ol-subtitle",children:"创建、加入或浏览房间"}),o.jsx("div",{className:"ol-divider"}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"昵称"}),o.jsx("input",{className:"ol-input",value:d,onChange:M=>u(M.target.value),placeholder:"输入昵称…",maxLength:16})]}),o.jsxs("div",{className:"ol-tabs",children:[o.jsx("button",{className:`ol-tab${s==="create"?" ol-tab--active":""}`,onClick:()=>c("create"),children:"创建房间"}),o.jsx("button",{className:`ol-tab${s==="join"?" ol-tab--active":""}`,onClick:()=>c("join"),children:"加入房间"}),o.jsx("button",{className:`ol-tab${s==="browse"?" ol-tab--active":""}`,onClick:()=>{c("browse"),r==null||r()},children:"浏览房间"})]}),s==="create"&&o.jsxs("div",{className:"ol-panel",children:[o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"最大玩家数"}),o.jsx("select",{className:"ol-select",value:m,onChange:M=>x(+M.target.value),children:[2,3,4,5,6,7,8].map(M=>o.jsxs("option",{value:M,children:[M," 人"]},M))})]}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"地图"}),o.jsx("select",{className:"ol-select",value:_,onChange:M=>v(M.target.value),children:Ze.filter(M=>M.maxPlayers>=m).map(M=>o.jsxs("option",{value:M.id,children:[M.nameCn," (",M.maxPlayers,"人)"]},M.id))})]}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"回合限时"}),o.jsxs("select",{className:"ol-select",value:j,onChange:M=>S(+M.target.value),children:[o.jsx("option",{value:0,children:"无限制"}),o.jsx("option",{value:30,children:"30 秒"}),o.jsx("option",{value:60,children:"60 秒"}),o.jsx("option",{value:90,children:"90 秒"}),o.jsx("option",{value:120,children:"120 秒"})]})]}),o.jsxs("label",{className:"ol-check",onClick:()=>z(!T),children:[o.jsx("span",{className:`ol-check__box${T?" ol-check__box--on":""}`,children:T?"✓":""}),o.jsx("span",{children:"设置房间密码"})]}),T&&o.jsx("div",{className:"ol-field",children:o.jsx("input",{className:"ol-input",value:y,onChange:M=>k(M.target.value),placeholder:"输入密码…",maxLength:20,type:"password"})}),o.jsx("button",{className:"ol-btn ol-btn--primary",onClick:E,children:"创建房间"})]}),s==="join"&&o.jsxs("div",{className:"ol-panel",children:[o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"房间号"}),o.jsx("input",{className:"ol-input ol-input--code",value:p,onChange:M=>f(M.target.value.toUpperCase()),placeholder:"输入6位房间号",maxLength:6})]}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"密码（若有）"}),o.jsx("input",{className:"ol-input",value:g,onChange:M=>h(M.target.value),placeholder:"无密码可留空",maxLength:20,type:"password"})]}),o.jsx("button",{className:"ol-btn ol-btn--primary",onClick:$,disabled:p.trim().length<1,children:"加入房间"})]}),s==="browse"&&o.jsxs("div",{className:"ol-panel",children:[o.jsxs("div",{className:"ol-browse-header",children:[o.jsx("span",{className:"ol-label",children:"在线房间"}),o.jsx("button",{className:"ol-refresh-btn",onClick:r,children:"刷新"})]}),!a||a.length===0?o.jsx("div",{className:"ol-empty",children:"暂无房间，创建一个吧"}):o.jsx("div",{className:"ol-room-list",children:a.map(M=>o.jsxs("div",{className:"ol-room-row",children:[o.jsx("span",{className:"ol-room-row__code",children:M.roomCode}),o.jsx("span",{className:"ol-room-row__host",children:M.hostName}),o.jsx("span",{className:`ol-room-row__status ol-room-row__status--${M.status}`,children:Db[M.status]??M.status}),o.jsxs("span",{className:"ol-room-row__count",children:[M.playerCount,"/",M.maxPlayers]}),M.hasPassword&&o.jsx("span",{className:"ol-room-row__lock",title:"需要密码",children:"🔒"}),M.status==="lobby"?o.jsx("button",{className:"ol-room-row__join",onClick:()=>L(M.roomCode,M.hasPassword),children:"加入"}):o.jsx("button",{className:"ol-room-row__join",onClick:()=>i==null?void 0:i(M.roomCode),disabled:!i,children:"观战"})]},M.roomCode))})]}),o.jsx("button",{className:"ol-btn ol-btn--back",onClick:e,children:"返回主菜单"})]}),o.jsx("style",{children:$b})]})}const $b=`
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
`;function zb({room:e,localPlayerId:n,connectionStatus:t,lastError:a,send:r,onLeave:i}){var z;const[s,c]=w.useState(""),d=e.slots.find(j=>j.playerId===n),u=n!=null&&n===((z=e.slots[0])==null?void 0:z.playerId),p=(d==null?void 0:d.isReady)??!1,f=e.slots.filter(j=>j.type!=="empty"),g=f.length>=2&&f.every(j=>j.isReady),h=e.slots.filter(j=>j.type!=="empty"&&j.playerId!==n).map(j=>j.unitId),m=w.useState(!1);w.useEffect(()=>{if(m[0]||!n)return;if(d!=null&&d.unitId&&d.unitId!=="TR"){c(d.unitId),m[1](!0);return}const j=q.filter(S=>!h.includes(S.id));if(j.length>0){const S=j[Math.floor(Math.random()*j.length)];c(S.id),r({type:"LOBBY_ACTION",action:{type:"SELECT_UNIT",playerId:n,unitId:S.id}}),m[1](!0)}},[n]);function b(j){c(j),r({type:"LOBBY_ACTION",action:{type:"SELECT_UNIT",playerId:n,unitId:j}})}function _(){const j=q.filter(D=>!h.includes(D.id)&&D.id!==s);if(j.length===0)return;const S=j[Math.floor(Math.random()*j.length)];b(S.id)}function v(){r({type:p?"UNREADY":"READY"})}function x(){r({type:"START_GAME"})}function y(j,S){r({type:"SET_SLOT_TYPE",playerId:j,slotType:S})}function k(j){r({type:"KICK_PLAYER",playerId:j})}function T(){r({type:"LEAVE_ROOM"}),i()}return o.jsxs("div",{className:"rm-screen",children:[o.jsxs("div",{className:"rm-center",children:[o.jsxs("div",{className:"rm-header",children:[o.jsx("h2",{className:"rm-room-title",children:"房间"}),o.jsx("div",{className:"rm-room-code",children:e.roomCode}),e.hasPassword&&o.jsx("span",{className:"rm-lock",title:"有密码",children:"🔒"}),o.jsx("div",{className:"rm-room-status",children:t==="connected"?o.jsx("span",{className:"rm-status rm-status--ok",children:"已连接"}):o.jsx("span",{className:"rm-status rm-status--warn",children:t})})]}),a&&o.jsx("div",{className:"rm-error",children:a}),o.jsx("div",{className:"rm-slots",children:e.slots.map((j,S)=>o.jsx(Ab,{slot:j,isLocal:j.playerId===n,isHost:u,onSetSlotType:y,onKick:k},S))}),o.jsxs("div",{className:"rm-section",children:[o.jsxs("div",{className:"rm-section-header",children:[o.jsx("div",{className:"rm-section-title",children:"选择机体"}),o.jsx("button",{className:"rm-random-btn",onClick:_,title:"随机选择机体",children:"🎲 随机"})]}),o.jsx("div",{className:"rm-unit-grid",children:q.map(j=>{const S=s||(d==null?void 0:d.unitId),D=h.includes(j.id),E=S===j.id;return o.jsxs("button",{className:`rm-unit-btn${E?" rm-unit-btn--selected":""}${D?" rm-unit-btn--taken":""}`,onClick:()=>!D&&b(j.id),disabled:D,title:`${j.nameCn} (${j.nameJa}) - MOV:${j.movement} EVA:${j.evasion} ASL:${j.assault} INIT:${j.initiative}`,children:[o.jsx("span",{className:"rm-unit-code",children:j.id}),o.jsx("span",{className:"rm-unit-name",children:j.nameCn})]},j.id)})})]}),o.jsxs("div",{className:"rm-actions",children:[o.jsx("button",{className:`rm-btn${p?" rm-btn--unready":" rm-btn--ready"}`,onClick:v,children:p?"取消准备":"准备"}),u&&o.jsx("button",{className:"rm-btn rm-btn--start",onClick:x,disabled:!g,title:g?"开始游戏":"等待所有玩家准备",children:"开始游戏"}),o.jsx("button",{className:"rm-btn rm-btn--leave",onClick:T,children:"离开房间"})]})]}),o.jsx("style",{children:Vb})]})}function Ab({slot:e,isLocal:n,isHost:t,onSetSlotType:a,onKick:r}){const i=q.find(s=>s.id===e.unitId);return e.type==="empty"?o.jsxs("div",{className:"rm-slot rm-slot--empty",children:[o.jsxs("span",{className:"rm-slot__index",children:["#",e.index+1]}),o.jsx("span",{className:"rm-slot__name",children:"空位"}),t&&o.jsx("button",{className:"rm-slot__toggle",onClick:()=>a(e.playerId,"ai"),children:"+AI"})]}):o.jsxs("div",{className:`rm-slot${n?" rm-slot--local":""}${e.isConnected?"":" rm-slot--dc"}`,children:[o.jsxs("span",{className:"rm-slot__index",children:["#",e.index+1]}),o.jsx("span",{className:"rm-slot__type-badge",children:e.type==="ai"?"AI":""}),o.jsxs("span",{className:"rm-slot__name",children:[e.playerName||e.playerId,n&&" (你)"]}),o.jsx("span",{className:"rm-slot__unit",children:i?i.nameCn:e.unitId||"未选择"}),o.jsx("span",{className:`rm-slot__ready${e.isReady?" rm-slot__ready--yes":""}`,children:e.isReady?"已准备":"未准备"}),!e.isConnected&&o.jsx("span",{className:"rm-slot__dc",children:"断线"}),t&&e.type==="ai"&&o.jsx("button",{className:"rm-slot__toggle",onClick:()=>a(e.playerId,"empty"),children:"移除"}),t&&!n&&e.type==="human"&&r&&o.jsx("button",{className:"rm-slot__toggle rm-slot__toggle--kick",onClick:()=>r(e.playerId),children:"踢出"})]})}const Vb=`
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
.rm-slot__toggle--kick:hover {
  border-color: #ff6060;
  color: #ff6060;
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
`;function Pb(){return`ws://${window.location.hostname}:3001`}const Lb=Pb();function Rb({onBack:e}){const[n]=w.useState(Lb),[t,a]=w.useState("lobby"),[r,i]=w.useState(null),s=w.useCallback((f,g)=>{i({type:"create",playerName:f,settings:g}),a("connected")},[]),c=w.useCallback((f,g,h)=>{i({type:"join",roomCode:f,playerName:g,password:h}),a("connected")},[]),d=w.useCallback(f=>{i({type:"spectate",roomCode:f}),a("connected")},[]),u=w.useCallback(()=>{t!=="connected"&&(i({type:"browse"}),a("connected"))},[t]),p=w.useCallback(()=>{i(null),a("lobby")},[]);return t==="lobby"?o.jsx(Hf,{onBack:e,onCreateRoom:s,onJoinRoom:c,onRefreshRooms:u,onSpectate:d}):o.jsx(Tb,{serverUrl:n,children:o.jsx(Ob,{pendingAction:r,onBack:e,onDisconnect:p})})}function Ob({pendingAction:e,onDisconnect:n}){const{state:t,room:a,localPlayerId:r,send:i,connectionStatus:s,lastError:c,roomList:d}=pc(),[u,p]=w.useState(!1);return!u&&s==="connected"&&e&&(e.type==="create"?i({type:"CREATE_ROOM",playerName:e.playerName,settings:e.settings}):e.type==="join"?i({type:"JOIN_ROOM",roomCode:e.roomCode,playerName:e.playerName,password:e.password}):e.type==="spectate"?i({type:"SPECTATE_ROOM",roomCode:e.roomCode}):e.type==="browse"&&i({type:"LIST_ROOMS"}),p(!0)),(e==null?void 0:e.type)==="browse"&&!a&&!t?o.jsx(Hf,{onBack:n,onCreateRoom:(f,g)=>{i({type:"CREATE_ROOM",playerName:f,settings:g})},onJoinRoom:(f,g,h)=>{i({type:"JOIN_ROOM",roomCode:f,playerName:g,password:h})},roomList:d,onRefreshRooms:()=>i({type:"LIST_ROOMS"})}):s==="connecting"?o.jsxs("div",{className:"og-connecting",children:[o.jsx("div",{className:"og-spinner"}),o.jsx("p",{children:"正在连接服务器…"}),o.jsx("button",{className:"ol-btn ol-btn--back",onClick:n,children:"取消"}),o.jsx("style",{children:br})]}):a&&!t?o.jsx(zb,{room:a,localPlayerId:r,connectionStatus:s,lastError:c,send:i,onLeave:n}):t&&r?o.jsx(gi,{children:o.jsx(Eb,{children:o.jsx(Kb,{})})}):t&&!r?o.jsx(Jb,{state:t,room:a,onLeave:n}):o.jsxs("div",{className:"og-connecting",children:[o.jsx("div",{className:"og-spinner"}),o.jsx("p",{children:"等待服务器响应…"}),c&&o.jsx("div",{className:"rm-error",children:c}),o.jsx("button",{className:"ol-btn ol-btn--back",onClick:n,children:"返回"}),o.jsx("style",{children:br})]})}function Kb(){const e=Tr(),{dispatch:n,aiConfig:t}=Ne(),{localPlayerId:a,connectionStatus:r,plottingStatus:i,lastError:s,turnDeadline:c}=pc(),[d,u]=w.useState(null);w.useEffect(()=>{if(!c){u(null);return}const j=()=>{const D=Math.max(0,Math.ceil((c-Date.now())/1e3));u(D)};j();const S=setInterval(j,500);return()=>clearInterval(S)},[c]),w.useEffect(()=>{e.phase==="pregame"&&n({type:"START_PLOTTING"})},[e.phase,n]);const[p,f]=w.useState([{id:"map",zIndex:10},{id:"log",zIndex:11},{id:"mecha",zIndex:12},{id:"plot",zIndex:100}]),g=w.useCallback(j=>{f(S=>{const D=Math.max(...S.map(H=>H.zIndex)),E=S.find(H=>H.id===j);if(E&&E.zIndex===D)return S;const $=[...S].sort((H,B)=>H.zIndex-B.zIndex),L=10,M=new Map;let O=0;for(const H of $)H.id!==j&&M.set(H.id,L+O++);return M.set(j,L+$.length-1),S.map(H=>({...H,zIndex:M.get(H.id)??H.zIndex}))})},[]),h=j=>{var S;return((S=p.find(D=>D.id===j))==null?void 0:S.zIndex)??10},m=w.useCallback(j=>[],[]),b=_i(),_=b?window.innerWidth:Math.max(400,Math.min(window.innerWidth*.6,620)),v=300,x=window.innerWidth-v-16,y=b?window.innerWidth:380,k=window.innerWidth-y-16,T=e.phase==="plotting"&&e.plottingStep!=="complete"&&e.plottingStep!==null&&!e.plottingStep.startsWith("transition_to_")&&!Re(t,e.plottingStep),z=o.jsxs("div",{className:"og-status-bar",children:[o.jsxs("span",{className:"og-round",children:["第 ",e.roundNumber," 回合"]}),o.jsx("span",{className:"og-phase",children:Wf(e.phase)}),e.currentTiming&&o.jsxs("span",{className:"og-timing",children:["▶ ",Zf(e.currentTiming)]}),!b&&e.turnOrder.length>0&&o.jsxs("span",{className:"og-debug-info",title:"当前行动顺序",children:["[",e.turnOrder.map(j=>j.replace("player","P")).join("→"),"]"]}),d!==null&&d>0&&o.jsxs("span",{className:`og-countdown${d<=10?" og-countdown--warn":""}`,children:["⏱ ",d,"s"]}),o.jsx("span",{style:{flex:1}}),i&&e.phase==="plotting"&&o.jsxs("span",{className:"og-plotting",children:["布局进度: ",i.confirmed.length,"/",i.total]}),!b&&o.jsx("button",{className:"og-export-btn",onClick:()=>Gf(e,{localPlayerId:a??void 0,connectionStatus:r}),title:"导出全量日志（含调试状态快照）",children:"📋 导出日志"}),o.jsx("span",{className:`og-conn og-conn--${r}`,children:r==="connected"?"在线":r}),a&&o.jsx("span",{className:"og-pid",children:a.replace("player","P")})]});return b?o.jsxs("div",{className:"game-screen game-screen--mobile",children:[z,s&&o.jsx("div",{className:"rm-error",style:{margin:"4px 12px 0"},children:s}),o.jsx("div",{className:"game-screen__board-mobile",children:o.jsx(ha,{})}),o.jsxs("div",{className:"game-screen__panels-mobile",children:[T&&o.jsx(ke,{id:"plot",title:"布局阶段",initialPos:{x:0,y:0},width:y,children:o.jsx(Xt,{})}),o.jsx(ke,{id:"mecha",title:"机体信息",initialPos:{x:0,y:0},defaultMinimized:!0,children:o.jsx(Yo,{})}),o.jsx(ke,{id:"log",title:"行动日志",initialPos:{x:0,y:0},defaultMinimized:!0,children:o.jsx(yr,{})})]}),o.jsx(Wo,{}),o.jsx(Zo,{}),o.jsx("style",{children:br})]}):o.jsxs("div",{className:"game-screen",style:{position:"relative",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[z,s&&o.jsx("div",{className:"rm-error",style:{margin:"4px 16px 0"},children:s}),o.jsxs("div",{style:{position:"relative",flex:1},children:[o.jsx(ke,{id:"map",title:"地图",initialPos:{x:16,y:8},width:_,minHeight:300,zIndex:h("map"),onFocus:g,siblingRects:m("map"),children:o.jsx("div",{style:{height:"calc(100vh - 100px)",minHeight:300},children:o.jsx(ha,{})})}),o.jsx(ke,{id:"log",title:"行动日志",initialPos:{x,y:8},width:v,height:260,minHeight:120,zIndex:h("log"),onFocus:g,siblingRects:m("log"),children:o.jsx(yr,{})}),o.jsx(ke,{id:"mecha",title:"机体信息",initialPos:{x,y:280},width:v,minHeight:160,zIndex:h("mecha"),onFocus:g,siblingRects:m("mecha"),children:o.jsx(Yo,{})}),T&&o.jsx(ke,{id:"plot",title:"布局阶段",initialPos:{x:k,y:8},width:y,height:620,minHeight:80,zIndex:h("plot"),onFocus:g,siblingRects:m("plot"),children:o.jsx(Xt,{})})]}),o.jsx(Wo,{}),o.jsx(Zo,{}),o.jsx("style",{children:br})]})}function Jb({state:e,room:n,onLeave:t}){const a={player1:!0,player2:!0,player1Difficulty:"easy",player2Difficulty:"easy",playerAI:Object.fromEntries(e.playerIds.map(s=>[s,!0])),playerDifficulty:Object.fromEntries(e.playerIds.map(s=>[s,"easy"]))},r=()=>{},i={state:e,dispatch:r,rawDispatch:r,getCard:s=>ee(s),aiConfig:a,setAIConfig:()=>{},getReplayData:()=>null,autoSaveEnabled:!1,setAutoSaveEnabled:()=>{},exposureMode:!1,setExposureMode:()=>{},isOnline:!0,localPlayerId:null,currentTurnPlayerId:null};return o.jsx(yi.Provider,{value:i,children:o.jsx(gi,{children:o.jsxs("div",{className:"game-screen",style:{position:"relative",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[o.jsxs("div",{className:"og-status-bar",children:[o.jsx("span",{className:"og-spectate-badge",children:"观战中"}),o.jsxs("span",{className:"og-round",children:["第 ",e.roundNumber," 回合"]}),o.jsx("span",{className:"og-phase",children:Wf(e.phase)}),e.currentTiming&&o.jsxs("span",{className:"og-timing",children:["▶ ",Zf(e.currentTiming)]}),o.jsx("span",{style:{flex:1}}),n&&o.jsx("span",{className:"og-room-code-badge",children:n.roomCode}),o.jsx("button",{className:"rm-btn rm-btn--leave",onClick:t,children:"离开"})]}),o.jsxs("div",{style:{position:"relative",flex:1},children:[o.jsx(ke,{id:"map",title:"地图",initialPos:{x:16,y:8},width:Math.max(400,Math.min(window.innerWidth*.7,700)),minHeight:300,children:o.jsx("div",{style:{height:"calc(100vh - 100px)",minHeight:300},children:o.jsx(ha,{})})}),o.jsx(ke,{id:"log",title:"行动日志",initialPos:{x:window.innerWidth-316,y:8},width:300,height:400,minHeight:120,children:o.jsx(yr,{})})]}),o.jsx("style",{children:br})]})})})}function Wf(e){return{pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"主要阶段 1",action_seg2:"主要阶段 2",cleanup:"清理阶段",game_over:"游戏结束"}[e]??e}function Zf(e){return{movement:"移动",ranged:"射击",melee:"近战",special:"特殊"}[e]??e}const br=`
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
.og-spectate-badge {
  font-size: 0.78rem;
  font-weight: bold;
  color: #ffa000;
  padding: 2px 10px;
  border: 1px solid rgba(255, 160, 0, 0.3);
  border-radius: 8px;
  background: rgba(255, 160, 0, 0.1);
}
.og-room-code-badge {
  font-size: 0.78rem;
  font-family: var(--font-mono);
  color: var(--color-accent);
  letter-spacing: 0.1em;
}

@media (max-width: 768px) {
  .og-status-bar {
    gap: 6px;
    padding: 4px 10px;
    font-size: 0.75rem;
    flex-wrap: wrap;
  }

  .og-countdown {
    font-size: 0.78rem;
  }
}
`;function Bb(){const e=Tr(),{rawDispatch:n,aiConfig:t,setAIConfig:a,getReplayData:r,autoSaveEnabled:i,setAutoSaveEnabled:s,exposureMode:c,setExposureMode:d}=Ne(),[u,p]=w.useState("home"),[f,g]=w.useState("units"),[h,m]=w.useState(!0),[b,_]=w.useState(null),[v,x]=w.useState({loaded:0,total:0}),y=w.useRef(null),k=w.useCallback(()=>{_(null),Ee.init(),g("units"),p("game")},[]),T=w.useCallback(()=>{if(Jx()){k();return}const D=lc().length;x({loaded:0,total:D}),_("asking")},[k]),z=w.useCallback(()=>{_("loading");const D=new AbortController;y.current=D,Fx((E,$)=>{x({loaded:E,total:$}),E>=$&&setTimeout(k,600)},D.signal)},[k]),j=w.useCallback(()=>{var D;(D=y.current)==null||D.abort(),k()},[k]);function S(D){n({type:"LOAD_GAME",state:D.gameState}),a(D.aiConfig),p("game")}return u==="rules"?o.jsx(Av,{onBack:()=>p((e.phase==="setup","game"))}):u==="data"?o.jsx(Pv,{onBack:()=>p("game")}):u==="load"?o.jsx(qd,{mode:"load",onBack:()=>p("home"),onLoad:S}):u==="replay"?o.jsx(eb,{onBack:()=>p("home")}):u==="save"?o.jsx(qd,{mode:"save",onBack:()=>p("game"),currentState:e,aiConfig:t}):u==="mapEditor"?o.jsx(vb,{onBack:()=>p("home")}):u==="online"?o.jsx(Rb,{onBack:()=>p("home")}):u==="home"?o.jsxs(o.Fragment,{children:[b!==null&&o.jsx(Px,{phase:b,loaded:v.loaded,total:v.total,onConfirm:z,onSkip:j}),o.jsx(Ax,{onStart:T,onOnlinePlay:()=>{Ee.init(),p("online")},onViewRules:()=>p("rules"),onViewData:()=>p("data"),onLoadGame:()=>p("load"),onReplay:()=>p("replay"),onMapEditor:()=>p("mapEditor"),exposureMode:c,onToggleExposure:()=>d(!c),autoFill:h,onToggleAutoFill:()=>m(!h)})]}):e.phase==="setup"?f==="units"?o.jsx(Sx,{onNext:()=>g("spawn"),autoFill:h}):o.jsx($x,{onBack:()=>g("units")}):e.phase==="game_over"?o.jsx(Ub,{onHome:()=>{p("home"),g("units")},onSaveReplay:()=>{const D=r();if(!D)return;const E=e.players.player1.isDefeated,$=e.players.player2.isDefeated,L=E&&$?"draw":E?"player2":$?"player1":null;try{gx(D.initialState,D.actions,L),alert("录像已保存！")}catch{alert("保存失败，存储空间可能不足。")}}}):o.jsx(Fb,{onSave:()=>p("save"),autoSaveEnabled:i,onToggleAutoSave:()=>s(!i)})}function Fb({onSave:e,autoSaveEnabled:n,onToggleAutoSave:t}){const a=Tr(),{dispatch:r,exposureMode:i,getCard:s,aiConfig:c}=Ne();w.useEffect(()=>{a.phase==="pregame"&&r({type:"START_PLOTTING"})},[a.phase,r]);const d=w.useRef(a.phase);w.useEffect(()=>{const z=d.current;if(d.current=a.phase,!!i&&z==="plotting"&&a.phase==="action_seg1"){const j=S=>{if(!S)return"无";const D=s(S.defId);return D?D.nameCn:S.defId};for(const S of a.playerIds){const D=a.players[S];if(D.isDefeated)continue;const E=`P${S.replace("player","")}`;r({type:"ADD_LOG",message:`[暴露] ${E} 布局: 段1=${j(D.plotSeg1)} / 段2=${j(D.plotSeg2)}`})}}},[a.phase]);const[u,p]=w.useState([{id:"map",zIndex:10},{id:"log",zIndex:11},{id:"mecha",zIndex:12},{id:"plot",zIndex:100}]),f=w.useRef(new Map),g=w.useCallback(z=>{p(j=>{const S=Math.max(...j.map(O=>O.zIndex)),D=j.find(O=>O.id===z);if(D&&D.zIndex===S)return j;const E=[...j].sort((O,H)=>O.zIndex-H.zIndex),$=10,L=new Map;let M=0;for(const O of E)O.id!==z&&L.set(O.id,$+M++);return L.set(z,$+E.length-1),j.map(O=>({...O,zIndex:L.get(O.id)??O.zIndex}))})},[]),h=z=>{var j;return((j=u.find(S=>S.id===z))==null?void 0:j.zIndex)??10},m=w.useCallback(z=>{const j=[];return f.current.forEach((S,D)=>{D!==z&&S&&j.push(S.getBoundingClientRect())}),j},[]),b=_i(),_=b?window.innerWidth:Math.max(400,Math.min(window.innerWidth*.6,620)),v=300,x=window.innerWidth-v-16,y=36,k=b?window.innerWidth:380,T=window.innerWidth-k-16;if(b){const z=a.phase==="plotting"&&a.plottingStep!=="complete"&&a.plottingStep!==null&&!a.plottingStep.startsWith("transition_to_")&&!Re(c,a.plottingStep),j=a.phase==="plotting"&&a.plottingStep!=="complete"&&a.plottingStep!==null&&!a.plottingStep.startsWith("transition_to_")&&Re(c,a.plottingStep);return o.jsxs("div",{className:"game-screen game-screen--mobile",children:[o.jsx("div",{className:"game-screen__header",style:{flexShrink:0},children:o.jsx(lu,{onSave:e,autoSaveEnabled:n,onToggleAutoSave:t})}),o.jsxs("div",{className:"game-screen__board-mobile",children:[o.jsx(ha,{}),o.jsx(cu,{})]}),o.jsxs("div",{className:"game-screen__panels-mobile",children:[z&&o.jsx(ke,{id:"plot",title:"布局阶段",initialPos:{x:0,y:0},width:k,children:o.jsx(Xt,{})}),j&&o.jsx("div",{style:{width:0,height:0,overflow:"hidden",opacity:0,pointerEvents:"none"},children:o.jsx(Xt,{})}),o.jsx(ke,{id:"mecha",title:"机体信息",initialPos:{x:0,y:0},defaultMinimized:!0,children:o.jsx(Yo,{})}),o.jsx(ke,{id:"log",title:"行动日志",initialPos:{x:0,y:0},defaultMinimized:!0,children:o.jsx(yr,{})})]}),o.jsx(Wo,{}),o.jsx(Zo,{}),o.jsx("style",{children:du})]})}return o.jsxs("div",{className:"game-screen",style:{position:"relative",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[o.jsx("div",{className:"game-screen__header",style:{flexShrink:0},children:o.jsx(lu,{onSave:e,autoSaveEnabled:n,onToggleAutoSave:t})}),o.jsxs("div",{style:{position:"relative",flex:1},children:[o.jsx(ke,{id:"map",title:"地图",initialPos:{x:16,y:8},width:_,minHeight:300,zIndex:h("map"),onFocus:g,siblingRects:m("map"),children:o.jsx("div",{style:{height:`calc(100vh - ${y+60}px)`,minHeight:300},children:o.jsx(ha,{})})}),o.jsx(ke,{id:"log",title:"行动日志",initialPos:{x,y:8},width:v,height:260,minHeight:120,zIndex:h("log"),onFocus:g,siblingRects:m("log"),children:o.jsx(yr,{})}),o.jsx(ke,{id:"mecha",title:"机体信息",initialPos:{x,y:280},width:v,minHeight:160,zIndex:h("mecha"),onFocus:g,siblingRects:m("mecha"),children:o.jsx(Yo,{})}),a.phase==="plotting"&&a.plottingStep!=="complete"&&a.plottingStep!==null&&!a.plottingStep.startsWith("transition_to_")&&!Re(c,a.plottingStep)&&o.jsx(ke,{id:"plot",title:"布局阶段",initialPos:{x:T,y:8},width:k,height:620,minHeight:80,zIndex:h("plot"),onFocus:g,siblingRects:m("plot"),children:o.jsx(Xt,{})}),a.phase==="plotting"&&a.plottingStep!=="complete"&&a.plottingStep!==null&&!a.plottingStep.startsWith("transition_to_")&&Re(c,a.plottingStep)&&o.jsx("div",{style:{position:"absolute",width:0,height:0,overflow:"hidden",opacity:0,pointerEvents:"none"},children:o.jsx(Xt,{})})]}),o.jsx(Wo,{}),o.jsx(Zo,{}),o.jsx(cu,{}),o.jsx("style",{children:du})]})}function lu({onSave:e,autoSaveEnabled:n,onToggleAutoSave:t}){const a=Tr(),r={pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"行动阶段 [主要阶段 1]",action_seg2:"行动阶段 [主要阶段 2]",cleanup:"清理阶段",game_over:"游戏结束"},i={movement:"移动",ranged:"射击",melee:"近战",special:"特殊"};return o.jsxs("div",{className:"phase-bar",children:[o.jsxs("span",{className:"phase-bar__round",children:["第 ",a.roundNumber," 回合"]}),o.jsx("span",{className:"phase-bar__phase",children:r[a.phase]??a.phase}),a.currentTiming&&o.jsxs("span",{className:"phase-bar__timing",children:["▶ ",i[a.currentTiming]??a.currentTiming]}),o.jsx("span",{style:{flex:1}}),o.jsx("button",{className:"phase-bar__autosave-btn",onClick:t,title:n?"自动存档已开启（点击关闭）":"自动存档已关闭（点击开启）",children:n?"💾 自动":"💾 关"}),o.jsx("button",{className:"phase-bar__save-btn",onClick:e,title:"保存游戏",children:"💾 保存"}),o.jsx("button",{className:"phase-bar__save-btn",onClick:()=>Gf(a),title:"导出全量日志（含调试状态快照）",children:"📋 日志"})]})}function Gb(e){return e.startsWith("[DBG]")?"log-panel__entry log-panel__entry--debug":e.startsWith("===")?"log-panel__entry log-panel__entry--round-start":e.startsWith("---")?"log-panel__entry log-panel__entry--round-end":e.includes("发动")||e.includes("攻击")?"log-panel__entry log-panel__entry--attack":e.includes("摧毁")||e.includes("连锁")||e.includes("诱爆")?"log-panel__entry log-panel__entry--damage":e.includes("移动到")?"log-panel__entry log-panel__entry--move":e.includes("获胜")||e.includes("击破")||e.includes("平局")?"log-panel__entry log-panel__entry--victory":"log-panel__entry"}function yr(){const e=Tr();return o.jsx("div",{className:"log-panel",children:o.jsx("div",{className:"log-panel__entries",children:[...e.log].reverse().map((n,t)=>o.jsx("div",{className:Gb(n),children:n},t))})})}function Ub({onHome:e,onSaveReplay:n}){const{state:t,dispatch:a}=Ne(),r=t.log[t.log.length-1]??"游戏结束",i=t.players.player1.isDefeated,s=t.players.player2.isDefeated,c=i&&s?"双方同时击破":i?"玩家 2 获胜":"玩家 1 获胜";function d(){a({type:"RESET_GAME"}),e()}return o.jsxs("div",{className:"gameover-screen",children:[o.jsx("div",{className:"gameover-icon",children:"💥"}),o.jsx("h1",{className:"gameover-title",children:c}),o.jsx("p",{className:"gameover-sub",children:r}),o.jsxs("div",{className:"gameover-actions",children:[o.jsx("button",{className:"gameover-restart",onClick:d,children:"返回主菜单"}),o.jsx("button",{className:"gameover-save-replay",onClick:n,children:"🎬 保存录像"})]}),o.jsx("style",{children:Wb})]})}function cu(){const{isAnimating:e,skipAnimation:n}=Nr();return e?o.jsx("button",{className:"skip-anim-btn",onClick:n,children:"⏩ 跳过"}):null}function Hb(){return o.jsx(gi,{children:o.jsx(Df,{children:o.jsx(Bb,{})})})}const du=`
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

/* ═══════════════════════════════════════════════════════
   Mobile Game Screen Layout
   ═══════════════════════════════════════════════════════ */
.game-screen--mobile {
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh; /* dynamic viewport height — avoids iOS URL bar issues */
  overflow: hidden;
}

.game-screen__board-mobile {
  flex: 1;
  min-height: 0;
  position: relative;
  overflow: hidden;
}

.game-screen__panels-mobile {
  flex-shrink: 0;
  max-height: 40vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  border-top: 2px solid var(--color-accent);
  background: var(--color-bg);
  z-index: 20;
  position: relative;
}

/* Phase bar compact on mobile */
@media (max-width: 768px) {
  .phase-bar {
    gap: 8px;
    padding: 4px 10px;
    font-size: 0.78rem;
    flex-wrap: wrap;
  }
  .phase-bar__save-btn,
  .phase-bar__autosave-btn {
    min-height: 36px;
    min-width: 36px;
    padding: 4px 8px;
  }
  .skip-anim-btn {
    position: absolute;
    bottom: 12px;
    right: 12px;
    left: auto;
    padding: 10px 24px;
    min-height: 44px;
  }
}
`,Wb=`
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
`;ns.createRoot(document.getElementById("root")).render(o.jsx(gm.StrictMode,{children:o.jsx(Hb,{})}));

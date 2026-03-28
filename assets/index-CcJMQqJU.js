var Zm=Object.defineProperty;var Ym=(e,n,t)=>n in e?Zm(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var en=(e,n,t)=>Ym(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();function Xm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var uu={exports:{}},qo={},pu={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _a=Symbol.for("react.element"),Qm=Symbol.for("react.portal"),qm=Symbol.for("react.fragment"),ef=Symbol.for("react.strict_mode"),nf=Symbol.for("react.profiler"),tf=Symbol.for("react.provider"),rf=Symbol.for("react.context"),af=Symbol.for("react.forward_ref"),of=Symbol.for("react.suspense"),sf=Symbol.for("react.memo"),lf=Symbol.for("react.lazy"),fc=Symbol.iterator;function cf(e){return e===null||typeof e!="object"?null:(e=fc&&e[fc]||e["@@iterator"],typeof e=="function"?e:null)}var mu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fu=Object.assign,gu={};function hr(e,n,t){this.props=e,this.context=n,this.refs=gu,this.updater=t||mu}hr.prototype.isReactComponent={};hr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};hr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hu(){}hu.prototype=hr.prototype;function sl(e,n,t){this.props=e,this.context=n,this.refs=gu,this.updater=t||mu}var ll=sl.prototype=new hu;ll.constructor=sl;fu(ll,hr.prototype);ll.isPureReactComponent=!0;var gc=Array.isArray,xu=Object.prototype.hasOwnProperty,cl={current:null},vu={key:!0,ref:!0,__self:!0,__source:!0};function yu(e,n,t){var r,a={},i=null,s=null;if(n!=null)for(r in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(i=""+n.key),n)xu.call(n,r)&&!vu.hasOwnProperty(r)&&(a[r]=n[r]);var c=arguments.length-2;if(c===1)a.children=t;else if(1<c){for(var d=Array(c),u=0;u<c;u++)d[u]=arguments[u+2];a.children=d}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)a[r]===void 0&&(a[r]=c[r]);return{$$typeof:_a,type:e,key:i,ref:s,props:a,_owner:cl.current}}function df(e,n){return{$$typeof:_a,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function dl(e){return typeof e=="object"&&e!==null&&e.$$typeof===_a}function uf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var hc=/\/+/g;function ki(e,n){return typeof e=="object"&&e!==null&&e.key!=null?uf(""+e.key):n.toString(36)}function ro(e,n,t,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case _a:case Qm:s=!0}}if(s)return s=e,a=a(s),e=r===""?"."+ki(s,0):r,gc(a)?(t="",e!=null&&(t=e.replace(hc,"$&/")+"/"),ro(a,n,t,"",function(u){return u})):a!=null&&(dl(a)&&(a=df(a,t+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(hc,"$&/")+"/")+e)),n.push(a)),1;if(s=0,r=r===""?".":r+":",gc(e))for(var c=0;c<e.length;c++){i=e[c];var d=r+ki(i,c);s+=ro(i,n,t,d,a)}else if(d=cf(e),typeof d=="function")for(e=d.call(e),c=0;!(i=e.next()).done;)i=i.value,d=r+ki(i,c++),s+=ro(i,n,t,d,a);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function Ea(e,n,t){if(e==null)return e;var r=[],a=0;return ro(e,r,"","",function(i){return n.call(t,i,a++)}),r}function pf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Ge={current:null},ao={transition:null},mf={ReactCurrentDispatcher:Ge,ReactCurrentBatchConfig:ao,ReactCurrentOwner:cl};function bu(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:Ea,forEach:function(e,n,t){Ea(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Ea(e,function(){n++}),n},toArray:function(e){return Ea(e,function(n){return n})||[]},only:function(e){if(!dl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=hr;re.Fragment=qm;re.Profiler=nf;re.PureComponent=sl;re.StrictMode=ef;re.Suspense=of;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mf;re.act=bu;re.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=fu({},e.props),a=e.key,i=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,s=cl.current),n.key!==void 0&&(a=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in n)xu.call(n,d)&&!vu.hasOwnProperty(d)&&(r[d]=n[d]===void 0&&c!==void 0?c[d]:n[d])}var d=arguments.length-2;if(d===1)r.children=t;else if(1<d){c=Array(d);for(var u=0;u<d;u++)c[u]=arguments[u+2];r.children=c}return{$$typeof:_a,type:e.type,key:a,ref:i,props:r,_owner:s}};re.createContext=function(e){return e={$$typeof:rf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:tf,_context:e},e.Consumer=e};re.createElement=yu;re.createFactory=function(e){var n=yu.bind(null,e);return n.type=e,n};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:af,render:e}};re.isValidElement=dl;re.lazy=function(e){return{$$typeof:lf,_payload:{_status:-1,_result:e},_init:pf}};re.memo=function(e,n){return{$$typeof:sf,type:e,compare:n===void 0?null:n}};re.startTransition=function(e){var n=ao.transition;ao.transition={};try{e()}finally{ao.transition=n}};re.unstable_act=bu;re.useCallback=function(e,n){return Ge.current.useCallback(e,n)};re.useContext=function(e){return Ge.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return Ge.current.useDeferredValue(e)};re.useEffect=function(e,n){return Ge.current.useEffect(e,n)};re.useId=function(){return Ge.current.useId()};re.useImperativeHandle=function(e,n,t){return Ge.current.useImperativeHandle(e,n,t)};re.useInsertionEffect=function(e,n){return Ge.current.useInsertionEffect(e,n)};re.useLayoutEffect=function(e,n){return Ge.current.useLayoutEffect(e,n)};re.useMemo=function(e,n){return Ge.current.useMemo(e,n)};re.useReducer=function(e,n,t){return Ge.current.useReducer(e,n,t)};re.useRef=function(e){return Ge.current.useRef(e)};re.useState=function(e){return Ge.current.useState(e)};re.useSyncExternalStore=function(e,n,t){return Ge.current.useSyncExternalStore(e,n,t)};re.useTransition=function(){return Ge.current.useTransition()};re.version="18.3.1";pu.exports=re;var w=pu.exports;const ff=Xm(w);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gf=w,hf=Symbol.for("react.element"),xf=Symbol.for("react.fragment"),vf=Object.prototype.hasOwnProperty,yf=gf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bf={key:!0,ref:!0,__self:!0,__source:!0};function _u(e,n,t){var r,a={},i=null,s=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(s=n.ref);for(r in n)vf.call(n,r)&&!bf.hasOwnProperty(r)&&(a[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)a[r]===void 0&&(a[r]=n[r]);return{$$typeof:hf,type:e,key:i,ref:s,props:a,_owner:yf.current}}qo.Fragment=xf;qo.jsx=_u;qo.jsxs=_u;uu.exports=qo;var o=uu.exports,ts={},Iu={exports:{}},on={},ku={exports:{}},ju={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(N,z){var F=N.length;N.push(z);e:for(;0<F;){var P=F-1>>>1,R=N[P];if(0<a(R,z))N[P]=z,N[F]=R,F=P;else break e}}function t(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var z=N[0],F=N.pop();if(F!==z){N[0]=F;e:for(var P=0,R=N.length,Z=R>>>1;P<Z;){var Q=2*(P+1)-1,ne=N[Q],te=Q+1,Y=N[te];if(0>a(ne,F))te<R&&0>a(Y,ne)?(N[P]=Y,N[te]=F,P=te):(N[P]=ne,N[Q]=F,P=Q);else if(te<R&&0>a(Y,F))N[P]=Y,N[te]=F,P=te;else break e}}return z}function a(N,z){var F=N.sortIndex-z.sortIndex;return F!==0?F:N.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,c=s.now();e.unstable_now=function(){return s.now()-c}}var d=[],u=[],p=1,m=null,g=3,h=!1,f=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(N){for(var z=t(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=N)r(u),z.sortIndex=z.expirationTime,n(d,z);else break;z=t(u)}}function j(N){if(y=!1,b(N),!f)if(t(d)!==null)f=!0,B(T);else{var z=t(u);z!==null&&U(j,z.startTime-N)}}function T(N,z){f=!1,y&&(y=!1,v(S),S=-1),h=!0;var F=g;try{for(b(z),m=t(d);m!==null&&(!(m.expirationTime>z)||N&&!D());){var P=m.callback;if(typeof P=="function"){m.callback=null,g=m.priorityLevel;var R=P(m.expirationTime<=z);z=e.unstable_now(),typeof R=="function"?m.callback=R:m===t(d)&&r(d),b(z)}else r(d);m=t(d)}if(m!==null)var Z=!0;else{var Q=t(u);Q!==null&&U(j,Q.startTime-z),Z=!1}return Z}finally{m=null,g=F,h=!1}}var $=!1,k=null,S=-1,A=5,E=-1;function D(){return!(e.unstable_now()-E<A)}function L(){if(k!==null){var N=e.unstable_now();E=N;var z=!0;try{z=k(!0,N)}finally{z?M():($=!1,k=null)}}else $=!1}var M;if(typeof x=="function")M=function(){x(L)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,H=O.port2;O.port1.onmessage=L,M=function(){H.postMessage(null)}}else M=function(){_(L,0)};function B(N){k=N,$||($=!0,M())}function U(N,z){S=_(function(){N(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){f||h||(f=!0,B(T))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(d)},e.unstable_next=function(N){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var F=g;g=z;try{return N()}finally{g=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var F=g;g=N;try{return z()}finally{g=F}},e.unstable_scheduleCallback=function(N,z,F){var P=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?P+F:P):F=P,N){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=F+R,N={id:p++,callback:z,priorityLevel:N,startTime:F,expirationTime:R,sortIndex:-1},F>P?(N.sortIndex=F,n(u,N),t(d)===null&&N===t(u)&&(y?(v(S),S=-1):y=!0,U(j,F-P))):(N.sortIndex=R,n(d,N),f||h||(f=!0,B(T))),N},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(N){var z=g;return function(){var F=g;g=z;try{return N.apply(this,arguments)}finally{g=F}}}})(ju);ku.exports=ju;var _f=ku.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var If=w,an=_f;function G(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wu=new Set,Yr={};function Dt(e,n){ir(e,n),ir(e+"Capture",n)}function ir(e,n){for(Yr[e]=n,e=0;e<n.length;e++)wu.add(n[e])}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rs=Object.prototype.hasOwnProperty,kf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xc={},vc={};function jf(e){return rs.call(vc,e)?!0:rs.call(xc,e)?!1:kf.test(e)?vc[e]=!0:(xc[e]=!0,!1)}function wf(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sf(e,n,t,r){if(n===null||typeof n>"u"||wf(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ue(e,n,t,r,a,i,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=s}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ve[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Ve[n]=new Ue(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ve[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ve[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ve[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ve[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ve[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ve[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ve[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var ul=/[\-:]([a-z])/g;function pl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ul,pl);Ve[n]=new Ue(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ul,pl);Ve[n]=new Ue(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ul,pl);Ve[n]=new Ue(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ve[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ve[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function ml(e,n,t,r){var a=Ve.hasOwnProperty(n)?Ve[n]:null;(a!==null?a.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Sf(n,t,a,r)&&(t=null),r||a===null?jf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(n=a.attributeName,r=a.attributeNamespace,t===null?e.removeAttribute(n):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Un=If.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Da=Symbol.for("react.element"),Lt=Symbol.for("react.portal"),Rt=Symbol.for("react.fragment"),fl=Symbol.for("react.strict_mode"),as=Symbol.for("react.profiler"),Su=Symbol.for("react.provider"),Cu=Symbol.for("react.context"),gl=Symbol.for("react.forward_ref"),os=Symbol.for("react.suspense"),is=Symbol.for("react.suspense_list"),hl=Symbol.for("react.memo"),Wn=Symbol.for("react.lazy"),Nu=Symbol.for("react.offscreen"),yc=Symbol.iterator;function jr(e){return e===null||typeof e!="object"?null:(e=yc&&e[yc]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Object.assign,ji;function Vr(e){if(ji===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);ji=n&&n[1]||""}return`
`+ji+e}var wi=!1;function Si(e,n){if(!e||wi)return"";wi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=r.stack.split(`
`),s=a.length-1,c=i.length-1;1<=s&&0<=c&&a[s]!==i[c];)c--;for(;1<=s&&0<=c;s--,c--)if(a[s]!==i[c]){if(s!==1||c!==1)do if(s--,c--,0>c||a[s]!==i[c]){var d=`
`+a[s].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=s&&0<=c);break}}}finally{wi=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Vr(e):""}function Cf(e){switch(e.tag){case 5:return Vr(e.type);case 16:return Vr("Lazy");case 13:return Vr("Suspense");case 19:return Vr("SuspenseList");case 0:case 2:case 15:return e=Si(e.type,!1),e;case 11:return e=Si(e.type.render,!1),e;case 1:return e=Si(e.type,!0),e;default:return""}}function ss(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rt:return"Fragment";case Lt:return"Portal";case as:return"Profiler";case fl:return"StrictMode";case os:return"Suspense";case is:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cu:return(e.displayName||"Context")+".Consumer";case Su:return(e._context.displayName||"Context")+".Provider";case gl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case hl:return n=e.displayName||null,n!==null?n:ss(e.type)||"Memo";case Wn:n=e._payload,e=e._init;try{return ss(e(n))}catch{}}return null}function Nf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ss(n);case 8:return n===fl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ct(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Mf(e){var n=Mu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function $a(e){e._valueTracker||(e._valueTracker=Mf(e))}function Tu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Mu(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function vo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ls(e,n){var t=n.checked;return ye({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function bc(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=ct(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Eu(e,n){n=n.checked,n!=null&&ml(e,"checked",n,!1)}function cs(e,n){Eu(e,n);var t=ct(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ds(e,n.type,t):n.hasOwnProperty("defaultValue")&&ds(e,n.type,ct(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function _c(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ds(e,n,t){(n!=="number"||vo(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var zr=Array.isArray;function Qt(e,n,t,r){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&r&&(e[t].defaultSelected=!0)}else{for(t=""+ct(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function us(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(G(91));return ye({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ic(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(G(92));if(zr(t)){if(1<t.length)throw Error(G(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ct(t)}}function Du(e,n){var t=ct(n.value),r=ct(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function kc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function $u(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ps(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?$u(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Aa,Au=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,a){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,a)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Aa=Aa||document.createElement("div"),Aa.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Aa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Xr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Rr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tf=["Webkit","ms","Moz","O"];Object.keys(Rr).forEach(function(e){Tf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Rr[n]=Rr[e]})});function Vu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Rr.hasOwnProperty(e)&&Rr[e]?(""+n).trim():n+"px"}function zu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,a=Vu(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,a):e[t]=a}}var Ef=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ms(e,n){if(n){if(Ef[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(G(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(G(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(G(61))}if(n.style!=null&&typeof n.style!="object")throw Error(G(62))}}function fs(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gs=null;function xl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hs=null,qt=null,er=null;function jc(e){if(e=ja(e)){if(typeof hs!="function")throw Error(G(280));var n=e.stateNode;n&&(n=ai(n),hs(e.stateNode,e.type,n))}}function Pu(e){qt?er?er.push(e):er=[e]:qt=e}function Lu(){if(qt){var e=qt,n=er;if(er=qt=null,jc(e),n)for(e=0;e<n.length;e++)jc(n[e])}}function Ru(e,n){return e(n)}function Ou(){}var Ci=!1;function Ku(e,n,t){if(Ci)return e(n,t);Ci=!0;try{return Ru(e,n,t)}finally{Ci=!1,(qt!==null||er!==null)&&(Ou(),Lu())}}function Qr(e,n){var t=e.stateNode;if(t===null)return null;var r=ai(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(G(231,n,typeof t));return t}var xs=!1;if(Jn)try{var wr={};Object.defineProperty(wr,"passive",{get:function(){xs=!0}}),window.addEventListener("test",wr,wr),window.removeEventListener("test",wr,wr)}catch{xs=!1}function Df(e,n,t,r,a,i,s,c,d){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(p){this.onError(p)}}var Or=!1,yo=null,bo=!1,vs=null,$f={onError:function(e){Or=!0,yo=e}};function Af(e,n,t,r,a,i,s,c,d){Or=!1,yo=null,Df.apply($f,arguments)}function Vf(e,n,t,r,a,i,s,c,d){if(Af.apply(this,arguments),Or){if(Or){var u=yo;Or=!1,yo=null}else throw Error(G(198));bo||(bo=!0,vs=u)}}function $t(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ju(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function wc(e){if($t(e)!==e)throw Error(G(188))}function zf(e){var n=e.alternate;if(!n){if(n=$t(e),n===null)throw Error(G(188));return n!==e?null:e}for(var t=e,r=n;;){var a=t.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===t)return wc(a),e;if(i===r)return wc(a),n;i=i.sibling}throw Error(G(188))}if(t.return!==r.return)t=a,r=i;else{for(var s=!1,c=a.child;c;){if(c===t){s=!0,t=a,r=i;break}if(c===r){s=!0,r=a,t=i;break}c=c.sibling}if(!s){for(c=i.child;c;){if(c===t){s=!0,t=i,r=a;break}if(c===r){s=!0,r=i,t=a;break}c=c.sibling}if(!s)throw Error(G(189))}}if(t.alternate!==r)throw Error(G(190))}if(t.tag!==3)throw Error(G(188));return t.stateNode.current===t?e:n}function Bu(e){return e=zf(e),e!==null?Fu(e):null}function Fu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Fu(e);if(n!==null)return n;e=e.sibling}return null}var Gu=an.unstable_scheduleCallback,Sc=an.unstable_cancelCallback,Pf=an.unstable_shouldYield,Lf=an.unstable_requestPaint,_e=an.unstable_now,Rf=an.unstable_getCurrentPriorityLevel,vl=an.unstable_ImmediatePriority,Uu=an.unstable_UserBlockingPriority,_o=an.unstable_NormalPriority,Of=an.unstable_LowPriority,Hu=an.unstable_IdlePriority,ei=null,Tn=null;function Kf(e){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(ei,e,void 0,(e.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:Ff,Jf=Math.log,Bf=Math.LN2;function Ff(e){return e>>>=0,e===0?32:31-(Jf(e)/Bf|0)|0}var Va=64,za=4194304;function Pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Io(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,s=t&268435455;if(s!==0){var c=s&~a;c!==0?r=Pr(c):(i&=s,i!==0&&(r=Pr(i)))}else s=t&~a,s!==0?r=Pr(s):i!==0&&(r=Pr(i));if(r===0)return 0;if(n!==0&&n!==r&&!(n&a)&&(a=r&-r,i=n&-n,a>=i||a===16&&(i&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-In(n),a=1<<t,r|=e[t],n&=~a;return r}function Gf(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uf(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-In(i),c=1<<s,d=a[s];d===-1?(!(c&t)||c&r)&&(a[s]=Gf(c,n)):d<=n&&(e.expiredLanes|=c),i&=~c}}function ys(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Wu(){var e=Va;return Va<<=1,!(Va&4194240)&&(Va=64),e}function Ni(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Ia(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-In(n),e[n]=t}function Hf(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-In(t),i=1<<a;n[a]=0,r[a]=-1,e[a]=-1,t&=~i}}function yl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-In(t),a=1<<r;a&n|e[r]&n&&(e[r]|=n),t&=~a}}var le=0;function Zu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Yu,bl,Xu,Qu,qu,bs=!1,Pa=[],nt=null,tt=null,rt=null,qr=new Map,ea=new Map,Yn=[],Wf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cc(e,n){switch(e){case"focusin":case"focusout":nt=null;break;case"dragenter":case"dragleave":tt=null;break;case"mouseover":case"mouseout":rt=null;break;case"pointerover":case"pointerout":qr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(n.pointerId)}}function Sr(e,n,t,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},n!==null&&(n=ja(n),n!==null&&bl(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function Zf(e,n,t,r,a){switch(n){case"focusin":return nt=Sr(nt,e,n,t,r,a),!0;case"dragenter":return tt=Sr(tt,e,n,t,r,a),!0;case"mouseover":return rt=Sr(rt,e,n,t,r,a),!0;case"pointerover":var i=a.pointerId;return qr.set(i,Sr(qr.get(i)||null,e,n,t,r,a)),!0;case"gotpointercapture":return i=a.pointerId,ea.set(i,Sr(ea.get(i)||null,e,n,t,r,a)),!0}return!1}function ep(e){var n=vt(e.target);if(n!==null){var t=$t(n);if(t!==null){if(n=t.tag,n===13){if(n=Ju(t),n!==null){e.blockedOn=n,qu(e.priority,function(){Xu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function oo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=_s(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);gs=r,t.target.dispatchEvent(r),gs=null}else return n=ja(t),n!==null&&bl(n),e.blockedOn=t,!1;n.shift()}return!0}function Nc(e,n,t){oo(e)&&t.delete(n)}function Yf(){bs=!1,nt!==null&&oo(nt)&&(nt=null),tt!==null&&oo(tt)&&(tt=null),rt!==null&&oo(rt)&&(rt=null),qr.forEach(Nc),ea.forEach(Nc)}function Cr(e,n){e.blockedOn===n&&(e.blockedOn=null,bs||(bs=!0,an.unstable_scheduleCallback(an.unstable_NormalPriority,Yf)))}function na(e){function n(a){return Cr(a,e)}if(0<Pa.length){Cr(Pa[0],e);for(var t=1;t<Pa.length;t++){var r=Pa[t];r.blockedOn===e&&(r.blockedOn=null)}}for(nt!==null&&Cr(nt,e),tt!==null&&Cr(tt,e),rt!==null&&Cr(rt,e),qr.forEach(n),ea.forEach(n),t=0;t<Yn.length;t++)r=Yn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Yn.length&&(t=Yn[0],t.blockedOn===null);)ep(t),t.blockedOn===null&&Yn.shift()}var nr=Un.ReactCurrentBatchConfig,ko=!0;function Xf(e,n,t,r){var a=le,i=nr.transition;nr.transition=null;try{le=1,_l(e,n,t,r)}finally{le=a,nr.transition=i}}function Qf(e,n,t,r){var a=le,i=nr.transition;nr.transition=null;try{le=4,_l(e,n,t,r)}finally{le=a,nr.transition=i}}function _l(e,n,t,r){if(ko){var a=_s(e,n,t,r);if(a===null)Li(e,n,r,jo,t),Cc(e,r);else if(Zf(a,e,n,t,r))r.stopPropagation();else if(Cc(e,r),n&4&&-1<Wf.indexOf(e)){for(;a!==null;){var i=ja(a);if(i!==null&&Yu(i),i=_s(e,n,t,r),i===null&&Li(e,n,r,jo,t),i===a)break;a=i}a!==null&&r.stopPropagation()}else Li(e,n,r,null,t)}}var jo=null;function _s(e,n,t,r){if(jo=null,e=xl(r),e=vt(e),e!==null)if(n=$t(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ju(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return jo=e,null}function np(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rf()){case vl:return 1;case Uu:return 4;case _o:case Of:return 16;case Hu:return 536870912;default:return 16}default:return 16}}var qn=null,Il=null,io=null;function tp(){if(io)return io;var e,n=Il,t=n.length,r,a="value"in qn?qn.value:qn.textContent,i=a.length;for(e=0;e<t&&n[e]===a[e];e++);var s=t-e;for(r=1;r<=s&&n[t-r]===a[i-r];r++);return io=a.slice(e,1<r?1-r:void 0)}function so(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function La(){return!0}function Mc(){return!1}function sn(e){function n(t,r,a,i,s){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(t=e[c],this[c]=t?t(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?La:Mc,this.isPropagationStopped=Mc,this}return ye(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=La)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=La)},persist:function(){},isPersistent:La}),n}var xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kl=sn(xr),ka=ye({},xr,{view:0,detail:0}),qf=sn(ka),Mi,Ti,Nr,ni=ye({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nr&&(Nr&&e.type==="mousemove"?(Mi=e.screenX-Nr.screenX,Ti=e.screenY-Nr.screenY):Ti=Mi=0,Nr=e),Mi)},movementY:function(e){return"movementY"in e?e.movementY:Ti}}),Tc=sn(ni),eg=ye({},ni,{dataTransfer:0}),ng=sn(eg),tg=ye({},ka,{relatedTarget:0}),Ei=sn(tg),rg=ye({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),ag=sn(rg),og=ye({},xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ig=sn(og),sg=ye({},xr,{data:0}),Ec=sn(sg),lg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ug(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=dg[e])?!!n[e]:!1}function jl(){return ug}var pg=ye({},ka,{key:function(e){if(e.key){var n=lg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=so(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?cg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jl,charCode:function(e){return e.type==="keypress"?so(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?so(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mg=sn(pg),fg=ye({},ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dc=sn(fg),gg=ye({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jl}),hg=sn(gg),xg=ye({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),vg=sn(xg),yg=ye({},ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bg=sn(yg),_g=[9,13,27,32],wl=Jn&&"CompositionEvent"in window,Kr=null;Jn&&"documentMode"in document&&(Kr=document.documentMode);var Ig=Jn&&"TextEvent"in window&&!Kr,rp=Jn&&(!wl||Kr&&8<Kr&&11>=Kr),$c=" ",Ac=!1;function ap(e,n){switch(e){case"keyup":return _g.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function op(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ot=!1;function kg(e,n){switch(e){case"compositionend":return op(n);case"keypress":return n.which!==32?null:(Ac=!0,$c);case"textInput":return e=n.data,e===$c&&Ac?null:e;default:return null}}function jg(e,n){if(Ot)return e==="compositionend"||!wl&&ap(e,n)?(e=tp(),io=Il=qn=null,Ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return rp&&n.locale!=="ko"?null:n.data;default:return null}}var wg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!wg[e.type]:n==="textarea"}function ip(e,n,t,r){Pu(r),n=wo(n,"onChange"),0<n.length&&(t=new kl("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Jr=null,ta=null;function Sg(e){xp(e,0)}function ti(e){var n=Bt(e);if(Tu(n))return e}function Cg(e,n){if(e==="change")return n}var sp=!1;if(Jn){var Di;if(Jn){var $i="oninput"in document;if(!$i){var zc=document.createElement("div");zc.setAttribute("oninput","return;"),$i=typeof zc.oninput=="function"}Di=$i}else Di=!1;sp=Di&&(!document.documentMode||9<document.documentMode)}function Pc(){Jr&&(Jr.detachEvent("onpropertychange",lp),ta=Jr=null)}function lp(e){if(e.propertyName==="value"&&ti(ta)){var n=[];ip(n,ta,e,xl(e)),Ku(Sg,n)}}function Ng(e,n,t){e==="focusin"?(Pc(),Jr=n,ta=t,Jr.attachEvent("onpropertychange",lp)):e==="focusout"&&Pc()}function Mg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ti(ta)}function Tg(e,n){if(e==="click")return ti(n)}function Eg(e,n){if(e==="input"||e==="change")return ti(n)}function Dg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var wn=typeof Object.is=="function"?Object.is:Dg;function ra(e,n){if(wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!rs.call(n,a)||!wn(e[a],n[a]))return!1}return!0}function Lc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rc(e,n){var t=Lc(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Lc(t)}}function cp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?cp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function dp(){for(var e=window,n=vo();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=vo(e.document)}return n}function Sl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function $g(e){var n=dp(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&cp(t.ownerDocument.documentElement,t)){if(r!==null&&Sl(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=Rc(t,i);var s=Rc(t,r);a&&s&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ag=Jn&&"documentMode"in document&&11>=document.documentMode,Kt=null,Is=null,Br=null,ks=!1;function Oc(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ks||Kt==null||Kt!==vo(r)||(r=Kt,"selectionStart"in r&&Sl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&ra(Br,r)||(Br=r,r=wo(Is,"onSelect"),0<r.length&&(n=new kl("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Kt)))}function Ra(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Jt={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionend:Ra("Transition","TransitionEnd")},Ai={},up={};Jn&&(up=document.createElement("div").style,"AnimationEvent"in window||(delete Jt.animationend.animation,delete Jt.animationiteration.animation,delete Jt.animationstart.animation),"TransitionEvent"in window||delete Jt.transitionend.transition);function ri(e){if(Ai[e])return Ai[e];if(!Jt[e])return e;var n=Jt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in up)return Ai[e]=n[t];return e}var pp=ri("animationend"),mp=ri("animationiteration"),fp=ri("animationstart"),gp=ri("transitionend"),hp=new Map,Kc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ut(e,n){hp.set(e,n),Dt(n,[e])}for(var Vi=0;Vi<Kc.length;Vi++){var zi=Kc[Vi],Vg=zi.toLowerCase(),zg=zi[0].toUpperCase()+zi.slice(1);ut(Vg,"on"+zg)}ut(pp,"onAnimationEnd");ut(mp,"onAnimationIteration");ut(fp,"onAnimationStart");ut("dblclick","onDoubleClick");ut("focusin","onFocus");ut("focusout","onBlur");ut(gp,"onTransitionEnd");ir("onMouseEnter",["mouseout","mouseover"]);ir("onMouseLeave",["mouseout","mouseover"]);ir("onPointerEnter",["pointerout","pointerover"]);ir("onPointerLeave",["pointerout","pointerover"]);Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function Jc(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Vf(r,n,void 0,e),e.currentTarget=null}function xp(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],a=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var s=r.length-1;0<=s;s--){var c=r[s],d=c.instance,u=c.currentTarget;if(c=c.listener,d!==i&&a.isPropagationStopped())break e;Jc(a,c,u),i=d}else for(s=0;s<r.length;s++){if(c=r[s],d=c.instance,u=c.currentTarget,c=c.listener,d!==i&&a.isPropagationStopped())break e;Jc(a,c,u),i=d}}}if(bo)throw e=vs,bo=!1,vs=null,e}function me(e,n){var t=n[Ns];t===void 0&&(t=n[Ns]=new Set);var r=e+"__bubble";t.has(r)||(vp(n,e,2,!1),t.add(r))}function Pi(e,n,t){var r=0;n&&(r|=4),vp(t,e,r,n)}var Oa="_reactListening"+Math.random().toString(36).slice(2);function aa(e){if(!e[Oa]){e[Oa]=!0,wu.forEach(function(t){t!=="selectionchange"&&(Pg.has(t)||Pi(t,!1,e),Pi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Oa]||(n[Oa]=!0,Pi("selectionchange",!1,n))}}function vp(e,n,t,r){switch(np(n)){case 1:var a=Xf;break;case 4:a=Qf;break;default:a=_l}t=a.bind(null,n,t,e),a=void 0,!xs||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function Li(e,n,t,r,a){var i=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===a||c.nodeType===8&&c.parentNode===a)break;if(s===4)for(s=r.return;s!==null;){var d=s.tag;if((d===3||d===4)&&(d=s.stateNode.containerInfo,d===a||d.nodeType===8&&d.parentNode===a))return;s=s.return}for(;c!==null;){if(s=vt(c),s===null)return;if(d=s.tag,d===5||d===6){r=i=s;continue e}c=c.parentNode}}r=r.return}Ku(function(){var u=i,p=xl(t),m=[];e:{var g=hp.get(e);if(g!==void 0){var h=kl,f=e;switch(e){case"keypress":if(so(t)===0)break e;case"keydown":case"keyup":h=mg;break;case"focusin":f="focus",h=Ei;break;case"focusout":f="blur",h=Ei;break;case"beforeblur":case"afterblur":h=Ei;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Tc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=ng;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=hg;break;case pp:case mp:case fp:h=ag;break;case gp:h=vg;break;case"scroll":h=qf;break;case"wheel":h=bg;break;case"copy":case"cut":case"paste":h=ig;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Dc}var y=(n&4)!==0,_=!y&&e==="scroll",v=y?g!==null?g+"Capture":null:g;y=[];for(var x=u,b;x!==null;){b=x;var j=b.stateNode;if(b.tag===5&&j!==null&&(b=j,v!==null&&(j=Qr(x,v),j!=null&&y.push(oa(x,j,b)))),_)break;x=x.return}0<y.length&&(g=new h(g,f,null,t,p),m.push({event:g,listeners:y}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",g&&t!==gs&&(f=t.relatedTarget||t.fromElement)&&(vt(f)||f[Bn]))break e;if((h||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,h?(f=t.relatedTarget||t.toElement,h=u,f=f?vt(f):null,f!==null&&(_=$t(f),f!==_||f.tag!==5&&f.tag!==6)&&(f=null)):(h=null,f=u),h!==f)){if(y=Tc,j="onMouseLeave",v="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(y=Dc,j="onPointerLeave",v="onPointerEnter",x="pointer"),_=h==null?g:Bt(h),b=f==null?g:Bt(f),g=new y(j,x+"leave",h,t,p),g.target=_,g.relatedTarget=b,j=null,vt(p)===u&&(y=new y(v,x+"enter",f,t,p),y.target=b,y.relatedTarget=_,j=y),_=j,h&&f)n:{for(y=h,v=f,x=0,b=y;b;b=At(b))x++;for(b=0,j=v;j;j=At(j))b++;for(;0<x-b;)y=At(y),x--;for(;0<b-x;)v=At(v),b--;for(;x--;){if(y===v||v!==null&&y===v.alternate)break n;y=At(y),v=At(v)}y=null}else y=null;h!==null&&Bc(m,g,h,y,!1),f!==null&&_!==null&&Bc(m,_,f,y,!0)}}e:{if(g=u?Bt(u):window,h=g.nodeName&&g.nodeName.toLowerCase(),h==="select"||h==="input"&&g.type==="file")var T=Cg;else if(Vc(g))if(sp)T=Eg;else{T=Mg;var $=Ng}else(h=g.nodeName)&&h.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(T=Tg);if(T&&(T=T(e,u))){ip(m,T,t,p);break e}$&&$(e,g,u),e==="focusout"&&($=g._wrapperState)&&$.controlled&&g.type==="number"&&ds(g,"number",g.value)}switch($=u?Bt(u):window,e){case"focusin":(Vc($)||$.contentEditable==="true")&&(Kt=$,Is=u,Br=null);break;case"focusout":Br=Is=Kt=null;break;case"mousedown":ks=!0;break;case"contextmenu":case"mouseup":case"dragend":ks=!1,Oc(m,t,p);break;case"selectionchange":if(Ag)break;case"keydown":case"keyup":Oc(m,t,p)}var k;if(wl)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Ot?ap(e,t)&&(S="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&(rp&&t.locale!=="ko"&&(Ot||S!=="onCompositionStart"?S==="onCompositionEnd"&&Ot&&(k=tp()):(qn=p,Il="value"in qn?qn.value:qn.textContent,Ot=!0)),$=wo(u,S),0<$.length&&(S=new Ec(S,e,null,t,p),m.push({event:S,listeners:$}),k?S.data=k:(k=op(t),k!==null&&(S.data=k)))),(k=Ig?kg(e,t):jg(e,t))&&(u=wo(u,"onBeforeInput"),0<u.length&&(p=new Ec("onBeforeInput","beforeinput",null,t,p),m.push({event:p,listeners:u}),p.data=k))}xp(m,n)})}function oa(e,n,t){return{instance:e,listener:n,currentTarget:t}}function wo(e,n){for(var t=n+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Qr(e,t),i!=null&&r.unshift(oa(e,i,a)),i=Qr(e,n),i!=null&&r.push(oa(e,i,a))),e=e.return}return r}function At(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bc(e,n,t,r,a){for(var i=n._reactName,s=[];t!==null&&t!==r;){var c=t,d=c.alternate,u=c.stateNode;if(d!==null&&d===r)break;c.tag===5&&u!==null&&(c=u,a?(d=Qr(t,i),d!=null&&s.unshift(oa(t,d,c))):a||(d=Qr(t,i),d!=null&&s.push(oa(t,d,c)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var Lg=/\r\n?/g,Rg=/\u0000|\uFFFD/g;function Fc(e){return(typeof e=="string"?e:""+e).replace(Lg,`
`).replace(Rg,"")}function Ka(e,n,t){if(n=Fc(n),Fc(e)!==n&&t)throw Error(G(425))}function So(){}var js=null,ws=null;function Ss(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Cs=typeof setTimeout=="function"?setTimeout:void 0,Og=typeof clearTimeout=="function"?clearTimeout:void 0,Gc=typeof Promise=="function"?Promise:void 0,Kg=typeof queueMicrotask=="function"?queueMicrotask:typeof Gc<"u"?function(e){return Gc.resolve(null).then(e).catch(Jg)}:Cs;function Jg(e){setTimeout(function(){throw e})}function Ri(e,n){var t=n,r=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(r===0){e.removeChild(a),na(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=a}while(t);na(n)}function at(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Uc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var vr=Math.random().toString(36).slice(2),Mn="__reactFiber$"+vr,ia="__reactProps$"+vr,Bn="__reactContainer$"+vr,Ns="__reactEvents$"+vr,Bg="__reactListeners$"+vr,Fg="__reactHandles$"+vr;function vt(e){var n=e[Mn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Bn]||t[Mn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Uc(e);e!==null;){if(t=e[Mn])return t;e=Uc(e)}return n}e=t,t=e.parentNode}return null}function ja(e){return e=e[Mn]||e[Bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(G(33))}function ai(e){return e[ia]||null}var Ms=[],Ft=-1;function pt(e){return{current:e}}function fe(e){0>Ft||(e.current=Ms[Ft],Ms[Ft]=null,Ft--)}function pe(e,n){Ft++,Ms[Ft]=e.current,e.current=n}var dt={},Oe=pt(dt),Ye=pt(!1),kt=dt;function sr(e,n){var t=e.type.contextTypes;if(!t)return dt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in t)a[i]=n[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=a),a}function Xe(e){return e=e.childContextTypes,e!=null}function Co(){fe(Ye),fe(Oe)}function Hc(e,n,t){if(Oe.current!==dt)throw Error(G(168));pe(Oe,n),pe(Ye,t)}function yp(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var a in r)if(!(a in n))throw Error(G(108,Nf(e)||"Unknown",a));return ye({},t,r)}function No(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dt,kt=Oe.current,pe(Oe,e),pe(Ye,Ye.current),!0}function Wc(e,n,t){var r=e.stateNode;if(!r)throw Error(G(169));t?(e=yp(e,n,kt),r.__reactInternalMemoizedMergedChildContext=e,fe(Ye),fe(Oe),pe(Oe,e)):fe(Ye),pe(Ye,t)}var zn=null,oi=!1,Oi=!1;function bp(e){zn===null?zn=[e]:zn.push(e)}function Gg(e){oi=!0,bp(e)}function mt(){if(!Oi&&zn!==null){Oi=!0;var e=0,n=le;try{var t=zn;for(le=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}zn=null,oi=!1}catch(a){throw zn!==null&&(zn=zn.slice(e+1)),Gu(vl,mt),a}finally{le=n,Oi=!1}}return null}var Gt=[],Ut=0,Mo=null,To=0,dn=[],un=0,jt=null,Rn=1,On="";function gt(e,n){Gt[Ut++]=To,Gt[Ut++]=Mo,Mo=e,To=n}function _p(e,n,t){dn[un++]=Rn,dn[un++]=On,dn[un++]=jt,jt=e;var r=Rn;e=On;var a=32-In(r)-1;r&=~(1<<a),t+=1;var i=32-In(n)+a;if(30<i){var s=a-a%5;i=(r&(1<<s)-1).toString(32),r>>=s,a-=s,Rn=1<<32-In(n)+a|t<<a|r,On=i+e}else Rn=1<<i|t<<a|r,On=e}function Cl(e){e.return!==null&&(gt(e,1),_p(e,1,0))}function Nl(e){for(;e===Mo;)Mo=Gt[--Ut],Gt[Ut]=null,To=Gt[--Ut],Gt[Ut]=null;for(;e===jt;)jt=dn[--un],dn[un]=null,On=dn[--un],dn[un]=null,Rn=dn[--un],dn[un]=null}var rn=null,tn=null,ge=!1,_n=null;function Ip(e,n){var t=pn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Zc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,rn=e,tn=at(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,rn=e,tn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=jt!==null?{id:Rn,overflow:On}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=pn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,rn=e,tn=null,!0):!1;default:return!1}}function Ts(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Es(e){if(ge){var n=tn;if(n){var t=n;if(!Zc(e,n)){if(Ts(e))throw Error(G(418));n=at(t.nextSibling);var r=rn;n&&Zc(e,n)?Ip(r,t):(e.flags=e.flags&-4097|2,ge=!1,rn=e)}}else{if(Ts(e))throw Error(G(418));e.flags=e.flags&-4097|2,ge=!1,rn=e}}}function Yc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rn=e}function Ja(e){if(e!==rn)return!1;if(!ge)return Yc(e),ge=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ss(e.type,e.memoizedProps)),n&&(n=tn)){if(Ts(e))throw kp(),Error(G(418));for(;n;)Ip(e,n),n=at(n.nextSibling)}if(Yc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){tn=at(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}tn=null}}else tn=rn?at(e.stateNode.nextSibling):null;return!0}function kp(){for(var e=tn;e;)e=at(e.nextSibling)}function lr(){tn=rn=null,ge=!1}function Ml(e){_n===null?_n=[e]:_n.push(e)}var Ug=Un.ReactCurrentBatchConfig;function Mr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(G(309));var r=t.stateNode}if(!r)throw Error(G(147,e));var a=r,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(s){var c=a.refs;s===null?delete c[i]:c[i]=s},n._stringRef=i,n)}if(typeof e!="string")throw Error(G(284));if(!t._owner)throw Error(G(290,e))}return e}function Ba(e,n){throw e=Object.prototype.toString.call(n),Error(G(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Xc(e){var n=e._init;return n(e._payload)}function jp(e){function n(v,x){if(e){var b=v.deletions;b===null?(v.deletions=[x],v.flags|=16):b.push(x)}}function t(v,x){if(!e)return null;for(;x!==null;)n(v,x),x=x.sibling;return null}function r(v,x){for(v=new Map;x!==null;)x.key!==null?v.set(x.key,x):v.set(x.index,x),x=x.sibling;return v}function a(v,x){return v=lt(v,x),v.index=0,v.sibling=null,v}function i(v,x,b){return v.index=b,e?(b=v.alternate,b!==null?(b=b.index,b<x?(v.flags|=2,x):b):(v.flags|=2,x)):(v.flags|=1048576,x)}function s(v){return e&&v.alternate===null&&(v.flags|=2),v}function c(v,x,b,j){return x===null||x.tag!==6?(x=Hi(b,v.mode,j),x.return=v,x):(x=a(x,b),x.return=v,x)}function d(v,x,b,j){var T=b.type;return T===Rt?p(v,x,b.props.children,j,b.key):x!==null&&(x.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Wn&&Xc(T)===x.type)?(j=a(x,b.props),j.ref=Mr(v,x,b),j.return=v,j):(j=go(b.type,b.key,b.props,null,v.mode,j),j.ref=Mr(v,x,b),j.return=v,j)}function u(v,x,b,j){return x===null||x.tag!==4||x.stateNode.containerInfo!==b.containerInfo||x.stateNode.implementation!==b.implementation?(x=Wi(b,v.mode,j),x.return=v,x):(x=a(x,b.children||[]),x.return=v,x)}function p(v,x,b,j,T){return x===null||x.tag!==7?(x=It(b,v.mode,j,T),x.return=v,x):(x=a(x,b),x.return=v,x)}function m(v,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Hi(""+x,v.mode,b),x.return=v,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Da:return b=go(x.type,x.key,x.props,null,v.mode,b),b.ref=Mr(v,null,x),b.return=v,b;case Lt:return x=Wi(x,v.mode,b),x.return=v,x;case Wn:var j=x._init;return m(v,j(x._payload),b)}if(zr(x)||jr(x))return x=It(x,v.mode,b,null),x.return=v,x;Ba(v,x)}return null}function g(v,x,b,j){var T=x!==null?x.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return T!==null?null:c(v,x,""+b,j);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Da:return b.key===T?d(v,x,b,j):null;case Lt:return b.key===T?u(v,x,b,j):null;case Wn:return T=b._init,g(v,x,T(b._payload),j)}if(zr(b)||jr(b))return T!==null?null:p(v,x,b,j,null);Ba(v,b)}return null}function h(v,x,b,j,T){if(typeof j=="string"&&j!==""||typeof j=="number")return v=v.get(b)||null,c(x,v,""+j,T);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Da:return v=v.get(j.key===null?b:j.key)||null,d(x,v,j,T);case Lt:return v=v.get(j.key===null?b:j.key)||null,u(x,v,j,T);case Wn:var $=j._init;return h(v,x,b,$(j._payload),T)}if(zr(j)||jr(j))return v=v.get(b)||null,p(x,v,j,T,null);Ba(x,j)}return null}function f(v,x,b,j){for(var T=null,$=null,k=x,S=x=0,A=null;k!==null&&S<b.length;S++){k.index>S?(A=k,k=null):A=k.sibling;var E=g(v,k,b[S],j);if(E===null){k===null&&(k=A);break}e&&k&&E.alternate===null&&n(v,k),x=i(E,x,S),$===null?T=E:$.sibling=E,$=E,k=A}if(S===b.length)return t(v,k),ge&&gt(v,S),T;if(k===null){for(;S<b.length;S++)k=m(v,b[S],j),k!==null&&(x=i(k,x,S),$===null?T=k:$.sibling=k,$=k);return ge&&gt(v,S),T}for(k=r(v,k);S<b.length;S++)A=h(k,v,S,b[S],j),A!==null&&(e&&A.alternate!==null&&k.delete(A.key===null?S:A.key),x=i(A,x,S),$===null?T=A:$.sibling=A,$=A);return e&&k.forEach(function(D){return n(v,D)}),ge&&gt(v,S),T}function y(v,x,b,j){var T=jr(b);if(typeof T!="function")throw Error(G(150));if(b=T.call(b),b==null)throw Error(G(151));for(var $=T=null,k=x,S=x=0,A=null,E=b.next();k!==null&&!E.done;S++,E=b.next()){k.index>S?(A=k,k=null):A=k.sibling;var D=g(v,k,E.value,j);if(D===null){k===null&&(k=A);break}e&&k&&D.alternate===null&&n(v,k),x=i(D,x,S),$===null?T=D:$.sibling=D,$=D,k=A}if(E.done)return t(v,k),ge&&gt(v,S),T;if(k===null){for(;!E.done;S++,E=b.next())E=m(v,E.value,j),E!==null&&(x=i(E,x,S),$===null?T=E:$.sibling=E,$=E);return ge&&gt(v,S),T}for(k=r(v,k);!E.done;S++,E=b.next())E=h(k,v,S,E.value,j),E!==null&&(e&&E.alternate!==null&&k.delete(E.key===null?S:E.key),x=i(E,x,S),$===null?T=E:$.sibling=E,$=E);return e&&k.forEach(function(L){return n(v,L)}),ge&&gt(v,S),T}function _(v,x,b,j){if(typeof b=="object"&&b!==null&&b.type===Rt&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Da:e:{for(var T=b.key,$=x;$!==null;){if($.key===T){if(T=b.type,T===Rt){if($.tag===7){t(v,$.sibling),x=a($,b.props.children),x.return=v,v=x;break e}}else if($.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Wn&&Xc(T)===$.type){t(v,$.sibling),x=a($,b.props),x.ref=Mr(v,$,b),x.return=v,v=x;break e}t(v,$);break}else n(v,$);$=$.sibling}b.type===Rt?(x=It(b.props.children,v.mode,j,b.key),x.return=v,v=x):(j=go(b.type,b.key,b.props,null,v.mode,j),j.ref=Mr(v,x,b),j.return=v,v=j)}return s(v);case Lt:e:{for($=b.key;x!==null;){if(x.key===$)if(x.tag===4&&x.stateNode.containerInfo===b.containerInfo&&x.stateNode.implementation===b.implementation){t(v,x.sibling),x=a(x,b.children||[]),x.return=v,v=x;break e}else{t(v,x);break}else n(v,x);x=x.sibling}x=Wi(b,v.mode,j),x.return=v,v=x}return s(v);case Wn:return $=b._init,_(v,x,$(b._payload),j)}if(zr(b))return f(v,x,b,j);if(jr(b))return y(v,x,b,j);Ba(v,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,x!==null&&x.tag===6?(t(v,x.sibling),x=a(x,b),x.return=v,v=x):(t(v,x),x=Hi(b,v.mode,j),x.return=v,v=x),s(v)):t(v,x)}return _}var cr=jp(!0),wp=jp(!1),Eo=pt(null),Do=null,Ht=null,Tl=null;function El(){Tl=Ht=Do=null}function Dl(e){var n=Eo.current;fe(Eo),e._currentValue=n}function Ds(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function tr(e,n){Do=e,Tl=Ht=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(We=!0),e.firstContext=null)}function hn(e){var n=e._currentValue;if(Tl!==e)if(e={context:e,memoizedValue:n,next:null},Ht===null){if(Do===null)throw Error(G(308));Ht=e,Do.dependencies={lanes:0,firstContext:e}}else Ht=Ht.next=e;return n}var yt=null;function $l(e){yt===null?yt=[e]:yt.push(e)}function Sp(e,n,t,r){var a=n.interleaved;return a===null?(t.next=t,$l(n)):(t.next=a.next,a.next=t),n.interleaved=t,Fn(e,r)}function Fn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Zn=!1;function Al(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Kn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function ot(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var a=r.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n,Fn(e,t)}return a=r.interleaved,a===null?(n.next=n,$l(r)):(n.next=a.next,a.next=n),r.interleaved=n,Fn(e,t)}function lo(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,yl(e,t)}}function Qc(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?a=i=s:i=i.next=s,t=t.next}while(t!==null);i===null?a=i=n:i=i.next=n}else a=i=n;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function $o(e,n,t,r){var a=e.updateQueue;Zn=!1;var i=a.firstBaseUpdate,s=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var d=c,u=d.next;d.next=null,s===null?i=u:s.next=u,s=d;var p=e.alternate;p!==null&&(p=p.updateQueue,c=p.lastBaseUpdate,c!==s&&(c===null?p.firstBaseUpdate=u:c.next=u,p.lastBaseUpdate=d))}if(i!==null){var m=a.baseState;s=0,p=u=d=null,c=i;do{var g=c.lane,h=c.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:h,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var f=e,y=c;switch(g=n,h=t,y.tag){case 1:if(f=y.payload,typeof f=="function"){m=f.call(h,m,g);break e}m=f;break e;case 3:f.flags=f.flags&-65537|128;case 0:if(f=y.payload,g=typeof f=="function"?f.call(h,m,g):f,g==null)break e;m=ye({},m,g);break e;case 2:Zn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,g=a.effects,g===null?a.effects=[c]:g.push(c))}else h={eventTime:h,lane:g,tag:c.tag,payload:c.payload,callback:c.callback,next:null},p===null?(u=p=h,d=m):p=p.next=h,s|=g;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;g=c,c=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);if(p===null&&(d=m),a.baseState=d,a.firstBaseUpdate=u,a.lastBaseUpdate=p,n=a.shared.interleaved,n!==null){a=n;do s|=a.lane,a=a.next;while(a!==n)}else i===null&&(a.shared.lanes=0);St|=s,e.lanes=s,e.memoizedState=m}}function qc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],a=r.callback;if(a!==null){if(r.callback=null,r=t,typeof a!="function")throw Error(G(191,a));a.call(r)}}}var wa={},En=pt(wa),sa=pt(wa),la=pt(wa);function bt(e){if(e===wa)throw Error(G(174));return e}function Vl(e,n){switch(pe(la,n),pe(sa,e),pe(En,wa),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ps(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ps(n,e)}fe(En),pe(En,n)}function dr(){fe(En),fe(sa),fe(la)}function Np(e){bt(la.current);var n=bt(En.current),t=ps(n,e.type);n!==t&&(pe(sa,e),pe(En,t))}function zl(e){sa.current===e&&(fe(En),fe(sa))}var he=pt(0);function Ao(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ki=[];function Pl(){for(var e=0;e<Ki.length;e++)Ki[e]._workInProgressVersionPrimary=null;Ki.length=0}var co=Un.ReactCurrentDispatcher,Ji=Un.ReactCurrentBatchConfig,wt=0,ve=null,we=null,Me=null,Vo=!1,Fr=!1,ca=0,Hg=0;function ze(){throw Error(G(321))}function Ll(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!wn(e[t],n[t]))return!1;return!0}function Rl(e,n,t,r,a,i){if(wt=i,ve=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,co.current=e===null||e.memoizedState===null?Xg:Qg,e=t(r,a),Fr){i=0;do{if(Fr=!1,ca=0,25<=i)throw Error(G(301));i+=1,Me=we=null,n.updateQueue=null,co.current=qg,e=t(r,a)}while(Fr)}if(co.current=zo,n=we!==null&&we.next!==null,wt=0,Me=we=ve=null,Vo=!1,n)throw Error(G(300));return e}function Ol(){var e=ca!==0;return ca=0,e}function Nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?ve.memoizedState=Me=e:Me=Me.next=e,Me}function xn(){if(we===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var n=Me===null?ve.memoizedState:Me.next;if(n!==null)Me=n,we=e;else{if(e===null)throw Error(G(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Me===null?ve.memoizedState=Me=e:Me=Me.next=e}return Me}function da(e,n){return typeof n=="function"?n(e):n}function Bi(e){var n=xn(),t=n.queue;if(t===null)throw Error(G(311));t.lastRenderedReducer=e;var r=we,a=r.baseQueue,i=t.pending;if(i!==null){if(a!==null){var s=a.next;a.next=i.next,i.next=s}r.baseQueue=a=i,t.pending=null}if(a!==null){i=a.next,r=r.baseState;var c=s=null,d=null,u=i;do{var p=u.lane;if((wt&p)===p)d!==null&&(d=d.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};d===null?(c=d=m,s=r):d=d.next=m,ve.lanes|=p,St|=p}u=u.next}while(u!==null&&u!==i);d===null?s=r:d.next=c,wn(r,n.memoizedState)||(We=!0),n.memoizedState=r,n.baseState=s,n.baseQueue=d,t.lastRenderedState=r}if(e=t.interleaved,e!==null){a=e;do i=a.lane,ve.lanes|=i,St|=i,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Fi(e){var n=xn(),t=n.queue;if(t===null)throw Error(G(311));t.lastRenderedReducer=e;var r=t.dispatch,a=t.pending,i=n.memoizedState;if(a!==null){t.pending=null;var s=a=a.next;do i=e(i,s.action),s=s.next;while(s!==a);wn(i,n.memoizedState)||(We=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function Mp(){}function Tp(e,n){var t=ve,r=xn(),a=n(),i=!wn(r.memoizedState,a);if(i&&(r.memoizedState=a,We=!0),r=r.queue,Kl($p.bind(null,t,r,e),[e]),r.getSnapshot!==n||i||Me!==null&&Me.memoizedState.tag&1){if(t.flags|=2048,ua(9,Dp.bind(null,t,r,a,n),void 0,null),Te===null)throw Error(G(349));wt&30||Ep(t,n,a)}return a}function Ep(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ve.updateQueue,n===null?(n={lastEffect:null,stores:null},ve.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Dp(e,n,t,r){n.value=t,n.getSnapshot=r,Ap(n)&&Vp(e)}function $p(e,n,t){return t(function(){Ap(n)&&Vp(e)})}function Ap(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!wn(e,t)}catch{return!0}}function Vp(e){var n=Fn(e,1);n!==null&&kn(n,e,1,-1)}function ed(e){var n=Nn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:e},n.queue=e,e=e.dispatch=Yg.bind(null,ve,e),[n.memoizedState,e]}function ua(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ve.updateQueue,n===null?(n={lastEffect:null,stores:null},ve.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function zp(){return xn().memoizedState}function uo(e,n,t,r){var a=Nn();ve.flags|=e,a.memoizedState=ua(1|n,t,void 0,r===void 0?null:r)}function ii(e,n,t,r){var a=xn();r=r===void 0?null:r;var i=void 0;if(we!==null){var s=we.memoizedState;if(i=s.destroy,r!==null&&Ll(r,s.deps)){a.memoizedState=ua(n,t,i,r);return}}ve.flags|=e,a.memoizedState=ua(1|n,t,i,r)}function nd(e,n){return uo(8390656,8,e,n)}function Kl(e,n){return ii(2048,8,e,n)}function Pp(e,n){return ii(4,2,e,n)}function Lp(e,n){return ii(4,4,e,n)}function Rp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Op(e,n,t){return t=t!=null?t.concat([e]):null,ii(4,4,Rp.bind(null,n,e),t)}function Jl(){}function Kp(e,n){var t=xn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ll(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Jp(e,n){var t=xn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&Ll(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Bp(e,n,t){return wt&21?(wn(t,n)||(t=Wu(),ve.lanes|=t,St|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=t)}function Wg(e,n){var t=le;le=t!==0&&4>t?t:4,e(!0);var r=Ji.transition;Ji.transition={};try{e(!1),n()}finally{le=t,Ji.transition=r}}function Fp(){return xn().memoizedState}function Zg(e,n,t){var r=st(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Gp(e))Up(n,t);else if(t=Sp(e,n,t,r),t!==null){var a=Fe();kn(t,e,r,a),Hp(t,n,r)}}function Yg(e,n,t){var r=st(e),a={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Gp(e))Up(n,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var s=n.lastRenderedState,c=i(s,t);if(a.hasEagerState=!0,a.eagerState=c,wn(c,s)){var d=n.interleaved;d===null?(a.next=a,$l(n)):(a.next=d.next,d.next=a),n.interleaved=a;return}}catch{}finally{}t=Sp(e,n,a,r),t!==null&&(a=Fe(),kn(t,e,r,a),Hp(t,n,r))}}function Gp(e){var n=e.alternate;return e===ve||n!==null&&n===ve}function Up(e,n){Fr=Vo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Hp(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,yl(e,t)}}var zo={readContext:hn,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},Xg={readContext:hn,useCallback:function(e,n){return Nn().memoizedState=[e,n===void 0?null:n],e},useContext:hn,useEffect:nd,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,uo(4194308,4,Rp.bind(null,n,e),t)},useLayoutEffect:function(e,n){return uo(4194308,4,e,n)},useInsertionEffect:function(e,n){return uo(4,2,e,n)},useMemo:function(e,n){var t=Nn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=Nn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Zg.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var n=Nn();return e={current:e},n.memoizedState=e},useState:ed,useDebugValue:Jl,useDeferredValue:function(e){return Nn().memoizedState=e},useTransition:function(){var e=ed(!1),n=e[0];return e=Wg.bind(null,e[1]),Nn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ve,a=Nn();if(ge){if(t===void 0)throw Error(G(407));t=t()}else{if(t=n(),Te===null)throw Error(G(349));wt&30||Ep(r,n,t)}a.memoizedState=t;var i={value:t,getSnapshot:n};return a.queue=i,nd($p.bind(null,r,i,e),[e]),r.flags|=2048,ua(9,Dp.bind(null,r,i,t,n),void 0,null),t},useId:function(){var e=Nn(),n=Te.identifierPrefix;if(ge){var t=On,r=Rn;t=(r&~(1<<32-In(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=ca++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Hg++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Qg={readContext:hn,useCallback:Kp,useContext:hn,useEffect:Kl,useImperativeHandle:Op,useInsertionEffect:Pp,useLayoutEffect:Lp,useMemo:Jp,useReducer:Bi,useRef:zp,useState:function(){return Bi(da)},useDebugValue:Jl,useDeferredValue:function(e){var n=xn();return Bp(n,we.memoizedState,e)},useTransition:function(){var e=Bi(da)[0],n=xn().memoizedState;return[e,n]},useMutableSource:Mp,useSyncExternalStore:Tp,useId:Fp,unstable_isNewReconciler:!1},qg={readContext:hn,useCallback:Kp,useContext:hn,useEffect:Kl,useImperativeHandle:Op,useInsertionEffect:Pp,useLayoutEffect:Lp,useMemo:Jp,useReducer:Fi,useRef:zp,useState:function(){return Fi(da)},useDebugValue:Jl,useDeferredValue:function(e){var n=xn();return we===null?n.memoizedState=e:Bp(n,we.memoizedState,e)},useTransition:function(){var e=Fi(da)[0],n=xn().memoizedState;return[e,n]},useMutableSource:Mp,useSyncExternalStore:Tp,useId:Fp,unstable_isNewReconciler:!1};function yn(e,n){if(e&&e.defaultProps){n=ye({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function $s(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:ye({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var si={isMounted:function(e){return(e=e._reactInternals)?$t(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Fe(),a=st(e),i=Kn(r,a);i.payload=n,t!=null&&(i.callback=t),n=ot(e,i,a),n!==null&&(kn(n,e,a,r),lo(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Fe(),a=st(e),i=Kn(r,a);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=ot(e,i,a),n!==null&&(kn(n,e,a,r),lo(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Fe(),r=st(e),a=Kn(t,r);a.tag=2,n!=null&&(a.callback=n),n=ot(e,a,r),n!==null&&(kn(n,e,r,t),lo(n,e,r))}};function td(e,n,t,r,a,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):n.prototype&&n.prototype.isPureReactComponent?!ra(t,r)||!ra(a,i):!0}function Wp(e,n,t){var r=!1,a=dt,i=n.contextType;return typeof i=="object"&&i!==null?i=hn(i):(a=Xe(n)?kt:Oe.current,r=n.contextTypes,i=(r=r!=null)?sr(e,a):dt),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=si,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),n}function rd(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&si.enqueueReplaceState(n,n.state,null)}function As(e,n,t,r){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},Al(e);var i=n.contextType;typeof i=="object"&&i!==null?a.context=hn(i):(i=Xe(n)?kt:Oe.current,a.context=sr(e,i)),a.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&($s(e,n,i,t),a.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(n=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),n!==a.state&&si.enqueueReplaceState(a,a.state,null),$o(e,t,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function ur(e,n){try{var t="",r=n;do t+=Cf(r),r=r.return;while(r);var a=t}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:a,digest:null}}function Gi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Vs(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var eh=typeof WeakMap=="function"?WeakMap:Map;function Zp(e,n,t){t=Kn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Lo||(Lo=!0,Gs=r),Vs(e,n)},t}function Yp(e,n,t){t=Kn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=n.value;t.payload=function(){return r(a)},t.callback=function(){Vs(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Vs(e,n),typeof r!="function"&&(it===null?it=new Set([this]):it.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function ad(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new eh;var a=new Set;r.set(n,a)}else a=r.get(n),a===void 0&&(a=new Set,r.set(n,a));a.has(t)||(a.add(t),e=fh.bind(null,e,n,t),n.then(e,e))}function od(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function id(e,n,t,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Kn(-1,1),n.tag=2,ot(t,n,1))),t.lanes|=1),e)}var nh=Un.ReactCurrentOwner,We=!1;function Be(e,n,t,r){n.child=e===null?wp(n,null,t,r):cr(n,e.child,t,r)}function sd(e,n,t,r,a){t=t.render;var i=n.ref;return tr(n,a),r=Rl(e,n,t,r,i,a),t=Ol(),e!==null&&!We?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Gn(e,n,a)):(ge&&t&&Cl(n),n.flags|=1,Be(e,n,r,a),n.child)}function ld(e,n,t,r,a){if(e===null){var i=t.type;return typeof i=="function"&&!Yl(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Xp(e,n,i,r,a)):(e=go(t.type,null,r,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&a)){var s=i.memoizedProps;if(t=t.compare,t=t!==null?t:ra,t(s,r)&&e.ref===n.ref)return Gn(e,n,a)}return n.flags|=1,e=lt(i,r),e.ref=n.ref,e.return=n,n.child=e}function Xp(e,n,t,r,a){if(e!==null){var i=e.memoizedProps;if(ra(i,r)&&e.ref===n.ref)if(We=!1,n.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(We=!0);else return n.lanes=e.lanes,Gn(e,n,a)}return zs(e,n,t,r,a)}function Qp(e,n,t){var r=n.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(Zt,nn),nn|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,pe(Zt,nn),nn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,pe(Zt,nn),nn|=r}else i!==null?(r=i.baseLanes|t,n.memoizedState=null):r=t,pe(Zt,nn),nn|=r;return Be(e,n,a,t),n.child}function qp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function zs(e,n,t,r,a){var i=Xe(t)?kt:Oe.current;return i=sr(n,i),tr(n,a),t=Rl(e,n,t,r,i,a),r=Ol(),e!==null&&!We?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a,Gn(e,n,a)):(ge&&r&&Cl(n),n.flags|=1,Be(e,n,t,a),n.child)}function cd(e,n,t,r,a){if(Xe(t)){var i=!0;No(n)}else i=!1;if(tr(n,a),n.stateNode===null)po(e,n),Wp(n,t,r),As(n,t,r,a),r=!0;else if(e===null){var s=n.stateNode,c=n.memoizedProps;s.props=c;var d=s.context,u=t.contextType;typeof u=="object"&&u!==null?u=hn(u):(u=Xe(t)?kt:Oe.current,u=sr(n,u));var p=t.getDerivedStateFromProps,m=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==r||d!==u)&&rd(n,s,r,u),Zn=!1;var g=n.memoizedState;s.state=g,$o(n,r,s,a),d=n.memoizedState,c!==r||g!==d||Ye.current||Zn?(typeof p=="function"&&($s(n,t,p,r),d=n.memoizedState),(c=Zn||td(n,t,c,r,g,d,u))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=d),s.props=r,s.state=d,s.context=u,r=c):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{s=n.stateNode,Cp(e,n),c=n.memoizedProps,u=n.type===n.elementType?c:yn(n.type,c),s.props=u,m=n.pendingProps,g=s.context,d=t.contextType,typeof d=="object"&&d!==null?d=hn(d):(d=Xe(t)?kt:Oe.current,d=sr(n,d));var h=t.getDerivedStateFromProps;(p=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==m||g!==d)&&rd(n,s,r,d),Zn=!1,g=n.memoizedState,s.state=g,$o(n,r,s,a);var f=n.memoizedState;c!==m||g!==f||Ye.current||Zn?(typeof h=="function"&&($s(n,t,h,r),f=n.memoizedState),(u=Zn||td(n,t,u,r,g,f,d)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,f,d),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,f,d)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=f),s.props=r,s.state=f,s.context=d,r=u):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),r=!1)}return Ps(e,n,t,r,i,a)}function Ps(e,n,t,r,a,i){qp(e,n);var s=(n.flags&128)!==0;if(!r&&!s)return a&&Wc(n,t,!1),Gn(e,n,i);r=n.stateNode,nh.current=n;var c=s&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&s?(n.child=cr(n,e.child,null,i),n.child=cr(n,null,c,i)):Be(e,n,c,i),n.memoizedState=r.state,a&&Wc(n,t,!0),n.child}function em(e){var n=e.stateNode;n.pendingContext?Hc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Hc(e,n.context,!1),Vl(e,n.containerInfo)}function dd(e,n,t,r,a){return lr(),Ml(a),n.flags|=256,Be(e,n,t,r),n.child}var Ls={dehydrated:null,treeContext:null,retryLane:0};function Rs(e){return{baseLanes:e,cachePool:null,transitions:null}}function nm(e,n,t){var r=n.pendingProps,a=he.current,i=!1,s=(n.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(a&2)!==0),c?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),pe(he,a&1),e===null)return Es(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=r.children,e=r.fallback,i?(r=n.mode,i=n.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=di(s,r,0,null),e=It(e,r,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Rs(t),n.memoizedState=Ls,e):Bl(n,s));if(a=e.memoizedState,a!==null&&(c=a.dehydrated,c!==null))return th(e,n,s,r,c,a,t);if(i){i=r.fallback,s=n.mode,a=e.child,c=a.sibling;var d={mode:"hidden",children:r.children};return!(s&1)&&n.child!==a?(r=n.child,r.childLanes=0,r.pendingProps=d,n.deletions=null):(r=lt(a,d),r.subtreeFlags=a.subtreeFlags&14680064),c!==null?i=lt(c,i):(i=It(i,s,t,null),i.flags|=2),i.return=n,r.return=n,r.sibling=i,n.child=r,r=i,i=n.child,s=e.child.memoizedState,s=s===null?Rs(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~t,n.memoizedState=Ls,r}return i=e.child,e=i.sibling,r=lt(i,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Bl(e,n){return n=di({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Fa(e,n,t,r){return r!==null&&Ml(r),cr(n,e.child,null,t),e=Bl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function th(e,n,t,r,a,i,s){if(t)return n.flags&256?(n.flags&=-257,r=Gi(Error(G(422))),Fa(e,n,s,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=r.fallback,a=n.mode,r=di({mode:"visible",children:r.children},a,0,null),i=It(i,a,s,null),i.flags|=2,r.return=n,i.return=n,r.sibling=i,n.child=r,n.mode&1&&cr(n,e.child,null,s),n.child.memoizedState=Rs(s),n.memoizedState=Ls,i);if(!(n.mode&1))return Fa(e,n,s,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var c=r.dgst;return r=c,i=Error(G(419)),r=Gi(i,r,void 0),Fa(e,n,s,r)}if(c=(s&e.childLanes)!==0,We||c){if(r=Te,r!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|s)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Fn(e,a),kn(r,e,a,-1))}return Zl(),r=Gi(Error(G(421))),Fa(e,n,s,r)}return a.data==="$?"?(n.flags|=128,n.child=e.child,n=gh.bind(null,e),a._reactRetry=n,null):(e=i.treeContext,tn=at(a.nextSibling),rn=n,ge=!0,_n=null,e!==null&&(dn[un++]=Rn,dn[un++]=On,dn[un++]=jt,Rn=e.id,On=e.overflow,jt=n),n=Bl(n,r.children),n.flags|=4096,n)}function ud(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ds(e.return,n,t)}function Ui(e,n,t,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=a)}function tm(e,n,t){var r=n.pendingProps,a=r.revealOrder,i=r.tail;if(Be(e,n,r.children,t),r=he.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ud(e,t,n);else if(e.tag===19)ud(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(pe(he,r),!(n.mode&1))n.memoizedState=null;else switch(a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&Ao(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),Ui(n,!1,a,t,i);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&Ao(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}Ui(n,!0,t,null,i);break;case"together":Ui(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function po(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Gn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),St|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(G(153));if(n.child!==null){for(e=n.child,t=lt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=lt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function rh(e,n,t){switch(n.tag){case 3:em(n),lr();break;case 5:Np(n);break;case 1:Xe(n.type)&&No(n);break;case 4:Vl(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,a=n.memoizedProps.value;pe(Eo,r._currentValue),r._currentValue=a;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(pe(he,he.current&1),n.flags|=128,null):t&n.child.childLanes?nm(e,n,t):(pe(he,he.current&1),e=Gn(e,n,t),e!==null?e.sibling:null);pe(he,he.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return tm(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),pe(he,he.current),r)break;return null;case 22:case 23:return n.lanes=0,Qp(e,n,t)}return Gn(e,n,t)}var rm,Os,am,om;rm=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Os=function(){};am=function(e,n,t,r){var a=e.memoizedProps;if(a!==r){e=n.stateNode,bt(En.current);var i=null;switch(t){case"input":a=ls(e,a),r=ls(e,r),i=[];break;case"select":a=ye({},a,{value:void 0}),r=ye({},r,{value:void 0}),i=[];break;case"textarea":a=us(e,a),r=us(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=So)}ms(t,r);var s;t=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var c=a[u];for(s in c)c.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Yr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var d=r[u];if(c=a!=null?a[u]:void 0,r.hasOwnProperty(u)&&d!==c&&(d!=null||c!=null))if(u==="style")if(c){for(s in c)!c.hasOwnProperty(s)||d&&d.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in d)d.hasOwnProperty(s)&&c[s]!==d[s]&&(t||(t={}),t[s]=d[s])}else t||(i||(i=[]),i.push(u,t)),t=d;else u==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(i=i||[]).push(u,d)):u==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(u,""+d):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Yr.hasOwnProperty(u)?(d!=null&&u==="onScroll"&&me("scroll",e),i||c===d||(i=[])):(i=i||[]).push(u,d))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};om=function(e,n,t,r){t!==r&&(n.flags|=4)};function Tr(e,n){if(!ge)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Pe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function ah(e,n,t){var r=n.pendingProps;switch(Nl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(n),null;case 1:return Xe(n.type)&&Co(),Pe(n),null;case 3:return r=n.stateNode,dr(),fe(Ye),fe(Oe),Pl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ja(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,_n!==null&&(Ws(_n),_n=null))),Os(e,n),Pe(n),null;case 5:zl(n);var a=bt(la.current);if(t=n.type,e!==null&&n.stateNode!=null)am(e,n,t,r,a),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(G(166));return Pe(n),null}if(e=bt(En.current),Ja(n)){r=n.stateNode,t=n.type;var i=n.memoizedProps;switch(r[Mn]=n,r[ia]=i,e=(n.mode&1)!==0,t){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(a=0;a<Lr.length;a++)me(Lr[a],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":bc(r,i),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},me("invalid",r);break;case"textarea":Ic(r,i),me("invalid",r)}ms(t,i),a=null;for(var s in i)if(i.hasOwnProperty(s)){var c=i[s];s==="children"?typeof c=="string"?r.textContent!==c&&(i.suppressHydrationWarning!==!0&&Ka(r.textContent,c,e),a=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(i.suppressHydrationWarning!==!0&&Ka(r.textContent,c,e),a=["children",""+c]):Yr.hasOwnProperty(s)&&c!=null&&s==="onScroll"&&me("scroll",r)}switch(t){case"input":$a(r),_c(r,i,!0);break;case"textarea":$a(r),kc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=So)}r=a,n.updateQueue=r,r!==null&&(n.flags|=4)}else{s=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$u(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(t,{is:r.is}):(e=s.createElement(t),t==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,t),e[Mn]=n,e[ia]=r,rm(e,n,!1,!1),n.stateNode=e;e:{switch(s=fs(t,r),t){case"dialog":me("cancel",e),me("close",e),a=r;break;case"iframe":case"object":case"embed":me("load",e),a=r;break;case"video":case"audio":for(a=0;a<Lr.length;a++)me(Lr[a],e);a=r;break;case"source":me("error",e),a=r;break;case"img":case"image":case"link":me("error",e),me("load",e),a=r;break;case"details":me("toggle",e),a=r;break;case"input":bc(e,r),a=ls(e,r),me("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=ye({},r,{value:void 0}),me("invalid",e);break;case"textarea":Ic(e,r),a=us(e,r),me("invalid",e);break;default:a=r}ms(t,a),c=a;for(i in c)if(c.hasOwnProperty(i)){var d=c[i];i==="style"?zu(e,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Au(e,d)):i==="children"?typeof d=="string"?(t!=="textarea"||d!=="")&&Xr(e,d):typeof d=="number"&&Xr(e,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Yr.hasOwnProperty(i)?d!=null&&i==="onScroll"&&me("scroll",e):d!=null&&ml(e,i,d,s))}switch(t){case"input":$a(e),_c(e,r,!1);break;case"textarea":$a(e),kc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ct(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Qt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Qt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=So)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Pe(n),null;case 6:if(e&&n.stateNode!=null)om(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(G(166));if(t=bt(la.current),bt(En.current),Ja(n)){if(r=n.stateNode,t=n.memoizedProps,r[Mn]=n,(i=r.nodeValue!==t)&&(e=rn,e!==null))switch(e.tag){case 3:Ka(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ka(r.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Mn]=n,n.stateNode=r}return Pe(n),null;case 13:if(fe(he),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&tn!==null&&n.mode&1&&!(n.flags&128))kp(),lr(),n.flags|=98560,i=!1;else if(i=Ja(n),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(G(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(G(317));i[Mn]=n}else lr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Pe(n),i=!1}else _n!==null&&(Ws(_n),_n=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||he.current&1?Ce===0&&(Ce=3):Zl())),n.updateQueue!==null&&(n.flags|=4),Pe(n),null);case 4:return dr(),Os(e,n),e===null&&aa(n.stateNode.containerInfo),Pe(n),null;case 10:return Dl(n.type._context),Pe(n),null;case 17:return Xe(n.type)&&Co(),Pe(n),null;case 19:if(fe(he),i=n.memoizedState,i===null)return Pe(n),null;if(r=(n.flags&128)!==0,s=i.rendering,s===null)if(r)Tr(i,!1);else{if(Ce!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=Ao(e),s!==null){for(n.flags|=128,Tr(i,!1),r=s.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)i=t,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return pe(he,he.current&1|2),n.child}e=e.sibling}i.tail!==null&&_e()>pr&&(n.flags|=128,r=!0,Tr(i,!1),n.lanes=4194304)}else{if(!r)if(e=Ao(s),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Tr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ge)return Pe(n),null}else 2*_e()-i.renderingStartTime>pr&&t!==1073741824&&(n.flags|=128,r=!0,Tr(i,!1),n.lanes=4194304);i.isBackwards?(s.sibling=n.child,n.child=s):(t=i.last,t!==null?t.sibling=s:n.child=s,i.last=s)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=_e(),n.sibling=null,t=he.current,pe(he,r?t&1|2:t&1),n):(Pe(n),null);case 22:case 23:return Wl(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?nn&1073741824&&(Pe(n),n.subtreeFlags&6&&(n.flags|=8192)):Pe(n),null;case 24:return null;case 25:return null}throw Error(G(156,n.tag))}function oh(e,n){switch(Nl(n),n.tag){case 1:return Xe(n.type)&&Co(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return dr(),fe(Ye),fe(Oe),Pl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return zl(n),null;case 13:if(fe(he),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(G(340));lr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return fe(he),null;case 4:return dr(),null;case 10:return Dl(n.type._context),null;case 22:case 23:return Wl(),null;case 24:return null;default:return null}}var Ga=!1,Le=!1,ih=typeof WeakSet=="function"?WeakSet:Set,W=null;function Wt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){be(e,n,r)}else t.current=null}function Ks(e,n,t){try{t()}catch(r){be(e,n,r)}}var pd=!1;function sh(e,n){if(js=ko,e=dp(),Sl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var s=0,c=-1,d=-1,u=0,p=0,m=e,g=null;n:for(;;){for(var h;m!==t||a!==0&&m.nodeType!==3||(c=s+a),m!==i||r!==0&&m.nodeType!==3||(d=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(h=m.firstChild)!==null;)g=m,m=h;for(;;){if(m===e)break n;if(g===t&&++u===a&&(c=s),g===i&&++p===r&&(d=s),(h=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=h}t=c===-1||d===-1?null:{start:c,end:d}}else t=null}t=t||{start:0,end:0}}else t=null;for(ws={focusedElem:e,selectionRange:t},ko=!1,W=n;W!==null;)if(n=W,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,W=e;else for(;W!==null;){n=W;try{var f=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(f!==null){var y=f.memoizedProps,_=f.memoizedState,v=n.stateNode,x=v.getSnapshotBeforeUpdate(n.elementType===n.type?y:yn(n.type,y),_);v.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=n.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(G(163))}}catch(j){be(n,n.return,j)}if(e=n.sibling,e!==null){e.return=n.return,W=e;break}W=n.return}return f=pd,pd=!1,f}function Gr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Ks(n,t,i)}a=a.next}while(a!==r)}}function li(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Js(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function im(e){var n=e.alternate;n!==null&&(e.alternate=null,im(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Mn],delete n[ia],delete n[Ns],delete n[Bg],delete n[Fg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sm(e){return e.tag===5||e.tag===3||e.tag===4}function md(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bs(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=So));else if(r!==4&&(e=e.child,e!==null))for(Bs(e,n,t),e=e.sibling;e!==null;)Bs(e,n,t),e=e.sibling}function Fs(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fs(e,n,t),e=e.sibling;e!==null;)Fs(e,n,t),e=e.sibling}var De=null,bn=!1;function Hn(e,n,t){for(t=t.child;t!==null;)lm(e,n,t),t=t.sibling}function lm(e,n,t){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(ei,t)}catch{}switch(t.tag){case 5:Le||Wt(t,n);case 6:var r=De,a=bn;De=null,Hn(e,n,t),De=r,bn=a,De!==null&&(bn?(e=De,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):De.removeChild(t.stateNode));break;case 18:De!==null&&(bn?(e=De,t=t.stateNode,e.nodeType===8?Ri(e.parentNode,t):e.nodeType===1&&Ri(e,t),na(e)):Ri(De,t.stateNode));break;case 4:r=De,a=bn,De=t.stateNode.containerInfo,bn=!0,Hn(e,n,t),De=r,bn=a;break;case 0:case 11:case 14:case 15:if(!Le&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Ks(t,n,s),a=a.next}while(a!==r)}Hn(e,n,t);break;case 1:if(!Le&&(Wt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(c){be(t,n,c)}Hn(e,n,t);break;case 21:Hn(e,n,t);break;case 22:t.mode&1?(Le=(r=Le)||t.memoizedState!==null,Hn(e,n,t),Le=r):Hn(e,n,t);break;default:Hn(e,n,t)}}function fd(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new ih),n.forEach(function(r){var a=hh.bind(null,e,r);t.has(r)||(t.add(r),r.then(a,a))})}}function vn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r];try{var i=e,s=n,c=s;e:for(;c!==null;){switch(c.tag){case 5:De=c.stateNode,bn=!1;break e;case 3:De=c.stateNode.containerInfo,bn=!0;break e;case 4:De=c.stateNode.containerInfo,bn=!0;break e}c=c.return}if(De===null)throw Error(G(160));lm(i,s,a),De=null,bn=!1;var d=a.alternate;d!==null&&(d.return=null),a.return=null}catch(u){be(a,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)cm(n,e),n=n.sibling}function cm(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vn(n,e),Cn(e),r&4){try{Gr(3,e,e.return),li(3,e)}catch(y){be(e,e.return,y)}try{Gr(5,e,e.return)}catch(y){be(e,e.return,y)}}break;case 1:vn(n,e),Cn(e),r&512&&t!==null&&Wt(t,t.return);break;case 5:if(vn(n,e),Cn(e),r&512&&t!==null&&Wt(t,t.return),e.flags&32){var a=e.stateNode;try{Xr(a,"")}catch(y){be(e,e.return,y)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,s=t!==null?t.memoizedProps:i,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&i.type==="radio"&&i.name!=null&&Eu(a,i),fs(c,s);var u=fs(c,i);for(s=0;s<d.length;s+=2){var p=d[s],m=d[s+1];p==="style"?zu(a,m):p==="dangerouslySetInnerHTML"?Au(a,m):p==="children"?Xr(a,m):ml(a,p,m,u)}switch(c){case"input":cs(a,i);break;case"textarea":Du(a,i);break;case"select":var g=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?Qt(a,!!i.multiple,h,!1):g!==!!i.multiple&&(i.defaultValue!=null?Qt(a,!!i.multiple,i.defaultValue,!0):Qt(a,!!i.multiple,i.multiple?[]:"",!1))}a[ia]=i}catch(y){be(e,e.return,y)}}break;case 6:if(vn(n,e),Cn(e),r&4){if(e.stateNode===null)throw Error(G(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(y){be(e,e.return,y)}}break;case 3:if(vn(n,e),Cn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{na(n.containerInfo)}catch(y){be(e,e.return,y)}break;case 4:vn(n,e),Cn(e);break;case 13:vn(n,e),Cn(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(Ul=_e())),r&4&&fd(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(Le=(u=Le)||p,vn(n,e),Le=u):vn(n,e),Cn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(W=e,p=e.child;p!==null;){for(m=W=p;W!==null;){switch(g=W,h=g.child,g.tag){case 0:case 11:case 14:case 15:Gr(4,g,g.return);break;case 1:Wt(g,g.return);var f=g.stateNode;if(typeof f.componentWillUnmount=="function"){r=g,t=g.return;try{n=r,f.props=n.memoizedProps,f.state=n.memoizedState,f.componentWillUnmount()}catch(y){be(r,t,y)}}break;case 5:Wt(g,g.return);break;case 22:if(g.memoizedState!==null){hd(m);continue}}h!==null?(h.return=g,W=h):hd(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{a=m.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(c=m.stateNode,d=m.memoizedProps.style,s=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=Vu("display",s))}catch(y){be(e,e.return,y)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(y){be(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:vn(n,e),Cn(e),r&4&&fd(e);break;case 21:break;default:vn(n,e),Cn(e)}}function Cn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(sm(t)){var r=t;break e}t=t.return}throw Error(G(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Xr(a,""),r.flags&=-33);var i=md(e);Fs(e,i,a);break;case 3:case 4:var s=r.stateNode.containerInfo,c=md(e);Bs(e,c,s);break;default:throw Error(G(161))}}catch(d){be(e,e.return,d)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function lh(e,n,t){W=e,dm(e)}function dm(e,n,t){for(var r=(e.mode&1)!==0;W!==null;){var a=W,i=a.child;if(a.tag===22&&r){var s=a.memoizedState!==null||Ga;if(!s){var c=a.alternate,d=c!==null&&c.memoizedState!==null||Le;c=Ga;var u=Le;if(Ga=s,(Le=d)&&!u)for(W=a;W!==null;)s=W,d=s.child,s.tag===22&&s.memoizedState!==null?xd(a):d!==null?(d.return=s,W=d):xd(a);for(;i!==null;)W=i,dm(i),i=i.sibling;W=a,Ga=c,Le=u}gd(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,W=i):gd(e)}}function gd(e){for(;W!==null;){var n=W;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Le||li(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Le)if(t===null)r.componentDidMount();else{var a=n.elementType===n.type?t.memoizedProps:yn(n.type,t.memoizedProps);r.componentDidUpdate(a,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&qc(n,i,r);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}qc(n,s,t)}break;case 5:var c=n.stateNode;if(t===null&&n.flags&4){t=c;var d=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&t.focus();break;case"img":d.src&&(t.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&na(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(G(163))}Le||n.flags&512&&Js(n)}catch(g){be(n,n.return,g)}}if(n===e){W=null;break}if(t=n.sibling,t!==null){t.return=n.return,W=t;break}W=n.return}}function hd(e){for(;W!==null;){var n=W;if(n===e){W=null;break}var t=n.sibling;if(t!==null){t.return=n.return,W=t;break}W=n.return}}function xd(e){for(;W!==null;){var n=W;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{li(4,n)}catch(d){be(n,t,d)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var a=n.return;try{r.componentDidMount()}catch(d){be(n,a,d)}}var i=n.return;try{Js(n)}catch(d){be(n,i,d)}break;case 5:var s=n.return;try{Js(n)}catch(d){be(n,s,d)}}}catch(d){be(n,n.return,d)}if(n===e){W=null;break}var c=n.sibling;if(c!==null){c.return=n.return,W=c;break}W=n.return}}var ch=Math.ceil,Po=Un.ReactCurrentDispatcher,Fl=Un.ReactCurrentOwner,mn=Un.ReactCurrentBatchConfig,oe=0,Te=null,je=null,Ae=0,nn=0,Zt=pt(0),Ce=0,pa=null,St=0,ci=0,Gl=0,Ur=null,He=null,Ul=0,pr=1/0,Vn=null,Lo=!1,Gs=null,it=null,Ua=!1,et=null,Ro=0,Hr=0,Us=null,mo=-1,fo=0;function Fe(){return oe&6?_e():mo!==-1?mo:mo=_e()}function st(e){return e.mode&1?oe&2&&Ae!==0?Ae&-Ae:Ug.transition!==null?(fo===0&&(fo=Wu()),fo):(e=le,e!==0||(e=window.event,e=e===void 0?16:np(e.type)),e):1}function kn(e,n,t,r){if(50<Hr)throw Hr=0,Us=null,Error(G(185));Ia(e,t,r),(!(oe&2)||e!==Te)&&(e===Te&&(!(oe&2)&&(ci|=t),Ce===4&&Xn(e,Ae)),Qe(e,r),t===1&&oe===0&&!(n.mode&1)&&(pr=_e()+500,oi&&mt()))}function Qe(e,n){var t=e.callbackNode;Uf(e,n);var r=Io(e,e===Te?Ae:0);if(r===0)t!==null&&Sc(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Sc(t),n===1)e.tag===0?Gg(vd.bind(null,e)):bp(vd.bind(null,e)),Kg(function(){!(oe&6)&&mt()}),t=null;else{switch(Zu(r)){case 1:t=vl;break;case 4:t=Uu;break;case 16:t=_o;break;case 536870912:t=Hu;break;default:t=_o}t=vm(t,um.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function um(e,n){if(mo=-1,fo=0,oe&6)throw Error(G(327));var t=e.callbackNode;if(rr()&&e.callbackNode!==t)return null;var r=Io(e,e===Te?Ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Oo(e,r);else{n=r;var a=oe;oe|=2;var i=mm();(Te!==e||Ae!==n)&&(Vn=null,pr=_e()+500,_t(e,n));do try{ph();break}catch(c){pm(e,c)}while(!0);El(),Po.current=i,oe=a,je!==null?n=0:(Te=null,Ae=0,n=Ce)}if(n!==0){if(n===2&&(a=ys(e),a!==0&&(r=a,n=Hs(e,a))),n===1)throw t=pa,_t(e,0),Xn(e,r),Qe(e,_e()),t;if(n===6)Xn(e,r);else{if(a=e.current.alternate,!(r&30)&&!dh(a)&&(n=Oo(e,r),n===2&&(i=ys(e),i!==0&&(r=i,n=Hs(e,i))),n===1))throw t=pa,_t(e,0),Xn(e,r),Qe(e,_e()),t;switch(e.finishedWork=a,e.finishedLanes=r,n){case 0:case 1:throw Error(G(345));case 2:ht(e,He,Vn);break;case 3:if(Xn(e,r),(r&130023424)===r&&(n=Ul+500-_e(),10<n)){if(Io(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Fe(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Cs(ht.bind(null,e,He,Vn),n);break}ht(e,He,Vn);break;case 4:if(Xn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,a=-1;0<r;){var s=31-In(r);i=1<<s,s=n[s],s>a&&(a=s),r&=~i}if(r=a,r=_e()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ch(r/1960))-r,10<r){e.timeoutHandle=Cs(ht.bind(null,e,He,Vn),r);break}ht(e,He,Vn);break;case 5:ht(e,He,Vn);break;default:throw Error(G(329))}}}return Qe(e,_e()),e.callbackNode===t?um.bind(null,e):null}function Hs(e,n){var t=Ur;return e.current.memoizedState.isDehydrated&&(_t(e,n).flags|=256),e=Oo(e,n),e!==2&&(n=He,He=t,n!==null&&Ws(n)),e}function Ws(e){He===null?He=e:He.push.apply(He,e)}function dh(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var a=t[r],i=a.getSnapshot;a=a.value;try{if(!wn(i(),a))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xn(e,n){for(n&=~Gl,n&=~ci,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-In(n),r=1<<t;e[t]=-1,n&=~r}}function vd(e){if(oe&6)throw Error(G(327));rr();var n=Io(e,0);if(!(n&1))return Qe(e,_e()),null;var t=Oo(e,n);if(e.tag!==0&&t===2){var r=ys(e);r!==0&&(n=r,t=Hs(e,r))}if(t===1)throw t=pa,_t(e,0),Xn(e,n),Qe(e,_e()),t;if(t===6)throw Error(G(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ht(e,He,Vn),Qe(e,_e()),null}function Hl(e,n){var t=oe;oe|=1;try{return e(n)}finally{oe=t,oe===0&&(pr=_e()+500,oi&&mt())}}function Ct(e){et!==null&&et.tag===0&&!(oe&6)&&rr();var n=oe;oe|=1;var t=mn.transition,r=le;try{if(mn.transition=null,le=1,e)return e()}finally{le=r,mn.transition=t,oe=n,!(oe&6)&&mt()}}function Wl(){nn=Zt.current,fe(Zt)}function _t(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Og(t)),je!==null)for(t=je.return;t!==null;){var r=t;switch(Nl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Co();break;case 3:dr(),fe(Ye),fe(Oe),Pl();break;case 5:zl(r);break;case 4:dr();break;case 13:fe(he);break;case 19:fe(he);break;case 10:Dl(r.type._context);break;case 22:case 23:Wl()}t=t.return}if(Te=e,je=e=lt(e.current,null),Ae=nn=n,Ce=0,pa=null,Gl=ci=St=0,He=Ur=null,yt!==null){for(n=0;n<yt.length;n++)if(t=yt[n],r=t.interleaved,r!==null){t.interleaved=null;var a=r.next,i=t.pending;if(i!==null){var s=i.next;i.next=a,r.next=s}t.pending=r}yt=null}return e}function pm(e,n){do{var t=je;try{if(El(),co.current=zo,Vo){for(var r=ve.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Vo=!1}if(wt=0,Me=we=ve=null,Fr=!1,ca=0,Fl.current=null,t===null||t.return===null){Ce=1,pa=n,je=null;break}e:{var i=e,s=t.return,c=t,d=n;if(n=Ae,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var u=d,p=c,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var h=od(s);if(h!==null){h.flags&=-257,id(h,s,c,i,n),h.mode&1&&ad(i,u,n),n=h,d=u;var f=n.updateQueue;if(f===null){var y=new Set;y.add(d),n.updateQueue=y}else f.add(d);break e}else{if(!(n&1)){ad(i,u,n),Zl();break e}d=Error(G(426))}}else if(ge&&c.mode&1){var _=od(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),id(_,s,c,i,n),Ml(ur(d,c));break e}}i=d=ur(d,c),Ce!==4&&(Ce=2),Ur===null?Ur=[i]:Ur.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var v=Zp(i,d,n);Qc(i,v);break e;case 1:c=d;var x=i.type,b=i.stateNode;if(!(i.flags&128)&&(typeof x.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(it===null||!it.has(b)))){i.flags|=65536,n&=-n,i.lanes|=n;var j=Yp(i,c,n);Qc(i,j);break e}}i=i.return}while(i!==null)}gm(t)}catch(T){n=T,je===t&&t!==null&&(je=t=t.return);continue}break}while(!0)}function mm(){var e=Po.current;return Po.current=zo,e===null?zo:e}function Zl(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),Te===null||!(St&268435455)&&!(ci&268435455)||Xn(Te,Ae)}function Oo(e,n){var t=oe;oe|=2;var r=mm();(Te!==e||Ae!==n)&&(Vn=null,_t(e,n));do try{uh();break}catch(a){pm(e,a)}while(!0);if(El(),oe=t,Po.current=r,je!==null)throw Error(G(261));return Te=null,Ae=0,Ce}function uh(){for(;je!==null;)fm(je)}function ph(){for(;je!==null&&!Pf();)fm(je)}function fm(e){var n=xm(e.alternate,e,nn);e.memoizedProps=e.pendingProps,n===null?gm(e):je=n,Fl.current=null}function gm(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=oh(t,n),t!==null){t.flags&=32767,je=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ce=6,je=null;return}}else if(t=ah(t,n,nn),t!==null){je=t;return}if(n=n.sibling,n!==null){je=n;return}je=n=e}while(n!==null);Ce===0&&(Ce=5)}function ht(e,n,t){var r=le,a=mn.transition;try{mn.transition=null,le=1,mh(e,n,t,r)}finally{mn.transition=a,le=r}return null}function mh(e,n,t,r){do rr();while(et!==null);if(oe&6)throw Error(G(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(G(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Hf(e,i),e===Te&&(je=Te=null,Ae=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ua||(Ua=!0,vm(_o,function(){return rr(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=mn.transition,mn.transition=null;var s=le;le=1;var c=oe;oe|=4,Fl.current=null,sh(e,t),cm(t,e),$g(ws),ko=!!js,ws=js=null,e.current=t,lh(t),Lf(),oe=c,le=s,mn.transition=i}else e.current=t;if(Ua&&(Ua=!1,et=e,Ro=a),i=e.pendingLanes,i===0&&(it=null),Kf(t.stateNode),Qe(e,_e()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)a=n[t],r(a.value,{componentStack:a.stack,digest:a.digest});if(Lo)throw Lo=!1,e=Gs,Gs=null,e;return Ro&1&&e.tag!==0&&rr(),i=e.pendingLanes,i&1?e===Us?Hr++:(Hr=0,Us=e):Hr=0,mt(),null}function rr(){if(et!==null){var e=Zu(Ro),n=mn.transition,t=le;try{if(mn.transition=null,le=16>e?16:e,et===null)var r=!1;else{if(e=et,et=null,Ro=0,oe&6)throw Error(G(331));var a=oe;for(oe|=4,W=e.current;W!==null;){var i=W,s=i.child;if(W.flags&16){var c=i.deletions;if(c!==null){for(var d=0;d<c.length;d++){var u=c[d];for(W=u;W!==null;){var p=W;switch(p.tag){case 0:case 11:case 15:Gr(8,p,i)}var m=p.child;if(m!==null)m.return=p,W=m;else for(;W!==null;){p=W;var g=p.sibling,h=p.return;if(im(p),p===u){W=null;break}if(g!==null){g.return=h,W=g;break}W=h}}}var f=i.alternate;if(f!==null){var y=f.child;if(y!==null){f.child=null;do{var _=y.sibling;y.sibling=null,y=_}while(y!==null)}}W=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,W=s;else e:for(;W!==null;){if(i=W,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Gr(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,W=v;break e}W=i.return}}var x=e.current;for(W=x;W!==null;){s=W;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,W=b;else e:for(s=x;W!==null;){if(c=W,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:li(9,c)}}catch(T){be(c,c.return,T)}if(c===s){W=null;break e}var j=c.sibling;if(j!==null){j.return=c.return,W=j;break e}W=c.return}}if(oe=a,mt(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(ei,e)}catch{}r=!0}return r}finally{le=t,mn.transition=n}}return!1}function yd(e,n,t){n=ur(t,n),n=Zp(e,n,1),e=ot(e,n,1),n=Fe(),e!==null&&(Ia(e,1,n),Qe(e,n))}function be(e,n,t){if(e.tag===3)yd(e,e,t);else for(;n!==null;){if(n.tag===3){yd(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(it===null||!it.has(r))){e=ur(t,e),e=Yp(n,e,1),n=ot(n,e,1),e=Fe(),n!==null&&(Ia(n,1,e),Qe(n,e));break}}n=n.return}}function fh(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Fe(),e.pingedLanes|=e.suspendedLanes&t,Te===e&&(Ae&t)===t&&(Ce===4||Ce===3&&(Ae&130023424)===Ae&&500>_e()-Ul?_t(e,0):Gl|=t),Qe(e,n)}function hm(e,n){n===0&&(e.mode&1?(n=za,za<<=1,!(za&130023424)&&(za=4194304)):n=1);var t=Fe();e=Fn(e,n),e!==null&&(Ia(e,n,t),Qe(e,t))}function gh(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),hm(e,t)}function hh(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(G(314))}r!==null&&r.delete(n),hm(e,t)}var xm;xm=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ye.current)We=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return We=!1,rh(e,n,t);We=!!(e.flags&131072)}else We=!1,ge&&n.flags&1048576&&_p(n,To,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;po(e,n),e=n.pendingProps;var a=sr(n,Oe.current);tr(n,t),a=Rl(null,n,r,e,a,t);var i=Ol();return n.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Xe(r)?(i=!0,No(n)):i=!1,n.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Al(n),a.updater=si,n.stateNode=a,a._reactInternals=n,As(n,r,e,t),n=Ps(null,n,r,!0,i,t)):(n.tag=0,ge&&i&&Cl(n),Be(null,n,a,t),n=n.child),n;case 16:r=n.elementType;e:{switch(po(e,n),e=n.pendingProps,a=r._init,r=a(r._payload),n.type=r,a=n.tag=vh(r),e=yn(r,e),a){case 0:n=zs(null,n,r,e,t);break e;case 1:n=cd(null,n,r,e,t);break e;case 11:n=sd(null,n,r,e,t);break e;case 14:n=ld(null,n,r,yn(r.type,e),t);break e}throw Error(G(306,r,""))}return n;case 0:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:yn(r,a),zs(e,n,r,a,t);case 1:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:yn(r,a),cd(e,n,r,a,t);case 3:e:{if(em(n),e===null)throw Error(G(387));r=n.pendingProps,i=n.memoizedState,a=i.element,Cp(e,n),$o(n,r,null,t);var s=n.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){a=ur(Error(G(423)),n),n=dd(e,n,r,t,a);break e}else if(r!==a){a=ur(Error(G(424)),n),n=dd(e,n,r,t,a);break e}else for(tn=at(n.stateNode.containerInfo.firstChild),rn=n,ge=!0,_n=null,t=wp(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(lr(),r===a){n=Gn(e,n,t);break e}Be(e,n,r,t)}n=n.child}return n;case 5:return Np(n),e===null&&Es(n),r=n.type,a=n.pendingProps,i=e!==null?e.memoizedProps:null,s=a.children,Ss(r,a)?s=null:i!==null&&Ss(r,i)&&(n.flags|=32),qp(e,n),Be(e,n,s,t),n.child;case 6:return e===null&&Es(n),null;case 13:return nm(e,n,t);case 4:return Vl(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=cr(n,null,r,t):Be(e,n,r,t),n.child;case 11:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:yn(r,a),sd(e,n,r,a,t);case 7:return Be(e,n,n.pendingProps,t),n.child;case 8:return Be(e,n,n.pendingProps.children,t),n.child;case 12:return Be(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,a=n.pendingProps,i=n.memoizedProps,s=a.value,pe(Eo,r._currentValue),r._currentValue=s,i!==null)if(wn(i.value,s)){if(i.children===a.children&&!Ye.current){n=Gn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var c=i.dependencies;if(c!==null){s=i.child;for(var d=c.firstContext;d!==null;){if(d.context===r){if(i.tag===1){d=Kn(-1,t&-t),d.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?d.next=d:(d.next=p.next,p.next=d),u.pending=d}}i.lanes|=t,d=i.alternate,d!==null&&(d.lanes|=t),Ds(i.return,t,n),c.lanes|=t;break}d=d.next}}else if(i.tag===10)s=i.type===n.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(G(341));s.lanes|=t,c=s.alternate,c!==null&&(c.lanes|=t),Ds(s,t,n),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===n){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Be(e,n,a.children,t),n=n.child}return n;case 9:return a=n.type,r=n.pendingProps.children,tr(n,t),a=hn(a),r=r(a),n.flags|=1,Be(e,n,r,t),n.child;case 14:return r=n.type,a=yn(r,n.pendingProps),a=yn(r.type,a),ld(e,n,r,a,t);case 15:return Xp(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,a=n.pendingProps,a=n.elementType===r?a:yn(r,a),po(e,n),n.tag=1,Xe(r)?(e=!0,No(n)):e=!1,tr(n,t),Wp(n,r,a),As(n,r,a,t),Ps(null,n,r,!0,e,t);case 19:return tm(e,n,t);case 22:return Qp(e,n,t)}throw Error(G(156,n.tag))};function vm(e,n){return Gu(e,n)}function xh(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(e,n,t,r){return new xh(e,n,t,r)}function Yl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vh(e){if(typeof e=="function")return Yl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gl)return 11;if(e===hl)return 14}return 2}function lt(e,n){var t=e.alternate;return t===null?(t=pn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function go(e,n,t,r,a,i){var s=2;if(r=e,typeof e=="function")Yl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Rt:return It(t.children,a,i,n);case fl:s=8,a|=8;break;case as:return e=pn(12,t,n,a|2),e.elementType=as,e.lanes=i,e;case os:return e=pn(13,t,n,a),e.elementType=os,e.lanes=i,e;case is:return e=pn(19,t,n,a),e.elementType=is,e.lanes=i,e;case Nu:return di(t,a,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Su:s=10;break e;case Cu:s=9;break e;case gl:s=11;break e;case hl:s=14;break e;case Wn:s=16,r=null;break e}throw Error(G(130,e==null?e:typeof e,""))}return n=pn(s,t,n,a),n.elementType=e,n.type=r,n.lanes=i,n}function It(e,n,t,r){return e=pn(7,e,r,n),e.lanes=t,e}function di(e,n,t,r){return e=pn(22,e,r,n),e.elementType=Nu,e.lanes=t,e.stateNode={isHidden:!1},e}function Hi(e,n,t){return e=pn(6,e,null,n),e.lanes=t,e}function Wi(e,n,t){return n=pn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function yh(e,n,t,r,a){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ni(0),this.expirationTimes=Ni(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ni(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Xl(e,n,t,r,a,i,s,c,d){return e=new yh(e,n,t,c,d),n===1?(n=1,i===!0&&(n|=8)):n=0,i=pn(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Al(i),e}function bh(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Lt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function ym(e){if(!e)return dt;e=e._reactInternals;e:{if($t(e)!==e||e.tag!==1)throw Error(G(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Xe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(G(171))}if(e.tag===1){var t=e.type;if(Xe(t))return yp(e,t,n)}return n}function bm(e,n,t,r,a,i,s,c,d){return e=Xl(t,r,!0,e,a,i,s,c,d),e.context=ym(null),t=e.current,r=Fe(),a=st(t),i=Kn(r,a),i.callback=n??null,ot(t,i,a),e.current.lanes=a,Ia(e,a,r),Qe(e,r),e}function ui(e,n,t,r){var a=n.current,i=Fe(),s=st(a);return t=ym(t),n.context===null?n.context=t:n.pendingContext=t,n=Kn(i,s),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=ot(a,n,s),e!==null&&(kn(e,a,s,i),lo(e,a,s)),s}function Ko(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ql(e,n){bd(e,n),(e=e.alternate)&&bd(e,n)}function _h(){return null}var _m=typeof reportError=="function"?reportError:function(e){console.error(e)};function ql(e){this._internalRoot=e}pi.prototype.render=ql.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(G(409));ui(e,n,null,null)};pi.prototype.unmount=ql.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ct(function(){ui(null,e,null,null)}),n[Bn]=null}};function pi(e){this._internalRoot=e}pi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Qu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Yn.length&&n!==0&&n<Yn[t].priority;t++);Yn.splice(t,0,e),t===0&&ep(e)}};function ec(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _d(){}function Ih(e,n,t,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var u=Ko(s);i.call(u)}}var s=bm(n,r,e,0,null,!1,!1,"",_d);return e._reactRootContainer=s,e[Bn]=s.current,aa(e.nodeType===8?e.parentNode:e),Ct(),s}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var c=r;r=function(){var u=Ko(d);c.call(u)}}var d=Xl(e,0,!1,null,null,!1,!1,"",_d);return e._reactRootContainer=d,e[Bn]=d.current,aa(e.nodeType===8?e.parentNode:e),Ct(function(){ui(n,d,t,r)}),d}function fi(e,n,t,r,a){var i=t._reactRootContainer;if(i){var s=i;if(typeof a=="function"){var c=a;a=function(){var d=Ko(s);c.call(d)}}ui(n,s,e,a)}else s=Ih(t,n,e,a,r);return Ko(s)}Yu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Pr(n.pendingLanes);t!==0&&(yl(n,t|1),Qe(n,_e()),!(oe&6)&&(pr=_e()+500,mt()))}break;case 13:Ct(function(){var r=Fn(e,1);if(r!==null){var a=Fe();kn(r,e,1,a)}}),Ql(e,1)}};bl=function(e){if(e.tag===13){var n=Fn(e,134217728);if(n!==null){var t=Fe();kn(n,e,134217728,t)}Ql(e,134217728)}};Xu=function(e){if(e.tag===13){var n=st(e),t=Fn(e,n);if(t!==null){var r=Fe();kn(t,e,n,r)}Ql(e,n)}};Qu=function(){return le};qu=function(e,n){var t=le;try{return le=e,n()}finally{le=t}};hs=function(e,n,t){switch(n){case"input":if(cs(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var a=ai(r);if(!a)throw Error(G(90));Tu(r),cs(r,a)}}}break;case"textarea":Du(e,t);break;case"select":n=t.value,n!=null&&Qt(e,!!t.multiple,n,!1)}};Ru=Hl;Ou=Ct;var kh={usingClientEntryPoint:!1,Events:[ja,Bt,ai,Pu,Lu,Hl]},Er={findFiberByHostInstance:vt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jh={bundleType:Er.bundleType,version:Er.version,rendererPackageName:Er.rendererPackageName,rendererConfig:Er.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Un.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bu(e),e===null?null:e.stateNode},findFiberByHostInstance:Er.findFiberByHostInstance||_h,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ha.isDisabled&&Ha.supportsFiber)try{ei=Ha.inject(jh),Tn=Ha}catch{}}on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kh;on.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ec(n))throw Error(G(200));return bh(e,n,null,t)};on.createRoot=function(e,n){if(!ec(e))throw Error(G(299));var t=!1,r="",a=_m;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),n=Xl(e,1,!1,null,null,t,!1,r,a),e[Bn]=n.current,aa(e.nodeType===8?e.parentNode:e),new ql(n)};on.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(G(188)):(e=Object.keys(e).join(","),Error(G(268,e)));return e=Bu(n),e=e===null?null:e.stateNode,e};on.flushSync=function(e){return Ct(e)};on.hydrate=function(e,n,t){if(!mi(n))throw Error(G(200));return fi(null,e,n,!0,t)};on.hydrateRoot=function(e,n,t){if(!ec(e))throw Error(G(405));var r=t!=null&&t.hydratedSources||null,a=!1,i="",s=_m;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=bm(n,null,e,1,t??null,a,!1,i,s),e[Bn]=n.current,aa(e),r)for(e=0;e<r.length;e++)t=r[e],a=t._getVersion,a=a(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a);return new pi(n)};on.render=function(e,n,t){if(!mi(n))throw Error(G(200));return fi(null,e,n,!1,t)};on.unmountComponentAtNode=function(e){if(!mi(e))throw Error(G(40));return e._reactRootContainer?(Ct(function(){fi(null,null,e,!1,function(){e._reactRootContainer=null,e[Bn]=null})}),!0):!1};on.unstable_batchedUpdates=Hl;on.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!mi(t))throw Error(G(200));if(e==null||e._reactInternals===void 0)throw Error(G(38));return fi(e,n,t,!1,r)};on.version="18.3.1-next-f1338f8080-20240426";function Im(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Im)}catch(e){console.error(e)}}Im(),Iu.exports=on;var Sa=Iu.exports,Id=Sa;ts.createRoot=Id.createRoot,ts.hydrateRoot=Id.hydrateRoot;const ar=["player1","player2","player3","player4","player5","player6","player7","player8"];function wh(e,n){return e.players[n]}function Sh(e,n,t){return{...e,players:{...e.players,[n]:t}}}function Ch(e,n){const t=e.teams[n];return e.playerIds.filter(r=>r!==n&&e.teams[r]!==t&&!e.players[r].isDefeated)}function $e(e){return`P${e.replace("player","")}`}const Nh=[{id:"ag-1",unitDeckId:"AG",nameJa:"ランス",nameCn:"长枪",actionType:"melee",frontImageId:"cards/ag/ag-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"ag-2",unitDeckId:"AG",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ag/ag-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ag-3",unitDeckId:"AG",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ag/ag-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ag-4",unitDeckId:"AG",nameJa:"スモールレーザー",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/ag/ag-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2,isEnergyWeapon:!0},{id:"ag-5",unitDeckId:"AG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ag/ag-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"ag-6",unitDeckId:"AG",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ag/ag-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-7",unitDeckId:"AG",nameJa:"ランス",nameCn:"长枪",actionType:"melee",frontImageId:"cards/ag/ag-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"ag-8",unitDeckId:"AG",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ag/ag-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-9",unitDeckId:"AG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/ag/ag-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"ag-10",unitDeckId:"AG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"ag-11",unitDeckId:"AG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/ag/ag-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"ag-12",unitDeckId:"AG",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ag/ag-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"ag-13",unitDeckId:"AG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"ag-14",unitDeckId:"AG",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ag/ag-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-15",unitDeckId:"AG",nameJa:"バーニア",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/ag/ag-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ag-16",unitDeckId:"AG",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/ag/ag-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ag-17",unitDeckId:"AG",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/ag/ag-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ag-18",unitDeckId:"AG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"ag-19",unitDeckId:"AG",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ag/ag-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-20",unitDeckId:"AG",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ag/ag-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-21",unitDeckId:"AG",nameJa:"バーニア",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/ag/ag-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"}],Mh=[{id:"ar-1",unitDeckId:"AR",nameJa:"シールド",nameCn:"护盾",actionType:"armor",frontImageId:"cards/ar/ar-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止4点射击伤害。该卡在准备区时，可以将其破坏并防止4点任意伤害。"},{id:"ar-2",unitDeckId:"AR",nameJa:"アンカー",nameCn:"长锚",actionType:"ranged",frontImageId:"cards/ar/ar-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:1,rangeMax:3,damage:void 0,effectText:"射击前可以改变机甲的朝向。命中后，使攻击目标强制移动到自机面前，期间目标朝向不变。"},{id:"ar-3",unitDeckId:"AR",nameJa:"陸上機雷",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/ar/ar-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"在自机周围8格不重叠地设置机雷指示物和替身雷各2个。在各个时机结束时，检查是否有机甲位于指示物所在格。若有，将指示物翻开展示，如果是机雷的话对所在格中的机甲造成伤害，然后将指示物弃掉。"},{id:"ar-4",unitDeckId:"AR",nameJa:"陸上機雷",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/ar/ar-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"在自机周围8格不重叠地设置机雷指示物和替身雷各2个。在各个时机结束时，检查是否有机甲位于指示物所在格。若有，将指示物翻开展示，如果是机雷的话对所在格中的机甲造成伤害，然后将指示物弃掉。"},{id:"ar-5",unitDeckId:"AR",nameJa:"メイス",nameCn:"狼牙棒",actionType:"melee",frontImageId:"cards/ar/ar-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ar-6",unitDeckId:"AR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ar/ar-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ar-7",unitDeckId:"AR",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"ar-8",unitDeckId:"AR",nameJa:"移動６",nameCn:"移动6",actionType:"movement",frontImageId:"cards/ar/ar-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:6,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-9",unitDeckId:"AR",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ar/ar-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"ar-10",unitDeckId:"AR",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/ar/ar-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ar-11",unitDeckId:"AR",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"ar-12",unitDeckId:"AR",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/ar/ar-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ar-13",unitDeckId:"AR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ar/ar-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ar-14",unitDeckId:"AR",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"ar-15",unitDeckId:"AR",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ar/ar-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-16",unitDeckId:"AR",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ar/ar-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-17",unitDeckId:"AR",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ar/ar-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-18",unitDeckId:"AR",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ar/ar-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-19",unitDeckId:"AR",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ar/ar-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-20",unitDeckId:"AR",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ar/ar-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"}],Th=[{id:"bg-1",unitDeckId:"BG",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4,hasBombIcon:!0},{id:"bg-2",unitDeckId:"BG",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4,hasBombIcon:!0},{id:"bg-3",unitDeckId:"BG",nameJa:"ミドルレーザ",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/bg/bg-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3},{id:"bg-4",unitDeckId:"BG",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4,hasBombIcon:!0},{id:"bg-5",unitDeckId:"BG",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/bg/bg-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"bg-6",unitDeckId:"BG",nameJa:"スモールレーザ",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/bg/bg-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2},{id:"bg-7",unitDeckId:"BG",nameJa:"スナイパーライフル",nameCn:"狙击步枪",actionType:"ranged",frontImageId:"cards/bg/bg-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3,hasBombIcon:!0},{id:"bg-8",unitDeckId:"BG",nameJa:"スナイパーライフル",nameCn:"狙击步枪",actionType:"ranged",frontImageId:"cards/bg/bg-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3,hasBombIcon:!0},{id:"bg-9",unitDeckId:"BG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/bg/bg-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"bg-10",unitDeckId:"BG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/bg/bg-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"bg-11",unitDeckId:"BG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/bg/bg-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"bg-12",unitDeckId:"BG",nameJa:"スモールレーザ",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/bg/bg-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2},{id:"bg-13",unitDeckId:"BG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/bg/bg-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"bg-14",unitDeckId:"BG",nameJa:"ミドルレーザ",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/bg/bg-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3},{id:"bg-15",unitDeckId:"BG",nameJa:"スナイパーライフル",nameCn:"狙击步枪",actionType:"ranged",frontImageId:"cards/bg/bg-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3,hasBombIcon:!0},{id:"bg-16",unitDeckId:"BG",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/bg/bg-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"bg-17",unitDeckId:"BG",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/bg/bg-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"bg-18",unitDeckId:"BG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/bg/bg-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"bg-19",unitDeckId:"BG",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/bg/bg-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg-20",unitDeckId:"BG",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/bg/bg-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg-21",unitDeckId:"BG",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/bg/bg-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg-22",unitDeckId:"BG",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/bg/bg-22-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"bg-23",unitDeckId:"BG",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/bg/bg-23-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"}],Eh=[{id:"ho-1",unitDeckId:"HO",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ho/ho-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-2",unitDeckId:"HO",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ho/ho-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-3",unitDeckId:"HO",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ho/ho-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-4",unitDeckId:"HO",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ho/ho-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-5",unitDeckId:"HO",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ho/ho-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"ho-6",unitDeckId:"HO",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ho/ho-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"ho-7",unitDeckId:"HO",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ho/ho-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ho-8",unitDeckId:"HO",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ho/ho-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-9",unitDeckId:"HO",nameJa:"移動６",nameCn:"移动6",actionType:"movement",frontImageId:"cards/ho/ho-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:6,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-10",unitDeckId:"HO",nameJa:"移動７",nameCn:"移动7",actionType:"movement",frontImageId:"cards/ho/ho-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:7,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-11",unitDeckId:"HO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ho/ho-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ho-12",unitDeckId:"HO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ho/ho-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ho-13",unitDeckId:"HO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/ho/ho-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"ho-14",unitDeckId:"HO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/ho/ho-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"ho-15",unitDeckId:"HO",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ho/ho-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ho-16",unitDeckId:"HO",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/ho/ho-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"ho-17",unitDeckId:"HO",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/ho/ho-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"}],Dh=[{id:"hy-1",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"hy-2",unitDeckId:"HY",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-3",unitDeckId:"HY",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-4",unitDeckId:"HY",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-5",unitDeckId:"HY",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-6",unitDeckId:"HY",nameJa:"ガトリングガン",nameCn:"加特林",actionType:"ranged",frontImageId:"cards/hy/hy-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:5,damage:3,hasBombIcon:!0},{id:"hy-7",unitDeckId:"HY",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-8",unitDeckId:"HY",nameJa:"ガトリングガン",nameCn:"加特林",actionType:"ranged",frontImageId:"cards/hy/hy-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:5,damage:3,hasBombIcon:!0},{id:"hy-9",unitDeckId:"HY",nameJa:"ホイール",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/hy/hy-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"hy-10",unitDeckId:"HY",nameJa:"ホイール",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/hy/hy-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"hy-11",unitDeckId:"HY",nameJa:"スパイク",nameCn:"长钉",actionType:"charge",frontImageId:"cards/hy/hy-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"不进行突击移动，选择自机正面的机甲为攻击目标。对对方造成自机突击伤害+1的近战伤害。对自机造成对方被突击伤害-1的近战伤害。"},{id:"hy-12",unitDeckId:"HY",nameJa:"シールド",nameCn:"护盾",actionType:"armor",frontImageId:"cards/hy/hy-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止4点射击伤害。该卡在准备区时，可以将其破坏并防止4点任意伤害。"},{id:"hy-13",unitDeckId:"HY",nameJa:"シールド",nameCn:"护盾",actionType:"armor",frontImageId:"cards/hy/hy-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止4点射击伤害。该卡在准备区时，可以将其破坏并防止4点任意伤害。"},{id:"hy-14",unitDeckId:"HY",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/hy/hy-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"hy-15",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"hy-16",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"hy-17",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"hy-18",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"hy-19",unitDeckId:"HY",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/hy/hy-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"hy-20",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"hy-21",unitDeckId:"HY",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/hy/hy-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"hy-22",unitDeckId:"HY",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/hy/hy-22-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"hy-23",unitDeckId:"HY",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/hy/hy-23-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"hy-24",unitDeckId:"HY",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-24-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0}],$h=[{id:"lg-1",unitDeckId:"LG",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/lg/lg-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-2",unitDeckId:"LG",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/lg/lg-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-3",unitDeckId:"LG",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/lg/lg-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-4",unitDeckId:"LG",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/lg/lg-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-5",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"lg-6",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"lg-7",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"lg-8",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"lg-9",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"lg-10",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"lg-11",unitDeckId:"LG",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/lg/lg-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"lg-12",unitDeckId:"LG",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/lg/lg-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"lg-13",unitDeckId:"LG",nameJa:"スパイク",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/lg/lg-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"lg-14",unitDeckId:"LG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/lg/lg-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"lg-15",unitDeckId:"LG",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/lg/lg-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"lg-16",unitDeckId:"LG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/lg/lg-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"lg-17",unitDeckId:"LG",nameJa:"パイルバンカー",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/lg/lg-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"lg-18",unitDeckId:"LG",nameJa:"パイルバンカー",nameCn:"长钉",actionType:"charge",frontImageId:"cards/lg/lg-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"不进行突击移动，选择自机正面的机甲为攻击目标。对对方造成自机突击伤害+1的近战伤害。对自机造成对方被突击伤害-1的近战伤害。"},{id:"lg-19",unitDeckId:"LG",nameJa:"クロー",nameCn:"爪",actionType:"melee",frontImageId:"cards/lg/lg-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:2,effectText:"（结算伤害前）如果攻击目标的手牌、辅助区、准备区中有类别包括“装甲”的卡牌，选择其中两张破坏。"},{id:"lg-20",unitDeckId:"LG",nameJa:"クロー",nameCn:"爪",actionType:"melee",frontImageId:"cards/lg/lg-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:2,effectText:"（结算伤害前）如果攻击目标的手牌、辅助区、准备区中有类别包括“装甲”的卡牌，选择其中两张破坏。"},{id:"lg-21",unitDeckId:"LG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/lg/lg-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"lg-22",unitDeckId:"LG",nameJa:"ホイール",nameCn:"滑轮",actionType:"auxiliary",frontImageId:"cards/lg/lg-22-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:○、近战:×。使用后移动力+2。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"lg-23",unitDeckId:"LG",nameJa:"ホイール",nameCn:"滑轮",actionType:"auxiliary",frontImageId:"cards/lg/lg-23-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:○、近战:×。使用后移动力+2。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"}],Ah=[{id:"lo-1",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-2",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-3",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-4",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-5",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-6",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-7",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-8",unitDeckId:"LO",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/lo/lo-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"lo-9",unitDeckId:"LO",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/lo/lo-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"lo-10",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-11",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-12",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-13",unitDeckId:"LO",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/lo/lo-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-14",unitDeckId:"LO",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/lo/lo-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-15",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-16",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-17",unitDeckId:"LO",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/lo/lo-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-18",unitDeckId:"LO",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/lo/lo-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-19",unitDeckId:"LO",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/lo/lo-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-20",unitDeckId:"LO",nameJa:"スモールレーザー",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/lo/lo-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2,isEnergyWeapon:!0}],Vh=[{id:"tr-1",unitDeckId:"TR",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/tr/tr-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-2",unitDeckId:"TR",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/tr/tr-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-3",unitDeckId:"TR",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/tr/tr-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-4",unitDeckId:"TR",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/tr/tr-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-5",unitDeckId:"TR",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/tr/tr-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-6",unitDeckId:"TR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/tr/tr-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"tr-7",unitDeckId:"TR",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/tr/tr-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"tr-8",unitDeckId:"TR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/tr/tr-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"tr-9",unitDeckId:"TR",nameJa:"移動６",nameCn:"移动6",actionType:"movement",frontImageId:"cards/tr/tr-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:6,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-10",unitDeckId:"TR",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/tr/tr-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"tr-11",unitDeckId:"TR",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/tr/tr-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"tr-12",unitDeckId:"TR",nameJa:"アクス",nameCn:"斧头",actionType:"melee",frontImageId:"cards/tr/tr-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"tr-13",unitDeckId:"TR",nameJa:"アクス",nameCn:"斧头",actionType:"melee",frontImageId:"cards/tr/tr-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"tr-14",unitDeckId:"TR",nameJa:"パイルバンカー",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/tr/tr-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"tr-15",unitDeckId:"TR",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/tr/tr-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"tr-16",unitDeckId:"TR",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/tr/tr-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"tr-17",unitDeckId:"TR",nameJa:"パイルバンカー",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/tr/tr-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"tr-18",unitDeckId:"TR",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/tr/tr-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"tr-19",unitDeckId:"TR",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/tr/tr-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0}],zh=[{id:"zb-1",unitDeckId:"ZB",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ag/ag-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-2",unitDeckId:"ZB",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ag/ag-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-3",unitDeckId:"ZB",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ag/ag-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-4",unitDeckId:"ZB",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ag/ag-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-5",unitDeckId:"ZB",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ag/ag-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-6",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-7",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-8",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-9",unitDeckId:"ZB",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ag/ag-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-10",unitDeckId:"ZB",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ag/ag-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-11",unitDeckId:"ZB",nameJa:"ムーブセンサー",nameCn:"移动感应器",actionType:"auxiliary",frontImageId:"cards/ho/ho-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-12",unitDeckId:"ZB",nameJa:"ムーブセンサー",nameCn:"移动感应器",actionType:"auxiliary",frontImageId:"cards/ho/ho-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-13",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-14",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-15",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-16",unitDeckId:"ZB",nameJa:"ラージレーザー",nameCn:"大口径激光",actionType:"ranged",frontImageId:"cards/bg/bg-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"zb-17",unitDeckId:"ZB",nameJa:"ブレード",nameCn:"剑",actionType:"melee",frontImageId:"cards/zb/zb-17-front.png",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"zb-18",unitDeckId:"ZB",nameJa:"バルカン",nameCn:"火神炮",actionType:"ranged",frontImageId:"cards/zb/zb-18-front.png",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:2,damage:2},{id:"zb-19",unitDeckId:"ZB",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ag/ag-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-20",unitDeckId:"ZB",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ag/ag-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-21",unitDeckId:"ZB",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4},{id:"zb-22",unitDeckId:"ZB",nameJa:"ラージレーザー",nameCn:"大口径激光",actionType:"ranged",frontImageId:"cards/bg/bg-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"zb-23",unitDeckId:"ZB",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4}],Ph=[{id:"ag_plus-1",unitDeckId:"AG+",nameJa:"コルセスカ",nameCn:"长柄三叉矛",actionType:"melee",frontImageId:"cards/ag_plus/ag_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ag_plus-2",unitDeckId:"AG+",nameJa:"コルセスカ",nameCn:"长柄三叉矛",actionType:"melee",frontImageId:"cards/ag_plus/ag_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ag_plus-3",unitDeckId:"AG+",nameJa:"ネット",nameCn:"网",actionType:"ranged",frontImageId:"cards/ag_plus/ag_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:5,damage:void 0},{id:"ag_plus-4",unitDeckId:"AG+",nameJa:"ボーラ",nameCn:"投石索",actionType:"ranged",frontImageId:"cards/ag_plus/ag_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:4,damage:void 0},{id:"ag_plus-5",unitDeckId:"AG+",nameJa:"バルカン",nameCn:"火神炮",actionType:"ranged",frontImageId:"cards/ag_plus/ag_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:2,damage:2}],Lh=[{id:"ar_plus-1",unitDeckId:"AR+",nameJa:"ウォーハンマー",nameCn:"战锤",actionType:"melee",frontImageId:"cards/ar_plus/ar_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"ar_plus-2",unitDeckId:"AR+",nameJa:"強化機雷",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/ar_plus/ar_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,hasBombIcon:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"ar_plus-3",unitDeckId:"AR+",nameJa:"ロングアンカー",nameCn:"长锚",actionType:"ranged",frontImageId:"cards/ar_plus/ar_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:4,damage:1},{id:"ar_plus-4",unitDeckId:"AR+",nameJa:"強化機雷",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/ar_plus/ar_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,hasBombIcon:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5}],Rh=[{id:"bg_plus-1",unitDeckId:"BG+",nameJa:"自爆装置",nameCn:"自爆装置",actionType:"mine",frontImageId:"cards/bg_plus/bg_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,hasBombIcon:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg_plus-2",unitDeckId:"BG+",nameJa:"大口径ロケット砲",nameCn:"大口径火箭炮",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:5},{id:"bg_plus-3",unitDeckId:"BG+",nameJa:"大口径ロケット砲",nameCn:"大口径火箭炮",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:5},{id:"bg_plus-4",unitDeckId:"BG+",nameJa:"高品質ライフル",nameCn:"高品质步枪",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3},{id:"bg_plus-5",unitDeckId:"BG+",nameJa:"スモークミサイル",nameCn:"烟雾导弹",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:5,damage:void 0}],Oh=[{id:"ho_plus-1",unitDeckId:"HO+",nameJa:"スタンウィップ",nameCn:"电击鞭",actionType:"melee",frontImageId:"cards/ho_plus/ho_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:1},{id:"ho_plus-2",unitDeckId:"HO+",nameJa:"チェーンブレード",nameCn:"链锯剑",actionType:"melee",frontImageId:"cards/ho_plus/ho_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ho_plus-3",unitDeckId:"HO+",nameJa:"高品質ロケット砲",nameCn:"高品质火箭炮",actionType:"ranged",frontImageId:"cards/ho_plus/ho_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4},{id:"ho_plus-4",unitDeckId:"HO+",nameJa:"火炎放射器",nameCn:"火焰喷射器",actionType:"ranged",frontImageId:"cards/ho_plus/ho_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2}],Kh=[{id:"hy_plus-1",unitDeckId:"HY+",nameJa:"ショットガン",nameCn:"散弹枪",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:3,damage:4},{id:"hy_plus-2",unitDeckId:"HY+",nameJa:"ショットガン",nameCn:"散弹枪",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:3,damage:4},{id:"hy_plus-3",unitDeckId:"HY+",nameJa:"ガトリングカノン",nameCn:"加特林炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:4},{id:"hy_plus-4",unitDeckId:"HY+",nameJa:"ガトリングカノン",nameCn:"加特林炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:4},{id:"hy_plus-5",unitDeckId:"HY+",nameJa:"ガトリングカノン",nameCn:"加特林炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:4},{id:"hy_plus-6",unitDeckId:"HY+",nameJa:"ミサイルシールド",nameCn:"导弹盾",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3},{id:"hy_plus-7",unitDeckId:"HY+",nameJa:"高品質ロケット砲",nameCn:"高品质火箭炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4},{id:"hy_plus-8",unitDeckId:"HY+",nameJa:"ミサイルシールド",nameCn:"导弹盾",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3}],Jh=[{id:"lg_plus-1",unitDeckId:"LG+",nameJa:"ヒートクロー",nameCn:"热力爪",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-2",unitDeckId:"LG+",nameJa:"グレネードランチャー",nameCn:"榴弹发射器",actionType:"ranged",frontImageId:"cards/lg_plus/lg_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:5,damage:3},{id:"lg_plus-3",unitDeckId:"LG+",nameJa:"グレネードランチャー",nameCn:"榴弹发射器",actionType:"ranged",frontImageId:"cards/lg_plus/lg_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:5,damage:3},{id:"lg_plus-4",unitDeckId:"LG+",nameJa:"キャタピラ",nameCn:"履带",actionType:"auxiliary",frontImageId:"cards/lg_plus/lg_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-5",unitDeckId:"LG+",nameJa:"リボルバンカー",nameCn:"左轮打桩机",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6},{id:"lg_plus-6",unitDeckId:"LG+",nameJa:"キャタピラ",nameCn:"履带",actionType:"auxiliary",frontImageId:"cards/lg_plus/lg_plus-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-7",unitDeckId:"LG+",nameJa:"ヒートクロー",nameCn:"热力爪",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-8",unitDeckId:"LG+",nameJa:"リボルバンカー",nameCn:"左轮打桩机",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6}],Bh=[{id:"lo_plus-1",unitDeckId:"LO+",nameJa:"防水膜",nameCn:"防水膜",actionType:"auxiliary",frontImageId:"cards/lo_plus/lo_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo_plus-2",unitDeckId:"LO+",nameJa:"追加装甲",nameCn:"附加装甲",actionType:"armor",frontImageId:"cards/lo_plus/lo_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo_plus-3",unitDeckId:"LO+",nameJa:"パルスレーザー",nameCn:"脉冲激光",actionType:"ranged",frontImageId:"cards/lo_plus/lo_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:2,isEnergyWeapon:!0},{id:"lo_plus-4",unitDeckId:"LO+",nameJa:"サウンドストーム",nameCn:"声波风暴",actionType:"melee",frontImageId:"cards/lo_plus/lo_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0}],Fh=[{id:"tr_plus-1",unitDeckId:"TR+",nameJa:"サウンドウェーブ",nameCn:"声波",actionType:"melee",frontImageId:"cards/tr_plus/tr_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr_plus-2",unitDeckId:"TR+",nameJa:"バルディッシュ",nameCn:"长柄斧",actionType:"melee",frontImageId:"cards/tr_plus/tr_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"tr_plus-3",unitDeckId:"TR+",nameJa:"バルディッシュ",nameCn:"长柄斧",actionType:"melee",frontImageId:"cards/tr_plus/tr_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"tr_plus-4",unitDeckId:"TR+",nameJa:"高圧縮レーザー",nameCn:"高压缩激光",actionType:"ranged",frontImageId:"cards/tr_plus/tr_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:4,isEnergyWeapon:!0},{id:"tr_plus-5",unitDeckId:"TR+",nameJa:"高圧縮レーザー",nameCn:"高压缩激光",actionType:"ranged",frontImageId:"cards/tr_plus/tr_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:4,isEnergyWeapon:!0}],Gh=[{id:"zb_plus-1",unitDeckId:"ZB+",nameJa:"広射程ミサイル",nameCn:"广射程导弹",actionType:"ranged",frontImageId:"cards/zb_plus/zb_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:3},{id:"zb_plus-2",unitDeckId:"ZB+",nameJa:"ホバー",nameCn:"悬浮器",actionType:"auxiliary",frontImageId:"cards/zb_plus/zb_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb_plus-3",unitDeckId:"ZB+",nameJa:"ホバー",nameCn:"悬浮器",actionType:"auxiliary",frontImageId:"cards/zb_plus/zb_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb_plus-4",unitDeckId:"ZB+",nameJa:"チェーンブレード",nameCn:"链锯剑",actionType:"melee",frontImageId:"cards/zb_plus/zb_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"zb_plus-5",unitDeckId:"ZB+",nameJa:"ジャイアントシザース",nameCn:"巨型剪刀",actionType:"melee",frontImageId:"cards/zb_plus/zb_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:10},{id:"zb_plus-6",unitDeckId:"ZB+",nameJa:"広射程ミサイル",nameCn:"广射程导弹",actionType:"ranged",frontImageId:"cards/zb_plus/zb_plus-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:3}],Uh=[{id:"ダミー-1",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-2",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-3",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-4",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-5",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-6",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-7",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-8",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-9",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-10",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-11",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-12",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-13",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-14",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-15",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-16",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-17",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-18",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-19",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-20",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0}],Hh=[{id:"強化機雷-1",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-2",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-3",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-4",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-5",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-6",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-7",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-8",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-9",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-10",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-11",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-12",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-13",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-14",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-15",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-16",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5}],Wh=[{id:"陸上機雷-1",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-2",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-3",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-4",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-5",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-6",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-7",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-8",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-9",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-10",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-11",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-12",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-13",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-14",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-15",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-16",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-17",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-18",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-19",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-20",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3}],ma={AG:Nh,AR:Mh,BG:Th,HO:Eh,HY:Dh,LG:$h,LO:Ah,TR:Vh,ZB:zh,"AG+":Ph,"AR+":Lh,"BG+":Rh,"HO+":Oh,"HY+":Kh,"LG+":Jh,"LO+":Bh,"TR+":Fh,"ZB+":Gh,ダミー:Uh,強化機雷:Hh,陸上機雷:Wh};let Zh=0;function Yh(e,n){return`${e}-${n}-${Zh++}`}function Xh(e,n){const r=(ma[e]??[]).map(a=>({instanceId:Yh(a.id,n),defId:a.id,destroyed:!1}));return Qh(r)}function Qh(e){const n=[...e];for(let t=n.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[n[t],n[r]]=[n[r],n[t]]}return n}function km(e,n){const t=[...e];let r=n>>>0;for(let a=t.length-1;a>0;a--){r=r+1831565813>>>0;let i=Math.imul(r^r>>>15,r|1);i^=i+Math.imul(i^i>>>7,i|61);const s=((i^i>>>14)>>>0)/4294967296,c=Math.floor(s*(a+1));[t[a],t[c]]=[t[c],t[a]]}return{shuffled:t,nextSeed:r}}function qh(e,n){const t=Math.min(n,e.length);return{drawn:e.slice(0,t),remaining:e.slice(t)}}function ee(e){for(const n of Object.values(ma)){const t=n.find(r=>r.id===e);if(t)return t}}const l=(e=0)=>({terrain:"plain",elevation:0,variant:e}),I=(e=0)=>({terrain:"sand",elevation:0,variant:e}),J=(e=0)=>({terrain:"rubble",elevation:0,variant:e}),K=(e=0)=>({terrain:"forest",elevation:0,variant:e}),V=(e=0)=>({terrain:"water",elevation:0,variant:e}),C=e=>({terrain:"highland",elevation:e,variant:e}),e0={id:"map_1a",nameJa:"基本マップ1a",nameCn:"基础地图1a",width:7,height:11,maxPlayers:2,maxTeams:2,cells:[[I(),I(),I(),I(),I(),I(),I()],[l(),l(),l(),l(),l(),l(),l()],[l(),l(),l(),l(),l(),l(),l()],[C(2),C(1),l(),l(),l(),C(2),C(2)],[C(1),C(1),l(),l(),l(),C(2),l()],[l(),l(),l(),l(),l(),C(2),l()],[l(),l(),l(),l(),l(),l(),l()],[l(),l(),l(),C(1),C(1),C(2),C(2)],[l(),l(),l(),l(),l(),l(),l()],[l(),l(),l(),l(),l(),l(),l()],[J(),J(),J(),J(),J(),J(),J()]],startZones:{0:[{row:0,col:2},{row:0,col:3},{row:0,col:4}],1:[{row:10,col:2},{row:10,col:3},{row:10,col:4}]}},n0={id:"map_2a",nameJa:"基本マップ2a",nameCn:"基础地图2a",width:7,height:11,maxPlayers:2,maxTeams:2,cells:[[I(),I(),I(),I(),I(),I(),I()],[l(),l(),l(),l(),l(),l(),l()],[C(2),C(2),l(),l(),l(),l(),l()],[C(2),l(),l(),l(),l(),l(),l()],[C(2),l(),l(),l(),l(),l(),l()],[C(2),l(),l(),l(),l(),l(),l()],[C(2),C(2),l(),l(),l(),l(),l()],[l(),l(),l(),l(),K(),K(),l()],[l(),l(),l(),l(),K(),K(),l()],[l(),l(),l(),l(),l(),l(),l()],[I(),I(),I(),I(),I(),I(),I()]],startZones:{0:[{row:0,col:2},{row:0,col:3},{row:0,col:4}],1:[{row:10,col:2},{row:10,col:3},{row:10,col:4}]}},t0={id:"map_2b",nameJa:"基本マップ2b",nameCn:"基础地图2b",width:7,height:11,maxPlayers:2,maxTeams:2,cells:[[K(),K(),K(),l(),l(),l(),l()],[V(),V(),I(),l(),l(),l(),l()],[V(),V(),I(),l(),l(),l(),l()],[I(),V(),V(),I(),l(),l(),l()],[l(),I(),V(),V(),I(),l(),l()],[l(),l(),I(),V(),V(),I(),l()],[l(),l(),l(),V(),V(),I(),l()],[l(),l(),l(),I(),V(),V(),l()],[l(),l(),l(),l(),I(),V(),V()],[l(),l(),l(),l(),l(),l(),l()],[l(),l(),I(),I(),I(),l(),l()]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:0,col:2}],1:[{row:10,col:2},{row:10,col:3},{row:10,col:4}]}},r0={id:"map_3a",nameJa:"峡谷要塞",nameCn:"峡谷要塞",width:9,height:13,maxPlayers:4,maxTeams:4,cells:[[I(),I(),I(),I(),I(),I(),I(),I(),I()],[K(0),l(),l(),l(),l(),l(),l(),l(),K(1)],[l(),l(),l(),l(),l(),l(),l(),l(),l()],[C(2),C(3),C(1),l(),l(),l(),C(1),C(2),C(2)],[C(2),C(2),l(),l(),J(1),l(),l(),C(1),C(2)],[C(1),l(),J(0),J(2),l(),J(1),J(3),l(),C(1)],[l(),I(),V(0),V(1),I(),V(2),V(0),I(),l()],[C(1),l(),J(3),J(0),l(),J(2),J(1),l(),C(1)],[C(2),C(1),l(),l(),J(0),l(),l(),C(2),C(2)],[C(2),C(2),C(1),l(),l(),l(),C(1),C(3),C(2)],[l(),l(),l(),l(),l(),l(),l(),l(),l()],[K(2),l(),l(),l(),l(),l(),l(),l(),K(3)],[I(),I(),I(),I(),I(),I(),I(),I(),I()]],startZones:{0:[{row:0,col:1},{row:0,col:3},{row:0,col:4},{row:0,col:5},{row:0,col:7}],1:[{row:12,col:1},{row:12,col:3},{row:12,col:4},{row:12,col:5},{row:12,col:7}],2:[{row:2,col:0},{row:6,col:0}],3:[{row:2,col:8},{row:6,col:8}]}},a0={id:"map_3b",nameJa:"群島戦域",nameCn:"群岛战域",width:9,height:13,maxPlayers:4,maxTeams:4,cells:[[K(0),K(1),I(),I(),V(0),V(1),l(),l(),l()],[K(2),I(),l(),I(),V(2),l(),l(),I(),V(0)],[I(),V(0),I(),l(),l(),I(),V(1),V(0),V(2)],[V(1),V(2),l(),l(),C(1),l(),l(),V(2),V(1)],[V(0),I(),l(),C(1),C(2),C(1),l(),I(),V(0)],[V(2),l(),C(1),C(2),C(3),C(2),C(1),l(),V(1)],[V(1),I(),l(),C(2),K(0),C(2),l(),I(),V(2)],[V(0),l(),C(1),C(2),C(3),C(2),C(1),l(),V(0)],[V(2),I(),l(),C(1),C(2),C(1),l(),I(),V(1)],[V(1),V(0),l(),l(),C(1),l(),l(),V(0),V(2)],[V(0),V(2),V(1),I(),l(),l(),I(),V(1),I()],[l(),l(),V(0),I(),l(),I(),J(0),I(),J(1)],[l(),l(),l(),V(1),I(),I(),J(2),J(3),J(0)]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:1,col:0},{row:0,col:6},{row:0,col:7}],1:[{row:12,col:6},{row:12,col:7},{row:11,col:8},{row:12,col:0},{row:12,col:1}],2:[{row:2,col:3},{row:3,col:2}],3:[{row:10,col:4},{row:10,col:5}]}},o0={id:"map_4a",nameJa:"都市廃墟",nameCn:"都市废墟",width:11,height:15,maxPlayers:4,maxTeams:4,cells:[[J(0),I(),I(),I(),I(),I(),I(),I(),I(),I(),J(1)],[J(2),J(3),l(),l(),l(),l(),l(),K(0),K(1),l(),l()],[l(),J(0),J(1),l(),l(),J(2),l(),K(2),l(),l(),l()],[l(),l(),C(1),C(2),l(),J(3),l(),l(),l(),J(0),l()],[l(),l(),C(2),C(1),l(),l(),l(),l(),I(),V(0),I()],[J(1),l(),l(),l(),l(),J(0),l(),I(),V(1),V(2),l()],[J(2),J(0),l(),l(),l(),l(),I(),V(0),I(),l(),l()],[l(),l(),l(),l(),l(),C(3),l(),l(),l(),l(),l()],[l(),l(),I(),V(2),I(),l(),l(),l(),l(),J(1),J(2)],[l(),V(0),V(1),I(),l(),K(0),K(1),l(),l(),l(),J(0)],[l(),J(3),l(),l(),l(),K(2),K(3),l(),C(1),C(2),l()],[l(),l(),l(),J(1),l(),l(),l(),l(),C(2),C(1),l()],[l(),l(),J(2),J(0),l(),l(),l(),l(),l(),l(),l()],[l(),l(),l(),J(3),l(),l(),l(),J(1),J(2),l(),l()],[J(3),I(),I(),I(),I(),I(),I(),I(),I(),I(),J(2)]],startZones:{0:[{row:0,col:1},{row:0,col:3},{row:0,col:5},{row:0,col:7},{row:0,col:9}],1:[{row:14,col:1},{row:14,col:3},{row:14,col:5},{row:14,col:7},{row:14,col:9}],2:[{row:7,col:0},{row:8,col:0}],3:[{row:6,col:10},{row:7,col:10}]}},i0={id:"map_5a",nameJa:"三叉戦場",nameCn:"三叉战场",width:13,height:17,maxPlayers:6,maxTeams:6,cells:[[l(),l(),l(),I(),I(),I(),I(),I(),I(),I(),l(),l(),l()],[l(),l(),I(),l(),l(),l(),l(),l(),l(),l(),I(),l(),l()],[l(),K(0),l(),l(),l(),l(),l(),l(),l(),l(),l(),K(1),l()],[K(2),K(0),l(),l(),l(),J(0),l(),J(1),l(),l(),l(),K(1),K(3)],[K(0),l(),l(),l(),I(),V(0),I(),V(1),I(),l(),l(),l(),K(2)],[l(),l(),l(),I(),V(1),V(0),l(),V(2),V(0),I(),l(),l(),l()],[l(),l(),C(1),C(2),I(),l(),l(),l(),I(),C(2),C(1),l(),l()],[l(),C(1),C(2),C(3),C(2),l(),l(),l(),C(2),C(3),C(2),C(1),l()],[l(),l(),C(2),C(3),J(0),C(2),C(3),C(2),J(1),C(3),C(2),l(),l()],[l(),C(1),C(2),C(3),C(2),l(),l(),l(),C(2),C(3),C(2),C(1),l()],[l(),l(),C(1),C(2),I(),l(),l(),l(),I(),C(2),C(1),l(),l()],[l(),l(),l(),I(),V(2),V(1),l(),V(0),V(2),I(),l(),l(),l()],[K(1),l(),l(),l(),I(),V(0),I(),V(1),I(),l(),l(),l(),K(0)],[K(3),K(2),l(),l(),l(),J(2),l(),J(3),l(),l(),l(),K(0),K(1)],[l(),K(0),l(),l(),l(),l(),l(),l(),l(),l(),l(),K(2),l()],[I(),I(),I(),I(),l(),l(),l(),l(),l(),I(),I(),I(),I()],[I(),I(),I(),I(),I(),l(),l(),l(),I(),I(),I(),I(),I()]],startZones:{0:[{row:0,col:4},{row:0,col:6},{row:0,col:8}],1:[{row:16,col:0},{row:16,col:1},{row:16,col:2}],2:[{row:16,col:10},{row:16,col:11},{row:16,col:12}],3:[{row:6,col:0},{row:6,col:1},{row:10,col:0}],4:[{row:6,col:11},{row:6,col:12},{row:10,col:12}],5:[{row:2,col:0},{row:2,col:6},{row:2,col:12}]}},s0={id:"map_6a",nameJa:"環状要塞",nameCn:"环形要塞",width:15,height:17,maxPlayers:8,maxTeams:8,cells:[[l(),l(),l(),l(),I(),I(),I(),I(),I(),I(),I(),l(),l(),l(),l()],[l(),l(),l(),I(),l(),l(),l(),l(),l(),l(),l(),I(),l(),l(),l()],[l(),l(),C(1),C(2),C(2),C(1),l(),l(),l(),C(1),C(2),C(2),C(1),l(),l()],[l(),J(0),C(1),l(),l(),l(),J(1),l(),J(2),l(),l(),l(),C(1),J(3),l()],[I(),l(),l(),l(),K(0),K(1),l(),l(),l(),K(2),K(3),l(),l(),l(),I()],[I(),l(),J(0),l(),K(2),l(),l(),l(),l(),l(),K(0),l(),J(1),l(),I()],[l(),J(2),C(1),l(),l(),l(),J(3),I(),J(0),l(),l(),l(),C(1),J(1),l()],[l(),l(),l(),l(),l(),I(),V(0),V(1),V(2),I(),l(),l(),l(),l(),l()],[l(),l(),l(),l(),I(),V(2),V(0),C(3),V(1),V(0),I(),l(),l(),l(),l()],[l(),l(),l(),l(),l(),I(),V(1),V(2),V(0),I(),l(),l(),l(),l(),l()],[l(),J(3),C(1),l(),l(),l(),J(1),I(),J(2),l(),l(),l(),C(1),J(0),l()],[I(),l(),J(2),l(),K(1),l(),l(),l(),l(),l(),K(3),l(),J(3),l(),I()],[I(),l(),l(),l(),K(3),K(0),l(),l(),l(),K(1),K(2),l(),l(),l(),I()],[l(),J(1),C(1),l(),l(),l(),J(3),l(),J(0),l(),l(),l(),C(1),J(2),l()],[l(),l(),C(1),C(2),C(2),C(1),l(),l(),l(),C(1),C(2),C(2),C(1),l(),l()],[l(),l(),l(),I(),l(),l(),l(),l(),l(),l(),l(),I(),l(),l(),l()],[l(),l(),l(),l(),I(),I(),I(),I(),I(),I(),I(),l(),l(),l(),l()]],startZones:{0:[{row:0,col:5},{row:0,col:6},{row:0,col:7},{row:0,col:8}],1:[{row:16,col:5},{row:16,col:6},{row:16,col:7},{row:16,col:8}],2:[{row:4,col:0},{row:5,col:0},{row:11,col:0},{row:12,col:0}],3:[{row:4,col:14},{row:5,col:14},{row:11,col:14},{row:12,col:14}],4:[{row:0,col:0},{row:0,col:1},{row:0,col:2},{row:0,col:3}],5:[{row:0,col:11},{row:0,col:12},{row:0,col:13},{row:0,col:14}],6:[{row:16,col:0},{row:16,col:1},{row:16,col:2},{row:16,col:3}],7:[{row:16,col:11},{row:16,col:12},{row:16,col:13},{row:16,col:14}]}},l0={id:"map_7a",nameJa:"大陸戦争",nameCn:"大陆战争",width:17,height:19,maxPlayers:8,maxTeams:8,cells:[[I(),I(),I(),I(),l(),l(),l(),l(),l(),l(),l(),l(),l(),I(),I(),I(),I()],[I(),l(),l(),l(),l(),l(),K(0),l(),l(),l(),K(1),l(),l(),l(),l(),l(),I()],[l(),l(),K(0),K(1),l(),K(2),K(0),l(),l(),l(),K(1),K(3),l(),K(2),K(0),l(),l()],[l(),l(),K(2),l(),l(),l(),l(),J(0),l(),J(1),l(),l(),l(),l(),K(1),l(),l()],[l(),l(),l(),l(),C(1),C(2),l(),l(),l(),l(),l(),C(2),C(1),l(),l(),l(),l()],[l(),J(0),l(),C(1),C(2),C(3),C(1),l(),l(),l(),C(1),C(3),C(2),C(1),l(),J(1),l()],[I(),l(),l(),C(1),C(2),l(),l(),I(),V(0),I(),l(),l(),C(2),C(1),l(),l(),I()],[I(),l(),l(),l(),l(),l(),I(),V(1),V(0),V(2),I(),l(),l(),l(),l(),l(),I()],[l(),l(),J(2),l(),l(),I(),V(0),V(2),I(),V(1),V(0),I(),l(),l(),J(3),l(),l()],[l(),l(),l(),l(),I(),V(1),I(),l(),C(3),l(),I(),V(2),I(),l(),l(),l(),l()],[l(),l(),J(1),l(),l(),I(),V(2),V(0),I(),V(0),V(1),I(),l(),l(),J(0),l(),l()],[I(),l(),l(),l(),l(),l(),I(),V(0),V(1),V(2),I(),l(),l(),l(),l(),l(),I()],[I(),l(),l(),C(1),C(2),l(),l(),I(),V(2),I(),l(),l(),C(2),C(1),l(),l(),I()],[l(),J(2),l(),C(1),C(2),C(3),C(1),l(),l(),l(),C(1),C(3),C(2),C(1),l(),J(3),l()],[l(),l(),l(),l(),C(1),C(2),l(),l(),l(),l(),l(),C(2),C(1),l(),l(),l(),l()],[l(),l(),K(3),l(),l(),l(),l(),J(3),l(),J(2),l(),l(),l(),l(),K(0),l(),l()],[l(),l(),K(1),K(2),l(),K(0),K(3),l(),l(),l(),K(2),K(1),l(),K(3),K(2),l(),l()],[I(),l(),l(),l(),l(),l(),K(2),l(),l(),l(),K(0),l(),l(),l(),l(),l(),I()],[I(),I(),I(),I(),l(),l(),l(),l(),l(),l(),l(),l(),l(),I(),I(),I(),I()]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:0,col:2},{row:0,col:3},{row:1,col:0}],1:[{row:0,col:13},{row:0,col:14},{row:0,col:15},{row:0,col:16},{row:1,col:16}],2:[{row:18,col:0},{row:18,col:1},{row:18,col:2},{row:18,col:3},{row:17,col:0}],3:[{row:18,col:13},{row:18,col:14},{row:18,col:15},{row:18,col:16},{row:17,col:16}],4:[{row:6,col:0},{row:7,col:0},{row:7,col:1},{row:11,col:0},{row:12,col:0}],5:[{row:6,col:16},{row:7,col:16},{row:7,col:15},{row:11,col:16},{row:12,col:16}],6:[{row:0,col:6},{row:0,col:7},{row:0,col:8},{row:0,col:9},{row:0,col:10}],7:[{row:18,col:6},{row:18,col:7},{row:18,col:8},{row:18,col:9},{row:18,col:10}]}},c0={id:"map_8a",nameJa:"火山列島",nameCn:"火山列岛",width:15,height:19,maxPlayers:8,maxTeams:8,cells:[[I(),I(),I(),K(0),K(1),V(0),V(1),l(),V(2),V(0),K(2),K(3),I(),I(),I()],[I(),l(),l(),K(2),l(),I(),V(0),l(),V(1),I(),l(),K(0),l(),l(),I()],[K(0),l(),l(),l(),I(),V(1),V(2),l(),V(0),V(2),I(),l(),l(),l(),K(1)],[l(),l(),J(0),I(),V(0),V(1),I(),l(),I(),V(2),V(0),I(),J(1),l(),l()],[l(),l(),l(),l(),I(),I(),l(),l(),l(),I(),I(),l(),l(),l(),l()],[l(),K(0),l(),l(),l(),l(),C(1),l(),C(1),l(),l(),l(),l(),K(1),l()],[l(),K(2),l(),l(),C(1),C(2),C(2),C(1),C(2),C(2),C(1),l(),l(),K(3),l()],[V(0),I(),l(),C(1),C(2),C(3),J(0),C(2),J(1),C(3),C(2),C(1),l(),I(),V(1)],[V(1),I(),l(),C(2),C(3),J(2),C(3),C(3),C(3),J(3),C(3),C(2),l(),I(),V(0)],[V(2),l(),l(),C(1),C(2),C(3),C(3),C(3),C(3),C(3),C(2),C(1),l(),l(),V(2)],[V(0),I(),l(),C(2),C(3),J(0),C(3),C(3),C(3),J(1),C(3),C(2),l(),I(),V(1)],[V(1),I(),l(),C(1),C(2),C(3),J(2),C(2),J(3),C(3),C(2),C(1),l(),I(),V(0)],[l(),K(1),l(),l(),C(1),C(2),C(2),C(1),C(2),C(2),C(1),l(),l(),K(0),l()],[l(),K(3),l(),l(),l(),l(),C(1),l(),C(1),l(),l(),l(),l(),K(2),l()],[l(),l(),l(),l(),I(),I(),l(),l(),l(),I(),I(),l(),l(),l(),l()],[l(),l(),J(2),I(),V(2),V(0),I(),l(),I(),V(1),V(2),I(),J(3),l(),l()],[K(2),l(),l(),l(),I(),V(0),V(1),l(),V(2),V(1),I(),l(),l(),l(),K(3)],[I(),l(),l(),K(1),l(),I(),V(2),l(),V(0),I(),l(),K(3),l(),l(),I()],[I(),I(),I(),K(3),K(2),V(1),V(0),l(),V(1),V(2),K(0),K(1),I(),I(),I()]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:0,col:2},{row:1,col:0}],1:[{row:0,col:12},{row:0,col:13},{row:0,col:14},{row:1,col:14}],2:[{row:18,col:0},{row:18,col:1},{row:18,col:2},{row:17,col:0}],3:[{row:18,col:12},{row:18,col:13},{row:18,col:14},{row:17,col:14}],4:[{row:7,col:1},{row:8,col:1},{row:9,col:1},{row:10,col:1}],5:[{row:7,col:13},{row:8,col:13},{row:9,col:13},{row:10,col:13}],6:[{row:0,col:7},{row:1,col:7},{row:2,col:7},{row:3,col:7}],7:[{row:18,col:7},{row:17,col:7},{row:16,col:7},{row:15,col:7}]}},Ze=[e0,n0,t0,r0,a0,o0,i0,s0,l0,c0];function d0(){try{const e="em_custom_maps_index",n="em_custom_map_",t=localStorage.getItem(e);if(!t)return Ze;const r=JSON.parse(t),a=[];for(const{id:i}of r){const s=localStorage.getItem(n+i);if(s)try{a.push(JSON.parse(s))}catch{}}return[...Ze,...a]}catch{return Ze}}function nc(e){switch(e.terrain){case"plain":return"/assets/tiles/平地0.png";case"sand":return"/assets/tiles/砂0.png";case"rubble":return`/assets/tiles/瓦礫${e.variant%4}.png`;case"forest":return`/assets/tiles/森${e.variant%4}.png`;case"water":return`/assets/tiles/水${e.variant%3}.png`;case"highland":return`/assets/tiles/高地${e.elevation}.png`;default:return"/assets/tiles/平地0.png"}}const q=[{id:"TR",deckCode:"TR",nameJa:"トルトハーン",nameCn:"托尔特哈恩",type:"M軽/単座",movement:6,evasion:8,assault:5,assaultDef:2,initiative:3,tokenId:"TR-token.jpg"},{id:"HO",deckCode:"HO",nameJa:"フォルニッセ",nameCn:"弗尼塞",type:"SS軽/単座",movement:7,evasion:10,assault:5,assaultDef:2,initiative:1,tokenId:"HO-token.jpg"},{id:"HY",deckCode:"HY",nameJa:"ヒストリクス",nameCn:"希斯特里克斯",type:"L重/単座",movement:3,evasion:3,assault:6,assaultDef:3,initiative:14,tokenId:"HY-token.jpg"},{id:"ZB",deckCode:"ZB",nameJa:"ズィマー・ブーリア",nameCn:"季马尔·布里亚",type:"S重/単座",movement:5,evasion:5,assault:6,assaultDef:3,initiative:9,tokenId:"ZB-token.jpg"},{id:"AR",deckCode:"AR",nameJa:"アラクネ",nameCn:"阿拉克涅",type:"S中/単座",movement:6,evasion:7,assault:5,assaultDef:2,initiative:5,tokenId:"AR-token.jpg"},{id:"BG",deckCode:"BG",nameJa:"ヴィスナー・グローム",nameCn:"维斯纳·格罗姆",type:"LL中/単座",movement:3,evasion:5,assault:6,assaultDef:3,initiative:13,tokenId:"BG-token.jpg"},{id:"LO",deckCode:"LO",nameJa:"リュミエール・デ・オラージュ",nameCn:"吕米耶尔",type:"L軽/単座",movement:5,evasion:7,assault:5,assaultDef:2,initiative:6,tokenId:"LO-token.jpg"},{id:"LG",deckCode:"LG",nameJa:"ルー・ガルー",nameCn:"卢·加鲁",type:"M重/単座",movement:4,evasion:4,assault:6,assaultDef:3,initiative:12,tokenId:"LG-token.jpg"},{id:"AG",deckCode:"AG",nameJa:"アルギュロス",nameCn:"阿尔古罗斯",type:"M中/単座",movement:5,evasion:6,assault:6,assaultDef:3,initiative:7,tokenId:"AG-token.jpg"}];function u0(e,n){const t=[];let r=e.col,a=e.row;const i=n.col,s=n.row,c=Math.abs(i-r),d=Math.abs(s-a),u=r<i?1:-1,p=a<s?1:-1;let m=c-d;const g=(c+d)*2+2;let h=0;for(;h++<g&&(t.push({row:a,col:r}),!(r===i&&a===s));){const f=2*m;f>-d&&(m-=d,r+=u),f<c&&(m+=c,a+=p)}return t}function fa(e,n,t){var c;if(n.row===t.row&&n.col===t.col)return!0;const r=e.cells[n.row][n.col],a=e.cells[t.row][t.col],i=Math.max(r.elevation,a.elevation),s=u0(n,t);for(const d of s){if(d.row===n.row&&d.col===n.col||d.row===t.row&&d.col===t.col)continue;const u=(c=e.cells[d.row])==null?void 0:c[d.col];if(u&&u.terrain==="highland"&&u.elevation>i)return!1}return!0}function Se(e,n){return Math.max(Math.abs(e.row-n.row),Math.abs(e.col-n.col))}const p0={plain:{type:"plain",nameJa:"平地",nameCn:"平原",moveCost:1,blocksLOS:!1,enterable:!0,providesCover:!1},sand:{type:"sand",nameJa:"砂地",nameCn:"沙地",moveCost:1,blocksLOS:!1,enterable:!0,providesCover:!1},rubble:{type:"rubble",nameJa:"瓦礫",nameCn:"瓦砾",moveCost:2,blocksLOS:!1,enterable:!0,providesCover:!1},forest:{type:"forest",nameJa:"森",nameCn:"森林",moveCost:2,blocksLOS:!0,enterable:!0,providesCover:!0},water:{type:"water",nameJa:"水辺",nameCn:"水域",moveCost:3,blocksLOS:!1,enterable:!0,providesCover:!1},highland:{type:"highland",nameJa:"高地",nameCn:"高地",moveCost:1,blocksLOS:!1,enterable:!0,providesCover:!1}};function jm(e){const n=p0[e];return n.enterable?n.moveCost:1/0}const Nt=[[-1,0],[1,0],[0,-1],[0,1]];function mr(e){return e==="N"?"S":e==="S"?"N":e==="E"?"W":"E"}function Mt(e,n){return e===-1?"N":e===1?"S":n===-1?"W":"E"}function Tt(e,n,t){return n>=0&&n<e.height&&t>=0&&t<e.width}function se(e,n){return e.row===n.row&&e.col===n.col}function wm(e,n,t,r,a){const i=Array.from({length:e.height},()=>new Array(e.width).fill(-1)),s=[{pos:n,remaining:t}];i[n.row][n.col]=t;const c=[{pos:n,remaining:t}];for(;s.length>0;){const{pos:d,remaining:u}=s.shift();for(const[p,m]of Nt){const g=d.row+p,h=d.col+m;if(!Tt(e,g,h))continue;const f={row:g,col:h},y=e.cells[g][h];let _=jm(y.terrain);if(_===1/0)continue;a!=null&&a.vernier&&(y.terrain==="rubble"||y.terrain==="forest"||y.terrain==="water")&&(_=1);const v=e.cells[d.row][d.col];let x=Math.max(0,y.elevation-v.elevation);a!=null&&a.vernier&&(x=Math.max(0,x-1));const b=_+x;if(u<b)continue;const j=u-b;r.some($=>se($,f))||i[g][h]>=j||(i[g][h]=j,c.push({pos:f,remaining:j}),s.push({pos:f,remaining:j}))}}return c}function Sm(e,n,t,r,a){return wm(e,n,t,r,a).map(i=>i.pos)}function ga(e,n,t,r,a,i){const s=e.cells[r][a];let c=jm(s.terrain);if(c===1/0)return 1/0;i!=null&&i.vernier&&(s.terrain==="rubble"||s.terrain==="forest"||s.terrain==="water")&&(c=1);const d=e.cells[n][t];let u=Math.max(0,s.elevation-d.elevation);return i!=null&&i.vernier&&(u=Math.max(0,u-1)),c+u}function gi(e,n,t,r,a,i="S"){if(t<=0)return[];const s={N:0,S:1,E:2,W:3},c=Array.from({length:e.height},()=>Array.from({length:e.width},()=>new Array(4).fill(-1))),d={pos:n,facing:i,remaining:t};c[n.row][n.col][s[i]]=t;const u=[d],p=[d];for(;u.length>0;){const{pos:h,facing:f,remaining:y}=u.shift(),_=mr(f);for(const[v,x]of Nt){const b=Mt(v,x);if(b===_)continue;const j=h.row+v,T=h.col+x;if(!Tt(e,j,T))continue;const $={row:j,col:T},k=ga(e,h.row,h.col,j,T,a);if(k===1/0||y<k||r.some(D=>se(D,$)))continue;const S=y-k,A=s[b];if(c[j][T][A]>=S)continue;c[j][T][A]=S;const E={pos:$,facing:b,remaining:S};p.push(E),u.push(E)}}function m(h){const{pos:f,facing:y,remaining:_}=h,v=mr(y);for(const[x,b]of Nt){if(Mt(x,b)===v)continue;const T=f.row+x,$=f.col+b;if(!Tt(e,T,$)||r.some(S=>se(S,{row:T,col:$})))continue;const k=ga(e,f.row,f.col,T,$,a);if(k!==1/0&&_>=k)return!0}return!1}const g=new Map;for(const h of p){if(se(h.pos,n)||m(h))continue;const f=`${h.pos.row},${h.pos.col}`,y=g.get(f);(!y||h.remaining>y.remaining)&&g.set(f,{pos:h.pos,remaining:h.remaining})}return Array.from(g.values())}function tc(e,n,t,r,a,i,s){if(se(n,r))return{path:[],finalFacing:t};const c={N:0,S:1,E:2,W:3},d=Array.from({length:e.height},()=>Array.from({length:e.width},()=>new Array(4).fill(-1))),u={pos:n,facing:t,remaining:a,parent:null};d[n.row][n.col][c[t]]=a;const p=[u];for(;p.length>0;){const m=p.shift();if(se(m.pos,r)){const h=[];let f=m;for(;f&&f.parent!==null;)h.push(f.pos),f=f.parent;return{path:h.reverse(),finalFacing:m.facing}}const g=mr(m.facing);for(const[h,f]of Nt){const y=Mt(h,f);if(y===g)continue;const _=m.pos.row+h,v=m.pos.col+f;if(!Tt(e,_,v))continue;const x={row:_,col:v},b=ga(e,m.pos.row,m.pos.col,_,v,s);if(b===1/0||m.remaining<b||i.some(k=>se(k,x))&&!se(x,r))continue;const T=m.remaining-b,$=c[y];d[_][v][$]>=T||(d[_][v][$]=T,p.push({pos:x,facing:y,remaining:T,parent:m}))}}return null}function Zi(e,n,t,r,a,i,s,c=8){if(se(n,r)||a<=0)return[];const d=[];function u(m,g,h){const f=mr(g);for(const[y,_]of Nt){if(Mt(y,_)===f)continue;const x=m.row+y,b=m.col+_;if(!Tt(e,x,b)||i.some(T=>se(T,{row:x,col:b})))continue;const j=ga(e,m.row,m.col,x,b,s);if(j!==1/0&&h>=j)return!1}return!0}function p(m,g,h,f){if(d.length>=c)return;if(se(m,r)){u(m,g,h)&&d.push({path:[...f],finalFacing:g});return}const y=mr(g);for(const[_,v]of Nt){const x=Mt(_,v);if(x===y)continue;const b=m.row+_,j=m.col+v;if(!Tt(e,b,j))continue;const T={row:b,col:j};if(se(T,n)||f.some(S=>se(S,T))||i.some(S=>se(S,T))&&!se(T,r))continue;const k=ga(e,m.row,m.col,b,j,s);k===1/0||h<k||(f.push(T),p(T,x,h-k,f),f.pop())}}return p(n,t,a,[]),d}function Cm(e,n,t){const r=[];for(const[a,i]of Nt){const s=n.row+a,c=n.col+i;if(!Tt(e,s,c))continue;const d={row:s,col:c};t.some(u=>se(u,d))||r.push(d)}return r}function m0(e,n,t,r){if(se(n,t))return[];const a=Array.from({length:e.height},()=>new Array(e.width).fill(!1));a[n.row][n.col]=!0;const i=[{pos:n,parent:null}];for(;i.length>0;){const s=i.shift();if(se(s.pos,t)){const p=[];let m=s;for(;m&&m.parent!==null;)p.push(m.pos),m=m.parent;return p.reverse()}const{row:c,col:d}=s.pos,u=[{row:c-1,col:d},{row:c+1,col:d},{row:c,col:d-1},{row:c,col:d+1}];for(const p of u)if(p.row>=0&&p.row<e.height&&p.col>=0&&p.col<e.width){const m=r.some(g=>se(g,p))&&!se(p,t);!a[p.row][p.col]&&!m&&(a[p.row][p.col]=!0,i.push({pos:p,parent:s}))}}return null}function Yi(e,n,t,r){const a=n===1?e.plotSeg1:e.plotSeg2;if(!a)return 0;const i=t(a.defId);return!i||i.actionType!=="movement"?0:(i.movementValue??0)+(r!=null&&r.wheel?2:0)}function f0(e,n,t,r){const a=n===1?e.plotSeg1:e.plotSeg2;if(!a)return!1;const i=t(a.defId);return!i||i.actionType!=="movement"?!1:(i.movementValue??r)>0}function Dn(e,n,t){return e==="N"?t.row<=n.row:e==="S"?t.row>=n.row:e==="E"?t.col>=n.col:e==="W"?t.col<=n.col:!0}function ha(e,n,t){if(n!==2)return 0;if(e.plotSeg1){const r=t(e.plotSeg1.defId);if(r&&r.actionType==="aim")return 1}return 0}function Zs(e,n,t){const r=n===1?e.plotSeg1:e.plotSeg2;if(!r)return 0;const a=t(r.defId);return a&&a.actionType==="armor"?1:0}function Pn(e,n,t,r){const a=n===1?e.plotSeg1:e.plotSeg2;if(!a)return null;const i=r(a.defId);return i&&(t==="ranged"&&i.actionType==="ranged"||t==="melee"&&(i.actionType==="melee"||i.actionType==="charge"))?i:null}function Jo(e,n,t,r,a){var u,p;let i=e;const s=[],c=(u=r.cells[n.row])==null?void 0:u[n.col],d=(p=r.cells[t.row])==null?void 0:p[t.col];return(c==null?void 0:c.terrain)==="water"&&a.isEnergyWeapon&&(i-=1,s.push("水域能量衰减-1")),(d==null?void 0:d.terrain)==="forest"&&(i-=1,s.push("森林掩护-1")),{dmg:Math.max(0,i),reasons:s}}function rc(e,n,t,r,a,i){const s=Pn(e,t,r,i);if(!s)return{canAttack:!1,reason:"无攻击牌",damage:0,counterDamage:0,dist:0,card:null};const c=Se(e.position,n.position);if(r==="ranged"){if(s.rangeMin===void 0||s.rangeMax===void 0)return{canAttack:!1,reason:"卡牌无射程数据",damage:0,counterDamage:0,dist:c,card:s};if(c<s.rangeMin)return{canAttack:!1,reason:`距离过近 (${c} < ${s.rangeMin})`,damage:0,counterDamage:0,dist:c,card:s};if(c>s.rangeMax)return{canAttack:!1,reason:`射程外 (${c} > ${s.rangeMax})`,damage:0,counterDamage:0,dist:c,card:s};if(!fa(a,e.position,n.position))return{canAttack:!1,reason:"视线被遮挡",damage:0,counterDamage:0,dist:c,card:s};if(!Dn(e.facing,e.position,n.position))return{canAttack:!1,reason:`目标在机体后方（机头朝${e.facing}），无法射击`,damage:0,counterDamage:0,dist:c,card:s};let d=s.damage??0;const u=[];if(s.rangeOptimal!==void 0&&s.damageAttenuation!==void 0){const y=Math.max(0,c-s.rangeOptimal);if(y>0){const _=y*s.damageAttenuation;d=Math.max(0,d-_),u.push(`超射程-${_}`)}}const p=Jo(d,e.position,n.position,a,s),m=ha(e,t,i),g=p.dmg+m,h=[...u,...p.reasons];return m>0&&h.push("瞄准+1"),{canAttack:!0,reason:`有效射击${h.length>0?`（${h.join(", ")}）`:""}`,damage:g,counterDamage:0,dist:c,card:s}}if(r==="melee"&&s.actionType==="melee"){if(c!==1)return{canAttack:!1,reason:`不相邻 (距离 ${c})`,damage:0,counterDamage:0,dist:c,card:s};const d=Jo(s.damage??0,e.position,n.position,a,s),u=ha(e,t,i),p=d.dmg+u,m=[...d.reasons];return u>0&&m.push("瞄准+1"),{canAttack:!0,reason:`有效近战${m.length>0?`（${m.join(", ")}）`:""}`,damage:p,counterDamage:0,dist:c,card:s}}return r==="melee"&&s.actionType==="charge"?{canAttack:!1,reason:"突击卡需使用evaluateCharge()",damage:0,counterDamage:0,dist:c,card:s}:{canAttack:!1,reason:"非攻击时机",damage:0,counterDamage:0,dist:c,card:null}}const g0=new Set(["パイルバンカー","スパイク"]);function h0(e){return g0.has(e.nameJa)}function x0(e,n,t,r,a,i){if(Se(n,t)===1)return Dn(i,n,t)?n:null;const c=Sm(e,n,r,a).filter(d=>Se(d,t)===1&&Dn(i,d,t));return c.length===0?null:(c.sort((d,u)=>Se(n,d)-Se(n,u)),c[0])}function Bo(e,n,t,r,a,i,s){const c=Pn(e,t,"melee",s);if(!c||c.actionType!=="charge")return{canAttack:!1,reason:"无突击牌",damage:0,counterDamage:0,dist:0,card:null};const d=Se(e.position,n.position);if(h0(c)){if(d!==1)return{canAttack:!1,reason:`不相邻 (距离 ${d})，${c.nameCn} 无法攻击`,damage:0,counterDamage:0,dist:d,card:c};if(!Dn(e.facing,e.position,n.position))return{canAttack:!1,reason:`目标不在正面弧内（机头朝${e.facing}），${c.nameCn} 无法攻击`,damage:0,counterDamage:0,dist:d,card:c};const b=a.assault+1,j=Jo(b,e.position,n.position,r,c),T=ha(e,t,s),$=j.dmg+T,k=Math.max(0,i.assaultDef-1),S=[...j.reasons];T>0&&S.push("瞄准+1");const A=S.length>0?`（${S.join(", ")}）`:"";return{canAttack:!0,reason:`有效${c.nameCn}攻击${A}`,damage:$,counterDamage:k,dist:d,card:c,chargeDestination:e.position}}const p=a.assault,m=x0(r,e.position,n.position,p,[n.position],e.facing);if(!m)return{canAttack:!1,reason:`突击距离不足或目标不在正面弧内 (距离 ${d}，突击值 ${p})`,damage:0,counterDamage:0,dist:d,card:c};const g=a.assault,h=Jo(g,m,n.position,r,c),f=ha(e,t,s),y=h.dmg+f,_=i.assaultDef,v=[...h.reasons];return f>0&&v.push("瞄准+1"),{canAttack:!0,reason:`有效突击${v.length>0?`（${v.join(", ")}）`:""}`,damage:y,counterDamage:_,dist:d,card:c,chargeDestination:m}}function Et(e){const n=[...e.deck,...e.hand,...e.auxiliary];return e.plotSeg1&&n.push(e.plotSeg1),e.plotSeg2&&n.push(e.plotSeg2),n.filter(t=>!t.destroyed)}function kd(e){return Et(e).length}function Ca(e){const n=[...e.hand,...e.auxiliary];return e.plotSeg1&&n.push(e.plotSeg1),e.plotSeg2&&n.push(e.plotSeg2),n.filter(t=>!t.destroyed)}function ac(e,n){var r,a;const t={...n,destroyed:!0};return{player:{...e,deck:e.deck.map(i=>i.instanceId===n.instanceId?t:i),hand:e.hand.map(i=>i.instanceId===n.instanceId?t:i),auxiliary:e.auxiliary.map(i=>i.instanceId===n.instanceId?t:i),plotSeg1:((r=e.plotSeg1)==null?void 0:r.instanceId)===n.instanceId?t:e.plotSeg1,plotSeg2:((a=e.plotSeg2)==null?void 0:a.instanceId)===n.instanceId?t:e.plotSeg2,destroyedCards:[...e.destroyedCards,t]},destroyed:t}}function Ys(e,n,t,r){let a=e;const i=[];let s=n;const c=r?`[${r}] `:"";let d=0;const u=30;for(;s>0&&d<u;){s--,d++;const p=a.deck.filter(f=>!f.destroyed);if(p.length===0){i.push(`    ↳ ${c}【誘爆】牌组已空，无法继续检查`);break}const m=p[0],g=t(m.defId),h=(g==null?void 0:g.nameCn)??m.defId;if(g!=null&&g.hasBombIcon){const{player:f}=ac(a,m);a=f,s++,i.push(`    ↳ ${c}【💣 誘爆】翻开 ${h}——有炸弹标记，破坏！（连锁+1）`)}else a={...a,deck:a.deck.filter(f=>f.instanceId!==m.instanceId),discard:[...a.discard,m]},i.push(`    ↳ ${c}【誘爆】翻开 ${h}——无炸弹标记，放入弃牌区`)}return{player:a,log:i}}function Qn(e,n,t,r){let a=e;const i=[];let s=n,c=0;for(;s>0;){const d=a.deck.filter(_=>!_.destroyed),u=a.hand.filter(_=>!_.destroyed),p=d[0]??u[0];if(!p)break;const m=t(p.defId),g=(m==null?void 0:m.nameCn)??p.defId,{player:h}=ac(a,p);a=h,s--;const f=m!=null&&m.hasBombIcon?"【💣】":"",y=r?`[${r}] `:"";if(i.push(`  ▶ ${y}${g} 被摧毁${f}`),m!=null&&m.hasBombIcon&&c++,a.destroyedCards.length>30)break}if(c>0){i.push(`  ─── 誘爆检查（${c}张炸弹卡被破坏）───`);const{player:d,log:u}=Ys(a,c,t,r);a=d,i.push(...u)}return{player:a,log:i}}const v0="バーニア",y0="ムーブセンサー",b0="ホイール";function jn(e,n,t){const r=new Map;for(const m of e.auxiliary){if(m.destroyed)continue;const g=n(m.defId);g&&r.set(g.nameJa,(r.get(g.nameJa)??0)+1)}const a=r.get(v0)??0,i=r.get(y0)??0,s=r.get(b0)??0,c=a>=2&&s>=2,d=!c&&a>=2,u=i>=2,p=!c&&s>=2;return{vernier:d&&(t==="movement"||t==="melee"),moveSensor:u&&t==="melee",wheel:p&&(t==="movement"||t==="charge")}}function ue(e){return`P${e.replace("player","")}`}function Fo(e){switch(e){case"movement":return"移动时机";case"ranged":return"射击时机";case"melee":return"近战时机";case"special":return"特殊时机";default:return e}}function _0(e){switch(e){case"movement":return"移动";case"ranged":return"射击";case"melee":return"近战";case"charge":return"突击";case"aim":return"瞄准";case"armor":return"装甲";case"mine":return"机雷";case"special":return"特殊";default:return e}}function Xs(e,n){let t=X(e,`══════ 主要阶段${n}开始 ══════`);t=X(t,`全员翻开阶段${n}盖卡：`);for(const r of e.playerIds){if(t.players[r].isDefeated)continue;const a=t.players[r],i=q.find(u=>u.id===a.unitId),s=ue(r),c=(i==null?void 0:i.nameCn)??r,d=n===1?a.plotSeg1:a.plotSeg2;if(d){const u=ee(d.defId);u?t=X(t,`  ${s}[${c}] →【${u.nameCn}】(${_0(u.actionType)})`):t=X(t,`  ${s}[${c}] → (未知卡牌)`)}else t=X(t,`  ${s}[${c}] → 未配置行动卡`)}return t}function oc(e,n,t,r="S"){const a=Xh(n,e);return{id:e,unitId:n,position:t,facing:r,deck:a,hand:[],auxiliary:[],plotSeg1:null,plotSeg2:null,discard:[],destroyedCards:[],isDefeated:!1}}function Nm(e=2,n=2){const t=Ze[0],r=ar.slice(0,e),a={};for(let s=0;s<r.length;s++)a[r[s]]=s%n;const i={};for(const s of r){const c=a[s],d=t.startZones[c]??t.startZones[0]??[],u=d[Math.min(1,d.length-1)]??{row:0,col:0},p=c===0?"S":"N";i[s]=oc(s,"AG",u,p)}return{phase:"setup",roundNumber:0,activePlayer:r[0],players:i,playerIds:r,teams:a,teamCount:n,map:t,mines:[],log:[],turnOrder:[...r],currentTiming:null,plottingStep:null,pendingDamage:null,shuffleSeed:Date.now()}}function de(e,n){return wh(e,n)}function xe(e,n,t){return Sh(e,n,t)}function X(e,n){return{...e,log:[...e.log,n]}}function $n(e,n){return{...e,log:[...e.log,`[DBG] ${n}`]}}function I0(e,n){return e.filter(t=>t.instanceId!==n)}function k0(e){const n=[],t=[];for(const r of e.deck){const a=ee(r.defId);a&&a.actionType==="auxiliary"?t.push(r):n.push(r)}return{...e,deck:n,auxiliary:[...e.auxiliary,...t]}}function Go(e){const n=e.playerIds.filter(a=>!e.players[a].isDefeated),t=e.phase==="action_seg2"?2:1,r=n.map(a=>{const i=e.players[a],s=q.find(u=>u.id===i.unitId),c=(s==null?void 0:s.initiative)??0;let d=(s==null?void 0:s.movement)??0;if(e.currentTiming==="movement"){const u=t===1?i.plotSeg1:i.plotSeg2;if(u){const p=ee(u.defId);p&&p.movementValue!==void 0&&(d=p.movementValue)}}return{id:a,initiative:c,movementValue:d}});return e.currentTiming==="movement"?r.sort((a,i)=>a.movementValue!==i.movementValue?i.movementValue-a.movementValue:i.initiative-a.initiative):r.sort((a,i)=>i.initiative-a.initiative),r.map(a=>a.id)}function j0(e,n){const{playerId:t,unitId:r}=n,a=e.teams[t]??0,i=e.map.startZones[a]??[],s=de(e,t).position,c=i.some(p=>p.row===s.row&&p.col===s.col)?s:i[Math.min(1,i.length-1)]??{row:0,col:0},d=de(e,t).facing,u=oc(t,r,c,d);return X(xe(e,t,u),`${t} 选择了机体 ${r}`)}function w0(e,n){const t=Ze.find(i=>i.id===n.mapId);if(!t)return e;const r={},a={};for(const i of e.playerIds){const s=e.teams[i]??0,c=t.startZones[s]??t.startZones[0]??[],d=a[s]??0;a[s]=d+1;const u=c[Math.min(d,c.length-1)]??{row:0,col:0},p=s===0?"S":"N";r[i]=oc(i,e.players[i].unitId,u,p)}return X({...e,map:t,players:r},`选择了地图 ${t.nameCn}`)}function S0(e,n){if(e.phase!=="setup")return e;const{playerId:t,position:r}=n,a=de(e,t);return xe(e,t,{...a,position:r})}function C0(e,n){if(e.phase!=="setup")return e;const{playerId:t,facing:r}=n,a=de(e,t);return xe(e,t,{...a,facing:r})}function N0(e){var r;const n={...e.players};let t={...e,phase:"draw",roundNumber:1};for(const a of e.playerIds){const i=k0(e.players[a]);n[a]=i;for(const s of i.auxiliary){const c=ee(s.defId);t=X(t,`${a} 补助卡【${(c==null?void 0:c.nameCn)??s.defId}】从卡组移至辅助区`)}}t={...t,players:n};for(const a of e.playerIds){const i=((r=q.find(s=>s.id===t.players[a].unitId))==null?void 0:r.evasion)??5;t=ic(t,{playerId:a,count:i})}return X({...t,phase:"pregame",plottingStep:null,activePlayer:e.playerIds[0],currentTiming:null},"=== 第 1 回合开始 ===")}function M0(e){if(e.phase!=="pregame")return e;const n=e.playerIds[0];return{...e,phase:"plotting",plottingStep:`transition_to_${n}`,activePlayer:n}}function ic(e,n){const t=de(e,n.playerId),r=[],a=[];let i=t.deck.filter(g=>!g.destroyed),s=t.discard.filter(g=>!g.destroyed);const c=s.length;let d=!1,u=e.shuffleSeed;for(;a.length<n.count;){if(i.length===0){if(s.length===0)break;const y=km([...s],u);i=y.shuffled,u=y.nextSeed,s=[],d=!0}const g=n.count-a.length,{drawn:h,remaining:f}=qh(i,g);i=f;for(const y of h){const _=ee(y.defId);_&&_.actionType==="auxiliary"?r.push(y):a.push(y)}}const p={...t,deck:i,discard:s,hand:[...t.hand,...a],auxiliary:[...t.auxiliary,...r]};let m=xe({...e,shuffleSeed:u},n.playerId,p);d&&(m=X(m,`${n.playerId} 的卡组耗尽，弃牌区（${c} 张）洗入卡组`)),m=X(m,`${n.playerId} 抽了 ${a.length} 张牌`);for(const g of r){const h=ee(g.defId),f=(h==null?void 0:h.nameCn)??g.defId;m=X(m,`  ↳ 辅助卡【${f}】自动放置到辅助区`)}return m}function T0(e,n){var p;const{playerId:t,seg:r,instanceId:a}=n,i=de(e,t),s=i.hand.find(m=>m.instanceId===a);if(!s)return e;const c=((p=ee(s.defId))==null?void 0:p.nameCn)??s.defId;e=$n(e,`PLOT_CARD: ${ue(t)} 配置【${c}】到阶段${r}`);const d=I0(i.hand,a),u={...i,hand:d,plotSeg1:r===1?s:i.plotSeg1,plotSeg2:r===2?s:i.plotSeg2};return xe(e,t,u)}function E0(e,n){const{playerId:t}=n,r=X(e,`${t} 完成了布局`),a=e.playerIds.indexOf(t);if(!(a===e.playerIds.length-1)){const u=e.playerIds[a+1];return{...r,activePlayer:u,plottingStep:`transition_to_${u}`}}const c={...Xs(r,1),activePlayer:e.playerIds[0],phase:"action_seg1",plottingStep:"complete",currentTiming:"movement",turnOrder:[]},d={...c,turnOrder:Go(c)};return X(d,`▸ ${Fo("movement")} — 行动顺序：${d.turnOrder.map(ue).join(" → ")}`)}function D0(e){const n=e.plottingStep;if(!n)return e;for(const t of e.playerIds)if(n===`transition_to_${t}`)return{...e,plottingStep:t,activePlayer:t};if(n==="transition"){const t=e.playerIds.indexOf(e.activePlayer);if(t>=0&&t<e.playerIds.length-1){const r=e.playerIds[t+1];return{...e,plottingStep:r,activePlayer:r}}}return e}function $0(e,n){const{playerId:t,to:r}=n;let a=de(e,t);const i=a.position;e=$n(e,`MOVE_UNIT: ${ue(t)} (${i.row},${i.col})→(${r.row},${r.col}) 阶段=${e.phase} 时机=${e.currentTiming}`);const s=e.map,c=e.playerIds.filter(h=>h!==t&&!e.players[h].isDefeated).map(h=>de(e,h).position);if(c.some(h=>se(h,r)))return X(e,`${ue(t)} 移动无效：目标位置 (${r.row}, ${r.col}) 已被其他机体占据`);const d=n.path??m0(s,i,r,c);function u(h,f){const y=f.row-h.row,_=f.col-h.col;return Math.abs(y)>=Math.abs(_)?y<0?"N":"S":_>0?"E":"W"}let p=e;if(d&&d.length>0){let h=r,f=!1;for(const y of d){const _=p.mines.filter(v=>v.ownerId!==t&&se(v.position,y));if(_.length>0){h=y,f=!0,a={...a,position:h},p=xe(p,t,a),p=X(p,`${t} 移动途经 (${y.row}, ${y.col})，触发了机雷！`);for(const v of _){p=X(p,`机雷爆炸，对 ${ue(t)} 造成 ${v.damage} 点伤害！`);const x=Qn(a,v.damage,ee,ue(t));for(const b of x.log)p=X(p,b);a=x.player,p=xe(p,t,a),p={...p,mines:p.mines.filter(b=>b.id!==v.id)},p={...p,lastDamageContext:{attackerId:v.ownerId,targetId:t,weaponName:"机雷"}}}break}}if(!f){const y=n.finalFacing??u(i,r);a={...a,position:r,facing:y},p=xe(p,t,a),p=X(p,`${t} 移动到 (${r.row}, ${r.col})，机头朝${y}`)}return cn(p)}const m=n.finalFacing??u(i,r),g={...a,position:r,facing:m};return X(xe(e,t,g),`${t} 移动到 (${r.row}, ${r.col})，机头朝${m}`)}function A0(e,n){const{playerId:t,to:r,damage:a}=n,i={id:`mine-${Date.now()}-${Math.random().toString(36).substring(2,9)}`,ownerId:t,position:r,damage:a};let s={...e,mines:[...e.mines,i]};return s=X(s,`${t} 在 (${r.row}, ${r.col}) 部署了机雷`),s}function jd(e,n,t){var b,j,T;const{attackerId:r,targetId:a}=n,i=e.phase==="action_seg1"?1:2,s=de(e,r),c=de(e,a);e=$n(e,`RESOLVE_${t.toUpperCase()}: ${ue(r)}(${s.position.row},${s.position.col},${s.facing})→${ue(a)}(${c.position.row},${c.position.col},${c.facing}) seg=${i}`);const d=rc(s,c,i,t,e.map,ee),p=ha(s,i,ee)>0?r:void 0;if(!d.canAttack)return X(e,`${r} 攻击无效：${d.reason}`);const m=((b=q.find($=>$.id===s.unitId))==null?void 0:b.nameCn)??r,g=((j=q.find($=>$.id===c.unitId))==null?void 0:j.nameCn)??a,h=((T=d.card)==null?void 0:T.nameCn)??"???",f=t==="ranged"?"射击":"近战",y=Zs(c,i,ee),_=Math.max(0,d.damage-y),v=y>0?` (装甲减伤 -${y}，实际 ${_})`:"";let x=X(e,`${m} 对 ${g} 发动${f}【${h}】→ 造成 ${d.damage} 点伤害${v}`);return x={...x,lastDamageContext:{attackerId:r,targetId:a,weaponName:h}},Wr(x,a,_,t,p)}function Wr(e,n,t,r,a){if(t<=0)return cn(e);const i=de(e,n),s=Et(i);if(s.length===0)return cn(e);if(r!=="ranged"){const c=i.deck.filter(p=>!p.destroyed).length,d=i.discard.filter(p=>!p.destroyed).length;if(!(c===0&&d===0)){let p=e,m=t;const g=Math.min(m,c);if(g>0){const{player:h,log:f}=Qn(de(p,n),g,ee,ue(n));for(const y of f)p=X(p,y);p=xe(p,n,h),m-=g}if(m>0&&d>0){const h=de(p,n),f=h.discard.filter(j=>!j.destroyed),y=h.discard.filter(j=>j.destroyed),{shuffled:_,nextSeed:v}=km(f,p.shuffleSeed);p={...p,shuffleSeed:v};const x={...h,deck:[...h.deck,..._],discard:y};p=xe(p,n,x),p=X(p,`${ue(n)} 的卡组耗尽，弃牌区（${f.length} 张）洗入卡组`);const b=Math.min(m,f.length);if(b>0){const{player:j,log:T}=Qn(de(p,n),b,ee,ue(n));for(const $ of T)p=X(p,$);p=xe(p,n,j),m-=b}}if(m>0){const h=de(p,n),f=Et(h);if(f.length===0)return cn(p);if(f.length<=m){const{player:y,log:_}=Qn(h,m,ee,ue(n));for(const v of _)p=X(p,v);return p=xe(p,n,y),cn(p)}return p=X(p,"牌组与弃牌区已耗尽，切换为防方自选伤害模式"),{...p,pendingDamage:{targetId:n,remaining:m,selectedInstanceIds:[],destroyedBombCount:0,source:r,attackerId:a}}}return cn(p)}e=X(e,`牌组与弃牌区已耗尽，本次${r==="charge"?"突击":"近战"}伤害切换为防方自选模式`)}if(s.length<=t){const{player:c,log:d}=Qn(i,t,ee,ue(n));let u=e;for(const p of d)u=X(u,p);return u=xe(u,n,c),cn(u)}if(r==="ranged"){const c=Ca(i).length,d=Math.min(t,c),u=t-d;if(d<=0){const{player:p,log:m}=Qn(i,t,ee,ue(n));let g=e;for(const h of m)g=X(g,h);return g=xe(g,n,p),cn(g)}return{...e,pendingDamage:{targetId:n,remaining:d,selectedInstanceIds:[],destroyedBombCount:0,source:r,attackerId:a,deckAutoCount:u}}}return{...e,pendingDamage:{targetId:n,remaining:t,selectedInstanceIds:[],destroyedBombCount:0,source:r,attackerId:a}}}function V0(e,n){var v;const{attackerId:t,targetId:r}=n,a=e.phase==="action_seg1"?1:2,i=de(e,t),s=de(e,r);e=$n(e,`RESOLVE_CHARGE: ${ue(t)}(${i.position.row},${i.position.col},${i.facing})→${ue(r)}(${s.position.row},${s.position.col},${s.facing}) seg=${a}`);const c=q.find(x=>x.id===i.unitId),d=q.find(x=>x.id===s.unitId),u=Bo(i,s,a,e.map,c,d,ee);if(!u.canAttack)return X(e,`${t} 突击无效：${u.reason}`);const p=c.nameCn,m=d.nameCn,g=((v=u.card)==null?void 0:v.nameCn)??"突击";let h=e;if(u.chargeDestination&&(u.chargeDestination.row!==i.position.row||u.chargeDestination.col!==i.position.col)){const x=u.chargeDestination,b={...i,position:x};h=xe(h,t,b),h=X(h,`${p} 发动突击冲锋，移动至 (${x.row}, ${x.col})`)}const f=Zs(s,a,ee),y=Math.max(0,u.damage-f),_=f>0?` (装甲减伤 -${f}，实际 ${y})`:"";if(h=X(h,`${p} 对 ${m} 发动${g}【突击值 ${c.assault}】→ 对目标造成 ${u.damage} 点近战伤害${_}；自机承受反伤 ${u.counterDamage} 点`),u.counterDamage>0){const x=Zs(de(h,t),a,ee),b=Math.max(0,u.counterDamage-x);if(b>0){h={...h,pendingFollowUpDamage:{targetId:t,amount:b,source:"charge",attackerId:r,weaponName:"突击反伤"}},h={...h,lastDamageContext:{attackerId:t,targetId:r,weaponName:g}};const j=Wr(h,r,y,"charge");if(!j.pendingDamage){if(j.phase==="game_over")return j;const $={...{...j,pendingFollowUpDamage:void 0},lastDamageContext:{attackerId:r,targetId:t,weaponName:"突击反伤"}};return Wr($,t,b,"charge")}return j}else x>0&&(h=X(h,`  [反伤] ${p} 装甲完全吸收了反伤`))}return h={...h,lastDamageContext:{attackerId:t,targetId:r,weaponName:g}},Wr(h,r,y,"charge")}function Uo(e){if(!e.pendingFollowUpDamage||e.phase==="game_over")return e;const{targetId:n,amount:t,source:r,attackerId:a,weaponName:i}=e.pendingFollowUpDamage;let s={...e,pendingFollowUpDamage:void 0};return a&&i&&(s={...s,lastDamageContext:{attackerId:a,targetId:n,weaponName:i}}),Wr(s,n,t,r,a)}function z0(e,n){const t=e.pendingDamage;if(!t)return e;const{playerId:r,instanceId:a}=n,i=t.selectedInstanceIds.length===0,s=!!t.attackerId&&i&&!t.attackerDesignatedCardId,c=s?t.attackerId:t.targetId;if(r!==c)return e;const d=de(e,t.targetId),u=Et(d).find(x=>x.instanceId===a&&!x.destroyed);if(!u||t.selectedInstanceIds.includes(a))return e;if(t.source==="ranged"){const x=Ca(d);if(d.deck.some(j=>j.instanceId===a&&!j.destroyed)&&x.length>0)return e}const{player:p}=ac(d,u);let m=xe(e,t.targetId,p);const g=ee(u.defId),h=(g==null?void 0:g.nameCn)??u.defId,f=g!=null&&g.hasBombIcon?"【💣】":"";m=X(m,`  ▶ ${h} 被摧毁${f}`);let y=t.remaining-1;const _=(t.destroyedBombCount??0)+(g!=null&&g.hasBombIcon?1:0);if(y<=0){if(m={...m,pendingDamage:null},t.deckAutoCount&&t.deckAutoCount>0){const x=de(m,t.targetId),{player:b,log:j}=Qn(x,t.deckAutoCount,ee,ue(t.targetId));for(const T of j)m=X(m,T);m=xe(m,t.targetId,b)}if(_>0){const x=de(m,t.targetId);m=X(m,`  ─── 誘爆检查（${_}张炸弹卡被破坏）───`);const{player:b,log:j}=Ys(x,_,ee,ue(t.targetId));for(const T of j)m=X(m,T);m=xe(m,t.targetId,b)}return m=cn(m),Uo(m)}if(Et(de(m,t.targetId)).length===0){if(m={...m,pendingDamage:null},_>0){const x=de(m,t.targetId);m=X(m,`  ─── 誘爆检查（${_}张炸弹卡被破坏）───`);const{player:b,log:j}=Ys(x,_,ee,ue(t.targetId));for(const T of j)m=X(m,T);m=xe(m,t.targetId,b)}return m=cn(m),Uo(m)}return m={...m,pendingDamage:{...t,remaining:y,selectedInstanceIds:[...t.selectedInstanceIds,a],destroyedBombCount:_,attackerDesignatedCardId:s?a:t.attackerDesignatedCardId}},m}function P0(e,n){const t=e.pendingDamage;if(!t)return e;const r=t.selectedInstanceIds.length===0,i=!!t.attackerId&&r&&!t.attackerDesignatedCardId?t.attackerId:t.targetId;if(n.playerId!==i)return e;const s=t.remaining+(t.deckAutoCount??0);if(s>0){const d=de(e,t.targetId),{player:u,log:p}=Qn(d,s,ee,ue(t.targetId));let m=e;for(const g of p)m=X(m,g);return m=xe(m,t.targetId,u),m={...m,pendingDamage:null},m=cn(m),Uo(m)}let c={...e,pendingDamage:null};return Uo(c)}function wd(e){const n=["movement","ranged","melee","special"],t=n.indexOf(e.currentTiming);if(t===-1){console.warn("[GameReducer] Invalid currentTiming:",e.currentTiming);const a=$n(e,`ADVANCE_TIMING: currentTiming 无效(${e.currentTiming})，强制推进阶段`);return fn(a,{type:"ADVANCE_PHASE"})}if(t<n.length-1){const a=n[t+1],i={...e,currentTiming:a},s={...i,turnOrder:Go(i)};return X(s,`▸ ${Fo(a)} — 行动顺序：${s.turnOrder.map(ue).join(" → ")}`)}const r=$n(e,`ADVANCE_TIMING: ${e.phase}/${e.currentTiming} 时机全部完成，推进到下一阶段`);return fn(r,{type:"ADVANCE_PHASE"})}function L0(e){var t,r;const n=$n(e,`ADVANCE_PHASE: ${e.phase} → 推进`);switch(e.phase){case"draw":{const a=n.playerIds.find(i=>!n.players[i].isDefeated)??n.playerIds[0];return{...n,phase:"plotting",plottingStep:`transition_to_${a}`,activePlayer:a,currentTiming:null}}case"plotting":{const i={...Xs(n,1),phase:"action_seg1",plottingStep:"complete",currentTiming:"movement"};let c={...i,turnOrder:Go(i)};for(const d of c.playerIds){const u=c.players[d];if(u.isDefeated)continue;const p=u.plotSeg1?((t=ee(u.plotSeg1.defId))==null?void 0:t.nameCn)??u.plotSeg1.defId:"(空)",m=u.plotSeg2?((r=ee(u.plotSeg2.defId))==null?void 0:r.nameCn)??u.plotSeg2.defId:"(空)";c=$n(c,`${ue(d)} 配置: 阶段1=[${p}] 阶段2=[${m}] 位置=${u.position.row},${u.position.col} 朝向=${u.facing}`)}return X(c,`▸ ${Fo("movement")} — 行动顺序：${c.turnOrder.map(ue).join(" → ")}`)}case"action_seg1":{const i={...Xs(n,2),phase:"action_seg2",currentTiming:"movement"},s={...i,turnOrder:Go(i)};return X(s,`▸ ${Fo("movement")} — 行动顺序：${s.turnOrder.map(ue).join(" → ")}`)}case"action_seg2":return R0(n);default:return n}}function R0(e){let n=$n(e,`CLEANUP: 第${e.roundNumber}回合结束`);for(const c of e.playerIds){const d=e.players[c];n=$n(n,`  ${ue(c)}: 位置=(${d.position.row},${d.position.col}) 朝向=${d.facing} 手牌=${d.hand.length} 牌组=${d.deck.filter(u=>!u.destroyed).length} 弃牌=${d.discard.length} ${d.isDefeated?"已击破":"存活"}`)}e=n;const t=(c,d)=>!d||d.destroyed?c:{...c,discard:[...c.discard,d]},r={...e.players};for(const c of e.playerIds){let d=t(e.players[c],e.players[c].plotSeg1);d=t(d,d.plotSeg2),d={...d,plotSeg1:null,plotSeg2:null},d={...d,discard:[...d.discard,...d.hand.filter(u=>!u.destroyed)],hand:[]},r[c]=d}const a={...e,players:r,phase:"cleanup",currentTiming:null},i=X(a,`--- 第 ${e.roundNumber} 回合结束 ---`),s=cn(i);return s.phase==="game_over"?s:O0(s)}function O0(e){var a;const n=e.roundNumber+1;let t=X({...e,phase:"draw",roundNumber:n},`=== 第 ${n} 回合开始 ===`);for(const i of e.playerIds){if(t.players[i].isDefeated)continue;const s=((a=q.find(c=>c.id===t.players[i].unitId))==null?void 0:a.evasion)??5;t=ic(t,{playerId:i,count:s})}const r=e.playerIds.find(i=>!t.players[i].isDefeated)??e.playerIds[0];return{...t,phase:"plotting",plottingStep:`transition_to_${r}`,activePlayer:r,currentTiming:null}}function cn(e){const n=s=>{const c=[...s.deck,...s.hand,...s.auxiliary,...s.discard,...s.plotSeg1?[s.plotSeg1]:[],...s.plotSeg2?[s.plotSeg2]:[]].filter(u=>!u.destroyed);return c.length<=3?!0:!c.some(u=>{const p=ee(u.defId);return p&&(p.actionType==="ranged"||p.actionType==="melee"||p.actionType==="charge")})},t={...e.players};let r=!1;for(const s of e.playerIds){if(t[s].isDefeated)continue;n(t[s])&&(t[s]={...t[s],isDefeated:!0},r=!0)}if(!r)return e;let a={...e,players:t};for(const s of e.playerIds)if(!e.players[s].isDefeated&&a.players[s].isDefeated){const c=q.find(m=>m.id===a.players[s].unitId),d=e.playerIds.indexOf(s),u=d>=0?`P${d+1}`:s,p=a.lastDamageContext;if(p&&p.targetId===s&&p.attackerId){const m=q.find(f=>{var y;return f.id===((y=a.players[p.attackerId])==null?void 0:y.unitId)}),g=e.playerIds.indexOf(p.attackerId),h=g>=0?`P${g+1}`:p.attackerId;a=X(a,`💀 ${u}[${(c==null?void 0:c.nameCn)??s}] 被 ${h}[${(m==null?void 0:m.nameCn)??p.attackerId}] 以【${p.weaponName}】击毁！`)}else a=X(a,`💀 ${u}[${(c==null?void 0:c.nameCn)??s}] 机体严重受损，宣告报废！`)}const i=new Set;for(const s of e.playerIds)a.players[s].isDefeated||i.add(a.teams[s]);if(i.size<=1){if(i.size===0)return X({...a,phase:"game_over"},"所有队伍同时全灭！平局！");const s=[...i][0],c=e.playerIds.filter(d=>a.teams[d]===s).map(d=>{const u=q.find(p=>p.id===a.players[d].unitId);return(u==null?void 0:u.nameCn)??d}).join("、");return X({...a,phase:"game_over"},`队伍${s+1}（${c}）获胜！`)}return a}function K0(e,n){if(e.currentTiming!=="melee")return e;const{playerId:t,to:r}=n,a=de(e,t),i=e.playerIds.filter(p=>p!==t).map(p=>de(e,p).position);if(!jn(a,ee,"melee").moveSensor)return X(e,`${t} 移动传感器未激活（需要辅助区中有≥2张）`);if(!Cm(e.map,a.position,i).some(p=>se(p,r)))return X(e,`${t} 移动传感器目标格不在有效范围内`);const d={...a,position:r};let u=xe(e,t,d);return u=X(u,`【辅助】${t} 移动传感器：向 (${r.row}, ${r.col}) 移动1格`),u}function J0(e,n){const{playerId:t,facing:r}=n,a=de(e,t),i=q.find(d=>d.id===a.unitId),s=(i==null?void 0:i.nameCn)??t;let c=xe(e,t,{...a,facing:r});return c=X(c,`${s} 调整机头朝向至【${r}】`),c}function fn(e,n){switch(n.type){case"SELECT_UNIT":return j0(e,n);case"SELECT_MAP":return w0(e,n);case"CONFIRM_SETUP":return N0(e);case"START_PLOTTING":return M0(e);case"SET_SPAWN_POSITION":return S0(e,n);case"SET_SPAWN_FACING":return C0(e,n);case"DRAW_CARDS":return ic(e,n);case"PLOT_CARD":return T0(e,n);case"CONFIRM_PLOT":return E0(e,n);case"ADVANCE_PLOT_STEP":return D0(e);case"MOVE_UNIT":return $0(e,n);case"ADJUST_FACING":return J0(e,n);case"ADVANCE_TIMING":return wd(e);case"ADVANCE_PHASE":return L0(e);case"SKIP_ACTION":return wd(e);case"RESET_GAME":return Nm(n.playerCount??2,n.teamCount??2);case"LOAD_GAME":return n.state;case"ADD_LOG":return X(e,n.message);case"RESOLVE_RANGED":return jd(e,n,"ranged");case"RESOLVE_MELEE":return jd(e,n,"melee");case"RESOLVE_CHARGE":return V0(e,n);case"PLACE_MINE":return A0(e,n);case"SELECT_DAMAGE_CARD":return z0(e,n);case"CONFIRM_DAMAGE_SELECTION":return P0(e,n);case"MELEE_SENSOR_MOVE":return K0(e,n);default:return e}}class B0{constructor(){en(this,"ctx",null);en(this,"_enabled",!0);en(this,"_volume",.5)}init(){this.ctx||(this.ctx=new AudioContext),this.ctx.state==="suspended"&&this.ctx.resume()}get enabled(){return this._enabled}set enabled(n){this._enabled=n}get volume(){return this._volume}set volume(n){this._volume=Math.max(0,Math.min(1,n))}ensure(){return!this._enabled||!this.ctx?null:(this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx)}makeGain(n,t){const r=n.createGain();return r.gain.value=t*this._volume,r.connect(n.destination),r}noiseBuffer(n,t){const r=Math.floor(n.sampleRate*t),a=n.createBuffer(1,r,n.sampleRate),i=a.getChannelData(0);for(let s=0;s<r;s++)i[s]=Math.random()*2-1;return a}cardFlip(){const n=this.ensure();if(!n)return;const t=n.currentTime,r=n.createBufferSource();r.buffer=this.noiseBuffer(n,.06);const a=n.createBiquadFilter();a.type="highpass",a.frequency.value=3e3;const i=this.makeGain(n,.25);i.gain.setValueAtTime(.25*this._volume,t),i.gain.exponentialRampToValueAtTime(.001,t+.05),r.connect(a),a.connect(i),r.start(t),r.stop(t+.06)}footstep(){const n=this.ensure();if(!n)return;const t=n.currentTime,r=n.createOscillator();r.type="sine",r.frequency.setValueAtTime(150,t),r.frequency.exponentialRampToValueAtTime(60,t+.05);const a=this.makeGain(n,.2);a.gain.setValueAtTime(.2*this._volume,t),a.gain.exponentialRampToValueAtTime(.001,t+.08),r.connect(a),r.start(t),r.stop(t+.08);const i=n.createBufferSource();i.buffer=this.noiseBuffer(n,.03);const s=n.createBiquadFilter();s.type="bandpass",s.frequency.value=800,s.Q.value=2;const c=this.makeGain(n,.1);c.gain.setValueAtTime(.1*this._volume,t),c.gain.exponentialRampToValueAtTime(.001,t+.03),i.connect(s),s.connect(c),i.start(t),i.stop(t+.03)}weaponFire(){const n=this.ensure();if(!n)return;const t=n.currentTime,r=n.createBufferSource();r.buffer=this.noiseBuffer(n,.15);const a=n.createBiquadFilter();a.type="bandpass",a.frequency.setValueAtTime(1200,t),a.frequency.exponentialRampToValueAtTime(400,t+.12),a.Q.value=3;const i=this.makeGain(n,.3);i.gain.setValueAtTime(.3*this._volume,t),i.gain.exponentialRampToValueAtTime(.001,t+.15),r.connect(a),a.connect(i),r.start(t),r.stop(t+.15);const s=n.createOscillator();s.type="sawtooth",s.frequency.setValueAtTime(800,t),s.frequency.exponentialRampToValueAtTime(200,t+.12);const c=this.makeGain(n,.15);c.gain.setValueAtTime(.15*this._volume,t),c.gain.exponentialRampToValueAtTime(.001,t+.12),s.connect(c),s.start(t),s.stop(t+.12)}metalImpact(){const n=this.ensure();if(!n)return;const t=n.currentTime,r=[200,340];for(const s of r){const c=n.createOscillator();c.type="sine",c.frequency.value=s;const d=this.makeGain(n,.2);d.gain.setValueAtTime(.2*this._volume,t),d.gain.exponentialRampToValueAtTime(.001,t+.25),c.connect(d),c.start(t),c.stop(t+.25)}const a=n.createBufferSource();a.buffer=this.noiseBuffer(n,.02);const i=this.makeGain(n,.25);i.gain.setValueAtTime(.25*this._volume,t),i.gain.exponentialRampToValueAtTime(.001,t+.02),a.connect(i),a.start(t),a.stop(t+.02)}explosion(){const n=this.ensure();if(!n)return;const t=n.currentTime,r=n.createOscillator();r.type="sine",r.frequency.setValueAtTime(60,t),r.frequency.exponentialRampToValueAtTime(30,t+.5);const a=this.makeGain(n,.35);a.gain.setValueAtTime(.35*this._volume,t),a.gain.setValueAtTime(.35*this._volume,t+.1),a.gain.exponentialRampToValueAtTime(.001,t+.5),r.connect(a),r.start(t),r.stop(t+.5);const i=n.createBufferSource();i.buffer=this.noiseBuffer(n,.4);const s=n.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(3e3,t),s.frequency.exponentialRampToValueAtTime(200,t+.35);const c=this.makeGain(n,.3);c.gain.setValueAtTime(.3*this._volume,t),c.gain.exponentialRampToValueAtTime(.001,t+.35),i.connect(s),s.connect(c),i.start(t),i.stop(t+.4)}cardShatter(){const n=this.ensure();if(!n)return;const t=n.currentTime;for(let r=0;r<5;r++){const a=t+r*.03,i=n.createBufferSource();i.buffer=this.noiseBuffer(n,.02);const s=n.createBiquadFilter();s.type="highpass",s.frequency.value=1e3+r*300;const c=this.makeGain(n,.2);c.gain.setValueAtTime(.2*this._volume,a),c.gain.exponentialRampToValueAtTime(.001,a+.02),i.connect(s),s.connect(c),i.start(a),i.stop(a+.02)}}mineBeep(){const n=this.ensure();if(!n)return;const t=n.currentTime,r=[600,800,1e3];for(let a=0;a<r.length;a++){const i=t+a*.1,s=n.createOscillator();s.type="sine",s.frequency.value=r[a];const c=this.makeGain(n,.15);c.gain.setValueAtTime(.15*this._volume,i),c.gain.setValueAtTime(.15*this._volume,i+.05),c.gain.exponentialRampToValueAtTime(.001,i+.08),s.connect(c),s.start(i),s.stop(i+.08)}}chargeRumble(){const n=this.ensure();if(!n)return;const t=n.currentTime,r=n.createOscillator();r.type="sawtooth",r.frequency.setValueAtTime(80,t),r.frequency.linearRampToValueAtTime(120,t+.3);const a=n.createOscillator();a.type="sine",a.frequency.value=15;const i=n.createGain();i.gain.value=.15*this._volume;const s=this.makeGain(n,.25);s.gain.setValueAtTime(.25*this._volume,t),s.gain.exponentialRampToValueAtTime(.001,t+.4),a.connect(i),i.connect(s.gain),r.connect(s),a.start(t),r.start(t),a.stop(t+.4),r.stop(t+.4)}uiBlip(){const n=this.ensure();if(!n)return;const t=n.currentTime,r=n.createOscillator();r.type="sine",r.frequency.value=880;const a=this.makeGain(n,.1);a.gain.setValueAtTime(.1*this._volume,t),a.gain.exponentialRampToValueAtTime(.001,t+.06),r.connect(a),r.start(t),r.stop(t+.06)}}const Ee=new B0,F0={move_step:200,card_draw:350,ranged_hit:400,melee_hit:350,charge_move:300,charge_hit:450,card_destroy:400,mine_explode:500,mine_place:300,screen_shake:300,damage_number:600,cleanup_discard:2500,batch_card_draw:1600,deck_reshuffle:800};function G0(e){return F0[e.type]??300}const Mm=w.createContext(null);function hi({children:e}){const[n,t]=w.useState(!1),[r,a]=w.useState(null),[i,s]=w.useState(()=>Object.fromEntries(ar.map(f=>[f,null]))),c=w.useRef([]),d=w.useRef(!1),u=w.useRef(!1),p=w.useRef((()=>{try{const f=localStorage.getItem("em_anim_speed");return f==="fast"?.5:f==="off"?0:1}catch{return 1}})()).current,m=w.useCallback(()=>{if(u.current||c.current.length===0){a(null),t(!1),s(Object.fromEntries(ar.map(_=>[_,null]))),d.current=!1,u.current=!1;return}const f=c.current.shift();a(f),f.type==="move_step"&&s(_=>({..._,[f.playerId]:{pos:f.to,facing:f.facing}})),U0(f);const y=p===0?0:G0(f)*p;y===0?m():setTimeout(()=>m(),y)},[p]),g=w.useCallback(f=>{if(f.length!==0&&p!==0&&(c.current.push(...f),!d.current)){d.current=!0,u.current=!1,t(!0);const y=f.find(_=>_.type==="move_step");y&&s(_=>({..._,[y.playerId]:{pos:y.from,facing:y.facing}})),setTimeout(()=>m(),16)}},[m,p]),h=w.useCallback(()=>{u.current=!0,c.current=[],a(null),t(!1),s(Object.fromEntries(ar.map(f=>[f,null]))),d.current=!1},[]);return o.jsx(Mm.Provider,{value:{isAnimating:n,currentEvent:r,animatedPositions:i,enqueueEvents:g,skipAnimation:h,speedMultiplier:p},children:e})}function Na(){const e=w.useContext(Mm);if(!e)throw new Error("useAnimation must be used inside <AnimationProvider>");return e}function U0(e){switch(e.type){case"card_draw":Ee.cardFlip();break;case"move_step":Ee.footstep();break;case"ranged_hit":Ee.weaponFire(),setTimeout(()=>Ee.metalImpact(),100);break;case"melee_hit":Ee.metalImpact();break;case"charge_move":Ee.chargeRumble();break;case"charge_hit":Ee.explosion(),setTimeout(()=>Ee.metalImpact(),80);break;case"card_destroy":e.isBomb?Ee.explosion():Ee.cardShatter();break;case"mine_explode":Ee.explosion();break;case"mine_place":Ee.mineBeep();break;case"cleanup_discard":case"batch_card_draw":Ee.cardFlip();break;case"deck_reshuffle":Ee.cardFlip(),setTimeout(()=>Ee.cardFlip(),200);break}}function H0(e,n){const{isAnimating:t,enqueueEvents:r}=Na();return w.useCallback(a=>{const i=a.type==="ADVANCE_TIMING"||a.type==="ADVANCE_PHASE"||a.type==="ADJUST_FACING"||a.type==="START_PLOTTING"||a.type==="SELECT_DAMAGE_CARD"||a.type==="CONFIRM_DAMAGE_SELECTION";if(t&&!i)return;const s=n.current,c=fn(s,a);e(a);const d=W0(s,c,a);d.length>0&&r(d)},[e,n,t,r])}function W0(e,n,t){switch(t.type){case"MOVE_UNIT":return Z0(e,n,t);case"RESOLVE_RANGED":return Sd(e,n,"ranged",t.attackerId,t.targetId);case"RESOLVE_MELEE":return Sd(e,n,"melee",t.attackerId,t.targetId);case"RESOLVE_CHARGE":return Y0(e,n,t.attackerId,t.targetId);case"DRAW_CARDS":return X0(e,n,t.playerId);case"ADVANCE_TIMING":return e.phase==="action_seg2"&&n.phase!=="action_seg2"?[Q0(e),...Cd(e,n,"player1"),...Cd(e,n,"player2")]:[];case"PLACE_MINE":return[{type:"mine_place",playerId:t.playerId,position:t.to}];case"SELECT_DAMAGE_CARD":return q0(e,n);default:return[]}}function Z0(e,n,t){const{playerId:r}=t,a=gn(e,r),i=gn(n,r),s=a.position;if(se(s,i.position))return[];const c=[],d=t.path&&t.path.length>0?t.path:[i.position];let u=s;for(const g of d){const h=Mt(g.row-u.row,g.col-u.col);if(c.push({type:"move_step",playerId:r,from:u,to:g,facing:h}),u=g,se(g,i.position))break}const p=e.mines.filter(g=>!n.mines.some(h=>h.id===g.id));for(const g of p)c.push({type:"mine_explode",position:g.position,damage:g.damage}),c.push({type:"screen_shake",intensity:"heavy"});const m=xi(e,n,r);return vi(c,r,m),c}function Sd(e,n,t,r,a){var p;const i=[],s=gn(e,a).position,c=xi(e,n,a),d=c.length;if(d===0&&!n.pendingDamage)return[];const u=d+(((p=n.pendingDamage)==null?void 0:p.remaining)??0);return i.push({type:t==="ranged"?"ranged_hit":"melee_hit",attackerId:r,targetId:a,damage:u,targetPos:s}),i.push({type:"screen_shake",intensity:t==="melee"?"medium":"light"}),u>0&&i.push({type:"damage_number",position:s,value:u}),vi(i,a,c),i}function Y0(e,n,t,r){var p;const a=[],i=gn(e,t),s=gn(n,t),c=gn(e,r).position;se(i.position,s.position)||(a.push({type:"charge_move",attackerId:t,from:i.position,to:s.position}),a.push({type:"move_step",playerId:t,from:i.position,to:s.position,facing:Mt(s.position.row-i.position.row,s.position.col-i.position.col)}));const d=xi(e,n,r),u=d.length+(((p=n.pendingDamage)==null?void 0:p.remaining)??0);return a.push({type:"charge_hit",attackerId:t,targetId:r,damage:u,targetPos:c}),a.push({type:"screen_shake",intensity:"heavy"}),u>0&&a.push({type:"damage_number",position:c,value:u}),vi(a,r,d),a}function X0(e,n,t){const r=[],a=gn(e,t),i=gn(n,t),s=new Set(a.hand.map(u=>u.instanceId)),c=i.hand.filter(u=>!s.has(u.instanceId));if(c.length>0){const u=a.deck.filter(g=>!g.destroyed).length,p=Math.min(c.length,u),m=c.length-p;p>0&&r.push({type:"batch_card_draw",playerId:t,count:p}),m>0&&(r.push({type:"deck_reshuffle",playerId:t}),r.push({type:"batch_card_draw",playerId:t,count:m}))}const d=new Set(a.auxiliary.map(u=>u.instanceId));for(const u of i.auxiliary)d.has(u.instanceId)||r.push({type:"card_draw",playerId:t,card:u,defId:u.defId,isAuxiliary:!0});return r}function Q0(e){function n(t){const r=[];for(const a of t.hand)a.destroyed||r.push(a);return t.plotSeg1&&!t.plotSeg1.destroyed&&r.push(t.plotSeg1),t.plotSeg2&&!t.plotSeg2.destroyed&&r.push(t.plotSeg2),r}return{type:"cleanup_discard",p1Cards:n(e.players.player1),p2Cards:n(e.players.player2)}}function Cd(e,n,t){const r=[],a=gn(e,t),i=gn(n,t),s=i.hand.length;if(s>0){const d=a.deck.filter(m=>!m.destroyed).length,u=Math.min(s,d),p=s-u;u>0&&r.push({type:"batch_card_draw",playerId:t,count:u}),p>0&&(r.push({type:"deck_reshuffle",playerId:t}),r.push({type:"batch_card_draw",playerId:t,count:p}))}const c=new Set(a.auxiliary.map(d=>d.instanceId));for(const d of i.auxiliary)c.has(d.instanceId)||r.push({type:"card_draw",playerId:t,card:d,defId:d.defId,isAuxiliary:!0});return r}function q0(e,n){const t=e.pendingDamage;if(!t)return[];const r=xi(e,n,t.targetId),a=[];return vi(a,t.targetId,r),a}function gn(e,n){return e.players[n]}function xi(e,n,t){const r=new Set(gn(e,t).destroyedCards.map(a=>a.instanceId));return gn(n,t).destroyedCards.filter(a=>!r.has(a.instanceId))}function vi(e,n,t){for(let r=0;r<t.length;r++){const a=t[r],i=ee(a.defId);e.push({type:"card_destroy",playerId:n,card:a,defId:a.defId,isBomb:(i==null?void 0:i.hasBombIcon)??!1,index:r,total:t.length})}}const ex={player1:!1,player2:!1,player1Difficulty:"hard",player2Difficulty:"hard",playerAI:{},playerDifficulty:{}};function Re(e,n){var t;return((t=e.playerAI)==null?void 0:t[n])!==void 0?e.playerAI[n]:n==="player1"?e.player1:n==="player2"?e.player2:!1}function Ma(e,n){var t;return((t=e.playerDifficulty)==null?void 0:t[n])!==void 0?e.playerDifficulty[n]:n==="player1"?e.player1Difficulty:n==="player2"?e.player2Difficulty:"hard"}function sc(e,n){const t=e.teams[n],r=e.players[n].position;let a=null,i=1/0;for(const s of e.playerIds){if(s===n||e.teams[s]===t||e.players[s].isDefeated)continue;const c=e.players[s].position,d=Math.abs(c.row-r.row)+Math.abs(c.col-r.col);d<i&&(i=d,a=s)}return a??e.playerIds.find(s=>s!==n&&!e.players[s].isDefeated&&e.teams[s]!==t)??e.playerIds.find(s=>s!==n)??n}function fr(e,n){return e.players[n]}function nx(e,n,t,r,a,i){if(!n)return 0;const s=Se(t.position,r.position);let c;switch(n.actionType){case"ranged":case"melee":case"charge":c=5+(n.damage??0);break;case"movement":c=2+(n.movementValue??0)*.5;break;case"aim":case"armor":c=2;break;case"mine":c=1.5+(n.damage??0)*.2;break;default:c=1}n.hasBombIcon&&(i?c+=5:c+=8);const u=Et(t).filter(p=>p.defId===e.defId&&!p.destroyed).length;if(u>=3?c-=3:u===2&&(c-=1.5),n.actionType==="movement"&&s>=4&&(c+=3),n.actionType==="ranged"){const p=n.rangeMin??1,m=n.rangeMax??6;s>=p&&s<=m&&(c+=4)}return(n.actionType==="melee"||n.actionType==="charge")&&s<=2&&(c+=4),c}function Pt(e,n,t,r,a,i){if(e.actionType!=="movement")return[];const s=jn(n,a,"movement"),c=(e.movementValue??0)+(s.wheel?2:0);if(c<=0)return[];const d=[t.position],u=gi(r,n.position,c,d,s,n.facing),p=[];for(const{pos:m}of u){const g=tc(r,n.position,n.facing,m,c,[t.position],s);g&&p.push({pos:m,facing:g.finalFacing,dist:Se(m,t.position)})}return p.sort((m,g)=>m.dist-g.dist),p}function tx(e,n,t,r,a,i){const s=Pt(e,t,r,a,i);if(s.length===0)return null;if(n.actionType==="melee")return s.find(c=>c.dist===1)??null;if(n.actionType==="ranged"){const c=n.rangeMin??1,d=n.rangeMax??6,u=n.rangeOptimal??Math.round((c+d)/2);let p=null,m=1/0;for(const g of s){if(g.dist<c||g.dist>d||!fa(a,g.pos,r.position)||!Dn(g.facing,g.pos,r.position))continue;const h=Math.abs(g.dist-u);h<m&&(m=h,p=g)}return p}return n.actionType==="charge"?s.find(c=>c.dist<=3)??null:null}function Zr(e,n,t,r,a,i,s){var u;let c=e.damage??0;if(e.actionType==="ranged"&&e.rangeOptimal!==void 0&&e.damageAttenuation!==void 0){const p=Math.max(0,t-e.rangeOptimal);c-=p*e.damageAttenuation}const d=(u=s.cells[n.row])==null?void 0:u[n.col];return(d==null?void 0:d.terrain)==="water"&&e.isEnergyWeapon&&(c-=1),Math.max(0,c)}function rx(e,n){const t=e.hand.filter(a=>!a.destroyed);if(t.length===0)return 0;const r=t.filter(a=>{const i=n(a.defId);return i&&i.actionType==="armor"}).length;return Math.min(1,r/t.length)}function Nd(e,n,t,r,a,i){var g,h;const s=Se(t.position,r.position),c=(g=a.cells[r.position.row])==null?void 0:g[r.position.col],d=(h=a.cells[t.position.row])==null?void 0:h[t.position.col],u=rx(r,i),p=f=>["ranged","melee","charge"].includes(f.actionType),m=(c==null?void 0:c.terrain)==="forest"?.85:1;if(e.actionType==="movement"&&p(n)){const f=tx(e,n,t,r,a,i);if(f)return Zr(n,f.pos,f.dist,2,!1,!1,a)*(1-u*.5)*m*3.5+2;const y=Pt(e,t,r,a,i),_=y.length>0?y[0].dist:s;return(s-_)*1.5+(n.damage??0)*.3}if(e.actionType==="aim"&&p(n)){let f=(n.damage??0)+1,y=!1;if(n.actionType==="ranged"){const v=n.rangeMin??1,x=n.rangeMax??6;if(y=s>=v&&s<=x&&fa(a,t.position,r.position)&&Dn(t.facing,t.position,r.position),y&&n.rangeOptimal&&n.damageAttenuation){const b=Math.max(0,s-n.rangeOptimal);f-=b*n.damageAttenuation}(d==null?void 0:d.terrain)==="water"&&n.isEnergyWeapon&&(f-=1)}else n.actionType==="melee"?y=s===1:n.actionType==="charge"&&(y=s<=3);f=Math.max(0,f);const _=f*(1-u*.5)*m;return y?_*4+3:_*.5}if(p(e)&&n.actionType==="movement"){let f=0;if(e.actionType==="ranged"){const v=e.rangeMin??1,x=e.rangeMax??6;s>=v&&s<=x&&fa(a,t.position,r.position)&&Dn(t.facing,t.position,r.position)?f=Zr(e,t.position,s,1,!1,!1,a)*(1-u*.5)*m*2.5:f=(e.damage??0)*.3}else e.actionType==="melee"?s===1?f=Zr(e,t.position,s,1,!1,!1,a)*(1-u*.5)*3:f=(e.damage??0)*.3:e.actionType==="charge"&&(f=s<=3?(e.damage??0)*2:(e.damage??0)*.3);const y=Pt(n,t,r,a,i),_=y.length>0?Math.max(0,s-y[0].dist)*1+1:.5;return f+_}if(p(e)&&n.actionType==="armor"){let f=Wa(e,s,t.position,t.facing,r.position,a,m,u,1);const y=s<=3?2.5:s<=5?1.5:.5;return f+y}if(e.actionType==="armor"&&p(n)){const f=s<=3?2.5:s<=5?1.5:.5;let y=Wa(n,s,t.position,t.facing,r.position,a,m,u,2);return f+y}if(e.actionType==="movement"&&n.actionType==="movement"){if(s<=3)return 1;const f=Pt(e,t,r,a,i),y=f.length>0?f[0].dist:s,_=s-y,v=n.movementValue??0;return(_+Math.min(v,y-1))*1.2+.5}if(p(e)&&p(n)){const f=Wa(e,s,t.position,t.facing,r.position,a,m,u,1),y=Wa(n,s,t.position,t.facing,r.position,a,m,u,2),_=f>1&&y>1;return f+y+(_?2:0)}if(e.actionType==="movement"&&n.actionType==="armor"){const f=Pt(e,t,r,a,i),y=f.length>0?f[0].dist:s;return(s-y)*1+(y<=3?2:.5)}if(e.actionType==="armor"&&n.actionType==="movement"){const f=s<=3?2:.5,y=Pt(n,t,r,a,i),_=y.length>0?y[0].dist:s;return f+(s-_)*1}if(e.actionType==="aim"&&!p(n))return .3+Za(n,s);if(e.actionType==="mine"||n.actionType==="mine"){const f=s<=3?1.5:.5,y=e.actionType==="mine"?n:e;return f+Za(y,s)}return Za(e,s)+Za(n,s)}function Wa(e,n,t,r,a,i,s,c,d){if(e.actionType==="ranged"){const u=e.rangeMin??1,p=e.rangeMax??6;return n>=u&&n<=p&&fa(i,t,a)&&Dn(r,t,a)?Zr(e,t,n,d,!1,!1,i)*(1-c*.5)*s*2.5:(e.damage??0)*.3}return e.actionType==="melee"?n===1?Zr(e,t,n,d,!1,!1,i)*(1-c*.5)*3:(e.damage??0)*.3:e.actionType==="charge"?n<=3?(e.damage??0)*2:(e.damage??0)*.3:0}function Za(e,n){switch(e.actionType){case"movement":return(e.movementValue??0)*.4+(n>3?1:.2);case"armor":return n<=3?2:n<=5?1:.3;case"aim":return .3;case"mine":return n<=3?1.5:.5;default:return .1}}function ax(e,n,t,r,a){const i=e.hand.filter(u=>!u.destroyed);if(i.length===0)return{seg1:null,seg2:null};if(i.length===1)return{seg1:i[0].instanceId,seg2:null};if(r==="easy"){const u=[...i].sort(()=>Math.random()-.5);return{seg1:u[0].instanceId,seg2:u[1].instanceId}}let s=-1/0,c=i[0].instanceId,d=i[1].instanceId;for(let u=0;u<i.length;u++){const p=i[u],m=t(p.defId);if(m)for(let g=0;g<i.length;g++){if(u===g)continue;const h=i[g],f=t(h.defId);if(!f)continue;const y=a?Nd(m,f,e,n,a,t):m.actionType!=="movement"&&f.actionType!=="movement"?Nd(m,f,e,n,{width:11,height:7,cells:[]},t):0;y>s&&(s=y,c=p.instanceId,d=h.instanceId)}}return{seg1:c,seg2:d}}function ox(e,n,t,r,a){const i=fr(e,n),s=sc(e,n),c=fr(e,s),d=jn(i,r,"movement"),u=t===1?i.plotSeg1:i.plotSeg2;if(!u)return null;const p=r(u.defId);if(!p||p.actionType!=="movement")return null;const m=(p.movementValue??0)+(d.wheel?2:0);if(m<=0)return null;const g=e.playerIds.filter(E=>E!==n&&!e.players[E].isDefeated).map(E=>e.players[E].position),h=gi(e.map,i.position,m,g,d,i.facing);if(h.length===0)return null;function f(E){const D=tc(e.map,i.position,i.facing,E,m,g,d);return D?{pos:E,path:D.path,finalFacing:D.finalFacing}:null}if(a==="easy"){if(Math.random()<.5)return null;const E=[...h].sort(()=>Math.random()-.5);for(const{pos:D}of E){const L=f(D);if(L)return L}return null}const _=(t===1?2:1)===1?i.plotSeg1:i.plotSeg2,v=_?r(_.defId):null;let x;if(!v)x=1;else if(v.actionType==="ranged"){const E=v.rangeMin??1,D=v.rangeMax??6;x=v.rangeOptimal??Math.round((E+D)/2)}else v.actionType==="melee"||v.actionType==="charge"?x=1:x=2;const b=Ca(c),j=[];for(const E of b){const D=r(E.defId);D&&D.actionType==="ranged"&&j.push({min:D.rangeMin??1,max:D.rangeMax??6})}const T=e.mines.filter(E=>E.ownerId!==n),$=[];for(const{pos:E}of h){const D=Se(E,c.position),L=-Math.abs(D-x)*3,O=T.some(N=>se(N.position,E))?-10:0,H=e.map.cells[E.row][E.col];let B=0;H.terrain==="forest"?B=1.5:H.terrain==="water"&&(B=-1);let U=0;for(const N of j)D<N.min||D>N.max?U+=.5:U-=.5;$.push({pos:E,quickScore:L+O+B+U})}$.sort((E,D)=>D.quickScore-E.quickScore);const k=$.slice(0,5);let S=-1/0,A=null;for(const{pos:E,quickScore:D}of k){const L=f(E);if(!L)continue;const M=Dn(L.finalFacing,E,c.position)?1:-1,O=D+M;O>S&&(S=O,A=L)}if(!A)for(const{pos:E}of $.slice(5)){const D=f(E);if(D){A=D;break}}return A}function ix(e,n,t,r,a,i){const s=fr(e,n),c=sc(e,n),d=fr(e,c),u=Pn(s,t,r,a);if(!u)return!1;if(u.actionType==="charge"&&r==="melee"&&i==="hard"){const m=q.find(x=>x.id===s.unitId),g=q.find(x=>x.id===d.unitId);if(!m||!g)return!1;const h=Bo(s,d,t,e.map,m,g,a);if(!h.canAttack)return!1;const f=h.counterDamage,y=kd(s),_=kd(d);return!(h.damage-f<0&&y<=f+2||y<=5&&f>=3||_<=3&&f>=2)}if(u.actionType==="charge"&&r==="melee"){const m=q.find(f=>f.id===s.unitId),g=q.find(f=>f.id===d.unitId);return!m||!g?!1:Bo(s,d,t,e.map,m,g,a).canAttack}return rc(s,d,t,r,e.map,a).canAttack}function sx(e,n,t,r,a=!1,i){const s=Ca(n);if(s.length===0)return null;if(r==="easy")return s[Math.floor(Math.random()*s.length)].instanceId;const c=i??n;let d=null,u=a?-1/0:1/0;for(const p of s){const m=t(p.defId),g=nx(p,m,n,c,t,a);(a?g>u:g<u)&&(u=g,d=p)}return(d==null?void 0:d.instanceId)??null}function lx(e,n,t,r,a){const i=fr(e,n),s=fr(e,sc(e,n)),c=t===1?i.plotSeg1:i.plotSeg2;if(!c)return null;const d=r(c.defId);if(!d||d.actionType!=="mine")return null;const u=e.mines.map(f=>f.position),p=[];for(let f=-1;f<=1;f++)for(let y=-1;y<=1;y++){if(f===0&&y===0)continue;const _=i.position.row+f,v=i.position.col+y;if(_<0||_>=e.map.height||v<0||v>=e.map.width)continue;const x={row:_,col:v};se(x,i.position)||se(x,s.position)||u.some(b=>se(b,x))||p.push(x)}if(p.length===0)return null;if(a==="easy")return p.sort((f,y)=>Se(f,s.position)-Se(y,s.position)),p[0];let m=-1/0,g=null;const h=Se(i.position,s.position);for(const f of p){let y=0;const _=Se(f,s.position);y+=Math.max(0,5-_);const v=f.row,x=f.col;Se(f,i.position)<h&&(y+=2),Dn(s.facing,s.position,f)&&Se(s.position,f)<=3&&(y+=1.5);const j=v===0||v===e.map.height-1,T=x===0||x===e.map.width-1;(j||T)&&(y+=1),j&&T&&(y+=.5);const $=e.map.cells[v][x];($.terrain==="forest"||$.terrain==="water")&&(y+=.5),y>m&&(m=y,g=f)}return g}const yi=1,cx=["slot_1","slot_2","slot_3","slot_4","slot_5"],dx=10,xa="em_saves_index",va="em_replays_index",lc=e=>`em_save_${e}`,Ho=e=>`em_replay_${e}`;function yr(e){try{const n=localStorage.getItem(e);return n?JSON.parse(n):[]}catch{return[]}}function bi(e,n){localStorage.setItem(e,JSON.stringify(n))}function Md(){return yr(xa).sort((n,t)=>t.timestamp-n.timestamp)}function Tm(e,n,t,r){const a={slotId:e,timestamp:Date.now(),roundNumber:n.roundNumber,phase:n.phase,player1Unit:n.players.player1.unitId,player2Unit:n.players.player2.unitId,mapId:n.map.id,mapName:n.map.nameCn,isAutoSave:r},i={version:yi,metadata:a,gameState:n,aiConfig:t};try{localStorage.setItem(lc(e),JSON.stringify(i))}catch{throw new Error("存储空间不足，无法保存存档")}const c=yr(xa).filter(d=>d.slotId!==e);return c.push(a),bi(xa,c),a}function ux(e){try{const n=localStorage.getItem(lc(e));if(!n)return null;const t=JSON.parse(n);if(!mx(t))return null;const r=t;return r.gameState.playerIds||(r.gameState.playerIds=["player1","player2"],r.gameState.teams={player1:0,player2:1},r.gameState.teamCount=2,r.gameState.shuffleSeed=r.metadata.timestamp),r}catch{return null}}function px(e){localStorage.removeItem(lc(e));const n=yr(xa);bi(xa,n.filter(t=>t.slotId!==e))}function mx(e){if(!e||typeof e!="object")return!1;const n=e;if(n.version!==yi||!n.gameState||typeof n.gameState!="object")return!1;const t=n.gameState;if(!t.phase||!t.players||!t.map)return!1;const r=t.players;return!(!r.player1||!r.player2||!n.metadata||typeof n.metadata!="object"||!n.aiConfig||typeof n.aiConfig!="object")}function Td(){return yr(va).sort((n,t)=>t.timestamp-n.timestamp)}function fx(e,n,t){const r=`${Date.now()}`,a={replayId:r,timestamp:Date.now(),totalRounds:e.roundNumber,totalActions:n.length,player1Unit:e.players.player1.unitId,player2Unit:e.players.player2.unitId,mapId:e.map.id,mapName:e.map.nameCn,winner:t},i={version:yi,metadata:a,initialState:e,actions:n};try{localStorage.setItem(Ho(r),JSON.stringify(i))}catch{throw new Error("存储空间不足，无法保存录像")}const s=yr(va);for(s.push(a),s.sort((c,d)=>c.timestamp-d.timestamp);s.length>dx;){const c=s.shift();localStorage.removeItem(Ho(c.replayId))}return bi(va,s),a}function Ed(e){try{const n=localStorage.getItem(Ho(e));if(!n)return null;const t=JSON.parse(n);if(!hx(t))return null;const r=t;return r.initialState.playerIds||(r.initialState.playerIds=["player1","player2"],r.initialState.teams={player1:0,player2:1},r.initialState.teamCount=2,r.initialState.shuffleSeed=r.metadata.timestamp),r}catch{return null}}function gx(e){localStorage.removeItem(Ho(e));const n=yr(va);bi(va,n.filter(t=>t.replayId!==e))}function hx(e){if(!e||typeof e!="object")return!1;const n=e;return!(n.version!==yi||!n.initialState||typeof n.initialState!="object"||!Array.isArray(n.actions)||!n.metadata||typeof n.metadata!="object")}function xx(e,n){let t=e.initialState,r=0;for(;r<e.actions.length&&!(t.roundNumber>=n);r++)t=fn(t,e.actions[r]);return{state:t,actionIndex:r}}const or={N:"↑北",S:"↓南",E:"→东",W:"←西"},Ya={setup:"配置",pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"行动阶段·段落1",action_seg2:"行动阶段·段落2",cleanup:"清理阶段",game_over:"对局结束"},vx={movement:"移动时序",ranged:"射击时序",melee:"近战时序",special:"特殊时序"},yx={movement:"移动",ranged:"射击",melee:"近战",charge:"突击",aim:"瞄准",armor:"装甲",mine:"机雷",special:"特殊",auxiliary:"辅助"};function Ln(e){var n;return((n=q.find(t=>t.id===e))==null?void 0:n.nameCn)??e}function Qs(e){const n=ee(e);if(!n)return e;const t=yx[n.actionType]??n.actionType;let r="";n.movementValue!=null&&(r=` 值${n.movementValue}`),n.damage!=null&&(r=` 伤害${n.damage}`,n.rangeMin!=null&&n.rangeMax!=null&&(r+=` 射程${n.rangeMin}-${n.rangeMax}`),n.rangeOptimal!=null&&(r+=` 最佳${n.rangeOptimal}`));const a=n.hasBombIcon?" [💣]":"",i=n.isKaiVariant?" [◆改]":"";return`${n.nameCn}(${t}${r}${a}${i})`}function qs(e){const n=Qs(e.defId);return e.destroyed?`${n}[已破坏]`:n}function Xa(e){return e.length===0?"(无)":e.map(n=>qs(n)).join(", ")}function Qa(e,n){const t=[],r=Ln(e.unitId),a=or[e.facing]??e.facing,i=e.deck.filter(d=>!d.destroyed).length,s=e.hand.filter(d=>!d.destroyed).length,c=e.auxiliary.filter(d=>!d.destroyed).length;if(t.push(`  ${n} [${r}]  位置(${e.position.row},${e.position.col}) 朝向${a}  败北=${e.isDefeated}`),t.push(`    牌库=${i}  手牌=${s}  辅助=${c}/${e.auxiliary.length}  弃牌=${e.discard.length}  破坏=${e.destroyedCards.length}  总存活=${i+s+c+e.discard.length+(e.plotSeg1&&!e.plotSeg1.destroyed?1:0)+(e.plotSeg2&&!e.plotSeg2.destroyed?1:0)}`),t.push(`    手牌: ${Xa(e.hand)}`),e.auxiliary.length>0&&t.push(`    辅助: ${Xa(e.auxiliary)}`),e.plotSeg1||e.plotSeg2){const d=e.plotSeg1?qs(e.plotSeg1):"—",u=e.plotSeg2?qs(e.plotSeg2):"—";t.push(`    布局: 段1=[${d}]  段2=[${u}]`)}return e.discard.length>0&&t.push(`    弃牌: ${Xa(e.discard)}`),e.destroyedCards.length>0&&t.push(`    破坏: ${Xa(e.destroyedCards)}`),t.join(`
`)}function bx(e,n){const t=a=>{const i=n.players[a],s=n.playerIds.indexOf(a);return`${s>=0?`P${s+1}`:a}[${i?Ln(i.unitId):a}]`},r=(a,i)=>{const s=n.players[i];return s?[...s.deck,...s.hand,...s.auxiliary,...s.discard,...s.destroyedCards,...s.plotSeg1?[s.plotSeg1]:[],...s.plotSeg2?[s.plotSeg2]:[]].find(d=>d.instanceId===a):void 0};switch(e.type){case"SELECT_UNIT":{const a=n.playerIds.indexOf(e.playerId);return`${a>=0?`P${a+1}`:e.playerId} 选择机体 ${Ln(e.unitId)}`}case"SELECT_MAP":return`选择地图 ${e.mapId}`;case"CONFIRM_SETUP":return"确认设置，开始对局";case"SET_SPAWN_POSITION":return`${t(e.playerId)} 设置出生点 (${e.position.row},${e.position.col})`;case"SET_SPAWN_FACING":return`${t(e.playerId)} 设置初始朝向 ${or[e.facing]??e.facing}`;case"START_PLOTTING":return"战前准备结束，进入布局阶段";case"DRAW_CARDS":return`${t(e.playerId)} 抽牌 ${e.count} 张`;case"PLOT_CARD":{const a=r(e.instanceId,e.playerId);return`${t(e.playerId)} 布局段落${e.seg}: ${a?Qs(a.defId):e.instanceId}`}case"CONFIRM_PLOT":return`${t(e.playerId)} 确认布局完成`;case"ADVANCE_PLOT_STEP":return"[系统] 布局步骤推进";case"MOVE_UNIT":{const a=n.players[e.playerId],i=a?`(${a.position.row},${a.position.col})`:"(?,?)",s=`(${e.to.row},${e.to.col})`,c=e.finalFacing?` 朝向→${or[e.finalFacing]??e.finalFacing}`:"",d=e.path?` 路径[${e.path.map(u=>`(${u.row},${u.col})`).join("→")}]`:"";return`${t(e.playerId)} 移动 ${i}→${s}${c}${d}`}case"ADJUST_FACING":return`${t(e.playerId)} 调整朝向→${or[e.facing]??e.facing}`;case"RESOLVE_RANGED":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动射击`;case"RESOLVE_MELEE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动近战`;case"RESOLVE_CHARGE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动突击`;case"PLACE_MINE":return`${t(e.playerId)} 在 (${e.to.row},${e.to.col}) 部署机雷 (伤害${e.damage})`;case"SELECT_DAMAGE_CARD":{const a=r(e.instanceId,e.playerId);return`${t(e.playerId)} 选择摧毁: ${a?Qs(a.defId):e.instanceId}`}case"CONFIRM_DAMAGE_SELECTION":return`${t(e.playerId)} 确认伤害结算`;case"SKIP_ACTION":return"[系统] 跳过行动";case"ADVANCE_TIMING":return"[系统] 推进时序";case"ADVANCE_PHASE":return"[系统] 推进阶段";case"MELEE_SENSOR_MOVE":return`${t(e.playerId)} 近战传感器移动至 (${e.to.row},${e.to.col})`;case"RESET_GAME":return"[系统] 重置游戏";case"LOAD_GAME":return"[系统] 加载存档";case"ADD_LOG":return`[系统] ${e.message}`;default:return`[未知] ${e.type}`}}function _x(e,n){const t=[],r="═".repeat(72),a="─".repeat(72);t.push(r),t.push("EMBRYO MACHINE — 对局分析日志"),t.push(r),t.push(`生成时间: ${new Date().toISOString()}`),t.push(`地图: ${e.map.nameCn} (${e.map.id}) ${e.map.width}×${e.map.height}`),t.push(`P1: ${Ln(e.players.player1.unitId)} (${e.players.player1.unitId})`),t.push(`P2: ${Ln(e.players.player2.unitId)} (${e.players.player2.unitId})`),t.push(`总操作数: ${n.length}`),t.push(""),t.push("[地图地形]");const i={plain:"平",forest:"森",rubble:"瓦",water:"水",highland:"高",sand:"砂"};let s="     ";for(let _=0;_<e.map.width;_++)s+=`  ${String(_).padStart(2)} `;t.push(s);for(let _=0;_<e.map.height;_++){let v=`  ${String(_).padStart(2)} `;for(let x=0;x<e.map.width;x++){const b=e.map.cells[_][x],j=i[b.terrain]??"?",T=b.elevation>0?String(b.elevation):" ";v+=` ${j}${T} `}t.push(v)}t.push("  地形: 平=平地 森=森林 瓦=瓦砾 水=水域 高=高地 砂=砂地  数字=海拔"),t.push(""),t.push("[初始状态]"),t.push(`  阶段: ${Ya[e.phase]??e.phase}  回合: ${e.roundNumber}`),t.push(Qa(e.players.player1,"P1")),t.push(Qa(e.players.player2,"P2")),e.mines.length>0&&t.push(`  机雷: ${e.mines.map(_=>`(${_.position.row},${_.position.col}) 所有者=${_.ownerId} 伤害=${_.damage}`).join("; ")}`),t.push("");let c=e,d=c.roundNumber,u=c.phase,p=c.currentTiming,m=0,g=c.log.length;for(let _=0;_<n.length;_++){const v=n[_],x=c;c=fn(c,v),m++,c.roundNumber!==d&&(t.push(""),t.push(r),t.push(`══ 第 ${c.roundNumber} 回合 ══`),t.push(r),d=c.roundNumber),c.phase!==u&&(t.push(""),t.push(a),t.push(`── ${Ya[c.phase]??c.phase} ──`),t.push(a),u=c.phase,p=c.currentTiming),c.currentTiming!==p&&c.currentTiming&&(t.push(""),t.push(`  ◆ ${vx[c.currentTiming]??c.currentTiming}  先攻顺序: [${c.turnOrder.join(", ")}]`),p=c.currentTiming);const b=bx(v,x);t.push(`  #${String(m).padStart(4,"0")}  ${b}`);const j=c.log.slice(g);for(const S of j)t.push(`         │ ${S}`);if(g=c.log.length,c.pendingDamage&&!x.pendingDamage){const S=c.pendingDamage;t.push(`         ├─ [交互伤害] 目标=${S.targetId} 剩余=${S.remaining} 来源=${S.source}${S.attackerId?` 攻方=${S.attackerId}(瞄准指定)`:""}`)}const T=c.phase!==x.phase,$=c.roundNumber!==x.roundNumber,k=c.phase==="game_over"&&x.phase!=="game_over";(T||$||k)&&(t.push(""),t.push(`  [状态快照 #${m} | ${Ya[c.phase]??c.phase}]`),t.push(Qa(c.players.player1,"P1")),t.push(Qa(c.players.player2,"P2")),c.mines.length>0&&t.push(`  机雷: ${c.mines.map(S=>`(${S.position.row},${S.position.col}) 所有者=${S.ownerId} 伤害=${S.damage}`).join("; ")}`))}t.push(""),t.push(r),t.push("══ 对局总结 ══"),t.push(r);const h=c,f=Dd(h.players.player1),y=Dd(h.players.player2);h.phase==="game_over"?h.players.player1.isDefeated&&h.players.player2.isDefeated?t.push("结果: 平局（双方同时击破）"):h.players.player1.isDefeated?t.push(`结果: P2[${Ln(h.players.player2.unitId)}] 获胜`):h.players.player2.isDefeated&&t.push(`结果: P1[${Ln(h.players.player1.unitId)}] 获胜`):t.push(`结果: 对局未结束 (当前阶段: ${Ya[h.phase]??h.phase})`),t.push(`最终回合: ${h.roundNumber}`),t.push(`总操作数: ${n.length}`),t.push(""),t.push(`P1[${Ln(h.players.player1.unitId)}] 最终状态:`),t.push(`  存活卡牌: ${f}  破坏: ${h.players.player1.destroyedCards.length}  败北: ${h.players.player1.isDefeated}`),t.push(`  位置: (${h.players.player1.position.row},${h.players.player1.position.col}) 朝向: ${or[h.players.player1.facing]}`),t.push(""),t.push(`P2[${Ln(h.players.player2.unitId)}] 最终状态:`),t.push(`  存活卡牌: ${y}  破坏: ${h.players.player2.destroyedCards.length}  败北: ${h.players.player2.isDefeated}`),t.push(`  位置: (${h.players.player2.position.row},${h.players.player2.position.col}) 朝向: ${or[h.players.player2.facing]}`),t.push(""),t.push(a),t.push("[完整引擎日志]"),t.push(a);for(let _=0;_<h.log.length;_++)t.push(`  ${String(_+1).padStart(4,"0")}  ${h.log[_]}`);return t.push(""),t.push(r),t.push("日志结束"),t.push(r),t.join(`
`)}function Dd(e){const n=t=>t.filter(r=>!r.destroyed).length;return n(e.deck)+n(e.hand)+n(e.auxiliary)+e.discard.length+(e.plotSeg1&&!e.plotSeg1.destroyed?1:0)+(e.plotSeg2&&!e.plotSeg2.destroyed?1:0)}const _i=w.createContext(null);function Em({children:e}){const[n,t]=w.useReducer(fn,void 0,Nm),[r,a]=w.useState(ex),[i,s]=w.useState(!0),[c,d]=w.useState(!1),u=w.useRef(n);u.current=n;const p=w.useRef([]),m=w.useRef(null),g=w.useRef(-1),h=w.useCallback(v=>{const x=u.current;if(v.type==="RESET_GAME"||v.type==="LOAD_GAME"){p.current=[],m.current=null,g.current=-1,t(v);return}if(v.type==="CONFIRM_SETUP"){const j=fn(x,v);p.current=[],m.current=j,t(v);return}p.current.push(v);const b=fn(x,v);if(t(v),i&&x.phase!=="draw"&&b.phase==="draw"&&b.roundNumber!==g.current){g.current=b.roundNumber;try{Tm("auto",b,r,!0)}catch{}}},[r,i]),f=H0(h,u),y=w.useCallback(v=>ee(v),[]),_=w.useCallback(()=>m.current?{initialState:m.current,actions:[...p.current]}:null,[]);return o.jsx(_i.Provider,{value:{state:n,dispatch:f,rawDispatch:h,getCard:y,aiConfig:r,setAIConfig:a,getReplayData:_,autoSaveEnabled:i,setAutoSaveEnabled:s,exposureMode:c,setExposureMode:d},children:e})}function Ne(){const e=w.useContext(_i);if(!e)throw new Error("useGame must be used inside <GameProvider>");return e}function Ta(){return Ne().state}const Ix={gameTitle:"Embryo Machine",setupSelectMap:"选择地图",statMovement:"移动力",statEvasion:"回避值",statAssault:"突击",statAssaultDef:"被突击",statInitiative:"先制值"},xt=Ix,Xi=["var(--color-accent)","#ff00c8","#00cc88","#ff8800","#6688ff","#cc44ff","#44dddd","#ff4466"],kx=[2,3,4,6,8];function jx(e){const n=[];for(let t=2;t<=e;t++)e%t===0&&n.push(t);return n}function wx({onNext:e,autoFill:n=!1}){const{state:t,dispatch:r,rawDispatch:a,setAIConfig:i,setExposureMode:s}=Ne(),c=w.useMemo(()=>d0(),[]),[d,u]=w.useState(c[0].id),[p,m]=w.useState(2),[g,h]=w.useState(2),[f,y]=w.useState({}),[_,v]=w.useState({}),[x,b]=w.useState({}),j=w.useMemo(()=>ar.slice(0,p),[p]),T=w.useMemo(()=>jx(p),[p]);w.useEffect(()=>{a({type:"RESET_GAME",playerCount:p,teamCount:g}),b({});const N=Math.ceil(p/g),z=c.filter(F=>{if(F.maxPlayers<p||F.maxTeams<g)return!1;for(let P=0;P<g;P++){const R=F.startZones[P];if(!R||R.length<N)return!1}return!0});z.length>0&&(u(z[0].id),r({type:"SELECT_MAP",mapId:z[0].id}))},[p,g]),w.useEffect(()=>{T.includes(g)||h(T[0])},[T,g]);function $(N,z){r({type:"SELECT_UNIT",playerId:N,unitId:z}),b(F=>({...F,[N]:!0}))}function k(N){N!==d&&(u(N),r({type:"SELECT_MAP",mapId:N}))}function S(N,z){y(F=>({...F,[N]:z}))}function A(N,z){v(F=>({...F,[N]:z}))}const E=j.map(N=>{var z;return((z=t.players[N])==null?void 0:z.unitId)??""}),D=E.every(N=>N!==""),L=new Set(E.filter(N=>N!=="")).size===E.filter(N=>N!=="").length,M=j.filter(N=>x[N]).map(N=>{var z;return((z=t.players[N])==null?void 0:z.unitId)??""}).filter(N=>N!==""),O=new Set(M).size===M.length,H=n?O:D&&L,B={};for(let N=0;N<j.length;N++){const z=N%g;B[z]||(B[z]=[]),B[z].push(j[N])}const U=w.useMemo(()=>c.filter(N=>{if(N.maxPlayers<p||N.maxTeams<g)return!1;const z=Math.ceil(p/g);for(let F=0;F<g;F++){const P=N.startZones[F];if(!P||P.length<z)return!1}return!0}),[p,g]);return w.useEffect(()=>{U.length>0&&!U.find(N=>N.id===d)&&k(U[0].id)},[U]),o.jsxs("div",{className:"setup-screen",children:[o.jsx("h1",{className:"setup-title",children:xt.gameTitle}),o.jsx("p",{className:"setup-subtitle",children:"选择地图与机体"}),o.jsxs("section",{className:"setup-section",children:[o.jsx("h2",{children:"游戏配置"}),o.jsxs("div",{className:"config-row",children:[o.jsxs("label",{className:"config-label",children:["玩家人数",o.jsx("select",{className:"config-select",value:p,onChange:N=>m(Number(N.target.value)),children:kx.map(N=>o.jsxs("option",{value:N,children:[N,"人"]},N))})]}),o.jsxs("label",{className:"config-label",children:["队伍数量",o.jsx("select",{className:"config-select",value:g,onChange:N=>h(Number(N.target.value)),children:T.map(N=>o.jsxs("option",{value:N,children:[N,"队 (",p/N,"人/队)"]},N))})]})]})]}),o.jsxs("section",{className:"setup-section",children:[o.jsx("h2",{children:xt.setupSelectMap}),o.jsx("div",{className:"map-list",children:U.map(N=>o.jsxs("button",{className:`map-btn ${d===N.id?"map-btn--active":""}`,onClick:()=>k(N.id),children:[N.nameCn," ",N.id.startsWith("custom_")?"✦":"",o.jsxs("span",{className:"map-btn__size",children:[N.height,"×",N.width," · ≤",N.maxPlayers,"人"]})]},N.id))})]}),o.jsx("div",{className:"setup-teams",children:Object.entries(B).map(([N,z])=>o.jsxs("div",{className:"setup-team",children:[o.jsxs("h3",{className:"team-header",style:{color:Xi[Number(N)*(p/g)]},children:["队伍 ",Number(N)+1]}),o.jsx("div",{className:"setup-players",children:z.map(F=>{var ne;const P=ar.indexOf(F),R=Xi[P%Xi.length],Z=((ne=t.players[F])==null?void 0:ne.unitId)??"",Q=E.filter((te,Y)=>Y!==j.indexOf(F)&&te);return o.jsxs("div",{className:"setup-player-col",children:[o.jsx(Sx,{label:`P${P+1}`,selectedUnit:Z,blockedUnits:Q,accentColor:R,onSelect:te=>$(F,te)}),o.jsxs("div",{className:"ai-control",children:[o.jsxs("label",{className:"ai-control__label",children:[o.jsx("input",{type:"checkbox",checked:f[F]??!1,onChange:te=>S(F,te.target.checked)}),"AI控制"]}),f[F]&&o.jsxs("select",{className:"ai-control__difficulty",value:_[F]??"hard",onChange:te=>A(F,te.target.value),children:[o.jsx("option",{value:"easy",children:"简单"}),o.jsx("option",{value:"hard",children:"困难"})]})]})]},F)})})]},N))}),o.jsx("button",{className:"start-btn",onClick:()=>{const N=new Set(j.filter(Y=>x[Y]).map(Y=>{var ce;return((ce=t.players[Y])==null?void 0:ce.unitId)??""}).filter(Y=>Y!=="")),F=[...q.map(Y=>Y.id).filter(Y=>!N.has(Y))];for(let Y=F.length-1;Y>0;Y--){const ce=Math.floor(Math.random()*(Y+1));[F[Y],F[ce]]=[F[ce],F[Y]]}const P={...f},R={..._};let Z=0;for(const Y of j)n&&!x[Y]&&Z<F.length&&(r({type:"SELECT_UNIT",playerId:Y,unitId:F[Z]}),Z++,P[Y]=!0,R[Y]="hard");const Q={},ne={};for(const Y of j)Q[Y]=P[Y]??!1,ne[Y]=R[Y]??"hard";i({player1:Q.player1??!1,player2:Q.player2??!1,player1Difficulty:ne.player1??"hard",player2Difficulty:ne.player2??"hard",playerAI:Q,playerDifficulty:ne}),j.every(Y=>Q[Y])&&s(!0),e()},disabled:!H,title:H?"":"请为所有玩家分别选择不同的机体",children:"下一步 →"}),!H&&o.jsx("p",{className:"setup-hint",children:n?"手动选择的机体之间不可重复":D?"每位玩家须选择不同的机体":"请为所有玩家各选择一台机体"}),o.jsx("style",{children:Mx})]})}function Sx({label:e,selectedUnit:n,blockedUnits:t,accentColor:r,onSelect:a}){return o.jsxs("div",{className:"unit-picker",children:[o.jsx("h2",{className:"unit-picker__title",style:{color:r},children:e}),o.jsx("div",{className:"unit-grid",children:q.map(i=>{const s=t.includes(i.id);return o.jsx(Cx,{unit:i,isSelected:i.id===n,isBlocked:s,accentColor:r,onSelect:()=>!s&&a(i.id)},i.id)})}),n&&o.jsx(Nx,{unit:q.find(i=>i.id===n),accentColor:r})]})}function Cx({unit:e,isSelected:n,isBlocked:t,accentColor:r,onSelect:a}){return o.jsxs("button",{className:`unit-card ${n?"unit-card--selected":""} ${t?"unit-card--blocked":""}`,onClick:a,disabled:t,title:t?"该机体已被其他玩家选择":e.nameCn,style:n?{borderColor:r,boxShadow:`0 0 8px ${r}55`}:{},children:[o.jsx("img",{src:`/assets/tokens/${e.tokenId}`,alt:e.nameCn,className:"unit-card__token",onError:i=>{i.target.style.opacity="0.3"}}),o.jsx("span",{className:"unit-card__name",children:e.nameCn}),o.jsxs("span",{className:"unit-card__init",children:["先制 ",e.initiative]})]})}function Nx({unit:e,accentColor:n}){return o.jsxs("div",{className:"unit-stats",children:[o.jsxs("div",{className:"unit-stats__name",children:[e.nameCn," ",o.jsxs("small",{children:["(",e.nameJa,")"]})]}),o.jsx("div",{className:"unit-stats__type",children:e.type}),o.jsxs("div",{className:"unit-stats__grid",children:[o.jsx(Dr,{label:xt.statMovement,value:e.movement,color:n}),o.jsx(Dr,{label:xt.statEvasion,value:e.evasion,color:n}),o.jsx(Dr,{label:xt.statAssault,value:e.assault,color:n}),o.jsx(Dr,{label:xt.statAssaultDef,value:e.assaultDef,color:n}),o.jsx(Dr,{label:xt.statInitiative,value:e.initiative,color:n})]})]})}function Dr({label:e,value:n,color:t}){return o.jsxs("div",{className:"stat",children:[o.jsx("span",{className:"stat__label",children:e}),o.jsx("span",{className:"stat__value",style:{color:t},children:n})]})}const Mx=`
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
`,$d=768;function Ii(){const[e,n]=w.useState(()=>typeof window<"u"&&window.innerWidth<=$d);return w.useEffect(()=>{const t=window.matchMedia(`(max-width: ${$d}px)`),r=a=>n(a.matches);return t.addEventListener("change",r),n(t.matches),()=>t.removeEventListener("change",r)},[]),e}const An=18;function ke({id:e,title:n,initialPos:t,width:r=300,height:a,minHeight:i=80,children:s,zIndex:c=10,defaultMinimized:d=!1,onFocus:u,siblingRects:p=[]}){const m=Ii(),[g,h]=w.useState(t),[f,y]=w.useState(d),_=w.useRef(null),v=w.useRef(!1);w.useEffect(()=>{v.current||(v.current=!0,h(t))},[]);const x=w.useCallback(b=>{if(m||b.button!==0)return;b.preventDefault(),u==null||u(e);const j=b.clientX-g.x,T=b.clientY-g.y,$=S=>{var B;let A=S.clientX-j,E=S.clientY-T;const D=window.innerWidth,L=window.innerHeight,M=(B=_.current)==null?void 0:B.getBoundingClientRect(),O=(M==null?void 0:M.width)??r,H=(M==null?void 0:M.height)??40;A<An&&(A=0),E<An&&(E=0),A+O>D-An&&(A=D-O),E+H>L-An&&(E=L-H);for(const U of p)Math.abs(A+O-U.left)<An&&(A=U.left-O),Math.abs(A-U.right)<An&&(A=U.right),Math.abs(E+H-U.top)<An&&(E=U.top-H),Math.abs(E-U.bottom)<An&&(E=U.bottom),Math.abs(E-U.top)<An&&(E=U.top);h({x:Math.max(0,A),y:Math.max(0,E)})},k=()=>{document.removeEventListener("mousemove",$),document.removeEventListener("mouseup",k)};document.addEventListener("mousemove",$),document.addEventListener("mouseup",k)},[e,g,u,p,r,m]);return m?o.jsxs("div",{ref:_,className:`dp dp--mobile ${f?"dp--min":""}`,onClick:()=>u==null?void 0:u(e),children:[o.jsxs("div",{className:"dp__bar dp__bar--mobile",onClick:()=>y(b=>!b),children:[o.jsx("span",{className:"dp__title",children:n}),o.jsx("span",{className:"dp__min-btn dp__min-btn--mobile",children:f?"▼":"▲"})]}),!f&&o.jsx("div",{className:"dp__body dp__body--mobile",children:s}),o.jsx("style",{children:Ad})]}):o.jsxs("div",{ref:_,className:`dp ${f?"dp--min":""}`,style:{left:g.x,top:g.y,width:r,height:f?void 0:a,minHeight:f?0:i,zIndex:c},onMouseDown:()=>u==null?void 0:u(e),children:[o.jsxs("div",{className:"dp__bar",onMouseDown:x,children:[o.jsx("span",{className:"dp__title",children:n}),o.jsx("button",{className:"dp__min-btn",onMouseDown:b=>b.stopPropagation(),onClick:()=>y(b=>!b),title:f?"展开":"最小化",children:f?"▢":"▬"})]}),!f&&o.jsx("div",{className:"dp__body",children:s}),o.jsx("style",{children:Ad})]})}const Ad=`
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
`,Yt=48,qa=["#00f0ff","#ff00c8","#00cc88","#ff8800","#6688ff","#cc44ff","#44dddd","#ff4466"],Tx=[{facing:"N",label:"↑N",title:"朝北"},{facing:"S",label:"↓S",title:"朝南"},{facing:"E",label:"→E",title:"朝东"},{facing:"W",label:"←W",title:"朝西"}],Vd=.25,Ex=2,zd=.1;function Dx({onBack:e}){const{state:n,dispatch:t}=Ne(),r=Ze.find(P=>P.id===n.map.id)??n.map,a=n.playerIds,i=r.width,s=r.height,c=w.useRef(null),[d,u]=w.useState({x:0,y:0,scale:1}),p=w.useRef(null),m=w.useRef(!1);w.useEffect(()=>{const P=c.current;if(!P)return;const R=P.clientWidth,Z=P.clientHeight,Q=i*Yt,ne=s*Yt;if(!R||!Z)return;const te=Math.min(R/Q,Z/ne),Y=Math.max(Vd,Math.min(1.2,te)),ce=(R-Q*Y)/2,ae=(Z-ne*Y)/2;u({x:ce,y:ae,scale:Y})},[i,s]),w.useEffect(()=>{const P=c.current;if(!P)return;const R=Z=>{Z.preventDefault();const Q=Z.deltaY<0?zd:-zd;u(ne=>({...ne,scale:Math.min(Ex,Math.max(Vd,ne.scale+Q))}))};return P.addEventListener("wheel",R,{passive:!1}),()=>P.removeEventListener("wheel",R)},[]);const g=w.useCallback(P=>{P.button===0&&(p.current={startX:P.clientX,startY:P.clientY,origX:d.x,origY:d.y},m.current=!1)},[d.x,d.y]),h=w.useCallback(P=>{if(!p.current)return;const R=P.clientX-p.current.startX,Z=P.clientY-p.current.startY;!m.current&&Math.sqrt(R*R+Z*Z)>5&&(m.current=!0),m.current&&u(Q=>({...Q,x:p.current.origX+R,y:p.current.origY+Z}))},[]),f=w.useCallback(()=>{p.current=null,m.current=!1},[]),y=w.useMemo(()=>Object.keys(r.startZones).map(Number).sort((P,R)=>P-R),[r]),[_,v]=w.useState(()=>{const P={};for(let R=0;R<n.teamCount;R++)P[R]=R;return P});w.useEffect(()=>{const P={};for(let R=0;R<n.teamCount;R++)P[R]=R;v(P)},[r.id,n.teamCount]);function x(P,R){v(Z=>{const Q=Object.entries(Z).find(([,te])=>te===R),ne={...Z,[P]:R};return Q&&(ne[Number(Q[0])]=Z[P]),ne})}const b=w.useMemo(()=>{const P=new Map;for(let R=0;R<n.teamCount;R++){const Z=_[R]??R,Q=r.startZones[Z];if(Q)for(const ne of Q){const te=`${ne.row},${ne.col}`,Y=P.get(te)??[];Y.push(R),P.set(te,Y)}}return P},[r,n.teamCount,_]),j=w.useMemo(()=>{const P={};for(const R of a){const Z=n.teams[R];P[Z]||(P[Z]=[]),P[Z].push(R)}return P},[a,n.teams]),[T,$]=w.useState(a[0]),[k,S]=w.useState(""),A=w.useMemo(()=>{for(const P of a){const R=n.players[P];if(!R)return!1;const Z=n.teams[P],Q=_[Z]??Z,ne=r.startZones[Q];if(!ne||!ne.some(Y=>Y.row===R.position.row&&Y.col===R.position.col))return!1}return!0},[a,n.players,n.teams,_,r]);function E(P,R){t({type:"SET_SPAWN_POSITION",playerId:P,position:R})}function D(P,R){t({type:"SET_SPAWN_FACING",playerId:P,facing:R})}function L(){A&&t({type:"CONFIRM_SETUP"})}function M(P){const R=a.indexOf(P);return qa[R%qa.length]}function O(P){var Z;const R=(Z=j[P])==null?void 0:Z[0];return R?M(R):qa[P%qa.length]}const H=w.useMemo(()=>{const P=new Map;for(const R of a){const Z=n.players[R];if(!Z)continue;const Q=q.find(Y=>Y.id===Z.unitId);if(!Q)continue;const ne=`${Z.position.row},${Z.position.col}`,te=P.get(ne)??[];te.push({pid:R,color:M(R),tokenId:Q.tokenId,name:Q.nameCn}),P.set(ne,te)}return P},[a,n.players]),{x:B,y:U,scale:N}=d,z=220,F=w.useMemo(()=>{const P={},te=Math.floor((window.innerHeight-56-60)/192);return a.forEach((Y,ce)=>{const ae=Math.floor(ce/te),Ie=ce%te;P[Y]={x:window.innerWidth-(z+16)*(ae+1),y:56+Ie*192}}),P},[a]);return o.jsxs("div",{className:"ssm__screen",children:[o.jsxs("div",{className:"ssm__topbar",children:[o.jsx("button",{className:"ssm__back-btn",onClick:e,children:"← 返回"}),o.jsx("span",{className:"ssm__title",children:"选择出击位置"}),o.jsxs("span",{className:"ssm__map-name",children:[r.nameCn," (",s,"×",i,")"]}),o.jsx("span",{style:{flex:1}}),o.jsx("button",{className:`ssm__start-btn${A?"":" ssm__start-btn--disabled"}`,onClick:L,disabled:!A,title:A?"开始战斗":"所有玩家必须先选择出击位置",children:"战斗开始 ▶"})]}),o.jsx("div",{className:"ssm__viewport",ref:c,onMouseDown:g,onMouseMove:h,onMouseUp:f,onMouseLeave:f,children:o.jsx("div",{className:"ssm__map-inner",style:{transform:`translate(${B}px, ${U}px) scale(${N})`,transformOrigin:"top left",display:"grid",gridTemplateColumns:`repeat(${i}, ${Yt}px)`,gridTemplateRows:`repeat(${s}, ${Yt}px)`},children:r.cells.flatMap((P,R)=>P.map((Z,Q)=>{const ne=nc(Z),te=`${R},${Q}`,Y=b.get(te)??[],ce=H.get(te)??[],ae=Y.length>0,Ie=Y.length>0?O(Y[0]):"",qe=n.teams[T],Ke=ae&&Y.includes(qe);let Je="ssm__cell";ae&&(Je+=" ssm__cell--zone"),Ke&&(Je+=" ssm__cell--placeable"),ce.length>0&&(Je+=" ssm__cell--selected");function Sn(ie){m.current||(ie.stopPropagation(),Ke&&E(T,{row:R,col:Q}))}return o.jsxs("div",{className:Je,style:{backgroundImage:`url("${ne}")`,...ae?{borderColor:Ie,boxShadow:ce.length>0?`inset 0 0 10px ${Ie}66, 0 0 6px ${Ie}44`:void 0}:{}},onClick:Ke?Sn:void 0,children:[ce.length===1&&o.jsx("div",{className:"ssm__token",children:o.jsx("img",{src:`/assets/tokens/${ce[0].tokenId}`,alt:ce[0].name,style:{boxShadow:`0 0 6px ${ce[0].color}`},onError:ie=>{ie.target.style.opacity="0.3"}})}),ce.length>1&&o.jsx("div",{className:"ssm__token ssm__token--multi",children:ce.map(ie=>o.jsx("img",{src:`/assets/tokens/${ie.tokenId}`,alt:ie.name,className:"ssm__token-img-sm",style:{boxShadow:`0 0 4px ${ie.color}`},onError:kr=>{kr.target.style.opacity="0.3"}},ie.pid))})]},te)}))})}),a.map((P,R)=>{var Sn;const Z=n.players[P],Q=q.find(ie=>ie.id===(Z==null?void 0:Z.unitId)),ne=M(P),te=k===P,Y=T===P,ce=n.teams[P],ae=((Sn=j[ce])==null?void 0:Sn[0])===P,Ie=_[ce]??ce,qe=_[ce]??ce,Je=(r.startZones[qe]??[]).some(ie=>ie.row===Z.position.row&&ie.col===Z.position.col);return o.jsx(ke,{id:`spawn-${P}`,title:`P${R+1} ${(Q==null?void 0:Q.nameCn)??"—"}`,initialPos:F[P]??{x:100,y:100},width:z,minHeight:60,zIndex:te?50:10+R,onFocus:()=>{S(P),$(P)},children:o.jsxs("div",{className:`ssm__player-card${Y?" ssm__player-card--active":""}`,style:{borderTop:`2px solid ${ne}`},onClick:()=>$(P),children:[o.jsxs("div",{className:"ssm__player-label",style:{color:ne},children:["P",R+1," ",Y?"◄ 放置中":""," ",Je?"✓":""]}),ae&&o.jsx("div",{className:"ssm__zone-select",children:o.jsxs("label",{children:["出击区域:",o.jsx("select",{value:Ie,onChange:ie=>x(ce,Number(ie.target.value)),onClick:ie=>ie.stopPropagation(),children:y.slice(0,r.maxTeams).map(ie=>o.jsxs("option",{value:ie,children:["区域 ",ie+1]},ie))})]})}),o.jsx("div",{className:"ssm__unit-name",children:(Q==null?void 0:Q.nameCn)??"—"}),o.jsxs("div",{className:"ssm__pos-display",children:["格 (",Z.position.row,", ",Z.position.col,")"]}),o.jsx("div",{className:"ssm__facing-grid",children:Tx.map(({facing:ie,label:kr,title:Wm})=>{const mc=Z.facing===ie;return o.jsx("button",{className:`ssm__facing-btn${mc?" ssm__facing-btn--active":""}`,style:mc?{borderColor:ne,color:ne}:void 0,title:Wm,onClick:()=>D(P,ie),children:kr},ie)})})]})},P)}),o.jsx("style",{children:$x})]})}const $x=`
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
`;function Ax({onStart:e,onOnlinePlay:n,onViewRules:t,onViewData:r,onLoadGame:a,onReplay:i,onMapEditor:s,exposureMode:c,onToggleExposure:d,autoFill:u,onToggleAutoFill:p}){return o.jsxs("div",{className:"hs-screen",children:[o.jsxs("div",{className:"hs-center",children:[o.jsx("h1",{className:"hs-title",children:"Embryo Machine"}),o.jsx("p",{className:"hs-subtitle",children:"战棋机甲对战游戏"}),o.jsx("div",{className:"hs-divider"}),o.jsx("button",{className:"hs-btn hs-btn--primary",onClick:e,children:"▶ 开始游戏"}),o.jsx("button",{className:"hs-btn hs-btn--online",onClick:n,children:"联机对战"}),o.jsx("button",{className:"hs-btn hs-btn--secondary",onClick:a,children:"📂 加载存档"}),o.jsx("button",{className:"hs-btn hs-btn--secondary",onClick:i,children:"🎬 回放录像"}),o.jsx("div",{className:"hs-divider hs-divider--sm"}),o.jsxs("div",{className:"hs-settings",children:[o.jsxs("label",{className:"hs-toggle",onClick:d,children:[o.jsx("span",{className:`hs-toggle__switch${c?" hs-toggle__switch--on":""}`,children:o.jsx("span",{className:"hs-toggle__knob"})}),o.jsx("span",{className:"hs-toggle__label",children:"暴露模式"}),o.jsx("span",{className:"hs-toggle__hint",children:c?"已开启：所有隐藏卡牌将显示正面":"关闭"})]}),o.jsxs("label",{className:"hs-toggle",onClick:p,children:[o.jsx("span",{className:`hs-toggle__switch${u?" hs-toggle__switch--on":""}`,children:o.jsx("span",{className:"hs-toggle__knob"})}),o.jsx("span",{className:"hs-toggle__label",children:"自动补位"}),o.jsx("span",{className:"hs-toggle__hint",children:u?"已开启：空位自动随机选机由AI控制":"关闭"})]})]}),o.jsx("div",{className:"hs-divider hs-divider--sm"}),o.jsxs("div",{className:"hs-links",children:[o.jsx("button",{className:"hs-link-btn",onClick:s,children:"🗺️ 地图编辑器"}),o.jsx("button",{className:"hs-link-btn",onClick:t,children:"📖 游戏规则"}),o.jsx("button",{className:"hs-link-btn",onClick:r,children:"📊 游戏资料"})]})]}),o.jsx("style",{children:Vx})]})}const Vx=`
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
`,Qi=.4,qi=2.5,Pd=.12,Ld=5;function zx(e=1){const[n,t]=w.useState({x:0,y:0,scale:e}),r=w.useRef(null),a=w.useRef({x:0,y:0}),i=w.useRef(!1),s=w.useRef(null),c=w.useRef({x:0,y:0,scale:e});w.useLayoutEffect(()=>{const h=s.current;if(!h)return;const f=h.querySelector(".game-board");if(!f)return;const y=h.clientWidth,_=h.clientHeight,v=f.offsetWidth,x=f.offsetHeight;if(!y||!_||!v||!x)return;const b=Math.min(y/v,_/x),j=Math.min(qi,Math.max(Qi,b)),T=(y-v*j)/2,$=(_-x*j)/2,k={x:T,y:$,scale:j};c.current=k,t(k)},[]),w.useEffect(()=>{const h=s.current;if(!h)return;const f=y=>{y.preventDefault();const _=y.deltaY<0?Pd:-Pd;t(v=>({...v,scale:Math.min(qi,Math.max(Qi,v.scale+_))}))};return h.addEventListener("wheel",f,{passive:!1}),()=>h.removeEventListener("wheel",f)},[]),w.useEffect(()=>{const h=s.current;if(!h)return;let f=0,y=0,_=0,v=!1,x={x:0,y:0};const b=(k,S)=>Math.sqrt((S.clientX-k.clientX)**2+(S.clientY-k.clientY)**2),j=k=>{k.touches.length===1?(f=k.touches[0].clientX,y=k.touches[0].clientY,x={x:f,y},v=!1):k.touches.length===2&&(k.preventDefault(),_=b(k.touches[0],k.touches[1]),f=(k.touches[0].clientX+k.touches[1].clientX)/2,y=(k.touches[0].clientY+k.touches[1].clientY)/2)},T=k=>{if(k.touches.length===1){const S=k.touches[0].clientX-f,A=k.touches[0].clientY-y;if(!v){const E=k.touches[0].clientX-x.x,D=k.touches[0].clientY-x.y;Math.sqrt(E**2+D**2)>Ld&&(v=!0)}v&&(k.preventDefault(),t(E=>({...E,x:E.x+S,y:E.y+A}))),f=k.touches[0].clientX,y=k.touches[0].clientY}else if(k.touches.length===2){k.preventDefault();const S=b(k.touches[0],k.touches[1]),A=(k.touches[0].clientX+k.touches[1].clientX)/2,E=(k.touches[0].clientY+k.touches[1].clientY)/2;if(_>0){const M=S/_;t(O=>{const H=Math.min(qi,Math.max(Qi,O.scale*M));return{...O,scale:H}})}const D=A-f,L=E-y;t(M=>({...M,x:M.x+D,y:M.y+L})),_=S,f=A,y=E}},$=k=>{k.touches.length<2&&(_=0),k.touches.length===0&&(v=!1),k.touches.length===1&&(f=k.touches[0].clientX,y=k.touches[0].clientY)};return h.addEventListener("touchstart",j,{passive:!1}),h.addEventListener("touchmove",T,{passive:!1}),h.addEventListener("touchend",$),h.addEventListener("touchcancel",$),()=>{h.removeEventListener("touchstart",j),h.removeEventListener("touchmove",T),h.removeEventListener("touchend",$),h.removeEventListener("touchcancel",$)}},[]);const d=w.useCallback(h=>{h.button===0&&(r.current={x:h.clientX,y:h.clientY},a.current={x:h.clientX,y:h.clientY},i.current=!1)},[]),u=w.useCallback(h=>{if(!r.current)return;const f=h.clientX-r.current.x,y=h.clientY-r.current.y,_=Math.sqrt(f*f+y*y);if(!i.current&&_>Ld&&(i.current=!0),i.current){const v=h.clientX-a.current.x,x=h.clientY-a.current.y;t(b=>({...b,x:b.x+v,y:b.y+x}))}a.current={x:h.clientX,y:h.clientY}},[]),p=w.useCallback(h=>{r.current=null,i.current=!1},[]),m=w.useCallback(()=>{r.current=null,i.current=!1},[]),g=w.useCallback(()=>{t(c.current)},[]);return{transform:n,viewportRef:s,isPanning:i.current,handlers:{onMouseDown:d,onMouseMove:u,onMouseUp:p,onMouseLeave:m},resetView:g}}function Px({x:e,y:n,value:t}){return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"fx-damage-number",style:{left:e,top:n},children:["-",t]}),o.jsx("style",{children:Lx})]})}const Lx=`
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
`;function Rx({x:e,y:n,variant:t}){return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:`fx-impact fx-impact--${t}`,style:{left:e,top:n},children:[t==="melee"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"fx-impact__slash fx-impact__slash--1"}),o.jsx("div",{className:"fx-impact__slash fx-impact__slash--2"})]}),t==="ranged"&&o.jsx("div",{className:"fx-impact__beam"}),t==="charge"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"fx-impact__ring fx-impact__ring--1"}),o.jsx("div",{className:"fx-impact__ring fx-impact__ring--2"})]})]}),o.jsx("style",{children:Ox})]})}const Ox=`
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
`;function Kx({x:e,y:n}){return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"fx-explosion",style:{left:e,top:n},children:[o.jsx("div",{className:"fx-explosion__flash"}),o.jsx("div",{className:"fx-explosion__ring fx-explosion__ring--1"}),o.jsx("div",{className:"fx-explosion__ring fx-explosion__ring--2"}),o.jsx("div",{className:"fx-explosion__ring fx-explosion__ring--3"}),Array.from({length:8}).map((t,r)=>o.jsx("div",{className:"fx-explosion__particle",style:{"--angle":`${r*45}deg`,"--delay":`${r*20}ms`,"--dist":`${30+Math.random()*20}px`}},r))]}),o.jsx("style",{children:Jx})]})}const Jx=`
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
`;function Bx({defId:e,isAuxiliary:n,playerId:t}){const r=ee(e);if(!r)return null;const a=t==="player1"?"P1":"P2",i=t==="player1"?"var(--color-accent)":"#ff00c8";return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"fx-card-reveal",style:{position:"fixed",bottom:"80px",left:"50%",transform:"translateX(-50%)",zIndex:800,pointerEvents:"none"},children:[o.jsxs("div",{className:"fx-card-reveal__label",style:{color:i},children:[a," ",n?"抽到辅助卡":"抽牌"]}),o.jsx("div",{className:"fx-card-reveal__card",style:{borderColor:i},children:o.jsxs("div",{className:"fx-card-reveal__inner",children:[o.jsx("div",{className:"fx-card-reveal__back",children:o.jsx("img",{src:"/assets/ui/card-back.jpg",alt:"card back"})}),o.jsx("div",{className:"fx-card-reveal__front",children:o.jsx("img",{src:`/assets/${r.frontImageId}`,alt:r.nameCn})})]})}),o.jsxs("div",{className:"fx-card-reveal__name",style:{color:i},children:[r.nameCn,n&&o.jsx("span",{className:"fx-card-reveal__aux-badge",children:"辅助"})]})]}),o.jsx("style",{children:Fx})]})}const Fx=`
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
`;function Gx({defId:e,isBomb:n,index:t,total:r}){const a=ee(e);if(!a)return null;const i=n?"fx-card-destroy--bomb":"";return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:`fx-card-destroy ${i}`,style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:810,pointerEvents:"none"},children:[o.jsxs("div",{className:"fx-card-destroy__card",children:[o.jsx("img",{src:`/assets/${a.frontImageId}`,alt:a.nameCn}),o.jsx("div",{className:"fx-card-destroy__flash"})]}),o.jsxs("div",{className:"fx-card-destroy__label",children:[a.nameCn," 被摧毁",n&&o.jsx("span",{className:"fx-card-destroy__bomb-badge",children:"💣 诱爆"})]}),o.jsxs("div",{className:"fx-card-destroy__counter",children:[t+1," / ",r]})]}),o.jsx("style",{children:Ux})]})}const Ux=`
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
`,el=62,es=Math.round(el*(1042/756)),Rd=68,Hx=6,Od=140;function Wx({p1Cards:e,p2Cards:n}){const[t,r]=w.useState("init"),[a,i]=w.useState(null);return w.useEffect(()=>{const s=document.querySelector(".unit-token-abs--p1"),c=document.querySelector(".unit-token-abs--p2"),d=s==null?void 0:s.getBoundingClientRect(),u=c==null?void 0:c.getBoundingClientRect();i({p1:d?{x:d.left+d.width/2,y:d.top+d.height/2}:{x:window.innerWidth*.3,y:window.innerHeight*.55},p2:u?{x:u.left+u.width/2,y:u.top+u.height/2}:{x:window.innerWidth*.7,y:window.innerHeight*.45}});const p=setTimeout(()=>r("fan"),50),m=setTimeout(()=>r("hold"),650),g=setTimeout(()=>r("cluster"),1650),h=setTimeout(()=>r("exit"),2e3);return()=>{[p,m,g,h].forEach(clearTimeout)}},[]),a?Sa.createPortal(o.jsxs("div",{style:{position:"fixed",inset:0,zIndex:900,pointerEvents:"none"},children:[o.jsx(Kd,{cards:e,origin:a.p1,phase:t,color:"#00f0ff",label:"P1"}),o.jsx(Kd,{cards:n,origin:a.p2,phase:t,color:"#ff8844",label:"P2"})]}),document.body):null}function Kd({cards:e,origin:n,phase:t,color:r,label:a}){if(e.length===0)return null;const i=e.length,c=(i-1)*Rd>window.innerWidth*.7?Math.floor(window.innerWidth*.7/Math.max(i-1,1)):Rd,d=t==="hold"||t==="cluster";return o.jsxs("div",{style:{position:"fixed",left:n.x,top:n.y},children:[o.jsxs("div",{style:{position:"absolute",top:-(Od+es/2+28),left:0,transform:"translateX(-50%)",color:r,fontSize:"0.78rem",fontWeight:"bold",whiteSpace:"nowrap",textShadow:`0 0 10px ${r}, 1px 1px 3px #000`,opacity:d?1:0,transition:"opacity 250ms",letterSpacing:"0.06em"},children:[a,"  弃牌 ×",i]}),e.map((u,p)=>{const m=ee(u.defId),g=(i-1)/2,h=p-g,f=h*c,y=-Od,_=h*Hx;let v,x,b,j,T;switch(t){case"init":v=0,x=0,b=0,j=.15,T=0;break;case"fan":case"hold":v=f,x=y,b=_,j=1,T=1;break;case"cluster":v=0,x=y,b=0,j=.85,T=1;break;case"exit":default:v=0,x=y-520,b=0,j=.2,T=0;break}const $=p*28;let k;switch(t){case"fan":k=[`transform 480ms cubic-bezier(0.34,1.56,0.64,1) ${$}ms`,`opacity   300ms ease-out ${$}ms`].join(", ");break;case"hold":k="none";break;case"cluster":k="transform 320ms ease-in, opacity 150ms ease-in";break;case"exit":k="transform 450ms ease-in, opacity 380ms ease-in 60ms";break;default:k="none"}return o.jsx("div",{style:{position:"absolute",width:el,height:es,left:-el/2,top:-es/2,borderRadius:5,overflow:"hidden",border:`1px solid ${r}55`,boxShadow:`0 6px 20px rgba(0,0,0,0.7), 0 0 8px ${r}44`,zIndex:p,transform:`translate(${v}px, ${x}px) rotate(${b}deg) scale(${j})`,opacity:T,transition:k,willChange:"transform, opacity"},children:m?o.jsx("img",{src:`/assets/${m.frontImageId}`,alt:m.nameCn,style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1}):o.jsx("div",{style:{width:"100%",height:"100%",background:"#222"}})},u.instanceId)})]})}const nl=62,ns=Math.round(nl*(1042/756)),Jd=52,Zx=5,Bd=120;function Yx({playerId:e,count:n}){const[t,r]=w.useState("init"),[a,i]=w.useState(null),[s,c]=w.useState(null);if(w.useEffect(()=>{const u=e==="player1"?".mp__deck--p1":".mp__deck--p2",p=document.querySelector(u),m=document.querySelector(e==="player1"?".unit-token-abs--p1":".unit-token-abs--p2"),g=p==null?void 0:p.getBoundingClientRect(),h=m==null?void 0:m.getBoundingClientRect();i(g?{x:g.left+g.width/2,y:g.top+g.height/2}:{x:window.innerWidth*.5,y:window.innerHeight*.85}),c(h?{x:h.left+h.width/2,y:h.top+h.height/2}:{x:e==="player1"?window.innerWidth*.3:window.innerWidth*.7,y:e==="player1"?window.innerHeight*.55:window.innerHeight*.45});const f=setTimeout(()=>r("spread"),50),y=setTimeout(()=>r("hold"),600),_=setTimeout(()=>r("cluster"),900),v=setTimeout(()=>r("fly"),1200);return()=>{[f,y,_,v].forEach(clearTimeout)}},[e]),!a||!s)return null;const d=e==="player1"?"#00f0ff":"#ff8844";return Sa.createPortal(o.jsx("div",{style:{position:"fixed",inset:0,zIndex:900,pointerEvents:"none"},children:o.jsx(Xx,{count:n,deckPos:a,mechaPos:s,phase:t,color:d,playerId:e})}),document.body)}function Xx({count:e,deckPos:n,mechaPos:t,phase:r,color:a,playerId:i}){if(e===0)return null;const s=e,d=(s-1)*Jd>window.innerWidth*.6?Math.floor(window.innerWidth*.6/Math.max(s-1,1)):Jd,u=t.x-n.x,p=t.y-n.y,m=r==="hold"||r==="cluster",g=`${i==="player1"?"P1":"P2"} 抽牌 ×${s}`;return o.jsxs("div",{style:{position:"fixed",left:n.x,top:n.y},children:[o.jsx("div",{style:{position:"absolute",top:-(Bd+ns/2+28),left:0,transform:"translateX(-50%)",color:a,fontSize:"0.78rem",fontWeight:"bold",whiteSpace:"nowrap",textShadow:`0 0 10px ${a}, 1px 1px 3px #000`,opacity:m?1:0,transition:"opacity 250ms",letterSpacing:"0.06em"},children:g}),Array.from({length:s},(h,f)=>{const y=(s-1)/2,_=f-y,v=_*d,x=-Bd,b=_*Zx;let j,T,$,k,S;switch(r){case"init":j=0,T=0,$=0,k=.15,S=0;break;case"spread":case"hold":j=v,T=x,$=b,k=1,S=1;break;case"cluster":j=0,T=x,$=0,k=.85,S=1;break;case"fly":default:j=u,T=p,$=0,k=.2,S=0;break}const A=f*24;let E;switch(r){case"spread":E=[`transform 480ms cubic-bezier(0.34,1.56,0.64,1) ${A}ms`,`opacity   300ms ease-out ${A}ms`].join(", ");break;case"hold":E="none";break;case"cluster":E="transform 280ms ease-in, opacity 150ms ease-in";break;case"fly":E="transform 400ms cubic-bezier(0.4,0,1,1), opacity 300ms ease-in 80ms";break;default:E="none"}return o.jsx("div",{style:{position:"absolute",width:nl,height:ns,left:-nl/2,top:-ns/2,borderRadius:5,overflow:"hidden",border:`1px solid ${a}55`,boxShadow:`0 6px 20px rgba(0,0,0,0.7), 0 0 8px ${a}44`,zIndex:f,transform:`translate(${j}px, ${T}px) rotate(${$}deg) scale(${k})`,opacity:S,transition:E,willChange:"transform, opacity"},children:o.jsx("img",{src:"/assets/ui/card-back.jpg",alt:"card back",style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1})},f)})]})}const tl=56,rl=Math.round(tl*(1042/756));function Qx({playerId:e}){const[n,t]=w.useState("face-up"),[r,a]=w.useState(null);if(w.useEffect(()=>{const s=e==="player1"?".mp__deck--p1":".mp__deck--p2",c=document.querySelector(s),d=c==null?void 0:c.getBoundingClientRect();a(d?{x:d.left+d.width/2,y:d.top+d.height/2}:{x:window.innerWidth*.5,y:window.innerHeight*.85});const u=setTimeout(()=>t("flip"),150),p=setTimeout(()=>t("face-down"),500),m=setTimeout(()=>t("fade"),650);return()=>{[u,p,m].forEach(clearTimeout)}},[e]),!r)return null;const i=e==="player1"?"#00f0ff":"#ff8844";return Sa.createPortal(o.jsxs("div",{style:{position:"fixed",inset:0,zIndex:900,pointerEvents:"none"},children:[o.jsxs("div",{style:{position:"fixed",left:r.x,top:r.y},children:[[0,1,2].map(s=>o.jsx(qx,{index:s,phase:n,color:i},s)),o.jsx("div",{style:{position:"absolute",top:-(rl/2+32),left:0,transform:"translateX(-50%)",color:i,fontSize:"0.78rem",fontWeight:"bold",whiteSpace:"nowrap",textShadow:`0 0 10px ${i}, 1px 1px 3px #000`,letterSpacing:"0.06em",opacity:n==="face-up"||n==="flip"||n==="face-down"?1:0,transition:"opacity 200ms"},children:"♻️ 重洗牌组"})]}),o.jsx("style",{children:ev})]}),document.body)}function qx({index:e,phase:n,color:t}){const r=(e-1)*3,a=(e-1)*2;let i;switch(n){case"face-up":case"flip":case"face-down":i=1;break;case"fade":i=0;break}const s=n==="flip"?"reshuffle-card--flipping":n==="face-down"||n==="fade"?"reshuffle-card--flipped":"";return o.jsxs("div",{className:`reshuffle-card ${s}`,style:{position:"absolute",width:tl,height:rl,left:-tl/2+r,top:-rl/2+a,perspective:600,opacity:i,transition:"opacity 200ms ease-in",willChange:"opacity",zIndex:e},children:[o.jsx("div",{className:"reshuffle-card__face reshuffle-card__front",style:{background:t+"33",border:`2px solid ${t}88`,borderRadius:5,boxShadow:`0 0 12px ${t}55`}}),o.jsx("div",{className:"reshuffle-card__face reshuffle-card__back",style:{borderRadius:5,overflow:"hidden",border:"1px solid #ffffff44",boxShadow:"0 4px 12px rgba(0,0,0,0.6)"},children:o.jsx("img",{src:"/assets/ui/card-back.jpg",alt:"card back",style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1})})]})}const ev=`
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
`,ln=68;function nv(){const{currentEvent:e}=Na();return e?o.jsxs("div",{className:"effects-layer",style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:20},children:[e.type==="damage_number"&&o.jsx(Px,{x:e.position.col*ln+ln/2,y:e.position.row*ln+ln/2,value:e.value},`dmg-${Date.now()}`),(e.type==="ranged_hit"||e.type==="melee_hit"||e.type==="charge_hit")&&o.jsx(Rx,{x:e.targetPos.col*ln+ln/2,y:e.targetPos.row*ln+ln/2,variant:e.type==="ranged_hit"?"ranged":e.type==="melee_hit"?"melee":"charge"},`hit-${Date.now()}`),e.type==="mine_explode"&&o.jsx(Kx,{x:e.position.col*ln+ln/2,y:e.position.row*ln+ln/2},`exp-${Date.now()}`),e.type==="card_draw"&&o.jsx(Bx,{defId:e.defId,isAuxiliary:e.isAuxiliary,playerId:e.playerId},`draw-${e.card.instanceId}`),e.type==="card_destroy"&&o.jsx(Gx,{defId:e.defId,isBomb:e.isBomb,index:e.index,total:e.total},`destroy-${e.card.instanceId}`),e.type==="cleanup_discard"&&o.jsx(Wx,{p1Cards:e.p1Cards,p2Cards:e.p2Cards},`cleanup-${Date.now()}`),e.type==="batch_card_draw"&&o.jsx(Yx,{playerId:e.playerId,count:e.count},`draw-${e.playerId}-${Date.now()}`),e.type==="deck_reshuffle"&&o.jsx(Qx,{playerId:e.playerId},`reshuffle-${e.playerId}-${Date.now()}`)]}):null}const eo=68;function gr(){const{state:e}=Ne(),{map:n,mines:t}=e,{currentEvent:r,animatedPositions:a}=Na(),{transform:i,viewportRef:s,handlers:c,resetView:d}=zx(.9),u=(r==null?void 0:r.type)==="screen_shake"?`board-transform board-shake board-shake--${r.intensity}`:"board-transform";return o.jsxs("div",{ref:s,className:"board-viewport",...c,style:{cursor:"grab"},children:[o.jsxs("div",{className:u,style:{transform:`translate(${i.x}px, ${i.y}px) scale(${i.scale})`,transformOrigin:"top left"},children:[o.jsx("div",{className:"game-board",style:{gridTemplateColumns:`repeat(${n.width}, var(--cell-size))`,gridTemplateRows:`repeat(${n.height}, var(--cell-size))`},children:n.cells.flatMap((p,m)=>p.map((g,h)=>o.jsx(tv,{cell:g,row:m,col:h,mines:t},`${m}-${h}`)))}),e.playerIds.map((p,m)=>{const g=e.players[p];return!g||g.isDefeated?null:o.jsx(rv,{player:g,side:`p${m+1}`,playerIndex:m,animatedPos:a[p]??null},p)}),o.jsx(nv,{})]}),o.jsx("button",{className:"board-reset-btn",onClick:d,title:"重置视角",children:"⟳"})]})}function tv({cell:e,row:n,col:t,mines:r}){const a=nc(e),i=e.terrain==="highland"&&e.elevation>0?`+${e.elevation}`:null,s=r.filter(c=>c.position.row===n&&c.position.col===t);return o.jsxs("div",{className:`board-cell board-cell--${e.terrain}`,style:{backgroundImage:`url("${a}")`},"data-row":n,"data-col":t,children:[i&&o.jsx("span",{className:"board-cell__elev",children:i}),s.map((c,d)=>o.jsx(av,{mine:c,offset:d*4},c.id))]})}const Fd=["#00f0ff","#ff00c8","#00cc88","#ff8800","#6688ff","#cc44ff","#44dddd","#ff4466"];function rv({player:e,side:n,playerIndex:t,animatedPos:r}){const a=q.find(p=>p.id===e.unitId);if(!a)return null;const i=(r==null?void 0:r.pos)??e.position,s=(r==null?void 0:r.facing)??e.facing,c={N:0,E:90,S:180,W:270}[s]??0,d=Fd[t%Fd.length],u=`P${t+1}`;return o.jsxs("div",{className:`unit-token-abs unit-token-abs--${n}`,style:{left:i.col*eo,top:i.row*eo,width:eo,height:eo,"--token-color":d},children:[o.jsx("div",{className:"unit-token-abs__label",style:{borderColor:d,backgroundColor:d+"33"},title:`${u} ${a.nameCn}`,children:u}),o.jsx("span",{className:"unit-token-abs__facing-arrow",style:{transform:`rotate(${c}deg)`,color:d},title:`机头朝向：${e.facing}`,children:"▲"})]})}function av({mine:e,offset:n}){const t=e.ownerId==="player1";return o.jsx("div",{className:`mine-token mine-token--${t?"p1":"p2"}`,style:{transform:`translate(${n}px, ${n}px)`},title:`机雷 (伤害 ${e.damage})`,children:o.jsx("span",{className:"mine-token__icon",children:"💣"})})}const ov=250,iv=480,sv=2e3,Wo=252,ho=Math.round(Wo*(1042/756)),Vt=12;function br(){const[e,n]=w.useState(null),t=w.useRef(null),r=w.useRef(null),a=w.useRef(null),i=w.useRef({x:0,y:0}),s=w.useRef(!1),c=()=>{t.current&&(clearTimeout(t.current),t.current=null),r.current&&(clearTimeout(r.current),r.current=null),a.current&&(clearTimeout(a.current),a.current=null)},d=w.useCallback(()=>{c(),n(null)},[]),u=w.useCallback(p=>({onMouseEnter:m=>{i.current={x:m.clientX,y:m.clientY},c(),t.current=setTimeout(()=>{n({src:p,x:i.current.x,y:i.current.y})},ov)},onMouseMove:m=>{i.current={x:m.clientX,y:m.clientY},n(g=>g&&{...g,x:m.clientX,y:m.clientY})},onMouseLeave:()=>d(),onTouchStart:m=>{const g=m.touches[0];s.current=!1,c(),r.current=setTimeout(()=>{s.current||(n({src:p,x:g.clientX,y:g.clientY}),a.current=setTimeout(()=>n(null),sv))},iv)},onTouchMove:()=>{s.current=!0,d()},onTouchEnd:()=>{c()}}),[d]);return{zoom:e,hide:d,getZoomHandlers:u}}function lv(e,n){const t=window.innerWidth,r=window.innerHeight;let a=e+18;a+Wo+Vt>t&&(a=e-Wo-18);let i=n-ho/2;return i<Vt&&(i=Vt),i+ho>r-Vt&&(i=r-ho-Vt),{left:Math.max(Vt,a),top:i}}function _r({zoom:e}){if(!e)return null;const{left:n,top:t}=lv(e.x,e.y);return Sa.createPortal(o.jsxs("div",{style:{position:"fixed",left:n,top:t,width:Wo,height:ho,zIndex:99999,pointerEvents:"none",borderRadius:8,overflow:"hidden",boxShadow:"0 12px 40px rgba(0,0,0,0.75), 0 0 0 2px rgba(255,255,255,0.15)",background:"#111",animation:"card-zoom-in 0.12s ease-out both"},children:[o.jsx("img",{src:e.src,alt:"",style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1}),o.jsx("style",{children:cv})]}),document.body)}const cv=`
@keyframes card-zoom-in {
  from { opacity: 0; transform: scale(0.88); }
  to   { opacity: 1; transform: scale(1); }
}
`,Gd=["var(--color-accent)","#ff00c8","#00cc88","#ff8800","#6688ff","#cc44ff","#44dddd","#ff4466"];function $r(e){const n=parseInt(e.replace("player",""),10)-1;return Gd[n%Gd.length]}function al(e){return`P${e.replace("player","")}`}function dv(e,n){const t=ma[n]??[];return[...e].sort((r,a)=>{const i=t.findIndex(c=>c.id===r.defId),s=t.findIndex(c=>c.id===a.defId);return i-s})}function uv(e,n,t,r,a,i){function s(h){if(!h)return null;const f=[...e.hand,...e.auxiliary].find(y=>y.instanceId===h);return f?a(f.defId)??null:null}const c=s(t),d=s(r),u=jn(e,a,"movement"),p=e.position,m=[];let g=[p];if(c){if(c.actionType==="movement"){const h=(c.movementValue??0)+(u.wheel?2:0);if(h>0){const f=gi(i,p,h,[n],u,e.facing);g=f.map(y=>y.pos),m.push(...f.map(y=>({pos:y.pos,cls:"preview-move-s1"})))}}else if(c.actionType==="ranged"){const h=c.rangeMin??1,f=c.rangeMax??6;for(let y=0;y<i.height;y++)for(let _=0;_<i.width;_++)Se(p,{row:y,col:_})>=h&&Se(p,{row:y,col:_})<=f&&m.push({pos:{row:y,col:_},cls:"preview-atk-s1"})}else if(c.actionType==="melee"||c.actionType==="charge")for(const[h,f]of[[-1,0],[1,0],[0,-1],[0,1]]){const y=p.row+h,_=p.col+f;y>=0&&y<i.height&&_>=0&&_<i.width&&m.push({pos:{row:y,col:_},cls:"preview-atk-s1"})}}if(d){const h=new Map,f=y=>`${y.row},${y.col}`;if(d.actionType==="movement"){const y=(d.movementValue??0)+(u.wheel?2:0);if(y>0){for(const _ of g)wm(i,_,y,[n],u).forEach(v=>h.set(f(v.pos),v.pos));h.forEach(_=>m.push({pos:_,cls:"preview-move-s2"}))}}else if(d.actionType==="ranged"){const y=d.rangeMin??1,_=d.rangeMax??6;for(const v of g)for(let x=0;x<i.height;x++)for(let b=0;b<i.width;b++){const j=Se(v,{row:x,col:b});j>=y&&j<=_&&h.set(f({row:x,col:b}),{row:x,col:b})}h.forEach(v=>m.push({pos:v,cls:"preview-atk-s2"}))}else if(d.actionType==="melee"||d.actionType==="charge"){for(const y of g)for(const[_,v]of[[-1,0],[1,0],[0,-1],[0,1]]){const x=y.row+_,b=y.col+v;x>=0&&x<i.height&&b>=0&&b<i.width&&h.set(f({row:x,col:b}),{row:x,col:b})}h.forEach(y=>m.push({pos:y,cls:"preview-atk-s2"}))}}return m}const pv=["board-cell--preview-move-s1","board-cell--preview-move-s2","board-cell--preview-atk-s1","board-cell--preview-atk-s2"];function Ud(){document.querySelectorAll(".board-cell").forEach(e=>pv.forEach(n=>e.classList.remove(n)))}const mv=[{id:"hand",label:"手牌",icon:"🃏"},{id:"auxiliary",label:"辅助区",icon:"⚙️"},{id:"discard",label:"弃牌区",icon:"♻️"},{id:"destroyed",label:"已破坏",icon:"💀"}];function Zo(){const{state:e,dispatch:n,aiConfig:t}=Ne(),{isAnimating:r}=Na(),a=()=>n({type:"ADVANCE_PLOT_STEP"});if(w.useEffect(()=>{if(e.phase!=="plotting"||r)return;const s=e.plottingStep;if(!s||!s.startsWith("transition_to_"))return;const c=s.replace("transition_to_","");if(!Re(t,c))return;const d=setTimeout(a,400);return()=>clearTimeout(d)},[e.plottingStep,e.phase,r,t]),e.phase!=="plotting"||r)return null;const i=e.plottingStep;if(i&&i.startsWith("transition_to_")){const s=i.replace("transition_to_","");return Re(t,s)?null:o.jsx(hv,{onContinue:a,playerLabel:al(s),hint:"请确认对方不在旁后开始布局"})}return null}function Xt(){const{state:e,dispatch:n,getCard:t,aiConfig:r}=Ne(),{plottingStep:a}=e;if(e.phase!=="plotting"||a==="complete"||a===null||a.startsWith("transition_to_"))return null;const i=a,s=Re(r,i),c=Ma(r,i);return o.jsx(fv,{activePlottingPlayerId:i,getCard:t,isAI:s,aiDifficulty:c,onConfirm:(d,u)=>{n({type:"PLOT_CARD",playerId:i,seg:1,instanceId:d}),n({type:"PLOT_CARD",playerId:i,seg:2,instanceId:u}),n({type:"CONFIRM_PLOT",playerId:i})}},i)}function fv({activePlottingPlayerId:e,getCard:n,onConfirm:t,isAI:r=!1,aiDifficulty:a="hard"}){const{state:i,dispatch:s,exposureMode:c}=Ne(),[d,u]=w.useState(null),[p,m]=w.useState(null),[g,h]=w.useState("hand"),[f,y]=w.useState(e),_=f===e||c,v=i.players[f],x=i.players[e],b=$r(e),j=(()=>{const D=i.playerIds.filter(H=>H!==e&&i.teams[H]!==i.teams[e]&&!i.players[H].isDefeated);if(D.length===0)return null;const L=x.position;let M=D[0],O=Math.abs(i.players[D[0]].position.row-L.row)+Math.abs(i.players[D[0]].position.col-L.col);for(let H=1;H<D.length;H++){const B=Math.abs(i.players[D[H]].position.row-L.row)+Math.abs(i.players[D[H]].position.col-L.col);B<O&&(M=D[H],O=B)}return i.players[M]})();w.useEffect(()=>{h(f===e?"hand":"auxiliary")},[f,e]),w.useEffect(()=>{const D=(j==null?void 0:j.position)??{row:0,col:0},L=uv(x,D,d,p,n,i.map);return Ud(),L.forEach(({pos:M,cls:O})=>{const H=document.querySelector(`.board-cell[data-row="${M.row}"][data-col="${M.col}"]`);H&&H.classList.add(`board-cell--${O}`)}),Ud},[d,p]),w.useEffect(()=>{if(!r)return;const D=j??x,L=setTimeout(()=>{const{seg1:M,seg2:O}=ax(x,D,n,a,i.map);M&&O?t(M,O):M?t(M,M):s({type:"CONFIRM_PLOT",playerId:e})},800);return()=>clearTimeout(L)},[r]);function T(D){if(d===D){u(null);return}if(p===D){m(null);return}if(!d){u(D);return}if(!p){m(D);return}m(D)}function $(D){return D==="deck"?v.deck.filter(L=>!L.destroyed).length:D==="hand"?v.hand.filter(L=>!L.destroyed).length:D==="auxiliary"?v.auxiliary.length:D==="discard"?v.discard.length:D==="destroyed"?v.destroyedCards.length:0}function k(D){return D==="deck"?_?dv(v.deck,v.unitId):[]:D==="hand"?v.hand.filter(L=>!L.destroyed):D==="auxiliary"?v.auxiliary:D==="discard"?v.discard:D==="destroyed"?v.destroyedCards:[]}const S=d!==null&&p!==null,A=_,E=g==="deck"&&_;return o.jsxs("div",{className:"plot-content",children:[o.jsxs("div",{className:"plot-panel__header",children:[o.jsx("span",{className:"plot-panel__player",style:{color:b},children:al(e)}),o.jsx("span",{className:"plot-panel__prompt",children:"布局中"})]}),o.jsx("div",{className:"plot-tab-row",children:i.playerIds.map(D=>{const L=f===D,M=D===e;return o.jsxs("button",{className:`plot-tab${L?" plot-tab--active":""}`,style:L?{color:$r(D),borderBottomColor:$r(D)}:void 0,onClick:()=>y(D),children:[al(D),M&&!L&&o.jsx("span",{className:"plot-tab__dot",style:{background:$r(D)}})]},D)})}),f===e?o.jsxs("div",{className:"plot-slots",children:[o.jsx(Hd,{label:"主要阶段 1",cardInstanceId:d,getCard:n,hand:x.hand,onClear:()=>u(null),color:b}),o.jsx(Hd,{label:"主要阶段 2",cardInstanceId:p,getCard:n,hand:x.hand,onClear:()=>m(null),color:b})]}):c?o.jsxs("div",{className:"plot-slots",children:[o.jsx(Wd,{label:"主要阶段 1",card:v.plotSeg1,getCard:n}),o.jsx(Wd,{label:"主要阶段 2",card:v.plotSeg2,getCard:n})]}):o.jsxs("div",{className:"plot-slots",children:[o.jsxs("div",{className:"plot-slot-locked",children:[o.jsx("span",{children:"🔒"}),o.jsx("span",{children:"主要阶段 1"}),o.jsx("span",{className:"plot-slot-locked__hint",children:"对方已锁定"})]}),o.jsxs("div",{className:"plot-slot-locked",children:[o.jsx("span",{children:"🔒"}),o.jsx("span",{children:"主要阶段 2"}),o.jsx("span",{className:"plot-slot-locked__hint",children:"对方已锁定"})]})]}),o.jsxs("div",{className:"plot-zone-tabs",children:[o.jsxs("button",{className:`plot-zone-tab${E?" plot-zone-tab--active":""}`,style:E?{borderColor:b}:void 0,onClick:A?()=>h("deck"):void 0,disabled:!A,title:A?"卡组：按资料集顺序查看":"对方卡组不可查看",children:[o.jsx("span",{className:"plot-zone-tab__icon",children:A?"🂠":"🔒"}),o.jsx("span",{className:"plot-zone-tab__label",children:"卡组"}),o.jsx("span",{className:"plot-zone-tab__count",children:v.deck.filter(D=>!D.destroyed).length})]}),mv.map(({id:D,label:L,icon:M})=>{const O=g===D;return o.jsxs("button",{className:`plot-zone-tab${O?" plot-zone-tab--active":""}`,style:O?{borderColor:_?b:$r(f)}:void 0,onClick:()=>h(D),title:`${L}：点击查看`,children:[o.jsx("span",{className:"plot-zone-tab__icon",children:M}),o.jsx("span",{className:"plot-zone-tab__label",children:L}),o.jsx("span",{className:"plot-zone-tab__count",children:$(D)})]},D)})]}),o.jsx("div",{className:"plot-zone-view",children:g==="hand"&&!_?o.jsxs("div",{className:"plot-zone-private",children:["🔒 对方手牌不可查看",o.jsx("br",{}),o.jsxs("span",{className:"plot-zone-private__count",children:["共 ",$("hand")," 张"]})]}):k(g).length===0?o.jsx("p",{className:"plot-zone-empty",children:"（此区域为空）"}):o.jsx("div",{className:"plot-card-grid",children:k(g).map(D=>{const L=n(D.defId),M=g==="hand"&&f===e,O=D.instanceId===d,H=D.instanceId===p;return o.jsx(gv,{card:D,def:L,isSelected:O||H,segLabel:O?"①":H?"②":null,onClick:M?()=>T(D.instanceId):void 0},D.instanceId)})})}),o.jsx("div",{className:"plot-footer",children:o.jsx("button",{className:"plot-confirm-btn",disabled:!S,style:S?{borderColor:b,color:b}:void 0,onClick:()=>{d&&p&&t(d,p)},children:S?"确定布局":`请选择主要阶段 ${d?"2":"1"} 的卡牌`})}),o.jsx("style",{children:xv})]})}function Hd({label:e,cardInstanceId:n,getCard:t,hand:r,onClear:a,color:i}){const s=r.find(g=>g.instanceId===n)??null,c=s?t(s.defId):null,{zoom:d,hide:u,getZoomHandlers:p}=br(),m=c?`/assets/${c.frontImageId}`:"";return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"plot-slot",children:[o.jsx("div",{className:"plot-slot__label",children:e}),c&&s?o.jsxs("div",{className:"plot-slot__card",onClick:()=>{u(),a()},title:"点击取消选择",style:{borderColor:i,boxShadow:`0 0 8px ${i}55`},...p(m),children:[o.jsx("img",{src:m,alt:c.nameCn,className:"plot-slot__img",onError:g=>{g.target.style.opacity="0.4"}}),o.jsx("span",{className:"plot-slot__name",children:c.nameCn}),o.jsx("span",{className:"plot-slot__clear",children:"✕"})]}):o.jsx("div",{className:"plot-slot__empty",children:"— 未选择 —"})]}),o.jsx(_r,{zoom:d})]})}function Wd({label:e,card:n,getCard:t}){const r=n?t(n.defId):null,a=r?`/assets/${r.frontImageId}`:"";return o.jsxs("div",{className:"plot-slot",children:[o.jsx("div",{className:"plot-slot__label",children:e}),r&&n?o.jsxs("div",{className:"plot-slot__card",style:{borderColor:"#888",cursor:"default"},children:[o.jsx("img",{src:a,alt:r.nameCn,className:"plot-slot__img",onError:i=>{i.target.style.opacity="0.4"}}),o.jsx("span",{className:"plot-slot__name",children:r.nameCn})]}):o.jsx("div",{className:"plot-slot__empty",children:"— 未布局 —"})]})}function gv({card:e,def:n,isSelected:t,segLabel:r,onClick:a}){const{zoom:i,getZoomHandlers:s}=br(),c=n?`/assets/${n.frontImageId}`:"";return o.jsxs(o.Fragment,{children:[o.jsxs("button",{className:`plot-card${t?" plot-card--selected":""}${a?"":" plot-card--readonly"}`,onClick:a,disabled:!a,title:(n==null?void 0:n.nameCn)??"???",...n?s(c):{},children:[n?o.jsxs(o.Fragment,{children:[o.jsx("img",{src:c,alt:n.nameCn,className:"plot-card__img",onError:d=>{d.target.style.opacity="0.3"}}),o.jsx("span",{className:"plot-card__name",children:n.nameCn}),n.damage!==void 0&&o.jsxs("span",{className:"plot-card__stat",children:["💥",n.damage]}),n.movementValue!==void 0&&o.jsxs("span",{className:"plot-card__stat",children:["🏃",n.movementValue]}),n.rangeMin!==void 0&&o.jsxs("span",{className:"plot-card__stat",children:["🎯",n.rangeMin,"–",n.rangeMax]})]}):o.jsx("span",{className:"plot-card__name",children:"???"}),r&&o.jsx("span",{className:"plot-card__badge",children:r})]}),o.jsx(_r,{zoom:i})]})}function hv({onContinue:e,playerLabel:n,hint:t}){return o.jsxs("div",{className:"pass-device-screen",children:[o.jsxs("div",{className:"pass-device-screen__content",children:[o.jsx("div",{className:"pass-device-screen__icon",children:"🤖"}),o.jsx("h2",{className:"pass-device-screen__title",children:"请将设备交给"}),o.jsx("h1",{className:"pass-device-screen__player",children:n}),o.jsx("p",{className:"pass-device-screen__hint",children:t}),o.jsxs("button",{className:"pass-device-screen__btn",onClick:e,children:[n," 已就位，继续"]})]}),o.jsx("style",{children:vv})]})}const xv=`
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
`,vv=`
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
`;function Zd(e,n){const t=Ch(e,n);if(t.length===0)return n;if(t.length===1)return t[0];const r=e.players[n].position;let a=t[0],i=1/0;for(const s of t){const c=e.players[s].position,d=Math.abs(c.row-r.row)+Math.abs(c.col-r.col);d<i&&(i=d,a=s)}return a}function Yo(){const{state:e,getCard:n}=Ne(),{phase:t,currentTiming:r,turnOrder:a,pendingDamage:i}=e;if(t!=="action_seg1"&&t!=="action_seg2")return null;const s=t==="action_seg1"?1:2;return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"action-hud",style:i?{display:"none"}:void 0,children:[r==="movement"&&o.jsx(yv,{seg:s,turnOrder:a,getCard:n},`mov-${s}`),(r==="ranged"||r==="melee")&&o.jsx(Iv,{seg:s,getCard:n},`combat-${s}-${r}`),r==="special"&&o.jsx(jv,{seg:s,turnOrder:a,getCard:n},`special-${s}`),o.jsx("style",{children:Yd})]}),i&&o.jsxs(o.Fragment,{children:[o.jsx(wv,{pendingDamage:i,getCard:n}),o.jsx("style",{children:Yd})]})]})}function yv({seg:e,turnOrder:n,getCard:t}){const{state:r,dispatch:a,aiConfig:i,isOnline:s,localPlayerId:c,currentTurnPlayerId:d}=Ne(),{map:u,pendingDamage:p,playerIds:m}=r,[g,h]=w.useState(new Set),[f,y]=w.useState(null),[_,v]=w.useState([]),[x,b]=w.useState(null),j=w.useRef(!1),T=new Map;for(const B of m){const U=r.players[B],N=q.find(z=>z.id===U.unitId);T.set(B,f0(U,e,t,N.movement))}w.useEffect(()=>{if(!(f!==null||x!==null)&&!j.current&&!p){if(s&&c){if(d!==c)return;if(T.get(c))y(c);else{const B=r.players[c],U=e===1?B.plotSeg1:B.plotSeg2;if(!U)a({type:"ADD_LOG",message:`  ${$e(c)} 未配置行动卡，跳过`});else{const N=t(U.defId);N&&N.actionType==="movement"&&a({type:"ADD_LOG",message:`  ${$e(c)}【${N.nameCn}】无法发动移动`})}j.current=!0,a({type:"ADVANCE_TIMING"})}return}for(const B of n)if(!g.has(B))if(T.get(B)){y(B);return}else{const U=r.players[B],N=e===1?U.plotSeg1:U.plotSeg2;if(!N)a({type:"ADD_LOG",message:`  ${$e(B)} 未配置行动卡，跳过`});else{const z=t(N.defId);z&&z.actionType==="movement"&&a({type:"ADD_LOG",message:`  ${$e(B)}【${z.nameCn}】无法发动移动`})}h(z=>new Set([...z,B]));return}j.current=!0,a({type:"ADVANCE_TIMING"})}},[g,f,x,p,d]),w.useEffect(()=>{if(!f){v([]);return}const B=r.players[f],U=m.filter(R=>R!==f).map(R=>r.players[R].position),N=q.find(R=>R.id===B.unitId),z=jn(B,t,"movement"),F=Yi(B,e,t,z)||N.movement,P=gi(u,B.position,F,U,z,B.facing);v(P.map(R=>R.pos))},[f,r.players,u,e]),w.useEffect(()=>{if(!f||s&&c&&f!==c||!Re(i,f))return;const U=Ma(i,f),N=setTimeout(()=>{const z=ox(r,f,e,t,U);z&&a({type:"MOVE_UNIT",playerId:f,to:z.pos,path:z.path,finalFacing:z.finalFacing}),h(F=>new Set([...F,f])),y(null),v([])},800);return()=>clearTimeout(N)},[f]);function $(B,U){if(!f||Re(i,f)||!_.some(z=>se(z,B)))return;let N=U;if(!N){const z=r.players[f],F=m.filter(Q=>Q!==f).map(Q=>r.players[Q].position),P=q.find(Q=>Q.id===z.unitId),R=jn(z,t,"movement"),Z=Yi(z,e,t,R)||P.movement;N=tc(u,z.position,z.facing,B,Z,F,R)}a({type:"MOVE_UNIT",playerId:f,to:B,path:N==null?void 0:N.path,finalFacing:N==null?void 0:N.finalFacing}),v([]),b(f),y(null)}function k(){x&&(h(B=>new Set([...B,x])),b(null),s&&(j.current=!0,a({type:"ADVANCE_TIMING"})))}if(s&&c&&d&&d!==c&&!f&&!x)return o.jsx("div",{className:"action-hud__panel action-hud__panel--waiting",children:o.jsxs("span",{className:"action-hud__hint",children:["等待 ",$e(d)," 行动中…"]})});const S=n.every(B=>!T.get(B)||g.has(B));if(!s&&S&&f===null&&x===null||s&&j.current&&f===null&&x===null)return null;if(x!==null){const B=r.players[x],U=$e(x),N=mr(B.facing);return o.jsxs("div",{className:"action-hud__panel",children:[o.jsx("span",{className:"action-hud__mover",children:U}),o.jsx("span",{className:"action-hud__hint",children:"移动完毕，可选择调整机头方向（最多90°）"}),o.jsx(bv,{playerId:x,disabledFacing:N}),o.jsx("button",{className:"action-hud__skip-btn",onClick:k,children:"确认方向"})]})}const A=f?Re(i,f):!1,E=f?$e(f):"";if(A)return o.jsxs("div",{className:"action-hud__panel action-hud__panel--ai-thinking",children:[o.jsxs("span",{className:"action-hud__mover",children:[E," (AI)"]}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__hint",children:"思考中…"})]});const D=f?r.players[f]:null,L=f&&D?jn(D,t,"movement"):null,M=D?q.find(B=>B.id===D.unitId):null,O=f&&D&&M?Yi(D,e,t,L??void 0)||M.movement:0,H=f?m.filter(B=>B!==f).map(B=>r.players[B].position):[];return o.jsxs(o.Fragment,{children:[f&&D&&o.jsx(_v,{reachable:_,map:u,from:D.position,fromFacing:D.facing,movementValue:O,blockedPositions:H,aux:L??void 0,onCellClick:$}),o.jsx("div",{className:"action-hud__panel",children:f?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"action-hud__mover",children:E}),o.jsx("span",{className:"action-hud__hint",children:"选择目标格（步数须用尽；点击选择路径）"}),(L==null?void 0:L.vernier)&&o.jsx("span",{className:"action-hud__aux-badge",title:"地形移动消耗-1，高低差消耗-1",children:"⚙ 喷射推进器"}),(L==null?void 0:L.wheel)&&o.jsx("span",{className:"action-hud__aux-badge",title:"移动力+2",children:"⚙ 滑轮"})]}):o.jsx("span",{className:"action-hud__hint",children:"计算移动路径中…"})})]})}function bv({playerId:e,disabledFacing:n}){const{state:t,dispatch:r}=Ne(),i=t.players[e].facing,s=[{facing:"N",label:"↑N"},{facing:"E",label:"E→"},{facing:"S",label:"↓S"},{facing:"W",label:"←W"}];return o.jsxs("div",{className:"facing-compass",title:"调整机头朝向（不可掉头）",children:[o.jsx("span",{className:"facing-compass__label",children:"机头"}),s.map(({facing:c,label:d})=>{const u=c===n;return o.jsx("button",{className:["facing-compass__btn",i===c?"facing-compass__btn--active":"",u?"facing-compass__btn--disabled":""].join(" ").trim(),onClick:()=>{u||r({type:"ADJUST_FACING",playerId:e,facing:c})},disabled:u,title:u?"无法180°掉头":`朝${c}方`,children:d},c)})]})}function _v({reachable:e,map:n,from:t,fromFacing:r,movementValue:a,blockedPositions:i,aux:s,onCellClick:c}){const d=Ii(),u=w.useRef({allPaths:[],selectedIdx:0,hoveredPos:null}),[p,m]=w.useState(0),g=()=>m(f=>f+1);w.useEffect(()=>{document.querySelectorAll(".board-cell--path-ghost").forEach(j=>j.classList.remove("board-cell--path-ghost"));const{allPaths:f,selectedIdx:y,hoveredPos:_}=u.current;if(!_||f.length===0)return;const v=f[y];if(!v)return;const x=v.path.slice(0,-1);for(const j of x){const T=document.querySelector(`.board-cell[data-row="${j.row}"][data-col="${j.col}"]`);T==null||T.classList.add("board-cell--path-ghost")}const b=document.querySelector(`.board-cell[data-row="${_.row}"][data-col="${_.col}"]`);return b&&(b.dataset.pathLabel=f.length>1?`${y+1}/${f.length}`:""),()=>{document.querySelectorAll(".board-cell--path-ghost").forEach(j=>j.classList.remove("board-cell--path-ghost")),b&&delete b.dataset.pathLabel}},[p]),w.useEffect(()=>{const f=[];document.querySelectorAll(".board-cell--reachable").forEach(y=>{y.classList.remove("board-cell--reachable")});for(const y of e){const _=document.querySelector(`.board-cell[data-row="${y.row}"][data-col="${y.col}"]`);if(!_)continue;_.classList.add("board-cell--reachable");const v=()=>{const{allPaths:L,selectedIdx:M}=u.current;c(y,L[M]??null)},x=()=>{const L=Zi(n,t,r,y,a,i,s);u.current={allPaths:L,selectedIdx:0,hoveredPos:y},g()},b=()=>{u.current={allPaths:[],selectedIdx:0,hoveredPos:null},g()},j=L=>{const{allPaths:M,selectedIdx:O}=u.current;if(M.length<=1)return;L.preventDefault();const H=L.deltaY>0?1:-1;u.current={...u.current,selectedIdx:(O+H+M.length)%M.length},g()};let T=null,$=0,k=0,S=!1;const A=L=>{if($=L.touches[0].clientX,k=L.touches[0].clientY,S=!1,d){const{hoveredPos:M}=u.current;if(M&&M.row===y.row&&M.col===y.col)return;const O=Zi(n,t,r,y,a,i,s);u.current={allPaths:O,selectedIdx:0,hoveredPos:y},g(),L.preventDefault();return}T=setTimeout(()=>{S=!0;const M=Zi(n,t,r,y,a,i,s);u.current={allPaths:M,selectedIdx:0,hoveredPos:y},g()},400)},E=()=>{T&&(clearTimeout(T),T=null),S&&!d&&(u.current={allPaths:[],selectedIdx:0,hoveredPos:null},g()),S=!1},D=L=>{if(d||!S)return;const M=L.touches[0].clientX-$,O=L.touches[0].clientY-k;if(Math.abs(M)>40||Math.abs(O)>40){const{allPaths:H,selectedIdx:B}=u.current;if(H.length<=1)return;const U=Math.abs(M)>Math.abs(O)?M>0?1:-1:O>0?1:-1;u.current={...u.current,selectedIdx:(B+U+H.length)%H.length},g(),$=L.touches[0].clientX,k=L.touches[0].clientY}};_.addEventListener("click",v),_.addEventListener("mouseenter",x),_.addEventListener("mouseleave",b),_.addEventListener("wheel",j,{passive:!1}),_.addEventListener("touchstart",A,{passive:!0}),_.addEventListener("touchend",E),_.addEventListener("touchcancel",E),_.addEventListener("touchmove",D,{passive:!0}),f.push(()=>{T&&clearTimeout(T),_.removeEventListener("click",v),_.removeEventListener("mouseenter",x),_.removeEventListener("mouseleave",b),_.removeEventListener("wheel",j),_.removeEventListener("touchstart",A),_.removeEventListener("touchend",E),_.removeEventListener("touchcancel",E),_.removeEventListener("touchmove",D)})}return()=>{document.querySelectorAll(".board-cell--reachable").forEach(y=>y.classList.remove("board-cell--reachable")),document.querySelectorAll(".board-cell--path-ghost").forEach(y=>y.classList.remove("board-cell--path-ghost")),document.querySelectorAll(".board-cell[data-path-label]").forEach(y=>delete y.dataset.pathLabel),u.current={allPaths:[],selectedIdx:0,hoveredPos:null},f.forEach(y=>y())}},[e,n,t,r,a,i,s,c]);const h=w.useCallback(()=>{const{allPaths:f,selectedIdx:y}=u.current;f.length<=1||(u.current={...u.current,selectedIdx:(y+1)%f.length},g())},[]);if(d){const{allPaths:f,hoveredPos:y}=u.current;if(y&&f.length>1)return o.jsxs("button",{className:"move-cycle-btn",onClick:h,style:{position:"fixed",bottom:80,left:"50%",transform:"translateX(-50%)",zIndex:600,padding:"10px 24px",background:"rgba(22, 33, 62, 0.95)",border:"1px solid #ffea00",borderRadius:8,color:"#ffea00",fontFamily:"var(--font-mono)",fontSize:"0.85rem",fontWeight:"bold",cursor:"pointer",minHeight:44,backdropFilter:"blur(4px)"},children:["切换路径 (",u.current.selectedIdx+1,"/",f.length,")"]})}return null}function Dm({reachable:e,onCellClick:n}){return w.useEffect(()=>(document.querySelectorAll(".board-cell").forEach(r=>{r.classList.remove("board-cell--reachable"),r.onclick=null}),e.forEach(r=>{const a=document.querySelector(`.board-cell[data-row="${r.row}"][data-col="${r.col}"]`);a&&(a.classList.add("board-cell--reachable"),a.onclick=()=>n(r))}),()=>{document.querySelectorAll(".board-cell--reachable").forEach(r=>{r.classList.remove("board-cell--reachable"),r.onclick=null})}),[e,n]),null}function Iv({seg:e,getCard:n}){const{state:t,dispatch:r,aiConfig:a,isOnline:i,localPlayerId:s,currentTurnPlayerId:c}=Ne(),{map:d,turnOrder:u,currentTiming:p,pendingDamage:m}=t,[g,h]=w.useState(new Set),[f,y]=w.useState(null),[_,v]=w.useState(null),x=w.useRef(!1),[b,j]=w.useState(!1),[T,$]=w.useState([]),[k,S]=w.useState(!1),A=p==="ranged"?"ranged":"melee",E=A==="ranged"?"射击时机":"近战时机";if(w.useEffect(()=>{if(f===null&&!x.current&&!m){if(i&&s){if(c!==s)return;const ae=t.players[s];if(Pn(ae,e,A,n))y(s),j(!1),S(!1),$([]);else{const qe=e===1?ae.plotSeg1:ae.plotSeg2;if(qe){const Ke=n(qe.defId);Ke&&(A==="ranged"&&Ke.actionType==="ranged"||A==="melee"&&(Ke.actionType==="melee"||Ke.actionType==="charge"))&&r({type:"ADD_LOG",message:`  ${$e(s)}【${Ke.nameCn}】条件不满足，无法发动`})}x.current=!0,r({type:"ADVANCE_TIMING"})}return}for(const ae of u){if(g.has(ae))continue;const Ie=t.players[ae];if(!Pn(Ie,e,A,n)){const Ke=e===1?Ie.plotSeg1:Ie.plotSeg2;if(Ke){const Je=n(Ke.defId);Je&&(A==="ranged"&&Je.actionType==="ranged"||A==="melee"&&(Je.actionType==="melee"||Je.actionType==="charge"))&&r({type:"ADD_LOG",message:`  ${$e(ae)}【${Je.nameCn}】条件不满足，无法发动`})}h(Je=>new Set([...Je,ae]));return}y(ae),j(!1),S(!1),$([]);return}x.current=!0,r({type:"ADVANCE_TIMING"})}},[g,f,m,n,c]),w.useEffect(()=>{if(!f||m||i&&s&&f!==s||!Re(a,f))return;const Ie=Ma(a,f),qe=Zd(t,f),Ke=setTimeout(()=>{if(ix(t,f,e,A,n,Ie)){const Sn=t.players[f],ie=Pn(Sn,e,A,n),kr=(ie==null?void 0:ie.actionType)==="charge"?"RESOLVE_CHARGE":A==="ranged"?"RESOLVE_RANGED":"RESOLVE_MELEE";r({type:kr,attackerId:f,targetId:qe})}else{const Sn=t.players[f],ie=Pn(Sn,e,A,n);r({type:"ADD_LOG",message:`  ${$e(f)} 放弃发动${ie?`【${ie.nameCn}】`:E}`})}h(Sn=>new Set([...Sn,f])),y(null),j(!1),S(!1),$([])},800);return()=>clearTimeout(Ke)},[f,m]),i&&s&&c&&c!==s&&!f)return o.jsx("div",{className:"action-hud__panel action-hud__panel--waiting",children:o.jsxs("span",{className:"action-hud__hint",children:["等待 ",$e(c)," 行动中…"]})});if(!f)return null;const D=t.players[f],L=Zd(t,f),M=t.players[L],O=p==="melee"?jn(D,n,"melee"):{vernier:!1,moveSensor:!1},H=Pn(D,e,A,n),B=(H==null?void 0:H.actionType)==="charge",U=Re(a,f);let N;if(B&&A==="melee"){const ae=q.find(qe=>qe.id===D.unitId),Ie=q.find(qe=>qe.id===M.unitId);N=Bo(D,M,e,d,ae,Ie,n)}else N=rc(D,M,e,A,d,n);const z=q.find(ae=>ae.id===D.unitId),F=q.find(ae=>ae.id===M.unitId);function P(){if(!N.canAttack||!f)return;r({type:B?"RESOLVE_CHARGE":A==="ranged"?"RESOLVE_RANGED":"RESOLVE_MELEE",attackerId:f,targetId:L}),v(`${z.nameCn} → ${F.nameCn}：造成 ${N.damage} 伤害`),h(Ie=>new Set([...Ie,f])),y(null),j(!1),S(!1),$([]),i&&(x.current=!0,r({type:"ADVANCE_TIMING"}))}function R(){if(!f)return;const ae=Pn(t.players[f],e,A,n);r({type:"ADD_LOG",message:`  ${$e(f)} 放弃发动${ae?`【${ae.nameCn}】`:E}`}),v(null),h(Ie=>new Set([...Ie,f])),y(null),j(!1),S(!1),$([]),i&&(x.current=!0,r({type:"ADVANCE_TIMING"}))}function Z(){if(!f||b)return;const ae=Cm(d,D.position,[M.position]);$(ae),S(!0)}function Q(ae){!f||!k||(r({type:"MELEE_SENSOR_MOVE",playerId:f,to:ae}),j(!0),S(!1),$([]))}function ne(){S(!1),$([])}const te=$e(f),Y=N.card?B?`【${N.card.nameCn}】突击值 ${z.assault} vs 防御${F.assaultDef}`:`【${N.card.nameCn}】射程 ${N.card.rangeMin??"—"}–${N.card.rangeMax??"—"}`:null,ce=A==="melee"&&O.moveSensor&&!b;return U?o.jsxs("div",{className:"action-hud__panel action-hud__panel--ai-thinking",children:[o.jsxs("span",{className:"action-hud__mover",children:[$e(f)," (AI)"]}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__hint",children:"思考中…"})]}):o.jsxs(o.Fragment,{children:[k&&o.jsx(Dm,{reachable:T,onCellClick:Q}),!k&&o.jsx(kv,{targetPos:N.canAttack?M.position:null}),o.jsxs("div",{className:"action-hud__panel action-hud__panel--combat",children:[o.jsx("span",{className:"action-hud__mover",children:te}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__timing-label",children:E}),O.moveSensor&&o.jsxs("span",{className:`action-hud__aux-badge ${b?"action-hud__aux-badge--used":""}`,title:"近战前可移动1格",children:["⚙ 移动传感器",b?"（已使用）":""]}),O.vernier&&o.jsx("span",{className:"action-hud__aux-badge",title:"地形消耗-1，高低差-1",children:"⚙ 喷射推进器"}),N.card?o.jsxs("span",{className:"action-hud__card-info",children:[Y,N.card.damage!==void 0&&o.jsxs("span",{className:"action-hud__dmg",children:[" 伤害 ",N.card.damage]})]}):o.jsxs("span",{className:"action-hud__hint",children:["无",A==="ranged"?"射击":"近战","牌"]}),o.jsx("span",{className:`action-hud__validity ${N.canAttack?"action-hud__validity--ok":"action-hud__validity--no"}`,children:N.canAttack?B?`距离 ${N.dist} ✓ → 造成 ${N.damage} 伤 / 自机反伤 ${N.counterDamage}`:`距离 ${N.dist} ✓ → ${N.damage} 伤`:N.card?N.reason:""}),_&&o.jsx("span",{className:"action-hud__result",children:_}),k?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"action-hud__hint",children:"点击高亮格移动（传感器），或"}),o.jsx("button",{className:"action-hud__skip-btn",onClick:ne,children:"取消移动"})]}):o.jsxs(o.Fragment,{children:[ce&&o.jsx("button",{className:"action-hud__sensor-btn",onClick:Z,title:"移动传感器：攻击前可移动1格",children:"传感器移动"}),o.jsx("button",{className:"action-hud__attack-btn",onClick:P,disabled:!N.canAttack,title:N.canAttack?`攻击 ${F.nameCn}`:N.reason,children:"执行攻击"}),o.jsxs("button",{className:"action-hud__skip-btn",onClick:R,children:["跳过",A==="ranged"?"射击":"近战"]})]})]})]})}function kv({targetPos:e}){return w.useEffect(()=>{if(document.querySelectorAll(".board-cell--target").forEach(n=>{n.classList.remove("board-cell--target")}),e){const n=document.querySelector(`.board-cell[data-row="${e.row}"][data-col="${e.col}"]`);n==null||n.classList.add("board-cell--target")}return()=>{document.querySelectorAll(".board-cell--target").forEach(n=>{n.classList.remove("board-cell--target")})}},[e]),null}function jv({seg:e,turnOrder:n,getCard:t}){const{state:r,dispatch:a,aiConfig:i,isOnline:s,localPlayerId:c,currentTurnPlayerId:d}=Ne(),{map:u,pendingDamage:p}=r,[m,g]=w.useState(new Set),[h,f]=w.useState(null),[y,_]=w.useState([]),v=w.useRef(!1);if(w.useEffect(()=>{if(h===null&&!v.current&&!p){if(s&&c){if(d!==c)return;const A=r.players[c],E=e===1?A.plotSeg1:A.plotSeg2,D=E?t(E.defId):null;!D||D.actionType!=="mine"&&D.actionType!=="special"?(v.current=!0,a({type:"ADVANCE_TIMING"})):f(c);return}for(const A of n){if(m.has(A))continue;const E=r.players[A],D=e===1?E.plotSeg1:E.plotSeg2,L=D?t(D.defId):null;if(!L||L.actionType!=="mine"&&L.actionType!=="special"){g(M=>new Set([...M,A]));return}f(A);return}v.current=!0,a({type:"ADVANCE_TIMING"})}},[m,h,p,t,d]),w.useEffect(()=>{if(!h){_([]);return}const A=r.players[h],E=e===1?A.plotSeg1:A.plotSeg2,D=E?t(E.defId):null;if(D&&D.actionType==="mine"){const L=Sm(u,A.position,1,[]);_(L)}else _([])},[h,u,e,r.players,t]),w.useEffect(()=>{if(!h||p||s&&c&&h!==c||!Re(i,h))return;const E=Ma(i,h),D=setTimeout(()=>{const L=lx(r,h,e,t,E);if(L){const M=r.players[h],O=e===1?M.plotSeg1:M.plotSeg2,H=O?t(O.defId):null;a({type:"PLACE_MINE",playerId:h,to:L,damage:(H==null?void 0:H.damage)||3})}g(M=>new Set([...M,h])),f(null)},800);return()=>clearTimeout(D)},[h,p]),s&&c&&d&&d!==c&&!h)return o.jsx("div",{className:"action-hud__panel action-hud__panel--waiting",children:o.jsxs("span",{className:"action-hud__hint",children:["等待 ",$e(d)," 行动中…"]})});if(!h)return null;const x=r.players[h],b=e===1?x.plotSeg1:x.plotSeg2,j=b?t(b.defId):null,T=$e(h),$=Re(i,h);function k(){g(A=>new Set([...A,h])),f(null),s&&(v.current=!0,a({type:"ADVANCE_TIMING"}))}function S(A){!h||!j||j.actionType!=="mine"||y.some(E=>se(E,A))&&(a({type:"PLACE_MINE",playerId:h,to:A,damage:j.damage||3}),g(E=>new Set([...E,h])),f(null),s&&(v.current=!0,a({type:"ADVANCE_TIMING"})))}return $?o.jsxs("div",{className:"action-hud__panel action-hud__panel--ai-thinking",children:[o.jsxs("span",{className:"action-hud__mover",children:[T," (AI)"]}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__hint",children:"思考中…"})]}):o.jsxs(o.Fragment,{children:[y.length>0&&o.jsx(Dm,{reachable:y,onCellClick:S}),o.jsxs("div",{className:"action-hud__panel action-hud__panel--special",children:[o.jsx("span",{className:"action-hud__mover",children:T}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__timing-label",children:"特殊时机"}),o.jsx("span",{className:"action-hud__card-info",children:j?`【${j.nameCn}】效果`:"（无）"}),(j==null?void 0:j.actionType)==="mine"?o.jsx("span",{className:"action-hud__hint",children:"请点击高亮格部署机雷，或"}):o.jsx("span",{className:"action-hud__hint",children:"暂无此牌效果支持，请"}),o.jsx("button",{className:"action-hud__skip-btn",onClick:k,children:"跳过"})]})]})}function wv({pendingDamage:e,getCard:n}){const{state:t,dispatch:r,aiConfig:a,isOnline:i,localPlayerId:s}=Ne(),{targetId:c,remaining:d,selectedInstanceIds:u}=e,{zoom:p,getZoomHandlers:m}=br(),[g,h]=w.useState(null),f=t.players[c];Et(f);const y=u.length===0,_=!!e.attackerId&&y&&!e.attackerDesignatedCardId,v=_?e.attackerId:c,x=$e(v),b=i&&s&&v!==s,j=!b&&Re(a,v),T=Ma(a,v),$=!i&&!j&&v!==g;w.useEffect(()=>{j?h(v):i||h(null)},[v,j,i]),w.useEffect(()=>{if(!j||b||d<=0)return;const B=t.players[c],U=Ca(B),N=t.playerIds.filter(P=>P!==c&&t.teams[P]!==t.teams[c]&&!t.players[P].isDefeated),z=N.length>0?t.players[N[0]]:B,F=setTimeout(()=>{if(U.length>0){const P=sx(e,B,n,T,_,z);r(P?{type:"SELECT_DAMAGE_CARD",playerId:v,instanceId:P}:{type:"CONFIRM_DAMAGE_SELECTION",playerId:v})}else r({type:"CONFIRM_DAMAGE_SELECTION",playerId:v})},600);return()=>clearTimeout(F)},[d,v,j,b,t.players]);function k(B){r({type:"SELECT_DAMAGE_CARD",playerId:v,instanceId:B})}function S(){r({type:"CONFIRM_DAMAGE_SELECTION",playerId:v})}if(b)return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"damage-pass-overlay",children:o.jsxs("div",{className:"damage-pass-card",children:[o.jsx("p",{className:"damage-pass__eyebrow",children:"— 伤害分配 —"}),o.jsx("h2",{className:"damage-pass__title",children:"等待对手选择"}),o.jsx("div",{className:"damage-pass__player",children:x}),o.jsx("p",{className:"damage-pass__context",children:_?"【瞄准加成】攻方正在指定要摧毁的卡牌…":`${x} 正在选择要摧毁的 ${d} 张卡牌…`}),o.jsx("div",{className:"damage-pass__spinner",children:"⏳"})]})}),o.jsx("style",{children:Xd})]});if($)return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"damage-pass-overlay",children:o.jsxs("div",{className:"damage-pass-card",children:[o.jsx("p",{className:"damage-pass__eyebrow",children:"— 伤害分配 —"}),o.jsx("h2",{className:"damage-pass__title",children:"请将设备交给"}),o.jsx("div",{className:"damage-pass__player",children:x}),o.jsx("p",{className:"damage-pass__context",children:_?"【瞄准加成】攻方有权指定第一张要摧毁的卡牌":`防方选择要摧毁的 ${d} 张卡牌（可自动分配）`}),o.jsxs("button",{className:"damage-pass__btn",onClick:()=>h(v),children:[x," 已准备"]})]})}),o.jsx("style",{children:Xd})]});const A=f.hand.filter(B=>!B.destroyed),E=f.plotSeg1&&!f.plotSeg1.destroyed?[f.plotSeg1]:[],D=f.plotSeg2&&!f.plotSeg2.destroyed?[f.plotSeg2]:[],L=f.auxiliary.filter(B=>!B.destroyed),M=f.deck.filter(B=>!B.destroyed),O=[];A.length>0&&O.push({label:"手牌",cards:A}),E.length>0&&O.push({label:"布局格",sublabel:"主要阶段1",cards:E}),D.length>0&&O.push({label:"布局格",sublabel:"主要阶段2",cards:D}),L.length>0&&O.push({label:"辅助区",cards:L});const H=M[0]??null;return o.jsxs("div",{className:"action-hud",children:[o.jsxs("div",{className:"action-hud__panel action-hud__panel--damage",children:[o.jsxs("div",{className:"damage-panel__header",children:[o.jsx("span",{className:"damage-panel__title",children:"⚔️ 伤害分配"}),o.jsx("span",{className:"damage-panel__player",children:_?`${x} (瞄准指定)`:x}),o.jsxs("span",{className:"damage-panel__remaining",children:["还需摧毁 ",o.jsx("strong",{children:d})," 张卡牌"]})]}),(e.destroyedBombCount??0)>0&&o.jsxs("div",{className:"damage-panel__bomb-alert",children:["💣 已选中 ",e.destroyedBombCount," 张炸弹卡，选完后将进行誘爆检查"]}),o.jsx("div",{className:"damage-panel__hint",children:_?`【瞄准加成】攻方有权指定第一张要摧毁的卡牌！请 ${x} 选择：`:e.source==="ranged"?"射击伤害：须先从手牌 / 布局格 / 辅助区选择卡牌破坏，不足部分自动从牌组顶破坏。":"牌组与弃牌区已耗尽，近战伤害切换为自选模式。请从手牌 / 布局格 / 辅助区选择。"}),o.jsxs("div",{className:"damage-panel__zones",children:[O.map((B,U)=>o.jsxs("div",{className:"damage-zone",children:[o.jsxs("span",{className:"damage-zone__label",children:[B.label,B.sublabel&&o.jsxs("span",{className:"damage-zone__sub",children:["（",B.sublabel,"）"]})]}),o.jsx("div",{className:"damage-zone__cards",children:B.cards.map(N=>{const z=n(N.defId),F=(z==null?void 0:z.nameCn)??N.defId,P=u.includes(N.instanceId),R=z!=null&&z.frontImageId?`/assets/${z.frontImageId}`:null;return o.jsxs("button",{className:`damage-card-btn ${P?"damage-card-btn--selected":""} ${z!=null&&z.hasBombIcon?"damage-card-btn--bomb":""}`,onClick:()=>k(N.instanceId),disabled:P,title:`${F} (${(z==null?void 0:z.actionType)??"?"})${z!=null&&z.hasBombIcon?" ⚠️ 含诱爆":""}`,...R?m(R):{},children:[o.jsx("span",{className:"damage-card-btn__name",children:F}),(z==null?void 0:z.isKaiVariant)&&o.jsx("span",{className:"damage-card-btn__det",title:"改型",children:"◆"}),(z==null?void 0:z.hasBombIcon)&&o.jsx("span",{className:"damage-card-btn__det damage-card-btn__bomb-icon",title:"诱爆卡",children:"💣"})]},N.instanceId)})})]},U)),H&&e.source!=="ranged"&&o.jsxs("div",{className:"damage-zone",children:[o.jsxs("span",{className:"damage-zone__label",children:["卡组",o.jsxs("span",{className:"damage-zone__sub",children:["（共 ",M.length," 张，正面朝下）"]})]}),o.jsx("div",{className:"damage-zone__cards",children:o.jsxs("button",{className:"damage-card-btn damage-card-btn--deck",onClick:()=>k(H.instanceId),title:"从卡组顶部翻开并摧毁 1 张（诱爆正常触发）",children:[o.jsx("span",{className:"damage-card-btn__deck-back",children:"🂠"}),o.jsx("span",{className:"damage-card-btn__name",children:"顶部 × 1"})]})})]}),H&&e.source==="ranged"&&o.jsxs("div",{className:"damage-zone",children:[o.jsxs("span",{className:"damage-zone__label",children:["卡组",o.jsxs("span",{className:"damage-zone__sub",children:["（共 ",M.length," 张）"]})]}),o.jsx("div",{className:"damage-zone__cards",children:o.jsxs("div",{className:"damage-card-btn damage-card-btn--deck",style:{opacity:.5,cursor:"default"},title:"射击伤害的牌组部分将在选完表牌后自动从顶部破坏",children:[o.jsx("span",{className:"damage-card-btn__deck-back",children:"🂠"}),o.jsx("span",{className:"damage-card-btn__name",children:"自动破坏"})]})})]})]}),o.jsx("div",{className:"damage-panel__actions",children:o.jsx("button",{className:"action-hud__skip-btn",onClick:S,title:"剩余伤害将从牌库顶部自动摧毁",children:"自动分配剩余伤害"})})]}),o.jsx(_r,{zoom:p})]})}const Yd=`
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
`;function Sv({onBack:e}){return o.jsxs("div",{className:"rules-page",children:[o.jsxs("div",{className:"rules-page__header",children:[o.jsx("button",{className:"rules-back-btn",onClick:e,children:"← 返回"}),o.jsx("h1",{className:"rules-page__title",children:"游戏规则"}),o.jsx("span",{className:"rules-page__subtitle",children:"エムブリオマシン"})]}),o.jsxs("div",{className:"rules-page__body",children:[o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"游戏概述"}),o.jsx("p",{children:"《胚胎机器》是一款双人对战策略游戏。每位玩家控制一台战机（机体），通过秘密布置行动牌来控制机体的移动与战斗。 当对手满足任意一项败北条件时，本方获胜。"})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"准备阶段"}),o.jsxs("ol",{className:"rules-list",children:[o.jsx("li",{children:"双方各选择一台机体，机体自带专属牌组。"}),o.jsx("li",{children:"选择地图，确定双方初始出生区域（地图短边中央3格）。"}),o.jsxs("li",{children:["将各自牌组洗混，游戏开始时双方各抽取等同于本机",o.jsx("b",{children:"回避值"}),"数量的手牌。"]}),o.jsx("li",{children:"双方机体初始机头朝向对手方向（玩家1朝南，玩家2朝北）。"})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"回合流程"}),o.jsxs("div",{className:"rules-flow",children:[o.jsxs("div",{className:"rules-flow__step",children:[o.jsx("span",{className:"rules-flow__num",children:"1"}),o.jsxs("div",{children:[o.jsx("strong",{children:"抽牌阶段"}),o.jsxs("p",{children:["双方各从牌组顶抽取等同于自己机体",o.jsx("b",{children:"回避值"}),"数量的牌。若牌组耗尽，废弃区的牌重新洗混后继续抽取。"]})]})]}),o.jsxs("div",{className:"rules-flow__step",children:[o.jsx("span",{className:"rules-flow__num",children:"2"}),o.jsxs("div",{children:[o.jsx("strong",{children:"布局阶段"}),o.jsxs("p",{children:["双方各自秘密为",o.jsx("b",{children:"主要阶段1"}),"和",o.jsx("b",{children:"主要阶段2"}),"各布置一张行动牌（面朝下）， 然后将设备交给对方进行同样操作。双方确认后，翻开亮牌，进入行动阶段。"]})]})]}),o.jsxs("div",{className:"rules-flow__step",children:[o.jsx("span",{className:"rules-flow__num",children:"3"}),o.jsxs("div",{children:[o.jsx("strong",{children:"行动主要阶段1 & 主要阶段2"}),o.jsxs("p",{children:["每个段落依次经历四个时机：",o.jsx("b",{children:"移动 → 射击 → 近战 → 特殊"}),'。 每个时机内，双方按该时机的优先顺序依次行动（详见"行动顺序"）。']})]})]}),o.jsxs("div",{className:"rules-flow__step",children:[o.jsx("span",{className:"rules-flow__num",children:"4"}),o.jsxs("div",{children:[o.jsx("strong",{children:"清理阶段"}),o.jsx("p",{children:"将已布置的牌（主要阶段1→主要阶段2顺序）和手中剩余的牌全部放入废弃区，准备下一回合。"})]})]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"行动顺序与先制值"}),o.jsxs("p",{children:["每台机体有固定的",o.jsx("b",{children:"先制值（数字越大越快）"}),"。先制值高的玩家在每个时机优先行动，但不同时机的排序逻辑有所不同："]}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"移动时机："}),"先比较该段落的",o.jsx("b",{children:"移动牌面数值"}),"（移动值大的先动）；移动值相同时再比先制值。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"射击/近战/特殊时机："}),"直接按",o.jsx("b",{children:"先制值"}),"排序（高者先行动）。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"平局处理："}),"先制值相同时，玩家1优先行动。"]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"机头朝向与攻击扇区"}),o.jsxs("p",{children:["每台机体具有明确的",o.jsx("b",{children:"机头朝向"}),"（N/S/E/W），初始朝向对手方向。"]}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"攻击限制："}),"射击攻击只能对准",o.jsx("b",{children:"机体正前方（含正侧方延长线）180°扇区"}),"内的目标。目标在机体正后方时无法射击。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"朝向更新："}),"机体移动后，机头自动朝向移动方向。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"手动调整："}),'可在白兵时机前使用"调整朝向"按钮免费更改机头方向，无需消耗任何牌。']}),o.jsxs("li",{children:[o.jsx("b",{children:"近战无扇区限制："}),"白兵/突击攻击不受前方扇区约束，可攻击相邻格的敌方。"]})]}),o.jsx("p",{className:"rules-note",children:"注：扇区边界（正侧方延长线上的格子）视为前方，可以攻击。"})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"行动时机说明"}),o.jsxs("div",{className:"rules-timing-grid",children:[o.jsxs("div",{className:"rules-timing-card",children:[o.jsx("span",{className:"rules-timing-icon",children:"🏃"}),o.jsx("strong",{children:"移动时机"}),o.jsxs("p",{children:["若该段落布局的是",o.jsx("b",{children:"移动牌"}),"，则可在地图上移动。移动力数值决定可移动格数；地形代价和高度差均额外消耗移动力。无移动牌则自动跳过。"]})]}),o.jsxs("div",{className:"rules-timing-card",children:[o.jsx("span",{className:"rules-timing-icon",children:"🎯"}),o.jsx("strong",{children:"射击时机"}),o.jsxs("p",{children:["若该段落布局的是",o.jsx("b",{children:"射击牌"}),"，可对正前方扇区内、射程范围内且视线通畅的敌方发动远程攻击。若",o.jsx("b",{children:"主要阶段1布置了瞄准牌"}),"，则主要阶段2的射击伤害额外+1。"]})]}),o.jsxs("div",{className:"rules-timing-card",children:[o.jsx("span",{className:"rules-timing-icon",children:"⚔️"}),o.jsx("strong",{children:"近战时机"}),o.jsxs("p",{children:["若该段落布局的是",o.jsx("b",{children:"近战牌"}),"，可对",o.jsx("b",{children:"相邻格（切比雪夫距离=1）"}),"的敌方发动近战攻击，无扇区限制。主要阶段1有瞄准牌时，主要阶段2的近战伤害也+1。"]})]}),o.jsxs("div",{className:"rules-timing-card",children:[o.jsx("span",{className:"rules-timing-icon",children:"⚡"}),o.jsx("strong",{children:"特殊时机"}),o.jsxs("p",{children:[o.jsx("b",{children:"突击牌"}),"→冲锋至目标相邻格再发动突击；",o.jsx("b",{children:"机雷牌"}),"→在附近格部署机雷；",o.jsx("b",{children:"护甲牌"}),"→在本时机被动生效（减少受到的伤害）。无特殊牌则跳过。"]})]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"移动规则"}),o.jsxs("p",{children:["移动时，机体从当前格出发按移动牌数值进行扩展，每进入一个格子消耗对应地形的基础代价 ",o.jsx("b",{children:"加上高度差"}),"："]}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"地形"}),o.jsx("th",{children:"基础移动代价"}),o.jsx("th",{children:"战斗效果"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"平地"}),o.jsx("td",{children:"1"}),o.jsx("td",{children:"无"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"砂地"}),o.jsx("td",{children:"1"}),o.jsx("td",{children:"无"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"废墟"}),o.jsx("td",{children:"2"}),o.jsx("td",{children:"无"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"森林"}),o.jsx("td",{children:"2"}),o.jsx("td",{children:"处于其中的机体受到射击伤害 −1（掩护）"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"高地"}),o.jsx("td",{children:"1 + 高度差*"}),o.jsx("td",{children:"可遮蔽视线（高地墙）；本身无伤害加成"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"水域"}),o.jsx("td",{children:"3"}),o.jsx("td",{children:"在其中发射能量武器时伤害 −1"})]})]})]}),o.jsx("p",{className:"rules-note",children:"* 高度差代价：进入比当前格海拔更高的地形时，额外消耗等同于高度差的移动力（例如从海拔0进入海拔2，共消耗 1+2=3 点）。下坡无额外代价。"}),o.jsx("p",{className:"rules-note",children:"注：机体不能占据对手所在的格子。移动途中触碰到敌方机雷将立即停止并引爆。"})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"射程、视线与距离衰减"}),o.jsxs("p",{children:["距离使用",o.jsx("b",{children:"切比雪夫距离"}),"（8方向棋格距离：行差与列差的最大值）。 射击牌有最小射程和最大射程，目标须在此范围内。"]}),o.jsx("p",{children:"视线（LOS）检查规则："}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"森林不阻断视线，"}),"但能为处于其中的机体提供掩护（受击伤害-1）。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"高地阻断："}),"若射线上存在海拔高于攻防双方的高地格，则视线被遮挡，无法射击。"]}),o.jsx("li",{children:"其他地形（平地、砂地、废墟、水域）均不影响视线。"})]}),o.jsxs("p",{children:[o.jsx("b",{children:"距离衰减（部分武器）："}),'部分武器卡设有"最佳射程"，超出最佳射程后每多1格伤害递减（递减值见卡面），但不超过最大射程仍可开火。']})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"伤害与摧毁"}),o.jsxs("p",{children:["攻击命中后，系统计算最终伤害值，然后进入",o.jsx("b",{children:"伤害分配"}),"。伤害来源不同，分配规则不同："]}),o.jsx("p",{children:o.jsx("b",{children:"🎯 射击伤害（防守方自由选择）："})}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:["防守方可自由选择要摧毁的牌，范围包括：手牌、辅助区、",o.jsx("b",{children:"已布局的牌（主要阶段1/2）"}),"以及牌组中的牌。"]}),o.jsx("li",{children:'每次选1张，直至选满伤害值。也可点击"确认"将剩余伤害交由系统从牌组顶端自动处理。'}),o.jsxs("li",{children:[o.jsx("b",{children:"使用了瞄准牌的射击："}),"攻击方额外获得一项权利——可",o.jsx("b",{children:"指定"}),"防守方必须销毁的第一张牌。"]})]}),o.jsx("p",{children:o.jsx("b",{children:"⚔️ 白兵/突击伤害（强制翻牌库顶）："})}),o.jsxs("ul",{className:"rules-list",children:[o.jsx("li",{children:"防守方无权选择，系统直接从牌库顶翻牌销毁，数量等于最终伤害值。"}),o.jsx("li",{children:"牌库翻完后从废弃区重洗继续。"})]}),o.jsx("p",{children:o.jsx("b",{children:"💣 爆弹标记诱爆："})}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:["若被摧毁的牌带有",o.jsx("b",{children:"爆弹标记（💣）"}),"，将额外追加摧毁1张牌（从牌库顶强制翻出）。"]}),o.jsxs("li",{children:["该额外摧毁",o.jsx("b",{children:"不会"}),"再触发新的连锁诱爆（每次伤害结算中仅触发1次诱爆）。"]}),o.jsx("li",{children:'注意：◆标记是区分"改"型变种卡的符号，与诱爆无关。'})]}),o.jsx("p",{className:"rules-note",children:"注：若牌组耗尽，继续从废弃区（重新洗混后）取牌销毁。"})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"卡牌类型"}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"类型"}),o.jsx("th",{children:"使用时机"}),o.jsx("th",{children:"说明"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"移动牌"}),o.jsx("td",{children:"移动时机"}),o.jsx("td",{children:"按牌面数值移动；机体沿4方向移动，移动后机头自动朝向移动方向"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"射击牌"}),o.jsx("td",{children:"射击时机"}),o.jsx("td",{children:"远程攻击，需在机头前方扇区内、射程内且视线通畅；部分武器具有距离衰减"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"近战牌"}),o.jsx("td",{children:"近战时机"}),o.jsx("td",{children:"攻击相邻格（切比雪夫距离=1）的敌方，无扇区限制"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"突击牌"}),o.jsx("td",{children:"特殊时机"}),o.jsx("td",{children:"先冲锋至目标相邻格，再以（突击值−被突击防御值）为基础伤害发动突击；白兵/突击伤害强制从牌库顶翻出"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"护甲牌"}),o.jsx("td",{children:"被动防御"}),o.jsx("td",{children:"布局后，本段受到攻击时每张护甲牌抵消1点伤害"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"瞄准牌"}),o.jsx("td",{children:"攻击辅助"}),o.jsxs("td",{children:["布置于",o.jsx("b",{children:"主要阶段1"}),"时，使",o.jsx("b",{children:"主要阶段2"}),"的射击/近战/突击攻击伤害+1，且攻方可指定防守方销毁目标"]})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"机雷牌"}),o.jsx("td",{children:"特殊时机"}),o.jsx("td",{children:"在机体周围格部署机雷；敌方移动途经该格时自动引爆，造成机雷伤害"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"特殊牌"}),o.jsx("td",{children:"—"}),o.jsx("td",{children:"ダミー等占位牌，无实际效果"})]})]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"胜利条件"}),o.jsx("p",{children:"每次伤害结算结束后，系统自动检查双方是否满足败北条件。满足任意一条即判败："}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"牌组耗尽："}),"尚未进入破坏区的所有牌（手牌 + 牌库 + 辅助区 + ",o.jsx("b",{children:"已布局的牌"}),"）总数 ≤ 3"]}),o.jsxs("li",{children:[o.jsx("b",{children:"战力耗尽："}),"所有",o.jsx("b",{children:"攻击牌"}),"（射击牌、近战牌、突击牌）均被摧毁"]})]}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:["若对手率先满足败北条件 → ",o.jsx("b",{children:"己方获胜"})]}),o.jsxs("li",{children:["若双方同时满足 → ",o.jsx("b",{children:"平局"})]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"高级效果速查"}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"效果"}),o.jsx("th",{children:"触发条件"}),o.jsx("th",{children:"具体效果"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"瞄准"}),o.jsx("td",{children:"主要阶段1布局瞄准牌 + 主要阶段2布局攻击牌"}),o.jsxs("td",{children:["主要阶段2的射击/近战/突击伤害+1；且攻方可指定防守方",o.jsx("b",{children:"必须"}),"销毁的第一张牌"]})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"装甲"}),o.jsx("td",{children:"防守方在被攻击段落布局了护甲牌"}),o.jsx("td",{children:"每张护甲牌抵消1点最终伤害（下限为0）"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"森林掩护"}),o.jsx("td",{children:"防守方站在森林格中被射击"}),o.jsx("td",{children:"受到的射击伤害 −1（近战/突击无此效果）"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"水域衰减"}),o.jsx("td",{children:"攻击方站在水域中使用能量武器射击"}),o.jsx("td",{children:"射击伤害 −1"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"突击冲锋"}),o.jsx("td",{children:"突击牌布局后在特殊时机选择目标"}),o.jsx("td",{children:'先自动移动至目标相邻格，再造成（突击值−被突击防御）点伤害；伤害来源为"突击"，强制从牌库顶翻出'})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"机雷部署"}),o.jsx("td",{children:"机雷牌布局后在特殊时机选择格子"}),o.jsx("td",{children:"放置机雷标记；敌方途经时立即停止并承受机雷伤害，机雷随即消失"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"💣 爆弹诱爆"}),o.jsx("td",{children:"带爆弹标记（💣）的牌被摧毁时"}),o.jsx("td",{children:"额外从牌库顶翻出1张牌强制销毁；该额外销毁不再触发新的连锁"})]})]})]})]}),o.jsxs("section",{className:"rules-section rules-section--diff",children:[o.jsx("h2",{className:"rules-section__title rules-section__title--diff",children:"⚠ 本版本与官方原版的已知差异"}),o.jsx("p",{className:"rules-note",children:"以下是本网游版出于实现便捷性而保留的简化，与桌游官方规则（规则书/FAQ）存在差异。"}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"规则项"}),o.jsx("th",{children:"本版本实现"}),o.jsx("th",{children:"官方原版规则"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"诱爆机制"}),o.jsx("td",{children:"爆弹牌被销毁时立即追加1次额外销毁，连锁止于1层"}),o.jsx("td",{children:"所有伤害结算完毕后，统计本次被销毁的爆弹牌数N，从牌库顶翻N张：其中有爆弹标记的被销毁，无标记的入废弃堆（可能触发多轮连锁）"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"射击伤害选牌顺序"}),o.jsx("td",{children:"防守方可自由从任意区域（含牌库）选择销毁目标"}),o.jsx("td",{children:"应优先从手牌、辅助区、布局区中选择，牌库最后选取"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"回避掷骰"}),o.jsx("td",{children:"未实现；机体回避值仅影响抽牌数量"}),o.jsx("td",{children:"攻击命中前需进行回避判定；回避值影响躲避成功率"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"先制平局"}),o.jsx("td",{children:"先制值相同时玩家1固定优先"}),o.jsx("td",{children:"应由队伍标记物编号（チームチット番号）决定"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"对战模式"}),o.jsx("td",{children:"本机热座 1v1"}),o.jsx("td",{children:"官方支持最多 4v4 双人组队对战"})]})]})]})]})]}),o.jsx("style",{children:Cv})]})}const Cv=`
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
`;function Nv({onBack:e}){const[n,t]=w.useState("maps");return o.jsxs("div",{className:"data-page",children:[o.jsxs("div",{className:"data-page__header",children:[o.jsx("button",{className:"data-page__back",onClick:e,children:"← 返回"}),o.jsx("h1",{className:"data-page__title",children:"游戏资料"})]}),o.jsxs("div",{className:"data-page__tabs",children:[o.jsx("button",{className:`data-tab ${n==="maps"?"data-tab--active":""}`,onClick:()=>t("maps"),children:"地图"}),o.jsx("button",{className:`data-tab ${n==="units"?"data-tab--active":""}`,onClick:()=>t("units"),children:"机体"}),o.jsx("button",{className:`data-tab ${n==="cards"?"data-tab--active":""}`,onClick:()=>t("cards"),children:"卡牌"})]}),o.jsxs("div",{className:"data-page__content",children:[n==="maps"&&o.jsx(Mv,{}),n==="units"&&o.jsx(Dv,{}),n==="cards"&&o.jsx($v,{})]}),o.jsx("style",{children:zv})]})}const $m={plain:"#8fbc5a",sand:"#d4b483",rubble:"#9e8f7a",forest:"#2d7a2d",water:"#4477cc",highland:"#c4955a"},Am={plain:"平地",sand:"沙地",rubble:"瓦砾",forest:"森林",water:"水域",highland:"高地"};function Mv(){const[e,n]=w.useState(Ze[0].id),t=Ze.find(r=>r.id===e);return o.jsxs("div",{className:"maps-panel",children:[o.jsx("div",{className:"maps-panel__selector",children:Ze.map(r=>o.jsx("button",{className:`map-sel-btn ${r.id===e?"map-sel-btn--active":""}`,onClick:()=>n(r.id),children:r.nameCn},r.id))}),o.jsxs("div",{className:"maps-panel__body",children:[o.jsx(Tv,{map:t}),o.jsx(Ev,{})]})]})}function Tv({map:e}){const n=new Set(e.startZones[0].map(r=>`${r.row},${r.col}`)),t=new Set(e.startZones[1].map(r=>`${r.row},${r.col}`));return o.jsxs("div",{className:"mini-map-wrapper",children:[o.jsxs("div",{className:"mini-map__title",children:[e.nameCn,"（",e.width,"×",e.height,"）"]}),o.jsx("div",{className:"mini-map__grid",style:{gridTemplateColumns:`repeat(${e.width}, 28px)`,gridTemplateRows:`repeat(${e.height}, 28px)`},children:e.cells.flatMap((r,a)=>r.map((i,s)=>{const c=`${a},${s}`,d=n.has(c),u=t.has(c),p=$m[i.terrain]??"#888";return o.jsxs("div",{className:"mini-map__cell",style:{background:p},title:`(${s},${a}) ${Am[i.terrain]??i.terrain}${i.terrain==="highland"?" Lv"+i.elevation:""}`,children:[d&&o.jsx("span",{className:"mini-map__marker mini-map__marker--p1",children:"①"}),u&&o.jsx("span",{className:"mini-map__marker mini-map__marker--p2",children:"②"}),i.terrain==="highland"&&o.jsx("span",{className:"mini-map__elev",children:i.elevation})]},c)}))})]})}function Ev(){return o.jsxs("div",{className:"map-legend",children:[o.jsx("div",{className:"map-legend__title",children:"地形图例"}),Object.entries(Am).map(([e,n])=>o.jsxs("div",{className:"map-legend__item",children:[o.jsx("span",{className:"map-legend__swatch",style:{background:$m[e]}}),o.jsx("span",{children:n})]},e)),o.jsxs("div",{className:"map-legend__item",children:[o.jsx("span",{className:"map-legend__marker-demo mini-map__marker--p1",children:"①"}),o.jsx("span",{children:"玩家1出发区"})]}),o.jsxs("div",{className:"map-legend__item",children:[o.jsx("span",{className:"map-legend__marker-demo mini-map__marker--p2",children:"②"}),o.jsx("span",{children:"玩家2出发区"})]}),o.jsx("div",{className:"map-legend__note",children:"高地格显示海拔等级（1–3），移动力消耗与平地相同，提供射程视野优势。"})]})}function Dv(){return o.jsxs("div",{className:"units-panel",children:[o.jsxs("table",{className:"units-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"机体"}),o.jsx("th",{children:"日文名"}),o.jsx("th",{children:"型号"}),o.jsx("th",{children:"先制"}),o.jsx("th",{children:"移动"}),o.jsx("th",{children:"回避"}),o.jsx("th",{children:"突击"}),o.jsx("th",{children:"防突击"})]})}),o.jsx("tbody",{children:[...q].sort((e,n)=>e.initiative-n.initiative).map(e=>o.jsxs("tr",{children:[o.jsxs("td",{className:"units-table__name",children:[o.jsx("img",{src:`/assets/tokens/${e.tokenId}`,alt:e.nameCn,className:"units-table__token",onError:n=>{n.target.style.display="none"}}),e.nameCn]}),o.jsx("td",{className:"units-table__ja",children:e.nameJa}),o.jsx("td",{children:e.type}),o.jsx("td",{className:"units-table__num",children:e.initiative}),o.jsx("td",{className:"units-table__num",children:e.movement}),o.jsx("td",{className:"units-table__num",children:e.evasion}),o.jsx("td",{className:"units-table__num",children:e.assault}),o.jsx("td",{className:"units-table__num",children:e.assaultDef})]},e.id))})]}),o.jsxs("div",{className:"units-note",children:[o.jsx("strong",{children:"型号说明："}),"SS/S/M/L/LL = 体型；軽/中/重 = 重量等级；単座 = 单人驾驶。 先制值越小先手越快，移动值为每回合最大移动格数，回避值为被击中时消耗的伤害数量。"]})]})}const Vm={movement:"移动",ranged:"射击",melee:"近战",special:"特殊",mine:"机雷",aim:"瞄准",armor:"装甲",charge:"突击",auxiliary:"辅助"},zm={movement:"#66ccaa",ranged:"#4499ee",melee:"#ff9944",special:"#cc88ff",mine:"#ff6688",aim:"#ffdd44",armor:"#88aacc",charge:"#ff6644",auxiliary:"#aaaacc"};function $v(){const e=Object.keys(ma),[n,t]=w.useState(e[0]),r=ma[n]??[];let a=n;const i=q.find(s=>n.startsWith(s.deckCode));return i&&(n.endsWith("+")?a=`${i.nameCn} (Plus)`:a=i.nameCn),o.jsxs("div",{className:"cards-panel",children:[o.jsx("div",{className:"cards-panel__unit-tabs",children:e.map(s=>{const c=q.find(p=>s.startsWith(p.deckCode));let d=s,u=null;return c&&(u=`/assets/tokens/${c.tokenId}`,d=s.endsWith("+")?`${c.nameCn}+`:c.nameCn),o.jsxs("button",{className:`unit-tab ${s===n?"unit-tab--active":""}`,onClick:()=>t(s),children:[u&&o.jsx("img",{src:u,alt:d,className:"unit-tab__token",onError:p=>{p.target.style.display="none"}}),o.jsx("span",{children:d})]},s)})}),o.jsxs("div",{className:"cards-panel__header",children:[o.jsx("span",{className:"cards-panel__unit-name",children:a}),o.jsxs("span",{className:"cards-panel__count",children:["共 ",r.length," 张卡牌"]})]}),o.jsx("div",{className:"cards-panel__summary",children:o.jsx(Av,{deck:r})}),o.jsx("div",{className:"cards-panel__list",children:r.map(s=>o.jsx(Vv,{card:s},s.id))})]})}function Av({deck:e}){const n={};for(const t of e)n[t.actionType]=(n[t.actionType]??0)+1;return o.jsx("div",{className:"card-type-summary",children:Object.entries(n).sort(([t],[r])=>t.localeCompare(r)).map(([t,r])=>o.jsxs("span",{className:"card-type-badge",style:{background:zm[t]??"#888"},children:[Vm[t]??t," ×",r]},t))})}function Vv({card:e}){const n=Vm[e.actionType]??e.actionType,t=zm[e.actionType]??"#888",{zoom:r,getZoomHandlers:a}=br(),i=`/assets/${e.frontImageId}`;let s="";return e.actionType==="movement"&&e.movementValue!==void 0?s=`移动 ${e.movementValue}`:(e.actionType==="ranged"||e.actionType==="melee")&&e.damage!==void 0?e.rangeMin!==void 0&&e.rangeMax!==void 0?s=`射程 ${e.rangeMin}–${e.rangeMax}  伤害 ${e.damage}`:s=`伤害 ${e.damage}`:e.actionType==="charge"&&e.damage!==void 0&&(s=`伤害 ${e.damage}`),o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"card-row",...a(i),children:[o.jsx("div",{className:"card-row__image-wrap",children:o.jsx("img",{src:i,alt:e.nameCn,className:"card-row__image",onError:c=>{c.target.style.display="none"}})}),o.jsx("span",{className:"card-row__type",style:{background:t},children:n}),o.jsx("span",{className:"card-row__name",children:e.nameCn}),e.effectText?o.jsx("span",{className:"card-row__effect",children:e.effectText}):s&&o.jsx("span",{className:"card-row__detail",children:s}),e.isKaiVariant&&o.jsx("span",{className:"card-row__kai",title:"改型标记",children:"◆"}),e.hasBombIcon&&o.jsx("span",{className:"card-row__bomb",title:"诱爆",children:"💥"})]}),o.jsx(_r,{zoom:r})]})}const zv=`
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
`;function Xo(){const{state:e,getCard:n,exposureMode:t}=Ne(),[r,a]=w.useState(null),{zoom:i,getZoomHandlers:s}=br(),c=e.phase==="plotting"?e.plottingStep==="player2"?"player2":"player1":e.activePlayer??"player1",d=r??c,u=e.players[d],p=q.find(h=>h.id===u.unitId),m=t?!1:Pv(e),g={N:"↑北",S:"↓南",E:"→东",W:"←西"}[u.facing]??u.facing;return o.jsxs("div",{className:"mp",children:[o.jsxs("div",{className:"mp__tabs",children:[e.playerIds.map(h=>o.jsxs("button",{className:`mp__tab ${d===h?"mp__tab--active":""}`,onClick:()=>a(f=>f===h?null:h),children:[`P${e.playerIds.indexOf(h)+1}`,h===c&&o.jsx("span",{className:"mp__tab-dot"})]},h)),o.jsx("span",{className:"mp__phase-hint",children:e.phase==="plotting"?"布局中":"行动中"})]}),p&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"mp__header",children:[o.jsx("img",{src:`/assets/tokens/${p.tokenId}`,alt:p.nameCn,className:"mp__token",onError:h=>{h.target.style.opacity="0.3"}}),o.jsxs("div",{className:"mp__header-info",children:[o.jsx("div",{className:"mp__unit-name",children:p.nameCn}),o.jsx("div",{className:"mp__unit-sub",children:p.nameJa}),o.jsxs("div",{className:"mp__pos",children:["格 (",u.position.row,",",u.position.col,")   ",g]})]})]}),o.jsxs("div",{className:"mp__stats",children:[o.jsx(Ar,{label:"先制",value:p.initiative,color:"#f0c040"}),o.jsx(Ar,{label:"移动",value:p.movement,color:"#66ccaa"}),o.jsx(Ar,{label:"回避",value:p.evasion,color:"#88aaff"}),o.jsx(Ar,{label:"突击",value:p.assault,color:"#ff9944"}),o.jsx(Ar,{label:"被突",value:p.assaultDef,color:"#ff6666"})]}),o.jsxs("div",{className:"mp__zones",children:[o.jsxs("div",{className:"mp__zone mp__zone--aux",children:[o.jsx("div",{className:"mp__zone-label",children:"辅助区"}),u.auxiliary.length===0?o.jsx("div",{className:"mp__zone-empty",children:"—"}):(()=>{const h=new Map;for(const y of u.auxiliary){const _=n(y.defId),v=(_==null?void 0:_.nameJa)??y.defId,x=h.get(v);x?(x.totalCount++,y.destroyed||x.liveCount++):h.set(v,{nameCn:(_==null?void 0:_.nameCn)??y.defId,liveCount:y.destroyed?0:1,totalCount:1})}const f=y=>{const _=jn(u,n,"movement"),v=jn(u,n,"melee"),x=jn(u,n,"charge");return y==="バーニア"?_.vernier||v.vernier:y==="ムーブセンサー"?v.moveSensor:y==="ホイール"?_.wheel||x.wheel:!1};return o.jsxs(o.Fragment,{children:[u.auxiliary.map(y=>{const _=n(y.defId),v=_!=null&&_.frontImageId?`/assets/${_.frontImageId}`:null;return o.jsxs("div",{className:`mp__aux-card${y.destroyed?" mp__aux-card--destroyed":""}`,...v?s(v):{},children:[o.jsx("span",{className:"mp__aux-name",children:(_==null?void 0:_.nameCn)??y.defId}),y.destroyed&&o.jsx("span",{className:"mp__aux-dead",children:"✕"})]},y.instanceId)}),o.jsx("div",{className:"mp__aux-badges",children:Array.from(h.entries()).map(([y,_])=>{const v=f(y);return o.jsxs("div",{className:`mp__aux-status ${v?"mp__aux-status--on":"mp__aux-status--off"}`,title:v?"效果激活中":"需要≥2张存活才能激活",children:[v?"✓":"✗"," ",_.nameCn,o.jsxs("span",{className:"mp__aux-count",children:["(",_.liveCount,"/",_.totalCount,")"]})]},y)})})]})})()]}),o.jsxs("div",{className:"mp__counts",children:[o.jsx(no,{icon:"🃏",label:"手牌",count:u.hand.filter(h=>!h.destroyed).length}),o.jsx(no,{icon:"📚",label:"牌库",count:u.deck.filter(h=>!h.destroyed).length}),o.jsx(no,{icon:"♻️",label:"弃牌",count:u.discard.filter(h=>!h.destroyed).length}),o.jsx(no,{icon:"💀",label:"破坏",count:u.destroyedCards.length})]})]}),o.jsxs("div",{className:"mp__plot",children:[o.jsx("div",{className:"mp__plot-label",children:"布局段落"}),o.jsxs("div",{className:"mp__plot-slots",children:[o.jsx(Qd,{label:"主要阶段一",card:u.plotSeg1,getCard:n,hidden:m,getZoomHandlers:s}),o.jsx(Qd,{label:"主要阶段二",card:u.plotSeg2,getCard:n,hidden:m,getZoomHandlers:s})]})]})]}),o.jsx("style",{children:Lv}),o.jsx(_r,{zoom:i})]})}function Pv(e,n){return e.phase==="plotting"?e.plottingStep!=="complete":!1}function Ar({label:e,value:n,color:t}){return o.jsxs("div",{className:"mp__stat",children:[o.jsx("span",{className:"mp__stat-lbl",children:e}),o.jsx("span",{className:"mp__stat-val",style:{color:t},children:n})]})}function no({icon:e,label:n,count:t}){return o.jsxs("div",{className:"mp__zcount",children:[o.jsx("span",{className:"mp__zcount-icon",children:e}),o.jsx("span",{className:"mp__zcount-lbl",children:n}),o.jsx("span",{className:"mp__zcount-n",children:t})]})}function Qd({label:e,card:n,getCard:t,hidden:r,getZoomHandlers:a}){const i=n?t(n.defId):null,s=i!=null&&i.frontImageId?`/assets/${i.frontImageId}`:null;return o.jsxs("div",{className:"mp__slot",children:[o.jsx("div",{className:"mp__slot-lbl",children:e}),n?r?o.jsx("div",{className:"mp__slot-hidden",children:"???"}):o.jsxs("div",{className:"mp__slot-card",...s?a(s):{},children:[o.jsx("span",{className:"mp__slot-name",children:(i==null?void 0:i.nameCn)??n.defId}),o.jsx("span",{className:`mp__slot-type mp__slot-type--${(i==null?void 0:i.actionType)??"unknown"}`,children:(i==null?void 0:i.actionType)??"?"})]}):o.jsx("div",{className:"mp__slot-empty",children:"— 未布局 —"})]})}const Lv=`
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
`,Rv={slot_1:"存档位 1",slot_2:"存档位 2",slot_3:"存档位 3",slot_4:"存档位 4",slot_5:"存档位 5",auto:"自动存档"},Ov=[...cx,"auto"];function Kv(e){const n=new Date(e),t=r=>String(r).padStart(2,"0");return`${n.getFullYear()}-${t(n.getMonth()+1)}-${t(n.getDate())} ${t(n.getHours())}:${t(n.getMinutes())}`}function qd({mode:e,onBack:n,onLoad:t,currentState:r,aiConfig:a}){const[i,s]=w.useState([]),[c,d]=w.useState(null),[u,p]=w.useState(null),[m,g]=w.useState(null),[h,f]=w.useState(null);w.useEffect(()=>{s(Md())},[]);function y(){s(Md())}function _(k){g(k),setTimeout(()=>g(null),2e3)}function v(k){return i.find(S=>S.slotId===k)}function x(k){if(!r||!a)return;if(v(k)){p(k);return}b(k)}function b(k){if(!(!r||!a))try{Tm(k,r,a,!1),y(),p(null),_("存档已保存")}catch(S){f(S instanceof Error?S.message:"保存失败")}}function j(k){const S=ux(k);if(!S){f("存档数据已损坏，无法加载");return}t==null||t(S)}function T(k){px(k),y(),d(null),_("存档已删除")}const $=e==="save"?"保存游戏":"加载存档";return o.jsxs("div",{className:"sl-screen",children:[o.jsxs("div",{className:"sl-panel",children:[o.jsx("h2",{className:"sl-title",children:$}),o.jsx("div",{className:"sl-slots",children:Ov.map(k=>{const S=v(k),E=e==="save"&&!(k==="auto")&&r!=null;return o.jsxs("div",{className:`sl-slot ${S?"sl-slot--occupied":"sl-slot--empty"}`,children:[o.jsxs("div",{className:"sl-slot__label",children:[Rv[k],(S==null?void 0:S.isAutoSave)&&o.jsx("span",{className:"sl-badge",children:"自动"})]}),S?o.jsxs("div",{className:"sl-slot__info",children:[o.jsxs("span",{className:"sl-slot__units",children:[S.player1Unit," vs ",S.player2Unit]}),o.jsx("span",{className:"sl-slot__map",children:S.mapName}),o.jsxs("span",{className:"sl-slot__round",children:["第 ",S.roundNumber," 回合"]}),o.jsx("span",{className:"sl-slot__time",children:Kv(S.timestamp)})]}):o.jsx("div",{className:"sl-slot__info sl-slot__empty-label",children:"空存档位"}),o.jsxs("div",{className:"sl-slot__actions",children:[e==="load"&&S&&o.jsx("button",{className:"sl-btn sl-btn--primary",onClick:()=>j(k),children:"加载"}),E&&o.jsx("button",{className:"sl-btn sl-btn--primary",onClick:()=>x(k),children:S?"覆盖":"保存"}),S&&(c===k?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"sl-confirm-text",children:"确认删除？"}),o.jsx("button",{className:"sl-btn sl-btn--danger",onClick:()=>T(k),children:"确认"}),o.jsx("button",{className:"sl-btn",onClick:()=>d(null),children:"取消"})]}):o.jsx("button",{className:"sl-btn sl-btn--ghost",onClick:()=>d(k),children:"删除"}))]}),u===k&&o.jsxs("div",{className:"sl-overwrite",children:[o.jsx("span",{children:"覆盖此存档？"}),o.jsx("button",{className:"sl-btn sl-btn--primary",onClick:()=>b(k),children:"确认"}),o.jsx("button",{className:"sl-btn",onClick:()=>p(null),children:"取消"})]})]},k)})}),h&&o.jsxs("div",{className:"sl-error",onClick:()=>f(null),children:["⚠ ",h]}),o.jsx("button",{className:"sl-back-btn",onClick:n,children:"← 返回"})]}),m&&o.jsx("div",{className:"sl-toast",children:m}),o.jsx("style",{children:Jv})]})}const Jv=`
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
`;function Bv({currentState:e}){const{rawDispatch:n}=Ne();return w.useEffect(()=>{n({type:"LOAD_GAME",state:e})},[e,n]),o.jsx("div",{style:{height:"100%",width:"100%"},children:o.jsx(gr,{})})}function Fv({currentState:e}){return o.jsx(hi,{children:o.jsx(Em,{children:o.jsx(Bv,{currentState:e})})})}function Gv({onBack:e}){const[n,t]=w.useState("list"),[r,a]=w.useState(null);function i(c){a(c),t("playback")}function s(){a(null),t("list")}return n==="playback"&&r?o.jsx(Zv,{replayData:r,onExit:s}):o.jsx(Uv,{onBack:e,onPlay:i})}function Pm(e){const n=_x(e.initialState,e.actions),t=new Blob([n],{type:"text/plain;charset=utf-8"}),r=URL.createObjectURL(t),a=document.createElement("a");a.href=r;const i=new Date(e.metadata.timestamp),s=d=>String(d).padStart(2,"0"),c=`replay_${e.metadata.player1Unit}_vs_${e.metadata.player2Unit}_${i.getFullYear()}${s(i.getMonth()+1)}${s(i.getDate())}_${s(i.getHours())}${s(i.getMinutes())}.txt`;a.download=c,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(r)}function Uv({onBack:e,onPlay:n}){const[t,r]=w.useState([]),[a,i]=w.useState(null),[s,c]=w.useState(null);w.useEffect(()=>{r(Td())},[]);function d(m){const g=Ed(m);if(!g){c("录像数据已损坏，无法播放");return}n(g)}function u(m){const g=Ed(m);if(!g){c("录像数据已损坏，无法导出");return}Pm(g)}function p(m){gx(m),r(Td()),i(null)}return o.jsxs("div",{className:"rp-screen",children:[o.jsxs("div",{className:"rp-panel",children:[o.jsx("h2",{className:"rp-title",children:"回放录像"}),t.length===0?o.jsx("div",{className:"rp-empty",children:"暂无保存的录像"}):o.jsx("div",{className:"rp-list",children:t.map(m=>o.jsxs("div",{className:"rp-item",children:[o.jsxs("div",{className:"rp-item__info",children:[o.jsxs("span",{className:"rp-item__units",children:[m.player1Unit," vs ",m.player2Unit]}),o.jsx("span",{className:"rp-item__map",children:m.mapName}),o.jsxs("span",{className:"rp-item__rounds",children:[m.totalRounds," 回合"]}),m.winner&&o.jsx("span",{className:"rp-item__winner",children:m.winner==="draw"?"平局":`${m.winner==="player1"?"P1":"P2"} 获胜`}),o.jsx("span",{className:"rp-item__time",children:Yv(m.timestamp)})]}),o.jsxs("div",{className:"rp-item__actions",children:[o.jsx("button",{className:"rp-btn rp-btn--primary",onClick:()=>d(m.replayId),children:"▶ 播放"}),o.jsx("button",{className:"rp-btn",onClick:()=>u(m.replayId),children:"导出日志"}),a===m.replayId?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"rp-confirm",children:"确认删除？"}),o.jsx("button",{className:"rp-btn rp-btn--danger",onClick:()=>p(m.replayId),children:"确认"}),o.jsx("button",{className:"rp-btn",onClick:()=>i(null),children:"取消"})]}):o.jsx("button",{className:"rp-btn rp-btn--ghost",onClick:()=>i(m.replayId),children:"删除"})]})]},m.replayId))}),s&&o.jsxs("div",{className:"rp-error",onClick:()=>c(null),children:["⚠ ",s]}),o.jsx("button",{className:"rp-back-btn",onClick:e,children:"← 返回"})]}),o.jsx("style",{children:Lm})]})}function Hv(e){const n=[0];let t=e.initialState;for(let r=0;r<e.actions.length;r++){const a=t.phase,i=t.roundNumber,s=t.plottingStep,c=t.currentTiming;t=fn(t,e.actions[r]),(t.phase!==a||t.roundNumber!==i||t.plottingStep!==s||t.currentTiming!==c)&&n.push(r+1)}return n[n.length-1]!==e.actions.length&&n.push(e.actions.length),n}function eu(e,n){let t=e.initialState;for(let r=0;r<n&&r<e.actions.length;r++)t=fn(t,e.actions[r]);return t}function Wv(e,n){const t=i=>{const s=n.players[i],c=q.find(d=>d.id===s.unitId);return(c==null?void 0:c.nameCn)??i},r=i=>{const s=ee(i);return(s==null?void 0:s.nameCn)??i},a=(i,s)=>{const c=n.players[s],u=[...c.deck,...c.hand,...c.auxiliary,...c.discard,...c.destroyedCards,...c.plotSeg1?[c.plotSeg1]:[],...c.plotSeg2?[c.plotSeg2]:[]].find(p=>p.instanceId===i);return u?r(u.defId):i};switch(e.type){case"DRAW_CARDS":return`${t(e.playerId)} 抽取 ${e.count} 张牌`;case"PLOT_CARD":{const i=a(e.instanceId,e.playerId);return`${t(e.playerId)} 布局段落${e.seg}：${i}`}case"CONFIRM_PLOT":return`${t(e.playerId)} 确认布局`;case"ADVANCE_PLOT_STEP":return"布局阶段推进";case"MOVE_UNIT":return`${t(e.playerId)} 移动至 (${e.to.row},${e.to.col})`;case"ADJUST_FACING":return`${t(e.playerId)} 调整朝向 → ${e.facing}`;case"RESOLVE_RANGED":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动射击`;case"RESOLVE_MELEE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动近战`;case"RESOLVE_CHARGE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动突击`;case"PLACE_MINE":return`${t(e.playerId)} 在 (${e.to.row},${e.to.col}) 布雷 (${e.damage}伤害)`;case"SELECT_DAMAGE_CARD":{const i=a(e.instanceId,e.playerId);return`${t(e.playerId)} 选择摧毁：${i}`}case"CONFIRM_DAMAGE_SELECTION":return`${t(e.playerId)} 确认伤害结算`;case"SKIP_ACTION":return"跳过行动";case"ADVANCE_TIMING":return"推进时序";case"ADVANCE_PHASE":return"推进阶段";case"MELEE_SENSOR_MOVE":return`${t(e.playerId)} 近战传感器移动至 (${e.to.row},${e.to.col})`;case"START_PLOTTING":return"进入布局阶段";default:return e.type}}function nu({player:e,label:n}){const t=q.find(c=>c.id===e.unitId),{zoom:r,getZoomHandlers:a}=br(),i=c=>c.filter(d=>!d.destroyed),s={N:"↑北",S:"↓南",E:"→东",W:"←西"}[e.facing]??e.facing;return o.jsxs("div",{className:"rpp",children:[o.jsxs("div",{className:"rpp__header",children:[t&&o.jsx("img",{src:`/assets/tokens/${t.tokenId}`,alt:t.nameCn,className:"rpp__token",onError:c=>{c.target.style.opacity="0.3"}}),o.jsxs("div",{children:[o.jsxs("div",{className:"rpp__name",children:[n,": ",(t==null?void 0:t.nameCn)??e.unitId]}),o.jsxs("div",{className:"rpp__pos",children:["(",e.position.row,",",e.position.col,") ",s]})]})]}),o.jsxs("div",{className:"rpp__counts",children:[o.jsxs("span",{className:"rpp__count",title:"牌库",children:["📚",i(e.deck).length]}),o.jsxs("span",{className:"rpp__count",title:"手牌",children:["🃏",e.hand.length]}),o.jsxs("span",{className:"rpp__count",title:"弃牌",children:["♻️",e.discard.length]}),o.jsxs("span",{className:"rpp__count",title:"破坏",children:["💀",e.destroyedCards.length]})]}),o.jsx("div",{className:"rpp__section-label",children:"布局"}),o.jsxs("div",{className:"rpp__plot-row",children:[o.jsx(tu,{label:"阶段1",card:e.plotSeg1,getZoomHandlers:a}),o.jsx(tu,{label:"阶段2",card:e.plotSeg2,getZoomHandlers:a})]}),o.jsxs("div",{className:"rpp__section-label",children:["手牌 (",e.hand.length,")"]}),o.jsx("div",{className:"rpp__card-list",children:e.hand.length===0?o.jsx("span",{className:"rpp__empty",children:"—"}):e.hand.map(c=>o.jsx(ru,{card:c,getZoomHandlers:a},c.instanceId))}),e.auxiliary.length>0&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"rpp__section-label",children:["辅助 (",i(e.auxiliary).length,"/",e.auxiliary.length,")"]}),o.jsx("div",{className:"rpp__card-list",children:e.auxiliary.map(c=>o.jsx(ru,{card:c,getZoomHandlers:a},c.instanceId))})]}),o.jsx(_r,{zoom:r})]})}function tu({label:e,card:n,getZoomHandlers:t}){const r=n?ee(n.defId):null,a=r!=null&&r.frontImageId?`/assets/${r.frontImageId}`:null,s=r?{movement:"#66ccaa",ranged:"#ff9944",melee:"#ff6060",charge:"#ff4444",aim:"#f0c040",armor:"#88aaff",mine:"#cc88ff",special:"#aaa",auxiliary:"#77ddaa"}[r.actionType]??"#888":"#555";return o.jsxs("div",{className:"rpp__plot-slot",children:[o.jsx("div",{className:"rpp__plot-label",children:e}),n&&r?o.jsxs("div",{className:"rpp__plot-card",style:{borderColor:s},...a?t(a):{},children:[o.jsx("span",{className:"rpp__plot-type",style:{color:s},children:r.actionType}),o.jsx("span",{className:"rpp__plot-name",children:r.nameCn})]}):o.jsx("div",{className:"rpp__plot-empty",children:"—"})]})}function ru({card:e,getZoomHandlers:n}){const t=ee(e.defId),r=t!=null&&t.frontImageId?`/assets/${t.frontImageId}`:null,i=t?{movement:"#66ccaa",ranged:"#ff9944",melee:"#ff6060",charge:"#ff4444",aim:"#f0c040",armor:"#88aaff",mine:"#cc88ff",special:"#aaa",auxiliary:"#77ddaa"}[t.actionType]??"#888":"#555";return o.jsxs("span",{className:`rpp__chip${e.destroyed?" rpp__chip--dead":""}`,style:{borderColor:i},...r?n(r):{},children:[(t==null?void 0:t.nameCn)??e.defId,e.destroyed&&o.jsx("span",{className:"rpp__chip-x",children:"✕"})]})}function Zv({replayData:e,onExit:n}){const t=w.useMemo(()=>Hv(e),[e]),r=e.actions.length,[a,i]=w.useState(0),[s,c]=w.useState(e.initialState),[d,u]=w.useState(!1),[p,m]=w.useState(1),[g,h]=w.useState(""),[f,y]=w.useState(e.initialState.log.length),_=w.useRef(null),v=w.useRef(s),x=w.useRef(a);v.current=s,x.current=a;const b=w.useRef(null);w.useEffect(()=>{var U;(U=b.current)==null||U.scrollIntoView({behavior:"smooth"})},[s.log.length]);const j=w.useCallback(()=>{_.current!=null&&(clearInterval(_.current),_.current=null)},[]),T=w.useCallback(()=>{const U=x.current;if(U>=r)return j(),u(!1),!1;const N=e.actions[U],z=fn(v.current,N);return y(v.current.log.length),c(z),i(U+1),!0},[e,r,j]),$=w.useCallback(()=>{const U=x.current;if(U>=r)return;const z=t.find(R=>R>U)??r;let F=v.current;const P=F.log.length;for(let R=U;R<z;R++)F=fn(F,e.actions[R]);y(P),c(F),i(z),z>=r&&(j(),u(!1))},[e,r,t,j]),k=w.useCallback(()=>{const U=x.current,N=t.filter(P=>P<U),z=N.length>=2?N[N.length-2]:0,F=eu(e,z);y(0),c(F),i(z)},[e,t]);w.useEffect(()=>(j(),d&&(_.current=setInterval(()=>{if(x.current>=r){j(),u(!1);return}$()},Math.round(1500/p))),j),[d,p,$,r,j]);function S(){u(U=>!U)}function A(){u(!1),y(0),c(e.initialState),i(0)}function E(){const U=parseInt(g,10);if(isNaN(U)||U<1)return;u(!1);const{state:N,actionIndex:z}=xx(e,U);y(0),c(N),i(z)}const D=a>0?e.actions[a-1]:null,L=D?Wv(D,a>=2?eu(e,a-1):e.initialState):null,M=a>=r,O=a===0,H={pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"行动阶段1",action_seg2:"行动阶段2",cleanup:"清理阶段",game_over:"游戏结束"},B={movement:"移动",ranged:"射击",melee:"近战",special:"特殊"};return o.jsxs("div",{className:"rpv-screen",children:[o.jsxs("div",{className:"rpv-topbar",children:[o.jsxs("span",{className:"rpv-topbar__round",children:["第 ",s.roundNumber," 回合"]}),o.jsx("span",{className:"rpv-topbar__phase",children:H[s.phase]??s.phase}),s.currentTiming&&o.jsxs("span",{className:"rpv-topbar__timing",children:["▶ ",B[s.currentTiming]]}),o.jsx("span",{style:{flex:1}}),o.jsx("button",{className:"rpv-btn",onClick:A,disabled:O,title:"回到开始",children:"⏮"}),o.jsx("button",{className:"rpv-btn",onClick:k,disabled:O,title:"上一阶段",children:"◀◀"}),o.jsx("button",{className:"rpv-btn",onClick:()=>{u(!1),T()},disabled:M,title:"单步前进（单个操作）",children:"▶|"}),o.jsx("button",{className:"rpv-btn",onClick:()=>{u(!1),$()},disabled:M,title:"下一阶段",children:"▶▶"}),o.jsx("button",{className:"rpv-btn rpv-btn--primary",onClick:S,children:d?"⏸ 暂停":"▶ 自动"}),o.jsx("span",{className:"rpv-sep"}),o.jsx("span",{className:"rpv-label",children:"速度"}),[1,2,4].map(U=>o.jsxs("button",{className:`rpv-btn rpv-btn--speed ${p===U?"rpv-btn--active":""}`,onClick:()=>m(U),children:[U,"x"]},U)),o.jsx("span",{className:"rpv-sep"}),o.jsx("span",{className:"rpv-label",children:"跳至"}),o.jsx("input",{className:"rpv-input",type:"number",min:1,value:g,onChange:U=>h(U.target.value),onKeyDown:U=>U.key==="Enter"&&E(),placeholder:"回合"}),o.jsx("button",{className:"rpv-btn",onClick:E,children:"跳转"}),o.jsx("span",{className:"rpv-sep"}),o.jsxs("span",{className:"rpv-progress",children:[a,"/",r]}),o.jsx("button",{className:"rpv-btn",onClick:()=>Pm(e),title:"导出完整分析日志",children:"导出日志"}),o.jsx("button",{className:"rpv-btn rpv-btn--exit",onClick:n,children:"✕ 退出"})]}),o.jsxs("div",{className:"rpv-main",children:[o.jsxs("div",{className:"rpv-map-col",children:[o.jsx("div",{className:"rpv-map-area",children:o.jsx(Fv,{currentState:s})}),L&&o.jsxs("div",{className:"rpv-action-desc",children:["▶ ",L]}),o.jsxs("div",{className:"rpv-log",children:[o.jsx("div",{className:"rpv-log__header",children:"行动日志"}),o.jsxs("div",{className:"rpv-log__entries",children:[s.log.map((U,N)=>{const z=N>=f;return o.jsx("div",{className:`rpv-log__entry ${Xv(U)}${z?" rpv-log__entry--new":""}`,children:U},N)}),o.jsx("div",{ref:b})]})]})]}),o.jsxs("div",{className:"rpv-info-col",children:[o.jsx(nu,{player:s.players.player1,label:"P1"}),o.jsx("div",{className:"rpv-info-divider"}),o.jsx(nu,{player:s.players.player2,label:"P2"})]})]}),o.jsx("style",{children:Lm}),o.jsx("style",{children:Qv})]})}function Yv(e){const n=new Date(e),t=r=>String(r).padStart(2,"0");return`${n.getFullYear()}-${t(n.getMonth()+1)}-${t(n.getDate())} ${t(n.getHours())}:${t(n.getMinutes())}`}function Xv(e){return e.startsWith("===")?"rpv-log__entry--round":e.startsWith("---")?"rpv-log__entry--sep":e.includes("发动")||e.includes("攻击")?"rpv-log__entry--attack":e.includes("摧毁")||e.includes("连锁")||e.includes("诱爆")?"rpv-log__entry--damage":e.includes("移动到")?"rpv-log__entry--move":e.includes("获胜")||e.includes("击破")||e.includes("平局")?"rpv-log__entry--victory":""}const Lm=`
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
`,Qv=`
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
`,qv=50;function Rm(){return{terrain:"plain",elevation:0,variant:0}}function Om(e,n){const t=Array.from({length:n},()=>Array.from({length:e},()=>Rm()));return{id:`custom_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,nameJa:"新しいマップ",nameCn:"新地图",width:e,height:n,cells:t,startZones:{0:[{row:0,col:Math.floor(e/2)}],1:[{row:n-1,col:Math.floor(e/2)}]},maxPlayers:2,maxTeams:2}}function ol(e){return{map:e??Om(7,11),activeTool:"terrain",selectedTerrain:"plain",selectedElevation:1,selectedVariant:0,selectedZoneTeam:0,brushSize:1,isDirty:!1,undoStack:[],redoStack:[],showCoords:!1}}function xo(e){return{...e,cells:e.cells.map(n=>n.map(t=>({...t}))),startZones:Object.fromEntries(Object.entries(e.startZones).map(([n,t])=>[n,t.map(r=>({...r}))]))}}function ft(e){const n=[...e.undoStack,xo(e.map)];return n.length>qv&&n.shift(),{...e,undoStack:n,redoStack:[],isDirty:!0}}function au(e,n,t,r,a,i){if(n<0||n>=e.height||t<0||t>=e.width)return e;const s=e.cells.map((c,d)=>d===n?c.map((u,p)=>p===t?{terrain:r,elevation:r==="highland"?a:0,variant:r==="highland"?a:i}:u):c);return{...e,cells:s}}function ey(e,n){switch(n.type){case"SET_TOOL":return{...e,activeTool:n.tool};case"SET_TERRAIN":return{...e,selectedTerrain:n.terrain,activeTool:"terrain"};case"SET_ELEVATION":return{...e,selectedElevation:n.elevation};case"SET_VARIANT":return{...e,selectedVariant:n.variant};case"SET_BRUSH_SIZE":return{...e,brushSize:n.size};case"SET_ZONE_TEAM":return{...e,selectedZoneTeam:n.team};case"TOGGLE_COORDS":return{...e,showCoords:!e.showCoords};case"PAINT_CELL":{const t=ft(e),r=au(t.map,n.row,n.col,t.selectedTerrain,t.selectedElevation,t.selectedVariant);return{...t,map:r}}case"PAINT_AREA":{const t=ft(e);let r=t.map;for(const{row:a,col:i}of n.cells)r=au(r,a,i,t.selectedTerrain,t.selectedElevation,t.selectedVariant);return{...t,map:r}}case"ADD_ZONE_CELL":{const t=ft(e),{team:r,position:a}=n,i=t.map.startZones[r]??[];if(i.some(c=>c.row===a.row&&c.col===a.col))return e;const s={...t.map.startZones,[r]:[...i,a]};return{...t,map:{...t.map,startZones:s}}}case"REMOVE_ZONE_CELL":{const t=ft(e),{team:r,position:a}=n,s=(t.map.startZones[r]??[]).filter(d=>d.row!==a.row||d.col!==a.col),c={...t.map.startZones,[r]:s};return{...t,map:{...t.map,startZones:c}}}case"CLEAR_ZONE":{const t=ft(e),r={...t.map.startZones,[n.team]:[]};return{...t,map:{...t.map,startZones:r}}}case"SET_MAP_META":{const t=ft(e),r={...t.map};return n.nameJa!==void 0&&(r.nameJa=n.nameJa),n.nameCn!==void 0&&(r.nameCn=n.nameCn),n.maxPlayers!==void 0&&(r.maxPlayers=n.maxPlayers),n.maxTeams!==void 0&&(r.maxTeams=n.maxTeams),{...t,map:r}}case"RESIZE_MAP":{const t=ft(e),{newWidth:r,newHeight:a}=n,i=Array.from({length:a},(c,d)=>Array.from({length:r},(u,p)=>d<t.map.height&&p<t.map.width?{...t.map.cells[d][p]}:Rm())),s={};for(const[c,d]of Object.entries(t.map.startZones))s[Number(c)]=d.filter(u=>u.row<a&&u.col<r);return{...t,map:{...t.map,width:r,height:a,cells:i,startZones:s}}}case"UNDO":{if(e.undoStack.length===0)return e;const t=e.undoStack[e.undoStack.length-1];return{...e,map:t,undoStack:e.undoStack.slice(0,-1),redoStack:[...e.redoStack,xo(e.map)],isDirty:!0}}case"REDO":{if(e.redoStack.length===0)return e;const t=e.redoStack[e.redoStack.length-1];return{...e,map:t,redoStack:e.redoStack.slice(0,-1),undoStack:[...e.undoStack,xo(e.map)],isDirty:!0}}case"LOAD_MAP":return{...ol(xo(n.map)),isDirty:!1};case"NEW_MAP":return ol(Om(n.width,n.height));case"MARK_SAVED":return{...e,isDirty:!1};default:return e}}const cc="em_custom_maps_index",dc="em_custom_map_",ny=["plain","sand","rubble","forest","water","highland"];function uc(){try{const e=localStorage.getItem(cc);return e?JSON.parse(e):[]}catch{return[]}}function ty(e){const n={id:e.id,nameCn:e.nameCn,nameJa:e.nameJa,width:e.width,height:e.height,maxPlayers:e.maxPlayers,maxTeams:e.maxTeams,savedAt:Date.now()},t=uc().filter(r=>r.id!==e.id);t.push(n),localStorage.setItem(cc,JSON.stringify(t)),localStorage.setItem(dc+e.id,JSON.stringify(e))}function ry(e){try{const n=localStorage.getItem(dc+e);if(!n)return null;const t=JSON.parse(n);return Km(t)?t:null}catch{return null}}function ay(e){const n=uc().filter(t=>t.id!==e);localStorage.setItem(cc,JSON.stringify(n)),localStorage.removeItem(dc+e)}function oy(e){return JSON.stringify(e,null,2)}function iy(e){try{const n=JSON.parse(e);return Km(n)?(n.id=`custom_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,n):null}catch{return null}}function sy(e){const n=oy(e),t=new Blob([n],{type:"application/json"}),r=URL.createObjectURL(t),a=document.createElement("a");a.href=r,a.download=`${e.nameCn||e.id}.json`,a.click(),URL.revokeObjectURL(r)}function Km(e){if(!e||typeof e!="object")return!1;const n=e;if(typeof n.id!="string"||(typeof n.nameCn!="string"&&(n.nameCn="未命名"),typeof n.nameJa!="string"&&(n.nameJa=""),typeof n.width!="number"||n.width<3||n.width>25)||typeof n.height!="number"||n.height<3||n.height>25||(typeof n.maxPlayers!="number"&&(n.maxPlayers=2),typeof n.maxTeams!="number"&&(n.maxTeams=2),!Array.isArray(n.cells))||n.cells.length!==n.height)return!1;for(const t of n.cells){if(!Array.isArray(t)||t.length!==n.width)return!1;for(const r of t)if(!r||typeof r!="object"||!ny.includes(r.terrain))return!1}return(!n.startZones||typeof n.startZones!="object")&&(n.startZones={}),!0}const Jm=w.createContext(null);function Ir(){const e=w.useContext(Jm);if(!e)throw new Error("useEditor must be inside EditorCtx.Provider");return e}const to=48,ou=.2,ly=3,iu=.1,il=[{terrain:"plain",label:"平原",icon:"🟩"},{terrain:"sand",label:"砂地",icon:"🟨"},{terrain:"rubble",label:"瓦砾",icon:"🟫"},{terrain:"forest",label:"森林",icon:"🌲"},{terrain:"water",label:"水域",icon:"🟦"},{terrain:"highland",label:"高地",icon:"⛰️"}],Qo=["#00f0ff","#ff00c8","#00cc88","#ff8800","#6688ff","#cc44ff","#44dddd","#ff4466"];function cy({onBack:e}){const[n,t]=w.useReducer(ey,void 0,()=>ol()),r=w.useMemo(()=>({state:n,dispatch:t}),[n]);w.useEffect(()=>{function s(c){if((c.ctrlKey||c.metaKey)&&(c.key==="z"&&!c.shiftKey&&(c.preventDefault(),t({type:"UNDO"})),c.key==="z"&&c.shiftKey&&(c.preventDefault(),t({type:"REDO"})),c.key==="y"&&(c.preventDefault(),t({type:"REDO"})),c.key==="s"&&(c.preventDefault(),a())),!c.ctrlKey&&!c.metaKey&&!c.altKey){const d=parseInt(c.key)-1;d>=0&&d<il.length&&t({type:"SET_TERRAIN",terrain:il[d].terrain})}}return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[]);function a(){ty(n.map),t({type:"MARK_SAVED"})}function i(){n.isDirty&&!window.confirm("有未保存的更改，确定要退出吗？")||e()}return o.jsx(Jm.Provider,{value:r,children:o.jsxs("div",{className:"me__screen",children:[o.jsx(dy,{onBack:i,onSave:a}),o.jsx(py,{}),o.jsx(ke,{id:"me-terrain",title:"地形画笔",initialPos:{x:8,y:56},width:200,minHeight:60,zIndex:20,children:o.jsx(my,{})}),o.jsx(ke,{id:"me-props",title:"地图属性",initialPos:{x:8,y:380},width:200,minHeight:60,zIndex:19,children:o.jsx(fy,{})}),o.jsx(ke,{id:"me-zones",title:"出击区域",initialPos:{x:8,y:600},width:200,minHeight:60,zIndex:18,children:o.jsx(gy,{})}),o.jsx("style",{children:hy})]})})}function dy({onBack:e,onSave:n}){const{state:t,dispatch:r}=Ir(),[a,i]=w.useState(!1),s=w.useRef(null);function c(){t.isDirty&&!window.confirm("有未保存的更改，确定要新建吗？")||r({type:"NEW_MAP",width:7,height:11})}function d(){sy(t.map)}function u(){var m;(m=s.current)==null||m.click()}function p(m){var f;const g=(f=m.target.files)==null?void 0:f[0];if(!g)return;const h=new FileReader;h.onload=()=>{const y=iy(h.result);y?r({type:"LOAD_MAP",map:y}):alert("无效的地图文件")},h.readAsText(g),m.target.value=""}return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"me__topbar",children:[o.jsx("button",{className:"me__btn",onClick:e,children:"← 返回"}),o.jsx("span",{className:"me__title",children:"地图编辑器"}),o.jsxs("span",{className:"me__map-name",children:[t.map.nameCn," (",t.map.height,"×",t.map.width,")",t.isDirty&&" *"]}),o.jsx("span",{style:{flex:1}}),o.jsx("button",{className:"me__btn",onClick:c,children:"新建"}),o.jsx("button",{className:"me__btn",onClick:()=>i(!0),children:"打开"}),o.jsx("button",{className:"me__btn me__btn--accent",onClick:n,children:"保存"}),o.jsx("button",{className:"me__btn",onClick:d,children:"导出"}),o.jsx("button",{className:"me__btn",onClick:u,children:"导入"}),o.jsx("input",{ref:s,type:"file",accept:".json",style:{display:"none"},onChange:p}),o.jsx("span",{className:"me__sep"}),o.jsx("button",{className:"me__btn",onClick:()=>r({type:"UNDO"}),disabled:t.undoStack.length===0,children:"撤销"}),o.jsx("button",{className:"me__btn",onClick:()=>r({type:"REDO"}),disabled:t.redoStack.length===0,children:"重做"}),o.jsx("button",{className:`me__btn${t.showCoords?" me__btn--active":""}`,onClick:()=>r({type:"TOGGLE_COORDS"}),children:"坐标"})]}),a&&o.jsx(uy,{onClose:()=>i(!1)})]})}function uy({onClose:e}){const{dispatch:n,state:t}=Ir(),[r]=w.useState(()=>uc());function a(c){if(t.isDirty&&!window.confirm("有未保存的更改，确定要打开吗？"))return;const d=ry(c);d&&(n({type:"LOAD_MAP",map:d}),e())}function i(c){if(t.isDirty&&!window.confirm("有未保存的更改，确定要打开吗？"))return;const d={...c,id:`custom_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,cells:c.cells.map(u=>u.map(p=>({...p}))),startZones:Object.fromEntries(Object.entries(c.startZones).map(([u,p])=>[u,p.map(m=>({...m}))]))};n({type:"LOAD_MAP",map:d}),e()}function s(c){window.confirm("确定删除此地图？")&&(ay(c),e())}return o.jsx("div",{className:"me__overlay",onClick:e,children:o.jsxs("div",{className:"me__dialog",onClick:c=>c.stopPropagation(),children:[o.jsx("h3",{children:"打开地图"}),r.length>0&&o.jsxs(o.Fragment,{children:[o.jsx("h4",{children:"自定义地图"}),o.jsx("div",{className:"me__dialog-list",children:r.map(c=>o.jsxs("div",{className:"me__dialog-item",children:[o.jsxs("span",{children:[c.nameCn," (",c.height,"×",c.width,")"]}),o.jsx("span",{className:"me__dialog-date",children:new Date(c.savedAt).toLocaleDateString()}),o.jsx("button",{className:"me__btn me__btn--sm",onClick:()=>a(c.id),children:"打开"}),o.jsx("button",{className:"me__btn me__btn--sm me__btn--danger",onClick:()=>s(c.id),children:"删除"})]},c.id))})]}),o.jsx("h4",{children:"内置地图 (作为模板)"}),o.jsx("div",{className:"me__dialog-list",children:Ze.map(c=>o.jsxs("div",{className:"me__dialog-item",children:[o.jsxs("span",{children:[c.nameCn," (",c.height,"×",c.width,")"]}),o.jsx("button",{className:"me__btn me__btn--sm",onClick:()=>i(c),children:"复制"})]},c.id))}),o.jsx("div",{className:"me__dialog-actions",children:o.jsx("button",{className:"me__btn",onClick:e,children:"取消"})})]})})}function py(){const{state:e,dispatch:n}=Ir(),t=w.useRef(null),[r,a]=w.useState({x:0,y:0,scale:1}),i=w.useRef(null),s=w.useRef(!1),c=w.useRef(!1),d=w.useRef(new Set),{map:u,activeTool:p,showCoords:m,selectedZoneTeam:g,brushSize:h}=e,{width:f,height:y}=u;w.useEffect(()=>{const S=t.current;if(!S)return;const A=S.clientWidth,E=S.clientHeight,D=f*to,L=y*to;if(!A||!E)return;const M=Math.max(ou,Math.min(1.5,Math.min(A/D,E/L)));a({x:(A-D*M)/2,y:(E-L*M)/2,scale:M})},[f,y]),w.useEffect(()=>{const S=t.current;if(!S)return;const A=E=>{E.preventDefault();const D=E.deltaY<0?iu:-iu;a(L=>({...L,scale:Math.min(ly,Math.max(ou,L.scale+D))}))};return S.addEventListener("wheel",A,{passive:!1}),()=>S.removeEventListener("wheel",A)},[]);const _=w.useCallback(S=>{S.button!==2&&(i.current={startX:S.clientX,startY:S.clientY,origX:r.x,origY:r.y},s.current=!1,c.current=!1,d.current.clear())},[r.x,r.y]),v=w.useCallback(S=>{if(!i.current)return;const A=S.clientX-i.current.startX,E=S.clientY-i.current.startY;!s.current&&Math.sqrt(A*A+E*E)>5&&(S.buttons===4||S.buttons===2?s.current=!0:p==="terrain"||p==="startZone"||p==="eraseZone"?c.current=!0:s.current=!0),s.current&&a(D=>({...D,x:i.current.origX+A,y:i.current.origY+E}))},[p]),x=w.useCallback(()=>{i.current=null,s.current=!1,c.current=!1,d.current.clear()},[]),b=w.useMemo(()=>{const S=new Map;for(const[A,E]of Object.entries(u.startZones)){const D=Number(A);for(const L of E)S.set(`${L.row},${L.col}`,D)}return S},[u.startZones]);function j(S,A){const E=`${S},${A}`;if(p==="terrain")if(h===1)d.current.has(E)||(d.current.add(E),n({type:"PAINT_CELL",row:S,col:A}));else{const D=[],L=Math.floor(h/2);for(let M=-L;M<=L;M++)for(let O=-L;O<=L;O++){const H=S+M,B=A+O;if(H>=0&&H<y&&B>=0&&B<f){const U=`${H},${B}`;d.current.has(U)||(d.current.add(U),D.push({row:H,col:B}))}}D.length&&n({type:"PAINT_AREA",cells:D})}else if(p==="startZone")n({type:"ADD_ZONE_CELL",team:g,position:{row:S,col:A}});else if(p==="eraseZone"){const D=b.get(E);D!==void 0&&n({type:"REMOVE_ZONE_CELL",team:D,position:{row:S,col:A}})}}const{x:T,y:$,scale:k}=r;return o.jsx("div",{className:"me__viewport",ref:t,onMouseDown:_,onMouseMove:v,onMouseUp:x,onMouseLeave:x,onContextMenu:S=>S.preventDefault(),children:o.jsx("div",{className:"me__grid",style:{transform:`translate(${T}px, ${$}px) scale(${k})`,transformOrigin:"top left",display:"grid",gridTemplateColumns:`repeat(${f}, ${to}px)`,gridTemplateRows:`repeat(${y}, ${to}px)`},children:u.cells.flatMap((S,A)=>S.map((E,D)=>{const L=nc(E),M=`${A},${D}`,O=b.get(M),H=O!==void 0?Qo[O%Qo.length]:"";return o.jsxs("div",{className:`me__cell${O!==void 0?" me__cell--zone":""}`,style:{backgroundImage:`url("${L}")`,backgroundSize:"cover",...O!==void 0?{borderColor:H,boxShadow:`inset 0 0 8px ${H}66`}:{}},onMouseDown:B=>{B.button===0&&!s.current&&j(A,D)},onMouseEnter:()=>{c.current&&j(A,D)},children:[E.terrain==="highland"&&o.jsxs("span",{className:"me__cell-elev",children:["+",E.elevation]}),m&&o.jsxs("span",{className:"me__cell-coord",children:[A,",",D]}),O!==void 0&&o.jsxs("span",{className:"me__cell-zone",style:{color:H},children:["Z",O]})]},M)}))})})}function my(){const{state:e,dispatch:n}=Ir();return o.jsxs("div",{className:"me__palette",children:[o.jsx("div",{className:"me__palette-grid",children:il.map(({terrain:t,label:r,icon:a},i)=>o.jsxs("button",{className:`me__palette-btn${e.selectedTerrain===t&&e.activeTool==="terrain"?" me__palette-btn--active":""}`,onClick:()=>n({type:"SET_TERRAIN",terrain:t}),title:`${r} (${i+1})`,children:[a," ",r]},t))}),e.selectedTerrain==="highland"&&o.jsxs("div",{className:"me__sub-option",children:[o.jsx("label",{children:"高度:"}),[1,2,3].map(t=>o.jsxs("button",{className:`me__mini-btn${e.selectedElevation===t?" me__mini-btn--active":""}`,onClick:()=>n({type:"SET_ELEVATION",elevation:t}),children:["+",t]},t))]}),e.selectedTerrain!=="highland"&&e.selectedTerrain!=="plain"&&o.jsxs("div",{className:"me__sub-option",children:[o.jsx("label",{children:"变体:"}),[0,1,2,3].map(t=>o.jsx("button",{className:`me__mini-btn${e.selectedVariant===t?" me__mini-btn--active":""}`,onClick:()=>n({type:"SET_VARIANT",variant:t}),children:t},t))]}),o.jsxs("div",{className:"me__sub-option",children:[o.jsx("label",{children:"笔刷:"}),[1,2,3].map(t=>o.jsxs("button",{className:`me__mini-btn${e.brushSize===t?" me__mini-btn--active":""}`,onClick:()=>n({type:"SET_BRUSH_SIZE",size:t}),children:[t,"×",t]},t))]})]})}function fy(){const{state:e,dispatch:n}=Ir(),{map:t}=e;return o.jsxs("div",{className:"me__props",children:[o.jsxs("label",{className:"me__prop-row",children:[o.jsx("span",{children:"名称(中)"}),o.jsx("input",{type:"text",value:t.nameCn,onChange:r=>n({type:"SET_MAP_META",nameCn:r.target.value})})]}),o.jsxs("label",{className:"me__prop-row",children:[o.jsx("span",{children:"名称(日)"}),o.jsx("input",{type:"text",value:t.nameJa,onChange:r=>n({type:"SET_MAP_META",nameJa:r.target.value})})]}),o.jsxs("div",{className:"me__prop-row",children:[o.jsx("span",{children:"尺寸"}),o.jsx("input",{type:"number",min:3,max:25,value:t.width,onChange:r=>n({type:"RESIZE_MAP",newWidth:Number(r.target.value),newHeight:t.height}),style:{width:50}}),"×",o.jsx("input",{type:"number",min:3,max:25,value:t.height,onChange:r=>n({type:"RESIZE_MAP",newWidth:t.width,newHeight:Number(r.target.value)}),style:{width:50}})]}),o.jsxs("label",{className:"me__prop-row",children:[o.jsx("span",{children:"最大玩家"}),o.jsx("select",{value:t.maxPlayers,onChange:r=>n({type:"SET_MAP_META",maxPlayers:Number(r.target.value)}),children:[2,3,4,6,8].map(r=>o.jsx("option",{value:r,children:r},r))})]}),o.jsxs("label",{className:"me__prop-row",children:[o.jsx("span",{children:"最大队伍"}),o.jsx("select",{value:t.maxTeams,onChange:r=>n({type:"SET_MAP_META",maxTeams:Number(r.target.value)}),children:Array.from({length:t.maxPlayers},(r,a)=>a+1).filter(r=>r>=2).map(r=>o.jsx("option",{value:r,children:r},r))})]})]})}function gy(){const{state:e,dispatch:n}=Ir(),{map:t,activeTool:r,selectedZoneTeam:a}=e;return o.jsxs("div",{className:"me__zones",children:[o.jsxs("div",{className:"me__zones-tools",children:[o.jsx("button",{className:`me__btn me__btn--sm${r==="startZone"?" me__btn--active":""}`,onClick:()=>n({type:"SET_TOOL",tool:"startZone"}),children:"添加点"}),o.jsx("button",{className:`me__btn me__btn--sm${r==="eraseZone"?" me__btn--active":""}`,onClick:()=>n({type:"SET_TOOL",tool:"eraseZone"}),children:"删除点"})]}),Array.from({length:t.maxTeams},(i,s)=>s).map(i=>{const s=t.startZones[i]??[],c=Qo[i%Qo.length],d=a===i;return o.jsxs("div",{className:`me__zone-row${d?" me__zone-row--active":""}`,style:{borderLeftColor:c},onClick:()=>n({type:"SET_ZONE_TEAM",team:i}),children:[o.jsxs("span",{style:{color:c},children:["区域 ",i+1]}),o.jsxs("span",{className:"me__zone-count",children:[s.length," 点"]}),o.jsx("button",{className:"me__btn me__btn--sm me__btn--danger",onClick:u=>{u.stopPropagation(),n({type:"CLEAR_ZONE",team:i})},children:"清空"})]},i)})]})}const hy=`
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
`;function xy(e){return e?`(${e.row},${e.col})`:"(无)"}function zt(e){if(!e)return"(空)";const n=ee(e.defId),t=(n==null?void 0:n.nameCn)??e.defId,r=e.destroyed?" [已摧毁]":"";return`${t}(${e.defId})${r}`}function vy(e,n){const t=e.players[n];if(!t)return`  ${n}: (不存在)`;const r=q.find(i=>i.id===t.unitId),a=[];return a.push(`  ── ${n} ──`),a.push(`    机体: ${(r==null?void 0:r.nameCn)??t.unitId} (${t.unitId})`),a.push(`    位置: ${xy(t.position)}  朝向: ${t.facing}`),a.push(`    状态: ${t.isDefeated?"已击破":"存活"}`),a.push(`    手牌(${t.hand.length}): ${t.hand.map(i=>zt(i)).join(", ")||"(无)"}`),a.push(`    阶段1配置: ${zt(t.plotSeg1)}`),a.push(`    阶段2配置: ${zt(t.plotSeg2)}`),a.push(`    辅助区(${t.auxiliary.length}): ${t.auxiliary.map(i=>zt(i)).join(", ")||"(无)"}`),a.push(`    弃牌堆(${t.discard.length}): ${t.discard.map(i=>zt(i)).join(", ")||"(无)"}`),a.push(`    摧毁区(${t.destroyedCards.length}): ${t.destroyedCards.map(i=>zt(i)).join(", ")||"(无)"}`),a.push(`    卡组剩余: ${t.deck.filter(i=>!i.destroyed).length} 张`),a.join(`
`)}function yy(e){var t,r;const n=[];if(n.push("══════════════════════════════════════════"),n.push("  当前状态快照"),n.push("══════════════════════════════════════════"),n.push(`回合: ${e.roundNumber}`),n.push(`阶段: ${e.phase}`),n.push(`当前时机: ${e.currentTiming??"(无)"}`),n.push(`行动顺序: ${e.turnOrder.length>0?e.turnOrder.join(" → "):"(无)"}`),n.push(`布局步骤: ${e.plottingStep??"(无)"}`),n.push(`活跃玩家: ${e.activePlayer}`),n.push(`地图: ${((t=e.map)==null?void 0:t.id)??"(无)"}`),n.push(`地雷数: ${((r=e.mines)==null?void 0:r.length)??0}`),e.pendingDamage){const a=e.pendingDamage;n.push(`待处理伤害: 目标=${a.targetId}, 剩余=${a.remaining}, 来源=${a.source}, 攻击者=${a.attackerId??"(无)"}, 已选=${a.selectedInstanceIds.length}`)}n.push(""),n.push("── 玩家状态 ──");for(const a of e.playerIds)n.push(vy(e,a));return n.push(""),n.join(`
`)}function Bm(e,n){const t=new Date,r=t.toISOString().replace(/[:.]/g,"-").slice(0,19),a=[];a.push("╔══════════════════════════════════════════╗"),a.push("║   Embryo Machine — 全量游戏日志导出      ║"),a.push("╚══════════════════════════════════════════╝"),a.push(`导出时间: ${t.toLocaleString("zh-CN")}`),n!=null&&n.localPlayerId&&a.push(`本地玩家: ${n.localPlayerId}`),n!=null&&n.connectionStatus&&a.push(`连接状态: ${n.connectionStatus}`),a.push(""),a.push(yy(e)),a.push("══════════════════════════════════════════"),a.push("  完整游戏日志 (按时间顺序)"),a.push("══════════════════════════════════════════");for(let u=0;u<e.log.length;u++)a.push(`[${String(u+1).padStart(4," ")}] ${e.log[u]}`);a.push(""),a.push(`── 共 ${e.log.length} 条日志 ──`);const i=a.join(`
`),s=new Blob([i],{type:"text/plain;charset=utf-8"}),c=URL.createObjectURL(s),d=document.createElement("a");d.href=c,d.download=`embryo-log-${r}.txt`,d.click(),URL.revokeObjectURL(c)}const su=[1e3,2e3,4e3,8e3,15e3];class by{constructor(n,t,r){en(this,"ws",null);en(this,"url");en(this,"sessionId");en(this,"onMessage");en(this,"onStatus");en(this,"reconnectAttempt",0);en(this,"reconnectTimer",null);en(this,"intentionallyClosed",!1);en(this,"hasEverConnected",!1);this.url=n,this.sessionId=localStorage.getItem("embryo-session-id"),this.onMessage=t,this.onStatus=r}connect(){this.intentionallyClosed=!1,this.onStatus("connecting");const n=this.sessionId?`?sessionId=${this.sessionId}`:"";this.ws=new WebSocket(`${this.url}${n}`),this.ws.onopen=()=>{var t;if(this.intentionallyClosed){(t=this.ws)==null||t.close(),this.ws=null,this.onStatus("disconnected");return}this.hasEverConnected=!0,this.reconnectAttempt=0,this.onStatus("connected")},this.ws.onmessage=t=>{try{const r=JSON.parse(t.data);r.type==="SESSION_ID"&&(this.sessionId=r.sessionId,localStorage.setItem("embryo-session-id",r.sessionId)),this.onMessage(r)}catch{console.warn("[GameSocket] Failed to parse message:",t.data)}},this.ws.onclose=()=>{if(this.intentionallyClosed){this.onStatus("disconnected");return}this.hasEverConnected||(this.sessionId=null,localStorage.removeItem("embryo-session-id")),this.onStatus("reconnecting"),this.scheduleReconnect()},this.ws.onerror=()=>{}}send(n){var t;((t=this.ws)==null?void 0:t.readyState)===WebSocket.OPEN?this.ws.send(JSON.stringify(n)):console.warn("[GameSocket] Cannot send — not connected")}disconnect(){if(this.intentionallyClosed=!0,this.reconnectTimer&&(clearTimeout(this.reconnectTimer),this.reconnectTimer=null),this.ws){const n=this.ws.readyState;n===WebSocket.OPEN||n===WebSocket.CLOSING?(this.ws.close(),this.ws=null):n===WebSocket.CONNECTING&&(this.ws.onmessage=null,this.ws.onerror=null)}this.onStatus("disconnected")}clearSession(){this.sessionId=null,localStorage.removeItem("embryo-session-id")}get isConnected(){var n;return((n=this.ws)==null?void 0:n.readyState)===WebSocket.OPEN}scheduleReconnect(){const n=su[Math.min(this.reconnectAttempt,su.length-1)];this.reconnectAttempt++,this.reconnectTimer=setTimeout(()=>{this.reconnectTimer=null,this.connect()},n)}}const Fm=w.createContext(null);function _y({serverUrl:e,children:n}){const[t,r]=w.useState(null),[a,i]=w.useState(null),[s,c]=w.useState(null),[d,u]=w.useState("disconnected"),[p,m]=w.useState(null),[g,h]=w.useState(null),[f,y]=w.useState([]),[_,v]=w.useState(null),[x,b]=w.useState(null),j=w.useRef(null),T=w.useRef(null),$=w.useRef(-1),k=w.useCallback(M=>{switch(M.type){case"SESSION_ID":break;case"ROOM_STATE":i(M.room),c(M.yourPlayerId);break;case"ROOM_LIST":y(M.rooms);break;case"GAME_STATE":{M.state.phase==="plotting"&&(T.current!=="plotting"||$.current!==M.state.roundNumber)&&m(null),T.current=M.state.phase,$.current=M.state.roundNumber,r(M.state),c(M.yourPlayerId),v(M.currentTurnPlayerId??null),b(M.turnDeadline??null);break}case"PLOTTING_STATUS":m({confirmed:M.confirmed,total:M.total});break;case"GAME_STARTED":break;case"RECONNECTED":i(M.room),r(M.state),c(M.yourPlayerId),v(M.currentTurnPlayerId??null),b(M.turnDeadline??null),T.current=M.state.phase,$.current=M.state.roundNumber;break;case"SPECTATE_STATE":r(M.state),i(M.room),c(null);break;case"ACTION_REJECTED":h(M.reason),setTimeout(()=>h(null),5e3);break;case"PLAYER_JOINED":case"PLAYER_LEFT":case"PLAYER_RECONNECTED":case"PLAYER_DISCONNECTED":break;case"ERROR":h(M.message),setTimeout(()=>h(null),5e3);break}},[]);w.useEffect(()=>{const M=new by(e,k,u);return j.current=M,M.connect(),()=>{M.clearSession(),M.disconnect(),j.current=null}},[e,k]);const S=w.useCallback(M=>{var O;(O=j.current)==null||O.send({type:"GAME_ACTION",action:M})},[]),A=w.useCallback(M=>{var O;(O=j.current)==null||O.send({type:"LOBBY_ACTION",action:M})},[]),E=w.useCallback(M=>{var O;(O=j.current)==null||O.send(M)},[]),D=w.useCallback(M=>ee(M),[]),L={state:t,room:a,localPlayerId:s,dispatch:S,sendLobbyAction:A,send:E,getCard:D,connectionStatus:d,plottingStatus:p,isOnline:!0,lastError:g,roomList:f,currentTurnPlayerId:_,turnDeadline:x};return o.jsx(Fm.Provider,{value:L,children:n})}function pc(){const e=w.useContext(Fm);if(!e)throw new Error("useOnlineGame must be used within OnlineGameProvider");return e}function Iy({children:e}){const{state:n,localPlayerId:t,dispatch:r,getCard:a,plottingStatus:i,send:s,currentTurnPlayerId:c}=pc(),d=w.useCallback(g=>{if(g.type==="ADVANCE_TIMING"||g.type==="ADVANCE_PHASE"){s({type:"TIMING_DONE"});return}g.type==="START_PLOTTING"||g.type==="DRAW_CARDS"||r(g)},[r,s]);if(!n||!t)return null;let u=n;if(n.phase==="plotting"){const g=(i==null?void 0:i.confirmed.includes(t))??!1;u={...n,plottingStep:g?"complete":t}}const p={player1:t!=="player1",player2:t!=="player2",player1Difficulty:"easy",player2Difficulty:"easy",playerAI:Object.fromEntries(n.playerIds.map(g=>[g,g!==t])),playerDifficulty:Object.fromEntries(n.playerIds.map(g=>[g,"easy"]))},m={state:u,dispatch:d,rawDispatch:d,getCard:a,aiConfig:p,setAIConfig:()=>{},getReplayData:()=>null,autoSaveEnabled:!1,setAutoSaveEnabled:()=>{},exposureMode:!1,setExposureMode:()=>{},isOnline:!0,localPlayerId:t,currentTurnPlayerId:c};return o.jsx(_i.Provider,{value:m,children:e})}const ky={lobby:"等待中",playing:"游戏中",finished:"已结束"};function Gm({onBack:e,onCreateRoom:n,onJoinRoom:t,roomList:r,onRefreshRooms:a,onSpectate:i}){const[s,c]=w.useState("create"),[d,u]=w.useState(()=>localStorage.getItem("embryo-player-name")??""),[p,m]=w.useState(""),[g,h]=w.useState(""),[f,y]=w.useState(2),[_,v]=w.useState(Ze[0].id);function x(M){y(M);const O=Ze.find(H=>H.id===_);if(!O||O.maxPlayers<M){const H=Ze.find(B=>B.maxPlayers>=M);H&&v(H.id)}}const[b,j]=w.useState(""),[T,$]=w.useState(!1),[k,S]=w.useState(0);function A(){const M=d.trim()||`Player_${Math.random().toString(36).slice(2,6)}`;return localStorage.setItem("embryo-player-name",M),M}function E(){n(A(),{maxPlayers:f,teamCount:f,mapId:_,turnTimeoutSeconds:k,password:T?b:void 0})}function D(){const M=p.trim().toUpperCase();M&&t(M,A(),g||void 0)}function L(M,O){m(M),O?(c("join"),h("")):t(M,A())}return o.jsxs("div",{className:"ol-screen",children:[o.jsxs("div",{className:"ol-center",children:[o.jsx("h1",{className:"ol-title",children:"联机对战"}),o.jsx("p",{className:"ol-subtitle",children:"创建、加入或浏览房间"}),o.jsx("div",{className:"ol-divider"}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"昵称"}),o.jsx("input",{className:"ol-input",value:d,onChange:M=>u(M.target.value),placeholder:"输入昵称…",maxLength:16})]}),o.jsxs("div",{className:"ol-tabs",children:[o.jsx("button",{className:`ol-tab${s==="create"?" ol-tab--active":""}`,onClick:()=>c("create"),children:"创建房间"}),o.jsx("button",{className:`ol-tab${s==="join"?" ol-tab--active":""}`,onClick:()=>c("join"),children:"加入房间"}),o.jsx("button",{className:`ol-tab${s==="browse"?" ol-tab--active":""}`,onClick:()=>{c("browse"),a==null||a()},children:"浏览房间"})]}),s==="create"&&o.jsxs("div",{className:"ol-panel",children:[o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"最大玩家数"}),o.jsx("select",{className:"ol-select",value:f,onChange:M=>x(+M.target.value),children:[2,3,4,5,6,7,8].map(M=>o.jsxs("option",{value:M,children:[M," 人"]},M))})]}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"地图"}),o.jsx("select",{className:"ol-select",value:_,onChange:M=>v(M.target.value),children:Ze.filter(M=>M.maxPlayers>=f).map(M=>o.jsxs("option",{value:M.id,children:[M.nameCn," (",M.maxPlayers,"人)"]},M.id))})]}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"回合限时"}),o.jsxs("select",{className:"ol-select",value:k,onChange:M=>S(+M.target.value),children:[o.jsx("option",{value:0,children:"无限制"}),o.jsx("option",{value:30,children:"30 秒"}),o.jsx("option",{value:60,children:"60 秒"}),o.jsx("option",{value:90,children:"90 秒"}),o.jsx("option",{value:120,children:"120 秒"})]})]}),o.jsxs("label",{className:"ol-check",onClick:()=>$(!T),children:[o.jsx("span",{className:`ol-check__box${T?" ol-check__box--on":""}`,children:T?"✓":""}),o.jsx("span",{children:"设置房间密码"})]}),T&&o.jsx("div",{className:"ol-field",children:o.jsx("input",{className:"ol-input",value:b,onChange:M=>j(M.target.value),placeholder:"输入密码…",maxLength:20,type:"password"})}),o.jsx("button",{className:"ol-btn ol-btn--primary",onClick:E,children:"创建房间"})]}),s==="join"&&o.jsxs("div",{className:"ol-panel",children:[o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"房间号"}),o.jsx("input",{className:"ol-input ol-input--code",value:p,onChange:M=>m(M.target.value.toUpperCase()),placeholder:"输入6位房间号",maxLength:6})]}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"密码（若有）"}),o.jsx("input",{className:"ol-input",value:g,onChange:M=>h(M.target.value),placeholder:"无密码可留空",maxLength:20,type:"password"})]}),o.jsx("button",{className:"ol-btn ol-btn--primary",onClick:D,disabled:p.trim().length<1,children:"加入房间"})]}),s==="browse"&&o.jsxs("div",{className:"ol-panel",children:[o.jsxs("div",{className:"ol-browse-header",children:[o.jsx("span",{className:"ol-label",children:"在线房间"}),o.jsx("button",{className:"ol-refresh-btn",onClick:a,children:"刷新"})]}),!r||r.length===0?o.jsx("div",{className:"ol-empty",children:"暂无房间，创建一个吧"}):o.jsx("div",{className:"ol-room-list",children:r.map(M=>o.jsxs("div",{className:"ol-room-row",children:[o.jsx("span",{className:"ol-room-row__code",children:M.roomCode}),o.jsx("span",{className:"ol-room-row__host",children:M.hostName}),o.jsx("span",{className:`ol-room-row__status ol-room-row__status--${M.status}`,children:ky[M.status]??M.status}),o.jsxs("span",{className:"ol-room-row__count",children:[M.playerCount,"/",M.maxPlayers]}),M.hasPassword&&o.jsx("span",{className:"ol-room-row__lock",title:"需要密码",children:"🔒"}),M.status==="lobby"?o.jsx("button",{className:"ol-room-row__join",onClick:()=>L(M.roomCode,M.hasPassword),children:"加入"}):o.jsx("button",{className:"ol-room-row__join",onClick:()=>i==null?void 0:i(M.roomCode),disabled:!i,children:"观战"})]},M.roomCode))})]}),o.jsx("button",{className:"ol-btn ol-btn--back",onClick:e,children:"返回主菜单"})]}),o.jsx("style",{children:jy})]})}const jy=`
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
`;function wy({room:e,localPlayerId:n,connectionStatus:t,lastError:r,send:a,onLeave:i}){var $;const[s,c]=w.useState(""),d=e.slots.find(k=>k.playerId===n),u=n!=null&&n===(($=e.slots[0])==null?void 0:$.playerId),p=(d==null?void 0:d.isReady)??!1,m=e.slots.filter(k=>k.type!=="empty"),g=m.length>=2&&m.every(k=>k.isReady),h=e.slots.filter(k=>k.type!=="empty"&&k.playerId!==n).map(k=>k.unitId),f=w.useState(!1);w.useEffect(()=>{if(f[0]||!n)return;if(d!=null&&d.unitId&&d.unitId!=="TR"){c(d.unitId),f[1](!0);return}const k=q.filter(S=>!h.includes(S.id));if(k.length>0){const S=k[Math.floor(Math.random()*k.length)];c(S.id),a({type:"LOBBY_ACTION",action:{type:"SELECT_UNIT",playerId:n,unitId:S.id}}),f[1](!0)}},[n]);function y(k){c(k),a({type:"LOBBY_ACTION",action:{type:"SELECT_UNIT",playerId:n,unitId:k}})}function _(){const k=q.filter(A=>!h.includes(A.id)&&A.id!==s);if(k.length===0)return;const S=k[Math.floor(Math.random()*k.length)];y(S.id)}function v(){a({type:p?"UNREADY":"READY"})}function x(){a({type:"START_GAME"})}function b(k,S){a({type:"SET_SLOT_TYPE",playerId:k,slotType:S})}function j(k){a({type:"KICK_PLAYER",playerId:k})}function T(){a({type:"LEAVE_ROOM"}),i()}return o.jsxs("div",{className:"rm-screen",children:[o.jsxs("div",{className:"rm-center",children:[o.jsxs("div",{className:"rm-header",children:[o.jsx("h2",{className:"rm-room-title",children:"房间"}),o.jsx("div",{className:"rm-room-code",children:e.roomCode}),e.hasPassword&&o.jsx("span",{className:"rm-lock",title:"有密码",children:"🔒"}),o.jsx("div",{className:"rm-room-status",children:t==="connected"?o.jsx("span",{className:"rm-status rm-status--ok",children:"已连接"}):o.jsx("span",{className:"rm-status rm-status--warn",children:t})})]}),r&&o.jsx("div",{className:"rm-error",children:r}),o.jsx("div",{className:"rm-slots",children:e.slots.map((k,S)=>o.jsx(Sy,{slot:k,isLocal:k.playerId===n,isHost:u,onSetSlotType:b,onKick:j},S))}),o.jsxs("div",{className:"rm-section",children:[o.jsxs("div",{className:"rm-section-header",children:[o.jsx("div",{className:"rm-section-title",children:"选择机体"}),o.jsx("button",{className:"rm-random-btn",onClick:_,title:"随机选择机体",children:"🎲 随机"})]}),o.jsx("div",{className:"rm-unit-grid",children:q.map(k=>{const S=s||(d==null?void 0:d.unitId),A=h.includes(k.id),E=S===k.id;return o.jsxs("button",{className:`rm-unit-btn${E?" rm-unit-btn--selected":""}${A?" rm-unit-btn--taken":""}`,onClick:()=>!A&&y(k.id),disabled:A,title:`${k.nameCn} (${k.nameJa}) - MOV:${k.movement} EVA:${k.evasion} ASL:${k.assault} INIT:${k.initiative}`,children:[o.jsx("span",{className:"rm-unit-code",children:k.id}),o.jsx("span",{className:"rm-unit-name",children:k.nameCn})]},k.id)})})]}),o.jsxs("div",{className:"rm-actions",children:[o.jsx("button",{className:`rm-btn${p?" rm-btn--unready":" rm-btn--ready"}`,onClick:v,children:p?"取消准备":"准备"}),u&&o.jsx("button",{className:"rm-btn rm-btn--start",onClick:x,disabled:!g,title:g?"开始游戏":"等待所有玩家准备",children:"开始游戏"}),o.jsx("button",{className:"rm-btn rm-btn--leave",onClick:T,children:"离开房间"})]})]}),o.jsx("style",{children:Cy})]})}function Sy({slot:e,isLocal:n,isHost:t,onSetSlotType:r,onKick:a}){const i=q.find(s=>s.id===e.unitId);return e.type==="empty"?o.jsxs("div",{className:"rm-slot rm-slot--empty",children:[o.jsxs("span",{className:"rm-slot__index",children:["#",e.index+1]}),o.jsx("span",{className:"rm-slot__name",children:"空位"}),t&&o.jsx("button",{className:"rm-slot__toggle",onClick:()=>r(e.playerId,"ai"),children:"+AI"})]}):o.jsxs("div",{className:`rm-slot${n?" rm-slot--local":""}${e.isConnected?"":" rm-slot--dc"}`,children:[o.jsxs("span",{className:"rm-slot__index",children:["#",e.index+1]}),o.jsx("span",{className:"rm-slot__type-badge",children:e.type==="ai"?"AI":""}),o.jsxs("span",{className:"rm-slot__name",children:[e.playerName||e.playerId,n&&" (你)"]}),o.jsx("span",{className:"rm-slot__unit",children:i?i.nameCn:e.unitId||"未选择"}),o.jsx("span",{className:`rm-slot__ready${e.isReady?" rm-slot__ready--yes":""}`,children:e.isReady?"已准备":"未准备"}),!e.isConnected&&o.jsx("span",{className:"rm-slot__dc",children:"断线"}),t&&e.type==="ai"&&o.jsx("button",{className:"rm-slot__toggle",onClick:()=>r(e.playerId,"empty"),children:"移除"}),t&&!n&&e.type==="human"&&a&&o.jsx("button",{className:"rm-slot__toggle rm-slot__toggle--kick",onClick:()=>a(e.playerId),children:"踢出"})]})}const Cy=`
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
`;function Ny(){return`ws://${window.location.hostname}:3001`}const My=Ny();function Ty({onBack:e}){const[n]=w.useState(My),[t,r]=w.useState("lobby"),[a,i]=w.useState(null),s=w.useCallback((m,g)=>{i({type:"create",playerName:m,settings:g}),r("connected")},[]),c=w.useCallback((m,g,h)=>{i({type:"join",roomCode:m,playerName:g,password:h}),r("connected")},[]),d=w.useCallback(m=>{i({type:"spectate",roomCode:m}),r("connected")},[]),u=w.useCallback(()=>{t!=="connected"&&(i({type:"browse"}),r("connected"))},[t]),p=w.useCallback(()=>{i(null),r("lobby")},[]);return t==="lobby"?o.jsx(Gm,{onBack:e,onCreateRoom:s,onJoinRoom:c,onRefreshRooms:u,onSpectate:d}):o.jsx(_y,{serverUrl:n,children:o.jsx(Ey,{pendingAction:a,onBack:e,onDisconnect:p})})}function Ey({pendingAction:e,onDisconnect:n}){const{state:t,room:r,localPlayerId:a,send:i,connectionStatus:s,lastError:c,roomList:d}=pc(),[u,p]=w.useState(!1);return!u&&s==="connected"&&e&&(e.type==="create"?i({type:"CREATE_ROOM",playerName:e.playerName,settings:e.settings}):e.type==="join"?i({type:"JOIN_ROOM",roomCode:e.roomCode,playerName:e.playerName,password:e.password}):e.type==="spectate"?i({type:"SPECTATE_ROOM",roomCode:e.roomCode}):e.type==="browse"&&i({type:"LIST_ROOMS"}),p(!0)),(e==null?void 0:e.type)==="browse"&&!r&&!t?o.jsx(Gm,{onBack:n,onCreateRoom:(m,g)=>{i({type:"CREATE_ROOM",playerName:m,settings:g})},onJoinRoom:(m,g,h)=>{i({type:"JOIN_ROOM",roomCode:m,playerName:g,password:h})},roomList:d,onRefreshRooms:()=>i({type:"LIST_ROOMS"})}):s==="connecting"?o.jsxs("div",{className:"og-connecting",children:[o.jsx("div",{className:"og-spinner"}),o.jsx("p",{children:"正在连接服务器…"}),o.jsx("button",{className:"ol-btn ol-btn--back",onClick:n,children:"取消"}),o.jsx("style",{children:ya})]}):r&&!t?o.jsx(wy,{room:r,localPlayerId:a,connectionStatus:s,lastError:c,send:i,onLeave:n}):t&&a?o.jsx(hi,{children:o.jsx(Iy,{children:o.jsx(Dy,{})})}):t&&!a?o.jsx($y,{state:t,room:r,onLeave:n}):o.jsxs("div",{className:"og-connecting",children:[o.jsx("div",{className:"og-spinner"}),o.jsx("p",{children:"等待服务器响应…"}),c&&o.jsx("div",{className:"rm-error",children:c}),o.jsx("button",{className:"ol-btn ol-btn--back",onClick:n,children:"返回"}),o.jsx("style",{children:ya})]})}function Dy(){const e=Ta(),{dispatch:n,aiConfig:t}=Ne(),{localPlayerId:r,connectionStatus:a,plottingStatus:i,lastError:s,turnDeadline:c}=pc(),[d,u]=w.useState(null);w.useEffect(()=>{if(!c){u(null);return}const k=()=>{const A=Math.max(0,Math.ceil((c-Date.now())/1e3));u(A)};k();const S=setInterval(k,500);return()=>clearInterval(S)},[c]),w.useEffect(()=>{e.phase==="pregame"&&n({type:"START_PLOTTING"})},[e.phase,n]);const[p,m]=w.useState([{id:"map",zIndex:10},{id:"log",zIndex:11},{id:"mecha",zIndex:12},{id:"plot",zIndex:100}]),g=w.useCallback(k=>{m(S=>{const A=Math.max(...S.map(H=>H.zIndex)),E=S.find(H=>H.id===k);if(E&&E.zIndex===A)return S;const D=[...S].sort((H,B)=>H.zIndex-B.zIndex),L=10,M=new Map;let O=0;for(const H of D)H.id!==k&&M.set(H.id,L+O++);return M.set(k,L+D.length-1),S.map(H=>({...H,zIndex:M.get(H.id)??H.zIndex}))})},[]),h=k=>{var S;return((S=p.find(A=>A.id===k))==null?void 0:S.zIndex)??10},f=w.useCallback(k=>[],[]),y=Ii(),_=y?window.innerWidth:Math.max(400,Math.min(window.innerWidth*.6,620)),v=300,x=window.innerWidth-v-16,b=y?window.innerWidth:380,j=window.innerWidth-b-16,T=e.phase==="plotting"&&e.plottingStep!=="complete"&&e.plottingStep!==null&&!e.plottingStep.startsWith("transition_to_")&&!Re(t,e.plottingStep),$=o.jsxs("div",{className:"og-status-bar",children:[o.jsxs("span",{className:"og-round",children:["第 ",e.roundNumber," 回合"]}),o.jsx("span",{className:"og-phase",children:Um(e.phase)}),e.currentTiming&&o.jsxs("span",{className:"og-timing",children:["▶ ",Hm(e.currentTiming)]}),!y&&e.turnOrder.length>0&&o.jsxs("span",{className:"og-debug-info",title:"当前行动顺序",children:["[",e.turnOrder.map(k=>k.replace("player","P")).join("→"),"]"]}),d!==null&&d>0&&o.jsxs("span",{className:`og-countdown${d<=10?" og-countdown--warn":""}`,children:["⏱ ",d,"s"]}),o.jsx("span",{style:{flex:1}}),i&&e.phase==="plotting"&&o.jsxs("span",{className:"og-plotting",children:["布局进度: ",i.confirmed.length,"/",i.total]}),!y&&o.jsx("button",{className:"og-export-btn",onClick:()=>Bm(e,{localPlayerId:r??void 0,connectionStatus:a}),title:"导出全量日志（含调试状态快照）",children:"📋 导出日志"}),o.jsx("span",{className:`og-conn og-conn--${a}`,children:a==="connected"?"在线":a}),r&&o.jsx("span",{className:"og-pid",children:r.replace("player","P")})]});return y?o.jsxs("div",{className:"game-screen game-screen--mobile",children:[$,s&&o.jsx("div",{className:"rm-error",style:{margin:"4px 12px 0"},children:s}),o.jsx("div",{className:"game-screen__board-mobile",children:o.jsx(gr,{})}),o.jsxs("div",{className:"game-screen__panels-mobile",children:[T&&o.jsx(ke,{id:"plot",title:"布局阶段",initialPos:{x:0,y:0},width:b,children:o.jsx(Xt,{})}),o.jsx(ke,{id:"mecha",title:"机体信息",initialPos:{x:0,y:0},defaultMinimized:!0,children:o.jsx(Xo,{})}),o.jsx(ke,{id:"log",title:"行动日志",initialPos:{x:0,y:0},defaultMinimized:!0,children:o.jsx(ba,{})})]}),o.jsx(Zo,{}),o.jsx(Yo,{}),o.jsx("style",{children:ya})]}):o.jsxs("div",{className:"game-screen",style:{position:"relative",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[$,s&&o.jsx("div",{className:"rm-error",style:{margin:"4px 16px 0"},children:s}),o.jsxs("div",{style:{position:"relative",flex:1},children:[o.jsx(ke,{id:"map",title:"地图",initialPos:{x:16,y:8},width:_,minHeight:300,zIndex:h("map"),onFocus:g,siblingRects:f("map"),children:o.jsx("div",{style:{height:"calc(100vh - 100px)",minHeight:300},children:o.jsx(gr,{})})}),o.jsx(ke,{id:"log",title:"行动日志",initialPos:{x,y:8},width:v,height:260,minHeight:120,zIndex:h("log"),onFocus:g,siblingRects:f("log"),children:o.jsx(ba,{})}),o.jsx(ke,{id:"mecha",title:"机体信息",initialPos:{x,y:280},width:v,minHeight:160,zIndex:h("mecha"),onFocus:g,siblingRects:f("mecha"),children:o.jsx(Xo,{})}),T&&o.jsx(ke,{id:"plot",title:"布局阶段",initialPos:{x:j,y:8},width:b,height:620,minHeight:80,zIndex:h("plot"),onFocus:g,siblingRects:f("plot"),children:o.jsx(Xt,{})})]}),o.jsx(Zo,{}),o.jsx(Yo,{}),o.jsx("style",{children:ya})]})}function $y({state:e,room:n,onLeave:t}){const r={player1:!0,player2:!0,player1Difficulty:"easy",player2Difficulty:"easy",playerAI:Object.fromEntries(e.playerIds.map(s=>[s,!0])),playerDifficulty:Object.fromEntries(e.playerIds.map(s=>[s,"easy"]))},a=()=>{},i={state:e,dispatch:a,rawDispatch:a,getCard:s=>ee(s),aiConfig:r,setAIConfig:()=>{},getReplayData:()=>null,autoSaveEnabled:!1,setAutoSaveEnabled:()=>{},exposureMode:!1,setExposureMode:()=>{},isOnline:!0,localPlayerId:null,currentTurnPlayerId:null};return o.jsx(_i.Provider,{value:i,children:o.jsx(hi,{children:o.jsxs("div",{className:"game-screen",style:{position:"relative",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[o.jsxs("div",{className:"og-status-bar",children:[o.jsx("span",{className:"og-spectate-badge",children:"观战中"}),o.jsxs("span",{className:"og-round",children:["第 ",e.roundNumber," 回合"]}),o.jsx("span",{className:"og-phase",children:Um(e.phase)}),e.currentTiming&&o.jsxs("span",{className:"og-timing",children:["▶ ",Hm(e.currentTiming)]}),o.jsx("span",{style:{flex:1}}),n&&o.jsx("span",{className:"og-room-code-badge",children:n.roomCode}),o.jsx("button",{className:"rm-btn rm-btn--leave",onClick:t,children:"离开"})]}),o.jsxs("div",{style:{position:"relative",flex:1},children:[o.jsx(ke,{id:"map",title:"地图",initialPos:{x:16,y:8},width:Math.max(400,Math.min(window.innerWidth*.7,700)),minHeight:300,children:o.jsx("div",{style:{height:"calc(100vh - 100px)",minHeight:300},children:o.jsx(gr,{})})}),o.jsx(ke,{id:"log",title:"行动日志",initialPos:{x:window.innerWidth-316,y:8},width:300,height:400,minHeight:120,children:o.jsx(ba,{})})]}),o.jsx("style",{children:ya})]})})})}function Um(e){return{pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"主要阶段 1",action_seg2:"主要阶段 2",cleanup:"清理阶段",game_over:"游戏结束"}[e]??e}function Hm(e){return{movement:"移动",ranged:"射击",melee:"近战",special:"特殊"}[e]??e}const ya=`
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
`;function Ay(){const e=Ta(),{rawDispatch:n,aiConfig:t,setAIConfig:r,getReplayData:a,autoSaveEnabled:i,setAutoSaveEnabled:s,exposureMode:c,setExposureMode:d}=Ne(),[u,p]=w.useState("home"),[m,g]=w.useState("units"),[h,f]=w.useState(!0);function y(_){n({type:"LOAD_GAME",state:_.gameState}),r(_.aiConfig),p("game")}return u==="rules"?o.jsx(Sv,{onBack:()=>p((e.phase==="setup","game"))}):u==="data"?o.jsx(Nv,{onBack:()=>p("game")}):u==="load"?o.jsx(qd,{mode:"load",onBack:()=>p("home"),onLoad:y}):u==="replay"?o.jsx(Gv,{onBack:()=>p("home")}):u==="save"?o.jsx(qd,{mode:"save",onBack:()=>p("game"),currentState:e,aiConfig:t}):u==="mapEditor"?o.jsx(cy,{onBack:()=>p("home")}):u==="online"?o.jsx(Ty,{onBack:()=>p("home")}):u==="home"?o.jsx(Ax,{onStart:()=>{Ee.init(),g("units"),p("game")},onOnlinePlay:()=>{Ee.init(),p("online")},onViewRules:()=>p("rules"),onViewData:()=>p("data"),onLoadGame:()=>p("load"),onReplay:()=>p("replay"),onMapEditor:()=>p("mapEditor"),exposureMode:c,onToggleExposure:()=>d(!c),autoFill:h,onToggleAutoFill:()=>f(!h)}):e.phase==="setup"?m==="units"?o.jsx(wx,{onNext:()=>g("spawn"),autoFill:h}):o.jsx(Dx,{onBack:()=>g("units")}):e.phase==="game_over"?o.jsx(Py,{onHome:()=>{p("home"),g("units")},onSaveReplay:()=>{const _=a();if(!_)return;const v=e.players.player1.isDefeated,x=e.players.player2.isDefeated,b=v&&x?"draw":v?"player2":x?"player1":null;try{fx(_.initialState,_.actions,b),alert("录像已保存！")}catch{alert("保存失败，存储空间可能不足。")}}}):o.jsx(Vy,{onSave:()=>p("save"),autoSaveEnabled:i,onToggleAutoSave:()=>s(!i)})}function Vy({onSave:e,autoSaveEnabled:n,onToggleAutoSave:t}){const r=Ta(),{dispatch:a,exposureMode:i,getCard:s,aiConfig:c}=Ne();w.useEffect(()=>{r.phase==="pregame"&&a({type:"START_PLOTTING"})},[r.phase,a]);const d=w.useRef(r.phase);w.useEffect(()=>{const $=d.current;if(d.current=r.phase,!!i&&$==="plotting"&&r.phase==="action_seg1"){const k=S=>{if(!S)return"无";const A=s(S.defId);return A?A.nameCn:S.defId};for(const S of r.playerIds){const A=r.players[S];if(A.isDefeated)continue;const E=`P${S.replace("player","")}`;a({type:"ADD_LOG",message:`[暴露] ${E} 布局: 段1=${k(A.plotSeg1)} / 段2=${k(A.plotSeg2)}`})}}},[r.phase]);const[u,p]=w.useState([{id:"map",zIndex:10},{id:"log",zIndex:11},{id:"mecha",zIndex:12},{id:"plot",zIndex:100}]),m=w.useRef(new Map),g=w.useCallback($=>{p(k=>{const S=Math.max(...k.map(O=>O.zIndex)),A=k.find(O=>O.id===$);if(A&&A.zIndex===S)return k;const E=[...k].sort((O,H)=>O.zIndex-H.zIndex),D=10,L=new Map;let M=0;for(const O of E)O.id!==$&&L.set(O.id,D+M++);return L.set($,D+E.length-1),k.map(O=>({...O,zIndex:L.get(O.id)??O.zIndex}))})},[]),h=$=>{var k;return((k=u.find(S=>S.id===$))==null?void 0:k.zIndex)??10},f=w.useCallback($=>{const k=[];return m.current.forEach((S,A)=>{A!==$&&S&&k.push(S.getBoundingClientRect())}),k},[]),y=Ii(),_=y?window.innerWidth:Math.max(400,Math.min(window.innerWidth*.6,620)),v=300,x=window.innerWidth-v-16,b=36,j=y?window.innerWidth:380,T=window.innerWidth-j-16;if(y){const $=r.phase==="plotting"&&r.plottingStep!=="complete"&&r.plottingStep!==null&&!r.plottingStep.startsWith("transition_to_")&&!Re(c,r.plottingStep),k=r.phase==="plotting"&&r.plottingStep!=="complete"&&r.plottingStep!==null&&!r.plottingStep.startsWith("transition_to_")&&Re(c,r.plottingStep);return o.jsxs("div",{className:"game-screen game-screen--mobile",children:[o.jsx("div",{className:"game-screen__header",style:{flexShrink:0},children:o.jsx(lu,{onSave:e,autoSaveEnabled:n,onToggleAutoSave:t})}),o.jsx("div",{className:"game-screen__board-mobile",children:o.jsx(gr,{})}),o.jsxs("div",{className:"game-screen__panels-mobile",children:[$&&o.jsx(ke,{id:"plot",title:"布局阶段",initialPos:{x:0,y:0},width:j,children:o.jsx(Xt,{})}),k&&o.jsx("div",{style:{width:0,height:0,overflow:"hidden",opacity:0,pointerEvents:"none"},children:o.jsx(Xt,{})}),o.jsx(ke,{id:"mecha",title:"机体信息",initialPos:{x:0,y:0},defaultMinimized:!0,children:o.jsx(Xo,{})}),o.jsx(ke,{id:"log",title:"行动日志",initialPos:{x:0,y:0},defaultMinimized:!0,children:o.jsx(ba,{})})]}),o.jsx(Zo,{}),o.jsx(Yo,{}),o.jsx(cu,{}),o.jsx("style",{children:du})]})}return o.jsxs("div",{className:"game-screen",style:{position:"relative",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[o.jsx("div",{className:"game-screen__header",style:{flexShrink:0},children:o.jsx(lu,{onSave:e,autoSaveEnabled:n,onToggleAutoSave:t})}),o.jsxs("div",{style:{position:"relative",flex:1},children:[o.jsx(ke,{id:"map",title:"地图",initialPos:{x:16,y:8},width:_,minHeight:300,zIndex:h("map"),onFocus:g,siblingRects:f("map"),children:o.jsx("div",{style:{height:`calc(100vh - ${b+60}px)`,minHeight:300},children:o.jsx(gr,{})})}),o.jsx(ke,{id:"log",title:"行动日志",initialPos:{x,y:8},width:v,height:260,minHeight:120,zIndex:h("log"),onFocus:g,siblingRects:f("log"),children:o.jsx(ba,{})}),o.jsx(ke,{id:"mecha",title:"机体信息",initialPos:{x,y:280},width:v,minHeight:160,zIndex:h("mecha"),onFocus:g,siblingRects:f("mecha"),children:o.jsx(Xo,{})}),r.phase==="plotting"&&r.plottingStep!=="complete"&&r.plottingStep!==null&&!r.plottingStep.startsWith("transition_to_")&&!Re(c,r.plottingStep)&&o.jsx(ke,{id:"plot",title:"布局阶段",initialPos:{x:T,y:8},width:j,height:620,minHeight:80,zIndex:h("plot"),onFocus:g,siblingRects:f("plot"),children:o.jsx(Xt,{})}),r.phase==="plotting"&&r.plottingStep!=="complete"&&r.plottingStep!==null&&!r.plottingStep.startsWith("transition_to_")&&Re(c,r.plottingStep)&&o.jsx("div",{style:{position:"absolute",width:0,height:0,overflow:"hidden",opacity:0,pointerEvents:"none"},children:o.jsx(Xt,{})})]}),o.jsx(Zo,{}),o.jsx(Yo,{}),o.jsx(cu,{}),o.jsx("style",{children:du})]})}function lu({onSave:e,autoSaveEnabled:n,onToggleAutoSave:t}){const r=Ta(),a={pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"行动阶段 [主要阶段 1]",action_seg2:"行动阶段 [主要阶段 2]",cleanup:"清理阶段",game_over:"游戏结束"},i={movement:"移动",ranged:"射击",melee:"近战",special:"特殊"};return o.jsxs("div",{className:"phase-bar",children:[o.jsxs("span",{className:"phase-bar__round",children:["第 ",r.roundNumber," 回合"]}),o.jsx("span",{className:"phase-bar__phase",children:a[r.phase]??r.phase}),r.currentTiming&&o.jsxs("span",{className:"phase-bar__timing",children:["▶ ",i[r.currentTiming]??r.currentTiming]}),o.jsx("span",{style:{flex:1}}),o.jsx("button",{className:"phase-bar__autosave-btn",onClick:t,title:n?"自动存档已开启（点击关闭）":"自动存档已关闭（点击开启）",children:n?"💾 自动":"💾 关"}),o.jsx("button",{className:"phase-bar__save-btn",onClick:e,title:"保存游戏",children:"💾 保存"}),o.jsx("button",{className:"phase-bar__save-btn",onClick:()=>Bm(r),title:"导出全量日志（含调试状态快照）",children:"📋 日志"})]})}function zy(e){return e.startsWith("[DBG]")?"log-panel__entry log-panel__entry--debug":e.startsWith("===")?"log-panel__entry log-panel__entry--round-start":e.startsWith("---")?"log-panel__entry log-panel__entry--round-end":e.includes("发动")||e.includes("攻击")?"log-panel__entry log-panel__entry--attack":e.includes("摧毁")||e.includes("连锁")||e.includes("诱爆")?"log-panel__entry log-panel__entry--damage":e.includes("移动到")?"log-panel__entry log-panel__entry--move":e.includes("获胜")||e.includes("击破")||e.includes("平局")?"log-panel__entry log-panel__entry--victory":"log-panel__entry"}function ba(){const e=Ta();return o.jsx("div",{className:"log-panel",children:o.jsx("div",{className:"log-panel__entries",children:[...e.log].reverse().map((n,t)=>o.jsx("div",{className:zy(n),children:n},t))})})}function Py({onHome:e,onSaveReplay:n}){const{state:t,dispatch:r}=Ne(),a=t.log[t.log.length-1]??"游戏结束",i=t.players.player1.isDefeated,s=t.players.player2.isDefeated,c=i&&s?"双方同时击破":i?"玩家 2 获胜":"玩家 1 获胜";function d(){r({type:"RESET_GAME"}),e()}return o.jsxs("div",{className:"gameover-screen",children:[o.jsx("div",{className:"gameover-icon",children:"💥"}),o.jsx("h1",{className:"gameover-title",children:c}),o.jsx("p",{className:"gameover-sub",children:a}),o.jsxs("div",{className:"gameover-actions",children:[o.jsx("button",{className:"gameover-restart",onClick:d,children:"返回主菜单"}),o.jsx("button",{className:"gameover-save-replay",onClick:n,children:"🎬 保存录像"})]}),o.jsx("style",{children:Ry})]})}function cu(){const{isAnimating:e,skipAnimation:n}=Na();return e?o.jsx("button",{className:"skip-anim-btn",onClick:n,children:"⏩ 跳过"}):null}function Ly(){return o.jsx(hi,{children:o.jsx(Em,{children:o.jsx(Ay,{})})})}const du=`
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
  max-height: 55vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  border-top: 2px solid var(--color-accent);
  background: var(--color-bg);
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
    bottom: 80px;
    padding: 10px 24px;
    min-height: 44px;
  }
}
`,Ry=`
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
`;ts.createRoot(document.getElementById("root")).render(o.jsx(ff.StrictMode,{children:o.jsx(Ly,{})}));

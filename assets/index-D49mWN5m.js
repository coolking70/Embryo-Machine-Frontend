var Xf=Object.defineProperty;var Qf=(e,n,t)=>n in e?Xf(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var qe=(e,n,t)=>Qf(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function qf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var du={exports:{}},ti={},uu={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wr=Symbol.for("react.element"),em=Symbol.for("react.portal"),nm=Symbol.for("react.fragment"),tm=Symbol.for("react.strict_mode"),am=Symbol.for("react.profiler"),rm=Symbol.for("react.provider"),om=Symbol.for("react.context"),im=Symbol.for("react.forward_ref"),sm=Symbol.for("react.suspense"),lm=Symbol.for("react.memo"),cm=Symbol.for("react.lazy"),hc=Symbol.iterator;function dm(e){return e===null||typeof e!="object"?null:(e=hc&&e[hc]||e["@@iterator"],typeof e=="function"?e:null)}var pu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fu=Object.assign,mu={};function _a(e,n,t){this.props=e,this.context=n,this.refs=mu,this.updater=t||pu}_a.prototype.isReactComponent={};_a.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};_a.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function gu(){}gu.prototype=_a.prototype;function dl(e,n,t){this.props=e,this.context=n,this.refs=mu,this.updater=t||pu}var ul=dl.prototype=new gu;ul.constructor=dl;fu(ul,_a.prototype);ul.isPureReactComponent=!0;var xc=Array.isArray,hu=Object.prototype.hasOwnProperty,pl={current:null},xu={key:!0,ref:!0,__self:!0,__source:!0};function vu(e,n,t){var a,r={},i=null,s=null;if(n!=null)for(a in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(i=""+n.key),n)hu.call(n,a)&&!xu.hasOwnProperty(a)&&(r[a]=n[a]);var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){for(var d=Array(l),u=0;u<l;u++)d[u]=arguments[u+2];r.children=d}if(e&&e.defaultProps)for(a in l=e.defaultProps,l)r[a]===void 0&&(r[a]=l[a]);return{$$typeof:wr,type:e,key:i,ref:s,props:r,_owner:pl.current}}function um(e,n){return{$$typeof:wr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function fl(e){return typeof e=="object"&&e!==null&&e.$$typeof===wr}function pm(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var vc=/\/+/g;function Si(e,n){return typeof e=="object"&&e!==null&&e.key!=null?pm(""+e.key):n.toString(36)}function oo(e,n,t,a,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case wr:case em:s=!0}}if(s)return s=e,r=r(s),e=a===""?"."+Si(s,0):a,xc(r)?(t="",e!=null&&(t=e.replace(vc,"$&/")+"/"),oo(r,n,t,"",function(u){return u})):r!=null&&(fl(r)&&(r=um(r,t+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(vc,"$&/")+"/")+e)),n.push(r)),1;if(s=0,a=a===""?".":a+":",xc(e))for(var l=0;l<e.length;l++){i=e[l];var d=a+Si(i,l);s+=oo(i,n,t,d,r)}else if(d=dm(e),typeof d=="function")for(e=d.call(e),l=0;!(i=e.next()).done;)i=i.value,d=a+Si(i,l++),s+=oo(i,n,t,d,r);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function Ar(e,n,t){if(e==null)return e;var a=[],r=0;return oo(e,a,"","",function(i){return n.call(t,i,r++)}),a}function fm(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},io={transition:null},mm={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:io,ReactCurrentOwner:pl};function bu(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:Ar,forEach:function(e,n,t){Ar(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Ar(e,function(){n++}),n},toArray:function(e){return Ar(e,function(n){return n})||[]},only:function(e){if(!fl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ne.Component=_a;ne.Fragment=nm;ne.Profiler=am;ne.PureComponent=dl;ne.StrictMode=tm;ne.Suspense=sm;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mm;ne.act=bu;ne.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=fu({},e.props),r=e.key,i=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,s=pl.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in n)hu.call(n,d)&&!xu.hasOwnProperty(d)&&(a[d]=n[d]===void 0&&l!==void 0?l[d]:n[d])}var d=arguments.length-2;if(d===1)a.children=t;else if(1<d){l=Array(d);for(var u=0;u<d;u++)l[u]=arguments[u+2];a.children=l}return{$$typeof:wr,type:e.type,key:r,ref:i,props:a,_owner:s}};ne.createContext=function(e){return e={$$typeof:om,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:rm,_context:e},e.Consumer=e};ne.createElement=vu;ne.createFactory=function(e){var n=vu.bind(null,e);return n.type=e,n};ne.createRef=function(){return{current:null}};ne.forwardRef=function(e){return{$$typeof:im,render:e}};ne.isValidElement=fl;ne.lazy=function(e){return{$$typeof:cm,_payload:{_status:-1,_result:e},_init:fm}};ne.memo=function(e,n){return{$$typeof:lm,type:e,compare:n===void 0?null:n}};ne.startTransition=function(e){var n=io.transition;io.transition={};try{e()}finally{io.transition=n}};ne.unstable_act=bu;ne.useCallback=function(e,n){return Fe.current.useCallback(e,n)};ne.useContext=function(e){return Fe.current.useContext(e)};ne.useDebugValue=function(){};ne.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};ne.useEffect=function(e,n){return Fe.current.useEffect(e,n)};ne.useId=function(){return Fe.current.useId()};ne.useImperativeHandle=function(e,n,t){return Fe.current.useImperativeHandle(e,n,t)};ne.useInsertionEffect=function(e,n){return Fe.current.useInsertionEffect(e,n)};ne.useLayoutEffect=function(e,n){return Fe.current.useLayoutEffect(e,n)};ne.useMemo=function(e,n){return Fe.current.useMemo(e,n)};ne.useReducer=function(e,n,t){return Fe.current.useReducer(e,n,t)};ne.useRef=function(e){return Fe.current.useRef(e)};ne.useState=function(e){return Fe.current.useState(e)};ne.useSyncExternalStore=function(e,n,t){return Fe.current.useSyncExternalStore(e,n,t)};ne.useTransition=function(){return Fe.current.useTransition()};ne.version="18.3.1";uu.exports=ne;var k=uu.exports;const gm=qf(k);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm=k,xm=Symbol.for("react.element"),vm=Symbol.for("react.fragment"),bm=Object.prototype.hasOwnProperty,ym=hm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_m={key:!0,ref:!0,__self:!0,__source:!0};function yu(e,n,t){var a,r={},i=null,s=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(s=n.ref);for(a in n)bm.call(n,a)&&!_m.hasOwnProperty(a)&&(r[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps,n)r[a]===void 0&&(r[a]=n[a]);return{$$typeof:xm,type:e,key:i,ref:s,props:r,_owner:ym.current}}ti.Fragment=vm;ti.jsx=yu;ti.jsxs=yu;du.exports=ti;var o=du.exports,os={},_u={exports:{}},rn={},Iu={exports:{}},ku={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(L,P){var H=L.length;L.push(P);e:for(;0<H;){var O=H-1>>>1,R=L[O];if(0<r(R,P))L[O]=P,L[H]=R,H=O;else break e}}function t(L){return L.length===0?null:L[0]}function a(L){if(L.length===0)return null;var P=L[0],H=L.pop();if(H!==P){L[0]=H;e:for(var O=0,R=L.length,Y=R>>>1;O<Y;){var X=2*(O+1)-1,oe=L[X],ie=X+1,de=L[ie];if(0>r(oe,H))ie<R&&0>r(de,oe)?(L[O]=de,L[ie]=H,O=ie):(L[O]=oe,L[X]=H,O=X);else if(ie<R&&0>r(de,H))L[O]=de,L[ie]=H,O=ie;else break e}}return P}function r(L,P){var H=L.sortIndex-P.sortIndex;return H!==0?H:L.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var d=[],u=[],p=1,f=null,x=3,h=!1,m=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(L){for(var P=t(u);P!==null;){if(P.callback===null)a(u);else if(P.startTime<=L)a(u),P.sortIndex=P.expirationTime,n(d,P);else break;P=t(u)}}function j(L){if(v=!1,y(L),!m)if(t(d)!==null)m=!0,z(M);else{var P=t(u);P!==null&&J(j,P.startTime-L)}}function M(L,P){m=!1,v&&(v=!1,b(S),S=-1),h=!0;var H=x;try{for(y(P),f=t(d);f!==null&&(!(f.expirationTime>P)||L&&!$());){var O=f.callback;if(typeof O=="function"){f.callback=null,x=f.priorityLevel;var R=O(f.expirationTime<=P);P=e.unstable_now(),typeof R=="function"?f.callback=R:f===t(d)&&a(d),y(P)}else a(d);f=t(d)}if(f!==null)var Y=!0;else{var X=t(u);X!==null&&J(j,X.startTime-P),Y=!1}return Y}finally{f=null,x=H,h=!1}}var E=!1,w=null,S=-1,A=5,N=-1;function $(){return!(e.unstable_now()-N<A)}function T(){if(w!==null){var L=e.unstable_now();N=L;var P=!0;try{P=w(!0,L)}finally{P?D():(E=!1,w=null)}}else E=!1}var D;if(typeof g=="function")D=function(){g(T)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,U=K.port2;K.port1.onmessage=T,D=function(){U.postMessage(null)}}else D=function(){_(T,0)};function z(L){w=L,E||(E=!0,D())}function J(L,P){S=_(function(){L(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){m||h||(m=!0,z(M))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return t(d)},e.unstable_next=function(L){switch(x){case 1:case 2:case 3:var P=3;break;default:P=x}var H=x;x=P;try{return L()}finally{x=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,P){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var H=x;x=L;try{return P()}finally{x=H}},e.unstable_scheduleCallback=function(L,P,H){var O=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?O+H:O):H=O,L){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=H+R,L={id:p++,callback:P,priorityLevel:L,startTime:H,expirationTime:R,sortIndex:-1},H>O?(L.sortIndex=H,n(u,L),t(d)===null&&L===t(u)&&(v?(b(S),S=-1):v=!0,J(j,H-O))):(L.sortIndex=R,n(d,L),m||h||(m=!0,z(M))),L},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(L){var P=x;return function(){var H=x;x=P;try{return L.apply(this,arguments)}finally{x=H}}}})(ku);Iu.exports=ku;var Im=Iu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km=k,an=Im;function G(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ju=new Set,er={};function zt(e,n){da(e,n),da(e+"Capture",n)}function da(e,n){for(er[e]=n,e=0;e<n.length;e++)ju.add(n[e])}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),is=Object.prototype.hasOwnProperty,jm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bc={},yc={};function wm(e){return is.call(yc,e)?!0:is.call(bc,e)?!1:jm.test(e)?yc[e]=!0:(bc[e]=!0,!1)}function Sm(e,n,t,a){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cm(e,n,t,a){if(n===null||typeof n>"u"||Sm(e,n,t,a))return!0;if(a)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ge(e,n,t,a,r,i,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=s}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ae[e]=new Ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Ae[n]=new Ge(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ae[e]=new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ae[e]=new Ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ae[e]=new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ae[e]=new Ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ae[e]=new Ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ae[e]=new Ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ae[e]=new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var ml=/[\-:]([a-z])/g;function gl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ml,gl);Ae[n]=new Ge(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ml,gl);Ae[n]=new Ge(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ml,gl);Ae[n]=new Ge(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ae[e]=new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ae[e]=new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function hl(e,n,t,a){var r=Ae.hasOwnProperty(n)?Ae[n]:null;(r!==null?r.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Cm(n,t,r,a)&&(t=null),a||r===null?wm(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,a=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,a?e.setAttributeNS(a,n,t):e.setAttribute(n,t))))}var Hn=km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pr=Symbol.for("react.element"),Jt=Symbol.for("react.portal"),Bt=Symbol.for("react.fragment"),xl=Symbol.for("react.strict_mode"),ss=Symbol.for("react.profiler"),wu=Symbol.for("react.provider"),Su=Symbol.for("react.context"),vl=Symbol.for("react.forward_ref"),ls=Symbol.for("react.suspense"),cs=Symbol.for("react.suspense_list"),bl=Symbol.for("react.memo"),Yn=Symbol.for("react.lazy"),Cu=Symbol.for("react.offscreen"),_c=Symbol.iterator;function Ma(e){return e===null||typeof e!="object"?null:(e=_c&&e[_c]||e["@@iterator"],typeof e=="function"?e:null)}var be=Object.assign,Ci;function Ra(e){if(Ci===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ci=n&&n[1]||""}return`
`+Ci+e}var Ni=!1;function Mi(e,n){if(!e||Ni)return"";Ni=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var a=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){a=u}e.call(n.prototype)}else{try{throw Error()}catch(u){a=u}e()}}catch(u){if(u&&a&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),i=a.stack.split(`
`),s=r.length-1,l=i.length-1;1<=s&&0<=l&&r[s]!==i[l];)l--;for(;1<=s&&0<=l;s--,l--)if(r[s]!==i[l]){if(s!==1||l!==1)do if(s--,l--,0>l||r[s]!==i[l]){var d=`
`+r[s].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=s&&0<=l);break}}}finally{Ni=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Ra(e):""}function Nm(e){switch(e.tag){case 5:return Ra(e.type);case 16:return Ra("Lazy");case 13:return Ra("Suspense");case 19:return Ra("SuspenseList");case 0:case 2:case 15:return e=Mi(e.type,!1),e;case 11:return e=Mi(e.type.render,!1),e;case 1:return e=Mi(e.type,!0),e;default:return""}}function ds(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bt:return"Fragment";case Jt:return"Portal";case ss:return"Profiler";case xl:return"StrictMode";case ls:return"Suspense";case cs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Su:return(e.displayName||"Context")+".Consumer";case wu:return(e._context.displayName||"Context")+".Provider";case vl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case bl:return n=e.displayName||null,n!==null?n:ds(e.type)||"Memo";case Yn:n=e._payload,e=e._init;try{return ds(e(n))}catch{}}return null}function Mm(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ds(n);case 8:return n===xl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ut(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Tm(e){var n=Nu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(s){a=""+s,i.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Vr(e){e._valueTracker||(e._valueTracker=Tm(e))}function Mu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Nu(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function yo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function us(e,n){var t=n.checked;return be({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ic(e,n){var t=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;t=ut(n.value!=null?n.value:t),e._wrapperState={initialChecked:a,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Tu(e,n){n=n.checked,n!=null&&hl(e,"checked",n,!1)}function ps(e,n){Tu(e,n);var t=ut(n.value),a=n.type;if(t!=null)a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?fs(e,n.type,t):n.hasOwnProperty("defaultValue")&&fs(e,n.type,ut(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function kc(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function fs(e,n,t){(n!=="number"||yo(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Oa=Array.isArray;function ta(e,n,t,a){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&a&&(e[t].defaultSelected=!0)}else{for(t=""+ut(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function ms(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(G(91));return be({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function jc(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(G(92));if(Oa(t)){if(1<t.length)throw Error(G(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ut(t)}}function Eu(e,n){var t=ut(n.value),a=ut(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),a!=null&&(e.defaultValue=""+a)}function wc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Du(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gs(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Du(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Lr,zu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,a,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,a,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Lr=Lr||document.createElement("div"),Lr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function nr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ba={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Em=["Webkit","ms","Moz","O"];Object.keys(Ba).forEach(function(e){Em.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ba[n]=Ba[e]})});function $u(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ba.hasOwnProperty(e)&&Ba[e]?(""+n).trim():n+"px"}function Au(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var a=t.indexOf("--")===0,r=$u(t,n[t],a);t==="float"&&(t="cssFloat"),a?e.setProperty(t,r):e[t]=r}}var Dm=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hs(e,n){if(n){if(Dm[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(G(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(G(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(G(61))}if(n.style!=null&&typeof n.style!="object")throw Error(G(62))}}function xs(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vs=null;function yl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bs=null,aa=null,ra=null;function Sc(e){if(e=Nr(e)){if(typeof bs!="function")throw Error(G(280));var n=e.stateNode;n&&(n=si(n),bs(e.stateNode,e.type,n))}}function Pu(e){aa?ra?ra.push(e):ra=[e]:aa=e}function Vu(){if(aa){var e=aa,n=ra;if(ra=aa=null,Sc(e),n)for(e=0;e<n.length;e++)Sc(n[e])}}function Lu(e,n){return e(n)}function Ru(){}var Ti=!1;function Ou(e,n,t){if(Ti)return e(n,t);Ti=!0;try{return Lu(e,n,t)}finally{Ti=!1,(aa!==null||ra!==null)&&(Ru(),Vu())}}function tr(e,n){var t=e.stateNode;if(t===null)return null;var a=si(t);if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(G(231,n,typeof t));return t}var ys=!1;if(Bn)try{var Ta={};Object.defineProperty(Ta,"passive",{get:function(){ys=!0}}),window.addEventListener("test",Ta,Ta),window.removeEventListener("test",Ta,Ta)}catch{ys=!1}function zm(e,n,t,a,r,i,s,l,d){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(p){this.onError(p)}}var Fa=!1,_o=null,Io=!1,_s=null,$m={onError:function(e){Fa=!0,_o=e}};function Am(e,n,t,a,r,i,s,l,d){Fa=!1,_o=null,zm.apply($m,arguments)}function Pm(e,n,t,a,r,i,s,l,d){if(Am.apply(this,arguments),Fa){if(Fa){var u=_o;Fa=!1,_o=null}else throw Error(G(198));Io||(Io=!0,_s=u)}}function $t(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ku(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Cc(e){if($t(e)!==e)throw Error(G(188))}function Vm(e){var n=e.alternate;if(!n){if(n=$t(e),n===null)throw Error(G(188));return n!==e?null:e}for(var t=e,a=n;;){var r=t.return;if(r===null)break;var i=r.alternate;if(i===null){if(a=r.return,a!==null){t=a;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===t)return Cc(r),e;if(i===a)return Cc(r),n;i=i.sibling}throw Error(G(188))}if(t.return!==a.return)t=r,a=i;else{for(var s=!1,l=r.child;l;){if(l===t){s=!0,t=r,a=i;break}if(l===a){s=!0,a=r,t=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===t){s=!0,t=i,a=r;break}if(l===a){s=!0,a=i,t=r;break}l=l.sibling}if(!s)throw Error(G(189))}}if(t.alternate!==a)throw Error(G(190))}if(t.tag!==3)throw Error(G(188));return t.stateNode.current===t?e:n}function Ju(e){return e=Vm(e),e!==null?Bu(e):null}function Bu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Bu(e);if(n!==null)return n;e=e.sibling}return null}var Fu=an.unstable_scheduleCallback,Nc=an.unstable_cancelCallback,Lm=an.unstable_shouldYield,Rm=an.unstable_requestPaint,ke=an.unstable_now,Om=an.unstable_getCurrentPriorityLevel,_l=an.unstable_ImmediatePriority,Gu=an.unstable_UserBlockingPriority,ko=an.unstable_NormalPriority,Km=an.unstable_LowPriority,Uu=an.unstable_IdlePriority,ai=null,Tn=null;function Jm(e){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(ai,e,void 0,(e.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:Gm,Bm=Math.log,Fm=Math.LN2;function Gm(e){return e>>>=0,e===0?32:31-(Bm(e)/Fm|0)|0}var Rr=64,Or=4194304;function Ka(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function jo(e,n){var t=e.pendingLanes;if(t===0)return 0;var a=0,r=e.suspendedLanes,i=e.pingedLanes,s=t&268435455;if(s!==0){var l=s&~r;l!==0?a=Ka(l):(i&=s,i!==0&&(a=Ka(i)))}else s=t&~r,s!==0?a=Ka(s):i!==0&&(a=Ka(i));if(a===0)return 0;if(n!==0&&n!==a&&!(n&r)&&(r=a&-a,i=n&-n,r>=i||r===16&&(i&4194240)!==0))return n;if(a&4&&(a|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)t=31-In(n),r=1<<t,a|=e[t],n&=~r;return a}function Um(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hm(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-In(i),l=1<<s,d=r[s];d===-1?(!(l&t)||l&a)&&(r[s]=Um(l,n)):d<=n&&(e.expiredLanes|=l),i&=~l}}function Is(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hu(){var e=Rr;return Rr<<=1,!(Rr&4194240)&&(Rr=64),e}function Ei(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Sr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-In(n),e[n]=t}function Wm(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-In(t),i=1<<r;n[r]=0,a[r]=-1,e[r]=-1,t&=~i}}function Il(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-In(t),r=1<<a;r&n|e[a]&n&&(e[a]|=n),t&=~r}}var ce=0;function Wu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zu,kl,Yu,Xu,Qu,ks=!1,Kr=[],at=null,rt=null,ot=null,ar=new Map,rr=new Map,Qn=[],Zm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mc(e,n){switch(e){case"focusin":case"focusout":at=null;break;case"dragenter":case"dragleave":rt=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":ar.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":rr.delete(n.pointerId)}}function Ea(e,n,t,a,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:i,targetContainers:[r]},n!==null&&(n=Nr(n),n!==null&&kl(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Ym(e,n,t,a,r){switch(n){case"focusin":return at=Ea(at,e,n,t,a,r),!0;case"dragenter":return rt=Ea(rt,e,n,t,a,r),!0;case"mouseover":return ot=Ea(ot,e,n,t,a,r),!0;case"pointerover":var i=r.pointerId;return ar.set(i,Ea(ar.get(i)||null,e,n,t,a,r)),!0;case"gotpointercapture":return i=r.pointerId,rr.set(i,Ea(rr.get(i)||null,e,n,t,a,r)),!0}return!1}function qu(e){var n=bt(e.target);if(n!==null){var t=$t(n);if(t!==null){if(n=t.tag,n===13){if(n=Ku(t),n!==null){e.blockedOn=n,Qu(e.priority,function(){Yu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function so(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=js(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);vs=a,t.target.dispatchEvent(a),vs=null}else return n=Nr(t),n!==null&&kl(n),e.blockedOn=t,!1;n.shift()}return!0}function Tc(e,n,t){so(e)&&t.delete(n)}function Xm(){ks=!1,at!==null&&so(at)&&(at=null),rt!==null&&so(rt)&&(rt=null),ot!==null&&so(ot)&&(ot=null),ar.forEach(Tc),rr.forEach(Tc)}function Da(e,n){e.blockedOn===n&&(e.blockedOn=null,ks||(ks=!0,an.unstable_scheduleCallback(an.unstable_NormalPriority,Xm)))}function or(e){function n(r){return Da(r,e)}if(0<Kr.length){Da(Kr[0],e);for(var t=1;t<Kr.length;t++){var a=Kr[t];a.blockedOn===e&&(a.blockedOn=null)}}for(at!==null&&Da(at,e),rt!==null&&Da(rt,e),ot!==null&&Da(ot,e),ar.forEach(n),rr.forEach(n),t=0;t<Qn.length;t++)a=Qn[t],a.blockedOn===e&&(a.blockedOn=null);for(;0<Qn.length&&(t=Qn[0],t.blockedOn===null);)qu(t),t.blockedOn===null&&Qn.shift()}var oa=Hn.ReactCurrentBatchConfig,wo=!0;function Qm(e,n,t,a){var r=ce,i=oa.transition;oa.transition=null;try{ce=1,jl(e,n,t,a)}finally{ce=r,oa.transition=i}}function qm(e,n,t,a){var r=ce,i=oa.transition;oa.transition=null;try{ce=4,jl(e,n,t,a)}finally{ce=r,oa.transition=i}}function jl(e,n,t,a){if(wo){var r=js(e,n,t,a);if(r===null)Ki(e,n,a,So,t),Mc(e,a);else if(Ym(r,e,n,t,a))a.stopPropagation();else if(Mc(e,a),n&4&&-1<Zm.indexOf(e)){for(;r!==null;){var i=Nr(r);if(i!==null&&Zu(i),i=js(e,n,t,a),i===null&&Ki(e,n,a,So,t),i===r)break;r=i}r!==null&&a.stopPropagation()}else Ki(e,n,a,null,t)}}var So=null;function js(e,n,t,a){if(So=null,e=yl(a),e=bt(e),e!==null)if(n=$t(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ku(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return So=e,null}function ep(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Om()){case _l:return 1;case Gu:return 4;case ko:case Km:return 16;case Uu:return 536870912;default:return 16}default:return 16}}var nt=null,wl=null,lo=null;function np(){if(lo)return lo;var e,n=wl,t=n.length,a,r="value"in nt?nt.value:nt.textContent,i=r.length;for(e=0;e<t&&n[e]===r[e];e++);var s=t-e;for(a=1;a<=s&&n[t-a]===r[i-a];a++);return lo=r.slice(e,1<a?1-a:void 0)}function co(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Jr(){return!0}function Ec(){return!1}function on(e){function n(t,a,r,i,s){this._reactName=t,this._targetInst=r,this.type=a,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Jr:Ec,this.isPropagationStopped=Ec,this}return be(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Jr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Jr)},persist:function(){},isPersistent:Jr}),n}var Ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=on(Ia),Cr=be({},Ia,{view:0,detail:0}),eg=on(Cr),Di,zi,za,ri=be({},Cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==za&&(za&&e.type==="mousemove"?(Di=e.screenX-za.screenX,zi=e.screenY-za.screenY):zi=Di=0,za=e),Di)},movementY:function(e){return"movementY"in e?e.movementY:zi}}),Dc=on(ri),ng=be({},ri,{dataTransfer:0}),tg=on(ng),ag=be({},Cr,{relatedTarget:0}),$i=on(ag),rg=be({},Ia,{animationName:0,elapsedTime:0,pseudoElement:0}),og=on(rg),ig=be({},Ia,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sg=on(ig),lg=be({},Ia,{data:0}),zc=on(lg),cg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ug={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ug[e])?!!n[e]:!1}function Cl(){return pg}var fg=be({},Cr,{key:function(e){if(e.key){var n=cg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=co(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cl,charCode:function(e){return e.type==="keypress"?co(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?co(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mg=on(fg),gg=be({},ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$c=on(gg),hg=be({},Cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cl}),xg=on(hg),vg=be({},Ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),bg=on(vg),yg=be({},ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_g=on(yg),Ig=[9,13,27,32],Nl=Bn&&"CompositionEvent"in window,Ga=null;Bn&&"documentMode"in document&&(Ga=document.documentMode);var kg=Bn&&"TextEvent"in window&&!Ga,tp=Bn&&(!Nl||Ga&&8<Ga&&11>=Ga),Ac=" ",Pc=!1;function ap(e,n){switch(e){case"keyup":return Ig.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ft=!1;function jg(e,n){switch(e){case"compositionend":return rp(n);case"keypress":return n.which!==32?null:(Pc=!0,Ac);case"textInput":return e=n.data,e===Ac&&Pc?null:e;default:return null}}function wg(e,n){if(Ft)return e==="compositionend"||!Nl&&ap(e,n)?(e=np(),lo=wl=nt=null,Ft=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return tp&&n.locale!=="ko"?null:n.data;default:return null}}var Sg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Sg[e.type]:n==="textarea"}function op(e,n,t,a){Pu(a),n=Co(n,"onChange"),0<n.length&&(t=new Sl("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var Ua=null,ir=null;function Cg(e){hp(e,0)}function oi(e){var n=Ht(e);if(Mu(n))return e}function Ng(e,n){if(e==="change")return n}var ip=!1;if(Bn){var Ai;if(Bn){var Pi="oninput"in document;if(!Pi){var Lc=document.createElement("div");Lc.setAttribute("oninput","return;"),Pi=typeof Lc.oninput=="function"}Ai=Pi}else Ai=!1;ip=Ai&&(!document.documentMode||9<document.documentMode)}function Rc(){Ua&&(Ua.detachEvent("onpropertychange",sp),ir=Ua=null)}function sp(e){if(e.propertyName==="value"&&oi(ir)){var n=[];op(n,ir,e,yl(e)),Ou(Cg,n)}}function Mg(e,n,t){e==="focusin"?(Rc(),Ua=n,ir=t,Ua.attachEvent("onpropertychange",sp)):e==="focusout"&&Rc()}function Tg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oi(ir)}function Eg(e,n){if(e==="click")return oi(n)}function Dg(e,n){if(e==="input"||e==="change")return oi(n)}function zg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var wn=typeof Object.is=="function"?Object.is:zg;function sr(e,n){if(wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var r=t[a];if(!is.call(n,r)||!wn(e[r],n[r]))return!1}return!0}function Oc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kc(e,n){var t=Oc(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Oc(t)}}function lp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?lp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function cp(){for(var e=window,n=yo();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=yo(e.document)}return n}function Ml(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function $g(e){var n=cp(),t=e.focusedElem,a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&lp(t.ownerDocument.documentElement,t)){if(a!==null&&Ml(t)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,i=Math.min(a.start,r);a=a.end===void 0?i:Math.min(a.end,r),!e.extend&&i>a&&(r=a,a=i,i=r),r=Kc(t,i);var s=Kc(t,a);r&&s&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),i>a?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ag=Bn&&"documentMode"in document&&11>=document.documentMode,Gt=null,ws=null,Ha=null,Ss=!1;function Jc(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ss||Gt==null||Gt!==yo(a)||(a=Gt,"selectionStart"in a&&Ml(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ha&&sr(Ha,a)||(Ha=a,a=Co(ws,"onSelect"),0<a.length&&(n=new Sl("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Gt)))}function Br(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Ut={animationend:Br("Animation","AnimationEnd"),animationiteration:Br("Animation","AnimationIteration"),animationstart:Br("Animation","AnimationStart"),transitionend:Br("Transition","TransitionEnd")},Vi={},dp={};Bn&&(dp=document.createElement("div").style,"AnimationEvent"in window||(delete Ut.animationend.animation,delete Ut.animationiteration.animation,delete Ut.animationstart.animation),"TransitionEvent"in window||delete Ut.transitionend.transition);function ii(e){if(Vi[e])return Vi[e];if(!Ut[e])return e;var n=Ut[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in dp)return Vi[e]=n[t];return e}var up=ii("animationend"),pp=ii("animationiteration"),fp=ii("animationstart"),mp=ii("transitionend"),gp=new Map,Bc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ft(e,n){gp.set(e,n),zt(n,[e])}for(var Li=0;Li<Bc.length;Li++){var Ri=Bc[Li],Pg=Ri.toLowerCase(),Vg=Ri[0].toUpperCase()+Ri.slice(1);ft(Pg,"on"+Vg)}ft(up,"onAnimationEnd");ft(pp,"onAnimationIteration");ft(fp,"onAnimationStart");ft("dblclick","onDoubleClick");ft("focusin","onFocus");ft("focusout","onBlur");ft(mp,"onTransitionEnd");da("onMouseEnter",["mouseout","mouseover"]);da("onMouseLeave",["mouseout","mouseover"]);da("onPointerEnter",["pointerout","pointerover"]);da("onPointerLeave",["pointerout","pointerover"]);zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zt("onBeforeInput",["compositionend","keypress","textInput","paste"]);zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ja));function Fc(e,n,t){var a=e.type||"unknown-event";e.currentTarget=t,Pm(a,n,void 0,e),e.currentTarget=null}function hp(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],r=a.event;a=a.listeners;e:{var i=void 0;if(n)for(var s=a.length-1;0<=s;s--){var l=a[s],d=l.instance,u=l.currentTarget;if(l=l.listener,d!==i&&r.isPropagationStopped())break e;Fc(r,l,u),i=d}else for(s=0;s<a.length;s++){if(l=a[s],d=l.instance,u=l.currentTarget,l=l.listener,d!==i&&r.isPropagationStopped())break e;Fc(r,l,u),i=d}}}if(Io)throw e=_s,Io=!1,_s=null,e}function pe(e,n){var t=n[Es];t===void 0&&(t=n[Es]=new Set);var a=e+"__bubble";t.has(a)||(xp(n,e,2,!1),t.add(a))}function Oi(e,n,t){var a=0;n&&(a|=4),xp(t,e,a,n)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function lr(e){if(!e[Fr]){e[Fr]=!0,ju.forEach(function(t){t!=="selectionchange"&&(Lg.has(t)||Oi(t,!1,e),Oi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Fr]||(n[Fr]=!0,Oi("selectionchange",!1,n))}}function xp(e,n,t,a){switch(ep(n)){case 1:var r=Qm;break;case 4:r=qm;break;default:r=jl}t=r.bind(null,n,t,e),r=void 0,!ys||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function Ki(e,n,t,a,r){var i=a;if(!(n&1)&&!(n&2)&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var l=a.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(s===4)for(s=a.return;s!==null;){var d=s.tag;if((d===3||d===4)&&(d=s.stateNode.containerInfo,d===r||d.nodeType===8&&d.parentNode===r))return;s=s.return}for(;l!==null;){if(s=bt(l),s===null)return;if(d=s.tag,d===5||d===6){a=i=s;continue e}l=l.parentNode}}a=a.return}Ou(function(){var u=i,p=yl(t),f=[];e:{var x=gp.get(e);if(x!==void 0){var h=Sl,m=e;switch(e){case"keypress":if(co(t)===0)break e;case"keydown":case"keyup":h=mg;break;case"focusin":m="focus",h=$i;break;case"focusout":m="blur",h=$i;break;case"beforeblur":case"afterblur":h=$i;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Dc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=tg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=xg;break;case up:case pp:case fp:h=og;break;case mp:h=bg;break;case"scroll":h=eg;break;case"wheel":h=_g;break;case"copy":case"cut":case"paste":h=sg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=$c}var v=(n&4)!==0,_=!v&&e==="scroll",b=v?x!==null?x+"Capture":null:x;v=[];for(var g=u,y;g!==null;){y=g;var j=y.stateNode;if(y.tag===5&&j!==null&&(y=j,b!==null&&(j=tr(g,b),j!=null&&v.push(cr(g,j,y)))),_)break;g=g.return}0<v.length&&(x=new h(x,m,null,t,p),f.push({event:x,listeners:v}))}}if(!(n&7)){e:{if(x=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",x&&t!==vs&&(m=t.relatedTarget||t.fromElement)&&(bt(m)||m[Fn]))break e;if((h||x)&&(x=p.window===p?p:(x=p.ownerDocument)?x.defaultView||x.parentWindow:window,h?(m=t.relatedTarget||t.toElement,h=u,m=m?bt(m):null,m!==null&&(_=$t(m),m!==_||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=u),h!==m)){if(v=Dc,j="onMouseLeave",b="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(v=$c,j="onPointerLeave",b="onPointerEnter",g="pointer"),_=h==null?x:Ht(h),y=m==null?x:Ht(m),x=new v(j,g+"leave",h,t,p),x.target=_,x.relatedTarget=y,j=null,bt(p)===u&&(v=new v(b,g+"enter",m,t,p),v.target=y,v.relatedTarget=_,j=v),_=j,h&&m)n:{for(v=h,b=m,g=0,y=v;y;y=Vt(y))g++;for(y=0,j=b;j;j=Vt(j))y++;for(;0<g-y;)v=Vt(v),g--;for(;0<y-g;)b=Vt(b),y--;for(;g--;){if(v===b||b!==null&&v===b.alternate)break n;v=Vt(v),b=Vt(b)}v=null}else v=null;h!==null&&Gc(f,x,h,v,!1),m!==null&&_!==null&&Gc(f,_,m,v,!0)}}e:{if(x=u?Ht(u):window,h=x.nodeName&&x.nodeName.toLowerCase(),h==="select"||h==="input"&&x.type==="file")var M=Ng;else if(Vc(x))if(ip)M=Dg;else{M=Tg;var E=Mg}else(h=x.nodeName)&&h.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(M=Eg);if(M&&(M=M(e,u))){op(f,M,t,p);break e}E&&E(e,x,u),e==="focusout"&&(E=x._wrapperState)&&E.controlled&&x.type==="number"&&fs(x,"number",x.value)}switch(E=u?Ht(u):window,e){case"focusin":(Vc(E)||E.contentEditable==="true")&&(Gt=E,ws=u,Ha=null);break;case"focusout":Ha=ws=Gt=null;break;case"mousedown":Ss=!0;break;case"contextmenu":case"mouseup":case"dragend":Ss=!1,Jc(f,t,p);break;case"selectionchange":if(Ag)break;case"keydown":case"keyup":Jc(f,t,p)}var w;if(Nl)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Ft?ap(e,t)&&(S="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&(tp&&t.locale!=="ko"&&(Ft||S!=="onCompositionStart"?S==="onCompositionEnd"&&Ft&&(w=np()):(nt=p,wl="value"in nt?nt.value:nt.textContent,Ft=!0)),E=Co(u,S),0<E.length&&(S=new zc(S,e,null,t,p),f.push({event:S,listeners:E}),w?S.data=w:(w=rp(t),w!==null&&(S.data=w)))),(w=kg?jg(e,t):wg(e,t))&&(u=Co(u,"onBeforeInput"),0<u.length&&(p=new zc("onBeforeInput","beforeinput",null,t,p),f.push({event:p,listeners:u}),p.data=w))}hp(f,n)})}function cr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Co(e,n){for(var t=n+"Capture",a=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=tr(e,t),i!=null&&a.unshift(cr(e,i,r)),i=tr(e,n),i!=null&&a.push(cr(e,i,r))),e=e.return}return a}function Vt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gc(e,n,t,a,r){for(var i=n._reactName,s=[];t!==null&&t!==a;){var l=t,d=l.alternate,u=l.stateNode;if(d!==null&&d===a)break;l.tag===5&&u!==null&&(l=u,r?(d=tr(t,i),d!=null&&s.unshift(cr(t,d,l))):r||(d=tr(t,i),d!=null&&s.push(cr(t,d,l)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var Rg=/\r\n?/g,Og=/\u0000|\uFFFD/g;function Uc(e){return(typeof e=="string"?e:""+e).replace(Rg,`
`).replace(Og,"")}function Gr(e,n,t){if(n=Uc(n),Uc(e)!==n&&t)throw Error(G(425))}function No(){}var Cs=null,Ns=null;function Ms(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ts=typeof setTimeout=="function"?setTimeout:void 0,Kg=typeof clearTimeout=="function"?clearTimeout:void 0,Hc=typeof Promise=="function"?Promise:void 0,Jg=typeof queueMicrotask=="function"?queueMicrotask:typeof Hc<"u"?function(e){return Hc.resolve(null).then(e).catch(Bg)}:Ts;function Bg(e){setTimeout(function(){throw e})}function Ji(e,n){var t=n,a=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(a===0){e.removeChild(r),or(n);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=r}while(t);or(n)}function it(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Wc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var ka=Math.random().toString(36).slice(2),Nn="__reactFiber$"+ka,dr="__reactProps$"+ka,Fn="__reactContainer$"+ka,Es="__reactEvents$"+ka,Fg="__reactListeners$"+ka,Gg="__reactHandles$"+ka;function bt(e){var n=e[Nn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Fn]||t[Nn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Wc(e);e!==null;){if(t=e[Nn])return t;e=Wc(e)}return n}e=t,t=e.parentNode}return null}function Nr(e){return e=e[Nn]||e[Fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ht(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(G(33))}function si(e){return e[dr]||null}var Ds=[],Wt=-1;function mt(e){return{current:e}}function me(e){0>Wt||(e.current=Ds[Wt],Ds[Wt]=null,Wt--)}function ue(e,n){Wt++,Ds[Wt]=e.current,e.current=n}var pt={},Ke=mt(pt),Ye=mt(!1),jt=pt;function ua(e,n){var t=e.type.contextTypes;if(!t)return pt;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in t)r[i]=n[i];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function Xe(e){return e=e.childContextTypes,e!=null}function Mo(){me(Ye),me(Ke)}function Zc(e,n,t){if(Ke.current!==pt)throw Error(G(168));ue(Ke,n),ue(Ye,t)}function vp(e,n,t){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return t;a=a.getChildContext();for(var r in a)if(!(r in n))throw Error(G(108,Mm(e)||"Unknown",r));return be({},t,a)}function To(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pt,jt=Ke.current,ue(Ke,e),ue(Ye,Ye.current),!0}function Yc(e,n,t){var a=e.stateNode;if(!a)throw Error(G(169));t?(e=vp(e,n,jt),a.__reactInternalMemoizedMergedChildContext=e,me(Ye),me(Ke),ue(Ke,e)):me(Ye),ue(Ye,t)}var Vn=null,li=!1,Bi=!1;function bp(e){Vn===null?Vn=[e]:Vn.push(e)}function Ug(e){li=!0,bp(e)}function gt(){if(!Bi&&Vn!==null){Bi=!0;var e=0,n=ce;try{var t=Vn;for(ce=1;e<t.length;e++){var a=t[e];do a=a(!0);while(a!==null)}Vn=null,li=!1}catch(r){throw Vn!==null&&(Vn=Vn.slice(e+1)),Fu(_l,gt),r}finally{ce=n,Bi=!1}}return null}var Zt=[],Yt=0,Eo=null,Do=0,cn=[],dn=0,wt=null,On=1,Kn="";function xt(e,n){Zt[Yt++]=Do,Zt[Yt++]=Eo,Eo=e,Do=n}function yp(e,n,t){cn[dn++]=On,cn[dn++]=Kn,cn[dn++]=wt,wt=e;var a=On;e=Kn;var r=32-In(a)-1;a&=~(1<<r),t+=1;var i=32-In(n)+r;if(30<i){var s=r-r%5;i=(a&(1<<s)-1).toString(32),a>>=s,r-=s,On=1<<32-In(n)+r|t<<r|a,Kn=i+e}else On=1<<i|t<<r|a,Kn=e}function Tl(e){e.return!==null&&(xt(e,1),yp(e,1,0))}function El(e){for(;e===Eo;)Eo=Zt[--Yt],Zt[Yt]=null,Do=Zt[--Yt],Zt[Yt]=null;for(;e===wt;)wt=cn[--dn],cn[dn]=null,Kn=cn[--dn],cn[dn]=null,On=cn[--dn],cn[dn]=null}var tn=null,nn=null,he=!1,_n=null;function _p(e,n){var t=un(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Xc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,tn=e,nn=it(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,tn=e,nn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=wt!==null?{id:On,overflow:Kn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=un(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,tn=e,nn=null,!0):!1;default:return!1}}function zs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $s(e){if(he){var n=nn;if(n){var t=n;if(!Xc(e,n)){if(zs(e))throw Error(G(418));n=it(t.nextSibling);var a=tn;n&&Xc(e,n)?_p(a,t):(e.flags=e.flags&-4097|2,he=!1,tn=e)}}else{if(zs(e))throw Error(G(418));e.flags=e.flags&-4097|2,he=!1,tn=e}}}function Qc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tn=e}function Ur(e){if(e!==tn)return!1;if(!he)return Qc(e),he=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ms(e.type,e.memoizedProps)),n&&(n=nn)){if(zs(e))throw Ip(),Error(G(418));for(;n;)_p(e,n),n=it(n.nextSibling)}if(Qc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){nn=it(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}nn=null}}else nn=tn?it(e.stateNode.nextSibling):null;return!0}function Ip(){for(var e=nn;e;)e=it(e.nextSibling)}function pa(){nn=tn=null,he=!1}function Dl(e){_n===null?_n=[e]:_n.push(e)}var Hg=Hn.ReactCurrentBatchConfig;function $a(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(G(309));var a=t.stateNode}if(!a)throw Error(G(147,e));var r=a,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(s){var l=r.refs;s===null?delete l[i]:l[i]=s},n._stringRef=i,n)}if(typeof e!="string")throw Error(G(284));if(!t._owner)throw Error(G(290,e))}return e}function Hr(e,n){throw e=Object.prototype.toString.call(n),Error(G(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function qc(e){var n=e._init;return n(e._payload)}function kp(e){function n(b,g){if(e){var y=b.deletions;y===null?(b.deletions=[g],b.flags|=16):y.push(g)}}function t(b,g){if(!e)return null;for(;g!==null;)n(b,g),g=g.sibling;return null}function a(b,g){for(b=new Map;g!==null;)g.key!==null?b.set(g.key,g):b.set(g.index,g),g=g.sibling;return b}function r(b,g){return b=dt(b,g),b.index=0,b.sibling=null,b}function i(b,g,y){return b.index=y,e?(y=b.alternate,y!==null?(y=y.index,y<g?(b.flags|=2,g):y):(b.flags|=2,g)):(b.flags|=1048576,g)}function s(b){return e&&b.alternate===null&&(b.flags|=2),b}function l(b,g,y,j){return g===null||g.tag!==6?(g=Yi(y,b.mode,j),g.return=b,g):(g=r(g,y),g.return=b,g)}function d(b,g,y,j){var M=y.type;return M===Bt?p(b,g,y.props.children,j,y.key):g!==null&&(g.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Yn&&qc(M)===g.type)?(j=r(g,y.props),j.ref=$a(b,g,y),j.return=b,j):(j=xo(y.type,y.key,y.props,null,b.mode,j),j.ref=$a(b,g,y),j.return=b,j)}function u(b,g,y,j){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Xi(y,b.mode,j),g.return=b,g):(g=r(g,y.children||[]),g.return=b,g)}function p(b,g,y,j,M){return g===null||g.tag!==7?(g=kt(y,b.mode,j,M),g.return=b,g):(g=r(g,y),g.return=b,g)}function f(b,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Yi(""+g,b.mode,y),g.return=b,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Pr:return y=xo(g.type,g.key,g.props,null,b.mode,y),y.ref=$a(b,null,g),y.return=b,y;case Jt:return g=Xi(g,b.mode,y),g.return=b,g;case Yn:var j=g._init;return f(b,j(g._payload),y)}if(Oa(g)||Ma(g))return g=kt(g,b.mode,y,null),g.return=b,g;Hr(b,g)}return null}function x(b,g,y,j){var M=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return M!==null?null:l(b,g,""+y,j);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Pr:return y.key===M?d(b,g,y,j):null;case Jt:return y.key===M?u(b,g,y,j):null;case Yn:return M=y._init,x(b,g,M(y._payload),j)}if(Oa(y)||Ma(y))return M!==null?null:p(b,g,y,j,null);Hr(b,y)}return null}function h(b,g,y,j,M){if(typeof j=="string"&&j!==""||typeof j=="number")return b=b.get(y)||null,l(g,b,""+j,M);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Pr:return b=b.get(j.key===null?y:j.key)||null,d(g,b,j,M);case Jt:return b=b.get(j.key===null?y:j.key)||null,u(g,b,j,M);case Yn:var E=j._init;return h(b,g,y,E(j._payload),M)}if(Oa(j)||Ma(j))return b=b.get(y)||null,p(g,b,j,M,null);Hr(g,j)}return null}function m(b,g,y,j){for(var M=null,E=null,w=g,S=g=0,A=null;w!==null&&S<y.length;S++){w.index>S?(A=w,w=null):A=w.sibling;var N=x(b,w,y[S],j);if(N===null){w===null&&(w=A);break}e&&w&&N.alternate===null&&n(b,w),g=i(N,g,S),E===null?M=N:E.sibling=N,E=N,w=A}if(S===y.length)return t(b,w),he&&xt(b,S),M;if(w===null){for(;S<y.length;S++)w=f(b,y[S],j),w!==null&&(g=i(w,g,S),E===null?M=w:E.sibling=w,E=w);return he&&xt(b,S),M}for(w=a(b,w);S<y.length;S++)A=h(w,b,S,y[S],j),A!==null&&(e&&A.alternate!==null&&w.delete(A.key===null?S:A.key),g=i(A,g,S),E===null?M=A:E.sibling=A,E=A);return e&&w.forEach(function($){return n(b,$)}),he&&xt(b,S),M}function v(b,g,y,j){var M=Ma(y);if(typeof M!="function")throw Error(G(150));if(y=M.call(y),y==null)throw Error(G(151));for(var E=M=null,w=g,S=g=0,A=null,N=y.next();w!==null&&!N.done;S++,N=y.next()){w.index>S?(A=w,w=null):A=w.sibling;var $=x(b,w,N.value,j);if($===null){w===null&&(w=A);break}e&&w&&$.alternate===null&&n(b,w),g=i($,g,S),E===null?M=$:E.sibling=$,E=$,w=A}if(N.done)return t(b,w),he&&xt(b,S),M;if(w===null){for(;!N.done;S++,N=y.next())N=f(b,N.value,j),N!==null&&(g=i(N,g,S),E===null?M=N:E.sibling=N,E=N);return he&&xt(b,S),M}for(w=a(b,w);!N.done;S++,N=y.next())N=h(w,b,S,N.value,j),N!==null&&(e&&N.alternate!==null&&w.delete(N.key===null?S:N.key),g=i(N,g,S),E===null?M=N:E.sibling=N,E=N);return e&&w.forEach(function(T){return n(b,T)}),he&&xt(b,S),M}function _(b,g,y,j){if(typeof y=="object"&&y!==null&&y.type===Bt&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Pr:e:{for(var M=y.key,E=g;E!==null;){if(E.key===M){if(M=y.type,M===Bt){if(E.tag===7){t(b,E.sibling),g=r(E,y.props.children),g.return=b,b=g;break e}}else if(E.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Yn&&qc(M)===E.type){t(b,E.sibling),g=r(E,y.props),g.ref=$a(b,E,y),g.return=b,b=g;break e}t(b,E);break}else n(b,E);E=E.sibling}y.type===Bt?(g=kt(y.props.children,b.mode,j,y.key),g.return=b,b=g):(j=xo(y.type,y.key,y.props,null,b.mode,j),j.ref=$a(b,g,y),j.return=b,b=j)}return s(b);case Jt:e:{for(E=y.key;g!==null;){if(g.key===E)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){t(b,g.sibling),g=r(g,y.children||[]),g.return=b,b=g;break e}else{t(b,g);break}else n(b,g);g=g.sibling}g=Xi(y,b.mode,j),g.return=b,b=g}return s(b);case Yn:return E=y._init,_(b,g,E(y._payload),j)}if(Oa(y))return m(b,g,y,j);if(Ma(y))return v(b,g,y,j);Hr(b,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(t(b,g.sibling),g=r(g,y),g.return=b,b=g):(t(b,g),g=Yi(y,b.mode,j),g.return=b,b=g),s(b)):t(b,g)}return _}var fa=kp(!0),jp=kp(!1),zo=mt(null),$o=null,Xt=null,zl=null;function $l(){zl=Xt=$o=null}function Al(e){var n=zo.current;me(zo),e._currentValue=n}function As(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function ia(e,n){$o=e,zl=Xt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(We=!0),e.firstContext=null)}function gn(e){var n=e._currentValue;if(zl!==e)if(e={context:e,memoizedValue:n,next:null},Xt===null){if($o===null)throw Error(G(308));Xt=e,$o.dependencies={lanes:0,firstContext:e}}else Xt=Xt.next=e;return n}var yt=null;function Pl(e){yt===null?yt=[e]:yt.push(e)}function wp(e,n,t,a){var r=n.interleaved;return r===null?(t.next=t,Pl(n)):(t.next=r.next,r.next=t),n.interleaved=t,Gn(e,a)}function Gn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Xn=!1;function Vl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function st(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,ae&2){var r=a.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),a.pending=n,Gn(e,t)}return r=a.interleaved,r===null?(n.next=n,Pl(a)):(n.next=r.next,r.next=n),a.interleaved=n,Gn(e,t)}function uo(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Il(e,t)}}function ed(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var r=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?r=i=s:i=i.next=s,t=t.next}while(t!==null);i===null?r=i=n:i=i.next=n}else r=i=n;t={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:a.shared,effects:a.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ao(e,n,t,a){var r=e.updateQueue;Xn=!1;var i=r.firstBaseUpdate,s=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var d=l,u=d.next;d.next=null,s===null?i=u:s.next=u,s=d;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==s&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=d))}if(i!==null){var f=r.baseState;s=0,p=u=d=null,l=i;do{var x=l.lane,h=l.eventTime;if((a&x)===x){p!==null&&(p=p.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,v=l;switch(x=n,h=t,v.tag){case 1:if(m=v.payload,typeof m=="function"){f=m.call(h,f,x);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,x=typeof m=="function"?m.call(h,f,x):m,x==null)break e;f=be({},f,x);break e;case 2:Xn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,x=r.effects,x===null?r.effects=[l]:x.push(l))}else h={eventTime:h,lane:x,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=h,d=f):p=p.next=h,s|=x;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;x=l,l=x.next,x.next=null,r.lastBaseUpdate=x,r.shared.pending=null}}while(!0);if(p===null&&(d=f),r.baseState=d,r.firstBaseUpdate=u,r.lastBaseUpdate=p,n=r.shared.interleaved,n!==null){r=n;do s|=r.lane,r=r.next;while(r!==n)}else i===null&&(r.shared.lanes=0);Ct|=s,e.lanes=s,e.memoizedState=f}}function nd(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],r=a.callback;if(r!==null){if(a.callback=null,a=t,typeof r!="function")throw Error(G(191,r));r.call(a)}}}var Mr={},En=mt(Mr),ur=mt(Mr),pr=mt(Mr);function _t(e){if(e===Mr)throw Error(G(174));return e}function Ll(e,n){switch(ue(pr,n),ue(ur,e),ue(En,Mr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:gs(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=gs(n,e)}me(En),ue(En,n)}function ma(){me(En),me(ur),me(pr)}function Cp(e){_t(pr.current);var n=_t(En.current),t=gs(n,e.type);n!==t&&(ue(ur,e),ue(En,t))}function Rl(e){ur.current===e&&(me(En),me(ur))}var xe=mt(0);function Po(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Fi=[];function Ol(){for(var e=0;e<Fi.length;e++)Fi[e]._workInProgressVersionPrimary=null;Fi.length=0}var po=Hn.ReactCurrentDispatcher,Gi=Hn.ReactCurrentBatchConfig,St=0,ve=null,Ce=null,Te=null,Vo=!1,Wa=!1,fr=0,Wg=0;function Ve(){throw Error(G(321))}function Kl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!wn(e[t],n[t]))return!1;return!0}function Jl(e,n,t,a,r,i){if(St=i,ve=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,po.current=e===null||e.memoizedState===null?Qg:qg,e=t(a,r),Wa){i=0;do{if(Wa=!1,fr=0,25<=i)throw Error(G(301));i+=1,Te=Ce=null,n.updateQueue=null,po.current=e0,e=t(a,r)}while(Wa)}if(po.current=Lo,n=Ce!==null&&Ce.next!==null,St=0,Te=Ce=ve=null,Vo=!1,n)throw Error(G(300));return e}function Bl(){var e=fr!==0;return fr=0,e}function Cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?ve.memoizedState=Te=e:Te=Te.next=e,Te}function hn(){if(Ce===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var n=Te===null?ve.memoizedState:Te.next;if(n!==null)Te=n,Ce=e;else{if(e===null)throw Error(G(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Te===null?ve.memoizedState=Te=e:Te=Te.next=e}return Te}function mr(e,n){return typeof n=="function"?n(e):n}function Ui(e){var n=hn(),t=n.queue;if(t===null)throw Error(G(311));t.lastRenderedReducer=e;var a=Ce,r=a.baseQueue,i=t.pending;if(i!==null){if(r!==null){var s=r.next;r.next=i.next,i.next=s}a.baseQueue=r=i,t.pending=null}if(r!==null){i=r.next,a=a.baseState;var l=s=null,d=null,u=i;do{var p=u.lane;if((St&p)===p)d!==null&&(d=d.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),a=u.hasEagerState?u.eagerState:e(a,u.action);else{var f={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};d===null?(l=d=f,s=a):d=d.next=f,ve.lanes|=p,Ct|=p}u=u.next}while(u!==null&&u!==i);d===null?s=a:d.next=l,wn(a,n.memoizedState)||(We=!0),n.memoizedState=a,n.baseState=s,n.baseQueue=d,t.lastRenderedState=a}if(e=t.interleaved,e!==null){r=e;do i=r.lane,ve.lanes|=i,Ct|=i,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Hi(e){var n=hn(),t=n.queue;if(t===null)throw Error(G(311));t.lastRenderedReducer=e;var a=t.dispatch,r=t.pending,i=n.memoizedState;if(r!==null){t.pending=null;var s=r=r.next;do i=e(i,s.action),s=s.next;while(s!==r);wn(i,n.memoizedState)||(We=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,a]}function Np(){}function Mp(e,n){var t=ve,a=hn(),r=n(),i=!wn(a.memoizedState,r);if(i&&(a.memoizedState=r,We=!0),a=a.queue,Fl(Dp.bind(null,t,a,e),[e]),a.getSnapshot!==n||i||Te!==null&&Te.memoizedState.tag&1){if(t.flags|=2048,gr(9,Ep.bind(null,t,a,r,n),void 0,null),De===null)throw Error(G(349));St&30||Tp(t,n,r)}return r}function Tp(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ve.updateQueue,n===null?(n={lastEffect:null,stores:null},ve.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Ep(e,n,t,a){n.value=t,n.getSnapshot=a,zp(n)&&$p(e)}function Dp(e,n,t){return t(function(){zp(n)&&$p(e)})}function zp(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!wn(e,t)}catch{return!0}}function $p(e){var n=Gn(e,1);n!==null&&kn(n,e,1,-1)}function td(e){var n=Cn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mr,lastRenderedState:e},n.queue=e,e=e.dispatch=Xg.bind(null,ve,e),[n.memoizedState,e]}function gr(e,n,t,a){return e={tag:e,create:n,destroy:t,deps:a,next:null},n=ve.updateQueue,n===null?(n={lastEffect:null,stores:null},ve.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e)),e}function Ap(){return hn().memoizedState}function fo(e,n,t,a){var r=Cn();ve.flags|=e,r.memoizedState=gr(1|n,t,void 0,a===void 0?null:a)}function ci(e,n,t,a){var r=hn();a=a===void 0?null:a;var i=void 0;if(Ce!==null){var s=Ce.memoizedState;if(i=s.destroy,a!==null&&Kl(a,s.deps)){r.memoizedState=gr(n,t,i,a);return}}ve.flags|=e,r.memoizedState=gr(1|n,t,i,a)}function ad(e,n){return fo(8390656,8,e,n)}function Fl(e,n){return ci(2048,8,e,n)}function Pp(e,n){return ci(4,2,e,n)}function Vp(e,n){return ci(4,4,e,n)}function Lp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Rp(e,n,t){return t=t!=null?t.concat([e]):null,ci(4,4,Lp.bind(null,n,e),t)}function Gl(){}function Op(e,n){var t=hn();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&Kl(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function Kp(e,n){var t=hn();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&Kl(n,a[1])?a[0]:(e=e(),t.memoizedState=[e,n],e)}function Jp(e,n,t){return St&21?(wn(t,n)||(t=Hu(),ve.lanes|=t,Ct|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=t)}function Zg(e,n){var t=ce;ce=t!==0&&4>t?t:4,e(!0);var a=Gi.transition;Gi.transition={};try{e(!1),n()}finally{ce=t,Gi.transition=a}}function Bp(){return hn().memoizedState}function Yg(e,n,t){var a=ct(e);if(t={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null},Fp(e))Gp(n,t);else if(t=wp(e,n,t,a),t!==null){var r=Be();kn(t,e,a,r),Up(t,n,a)}}function Xg(e,n,t){var a=ct(e),r={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null};if(Fp(e))Gp(n,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var s=n.lastRenderedState,l=i(s,t);if(r.hasEagerState=!0,r.eagerState=l,wn(l,s)){var d=n.interleaved;d===null?(r.next=r,Pl(n)):(r.next=d.next,d.next=r),n.interleaved=r;return}}catch{}finally{}t=wp(e,n,r,a),t!==null&&(r=Be(),kn(t,e,a,r),Up(t,n,a))}}function Fp(e){var n=e.alternate;return e===ve||n!==null&&n===ve}function Gp(e,n){Wa=Vo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Up(e,n,t){if(t&4194240){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Il(e,t)}}var Lo={readContext:gn,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},Qg={readContext:gn,useCallback:function(e,n){return Cn().memoizedState=[e,n===void 0?null:n],e},useContext:gn,useEffect:ad,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,fo(4194308,4,Lp.bind(null,n,e),t)},useLayoutEffect:function(e,n){return fo(4194308,4,e,n)},useInsertionEffect:function(e,n){return fo(4,2,e,n)},useMemo:function(e,n){var t=Cn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var a=Cn();return n=t!==void 0?t(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Yg.bind(null,ve,e),[a.memoizedState,e]},useRef:function(e){var n=Cn();return e={current:e},n.memoizedState=e},useState:td,useDebugValue:Gl,useDeferredValue:function(e){return Cn().memoizedState=e},useTransition:function(){var e=td(!1),n=e[0];return e=Zg.bind(null,e[1]),Cn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var a=ve,r=Cn();if(he){if(t===void 0)throw Error(G(407));t=t()}else{if(t=n(),De===null)throw Error(G(349));St&30||Tp(a,n,t)}r.memoizedState=t;var i={value:t,getSnapshot:n};return r.queue=i,ad(Dp.bind(null,a,i,e),[e]),a.flags|=2048,gr(9,Ep.bind(null,a,i,t,n),void 0,null),t},useId:function(){var e=Cn(),n=De.identifierPrefix;if(he){var t=Kn,a=On;t=(a&~(1<<32-In(a)-1)).toString(32)+t,n=":"+n+"R"+t,t=fr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Wg++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},qg={readContext:gn,useCallback:Op,useContext:gn,useEffect:Fl,useImperativeHandle:Rp,useInsertionEffect:Pp,useLayoutEffect:Vp,useMemo:Kp,useReducer:Ui,useRef:Ap,useState:function(){return Ui(mr)},useDebugValue:Gl,useDeferredValue:function(e){var n=hn();return Jp(n,Ce.memoizedState,e)},useTransition:function(){var e=Ui(mr)[0],n=hn().memoizedState;return[e,n]},useMutableSource:Np,useSyncExternalStore:Mp,useId:Bp,unstable_isNewReconciler:!1},e0={readContext:gn,useCallback:Op,useContext:gn,useEffect:Fl,useImperativeHandle:Rp,useInsertionEffect:Pp,useLayoutEffect:Vp,useMemo:Kp,useReducer:Hi,useRef:Ap,useState:function(){return Hi(mr)},useDebugValue:Gl,useDeferredValue:function(e){var n=hn();return Ce===null?n.memoizedState=e:Jp(n,Ce.memoizedState,e)},useTransition:function(){var e=Hi(mr)[0],n=hn().memoizedState;return[e,n]},useMutableSource:Np,useSyncExternalStore:Mp,useId:Bp,unstable_isNewReconciler:!1};function bn(e,n){if(e&&e.defaultProps){n=be({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ps(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:be({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var di={isMounted:function(e){return(e=e._reactInternals)?$t(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var a=Be(),r=ct(e),i=Jn(a,r);i.payload=n,t!=null&&(i.callback=t),n=st(e,i,r),n!==null&&(kn(n,e,r,a),uo(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=Be(),r=ct(e),i=Jn(a,r);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=st(e,i,r),n!==null&&(kn(n,e,r,a),uo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Be(),a=ct(e),r=Jn(t,a);r.tag=2,n!=null&&(r.callback=n),n=st(e,r,a),n!==null&&(kn(n,e,a,t),uo(n,e,a))}};function rd(e,n,t,a,r,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,s):n.prototype&&n.prototype.isPureReactComponent?!sr(t,a)||!sr(r,i):!0}function Hp(e,n,t){var a=!1,r=pt,i=n.contextType;return typeof i=="object"&&i!==null?i=gn(i):(r=Xe(n)?jt:Ke.current,a=n.contextTypes,i=(a=a!=null)?ua(e,r):pt),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=di,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),n}function od(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&di.enqueueReplaceState(n,n.state,null)}function Vs(e,n,t,a){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},Vl(e);var i=n.contextType;typeof i=="object"&&i!==null?r.context=gn(i):(i=Xe(n)?jt:Ke.current,r.context=ua(e,i)),r.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Ps(e,n,i,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&di.enqueueReplaceState(r,r.state,null),Ao(e,t,r,a),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function ga(e,n){try{var t="",a=n;do t+=Nm(a),a=a.return;while(a);var r=t}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:r,digest:null}}function Wi(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ls(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var n0=typeof WeakMap=="function"?WeakMap:Map;function Wp(e,n,t){t=Jn(-1,t),t.tag=3,t.payload={element:null};var a=n.value;return t.callback=function(){Oo||(Oo=!0,Ws=a),Ls(e,n)},t}function Zp(e,n,t){t=Jn(-1,t),t.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var r=n.value;t.payload=function(){return a(r)},t.callback=function(){Ls(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Ls(e,n),typeof a!="function"&&(lt===null?lt=new Set([this]):lt.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function id(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new n0;var r=new Set;a.set(n,r)}else r=a.get(n),r===void 0&&(r=new Set,a.set(n,r));r.has(t)||(r.add(t),e=g0.bind(null,e,n,t),n.then(e,e))}function sd(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ld(e,n,t,a,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Jn(-1,1),n.tag=2,st(t,n,1))),t.lanes|=1),e)}var t0=Hn.ReactCurrentOwner,We=!1;function Je(e,n,t,a){n.child=e===null?jp(n,null,t,a):fa(n,e.child,t,a)}function cd(e,n,t,a,r){t=t.render;var i=n.ref;return ia(n,r),a=Jl(e,n,t,a,i,r),t=Bl(),e!==null&&!We?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Un(e,n,r)):(he&&t&&Tl(n),n.flags|=1,Je(e,n,a,r),n.child)}function dd(e,n,t,a,r){if(e===null){var i=t.type;return typeof i=="function"&&!ql(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Yp(e,n,i,a,r)):(e=xo(t.type,null,a,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&r)){var s=i.memoizedProps;if(t=t.compare,t=t!==null?t:sr,t(s,a)&&e.ref===n.ref)return Un(e,n,r)}return n.flags|=1,e=dt(i,a),e.ref=n.ref,e.return=n,n.child=e}function Yp(e,n,t,a,r){if(e!==null){var i=e.memoizedProps;if(sr(i,a)&&e.ref===n.ref)if(We=!1,n.pendingProps=a=i,(e.lanes&r)!==0)e.flags&131072&&(We=!0);else return n.lanes=e.lanes,Un(e,n,r)}return Rs(e,n,t,a,r)}function Xp(e,n,t){var a=n.pendingProps,r=a.children,i=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(qt,en),en|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ue(qt,en),en|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=i!==null?i.baseLanes:t,ue(qt,en),en|=a}else i!==null?(a=i.baseLanes|t,n.memoizedState=null):a=t,ue(qt,en),en|=a;return Je(e,n,r,t),n.child}function Qp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Rs(e,n,t,a,r){var i=Xe(t)?jt:Ke.current;return i=ua(n,i),ia(n,r),t=Jl(e,n,t,a,i,r),a=Bl(),e!==null&&!We?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Un(e,n,r)):(he&&a&&Tl(n),n.flags|=1,Je(e,n,t,r),n.child)}function ud(e,n,t,a,r){if(Xe(t)){var i=!0;To(n)}else i=!1;if(ia(n,r),n.stateNode===null)mo(e,n),Hp(n,t,a),Vs(n,t,a,r),a=!0;else if(e===null){var s=n.stateNode,l=n.memoizedProps;s.props=l;var d=s.context,u=t.contextType;typeof u=="object"&&u!==null?u=gn(u):(u=Xe(t)?jt:Ke.current,u=ua(n,u));var p=t.getDerivedStateFromProps,f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==a||d!==u)&&od(n,s,a,u),Xn=!1;var x=n.memoizedState;s.state=x,Ao(n,a,s,r),d=n.memoizedState,l!==a||x!==d||Ye.current||Xn?(typeof p=="function"&&(Ps(n,t,p,a),d=n.memoizedState),(l=Xn||rd(n,t,l,a,x,d,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=d),s.props=a,s.state=d,s.context=u,a=l):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{s=n.stateNode,Sp(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:bn(n.type,l),s.props=u,f=n.pendingProps,x=s.context,d=t.contextType,typeof d=="object"&&d!==null?d=gn(d):(d=Xe(t)?jt:Ke.current,d=ua(n,d));var h=t.getDerivedStateFromProps;(p=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==f||x!==d)&&od(n,s,a,d),Xn=!1,x=n.memoizedState,s.state=x,Ao(n,a,s,r);var m=n.memoizedState;l!==f||x!==m||Ye.current||Xn?(typeof h=="function"&&(Ps(n,t,h,a),m=n.memoizedState),(u=Xn||rd(n,t,u,a,x,m,d)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,m,d),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,m,d)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=m),s.props=a,s.state=m,s.context=d,a=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&x===e.memoizedState||(n.flags|=1024),a=!1)}return Os(e,n,t,a,i,r)}function Os(e,n,t,a,r,i){Qp(e,n);var s=(n.flags&128)!==0;if(!a&&!s)return r&&Yc(n,t,!1),Un(e,n,i);a=n.stateNode,t0.current=n;var l=s&&typeof t.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&s?(n.child=fa(n,e.child,null,i),n.child=fa(n,null,l,i)):Je(e,n,l,i),n.memoizedState=a.state,r&&Yc(n,t,!0),n.child}function qp(e){var n=e.stateNode;n.pendingContext?Zc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Zc(e,n.context,!1),Ll(e,n.containerInfo)}function pd(e,n,t,a,r){return pa(),Dl(r),n.flags|=256,Je(e,n,t,a),n.child}var Ks={dehydrated:null,treeContext:null,retryLane:0};function Js(e){return{baseLanes:e,cachePool:null,transitions:null}}function ef(e,n,t){var a=n.pendingProps,r=xe.current,i=!1,s=(n.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(r&2)!==0),l?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),ue(xe,r&1),e===null)return $s(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=a.children,e=a.fallback,i?(a=n.mode,i=n.child,s={mode:"hidden",children:s},!(a&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=fi(s,a,0,null),e=kt(e,a,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=Js(t),n.memoizedState=Ks,e):Ul(n,s));if(r=e.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return a0(e,n,s,a,l,r,t);if(i){i=a.fallback,s=n.mode,r=e.child,l=r.sibling;var d={mode:"hidden",children:a.children};return!(s&1)&&n.child!==r?(a=n.child,a.childLanes=0,a.pendingProps=d,n.deletions=null):(a=dt(r,d),a.subtreeFlags=r.subtreeFlags&14680064),l!==null?i=dt(l,i):(i=kt(i,s,t,null),i.flags|=2),i.return=n,a.return=n,a.sibling=i,n.child=a,a=i,i=n.child,s=e.child.memoizedState,s=s===null?Js(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~t,n.memoizedState=Ks,a}return i=e.child,e=i.sibling,a=dt(i,{mode:"visible",children:a.children}),!(n.mode&1)&&(a.lanes=t),a.return=n,a.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=a,n.memoizedState=null,a}function Ul(e,n){return n=fi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Wr(e,n,t,a){return a!==null&&Dl(a),fa(n,e.child,null,t),e=Ul(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function a0(e,n,t,a,r,i,s){if(t)return n.flags&256?(n.flags&=-257,a=Wi(Error(G(422))),Wr(e,n,s,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=a.fallback,r=n.mode,a=fi({mode:"visible",children:a.children},r,0,null),i=kt(i,r,s,null),i.flags|=2,a.return=n,i.return=n,a.sibling=i,n.child=a,n.mode&1&&fa(n,e.child,null,s),n.child.memoizedState=Js(s),n.memoizedState=Ks,i);if(!(n.mode&1))return Wr(e,n,s,null);if(r.data==="$!"){if(a=r.nextSibling&&r.nextSibling.dataset,a)var l=a.dgst;return a=l,i=Error(G(419)),a=Wi(i,a,void 0),Wr(e,n,s,a)}if(l=(s&e.childLanes)!==0,We||l){if(a=De,a!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(a.suspendedLanes|s)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,Gn(e,r),kn(a,e,r,-1))}return Ql(),a=Wi(Error(G(421))),Wr(e,n,s,a)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=h0.bind(null,e),r._reactRetry=n,null):(e=i.treeContext,nn=it(r.nextSibling),tn=n,he=!0,_n=null,e!==null&&(cn[dn++]=On,cn[dn++]=Kn,cn[dn++]=wt,On=e.id,Kn=e.overflow,wt=n),n=Ul(n,a.children),n.flags|=4096,n)}function fd(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),As(e.return,n,t)}function Zi(e,n,t,a,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:r}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=t,i.tailMode=r)}function nf(e,n,t){var a=n.pendingProps,r=a.revealOrder,i=a.tail;if(Je(e,n,a.children,t),a=xe.current,a&2)a=a&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fd(e,t,n);else if(e.tag===19)fd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ue(xe,a),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&Po(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),Zi(n,!1,r,t,i);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Po(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}Zi(n,!0,t,null,i);break;case"together":Zi(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function mo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Un(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Ct|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(G(153));if(n.child!==null){for(e=n.child,t=dt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=dt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function r0(e,n,t){switch(n.tag){case 3:qp(n),pa();break;case 5:Cp(n);break;case 1:Xe(n.type)&&To(n);break;case 4:Ll(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,r=n.memoizedProps.value;ue(zo,a._currentValue),a._currentValue=r;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(ue(xe,xe.current&1),n.flags|=128,null):t&n.child.childLanes?ef(e,n,t):(ue(xe,xe.current&1),e=Un(e,n,t),e!==null?e.sibling:null);ue(xe,xe.current&1);break;case 19:if(a=(t&n.childLanes)!==0,e.flags&128){if(a)return nf(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ue(xe,xe.current),a)break;return null;case 22:case 23:return n.lanes=0,Xp(e,n,t)}return Un(e,n,t)}var tf,Bs,af,rf;tf=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Bs=function(){};af=function(e,n,t,a){var r=e.memoizedProps;if(r!==a){e=n.stateNode,_t(En.current);var i=null;switch(t){case"input":r=us(e,r),a=us(e,a),i=[];break;case"select":r=be({},r,{value:void 0}),a=be({},a,{value:void 0}),i=[];break;case"textarea":r=ms(e,r),a=ms(e,a),i=[];break;default:typeof r.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=No)}hs(t,a);var s;t=null;for(u in r)if(!a.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var l=r[u];for(s in l)l.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(er.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in a){var d=a[u];if(l=r!=null?r[u]:void 0,a.hasOwnProperty(u)&&d!==l&&(d!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||d&&d.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in d)d.hasOwnProperty(s)&&l[s]!==d[s]&&(t||(t={}),t[s]=d[s])}else t||(i||(i=[]),i.push(u,t)),t=d;else u==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,l=l?l.__html:void 0,d!=null&&l!==d&&(i=i||[]).push(u,d)):u==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(u,""+d):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(er.hasOwnProperty(u)?(d!=null&&u==="onScroll"&&pe("scroll",e),i||l===d||(i=[])):(i=i||[]).push(u,d))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};rf=function(e,n,t,a){t!==a&&(n.flags|=4)};function Aa(e,n){if(!he)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Le(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags&14680064,a|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function o0(e,n,t){var a=n.pendingProps;switch(El(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(n),null;case 1:return Xe(n.type)&&Mo(),Le(n),null;case 3:return a=n.stateNode,ma(),me(Ye),me(Ke),Ol(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ur(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,_n!==null&&(Xs(_n),_n=null))),Bs(e,n),Le(n),null;case 5:Rl(n);var r=_t(pr.current);if(t=n.type,e!==null&&n.stateNode!=null)af(e,n,t,a,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(G(166));return Le(n),null}if(e=_t(En.current),Ur(n)){a=n.stateNode,t=n.type;var i=n.memoizedProps;switch(a[Nn]=n,a[dr]=i,e=(n.mode&1)!==0,t){case"dialog":pe("cancel",a),pe("close",a);break;case"iframe":case"object":case"embed":pe("load",a);break;case"video":case"audio":for(r=0;r<Ja.length;r++)pe(Ja[r],a);break;case"source":pe("error",a);break;case"img":case"image":case"link":pe("error",a),pe("load",a);break;case"details":pe("toggle",a);break;case"input":Ic(a,i),pe("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!i.multiple},pe("invalid",a);break;case"textarea":jc(a,i),pe("invalid",a)}hs(t,i),r=null;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="children"?typeof l=="string"?a.textContent!==l&&(i.suppressHydrationWarning!==!0&&Gr(a.textContent,l,e),r=["children",l]):typeof l=="number"&&a.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Gr(a.textContent,l,e),r=["children",""+l]):er.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&pe("scroll",a)}switch(t){case"input":Vr(a),kc(a,i,!0);break;case"textarea":Vr(a),wc(a);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(a.onclick=No)}a=r,n.updateQueue=a,a!==null&&(n.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Du(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=s.createElement(t,{is:a.is}):(e=s.createElement(t),t==="select"&&(s=e,a.multiple?s.multiple=!0:a.size&&(s.size=a.size))):e=s.createElementNS(e,t),e[Nn]=n,e[dr]=a,tf(e,n,!1,!1),n.stateNode=e;e:{switch(s=xs(t,a),t){case"dialog":pe("cancel",e),pe("close",e),r=a;break;case"iframe":case"object":case"embed":pe("load",e),r=a;break;case"video":case"audio":for(r=0;r<Ja.length;r++)pe(Ja[r],e);r=a;break;case"source":pe("error",e),r=a;break;case"img":case"image":case"link":pe("error",e),pe("load",e),r=a;break;case"details":pe("toggle",e),r=a;break;case"input":Ic(e,a),r=us(e,a),pe("invalid",e);break;case"option":r=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},r=be({},a,{value:void 0}),pe("invalid",e);break;case"textarea":jc(e,a),r=ms(e,a),pe("invalid",e);break;default:r=a}hs(t,r),l=r;for(i in l)if(l.hasOwnProperty(i)){var d=l[i];i==="style"?Au(e,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&zu(e,d)):i==="children"?typeof d=="string"?(t!=="textarea"||d!=="")&&nr(e,d):typeof d=="number"&&nr(e,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(er.hasOwnProperty(i)?d!=null&&i==="onScroll"&&pe("scroll",e):d!=null&&hl(e,i,d,s))}switch(t){case"input":Vr(e),kc(e,a,!1);break;case"textarea":Vr(e),wc(e);break;case"option":a.value!=null&&e.setAttribute("value",""+ut(a.value));break;case"select":e.multiple=!!a.multiple,i=a.value,i!=null?ta(e,!!a.multiple,i,!1):a.defaultValue!=null&&ta(e,!!a.multiple,a.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=No)}switch(t){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Le(n),null;case 6:if(e&&n.stateNode!=null)rf(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(G(166));if(t=_t(pr.current),_t(En.current),Ur(n)){if(a=n.stateNode,t=n.memoizedProps,a[Nn]=n,(i=a.nodeValue!==t)&&(e=tn,e!==null))switch(e.tag){case 3:Gr(a.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Gr(a.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else a=(t.nodeType===9?t:t.ownerDocument).createTextNode(a),a[Nn]=n,n.stateNode=a}return Le(n),null;case 13:if(me(xe),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&nn!==null&&n.mode&1&&!(n.flags&128))Ip(),pa(),n.flags|=98560,i=!1;else if(i=Ur(n),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(G(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(G(317));i[Nn]=n}else pa(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Le(n),i=!1}else _n!==null&&(Xs(_n),_n=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,n.mode&1&&(e===null||xe.current&1?Me===0&&(Me=3):Ql())),n.updateQueue!==null&&(n.flags|=4),Le(n),null);case 4:return ma(),Bs(e,n),e===null&&lr(n.stateNode.containerInfo),Le(n),null;case 10:return Al(n.type._context),Le(n),null;case 17:return Xe(n.type)&&Mo(),Le(n),null;case 19:if(me(xe),i=n.memoizedState,i===null)return Le(n),null;if(a=(n.flags&128)!==0,s=i.rendering,s===null)if(a)Aa(i,!1);else{if(Me!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=Po(e),s!==null){for(n.flags|=128,Aa(i,!1),a=s.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=t,t=n.child;t!==null;)i=t,e=a,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ue(xe,xe.current&1|2),n.child}e=e.sibling}i.tail!==null&&ke()>ha&&(n.flags|=128,a=!0,Aa(i,!1),n.lanes=4194304)}else{if(!a)if(e=Po(s),e!==null){if(n.flags|=128,a=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Aa(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!he)return Le(n),null}else 2*ke()-i.renderingStartTime>ha&&t!==1073741824&&(n.flags|=128,a=!0,Aa(i,!1),n.lanes=4194304);i.isBackwards?(s.sibling=n.child,n.child=s):(t=i.last,t!==null?t.sibling=s:n.child=s,i.last=s)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=ke(),n.sibling=null,t=xe.current,ue(xe,a?t&1|2:t&1),n):(Le(n),null);case 22:case 23:return Xl(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&n.mode&1?en&1073741824&&(Le(n),n.subtreeFlags&6&&(n.flags|=8192)):Le(n),null;case 24:return null;case 25:return null}throw Error(G(156,n.tag))}function i0(e,n){switch(El(n),n.tag){case 1:return Xe(n.type)&&Mo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ma(),me(Ye),me(Ke),Ol(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Rl(n),null;case 13:if(me(xe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(G(340));pa()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return me(xe),null;case 4:return ma(),null;case 10:return Al(n.type._context),null;case 22:case 23:return Xl(),null;case 24:return null;default:return null}}var Zr=!1,Re=!1,s0=typeof WeakSet=="function"?WeakSet:Set,W=null;function Qt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(a){_e(e,n,a)}else t.current=null}function Fs(e,n,t){try{t()}catch(a){_e(e,n,a)}}var md=!1;function l0(e,n){if(Cs=wo,e=cp(),Ml(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var r=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var s=0,l=-1,d=-1,u=0,p=0,f=e,x=null;n:for(;;){for(var h;f!==t||r!==0&&f.nodeType!==3||(l=s+r),f!==i||a!==0&&f.nodeType!==3||(d=s+a),f.nodeType===3&&(s+=f.nodeValue.length),(h=f.firstChild)!==null;)x=f,f=h;for(;;){if(f===e)break n;if(x===t&&++u===r&&(l=s),x===i&&++p===a&&(d=s),(h=f.nextSibling)!==null)break;f=x,x=f.parentNode}f=h}t=l===-1||d===-1?null:{start:l,end:d}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ns={focusedElem:e,selectionRange:t},wo=!1,W=n;W!==null;)if(n=W,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,W=e;else for(;W!==null;){n=W;try{var m=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,_=m.memoizedState,b=n.stateNode,g=b.getSnapshotBeforeUpdate(n.elementType===n.type?v:bn(n.type,v),_);b.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(G(163))}}catch(j){_e(n,n.return,j)}if(e=n.sibling,e!==null){e.return=n.return,W=e;break}W=n.return}return m=md,md=!1,m}function Za(e,n,t){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var r=a=a.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&Fs(n,t,i)}r=r.next}while(r!==a)}}function ui(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var a=t.create;t.destroy=a()}t=t.next}while(t!==n)}}function Gs(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function of(e){var n=e.alternate;n!==null&&(e.alternate=null,of(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Nn],delete n[dr],delete n[Es],delete n[Fg],delete n[Gg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sf(e){return e.tag===5||e.tag===3||e.tag===4}function gd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Us(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=No));else if(a!==4&&(e=e.child,e!==null))for(Us(e,n,t),e=e.sibling;e!==null;)Us(e,n,t),e=e.sibling}function Hs(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Hs(e,n,t),e=e.sibling;e!==null;)Hs(e,n,t),e=e.sibling}var ze=null,yn=!1;function Zn(e,n,t){for(t=t.child;t!==null;)lf(e,n,t),t=t.sibling}function lf(e,n,t){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(ai,t)}catch{}switch(t.tag){case 5:Re||Qt(t,n);case 6:var a=ze,r=yn;ze=null,Zn(e,n,t),ze=a,yn=r,ze!==null&&(yn?(e=ze,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ze.removeChild(t.stateNode));break;case 18:ze!==null&&(yn?(e=ze,t=t.stateNode,e.nodeType===8?Ji(e.parentNode,t):e.nodeType===1&&Ji(e,t),or(e)):Ji(ze,t.stateNode));break;case 4:a=ze,r=yn,ze=t.stateNode.containerInfo,yn=!0,Zn(e,n,t),ze=a,yn=r;break;case 0:case 11:case 14:case 15:if(!Re&&(a=t.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){r=a=a.next;do{var i=r,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Fs(t,n,s),r=r.next}while(r!==a)}Zn(e,n,t);break;case 1:if(!Re&&(Qt(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=t.memoizedProps,a.state=t.memoizedState,a.componentWillUnmount()}catch(l){_e(t,n,l)}Zn(e,n,t);break;case 21:Zn(e,n,t);break;case 22:t.mode&1?(Re=(a=Re)||t.memoizedState!==null,Zn(e,n,t),Re=a):Zn(e,n,t);break;default:Zn(e,n,t)}}function hd(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new s0),n.forEach(function(a){var r=x0.bind(null,e,a);t.has(a)||(t.add(a),a.then(r,r))})}}function vn(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var r=t[a];try{var i=e,s=n,l=s;e:for(;l!==null;){switch(l.tag){case 5:ze=l.stateNode,yn=!1;break e;case 3:ze=l.stateNode.containerInfo,yn=!0;break e;case 4:ze=l.stateNode.containerInfo,yn=!0;break e}l=l.return}if(ze===null)throw Error(G(160));lf(i,s,r),ze=null,yn=!1;var d=r.alternate;d!==null&&(d.return=null),r.return=null}catch(u){_e(r,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)cf(n,e),n=n.sibling}function cf(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vn(n,e),Sn(e),a&4){try{Za(3,e,e.return),ui(3,e)}catch(v){_e(e,e.return,v)}try{Za(5,e,e.return)}catch(v){_e(e,e.return,v)}}break;case 1:vn(n,e),Sn(e),a&512&&t!==null&&Qt(t,t.return);break;case 5:if(vn(n,e),Sn(e),a&512&&t!==null&&Qt(t,t.return),e.flags&32){var r=e.stateNode;try{nr(r,"")}catch(v){_e(e,e.return,v)}}if(a&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,s=t!==null?t.memoizedProps:i,l=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Tu(r,i),xs(l,s);var u=xs(l,i);for(s=0;s<d.length;s+=2){var p=d[s],f=d[s+1];p==="style"?Au(r,f):p==="dangerouslySetInnerHTML"?zu(r,f):p==="children"?nr(r,f):hl(r,p,f,u)}switch(l){case"input":ps(r,i);break;case"textarea":Eu(r,i);break;case"select":var x=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?ta(r,!!i.multiple,h,!1):x!==!!i.multiple&&(i.defaultValue!=null?ta(r,!!i.multiple,i.defaultValue,!0):ta(r,!!i.multiple,i.multiple?[]:"",!1))}r[dr]=i}catch(v){_e(e,e.return,v)}}break;case 6:if(vn(n,e),Sn(e),a&4){if(e.stateNode===null)throw Error(G(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(v){_e(e,e.return,v)}}break;case 3:if(vn(n,e),Sn(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{or(n.containerInfo)}catch(v){_e(e,e.return,v)}break;case 4:vn(n,e),Sn(e);break;case 13:vn(n,e),Sn(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(Zl=ke())),a&4&&hd(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(Re=(u=Re)||p,vn(n,e),Re=u):vn(n,e),Sn(e),a&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(W=e,p=e.child;p!==null;){for(f=W=p;W!==null;){switch(x=W,h=x.child,x.tag){case 0:case 11:case 14:case 15:Za(4,x,x.return);break;case 1:Qt(x,x.return);var m=x.stateNode;if(typeof m.componentWillUnmount=="function"){a=x,t=x.return;try{n=a,m.props=n.memoizedProps,m.state=n.memoizedState,m.componentWillUnmount()}catch(v){_e(a,t,v)}}break;case 5:Qt(x,x.return);break;case 22:if(x.memoizedState!==null){vd(f);continue}}h!==null?(h.return=x,W=h):vd(f)}p=p.sibling}e:for(p=null,f=e;;){if(f.tag===5){if(p===null){p=f;try{r=f.stateNode,u?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,d=f.memoizedProps.style,s=d!=null&&d.hasOwnProperty("display")?d.display:null,l.style.display=$u("display",s))}catch(v){_e(e,e.return,v)}}}else if(f.tag===6){if(p===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){_e(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;p===f&&(p=null),f=f.return}p===f&&(p=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:vn(n,e),Sn(e),a&4&&hd(e);break;case 21:break;default:vn(n,e),Sn(e)}}function Sn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(sf(t)){var a=t;break e}t=t.return}throw Error(G(160))}switch(a.tag){case 5:var r=a.stateNode;a.flags&32&&(nr(r,""),a.flags&=-33);var i=gd(e);Hs(e,i,r);break;case 3:case 4:var s=a.stateNode.containerInfo,l=gd(e);Us(e,l,s);break;default:throw Error(G(161))}}catch(d){_e(e,e.return,d)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function c0(e,n,t){W=e,df(e)}function df(e,n,t){for(var a=(e.mode&1)!==0;W!==null;){var r=W,i=r.child;if(r.tag===22&&a){var s=r.memoizedState!==null||Zr;if(!s){var l=r.alternate,d=l!==null&&l.memoizedState!==null||Re;l=Zr;var u=Re;if(Zr=s,(Re=d)&&!u)for(W=r;W!==null;)s=W,d=s.child,s.tag===22&&s.memoizedState!==null?bd(r):d!==null?(d.return=s,W=d):bd(r);for(;i!==null;)W=i,df(i),i=i.sibling;W=r,Zr=l,Re=u}xd(e)}else r.subtreeFlags&8772&&i!==null?(i.return=r,W=i):xd(e)}}function xd(e){for(;W!==null;){var n=W;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Re||ui(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!Re)if(t===null)a.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:bn(n.type,t.memoizedProps);a.componentDidUpdate(r,t.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&nd(n,i,a);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}nd(n,s,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var d=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&t.focus();break;case"img":d.src&&(t.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var f=p.dehydrated;f!==null&&or(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(G(163))}Re||n.flags&512&&Gs(n)}catch(x){_e(n,n.return,x)}}if(n===e){W=null;break}if(t=n.sibling,t!==null){t.return=n.return,W=t;break}W=n.return}}function vd(e){for(;W!==null;){var n=W;if(n===e){W=null;break}var t=n.sibling;if(t!==null){t.return=n.return,W=t;break}W=n.return}}function bd(e){for(;W!==null;){var n=W;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ui(4,n)}catch(d){_e(n,t,d)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var r=n.return;try{a.componentDidMount()}catch(d){_e(n,r,d)}}var i=n.return;try{Gs(n)}catch(d){_e(n,i,d)}break;case 5:var s=n.return;try{Gs(n)}catch(d){_e(n,s,d)}}}catch(d){_e(n,n.return,d)}if(n===e){W=null;break}var l=n.sibling;if(l!==null){l.return=n.return,W=l;break}W=n.return}}var d0=Math.ceil,Ro=Hn.ReactCurrentDispatcher,Hl=Hn.ReactCurrentOwner,pn=Hn.ReactCurrentBatchConfig,ae=0,De=null,we=null,$e=0,en=0,qt=mt(0),Me=0,hr=null,Ct=0,pi=0,Wl=0,Ya=null,He=null,Zl=0,ha=1/0,Pn=null,Oo=!1,Ws=null,lt=null,Yr=!1,tt=null,Ko=0,Xa=0,Zs=null,go=-1,ho=0;function Be(){return ae&6?ke():go!==-1?go:go=ke()}function ct(e){return e.mode&1?ae&2&&$e!==0?$e&-$e:Hg.transition!==null?(ho===0&&(ho=Hu()),ho):(e=ce,e!==0||(e=window.event,e=e===void 0?16:ep(e.type)),e):1}function kn(e,n,t,a){if(50<Xa)throw Xa=0,Zs=null,Error(G(185));Sr(e,t,a),(!(ae&2)||e!==De)&&(e===De&&(!(ae&2)&&(pi|=t),Me===4&&qn(e,$e)),Qe(e,a),t===1&&ae===0&&!(n.mode&1)&&(ha=ke()+500,li&&gt()))}function Qe(e,n){var t=e.callbackNode;Hm(e,n);var a=jo(e,e===De?$e:0);if(a===0)t!==null&&Nc(t),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(t!=null&&Nc(t),n===1)e.tag===0?Ug(yd.bind(null,e)):bp(yd.bind(null,e)),Jg(function(){!(ae&6)&&gt()}),t=null;else{switch(Wu(a)){case 1:t=_l;break;case 4:t=Gu;break;case 16:t=ko;break;case 536870912:t=Uu;break;default:t=ko}t=vf(t,uf.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function uf(e,n){if(go=-1,ho=0,ae&6)throw Error(G(327));var t=e.callbackNode;if(sa()&&e.callbackNode!==t)return null;var a=jo(e,e===De?$e:0);if(a===0)return null;if(a&30||a&e.expiredLanes||n)n=Jo(e,a);else{n=a;var r=ae;ae|=2;var i=ff();(De!==e||$e!==n)&&(Pn=null,ha=ke()+500,It(e,n));do try{f0();break}catch(l){pf(e,l)}while(!0);$l(),Ro.current=i,ae=r,we!==null?n=0:(De=null,$e=0,n=Me)}if(n!==0){if(n===2&&(r=Is(e),r!==0&&(a=r,n=Ys(e,r))),n===1)throw t=hr,It(e,0),qn(e,a),Qe(e,ke()),t;if(n===6)qn(e,a);else{if(r=e.current.alternate,!(a&30)&&!u0(r)&&(n=Jo(e,a),n===2&&(i=Is(e),i!==0&&(a=i,n=Ys(e,i))),n===1))throw t=hr,It(e,0),qn(e,a),Qe(e,ke()),t;switch(e.finishedWork=r,e.finishedLanes=a,n){case 0:case 1:throw Error(G(345));case 2:vt(e,He,Pn);break;case 3:if(qn(e,a),(a&130023424)===a&&(n=Zl+500-ke(),10<n)){if(jo(e,0)!==0)break;if(r=e.suspendedLanes,(r&a)!==a){Be(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Ts(vt.bind(null,e,He,Pn),n);break}vt(e,He,Pn);break;case 4:if(qn(e,a),(a&4194240)===a)break;for(n=e.eventTimes,r=-1;0<a;){var s=31-In(a);i=1<<s,s=n[s],s>r&&(r=s),a&=~i}if(a=r,a=ke()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*d0(a/1960))-a,10<a){e.timeoutHandle=Ts(vt.bind(null,e,He,Pn),a);break}vt(e,He,Pn);break;case 5:vt(e,He,Pn);break;default:throw Error(G(329))}}}return Qe(e,ke()),e.callbackNode===t?uf.bind(null,e):null}function Ys(e,n){var t=Ya;return e.current.memoizedState.isDehydrated&&(It(e,n).flags|=256),e=Jo(e,n),e!==2&&(n=He,He=t,n!==null&&Xs(n)),e}function Xs(e){He===null?He=e:He.push.apply(He,e)}function u0(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var a=0;a<t.length;a++){var r=t[a],i=r.getSnapshot;r=r.value;try{if(!wn(i(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qn(e,n){for(n&=~Wl,n&=~pi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-In(n),a=1<<t;e[t]=-1,n&=~a}}function yd(e){if(ae&6)throw Error(G(327));sa();var n=jo(e,0);if(!(n&1))return Qe(e,ke()),null;var t=Jo(e,n);if(e.tag!==0&&t===2){var a=Is(e);a!==0&&(n=a,t=Ys(e,a))}if(t===1)throw t=hr,It(e,0),qn(e,n),Qe(e,ke()),t;if(t===6)throw Error(G(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,vt(e,He,Pn),Qe(e,ke()),null}function Yl(e,n){var t=ae;ae|=1;try{return e(n)}finally{ae=t,ae===0&&(ha=ke()+500,li&&gt())}}function Nt(e){tt!==null&&tt.tag===0&&!(ae&6)&&sa();var n=ae;ae|=1;var t=pn.transition,a=ce;try{if(pn.transition=null,ce=1,e)return e()}finally{ce=a,pn.transition=t,ae=n,!(ae&6)&&gt()}}function Xl(){en=qt.current,me(qt)}function It(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Kg(t)),we!==null)for(t=we.return;t!==null;){var a=t;switch(El(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Mo();break;case 3:ma(),me(Ye),me(Ke),Ol();break;case 5:Rl(a);break;case 4:ma();break;case 13:me(xe);break;case 19:me(xe);break;case 10:Al(a.type._context);break;case 22:case 23:Xl()}t=t.return}if(De=e,we=e=dt(e.current,null),$e=en=n,Me=0,hr=null,Wl=pi=Ct=0,He=Ya=null,yt!==null){for(n=0;n<yt.length;n++)if(t=yt[n],a=t.interleaved,a!==null){t.interleaved=null;var r=a.next,i=t.pending;if(i!==null){var s=i.next;i.next=r,a.next=s}t.pending=a}yt=null}return e}function pf(e,n){do{var t=we;try{if($l(),po.current=Lo,Vo){for(var a=ve.memoizedState;a!==null;){var r=a.queue;r!==null&&(r.pending=null),a=a.next}Vo=!1}if(St=0,Te=Ce=ve=null,Wa=!1,fr=0,Hl.current=null,t===null||t.return===null){Me=1,hr=n,we=null;break}e:{var i=e,s=t.return,l=t,d=n;if(n=$e,l.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var u=d,p=l,f=p.tag;if(!(p.mode&1)&&(f===0||f===11||f===15)){var x=p.alternate;x?(p.updateQueue=x.updateQueue,p.memoizedState=x.memoizedState,p.lanes=x.lanes):(p.updateQueue=null,p.memoizedState=null)}var h=sd(s);if(h!==null){h.flags&=-257,ld(h,s,l,i,n),h.mode&1&&id(i,u,n),n=h,d=u;var m=n.updateQueue;if(m===null){var v=new Set;v.add(d),n.updateQueue=v}else m.add(d);break e}else{if(!(n&1)){id(i,u,n),Ql();break e}d=Error(G(426))}}else if(he&&l.mode&1){var _=sd(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),ld(_,s,l,i,n),Dl(ga(d,l));break e}}i=d=ga(d,l),Me!==4&&(Me=2),Ya===null?Ya=[i]:Ya.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var b=Wp(i,d,n);ed(i,b);break e;case 1:l=d;var g=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(lt===null||!lt.has(y)))){i.flags|=65536,n&=-n,i.lanes|=n;var j=Zp(i,l,n);ed(i,j);break e}}i=i.return}while(i!==null)}gf(t)}catch(M){n=M,we===t&&t!==null&&(we=t=t.return);continue}break}while(!0)}function ff(){var e=Ro.current;return Ro.current=Lo,e===null?Lo:e}function Ql(){(Me===0||Me===3||Me===2)&&(Me=4),De===null||!(Ct&268435455)&&!(pi&268435455)||qn(De,$e)}function Jo(e,n){var t=ae;ae|=2;var a=ff();(De!==e||$e!==n)&&(Pn=null,It(e,n));do try{p0();break}catch(r){pf(e,r)}while(!0);if($l(),ae=t,Ro.current=a,we!==null)throw Error(G(261));return De=null,$e=0,Me}function p0(){for(;we!==null;)mf(we)}function f0(){for(;we!==null&&!Lm();)mf(we)}function mf(e){var n=xf(e.alternate,e,en);e.memoizedProps=e.pendingProps,n===null?gf(e):we=n,Hl.current=null}function gf(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=i0(t,n),t!==null){t.flags&=32767,we=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,we=null;return}}else if(t=o0(t,n,en),t!==null){we=t;return}if(n=n.sibling,n!==null){we=n;return}we=n=e}while(n!==null);Me===0&&(Me=5)}function vt(e,n,t){var a=ce,r=pn.transition;try{pn.transition=null,ce=1,m0(e,n,t,a)}finally{pn.transition=r,ce=a}return null}function m0(e,n,t,a){do sa();while(tt!==null);if(ae&6)throw Error(G(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(G(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Wm(e,i),e===De&&(we=De=null,$e=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Yr||(Yr=!0,vf(ko,function(){return sa(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=pn.transition,pn.transition=null;var s=ce;ce=1;var l=ae;ae|=4,Hl.current=null,l0(e,t),cf(t,e),$g(Ns),wo=!!Cs,Ns=Cs=null,e.current=t,c0(t),Rm(),ae=l,ce=s,pn.transition=i}else e.current=t;if(Yr&&(Yr=!1,tt=e,Ko=r),i=e.pendingLanes,i===0&&(lt=null),Jm(t.stateNode),Qe(e,ke()),n!==null)for(a=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],a(r.value,{componentStack:r.stack,digest:r.digest});if(Oo)throw Oo=!1,e=Ws,Ws=null,e;return Ko&1&&e.tag!==0&&sa(),i=e.pendingLanes,i&1?e===Zs?Xa++:(Xa=0,Zs=e):Xa=0,gt(),null}function sa(){if(tt!==null){var e=Wu(Ko),n=pn.transition,t=ce;try{if(pn.transition=null,ce=16>e?16:e,tt===null)var a=!1;else{if(e=tt,tt=null,Ko=0,ae&6)throw Error(G(331));var r=ae;for(ae|=4,W=e.current;W!==null;){var i=W,s=i.child;if(W.flags&16){var l=i.deletions;if(l!==null){for(var d=0;d<l.length;d++){var u=l[d];for(W=u;W!==null;){var p=W;switch(p.tag){case 0:case 11:case 15:Za(8,p,i)}var f=p.child;if(f!==null)f.return=p,W=f;else for(;W!==null;){p=W;var x=p.sibling,h=p.return;if(of(p),p===u){W=null;break}if(x!==null){x.return=h,W=x;break}W=h}}}var m=i.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}W=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,W=s;else e:for(;W!==null;){if(i=W,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Za(9,i,i.return)}var b=i.sibling;if(b!==null){b.return=i.return,W=b;break e}W=i.return}}var g=e.current;for(W=g;W!==null;){s=W;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,W=y;else e:for(s=g;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ui(9,l)}}catch(M){_e(l,l.return,M)}if(l===s){W=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,W=j;break e}W=l.return}}if(ae=r,gt(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(ai,e)}catch{}a=!0}return a}finally{ce=t,pn.transition=n}}return!1}function _d(e,n,t){n=ga(t,n),n=Wp(e,n,1),e=st(e,n,1),n=Be(),e!==null&&(Sr(e,1,n),Qe(e,n))}function _e(e,n,t){if(e.tag===3)_d(e,e,t);else for(;n!==null;){if(n.tag===3){_d(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(lt===null||!lt.has(a))){e=ga(t,e),e=Zp(n,e,1),n=st(n,e,1),e=Be(),n!==null&&(Sr(n,1,e),Qe(n,e));break}}n=n.return}}function g0(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),n=Be(),e.pingedLanes|=e.suspendedLanes&t,De===e&&($e&t)===t&&(Me===4||Me===3&&($e&130023424)===$e&&500>ke()-Zl?It(e,0):Wl|=t),Qe(e,n)}function hf(e,n){n===0&&(e.mode&1?(n=Or,Or<<=1,!(Or&130023424)&&(Or=4194304)):n=1);var t=Be();e=Gn(e,n),e!==null&&(Sr(e,n,t),Qe(e,t))}function h0(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),hf(e,t)}function x0(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(G(314))}a!==null&&a.delete(n),hf(e,t)}var xf;xf=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ye.current)We=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return We=!1,r0(e,n,t);We=!!(e.flags&131072)}else We=!1,he&&n.flags&1048576&&yp(n,Do,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;mo(e,n),e=n.pendingProps;var r=ua(n,Ke.current);ia(n,t),r=Jl(null,n,a,e,r,t);var i=Bl();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Xe(a)?(i=!0,To(n)):i=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Vl(n),r.updater=di,n.stateNode=r,r._reactInternals=n,Vs(n,a,e,t),n=Os(null,n,a,!0,i,t)):(n.tag=0,he&&i&&Tl(n),Je(null,n,r,t),n=n.child),n;case 16:a=n.elementType;e:{switch(mo(e,n),e=n.pendingProps,r=a._init,a=r(a._payload),n.type=a,r=n.tag=b0(a),e=bn(a,e),r){case 0:n=Rs(null,n,a,e,t);break e;case 1:n=ud(null,n,a,e,t);break e;case 11:n=cd(null,n,a,e,t);break e;case 14:n=dd(null,n,a,bn(a.type,e),t);break e}throw Error(G(306,a,""))}return n;case 0:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:bn(a,r),Rs(e,n,a,r,t);case 1:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:bn(a,r),ud(e,n,a,r,t);case 3:e:{if(qp(n),e===null)throw Error(G(387));a=n.pendingProps,i=n.memoizedState,r=i.element,Sp(e,n),Ao(n,a,null,t);var s=n.memoizedState;if(a=s.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){r=ga(Error(G(423)),n),n=pd(e,n,a,t,r);break e}else if(a!==r){r=ga(Error(G(424)),n),n=pd(e,n,a,t,r);break e}else for(nn=it(n.stateNode.containerInfo.firstChild),tn=n,he=!0,_n=null,t=jp(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(pa(),a===r){n=Un(e,n,t);break e}Je(e,n,a,t)}n=n.child}return n;case 5:return Cp(n),e===null&&$s(n),a=n.type,r=n.pendingProps,i=e!==null?e.memoizedProps:null,s=r.children,Ms(a,r)?s=null:i!==null&&Ms(a,i)&&(n.flags|=32),Qp(e,n),Je(e,n,s,t),n.child;case 6:return e===null&&$s(n),null;case 13:return ef(e,n,t);case 4:return Ll(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=fa(n,null,a,t):Je(e,n,a,t),n.child;case 11:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:bn(a,r),cd(e,n,a,r,t);case 7:return Je(e,n,n.pendingProps,t),n.child;case 8:return Je(e,n,n.pendingProps.children,t),n.child;case 12:return Je(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(a=n.type._context,r=n.pendingProps,i=n.memoizedProps,s=r.value,ue(zo,a._currentValue),a._currentValue=s,i!==null)if(wn(i.value,s)){if(i.children===r.children&&!Ye.current){n=Un(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){s=i.child;for(var d=l.firstContext;d!==null;){if(d.context===a){if(i.tag===1){d=Jn(-1,t&-t),d.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?d.next=d:(d.next=p.next,p.next=d),u.pending=d}}i.lanes|=t,d=i.alternate,d!==null&&(d.lanes|=t),As(i.return,t,n),l.lanes|=t;break}d=d.next}}else if(i.tag===10)s=i.type===n.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(G(341));s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),As(s,t,n),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===n){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Je(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,a=n.pendingProps.children,ia(n,t),r=gn(r),a=a(r),n.flags|=1,Je(e,n,a,t),n.child;case 14:return a=n.type,r=bn(a,n.pendingProps),r=bn(a.type,r),dd(e,n,a,r,t);case 15:return Yp(e,n,n.type,n.pendingProps,t);case 17:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:bn(a,r),mo(e,n),n.tag=1,Xe(a)?(e=!0,To(n)):e=!1,ia(n,t),Hp(n,a,r),Vs(n,a,r,t),Os(null,n,a,!0,e,t);case 19:return nf(e,n,t);case 22:return Xp(e,n,t)}throw Error(G(156,n.tag))};function vf(e,n){return Fu(e,n)}function v0(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function un(e,n,t,a){return new v0(e,n,t,a)}function ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function b0(e){if(typeof e=="function")return ql(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vl)return 11;if(e===bl)return 14}return 2}function dt(e,n){var t=e.alternate;return t===null?(t=un(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function xo(e,n,t,a,r,i){var s=2;if(a=e,typeof e=="function")ql(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Bt:return kt(t.children,r,i,n);case xl:s=8,r|=8;break;case ss:return e=un(12,t,n,r|2),e.elementType=ss,e.lanes=i,e;case ls:return e=un(13,t,n,r),e.elementType=ls,e.lanes=i,e;case cs:return e=un(19,t,n,r),e.elementType=cs,e.lanes=i,e;case Cu:return fi(t,r,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wu:s=10;break e;case Su:s=9;break e;case vl:s=11;break e;case bl:s=14;break e;case Yn:s=16,a=null;break e}throw Error(G(130,e==null?e:typeof e,""))}return n=un(s,t,n,r),n.elementType=e,n.type=a,n.lanes=i,n}function kt(e,n,t,a){return e=un(7,e,a,n),e.lanes=t,e}function fi(e,n,t,a){return e=un(22,e,a,n),e.elementType=Cu,e.lanes=t,e.stateNode={isHidden:!1},e}function Yi(e,n,t){return e=un(6,e,null,n),e.lanes=t,e}function Xi(e,n,t){return n=un(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function y0(e,n,t,a,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ei(0),this.expirationTimes=Ei(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ei(0),this.identifierPrefix=a,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ec(e,n,t,a,r,i,s,l,d){return e=new y0(e,n,t,l,d),n===1?(n=1,i===!0&&(n|=8)):n=0,i=un(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:a,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vl(i),e}function _0(e,n,t){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jt,key:a==null?null:""+a,children:e,containerInfo:n,implementation:t}}function bf(e){if(!e)return pt;e=e._reactInternals;e:{if($t(e)!==e||e.tag!==1)throw Error(G(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Xe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(G(171))}if(e.tag===1){var t=e.type;if(Xe(t))return vp(e,t,n)}return n}function yf(e,n,t,a,r,i,s,l,d){return e=ec(t,a,!0,e,r,i,s,l,d),e.context=bf(null),t=e.current,a=Be(),r=ct(t),i=Jn(a,r),i.callback=n??null,st(t,i,r),e.current.lanes=r,Sr(e,r,a),Qe(e,a),e}function mi(e,n,t,a){var r=n.current,i=Be(),s=ct(r);return t=bf(t),n.context===null?n.context=t:n.pendingContext=t,n=Jn(i,s),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=st(r,n,s),e!==null&&(kn(e,r,s,i),uo(e,r,s)),s}function Bo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Id(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function nc(e,n){Id(e,n),(e=e.alternate)&&Id(e,n)}function I0(){return null}var _f=typeof reportError=="function"?reportError:function(e){console.error(e)};function tc(e){this._internalRoot=e}gi.prototype.render=tc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(G(409));mi(e,n,null,null)};gi.prototype.unmount=tc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Nt(function(){mi(null,e,null,null)}),n[Fn]=null}};function gi(e){this._internalRoot=e}gi.prototype.unstable_scheduleHydration=function(e){if(e){var n=Xu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Qn.length&&n!==0&&n<Qn[t].priority;t++);Qn.splice(t,0,e),t===0&&qu(e)}};function ac(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kd(){}function k0(e,n,t,a,r){if(r){if(typeof a=="function"){var i=a;a=function(){var u=Bo(s);i.call(u)}}var s=yf(n,a,e,0,null,!1,!1,"",kd);return e._reactRootContainer=s,e[Fn]=s.current,lr(e.nodeType===8?e.parentNode:e),Nt(),s}for(;r=e.lastChild;)e.removeChild(r);if(typeof a=="function"){var l=a;a=function(){var u=Bo(d);l.call(u)}}var d=ec(e,0,!1,null,null,!1,!1,"",kd);return e._reactRootContainer=d,e[Fn]=d.current,lr(e.nodeType===8?e.parentNode:e),Nt(function(){mi(n,d,t,a)}),d}function xi(e,n,t,a,r){var i=t._reactRootContainer;if(i){var s=i;if(typeof r=="function"){var l=r;r=function(){var d=Bo(s);l.call(d)}}mi(n,s,e,r)}else s=k0(t,n,e,r,a);return Bo(s)}Zu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ka(n.pendingLanes);t!==0&&(Il(n,t|1),Qe(n,ke()),!(ae&6)&&(ha=ke()+500,gt()))}break;case 13:Nt(function(){var a=Gn(e,1);if(a!==null){var r=Be();kn(a,e,1,r)}}),nc(e,1)}};kl=function(e){if(e.tag===13){var n=Gn(e,134217728);if(n!==null){var t=Be();kn(n,e,134217728,t)}nc(e,134217728)}};Yu=function(e){if(e.tag===13){var n=ct(e),t=Gn(e,n);if(t!==null){var a=Be();kn(t,e,n,a)}nc(e,n)}};Xu=function(){return ce};Qu=function(e,n){var t=ce;try{return ce=e,n()}finally{ce=t}};bs=function(e,n,t){switch(n){case"input":if(ps(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var r=si(a);if(!r)throw Error(G(90));Mu(a),ps(a,r)}}}break;case"textarea":Eu(e,t);break;case"select":n=t.value,n!=null&&ta(e,!!t.multiple,n,!1)}};Lu=Yl;Ru=Nt;var j0={usingClientEntryPoint:!1,Events:[Nr,Ht,si,Pu,Vu,Yl]},Pa={findFiberByHostInstance:bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},w0={bundleType:Pa.bundleType,version:Pa.version,rendererPackageName:Pa.rendererPackageName,rendererConfig:Pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ju(e),e===null?null:e.stateNode},findFiberByHostInstance:Pa.findFiberByHostInstance||I0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xr.isDisabled&&Xr.supportsFiber)try{ai=Xr.inject(w0),Tn=Xr}catch{}}rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j0;rn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ac(n))throw Error(G(200));return _0(e,n,null,t)};rn.createRoot=function(e,n){if(!ac(e))throw Error(G(299));var t=!1,a="",r=_f;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=ec(e,1,!1,null,null,t,!1,a,r),e[Fn]=n.current,lr(e.nodeType===8?e.parentNode:e),new tc(n)};rn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(G(188)):(e=Object.keys(e).join(","),Error(G(268,e)));return e=Ju(n),e=e===null?null:e.stateNode,e};rn.flushSync=function(e){return Nt(e)};rn.hydrate=function(e,n,t){if(!hi(n))throw Error(G(200));return xi(null,e,n,!0,t)};rn.hydrateRoot=function(e,n,t){if(!ac(e))throw Error(G(405));var a=t!=null&&t.hydratedSources||null,r=!1,i="",s=_f;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=yf(n,null,e,1,t??null,r,!1,i,s),e[Fn]=n.current,lr(e),a)for(e=0;e<a.length;e++)t=a[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new gi(n)};rn.render=function(e,n,t){if(!hi(n))throw Error(G(200));return xi(null,e,n,!1,t)};rn.unmountComponentAtNode=function(e){if(!hi(e))throw Error(G(40));return e._reactRootContainer?(Nt(function(){xi(null,null,e,!1,function(){e._reactRootContainer=null,e[Fn]=null})}),!0):!1};rn.unstable_batchedUpdates=Yl;rn.unstable_renderSubtreeIntoContainer=function(e,n,t,a){if(!hi(t))throw Error(G(200));if(e==null||e._reactInternals===void 0)throw Error(G(38));return xi(e,n,t,!1,a)};rn.version="18.3.1-next-f1338f8080-20240426";function If(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(If)}catch(e){console.error(e)}}If(),_u.exports=rn;var Tr=_u.exports,jd=Tr;os.createRoot=jd.createRoot,os.hydrateRoot=jd.hydrateRoot;const la=["player1","player2","player3","player4","player5","player6","player7","player8"];function S0(e,n){return e.players[n]}function C0(e,n,t){return{...e,players:{...e.players,[n]:t}}}function kf(e,n){const t=e.teams[n];return e.playerIds.filter(a=>a!==n&&e.teams[a]!==t&&!e.players[a].isDefeated)}function Ee(e){return`P${e.replace("player","")}`}const N0=[{id:"ag-1",unitDeckId:"AG",nameJa:"ランス",nameCn:"长枪",actionType:"melee",frontImageId:"cards/ag/ag-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"ag-2",unitDeckId:"AG",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ag/ag-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ag-3",unitDeckId:"AG",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ag/ag-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ag-4",unitDeckId:"AG",nameJa:"スモールレーザー",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/ag/ag-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2,isEnergyWeapon:!0},{id:"ag-5",unitDeckId:"AG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ag/ag-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"ag-6",unitDeckId:"AG",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ag/ag-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-7",unitDeckId:"AG",nameJa:"ランス",nameCn:"长枪",actionType:"melee",frontImageId:"cards/ag/ag-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"ag-8",unitDeckId:"AG",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ag/ag-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-9",unitDeckId:"AG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/ag/ag-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"ag-10",unitDeckId:"AG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"ag-11",unitDeckId:"AG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/ag/ag-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"ag-12",unitDeckId:"AG",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ag/ag-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"ag-13",unitDeckId:"AG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"ag-14",unitDeckId:"AG",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ag/ag-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-15",unitDeckId:"AG",nameJa:"バーニア",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/ag/ag-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ag-16",unitDeckId:"AG",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/ag/ag-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ag-17",unitDeckId:"AG",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/ag/ag-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ag-18",unitDeckId:"AG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"ag-19",unitDeckId:"AG",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ag/ag-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-20",unitDeckId:"AG",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ag/ag-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-21",unitDeckId:"AG",nameJa:"バーニア",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/ag/ag-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"}],M0=[{id:"ar-1",unitDeckId:"AR",nameJa:"シールド",nameCn:"护盾",actionType:"armor",frontImageId:"cards/ar/ar-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止4点射击伤害。该卡在准备区时，可以将其破坏并防止4点任意伤害。"},{id:"ar-2",unitDeckId:"AR",nameJa:"アンカー",nameCn:"长锚",actionType:"ranged",frontImageId:"cards/ar/ar-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:1,rangeMax:3,damage:void 0,effectText:"射击前可以改变机甲的朝向。命中后，使攻击目标强制移动到自机面前，期间目标朝向不变。"},{id:"ar-3",unitDeckId:"AR",nameJa:"陸上機雷",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/ar/ar-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"在自机周围8格不重叠地设置机雷指示物和替身雷各2个。在各个时机结束时，检查是否有机甲位于指示物所在格。若有，将指示物翻开展示，如果是机雷的话对所在格中的机甲造成伤害，然后将指示物弃掉。"},{id:"ar-4",unitDeckId:"AR",nameJa:"陸上機雷",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/ar/ar-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"在自机周围8格不重叠地设置机雷指示物和替身雷各2个。在各个时机结束时，检查是否有机甲位于指示物所在格。若有，将指示物翻开展示，如果是机雷的话对所在格中的机甲造成伤害，然后将指示物弃掉。"},{id:"ar-5",unitDeckId:"AR",nameJa:"メイス",nameCn:"狼牙棒",actionType:"melee",frontImageId:"cards/ar/ar-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ar-6",unitDeckId:"AR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ar/ar-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ar-7",unitDeckId:"AR",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"ar-8",unitDeckId:"AR",nameJa:"移動６",nameCn:"移动6",actionType:"movement",frontImageId:"cards/ar/ar-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:6,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-9",unitDeckId:"AR",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ar/ar-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"ar-10",unitDeckId:"AR",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/ar/ar-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ar-11",unitDeckId:"AR",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"ar-12",unitDeckId:"AR",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/ar/ar-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ar-13",unitDeckId:"AR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ar/ar-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ar-14",unitDeckId:"AR",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"ar-15",unitDeckId:"AR",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ar/ar-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-16",unitDeckId:"AR",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ar/ar-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-17",unitDeckId:"AR",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ar/ar-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-18",unitDeckId:"AR",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ar/ar-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-19",unitDeckId:"AR",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ar/ar-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-20",unitDeckId:"AR",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ar/ar-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"}],T0=[{id:"bg-1",unitDeckId:"BG",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4,hasBombIcon:!0},{id:"bg-2",unitDeckId:"BG",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4,hasBombIcon:!0},{id:"bg-3",unitDeckId:"BG",nameJa:"ミドルレーザ",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/bg/bg-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3},{id:"bg-4",unitDeckId:"BG",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4,hasBombIcon:!0},{id:"bg-5",unitDeckId:"BG",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/bg/bg-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"bg-6",unitDeckId:"BG",nameJa:"スモールレーザ",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/bg/bg-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2},{id:"bg-7",unitDeckId:"BG",nameJa:"スナイパーライフル",nameCn:"狙击步枪",actionType:"ranged",frontImageId:"cards/bg/bg-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3,hasBombIcon:!0},{id:"bg-8",unitDeckId:"BG",nameJa:"スナイパーライフル",nameCn:"狙击步枪",actionType:"ranged",frontImageId:"cards/bg/bg-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3,hasBombIcon:!0},{id:"bg-9",unitDeckId:"BG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/bg/bg-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"bg-10",unitDeckId:"BG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/bg/bg-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"bg-11",unitDeckId:"BG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/bg/bg-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"bg-12",unitDeckId:"BG",nameJa:"スモールレーザ",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/bg/bg-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2},{id:"bg-13",unitDeckId:"BG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/bg/bg-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"bg-14",unitDeckId:"BG",nameJa:"ミドルレーザ",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/bg/bg-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3},{id:"bg-15",unitDeckId:"BG",nameJa:"スナイパーライフル",nameCn:"狙击步枪",actionType:"ranged",frontImageId:"cards/bg/bg-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3,hasBombIcon:!0},{id:"bg-16",unitDeckId:"BG",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/bg/bg-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"bg-17",unitDeckId:"BG",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/bg/bg-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"bg-18",unitDeckId:"BG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/bg/bg-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"bg-19",unitDeckId:"BG",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/bg/bg-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg-20",unitDeckId:"BG",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/bg/bg-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg-21",unitDeckId:"BG",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/bg/bg-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg-22",unitDeckId:"BG",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/bg/bg-22-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"bg-23",unitDeckId:"BG",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/bg/bg-23-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"}],E0=[{id:"ho-1",unitDeckId:"HO",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ho/ho-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-2",unitDeckId:"HO",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ho/ho-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-3",unitDeckId:"HO",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ho/ho-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-4",unitDeckId:"HO",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ho/ho-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-5",unitDeckId:"HO",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ho/ho-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"ho-6",unitDeckId:"HO",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ho/ho-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"ho-7",unitDeckId:"HO",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ho/ho-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ho-8",unitDeckId:"HO",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ho/ho-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-9",unitDeckId:"HO",nameJa:"移動６",nameCn:"移动6",actionType:"movement",frontImageId:"cards/ho/ho-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:6,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-10",unitDeckId:"HO",nameJa:"移動７",nameCn:"移动7",actionType:"movement",frontImageId:"cards/ho/ho-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:7,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-11",unitDeckId:"HO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ho/ho-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ho-12",unitDeckId:"HO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ho/ho-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ho-13",unitDeckId:"HO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/ho/ho-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"ho-14",unitDeckId:"HO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/ho/ho-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"ho-15",unitDeckId:"HO",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ho/ho-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ho-16",unitDeckId:"HO",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/ho/ho-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"ho-17",unitDeckId:"HO",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/ho/ho-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"}],D0=[{id:"hy-1",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"hy-2",unitDeckId:"HY",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-3",unitDeckId:"HY",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-4",unitDeckId:"HY",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-5",unitDeckId:"HY",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-6",unitDeckId:"HY",nameJa:"ガトリングガン",nameCn:"加特林",actionType:"ranged",frontImageId:"cards/hy/hy-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:5,damage:3,hasBombIcon:!0},{id:"hy-7",unitDeckId:"HY",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-8",unitDeckId:"HY",nameJa:"ガトリングガン",nameCn:"加特林",actionType:"ranged",frontImageId:"cards/hy/hy-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:5,damage:3,hasBombIcon:!0},{id:"hy-9",unitDeckId:"HY",nameJa:"ホイール",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/hy/hy-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"hy-10",unitDeckId:"HY",nameJa:"ホイール",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/hy/hy-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"hy-11",unitDeckId:"HY",nameJa:"スパイク",nameCn:"长钉",actionType:"charge",frontImageId:"cards/hy/hy-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"不进行突击移动，选择自机正面的机甲为攻击目标。对对方造成自机突击伤害+1的近战伤害。对自机造成对方被突击伤害-1的近战伤害。"},{id:"hy-12",unitDeckId:"HY",nameJa:"シールド",nameCn:"护盾",actionType:"armor",frontImageId:"cards/hy/hy-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止4点射击伤害。该卡在准备区时，可以将其破坏并防止4点任意伤害。"},{id:"hy-13",unitDeckId:"HY",nameJa:"シールド",nameCn:"护盾",actionType:"armor",frontImageId:"cards/hy/hy-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止4点射击伤害。该卡在准备区时，可以将其破坏并防止4点任意伤害。"},{id:"hy-14",unitDeckId:"HY",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/hy/hy-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"hy-15",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"hy-16",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"hy-17",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"hy-18",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"hy-19",unitDeckId:"HY",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/hy/hy-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"hy-20",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"hy-21",unitDeckId:"HY",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/hy/hy-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"hy-22",unitDeckId:"HY",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/hy/hy-22-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"hy-23",unitDeckId:"HY",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/hy/hy-23-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"hy-24",unitDeckId:"HY",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-24-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0}],z0=[{id:"lg-1",unitDeckId:"LG",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/lg/lg-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-2",unitDeckId:"LG",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/lg/lg-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-3",unitDeckId:"LG",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/lg/lg-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-4",unitDeckId:"LG",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/lg/lg-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-5",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"lg-6",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"lg-7",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"lg-8",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"lg-9",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"lg-10",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。"},{id:"lg-11",unitDeckId:"LG",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/lg/lg-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"lg-12",unitDeckId:"LG",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/lg/lg-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"lg-13",unitDeckId:"LG",nameJa:"スパイク",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/lg/lg-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"lg-14",unitDeckId:"LG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/lg/lg-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"lg-15",unitDeckId:"LG",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/lg/lg-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"lg-16",unitDeckId:"LG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/lg/lg-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"lg-17",unitDeckId:"LG",nameJa:"パイルバンカー",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/lg/lg-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"lg-18",unitDeckId:"LG",nameJa:"パイルバンカー",nameCn:"长钉",actionType:"charge",frontImageId:"cards/lg/lg-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"不进行突击移动，选择自机正面的机甲为攻击目标。对对方造成自机突击伤害+1的近战伤害。对自机造成对方被突击伤害-1的近战伤害。"},{id:"lg-19",unitDeckId:"LG",nameJa:"クロー",nameCn:"爪",actionType:"melee",frontImageId:"cards/lg/lg-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:2,effectText:"（结算伤害前）如果攻击目标的手牌、辅助区、准备区中有类别包括“装甲”的卡牌，选择其中两张破坏。"},{id:"lg-20",unitDeckId:"LG",nameJa:"クロー",nameCn:"爪",actionType:"melee",frontImageId:"cards/lg/lg-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:2,effectText:"（结算伤害前）如果攻击目标的手牌、辅助区、准备区中有类别包括“装甲”的卡牌，选择其中两张破坏。"},{id:"lg-21",unitDeckId:"LG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/lg/lg-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"lg-22",unitDeckId:"LG",nameJa:"ホイール",nameCn:"滑轮",actionType:"auxiliary",frontImageId:"cards/lg/lg-22-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:○、近战:×。使用后移动力+2。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"lg-23",unitDeckId:"LG",nameJa:"ホイール",nameCn:"滑轮",actionType:"auxiliary",frontImageId:"cards/lg/lg-23-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:○、近战:×。使用后移动力+2。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"}],$0=[{id:"lo-1",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-2",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-3",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-4",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-5",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-6",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-7",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-8",unitDeckId:"LO",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/lo/lo-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"lo-9",unitDeckId:"LO",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/lo/lo-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"lo-10",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-11",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-12",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-13",unitDeckId:"LO",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/lo/lo-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-14",unitDeckId:"LO",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/lo/lo-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-15",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-16",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-17",unitDeckId:"LO",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/lo/lo-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-18",unitDeckId:"LO",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/lo/lo-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-19",unitDeckId:"LO",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/lo/lo-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-20",unitDeckId:"LO",nameJa:"スモールレーザー",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/lo/lo-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2,isEnergyWeapon:!0}],A0=[{id:"tr-1",unitDeckId:"TR",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/tr/tr-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-2",unitDeckId:"TR",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/tr/tr-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-3",unitDeckId:"TR",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/tr/tr-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-4",unitDeckId:"TR",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/tr/tr-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-5",unitDeckId:"TR",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/tr/tr-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-6",unitDeckId:"TR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/tr/tr-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"tr-7",unitDeckId:"TR",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/tr/tr-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"tr-8",unitDeckId:"TR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/tr/tr-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"tr-9",unitDeckId:"TR",nameJa:"移動６",nameCn:"移动6",actionType:"movement",frontImageId:"cards/tr/tr-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:6,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-10",unitDeckId:"TR",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/tr/tr-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"tr-11",unitDeckId:"TR",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/tr/tr-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"tr-12",unitDeckId:"TR",nameJa:"アクス",nameCn:"斧头",actionType:"melee",frontImageId:"cards/tr/tr-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"tr-13",unitDeckId:"TR",nameJa:"アクス",nameCn:"斧头",actionType:"melee",frontImageId:"cards/tr/tr-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"tr-14",unitDeckId:"TR",nameJa:"パイルバンカー",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/tr/tr-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"tr-15",unitDeckId:"TR",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/tr/tr-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"tr-16",unitDeckId:"TR",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/tr/tr-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"tr-17",unitDeckId:"TR",nameJa:"パイルバンカー",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/tr/tr-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"tr-18",unitDeckId:"TR",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/tr/tr-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"tr-19",unitDeckId:"TR",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/tr/tr-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0}],P0=[{id:"zb-1",unitDeckId:"ZB",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ag/ag-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-2",unitDeckId:"ZB",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ag/ag-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-3",unitDeckId:"ZB",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ag/ag-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-4",unitDeckId:"ZB",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ag/ag-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-5",unitDeckId:"ZB",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ag/ag-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-6",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-7",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-8",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-9",unitDeckId:"ZB",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ag/ag-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-10",unitDeckId:"ZB",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ag/ag-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-11",unitDeckId:"ZB",nameJa:"ムーブセンサー",nameCn:"移动感应器",actionType:"auxiliary",frontImageId:"cards/ho/ho-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-12",unitDeckId:"ZB",nameJa:"ムーブセンサー",nameCn:"移动感应器",actionType:"auxiliary",frontImageId:"cards/ho/ho-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-13",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-14",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-15",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-16",unitDeckId:"ZB",nameJa:"ラージレーザー",nameCn:"大口径激光",actionType:"ranged",frontImageId:"cards/bg/bg-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"zb-17",unitDeckId:"ZB",nameJa:"ブレード",nameCn:"剑",actionType:"melee",frontImageId:"cards/zb/zb-17-front.png",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"zb-18",unitDeckId:"ZB",nameJa:"バルカン",nameCn:"火神炮",actionType:"ranged",frontImageId:"cards/zb/zb-18-front.png",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:2,damage:2},{id:"zb-19",unitDeckId:"ZB",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ag/ag-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-20",unitDeckId:"ZB",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ag/ag-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-21",unitDeckId:"ZB",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4},{id:"zb-22",unitDeckId:"ZB",nameJa:"ラージレーザー",nameCn:"大口径激光",actionType:"ranged",frontImageId:"cards/bg/bg-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"zb-23",unitDeckId:"ZB",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4}],V0=[{id:"ag_plus-1",unitDeckId:"AG+",nameJa:"コルセスカ",nameCn:"长柄三叉矛",actionType:"melee",frontImageId:"cards/ag_plus/ag_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ag_plus-2",unitDeckId:"AG+",nameJa:"コルセスカ",nameCn:"长柄三叉矛",actionType:"melee",frontImageId:"cards/ag_plus/ag_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ag_plus-3",unitDeckId:"AG+",nameJa:"ネット",nameCn:"网",actionType:"ranged",frontImageId:"cards/ag_plus/ag_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:5,damage:void 0},{id:"ag_plus-4",unitDeckId:"AG+",nameJa:"ボーラ",nameCn:"投石索",actionType:"ranged",frontImageId:"cards/ag_plus/ag_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:4,damage:void 0},{id:"ag_plus-5",unitDeckId:"AG+",nameJa:"バルカン",nameCn:"火神炮",actionType:"ranged",frontImageId:"cards/ag_plus/ag_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:2,damage:2}],L0=[{id:"ar_plus-1",unitDeckId:"AR+",nameJa:"ウォーハンマー",nameCn:"战锤",actionType:"melee",frontImageId:"cards/ar_plus/ar_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"ar_plus-2",unitDeckId:"AR+",nameJa:"強化機雷",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/ar_plus/ar_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,hasBombIcon:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"ar_plus-3",unitDeckId:"AR+",nameJa:"ロングアンカー",nameCn:"长锚",actionType:"ranged",frontImageId:"cards/ar_plus/ar_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:4,damage:1},{id:"ar_plus-4",unitDeckId:"AR+",nameJa:"強化機雷",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/ar_plus/ar_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,hasBombIcon:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5}],R0=[{id:"bg_plus-1",unitDeckId:"BG+",nameJa:"自爆装置",nameCn:"自爆装置",actionType:"mine",frontImageId:"cards/bg_plus/bg_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,hasBombIcon:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg_plus-2",unitDeckId:"BG+",nameJa:"大口径ロケット砲",nameCn:"大口径火箭炮",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:5},{id:"bg_plus-3",unitDeckId:"BG+",nameJa:"大口径ロケット砲",nameCn:"大口径火箭炮",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:5},{id:"bg_plus-4",unitDeckId:"BG+",nameJa:"高品質ライフル",nameCn:"高品质步枪",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3},{id:"bg_plus-5",unitDeckId:"BG+",nameJa:"スモークミサイル",nameCn:"烟雾导弹",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:5,damage:void 0}],O0=[{id:"ho_plus-1",unitDeckId:"HO+",nameJa:"スタンウィップ",nameCn:"电击鞭",actionType:"melee",frontImageId:"cards/ho_plus/ho_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:1},{id:"ho_plus-2",unitDeckId:"HO+",nameJa:"チェーンブレード",nameCn:"链锯剑",actionType:"melee",frontImageId:"cards/ho_plus/ho_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ho_plus-3",unitDeckId:"HO+",nameJa:"高品質ロケット砲",nameCn:"高品质火箭炮",actionType:"ranged",frontImageId:"cards/ho_plus/ho_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4},{id:"ho_plus-4",unitDeckId:"HO+",nameJa:"火炎放射器",nameCn:"火焰喷射器",actionType:"ranged",frontImageId:"cards/ho_plus/ho_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2}],K0=[{id:"hy_plus-1",unitDeckId:"HY+",nameJa:"ショットガン",nameCn:"散弹枪",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:3,damage:4},{id:"hy_plus-2",unitDeckId:"HY+",nameJa:"ショットガン",nameCn:"散弹枪",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:3,damage:4},{id:"hy_plus-3",unitDeckId:"HY+",nameJa:"ガトリングカノン",nameCn:"加特林炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:4},{id:"hy_plus-4",unitDeckId:"HY+",nameJa:"ガトリングカノン",nameCn:"加特林炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:4},{id:"hy_plus-5",unitDeckId:"HY+",nameJa:"ガトリングカノン",nameCn:"加特林炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:4},{id:"hy_plus-6",unitDeckId:"HY+",nameJa:"ミサイルシールド",nameCn:"导弹盾",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3},{id:"hy_plus-7",unitDeckId:"HY+",nameJa:"高品質ロケット砲",nameCn:"高品质火箭炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4},{id:"hy_plus-8",unitDeckId:"HY+",nameJa:"ミサイルシールド",nameCn:"导弹盾",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3}],J0=[{id:"lg_plus-1",unitDeckId:"LG+",nameJa:"ヒートクロー",nameCn:"热力爪",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-2",unitDeckId:"LG+",nameJa:"グレネードランチャー",nameCn:"榴弹发射器",actionType:"ranged",frontImageId:"cards/lg_plus/lg_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:5,damage:3},{id:"lg_plus-3",unitDeckId:"LG+",nameJa:"グレネードランチャー",nameCn:"榴弹发射器",actionType:"ranged",frontImageId:"cards/lg_plus/lg_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:5,damage:3},{id:"lg_plus-4",unitDeckId:"LG+",nameJa:"キャタピラ",nameCn:"履带",actionType:"auxiliary",frontImageId:"cards/lg_plus/lg_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-5",unitDeckId:"LG+",nameJa:"リボルバンカー",nameCn:"左轮打桩机",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6},{id:"lg_plus-6",unitDeckId:"LG+",nameJa:"キャタピラ",nameCn:"履带",actionType:"auxiliary",frontImageId:"cards/lg_plus/lg_plus-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-7",unitDeckId:"LG+",nameJa:"ヒートクロー",nameCn:"热力爪",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-8",unitDeckId:"LG+",nameJa:"リボルバンカー",nameCn:"左轮打桩机",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6}],B0=[{id:"lo_plus-1",unitDeckId:"LO+",nameJa:"防水膜",nameCn:"防水膜",actionType:"auxiliary",frontImageId:"cards/lo_plus/lo_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo_plus-2",unitDeckId:"LO+",nameJa:"追加装甲",nameCn:"附加装甲",actionType:"armor",frontImageId:"cards/lo_plus/lo_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo_plus-3",unitDeckId:"LO+",nameJa:"パルスレーザー",nameCn:"脉冲激光",actionType:"ranged",frontImageId:"cards/lo_plus/lo_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:2,isEnergyWeapon:!0},{id:"lo_plus-4",unitDeckId:"LO+",nameJa:"サウンドストーム",nameCn:"声波风暴",actionType:"melee",frontImageId:"cards/lo_plus/lo_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0}],F0=[{id:"tr_plus-1",unitDeckId:"TR+",nameJa:"サウンドウェーブ",nameCn:"声波",actionType:"melee",frontImageId:"cards/tr_plus/tr_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr_plus-2",unitDeckId:"TR+",nameJa:"バルディッシュ",nameCn:"长柄斧",actionType:"melee",frontImageId:"cards/tr_plus/tr_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"tr_plus-3",unitDeckId:"TR+",nameJa:"バルディッシュ",nameCn:"长柄斧",actionType:"melee",frontImageId:"cards/tr_plus/tr_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"tr_plus-4",unitDeckId:"TR+",nameJa:"高圧縮レーザー",nameCn:"高压缩激光",actionType:"ranged",frontImageId:"cards/tr_plus/tr_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:4,isEnergyWeapon:!0},{id:"tr_plus-5",unitDeckId:"TR+",nameJa:"高圧縮レーザー",nameCn:"高压缩激光",actionType:"ranged",frontImageId:"cards/tr_plus/tr_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:4,isEnergyWeapon:!0}],G0=[{id:"zb_plus-1",unitDeckId:"ZB+",nameJa:"広射程ミサイル",nameCn:"广射程导弹",actionType:"ranged",frontImageId:"cards/zb_plus/zb_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:3},{id:"zb_plus-2",unitDeckId:"ZB+",nameJa:"ホバー",nameCn:"悬浮器",actionType:"auxiliary",frontImageId:"cards/zb_plus/zb_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb_plus-3",unitDeckId:"ZB+",nameJa:"ホバー",nameCn:"悬浮器",actionType:"auxiliary",frontImageId:"cards/zb_plus/zb_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb_plus-4",unitDeckId:"ZB+",nameJa:"チェーンブレード",nameCn:"链锯剑",actionType:"melee",frontImageId:"cards/zb_plus/zb_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"zb_plus-5",unitDeckId:"ZB+",nameJa:"ジャイアントシザース",nameCn:"巨型剪刀",actionType:"melee",frontImageId:"cards/zb_plus/zb_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:10},{id:"zb_plus-6",unitDeckId:"ZB+",nameJa:"広射程ミサイル",nameCn:"广射程导弹",actionType:"ranged",frontImageId:"cards/zb_plus/zb_plus-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:3}],U0=[{id:"ダミー-1",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-2",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-3",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-4",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-5",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-6",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-7",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-8",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-9",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-10",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-11",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-12",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-13",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-14",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-15",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-16",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-17",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-18",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-19",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-20",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0}],H0=[{id:"強化機雷-1",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-2",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-3",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-4",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-5",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-6",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-7",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-8",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-9",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-10",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-11",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-12",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-13",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-14",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-15",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-16",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5}],W0=[{id:"陸上機雷-1",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-2",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-3",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-4",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-5",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-6",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-7",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-8",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-9",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-10",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-11",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-12",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-13",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-14",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-15",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-16",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-17",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-18",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-19",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-20",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3}],xa={AG:N0,AR:M0,BG:T0,HO:E0,HY:D0,LG:z0,LO:$0,TR:A0,ZB:P0,"AG+":V0,"AR+":L0,"BG+":R0,"HO+":O0,"HY+":K0,"LG+":J0,"LO+":B0,"TR+":F0,"ZB+":G0,ダミー:U0,強化機雷:H0,陸上機雷:W0};let Z0=0;function Y0(e,n){return`${e}-${n}-${Z0++}`}function X0(e,n){const a=(xa[e]??[]).map(r=>({instanceId:Y0(r.id,n),defId:r.id,destroyed:!1}));return Q0(a)}function Q0(e){const n=[...e];for(let t=n.length-1;t>0;t--){const a=Math.floor(Math.random()*(t+1));[n[t],n[a]]=[n[a],n[t]]}return n}function jf(e,n){const t=[...e];let a=n>>>0;for(let r=t.length-1;r>0;r--){a=a+1831565813>>>0;let i=Math.imul(a^a>>>15,a|1);i^=i+Math.imul(i^i>>>7,i|61);const s=((i^i>>>14)>>>0)/4294967296,l=Math.floor(s*(r+1));[t[r],t[l]]=[t[l],t[r]]}return{shuffled:t,nextSeed:a}}function q0(e,n){const t=Math.min(n,e.length);return{drawn:e.slice(0,t),remaining:e.slice(t)}}function q(e){for(const n of Object.values(xa)){const t=n.find(a=>a.id===e);if(t)return t}}const c=(e=0)=>({terrain:"plain",elevation:0,variant:e}),I=(e=0)=>({terrain:"sand",elevation:0,variant:e}),F=(e=0)=>({terrain:"rubble",elevation:0,variant:e}),B=(e=0)=>({terrain:"forest",elevation:0,variant:e}),V=(e=0)=>({terrain:"water",elevation:0,variant:e}),C=e=>({terrain:"highland",elevation:e,variant:e}),eh={id:"map_1a",nameJa:"基本マップ1a",nameCn:"基础地图1a",width:7,height:11,maxPlayers:2,maxTeams:2,cells:[[I(),I(),I(),I(),I(),I(),I()],[c(),c(),c(),c(),c(),c(),c()],[c(),c(),c(),c(),c(),c(),c()],[C(2),C(1),c(),c(),c(),C(2),C(2)],[C(1),C(1),c(),c(),c(),C(2),c()],[c(),c(),c(),c(),c(),C(2),c()],[c(),c(),c(),c(),c(),c(),c()],[c(),c(),c(),C(1),C(1),C(2),C(2)],[c(),c(),c(),c(),c(),c(),c()],[c(),c(),c(),c(),c(),c(),c()],[F(),F(),F(),F(),F(),F(),F()]],startZones:{0:[{row:0,col:2},{row:0,col:3},{row:0,col:4}],1:[{row:10,col:2},{row:10,col:3},{row:10,col:4}]}},nh={id:"map_2a",nameJa:"基本マップ2a",nameCn:"基础地图2a",width:7,height:11,maxPlayers:2,maxTeams:2,cells:[[I(),I(),I(),I(),I(),I(),I()],[c(),c(),c(),c(),c(),c(),c()],[C(2),C(2),c(),c(),c(),c(),c()],[C(2),c(),c(),c(),c(),c(),c()],[C(2),c(),c(),c(),c(),c(),c()],[C(2),c(),c(),c(),c(),c(),c()],[C(2),C(2),c(),c(),c(),c(),c()],[c(),c(),c(),c(),B(),B(),c()],[c(),c(),c(),c(),B(),B(),c()],[c(),c(),c(),c(),c(),c(),c()],[I(),I(),I(),I(),I(),I(),I()]],startZones:{0:[{row:0,col:2},{row:0,col:3},{row:0,col:4}],1:[{row:10,col:2},{row:10,col:3},{row:10,col:4}]}},th={id:"map_2b",nameJa:"基本マップ2b",nameCn:"基础地图2b",width:7,height:11,maxPlayers:2,maxTeams:2,cells:[[B(),B(),B(),c(),c(),c(),c()],[V(),V(),I(),c(),c(),c(),c()],[V(),V(),I(),c(),c(),c(),c()],[I(),V(),V(),I(),c(),c(),c()],[c(),I(),V(),V(),I(),c(),c()],[c(),c(),I(),V(),V(),I(),c()],[c(),c(),c(),V(),V(),I(),c()],[c(),c(),c(),I(),V(),V(),c()],[c(),c(),c(),c(),I(),V(),V()],[c(),c(),c(),c(),c(),c(),c()],[c(),c(),I(),I(),I(),c(),c()]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:0,col:2}],1:[{row:10,col:2},{row:10,col:3},{row:10,col:4}]}},ah={id:"map_3a",nameJa:"峡谷要塞",nameCn:"峡谷要塞",width:9,height:13,maxPlayers:4,maxTeams:4,cells:[[I(),I(),I(),I(),I(),I(),I(),I(),I()],[B(0),c(),c(),c(),c(),c(),c(),c(),B(1)],[c(),c(),c(),c(),c(),c(),c(),c(),c()],[C(2),C(3),C(1),c(),c(),c(),C(1),C(2),C(2)],[C(2),C(2),c(),c(),F(1),c(),c(),C(1),C(2)],[C(1),c(),F(0),F(2),c(),F(1),F(3),c(),C(1)],[c(),I(),V(0),V(1),I(),V(2),V(0),I(),c()],[C(1),c(),F(3),F(0),c(),F(2),F(1),c(),C(1)],[C(2),C(1),c(),c(),F(0),c(),c(),C(2),C(2)],[C(2),C(2),C(1),c(),c(),c(),C(1),C(3),C(2)],[c(),c(),c(),c(),c(),c(),c(),c(),c()],[B(2),c(),c(),c(),c(),c(),c(),c(),B(3)],[I(),I(),I(),I(),I(),I(),I(),I(),I()]],startZones:{0:[{row:0,col:1},{row:0,col:3},{row:0,col:4},{row:0,col:5},{row:0,col:7}],1:[{row:12,col:1},{row:12,col:3},{row:12,col:4},{row:12,col:5},{row:12,col:7}],2:[{row:2,col:0},{row:6,col:0}],3:[{row:2,col:8},{row:6,col:8}]}},rh={id:"map_3b",nameJa:"群島戦域",nameCn:"群岛战域",width:9,height:13,maxPlayers:4,maxTeams:4,cells:[[B(0),B(1),I(),I(),V(0),V(1),c(),c(),c()],[B(2),I(),c(),I(),V(2),c(),c(),I(),V(0)],[I(),V(0),I(),c(),c(),I(),V(1),V(0),V(2)],[V(1),V(2),c(),c(),C(1),c(),c(),V(2),V(1)],[V(0),I(),c(),C(1),C(2),C(1),c(),I(),V(0)],[V(2),c(),C(1),C(2),C(3),C(2),C(1),c(),V(1)],[V(1),I(),c(),C(2),B(0),C(2),c(),I(),V(2)],[V(0),c(),C(1),C(2),C(3),C(2),C(1),c(),V(0)],[V(2),I(),c(),C(1),C(2),C(1),c(),I(),V(1)],[V(1),V(0),c(),c(),C(1),c(),c(),V(0),V(2)],[V(0),V(2),V(1),I(),c(),c(),I(),V(1),I()],[c(),c(),V(0),I(),c(),I(),F(0),I(),F(1)],[c(),c(),c(),V(1),I(),I(),F(2),F(3),F(0)]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:1,col:0},{row:0,col:6},{row:0,col:7}],1:[{row:12,col:6},{row:12,col:7},{row:11,col:8},{row:12,col:0},{row:12,col:1}],2:[{row:2,col:3},{row:3,col:2}],3:[{row:10,col:4},{row:10,col:5}]}},oh={id:"map_4a",nameJa:"都市廃墟",nameCn:"都市废墟",width:11,height:15,maxPlayers:4,maxTeams:4,cells:[[F(0),I(),I(),I(),I(),I(),I(),I(),I(),I(),F(1)],[F(2),F(3),c(),c(),c(),c(),c(),B(0),B(1),c(),c()],[c(),F(0),F(1),c(),c(),F(2),c(),B(2),c(),c(),c()],[c(),c(),C(1),C(2),c(),F(3),c(),c(),c(),F(0),c()],[c(),c(),C(2),C(1),c(),c(),c(),c(),I(),V(0),I()],[F(1),c(),c(),c(),c(),F(0),c(),I(),V(1),V(2),c()],[F(2),F(0),c(),c(),c(),c(),I(),V(0),I(),c(),c()],[c(),c(),c(),c(),c(),C(3),c(),c(),c(),c(),c()],[c(),c(),I(),V(2),I(),c(),c(),c(),c(),F(1),F(2)],[c(),V(0),V(1),I(),c(),B(0),B(1),c(),c(),c(),F(0)],[c(),F(3),c(),c(),c(),B(2),B(3),c(),C(1),C(2),c()],[c(),c(),c(),F(1),c(),c(),c(),c(),C(2),C(1),c()],[c(),c(),F(2),F(0),c(),c(),c(),c(),c(),c(),c()],[c(),c(),c(),F(3),c(),c(),c(),F(1),F(2),c(),c()],[F(3),I(),I(),I(),I(),I(),I(),I(),I(),I(),F(2)]],startZones:{0:[{row:0,col:1},{row:0,col:3},{row:0,col:5},{row:0,col:7},{row:0,col:9}],1:[{row:14,col:1},{row:14,col:3},{row:14,col:5},{row:14,col:7},{row:14,col:9}],2:[{row:7,col:0},{row:8,col:0}],3:[{row:6,col:10},{row:7,col:10}]}},ih={id:"map_5a",nameJa:"三叉戦場",nameCn:"三叉战场",width:13,height:17,maxPlayers:6,maxTeams:6,cells:[[c(),c(),c(),I(),I(),I(),I(),I(),I(),I(),c(),c(),c()],[c(),c(),I(),c(),c(),c(),c(),c(),c(),c(),I(),c(),c()],[c(),B(0),c(),c(),c(),c(),c(),c(),c(),c(),c(),B(1),c()],[B(2),B(0),c(),c(),c(),F(0),c(),F(1),c(),c(),c(),B(1),B(3)],[B(0),c(),c(),c(),I(),V(0),I(),V(1),I(),c(),c(),c(),B(2)],[c(),c(),c(),I(),V(1),V(0),c(),V(2),V(0),I(),c(),c(),c()],[c(),c(),C(1),C(2),I(),c(),c(),c(),I(),C(2),C(1),c(),c()],[c(),C(1),C(2),C(3),C(2),c(),c(),c(),C(2),C(3),C(2),C(1),c()],[c(),c(),C(2),C(3),F(0),C(2),C(3),C(2),F(1),C(3),C(2),c(),c()],[c(),C(1),C(2),C(3),C(2),c(),c(),c(),C(2),C(3),C(2),C(1),c()],[c(),c(),C(1),C(2),I(),c(),c(),c(),I(),C(2),C(1),c(),c()],[c(),c(),c(),I(),V(2),V(1),c(),V(0),V(2),I(),c(),c(),c()],[B(1),c(),c(),c(),I(),V(0),I(),V(1),I(),c(),c(),c(),B(0)],[B(3),B(2),c(),c(),c(),F(2),c(),F(3),c(),c(),c(),B(0),B(1)],[c(),B(0),c(),c(),c(),c(),c(),c(),c(),c(),c(),B(2),c()],[I(),I(),I(),I(),c(),c(),c(),c(),c(),I(),I(),I(),I()],[I(),I(),I(),I(),I(),c(),c(),c(),I(),I(),I(),I(),I()]],startZones:{0:[{row:0,col:4},{row:0,col:6},{row:0,col:8}],1:[{row:16,col:0},{row:16,col:1},{row:16,col:2}],2:[{row:16,col:10},{row:16,col:11},{row:16,col:12}],3:[{row:6,col:0},{row:6,col:1},{row:10,col:0}],4:[{row:6,col:11},{row:6,col:12},{row:10,col:12}],5:[{row:2,col:0},{row:2,col:6},{row:2,col:12}]}},sh={id:"map_6a",nameJa:"環状要塞",nameCn:"环形要塞",width:15,height:17,maxPlayers:8,maxTeams:8,cells:[[c(),c(),c(),c(),I(),I(),I(),I(),I(),I(),I(),c(),c(),c(),c()],[c(),c(),c(),I(),c(),c(),c(),c(),c(),c(),c(),I(),c(),c(),c()],[c(),c(),C(1),C(2),C(2),C(1),c(),c(),c(),C(1),C(2),C(2),C(1),c(),c()],[c(),F(0),C(1),c(),c(),c(),F(1),c(),F(2),c(),c(),c(),C(1),F(3),c()],[I(),c(),c(),c(),B(0),B(1),c(),c(),c(),B(2),B(3),c(),c(),c(),I()],[I(),c(),F(0),c(),B(2),c(),c(),c(),c(),c(),B(0),c(),F(1),c(),I()],[c(),F(2),C(1),c(),c(),c(),F(3),I(),F(0),c(),c(),c(),C(1),F(1),c()],[c(),c(),c(),c(),c(),I(),V(0),V(1),V(2),I(),c(),c(),c(),c(),c()],[c(),c(),c(),c(),I(),V(2),V(0),C(3),V(1),V(0),I(),c(),c(),c(),c()],[c(),c(),c(),c(),c(),I(),V(1),V(2),V(0),I(),c(),c(),c(),c(),c()],[c(),F(3),C(1),c(),c(),c(),F(1),I(),F(2),c(),c(),c(),C(1),F(0),c()],[I(),c(),F(2),c(),B(1),c(),c(),c(),c(),c(),B(3),c(),F(3),c(),I()],[I(),c(),c(),c(),B(3),B(0),c(),c(),c(),B(1),B(2),c(),c(),c(),I()],[c(),F(1),C(1),c(),c(),c(),F(3),c(),F(0),c(),c(),c(),C(1),F(2),c()],[c(),c(),C(1),C(2),C(2),C(1),c(),c(),c(),C(1),C(2),C(2),C(1),c(),c()],[c(),c(),c(),I(),c(),c(),c(),c(),c(),c(),c(),I(),c(),c(),c()],[c(),c(),c(),c(),I(),I(),I(),I(),I(),I(),I(),c(),c(),c(),c()]],startZones:{0:[{row:0,col:5},{row:0,col:6},{row:0,col:7},{row:0,col:8}],1:[{row:16,col:5},{row:16,col:6},{row:16,col:7},{row:16,col:8}],2:[{row:4,col:0},{row:5,col:0},{row:11,col:0},{row:12,col:0}],3:[{row:4,col:14},{row:5,col:14},{row:11,col:14},{row:12,col:14}],4:[{row:0,col:0},{row:0,col:1},{row:0,col:2},{row:0,col:3}],5:[{row:0,col:11},{row:0,col:12},{row:0,col:13},{row:0,col:14}],6:[{row:16,col:0},{row:16,col:1},{row:16,col:2},{row:16,col:3}],7:[{row:16,col:11},{row:16,col:12},{row:16,col:13},{row:16,col:14}]}},lh={id:"map_7a",nameJa:"大陸戦争",nameCn:"大陆战争",width:17,height:19,maxPlayers:8,maxTeams:8,cells:[[I(),I(),I(),I(),c(),c(),c(),c(),c(),c(),c(),c(),c(),I(),I(),I(),I()],[I(),c(),c(),c(),c(),c(),B(0),c(),c(),c(),B(1),c(),c(),c(),c(),c(),I()],[c(),c(),B(0),B(1),c(),B(2),B(0),c(),c(),c(),B(1),B(3),c(),B(2),B(0),c(),c()],[c(),c(),B(2),c(),c(),c(),c(),F(0),c(),F(1),c(),c(),c(),c(),B(1),c(),c()],[c(),c(),c(),c(),C(1),C(2),c(),c(),c(),c(),c(),C(2),C(1),c(),c(),c(),c()],[c(),F(0),c(),C(1),C(2),C(3),C(1),c(),c(),c(),C(1),C(3),C(2),C(1),c(),F(1),c()],[I(),c(),c(),C(1),C(2),c(),c(),I(),V(0),I(),c(),c(),C(2),C(1),c(),c(),I()],[I(),c(),c(),c(),c(),c(),I(),V(1),V(0),V(2),I(),c(),c(),c(),c(),c(),I()],[c(),c(),F(2),c(),c(),I(),V(0),V(2),I(),V(1),V(0),I(),c(),c(),F(3),c(),c()],[c(),c(),c(),c(),I(),V(1),I(),c(),C(3),c(),I(),V(2),I(),c(),c(),c(),c()],[c(),c(),F(1),c(),c(),I(),V(2),V(0),I(),V(0),V(1),I(),c(),c(),F(0),c(),c()],[I(),c(),c(),c(),c(),c(),I(),V(0),V(1),V(2),I(),c(),c(),c(),c(),c(),I()],[I(),c(),c(),C(1),C(2),c(),c(),I(),V(2),I(),c(),c(),C(2),C(1),c(),c(),I()],[c(),F(2),c(),C(1),C(2),C(3),C(1),c(),c(),c(),C(1),C(3),C(2),C(1),c(),F(3),c()],[c(),c(),c(),c(),C(1),C(2),c(),c(),c(),c(),c(),C(2),C(1),c(),c(),c(),c()],[c(),c(),B(3),c(),c(),c(),c(),F(3),c(),F(2),c(),c(),c(),c(),B(0),c(),c()],[c(),c(),B(1),B(2),c(),B(0),B(3),c(),c(),c(),B(2),B(1),c(),B(3),B(2),c(),c()],[I(),c(),c(),c(),c(),c(),B(2),c(),c(),c(),B(0),c(),c(),c(),c(),c(),I()],[I(),I(),I(),I(),c(),c(),c(),c(),c(),c(),c(),c(),c(),I(),I(),I(),I()]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:0,col:2},{row:0,col:3},{row:1,col:0}],1:[{row:0,col:13},{row:0,col:14},{row:0,col:15},{row:0,col:16},{row:1,col:16}],2:[{row:18,col:0},{row:18,col:1},{row:18,col:2},{row:18,col:3},{row:17,col:0}],3:[{row:18,col:13},{row:18,col:14},{row:18,col:15},{row:18,col:16},{row:17,col:16}],4:[{row:6,col:0},{row:7,col:0},{row:7,col:1},{row:11,col:0},{row:12,col:0}],5:[{row:6,col:16},{row:7,col:16},{row:7,col:15},{row:11,col:16},{row:12,col:16}],6:[{row:0,col:6},{row:0,col:7},{row:0,col:8},{row:0,col:9},{row:0,col:10}],7:[{row:18,col:6},{row:18,col:7},{row:18,col:8},{row:18,col:9},{row:18,col:10}]}},ch={id:"map_8a",nameJa:"火山列島",nameCn:"火山列岛",width:15,height:19,maxPlayers:8,maxTeams:8,cells:[[I(),I(),I(),B(0),B(1),V(0),V(1),c(),V(2),V(0),B(2),B(3),I(),I(),I()],[I(),c(),c(),B(2),c(),I(),V(0),c(),V(1),I(),c(),B(0),c(),c(),I()],[B(0),c(),c(),c(),I(),V(1),V(2),c(),V(0),V(2),I(),c(),c(),c(),B(1)],[c(),c(),F(0),I(),V(0),V(1),I(),c(),I(),V(2),V(0),I(),F(1),c(),c()],[c(),c(),c(),c(),I(),I(),c(),c(),c(),I(),I(),c(),c(),c(),c()],[c(),B(0),c(),c(),c(),c(),C(1),c(),C(1),c(),c(),c(),c(),B(1),c()],[c(),B(2),c(),c(),C(1),C(2),C(2),C(1),C(2),C(2),C(1),c(),c(),B(3),c()],[V(0),I(),c(),C(1),C(2),C(3),F(0),C(2),F(1),C(3),C(2),C(1),c(),I(),V(1)],[V(1),I(),c(),C(2),C(3),F(2),C(3),C(3),C(3),F(3),C(3),C(2),c(),I(),V(0)],[V(2),c(),c(),C(1),C(2),C(3),C(3),C(3),C(3),C(3),C(2),C(1),c(),c(),V(2)],[V(0),I(),c(),C(2),C(3),F(0),C(3),C(3),C(3),F(1),C(3),C(2),c(),I(),V(1)],[V(1),I(),c(),C(1),C(2),C(3),F(2),C(2),F(3),C(3),C(2),C(1),c(),I(),V(0)],[c(),B(1),c(),c(),C(1),C(2),C(2),C(1),C(2),C(2),C(1),c(),c(),B(0),c()],[c(),B(3),c(),c(),c(),c(),C(1),c(),C(1),c(),c(),c(),c(),B(2),c()],[c(),c(),c(),c(),I(),I(),c(),c(),c(),I(),I(),c(),c(),c(),c()],[c(),c(),F(2),I(),V(2),V(0),I(),c(),I(),V(1),V(2),I(),F(3),c(),c()],[B(2),c(),c(),c(),I(),V(0),V(1),c(),V(2),V(1),I(),c(),c(),c(),B(3)],[I(),c(),c(),B(1),c(),I(),V(2),c(),V(0),I(),c(),B(3),c(),c(),I()],[I(),I(),I(),B(3),B(2),V(1),V(0),c(),V(1),V(2),B(0),B(1),I(),I(),I()]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:0,col:2},{row:1,col:0}],1:[{row:0,col:12},{row:0,col:13},{row:0,col:14},{row:1,col:14}],2:[{row:18,col:0},{row:18,col:1},{row:18,col:2},{row:17,col:0}],3:[{row:18,col:12},{row:18,col:13},{row:18,col:14},{row:17,col:14}],4:[{row:7,col:1},{row:8,col:1},{row:9,col:1},{row:10,col:1}],5:[{row:7,col:13},{row:8,col:13},{row:9,col:13},{row:10,col:13}],6:[{row:0,col:7},{row:1,col:7},{row:2,col:7},{row:3,col:7}],7:[{row:18,col:7},{row:17,col:7},{row:16,col:7},{row:15,col:7}]}},Ze=[eh,nh,th,ah,rh,oh,ih,sh,lh,ch];function dh(){try{const e="em_custom_maps_index",n="em_custom_map_",t=localStorage.getItem(e);if(!t)return Ze;const a=JSON.parse(t),r=[];for(const{id:i}of a){const s=localStorage.getItem(n+i);if(s)try{r.push(JSON.parse(s))}catch{}}return[...Ze,...r]}catch{return Ze}}function rc(e){switch(e.terrain){case"plain":return"/assets/tiles/平地0.png";case"sand":return"/assets/tiles/砂0.png";case"rubble":return`/assets/tiles/瓦礫${e.variant%4}.png`;case"forest":return`/assets/tiles/森${e.variant%4}.png`;case"water":return`/assets/tiles/水${e.variant%3}.png`;case"highland":return`/assets/tiles/高地${e.elevation}.png`;default:return"/assets/tiles/平地0.png"}}const Q=[{id:"TR",deckCode:"TR",nameJa:"トルトハーン",nameCn:"托尔特哈恩",type:"M軽/単座",movement:6,evasion:8,assault:5,assaultDef:2,initiative:3,tokenId:"TR-token.jpg"},{id:"HO",deckCode:"HO",nameJa:"フォルニッセ",nameCn:"弗尼塞",type:"SS軽/単座",movement:7,evasion:10,assault:5,assaultDef:2,initiative:1,tokenId:"HO-token.jpg"},{id:"HY",deckCode:"HY",nameJa:"ヒストリクス",nameCn:"希斯特里克斯",type:"L重/単座",movement:3,evasion:3,assault:6,assaultDef:3,initiative:14,tokenId:"HY-token.jpg"},{id:"ZB",deckCode:"ZB",nameJa:"ズィマー・ブーリア",nameCn:"季马尔·布里亚",type:"S重/単座",movement:5,evasion:5,assault:6,assaultDef:3,initiative:9,tokenId:"ZB-token.jpg"},{id:"AR",deckCode:"AR",nameJa:"アラクネ",nameCn:"阿拉克涅",type:"S中/単座",movement:6,evasion:7,assault:5,assaultDef:2,initiative:5,tokenId:"AR-token.jpg"},{id:"BG",deckCode:"BG",nameJa:"ヴィスナー・グローム",nameCn:"维斯纳·格罗姆",type:"LL中/単座",movement:3,evasion:5,assault:6,assaultDef:3,initiative:13,tokenId:"BG-token.jpg"},{id:"LO",deckCode:"LO",nameJa:"リュミエール・デ・オラージュ",nameCn:"吕米耶尔",type:"L軽/単座",movement:5,evasion:7,assault:5,assaultDef:2,initiative:6,tokenId:"LO-token.jpg"},{id:"LG",deckCode:"LG",nameJa:"ルー・ガルー",nameCn:"卢·加鲁",type:"M重/単座",movement:4,evasion:4,assault:6,assaultDef:3,initiative:12,tokenId:"LG-token.jpg"},{id:"AG",deckCode:"AG",nameJa:"アルギュロス",nameCn:"阿尔古罗斯",type:"M中/単座",movement:5,evasion:6,assault:6,assaultDef:3,initiative:7,tokenId:"AG-token.jpg"}];function uh(e,n){const t=[];let a=e.col,r=e.row;const i=n.col,s=n.row,l=Math.abs(i-a),d=Math.abs(s-r),u=a<i?1:-1,p=r<s?1:-1;let f=l-d;const x=(l+d)*2+2;let h=0;for(;h++<x&&(t.push({row:r,col:a}),!(a===i&&r===s));){const m=2*f;m>-d&&(f-=d,a+=u),m<l&&(f+=l,r+=p)}return t}function xr(e,n,t){var l;if(n.row===t.row&&n.col===t.col)return!0;const a=e.cells[n.row][n.col],r=e.cells[t.row][t.col],i=Math.max(a.elevation,r.elevation),s=uh(n,t);for(const d of s){if(d.row===n.row&&d.col===n.col||d.row===t.row&&d.col===t.col)continue;const u=(l=e.cells[d.row])==null?void 0:l[d.col];if(u&&u.terrain==="highland"&&u.elevation>i)return!1}return!0}function Ne(e,n){return Math.max(Math.abs(e.row-n.row),Math.abs(e.col-n.col))}const ph={plain:{type:"plain",nameJa:"平地",nameCn:"平原",moveCost:1,blocksLOS:!1,enterable:!0,providesCover:!1},sand:{type:"sand",nameJa:"砂地",nameCn:"沙地",moveCost:1,blocksLOS:!1,enterable:!0,providesCover:!1},rubble:{type:"rubble",nameJa:"瓦礫",nameCn:"瓦砾",moveCost:2,blocksLOS:!1,enterable:!0,providesCover:!1},forest:{type:"forest",nameJa:"森",nameCn:"森林",moveCost:2,blocksLOS:!0,enterable:!0,providesCover:!0},water:{type:"water",nameJa:"水辺",nameCn:"水域",moveCost:3,blocksLOS:!1,enterable:!0,providesCover:!1},highland:{type:"highland",nameJa:"高地",nameCn:"高地",moveCost:1,blocksLOS:!1,enterable:!0,providesCover:!1}};function wf(e){const n=ph[e];return n.enterable?n.moveCost:1/0}const Mt=[[-1,0],[1,0],[0,-1],[0,1]];function va(e){return e==="N"?"S":e==="S"?"N":e==="E"?"W":"E"}function Tt(e,n){return e===-1?"N":e===1?"S":n===-1?"W":"E"}function Et(e,n,t){return n>=0&&n<e.height&&t>=0&&t<e.width}function re(e,n){return e.row===n.row&&e.col===n.col}function Sf(e,n,t,a,r){const i=Array.from({length:e.height},()=>new Array(e.width).fill(-1)),s=[{pos:n,remaining:t}];i[n.row][n.col]=t;const l=[{pos:n,remaining:t}];for(;s.length>0;){const{pos:d,remaining:u}=s.shift();for(const[p,f]of Mt){const x=d.row+p,h=d.col+f;if(!Et(e,x,h))continue;const m={row:x,col:h},v=e.cells[x][h];let _=wf(v.terrain);if(_===1/0)continue;r!=null&&r.vernier&&(v.terrain==="rubble"||v.terrain==="forest"||v.terrain==="water")&&(_=1);const b=e.cells[d.row][d.col];let g=Math.max(0,v.elevation-b.elevation);r!=null&&r.vernier&&(g=Math.max(0,g-1));const y=_+g;if(u<y)continue;const j=u-y;a.some(E=>re(E,m))||i[x][h]>=j||(i[x][h]=j,l.push({pos:m,remaining:j}),s.push({pos:m,remaining:j}))}}return l}function Cf(e,n,t,a,r){return Sf(e,n,t,a,r).map(i=>i.pos)}function vr(e,n,t,a,r,i){const s=e.cells[a][r];let l=wf(s.terrain);if(l===1/0)return 1/0;i!=null&&i.vernier&&(s.terrain==="rubble"||s.terrain==="forest"||s.terrain==="water")&&(l=1);const d=e.cells[n][t];let u=Math.max(0,s.elevation-d.elevation);return i!=null&&i.vernier&&(u=Math.max(0,u-1)),l+u}function vi(e,n,t,a,r,i="S"){if(t<=0)return[];const s={N:0,S:1,E:2,W:3},l=Array.from({length:e.height},()=>Array.from({length:e.width},()=>new Array(4).fill(-1))),d={pos:n,facing:i,remaining:t};l[n.row][n.col][s[i]]=t;const u=[d],p=[d];for(;u.length>0;){const{pos:h,facing:m,remaining:v}=u.shift(),_=va(m);for(const[b,g]of Mt){const y=Tt(b,g);if(y===_)continue;const j=h.row+b,M=h.col+g;if(!Et(e,j,M))continue;const E={row:j,col:M},w=vr(e,h.row,h.col,j,M,r);if(w===1/0||v<w||a.some($=>re($,E)))continue;const S=v-w,A=s[y];if(l[j][M][A]>=S)continue;l[j][M][A]=S;const N={pos:E,facing:y,remaining:S};p.push(N),u.push(N)}}function f(h){const{pos:m,facing:v,remaining:_}=h,b=va(v);for(const[g,y]of Mt){if(Tt(g,y)===b)continue;const M=m.row+g,E=m.col+y;if(!Et(e,M,E)||a.some(S=>re(S,{row:M,col:E})))continue;const w=vr(e,m.row,m.col,M,E,r);if(w!==1/0&&_>=w)return!0}return!1}const x=new Map;for(const h of p){if(re(h.pos,n)||f(h))continue;const m=`${h.pos.row},${h.pos.col}`,v=x.get(m);(!v||h.remaining>v.remaining)&&x.set(m,{pos:h.pos,remaining:h.remaining})}return Array.from(x.values())}function oc(e,n,t,a,r,i,s){if(re(n,a))return{path:[],finalFacing:t};const l={N:0,S:1,E:2,W:3},d=Array.from({length:e.height},()=>Array.from({length:e.width},()=>new Array(4).fill(-1))),u={pos:n,facing:t,remaining:r,parent:null};d[n.row][n.col][l[t]]=r;const p=[u];for(;p.length>0;){const f=p.shift();if(re(f.pos,a)){const h=[];let m=f;for(;m&&m.parent!==null;)h.push(m.pos),m=m.parent;return{path:h.reverse(),finalFacing:f.facing}}const x=va(f.facing);for(const[h,m]of Mt){const v=Tt(h,m);if(v===x)continue;const _=f.pos.row+h,b=f.pos.col+m;if(!Et(e,_,b))continue;const g={row:_,col:b},y=vr(e,f.pos.row,f.pos.col,_,b,s);if(y===1/0||f.remaining<y||i.some(w=>re(w,g))&&!re(g,a))continue;const M=f.remaining-y,E=l[v];d[_][b][E]>=M||(d[_][b][E]=M,p.push({pos:g,facing:v,remaining:M,parent:f}))}}return null}function Qi(e,n,t,a,r,i,s,l=8){if(re(n,a)||r<=0)return[];const d=[];function u(f,x,h){const m=va(x);for(const[v,_]of Mt){if(Tt(v,_)===m)continue;const g=f.row+v,y=f.col+_;if(!Et(e,g,y)||i.some(M=>re(M,{row:g,col:y})))continue;const j=vr(e,f.row,f.col,g,y,s);if(j!==1/0&&h>=j)return!1}return!0}function p(f,x,h,m){if(d.length>=l)return;if(re(f,a)){u(f,x,h)&&d.push({path:[...m],finalFacing:x});return}const v=va(x);for(const[_,b]of Mt){const g=Tt(_,b);if(g===v)continue;const y=f.row+_,j=f.col+b;if(!Et(e,y,j))continue;const M={row:y,col:j};if(re(M,n)||m.some(S=>re(S,M))||i.some(S=>re(S,M))&&!re(M,a))continue;const w=vr(e,f.row,f.col,y,j,s);w===1/0||h<w||(m.push(M),p(M,g,h-w,m),m.pop())}}return p(n,t,r,[]),d}function Nf(e,n,t){const a=[];for(const[r,i]of Mt){const s=n.row+r,l=n.col+i;if(!Et(e,s,l))continue;const d={row:s,col:l};t.some(u=>re(u,d))||a.push(d)}return a}function fh(e,n,t,a){if(re(n,t))return[];const r=Array.from({length:e.height},()=>new Array(e.width).fill(!1));r[n.row][n.col]=!0;const i=[{pos:n,parent:null}];for(;i.length>0;){const s=i.shift();if(re(s.pos,t)){const p=[];let f=s;for(;f&&f.parent!==null;)p.push(f.pos),f=f.parent;return p.reverse()}const{row:l,col:d}=s.pos,u=[{row:l-1,col:d},{row:l+1,col:d},{row:l,col:d-1},{row:l,col:d+1}];for(const p of u)if(p.row>=0&&p.row<e.height&&p.col>=0&&p.col<e.width){const f=a.some(x=>re(x,p))&&!re(p,t);!r[p.row][p.col]&&!f&&(r[p.row][p.col]=!0,i.push({pos:p,parent:s}))}}return null}function qi(e,n,t,a){const r=n===1?e.plotSeg1:e.plotSeg2;if(!r)return 0;const i=t(r.defId);return!i||i.actionType!=="movement"?0:(i.movementValue??0)+(a!=null&&a.wheel?2:0)}function mh(e,n,t,a){const r=n===1?e.plotSeg1:e.plotSeg2;if(!r)return!1;const i=t(r.defId);return!i||i.actionType!=="movement"?!1:(i.movementValue??a)>0}function Dn(e,n,t){return e==="N"?t.row<=n.row:e==="S"?t.row>=n.row:e==="E"?t.col>=n.col:e==="W"?t.col<=n.col:!0}function br(e,n,t){if(n!==2)return 0;if(e.plotSeg1){const a=t(e.plotSeg1.defId);if(a&&a.actionType==="aim")return 1}return 0}function Qs(e,n,t){const a=n===1?e.plotSeg1:e.plotSeg2;if(!a)return 0;const r=t(a.defId);return r&&r.actionType==="armor"?1:0}function Ln(e,n,t,a){const r=n===1?e.plotSeg1:e.plotSeg2;if(!r)return null;const i=a(r.defId);return i&&(t==="ranged"&&i.actionType==="ranged"||t==="melee"&&(i.actionType==="melee"||i.actionType==="charge"))?i:null}function Fo(e,n,t,a,r){var u,p;let i=e;const s=[],l=(u=a.cells[n.row])==null?void 0:u[n.col],d=(p=a.cells[t.row])==null?void 0:p[t.col];return(l==null?void 0:l.terrain)==="water"&&r.isEnergyWeapon&&(i-=1,s.push("水域能量衰减-1")),(d==null?void 0:d.terrain)==="forest"&&(i-=1,s.push("森林掩护-1")),{dmg:Math.max(0,i),reasons:s}}function Go(e,n,t,a,r,i){const s=Ln(e,t,a,i);if(!s)return{canAttack:!1,reason:"无攻击牌",damage:0,counterDamage:0,dist:0,card:null};const l=Ne(e.position,n.position);if(a==="ranged"){if(s.rangeMin===void 0||s.rangeMax===void 0)return{canAttack:!1,reason:"卡牌无射程数据",damage:0,counterDamage:0,dist:l,card:s};if(l<s.rangeMin)return{canAttack:!1,reason:`距离过近 (${l} < ${s.rangeMin})`,damage:0,counterDamage:0,dist:l,card:s};if(l>s.rangeMax)return{canAttack:!1,reason:`射程外 (${l} > ${s.rangeMax})`,damage:0,counterDamage:0,dist:l,card:s};if(!xr(r,e.position,n.position))return{canAttack:!1,reason:"视线被遮挡",damage:0,counterDamage:0,dist:l,card:s};if(!Dn(e.facing,e.position,n.position))return{canAttack:!1,reason:`目标在机体后方（机头朝${e.facing}），无法射击`,damage:0,counterDamage:0,dist:l,card:s};let d=s.damage??0;const u=[];if(s.rangeOptimal!==void 0&&s.damageAttenuation!==void 0){const v=Math.max(0,l-s.rangeOptimal);if(v>0){const _=v*s.damageAttenuation;d=Math.max(0,d-_),u.push(`超射程-${_}`)}}const p=Fo(d,e.position,n.position,r,s),f=br(e,t,i),x=p.dmg+f,h=[...u,...p.reasons];return f>0&&h.push("瞄准+1"),{canAttack:!0,reason:`有效射击${h.length>0?`（${h.join(", ")}）`:""}`,damage:x,counterDamage:0,dist:l,card:s}}if(a==="melee"&&s.actionType==="melee"){if(l!==1)return{canAttack:!1,reason:`不相邻 (距离 ${l})`,damage:0,counterDamage:0,dist:l,card:s};const d=Fo(s.damage??0,e.position,n.position,r,s),u=br(e,t,i),p=d.dmg+u,f=[...d.reasons];return u>0&&f.push("瞄准+1"),{canAttack:!0,reason:`有效近战${f.length>0?`（${f.join(", ")}）`:""}`,damage:p,counterDamage:0,dist:l,card:s}}return a==="melee"&&s.actionType==="charge"?{canAttack:!1,reason:"突击卡需使用evaluateCharge()",damage:0,counterDamage:0,dist:l,card:s}:{canAttack:!1,reason:"非攻击时机",damage:0,counterDamage:0,dist:l,card:null}}const gh=new Set(["パイルバンカー","スパイク"]);function hh(e){return gh.has(e.nameJa)}function xh(e,n,t,a,r,i){if(Ne(n,t)===1)return Dn(i,n,t)?n:null;const l=Cf(e,n,a,r).filter(d=>Ne(d,t)===1&&Dn(i,d,t));return l.length===0?null:(l.sort((d,u)=>Ne(n,d)-Ne(n,u)),l[0])}function yr(e,n,t,a,r,i,s){const l=Ln(e,t,"melee",s);if(!l||l.actionType!=="charge")return{canAttack:!1,reason:"无突击牌",damage:0,counterDamage:0,dist:0,card:null};const d=Ne(e.position,n.position);if(hh(l)){if(d!==1)return{canAttack:!1,reason:`不相邻 (距离 ${d})，${l.nameCn} 无法攻击`,damage:0,counterDamage:0,dist:d,card:l};if(!Dn(e.facing,e.position,n.position))return{canAttack:!1,reason:`目标不在正面弧内（机头朝${e.facing}），${l.nameCn} 无法攻击`,damage:0,counterDamage:0,dist:d,card:l};const y=r.assault+1,j=Fo(y,e.position,n.position,a,l),M=br(e,t,s),E=j.dmg+M,w=Math.max(0,i.assaultDef-1),S=[...j.reasons];M>0&&S.push("瞄准+1");const A=S.length>0?`（${S.join(", ")}）`:"";return{canAttack:!0,reason:`有效${l.nameCn}攻击${A}`,damage:E,counterDamage:w,dist:d,card:l,chargeDestination:e.position}}const p=r.assault,f=xh(a,e.position,n.position,p,[n.position],e.facing);if(!f)return{canAttack:!1,reason:`突击距离不足或目标不在正面弧内 (距离 ${d}，突击值 ${p})`,damage:0,counterDamage:0,dist:d,card:l};const x=r.assault,h=Fo(x,f,n.position,a,l),m=br(e,t,s),v=h.dmg+m,_=i.assaultDef,b=[...h.reasons];return m>0&&b.push("瞄准+1"),{canAttack:!0,reason:`有效突击${b.length>0?`（${b.join(", ")}）`:""}`,damage:v,counterDamage:_,dist:d,card:l,chargeDestination:f}}function Dt(e){const n=[...e.deck,...e.hand,...e.auxiliary];return e.plotSeg1&&n.push(e.plotSeg1),e.plotSeg2&&n.push(e.plotSeg2),n.filter(t=>!t.destroyed)}function wd(e){return Dt(e).length}function Er(e){const n=[...e.hand,...e.auxiliary];return e.plotSeg1&&n.push(e.plotSeg1),e.plotSeg2&&n.push(e.plotSeg2),n.filter(t=>!t.destroyed)}function ic(e,n){var a,r;const t={...n,destroyed:!0};return{player:{...e,deck:e.deck.map(i=>i.instanceId===n.instanceId?t:i),hand:e.hand.map(i=>i.instanceId===n.instanceId?t:i),auxiliary:e.auxiliary.map(i=>i.instanceId===n.instanceId?t:i),plotSeg1:((a=e.plotSeg1)==null?void 0:a.instanceId)===n.instanceId?t:e.plotSeg1,plotSeg2:((r=e.plotSeg2)==null?void 0:r.instanceId)===n.instanceId?t:e.plotSeg2,destroyedCards:[...e.destroyedCards,t]},destroyed:t}}function qs(e,n,t,a){let r=e;const i=[];let s=n;const l=a?`[${a}] `:"";let d=0;const u=30;for(;s>0&&d<u;){s--,d++;const p=r.deck.filter(m=>!m.destroyed);if(p.length===0){i.push(`    ↳ ${l}【誘爆】牌组已空，无法继续检查`);break}const f=p[0],x=t(f.defId),h=(x==null?void 0:x.nameCn)??f.defId;if(x!=null&&x.hasBombIcon){const{player:m}=ic(r,f);r=m,s++,i.push(`    ↳ ${l}【💣 誘爆】翻开 ${h}——有炸弹标记，破坏！（连锁+1）`)}else r={...r,deck:r.deck.filter(m=>m.instanceId!==f.instanceId),discard:[...r.discard,f]},i.push(`    ↳ ${l}【誘爆】翻开 ${h}——无炸弹标记，放入弃牌区`)}return{player:r,log:i}}function et(e,n,t,a){let r=e;const i=[];let s=n,l=0;for(;s>0;){const d=r.deck.filter(g=>!g.destroyed),u=r.hand.filter(g=>!g.destroyed),p=r.auxiliary.filter(g=>!g.destroyed),f=[r.plotSeg1,r.plotSeg2].filter(g=>!!g&&!g.destroyed),x=d[0]??u[0]??p[0]??f[0];if(!x)break;const h=t(x.defId),m=(h==null?void 0:h.nameCn)??x.defId,{player:v}=ic(r,x);r=v,s--;const _=h!=null&&h.hasBombIcon?"【💣】":"",b=a?`[${a}] `:"";if(i.push(`  ▶ ${b}${m} 被摧毁${_}`),h!=null&&h.hasBombIcon&&l++,r.destroyedCards.length>30)break}if(l>0){i.push(`  ─── 誘爆检查（${l}张炸弹卡被破坏）───`);const{player:d,log:u}=qs(r,l,t,a);r=d,i.push(...u)}return{player:r,log:i}}const vh="バーニア",bh="ムーブセンサー",yh="ホイール";function jn(e,n,t){const a=new Map;for(const f of e.auxiliary){if(f.destroyed)continue;const x=n(f.defId);x&&a.set(x.nameJa,(a.get(x.nameJa)??0)+1)}const r=a.get(vh)??0,i=a.get(bh)??0,s=a.get(yh)??0,l=r>=2&&s>=2,d=!l&&r>=2,u=i>=2,p=!l&&s>=2;return{vernier:d&&(t==="movement"||t==="melee"),moveSensor:u&&t==="melee",wheel:p&&(t==="movement"||t==="charge")}}function Uo(e,n){const t=n.row-e.row,a=n.col-e.col;return Math.abs(t)>=Math.abs(a)?t<0?"N":"S":a>0?"E":"W"}function se(e){return`P${e.replace("player","")}`}function Ho(e){switch(e){case"movement":return"移动时机";case"ranged":return"射击时机";case"melee":return"近战时机";case"special":return"特殊时机";default:return e}}function _h(e){switch(e){case"movement":return"移动";case"ranged":return"射击";case"melee":return"近战";case"charge":return"突击";case"aim":return"瞄准";case"armor":return"装甲";case"mine":return"机雷";case"special":return"特殊";default:return e}}function el(e,n){let t=Z(e,`══════ 主要阶段${n}开始 ══════`);t=Z(t,`全员翻开阶段${n}盖卡：`);for(const a of e.playerIds){if(t.players[a].isDefeated)continue;const r=t.players[a],i=Q.find(u=>u.id===r.unitId),s=se(a),l=(i==null?void 0:i.nameCn)??a,d=n===1?r.plotSeg1:r.plotSeg2;if(d){const u=q(d.defId);u?t=Z(t,`  ${s}[${l}] →【${u.nameCn}】(${_h(u.actionType)})`):t=Z(t,`  ${s}[${l}] → (未知卡牌)`)}else t=Z(t,`  ${s}[${l}] → 未配置行动卡`)}return t}function sc(e,n,t,a="S"){const r=X0(n,e);return{id:e,unitId:n,position:t,facing:a,deck:r,hand:[],auxiliary:[],plotSeg1:null,plotSeg2:null,discard:[],destroyedCards:[],isDefeated:!1}}function Mf(e=2,n=2){const t=Ze[0],a=la.slice(0,e),r={};for(let s=0;s<a.length;s++)r[a[s]]=s%n;const i={};for(const s of a){const l=r[s],d=t.startZones[l]??t.startZones[0]??[],u=d[Math.min(1,d.length-1)]??{row:0,col:0},p=l===0?"S":"N";i[s]=sc(s,"AG",u,p)}return{phase:"setup",roundNumber:0,activePlayer:a[0],players:i,playerIds:a,teams:r,teamCount:n,map:t,mines:[],log:[],turnOrder:[...a],currentTiming:null,plottingStep:null,pendingDamage:null,shuffleSeed:Date.now()}}function le(e,n){return S0(e,n)}function fe(e,n,t){return C0(e,n,t)}function Z(e,n){return{...e,log:[...e.log,n]}}function zn(e,n){return{...e,log:[...e.log,`[DBG] ${n}`]}}function Ih(e,n){return e.filter(t=>t.instanceId!==n)}function kh(e){const n=[],t=[];for(const a of e.deck){const r=q(a.defId);r&&r.actionType==="auxiliary"?t.push(a):n.push(a)}return{...e,deck:n,auxiliary:[...e.auxiliary,...t]}}function Wo(e){const n=e.playerIds.filter(r=>!e.players[r].isDefeated),t=e.phase==="action_seg2"?2:1,a=n.map(r=>{const i=e.players[r],s=Q.find(u=>u.id===i.unitId),l=(s==null?void 0:s.initiative)??0;let d=(s==null?void 0:s.movement)??0;if(e.currentTiming==="movement"){const u=t===1?i.plotSeg1:i.plotSeg2;if(u){const p=q(u.defId);p&&p.movementValue!==void 0&&(d=p.movementValue)}}return{id:r,initiative:l,movementValue:d}});return e.currentTiming==="movement"?a.sort((r,i)=>r.movementValue!==i.movementValue?i.movementValue-r.movementValue:i.initiative-r.initiative):a.sort((r,i)=>i.initiative-r.initiative),a.map(r=>r.id)}function jh(e,n){const{playerId:t,unitId:a}=n,r=e.teams[t]??0,i=e.map.startZones[r]??[],s=le(e,t).position,l=i.some(p=>p.row===s.row&&p.col===s.col)?s:i[Math.min(1,i.length-1)]??{row:0,col:0},d=le(e,t).facing,u=sc(t,a,l,d);return Z(fe(e,t,u),`${t} 选择了机体 ${a}`)}function wh(e,n){const t=Ze.find(i=>i.id===n.mapId);if(!t)return e;const a={},r={};for(const i of e.playerIds){const s=e.teams[i]??0,l=t.startZones[s]??t.startZones[0]??[],d=r[s]??0;r[s]=d+1;const u=l[Math.min(d,l.length-1)]??{row:0,col:0},p=s===0?"S":"N";a[i]=sc(i,e.players[i].unitId,u,p)}return Z({...e,map:t,players:a},`选择了地图 ${t.nameCn}`)}function Sh(e,n){if(e.phase!=="setup")return e;const{playerId:t,position:a}=n,r=le(e,t);return fe(e,t,{...r,position:a})}function Ch(e,n){if(e.phase!=="setup")return e;const{playerId:t,facing:a}=n,r=le(e,t);return fe(e,t,{...r,facing:a})}function Nh(e){var a;const n={...e.players};let t={...e,phase:"draw",roundNumber:1};for(const r of e.playerIds){const i=kh(e.players[r]);n[r]=i;for(const s of i.auxiliary){const l=q(s.defId);t=Z(t,`${r} 补助卡【${(l==null?void 0:l.nameCn)??s.defId}】从卡组移至辅助区`)}}t={...t,players:n};for(const r of e.playerIds){const i=((a=Q.find(s=>s.id===t.players[r].unitId))==null?void 0:a.evasion)??5;t=lc(t,{playerId:r,count:i})}return Z({...t,phase:"pregame",plottingStep:null,activePlayer:e.playerIds[0],currentTiming:null},"=== 第 1 回合开始 ===")}function Mh(e){if(e.phase!=="pregame")return e;const n=e.playerIds[0];return{...e,phase:"plotting",plottingStep:`transition_to_${n}`,activePlayer:n}}function lc(e,n){const t=le(e,n.playerId),a=[],r=[];let i=t.deck.filter(x=>!x.destroyed),s=t.discard.filter(x=>!x.destroyed);const l=s.length;let d=!1,u=e.shuffleSeed;for(;r.length<n.count;){if(i.length===0){if(s.length===0)break;const v=jf([...s],u);i=v.shuffled,u=v.nextSeed,s=[],d=!0}const x=n.count-r.length,{drawn:h,remaining:m}=q0(i,x);i=m;for(const v of h){const _=q(v.defId);_&&_.actionType==="auxiliary"?a.push(v):r.push(v)}}const p={...t,deck:i,discard:s,hand:[...t.hand,...r],auxiliary:[...t.auxiliary,...a]};let f=fe({...e,shuffleSeed:u},n.playerId,p);d&&(f=Z(f,`${n.playerId} 的卡组耗尽，弃牌区（${l} 张）洗入卡组`)),f=Z(f,`${n.playerId} 抽了 ${r.length} 张牌`);for(const x of a){const h=q(x.defId),m=(h==null?void 0:h.nameCn)??x.defId;f=Z(f,`  ↳ 辅助卡【${m}】自动放置到辅助区`)}return f}function Th(e,n){var p;const{playerId:t,seg:a,instanceId:r}=n,i=le(e,t),s=i.hand.find(f=>f.instanceId===r);if(!s)return e;const l=((p=q(s.defId))==null?void 0:p.nameCn)??s.defId;e=zn(e,`PLOT_CARD: ${se(t)} 配置【${l}】到阶段${a}`);const d=Ih(i.hand,r),u={...i,hand:d,plotSeg1:a===1?s:i.plotSeg1,plotSeg2:a===2?s:i.plotSeg2};return fe(e,t,u)}function Eh(e,n){const{playerId:t}=n,a=Z(e,`${t} 完成了布局`),r=e.playerIds.indexOf(t),i=e.playerIds.slice(r+1).find(u=>!a.players[u].isDefeated);if(i)return{...a,activePlayer:i,plottingStep:`transition_to_${i}`};const l={...el(a,1),activePlayer:e.playerIds[0],phase:"action_seg1",plottingStep:"complete",currentTiming:"movement",turnOrder:[]},d={...l,turnOrder:Wo(l)};return Z(d,`▸ ${Ho("movement")} — 行动顺序：${d.turnOrder.map(se).join(" → ")}`)}function Dh(e){const n=e.plottingStep;if(!n)return e;for(const t of e.playerIds)if(n===`transition_to_${t}`)return{...e,plottingStep:t,activePlayer:t};if(n==="transition"){const t=e.playerIds.indexOf(e.activePlayer);if(t>=0&&t<e.playerIds.length-1){const a=e.playerIds[t+1];return{...e,plottingStep:a,activePlayer:a}}}return e}function zh(e,n){const{playerId:t,to:a}=n;let r=le(e,t);const i=r.position;e=zn(e,`MOVE_UNIT: ${se(t)} (${i.row},${i.col})→(${a.row},${a.col}) 阶段=${e.phase} 时机=${e.currentTiming}`);const s=e.map,l=e.playerIds.filter(x=>x!==t&&!e.players[x].isDefeated).map(x=>le(e,x).position);if(l.some(x=>re(x,a)))return Z(e,`${se(t)} 移动无效：目标位置 (${a.row}, ${a.col}) 已被其他机体占据`);const d=n.path??fh(s,i,a,l);let u=e;if(d&&d.length>0){let x=a,h=!1;for(const m of d){const v=u.mines.filter(_=>_.ownerId!==t&&re(_.position,m));if(v.length>0){x=m,h=!0,r={...r,position:x},u=fe(u,t,r),u=Z(u,`${t} 移动途经 (${m.row}, ${m.col})，触发了机雷！`);for(const _ of v){u=Z(u,`机雷爆炸，对 ${se(t)} 造成 ${_.damage} 点伤害！`);const b=et(r,_.damage,q,se(t));for(const g of b.log)u=Z(u,g);r=b.player,u=fe(u,t,r),u={...u,mines:u.mines.filter(g=>g.id!==_.id)},u={...u,lastDamageContext:{attackerId:_.ownerId,targetId:t,weaponName:"机雷"}}}break}}if(!h){const m=n.finalFacing??Uo(i,a);r={...r,position:a,facing:m},u=fe(u,t,r),u=Z(u,`${t} 移动到 (${a.row}, ${a.col})，机头朝${m}`)}return ln(u)}const p=n.finalFacing??Uo(i,a),f={...r,position:a,facing:p};return Z(fe(e,t,f),`${t} 移动到 (${a.row}, ${a.col})，机头朝${p}`)}function $h(e,n){const{playerId:t,to:a,damage:r}=n,i={id:`mine-${Date.now()}-${Math.random().toString(36).substring(2,9)}`,ownerId:t,position:a,damage:r};let s={...e,mines:[...e.mines,i]};return s=Z(s,`${t} 在 (${a.row}, ${a.col}) 部署了机雷`),s}function Sd(e,n,t){var y,j,M;const{attackerId:a,targetId:r}=n,i=e.phase==="action_seg1"?1:2,s=le(e,a),l=le(e,r);e=zn(e,`RESOLVE_${t.toUpperCase()}: ${se(a)}(${s.position.row},${s.position.col},${s.facing})→${se(r)}(${l.position.row},${l.position.col},${l.facing}) seg=${i}`);const d=Go(s,l,i,t,e.map,q),p=br(s,i,q)>0?a:void 0;if(!d.canAttack)return Z(e,`${a} 攻击无效：${d.reason}`);const f=((y=Q.find(E=>E.id===s.unitId))==null?void 0:y.nameCn)??a,x=((j=Q.find(E=>E.id===l.unitId))==null?void 0:j.nameCn)??r,h=((M=d.card)==null?void 0:M.nameCn)??"???",m=t==="ranged"?"射击":"近战",v=Qs(l,i,q),_=Math.max(0,d.damage-v),b=v>0?` (装甲减伤 -${v}，实际 ${_})`:"";let g=e;if(t==="melee"){const E=Uo(s.position,l.position);E!==s.facing&&(g=fe(g,a,{...le(g,a),facing:E}),g=Z(g,`${f} 近战攻击后自动转向【${E}】`))}return g=Z(g,`${f} 对 ${x} 发动${m}【${h}】→ 造成 ${d.damage} 点伤害${b}`),g={...g,lastDamageContext:{attackerId:a,targetId:r,weaponName:h}},Qa(g,r,_,t,p)}function Qa(e,n,t,a,r){if(t<=0)return ln(e);const i=le(e,n),s=Dt(i);if(s.length===0)return ln(e);if(a!=="ranged"){const l=i.deck.filter(p=>!p.destroyed).length,d=i.discard.filter(p=>!p.destroyed).length;if(!(l===0&&d===0)){let p=e,f=t;const x=Math.min(f,l);if(x>0){const{player:h,log:m}=et(le(p,n),x,q,se(n));for(const v of m)p=Z(p,v);p=fe(p,n,h),f-=x}if(f>0&&d>0){const h=le(p,n),m=h.discard.filter(j=>!j.destroyed),v=h.discard.filter(j=>j.destroyed),{shuffled:_,nextSeed:b}=jf(m,p.shuffleSeed);p={...p,shuffleSeed:b};const g={...h,deck:[...h.deck,..._],discard:v};p=fe(p,n,g),p=Z(p,`${se(n)} 的卡组耗尽，弃牌区（${m.length} 张）洗入卡组`);const y=Math.min(f,m.length);if(y>0){const{player:j,log:M}=et(le(p,n),y,q,se(n));for(const E of M)p=Z(p,E);p=fe(p,n,j),f-=y}}if(f>0){const h=le(p,n),m=Dt(h);if(m.length===0)return ln(p);if(m.length<=f){const{player:v,log:_}=et(h,f,q,se(n));for(const b of _)p=Z(p,b);return p=fe(p,n,v),ln(p)}return p=Z(p,`[${se(n)}] 牌组与弃牌区已耗尽，切换为防方自选伤害模式`),{...p,pendingDamage:{targetId:n,remaining:f,selectedInstanceIds:[],destroyedBombCount:0,source:a,attackerId:r}}}return ln(p)}e=Z(e,`[${se(n)}] 牌组与弃牌区已耗尽，本次${a==="charge"?"突击":"近战"}伤害切换为防方自选模式`)}if(s.length<=t){const{player:l,log:d}=et(i,t,q,se(n));let u=e;for(const p of d)u=Z(u,p);return u=fe(u,n,l),ln(u)}if(a==="ranged"){const l=Er(i).length,d=Math.min(t,l),u=t-d;if(d<=0){const{player:p,log:f}=et(i,t,q,se(n));let x=e;for(const h of f)x=Z(x,h);return x=fe(x,n,p),ln(x)}return{...e,pendingDamage:{targetId:n,remaining:d,selectedInstanceIds:[],destroyedBombCount:0,source:a,attackerId:r,deckAutoCount:u}}}return{...e,pendingDamage:{targetId:n,remaining:t,selectedInstanceIds:[],destroyedBombCount:0,source:a,attackerId:r}}}function Ah(e,n){var b;const{attackerId:t,targetId:a}=n,r=e.phase==="action_seg1"?1:2,i=le(e,t),s=le(e,a);e=zn(e,`RESOLVE_CHARGE: ${se(t)}(${i.position.row},${i.position.col},${i.facing})→${se(a)}(${s.position.row},${s.position.col},${s.facing}) seg=${r}`);const l=Q.find(g=>g.id===i.unitId),d=Q.find(g=>g.id===s.unitId),u=yr(i,s,r,e.map,l,d,q);if(!u.canAttack)return Z(e,`${t} 突击无效：${u.reason}`);const p=l.nameCn,f=d.nameCn,x=((b=u.card)==null?void 0:b.nameCn)??"突击";let h=e;if(u.chargeDestination&&(u.chargeDestination.row!==i.position.row||u.chargeDestination.col!==i.position.col)){const g=u.chargeDestination,y={...i,position:g};h=fe(h,t,y),h=Z(h,`${p} 发动突击冲锋，移动至 (${g.row}, ${g.col})`)}{const g=le(h,t),y=Uo(g.position,s.position);y!==g.facing&&(h=fe(h,t,{...g,facing:y}),h=Z(h,`${p} 突击后自动转向【${y}】`))}const m=Qs(s,r,q),v=Math.max(0,u.damage-m),_=m>0?` (装甲减伤 -${m}，实际 ${v})`:"";if(h=Z(h,`${p} 对 ${f} 发动${x}【突击值 ${l.assault}】→ 对目标造成 ${u.damage} 点近战伤害${_}；自机承受反伤 ${u.counterDamage} 点`),u.counterDamage>0){const g=Qs(le(h,t),r,q),y=Math.max(0,u.counterDamage-g);if(y>0){h={...h,pendingFollowUpDamage:{targetId:t,amount:y,source:"charge",attackerId:a,weaponName:"突击反伤"}},h={...h,lastDamageContext:{attackerId:t,targetId:a,weaponName:x}};const j=Qa(h,a,v,"charge");if(!j.pendingDamage){if(j.phase==="game_over")return j;const E={...{...j,pendingFollowUpDamage:void 0},lastDamageContext:{attackerId:a,targetId:t,weaponName:"突击反伤"}};return Qa(E,t,y,"charge")}return j}else g>0&&(h=Z(h,`  [反伤] ${p} 装甲完全吸收了反伤`))}return h={...h,lastDamageContext:{attackerId:t,targetId:a,weaponName:x}},Qa(h,a,v,"charge")}function Zo(e){if(!e.pendingFollowUpDamage||e.phase==="game_over")return e;const{targetId:n,amount:t,source:a,attackerId:r,weaponName:i}=e.pendingFollowUpDamage;let s={...e,pendingFollowUpDamage:void 0};return r&&i&&(s={...s,lastDamageContext:{attackerId:r,targetId:n,weaponName:i}}),Qa(s,n,t,a)}function Ph(e,n){const t=e.pendingDamage;if(!t)return e;const{playerId:a,instanceId:r}=n,i=t.selectedInstanceIds.length===0,s=!!t.attackerId&&i&&!t.attackerDesignatedCardId,l=s?t.attackerId:t.targetId;if(a!==l)return e;const d=le(e,t.targetId),u=Dt(d).find(g=>g.instanceId===r&&!g.destroyed);if(!u||t.selectedInstanceIds.includes(r))return e;if(t.source==="ranged"&&!s){const g=Er(d);if(d.deck.some(j=>j.instanceId===r&&!j.destroyed)&&g.length>0)return e}const{player:p}=ic(d,u);let f=fe(e,t.targetId,p);const x=q(u.defId),h=(x==null?void 0:x.nameCn)??u.defId,m=x!=null&&x.hasBombIcon?"【💣】":"";f=Z(f,`  ▶ [${se(t.targetId)}] ${h} 被摧毁${m}`);let v=t.remaining-1;const _=(t.destroyedBombCount??0)+(x!=null&&x.hasBombIcon?1:0);if(v<=0){if(f={...f,pendingDamage:null},t.deckAutoCount&&t.deckAutoCount>0){const g=le(f,t.targetId),{player:y,log:j}=et(g,t.deckAutoCount,q,se(t.targetId));for(const M of j)f=Z(f,M);f=fe(f,t.targetId,y)}if(_>0){const g=le(f,t.targetId);f=Z(f,`  ─── 誘爆检查（${_}张炸弹卡被破坏）───`);const{player:y,log:j}=qs(g,_,q,se(t.targetId));for(const M of j)f=Z(f,M);f=fe(f,t.targetId,y)}return f=ln(f),Zo(f)}if(Dt(le(f,t.targetId)).length===0){if(f={...f,pendingDamage:null},_>0){const g=le(f,t.targetId);f=Z(f,`  ─── 誘爆检查（${_}张炸弹卡被破坏）───`);const{player:y,log:j}=qs(g,_,q,se(t.targetId));for(const M of j)f=Z(f,M);f=fe(f,t.targetId,y)}return f=ln(f),Zo(f)}return f={...f,pendingDamage:{...t,remaining:v,selectedInstanceIds:[...t.selectedInstanceIds,r],destroyedBombCount:_,attackerDesignatedCardId:s?r:t.attackerDesignatedCardId}},f}function Vh(e,n){const t=e.pendingDamage;if(!t)return e;const a=t.selectedInstanceIds.length===0,i=!!t.attackerId&&a&&!t.attackerDesignatedCardId?t.attackerId:t.targetId;if(n.playerId!==i)return e;const s=t.remaining+(t.deckAutoCount??0);if(s>0){const d=le(e,t.targetId),{player:u,log:p}=et(d,s,q,se(t.targetId));let f=e;for(const x of p)f=Z(f,x);return f=fe(f,t.targetId,u),f={...f,pendingDamage:null},f=ln(f),Zo(f)}let l={...e,pendingDamage:null};return Zo(l)}function Cd(e){const n=["movement","ranged","melee","special"],t=n.indexOf(e.currentTiming);if(t===-1){console.warn("[GameReducer] Invalid currentTiming:",e.currentTiming);const r=zn(e,`ADVANCE_TIMING: currentTiming 无效(${e.currentTiming})，强制推进阶段`);return fn(r,{type:"ADVANCE_PHASE"})}if(t<n.length-1){const r=n[t+1],i={...e,currentTiming:r},s={...i,turnOrder:Wo(i)};return Z(s,`▸ ${Ho(r)} — 行动顺序：${s.turnOrder.map(se).join(" → ")}`)}const a=zn(e,`ADVANCE_TIMING: ${e.phase}/${e.currentTiming} 时机全部完成，推进到下一阶段`);return fn(a,{type:"ADVANCE_PHASE"})}function Lh(e){var t,a;const n=zn(e,`ADVANCE_PHASE: ${e.phase} → 推进`);switch(e.phase){case"draw":{const r=n.playerIds.find(i=>!n.players[i].isDefeated)??n.playerIds[0];return{...n,phase:"plotting",plottingStep:`transition_to_${r}`,activePlayer:r,currentTiming:null}}case"plotting":{const i={...el(n,1),phase:"action_seg1",plottingStep:"complete",currentTiming:"movement"};let l={...i,turnOrder:Wo(i)};for(const d of l.playerIds){const u=l.players[d];if(u.isDefeated)continue;const p=u.plotSeg1?((t=q(u.plotSeg1.defId))==null?void 0:t.nameCn)??u.plotSeg1.defId:"(空)",f=u.plotSeg2?((a=q(u.plotSeg2.defId))==null?void 0:a.nameCn)??u.plotSeg2.defId:"(空)";l=zn(l,`${se(d)} 配置: 阶段1=[${p}] 阶段2=[${f}] 位置=${u.position.row},${u.position.col} 朝向=${u.facing}`)}return Z(l,`▸ ${Ho("movement")} — 行动顺序：${l.turnOrder.map(se).join(" → ")}`)}case"action_seg1":{const i={...el(n,2),phase:"action_seg2",currentTiming:"movement"},s={...i,turnOrder:Wo(i)};return Z(s,`▸ ${Ho("movement")} — 行动顺序：${s.turnOrder.map(se).join(" → ")}`)}case"action_seg2":return Rh(n);default:return n}}function Rh(e){let n=zn(e,`CLEANUP: 第${e.roundNumber}回合结束`);for(const l of e.playerIds){const d=e.players[l];n=zn(n,`  ${se(l)}: 位置=(${d.position.row},${d.position.col}) 朝向=${d.facing} 手牌=${d.hand.length} 牌组=${d.deck.filter(u=>!u.destroyed).length} 弃牌=${d.discard.length} ${d.isDefeated?"已击破":"存活"}`)}e=n;const t=(l,d)=>!d||d.destroyed?l:{...l,discard:[...l.discard,d]},a={...e.players};for(const l of e.playerIds){let d=t(e.players[l],e.players[l].plotSeg1);d=t(d,d.plotSeg2),d={...d,plotSeg1:null,plotSeg2:null},d={...d,discard:[...d.discard,...d.hand.filter(u=>!u.destroyed)],hand:[]},a[l]=d}const r={...e,players:a,phase:"cleanup",currentTiming:null},i=Z(r,`--- 第 ${e.roundNumber} 回合结束 ---`),s=ln(i);return s.phase==="game_over"?s:Oh(s)}function Oh(e){var r;const n=e.roundNumber+1;let t=Z({...e,phase:"draw",roundNumber:n},`=== 第 ${n} 回合开始 ===`);for(const i of e.playerIds){if(t.players[i].isDefeated)continue;const s=((r=Q.find(l=>l.id===t.players[i].unitId))==null?void 0:r.evasion)??5;t=lc(t,{playerId:i,count:s})}const a=e.playerIds.find(i=>!t.players[i].isDefeated)??e.playerIds[0];return{...t,phase:"plotting",plottingStep:`transition_to_${a}`,activePlayer:a,currentTiming:null}}function ln(e){const n=s=>{const l=[...s.deck,...s.hand,...s.auxiliary,...s.discard,...s.plotSeg1?[s.plotSeg1]:[],...s.plotSeg2?[s.plotSeg2]:[]].filter(u=>!u.destroyed);return l.length<=3?!0:!l.some(u=>{const p=q(u.defId);return p&&(p.actionType==="ranged"||p.actionType==="melee"||p.actionType==="charge")})},t={...e.players};let a=!1;for(const s of e.playerIds){if(t[s].isDefeated)continue;n(t[s])&&(t[s]={...t[s],isDefeated:!0},a=!0)}if(!a)return e;let r={...e,players:t};for(const s of e.playerIds)if(!e.players[s].isDefeated&&r.players[s].isDefeated){const l=Q.find(f=>f.id===r.players[s].unitId),d=e.playerIds.indexOf(s),u=d>=0?`P${d+1}`:s,p=r.lastDamageContext;if(p&&p.targetId===s&&p.attackerId){const f=Q.find(m=>{var v;return m.id===((v=r.players[p.attackerId])==null?void 0:v.unitId)}),x=e.playerIds.indexOf(p.attackerId),h=x>=0?`P${x+1}`:p.attackerId;r=Z(r,`💀 ${u}[${(l==null?void 0:l.nameCn)??s}] 被 ${h}[${(f==null?void 0:f.nameCn)??p.attackerId}] 以【${p.weaponName}】击毁！`)}else r=Z(r,`💀 ${u}[${(l==null?void 0:l.nameCn)??s}] 机体严重受损，宣告报废！`)}const i=new Set;for(const s of e.playerIds)r.players[s].isDefeated||i.add(r.teams[s]);if(i.size<=1){if(i.size===0)return Z({...r,phase:"game_over"},"所有队伍同时全灭！平局！");const s=[...i][0],l=e.playerIds.filter(d=>r.teams[d]===s).map(d=>{const u=Q.find(p=>p.id===r.players[d].unitId);return(u==null?void 0:u.nameCn)??d}).join("、");return Z({...r,phase:"game_over"},`队伍${s+1}（${l}）获胜！`)}return r}function Kh(e,n){if(e.currentTiming!=="melee")return e;const{playerId:t,to:a}=n,r=le(e,t),i=e.playerIds.filter(p=>p!==t).map(p=>le(e,p).position);if(!jn(r,q,"melee").moveSensor)return Z(e,`${t} 移动传感器未激活（需要辅助区中有≥2张）`);if(!Nf(e.map,r.position,i).some(p=>re(p,a)))return Z(e,`${t} 移动传感器目标格不在有效范围内`);const d={...r,position:a};let u=fe(e,t,d);return u=Z(u,`【辅助】${t} 移动传感器：向 (${a.row}, ${a.col}) 移动1格`),u}function Jh(e,n){const{playerId:t,facing:a}=n,r=le(e,t),i=Q.find(d=>d.id===r.unitId),s=(i==null?void 0:i.nameCn)??t;let l=fe(e,t,{...r,facing:a});return l=Z(l,`${s} 调整机头朝向至【${a}】`),l}function fn(e,n){switch(n.type){case"SELECT_UNIT":return jh(e,n);case"SELECT_MAP":return wh(e,n);case"CONFIRM_SETUP":return Nh(e);case"START_PLOTTING":return Mh(e);case"SET_SPAWN_POSITION":return Sh(e,n);case"SET_SPAWN_FACING":return Ch(e,n);case"DRAW_CARDS":return lc(e,n);case"PLOT_CARD":return Th(e,n);case"CONFIRM_PLOT":return Eh(e,n);case"ADVANCE_PLOT_STEP":return Dh(e);case"MOVE_UNIT":return zh(e,n);case"ADJUST_FACING":return Jh(e,n);case"ADVANCE_TIMING":return Cd(e);case"ADVANCE_PHASE":return Lh(e);case"SKIP_ACTION":return Cd(e);case"RESET_GAME":return Mf(n.playerCount??2,n.teamCount??2);case"LOAD_GAME":return n.state;case"ADD_LOG":return Z(e,n.message);case"RESOLVE_RANGED":return Sd(e,n,"ranged");case"RESOLVE_MELEE":return Sd(e,n,"melee");case"RESOLVE_CHARGE":return Ah(e,n);case"PLACE_MINE":return $h(e,n);case"SELECT_DAMAGE_CARD":return Ph(e,n);case"CONFIRM_DAMAGE_SELECTION":return Vh(e,n);case"MELEE_SENSOR_MOVE":return Kh(e,n);default:return e}}class Bh{constructor(){qe(this,"ctx",null);qe(this,"_enabled",!0);qe(this,"_volume",.5)}init(){this.ctx||(this.ctx=new AudioContext),this.ctx.state==="suspended"&&this.ctx.resume()}get enabled(){return this._enabled}set enabled(n){this._enabled=n}get volume(){return this._volume}set volume(n){this._volume=Math.max(0,Math.min(1,n))}ensure(){return!this._enabled||!this.ctx?null:(this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx)}makeGain(n,t){const a=n.createGain();return a.gain.value=t*this._volume,a.connect(n.destination),a}noiseBuffer(n,t){const a=Math.floor(n.sampleRate*t),r=n.createBuffer(1,a,n.sampleRate),i=r.getChannelData(0);for(let s=0;s<a;s++)i[s]=Math.random()*2-1;return r}cardFlip(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createBufferSource();a.buffer=this.noiseBuffer(n,.06);const r=n.createBiquadFilter();r.type="highpass",r.frequency.value=3e3;const i=this.makeGain(n,.25);i.gain.setValueAtTime(.25*this._volume,t),i.gain.exponentialRampToValueAtTime(.001,t+.05),a.connect(r),r.connect(i),a.start(t),a.stop(t+.06)}footstep(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createOscillator();a.type="sine",a.frequency.setValueAtTime(150,t),a.frequency.exponentialRampToValueAtTime(60,t+.05);const r=this.makeGain(n,.2);r.gain.setValueAtTime(.2*this._volume,t),r.gain.exponentialRampToValueAtTime(.001,t+.08),a.connect(r),a.start(t),a.stop(t+.08);const i=n.createBufferSource();i.buffer=this.noiseBuffer(n,.03);const s=n.createBiquadFilter();s.type="bandpass",s.frequency.value=800,s.Q.value=2;const l=this.makeGain(n,.1);l.gain.setValueAtTime(.1*this._volume,t),l.gain.exponentialRampToValueAtTime(.001,t+.03),i.connect(s),s.connect(l),i.start(t),i.stop(t+.03)}weaponFire(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createBufferSource();a.buffer=this.noiseBuffer(n,.15);const r=n.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(1200,t),r.frequency.exponentialRampToValueAtTime(400,t+.12),r.Q.value=3;const i=this.makeGain(n,.3);i.gain.setValueAtTime(.3*this._volume,t),i.gain.exponentialRampToValueAtTime(.001,t+.15),a.connect(r),r.connect(i),a.start(t),a.stop(t+.15);const s=n.createOscillator();s.type="sawtooth",s.frequency.setValueAtTime(800,t),s.frequency.exponentialRampToValueAtTime(200,t+.12);const l=this.makeGain(n,.15);l.gain.setValueAtTime(.15*this._volume,t),l.gain.exponentialRampToValueAtTime(.001,t+.12),s.connect(l),s.start(t),s.stop(t+.12)}metalImpact(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=[200,340];for(const s of a){const l=n.createOscillator();l.type="sine",l.frequency.value=s;const d=this.makeGain(n,.2);d.gain.setValueAtTime(.2*this._volume,t),d.gain.exponentialRampToValueAtTime(.001,t+.25),l.connect(d),l.start(t),l.stop(t+.25)}const r=n.createBufferSource();r.buffer=this.noiseBuffer(n,.02);const i=this.makeGain(n,.25);i.gain.setValueAtTime(.25*this._volume,t),i.gain.exponentialRampToValueAtTime(.001,t+.02),r.connect(i),r.start(t),r.stop(t+.02)}explosion(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createOscillator();a.type="sine",a.frequency.setValueAtTime(60,t),a.frequency.exponentialRampToValueAtTime(30,t+.5);const r=this.makeGain(n,.35);r.gain.setValueAtTime(.35*this._volume,t),r.gain.setValueAtTime(.35*this._volume,t+.1),r.gain.exponentialRampToValueAtTime(.001,t+.5),a.connect(r),a.start(t),a.stop(t+.5);const i=n.createBufferSource();i.buffer=this.noiseBuffer(n,.4);const s=n.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(3e3,t),s.frequency.exponentialRampToValueAtTime(200,t+.35);const l=this.makeGain(n,.3);l.gain.setValueAtTime(.3*this._volume,t),l.gain.exponentialRampToValueAtTime(.001,t+.35),i.connect(s),s.connect(l),i.start(t),i.stop(t+.4)}cardShatter(){const n=this.ensure();if(!n)return;const t=n.currentTime;for(let a=0;a<5;a++){const r=t+a*.03,i=n.createBufferSource();i.buffer=this.noiseBuffer(n,.02);const s=n.createBiquadFilter();s.type="highpass",s.frequency.value=1e3+a*300;const l=this.makeGain(n,.2);l.gain.setValueAtTime(.2*this._volume,r),l.gain.exponentialRampToValueAtTime(.001,r+.02),i.connect(s),s.connect(l),i.start(r),i.stop(r+.02)}}mineBeep(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=[600,800,1e3];for(let r=0;r<a.length;r++){const i=t+r*.1,s=n.createOscillator();s.type="sine",s.frequency.value=a[r];const l=this.makeGain(n,.15);l.gain.setValueAtTime(.15*this._volume,i),l.gain.setValueAtTime(.15*this._volume,i+.05),l.gain.exponentialRampToValueAtTime(.001,i+.08),s.connect(l),s.start(i),s.stop(i+.08)}}chargeRumble(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(80,t),a.frequency.linearRampToValueAtTime(120,t+.3);const r=n.createOscillator();r.type="sine",r.frequency.value=15;const i=n.createGain();i.gain.value=.15*this._volume;const s=this.makeGain(n,.25);s.gain.setValueAtTime(.25*this._volume,t),s.gain.exponentialRampToValueAtTime(.001,t+.4),r.connect(i),i.connect(s.gain),a.connect(s),r.start(t),a.start(t),r.stop(t+.4),a.stop(t+.4)}uiBlip(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createOscillator();a.type="sine",a.frequency.value=880;const r=this.makeGain(n,.1);r.gain.setValueAtTime(.1*this._volume,t),r.gain.exponentialRampToValueAtTime(.001,t+.06),a.connect(r),a.start(t),a.stop(t+.06)}}const ge=new Bh,Fh={move_step:200,card_draw:350,ranged_hit:400,melee_hit:350,charge_move:300,charge_hit:450,card_destroy:400,mine_explode:500,mine_place:300,screen_shake:300,damage_number:600,cleanup_discard:2500,batch_card_draw:1600,deck_reshuffle:800};function Gh(e){return Fh[e.type]??300}const Tf=k.createContext(null);function bi({children:e}){const[n,t]=k.useState(!1),[a,r]=k.useState(null),[i,s]=k.useState(()=>Object.fromEntries(la.map(m=>[m,null]))),l=k.useRef([]),d=k.useRef(!1),u=k.useRef(!1),p=k.useRef((()=>{try{const m=localStorage.getItem("em_anim_speed");return m==="fast"?.5:m==="off"?0:1}catch{return 1}})()).current,f=k.useCallback(()=>{if(u.current||l.current.length===0){r(null),t(!1),s(Object.fromEntries(la.map(_=>[_,null]))),d.current=!1,u.current=!1;return}const m=l.current.shift();r(m),m.type==="move_step"&&s(_=>({..._,[m.playerId]:{pos:m.to,facing:m.facing}})),Uh(m);const v=p===0?0:Gh(m)*p;v===0?f():setTimeout(()=>f(),v)},[p]),x=k.useCallback(m=>{if(m.length!==0&&p!==0&&(l.current.push(...m),!d.current)){d.current=!0,u.current=!1,t(!0);const v=m.find(_=>_.type==="move_step");v&&s(_=>({..._,[v.playerId]:{pos:v.from,facing:v.facing}})),setTimeout(()=>f(),16)}},[f,p]),h=k.useCallback(()=>{u.current=!0,l.current=[],r(null),t(!1),s(Object.fromEntries(la.map(m=>[m,null]))),d.current=!1},[]);return o.jsx(Tf.Provider,{value:{isAnimating:n,currentEvent:a,animatedPositions:i,enqueueEvents:x,skipAnimation:h,speedMultiplier:p},children:e})}function Dr(){const e=k.useContext(Tf);if(!e)throw new Error("useAnimation must be used inside <AnimationProvider>");return e}function Uh(e){switch(e.type){case"card_draw":ge.cardFlip();break;case"move_step":ge.footstep();break;case"ranged_hit":ge.weaponFire(),setTimeout(()=>ge.metalImpact(),100);break;case"melee_hit":ge.metalImpact();break;case"charge_move":ge.chargeRumble();break;case"charge_hit":ge.explosion(),setTimeout(()=>ge.metalImpact(),80);break;case"card_destroy":e.isBomb?ge.explosion():ge.cardShatter();break;case"mine_explode":ge.explosion();break;case"mine_place":ge.mineBeep();break;case"cleanup_discard":case"batch_card_draw":ge.cardFlip();break;case"deck_reshuffle":ge.cardFlip(),setTimeout(()=>ge.cardFlip(),200);break}}function Hh(e,n){const{isAnimating:t,enqueueEvents:a}=Dr();return k.useCallback(r=>{const i=r.type==="ADVANCE_TIMING"||r.type==="ADVANCE_PHASE"||r.type==="ADJUST_FACING"||r.type==="START_PLOTTING"||r.type==="SELECT_DAMAGE_CARD"||r.type==="CONFIRM_DAMAGE_SELECTION";if(t&&!i)return;const s=n.current,l=fn(s,r);e(r);const d=Wh(s,l,r);d.length>0&&a(d)},[e,n,t,a])}function Wh(e,n,t){switch(t.type){case"MOVE_UNIT":return Zh(e,n,t);case"RESOLVE_RANGED":return Nd(e,n,"ranged",t.attackerId,t.targetId);case"RESOLVE_MELEE":return Nd(e,n,"melee",t.attackerId,t.targetId);case"RESOLVE_CHARGE":return Yh(e,n,t.attackerId,t.targetId);case"DRAW_CARDS":return Xh(e,n,t.playerId);case"ADVANCE_TIMING":return e.phase==="action_seg2"&&n.phase!=="action_seg2"?[Qh(e),...Md(e,n,"player1"),...Md(e,n,"player2")]:[];case"PLACE_MINE":return[{type:"mine_place",playerId:t.playerId,position:t.to}];case"SELECT_DAMAGE_CARD":return qh(e,n);default:return[]}}function Zh(e,n,t){const{playerId:a}=t,r=mn(e,a),i=mn(n,a),s=r.position;if(re(s,i.position))return[];const l=[],d=t.path&&t.path.length>0?t.path:[i.position];let u=s;for(const x of d){const h=Tt(x.row-u.row,x.col-u.col);if(l.push({type:"move_step",playerId:a,from:u,to:x,facing:h}),u=x,re(x,i.position))break}const p=e.mines.filter(x=>!n.mines.some(h=>h.id===x.id));for(const x of p)l.push({type:"mine_explode",position:x.position,damage:x.damage}),l.push({type:"screen_shake",intensity:"heavy"});const f=yi(e,n,a);return _i(l,a,f),l}function Nd(e,n,t,a,r){var p;const i=[],s=mn(e,r).position,l=yi(e,n,r),d=l.length;if(d===0&&!n.pendingDamage)return[];const u=d+(((p=n.pendingDamage)==null?void 0:p.remaining)??0);return i.push({type:t==="ranged"?"ranged_hit":"melee_hit",attackerId:a,targetId:r,damage:u,targetPos:s}),i.push({type:"screen_shake",intensity:t==="melee"?"medium":"light"}),u>0&&i.push({type:"damage_number",position:s,value:u}),_i(i,r,l),i}function Yh(e,n,t,a){var p;const r=[],i=mn(e,t),s=mn(n,t),l=mn(e,a).position;re(i.position,s.position)||(r.push({type:"charge_move",attackerId:t,from:i.position,to:s.position}),r.push({type:"move_step",playerId:t,from:i.position,to:s.position,facing:Tt(s.position.row-i.position.row,s.position.col-i.position.col)}));const d=yi(e,n,a),u=d.length+(((p=n.pendingDamage)==null?void 0:p.remaining)??0);return r.push({type:"charge_hit",attackerId:t,targetId:a,damage:u,targetPos:l}),r.push({type:"screen_shake",intensity:"heavy"}),u>0&&r.push({type:"damage_number",position:l,value:u}),_i(r,a,d),r}function Xh(e,n,t){const a=[],r=mn(e,t),i=mn(n,t),s=new Set(r.hand.map(u=>u.instanceId)),l=i.hand.filter(u=>!s.has(u.instanceId));if(l.length>0){const u=r.deck.filter(x=>!x.destroyed).length,p=Math.min(l.length,u),f=l.length-p;p>0&&a.push({type:"batch_card_draw",playerId:t,count:p}),f>0&&(a.push({type:"deck_reshuffle",playerId:t}),a.push({type:"batch_card_draw",playerId:t,count:f}))}const d=new Set(r.auxiliary.map(u=>u.instanceId));for(const u of i.auxiliary)d.has(u.instanceId)||a.push({type:"card_draw",playerId:t,card:u,defId:u.defId,isAuxiliary:!0});return a}function Qh(e){function n(t){const a=[];for(const r of t.hand)r.destroyed||a.push(r);return t.plotSeg1&&!t.plotSeg1.destroyed&&a.push(t.plotSeg1),t.plotSeg2&&!t.plotSeg2.destroyed&&a.push(t.plotSeg2),a}return{type:"cleanup_discard",p1Cards:n(e.players.player1),p2Cards:n(e.players.player2)}}function Md(e,n,t){const a=[],r=mn(e,t),i=mn(n,t),s=i.hand.length;if(s>0){const d=r.deck.filter(f=>!f.destroyed).length,u=Math.min(s,d),p=s-u;u>0&&a.push({type:"batch_card_draw",playerId:t,count:u}),p>0&&(a.push({type:"deck_reshuffle",playerId:t}),a.push({type:"batch_card_draw",playerId:t,count:p}))}const l=new Set(r.auxiliary.map(d=>d.instanceId));for(const d of i.auxiliary)l.has(d.instanceId)||a.push({type:"card_draw",playerId:t,card:d,defId:d.defId,isAuxiliary:!0});return a}function qh(e,n){const t=e.pendingDamage;if(!t)return[];const a=yi(e,n,t.targetId),r=[];return _i(r,t.targetId,a),r}function mn(e,n){return e.players[n]}function yi(e,n,t){const a=new Set(mn(e,t).destroyedCards.map(r=>r.instanceId));return mn(n,t).destroyedCards.filter(r=>!a.has(r.instanceId))}function _i(e,n,t){for(let a=0;a<t.length;a++){const r=t[a],i=q(r.defId);e.push({type:"card_destroy",playerId:n,card:r,defId:r.defId,isBomb:(i==null?void 0:i.hasBombIcon)??!1,index:a,total:t.length})}}const ex={player1:!1,player2:!1,player1Difficulty:"hard",player2Difficulty:"hard",playerAI:{},playerDifficulty:{}};function Oe(e,n){var t;return((t=e.playerAI)==null?void 0:t[n])!==void 0?e.playerAI[n]:n==="player1"?e.player1:n==="player2"?e.player2:!1}function zr(e,n){var t;return((t=e.playerDifficulty)==null?void 0:t[n])!==void 0?e.playerDifficulty[n]:n==="player1"?e.player1Difficulty:n==="player2"?e.player2Difficulty:"hard"}function cc(e,n){const t=e.teams[n],a=e.players[n].position;let r=null,i=1/0;for(const s of e.playerIds){if(s===n||e.teams[s]===t||e.players[s].isDefeated)continue;const l=e.players[s].position,d=Math.abs(l.row-a.row)+Math.abs(l.col-a.col);d<i&&(i=d,r=s)}return r??e.playerIds.find(s=>s!==n&&!e.players[s].isDefeated&&e.teams[s]!==t)??e.playerIds.find(s=>s!==n)??n}function ba(e,n){return e.players[n]}function nx(e,n,t,a,r,i){if(!n)return 0;const s=Ne(t.position,a.position);let l;switch(n.actionType){case"ranged":case"melee":case"charge":l=5+(n.damage??0);break;case"movement":l=2+(n.movementValue??0)*.5;break;case"aim":case"armor":l=2;break;case"mine":l=1.5+(n.damage??0)*.2;break;default:l=1}n.hasBombIcon&&(i?l+=5:l+=8);const u=Dt(t).filter(p=>p.defId===e.defId&&!p.destroyed).length;if(u>=3?l-=3:u===2&&(l-=1.5),n.actionType==="movement"&&s>=4&&(l+=3),n.actionType==="ranged"){const p=n.rangeMin??1,f=n.rangeMax??6;s>=p&&s<=f&&(l+=4)}return(n.actionType==="melee"||n.actionType==="charge")&&s<=2&&(l+=4),l}function Ot(e,n,t,a,r,i){if(e.actionType!=="movement")return[];const s=jn(n,r,"movement"),l=(e.movementValue??0)+(s.wheel?2:0);if(l<=0)return[];const d=[t.position],u=vi(a,n.position,l,d,s,n.facing),p=[];for(const{pos:f}of u){const x=oc(a,n.position,n.facing,f,l,[t.position],s);x&&p.push({pos:f,facing:x.finalFacing,dist:Ne(f,t.position)})}return p.sort((f,x)=>f.dist-x.dist),p}function tx(e,n,t,a,r,i){const s=Ot(e,t,a,r,i);if(s.length===0)return null;if(n.actionType==="melee")return s.find(l=>l.dist===1)??null;if(n.actionType==="ranged"){const l=n.rangeMin??1,d=n.rangeMax??6,u=n.rangeOptimal??Math.round((l+d)/2);let p=null,f=1/0;for(const x of s){if(x.dist<l||x.dist>d||!xr(r,x.pos,a.position)||!Dn(x.facing,x.pos,a.position))continue;const h=Math.abs(x.dist-u);h<f&&(f=h,p=x)}return p}return n.actionType==="charge"?s.find(l=>l.dist<=3)??null:null}function qa(e,n,t,a,r,i,s){var u;let l=e.damage??0;if(e.actionType==="ranged"&&e.rangeOptimal!==void 0&&e.damageAttenuation!==void 0){const p=Math.max(0,t-e.rangeOptimal);l-=p*e.damageAttenuation}const d=(u=s.cells[n.row])==null?void 0:u[n.col];return(d==null?void 0:d.terrain)==="water"&&e.isEnergyWeapon&&(l-=1),Math.max(0,l)}function ax(e,n){const t=e.hand.filter(r=>!r.destroyed);if(t.length===0)return 0;const a=t.filter(r=>{const i=n(r.defId);return i&&i.actionType==="armor"}).length;return Math.min(1,a/t.length)}function Td(e,n,t,a,r,i){var x,h;const s=Ne(t.position,a.position),l=(x=r.cells[a.position.row])==null?void 0:x[a.position.col],d=(h=r.cells[t.position.row])==null?void 0:h[t.position.col],u=ax(a,i),p=m=>["ranged","melee","charge"].includes(m.actionType),f=(l==null?void 0:l.terrain)==="forest"?.85:1;if(e.actionType==="movement"&&p(n)){const m=tx(e,n,t,a,r,i);if(m)return qa(n,m.pos,m.dist,2,!1,!1,r)*(1-u*.5)*f*3.5+2;const v=Ot(e,t,a,r,i),_=v.length>0?v[0].dist:s;return(s-_)*1.5+(n.damage??0)*.3}if(e.actionType==="aim"&&p(n)){let m=(n.damage??0)+1,v=!1;if(n.actionType==="ranged"){const b=n.rangeMin??1,g=n.rangeMax??6;if(v=s>=b&&s<=g&&xr(r,t.position,a.position)&&Dn(t.facing,t.position,a.position),v&&n.rangeOptimal&&n.damageAttenuation){const y=Math.max(0,s-n.rangeOptimal);m-=y*n.damageAttenuation}(d==null?void 0:d.terrain)==="water"&&n.isEnergyWeapon&&(m-=1)}else n.actionType==="melee"?v=s===1:n.actionType==="charge"&&(v=s<=3);m=Math.max(0,m);const _=m*(1-u*.5)*f;return v?_*4+3:_*.5}if(p(e)&&n.actionType==="movement"){let m=0;if(e.actionType==="ranged"){const b=e.rangeMin??1,g=e.rangeMax??6;s>=b&&s<=g&&xr(r,t.position,a.position)&&Dn(t.facing,t.position,a.position)?m=qa(e,t.position,s,1,!1,!1,r)*(1-u*.5)*f*2.5:m=(e.damage??0)*.3}else e.actionType==="melee"?s===1?m=qa(e,t.position,s,1,!1,!1,r)*(1-u*.5)*3:m=(e.damage??0)*.3:e.actionType==="charge"&&(m=s<=3?(e.damage??0)*2:(e.damage??0)*.3);const v=Ot(n,t,a,r,i),_=v.length>0?Math.max(0,s-v[0].dist)*1+1:.5;return m+_}if(p(e)&&n.actionType==="armor"){let m=Qr(e,s,t.position,t.facing,a.position,r,f,u,1);const v=s<=3?2.5:s<=5?1.5:.5;return m+v}if(e.actionType==="armor"&&p(n)){const m=s<=3?2.5:s<=5?1.5:.5;let v=Qr(n,s,t.position,t.facing,a.position,r,f,u,2);return m+v}if(e.actionType==="movement"&&n.actionType==="movement"){if(s<=3)return 1;const m=Ot(e,t,a,r,i),v=m.length>0?m[0].dist:s,_=s-v,b=n.movementValue??0;return(_+Math.min(b,v-1))*1.2+.5}if(p(e)&&p(n)){const m=Qr(e,s,t.position,t.facing,a.position,r,f,u,1),v=Qr(n,s,t.position,t.facing,a.position,r,f,u,2),_=m>1&&v>1;return m+v+(_?2:0)}if(e.actionType==="movement"&&n.actionType==="armor"){const m=Ot(e,t,a,r,i),v=m.length>0?m[0].dist:s;return(s-v)*1+(v<=3?2:.5)}if(e.actionType==="armor"&&n.actionType==="movement"){const m=s<=3?2:.5,v=Ot(n,t,a,r,i),_=v.length>0?v[0].dist:s;return m+(s-_)*1}if(e.actionType==="aim"&&!p(n))return .3+qr(n,s);if(e.actionType==="mine"||n.actionType==="mine"){const m=s<=3?1.5:.5,v=e.actionType==="mine"?n:e;return m+qr(v,s)}return qr(e,s)+qr(n,s)}function Qr(e,n,t,a,r,i,s,l,d){if(e.actionType==="ranged"){const u=e.rangeMin??1,p=e.rangeMax??6;return n>=u&&n<=p&&xr(i,t,r)&&Dn(a,t,r)?qa(e,t,n,d,!1,!1,i)*(1-l*.5)*s*2.5:(e.damage??0)*.3}return e.actionType==="melee"?n===1?qa(e,t,n,d,!1,!1,i)*(1-l*.5)*3:(e.damage??0)*.3:e.actionType==="charge"?n<=3?(e.damage??0)*2:(e.damage??0)*.3:0}function qr(e,n){switch(e.actionType){case"movement":return(e.movementValue??0)*.4+(n>3?1:.2);case"armor":return n<=3?2:n<=5?1:.3;case"aim":return .3;case"mine":return n<=3?1.5:.5;default:return .1}}function rx(e,n,t,a,r){const i=e.hand.filter(u=>!u.destroyed);if(i.length===0)return{seg1:null,seg2:null};if(i.length===1)return{seg1:i[0].instanceId,seg2:null};if(a==="easy"){const u=[...i].sort(()=>Math.random()-.5);return{seg1:u[0].instanceId,seg2:u[1].instanceId}}let s=-1/0,l=i[0].instanceId,d=i[1].instanceId;for(let u=0;u<i.length;u++){const p=i[u],f=t(p.defId);if(f)for(let x=0;x<i.length;x++){if(u===x)continue;const h=i[x],m=t(h.defId);if(!m)continue;const v=r?Td(f,m,e,n,r,t):f.actionType!=="movement"&&m.actionType!=="movement"?Td(f,m,e,n,{width:11,height:7,cells:[]},t):0;v>s&&(s=v,l=p.instanceId,d=h.instanceId)}}return{seg1:l,seg2:d}}function ox(e,n,t,a,r){const i=ba(e,n),s=cc(e,n),l=ba(e,s),d=jn(i,a,"movement"),u=t===1?i.plotSeg1:i.plotSeg2;if(!u)return null;const p=a(u.defId);if(!p||p.actionType!=="movement")return null;const f=(p.movementValue??0)+(d.wheel?2:0);if(f<=0)return null;const x=e.playerIds.filter(N=>N!==n&&!e.players[N].isDefeated).map(N=>e.players[N].position),h=vi(e.map,i.position,f,x,d,i.facing);if(h.length===0)return null;function m(N){const $=oc(e.map,i.position,i.facing,N,f,x,d);return $?{pos:N,path:$.path,finalFacing:$.finalFacing}:null}if(r==="easy"){if(Math.random()<.5)return null;const N=[...h].sort(()=>Math.random()-.5);for(const{pos:$}of N){const T=m($);if(T)return T}return null}const _=(t===1?2:1)===1?i.plotSeg1:i.plotSeg2,b=_?a(_.defId):null;let g;if(!b)g=1;else if(b.actionType==="ranged"){const N=b.rangeMin??1,$=b.rangeMax??6;g=b.rangeOptimal??Math.round((N+$)/2)}else b.actionType==="melee"||b.actionType==="charge"?g=1:g=2;const y=Er(l),j=[];for(const N of y){const $=a(N.defId);$&&$.actionType==="ranged"&&j.push({min:$.rangeMin??1,max:$.rangeMax??6})}const M=e.mines.filter(N=>N.ownerId!==n),E=[];for(const{pos:N}of h){const $=Ne(N,l.position),T=-Math.abs($-g)*3,K=M.some(L=>re(L.position,N))?-10:0,U=e.map.cells[N.row][N.col];let z=0;U.terrain==="forest"?z=1.5:U.terrain==="water"&&(z=-1);let J=0;for(const L of j)$<L.min||$>L.max?J+=.5:J-=.5;E.push({pos:N,quickScore:T+K+z+J})}E.sort((N,$)=>$.quickScore-N.quickScore);const w=E.slice(0,5);let S=-1/0,A=null;for(const{pos:N,quickScore:$}of w){const T=m(N);if(!T)continue;const D=Dn(T.finalFacing,N,l.position)?1:-1,K=$+D;K>S&&(S=K,A=T)}if(!A)for(const{pos:N}of E.slice(5)){const $=m(N);if($){A=$;break}}return A}function ix(e,n,t,a,r,i){const s=ba(e,n),l=cc(e,n),d=ba(e,l),u=Ln(s,t,a,r);if(!u)return!1;if(u.actionType==="charge"&&a==="melee"&&i==="hard"){const f=Q.find(g=>g.id===s.unitId),x=Q.find(g=>g.id===d.unitId);if(!f||!x)return!1;const h=yr(s,d,t,e.map,f,x,r);if(!h.canAttack)return!1;const m=h.counterDamage,v=wd(s),_=wd(d);return!(h.damage-m<0&&v<=m+2||v<=5&&m>=3||_<=3&&m>=2)}if(u.actionType==="charge"&&a==="melee"){const f=Q.find(m=>m.id===s.unitId),x=Q.find(m=>m.id===d.unitId);return!f||!x?!1:yr(s,d,t,e.map,f,x,r).canAttack}return Go(s,d,t,a,e.map,r).canAttack}function sx(e,n,t,a,r=!1,i){const s=Er(n);if(s.length===0)return null;if(a==="easy")return s[Math.floor(Math.random()*s.length)].instanceId;const l=i??n;let d=null,u=r?-1/0:1/0;for(const p of s){const f=t(p.defId),x=nx(p,f,n,l,t,r);(r?x>u:x<u)&&(u=x,d=p)}return(d==null?void 0:d.instanceId)??null}function lx(e,n,t,a,r){const i=ba(e,n),s=ba(e,cc(e,n)),l=t===1?i.plotSeg1:i.plotSeg2;if(!l)return null;const d=a(l.defId);if(!d||d.actionType!=="mine")return null;const u=e.mines.map(m=>m.position),p=[];for(let m=-1;m<=1;m++)for(let v=-1;v<=1;v++){if(m===0&&v===0)continue;const _=i.position.row+m,b=i.position.col+v;if(_<0||_>=e.map.height||b<0||b>=e.map.width)continue;const g={row:_,col:b};re(g,i.position)||re(g,s.position)||u.some(y=>re(y,g))||p.push(g)}if(p.length===0)return null;if(r==="easy")return p.sort((m,v)=>Ne(m,s.position)-Ne(v,s.position)),p[0];let f=-1/0,x=null;const h=Ne(i.position,s.position);for(const m of p){let v=0;const _=Ne(m,s.position);v+=Math.max(0,5-_);const b=m.row,g=m.col;Ne(m,i.position)<h&&(v+=2),Dn(s.facing,s.position,m)&&Ne(s.position,m)<=3&&(v+=1.5);const j=b===0||b===e.map.height-1,M=g===0||g===e.map.width-1;(j||M)&&(v+=1),j&&M&&(v+=.5);const E=e.map.cells[b][g];(E.terrain==="forest"||E.terrain==="water")&&(v+=.5),v>f&&(f=v,x=m)}return x}const Ii=1,cx=["slot_1","slot_2","slot_3","slot_4","slot_5"],dx=10,_r="em_saves_index",Ir="em_replays_index",dc=e=>`em_save_${e}`,Yo=e=>`em_replay_${e}`;function ja(e){try{const n=localStorage.getItem(e);return n?JSON.parse(n):[]}catch{return[]}}function ki(e,n){localStorage.setItem(e,JSON.stringify(n))}function Ed(){return ja(_r).sort((n,t)=>t.timestamp-n.timestamp)}function Ef(e,n,t,a){const r={slotId:e,timestamp:Date.now(),roundNumber:n.roundNumber,phase:n.phase,player1Unit:n.players.player1.unitId,player2Unit:n.players.player2.unitId,mapId:n.map.id,mapName:n.map.nameCn,isAutoSave:a},i={version:Ii,metadata:r,gameState:n,aiConfig:t};try{localStorage.setItem(dc(e),JSON.stringify(i))}catch{throw new Error("存储空间不足，无法保存存档")}const l=ja(_r).filter(d=>d.slotId!==e);return l.push(r),ki(_r,l),r}function ux(e){try{const n=localStorage.getItem(dc(e));if(!n)return null;const t=JSON.parse(n);if(!fx(t))return null;const a=t;return a.gameState.playerIds||(a.gameState.playerIds=["player1","player2"],a.gameState.teams={player1:0,player2:1},a.gameState.teamCount=2,a.gameState.shuffleSeed=a.metadata.timestamp),a}catch{return null}}function px(e){localStorage.removeItem(dc(e));const n=ja(_r);ki(_r,n.filter(t=>t.slotId!==e))}function fx(e){if(!e||typeof e!="object")return!1;const n=e;if(n.version!==Ii||!n.gameState||typeof n.gameState!="object")return!1;const t=n.gameState;if(!t.phase||!t.players||!t.map)return!1;const a=t.players;return!(!a.player1||!a.player2||!n.metadata||typeof n.metadata!="object"||!n.aiConfig||typeof n.aiConfig!="object")}function Dd(){return ja(Ir).sort((n,t)=>t.timestamp-n.timestamp)}function mx(e,n,t){const a=`${Date.now()}`,r={replayId:a,timestamp:Date.now(),totalRounds:e.roundNumber,totalActions:n.length,player1Unit:e.players.player1.unitId,player2Unit:e.players.player2.unitId,mapId:e.map.id,mapName:e.map.nameCn,winner:t},i={version:Ii,metadata:r,initialState:e,actions:n};try{localStorage.setItem(Yo(a),JSON.stringify(i))}catch{throw new Error("存储空间不足，无法保存录像")}const s=ja(Ir);for(s.push(r),s.sort((l,d)=>l.timestamp-d.timestamp);s.length>dx;){const l=s.shift();localStorage.removeItem(Yo(l.replayId))}return ki(Ir,s),r}function zd(e){try{const n=localStorage.getItem(Yo(e));if(!n)return null;const t=JSON.parse(n);if(!hx(t))return null;const a=t;return a.initialState.playerIds||(a.initialState.playerIds=["player1","player2"],a.initialState.teams={player1:0,player2:1},a.initialState.teamCount=2,a.initialState.shuffleSeed=a.metadata.timestamp),a}catch{return null}}function gx(e){localStorage.removeItem(Yo(e));const n=ja(Ir);ki(Ir,n.filter(t=>t.replayId!==e))}function hx(e){if(!e||typeof e!="object")return!1;const n=e;return!(n.version!==Ii||!n.initialState||typeof n.initialState!="object"||!Array.isArray(n.actions)||!n.metadata||typeof n.metadata!="object")}function xx(e,n){let t=e.initialState,a=0;for(;a<e.actions.length&&!(t.roundNumber>=n);a++)t=fn(t,e.actions[a]);return{state:t,actionIndex:a}}const ca={N:"↑北",S:"↓南",E:"→东",W:"←西"},eo={setup:"配置",pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"行动阶段·段落1",action_seg2:"行动阶段·段落2",cleanup:"清理阶段",game_over:"对局结束"},vx={movement:"移动时序",ranged:"射击时序",melee:"近战时序",special:"特殊时序"},bx={movement:"移动",ranged:"射击",melee:"近战",charge:"突击",aim:"瞄准",armor:"装甲",mine:"机雷",special:"特殊",auxiliary:"辅助"};function Rn(e){var n;return((n=Q.find(t=>t.id===e))==null?void 0:n.nameCn)??e}function nl(e){const n=q(e);if(!n)return e;const t=bx[n.actionType]??n.actionType;let a="";n.movementValue!=null&&(a=` 值${n.movementValue}`),n.damage!=null&&(a=` 伤害${n.damage}`,n.rangeMin!=null&&n.rangeMax!=null&&(a+=` 射程${n.rangeMin}-${n.rangeMax}`),n.rangeOptimal!=null&&(a+=` 最佳${n.rangeOptimal}`));const r=n.hasBombIcon?" [💣]":"",i=n.isKaiVariant?" [◆改]":"";return`${n.nameCn}(${t}${a}${r}${i})`}function tl(e){const n=nl(e.defId);return e.destroyed?`${n}[已破坏]`:n}function no(e){return e.length===0?"(无)":e.map(n=>tl(n)).join(", ")}function to(e,n){const t=[],a=Rn(e.unitId),r=ca[e.facing]??e.facing,i=e.deck.filter(d=>!d.destroyed).length,s=e.hand.filter(d=>!d.destroyed).length,l=e.auxiliary.filter(d=>!d.destroyed).length;if(t.push(`  ${n} [${a}]  位置(${e.position.row},${e.position.col}) 朝向${r}  败北=${e.isDefeated}`),t.push(`    牌库=${i}  手牌=${s}  辅助=${l}/${e.auxiliary.length}  弃牌=${e.discard.length}  破坏=${e.destroyedCards.length}  总存活=${i+s+l+e.discard.length+(e.plotSeg1&&!e.plotSeg1.destroyed?1:0)+(e.plotSeg2&&!e.plotSeg2.destroyed?1:0)}`),t.push(`    手牌: ${no(e.hand)}`),e.auxiliary.length>0&&t.push(`    辅助: ${no(e.auxiliary)}`),e.plotSeg1||e.plotSeg2){const d=e.plotSeg1?tl(e.plotSeg1):"—",u=e.plotSeg2?tl(e.plotSeg2):"—";t.push(`    布局: 段1=[${d}]  段2=[${u}]`)}return e.discard.length>0&&t.push(`    弃牌: ${no(e.discard)}`),e.destroyedCards.length>0&&t.push(`    破坏: ${no(e.destroyedCards)}`),t.join(`
`)}function yx(e,n){const t=r=>{const i=n.players[r],s=n.playerIds.indexOf(r);return`${s>=0?`P${s+1}`:r}[${i?Rn(i.unitId):r}]`},a=(r,i)=>{const s=n.players[i];return s?[...s.deck,...s.hand,...s.auxiliary,...s.discard,...s.destroyedCards,...s.plotSeg1?[s.plotSeg1]:[],...s.plotSeg2?[s.plotSeg2]:[]].find(d=>d.instanceId===r):void 0};switch(e.type){case"SELECT_UNIT":{const r=n.playerIds.indexOf(e.playerId);return`${r>=0?`P${r+1}`:e.playerId} 选择机体 ${Rn(e.unitId)}`}case"SELECT_MAP":return`选择地图 ${e.mapId}`;case"CONFIRM_SETUP":return"确认设置，开始对局";case"SET_SPAWN_POSITION":return`${t(e.playerId)} 设置出生点 (${e.position.row},${e.position.col})`;case"SET_SPAWN_FACING":return`${t(e.playerId)} 设置初始朝向 ${ca[e.facing]??e.facing}`;case"START_PLOTTING":return"战前准备结束，进入布局阶段";case"DRAW_CARDS":return`${t(e.playerId)} 抽牌 ${e.count} 张`;case"PLOT_CARD":{const r=a(e.instanceId,e.playerId);return`${t(e.playerId)} 布局段落${e.seg}: ${r?nl(r.defId):e.instanceId}`}case"CONFIRM_PLOT":return`${t(e.playerId)} 确认布局完成`;case"ADVANCE_PLOT_STEP":return"[系统] 布局步骤推进";case"MOVE_UNIT":{const r=n.players[e.playerId],i=r?`(${r.position.row},${r.position.col})`:"(?,?)",s=`(${e.to.row},${e.to.col})`,l=e.finalFacing?` 朝向→${ca[e.finalFacing]??e.finalFacing}`:"",d=e.path?` 路径[${e.path.map(u=>`(${u.row},${u.col})`).join("→")}]`:"";return`${t(e.playerId)} 移动 ${i}→${s}${l}${d}`}case"ADJUST_FACING":return`${t(e.playerId)} 调整朝向→${ca[e.facing]??e.facing}`;case"RESOLVE_RANGED":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动射击`;case"RESOLVE_MELEE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动近战`;case"RESOLVE_CHARGE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动突击`;case"PLACE_MINE":return`${t(e.playerId)} 在 (${e.to.row},${e.to.col}) 部署机雷 (伤害${e.damage})`;case"SELECT_DAMAGE_CARD":{const r=a(e.instanceId,e.playerId);return`${t(e.playerId)} 选择摧毁: ${r?nl(r.defId):e.instanceId}`}case"CONFIRM_DAMAGE_SELECTION":return`${t(e.playerId)} 确认伤害结算`;case"SKIP_ACTION":return"[系统] 跳过行动";case"ADVANCE_TIMING":return"[系统] 推进时序";case"ADVANCE_PHASE":return"[系统] 推进阶段";case"MELEE_SENSOR_MOVE":return`${t(e.playerId)} 近战传感器移动至 (${e.to.row},${e.to.col})`;case"RESET_GAME":return"[系统] 重置游戏";case"LOAD_GAME":return"[系统] 加载存档";case"ADD_LOG":return`[系统] ${e.message}`;default:return`[未知] ${e.type}`}}function _x(e,n){const t=[],a="═".repeat(72),r="─".repeat(72);t.push(a),t.push("EMBRYO MACHINE — 对局分析日志"),t.push(a),t.push(`生成时间: ${new Date().toISOString()}`),t.push(`地图: ${e.map.nameCn} (${e.map.id}) ${e.map.width}×${e.map.height}`),t.push(`P1: ${Rn(e.players.player1.unitId)} (${e.players.player1.unitId})`),t.push(`P2: ${Rn(e.players.player2.unitId)} (${e.players.player2.unitId})`),t.push(`总操作数: ${n.length}`),t.push(""),t.push("[地图地形]");const i={plain:"平",forest:"森",rubble:"瓦",water:"水",highland:"高",sand:"砂"};let s="     ";for(let _=0;_<e.map.width;_++)s+=`  ${String(_).padStart(2)} `;t.push(s);for(let _=0;_<e.map.height;_++){let b=`  ${String(_).padStart(2)} `;for(let g=0;g<e.map.width;g++){const y=e.map.cells[_][g],j=i[y.terrain]??"?",M=y.elevation>0?String(y.elevation):" ";b+=` ${j}${M} `}t.push(b)}t.push("  地形: 平=平地 森=森林 瓦=瓦砾 水=水域 高=高地 砂=砂地  数字=海拔"),t.push(""),t.push("[初始状态]"),t.push(`  阶段: ${eo[e.phase]??e.phase}  回合: ${e.roundNumber}`),t.push(to(e.players.player1,"P1")),t.push(to(e.players.player2,"P2")),e.mines.length>0&&t.push(`  机雷: ${e.mines.map(_=>`(${_.position.row},${_.position.col}) 所有者=${_.ownerId} 伤害=${_.damage}`).join("; ")}`),t.push("");let l=e,d=l.roundNumber,u=l.phase,p=l.currentTiming,f=0,x=l.log.length;for(let _=0;_<n.length;_++){const b=n[_],g=l;l=fn(l,b),f++,l.roundNumber!==d&&(t.push(""),t.push(a),t.push(`══ 第 ${l.roundNumber} 回合 ══`),t.push(a),d=l.roundNumber),l.phase!==u&&(t.push(""),t.push(r),t.push(`── ${eo[l.phase]??l.phase} ──`),t.push(r),u=l.phase,p=l.currentTiming),l.currentTiming!==p&&l.currentTiming&&(t.push(""),t.push(`  ◆ ${vx[l.currentTiming]??l.currentTiming}  先攻顺序: [${l.turnOrder.join(", ")}]`),p=l.currentTiming);const y=yx(b,g);t.push(`  #${String(f).padStart(4,"0")}  ${y}`);const j=l.log.slice(x);for(const S of j)t.push(`         │ ${S}`);if(x=l.log.length,l.pendingDamage&&!g.pendingDamage){const S=l.pendingDamage;t.push(`         ├─ [交互伤害] 目标=${S.targetId} 剩余=${S.remaining} 来源=${S.source}${S.attackerId?` 攻方=${S.attackerId}(瞄准指定)`:""}`)}const M=l.phase!==g.phase,E=l.roundNumber!==g.roundNumber,w=l.phase==="game_over"&&g.phase!=="game_over";(M||E||w)&&(t.push(""),t.push(`  [状态快照 #${f} | ${eo[l.phase]??l.phase}]`),t.push(to(l.players.player1,"P1")),t.push(to(l.players.player2,"P2")),l.mines.length>0&&t.push(`  机雷: ${l.mines.map(S=>`(${S.position.row},${S.position.col}) 所有者=${S.ownerId} 伤害=${S.damage}`).join("; ")}`))}t.push(""),t.push(a),t.push("══ 对局总结 ══"),t.push(a);const h=l,m=$d(h.players.player1),v=$d(h.players.player2);h.phase==="game_over"?h.players.player1.isDefeated&&h.players.player2.isDefeated?t.push("结果: 平局（双方同时击破）"):h.players.player1.isDefeated?t.push(`结果: P2[${Rn(h.players.player2.unitId)}] 获胜`):h.players.player2.isDefeated&&t.push(`结果: P1[${Rn(h.players.player1.unitId)}] 获胜`):t.push(`结果: 对局未结束 (当前阶段: ${eo[h.phase]??h.phase})`),t.push(`最终回合: ${h.roundNumber}`),t.push(`总操作数: ${n.length}`),t.push(""),t.push(`P1[${Rn(h.players.player1.unitId)}] 最终状态:`),t.push(`  存活卡牌: ${m}  破坏: ${h.players.player1.destroyedCards.length}  败北: ${h.players.player1.isDefeated}`),t.push(`  位置: (${h.players.player1.position.row},${h.players.player1.position.col}) 朝向: ${ca[h.players.player1.facing]}`),t.push(""),t.push(`P2[${Rn(h.players.player2.unitId)}] 最终状态:`),t.push(`  存活卡牌: ${v}  破坏: ${h.players.player2.destroyedCards.length}  败北: ${h.players.player2.isDefeated}`),t.push(`  位置: (${h.players.player2.position.row},${h.players.player2.position.col}) 朝向: ${ca[h.players.player2.facing]}`),t.push(""),t.push(r),t.push("[完整引擎日志]"),t.push(r);for(let _=0;_<h.log.length;_++)t.push(`  ${String(_+1).padStart(4,"0")}  ${h.log[_]}`);return t.push(""),t.push(a),t.push("日志结束"),t.push(a),t.join(`
`)}function $d(e){const n=t=>t.filter(a=>!a.destroyed).length;return n(e.deck)+n(e.hand)+n(e.auxiliary)+e.discard.length+(e.plotSeg1&&!e.plotSeg1.destroyed?1:0)+(e.plotSeg2&&!e.plotSeg2.destroyed?1:0)}const ji=k.createContext(null);function Df({children:e}){const[n,t]=k.useReducer(fn,void 0,Mf),[a,r]=k.useState(ex),[i,s]=k.useState(!0),[l,d]=k.useState(!1),u=k.useRef(n);u.current=n;const p=k.useRef([]),f=k.useRef(null),x=k.useRef(-1),h=k.useCallback(b=>{const g=u.current;if(b.type==="RESET_GAME"||b.type==="LOAD_GAME"){p.current=[],f.current=null,x.current=-1,t(b);return}if(b.type==="CONFIRM_SETUP"){const j=fn(g,b);p.current=[],f.current=j,t(b);return}p.current.push(b);const y=fn(g,b);if(t(b),i&&g.phase!=="draw"&&y.phase==="draw"&&y.roundNumber!==x.current){x.current=y.roundNumber;try{Ef("auto",y,a,!0)}catch{}}},[a,i]),m=Hh(h,u),v=k.useCallback(b=>q(b),[]),_=k.useCallback(()=>f.current?{initialState:f.current,actions:[...p.current]}:null,[]);return o.jsx(ji.Provider,{value:{state:n,dispatch:m,rawDispatch:h,getCard:v,aiConfig:a,setAIConfig:r,getReplayData:_,autoSaveEnabled:i,setAutoSaveEnabled:s,exposureMode:l,setExposureMode:d},children:e})}function Se(){const e=k.useContext(ji);if(!e)throw new Error("useGame must be used inside <GameProvider>");return e}function $r(){return Se().state}const Ix=[2,3,4,6,8];function kx(e){const n=[];for(let t=2;t<=e;t++)e%t===0&&n.push(t);return n}function jx({onNext:e,onBack:n,playerCount:t,setPlayerCount:a,teamCount:r,setTeamCount:i}){const{dispatch:s,rawDispatch:l}=Se(),d=k.useMemo(()=>dh(),[]),[u,p]=k.useState(d[0].id),f=k.useMemo(()=>kx(t),[t]),x=k.useMemo(()=>d.filter(v=>{if(v.maxPlayers<t||v.maxTeams<r)return!1;const _=Math.ceil(t/r);for(let b=0;b<r;b++){const g=v.startZones[b];if(!g||g.length<_)return!1}return!0}),[t,r,d]),h=k.useMemo(()=>d.find(v=>v.id===u)??d[0],[u,d]);k.useEffect(()=>{l({type:"RESET_GAME",playerCount:t,teamCount:r});const v=Math.ceil(t/r),_=d.filter(b=>{if(b.maxPlayers<t||b.maxTeams<r)return!1;for(let g=0;g<r;g++){const y=b.startZones[g];if(!y||y.length<v)return!1}return!0});_.length>0&&(p(_[0].id),s({type:"SELECT_MAP",mapId:_[0].id}))},[t,r]),k.useEffect(()=>{f.includes(r)||i(f[0])},[f,r,i]),k.useEffect(()=>{x.length>0&&!x.find(v=>v.id===u)&&m(x[0].id)},[x]);function m(v){v!==u&&(p(v),s({type:"SELECT_MAP",mapId:v}))}return o.jsxs("div",{className:"msel-screen",children:[o.jsx("button",{className:"msel-back-btn",onClick:n,children:"← 返回主菜单"}),o.jsx("h1",{className:"msel-title",children:"Embryo Machine"}),o.jsx("p",{className:"msel-subtitle",children:"选择地图"}),o.jsxs("section",{className:"msel-section",children:[o.jsx("h2",{children:"游戏配置"}),o.jsxs("div",{className:"msel-config-row",children:[o.jsxs("label",{className:"msel-config-label",children:["玩家人数",o.jsx("select",{className:"msel-config-select",value:t,onChange:v=>a(Number(v.target.value)),children:Ix.map(v=>o.jsxs("option",{value:v,children:[v,"人"]},v))})]}),o.jsxs("label",{className:"msel-config-label",children:["队伍数量",o.jsx("select",{className:"msel-config-select",value:r,onChange:v=>i(Number(v.target.value)),children:f.map(v=>o.jsxs("option",{value:v,children:[v,"队 (",t/v,"人/队)"]},v))})]})]})]}),o.jsxs("section",{className:"msel-section",children:[o.jsx("h2",{children:"地图"}),o.jsx("div",{className:"msel-map-list",children:x.map(v=>o.jsxs("button",{className:`msel-map-btn ${u===v.id?"msel-map-btn--active":""}`,onClick:()=>m(v.id),children:[v.nameCn," ",v.id.startsWith("custom_")?"✦":"",o.jsxs("span",{className:"msel-map-btn__size",children:[v.height,"×",v.width," · ≤",v.maxPlayers,"人"]})]},v.id))})]}),o.jsxs("section",{className:"msel-preview",children:[o.jsx("div",{className:"msel-preview__grid-wrap",children:o.jsx("div",{className:"msel-preview__grid",style:{display:"grid",gridTemplateColumns:`repeat(${h.width}, 1fr)`,gap:"1px"},children:h.cells.flat().map((v,_)=>{const b=Math.floor(_/h.width),g=_%h.width,y=Object.values(h.startZones).some(j=>j.some(M=>M.row===b&&M.col===g));return o.jsx("div",{className:`msel-cell msel-cell--${v.terrain}${v.elevation>0?" msel-cell--elev":""}${y?" msel-cell--start":""}`,title:`${v.terrain}${v.elevation>0?` +${v.elevation}`:""}${y?" (起始点)":""}`},_)})})}),o.jsxs("div",{className:"msel-preview__info",children:[o.jsx("span",{className:"msel-preview__name",children:h.nameCn}),o.jsxs("span",{className:"msel-preview__meta",children:[h.height,"×",h.width," · 最多",h.maxPlayers,"人 · ",h.maxTeams,"队"]}),o.jsxs("div",{className:"msel-preview__legend",children:[o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--plain"}),"平地"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--sand"}),"沙地"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--rubble"}),"废墟"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--forest"}),"森林"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--water"}),"水域"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--highland"}),"高地"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--start"}),"起点"]})]})]})]}),o.jsx("button",{className:"msel-next-btn",onClick:e,children:"下一步 →"}),o.jsx("style",{children:wx})]})}const wx=`
.msel-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 32px 16px 48px;
  min-height: 100%;
  background: var(--color-bg);
  overflow-y: auto;
  position: relative;
}

.msel-back-btn {
  position: absolute;
  top: 24px;
  left: 24px;
  background: none;
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  font-size: 0.85rem;
  padding: 6px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
}
.msel-back-btn:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.msel-title {
  font-size: 2.5rem;
  letter-spacing: 0.05em;
  color: var(--color-accent);
  text-shadow: var(--glow-accent);
  margin: 0;
}

.msel-subtitle {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin: -16px 0 0;
}

.msel-section h2 {
  text-align: center;
  margin-bottom: 12px;
  color: var(--color-text-muted);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.msel-config-row {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
}

.msel-config-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  color: var(--color-text);
}

.msel-config-select {
  background: var(--color-bg-panel);
  border: 1px solid var(--color-accent);
  color: var(--color-accent);
  font-size: 0.85rem;
  padding: 4px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.msel-map-list {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}

.msel-map-btn {
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
.msel-map-btn:hover { border-color: var(--color-accent); }
.msel-map-btn--active {
  border-color: var(--color-accent);
  background: var(--color-bg-card);
}
.msel-map-btn__size {
  font-size: 0.65rem;
  color: var(--color-text-muted);
}

/* ── Map preview ── */
.msel-preview {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  background: var(--color-bg-panel);
  min-width: 240px;
  max-width: 400px;
  width: 100%;
}

.msel-preview__grid-wrap {
  width: 100%;
  max-height: 300px;
  overflow: hidden;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg);
  padding: 4px;
}

.msel-preview__grid {
  width: 100%;
  max-width: 280px;
}

.msel-cell {
  aspect-ratio: 1;
  border-radius: 2px;
  min-width: 4px;
  min-height: 4px;
}
.msel-cell--plain   { background: #4a6741; }
.msel-cell--sand    { background: #c2a94e; }
.msel-cell--rubble  { background: #7a6b5d; }
.msel-cell--forest  { background: #2d5a1e; }
.msel-cell--water   { background: #3a7fba; }
.msel-cell--highland { background: #4a6741; }
.msel-cell--elev    { filter: brightness(1.3); }
.msel-cell--start   { box-shadow: inset 0 0 0 2px var(--color-accent); }

/* ── Legend ── */
.msel-preview__legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-top: 4px;
}
.msel-legend {
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 0.65rem;
  color: var(--color-text-muted);
}
.msel-legend__dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 2px;
}
.msel-legend__dot--plain   { background: #4a6741; }
.msel-legend__dot--sand    { background: #c2a94e; }
.msel-legend__dot--rubble  { background: #7a6b5d; }
.msel-legend__dot--forest  { background: #2d5a1e; }
.msel-legend__dot--water   { background: #3a7fba; }
.msel-legend__dot--highland { background: #4a6741; filter: brightness(1.3); }
.msel-legend__dot--start   { background: transparent; box-shadow: inset 0 0 0 2px var(--color-accent); }

.msel-preview__info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.msel-preview__name {
  font-size: 1rem;
  font-weight: bold;
  color: var(--color-text);
}

.msel-preview__meta {
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

.msel-next-btn {
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
.msel-next-btn:hover { opacity: 0.85; }

/* ═══════════════════════════════════════════════════════
   Mobile Responsive Overrides
   ═══════════════════════════════════════════════════════ */
@media (max-width: 768px) {
  .msel-screen {
    padding: 20px 12px 40px;
    gap: 16px;
  }

  .msel-back-btn {
    position: static;
    align-self: flex-start;
    margin-bottom: -8px;
    min-height: 44px;
  }

  .msel-title {
    font-size: 1.6rem;
  }

  .msel-subtitle {
    font-size: 0.7rem;
    margin-top: -10px;
  }

  .msel-config-row {
    gap: 12px;
  }

  .msel-config-select {
    min-height: 44px;
    padding: 6px 14px;
  }

  .msel-map-btn {
    padding: 10px 16px;
    min-height: 44px;
    min-width: 44px;
  }

  .msel-preview {
    max-width: 100%;
    padding: 12px;
  }

  .msel-preview__grid-wrap {
    max-height: 220px;
  }

  .msel-next-btn {
    padding: 16px 32px;
    font-size: 1rem;
    min-height: 48px;
    width: 100%;
    max-width: 300px;
  }
}
`,Sx={gameTitle:"Embryo Machine",statMovement:"移动力",statEvasion:"回避值",statAssault:"突击",statAssaultDef:"被突击",statInitiative:"先制值"},Mn=[["#00f0ff","#00c8e0","#40e8ff","#80f0ff"],["#ff00c8","#ff44aa","#e040d0","#ff77dd"],["#00cc88","#44dd66","#00aa6e","#66eebb"],["#ff8800","#ffaa33","#e07000","#ffcc66"],["#6688ff","#4466ee","#88aaff","#3355dd"],["#cc44ff","#aa22dd","#dd77ff","#bb00ee"],["#44dddd","#22bbbb","#66eeee","#00ccbb"],["#ff4466","#dd2244","#ff6688","#ee0033"]];function uc(e,n){const t=e.teams[n]??0,a=Mn[t%Mn.length],i=e.playerIds.filter(s=>e.teams[s]===t).indexOf(n);return a[Math.max(0,i)%a.length]}const Kt=Sx;function Cx({onNext:e,onBack:n,autoFill:t=!1}){const{state:a,dispatch:r,setAIConfig:i,setExposureMode:s}=Se(),[l,d]=k.useState({}),[u,p]=k.useState({}),[f,x]=k.useState({}),h=a.playerIds.length,m=a.teamCount,v=k.useMemo(()=>la.slice(0,h),[h]);function _(N,$){r({type:"SELECT_UNIT",playerId:N,unitId:$}),x(T=>({...T,[N]:!0}))}function b(N,$){d(T=>({...T,[N]:$}))}function g(N,$){p(T=>({...T,[N]:$}))}const y=v.map(N=>{var $;return(($=a.players[N])==null?void 0:$.unitId)??""}),j=y.every(N=>N!==""),M=new Set(y.filter(N=>N!=="")).size===y.filter(N=>N!=="").length,E=v.filter(N=>f[N]).map(N=>{var $;return(($=a.players[N])==null?void 0:$.unitId)??""}).filter(N=>N!==""),w=new Set(E).size===E.length,S=t?w:j&&M,A={};for(let N=0;N<v.length;N++){const $=N%m;A[$]||(A[$]=[]),A[$].push(v[N])}return o.jsxs("div",{className:"setup-screen",children:[o.jsx("button",{className:"setup-back-btn",onClick:n,children:"← 上一步"}),o.jsx("h1",{className:"setup-title",children:Kt.gameTitle}),o.jsx("p",{className:"setup-subtitle",children:"选择机体"}),o.jsx("div",{className:"setup-teams",children:Object.entries(A).map(([N,$])=>o.jsxs("div",{className:"setup-team",children:[o.jsxs("h3",{className:"team-header",style:{color:Mn[Number(N)%Mn.length][0]},children:["队伍 ",Number(N)+1]}),o.jsx("div",{className:"setup-players",children:$.map((T,D)=>{var P;const K=la.indexOf(T),U=Mn[Number(N)%Mn.length],z=U[D%U.length],J=((P=a.players[T])==null?void 0:P.unitId)??"",L=y.filter((H,O)=>O!==v.indexOf(T)&&H);return o.jsxs("div",{className:"setup-player-col",children:[o.jsx(Nx,{label:`P${K+1}`,selectedUnit:J,blockedUnits:L,accentColor:z,onSelect:H=>_(T,H)}),o.jsxs("div",{className:"ai-control",children:[o.jsxs("label",{className:"ai-control__label",children:[o.jsx("input",{type:"checkbox",checked:l[T]??!1,onChange:H=>b(T,H.target.checked)}),"AI控制"]}),l[T]&&o.jsxs("select",{className:"ai-control__difficulty",value:u[T]??"hard",onChange:H=>g(T,H.target.value),children:[o.jsx("option",{value:"easy",children:"简单"}),o.jsx("option",{value:"hard",children:"困难"})]})]})]},T)})})]},N))}),o.jsx("button",{className:"start-btn",onClick:()=>{const N=new Set(v.filter(P=>f[P]).map(P=>{var H;return((H=a.players[P])==null?void 0:H.unitId)??""}).filter(P=>P!=="")),T=[...Q.map(P=>P.id).filter(P=>!N.has(P))];for(let P=T.length-1;P>0;P--){const H=Math.floor(Math.random()*(P+1));[T[P],T[H]]=[T[H],T[P]]}const D={...l},K={...u};let U=0;for(const P of v)t&&!f[P]&&U<T.length&&(r({type:"SELECT_UNIT",playerId:P,unitId:T[U]}),U++,D[P]=!0,K[P]="hard");const z={},J={};for(const P of v)z[P]=D[P]??!1,J[P]=K[P]??"hard";i({player1:z.player1??!1,player2:z.player2??!1,player1Difficulty:J.player1??"hard",player2Difficulty:J.player2??"hard",playerAI:z,playerDifficulty:J}),v.every(P=>z[P])&&s(!0),e()},disabled:!S,title:S?"":"请为所有玩家分别选择不同的机体",children:"下一步 →"}),!S&&o.jsx("p",{className:"setup-hint",children:t?"手动选择的机体之间不可重复":j?"每位玩家须选择不同的机体":"请为所有玩家各选择一台机体"}),o.jsx("style",{children:Ex})]})}function Nx({label:e,selectedUnit:n,blockedUnits:t,accentColor:a,onSelect:r}){return o.jsxs("div",{className:"unit-picker",children:[o.jsx("h2",{className:"unit-picker__title",style:{color:a},children:e}),o.jsx("div",{className:"unit-grid",children:Q.map(i=>{const s=t.includes(i.id);return o.jsx(Mx,{unit:i,isSelected:i.id===n,isBlocked:s,accentColor:a,onSelect:()=>!s&&r(i.id)},i.id)})}),n&&o.jsx(Tx,{unit:Q.find(i=>i.id===n),accentColor:a})]})}function Mx({unit:e,isSelected:n,isBlocked:t,accentColor:a,onSelect:r}){return o.jsxs("button",{className:`unit-card ${n?"unit-card--selected":""} ${t?"unit-card--blocked":""}`,onClick:r,disabled:t,title:t?"该机体已被其他玩家选择":e.nameCn,style:n?{borderColor:a,boxShadow:`0 0 8px ${a}55`}:{},children:[o.jsx("img",{src:`/assets/tokens/${e.tokenId}`,alt:e.nameCn,className:"unit-card__token",onError:i=>{i.target.style.opacity="0.3"}}),o.jsx("span",{className:"unit-card__name",children:e.nameCn}),o.jsxs("span",{className:"unit-card__init",children:["先制 ",e.initiative]})]})}function Tx({unit:e,accentColor:n}){return o.jsxs("div",{className:"unit-stats",children:[o.jsxs("div",{className:"unit-stats__name",children:[e.nameCn," ",o.jsxs("small",{children:["(",e.nameJa,")"]})]}),o.jsx("div",{className:"unit-stats__type",children:e.type}),o.jsxs("div",{className:"unit-stats__grid",children:[o.jsx(Va,{label:Kt.statMovement,value:e.movement,color:n}),o.jsx(Va,{label:Kt.statEvasion,value:e.evasion,color:n}),o.jsx(Va,{label:Kt.statAssault,value:e.assault,color:n}),o.jsx(Va,{label:Kt.statAssaultDef,value:e.assaultDef,color:n}),o.jsx(Va,{label:Kt.statInitiative,value:e.initiative,color:n})]})]})}function Va({label:e,value:n,color:t}){return o.jsxs("div",{className:"stat",children:[o.jsx("span",{className:"stat__label",children:e}),o.jsx("span",{className:"stat__value",style:{color:t},children:n})]})}const Ex=`
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

.setup-back-btn {
  align-self: flex-start;
  padding: 8px 20px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-panel);
  color: var(--color-text-muted);
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: border-color 0.2s, color 0.2s;
}
.setup-back-btn:hover {
  border-color: var(--color-accent);
  color: var(--color-text);
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

  .setup-back-btn {
    min-height: 44px;
    padding: 10px 20px;
  }
}
`,Ad=768;function wi(){const[e,n]=k.useState(()=>typeof window<"u"&&window.innerWidth<=Ad);return k.useEffect(()=>{const t=window.matchMedia(`(max-width: ${Ad}px)`),a=r=>n(r.matches);return t.addEventListener("change",a),n(t.matches),()=>t.removeEventListener("change",a)},[]),e}const An=18;function je({id:e,title:n,initialPos:t,width:a=300,height:r,minHeight:i=80,children:s,zIndex:l=10,defaultMinimized:d=!1,onFocus:u,siblingRects:p=[]}){const f=wi(),[x,h]=k.useState(t),[m,v]=k.useState(d),_=k.useRef(null),b=k.useRef(!1);k.useEffect(()=>{b.current||(b.current=!0,h(t))},[]);const g=k.useCallback(y=>{if(f||y.button!==0)return;y.preventDefault(),u==null||u(e);const j=y.clientX-x.x,M=y.clientY-x.y,E=S=>{var z;let A=S.clientX-j,N=S.clientY-M;const $=window.innerWidth,T=window.innerHeight,D=(z=_.current)==null?void 0:z.getBoundingClientRect(),K=(D==null?void 0:D.width)??a,U=(D==null?void 0:D.height)??40;A<An&&(A=0),N<An&&(N=0),A+K>$-An&&(A=$-K),N+U>T-An&&(N=T-U);for(const J of p)Math.abs(A+K-J.left)<An&&(A=J.left-K),Math.abs(A-J.right)<An&&(A=J.right),Math.abs(N+U-J.top)<An&&(N=J.top-U),Math.abs(N-J.bottom)<An&&(N=J.bottom),Math.abs(N-J.top)<An&&(N=J.top);h({x:Math.max(0,A),y:Math.max(0,N)})},w=()=>{document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",w)},[e,x,u,p,a,f]);return f?o.jsxs("div",{ref:_,className:`dp dp--mobile ${m?"dp--min":""}`,onClick:()=>u==null?void 0:u(e),children:[o.jsxs("div",{className:"dp__bar dp__bar--mobile",onClick:()=>v(y=>!y),children:[o.jsx("span",{className:"dp__title",children:n}),o.jsx("span",{className:"dp__min-btn dp__min-btn--mobile",children:m?"▼":"▲"})]}),!m&&o.jsx("div",{className:"dp__body dp__body--mobile",children:s}),o.jsx("style",{children:Pd})]}):o.jsxs("div",{ref:_,className:`dp ${m?"dp--min":""}`,style:{left:x.x,top:x.y,width:a,height:m?void 0:r,minHeight:m?0:i,zIndex:l},onMouseDown:()=>u==null?void 0:u(e),children:[o.jsxs("div",{className:"dp__bar",onMouseDown:g,children:[o.jsx("span",{className:"dp__title",children:n}),o.jsx("button",{className:"dp__min-btn",onMouseDown:y=>y.stopPropagation(),onClick:()=>v(y=>!y),title:m?"展开":"最小化",children:m?"▢":"▬"})]}),!m&&o.jsx("div",{className:"dp__body",children:s}),o.jsx("style",{children:Pd})]})}const Pd=`
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
`,ea=48,Dx=[{facing:"N",label:"↑N",title:"朝北"},{facing:"S",label:"↓S",title:"朝南"},{facing:"E",label:"→E",title:"朝东"},{facing:"W",label:"←W",title:"朝西"}],Vd=.25,zx=2,Ld=.1;function $x({onBack:e}){const{state:n,dispatch:t}=Se(),a=Ze.find(O=>O.id===n.map.id)??n.map,r=n.playerIds,i=a.width,s=a.height,l=k.useRef(null),[d,u]=k.useState({x:0,y:0,scale:1}),p=k.useRef(null),f=k.useRef(!1);k.useEffect(()=>{const O=l.current;if(!O)return;const R=O.clientWidth,Y=O.clientHeight,X=i*ea,oe=s*ea;if(!R||!Y)return;const ie=Math.min(R/X,Y/oe),de=Math.max(Vd,Math.min(1.2,ie)),ye=(R-X*de)/2,xn=(Y-oe*de)/2;u({x:ye,y:xn,scale:de})},[i,s]),k.useEffect(()=>{const O=l.current;if(!O)return;const R=Y=>{Y.preventDefault();const X=Y.deltaY<0?Ld:-Ld;u(oe=>({...oe,scale:Math.min(zx,Math.max(Vd,oe.scale+X))}))};return O.addEventListener("wheel",R,{passive:!1}),()=>O.removeEventListener("wheel",R)},[]);const x=k.useCallback(O=>{O.button===0&&(p.current={startX:O.clientX,startY:O.clientY,origX:d.x,origY:d.y},f.current=!1)},[d.x,d.y]),h=k.useCallback(O=>{if(!p.current)return;const R=O.clientX-p.current.startX,Y=O.clientY-p.current.startY;!f.current&&Math.sqrt(R*R+Y*Y)>5&&(f.current=!0),f.current&&u(X=>({...X,x:p.current.origX+R,y:p.current.origY+Y}))},[]),m=k.useCallback(()=>{p.current=null,f.current=!1},[]),v=k.useMemo(()=>Object.keys(a.startZones).map(Number).sort((O,R)=>O-R),[a]),[_,b]=k.useState(()=>{const O={};for(let R=0;R<n.teamCount;R++)O[R]=R;return O});k.useEffect(()=>{const O={};for(let R=0;R<n.teamCount;R++)O[R]=R;b(O)},[a.id,n.teamCount]);function g(O,R){b(Y=>{const X=Object.entries(Y).find(([,ie])=>ie===R),oe={...Y,[O]:R};return X&&(oe[Number(X[0])]=Y[O]),oe})}const y=k.useMemo(()=>{const O=new Map;for(let R=0;R<n.teamCount;R++){const Y=_[R]??R,X=a.startZones[Y];if(X)for(const oe of X){const ie=`${oe.row},${oe.col}`,de=O.get(ie)??[];de.push(R),O.set(ie,de)}}return O},[a,n.teamCount,_]),j=k.useMemo(()=>{const O={};for(const R of r){const Y=n.teams[R];O[Y]||(O[Y]=[]),O[Y].push(R)}return O},[r,n.teams]),[M,E]=k.useState(r[0]),[w,S]=k.useState(""),A=k.useMemo(()=>{for(const O of r){const R=n.players[O];if(!R)return!1;const Y=n.teams[O],X=_[Y]??Y,oe=a.startZones[X];if(!oe||!oe.some(de=>de.row===R.position.row&&de.col===R.position.col))return!1}return!0},[r,n.players,n.teams,_,a]);function N(O,R){t({type:"SET_SPAWN_POSITION",playerId:O,position:R})}function $(O,R){t({type:"SET_SPAWN_FACING",playerId:O,facing:R})}function T(){A&&t({type:"CONFIRM_SETUP"})}function D(O){return uc(n,O)}function K(O){var Y;const R=(Y=j[O])==null?void 0:Y[0];return R?D(R):Mn[O%Mn.length][0]}const U=k.useMemo(()=>{const O=new Map;for(const R of r){const Y=n.players[R];if(!Y)continue;const X=Q.find(de=>de.id===Y.unitId);if(!X)continue;const oe=`${Y.position.row},${Y.position.col}`,ie=O.get(oe)??[];ie.push({pid:R,color:D(R),tokenId:X.tokenId,name:X.nameCn}),O.set(oe,ie)}return O},[r,n.players]),{x:z,y:J,scale:L}=d,P=220,H=k.useMemo(()=>{const O={},ie=Math.floor((window.innerHeight-56-60)/192);return r.forEach((de,ye)=>{const xn=Math.floor(ye/ie),$n=ye%ie;O[de]={x:window.innerWidth-(P+16)*(xn+1),y:56+$n*192}}),O},[r]);return o.jsxs("div",{className:"ssm__screen",children:[o.jsxs("div",{className:"ssm__topbar",children:[o.jsx("button",{className:"ssm__back-btn",onClick:e,children:"← 返回"}),o.jsx("span",{className:"ssm__title",children:"选择出击位置"}),o.jsxs("span",{className:"ssm__map-name",children:[a.nameCn," (",s,"×",i,")"]}),o.jsx("span",{style:{flex:1}}),o.jsx("button",{className:`ssm__start-btn${A?"":" ssm__start-btn--disabled"}`,onClick:T,disabled:!A,title:A?"开始战斗":"所有玩家必须先选择出击位置",children:"战斗开始 ▶"})]}),o.jsx("div",{className:"ssm__viewport",ref:l,onMouseDown:x,onMouseMove:h,onMouseUp:m,onMouseLeave:m,children:o.jsx("div",{className:"ssm__map-inner",style:{transform:`translate(${z}px, ${J}px) scale(${L})`,transformOrigin:"top left",display:"grid",gridTemplateColumns:`repeat(${i}, ${ea}px)`,gridTemplateRows:`repeat(${s}, ${ea}px)`},children:a.cells.flatMap((O,R)=>O.map((Y,X)=>{const oe=rc(Y),ie=`${R},${X}`,de=y.get(ie)??[],ye=U.get(ie)??[],xn=de.length>0,$n=de.length>0?K(de[0]):"",Na=n.teams[M],At=xn&&de.includes(Na);let te="ssm__cell";xn&&(te+=" ssm__cell--zone"),At&&(te+=" ssm__cell--placeable"),ye.length>0&&(te+=" ssm__cell--selected");function Ie(ee){f.current||(ee.stopPropagation(),At&&N(M,{row:R,col:X}))}return o.jsxs("div",{className:te,style:{backgroundImage:`url("${oe}")`,...xn?{borderColor:$n,boxShadow:ye.length>0?`inset 0 0 10px ${$n}66, 0 0 6px ${$n}44`:void 0}:{}},onClick:At?Ie:void 0,children:[ye.length===1&&o.jsx("div",{className:"ssm__token",children:o.jsx("img",{src:`/assets/tokens/${ye[0].tokenId}`,alt:ye[0].name,style:{boxShadow:`0 0 6px ${ye[0].color}`},onError:ee=>{ee.target.style.opacity="0.3"}})}),ye.length>1&&o.jsx("div",{className:"ssm__token ssm__token--multi",children:ye.map(ee=>o.jsx("img",{src:`/assets/tokens/${ee.tokenId}`,alt:ee.name,className:"ssm__token-img-sm",style:{boxShadow:`0 0 4px ${ee.color}`},onError:Pe=>{Pe.target.style.opacity="0.3"}},ee.pid))})]},ie)}))})}),r.map((O,R)=>{var Ie;const Y=n.players[O],X=Q.find(ee=>ee.id===(Y==null?void 0:Y.unitId)),oe=D(O),ie=w===O,de=M===O,ye=n.teams[O],xn=((Ie=j[ye])==null?void 0:Ie[0])===O,$n=_[ye]??ye,Na=_[ye]??ye,te=(a.startZones[Na]??[]).some(ee=>ee.row===Y.position.row&&ee.col===Y.position.col);return o.jsx(je,{id:`spawn-${O}`,title:`P${R+1} ${(X==null?void 0:X.nameCn)??"—"}`,initialPos:H[O]??{x:100,y:100},width:P,minHeight:60,zIndex:ie?50:10+R,onFocus:()=>{S(O),E(O)},children:o.jsxs("div",{className:`ssm__player-card${de?" ssm__player-card--active":""}`,style:{borderTop:`2px solid ${oe}`},onClick:()=>E(O),children:[o.jsxs("div",{className:"ssm__player-label",style:{color:oe},children:["P",R+1," ",de?"◄ 放置中":""," ",te?"✓":""]}),xn&&o.jsx("div",{className:"ssm__zone-select",children:o.jsxs("label",{children:["出击区域:",o.jsx("select",{value:$n,onChange:ee=>g(ye,Number(ee.target.value)),onClick:ee=>ee.stopPropagation(),children:v.slice(0,a.maxTeams).map(ee=>o.jsxs("option",{value:ee,children:["区域 ",ee+1]},ee))})]})}),o.jsx("div",{className:"ssm__unit-name",children:(X==null?void 0:X.nameCn)??"—"}),o.jsxs("div",{className:"ssm__pos-display",children:["格 (",Y.position.row,", ",Y.position.col,")"]}),o.jsx("div",{className:"ssm__facing-grid",children:Dx.map(({facing:ee,label:Pe,title:Ue})=>{const Wn=Y.facing===ee;return o.jsx("button",{className:`ssm__facing-btn${Wn?" ssm__facing-btn--active":""}`,style:Wn?{borderColor:oe,color:oe}:void 0,title:Ue,onClick:()=>$(O,ee),children:Pe},ee)})})]})},O)}),o.jsx("style",{children:Ax})]})}const Ax=`
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
  width: ${ea}px;
  height: ${ea}px;
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
`;function Px({onStart:e,onOnlinePlay:n,onViewRules:t,onViewData:a,onLoadGame:r,onReplay:i,onMapEditor:s,onSettings:l}){return o.jsxs("div",{className:"hs-screen",children:[o.jsxs("div",{className:"hs-center",children:[o.jsx("h1",{className:"hs-title",children:"Embryo Machine"}),o.jsx("p",{className:"hs-subtitle",children:"战棋机甲对战游戏"}),o.jsx("div",{className:"hs-divider"}),o.jsx("button",{className:"hs-btn hs-btn--primary",onClick:e,children:"▶ 开始游戏"}),o.jsx("button",{className:"hs-btn hs-btn--online",onClick:n,children:"联机对战"}),o.jsx("button",{className:"hs-btn hs-btn--secondary",onClick:r,children:"📂 加载存档"}),o.jsx("button",{className:"hs-btn hs-btn--secondary",onClick:i,children:"🎬 回放录像"}),o.jsx("div",{className:"hs-divider hs-divider--sm"}),o.jsxs("div",{className:"hs-links",children:[o.jsx("button",{className:"hs-link-btn",onClick:l,children:"⚙ 设置"}),o.jsx("button",{className:"hs-link-btn",onClick:s,children:"🗺️ 地图编辑器"}),o.jsx("button",{className:"hs-link-btn",onClick:t,children:"📖 游戏规则"}),o.jsx("button",{className:"hs-link-btn",onClick:a,children:"📊 游戏资料"})]})]}),o.jsx("style",{children:Vx})]})}const Vx=`
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
  flex-wrap: wrap;
  justify-content: center;
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
}
`;function Lx({onBack:e,soundEnabled:n,onToggleSound:t,soundVolume:a,onVolumeChange:r,exposureMode:i,onToggleExposure:s,autoFill:l,onToggleAutoFill:d,onCacheAssets:u}){return o.jsxs("div",{className:"set-screen",children:[o.jsxs("div",{className:"set-center",children:[o.jsxs("div",{className:"set-header",children:[o.jsx("button",{className:"set-back",onClick:e,children:"← 返回"}),o.jsx("h1",{className:"set-title",children:"设置"})]}),o.jsx("div",{className:"set-divider"}),o.jsxs("div",{className:"set-section",children:[o.jsx("h2",{className:"set-section__title",children:"音效设置"}),o.jsxs("label",{className:"set-toggle",onClick:t,children:[o.jsx("span",{className:`set-toggle__switch${n?" set-toggle__switch--on":""}`,children:o.jsx("span",{className:"set-toggle__knob"})}),o.jsx("span",{className:"set-toggle__label",children:"音效"}),o.jsx("span",{className:"set-toggle__hint",children:n?"已开启":"关闭"})]}),n&&o.jsxs("div",{className:"set-slider-row",children:[o.jsx("span",{className:"set-slider-row__label",children:"音量"}),o.jsx("input",{className:"set-slider",type:"range",min:0,max:100,value:Math.round(a*100),onChange:p=>r(Number(p.target.value)/100)}),o.jsxs("span",{className:"set-slider-row__value",children:[Math.round(a*100),"%"]})]})]}),o.jsx("div",{className:"set-divider set-divider--sm"}),o.jsxs("div",{className:"set-section",children:[o.jsx("h2",{className:"set-section__title",children:"游戏设置"}),o.jsxs("label",{className:"set-toggle",onClick:s,children:[o.jsx("span",{className:`set-toggle__switch${i?" set-toggle__switch--on":""}`,children:o.jsx("span",{className:"set-toggle__knob"})}),o.jsx("span",{className:"set-toggle__label",children:"暴露模式"}),o.jsx("span",{className:"set-toggle__hint",children:i?"已开启：所有隐藏卡牌将显示正面":"关闭"})]}),o.jsxs("label",{className:"set-toggle",onClick:d,children:[o.jsx("span",{className:`set-toggle__switch${l?" set-toggle__switch--on":""}`,children:o.jsx("span",{className:"set-toggle__knob"})}),o.jsx("span",{className:"set-toggle__label",children:"自动补位"}),o.jsx("span",{className:"set-toggle__hint",children:l?"已开启：空位自动随机选机由AI控制":"关闭"})]})]}),o.jsx("div",{className:"set-divider set-divider--sm"}),o.jsxs("div",{className:"set-section",children:[o.jsx("h2",{className:"set-section__title",children:"资源管理"}),o.jsx("button",{className:"set-btn set-btn--secondary",onClick:u,children:"缓存全部资源"}),o.jsx("p",{className:"set-hint",children:"一次性加载所有卡牌、地形等图片资源"})]})]}),o.jsx("style",{children:Rx})]})}const Rx=`
.set-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: var(--color-bg);
  padding: 32px 16px;
}

.set-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 400px;
}

/* ── Header ── */
.set-header {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
}

.set-back {
  padding: 6px 14px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-panel);
  color: var(--color-text-muted);
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85rem;
  font-family: var(--font-mono);
  transition: border-color 0.2s, color 0.2s;
  flex-shrink: 0;
}
.set-back:hover {
  border-color: var(--color-accent);
  color: var(--color-text);
}

.set-title {
  font-size: 1.6rem;
  letter-spacing: 0.05em;
  color: var(--color-accent);
  text-shadow: var(--glow-accent);
  margin: 0;
}

/* ── Divider ── */
.set-divider {
  width: 100%;
  height: 1px;
  background: var(--color-border);
  margin: 4px 0;
}
.set-divider--sm {
  width: 60%;
  margin: 0;
}

/* ── Section ── */
.set-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.set-section__title {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  font-family: var(--font-mono);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0 0 4px 0;
}

/* ── Toggle ── */
.set-toggle {
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
.set-toggle:hover {
  border-color: var(--color-accent);
}

.set-toggle__switch {
  position: relative;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  background: #444;
  transition: background 0.2s;
  flex-shrink: 0;
}
.set-toggle__switch--on {
  background: var(--color-accent);
}
.set-toggle__knob {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #fff;
  transition: left 0.2s;
}
.set-toggle__switch--on .set-toggle__knob {
  left: 18px;
}

.set-toggle__label {
  font-size: 0.85rem;
  color: var(--color-text);
  font-weight: bold;
}
.set-toggle__hint {
  font-size: 0.72rem;
  color: var(--color-text-muted);
  margin-left: auto;
}

/* ── Slider ── */
.set-slider-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  background: var(--color-bg-panel);
}

.set-slider-row__label {
  font-size: 0.85rem;
  color: var(--color-text);
  font-weight: bold;
  flex-shrink: 0;
}

.set-slider-row__value {
  font-size: 0.8rem;
  color: var(--color-accent);
  font-family: var(--font-mono);
  min-width: 38px;
  text-align: right;
  flex-shrink: 0;
}

.set-slider {
  flex: 1;
  -webkit-appearance: none;
  appearance: none;
  height: 4px;
  border-radius: 2px;
  background: #444;
  outline: none;
  cursor: pointer;
}
.set-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--color-accent);
  cursor: pointer;
  border: none;
  box-shadow: 0 0 6px rgba(0, 240, 255, 0.4);
}
.set-slider::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--color-accent);
  cursor: pointer;
  border: none;
  box-shadow: 0 0 6px rgba(0, 240, 255, 0.4);
}

/* ── Button ── */
.set-btn {
  width: 100%;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: bold;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
  border: none;
}

.set-btn--secondary {
  background: var(--color-bg-panel);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  font-weight: normal;
}
.set-btn--secondary:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

/* ── Hint ── */
.set-hint {
  font-size: 0.72rem;
  color: var(--color-text-muted);
  margin: -4px 0 0 0;
  text-align: center;
}

/* ═══════════════════════════════════════════════════════
   Mobile Responsive Overrides
   ═══════════════════════════════════════════════════════ */
@media (max-width: 768px) {
  .set-title {
    font-size: 1.3rem;
  }

  .set-toggle {
    padding: 10px 14px;
  }

  .set-toggle__hint {
    font-size: 0.68rem;
  }

  .set-slider-row {
    padding: 10px 14px;
  }

  .set-btn {
    padding: 14px 24px;
    min-height: 48px;
  }

  .set-back {
    padding: 10px 14px;
    min-height: 44px;
  }
}
`;function Ox({phase:e,loaded:n,total:t,onConfirm:a,onSkip:r}){const i=t>0?Math.round(n/t*100):0,s=n>=t&&t>0;return o.jsxs("div",{className:"apd-overlay",children:[o.jsxs("div",{className:"apd-box",children:[e==="asking"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"apd-icon",children:"⚠"}),o.jsx("h2",{className:"apd-title",children:"资源未完全缓存"}),o.jsxs("p",{className:"apd-body",children:["检测到游戏图像资源（卡牌、地形、地图等）尚未完全缓存。",o.jsx("br",{}),"首次加载游戏时可能出现图片闪烁或延迟。"]}),o.jsxs("p",{className:"apd-body apd-body--sub",children:["是否现在一次性加载全部资源？",o.jsx("br",{}),o.jsxs("span",{className:"apd-hint",children:["共约 ",t," 张图片，需要较短等待时间。"]})]}),o.jsxs("div",{className:"apd-actions",children:[o.jsx("button",{className:"apd-btn apd-btn--primary",onClick:a,children:"是，立即加载"}),o.jsx("button",{className:"apd-btn apd-btn--secondary",onClick:r,children:"否，边玩边加载"})]})]}),e==="loading"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"apd-icon",children:s?"✓":"↓"}),o.jsx("h2",{className:"apd-title",children:s?"加载完成":"正在加载资源…"}),o.jsx("div",{className:"apd-bar-track",children:o.jsx("div",{className:"apd-bar-fill",style:{width:`${i}%`}})}),o.jsxs("p",{className:"apd-progress-text",children:[n," / ",t,"  (",i,"%)"]}),s&&o.jsx("p",{className:"apd-body apd-body--sub",children:"资源已全部缓存，正在进入游戏…"})]})]}),o.jsx("style",{children:Kx})]})}const Kx=`
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
`,Jx={"72ea91e355f9729a4f906f4a5981ccb94deb6c3a1eb4c9a4f255cbc86ac068a5":"/assets/cards/ag/ag-7-front.jpg",de64d1812f33cab1363e0191b2e1fe10766940cf72c1ae602a1537d6d59dee87:"/assets/ui/card-back.jpg",ca3a08c40eed141b502fe1a227ec29253a864fba0fda52930a7e55d1910a6698:"/assets/cards/ag/ag-3-front.jpg","00fec5279b30da9801db7c84419764909d349e1c210543de132af209cd3f0abd":"/assets/cards/ag/ag-4-front.jpg","608720fd8dcc5e7fe60d00f88b206e99c0688cfc20ef38f4eea05359b2ec0861":"/assets/cards/ag/ag-5-front.jpg",b0389d207312bbef32c2910744518f6f30c73796f27e573cfaec51c355862a97:"/assets/cards/ag/ag-6-front.jpg","29fa020388f199454a71e6673a19d76c4aafc4e8e8f34af0a9eeafe41c172391":"/assets/cards/ag/ag-8-front.jpg",c25abc7656b2d1eb27be27d09fecde25fd22427409e5afc79caf0ee09a8ff4f0:"/assets/cards/ag/ag-11-front.jpg","31e6d6800110b0ebfe8793074ba169f13b6fa02ea67f7e77739a4bf003670ba1":"/assets/cards/ag/ag-18-front.jpg","9762039c262e506e6bddc0449ed1ddc0449d1c6234afba1327ebfdb81a388e54":"/assets/cards/ag/ag-12-front.jpg",aa1286d4f7814991279a7aac4a75c0b194b8e7f9d6510fb8e63362939d04ec1e:"/assets/cards/ag/ag-14-front.jpg",dfe234f8d5372742a6ed4ab9f521f1ad9c693a228003aad19750c34aa7d1d49b:"/assets/cards/ag/ag-21-front.jpg","12e25c69082cbfe495f5dc49006c7c5aebc1f73574c59c39ffc5ed5b8b2fbc6d":"/assets/cards/ag/ag-17-front.jpg","9ba8361aa29742693bc83360c55e367632471dfea59493136210cfd09fd1aa48":"/assets/cards/ag/ag-19-front.jpg","67a686db8c4db82340e640db02b289fb998f14b79ede162eaffb1d2f5488a3a4":"/assets/cards/ag/ag-20-front.jpg",eb56b8c9f9b270690d535f55ac55c846dae5537649cec7021639211ff7f6cc22:"/assets/cards/ag_plus/ag_plus-2-front.jpg",e4c12ee3ba0ef3bd8c2ee9b1bb41e74c404f09b62dba8cb2e35faa2e520895e5:"/assets/cards/ag_plus/ag_plus-3-front.jpg","8f2248399528f6a051509d01cc0c78398afd381b7ad8f9915ab6381297026282":"/assets/cards/ag_plus/ag_plus-4-front.jpg",ebac68b5f2d7cf81a64094a12da6386a77e2434776de373d72ed8be4ba13159c:"/assets/cards/ag_plus/ag_plus-5-front.jpg","35999dd2727c1847d4a12d8061029cf3555bdbb7452b03c3978443401ac1022c":"/assets/cards/ar/ar-1-front.jpg","2f4a7328aaa21e26023208758042e122b483ca242c1b95ee4c64952eb7bb1dc3":"/assets/cards/ar/ar-2-front.jpg",c414ed84946840c69b6bdc4393af27f50d70a81b56a8c1849d1bfdaaa27531c1:"/assets/cards/ar/ar-4-front.jpg","9eca454c2c4f5cdb16902adfa101484f2257d1a9fe6c7985d3aaba990982c725":"/assets/cards/ar/ar-5-front.jpg",dc0d77a5ec25f65aa1ab091a1ede028f7fb1f7ebfbea4945b907adef2ece4281:"/assets/cards/ar/ar-13-front.jpg","6fbefeb90155b45f8872740038dfa38116530750caa1e623a99bab29b5f40a21":"/assets/cards/ar/ar-14-front.jpg","33a35f67e85d189889a7e8fa66ff1719a0d2680027105d1075f802d94d772bb4":"/assets/cards/ar/ar-8-front.jpg","6e7e1e6dde63265f8df8809db768b684e794f4331f9c3d7f4185a1dc612c0701":"/assets/cards/ar/ar-9-front.jpg","2f73e47fe817e7ae747aee252cc07cc1d556c8bd1b2acdf54f9a678f1ff51e02":"/assets/cards/ar/ar-12-front.jpg",aecf39488eb7018c47ea85aa4073aad5f196b9440e2c9248ed960d91e6696f22:"/assets/cards/ar/ar-15-front.jpg",cf41932a7f074826ffbd6c2e14e3bb173d95e38982bac18c2bf04773923903dd:"/assets/cards/ar/ar-16-front.jpg",cfe5a7626bb3fb179d3d056519cf477fa9bd6db3e441a7d7b3204eb4f8e5c2cb:"/assets/cards/ar/ar-17-front.jpg",a26a8dd85af73fe69b123ac4e0beae7cac68442afe22c8d44bf0312a9081381d:"/assets/cards/ar/ar-18-front.jpg","6b6d4acdc02336939dff11c9c962d9f4fe1246ee51003dfc1a70569ebd740664":"/assets/cards/ar/ar-19-front.jpg","2d5acd9b8353db95858fc7dbdcae061bda7df49032e5aea255431ad33aca98d0":"/assets/cards/ar/ar-20-front.jpg",a2d445e888ff59aa58f2ad514a9a031b486a3d56621fa7ddb5f930a045a513b2:"/assets/cards/ar_plus/ar_plus-1-front.jpg",fd85ee9cb1b56cfc5f7e5284a4cf1c67f406b29a068253f7164ea628c1e5c43a:"/assets/cards/ar_plus/ar_plus-4-front.jpg","48cbd3a065ccfa5cbcba4f0247cb0fcf166291740d54ca162580765e5d5c1d4e":"/assets/cards/ar_plus/ar_plus-3-front.jpg",f395a843fb92ff32392d84d9c8dde21b95bf3bf41b8eb787d5d8480878952bcb:"/assets/cards/bg/bg-4-front.jpg","193f6b1b0a647be282bb1b7d5013924039743a46a48383f64d5cb726859f25aa":"/assets/cards/bg/bg-14-front.jpg","0e54f575524cacb092b31f8983a537c18487fdf7405caa924653a39e4bc544db":"/assets/cards/bg/bg-16-front.jpg","2fce52c5e8cde4295b30baed6b7de68e6a2839f5e086d7e1e530ea996ffe0435":"/assets/cards/bg/bg-12-front.jpg",a391b8c4020883f8d080a6e6e83864670158aef7be5eab6d7b348ef6e6b93d10:"/assets/cards/bg/bg-15-front.jpg",fd79d96009f9b66e23c02f25edfcce4a13fdf61c3fe8188269cf83916766df31:"/assets/cards/bg/bg-18-front.jpg",ad7a449d1edd5300a57a8bae2cab2a607d5422ea37c397b7c8c69df5b3096502:"/assets/cards/bg/bg-13-front.jpg","8571242343bc19329436ac669a422140b9dfbc7544cf1de2ec298eef9b3a9257":"/assets/cards/bg/bg-17-front.jpg","64ba521997fc2f8ddbb544dd45bcc58e3145822f4927860039ec7a7921d01757":"/assets/cards/bg/bg-19-front.jpg",ab0196704ba0510bc85e9e58e6bb8323c43cddc2e8f986e6ad79a11852e2c421:"/assets/cards/bg/bg-20-front.jpg","8514e5d83cf922f035f5600a0e96d2bf3ae85d064807759af4f08155ffbe6145":"/assets/cards/bg/bg-21-front.jpg",f495acab04c9e7b539619082b1c7eab387e329794a866f80f4d49f3b8f1f693e:"/assets/cards/bg/bg-23-front.jpg",d4e423814ead1fd2c384492fac1be79e014d771712d0db3c78d93b4e2daf6699:"/assets/cards/bg_plus/bg_plus-1-front.jpg","602d9c6187bb0bb67e3435b95461e1d0f6aa432b5408d2addfe77416d08b2862":"/assets/cards/bg_plus/bg_plus-3-front.jpg",e97efab0e571ea9441ecfcef69388ac5833e96b52f196073127b5930532f920d:"/assets/cards/bg_plus/bg_plus-4-front.jpg","9e27878685e0972914ec6db331732131c20f51b80aef11ca2ed7850338dc56a5":"/assets/cards/bg_plus/bg_plus-5-front.jpg","50793b3633188783f2e78b770a325549b99cc2b0cae8be0f837c1c1bd7958bcd":"/assets/cards/ho/ho-1-front.jpg","23be89f666a01394bded8d8b4e845a176efe96c1e33b40d9edacf15c715a3dd9":"/assets/cards/ho/ho-2-front.jpg",f9b7e9cd2182ade25b13d7355f2297ca1bedd4426b653e89a45aa14ce6221ff6:"/assets/cards/ho/ho-3-front.jpg","120ffbd79d44d8dce99f704baf79e62487e73935e18b8e18bec3fe352e603da0":"/assets/cards/ho/ho-4-front.jpg","926cccef6ed7a746b53a370664d9b1e60fb27d976c4707a0f34e390dcd7ef985":"/assets/cards/ho/ho-5-front.jpg","17b7289bdbdf1c8fc0ddf23c146d0b51e2c66e8e70a20545e64685e087f78496":"/assets/cards/ho/ho-6-front.jpg","38309819fe704c2f7e58cd5c35110ca71a78198b221595d966f711f4ee17d558":"/assets/cards/ho/ho-15-front.jpg","002453cf5ab95a93e69365838d45c421e90a106e3c0bbe20d038355a8495827e":"/assets/cards/ho/ho-8-front.jpg",da0d31d7f836a648f062ee69c549fe2b3806fcc729015bcff634ea427bc94c54:"/assets/cards/ho/ho-9-front.jpg","49d1feafa8f7a1608f6ea2c9205581b056cd4d3a352a903b065be7b613d73d93":"/assets/cards/ho/ho-10-front.jpg",e23e9d4556a4c1f84670f09e14f3abb1050f0effd6b004b190bb0d51c0567a16:"/assets/cards/ho/ho-12-front.jpg",ef5f963cdb85d776e30cc08f406812b628139e1c0762da6cdd76a995d526b132:"/assets/cards/ho/ho-14-front.jpg","76445d956a01a1a6759748880ff112510881dde7c531af86812ced9080f6027d":"/assets/cards/ho/ho-17-front.jpg","5dcb19c46fe4c87775c42969ee66a2e4edf407066eb7b6e9f75ae7f06c544237":"/assets/cards/ho_plus/ho_plus-1-front.jpg",d3608718aa56d2713c83f5d14a2957ae82680551c65c06caf10fa7aab623f2b4:"/assets/cards/ho_plus/ho_plus-2-front.jpg",c0138ea658ae0afcbfe06f7c46d1dfba00a459fd012b0c81aae9c63582923191:"/assets/cards/ho_plus/ho_plus-3-front.jpg","84f830f1410ddc1388ff00d0094af433f20688408ac72c20cfd5e90bf077a494":"/assets/cards/ho_plus/ho_plus-4-front.jpg","6d418c369626afc07e65702585463fa8d7e6dc9518dab01039c73a66907ed553":"/assets/cards/hy/hy-20-front.jpg","3e5c8c4b0dc1c5c6a2e65f80c779cda8035f41399837d032585b13c9a2e58d7b":"/assets/cards/hy/hy-7-front.jpg","9541ab0e2700ffb0df842826dd163204ef7832414a0bcaa1f54f7ac98fde834f":"/assets/cards/hy/hy-24-front.jpg",e8b1063f07dd998149120cc48ce4bb6d98a7bd93967160088eba9d96b710f421:"/assets/cards/hy/hy-8-front.jpg","4f64597b35d42ae5ff6c550c73830d48ef671f57d68ff01cc630e7b2ccaf43cd":"/assets/cards/hy/hy-10-front.jpg","91850bf85a43f889c8889936afdf4db90bde65dc9e65c1b5e0108a8932ac47a9":"/assets/cards/hy/hy-11-front.jpg","91c2ebb2087607ac70d7c081e0291cc298b78781e7e3faf2ec7fc86be248dfd4":"/assets/cards/hy/hy-13-front.jpg","640e4fcde89541cd02119f60f24deed7bad79a678cf1d99cce9e7ba73f71692e":"/assets/cards/hy/hy-14-front.jpg",b24622641e65a1b75e971a3e8c31a2bf0588ba84875b5bf7d03f27f0a63af9fc:"/assets/cards/hy/hy-19-front.jpg","1576e9779c12faed9bad26006fa8a12e7be0756ed264ea3b1deb05127d239b3c":"/assets/cards/hy/hy-21-front.jpg","3674a92a567de26b6304f6aebb9823606e1f72ce9e925d7488152e2f084ec86f":"/assets/cards/hy/hy-22-front.jpg","794136e3f4a27259a85a053cf7c7adc772875f6d5e042bb0eb4aa48d4b46e434":"/assets/cards/hy/hy-23-front.jpg",d17b8a6c61b023f8b09f9ffb1748e0de2eb751a638f2d376983ae14d0bd8564d:"/assets/cards/hy_plus/hy_plus-2-front.jpg",c8310aa2df0cdec2acf8913edbd16d60aaa22deab68867b14f70cd4bba59e4f6:"/assets/cards/hy_plus/hy_plus-5-front.jpg",a8188b32f23968b98e88cb685d8af599d5a2f6570f43f4330b189dd9ce669672:"/assets/cards/hy_plus/hy_plus-8-front.jpg","237ae5dbe95f95a334369a3f6d2c4f628bc2ef4c4cfda81f637169448b0b2a78":"/assets/cards/hy_plus/hy_plus-7-front.jpg",d7c9c03a695431a59b976da9ef1433b1969e905ce1b0f7165960910d8dcda7e7:"/assets/cards/lg/lg-1-front.jpg","54e91ee7019cf98518ceff5d5eb3ae24a2c490991d9ef700107919c1d7216133":"/assets/cards/lg/lg-2-front.jpg","5109d921c42001dd49deb4453c84680c485dbd03acbbf184db44c52e20df0947":"/assets/cards/lg/lg-3-front.jpg","238151d3ee802a63f7cfab27eba567809e0f434dd0ae7ab5cbfd67e17aab320c":"/assets/cards/lg/lg-4-front.jpg",cbd722c55b5f4530d1f909ee512accfb976e160669d861b03ba8a9f1ac812088:"/assets/cards/lg/lg-10-front.jpg","51cb5bbee96271ee7948d123f441fd961511c5664f85d880339ac81e76d297ce":"/assets/cards/lg/lg-12-front.jpg","5a50ab7bd0284e099caf5991bcaebf3fd5e2f6f852a41e8164548250372e13ee":"/assets/cards/lg/lg-13-front.jpg","8b83c2b2d3abe743003e29e8ace677d3669fee9012700fbd9405fb2581c2f1c1":"/assets/cards/lg/lg-14-front.jpg",e3f20637a74add18073f9b306a299693bccd9ff1318dd1cb35bb5b237ae03b3d:"/assets/cards/lg/lg-15-front.jpg","36b7cec7580d4de56edb5692bc83f9c3c08e4a94c7a75d3dca6b9aab5c70e886":"/assets/cards/lg/lg-21-front.jpg","307424a85866d9131ebaf92eee6aa49d75c7fe86937ebb0ddb7651431de5fc2d":"/assets/cards/lg/lg-18-front.jpg","653861f0980a12fb43cbfebda4071b3ca37e094bdc80c8698d0e183d90a83ed2":"/assets/cards/lg/lg-20-front.jpg","3f3a90dac9d0a565694982c55380f9b5fb3b914147aacd6b05c37a9ca8fd19d2":"/assets/cards/lg/lg-23-front.jpg","2b4298eafb47c327a290152fbccd471da28923c5769d2a645c574c16be6a039d":"/assets/cards/lg_plus/lg_plus-7-front.jpg","3074578f141dd1726916bf8e3e4532b4b82c72b7e2d30cbd3205b91609bbfbf2":"/assets/cards/lg_plus/lg_plus-3-front.jpg",bdd1e79a3a0f11fb4aeb486ae199ac2a971f957f90ce61439360e64f5c1ffc22:"/assets/cards/lg_plus/lg_plus-6-front.jpg",c3b9c862179da114428f8db2318e87e2770ad861b7bda0046c875ddaf884683c:"/assets/cards/lg_plus/lg_plus-8-front.jpg","3b6e2c61dd5d3c61e285d5c5f1bae42d08319f1ccd8ab950dabc7012fcae2ec8":"/assets/cards/lo/lo-12-front.jpg",ec8a31e551ec7a31602e8f6dfb7266c4dd377717704a34ee1647c288e9e64013:"/assets/cards/lo/lo-10-front.jpg","58a7b4c3f1fb01ee43a7269374ed04e71909609a51d488407b9754efcd055604":"/assets/cards/lo/lo-7-front.jpg",fdffe9ed90791948ae05fe76630b10ceca9d7bd442c41e2da584527d72ad98de:"/assets/cards/lo/lo-8-front.jpg",d4574f1615eb69b5470822b40ffd0d27da741f7f3e179c671c54290ca51afc0c:"/assets/cards/lo/lo-9-front.jpg",ab0f524c4935a2945d72db20beb4776d764df5de49672ed46e91eadce168e065:"/assets/cards/lo/lo-15-front.jpg","32297c12e7745ecb9bac5727434e7fff2784c25fe2b744d73f36218acc43b0b2":"/assets/cards/lo/lo-13-front.jpg",d9ef4060c364dea670bd525f0aad18687149d8797f5a9946c66b8f14681cff0f:"/assets/cards/lo/lo-14-front.jpg","7cabdc1509214622489311c85cc0cc2857daac93cb4fc31f515fb5fb638f6098":"/assets/cards/lo/lo-16-front.jpg",d2fc0f3677e4dd64bb2bf580951612085ce1f5a36d84742f94101ba0aeb0bebd:"/assets/cards/lo/lo-17-front.jpg","492722fef12f5835e2e0917c18b55b226be409f5f60973130cfda3daaba2a963":"/assets/cards/lo/lo-18-front.jpg","03b051e124ef4ec1c76498960f9a5317bdf1bd3f91973329062ce1b1a905c796":"/assets/cards/lo/lo-19-front.jpg",c9fdad2b74bc9c08941a4348c934616abadbc335d218914419e7972dc54aaa27:"/assets/cards/lo/lo-20-front.jpg","2753d376c59037359099d989ebc9ecdc6f35b0bcc1966a526919a62e9492ba5d":"/assets/cards/lo_plus/lo_plus-1-front.jpg","78e76504372580ad38ecea1cf6ca8b6eef7f24beb4bb173023d493a2900c9213":"/assets/cards/lo_plus/lo_plus-2-front.jpg",cfd41bad24efba992152437f01605cfa070b96c24171d158eb6b38c6e062b997:"/assets/cards/lo_plus/lo_plus-3-front.jpg","56b654c93edf5b33422b575efd3ece648df66bb3b245576bcb100db2cf463b90":"/assets/cards/lo_plus/lo_plus-4-front.jpg","83e4cf361d79bf56cab85b3165d8a502c3b6369a7d91d9d74008e7446ecee5aa":"/assets/cards/tr/tr-1-front.jpg",fac9e08ed1dd2007eff99f64f58456b8f28c887ea72caf3631798f19f586c2cf:"/assets/cards/tr/tr-2-front.jpg","49e88188dd73d2dc1889616077e7b3d3a01274be0936f3cf94b0ba13ffcdd3ec":"/assets/cards/tr/tr-3-front.jpg",f9ace908e376ccf677350bf8b04446db76d5b7810e1238eed78f9636917732d5:"/assets/cards/tr/tr-4-front.jpg",e176ed5572f8b0fec1afdf7338922f6287cb2bd7e8da531363f03afad38d2855:"/assets/cards/tr/tr-5-front.jpg",dcd6e5c81f720c301fdf8b8a9bdc7d1332f5d49d859cc3b7a888c4b47abb437c:"/assets/cards/tr/tr-8-front.jpg","7a3a4bc99a08007a8634615d14bb6e8701d8046b4b357e2e53a6816b1fa4b952":"/assets/cards/tr/tr-7-front.jpg","751ef0172ef4154fa9ada26cf0748253cbdb26e77ee5d7fbeb0cb448f0417815":"/assets/cards/tr/tr-9-front.jpg","637e9420cee8da61167a68a33b51a5955c1b96d79b8b104b70a8d721fcb76d2a":"/assets/cards/tr/tr-10-front.jpg","4096df60204fa108f6f86b2219c8a27d83e68a1ccb196df7df46de4392c2b41c":"/assets/cards/tr/tr-15-front.jpg",bf2f3bb722b82651f6eae93503ee371f2eb0aeb19a3c7048ee204c111f0f7eb4:"/assets/cards/tr/tr-13-front.jpg",e3e51452f907f7c993bd47093ca97798e5c685c2662bbf839e24c197bcdec634:"/assets/cards/tr/tr-17-front.jpg","188c6abac72e21173f1f0b02deb68d8204fe9d8773eea4bf01d633d170e226e4":"/assets/cards/tr/tr-19-front.jpg","9350f91bb06a35e92994e0129874a9c12e075ecde1d97595dc94424a3d445bdf":"/assets/cards/tr_plus/tr_plus-1-front.jpg","427ee044bae11fec56f65f194e7d6f8abcb7e904b199fc4a96c58ca93bfef239":"/assets/cards/tr_plus/tr_plus-3-front.jpg",e300e383916c326e28c6ced9e9705531a202a5daef21fdee6763ad2d11e3a2d8:"/assets/cards/tr_plus/tr_plus-5-front.jpg","7438c901962c7ce3370464463ea4f1e65b4d2a4ef220b5a4032115503fc32b0b":"/assets/cards/zb/zb-1-front.jpg","1c5ed46f16057ca9fa0f10685d323abe71b88b2a416eef661e520e9ff3a4fbcf":"/assets/cards/zb/zb-2-front.jpg","64fc21d85fcd6d3a3928ce9667186a0c8316e440396b6e6ebf162ed69ea6abeb":"/assets/cards/zb/zb-3-front.jpg","69f3d2ddd129e0a3b0a3245525786cf068b2e5eafc11897c9b83e4e208fc8270":"/assets/cards/zb/zb-4-front.jpg",a96dbaf805bf2dce31353b8d02732c389101196ac8220074dd161ad97ad3b61d:"/assets/cards/zb/zb-5-front.jpg",b15c50b1b10ce0e6ee1b76b5532ba9eed3b56cdf024ff27bc6d8c5195dcd76ff:"/assets/cards/zb/zb-15-front.jpg","04c9a1429211640a93676e76f7dfe02150d7e5cd921ee79222aa156800173a71":"/assets/cards/zb/zb-9-front.jpg",cf513f83dd7e6ac363f0aaa0a028c0527a164a283b340fb356b1f607b38a8a46:"/assets/cards/zb/zb-10-front.jpg","08a5474a86442dc9ddbfbebcf9994d7d5485108285168acaa865e44cc14d5462":"/assets/cards/zb/zb-12-front.jpg","732218f61fd334436d5359accff815df2d8c54adbeb7c402336e2f2b9f04b3cd":"/assets/cards/zb/zb-22-front.jpg",ce950419d660dcd87a9760439cf739ec7878df58f21a4af49a44cc4a2265c05b:"/assets/cards/zb/zb-17-front.jpg","7efd605546127d01ae40e1be52a64b45f4174bed74d1d9c8a15a6ba2d3129bc6":"/assets/cards/zb/zb-18-front.jpg","92c305b7877de46785ee7e5b4e5c92bf94c2e761047bb4d37d3fed4ec100d8d7":"/assets/cards/zb/zb-20-front.jpg","030fd7997dc5ccd629a0e184c0ac0ad1b33d1fff9366a4131c4a1d74dbe8a9c0":"/assets/cards/zb/zb-23-front.jpg","3b5c39538c0cf52273b845c15580993cc60e2a4a67f7c27b449243029108d538":"/assets/cards/zb_plus/zb_plus-6-front.jpg","4b42de4bbd91e229d41b666598cefd2a340285f228dc0395856b5b7a22b5381b":"/assets/cards/zb_plus/zb_plus-3-front.jpg","31cd007c783ba3389e6b0a7f3ce398515d65b3ab550aab70ebfcb3d86665ad52":"/assets/cards/zb_plus/zb_plus-4-front.jpg","39a0f3d3578f021253fac1a4fb293accd68267719a9bd4707fda7419257ccfc1":"/assets/cards/zb_plus/zb_plus-5-front.jpg","2a75d8802f569be782f6ca9ef865988ecefd6f447442dd8933154a8e70dd2895":"/assets/cards/強化機雷/強化機雷-16-front.jpg","506eb3f1ac120bb2d1a61d693b9b8f00ef56b788c42a231b9203fdad0ad3aed5":"/assets/ui/card-back.jpg","2e25e08a0277638ffbe37080471ac50fe51ab4e24ea0d52a5af46b7980f76340":"/assets/cards/陸上機雷/陸上機雷-20-front.jpg","149f2bc4a9dce26a9250c94e4a9338f0edf8c90a415c999216c00440ea0a3667":"/assets/cards/ダミー/ダミー-20-front.jpg","444338c10747b07f50d0f5baeb6e9e014141c55507d748ae8d5001fe1b3e5ee3":"/assets/maps/444338c10747b07f50d0f5baeb6e9e014141c55507d748ae8d5001fe1b3e5ee3.jpg","04c1b08a573b97d5296d712ef796a7d9c5e4ed3200d8a4ae268295628de18e55":"/assets/maps/04c1b08a573b97d5296d712ef796a7d9c5e4ed3200d8a4ae268295628de18e55.jpg","9e3fcbc86b5a5563c4bb5566031e7c1fd35fda1f32d981a242889b0c2561049c":"/assets/maps/9e3fcbc86b5a5563c4bb5566031e7c1fd35fda1f32d981a242889b0c2561049c.jpg","582cf873071464b2f3ca6232d0a20b36347ffa948125d0642b330b4d8dc9c478":"/assets/maps/582cf873071464b2f3ca6232d0a20b36347ffa948125d0642b330b4d8dc9c478.jpg","0f7fd469ef1f476fc05c15df2f949f575920a92751d52fc7135f2490eb035118":"/assets/maps/0f7fd469ef1f476fc05c15df2f949f575920a92751d52fc7135f2490eb035118.jpg","224304b43b96cc1dcfb865ed84556e7b06f4068c3a5fd8c21b342a8c53c36a72":"/assets/maps/224304b43b96cc1dcfb865ed84556e7b06f4068c3a5fd8c21b342a8c53c36a72.jpg","9429fd9c15d9a339f30f6cd8ad890af69a9570e0347267c2d6636091aec8266f":"/assets/maps/9429fd9c15d9a339f30f6cd8ad890af69a9570e0347267c2d6636091aec8266f.jpg","44f518c3e3df7c83027cf6ee5990dd411a6b828f9a6d5ed1717f0a352c1654e0":"/assets/maps/44f518c3e3df7c83027cf6ee5990dd411a6b828f9a6d5ed1717f0a352c1654e0.jpg",f0abd1d4ae4b2039ed4d1b54562a66a6c9fe9b718582f6946893f42ab522a53b:"/assets/maps/f0abd1d4ae4b2039ed4d1b54562a66a6c9fe9b718582f6946893f42ab522a53b.jpg","3f14f36d964a2093258d568ac4ce3691a767cd369f3ec5ec6679a610e9f6d9bb":"/assets/maps/3f14f36d964a2093258d568ac4ce3691a767cd369f3ec5ec6679a610e9f6d9bb.jpg",e450e91d172a2414c49fef4702f6799f98b794e6ee77a412e28f81bf374ed853:"/assets/maps/e450e91d172a2414c49fef4702f6799f98b794e6ee77a412e28f81bf374ed853.jpg"},Bx="embryo_preload_v1",Fx=["/assets/tiles/平地0.png","/assets/tiles/砂0.png","/assets/tiles/瓦礫0.png","/assets/tiles/瓦礫1.png","/assets/tiles/瓦礫2.png","/assets/tiles/瓦礫3.png","/assets/tiles/森0.png","/assets/tiles/森1.png","/assets/tiles/森2.png","/assets/tiles/森3.png","/assets/tiles/水0.png","/assets/tiles/水1.png","/assets/tiles/水2.png","/assets/tiles/高地1.png","/assets/tiles/高地2.png","/assets/tiles/高地3.png"],Gx=["/assets/tokens/AG-token.jpg","/assets/tokens/AR-token.jpg","/assets/tokens/BG-token.jpg","/assets/tokens/FO-token.jpg","/assets/tokens/HO-token.jpg","/assets/tokens/HY-token.jpg","/assets/tokens/LG-token.jpg","/assets/tokens/LO-token.jpg","/assets/tokens/TR-token.jpg","/assets/tokens/ZB-token.jpg"];function zf(){const e=new Set;for(const n of Object.values(xa))for(const t of n)e.add(`/assets/${t.frontImageId}`),e.add(`/assets/${t.backImageId}`);for(const n of Fx)e.add(n);for(const n of Object.values(Jx))n.startsWith("/assets/maps/")&&e.add(n);for(const n of Gx)e.add(n);return[...e]}function Ux(e){localStorage.setItem(Bx,JSON.stringify({total:e,ts:Date.now()}))}async function Hx(e,n){const t=zf(),a=t.length;let r=0;e(0,a);const i=l=>new Promise(d=>{if(n!=null&&n.aborted){d();return}const u=new Image;u.onload=u.onerror=()=>{r++,e(r,a),d()},u.src=l}),s=10;for(let l=0;l<t.length&&!(n!=null&&n.aborted);l+=s)await Promise.all(t.slice(l,l+s).map(i));n!=null&&n.aborted||Ux(a)}const es=.4,ns=2.5,Rd=.12,Od=5;function Wx(e=1){const[n,t]=k.useState({x:0,y:0,scale:e}),a=k.useRef(null),r=k.useRef({x:0,y:0}),i=k.useRef(!1),s=k.useRef(null),l=k.useRef({x:0,y:0,scale:e});k.useLayoutEffect(()=>{const h=s.current;if(!h)return;const m=h.querySelector(".game-board");if(!m)return;const v=h.clientWidth,_=h.clientHeight,b=m.offsetWidth,g=m.offsetHeight;if(!v||!_||!b||!g)return;const y=Math.min(v/b,_/g),j=Math.min(ns,Math.max(es,y)),M=(v-b*j)/2,E=(_-g*j)/2,w={x:M,y:E,scale:j};l.current=w,t(w)},[]),k.useEffect(()=>{const h=s.current;if(!h)return;const m=v=>{v.preventDefault();const _=v.deltaY<0?Rd:-Rd;t(b=>({...b,scale:Math.min(ns,Math.max(es,b.scale+_))}))};return h.addEventListener("wheel",m,{passive:!1}),()=>h.removeEventListener("wheel",m)},[]),k.useEffect(()=>{const h=s.current;if(!h)return;let m=0,v=0,_=0,b=!1,g={x:0,y:0};const y=(w,S)=>Math.sqrt((S.clientX-w.clientX)**2+(S.clientY-w.clientY)**2),j=w=>{w.touches.length===1?(m=w.touches[0].clientX,v=w.touches[0].clientY,g={x:m,y:v},b=!1):w.touches.length===2&&(w.preventDefault(),_=y(w.touches[0],w.touches[1]),m=(w.touches[0].clientX+w.touches[1].clientX)/2,v=(w.touches[0].clientY+w.touches[1].clientY)/2)},M=w=>{if(w.touches.length===1){const S=w.touches[0].clientX-m,A=w.touches[0].clientY-v;if(!b){const N=w.touches[0].clientX-g.x,$=w.touches[0].clientY-g.y;Math.sqrt(N**2+$**2)>Od&&(b=!0)}b&&(w.preventDefault(),t(N=>({...N,x:N.x+S,y:N.y+A}))),m=w.touches[0].clientX,v=w.touches[0].clientY}else if(w.touches.length===2){w.preventDefault();const S=y(w.touches[0],w.touches[1]),A=(w.touches[0].clientX+w.touches[1].clientX)/2,N=(w.touches[0].clientY+w.touches[1].clientY)/2;if(_>0){const D=S/_;t(K=>{const U=Math.min(ns,Math.max(es,K.scale*D));return{...K,scale:U}})}const $=A-m,T=N-v;t(D=>({...D,x:D.x+$,y:D.y+T})),_=S,m=A,v=N}},E=w=>{w.touches.length<2&&(_=0),w.touches.length===0&&(b=!1),w.touches.length===1&&(m=w.touches[0].clientX,v=w.touches[0].clientY)};return h.addEventListener("touchstart",j,{passive:!1}),h.addEventListener("touchmove",M,{passive:!1}),h.addEventListener("touchend",E),h.addEventListener("touchcancel",E),()=>{h.removeEventListener("touchstart",j),h.removeEventListener("touchmove",M),h.removeEventListener("touchend",E),h.removeEventListener("touchcancel",E)}},[]);const d=k.useCallback(h=>{h.button===0&&(a.current={x:h.clientX,y:h.clientY},r.current={x:h.clientX,y:h.clientY},i.current=!1)},[]),u=k.useCallback(h=>{if(!a.current)return;const m=h.clientX-a.current.x,v=h.clientY-a.current.y,_=Math.sqrt(m*m+v*v);if(!i.current&&_>Od&&(i.current=!0),i.current){const b=h.clientX-r.current.x,g=h.clientY-r.current.y;t(y=>({...y,x:y.x+b,y:y.y+g}))}r.current={x:h.clientX,y:h.clientY}},[]),p=k.useCallback(h=>{a.current=null,i.current=!1},[]),f=k.useCallback(()=>{a.current=null,i.current=!1},[]),x=k.useCallback(()=>{t(l.current)},[]);return{transform:n,viewportRef:s,isPanning:i.current,handlers:{onMouseDown:d,onMouseMove:u,onMouseUp:p,onMouseLeave:f},resetView:x}}function Zx({x:e,y:n,value:t}){return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"fx-damage-number",style:{left:e,top:n},children:["-",t]}),o.jsx("style",{children:Yx})]})}const Yx=`
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
`;function Xx({x:e,y:n,variant:t}){return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:`fx-impact fx-impact--${t}`,style:{left:e,top:n},children:[t==="melee"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"fx-impact__slash fx-impact__slash--1"}),o.jsx("div",{className:"fx-impact__slash fx-impact__slash--2"})]}),t==="ranged"&&o.jsx("div",{className:"fx-impact__beam"}),t==="charge"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"fx-impact__ring fx-impact__ring--1"}),o.jsx("div",{className:"fx-impact__ring fx-impact__ring--2"})]})]}),o.jsx("style",{children:Qx})]})}const Qx=`
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
`;function qx({x:e,y:n}){return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"fx-explosion",style:{left:e,top:n},children:[o.jsx("div",{className:"fx-explosion__flash"}),o.jsx("div",{className:"fx-explosion__ring fx-explosion__ring--1"}),o.jsx("div",{className:"fx-explosion__ring fx-explosion__ring--2"}),o.jsx("div",{className:"fx-explosion__ring fx-explosion__ring--3"}),Array.from({length:8}).map((t,a)=>o.jsx("div",{className:"fx-explosion__particle",style:{"--angle":`${a*45}deg`,"--delay":`${a*20}ms`,"--dist":`${30+Math.random()*20}px`}},a))]}),o.jsx("style",{children:ev})]})}const ev=`
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
`;function nv({defId:e,isAuxiliary:n,playerId:t}){const a=q(e);if(!a)return null;const r=t==="player1"?"P1":"P2",i=t==="player1"?"var(--color-accent)":"#ff00c8";return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"fx-card-reveal",style:{position:"fixed",bottom:"80px",left:"50%",transform:"translateX(-50%)",zIndex:800,pointerEvents:"none"},children:[o.jsxs("div",{className:"fx-card-reveal__label",style:{color:i},children:[r," ",n?"抽到辅助卡":"抽牌"]}),o.jsx("div",{className:"fx-card-reveal__card",style:{borderColor:i},children:o.jsxs("div",{className:"fx-card-reveal__inner",children:[o.jsx("div",{className:"fx-card-reveal__back",children:o.jsx("img",{src:"/assets/ui/card-back.jpg",alt:"card back"})}),o.jsx("div",{className:"fx-card-reveal__front",children:o.jsx("img",{src:`/assets/${a.frontImageId}`,alt:a.nameCn})})]})}),o.jsxs("div",{className:"fx-card-reveal__name",style:{color:i},children:[a.nameCn,n&&o.jsx("span",{className:"fx-card-reveal__aux-badge",children:"辅助"})]})]}),o.jsx("style",{children:tv})]})}const tv=`
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
`;function av({defId:e,isBomb:n,index:t,total:a}){const r=q(e);if(!r)return null;const i=n?"fx-card-destroy--bomb":"";return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:`fx-card-destroy ${i}`,style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:810,pointerEvents:"none"},children:[o.jsxs("div",{className:"fx-card-destroy__card",children:[o.jsx("img",{src:`/assets/${r.frontImageId}`,alt:r.nameCn}),o.jsx("div",{className:"fx-card-destroy__flash"})]}),o.jsxs("div",{className:"fx-card-destroy__label",children:[r.nameCn," 被摧毁",n&&o.jsx("span",{className:"fx-card-destroy__bomb-badge",children:"💣 诱爆"})]}),o.jsxs("div",{className:"fx-card-destroy__counter",children:[t+1," / ",a]})]}),o.jsx("style",{children:rv})]})}const rv=`
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
`,al=62,ts=Math.round(al*(1042/756)),Kd=68,ov=6,Jd=140;function iv({p1Cards:e,p2Cards:n}){const[t,a]=k.useState("init"),[r,i]=k.useState(null);return k.useEffect(()=>{const s=document.querySelector(".unit-token-abs--p1"),l=document.querySelector(".unit-token-abs--p2"),d=s==null?void 0:s.getBoundingClientRect(),u=l==null?void 0:l.getBoundingClientRect();i({p1:d?{x:d.left+d.width/2,y:d.top+d.height/2}:{x:window.innerWidth*.3,y:window.innerHeight*.55},p2:u?{x:u.left+u.width/2,y:u.top+u.height/2}:{x:window.innerWidth*.7,y:window.innerHeight*.45}});const p=setTimeout(()=>a("fan"),50),f=setTimeout(()=>a("hold"),650),x=setTimeout(()=>a("cluster"),1650),h=setTimeout(()=>a("exit"),2e3);return()=>{[p,f,x,h].forEach(clearTimeout)}},[]),r?Tr.createPortal(o.jsxs("div",{style:{position:"fixed",inset:0,zIndex:900,pointerEvents:"none"},children:[o.jsx(Bd,{cards:e,origin:r.p1,phase:t,color:"#00f0ff",label:"P1"}),o.jsx(Bd,{cards:n,origin:r.p2,phase:t,color:"#ff8844",label:"P2"})]}),document.body):null}function Bd({cards:e,origin:n,phase:t,color:a,label:r}){if(e.length===0)return null;const i=e.length,l=(i-1)*Kd>window.innerWidth*.7?Math.floor(window.innerWidth*.7/Math.max(i-1,1)):Kd,d=t==="hold"||t==="cluster";return o.jsxs("div",{style:{position:"fixed",left:n.x,top:n.y},children:[o.jsxs("div",{style:{position:"absolute",top:-(Jd+ts/2+28),left:0,transform:"translateX(-50%)",color:a,fontSize:"0.78rem",fontWeight:"bold",whiteSpace:"nowrap",textShadow:`0 0 10px ${a}, 1px 1px 3px #000`,opacity:d?1:0,transition:"opacity 250ms",letterSpacing:"0.06em"},children:[r,"  弃牌 ×",i]}),e.map((u,p)=>{const f=q(u.defId),x=(i-1)/2,h=p-x,m=h*l,v=-Jd,_=h*ov;let b,g,y,j,M;switch(t){case"init":b=0,g=0,y=0,j=.15,M=0;break;case"fan":case"hold":b=m,g=v,y=_,j=1,M=1;break;case"cluster":b=0,g=v,y=0,j=.85,M=1;break;case"exit":default:b=0,g=v-520,y=0,j=.2,M=0;break}const E=p*28;let w;switch(t){case"fan":w=[`transform 480ms cubic-bezier(0.34,1.56,0.64,1) ${E}ms`,`opacity   300ms ease-out ${E}ms`].join(", ");break;case"hold":w="none";break;case"cluster":w="transform 320ms ease-in, opacity 150ms ease-in";break;case"exit":w="transform 450ms ease-in, opacity 380ms ease-in 60ms";break;default:w="none"}return o.jsx("div",{style:{position:"absolute",width:al,height:ts,left:-al/2,top:-ts/2,borderRadius:5,overflow:"hidden",border:`1px solid ${a}55`,boxShadow:`0 6px 20px rgba(0,0,0,0.7), 0 0 8px ${a}44`,zIndex:p,transform:`translate(${b}px, ${g}px) rotate(${y}deg) scale(${j})`,opacity:M,transition:w,willChange:"transform, opacity"},children:f?o.jsx("img",{src:`/assets/${f.frontImageId}`,alt:f.nameCn,style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1}):o.jsx("div",{style:{width:"100%",height:"100%",background:"#222"}})},u.instanceId)})]})}const rl=62,as=Math.round(rl*(1042/756)),Fd=52,sv=5,Gd=120;function lv({playerId:e,count:n}){const[t,a]=k.useState("init"),[r,i]=k.useState(null),[s,l]=k.useState(null);if(k.useEffect(()=>{const u=e==="player1"?".mp__deck--p1":".mp__deck--p2",p=document.querySelector(u),f=document.querySelector(e==="player1"?".unit-token-abs--p1":".unit-token-abs--p2"),x=p==null?void 0:p.getBoundingClientRect(),h=f==null?void 0:f.getBoundingClientRect();i(x?{x:x.left+x.width/2,y:x.top+x.height/2}:{x:window.innerWidth*.5,y:window.innerHeight*.85}),l(h?{x:h.left+h.width/2,y:h.top+h.height/2}:{x:e==="player1"?window.innerWidth*.3:window.innerWidth*.7,y:e==="player1"?window.innerHeight*.55:window.innerHeight*.45});const m=setTimeout(()=>a("spread"),50),v=setTimeout(()=>a("hold"),600),_=setTimeout(()=>a("cluster"),900),b=setTimeout(()=>a("fly"),1200);return()=>{[m,v,_,b].forEach(clearTimeout)}},[e]),!r||!s)return null;const d=e==="player1"?"#00f0ff":"#ff8844";return Tr.createPortal(o.jsx("div",{style:{position:"fixed",inset:0,zIndex:900,pointerEvents:"none"},children:o.jsx(cv,{count:n,deckPos:r,mechaPos:s,phase:t,color:d,playerId:e})}),document.body)}function cv({count:e,deckPos:n,mechaPos:t,phase:a,color:r,playerId:i}){if(e===0)return null;const s=e,d=(s-1)*Fd>window.innerWidth*.6?Math.floor(window.innerWidth*.6/Math.max(s-1,1)):Fd,u=t.x-n.x,p=t.y-n.y,f=a==="hold"||a==="cluster",x=`${i==="player1"?"P1":"P2"} 抽牌 ×${s}`;return o.jsxs("div",{style:{position:"fixed",left:n.x,top:n.y},children:[o.jsx("div",{style:{position:"absolute",top:-(Gd+as/2+28),left:0,transform:"translateX(-50%)",color:r,fontSize:"0.78rem",fontWeight:"bold",whiteSpace:"nowrap",textShadow:`0 0 10px ${r}, 1px 1px 3px #000`,opacity:f?1:0,transition:"opacity 250ms",letterSpacing:"0.06em"},children:x}),Array.from({length:s},(h,m)=>{const v=(s-1)/2,_=m-v,b=_*d,g=-Gd,y=_*sv;let j,M,E,w,S;switch(a){case"init":j=0,M=0,E=0,w=.15,S=0;break;case"spread":case"hold":j=b,M=g,E=y,w=1,S=1;break;case"cluster":j=0,M=g,E=0,w=.85,S=1;break;case"fly":default:j=u,M=p,E=0,w=.2,S=0;break}const A=m*24;let N;switch(a){case"spread":N=[`transform 480ms cubic-bezier(0.34,1.56,0.64,1) ${A}ms`,`opacity   300ms ease-out ${A}ms`].join(", ");break;case"hold":N="none";break;case"cluster":N="transform 280ms ease-in, opacity 150ms ease-in";break;case"fly":N="transform 400ms cubic-bezier(0.4,0,1,1), opacity 300ms ease-in 80ms";break;default:N="none"}return o.jsx("div",{style:{position:"absolute",width:rl,height:as,left:-rl/2,top:-as/2,borderRadius:5,overflow:"hidden",border:`1px solid ${r}55`,boxShadow:`0 6px 20px rgba(0,0,0,0.7), 0 0 8px ${r}44`,zIndex:m,transform:`translate(${j}px, ${M}px) rotate(${E}deg) scale(${w})`,opacity:S,transition:N,willChange:"transform, opacity"},children:o.jsx("img",{src:"/assets/ui/card-back.jpg",alt:"card back",style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1})},m)})]})}const ol=56,il=Math.round(ol*(1042/756));function dv({playerId:e}){const[n,t]=k.useState("face-up"),[a,r]=k.useState(null);if(k.useEffect(()=>{const s=e==="player1"?".mp__deck--p1":".mp__deck--p2",l=document.querySelector(s),d=l==null?void 0:l.getBoundingClientRect();r(d?{x:d.left+d.width/2,y:d.top+d.height/2}:{x:window.innerWidth*.5,y:window.innerHeight*.85});const u=setTimeout(()=>t("flip"),150),p=setTimeout(()=>t("face-down"),500),f=setTimeout(()=>t("fade"),650);return()=>{[u,p,f].forEach(clearTimeout)}},[e]),!a)return null;const i=e==="player1"?"#00f0ff":"#ff8844";return Tr.createPortal(o.jsxs("div",{style:{position:"fixed",inset:0,zIndex:900,pointerEvents:"none"},children:[o.jsxs("div",{style:{position:"fixed",left:a.x,top:a.y},children:[[0,1,2].map(s=>o.jsx(uv,{index:s,phase:n,color:i},s)),o.jsx("div",{style:{position:"absolute",top:-(il/2+32),left:0,transform:"translateX(-50%)",color:i,fontSize:"0.78rem",fontWeight:"bold",whiteSpace:"nowrap",textShadow:`0 0 10px ${i}, 1px 1px 3px #000`,letterSpacing:"0.06em",opacity:n==="face-up"||n==="flip"||n==="face-down"?1:0,transition:"opacity 200ms"},children:"♻️ 重洗牌组"})]}),o.jsx("style",{children:pv})]}),document.body)}function uv({index:e,phase:n,color:t}){const a=(e-1)*3,r=(e-1)*2;let i;switch(n){case"face-up":case"flip":case"face-down":i=1;break;case"fade":i=0;break}const s=n==="flip"?"reshuffle-card--flipping":n==="face-down"||n==="fade"?"reshuffle-card--flipped":"";return o.jsxs("div",{className:`reshuffle-card ${s}`,style:{position:"absolute",width:ol,height:il,left:-ol/2+a,top:-il/2+r,perspective:600,opacity:i,transition:"opacity 200ms ease-in",willChange:"opacity",zIndex:e},children:[o.jsx("div",{className:"reshuffle-card__face reshuffle-card__front",style:{background:t+"33",border:`2px solid ${t}88`,borderRadius:5,boxShadow:`0 0 12px ${t}55`}}),o.jsx("div",{className:"reshuffle-card__face reshuffle-card__back",style:{borderRadius:5,overflow:"hidden",border:"1px solid #ffffff44",boxShadow:"0 4px 12px rgba(0,0,0,0.6)"},children:o.jsx("img",{src:"/assets/ui/card-back.jpg",alt:"card back",style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1})})]})}const pv=`
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
`,sn=68;function fv(){const{currentEvent:e}=Dr();return e?o.jsxs("div",{className:"effects-layer",style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:20},children:[e.type==="damage_number"&&o.jsx(Zx,{x:e.position.col*sn+sn/2,y:e.position.row*sn+sn/2,value:e.value},`dmg-${Date.now()}`),(e.type==="ranged_hit"||e.type==="melee_hit"||e.type==="charge_hit")&&o.jsx(Xx,{x:e.targetPos.col*sn+sn/2,y:e.targetPos.row*sn+sn/2,variant:e.type==="ranged_hit"?"ranged":e.type==="melee_hit"?"melee":"charge"},`hit-${Date.now()}`),e.type==="mine_explode"&&o.jsx(qx,{x:e.position.col*sn+sn/2,y:e.position.row*sn+sn/2},`exp-${Date.now()}`),e.type==="card_draw"&&o.jsx(nv,{defId:e.defId,isAuxiliary:e.isAuxiliary,playerId:e.playerId},`draw-${e.card.instanceId}`),e.type==="card_destroy"&&o.jsx(av,{defId:e.defId,isBomb:e.isBomb,index:e.index,total:e.total},`destroy-${e.card.instanceId}`),e.type==="cleanup_discard"&&o.jsx(iv,{p1Cards:e.p1Cards,p2Cards:e.p2Cards},`cleanup-${Date.now()}`),e.type==="batch_card_draw"&&o.jsx(lv,{playerId:e.playerId,count:e.count},`draw-${e.playerId}-${Date.now()}`),e.type==="deck_reshuffle"&&o.jsx(dv,{playerId:e.playerId},`reshuffle-${e.playerId}-${Date.now()}`)]}):null}function ya(){const{state:e}=Se(),{map:n,mines:t}=e,{currentEvent:a,animatedPositions:r}=Dr(),{transform:i,viewportRef:s,handlers:l,resetView:d}=Wx(.9),u=(a==null?void 0:a.type)==="screen_shake"?`board-transform board-shake board-shake--${a.intensity}`:"board-transform";return o.jsxs("div",{ref:s,className:"board-viewport",...l,style:{cursor:"grab"},children:[o.jsxs("div",{className:u,style:{transform:`translate(${i.x}px, ${i.y}px) scale(${i.scale})`,transformOrigin:"top left"},children:[o.jsx("div",{className:"game-board",style:{gridTemplateColumns:`repeat(${n.width}, var(--cell-size))`,gridTemplateRows:`repeat(${n.height}, var(--cell-size))`},children:n.cells.flatMap((p,f)=>p.map((x,h)=>o.jsx(mv,{cell:x,row:f,col:h,mines:t},`${f}-${h}`)))}),e.playerIds.map((p,f)=>{const x=e.players[p];return!x||x.isDefeated?null:o.jsx(gv,{player:x,side:`p${f+1}`,playerIndex:f,color:uc(e,p),animatedPos:r[p]??null},p)}),o.jsx(fv,{})]}),o.jsx("button",{className:"board-reset-btn",onClick:d,title:"重置视角",children:"⟳"})]})}function mv({cell:e,row:n,col:t,mines:a}){const r=rc(e),i=e.terrain==="highland"&&e.elevation>0?`+${e.elevation}`:null,s=a.filter(l=>l.position.row===n&&l.position.col===t);return o.jsxs("div",{className:`board-cell board-cell--${e.terrain}`,style:{backgroundImage:`url("${r}")`},"data-row":n,"data-col":t,children:[i&&o.jsx("span",{className:"board-cell__elev",children:i}),s.map((l,d)=>o.jsx(hv,{mine:l,offset:d*4},l.id))]})}function gv({player:e,side:n,playerIndex:t,color:a,animatedPos:r}){const i=Q.find(f=>f.id===e.unitId);if(!i)return null;const s=(r==null?void 0:r.pos)??e.position,l=(r==null?void 0:r.facing)??e.facing,d={N:0,E:90,S:180,W:270}[l]??0,u=(()=>{switch(l){case"N":return{top:0,left:"50%",translate:"-50% 0"};case"S":return{bottom:0,left:"50%",translate:"-50% 0"};case"E":return{right:0,top:"50%",translate:"0 -50%"};case"W":return{left:0,top:"50%",translate:"0 -50%"};default:return{top:0,left:"50%",translate:"-50% 0"}}})(),p=`P${t+1}`;return o.jsxs("div",{className:`unit-token-abs unit-token-abs--${n}`,style:{left:`calc(${s.col} * var(--cell-size))`,top:`calc(${s.row} * var(--cell-size))`,width:"var(--cell-size)",height:"var(--cell-size)","--token-color":a},children:[o.jsx("div",{className:"unit-token-abs__label",style:{borderColor:a,backgroundColor:a+"33"},title:`${p} ${i.nameCn}`,children:p}),o.jsx("span",{className:"unit-token-abs__facing-arrow",style:{...u,transform:`rotate(${d}deg)`,color:a},title:`机头朝向：${e.facing}`,children:"▲"})]})}function hv({mine:e,offset:n}){const t=e.ownerId==="player1";return o.jsx("div",{className:`mine-token mine-token--${t?"p1":"p2"}`,style:{transform:`translate(${n}px, ${n}px)`},title:`机雷 (伤害 ${e.damage})`,children:o.jsx("span",{className:"mine-token__icon",children:"💣"})})}const xv=250,vv=480,bv=2e3,Xo=252,vo=Math.round(Xo*(1042/756)),Lt=12;function wa(){const[e,n]=k.useState(null),t=k.useRef(null),a=k.useRef(null),r=k.useRef(null),i=k.useRef({x:0,y:0}),s=k.useRef(!1),l=()=>{t.current&&(clearTimeout(t.current),t.current=null),a.current&&(clearTimeout(a.current),a.current=null),r.current&&(clearTimeout(r.current),r.current=null)},d=k.useCallback(()=>{l(),n(null)},[]),u=k.useCallback(p=>({onMouseEnter:f=>{i.current={x:f.clientX,y:f.clientY},l(),t.current=setTimeout(()=>{n({src:p,x:i.current.x,y:i.current.y})},xv)},onMouseMove:f=>{i.current={x:f.clientX,y:f.clientY},n(x=>x&&{...x,x:f.clientX,y:f.clientY})},onMouseLeave:()=>d(),onTouchStart:f=>{const x=f.touches[0];s.current=!1,l(),a.current=setTimeout(()=>{s.current||(n({src:p,x:x.clientX,y:x.clientY}),r.current=setTimeout(()=>n(null),bv))},vv)},onTouchMove:()=>{s.current=!0,d()},onTouchEnd:()=>{l()}}),[d]);return{zoom:e,hide:d,getZoomHandlers:u}}function yv(e,n){const t=window.innerWidth,a=window.innerHeight;let r=e+18;r+Xo+Lt>t&&(r=e-Xo-18);let i=n-vo/2;return i<Lt&&(i=Lt),i+vo>a-Lt&&(i=a-vo-Lt),{left:Math.max(Lt,r),top:i}}function Sa({zoom:e}){if(!e)return null;const{left:n,top:t}=yv(e.x,e.y);return Tr.createPortal(o.jsxs("div",{style:{position:"fixed",left:n,top:t,width:Xo,height:vo,zIndex:99999,pointerEvents:"none",borderRadius:8,overflow:"hidden",boxShadow:"0 12px 40px rgba(0,0,0,0.75), 0 0 0 2px rgba(255,255,255,0.15)",background:"#111",animation:"card-zoom-in 0.12s ease-out both"},children:[o.jsx("img",{src:e.src,alt:"",style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1}),o.jsx("style",{children:_v})]}),document.body)}const _v=`
@keyframes card-zoom-in {
  from { opacity: 0; transform: scale(0.88); }
  to   { opacity: 1; transform: scale(1); }
}
`;function sl(e){return`P${e.replace("player","")}`}function Iv(e,n){const t=xa[n]??[];return[...e].sort((a,r)=>{const i=t.findIndex(l=>l.id===a.defId),s=t.findIndex(l=>l.id===r.defId);return i-s})}function kv(e,n,t,a,r,i){function s(h){if(!h)return null;const m=[...e.hand,...e.auxiliary].find(v=>v.instanceId===h);return m?r(m.defId)??null:null}const l=s(t),d=s(a),u=jn(e,r,"movement"),p=e.position,f=[];let x=[p];if(l){if(l.actionType==="movement"){const h=(l.movementValue??0)+(u.wheel?2:0);if(h>0){const m=vi(i,p,h,[n],u,e.facing);x=m.map(v=>v.pos),f.push(...m.map(v=>({pos:v.pos,cls:"preview-move-s1"})))}}else if(l.actionType==="ranged"){const h=l.rangeMin??1,m=l.rangeMax??6;for(let v=0;v<i.height;v++)for(let _=0;_<i.width;_++)Ne(p,{row:v,col:_})>=h&&Ne(p,{row:v,col:_})<=m&&f.push({pos:{row:v,col:_},cls:"preview-atk-s1"})}else if(l.actionType==="melee"||l.actionType==="charge")for(const[h,m]of[[-1,0],[1,0],[0,-1],[0,1]]){const v=p.row+h,_=p.col+m;v>=0&&v<i.height&&_>=0&&_<i.width&&f.push({pos:{row:v,col:_},cls:"preview-atk-s1"})}}if(d){const h=new Map,m=v=>`${v.row},${v.col}`;if(d.actionType==="movement"){const v=(d.movementValue??0)+(u.wheel?2:0);if(v>0){for(const _ of x)Sf(i,_,v,[n],u).forEach(b=>h.set(m(b.pos),b.pos));h.forEach(_=>f.push({pos:_,cls:"preview-move-s2"}))}}else if(d.actionType==="ranged"){const v=d.rangeMin??1,_=d.rangeMax??6;for(const b of x)for(let g=0;g<i.height;g++)for(let y=0;y<i.width;y++){const j=Ne(b,{row:g,col:y});j>=v&&j<=_&&h.set(m({row:g,col:y}),{row:g,col:y})}h.forEach(b=>f.push({pos:b,cls:"preview-atk-s2"}))}else if(d.actionType==="melee"||d.actionType==="charge"){for(const v of x)for(const[_,b]of[[-1,0],[1,0],[0,-1],[0,1]]){const g=v.row+_,y=v.col+b;g>=0&&g<i.height&&y>=0&&y<i.width&&h.set(m({row:g,col:y}),{row:g,col:y})}h.forEach(v=>f.push({pos:v,cls:"preview-atk-s2"}))}}return f}const jv=["board-cell--preview-move-s1","board-cell--preview-move-s2","board-cell--preview-atk-s1","board-cell--preview-atk-s2"];function Ud(){document.querySelectorAll(".board-cell").forEach(e=>jv.forEach(n=>e.classList.remove(n)))}const wv=[{id:"hand",label:"手牌",icon:"🃏"},{id:"auxiliary",label:"辅助区",icon:"⚙️"},{id:"discard",label:"弃牌区",icon:"♻️"},{id:"destroyed",label:"已破坏",icon:"💀"}];function Qo(){const{state:e,dispatch:n,aiConfig:t}=Se(),{isAnimating:a}=Dr(),r=()=>n({type:"ADVANCE_PLOT_STEP"});if(k.useEffect(()=>{if(e.phase!=="plotting"||a)return;const s=e.plottingStep;if(!s||!s.startsWith("transition_to_"))return;const l=s.replace("transition_to_","");if(!Oe(t,l))return;const d=setTimeout(r,400);return()=>clearTimeout(d)},[e.plottingStep,e.phase,a,t]),e.phase!=="plotting"||a)return null;const i=e.plottingStep;if(i&&i.startsWith("transition_to_")){const s=i.replace("transition_to_","");return Oe(t,s)?null:o.jsx(Nv,{onContinue:r,playerLabel:sl(s),hint:"请确认对方不在旁后开始布局"})}return null}function na(){const{state:e,dispatch:n,getCard:t,aiConfig:a}=Se(),{plottingStep:r}=e;if(e.phase!=="plotting"||r==="complete"||r===null||r.startsWith("transition_to_"))return null;const i=r,s=Oe(a,i),l=zr(a,i);return o.jsx(Sv,{activePlottingPlayerId:i,getCard:t,isAI:s,aiDifficulty:l,onConfirm:(d,u)=>{n({type:"PLOT_CARD",playerId:i,seg:1,instanceId:d}),n({type:"PLOT_CARD",playerId:i,seg:2,instanceId:u}),n({type:"CONFIRM_PLOT",playerId:i})}},i)}function Sv({activePlottingPlayerId:e,getCard:n,onConfirm:t,isAI:a=!1,aiDifficulty:r="hard"}){const{state:i,dispatch:s,exposureMode:l}=Se(),[d,u]=k.useState(null),[p,f]=k.useState(null),[x,h]=k.useState("hand"),[m,v]=k.useState(e),_=m===e||l,b=i.players[m],g=i.players[e],y=T=>uc(i,T),j=y(e),M=(()=>{const T=i.playerIds.filter(z=>z!==e&&i.teams[z]!==i.teams[e]&&!i.players[z].isDefeated);if(T.length===0)return null;const D=g.position;let K=T[0],U=Math.abs(i.players[T[0]].position.row-D.row)+Math.abs(i.players[T[0]].position.col-D.col);for(let z=1;z<T.length;z++){const J=Math.abs(i.players[T[z]].position.row-D.row)+Math.abs(i.players[T[z]].position.col-D.col);J<U&&(K=T[z],U=J)}return i.players[K]})();k.useEffect(()=>{h(m===e?"hand":"auxiliary")},[m,e]),k.useEffect(()=>{const T=(M==null?void 0:M.position)??{row:0,col:0},D=kv(g,T,d,p,n,i.map);return Ud(),D.forEach(({pos:K,cls:U})=>{const z=document.querySelector(`.board-cell[data-row="${K.row}"][data-col="${K.col}"]`);z&&z.classList.add(`board-cell--${U}`)}),Ud},[d,p]),k.useEffect(()=>{if(!a)return;const T=M??g,D=setTimeout(()=>{const{seg1:K,seg2:U}=rx(g,T,n,r,i.map);K&&U?t(K,U):K?t(K,K):s({type:"CONFIRM_PLOT",playerId:e})},800);return()=>clearTimeout(D)},[a]);function E(T){if(d===T){u(null);return}if(p===T){f(null);return}if(!d){u(T);return}if(!p){f(T);return}f(T)}function w(T){return T==="deck"?b.deck.filter(D=>!D.destroyed).length:T==="hand"?b.hand.filter(D=>!D.destroyed).length:T==="auxiliary"?b.auxiliary.length:T==="discard"?b.discard.length:T==="destroyed"?b.destroyedCards.length:0}function S(T){return T==="deck"?_?Iv(b.deck,b.unitId):[]:T==="hand"?b.hand.filter(D=>!D.destroyed):T==="auxiliary"?b.auxiliary:T==="discard"?b.discard:T==="destroyed"?b.destroyedCards:[]}const A=d!==null&&p!==null,N=_,$=x==="deck"&&_;return o.jsxs("div",{className:"plot-content",children:[o.jsxs("div",{className:"plot-panel__header",children:[o.jsx("span",{className:"plot-panel__player",style:{color:j},children:sl(e)}),o.jsx("span",{className:"plot-panel__prompt",children:"布局中"})]}),o.jsx("div",{className:"plot-tab-row",children:i.playerIds.map(T=>{const D=m===T,K=T===e;return o.jsxs("button",{className:`plot-tab${D?" plot-tab--active":""}`,style:D?{color:y(T),borderBottomColor:y(T)}:void 0,onClick:()=>v(T),children:[sl(T),K&&!D&&o.jsx("span",{className:"plot-tab__dot",style:{background:y(T)}})]},T)})}),m===e?o.jsxs("div",{className:"plot-slots",children:[o.jsx(Hd,{label:"主要阶段 1",cardInstanceId:d,getCard:n,hand:g.hand,onClear:()=>u(null),color:j}),o.jsx(Hd,{label:"主要阶段 2",cardInstanceId:p,getCard:n,hand:g.hand,onClear:()=>f(null),color:j})]}):l?o.jsxs("div",{className:"plot-slots",children:[o.jsx(Wd,{label:"主要阶段 1",card:b.plotSeg1,getCard:n}),o.jsx(Wd,{label:"主要阶段 2",card:b.plotSeg2,getCard:n})]}):o.jsxs("div",{className:"plot-slots",children:[o.jsxs("div",{className:"plot-slot-locked",children:[o.jsx("span",{children:"🔒"}),o.jsx("span",{children:"主要阶段 1"}),o.jsx("span",{className:"plot-slot-locked__hint",children:"对方已锁定"})]}),o.jsxs("div",{className:"plot-slot-locked",children:[o.jsx("span",{children:"🔒"}),o.jsx("span",{children:"主要阶段 2"}),o.jsx("span",{className:"plot-slot-locked__hint",children:"对方已锁定"})]})]}),o.jsxs("div",{className:"plot-zone-tabs",children:[o.jsxs("button",{className:`plot-zone-tab${$?" plot-zone-tab--active":""}`,style:$?{borderColor:j}:void 0,onClick:N?()=>h("deck"):void 0,disabled:!N,title:N?"卡组：按资料集顺序查看":"对方卡组不可查看",children:[o.jsx("span",{className:"plot-zone-tab__icon",children:N?"🂠":"🔒"}),o.jsx("span",{className:"plot-zone-tab__label",children:"卡组"}),o.jsx("span",{className:"plot-zone-tab__count",children:b.deck.filter(T=>!T.destroyed).length})]}),wv.map(({id:T,label:D,icon:K})=>{const U=x===T;return o.jsxs("button",{className:`plot-zone-tab${U?" plot-zone-tab--active":""}`,style:U?{borderColor:_?j:y(m)}:void 0,onClick:()=>h(T),title:`${D}：点击查看`,children:[o.jsx("span",{className:"plot-zone-tab__icon",children:K}),o.jsx("span",{className:"plot-zone-tab__label",children:D}),o.jsx("span",{className:"plot-zone-tab__count",children:w(T)})]},T)})]}),o.jsx("div",{className:"plot-zone-view",children:x==="hand"&&!_?o.jsxs("div",{className:"plot-zone-private",children:["🔒 对方手牌不可查看",o.jsx("br",{}),o.jsxs("span",{className:"plot-zone-private__count",children:["共 ",w("hand")," 张"]})]}):S(x).length===0?o.jsx("p",{className:"plot-zone-empty",children:"（此区域为空）"}):o.jsx("div",{className:"plot-card-grid",children:S(x).map(T=>{const D=n(T.defId),K=x==="hand"&&m===e,U=T.instanceId===d,z=T.instanceId===p;return o.jsx(Cv,{card:T,def:D,isSelected:U||z,segLabel:U?"①":z?"②":null,onClick:K?()=>E(T.instanceId):void 0},T.instanceId)})})}),o.jsx("div",{className:"plot-footer",children:o.jsx("button",{className:"plot-confirm-btn",disabled:!A,style:A?{borderColor:j,color:j}:void 0,onClick:()=>{d&&p&&t(d,p)},children:A?"确定布局":`请选择主要阶段 ${d?"2":"1"} 的卡牌`})}),o.jsx("style",{children:Mv})]})}function Hd({label:e,cardInstanceId:n,getCard:t,hand:a,onClear:r,color:i}){const s=a.find(x=>x.instanceId===n)??null,l=s?t(s.defId):null,{zoom:d,hide:u,getZoomHandlers:p}=wa(),f=l?`/assets/${l.frontImageId}`:"";return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"plot-slot",children:[o.jsx("div",{className:"plot-slot__label",children:e}),l&&s?o.jsxs("div",{className:"plot-slot__card",onClick:()=>{u(),r()},title:"点击取消选择",style:{borderColor:i,boxShadow:`0 0 8px ${i}55`},...p(f),children:[o.jsx("img",{src:f,alt:l.nameCn,className:"plot-slot__img",onError:x=>{x.target.style.opacity="0.4"}}),o.jsx("span",{className:"plot-slot__name",children:l.nameCn}),o.jsx("span",{className:"plot-slot__clear",children:"✕"})]}):o.jsx("div",{className:"plot-slot__empty",children:"— 未选择 —"})]}),o.jsx(Sa,{zoom:d})]})}function Wd({label:e,card:n,getCard:t}){const a=n?t(n.defId):null,r=a?`/assets/${a.frontImageId}`:"";return o.jsxs("div",{className:"plot-slot",children:[o.jsx("div",{className:"plot-slot__label",children:e}),a&&n?o.jsxs("div",{className:"plot-slot__card",style:{borderColor:"#888",cursor:"default"},children:[o.jsx("img",{src:r,alt:a.nameCn,className:"plot-slot__img",onError:i=>{i.target.style.opacity="0.4"}}),o.jsx("span",{className:"plot-slot__name",children:a.nameCn})]}):o.jsx("div",{className:"plot-slot__empty",children:"— 未布局 —"})]})}function Cv({card:e,def:n,isSelected:t,segLabel:a,onClick:r}){const{zoom:i,getZoomHandlers:s}=wa(),l=n?`/assets/${n.frontImageId}`:"";return o.jsxs(o.Fragment,{children:[o.jsxs("button",{className:`plot-card${t?" plot-card--selected":""}${r?"":" plot-card--readonly"}`,onClick:r,disabled:!r,title:(n==null?void 0:n.nameCn)??"???",...n?s(l):{},children:[n?o.jsxs(o.Fragment,{children:[o.jsx("img",{src:l,alt:n.nameCn,className:"plot-card__img",onError:d=>{d.target.style.opacity="0.3"}}),o.jsx("span",{className:"plot-card__name",children:n.nameCn}),n.damage!==void 0&&o.jsxs("span",{className:"plot-card__stat",children:["💥",n.damage]}),n.movementValue!==void 0&&o.jsxs("span",{className:"plot-card__stat",children:["🏃",n.movementValue]}),n.rangeMin!==void 0&&o.jsxs("span",{className:"plot-card__stat",children:["🎯",n.rangeMin,"–",n.rangeMax]})]}):o.jsx("span",{className:"plot-card__name",children:"???"}),a&&o.jsx("span",{className:"plot-card__badge",children:a})]}),o.jsx(Sa,{zoom:i})]})}function Nv({onContinue:e,playerLabel:n,hint:t}){return o.jsxs("div",{className:"pass-device-screen",children:[o.jsxs("div",{className:"pass-device-screen__content",children:[o.jsx("div",{className:"pass-device-screen__icon",children:"🤖"}),o.jsx("h2",{className:"pass-device-screen__title",children:"请将设备交给"}),o.jsx("h1",{className:"pass-device-screen__player",children:n}),o.jsx("p",{className:"pass-device-screen__hint",children:t}),o.jsxs("button",{className:"pass-device-screen__btn",onClick:e,children:[n," 已就位，继续"]})]}),o.jsx("style",{children:Tv})]})}const Mv=`
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
`,Tv=`
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
`;function rs(e,n){const t=kf(e,n);if(t.length===0)return n;if(t.length===1)return t[0];const a=e.players[n].position;let r=t[0],i=1/0;for(const s of t){const l=e.players[s].position,d=Math.abs(l.row-a.row)+Math.abs(l.col-a.col);d<i&&(i=d,r=s)}return r}function qo(){const{state:e,getCard:n}=Se(),{phase:t,currentTiming:a,turnOrder:r,pendingDamage:i}=e;if(t!=="action_seg1"&&t!=="action_seg2")return null;const s=t==="action_seg1"?1:2;return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"action-hud",style:i?{display:"none"}:void 0,children:[a==="movement"&&o.jsx(Ev,{seg:s,turnOrder:r,getCard:n},`mov-${s}`),(a==="ranged"||a==="melee")&&o.jsx($v,{seg:s,getCard:n},`combat-${s}-${a}`),a==="special"&&o.jsx(Pv,{seg:s,turnOrder:r,getCard:n},`special-${s}`),o.jsx("style",{children:Zd})]}),i&&o.jsxs(o.Fragment,{children:[o.jsx(Vv,{pendingDamage:i,getCard:n}),o.jsx("style",{children:Zd})]})]})}function Ev({seg:e,turnOrder:n,getCard:t}){const{state:a,dispatch:r,aiConfig:i,isOnline:s,localPlayerId:l,currentTurnPlayerId:d}=Se(),{map:u,pendingDamage:p,playerIds:f}=a,[x,h]=k.useState(new Set),[m,v]=k.useState(null),[_,b]=k.useState([]),[g,y]=k.useState(null),j=k.useRef(!1),M=new Map;for(const z of f){const J=a.players[z],L=Q.find(P=>P.id===J.unitId);M.set(z,mh(J,e,t,L.movement))}k.useEffect(()=>{if(!(m!==null||g!==null)&&!j.current&&!p){if(s&&l){if(d!==l)return;if(M.get(l))v(l);else{const z=a.players[l],J=e===1?z.plotSeg1:z.plotSeg2;if(!J)r({type:"ADD_LOG",message:`  ${Ee(l)} 未配置行动卡，跳过`});else{const L=t(J.defId);L&&L.actionType==="movement"&&r({type:"ADD_LOG",message:`  ${Ee(l)}【${L.nameCn}】无法发动移动`})}j.current=!0,r({type:"ADVANCE_TIMING"})}return}for(const z of n)if(!x.has(z))if(M.get(z)){v(z);return}else{const J=a.players[z],L=e===1?J.plotSeg1:J.plotSeg2;if(!L)r({type:"ADD_LOG",message:`  ${Ee(z)} 未配置行动卡，跳过`});else{const P=t(L.defId);P&&P.actionType==="movement"&&r({type:"ADD_LOG",message:`  ${Ee(z)}【${P.nameCn}】无法发动移动`})}h(P=>new Set([...P,z]));return}j.current=!0,r({type:"ADVANCE_TIMING"})}},[x,m,g,p,d]),k.useEffect(()=>{if(!m){b([]);return}const z=a.players[m],J=f.filter(R=>R!==m).map(R=>a.players[R].position),L=Q.find(R=>R.id===z.unitId),P=jn(z,t,"movement"),H=qi(z,e,t,P)||L.movement,O=vi(u,z.position,H,J,P,z.facing);b(O.map(R=>R.pos))},[m,a.players,u,e]),k.useEffect(()=>{if(!m||s&&l&&m!==l||!Oe(i,m))return;const J=zr(i,m),L=setTimeout(()=>{const P=ox(a,m,e,t,J);P&&r({type:"MOVE_UNIT",playerId:m,to:P.pos,path:P.path,finalFacing:P.finalFacing}),h(H=>new Set([...H,m])),v(null),b([])},800);return()=>clearTimeout(L)},[m]);function E(z,J){if(!m||Oe(i,m)||!_.some(P=>re(P,z)))return;let L=J;if(!L){const P=a.players[m],H=f.filter(X=>X!==m).map(X=>a.players[X].position),O=Q.find(X=>X.id===P.unitId),R=jn(P,t,"movement"),Y=qi(P,e,t,R)||O.movement;L=oc(u,P.position,P.facing,z,Y,H,R)}r({type:"MOVE_UNIT",playerId:m,to:z,path:L==null?void 0:L.path,finalFacing:L==null?void 0:L.finalFacing}),b([]),y(m),v(null)}function w(){g&&(h(z=>new Set([...z,g])),y(null),s&&(j.current=!0,r({type:"ADVANCE_TIMING"})))}if(s&&l&&d&&d!==l&&!m&&!g)return o.jsx("div",{className:"action-hud__panel action-hud__panel--waiting",children:o.jsxs("span",{className:"action-hud__hint",children:["等待 ",Ee(d)," 行动中…"]})});const S=n.every(z=>!M.get(z)||x.has(z));if(!s&&S&&m===null&&g===null||s&&j.current&&m===null&&g===null)return null;if(g!==null){const z=a.players[g],J=Ee(g),L=va(z.facing);return o.jsxs("div",{className:"action-hud__panel",children:[o.jsx("span",{className:"action-hud__mover",children:J}),o.jsx("span",{className:"action-hud__hint",children:"移动完毕，可选择调整机头方向（最多90°）"}),o.jsx(Dv,{playerId:g,disabledFacing:L}),o.jsx("button",{className:"action-hud__skip-btn",onClick:w,children:"确认方向"})]})}const A=m?Oe(i,m):!1,N=m?Ee(m):"";if(A)return o.jsxs("div",{className:"action-hud__panel action-hud__panel--ai-thinking",children:[o.jsxs("span",{className:"action-hud__mover",children:[N," (AI)"]}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__hint",children:"思考中…"})]});const $=m?a.players[m]:null,T=m&&$?jn($,t,"movement"):null,D=$?Q.find(z=>z.id===$.unitId):null,K=m&&$&&D?qi($,e,t,T??void 0)||D.movement:0,U=m?f.filter(z=>z!==m).map(z=>a.players[z].position):[];return o.jsxs(o.Fragment,{children:[m&&$&&o.jsx(zv,{reachable:_,map:u,from:$.position,fromFacing:$.facing,movementValue:K,blockedPositions:U,aux:T??void 0,onCellClick:E}),o.jsx("div",{className:"action-hud__panel",children:m?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"action-hud__mover",children:N}),o.jsx("span",{className:"action-hud__hint",children:"选择目标格（步数须用尽；点击选择路径）"}),(T==null?void 0:T.vernier)&&o.jsx("span",{className:"action-hud__aux-badge",title:"地形移动消耗-1，高低差消耗-1",children:"⚙ 喷射推进器"}),(T==null?void 0:T.wheel)&&o.jsx("span",{className:"action-hud__aux-badge",title:"移动力+2",children:"⚙ 滑轮"})]}):o.jsx("span",{className:"action-hud__hint",children:"计算移动路径中…"})})]})}function Dv({playerId:e,disabledFacing:n}){const{state:t,dispatch:a}=Se(),i=t.players[e].facing,s=[{facing:"N",label:"↑N"},{facing:"E",label:"E→"},{facing:"S",label:"↓S"},{facing:"W",label:"←W"}];return o.jsxs("div",{className:"facing-compass",title:"调整机头朝向（不可掉头）",children:[o.jsx("span",{className:"facing-compass__label",children:"机头"}),s.map(({facing:l,label:d})=>{const u=l===n;return o.jsx("button",{className:["facing-compass__btn",i===l?"facing-compass__btn--active":"",u?"facing-compass__btn--disabled":""].join(" ").trim(),onClick:()=>{u||a({type:"ADJUST_FACING",playerId:e,facing:l})},disabled:u,title:u?"无法180°掉头":`朝${l}方`,children:d},l)})]})}function zv({reachable:e,map:n,from:t,fromFacing:a,movementValue:r,blockedPositions:i,aux:s,onCellClick:l}){const d=wi(),u=k.useRef({allPaths:[],selectedIdx:0,hoveredPos:null}),[p,f]=k.useState(0),x=()=>f(m=>m+1);k.useEffect(()=>{document.querySelectorAll(".board-cell--path-ghost").forEach(j=>j.classList.remove("board-cell--path-ghost"));const{allPaths:m,selectedIdx:v,hoveredPos:_}=u.current;if(!_||m.length===0)return;const b=m[v];if(!b)return;const g=b.path.slice(0,-1);for(const j of g){const M=document.querySelector(`.board-cell[data-row="${j.row}"][data-col="${j.col}"]`);M==null||M.classList.add("board-cell--path-ghost")}const y=document.querySelector(`.board-cell[data-row="${_.row}"][data-col="${_.col}"]`);return y&&(y.dataset.pathLabel=m.length>1?`${v+1}/${m.length}`:""),()=>{document.querySelectorAll(".board-cell--path-ghost").forEach(j=>j.classList.remove("board-cell--path-ghost")),y&&delete y.dataset.pathLabel}},[p]),k.useEffect(()=>{const m=[];document.querySelectorAll(".board-cell--reachable").forEach(v=>{v.classList.remove("board-cell--reachable")});for(const v of e){const _=document.querySelector(`.board-cell[data-row="${v.row}"][data-col="${v.col}"]`);if(!_)continue;_.classList.add("board-cell--reachable");const b=()=>{const{allPaths:T,selectedIdx:D}=u.current;l(v,T[D]??null)},g=()=>{const T=Qi(n,t,a,v,r,i,s);u.current={allPaths:T,selectedIdx:0,hoveredPos:v},x()},y=()=>{u.current={allPaths:[],selectedIdx:0,hoveredPos:null},x()},j=T=>{const{allPaths:D,selectedIdx:K}=u.current;if(D.length<=1)return;T.preventDefault();const U=T.deltaY>0?1:-1;u.current={...u.current,selectedIdx:(K+U+D.length)%D.length},x()};let M=null,E=0,w=0,S=!1;const A=T=>{if(E=T.touches[0].clientX,w=T.touches[0].clientY,S=!1,d){const{hoveredPos:D}=u.current;if(D&&D.row===v.row&&D.col===v.col)return;const K=Qi(n,t,a,v,r,i,s);u.current={allPaths:K,selectedIdx:0,hoveredPos:v},x(),T.preventDefault();return}M=setTimeout(()=>{S=!0;const D=Qi(n,t,a,v,r,i,s);u.current={allPaths:D,selectedIdx:0,hoveredPos:v},x()},400)},N=()=>{M&&(clearTimeout(M),M=null),S&&!d&&(u.current={allPaths:[],selectedIdx:0,hoveredPos:null},x()),S=!1},$=T=>{if(d||!S)return;const D=T.touches[0].clientX-E,K=T.touches[0].clientY-w;if(Math.abs(D)>40||Math.abs(K)>40){const{allPaths:U,selectedIdx:z}=u.current;if(U.length<=1)return;const J=Math.abs(D)>Math.abs(K)?D>0?1:-1:K>0?1:-1;u.current={...u.current,selectedIdx:(z+J+U.length)%U.length},x(),E=T.touches[0].clientX,w=T.touches[0].clientY}};_.addEventListener("click",b),_.addEventListener("mouseenter",g),_.addEventListener("mouseleave",y),_.addEventListener("wheel",j,{passive:!1}),_.addEventListener("touchstart",A,{passive:!0}),_.addEventListener("touchend",N),_.addEventListener("touchcancel",N),_.addEventListener("touchmove",$,{passive:!0}),m.push(()=>{M&&clearTimeout(M),_.removeEventListener("click",b),_.removeEventListener("mouseenter",g),_.removeEventListener("mouseleave",y),_.removeEventListener("wheel",j),_.removeEventListener("touchstart",A),_.removeEventListener("touchend",N),_.removeEventListener("touchcancel",N),_.removeEventListener("touchmove",$)})}return()=>{document.querySelectorAll(".board-cell--reachable").forEach(v=>v.classList.remove("board-cell--reachable")),document.querySelectorAll(".board-cell--path-ghost").forEach(v=>v.classList.remove("board-cell--path-ghost")),document.querySelectorAll(".board-cell[data-path-label]").forEach(v=>delete v.dataset.pathLabel),u.current={allPaths:[],selectedIdx:0,hoveredPos:null},m.forEach(v=>v())}},[e,n,t,a,r,i,s,l]);const h=k.useCallback(()=>{const{allPaths:m,selectedIdx:v}=u.current;m.length<=1||(u.current={...u.current,selectedIdx:(v+1)%m.length},x())},[]);if(d){const{allPaths:m,hoveredPos:v}=u.current;if(v&&m.length>1)return o.jsxs("button",{className:"move-cycle-btn",onClick:h,style:{position:"fixed",bottom:80,left:"50%",transform:"translateX(-50%)",zIndex:600,padding:"10px 24px",background:"rgba(22, 33, 62, 0.95)",border:"1px solid #ffea00",borderRadius:8,color:"#ffea00",fontFamily:"var(--font-mono)",fontSize:"0.85rem",fontWeight:"bold",cursor:"pointer",minHeight:44,backdropFilter:"blur(4px)"},children:["切换路径 (",u.current.selectedIdx+1,"/",m.length,")"]})}return null}function $f({reachable:e,onCellClick:n}){return k.useEffect(()=>(document.querySelectorAll(".board-cell").forEach(a=>{a.classList.remove("board-cell--reachable"),a.onclick=null}),e.forEach(a=>{const r=document.querySelector(`.board-cell[data-row="${a.row}"][data-col="${a.col}"]`);r&&(r.classList.add("board-cell--reachable"),r.onclick=()=>n(a))}),()=>{document.querySelectorAll(".board-cell--reachable").forEach(a=>{a.classList.remove("board-cell--reachable"),a.onclick=null})}),[e,n]),null}function $v({seg:e,getCard:n}){const{state:t,dispatch:a,aiConfig:r,isOnline:i,localPlayerId:s,currentTurnPlayerId:l}=Se(),{map:d,turnOrder:u,currentTiming:p,pendingDamage:f}=t,[x,h]=k.useState(new Set),[m,v]=k.useState(null),[_,b]=k.useState(null),g=k.useRef(!1),[y,j]=k.useState(null);k.useEffect(()=>{m&&j(rs(t,m))},[m]);const[M,E]=k.useState(!1),[w,S]=k.useState([]),[A,N]=k.useState(!1),$=p==="ranged"?"ranged":"melee",T=$==="ranged"?"射击时机":"近战时机";if(k.useEffect(()=>{if(m===null&&!g.current&&!f){if(i&&s){if(l!==s)return;const te=t.players[s];if(Ln(te,e,$,n))v(s),E(!1),N(!1),S([]);else{const ee=e===1?te.plotSeg1:te.plotSeg2;if(ee){const Pe=n(ee.defId);Pe&&($==="ranged"&&Pe.actionType==="ranged"||$==="melee"&&(Pe.actionType==="melee"||Pe.actionType==="charge"))&&a({type:"ADD_LOG",message:`  ${Ee(s)}【${Pe.nameCn}】条件不满足，无法发动`})}g.current=!0,a({type:"ADVANCE_TIMING"})}return}for(const te of u){if(x.has(te))continue;const Ie=t.players[te];if(!Ln(Ie,e,$,n)){const Pe=e===1?Ie.plotSeg1:Ie.plotSeg2;if(Pe){const Ue=n(Pe.defId);Ue&&($==="ranged"&&Ue.actionType==="ranged"||$==="melee"&&(Ue.actionType==="melee"||Ue.actionType==="charge"))&&a({type:"ADD_LOG",message:`  ${Ee(te)}【${Ue.nameCn}】条件不满足，无法发动`})}h(Ue=>new Set([...Ue,te]));return}v(te),E(!1),N(!1),S([]);return}g.current=!0,a({type:"ADVANCE_TIMING"})}},[x,m,f,n,l]),k.useEffect(()=>{if(!m||f||i&&s&&m!==s||!Oe(r,m))return;const Ie=zr(r,m),ee=rs(t,m),Pe=setTimeout(()=>{if(ix(t,m,e,$,n,Ie)){const Wn=t.players[m],Pt=Ln(Wn,e,$,n),Yf=(Pt==null?void 0:Pt.actionType)==="charge"?"RESOLVE_CHARGE":$==="ranged"?"RESOLVE_RANGED":"RESOLVE_MELEE";a({type:Yf,attackerId:m,targetId:ee})}else{const Wn=t.players[m],Pt=Ln(Wn,e,$,n);a({type:"ADD_LOG",message:`  ${Ee(m)} 放弃发动${Pt?`【${Pt.nameCn}】`:T}`})}h(Wn=>new Set([...Wn,m])),v(null),E(!1),N(!1),S([])},800);return()=>clearTimeout(Pe)},[m,f]),i&&s&&l&&l!==s&&!m)return o.jsx("div",{className:"action-hud__panel action-hud__panel--waiting",children:o.jsxs("span",{className:"action-hud__hint",children:["等待 ",Ee(l)," 行动中…"]})});if(!m)return null;const D=t.players[m],K=kf(t,m),U=y??rs(t,m),z=t.players[U],J=p==="melee"?jn(D,n,"melee"):{vernier:!1,moveSensor:!1},L=Ln(D,e,$,n),P=(L==null?void 0:L.actionType)==="charge",H=Oe(r,m),O=K.filter(te=>{const Ie=t.players[te];if(P&&$==="melee"){const ee=Q.find(Ue=>Ue.id===D.unitId),Pe=Q.find(Ue=>Ue.id===Ie.unitId);return yr(D,Ie,e,d,ee,Pe,n).canAttack}return Go(D,Ie,e,$,d,n).canAttack});let R;if(P&&$==="melee"){const te=Q.find(ee=>ee.id===D.unitId),Ie=Q.find(ee=>ee.id===z.unitId);R=yr(D,z,e,d,te,Ie,n)}else R=Go(D,z,e,$,d,n);const Y=Q.find(te=>te.id===D.unitId),X=Q.find(te=>te.id===z.unitId);function oe(){if(!R.canAttack||!m)return;a({type:P?"RESOLVE_CHARGE":$==="ranged"?"RESOLVE_RANGED":"RESOLVE_MELEE",attackerId:m,targetId:U}),b(`${Y.nameCn} → ${X.nameCn}：造成 ${R.damage} 伤害`),h(Ie=>new Set([...Ie,m])),v(null),E(!1),N(!1),S([]),i&&(g.current=!0,a({type:"ADVANCE_TIMING"}))}function ie(){if(!m)return;const te=Ln(t.players[m],e,$,n);a({type:"ADD_LOG",message:`  ${Ee(m)} 放弃发动${te?`【${te.nameCn}】`:T}`}),b(null),h(Ie=>new Set([...Ie,m])),v(null),E(!1),N(!1),S([]),i&&(g.current=!0,a({type:"ADVANCE_TIMING"}))}function de(){if(!m||M)return;const te=Nf(d,D.position,[z.position]);S(te),N(!0)}function ye(te){!m||!A||(a({type:"MELEE_SENSOR_MOVE",playerId:m,to:te}),E(!0),N(!1),S([]))}function xn(){N(!1),S([])}const $n=Ee(m),Na=R.card?P?`【${R.card.nameCn}】突击值 ${Y.assault} vs 防御${X.assaultDef}`:`【${R.card.nameCn}】射程 ${R.card.rangeMin??"—"}–${R.card.rangeMax??"—"}`:null,At=$==="melee"&&J.moveSensor&&!M;return H?o.jsxs("div",{className:"action-hud__panel action-hud__panel--ai-thinking",children:[o.jsxs("span",{className:"action-hud__mover",children:[Ee(m)," (AI)"]}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__hint",children:"思考中…"})]}):o.jsxs(o.Fragment,{children:[A&&o.jsx($f,{reachable:w,onCellClick:ye}),!A&&o.jsx(Av,{validTargets:O.map(te=>({playerId:te,pos:t.players[te].position})),selectedTargetId:U,onSelectTarget:j}),o.jsxs("div",{className:"action-hud__panel action-hud__panel--combat",children:[o.jsx("span",{className:"action-hud__mover",children:$n}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__timing-label",children:T}),J.moveSensor&&o.jsxs("span",{className:`action-hud__aux-badge ${M?"action-hud__aux-badge--used":""}`,title:"近战前可移动1格",children:["⚙ 移动传感器",M?"（已使用）":""]}),J.vernier&&o.jsx("span",{className:"action-hud__aux-badge",title:"地形消耗-1，高低差-1",children:"⚙ 喷射推进器"}),R.card?o.jsxs("span",{className:"action-hud__card-info",children:[Na,R.card.damage!==void 0&&o.jsxs("span",{className:"action-hud__dmg",children:[" 伤害 ",R.card.damage]})]}):o.jsxs("span",{className:"action-hud__hint",children:["无",$==="ranged"?"射击":"近战","牌"]}),o.jsx("span",{className:`action-hud__validity ${R.canAttack?"action-hud__validity--ok":"action-hud__validity--no"}`,children:R.canAttack?P?`距离 ${R.dist} ✓ → 造成 ${R.damage} 伤 / 自机反伤 ${R.counterDamage}`:`距离 ${R.dist} ✓ → ${R.damage} 伤`:R.card?R.reason:""}),_&&o.jsx("span",{className:"action-hud__result",children:_}),A?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"action-hud__hint",children:"点击高亮格移动（传感器），或"}),o.jsx("button",{className:"action-hud__skip-btn",onClick:xn,children:"取消移动"})]}):o.jsxs(o.Fragment,{children:[At&&o.jsx("button",{className:"action-hud__sensor-btn",onClick:de,title:"移动传感器：攻击前可移动1格",children:"传感器移动"}),O.length>1&&o.jsxs("span",{className:"action-hud__target-hint",children:["目标: ",Ee(U)," (",X.nameCn,") — 点击地图切换目标 (",O.length,"个可选)"]}),o.jsx("button",{className:"action-hud__attack-btn",onClick:oe,disabled:!R.canAttack,title:R.canAttack?`攻击 ${X.nameCn}`:R.reason,children:"执行攻击"}),o.jsxs("button",{className:"action-hud__skip-btn",onClick:ie,children:["跳过",$==="ranged"?"射击":"近战"]})]})]})]})}function Av({validTargets:e,selectedTargetId:n,onSelectTarget:t}){return k.useEffect(()=>{document.querySelectorAll(".board-cell--target, .board-cell--target-alt").forEach(a=>{a.classList.remove("board-cell--target","board-cell--target-alt"),a.onclick=null});for(const{playerId:a,pos:r}of e){const i=document.querySelector(`.board-cell[data-row="${r.row}"][data-col="${r.col}"]`);i&&(a===n?i.classList.add("board-cell--target"):(i.classList.add("board-cell--target-alt"),i.onclick=s=>{s.stopPropagation(),t(a)}))}return()=>{document.querySelectorAll(".board-cell--target, .board-cell--target-alt").forEach(a=>{a.classList.remove("board-cell--target","board-cell--target-alt"),a.onclick=null})}},[e,n,t]),null}function Pv({seg:e,turnOrder:n,getCard:t}){const{state:a,dispatch:r,aiConfig:i,isOnline:s,localPlayerId:l,currentTurnPlayerId:d}=Se(),{map:u,pendingDamage:p}=a,[f,x]=k.useState(new Set),[h,m]=k.useState(null),[v,_]=k.useState([]),b=k.useRef(!1);if(k.useEffect(()=>{if(h===null&&!b.current&&!p){if(s&&l){if(d!==l)return;const A=a.players[l],N=e===1?A.plotSeg1:A.plotSeg2,$=N?t(N.defId):null;!$||$.actionType!=="mine"&&$.actionType!=="special"?(b.current=!0,r({type:"ADVANCE_TIMING"})):m(l);return}for(const A of n){if(f.has(A))continue;const N=a.players[A],$=e===1?N.plotSeg1:N.plotSeg2,T=$?t($.defId):null;if(!T||T.actionType!=="mine"&&T.actionType!=="special"){x(D=>new Set([...D,A]));return}m(A);return}b.current=!0,r({type:"ADVANCE_TIMING"})}},[f,h,p,t,d]),k.useEffect(()=>{if(!h){_([]);return}const A=a.players[h],N=e===1?A.plotSeg1:A.plotSeg2,$=N?t(N.defId):null;if($&&$.actionType==="mine"){const T=Cf(u,A.position,1,[]);_(T)}else _([])},[h,u,e,a.players,t]),k.useEffect(()=>{if(!h||p||s&&l&&h!==l||!Oe(i,h))return;const N=zr(i,h),$=setTimeout(()=>{const T=lx(a,h,e,t,N);if(T){const D=a.players[h],K=e===1?D.plotSeg1:D.plotSeg2,U=K?t(K.defId):null;r({type:"PLACE_MINE",playerId:h,to:T,damage:(U==null?void 0:U.damage)||3})}x(D=>new Set([...D,h])),m(null)},800);return()=>clearTimeout($)},[h,p]),s&&l&&d&&d!==l&&!h)return o.jsx("div",{className:"action-hud__panel action-hud__panel--waiting",children:o.jsxs("span",{className:"action-hud__hint",children:["等待 ",Ee(d)," 行动中…"]})});if(!h)return null;const g=a.players[h],y=e===1?g.plotSeg1:g.plotSeg2,j=y?t(y.defId):null,M=Ee(h),E=Oe(i,h);function w(){x(A=>new Set([...A,h])),m(null),s&&(b.current=!0,r({type:"ADVANCE_TIMING"}))}function S(A){!h||!j||j.actionType!=="mine"||v.some(N=>re(N,A))&&(r({type:"PLACE_MINE",playerId:h,to:A,damage:j.damage||3}),x(N=>new Set([...N,h])),m(null),s&&(b.current=!0,r({type:"ADVANCE_TIMING"})))}return E?o.jsxs("div",{className:"action-hud__panel action-hud__panel--ai-thinking",children:[o.jsxs("span",{className:"action-hud__mover",children:[M," (AI)"]}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__hint",children:"思考中…"})]}):o.jsxs(o.Fragment,{children:[v.length>0&&o.jsx($f,{reachable:v,onCellClick:S}),o.jsxs("div",{className:"action-hud__panel action-hud__panel--special",children:[o.jsx("span",{className:"action-hud__mover",children:M}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__timing-label",children:"特殊时机"}),o.jsx("span",{className:"action-hud__card-info",children:j?`【${j.nameCn}】效果`:"（无）"}),(j==null?void 0:j.actionType)==="mine"?o.jsx("span",{className:"action-hud__hint",children:"请点击高亮格部署机雷，或"}):o.jsx("span",{className:"action-hud__hint",children:"暂无此牌效果支持，请"}),o.jsx("button",{className:"action-hud__skip-btn",onClick:w,children:"跳过"})]})]})}function Vv({pendingDamage:e,getCard:n}){const{state:t,dispatch:a,aiConfig:r,isOnline:i,localPlayerId:s}=Se(),{targetId:l,remaining:d,selectedInstanceIds:u}=e,{zoom:p,getZoomHandlers:f}=wa(),[x,h]=k.useState(null),m=t.players[l];Dt(m);const v=u.length===0,_=!!e.attackerId&&v&&!e.attackerDesignatedCardId,b=_?e.attackerId:l,g=Ee(b),y=i&&s&&b!==s,j=!y&&Oe(r,b),M=zr(r,b),E=!i&&!j&&b!==x;k.useEffect(()=>{j?h(b):i||h(null)},[b,j,i]),k.useEffect(()=>{if(!j||y||d<=0)return;const z=t.players[l],J=Er(z),L=t.playerIds.filter(O=>O!==l&&t.teams[O]!==t.teams[l]&&!t.players[O].isDefeated),P=L.length>0?t.players[L[0]]:z,H=setTimeout(()=>{if(J.length>0){const O=sx(e,z,n,M,_,P);a(O?{type:"SELECT_DAMAGE_CARD",playerId:b,instanceId:O}:{type:"CONFIRM_DAMAGE_SELECTION",playerId:b})}else a({type:"CONFIRM_DAMAGE_SELECTION",playerId:b})},600);return()=>clearTimeout(H)},[d,b,j,y,t.players]);function w(z){a({type:"SELECT_DAMAGE_CARD",playerId:b,instanceId:z})}function S(){a({type:"CONFIRM_DAMAGE_SELECTION",playerId:b})}if(y)return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"damage-pass-overlay",children:o.jsxs("div",{className:"damage-pass-card",children:[o.jsx("p",{className:"damage-pass__eyebrow",children:"— 伤害分配 —"}),o.jsx("h2",{className:"damage-pass__title",children:"等待对手选择"}),o.jsx("div",{className:"damage-pass__player",children:g}),o.jsx("p",{className:"damage-pass__context",children:_?"【瞄准加成】攻方正在指定要摧毁的卡牌…":`${g} 正在选择要摧毁的 ${d} 张卡牌…`}),o.jsx("div",{className:"damage-pass__spinner",children:"⏳"})]})}),o.jsx("style",{children:Yd})]});if(E)return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"damage-pass-overlay",children:o.jsxs("div",{className:"damage-pass-card",children:[o.jsx("p",{className:"damage-pass__eyebrow",children:"— 伤害分配 —"}),o.jsx("h2",{className:"damage-pass__title",children:"请将设备交给"}),o.jsx("div",{className:"damage-pass__player",children:g}),o.jsx("p",{className:"damage-pass__context",children:_?"【瞄准加成】攻方有权指定第一张要摧毁的卡牌":`防方选择要摧毁的 ${d} 张卡牌（可自动分配）`}),o.jsxs("button",{className:"damage-pass__btn",onClick:()=>h(b),children:[g," 已准备"]})]})}),o.jsx("style",{children:Yd})]});const A=m.hand.filter(z=>!z.destroyed),N=m.plotSeg1&&!m.plotSeg1.destroyed?[m.plotSeg1]:[],$=m.plotSeg2&&!m.plotSeg2.destroyed?[m.plotSeg2]:[],T=m.auxiliary.filter(z=>!z.destroyed),D=m.deck.filter(z=>!z.destroyed),K=[];A.length>0&&K.push({label:"手牌",cards:A}),N.length>0&&K.push({label:"布局格",sublabel:"主要阶段1",cards:N}),$.length>0&&K.push({label:"布局格",sublabel:"主要阶段2",cards:$}),T.length>0&&K.push({label:"辅助区",cards:T});const U=D[0]??null;return o.jsxs("div",{className:"action-hud",children:[o.jsxs("div",{className:"action-hud__panel action-hud__panel--damage",children:[o.jsxs("div",{className:"damage-panel__header",children:[o.jsx("span",{className:"damage-panel__title",children:"⚔️ 伤害分配"}),o.jsx("span",{className:"damage-panel__player",children:_?`${g} (瞄准指定)`:g}),o.jsxs("span",{className:"damage-panel__remaining",children:["还需摧毁 ",o.jsx("strong",{children:d})," 张卡牌"]})]}),(e.destroyedBombCount??0)>0&&o.jsxs("div",{className:"damage-panel__bomb-alert",children:["💣 已选中 ",e.destroyedBombCount," 张炸弹卡，选完后将进行誘爆检查"]}),o.jsx("div",{className:"damage-panel__hint",children:_?`【瞄准加成】攻方有权指定第一张要摧毁的卡牌！可从手牌、辅助区、卡组、布局格中选择。请 ${g} 选择：`:e.source==="ranged"?"射击伤害：须先从手牌 / 布局格 / 辅助区选择卡牌破坏，不足部分自动从牌组顶破坏。":"牌组与弃牌区已耗尽，近战伤害切换为自选模式。请从手牌 / 布局格 / 辅助区选择。"}),o.jsxs("div",{className:"damage-panel__zones",children:[K.map((z,J)=>o.jsxs("div",{className:"damage-zone",children:[o.jsxs("span",{className:"damage-zone__label",children:[z.label,z.sublabel&&o.jsxs("span",{className:"damage-zone__sub",children:["（",z.sublabel,"）"]})]}),o.jsx("div",{className:"damage-zone__cards",children:z.cards.map(L=>{const P=n(L.defId),H=(P==null?void 0:P.nameCn)??L.defId,O=u.includes(L.instanceId),R=P!=null&&P.frontImageId?`/assets/${P.frontImageId}`:null;return o.jsxs("button",{className:`damage-card-btn ${O?"damage-card-btn--selected":""} ${P!=null&&P.hasBombIcon?"damage-card-btn--bomb":""}`,onClick:()=>w(L.instanceId),disabled:O,title:`${H} (${(P==null?void 0:P.actionType)??"?"})${P!=null&&P.hasBombIcon?" ⚠️ 含诱爆":""}`,...R?f(R):{},children:[o.jsx("span",{className:"damage-card-btn__name",children:H}),(P==null?void 0:P.isKaiVariant)&&o.jsx("span",{className:"damage-card-btn__det",title:"改型",children:"◆"}),(P==null?void 0:P.hasBombIcon)&&o.jsx("span",{className:"damage-card-btn__det damage-card-btn__bomb-icon",title:"诱爆卡",children:"💣"})]},L.instanceId)})})]},J)),U&&(e.source!=="ranged"||_)&&o.jsxs("div",{className:"damage-zone",children:[o.jsxs("span",{className:"damage-zone__label",children:["卡组",o.jsxs("span",{className:"damage-zone__sub",children:["（共 ",D.length," 张，正面朝下）"]})]}),o.jsx("div",{className:"damage-zone__cards",children:o.jsxs("button",{className:"damage-card-btn damage-card-btn--deck",onClick:()=>w(U.instanceId),title:"从卡组顶部翻开并摧毁 1 张（诱爆正常触发）",children:[o.jsx("span",{className:"damage-card-btn__deck-back",children:"🂠"}),o.jsx("span",{className:"damage-card-btn__name",children:"顶部 × 1"})]})})]}),U&&e.source==="ranged"&&!_&&o.jsxs("div",{className:"damage-zone",children:[o.jsxs("span",{className:"damage-zone__label",children:["卡组",o.jsxs("span",{className:"damage-zone__sub",children:["（共 ",D.length," 张）"]})]}),o.jsx("div",{className:"damage-zone__cards",children:o.jsxs("div",{className:"damage-card-btn damage-card-btn--deck",style:{opacity:.5,cursor:"default"},title:"射击伤害的牌组部分将在选完表牌后自动从顶部破坏",children:[o.jsx("span",{className:"damage-card-btn__deck-back",children:"🂠"}),o.jsx("span",{className:"damage-card-btn__name",children:"自动破坏"})]})})]})]}),o.jsx("div",{className:"damage-panel__actions",children:o.jsx("button",{className:"action-hud__skip-btn",onClick:S,title:"剩余伤害将从牌库顶部自动摧毁",children:"自动分配剩余伤害"})})]}),o.jsx(Sa,{zoom:p})]})}const Zd=`
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
.action-hud__target-hint {
  font-size: 0.78rem;
  color: #f0c040;
  padding: 2px 0;
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
`,Yd=`
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
`;function Lv({onBack:e}){return o.jsxs("div",{className:"rules-page",children:[o.jsxs("div",{className:"rules-page__header",children:[o.jsx("button",{className:"rules-back-btn",onClick:e,children:"← 返回"}),o.jsx("h1",{className:"rules-page__title",children:"游戏规则"}),o.jsx("span",{className:"rules-page__subtitle",children:"エムブリオマシン"})]}),o.jsxs("div",{className:"rules-page__body",children:[o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"游戏概述"}),o.jsx("p",{children:"《胚胎机器》是一款双人对战策略游戏。每位玩家控制一台战机（机体），通过秘密布置行动牌来控制机体的移动与战斗。 当对手满足任意一项败北条件时，本方获胜。"})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"准备阶段"}),o.jsxs("ol",{className:"rules-list",children:[o.jsx("li",{children:"双方各选择一台机体，机体自带专属牌组。"}),o.jsx("li",{children:"选择地图，确定双方初始出生区域（地图短边中央3格）。"}),o.jsxs("li",{children:["将各自牌组洗混，游戏开始时双方各抽取等同于本机",o.jsx("b",{children:"回避值"}),"数量的手牌。"]}),o.jsx("li",{children:"双方机体初始机头朝向对手方向（玩家1朝南，玩家2朝北）。"})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"回合流程"}),o.jsxs("div",{className:"rules-flow",children:[o.jsxs("div",{className:"rules-flow__step",children:[o.jsx("span",{className:"rules-flow__num",children:"1"}),o.jsxs("div",{children:[o.jsx("strong",{children:"抽牌阶段"}),o.jsxs("p",{children:["双方各从牌组顶抽取等同于自己机体",o.jsx("b",{children:"回避值"}),"数量的牌。若牌组耗尽，废弃区的牌重新洗混后继续抽取。"]})]})]}),o.jsxs("div",{className:"rules-flow__step",children:[o.jsx("span",{className:"rules-flow__num",children:"2"}),o.jsxs("div",{children:[o.jsx("strong",{children:"布局阶段"}),o.jsxs("p",{children:["双方各自秘密为",o.jsx("b",{children:"主要阶段1"}),"和",o.jsx("b",{children:"主要阶段2"}),"各布置一张行动牌（面朝下）， 然后将设备交给对方进行同样操作。双方确认后，翻开亮牌，进入行动阶段。"]})]})]}),o.jsxs("div",{className:"rules-flow__step",children:[o.jsx("span",{className:"rules-flow__num",children:"3"}),o.jsxs("div",{children:[o.jsx("strong",{children:"行动主要阶段1 & 主要阶段2"}),o.jsxs("p",{children:["每个段落依次经历四个时机：",o.jsx("b",{children:"移动 → 射击 → 近战 → 特殊"}),'。 每个时机内，双方按该时机的优先顺序依次行动（详见"行动顺序"）。']})]})]}),o.jsxs("div",{className:"rules-flow__step",children:[o.jsx("span",{className:"rules-flow__num",children:"4"}),o.jsxs("div",{children:[o.jsx("strong",{children:"清理阶段"}),o.jsx("p",{children:"将已布置的牌（主要阶段1→主要阶段2顺序）和手中剩余的牌全部放入废弃区，准备下一回合。"})]})]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"行动顺序与先制值"}),o.jsxs("p",{children:["每台机体有固定的",o.jsx("b",{children:"先制值（数字越大越快）"}),"。先制值高的玩家在每个时机优先行动，但不同时机的排序逻辑有所不同："]}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"移动时机："}),"先比较该段落的",o.jsx("b",{children:"移动牌面数值"}),"（移动值大的先动）；移动值相同时再比先制值。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"射击/近战/特殊时机："}),"直接按",o.jsx("b",{children:"先制值"}),"排序（高者先行动）。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"平局处理："}),"先制值相同时，玩家1优先行动。"]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"机头朝向与攻击扇区"}),o.jsxs("p",{children:["每台机体具有明确的",o.jsx("b",{children:"机头朝向"}),"（N/S/E/W），初始朝向对手方向。"]}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"攻击限制："}),"射击攻击只能对准",o.jsx("b",{children:"机体正前方（含正侧方延长线）180°扇区"}),"内的目标。目标在机体正后方时无法射击。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"朝向更新："}),"机体移动后，机头自动朝向移动方向。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"手动调整："}),'可在白兵时机前使用"调整朝向"按钮免费更改机头方向，无需消耗任何牌。']}),o.jsxs("li",{children:[o.jsx("b",{children:"近战无扇区限制："}),"白兵/突击攻击不受前方扇区约束，可攻击相邻格的敌方。"]})]}),o.jsx("p",{className:"rules-note",children:"注：扇区边界（正侧方延长线上的格子）视为前方，可以攻击。"})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"行动时机说明"}),o.jsxs("div",{className:"rules-timing-grid",children:[o.jsxs("div",{className:"rules-timing-card",children:[o.jsx("span",{className:"rules-timing-icon",children:"🏃"}),o.jsx("strong",{children:"移动时机"}),o.jsxs("p",{children:["若该段落布局的是",o.jsx("b",{children:"移动牌"}),"，则可在地图上移动。移动力数值决定可移动格数；地形代价和高度差均额外消耗移动力。无移动牌则自动跳过。"]})]}),o.jsxs("div",{className:"rules-timing-card",children:[o.jsx("span",{className:"rules-timing-icon",children:"🎯"}),o.jsx("strong",{children:"射击时机"}),o.jsxs("p",{children:["若该段落布局的是",o.jsx("b",{children:"射击牌"}),"，可对正前方扇区内、射程范围内且视线通畅的敌方发动远程攻击。若",o.jsx("b",{children:"主要阶段1布置了瞄准牌"}),"，则主要阶段2的射击伤害额外+1。"]})]}),o.jsxs("div",{className:"rules-timing-card",children:[o.jsx("span",{className:"rules-timing-icon",children:"⚔️"}),o.jsx("strong",{children:"近战时机"}),o.jsxs("p",{children:["若该段落布局的是",o.jsx("b",{children:"近战牌"}),"，可对",o.jsx("b",{children:"相邻格（切比雪夫距离=1）"}),"的敌方发动近战攻击，无扇区限制。主要阶段1有瞄准牌时，主要阶段2的近战伤害也+1。"]})]}),o.jsxs("div",{className:"rules-timing-card",children:[o.jsx("span",{className:"rules-timing-icon",children:"⚡"}),o.jsx("strong",{children:"特殊时机"}),o.jsxs("p",{children:[o.jsx("b",{children:"突击牌"}),"→冲锋至目标相邻格再发动突击；",o.jsx("b",{children:"机雷牌"}),"→在附近格部署机雷；",o.jsx("b",{children:"护甲牌"}),"→在本时机被动生效（减少受到的伤害）。无特殊牌则跳过。"]})]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"移动规则"}),o.jsxs("p",{children:["移动时，机体从当前格出发按移动牌数值进行扩展，每进入一个格子消耗对应地形的基础代价 ",o.jsx("b",{children:"加上高度差"}),"："]}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"地形"}),o.jsx("th",{children:"基础移动代价"}),o.jsx("th",{children:"战斗效果"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"平地"}),o.jsx("td",{children:"1"}),o.jsx("td",{children:"无"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"砂地"}),o.jsx("td",{children:"1"}),o.jsx("td",{children:"无"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"废墟"}),o.jsx("td",{children:"2"}),o.jsx("td",{children:"无"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"森林"}),o.jsx("td",{children:"2"}),o.jsx("td",{children:"处于其中的机体受到射击伤害 −1（掩护）"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"高地"}),o.jsx("td",{children:"1 + 高度差*"}),o.jsx("td",{children:"可遮蔽视线（高地墙）；本身无伤害加成"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"水域"}),o.jsx("td",{children:"3"}),o.jsx("td",{children:"在其中发射能量武器时伤害 −1"})]})]})]}),o.jsx("p",{className:"rules-note",children:"* 高度差代价：进入比当前格海拔更高的地形时，额外消耗等同于高度差的移动力（例如从海拔0进入海拔2，共消耗 1+2=3 点）。下坡无额外代价。"}),o.jsx("p",{className:"rules-note",children:"注：机体不能占据对手所在的格子。移动途中触碰到敌方机雷将立即停止并引爆。"})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"射程、视线与距离衰减"}),o.jsxs("p",{children:["距离使用",o.jsx("b",{children:"切比雪夫距离"}),"（8方向棋格距离：行差与列差的最大值）。 射击牌有最小射程和最大射程，目标须在此范围内。"]}),o.jsx("p",{children:"视线（LOS）检查规则："}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"森林不阻断视线，"}),"但能为处于其中的机体提供掩护（受击伤害-1）。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"高地阻断："}),"若射线上存在海拔高于攻防双方的高地格，则视线被遮挡，无法射击。"]}),o.jsx("li",{children:"其他地形（平地、砂地、废墟、水域）均不影响视线。"})]}),o.jsxs("p",{children:[o.jsx("b",{children:"距离衰减（部分武器）："}),'部分武器卡设有"最佳射程"，超出最佳射程后每多1格伤害递减（递减值见卡面），但不超过最大射程仍可开火。']})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"伤害与摧毁"}),o.jsxs("p",{children:["攻击命中后，系统计算最终伤害值，然后进入",o.jsx("b",{children:"伤害分配"}),"。伤害来源不同，分配规则不同："]}),o.jsx("p",{children:o.jsx("b",{children:"🎯 射击伤害（规则 11-2-2）："})}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"先"}),"从表面朝上的卡牌中自由选择破坏：手牌、辅助区、",o.jsx("b",{children:"已布局的牌（主要阶段1/2）"}),"。每次选1张，直至选满伤害值或表面朝上卡牌耗尽。"]}),o.jsxs("li",{children:["表面朝上卡牌不足时，",o.jsx("b",{children:"剩余伤害从牌组顶端自动破坏"}),'（防守方无法选择牌组中的特定卡牌）。也可随时点击"确认"将剩余伤害交由系统从牌组顶端自动处理。']}),o.jsxs("li",{children:[o.jsx("b",{children:"使用了瞄准牌的射击："}),"攻击方额外获得一项权利——可",o.jsx("b",{children:"指定"}),"防守方必须销毁的第一张牌（范围包括牌组）。"]})]}),o.jsx("p",{children:o.jsx("b",{children:"⚔️ 白兵/突击伤害（强制翻牌库顶）："})}),o.jsxs("ul",{className:"rules-list",children:[o.jsx("li",{children:"防守方无权选择，系统直接从牌库顶翻牌销毁，数量等于最终伤害值。"}),o.jsx("li",{children:"牌库翻完后从废弃区重洗继续。若牌组与废弃区均耗尽，剩余伤害切换为防守方自选模式（可从手牌、辅助区、已布局的牌中选择）。"})]}),o.jsx("p",{children:o.jsx("b",{children:"💣 爆弹标记诱爆："})}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:["若被摧毁的牌带有",o.jsx("b",{children:"爆弹标记（💣）"}),"，将额外追加摧毁1张牌（从牌库顶强制翻出）。"]}),o.jsxs("li",{children:["该额外摧毁",o.jsx("b",{children:"不会"}),"再触发新的连锁诱爆（每次伤害结算中仅触发1次诱爆）。"]}),o.jsx("li",{children:'注意：◆标记是区分"改"型变种卡的符号，与诱爆无关。'})]}),o.jsx("p",{className:"rules-note",children:"注：若牌组耗尽，继续从废弃区（重新洗混后）取牌销毁。"})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"卡牌类型"}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"类型"}),o.jsx("th",{children:"使用时机"}),o.jsx("th",{children:"说明"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"移动牌"}),o.jsx("td",{children:"移动时机"}),o.jsx("td",{children:"按牌面数值移动；机体沿4方向移动，移动后机头自动朝向移动方向"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"射击牌"}),o.jsx("td",{children:"射击时机"}),o.jsx("td",{children:"远程攻击，需在机头前方扇区内、射程内且视线通畅；部分武器具有距离衰减"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"近战牌"}),o.jsx("td",{children:"近战时机"}),o.jsx("td",{children:"攻击相邻格（切比雪夫距离=1）的敌方，无扇区限制"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"突击牌"}),o.jsx("td",{children:"特殊时机"}),o.jsx("td",{children:"先冲锋至目标相邻格，再以（突击值−被突击防御值）为基础伤害发动突击；白兵/突击伤害强制从牌库顶翻出"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"护甲牌"}),o.jsx("td",{children:"被动防御"}),o.jsx("td",{children:"布局后，本段受到攻击时每张护甲牌抵消1点伤害"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"瞄准牌"}),o.jsx("td",{children:"攻击辅助"}),o.jsxs("td",{children:["布置于",o.jsx("b",{children:"主要阶段1"}),"时，使",o.jsx("b",{children:"主要阶段2"}),"的射击/近战/突击攻击伤害+1，且攻方可指定防守方销毁目标"]})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"机雷牌"}),o.jsx("td",{children:"特殊时机"}),o.jsx("td",{children:"在机体周围格部署机雷；敌方移动途经该格时自动引爆，造成机雷伤害"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"特殊牌"}),o.jsx("td",{children:"—"}),o.jsx("td",{children:"ダミー等占位牌，无实际效果"})]})]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"胜利条件"}),o.jsx("p",{children:"每次伤害结算结束后，系统自动检查双方是否满足败北条件。满足任意一条即判败："}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"牌组耗尽："}),"尚未进入破坏区的所有牌（手牌 + 牌库 + 辅助区 + ",o.jsx("b",{children:"已布局的牌"}),"）总数 ≤ 3"]}),o.jsxs("li",{children:[o.jsx("b",{children:"战力耗尽："}),"所有",o.jsx("b",{children:"攻击牌"}),"（射击牌、近战牌、突击牌）均被摧毁"]})]}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:["若对手率先满足败北条件 → ",o.jsx("b",{children:"己方获胜"})]}),o.jsxs("li",{children:["若双方同时满足 → ",o.jsx("b",{children:"平局"})]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"高级效果速查"}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"效果"}),o.jsx("th",{children:"触发条件"}),o.jsx("th",{children:"具体效果"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"瞄准"}),o.jsx("td",{children:"主要阶段1布局瞄准牌 + 主要阶段2布局攻击牌"}),o.jsxs("td",{children:["主要阶段2的射击/近战/突击伤害+1；且攻方可指定防守方",o.jsx("b",{children:"必须"}),"销毁的第一张牌"]})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"装甲"}),o.jsx("td",{children:"防守方在被攻击段落布局了护甲牌"}),o.jsx("td",{children:"每张护甲牌抵消1点最终伤害（下限为0）"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"森林掩护"}),o.jsx("td",{children:"防守方站在森林格中被射击"}),o.jsx("td",{children:"受到的射击伤害 −1（近战/突击无此效果）"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"水域衰减"}),o.jsx("td",{children:"攻击方站在水域中使用能量武器射击"}),o.jsx("td",{children:"射击伤害 −1"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"突击冲锋"}),o.jsx("td",{children:"突击牌布局后在特殊时机选择目标"}),o.jsx("td",{children:'先自动移动至目标相邻格，再造成（突击值−被突击防御）点伤害；伤害来源为"突击"，强制从牌库顶翻出'})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"机雷部署"}),o.jsx("td",{children:"机雷牌布局后在特殊时机选择格子"}),o.jsx("td",{children:"放置机雷标记；敌方途经时立即停止并承受机雷伤害，机雷随即消失"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"💣 爆弹诱爆"}),o.jsx("td",{children:"带爆弹标记（💣）的牌被摧毁时"}),o.jsx("td",{children:"额外从牌库顶翻出1张牌强制销毁；该额外销毁不再触发新的连锁"})]})]})]})]}),o.jsxs("section",{className:"rules-section rules-section--diff",children:[o.jsx("h2",{className:"rules-section__title rules-section__title--diff",children:"⚠ 本版本与官方原版的已知差异"}),o.jsx("p",{className:"rules-note",children:"以下是本网游版出于实现便捷性而保留的简化，与桌游官方规则（规则书/FAQ）存在差异。"}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"规则项"}),o.jsx("th",{children:"本版本实现"}),o.jsx("th",{children:"官方原版规则"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"诱爆机制"}),o.jsx("td",{children:"爆弹牌被销毁时立即追加1次额外销毁，连锁止于1层"}),o.jsx("td",{children:"所有伤害结算完毕后，统计本次被销毁的爆弹牌数N，从牌库顶翻N张：其中有爆弹标记的被销毁，无标记的入废弃堆（可能触发多轮连锁）"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"射击伤害选牌顺序"}),o.jsx("td",{children:"防守方可自由从任意区域（含牌库）选择销毁目标"}),o.jsx("td",{children:"应优先从手牌、辅助区、布局区中选择，牌库最后选取"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"回避掷骰"}),o.jsx("td",{children:"未实现；机体回避值仅影响抽牌数量"}),o.jsx("td",{children:"攻击命中前需进行回避判定；回避值影响躲避成功率"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"先制平局"}),o.jsx("td",{children:"先制值相同时玩家1固定优先"}),o.jsx("td",{children:"应由队伍标记物编号（チームチット番号）决定"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"对战模式"}),o.jsx("td",{children:"本机热座 1v1"}),o.jsx("td",{children:"官方支持最多 4v4 双人组队对战"})]})]})]})]})]}),o.jsx("style",{children:Rv})]})}const Rv=`
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
`;function Ov({onBack:e}){const[n,t]=k.useState("maps");return o.jsxs("div",{className:"data-page",children:[o.jsxs("div",{className:"data-page__header",children:[o.jsx("button",{className:"data-page__back",onClick:e,children:"← 返回"}),o.jsx("h1",{className:"data-page__title",children:"游戏资料"})]}),o.jsxs("div",{className:"data-page__tabs",children:[o.jsx("button",{className:`data-tab ${n==="maps"?"data-tab--active":""}`,onClick:()=>t("maps"),children:"地图"}),o.jsx("button",{className:`data-tab ${n==="units"?"data-tab--active":""}`,onClick:()=>t("units"),children:"机体"}),o.jsx("button",{className:`data-tab ${n==="cards"?"data-tab--active":""}`,onClick:()=>t("cards"),children:"卡牌"})]}),o.jsxs("div",{className:"data-page__content",children:[n==="maps"&&o.jsx(Kv,{}),n==="units"&&o.jsx(Fv,{}),n==="cards"&&o.jsx(Gv,{})]}),o.jsx("style",{children:Wv})]})}const Af={plain:"#8fbc5a",sand:"#d4b483",rubble:"#9e8f7a",forest:"#2d7a2d",water:"#4477cc",highland:"#c4955a"},Pf={plain:"平地",sand:"沙地",rubble:"瓦砾",forest:"森林",water:"水域",highland:"高地"};function Kv(){const[e,n]=k.useState(Ze[0].id),t=Ze.find(a=>a.id===e);return o.jsxs("div",{className:"maps-panel",children:[o.jsx("div",{className:"maps-panel__selector",children:Ze.map(a=>o.jsx("button",{className:`map-sel-btn ${a.id===e?"map-sel-btn--active":""}`,onClick:()=>n(a.id),children:a.nameCn},a.id))}),o.jsxs("div",{className:"maps-panel__body",children:[o.jsx(Jv,{map:t}),o.jsx(Bv,{})]})]})}function Jv({map:e}){const n=new Set(e.startZones[0].map(a=>`${a.row},${a.col}`)),t=new Set(e.startZones[1].map(a=>`${a.row},${a.col}`));return o.jsxs("div",{className:"mini-map-wrapper",children:[o.jsxs("div",{className:"mini-map__title",children:[e.nameCn,"（",e.width,"×",e.height,"）"]}),o.jsx("div",{className:"mini-map__grid",style:{gridTemplateColumns:`repeat(${e.width}, 28px)`,gridTemplateRows:`repeat(${e.height}, 28px)`},children:e.cells.flatMap((a,r)=>a.map((i,s)=>{const l=`${r},${s}`,d=n.has(l),u=t.has(l),p=Af[i.terrain]??"#888";return o.jsxs("div",{className:"mini-map__cell",style:{background:p},title:`(${s},${r}) ${Pf[i.terrain]??i.terrain}${i.terrain==="highland"?" Lv"+i.elevation:""}`,children:[d&&o.jsx("span",{className:"mini-map__marker mini-map__marker--p1",children:"①"}),u&&o.jsx("span",{className:"mini-map__marker mini-map__marker--p2",children:"②"}),i.terrain==="highland"&&o.jsx("span",{className:"mini-map__elev",children:i.elevation})]},l)}))})]})}function Bv(){return o.jsxs("div",{className:"map-legend",children:[o.jsx("div",{className:"map-legend__title",children:"地形图例"}),Object.entries(Pf).map(([e,n])=>o.jsxs("div",{className:"map-legend__item",children:[o.jsx("span",{className:"map-legend__swatch",style:{background:Af[e]}}),o.jsx("span",{children:n})]},e)),o.jsxs("div",{className:"map-legend__item",children:[o.jsx("span",{className:"map-legend__marker-demo mini-map__marker--p1",children:"①"}),o.jsx("span",{children:"玩家1出发区"})]}),o.jsxs("div",{className:"map-legend__item",children:[o.jsx("span",{className:"map-legend__marker-demo mini-map__marker--p2",children:"②"}),o.jsx("span",{children:"玩家2出发区"})]}),o.jsx("div",{className:"map-legend__note",children:"高地格显示海拔等级（1–3），移动力消耗与平地相同，提供射程视野优势。"})]})}function Fv(){return o.jsxs("div",{className:"units-panel",children:[o.jsxs("table",{className:"units-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"机体"}),o.jsx("th",{children:"日文名"}),o.jsx("th",{children:"型号"}),o.jsx("th",{children:"先制"}),o.jsx("th",{children:"移动"}),o.jsx("th",{children:"回避"}),o.jsx("th",{children:"突击"}),o.jsx("th",{children:"防突击"})]})}),o.jsx("tbody",{children:[...Q].sort((e,n)=>e.initiative-n.initiative).map(e=>o.jsxs("tr",{children:[o.jsxs("td",{className:"units-table__name",children:[o.jsx("img",{src:`/assets/tokens/${e.tokenId}`,alt:e.nameCn,className:"units-table__token",onError:n=>{n.target.style.display="none"}}),e.nameCn]}),o.jsx("td",{className:"units-table__ja",children:e.nameJa}),o.jsx("td",{children:e.type}),o.jsx("td",{className:"units-table__num",children:e.initiative}),o.jsx("td",{className:"units-table__num",children:e.movement}),o.jsx("td",{className:"units-table__num",children:e.evasion}),o.jsx("td",{className:"units-table__num",children:e.assault}),o.jsx("td",{className:"units-table__num",children:e.assaultDef})]},e.id))})]}),o.jsxs("div",{className:"units-note",children:[o.jsx("strong",{children:"型号说明："}),"SS/S/M/L/LL = 体型；軽/中/重 = 重量等级；単座 = 单人驾驶。 先制值越小先手越快，移动值为每回合最大移动格数，回避值为被击中时消耗的伤害数量。"]})]})}const Vf={movement:"移动",ranged:"射击",melee:"近战",special:"特殊",mine:"机雷",aim:"瞄准",armor:"装甲",charge:"突击",auxiliary:"辅助"},Lf={movement:"#66ccaa",ranged:"#4499ee",melee:"#ff9944",special:"#cc88ff",mine:"#ff6688",aim:"#ffdd44",armor:"#88aacc",charge:"#ff6644",auxiliary:"#aaaacc"};function Gv(){const e=Object.keys(xa),[n,t]=k.useState(e[0]),a=xa[n]??[];let r=n;const i=Q.find(s=>n.startsWith(s.deckCode));return i&&(n.endsWith("+")?r=`${i.nameCn} (Plus)`:r=i.nameCn),o.jsxs("div",{className:"cards-panel",children:[o.jsx("div",{className:"cards-panel__unit-tabs",children:e.map(s=>{const l=Q.find(p=>s.startsWith(p.deckCode));let d=s,u=null;return l&&(u=`/assets/tokens/${l.tokenId}`,d=s.endsWith("+")?`${l.nameCn}+`:l.nameCn),o.jsxs("button",{className:`unit-tab ${s===n?"unit-tab--active":""}`,onClick:()=>t(s),children:[u&&o.jsx("img",{src:u,alt:d,className:"unit-tab__token",onError:p=>{p.target.style.display="none"}}),o.jsx("span",{children:d})]},s)})}),o.jsxs("div",{className:"cards-panel__header",children:[o.jsx("span",{className:"cards-panel__unit-name",children:r}),o.jsxs("span",{className:"cards-panel__count",children:["共 ",a.length," 张卡牌"]})]}),o.jsx("div",{className:"cards-panel__summary",children:o.jsx(Uv,{deck:a})}),o.jsx("div",{className:"cards-panel__list",children:a.map(s=>o.jsx(Hv,{card:s},s.id))})]})}function Uv({deck:e}){const n={};for(const t of e)n[t.actionType]=(n[t.actionType]??0)+1;return o.jsx("div",{className:"card-type-summary",children:Object.entries(n).sort(([t],[a])=>t.localeCompare(a)).map(([t,a])=>o.jsxs("span",{className:"card-type-badge",style:{background:Lf[t]??"#888"},children:[Vf[t]??t," ×",a]},t))})}function Hv({card:e}){const n=Vf[e.actionType]??e.actionType,t=Lf[e.actionType]??"#888",{zoom:a,getZoomHandlers:r}=wa(),i=`/assets/${e.frontImageId}`;let s="";return e.actionType==="movement"&&e.movementValue!==void 0?s=`移动 ${e.movementValue}`:(e.actionType==="ranged"||e.actionType==="melee")&&e.damage!==void 0?e.rangeMin!==void 0&&e.rangeMax!==void 0?s=`射程 ${e.rangeMin}–${e.rangeMax}  伤害 ${e.damage}`:s=`伤害 ${e.damage}`:e.actionType==="charge"&&e.damage!==void 0&&(s=`伤害 ${e.damage}`),o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"card-row",...r(i),children:[o.jsx("div",{className:"card-row__image-wrap",children:o.jsx("img",{src:i,alt:e.nameCn,className:"card-row__image",onError:l=>{l.target.style.display="none"}})}),o.jsx("span",{className:"card-row__type",style:{background:t},children:n}),o.jsx("span",{className:"card-row__name",children:e.nameCn}),e.effectText?o.jsx("span",{className:"card-row__effect",children:e.effectText}):s&&o.jsx("span",{className:"card-row__detail",children:s}),e.isKaiVariant&&o.jsx("span",{className:"card-row__kai",title:"改型标记",children:"◆"}),e.hasBombIcon&&o.jsx("span",{className:"card-row__bomb",title:"诱爆",children:"💥"})]}),o.jsx(Sa,{zoom:a})]})}const Wv=`
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
`;function ei(){const{state:e,getCard:n,exposureMode:t}=Se(),[a,r]=k.useState(null),{zoom:i,getZoomHandlers:s}=wa(),l=e.phase==="plotting"?e.plottingStep==="player2"?"player2":"player1":e.activePlayer??"player1",d=a??l,u=e.players[d],p=Q.find(h=>h.id===u.unitId),f=t?!1:Zv(e),x={N:"↑北",S:"↓南",E:"→东",W:"←西"}[u.facing]??u.facing;return o.jsxs("div",{className:"mp",children:[o.jsxs("div",{className:"mp__tabs",children:[e.playerIds.map(h=>o.jsxs("button",{className:`mp__tab ${d===h?"mp__tab--active":""}`,onClick:()=>r(m=>m===h?null:h),children:[`P${e.playerIds.indexOf(h)+1}`,h===l&&o.jsx("span",{className:"mp__tab-dot"})]},h)),o.jsx("span",{className:"mp__phase-hint",children:e.phase==="plotting"?"布局中":"行动中"})]}),p&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"mp__header",children:[o.jsx("img",{src:`/assets/tokens/${p.tokenId}`,alt:p.nameCn,className:"mp__token",onError:h=>{h.target.style.opacity="0.3"}}),o.jsxs("div",{className:"mp__header-info",children:[o.jsx("div",{className:"mp__unit-name",children:p.nameCn}),o.jsx("div",{className:"mp__unit-sub",children:p.nameJa}),o.jsxs("div",{className:"mp__pos",children:["格 (",u.position.row,",",u.position.col,")   ",x]})]})]}),o.jsxs("div",{className:"mp__stats",children:[o.jsx(La,{label:"先制",value:p.initiative,color:"#f0c040"}),o.jsx(La,{label:"移动",value:p.movement,color:"#66ccaa"}),o.jsx(La,{label:"回避",value:p.evasion,color:"#88aaff"}),o.jsx(La,{label:"突击",value:p.assault,color:"#ff9944"}),o.jsx(La,{label:"被突",value:p.assaultDef,color:"#ff6666"})]}),o.jsxs("div",{className:"mp__zones",children:[o.jsxs("div",{className:"mp__zone mp__zone--aux",children:[o.jsx("div",{className:"mp__zone-label",children:"辅助区"}),u.auxiliary.length===0?o.jsx("div",{className:"mp__zone-empty",children:"—"}):(()=>{const h=new Map;for(const v of u.auxiliary){const _=n(v.defId),b=(_==null?void 0:_.nameJa)??v.defId,g=h.get(b);g?(g.totalCount++,v.destroyed||g.liveCount++):h.set(b,{nameCn:(_==null?void 0:_.nameCn)??v.defId,liveCount:v.destroyed?0:1,totalCount:1})}const m=v=>{const _=jn(u,n,"movement"),b=jn(u,n,"melee"),g=jn(u,n,"charge");return v==="バーニア"?_.vernier||b.vernier:v==="ムーブセンサー"?b.moveSensor:v==="ホイール"?_.wheel||g.wheel:!1};return o.jsxs(o.Fragment,{children:[u.auxiliary.map(v=>{const _=n(v.defId),b=_!=null&&_.frontImageId?`/assets/${_.frontImageId}`:null;return o.jsxs("div",{className:`mp__aux-card${v.destroyed?" mp__aux-card--destroyed":""}`,...b?s(b):{},children:[o.jsx("span",{className:"mp__aux-name",children:(_==null?void 0:_.nameCn)??v.defId}),v.destroyed&&o.jsx("span",{className:"mp__aux-dead",children:"✕"})]},v.instanceId)}),o.jsx("div",{className:"mp__aux-badges",children:Array.from(h.entries()).map(([v,_])=>{const b=m(v);return o.jsxs("div",{className:`mp__aux-status ${b?"mp__aux-status--on":"mp__aux-status--off"}`,title:b?"效果激活中":"需要≥2张存活才能激活",children:[b?"✓":"✗"," ",_.nameCn,o.jsxs("span",{className:"mp__aux-count",children:["(",_.liveCount,"/",_.totalCount,")"]})]},v)})})]})})()]}),o.jsxs("div",{className:"mp__counts",children:[o.jsx(ao,{icon:"🃏",label:"手牌",count:u.hand.filter(h=>!h.destroyed).length}),o.jsx(ao,{icon:"📚",label:"牌库",count:u.deck.filter(h=>!h.destroyed).length}),o.jsx(ao,{icon:"♻️",label:"弃牌",count:u.discard.filter(h=>!h.destroyed).length}),o.jsx(ao,{icon:"💀",label:"破坏",count:u.destroyedCards.length})]})]}),o.jsxs("div",{className:"mp__plot",children:[o.jsx("div",{className:"mp__plot-label",children:"布局段落"}),o.jsxs("div",{className:"mp__plot-slots",children:[o.jsx(Xd,{label:"主要阶段一",card:u.plotSeg1,getCard:n,hidden:f,getZoomHandlers:s}),o.jsx(Xd,{label:"主要阶段二",card:u.plotSeg2,getCard:n,hidden:f,getZoomHandlers:s})]})]})]}),o.jsx("style",{children:Yv}),o.jsx(Sa,{zoom:i})]})}function Zv(e,n){return e.phase==="plotting"?e.plottingStep!=="complete":!1}function La({label:e,value:n,color:t}){return o.jsxs("div",{className:"mp__stat",children:[o.jsx("span",{className:"mp__stat-lbl",children:e}),o.jsx("span",{className:"mp__stat-val",style:{color:t},children:n})]})}function ao({icon:e,label:n,count:t}){return o.jsxs("div",{className:"mp__zcount",children:[o.jsx("span",{className:"mp__zcount-icon",children:e}),o.jsx("span",{className:"mp__zcount-lbl",children:n}),o.jsx("span",{className:"mp__zcount-n",children:t})]})}function Xd({label:e,card:n,getCard:t,hidden:a,getZoomHandlers:r}){const i=n?t(n.defId):null,s=i!=null&&i.frontImageId?`/assets/${i.frontImageId}`:null;return o.jsxs("div",{className:"mp__slot",children:[o.jsx("div",{className:"mp__slot-lbl",children:e}),n?a?o.jsx("div",{className:"mp__slot-hidden",children:"???"}):o.jsxs("div",{className:"mp__slot-card",...s?r(s):{},children:[o.jsx("span",{className:"mp__slot-name",children:(i==null?void 0:i.nameCn)??n.defId}),o.jsx("span",{className:`mp__slot-type mp__slot-type--${(i==null?void 0:i.actionType)??"unknown"}`,children:(i==null?void 0:i.actionType)??"?"})]}):o.jsx("div",{className:"mp__slot-empty",children:"— 未布局 —"})]})}const Yv=`
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
`,Xv={slot_1:"存档位 1",slot_2:"存档位 2",slot_3:"存档位 3",slot_4:"存档位 4",slot_5:"存档位 5",auto:"自动存档"},Qv=[...cx,"auto"];function qv(e){const n=new Date(e),t=a=>String(a).padStart(2,"0");return`${n.getFullYear()}-${t(n.getMonth()+1)}-${t(n.getDate())} ${t(n.getHours())}:${t(n.getMinutes())}`}function Qd({mode:e,onBack:n,onLoad:t,currentState:a,aiConfig:r}){const[i,s]=k.useState([]),[l,d]=k.useState(null),[u,p]=k.useState(null),[f,x]=k.useState(null),[h,m]=k.useState(null);k.useEffect(()=>{s(Ed())},[]);function v(){s(Ed())}function _(w){x(w),setTimeout(()=>x(null),2e3)}function b(w){return i.find(S=>S.slotId===w)}function g(w){if(!a||!r)return;if(b(w)){p(w);return}y(w)}function y(w){if(!(!a||!r))try{Ef(w,a,r,!1),v(),p(null),_("存档已保存")}catch(S){m(S instanceof Error?S.message:"保存失败")}}function j(w){const S=ux(w);if(!S){m("存档数据已损坏，无法加载");return}t==null||t(S)}function M(w){px(w),v(),d(null),_("存档已删除")}const E=e==="save"?"保存游戏":"加载存档";return o.jsxs("div",{className:"sl-screen",children:[o.jsxs("div",{className:"sl-panel",children:[o.jsx("h2",{className:"sl-title",children:E}),o.jsx("div",{className:"sl-slots",children:Qv.map(w=>{const S=b(w),N=e==="save"&&!(w==="auto")&&a!=null;return o.jsxs("div",{className:`sl-slot ${S?"sl-slot--occupied":"sl-slot--empty"}`,children:[o.jsxs("div",{className:"sl-slot__label",children:[Xv[w],(S==null?void 0:S.isAutoSave)&&o.jsx("span",{className:"sl-badge",children:"自动"})]}),S?o.jsxs("div",{className:"sl-slot__info",children:[o.jsxs("span",{className:"sl-slot__units",children:[S.player1Unit," vs ",S.player2Unit]}),o.jsx("span",{className:"sl-slot__map",children:S.mapName}),o.jsxs("span",{className:"sl-slot__round",children:["第 ",S.roundNumber," 回合"]}),o.jsx("span",{className:"sl-slot__time",children:qv(S.timestamp)})]}):o.jsx("div",{className:"sl-slot__info sl-slot__empty-label",children:"空存档位"}),o.jsxs("div",{className:"sl-slot__actions",children:[e==="load"&&S&&o.jsx("button",{className:"sl-btn sl-btn--primary",onClick:()=>j(w),children:"加载"}),N&&o.jsx("button",{className:"sl-btn sl-btn--primary",onClick:()=>g(w),children:S?"覆盖":"保存"}),S&&(l===w?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"sl-confirm-text",children:"确认删除？"}),o.jsx("button",{className:"sl-btn sl-btn--danger",onClick:()=>M(w),children:"确认"}),o.jsx("button",{className:"sl-btn",onClick:()=>d(null),children:"取消"})]}):o.jsx("button",{className:"sl-btn sl-btn--ghost",onClick:()=>d(w),children:"删除"}))]}),u===w&&o.jsxs("div",{className:"sl-overwrite",children:[o.jsx("span",{children:"覆盖此存档？"}),o.jsx("button",{className:"sl-btn sl-btn--primary",onClick:()=>y(w),children:"确认"}),o.jsx("button",{className:"sl-btn",onClick:()=>p(null),children:"取消"})]})]},w)})}),h&&o.jsxs("div",{className:"sl-error",onClick:()=>m(null),children:["⚠ ",h]}),o.jsx("button",{className:"sl-back-btn",onClick:n,children:"← 返回"})]}),f&&o.jsx("div",{className:"sl-toast",children:f}),o.jsx("style",{children:eb})]})}const eb=`
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
`;function nb({currentState:e}){const{rawDispatch:n}=Se();return k.useEffect(()=>{n({type:"LOAD_GAME",state:e})},[e,n]),o.jsx("div",{style:{height:"100%",width:"100%"},children:o.jsx(ya,{})})}function tb({currentState:e}){return o.jsx(bi,{children:o.jsx(Df,{children:o.jsx(nb,{currentState:e})})})}function ab({onBack:e}){const[n,t]=k.useState("list"),[a,r]=k.useState(null);function i(l){r(l),t("playback")}function s(){r(null),t("list")}return n==="playback"&&a?o.jsx(sb,{replayData:a,onExit:s}):o.jsx(rb,{onBack:e,onPlay:i})}function Rf(e){const n=_x(e.initialState,e.actions),t=new Blob([n],{type:"text/plain;charset=utf-8"}),a=URL.createObjectURL(t),r=document.createElement("a");r.href=a;const i=new Date(e.metadata.timestamp),s=d=>String(d).padStart(2,"0"),l=`replay_${e.metadata.player1Unit}_vs_${e.metadata.player2Unit}_${i.getFullYear()}${s(i.getMonth()+1)}${s(i.getDate())}_${s(i.getHours())}${s(i.getMinutes())}.txt`;r.download=l,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(a)}function rb({onBack:e,onPlay:n}){const[t,a]=k.useState([]),[r,i]=k.useState(null),[s,l]=k.useState(null);k.useEffect(()=>{a(Dd())},[]);function d(f){const x=zd(f);if(!x){l("录像数据已损坏，无法播放");return}n(x)}function u(f){const x=zd(f);if(!x){l("录像数据已损坏，无法导出");return}Rf(x)}function p(f){gx(f),a(Dd()),i(null)}return o.jsxs("div",{className:"rp-screen",children:[o.jsxs("div",{className:"rp-panel",children:[o.jsx("h2",{className:"rp-title",children:"回放录像"}),t.length===0?o.jsx("div",{className:"rp-empty",children:"暂无保存的录像"}):o.jsx("div",{className:"rp-list",children:t.map(f=>o.jsxs("div",{className:"rp-item",children:[o.jsxs("div",{className:"rp-item__info",children:[o.jsxs("span",{className:"rp-item__units",children:[f.player1Unit," vs ",f.player2Unit]}),o.jsx("span",{className:"rp-item__map",children:f.mapName}),o.jsxs("span",{className:"rp-item__rounds",children:[f.totalRounds," 回合"]}),f.winner&&o.jsx("span",{className:"rp-item__winner",children:f.winner==="draw"?"平局":`${f.winner==="player1"?"P1":"P2"} 获胜`}),o.jsx("span",{className:"rp-item__time",children:lb(f.timestamp)})]}),o.jsxs("div",{className:"rp-item__actions",children:[o.jsx("button",{className:"rp-btn rp-btn--primary",onClick:()=>d(f.replayId),children:"▶ 播放"}),o.jsx("button",{className:"rp-btn",onClick:()=>u(f.replayId),children:"导出日志"}),r===f.replayId?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"rp-confirm",children:"确认删除？"}),o.jsx("button",{className:"rp-btn rp-btn--danger",onClick:()=>p(f.replayId),children:"确认"}),o.jsx("button",{className:"rp-btn",onClick:()=>i(null),children:"取消"})]}):o.jsx("button",{className:"rp-btn rp-btn--ghost",onClick:()=>i(f.replayId),children:"删除"})]})]},f.replayId))}),s&&o.jsxs("div",{className:"rp-error",onClick:()=>l(null),children:["⚠ ",s]}),o.jsx("button",{className:"rp-back-btn",onClick:e,children:"← 返回"})]}),o.jsx("style",{children:Of})]})}function ob(e){const n=[0];let t=e.initialState;for(let a=0;a<e.actions.length;a++){const r=t.phase,i=t.roundNumber,s=t.plottingStep,l=t.currentTiming;t=fn(t,e.actions[a]),(t.phase!==r||t.roundNumber!==i||t.plottingStep!==s||t.currentTiming!==l)&&n.push(a+1)}return n[n.length-1]!==e.actions.length&&n.push(e.actions.length),n}function qd(e,n){let t=e.initialState;for(let a=0;a<n&&a<e.actions.length;a++)t=fn(t,e.actions[a]);return t}function ib(e,n){const t=i=>{const s=n.players[i],l=Q.find(d=>d.id===s.unitId);return(l==null?void 0:l.nameCn)??i},a=i=>{const s=q(i);return(s==null?void 0:s.nameCn)??i},r=(i,s)=>{const l=n.players[s],u=[...l.deck,...l.hand,...l.auxiliary,...l.discard,...l.destroyedCards,...l.plotSeg1?[l.plotSeg1]:[],...l.plotSeg2?[l.plotSeg2]:[]].find(p=>p.instanceId===i);return u?a(u.defId):i};switch(e.type){case"DRAW_CARDS":return`${t(e.playerId)} 抽取 ${e.count} 张牌`;case"PLOT_CARD":{const i=r(e.instanceId,e.playerId);return`${t(e.playerId)} 布局段落${e.seg}：${i}`}case"CONFIRM_PLOT":return`${t(e.playerId)} 确认布局`;case"ADVANCE_PLOT_STEP":return"布局阶段推进";case"MOVE_UNIT":return`${t(e.playerId)} 移动至 (${e.to.row},${e.to.col})`;case"ADJUST_FACING":return`${t(e.playerId)} 调整朝向 → ${e.facing}`;case"RESOLVE_RANGED":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动射击`;case"RESOLVE_MELEE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动近战`;case"RESOLVE_CHARGE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动突击`;case"PLACE_MINE":return`${t(e.playerId)} 在 (${e.to.row},${e.to.col}) 布雷 (${e.damage}伤害)`;case"SELECT_DAMAGE_CARD":{const i=r(e.instanceId,e.playerId);return`${t(e.playerId)} 选择摧毁：${i}`}case"CONFIRM_DAMAGE_SELECTION":return`${t(e.playerId)} 确认伤害结算`;case"SKIP_ACTION":return"跳过行动";case"ADVANCE_TIMING":return"推进时序";case"ADVANCE_PHASE":return"推进阶段";case"MELEE_SENSOR_MOVE":return`${t(e.playerId)} 近战传感器移动至 (${e.to.row},${e.to.col})`;case"START_PLOTTING":return"进入布局阶段";default:return e.type}}function eu({player:e,label:n}){const t=Q.find(l=>l.id===e.unitId),{zoom:a,getZoomHandlers:r}=wa(),i=l=>l.filter(d=>!d.destroyed),s={N:"↑北",S:"↓南",E:"→东",W:"←西"}[e.facing]??e.facing;return o.jsxs("div",{className:"rpp",children:[o.jsxs("div",{className:"rpp__header",children:[t&&o.jsx("img",{src:`/assets/tokens/${t.tokenId}`,alt:t.nameCn,className:"rpp__token",onError:l=>{l.target.style.opacity="0.3"}}),o.jsxs("div",{children:[o.jsxs("div",{className:"rpp__name",children:[n,": ",(t==null?void 0:t.nameCn)??e.unitId]}),o.jsxs("div",{className:"rpp__pos",children:["(",e.position.row,",",e.position.col,") ",s]})]})]}),o.jsxs("div",{className:"rpp__counts",children:[o.jsxs("span",{className:"rpp__count",title:"牌库",children:["📚",i(e.deck).length]}),o.jsxs("span",{className:"rpp__count",title:"手牌",children:["🃏",e.hand.length]}),o.jsxs("span",{className:"rpp__count",title:"弃牌",children:["♻️",e.discard.length]}),o.jsxs("span",{className:"rpp__count",title:"破坏",children:["💀",e.destroyedCards.length]})]}),o.jsx("div",{className:"rpp__section-label",children:"布局"}),o.jsxs("div",{className:"rpp__plot-row",children:[o.jsx(nu,{label:"阶段1",card:e.plotSeg1,getZoomHandlers:r}),o.jsx(nu,{label:"阶段2",card:e.plotSeg2,getZoomHandlers:r})]}),o.jsxs("div",{className:"rpp__section-label",children:["手牌 (",e.hand.length,")"]}),o.jsx("div",{className:"rpp__card-list",children:e.hand.length===0?o.jsx("span",{className:"rpp__empty",children:"—"}):e.hand.map(l=>o.jsx(tu,{card:l,getZoomHandlers:r},l.instanceId))}),e.auxiliary.length>0&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"rpp__section-label",children:["辅助 (",i(e.auxiliary).length,"/",e.auxiliary.length,")"]}),o.jsx("div",{className:"rpp__card-list",children:e.auxiliary.map(l=>o.jsx(tu,{card:l,getZoomHandlers:r},l.instanceId))})]}),o.jsx(Sa,{zoom:a})]})}function nu({label:e,card:n,getZoomHandlers:t}){const a=n?q(n.defId):null,r=a!=null&&a.frontImageId?`/assets/${a.frontImageId}`:null,s=a?{movement:"#66ccaa",ranged:"#ff9944",melee:"#ff6060",charge:"#ff4444",aim:"#f0c040",armor:"#88aaff",mine:"#cc88ff",special:"#aaa",auxiliary:"#77ddaa"}[a.actionType]??"#888":"#555";return o.jsxs("div",{className:"rpp__plot-slot",children:[o.jsx("div",{className:"rpp__plot-label",children:e}),n&&a?o.jsxs("div",{className:"rpp__plot-card",style:{borderColor:s},...r?t(r):{},children:[o.jsx("span",{className:"rpp__plot-type",style:{color:s},children:a.actionType}),o.jsx("span",{className:"rpp__plot-name",children:a.nameCn})]}):o.jsx("div",{className:"rpp__plot-empty",children:"—"})]})}function tu({card:e,getZoomHandlers:n}){const t=q(e.defId),a=t!=null&&t.frontImageId?`/assets/${t.frontImageId}`:null,i=t?{movement:"#66ccaa",ranged:"#ff9944",melee:"#ff6060",charge:"#ff4444",aim:"#f0c040",armor:"#88aaff",mine:"#cc88ff",special:"#aaa",auxiliary:"#77ddaa"}[t.actionType]??"#888":"#555";return o.jsxs("span",{className:`rpp__chip${e.destroyed?" rpp__chip--dead":""}`,style:{borderColor:i},...a?n(a):{},children:[(t==null?void 0:t.nameCn)??e.defId,e.destroyed&&o.jsx("span",{className:"rpp__chip-x",children:"✕"})]})}function sb({replayData:e,onExit:n}){const t=k.useMemo(()=>ob(e),[e]),a=e.actions.length,[r,i]=k.useState(0),[s,l]=k.useState(e.initialState),[d,u]=k.useState(!1),[p,f]=k.useState(1),[x,h]=k.useState(""),[m,v]=k.useState(e.initialState.log.length),_=k.useRef(null),b=k.useRef(s),g=k.useRef(r);b.current=s,g.current=r;const y=k.useRef(null);k.useEffect(()=>{var J;(J=y.current)==null||J.scrollIntoView({behavior:"smooth"})},[s.log.length]);const j=k.useCallback(()=>{_.current!=null&&(clearInterval(_.current),_.current=null)},[]),M=k.useCallback(()=>{const J=g.current;if(J>=a)return j(),u(!1),!1;const L=e.actions[J],P=fn(b.current,L);return v(b.current.log.length),l(P),i(J+1),!0},[e,a,j]),E=k.useCallback(()=>{const J=g.current;if(J>=a)return;const P=t.find(R=>R>J)??a;let H=b.current;const O=H.log.length;for(let R=J;R<P;R++)H=fn(H,e.actions[R]);v(O),l(H),i(P),P>=a&&(j(),u(!1))},[e,a,t,j]),w=k.useCallback(()=>{const J=g.current,L=t.filter(O=>O<J),P=L.length>=2?L[L.length-2]:0,H=qd(e,P);v(0),l(H),i(P)},[e,t]);k.useEffect(()=>(j(),d&&(_.current=setInterval(()=>{if(g.current>=a){j(),u(!1);return}E()},Math.round(1500/p))),j),[d,p,E,a,j]);function S(){u(J=>!J)}function A(){u(!1),v(0),l(e.initialState),i(0)}function N(){const J=parseInt(x,10);if(isNaN(J)||J<1)return;u(!1);const{state:L,actionIndex:P}=xx(e,J);v(0),l(L),i(P)}const $=r>0?e.actions[r-1]:null,T=$?ib($,r>=2?qd(e,r-1):e.initialState):null,D=r>=a,K=r===0,U={pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"行动阶段1",action_seg2:"行动阶段2",cleanup:"清理阶段",game_over:"游戏结束"},z={movement:"移动",ranged:"射击",melee:"近战",special:"特殊"};return o.jsxs("div",{className:"rpv-screen",children:[o.jsxs("div",{className:"rpv-topbar",children:[o.jsxs("span",{className:"rpv-topbar__round",children:["第 ",s.roundNumber," 回合"]}),o.jsx("span",{className:"rpv-topbar__phase",children:U[s.phase]??s.phase}),s.currentTiming&&o.jsxs("span",{className:"rpv-topbar__timing",children:["▶ ",z[s.currentTiming]]}),o.jsx("span",{style:{flex:1}}),o.jsx("button",{className:"rpv-btn",onClick:A,disabled:K,title:"回到开始",children:"⏮"}),o.jsx("button",{className:"rpv-btn",onClick:w,disabled:K,title:"上一阶段",children:"◀◀"}),o.jsx("button",{className:"rpv-btn",onClick:()=>{u(!1),M()},disabled:D,title:"单步前进（单个操作）",children:"▶|"}),o.jsx("button",{className:"rpv-btn",onClick:()=>{u(!1),E()},disabled:D,title:"下一阶段",children:"▶▶"}),o.jsx("button",{className:"rpv-btn rpv-btn--primary",onClick:S,children:d?"⏸ 暂停":"▶ 自动"}),o.jsx("span",{className:"rpv-sep"}),o.jsx("span",{className:"rpv-label",children:"速度"}),[1,2,4].map(J=>o.jsxs("button",{className:`rpv-btn rpv-btn--speed ${p===J?"rpv-btn--active":""}`,onClick:()=>f(J),children:[J,"x"]},J)),o.jsx("span",{className:"rpv-sep"}),o.jsx("span",{className:"rpv-label",children:"跳至"}),o.jsx("input",{className:"rpv-input",type:"number",min:1,value:x,onChange:J=>h(J.target.value),onKeyDown:J=>J.key==="Enter"&&N(),placeholder:"回合"}),o.jsx("button",{className:"rpv-btn",onClick:N,children:"跳转"}),o.jsx("span",{className:"rpv-sep"}),o.jsxs("span",{className:"rpv-progress",children:[r,"/",a]}),o.jsx("button",{className:"rpv-btn",onClick:()=>Rf(e),title:"导出完整分析日志",children:"导出日志"}),o.jsx("button",{className:"rpv-btn rpv-btn--exit",onClick:n,children:"✕ 退出"})]}),o.jsxs("div",{className:"rpv-main",children:[o.jsxs("div",{className:"rpv-map-col",children:[o.jsx("div",{className:"rpv-map-area",children:o.jsx(tb,{currentState:s})}),T&&o.jsxs("div",{className:"rpv-action-desc",children:["▶ ",T]}),o.jsxs("div",{className:"rpv-log",children:[o.jsx("div",{className:"rpv-log__header",children:"行动日志"}),o.jsxs("div",{className:"rpv-log__entries",children:[s.log.filter(J=>!J.startsWith("[DBG]")).map((J,L)=>{const P=L>=m;return o.jsx("div",{className:`rpv-log__entry ${cb(J)}${P?" rpv-log__entry--new":""}`,children:J},L)}),o.jsx("div",{ref:y})]})]})]}),o.jsxs("div",{className:"rpv-info-col",children:[o.jsx(eu,{player:s.players.player1,label:"P1"}),o.jsx("div",{className:"rpv-info-divider"}),o.jsx(eu,{player:s.players.player2,label:"P2"})]})]}),o.jsx("style",{children:Of}),o.jsx("style",{children:db})]})}function lb(e){const n=new Date(e),t=a=>String(a).padStart(2,"0");return`${n.getFullYear()}-${t(n.getMonth()+1)}-${t(n.getDate())} ${t(n.getHours())}:${t(n.getMinutes())}`}function cb(e){return e.startsWith("===")?"rpv-log__entry--round":e.startsWith("---")?"rpv-log__entry--sep":e.includes("发动")||e.includes("攻击")?"rpv-log__entry--attack":e.includes("摧毁")||e.includes("连锁")||e.includes("诱爆")?"rpv-log__entry--damage":e.includes("移动到")?"rpv-log__entry--move":e.includes("获胜")||e.includes("击破")||e.includes("平局")?"rpv-log__entry--victory":""}const Of=`
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
`,db=`
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
`,ub=50;function Kf(){return{terrain:"plain",elevation:0,variant:0}}function Jf(e,n){const t=Array.from({length:n},()=>Array.from({length:e},()=>Kf()));return{id:`custom_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,nameJa:"新しいマップ",nameCn:"新地图",width:e,height:n,cells:t,startZones:{0:[{row:0,col:Math.floor(e/2)}],1:[{row:n-1,col:Math.floor(e/2)}]},maxPlayers:2,maxTeams:2}}function ll(e){return{map:e??Jf(7,11),activeTool:"terrain",selectedTerrain:"plain",selectedElevation:1,selectedVariant:0,selectedZoneTeam:0,brushSize:1,isDirty:!1,undoStack:[],redoStack:[],showCoords:!1}}function bo(e){return{...e,cells:e.cells.map(n=>n.map(t=>({...t}))),startZones:Object.fromEntries(Object.entries(e.startZones).map(([n,t])=>[n,t.map(a=>({...a}))]))}}function ht(e){const n=[...e.undoStack,bo(e.map)];return n.length>ub&&n.shift(),{...e,undoStack:n,redoStack:[],isDirty:!0}}function au(e,n,t,a,r,i){if(n<0||n>=e.height||t<0||t>=e.width)return e;const s=e.cells.map((l,d)=>d===n?l.map((u,p)=>p===t?{terrain:a,elevation:a==="highland"?r:0,variant:a==="highland"?r:i}:u):l);return{...e,cells:s}}function pb(e,n){switch(n.type){case"SET_TOOL":return{...e,activeTool:n.tool};case"SET_TERRAIN":return{...e,selectedTerrain:n.terrain,activeTool:"terrain"};case"SET_ELEVATION":return{...e,selectedElevation:n.elevation};case"SET_VARIANT":return{...e,selectedVariant:n.variant};case"SET_BRUSH_SIZE":return{...e,brushSize:n.size};case"SET_ZONE_TEAM":return{...e,selectedZoneTeam:n.team};case"TOGGLE_COORDS":return{...e,showCoords:!e.showCoords};case"PAINT_CELL":{const t=ht(e),a=au(t.map,n.row,n.col,t.selectedTerrain,t.selectedElevation,t.selectedVariant);return{...t,map:a}}case"PAINT_AREA":{const t=ht(e);let a=t.map;for(const{row:r,col:i}of n.cells)a=au(a,r,i,t.selectedTerrain,t.selectedElevation,t.selectedVariant);return{...t,map:a}}case"ADD_ZONE_CELL":{const t=ht(e),{team:a,position:r}=n,i=t.map.startZones[a]??[];if(i.some(l=>l.row===r.row&&l.col===r.col))return e;const s={...t.map.startZones,[a]:[...i,r]};return{...t,map:{...t.map,startZones:s}}}case"REMOVE_ZONE_CELL":{const t=ht(e),{team:a,position:r}=n,s=(t.map.startZones[a]??[]).filter(d=>d.row!==r.row||d.col!==r.col),l={...t.map.startZones,[a]:s};return{...t,map:{...t.map,startZones:l}}}case"CLEAR_ZONE":{const t=ht(e),a={...t.map.startZones,[n.team]:[]};return{...t,map:{...t.map,startZones:a}}}case"SET_MAP_META":{const t=ht(e),a={...t.map};return n.nameJa!==void 0&&(a.nameJa=n.nameJa),n.nameCn!==void 0&&(a.nameCn=n.nameCn),n.maxPlayers!==void 0&&(a.maxPlayers=n.maxPlayers),n.maxTeams!==void 0&&(a.maxTeams=n.maxTeams),{...t,map:a}}case"RESIZE_MAP":{const t=ht(e),{newWidth:a,newHeight:r}=n,i=Array.from({length:r},(l,d)=>Array.from({length:a},(u,p)=>d<t.map.height&&p<t.map.width?{...t.map.cells[d][p]}:Kf())),s={};for(const[l,d]of Object.entries(t.map.startZones))s[Number(l)]=d.filter(u=>u.row<r&&u.col<a);return{...t,map:{...t.map,width:a,height:r,cells:i,startZones:s}}}case"UNDO":{if(e.undoStack.length===0)return e;const t=e.undoStack[e.undoStack.length-1];return{...e,map:t,undoStack:e.undoStack.slice(0,-1),redoStack:[...e.redoStack,bo(e.map)],isDirty:!0}}case"REDO":{if(e.redoStack.length===0)return e;const t=e.redoStack[e.redoStack.length-1];return{...e,map:t,redoStack:e.redoStack.slice(0,-1),undoStack:[...e.undoStack,bo(e.map)],isDirty:!0}}case"LOAD_MAP":return{...ll(bo(n.map)),isDirty:!1};case"NEW_MAP":return ll(Jf(n.width,n.height));case"MARK_SAVED":return{...e,isDirty:!1};default:return e}}const pc="em_custom_maps_index",fc="em_custom_map_",fb=["plain","sand","rubble","forest","water","highland"];function mc(){try{const e=localStorage.getItem(pc);return e?JSON.parse(e):[]}catch{return[]}}function mb(e){const n={id:e.id,nameCn:e.nameCn,nameJa:e.nameJa,width:e.width,height:e.height,maxPlayers:e.maxPlayers,maxTeams:e.maxTeams,savedAt:Date.now()},t=mc().filter(a=>a.id!==e.id);t.push(n),localStorage.setItem(pc,JSON.stringify(t)),localStorage.setItem(fc+e.id,JSON.stringify(e))}function gb(e){try{const n=localStorage.getItem(fc+e);if(!n)return null;const t=JSON.parse(n);return Bf(t)?t:null}catch{return null}}function hb(e){const n=mc().filter(t=>t.id!==e);localStorage.setItem(pc,JSON.stringify(n)),localStorage.removeItem(fc+e)}function xb(e){return JSON.stringify(e,null,2)}function vb(e){try{const n=JSON.parse(e);return Bf(n)?(n.id=`custom_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,n):null}catch{return null}}function bb(e){const n=xb(e),t=new Blob([n],{type:"application/json"}),a=URL.createObjectURL(t),r=document.createElement("a");r.href=a,r.download=`${e.nameCn||e.id}.json`,r.click(),URL.revokeObjectURL(a)}function Bf(e){if(!e||typeof e!="object")return!1;const n=e;if(typeof n.id!="string"||(typeof n.nameCn!="string"&&(n.nameCn="未命名"),typeof n.nameJa!="string"&&(n.nameJa=""),typeof n.width!="number"||n.width<3||n.width>25)||typeof n.height!="number"||n.height<3||n.height>25||(typeof n.maxPlayers!="number"&&(n.maxPlayers=2),typeof n.maxTeams!="number"&&(n.maxTeams=2),!Array.isArray(n.cells))||n.cells.length!==n.height)return!1;for(const t of n.cells){if(!Array.isArray(t)||t.length!==n.width)return!1;for(const a of t)if(!a||typeof a!="object"||!fb.includes(a.terrain))return!1}return(!n.startZones||typeof n.startZones!="object")&&(n.startZones={}),!0}const Ff=k.createContext(null);function Ca(){const e=k.useContext(Ff);if(!e)throw new Error("useEditor must be inside EditorCtx.Provider");return e}const ro=48,ru=.2,yb=3,ou=.1,cl=[{terrain:"plain",label:"平原",icon:"🟩"},{terrain:"sand",label:"砂地",icon:"🟨"},{terrain:"rubble",label:"瓦砾",icon:"🟫"},{terrain:"forest",label:"森林",icon:"🌲"},{terrain:"water",label:"水域",icon:"🟦"},{terrain:"highland",label:"高地",icon:"⛰️"}],ni=["#00f0ff","#ff00c8","#00cc88","#ff8800","#6688ff","#cc44ff","#44dddd","#ff4466"];function _b({onBack:e}){const[n,t]=k.useReducer(pb,void 0,()=>ll()),a=k.useMemo(()=>({state:n,dispatch:t}),[n]);k.useEffect(()=>{function s(l){if((l.ctrlKey||l.metaKey)&&(l.key==="z"&&!l.shiftKey&&(l.preventDefault(),t({type:"UNDO"})),l.key==="z"&&l.shiftKey&&(l.preventDefault(),t({type:"REDO"})),l.key==="y"&&(l.preventDefault(),t({type:"REDO"})),l.key==="s"&&(l.preventDefault(),r())),!l.ctrlKey&&!l.metaKey&&!l.altKey){const d=parseInt(l.key)-1;d>=0&&d<cl.length&&t({type:"SET_TERRAIN",terrain:cl[d].terrain})}}return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[]);function r(){mb(n.map),t({type:"MARK_SAVED"})}function i(){n.isDirty&&!window.confirm("有未保存的更改，确定要退出吗？")||e()}return o.jsx(Ff.Provider,{value:a,children:o.jsxs("div",{className:"me__screen",children:[o.jsx(Ib,{onBack:i,onSave:r}),o.jsx(jb,{}),o.jsx(je,{id:"me-terrain",title:"地形画笔",initialPos:{x:8,y:56},width:200,minHeight:60,zIndex:20,children:o.jsx(wb,{})}),o.jsx(je,{id:"me-props",title:"地图属性",initialPos:{x:8,y:380},width:200,minHeight:60,zIndex:19,children:o.jsx(Sb,{})}),o.jsx(je,{id:"me-zones",title:"出击区域",initialPos:{x:8,y:600},width:200,minHeight:60,zIndex:18,children:o.jsx(Cb,{})}),o.jsx("style",{children:Nb})]})})}function Ib({onBack:e,onSave:n}){const{state:t,dispatch:a}=Ca(),[r,i]=k.useState(!1),s=k.useRef(null);function l(){t.isDirty&&!window.confirm("有未保存的更改，确定要新建吗？")||a({type:"NEW_MAP",width:7,height:11})}function d(){bb(t.map)}function u(){var f;(f=s.current)==null||f.click()}function p(f){var m;const x=(m=f.target.files)==null?void 0:m[0];if(!x)return;const h=new FileReader;h.onload=()=>{const v=vb(h.result);v?a({type:"LOAD_MAP",map:v}):alert("无效的地图文件")},h.readAsText(x),f.target.value=""}return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"me__topbar",children:[o.jsx("button",{className:"me__btn",onClick:e,children:"← 返回"}),o.jsx("span",{className:"me__title",children:"地图编辑器"}),o.jsxs("span",{className:"me__map-name",children:[t.map.nameCn," (",t.map.height,"×",t.map.width,")",t.isDirty&&" *"]}),o.jsx("span",{style:{flex:1}}),o.jsx("button",{className:"me__btn",onClick:l,children:"新建"}),o.jsx("button",{className:"me__btn",onClick:()=>i(!0),children:"打开"}),o.jsx("button",{className:"me__btn me__btn--accent",onClick:n,children:"保存"}),o.jsx("button",{className:"me__btn",onClick:d,children:"导出"}),o.jsx("button",{className:"me__btn",onClick:u,children:"导入"}),o.jsx("input",{ref:s,type:"file",accept:".json",style:{display:"none"},onChange:p}),o.jsx("span",{className:"me__sep"}),o.jsx("button",{className:"me__btn",onClick:()=>a({type:"UNDO"}),disabled:t.undoStack.length===0,children:"撤销"}),o.jsx("button",{className:"me__btn",onClick:()=>a({type:"REDO"}),disabled:t.redoStack.length===0,children:"重做"}),o.jsx("button",{className:`me__btn${t.showCoords?" me__btn--active":""}`,onClick:()=>a({type:"TOGGLE_COORDS"}),children:"坐标"})]}),r&&o.jsx(kb,{onClose:()=>i(!1)})]})}function kb({onClose:e}){const{dispatch:n,state:t}=Ca(),[a]=k.useState(()=>mc());function r(l){if(t.isDirty&&!window.confirm("有未保存的更改，确定要打开吗？"))return;const d=gb(l);d&&(n({type:"LOAD_MAP",map:d}),e())}function i(l){if(t.isDirty&&!window.confirm("有未保存的更改，确定要打开吗？"))return;const d={...l,id:`custom_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,cells:l.cells.map(u=>u.map(p=>({...p}))),startZones:Object.fromEntries(Object.entries(l.startZones).map(([u,p])=>[u,p.map(f=>({...f}))]))};n({type:"LOAD_MAP",map:d}),e()}function s(l){window.confirm("确定删除此地图？")&&(hb(l),e())}return o.jsx("div",{className:"me__overlay",onClick:e,children:o.jsxs("div",{className:"me__dialog",onClick:l=>l.stopPropagation(),children:[o.jsx("h3",{children:"打开地图"}),a.length>0&&o.jsxs(o.Fragment,{children:[o.jsx("h4",{children:"自定义地图"}),o.jsx("div",{className:"me__dialog-list",children:a.map(l=>o.jsxs("div",{className:"me__dialog-item",children:[o.jsxs("span",{children:[l.nameCn," (",l.height,"×",l.width,")"]}),o.jsx("span",{className:"me__dialog-date",children:new Date(l.savedAt).toLocaleDateString()}),o.jsx("button",{className:"me__btn me__btn--sm",onClick:()=>r(l.id),children:"打开"}),o.jsx("button",{className:"me__btn me__btn--sm me__btn--danger",onClick:()=>s(l.id),children:"删除"})]},l.id))})]}),o.jsx("h4",{children:"内置地图 (作为模板)"}),o.jsx("div",{className:"me__dialog-list",children:Ze.map(l=>o.jsxs("div",{className:"me__dialog-item",children:[o.jsxs("span",{children:[l.nameCn," (",l.height,"×",l.width,")"]}),o.jsx("button",{className:"me__btn me__btn--sm",onClick:()=>i(l),children:"复制"})]},l.id))}),o.jsx("div",{className:"me__dialog-actions",children:o.jsx("button",{className:"me__btn",onClick:e,children:"取消"})})]})})}function jb(){const{state:e,dispatch:n}=Ca(),t=k.useRef(null),[a,r]=k.useState({x:0,y:0,scale:1}),i=k.useRef(null),s=k.useRef(!1),l=k.useRef(!1),d=k.useRef(new Set),{map:u,activeTool:p,showCoords:f,selectedZoneTeam:x,brushSize:h}=e,{width:m,height:v}=u;k.useEffect(()=>{const S=t.current;if(!S)return;const A=S.clientWidth,N=S.clientHeight,$=m*ro,T=v*ro;if(!A||!N)return;const D=Math.max(ru,Math.min(1.5,Math.min(A/$,N/T)));r({x:(A-$*D)/2,y:(N-T*D)/2,scale:D})},[m,v]),k.useEffect(()=>{const S=t.current;if(!S)return;const A=N=>{N.preventDefault();const $=N.deltaY<0?ou:-ou;r(T=>({...T,scale:Math.min(yb,Math.max(ru,T.scale+$))}))};return S.addEventListener("wheel",A,{passive:!1}),()=>S.removeEventListener("wheel",A)},[]);const _=k.useCallback(S=>{S.button!==2&&(i.current={startX:S.clientX,startY:S.clientY,origX:a.x,origY:a.y},s.current=!1,l.current=!1,d.current.clear())},[a.x,a.y]),b=k.useCallback(S=>{if(!i.current)return;const A=S.clientX-i.current.startX,N=S.clientY-i.current.startY;!s.current&&Math.sqrt(A*A+N*N)>5&&(S.buttons===4||S.buttons===2?s.current=!0:p==="terrain"||p==="startZone"||p==="eraseZone"?l.current=!0:s.current=!0),s.current&&r($=>({...$,x:i.current.origX+A,y:i.current.origY+N}))},[p]),g=k.useCallback(()=>{i.current=null,s.current=!1,l.current=!1,d.current.clear()},[]),y=k.useMemo(()=>{const S=new Map;for(const[A,N]of Object.entries(u.startZones)){const $=Number(A);for(const T of N)S.set(`${T.row},${T.col}`,$)}return S},[u.startZones]);function j(S,A){const N=`${S},${A}`;if(p==="terrain")if(h===1)d.current.has(N)||(d.current.add(N),n({type:"PAINT_CELL",row:S,col:A}));else{const $=[],T=Math.floor(h/2);for(let D=-T;D<=T;D++)for(let K=-T;K<=T;K++){const U=S+D,z=A+K;if(U>=0&&U<v&&z>=0&&z<m){const J=`${U},${z}`;d.current.has(J)||(d.current.add(J),$.push({row:U,col:z}))}}$.length&&n({type:"PAINT_AREA",cells:$})}else if(p==="startZone")n({type:"ADD_ZONE_CELL",team:x,position:{row:S,col:A}});else if(p==="eraseZone"){const $=y.get(N);$!==void 0&&n({type:"REMOVE_ZONE_CELL",team:$,position:{row:S,col:A}})}}const{x:M,y:E,scale:w}=a;return o.jsx("div",{className:"me__viewport",ref:t,onMouseDown:_,onMouseMove:b,onMouseUp:g,onMouseLeave:g,onContextMenu:S=>S.preventDefault(),children:o.jsx("div",{className:"me__grid",style:{transform:`translate(${M}px, ${E}px) scale(${w})`,transformOrigin:"top left",display:"grid",gridTemplateColumns:`repeat(${m}, ${ro}px)`,gridTemplateRows:`repeat(${v}, ${ro}px)`},children:u.cells.flatMap((S,A)=>S.map((N,$)=>{const T=rc(N),D=`${A},${$}`,K=y.get(D),U=K!==void 0?ni[K%ni.length]:"";return o.jsxs("div",{className:`me__cell${K!==void 0?" me__cell--zone":""}`,style:{backgroundImage:`url("${T}")`,backgroundSize:"cover",...K!==void 0?{borderColor:U,boxShadow:`inset 0 0 8px ${U}66`}:{}},onMouseDown:z=>{z.button===0&&!s.current&&j(A,$)},onMouseEnter:()=>{l.current&&j(A,$)},children:[N.terrain==="highland"&&o.jsxs("span",{className:"me__cell-elev",children:["+",N.elevation]}),f&&o.jsxs("span",{className:"me__cell-coord",children:[A,",",$]}),K!==void 0&&o.jsxs("span",{className:"me__cell-zone",style:{color:U},children:["Z",K]})]},D)}))})})}function wb(){const{state:e,dispatch:n}=Ca();return o.jsxs("div",{className:"me__palette",children:[o.jsx("div",{className:"me__palette-grid",children:cl.map(({terrain:t,label:a,icon:r},i)=>o.jsxs("button",{className:`me__palette-btn${e.selectedTerrain===t&&e.activeTool==="terrain"?" me__palette-btn--active":""}`,onClick:()=>n({type:"SET_TERRAIN",terrain:t}),title:`${a} (${i+1})`,children:[r," ",a]},t))}),e.selectedTerrain==="highland"&&o.jsxs("div",{className:"me__sub-option",children:[o.jsx("label",{children:"高度:"}),[1,2,3].map(t=>o.jsxs("button",{className:`me__mini-btn${e.selectedElevation===t?" me__mini-btn--active":""}`,onClick:()=>n({type:"SET_ELEVATION",elevation:t}),children:["+",t]},t))]}),e.selectedTerrain!=="highland"&&e.selectedTerrain!=="plain"&&o.jsxs("div",{className:"me__sub-option",children:[o.jsx("label",{children:"变体:"}),[0,1,2,3].map(t=>o.jsx("button",{className:`me__mini-btn${e.selectedVariant===t?" me__mini-btn--active":""}`,onClick:()=>n({type:"SET_VARIANT",variant:t}),children:t},t))]}),o.jsxs("div",{className:"me__sub-option",children:[o.jsx("label",{children:"笔刷:"}),[1,2,3].map(t=>o.jsxs("button",{className:`me__mini-btn${e.brushSize===t?" me__mini-btn--active":""}`,onClick:()=>n({type:"SET_BRUSH_SIZE",size:t}),children:[t,"×",t]},t))]})]})}function Sb(){const{state:e,dispatch:n}=Ca(),{map:t}=e;return o.jsxs("div",{className:"me__props",children:[o.jsxs("label",{className:"me__prop-row",children:[o.jsx("span",{children:"名称(中)"}),o.jsx("input",{type:"text",value:t.nameCn,onChange:a=>n({type:"SET_MAP_META",nameCn:a.target.value})})]}),o.jsxs("label",{className:"me__prop-row",children:[o.jsx("span",{children:"名称(日)"}),o.jsx("input",{type:"text",value:t.nameJa,onChange:a=>n({type:"SET_MAP_META",nameJa:a.target.value})})]}),o.jsxs("div",{className:"me__prop-row",children:[o.jsx("span",{children:"尺寸"}),o.jsx("input",{type:"number",min:3,max:25,value:t.width,onChange:a=>n({type:"RESIZE_MAP",newWidth:Number(a.target.value),newHeight:t.height}),style:{width:50}}),"×",o.jsx("input",{type:"number",min:3,max:25,value:t.height,onChange:a=>n({type:"RESIZE_MAP",newWidth:t.width,newHeight:Number(a.target.value)}),style:{width:50}})]}),o.jsxs("label",{className:"me__prop-row",children:[o.jsx("span",{children:"最大玩家"}),o.jsx("select",{value:t.maxPlayers,onChange:a=>n({type:"SET_MAP_META",maxPlayers:Number(a.target.value)}),children:[2,3,4,6,8].map(a=>o.jsx("option",{value:a,children:a},a))})]}),o.jsxs("label",{className:"me__prop-row",children:[o.jsx("span",{children:"最大队伍"}),o.jsx("select",{value:t.maxTeams,onChange:a=>n({type:"SET_MAP_META",maxTeams:Number(a.target.value)}),children:Array.from({length:t.maxPlayers},(a,r)=>r+1).filter(a=>a>=2).map(a=>o.jsx("option",{value:a,children:a},a))})]})]})}function Cb(){const{state:e,dispatch:n}=Ca(),{map:t,activeTool:a,selectedZoneTeam:r}=e;return o.jsxs("div",{className:"me__zones",children:[o.jsxs("div",{className:"me__zones-tools",children:[o.jsx("button",{className:`me__btn me__btn--sm${a==="startZone"?" me__btn--active":""}`,onClick:()=>n({type:"SET_TOOL",tool:"startZone"}),children:"添加点"}),o.jsx("button",{className:`me__btn me__btn--sm${a==="eraseZone"?" me__btn--active":""}`,onClick:()=>n({type:"SET_TOOL",tool:"eraseZone"}),children:"删除点"})]}),Array.from({length:t.maxTeams},(i,s)=>s).map(i=>{const s=t.startZones[i]??[],l=ni[i%ni.length],d=r===i;return o.jsxs("div",{className:`me__zone-row${d?" me__zone-row--active":""}`,style:{borderLeftColor:l},onClick:()=>n({type:"SET_ZONE_TEAM",team:i}),children:[o.jsxs("span",{style:{color:l},children:["区域 ",i+1]}),o.jsxs("span",{className:"me__zone-count",children:[s.length," 点"]}),o.jsx("button",{className:"me__btn me__btn--sm me__btn--danger",onClick:u=>{u.stopPropagation(),n({type:"CLEAR_ZONE",team:i})},children:"清空"})]},i)})]})}const Nb=`
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
`;function Mb(e){return e?`(${e.row},${e.col})`:"(无)"}function Rt(e){if(!e)return"(空)";const n=q(e.defId),t=(n==null?void 0:n.nameCn)??e.defId,a=e.destroyed?" [已摧毁]":"";return`${t}(${e.defId})${a}`}function Tb(e,n){const t=e.players[n];if(!t)return`  ${n}: (不存在)`;const a=Q.find(i=>i.id===t.unitId),r=[];return r.push(`  ── ${n} ──`),r.push(`    机体: ${(a==null?void 0:a.nameCn)??t.unitId} (${t.unitId})`),r.push(`    位置: ${Mb(t.position)}  朝向: ${t.facing}`),r.push(`    状态: ${t.isDefeated?"已击破":"存活"}`),r.push(`    手牌(${t.hand.length}): ${t.hand.map(i=>Rt(i)).join(", ")||"(无)"}`),r.push(`    阶段1配置: ${Rt(t.plotSeg1)}`),r.push(`    阶段2配置: ${Rt(t.plotSeg2)}`),r.push(`    辅助区(${t.auxiliary.length}): ${t.auxiliary.map(i=>Rt(i)).join(", ")||"(无)"}`),r.push(`    弃牌堆(${t.discard.length}): ${t.discard.map(i=>Rt(i)).join(", ")||"(无)"}`),r.push(`    摧毁区(${t.destroyedCards.length}): ${t.destroyedCards.map(i=>Rt(i)).join(", ")||"(无)"}`),r.push(`    卡组剩余: ${t.deck.filter(i=>!i.destroyed).length} 张`),r.join(`
`)}function Eb(e){var t,a;const n=[];if(n.push("══════════════════════════════════════════"),n.push("  当前状态快照"),n.push("══════════════════════════════════════════"),n.push(`回合: ${e.roundNumber}`),n.push(`阶段: ${e.phase}`),n.push(`当前时机: ${e.currentTiming??"(无)"}`),n.push(`行动顺序: ${e.turnOrder.length>0?e.turnOrder.join(" → "):"(无)"}`),n.push(`布局步骤: ${e.plottingStep??"(无)"}`),n.push(`活跃玩家: ${e.activePlayer}`),n.push(`地图: ${((t=e.map)==null?void 0:t.id)??"(无)"}`),n.push(`地雷数: ${((a=e.mines)==null?void 0:a.length)??0}`),e.pendingDamage){const r=e.pendingDamage;n.push(`待处理伤害: 目标=${r.targetId}, 剩余=${r.remaining}, 来源=${r.source}, 攻击者=${r.attackerId??"(无)"}, 已选=${r.selectedInstanceIds.length}`)}n.push(""),n.push("── 玩家状态 ──");for(const r of e.playerIds)n.push(Tb(e,r));return n.push(""),n.join(`
`)}function Gf(e,n){const t=new Date,a=t.toISOString().replace(/[:.]/g,"-").slice(0,19),r=[];r.push("╔══════════════════════════════════════════╗"),r.push("║   Embryo Machine — 全量游戏日志导出      ║"),r.push("╚══════════════════════════════════════════╝"),r.push(`导出时间: ${t.toLocaleString("zh-CN")}`),n!=null&&n.localPlayerId&&r.push(`本地玩家: ${n.localPlayerId}`),n!=null&&n.connectionStatus&&r.push(`连接状态: ${n.connectionStatus}`),r.push(""),r.push(Eb(e)),r.push("══════════════════════════════════════════"),r.push("  完整游戏日志 (按时间顺序)"),r.push("══════════════════════════════════════════");const i=e.log.filter(p=>!p.startsWith("[DBG]"));for(let p=0;p<i.length;p++)r.push(`[${String(p+1).padStart(4," ")}] ${i[p]}`);r.push(""),r.push(`── 共 ${i.length} 条日志 ──`);const s=r.join(`
`),l=new Blob([s],{type:"text/plain;charset=utf-8"}),d=URL.createObjectURL(l),u=document.createElement("a");u.href=d,u.download=`embryo-log-${a}.txt`,u.click(),URL.revokeObjectURL(d)}const iu=[1e3,2e3,4e3,8e3,15e3];class Db{constructor(n,t,a){qe(this,"ws",null);qe(this,"url");qe(this,"sessionId");qe(this,"onMessage");qe(this,"onStatus");qe(this,"reconnectAttempt",0);qe(this,"reconnectTimer",null);qe(this,"intentionallyClosed",!1);qe(this,"hasEverConnected",!1);this.url=n,this.sessionId=localStorage.getItem("embryo-session-id"),this.onMessage=t,this.onStatus=a}connect(){this.intentionallyClosed=!1,this.onStatus("connecting");const n=this.sessionId?`?sessionId=${this.sessionId}`:"";this.ws=new WebSocket(`${this.url}${n}`),this.ws.onopen=()=>{var t;if(this.intentionallyClosed){(t=this.ws)==null||t.close(),this.ws=null,this.onStatus("disconnected");return}this.hasEverConnected=!0,this.reconnectAttempt=0,this.onStatus("connected")},this.ws.onmessage=t=>{try{const a=JSON.parse(t.data);a.type==="SESSION_ID"&&(this.sessionId=a.sessionId,localStorage.setItem("embryo-session-id",a.sessionId)),this.onMessage(a)}catch{console.warn("[GameSocket] Failed to parse message:",t.data)}},this.ws.onclose=()=>{if(this.intentionallyClosed){this.onStatus("disconnected");return}this.hasEverConnected||(this.sessionId=null,localStorage.removeItem("embryo-session-id")),this.onStatus("reconnecting"),this.scheduleReconnect()},this.ws.onerror=()=>{}}send(n){var t;((t=this.ws)==null?void 0:t.readyState)===WebSocket.OPEN?this.ws.send(JSON.stringify(n)):console.warn("[GameSocket] Cannot send — not connected")}disconnect(){if(this.intentionallyClosed=!0,this.reconnectTimer&&(clearTimeout(this.reconnectTimer),this.reconnectTimer=null),this.ws){const n=this.ws.readyState;n===WebSocket.OPEN||n===WebSocket.CLOSING?(this.ws.close(),this.ws=null):n===WebSocket.CONNECTING&&(this.ws.onmessage=null,this.ws.onerror=null)}this.onStatus("disconnected")}clearSession(){this.sessionId=null,localStorage.removeItem("embryo-session-id")}get isConnected(){var n;return((n=this.ws)==null?void 0:n.readyState)===WebSocket.OPEN}scheduleReconnect(){const n=iu[Math.min(this.reconnectAttempt,iu.length-1)];this.reconnectAttempt++,this.reconnectTimer=setTimeout(()=>{this.reconnectTimer=null,this.connect()},n)}}const Uf=k.createContext(null);function zb({serverUrl:e,children:n}){const[t,a]=k.useState(null),[r,i]=k.useState(null),[s,l]=k.useState(null),[d,u]=k.useState("disconnected"),[p,f]=k.useState(null),[x,h]=k.useState(null),[m,v]=k.useState([]),[_,b]=k.useState(null),[g,y]=k.useState(null),j=k.useRef(null),M=k.useRef(null),E=k.useRef(-1),w=k.useCallback(D=>{switch(D.type){case"SESSION_ID":break;case"ROOM_STATE":i(D.room),l(D.yourPlayerId);break;case"ROOM_LIST":v(D.rooms);break;case"GAME_STATE":{D.state.phase==="plotting"&&(M.current!=="plotting"||E.current!==D.state.roundNumber)&&f(null),M.current=D.state.phase,E.current=D.state.roundNumber,a(D.state),l(D.yourPlayerId),b(D.currentTurnPlayerId??null),y(D.turnDeadline??null);break}case"PLOTTING_STATUS":f({confirmed:D.confirmed,total:D.total});break;case"GAME_STARTED":break;case"RECONNECTED":i(D.room),a(D.state),l(D.yourPlayerId),b(D.currentTurnPlayerId??null),y(D.turnDeadline??null),M.current=D.state.phase,E.current=D.state.roundNumber;break;case"SPECTATE_STATE":a(D.state),i(D.room),l(null);break;case"ACTION_REJECTED":h(D.reason),setTimeout(()=>h(null),5e3);break;case"PLAYER_JOINED":case"PLAYER_LEFT":case"PLAYER_RECONNECTED":case"PLAYER_DISCONNECTED":break;case"ERROR":h(D.message),setTimeout(()=>h(null),5e3);break}},[]);k.useEffect(()=>{const D=new Db(e,w,u);return j.current=D,D.connect(),()=>{D.clearSession(),D.disconnect(),j.current=null}},[e,w]);const S=k.useCallback(D=>{var K;(K=j.current)==null||K.send({type:"GAME_ACTION",action:D})},[]),A=k.useCallback(D=>{var K;(K=j.current)==null||K.send({type:"LOBBY_ACTION",action:D})},[]),N=k.useCallback(D=>{var K;(K=j.current)==null||K.send(D)},[]),$=k.useCallback(D=>q(D),[]),T={state:t,room:r,localPlayerId:s,dispatch:S,sendLobbyAction:A,send:N,getCard:$,connectionStatus:d,plottingStatus:p,isOnline:!0,lastError:x,roomList:m,currentTurnPlayerId:_,turnDeadline:g};return o.jsx(Uf.Provider,{value:T,children:n})}function gc(){const e=k.useContext(Uf);if(!e)throw new Error("useOnlineGame must be used within OnlineGameProvider");return e}function $b({children:e}){const{state:n,localPlayerId:t,dispatch:a,getCard:r,plottingStatus:i,send:s,currentTurnPlayerId:l}=gc(),d=k.useCallback(x=>{if(x.type==="ADVANCE_TIMING"||x.type==="ADVANCE_PHASE"){s({type:"TIMING_DONE"});return}x.type==="START_PLOTTING"||x.type==="DRAW_CARDS"||a(x)},[a,s]);if(!n||!t)return null;let u=n;if(n.phase==="plotting"){const x=(i==null?void 0:i.confirmed.includes(t))??!1;u={...n,plottingStep:x?"complete":t}}const p={player1:t!=="player1",player2:t!=="player2",player1Difficulty:"easy",player2Difficulty:"easy",playerAI:Object.fromEntries(n.playerIds.map(x=>[x,x!==t])),playerDifficulty:Object.fromEntries(n.playerIds.map(x=>[x,"easy"]))},f={state:u,dispatch:d,rawDispatch:d,getCard:r,aiConfig:p,setAIConfig:()=>{},getReplayData:()=>null,autoSaveEnabled:!1,setAutoSaveEnabled:()=>{},exposureMode:!1,setExposureMode:()=>{},isOnline:!0,localPlayerId:t,currentTurnPlayerId:l};return o.jsx(ji.Provider,{value:f,children:e})}const Ab={lobby:"等待中",playing:"游戏中",finished:"已结束"};function Hf({onBack:e,onCreateRoom:n,onJoinRoom:t,roomList:a,onRefreshRooms:r,onSpectate:i}){const[s,l]=k.useState("create"),[d,u]=k.useState(()=>localStorage.getItem("embryo-player-name")??""),[p,f]=k.useState(""),[x,h]=k.useState(""),[m,v]=k.useState(2),[_,b]=k.useState(2),[g,y]=k.useState(Ze[0].id);function j(z){const J=[];for(let L=2;L<=z;L++)z%L===0&&J.push(L);return J}function M(z){v(z);const J=j(z);J.includes(_)||b(J[0]);const L=Ze.find(P=>P.id===g);if(!L||L.maxPlayers<z){const P=Ze.find(H=>H.maxPlayers>=z);P&&y(P.id)}}const[E,w]=k.useState(""),[S,A]=k.useState(!1),[N,$]=k.useState(0);function T(){const z=d.trim()||`Player_${Math.random().toString(36).slice(2,6)}`;return localStorage.setItem("embryo-player-name",z),z}function D(){n(T(),{maxPlayers:m,teamCount:_,mapId:g,turnTimeoutSeconds:N,password:S?E:void 0})}function K(){const z=p.trim().toUpperCase();z&&t(z,T(),x||void 0)}function U(z,J){f(z),J?(l("join"),h("")):t(z,T())}return o.jsxs("div",{className:"ol-screen",children:[o.jsxs("div",{className:"ol-center",children:[o.jsx("h1",{className:"ol-title",children:"联机对战"}),o.jsx("p",{className:"ol-subtitle",children:"创建、加入或浏览房间"}),o.jsx("div",{className:"ol-divider"}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"昵称"}),o.jsx("input",{className:"ol-input",value:d,onChange:z=>u(z.target.value),placeholder:"输入昵称…",maxLength:16})]}),o.jsxs("div",{className:"ol-tabs",children:[o.jsx("button",{className:`ol-tab${s==="create"?" ol-tab--active":""}`,onClick:()=>l("create"),children:"创建房间"}),o.jsx("button",{className:`ol-tab${s==="join"?" ol-tab--active":""}`,onClick:()=>l("join"),children:"加入房间"}),o.jsx("button",{className:`ol-tab${s==="browse"?" ol-tab--active":""}`,onClick:()=>{l("browse"),r==null||r()},children:"浏览房间"})]}),s==="create"&&o.jsxs("div",{className:"ol-panel",children:[o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"最大玩家数"}),o.jsx("select",{className:"ol-select",value:m,onChange:z=>M(+z.target.value),children:[2,3,4,5,6,7,8].map(z=>o.jsxs("option",{value:z,children:[z," 人"]},z))})]}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"队伍数量"}),o.jsx("select",{className:"ol-select",value:_,onChange:z=>b(+z.target.value),children:j(m).map(z=>o.jsxs("option",{value:z,children:[z," 队 (",m/z,"人/队)"]},z))})]}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"地图"}),o.jsx("select",{className:"ol-select",value:g,onChange:z=>y(z.target.value),children:Ze.filter(z=>z.maxPlayers>=m).map(z=>o.jsxs("option",{value:z.id,children:[z.nameCn," (",z.maxPlayers,"人)"]},z.id))})]}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"回合限时"}),o.jsxs("select",{className:"ol-select",value:N,onChange:z=>$(+z.target.value),children:[o.jsx("option",{value:0,children:"无限制"}),o.jsx("option",{value:30,children:"30 秒"}),o.jsx("option",{value:60,children:"60 秒"}),o.jsx("option",{value:90,children:"90 秒"}),o.jsx("option",{value:120,children:"120 秒"})]})]}),o.jsxs("label",{className:"ol-check",onClick:()=>A(!S),children:[o.jsx("span",{className:`ol-check__box${S?" ol-check__box--on":""}`,children:S?"✓":""}),o.jsx("span",{children:"设置房间密码"})]}),S&&o.jsx("div",{className:"ol-field",children:o.jsx("input",{className:"ol-input",value:E,onChange:z=>w(z.target.value),placeholder:"输入密码…",maxLength:20,type:"password"})}),o.jsx("button",{className:"ol-btn ol-btn--primary",onClick:D,children:"创建房间"})]}),s==="join"&&o.jsxs("div",{className:"ol-panel",children:[o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"房间号"}),o.jsx("input",{className:"ol-input ol-input--code",value:p,onChange:z=>f(z.target.value.toUpperCase()),placeholder:"输入6位房间号",maxLength:6})]}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"密码（若有）"}),o.jsx("input",{className:"ol-input",value:x,onChange:z=>h(z.target.value),placeholder:"无密码可留空",maxLength:20,type:"password"})]}),o.jsx("button",{className:"ol-btn ol-btn--primary",onClick:K,disabled:p.trim().length<1,children:"加入房间"})]}),s==="browse"&&o.jsxs("div",{className:"ol-panel",children:[o.jsxs("div",{className:"ol-browse-header",children:[o.jsx("span",{className:"ol-label",children:"在线房间"}),o.jsx("button",{className:"ol-refresh-btn",onClick:r,children:"刷新"})]}),!a||a.length===0?o.jsx("div",{className:"ol-empty",children:"暂无房间，创建一个吧"}):o.jsx("div",{className:"ol-room-list",children:a.map(z=>o.jsxs("div",{className:"ol-room-row",children:[o.jsx("span",{className:"ol-room-row__code",children:z.roomCode}),o.jsx("span",{className:"ol-room-row__host",children:z.hostName}),o.jsx("span",{className:`ol-room-row__status ol-room-row__status--${z.status}`,children:Ab[z.status]??z.status}),o.jsxs("span",{className:"ol-room-row__count",children:[z.playerCount,"/",z.maxPlayers]}),z.hasPassword&&o.jsx("span",{className:"ol-room-row__lock",title:"需要密码",children:"🔒"}),z.status==="lobby"?o.jsx("button",{className:"ol-room-row__join",onClick:()=>U(z.roomCode,z.hasPassword),children:"加入"}):o.jsx("button",{className:"ol-room-row__join",onClick:()=>i==null?void 0:i(z.roomCode),disabled:!i,children:"观战"})]},z.roomCode))})]}),o.jsx("button",{className:"ol-btn ol-btn--back",onClick:e,children:"返回主菜单"})]}),o.jsx("style",{children:Pb})]})}const Pb=`
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
`;function Vb({room:e,localPlayerId:n,connectionStatus:t,lastError:a,send:r,onLeave:i}){var E;const[s,l]=k.useState(""),d=e.slots.find(w=>w.playerId===n),u=n!=null&&n===((E=e.slots[0])==null?void 0:E.playerId),p=(d==null?void 0:d.isReady)??!1,f=e.slots.filter(w=>w.type!=="empty"),x=f.length>=2&&f.every(w=>w.isReady),h=e.slots.filter(w=>w.type!=="empty"&&w.playerId!==n).map(w=>w.unitId),m=k.useState(!1);k.useEffect(()=>{if(m[0]||!n)return;if(d!=null&&d.unitId&&d.unitId!=="TR"){l(d.unitId),m[1](!0);return}const w=Q.filter(S=>!h.includes(S.id));if(w.length>0){const S=w[Math.floor(Math.random()*w.length)];l(S.id),r({type:"LOBBY_ACTION",action:{type:"SELECT_UNIT",playerId:n,unitId:S.id}}),m[1](!0)}},[n]);function v(w){l(w),r({type:"LOBBY_ACTION",action:{type:"SELECT_UNIT",playerId:n,unitId:w}})}function _(){const w=Q.filter(A=>!h.includes(A.id)&&A.id!==s);if(w.length===0)return;const S=w[Math.floor(Math.random()*w.length)];v(S.id)}function b(){r({type:p?"UNREADY":"READY"})}function g(){r({type:"START_GAME"})}function y(w,S){r({type:"SET_SLOT_TYPE",playerId:w,slotType:S})}function j(w){r({type:"KICK_PLAYER",playerId:w})}function M(){r({type:"LEAVE_ROOM"}),i()}return o.jsxs("div",{className:"rm-screen",children:[o.jsxs("div",{className:"rm-center",children:[o.jsxs("div",{className:"rm-header",children:[o.jsx("h2",{className:"rm-room-title",children:"房间"}),o.jsx("div",{className:"rm-room-code",children:e.roomCode}),e.hasPassword&&o.jsx("span",{className:"rm-lock",title:"有密码",children:"🔒"}),o.jsx("div",{className:"rm-room-status",children:t==="connected"?o.jsx("span",{className:"rm-status rm-status--ok",children:"已连接"}):o.jsx("span",{className:"rm-status rm-status--warn",children:t})})]}),a&&o.jsx("div",{className:"rm-error",children:a}),o.jsx("div",{className:"rm-slots",children:e.slots.map((w,S)=>o.jsx(Lb,{slot:w,isLocal:w.playerId===n,isHost:u,onSetSlotType:y,onKick:j},S))}),o.jsxs("div",{className:"rm-section",children:[o.jsxs("div",{className:"rm-section-header",children:[o.jsx("div",{className:"rm-section-title",children:"选择机体"}),o.jsx("button",{className:"rm-random-btn",onClick:_,title:"随机选择机体",children:"🎲 随机"})]}),o.jsx("div",{className:"rm-unit-grid",children:Q.map(w=>{const S=s||(d==null?void 0:d.unitId),A=h.includes(w.id),N=S===w.id;return o.jsxs("button",{className:`rm-unit-btn${N?" rm-unit-btn--selected":""}${A?" rm-unit-btn--taken":""}`,onClick:()=>!A&&v(w.id),disabled:A,title:`${w.nameCn} (${w.nameJa}) - MOV:${w.movement} EVA:${w.evasion} ASL:${w.assault} INIT:${w.initiative}`,children:[o.jsx("span",{className:"rm-unit-code",children:w.id}),o.jsx("span",{className:"rm-unit-name",children:w.nameCn})]},w.id)})})]}),o.jsxs("div",{className:"rm-actions",children:[o.jsx("button",{className:`rm-btn${p?" rm-btn--unready":" rm-btn--ready"}`,onClick:b,children:p?"取消准备":"准备"}),u&&o.jsx("button",{className:"rm-btn rm-btn--start",onClick:g,disabled:!x,title:x?"开始游戏":"等待所有玩家准备",children:"开始游戏"}),o.jsx("button",{className:"rm-btn rm-btn--leave",onClick:M,children:"离开房间"})]})]}),o.jsx("style",{children:Rb})]})}function Lb({slot:e,isLocal:n,isHost:t,onSetSlotType:a,onKick:r}){const i=Q.find(l=>l.id===e.unitId);if(e.type==="empty")return o.jsxs("div",{className:"rm-slot rm-slot--empty",children:[o.jsxs("span",{className:"rm-slot__index",children:["#",e.index+1]}),o.jsx("span",{className:"rm-slot__name",children:"空位"}),t&&o.jsx("button",{className:"rm-slot__toggle",onClick:()=>a(e.playerId,"ai"),children:"+AI"})]});const s=Mn[e.team%Mn.length][0];return o.jsxs("div",{className:`rm-slot${n?" rm-slot--local":""}${e.isConnected?"":" rm-slot--dc"}`,children:[o.jsx("span",{className:"rm-slot__color-dot",style:{background:s},title:`队伍 ${e.team+1}`}),o.jsxs("span",{className:"rm-slot__index",children:["#",e.index+1]}),o.jsx("span",{className:"rm-slot__type-badge",children:e.type==="ai"?"AI":""}),o.jsxs("span",{className:"rm-slot__name",children:[e.playerName||e.playerId,n&&" (你)"]}),o.jsx("span",{className:"rm-slot__unit",children:i?i.nameCn:e.unitId||"未选择"}),o.jsx("span",{className:`rm-slot__ready${e.isReady?" rm-slot__ready--yes":""}`,children:e.isReady?"已准备":"未准备"}),!e.isConnected&&o.jsx("span",{className:"rm-slot__dc",children:"断线"}),t&&e.type==="ai"&&o.jsx("button",{className:"rm-slot__toggle",onClick:()=>a(e.playerId,"empty"),children:"移除"}),t&&!n&&e.type==="human"&&r&&o.jsx("button",{className:"rm-slot__toggle rm-slot__toggle--kick",onClick:()=>r(e.playerId),children:"踢出"})]})}const Rb=`
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
.rm-slot__color-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 0 6px currentColor;
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
`;function Ob(){return"wss://embryo-machine.onrender.com/"}const Kb=Ob();function Jb({onBack:e}){const[n]=k.useState(Kb),[t,a]=k.useState("lobby"),[r,i]=k.useState(null),s=k.useCallback((f,x)=>{i({type:"create",playerName:f,settings:x}),a("connected")},[]),l=k.useCallback((f,x,h)=>{i({type:"join",roomCode:f,playerName:x,password:h}),a("connected")},[]),d=k.useCallback(f=>{i({type:"spectate",roomCode:f}),a("connected")},[]),u=k.useCallback(()=>{t!=="connected"&&(i({type:"browse"}),a("connected"))},[t]),p=k.useCallback(()=>{i(null),a("lobby")},[]);return t==="lobby"?o.jsx(Hf,{onBack:e,onCreateRoom:s,onJoinRoom:l,onRefreshRooms:u,onSpectate:d}):o.jsx(zb,{serverUrl:n,children:o.jsx(Bb,{pendingAction:r,onBack:e,onDisconnect:p})})}function Bb({pendingAction:e,onDisconnect:n}){const{state:t,room:a,localPlayerId:r,send:i,connectionStatus:s,lastError:l,roomList:d}=gc(),[u,p]=k.useState(!1);return!u&&s==="connected"&&e&&(e.type==="create"?i({type:"CREATE_ROOM",playerName:e.playerName,settings:e.settings}):e.type==="join"?i({type:"JOIN_ROOM",roomCode:e.roomCode,playerName:e.playerName,password:e.password}):e.type==="spectate"?i({type:"SPECTATE_ROOM",roomCode:e.roomCode}):e.type==="browse"&&i({type:"LIST_ROOMS"}),p(!0)),(e==null?void 0:e.type)==="browse"&&!a&&!t?o.jsx(Hf,{onBack:n,onCreateRoom:(f,x)=>{i({type:"CREATE_ROOM",playerName:f,settings:x})},onJoinRoom:(f,x,h)=>{i({type:"JOIN_ROOM",roomCode:f,playerName:x,password:h})},roomList:d,onRefreshRooms:()=>i({type:"LIST_ROOMS"})}):s==="connecting"?o.jsxs("div",{className:"og-connecting",children:[o.jsx("div",{className:"og-spinner"}),o.jsx("p",{children:"正在连接服务器…"}),o.jsx("button",{className:"ol-btn ol-btn--back",onClick:n,children:"取消"}),o.jsx("style",{children:kr})]}):a&&!t?o.jsx(Vb,{room:a,localPlayerId:r,connectionStatus:s,lastError:l,send:i,onLeave:n}):t&&r?o.jsx(bi,{children:o.jsx($b,{children:o.jsx(Fb,{})})}):t&&!r?o.jsx(Gb,{state:t,room:a,onLeave:n}):o.jsxs("div",{className:"og-connecting",children:[o.jsx("div",{className:"og-spinner"}),o.jsx("p",{children:"等待服务器响应…"}),l&&o.jsx("div",{className:"rm-error",children:l}),o.jsx("button",{className:"ol-btn ol-btn--back",onClick:n,children:"返回"}),o.jsx("style",{children:kr})]})}function Fb(){const e=$r(),{dispatch:n,aiConfig:t}=Se(),{localPlayerId:a,connectionStatus:r,plottingStatus:i,lastError:s,turnDeadline:l}=gc(),[d,u]=k.useState(null);k.useEffect(()=>{if(!l){u(null);return}const w=()=>{const A=Math.max(0,Math.ceil((l-Date.now())/1e3));u(A)};w();const S=setInterval(w,500);return()=>clearInterval(S)},[l]),k.useEffect(()=>{e.phase==="pregame"&&n({type:"START_PLOTTING"})},[e.phase,n]);const[p,f]=k.useState([{id:"map",zIndex:10},{id:"log",zIndex:11},{id:"mecha",zIndex:12},{id:"plot",zIndex:100}]),x=k.useCallback(w=>{f(S=>{const A=Math.max(...S.map(U=>U.zIndex)),N=S.find(U=>U.id===w);if(N&&N.zIndex===A)return S;const $=[...S].sort((U,z)=>U.zIndex-z.zIndex),T=10,D=new Map;let K=0;for(const U of $)U.id!==w&&D.set(U.id,T+K++);return D.set(w,T+$.length-1),S.map(U=>({...U,zIndex:D.get(U.id)??U.zIndex}))})},[]),h=w=>{var S;return((S=p.find(A=>A.id===w))==null?void 0:S.zIndex)??10},m=k.useCallback(w=>[],[]),v=wi(),_=v?window.innerWidth:Math.max(400,Math.min(window.innerWidth*.6,620)),b=300,g=window.innerWidth-b-16,y=v?window.innerWidth:380,j=window.innerWidth-y-16,M=e.phase==="plotting"&&e.plottingStep!=="complete"&&e.plottingStep!==null&&!e.plottingStep.startsWith("transition_to_")&&!Oe(t,e.plottingStep),E=o.jsxs("div",{className:"og-status-bar",children:[o.jsxs("span",{className:"og-round",children:["第 ",e.roundNumber," 回合"]}),o.jsx("span",{className:"og-phase",children:Wf(e.phase)}),e.currentTiming&&o.jsxs("span",{className:"og-timing",children:["▶ ",Zf(e.currentTiming)]}),!v&&e.turnOrder.length>0&&o.jsxs("span",{className:"og-debug-info",title:"当前行动顺序",children:["[",e.turnOrder.map(w=>w.replace("player","P")).join("→"),"]"]}),d!==null&&d>0&&o.jsxs("span",{className:`og-countdown${d<=10?" og-countdown--warn":""}`,children:["⏱ ",d,"s"]}),o.jsx("span",{style:{flex:1}}),i&&e.phase==="plotting"&&o.jsxs("span",{className:"og-plotting",children:["布局进度: ",i.confirmed.length,"/",i.total]}),!v&&o.jsx("button",{className:"og-export-btn",onClick:()=>Gf(e,{localPlayerId:a??void 0,connectionStatus:r}),title:"导出全量日志（含调试状态快照）",children:"📋 导出日志"}),o.jsx("span",{className:`og-conn og-conn--${r}`,children:r==="connected"?"在线":r}),a&&o.jsx("span",{className:"og-pid",children:a.replace("player","P")})]});return v?o.jsxs("div",{className:"game-screen game-screen--mobile",children:[E,s&&o.jsx("div",{className:"rm-error",style:{margin:"4px 12px 0"},children:s}),o.jsx("div",{className:"game-screen__board-mobile",children:o.jsx(ya,{})}),o.jsxs("div",{className:"game-screen__panels-mobile",children:[M&&o.jsx(je,{id:"plot",title:"布局阶段",initialPos:{x:0,y:0},width:y,children:o.jsx(na,{})}),o.jsx(je,{id:"mecha",title:"机体信息",initialPos:{x:0,y:0},defaultMinimized:!0,children:o.jsx(ei,{})}),o.jsx(je,{id:"log",title:"行动日志",initialPos:{x:0,y:0},defaultMinimized:!0,children:o.jsx(jr,{})})]}),o.jsx(Qo,{}),o.jsx(qo,{}),o.jsx("style",{children:kr})]}):o.jsxs("div",{className:"game-screen",style:{position:"relative",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[E,s&&o.jsx("div",{className:"rm-error",style:{margin:"4px 16px 0"},children:s}),o.jsxs("div",{style:{position:"relative",flex:1},children:[o.jsx(je,{id:"map",title:"地图",initialPos:{x:16,y:8},width:_,minHeight:300,zIndex:h("map"),onFocus:x,siblingRects:m("map"),children:o.jsx("div",{style:{height:"calc(100vh - 100px)",minHeight:300},children:o.jsx(ya,{})})}),o.jsx(je,{id:"log",title:"行动日志",initialPos:{x:g,y:8},width:b,height:260,minHeight:120,zIndex:h("log"),onFocus:x,siblingRects:m("log"),children:o.jsx(jr,{})}),o.jsx(je,{id:"mecha",title:"机体信息",initialPos:{x:g,y:280},width:b,minHeight:160,zIndex:h("mecha"),onFocus:x,siblingRects:m("mecha"),children:o.jsx(ei,{})}),M&&o.jsx(je,{id:"plot",title:"布局阶段",initialPos:{x:j,y:8},width:y,height:620,minHeight:80,zIndex:h("plot"),onFocus:x,siblingRects:m("plot"),children:o.jsx(na,{})})]}),o.jsx(Qo,{}),o.jsx(qo,{}),o.jsx("style",{children:kr})]})}function Gb({state:e,room:n,onLeave:t}){const a={player1:!0,player2:!0,player1Difficulty:"easy",player2Difficulty:"easy",playerAI:Object.fromEntries(e.playerIds.map(s=>[s,!0])),playerDifficulty:Object.fromEntries(e.playerIds.map(s=>[s,"easy"]))},r=()=>{},i={state:e,dispatch:r,rawDispatch:r,getCard:s=>q(s),aiConfig:a,setAIConfig:()=>{},getReplayData:()=>null,autoSaveEnabled:!1,setAutoSaveEnabled:()=>{},exposureMode:!1,setExposureMode:()=>{},isOnline:!0,localPlayerId:null,currentTurnPlayerId:null};return o.jsx(ji.Provider,{value:i,children:o.jsx(bi,{children:o.jsxs("div",{className:"game-screen",style:{position:"relative",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[o.jsxs("div",{className:"og-status-bar",children:[o.jsx("span",{className:"og-spectate-badge",children:"观战中"}),o.jsxs("span",{className:"og-round",children:["第 ",e.roundNumber," 回合"]}),o.jsx("span",{className:"og-phase",children:Wf(e.phase)}),e.currentTiming&&o.jsxs("span",{className:"og-timing",children:["▶ ",Zf(e.currentTiming)]}),o.jsx("span",{style:{flex:1}}),n&&o.jsx("span",{className:"og-room-code-badge",children:n.roomCode}),o.jsx("button",{className:"rm-btn rm-btn--leave",onClick:t,children:"离开"})]}),o.jsxs("div",{style:{position:"relative",flex:1},children:[o.jsx(je,{id:"map",title:"地图",initialPos:{x:16,y:8},width:Math.max(400,Math.min(window.innerWidth*.7,700)),minHeight:300,children:o.jsx("div",{style:{height:"calc(100vh - 100px)",minHeight:300},children:o.jsx(ya,{})})}),o.jsx(je,{id:"log",title:"行动日志",initialPos:{x:window.innerWidth-316,y:8},width:300,height:400,minHeight:120,children:o.jsx(jr,{})})]}),o.jsx("style",{children:kr})]})})})}function Wf(e){return{pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"主要阶段 1",action_seg2:"主要阶段 2",cleanup:"清理阶段",game_over:"游戏结束"}[e]??e}function Zf(e){return{movement:"移动",ranged:"射击",melee:"近战",special:"特殊"}[e]??e}const kr=`
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
`;function Ub(){const e=$r(),{rawDispatch:n,aiConfig:t,setAIConfig:a,getReplayData:r,autoSaveEnabled:i,setAutoSaveEnabled:s,exposureMode:l,setExposureMode:d}=Se(),[u,p]=k.useState("home"),[f,x]=k.useState("map"),[h,m]=k.useState(!0),[v,_]=k.useState(2),[b,g]=k.useState(2),[y,j]=k.useState(null),[M,E]=k.useState({loaded:0,total:0}),w=k.useRef(null),S=k.useCallback(()=>{ge.init(),x("map"),p("game")},[]),A=k.useCallback(()=>{const D=zf().length;E({loaded:0,total:D}),j("asking")},[]),N=k.useCallback(()=>{j("loading");const D=new AbortController;w.current=D,Hx((K,U)=>{E({loaded:K,total:U}),K>=U&&setTimeout(()=>j(null),600)},D.signal)},[]),$=k.useCallback(()=>{var D;(D=w.current)==null||D.abort(),j(null)},[]);function T(D){n({type:"LOAD_GAME",state:D.gameState}),a(D.aiConfig),p("game")}return u==="rules"?o.jsx(Lv,{onBack:()=>p((e.phase==="setup","game"))}):u==="data"?o.jsx(Ov,{onBack:()=>p("game")}):u==="load"?o.jsx(Qd,{mode:"load",onBack:()=>p("home"),onLoad:T}):u==="replay"?o.jsx(ab,{onBack:()=>p("home")}):u==="save"?o.jsx(Qd,{mode:"save",onBack:()=>p("game"),currentState:e,aiConfig:t}):u==="mapEditor"?o.jsx(_b,{onBack:()=>p("home")}):u==="online"?o.jsx(Jb,{onBack:()=>p("home")}):u==="settings"?o.jsxs(o.Fragment,{children:[y!==null&&o.jsx(Ox,{phase:y,loaded:M.loaded,total:M.total,onConfirm:N,onSkip:$}),o.jsx(Lx,{onBack:()=>p("home"),soundEnabled:ge.enabled,onToggleSound:()=>{ge.enabled=!ge.enabled,E(D=>({...D}))},soundVolume:ge.volume,onVolumeChange:D=>{ge.volume=D,ge.init(),ge.uiBlip(),E(K=>({...K}))},exposureMode:l,onToggleExposure:()=>d(!l),autoFill:h,onToggleAutoFill:()=>m(!h),onCacheAssets:A})]}):u==="home"?o.jsx(Px,{onStart:S,onOnlinePlay:()=>{ge.init(),p("online")},onViewRules:()=>p("rules"),onViewData:()=>p("data"),onLoadGame:()=>p("load"),onReplay:()=>p("replay"),onMapEditor:()=>p("mapEditor"),onSettings:()=>p("settings")}):e.phase==="setup"?f==="map"?o.jsx(jx,{onNext:()=>x("units"),onBack:()=>p("home"),playerCount:v,setPlayerCount:_,teamCount:b,setTeamCount:g}):f==="units"?o.jsx(Cx,{onNext:()=>x("spawn"),onBack:()=>x("map"),autoFill:h}):o.jsx($x,{onBack:()=>x("units")}):e.phase==="game_over"?o.jsx(Zb,{onHome:()=>{p("home"),x("map")},onSaveReplay:()=>{const D=r();if(!D)return;const K=e.players.player1.isDefeated,U=e.players.player2.isDefeated,z=K&&U?"draw":K?"player2":U?"player1":null;try{mx(D.initialState,D.actions,z),alert("录像已保存！")}catch{alert("保存失败，存储空间可能不足。")}}}):o.jsx(Hb,{onSave:()=>p("save"),autoSaveEnabled:i,onToggleAutoSave:()=>s(!i)})}function Hb({onSave:e,autoSaveEnabled:n,onToggleAutoSave:t}){const a=$r(),{dispatch:r,exposureMode:i,getCard:s,aiConfig:l}=Se();k.useEffect(()=>{a.phase==="pregame"&&r({type:"START_PLOTTING"})},[a.phase,r]);const d=k.useRef(a.phase);k.useEffect(()=>{const E=d.current;if(d.current=a.phase,!!i&&E==="plotting"&&a.phase==="action_seg1"){const w=S=>{if(!S)return"无";const A=s(S.defId);return A?A.nameCn:S.defId};for(const S of a.playerIds){const A=a.players[S];if(A.isDefeated)continue;const N=`P${S.replace("player","")}`;r({type:"ADD_LOG",message:`[暴露] ${N} 布局: 段1=${w(A.plotSeg1)} / 段2=${w(A.plotSeg2)}`})}}},[a.phase]);const[u,p]=k.useState([{id:"map",zIndex:10},{id:"log",zIndex:11},{id:"mecha",zIndex:12},{id:"plot",zIndex:100}]),f=k.useRef(new Map),x=k.useCallback(E=>{p(w=>{const S=Math.max(...w.map(K=>K.zIndex)),A=w.find(K=>K.id===E);if(A&&A.zIndex===S)return w;const N=[...w].sort((K,U)=>K.zIndex-U.zIndex),$=10,T=new Map;let D=0;for(const K of N)K.id!==E&&T.set(K.id,$+D++);return T.set(E,$+N.length-1),w.map(K=>({...K,zIndex:T.get(K.id)??K.zIndex}))})},[]),h=E=>{var w;return((w=u.find(S=>S.id===E))==null?void 0:w.zIndex)??10},m=k.useCallback(E=>{const w=[];return f.current.forEach((S,A)=>{A!==E&&S&&w.push(S.getBoundingClientRect())}),w},[]),v=wi(),_=v?window.innerWidth:Math.max(400,Math.min(window.innerWidth*.6,620)),b=300,g=window.innerWidth-b-16,y=36,j=v?window.innerWidth:380,M=window.innerWidth-j-16;if(v){const E=a.phase==="plotting"&&a.plottingStep!=="complete"&&a.plottingStep!==null&&!a.plottingStep.startsWith("transition_to_")&&!Oe(l,a.plottingStep),w=a.phase==="plotting"&&a.plottingStep!=="complete"&&a.plottingStep!==null&&!a.plottingStep.startsWith("transition_to_")&&Oe(l,a.plottingStep);return o.jsxs("div",{className:"game-screen game-screen--mobile",children:[o.jsx("div",{className:"game-screen__header",style:{flexShrink:0},children:o.jsx(su,{onSave:e,autoSaveEnabled:n,onToggleAutoSave:t})}),o.jsxs("div",{className:"game-screen__board-mobile",children:[o.jsx(ya,{}),o.jsx(lu,{})]}),o.jsxs("div",{className:"game-screen__panels-mobile",children:[E&&o.jsx(je,{id:"plot",title:"布局阶段",initialPos:{x:0,y:0},width:j,children:o.jsx(na,{})}),w&&o.jsx("div",{style:{width:0,height:0,overflow:"hidden",opacity:0,pointerEvents:"none"},children:o.jsx(na,{})}),o.jsx(je,{id:"mecha",title:"机体信息",initialPos:{x:0,y:0},defaultMinimized:!0,children:o.jsx(ei,{})}),o.jsx(je,{id:"log",title:"行动日志",initialPos:{x:0,y:0},defaultMinimized:!0,children:o.jsx(jr,{})})]}),o.jsx(Qo,{}),o.jsx(qo,{}),o.jsx("style",{children:cu})]})}return o.jsxs("div",{className:"game-screen",style:{position:"relative",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[o.jsx("div",{className:"game-screen__header",style:{flexShrink:0},children:o.jsx(su,{onSave:e,autoSaveEnabled:n,onToggleAutoSave:t})}),o.jsxs("div",{style:{position:"relative",flex:1},children:[o.jsx(je,{id:"map",title:"地图",initialPos:{x:16,y:8},width:_,minHeight:300,zIndex:h("map"),onFocus:x,siblingRects:m("map"),children:o.jsx("div",{style:{height:`calc(100vh - ${y+60}px)`,minHeight:300},children:o.jsx(ya,{})})}),o.jsx(je,{id:"log",title:"行动日志",initialPos:{x:g,y:8},width:b,height:260,minHeight:120,zIndex:h("log"),onFocus:x,siblingRects:m("log"),children:o.jsx(jr,{})}),o.jsx(je,{id:"mecha",title:"机体信息",initialPos:{x:g,y:280},width:b,minHeight:160,zIndex:h("mecha"),onFocus:x,siblingRects:m("mecha"),children:o.jsx(ei,{})}),a.phase==="plotting"&&a.plottingStep!=="complete"&&a.plottingStep!==null&&!a.plottingStep.startsWith("transition_to_")&&!Oe(l,a.plottingStep)&&o.jsx(je,{id:"plot",title:"布局阶段",initialPos:{x:M,y:8},width:j,height:620,minHeight:80,zIndex:h("plot"),onFocus:x,siblingRects:m("plot"),children:o.jsx(na,{})}),a.phase==="plotting"&&a.plottingStep!=="complete"&&a.plottingStep!==null&&!a.plottingStep.startsWith("transition_to_")&&Oe(l,a.plottingStep)&&o.jsx("div",{style:{position:"absolute",width:0,height:0,overflow:"hidden",opacity:0,pointerEvents:"none"},children:o.jsx(na,{})})]}),o.jsx(Qo,{}),o.jsx(qo,{}),o.jsx(lu,{}),o.jsx("style",{children:cu})]})}function su({onSave:e,autoSaveEnabled:n,onToggleAutoSave:t}){const a=$r(),r={pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"行动阶段 [主要阶段 1]",action_seg2:"行动阶段 [主要阶段 2]",cleanup:"清理阶段",game_over:"游戏结束"},i={movement:"移动",ranged:"射击",melee:"近战",special:"特殊"};return o.jsxs("div",{className:"phase-bar",children:[o.jsxs("span",{className:"phase-bar__round",children:["第 ",a.roundNumber," 回合"]}),o.jsx("span",{className:"phase-bar__phase",children:r[a.phase]??a.phase}),a.currentTiming&&o.jsxs("span",{className:"phase-bar__timing",children:["▶ ",i[a.currentTiming]??a.currentTiming]}),o.jsx("span",{style:{flex:1}}),o.jsx("button",{className:"phase-bar__autosave-btn",onClick:t,title:n?"自动存档已开启（点击关闭）":"自动存档已关闭（点击开启）",children:n?"💾 自动":"💾 关"}),o.jsx("button",{className:"phase-bar__save-btn",onClick:e,title:"保存游戏",children:"💾 保存"}),o.jsx("button",{className:"phase-bar__save-btn",onClick:()=>Gf(a),title:"导出全量日志（含调试状态快照）",children:"📋 日志"})]})}function Wb(e){return e.startsWith("[DBG]")?"log-panel__entry log-panel__entry--debug":e.startsWith("===")?"log-panel__entry log-panel__entry--round-start":e.startsWith("---")?"log-panel__entry log-panel__entry--round-end":e.includes("发动")||e.includes("攻击")?"log-panel__entry log-panel__entry--attack":e.includes("摧毁")||e.includes("连锁")||e.includes("诱爆")?"log-panel__entry log-panel__entry--damage":e.includes("移动到")?"log-panel__entry log-panel__entry--move":e.includes("获胜")||e.includes("击破")||e.includes("平局")?"log-panel__entry log-panel__entry--victory":"log-panel__entry"}function jr(){const e=$r();return o.jsx("div",{className:"log-panel",children:o.jsx("div",{className:"log-panel__entries",children:[...e.log].filter(n=>!n.startsWith("[DBG]")).reverse().map((n,t)=>o.jsx("div",{className:Wb(n),children:n},t))})})}function Zb({onHome:e,onSaveReplay:n}){const{state:t,dispatch:a}=Se(),r=t.log[t.log.length-1]??"游戏结束",i=t.players.player1.isDefeated,s=t.players.player2.isDefeated,l=i&&s?"双方同时击破":i?"玩家 2 获胜":"玩家 1 获胜";function d(){a({type:"RESET_GAME"}),e()}return o.jsxs("div",{className:"gameover-screen",children:[o.jsx("div",{className:"gameover-icon",children:"💥"}),o.jsx("h1",{className:"gameover-title",children:l}),o.jsx("p",{className:"gameover-sub",children:r}),o.jsxs("div",{className:"gameover-actions",children:[o.jsx("button",{className:"gameover-restart",onClick:d,children:"返回主菜单"}),o.jsx("button",{className:"gameover-save-replay",onClick:n,children:"🎬 保存录像"})]}),o.jsx("style",{children:Xb})]})}function lu(){const{isAnimating:e,skipAnimation:n}=Dr();return e?o.jsx("button",{className:"skip-anim-btn",onClick:n,children:"⏩ 跳过"}):null}function Yb(){return o.jsx(bi,{children:o.jsx(Df,{children:o.jsx(Ub,{})})})}const cu=`
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
`,Xb=`
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
`;os.createRoot(document.getElementById("root")).render(o.jsx(gm.StrictMode,{children:o.jsx(Yb,{})}));

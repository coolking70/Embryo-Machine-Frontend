var Xf=Object.defineProperty;var Qf=(e,n,t)=>n in e?Xf(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var qe=(e,n,t)=>Qf(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function qf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var du={exports:{}},as={},uu={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wr=Symbol.for("react.element"),em=Symbol.for("react.portal"),nm=Symbol.for("react.fragment"),tm=Symbol.for("react.strict_mode"),am=Symbol.for("react.profiler"),rm=Symbol.for("react.provider"),om=Symbol.for("react.context"),sm=Symbol.for("react.forward_ref"),im=Symbol.for("react.suspense"),lm=Symbol.for("react.memo"),cm=Symbol.for("react.lazy"),vc=Symbol.iterator;function dm(e){return e===null||typeof e!="object"?null:(e=vc&&e[vc]||e["@@iterator"],typeof e=="function"?e:null)}var pu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fu=Object.assign,mu={};function ka(e,n,t){this.props=e,this.context=n,this.refs=mu,this.updater=t||pu}ka.prototype.isReactComponent={};ka.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ka.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function gu(){}gu.prototype=ka.prototype;function ul(e,n,t){this.props=e,this.context=n,this.refs=mu,this.updater=t||pu}var pl=ul.prototype=new gu;pl.constructor=ul;fu(pl,ka.prototype);pl.isPureReactComponent=!0;var bc=Array.isArray,hu=Object.prototype.hasOwnProperty,fl={current:null},xu={key:!0,ref:!0,__self:!0,__source:!0};function vu(e,n,t){var a,r={},s=null,i=null;if(n!=null)for(a in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(s=""+n.key),n)hu.call(n,a)&&!xu.hasOwnProperty(a)&&(r[a]=n[a]);var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){for(var d=Array(l),u=0;u<l;u++)d[u]=arguments[u+2];r.children=d}if(e&&e.defaultProps)for(a in l=e.defaultProps,l)r[a]===void 0&&(r[a]=l[a]);return{$$typeof:wr,type:e,key:s,ref:i,props:r,_owner:fl.current}}function um(e,n){return{$$typeof:wr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ml(e){return typeof e=="object"&&e!==null&&e.$$typeof===wr}function pm(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var yc=/\/+/g;function Cs(e,n){return typeof e=="object"&&e!==null&&e.key!=null?pm(""+e.key):n.toString(36)}function oo(e,n,t,a,r){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case wr:case em:i=!0}}if(i)return i=e,r=r(i),e=a===""?"."+Cs(i,0):a,bc(r)?(t="",e!=null&&(t=e.replace(yc,"$&/")+"/"),oo(r,n,t,"",function(u){return u})):r!=null&&(ml(r)&&(r=um(r,t+(!r.key||i&&i.key===r.key?"":(""+r.key).replace(yc,"$&/")+"/")+e)),n.push(r)),1;if(i=0,a=a===""?".":a+":",bc(e))for(var l=0;l<e.length;l++){s=e[l];var d=a+Cs(s,l);i+=oo(s,n,t,d,r)}else if(d=dm(e),typeof d=="function")for(e=d.call(e),l=0;!(s=e.next()).done;)s=s.value,d=a+Cs(s,l++),i+=oo(s,n,t,d,r);else if(s==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function Ar(e,n,t){if(e==null)return e;var a=[],r=0;return oo(e,a,"","",function(s){return n.call(t,s,r++)}),a}function fm(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},so={transition:null},mm={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:so,ReactCurrentOwner:fl};function bu(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:Ar,forEach:function(e,n,t){Ar(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Ar(e,function(){n++}),n},toArray:function(e){return Ar(e,function(n){return n})||[]},only:function(e){if(!ml(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ne.Component=ka;ne.Fragment=nm;ne.Profiler=am;ne.PureComponent=ul;ne.StrictMode=tm;ne.Suspense=im;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mm;ne.act=bu;ne.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=fu({},e.props),r=e.key,s=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(s=n.ref,i=fl.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in n)hu.call(n,d)&&!xu.hasOwnProperty(d)&&(a[d]=n[d]===void 0&&l!==void 0?l[d]:n[d])}var d=arguments.length-2;if(d===1)a.children=t;else if(1<d){l=Array(d);for(var u=0;u<d;u++)l[u]=arguments[u+2];a.children=l}return{$$typeof:wr,type:e.type,key:r,ref:s,props:a,_owner:i}};ne.createContext=function(e){return e={$$typeof:om,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:rm,_context:e},e.Consumer=e};ne.createElement=vu;ne.createFactory=function(e){var n=vu.bind(null,e);return n.type=e,n};ne.createRef=function(){return{current:null}};ne.forwardRef=function(e){return{$$typeof:sm,render:e}};ne.isValidElement=ml;ne.lazy=function(e){return{$$typeof:cm,_payload:{_status:-1,_result:e},_init:fm}};ne.memo=function(e,n){return{$$typeof:lm,type:e,compare:n===void 0?null:n}};ne.startTransition=function(e){var n=so.transition;so.transition={};try{e()}finally{so.transition=n}};ne.unstable_act=bu;ne.useCallback=function(e,n){return Fe.current.useCallback(e,n)};ne.useContext=function(e){return Fe.current.useContext(e)};ne.useDebugValue=function(){};ne.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};ne.useEffect=function(e,n){return Fe.current.useEffect(e,n)};ne.useId=function(){return Fe.current.useId()};ne.useImperativeHandle=function(e,n,t){return Fe.current.useImperativeHandle(e,n,t)};ne.useInsertionEffect=function(e,n){return Fe.current.useInsertionEffect(e,n)};ne.useLayoutEffect=function(e,n){return Fe.current.useLayoutEffect(e,n)};ne.useMemo=function(e,n){return Fe.current.useMemo(e,n)};ne.useReducer=function(e,n,t){return Fe.current.useReducer(e,n,t)};ne.useRef=function(e){return Fe.current.useRef(e)};ne.useState=function(e){return Fe.current.useState(e)};ne.useSyncExternalStore=function(e,n,t){return Fe.current.useSyncExternalStore(e,n,t)};ne.useTransition=function(){return Fe.current.useTransition()};ne.version="18.3.1";uu.exports=ne;var k=uu.exports;const gm=qf(k);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm=k,xm=Symbol.for("react.element"),vm=Symbol.for("react.fragment"),bm=Object.prototype.hasOwnProperty,ym=hm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_m={key:!0,ref:!0,__self:!0,__source:!0};function yu(e,n,t){var a,r={},s=null,i=null;t!==void 0&&(s=""+t),n.key!==void 0&&(s=""+n.key),n.ref!==void 0&&(i=n.ref);for(a in n)bm.call(n,a)&&!_m.hasOwnProperty(a)&&(r[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps,n)r[a]===void 0&&(r[a]=n[a]);return{$$typeof:xm,type:e,key:s,ref:i,props:r,_owner:ym.current}}as.Fragment=vm;as.jsx=yu;as.jsxs=yu;du.exports=as;var o=du.exports,ii={},_u={exports:{}},on={},Iu={exports:{}},ku={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(R,V){var U=R.length;R.push(V);e:for(;0<U;){var O=U-1>>>1,L=R[O];if(0<r(L,V))R[O]=V,R[U]=L,U=O;else break e}}function t(R){return R.length===0?null:R[0]}function a(R){if(R.length===0)return null;var V=R[0],U=R.pop();if(U!==V){R[0]=U;e:for(var O=0,L=R.length,Y=L>>>1;O<Y;){var X=2*(O+1)-1,oe=R[X],le=X+1,de=R[le];if(0>r(oe,U))le<L&&0>r(de,oe)?(R[O]=de,R[le]=U,O=le):(R[O]=oe,R[X]=U,O=X);else if(le<L&&0>r(de,U))R[O]=de,R[le]=U,O=le;else break e}}return V}function r(R,V){var U=R.sortIndex-V.sortIndex;return U!==0?U:R.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var d=[],u=[],p=1,f=null,g=3,x=!1,m=!1,h=!1,_=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(R){for(var V=t(u);V!==null;){if(V.callback===null)a(u);else if(V.startTime<=R)a(u),V.sortIndex=V.expirationTime,n(d,V);else break;V=t(u)}}function w(R){if(h=!1,y(R),!m)if(t(d)!==null)m=!0,D(T);else{var V=t(u);V!==null&&J(w,V.startTime-R)}}function T(R,V){m=!1,h&&(h=!1,b(C),C=-1),x=!0;var U=g;try{for(y(V),f=t(d);f!==null&&(!(f.expirationTime>V)||R&&!z());){var O=f.callback;if(typeof O=="function"){f.callback=null,g=f.priorityLevel;var L=O(f.expirationTime<=V);V=e.unstable_now(),typeof L=="function"?f.callback=L:f===t(d)&&a(d),y(V)}else a(d);f=t(d)}if(f!==null)var Y=!0;else{var X=t(u);X!==null&&J(w,X.startTime-V),Y=!1}return Y}finally{f=null,g=U,x=!1}}var $=!1,j=null,C=-1,A=5,S=-1;function z(){return!(e.unstable_now()-S<A)}function M(){if(j!==null){var R=e.unstable_now();S=R;var V=!0;try{V=j(!0,R)}finally{V?E():($=!1,j=null)}}else $=!1}var E;if(typeof v=="function")E=function(){v(M)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,H=K.port2;K.port1.onmessage=M,E=function(){H.postMessage(null)}}else E=function(){_(M,0)};function D(R){j=R,$||($=!0,E())}function J(R,V){C=_(function(){R(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){m||x||(m=!0,D(T))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(d)},e.unstable_next=function(R){switch(g){case 1:case 2:case 3:var V=3;break;default:V=g}var U=g;g=V;try{return R()}finally{g=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,V){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var U=g;g=R;try{return V()}finally{g=U}},e.unstable_scheduleCallback=function(R,V,U){var O=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?O+U:O):U=O,R){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=U+L,R={id:p++,callback:V,priorityLevel:R,startTime:U,expirationTime:L,sortIndex:-1},U>O?(R.sortIndex=U,n(u,R),t(d)===null&&R===t(u)&&(h?(b(C),C=-1):h=!0,J(w,U-O))):(R.sortIndex=L,n(d,R),m||x||(m=!0,D(T))),R},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(R){var V=g;return function(){var U=g;g=V;try{return R.apply(this,arguments)}finally{g=U}}}})(ku);Iu.exports=ku;var Im=Iu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km=k,rn=Im;function G(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ju=new Set,er={};function zt(e,n){pa(e,n),pa(e+"Capture",n)}function pa(e,n){for(er[e]=n,e=0;e<n.length;e++)ju.add(n[e])}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),li=Object.prototype.hasOwnProperty,jm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_c={},Ic={};function wm(e){return li.call(Ic,e)?!0:li.call(_c,e)?!1:jm.test(e)?Ic[e]=!0:(_c[e]=!0,!1)}function Sm(e,n,t,a){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cm(e,n,t,a){if(n===null||typeof n>"u"||Sm(e,n,t,a))return!0;if(a)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ge(e,n,t,a,r,s,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=s,this.removeEmptyString=i}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ve[e]=new Ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Ve[n]=new Ge(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ve[e]=new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ve[e]=new Ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ve[e]=new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ve[e]=new Ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ve[e]=new Ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ve[e]=new Ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ve[e]=new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var gl=/[\-:]([a-z])/g;function hl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(gl,hl);Ve[n]=new Ge(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(gl,hl);Ve[n]=new Ge(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(gl,hl);Ve[n]=new Ge(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ve[e]=new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ve[e]=new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function xl(e,n,t,a){var r=Ve.hasOwnProperty(n)?Ve[n]:null;(r!==null?r.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Cm(n,t,r,a)&&(t=null),a||r===null?wm(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,a=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,a?e.setAttributeNS(a,n,t):e.setAttribute(n,t))))}var Un=km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vr=Symbol.for("react.element"),Ft=Symbol.for("react.portal"),Gt=Symbol.for("react.fragment"),vl=Symbol.for("react.strict_mode"),ci=Symbol.for("react.profiler"),wu=Symbol.for("react.provider"),Su=Symbol.for("react.context"),bl=Symbol.for("react.forward_ref"),di=Symbol.for("react.suspense"),ui=Symbol.for("react.suspense_list"),yl=Symbol.for("react.memo"),Yn=Symbol.for("react.lazy"),Cu=Symbol.for("react.offscreen"),kc=Symbol.iterator;function Ma(e){return e===null||typeof e!="object"?null:(e=kc&&e[kc]||e["@@iterator"],typeof e=="function"?e:null)}var be=Object.assign,Ns;function La(e){if(Ns===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ns=n&&n[1]||""}return`
`+Ns+e}var Ms=!1;function Ts(e,n){if(!e||Ms)return"";Ms=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var a=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){a=u}e.call(n.prototype)}else{try{throw Error()}catch(u){a=u}e()}}catch(u){if(u&&a&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=a.stack.split(`
`),i=r.length-1,l=s.length-1;1<=i&&0<=l&&r[i]!==s[l];)l--;for(;1<=i&&0<=l;i--,l--)if(r[i]!==s[l]){if(i!==1||l!==1)do if(i--,l--,0>l||r[i]!==s[l]){var d=`
`+r[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=l);break}}}finally{Ms=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?La(e):""}function Nm(e){switch(e.tag){case 5:return La(e.type);case 16:return La("Lazy");case 13:return La("Suspense");case 19:return La("SuspenseList");case 0:case 2:case 15:return e=Ts(e.type,!1),e;case 11:return e=Ts(e.type.render,!1),e;case 1:return e=Ts(e.type,!0),e;default:return""}}function pi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gt:return"Fragment";case Ft:return"Portal";case ci:return"Profiler";case vl:return"StrictMode";case di:return"Suspense";case ui:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Su:return(e.displayName||"Context")+".Consumer";case wu:return(e._context.displayName||"Context")+".Provider";case bl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yl:return n=e.displayName||null,n!==null?n:pi(e.type)||"Memo";case Yn:n=e._payload,e=e._init;try{return pi(e(n))}catch{}}return null}function Mm(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pi(n);case 8:return n===vl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ut(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Tm(e){var n=Nu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(i){a=""+i,s.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Pr(e){e._valueTracker||(e._valueTracker=Tm(e))}function Mu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Nu(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function yo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fi(e,n){var t=n.checked;return be({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function jc(e,n){var t=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;t=ut(n.value!=null?n.value:t),e._wrapperState={initialChecked:a,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Tu(e,n){n=n.checked,n!=null&&xl(e,"checked",n,!1)}function mi(e,n){Tu(e,n);var t=ut(n.value),a=n.type;if(t!=null)a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?gi(e,n.type,t):n.hasOwnProperty("defaultValue")&&gi(e,n.type,ut(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function wc(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function gi(e,n,t){(n!=="number"||yo(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Oa=Array.isArray;function ra(e,n,t,a){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&a&&(e[t].defaultSelected=!0)}else{for(t=""+ut(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function hi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(G(91));return be({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Sc(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(G(92));if(Oa(t)){if(1<t.length)throw Error(G(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ut(t)}}function Eu(e,n){var t=ut(n.value),a=ut(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),a!=null&&(e.defaultValue=""+a)}function Cc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Du(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xi(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Du(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Rr,zu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,a,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,a,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Rr=Rr||document.createElement("div"),Rr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Rr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function nr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ba={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Em=["Webkit","ms","Moz","O"];Object.keys(Ba).forEach(function(e){Em.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ba[n]=Ba[e]})});function $u(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ba.hasOwnProperty(e)&&Ba[e]?(""+n).trim():n+"px"}function Au(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var a=t.indexOf("--")===0,r=$u(t,n[t],a);t==="float"&&(t="cssFloat"),a?e.setProperty(t,r):e[t]=r}}var Dm=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vi(e,n){if(n){if(Dm[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(G(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(G(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(G(61))}if(n.style!=null&&typeof n.style!="object")throw Error(G(62))}}function bi(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yi=null;function _l(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _i=null,oa=null,sa=null;function Nc(e){if(e=Nr(e)){if(typeof _i!="function")throw Error(G(280));var n=e.stateNode;n&&(n=ls(n),_i(e.stateNode,e.type,n))}}function Vu(e){oa?sa?sa.push(e):sa=[e]:oa=e}function Pu(){if(oa){var e=oa,n=sa;if(sa=oa=null,Nc(e),n)for(e=0;e<n.length;e++)Nc(n[e])}}function Ru(e,n){return e(n)}function Lu(){}var Es=!1;function Ou(e,n,t){if(Es)return e(n,t);Es=!0;try{return Ru(e,n,t)}finally{Es=!1,(oa!==null||sa!==null)&&(Lu(),Pu())}}function tr(e,n){var t=e.stateNode;if(t===null)return null;var a=ls(t);if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(G(231,n,typeof t));return t}var Ii=!1;if(Bn)try{var Ta={};Object.defineProperty(Ta,"passive",{get:function(){Ii=!0}}),window.addEventListener("test",Ta,Ta),window.removeEventListener("test",Ta,Ta)}catch{Ii=!1}function zm(e,n,t,a,r,s,i,l,d){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(p){this.onError(p)}}var Fa=!1,_o=null,Io=!1,ki=null,$m={onError:function(e){Fa=!0,_o=e}};function Am(e,n,t,a,r,s,i,l,d){Fa=!1,_o=null,zm.apply($m,arguments)}function Vm(e,n,t,a,r,s,i,l,d){if(Am.apply(this,arguments),Fa){if(Fa){var u=_o;Fa=!1,_o=null}else throw Error(G(198));Io||(Io=!0,ki=u)}}function $t(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ku(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Mc(e){if($t(e)!==e)throw Error(G(188))}function Pm(e){var n=e.alternate;if(!n){if(n=$t(e),n===null)throw Error(G(188));return n!==e?null:e}for(var t=e,a=n;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(a=r.return,a!==null){t=a;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Mc(r),e;if(s===a)return Mc(r),n;s=s.sibling}throw Error(G(188))}if(t.return!==a.return)t=r,a=s;else{for(var i=!1,l=r.child;l;){if(l===t){i=!0,t=r,a=s;break}if(l===a){i=!0,a=r,t=s;break}l=l.sibling}if(!i){for(l=s.child;l;){if(l===t){i=!0,t=s,a=r;break}if(l===a){i=!0,a=s,t=r;break}l=l.sibling}if(!i)throw Error(G(189))}}if(t.alternate!==a)throw Error(G(190))}if(t.tag!==3)throw Error(G(188));return t.stateNode.current===t?e:n}function Ju(e){return e=Pm(e),e!==null?Bu(e):null}function Bu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Bu(e);if(n!==null)return n;e=e.sibling}return null}var Fu=rn.unstable_scheduleCallback,Tc=rn.unstable_cancelCallback,Rm=rn.unstable_shouldYield,Lm=rn.unstable_requestPaint,ke=rn.unstable_now,Om=rn.unstable_getCurrentPriorityLevel,Il=rn.unstable_ImmediatePriority,Gu=rn.unstable_UserBlockingPriority,ko=rn.unstable_NormalPriority,Km=rn.unstable_LowPriority,Hu=rn.unstable_IdlePriority,rs=null,Tn=null;function Jm(e){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(rs,e,void 0,(e.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:Gm,Bm=Math.log,Fm=Math.LN2;function Gm(e){return e>>>=0,e===0?32:31-(Bm(e)/Fm|0)|0}var Lr=64,Or=4194304;function Ka(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function jo(e,n){var t=e.pendingLanes;if(t===0)return 0;var a=0,r=e.suspendedLanes,s=e.pingedLanes,i=t&268435455;if(i!==0){var l=i&~r;l!==0?a=Ka(l):(s&=i,s!==0&&(a=Ka(s)))}else i=t&~r,i!==0?a=Ka(i):s!==0&&(a=Ka(s));if(a===0)return 0;if(n!==0&&n!==a&&!(n&r)&&(r=a&-a,s=n&-n,r>=s||r===16&&(s&4194240)!==0))return n;if(a&4&&(a|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)t=31-In(n),r=1<<t,a|=e[t],n&=~r;return a}function Hm(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Um(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-In(s),l=1<<i,d=r[i];d===-1?(!(l&t)||l&a)&&(r[i]=Hm(l,n)):d<=n&&(e.expiredLanes|=l),s&=~l}}function ji(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uu(){var e=Lr;return Lr<<=1,!(Lr&4194240)&&(Lr=64),e}function Ds(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Sr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-In(n),e[n]=t}function Wm(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-In(t),s=1<<r;n[r]=0,a[r]=-1,e[r]=-1,t&=~s}}function kl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-In(t),r=1<<a;r&n|e[a]&n&&(e[a]|=n),t&=~r}}var ce=0;function Wu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zu,jl,Yu,Xu,Qu,wi=!1,Kr=[],at=null,rt=null,ot=null,ar=new Map,rr=new Map,Qn=[],Zm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ec(e,n){switch(e){case"focusin":case"focusout":at=null;break;case"dragenter":case"dragleave":rt=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":ar.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":rr.delete(n.pointerId)}}function Ea(e,n,t,a,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:s,targetContainers:[r]},n!==null&&(n=Nr(n),n!==null&&jl(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Ym(e,n,t,a,r){switch(n){case"focusin":return at=Ea(at,e,n,t,a,r),!0;case"dragenter":return rt=Ea(rt,e,n,t,a,r),!0;case"mouseover":return ot=Ea(ot,e,n,t,a,r),!0;case"pointerover":var s=r.pointerId;return ar.set(s,Ea(ar.get(s)||null,e,n,t,a,r)),!0;case"gotpointercapture":return s=r.pointerId,rr.set(s,Ea(rr.get(s)||null,e,n,t,a,r)),!0}return!1}function qu(e){var n=bt(e.target);if(n!==null){var t=$t(n);if(t!==null){if(n=t.tag,n===13){if(n=Ku(t),n!==null){e.blockedOn=n,Qu(e.priority,function(){Yu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function io(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Si(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);yi=a,t.target.dispatchEvent(a),yi=null}else return n=Nr(t),n!==null&&jl(n),e.blockedOn=t,!1;n.shift()}return!0}function Dc(e,n,t){io(e)&&t.delete(n)}function Xm(){wi=!1,at!==null&&io(at)&&(at=null),rt!==null&&io(rt)&&(rt=null),ot!==null&&io(ot)&&(ot=null),ar.forEach(Dc),rr.forEach(Dc)}function Da(e,n){e.blockedOn===n&&(e.blockedOn=null,wi||(wi=!0,rn.unstable_scheduleCallback(rn.unstable_NormalPriority,Xm)))}function or(e){function n(r){return Da(r,e)}if(0<Kr.length){Da(Kr[0],e);for(var t=1;t<Kr.length;t++){var a=Kr[t];a.blockedOn===e&&(a.blockedOn=null)}}for(at!==null&&Da(at,e),rt!==null&&Da(rt,e),ot!==null&&Da(ot,e),ar.forEach(n),rr.forEach(n),t=0;t<Qn.length;t++)a=Qn[t],a.blockedOn===e&&(a.blockedOn=null);for(;0<Qn.length&&(t=Qn[0],t.blockedOn===null);)qu(t),t.blockedOn===null&&Qn.shift()}var ia=Un.ReactCurrentBatchConfig,wo=!0;function Qm(e,n,t,a){var r=ce,s=ia.transition;ia.transition=null;try{ce=1,wl(e,n,t,a)}finally{ce=r,ia.transition=s}}function qm(e,n,t,a){var r=ce,s=ia.transition;ia.transition=null;try{ce=4,wl(e,n,t,a)}finally{ce=r,ia.transition=s}}function wl(e,n,t,a){if(wo){var r=Si(e,n,t,a);if(r===null)Js(e,n,a,So,t),Ec(e,a);else if(Ym(r,e,n,t,a))a.stopPropagation();else if(Ec(e,a),n&4&&-1<Zm.indexOf(e)){for(;r!==null;){var s=Nr(r);if(s!==null&&Zu(s),s=Si(e,n,t,a),s===null&&Js(e,n,a,So,t),s===r)break;r=s}r!==null&&a.stopPropagation()}else Js(e,n,a,null,t)}}var So=null;function Si(e,n,t,a){if(So=null,e=_l(a),e=bt(e),e!==null)if(n=$t(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ku(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return So=e,null}function ep(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Om()){case Il:return 1;case Gu:return 4;case ko:case Km:return 16;case Hu:return 536870912;default:return 16}default:return 16}}var nt=null,Sl=null,lo=null;function np(){if(lo)return lo;var e,n=Sl,t=n.length,a,r="value"in nt?nt.value:nt.textContent,s=r.length;for(e=0;e<t&&n[e]===r[e];e++);var i=t-e;for(a=1;a<=i&&n[t-a]===r[s-a];a++);return lo=r.slice(e,1<a?1-a:void 0)}function co(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Jr(){return!0}function zc(){return!1}function sn(e){function n(t,a,r,s,i){this._reactName=t,this._targetInst=r,this.type=a,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Jr:zc,this.isPropagationStopped=zc,this}return be(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Jr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Jr)},persist:function(){},isPersistent:Jr}),n}var ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cl=sn(ja),Cr=be({},ja,{view:0,detail:0}),eg=sn(Cr),zs,$s,za,os=be({},Cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==za&&(za&&e.type==="mousemove"?(zs=e.screenX-za.screenX,$s=e.screenY-za.screenY):$s=zs=0,za=e),zs)},movementY:function(e){return"movementY"in e?e.movementY:$s}}),$c=sn(os),ng=be({},os,{dataTransfer:0}),tg=sn(ng),ag=be({},Cr,{relatedTarget:0}),As=sn(ag),rg=be({},ja,{animationName:0,elapsedTime:0,pseudoElement:0}),og=sn(rg),sg=be({},ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ig=sn(sg),lg=be({},ja,{data:0}),Ac=sn(lg),cg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ug={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ug[e])?!!n[e]:!1}function Nl(){return pg}var fg=be({},Cr,{key:function(e){if(e.key){var n=cg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=co(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nl,charCode:function(e){return e.type==="keypress"?co(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?co(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mg=sn(fg),gg=be({},os,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vc=sn(gg),hg=be({},Cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nl}),xg=sn(hg),vg=be({},ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),bg=sn(vg),yg=be({},os,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_g=sn(yg),Ig=[9,13,27,32],Ml=Bn&&"CompositionEvent"in window,Ga=null;Bn&&"documentMode"in document&&(Ga=document.documentMode);var kg=Bn&&"TextEvent"in window&&!Ga,tp=Bn&&(!Ml||Ga&&8<Ga&&11>=Ga),Pc=" ",Rc=!1;function ap(e,n){switch(e){case"keyup":return Ig.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ht=!1;function jg(e,n){switch(e){case"compositionend":return rp(n);case"keypress":return n.which!==32?null:(Rc=!0,Pc);case"textInput":return e=n.data,e===Pc&&Rc?null:e;default:return null}}function wg(e,n){if(Ht)return e==="compositionend"||!Ml&&ap(e,n)?(e=np(),lo=Sl=nt=null,Ht=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return tp&&n.locale!=="ko"?null:n.data;default:return null}}var Sg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Sg[e.type]:n==="textarea"}function op(e,n,t,a){Vu(a),n=Co(n,"onChange"),0<n.length&&(t=new Cl("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var Ha=null,sr=null;function Cg(e){hp(e,0)}function ss(e){var n=Zt(e);if(Mu(n))return e}function Ng(e,n){if(e==="change")return n}var sp=!1;if(Bn){var Vs;if(Bn){var Ps="oninput"in document;if(!Ps){var Oc=document.createElement("div");Oc.setAttribute("oninput","return;"),Ps=typeof Oc.oninput=="function"}Vs=Ps}else Vs=!1;sp=Vs&&(!document.documentMode||9<document.documentMode)}function Kc(){Ha&&(Ha.detachEvent("onpropertychange",ip),sr=Ha=null)}function ip(e){if(e.propertyName==="value"&&ss(sr)){var n=[];op(n,sr,e,_l(e)),Ou(Cg,n)}}function Mg(e,n,t){e==="focusin"?(Kc(),Ha=n,sr=t,Ha.attachEvent("onpropertychange",ip)):e==="focusout"&&Kc()}function Tg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ss(sr)}function Eg(e,n){if(e==="click")return ss(n)}function Dg(e,n){if(e==="input"||e==="change")return ss(n)}function zg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var wn=typeof Object.is=="function"?Object.is:zg;function ir(e,n){if(wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var r=t[a];if(!li.call(n,r)||!wn(e[r],n[r]))return!1}return!0}function Jc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bc(e,n){var t=Jc(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Jc(t)}}function lp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?lp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function cp(){for(var e=window,n=yo();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=yo(e.document)}return n}function Tl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function $g(e){var n=cp(),t=e.focusedElem,a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&lp(t.ownerDocument.documentElement,t)){if(a!==null&&Tl(t)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,s=Math.min(a.start,r);a=a.end===void 0?s:Math.min(a.end,r),!e.extend&&s>a&&(r=a,a=s,s=r),r=Bc(t,s);var i=Bc(t,a);r&&i&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),s>a?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ag=Bn&&"documentMode"in document&&11>=document.documentMode,Ut=null,Ci=null,Ua=null,Ni=!1;function Fc(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ni||Ut==null||Ut!==yo(a)||(a=Ut,"selectionStart"in a&&Tl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ua&&ir(Ua,a)||(Ua=a,a=Co(Ci,"onSelect"),0<a.length&&(n=new Cl("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Ut)))}function Br(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Wt={animationend:Br("Animation","AnimationEnd"),animationiteration:Br("Animation","AnimationIteration"),animationstart:Br("Animation","AnimationStart"),transitionend:Br("Transition","TransitionEnd")},Rs={},dp={};Bn&&(dp=document.createElement("div").style,"AnimationEvent"in window||(delete Wt.animationend.animation,delete Wt.animationiteration.animation,delete Wt.animationstart.animation),"TransitionEvent"in window||delete Wt.transitionend.transition);function is(e){if(Rs[e])return Rs[e];if(!Wt[e])return e;var n=Wt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in dp)return Rs[e]=n[t];return e}var up=is("animationend"),pp=is("animationiteration"),fp=is("animationstart"),mp=is("transitionend"),gp=new Map,Gc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ft(e,n){gp.set(e,n),zt(n,[e])}for(var Ls=0;Ls<Gc.length;Ls++){var Os=Gc[Ls],Vg=Os.toLowerCase(),Pg=Os[0].toUpperCase()+Os.slice(1);ft(Vg,"on"+Pg)}ft(up,"onAnimationEnd");ft(pp,"onAnimationIteration");ft(fp,"onAnimationStart");ft("dblclick","onDoubleClick");ft("focusin","onFocus");ft("focusout","onBlur");ft(mp,"onTransitionEnd");pa("onMouseEnter",["mouseout","mouseover"]);pa("onMouseLeave",["mouseout","mouseover"]);pa("onPointerEnter",["pointerout","pointerover"]);pa("onPointerLeave",["pointerout","pointerover"]);zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zt("onBeforeInput",["compositionend","keypress","textInput","paste"]);zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ja));function Hc(e,n,t){var a=e.type||"unknown-event";e.currentTarget=t,Vm(a,n,void 0,e),e.currentTarget=null}function hp(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],r=a.event;a=a.listeners;e:{var s=void 0;if(n)for(var i=a.length-1;0<=i;i--){var l=a[i],d=l.instance,u=l.currentTarget;if(l=l.listener,d!==s&&r.isPropagationStopped())break e;Hc(r,l,u),s=d}else for(i=0;i<a.length;i++){if(l=a[i],d=l.instance,u=l.currentTarget,l=l.listener,d!==s&&r.isPropagationStopped())break e;Hc(r,l,u),s=d}}}if(Io)throw e=ki,Io=!1,ki=null,e}function fe(e,n){var t=n[zi];t===void 0&&(t=n[zi]=new Set);var a=e+"__bubble";t.has(a)||(xp(n,e,2,!1),t.add(a))}function Ks(e,n,t){var a=0;n&&(a|=4),xp(t,e,a,n)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function lr(e){if(!e[Fr]){e[Fr]=!0,ju.forEach(function(t){t!=="selectionchange"&&(Rg.has(t)||Ks(t,!1,e),Ks(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Fr]||(n[Fr]=!0,Ks("selectionchange",!1,n))}}function xp(e,n,t,a){switch(ep(n)){case 1:var r=Qm;break;case 4:r=qm;break;default:r=wl}t=r.bind(null,n,t,e),r=void 0,!Ii||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function Js(e,n,t,a,r){var s=a;if(!(n&1)&&!(n&2)&&a!==null)e:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var l=a.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(i===4)for(i=a.return;i!==null;){var d=i.tag;if((d===3||d===4)&&(d=i.stateNode.containerInfo,d===r||d.nodeType===8&&d.parentNode===r))return;i=i.return}for(;l!==null;){if(i=bt(l),i===null)return;if(d=i.tag,d===5||d===6){a=s=i;continue e}l=l.parentNode}}a=a.return}Ou(function(){var u=s,p=_l(t),f=[];e:{var g=gp.get(e);if(g!==void 0){var x=Cl,m=e;switch(e){case"keypress":if(co(t)===0)break e;case"keydown":case"keyup":x=mg;break;case"focusin":m="focus",x=As;break;case"focusout":m="blur",x=As;break;case"beforeblur":case"afterblur":x=As;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=$c;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=tg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=xg;break;case up:case pp:case fp:x=og;break;case mp:x=bg;break;case"scroll":x=eg;break;case"wheel":x=_g;break;case"copy":case"cut":case"paste":x=ig;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Vc}var h=(n&4)!==0,_=!h&&e==="scroll",b=h?g!==null?g+"Capture":null:g;h=[];for(var v=u,y;v!==null;){y=v;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,b!==null&&(w=tr(v,b),w!=null&&h.push(cr(v,w,y)))),_)break;v=v.return}0<h.length&&(g=new x(g,m,null,t,p),f.push({event:g,listeners:h}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&t!==yi&&(m=t.relatedTarget||t.fromElement)&&(bt(m)||m[Fn]))break e;if((x||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,x?(m=t.relatedTarget||t.toElement,x=u,m=m?bt(m):null,m!==null&&(_=$t(m),m!==_||m.tag!==5&&m.tag!==6)&&(m=null)):(x=null,m=u),x!==m)){if(h=$c,w="onMouseLeave",b="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(h=Vc,w="onPointerLeave",b="onPointerEnter",v="pointer"),_=x==null?g:Zt(x),y=m==null?g:Zt(m),g=new h(w,v+"leave",x,t,p),g.target=_,g.relatedTarget=y,w=null,bt(p)===u&&(h=new h(b,v+"enter",m,t,p),h.target=y,h.relatedTarget=_,w=h),_=w,x&&m)n:{for(h=x,b=m,v=0,y=h;y;y=Lt(y))v++;for(y=0,w=b;w;w=Lt(w))y++;for(;0<v-y;)h=Lt(h),v--;for(;0<y-v;)b=Lt(b),y--;for(;v--;){if(h===b||b!==null&&h===b.alternate)break n;h=Lt(h),b=Lt(b)}h=null}else h=null;x!==null&&Uc(f,g,x,h,!1),m!==null&&_!==null&&Uc(f,_,m,h,!0)}}e:{if(g=u?Zt(u):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var T=Ng;else if(Lc(g))if(sp)T=Dg;else{T=Tg;var $=Mg}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(T=Eg);if(T&&(T=T(e,u))){op(f,T,t,p);break e}$&&$(e,g,u),e==="focusout"&&($=g._wrapperState)&&$.controlled&&g.type==="number"&&gi(g,"number",g.value)}switch($=u?Zt(u):window,e){case"focusin":(Lc($)||$.contentEditable==="true")&&(Ut=$,Ci=u,Ua=null);break;case"focusout":Ua=Ci=Ut=null;break;case"mousedown":Ni=!0;break;case"contextmenu":case"mouseup":case"dragend":Ni=!1,Fc(f,t,p);break;case"selectionchange":if(Ag)break;case"keydown":case"keyup":Fc(f,t,p)}var j;if(Ml)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Ht?ap(e,t)&&(C="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(tp&&t.locale!=="ko"&&(Ht||C!=="onCompositionStart"?C==="onCompositionEnd"&&Ht&&(j=np()):(nt=p,Sl="value"in nt?nt.value:nt.textContent,Ht=!0)),$=Co(u,C),0<$.length&&(C=new Ac(C,e,null,t,p),f.push({event:C,listeners:$}),j?C.data=j:(j=rp(t),j!==null&&(C.data=j)))),(j=kg?jg(e,t):wg(e,t))&&(u=Co(u,"onBeforeInput"),0<u.length&&(p=new Ac("onBeforeInput","beforeinput",null,t,p),f.push({event:p,listeners:u}),p.data=j))}hp(f,n)})}function cr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Co(e,n){for(var t=n+"Capture",a=[];e!==null;){var r=e,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=tr(e,t),s!=null&&a.unshift(cr(e,s,r)),s=tr(e,n),s!=null&&a.push(cr(e,s,r))),e=e.return}return a}function Lt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Uc(e,n,t,a,r){for(var s=n._reactName,i=[];t!==null&&t!==a;){var l=t,d=l.alternate,u=l.stateNode;if(d!==null&&d===a)break;l.tag===5&&u!==null&&(l=u,r?(d=tr(t,s),d!=null&&i.unshift(cr(t,d,l))):r||(d=tr(t,s),d!=null&&i.push(cr(t,d,l)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var Lg=/\r\n?/g,Og=/\u0000|\uFFFD/g;function Wc(e){return(typeof e=="string"?e:""+e).replace(Lg,`
`).replace(Og,"")}function Gr(e,n,t){if(n=Wc(n),Wc(e)!==n&&t)throw Error(G(425))}function No(){}var Mi=null,Ti=null;function Ei(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Di=typeof setTimeout=="function"?setTimeout:void 0,Kg=typeof clearTimeout=="function"?clearTimeout:void 0,Zc=typeof Promise=="function"?Promise:void 0,Jg=typeof queueMicrotask=="function"?queueMicrotask:typeof Zc<"u"?function(e){return Zc.resolve(null).then(e).catch(Bg)}:Di;function Bg(e){setTimeout(function(){throw e})}function Bs(e,n){var t=n,a=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(a===0){e.removeChild(r),or(n);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=r}while(t);or(n)}function st(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Yc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var wa=Math.random().toString(36).slice(2),Nn="__reactFiber$"+wa,dr="__reactProps$"+wa,Fn="__reactContainer$"+wa,zi="__reactEvents$"+wa,Fg="__reactListeners$"+wa,Gg="__reactHandles$"+wa;function bt(e){var n=e[Nn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Fn]||t[Nn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Yc(e);e!==null;){if(t=e[Nn])return t;e=Yc(e)}return n}e=t,t=e.parentNode}return null}function Nr(e){return e=e[Nn]||e[Fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(G(33))}function ls(e){return e[dr]||null}var $i=[],Yt=-1;function mt(e){return{current:e}}function me(e){0>Yt||(e.current=$i[Yt],$i[Yt]=null,Yt--)}function pe(e,n){Yt++,$i[Yt]=e.current,e.current=n}var pt={},Ke=mt(pt),Ye=mt(!1),jt=pt;function fa(e,n){var t=e.type.contextTypes;if(!t)return pt;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=n[s];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function Xe(e){return e=e.childContextTypes,e!=null}function Mo(){me(Ye),me(Ke)}function Xc(e,n,t){if(Ke.current!==pt)throw Error(G(168));pe(Ke,n),pe(Ye,t)}function vp(e,n,t){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return t;a=a.getChildContext();for(var r in a)if(!(r in n))throw Error(G(108,Mm(e)||"Unknown",r));return be({},t,a)}function To(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pt,jt=Ke.current,pe(Ke,e),pe(Ye,Ye.current),!0}function Qc(e,n,t){var a=e.stateNode;if(!a)throw Error(G(169));t?(e=vp(e,n,jt),a.__reactInternalMemoizedMergedChildContext=e,me(Ye),me(Ke),pe(Ke,e)):me(Ye),pe(Ye,t)}var Pn=null,cs=!1,Fs=!1;function bp(e){Pn===null?Pn=[e]:Pn.push(e)}function Hg(e){cs=!0,bp(e)}function gt(){if(!Fs&&Pn!==null){Fs=!0;var e=0,n=ce;try{var t=Pn;for(ce=1;e<t.length;e++){var a=t[e];do a=a(!0);while(a!==null)}Pn=null,cs=!1}catch(r){throw Pn!==null&&(Pn=Pn.slice(e+1)),Fu(Il,gt),r}finally{ce=n,Fs=!1}}return null}var Xt=[],Qt=0,Eo=null,Do=0,cn=[],dn=0,wt=null,On=1,Kn="";function xt(e,n){Xt[Qt++]=Do,Xt[Qt++]=Eo,Eo=e,Do=n}function yp(e,n,t){cn[dn++]=On,cn[dn++]=Kn,cn[dn++]=wt,wt=e;var a=On;e=Kn;var r=32-In(a)-1;a&=~(1<<r),t+=1;var s=32-In(n)+r;if(30<s){var i=r-r%5;s=(a&(1<<i)-1).toString(32),a>>=i,r-=i,On=1<<32-In(n)+r|t<<r|a,Kn=s+e}else On=1<<s|t<<r|a,Kn=e}function El(e){e.return!==null&&(xt(e,1),yp(e,1,0))}function Dl(e){for(;e===Eo;)Eo=Xt[--Qt],Xt[Qt]=null,Do=Xt[--Qt],Xt[Qt]=null;for(;e===wt;)wt=cn[--dn],cn[dn]=null,Kn=cn[--dn],cn[dn]=null,On=cn[--dn],cn[dn]=null}var an=null,tn=null,he=!1,_n=null;function _p(e,n){var t=un(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function qc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,an=e,tn=st(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,an=e,tn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=wt!==null?{id:On,overflow:Kn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=un(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,an=e,tn=null,!0):!1;default:return!1}}function Ai(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vi(e){if(he){var n=tn;if(n){var t=n;if(!qc(e,n)){if(Ai(e))throw Error(G(418));n=st(t.nextSibling);var a=an;n&&qc(e,n)?_p(a,t):(e.flags=e.flags&-4097|2,he=!1,an=e)}}else{if(Ai(e))throw Error(G(418));e.flags=e.flags&-4097|2,he=!1,an=e}}}function ed(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;an=e}function Hr(e){if(e!==an)return!1;if(!he)return ed(e),he=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ei(e.type,e.memoizedProps)),n&&(n=tn)){if(Ai(e))throw Ip(),Error(G(418));for(;n;)_p(e,n),n=st(n.nextSibling)}if(ed(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){tn=st(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}tn=null}}else tn=an?st(e.stateNode.nextSibling):null;return!0}function Ip(){for(var e=tn;e;)e=st(e.nextSibling)}function ma(){tn=an=null,he=!1}function zl(e){_n===null?_n=[e]:_n.push(e)}var Ug=Un.ReactCurrentBatchConfig;function $a(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(G(309));var a=t.stateNode}if(!a)throw Error(G(147,e));var r=a,s=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===s?n.ref:(n=function(i){var l=r.refs;i===null?delete l[s]:l[s]=i},n._stringRef=s,n)}if(typeof e!="string")throw Error(G(284));if(!t._owner)throw Error(G(290,e))}return e}function Ur(e,n){throw e=Object.prototype.toString.call(n),Error(G(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function nd(e){var n=e._init;return n(e._payload)}function kp(e){function n(b,v){if(e){var y=b.deletions;y===null?(b.deletions=[v],b.flags|=16):y.push(v)}}function t(b,v){if(!e)return null;for(;v!==null;)n(b,v),v=v.sibling;return null}function a(b,v){for(b=new Map;v!==null;)v.key!==null?b.set(v.key,v):b.set(v.index,v),v=v.sibling;return b}function r(b,v){return b=dt(b,v),b.index=0,b.sibling=null,b}function s(b,v,y){return b.index=y,e?(y=b.alternate,y!==null?(y=y.index,y<v?(b.flags|=2,v):y):(b.flags|=2,v)):(b.flags|=1048576,v)}function i(b){return e&&b.alternate===null&&(b.flags|=2),b}function l(b,v,y,w){return v===null||v.tag!==6?(v=Xs(y,b.mode,w),v.return=b,v):(v=r(v,y),v.return=b,v)}function d(b,v,y,w){var T=y.type;return T===Gt?p(b,v,y.props.children,w,y.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Yn&&nd(T)===v.type)?(w=r(v,y.props),w.ref=$a(b,v,y),w.return=b,w):(w=xo(y.type,y.key,y.props,null,b.mode,w),w.ref=$a(b,v,y),w.return=b,w)}function u(b,v,y,w){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=Qs(y,b.mode,w),v.return=b,v):(v=r(v,y.children||[]),v.return=b,v)}function p(b,v,y,w,T){return v===null||v.tag!==7?(v=kt(y,b.mode,w,T),v.return=b,v):(v=r(v,y),v.return=b,v)}function f(b,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Xs(""+v,b.mode,y),v.return=b,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Vr:return y=xo(v.type,v.key,v.props,null,b.mode,y),y.ref=$a(b,null,v),y.return=b,y;case Ft:return v=Qs(v,b.mode,y),v.return=b,v;case Yn:var w=v._init;return f(b,w(v._payload),y)}if(Oa(v)||Ma(v))return v=kt(v,b.mode,y,null),v.return=b,v;Ur(b,v)}return null}function g(b,v,y,w){var T=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:l(b,v,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Vr:return y.key===T?d(b,v,y,w):null;case Ft:return y.key===T?u(b,v,y,w):null;case Yn:return T=y._init,g(b,v,T(y._payload),w)}if(Oa(y)||Ma(y))return T!==null?null:p(b,v,y,w,null);Ur(b,y)}return null}function x(b,v,y,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return b=b.get(y)||null,l(v,b,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Vr:return b=b.get(w.key===null?y:w.key)||null,d(v,b,w,T);case Ft:return b=b.get(w.key===null?y:w.key)||null,u(v,b,w,T);case Yn:var $=w._init;return x(b,v,y,$(w._payload),T)}if(Oa(w)||Ma(w))return b=b.get(y)||null,p(v,b,w,T,null);Ur(v,w)}return null}function m(b,v,y,w){for(var T=null,$=null,j=v,C=v=0,A=null;j!==null&&C<y.length;C++){j.index>C?(A=j,j=null):A=j.sibling;var S=g(b,j,y[C],w);if(S===null){j===null&&(j=A);break}e&&j&&S.alternate===null&&n(b,j),v=s(S,v,C),$===null?T=S:$.sibling=S,$=S,j=A}if(C===y.length)return t(b,j),he&&xt(b,C),T;if(j===null){for(;C<y.length;C++)j=f(b,y[C],w),j!==null&&(v=s(j,v,C),$===null?T=j:$.sibling=j,$=j);return he&&xt(b,C),T}for(j=a(b,j);C<y.length;C++)A=x(j,b,C,y[C],w),A!==null&&(e&&A.alternate!==null&&j.delete(A.key===null?C:A.key),v=s(A,v,C),$===null?T=A:$.sibling=A,$=A);return e&&j.forEach(function(z){return n(b,z)}),he&&xt(b,C),T}function h(b,v,y,w){var T=Ma(y);if(typeof T!="function")throw Error(G(150));if(y=T.call(y),y==null)throw Error(G(151));for(var $=T=null,j=v,C=v=0,A=null,S=y.next();j!==null&&!S.done;C++,S=y.next()){j.index>C?(A=j,j=null):A=j.sibling;var z=g(b,j,S.value,w);if(z===null){j===null&&(j=A);break}e&&j&&z.alternate===null&&n(b,j),v=s(z,v,C),$===null?T=z:$.sibling=z,$=z,j=A}if(S.done)return t(b,j),he&&xt(b,C),T;if(j===null){for(;!S.done;C++,S=y.next())S=f(b,S.value,w),S!==null&&(v=s(S,v,C),$===null?T=S:$.sibling=S,$=S);return he&&xt(b,C),T}for(j=a(b,j);!S.done;C++,S=y.next())S=x(j,b,C,S.value,w),S!==null&&(e&&S.alternate!==null&&j.delete(S.key===null?C:S.key),v=s(S,v,C),$===null?T=S:$.sibling=S,$=S);return e&&j.forEach(function(M){return n(b,M)}),he&&xt(b,C),T}function _(b,v,y,w){if(typeof y=="object"&&y!==null&&y.type===Gt&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Vr:e:{for(var T=y.key,$=v;$!==null;){if($.key===T){if(T=y.type,T===Gt){if($.tag===7){t(b,$.sibling),v=r($,y.props.children),v.return=b,b=v;break e}}else if($.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Yn&&nd(T)===$.type){t(b,$.sibling),v=r($,y.props),v.ref=$a(b,$,y),v.return=b,b=v;break e}t(b,$);break}else n(b,$);$=$.sibling}y.type===Gt?(v=kt(y.props.children,b.mode,w,y.key),v.return=b,b=v):(w=xo(y.type,y.key,y.props,null,b.mode,w),w.ref=$a(b,v,y),w.return=b,b=w)}return i(b);case Ft:e:{for($=y.key;v!==null;){if(v.key===$)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){t(b,v.sibling),v=r(v,y.children||[]),v.return=b,b=v;break e}else{t(b,v);break}else n(b,v);v=v.sibling}v=Qs(y,b.mode,w),v.return=b,b=v}return i(b);case Yn:return $=y._init,_(b,v,$(y._payload),w)}if(Oa(y))return m(b,v,y,w);if(Ma(y))return h(b,v,y,w);Ur(b,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(t(b,v.sibling),v=r(v,y),v.return=b,b=v):(t(b,v),v=Xs(y,b.mode,w),v.return=b,b=v),i(b)):t(b,v)}return _}var ga=kp(!0),jp=kp(!1),zo=mt(null),$o=null,qt=null,$l=null;function Al(){$l=qt=$o=null}function Vl(e){var n=zo.current;me(zo),e._currentValue=n}function Pi(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function la(e,n){$o=e,$l=qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(We=!0),e.firstContext=null)}function gn(e){var n=e._currentValue;if($l!==e)if(e={context:e,memoizedValue:n,next:null},qt===null){if($o===null)throw Error(G(308));qt=e,$o.dependencies={lanes:0,firstContext:e}}else qt=qt.next=e;return n}var yt=null;function Pl(e){yt===null?yt=[e]:yt.push(e)}function wp(e,n,t,a){var r=n.interleaved;return r===null?(t.next=t,Pl(n)):(t.next=r.next,r.next=t),n.interleaved=t,Gn(e,a)}function Gn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Xn=!1;function Rl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function it(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,ae&2){var r=a.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),a.pending=n,Gn(e,t)}return r=a.interleaved,r===null?(n.next=n,Pl(a)):(n.next=r.next,r.next=n),a.interleaved=n,Gn(e,t)}function uo(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,kl(e,t)}}function td(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=i:s=s.next=i,t=t.next}while(t!==null);s===null?r=s=n:s=s.next=n}else r=s=n;t={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:a.shared,effects:a.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ao(e,n,t,a){var r=e.updateQueue;Xn=!1;var s=r.firstBaseUpdate,i=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var d=l,u=d.next;d.next=null,i===null?s=u:i.next=u,i=d;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==i&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=d))}if(s!==null){var f=r.baseState;i=0,p=u=d=null,l=s;do{var g=l.lane,x=l.eventTime;if((a&g)===g){p!==null&&(p=p.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,h=l;switch(g=n,x=t,h.tag){case 1:if(m=h.payload,typeof m=="function"){f=m.call(x,f,g);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,g=typeof m=="function"?m.call(x,f,g):m,g==null)break e;f=be({},f,g);break e;case 2:Xn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=r.effects,g===null?r.effects=[l]:g.push(l))}else x={eventTime:x,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=x,d=f):p=p.next=x,i|=g;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;g=l,l=g.next,g.next=null,r.lastBaseUpdate=g,r.shared.pending=null}}while(!0);if(p===null&&(d=f),r.baseState=d,r.firstBaseUpdate=u,r.lastBaseUpdate=p,n=r.shared.interleaved,n!==null){r=n;do i|=r.lane,r=r.next;while(r!==n)}else s===null&&(r.shared.lanes=0);Ct|=i,e.lanes=i,e.memoizedState=f}}function ad(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],r=a.callback;if(r!==null){if(a.callback=null,a=t,typeof r!="function")throw Error(G(191,r));r.call(a)}}}var Mr={},En=mt(Mr),ur=mt(Mr),pr=mt(Mr);function _t(e){if(e===Mr)throw Error(G(174));return e}function Ll(e,n){switch(pe(pr,n),pe(ur,e),pe(En,Mr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:xi(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=xi(n,e)}me(En),pe(En,n)}function ha(){me(En),me(ur),me(pr)}function Cp(e){_t(pr.current);var n=_t(En.current),t=xi(n,e.type);n!==t&&(pe(ur,e),pe(En,t))}function Ol(e){ur.current===e&&(me(En),me(ur))}var xe=mt(0);function Vo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Gs=[];function Kl(){for(var e=0;e<Gs.length;e++)Gs[e]._workInProgressVersionPrimary=null;Gs.length=0}var po=Un.ReactCurrentDispatcher,Hs=Un.ReactCurrentBatchConfig,St=0,ve=null,Ce=null,Ee=null,Po=!1,Wa=!1,fr=0,Wg=0;function Re(){throw Error(G(321))}function Jl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!wn(e[t],n[t]))return!1;return!0}function Bl(e,n,t,a,r,s){if(St=s,ve=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,po.current=e===null||e.memoizedState===null?Qg:qg,e=t(a,r),Wa){s=0;do{if(Wa=!1,fr=0,25<=s)throw Error(G(301));s+=1,Ee=Ce=null,n.updateQueue=null,po.current=e0,e=t(a,r)}while(Wa)}if(po.current=Ro,n=Ce!==null&&Ce.next!==null,St=0,Ee=Ce=ve=null,Po=!1,n)throw Error(G(300));return e}function Fl(){var e=fr!==0;return fr=0,e}function Cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?ve.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function hn(){if(Ce===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var n=Ee===null?ve.memoizedState:Ee.next;if(n!==null)Ee=n,Ce=e;else{if(e===null)throw Error(G(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Ee===null?ve.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function mr(e,n){return typeof n=="function"?n(e):n}function Us(e){var n=hn(),t=n.queue;if(t===null)throw Error(G(311));t.lastRenderedReducer=e;var a=Ce,r=a.baseQueue,s=t.pending;if(s!==null){if(r!==null){var i=r.next;r.next=s.next,s.next=i}a.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,a=a.baseState;var l=i=null,d=null,u=s;do{var p=u.lane;if((St&p)===p)d!==null&&(d=d.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),a=u.hasEagerState?u.eagerState:e(a,u.action);else{var f={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};d===null?(l=d=f,i=a):d=d.next=f,ve.lanes|=p,Ct|=p}u=u.next}while(u!==null&&u!==s);d===null?i=a:d.next=l,wn(a,n.memoizedState)||(We=!0),n.memoizedState=a,n.baseState=i,n.baseQueue=d,t.lastRenderedState=a}if(e=t.interleaved,e!==null){r=e;do s=r.lane,ve.lanes|=s,Ct|=s,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ws(e){var n=hn(),t=n.queue;if(t===null)throw Error(G(311));t.lastRenderedReducer=e;var a=t.dispatch,r=t.pending,s=n.memoizedState;if(r!==null){t.pending=null;var i=r=r.next;do s=e(s,i.action),i=i.next;while(i!==r);wn(s,n.memoizedState)||(We=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),t.lastRenderedState=s}return[s,a]}function Np(){}function Mp(e,n){var t=ve,a=hn(),r=n(),s=!wn(a.memoizedState,r);if(s&&(a.memoizedState=r,We=!0),a=a.queue,Gl(Dp.bind(null,t,a,e),[e]),a.getSnapshot!==n||s||Ee!==null&&Ee.memoizedState.tag&1){if(t.flags|=2048,gr(9,Ep.bind(null,t,a,r,n),void 0,null),De===null)throw Error(G(349));St&30||Tp(t,n,r)}return r}function Tp(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ve.updateQueue,n===null?(n={lastEffect:null,stores:null},ve.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Ep(e,n,t,a){n.value=t,n.getSnapshot=a,zp(n)&&$p(e)}function Dp(e,n,t){return t(function(){zp(n)&&$p(e)})}function zp(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!wn(e,t)}catch{return!0}}function $p(e){var n=Gn(e,1);n!==null&&kn(n,e,1,-1)}function rd(e){var n=Cn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mr,lastRenderedState:e},n.queue=e,e=e.dispatch=Xg.bind(null,ve,e),[n.memoizedState,e]}function gr(e,n,t,a){return e={tag:e,create:n,destroy:t,deps:a,next:null},n=ve.updateQueue,n===null?(n={lastEffect:null,stores:null},ve.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e)),e}function Ap(){return hn().memoizedState}function fo(e,n,t,a){var r=Cn();ve.flags|=e,r.memoizedState=gr(1|n,t,void 0,a===void 0?null:a)}function ds(e,n,t,a){var r=hn();a=a===void 0?null:a;var s=void 0;if(Ce!==null){var i=Ce.memoizedState;if(s=i.destroy,a!==null&&Jl(a,i.deps)){r.memoizedState=gr(n,t,s,a);return}}ve.flags|=e,r.memoizedState=gr(1|n,t,s,a)}function od(e,n){return fo(8390656,8,e,n)}function Gl(e,n){return ds(2048,8,e,n)}function Vp(e,n){return ds(4,2,e,n)}function Pp(e,n){return ds(4,4,e,n)}function Rp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Lp(e,n,t){return t=t!=null?t.concat([e]):null,ds(4,4,Rp.bind(null,n,e),t)}function Hl(){}function Op(e,n){var t=hn();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&Jl(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function Kp(e,n){var t=hn();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&Jl(n,a[1])?a[0]:(e=e(),t.memoizedState=[e,n],e)}function Jp(e,n,t){return St&21?(wn(t,n)||(t=Uu(),ve.lanes|=t,Ct|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=t)}function Zg(e,n){var t=ce;ce=t!==0&&4>t?t:4,e(!0);var a=Hs.transition;Hs.transition={};try{e(!1),n()}finally{ce=t,Hs.transition=a}}function Bp(){return hn().memoizedState}function Yg(e,n,t){var a=ct(e);if(t={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null},Fp(e))Gp(n,t);else if(t=wp(e,n,t,a),t!==null){var r=Be();kn(t,e,a,r),Hp(t,n,a)}}function Xg(e,n,t){var a=ct(e),r={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null};if(Fp(e))Gp(n,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var i=n.lastRenderedState,l=s(i,t);if(r.hasEagerState=!0,r.eagerState=l,wn(l,i)){var d=n.interleaved;d===null?(r.next=r,Pl(n)):(r.next=d.next,d.next=r),n.interleaved=r;return}}catch{}finally{}t=wp(e,n,r,a),t!==null&&(r=Be(),kn(t,e,a,r),Hp(t,n,a))}}function Fp(e){var n=e.alternate;return e===ve||n!==null&&n===ve}function Gp(e,n){Wa=Po=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Hp(e,n,t){if(t&4194240){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,kl(e,t)}}var Ro={readContext:gn,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},Qg={readContext:gn,useCallback:function(e,n){return Cn().memoizedState=[e,n===void 0?null:n],e},useContext:gn,useEffect:od,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,fo(4194308,4,Rp.bind(null,n,e),t)},useLayoutEffect:function(e,n){return fo(4194308,4,e,n)},useInsertionEffect:function(e,n){return fo(4,2,e,n)},useMemo:function(e,n){var t=Cn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var a=Cn();return n=t!==void 0?t(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Yg.bind(null,ve,e),[a.memoizedState,e]},useRef:function(e){var n=Cn();return e={current:e},n.memoizedState=e},useState:rd,useDebugValue:Hl,useDeferredValue:function(e){return Cn().memoizedState=e},useTransition:function(){var e=rd(!1),n=e[0];return e=Zg.bind(null,e[1]),Cn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var a=ve,r=Cn();if(he){if(t===void 0)throw Error(G(407));t=t()}else{if(t=n(),De===null)throw Error(G(349));St&30||Tp(a,n,t)}r.memoizedState=t;var s={value:t,getSnapshot:n};return r.queue=s,od(Dp.bind(null,a,s,e),[e]),a.flags|=2048,gr(9,Ep.bind(null,a,s,t,n),void 0,null),t},useId:function(){var e=Cn(),n=De.identifierPrefix;if(he){var t=Kn,a=On;t=(a&~(1<<32-In(a)-1)).toString(32)+t,n=":"+n+"R"+t,t=fr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Wg++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},qg={readContext:gn,useCallback:Op,useContext:gn,useEffect:Gl,useImperativeHandle:Lp,useInsertionEffect:Vp,useLayoutEffect:Pp,useMemo:Kp,useReducer:Us,useRef:Ap,useState:function(){return Us(mr)},useDebugValue:Hl,useDeferredValue:function(e){var n=hn();return Jp(n,Ce.memoizedState,e)},useTransition:function(){var e=Us(mr)[0],n=hn().memoizedState;return[e,n]},useMutableSource:Np,useSyncExternalStore:Mp,useId:Bp,unstable_isNewReconciler:!1},e0={readContext:gn,useCallback:Op,useContext:gn,useEffect:Gl,useImperativeHandle:Lp,useInsertionEffect:Vp,useLayoutEffect:Pp,useMemo:Kp,useReducer:Ws,useRef:Ap,useState:function(){return Ws(mr)},useDebugValue:Hl,useDeferredValue:function(e){var n=hn();return Ce===null?n.memoizedState=e:Jp(n,Ce.memoizedState,e)},useTransition:function(){var e=Ws(mr)[0],n=hn().memoizedState;return[e,n]},useMutableSource:Np,useSyncExternalStore:Mp,useId:Bp,unstable_isNewReconciler:!1};function bn(e,n){if(e&&e.defaultProps){n=be({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ri(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:be({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var us={isMounted:function(e){return(e=e._reactInternals)?$t(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var a=Be(),r=ct(e),s=Jn(a,r);s.payload=n,t!=null&&(s.callback=t),n=it(e,s,r),n!==null&&(kn(n,e,r,a),uo(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=Be(),r=ct(e),s=Jn(a,r);s.tag=1,s.payload=n,t!=null&&(s.callback=t),n=it(e,s,r),n!==null&&(kn(n,e,r,a),uo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Be(),a=ct(e),r=Jn(t,a);r.tag=2,n!=null&&(r.callback=n),n=it(e,r,a),n!==null&&(kn(n,e,a,t),uo(n,e,a))}};function sd(e,n,t,a,r,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,i):n.prototype&&n.prototype.isPureReactComponent?!ir(t,a)||!ir(r,s):!0}function Up(e,n,t){var a=!1,r=pt,s=n.contextType;return typeof s=="object"&&s!==null?s=gn(s):(r=Xe(n)?jt:Ke.current,a=n.contextTypes,s=(a=a!=null)?fa(e,r):pt),n=new n(t,s),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=us,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=s),n}function id(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&us.enqueueReplaceState(n,n.state,null)}function Li(e,n,t,a){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},Rl(e);var s=n.contextType;typeof s=="object"&&s!==null?r.context=gn(s):(s=Xe(n)?jt:Ke.current,r.context=fa(e,s)),r.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Ri(e,n,s,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&us.enqueueReplaceState(r,r.state,null),Ao(e,t,r,a),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function xa(e,n){try{var t="",a=n;do t+=Nm(a),a=a.return;while(a);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:n,stack:r,digest:null}}function Zs(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Oi(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var n0=typeof WeakMap=="function"?WeakMap:Map;function Wp(e,n,t){t=Jn(-1,t),t.tag=3,t.payload={element:null};var a=n.value;return t.callback=function(){Oo||(Oo=!0,Yi=a),Oi(e,n)},t}function Zp(e,n,t){t=Jn(-1,t),t.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var r=n.value;t.payload=function(){return a(r)},t.callback=function(){Oi(e,n)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Oi(e,n),typeof a!="function"&&(lt===null?lt=new Set([this]):lt.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function ld(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new n0;var r=new Set;a.set(n,r)}else r=a.get(n),r===void 0&&(r=new Set,a.set(n,r));r.has(t)||(r.add(t),e=g0.bind(null,e,n,t),n.then(e,e))}function cd(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function dd(e,n,t,a,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Jn(-1,1),n.tag=2,it(t,n,1))),t.lanes|=1),e)}var t0=Un.ReactCurrentOwner,We=!1;function Je(e,n,t,a){n.child=e===null?jp(n,null,t,a):ga(n,e.child,t,a)}function ud(e,n,t,a,r){t=t.render;var s=n.ref;return la(n,r),a=Bl(e,n,t,a,s,r),t=Fl(),e!==null&&!We?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Hn(e,n,r)):(he&&t&&El(n),n.flags|=1,Je(e,n,a,r),n.child)}function pd(e,n,t,a,r){if(e===null){var s=t.type;return typeof s=="function"&&!ec(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=s,Yp(e,n,s,a,r)):(e=xo(t.type,null,a,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,!(e.lanes&r)){var i=s.memoizedProps;if(t=t.compare,t=t!==null?t:ir,t(i,a)&&e.ref===n.ref)return Hn(e,n,r)}return n.flags|=1,e=dt(s,a),e.ref=n.ref,e.return=n,n.child=e}function Yp(e,n,t,a,r){if(e!==null){var s=e.memoizedProps;if(ir(s,a)&&e.ref===n.ref)if(We=!1,n.pendingProps=a=s,(e.lanes&r)!==0)e.flags&131072&&(We=!0);else return n.lanes=e.lanes,Hn(e,n,r)}return Ki(e,n,t,a,r)}function Xp(e,n,t){var a=n.pendingProps,r=a.children,s=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(na,en),en|=t;else{if(!(t&1073741824))return e=s!==null?s.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,pe(na,en),en|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=s!==null?s.baseLanes:t,pe(na,en),en|=a}else s!==null?(a=s.baseLanes|t,n.memoizedState=null):a=t,pe(na,en),en|=a;return Je(e,n,r,t),n.child}function Qp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ki(e,n,t,a,r){var s=Xe(t)?jt:Ke.current;return s=fa(n,s),la(n,r),t=Bl(e,n,t,a,s,r),a=Fl(),e!==null&&!We?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Hn(e,n,r)):(he&&a&&El(n),n.flags|=1,Je(e,n,t,r),n.child)}function fd(e,n,t,a,r){if(Xe(t)){var s=!0;To(n)}else s=!1;if(la(n,r),n.stateNode===null)mo(e,n),Up(n,t,a),Li(n,t,a,r),a=!0;else if(e===null){var i=n.stateNode,l=n.memoizedProps;i.props=l;var d=i.context,u=t.contextType;typeof u=="object"&&u!==null?u=gn(u):(u=Xe(t)?jt:Ke.current,u=fa(n,u));var p=t.getDerivedStateFromProps,f=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==a||d!==u)&&id(n,i,a,u),Xn=!1;var g=n.memoizedState;i.state=g,Ao(n,a,i,r),d=n.memoizedState,l!==a||g!==d||Ye.current||Xn?(typeof p=="function"&&(Ri(n,t,p,a),d=n.memoizedState),(l=Xn||sd(n,t,l,a,g,d,u))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=d),i.props=a,i.state=d,i.context=u,a=l):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{i=n.stateNode,Sp(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:bn(n.type,l),i.props=u,f=n.pendingProps,g=i.context,d=t.contextType,typeof d=="object"&&d!==null?d=gn(d):(d=Xe(t)?jt:Ke.current,d=fa(n,d));var x=t.getDerivedStateFromProps;(p=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==f||g!==d)&&id(n,i,a,d),Xn=!1,g=n.memoizedState,i.state=g,Ao(n,a,i,r);var m=n.memoizedState;l!==f||g!==m||Ye.current||Xn?(typeof x=="function"&&(Ri(n,t,x,a),m=n.memoizedState),(u=Xn||sd(n,t,u,a,g,m,d)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,m,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,m,d)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=m),i.props=a,i.state=m,i.context=d,a=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),a=!1)}return Ji(e,n,t,a,s,r)}function Ji(e,n,t,a,r,s){Qp(e,n);var i=(n.flags&128)!==0;if(!a&&!i)return r&&Qc(n,t,!1),Hn(e,n,s);a=n.stateNode,t0.current=n;var l=i&&typeof t.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&i?(n.child=ga(n,e.child,null,s),n.child=ga(n,null,l,s)):Je(e,n,l,s),n.memoizedState=a.state,r&&Qc(n,t,!0),n.child}function qp(e){var n=e.stateNode;n.pendingContext?Xc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Xc(e,n.context,!1),Ll(e,n.containerInfo)}function md(e,n,t,a,r){return ma(),zl(r),n.flags|=256,Je(e,n,t,a),n.child}var Bi={dehydrated:null,treeContext:null,retryLane:0};function Fi(e){return{baseLanes:e,cachePool:null,transitions:null}}function ef(e,n,t){var a=n.pendingProps,r=xe.current,s=!1,i=(n.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(r&2)!==0),l?(s=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),pe(xe,r&1),e===null)return Vi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=a.children,e=a.fallback,s?(a=n.mode,s=n.child,i={mode:"hidden",children:i},!(a&1)&&s!==null?(s.childLanes=0,s.pendingProps=i):s=ms(i,a,0,null),e=kt(e,a,t,null),s.return=n,e.return=n,s.sibling=e,n.child=s,n.child.memoizedState=Fi(t),n.memoizedState=Bi,e):Ul(n,i));if(r=e.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return a0(e,n,i,a,l,r,t);if(s){s=a.fallback,i=n.mode,r=e.child,l=r.sibling;var d={mode:"hidden",children:a.children};return!(i&1)&&n.child!==r?(a=n.child,a.childLanes=0,a.pendingProps=d,n.deletions=null):(a=dt(r,d),a.subtreeFlags=r.subtreeFlags&14680064),l!==null?s=dt(l,s):(s=kt(s,i,t,null),s.flags|=2),s.return=n,a.return=n,a.sibling=s,n.child=a,a=s,s=n.child,i=e.child.memoizedState,i=i===null?Fi(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},s.memoizedState=i,s.childLanes=e.childLanes&~t,n.memoizedState=Bi,a}return s=e.child,e=s.sibling,a=dt(s,{mode:"visible",children:a.children}),!(n.mode&1)&&(a.lanes=t),a.return=n,a.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=a,n.memoizedState=null,a}function Ul(e,n){return n=ms({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Wr(e,n,t,a){return a!==null&&zl(a),ga(n,e.child,null,t),e=Ul(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function a0(e,n,t,a,r,s,i){if(t)return n.flags&256?(n.flags&=-257,a=Zs(Error(G(422))),Wr(e,n,i,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(s=a.fallback,r=n.mode,a=ms({mode:"visible",children:a.children},r,0,null),s=kt(s,r,i,null),s.flags|=2,a.return=n,s.return=n,a.sibling=s,n.child=a,n.mode&1&&ga(n,e.child,null,i),n.child.memoizedState=Fi(i),n.memoizedState=Bi,s);if(!(n.mode&1))return Wr(e,n,i,null);if(r.data==="$!"){if(a=r.nextSibling&&r.nextSibling.dataset,a)var l=a.dgst;return a=l,s=Error(G(419)),a=Zs(s,a,void 0),Wr(e,n,i,a)}if(l=(i&e.childLanes)!==0,We||l){if(a=De,a!==null){switch(i&-i){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(a.suspendedLanes|i)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Gn(e,r),kn(a,e,r,-1))}return ql(),a=Zs(Error(G(421))),Wr(e,n,i,a)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=h0.bind(null,e),r._reactRetry=n,null):(e=s.treeContext,tn=st(r.nextSibling),an=n,he=!0,_n=null,e!==null&&(cn[dn++]=On,cn[dn++]=Kn,cn[dn++]=wt,On=e.id,Kn=e.overflow,wt=n),n=Ul(n,a.children),n.flags|=4096,n)}function gd(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Pi(e.return,n,t)}function Ys(e,n,t,a,r){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:r}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=t,s.tailMode=r)}function nf(e,n,t){var a=n.pendingProps,r=a.revealOrder,s=a.tail;if(Je(e,n,a.children,t),a=xe.current,a&2)a=a&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gd(e,t,n);else if(e.tag===19)gd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(pe(xe,a),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&Vo(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),Ys(n,!1,r,t,s);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Vo(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}Ys(n,!0,t,null,s);break;case"together":Ys(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function mo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Hn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Ct|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(G(153));if(n.child!==null){for(e=n.child,t=dt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=dt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function r0(e,n,t){switch(n.tag){case 3:qp(n),ma();break;case 5:Cp(n);break;case 1:Xe(n.type)&&To(n);break;case 4:Ll(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,r=n.memoizedProps.value;pe(zo,a._currentValue),a._currentValue=r;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(pe(xe,xe.current&1),n.flags|=128,null):t&n.child.childLanes?ef(e,n,t):(pe(xe,xe.current&1),e=Hn(e,n,t),e!==null?e.sibling:null);pe(xe,xe.current&1);break;case 19:if(a=(t&n.childLanes)!==0,e.flags&128){if(a)return nf(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),pe(xe,xe.current),a)break;return null;case 22:case 23:return n.lanes=0,Xp(e,n,t)}return Hn(e,n,t)}var tf,Gi,af,rf;tf=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Gi=function(){};af=function(e,n,t,a){var r=e.memoizedProps;if(r!==a){e=n.stateNode,_t(En.current);var s=null;switch(t){case"input":r=fi(e,r),a=fi(e,a),s=[];break;case"select":r=be({},r,{value:void 0}),a=be({},a,{value:void 0}),s=[];break;case"textarea":r=hi(e,r),a=hi(e,a),s=[];break;default:typeof r.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=No)}vi(t,a);var i;t=null;for(u in r)if(!a.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var l=r[u];for(i in l)l.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(er.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in a){var d=a[u];if(l=r!=null?r[u]:void 0,a.hasOwnProperty(u)&&d!==l&&(d!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||d&&d.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in d)d.hasOwnProperty(i)&&l[i]!==d[i]&&(t||(t={}),t[i]=d[i])}else t||(s||(s=[]),s.push(u,t)),t=d;else u==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,l=l?l.__html:void 0,d!=null&&l!==d&&(s=s||[]).push(u,d)):u==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(u,""+d):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(er.hasOwnProperty(u)?(d!=null&&u==="onScroll"&&fe("scroll",e),s||l===d||(s=[])):(s=s||[]).push(u,d))}t&&(s=s||[]).push("style",t);var u=s;(n.updateQueue=u)&&(n.flags|=4)}};rf=function(e,n,t,a){t!==a&&(n.flags|=4)};function Aa(e,n){if(!he)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Le(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags&14680064,a|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function o0(e,n,t){var a=n.pendingProps;switch(Dl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(n),null;case 1:return Xe(n.type)&&Mo(),Le(n),null;case 3:return a=n.stateNode,ha(),me(Ye),me(Ke),Kl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Hr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,_n!==null&&(qi(_n),_n=null))),Gi(e,n),Le(n),null;case 5:Ol(n);var r=_t(pr.current);if(t=n.type,e!==null&&n.stateNode!=null)af(e,n,t,a,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(G(166));return Le(n),null}if(e=_t(En.current),Hr(n)){a=n.stateNode,t=n.type;var s=n.memoizedProps;switch(a[Nn]=n,a[dr]=s,e=(n.mode&1)!==0,t){case"dialog":fe("cancel",a),fe("close",a);break;case"iframe":case"object":case"embed":fe("load",a);break;case"video":case"audio":for(r=0;r<Ja.length;r++)fe(Ja[r],a);break;case"source":fe("error",a);break;case"img":case"image":case"link":fe("error",a),fe("load",a);break;case"details":fe("toggle",a);break;case"input":jc(a,s),fe("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!s.multiple},fe("invalid",a);break;case"textarea":Sc(a,s),fe("invalid",a)}vi(t,s),r=null;for(var i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="children"?typeof l=="string"?a.textContent!==l&&(s.suppressHydrationWarning!==!0&&Gr(a.textContent,l,e),r=["children",l]):typeof l=="number"&&a.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Gr(a.textContent,l,e),r=["children",""+l]):er.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&fe("scroll",a)}switch(t){case"input":Pr(a),wc(a,s,!0);break;case"textarea":Pr(a),Cc(a);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(a.onclick=No)}a=r,n.updateQueue=a,a!==null&&(n.flags|=4)}else{i=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Du(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=i.createElement(t,{is:a.is}):(e=i.createElement(t),t==="select"&&(i=e,a.multiple?i.multiple=!0:a.size&&(i.size=a.size))):e=i.createElementNS(e,t),e[Nn]=n,e[dr]=a,tf(e,n,!1,!1),n.stateNode=e;e:{switch(i=bi(t,a),t){case"dialog":fe("cancel",e),fe("close",e),r=a;break;case"iframe":case"object":case"embed":fe("load",e),r=a;break;case"video":case"audio":for(r=0;r<Ja.length;r++)fe(Ja[r],e);r=a;break;case"source":fe("error",e),r=a;break;case"img":case"image":case"link":fe("error",e),fe("load",e),r=a;break;case"details":fe("toggle",e),r=a;break;case"input":jc(e,a),r=fi(e,a),fe("invalid",e);break;case"option":r=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},r=be({},a,{value:void 0}),fe("invalid",e);break;case"textarea":Sc(e,a),r=hi(e,a),fe("invalid",e);break;default:r=a}vi(t,r),l=r;for(s in l)if(l.hasOwnProperty(s)){var d=l[s];s==="style"?Au(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&zu(e,d)):s==="children"?typeof d=="string"?(t!=="textarea"||d!=="")&&nr(e,d):typeof d=="number"&&nr(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(er.hasOwnProperty(s)?d!=null&&s==="onScroll"&&fe("scroll",e):d!=null&&xl(e,s,d,i))}switch(t){case"input":Pr(e),wc(e,a,!1);break;case"textarea":Pr(e),Cc(e);break;case"option":a.value!=null&&e.setAttribute("value",""+ut(a.value));break;case"select":e.multiple=!!a.multiple,s=a.value,s!=null?ra(e,!!a.multiple,s,!1):a.defaultValue!=null&&ra(e,!!a.multiple,a.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=No)}switch(t){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Le(n),null;case 6:if(e&&n.stateNode!=null)rf(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(G(166));if(t=_t(pr.current),_t(En.current),Hr(n)){if(a=n.stateNode,t=n.memoizedProps,a[Nn]=n,(s=a.nodeValue!==t)&&(e=an,e!==null))switch(e.tag){case 3:Gr(a.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Gr(a.nodeValue,t,(e.mode&1)!==0)}s&&(n.flags|=4)}else a=(t.nodeType===9?t:t.ownerDocument).createTextNode(a),a[Nn]=n,n.stateNode=a}return Le(n),null;case 13:if(me(xe),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&tn!==null&&n.mode&1&&!(n.flags&128))Ip(),ma(),n.flags|=98560,s=!1;else if(s=Hr(n),a!==null&&a.dehydrated!==null){if(e===null){if(!s)throw Error(G(318));if(s=n.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(G(317));s[Nn]=n}else ma(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Le(n),s=!1}else _n!==null&&(qi(_n),_n=null),s=!0;if(!s)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,n.mode&1&&(e===null||xe.current&1?Te===0&&(Te=3):ql())),n.updateQueue!==null&&(n.flags|=4),Le(n),null);case 4:return ha(),Gi(e,n),e===null&&lr(n.stateNode.containerInfo),Le(n),null;case 10:return Vl(n.type._context),Le(n),null;case 17:return Xe(n.type)&&Mo(),Le(n),null;case 19:if(me(xe),s=n.memoizedState,s===null)return Le(n),null;if(a=(n.flags&128)!==0,i=s.rendering,i===null)if(a)Aa(s,!1);else{if(Te!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=Vo(e),i!==null){for(n.flags|=128,Aa(s,!1),a=i.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=t,t=n.child;t!==null;)s=t,e=a,s.flags&=14680066,i=s.alternate,i===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,s.type=i.type,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return pe(xe,xe.current&1|2),n.child}e=e.sibling}s.tail!==null&&ke()>va&&(n.flags|=128,a=!0,Aa(s,!1),n.lanes=4194304)}else{if(!a)if(e=Vo(i),e!==null){if(n.flags|=128,a=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Aa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!he)return Le(n),null}else 2*ke()-s.renderingStartTime>va&&t!==1073741824&&(n.flags|=128,a=!0,Aa(s,!1),n.lanes=4194304);s.isBackwards?(i.sibling=n.child,n.child=i):(t=s.last,t!==null?t.sibling=i:n.child=i,s.last=i)}return s.tail!==null?(n=s.tail,s.rendering=n,s.tail=n.sibling,s.renderingStartTime=ke(),n.sibling=null,t=xe.current,pe(xe,a?t&1|2:t&1),n):(Le(n),null);case 22:case 23:return Ql(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&n.mode&1?en&1073741824&&(Le(n),n.subtreeFlags&6&&(n.flags|=8192)):Le(n),null;case 24:return null;case 25:return null}throw Error(G(156,n.tag))}function s0(e,n){switch(Dl(n),n.tag){case 1:return Xe(n.type)&&Mo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ha(),me(Ye),me(Ke),Kl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ol(n),null;case 13:if(me(xe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(G(340));ma()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return me(xe),null;case 4:return ha(),null;case 10:return Vl(n.type._context),null;case 22:case 23:return Ql(),null;case 24:return null;default:return null}}var Zr=!1,Oe=!1,i0=typeof WeakSet=="function"?WeakSet:Set,W=null;function ea(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(a){_e(e,n,a)}else t.current=null}function Hi(e,n,t){try{t()}catch(a){_e(e,n,a)}}var hd=!1;function l0(e,n){if(Mi=wo,e=cp(),Tl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var r=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var i=0,l=-1,d=-1,u=0,p=0,f=e,g=null;n:for(;;){for(var x;f!==t||r!==0&&f.nodeType!==3||(l=i+r),f!==s||a!==0&&f.nodeType!==3||(d=i+a),f.nodeType===3&&(i+=f.nodeValue.length),(x=f.firstChild)!==null;)g=f,f=x;for(;;){if(f===e)break n;if(g===t&&++u===r&&(l=i),g===s&&++p===a&&(d=i),(x=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=x}t=l===-1||d===-1?null:{start:l,end:d}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ti={focusedElem:e,selectionRange:t},wo=!1,W=n;W!==null;)if(n=W,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,W=e;else for(;W!==null;){n=W;try{var m=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var h=m.memoizedProps,_=m.memoizedState,b=n.stateNode,v=b.getSnapshotBeforeUpdate(n.elementType===n.type?h:bn(n.type,h),_);b.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(G(163))}}catch(w){_e(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,W=e;break}W=n.return}return m=hd,hd=!1,m}function Za(e,n,t){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var r=a=a.next;do{if((r.tag&e)===e){var s=r.destroy;r.destroy=void 0,s!==void 0&&Hi(n,t,s)}r=r.next}while(r!==a)}}function ps(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var a=t.create;t.destroy=a()}t=t.next}while(t!==n)}}function Ui(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function of(e){var n=e.alternate;n!==null&&(e.alternate=null,of(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Nn],delete n[dr],delete n[zi],delete n[Fg],delete n[Gg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sf(e){return e.tag===5||e.tag===3||e.tag===4}function xd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wi(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=No));else if(a!==4&&(e=e.child,e!==null))for(Wi(e,n,t),e=e.sibling;e!==null;)Wi(e,n,t),e=e.sibling}function Zi(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Zi(e,n,t),e=e.sibling;e!==null;)Zi(e,n,t),e=e.sibling}var ze=null,yn=!1;function Zn(e,n,t){for(t=t.child;t!==null;)lf(e,n,t),t=t.sibling}function lf(e,n,t){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(rs,t)}catch{}switch(t.tag){case 5:Oe||ea(t,n);case 6:var a=ze,r=yn;ze=null,Zn(e,n,t),ze=a,yn=r,ze!==null&&(yn?(e=ze,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ze.removeChild(t.stateNode));break;case 18:ze!==null&&(yn?(e=ze,t=t.stateNode,e.nodeType===8?Bs(e.parentNode,t):e.nodeType===1&&Bs(e,t),or(e)):Bs(ze,t.stateNode));break;case 4:a=ze,r=yn,ze=t.stateNode.containerInfo,yn=!0,Zn(e,n,t),ze=a,yn=r;break;case 0:case 11:case 14:case 15:if(!Oe&&(a=t.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){r=a=a.next;do{var s=r,i=s.destroy;s=s.tag,i!==void 0&&(s&2||s&4)&&Hi(t,n,i),r=r.next}while(r!==a)}Zn(e,n,t);break;case 1:if(!Oe&&(ea(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=t.memoizedProps,a.state=t.memoizedState,a.componentWillUnmount()}catch(l){_e(t,n,l)}Zn(e,n,t);break;case 21:Zn(e,n,t);break;case 22:t.mode&1?(Oe=(a=Oe)||t.memoizedState!==null,Zn(e,n,t),Oe=a):Zn(e,n,t);break;default:Zn(e,n,t)}}function vd(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new i0),n.forEach(function(a){var r=x0.bind(null,e,a);t.has(a)||(t.add(a),a.then(r,r))})}}function vn(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var r=t[a];try{var s=e,i=n,l=i;e:for(;l!==null;){switch(l.tag){case 5:ze=l.stateNode,yn=!1;break e;case 3:ze=l.stateNode.containerInfo,yn=!0;break e;case 4:ze=l.stateNode.containerInfo,yn=!0;break e}l=l.return}if(ze===null)throw Error(G(160));lf(s,i,r),ze=null,yn=!1;var d=r.alternate;d!==null&&(d.return=null),r.return=null}catch(u){_e(r,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)cf(n,e),n=n.sibling}function cf(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vn(n,e),Sn(e),a&4){try{Za(3,e,e.return),ps(3,e)}catch(h){_e(e,e.return,h)}try{Za(5,e,e.return)}catch(h){_e(e,e.return,h)}}break;case 1:vn(n,e),Sn(e),a&512&&t!==null&&ea(t,t.return);break;case 5:if(vn(n,e),Sn(e),a&512&&t!==null&&ea(t,t.return),e.flags&32){var r=e.stateNode;try{nr(r,"")}catch(h){_e(e,e.return,h)}}if(a&4&&(r=e.stateNode,r!=null)){var s=e.memoizedProps,i=t!==null?t.memoizedProps:s,l=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Tu(r,s),bi(l,i);var u=bi(l,s);for(i=0;i<d.length;i+=2){var p=d[i],f=d[i+1];p==="style"?Au(r,f):p==="dangerouslySetInnerHTML"?zu(r,f):p==="children"?nr(r,f):xl(r,p,f,u)}switch(l){case"input":mi(r,s);break;case"textarea":Eu(r,s);break;case"select":var g=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?ra(r,!!s.multiple,x,!1):g!==!!s.multiple&&(s.defaultValue!=null?ra(r,!!s.multiple,s.defaultValue,!0):ra(r,!!s.multiple,s.multiple?[]:"",!1))}r[dr]=s}catch(h){_e(e,e.return,h)}}break;case 6:if(vn(n,e),Sn(e),a&4){if(e.stateNode===null)throw Error(G(162));r=e.stateNode,s=e.memoizedProps;try{r.nodeValue=s}catch(h){_e(e,e.return,h)}}break;case 3:if(vn(n,e),Sn(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{or(n.containerInfo)}catch(h){_e(e,e.return,h)}break;case 4:vn(n,e),Sn(e);break;case 13:vn(n,e),Sn(e),r=e.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Yl=ke())),a&4&&vd(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(Oe=(u=Oe)||p,vn(n,e),Oe=u):vn(n,e),Sn(e),a&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(W=e,p=e.child;p!==null;){for(f=W=p;W!==null;){switch(g=W,x=g.child,g.tag){case 0:case 11:case 14:case 15:Za(4,g,g.return);break;case 1:ea(g,g.return);var m=g.stateNode;if(typeof m.componentWillUnmount=="function"){a=g,t=g.return;try{n=a,m.props=n.memoizedProps,m.state=n.memoizedState,m.componentWillUnmount()}catch(h){_e(a,t,h)}}break;case 5:ea(g,g.return);break;case 22:if(g.memoizedState!==null){yd(f);continue}}x!==null?(x.return=g,W=x):yd(f)}p=p.sibling}e:for(p=null,f=e;;){if(f.tag===5){if(p===null){p=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,d=f.memoizedProps.style,i=d!=null&&d.hasOwnProperty("display")?d.display:null,l.style.display=$u("display",i))}catch(h){_e(e,e.return,h)}}}else if(f.tag===6){if(p===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(h){_e(e,e.return,h)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;p===f&&(p=null),f=f.return}p===f&&(p=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:vn(n,e),Sn(e),a&4&&vd(e);break;case 21:break;default:vn(n,e),Sn(e)}}function Sn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(sf(t)){var a=t;break e}t=t.return}throw Error(G(160))}switch(a.tag){case 5:var r=a.stateNode;a.flags&32&&(nr(r,""),a.flags&=-33);var s=xd(e);Zi(e,s,r);break;case 3:case 4:var i=a.stateNode.containerInfo,l=xd(e);Wi(e,l,i);break;default:throw Error(G(161))}}catch(d){_e(e,e.return,d)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function c0(e,n,t){W=e,df(e)}function df(e,n,t){for(var a=(e.mode&1)!==0;W!==null;){var r=W,s=r.child;if(r.tag===22&&a){var i=r.memoizedState!==null||Zr;if(!i){var l=r.alternate,d=l!==null&&l.memoizedState!==null||Oe;l=Zr;var u=Oe;if(Zr=i,(Oe=d)&&!u)for(W=r;W!==null;)i=W,d=i.child,i.tag===22&&i.memoizedState!==null?_d(r):d!==null?(d.return=i,W=d):_d(r);for(;s!==null;)W=s,df(s),s=s.sibling;W=r,Zr=l,Oe=u}bd(e)}else r.subtreeFlags&8772&&s!==null?(s.return=r,W=s):bd(e)}}function bd(e){for(;W!==null;){var n=W;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Oe||ps(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!Oe)if(t===null)a.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:bn(n.type,t.memoizedProps);a.componentDidUpdate(r,t.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var s=n.updateQueue;s!==null&&ad(n,s,a);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}ad(n,i,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var d=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&t.focus();break;case"img":d.src&&(t.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var f=p.dehydrated;f!==null&&or(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(G(163))}Oe||n.flags&512&&Ui(n)}catch(g){_e(n,n.return,g)}}if(n===e){W=null;break}if(t=n.sibling,t!==null){t.return=n.return,W=t;break}W=n.return}}function yd(e){for(;W!==null;){var n=W;if(n===e){W=null;break}var t=n.sibling;if(t!==null){t.return=n.return,W=t;break}W=n.return}}function _d(e){for(;W!==null;){var n=W;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ps(4,n)}catch(d){_e(n,t,d)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var r=n.return;try{a.componentDidMount()}catch(d){_e(n,r,d)}}var s=n.return;try{Ui(n)}catch(d){_e(n,s,d)}break;case 5:var i=n.return;try{Ui(n)}catch(d){_e(n,i,d)}}}catch(d){_e(n,n.return,d)}if(n===e){W=null;break}var l=n.sibling;if(l!==null){l.return=n.return,W=l;break}W=n.return}}var d0=Math.ceil,Lo=Un.ReactCurrentDispatcher,Wl=Un.ReactCurrentOwner,pn=Un.ReactCurrentBatchConfig,ae=0,De=null,Se=null,Ae=0,en=0,na=mt(0),Te=0,hr=null,Ct=0,fs=0,Zl=0,Ya=null,Ue=null,Yl=0,va=1/0,Vn=null,Oo=!1,Yi=null,lt=null,Yr=!1,tt=null,Ko=0,Xa=0,Xi=null,go=-1,ho=0;function Be(){return ae&6?ke():go!==-1?go:go=ke()}function ct(e){return e.mode&1?ae&2&&Ae!==0?Ae&-Ae:Ug.transition!==null?(ho===0&&(ho=Uu()),ho):(e=ce,e!==0||(e=window.event,e=e===void 0?16:ep(e.type)),e):1}function kn(e,n,t,a){if(50<Xa)throw Xa=0,Xi=null,Error(G(185));Sr(e,t,a),(!(ae&2)||e!==De)&&(e===De&&(!(ae&2)&&(fs|=t),Te===4&&qn(e,Ae)),Qe(e,a),t===1&&ae===0&&!(n.mode&1)&&(va=ke()+500,cs&&gt()))}function Qe(e,n){var t=e.callbackNode;Um(e,n);var a=jo(e,e===De?Ae:0);if(a===0)t!==null&&Tc(t),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(t!=null&&Tc(t),n===1)e.tag===0?Hg(Id.bind(null,e)):bp(Id.bind(null,e)),Jg(function(){!(ae&6)&&gt()}),t=null;else{switch(Wu(a)){case 1:t=Il;break;case 4:t=Gu;break;case 16:t=ko;break;case 536870912:t=Hu;break;default:t=ko}t=vf(t,uf.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function uf(e,n){if(go=-1,ho=0,ae&6)throw Error(G(327));var t=e.callbackNode;if(ca()&&e.callbackNode!==t)return null;var a=jo(e,e===De?Ae:0);if(a===0)return null;if(a&30||a&e.expiredLanes||n)n=Jo(e,a);else{n=a;var r=ae;ae|=2;var s=ff();(De!==e||Ae!==n)&&(Vn=null,va=ke()+500,It(e,n));do try{f0();break}catch(l){pf(e,l)}while(!0);Al(),Lo.current=s,ae=r,Se!==null?n=0:(De=null,Ae=0,n=Te)}if(n!==0){if(n===2&&(r=ji(e),r!==0&&(a=r,n=Qi(e,r))),n===1)throw t=hr,It(e,0),qn(e,a),Qe(e,ke()),t;if(n===6)qn(e,a);else{if(r=e.current.alternate,!(a&30)&&!u0(r)&&(n=Jo(e,a),n===2&&(s=ji(e),s!==0&&(a=s,n=Qi(e,s))),n===1))throw t=hr,It(e,0),qn(e,a),Qe(e,ke()),t;switch(e.finishedWork=r,e.finishedLanes=a,n){case 0:case 1:throw Error(G(345));case 2:vt(e,Ue,Vn);break;case 3:if(qn(e,a),(a&130023424)===a&&(n=Yl+500-ke(),10<n)){if(jo(e,0)!==0)break;if(r=e.suspendedLanes,(r&a)!==a){Be(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Di(vt.bind(null,e,Ue,Vn),n);break}vt(e,Ue,Vn);break;case 4:if(qn(e,a),(a&4194240)===a)break;for(n=e.eventTimes,r=-1;0<a;){var i=31-In(a);s=1<<i,i=n[i],i>r&&(r=i),a&=~s}if(a=r,a=ke()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*d0(a/1960))-a,10<a){e.timeoutHandle=Di(vt.bind(null,e,Ue,Vn),a);break}vt(e,Ue,Vn);break;case 5:vt(e,Ue,Vn);break;default:throw Error(G(329))}}}return Qe(e,ke()),e.callbackNode===t?uf.bind(null,e):null}function Qi(e,n){var t=Ya;return e.current.memoizedState.isDehydrated&&(It(e,n).flags|=256),e=Jo(e,n),e!==2&&(n=Ue,Ue=t,n!==null&&qi(n)),e}function qi(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function u0(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var a=0;a<t.length;a++){var r=t[a],s=r.getSnapshot;r=r.value;try{if(!wn(s(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qn(e,n){for(n&=~Zl,n&=~fs,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-In(n),a=1<<t;e[t]=-1,n&=~a}}function Id(e){if(ae&6)throw Error(G(327));ca();var n=jo(e,0);if(!(n&1))return Qe(e,ke()),null;var t=Jo(e,n);if(e.tag!==0&&t===2){var a=ji(e);a!==0&&(n=a,t=Qi(e,a))}if(t===1)throw t=hr,It(e,0),qn(e,n),Qe(e,ke()),t;if(t===6)throw Error(G(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,vt(e,Ue,Vn),Qe(e,ke()),null}function Xl(e,n){var t=ae;ae|=1;try{return e(n)}finally{ae=t,ae===0&&(va=ke()+500,cs&&gt())}}function Nt(e){tt!==null&&tt.tag===0&&!(ae&6)&&ca();var n=ae;ae|=1;var t=pn.transition,a=ce;try{if(pn.transition=null,ce=1,e)return e()}finally{ce=a,pn.transition=t,ae=n,!(ae&6)&&gt()}}function Ql(){en=na.current,me(na)}function It(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Kg(t)),Se!==null)for(t=Se.return;t!==null;){var a=t;switch(Dl(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Mo();break;case 3:ha(),me(Ye),me(Ke),Kl();break;case 5:Ol(a);break;case 4:ha();break;case 13:me(xe);break;case 19:me(xe);break;case 10:Vl(a.type._context);break;case 22:case 23:Ql()}t=t.return}if(De=e,Se=e=dt(e.current,null),Ae=en=n,Te=0,hr=null,Zl=fs=Ct=0,Ue=Ya=null,yt!==null){for(n=0;n<yt.length;n++)if(t=yt[n],a=t.interleaved,a!==null){t.interleaved=null;var r=a.next,s=t.pending;if(s!==null){var i=s.next;s.next=r,a.next=i}t.pending=a}yt=null}return e}function pf(e,n){do{var t=Se;try{if(Al(),po.current=Ro,Po){for(var a=ve.memoizedState;a!==null;){var r=a.queue;r!==null&&(r.pending=null),a=a.next}Po=!1}if(St=0,Ee=Ce=ve=null,Wa=!1,fr=0,Wl.current=null,t===null||t.return===null){Te=1,hr=n,Se=null;break}e:{var s=e,i=t.return,l=t,d=n;if(n=Ae,l.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var u=d,p=l,f=p.tag;if(!(p.mode&1)&&(f===0||f===11||f===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=cd(i);if(x!==null){x.flags&=-257,dd(x,i,l,s,n),x.mode&1&&ld(s,u,n),n=x,d=u;var m=n.updateQueue;if(m===null){var h=new Set;h.add(d),n.updateQueue=h}else m.add(d);break e}else{if(!(n&1)){ld(s,u,n),ql();break e}d=Error(G(426))}}else if(he&&l.mode&1){var _=cd(i);if(_!==null){!(_.flags&65536)&&(_.flags|=256),dd(_,i,l,s,n),zl(xa(d,l));break e}}s=d=xa(d,l),Te!==4&&(Te=2),Ya===null?Ya=[s]:Ya.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,n&=-n,s.lanes|=n;var b=Wp(s,d,n);td(s,b);break e;case 1:l=d;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(lt===null||!lt.has(y)))){s.flags|=65536,n&=-n,s.lanes|=n;var w=Zp(s,l,n);td(s,w);break e}}s=s.return}while(s!==null)}gf(t)}catch(T){n=T,Se===t&&t!==null&&(Se=t=t.return);continue}break}while(!0)}function ff(){var e=Lo.current;return Lo.current=Ro,e===null?Ro:e}function ql(){(Te===0||Te===3||Te===2)&&(Te=4),De===null||!(Ct&268435455)&&!(fs&268435455)||qn(De,Ae)}function Jo(e,n){var t=ae;ae|=2;var a=ff();(De!==e||Ae!==n)&&(Vn=null,It(e,n));do try{p0();break}catch(r){pf(e,r)}while(!0);if(Al(),ae=t,Lo.current=a,Se!==null)throw Error(G(261));return De=null,Ae=0,Te}function p0(){for(;Se!==null;)mf(Se)}function f0(){for(;Se!==null&&!Rm();)mf(Se)}function mf(e){var n=xf(e.alternate,e,en);e.memoizedProps=e.pendingProps,n===null?gf(e):Se=n,Wl.current=null}function gf(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=s0(t,n),t!==null){t.flags&=32767,Se=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Te=6,Se=null;return}}else if(t=o0(t,n,en),t!==null){Se=t;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=e}while(n!==null);Te===0&&(Te=5)}function vt(e,n,t){var a=ce,r=pn.transition;try{pn.transition=null,ce=1,m0(e,n,t,a)}finally{pn.transition=r,ce=a}return null}function m0(e,n,t,a){do ca();while(tt!==null);if(ae&6)throw Error(G(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(G(177));e.callbackNode=null,e.callbackPriority=0;var s=t.lanes|t.childLanes;if(Wm(e,s),e===De&&(Se=De=null,Ae=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Yr||(Yr=!0,vf(ko,function(){return ca(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=pn.transition,pn.transition=null;var i=ce;ce=1;var l=ae;ae|=4,Wl.current=null,l0(e,t),cf(t,e),$g(Ti),wo=!!Mi,Ti=Mi=null,e.current=t,c0(t),Lm(),ae=l,ce=i,pn.transition=s}else e.current=t;if(Yr&&(Yr=!1,tt=e,Ko=r),s=e.pendingLanes,s===0&&(lt=null),Jm(t.stateNode),Qe(e,ke()),n!==null)for(a=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],a(r.value,{componentStack:r.stack,digest:r.digest});if(Oo)throw Oo=!1,e=Yi,Yi=null,e;return Ko&1&&e.tag!==0&&ca(),s=e.pendingLanes,s&1?e===Xi?Xa++:(Xa=0,Xi=e):Xa=0,gt(),null}function ca(){if(tt!==null){var e=Wu(Ko),n=pn.transition,t=ce;try{if(pn.transition=null,ce=16>e?16:e,tt===null)var a=!1;else{if(e=tt,tt=null,Ko=0,ae&6)throw Error(G(331));var r=ae;for(ae|=4,W=e.current;W!==null;){var s=W,i=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var d=0;d<l.length;d++){var u=l[d];for(W=u;W!==null;){var p=W;switch(p.tag){case 0:case 11:case 15:Za(8,p,s)}var f=p.child;if(f!==null)f.return=p,W=f;else for(;W!==null;){p=W;var g=p.sibling,x=p.return;if(of(p),p===u){W=null;break}if(g!==null){g.return=x,W=g;break}W=x}}}var m=s.alternate;if(m!==null){var h=m.child;if(h!==null){m.child=null;do{var _=h.sibling;h.sibling=null,h=_}while(h!==null)}}W=s}}if(s.subtreeFlags&2064&&i!==null)i.return=s,W=i;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Za(9,s,s.return)}var b=s.sibling;if(b!==null){b.return=s.return,W=b;break e}W=s.return}}var v=e.current;for(W=v;W!==null;){i=W;var y=i.child;if(i.subtreeFlags&2064&&y!==null)y.return=i,W=y;else e:for(i=v;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ps(9,l)}}catch(T){_e(l,l.return,T)}if(l===i){W=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,W=w;break e}W=l.return}}if(ae=r,gt(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(rs,e)}catch{}a=!0}return a}finally{ce=t,pn.transition=n}}return!1}function kd(e,n,t){n=xa(t,n),n=Wp(e,n,1),e=it(e,n,1),n=Be(),e!==null&&(Sr(e,1,n),Qe(e,n))}function _e(e,n,t){if(e.tag===3)kd(e,e,t);else for(;n!==null;){if(n.tag===3){kd(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(lt===null||!lt.has(a))){e=xa(t,e),e=Zp(n,e,1),n=it(n,e,1),e=Be(),n!==null&&(Sr(n,1,e),Qe(n,e));break}}n=n.return}}function g0(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),n=Be(),e.pingedLanes|=e.suspendedLanes&t,De===e&&(Ae&t)===t&&(Te===4||Te===3&&(Ae&130023424)===Ae&&500>ke()-Yl?It(e,0):Zl|=t),Qe(e,n)}function hf(e,n){n===0&&(e.mode&1?(n=Or,Or<<=1,!(Or&130023424)&&(Or=4194304)):n=1);var t=Be();e=Gn(e,n),e!==null&&(Sr(e,n,t),Qe(e,t))}function h0(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),hf(e,t)}function x0(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(G(314))}a!==null&&a.delete(n),hf(e,t)}var xf;xf=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ye.current)We=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return We=!1,r0(e,n,t);We=!!(e.flags&131072)}else We=!1,he&&n.flags&1048576&&yp(n,Do,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;mo(e,n),e=n.pendingProps;var r=fa(n,Ke.current);la(n,t),r=Bl(null,n,a,e,r,t);var s=Fl();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Xe(a)?(s=!0,To(n)):s=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Rl(n),r.updater=us,n.stateNode=r,r._reactInternals=n,Li(n,a,e,t),n=Ji(null,n,a,!0,s,t)):(n.tag=0,he&&s&&El(n),Je(null,n,r,t),n=n.child),n;case 16:a=n.elementType;e:{switch(mo(e,n),e=n.pendingProps,r=a._init,a=r(a._payload),n.type=a,r=n.tag=b0(a),e=bn(a,e),r){case 0:n=Ki(null,n,a,e,t);break e;case 1:n=fd(null,n,a,e,t);break e;case 11:n=ud(null,n,a,e,t);break e;case 14:n=pd(null,n,a,bn(a.type,e),t);break e}throw Error(G(306,a,""))}return n;case 0:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:bn(a,r),Ki(e,n,a,r,t);case 1:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:bn(a,r),fd(e,n,a,r,t);case 3:e:{if(qp(n),e===null)throw Error(G(387));a=n.pendingProps,s=n.memoizedState,r=s.element,Sp(e,n),Ao(n,a,null,t);var i=n.memoizedState;if(a=i.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){r=xa(Error(G(423)),n),n=md(e,n,a,t,r);break e}else if(a!==r){r=xa(Error(G(424)),n),n=md(e,n,a,t,r);break e}else for(tn=st(n.stateNode.containerInfo.firstChild),an=n,he=!0,_n=null,t=jp(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ma(),a===r){n=Hn(e,n,t);break e}Je(e,n,a,t)}n=n.child}return n;case 5:return Cp(n),e===null&&Vi(n),a=n.type,r=n.pendingProps,s=e!==null?e.memoizedProps:null,i=r.children,Ei(a,r)?i=null:s!==null&&Ei(a,s)&&(n.flags|=32),Qp(e,n),Je(e,n,i,t),n.child;case 6:return e===null&&Vi(n),null;case 13:return ef(e,n,t);case 4:return Ll(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=ga(n,null,a,t):Je(e,n,a,t),n.child;case 11:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:bn(a,r),ud(e,n,a,r,t);case 7:return Je(e,n,n.pendingProps,t),n.child;case 8:return Je(e,n,n.pendingProps.children,t),n.child;case 12:return Je(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(a=n.type._context,r=n.pendingProps,s=n.memoizedProps,i=r.value,pe(zo,a._currentValue),a._currentValue=i,s!==null)if(wn(s.value,i)){if(s.children===r.children&&!Ye.current){n=Hn(e,n,t);break e}}else for(s=n.child,s!==null&&(s.return=n);s!==null;){var l=s.dependencies;if(l!==null){i=s.child;for(var d=l.firstContext;d!==null;){if(d.context===a){if(s.tag===1){d=Jn(-1,t&-t),d.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?d.next=d:(d.next=p.next,p.next=d),u.pending=d}}s.lanes|=t,d=s.alternate,d!==null&&(d.lanes|=t),Pi(s.return,t,n),l.lanes|=t;break}d=d.next}}else if(s.tag===10)i=s.type===n.type?null:s.child;else if(s.tag===18){if(i=s.return,i===null)throw Error(G(341));i.lanes|=t,l=i.alternate,l!==null&&(l.lanes|=t),Pi(i,t,n),i=s.sibling}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===n){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}Je(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,a=n.pendingProps.children,la(n,t),r=gn(r),a=a(r),n.flags|=1,Je(e,n,a,t),n.child;case 14:return a=n.type,r=bn(a,n.pendingProps),r=bn(a.type,r),pd(e,n,a,r,t);case 15:return Yp(e,n,n.type,n.pendingProps,t);case 17:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:bn(a,r),mo(e,n),n.tag=1,Xe(a)?(e=!0,To(n)):e=!1,la(n,t),Up(n,a,r),Li(n,a,r,t),Ji(null,n,a,!0,e,t);case 19:return nf(e,n,t);case 22:return Xp(e,n,t)}throw Error(G(156,n.tag))};function vf(e,n){return Fu(e,n)}function v0(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function un(e,n,t,a){return new v0(e,n,t,a)}function ec(e){return e=e.prototype,!(!e||!e.isReactComponent)}function b0(e){if(typeof e=="function")return ec(e)?1:0;if(e!=null){if(e=e.$$typeof,e===bl)return 11;if(e===yl)return 14}return 2}function dt(e,n){var t=e.alternate;return t===null?(t=un(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function xo(e,n,t,a,r,s){var i=2;if(a=e,typeof e=="function")ec(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Gt:return kt(t.children,r,s,n);case vl:i=8,r|=8;break;case ci:return e=un(12,t,n,r|2),e.elementType=ci,e.lanes=s,e;case di:return e=un(13,t,n,r),e.elementType=di,e.lanes=s,e;case ui:return e=un(19,t,n,r),e.elementType=ui,e.lanes=s,e;case Cu:return ms(t,r,s,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wu:i=10;break e;case Su:i=9;break e;case bl:i=11;break e;case yl:i=14;break e;case Yn:i=16,a=null;break e}throw Error(G(130,e==null?e:typeof e,""))}return n=un(i,t,n,r),n.elementType=e,n.type=a,n.lanes=s,n}function kt(e,n,t,a){return e=un(7,e,a,n),e.lanes=t,e}function ms(e,n,t,a){return e=un(22,e,a,n),e.elementType=Cu,e.lanes=t,e.stateNode={isHidden:!1},e}function Xs(e,n,t){return e=un(6,e,null,n),e.lanes=t,e}function Qs(e,n,t){return n=un(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function y0(e,n,t,a,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ds(0),this.expirationTimes=Ds(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ds(0),this.identifierPrefix=a,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function nc(e,n,t,a,r,s,i,l,d){return e=new y0(e,n,t,l,d),n===1?(n=1,s===!0&&(n|=8)):n=0,s=un(3,null,null,n),e.current=s,s.stateNode=e,s.memoizedState={element:a,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rl(s),e}function _0(e,n,t){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ft,key:a==null?null:""+a,children:e,containerInfo:n,implementation:t}}function bf(e){if(!e)return pt;e=e._reactInternals;e:{if($t(e)!==e||e.tag!==1)throw Error(G(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Xe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(G(171))}if(e.tag===1){var t=e.type;if(Xe(t))return vp(e,t,n)}return n}function yf(e,n,t,a,r,s,i,l,d){return e=nc(t,a,!0,e,r,s,i,l,d),e.context=bf(null),t=e.current,a=Be(),r=ct(t),s=Jn(a,r),s.callback=n??null,it(t,s,r),e.current.lanes=r,Sr(e,r,a),Qe(e,a),e}function gs(e,n,t,a){var r=n.current,s=Be(),i=ct(r);return t=bf(t),n.context===null?n.context=t:n.pendingContext=t,n=Jn(s,i),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=it(r,n,i),e!==null&&(kn(e,r,i,s),uo(e,r,i)),i}function Bo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function jd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function tc(e,n){jd(e,n),(e=e.alternate)&&jd(e,n)}function I0(){return null}var _f=typeof reportError=="function"?reportError:function(e){console.error(e)};function ac(e){this._internalRoot=e}hs.prototype.render=ac.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(G(409));gs(e,n,null,null)};hs.prototype.unmount=ac.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Nt(function(){gs(null,e,null,null)}),n[Fn]=null}};function hs(e){this._internalRoot=e}hs.prototype.unstable_scheduleHydration=function(e){if(e){var n=Xu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Qn.length&&n!==0&&n<Qn[t].priority;t++);Qn.splice(t,0,e),t===0&&qu(e)}};function rc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wd(){}function k0(e,n,t,a,r){if(r){if(typeof a=="function"){var s=a;a=function(){var u=Bo(i);s.call(u)}}var i=yf(n,a,e,0,null,!1,!1,"",wd);return e._reactRootContainer=i,e[Fn]=i.current,lr(e.nodeType===8?e.parentNode:e),Nt(),i}for(;r=e.lastChild;)e.removeChild(r);if(typeof a=="function"){var l=a;a=function(){var u=Bo(d);l.call(u)}}var d=nc(e,0,!1,null,null,!1,!1,"",wd);return e._reactRootContainer=d,e[Fn]=d.current,lr(e.nodeType===8?e.parentNode:e),Nt(function(){gs(n,d,t,a)}),d}function vs(e,n,t,a,r){var s=t._reactRootContainer;if(s){var i=s;if(typeof r=="function"){var l=r;r=function(){var d=Bo(i);l.call(d)}}gs(n,i,e,r)}else i=k0(t,n,e,r,a);return Bo(i)}Zu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ka(n.pendingLanes);t!==0&&(kl(n,t|1),Qe(n,ke()),!(ae&6)&&(va=ke()+500,gt()))}break;case 13:Nt(function(){var a=Gn(e,1);if(a!==null){var r=Be();kn(a,e,1,r)}}),tc(e,1)}};jl=function(e){if(e.tag===13){var n=Gn(e,134217728);if(n!==null){var t=Be();kn(n,e,134217728,t)}tc(e,134217728)}};Yu=function(e){if(e.tag===13){var n=ct(e),t=Gn(e,n);if(t!==null){var a=Be();kn(t,e,n,a)}tc(e,n)}};Xu=function(){return ce};Qu=function(e,n){var t=ce;try{return ce=e,n()}finally{ce=t}};_i=function(e,n,t){switch(n){case"input":if(mi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var r=ls(a);if(!r)throw Error(G(90));Mu(a),mi(a,r)}}}break;case"textarea":Eu(e,t);break;case"select":n=t.value,n!=null&&ra(e,!!t.multiple,n,!1)}};Ru=Xl;Lu=Nt;var j0={usingClientEntryPoint:!1,Events:[Nr,Zt,ls,Vu,Pu,Xl]},Va={findFiberByHostInstance:bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},w0={bundleType:Va.bundleType,version:Va.version,rendererPackageName:Va.rendererPackageName,rendererConfig:Va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Un.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ju(e),e===null?null:e.stateNode},findFiberByHostInstance:Va.findFiberByHostInstance||I0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xr.isDisabled&&Xr.supportsFiber)try{rs=Xr.inject(w0),Tn=Xr}catch{}}on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j0;on.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rc(n))throw Error(G(200));return _0(e,n,null,t)};on.createRoot=function(e,n){if(!rc(e))throw Error(G(299));var t=!1,a="",r=_f;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=nc(e,1,!1,null,null,t,!1,a,r),e[Fn]=n.current,lr(e.nodeType===8?e.parentNode:e),new ac(n)};on.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(G(188)):(e=Object.keys(e).join(","),Error(G(268,e)));return e=Ju(n),e=e===null?null:e.stateNode,e};on.flushSync=function(e){return Nt(e)};on.hydrate=function(e,n,t){if(!xs(n))throw Error(G(200));return vs(null,e,n,!0,t)};on.hydrateRoot=function(e,n,t){if(!rc(e))throw Error(G(405));var a=t!=null&&t.hydratedSources||null,r=!1,s="",i=_f;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=yf(n,null,e,1,t??null,r,!1,s,i),e[Fn]=n.current,lr(e),a)for(e=0;e<a.length;e++)t=a[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new hs(n)};on.render=function(e,n,t){if(!xs(n))throw Error(G(200));return vs(null,e,n,!1,t)};on.unmountComponentAtNode=function(e){if(!xs(e))throw Error(G(40));return e._reactRootContainer?(Nt(function(){vs(null,null,e,!1,function(){e._reactRootContainer=null,e[Fn]=null})}),!0):!1};on.unstable_batchedUpdates=Xl;on.unstable_renderSubtreeIntoContainer=function(e,n,t,a){if(!xs(t))throw Error(G(200));if(e==null||e._reactInternals===void 0)throw Error(G(38));return vs(e,n,t,!1,a)};on.version="18.3.1-next-f1338f8080-20240426";function If(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(If)}catch(e){console.error(e)}}If(),_u.exports=on;var Tr=_u.exports,Sd=Tr;ii.createRoot=Sd.createRoot,ii.hydrateRoot=Sd.hydrateRoot;const da=["player1","player2","player3","player4","player5","player6","player7","player8"];function S0(e,n){return e.players[n]}function C0(e,n,t){return{...e,players:{...e.players,[n]:t}}}function kf(e,n){const t=e.teams[n];return e.playerIds.filter(a=>a!==n&&e.teams[a]!==t&&!e.players[a].isDefeated)}function Ne(e){return`P${e.replace("player","")}`}const N0=[{id:"ag-1",unitDeckId:"AG",nameJa:"ランス",nameCn:"长枪",actionType:"melee",frontImageId:"cards/ag/ag-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"ag-2",unitDeckId:"AG",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ag/ag-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ag-3",unitDeckId:"AG",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ag/ag-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ag-4",unitDeckId:"AG",nameJa:"スモールレーザー",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/ag/ag-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2,isEnergyWeapon:!0},{id:"ag-5",unitDeckId:"AG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ag/ag-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"ag-6",unitDeckId:"AG",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ag/ag-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-7",unitDeckId:"AG",nameJa:"ランス",nameCn:"长枪",actionType:"melee",frontImageId:"cards/ag/ag-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"ag-8",unitDeckId:"AG",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ag/ag-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-9",unitDeckId:"AG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/ag/ag-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"ag-10",unitDeckId:"AG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ag-11",unitDeckId:"AG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/ag/ag-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"ag-12",unitDeckId:"AG",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ag/ag-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"ag-13",unitDeckId:"AG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ag-14",unitDeckId:"AG",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ag/ag-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-15",unitDeckId:"AG",nameJa:"バーニア",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/ag/ag-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ag-16",unitDeckId:"AG",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/ag/ag-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ag-17",unitDeckId:"AG",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/ag/ag-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ag-18",unitDeckId:"AG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ag-19",unitDeckId:"AG",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ag/ag-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-20",unitDeckId:"AG",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ag/ag-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-21",unitDeckId:"AG",nameJa:"バーニア",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/ag/ag-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"}],M0=[{id:"ar-1",unitDeckId:"AR",nameJa:"シールド",nameCn:"护盾",actionType:"armor",frontImageId:"cards/ar/ar-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止4点射击伤害。该卡在准备区时，可以将其破坏并防止4点任意伤害。",armorValue:4},{id:"ar-2",unitDeckId:"AR",nameJa:"アンカー",nameCn:"长锚",actionType:"ranged",frontImageId:"cards/ar/ar-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:1,rangeMax:3,damage:void 0,effectText:"射击前可以改变机甲的朝向。命中后，使攻击目标强制移动到自机面前，期间目标朝向不变。"},{id:"ar-3",unitDeckId:"AR",nameJa:"陸上機雷",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/ar/ar-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"在自机周围8格不重叠地设置机雷指示物和替身雷各2个。在各个时机结束时，检查是否有机甲位于指示物所在格。若有，将指示物翻开展示，如果是机雷的话对所在格中的机甲造成伤害，然后将指示物弃掉。"},{id:"ar-4",unitDeckId:"AR",nameJa:"陸上機雷",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/ar/ar-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"在自机周围8格不重叠地设置机雷指示物和替身雷各2个。在各个时机结束时，检查是否有机甲位于指示物所在格。若有，将指示物翻开展示，如果是机雷的话对所在格中的机甲造成伤害，然后将指示物弃掉。"},{id:"ar-5",unitDeckId:"AR",nameJa:"メイス",nameCn:"狼牙棒",actionType:"melee",frontImageId:"cards/ar/ar-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ar-6",unitDeckId:"AR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ar/ar-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ar-7",unitDeckId:"AR",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ar-8",unitDeckId:"AR",nameJa:"移動６",nameCn:"移动6",actionType:"movement",frontImageId:"cards/ar/ar-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:6,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-9",unitDeckId:"AR",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ar/ar-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"ar-10",unitDeckId:"AR",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/ar/ar-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ar-11",unitDeckId:"AR",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ar-12",unitDeckId:"AR",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/ar/ar-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ar-13",unitDeckId:"AR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ar/ar-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ar-14",unitDeckId:"AR",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ar-15",unitDeckId:"AR",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ar/ar-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-16",unitDeckId:"AR",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ar/ar-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-17",unitDeckId:"AR",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ar/ar-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-18",unitDeckId:"AR",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ar/ar-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-19",unitDeckId:"AR",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ar/ar-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-20",unitDeckId:"AR",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ar/ar-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"}],T0=[{id:"bg-1",unitDeckId:"BG",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4,hasBombIcon:!0},{id:"bg-2",unitDeckId:"BG",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4,hasBombIcon:!0},{id:"bg-3",unitDeckId:"BG",nameJa:"ミドルレーザ",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/bg/bg-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3},{id:"bg-4",unitDeckId:"BG",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4,hasBombIcon:!0},{id:"bg-5",unitDeckId:"BG",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/bg/bg-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"bg-6",unitDeckId:"BG",nameJa:"スモールレーザ",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/bg/bg-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2},{id:"bg-7",unitDeckId:"BG",nameJa:"スナイパーライフル",nameCn:"狙击步枪",actionType:"ranged",frontImageId:"cards/bg/bg-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3,hasBombIcon:!0},{id:"bg-8",unitDeckId:"BG",nameJa:"スナイパーライフル",nameCn:"狙击步枪",actionType:"ranged",frontImageId:"cards/bg/bg-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3,hasBombIcon:!0},{id:"bg-9",unitDeckId:"BG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/bg/bg-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"bg-10",unitDeckId:"BG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/bg/bg-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"bg-11",unitDeckId:"BG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/bg/bg-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"bg-12",unitDeckId:"BG",nameJa:"スモールレーザ",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/bg/bg-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2},{id:"bg-13",unitDeckId:"BG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/bg/bg-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"bg-14",unitDeckId:"BG",nameJa:"ミドルレーザ",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/bg/bg-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3},{id:"bg-15",unitDeckId:"BG",nameJa:"スナイパーライフル",nameCn:"狙击步枪",actionType:"ranged",frontImageId:"cards/bg/bg-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3,hasBombIcon:!0},{id:"bg-16",unitDeckId:"BG",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/bg/bg-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"bg-17",unitDeckId:"BG",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/bg/bg-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"bg-18",unitDeckId:"BG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/bg/bg-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"bg-19",unitDeckId:"BG",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/bg/bg-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg-20",unitDeckId:"BG",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/bg/bg-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg-21",unitDeckId:"BG",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/bg/bg-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg-22",unitDeckId:"BG",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/bg/bg-22-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"bg-23",unitDeckId:"BG",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/bg/bg-23-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"}],E0=[{id:"ho-1",unitDeckId:"HO",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ho/ho-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-2",unitDeckId:"HO",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ho/ho-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-3",unitDeckId:"HO",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ho/ho-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-4",unitDeckId:"HO",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ho/ho-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-5",unitDeckId:"HO",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ho/ho-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"ho-6",unitDeckId:"HO",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ho/ho-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"ho-7",unitDeckId:"HO",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ho/ho-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ho-8",unitDeckId:"HO",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ho/ho-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-9",unitDeckId:"HO",nameJa:"移動６",nameCn:"移动6",actionType:"movement",frontImageId:"cards/ho/ho-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:6,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-10",unitDeckId:"HO",nameJa:"移動７",nameCn:"移动7",actionType:"movement",frontImageId:"cards/ho/ho-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:7,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-11",unitDeckId:"HO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ho/ho-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ho-12",unitDeckId:"HO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ho/ho-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ho-13",unitDeckId:"HO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/ho/ho-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"ho-14",unitDeckId:"HO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/ho/ho-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"ho-15",unitDeckId:"HO",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ho/ho-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ho-16",unitDeckId:"HO",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/ho/ho-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"ho-17",unitDeckId:"HO",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/ho/ho-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"}],D0=[{id:"hy-1",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-2",unitDeckId:"HY",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-3",unitDeckId:"HY",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-4",unitDeckId:"HY",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-5",unitDeckId:"HY",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-6",unitDeckId:"HY",nameJa:"ガトリングガン",nameCn:"加特林",actionType:"ranged",frontImageId:"cards/hy/hy-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:5,damage:3,hasBombIcon:!0},{id:"hy-7",unitDeckId:"HY",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-8",unitDeckId:"HY",nameJa:"ガトリングガン",nameCn:"加特林",actionType:"ranged",frontImageId:"cards/hy/hy-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:5,damage:3,hasBombIcon:!0},{id:"hy-9",unitDeckId:"HY",nameJa:"ホイール",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/hy/hy-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"hy-10",unitDeckId:"HY",nameJa:"ホイール",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/hy/hy-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"hy-11",unitDeckId:"HY",nameJa:"スパイク",nameCn:"长钉",actionType:"charge",frontImageId:"cards/hy/hy-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"不进行突击移动，选择自机正面的机甲为攻击目标。对对方造成自机突击伤害+1的近战伤害。对自机造成对方被突击伤害-1的近战伤害。"},{id:"hy-12",unitDeckId:"HY",nameJa:"シールド",nameCn:"护盾",actionType:"armor",frontImageId:"cards/hy/hy-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止4点射击伤害。该卡在准备区时，可以将其破坏并防止4点任意伤害。",armorValue:4},{id:"hy-13",unitDeckId:"HY",nameJa:"シールド",nameCn:"护盾",actionType:"armor",frontImageId:"cards/hy/hy-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止4点射击伤害。该卡在准备区时，可以将其破坏并防止4点任意伤害。",armorValue:4},{id:"hy-14",unitDeckId:"HY",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/hy/hy-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"hy-15",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-16",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-17",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-18",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-19",unitDeckId:"HY",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/hy/hy-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"hy-20",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-21",unitDeckId:"HY",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/hy/hy-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"hy-22",unitDeckId:"HY",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/hy/hy-22-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"hy-23",unitDeckId:"HY",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/hy/hy-23-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"hy-24",unitDeckId:"HY",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-24-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0}],z0=[{id:"lg-1",unitDeckId:"LG",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/lg/lg-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-2",unitDeckId:"LG",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/lg/lg-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-3",unitDeckId:"LG",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/lg/lg-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-4",unitDeckId:"LG",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/lg/lg-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-5",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-6",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-7",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-8",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-9",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-10",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-11",unitDeckId:"LG",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/lg/lg-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"lg-12",unitDeckId:"LG",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/lg/lg-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"lg-13",unitDeckId:"LG",nameJa:"スパイク",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/lg/lg-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"lg-14",unitDeckId:"LG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/lg/lg-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"lg-15",unitDeckId:"LG",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/lg/lg-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"lg-16",unitDeckId:"LG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/lg/lg-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"lg-17",unitDeckId:"LG",nameJa:"パイルバンカー",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/lg/lg-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"lg-18",unitDeckId:"LG",nameJa:"パイルバンカー",nameCn:"长钉",actionType:"charge",frontImageId:"cards/lg/lg-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"不进行突击移动，选择自机正面的机甲为攻击目标。对对方造成自机突击伤害+1的近战伤害。对自机造成对方被突击伤害-1的近战伤害。"},{id:"lg-19",unitDeckId:"LG",nameJa:"クロー",nameCn:"爪",actionType:"melee",frontImageId:"cards/lg/lg-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:2,effectText:"（结算伤害前）如果攻击目标的手牌、辅助区、准备区中有类别包括“装甲”的卡牌，选择其中两张破坏。"},{id:"lg-20",unitDeckId:"LG",nameJa:"クロー",nameCn:"爪",actionType:"melee",frontImageId:"cards/lg/lg-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:2,effectText:"（结算伤害前）如果攻击目标的手牌、辅助区、准备区中有类别包括“装甲”的卡牌，选择其中两张破坏。"},{id:"lg-21",unitDeckId:"LG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/lg/lg-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"lg-22",unitDeckId:"LG",nameJa:"ホイール",nameCn:"滑轮",actionType:"auxiliary",frontImageId:"cards/lg/lg-22-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:○、近战:×。使用后移动力+2。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"lg-23",unitDeckId:"LG",nameJa:"ホイール",nameCn:"滑轮",actionType:"auxiliary",frontImageId:"cards/lg/lg-23-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:○、近战:×。使用后移动力+2。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"}],$0=[{id:"lo-1",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-2",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-3",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-4",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-5",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-6",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-7",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-8",unitDeckId:"LO",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/lo/lo-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"lo-9",unitDeckId:"LO",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/lo/lo-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"lo-10",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-11",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-12",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-13",unitDeckId:"LO",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/lo/lo-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-14",unitDeckId:"LO",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/lo/lo-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-15",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-16",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-17",unitDeckId:"LO",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/lo/lo-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-18",unitDeckId:"LO",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/lo/lo-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-19",unitDeckId:"LO",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/lo/lo-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-20",unitDeckId:"LO",nameJa:"スモールレーザー",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/lo/lo-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2,isEnergyWeapon:!0}],A0=[{id:"tr-1",unitDeckId:"TR",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/tr/tr-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-2",unitDeckId:"TR",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/tr/tr-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-3",unitDeckId:"TR",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/tr/tr-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-4",unitDeckId:"TR",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/tr/tr-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-5",unitDeckId:"TR",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/tr/tr-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-6",unitDeckId:"TR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/tr/tr-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"tr-7",unitDeckId:"TR",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/tr/tr-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"tr-8",unitDeckId:"TR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/tr/tr-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"tr-9",unitDeckId:"TR",nameJa:"移動６",nameCn:"移动6",actionType:"movement",frontImageId:"cards/tr/tr-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:6,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-10",unitDeckId:"TR",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/tr/tr-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"tr-11",unitDeckId:"TR",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/tr/tr-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"tr-12",unitDeckId:"TR",nameJa:"アクス",nameCn:"斧头",actionType:"melee",frontImageId:"cards/tr/tr-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"tr-13",unitDeckId:"TR",nameJa:"アクス",nameCn:"斧头",actionType:"melee",frontImageId:"cards/tr/tr-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"tr-14",unitDeckId:"TR",nameJa:"パイルバンカー",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/tr/tr-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"tr-15",unitDeckId:"TR",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/tr/tr-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"tr-16",unitDeckId:"TR",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/tr/tr-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"tr-17",unitDeckId:"TR",nameJa:"パイルバンカー",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/tr/tr-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"tr-18",unitDeckId:"TR",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/tr/tr-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"tr-19",unitDeckId:"TR",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/tr/tr-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0}],V0=[{id:"zb-1",unitDeckId:"ZB",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ag/ag-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-2",unitDeckId:"ZB",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ag/ag-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-3",unitDeckId:"ZB",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ag/ag-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-4",unitDeckId:"ZB",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ag/ag-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-5",unitDeckId:"ZB",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ag/ag-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-6",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-7",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-8",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-9",unitDeckId:"ZB",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ag/ag-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-10",unitDeckId:"ZB",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ag/ag-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-11",unitDeckId:"ZB",nameJa:"ムーブセンサー",nameCn:"移动感应器",actionType:"auxiliary",frontImageId:"cards/ho/ho-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-12",unitDeckId:"ZB",nameJa:"ムーブセンサー",nameCn:"移动感应器",actionType:"auxiliary",frontImageId:"cards/ho/ho-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-13",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-14",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-15",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-16",unitDeckId:"ZB",nameJa:"ラージレーザー",nameCn:"大口径激光",actionType:"ranged",frontImageId:"cards/bg/bg-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"zb-17",unitDeckId:"ZB",nameJa:"ブレード",nameCn:"剑",actionType:"melee",frontImageId:"cards/zb/zb-17-front.png",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"zb-18",unitDeckId:"ZB",nameJa:"バルカン",nameCn:"火神炮",actionType:"ranged",frontImageId:"cards/zb/zb-18-front.png",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:2,damage:2},{id:"zb-19",unitDeckId:"ZB",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ag/ag-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-20",unitDeckId:"ZB",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ag/ag-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-21",unitDeckId:"ZB",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4},{id:"zb-22",unitDeckId:"ZB",nameJa:"ラージレーザー",nameCn:"大口径激光",actionType:"ranged",frontImageId:"cards/bg/bg-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"zb-23",unitDeckId:"ZB",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4}],P0=[{id:"ag_plus-1",unitDeckId:"AG+",nameJa:"コルセスカ",nameCn:"长柄三叉矛",actionType:"melee",frontImageId:"cards/ag_plus/ag_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ag_plus-2",unitDeckId:"AG+",nameJa:"コルセスカ",nameCn:"长柄三叉矛",actionType:"melee",frontImageId:"cards/ag_plus/ag_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ag_plus-3",unitDeckId:"AG+",nameJa:"ネット",nameCn:"网",actionType:"ranged",frontImageId:"cards/ag_plus/ag_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:5,damage:void 0},{id:"ag_plus-4",unitDeckId:"AG+",nameJa:"ボーラ",nameCn:"投石索",actionType:"ranged",frontImageId:"cards/ag_plus/ag_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:4,damage:void 0},{id:"ag_plus-5",unitDeckId:"AG+",nameJa:"バルカン",nameCn:"火神炮",actionType:"ranged",frontImageId:"cards/ag_plus/ag_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:2,damage:2}],R0=[{id:"ar_plus-1",unitDeckId:"AR+",nameJa:"ウォーハンマー",nameCn:"战锤",actionType:"melee",frontImageId:"cards/ar_plus/ar_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"ar_plus-2",unitDeckId:"AR+",nameJa:"強化機雷",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/ar_plus/ar_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,hasBombIcon:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"ar_plus-3",unitDeckId:"AR+",nameJa:"ロングアンカー",nameCn:"长锚",actionType:"ranged",frontImageId:"cards/ar_plus/ar_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:4,damage:1},{id:"ar_plus-4",unitDeckId:"AR+",nameJa:"強化機雷",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/ar_plus/ar_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,hasBombIcon:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5}],L0=[{id:"bg_plus-1",unitDeckId:"BG+",nameJa:"自爆装置",nameCn:"自爆装置",actionType:"mine",frontImageId:"cards/bg_plus/bg_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,hasBombIcon:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg_plus-2",unitDeckId:"BG+",nameJa:"大口径ロケット砲",nameCn:"大口径火箭炮",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:5},{id:"bg_plus-3",unitDeckId:"BG+",nameJa:"大口径ロケット砲",nameCn:"大口径火箭炮",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:5},{id:"bg_plus-4",unitDeckId:"BG+",nameJa:"高品質ライフル",nameCn:"高品质步枪",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3},{id:"bg_plus-5",unitDeckId:"BG+",nameJa:"スモークミサイル",nameCn:"烟雾导弹",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:5,damage:void 0}],O0=[{id:"ho_plus-1",unitDeckId:"HO+",nameJa:"スタンウィップ",nameCn:"电击鞭",actionType:"melee",frontImageId:"cards/ho_plus/ho_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:1},{id:"ho_plus-2",unitDeckId:"HO+",nameJa:"チェーンブレード",nameCn:"链锯剑",actionType:"melee",frontImageId:"cards/ho_plus/ho_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ho_plus-3",unitDeckId:"HO+",nameJa:"高品質ロケット砲",nameCn:"高品质火箭炮",actionType:"ranged",frontImageId:"cards/ho_plus/ho_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4},{id:"ho_plus-4",unitDeckId:"HO+",nameJa:"火炎放射器",nameCn:"火焰喷射器",actionType:"ranged",frontImageId:"cards/ho_plus/ho_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2}],K0=[{id:"hy_plus-1",unitDeckId:"HY+",nameJa:"ショットガン",nameCn:"散弹枪",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:3,damage:4},{id:"hy_plus-2",unitDeckId:"HY+",nameJa:"ショットガン",nameCn:"散弹枪",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:3,damage:4},{id:"hy_plus-3",unitDeckId:"HY+",nameJa:"ガトリングカノン",nameCn:"加特林炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:4},{id:"hy_plus-4",unitDeckId:"HY+",nameJa:"ガトリングカノン",nameCn:"加特林炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:4},{id:"hy_plus-5",unitDeckId:"HY+",nameJa:"ガトリングカノン",nameCn:"加特林炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:4},{id:"hy_plus-6",unitDeckId:"HY+",nameJa:"ミサイルシールド",nameCn:"导弹盾",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3},{id:"hy_plus-7",unitDeckId:"HY+",nameJa:"高品質ロケット砲",nameCn:"高品质火箭炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4},{id:"hy_plus-8",unitDeckId:"HY+",nameJa:"ミサイルシールド",nameCn:"导弹盾",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3}],J0=[{id:"lg_plus-1",unitDeckId:"LG+",nameJa:"ヒートクロー",nameCn:"热力爪",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-2",unitDeckId:"LG+",nameJa:"グレネードランチャー",nameCn:"榴弹发射器",actionType:"ranged",frontImageId:"cards/lg_plus/lg_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:5,damage:3},{id:"lg_plus-3",unitDeckId:"LG+",nameJa:"グレネードランチャー",nameCn:"榴弹发射器",actionType:"ranged",frontImageId:"cards/lg_plus/lg_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:5,damage:3},{id:"lg_plus-4",unitDeckId:"LG+",nameJa:"キャタピラ",nameCn:"履带",actionType:"auxiliary",frontImageId:"cards/lg_plus/lg_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-5",unitDeckId:"LG+",nameJa:"リボルバンカー",nameCn:"左轮打桩机",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6},{id:"lg_plus-6",unitDeckId:"LG+",nameJa:"キャタピラ",nameCn:"履带",actionType:"auxiliary",frontImageId:"cards/lg_plus/lg_plus-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-7",unitDeckId:"LG+",nameJa:"ヒートクロー",nameCn:"热力爪",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-8",unitDeckId:"LG+",nameJa:"リボルバンカー",nameCn:"左轮打桩机",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6}],B0=[{id:"lo_plus-1",unitDeckId:"LO+",nameJa:"防水膜",nameCn:"防水膜",actionType:"auxiliary",frontImageId:"cards/lo_plus/lo_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo_plus-2",unitDeckId:"LO+",nameJa:"追加装甲",nameCn:"附加装甲",actionType:"armor",frontImageId:"cards/lo_plus/lo_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"lo_plus-3",unitDeckId:"LO+",nameJa:"パルスレーザー",nameCn:"脉冲激光",actionType:"ranged",frontImageId:"cards/lo_plus/lo_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:2,isEnergyWeapon:!0},{id:"lo_plus-4",unitDeckId:"LO+",nameJa:"サウンドストーム",nameCn:"声波风暴",actionType:"melee",frontImageId:"cards/lo_plus/lo_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0}],F0=[{id:"tr_plus-1",unitDeckId:"TR+",nameJa:"サウンドウェーブ",nameCn:"声波",actionType:"melee",frontImageId:"cards/tr_plus/tr_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr_plus-2",unitDeckId:"TR+",nameJa:"バルディッシュ",nameCn:"长柄斧",actionType:"melee",frontImageId:"cards/tr_plus/tr_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"tr_plus-3",unitDeckId:"TR+",nameJa:"バルディッシュ",nameCn:"长柄斧",actionType:"melee",frontImageId:"cards/tr_plus/tr_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"tr_plus-4",unitDeckId:"TR+",nameJa:"高圧縮レーザー",nameCn:"高压缩激光",actionType:"ranged",frontImageId:"cards/tr_plus/tr_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:4,isEnergyWeapon:!0},{id:"tr_plus-5",unitDeckId:"TR+",nameJa:"高圧縮レーザー",nameCn:"高压缩激光",actionType:"ranged",frontImageId:"cards/tr_plus/tr_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:4,isEnergyWeapon:!0}],G0=[{id:"zb_plus-1",unitDeckId:"ZB+",nameJa:"広射程ミサイル",nameCn:"广射程导弹",actionType:"ranged",frontImageId:"cards/zb_plus/zb_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:3},{id:"zb_plus-2",unitDeckId:"ZB+",nameJa:"ホバー",nameCn:"悬浮器",actionType:"auxiliary",frontImageId:"cards/zb_plus/zb_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb_plus-3",unitDeckId:"ZB+",nameJa:"ホバー",nameCn:"悬浮器",actionType:"auxiliary",frontImageId:"cards/zb_plus/zb_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb_plus-4",unitDeckId:"ZB+",nameJa:"チェーンブレード",nameCn:"链锯剑",actionType:"melee",frontImageId:"cards/zb_plus/zb_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"zb_plus-5",unitDeckId:"ZB+",nameJa:"ジャイアントシザース",nameCn:"巨型剪刀",actionType:"melee",frontImageId:"cards/zb_plus/zb_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:10},{id:"zb_plus-6",unitDeckId:"ZB+",nameJa:"広射程ミサイル",nameCn:"广射程导弹",actionType:"ranged",frontImageId:"cards/zb_plus/zb_plus-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:3}],H0=[{id:"ダミー-1",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-2",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-3",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-4",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-5",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-6",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-7",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-8",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-9",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-10",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-11",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-12",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-13",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-14",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-15",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-16",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-17",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-18",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-19",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-20",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0}],U0=[{id:"強化機雷-1",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-2",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-3",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-4",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-5",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-6",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-7",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-8",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-9",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-10",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-11",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-12",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-13",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-14",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-15",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-16",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5}],W0=[{id:"陸上機雷-1",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-2",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-3",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-4",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-5",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-6",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-7",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-8",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-9",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-10",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-11",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-12",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-13",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-14",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-15",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-16",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-17",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-18",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-19",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-20",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3}],ba={AG:N0,AR:M0,BG:T0,HO:E0,HY:D0,LG:z0,LO:$0,TR:A0,ZB:V0,"AG+":P0,"AR+":R0,"BG+":L0,"HO+":O0,"HY+":K0,"LG+":J0,"LO+":B0,"TR+":F0,"ZB+":G0,ダミー:H0,強化機雷:U0,陸上機雷:W0};let Z0=0;function Y0(e,n){return`${e}-${n}-${Z0++}`}function X0(e,n){const a=(ba[e]??[]).map(r=>({instanceId:Y0(r.id,n),defId:r.id,destroyed:!1}));return Q0(a)}function Q0(e){const n=[...e];for(let t=n.length-1;t>0;t--){const a=Math.floor(Math.random()*(t+1));[n[t],n[a]]=[n[a],n[t]]}return n}function jf(e,n){const t=[...e];let a=n>>>0;for(let r=t.length-1;r>0;r--){a=a+1831565813>>>0;let s=Math.imul(a^a>>>15,a|1);s^=s+Math.imul(s^s>>>7,s|61);const i=((s^s>>>14)>>>0)/4294967296,l=Math.floor(i*(r+1));[t[r],t[l]]=[t[l],t[r]]}return{shuffled:t,nextSeed:a}}function q0(e,n){const t=Math.min(n,e.length);return{drawn:e.slice(0,t),remaining:e.slice(t)}}function q(e){for(const n of Object.values(ba)){const t=n.find(a=>a.id===e);if(t)return t}}const c=(e=0)=>({terrain:"plain",elevation:0,variant:e}),I=(e=0)=>({terrain:"sand",elevation:0,variant:e}),F=(e=0)=>({terrain:"rubble",elevation:0,variant:e}),B=(e=0)=>({terrain:"forest",elevation:0,variant:e}),P=(e=0)=>({terrain:"water",elevation:0,variant:e}),N=e=>({terrain:"highland",elevation:e,variant:e}),eh={id:"map_1a",nameJa:"基本マップ1a",nameCn:"基础地图1a",width:7,height:11,maxPlayers:2,maxTeams:2,cells:[[I(),I(),I(),I(),I(),I(),I()],[c(),c(),c(),c(),c(),c(),c()],[c(),c(),c(),c(),c(),c(),c()],[N(2),N(1),c(),c(),c(),N(2),N(2)],[N(1),N(1),c(),c(),c(),N(2),c()],[c(),c(),c(),c(),c(),N(2),c()],[c(),c(),c(),c(),c(),c(),c()],[c(),c(),c(),N(1),N(1),N(2),N(2)],[c(),c(),c(),c(),c(),c(),c()],[c(),c(),c(),c(),c(),c(),c()],[F(),F(),F(),F(),F(),F(),F()]],startZones:{0:[{row:0,col:2},{row:0,col:3},{row:0,col:4}],1:[{row:10,col:2},{row:10,col:3},{row:10,col:4}]}},nh={id:"map_2a",nameJa:"基本マップ2a",nameCn:"基础地图2a",width:7,height:11,maxPlayers:2,maxTeams:2,cells:[[I(),I(),I(),I(),I(),I(),I()],[c(),c(),c(),c(),c(),c(),c()],[N(2),N(2),c(),c(),c(),c(),c()],[N(2),c(),c(),c(),c(),c(),c()],[N(2),c(),c(),c(),c(),c(),c()],[N(2),c(),c(),c(),c(),c(),c()],[N(2),N(2),c(),c(),c(),c(),c()],[c(),c(),c(),c(),B(),B(),c()],[c(),c(),c(),c(),B(),B(),c()],[c(),c(),c(),c(),c(),c(),c()],[I(),I(),I(),I(),I(),I(),I()]],startZones:{0:[{row:0,col:2},{row:0,col:3},{row:0,col:4}],1:[{row:10,col:2},{row:10,col:3},{row:10,col:4}]}},th={id:"map_2b",nameJa:"基本マップ2b",nameCn:"基础地图2b",width:7,height:11,maxPlayers:2,maxTeams:2,cells:[[B(),B(),B(),c(),c(),c(),c()],[P(),P(),I(),c(),c(),c(),c()],[P(),P(),I(),c(),c(),c(),c()],[I(),P(),P(),I(),c(),c(),c()],[c(),I(),P(),P(),I(),c(),c()],[c(),c(),I(),P(),P(),I(),c()],[c(),c(),c(),P(),P(),I(),c()],[c(),c(),c(),I(),P(),P(),c()],[c(),c(),c(),c(),I(),P(),P()],[c(),c(),c(),c(),c(),c(),c()],[c(),c(),I(),I(),I(),c(),c()]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:0,col:2}],1:[{row:10,col:2},{row:10,col:3},{row:10,col:4}]}},ah={id:"map_3a",nameJa:"峡谷要塞",nameCn:"峡谷要塞",width:9,height:13,maxPlayers:4,maxTeams:4,cells:[[I(),I(),I(),I(),I(),I(),I(),I(),I()],[B(0),c(),c(),c(),c(),c(),c(),c(),B(1)],[c(),c(),c(),c(),c(),c(),c(),c(),c()],[N(2),N(3),N(1),c(),c(),c(),N(1),N(2),N(2)],[N(2),N(2),c(),c(),F(1),c(),c(),N(1),N(2)],[N(1),c(),F(0),F(2),c(),F(1),F(3),c(),N(1)],[c(),I(),P(0),P(1),I(),P(2),P(0),I(),c()],[N(1),c(),F(3),F(0),c(),F(2),F(1),c(),N(1)],[N(2),N(1),c(),c(),F(0),c(),c(),N(2),N(2)],[N(2),N(2),N(1),c(),c(),c(),N(1),N(3),N(2)],[c(),c(),c(),c(),c(),c(),c(),c(),c()],[B(2),c(),c(),c(),c(),c(),c(),c(),B(3)],[I(),I(),I(),I(),I(),I(),I(),I(),I()]],startZones:{0:[{row:0,col:1},{row:0,col:3},{row:0,col:4},{row:0,col:5},{row:0,col:7}],1:[{row:12,col:1},{row:12,col:3},{row:12,col:4},{row:12,col:5},{row:12,col:7}],2:[{row:2,col:0},{row:6,col:0}],3:[{row:2,col:8},{row:6,col:8}]}},rh={id:"map_3b",nameJa:"群島戦域",nameCn:"群岛战域",width:9,height:13,maxPlayers:4,maxTeams:4,cells:[[B(0),B(1),I(),I(),P(0),P(1),c(),c(),c()],[B(2),I(),c(),I(),P(2),c(),c(),I(),P(0)],[I(),P(0),I(),c(),c(),I(),P(1),P(0),P(2)],[P(1),P(2),c(),c(),N(1),c(),c(),P(2),P(1)],[P(0),I(),c(),N(1),N(2),N(1),c(),I(),P(0)],[P(2),c(),N(1),N(2),N(3),N(2),N(1),c(),P(1)],[P(1),I(),c(),N(2),B(0),N(2),c(),I(),P(2)],[P(0),c(),N(1),N(2),N(3),N(2),N(1),c(),P(0)],[P(2),I(),c(),N(1),N(2),N(1),c(),I(),P(1)],[P(1),P(0),c(),c(),N(1),c(),c(),P(0),P(2)],[P(0),P(2),P(1),I(),c(),c(),I(),P(1),I()],[c(),c(),P(0),I(),c(),I(),F(0),I(),F(1)],[c(),c(),c(),P(1),I(),I(),F(2),F(3),F(0)]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:1,col:0},{row:0,col:6},{row:0,col:7}],1:[{row:12,col:6},{row:12,col:7},{row:11,col:8},{row:12,col:0},{row:12,col:1}],2:[{row:2,col:3},{row:3,col:2}],3:[{row:10,col:4},{row:10,col:5}]}},oh={id:"map_4a",nameJa:"都市廃墟",nameCn:"都市废墟",width:11,height:15,maxPlayers:4,maxTeams:4,cells:[[F(0),I(),I(),I(),I(),I(),I(),I(),I(),I(),F(1)],[F(2),F(3),c(),c(),c(),c(),c(),B(0),B(1),c(),c()],[c(),F(0),F(1),c(),c(),F(2),c(),B(2),c(),c(),c()],[c(),c(),N(1),N(2),c(),F(3),c(),c(),c(),F(0),c()],[c(),c(),N(2),N(1),c(),c(),c(),c(),I(),P(0),I()],[F(1),c(),c(),c(),c(),F(0),c(),I(),P(1),P(2),c()],[F(2),F(0),c(),c(),c(),c(),I(),P(0),I(),c(),c()],[c(),c(),c(),c(),c(),N(3),c(),c(),c(),c(),c()],[c(),c(),I(),P(2),I(),c(),c(),c(),c(),F(1),F(2)],[c(),P(0),P(1),I(),c(),B(0),B(1),c(),c(),c(),F(0)],[c(),F(3),c(),c(),c(),B(2),B(3),c(),N(1),N(2),c()],[c(),c(),c(),F(1),c(),c(),c(),c(),N(2),N(1),c()],[c(),c(),F(2),F(0),c(),c(),c(),c(),c(),c(),c()],[c(),c(),c(),F(3),c(),c(),c(),F(1),F(2),c(),c()],[F(3),I(),I(),I(),I(),I(),I(),I(),I(),I(),F(2)]],startZones:{0:[{row:0,col:1},{row:0,col:3},{row:0,col:5},{row:0,col:7},{row:0,col:9}],1:[{row:14,col:1},{row:14,col:3},{row:14,col:5},{row:14,col:7},{row:14,col:9}],2:[{row:7,col:0},{row:8,col:0}],3:[{row:6,col:10},{row:7,col:10}]}},sh={id:"map_5a",nameJa:"三叉戦場",nameCn:"三叉战场",width:13,height:17,maxPlayers:6,maxTeams:6,cells:[[c(),c(),c(),I(),I(),I(),I(),I(),I(),I(),c(),c(),c()],[c(),c(),I(),c(),c(),c(),c(),c(),c(),c(),I(),c(),c()],[c(),B(0),c(),c(),c(),c(),c(),c(),c(),c(),c(),B(1),c()],[B(2),B(0),c(),c(),c(),F(0),c(),F(1),c(),c(),c(),B(1),B(3)],[B(0),c(),c(),c(),I(),P(0),I(),P(1),I(),c(),c(),c(),B(2)],[c(),c(),c(),I(),P(1),P(0),c(),P(2),P(0),I(),c(),c(),c()],[c(),c(),N(1),N(2),I(),c(),c(),c(),I(),N(2),N(1),c(),c()],[c(),N(1),N(2),N(3),N(2),c(),c(),c(),N(2),N(3),N(2),N(1),c()],[c(),c(),N(2),N(3),F(0),N(2),N(3),N(2),F(1),N(3),N(2),c(),c()],[c(),N(1),N(2),N(3),N(2),c(),c(),c(),N(2),N(3),N(2),N(1),c()],[c(),c(),N(1),N(2),I(),c(),c(),c(),I(),N(2),N(1),c(),c()],[c(),c(),c(),I(),P(2),P(1),c(),P(0),P(2),I(),c(),c(),c()],[B(1),c(),c(),c(),I(),P(0),I(),P(1),I(),c(),c(),c(),B(0)],[B(3),B(2),c(),c(),c(),F(2),c(),F(3),c(),c(),c(),B(0),B(1)],[c(),B(0),c(),c(),c(),c(),c(),c(),c(),c(),c(),B(2),c()],[I(),I(),I(),I(),c(),c(),c(),c(),c(),I(),I(),I(),I()],[I(),I(),I(),I(),I(),c(),c(),c(),I(),I(),I(),I(),I()]],startZones:{0:[{row:0,col:4},{row:0,col:6},{row:0,col:8}],1:[{row:16,col:0},{row:16,col:1},{row:16,col:2}],2:[{row:16,col:10},{row:16,col:11},{row:16,col:12}],3:[{row:6,col:0},{row:6,col:1},{row:10,col:0}],4:[{row:6,col:11},{row:6,col:12},{row:10,col:12}],5:[{row:2,col:0},{row:2,col:6},{row:2,col:12}]}},ih={id:"map_6a",nameJa:"環状要塞",nameCn:"环形要塞",width:15,height:17,maxPlayers:8,maxTeams:8,cells:[[c(),c(),c(),c(),I(),I(),I(),I(),I(),I(),I(),c(),c(),c(),c()],[c(),c(),c(),I(),c(),c(),c(),c(),c(),c(),c(),I(),c(),c(),c()],[c(),c(),N(1),N(2),N(2),N(1),c(),c(),c(),N(1),N(2),N(2),N(1),c(),c()],[c(),F(0),N(1),c(),c(),c(),F(1),c(),F(2),c(),c(),c(),N(1),F(3),c()],[I(),c(),c(),c(),B(0),B(1),c(),c(),c(),B(2),B(3),c(),c(),c(),I()],[I(),c(),F(0),c(),B(2),c(),c(),c(),c(),c(),B(0),c(),F(1),c(),I()],[c(),F(2),N(1),c(),c(),c(),F(3),I(),F(0),c(),c(),c(),N(1),F(1),c()],[c(),c(),c(),c(),c(),I(),P(0),P(1),P(2),I(),c(),c(),c(),c(),c()],[c(),c(),c(),c(),I(),P(2),P(0),N(3),P(1),P(0),I(),c(),c(),c(),c()],[c(),c(),c(),c(),c(),I(),P(1),P(2),P(0),I(),c(),c(),c(),c(),c()],[c(),F(3),N(1),c(),c(),c(),F(1),I(),F(2),c(),c(),c(),N(1),F(0),c()],[I(),c(),F(2),c(),B(1),c(),c(),c(),c(),c(),B(3),c(),F(3),c(),I()],[I(),c(),c(),c(),B(3),B(0),c(),c(),c(),B(1),B(2),c(),c(),c(),I()],[c(),F(1),N(1),c(),c(),c(),F(3),c(),F(0),c(),c(),c(),N(1),F(2),c()],[c(),c(),N(1),N(2),N(2),N(1),c(),c(),c(),N(1),N(2),N(2),N(1),c(),c()],[c(),c(),c(),I(),c(),c(),c(),c(),c(),c(),c(),I(),c(),c(),c()],[c(),c(),c(),c(),I(),I(),I(),I(),I(),I(),I(),c(),c(),c(),c()]],startZones:{0:[{row:0,col:5},{row:0,col:6},{row:0,col:7},{row:0,col:8}],1:[{row:16,col:5},{row:16,col:6},{row:16,col:7},{row:16,col:8}],2:[{row:4,col:0},{row:5,col:0},{row:11,col:0},{row:12,col:0}],3:[{row:4,col:14},{row:5,col:14},{row:11,col:14},{row:12,col:14}],4:[{row:0,col:0},{row:0,col:1},{row:0,col:2},{row:0,col:3}],5:[{row:0,col:11},{row:0,col:12},{row:0,col:13},{row:0,col:14}],6:[{row:16,col:0},{row:16,col:1},{row:16,col:2},{row:16,col:3}],7:[{row:16,col:11},{row:16,col:12},{row:16,col:13},{row:16,col:14}]}},lh={id:"map_7a",nameJa:"大陸戦争",nameCn:"大陆战争",width:17,height:19,maxPlayers:8,maxTeams:8,cells:[[I(),I(),I(),I(),c(),c(),c(),c(),c(),c(),c(),c(),c(),I(),I(),I(),I()],[I(),c(),c(),c(),c(),c(),B(0),c(),c(),c(),B(1),c(),c(),c(),c(),c(),I()],[c(),c(),B(0),B(1),c(),B(2),B(0),c(),c(),c(),B(1),B(3),c(),B(2),B(0),c(),c()],[c(),c(),B(2),c(),c(),c(),c(),F(0),c(),F(1),c(),c(),c(),c(),B(1),c(),c()],[c(),c(),c(),c(),N(1),N(2),c(),c(),c(),c(),c(),N(2),N(1),c(),c(),c(),c()],[c(),F(0),c(),N(1),N(2),N(3),N(1),c(),c(),c(),N(1),N(3),N(2),N(1),c(),F(1),c()],[I(),c(),c(),N(1),N(2),c(),c(),I(),P(0),I(),c(),c(),N(2),N(1),c(),c(),I()],[I(),c(),c(),c(),c(),c(),I(),P(1),P(0),P(2),I(),c(),c(),c(),c(),c(),I()],[c(),c(),F(2),c(),c(),I(),P(0),P(2),I(),P(1),P(0),I(),c(),c(),F(3),c(),c()],[c(),c(),c(),c(),I(),P(1),I(),c(),N(3),c(),I(),P(2),I(),c(),c(),c(),c()],[c(),c(),F(1),c(),c(),I(),P(2),P(0),I(),P(0),P(1),I(),c(),c(),F(0),c(),c()],[I(),c(),c(),c(),c(),c(),I(),P(0),P(1),P(2),I(),c(),c(),c(),c(),c(),I()],[I(),c(),c(),N(1),N(2),c(),c(),I(),P(2),I(),c(),c(),N(2),N(1),c(),c(),I()],[c(),F(2),c(),N(1),N(2),N(3),N(1),c(),c(),c(),N(1),N(3),N(2),N(1),c(),F(3),c()],[c(),c(),c(),c(),N(1),N(2),c(),c(),c(),c(),c(),N(2),N(1),c(),c(),c(),c()],[c(),c(),B(3),c(),c(),c(),c(),F(3),c(),F(2),c(),c(),c(),c(),B(0),c(),c()],[c(),c(),B(1),B(2),c(),B(0),B(3),c(),c(),c(),B(2),B(1),c(),B(3),B(2),c(),c()],[I(),c(),c(),c(),c(),c(),B(2),c(),c(),c(),B(0),c(),c(),c(),c(),c(),I()],[I(),I(),I(),I(),c(),c(),c(),c(),c(),c(),c(),c(),c(),I(),I(),I(),I()]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:0,col:2},{row:0,col:3},{row:1,col:0}],1:[{row:0,col:13},{row:0,col:14},{row:0,col:15},{row:0,col:16},{row:1,col:16}],2:[{row:18,col:0},{row:18,col:1},{row:18,col:2},{row:18,col:3},{row:17,col:0}],3:[{row:18,col:13},{row:18,col:14},{row:18,col:15},{row:18,col:16},{row:17,col:16}],4:[{row:6,col:0},{row:7,col:0},{row:7,col:1},{row:11,col:0},{row:12,col:0}],5:[{row:6,col:16},{row:7,col:16},{row:7,col:15},{row:11,col:16},{row:12,col:16}],6:[{row:0,col:6},{row:0,col:7},{row:0,col:8},{row:0,col:9},{row:0,col:10}],7:[{row:18,col:6},{row:18,col:7},{row:18,col:8},{row:18,col:9},{row:18,col:10}]}},ch={id:"map_8a",nameJa:"火山列島",nameCn:"火山列岛",width:15,height:19,maxPlayers:8,maxTeams:8,cells:[[I(),I(),I(),B(0),B(1),P(0),P(1),c(),P(2),P(0),B(2),B(3),I(),I(),I()],[I(),c(),c(),B(2),c(),I(),P(0),c(),P(1),I(),c(),B(0),c(),c(),I()],[B(0),c(),c(),c(),I(),P(1),P(2),c(),P(0),P(2),I(),c(),c(),c(),B(1)],[c(),c(),F(0),I(),P(0),P(1),I(),c(),I(),P(2),P(0),I(),F(1),c(),c()],[c(),c(),c(),c(),I(),I(),c(),c(),c(),I(),I(),c(),c(),c(),c()],[c(),B(0),c(),c(),c(),c(),N(1),c(),N(1),c(),c(),c(),c(),B(1),c()],[c(),B(2),c(),c(),N(1),N(2),N(2),N(1),N(2),N(2),N(1),c(),c(),B(3),c()],[P(0),I(),c(),N(1),N(2),N(3),F(0),N(2),F(1),N(3),N(2),N(1),c(),I(),P(1)],[P(1),I(),c(),N(2),N(3),F(2),N(3),N(3),N(3),F(3),N(3),N(2),c(),I(),P(0)],[P(2),c(),c(),N(1),N(2),N(3),N(3),N(3),N(3),N(3),N(2),N(1),c(),c(),P(2)],[P(0),I(),c(),N(2),N(3),F(0),N(3),N(3),N(3),F(1),N(3),N(2),c(),I(),P(1)],[P(1),I(),c(),N(1),N(2),N(3),F(2),N(2),F(3),N(3),N(2),N(1),c(),I(),P(0)],[c(),B(1),c(),c(),N(1),N(2),N(2),N(1),N(2),N(2),N(1),c(),c(),B(0),c()],[c(),B(3),c(),c(),c(),c(),N(1),c(),N(1),c(),c(),c(),c(),B(2),c()],[c(),c(),c(),c(),I(),I(),c(),c(),c(),I(),I(),c(),c(),c(),c()],[c(),c(),F(2),I(),P(2),P(0),I(),c(),I(),P(1),P(2),I(),F(3),c(),c()],[B(2),c(),c(),c(),I(),P(0),P(1),c(),P(2),P(1),I(),c(),c(),c(),B(3)],[I(),c(),c(),B(1),c(),I(),P(2),c(),P(0),I(),c(),B(3),c(),c(),I()],[I(),I(),I(),B(3),B(2),P(1),P(0),c(),P(1),P(2),B(0),B(1),I(),I(),I()]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:0,col:2},{row:1,col:0}],1:[{row:0,col:12},{row:0,col:13},{row:0,col:14},{row:1,col:14}],2:[{row:18,col:0},{row:18,col:1},{row:18,col:2},{row:17,col:0}],3:[{row:18,col:12},{row:18,col:13},{row:18,col:14},{row:17,col:14}],4:[{row:7,col:1},{row:8,col:1},{row:9,col:1},{row:10,col:1}],5:[{row:7,col:13},{row:8,col:13},{row:9,col:13},{row:10,col:13}],6:[{row:0,col:7},{row:1,col:7},{row:2,col:7},{row:3,col:7}],7:[{row:18,col:7},{row:17,col:7},{row:16,col:7},{row:15,col:7}]}},Ze=[eh,nh,th,ah,rh,oh,sh,ih,lh,ch];function dh(){try{const e="em_custom_maps_index",n="em_custom_map_",t=localStorage.getItem(e);if(!t)return Ze;const a=JSON.parse(t),r=[];for(const{id:s}of a){const i=localStorage.getItem(n+s);if(i)try{r.push(JSON.parse(i))}catch{}}return[...Ze,...r]}catch{return Ze}}function oc(e){switch(e.terrain){case"plain":return"/assets/tiles/平地0.png";case"sand":return"/assets/tiles/砂0.png";case"rubble":return`/assets/tiles/瓦礫${e.variant%4}.png`;case"forest":return`/assets/tiles/森${e.variant%4}.png`;case"water":return`/assets/tiles/水${e.variant%3}.png`;case"highland":return`/assets/tiles/高地${e.elevation}.png`;default:return"/assets/tiles/平地0.png"}}const Q=[{id:"TR",deckCode:"TR",nameJa:"トルトハーン",nameCn:"托尔特哈恩",type:"M軽/単座",movement:6,evasion:8,assault:5,assaultDef:2,initiative:3,tokenId:"TR-token.jpg"},{id:"HO",deckCode:"HO",nameJa:"フォルニッセ",nameCn:"弗尼塞",type:"SS軽/単座",movement:7,evasion:10,assault:5,assaultDef:2,initiative:1,tokenId:"HO-token.jpg"},{id:"HY",deckCode:"HY",nameJa:"ヒストリクス",nameCn:"希斯特里克斯",type:"L重/単座",movement:3,evasion:3,assault:6,assaultDef:3,initiative:14,tokenId:"HY-token.jpg"},{id:"ZB",deckCode:"ZB",nameJa:"ズィマー・ブーリア",nameCn:"季马尔·布里亚",type:"S重/単座",movement:5,evasion:5,assault:6,assaultDef:3,initiative:9,tokenId:"ZB-token.jpg"},{id:"AR",deckCode:"AR",nameJa:"アラクネ",nameCn:"阿拉克涅",type:"S中/単座",movement:6,evasion:7,assault:5,assaultDef:2,initiative:5,tokenId:"AR-token.jpg"},{id:"BG",deckCode:"BG",nameJa:"ヴィスナー・グローム",nameCn:"维斯纳·格罗姆",type:"LL中/単座",movement:3,evasion:5,assault:6,assaultDef:3,initiative:13,tokenId:"BG-token.jpg"},{id:"LO",deckCode:"LO",nameJa:"リュミエール・デ・オラージュ",nameCn:"吕米耶尔",type:"L軽/単座",movement:5,evasion:7,assault:5,assaultDef:2,initiative:6,tokenId:"LO-token.jpg"},{id:"LG",deckCode:"LG",nameJa:"ルー・ガルー",nameCn:"卢·加鲁",type:"M重/単座",movement:4,evasion:4,assault:6,assaultDef:3,initiative:12,tokenId:"LG-token.jpg"},{id:"AG",deckCode:"AG",nameJa:"アルギュロス",nameCn:"阿尔古罗斯",type:"M中/単座",movement:5,evasion:6,assault:6,assaultDef:3,initiative:7,tokenId:"AG-token.jpg"}];function uh(e,n){const t=[];let a=e.col,r=e.row;const s=n.col,i=n.row,l=Math.abs(s-a),d=Math.abs(i-r),u=a<s?1:-1,p=r<i?1:-1;let f=l-d;const g=(l+d)*2+2;let x=0;for(;x++<g&&(t.push({row:r,col:a}),!(a===s&&r===i));){const m=2*f;m>-d&&(f-=d,a+=u),m<l&&(f+=l,r+=p)}return t}function xr(e,n,t){var l;if(n.row===t.row&&n.col===t.col)return!0;const a=e.cells[n.row][n.col],r=e.cells[t.row][t.col],s=Math.max(a.elevation,r.elevation),i=uh(n,t);for(const d of i){if(d.row===n.row&&d.col===n.col||d.row===t.row&&d.col===t.col)continue;const u=(l=e.cells[d.row])==null?void 0:l[d.col];if(u&&u.terrain==="highland"&&u.elevation>s)return!1}return!0}function Me(e,n){return Math.max(Math.abs(e.row-n.row),Math.abs(e.col-n.col))}const ph={plain:{type:"plain",nameJa:"平地",nameCn:"平原",moveCost:1,blocksLOS:!1,enterable:!0,providesCover:!1},sand:{type:"sand",nameJa:"砂地",nameCn:"沙地",moveCost:1,blocksLOS:!1,enterable:!0,providesCover:!1},rubble:{type:"rubble",nameJa:"瓦礫",nameCn:"瓦砾",moveCost:2,blocksLOS:!1,enterable:!0,providesCover:!1},forest:{type:"forest",nameJa:"森",nameCn:"森林",moveCost:2,blocksLOS:!0,enterable:!0,providesCover:!0},water:{type:"water",nameJa:"水辺",nameCn:"水域",moveCost:3,blocksLOS:!1,enterable:!0,providesCover:!1},highland:{type:"highland",nameJa:"高地",nameCn:"高地",moveCost:1,blocksLOS:!1,enterable:!0,providesCover:!1}};function wf(e){const n=ph[e];return n.enterable?n.moveCost:1/0}const Mt=[[-1,0],[1,0],[0,-1],[0,1]];function ya(e){return e==="N"?"S":e==="S"?"N":e==="E"?"W":"E"}function Tt(e,n){return e===-1?"N":e===1?"S":n===-1?"W":"E"}function Et(e,n,t){return n>=0&&n<e.height&&t>=0&&t<e.width}function re(e,n){return e.row===n.row&&e.col===n.col}function Sf(e,n,t,a,r){const s=Array.from({length:e.height},()=>new Array(e.width).fill(-1)),i=[{pos:n,remaining:t}];s[n.row][n.col]=t;const l=[{pos:n,remaining:t}];for(;i.length>0;){const{pos:d,remaining:u}=i.shift();for(const[p,f]of Mt){const g=d.row+p,x=d.col+f;if(!Et(e,g,x))continue;const m={row:g,col:x},h=e.cells[g][x];let _=wf(h.terrain);if(_===1/0)continue;r!=null&&r.vernier&&(h.terrain==="rubble"||h.terrain==="forest"||h.terrain==="water")&&(_=1);const b=e.cells[d.row][d.col];let v=Math.max(0,h.elevation-b.elevation);r!=null&&r.vernier&&(v=Math.max(0,v-1));const y=_+v;if(u<y)continue;const w=u-y;a.some($=>re($,m))||s[g][x]>=w||(s[g][x]=w,l.push({pos:m,remaining:w}),i.push({pos:m,remaining:w}))}}return l}function Cf(e,n,t,a,r){return Sf(e,n,t,a,r).map(s=>s.pos)}function vr(e,n,t,a,r,s){const i=e.cells[a][r];let l=wf(i.terrain);if(l===1/0)return 1/0;s!=null&&s.vernier&&(i.terrain==="rubble"||i.terrain==="forest"||i.terrain==="water")&&(l=1);const d=e.cells[n][t];let u=Math.max(0,i.elevation-d.elevation);return s!=null&&s.vernier&&(u=Math.max(0,u-1)),l+u}function bs(e,n,t,a,r,s="S"){if(t<=0)return[];const i={N:0,S:1,E:2,W:3},l=Array.from({length:e.height},()=>Array.from({length:e.width},()=>new Array(4).fill(-1))),d={pos:n,facing:s,remaining:t};l[n.row][n.col][i[s]]=t;const u=[d],p=[d];for(;u.length>0;){const{pos:x,facing:m,remaining:h}=u.shift(),_=ya(m);for(const[b,v]of Mt){const y=Tt(b,v);if(y===_)continue;const w=x.row+b,T=x.col+v;if(!Et(e,w,T))continue;const $={row:w,col:T},j=vr(e,x.row,x.col,w,T,r);if(j===1/0||h<j||a.some(z=>re(z,$)))continue;const C=h-j,A=i[y];if(l[w][T][A]>=C)continue;l[w][T][A]=C;const S={pos:$,facing:y,remaining:C};p.push(S),u.push(S)}}function f(x){const{pos:m,facing:h,remaining:_}=x,b=ya(h);for(const[v,y]of Mt){if(Tt(v,y)===b)continue;const T=m.row+v,$=m.col+y;if(!Et(e,T,$)||a.some(C=>re(C,{row:T,col:$})))continue;const j=vr(e,m.row,m.col,T,$,r);if(j!==1/0&&_>=j)return!0}return!1}const g=new Map;for(const x of p){if(re(x.pos,n)||f(x))continue;const m=`${x.pos.row},${x.pos.col}`,h=g.get(m);(!h||x.remaining>h.remaining)&&g.set(m,{pos:x.pos,remaining:x.remaining})}return Array.from(g.values())}function sc(e,n,t,a,r,s,i){if(re(n,a))return{path:[],finalFacing:t};const l={N:0,S:1,E:2,W:3},d=Array.from({length:e.height},()=>Array.from({length:e.width},()=>new Array(4).fill(-1))),u={pos:n,facing:t,remaining:r,parent:null};d[n.row][n.col][l[t]]=r;const p=[u];for(;p.length>0;){const f=p.shift();if(re(f.pos,a)){const x=[];let m=f;for(;m&&m.parent!==null;)x.push(m.pos),m=m.parent;return{path:x.reverse(),finalFacing:f.facing}}const g=ya(f.facing);for(const[x,m]of Mt){const h=Tt(x,m);if(h===g)continue;const _=f.pos.row+x,b=f.pos.col+m;if(!Et(e,_,b))continue;const v={row:_,col:b},y=vr(e,f.pos.row,f.pos.col,_,b,i);if(y===1/0||f.remaining<y||s.some(j=>re(j,v))&&!re(v,a))continue;const T=f.remaining-y,$=l[h];d[_][b][$]>=T||(d[_][b][$]=T,p.push({pos:v,facing:h,remaining:T,parent:f}))}}return null}function qs(e,n,t,a,r,s,i,l=8){if(re(n,a)||r<=0)return[];const d=[];function u(f,g,x){const m=ya(g);for(const[h,_]of Mt){if(Tt(h,_)===m)continue;const v=f.row+h,y=f.col+_;if(!Et(e,v,y)||s.some(T=>re(T,{row:v,col:y})))continue;const w=vr(e,f.row,f.col,v,y,i);if(w!==1/0&&x>=w)return!1}return!0}function p(f,g,x,m){if(d.length>=l)return;if(re(f,a)){u(f,g,x)&&d.push({path:[...m],finalFacing:g});return}const h=ya(g);for(const[_,b]of Mt){const v=Tt(_,b);if(v===h)continue;const y=f.row+_,w=f.col+b;if(!Et(e,y,w))continue;const T={row:y,col:w};if(re(T,n)||m.some(C=>re(C,T))||s.some(C=>re(C,T))&&!re(T,a))continue;const j=vr(e,f.row,f.col,y,w,i);j===1/0||x<j||(m.push(T),p(T,v,x-j,m),m.pop())}}return p(n,t,r,[]),d}function Nf(e,n,t){const a=[];for(const[r,s]of Mt){const i=n.row+r,l=n.col+s;if(!Et(e,i,l))continue;const d={row:i,col:l};t.some(u=>re(u,d))||a.push(d)}return a}function fh(e,n,t,a){if(re(n,t))return[];const r=Array.from({length:e.height},()=>new Array(e.width).fill(!1));r[n.row][n.col]=!0;const s=[{pos:n,parent:null}];for(;s.length>0;){const i=s.shift();if(re(i.pos,t)){const p=[];let f=i;for(;f&&f.parent!==null;)p.push(f.pos),f=f.parent;return p.reverse()}const{row:l,col:d}=i.pos,u=[{row:l-1,col:d},{row:l+1,col:d},{row:l,col:d-1},{row:l,col:d+1}];for(const p of u)if(p.row>=0&&p.row<e.height&&p.col>=0&&p.col<e.width){const f=a.some(g=>re(g,p))&&!re(p,t);!r[p.row][p.col]&&!f&&(r[p.row][p.col]=!0,s.push({pos:p,parent:i}))}}return null}function ei(e,n,t,a){const r=n===1?e.plotSeg1:e.plotSeg2;if(!r)return 0;const s=t(r.defId);return!s||s.actionType!=="movement"?0:(s.movementValue??0)+(a!=null&&a.wheel?2:0)}function mh(e,n,t,a){const r=n===1?e.plotSeg1:e.plotSeg2;if(!r)return!1;const s=t(r.defId);return!s||s.actionType!=="movement"?!1:(s.movementValue??a)>0}function Dn(e,n,t){return e==="N"?t.row<=n.row:e==="S"?t.row>=n.row:e==="E"?t.col>=n.col:e==="W"?t.col<=n.col:!0}function br(e,n,t){if(n!==2)return 0;if(e.plotSeg1){const a=t(e.plotSeg1.defId);if(a&&a.actionType==="aim")return 1}return 0}function gh(e,n,t,a){const r=[];if(t==="ranged"){for(const l of e.hand)if(!l.destroyed){const d=a(l.defId);(d==null?void 0:d.actionType)==="armor"&&(d.armorValue??0)>0&&r.push({instanceId:l.instanceId,defId:l.defId,armorValue:d.armorValue})}}const s=n===1?e.plotSeg1:e.plotSeg2;let i=null;if(s&&!s.destroyed){const l=a(s.defId);(l==null?void 0:l.actionType)==="armor"&&(l.armorValue??0)>0&&(i={instanceId:s.instanceId,defId:s.defId,seg:n,armorValue:l.armorValue})}return{handCards:r,plotCard:i}}function Rn(e,n,t,a){const r=n===1?e.plotSeg1:e.plotSeg2;if(!r)return null;const s=a(r.defId);return s&&(t==="ranged"&&s.actionType==="ranged"||t==="melee"&&(s.actionType==="melee"||s.actionType==="charge"))?s:null}function Fo(e,n,t,a,r){var u,p;let s=e;const i=[],l=(u=a.cells[n.row])==null?void 0:u[n.col],d=(p=a.cells[t.row])==null?void 0:p[t.col];return(l==null?void 0:l.terrain)==="water"&&r.isEnergyWeapon&&(s-=1,i.push("水域能量衰减-1")),(d==null?void 0:d.terrain)==="forest"&&(s-=1,i.push("森林掩护-1")),{dmg:Math.max(0,s),reasons:i}}function Go(e,n,t,a,r,s){const i=Rn(e,t,a,s);if(!i)return{canAttack:!1,reason:"无攻击牌",damage:0,counterDamage:0,dist:0,card:null};const l=Me(e.position,n.position);if(a==="ranged"){if(i.rangeMin===void 0||i.rangeMax===void 0)return{canAttack:!1,reason:"卡牌无射程数据",damage:0,counterDamage:0,dist:l,card:i};if(l<i.rangeMin)return{canAttack:!1,reason:`距离过近 (${l} < ${i.rangeMin})`,damage:0,counterDamage:0,dist:l,card:i};if(l>i.rangeMax)return{canAttack:!1,reason:`射程外 (${l} > ${i.rangeMax})`,damage:0,counterDamage:0,dist:l,card:i};if(!xr(r,e.position,n.position))return{canAttack:!1,reason:"视线被遮挡",damage:0,counterDamage:0,dist:l,card:i};if(!Dn(e.facing,e.position,n.position))return{canAttack:!1,reason:`目标在机体后方（机头朝${e.facing}），无法射击`,damage:0,counterDamage:0,dist:l,card:i};let d=i.damage??0;const u=[];if(i.rangeOptimal!==void 0&&i.damageAttenuation!==void 0){const h=Math.max(0,l-i.rangeOptimal);if(h>0){const _=h*i.damageAttenuation;d=Math.max(0,d-_),u.push(`超射程-${_}`)}}const p=Fo(d,e.position,n.position,r,i),f=br(e,t,s),g=p.dmg+f,x=[...u,...p.reasons];return f>0&&x.push("瞄准+1"),{canAttack:!0,reason:`有效射击${x.length>0?`（${x.join(", ")}）`:""}`,damage:g,counterDamage:0,dist:l,card:i}}if(a==="melee"&&i.actionType==="melee"){if(l!==1)return{canAttack:!1,reason:`不相邻 (距离 ${l})`,damage:0,counterDamage:0,dist:l,card:i};const d=Fo(i.damage??0,e.position,n.position,r,i),u=br(e,t,s),p=d.dmg+u,f=[...d.reasons];return u>0&&f.push("瞄准+1"),{canAttack:!0,reason:`有效近战${f.length>0?`（${f.join(", ")}）`:""}`,damage:p,counterDamage:0,dist:l,card:i}}return a==="melee"&&i.actionType==="charge"?{canAttack:!1,reason:"突击卡需使用evaluateCharge()",damage:0,counterDamage:0,dist:l,card:i}:{canAttack:!1,reason:"非攻击时机",damage:0,counterDamage:0,dist:l,card:null}}const hh=new Set(["パイルバンカー","スパイク"]);function xh(e){return hh.has(e.nameJa)}function vh(e,n,t,a,r,s){if(Me(n,t)===1)return Dn(s,n,t)?n:null;const l=Cf(e,n,a,r).filter(d=>Me(d,t)===1&&Dn(s,d,t));return l.length===0?null:(l.sort((d,u)=>Me(n,d)-Me(n,u)),l[0])}function yr(e,n,t,a,r,s,i){const l=Rn(e,t,"melee",i);if(!l||l.actionType!=="charge")return{canAttack:!1,reason:"无突击牌",damage:0,counterDamage:0,dist:0,card:null};const d=Me(e.position,n.position);if(xh(l)){if(d!==1)return{canAttack:!1,reason:`不相邻 (距离 ${d})，${l.nameCn} 无法攻击`,damage:0,counterDamage:0,dist:d,card:l};if(!Dn(e.facing,e.position,n.position))return{canAttack:!1,reason:`目标不在正面弧内（机头朝${e.facing}），${l.nameCn} 无法攻击`,damage:0,counterDamage:0,dist:d,card:l};const y=r.assault+1,w=Fo(y,e.position,n.position,a,l),T=br(e,t,i),$=w.dmg+T,j=Math.max(0,s.assaultDef-1),C=[...w.reasons];T>0&&C.push("瞄准+1");const A=C.length>0?`（${C.join(", ")}）`:"";return{canAttack:!0,reason:`有效${l.nameCn}攻击${A}`,damage:$,counterDamage:j,dist:d,card:l,chargeDestination:e.position}}const p=r.assault,f=vh(a,e.position,n.position,p,[n.position],e.facing);if(!f)return{canAttack:!1,reason:`突击距离不足或目标不在正面弧内 (距离 ${d}，突击值 ${p})`,damage:0,counterDamage:0,dist:d,card:l};const g=r.assault,x=Fo(g,f,n.position,a,l),m=br(e,t,i),h=x.dmg+m,_=s.assaultDef,b=[...x.reasons];return m>0&&b.push("瞄准+1"),{canAttack:!0,reason:`有效突击${b.length>0?`（${b.join(", ")}）`:""}`,damage:h,counterDamage:_,dist:d,card:l,chargeDestination:f}}function Dt(e){const n=[...e.deck,...e.hand,...e.auxiliary];return e.plotSeg1&&n.push(e.plotSeg1),e.plotSeg2&&n.push(e.plotSeg2),n.filter(t=>!t.destroyed)}function Cd(e){return Dt(e).length}function Er(e){const n=[...e.hand,...e.auxiliary];return e.plotSeg1&&n.push(e.plotSeg1),e.plotSeg2&&n.push(e.plotSeg2),n.filter(t=>!t.destroyed)}function ic(e,n){var a,r;const t={...n,destroyed:!0};return{player:{...e,deck:e.deck.map(s=>s.instanceId===n.instanceId?t:s),hand:e.hand.map(s=>s.instanceId===n.instanceId?t:s),auxiliary:e.auxiliary.map(s=>s.instanceId===n.instanceId?t:s),plotSeg1:((a=e.plotSeg1)==null?void 0:a.instanceId)===n.instanceId?t:e.plotSeg1,plotSeg2:((r=e.plotSeg2)==null?void 0:r.instanceId)===n.instanceId?t:e.plotSeg2,destroyedCards:[...e.destroyedCards,t]},destroyed:t}}function el(e,n,t,a){let r=e;const s=[];let i=n;const l=a?`[${a}] `:"";let d=0;const u=30;for(;i>0&&d<u;){i--,d++;const p=r.deck.filter(m=>!m.destroyed);if(p.length===0){s.push(`    ↳ ${l}【誘爆】牌组已空，无法继续检查`);break}const f=p[0],g=t(f.defId),x=(g==null?void 0:g.nameCn)??f.defId;if(g!=null&&g.hasBombIcon){const{player:m}=ic(r,f);r=m,i++,s.push(`    ↳ ${l}【💣 誘爆】翻开 ${x}——有炸弹标记，破坏！（连锁+1）`)}else r={...r,deck:r.deck.filter(m=>m.instanceId!==f.instanceId),discard:[...r.discard,f]},s.push(`    ↳ ${l}【誘爆】翻开 ${x}——无炸弹标记，放入弃牌区`)}return{player:r,log:s}}function et(e,n,t,a){let r=e;const s=[];let i=n,l=0;for(;i>0;){const d=r.deck.filter(v=>!v.destroyed),u=r.hand.filter(v=>!v.destroyed),p=r.auxiliary.filter(v=>!v.destroyed),f=[r.plotSeg1,r.plotSeg2].filter(v=>!!v&&!v.destroyed),g=d[0]??u[0]??p[0]??f[0];if(!g)break;const x=t(g.defId),m=(x==null?void 0:x.nameCn)??g.defId,{player:h}=ic(r,g);r=h,i--;const _=x!=null&&x.hasBombIcon?"【💣】":"",b=a?`[${a}] `:"";if(s.push(`  ▶ ${b}${m} 被摧毁${_}`),x!=null&&x.hasBombIcon&&l++,r.destroyedCards.length>30)break}if(l>0){s.push(`  ─── 誘爆检查（${l}张炸弹卡被破坏）───`);const{player:d,log:u}=el(r,l,t,a);r=d,s.push(...u)}return{player:r,log:s}}const bh="バーニア",yh="ムーブセンサー",_h="ホイール";function jn(e,n,t){const a=new Map;for(const f of e.auxiliary){if(f.destroyed)continue;const g=n(f.defId);g&&a.set(g.nameJa,(a.get(g.nameJa)??0)+1)}const r=a.get(bh)??0,s=a.get(yh)??0,i=a.get(_h)??0,l=r>=2&&i>=2,d=!l&&r>=2,u=s>=2,p=!l&&i>=2;return{vernier:d&&(t==="movement"||t==="melee"),moveSensor:u&&t==="melee",wheel:p&&(t==="movement"||t==="charge")}}function Ho(e,n){const t=n.row-e.row,a=n.col-e.col;return Math.abs(t)>=Math.abs(a)?t<0?"N":"S":a>0?"E":"W"}function se(e){return`P${e.replace("player","")}`}function Uo(e){switch(e){case"movement":return"移动时机";case"ranged":return"射击时机";case"melee":return"近战时机";case"special":return"特殊时机";default:return e}}function Ih(e){switch(e){case"movement":return"移动";case"ranged":return"射击";case"melee":return"近战";case"charge":return"突击";case"aim":return"瞄准";case"armor":return"装甲";case"mine":return"机雷";case"special":return"特殊";default:return e}}function nl(e,n){let t=Z(e,`══════ 主要阶段${n}开始 ══════`);t=Z(t,`全员翻开阶段${n}盖卡：`);for(const a of e.playerIds){if(t.players[a].isDefeated)continue;const r=t.players[a],s=Q.find(u=>u.id===r.unitId),i=se(a),l=(s==null?void 0:s.nameCn)??a,d=n===1?r.plotSeg1:r.plotSeg2;if(d){const u=q(d.defId);u?t=Z(t,`  ${i}[${l}] →【${u.nameCn}】(${Ih(u.actionType)})`):t=Z(t,`  ${i}[${l}] → (未知卡牌)`)}else t=Z(t,`  ${i}[${l}] → 未配置行动卡`)}return t}function lc(e,n,t,a="S"){const r=X0(n,e);return{id:e,unitId:n,position:t,facing:a,deck:r,hand:[],auxiliary:[],plotSeg1:null,plotSeg2:null,discard:[],destroyedCards:[],isDefeated:!1}}function Mf(e=2,n=2){const t=Ze[0],a=da.slice(0,e),r={};for(let i=0;i<a.length;i++)r[a[i]]=i%n;const s={};for(const i of a){const l=r[i],d=t.startZones[l]??t.startZones[0]??[],u=d[Math.min(1,d.length-1)]??{row:0,col:0},p=l===0?"S":"N";s[i]=lc(i,"AG",u,p)}return{phase:"setup",roundNumber:0,activePlayer:a[0],players:s,playerIds:a,teams:r,teamCount:n,map:t,mines:[],log:[],turnOrder:[...a],currentTiming:null,plottingStep:null,pendingDamage:null,shuffleSeed:Date.now()}}function ie(e,n){return S0(e,n)}function ue(e,n,t){return C0(e,n,t)}function Z(e,n){return{...e,log:[...e.log,n]}}function zn(e,n){return{...e,log:[...e.log,`[DBG] ${n}`]}}function kh(e,n){return e.filter(t=>t.instanceId!==n)}function jh(e){const n=[],t=[];for(const a of e.deck){const r=q(a.defId);r&&r.actionType==="auxiliary"?t.push(a):n.push(a)}return{...e,deck:n,auxiliary:[...e.auxiliary,...t]}}function Wo(e){const n=e.playerIds.filter(r=>!e.players[r].isDefeated),t=e.phase==="action_seg2"?2:1,a=n.map(r=>{const s=e.players[r],i=Q.find(u=>u.id===s.unitId),l=(i==null?void 0:i.initiative)??0;let d=(i==null?void 0:i.movement)??0;if(e.currentTiming==="movement"){const u=t===1?s.plotSeg1:s.plotSeg2;if(u){const p=q(u.defId);p&&p.movementValue!==void 0&&(d=p.movementValue)}}return{id:r,initiative:l,movementValue:d}});return e.currentTiming==="movement"?a.sort((r,s)=>r.movementValue!==s.movementValue?s.movementValue-r.movementValue:s.initiative-r.initiative):a.sort((r,s)=>s.initiative-r.initiative),a.map(r=>r.id)}function wh(e,n){const{playerId:t,unitId:a}=n,r=e.teams[t]??0,s=e.map.startZones[r]??[],i=ie(e,t).position,l=s.some(p=>p.row===i.row&&p.col===i.col)?i:s[Math.min(1,s.length-1)]??{row:0,col:0},d=ie(e,t).facing,u=lc(t,a,l,d);return Z(ue(e,t,u),`${t} 选择了机体 ${a}`)}function Sh(e,n){const t=Ze.find(s=>s.id===n.mapId);if(!t)return e;const a={},r={};for(const s of e.playerIds){const i=e.teams[s]??0,l=t.startZones[i]??t.startZones[0]??[],d=r[i]??0;r[i]=d+1;const u=l[Math.min(d,l.length-1)]??{row:0,col:0},p=i===0?"S":"N";a[s]=lc(s,e.players[s].unitId,u,p)}return Z({...e,map:t,players:a},`选择了地图 ${t.nameCn}`)}function Ch(e,n){if(e.phase!=="setup")return e;const{playerId:t,position:a}=n,r=ie(e,t);return ue(e,t,{...r,position:a})}function Nh(e,n){if(e.phase!=="setup")return e;const{playerId:t,facing:a}=n,r=ie(e,t);return ue(e,t,{...r,facing:a})}function Mh(e){var a;const n={...e.players};let t={...e,phase:"draw",roundNumber:1};for(const r of e.playerIds){const s=jh(e.players[r]);n[r]=s;for(const i of s.auxiliary){const l=q(i.defId);t=Z(t,`${r} 补助卡【${(l==null?void 0:l.nameCn)??i.defId}】从卡组移至辅助区`)}}t={...t,players:n};for(const r of e.playerIds){const s=((a=Q.find(i=>i.id===t.players[r].unitId))==null?void 0:a.evasion)??5;t=cc(t,{playerId:r,count:s})}return Z({...t,phase:"pregame",plottingStep:null,activePlayer:e.playerIds[0],currentTiming:null},"=== 第 1 回合开始 ===")}function Th(e){if(e.phase!=="pregame")return e;const n=e.playerIds[0];return{...e,phase:"plotting",plottingStep:`transition_to_${n}`,activePlayer:n}}function cc(e,n){const t=ie(e,n.playerId),a=[],r=[];let s=t.deck.filter(g=>!g.destroyed),i=t.discard.filter(g=>!g.destroyed);const l=i.length;let d=!1,u=e.shuffleSeed;for(;r.length<n.count;){if(s.length===0){if(i.length===0)break;const h=jf([...i],u);s=h.shuffled,u=h.nextSeed,i=[],d=!0}const g=n.count-r.length,{drawn:x,remaining:m}=q0(s,g);s=m;for(const h of x){const _=q(h.defId);_&&_.actionType==="auxiliary"?a.push(h):r.push(h)}}const p={...t,deck:s,discard:i,hand:[...t.hand,...r],auxiliary:[...t.auxiliary,...a]};let f=ue({...e,shuffleSeed:u},n.playerId,p);d&&(f=Z(f,`${n.playerId} 的卡组耗尽，弃牌区（${l} 张）洗入卡组`)),f=Z(f,`${n.playerId} 抽了 ${r.length} 张牌`);for(const g of a){const x=q(g.defId),m=(x==null?void 0:x.nameCn)??g.defId;f=Z(f,`  ↳ 辅助卡【${m}】自动放置到辅助区`)}return f}function Eh(e,n){var p;const{playerId:t,seg:a,instanceId:r}=n,s=ie(e,t),i=s.hand.find(f=>f.instanceId===r);if(!i)return e;const l=((p=q(i.defId))==null?void 0:p.nameCn)??i.defId;e=zn(e,`PLOT_CARD: ${se(t)} 配置【${l}】到阶段${a}`);const d=kh(s.hand,r),u={...s,hand:d,plotSeg1:a===1?i:s.plotSeg1,plotSeg2:a===2?i:s.plotSeg2};return ue(e,t,u)}function Dh(e,n){const{playerId:t}=n,a=Z(e,`${t} 完成了布局`),r=e.playerIds.indexOf(t),s=e.playerIds.slice(r+1).find(u=>!a.players[u].isDefeated);if(s)return{...a,activePlayer:s,plottingStep:`transition_to_${s}`};const l={...nl(a,1),activePlayer:e.playerIds[0],phase:"action_seg1",plottingStep:"complete",currentTiming:"movement",turnOrder:[]},d={...l,turnOrder:Wo(l)};return Z(d,`▸ ${Uo("movement")} — 行动顺序：${d.turnOrder.map(se).join(" → ")}`)}function zh(e){const n=e.plottingStep;if(!n)return e;for(const t of e.playerIds)if(n===`transition_to_${t}`)return{...e,plottingStep:t,activePlayer:t};if(n==="transition"){const t=e.playerIds.indexOf(e.activePlayer);if(t>=0&&t<e.playerIds.length-1){const a=e.playerIds[t+1];return{...e,plottingStep:a,activePlayer:a}}}return e}function $h(e,n){const{playerId:t,to:a}=n;let r=ie(e,t);const s=r.position;e=zn(e,`MOVE_UNIT: ${se(t)} (${s.row},${s.col})→(${a.row},${a.col}) 阶段=${e.phase} 时机=${e.currentTiming}`);const i=e.map,l=e.playerIds.filter(g=>g!==t&&!e.players[g].isDefeated).map(g=>ie(e,g).position);if(l.some(g=>re(g,a)))return Z(e,`${se(t)} 移动无效：目标位置 (${a.row}, ${a.col}) 已被其他机体占据`);const d=n.path??fh(i,s,a,l);let u=e;if(d&&d.length>0){let g=a,x=!1;for(const m of d){const h=u.mines.filter(_=>_.ownerId!==t&&re(_.position,m));if(h.length>0){g=m,x=!0,r={...r,position:g},u=ue(u,t,r),u=Z(u,`${t} 移动途经 (${m.row}, ${m.col})，触发了机雷！`);for(const _ of h){u=Z(u,`机雷爆炸，对 ${se(t)} 造成 ${_.damage} 点伤害！`);const b=et(r,_.damage,q,se(t));for(const v of b.log)u=Z(u,v);r=b.player,u=ue(u,t,r),u={...u,mines:u.mines.filter(v=>v.id!==_.id)},u={...u,lastDamageContext:{attackerId:_.ownerId,targetId:t,weaponName:"机雷"}}}break}}if(!x){const m=n.finalFacing??Ho(s,a);r={...r,position:a,facing:m},u=ue(u,t,r),u=Z(u,`${t} 移动到 (${a.row}, ${a.col})，机头朝${m}`)}return nn(u)}const p=n.finalFacing??Ho(s,a),f={...r,position:a,facing:p};return Z(ue(e,t,f),`${t} 移动到 (${a.row}, ${a.col})，机头朝${p}`)}function Ah(e,n){const{playerId:t,to:a,damage:r}=n,s={id:`mine-${Date.now()}-${Math.random().toString(36).substring(2,9)}`,ownerId:t,position:a,damage:r};let i={...e,mines:[...e.mines,s]};return i=Z(i,`${t} 在 (${a.row}, ${a.col}) 部署了机雷`),i}function Nd(e,n,t){var _,b,v;const{attackerId:a,targetId:r}=n,s=e.phase==="action_seg1"?1:2,i=ie(e,a),l=ie(e,r);e=zn(e,`RESOLVE_${t.toUpperCase()}: ${se(a)}(${i.position.row},${i.position.col},${i.facing})→${se(r)}(${l.position.row},${l.position.col},${l.facing}) seg=${s}`);const d=Go(i,l,s,t,e.map,q),p=br(i,s,q)>0?a:void 0;if(!d.canAttack)return Z(e,`${a} 攻击无效：${d.reason}`);const f=((_=Q.find(y=>y.id===i.unitId))==null?void 0:_.nameCn)??a,g=((b=Q.find(y=>y.id===l.unitId))==null?void 0:b.nameCn)??r,x=((v=d.card)==null?void 0:v.nameCn)??"???",m=t==="ranged"?"射击":"近战";let h=e;if(t==="melee"){const y=Ho(i.position,l.position);y!==i.facing&&(h=ue(h,a,{...ie(h,a),facing:y}),h=Z(h,`${f} 近战攻击后自动转向【${y}】`))}return h=Z(h,`${f} 对 ${g} 发动${m}【${x}】→ 造成 ${d.damage} 点伤害`),h={...h,lastDamageContext:{attackerId:a,targetId:r,weaponName:x}},Qa(h,r,d.damage,t,s,p,x)}function Qa(e,n,t,a,r,s,i){if(t<=0)return nn(e);const l=ie(e,n),{handCards:d,plotCard:u}=gh(l,r,a,q);return d.length>0||u!==null?{...e,pendingArmorChoice:{targetId:n,damage:t,source:a,attackerId:s,weaponName:i,handCards:d,plotCard:u}}:dc(e,n,t,a,s)}function Vh(e,n){const t=e.pendingArmorChoice;if(!t||t.targetId!==n.playerId)return e;let a={...e,pendingArmorChoice:void 0};const r=ie(a,t.targetId),s=new Set(n.selectedInstanceIds);let i=0;const l=[],d=r.hand.map(g=>{if(s.has(g.instanceId)){const x=q(g.defId);if((x==null?void 0:x.actionType)==="armor")return i+=x.armorValue??0,l.push(x.nameCn),{...g,destroyed:!0}}return g});let u=r.plotSeg1,p=r.plotSeg2;if(t.plotCard&&s.has(t.plotCard.instanceId)){const g=q(t.plotCard.defId);(g==null?void 0:g.actionType)==="armor"&&(i+=g.armorValue??0,l.push(g.nameCn),t.plotCard.seg===1&&r.plotSeg1?u={...r.plotSeg1,destroyed:!0}:t.plotCard.seg===2&&r.plotSeg2&&(p={...r.plotSeg2,destroyed:!0}))}a=ue(a,t.targetId,{...r,hand:d,plotSeg1:u,plotSeg2:p}),i>0?a=Z(a,`[${se(t.targetId)}] 激活装甲【${l.join("、")}】减伤 -${i} 点`):a=Z(a,`[${se(t.targetId)}] 放弃使用装甲`);const f=Math.max(0,t.damage-i);return dc(a,t.targetId,f,t.source,t.attackerId)}function dc(e,n,t,a,r){if(t<=0)return nn(e);const s=ie(e,n),i=Dt(s);if(i.length===0)return nn(e);if(a!=="ranged"){const l=s.deck.filter(p=>!p.destroyed).length,d=s.discard.filter(p=>!p.destroyed).length;if(!(l===0&&d===0)){let p=e,f=t;const g=Math.min(f,l);if(g>0){const{player:x,log:m}=et(ie(p,n),g,q,se(n));for(const h of m)p=Z(p,h);p=ue(p,n,x),f-=g}if(f>0&&d>0){const x=ie(p,n),m=x.discard.filter(w=>!w.destroyed),h=x.discard.filter(w=>w.destroyed),{shuffled:_,nextSeed:b}=jf(m,p.shuffleSeed);p={...p,shuffleSeed:b};const v={...x,deck:[...x.deck,..._],discard:h};p=ue(p,n,v),p=Z(p,`${se(n)} 的卡组耗尽，弃牌区（${m.length} 张）洗入卡组`);const y=Math.min(f,m.length);if(y>0){const{player:w,log:T}=et(ie(p,n),y,q,se(n));for(const $ of T)p=Z(p,$);p=ue(p,n,w),f-=y}}if(f>0){const x=ie(p,n),m=Dt(x);if(m.length===0)return nn(p);if(m.length<=f){const{player:h,log:_}=et(x,f,q,se(n));for(const b of _)p=Z(p,b);return p=ue(p,n,h),nn(p)}return p=Z(p,`[${se(n)}] 牌组与弃牌区已耗尽，切换为防方自选伤害模式`),{...p,pendingDamage:{targetId:n,remaining:f,selectedInstanceIds:[],destroyedBombCount:0,source:a,attackerId:r}}}return nn(p)}e=Z(e,`[${se(n)}] 牌组与弃牌区已耗尽，本次${a==="charge"?"突击":"近战"}伤害切换为防方自选模式`)}if(i.length<=t){const{player:l,log:d}=et(s,t,q,se(n));let u=e;for(const p of d)u=Z(u,p);return u=ue(u,n,l),nn(u)}if(a==="ranged"){const l=Er(s).length,d=Math.min(t,l),u=t-d;if(d<=0){const{player:p,log:f}=et(s,t,q,se(n));let g=e;for(const x of f)g=Z(g,x);return g=ue(g,n,p),nn(g)}return{...e,pendingDamage:{targetId:n,remaining:d,selectedInstanceIds:[],destroyedBombCount:0,source:a,attackerId:r,deckAutoCount:u}}}return{...e,pendingDamage:{targetId:n,remaining:t,selectedInstanceIds:[],destroyedBombCount:0,source:a,attackerId:r}}}function Ph(e,n){var m;const{attackerId:t,targetId:a}=n,r=e.phase==="action_seg1"?1:2,s=ie(e,t),i=ie(e,a);e=zn(e,`RESOLVE_CHARGE: ${se(t)}(${s.position.row},${s.position.col},${s.facing})→${se(a)}(${i.position.row},${i.position.col},${i.facing}) seg=${r}`);const l=Q.find(h=>h.id===s.unitId),d=Q.find(h=>h.id===i.unitId),u=yr(s,i,r,e.map,l,d,q);if(!u.canAttack)return Z(e,`${t} 突击无效：${u.reason}`);const p=l.nameCn,f=d.nameCn,g=((m=u.card)==null?void 0:m.nameCn)??"突击";let x=e;if(u.chargeDestination&&(u.chargeDestination.row!==s.position.row||u.chargeDestination.col!==s.position.col)){const h=u.chargeDestination,_={...s,position:h};x=ue(x,t,_),x=Z(x,`${p} 发动突击冲锋，移动至 (${h.row}, ${h.col})`)}{const h=ie(x,t),_=Ho(h.position,i.position);_!==h.facing&&(x=ue(x,t,{...h,facing:_}),x=Z(x,`${p} 突击后自动转向【${_}】`))}if(x=Z(x,`${p} 对 ${f} 发动${g}【突击值 ${l.assault}】→ 对目标造成 ${u.damage} 点近战伤害；自机承受反伤 ${u.counterDamage} 点`),u.counterDamage>0){x={...x,pendingFollowUpDamage:{targetId:t,amount:u.counterDamage,source:"charge",attackerId:a,weaponName:"突击反伤",seg:r}},x={...x,lastDamageContext:{attackerId:t,targetId:a,weaponName:g}};const h=Qa(x,a,u.damage,"charge",r,void 0,g);if(!h.pendingDamage&&!h.pendingArmorChoice){if(h.phase==="game_over")return h;const b={...{...h,pendingFollowUpDamage:void 0},lastDamageContext:{attackerId:a,targetId:t,weaponName:"突击反伤"}};return Qa(b,t,u.counterDamage,"charge",r)}return h}return x={...x,lastDamageContext:{attackerId:t,targetId:a,weaponName:g}},Qa(x,a,u.damage,"charge",r,void 0,g)}function Zo(e){if(!e.pendingFollowUpDamage||e.phase==="game_over")return e;const{targetId:n,amount:t,source:a,attackerId:r,weaponName:s,seg:i}=e.pendingFollowUpDamage;let l={...e,pendingFollowUpDamage:void 0};return r&&s&&(l={...l,lastDamageContext:{attackerId:r,targetId:n,weaponName:s}}),i?Qa(l,n,t,a,i):dc(l,n,t,a)}function Rh(e,n){const t=e.pendingDamage;if(!t)return e;const{playerId:a,instanceId:r}=n,s=t.selectedInstanceIds.length===0,i=!!t.attackerId&&s&&!t.attackerDesignatedCardId,l=i?t.attackerId:t.targetId;if(a!==l)return e;const d=ie(e,t.targetId),u=Dt(d).find(v=>v.instanceId===r&&!v.destroyed);if(!u||t.selectedInstanceIds.includes(r))return e;if(t.source==="ranged"&&!i){const v=Er(d);if(d.deck.some(w=>w.instanceId===r&&!w.destroyed)&&v.length>0)return e}const{player:p}=ic(d,u);let f=ue(e,t.targetId,p);const g=q(u.defId),x=(g==null?void 0:g.nameCn)??u.defId,m=g!=null&&g.hasBombIcon?"【💣】":"";f=Z(f,`  ▶ [${se(t.targetId)}] ${x} 被摧毁${m}`);let h=t.remaining-1;const _=(t.destroyedBombCount??0)+(g!=null&&g.hasBombIcon?1:0);if(h<=0){if(f={...f,pendingDamage:null},t.deckAutoCount&&t.deckAutoCount>0){const v=ie(f,t.targetId),{player:y,log:w}=et(v,t.deckAutoCount,q,se(t.targetId));for(const T of w)f=Z(f,T);f=ue(f,t.targetId,y)}if(_>0){const v=ie(f,t.targetId);f=Z(f,`  ─── 誘爆检查（${_}张炸弹卡被破坏）───`);const{player:y,log:w}=el(v,_,q,se(t.targetId));for(const T of w)f=Z(f,T);f=ue(f,t.targetId,y)}return f=nn(f),Zo(f)}if(Dt(ie(f,t.targetId)).length===0){if(f={...f,pendingDamage:null},_>0){const v=ie(f,t.targetId);f=Z(f,`  ─── 誘爆检查（${_}张炸弹卡被破坏）───`);const{player:y,log:w}=el(v,_,q,se(t.targetId));for(const T of w)f=Z(f,T);f=ue(f,t.targetId,y)}return f=nn(f),Zo(f)}return f={...f,pendingDamage:{...t,remaining:h,selectedInstanceIds:[...t.selectedInstanceIds,r],destroyedBombCount:_,attackerDesignatedCardId:i?r:t.attackerDesignatedCardId}},f}function Lh(e,n){const t=e.pendingDamage;if(!t)return e;const a=t.selectedInstanceIds.length===0,s=!!t.attackerId&&a&&!t.attackerDesignatedCardId?t.attackerId:t.targetId;if(n.playerId!==s)return e;const i=t.remaining+(t.deckAutoCount??0);if(i>0){const d=ie(e,t.targetId),{player:u,log:p}=et(d,i,q,se(t.targetId));let f=e;for(const g of p)f=Z(f,g);return f=ue(f,t.targetId,u),f={...f,pendingDamage:null},f=nn(f),Zo(f)}let l={...e,pendingDamage:null};return Zo(l)}function Md(e){const n=["movement","ranged","melee","special"],t=n.indexOf(e.currentTiming);if(t===-1){console.warn("[GameReducer] Invalid currentTiming:",e.currentTiming);const r=zn(e,`ADVANCE_TIMING: currentTiming 无效(${e.currentTiming})，强制推进阶段`);return fn(r,{type:"ADVANCE_PHASE"})}if(t<n.length-1){const r=n[t+1],s={...e,currentTiming:r},i={...s,turnOrder:Wo(s)};return Z(i,`▸ ${Uo(r)} — 行动顺序：${i.turnOrder.map(se).join(" → ")}`)}const a=zn(e,`ADVANCE_TIMING: ${e.phase}/${e.currentTiming} 时机全部完成，推进到下一阶段`);return fn(a,{type:"ADVANCE_PHASE"})}function Oh(e){var t,a;const n=zn(e,`ADVANCE_PHASE: ${e.phase} → 推进`);switch(e.phase){case"draw":{const r=n.playerIds.find(s=>!n.players[s].isDefeated)??n.playerIds[0];return{...n,phase:"plotting",plottingStep:`transition_to_${r}`,activePlayer:r,currentTiming:null}}case"plotting":{const s={...nl(n,1),phase:"action_seg1",plottingStep:"complete",currentTiming:"movement"};let l={...s,turnOrder:Wo(s)};for(const d of l.playerIds){const u=l.players[d];if(u.isDefeated)continue;const p=u.plotSeg1?((t=q(u.plotSeg1.defId))==null?void 0:t.nameCn)??u.plotSeg1.defId:"(空)",f=u.plotSeg2?((a=q(u.plotSeg2.defId))==null?void 0:a.nameCn)??u.plotSeg2.defId:"(空)";l=zn(l,`${se(d)} 配置: 阶段1=[${p}] 阶段2=[${f}] 位置=${u.position.row},${u.position.col} 朝向=${u.facing}`)}return Z(l,`▸ ${Uo("movement")} — 行动顺序：${l.turnOrder.map(se).join(" → ")}`)}case"action_seg1":{const s={...nl(n,2),phase:"action_seg2",currentTiming:"movement"},i={...s,turnOrder:Wo(s)};return Z(i,`▸ ${Uo("movement")} — 行动顺序：${i.turnOrder.map(se).join(" → ")}`)}case"action_seg2":return Kh(n);default:return n}}function Kh(e){let n=zn(e,`CLEANUP: 第${e.roundNumber}回合结束`);for(const l of e.playerIds){const d=e.players[l];n=zn(n,`  ${se(l)}: 位置=(${d.position.row},${d.position.col}) 朝向=${d.facing} 手牌=${d.hand.length} 牌组=${d.deck.filter(u=>!u.destroyed).length} 弃牌=${d.discard.length} ${d.isDefeated?"已击破":"存活"}`)}e=n;const t=(l,d)=>!d||d.destroyed?l:{...l,discard:[...l.discard,d]},a={...e.players};for(const l of e.playerIds){let d=t(e.players[l],e.players[l].plotSeg1);d=t(d,d.plotSeg2),d={...d,plotSeg1:null,plotSeg2:null},d={...d,discard:[...d.discard,...d.hand.filter(u=>!u.destroyed)],hand:[]},a[l]=d}const r={...e,players:a,phase:"cleanup",currentTiming:null},s=Z(r,`--- 第 ${e.roundNumber} 回合结束 ---`),i=nn(s);return i.phase==="game_over"?i:Jh(i)}function Jh(e){var r;const n=e.roundNumber+1;let t=Z({...e,phase:"draw",roundNumber:n},`=== 第 ${n} 回合开始 ===`);for(const s of e.playerIds){if(t.players[s].isDefeated)continue;const i=((r=Q.find(l=>l.id===t.players[s].unitId))==null?void 0:r.evasion)??5;t=cc(t,{playerId:s,count:i})}const a=e.playerIds.find(s=>!t.players[s].isDefeated)??e.playerIds[0];return{...t,phase:"plotting",plottingStep:`transition_to_${a}`,activePlayer:a,currentTiming:null}}function nn(e){const n=i=>{const l=[...i.deck,...i.hand,...i.auxiliary,...i.discard,...i.plotSeg1?[i.plotSeg1]:[],...i.plotSeg2?[i.plotSeg2]:[]].filter(u=>!u.destroyed);return l.length<=3?!0:!l.some(u=>{const p=q(u.defId);return p&&(p.actionType==="ranged"||p.actionType==="melee"||p.actionType==="charge")})},t={...e.players};let a=!1;for(const i of e.playerIds){if(t[i].isDefeated)continue;n(t[i])&&(t[i]={...t[i],isDefeated:!0},a=!0)}if(!a)return e;let r={...e,players:t};for(const i of e.playerIds)if(!e.players[i].isDefeated&&r.players[i].isDefeated){const l=Q.find(f=>f.id===r.players[i].unitId),d=e.playerIds.indexOf(i),u=d>=0?`P${d+1}`:i,p=r.lastDamageContext;if(p&&p.targetId===i&&p.attackerId){const f=Q.find(m=>{var h;return m.id===((h=r.players[p.attackerId])==null?void 0:h.unitId)}),g=e.playerIds.indexOf(p.attackerId),x=g>=0?`P${g+1}`:p.attackerId;r=Z(r,`💀 ${u}[${(l==null?void 0:l.nameCn)??i}] 被 ${x}[${(f==null?void 0:f.nameCn)??p.attackerId}] 以【${p.weaponName}】击毁！`)}else r=Z(r,`💀 ${u}[${(l==null?void 0:l.nameCn)??i}] 机体严重受损，宣告报废！`)}const s=new Set;for(const i of e.playerIds)r.players[i].isDefeated||s.add(r.teams[i]);if(s.size<=1){if(s.size===0)return Z({...r,phase:"game_over"},"所有队伍同时全灭！平局！");const i=[...s][0],l=e.playerIds.filter(d=>r.teams[d]===i).map(d=>{const u=Q.find(p=>p.id===r.players[d].unitId);return(u==null?void 0:u.nameCn)??d}).join("、");return Z({...r,phase:"game_over"},`队伍${i+1}（${l}）获胜！`)}return r}function Bh(e,n){if(e.currentTiming!=="melee")return e;const{playerId:t,to:a}=n,r=ie(e,t),s=e.playerIds.filter(p=>p!==t).map(p=>ie(e,p).position);if(!jn(r,q,"melee").moveSensor)return Z(e,`${t} 移动传感器未激活（需要辅助区中有≥2张）`);if(!Nf(e.map,r.position,s).some(p=>re(p,a)))return Z(e,`${t} 移动传感器目标格不在有效范围内`);const d={...r,position:a};let u=ue(e,t,d);return u=Z(u,`【辅助】${t} 移动传感器：向 (${a.row}, ${a.col}) 移动1格`),u}function Fh(e,n){const{playerId:t,facing:a}=n,r=ie(e,t),s=Q.find(d=>d.id===r.unitId),i=(s==null?void 0:s.nameCn)??t;let l=ue(e,t,{...r,facing:a});return l=Z(l,`${i} 调整机头朝向至【${a}】`),l}function fn(e,n){switch(n.type){case"SELECT_UNIT":return wh(e,n);case"SELECT_MAP":return Sh(e,n);case"CONFIRM_SETUP":return Mh(e);case"START_PLOTTING":return Th(e);case"SET_SPAWN_POSITION":return Ch(e,n);case"SET_SPAWN_FACING":return Nh(e,n);case"DRAW_CARDS":return cc(e,n);case"PLOT_CARD":return Eh(e,n);case"CONFIRM_PLOT":return Dh(e,n);case"ADVANCE_PLOT_STEP":return zh(e);case"MOVE_UNIT":return $h(e,n);case"ADJUST_FACING":return Fh(e,n);case"ADVANCE_TIMING":return Md(e);case"ADVANCE_PHASE":return Oh(e);case"SKIP_ACTION":return Md(e);case"RESET_GAME":return Mf(n.playerCount??2,n.teamCount??2);case"LOAD_GAME":return n.state;case"ADD_LOG":return Z(e,n.message);case"RESOLVE_RANGED":return Nd(e,n,"ranged");case"RESOLVE_MELEE":return Nd(e,n,"melee");case"RESOLVE_CHARGE":return Ph(e,n);case"PLACE_MINE":return Ah(e,n);case"SELECT_DAMAGE_CARD":return Rh(e,n);case"CONFIRM_DAMAGE_SELECTION":return Lh(e,n);case"CONFIRM_ARMOR_CHOICE":return Vh(e,n);case"MELEE_SENSOR_MOVE":return Bh(e,n);default:return e}}class Gh{constructor(){qe(this,"ctx",null);qe(this,"_enabled",!0);qe(this,"_volume",.5)}init(){this.ctx||(this.ctx=new AudioContext),this.ctx.state==="suspended"&&this.ctx.resume()}get enabled(){return this._enabled}set enabled(n){this._enabled=n}get volume(){return this._volume}set volume(n){this._volume=Math.max(0,Math.min(1,n))}ensure(){return!this._enabled||!this.ctx?null:(this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx)}makeGain(n,t){const a=n.createGain();return a.gain.value=t*this._volume,a.connect(n.destination),a}noiseBuffer(n,t){const a=Math.floor(n.sampleRate*t),r=n.createBuffer(1,a,n.sampleRate),s=r.getChannelData(0);for(let i=0;i<a;i++)s[i]=Math.random()*2-1;return r}cardFlip(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createBufferSource();a.buffer=this.noiseBuffer(n,.06);const r=n.createBiquadFilter();r.type="highpass",r.frequency.value=3e3;const s=this.makeGain(n,.25);s.gain.setValueAtTime(.25*this._volume,t),s.gain.exponentialRampToValueAtTime(.001,t+.05),a.connect(r),r.connect(s),a.start(t),a.stop(t+.06)}footstep(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createOscillator();a.type="sine",a.frequency.setValueAtTime(150,t),a.frequency.exponentialRampToValueAtTime(60,t+.05);const r=this.makeGain(n,.2);r.gain.setValueAtTime(.2*this._volume,t),r.gain.exponentialRampToValueAtTime(.001,t+.08),a.connect(r),a.start(t),a.stop(t+.08);const s=n.createBufferSource();s.buffer=this.noiseBuffer(n,.03);const i=n.createBiquadFilter();i.type="bandpass",i.frequency.value=800,i.Q.value=2;const l=this.makeGain(n,.1);l.gain.setValueAtTime(.1*this._volume,t),l.gain.exponentialRampToValueAtTime(.001,t+.03),s.connect(i),i.connect(l),s.start(t),s.stop(t+.03)}weaponFire(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createBufferSource();a.buffer=this.noiseBuffer(n,.15);const r=n.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(1200,t),r.frequency.exponentialRampToValueAtTime(400,t+.12),r.Q.value=3;const s=this.makeGain(n,.3);s.gain.setValueAtTime(.3*this._volume,t),s.gain.exponentialRampToValueAtTime(.001,t+.15),a.connect(r),r.connect(s),a.start(t),a.stop(t+.15);const i=n.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(800,t),i.frequency.exponentialRampToValueAtTime(200,t+.12);const l=this.makeGain(n,.15);l.gain.setValueAtTime(.15*this._volume,t),l.gain.exponentialRampToValueAtTime(.001,t+.12),i.connect(l),i.start(t),i.stop(t+.12)}metalImpact(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=[200,340];for(const i of a){const l=n.createOscillator();l.type="sine",l.frequency.value=i;const d=this.makeGain(n,.2);d.gain.setValueAtTime(.2*this._volume,t),d.gain.exponentialRampToValueAtTime(.001,t+.25),l.connect(d),l.start(t),l.stop(t+.25)}const r=n.createBufferSource();r.buffer=this.noiseBuffer(n,.02);const s=this.makeGain(n,.25);s.gain.setValueAtTime(.25*this._volume,t),s.gain.exponentialRampToValueAtTime(.001,t+.02),r.connect(s),r.start(t),r.stop(t+.02)}explosion(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createOscillator();a.type="sine",a.frequency.setValueAtTime(60,t),a.frequency.exponentialRampToValueAtTime(30,t+.5);const r=this.makeGain(n,.35);r.gain.setValueAtTime(.35*this._volume,t),r.gain.setValueAtTime(.35*this._volume,t+.1),r.gain.exponentialRampToValueAtTime(.001,t+.5),a.connect(r),a.start(t),a.stop(t+.5);const s=n.createBufferSource();s.buffer=this.noiseBuffer(n,.4);const i=n.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(3e3,t),i.frequency.exponentialRampToValueAtTime(200,t+.35);const l=this.makeGain(n,.3);l.gain.setValueAtTime(.3*this._volume,t),l.gain.exponentialRampToValueAtTime(.001,t+.35),s.connect(i),i.connect(l),s.start(t),s.stop(t+.4)}cardShatter(){const n=this.ensure();if(!n)return;const t=n.currentTime;for(let a=0;a<5;a++){const r=t+a*.03,s=n.createBufferSource();s.buffer=this.noiseBuffer(n,.02);const i=n.createBiquadFilter();i.type="highpass",i.frequency.value=1e3+a*300;const l=this.makeGain(n,.2);l.gain.setValueAtTime(.2*this._volume,r),l.gain.exponentialRampToValueAtTime(.001,r+.02),s.connect(i),i.connect(l),s.start(r),s.stop(r+.02)}}mineBeep(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=[600,800,1e3];for(let r=0;r<a.length;r++){const s=t+r*.1,i=n.createOscillator();i.type="sine",i.frequency.value=a[r];const l=this.makeGain(n,.15);l.gain.setValueAtTime(.15*this._volume,s),l.gain.setValueAtTime(.15*this._volume,s+.05),l.gain.exponentialRampToValueAtTime(.001,s+.08),i.connect(l),i.start(s),i.stop(s+.08)}}chargeRumble(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(80,t),a.frequency.linearRampToValueAtTime(120,t+.3);const r=n.createOscillator();r.type="sine",r.frequency.value=15;const s=n.createGain();s.gain.value=.15*this._volume;const i=this.makeGain(n,.25);i.gain.setValueAtTime(.25*this._volume,t),i.gain.exponentialRampToValueAtTime(.001,t+.4),r.connect(s),s.connect(i.gain),a.connect(i),r.start(t),a.start(t),r.stop(t+.4),a.stop(t+.4)}uiBlip(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createOscillator();a.type="sine",a.frequency.value=880;const r=this.makeGain(n,.1);r.gain.setValueAtTime(.1*this._volume,t),r.gain.exponentialRampToValueAtTime(.001,t+.06),a.connect(r),a.start(t),a.stop(t+.06)}}const ge=new Gh,Hh={move_step:200,card_draw:350,ranged_hit:400,melee_hit:350,charge_move:300,charge_hit:450,card_destroy:400,mine_explode:500,mine_place:300,screen_shake:300,damage_number:600,cleanup_discard:2500,batch_card_draw:1600,deck_reshuffle:800};function Uh(e){return Hh[e.type]??300}const Tf=k.createContext(null);function ys({children:e}){const[n,t]=k.useState(!1),[a,r]=k.useState(null),[s,i]=k.useState(()=>Object.fromEntries(da.map(m=>[m,null]))),l=k.useRef([]),d=k.useRef(!1),u=k.useRef(!1),p=k.useRef((()=>{try{const m=localStorage.getItem("em_anim_speed");return m==="fast"?.5:m==="off"?0:1}catch{return 1}})()).current,f=k.useCallback(()=>{if(u.current||l.current.length===0){r(null),t(!1),i(Object.fromEntries(da.map(_=>[_,null]))),d.current=!1,u.current=!1;return}const m=l.current.shift();r(m),m.type==="move_step"&&i(_=>({..._,[m.playerId]:{pos:m.to,facing:m.facing}})),Wh(m);const h=p===0?0:Uh(m)*p;h===0?f():setTimeout(()=>f(),h)},[p]),g=k.useCallback(m=>{if(m.length!==0&&p!==0&&(l.current.push(...m),!d.current)){d.current=!0,u.current=!1,t(!0);const h=m.find(_=>_.type==="move_step");h&&i(_=>({..._,[h.playerId]:{pos:h.from,facing:h.facing}})),setTimeout(()=>f(),16)}},[f,p]),x=k.useCallback(()=>{u.current=!0,l.current=[],r(null),t(!1),i(Object.fromEntries(da.map(m=>[m,null]))),d.current=!1},[]);return o.jsx(Tf.Provider,{value:{isAnimating:n,currentEvent:a,animatedPositions:s,enqueueEvents:g,skipAnimation:x,speedMultiplier:p},children:e})}function Dr(){const e=k.useContext(Tf);if(!e)throw new Error("useAnimation must be used inside <AnimationProvider>");return e}function Wh(e){switch(e.type){case"card_draw":ge.cardFlip();break;case"move_step":ge.footstep();break;case"ranged_hit":ge.weaponFire(),setTimeout(()=>ge.metalImpact(),100);break;case"melee_hit":ge.metalImpact();break;case"charge_move":ge.chargeRumble();break;case"charge_hit":ge.explosion(),setTimeout(()=>ge.metalImpact(),80);break;case"card_destroy":e.isBomb?ge.explosion():ge.cardShatter();break;case"mine_explode":ge.explosion();break;case"mine_place":ge.mineBeep();break;case"cleanup_discard":case"batch_card_draw":ge.cardFlip();break;case"deck_reshuffle":ge.cardFlip(),setTimeout(()=>ge.cardFlip(),200);break}}function Zh(e,n){const{isAnimating:t,enqueueEvents:a}=Dr();return k.useCallback(r=>{const s=r.type==="ADVANCE_TIMING"||r.type==="ADVANCE_PHASE"||r.type==="ADJUST_FACING"||r.type==="START_PLOTTING"||r.type==="SELECT_DAMAGE_CARD"||r.type==="CONFIRM_DAMAGE_SELECTION";if(t&&!s)return;const i=n.current,l=fn(i,r);e(r);const d=Yh(i,l,r);d.length>0&&a(d)},[e,n,t,a])}function Yh(e,n,t){switch(t.type){case"MOVE_UNIT":return Xh(e,n,t);case"RESOLVE_RANGED":return Td(e,n,"ranged",t.attackerId,t.targetId);case"RESOLVE_MELEE":return Td(e,n,"melee",t.attackerId,t.targetId);case"RESOLVE_CHARGE":return Qh(e,n,t.attackerId,t.targetId);case"DRAW_CARDS":return qh(e,n,t.playerId);case"ADVANCE_TIMING":return e.phase==="action_seg2"&&n.phase!=="action_seg2"?[ex(e),...Ed(e,n,"player1"),...Ed(e,n,"player2")]:[];case"PLACE_MINE":return[{type:"mine_place",playerId:t.playerId,position:t.to}];case"SELECT_DAMAGE_CARD":return nx(e,n);default:return[]}}function Xh(e,n,t){const{playerId:a}=t,r=mn(e,a),s=mn(n,a),i=r.position;if(re(i,s.position))return[];const l=[],d=t.path&&t.path.length>0?t.path:[s.position];let u=i;for(const g of d){const x=Tt(g.row-u.row,g.col-u.col);if(l.push({type:"move_step",playerId:a,from:u,to:g,facing:x}),u=g,re(g,s.position))break}const p=e.mines.filter(g=>!n.mines.some(x=>x.id===g.id));for(const g of p)l.push({type:"mine_explode",position:g.position,damage:g.damage}),l.push({type:"screen_shake",intensity:"heavy"});const f=_s(e,n,a);return Is(l,a,f),l}function Td(e,n,t,a,r){var p;const s=[],i=mn(e,r).position,l=_s(e,n,r),d=l.length;if(d===0&&!n.pendingDamage)return[];const u=d+(((p=n.pendingDamage)==null?void 0:p.remaining)??0);return s.push({type:t==="ranged"?"ranged_hit":"melee_hit",attackerId:a,targetId:r,damage:u,targetPos:i}),s.push({type:"screen_shake",intensity:t==="melee"?"medium":"light"}),u>0&&s.push({type:"damage_number",position:i,value:u}),Is(s,r,l),s}function Qh(e,n,t,a){var p;const r=[],s=mn(e,t),i=mn(n,t),l=mn(e,a).position;re(s.position,i.position)||(r.push({type:"charge_move",attackerId:t,from:s.position,to:i.position}),r.push({type:"move_step",playerId:t,from:s.position,to:i.position,facing:Tt(i.position.row-s.position.row,i.position.col-s.position.col)}));const d=_s(e,n,a),u=d.length+(((p=n.pendingDamage)==null?void 0:p.remaining)??0);return r.push({type:"charge_hit",attackerId:t,targetId:a,damage:u,targetPos:l}),r.push({type:"screen_shake",intensity:"heavy"}),u>0&&r.push({type:"damage_number",position:l,value:u}),Is(r,a,d),r}function qh(e,n,t){const a=[],r=mn(e,t),s=mn(n,t),i=new Set(r.hand.map(u=>u.instanceId)),l=s.hand.filter(u=>!i.has(u.instanceId));if(l.length>0){const u=r.deck.filter(g=>!g.destroyed).length,p=Math.min(l.length,u),f=l.length-p;p>0&&a.push({type:"batch_card_draw",playerId:t,count:p}),f>0&&(a.push({type:"deck_reshuffle",playerId:t}),a.push({type:"batch_card_draw",playerId:t,count:f}))}const d=new Set(r.auxiliary.map(u=>u.instanceId));for(const u of s.auxiliary)d.has(u.instanceId)||a.push({type:"card_draw",playerId:t,card:u,defId:u.defId,isAuxiliary:!0});return a}function ex(e){function n(t){const a=[];for(const r of t.hand)r.destroyed||a.push(r);return t.plotSeg1&&!t.plotSeg1.destroyed&&a.push(t.plotSeg1),t.plotSeg2&&!t.plotSeg2.destroyed&&a.push(t.plotSeg2),a}return{type:"cleanup_discard",p1Cards:n(e.players.player1),p2Cards:n(e.players.player2)}}function Ed(e,n,t){const a=[],r=mn(e,t),s=mn(n,t),i=s.hand.length;if(i>0){const d=r.deck.filter(f=>!f.destroyed).length,u=Math.min(i,d),p=i-u;u>0&&a.push({type:"batch_card_draw",playerId:t,count:u}),p>0&&(a.push({type:"deck_reshuffle",playerId:t}),a.push({type:"batch_card_draw",playerId:t,count:p}))}const l=new Set(r.auxiliary.map(d=>d.instanceId));for(const d of s.auxiliary)l.has(d.instanceId)||a.push({type:"card_draw",playerId:t,card:d,defId:d.defId,isAuxiliary:!0});return a}function nx(e,n){const t=e.pendingDamage;if(!t)return[];const a=_s(e,n,t.targetId),r=[];return Is(r,t.targetId,a),r}function mn(e,n){return e.players[n]}function _s(e,n,t){const a=new Set(mn(e,t).destroyedCards.map(r=>r.instanceId));return mn(n,t).destroyedCards.filter(r=>!a.has(r.instanceId))}function Is(e,n,t){for(let a=0;a<t.length;a++){const r=t[a],s=q(r.defId);e.push({type:"card_destroy",playerId:n,card:r,defId:r.defId,isBomb:(s==null?void 0:s.hasBombIcon)??!1,index:a,total:t.length})}}const tx={player1:!1,player2:!1,player1Difficulty:"hard",player2Difficulty:"hard",playerAI:{},playerDifficulty:{}};function $e(e,n){var t;return((t=e.playerAI)==null?void 0:t[n])!==void 0?e.playerAI[n]:n==="player1"?e.player1:n==="player2"?e.player2:!1}function zr(e,n){var t;return((t=e.playerDifficulty)==null?void 0:t[n])!==void 0?e.playerDifficulty[n]:n==="player1"?e.player1Difficulty:n==="player2"?e.player2Difficulty:"hard"}function uc(e,n){const t=e.teams[n],a=e.players[n].position;let r=null,s=1/0;for(const i of e.playerIds){if(i===n||e.teams[i]===t||e.players[i].isDefeated)continue;const l=e.players[i].position,d=Math.abs(l.row-a.row)+Math.abs(l.col-a.col);d<s&&(s=d,r=i)}return r??e.playerIds.find(i=>i!==n&&!e.players[i].isDefeated&&e.teams[i]!==t)??e.playerIds.find(i=>i!==n)??n}function _a(e,n){return e.players[n]}function ax(e,n,t,a,r,s){if(!n)return 0;const i=Me(t.position,a.position);let l;switch(n.actionType){case"ranged":case"melee":case"charge":l=5+(n.damage??0);break;case"movement":l=2+(n.movementValue??0)*.5;break;case"aim":case"armor":l=2;break;case"mine":l=1.5+(n.damage??0)*.2;break;default:l=1}n.hasBombIcon&&(s?l+=5:l+=8);const u=Dt(t).filter(p=>p.defId===e.defId&&!p.destroyed).length;if(u>=3?l-=3:u===2&&(l-=1.5),n.actionType==="movement"&&i>=4&&(l+=3),n.actionType==="ranged"){const p=n.rangeMin??1,f=n.rangeMax??6;i>=p&&i<=f&&(l+=4)}return(n.actionType==="melee"||n.actionType==="charge")&&i<=2&&(l+=4),l}function Jt(e,n,t,a,r,s){if(e.actionType!=="movement")return[];const i=jn(n,r,"movement"),l=(e.movementValue??0)+(i.wheel?2:0);if(l<=0)return[];const d=[t.position],u=bs(a,n.position,l,d,i,n.facing),p=[];for(const{pos:f}of u){const g=sc(a,n.position,n.facing,f,l,[t.position],i);g&&p.push({pos:f,facing:g.finalFacing,dist:Me(f,t.position)})}return p.sort((f,g)=>f.dist-g.dist),p}function rx(e,n,t,a,r,s){const i=Jt(e,t,a,r,s);if(i.length===0)return null;if(n.actionType==="melee")return i.find(l=>l.dist===1)??null;if(n.actionType==="ranged"){const l=n.rangeMin??1,d=n.rangeMax??6,u=n.rangeOptimal??Math.round((l+d)/2);let p=null,f=1/0;for(const g of i){if(g.dist<l||g.dist>d||!xr(r,g.pos,a.position)||!Dn(g.facing,g.pos,a.position))continue;const x=Math.abs(g.dist-u);x<f&&(f=x,p=g)}return p}return n.actionType==="charge"?i.find(l=>l.dist<=3)??null:null}function qa(e,n,t,a,r,s,i){var u;let l=e.damage??0;if(e.actionType==="ranged"&&e.rangeOptimal!==void 0&&e.damageAttenuation!==void 0){const p=Math.max(0,t-e.rangeOptimal);l-=p*e.damageAttenuation}const d=(u=i.cells[n.row])==null?void 0:u[n.col];return(d==null?void 0:d.terrain)==="water"&&e.isEnergyWeapon&&(l-=1),Math.max(0,l)}function ox(e,n){const t=e.hand.filter(r=>!r.destroyed);if(t.length===0)return 0;const a=t.filter(r=>{const s=n(r.defId);return s&&s.actionType==="armor"}).length;return Math.min(1,a/t.length)}function Dd(e,n,t,a,r,s){var g,x;const i=Me(t.position,a.position),l=(g=r.cells[a.position.row])==null?void 0:g[a.position.col],d=(x=r.cells[t.position.row])==null?void 0:x[t.position.col],u=ox(a,s),p=m=>["ranged","melee","charge"].includes(m.actionType),f=(l==null?void 0:l.terrain)==="forest"?.85:1;if(e.actionType==="movement"&&p(n)){const m=rx(e,n,t,a,r,s);if(m)return qa(n,m.pos,m.dist,2,!1,!1,r)*(1-u*.5)*f*3.5+2;const h=Jt(e,t,a,r,s),_=h.length>0?h[0].dist:i;return(i-_)*1.5+(n.damage??0)*.3}if(e.actionType==="aim"&&p(n)){let m=(n.damage??0)+1,h=!1;if(n.actionType==="ranged"){const b=n.rangeMin??1,v=n.rangeMax??6;if(h=i>=b&&i<=v&&xr(r,t.position,a.position)&&Dn(t.facing,t.position,a.position),h&&n.rangeOptimal&&n.damageAttenuation){const y=Math.max(0,i-n.rangeOptimal);m-=y*n.damageAttenuation}(d==null?void 0:d.terrain)==="water"&&n.isEnergyWeapon&&(m-=1)}else n.actionType==="melee"?h=i===1:n.actionType==="charge"&&(h=i<=3);m=Math.max(0,m);const _=m*(1-u*.5)*f;return h?_*4+3:_*.5}if(p(e)&&n.actionType==="movement"){let m=0;if(e.actionType==="ranged"){const b=e.rangeMin??1,v=e.rangeMax??6;i>=b&&i<=v&&xr(r,t.position,a.position)&&Dn(t.facing,t.position,a.position)?m=qa(e,t.position,i,1,!1,!1,r)*(1-u*.5)*f*2.5:m=(e.damage??0)*.3}else e.actionType==="melee"?i===1?m=qa(e,t.position,i,1,!1,!1,r)*(1-u*.5)*3:m=(e.damage??0)*.3:e.actionType==="charge"&&(m=i<=3?(e.damage??0)*2:(e.damage??0)*.3);const h=Jt(n,t,a,r,s),_=h.length>0?Math.max(0,i-h[0].dist)*1+1:.5;return m+_}if(p(e)&&n.actionType==="armor"){let m=Qr(e,i,t.position,t.facing,a.position,r,f,u,1);const h=i<=3?2.5:i<=5?1.5:.5;return m+h}if(e.actionType==="armor"&&p(n)){const m=i<=3?2.5:i<=5?1.5:.5;let h=Qr(n,i,t.position,t.facing,a.position,r,f,u,2);return m+h}if(e.actionType==="movement"&&n.actionType==="movement"){if(i<=3)return 1;const m=Jt(e,t,a,r,s),h=m.length>0?m[0].dist:i,_=i-h,b=n.movementValue??0;return(_+Math.min(b,h-1))*1.2+.5}if(p(e)&&p(n)){const m=Qr(e,i,t.position,t.facing,a.position,r,f,u,1),h=Qr(n,i,t.position,t.facing,a.position,r,f,u,2),_=m>1&&h>1;return m+h+(_?2:0)}if(e.actionType==="movement"&&n.actionType==="armor"){const m=Jt(e,t,a,r,s),h=m.length>0?m[0].dist:i;return(i-h)*1+(h<=3?2:.5)}if(e.actionType==="armor"&&n.actionType==="movement"){const m=i<=3?2:.5,h=Jt(n,t,a,r,s),_=h.length>0?h[0].dist:i;return m+(i-_)*1}if(e.actionType==="aim"&&!p(n))return .3+qr(n,i);if(e.actionType==="mine"||n.actionType==="mine"){const m=i<=3?1.5:.5,h=e.actionType==="mine"?n:e;return m+qr(h,i)}return qr(e,i)+qr(n,i)}function Qr(e,n,t,a,r,s,i,l,d){if(e.actionType==="ranged"){const u=e.rangeMin??1,p=e.rangeMax??6;return n>=u&&n<=p&&xr(s,t,r)&&Dn(a,t,r)?qa(e,t,n,d,!1,!1,s)*(1-l*.5)*i*2.5:(e.damage??0)*.3}return e.actionType==="melee"?n===1?qa(e,t,n,d,!1,!1,s)*(1-l*.5)*3:(e.damage??0)*.3:e.actionType==="charge"?n<=3?(e.damage??0)*2:(e.damage??0)*.3:0}function qr(e,n){switch(e.actionType){case"movement":return(e.movementValue??0)*.4+(n>3?1:.2);case"armor":return n<=3?2:n<=5?1:.3;case"aim":return .3;case"mine":return n<=3?1.5:.5;default:return .1}}function sx(e,n,t,a,r){const s=e.hand.filter(u=>!u.destroyed);if(s.length===0)return{seg1:null,seg2:null};if(s.length===1)return{seg1:s[0].instanceId,seg2:null};if(a==="easy"){const u=[...s].sort(()=>Math.random()-.5);return{seg1:u[0].instanceId,seg2:u[1].instanceId}}let i=-1/0,l=s[0].instanceId,d=s[1].instanceId;for(let u=0;u<s.length;u++){const p=s[u],f=t(p.defId);if(f)for(let g=0;g<s.length;g++){if(u===g)continue;const x=s[g],m=t(x.defId);if(!m)continue;const h=r?Dd(f,m,e,n,r,t):f.actionType!=="movement"&&m.actionType!=="movement"?Dd(f,m,e,n,{width:11,height:7,cells:[]},t):0;h>i&&(i=h,l=p.instanceId,d=x.instanceId)}}return{seg1:l,seg2:d}}function ix(e,n,t,a,r){const s=_a(e,n),i=uc(e,n),l=_a(e,i),d=jn(s,a,"movement"),u=t===1?s.plotSeg1:s.plotSeg2;if(!u)return null;const p=a(u.defId);if(!p||p.actionType!=="movement")return null;const f=(p.movementValue??0)+(d.wheel?2:0);if(f<=0)return null;const g=e.playerIds.filter(S=>S!==n&&!e.players[S].isDefeated).map(S=>e.players[S].position),x=bs(e.map,s.position,f,g,d,s.facing);if(x.length===0)return null;function m(S){const z=sc(e.map,s.position,s.facing,S,f,g,d);return z?{pos:S,path:z.path,finalFacing:z.finalFacing}:null}if(r==="easy"){if(Math.random()<.5)return null;const S=[...x].sort(()=>Math.random()-.5);for(const{pos:z}of S){const M=m(z);if(M)return M}return null}const _=(t===1?2:1)===1?s.plotSeg1:s.plotSeg2,b=_?a(_.defId):null;let v;if(!b)v=1;else if(b.actionType==="ranged"){const S=b.rangeMin??1,z=b.rangeMax??6;v=b.rangeOptimal??Math.round((S+z)/2)}else b.actionType==="melee"||b.actionType==="charge"?v=1:v=2;const y=Er(l),w=[];for(const S of y){const z=a(S.defId);z&&z.actionType==="ranged"&&w.push({min:z.rangeMin??1,max:z.rangeMax??6})}const T=e.mines.filter(S=>S.ownerId!==n),$=[];for(const{pos:S}of x){const z=Me(S,l.position),M=-Math.abs(z-v)*3,K=T.some(R=>re(R.position,S))?-10:0,H=e.map.cells[S.row][S.col];let D=0;H.terrain==="forest"?D=1.5:H.terrain==="water"&&(D=-1);let J=0;for(const R of w)z<R.min||z>R.max?J+=.5:J-=.5;$.push({pos:S,quickScore:M+K+D+J})}$.sort((S,z)=>z.quickScore-S.quickScore);const j=$.slice(0,5);let C=-1/0,A=null;for(const{pos:S,quickScore:z}of j){const M=m(S);if(!M)continue;const E=Dn(M.finalFacing,S,l.position)?1:-1,K=z+E;K>C&&(C=K,A=M)}if(!A)for(const{pos:S}of $.slice(5)){const z=m(S);if(z){A=z;break}}return A}function lx(e,n,t,a,r,s){const i=_a(e,n),l=uc(e,n),d=_a(e,l),u=Rn(i,t,a,r);if(!u)return!1;if(u.actionType==="charge"&&a==="melee"&&s==="hard"){const f=Q.find(v=>v.id===i.unitId),g=Q.find(v=>v.id===d.unitId);if(!f||!g)return!1;const x=yr(i,d,t,e.map,f,g,r);if(!x.canAttack)return!1;const m=x.counterDamage,h=Cd(i),_=Cd(d);return!(x.damage-m<0&&h<=m+2||h<=5&&m>=3||_<=3&&m>=2)}if(u.actionType==="charge"&&a==="melee"){const f=Q.find(m=>m.id===i.unitId),g=Q.find(m=>m.id===d.unitId);return!f||!g?!1:yr(i,d,t,e.map,f,g,r).canAttack}return Go(i,d,t,a,e.map,r).canAttack}function cx(e,n,t,a,r=!1,s){const i=Er(n);if(i.length===0)return null;if(a==="easy")return i[Math.floor(Math.random()*i.length)].instanceId;const l=s??n;let d=null,u=r?-1/0:1/0;for(const p of i){const f=t(p.defId),g=ax(p,f,n,l,t,r);(r?g>u:g<u)&&(u=g,d=p)}return(d==null?void 0:d.instanceId)??null}function dx(e,n,t,a,r){const s=_a(e,n),i=_a(e,uc(e,n)),l=t===1?s.plotSeg1:s.plotSeg2;if(!l)return null;const d=a(l.defId);if(!d||d.actionType!=="mine")return null;const u=e.mines.map(m=>m.position),p=[];for(let m=-1;m<=1;m++)for(let h=-1;h<=1;h++){if(m===0&&h===0)continue;const _=s.position.row+m,b=s.position.col+h;if(_<0||_>=e.map.height||b<0||b>=e.map.width)continue;const v={row:_,col:b};re(v,s.position)||re(v,i.position)||u.some(y=>re(y,v))||p.push(v)}if(p.length===0)return null;if(r==="easy")return p.sort((m,h)=>Me(m,i.position)-Me(h,i.position)),p[0];let f=-1/0,g=null;const x=Me(s.position,i.position);for(const m of p){let h=0;const _=Me(m,i.position);h+=Math.max(0,5-_);const b=m.row,v=m.col;Me(m,s.position)<x&&(h+=2),Dn(i.facing,i.position,m)&&Me(i.position,m)<=3&&(h+=1.5);const w=b===0||b===e.map.height-1,T=v===0||v===e.map.width-1;(w||T)&&(h+=1),w&&T&&(h+=.5);const $=e.map.cells[b][v];($.terrain==="forest"||$.terrain==="water")&&(h+=.5),h>f&&(f=h,g=m)}return g}const ks=1,ux=["slot_1","slot_2","slot_3","slot_4","slot_5"],px=10,_r="em_saves_index",Ir="em_replays_index",pc=e=>`em_save_${e}`,Yo=e=>`em_replay_${e}`;function Sa(e){try{const n=localStorage.getItem(e);return n?JSON.parse(n):[]}catch{return[]}}function js(e,n){localStorage.setItem(e,JSON.stringify(n))}function zd(){return Sa(_r).sort((n,t)=>t.timestamp-n.timestamp)}function Ef(e,n,t,a){const r={slotId:e,timestamp:Date.now(),roundNumber:n.roundNumber,phase:n.phase,player1Unit:n.players.player1.unitId,player2Unit:n.players.player2.unitId,mapId:n.map.id,mapName:n.map.nameCn,isAutoSave:a},s={version:ks,metadata:r,gameState:n,aiConfig:t};try{localStorage.setItem(pc(e),JSON.stringify(s))}catch{throw new Error("存储空间不足，无法保存存档")}const l=Sa(_r).filter(d=>d.slotId!==e);return l.push(r),js(_r,l),r}function fx(e){try{const n=localStorage.getItem(pc(e));if(!n)return null;const t=JSON.parse(n);if(!gx(t))return null;const a=t;return a.gameState.playerIds||(a.gameState.playerIds=["player1","player2"],a.gameState.teams={player1:0,player2:1},a.gameState.teamCount=2,a.gameState.shuffleSeed=a.metadata.timestamp),a}catch{return null}}function mx(e){localStorage.removeItem(pc(e));const n=Sa(_r);js(_r,n.filter(t=>t.slotId!==e))}function gx(e){if(!e||typeof e!="object")return!1;const n=e;if(n.version!==ks||!n.gameState||typeof n.gameState!="object")return!1;const t=n.gameState;if(!t.phase||!t.players||!t.map)return!1;const a=t.players;return!(!a.player1||!a.player2||!n.metadata||typeof n.metadata!="object"||!n.aiConfig||typeof n.aiConfig!="object")}function $d(){return Sa(Ir).sort((n,t)=>t.timestamp-n.timestamp)}function hx(e,n,t){const a=`${Date.now()}`,r={replayId:a,timestamp:Date.now(),totalRounds:e.roundNumber,totalActions:n.length,player1Unit:e.players.player1.unitId,player2Unit:e.players.player2.unitId,mapId:e.map.id,mapName:e.map.nameCn,winner:t},s={version:ks,metadata:r,initialState:e,actions:n};try{localStorage.setItem(Yo(a),JSON.stringify(s))}catch{throw new Error("存储空间不足，无法保存录像")}const i=Sa(Ir);for(i.push(r),i.sort((l,d)=>l.timestamp-d.timestamp);i.length>px;){const l=i.shift();localStorage.removeItem(Yo(l.replayId))}return js(Ir,i),r}function Ad(e){try{const n=localStorage.getItem(Yo(e));if(!n)return null;const t=JSON.parse(n);if(!vx(t))return null;const a=t;return a.initialState.playerIds||(a.initialState.playerIds=["player1","player2"],a.initialState.teams={player1:0,player2:1},a.initialState.teamCount=2,a.initialState.shuffleSeed=a.metadata.timestamp),a}catch{return null}}function xx(e){localStorage.removeItem(Yo(e));const n=Sa(Ir);js(Ir,n.filter(t=>t.replayId!==e))}function vx(e){if(!e||typeof e!="object")return!1;const n=e;return!(n.version!==ks||!n.initialState||typeof n.initialState!="object"||!Array.isArray(n.actions)||!n.metadata||typeof n.metadata!="object")}function bx(e,n){let t=e.initialState,a=0;for(;a<e.actions.length&&!(t.roundNumber>=n);a++)t=fn(t,e.actions[a]);return{state:t,actionIndex:a}}const ua={N:"↑北",S:"↓南",E:"→东",W:"←西"},eo={setup:"配置",pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"行动阶段·段落1",action_seg2:"行动阶段·段落2",cleanup:"清理阶段",game_over:"对局结束"},yx={movement:"移动时序",ranged:"射击时序",melee:"近战时序",special:"特殊时序"},_x={movement:"移动",ranged:"射击",melee:"近战",charge:"突击",aim:"瞄准",armor:"装甲",mine:"机雷",special:"特殊",auxiliary:"辅助"};function Ln(e){var n;return((n=Q.find(t=>t.id===e))==null?void 0:n.nameCn)??e}function tl(e){const n=q(e);if(!n)return e;const t=_x[n.actionType]??n.actionType;let a="";n.movementValue!=null&&(a=` 值${n.movementValue}`),n.damage!=null&&(a=` 伤害${n.damage}`,n.rangeMin!=null&&n.rangeMax!=null&&(a+=` 射程${n.rangeMin}-${n.rangeMax}`),n.rangeOptimal!=null&&(a+=` 最佳${n.rangeOptimal}`));const r=n.hasBombIcon?" [💣]":"",s=n.isKaiVariant?" [◆改]":"";return`${n.nameCn}(${t}${a}${r}${s})`}function al(e){const n=tl(e.defId);return e.destroyed?`${n}[已破坏]`:n}function no(e){return e.length===0?"(无)":e.map(n=>al(n)).join(", ")}function to(e,n){const t=[],a=Ln(e.unitId),r=ua[e.facing]??e.facing,s=e.deck.filter(d=>!d.destroyed).length,i=e.hand.filter(d=>!d.destroyed).length,l=e.auxiliary.filter(d=>!d.destroyed).length;if(t.push(`  ${n} [${a}]  位置(${e.position.row},${e.position.col}) 朝向${r}  败北=${e.isDefeated}`),t.push(`    牌库=${s}  手牌=${i}  辅助=${l}/${e.auxiliary.length}  弃牌=${e.discard.length}  破坏=${e.destroyedCards.length}  总存活=${s+i+l+e.discard.length+(e.plotSeg1&&!e.plotSeg1.destroyed?1:0)+(e.plotSeg2&&!e.plotSeg2.destroyed?1:0)}`),t.push(`    手牌: ${no(e.hand)}`),e.auxiliary.length>0&&t.push(`    辅助: ${no(e.auxiliary)}`),e.plotSeg1||e.plotSeg2){const d=e.plotSeg1?al(e.plotSeg1):"—",u=e.plotSeg2?al(e.plotSeg2):"—";t.push(`    布局: 段1=[${d}]  段2=[${u}]`)}return e.discard.length>0&&t.push(`    弃牌: ${no(e.discard)}`),e.destroyedCards.length>0&&t.push(`    破坏: ${no(e.destroyedCards)}`),t.join(`
`)}function Ix(e,n){const t=r=>{const s=n.players[r],i=n.playerIds.indexOf(r);return`${i>=0?`P${i+1}`:r}[${s?Ln(s.unitId):r}]`},a=(r,s)=>{const i=n.players[s];return i?[...i.deck,...i.hand,...i.auxiliary,...i.discard,...i.destroyedCards,...i.plotSeg1?[i.plotSeg1]:[],...i.plotSeg2?[i.plotSeg2]:[]].find(d=>d.instanceId===r):void 0};switch(e.type){case"SELECT_UNIT":{const r=n.playerIds.indexOf(e.playerId);return`${r>=0?`P${r+1}`:e.playerId} 选择机体 ${Ln(e.unitId)}`}case"SELECT_MAP":return`选择地图 ${e.mapId}`;case"CONFIRM_SETUP":return"确认设置，开始对局";case"SET_SPAWN_POSITION":return`${t(e.playerId)} 设置出生点 (${e.position.row},${e.position.col})`;case"SET_SPAWN_FACING":return`${t(e.playerId)} 设置初始朝向 ${ua[e.facing]??e.facing}`;case"START_PLOTTING":return"战前准备结束，进入布局阶段";case"DRAW_CARDS":return`${t(e.playerId)} 抽牌 ${e.count} 张`;case"PLOT_CARD":{const r=a(e.instanceId,e.playerId);return`${t(e.playerId)} 布局段落${e.seg}: ${r?tl(r.defId):e.instanceId}`}case"CONFIRM_PLOT":return`${t(e.playerId)} 确认布局完成`;case"ADVANCE_PLOT_STEP":return"[系统] 布局步骤推进";case"MOVE_UNIT":{const r=n.players[e.playerId],s=r?`(${r.position.row},${r.position.col})`:"(?,?)",i=`(${e.to.row},${e.to.col})`,l=e.finalFacing?` 朝向→${ua[e.finalFacing]??e.finalFacing}`:"",d=e.path?` 路径[${e.path.map(u=>`(${u.row},${u.col})`).join("→")}]`:"";return`${t(e.playerId)} 移动 ${s}→${i}${l}${d}`}case"ADJUST_FACING":return`${t(e.playerId)} 调整朝向→${ua[e.facing]??e.facing}`;case"RESOLVE_RANGED":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动射击`;case"RESOLVE_MELEE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动近战`;case"RESOLVE_CHARGE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动突击`;case"PLACE_MINE":return`${t(e.playerId)} 在 (${e.to.row},${e.to.col}) 部署机雷 (伤害${e.damage})`;case"SELECT_DAMAGE_CARD":{const r=a(e.instanceId,e.playerId);return`${t(e.playerId)} 选择摧毁: ${r?tl(r.defId):e.instanceId}`}case"CONFIRM_DAMAGE_SELECTION":return`${t(e.playerId)} 确认伤害结算`;case"SKIP_ACTION":return"[系统] 跳过行动";case"ADVANCE_TIMING":return"[系统] 推进时序";case"ADVANCE_PHASE":return"[系统] 推进阶段";case"MELEE_SENSOR_MOVE":return`${t(e.playerId)} 近战传感器移动至 (${e.to.row},${e.to.col})`;case"RESET_GAME":return"[系统] 重置游戏";case"LOAD_GAME":return"[系统] 加载存档";case"ADD_LOG":return`[系统] ${e.message}`;default:return`[未知] ${e.type}`}}function kx(e,n){const t=[],a="═".repeat(72),r="─".repeat(72);t.push(a),t.push("EMBRYO MACHINE — 对局分析日志"),t.push(a),t.push(`生成时间: ${new Date().toISOString()}`),t.push(`地图: ${e.map.nameCn} (${e.map.id}) ${e.map.width}×${e.map.height}`),t.push(`P1: ${Ln(e.players.player1.unitId)} (${e.players.player1.unitId})`),t.push(`P2: ${Ln(e.players.player2.unitId)} (${e.players.player2.unitId})`),t.push(`总操作数: ${n.length}`),t.push(""),t.push("[地图地形]");const s={plain:"平",forest:"森",rubble:"瓦",water:"水",highland:"高",sand:"砂"};let i="     ";for(let _=0;_<e.map.width;_++)i+=`  ${String(_).padStart(2)} `;t.push(i);for(let _=0;_<e.map.height;_++){let b=`  ${String(_).padStart(2)} `;for(let v=0;v<e.map.width;v++){const y=e.map.cells[_][v],w=s[y.terrain]??"?",T=y.elevation>0?String(y.elevation):" ";b+=` ${w}${T} `}t.push(b)}t.push("  地形: 平=平地 森=森林 瓦=瓦砾 水=水域 高=高地 砂=砂地  数字=海拔"),t.push(""),t.push("[初始状态]"),t.push(`  阶段: ${eo[e.phase]??e.phase}  回合: ${e.roundNumber}`),t.push(to(e.players.player1,"P1")),t.push(to(e.players.player2,"P2")),e.mines.length>0&&t.push(`  机雷: ${e.mines.map(_=>`(${_.position.row},${_.position.col}) 所有者=${_.ownerId} 伤害=${_.damage}`).join("; ")}`),t.push("");let l=e,d=l.roundNumber,u=l.phase,p=l.currentTiming,f=0,g=l.log.length;for(let _=0;_<n.length;_++){const b=n[_],v=l;l=fn(l,b),f++,l.roundNumber!==d&&(t.push(""),t.push(a),t.push(`══ 第 ${l.roundNumber} 回合 ══`),t.push(a),d=l.roundNumber),l.phase!==u&&(t.push(""),t.push(r),t.push(`── ${eo[l.phase]??l.phase} ──`),t.push(r),u=l.phase,p=l.currentTiming),l.currentTiming!==p&&l.currentTiming&&(t.push(""),t.push(`  ◆ ${yx[l.currentTiming]??l.currentTiming}  先攻顺序: [${l.turnOrder.join(", ")}]`),p=l.currentTiming);const y=Ix(b,v);t.push(`  #${String(f).padStart(4,"0")}  ${y}`);const w=l.log.slice(g);for(const C of w)t.push(`         │ ${C}`);if(g=l.log.length,l.pendingDamage&&!v.pendingDamage){const C=l.pendingDamage;t.push(`         ├─ [交互伤害] 目标=${C.targetId} 剩余=${C.remaining} 来源=${C.source}${C.attackerId?` 攻方=${C.attackerId}(瞄准指定)`:""}`)}const T=l.phase!==v.phase,$=l.roundNumber!==v.roundNumber,j=l.phase==="game_over"&&v.phase!=="game_over";(T||$||j)&&(t.push(""),t.push(`  [状态快照 #${f} | ${eo[l.phase]??l.phase}]`),t.push(to(l.players.player1,"P1")),t.push(to(l.players.player2,"P2")),l.mines.length>0&&t.push(`  机雷: ${l.mines.map(C=>`(${C.position.row},${C.position.col}) 所有者=${C.ownerId} 伤害=${C.damage}`).join("; ")}`))}t.push(""),t.push(a),t.push("══ 对局总结 ══"),t.push(a);const x=l,m=Vd(x.players.player1),h=Vd(x.players.player2);x.phase==="game_over"?x.players.player1.isDefeated&&x.players.player2.isDefeated?t.push("结果: 平局（双方同时击破）"):x.players.player1.isDefeated?t.push(`结果: P2[${Ln(x.players.player2.unitId)}] 获胜`):x.players.player2.isDefeated&&t.push(`结果: P1[${Ln(x.players.player1.unitId)}] 获胜`):t.push(`结果: 对局未结束 (当前阶段: ${eo[x.phase]??x.phase})`),t.push(`最终回合: ${x.roundNumber}`),t.push(`总操作数: ${n.length}`),t.push(""),t.push(`P1[${Ln(x.players.player1.unitId)}] 最终状态:`),t.push(`  存活卡牌: ${m}  破坏: ${x.players.player1.destroyedCards.length}  败北: ${x.players.player1.isDefeated}`),t.push(`  位置: (${x.players.player1.position.row},${x.players.player1.position.col}) 朝向: ${ua[x.players.player1.facing]}`),t.push(""),t.push(`P2[${Ln(x.players.player2.unitId)}] 最终状态:`),t.push(`  存活卡牌: ${h}  破坏: ${x.players.player2.destroyedCards.length}  败北: ${x.players.player2.isDefeated}`),t.push(`  位置: (${x.players.player2.position.row},${x.players.player2.position.col}) 朝向: ${ua[x.players.player2.facing]}`),t.push(""),t.push(r),t.push("[完整引擎日志]"),t.push(r);for(let _=0;_<x.log.length;_++)t.push(`  ${String(_+1).padStart(4,"0")}  ${x.log[_]}`);return t.push(""),t.push(a),t.push("日志结束"),t.push(a),t.join(`
`)}function Vd(e){const n=t=>t.filter(a=>!a.destroyed).length;return n(e.deck)+n(e.hand)+n(e.auxiliary)+e.discard.length+(e.plotSeg1&&!e.plotSeg1.destroyed?1:0)+(e.plotSeg2&&!e.plotSeg2.destroyed?1:0)}const ws=k.createContext(null);function Df({children:e}){const[n,t]=k.useReducer(fn,void 0,Mf),[a,r]=k.useState(tx),[s,i]=k.useState(!0),[l,d]=k.useState(!1),u=k.useRef(n);u.current=n;const p=k.useRef([]),f=k.useRef(null),g=k.useRef(-1),x=k.useCallback(b=>{const v=u.current;if(b.type==="RESET_GAME"||b.type==="LOAD_GAME"){p.current=[],f.current=null,g.current=-1,t(b);return}if(b.type==="CONFIRM_SETUP"){const w=fn(v,b);p.current=[],f.current=w,t(b);return}p.current.push(b);const y=fn(v,b);if(t(b),s&&v.phase!=="draw"&&y.phase==="draw"&&y.roundNumber!==g.current){g.current=y.roundNumber;try{Ef("auto",y,a,!0)}catch{}}},[a,s]),m=Zh(x,u),h=k.useCallback(b=>q(b),[]),_=k.useCallback(()=>f.current?{initialState:f.current,actions:[...p.current]}:null,[]);return o.jsx(ws.Provider,{value:{state:n,dispatch:m,rawDispatch:x,getCard:h,aiConfig:a,setAIConfig:r,getReplayData:_,autoSaveEnabled:s,setAutoSaveEnabled:i,exposureMode:l,setExposureMode:d},children:e})}function je(){const e=k.useContext(ws);if(!e)throw new Error("useGame must be used inside <GameProvider>");return e}function $r(){return je().state}const jx=[2,3,4,6,8];function wx(e){const n=[];for(let t=2;t<=e;t++)e%t===0&&n.push(t);return n}function Sx({onNext:e,onBack:n,playerCount:t,setPlayerCount:a,teamCount:r,setTeamCount:s}){const{dispatch:i,rawDispatch:l}=je(),d=k.useMemo(()=>dh(),[]),[u,p]=k.useState(d[0].id),f=k.useMemo(()=>wx(t),[t]),g=k.useMemo(()=>d.filter(h=>{if(h.maxPlayers<t||h.maxTeams<r)return!1;const _=Math.ceil(t/r);for(let b=0;b<r;b++){const v=h.startZones[b];if(!v||v.length<_)return!1}return!0}),[t,r,d]),x=k.useMemo(()=>d.find(h=>h.id===u)??d[0],[u,d]);k.useEffect(()=>{l({type:"RESET_GAME",playerCount:t,teamCount:r});const h=Math.ceil(t/r),_=d.filter(b=>{if(b.maxPlayers<t||b.maxTeams<r)return!1;for(let v=0;v<r;v++){const y=b.startZones[v];if(!y||y.length<h)return!1}return!0});_.length>0&&(p(_[0].id),i({type:"SELECT_MAP",mapId:_[0].id}))},[t,r]),k.useEffect(()=>{f.includes(r)||s(f[0])},[f,r,s]),k.useEffect(()=>{g.length>0&&!g.find(h=>h.id===u)&&m(g[0].id)},[g]);function m(h){h!==u&&(p(h),i({type:"SELECT_MAP",mapId:h}))}return o.jsxs("div",{className:"msel-screen",children:[o.jsx("button",{className:"msel-back-btn",onClick:n,children:"← 返回主菜单"}),o.jsx("h1",{className:"msel-title",children:"Embryo Machine"}),o.jsx("p",{className:"msel-subtitle",children:"选择地图"}),o.jsxs("section",{className:"msel-section",children:[o.jsx("h2",{children:"游戏配置"}),o.jsxs("div",{className:"msel-config-row",children:[o.jsxs("label",{className:"msel-config-label",children:["玩家人数",o.jsx("select",{className:"msel-config-select",value:t,onChange:h=>a(Number(h.target.value)),children:jx.map(h=>o.jsxs("option",{value:h,children:[h,"人"]},h))})]}),o.jsxs("label",{className:"msel-config-label",children:["队伍数量",o.jsx("select",{className:"msel-config-select",value:r,onChange:h=>s(Number(h.target.value)),children:f.map(h=>o.jsxs("option",{value:h,children:[h,"队 (",t/h,"人/队)"]},h))})]})]})]}),o.jsxs("section",{className:"msel-section",children:[o.jsx("h2",{children:"地图"}),o.jsx("div",{className:"msel-map-list",children:g.map(h=>o.jsxs("button",{className:`msel-map-btn ${u===h.id?"msel-map-btn--active":""}`,onClick:()=>m(h.id),children:[h.nameCn," ",h.id.startsWith("custom_")?"✦":"",o.jsxs("span",{className:"msel-map-btn__size",children:[h.height,"×",h.width," · ≤",h.maxPlayers,"人"]})]},h.id))})]}),o.jsxs("section",{className:"msel-preview",children:[o.jsx("div",{className:"msel-preview__grid-wrap",children:o.jsx("div",{className:"msel-preview__grid",style:{display:"grid",gridTemplateColumns:`repeat(${x.width}, 1fr)`,gap:"1px"},children:x.cells.flat().map((h,_)=>{const b=Math.floor(_/x.width),v=_%x.width,y=Object.values(x.startZones).some(w=>w.some(T=>T.row===b&&T.col===v));return o.jsx("div",{className:`msel-cell msel-cell--${h.terrain}${h.elevation>0?" msel-cell--elev":""}${y?" msel-cell--start":""}`,title:`${h.terrain}${h.elevation>0?` +${h.elevation}`:""}${y?" (起始点)":""}`},_)})})}),o.jsxs("div",{className:"msel-preview__info",children:[o.jsx("span",{className:"msel-preview__name",children:x.nameCn}),o.jsxs("span",{className:"msel-preview__meta",children:[x.height,"×",x.width," · 最多",x.maxPlayers,"人 · ",x.maxTeams,"队"]}),o.jsxs("div",{className:"msel-preview__legend",children:[o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--plain"}),"平地"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--sand"}),"沙地"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--rubble"}),"废墟"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--forest"}),"森林"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--water"}),"水域"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--highland"}),"高地"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--start"}),"起点"]})]})]})]}),o.jsx("button",{className:"msel-next-btn",onClick:e,children:"下一步 →"}),o.jsx("style",{children:Cx})]})}const Cx=`
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
`,Nx={gameTitle:"Embryo Machine",statMovement:"移动力",statEvasion:"回避值",statAssault:"突击",statAssaultDef:"被突击",statInitiative:"先制值"},Mn=[["#00f0ff","#00c8e0","#40e8ff","#80f0ff"],["#ff00c8","#ff44aa","#e040d0","#ff77dd"],["#00cc88","#44dd66","#00aa6e","#66eebb"],["#ff8800","#ffaa33","#e07000","#ffcc66"],["#6688ff","#4466ee","#88aaff","#3355dd"],["#cc44ff","#aa22dd","#dd77ff","#bb00ee"],["#44dddd","#22bbbb","#66eeee","#00ccbb"],["#ff4466","#dd2244","#ff6688","#ee0033"]];function fc(e,n){const t=e.teams[n]??0,a=Mn[t%Mn.length],s=e.playerIds.filter(i=>e.teams[i]===t).indexOf(n);return a[Math.max(0,s)%a.length]}const Bt=Nx;function Mx({onNext:e,onBack:n,autoFill:t=!1}){const{state:a,dispatch:r,setAIConfig:s,setExposureMode:i}=je(),[l,d]=k.useState({}),[u,p]=k.useState({}),[f,g]=k.useState({}),x=a.playerIds.length,m=a.teamCount,h=k.useMemo(()=>da.slice(0,x),[x]);function _(S,z){r({type:"SELECT_UNIT",playerId:S,unitId:z}),g(M=>({...M,[S]:!0}))}function b(S,z){d(M=>({...M,[S]:z}))}function v(S,z){p(M=>({...M,[S]:z}))}const y=h.map(S=>{var z;return((z=a.players[S])==null?void 0:z.unitId)??""}),w=y.every(S=>S!==""),T=new Set(y.filter(S=>S!=="")).size===y.filter(S=>S!=="").length,$=h.filter(S=>f[S]).map(S=>{var z;return((z=a.players[S])==null?void 0:z.unitId)??""}).filter(S=>S!==""),j=new Set($).size===$.length,C=t?j:w&&T,A={};for(let S=0;S<h.length;S++){const z=S%m;A[z]||(A[z]=[]),A[z].push(h[S])}return o.jsxs("div",{className:"setup-screen",children:[o.jsx("button",{className:"setup-back-btn",onClick:n,children:"← 上一步"}),o.jsx("h1",{className:"setup-title",children:Bt.gameTitle}),o.jsx("p",{className:"setup-subtitle",children:"选择机体"}),o.jsx("div",{className:"setup-teams",children:Object.entries(A).map(([S,z])=>o.jsxs("div",{className:"setup-team",children:[o.jsxs("h3",{className:"team-header",style:{color:Mn[Number(S)%Mn.length][0]},children:["队伍 ",Number(S)+1]}),o.jsx("div",{className:"setup-players",children:z.map((M,E)=>{var V;const K=da.indexOf(M),H=Mn[Number(S)%Mn.length],D=H[E%H.length],J=((V=a.players[M])==null?void 0:V.unitId)??"",R=y.filter((U,O)=>O!==h.indexOf(M)&&U);return o.jsxs("div",{className:"setup-player-col",children:[o.jsx(Tx,{label:`P${K+1}`,selectedUnit:J,blockedUnits:R,accentColor:D,onSelect:U=>_(M,U)}),o.jsxs("div",{className:"ai-control",children:[o.jsxs("label",{className:"ai-control__label",children:[o.jsx("input",{type:"checkbox",checked:l[M]??!1,onChange:U=>b(M,U.target.checked)}),"AI控制"]}),l[M]&&o.jsxs("select",{className:"ai-control__difficulty",value:u[M]??"hard",onChange:U=>v(M,U.target.value),children:[o.jsx("option",{value:"easy",children:"简单"}),o.jsx("option",{value:"hard",children:"困难"})]})]})]},M)})})]},S))}),o.jsx("button",{className:"start-btn",onClick:()=>{const S=new Set(h.filter(V=>f[V]).map(V=>{var U;return((U=a.players[V])==null?void 0:U.unitId)??""}).filter(V=>V!=="")),M=[...Q.map(V=>V.id).filter(V=>!S.has(V))];for(let V=M.length-1;V>0;V--){const U=Math.floor(Math.random()*(V+1));[M[V],M[U]]=[M[U],M[V]]}const E={...l},K={...u};let H=0;for(const V of h)t&&!f[V]&&H<M.length&&(r({type:"SELECT_UNIT",playerId:V,unitId:M[H]}),H++,E[V]=!0,K[V]="hard");const D={},J={};for(const V of h)D[V]=E[V]??!1,J[V]=K[V]??"hard";s({player1:D.player1??!1,player2:D.player2??!1,player1Difficulty:J.player1??"hard",player2Difficulty:J.player2??"hard",playerAI:D,playerDifficulty:J}),h.every(V=>D[V])&&i(!0),e()},disabled:!C,title:C?"":"请为所有玩家分别选择不同的机体",children:"下一步 →"}),!C&&o.jsx("p",{className:"setup-hint",children:t?"手动选择的机体之间不可重复":w?"每位玩家须选择不同的机体":"请为所有玩家各选择一台机体"}),o.jsx("style",{children:zx})]})}function Tx({label:e,selectedUnit:n,blockedUnits:t,accentColor:a,onSelect:r}){return o.jsxs("div",{className:"unit-picker",children:[o.jsx("h2",{className:"unit-picker__title",style:{color:a},children:e}),o.jsx("div",{className:"unit-grid",children:Q.map(s=>{const i=t.includes(s.id);return o.jsx(Ex,{unit:s,isSelected:s.id===n,isBlocked:i,accentColor:a,onSelect:()=>!i&&r(s.id)},s.id)})}),n&&o.jsx(Dx,{unit:Q.find(s=>s.id===n),accentColor:a})]})}function Ex({unit:e,isSelected:n,isBlocked:t,accentColor:a,onSelect:r}){return o.jsxs("button",{className:`unit-card ${n?"unit-card--selected":""} ${t?"unit-card--blocked":""}`,onClick:r,disabled:t,title:t?"该机体已被其他玩家选择":e.nameCn,style:n?{borderColor:a,boxShadow:`0 0 8px ${a}55`}:{},children:[o.jsx("img",{src:`/assets/tokens/${e.tokenId}`,alt:e.nameCn,className:"unit-card__token",onError:s=>{s.target.style.opacity="0.3"}}),o.jsx("span",{className:"unit-card__name",children:e.nameCn}),o.jsxs("span",{className:"unit-card__init",children:["先制 ",e.initiative]})]})}function Dx({unit:e,accentColor:n}){return o.jsxs("div",{className:"unit-stats",children:[o.jsxs("div",{className:"unit-stats__name",children:[e.nameCn," ",o.jsxs("small",{children:["(",e.nameJa,")"]})]}),o.jsx("div",{className:"unit-stats__type",children:e.type}),o.jsxs("div",{className:"unit-stats__grid",children:[o.jsx(Pa,{label:Bt.statMovement,value:e.movement,color:n}),o.jsx(Pa,{label:Bt.statEvasion,value:e.evasion,color:n}),o.jsx(Pa,{label:Bt.statAssault,value:e.assault,color:n}),o.jsx(Pa,{label:Bt.statAssaultDef,value:e.assaultDef,color:n}),o.jsx(Pa,{label:Bt.statInitiative,value:e.initiative,color:n})]})]})}function Pa({label:e,value:n,color:t}){return o.jsxs("div",{className:"stat",children:[o.jsx("span",{className:"stat__label",children:e}),o.jsx("span",{className:"stat__value",style:{color:t},children:n})]})}const zx=`
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
`,Pd=768;function Ss(){const[e,n]=k.useState(()=>typeof window<"u"&&window.innerWidth<=Pd);return k.useEffect(()=>{const t=window.matchMedia(`(max-width: ${Pd}px)`),a=r=>n(r.matches);return t.addEventListener("change",a),n(t.matches),()=>t.removeEventListener("change",a)},[]),e}const An=18;function we({id:e,title:n,initialPos:t,width:a=300,height:r,minHeight:s=80,children:i,zIndex:l=10,defaultMinimized:d=!1,onFocus:u,siblingRects:p=[]}){const f=Ss(),[g,x]=k.useState(t),[m,h]=k.useState(d),_=k.useRef(null),b=k.useRef(!1);k.useEffect(()=>{b.current||(b.current=!0,x(t))},[]);const v=k.useCallback(y=>{if(f||y.button!==0)return;y.preventDefault(),u==null||u(e);const w=y.clientX-g.x,T=y.clientY-g.y,$=C=>{var D;let A=C.clientX-w,S=C.clientY-T;const z=window.innerWidth,M=window.innerHeight,E=(D=_.current)==null?void 0:D.getBoundingClientRect(),K=(E==null?void 0:E.width)??a,H=(E==null?void 0:E.height)??40;A<An&&(A=0),S<An&&(S=0),A+K>z-An&&(A=z-K),S+H>M-An&&(S=M-H);for(const J of p)Math.abs(A+K-J.left)<An&&(A=J.left-K),Math.abs(A-J.right)<An&&(A=J.right),Math.abs(S+H-J.top)<An&&(S=J.top-H),Math.abs(S-J.bottom)<An&&(S=J.bottom),Math.abs(S-J.top)<An&&(S=J.top);x({x:Math.max(0,A),y:Math.max(0,S)})},j=()=>{document.removeEventListener("mousemove",$),document.removeEventListener("mouseup",j)};document.addEventListener("mousemove",$),document.addEventListener("mouseup",j)},[e,g,u,p,a,f]);return f?o.jsxs("div",{ref:_,className:`dp dp--mobile ${m?"dp--min":""}`,onClick:()=>u==null?void 0:u(e),children:[o.jsxs("div",{className:"dp__bar dp__bar--mobile",onClick:()=>h(y=>!y),children:[o.jsx("span",{className:"dp__title",children:n}),o.jsx("span",{className:"dp__min-btn dp__min-btn--mobile",children:m?"▼":"▲"})]}),!m&&o.jsx("div",{className:"dp__body dp__body--mobile",children:i}),o.jsx("style",{children:Rd})]}):o.jsxs("div",{ref:_,className:`dp ${m?"dp--min":""}`,style:{left:g.x,top:g.y,width:a,height:m?void 0:r,minHeight:m?0:s,zIndex:l},onMouseDown:()=>u==null?void 0:u(e),children:[o.jsxs("div",{className:"dp__bar",onMouseDown:v,children:[o.jsx("span",{className:"dp__title",children:n}),o.jsx("button",{className:"dp__min-btn",onMouseDown:y=>y.stopPropagation(),onClick:()=>h(y=>!y),title:m?"展开":"最小化",children:m?"▢":"▬"})]}),!m&&o.jsx("div",{className:"dp__body",children:i}),o.jsx("style",{children:Rd})]})}const Rd=`
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
`,ta=48,$x=[{facing:"N",label:"↑N",title:"朝北"},{facing:"S",label:"↓S",title:"朝南"},{facing:"E",label:"→E",title:"朝东"},{facing:"W",label:"←W",title:"朝西"}],Ld=.25,Ax=2,Od=.1;function Vx({onBack:e}){const{state:n,dispatch:t}=je(),a=Ze.find(O=>O.id===n.map.id)??n.map,r=n.playerIds,s=a.width,i=a.height,l=k.useRef(null),[d,u]=k.useState({x:0,y:0,scale:1}),p=k.useRef(null),f=k.useRef(!1);k.useEffect(()=>{const O=l.current;if(!O)return;const L=O.clientWidth,Y=O.clientHeight,X=s*ta,oe=i*ta;if(!L||!Y)return;const le=Math.min(L/X,Y/oe),de=Math.max(Ld,Math.min(1.2,le)),ye=(L-X*de)/2,xn=(Y-oe*de)/2;u({x:ye,y:xn,scale:de})},[s,i]),k.useEffect(()=>{const O=l.current;if(!O)return;const L=Y=>{Y.preventDefault();const X=Y.deltaY<0?Od:-Od;u(oe=>({...oe,scale:Math.min(Ax,Math.max(Ld,oe.scale+X))}))};return O.addEventListener("wheel",L,{passive:!1}),()=>O.removeEventListener("wheel",L)},[]);const g=k.useCallback(O=>{O.button===0&&(p.current={startX:O.clientX,startY:O.clientY,origX:d.x,origY:d.y},f.current=!1)},[d.x,d.y]),x=k.useCallback(O=>{if(!p.current)return;const L=O.clientX-p.current.startX,Y=O.clientY-p.current.startY;!f.current&&Math.sqrt(L*L+Y*Y)>5&&(f.current=!0),f.current&&u(X=>({...X,x:p.current.origX+L,y:p.current.origY+Y}))},[]),m=k.useCallback(()=>{p.current=null,f.current=!1},[]),h=k.useMemo(()=>Object.keys(a.startZones).map(Number).sort((O,L)=>O-L),[a]),[_,b]=k.useState(()=>{const O={};for(let L=0;L<n.teamCount;L++)O[L]=L;return O});k.useEffect(()=>{const O={};for(let L=0;L<n.teamCount;L++)O[L]=L;b(O)},[a.id,n.teamCount]);function v(O,L){b(Y=>{const X=Object.entries(Y).find(([,le])=>le===L),oe={...Y,[O]:L};return X&&(oe[Number(X[0])]=Y[O]),oe})}const y=k.useMemo(()=>{const O=new Map;for(let L=0;L<n.teamCount;L++){const Y=_[L]??L,X=a.startZones[Y];if(X)for(const oe of X){const le=`${oe.row},${oe.col}`,de=O.get(le)??[];de.push(L),O.set(le,de)}}return O},[a,n.teamCount,_]),w=k.useMemo(()=>{const O={};for(const L of r){const Y=n.teams[L];O[Y]||(O[Y]=[]),O[Y].push(L)}return O},[r,n.teams]),[T,$]=k.useState(r[0]),[j,C]=k.useState(""),A=k.useMemo(()=>{for(const O of r){const L=n.players[O];if(!L)return!1;const Y=n.teams[O],X=_[Y]??Y,oe=a.startZones[X];if(!oe||!oe.some(de=>de.row===L.position.row&&de.col===L.position.col))return!1}return!0},[r,n.players,n.teams,_,a]);function S(O,L){t({type:"SET_SPAWN_POSITION",playerId:O,position:L})}function z(O,L){t({type:"SET_SPAWN_FACING",playerId:O,facing:L})}function M(){A&&t({type:"CONFIRM_SETUP"})}function E(O){return fc(n,O)}function K(O){var Y;const L=(Y=w[O])==null?void 0:Y[0];return L?E(L):Mn[O%Mn.length][0]}const H=k.useMemo(()=>{const O=new Map;for(const L of r){const Y=n.players[L];if(!Y)continue;const X=Q.find(de=>de.id===Y.unitId);if(!X)continue;const oe=`${Y.position.row},${Y.position.col}`,le=O.get(oe)??[];le.push({pid:L,color:E(L),tokenId:X.tokenId,name:X.nameCn}),O.set(oe,le)}return O},[r,n.players]),{x:D,y:J,scale:R}=d,V=220,U=k.useMemo(()=>{const O={},le=Math.floor((window.innerHeight-56-60)/192);return r.forEach((de,ye)=>{const xn=Math.floor(ye/le),$n=ye%le;O[de]={x:window.innerWidth-(V+16)*(xn+1),y:56+$n*192}}),O},[r]);return o.jsxs("div",{className:"ssm__screen",children:[o.jsxs("div",{className:"ssm__topbar",children:[o.jsx("button",{className:"ssm__back-btn",onClick:e,children:"← 返回"}),o.jsx("span",{className:"ssm__title",children:"选择出击位置"}),o.jsxs("span",{className:"ssm__map-name",children:[a.nameCn," (",i,"×",s,")"]}),o.jsx("span",{style:{flex:1}}),o.jsx("button",{className:`ssm__start-btn${A?"":" ssm__start-btn--disabled"}`,onClick:M,disabled:!A,title:A?"开始战斗":"所有玩家必须先选择出击位置",children:"战斗开始 ▶"})]}),o.jsx("div",{className:"ssm__viewport",ref:l,onMouseDown:g,onMouseMove:x,onMouseUp:m,onMouseLeave:m,children:o.jsx("div",{className:"ssm__map-inner",style:{transform:`translate(${D}px, ${J}px) scale(${R})`,transformOrigin:"top left",display:"grid",gridTemplateColumns:`repeat(${s}, ${ta}px)`,gridTemplateRows:`repeat(${i}, ${ta}px)`},children:a.cells.flatMap((O,L)=>O.map((Y,X)=>{const oe=oc(Y),le=`${L},${X}`,de=y.get(le)??[],ye=H.get(le)??[],xn=de.length>0,$n=de.length>0?K(de[0]):"",Na=n.teams[T],Pt=xn&&de.includes(Na);let te="ssm__cell";xn&&(te+=" ssm__cell--zone"),Pt&&(te+=" ssm__cell--placeable"),ye.length>0&&(te+=" ssm__cell--selected");function Ie(ee){f.current||(ee.stopPropagation(),Pt&&S(T,{row:L,col:X}))}return o.jsxs("div",{className:te,style:{backgroundImage:`url("${oe}")`,...xn?{borderColor:$n,boxShadow:ye.length>0?`inset 0 0 10px ${$n}66, 0 0 6px ${$n}44`:void 0}:{}},onClick:Pt?Ie:void 0,children:[ye.length===1&&o.jsx("div",{className:"ssm__token",children:o.jsx("img",{src:`/assets/tokens/${ye[0].tokenId}`,alt:ye[0].name,style:{boxShadow:`0 0 6px ${ye[0].color}`},onError:ee=>{ee.target.style.opacity="0.3"}})}),ye.length>1&&o.jsx("div",{className:"ssm__token ssm__token--multi",children:ye.map(ee=>o.jsx("img",{src:`/assets/tokens/${ee.tokenId}`,alt:ee.name,className:"ssm__token-img-sm",style:{boxShadow:`0 0 4px ${ee.color}`},onError:Pe=>{Pe.target.style.opacity="0.3"}},ee.pid))})]},le)}))})}),r.map((O,L)=>{var Ie;const Y=n.players[O],X=Q.find(ee=>ee.id===(Y==null?void 0:Y.unitId)),oe=E(O),le=j===O,de=T===O,ye=n.teams[O],xn=((Ie=w[ye])==null?void 0:Ie[0])===O,$n=_[ye]??ye,Na=_[ye]??ye,te=(a.startZones[Na]??[]).some(ee=>ee.row===Y.position.row&&ee.col===Y.position.col);return o.jsx(we,{id:`spawn-${O}`,title:`P${L+1} ${(X==null?void 0:X.nameCn)??"—"}`,initialPos:U[O]??{x:100,y:100},width:V,minHeight:60,zIndex:le?50:10+L,onFocus:()=>{C(O),$(O)},children:o.jsxs("div",{className:`ssm__player-card${de?" ssm__player-card--active":""}`,style:{borderTop:`2px solid ${oe}`},onClick:()=>$(O),children:[o.jsxs("div",{className:"ssm__player-label",style:{color:oe},children:["P",L+1," ",de?"◄ 放置中":""," ",te?"✓":""]}),xn&&o.jsx("div",{className:"ssm__zone-select",children:o.jsxs("label",{children:["出击区域:",o.jsx("select",{value:$n,onChange:ee=>v(ye,Number(ee.target.value)),onClick:ee=>ee.stopPropagation(),children:h.slice(0,a.maxTeams).map(ee=>o.jsxs("option",{value:ee,children:["区域 ",ee+1]},ee))})]})}),o.jsx("div",{className:"ssm__unit-name",children:(X==null?void 0:X.nameCn)??"—"}),o.jsxs("div",{className:"ssm__pos-display",children:["格 (",Y.position.row,", ",Y.position.col,")"]}),o.jsx("div",{className:"ssm__facing-grid",children:$x.map(({facing:ee,label:Pe,title:He})=>{const Wn=Y.facing===ee;return o.jsx("button",{className:`ssm__facing-btn${Wn?" ssm__facing-btn--active":""}`,style:Wn?{borderColor:oe,color:oe}:void 0,title:He,onClick:()=>z(O,ee),children:Pe},ee)})})]})},O)}),o.jsx("style",{children:Px})]})}const Px=`
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
  width: ${ta}px;
  height: ${ta}px;
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
`;function Rx({onStart:e,onOnlinePlay:n,onViewRules:t,onViewData:a,onLoadGame:r,onReplay:s,onMapEditor:i,onSettings:l}){return o.jsxs("div",{className:"hs-screen",children:[o.jsxs("div",{className:"hs-center",children:[o.jsx("h1",{className:"hs-title",children:"Embryo Machine"}),o.jsx("p",{className:"hs-subtitle",children:"战棋机甲对战游戏"}),o.jsx("div",{className:"hs-divider"}),o.jsx("button",{className:"hs-btn hs-btn--primary",onClick:e,children:"▶ 开始游戏"}),o.jsx("button",{className:"hs-btn hs-btn--online",onClick:n,children:"联机对战"}),o.jsx("button",{className:"hs-btn hs-btn--secondary",onClick:r,children:"📂 加载存档"}),o.jsx("button",{className:"hs-btn hs-btn--secondary",onClick:s,children:"🎬 回放录像"}),o.jsx("div",{className:"hs-divider hs-divider--sm"}),o.jsxs("div",{className:"hs-links",children:[o.jsx("button",{className:"hs-link-btn",onClick:l,children:"⚙ 设置"}),o.jsx("button",{className:"hs-link-btn",onClick:i,children:"🗺️ 地图编辑器"}),o.jsx("button",{className:"hs-link-btn",onClick:t,children:"📖 游戏规则"}),o.jsx("button",{className:"hs-link-btn",onClick:a,children:"📊 游戏资料"})]})]}),o.jsx("style",{children:Lx})]})}const Lx=`
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
`;function Ox({onBack:e,soundEnabled:n,onToggleSound:t,soundVolume:a,onVolumeChange:r,exposureMode:s,onToggleExposure:i,autoFill:l,onToggleAutoFill:d,onCacheAssets:u}){return o.jsxs("div",{className:"set-screen",children:[o.jsxs("div",{className:"set-center",children:[o.jsxs("div",{className:"set-header",children:[o.jsx("button",{className:"set-back",onClick:e,children:"← 返回"}),o.jsx("h1",{className:"set-title",children:"设置"})]}),o.jsx("div",{className:"set-divider"}),o.jsxs("div",{className:"set-section",children:[o.jsx("h2",{className:"set-section__title",children:"音效设置"}),o.jsxs("label",{className:"set-toggle",onClick:t,children:[o.jsx("span",{className:`set-toggle__switch${n?" set-toggle__switch--on":""}`,children:o.jsx("span",{className:"set-toggle__knob"})}),o.jsx("span",{className:"set-toggle__label",children:"音效"}),o.jsx("span",{className:"set-toggle__hint",children:n?"已开启":"关闭"})]}),n&&o.jsxs("div",{className:"set-slider-row",children:[o.jsx("span",{className:"set-slider-row__label",children:"音量"}),o.jsx("input",{className:"set-slider",type:"range",min:0,max:100,value:Math.round(a*100),onChange:p=>r(Number(p.target.value)/100)}),o.jsxs("span",{className:"set-slider-row__value",children:[Math.round(a*100),"%"]})]})]}),o.jsx("div",{className:"set-divider set-divider--sm"}),o.jsxs("div",{className:"set-section",children:[o.jsx("h2",{className:"set-section__title",children:"游戏设置"}),o.jsxs("label",{className:"set-toggle",onClick:i,children:[o.jsx("span",{className:`set-toggle__switch${s?" set-toggle__switch--on":""}`,children:o.jsx("span",{className:"set-toggle__knob"})}),o.jsx("span",{className:"set-toggle__label",children:"暴露模式"}),o.jsx("span",{className:"set-toggle__hint",children:s?"已开启：所有隐藏卡牌将显示正面":"关闭"})]}),o.jsxs("label",{className:"set-toggle",onClick:d,children:[o.jsx("span",{className:`set-toggle__switch${l?" set-toggle__switch--on":""}`,children:o.jsx("span",{className:"set-toggle__knob"})}),o.jsx("span",{className:"set-toggle__label",children:"自动补位"}),o.jsx("span",{className:"set-toggle__hint",children:l?"已开启：空位自动随机选机由AI控制":"关闭"})]})]}),o.jsx("div",{className:"set-divider set-divider--sm"}),o.jsxs("div",{className:"set-section",children:[o.jsx("h2",{className:"set-section__title",children:"资源管理"}),o.jsx("button",{className:"set-btn set-btn--secondary",onClick:u,children:"缓存全部资源"}),o.jsx("p",{className:"set-hint",children:"一次性加载所有卡牌、地形等图片资源"})]})]}),o.jsx("style",{children:Kx})]})}const Kx=`
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
`;function Jx({phase:e,loaded:n,total:t,onConfirm:a,onSkip:r}){const s=t>0?Math.round(n/t*100):0,i=n>=t&&t>0;return o.jsxs("div",{className:"apd-overlay",children:[o.jsxs("div",{className:"apd-box",children:[e==="asking"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"apd-icon",children:"⚠"}),o.jsx("h2",{className:"apd-title",children:"资源未完全缓存"}),o.jsxs("p",{className:"apd-body",children:["检测到游戏图像资源（卡牌、地形、地图等）尚未完全缓存。",o.jsx("br",{}),"首次加载游戏时可能出现图片闪烁或延迟。"]}),o.jsxs("p",{className:"apd-body apd-body--sub",children:["是否现在一次性加载全部资源？",o.jsx("br",{}),o.jsxs("span",{className:"apd-hint",children:["共约 ",t," 张图片，需要较短等待时间。"]})]}),o.jsxs("div",{className:"apd-actions",children:[o.jsx("button",{className:"apd-btn apd-btn--primary",onClick:a,children:"是，立即加载"}),o.jsx("button",{className:"apd-btn apd-btn--secondary",onClick:r,children:"否，边玩边加载"})]})]}),e==="loading"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"apd-icon",children:i?"✓":"↓"}),o.jsx("h2",{className:"apd-title",children:i?"加载完成":"正在加载资源…"}),o.jsx("div",{className:"apd-bar-track",children:o.jsx("div",{className:"apd-bar-fill",style:{width:`${s}%`}})}),o.jsxs("p",{className:"apd-progress-text",children:[n," / ",t,"  (",s,"%)"]}),i&&o.jsx("p",{className:"apd-body apd-body--sub",children:"资源已全部缓存，正在进入游戏…"})]})]}),o.jsx("style",{children:Bx})]})}const Bx=`
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
`,Fx={"72ea91e355f9729a4f906f4a5981ccb94deb6c3a1eb4c9a4f255cbc86ac068a5":"/assets/cards/ag/ag-7-front.jpg",de64d1812f33cab1363e0191b2e1fe10766940cf72c1ae602a1537d6d59dee87:"/assets/ui/card-back.jpg",ca3a08c40eed141b502fe1a227ec29253a864fba0fda52930a7e55d1910a6698:"/assets/cards/ag/ag-3-front.jpg","00fec5279b30da9801db7c84419764909d349e1c210543de132af209cd3f0abd":"/assets/cards/ag/ag-4-front.jpg","608720fd8dcc5e7fe60d00f88b206e99c0688cfc20ef38f4eea05359b2ec0861":"/assets/cards/ag/ag-5-front.jpg",b0389d207312bbef32c2910744518f6f30c73796f27e573cfaec51c355862a97:"/assets/cards/ag/ag-6-front.jpg","29fa020388f199454a71e6673a19d76c4aafc4e8e8f34af0a9eeafe41c172391":"/assets/cards/ag/ag-8-front.jpg",c25abc7656b2d1eb27be27d09fecde25fd22427409e5afc79caf0ee09a8ff4f0:"/assets/cards/ag/ag-11-front.jpg","31e6d6800110b0ebfe8793074ba169f13b6fa02ea67f7e77739a4bf003670ba1":"/assets/cards/ag/ag-18-front.jpg","9762039c262e506e6bddc0449ed1ddc0449d1c6234afba1327ebfdb81a388e54":"/assets/cards/ag/ag-12-front.jpg",aa1286d4f7814991279a7aac4a75c0b194b8e7f9d6510fb8e63362939d04ec1e:"/assets/cards/ag/ag-14-front.jpg",dfe234f8d5372742a6ed4ab9f521f1ad9c693a228003aad19750c34aa7d1d49b:"/assets/cards/ag/ag-21-front.jpg","12e25c69082cbfe495f5dc49006c7c5aebc1f73574c59c39ffc5ed5b8b2fbc6d":"/assets/cards/ag/ag-17-front.jpg","9ba8361aa29742693bc83360c55e367632471dfea59493136210cfd09fd1aa48":"/assets/cards/ag/ag-19-front.jpg","67a686db8c4db82340e640db02b289fb998f14b79ede162eaffb1d2f5488a3a4":"/assets/cards/ag/ag-20-front.jpg",eb56b8c9f9b270690d535f55ac55c846dae5537649cec7021639211ff7f6cc22:"/assets/cards/ag_plus/ag_plus-2-front.jpg",e4c12ee3ba0ef3bd8c2ee9b1bb41e74c404f09b62dba8cb2e35faa2e520895e5:"/assets/cards/ag_plus/ag_plus-3-front.jpg","8f2248399528f6a051509d01cc0c78398afd381b7ad8f9915ab6381297026282":"/assets/cards/ag_plus/ag_plus-4-front.jpg",ebac68b5f2d7cf81a64094a12da6386a77e2434776de373d72ed8be4ba13159c:"/assets/cards/ag_plus/ag_plus-5-front.jpg","35999dd2727c1847d4a12d8061029cf3555bdbb7452b03c3978443401ac1022c":"/assets/cards/ar/ar-1-front.jpg","2f4a7328aaa21e26023208758042e122b483ca242c1b95ee4c64952eb7bb1dc3":"/assets/cards/ar/ar-2-front.jpg",c414ed84946840c69b6bdc4393af27f50d70a81b56a8c1849d1bfdaaa27531c1:"/assets/cards/ar/ar-4-front.jpg","9eca454c2c4f5cdb16902adfa101484f2257d1a9fe6c7985d3aaba990982c725":"/assets/cards/ar/ar-5-front.jpg",dc0d77a5ec25f65aa1ab091a1ede028f7fb1f7ebfbea4945b907adef2ece4281:"/assets/cards/ar/ar-13-front.jpg","6fbefeb90155b45f8872740038dfa38116530750caa1e623a99bab29b5f40a21":"/assets/cards/ar/ar-14-front.jpg","33a35f67e85d189889a7e8fa66ff1719a0d2680027105d1075f802d94d772bb4":"/assets/cards/ar/ar-8-front.jpg","6e7e1e6dde63265f8df8809db768b684e794f4331f9c3d7f4185a1dc612c0701":"/assets/cards/ar/ar-9-front.jpg","2f73e47fe817e7ae747aee252cc07cc1d556c8bd1b2acdf54f9a678f1ff51e02":"/assets/cards/ar/ar-12-front.jpg",aecf39488eb7018c47ea85aa4073aad5f196b9440e2c9248ed960d91e6696f22:"/assets/cards/ar/ar-15-front.jpg",cf41932a7f074826ffbd6c2e14e3bb173d95e38982bac18c2bf04773923903dd:"/assets/cards/ar/ar-16-front.jpg",cfe5a7626bb3fb179d3d056519cf477fa9bd6db3e441a7d7b3204eb4f8e5c2cb:"/assets/cards/ar/ar-17-front.jpg",a26a8dd85af73fe69b123ac4e0beae7cac68442afe22c8d44bf0312a9081381d:"/assets/cards/ar/ar-18-front.jpg","6b6d4acdc02336939dff11c9c962d9f4fe1246ee51003dfc1a70569ebd740664":"/assets/cards/ar/ar-19-front.jpg","2d5acd9b8353db95858fc7dbdcae061bda7df49032e5aea255431ad33aca98d0":"/assets/cards/ar/ar-20-front.jpg",a2d445e888ff59aa58f2ad514a9a031b486a3d56621fa7ddb5f930a045a513b2:"/assets/cards/ar_plus/ar_plus-1-front.jpg",fd85ee9cb1b56cfc5f7e5284a4cf1c67f406b29a068253f7164ea628c1e5c43a:"/assets/cards/ar_plus/ar_plus-4-front.jpg","48cbd3a065ccfa5cbcba4f0247cb0fcf166291740d54ca162580765e5d5c1d4e":"/assets/cards/ar_plus/ar_plus-3-front.jpg",f395a843fb92ff32392d84d9c8dde21b95bf3bf41b8eb787d5d8480878952bcb:"/assets/cards/bg/bg-4-front.jpg","193f6b1b0a647be282bb1b7d5013924039743a46a48383f64d5cb726859f25aa":"/assets/cards/bg/bg-14-front.jpg","0e54f575524cacb092b31f8983a537c18487fdf7405caa924653a39e4bc544db":"/assets/cards/bg/bg-16-front.jpg","2fce52c5e8cde4295b30baed6b7de68e6a2839f5e086d7e1e530ea996ffe0435":"/assets/cards/bg/bg-12-front.jpg",a391b8c4020883f8d080a6e6e83864670158aef7be5eab6d7b348ef6e6b93d10:"/assets/cards/bg/bg-15-front.jpg",fd79d96009f9b66e23c02f25edfcce4a13fdf61c3fe8188269cf83916766df31:"/assets/cards/bg/bg-18-front.jpg",ad7a449d1edd5300a57a8bae2cab2a607d5422ea37c397b7c8c69df5b3096502:"/assets/cards/bg/bg-13-front.jpg","8571242343bc19329436ac669a422140b9dfbc7544cf1de2ec298eef9b3a9257":"/assets/cards/bg/bg-17-front.jpg","64ba521997fc2f8ddbb544dd45bcc58e3145822f4927860039ec7a7921d01757":"/assets/cards/bg/bg-19-front.jpg",ab0196704ba0510bc85e9e58e6bb8323c43cddc2e8f986e6ad79a11852e2c421:"/assets/cards/bg/bg-20-front.jpg","8514e5d83cf922f035f5600a0e96d2bf3ae85d064807759af4f08155ffbe6145":"/assets/cards/bg/bg-21-front.jpg",f495acab04c9e7b539619082b1c7eab387e329794a866f80f4d49f3b8f1f693e:"/assets/cards/bg/bg-23-front.jpg",d4e423814ead1fd2c384492fac1be79e014d771712d0db3c78d93b4e2daf6699:"/assets/cards/bg_plus/bg_plus-1-front.jpg","602d9c6187bb0bb67e3435b95461e1d0f6aa432b5408d2addfe77416d08b2862":"/assets/cards/bg_plus/bg_plus-3-front.jpg",e97efab0e571ea9441ecfcef69388ac5833e96b52f196073127b5930532f920d:"/assets/cards/bg_plus/bg_plus-4-front.jpg","9e27878685e0972914ec6db331732131c20f51b80aef11ca2ed7850338dc56a5":"/assets/cards/bg_plus/bg_plus-5-front.jpg","50793b3633188783f2e78b770a325549b99cc2b0cae8be0f837c1c1bd7958bcd":"/assets/cards/ho/ho-1-front.jpg","23be89f666a01394bded8d8b4e845a176efe96c1e33b40d9edacf15c715a3dd9":"/assets/cards/ho/ho-2-front.jpg",f9b7e9cd2182ade25b13d7355f2297ca1bedd4426b653e89a45aa14ce6221ff6:"/assets/cards/ho/ho-3-front.jpg","120ffbd79d44d8dce99f704baf79e62487e73935e18b8e18bec3fe352e603da0":"/assets/cards/ho/ho-4-front.jpg","926cccef6ed7a746b53a370664d9b1e60fb27d976c4707a0f34e390dcd7ef985":"/assets/cards/ho/ho-5-front.jpg","17b7289bdbdf1c8fc0ddf23c146d0b51e2c66e8e70a20545e64685e087f78496":"/assets/cards/ho/ho-6-front.jpg","38309819fe704c2f7e58cd5c35110ca71a78198b221595d966f711f4ee17d558":"/assets/cards/ho/ho-15-front.jpg","002453cf5ab95a93e69365838d45c421e90a106e3c0bbe20d038355a8495827e":"/assets/cards/ho/ho-8-front.jpg",da0d31d7f836a648f062ee69c549fe2b3806fcc729015bcff634ea427bc94c54:"/assets/cards/ho/ho-9-front.jpg","49d1feafa8f7a1608f6ea2c9205581b056cd4d3a352a903b065be7b613d73d93":"/assets/cards/ho/ho-10-front.jpg",e23e9d4556a4c1f84670f09e14f3abb1050f0effd6b004b190bb0d51c0567a16:"/assets/cards/ho/ho-12-front.jpg",ef5f963cdb85d776e30cc08f406812b628139e1c0762da6cdd76a995d526b132:"/assets/cards/ho/ho-14-front.jpg","76445d956a01a1a6759748880ff112510881dde7c531af86812ced9080f6027d":"/assets/cards/ho/ho-17-front.jpg","5dcb19c46fe4c87775c42969ee66a2e4edf407066eb7b6e9f75ae7f06c544237":"/assets/cards/ho_plus/ho_plus-1-front.jpg",d3608718aa56d2713c83f5d14a2957ae82680551c65c06caf10fa7aab623f2b4:"/assets/cards/ho_plus/ho_plus-2-front.jpg",c0138ea658ae0afcbfe06f7c46d1dfba00a459fd012b0c81aae9c63582923191:"/assets/cards/ho_plus/ho_plus-3-front.jpg","84f830f1410ddc1388ff00d0094af433f20688408ac72c20cfd5e90bf077a494":"/assets/cards/ho_plus/ho_plus-4-front.jpg","6d418c369626afc07e65702585463fa8d7e6dc9518dab01039c73a66907ed553":"/assets/cards/hy/hy-20-front.jpg","3e5c8c4b0dc1c5c6a2e65f80c779cda8035f41399837d032585b13c9a2e58d7b":"/assets/cards/hy/hy-7-front.jpg","9541ab0e2700ffb0df842826dd163204ef7832414a0bcaa1f54f7ac98fde834f":"/assets/cards/hy/hy-24-front.jpg",e8b1063f07dd998149120cc48ce4bb6d98a7bd93967160088eba9d96b710f421:"/assets/cards/hy/hy-8-front.jpg","4f64597b35d42ae5ff6c550c73830d48ef671f57d68ff01cc630e7b2ccaf43cd":"/assets/cards/hy/hy-10-front.jpg","91850bf85a43f889c8889936afdf4db90bde65dc9e65c1b5e0108a8932ac47a9":"/assets/cards/hy/hy-11-front.jpg","91c2ebb2087607ac70d7c081e0291cc298b78781e7e3faf2ec7fc86be248dfd4":"/assets/cards/hy/hy-13-front.jpg","640e4fcde89541cd02119f60f24deed7bad79a678cf1d99cce9e7ba73f71692e":"/assets/cards/hy/hy-14-front.jpg",b24622641e65a1b75e971a3e8c31a2bf0588ba84875b5bf7d03f27f0a63af9fc:"/assets/cards/hy/hy-19-front.jpg","1576e9779c12faed9bad26006fa8a12e7be0756ed264ea3b1deb05127d239b3c":"/assets/cards/hy/hy-21-front.jpg","3674a92a567de26b6304f6aebb9823606e1f72ce9e925d7488152e2f084ec86f":"/assets/cards/hy/hy-22-front.jpg","794136e3f4a27259a85a053cf7c7adc772875f6d5e042bb0eb4aa48d4b46e434":"/assets/cards/hy/hy-23-front.jpg",d17b8a6c61b023f8b09f9ffb1748e0de2eb751a638f2d376983ae14d0bd8564d:"/assets/cards/hy_plus/hy_plus-2-front.jpg",c8310aa2df0cdec2acf8913edbd16d60aaa22deab68867b14f70cd4bba59e4f6:"/assets/cards/hy_plus/hy_plus-5-front.jpg",a8188b32f23968b98e88cb685d8af599d5a2f6570f43f4330b189dd9ce669672:"/assets/cards/hy_plus/hy_plus-8-front.jpg","237ae5dbe95f95a334369a3f6d2c4f628bc2ef4c4cfda81f637169448b0b2a78":"/assets/cards/hy_plus/hy_plus-7-front.jpg",d7c9c03a695431a59b976da9ef1433b1969e905ce1b0f7165960910d8dcda7e7:"/assets/cards/lg/lg-1-front.jpg","54e91ee7019cf98518ceff5d5eb3ae24a2c490991d9ef700107919c1d7216133":"/assets/cards/lg/lg-2-front.jpg","5109d921c42001dd49deb4453c84680c485dbd03acbbf184db44c52e20df0947":"/assets/cards/lg/lg-3-front.jpg","238151d3ee802a63f7cfab27eba567809e0f434dd0ae7ab5cbfd67e17aab320c":"/assets/cards/lg/lg-4-front.jpg",cbd722c55b5f4530d1f909ee512accfb976e160669d861b03ba8a9f1ac812088:"/assets/cards/lg/lg-10-front.jpg","51cb5bbee96271ee7948d123f441fd961511c5664f85d880339ac81e76d297ce":"/assets/cards/lg/lg-12-front.jpg","5a50ab7bd0284e099caf5991bcaebf3fd5e2f6f852a41e8164548250372e13ee":"/assets/cards/lg/lg-13-front.jpg","8b83c2b2d3abe743003e29e8ace677d3669fee9012700fbd9405fb2581c2f1c1":"/assets/cards/lg/lg-14-front.jpg",e3f20637a74add18073f9b306a299693bccd9ff1318dd1cb35bb5b237ae03b3d:"/assets/cards/lg/lg-15-front.jpg","36b7cec7580d4de56edb5692bc83f9c3c08e4a94c7a75d3dca6b9aab5c70e886":"/assets/cards/lg/lg-21-front.jpg","307424a85866d9131ebaf92eee6aa49d75c7fe86937ebb0ddb7651431de5fc2d":"/assets/cards/lg/lg-18-front.jpg","653861f0980a12fb43cbfebda4071b3ca37e094bdc80c8698d0e183d90a83ed2":"/assets/cards/lg/lg-20-front.jpg","3f3a90dac9d0a565694982c55380f9b5fb3b914147aacd6b05c37a9ca8fd19d2":"/assets/cards/lg/lg-23-front.jpg","2b4298eafb47c327a290152fbccd471da28923c5769d2a645c574c16be6a039d":"/assets/cards/lg_plus/lg_plus-7-front.jpg","3074578f141dd1726916bf8e3e4532b4b82c72b7e2d30cbd3205b91609bbfbf2":"/assets/cards/lg_plus/lg_plus-3-front.jpg",bdd1e79a3a0f11fb4aeb486ae199ac2a971f957f90ce61439360e64f5c1ffc22:"/assets/cards/lg_plus/lg_plus-6-front.jpg",c3b9c862179da114428f8db2318e87e2770ad861b7bda0046c875ddaf884683c:"/assets/cards/lg_plus/lg_plus-8-front.jpg","3b6e2c61dd5d3c61e285d5c5f1bae42d08319f1ccd8ab950dabc7012fcae2ec8":"/assets/cards/lo/lo-12-front.jpg",ec8a31e551ec7a31602e8f6dfb7266c4dd377717704a34ee1647c288e9e64013:"/assets/cards/lo/lo-10-front.jpg","58a7b4c3f1fb01ee43a7269374ed04e71909609a51d488407b9754efcd055604":"/assets/cards/lo/lo-7-front.jpg",fdffe9ed90791948ae05fe76630b10ceca9d7bd442c41e2da584527d72ad98de:"/assets/cards/lo/lo-8-front.jpg",d4574f1615eb69b5470822b40ffd0d27da741f7f3e179c671c54290ca51afc0c:"/assets/cards/lo/lo-9-front.jpg",ab0f524c4935a2945d72db20beb4776d764df5de49672ed46e91eadce168e065:"/assets/cards/lo/lo-15-front.jpg","32297c12e7745ecb9bac5727434e7fff2784c25fe2b744d73f36218acc43b0b2":"/assets/cards/lo/lo-13-front.jpg",d9ef4060c364dea670bd525f0aad18687149d8797f5a9946c66b8f14681cff0f:"/assets/cards/lo/lo-14-front.jpg","7cabdc1509214622489311c85cc0cc2857daac93cb4fc31f515fb5fb638f6098":"/assets/cards/lo/lo-16-front.jpg",d2fc0f3677e4dd64bb2bf580951612085ce1f5a36d84742f94101ba0aeb0bebd:"/assets/cards/lo/lo-17-front.jpg","492722fef12f5835e2e0917c18b55b226be409f5f60973130cfda3daaba2a963":"/assets/cards/lo/lo-18-front.jpg","03b051e124ef4ec1c76498960f9a5317bdf1bd3f91973329062ce1b1a905c796":"/assets/cards/lo/lo-19-front.jpg",c9fdad2b74bc9c08941a4348c934616abadbc335d218914419e7972dc54aaa27:"/assets/cards/lo/lo-20-front.jpg","2753d376c59037359099d989ebc9ecdc6f35b0bcc1966a526919a62e9492ba5d":"/assets/cards/lo_plus/lo_plus-1-front.jpg","78e76504372580ad38ecea1cf6ca8b6eef7f24beb4bb173023d493a2900c9213":"/assets/cards/lo_plus/lo_plus-2-front.jpg",cfd41bad24efba992152437f01605cfa070b96c24171d158eb6b38c6e062b997:"/assets/cards/lo_plus/lo_plus-3-front.jpg","56b654c93edf5b33422b575efd3ece648df66bb3b245576bcb100db2cf463b90":"/assets/cards/lo_plus/lo_plus-4-front.jpg","83e4cf361d79bf56cab85b3165d8a502c3b6369a7d91d9d74008e7446ecee5aa":"/assets/cards/tr/tr-1-front.jpg",fac9e08ed1dd2007eff99f64f58456b8f28c887ea72caf3631798f19f586c2cf:"/assets/cards/tr/tr-2-front.jpg","49e88188dd73d2dc1889616077e7b3d3a01274be0936f3cf94b0ba13ffcdd3ec":"/assets/cards/tr/tr-3-front.jpg",f9ace908e376ccf677350bf8b04446db76d5b7810e1238eed78f9636917732d5:"/assets/cards/tr/tr-4-front.jpg",e176ed5572f8b0fec1afdf7338922f6287cb2bd7e8da531363f03afad38d2855:"/assets/cards/tr/tr-5-front.jpg",dcd6e5c81f720c301fdf8b8a9bdc7d1332f5d49d859cc3b7a888c4b47abb437c:"/assets/cards/tr/tr-8-front.jpg","7a3a4bc99a08007a8634615d14bb6e8701d8046b4b357e2e53a6816b1fa4b952":"/assets/cards/tr/tr-7-front.jpg","751ef0172ef4154fa9ada26cf0748253cbdb26e77ee5d7fbeb0cb448f0417815":"/assets/cards/tr/tr-9-front.jpg","637e9420cee8da61167a68a33b51a5955c1b96d79b8b104b70a8d721fcb76d2a":"/assets/cards/tr/tr-10-front.jpg","4096df60204fa108f6f86b2219c8a27d83e68a1ccb196df7df46de4392c2b41c":"/assets/cards/tr/tr-15-front.jpg",bf2f3bb722b82651f6eae93503ee371f2eb0aeb19a3c7048ee204c111f0f7eb4:"/assets/cards/tr/tr-13-front.jpg",e3e51452f907f7c993bd47093ca97798e5c685c2662bbf839e24c197bcdec634:"/assets/cards/tr/tr-17-front.jpg","188c6abac72e21173f1f0b02deb68d8204fe9d8773eea4bf01d633d170e226e4":"/assets/cards/tr/tr-19-front.jpg","9350f91bb06a35e92994e0129874a9c12e075ecde1d97595dc94424a3d445bdf":"/assets/cards/tr_plus/tr_plus-1-front.jpg","427ee044bae11fec56f65f194e7d6f8abcb7e904b199fc4a96c58ca93bfef239":"/assets/cards/tr_plus/tr_plus-3-front.jpg",e300e383916c326e28c6ced9e9705531a202a5daef21fdee6763ad2d11e3a2d8:"/assets/cards/tr_plus/tr_plus-5-front.jpg","7438c901962c7ce3370464463ea4f1e65b4d2a4ef220b5a4032115503fc32b0b":"/assets/cards/zb/zb-1-front.jpg","1c5ed46f16057ca9fa0f10685d323abe71b88b2a416eef661e520e9ff3a4fbcf":"/assets/cards/zb/zb-2-front.jpg","64fc21d85fcd6d3a3928ce9667186a0c8316e440396b6e6ebf162ed69ea6abeb":"/assets/cards/zb/zb-3-front.jpg","69f3d2ddd129e0a3b0a3245525786cf068b2e5eafc11897c9b83e4e208fc8270":"/assets/cards/zb/zb-4-front.jpg",a96dbaf805bf2dce31353b8d02732c389101196ac8220074dd161ad97ad3b61d:"/assets/cards/zb/zb-5-front.jpg",b15c50b1b10ce0e6ee1b76b5532ba9eed3b56cdf024ff27bc6d8c5195dcd76ff:"/assets/cards/zb/zb-15-front.jpg","04c9a1429211640a93676e76f7dfe02150d7e5cd921ee79222aa156800173a71":"/assets/cards/zb/zb-9-front.jpg",cf513f83dd7e6ac363f0aaa0a028c0527a164a283b340fb356b1f607b38a8a46:"/assets/cards/zb/zb-10-front.jpg","08a5474a86442dc9ddbfbebcf9994d7d5485108285168acaa865e44cc14d5462":"/assets/cards/zb/zb-12-front.jpg","732218f61fd334436d5359accff815df2d8c54adbeb7c402336e2f2b9f04b3cd":"/assets/cards/zb/zb-22-front.jpg",ce950419d660dcd87a9760439cf739ec7878df58f21a4af49a44cc4a2265c05b:"/assets/cards/zb/zb-17-front.jpg","7efd605546127d01ae40e1be52a64b45f4174bed74d1d9c8a15a6ba2d3129bc6":"/assets/cards/zb/zb-18-front.jpg","92c305b7877de46785ee7e5b4e5c92bf94c2e761047bb4d37d3fed4ec100d8d7":"/assets/cards/zb/zb-20-front.jpg","030fd7997dc5ccd629a0e184c0ac0ad1b33d1fff9366a4131c4a1d74dbe8a9c0":"/assets/cards/zb/zb-23-front.jpg","3b5c39538c0cf52273b845c15580993cc60e2a4a67f7c27b449243029108d538":"/assets/cards/zb_plus/zb_plus-6-front.jpg","4b42de4bbd91e229d41b666598cefd2a340285f228dc0395856b5b7a22b5381b":"/assets/cards/zb_plus/zb_plus-3-front.jpg","31cd007c783ba3389e6b0a7f3ce398515d65b3ab550aab70ebfcb3d86665ad52":"/assets/cards/zb_plus/zb_plus-4-front.jpg","39a0f3d3578f021253fac1a4fb293accd68267719a9bd4707fda7419257ccfc1":"/assets/cards/zb_plus/zb_plus-5-front.jpg","2a75d8802f569be782f6ca9ef865988ecefd6f447442dd8933154a8e70dd2895":"/assets/cards/強化機雷/強化機雷-16-front.jpg","506eb3f1ac120bb2d1a61d693b9b8f00ef56b788c42a231b9203fdad0ad3aed5":"/assets/ui/card-back.jpg","2e25e08a0277638ffbe37080471ac50fe51ab4e24ea0d52a5af46b7980f76340":"/assets/cards/陸上機雷/陸上機雷-20-front.jpg","149f2bc4a9dce26a9250c94e4a9338f0edf8c90a415c999216c00440ea0a3667":"/assets/cards/ダミー/ダミー-20-front.jpg","444338c10747b07f50d0f5baeb6e9e014141c55507d748ae8d5001fe1b3e5ee3":"/assets/maps/444338c10747b07f50d0f5baeb6e9e014141c55507d748ae8d5001fe1b3e5ee3.jpg","04c1b08a573b97d5296d712ef796a7d9c5e4ed3200d8a4ae268295628de18e55":"/assets/maps/04c1b08a573b97d5296d712ef796a7d9c5e4ed3200d8a4ae268295628de18e55.jpg","9e3fcbc86b5a5563c4bb5566031e7c1fd35fda1f32d981a242889b0c2561049c":"/assets/maps/9e3fcbc86b5a5563c4bb5566031e7c1fd35fda1f32d981a242889b0c2561049c.jpg","582cf873071464b2f3ca6232d0a20b36347ffa948125d0642b330b4d8dc9c478":"/assets/maps/582cf873071464b2f3ca6232d0a20b36347ffa948125d0642b330b4d8dc9c478.jpg","0f7fd469ef1f476fc05c15df2f949f575920a92751d52fc7135f2490eb035118":"/assets/maps/0f7fd469ef1f476fc05c15df2f949f575920a92751d52fc7135f2490eb035118.jpg","224304b43b96cc1dcfb865ed84556e7b06f4068c3a5fd8c21b342a8c53c36a72":"/assets/maps/224304b43b96cc1dcfb865ed84556e7b06f4068c3a5fd8c21b342a8c53c36a72.jpg","9429fd9c15d9a339f30f6cd8ad890af69a9570e0347267c2d6636091aec8266f":"/assets/maps/9429fd9c15d9a339f30f6cd8ad890af69a9570e0347267c2d6636091aec8266f.jpg","44f518c3e3df7c83027cf6ee5990dd411a6b828f9a6d5ed1717f0a352c1654e0":"/assets/maps/44f518c3e3df7c83027cf6ee5990dd411a6b828f9a6d5ed1717f0a352c1654e0.jpg",f0abd1d4ae4b2039ed4d1b54562a66a6c9fe9b718582f6946893f42ab522a53b:"/assets/maps/f0abd1d4ae4b2039ed4d1b54562a66a6c9fe9b718582f6946893f42ab522a53b.jpg","3f14f36d964a2093258d568ac4ce3691a767cd369f3ec5ec6679a610e9f6d9bb":"/assets/maps/3f14f36d964a2093258d568ac4ce3691a767cd369f3ec5ec6679a610e9f6d9bb.jpg",e450e91d172a2414c49fef4702f6799f98b794e6ee77a412e28f81bf374ed853:"/assets/maps/e450e91d172a2414c49fef4702f6799f98b794e6ee77a412e28f81bf374ed853.jpg"},Gx="embryo_preload_v1",Hx=["/assets/tiles/平地0.png","/assets/tiles/砂0.png","/assets/tiles/瓦礫0.png","/assets/tiles/瓦礫1.png","/assets/tiles/瓦礫2.png","/assets/tiles/瓦礫3.png","/assets/tiles/森0.png","/assets/tiles/森1.png","/assets/tiles/森2.png","/assets/tiles/森3.png","/assets/tiles/水0.png","/assets/tiles/水1.png","/assets/tiles/水2.png","/assets/tiles/高地1.png","/assets/tiles/高地2.png","/assets/tiles/高地3.png"],Ux=["/assets/tokens/AG-token.jpg","/assets/tokens/AR-token.jpg","/assets/tokens/BG-token.jpg","/assets/tokens/FO-token.jpg","/assets/tokens/HO-token.jpg","/assets/tokens/HY-token.jpg","/assets/tokens/LG-token.jpg","/assets/tokens/LO-token.jpg","/assets/tokens/TR-token.jpg","/assets/tokens/ZB-token.jpg"];function zf(){const e=new Set;for(const n of Object.values(ba))for(const t of n)e.add(`/assets/${t.frontImageId}`),e.add(`/assets/${t.backImageId}`);for(const n of Hx)e.add(n);for(const n of Object.values(Fx))n.startsWith("/assets/maps/")&&e.add(n);for(const n of Ux)e.add(n);return[...e]}function Wx(e){localStorage.setItem(Gx,JSON.stringify({total:e,ts:Date.now()}))}async function Zx(e,n){const t=zf(),a=t.length;let r=0;e(0,a);const s=l=>new Promise(d=>{if(n!=null&&n.aborted){d();return}const u=new Image;u.onload=u.onerror=()=>{r++,e(r,a),d()},u.src=l}),i=10;for(let l=0;l<t.length&&!(n!=null&&n.aborted);l+=i)await Promise.all(t.slice(l,l+i).map(s));n!=null&&n.aborted||Wx(a)}const ni=.4,ti=2.5,Kd=.12,Jd=5;function Yx(e=1){const[n,t]=k.useState({x:0,y:0,scale:e}),a=k.useRef(null),r=k.useRef({x:0,y:0}),s=k.useRef(!1),i=k.useRef(null),l=k.useRef({x:0,y:0,scale:e});k.useLayoutEffect(()=>{const x=i.current;if(!x)return;const m=x.querySelector(".game-board");if(!m)return;const h=x.clientWidth,_=x.clientHeight,b=m.offsetWidth,v=m.offsetHeight;if(!h||!_||!b||!v)return;const y=Math.min(h/b,_/v),w=Math.min(ti,Math.max(ni,y)),T=(h-b*w)/2,$=(_-v*w)/2,j={x:T,y:$,scale:w};l.current=j,t(j)},[]),k.useEffect(()=>{const x=i.current;if(!x)return;const m=h=>{h.preventDefault();const _=h.deltaY<0?Kd:-Kd;t(b=>({...b,scale:Math.min(ti,Math.max(ni,b.scale+_))}))};return x.addEventListener("wheel",m,{passive:!1}),()=>x.removeEventListener("wheel",m)},[]),k.useEffect(()=>{const x=i.current;if(!x)return;let m=0,h=0,_=0,b=!1,v={x:0,y:0};const y=(j,C)=>Math.sqrt((C.clientX-j.clientX)**2+(C.clientY-j.clientY)**2),w=j=>{j.touches.length===1?(m=j.touches[0].clientX,h=j.touches[0].clientY,v={x:m,y:h},b=!1):j.touches.length===2&&(j.preventDefault(),_=y(j.touches[0],j.touches[1]),m=(j.touches[0].clientX+j.touches[1].clientX)/2,h=(j.touches[0].clientY+j.touches[1].clientY)/2)},T=j=>{if(j.touches.length===1){const C=j.touches[0].clientX-m,A=j.touches[0].clientY-h;if(!b){const S=j.touches[0].clientX-v.x,z=j.touches[0].clientY-v.y;Math.sqrt(S**2+z**2)>Jd&&(b=!0)}b&&(j.preventDefault(),t(S=>({...S,x:S.x+C,y:S.y+A}))),m=j.touches[0].clientX,h=j.touches[0].clientY}else if(j.touches.length===2){j.preventDefault();const C=y(j.touches[0],j.touches[1]),A=(j.touches[0].clientX+j.touches[1].clientX)/2,S=(j.touches[0].clientY+j.touches[1].clientY)/2;if(_>0){const E=C/_;t(K=>{const H=Math.min(ti,Math.max(ni,K.scale*E));return{...K,scale:H}})}const z=A-m,M=S-h;t(E=>({...E,x:E.x+z,y:E.y+M})),_=C,m=A,h=S}},$=j=>{j.touches.length<2&&(_=0),j.touches.length===0&&(b=!1),j.touches.length===1&&(m=j.touches[0].clientX,h=j.touches[0].clientY)};return x.addEventListener("touchstart",w,{passive:!1}),x.addEventListener("touchmove",T,{passive:!1}),x.addEventListener("touchend",$),x.addEventListener("touchcancel",$),()=>{x.removeEventListener("touchstart",w),x.removeEventListener("touchmove",T),x.removeEventListener("touchend",$),x.removeEventListener("touchcancel",$)}},[]);const d=k.useCallback(x=>{x.button===0&&(a.current={x:x.clientX,y:x.clientY},r.current={x:x.clientX,y:x.clientY},s.current=!1)},[]),u=k.useCallback(x=>{if(!a.current)return;const m=x.clientX-a.current.x,h=x.clientY-a.current.y,_=Math.sqrt(m*m+h*h);if(!s.current&&_>Jd&&(s.current=!0),s.current){const b=x.clientX-r.current.x,v=x.clientY-r.current.y;t(y=>({...y,x:y.x+b,y:y.y+v}))}r.current={x:x.clientX,y:x.clientY}},[]),p=k.useCallback(x=>{a.current=null,s.current=!1},[]),f=k.useCallback(()=>{a.current=null,s.current=!1},[]),g=k.useCallback(()=>{t(l.current)},[]);return{transform:n,viewportRef:i,isPanning:s.current,handlers:{onMouseDown:d,onMouseMove:u,onMouseUp:p,onMouseLeave:f},resetView:g}}function Xx({x:e,y:n,value:t}){return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"fx-damage-number",style:{left:e,top:n},children:["-",t]}),o.jsx("style",{children:Qx})]})}const Qx=`
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
`;function qx({x:e,y:n,variant:t}){return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:`fx-impact fx-impact--${t}`,style:{left:e,top:n},children:[t==="melee"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"fx-impact__slash fx-impact__slash--1"}),o.jsx("div",{className:"fx-impact__slash fx-impact__slash--2"})]}),t==="ranged"&&o.jsx("div",{className:"fx-impact__beam"}),t==="charge"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"fx-impact__ring fx-impact__ring--1"}),o.jsx("div",{className:"fx-impact__ring fx-impact__ring--2"})]})]}),o.jsx("style",{children:ev})]})}const ev=`
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
`;function nv({x:e,y:n}){return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"fx-explosion",style:{left:e,top:n},children:[o.jsx("div",{className:"fx-explosion__flash"}),o.jsx("div",{className:"fx-explosion__ring fx-explosion__ring--1"}),o.jsx("div",{className:"fx-explosion__ring fx-explosion__ring--2"}),o.jsx("div",{className:"fx-explosion__ring fx-explosion__ring--3"}),Array.from({length:8}).map((t,a)=>o.jsx("div",{className:"fx-explosion__particle",style:{"--angle":`${a*45}deg`,"--delay":`${a*20}ms`,"--dist":`${30+Math.random()*20}px`}},a))]}),o.jsx("style",{children:tv})]})}const tv=`
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
`;function av({defId:e,isAuxiliary:n,playerId:t}){const a=q(e);if(!a)return null;const r=t==="player1"?"P1":"P2",s=t==="player1"?"var(--color-accent)":"#ff00c8";return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"fx-card-reveal",style:{position:"fixed",bottom:"80px",left:"50%",transform:"translateX(-50%)",zIndex:800,pointerEvents:"none"},children:[o.jsxs("div",{className:"fx-card-reveal__label",style:{color:s},children:[r," ",n?"抽到辅助卡":"抽牌"]}),o.jsx("div",{className:"fx-card-reveal__card",style:{borderColor:s},children:o.jsxs("div",{className:"fx-card-reveal__inner",children:[o.jsx("div",{className:"fx-card-reveal__back",children:o.jsx("img",{src:"/assets/ui/card-back.jpg",alt:"card back"})}),o.jsx("div",{className:"fx-card-reveal__front",children:o.jsx("img",{src:`/assets/${a.frontImageId}`,alt:a.nameCn})})]})}),o.jsxs("div",{className:"fx-card-reveal__name",style:{color:s},children:[a.nameCn,n&&o.jsx("span",{className:"fx-card-reveal__aux-badge",children:"辅助"})]})]}),o.jsx("style",{children:rv})]})}const rv=`
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
`;function ov({defId:e,isBomb:n,index:t,total:a}){const r=q(e);if(!r)return null;const s=n?"fx-card-destroy--bomb":"";return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:`fx-card-destroy ${s}`,style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:810,pointerEvents:"none"},children:[o.jsxs("div",{className:"fx-card-destroy__card",children:[o.jsx("img",{src:`/assets/${r.frontImageId}`,alt:r.nameCn}),o.jsx("div",{className:"fx-card-destroy__flash"})]}),o.jsxs("div",{className:"fx-card-destroy__label",children:[r.nameCn," 被摧毁",n&&o.jsx("span",{className:"fx-card-destroy__bomb-badge",children:"💣 诱爆"})]}),o.jsxs("div",{className:"fx-card-destroy__counter",children:[t+1," / ",a]})]}),o.jsx("style",{children:sv})]})}const sv=`
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
`,rl=62,ai=Math.round(rl*(1042/756)),Bd=68,iv=6,Fd=140;function lv({p1Cards:e,p2Cards:n}){const[t,a]=k.useState("init"),[r,s]=k.useState(null);return k.useEffect(()=>{const i=document.querySelector(".unit-token-abs--p1"),l=document.querySelector(".unit-token-abs--p2"),d=i==null?void 0:i.getBoundingClientRect(),u=l==null?void 0:l.getBoundingClientRect();s({p1:d?{x:d.left+d.width/2,y:d.top+d.height/2}:{x:window.innerWidth*.3,y:window.innerHeight*.55},p2:u?{x:u.left+u.width/2,y:u.top+u.height/2}:{x:window.innerWidth*.7,y:window.innerHeight*.45}});const p=setTimeout(()=>a("fan"),50),f=setTimeout(()=>a("hold"),650),g=setTimeout(()=>a("cluster"),1650),x=setTimeout(()=>a("exit"),2e3);return()=>{[p,f,g,x].forEach(clearTimeout)}},[]),r?Tr.createPortal(o.jsxs("div",{style:{position:"fixed",inset:0,zIndex:900,pointerEvents:"none"},children:[o.jsx(Gd,{cards:e,origin:r.p1,phase:t,color:"#00f0ff",label:"P1"}),o.jsx(Gd,{cards:n,origin:r.p2,phase:t,color:"#ff8844",label:"P2"})]}),document.body):null}function Gd({cards:e,origin:n,phase:t,color:a,label:r}){if(e.length===0)return null;const s=e.length,l=(s-1)*Bd>window.innerWidth*.7?Math.floor(window.innerWidth*.7/Math.max(s-1,1)):Bd,d=t==="hold"||t==="cluster";return o.jsxs("div",{style:{position:"fixed",left:n.x,top:n.y},children:[o.jsxs("div",{style:{position:"absolute",top:-(Fd+ai/2+28),left:0,transform:"translateX(-50%)",color:a,fontSize:"0.78rem",fontWeight:"bold",whiteSpace:"nowrap",textShadow:`0 0 10px ${a}, 1px 1px 3px #000`,opacity:d?1:0,transition:"opacity 250ms",letterSpacing:"0.06em"},children:[r,"  弃牌 ×",s]}),e.map((u,p)=>{const f=q(u.defId),g=(s-1)/2,x=p-g,m=x*l,h=-Fd,_=x*iv;let b,v,y,w,T;switch(t){case"init":b=0,v=0,y=0,w=.15,T=0;break;case"fan":case"hold":b=m,v=h,y=_,w=1,T=1;break;case"cluster":b=0,v=h,y=0,w=.85,T=1;break;case"exit":default:b=0,v=h-520,y=0,w=.2,T=0;break}const $=p*28;let j;switch(t){case"fan":j=[`transform 480ms cubic-bezier(0.34,1.56,0.64,1) ${$}ms`,`opacity   300ms ease-out ${$}ms`].join(", ");break;case"hold":j="none";break;case"cluster":j="transform 320ms ease-in, opacity 150ms ease-in";break;case"exit":j="transform 450ms ease-in, opacity 380ms ease-in 60ms";break;default:j="none"}return o.jsx("div",{style:{position:"absolute",width:rl,height:ai,left:-rl/2,top:-ai/2,borderRadius:5,overflow:"hidden",border:`1px solid ${a}55`,boxShadow:`0 6px 20px rgba(0,0,0,0.7), 0 0 8px ${a}44`,zIndex:p,transform:`translate(${b}px, ${v}px) rotate(${y}deg) scale(${w})`,opacity:T,transition:j,willChange:"transform, opacity"},children:f?o.jsx("img",{src:`/assets/${f.frontImageId}`,alt:f.nameCn,style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1}):o.jsx("div",{style:{width:"100%",height:"100%",background:"#222"}})},u.instanceId)})]})}const ol=62,ri=Math.round(ol*(1042/756)),Hd=52,cv=5,Ud=120;function dv({playerId:e,count:n}){const[t,a]=k.useState("init"),[r,s]=k.useState(null),[i,l]=k.useState(null);if(k.useEffect(()=>{const u=e==="player1"?".mp__deck--p1":".mp__deck--p2",p=document.querySelector(u),f=document.querySelector(e==="player1"?".unit-token-abs--p1":".unit-token-abs--p2"),g=p==null?void 0:p.getBoundingClientRect(),x=f==null?void 0:f.getBoundingClientRect();s(g?{x:g.left+g.width/2,y:g.top+g.height/2}:{x:window.innerWidth*.5,y:window.innerHeight*.85}),l(x?{x:x.left+x.width/2,y:x.top+x.height/2}:{x:e==="player1"?window.innerWidth*.3:window.innerWidth*.7,y:e==="player1"?window.innerHeight*.55:window.innerHeight*.45});const m=setTimeout(()=>a("spread"),50),h=setTimeout(()=>a("hold"),600),_=setTimeout(()=>a("cluster"),900),b=setTimeout(()=>a("fly"),1200);return()=>{[m,h,_,b].forEach(clearTimeout)}},[e]),!r||!i)return null;const d=e==="player1"?"#00f0ff":"#ff8844";return Tr.createPortal(o.jsx("div",{style:{position:"fixed",inset:0,zIndex:900,pointerEvents:"none"},children:o.jsx(uv,{count:n,deckPos:r,mechaPos:i,phase:t,color:d,playerId:e})}),document.body)}function uv({count:e,deckPos:n,mechaPos:t,phase:a,color:r,playerId:s}){if(e===0)return null;const i=e,d=(i-1)*Hd>window.innerWidth*.6?Math.floor(window.innerWidth*.6/Math.max(i-1,1)):Hd,u=t.x-n.x,p=t.y-n.y,f=a==="hold"||a==="cluster",g=`${s==="player1"?"P1":"P2"} 抽牌 ×${i}`;return o.jsxs("div",{style:{position:"fixed",left:n.x,top:n.y},children:[o.jsx("div",{style:{position:"absolute",top:-(Ud+ri/2+28),left:0,transform:"translateX(-50%)",color:r,fontSize:"0.78rem",fontWeight:"bold",whiteSpace:"nowrap",textShadow:`0 0 10px ${r}, 1px 1px 3px #000`,opacity:f?1:0,transition:"opacity 250ms",letterSpacing:"0.06em"},children:g}),Array.from({length:i},(x,m)=>{const h=(i-1)/2,_=m-h,b=_*d,v=-Ud,y=_*cv;let w,T,$,j,C;switch(a){case"init":w=0,T=0,$=0,j=.15,C=0;break;case"spread":case"hold":w=b,T=v,$=y,j=1,C=1;break;case"cluster":w=0,T=v,$=0,j=.85,C=1;break;case"fly":default:w=u,T=p,$=0,j=.2,C=0;break}const A=m*24;let S;switch(a){case"spread":S=[`transform 480ms cubic-bezier(0.34,1.56,0.64,1) ${A}ms`,`opacity   300ms ease-out ${A}ms`].join(", ");break;case"hold":S="none";break;case"cluster":S="transform 280ms ease-in, opacity 150ms ease-in";break;case"fly":S="transform 400ms cubic-bezier(0.4,0,1,1), opacity 300ms ease-in 80ms";break;default:S="none"}return o.jsx("div",{style:{position:"absolute",width:ol,height:ri,left:-ol/2,top:-ri/2,borderRadius:5,overflow:"hidden",border:`1px solid ${r}55`,boxShadow:`0 6px 20px rgba(0,0,0,0.7), 0 0 8px ${r}44`,zIndex:m,transform:`translate(${w}px, ${T}px) rotate(${$}deg) scale(${j})`,opacity:C,transition:S,willChange:"transform, opacity"},children:o.jsx("img",{src:"/assets/ui/card-back.jpg",alt:"card back",style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1})},m)})]})}const sl=56,il=Math.round(sl*(1042/756));function pv({playerId:e}){const[n,t]=k.useState("face-up"),[a,r]=k.useState(null);if(k.useEffect(()=>{const i=e==="player1"?".mp__deck--p1":".mp__deck--p2",l=document.querySelector(i),d=l==null?void 0:l.getBoundingClientRect();r(d?{x:d.left+d.width/2,y:d.top+d.height/2}:{x:window.innerWidth*.5,y:window.innerHeight*.85});const u=setTimeout(()=>t("flip"),150),p=setTimeout(()=>t("face-down"),500),f=setTimeout(()=>t("fade"),650);return()=>{[u,p,f].forEach(clearTimeout)}},[e]),!a)return null;const s=e==="player1"?"#00f0ff":"#ff8844";return Tr.createPortal(o.jsxs("div",{style:{position:"fixed",inset:0,zIndex:900,pointerEvents:"none"},children:[o.jsxs("div",{style:{position:"fixed",left:a.x,top:a.y},children:[[0,1,2].map(i=>o.jsx(fv,{index:i,phase:n,color:s},i)),o.jsx("div",{style:{position:"absolute",top:-(il/2+32),left:0,transform:"translateX(-50%)",color:s,fontSize:"0.78rem",fontWeight:"bold",whiteSpace:"nowrap",textShadow:`0 0 10px ${s}, 1px 1px 3px #000`,letterSpacing:"0.06em",opacity:n==="face-up"||n==="flip"||n==="face-down"?1:0,transition:"opacity 200ms"},children:"♻️ 重洗牌组"})]}),o.jsx("style",{children:mv})]}),document.body)}function fv({index:e,phase:n,color:t}){const a=(e-1)*3,r=(e-1)*2;let s;switch(n){case"face-up":case"flip":case"face-down":s=1;break;case"fade":s=0;break}const i=n==="flip"?"reshuffle-card--flipping":n==="face-down"||n==="fade"?"reshuffle-card--flipped":"";return o.jsxs("div",{className:`reshuffle-card ${i}`,style:{position:"absolute",width:sl,height:il,left:-sl/2+a,top:-il/2+r,perspective:600,opacity:s,transition:"opacity 200ms ease-in",willChange:"opacity",zIndex:e},children:[o.jsx("div",{className:"reshuffle-card__face reshuffle-card__front",style:{background:t+"33",border:`2px solid ${t}88`,borderRadius:5,boxShadow:`0 0 12px ${t}55`}}),o.jsx("div",{className:"reshuffle-card__face reshuffle-card__back",style:{borderRadius:5,overflow:"hidden",border:"1px solid #ffffff44",boxShadow:"0 4px 12px rgba(0,0,0,0.6)"},children:o.jsx("img",{src:"/assets/ui/card-back.jpg",alt:"card back",style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1})})]})}const mv=`
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
`,ln=68;function gv(){const{currentEvent:e}=Dr();return e?o.jsxs("div",{className:"effects-layer",style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:20},children:[e.type==="damage_number"&&o.jsx(Xx,{x:e.position.col*ln+ln/2,y:e.position.row*ln+ln/2,value:e.value},`dmg-${Date.now()}`),(e.type==="ranged_hit"||e.type==="melee_hit"||e.type==="charge_hit")&&o.jsx(qx,{x:e.targetPos.col*ln+ln/2,y:e.targetPos.row*ln+ln/2,variant:e.type==="ranged_hit"?"ranged":e.type==="melee_hit"?"melee":"charge"},`hit-${Date.now()}`),e.type==="mine_explode"&&o.jsx(nv,{x:e.position.col*ln+ln/2,y:e.position.row*ln+ln/2},`exp-${Date.now()}`),e.type==="card_draw"&&o.jsx(av,{defId:e.defId,isAuxiliary:e.isAuxiliary,playerId:e.playerId},`draw-${e.card.instanceId}`),e.type==="card_destroy"&&o.jsx(ov,{defId:e.defId,isBomb:e.isBomb,index:e.index,total:e.total},`destroy-${e.card.instanceId}`),e.type==="cleanup_discard"&&o.jsx(lv,{p1Cards:e.p1Cards,p2Cards:e.p2Cards},`cleanup-${Date.now()}`),e.type==="batch_card_draw"&&o.jsx(dv,{playerId:e.playerId,count:e.count},`draw-${e.playerId}-${Date.now()}`),e.type==="deck_reshuffle"&&o.jsx(pv,{playerId:e.playerId},`reshuffle-${e.playerId}-${Date.now()}`)]}):null}function Ia(){const{state:e}=je(),{map:n,mines:t}=e,{currentEvent:a,animatedPositions:r}=Dr(),{transform:s,viewportRef:i,handlers:l,resetView:d}=Yx(.9),u=(a==null?void 0:a.type)==="screen_shake"?`board-transform board-shake board-shake--${a.intensity}`:"board-transform";return o.jsxs("div",{ref:i,className:"board-viewport",...l,style:{cursor:"grab"},children:[o.jsxs("div",{className:u,style:{transform:`translate(${s.x}px, ${s.y}px) scale(${s.scale})`,transformOrigin:"top left"},children:[o.jsx("div",{className:"game-board",style:{gridTemplateColumns:`repeat(${n.width}, var(--cell-size))`,gridTemplateRows:`repeat(${n.height}, var(--cell-size))`},children:n.cells.flatMap((p,f)=>p.map((g,x)=>o.jsx(hv,{cell:g,row:f,col:x,mines:t},`${f}-${x}`)))}),e.playerIds.map((p,f)=>{const g=e.players[p];return!g||g.isDefeated?null:o.jsx(xv,{player:g,side:`p${f+1}`,playerIndex:f,color:fc(e,p),animatedPos:r[p]??null},p)}),o.jsx(gv,{})]}),o.jsx("button",{className:"board-reset-btn",onClick:d,title:"重置视角",children:"⟳"})]})}function hv({cell:e,row:n,col:t,mines:a}){const r=oc(e),s=e.terrain==="highland"&&e.elevation>0?`+${e.elevation}`:null,i=a.filter(l=>l.position.row===n&&l.position.col===t);return o.jsxs("div",{className:`board-cell board-cell--${e.terrain}`,style:{backgroundImage:`url("${r}")`},"data-row":n,"data-col":t,children:[s&&o.jsx("span",{className:"board-cell__elev",children:s}),i.map((l,d)=>o.jsx(vv,{mine:l,offset:d*4},l.id))]})}function xv({player:e,side:n,playerIndex:t,color:a,animatedPos:r}){const s=Q.find(f=>f.id===e.unitId);if(!s)return null;const i=(r==null?void 0:r.pos)??e.position,l=(r==null?void 0:r.facing)??e.facing,d={N:0,E:90,S:180,W:270}[l]??0,u=(()=>{switch(l){case"N":return{top:0,left:"50%",translate:"-50% 0"};case"S":return{bottom:0,left:"50%",translate:"-50% 0"};case"E":return{right:0,top:"50%",translate:"0 -50%"};case"W":return{left:0,top:"50%",translate:"0 -50%"};default:return{top:0,left:"50%",translate:"-50% 0"}}})(),p=`P${t+1}`;return o.jsxs("div",{className:`unit-token-abs unit-token-abs--${n}`,style:{left:`calc(${i.col} * var(--cell-size))`,top:`calc(${i.row} * var(--cell-size))`,width:"var(--cell-size)",height:"var(--cell-size)","--token-color":a},children:[o.jsx("div",{className:"unit-token-abs__label",style:{borderColor:a,backgroundColor:a+"33"},title:`${p} ${s.nameCn}`,children:p}),o.jsx("span",{className:"unit-token-abs__facing-arrow",style:{...u,transform:`rotate(${d}deg)`,color:a},title:`机头朝向：${e.facing}`,children:"▲"})]})}function vv({mine:e,offset:n}){const t=e.ownerId==="player1";return o.jsx("div",{className:`mine-token mine-token--${t?"p1":"p2"}`,style:{transform:`translate(${n}px, ${n}px)`},title:`机雷 (伤害 ${e.damage})`,children:o.jsx("span",{className:"mine-token__icon",children:"💣"})})}const bv=250,yv=480,_v=2e3,Xo=252,vo=Math.round(Xo*(1042/756)),Ot=12;function At(){const[e,n]=k.useState(null),t=k.useRef(null),a=k.useRef(null),r=k.useRef(null),s=k.useRef({x:0,y:0}),i=k.useRef(!1),l=()=>{t.current&&(clearTimeout(t.current),t.current=null),a.current&&(clearTimeout(a.current),a.current=null),r.current&&(clearTimeout(r.current),r.current=null)},d=k.useCallback(()=>{l(),n(null)},[]),u=k.useCallback(p=>({onMouseEnter:f=>{s.current={x:f.clientX,y:f.clientY},l(),t.current=setTimeout(()=>{n({src:p,x:s.current.x,y:s.current.y})},bv)},onMouseMove:f=>{s.current={x:f.clientX,y:f.clientY},n(g=>g&&{...g,x:f.clientX,y:f.clientY})},onMouseLeave:()=>d(),onTouchStart:f=>{const g=f.touches[0];i.current=!1,l(),a.current=setTimeout(()=>{i.current||(n({src:p,x:g.clientX,y:g.clientY}),r.current=setTimeout(()=>n(null),_v))},yv)},onTouchMove:()=>{i.current=!0,d()},onTouchEnd:()=>{l()}}),[d]);return{zoom:e,hide:d,getZoomHandlers:u}}function Iv(e,n){const t=window.innerWidth,a=window.innerHeight;let r=e+18;r+Xo+Ot>t&&(r=e-Xo-18);let s=n-vo/2;return s<Ot&&(s=Ot),s+vo>a-Ot&&(s=a-vo-Ot),{left:Math.max(Ot,r),top:s}}function Vt({zoom:e}){if(!e)return null;const{left:n,top:t}=Iv(e.x,e.y);return Tr.createPortal(o.jsxs("div",{style:{position:"fixed",left:n,top:t,width:Xo,height:vo,zIndex:99999,pointerEvents:"none",borderRadius:8,overflow:"hidden",boxShadow:"0 12px 40px rgba(0,0,0,0.75), 0 0 0 2px rgba(255,255,255,0.15)",background:"#111",animation:"card-zoom-in 0.12s ease-out both"},children:[o.jsx("img",{src:e.src,alt:"",style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1}),o.jsx("style",{children:kv})]}),document.body)}const kv=`
@keyframes card-zoom-in {
  from { opacity: 0; transform: scale(0.88); }
  to   { opacity: 1; transform: scale(1); }
}
`;function ll(e){return`P${e.replace("player","")}`}function jv(e,n){const t=ba[n]??[];return[...e].sort((a,r)=>{const s=t.findIndex(l=>l.id===a.defId),i=t.findIndex(l=>l.id===r.defId);return s-i})}function wv(e,n,t,a,r,s){function i(x){if(!x)return null;const m=[...e.hand,...e.auxiliary].find(h=>h.instanceId===x);return m?r(m.defId)??null:null}const l=i(t),d=i(a),u=jn(e,r,"movement"),p=e.position,f=[];let g=[p];if(l){if(l.actionType==="movement"){const x=(l.movementValue??0)+(u.wheel?2:0);if(x>0){const m=bs(s,p,x,[n],u,e.facing);g=m.map(h=>h.pos),f.push(...m.map(h=>({pos:h.pos,cls:"preview-move-s1"})))}}else if(l.actionType==="ranged"){const x=l.rangeMin??1,m=l.rangeMax??6;for(let h=0;h<s.height;h++)for(let _=0;_<s.width;_++)Me(p,{row:h,col:_})>=x&&Me(p,{row:h,col:_})<=m&&f.push({pos:{row:h,col:_},cls:"preview-atk-s1"})}else if(l.actionType==="melee"||l.actionType==="charge")for(const[x,m]of[[-1,0],[1,0],[0,-1],[0,1]]){const h=p.row+x,_=p.col+m;h>=0&&h<s.height&&_>=0&&_<s.width&&f.push({pos:{row:h,col:_},cls:"preview-atk-s1"})}}if(d){const x=new Map,m=h=>`${h.row},${h.col}`;if(d.actionType==="movement"){const h=(d.movementValue??0)+(u.wheel?2:0);if(h>0){for(const _ of g)Sf(s,_,h,[n],u).forEach(b=>x.set(m(b.pos),b.pos));x.forEach(_=>f.push({pos:_,cls:"preview-move-s2"}))}}else if(d.actionType==="ranged"){const h=d.rangeMin??1,_=d.rangeMax??6;for(const b of g)for(let v=0;v<s.height;v++)for(let y=0;y<s.width;y++){const w=Me(b,{row:v,col:y});w>=h&&w<=_&&x.set(m({row:v,col:y}),{row:v,col:y})}x.forEach(b=>f.push({pos:b,cls:"preview-atk-s2"}))}else if(d.actionType==="melee"||d.actionType==="charge"){for(const h of g)for(const[_,b]of[[-1,0],[1,0],[0,-1],[0,1]]){const v=h.row+_,y=h.col+b;v>=0&&v<s.height&&y>=0&&y<s.width&&x.set(m({row:v,col:y}),{row:v,col:y})}x.forEach(h=>f.push({pos:h,cls:"preview-atk-s2"}))}}return f}const Sv=["board-cell--preview-move-s1","board-cell--preview-move-s2","board-cell--preview-atk-s1","board-cell--preview-atk-s2"];function Wd(){document.querySelectorAll(".board-cell").forEach(e=>Sv.forEach(n=>e.classList.remove(n)))}const Cv=[{id:"hand",label:"手牌",icon:"🃏"},{id:"auxiliary",label:"辅助区",icon:"⚙️"},{id:"discard",label:"弃牌区",icon:"♻️"},{id:"destroyed",label:"已破坏",icon:"💀"}];function Qo(){const{state:e,dispatch:n,aiConfig:t}=je(),{isAnimating:a}=Dr(),r=()=>n({type:"ADVANCE_PLOT_STEP"});if(k.useEffect(()=>{if(e.phase!=="plotting"||a)return;const i=e.plottingStep;if(!i||!i.startsWith("transition_to_"))return;const l=i.replace("transition_to_","");if(!$e(t,l))return;const d=setTimeout(r,400);return()=>clearTimeout(d)},[e.plottingStep,e.phase,a,t]),e.phase!=="plotting"||a)return null;const s=e.plottingStep;if(s&&s.startsWith("transition_to_")){const i=s.replace("transition_to_","");return $e(t,i)?null:o.jsx(Tv,{onContinue:r,playerLabel:ll(i),hint:"请确认对方不在旁后开始布局"})}return null}function aa(){const{state:e,dispatch:n,getCard:t,aiConfig:a}=je(),{plottingStep:r}=e;if(e.phase!=="plotting"||r==="complete"||r===null||r.startsWith("transition_to_"))return null;const s=r,i=$e(a,s),l=zr(a,s);return o.jsx(Nv,{activePlottingPlayerId:s,getCard:t,isAI:i,aiDifficulty:l,onConfirm:(d,u)=>{n({type:"PLOT_CARD",playerId:s,seg:1,instanceId:d}),n({type:"PLOT_CARD",playerId:s,seg:2,instanceId:u}),n({type:"CONFIRM_PLOT",playerId:s})}},s)}function Nv({activePlottingPlayerId:e,getCard:n,onConfirm:t,isAI:a=!1,aiDifficulty:r="hard"}){const{state:s,dispatch:i,exposureMode:l}=je(),[d,u]=k.useState(null),[p,f]=k.useState(null),[g,x]=k.useState("hand"),[m,h]=k.useState(e),_=m===e||l,b=s.players[m],v=s.players[e],y=M=>fc(s,M),w=y(e),T=(()=>{const M=s.playerIds.filter(D=>D!==e&&s.teams[D]!==s.teams[e]&&!s.players[D].isDefeated);if(M.length===0)return null;const E=v.position;let K=M[0],H=Math.abs(s.players[M[0]].position.row-E.row)+Math.abs(s.players[M[0]].position.col-E.col);for(let D=1;D<M.length;D++){const J=Math.abs(s.players[M[D]].position.row-E.row)+Math.abs(s.players[M[D]].position.col-E.col);J<H&&(K=M[D],H=J)}return s.players[K]})();k.useEffect(()=>{x(m===e?"hand":"auxiliary")},[m,e]),k.useEffect(()=>{const M=(T==null?void 0:T.position)??{row:0,col:0},E=wv(v,M,d,p,n,s.map);return Wd(),E.forEach(({pos:K,cls:H})=>{const D=document.querySelector(`.board-cell[data-row="${K.row}"][data-col="${K.col}"]`);D&&D.classList.add(`board-cell--${H}`)}),Wd},[d,p]),k.useEffect(()=>{if(!a)return;const M=T??v,E=setTimeout(()=>{const{seg1:K,seg2:H}=sx(v,M,n,r,s.map);K&&H?t(K,H):K?t(K,K):i({type:"CONFIRM_PLOT",playerId:e})},800);return()=>clearTimeout(E)},[a]);function $(M){if(d===M){u(null);return}if(p===M){f(null);return}if(!d){u(M);return}if(!p){f(M);return}f(M)}function j(M){return M==="deck"?b.deck.filter(E=>!E.destroyed).length:M==="hand"?b.hand.filter(E=>!E.destroyed).length:M==="auxiliary"?b.auxiliary.length:M==="discard"?b.discard.length:M==="destroyed"?b.destroyedCards.length:0}function C(M){return M==="deck"?_?jv(b.deck,b.unitId):[]:M==="hand"?b.hand.filter(E=>!E.destroyed):M==="auxiliary"?b.auxiliary:M==="discard"?b.discard:M==="destroyed"?b.destroyedCards:[]}const A=d!==null&&p!==null,S=_,z=g==="deck"&&_;return o.jsxs("div",{className:"plot-content",children:[o.jsxs("div",{className:"plot-panel__header",children:[o.jsx("span",{className:"plot-panel__player",style:{color:w},children:ll(e)}),o.jsx("span",{className:"plot-panel__prompt",children:"布局中"})]}),o.jsx("div",{className:"plot-tab-row",children:s.playerIds.map(M=>{const E=m===M,K=M===e;return o.jsxs("button",{className:`plot-tab${E?" plot-tab--active":""}`,style:E?{color:y(M),borderBottomColor:y(M)}:void 0,onClick:()=>h(M),children:[ll(M),K&&!E&&o.jsx("span",{className:"plot-tab__dot",style:{background:y(M)}})]},M)})}),m===e?o.jsxs("div",{className:"plot-slots",children:[o.jsx(Zd,{label:"主要阶段 1",cardInstanceId:d,getCard:n,hand:v.hand,onClear:()=>u(null),color:w}),o.jsx(Zd,{label:"主要阶段 2",cardInstanceId:p,getCard:n,hand:v.hand,onClear:()=>f(null),color:w})]}):l?o.jsxs("div",{className:"plot-slots",children:[o.jsx(Yd,{label:"主要阶段 1",card:b.plotSeg1,getCard:n}),o.jsx(Yd,{label:"主要阶段 2",card:b.plotSeg2,getCard:n})]}):o.jsxs("div",{className:"plot-slots",children:[o.jsxs("div",{className:"plot-slot-locked",children:[o.jsx("span",{children:"🔒"}),o.jsx("span",{children:"主要阶段 1"}),o.jsx("span",{className:"plot-slot-locked__hint",children:"对方已锁定"})]}),o.jsxs("div",{className:"plot-slot-locked",children:[o.jsx("span",{children:"🔒"}),o.jsx("span",{children:"主要阶段 2"}),o.jsx("span",{className:"plot-slot-locked__hint",children:"对方已锁定"})]})]}),o.jsxs("div",{className:"plot-zone-tabs",children:[o.jsxs("button",{className:`plot-zone-tab${z?" plot-zone-tab--active":""}`,style:z?{borderColor:w}:void 0,onClick:S?()=>x("deck"):void 0,disabled:!S,title:S?"卡组：按资料集顺序查看":"对方卡组不可查看",children:[o.jsx("span",{className:"plot-zone-tab__icon",children:S?"🂠":"🔒"}),o.jsx("span",{className:"plot-zone-tab__label",children:"卡组"}),o.jsx("span",{className:"plot-zone-tab__count",children:b.deck.filter(M=>!M.destroyed).length})]}),Cv.map(({id:M,label:E,icon:K})=>{const H=g===M;return o.jsxs("button",{className:`plot-zone-tab${H?" plot-zone-tab--active":""}`,style:H?{borderColor:_?w:y(m)}:void 0,onClick:()=>x(M),title:`${E}：点击查看`,children:[o.jsx("span",{className:"plot-zone-tab__icon",children:K}),o.jsx("span",{className:"plot-zone-tab__label",children:E}),o.jsx("span",{className:"plot-zone-tab__count",children:j(M)})]},M)})]}),o.jsx("div",{className:"plot-zone-view",children:g==="hand"&&!_?o.jsxs("div",{className:"plot-zone-private",children:["🔒 对方手牌不可查看",o.jsx("br",{}),o.jsxs("span",{className:"plot-zone-private__count",children:["共 ",j("hand")," 张"]})]}):C(g).length===0?o.jsx("p",{className:"plot-zone-empty",children:"（此区域为空）"}):o.jsx("div",{className:"plot-card-grid",children:C(g).map(M=>{const E=n(M.defId),K=g==="hand"&&m===e,H=M.instanceId===d,D=M.instanceId===p;return o.jsx(Mv,{card:M,def:E,isSelected:H||D,segLabel:H?"①":D?"②":null,onClick:K?()=>$(M.instanceId):void 0},M.instanceId)})})}),o.jsx("div",{className:"plot-footer",children:o.jsx("button",{className:"plot-confirm-btn",disabled:!A,style:A?{borderColor:w,color:w}:void 0,onClick:()=>{d&&p&&t(d,p)},children:A?"确定布局":`请选择主要阶段 ${d?"2":"1"} 的卡牌`})}),o.jsx("style",{children:Ev})]})}function Zd({label:e,cardInstanceId:n,getCard:t,hand:a,onClear:r,color:s}){const i=a.find(g=>g.instanceId===n)??null,l=i?t(i.defId):null,{zoom:d,hide:u,getZoomHandlers:p}=At(),f=l?`/assets/${l.frontImageId}`:"";return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"plot-slot",children:[o.jsx("div",{className:"plot-slot__label",children:e}),l&&i?o.jsxs("div",{className:"plot-slot__card",onClick:()=>{u(),r()},title:"点击取消选择",style:{borderColor:s,boxShadow:`0 0 8px ${s}55`},...p(f),children:[o.jsx("img",{src:f,alt:l.nameCn,className:"plot-slot__img",onError:g=>{g.target.style.opacity="0.4"}}),o.jsx("span",{className:"plot-slot__name",children:l.nameCn}),o.jsx("span",{className:"plot-slot__clear",children:"✕"})]}):o.jsx("div",{className:"plot-slot__empty",children:"— 未选择 —"})]}),o.jsx(Vt,{zoom:d})]})}function Yd({label:e,card:n,getCard:t}){const a=n?t(n.defId):null,r=a?`/assets/${a.frontImageId}`:"";return o.jsxs("div",{className:"plot-slot",children:[o.jsx("div",{className:"plot-slot__label",children:e}),a&&n?o.jsxs("div",{className:"plot-slot__card",style:{borderColor:"#888",cursor:"default"},children:[o.jsx("img",{src:r,alt:a.nameCn,className:"plot-slot__img",onError:s=>{s.target.style.opacity="0.4"}}),o.jsx("span",{className:"plot-slot__name",children:a.nameCn})]}):o.jsx("div",{className:"plot-slot__empty",children:"— 未布局 —"})]})}function Mv({card:e,def:n,isSelected:t,segLabel:a,onClick:r}){const{zoom:s,getZoomHandlers:i}=At(),l=n?`/assets/${n.frontImageId}`:"";return o.jsxs(o.Fragment,{children:[o.jsxs("button",{className:`plot-card${t?" plot-card--selected":""}${r?"":" plot-card--readonly"}`,onClick:r,disabled:!r,title:(n==null?void 0:n.nameCn)??"???",...n?i(l):{},children:[n?o.jsxs(o.Fragment,{children:[o.jsx("img",{src:l,alt:n.nameCn,className:"plot-card__img",onError:d=>{d.target.style.opacity="0.3"}}),o.jsx("span",{className:"plot-card__name",children:n.nameCn}),n.damage!==void 0&&o.jsxs("span",{className:"plot-card__stat",children:["💥",n.damage]}),n.movementValue!==void 0&&o.jsxs("span",{className:"plot-card__stat",children:["🏃",n.movementValue]}),n.rangeMin!==void 0&&o.jsxs("span",{className:"plot-card__stat",children:["🎯",n.rangeMin,"–",n.rangeMax]})]}):o.jsx("span",{className:"plot-card__name",children:"???"}),a&&o.jsx("span",{className:"plot-card__badge",children:a})]}),o.jsx(Vt,{zoom:s})]})}function Tv({onContinue:e,playerLabel:n,hint:t}){return o.jsxs("div",{className:"pass-device-screen",children:[o.jsxs("div",{className:"pass-device-screen__content",children:[o.jsx("div",{className:"pass-device-screen__icon",children:"🤖"}),o.jsx("h2",{className:"pass-device-screen__title",children:"请将设备交给"}),o.jsx("h1",{className:"pass-device-screen__player",children:n}),o.jsx("p",{className:"pass-device-screen__hint",children:t}),o.jsxs("button",{className:"pass-device-screen__btn",onClick:e,children:[n," 已就位，继续"]})]}),o.jsx("style",{children:Dv})]})}const Ev=`
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
`,Dv=`
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
`;function oi(e,n){const t=kf(e,n);if(t.length===0)return n;if(t.length===1)return t[0];const a=e.players[n].position;let r=t[0],s=1/0;for(const i of t){const l=e.players[i].position,d=Math.abs(l.row-a.row)+Math.abs(l.col-a.col);d<s&&(s=d,r=i)}return r}function qo(){const{state:e,getCard:n}=je(),{phase:t,currentTiming:a,turnOrder:r,pendingDamage:s,pendingArmorChoice:i}=e;if(t!=="action_seg1"&&t!=="action_seg2")return null;const l=t==="action_seg1"?1:2;return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"action-hud",style:s||i?{display:"none"}:void 0,children:[a==="movement"&&o.jsx(zv,{seg:l,turnOrder:r,getCard:n},`mov-${l}`),(a==="ranged"||a==="melee")&&o.jsx(Vv,{seg:l,getCard:n},`combat-${l}-${a}`),a==="special"&&o.jsx(Rv,{seg:l,turnOrder:r,getCard:n},`special-${l}`),o.jsx("style",{children:si})]}),s&&o.jsxs(o.Fragment,{children:[o.jsx(Ov,{pendingDamage:s,getCard:n}),o.jsx("style",{children:si})]}),i&&o.jsxs(o.Fragment,{children:[o.jsx(Lv,{pendingArmorChoice:i,getCard:n}),o.jsx("style",{children:si})]})]})}function zv({seg:e,turnOrder:n,getCard:t}){const{state:a,dispatch:r,aiConfig:s,isOnline:i,localPlayerId:l,currentTurnPlayerId:d}=je(),{map:u,pendingDamage:p,playerIds:f}=a,[g,x]=k.useState(new Set),[m,h]=k.useState(null),[_,b]=k.useState([]),[v,y]=k.useState(null),w=k.useRef(!1),T=new Map;for(const D of f){const J=a.players[D],R=Q.find(V=>V.id===J.unitId);T.set(D,mh(J,e,t,R.movement))}k.useEffect(()=>{if(!(m!==null||v!==null)&&!w.current&&!p){if(i&&l){if(d!==l)return;if(T.get(l))h(l);else{const D=a.players[l],J=e===1?D.plotSeg1:D.plotSeg2;if(!J)r({type:"ADD_LOG",message:`  ${Ne(l)} 未配置行动卡，跳过`});else{const R=t(J.defId);R&&R.actionType==="movement"&&r({type:"ADD_LOG",message:`  ${Ne(l)}【${R.nameCn}】无法发动移动`})}w.current=!0,r({type:"ADVANCE_TIMING"})}return}for(const D of n)if(!g.has(D))if(T.get(D)){h(D);return}else{const J=a.players[D],R=e===1?J.plotSeg1:J.plotSeg2;if(!R)r({type:"ADD_LOG",message:`  ${Ne(D)} 未配置行动卡，跳过`});else{const V=t(R.defId);V&&V.actionType==="movement"&&r({type:"ADD_LOG",message:`  ${Ne(D)}【${V.nameCn}】无法发动移动`})}x(V=>new Set([...V,D]));return}w.current=!0,r({type:"ADVANCE_TIMING"})}},[g,m,v,p,d]),k.useEffect(()=>{if(!m){b([]);return}const D=a.players[m],J=f.filter(L=>L!==m).map(L=>a.players[L].position),R=Q.find(L=>L.id===D.unitId),V=jn(D,t,"movement"),U=ei(D,e,t,V)||R.movement,O=bs(u,D.position,U,J,V,D.facing);b(O.map(L=>L.pos))},[m,a.players,u,e]),k.useEffect(()=>{if(!m||i&&l&&m!==l||!$e(s,m))return;const J=zr(s,m),R=setTimeout(()=>{const V=ix(a,m,e,t,J);V&&r({type:"MOVE_UNIT",playerId:m,to:V.pos,path:V.path,finalFacing:V.finalFacing}),x(U=>new Set([...U,m])),h(null),b([])},800);return()=>clearTimeout(R)},[m]);function $(D,J){if(!m||$e(s,m)||!_.some(V=>re(V,D)))return;let R=J;if(!R){const V=a.players[m],U=f.filter(X=>X!==m).map(X=>a.players[X].position),O=Q.find(X=>X.id===V.unitId),L=jn(V,t,"movement"),Y=ei(V,e,t,L)||O.movement;R=sc(u,V.position,V.facing,D,Y,U,L)}r({type:"MOVE_UNIT",playerId:m,to:D,path:R==null?void 0:R.path,finalFacing:R==null?void 0:R.finalFacing}),b([]),y(m),h(null)}function j(){v&&(x(D=>new Set([...D,v])),y(null),i&&(w.current=!0,r({type:"ADVANCE_TIMING"})))}if(i&&l&&d&&d!==l&&!m&&!v)return o.jsx("div",{className:"action-hud__panel action-hud__panel--waiting",children:o.jsxs("span",{className:"action-hud__hint",children:["等待 ",Ne(d)," 行动中…"]})});const C=n.every(D=>!T.get(D)||g.has(D));if(!i&&C&&m===null&&v===null||i&&w.current&&m===null&&v===null)return null;if(v!==null){const D=a.players[v],J=Ne(v),R=ya(D.facing);return o.jsxs("div",{className:"action-hud__panel",children:[o.jsx("span",{className:"action-hud__mover",children:J}),o.jsx("span",{className:"action-hud__hint",children:"移动完毕，可选择调整机头方向（最多90°）"}),o.jsx($v,{playerId:v,disabledFacing:R}),o.jsx("button",{className:"action-hud__skip-btn",onClick:j,children:"确认方向"})]})}const A=m?$e(s,m):!1,S=m?Ne(m):"";if(A)return o.jsxs("div",{className:"action-hud__panel action-hud__panel--ai-thinking",children:[o.jsxs("span",{className:"action-hud__mover",children:[S," (AI)"]}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__hint",children:"思考中…"})]});const z=m?a.players[m]:null,M=m&&z?jn(z,t,"movement"):null,E=z?Q.find(D=>D.id===z.unitId):null,K=m&&z&&E?ei(z,e,t,M??void 0)||E.movement:0,H=m?f.filter(D=>D!==m).map(D=>a.players[D].position):[];return o.jsxs(o.Fragment,{children:[m&&z&&o.jsx(Av,{reachable:_,map:u,from:z.position,fromFacing:z.facing,movementValue:K,blockedPositions:H,aux:M??void 0,onCellClick:$}),o.jsx("div",{className:"action-hud__panel",children:m?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"action-hud__mover",children:S}),o.jsx("span",{className:"action-hud__hint",children:"选择目标格（步数须用尽；点击选择路径）"}),(M==null?void 0:M.vernier)&&o.jsx("span",{className:"action-hud__aux-badge",title:"地形移动消耗-1，高低差消耗-1",children:"⚙ 喷射推进器"}),(M==null?void 0:M.wheel)&&o.jsx("span",{className:"action-hud__aux-badge",title:"移动力+2",children:"⚙ 滑轮"})]}):o.jsx("span",{className:"action-hud__hint",children:"计算移动路径中…"})})]})}function $v({playerId:e,disabledFacing:n}){const{state:t,dispatch:a}=je(),s=t.players[e].facing,i=[{facing:"N",label:"↑N"},{facing:"E",label:"E→"},{facing:"S",label:"↓S"},{facing:"W",label:"←W"}];return o.jsxs("div",{className:"facing-compass",title:"调整机头朝向（不可掉头）",children:[o.jsx("span",{className:"facing-compass__label",children:"机头"}),i.map(({facing:l,label:d})=>{const u=l===n;return o.jsx("button",{className:["facing-compass__btn",s===l?"facing-compass__btn--active":"",u?"facing-compass__btn--disabled":""].join(" ").trim(),onClick:()=>{u||a({type:"ADJUST_FACING",playerId:e,facing:l})},disabled:u,title:u?"无法180°掉头":`朝${l}方`,children:d},l)})]})}function Av({reachable:e,map:n,from:t,fromFacing:a,movementValue:r,blockedPositions:s,aux:i,onCellClick:l}){const d=Ss(),u=k.useRef({allPaths:[],selectedIdx:0,hoveredPos:null}),[p,f]=k.useState(0),g=()=>f(m=>m+1);k.useEffect(()=>{document.querySelectorAll(".board-cell--path-ghost").forEach(w=>w.classList.remove("board-cell--path-ghost"));const{allPaths:m,selectedIdx:h,hoveredPos:_}=u.current;if(!_||m.length===0)return;const b=m[h];if(!b)return;const v=b.path.slice(0,-1);for(const w of v){const T=document.querySelector(`.board-cell[data-row="${w.row}"][data-col="${w.col}"]`);T==null||T.classList.add("board-cell--path-ghost")}const y=document.querySelector(`.board-cell[data-row="${_.row}"][data-col="${_.col}"]`);return y&&(y.dataset.pathLabel=m.length>1?`${h+1}/${m.length}`:""),()=>{document.querySelectorAll(".board-cell--path-ghost").forEach(w=>w.classList.remove("board-cell--path-ghost")),y&&delete y.dataset.pathLabel}},[p]),k.useEffect(()=>{const m=[];document.querySelectorAll(".board-cell--reachable").forEach(h=>{h.classList.remove("board-cell--reachable")});for(const h of e){const _=document.querySelector(`.board-cell[data-row="${h.row}"][data-col="${h.col}"]`);if(!_)continue;_.classList.add("board-cell--reachable");const b=()=>{const{allPaths:M,selectedIdx:E}=u.current;l(h,M[E]??null)},v=()=>{const M=qs(n,t,a,h,r,s,i);u.current={allPaths:M,selectedIdx:0,hoveredPos:h},g()},y=()=>{u.current={allPaths:[],selectedIdx:0,hoveredPos:null},g()},w=M=>{const{allPaths:E,selectedIdx:K}=u.current;if(E.length<=1)return;M.preventDefault();const H=M.deltaY>0?1:-1;u.current={...u.current,selectedIdx:(K+H+E.length)%E.length},g()};let T=null,$=0,j=0,C=!1;const A=M=>{if($=M.touches[0].clientX,j=M.touches[0].clientY,C=!1,d){const{hoveredPos:E}=u.current;if(E&&E.row===h.row&&E.col===h.col)return;const K=qs(n,t,a,h,r,s,i);u.current={allPaths:K,selectedIdx:0,hoveredPos:h},g(),M.preventDefault();return}T=setTimeout(()=>{C=!0;const E=qs(n,t,a,h,r,s,i);u.current={allPaths:E,selectedIdx:0,hoveredPos:h},g()},400)},S=()=>{T&&(clearTimeout(T),T=null),C&&!d&&(u.current={allPaths:[],selectedIdx:0,hoveredPos:null},g()),C=!1},z=M=>{if(d||!C)return;const E=M.touches[0].clientX-$,K=M.touches[0].clientY-j;if(Math.abs(E)>40||Math.abs(K)>40){const{allPaths:H,selectedIdx:D}=u.current;if(H.length<=1)return;const J=Math.abs(E)>Math.abs(K)?E>0?1:-1:K>0?1:-1;u.current={...u.current,selectedIdx:(D+J+H.length)%H.length},g(),$=M.touches[0].clientX,j=M.touches[0].clientY}};_.addEventListener("click",b),_.addEventListener("mouseenter",v),_.addEventListener("mouseleave",y),_.addEventListener("wheel",w,{passive:!1}),_.addEventListener("touchstart",A,{passive:!0}),_.addEventListener("touchend",S),_.addEventListener("touchcancel",S),_.addEventListener("touchmove",z,{passive:!0}),m.push(()=>{T&&clearTimeout(T),_.removeEventListener("click",b),_.removeEventListener("mouseenter",v),_.removeEventListener("mouseleave",y),_.removeEventListener("wheel",w),_.removeEventListener("touchstart",A),_.removeEventListener("touchend",S),_.removeEventListener("touchcancel",S),_.removeEventListener("touchmove",z)})}return()=>{document.querySelectorAll(".board-cell--reachable").forEach(h=>h.classList.remove("board-cell--reachable")),document.querySelectorAll(".board-cell--path-ghost").forEach(h=>h.classList.remove("board-cell--path-ghost")),document.querySelectorAll(".board-cell[data-path-label]").forEach(h=>delete h.dataset.pathLabel),u.current={allPaths:[],selectedIdx:0,hoveredPos:null},m.forEach(h=>h())}},[e,n,t,a,r,s,i,l]);const x=k.useCallback(()=>{const{allPaths:m,selectedIdx:h}=u.current;m.length<=1||(u.current={...u.current,selectedIdx:(h+1)%m.length},g())},[]);if(d){const{allPaths:m,hoveredPos:h}=u.current;if(h&&m.length>1)return o.jsxs("button",{className:"move-cycle-btn",onClick:x,style:{position:"fixed",bottom:80,left:"50%",transform:"translateX(-50%)",zIndex:600,padding:"10px 24px",background:"rgba(22, 33, 62, 0.95)",border:"1px solid #ffea00",borderRadius:8,color:"#ffea00",fontFamily:"var(--font-mono)",fontSize:"0.85rem",fontWeight:"bold",cursor:"pointer",minHeight:44,backdropFilter:"blur(4px)"},children:["切换路径 (",u.current.selectedIdx+1,"/",m.length,")"]})}return null}function $f({reachable:e,onCellClick:n}){return k.useEffect(()=>(document.querySelectorAll(".board-cell").forEach(a=>{a.classList.remove("board-cell--reachable"),a.onclick=null}),e.forEach(a=>{const r=document.querySelector(`.board-cell[data-row="${a.row}"][data-col="${a.col}"]`);r&&(r.classList.add("board-cell--reachable"),r.onclick=()=>n(a))}),()=>{document.querySelectorAll(".board-cell--reachable").forEach(a=>{a.classList.remove("board-cell--reachable"),a.onclick=null})}),[e,n]),null}function Vv({seg:e,getCard:n}){const{state:t,dispatch:a,aiConfig:r,isOnline:s,localPlayerId:i,currentTurnPlayerId:l}=je(),{map:d,turnOrder:u,currentTiming:p,pendingDamage:f}=t,[g,x]=k.useState(new Set),[m,h]=k.useState(null),[_,b]=k.useState(null),v=k.useRef(!1),[y,w]=k.useState(null);k.useEffect(()=>{m&&w(oi(t,m))},[m]);const[T,$]=k.useState(!1),[j,C]=k.useState([]),[A,S]=k.useState(!1),z=p==="ranged"?"ranged":"melee",M=z==="ranged"?"射击时机":"近战时机";if(k.useEffect(()=>{if(m===null&&!v.current&&!f){if(s&&i){if(l!==i)return;const te=t.players[i];if(Rn(te,e,z,n))h(i),$(!1),S(!1),C([]);else{const ee=e===1?te.plotSeg1:te.plotSeg2;if(ee){const Pe=n(ee.defId);Pe&&(z==="ranged"&&Pe.actionType==="ranged"||z==="melee"&&(Pe.actionType==="melee"||Pe.actionType==="charge"))&&a({type:"ADD_LOG",message:`  ${Ne(i)}【${Pe.nameCn}】条件不满足，无法发动`})}v.current=!0,a({type:"ADVANCE_TIMING"})}return}for(const te of u){if(g.has(te))continue;const Ie=t.players[te];if(!Rn(Ie,e,z,n)){const Pe=e===1?Ie.plotSeg1:Ie.plotSeg2;if(Pe){const He=n(Pe.defId);He&&(z==="ranged"&&He.actionType==="ranged"||z==="melee"&&(He.actionType==="melee"||He.actionType==="charge"))&&a({type:"ADD_LOG",message:`  ${Ne(te)}【${He.nameCn}】条件不满足，无法发动`})}x(He=>new Set([...He,te]));return}h(te),$(!1),S(!1),C([]);return}v.current=!0,a({type:"ADVANCE_TIMING"})}},[g,m,f,n,l]),k.useEffect(()=>{if(!m||f||s&&i&&m!==i||!$e(r,m))return;const Ie=zr(r,m),ee=oi(t,m),Pe=setTimeout(()=>{if(lx(t,m,e,z,n,Ie)){const Wn=t.players[m],Rt=Rn(Wn,e,z,n),Yf=(Rt==null?void 0:Rt.actionType)==="charge"?"RESOLVE_CHARGE":z==="ranged"?"RESOLVE_RANGED":"RESOLVE_MELEE";a({type:Yf,attackerId:m,targetId:ee})}else{const Wn=t.players[m],Rt=Rn(Wn,e,z,n);a({type:"ADD_LOG",message:`  ${Ne(m)} 放弃发动${Rt?`【${Rt.nameCn}】`:M}`})}x(Wn=>new Set([...Wn,m])),h(null),$(!1),S(!1),C([])},800);return()=>clearTimeout(Pe)},[m,f]),s&&i&&l&&l!==i&&!m)return o.jsx("div",{className:"action-hud__panel action-hud__panel--waiting",children:o.jsxs("span",{className:"action-hud__hint",children:["等待 ",Ne(l)," 行动中…"]})});if(!m)return null;const E=t.players[m],K=kf(t,m),H=y??oi(t,m),D=t.players[H],J=p==="melee"?jn(E,n,"melee"):{vernier:!1,moveSensor:!1},R=Rn(E,e,z,n),V=(R==null?void 0:R.actionType)==="charge",U=$e(r,m),O=K.filter(te=>{const Ie=t.players[te];if(V&&z==="melee"){const ee=Q.find(He=>He.id===E.unitId),Pe=Q.find(He=>He.id===Ie.unitId);return yr(E,Ie,e,d,ee,Pe,n).canAttack}return Go(E,Ie,e,z,d,n).canAttack});let L;if(V&&z==="melee"){const te=Q.find(ee=>ee.id===E.unitId),Ie=Q.find(ee=>ee.id===D.unitId);L=yr(E,D,e,d,te,Ie,n)}else L=Go(E,D,e,z,d,n);const Y=Q.find(te=>te.id===E.unitId),X=Q.find(te=>te.id===D.unitId);function oe(){if(!L.canAttack||!m)return;a({type:V?"RESOLVE_CHARGE":z==="ranged"?"RESOLVE_RANGED":"RESOLVE_MELEE",attackerId:m,targetId:H}),b(`${Y.nameCn} → ${X.nameCn}：造成 ${L.damage} 伤害`),x(Ie=>new Set([...Ie,m])),h(null),$(!1),S(!1),C([]),s&&(v.current=!0,a({type:"ADVANCE_TIMING"}))}function le(){if(!m)return;const te=Rn(t.players[m],e,z,n);a({type:"ADD_LOG",message:`  ${Ne(m)} 放弃发动${te?`【${te.nameCn}】`:M}`}),b(null),x(Ie=>new Set([...Ie,m])),h(null),$(!1),S(!1),C([]),s&&(v.current=!0,a({type:"ADVANCE_TIMING"}))}function de(){if(!m||T)return;const te=Nf(d,E.position,[D.position]);C(te),S(!0)}function ye(te){!m||!A||(a({type:"MELEE_SENSOR_MOVE",playerId:m,to:te}),$(!0),S(!1),C([]))}function xn(){S(!1),C([])}const $n=Ne(m),Na=L.card?V?`【${L.card.nameCn}】突击值 ${Y.assault} vs 防御${X.assaultDef}`:`【${L.card.nameCn}】射程 ${L.card.rangeMin??"—"}–${L.card.rangeMax??"—"}`:null,Pt=z==="melee"&&J.moveSensor&&!T;return U?o.jsxs("div",{className:"action-hud__panel action-hud__panel--ai-thinking",children:[o.jsxs("span",{className:"action-hud__mover",children:[Ne(m)," (AI)"]}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__hint",children:"思考中…"})]}):o.jsxs(o.Fragment,{children:[A&&o.jsx($f,{reachable:j,onCellClick:ye}),!A&&o.jsx(Pv,{validTargets:O.map(te=>({playerId:te,pos:t.players[te].position})),selectedTargetId:H,onSelectTarget:w}),o.jsxs("div",{className:"action-hud__panel action-hud__panel--combat",children:[o.jsx("span",{className:"action-hud__mover",children:$n}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__timing-label",children:M}),J.moveSensor&&o.jsxs("span",{className:`action-hud__aux-badge ${T?"action-hud__aux-badge--used":""}`,title:"近战前可移动1格",children:["⚙ 移动传感器",T?"（已使用）":""]}),J.vernier&&o.jsx("span",{className:"action-hud__aux-badge",title:"地形消耗-1，高低差-1",children:"⚙ 喷射推进器"}),L.card?o.jsxs("span",{className:"action-hud__card-info",children:[Na,L.card.damage!==void 0&&o.jsxs("span",{className:"action-hud__dmg",children:[" 伤害 ",L.card.damage]})]}):o.jsxs("span",{className:"action-hud__hint",children:["无",z==="ranged"?"射击":"近战","牌"]}),o.jsx("span",{className:`action-hud__validity ${L.canAttack?"action-hud__validity--ok":"action-hud__validity--no"}`,children:L.canAttack?V?`距离 ${L.dist} ✓ → 造成 ${L.damage} 伤 / 自机反伤 ${L.counterDamage}`:`距离 ${L.dist} ✓ → ${L.damage} 伤`:L.card?L.reason:""}),_&&o.jsx("span",{className:"action-hud__result",children:_}),A?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"action-hud__hint",children:"点击高亮格移动（传感器），或"}),o.jsx("button",{className:"action-hud__skip-btn",onClick:xn,children:"取消移动"})]}):o.jsxs(o.Fragment,{children:[Pt&&o.jsx("button",{className:"action-hud__sensor-btn",onClick:de,title:"移动传感器：攻击前可移动1格",children:"传感器移动"}),O.length>1&&o.jsxs("span",{className:"action-hud__target-hint",children:["目标: ",Ne(H)," (",X.nameCn,") — 点击地图切换目标 (",O.length,"个可选)"]}),o.jsx("button",{className:"action-hud__attack-btn",onClick:oe,disabled:!L.canAttack,title:L.canAttack?`攻击 ${X.nameCn}`:L.reason,children:"执行攻击"}),o.jsxs("button",{className:"action-hud__skip-btn",onClick:le,children:["跳过",z==="ranged"?"射击":"近战"]})]})]})]})}function Pv({validTargets:e,selectedTargetId:n,onSelectTarget:t}){return k.useEffect(()=>{document.querySelectorAll(".board-cell--target, .board-cell--target-alt").forEach(a=>{a.classList.remove("board-cell--target","board-cell--target-alt"),a.onclick=null});for(const{playerId:a,pos:r}of e){const s=document.querySelector(`.board-cell[data-row="${r.row}"][data-col="${r.col}"]`);s&&(a===n?s.classList.add("board-cell--target"):(s.classList.add("board-cell--target-alt"),s.onclick=i=>{i.stopPropagation(),t(a)}))}return()=>{document.querySelectorAll(".board-cell--target, .board-cell--target-alt").forEach(a=>{a.classList.remove("board-cell--target","board-cell--target-alt"),a.onclick=null})}},[e,n,t]),null}function Rv({seg:e,turnOrder:n,getCard:t}){const{state:a,dispatch:r,aiConfig:s,isOnline:i,localPlayerId:l,currentTurnPlayerId:d}=je(),{map:u,pendingDamage:p}=a,[f,g]=k.useState(new Set),[x,m]=k.useState(null),[h,_]=k.useState([]),b=k.useRef(!1);if(k.useEffect(()=>{if(x===null&&!b.current&&!p){if(i&&l){if(d!==l)return;const A=a.players[l],S=e===1?A.plotSeg1:A.plotSeg2,z=S?t(S.defId):null;!z||z.actionType!=="mine"&&z.actionType!=="special"?(b.current=!0,r({type:"ADVANCE_TIMING"})):m(l);return}for(const A of n){if(f.has(A))continue;const S=a.players[A],z=e===1?S.plotSeg1:S.plotSeg2,M=z?t(z.defId):null;if(!M||M.actionType!=="mine"&&M.actionType!=="special"){g(E=>new Set([...E,A]));return}m(A);return}b.current=!0,r({type:"ADVANCE_TIMING"})}},[f,x,p,t,d]),k.useEffect(()=>{if(!x){_([]);return}const A=a.players[x],S=e===1?A.plotSeg1:A.plotSeg2,z=S?t(S.defId):null;if(z&&z.actionType==="mine"){const M=Cf(u,A.position,1,[]);_(M)}else _([])},[x,u,e,a.players,t]),k.useEffect(()=>{if(!x||p||i&&l&&x!==l||!$e(s,x))return;const S=zr(s,x),z=setTimeout(()=>{const M=dx(a,x,e,t,S);if(M){const E=a.players[x],K=e===1?E.plotSeg1:E.plotSeg2,H=K?t(K.defId):null;r({type:"PLACE_MINE",playerId:x,to:M,damage:(H==null?void 0:H.damage)||3})}g(E=>new Set([...E,x])),m(null)},800);return()=>clearTimeout(z)},[x,p]),i&&l&&d&&d!==l&&!x)return o.jsx("div",{className:"action-hud__panel action-hud__panel--waiting",children:o.jsxs("span",{className:"action-hud__hint",children:["等待 ",Ne(d)," 行动中…"]})});if(!x)return null;const v=a.players[x],y=e===1?v.plotSeg1:v.plotSeg2,w=y?t(y.defId):null,T=Ne(x),$=$e(s,x);function j(){g(A=>new Set([...A,x])),m(null),i&&(b.current=!0,r({type:"ADVANCE_TIMING"}))}function C(A){!x||!w||w.actionType!=="mine"||h.some(S=>re(S,A))&&(r({type:"PLACE_MINE",playerId:x,to:A,damage:w.damage||3}),g(S=>new Set([...S,x])),m(null),i&&(b.current=!0,r({type:"ADVANCE_TIMING"})))}return $?o.jsxs("div",{className:"action-hud__panel action-hud__panel--ai-thinking",children:[o.jsxs("span",{className:"action-hud__mover",children:[T," (AI)"]}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__hint",children:"思考中…"})]}):o.jsxs(o.Fragment,{children:[h.length>0&&o.jsx($f,{reachable:h,onCellClick:C}),o.jsxs("div",{className:"action-hud__panel action-hud__panel--special",children:[o.jsx("span",{className:"action-hud__mover",children:T}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__timing-label",children:"特殊时机"}),o.jsx("span",{className:"action-hud__card-info",children:w?`【${w.nameCn}】效果`:"（无）"}),(w==null?void 0:w.actionType)==="mine"?o.jsx("span",{className:"action-hud__hint",children:"请点击高亮格部署机雷，或"}):o.jsx("span",{className:"action-hud__hint",children:"暂无此牌效果支持，请"}),o.jsx("button",{className:"action-hud__skip-btn",onClick:j,children:"跳过"})]})]})}function Lv({pendingArmorChoice:e,getCard:n}){const{dispatch:t,aiConfig:a,isOnline:r,localPlayerId:s}=je(),{zoom:i,getZoomHandlers:l}=At(),{targetId:d,damage:u,source:p,handCards:f,plotCard:g}=e,[x,m]=k.useState(null),[h,_]=k.useState(new Set),b=r&&s&&d!==s,v=!b&&$e(a,d);k.useEffect(()=>{v?m(d):r||m(null)},[d,v,r]),k.useEffect(()=>{if(!v||b)return;const S=[];let z=u;g&&z>0&&(S.push(g.instanceId),z-=g.armorValue);for(const E of f){if(z<=0)break;S.push(E.instanceId),z-=E.armorValue}const M=setTimeout(()=>{t({type:"CONFIRM_ARMOR_CHOICE",playerId:d,selectedInstanceIds:S})},500);return()=>clearTimeout(M)},[d,v,b]);function y(S){_(z=>{const M=new Set(z);return M.has(S)?M.delete(S):M.add(S),M})}function w(){t({type:"CONFIRM_ARMOR_CHOICE",playerId:d,selectedInstanceIds:[...h]})}function T(){t({type:"CONFIRM_ARMOR_CHOICE",playerId:d,selectedInstanceIds:[]})}const $=[...h].reduce((S,z)=>{if((g==null?void 0:g.instanceId)===z)return S+g.armorValue;const M=f.find(E=>E.instanceId===z);return S+((M==null?void 0:M.armorValue)??0)},0),j=Math.max(0,u-$),C=p==="ranged"?"射击":p==="charge"?"突击":"近战",A=Ne(d);return b?o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"damage-pass-overlay",children:o.jsxs("div",{className:"damage-pass-card",children:[o.jsx("p",{className:"damage-pass__eyebrow",children:"— 装甲选择 —"}),o.jsx("h2",{className:"damage-pass__title",children:"等待对手选择"}),o.jsx("div",{className:"damage-pass__player",children:A}),o.jsxs("p",{className:"damage-pass__context",children:[A," 正在决定是否激活装甲牌…"]}),o.jsx("div",{className:"damage-pass__spinner",children:"⏳"})]})}),o.jsx("style",{children:es})]}):!r&&!v&&d!==x?o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"damage-pass-overlay",children:o.jsxs("div",{className:"damage-pass-card",children:[o.jsx("p",{className:"damage-pass__eyebrow",children:"— 装甲选择 —"}),o.jsx("h2",{className:"damage-pass__title",children:"请将设备交给"}),o.jsx("div",{className:"damage-pass__player",children:A}),o.jsxs("p",{className:"damage-pass__context",children:["受到 ",u," 点",C,"伤害，可激活装甲牌减伤"]}),o.jsxs("button",{className:"damage-pass__btn",onClick:()=>m(d),children:[A," 已准备"]})]})}),o.jsx("style",{children:es})]}):o.jsxs("div",{className:"action-hud",children:[o.jsxs("div",{className:"action-hud__panel action-hud__panel--damage",children:[o.jsxs("div",{className:"damage-panel__header",children:[o.jsx("span",{className:"damage-panel__title",children:"🛡 装甲激活"}),o.jsx("span",{className:"damage-panel__player",children:A}),o.jsxs("span",{className:"damage-panel__remaining",children:["受到 ",o.jsx("strong",{children:u})," 点",C,"伤害",$>0&&o.jsxs(o.Fragment,{children:[" → 减免后 ",o.jsx("strong",{className:"armor-reduced",children:j})," 点"]})]})]}),o.jsx("div",{className:"damage-panel__hint",children:p==="ranged"?"手牌中的装甲牌可防御射击伤害；准备区中的装甲牌可防御任意伤害。选择要激活的装甲牌，或跳过。":"准备区中的装甲牌可防御任意伤害（含突击/近战）。选择要激活的装甲牌，或跳过。"}),o.jsxs("div",{className:"damage-panel__zones",children:[f.length>0&&o.jsxs("div",{className:"damage-zone",children:[o.jsx("span",{className:"damage-zone__label",children:"手牌装甲"}),o.jsx("div",{className:"damage-zone__cards",children:f.map(S=>{const z=n(S.defId),M=h.has(S.instanceId),E=l((z==null?void 0:z.frontImageId)??"");return o.jsxs("button",{className:`damage-card-btn ${M?"damage-card-btn--selected":""}`,onClick:()=>y(S.instanceId),...E,children:[o.jsx("span",{className:"damage-card-btn__name",children:(z==null?void 0:z.nameCn)??S.defId}),o.jsxs("span",{className:"armor-value-badge",children:["-",S.armorValue]})]},S.instanceId)})})]}),g&&o.jsxs("div",{className:"damage-zone",children:[o.jsxs("span",{className:"damage-zone__label",children:["准备区装甲",o.jsxs("span",{className:"damage-zone__sub",children:["主要阶段",g.seg]})]}),o.jsx("div",{className:"damage-zone__cards",children:(()=>{const S=n(g.defId),z=h.has(g.instanceId),M=l((S==null?void 0:S.frontImageId)??"");return o.jsxs("button",{className:`damage-card-btn ${z?"damage-card-btn--selected":""}`,onClick:()=>y(g.instanceId),...M,children:[o.jsx("span",{className:"damage-card-btn__name",children:(S==null?void 0:S.nameCn)??g.defId}),o.jsxs("span",{className:"armor-value-badge",children:["-",g.armorValue]})]},g.instanceId)})()})]})]}),o.jsxs("div",{className:"damage-panel__actions",children:[o.jsxs("button",{className:"action-hud__attack-btn",onClick:w,disabled:h.size===0,children:["激活选中装甲 (-",$," 点)"]}),o.jsx("button",{className:"action-hud__skip-btn",onClick:T,children:"不使用装甲"})]})]}),o.jsx(Vt,{zoom:i})]})}function Ov({pendingDamage:e,getCard:n}){const{state:t,dispatch:a,aiConfig:r,isOnline:s,localPlayerId:i}=je(),{targetId:l,remaining:d,selectedInstanceIds:u}=e,{zoom:p,getZoomHandlers:f}=At(),[g,x]=k.useState(null),m=t.players[l];Dt(m);const h=u.length===0,_=!!e.attackerId&&h&&!e.attackerDesignatedCardId,b=_?e.attackerId:l,v=Ne(b),y=s&&i&&b!==i,w=!y&&$e(r,b),T=zr(r,b),$=!s&&!w&&b!==g;k.useEffect(()=>{w?x(b):s||x(null)},[b,w,s]),k.useEffect(()=>{if(!w||y||d<=0)return;const D=t.players[l],J=Er(D),R=t.playerIds.filter(O=>O!==l&&t.teams[O]!==t.teams[l]&&!t.players[O].isDefeated),V=R.length>0?t.players[R[0]]:D,U=setTimeout(()=>{if(J.length>0){const O=cx(e,D,n,T,_,V);a(O?{type:"SELECT_DAMAGE_CARD",playerId:b,instanceId:O}:{type:"CONFIRM_DAMAGE_SELECTION",playerId:b})}else a({type:"CONFIRM_DAMAGE_SELECTION",playerId:b})},600);return()=>clearTimeout(U)},[d,b,w,y,t.players]);function j(D){a({type:"SELECT_DAMAGE_CARD",playerId:b,instanceId:D})}function C(){a({type:"CONFIRM_DAMAGE_SELECTION",playerId:b})}if(y)return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"damage-pass-overlay",children:o.jsxs("div",{className:"damage-pass-card",children:[o.jsx("p",{className:"damage-pass__eyebrow",children:"— 伤害分配 —"}),o.jsx("h2",{className:"damage-pass__title",children:"等待对手选择"}),o.jsx("div",{className:"damage-pass__player",children:v}),o.jsx("p",{className:"damage-pass__context",children:_?"【瞄准加成】攻方正在指定要摧毁的卡牌…":`${v} 正在选择要摧毁的 ${d} 张卡牌…`}),o.jsx("div",{className:"damage-pass__spinner",children:"⏳"})]})}),o.jsx("style",{children:es})]});if($)return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"damage-pass-overlay",children:o.jsxs("div",{className:"damage-pass-card",children:[o.jsx("p",{className:"damage-pass__eyebrow",children:"— 伤害分配 —"}),o.jsx("h2",{className:"damage-pass__title",children:"请将设备交给"}),o.jsx("div",{className:"damage-pass__player",children:v}),o.jsx("p",{className:"damage-pass__context",children:_?"【瞄准加成】攻方有权指定第一张要摧毁的卡牌":`防方选择要摧毁的 ${d} 张卡牌（可自动分配）`}),o.jsxs("button",{className:"damage-pass__btn",onClick:()=>x(b),children:[v," 已准备"]})]})}),o.jsx("style",{children:es})]});const A=m.hand.filter(D=>!D.destroyed),S=m.plotSeg1&&!m.plotSeg1.destroyed?[m.plotSeg1]:[],z=m.plotSeg2&&!m.plotSeg2.destroyed?[m.plotSeg2]:[],M=m.auxiliary.filter(D=>!D.destroyed),E=m.deck.filter(D=>!D.destroyed),K=[];A.length>0&&K.push({label:"手牌",cards:A}),S.length>0&&K.push({label:"布局格",sublabel:"主要阶段1",cards:S}),z.length>0&&K.push({label:"布局格",sublabel:"主要阶段2",cards:z}),M.length>0&&K.push({label:"辅助区",cards:M});const H=E[0]??null;return o.jsxs("div",{className:"action-hud",children:[o.jsxs("div",{className:"action-hud__panel action-hud__panel--damage",children:[o.jsxs("div",{className:"damage-panel__header",children:[o.jsx("span",{className:"damage-panel__title",children:"⚔️ 伤害分配"}),o.jsx("span",{className:"damage-panel__player",children:_?`${v} (瞄准指定)`:v}),o.jsxs("span",{className:"damage-panel__remaining",children:["还需摧毁 ",o.jsx("strong",{children:d})," 张卡牌"]})]}),(e.destroyedBombCount??0)>0&&o.jsxs("div",{className:"damage-panel__bomb-alert",children:["💣 已选中 ",e.destroyedBombCount," 张炸弹卡，选完后将进行誘爆检查"]}),o.jsx("div",{className:"damage-panel__hint",children:_?`【瞄准加成】攻方有权指定第一张要摧毁的卡牌！可从手牌、辅助区、卡组、布局格中选择。请 ${v} 选择：`:e.source==="ranged"?"射击伤害：须先从手牌 / 布局格 / 辅助区选择卡牌破坏，不足部分自动从牌组顶破坏。":"牌组与弃牌区已耗尽，近战伤害切换为自选模式。请从手牌 / 布局格 / 辅助区选择。"}),o.jsxs("div",{className:"damage-panel__zones",children:[K.map((D,J)=>o.jsxs("div",{className:"damage-zone",children:[o.jsxs("span",{className:"damage-zone__label",children:[D.label,D.sublabel&&o.jsxs("span",{className:"damage-zone__sub",children:["（",D.sublabel,"）"]})]}),o.jsx("div",{className:"damage-zone__cards",children:D.cards.map(R=>{const V=n(R.defId),U=(V==null?void 0:V.nameCn)??R.defId,O=u.includes(R.instanceId),L=V!=null&&V.frontImageId?`/assets/${V.frontImageId}`:null;return o.jsxs("button",{className:`damage-card-btn ${O?"damage-card-btn--selected":""} ${V!=null&&V.hasBombIcon?"damage-card-btn--bomb":""}`,onClick:()=>j(R.instanceId),disabled:O,title:`${U} (${(V==null?void 0:V.actionType)??"?"})${V!=null&&V.hasBombIcon?" ⚠️ 含诱爆":""}`,...L?f(L):{},children:[o.jsx("span",{className:"damage-card-btn__name",children:U}),(V==null?void 0:V.isKaiVariant)&&o.jsx("span",{className:"damage-card-btn__det",title:"改型",children:"◆"}),(V==null?void 0:V.hasBombIcon)&&o.jsx("span",{className:"damage-card-btn__det damage-card-btn__bomb-icon",title:"诱爆卡",children:"💣"})]},R.instanceId)})})]},J)),H&&(e.source!=="ranged"||_)&&o.jsxs("div",{className:"damage-zone",children:[o.jsxs("span",{className:"damage-zone__label",children:["卡组",o.jsxs("span",{className:"damage-zone__sub",children:["（共 ",E.length," 张，正面朝下）"]})]}),o.jsx("div",{className:"damage-zone__cards",children:o.jsxs("button",{className:"damage-card-btn damage-card-btn--deck",onClick:()=>j(H.instanceId),title:"从卡组顶部翻开并摧毁 1 张（诱爆正常触发）",children:[o.jsx("span",{className:"damage-card-btn__deck-back",children:"🂠"}),o.jsx("span",{className:"damage-card-btn__name",children:"顶部 × 1"})]})})]}),H&&e.source==="ranged"&&!_&&o.jsxs("div",{className:"damage-zone",children:[o.jsxs("span",{className:"damage-zone__label",children:["卡组",o.jsxs("span",{className:"damage-zone__sub",children:["（共 ",E.length," 张）"]})]}),o.jsx("div",{className:"damage-zone__cards",children:o.jsxs("div",{className:"damage-card-btn damage-card-btn--deck",style:{opacity:.5,cursor:"default"},title:"射击伤害的牌组部分将在选完表牌后自动从顶部破坏",children:[o.jsx("span",{className:"damage-card-btn__deck-back",children:"🂠"}),o.jsx("span",{className:"damage-card-btn__name",children:"自动破坏"})]})})]})]}),o.jsx("div",{className:"damage-panel__actions",children:o.jsx("button",{className:"action-hud__skip-btn",onClick:C,title:"剩余伤害将从牌库顶部自动摧毁",children:"自动分配剩余伤害"})})]}),o.jsx(Vt,{zoom:p})]})}const si=`
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

/* Armor reduction badge */
.armor-value-badge {
  display: inline-block;
  margin-left: 4px;
  padding: 1px 5px;
  background: rgba(80, 200, 120, 0.2);
  border: 1px solid rgba(80, 200, 120, 0.5);
  border-radius: 3px;
  color: #55ee88;
  font-size: 0.75rem;
  font-family: var(--font-mono);
  font-weight: bold;
}
.armor-reduced {
  color: #55ee88;
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
`,es=`
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
`;function Kv({onBack:e}){return o.jsxs("div",{className:"rules-page",children:[o.jsxs("div",{className:"rules-page__header",children:[o.jsx("button",{className:"rules-back-btn",onClick:e,children:"← 返回"}),o.jsx("h1",{className:"rules-page__title",children:"游戏规则"}),o.jsx("span",{className:"rules-page__subtitle",children:"エムブリオマシン"})]}),o.jsxs("div",{className:"rules-page__body",children:[o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"游戏概述"}),o.jsx("p",{children:"《胚胎机器》是一款双人对战策略游戏。每位玩家控制一台战机（机体），通过秘密布置行动牌来控制机体的移动与战斗。 当对手满足任意一项败北条件时，本方获胜。"})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"准备阶段"}),o.jsxs("ol",{className:"rules-list",children:[o.jsx("li",{children:"双方各选择一台机体，机体自带专属牌组。"}),o.jsx("li",{children:"选择地图，确定双方初始出生区域（地图短边中央3格）。"}),o.jsxs("li",{children:["将各自牌组洗混，游戏开始时双方各抽取等同于本机",o.jsx("b",{children:"回避值"}),"数量的手牌。"]}),o.jsx("li",{children:"双方机体初始机头朝向对手方向（玩家1朝南，玩家2朝北）。"})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"回合流程"}),o.jsxs("div",{className:"rules-flow",children:[o.jsxs("div",{className:"rules-flow__step",children:[o.jsx("span",{className:"rules-flow__num",children:"1"}),o.jsxs("div",{children:[o.jsx("strong",{children:"抽牌阶段"}),o.jsxs("p",{children:["双方各从牌组顶抽取等同于自己机体",o.jsx("b",{children:"回避值"}),"数量的牌。若牌组耗尽，废弃区的牌重新洗混后继续抽取。"]})]})]}),o.jsxs("div",{className:"rules-flow__step",children:[o.jsx("span",{className:"rules-flow__num",children:"2"}),o.jsxs("div",{children:[o.jsx("strong",{children:"布局阶段"}),o.jsxs("p",{children:["双方各自秘密为",o.jsx("b",{children:"主要阶段1"}),"和",o.jsx("b",{children:"主要阶段2"}),"各布置一张行动牌（面朝下）， 然后将设备交给对方进行同样操作。双方确认后，翻开亮牌，进入行动阶段。"]})]})]}),o.jsxs("div",{className:"rules-flow__step",children:[o.jsx("span",{className:"rules-flow__num",children:"3"}),o.jsxs("div",{children:[o.jsx("strong",{children:"行动主要阶段1 & 主要阶段2"}),o.jsxs("p",{children:["每个段落依次经历四个时机：",o.jsx("b",{children:"移动 → 射击 → 近战 → 特殊"}),'。 每个时机内，双方按该时机的优先顺序依次行动（详见"行动顺序"）。']})]})]}),o.jsxs("div",{className:"rules-flow__step",children:[o.jsx("span",{className:"rules-flow__num",children:"4"}),o.jsxs("div",{children:[o.jsx("strong",{children:"清理阶段"}),o.jsx("p",{children:"将已布置的牌（主要阶段1→主要阶段2顺序）和手中剩余的牌全部放入废弃区，准备下一回合。"})]})]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"行动顺序与先制值"}),o.jsxs("p",{children:["每台机体有固定的",o.jsx("b",{children:"先制值（数字越大越快）"}),"。先制值高的玩家在每个时机优先行动，但不同时机的排序逻辑有所不同："]}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"移动时机："}),"先比较该段落的",o.jsx("b",{children:"移动牌面数值"}),"（移动值大的先动）；移动值相同时再比先制值。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"射击/近战/特殊时机："}),"直接按",o.jsx("b",{children:"先制值"}),"排序（高者先行动）。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"平局处理："}),"先制值相同时，玩家1优先行动。"]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"机头朝向与攻击扇区"}),o.jsxs("p",{children:["每台机体具有明确的",o.jsx("b",{children:"机头朝向"}),"（N/S/E/W），初始朝向对手方向。"]}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"攻击限制："}),"射击攻击只能对准",o.jsx("b",{children:"机体正前方（含正侧方延长线）180°扇区"}),"内的目标。目标在机体正后方时无法射击。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"朝向更新："}),"机体移动后，机头自动朝向移动方向。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"手动调整："}),'可在白兵时机前使用"调整朝向"按钮免费更改机头方向，无需消耗任何牌。']}),o.jsxs("li",{children:[o.jsx("b",{children:"近战无扇区限制："}),"白兵/突击攻击不受前方扇区约束，可攻击相邻格的敌方。"]})]}),o.jsx("p",{className:"rules-note",children:"注：扇区边界（正侧方延长线上的格子）视为前方，可以攻击。"})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"行动时机说明"}),o.jsxs("div",{className:"rules-timing-grid",children:[o.jsxs("div",{className:"rules-timing-card",children:[o.jsx("span",{className:"rules-timing-icon",children:"🏃"}),o.jsx("strong",{children:"移动时机"}),o.jsxs("p",{children:["若该段落布局的是",o.jsx("b",{children:"移动牌"}),"，则可在地图上移动。移动力数值决定可移动格数；地形代价和高度差均额外消耗移动力。无移动牌则自动跳过。"]})]}),o.jsxs("div",{className:"rules-timing-card",children:[o.jsx("span",{className:"rules-timing-icon",children:"🎯"}),o.jsx("strong",{children:"射击时机"}),o.jsxs("p",{children:["若该段落布局的是",o.jsx("b",{children:"射击牌"}),"，可对正前方扇区内、射程范围内且视线通畅的敌方发动远程攻击。若",o.jsx("b",{children:"主要阶段1布置了瞄准牌"}),"，则主要阶段2的射击伤害额外+1。"]})]}),o.jsxs("div",{className:"rules-timing-card",children:[o.jsx("span",{className:"rules-timing-icon",children:"⚔️"}),o.jsx("strong",{children:"近战时机"}),o.jsxs("p",{children:["若该段落布局的是",o.jsx("b",{children:"近战牌"}),"，可对",o.jsx("b",{children:"相邻格（切比雪夫距离=1）"}),"的敌方发动近战攻击，无扇区限制。主要阶段1有瞄准牌时，主要阶段2的近战伤害也+1。"]})]}),o.jsxs("div",{className:"rules-timing-card",children:[o.jsx("span",{className:"rules-timing-icon",children:"⚡"}),o.jsx("strong",{children:"特殊时机"}),o.jsxs("p",{children:[o.jsx("b",{children:"突击牌"}),"→冲锋至目标相邻格再发动突击；",o.jsx("b",{children:"机雷牌"}),"→在附近格部署机雷；",o.jsx("b",{children:"护甲牌"}),"→在本时机被动生效（减少受到的伤害）。无特殊牌则跳过。"]})]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"移动规则"}),o.jsxs("p",{children:["移动时，机体从当前格出发按移动牌数值进行扩展，每进入一个格子消耗对应地形的基础代价 ",o.jsx("b",{children:"加上高度差"}),"："]}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"地形"}),o.jsx("th",{children:"基础移动代价"}),o.jsx("th",{children:"战斗效果"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"平地"}),o.jsx("td",{children:"1"}),o.jsx("td",{children:"无"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"砂地"}),o.jsx("td",{children:"1"}),o.jsx("td",{children:"无"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"废墟"}),o.jsx("td",{children:"2"}),o.jsx("td",{children:"无"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"森林"}),o.jsx("td",{children:"2"}),o.jsx("td",{children:"处于其中的机体受到射击伤害 −1（掩护）"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"高地"}),o.jsx("td",{children:"1 + 高度差*"}),o.jsx("td",{children:"可遮蔽视线（高地墙）；本身无伤害加成"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"水域"}),o.jsx("td",{children:"3"}),o.jsx("td",{children:"在其中发射能量武器时伤害 −1"})]})]})]}),o.jsx("p",{className:"rules-note",children:"* 高度差代价：进入比当前格海拔更高的地形时，额外消耗等同于高度差的移动力（例如从海拔0进入海拔2，共消耗 1+2=3 点）。下坡无额外代价。"}),o.jsx("p",{className:"rules-note",children:"注：机体不能占据对手所在的格子。移动途中触碰到敌方机雷将立即停止并引爆。"})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"射程、视线与距离衰减"}),o.jsxs("p",{children:["距离使用",o.jsx("b",{children:"切比雪夫距离"}),"（8方向棋格距离：行差与列差的最大值）。 射击牌有最小射程和最大射程，目标须在此范围内。"]}),o.jsx("p",{children:"视线（LOS）检查规则："}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"森林不阻断视线，"}),"但能为处于其中的机体提供掩护（受击伤害-1）。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"高地阻断："}),"若射线上存在海拔高于攻防双方的高地格，则视线被遮挡，无法射击。"]}),o.jsx("li",{children:"其他地形（平地、砂地、废墟、水域）均不影响视线。"})]}),o.jsxs("p",{children:[o.jsx("b",{children:"距离衰减（部分武器）："}),'部分武器卡设有"最佳射程"，超出最佳射程后每多1格伤害递减（递减值见卡面），但不超过最大射程仍可开火。']})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"伤害与摧毁"}),o.jsxs("p",{children:["攻击命中后，系统计算最终伤害值，然后进入",o.jsx("b",{children:"伤害分配"}),"。伤害来源不同，分配规则不同："]}),o.jsx("p",{children:o.jsx("b",{children:"🎯 射击伤害（规则 11-2-2）："})}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"先"}),"从表面朝上的卡牌中自由选择破坏：手牌、辅助区、",o.jsx("b",{children:"已布局的牌（主要阶段1/2）"}),"。每次选1张，直至选满伤害值或表面朝上卡牌耗尽。"]}),o.jsxs("li",{children:["表面朝上卡牌不足时，",o.jsx("b",{children:"剩余伤害从牌组顶端自动破坏"}),'（防守方无法选择牌组中的特定卡牌）。也可随时点击"确认"将剩余伤害交由系统从牌组顶端自动处理。']}),o.jsxs("li",{children:[o.jsx("b",{children:"使用了瞄准牌的射击："}),"攻击方额外获得一项权利——可",o.jsx("b",{children:"指定"}),"防守方必须销毁的第一张牌（范围包括牌组）。"]})]}),o.jsx("p",{children:o.jsx("b",{children:"⚔️ 白兵/突击伤害（强制翻牌库顶）："})}),o.jsxs("ul",{className:"rules-list",children:[o.jsx("li",{children:"防守方无权选择，系统直接从牌库顶翻牌销毁，数量等于最终伤害值。"}),o.jsx("li",{children:"牌库翻完后从废弃区重洗继续。若牌组与废弃区均耗尽，剩余伤害切换为防守方自选模式（可从手牌、辅助区、已布局的牌中选择）。"})]}),o.jsx("p",{children:o.jsx("b",{children:"💣 爆弹标记诱爆："})}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:["若被摧毁的牌带有",o.jsx("b",{children:"爆弹标记（💣）"}),"，将额外追加摧毁1张牌（从牌库顶强制翻出）。"]}),o.jsxs("li",{children:["该额外摧毁",o.jsx("b",{children:"不会"}),"再触发新的连锁诱爆（每次伤害结算中仅触发1次诱爆）。"]}),o.jsx("li",{children:'注意：◆标记是区分"改"型变种卡的符号，与诱爆无关。'})]}),o.jsx("p",{className:"rules-note",children:"注：若牌组耗尽，继续从废弃区（重新洗混后）取牌销毁。"})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"卡牌类型"}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"类型"}),o.jsx("th",{children:"使用时机"}),o.jsx("th",{children:"说明"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"移动牌"}),o.jsx("td",{children:"移动时机"}),o.jsx("td",{children:"按牌面数值移动；机体沿4方向移动，移动后机头自动朝向移动方向"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"射击牌"}),o.jsx("td",{children:"射击时机"}),o.jsx("td",{children:"远程攻击，需在机头前方扇区内、射程内且视线通畅；部分武器具有距离衰减"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"近战牌"}),o.jsx("td",{children:"近战时机"}),o.jsx("td",{children:"攻击相邻格（切比雪夫距离=1）的敌方，无扇区限制"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"突击牌"}),o.jsx("td",{children:"特殊时机"}),o.jsx("td",{children:"先冲锋至目标相邻格，再以（突击值−被突击防御值）为基础伤害发动突击；白兵/突击伤害强制从牌库顶翻出"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"护甲牌"}),o.jsx("td",{children:"被动防御"}),o.jsx("td",{children:"布局后，本段受到攻击时每张护甲牌抵消1点伤害"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"瞄准牌"}),o.jsx("td",{children:"攻击辅助"}),o.jsxs("td",{children:["布置于",o.jsx("b",{children:"主要阶段1"}),"时，使",o.jsx("b",{children:"主要阶段2"}),"的射击/近战/突击攻击伤害+1，且攻方可指定防守方销毁目标"]})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"机雷牌"}),o.jsx("td",{children:"特殊时机"}),o.jsx("td",{children:"在机体周围格部署机雷；敌方移动途经该格时自动引爆，造成机雷伤害"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"特殊牌"}),o.jsx("td",{children:"—"}),o.jsx("td",{children:"ダミー等占位牌，无实际效果"})]})]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"胜利条件"}),o.jsx("p",{children:"每次伤害结算结束后，系统自动检查双方是否满足败北条件。满足任意一条即判败："}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"牌组耗尽："}),"尚未进入破坏区的所有牌（手牌 + 牌库 + 辅助区 + ",o.jsx("b",{children:"已布局的牌"}),"）总数 ≤ 3"]}),o.jsxs("li",{children:[o.jsx("b",{children:"战力耗尽："}),"所有",o.jsx("b",{children:"攻击牌"}),"（射击牌、近战牌、突击牌）均被摧毁"]})]}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:["若对手率先满足败北条件 → ",o.jsx("b",{children:"己方获胜"})]}),o.jsxs("li",{children:["若双方同时满足 → ",o.jsx("b",{children:"平局"})]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"高级效果速查"}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"效果"}),o.jsx("th",{children:"触发条件"}),o.jsx("th",{children:"具体效果"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"瞄准"}),o.jsx("td",{children:"主要阶段1布局瞄准牌 + 主要阶段2布局攻击牌"}),o.jsxs("td",{children:["主要阶段2的射击/近战/突击伤害+1；且攻方可指定防守方",o.jsx("b",{children:"必须"}),"销毁的第一张牌"]})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"装甲"}),o.jsx("td",{children:"防守方在被攻击段落布局了护甲牌"}),o.jsx("td",{children:"每张护甲牌抵消1点最终伤害（下限为0）"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"森林掩护"}),o.jsx("td",{children:"防守方站在森林格中被射击"}),o.jsx("td",{children:"受到的射击伤害 −1（近战/突击无此效果）"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"水域衰减"}),o.jsx("td",{children:"攻击方站在水域中使用能量武器射击"}),o.jsx("td",{children:"射击伤害 −1"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"突击冲锋"}),o.jsx("td",{children:"突击牌布局后在特殊时机选择目标"}),o.jsx("td",{children:'先自动移动至目标相邻格，再造成（突击值−被突击防御）点伤害；伤害来源为"突击"，强制从牌库顶翻出'})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"机雷部署"}),o.jsx("td",{children:"机雷牌布局后在特殊时机选择格子"}),o.jsx("td",{children:"放置机雷标记；敌方途经时立即停止并承受机雷伤害，机雷随即消失"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"💣 爆弹诱爆"}),o.jsx("td",{children:"带爆弹标记（💣）的牌被摧毁时"}),o.jsx("td",{children:"额外从牌库顶翻出1张牌强制销毁；该额外销毁不再触发新的连锁"})]})]})]})]}),o.jsxs("section",{className:"rules-section rules-section--diff",children:[o.jsx("h2",{className:"rules-section__title rules-section__title--diff",children:"⚠ 本版本与官方原版的已知差异"}),o.jsx("p",{className:"rules-note",children:"以下是本网游版出于实现便捷性而保留的简化，与桌游官方规则（规则书/FAQ）存在差异。"}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"规则项"}),o.jsx("th",{children:"本版本实现"}),o.jsx("th",{children:"官方原版规则"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"诱爆机制"}),o.jsx("td",{children:"爆弹牌被销毁时立即追加1次额外销毁，连锁止于1层"}),o.jsx("td",{children:"所有伤害结算完毕后，统计本次被销毁的爆弹牌数N，从牌库顶翻N张：其中有爆弹标记的被销毁，无标记的入废弃堆（可能触发多轮连锁）"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"射击伤害选牌顺序"}),o.jsx("td",{children:"防守方可自由从任意区域（含牌库）选择销毁目标"}),o.jsx("td",{children:"应优先从手牌、辅助区、布局区中选择，牌库最后选取"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"回避掷骰"}),o.jsx("td",{children:"未实现；机体回避值仅影响抽牌数量"}),o.jsx("td",{children:"攻击命中前需进行回避判定；回避值影响躲避成功率"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"先制平局"}),o.jsx("td",{children:"先制值相同时玩家1固定优先"}),o.jsx("td",{children:"应由队伍标记物编号（チームチット番号）决定"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"对战模式"}),o.jsx("td",{children:"本机热座 1v1"}),o.jsx("td",{children:"官方支持最多 4v4 双人组队对战"})]})]})]})]})]}),o.jsx("style",{children:Jv})]})}const Jv=`
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
`;function Bv({onBack:e}){const[n,t]=k.useState("maps");return o.jsxs("div",{className:"data-page",children:[o.jsxs("div",{className:"data-page__header",children:[o.jsx("button",{className:"data-page__back",onClick:e,children:"← 返回"}),o.jsx("h1",{className:"data-page__title",children:"游戏资料"})]}),o.jsxs("div",{className:"data-page__tabs",children:[o.jsx("button",{className:`data-tab ${n==="maps"?"data-tab--active":""}`,onClick:()=>t("maps"),children:"地图"}),o.jsx("button",{className:`data-tab ${n==="units"?"data-tab--active":""}`,onClick:()=>t("units"),children:"机体"}),o.jsx("button",{className:`data-tab ${n==="cards"?"data-tab--active":""}`,onClick:()=>t("cards"),children:"卡牌"})]}),o.jsxs("div",{className:"data-page__content",children:[n==="maps"&&o.jsx(Fv,{}),n==="units"&&o.jsx(Uv,{}),n==="cards"&&o.jsx(Wv,{})]}),o.jsx("style",{children:Xv})]})}const Af={plain:"#8fbc5a",sand:"#d4b483",rubble:"#9e8f7a",forest:"#2d7a2d",water:"#4477cc",highland:"#c4955a"},Vf={plain:"平地",sand:"沙地",rubble:"瓦砾",forest:"森林",water:"水域",highland:"高地"};function Fv(){const[e,n]=k.useState(Ze[0].id),t=Ze.find(a=>a.id===e);return o.jsxs("div",{className:"maps-panel",children:[o.jsx("div",{className:"maps-panel__selector",children:Ze.map(a=>o.jsx("button",{className:`map-sel-btn ${a.id===e?"map-sel-btn--active":""}`,onClick:()=>n(a.id),children:a.nameCn},a.id))}),o.jsxs("div",{className:"maps-panel__body",children:[o.jsx(Gv,{map:t}),o.jsx(Hv,{})]})]})}function Gv({map:e}){const n=new Set(e.startZones[0].map(a=>`${a.row},${a.col}`)),t=new Set(e.startZones[1].map(a=>`${a.row},${a.col}`));return o.jsxs("div",{className:"mini-map-wrapper",children:[o.jsxs("div",{className:"mini-map__title",children:[e.nameCn,"（",e.width,"×",e.height,"）"]}),o.jsx("div",{className:"mini-map__grid",style:{gridTemplateColumns:`repeat(${e.width}, 28px)`,gridTemplateRows:`repeat(${e.height}, 28px)`},children:e.cells.flatMap((a,r)=>a.map((s,i)=>{const l=`${r},${i}`,d=n.has(l),u=t.has(l),p=Af[s.terrain]??"#888";return o.jsxs("div",{className:"mini-map__cell",style:{background:p},title:`(${i},${r}) ${Vf[s.terrain]??s.terrain}${s.terrain==="highland"?" Lv"+s.elevation:""}`,children:[d&&o.jsx("span",{className:"mini-map__marker mini-map__marker--p1",children:"①"}),u&&o.jsx("span",{className:"mini-map__marker mini-map__marker--p2",children:"②"}),s.terrain==="highland"&&o.jsx("span",{className:"mini-map__elev",children:s.elevation})]},l)}))})]})}function Hv(){return o.jsxs("div",{className:"map-legend",children:[o.jsx("div",{className:"map-legend__title",children:"地形图例"}),Object.entries(Vf).map(([e,n])=>o.jsxs("div",{className:"map-legend__item",children:[o.jsx("span",{className:"map-legend__swatch",style:{background:Af[e]}}),o.jsx("span",{children:n})]},e)),o.jsxs("div",{className:"map-legend__item",children:[o.jsx("span",{className:"map-legend__marker-demo mini-map__marker--p1",children:"①"}),o.jsx("span",{children:"玩家1出发区"})]}),o.jsxs("div",{className:"map-legend__item",children:[o.jsx("span",{className:"map-legend__marker-demo mini-map__marker--p2",children:"②"}),o.jsx("span",{children:"玩家2出发区"})]}),o.jsx("div",{className:"map-legend__note",children:"高地格显示海拔等级（1–3），移动力消耗与平地相同，提供射程视野优势。"})]})}function Uv(){return o.jsxs("div",{className:"units-panel",children:[o.jsxs("table",{className:"units-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"机体"}),o.jsx("th",{children:"日文名"}),o.jsx("th",{children:"型号"}),o.jsx("th",{children:"先制"}),o.jsx("th",{children:"移动"}),o.jsx("th",{children:"回避"}),o.jsx("th",{children:"突击"}),o.jsx("th",{children:"防突击"})]})}),o.jsx("tbody",{children:[...Q].sort((e,n)=>e.initiative-n.initiative).map(e=>o.jsxs("tr",{children:[o.jsxs("td",{className:"units-table__name",children:[o.jsx("img",{src:`/assets/tokens/${e.tokenId}`,alt:e.nameCn,className:"units-table__token",onError:n=>{n.target.style.display="none"}}),e.nameCn]}),o.jsx("td",{className:"units-table__ja",children:e.nameJa}),o.jsx("td",{children:e.type}),o.jsx("td",{className:"units-table__num",children:e.initiative}),o.jsx("td",{className:"units-table__num",children:e.movement}),o.jsx("td",{className:"units-table__num",children:e.evasion}),o.jsx("td",{className:"units-table__num",children:e.assault}),o.jsx("td",{className:"units-table__num",children:e.assaultDef})]},e.id))})]}),o.jsxs("div",{className:"units-note",children:[o.jsx("strong",{children:"型号说明："}),"SS/S/M/L/LL = 体型；軽/中/重 = 重量等级；単座 = 单人驾驶。 先制值越小先手越快，移动值为每回合最大移动格数，回避值为被击中时消耗的伤害数量。"]})]})}const Pf={movement:"移动",ranged:"射击",melee:"近战",special:"特殊",mine:"机雷",aim:"瞄准",armor:"装甲",charge:"突击",auxiliary:"辅助"},Rf={movement:"#66ccaa",ranged:"#4499ee",melee:"#ff9944",special:"#cc88ff",mine:"#ff6688",aim:"#ffdd44",armor:"#88aacc",charge:"#ff6644",auxiliary:"#aaaacc"};function Wv(){const e=Object.keys(ba),[n,t]=k.useState(e[0]),a=ba[n]??[];let r=n;const s=Q.find(i=>n.startsWith(i.deckCode));return s&&(n.endsWith("+")?r=`${s.nameCn} (Plus)`:r=s.nameCn),o.jsxs("div",{className:"cards-panel",children:[o.jsx("div",{className:"cards-panel__unit-tabs",children:e.map(i=>{const l=Q.find(p=>i.startsWith(p.deckCode));let d=i,u=null;return l&&(u=`/assets/tokens/${l.tokenId}`,d=i.endsWith("+")?`${l.nameCn}+`:l.nameCn),o.jsxs("button",{className:`unit-tab ${i===n?"unit-tab--active":""}`,onClick:()=>t(i),children:[u&&o.jsx("img",{src:u,alt:d,className:"unit-tab__token",onError:p=>{p.target.style.display="none"}}),o.jsx("span",{children:d})]},i)})}),o.jsxs("div",{className:"cards-panel__header",children:[o.jsx("span",{className:"cards-panel__unit-name",children:r}),o.jsxs("span",{className:"cards-panel__count",children:["共 ",a.length," 张卡牌"]})]}),o.jsx("div",{className:"cards-panel__summary",children:o.jsx(Zv,{deck:a})}),o.jsx("div",{className:"cards-panel__list",children:a.map(i=>o.jsx(Yv,{card:i},i.id))})]})}function Zv({deck:e}){const n={};for(const t of e)n[t.actionType]=(n[t.actionType]??0)+1;return o.jsx("div",{className:"card-type-summary",children:Object.entries(n).sort(([t],[a])=>t.localeCompare(a)).map(([t,a])=>o.jsxs("span",{className:"card-type-badge",style:{background:Rf[t]??"#888"},children:[Pf[t]??t," ×",a]},t))})}function Yv({card:e}){const n=Pf[e.actionType]??e.actionType,t=Rf[e.actionType]??"#888",{zoom:a,getZoomHandlers:r}=At(),s=`/assets/${e.frontImageId}`;let i="";return e.actionType==="movement"&&e.movementValue!==void 0?i=`移动 ${e.movementValue}`:(e.actionType==="ranged"||e.actionType==="melee")&&e.damage!==void 0?e.rangeMin!==void 0&&e.rangeMax!==void 0?i=`射程 ${e.rangeMin}–${e.rangeMax}  伤害 ${e.damage}`:i=`伤害 ${e.damage}`:e.actionType==="charge"&&e.damage!==void 0&&(i=`伤害 ${e.damage}`),o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"card-row",...r(s),children:[o.jsx("div",{className:"card-row__image-wrap",children:o.jsx("img",{src:s,alt:e.nameCn,className:"card-row__image",onError:l=>{l.target.style.display="none"}})}),o.jsx("span",{className:"card-row__type",style:{background:t},children:n}),o.jsx("span",{className:"card-row__name",children:e.nameCn}),e.effectText?o.jsx("span",{className:"card-row__effect",children:e.effectText}):i&&o.jsx("span",{className:"card-row__detail",children:i}),e.isKaiVariant&&o.jsx("span",{className:"card-row__kai",title:"改型标记",children:"◆"}),e.hasBombIcon&&o.jsx("span",{className:"card-row__bomb",title:"诱爆",children:"💥"})]}),o.jsx(Vt,{zoom:a})]})}const Xv=`
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
`;function ns(){const{state:e,getCard:n,exposureMode:t}=je(),[a,r]=k.useState(null),{zoom:s,getZoomHandlers:i}=At(),l=e.phase==="plotting"?e.plottingStep==="player2"?"player2":"player1":e.activePlayer??"player1",d=a??l,u=e.players[d],p=Q.find(x=>x.id===u.unitId),f=t?!1:Qv(e),g={N:"↑北",S:"↓南",E:"→东",W:"←西"}[u.facing]??u.facing;return o.jsxs("div",{className:"mp",children:[o.jsxs("div",{className:"mp__tabs",children:[e.playerIds.map(x=>o.jsxs("button",{className:`mp__tab ${d===x?"mp__tab--active":""}`,onClick:()=>r(m=>m===x?null:x),children:[`P${e.playerIds.indexOf(x)+1}`,x===l&&o.jsx("span",{className:"mp__tab-dot"})]},x)),o.jsx("span",{className:"mp__phase-hint",children:e.phase==="plotting"?"布局中":"行动中"})]}),p&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"mp__header",children:[o.jsx("img",{src:`/assets/tokens/${p.tokenId}`,alt:p.nameCn,className:"mp__token",onError:x=>{x.target.style.opacity="0.3"}}),o.jsxs("div",{className:"mp__header-info",children:[o.jsx("div",{className:"mp__unit-name",children:p.nameCn}),o.jsx("div",{className:"mp__unit-sub",children:p.nameJa}),o.jsxs("div",{className:"mp__pos",children:["格 (",u.position.row,",",u.position.col,")   ",g]})]})]}),o.jsxs("div",{className:"mp__stats",children:[o.jsx(Ra,{label:"先制",value:p.initiative,color:"#f0c040"}),o.jsx(Ra,{label:"移动",value:p.movement,color:"#66ccaa"}),o.jsx(Ra,{label:"回避",value:p.evasion,color:"#88aaff"}),o.jsx(Ra,{label:"突击",value:p.assault,color:"#ff9944"}),o.jsx(Ra,{label:"被突",value:p.assaultDef,color:"#ff6666"})]}),o.jsxs("div",{className:"mp__zones",children:[o.jsxs("div",{className:"mp__zone mp__zone--aux",children:[o.jsx("div",{className:"mp__zone-label",children:"辅助区"}),u.auxiliary.length===0?o.jsx("div",{className:"mp__zone-empty",children:"—"}):(()=>{const x=new Map;for(const h of u.auxiliary){const _=n(h.defId),b=(_==null?void 0:_.nameJa)??h.defId,v=x.get(b);v?(v.totalCount++,h.destroyed||v.liveCount++):x.set(b,{nameCn:(_==null?void 0:_.nameCn)??h.defId,liveCount:h.destroyed?0:1,totalCount:1})}const m=h=>{const _=jn(u,n,"movement"),b=jn(u,n,"melee"),v=jn(u,n,"charge");return h==="バーニア"?_.vernier||b.vernier:h==="ムーブセンサー"?b.moveSensor:h==="ホイール"?_.wheel||v.wheel:!1};return o.jsxs(o.Fragment,{children:[u.auxiliary.map(h=>{const _=n(h.defId),b=_!=null&&_.frontImageId?`/assets/${_.frontImageId}`:null;return o.jsxs("div",{className:`mp__aux-card${h.destroyed?" mp__aux-card--destroyed":""}`,...b?i(b):{},children:[o.jsx("span",{className:"mp__aux-name",children:(_==null?void 0:_.nameCn)??h.defId}),h.destroyed&&o.jsx("span",{className:"mp__aux-dead",children:"✕"})]},h.instanceId)}),o.jsx("div",{className:"mp__aux-badges",children:Array.from(x.entries()).map(([h,_])=>{const b=m(h);return o.jsxs("div",{className:`mp__aux-status ${b?"mp__aux-status--on":"mp__aux-status--off"}`,title:b?"效果激活中":"需要≥2张存活才能激活",children:[b?"✓":"✗"," ",_.nameCn,o.jsxs("span",{className:"mp__aux-count",children:["(",_.liveCount,"/",_.totalCount,")"]})]},h)})})]})})()]}),o.jsxs("div",{className:"mp__counts",children:[o.jsx(ao,{icon:"🃏",label:"手牌",count:u.hand.filter(x=>!x.destroyed).length}),o.jsx(ao,{icon:"📚",label:"牌库",count:u.deck.filter(x=>!x.destroyed).length}),o.jsx(ao,{icon:"♻️",label:"弃牌",count:u.discard.filter(x=>!x.destroyed).length}),o.jsx(ao,{icon:"💀",label:"破坏",count:u.destroyedCards.length})]})]}),o.jsxs("div",{className:"mp__plot",children:[o.jsx("div",{className:"mp__plot-label",children:"布局段落"}),o.jsxs("div",{className:"mp__plot-slots",children:[o.jsx(Xd,{label:"主要阶段一",card:u.plotSeg1,getCard:n,hidden:f,getZoomHandlers:i}),o.jsx(Xd,{label:"主要阶段二",card:u.plotSeg2,getCard:n,hidden:f,getZoomHandlers:i})]})]})]}),o.jsx("style",{children:qv}),o.jsx(Vt,{zoom:s})]})}function Qv(e,n){return e.phase==="plotting"?e.plottingStep!=="complete":!1}function Ra({label:e,value:n,color:t}){return o.jsxs("div",{className:"mp__stat",children:[o.jsx("span",{className:"mp__stat-lbl",children:e}),o.jsx("span",{className:"mp__stat-val",style:{color:t},children:n})]})}function ao({icon:e,label:n,count:t}){return o.jsxs("div",{className:"mp__zcount",children:[o.jsx("span",{className:"mp__zcount-icon",children:e}),o.jsx("span",{className:"mp__zcount-lbl",children:n}),o.jsx("span",{className:"mp__zcount-n",children:t})]})}function Xd({label:e,card:n,getCard:t,hidden:a,getZoomHandlers:r}){const s=n?t(n.defId):null,i=s!=null&&s.frontImageId?`/assets/${s.frontImageId}`:null;return o.jsxs("div",{className:"mp__slot",children:[o.jsx("div",{className:"mp__slot-lbl",children:e}),n?a?o.jsx("div",{className:"mp__slot-hidden",children:"???"}):o.jsxs("div",{className:"mp__slot-card",...i?r(i):{},children:[o.jsx("span",{className:"mp__slot-name",children:(s==null?void 0:s.nameCn)??n.defId}),o.jsx("span",{className:`mp__slot-type mp__slot-type--${(s==null?void 0:s.actionType)??"unknown"}`,children:(s==null?void 0:s.actionType)??"?"})]}):o.jsx("div",{className:"mp__slot-empty",children:"— 未布局 —"})]})}const qv=`
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
`,eb={slot_1:"存档位 1",slot_2:"存档位 2",slot_3:"存档位 3",slot_4:"存档位 4",slot_5:"存档位 5",auto:"自动存档"},nb=[...ux,"auto"];function tb(e){const n=new Date(e),t=a=>String(a).padStart(2,"0");return`${n.getFullYear()}-${t(n.getMonth()+1)}-${t(n.getDate())} ${t(n.getHours())}:${t(n.getMinutes())}`}function Qd({mode:e,onBack:n,onLoad:t,currentState:a,aiConfig:r}){const[s,i]=k.useState([]),[l,d]=k.useState(null),[u,p]=k.useState(null),[f,g]=k.useState(null),[x,m]=k.useState(null);k.useEffect(()=>{i(zd())},[]);function h(){i(zd())}function _(j){g(j),setTimeout(()=>g(null),2e3)}function b(j){return s.find(C=>C.slotId===j)}function v(j){if(!a||!r)return;if(b(j)){p(j);return}y(j)}function y(j){if(!(!a||!r))try{Ef(j,a,r,!1),h(),p(null),_("存档已保存")}catch(C){m(C instanceof Error?C.message:"保存失败")}}function w(j){const C=fx(j);if(!C){m("存档数据已损坏，无法加载");return}t==null||t(C)}function T(j){mx(j),h(),d(null),_("存档已删除")}const $=e==="save"?"保存游戏":"加载存档";return o.jsxs("div",{className:"sl-screen",children:[o.jsxs("div",{className:"sl-panel",children:[o.jsx("h2",{className:"sl-title",children:$}),o.jsx("div",{className:"sl-slots",children:nb.map(j=>{const C=b(j),S=e==="save"&&!(j==="auto")&&a!=null;return o.jsxs("div",{className:`sl-slot ${C?"sl-slot--occupied":"sl-slot--empty"}`,children:[o.jsxs("div",{className:"sl-slot__label",children:[eb[j],(C==null?void 0:C.isAutoSave)&&o.jsx("span",{className:"sl-badge",children:"自动"})]}),C?o.jsxs("div",{className:"sl-slot__info",children:[o.jsxs("span",{className:"sl-slot__units",children:[C.player1Unit," vs ",C.player2Unit]}),o.jsx("span",{className:"sl-slot__map",children:C.mapName}),o.jsxs("span",{className:"sl-slot__round",children:["第 ",C.roundNumber," 回合"]}),o.jsx("span",{className:"sl-slot__time",children:tb(C.timestamp)})]}):o.jsx("div",{className:"sl-slot__info sl-slot__empty-label",children:"空存档位"}),o.jsxs("div",{className:"sl-slot__actions",children:[e==="load"&&C&&o.jsx("button",{className:"sl-btn sl-btn--primary",onClick:()=>w(j),children:"加载"}),S&&o.jsx("button",{className:"sl-btn sl-btn--primary",onClick:()=>v(j),children:C?"覆盖":"保存"}),C&&(l===j?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"sl-confirm-text",children:"确认删除？"}),o.jsx("button",{className:"sl-btn sl-btn--danger",onClick:()=>T(j),children:"确认"}),o.jsx("button",{className:"sl-btn",onClick:()=>d(null),children:"取消"})]}):o.jsx("button",{className:"sl-btn sl-btn--ghost",onClick:()=>d(j),children:"删除"}))]}),u===j&&o.jsxs("div",{className:"sl-overwrite",children:[o.jsx("span",{children:"覆盖此存档？"}),o.jsx("button",{className:"sl-btn sl-btn--primary",onClick:()=>y(j),children:"确认"}),o.jsx("button",{className:"sl-btn",onClick:()=>p(null),children:"取消"})]})]},j)})}),x&&o.jsxs("div",{className:"sl-error",onClick:()=>m(null),children:["⚠ ",x]}),o.jsx("button",{className:"sl-back-btn",onClick:n,children:"← 返回"})]}),f&&o.jsx("div",{className:"sl-toast",children:f}),o.jsx("style",{children:ab})]})}const ab=`
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
`;function rb({currentState:e}){const{rawDispatch:n}=je();return k.useEffect(()=>{n({type:"LOAD_GAME",state:e})},[e,n]),o.jsx("div",{style:{height:"100%",width:"100%"},children:o.jsx(Ia,{})})}function ob({currentState:e}){return o.jsx(ys,{children:o.jsx(Df,{children:o.jsx(rb,{currentState:e})})})}function sb({onBack:e}){const[n,t]=k.useState("list"),[a,r]=k.useState(null);function s(l){r(l),t("playback")}function i(){r(null),t("list")}return n==="playback"&&a?o.jsx(db,{replayData:a,onExit:i}):o.jsx(ib,{onBack:e,onPlay:s})}function Lf(e){const n=kx(e.initialState,e.actions),t=new Blob([n],{type:"text/plain;charset=utf-8"}),a=URL.createObjectURL(t),r=document.createElement("a");r.href=a;const s=new Date(e.metadata.timestamp),i=d=>String(d).padStart(2,"0"),l=`replay_${e.metadata.player1Unit}_vs_${e.metadata.player2Unit}_${s.getFullYear()}${i(s.getMonth()+1)}${i(s.getDate())}_${i(s.getHours())}${i(s.getMinutes())}.txt`;r.download=l,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(a)}function ib({onBack:e,onPlay:n}){const[t,a]=k.useState([]),[r,s]=k.useState(null),[i,l]=k.useState(null);k.useEffect(()=>{a($d())},[]);function d(f){const g=Ad(f);if(!g){l("录像数据已损坏，无法播放");return}n(g)}function u(f){const g=Ad(f);if(!g){l("录像数据已损坏，无法导出");return}Lf(g)}function p(f){xx(f),a($d()),s(null)}return o.jsxs("div",{className:"rp-screen",children:[o.jsxs("div",{className:"rp-panel",children:[o.jsx("h2",{className:"rp-title",children:"回放录像"}),t.length===0?o.jsx("div",{className:"rp-empty",children:"暂无保存的录像"}):o.jsx("div",{className:"rp-list",children:t.map(f=>o.jsxs("div",{className:"rp-item",children:[o.jsxs("div",{className:"rp-item__info",children:[o.jsxs("span",{className:"rp-item__units",children:[f.player1Unit," vs ",f.player2Unit]}),o.jsx("span",{className:"rp-item__map",children:f.mapName}),o.jsxs("span",{className:"rp-item__rounds",children:[f.totalRounds," 回合"]}),f.winner&&o.jsx("span",{className:"rp-item__winner",children:f.winner==="draw"?"平局":`${f.winner==="player1"?"P1":"P2"} 获胜`}),o.jsx("span",{className:"rp-item__time",children:ub(f.timestamp)})]}),o.jsxs("div",{className:"rp-item__actions",children:[o.jsx("button",{className:"rp-btn rp-btn--primary",onClick:()=>d(f.replayId),children:"▶ 播放"}),o.jsx("button",{className:"rp-btn",onClick:()=>u(f.replayId),children:"导出日志"}),r===f.replayId?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"rp-confirm",children:"确认删除？"}),o.jsx("button",{className:"rp-btn rp-btn--danger",onClick:()=>p(f.replayId),children:"确认"}),o.jsx("button",{className:"rp-btn",onClick:()=>s(null),children:"取消"})]}):o.jsx("button",{className:"rp-btn rp-btn--ghost",onClick:()=>s(f.replayId),children:"删除"})]})]},f.replayId))}),i&&o.jsxs("div",{className:"rp-error",onClick:()=>l(null),children:["⚠ ",i]}),o.jsx("button",{className:"rp-back-btn",onClick:e,children:"← 返回"})]}),o.jsx("style",{children:Of})]})}function lb(e){const n=[0];let t=e.initialState;for(let a=0;a<e.actions.length;a++){const r=t.phase,s=t.roundNumber,i=t.plottingStep,l=t.currentTiming;t=fn(t,e.actions[a]),(t.phase!==r||t.roundNumber!==s||t.plottingStep!==i||t.currentTiming!==l)&&n.push(a+1)}return n[n.length-1]!==e.actions.length&&n.push(e.actions.length),n}function qd(e,n){let t=e.initialState;for(let a=0;a<n&&a<e.actions.length;a++)t=fn(t,e.actions[a]);return t}function cb(e,n){const t=s=>{const i=n.players[s],l=Q.find(d=>d.id===i.unitId);return(l==null?void 0:l.nameCn)??s},a=s=>{const i=q(s);return(i==null?void 0:i.nameCn)??s},r=(s,i)=>{const l=n.players[i],u=[...l.deck,...l.hand,...l.auxiliary,...l.discard,...l.destroyedCards,...l.plotSeg1?[l.plotSeg1]:[],...l.plotSeg2?[l.plotSeg2]:[]].find(p=>p.instanceId===s);return u?a(u.defId):s};switch(e.type){case"DRAW_CARDS":return`${t(e.playerId)} 抽取 ${e.count} 张牌`;case"PLOT_CARD":{const s=r(e.instanceId,e.playerId);return`${t(e.playerId)} 布局段落${e.seg}：${s}`}case"CONFIRM_PLOT":return`${t(e.playerId)} 确认布局`;case"ADVANCE_PLOT_STEP":return"布局阶段推进";case"MOVE_UNIT":return`${t(e.playerId)} 移动至 (${e.to.row},${e.to.col})`;case"ADJUST_FACING":return`${t(e.playerId)} 调整朝向 → ${e.facing}`;case"RESOLVE_RANGED":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动射击`;case"RESOLVE_MELEE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动近战`;case"RESOLVE_CHARGE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动突击`;case"PLACE_MINE":return`${t(e.playerId)} 在 (${e.to.row},${e.to.col}) 布雷 (${e.damage}伤害)`;case"SELECT_DAMAGE_CARD":{const s=r(e.instanceId,e.playerId);return`${t(e.playerId)} 选择摧毁：${s}`}case"CONFIRM_DAMAGE_SELECTION":return`${t(e.playerId)} 确认伤害结算`;case"SKIP_ACTION":return"跳过行动";case"ADVANCE_TIMING":return"推进时序";case"ADVANCE_PHASE":return"推进阶段";case"MELEE_SENSOR_MOVE":return`${t(e.playerId)} 近战传感器移动至 (${e.to.row},${e.to.col})`;case"START_PLOTTING":return"进入布局阶段";default:return e.type}}function eu({player:e,label:n}){const t=Q.find(l=>l.id===e.unitId),{zoom:a,getZoomHandlers:r}=At(),s=l=>l.filter(d=>!d.destroyed),i={N:"↑北",S:"↓南",E:"→东",W:"←西"}[e.facing]??e.facing;return o.jsxs("div",{className:"rpp",children:[o.jsxs("div",{className:"rpp__header",children:[t&&o.jsx("img",{src:`/assets/tokens/${t.tokenId}`,alt:t.nameCn,className:"rpp__token",onError:l=>{l.target.style.opacity="0.3"}}),o.jsxs("div",{children:[o.jsxs("div",{className:"rpp__name",children:[n,": ",(t==null?void 0:t.nameCn)??e.unitId]}),o.jsxs("div",{className:"rpp__pos",children:["(",e.position.row,",",e.position.col,") ",i]})]})]}),o.jsxs("div",{className:"rpp__counts",children:[o.jsxs("span",{className:"rpp__count",title:"牌库",children:["📚",s(e.deck).length]}),o.jsxs("span",{className:"rpp__count",title:"手牌",children:["🃏",e.hand.length]}),o.jsxs("span",{className:"rpp__count",title:"弃牌",children:["♻️",e.discard.length]}),o.jsxs("span",{className:"rpp__count",title:"破坏",children:["💀",e.destroyedCards.length]})]}),o.jsx("div",{className:"rpp__section-label",children:"布局"}),o.jsxs("div",{className:"rpp__plot-row",children:[o.jsx(nu,{label:"阶段1",card:e.plotSeg1,getZoomHandlers:r}),o.jsx(nu,{label:"阶段2",card:e.plotSeg2,getZoomHandlers:r})]}),o.jsxs("div",{className:"rpp__section-label",children:["手牌 (",e.hand.length,")"]}),o.jsx("div",{className:"rpp__card-list",children:e.hand.length===0?o.jsx("span",{className:"rpp__empty",children:"—"}):e.hand.map(l=>o.jsx(tu,{card:l,getZoomHandlers:r},l.instanceId))}),e.auxiliary.length>0&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"rpp__section-label",children:["辅助 (",s(e.auxiliary).length,"/",e.auxiliary.length,")"]}),o.jsx("div",{className:"rpp__card-list",children:e.auxiliary.map(l=>o.jsx(tu,{card:l,getZoomHandlers:r},l.instanceId))})]}),o.jsx(Vt,{zoom:a})]})}function nu({label:e,card:n,getZoomHandlers:t}){const a=n?q(n.defId):null,r=a!=null&&a.frontImageId?`/assets/${a.frontImageId}`:null,i=a?{movement:"#66ccaa",ranged:"#ff9944",melee:"#ff6060",charge:"#ff4444",aim:"#f0c040",armor:"#88aaff",mine:"#cc88ff",special:"#aaa",auxiliary:"#77ddaa"}[a.actionType]??"#888":"#555";return o.jsxs("div",{className:"rpp__plot-slot",children:[o.jsx("div",{className:"rpp__plot-label",children:e}),n&&a?o.jsxs("div",{className:"rpp__plot-card",style:{borderColor:i},...r?t(r):{},children:[o.jsx("span",{className:"rpp__plot-type",style:{color:i},children:a.actionType}),o.jsx("span",{className:"rpp__plot-name",children:a.nameCn})]}):o.jsx("div",{className:"rpp__plot-empty",children:"—"})]})}function tu({card:e,getZoomHandlers:n}){const t=q(e.defId),a=t!=null&&t.frontImageId?`/assets/${t.frontImageId}`:null,s=t?{movement:"#66ccaa",ranged:"#ff9944",melee:"#ff6060",charge:"#ff4444",aim:"#f0c040",armor:"#88aaff",mine:"#cc88ff",special:"#aaa",auxiliary:"#77ddaa"}[t.actionType]??"#888":"#555";return o.jsxs("span",{className:`rpp__chip${e.destroyed?" rpp__chip--dead":""}`,style:{borderColor:s},...a?n(a):{},children:[(t==null?void 0:t.nameCn)??e.defId,e.destroyed&&o.jsx("span",{className:"rpp__chip-x",children:"✕"})]})}function db({replayData:e,onExit:n}){const t=k.useMemo(()=>lb(e),[e]),a=e.actions.length,[r,s]=k.useState(0),[i,l]=k.useState(e.initialState),[d,u]=k.useState(!1),[p,f]=k.useState(1),[g,x]=k.useState(""),[m,h]=k.useState(e.initialState.log.length),_=k.useRef(null),b=k.useRef(i),v=k.useRef(r);b.current=i,v.current=r;const y=k.useRef(null);k.useEffect(()=>{var J;(J=y.current)==null||J.scrollIntoView({behavior:"smooth"})},[i.log.length]);const w=k.useCallback(()=>{_.current!=null&&(clearInterval(_.current),_.current=null)},[]),T=k.useCallback(()=>{const J=v.current;if(J>=a)return w(),u(!1),!1;const R=e.actions[J],V=fn(b.current,R);return h(b.current.log.length),l(V),s(J+1),!0},[e,a,w]),$=k.useCallback(()=>{const J=v.current;if(J>=a)return;const V=t.find(L=>L>J)??a;let U=b.current;const O=U.log.length;for(let L=J;L<V;L++)U=fn(U,e.actions[L]);h(O),l(U),s(V),V>=a&&(w(),u(!1))},[e,a,t,w]),j=k.useCallback(()=>{const J=v.current,R=t.filter(O=>O<J),V=R.length>=2?R[R.length-2]:0,U=qd(e,V);h(0),l(U),s(V)},[e,t]);k.useEffect(()=>(w(),d&&(_.current=setInterval(()=>{if(v.current>=a){w(),u(!1);return}$()},Math.round(1500/p))),w),[d,p,$,a,w]);function C(){u(J=>!J)}function A(){u(!1),h(0),l(e.initialState),s(0)}function S(){const J=parseInt(g,10);if(isNaN(J)||J<1)return;u(!1);const{state:R,actionIndex:V}=bx(e,J);h(0),l(R),s(V)}const z=r>0?e.actions[r-1]:null,M=z?cb(z,r>=2?qd(e,r-1):e.initialState):null,E=r>=a,K=r===0,H={pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"行动阶段1",action_seg2:"行动阶段2",cleanup:"清理阶段",game_over:"游戏结束"},D={movement:"移动",ranged:"射击",melee:"近战",special:"特殊"};return o.jsxs("div",{className:"rpv-screen",children:[o.jsxs("div",{className:"rpv-topbar",children:[o.jsxs("span",{className:"rpv-topbar__round",children:["第 ",i.roundNumber," 回合"]}),o.jsx("span",{className:"rpv-topbar__phase",children:H[i.phase]??i.phase}),i.currentTiming&&o.jsxs("span",{className:"rpv-topbar__timing",children:["▶ ",D[i.currentTiming]]}),o.jsx("span",{style:{flex:1}}),o.jsx("button",{className:"rpv-btn",onClick:A,disabled:K,title:"回到开始",children:"⏮"}),o.jsx("button",{className:"rpv-btn",onClick:j,disabled:K,title:"上一阶段",children:"◀◀"}),o.jsx("button",{className:"rpv-btn",onClick:()=>{u(!1),T()},disabled:E,title:"单步前进（单个操作）",children:"▶|"}),o.jsx("button",{className:"rpv-btn",onClick:()=>{u(!1),$()},disabled:E,title:"下一阶段",children:"▶▶"}),o.jsx("button",{className:"rpv-btn rpv-btn--primary",onClick:C,children:d?"⏸ 暂停":"▶ 自动"}),o.jsx("span",{className:"rpv-sep"}),o.jsx("span",{className:"rpv-label",children:"速度"}),[1,2,4].map(J=>o.jsxs("button",{className:`rpv-btn rpv-btn--speed ${p===J?"rpv-btn--active":""}`,onClick:()=>f(J),children:[J,"x"]},J)),o.jsx("span",{className:"rpv-sep"}),o.jsx("span",{className:"rpv-label",children:"跳至"}),o.jsx("input",{className:"rpv-input",type:"number",min:1,value:g,onChange:J=>x(J.target.value),onKeyDown:J=>J.key==="Enter"&&S(),placeholder:"回合"}),o.jsx("button",{className:"rpv-btn",onClick:S,children:"跳转"}),o.jsx("span",{className:"rpv-sep"}),o.jsxs("span",{className:"rpv-progress",children:[r,"/",a]}),o.jsx("button",{className:"rpv-btn",onClick:()=>Lf(e),title:"导出完整分析日志",children:"导出日志"}),o.jsx("button",{className:"rpv-btn rpv-btn--exit",onClick:n,children:"✕ 退出"})]}),o.jsxs("div",{className:"rpv-main",children:[o.jsxs("div",{className:"rpv-map-col",children:[o.jsx("div",{className:"rpv-map-area",children:o.jsx(ob,{currentState:i})}),M&&o.jsxs("div",{className:"rpv-action-desc",children:["▶ ",M]}),o.jsxs("div",{className:"rpv-log",children:[o.jsx("div",{className:"rpv-log__header",children:"行动日志"}),o.jsxs("div",{className:"rpv-log__entries",children:[i.log.filter(J=>!J.startsWith("[DBG]")).map((J,R)=>{const V=R>=m;return o.jsx("div",{className:`rpv-log__entry ${pb(J)}${V?" rpv-log__entry--new":""}`,children:J},R)}),o.jsx("div",{ref:y})]})]})]}),o.jsxs("div",{className:"rpv-info-col",children:[o.jsx(eu,{player:i.players.player1,label:"P1"}),o.jsx("div",{className:"rpv-info-divider"}),o.jsx(eu,{player:i.players.player2,label:"P2"})]})]}),o.jsx("style",{children:Of}),o.jsx("style",{children:fb})]})}function ub(e){const n=new Date(e),t=a=>String(a).padStart(2,"0");return`${n.getFullYear()}-${t(n.getMonth()+1)}-${t(n.getDate())} ${t(n.getHours())}:${t(n.getMinutes())}`}function pb(e){return e.startsWith("===")?"rpv-log__entry--round":e.startsWith("---")?"rpv-log__entry--sep":e.includes("发动")||e.includes("攻击")?"rpv-log__entry--attack":e.includes("摧毁")||e.includes("连锁")||e.includes("诱爆")?"rpv-log__entry--damage":e.includes("移动到")?"rpv-log__entry--move":e.includes("获胜")||e.includes("击破")||e.includes("平局")?"rpv-log__entry--victory":""}const Of=`
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
`,fb=`
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
`,mb=50;function Kf(){return{terrain:"plain",elevation:0,variant:0}}function Jf(e,n){const t=Array.from({length:n},()=>Array.from({length:e},()=>Kf()));return{id:`custom_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,nameJa:"新しいマップ",nameCn:"新地图",width:e,height:n,cells:t,startZones:{0:[{row:0,col:Math.floor(e/2)}],1:[{row:n-1,col:Math.floor(e/2)}]},maxPlayers:2,maxTeams:2}}function cl(e){return{map:e??Jf(7,11),activeTool:"terrain",selectedTerrain:"plain",selectedElevation:1,selectedVariant:0,selectedZoneTeam:0,brushSize:1,isDirty:!1,undoStack:[],redoStack:[],showCoords:!1}}function bo(e){return{...e,cells:e.cells.map(n=>n.map(t=>({...t}))),startZones:Object.fromEntries(Object.entries(e.startZones).map(([n,t])=>[n,t.map(a=>({...a}))]))}}function ht(e){const n=[...e.undoStack,bo(e.map)];return n.length>mb&&n.shift(),{...e,undoStack:n,redoStack:[],isDirty:!0}}function au(e,n,t,a,r,s){if(n<0||n>=e.height||t<0||t>=e.width)return e;const i=e.cells.map((l,d)=>d===n?l.map((u,p)=>p===t?{terrain:a,elevation:a==="highland"?r:0,variant:a==="highland"?r:s}:u):l);return{...e,cells:i}}function gb(e,n){switch(n.type){case"SET_TOOL":return{...e,activeTool:n.tool};case"SET_TERRAIN":return{...e,selectedTerrain:n.terrain,activeTool:"terrain"};case"SET_ELEVATION":return{...e,selectedElevation:n.elevation};case"SET_VARIANT":return{...e,selectedVariant:n.variant};case"SET_BRUSH_SIZE":return{...e,brushSize:n.size};case"SET_ZONE_TEAM":return{...e,selectedZoneTeam:n.team};case"TOGGLE_COORDS":return{...e,showCoords:!e.showCoords};case"PAINT_CELL":{const t=ht(e),a=au(t.map,n.row,n.col,t.selectedTerrain,t.selectedElevation,t.selectedVariant);return{...t,map:a}}case"PAINT_AREA":{const t=ht(e);let a=t.map;for(const{row:r,col:s}of n.cells)a=au(a,r,s,t.selectedTerrain,t.selectedElevation,t.selectedVariant);return{...t,map:a}}case"ADD_ZONE_CELL":{const t=ht(e),{team:a,position:r}=n,s=t.map.startZones[a]??[];if(s.some(l=>l.row===r.row&&l.col===r.col))return e;const i={...t.map.startZones,[a]:[...s,r]};return{...t,map:{...t.map,startZones:i}}}case"REMOVE_ZONE_CELL":{const t=ht(e),{team:a,position:r}=n,i=(t.map.startZones[a]??[]).filter(d=>d.row!==r.row||d.col!==r.col),l={...t.map.startZones,[a]:i};return{...t,map:{...t.map,startZones:l}}}case"CLEAR_ZONE":{const t=ht(e),a={...t.map.startZones,[n.team]:[]};return{...t,map:{...t.map,startZones:a}}}case"SET_MAP_META":{const t=ht(e),a={...t.map};return n.nameJa!==void 0&&(a.nameJa=n.nameJa),n.nameCn!==void 0&&(a.nameCn=n.nameCn),n.maxPlayers!==void 0&&(a.maxPlayers=n.maxPlayers),n.maxTeams!==void 0&&(a.maxTeams=n.maxTeams),{...t,map:a}}case"RESIZE_MAP":{const t=ht(e),{newWidth:a,newHeight:r}=n,s=Array.from({length:r},(l,d)=>Array.from({length:a},(u,p)=>d<t.map.height&&p<t.map.width?{...t.map.cells[d][p]}:Kf())),i={};for(const[l,d]of Object.entries(t.map.startZones))i[Number(l)]=d.filter(u=>u.row<r&&u.col<a);return{...t,map:{...t.map,width:a,height:r,cells:s,startZones:i}}}case"UNDO":{if(e.undoStack.length===0)return e;const t=e.undoStack[e.undoStack.length-1];return{...e,map:t,undoStack:e.undoStack.slice(0,-1),redoStack:[...e.redoStack,bo(e.map)],isDirty:!0}}case"REDO":{if(e.redoStack.length===0)return e;const t=e.redoStack[e.redoStack.length-1];return{...e,map:t,redoStack:e.redoStack.slice(0,-1),undoStack:[...e.undoStack,bo(e.map)],isDirty:!0}}case"LOAD_MAP":return{...cl(bo(n.map)),isDirty:!1};case"NEW_MAP":return cl(Jf(n.width,n.height));case"MARK_SAVED":return{...e,isDirty:!1};default:return e}}const mc="em_custom_maps_index",gc="em_custom_map_",hb=["plain","sand","rubble","forest","water","highland"];function hc(){try{const e=localStorage.getItem(mc);return e?JSON.parse(e):[]}catch{return[]}}function xb(e){const n={id:e.id,nameCn:e.nameCn,nameJa:e.nameJa,width:e.width,height:e.height,maxPlayers:e.maxPlayers,maxTeams:e.maxTeams,savedAt:Date.now()},t=hc().filter(a=>a.id!==e.id);t.push(n),localStorage.setItem(mc,JSON.stringify(t)),localStorage.setItem(gc+e.id,JSON.stringify(e))}function vb(e){try{const n=localStorage.getItem(gc+e);if(!n)return null;const t=JSON.parse(n);return Bf(t)?t:null}catch{return null}}function bb(e){const n=hc().filter(t=>t.id!==e);localStorage.setItem(mc,JSON.stringify(n)),localStorage.removeItem(gc+e)}function yb(e){return JSON.stringify(e,null,2)}function _b(e){try{const n=JSON.parse(e);return Bf(n)?(n.id=`custom_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,n):null}catch{return null}}function Ib(e){const n=yb(e),t=new Blob([n],{type:"application/json"}),a=URL.createObjectURL(t),r=document.createElement("a");r.href=a,r.download=`${e.nameCn||e.id}.json`,r.click(),URL.revokeObjectURL(a)}function Bf(e){if(!e||typeof e!="object")return!1;const n=e;if(typeof n.id!="string"||(typeof n.nameCn!="string"&&(n.nameCn="未命名"),typeof n.nameJa!="string"&&(n.nameJa=""),typeof n.width!="number"||n.width<3||n.width>25)||typeof n.height!="number"||n.height<3||n.height>25||(typeof n.maxPlayers!="number"&&(n.maxPlayers=2),typeof n.maxTeams!="number"&&(n.maxTeams=2),!Array.isArray(n.cells))||n.cells.length!==n.height)return!1;for(const t of n.cells){if(!Array.isArray(t)||t.length!==n.width)return!1;for(const a of t)if(!a||typeof a!="object"||!hb.includes(a.terrain))return!1}return(!n.startZones||typeof n.startZones!="object")&&(n.startZones={}),!0}const Ff=k.createContext(null);function Ca(){const e=k.useContext(Ff);if(!e)throw new Error("useEditor must be inside EditorCtx.Provider");return e}const ro=48,ru=.2,kb=3,ou=.1,dl=[{terrain:"plain",label:"平原",icon:"🟩"},{terrain:"sand",label:"砂地",icon:"🟨"},{terrain:"rubble",label:"瓦砾",icon:"🟫"},{terrain:"forest",label:"森林",icon:"🌲"},{terrain:"water",label:"水域",icon:"🟦"},{terrain:"highland",label:"高地",icon:"⛰️"}],ts=["#00f0ff","#ff00c8","#00cc88","#ff8800","#6688ff","#cc44ff","#44dddd","#ff4466"];function jb({onBack:e}){const[n,t]=k.useReducer(gb,void 0,()=>cl()),a=k.useMemo(()=>({state:n,dispatch:t}),[n]);k.useEffect(()=>{function i(l){if((l.ctrlKey||l.metaKey)&&(l.key==="z"&&!l.shiftKey&&(l.preventDefault(),t({type:"UNDO"})),l.key==="z"&&l.shiftKey&&(l.preventDefault(),t({type:"REDO"})),l.key==="y"&&(l.preventDefault(),t({type:"REDO"})),l.key==="s"&&(l.preventDefault(),r())),!l.ctrlKey&&!l.metaKey&&!l.altKey){const d=parseInt(l.key)-1;d>=0&&d<dl.length&&t({type:"SET_TERRAIN",terrain:dl[d].terrain})}}return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[]);function r(){xb(n.map),t({type:"MARK_SAVED"})}function s(){n.isDirty&&!window.confirm("有未保存的更改，确定要退出吗？")||e()}return o.jsx(Ff.Provider,{value:a,children:o.jsxs("div",{className:"me__screen",children:[o.jsx(wb,{onBack:s,onSave:r}),o.jsx(Cb,{}),o.jsx(we,{id:"me-terrain",title:"地形画笔",initialPos:{x:8,y:56},width:200,minHeight:60,zIndex:20,children:o.jsx(Nb,{})}),o.jsx(we,{id:"me-props",title:"地图属性",initialPos:{x:8,y:380},width:200,minHeight:60,zIndex:19,children:o.jsx(Mb,{})}),o.jsx(we,{id:"me-zones",title:"出击区域",initialPos:{x:8,y:600},width:200,minHeight:60,zIndex:18,children:o.jsx(Tb,{})}),o.jsx("style",{children:Eb})]})})}function wb({onBack:e,onSave:n}){const{state:t,dispatch:a}=Ca(),[r,s]=k.useState(!1),i=k.useRef(null);function l(){t.isDirty&&!window.confirm("有未保存的更改，确定要新建吗？")||a({type:"NEW_MAP",width:7,height:11})}function d(){Ib(t.map)}function u(){var f;(f=i.current)==null||f.click()}function p(f){var m;const g=(m=f.target.files)==null?void 0:m[0];if(!g)return;const x=new FileReader;x.onload=()=>{const h=_b(x.result);h?a({type:"LOAD_MAP",map:h}):alert("无效的地图文件")},x.readAsText(g),f.target.value=""}return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"me__topbar",children:[o.jsx("button",{className:"me__btn",onClick:e,children:"← 返回"}),o.jsx("span",{className:"me__title",children:"地图编辑器"}),o.jsxs("span",{className:"me__map-name",children:[t.map.nameCn," (",t.map.height,"×",t.map.width,")",t.isDirty&&" *"]}),o.jsx("span",{style:{flex:1}}),o.jsx("button",{className:"me__btn",onClick:l,children:"新建"}),o.jsx("button",{className:"me__btn",onClick:()=>s(!0),children:"打开"}),o.jsx("button",{className:"me__btn me__btn--accent",onClick:n,children:"保存"}),o.jsx("button",{className:"me__btn",onClick:d,children:"导出"}),o.jsx("button",{className:"me__btn",onClick:u,children:"导入"}),o.jsx("input",{ref:i,type:"file",accept:".json",style:{display:"none"},onChange:p}),o.jsx("span",{className:"me__sep"}),o.jsx("button",{className:"me__btn",onClick:()=>a({type:"UNDO"}),disabled:t.undoStack.length===0,children:"撤销"}),o.jsx("button",{className:"me__btn",onClick:()=>a({type:"REDO"}),disabled:t.redoStack.length===0,children:"重做"}),o.jsx("button",{className:`me__btn${t.showCoords?" me__btn--active":""}`,onClick:()=>a({type:"TOGGLE_COORDS"}),children:"坐标"})]}),r&&o.jsx(Sb,{onClose:()=>s(!1)})]})}function Sb({onClose:e}){const{dispatch:n,state:t}=Ca(),[a]=k.useState(()=>hc());function r(l){if(t.isDirty&&!window.confirm("有未保存的更改，确定要打开吗？"))return;const d=vb(l);d&&(n({type:"LOAD_MAP",map:d}),e())}function s(l){if(t.isDirty&&!window.confirm("有未保存的更改，确定要打开吗？"))return;const d={...l,id:`custom_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,cells:l.cells.map(u=>u.map(p=>({...p}))),startZones:Object.fromEntries(Object.entries(l.startZones).map(([u,p])=>[u,p.map(f=>({...f}))]))};n({type:"LOAD_MAP",map:d}),e()}function i(l){window.confirm("确定删除此地图？")&&(bb(l),e())}return o.jsx("div",{className:"me__overlay",onClick:e,children:o.jsxs("div",{className:"me__dialog",onClick:l=>l.stopPropagation(),children:[o.jsx("h3",{children:"打开地图"}),a.length>0&&o.jsxs(o.Fragment,{children:[o.jsx("h4",{children:"自定义地图"}),o.jsx("div",{className:"me__dialog-list",children:a.map(l=>o.jsxs("div",{className:"me__dialog-item",children:[o.jsxs("span",{children:[l.nameCn," (",l.height,"×",l.width,")"]}),o.jsx("span",{className:"me__dialog-date",children:new Date(l.savedAt).toLocaleDateString()}),o.jsx("button",{className:"me__btn me__btn--sm",onClick:()=>r(l.id),children:"打开"}),o.jsx("button",{className:"me__btn me__btn--sm me__btn--danger",onClick:()=>i(l.id),children:"删除"})]},l.id))})]}),o.jsx("h4",{children:"内置地图 (作为模板)"}),o.jsx("div",{className:"me__dialog-list",children:Ze.map(l=>o.jsxs("div",{className:"me__dialog-item",children:[o.jsxs("span",{children:[l.nameCn," (",l.height,"×",l.width,")"]}),o.jsx("button",{className:"me__btn me__btn--sm",onClick:()=>s(l),children:"复制"})]},l.id))}),o.jsx("div",{className:"me__dialog-actions",children:o.jsx("button",{className:"me__btn",onClick:e,children:"取消"})})]})})}function Cb(){const{state:e,dispatch:n}=Ca(),t=k.useRef(null),[a,r]=k.useState({x:0,y:0,scale:1}),s=k.useRef(null),i=k.useRef(!1),l=k.useRef(!1),d=k.useRef(new Set),{map:u,activeTool:p,showCoords:f,selectedZoneTeam:g,brushSize:x}=e,{width:m,height:h}=u;k.useEffect(()=>{const C=t.current;if(!C)return;const A=C.clientWidth,S=C.clientHeight,z=m*ro,M=h*ro;if(!A||!S)return;const E=Math.max(ru,Math.min(1.5,Math.min(A/z,S/M)));r({x:(A-z*E)/2,y:(S-M*E)/2,scale:E})},[m,h]),k.useEffect(()=>{const C=t.current;if(!C)return;const A=S=>{S.preventDefault();const z=S.deltaY<0?ou:-ou;r(M=>({...M,scale:Math.min(kb,Math.max(ru,M.scale+z))}))};return C.addEventListener("wheel",A,{passive:!1}),()=>C.removeEventListener("wheel",A)},[]);const _=k.useCallback(C=>{C.button!==2&&(s.current={startX:C.clientX,startY:C.clientY,origX:a.x,origY:a.y},i.current=!1,l.current=!1,d.current.clear())},[a.x,a.y]),b=k.useCallback(C=>{if(!s.current)return;const A=C.clientX-s.current.startX,S=C.clientY-s.current.startY;!i.current&&Math.sqrt(A*A+S*S)>5&&(C.buttons===4||C.buttons===2?i.current=!0:p==="terrain"||p==="startZone"||p==="eraseZone"?l.current=!0:i.current=!0),i.current&&r(z=>({...z,x:s.current.origX+A,y:s.current.origY+S}))},[p]),v=k.useCallback(()=>{s.current=null,i.current=!1,l.current=!1,d.current.clear()},[]),y=k.useMemo(()=>{const C=new Map;for(const[A,S]of Object.entries(u.startZones)){const z=Number(A);for(const M of S)C.set(`${M.row},${M.col}`,z)}return C},[u.startZones]);function w(C,A){const S=`${C},${A}`;if(p==="terrain")if(x===1)d.current.has(S)||(d.current.add(S),n({type:"PAINT_CELL",row:C,col:A}));else{const z=[],M=Math.floor(x/2);for(let E=-M;E<=M;E++)for(let K=-M;K<=M;K++){const H=C+E,D=A+K;if(H>=0&&H<h&&D>=0&&D<m){const J=`${H},${D}`;d.current.has(J)||(d.current.add(J),z.push({row:H,col:D}))}}z.length&&n({type:"PAINT_AREA",cells:z})}else if(p==="startZone")n({type:"ADD_ZONE_CELL",team:g,position:{row:C,col:A}});else if(p==="eraseZone"){const z=y.get(S);z!==void 0&&n({type:"REMOVE_ZONE_CELL",team:z,position:{row:C,col:A}})}}const{x:T,y:$,scale:j}=a;return o.jsx("div",{className:"me__viewport",ref:t,onMouseDown:_,onMouseMove:b,onMouseUp:v,onMouseLeave:v,onContextMenu:C=>C.preventDefault(),children:o.jsx("div",{className:"me__grid",style:{transform:`translate(${T}px, ${$}px) scale(${j})`,transformOrigin:"top left",display:"grid",gridTemplateColumns:`repeat(${m}, ${ro}px)`,gridTemplateRows:`repeat(${h}, ${ro}px)`},children:u.cells.flatMap((C,A)=>C.map((S,z)=>{const M=oc(S),E=`${A},${z}`,K=y.get(E),H=K!==void 0?ts[K%ts.length]:"";return o.jsxs("div",{className:`me__cell${K!==void 0?" me__cell--zone":""}`,style:{backgroundImage:`url("${M}")`,backgroundSize:"cover",...K!==void 0?{borderColor:H,boxShadow:`inset 0 0 8px ${H}66`}:{}},onMouseDown:D=>{D.button===0&&!i.current&&w(A,z)},onMouseEnter:()=>{l.current&&w(A,z)},children:[S.terrain==="highland"&&o.jsxs("span",{className:"me__cell-elev",children:["+",S.elevation]}),f&&o.jsxs("span",{className:"me__cell-coord",children:[A,",",z]}),K!==void 0&&o.jsxs("span",{className:"me__cell-zone",style:{color:H},children:["Z",K]})]},E)}))})})}function Nb(){const{state:e,dispatch:n}=Ca();return o.jsxs("div",{className:"me__palette",children:[o.jsx("div",{className:"me__palette-grid",children:dl.map(({terrain:t,label:a,icon:r},s)=>o.jsxs("button",{className:`me__palette-btn${e.selectedTerrain===t&&e.activeTool==="terrain"?" me__palette-btn--active":""}`,onClick:()=>n({type:"SET_TERRAIN",terrain:t}),title:`${a} (${s+1})`,children:[r," ",a]},t))}),e.selectedTerrain==="highland"&&o.jsxs("div",{className:"me__sub-option",children:[o.jsx("label",{children:"高度:"}),[1,2,3].map(t=>o.jsxs("button",{className:`me__mini-btn${e.selectedElevation===t?" me__mini-btn--active":""}`,onClick:()=>n({type:"SET_ELEVATION",elevation:t}),children:["+",t]},t))]}),e.selectedTerrain!=="highland"&&e.selectedTerrain!=="plain"&&o.jsxs("div",{className:"me__sub-option",children:[o.jsx("label",{children:"变体:"}),[0,1,2,3].map(t=>o.jsx("button",{className:`me__mini-btn${e.selectedVariant===t?" me__mini-btn--active":""}`,onClick:()=>n({type:"SET_VARIANT",variant:t}),children:t},t))]}),o.jsxs("div",{className:"me__sub-option",children:[o.jsx("label",{children:"笔刷:"}),[1,2,3].map(t=>o.jsxs("button",{className:`me__mini-btn${e.brushSize===t?" me__mini-btn--active":""}`,onClick:()=>n({type:"SET_BRUSH_SIZE",size:t}),children:[t,"×",t]},t))]})]})}function Mb(){const{state:e,dispatch:n}=Ca(),{map:t}=e;return o.jsxs("div",{className:"me__props",children:[o.jsxs("label",{className:"me__prop-row",children:[o.jsx("span",{children:"名称(中)"}),o.jsx("input",{type:"text",value:t.nameCn,onChange:a=>n({type:"SET_MAP_META",nameCn:a.target.value})})]}),o.jsxs("label",{className:"me__prop-row",children:[o.jsx("span",{children:"名称(日)"}),o.jsx("input",{type:"text",value:t.nameJa,onChange:a=>n({type:"SET_MAP_META",nameJa:a.target.value})})]}),o.jsxs("div",{className:"me__prop-row",children:[o.jsx("span",{children:"尺寸"}),o.jsx("input",{type:"number",min:3,max:25,value:t.width,onChange:a=>n({type:"RESIZE_MAP",newWidth:Number(a.target.value),newHeight:t.height}),style:{width:50}}),"×",o.jsx("input",{type:"number",min:3,max:25,value:t.height,onChange:a=>n({type:"RESIZE_MAP",newWidth:t.width,newHeight:Number(a.target.value)}),style:{width:50}})]}),o.jsxs("label",{className:"me__prop-row",children:[o.jsx("span",{children:"最大玩家"}),o.jsx("select",{value:t.maxPlayers,onChange:a=>n({type:"SET_MAP_META",maxPlayers:Number(a.target.value)}),children:[2,3,4,6,8].map(a=>o.jsx("option",{value:a,children:a},a))})]}),o.jsxs("label",{className:"me__prop-row",children:[o.jsx("span",{children:"最大队伍"}),o.jsx("select",{value:t.maxTeams,onChange:a=>n({type:"SET_MAP_META",maxTeams:Number(a.target.value)}),children:Array.from({length:t.maxPlayers},(a,r)=>r+1).filter(a=>a>=2).map(a=>o.jsx("option",{value:a,children:a},a))})]})]})}function Tb(){const{state:e,dispatch:n}=Ca(),{map:t,activeTool:a,selectedZoneTeam:r}=e;return o.jsxs("div",{className:"me__zones",children:[o.jsxs("div",{className:"me__zones-tools",children:[o.jsx("button",{className:`me__btn me__btn--sm${a==="startZone"?" me__btn--active":""}`,onClick:()=>n({type:"SET_TOOL",tool:"startZone"}),children:"添加点"}),o.jsx("button",{className:`me__btn me__btn--sm${a==="eraseZone"?" me__btn--active":""}`,onClick:()=>n({type:"SET_TOOL",tool:"eraseZone"}),children:"删除点"})]}),Array.from({length:t.maxTeams},(s,i)=>i).map(s=>{const i=t.startZones[s]??[],l=ts[s%ts.length],d=r===s;return o.jsxs("div",{className:`me__zone-row${d?" me__zone-row--active":""}`,style:{borderLeftColor:l},onClick:()=>n({type:"SET_ZONE_TEAM",team:s}),children:[o.jsxs("span",{style:{color:l},children:["区域 ",s+1]}),o.jsxs("span",{className:"me__zone-count",children:[i.length," 点"]}),o.jsx("button",{className:"me__btn me__btn--sm me__btn--danger",onClick:u=>{u.stopPropagation(),n({type:"CLEAR_ZONE",team:s})},children:"清空"})]},s)})]})}const Eb=`
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
`;function Db(e){return e?`(${e.row},${e.col})`:"(无)"}function Kt(e){if(!e)return"(空)";const n=q(e.defId),t=(n==null?void 0:n.nameCn)??e.defId,a=e.destroyed?" [已摧毁]":"";return`${t}(${e.defId})${a}`}function zb(e,n){const t=e.players[n];if(!t)return`  ${n}: (不存在)`;const a=Q.find(s=>s.id===t.unitId),r=[];return r.push(`  ── ${n} ──`),r.push(`    机体: ${(a==null?void 0:a.nameCn)??t.unitId} (${t.unitId})`),r.push(`    位置: ${Db(t.position)}  朝向: ${t.facing}`),r.push(`    状态: ${t.isDefeated?"已击破":"存活"}`),r.push(`    手牌(${t.hand.length}): ${t.hand.map(s=>Kt(s)).join(", ")||"(无)"}`),r.push(`    阶段1配置: ${Kt(t.plotSeg1)}`),r.push(`    阶段2配置: ${Kt(t.plotSeg2)}`),r.push(`    辅助区(${t.auxiliary.length}): ${t.auxiliary.map(s=>Kt(s)).join(", ")||"(无)"}`),r.push(`    弃牌堆(${t.discard.length}): ${t.discard.map(s=>Kt(s)).join(", ")||"(无)"}`),r.push(`    摧毁区(${t.destroyedCards.length}): ${t.destroyedCards.map(s=>Kt(s)).join(", ")||"(无)"}`),r.push(`    卡组剩余: ${t.deck.filter(s=>!s.destroyed).length} 张`),r.join(`
`)}function $b(e){var t,a;const n=[];if(n.push("══════════════════════════════════════════"),n.push("  当前状态快照"),n.push("══════════════════════════════════════════"),n.push(`回合: ${e.roundNumber}`),n.push(`阶段: ${e.phase}`),n.push(`当前时机: ${e.currentTiming??"(无)"}`),n.push(`行动顺序: ${e.turnOrder.length>0?e.turnOrder.join(" → "):"(无)"}`),n.push(`布局步骤: ${e.plottingStep??"(无)"}`),n.push(`活跃玩家: ${e.activePlayer}`),n.push(`地图: ${((t=e.map)==null?void 0:t.id)??"(无)"}`),n.push(`地雷数: ${((a=e.mines)==null?void 0:a.length)??0}`),e.pendingDamage){const r=e.pendingDamage;n.push(`待处理伤害: 目标=${r.targetId}, 剩余=${r.remaining}, 来源=${r.source}, 攻击者=${r.attackerId??"(无)"}, 已选=${r.selectedInstanceIds.length}`)}n.push(""),n.push("── 玩家状态 ──");for(const r of e.playerIds)n.push(zb(e,r));return n.push(""),n.join(`
`)}function Gf(e,n){const t=new Date,a=t.toISOString().replace(/[:.]/g,"-").slice(0,19),r=[];r.push("╔══════════════════════════════════════════╗"),r.push("║   Embryo Machine — 全量游戏日志导出      ║"),r.push("╚══════════════════════════════════════════╝"),r.push(`导出时间: ${t.toLocaleString("zh-CN")}`),n!=null&&n.localPlayerId&&r.push(`本地玩家: ${n.localPlayerId}`),n!=null&&n.connectionStatus&&r.push(`连接状态: ${n.connectionStatus}`),r.push(""),r.push($b(e)),r.push("══════════════════════════════════════════"),r.push("  完整游戏日志 (按时间顺序)"),r.push("══════════════════════════════════════════");const s=e.log.filter(p=>!p.startsWith("[DBG]"));for(let p=0;p<s.length;p++)r.push(`[${String(p+1).padStart(4," ")}] ${s[p]}`);r.push(""),r.push(`── 共 ${s.length} 条日志 ──`);const i=r.join(`
`),l=new Blob([i],{type:"text/plain;charset=utf-8"}),d=URL.createObjectURL(l),u=document.createElement("a");u.href=d,u.download=`embryo-log-${a}.txt`,u.click(),URL.revokeObjectURL(d)}const su=[1e3,2e3,4e3,8e3,15e3];class Ab{constructor(n,t,a){qe(this,"ws",null);qe(this,"url");qe(this,"sessionId");qe(this,"onMessage");qe(this,"onStatus");qe(this,"reconnectAttempt",0);qe(this,"reconnectTimer",null);qe(this,"intentionallyClosed",!1);qe(this,"hasEverConnected",!1);this.url=n,this.sessionId=localStorage.getItem("embryo-session-id"),this.onMessage=t,this.onStatus=a}connect(){this.intentionallyClosed=!1,this.onStatus("connecting");const n=this.sessionId?`?sessionId=${this.sessionId}`:"";this.ws=new WebSocket(`${this.url}${n}`),this.ws.onopen=()=>{var t;if(this.intentionallyClosed){(t=this.ws)==null||t.close(),this.ws=null,this.onStatus("disconnected");return}this.hasEverConnected=!0,this.reconnectAttempt=0,this.onStatus("connected")},this.ws.onmessage=t=>{try{const a=JSON.parse(t.data);a.type==="SESSION_ID"&&(this.sessionId=a.sessionId,localStorage.setItem("embryo-session-id",a.sessionId)),this.onMessage(a)}catch{console.warn("[GameSocket] Failed to parse message:",t.data)}},this.ws.onclose=()=>{if(this.intentionallyClosed){this.onStatus("disconnected");return}this.hasEverConnected||(this.sessionId=null,localStorage.removeItem("embryo-session-id")),this.onStatus("reconnecting"),this.scheduleReconnect()},this.ws.onerror=()=>{}}send(n){var t;((t=this.ws)==null?void 0:t.readyState)===WebSocket.OPEN?this.ws.send(JSON.stringify(n)):console.warn("[GameSocket] Cannot send — not connected")}disconnect(){if(this.intentionallyClosed=!0,this.reconnectTimer&&(clearTimeout(this.reconnectTimer),this.reconnectTimer=null),this.ws){const n=this.ws.readyState;n===WebSocket.OPEN||n===WebSocket.CLOSING?(this.ws.close(),this.ws=null):n===WebSocket.CONNECTING&&(this.ws.onmessage=null,this.ws.onerror=null)}this.onStatus("disconnected")}clearSession(){this.sessionId=null,localStorage.removeItem("embryo-session-id")}get isConnected(){var n;return((n=this.ws)==null?void 0:n.readyState)===WebSocket.OPEN}scheduleReconnect(){const n=su[Math.min(this.reconnectAttempt,su.length-1)];this.reconnectAttempt++,this.reconnectTimer=setTimeout(()=>{this.reconnectTimer=null,this.connect()},n)}}const Hf=k.createContext(null);function Vb({serverUrl:e,children:n}){const[t,a]=k.useState(null),[r,s]=k.useState(null),[i,l]=k.useState(null),[d,u]=k.useState("disconnected"),[p,f]=k.useState(null),[g,x]=k.useState(null),[m,h]=k.useState([]),[_,b]=k.useState(null),[v,y]=k.useState(null),w=k.useRef(null),T=k.useRef(null),$=k.useRef(-1),j=k.useCallback(E=>{switch(E.type){case"SESSION_ID":break;case"ROOM_STATE":s(E.room),l(E.yourPlayerId);break;case"ROOM_LIST":h(E.rooms);break;case"GAME_STATE":{E.state.phase==="plotting"&&(T.current!=="plotting"||$.current!==E.state.roundNumber)&&f(null),T.current=E.state.phase,$.current=E.state.roundNumber,a(E.state),l(E.yourPlayerId),b(E.currentTurnPlayerId??null),y(E.turnDeadline??null);break}case"PLOTTING_STATUS":f({confirmed:E.confirmed,total:E.total});break;case"GAME_STARTED":break;case"RECONNECTED":s(E.room),a(E.state),l(E.yourPlayerId),b(E.currentTurnPlayerId??null),y(E.turnDeadline??null),T.current=E.state.phase,$.current=E.state.roundNumber;break;case"SPECTATE_STATE":a(E.state),s(E.room),l(null);break;case"ACTION_REJECTED":x(E.reason),setTimeout(()=>x(null),5e3);break;case"PLAYER_JOINED":case"PLAYER_LEFT":case"PLAYER_RECONNECTED":case"PLAYER_DISCONNECTED":break;case"ERROR":x(E.message),setTimeout(()=>x(null),5e3);break}},[]);k.useEffect(()=>{const E=new Ab(e,j,u);return w.current=E,E.connect(),()=>{E.clearSession(),E.disconnect(),w.current=null}},[e,j]);const C=k.useCallback(E=>{var K;(K=w.current)==null||K.send({type:"GAME_ACTION",action:E})},[]),A=k.useCallback(E=>{var K;(K=w.current)==null||K.send({type:"LOBBY_ACTION",action:E})},[]),S=k.useCallback(E=>{var K;(K=w.current)==null||K.send(E)},[]),z=k.useCallback(E=>q(E),[]),M={state:t,room:r,localPlayerId:i,dispatch:C,sendLobbyAction:A,send:S,getCard:z,connectionStatus:d,plottingStatus:p,isOnline:!0,lastError:g,roomList:m,currentTurnPlayerId:_,turnDeadline:v};return o.jsx(Hf.Provider,{value:M,children:n})}function xc(){const e=k.useContext(Hf);if(!e)throw new Error("useOnlineGame must be used within OnlineGameProvider");return e}function Pb({children:e}){const{state:n,localPlayerId:t,dispatch:a,getCard:r,plottingStatus:s,send:i,currentTurnPlayerId:l}=xc(),d=k.useCallback(g=>{if(g.type==="ADVANCE_TIMING"||g.type==="ADVANCE_PHASE"){i({type:"TIMING_DONE"});return}g.type==="START_PLOTTING"||g.type==="DRAW_CARDS"||a(g)},[a,i]);if(!n||!t)return null;let u=n;if(n.phase==="plotting"){const g=(s==null?void 0:s.confirmed.includes(t))??!1;u={...n,plottingStep:g?"complete":t}}const p={player1:t!=="player1",player2:t!=="player2",player1Difficulty:"easy",player2Difficulty:"easy",playerAI:Object.fromEntries(n.playerIds.map(g=>[g,g!==t])),playerDifficulty:Object.fromEntries(n.playerIds.map(g=>[g,"easy"]))},f={state:u,dispatch:d,rawDispatch:d,getCard:r,aiConfig:p,setAIConfig:()=>{},getReplayData:()=>null,autoSaveEnabled:!1,setAutoSaveEnabled:()=>{},exposureMode:!1,setExposureMode:()=>{},isOnline:!0,localPlayerId:t,currentTurnPlayerId:l};return o.jsx(ws.Provider,{value:f,children:e})}const Rb={lobby:"等待中",playing:"游戏中",finished:"已结束"};function Uf({onBack:e,onCreateRoom:n,onJoinRoom:t,roomList:a,onRefreshRooms:r,onSpectate:s}){const[i,l]=k.useState("create"),[d,u]=k.useState(()=>localStorage.getItem("embryo-player-name")??""),[p,f]=k.useState(""),[g,x]=k.useState(""),[m,h]=k.useState(2),[_,b]=k.useState(2),[v,y]=k.useState(Ze[0].id);function w(D){const J=[];for(let R=2;R<=D;R++)D%R===0&&J.push(R);return J}function T(D){h(D);const J=w(D);J.includes(_)||b(J[0]);const R=Ze.find(V=>V.id===v);if(!R||R.maxPlayers<D){const V=Ze.find(U=>U.maxPlayers>=D);V&&y(V.id)}}const[$,j]=k.useState(""),[C,A]=k.useState(!1),[S,z]=k.useState(0);function M(){const D=d.trim()||`Player_${Math.random().toString(36).slice(2,6)}`;return localStorage.setItem("embryo-player-name",D),D}function E(){n(M(),{maxPlayers:m,teamCount:_,mapId:v,turnTimeoutSeconds:S,password:C?$:void 0})}function K(){const D=p.trim().toUpperCase();D&&t(D,M(),g||void 0)}function H(D,J){f(D),J?(l("join"),x("")):t(D,M())}return o.jsxs("div",{className:"ol-screen",children:[o.jsxs("div",{className:"ol-center",children:[o.jsx("h1",{className:"ol-title",children:"联机对战"}),o.jsx("p",{className:"ol-subtitle",children:"创建、加入或浏览房间"}),o.jsx("div",{className:"ol-divider"}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"昵称"}),o.jsx("input",{className:"ol-input",value:d,onChange:D=>u(D.target.value),placeholder:"输入昵称…",maxLength:16})]}),o.jsxs("div",{className:"ol-tabs",children:[o.jsx("button",{className:`ol-tab${i==="create"?" ol-tab--active":""}`,onClick:()=>l("create"),children:"创建房间"}),o.jsx("button",{className:`ol-tab${i==="join"?" ol-tab--active":""}`,onClick:()=>l("join"),children:"加入房间"}),o.jsx("button",{className:`ol-tab${i==="browse"?" ol-tab--active":""}`,onClick:()=>{l("browse"),r==null||r()},children:"浏览房间"})]}),i==="create"&&o.jsxs("div",{className:"ol-panel",children:[o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"最大玩家数"}),o.jsx("select",{className:"ol-select",value:m,onChange:D=>T(+D.target.value),children:[2,3,4,5,6,7,8].map(D=>o.jsxs("option",{value:D,children:[D," 人"]},D))})]}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"队伍数量"}),o.jsx("select",{className:"ol-select",value:_,onChange:D=>b(+D.target.value),children:w(m).map(D=>o.jsxs("option",{value:D,children:[D," 队 (",m/D,"人/队)"]},D))})]}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"地图"}),o.jsx("select",{className:"ol-select",value:v,onChange:D=>y(D.target.value),children:Ze.filter(D=>D.maxPlayers>=m).map(D=>o.jsxs("option",{value:D.id,children:[D.nameCn," (",D.maxPlayers,"人)"]},D.id))})]}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"回合限时"}),o.jsxs("select",{className:"ol-select",value:S,onChange:D=>z(+D.target.value),children:[o.jsx("option",{value:0,children:"无限制"}),o.jsx("option",{value:30,children:"30 秒"}),o.jsx("option",{value:60,children:"60 秒"}),o.jsx("option",{value:90,children:"90 秒"}),o.jsx("option",{value:120,children:"120 秒"})]})]}),o.jsxs("label",{className:"ol-check",onClick:()=>A(!C),children:[o.jsx("span",{className:`ol-check__box${C?" ol-check__box--on":""}`,children:C?"✓":""}),o.jsx("span",{children:"设置房间密码"})]}),C&&o.jsx("div",{className:"ol-field",children:o.jsx("input",{className:"ol-input",value:$,onChange:D=>j(D.target.value),placeholder:"输入密码…",maxLength:20,type:"password"})}),o.jsx("button",{className:"ol-btn ol-btn--primary",onClick:E,children:"创建房间"})]}),i==="join"&&o.jsxs("div",{className:"ol-panel",children:[o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"房间号"}),o.jsx("input",{className:"ol-input ol-input--code",value:p,onChange:D=>f(D.target.value.toUpperCase()),placeholder:"输入6位房间号",maxLength:6})]}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"密码（若有）"}),o.jsx("input",{className:"ol-input",value:g,onChange:D=>x(D.target.value),placeholder:"无密码可留空",maxLength:20,type:"password"})]}),o.jsx("button",{className:"ol-btn ol-btn--primary",onClick:K,disabled:p.trim().length<1,children:"加入房间"})]}),i==="browse"&&o.jsxs("div",{className:"ol-panel",children:[o.jsxs("div",{className:"ol-browse-header",children:[o.jsx("span",{className:"ol-label",children:"在线房间"}),o.jsx("button",{className:"ol-refresh-btn",onClick:r,children:"刷新"})]}),!a||a.length===0?o.jsx("div",{className:"ol-empty",children:"暂无房间，创建一个吧"}):o.jsx("div",{className:"ol-room-list",children:a.map(D=>o.jsxs("div",{className:"ol-room-row",children:[o.jsx("span",{className:"ol-room-row__code",children:D.roomCode}),o.jsx("span",{className:"ol-room-row__host",children:D.hostName}),o.jsx("span",{className:`ol-room-row__status ol-room-row__status--${D.status}`,children:Rb[D.status]??D.status}),o.jsxs("span",{className:"ol-room-row__count",children:[D.playerCount,"/",D.maxPlayers]}),D.hasPassword&&o.jsx("span",{className:"ol-room-row__lock",title:"需要密码",children:"🔒"}),D.status==="lobby"?o.jsx("button",{className:"ol-room-row__join",onClick:()=>H(D.roomCode,D.hasPassword),children:"加入"}):o.jsx("button",{className:"ol-room-row__join",onClick:()=>s==null?void 0:s(D.roomCode),disabled:!s,children:"观战"})]},D.roomCode))})]}),o.jsx("button",{className:"ol-btn ol-btn--back",onClick:e,children:"返回主菜单"})]}),o.jsx("style",{children:Lb})]})}const Lb=`
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
`;function Ob({room:e,localPlayerId:n,connectionStatus:t,lastError:a,send:r,onLeave:s}){var $;const[i,l]=k.useState(""),d=e.slots.find(j=>j.playerId===n),u=n!=null&&n===(($=e.slots[0])==null?void 0:$.playerId),p=(d==null?void 0:d.isReady)??!1,f=e.slots.filter(j=>j.type!=="empty"),g=f.length>=2&&f.every(j=>j.isReady),x=e.slots.filter(j=>j.type!=="empty"&&j.playerId!==n).map(j=>j.unitId),m=k.useState(!1);k.useEffect(()=>{if(m[0]||!n)return;if(d!=null&&d.unitId&&d.unitId!=="TR"){l(d.unitId),m[1](!0);return}const j=Q.filter(C=>!x.includes(C.id));if(j.length>0){const C=j[Math.floor(Math.random()*j.length)];l(C.id),r({type:"LOBBY_ACTION",action:{type:"SELECT_UNIT",playerId:n,unitId:C.id}}),m[1](!0)}},[n]);function h(j){l(j),r({type:"LOBBY_ACTION",action:{type:"SELECT_UNIT",playerId:n,unitId:j}})}function _(){const j=Q.filter(A=>!x.includes(A.id)&&A.id!==i);if(j.length===0)return;const C=j[Math.floor(Math.random()*j.length)];h(C.id)}function b(){r({type:p?"UNREADY":"READY"})}function v(){r({type:"START_GAME"})}function y(j,C){r({type:"SET_SLOT_TYPE",playerId:j,slotType:C})}function w(j){r({type:"KICK_PLAYER",playerId:j})}function T(){r({type:"LEAVE_ROOM"}),s()}return o.jsxs("div",{className:"rm-screen",children:[o.jsxs("div",{className:"rm-center",children:[o.jsxs("div",{className:"rm-header",children:[o.jsx("h2",{className:"rm-room-title",children:"房间"}),o.jsx("div",{className:"rm-room-code",children:e.roomCode}),e.hasPassword&&o.jsx("span",{className:"rm-lock",title:"有密码",children:"🔒"}),o.jsx("div",{className:"rm-room-status",children:t==="connected"?o.jsx("span",{className:"rm-status rm-status--ok",children:"已连接"}):o.jsx("span",{className:"rm-status rm-status--warn",children:t})})]}),a&&o.jsx("div",{className:"rm-error",children:a}),o.jsx("div",{className:"rm-slots",children:e.slots.map((j,C)=>o.jsx(Kb,{slot:j,isLocal:j.playerId===n,isHost:u,onSetSlotType:y,onKick:w},C))}),o.jsxs("div",{className:"rm-section",children:[o.jsxs("div",{className:"rm-section-header",children:[o.jsx("div",{className:"rm-section-title",children:"选择机体"}),o.jsx("button",{className:"rm-random-btn",onClick:_,title:"随机选择机体",children:"🎲 随机"})]}),o.jsx("div",{className:"rm-unit-grid",children:Q.map(j=>{const C=i||(d==null?void 0:d.unitId),A=x.includes(j.id),S=C===j.id;return o.jsxs("button",{className:`rm-unit-btn${S?" rm-unit-btn--selected":""}${A?" rm-unit-btn--taken":""}`,onClick:()=>!A&&h(j.id),disabled:A,title:`${j.nameCn} (${j.nameJa}) - MOV:${j.movement} EVA:${j.evasion} ASL:${j.assault} INIT:${j.initiative}`,children:[o.jsx("span",{className:"rm-unit-code",children:j.id}),o.jsx("span",{className:"rm-unit-name",children:j.nameCn})]},j.id)})})]}),o.jsxs("div",{className:"rm-actions",children:[o.jsx("button",{className:`rm-btn${p?" rm-btn--unready":" rm-btn--ready"}`,onClick:b,children:p?"取消准备":"准备"}),u&&o.jsx("button",{className:"rm-btn rm-btn--start",onClick:v,disabled:!g,title:g?"开始游戏":"等待所有玩家准备",children:"开始游戏"}),o.jsx("button",{className:"rm-btn rm-btn--leave",onClick:T,children:"离开房间"})]})]}),o.jsx("style",{children:Jb})]})}function Kb({slot:e,isLocal:n,isHost:t,onSetSlotType:a,onKick:r}){const s=Q.find(l=>l.id===e.unitId);if(e.type==="empty")return o.jsxs("div",{className:"rm-slot rm-slot--empty",children:[o.jsxs("span",{className:"rm-slot__index",children:["#",e.index+1]}),o.jsx("span",{className:"rm-slot__name",children:"空位"}),t&&o.jsx("button",{className:"rm-slot__toggle",onClick:()=>a(e.playerId,"ai"),children:"+AI"})]});const i=Mn[e.team%Mn.length][0];return o.jsxs("div",{className:`rm-slot${n?" rm-slot--local":""}${e.isConnected?"":" rm-slot--dc"}`,children:[o.jsx("span",{className:"rm-slot__color-dot",style:{background:i},title:`队伍 ${e.team+1}`}),o.jsxs("span",{className:"rm-slot__index",children:["#",e.index+1]}),o.jsx("span",{className:"rm-slot__type-badge",children:e.type==="ai"?"AI":""}),o.jsxs("span",{className:"rm-slot__name",children:[e.playerName||e.playerId,n&&" (你)"]}),o.jsx("span",{className:"rm-slot__unit",children:s?s.nameCn:e.unitId||"未选择"}),o.jsx("span",{className:`rm-slot__ready${e.isReady?" rm-slot__ready--yes":""}`,children:e.isReady?"已准备":"未准备"}),!e.isConnected&&o.jsx("span",{className:"rm-slot__dc",children:"断线"}),t&&e.type==="ai"&&o.jsx("button",{className:"rm-slot__toggle",onClick:()=>a(e.playerId,"empty"),children:"移除"}),t&&!n&&e.type==="human"&&r&&o.jsx("button",{className:"rm-slot__toggle rm-slot__toggle--kick",onClick:()=>r(e.playerId),children:"踢出"})]})}const Jb=`
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
`;function Bb(){return"wss://embryo-machine.onrender.com/"}const Fb=Bb();function Gb({onBack:e}){const[n]=k.useState(Fb),[t,a]=k.useState("lobby"),[r,s]=k.useState(null),i=k.useCallback((f,g)=>{s({type:"create",playerName:f,settings:g}),a("connected")},[]),l=k.useCallback((f,g,x)=>{s({type:"join",roomCode:f,playerName:g,password:x}),a("connected")},[]),d=k.useCallback(f=>{s({type:"spectate",roomCode:f}),a("connected")},[]),u=k.useCallback(()=>{t!=="connected"&&(s({type:"browse"}),a("connected"))},[t]),p=k.useCallback(()=>{s(null),a("lobby")},[]);return t==="lobby"?o.jsx(Uf,{onBack:e,onCreateRoom:i,onJoinRoom:l,onRefreshRooms:u,onSpectate:d}):o.jsx(Vb,{serverUrl:n,children:o.jsx(Hb,{pendingAction:r,onBack:e,onDisconnect:p})})}function Hb({pendingAction:e,onDisconnect:n}){const{state:t,room:a,localPlayerId:r,send:s,connectionStatus:i,lastError:l,roomList:d}=xc(),[u,p]=k.useState(!1);return!u&&i==="connected"&&e&&(e.type==="create"?s({type:"CREATE_ROOM",playerName:e.playerName,settings:e.settings}):e.type==="join"?s({type:"JOIN_ROOM",roomCode:e.roomCode,playerName:e.playerName,password:e.password}):e.type==="spectate"?s({type:"SPECTATE_ROOM",roomCode:e.roomCode}):e.type==="browse"&&s({type:"LIST_ROOMS"}),p(!0)),(e==null?void 0:e.type)==="browse"&&!a&&!t?o.jsx(Uf,{onBack:n,onCreateRoom:(f,g)=>{s({type:"CREATE_ROOM",playerName:f,settings:g})},onJoinRoom:(f,g,x)=>{s({type:"JOIN_ROOM",roomCode:f,playerName:g,password:x})},roomList:d,onRefreshRooms:()=>s({type:"LIST_ROOMS"})}):i==="connecting"?o.jsxs("div",{className:"og-connecting",children:[o.jsx("div",{className:"og-spinner"}),o.jsx("p",{children:"正在连接服务器…"}),o.jsx("button",{className:"ol-btn ol-btn--back",onClick:n,children:"取消"}),o.jsx("style",{children:kr})]}):a&&!t?o.jsx(Ob,{room:a,localPlayerId:r,connectionStatus:i,lastError:l,send:s,onLeave:n}):t&&r?o.jsx(ys,{children:o.jsx(Pb,{children:o.jsx(Ub,{})})}):t&&!r?o.jsx(Wb,{state:t,room:a,onLeave:n}):o.jsxs("div",{className:"og-connecting",children:[o.jsx("div",{className:"og-spinner"}),o.jsx("p",{children:"等待服务器响应…"}),l&&o.jsx("div",{className:"rm-error",children:l}),o.jsx("button",{className:"ol-btn ol-btn--back",onClick:n,children:"返回"}),o.jsx("style",{children:kr})]})}function Ub(){const e=$r(),{dispatch:n,aiConfig:t}=je(),{localPlayerId:a,connectionStatus:r,plottingStatus:s,lastError:i,turnDeadline:l}=xc(),[d,u]=k.useState(null);k.useEffect(()=>{if(!l){u(null);return}const j=()=>{const A=Math.max(0,Math.ceil((l-Date.now())/1e3));u(A)};j();const C=setInterval(j,500);return()=>clearInterval(C)},[l]),k.useEffect(()=>{e.phase==="pregame"&&n({type:"START_PLOTTING"})},[e.phase,n]);const[p,f]=k.useState([{id:"map",zIndex:10},{id:"log",zIndex:11},{id:"mecha",zIndex:12},{id:"plot",zIndex:100}]),g=k.useCallback(j=>{f(C=>{const A=Math.max(...C.map(H=>H.zIndex)),S=C.find(H=>H.id===j);if(S&&S.zIndex===A)return C;const z=[...C].sort((H,D)=>H.zIndex-D.zIndex),M=10,E=new Map;let K=0;for(const H of z)H.id!==j&&E.set(H.id,M+K++);return E.set(j,M+z.length-1),C.map(H=>({...H,zIndex:E.get(H.id)??H.zIndex}))})},[]),x=j=>{var C;return((C=p.find(A=>A.id===j))==null?void 0:C.zIndex)??10},m=k.useCallback(j=>[],[]),h=Ss(),_=h?window.innerWidth:Math.max(400,Math.min(window.innerWidth*.6,620)),b=300,v=window.innerWidth-b-16,y=h?window.innerWidth:380,w=window.innerWidth-y-16,T=e.phase==="plotting"&&e.plottingStep!=="complete"&&e.plottingStep!==null&&!e.plottingStep.startsWith("transition_to_")&&!$e(t,e.plottingStep),$=o.jsxs("div",{className:"og-status-bar",children:[o.jsxs("span",{className:"og-round",children:["第 ",e.roundNumber," 回合"]}),o.jsx("span",{className:"og-phase",children:Wf(e.phase)}),e.currentTiming&&o.jsxs("span",{className:"og-timing",children:["▶ ",Zf(e.currentTiming)]}),!h&&e.turnOrder.length>0&&o.jsxs("span",{className:"og-debug-info",title:"当前行动顺序",children:["[",e.turnOrder.map(j=>j.replace("player","P")).join("→"),"]"]}),d!==null&&d>0&&o.jsxs("span",{className:`og-countdown${d<=10?" og-countdown--warn":""}`,children:["⏱ ",d,"s"]}),o.jsx("span",{style:{flex:1}}),s&&e.phase==="plotting"&&o.jsxs("span",{className:"og-plotting",children:["布局进度: ",s.confirmed.length,"/",s.total]}),!h&&o.jsx("button",{className:"og-export-btn",onClick:()=>Gf(e,{localPlayerId:a??void 0,connectionStatus:r}),title:"导出全量日志（含调试状态快照）",children:"📋 导出日志"}),o.jsx("span",{className:`og-conn og-conn--${r}`,children:r==="connected"?"在线":r}),a&&o.jsx("span",{className:"og-pid",children:a.replace("player","P")})]});return h?o.jsxs("div",{className:"game-screen game-screen--mobile",children:[$,i&&o.jsx("div",{className:"rm-error",style:{margin:"4px 12px 0"},children:i}),o.jsx("div",{className:"game-screen__board-mobile",children:o.jsx(Ia,{})}),o.jsxs("div",{className:"game-screen__panels-mobile",children:[T&&o.jsx(we,{id:"plot",title:"布局阶段",initialPos:{x:0,y:0},width:y,children:o.jsx(aa,{})}),o.jsx(we,{id:"mecha",title:"机体信息",initialPos:{x:0,y:0},defaultMinimized:!0,children:o.jsx(ns,{})}),o.jsx(we,{id:"log",title:"行动日志",initialPos:{x:0,y:0},defaultMinimized:!0,children:o.jsx(jr,{})})]}),o.jsx(Qo,{}),o.jsx(qo,{}),o.jsx("style",{children:kr})]}):o.jsxs("div",{className:"game-screen",style:{position:"relative",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[$,i&&o.jsx("div",{className:"rm-error",style:{margin:"4px 16px 0"},children:i}),o.jsxs("div",{style:{position:"relative",flex:1},children:[o.jsx(we,{id:"map",title:"地图",initialPos:{x:16,y:8},width:_,minHeight:300,zIndex:x("map"),onFocus:g,siblingRects:m("map"),children:o.jsx("div",{style:{height:"calc(100vh - 100px)",minHeight:300},children:o.jsx(Ia,{})})}),o.jsx(we,{id:"log",title:"行动日志",initialPos:{x:v,y:8},width:b,height:260,minHeight:120,zIndex:x("log"),onFocus:g,siblingRects:m("log"),children:o.jsx(jr,{})}),o.jsx(we,{id:"mecha",title:"机体信息",initialPos:{x:v,y:280},width:b,minHeight:160,zIndex:x("mecha"),onFocus:g,siblingRects:m("mecha"),children:o.jsx(ns,{})}),T&&o.jsx(we,{id:"plot",title:"布局阶段",initialPos:{x:w,y:8},width:y,height:620,minHeight:80,zIndex:x("plot"),onFocus:g,siblingRects:m("plot"),children:o.jsx(aa,{})})]}),o.jsx(Qo,{}),o.jsx(qo,{}),o.jsx("style",{children:kr})]})}function Wb({state:e,room:n,onLeave:t}){const a={player1:!0,player2:!0,player1Difficulty:"easy",player2Difficulty:"easy",playerAI:Object.fromEntries(e.playerIds.map(i=>[i,!0])),playerDifficulty:Object.fromEntries(e.playerIds.map(i=>[i,"easy"]))},r=()=>{},s={state:e,dispatch:r,rawDispatch:r,getCard:i=>q(i),aiConfig:a,setAIConfig:()=>{},getReplayData:()=>null,autoSaveEnabled:!1,setAutoSaveEnabled:()=>{},exposureMode:!1,setExposureMode:()=>{},isOnline:!0,localPlayerId:null,currentTurnPlayerId:null};return o.jsx(ws.Provider,{value:s,children:o.jsx(ys,{children:o.jsxs("div",{className:"game-screen",style:{position:"relative",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[o.jsxs("div",{className:"og-status-bar",children:[o.jsx("span",{className:"og-spectate-badge",children:"观战中"}),o.jsxs("span",{className:"og-round",children:["第 ",e.roundNumber," 回合"]}),o.jsx("span",{className:"og-phase",children:Wf(e.phase)}),e.currentTiming&&o.jsxs("span",{className:"og-timing",children:["▶ ",Zf(e.currentTiming)]}),o.jsx("span",{style:{flex:1}}),n&&o.jsx("span",{className:"og-room-code-badge",children:n.roomCode}),o.jsx("button",{className:"rm-btn rm-btn--leave",onClick:t,children:"离开"})]}),o.jsxs("div",{style:{position:"relative",flex:1},children:[o.jsx(we,{id:"map",title:"地图",initialPos:{x:16,y:8},width:Math.max(400,Math.min(window.innerWidth*.7,700)),minHeight:300,children:o.jsx("div",{style:{height:"calc(100vh - 100px)",minHeight:300},children:o.jsx(Ia,{})})}),o.jsx(we,{id:"log",title:"行动日志",initialPos:{x:window.innerWidth-316,y:8},width:300,height:400,minHeight:120,children:o.jsx(jr,{})})]}),o.jsx("style",{children:kr})]})})})}function Wf(e){return{pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"主要阶段 1",action_seg2:"主要阶段 2",cleanup:"清理阶段",game_over:"游戏结束"}[e]??e}function Zf(e){return{movement:"移动",ranged:"射击",melee:"近战",special:"特殊"}[e]??e}const kr=`
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
`;function Zb(){const e=$r(),{rawDispatch:n,aiConfig:t,setAIConfig:a,getReplayData:r,autoSaveEnabled:s,setAutoSaveEnabled:i,exposureMode:l,setExposureMode:d}=je(),[u,p]=k.useState("home"),[f,g]=k.useState("map"),[x,m]=k.useState(!0),[h,_]=k.useState(2),[b,v]=k.useState(2),[y,w]=k.useState(null),[T,$]=k.useState({loaded:0,total:0}),j=k.useRef(null),C=k.useCallback(()=>{ge.init(),g("map"),p("game")},[]),A=k.useCallback(()=>{const E=zf().length;$({loaded:0,total:E}),w("asking")},[]),S=k.useCallback(()=>{w("loading");const E=new AbortController;j.current=E,Zx((K,H)=>{$({loaded:K,total:H}),K>=H&&setTimeout(()=>w(null),600)},E.signal)},[]),z=k.useCallback(()=>{var E;(E=j.current)==null||E.abort(),w(null)},[]);function M(E){n({type:"LOAD_GAME",state:E.gameState}),a(E.aiConfig),p("game")}return u==="rules"?o.jsx(Kv,{onBack:()=>p((e.phase==="setup","game"))}):u==="data"?o.jsx(Bv,{onBack:()=>p("game")}):u==="load"?o.jsx(Qd,{mode:"load",onBack:()=>p("home"),onLoad:M}):u==="replay"?o.jsx(sb,{onBack:()=>p("home")}):u==="save"?o.jsx(Qd,{mode:"save",onBack:()=>p("game"),currentState:e,aiConfig:t}):u==="mapEditor"?o.jsx(jb,{onBack:()=>p("home")}):u==="online"?o.jsx(Gb,{onBack:()=>p("home")}):u==="settings"?o.jsxs(o.Fragment,{children:[y!==null&&o.jsx(Jx,{phase:y,loaded:T.loaded,total:T.total,onConfirm:S,onSkip:z}),o.jsx(Ox,{onBack:()=>p("home"),soundEnabled:ge.enabled,onToggleSound:()=>{ge.enabled=!ge.enabled,$(E=>({...E}))},soundVolume:ge.volume,onVolumeChange:E=>{ge.volume=E,ge.init(),ge.uiBlip(),$(K=>({...K}))},exposureMode:l,onToggleExposure:()=>d(!l),autoFill:x,onToggleAutoFill:()=>m(!x),onCacheAssets:A})]}):u==="home"?o.jsx(Rx,{onStart:C,onOnlinePlay:()=>{ge.init(),p("online")},onViewRules:()=>p("rules"),onViewData:()=>p("data"),onLoadGame:()=>p("load"),onReplay:()=>p("replay"),onMapEditor:()=>p("mapEditor"),onSettings:()=>p("settings")}):e.phase==="setup"?f==="map"?o.jsx(Sx,{onNext:()=>g("units"),onBack:()=>p("home"),playerCount:h,setPlayerCount:_,teamCount:b,setTeamCount:v}):f==="units"?o.jsx(Mx,{onNext:()=>g("spawn"),onBack:()=>g("map"),autoFill:x}):o.jsx(Vx,{onBack:()=>g("units")}):e.phase==="game_over"?o.jsx(Qb,{onHome:()=>{p("home"),g("map")},onSaveReplay:()=>{const E=r();if(!E)return;const K=e.players.player1.isDefeated,H=e.players.player2.isDefeated,D=K&&H?"draw":K?"player2":H?"player1":null;try{hx(E.initialState,E.actions,D),alert("录像已保存！")}catch{alert("保存失败，存储空间可能不足。")}}}):o.jsx(Yb,{onSave:()=>p("save"),autoSaveEnabled:s,onToggleAutoSave:()=>i(!s)})}function Yb({onSave:e,autoSaveEnabled:n,onToggleAutoSave:t}){const a=$r(),{dispatch:r,exposureMode:s,getCard:i,aiConfig:l}=je();k.useEffect(()=>{a.phase==="pregame"&&r({type:"START_PLOTTING"})},[a.phase,r]);const d=k.useRef(a.phase);k.useEffect(()=>{const $=d.current;if(d.current=a.phase,!!s&&$==="plotting"&&a.phase==="action_seg1"){const j=C=>{if(!C)return"无";const A=i(C.defId);return A?A.nameCn:C.defId};for(const C of a.playerIds){const A=a.players[C];if(A.isDefeated)continue;const S=`P${C.replace("player","")}`;r({type:"ADD_LOG",message:`[暴露] ${S} 布局: 段1=${j(A.plotSeg1)} / 段2=${j(A.plotSeg2)}`})}}},[a.phase]);const[u,p]=k.useState([{id:"map",zIndex:10},{id:"log",zIndex:11},{id:"mecha",zIndex:12},{id:"plot",zIndex:100}]),f=k.useRef(new Map),g=k.useCallback($=>{p(j=>{const C=Math.max(...j.map(K=>K.zIndex)),A=j.find(K=>K.id===$);if(A&&A.zIndex===C)return j;const S=[...j].sort((K,H)=>K.zIndex-H.zIndex),z=10,M=new Map;let E=0;for(const K of S)K.id!==$&&M.set(K.id,z+E++);return M.set($,z+S.length-1),j.map(K=>({...K,zIndex:M.get(K.id)??K.zIndex}))})},[]),x=$=>{var j;return((j=u.find(C=>C.id===$))==null?void 0:j.zIndex)??10},m=k.useCallback($=>{const j=[];return f.current.forEach((C,A)=>{A!==$&&C&&j.push(C.getBoundingClientRect())}),j},[]),h=Ss(),_=h?window.innerWidth:Math.max(400,Math.min(window.innerWidth*.6,620)),b=300,v=window.innerWidth-b-16,y=36,w=h?window.innerWidth:380,T=window.innerWidth-w-16;if(h){const $=a.phase==="plotting"&&a.plottingStep!=="complete"&&a.plottingStep!==null&&!a.plottingStep.startsWith("transition_to_")&&!$e(l,a.plottingStep),j=a.phase==="plotting"&&a.plottingStep!=="complete"&&a.plottingStep!==null&&!a.plottingStep.startsWith("transition_to_")&&$e(l,a.plottingStep);return o.jsxs("div",{className:"game-screen game-screen--mobile",children:[o.jsx("div",{className:"game-screen__header",style:{flexShrink:0},children:o.jsx(iu,{onSave:e,autoSaveEnabled:n,onToggleAutoSave:t})}),o.jsxs("div",{className:"game-screen__board-mobile",children:[o.jsx(Ia,{}),o.jsx(lu,{})]}),o.jsxs("div",{className:"game-screen__panels-mobile",children:[$&&o.jsx(we,{id:"plot",title:"布局阶段",initialPos:{x:0,y:0},width:w,children:o.jsx(aa,{})}),j&&o.jsx("div",{style:{width:0,height:0,overflow:"hidden",opacity:0,pointerEvents:"none"},children:o.jsx(aa,{})}),o.jsx(we,{id:"mecha",title:"机体信息",initialPos:{x:0,y:0},defaultMinimized:!0,children:o.jsx(ns,{})}),o.jsx(we,{id:"log",title:"行动日志",initialPos:{x:0,y:0},defaultMinimized:!0,children:o.jsx(jr,{})})]}),o.jsx(Qo,{}),o.jsx(qo,{}),o.jsx("style",{children:cu})]})}return o.jsxs("div",{className:"game-screen",style:{position:"relative",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[o.jsx("div",{className:"game-screen__header",style:{flexShrink:0},children:o.jsx(iu,{onSave:e,autoSaveEnabled:n,onToggleAutoSave:t})}),o.jsxs("div",{style:{position:"relative",flex:1},children:[o.jsx(we,{id:"map",title:"地图",initialPos:{x:16,y:8},width:_,minHeight:300,zIndex:x("map"),onFocus:g,siblingRects:m("map"),children:o.jsx("div",{style:{height:`calc(100vh - ${y+60}px)`,minHeight:300},children:o.jsx(Ia,{})})}),o.jsx(we,{id:"log",title:"行动日志",initialPos:{x:v,y:8},width:b,height:260,minHeight:120,zIndex:x("log"),onFocus:g,siblingRects:m("log"),children:o.jsx(jr,{})}),o.jsx(we,{id:"mecha",title:"机体信息",initialPos:{x:v,y:280},width:b,minHeight:160,zIndex:x("mecha"),onFocus:g,siblingRects:m("mecha"),children:o.jsx(ns,{})}),a.phase==="plotting"&&a.plottingStep!=="complete"&&a.plottingStep!==null&&!a.plottingStep.startsWith("transition_to_")&&!$e(l,a.plottingStep)&&o.jsx(we,{id:"plot",title:"布局阶段",initialPos:{x:T,y:8},width:w,height:620,minHeight:80,zIndex:x("plot"),onFocus:g,siblingRects:m("plot"),children:o.jsx(aa,{})}),a.phase==="plotting"&&a.plottingStep!=="complete"&&a.plottingStep!==null&&!a.plottingStep.startsWith("transition_to_")&&$e(l,a.plottingStep)&&o.jsx("div",{style:{position:"absolute",width:0,height:0,overflow:"hidden",opacity:0,pointerEvents:"none"},children:o.jsx(aa,{})})]}),o.jsx(Qo,{}),o.jsx(qo,{}),o.jsx(lu,{}),o.jsx("style",{children:cu})]})}function iu({onSave:e,autoSaveEnabled:n,onToggleAutoSave:t}){const a=$r(),r={pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"行动阶段 [主要阶段 1]",action_seg2:"行动阶段 [主要阶段 2]",cleanup:"清理阶段",game_over:"游戏结束"},s={movement:"移动",ranged:"射击",melee:"近战",special:"特殊"};return o.jsxs("div",{className:"phase-bar",children:[o.jsxs("span",{className:"phase-bar__round",children:["第 ",a.roundNumber," 回合"]}),o.jsx("span",{className:"phase-bar__phase",children:r[a.phase]??a.phase}),a.currentTiming&&o.jsxs("span",{className:"phase-bar__timing",children:["▶ ",s[a.currentTiming]??a.currentTiming]}),o.jsx("span",{style:{flex:1}}),o.jsx("button",{className:"phase-bar__autosave-btn",onClick:t,title:n?"自动存档已开启（点击关闭）":"自动存档已关闭（点击开启）",children:n?"💾 自动":"💾 关"}),o.jsx("button",{className:"phase-bar__save-btn",onClick:e,title:"保存游戏",children:"💾 保存"}),o.jsx("button",{className:"phase-bar__save-btn",onClick:()=>Gf(a),title:"导出全量日志（含调试状态快照）",children:"📋 日志"})]})}function Xb(e){return e.startsWith("[DBG]")?"log-panel__entry log-panel__entry--debug":e.startsWith("===")?"log-panel__entry log-panel__entry--round-start":e.startsWith("---")?"log-panel__entry log-panel__entry--round-end":e.includes("发动")||e.includes("攻击")?"log-panel__entry log-panel__entry--attack":e.includes("摧毁")||e.includes("连锁")||e.includes("诱爆")?"log-panel__entry log-panel__entry--damage":e.includes("移动到")?"log-panel__entry log-panel__entry--move":e.includes("获胜")||e.includes("击破")||e.includes("平局")?"log-panel__entry log-panel__entry--victory":"log-panel__entry"}function jr(){const e=$r();return o.jsx("div",{className:"log-panel",children:o.jsx("div",{className:"log-panel__entries",children:[...e.log].filter(n=>!n.startsWith("[DBG]")).reverse().map((n,t)=>o.jsx("div",{className:Xb(n),children:n},t))})})}function Qb({onHome:e,onSaveReplay:n}){const{state:t,dispatch:a}=je(),r=t.log[t.log.length-1]??"游戏结束",s=t.players.player1.isDefeated,i=t.players.player2.isDefeated,l=s&&i?"双方同时击破":s?"玩家 2 获胜":"玩家 1 获胜";function d(){a({type:"RESET_GAME"}),e()}return o.jsxs("div",{className:"gameover-screen",children:[o.jsx("div",{className:"gameover-icon",children:"💥"}),o.jsx("h1",{className:"gameover-title",children:l}),o.jsx("p",{className:"gameover-sub",children:r}),o.jsxs("div",{className:"gameover-actions",children:[o.jsx("button",{className:"gameover-restart",onClick:d,children:"返回主菜单"}),o.jsx("button",{className:"gameover-save-replay",onClick:n,children:"🎬 保存录像"})]}),o.jsx("style",{children:e1})]})}function lu(){const{isAnimating:e,skipAnimation:n}=Dr();return e?o.jsx("button",{className:"skip-anim-btn",onClick:n,children:"⏩ 跳过"}):null}function qb(){return o.jsx(ys,{children:o.jsx(Df,{children:o.jsx(Zb,{})})})}const cu=`
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
`,e1=`
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
`;ii.createRoot(document.getElementById("root")).render(o.jsx(gm.StrictMode,{children:o.jsx(qb,{})}));

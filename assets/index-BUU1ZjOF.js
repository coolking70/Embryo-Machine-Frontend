var Qf=Object.defineProperty;var qf=(e,n,t)=>n in e?Qf(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var qe=(e,n,t)=>qf(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function em(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var uu={exports:{}},rs={},pu={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sr=Symbol.for("react.element"),nm=Symbol.for("react.portal"),tm=Symbol.for("react.fragment"),am=Symbol.for("react.strict_mode"),rm=Symbol.for("react.profiler"),om=Symbol.for("react.provider"),sm=Symbol.for("react.context"),im=Symbol.for("react.forward_ref"),lm=Symbol.for("react.suspense"),cm=Symbol.for("react.memo"),dm=Symbol.for("react.lazy"),bc=Symbol.iterator;function um(e){return e===null||typeof e!="object"?null:(e=bc&&e[bc]||e["@@iterator"],typeof e=="function"?e:null)}var fu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mu=Object.assign,gu={};function ka(e,n,t){this.props=e,this.context=n,this.refs=gu,this.updater=t||fu}ka.prototype.isReactComponent={};ka.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ka.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hu(){}hu.prototype=ka.prototype;function fl(e,n,t){this.props=e,this.context=n,this.refs=gu,this.updater=t||fu}var ml=fl.prototype=new hu;ml.constructor=fl;mu(ml,ka.prototype);ml.isPureReactComponent=!0;var yc=Array.isArray,xu=Object.prototype.hasOwnProperty,gl={current:null},vu={key:!0,ref:!0,__self:!0,__source:!0};function bu(e,n,t){var a,r={},s=null,i=null;if(n!=null)for(a in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(s=""+n.key),n)xu.call(n,a)&&!vu.hasOwnProperty(a)&&(r[a]=n[a]);var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){for(var d=Array(l),u=0;u<l;u++)d[u]=arguments[u+2];r.children=d}if(e&&e.defaultProps)for(a in l=e.defaultProps,l)r[a]===void 0&&(r[a]=l[a]);return{$$typeof:Sr,type:e,key:s,ref:i,props:r,_owner:gl.current}}function pm(e,n){return{$$typeof:Sr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function hl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sr}function fm(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var _c=/\/+/g;function Ms(e,n){return typeof e=="object"&&e!==null&&e.key!=null?fm(""+e.key):n.toString(36)}function so(e,n,t,a,r){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Sr:case nm:i=!0}}if(i)return i=e,r=r(i),e=a===""?"."+Ms(i,0):a,yc(r)?(t="",e!=null&&(t=e.replace(_c,"$&/")+"/"),so(r,n,t,"",function(u){return u})):r!=null&&(hl(r)&&(r=pm(r,t+(!r.key||i&&i.key===r.key?"":(""+r.key).replace(_c,"$&/")+"/")+e)),n.push(r)),1;if(i=0,a=a===""?".":a+":",yc(e))for(var l=0;l<e.length;l++){s=e[l];var d=a+Ms(s,l);i+=so(s,n,t,d,r)}else if(d=um(e),typeof d=="function")for(e=d.call(e),l=0;!(s=e.next()).done;)s=s.value,d=a+Ms(s,l++),i+=so(s,n,t,d,r);else if(s==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function Vr(e,n,t){if(e==null)return e;var a=[],r=0;return so(e,a,"","",function(s){return n.call(t,s,r++)}),a}function mm(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},io={transition:null},gm={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:io,ReactCurrentOwner:gl};function yu(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:Vr,forEach:function(e,n,t){Vr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Vr(e,function(){n++}),n},toArray:function(e){return Vr(e,function(n){return n})||[]},only:function(e){if(!hl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};te.Component=ka;te.Fragment=tm;te.Profiler=rm;te.PureComponent=fl;te.StrictMode=am;te.Suspense=lm;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gm;te.act=yu;te.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=mu({},e.props),r=e.key,s=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(s=n.ref,i=gl.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in n)xu.call(n,d)&&!vu.hasOwnProperty(d)&&(a[d]=n[d]===void 0&&l!==void 0?l[d]:n[d])}var d=arguments.length-2;if(d===1)a.children=t;else if(1<d){l=Array(d);for(var u=0;u<d;u++)l[u]=arguments[u+2];a.children=l}return{$$typeof:Sr,type:e.type,key:r,ref:s,props:a,_owner:i}};te.createContext=function(e){return e={$$typeof:sm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:om,_context:e},e.Consumer=e};te.createElement=bu;te.createFactory=function(e){var n=bu.bind(null,e);return n.type=e,n};te.createRef=function(){return{current:null}};te.forwardRef=function(e){return{$$typeof:im,render:e}};te.isValidElement=hl;te.lazy=function(e){return{$$typeof:dm,_payload:{_status:-1,_result:e},_init:mm}};te.memo=function(e,n){return{$$typeof:cm,type:e,compare:n===void 0?null:n}};te.startTransition=function(e){var n=io.transition;io.transition={};try{e()}finally{io.transition=n}};te.unstable_act=yu;te.useCallback=function(e,n){return Fe.current.useCallback(e,n)};te.useContext=function(e){return Fe.current.useContext(e)};te.useDebugValue=function(){};te.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};te.useEffect=function(e,n){return Fe.current.useEffect(e,n)};te.useId=function(){return Fe.current.useId()};te.useImperativeHandle=function(e,n,t){return Fe.current.useImperativeHandle(e,n,t)};te.useInsertionEffect=function(e,n){return Fe.current.useInsertionEffect(e,n)};te.useLayoutEffect=function(e,n){return Fe.current.useLayoutEffect(e,n)};te.useMemo=function(e,n){return Fe.current.useMemo(e,n)};te.useReducer=function(e,n,t){return Fe.current.useReducer(e,n,t)};te.useRef=function(e){return Fe.current.useRef(e)};te.useState=function(e){return Fe.current.useState(e)};te.useSyncExternalStore=function(e,n,t){return Fe.current.useSyncExternalStore(e,n,t)};te.useTransition=function(){return Fe.current.useTransition()};te.version="18.3.1";pu.exports=te;var j=pu.exports;const hm=em(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm=j,vm=Symbol.for("react.element"),bm=Symbol.for("react.fragment"),ym=Object.prototype.hasOwnProperty,_m=xm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Im={key:!0,ref:!0,__self:!0,__source:!0};function _u(e,n,t){var a,r={},s=null,i=null;t!==void 0&&(s=""+t),n.key!==void 0&&(s=""+n.key),n.ref!==void 0&&(i=n.ref);for(a in n)ym.call(n,a)&&!Im.hasOwnProperty(a)&&(r[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps,n)r[a]===void 0&&(r[a]=n[a]);return{$$typeof:vm,type:e,key:s,ref:i,props:r,_owner:_m.current}}rs.Fragment=bm;rs.jsx=_u;rs.jsxs=_u;uu.exports=rs;var o=uu.exports,ci={},Iu={exports:{}},on={},ku={exports:{}},ju={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(O,$){var J=O.length;O.push($);e:for(;0<J;){var K=J-1>>>1,G=O[K];if(0<r(G,$))O[K]=$,O[J]=G,J=K;else break e}}function t(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var $=O[0],J=O.pop();if(J!==$){O[0]=J;e:for(var K=0,G=O.length,W=G>>>1;K<W;){var Q=2*(K+1)-1,ee=O[Q],le=Q+1,de=O[le];if(0>r(ee,J))le<G&&0>r(de,ee)?(O[K]=de,O[le]=J,K=le):(O[K]=ee,O[Q]=J,K=Q);else if(le<G&&0>r(de,J))O[K]=de,O[le]=J,K=le;else break e}}return $}function r(O,$){var J=O.sortIndex-$.sortIndex;return J!==0?J:O.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var d=[],u=[],p=1,m=null,g=3,x=!1,h=!1,f=!1,_=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var $=t(u);$!==null;){if($.callback===null)a(u);else if($.startTime<=O)a(u),$.sortIndex=$.expirationTime,n(d,$);else break;$=t(u)}}function w(O){if(f=!1,y(O),!h)if(t(d)!==null)h=!0,V(T);else{var $=t(u);$!==null&&R(w,$.startTime-O)}}function T(O,$){h=!1,f&&(f=!1,b(C),C=-1),x=!0;var J=g;try{for(y($),m=t(d);m!==null&&(!(m.expirationTime>$)||O&&!z());){var K=m.callback;if(typeof K=="function"){m.callback=null,g=m.priorityLevel;var G=K(m.expirationTime<=$);$=e.unstable_now(),typeof G=="function"?m.callback=G:m===t(d)&&a(d),y($)}else a(d);m=t(d)}if(m!==null)var W=!0;else{var Q=t(u);Q!==null&&R(w,Q.startTime-$),W=!1}return W}finally{m=null,g=J,x=!1}}var D=!1,k=null,C=-1,A=5,S=-1;function z(){return!(e.unstable_now()-S<A)}function M(){if(k!==null){var O=e.unstable_now();S=O;var $=!0;try{$=k(!0,O)}finally{$?E():(D=!1,k=null)}}else D=!1}var E;if(typeof v=="function")E=function(){v(M)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,U=L.port2;L.port1.onmessage=M,E=function(){U.postMessage(null)}}else E=function(){_(M,0)};function V(O){k=O,D||(D=!0,E())}function R(O,$){C=_(function(){O(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){h||x||(h=!0,V(T))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(d)},e.unstable_next=function(O){switch(g){case 1:case 2:case 3:var $=3;break;default:$=g}var J=g;g=$;try{return O()}finally{g=J}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,$){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var J=g;g=O;try{return $()}finally{g=J}},e.unstable_scheduleCallback=function(O,$,J){var K=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?K+J:K):J=K,O){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=J+G,O={id:p++,callback:$,priorityLevel:O,startTime:J,expirationTime:G,sortIndex:-1},J>K?(O.sortIndex=J,n(u,O),t(d)===null&&O===t(u)&&(f?(b(C),C=-1):f=!0,R(w,J-K))):(O.sortIndex=G,n(d,O),h||x||(h=!0,V(T))),O},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(O){var $=g;return function(){var J=g;g=$;try{return O.apply(this,arguments)}finally{g=J}}}})(ju);ku.exports=ju;var km=ku.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm=j,rn=km;function H(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wu=new Set,nr={};function zt(e,n){pa(e,n),pa(e+"Capture",n)}function pa(e,n){for(nr[e]=n,e=0;e<n.length;e++)wu.add(n[e])}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),di=Object.prototype.hasOwnProperty,wm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ic={},kc={};function Sm(e){return di.call(kc,e)?!0:di.call(Ic,e)?!1:wm.test(e)?kc[e]=!0:(Ic[e]=!0,!1)}function Cm(e,n,t,a){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Nm(e,n,t,a){if(n===null||typeof n>"u"||Cm(e,n,t,a))return!0;if(a)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ge(e,n,t,a,r,s,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=s,this.removeEmptyString=i}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$e[e]=new Ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];$e[n]=new Ge(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){$e[e]=new Ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$e[e]=new Ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$e[e]=new Ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){$e[e]=new Ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){$e[e]=new Ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){$e[e]=new Ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){$e[e]=new Ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var xl=/[\-:]([a-z])/g;function vl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(xl,vl);$e[n]=new Ge(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(xl,vl);$e[n]=new Ge(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(xl,vl);$e[n]=new Ge(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){$e[e]=new Ge(e,1,!1,e.toLowerCase(),null,!1,!1)});$e.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){$e[e]=new Ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function bl(e,n,t,a){var r=$e.hasOwnProperty(n)?$e[n]:null;(r!==null?r.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Nm(n,t,r,a)&&(t=null),a||r===null?Sm(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,a=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,a?e.setAttributeNS(a,n,t):e.setAttribute(n,t))))}var Un=jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pr=Symbol.for("react.element"),Ft=Symbol.for("react.portal"),Gt=Symbol.for("react.fragment"),yl=Symbol.for("react.strict_mode"),ui=Symbol.for("react.profiler"),Su=Symbol.for("react.provider"),Cu=Symbol.for("react.context"),_l=Symbol.for("react.forward_ref"),pi=Symbol.for("react.suspense"),fi=Symbol.for("react.suspense_list"),Il=Symbol.for("react.memo"),Yn=Symbol.for("react.lazy"),Nu=Symbol.for("react.offscreen"),jc=Symbol.iterator;function Ta(e){return e===null||typeof e!="object"?null:(e=jc&&e[jc]||e["@@iterator"],typeof e=="function"?e:null)}var be=Object.assign,Ts;function Oa(e){if(Ts===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ts=n&&n[1]||""}return`
`+Ts+e}var Es=!1;function Ds(e,n){if(!e||Es)return"";Es=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var a=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){a=u}e.call(n.prototype)}else{try{throw Error()}catch(u){a=u}e()}}catch(u){if(u&&a&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=a.stack.split(`
`),i=r.length-1,l=s.length-1;1<=i&&0<=l&&r[i]!==s[l];)l--;for(;1<=i&&0<=l;i--,l--)if(r[i]!==s[l]){if(i!==1||l!==1)do if(i--,l--,0>l||r[i]!==s[l]){var d=`
`+r[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=l);break}}}finally{Es=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Oa(e):""}function Mm(e){switch(e.tag){case 5:return Oa(e.type);case 16:return Oa("Lazy");case 13:return Oa("Suspense");case 19:return Oa("SuspenseList");case 0:case 2:case 15:return e=Ds(e.type,!1),e;case 11:return e=Ds(e.type.render,!1),e;case 1:return e=Ds(e.type,!0),e;default:return""}}function mi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gt:return"Fragment";case Ft:return"Portal";case ui:return"Profiler";case yl:return"StrictMode";case pi:return"Suspense";case fi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cu:return(e.displayName||"Context")+".Consumer";case Su:return(e._context.displayName||"Context")+".Provider";case _l:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Il:return n=e.displayName||null,n!==null?n:mi(e.type)||"Memo";case Yn:n=e._payload,e=e._init;try{return mi(e(n))}catch{}}return null}function Tm(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mi(n);case 8:return n===yl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ut(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Em(e){var n=Mu(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(i){a=""+i,s.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Rr(e){e._valueTracker||(e._valueTracker=Em(e))}function Tu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Mu(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function _o(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gi(e,n){var t=n.checked;return be({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function wc(e,n){var t=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;t=ut(n.value!=null?n.value:t),e._wrapperState={initialChecked:a,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Eu(e,n){n=n.checked,n!=null&&bl(e,"checked",n,!1)}function hi(e,n){Eu(e,n);var t=ut(n.value),a=n.type;if(t!=null)a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?xi(e,n.type,t):n.hasOwnProperty("defaultValue")&&xi(e,n.type,ut(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Sc(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function xi(e,n,t){(n!=="number"||_o(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ka=Array.isArray;function ra(e,n,t,a){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&a&&(e[t].defaultSelected=!0)}else{for(t=""+ut(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function vi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(H(91));return be({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cc(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(H(92));if(Ka(t)){if(1<t.length)throw Error(H(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ut(t)}}function Du(e,n){var t=ut(n.value),a=ut(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),a!=null&&(e.defaultValue=""+a)}function Nc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function zu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bi(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?zu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Lr,Au=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,a,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,a,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Lr=Lr||document.createElement("div"),Lr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function tr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dm=["Webkit","ms","Moz","O"];Object.keys(Fa).forEach(function(e){Dm.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Fa[n]=Fa[e]})});function $u(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Fa.hasOwnProperty(e)&&Fa[e]?(""+n).trim():n+"px"}function Vu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var a=t.indexOf("--")===0,r=$u(t,n[t],a);t==="float"&&(t="cssFloat"),a?e.setProperty(t,r):e[t]=r}}var zm=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yi(e,n){if(n){if(zm[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(H(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(H(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(H(61))}if(n.style!=null&&typeof n.style!="object")throw Error(H(62))}}function _i(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ii=null;function kl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ki=null,oa=null,sa=null;function Mc(e){if(e=Mr(e)){if(typeof ki!="function")throw Error(H(280));var n=e.stateNode;n&&(n=cs(n),ki(e.stateNode,e.type,n))}}function Pu(e){oa?sa?sa.push(e):sa=[e]:oa=e}function Ru(){if(oa){var e=oa,n=sa;if(sa=oa=null,Mc(e),n)for(e=0;e<n.length;e++)Mc(n[e])}}function Lu(e,n){return e(n)}function Ou(){}var zs=!1;function Ku(e,n,t){if(zs)return e(n,t);zs=!0;try{return Lu(e,n,t)}finally{zs=!1,(oa!==null||sa!==null)&&(Ou(),Ru())}}function ar(e,n){var t=e.stateNode;if(t===null)return null;var a=cs(t);if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(H(231,n,typeof t));return t}var ji=!1;if(Bn)try{var Ea={};Object.defineProperty(Ea,"passive",{get:function(){ji=!0}}),window.addEventListener("test",Ea,Ea),window.removeEventListener("test",Ea,Ea)}catch{ji=!1}function Am(e,n,t,a,r,s,i,l,d){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(p){this.onError(p)}}var Ga=!1,Io=null,ko=!1,wi=null,$m={onError:function(e){Ga=!0,Io=e}};function Vm(e,n,t,a,r,s,i,l,d){Ga=!1,Io=null,Am.apply($m,arguments)}function Pm(e,n,t,a,r,s,i,l,d){if(Vm.apply(this,arguments),Ga){if(Ga){var u=Io;Ga=!1,Io=null}else throw Error(H(198));ko||(ko=!0,wi=u)}}function At(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ju(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Tc(e){if(At(e)!==e)throw Error(H(188))}function Rm(e){var n=e.alternate;if(!n){if(n=At(e),n===null)throw Error(H(188));return n!==e?null:e}for(var t=e,a=n;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(a=r.return,a!==null){t=a;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Tc(r),e;if(s===a)return Tc(r),n;s=s.sibling}throw Error(H(188))}if(t.return!==a.return)t=r,a=s;else{for(var i=!1,l=r.child;l;){if(l===t){i=!0,t=r,a=s;break}if(l===a){i=!0,a=r,t=s;break}l=l.sibling}if(!i){for(l=s.child;l;){if(l===t){i=!0,t=s,a=r;break}if(l===a){i=!0,a=s,t=r;break}l=l.sibling}if(!i)throw Error(H(189))}}if(t.alternate!==a)throw Error(H(190))}if(t.tag!==3)throw Error(H(188));return t.stateNode.current===t?e:n}function Bu(e){return e=Rm(e),e!==null?Fu(e):null}function Fu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Fu(e);if(n!==null)return n;e=e.sibling}return null}var Gu=rn.unstable_scheduleCallback,Ec=rn.unstable_cancelCallback,Lm=rn.unstable_shouldYield,Om=rn.unstable_requestPaint,Ie=rn.unstable_now,Km=rn.unstable_getCurrentPriorityLevel,jl=rn.unstable_ImmediatePriority,Hu=rn.unstable_UserBlockingPriority,jo=rn.unstable_NormalPriority,Jm=rn.unstable_LowPriority,Uu=rn.unstable_IdlePriority,os=null,Tn=null;function Bm(e){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(os,e,void 0,(e.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:Hm,Fm=Math.log,Gm=Math.LN2;function Hm(e){return e>>>=0,e===0?32:31-(Fm(e)/Gm|0)|0}var Or=64,Kr=4194304;function Ja(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function wo(e,n){var t=e.pendingLanes;if(t===0)return 0;var a=0,r=e.suspendedLanes,s=e.pingedLanes,i=t&268435455;if(i!==0){var l=i&~r;l!==0?a=Ja(l):(s&=i,s!==0&&(a=Ja(s)))}else i=t&~r,i!==0?a=Ja(i):s!==0&&(a=Ja(s));if(a===0)return 0;if(n!==0&&n!==a&&!(n&r)&&(r=a&-a,s=n&-n,r>=s||r===16&&(s&4194240)!==0))return n;if(a&4&&(a|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)t=31-In(n),r=1<<t,a|=e[t],n&=~r;return a}function Um(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wm(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-In(s),l=1<<i,d=r[i];d===-1?(!(l&t)||l&a)&&(r[i]=Um(l,n)):d<=n&&(e.expiredLanes|=l),s&=~l}}function Si(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Wu(){var e=Or;return Or<<=1,!(Or&4194240)&&(Or=64),e}function As(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Cr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-In(n),e[n]=t}function Zm(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-In(t),s=1<<r;n[r]=0,a[r]=-1,e[r]=-1,t&=~s}}function wl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-In(t),r=1<<a;r&n|e[a]&n&&(e[a]|=n),t&=~r}}var ce=0;function Zu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Yu,Sl,Xu,Qu,qu,Ci=!1,Jr=[],at=null,rt=null,ot=null,rr=new Map,or=new Map,Qn=[],Ym="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dc(e,n){switch(e){case"focusin":case"focusout":at=null;break;case"dragenter":case"dragleave":rt=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":rr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":or.delete(n.pointerId)}}function Da(e,n,t,a,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:s,targetContainers:[r]},n!==null&&(n=Mr(n),n!==null&&Sl(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Xm(e,n,t,a,r){switch(n){case"focusin":return at=Da(at,e,n,t,a,r),!0;case"dragenter":return rt=Da(rt,e,n,t,a,r),!0;case"mouseover":return ot=Da(ot,e,n,t,a,r),!0;case"pointerover":var s=r.pointerId;return rr.set(s,Da(rr.get(s)||null,e,n,t,a,r)),!0;case"gotpointercapture":return s=r.pointerId,or.set(s,Da(or.get(s)||null,e,n,t,a,r)),!0}return!1}function ep(e){var n=yt(e.target);if(n!==null){var t=At(n);if(t!==null){if(n=t.tag,n===13){if(n=Ju(t),n!==null){e.blockedOn=n,qu(e.priority,function(){Xu(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ni(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);Ii=a,t.target.dispatchEvent(a),Ii=null}else return n=Mr(t),n!==null&&Sl(n),e.blockedOn=t,!1;n.shift()}return!0}function zc(e,n,t){lo(e)&&t.delete(n)}function Qm(){Ci=!1,at!==null&&lo(at)&&(at=null),rt!==null&&lo(rt)&&(rt=null),ot!==null&&lo(ot)&&(ot=null),rr.forEach(zc),or.forEach(zc)}function za(e,n){e.blockedOn===n&&(e.blockedOn=null,Ci||(Ci=!0,rn.unstable_scheduleCallback(rn.unstable_NormalPriority,Qm)))}function sr(e){function n(r){return za(r,e)}if(0<Jr.length){za(Jr[0],e);for(var t=1;t<Jr.length;t++){var a=Jr[t];a.blockedOn===e&&(a.blockedOn=null)}}for(at!==null&&za(at,e),rt!==null&&za(rt,e),ot!==null&&za(ot,e),rr.forEach(n),or.forEach(n),t=0;t<Qn.length;t++)a=Qn[t],a.blockedOn===e&&(a.blockedOn=null);for(;0<Qn.length&&(t=Qn[0],t.blockedOn===null);)ep(t),t.blockedOn===null&&Qn.shift()}var ia=Un.ReactCurrentBatchConfig,So=!0;function qm(e,n,t,a){var r=ce,s=ia.transition;ia.transition=null;try{ce=1,Cl(e,n,t,a)}finally{ce=r,ia.transition=s}}function eg(e,n,t,a){var r=ce,s=ia.transition;ia.transition=null;try{ce=4,Cl(e,n,t,a)}finally{ce=r,ia.transition=s}}function Cl(e,n,t,a){if(So){var r=Ni(e,n,t,a);if(r===null)Fs(e,n,a,Co,t),Dc(e,a);else if(Xm(r,e,n,t,a))a.stopPropagation();else if(Dc(e,a),n&4&&-1<Ym.indexOf(e)){for(;r!==null;){var s=Mr(r);if(s!==null&&Yu(s),s=Ni(e,n,t,a),s===null&&Fs(e,n,a,Co,t),s===r)break;r=s}r!==null&&a.stopPropagation()}else Fs(e,n,a,null,t)}}var Co=null;function Ni(e,n,t,a){if(Co=null,e=kl(a),e=yt(e),e!==null)if(n=At(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ju(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Co=e,null}function np(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Km()){case jl:return 1;case Hu:return 4;case jo:case Jm:return 16;case Uu:return 536870912;default:return 16}default:return 16}}var nt=null,Nl=null,co=null;function tp(){if(co)return co;var e,n=Nl,t=n.length,a,r="value"in nt?nt.value:nt.textContent,s=r.length;for(e=0;e<t&&n[e]===r[e];e++);var i=t-e;for(a=1;a<=i&&n[t-a]===r[s-a];a++);return co=r.slice(e,1<a?1-a:void 0)}function uo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Br(){return!0}function Ac(){return!1}function sn(e){function n(t,a,r,s,i){this._reactName=t,this._targetInst=r,this.type=a,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Br:Ac,this.isPropagationStopped=Ac,this}return be(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Br)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Br)},persist:function(){},isPersistent:Br}),n}var ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ml=sn(ja),Nr=be({},ja,{view:0,detail:0}),ng=sn(Nr),$s,Vs,Aa,ss=be({},Nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Aa&&(Aa&&e.type==="mousemove"?($s=e.screenX-Aa.screenX,Vs=e.screenY-Aa.screenY):Vs=$s=0,Aa=e),$s)},movementY:function(e){return"movementY"in e?e.movementY:Vs}}),$c=sn(ss),tg=be({},ss,{dataTransfer:0}),ag=sn(tg),rg=be({},Nr,{relatedTarget:0}),Ps=sn(rg),og=be({},ja,{animationName:0,elapsedTime:0,pseudoElement:0}),sg=sn(og),ig=be({},ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),lg=sn(ig),cg=be({},ja,{data:0}),Vc=sn(cg),dg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ug={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=pg[e])?!!n[e]:!1}function Tl(){return fg}var mg=be({},Nr,{key:function(e){if(e.key){var n=dg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=uo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ug[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tl,charCode:function(e){return e.type==="keypress"?uo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?uo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gg=sn(mg),hg=be({},ss,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pc=sn(hg),xg=be({},Nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tl}),vg=sn(xg),bg=be({},ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),yg=sn(bg),_g=be({},ss,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ig=sn(_g),kg=[9,13,27,32],El=Bn&&"CompositionEvent"in window,Ha=null;Bn&&"documentMode"in document&&(Ha=document.documentMode);var jg=Bn&&"TextEvent"in window&&!Ha,ap=Bn&&(!El||Ha&&8<Ha&&11>=Ha),Rc=" ",Lc=!1;function rp(e,n){switch(e){case"keyup":return kg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function op(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ht=!1;function wg(e,n){switch(e){case"compositionend":return op(n);case"keypress":return n.which!==32?null:(Lc=!0,Rc);case"textInput":return e=n.data,e===Rc&&Lc?null:e;default:return null}}function Sg(e,n){if(Ht)return e==="compositionend"||!El&&rp(e,n)?(e=tp(),co=Nl=nt=null,Ht=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ap&&n.locale!=="ko"?null:n.data;default:return null}}var Cg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Cg[e.type]:n==="textarea"}function sp(e,n,t,a){Pu(a),n=No(n,"onChange"),0<n.length&&(t=new Ml("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var Ua=null,ir=null;function Ng(e){xp(e,0)}function is(e){var n=Zt(e);if(Tu(n))return e}function Mg(e,n){if(e==="change")return n}var ip=!1;if(Bn){var Rs;if(Bn){var Ls="oninput"in document;if(!Ls){var Kc=document.createElement("div");Kc.setAttribute("oninput","return;"),Ls=typeof Kc.oninput=="function"}Rs=Ls}else Rs=!1;ip=Rs&&(!document.documentMode||9<document.documentMode)}function Jc(){Ua&&(Ua.detachEvent("onpropertychange",lp),ir=Ua=null)}function lp(e){if(e.propertyName==="value"&&is(ir)){var n=[];sp(n,ir,e,kl(e)),Ku(Ng,n)}}function Tg(e,n,t){e==="focusin"?(Jc(),Ua=n,ir=t,Ua.attachEvent("onpropertychange",lp)):e==="focusout"&&Jc()}function Eg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return is(ir)}function Dg(e,n){if(e==="click")return is(n)}function zg(e,n){if(e==="input"||e==="change")return is(n)}function Ag(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var wn=typeof Object.is=="function"?Object.is:Ag;function lr(e,n){if(wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var r=t[a];if(!di.call(n,r)||!wn(e[r],n[r]))return!1}return!0}function Bc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fc(e,n){var t=Bc(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Bc(t)}}function cp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?cp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function dp(){for(var e=window,n=_o();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=_o(e.document)}return n}function Dl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function $g(e){var n=dp(),t=e.focusedElem,a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&cp(t.ownerDocument.documentElement,t)){if(a!==null&&Dl(t)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,s=Math.min(a.start,r);a=a.end===void 0?s:Math.min(a.end,r),!e.extend&&s>a&&(r=a,a=s,s=r),r=Fc(t,s);var i=Fc(t,a);r&&i&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),s>a?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vg=Bn&&"documentMode"in document&&11>=document.documentMode,Ut=null,Mi=null,Wa=null,Ti=!1;function Gc(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ti||Ut==null||Ut!==_o(a)||(a=Ut,"selectionStart"in a&&Dl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Wa&&lr(Wa,a)||(Wa=a,a=No(Mi,"onSelect"),0<a.length&&(n=new Ml("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Ut)))}function Fr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Wt={animationend:Fr("Animation","AnimationEnd"),animationiteration:Fr("Animation","AnimationIteration"),animationstart:Fr("Animation","AnimationStart"),transitionend:Fr("Transition","TransitionEnd")},Os={},up={};Bn&&(up=document.createElement("div").style,"AnimationEvent"in window||(delete Wt.animationend.animation,delete Wt.animationiteration.animation,delete Wt.animationstart.animation),"TransitionEvent"in window||delete Wt.transitionend.transition);function ls(e){if(Os[e])return Os[e];if(!Wt[e])return e;var n=Wt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in up)return Os[e]=n[t];return e}var pp=ls("animationend"),fp=ls("animationiteration"),mp=ls("animationstart"),gp=ls("transitionend"),hp=new Map,Hc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mt(e,n){hp.set(e,n),zt(n,[e])}for(var Ks=0;Ks<Hc.length;Ks++){var Js=Hc[Ks],Pg=Js.toLowerCase(),Rg=Js[0].toUpperCase()+Js.slice(1);mt(Pg,"on"+Rg)}mt(pp,"onAnimationEnd");mt(fp,"onAnimationIteration");mt(mp,"onAnimationStart");mt("dblclick","onDoubleClick");mt("focusin","onFocus");mt("focusout","onBlur");mt(gp,"onTransitionEnd");pa("onMouseEnter",["mouseout","mouseover"]);pa("onMouseLeave",["mouseout","mouseover"]);pa("onPointerEnter",["pointerout","pointerover"]);pa("onPointerLeave",["pointerout","pointerover"]);zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zt("onBeforeInput",["compositionend","keypress","textInput","paste"]);zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ba));function Uc(e,n,t){var a=e.type||"unknown-event";e.currentTarget=t,Pm(a,n,void 0,e),e.currentTarget=null}function xp(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],r=a.event;a=a.listeners;e:{var s=void 0;if(n)for(var i=a.length-1;0<=i;i--){var l=a[i],d=l.instance,u=l.currentTarget;if(l=l.listener,d!==s&&r.isPropagationStopped())break e;Uc(r,l,u),s=d}else for(i=0;i<a.length;i++){if(l=a[i],d=l.instance,u=l.currentTarget,l=l.listener,d!==s&&r.isPropagationStopped())break e;Uc(r,l,u),s=d}}}if(ko)throw e=wi,ko=!1,wi=null,e}function fe(e,n){var t=n[$i];t===void 0&&(t=n[$i]=new Set);var a=e+"__bubble";t.has(a)||(vp(n,e,2,!1),t.add(a))}function Bs(e,n,t){var a=0;n&&(a|=4),vp(t,e,a,n)}var Gr="_reactListening"+Math.random().toString(36).slice(2);function cr(e){if(!e[Gr]){e[Gr]=!0,wu.forEach(function(t){t!=="selectionchange"&&(Lg.has(t)||Bs(t,!1,e),Bs(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Gr]||(n[Gr]=!0,Bs("selectionchange",!1,n))}}function vp(e,n,t,a){switch(np(n)){case 1:var r=qm;break;case 4:r=eg;break;default:r=Cl}t=r.bind(null,n,t,e),r=void 0,!ji||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function Fs(e,n,t,a,r){var s=a;if(!(n&1)&&!(n&2)&&a!==null)e:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var l=a.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(i===4)for(i=a.return;i!==null;){var d=i.tag;if((d===3||d===4)&&(d=i.stateNode.containerInfo,d===r||d.nodeType===8&&d.parentNode===r))return;i=i.return}for(;l!==null;){if(i=yt(l),i===null)return;if(d=i.tag,d===5||d===6){a=s=i;continue e}l=l.parentNode}}a=a.return}Ku(function(){var u=s,p=kl(t),m=[];e:{var g=hp.get(e);if(g!==void 0){var x=Ml,h=e;switch(e){case"keypress":if(uo(t)===0)break e;case"keydown":case"keyup":x=gg;break;case"focusin":h="focus",x=Ps;break;case"focusout":h="blur",x=Ps;break;case"beforeblur":case"afterblur":x=Ps;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=$c;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=ag;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=vg;break;case pp:case fp:case mp:x=sg;break;case gp:x=yg;break;case"scroll":x=ng;break;case"wheel":x=Ig;break;case"copy":case"cut":case"paste":x=lg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Pc}var f=(n&4)!==0,_=!f&&e==="scroll",b=f?g!==null?g+"Capture":null:g;f=[];for(var v=u,y;v!==null;){y=v;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,b!==null&&(w=ar(v,b),w!=null&&f.push(dr(v,w,y)))),_)break;v=v.return}0<f.length&&(g=new x(g,h,null,t,p),m.push({event:g,listeners:f}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&t!==Ii&&(h=t.relatedTarget||t.fromElement)&&(yt(h)||h[Fn]))break e;if((x||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,x?(h=t.relatedTarget||t.toElement,x=u,h=h?yt(h):null,h!==null&&(_=At(h),h!==_||h.tag!==5&&h.tag!==6)&&(h=null)):(x=null,h=u),x!==h)){if(f=$c,w="onMouseLeave",b="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(f=Pc,w="onPointerLeave",b="onPointerEnter",v="pointer"),_=x==null?g:Zt(x),y=h==null?g:Zt(h),g=new f(w,v+"leave",x,t,p),g.target=_,g.relatedTarget=y,w=null,yt(p)===u&&(f=new f(b,v+"enter",h,t,p),f.target=y,f.relatedTarget=_,w=f),_=w,x&&h)n:{for(f=x,b=h,v=0,y=f;y;y=Lt(y))v++;for(y=0,w=b;w;w=Lt(w))y++;for(;0<v-y;)f=Lt(f),v--;for(;0<y-v;)b=Lt(b),y--;for(;v--;){if(f===b||b!==null&&f===b.alternate)break n;f=Lt(f),b=Lt(b)}f=null}else f=null;x!==null&&Wc(m,g,x,f,!1),h!==null&&_!==null&&Wc(m,_,h,f,!0)}}e:{if(g=u?Zt(u):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var T=Mg;else if(Oc(g))if(ip)T=zg;else{T=Eg;var D=Tg}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(T=Dg);if(T&&(T=T(e,u))){sp(m,T,t,p);break e}D&&D(e,g,u),e==="focusout"&&(D=g._wrapperState)&&D.controlled&&g.type==="number"&&xi(g,"number",g.value)}switch(D=u?Zt(u):window,e){case"focusin":(Oc(D)||D.contentEditable==="true")&&(Ut=D,Mi=u,Wa=null);break;case"focusout":Wa=Mi=Ut=null;break;case"mousedown":Ti=!0;break;case"contextmenu":case"mouseup":case"dragend":Ti=!1,Gc(m,t,p);break;case"selectionchange":if(Vg)break;case"keydown":case"keyup":Gc(m,t,p)}var k;if(El)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Ht?rp(e,t)&&(C="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(ap&&t.locale!=="ko"&&(Ht||C!=="onCompositionStart"?C==="onCompositionEnd"&&Ht&&(k=tp()):(nt=p,Nl="value"in nt?nt.value:nt.textContent,Ht=!0)),D=No(u,C),0<D.length&&(C=new Vc(C,e,null,t,p),m.push({event:C,listeners:D}),k?C.data=k:(k=op(t),k!==null&&(C.data=k)))),(k=jg?wg(e,t):Sg(e,t))&&(u=No(u,"onBeforeInput"),0<u.length&&(p=new Vc("onBeforeInput","beforeinput",null,t,p),m.push({event:p,listeners:u}),p.data=k))}xp(m,n)})}function dr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function No(e,n){for(var t=n+"Capture",a=[];e!==null;){var r=e,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ar(e,t),s!=null&&a.unshift(dr(e,s,r)),s=ar(e,n),s!=null&&a.push(dr(e,s,r))),e=e.return}return a}function Lt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wc(e,n,t,a,r){for(var s=n._reactName,i=[];t!==null&&t!==a;){var l=t,d=l.alternate,u=l.stateNode;if(d!==null&&d===a)break;l.tag===5&&u!==null&&(l=u,r?(d=ar(t,s),d!=null&&i.unshift(dr(t,d,l))):r||(d=ar(t,s),d!=null&&i.push(dr(t,d,l)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var Og=/\r\n?/g,Kg=/\u0000|\uFFFD/g;function Zc(e){return(typeof e=="string"?e:""+e).replace(Og,`
`).replace(Kg,"")}function Hr(e,n,t){if(n=Zc(n),Zc(e)!==n&&t)throw Error(H(425))}function Mo(){}var Ei=null,Di=null;function zi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ai=typeof setTimeout=="function"?setTimeout:void 0,Jg=typeof clearTimeout=="function"?clearTimeout:void 0,Yc=typeof Promise=="function"?Promise:void 0,Bg=typeof queueMicrotask=="function"?queueMicrotask:typeof Yc<"u"?function(e){return Yc.resolve(null).then(e).catch(Fg)}:Ai;function Fg(e){setTimeout(function(){throw e})}function Gs(e,n){var t=n,a=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(a===0){e.removeChild(r),sr(n);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=r}while(t);sr(n)}function st(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Xc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var wa=Math.random().toString(36).slice(2),Nn="__reactFiber$"+wa,ur="__reactProps$"+wa,Fn="__reactContainer$"+wa,$i="__reactEvents$"+wa,Gg="__reactListeners$"+wa,Hg="__reactHandles$"+wa;function yt(e){var n=e[Nn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Fn]||t[Nn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Xc(e);e!==null;){if(t=e[Nn])return t;e=Xc(e)}return n}e=t,t=e.parentNode}return null}function Mr(e){return e=e[Nn]||e[Fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(H(33))}function cs(e){return e[ur]||null}var Vi=[],Yt=-1;function gt(e){return{current:e}}function me(e){0>Yt||(e.current=Vi[Yt],Vi[Yt]=null,Yt--)}function pe(e,n){Yt++,Vi[Yt]=e.current,e.current=n}var pt={},Le=gt(pt),Ye=gt(!1),wt=pt;function fa(e,n){var t=e.type.contextTypes;if(!t)return pt;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=n[s];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function Xe(e){return e=e.childContextTypes,e!=null}function To(){me(Ye),me(Le)}function Qc(e,n,t){if(Le.current!==pt)throw Error(H(168));pe(Le,n),pe(Ye,t)}function bp(e,n,t){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return t;a=a.getChildContext();for(var r in a)if(!(r in n))throw Error(H(108,Tm(e)||"Unknown",r));return be({},t,a)}function Eo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pt,wt=Le.current,pe(Le,e),pe(Ye,Ye.current),!0}function qc(e,n,t){var a=e.stateNode;if(!a)throw Error(H(169));t?(e=bp(e,n,wt),a.__reactInternalMemoizedMergedChildContext=e,me(Ye),me(Le),pe(Le,e)):me(Ye),pe(Ye,t)}var Pn=null,ds=!1,Hs=!1;function yp(e){Pn===null?Pn=[e]:Pn.push(e)}function Ug(e){ds=!0,yp(e)}function ht(){if(!Hs&&Pn!==null){Hs=!0;var e=0,n=ce;try{var t=Pn;for(ce=1;e<t.length;e++){var a=t[e];do a=a(!0);while(a!==null)}Pn=null,ds=!1}catch(r){throw Pn!==null&&(Pn=Pn.slice(e+1)),Gu(jl,ht),r}finally{ce=n,Hs=!1}}return null}var Xt=[],Qt=0,Do=null,zo=0,cn=[],dn=0,St=null,On=1,Kn="";function vt(e,n){Xt[Qt++]=zo,Xt[Qt++]=Do,Do=e,zo=n}function _p(e,n,t){cn[dn++]=On,cn[dn++]=Kn,cn[dn++]=St,St=e;var a=On;e=Kn;var r=32-In(a)-1;a&=~(1<<r),t+=1;var s=32-In(n)+r;if(30<s){var i=r-r%5;s=(a&(1<<i)-1).toString(32),a>>=i,r-=i,On=1<<32-In(n)+r|t<<r|a,Kn=s+e}else On=1<<s|t<<r|a,Kn=e}function zl(e){e.return!==null&&(vt(e,1),_p(e,1,0))}function Al(e){for(;e===Do;)Do=Xt[--Qt],Xt[Qt]=null,zo=Xt[--Qt],Xt[Qt]=null;for(;e===St;)St=cn[--dn],cn[dn]=null,Kn=cn[--dn],cn[dn]=null,On=cn[--dn],cn[dn]=null}var an=null,tn=null,he=!1,_n=null;function Ip(e,n){var t=un(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function ed(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,an=e,tn=st(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,an=e,tn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=St!==null?{id:On,overflow:Kn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=un(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,an=e,tn=null,!0):!1;default:return!1}}function Pi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ri(e){if(he){var n=tn;if(n){var t=n;if(!ed(e,n)){if(Pi(e))throw Error(H(418));n=st(t.nextSibling);var a=an;n&&ed(e,n)?Ip(a,t):(e.flags=e.flags&-4097|2,he=!1,an=e)}}else{if(Pi(e))throw Error(H(418));e.flags=e.flags&-4097|2,he=!1,an=e}}}function nd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;an=e}function Ur(e){if(e!==an)return!1;if(!he)return nd(e),he=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!zi(e.type,e.memoizedProps)),n&&(n=tn)){if(Pi(e))throw kp(),Error(H(418));for(;n;)Ip(e,n),n=st(n.nextSibling)}if(nd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(H(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){tn=st(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}tn=null}}else tn=an?st(e.stateNode.nextSibling):null;return!0}function kp(){for(var e=tn;e;)e=st(e.nextSibling)}function ma(){tn=an=null,he=!1}function $l(e){_n===null?_n=[e]:_n.push(e)}var Wg=Un.ReactCurrentBatchConfig;function $a(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(H(309));var a=t.stateNode}if(!a)throw Error(H(147,e));var r=a,s=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===s?n.ref:(n=function(i){var l=r.refs;i===null?delete l[s]:l[s]=i},n._stringRef=s,n)}if(typeof e!="string")throw Error(H(284));if(!t._owner)throw Error(H(290,e))}return e}function Wr(e,n){throw e=Object.prototype.toString.call(n),Error(H(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function td(e){var n=e._init;return n(e._payload)}function jp(e){function n(b,v){if(e){var y=b.deletions;y===null?(b.deletions=[v],b.flags|=16):y.push(v)}}function t(b,v){if(!e)return null;for(;v!==null;)n(b,v),v=v.sibling;return null}function a(b,v){for(b=new Map;v!==null;)v.key!==null?b.set(v.key,v):b.set(v.index,v),v=v.sibling;return b}function r(b,v){return b=dt(b,v),b.index=0,b.sibling=null,b}function s(b,v,y){return b.index=y,e?(y=b.alternate,y!==null?(y=y.index,y<v?(b.flags|=2,v):y):(b.flags|=2,v)):(b.flags|=1048576,v)}function i(b){return e&&b.alternate===null&&(b.flags|=2),b}function l(b,v,y,w){return v===null||v.tag!==6?(v=qs(y,b.mode,w),v.return=b,v):(v=r(v,y),v.return=b,v)}function d(b,v,y,w){var T=y.type;return T===Gt?p(b,v,y.props.children,w,y.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Yn&&td(T)===v.type)?(w=r(v,y.props),w.ref=$a(b,v,y),w.return=b,w):(w=vo(y.type,y.key,y.props,null,b.mode,w),w.ref=$a(b,v,y),w.return=b,w)}function u(b,v,y,w){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=ei(y,b.mode,w),v.return=b,v):(v=r(v,y.children||[]),v.return=b,v)}function p(b,v,y,w,T){return v===null||v.tag!==7?(v=jt(y,b.mode,w,T),v.return=b,v):(v=r(v,y),v.return=b,v)}function m(b,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=qs(""+v,b.mode,y),v.return=b,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Pr:return y=vo(v.type,v.key,v.props,null,b.mode,y),y.ref=$a(b,null,v),y.return=b,y;case Ft:return v=ei(v,b.mode,y),v.return=b,v;case Yn:var w=v._init;return m(b,w(v._payload),y)}if(Ka(v)||Ta(v))return v=jt(v,b.mode,y,null),v.return=b,v;Wr(b,v)}return null}function g(b,v,y,w){var T=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:l(b,v,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Pr:return y.key===T?d(b,v,y,w):null;case Ft:return y.key===T?u(b,v,y,w):null;case Yn:return T=y._init,g(b,v,T(y._payload),w)}if(Ka(y)||Ta(y))return T!==null?null:p(b,v,y,w,null);Wr(b,y)}return null}function x(b,v,y,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return b=b.get(y)||null,l(v,b,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Pr:return b=b.get(w.key===null?y:w.key)||null,d(v,b,w,T);case Ft:return b=b.get(w.key===null?y:w.key)||null,u(v,b,w,T);case Yn:var D=w._init;return x(b,v,y,D(w._payload),T)}if(Ka(w)||Ta(w))return b=b.get(y)||null,p(v,b,w,T,null);Wr(v,w)}return null}function h(b,v,y,w){for(var T=null,D=null,k=v,C=v=0,A=null;k!==null&&C<y.length;C++){k.index>C?(A=k,k=null):A=k.sibling;var S=g(b,k,y[C],w);if(S===null){k===null&&(k=A);break}e&&k&&S.alternate===null&&n(b,k),v=s(S,v,C),D===null?T=S:D.sibling=S,D=S,k=A}if(C===y.length)return t(b,k),he&&vt(b,C),T;if(k===null){for(;C<y.length;C++)k=m(b,y[C],w),k!==null&&(v=s(k,v,C),D===null?T=k:D.sibling=k,D=k);return he&&vt(b,C),T}for(k=a(b,k);C<y.length;C++)A=x(k,b,C,y[C],w),A!==null&&(e&&A.alternate!==null&&k.delete(A.key===null?C:A.key),v=s(A,v,C),D===null?T=A:D.sibling=A,D=A);return e&&k.forEach(function(z){return n(b,z)}),he&&vt(b,C),T}function f(b,v,y,w){var T=Ta(y);if(typeof T!="function")throw Error(H(150));if(y=T.call(y),y==null)throw Error(H(151));for(var D=T=null,k=v,C=v=0,A=null,S=y.next();k!==null&&!S.done;C++,S=y.next()){k.index>C?(A=k,k=null):A=k.sibling;var z=g(b,k,S.value,w);if(z===null){k===null&&(k=A);break}e&&k&&z.alternate===null&&n(b,k),v=s(z,v,C),D===null?T=z:D.sibling=z,D=z,k=A}if(S.done)return t(b,k),he&&vt(b,C),T;if(k===null){for(;!S.done;C++,S=y.next())S=m(b,S.value,w),S!==null&&(v=s(S,v,C),D===null?T=S:D.sibling=S,D=S);return he&&vt(b,C),T}for(k=a(b,k);!S.done;C++,S=y.next())S=x(k,b,C,S.value,w),S!==null&&(e&&S.alternate!==null&&k.delete(S.key===null?C:S.key),v=s(S,v,C),D===null?T=S:D.sibling=S,D=S);return e&&k.forEach(function(M){return n(b,M)}),he&&vt(b,C),T}function _(b,v,y,w){if(typeof y=="object"&&y!==null&&y.type===Gt&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Pr:e:{for(var T=y.key,D=v;D!==null;){if(D.key===T){if(T=y.type,T===Gt){if(D.tag===7){t(b,D.sibling),v=r(D,y.props.children),v.return=b,b=v;break e}}else if(D.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Yn&&td(T)===D.type){t(b,D.sibling),v=r(D,y.props),v.ref=$a(b,D,y),v.return=b,b=v;break e}t(b,D);break}else n(b,D);D=D.sibling}y.type===Gt?(v=jt(y.props.children,b.mode,w,y.key),v.return=b,b=v):(w=vo(y.type,y.key,y.props,null,b.mode,w),w.ref=$a(b,v,y),w.return=b,b=w)}return i(b);case Ft:e:{for(D=y.key;v!==null;){if(v.key===D)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){t(b,v.sibling),v=r(v,y.children||[]),v.return=b,b=v;break e}else{t(b,v);break}else n(b,v);v=v.sibling}v=ei(y,b.mode,w),v.return=b,b=v}return i(b);case Yn:return D=y._init,_(b,v,D(y._payload),w)}if(Ka(y))return h(b,v,y,w);if(Ta(y))return f(b,v,y,w);Wr(b,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(t(b,v.sibling),v=r(v,y),v.return=b,b=v):(t(b,v),v=qs(y,b.mode,w),v.return=b,b=v),i(b)):t(b,v)}return _}var ga=jp(!0),wp=jp(!1),Ao=gt(null),$o=null,qt=null,Vl=null;function Pl(){Vl=qt=$o=null}function Rl(e){var n=Ao.current;me(Ao),e._currentValue=n}function Li(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function la(e,n){$o=e,Vl=qt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(We=!0),e.firstContext=null)}function gn(e){var n=e._currentValue;if(Vl!==e)if(e={context:e,memoizedValue:n,next:null},qt===null){if($o===null)throw Error(H(308));qt=e,$o.dependencies={lanes:0,firstContext:e}}else qt=qt.next=e;return n}var _t=null;function Ll(e){_t===null?_t=[e]:_t.push(e)}function Sp(e,n,t,a){var r=n.interleaved;return r===null?(t.next=t,Ll(n)):(t.next=r.next,r.next=t),n.interleaved=t,Gn(e,a)}function Gn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Xn=!1;function Ol(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function it(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,re&2){var r=a.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),a.pending=n,Gn(e,t)}return r=a.interleaved,r===null?(n.next=n,Ll(a)):(n.next=r.next,r.next=n),a.interleaved=n,Gn(e,t)}function po(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,wl(e,t)}}function ad(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=i:s=s.next=i,t=t.next}while(t!==null);s===null?r=s=n:s=s.next=n}else r=s=n;t={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:a.shared,effects:a.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Vo(e,n,t,a){var r=e.updateQueue;Xn=!1;var s=r.firstBaseUpdate,i=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var d=l,u=d.next;d.next=null,i===null?s=u:i.next=u,i=d;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==i&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=d))}if(s!==null){var m=r.baseState;i=0,p=u=d=null,l=s;do{var g=l.lane,x=l.eventTime;if((a&g)===g){p!==null&&(p=p.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,f=l;switch(g=n,x=t,f.tag){case 1:if(h=f.payload,typeof h=="function"){m=h.call(x,m,g);break e}m=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=f.payload,g=typeof h=="function"?h.call(x,m,g):h,g==null)break e;m=be({},m,g);break e;case 2:Xn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=r.effects,g===null?r.effects=[l]:g.push(l))}else x={eventTime:x,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=x,d=m):p=p.next=x,i|=g;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;g=l,l=g.next,g.next=null,r.lastBaseUpdate=g,r.shared.pending=null}}while(!0);if(p===null&&(d=m),r.baseState=d,r.firstBaseUpdate=u,r.lastBaseUpdate=p,n=r.shared.interleaved,n!==null){r=n;do i|=r.lane,r=r.next;while(r!==n)}else s===null&&(r.shared.lanes=0);Nt|=i,e.lanes=i,e.memoizedState=m}}function rd(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],r=a.callback;if(r!==null){if(a.callback=null,a=t,typeof r!="function")throw Error(H(191,r));r.call(a)}}}var Tr={},En=gt(Tr),pr=gt(Tr),fr=gt(Tr);function It(e){if(e===Tr)throw Error(H(174));return e}function Kl(e,n){switch(pe(fr,n),pe(pr,e),pe(En,Tr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:bi(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=bi(n,e)}me(En),pe(En,n)}function ha(){me(En),me(pr),me(fr)}function Np(e){It(fr.current);var n=It(En.current),t=bi(n,e.type);n!==t&&(pe(pr,e),pe(En,t))}function Jl(e){pr.current===e&&(me(En),me(pr))}var xe=gt(0);function Po(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Us=[];function Bl(){for(var e=0;e<Us.length;e++)Us[e]._workInProgressVersionPrimary=null;Us.length=0}var fo=Un.ReactCurrentDispatcher,Ws=Un.ReactCurrentBatchConfig,Ct=0,ve=null,Se=null,Te=null,Ro=!1,Za=!1,mr=0,Zg=0;function Ve(){throw Error(H(321))}function Fl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!wn(e[t],n[t]))return!1;return!0}function Gl(e,n,t,a,r,s){if(Ct=s,ve=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,fo.current=e===null||e.memoizedState===null?qg:e0,e=t(a,r),Za){s=0;do{if(Za=!1,mr=0,25<=s)throw Error(H(301));s+=1,Te=Se=null,n.updateQueue=null,fo.current=n0,e=t(a,r)}while(Za)}if(fo.current=Lo,n=Se!==null&&Se.next!==null,Ct=0,Te=Se=ve=null,Ro=!1,n)throw Error(H(300));return e}function Hl(){var e=mr!==0;return mr=0,e}function Cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?ve.memoizedState=Te=e:Te=Te.next=e,Te}function hn(){if(Se===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var n=Te===null?ve.memoizedState:Te.next;if(n!==null)Te=n,Se=e;else{if(e===null)throw Error(H(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Te===null?ve.memoizedState=Te=e:Te=Te.next=e}return Te}function gr(e,n){return typeof n=="function"?n(e):n}function Zs(e){var n=hn(),t=n.queue;if(t===null)throw Error(H(311));t.lastRenderedReducer=e;var a=Se,r=a.baseQueue,s=t.pending;if(s!==null){if(r!==null){var i=r.next;r.next=s.next,s.next=i}a.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,a=a.baseState;var l=i=null,d=null,u=s;do{var p=u.lane;if((Ct&p)===p)d!==null&&(d=d.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),a=u.hasEagerState?u.eagerState:e(a,u.action);else{var m={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};d===null?(l=d=m,i=a):d=d.next=m,ve.lanes|=p,Nt|=p}u=u.next}while(u!==null&&u!==s);d===null?i=a:d.next=l,wn(a,n.memoizedState)||(We=!0),n.memoizedState=a,n.baseState=i,n.baseQueue=d,t.lastRenderedState=a}if(e=t.interleaved,e!==null){r=e;do s=r.lane,ve.lanes|=s,Nt|=s,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Ys(e){var n=hn(),t=n.queue;if(t===null)throw Error(H(311));t.lastRenderedReducer=e;var a=t.dispatch,r=t.pending,s=n.memoizedState;if(r!==null){t.pending=null;var i=r=r.next;do s=e(s,i.action),i=i.next;while(i!==r);wn(s,n.memoizedState)||(We=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),t.lastRenderedState=s}return[s,a]}function Mp(){}function Tp(e,n){var t=ve,a=hn(),r=n(),s=!wn(a.memoizedState,r);if(s&&(a.memoizedState=r,We=!0),a=a.queue,Ul(zp.bind(null,t,a,e),[e]),a.getSnapshot!==n||s||Te!==null&&Te.memoizedState.tag&1){if(t.flags|=2048,hr(9,Dp.bind(null,t,a,r,n),void 0,null),Ee===null)throw Error(H(349));Ct&30||Ep(t,n,r)}return r}function Ep(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ve.updateQueue,n===null?(n={lastEffect:null,stores:null},ve.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Dp(e,n,t,a){n.value=t,n.getSnapshot=a,Ap(n)&&$p(e)}function zp(e,n,t){return t(function(){Ap(n)&&$p(e)})}function Ap(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!wn(e,t)}catch{return!0}}function $p(e){var n=Gn(e,1);n!==null&&kn(n,e,1,-1)}function od(e){var n=Cn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gr,lastRenderedState:e},n.queue=e,e=e.dispatch=Qg.bind(null,ve,e),[n.memoizedState,e]}function hr(e,n,t,a){return e={tag:e,create:n,destroy:t,deps:a,next:null},n=ve.updateQueue,n===null?(n={lastEffect:null,stores:null},ve.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e)),e}function Vp(){return hn().memoizedState}function mo(e,n,t,a){var r=Cn();ve.flags|=e,r.memoizedState=hr(1|n,t,void 0,a===void 0?null:a)}function us(e,n,t,a){var r=hn();a=a===void 0?null:a;var s=void 0;if(Se!==null){var i=Se.memoizedState;if(s=i.destroy,a!==null&&Fl(a,i.deps)){r.memoizedState=hr(n,t,s,a);return}}ve.flags|=e,r.memoizedState=hr(1|n,t,s,a)}function sd(e,n){return mo(8390656,8,e,n)}function Ul(e,n){return us(2048,8,e,n)}function Pp(e,n){return us(4,2,e,n)}function Rp(e,n){return us(4,4,e,n)}function Lp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Op(e,n,t){return t=t!=null?t.concat([e]):null,us(4,4,Lp.bind(null,n,e),t)}function Wl(){}function Kp(e,n){var t=hn();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&Fl(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function Jp(e,n){var t=hn();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&Fl(n,a[1])?a[0]:(e=e(),t.memoizedState=[e,n],e)}function Bp(e,n,t){return Ct&21?(wn(t,n)||(t=Wu(),ve.lanes|=t,Nt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,We=!0),e.memoizedState=t)}function Yg(e,n){var t=ce;ce=t!==0&&4>t?t:4,e(!0);var a=Ws.transition;Ws.transition={};try{e(!1),n()}finally{ce=t,Ws.transition=a}}function Fp(){return hn().memoizedState}function Xg(e,n,t){var a=ct(e);if(t={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null},Gp(e))Hp(n,t);else if(t=Sp(e,n,t,a),t!==null){var r=Be();kn(t,e,a,r),Up(t,n,a)}}function Qg(e,n,t){var a=ct(e),r={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null};if(Gp(e))Hp(n,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var i=n.lastRenderedState,l=s(i,t);if(r.hasEagerState=!0,r.eagerState=l,wn(l,i)){var d=n.interleaved;d===null?(r.next=r,Ll(n)):(r.next=d.next,d.next=r),n.interleaved=r;return}}catch{}finally{}t=Sp(e,n,r,a),t!==null&&(r=Be(),kn(t,e,a,r),Up(t,n,a))}}function Gp(e){var n=e.alternate;return e===ve||n!==null&&n===ve}function Hp(e,n){Za=Ro=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Up(e,n,t){if(t&4194240){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,wl(e,t)}}var Lo={readContext:gn,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},qg={readContext:gn,useCallback:function(e,n){return Cn().memoizedState=[e,n===void 0?null:n],e},useContext:gn,useEffect:sd,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,mo(4194308,4,Lp.bind(null,n,e),t)},useLayoutEffect:function(e,n){return mo(4194308,4,e,n)},useInsertionEffect:function(e,n){return mo(4,2,e,n)},useMemo:function(e,n){var t=Cn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var a=Cn();return n=t!==void 0?t(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Xg.bind(null,ve,e),[a.memoizedState,e]},useRef:function(e){var n=Cn();return e={current:e},n.memoizedState=e},useState:od,useDebugValue:Wl,useDeferredValue:function(e){return Cn().memoizedState=e},useTransition:function(){var e=od(!1),n=e[0];return e=Yg.bind(null,e[1]),Cn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var a=ve,r=Cn();if(he){if(t===void 0)throw Error(H(407));t=t()}else{if(t=n(),Ee===null)throw Error(H(349));Ct&30||Ep(a,n,t)}r.memoizedState=t;var s={value:t,getSnapshot:n};return r.queue=s,sd(zp.bind(null,a,s,e),[e]),a.flags|=2048,hr(9,Dp.bind(null,a,s,t,n),void 0,null),t},useId:function(){var e=Cn(),n=Ee.identifierPrefix;if(he){var t=Kn,a=On;t=(a&~(1<<32-In(a)-1)).toString(32)+t,n=":"+n+"R"+t,t=mr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Zg++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},e0={readContext:gn,useCallback:Kp,useContext:gn,useEffect:Ul,useImperativeHandle:Op,useInsertionEffect:Pp,useLayoutEffect:Rp,useMemo:Jp,useReducer:Zs,useRef:Vp,useState:function(){return Zs(gr)},useDebugValue:Wl,useDeferredValue:function(e){var n=hn();return Bp(n,Se.memoizedState,e)},useTransition:function(){var e=Zs(gr)[0],n=hn().memoizedState;return[e,n]},useMutableSource:Mp,useSyncExternalStore:Tp,useId:Fp,unstable_isNewReconciler:!1},n0={readContext:gn,useCallback:Kp,useContext:gn,useEffect:Ul,useImperativeHandle:Op,useInsertionEffect:Pp,useLayoutEffect:Rp,useMemo:Jp,useReducer:Ys,useRef:Vp,useState:function(){return Ys(gr)},useDebugValue:Wl,useDeferredValue:function(e){var n=hn();return Se===null?n.memoizedState=e:Bp(n,Se.memoizedState,e)},useTransition:function(){var e=Ys(gr)[0],n=hn().memoizedState;return[e,n]},useMutableSource:Mp,useSyncExternalStore:Tp,useId:Fp,unstable_isNewReconciler:!1};function bn(e,n){if(e&&e.defaultProps){n=be({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Oi(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:be({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ps={isMounted:function(e){return(e=e._reactInternals)?At(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var a=Be(),r=ct(e),s=Jn(a,r);s.payload=n,t!=null&&(s.callback=t),n=it(e,s,r),n!==null&&(kn(n,e,r,a),po(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=Be(),r=ct(e),s=Jn(a,r);s.tag=1,s.payload=n,t!=null&&(s.callback=t),n=it(e,s,r),n!==null&&(kn(n,e,r,a),po(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Be(),a=ct(e),r=Jn(t,a);r.tag=2,n!=null&&(r.callback=n),n=it(e,r,a),n!==null&&(kn(n,e,a,t),po(n,e,a))}};function id(e,n,t,a,r,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,i):n.prototype&&n.prototype.isPureReactComponent?!lr(t,a)||!lr(r,s):!0}function Wp(e,n,t){var a=!1,r=pt,s=n.contextType;return typeof s=="object"&&s!==null?s=gn(s):(r=Xe(n)?wt:Le.current,a=n.contextTypes,s=(a=a!=null)?fa(e,r):pt),n=new n(t,s),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ps,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=s),n}function ld(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&ps.enqueueReplaceState(n,n.state,null)}function Ki(e,n,t,a){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},Ol(e);var s=n.contextType;typeof s=="object"&&s!==null?r.context=gn(s):(s=Xe(n)?wt:Le.current,r.context=fa(e,s)),r.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Oi(e,n,s,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&ps.enqueueReplaceState(r,r.state,null),Vo(e,t,r,a),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function xa(e,n){try{var t="",a=n;do t+=Mm(a),a=a.return;while(a);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:n,stack:r,digest:null}}function Xs(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ji(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var t0=typeof WeakMap=="function"?WeakMap:Map;function Zp(e,n,t){t=Jn(-1,t),t.tag=3,t.payload={element:null};var a=n.value;return t.callback=function(){Ko||(Ko=!0,Qi=a),Ji(e,n)},t}function Yp(e,n,t){t=Jn(-1,t),t.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var r=n.value;t.payload=function(){return a(r)},t.callback=function(){Ji(e,n)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Ji(e,n),typeof a!="function"&&(lt===null?lt=new Set([this]):lt.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function cd(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new t0;var r=new Set;a.set(n,r)}else r=a.get(n),r===void 0&&(r=new Set,a.set(n,r));r.has(t)||(r.add(t),e=h0.bind(null,e,n,t),n.then(e,e))}function dd(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function ud(e,n,t,a,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Jn(-1,1),n.tag=2,it(t,n,1))),t.lanes|=1),e)}var a0=Un.ReactCurrentOwner,We=!1;function Je(e,n,t,a){n.child=e===null?wp(n,null,t,a):ga(n,e.child,t,a)}function pd(e,n,t,a,r){t=t.render;var s=n.ref;return la(n,r),a=Gl(e,n,t,a,s,r),t=Hl(),e!==null&&!We?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Hn(e,n,r)):(he&&t&&zl(n),n.flags|=1,Je(e,n,a,r),n.child)}function fd(e,n,t,a,r){if(e===null){var s=t.type;return typeof s=="function"&&!tc(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=s,Xp(e,n,s,a,r)):(e=vo(t.type,null,a,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,!(e.lanes&r)){var i=s.memoizedProps;if(t=t.compare,t=t!==null?t:lr,t(i,a)&&e.ref===n.ref)return Hn(e,n,r)}return n.flags|=1,e=dt(s,a),e.ref=n.ref,e.return=n,n.child=e}function Xp(e,n,t,a,r){if(e!==null){var s=e.memoizedProps;if(lr(s,a)&&e.ref===n.ref)if(We=!1,n.pendingProps=a=s,(e.lanes&r)!==0)e.flags&131072&&(We=!0);else return n.lanes=e.lanes,Hn(e,n,r)}return Bi(e,n,t,a,r)}function Qp(e,n,t){var a=n.pendingProps,r=a.children,s=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(na,en),en|=t;else{if(!(t&1073741824))return e=s!==null?s.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,pe(na,en),en|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=s!==null?s.baseLanes:t,pe(na,en),en|=a}else s!==null?(a=s.baseLanes|t,n.memoizedState=null):a=t,pe(na,en),en|=a;return Je(e,n,r,t),n.child}function qp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Bi(e,n,t,a,r){var s=Xe(t)?wt:Le.current;return s=fa(n,s),la(n,r),t=Gl(e,n,t,a,s,r),a=Hl(),e!==null&&!We?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Hn(e,n,r)):(he&&a&&zl(n),n.flags|=1,Je(e,n,t,r),n.child)}function md(e,n,t,a,r){if(Xe(t)){var s=!0;Eo(n)}else s=!1;if(la(n,r),n.stateNode===null)go(e,n),Wp(n,t,a),Ki(n,t,a,r),a=!0;else if(e===null){var i=n.stateNode,l=n.memoizedProps;i.props=l;var d=i.context,u=t.contextType;typeof u=="object"&&u!==null?u=gn(u):(u=Xe(t)?wt:Le.current,u=fa(n,u));var p=t.getDerivedStateFromProps,m=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==a||d!==u)&&ld(n,i,a,u),Xn=!1;var g=n.memoizedState;i.state=g,Vo(n,a,i,r),d=n.memoizedState,l!==a||g!==d||Ye.current||Xn?(typeof p=="function"&&(Oi(n,t,p,a),d=n.memoizedState),(l=Xn||id(n,t,l,a,g,d,u))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=d),i.props=a,i.state=d,i.context=u,a=l):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{i=n.stateNode,Cp(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:bn(n.type,l),i.props=u,m=n.pendingProps,g=i.context,d=t.contextType,typeof d=="object"&&d!==null?d=gn(d):(d=Xe(t)?wt:Le.current,d=fa(n,d));var x=t.getDerivedStateFromProps;(p=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==m||g!==d)&&ld(n,i,a,d),Xn=!1,g=n.memoizedState,i.state=g,Vo(n,a,i,r);var h=n.memoizedState;l!==m||g!==h||Ye.current||Xn?(typeof x=="function"&&(Oi(n,t,x,a),h=n.memoizedState),(u=Xn||id(n,t,u,a,g,h,d)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,h,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,h,d)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=h),i.props=a,i.state=h,i.context=d,a=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),a=!1)}return Fi(e,n,t,a,s,r)}function Fi(e,n,t,a,r,s){qp(e,n);var i=(n.flags&128)!==0;if(!a&&!i)return r&&qc(n,t,!1),Hn(e,n,s);a=n.stateNode,a0.current=n;var l=i&&typeof t.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&i?(n.child=ga(n,e.child,null,s),n.child=ga(n,null,l,s)):Je(e,n,l,s),n.memoizedState=a.state,r&&qc(n,t,!0),n.child}function ef(e){var n=e.stateNode;n.pendingContext?Qc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Qc(e,n.context,!1),Kl(e,n.containerInfo)}function gd(e,n,t,a,r){return ma(),$l(r),n.flags|=256,Je(e,n,t,a),n.child}var Gi={dehydrated:null,treeContext:null,retryLane:0};function Hi(e){return{baseLanes:e,cachePool:null,transitions:null}}function nf(e,n,t){var a=n.pendingProps,r=xe.current,s=!1,i=(n.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(r&2)!==0),l?(s=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),pe(xe,r&1),e===null)return Ri(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=a.children,e=a.fallback,s?(a=n.mode,s=n.child,i={mode:"hidden",children:i},!(a&1)&&s!==null?(s.childLanes=0,s.pendingProps=i):s=gs(i,a,0,null),e=jt(e,a,t,null),s.return=n,e.return=n,s.sibling=e,n.child=s,n.child.memoizedState=Hi(t),n.memoizedState=Gi,e):Zl(n,i));if(r=e.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return r0(e,n,i,a,l,r,t);if(s){s=a.fallback,i=n.mode,r=e.child,l=r.sibling;var d={mode:"hidden",children:a.children};return!(i&1)&&n.child!==r?(a=n.child,a.childLanes=0,a.pendingProps=d,n.deletions=null):(a=dt(r,d),a.subtreeFlags=r.subtreeFlags&14680064),l!==null?s=dt(l,s):(s=jt(s,i,t,null),s.flags|=2),s.return=n,a.return=n,a.sibling=s,n.child=a,a=s,s=n.child,i=e.child.memoizedState,i=i===null?Hi(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},s.memoizedState=i,s.childLanes=e.childLanes&~t,n.memoizedState=Gi,a}return s=e.child,e=s.sibling,a=dt(s,{mode:"visible",children:a.children}),!(n.mode&1)&&(a.lanes=t),a.return=n,a.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=a,n.memoizedState=null,a}function Zl(e,n){return n=gs({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Zr(e,n,t,a){return a!==null&&$l(a),ga(n,e.child,null,t),e=Zl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function r0(e,n,t,a,r,s,i){if(t)return n.flags&256?(n.flags&=-257,a=Xs(Error(H(422))),Zr(e,n,i,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(s=a.fallback,r=n.mode,a=gs({mode:"visible",children:a.children},r,0,null),s=jt(s,r,i,null),s.flags|=2,a.return=n,s.return=n,a.sibling=s,n.child=a,n.mode&1&&ga(n,e.child,null,i),n.child.memoizedState=Hi(i),n.memoizedState=Gi,s);if(!(n.mode&1))return Zr(e,n,i,null);if(r.data==="$!"){if(a=r.nextSibling&&r.nextSibling.dataset,a)var l=a.dgst;return a=l,s=Error(H(419)),a=Xs(s,a,void 0),Zr(e,n,i,a)}if(l=(i&e.childLanes)!==0,We||l){if(a=Ee,a!==null){switch(i&-i){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(a.suspendedLanes|i)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Gn(e,r),kn(a,e,r,-1))}return nc(),a=Xs(Error(H(421))),Zr(e,n,i,a)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=x0.bind(null,e),r._reactRetry=n,null):(e=s.treeContext,tn=st(r.nextSibling),an=n,he=!0,_n=null,e!==null&&(cn[dn++]=On,cn[dn++]=Kn,cn[dn++]=St,On=e.id,Kn=e.overflow,St=n),n=Zl(n,a.children),n.flags|=4096,n)}function hd(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Li(e.return,n,t)}function Qs(e,n,t,a,r){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:r}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=t,s.tailMode=r)}function tf(e,n,t){var a=n.pendingProps,r=a.revealOrder,s=a.tail;if(Je(e,n,a.children,t),a=xe.current,a&2)a=a&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hd(e,t,n);else if(e.tag===19)hd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(pe(xe,a),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&Po(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),Qs(n,!1,r,t,s);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Po(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}Qs(n,!0,t,null,s);break;case"together":Qs(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function go(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Hn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Nt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(H(153));if(n.child!==null){for(e=n.child,t=dt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=dt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function o0(e,n,t){switch(n.tag){case 3:ef(n),ma();break;case 5:Np(n);break;case 1:Xe(n.type)&&Eo(n);break;case 4:Kl(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,r=n.memoizedProps.value;pe(Ao,a._currentValue),a._currentValue=r;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(pe(xe,xe.current&1),n.flags|=128,null):t&n.child.childLanes?nf(e,n,t):(pe(xe,xe.current&1),e=Hn(e,n,t),e!==null?e.sibling:null);pe(xe,xe.current&1);break;case 19:if(a=(t&n.childLanes)!==0,e.flags&128){if(a)return tf(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),pe(xe,xe.current),a)break;return null;case 22:case 23:return n.lanes=0,Qp(e,n,t)}return Hn(e,n,t)}var af,Ui,rf,of;af=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Ui=function(){};rf=function(e,n,t,a){var r=e.memoizedProps;if(r!==a){e=n.stateNode,It(En.current);var s=null;switch(t){case"input":r=gi(e,r),a=gi(e,a),s=[];break;case"select":r=be({},r,{value:void 0}),a=be({},a,{value:void 0}),s=[];break;case"textarea":r=vi(e,r),a=vi(e,a),s=[];break;default:typeof r.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Mo)}yi(t,a);var i;t=null;for(u in r)if(!a.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var l=r[u];for(i in l)l.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(nr.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in a){var d=a[u];if(l=r!=null?r[u]:void 0,a.hasOwnProperty(u)&&d!==l&&(d!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||d&&d.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in d)d.hasOwnProperty(i)&&l[i]!==d[i]&&(t||(t={}),t[i]=d[i])}else t||(s||(s=[]),s.push(u,t)),t=d;else u==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,l=l?l.__html:void 0,d!=null&&l!==d&&(s=s||[]).push(u,d)):u==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(u,""+d):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(nr.hasOwnProperty(u)?(d!=null&&u==="onScroll"&&fe("scroll",e),s||l===d||(s=[])):(s=s||[]).push(u,d))}t&&(s=s||[]).push("style",t);var u=s;(n.updateQueue=u)&&(n.flags|=4)}};of=function(e,n,t,a){t!==a&&(n.flags|=4)};function Va(e,n){if(!he)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Pe(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags&14680064,a|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function s0(e,n,t){var a=n.pendingProps;switch(Al(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(n),null;case 1:return Xe(n.type)&&To(),Pe(n),null;case 3:return a=n.stateNode,ha(),me(Ye),me(Le),Bl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ur(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,_n!==null&&(nl(_n),_n=null))),Ui(e,n),Pe(n),null;case 5:Jl(n);var r=It(fr.current);if(t=n.type,e!==null&&n.stateNode!=null)rf(e,n,t,a,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(H(166));return Pe(n),null}if(e=It(En.current),Ur(n)){a=n.stateNode,t=n.type;var s=n.memoizedProps;switch(a[Nn]=n,a[ur]=s,e=(n.mode&1)!==0,t){case"dialog":fe("cancel",a),fe("close",a);break;case"iframe":case"object":case"embed":fe("load",a);break;case"video":case"audio":for(r=0;r<Ba.length;r++)fe(Ba[r],a);break;case"source":fe("error",a);break;case"img":case"image":case"link":fe("error",a),fe("load",a);break;case"details":fe("toggle",a);break;case"input":wc(a,s),fe("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!s.multiple},fe("invalid",a);break;case"textarea":Cc(a,s),fe("invalid",a)}yi(t,s),r=null;for(var i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="children"?typeof l=="string"?a.textContent!==l&&(s.suppressHydrationWarning!==!0&&Hr(a.textContent,l,e),r=["children",l]):typeof l=="number"&&a.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Hr(a.textContent,l,e),r=["children",""+l]):nr.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&fe("scroll",a)}switch(t){case"input":Rr(a),Sc(a,s,!0);break;case"textarea":Rr(a),Nc(a);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(a.onclick=Mo)}a=r,n.updateQueue=a,a!==null&&(n.flags|=4)}else{i=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=i.createElement(t,{is:a.is}):(e=i.createElement(t),t==="select"&&(i=e,a.multiple?i.multiple=!0:a.size&&(i.size=a.size))):e=i.createElementNS(e,t),e[Nn]=n,e[ur]=a,af(e,n,!1,!1),n.stateNode=e;e:{switch(i=_i(t,a),t){case"dialog":fe("cancel",e),fe("close",e),r=a;break;case"iframe":case"object":case"embed":fe("load",e),r=a;break;case"video":case"audio":for(r=0;r<Ba.length;r++)fe(Ba[r],e);r=a;break;case"source":fe("error",e),r=a;break;case"img":case"image":case"link":fe("error",e),fe("load",e),r=a;break;case"details":fe("toggle",e),r=a;break;case"input":wc(e,a),r=gi(e,a),fe("invalid",e);break;case"option":r=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},r=be({},a,{value:void 0}),fe("invalid",e);break;case"textarea":Cc(e,a),r=vi(e,a),fe("invalid",e);break;default:r=a}yi(t,r),l=r;for(s in l)if(l.hasOwnProperty(s)){var d=l[s];s==="style"?Vu(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Au(e,d)):s==="children"?typeof d=="string"?(t!=="textarea"||d!=="")&&tr(e,d):typeof d=="number"&&tr(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(nr.hasOwnProperty(s)?d!=null&&s==="onScroll"&&fe("scroll",e):d!=null&&bl(e,s,d,i))}switch(t){case"input":Rr(e),Sc(e,a,!1);break;case"textarea":Rr(e),Nc(e);break;case"option":a.value!=null&&e.setAttribute("value",""+ut(a.value));break;case"select":e.multiple=!!a.multiple,s=a.value,s!=null?ra(e,!!a.multiple,s,!1):a.defaultValue!=null&&ra(e,!!a.multiple,a.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Mo)}switch(t){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Pe(n),null;case 6:if(e&&n.stateNode!=null)of(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(H(166));if(t=It(fr.current),It(En.current),Ur(n)){if(a=n.stateNode,t=n.memoizedProps,a[Nn]=n,(s=a.nodeValue!==t)&&(e=an,e!==null))switch(e.tag){case 3:Hr(a.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hr(a.nodeValue,t,(e.mode&1)!==0)}s&&(n.flags|=4)}else a=(t.nodeType===9?t:t.ownerDocument).createTextNode(a),a[Nn]=n,n.stateNode=a}return Pe(n),null;case 13:if(me(xe),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&tn!==null&&n.mode&1&&!(n.flags&128))kp(),ma(),n.flags|=98560,s=!1;else if(s=Ur(n),a!==null&&a.dehydrated!==null){if(e===null){if(!s)throw Error(H(318));if(s=n.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(H(317));s[Nn]=n}else ma(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Pe(n),s=!1}else _n!==null&&(nl(_n),_n=null),s=!0;if(!s)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,n.mode&1&&(e===null||xe.current&1?Me===0&&(Me=3):nc())),n.updateQueue!==null&&(n.flags|=4),Pe(n),null);case 4:return ha(),Ui(e,n),e===null&&cr(n.stateNode.containerInfo),Pe(n),null;case 10:return Rl(n.type._context),Pe(n),null;case 17:return Xe(n.type)&&To(),Pe(n),null;case 19:if(me(xe),s=n.memoizedState,s===null)return Pe(n),null;if(a=(n.flags&128)!==0,i=s.rendering,i===null)if(a)Va(s,!1);else{if(Me!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=Po(e),i!==null){for(n.flags|=128,Va(s,!1),a=i.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=t,t=n.child;t!==null;)s=t,e=a,s.flags&=14680066,i=s.alternate,i===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,s.type=i.type,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return pe(xe,xe.current&1|2),n.child}e=e.sibling}s.tail!==null&&Ie()>va&&(n.flags|=128,a=!0,Va(s,!1),n.lanes=4194304)}else{if(!a)if(e=Po(i),e!==null){if(n.flags|=128,a=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Va(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!he)return Pe(n),null}else 2*Ie()-s.renderingStartTime>va&&t!==1073741824&&(n.flags|=128,a=!0,Va(s,!1),n.lanes=4194304);s.isBackwards?(i.sibling=n.child,n.child=i):(t=s.last,t!==null?t.sibling=i:n.child=i,s.last=i)}return s.tail!==null?(n=s.tail,s.rendering=n,s.tail=n.sibling,s.renderingStartTime=Ie(),n.sibling=null,t=xe.current,pe(xe,a?t&1|2:t&1),n):(Pe(n),null);case 22:case 23:return ec(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&n.mode&1?en&1073741824&&(Pe(n),n.subtreeFlags&6&&(n.flags|=8192)):Pe(n),null;case 24:return null;case 25:return null}throw Error(H(156,n.tag))}function i0(e,n){switch(Al(n),n.tag){case 1:return Xe(n.type)&&To(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ha(),me(Ye),me(Le),Bl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Jl(n),null;case 13:if(me(xe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(H(340));ma()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return me(xe),null;case 4:return ha(),null;case 10:return Rl(n.type._context),null;case 22:case 23:return ec(),null;case 24:return null;default:return null}}var Yr=!1,Re=!1,l0=typeof WeakSet=="function"?WeakSet:Set,Z=null;function ea(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(a){_e(e,n,a)}else t.current=null}function Wi(e,n,t){try{t()}catch(a){_e(e,n,a)}}var xd=!1;function c0(e,n){if(Ei=So,e=dp(),Dl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var r=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var i=0,l=-1,d=-1,u=0,p=0,m=e,g=null;n:for(;;){for(var x;m!==t||r!==0&&m.nodeType!==3||(l=i+r),m!==s||a!==0&&m.nodeType!==3||(d=i+a),m.nodeType===3&&(i+=m.nodeValue.length),(x=m.firstChild)!==null;)g=m,m=x;for(;;){if(m===e)break n;if(g===t&&++u===r&&(l=i),g===s&&++p===a&&(d=i),(x=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=x}t=l===-1||d===-1?null:{start:l,end:d}}else t=null}t=t||{start:0,end:0}}else t=null;for(Di={focusedElem:e,selectionRange:t},So=!1,Z=n;Z!==null;)if(n=Z,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Z=e;else for(;Z!==null;){n=Z;try{var h=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var f=h.memoizedProps,_=h.memoizedState,b=n.stateNode,v=b.getSnapshotBeforeUpdate(n.elementType===n.type?f:bn(n.type,f),_);b.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(w){_e(n,n.return,w)}if(e=n.sibling,e!==null){e.return=n.return,Z=e;break}Z=n.return}return h=xd,xd=!1,h}function Ya(e,n,t){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var r=a=a.next;do{if((r.tag&e)===e){var s=r.destroy;r.destroy=void 0,s!==void 0&&Wi(n,t,s)}r=r.next}while(r!==a)}}function fs(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var a=t.create;t.destroy=a()}t=t.next}while(t!==n)}}function Zi(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function sf(e){var n=e.alternate;n!==null&&(e.alternate=null,sf(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Nn],delete n[ur],delete n[$i],delete n[Gg],delete n[Hg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lf(e){return e.tag===5||e.tag===3||e.tag===4}function vd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yi(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Mo));else if(a!==4&&(e=e.child,e!==null))for(Yi(e,n,t),e=e.sibling;e!==null;)Yi(e,n,t),e=e.sibling}function Xi(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Xi(e,n,t),e=e.sibling;e!==null;)Xi(e,n,t),e=e.sibling}var De=null,yn=!1;function Zn(e,n,t){for(t=t.child;t!==null;)cf(e,n,t),t=t.sibling}function cf(e,n,t){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(os,t)}catch{}switch(t.tag){case 5:Re||ea(t,n);case 6:var a=De,r=yn;De=null,Zn(e,n,t),De=a,yn=r,De!==null&&(yn?(e=De,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):De.removeChild(t.stateNode));break;case 18:De!==null&&(yn?(e=De,t=t.stateNode,e.nodeType===8?Gs(e.parentNode,t):e.nodeType===1&&Gs(e,t),sr(e)):Gs(De,t.stateNode));break;case 4:a=De,r=yn,De=t.stateNode.containerInfo,yn=!0,Zn(e,n,t),De=a,yn=r;break;case 0:case 11:case 14:case 15:if(!Re&&(a=t.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){r=a=a.next;do{var s=r,i=s.destroy;s=s.tag,i!==void 0&&(s&2||s&4)&&Wi(t,n,i),r=r.next}while(r!==a)}Zn(e,n,t);break;case 1:if(!Re&&(ea(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=t.memoizedProps,a.state=t.memoizedState,a.componentWillUnmount()}catch(l){_e(t,n,l)}Zn(e,n,t);break;case 21:Zn(e,n,t);break;case 22:t.mode&1?(Re=(a=Re)||t.memoizedState!==null,Zn(e,n,t),Re=a):Zn(e,n,t);break;default:Zn(e,n,t)}}function bd(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new l0),n.forEach(function(a){var r=v0.bind(null,e,a);t.has(a)||(t.add(a),a.then(r,r))})}}function vn(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var r=t[a];try{var s=e,i=n,l=i;e:for(;l!==null;){switch(l.tag){case 5:De=l.stateNode,yn=!1;break e;case 3:De=l.stateNode.containerInfo,yn=!0;break e;case 4:De=l.stateNode.containerInfo,yn=!0;break e}l=l.return}if(De===null)throw Error(H(160));cf(s,i,r),De=null,yn=!1;var d=r.alternate;d!==null&&(d.return=null),r.return=null}catch(u){_e(r,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)df(n,e),n=n.sibling}function df(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vn(n,e),Sn(e),a&4){try{Ya(3,e,e.return),fs(3,e)}catch(f){_e(e,e.return,f)}try{Ya(5,e,e.return)}catch(f){_e(e,e.return,f)}}break;case 1:vn(n,e),Sn(e),a&512&&t!==null&&ea(t,t.return);break;case 5:if(vn(n,e),Sn(e),a&512&&t!==null&&ea(t,t.return),e.flags&32){var r=e.stateNode;try{tr(r,"")}catch(f){_e(e,e.return,f)}}if(a&4&&(r=e.stateNode,r!=null)){var s=e.memoizedProps,i=t!==null?t.memoizedProps:s,l=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Eu(r,s),_i(l,i);var u=_i(l,s);for(i=0;i<d.length;i+=2){var p=d[i],m=d[i+1];p==="style"?Vu(r,m):p==="dangerouslySetInnerHTML"?Au(r,m):p==="children"?tr(r,m):bl(r,p,m,u)}switch(l){case"input":hi(r,s);break;case"textarea":Du(r,s);break;case"select":var g=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?ra(r,!!s.multiple,x,!1):g!==!!s.multiple&&(s.defaultValue!=null?ra(r,!!s.multiple,s.defaultValue,!0):ra(r,!!s.multiple,s.multiple?[]:"",!1))}r[ur]=s}catch(f){_e(e,e.return,f)}}break;case 6:if(vn(n,e),Sn(e),a&4){if(e.stateNode===null)throw Error(H(162));r=e.stateNode,s=e.memoizedProps;try{r.nodeValue=s}catch(f){_e(e,e.return,f)}}break;case 3:if(vn(n,e),Sn(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{sr(n.containerInfo)}catch(f){_e(e,e.return,f)}break;case 4:vn(n,e),Sn(e);break;case 13:vn(n,e),Sn(e),r=e.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ql=Ie())),a&4&&bd(e);break;case 22:if(p=t!==null&&t.memoizedState!==null,e.mode&1?(Re=(u=Re)||p,vn(n,e),Re=u):vn(n,e),Sn(e),a&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(Z=e,p=e.child;p!==null;){for(m=Z=p;Z!==null;){switch(g=Z,x=g.child,g.tag){case 0:case 11:case 14:case 15:Ya(4,g,g.return);break;case 1:ea(g,g.return);var h=g.stateNode;if(typeof h.componentWillUnmount=="function"){a=g,t=g.return;try{n=a,h.props=n.memoizedProps,h.state=n.memoizedState,h.componentWillUnmount()}catch(f){_e(a,t,f)}}break;case 5:ea(g,g.return);break;case 22:if(g.memoizedState!==null){_d(m);continue}}x!==null?(x.return=g,Z=x):_d(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{r=m.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,d=m.memoizedProps.style,i=d!=null&&d.hasOwnProperty("display")?d.display:null,l.style.display=$u("display",i))}catch(f){_e(e,e.return,f)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(f){_e(e,e.return,f)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:vn(n,e),Sn(e),a&4&&bd(e);break;case 21:break;default:vn(n,e),Sn(e)}}function Sn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(lf(t)){var a=t;break e}t=t.return}throw Error(H(160))}switch(a.tag){case 5:var r=a.stateNode;a.flags&32&&(tr(r,""),a.flags&=-33);var s=vd(e);Xi(e,s,r);break;case 3:case 4:var i=a.stateNode.containerInfo,l=vd(e);Yi(e,l,i);break;default:throw Error(H(161))}}catch(d){_e(e,e.return,d)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function d0(e,n,t){Z=e,uf(e)}function uf(e,n,t){for(var a=(e.mode&1)!==0;Z!==null;){var r=Z,s=r.child;if(r.tag===22&&a){var i=r.memoizedState!==null||Yr;if(!i){var l=r.alternate,d=l!==null&&l.memoizedState!==null||Re;l=Yr;var u=Re;if(Yr=i,(Re=d)&&!u)for(Z=r;Z!==null;)i=Z,d=i.child,i.tag===22&&i.memoizedState!==null?Id(r):d!==null?(d.return=i,Z=d):Id(r);for(;s!==null;)Z=s,uf(s),s=s.sibling;Z=r,Yr=l,Re=u}yd(e)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Z=s):yd(e)}}function yd(e){for(;Z!==null;){var n=Z;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Re||fs(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!Re)if(t===null)a.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:bn(n.type,t.memoizedProps);a.componentDidUpdate(r,t.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var s=n.updateQueue;s!==null&&rd(n,s,a);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}rd(n,i,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var d=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&t.focus();break;case"img":d.src&&(t.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&sr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}Re||n.flags&512&&Zi(n)}catch(g){_e(n,n.return,g)}}if(n===e){Z=null;break}if(t=n.sibling,t!==null){t.return=n.return,Z=t;break}Z=n.return}}function _d(e){for(;Z!==null;){var n=Z;if(n===e){Z=null;break}var t=n.sibling;if(t!==null){t.return=n.return,Z=t;break}Z=n.return}}function Id(e){for(;Z!==null;){var n=Z;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{fs(4,n)}catch(d){_e(n,t,d)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var r=n.return;try{a.componentDidMount()}catch(d){_e(n,r,d)}}var s=n.return;try{Zi(n)}catch(d){_e(n,s,d)}break;case 5:var i=n.return;try{Zi(n)}catch(d){_e(n,i,d)}}}catch(d){_e(n,n.return,d)}if(n===e){Z=null;break}var l=n.sibling;if(l!==null){l.return=n.return,Z=l;break}Z=n.return}}var u0=Math.ceil,Oo=Un.ReactCurrentDispatcher,Yl=Un.ReactCurrentOwner,pn=Un.ReactCurrentBatchConfig,re=0,Ee=null,we=null,Ae=0,en=0,na=gt(0),Me=0,xr=null,Nt=0,ms=0,Xl=0,Xa=null,Ue=null,Ql=0,va=1/0,Vn=null,Ko=!1,Qi=null,lt=null,Xr=!1,tt=null,Jo=0,Qa=0,qi=null,ho=-1,xo=0;function Be(){return re&6?Ie():ho!==-1?ho:ho=Ie()}function ct(e){return e.mode&1?re&2&&Ae!==0?Ae&-Ae:Wg.transition!==null?(xo===0&&(xo=Wu()),xo):(e=ce,e!==0||(e=window.event,e=e===void 0?16:np(e.type)),e):1}function kn(e,n,t,a){if(50<Qa)throw Qa=0,qi=null,Error(H(185));Cr(e,t,a),(!(re&2)||e!==Ee)&&(e===Ee&&(!(re&2)&&(ms|=t),Me===4&&qn(e,Ae)),Qe(e,a),t===1&&re===0&&!(n.mode&1)&&(va=Ie()+500,ds&&ht()))}function Qe(e,n){var t=e.callbackNode;Wm(e,n);var a=wo(e,e===Ee?Ae:0);if(a===0)t!==null&&Ec(t),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(t!=null&&Ec(t),n===1)e.tag===0?Ug(kd.bind(null,e)):yp(kd.bind(null,e)),Bg(function(){!(re&6)&&ht()}),t=null;else{switch(Zu(a)){case 1:t=jl;break;case 4:t=Hu;break;case 16:t=jo;break;case 536870912:t=Uu;break;default:t=jo}t=bf(t,pf.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function pf(e,n){if(ho=-1,xo=0,re&6)throw Error(H(327));var t=e.callbackNode;if(ca()&&e.callbackNode!==t)return null;var a=wo(e,e===Ee?Ae:0);if(a===0)return null;if(a&30||a&e.expiredLanes||n)n=Bo(e,a);else{n=a;var r=re;re|=2;var s=mf();(Ee!==e||Ae!==n)&&(Vn=null,va=Ie()+500,kt(e,n));do try{m0();break}catch(l){ff(e,l)}while(!0);Pl(),Oo.current=s,re=r,we!==null?n=0:(Ee=null,Ae=0,n=Me)}if(n!==0){if(n===2&&(r=Si(e),r!==0&&(a=r,n=el(e,r))),n===1)throw t=xr,kt(e,0),qn(e,a),Qe(e,Ie()),t;if(n===6)qn(e,a);else{if(r=e.current.alternate,!(a&30)&&!p0(r)&&(n=Bo(e,a),n===2&&(s=Si(e),s!==0&&(a=s,n=el(e,s))),n===1))throw t=xr,kt(e,0),qn(e,a),Qe(e,Ie()),t;switch(e.finishedWork=r,e.finishedLanes=a,n){case 0:case 1:throw Error(H(345));case 2:bt(e,Ue,Vn);break;case 3:if(qn(e,a),(a&130023424)===a&&(n=Ql+500-Ie(),10<n)){if(wo(e,0)!==0)break;if(r=e.suspendedLanes,(r&a)!==a){Be(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Ai(bt.bind(null,e,Ue,Vn),n);break}bt(e,Ue,Vn);break;case 4:if(qn(e,a),(a&4194240)===a)break;for(n=e.eventTimes,r=-1;0<a;){var i=31-In(a);s=1<<i,i=n[i],i>r&&(r=i),a&=~s}if(a=r,a=Ie()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*u0(a/1960))-a,10<a){e.timeoutHandle=Ai(bt.bind(null,e,Ue,Vn),a);break}bt(e,Ue,Vn);break;case 5:bt(e,Ue,Vn);break;default:throw Error(H(329))}}}return Qe(e,Ie()),e.callbackNode===t?pf.bind(null,e):null}function el(e,n){var t=Xa;return e.current.memoizedState.isDehydrated&&(kt(e,n).flags|=256),e=Bo(e,n),e!==2&&(n=Ue,Ue=t,n!==null&&nl(n)),e}function nl(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function p0(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var a=0;a<t.length;a++){var r=t[a],s=r.getSnapshot;r=r.value;try{if(!wn(s(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qn(e,n){for(n&=~Xl,n&=~ms,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-In(n),a=1<<t;e[t]=-1,n&=~a}}function kd(e){if(re&6)throw Error(H(327));ca();var n=wo(e,0);if(!(n&1))return Qe(e,Ie()),null;var t=Bo(e,n);if(e.tag!==0&&t===2){var a=Si(e);a!==0&&(n=a,t=el(e,a))}if(t===1)throw t=xr,kt(e,0),qn(e,n),Qe(e,Ie()),t;if(t===6)throw Error(H(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,bt(e,Ue,Vn),Qe(e,Ie()),null}function ql(e,n){var t=re;re|=1;try{return e(n)}finally{re=t,re===0&&(va=Ie()+500,ds&&ht())}}function Mt(e){tt!==null&&tt.tag===0&&!(re&6)&&ca();var n=re;re|=1;var t=pn.transition,a=ce;try{if(pn.transition=null,ce=1,e)return e()}finally{ce=a,pn.transition=t,re=n,!(re&6)&&ht()}}function ec(){en=na.current,me(na)}function kt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Jg(t)),we!==null)for(t=we.return;t!==null;){var a=t;switch(Al(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&To();break;case 3:ha(),me(Ye),me(Le),Bl();break;case 5:Jl(a);break;case 4:ha();break;case 13:me(xe);break;case 19:me(xe);break;case 10:Rl(a.type._context);break;case 22:case 23:ec()}t=t.return}if(Ee=e,we=e=dt(e.current,null),Ae=en=n,Me=0,xr=null,Xl=ms=Nt=0,Ue=Xa=null,_t!==null){for(n=0;n<_t.length;n++)if(t=_t[n],a=t.interleaved,a!==null){t.interleaved=null;var r=a.next,s=t.pending;if(s!==null){var i=s.next;s.next=r,a.next=i}t.pending=a}_t=null}return e}function ff(e,n){do{var t=we;try{if(Pl(),fo.current=Lo,Ro){for(var a=ve.memoizedState;a!==null;){var r=a.queue;r!==null&&(r.pending=null),a=a.next}Ro=!1}if(Ct=0,Te=Se=ve=null,Za=!1,mr=0,Yl.current=null,t===null||t.return===null){Me=1,xr=n,we=null;break}e:{var s=e,i=t.return,l=t,d=n;if(n=Ae,l.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var u=d,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=dd(i);if(x!==null){x.flags&=-257,ud(x,i,l,s,n),x.mode&1&&cd(s,u,n),n=x,d=u;var h=n.updateQueue;if(h===null){var f=new Set;f.add(d),n.updateQueue=f}else h.add(d);break e}else{if(!(n&1)){cd(s,u,n),nc();break e}d=Error(H(426))}}else if(he&&l.mode&1){var _=dd(i);if(_!==null){!(_.flags&65536)&&(_.flags|=256),ud(_,i,l,s,n),$l(xa(d,l));break e}}s=d=xa(d,l),Me!==4&&(Me=2),Xa===null?Xa=[s]:Xa.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,n&=-n,s.lanes|=n;var b=Zp(s,d,n);ad(s,b);break e;case 1:l=d;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(lt===null||!lt.has(y)))){s.flags|=65536,n&=-n,s.lanes|=n;var w=Yp(s,l,n);ad(s,w);break e}}s=s.return}while(s!==null)}hf(t)}catch(T){n=T,we===t&&t!==null&&(we=t=t.return);continue}break}while(!0)}function mf(){var e=Oo.current;return Oo.current=Lo,e===null?Lo:e}function nc(){(Me===0||Me===3||Me===2)&&(Me=4),Ee===null||!(Nt&268435455)&&!(ms&268435455)||qn(Ee,Ae)}function Bo(e,n){var t=re;re|=2;var a=mf();(Ee!==e||Ae!==n)&&(Vn=null,kt(e,n));do try{f0();break}catch(r){ff(e,r)}while(!0);if(Pl(),re=t,Oo.current=a,we!==null)throw Error(H(261));return Ee=null,Ae=0,Me}function f0(){for(;we!==null;)gf(we)}function m0(){for(;we!==null&&!Lm();)gf(we)}function gf(e){var n=vf(e.alternate,e,en);e.memoizedProps=e.pendingProps,n===null?hf(e):we=n,Yl.current=null}function hf(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=i0(t,n),t!==null){t.flags&=32767,we=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,we=null;return}}else if(t=s0(t,n,en),t!==null){we=t;return}if(n=n.sibling,n!==null){we=n;return}we=n=e}while(n!==null);Me===0&&(Me=5)}function bt(e,n,t){var a=ce,r=pn.transition;try{pn.transition=null,ce=1,g0(e,n,t,a)}finally{pn.transition=r,ce=a}return null}function g0(e,n,t,a){do ca();while(tt!==null);if(re&6)throw Error(H(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(H(177));e.callbackNode=null,e.callbackPriority=0;var s=t.lanes|t.childLanes;if(Zm(e,s),e===Ee&&(we=Ee=null,Ae=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Xr||(Xr=!0,bf(jo,function(){return ca(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=pn.transition,pn.transition=null;var i=ce;ce=1;var l=re;re|=4,Yl.current=null,c0(e,t),df(t,e),$g(Di),So=!!Ei,Di=Ei=null,e.current=t,d0(t),Om(),re=l,ce=i,pn.transition=s}else e.current=t;if(Xr&&(Xr=!1,tt=e,Jo=r),s=e.pendingLanes,s===0&&(lt=null),Bm(t.stateNode),Qe(e,Ie()),n!==null)for(a=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],a(r.value,{componentStack:r.stack,digest:r.digest});if(Ko)throw Ko=!1,e=Qi,Qi=null,e;return Jo&1&&e.tag!==0&&ca(),s=e.pendingLanes,s&1?e===qi?Qa++:(Qa=0,qi=e):Qa=0,ht(),null}function ca(){if(tt!==null){var e=Zu(Jo),n=pn.transition,t=ce;try{if(pn.transition=null,ce=16>e?16:e,tt===null)var a=!1;else{if(e=tt,tt=null,Jo=0,re&6)throw Error(H(331));var r=re;for(re|=4,Z=e.current;Z!==null;){var s=Z,i=s.child;if(Z.flags&16){var l=s.deletions;if(l!==null){for(var d=0;d<l.length;d++){var u=l[d];for(Z=u;Z!==null;){var p=Z;switch(p.tag){case 0:case 11:case 15:Ya(8,p,s)}var m=p.child;if(m!==null)m.return=p,Z=m;else for(;Z!==null;){p=Z;var g=p.sibling,x=p.return;if(sf(p),p===u){Z=null;break}if(g!==null){g.return=x,Z=g;break}Z=x}}}var h=s.alternate;if(h!==null){var f=h.child;if(f!==null){h.child=null;do{var _=f.sibling;f.sibling=null,f=_}while(f!==null)}}Z=s}}if(s.subtreeFlags&2064&&i!==null)i.return=s,Z=i;else e:for(;Z!==null;){if(s=Z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ya(9,s,s.return)}var b=s.sibling;if(b!==null){b.return=s.return,Z=b;break e}Z=s.return}}var v=e.current;for(Z=v;Z!==null;){i=Z;var y=i.child;if(i.subtreeFlags&2064&&y!==null)y.return=i,Z=y;else e:for(i=v;Z!==null;){if(l=Z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:fs(9,l)}}catch(T){_e(l,l.return,T)}if(l===i){Z=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,Z=w;break e}Z=l.return}}if(re=r,ht(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(os,e)}catch{}a=!0}return a}finally{ce=t,pn.transition=n}}return!1}function jd(e,n,t){n=xa(t,n),n=Zp(e,n,1),e=it(e,n,1),n=Be(),e!==null&&(Cr(e,1,n),Qe(e,n))}function _e(e,n,t){if(e.tag===3)jd(e,e,t);else for(;n!==null;){if(n.tag===3){jd(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(lt===null||!lt.has(a))){e=xa(t,e),e=Yp(n,e,1),n=it(n,e,1),e=Be(),n!==null&&(Cr(n,1,e),Qe(n,e));break}}n=n.return}}function h0(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),n=Be(),e.pingedLanes|=e.suspendedLanes&t,Ee===e&&(Ae&t)===t&&(Me===4||Me===3&&(Ae&130023424)===Ae&&500>Ie()-Ql?kt(e,0):Xl|=t),Qe(e,n)}function xf(e,n){n===0&&(e.mode&1?(n=Kr,Kr<<=1,!(Kr&130023424)&&(Kr=4194304)):n=1);var t=Be();e=Gn(e,n),e!==null&&(Cr(e,n,t),Qe(e,t))}function x0(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),xf(e,t)}function v0(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(H(314))}a!==null&&a.delete(n),xf(e,t)}var vf;vf=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ye.current)We=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return We=!1,o0(e,n,t);We=!!(e.flags&131072)}else We=!1,he&&n.flags&1048576&&_p(n,zo,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;go(e,n),e=n.pendingProps;var r=fa(n,Le.current);la(n,t),r=Gl(null,n,a,e,r,t);var s=Hl();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Xe(a)?(s=!0,Eo(n)):s=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ol(n),r.updater=ps,n.stateNode=r,r._reactInternals=n,Ki(n,a,e,t),n=Fi(null,n,a,!0,s,t)):(n.tag=0,he&&s&&zl(n),Je(null,n,r,t),n=n.child),n;case 16:a=n.elementType;e:{switch(go(e,n),e=n.pendingProps,r=a._init,a=r(a._payload),n.type=a,r=n.tag=y0(a),e=bn(a,e),r){case 0:n=Bi(null,n,a,e,t);break e;case 1:n=md(null,n,a,e,t);break e;case 11:n=pd(null,n,a,e,t);break e;case 14:n=fd(null,n,a,bn(a.type,e),t);break e}throw Error(H(306,a,""))}return n;case 0:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:bn(a,r),Bi(e,n,a,r,t);case 1:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:bn(a,r),md(e,n,a,r,t);case 3:e:{if(ef(n),e===null)throw Error(H(387));a=n.pendingProps,s=n.memoizedState,r=s.element,Cp(e,n),Vo(n,a,null,t);var i=n.memoizedState;if(a=i.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){r=xa(Error(H(423)),n),n=gd(e,n,a,t,r);break e}else if(a!==r){r=xa(Error(H(424)),n),n=gd(e,n,a,t,r);break e}else for(tn=st(n.stateNode.containerInfo.firstChild),an=n,he=!0,_n=null,t=wp(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ma(),a===r){n=Hn(e,n,t);break e}Je(e,n,a,t)}n=n.child}return n;case 5:return Np(n),e===null&&Ri(n),a=n.type,r=n.pendingProps,s=e!==null?e.memoizedProps:null,i=r.children,zi(a,r)?i=null:s!==null&&zi(a,s)&&(n.flags|=32),qp(e,n),Je(e,n,i,t),n.child;case 6:return e===null&&Ri(n),null;case 13:return nf(e,n,t);case 4:return Kl(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=ga(n,null,a,t):Je(e,n,a,t),n.child;case 11:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:bn(a,r),pd(e,n,a,r,t);case 7:return Je(e,n,n.pendingProps,t),n.child;case 8:return Je(e,n,n.pendingProps.children,t),n.child;case 12:return Je(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(a=n.type._context,r=n.pendingProps,s=n.memoizedProps,i=r.value,pe(Ao,a._currentValue),a._currentValue=i,s!==null)if(wn(s.value,i)){if(s.children===r.children&&!Ye.current){n=Hn(e,n,t);break e}}else for(s=n.child,s!==null&&(s.return=n);s!==null;){var l=s.dependencies;if(l!==null){i=s.child;for(var d=l.firstContext;d!==null;){if(d.context===a){if(s.tag===1){d=Jn(-1,t&-t),d.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?d.next=d:(d.next=p.next,p.next=d),u.pending=d}}s.lanes|=t,d=s.alternate,d!==null&&(d.lanes|=t),Li(s.return,t,n),l.lanes|=t;break}d=d.next}}else if(s.tag===10)i=s.type===n.type?null:s.child;else if(s.tag===18){if(i=s.return,i===null)throw Error(H(341));i.lanes|=t,l=i.alternate,l!==null&&(l.lanes|=t),Li(i,t,n),i=s.sibling}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===n){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}Je(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,a=n.pendingProps.children,la(n,t),r=gn(r),a=a(r),n.flags|=1,Je(e,n,a,t),n.child;case 14:return a=n.type,r=bn(a,n.pendingProps),r=bn(a.type,r),fd(e,n,a,r,t);case 15:return Xp(e,n,n.type,n.pendingProps,t);case 17:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:bn(a,r),go(e,n),n.tag=1,Xe(a)?(e=!0,Eo(n)):e=!1,la(n,t),Wp(n,a,r),Ki(n,a,r,t),Fi(null,n,a,!0,e,t);case 19:return tf(e,n,t);case 22:return Qp(e,n,t)}throw Error(H(156,n.tag))};function bf(e,n){return Gu(e,n)}function b0(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function un(e,n,t,a){return new b0(e,n,t,a)}function tc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function y0(e){if(typeof e=="function")return tc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_l)return 11;if(e===Il)return 14}return 2}function dt(e,n){var t=e.alternate;return t===null?(t=un(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function vo(e,n,t,a,r,s){var i=2;if(a=e,typeof e=="function")tc(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Gt:return jt(t.children,r,s,n);case yl:i=8,r|=8;break;case ui:return e=un(12,t,n,r|2),e.elementType=ui,e.lanes=s,e;case pi:return e=un(13,t,n,r),e.elementType=pi,e.lanes=s,e;case fi:return e=un(19,t,n,r),e.elementType=fi,e.lanes=s,e;case Nu:return gs(t,r,s,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Su:i=10;break e;case Cu:i=9;break e;case _l:i=11;break e;case Il:i=14;break e;case Yn:i=16,a=null;break e}throw Error(H(130,e==null?e:typeof e,""))}return n=un(i,t,n,r),n.elementType=e,n.type=a,n.lanes=s,n}function jt(e,n,t,a){return e=un(7,e,a,n),e.lanes=t,e}function gs(e,n,t,a){return e=un(22,e,a,n),e.elementType=Nu,e.lanes=t,e.stateNode={isHidden:!1},e}function qs(e,n,t){return e=un(6,e,null,n),e.lanes=t,e}function ei(e,n,t){return n=un(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function _0(e,n,t,a,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=As(0),this.expirationTimes=As(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=As(0),this.identifierPrefix=a,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ac(e,n,t,a,r,s,i,l,d){return e=new _0(e,n,t,l,d),n===1?(n=1,s===!0&&(n|=8)):n=0,s=un(3,null,null,n),e.current=s,s.stateNode=e,s.memoizedState={element:a,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ol(s),e}function I0(e,n,t){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ft,key:a==null?null:""+a,children:e,containerInfo:n,implementation:t}}function yf(e){if(!e)return pt;e=e._reactInternals;e:{if(At(e)!==e||e.tag!==1)throw Error(H(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Xe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(H(171))}if(e.tag===1){var t=e.type;if(Xe(t))return bp(e,t,n)}return n}function _f(e,n,t,a,r,s,i,l,d){return e=ac(t,a,!0,e,r,s,i,l,d),e.context=yf(null),t=e.current,a=Be(),r=ct(t),s=Jn(a,r),s.callback=n??null,it(t,s,r),e.current.lanes=r,Cr(e,r,a),Qe(e,a),e}function hs(e,n,t,a){var r=n.current,s=Be(),i=ct(r);return t=yf(t),n.context===null?n.context=t:n.pendingContext=t,n=Jn(s,i),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=it(r,n,i),e!==null&&(kn(e,r,i,s),po(e,r,i)),i}function Fo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function rc(e,n){wd(e,n),(e=e.alternate)&&wd(e,n)}function k0(){return null}var If=typeof reportError=="function"?reportError:function(e){console.error(e)};function oc(e){this._internalRoot=e}xs.prototype.render=oc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(H(409));hs(e,n,null,null)};xs.prototype.unmount=oc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Mt(function(){hs(null,e,null,null)}),n[Fn]=null}};function xs(e){this._internalRoot=e}xs.prototype.unstable_scheduleHydration=function(e){if(e){var n=Qu();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Qn.length&&n!==0&&n<Qn[t].priority;t++);Qn.splice(t,0,e),t===0&&ep(e)}};function sc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function vs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Sd(){}function j0(e,n,t,a,r){if(r){if(typeof a=="function"){var s=a;a=function(){var u=Fo(i);s.call(u)}}var i=_f(n,a,e,0,null,!1,!1,"",Sd);return e._reactRootContainer=i,e[Fn]=i.current,cr(e.nodeType===8?e.parentNode:e),Mt(),i}for(;r=e.lastChild;)e.removeChild(r);if(typeof a=="function"){var l=a;a=function(){var u=Fo(d);l.call(u)}}var d=ac(e,0,!1,null,null,!1,!1,"",Sd);return e._reactRootContainer=d,e[Fn]=d.current,cr(e.nodeType===8?e.parentNode:e),Mt(function(){hs(n,d,t,a)}),d}function bs(e,n,t,a,r){var s=t._reactRootContainer;if(s){var i=s;if(typeof r=="function"){var l=r;r=function(){var d=Fo(i);l.call(d)}}hs(n,i,e,r)}else i=j0(t,n,e,r,a);return Fo(i)}Yu=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ja(n.pendingLanes);t!==0&&(wl(n,t|1),Qe(n,Ie()),!(re&6)&&(va=Ie()+500,ht()))}break;case 13:Mt(function(){var a=Gn(e,1);if(a!==null){var r=Be();kn(a,e,1,r)}}),rc(e,1)}};Sl=function(e){if(e.tag===13){var n=Gn(e,134217728);if(n!==null){var t=Be();kn(n,e,134217728,t)}rc(e,134217728)}};Xu=function(e){if(e.tag===13){var n=ct(e),t=Gn(e,n);if(t!==null){var a=Be();kn(t,e,n,a)}rc(e,n)}};Qu=function(){return ce};qu=function(e,n){var t=ce;try{return ce=e,n()}finally{ce=t}};ki=function(e,n,t){switch(n){case"input":if(hi(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var r=cs(a);if(!r)throw Error(H(90));Tu(a),hi(a,r)}}}break;case"textarea":Du(e,t);break;case"select":n=t.value,n!=null&&ra(e,!!t.multiple,n,!1)}};Lu=ql;Ou=Mt;var w0={usingClientEntryPoint:!1,Events:[Mr,Zt,cs,Pu,Ru,ql]},Pa={findFiberByHostInstance:yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},S0={bundleType:Pa.bundleType,version:Pa.version,rendererPackageName:Pa.rendererPackageName,rendererConfig:Pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Un.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bu(e),e===null?null:e.stateNode},findFiberByHostInstance:Pa.findFiberByHostInstance||k0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qr.isDisabled&&Qr.supportsFiber)try{os=Qr.inject(S0),Tn=Qr}catch{}}on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w0;on.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sc(n))throw Error(H(200));return I0(e,n,null,t)};on.createRoot=function(e,n){if(!sc(e))throw Error(H(299));var t=!1,a="",r=If;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=ac(e,1,!1,null,null,t,!1,a,r),e[Fn]=n.current,cr(e.nodeType===8?e.parentNode:e),new oc(n)};on.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(H(188)):(e=Object.keys(e).join(","),Error(H(268,e)));return e=Bu(n),e=e===null?null:e.stateNode,e};on.flushSync=function(e){return Mt(e)};on.hydrate=function(e,n,t){if(!vs(n))throw Error(H(200));return bs(null,e,n,!0,t)};on.hydrateRoot=function(e,n,t){if(!sc(e))throw Error(H(405));var a=t!=null&&t.hydratedSources||null,r=!1,s="",i=If;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=_f(n,null,e,1,t??null,r,!1,s,i),e[Fn]=n.current,cr(e),a)for(e=0;e<a.length;e++)t=a[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new xs(n)};on.render=function(e,n,t){if(!vs(n))throw Error(H(200));return bs(null,e,n,!1,t)};on.unmountComponentAtNode=function(e){if(!vs(e))throw Error(H(40));return e._reactRootContainer?(Mt(function(){bs(null,null,e,!1,function(){e._reactRootContainer=null,e[Fn]=null})}),!0):!1};on.unstable_batchedUpdates=ql;on.unstable_renderSubtreeIntoContainer=function(e,n,t,a){if(!vs(t))throw Error(H(200));if(e==null||e._reactInternals===void 0)throw Error(H(38));return bs(e,n,t,!1,a)};on.version="18.3.1-next-f1338f8080-20240426";function kf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(kf)}catch(e){console.error(e)}}kf(),Iu.exports=on;var Er=Iu.exports,Cd=Er;ci.createRoot=Cd.createRoot,ci.hydrateRoot=Cd.hydrateRoot;const da=["player1","player2","player3","player4","player5","player6","player7","player8"];function C0(e,n){return e.players[n]}function N0(e,n,t){return{...e,players:{...e.players,[n]:t}}}function jf(e,n){const t=e.teams[n];return e.playerIds.filter(a=>a!==n&&e.teams[a]!==t&&!e.players[a].isDefeated)}function Ce(e){return`P${e.replace("player","")}`}const M0=[{id:"ag-1",unitDeckId:"AG",nameJa:"ランス",nameCn:"长枪",actionType:"melee",frontImageId:"cards/ag/ag-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"ag-2",unitDeckId:"AG",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ag/ag-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ag-3",unitDeckId:"AG",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ag/ag-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ag-4",unitDeckId:"AG",nameJa:"スモールレーザー",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/ag/ag-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2,isEnergyWeapon:!0},{id:"ag-5",unitDeckId:"AG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ag/ag-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"ag-6",unitDeckId:"AG",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ag/ag-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-7",unitDeckId:"AG",nameJa:"ランス",nameCn:"长枪",actionType:"melee",frontImageId:"cards/ag/ag-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"ag-8",unitDeckId:"AG",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ag/ag-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-9",unitDeckId:"AG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/ag/ag-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"ag-10",unitDeckId:"AG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ag-11",unitDeckId:"AG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/ag/ag-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"ag-12",unitDeckId:"AG",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ag/ag-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"ag-13",unitDeckId:"AG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ag-14",unitDeckId:"AG",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ag/ag-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-15",unitDeckId:"AG",nameJa:"バーニア",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/ag/ag-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ag-16",unitDeckId:"AG",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/ag/ag-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ag-17",unitDeckId:"AG",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/ag/ag-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ag-18",unitDeckId:"AG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ag-19",unitDeckId:"AG",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ag/ag-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-20",unitDeckId:"AG",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ag/ag-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-21",unitDeckId:"AG",nameJa:"バーニア",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/ag/ag-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"}],T0=[{id:"ar-1",unitDeckId:"AR",nameJa:"シールド",nameCn:"护盾",actionType:"armor",frontImageId:"cards/ar/ar-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止4点射击伤害。该卡在准备区时，可以将其破坏并防止4点任意伤害。",armorValue:4},{id:"ar-2",unitDeckId:"AR",nameJa:"アンカー",nameCn:"长锚",actionType:"ranged",frontImageId:"cards/ar/ar-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:1,rangeMax:3,damage:void 0,effectText:"射击前可以改变机甲的朝向。命中后，使攻击目标强制移动到自机面前，期间目标朝向不变。"},{id:"ar-3",unitDeckId:"AR",nameJa:"陸上機雷",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/ar/ar-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"在自机周围8格不重叠地设置机雷指示物和替身雷各2个。在各个时机结束时，检查是否有机甲位于指示物所在格。若有，将指示物翻开展示，如果是机雷的话对所在格中的机甲造成伤害，然后将指示物弃掉。"},{id:"ar-4",unitDeckId:"AR",nameJa:"陸上機雷",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/ar/ar-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"在自机周围8格不重叠地设置机雷指示物和替身雷各2个。在各个时机结束时，检查是否有机甲位于指示物所在格。若有，将指示物翻开展示，如果是机雷的话对所在格中的机甲造成伤害，然后将指示物弃掉。"},{id:"ar-5",unitDeckId:"AR",nameJa:"メイス",nameCn:"狼牙棒",actionType:"melee",frontImageId:"cards/ar/ar-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ar-6",unitDeckId:"AR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ar/ar-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ar-7",unitDeckId:"AR",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ar-8",unitDeckId:"AR",nameJa:"移動６",nameCn:"移动6",actionType:"movement",frontImageId:"cards/ar/ar-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:6,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-9",unitDeckId:"AR",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ar/ar-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"ar-10",unitDeckId:"AR",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/ar/ar-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ar-11",unitDeckId:"AR",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ar-12",unitDeckId:"AR",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/ar/ar-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ar-13",unitDeckId:"AR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ar/ar-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ar-14",unitDeckId:"AR",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ar-15",unitDeckId:"AR",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ar/ar-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-16",unitDeckId:"AR",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ar/ar-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-17",unitDeckId:"AR",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ar/ar-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-18",unitDeckId:"AR",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ar/ar-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-19",unitDeckId:"AR",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ar/ar-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-20",unitDeckId:"AR",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ar/ar-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"}],E0=[{id:"bg-1",unitDeckId:"BG",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4,hasBombIcon:!0},{id:"bg-2",unitDeckId:"BG",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4,hasBombIcon:!0},{id:"bg-3",unitDeckId:"BG",nameJa:"ミドルレーザ",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/bg/bg-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3},{id:"bg-4",unitDeckId:"BG",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4,hasBombIcon:!0},{id:"bg-5",unitDeckId:"BG",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/bg/bg-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"bg-6",unitDeckId:"BG",nameJa:"スモールレーザ",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/bg/bg-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2},{id:"bg-7",unitDeckId:"BG",nameJa:"スナイパーライフル",nameCn:"狙击步枪",actionType:"ranged",frontImageId:"cards/bg/bg-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3,hasBombIcon:!0},{id:"bg-8",unitDeckId:"BG",nameJa:"スナイパーライフル",nameCn:"狙击步枪",actionType:"ranged",frontImageId:"cards/bg/bg-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3,hasBombIcon:!0},{id:"bg-9",unitDeckId:"BG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/bg/bg-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"bg-10",unitDeckId:"BG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/bg/bg-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"bg-11",unitDeckId:"BG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/bg/bg-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"bg-12",unitDeckId:"BG",nameJa:"スモールレーザ",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/bg/bg-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2},{id:"bg-13",unitDeckId:"BG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/bg/bg-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"bg-14",unitDeckId:"BG",nameJa:"ミドルレーザ",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/bg/bg-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3},{id:"bg-15",unitDeckId:"BG",nameJa:"スナイパーライフル",nameCn:"狙击步枪",actionType:"ranged",frontImageId:"cards/bg/bg-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3,hasBombIcon:!0},{id:"bg-16",unitDeckId:"BG",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/bg/bg-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"bg-17",unitDeckId:"BG",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/bg/bg-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"bg-18",unitDeckId:"BG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/bg/bg-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"bg-19",unitDeckId:"BG",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/bg/bg-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg-20",unitDeckId:"BG",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/bg/bg-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg-21",unitDeckId:"BG",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/bg/bg-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg-22",unitDeckId:"BG",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/bg/bg-22-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"bg-23",unitDeckId:"BG",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/bg/bg-23-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"}],D0=[{id:"ho-1",unitDeckId:"HO",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ho/ho-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-2",unitDeckId:"HO",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ho/ho-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-3",unitDeckId:"HO",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ho/ho-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-4",unitDeckId:"HO",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ho/ho-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-5",unitDeckId:"HO",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ho/ho-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"ho-6",unitDeckId:"HO",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ho/ho-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"ho-7",unitDeckId:"HO",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ho/ho-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ho-8",unitDeckId:"HO",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ho/ho-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-9",unitDeckId:"HO",nameJa:"移動６",nameCn:"移动6",actionType:"movement",frontImageId:"cards/ho/ho-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:6,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-10",unitDeckId:"HO",nameJa:"移動７",nameCn:"移动7",actionType:"movement",frontImageId:"cards/ho/ho-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:7,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-11",unitDeckId:"HO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ho/ho-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ho-12",unitDeckId:"HO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ho/ho-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ho-13",unitDeckId:"HO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/ho/ho-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"ho-14",unitDeckId:"HO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/ho/ho-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"ho-15",unitDeckId:"HO",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ho/ho-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ho-16",unitDeckId:"HO",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/ho/ho-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"ho-17",unitDeckId:"HO",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/ho/ho-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"}],z0=[{id:"hy-1",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-2",unitDeckId:"HY",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-3",unitDeckId:"HY",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-4",unitDeckId:"HY",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-5",unitDeckId:"HY",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-6",unitDeckId:"HY",nameJa:"ガトリングガン",nameCn:"加特林",actionType:"ranged",frontImageId:"cards/hy/hy-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:5,damage:3,hasBombIcon:!0},{id:"hy-7",unitDeckId:"HY",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-8",unitDeckId:"HY",nameJa:"ガトリングガン",nameCn:"加特林",actionType:"ranged",frontImageId:"cards/hy/hy-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:5,damage:3,hasBombIcon:!0},{id:"hy-9",unitDeckId:"HY",nameJa:"ホイール",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/hy/hy-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"hy-10",unitDeckId:"HY",nameJa:"ホイール",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/hy/hy-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"hy-11",unitDeckId:"HY",nameJa:"スパイク",nameCn:"长钉",actionType:"charge",frontImageId:"cards/hy/hy-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"不进行突击移动，选择自机正面的机甲为攻击目标。对对方造成自机突击伤害+1的近战伤害。对自机造成对方被突击伤害-1的近战伤害。"},{id:"hy-12",unitDeckId:"HY",nameJa:"シールド",nameCn:"护盾",actionType:"armor",frontImageId:"cards/hy/hy-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止4点射击伤害。该卡在准备区时，可以将其破坏并防止4点任意伤害。",armorValue:4},{id:"hy-13",unitDeckId:"HY",nameJa:"シールド",nameCn:"护盾",actionType:"armor",frontImageId:"cards/hy/hy-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止4点射击伤害。该卡在准备区时，可以将其破坏并防止4点任意伤害。",armorValue:4},{id:"hy-14",unitDeckId:"HY",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/hy/hy-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"hy-15",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-16",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-17",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-18",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-19",unitDeckId:"HY",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/hy/hy-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"hy-20",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-21",unitDeckId:"HY",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/hy/hy-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"hy-22",unitDeckId:"HY",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/hy/hy-22-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"hy-23",unitDeckId:"HY",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/hy/hy-23-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"hy-24",unitDeckId:"HY",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-24-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0}],A0=[{id:"lg-1",unitDeckId:"LG",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/lg/lg-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-2",unitDeckId:"LG",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/lg/lg-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-3",unitDeckId:"LG",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/lg/lg-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-4",unitDeckId:"LG",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/lg/lg-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-5",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-6",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-7",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-8",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-9",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-10",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-11",unitDeckId:"LG",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/lg/lg-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"lg-12",unitDeckId:"LG",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/lg/lg-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"lg-13",unitDeckId:"LG",nameJa:"スパイク",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/lg/lg-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"lg-14",unitDeckId:"LG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/lg/lg-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"lg-15",unitDeckId:"LG",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/lg/lg-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"lg-16",unitDeckId:"LG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/lg/lg-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"lg-17",unitDeckId:"LG",nameJa:"パイルバンカー",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/lg/lg-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"lg-18",unitDeckId:"LG",nameJa:"パイルバンカー",nameCn:"长钉",actionType:"charge",frontImageId:"cards/lg/lg-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"不进行突击移动，选择自机正面的机甲为攻击目标。对对方造成自机突击伤害+1的近战伤害。对自机造成对方被突击伤害-1的近战伤害。"},{id:"lg-19",unitDeckId:"LG",nameJa:"クロー",nameCn:"爪",actionType:"melee",frontImageId:"cards/lg/lg-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:2,effectText:"（结算伤害前）如果攻击目标的手牌、辅助区、准备区中有类别包括“装甲”的卡牌，选择其中两张破坏。"},{id:"lg-20",unitDeckId:"LG",nameJa:"クロー",nameCn:"爪",actionType:"melee",frontImageId:"cards/lg/lg-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:2,effectText:"（结算伤害前）如果攻击目标的手牌、辅助区、准备区中有类别包括“装甲”的卡牌，选择其中两张破坏。"},{id:"lg-21",unitDeckId:"LG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/lg/lg-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"lg-22",unitDeckId:"LG",nameJa:"ホイール",nameCn:"滑轮",actionType:"auxiliary",frontImageId:"cards/lg/lg-22-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:○、近战:×。使用后移动力+2。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"lg-23",unitDeckId:"LG",nameJa:"ホイール",nameCn:"滑轮",actionType:"auxiliary",frontImageId:"cards/lg/lg-23-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:○、近战:×。使用后移动力+2。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"}],$0=[{id:"lo-1",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-2",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-3",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-4",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-5",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-6",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-7",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-8",unitDeckId:"LO",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/lo/lo-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"lo-9",unitDeckId:"LO",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/lo/lo-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"lo-10",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-11",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-12",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-13",unitDeckId:"LO",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/lo/lo-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-14",unitDeckId:"LO",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/lo/lo-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-15",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-16",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-17",unitDeckId:"LO",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/lo/lo-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-18",unitDeckId:"LO",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/lo/lo-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-19",unitDeckId:"LO",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/lo/lo-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-20",unitDeckId:"LO",nameJa:"スモールレーザー",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/lo/lo-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2,isEnergyWeapon:!0}],V0=[{id:"tr-1",unitDeckId:"TR",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/tr/tr-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-2",unitDeckId:"TR",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/tr/tr-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-3",unitDeckId:"TR",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/tr/tr-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-4",unitDeckId:"TR",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/tr/tr-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-5",unitDeckId:"TR",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/tr/tr-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-6",unitDeckId:"TR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/tr/tr-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"tr-7",unitDeckId:"TR",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/tr/tr-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"tr-8",unitDeckId:"TR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/tr/tr-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"tr-9",unitDeckId:"TR",nameJa:"移動６",nameCn:"移动6",actionType:"movement",frontImageId:"cards/tr/tr-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:6,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-10",unitDeckId:"TR",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/tr/tr-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"tr-11",unitDeckId:"TR",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/tr/tr-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"tr-12",unitDeckId:"TR",nameJa:"アクス",nameCn:"斧头",actionType:"melee",frontImageId:"cards/tr/tr-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"tr-13",unitDeckId:"TR",nameJa:"アクス",nameCn:"斧头",actionType:"melee",frontImageId:"cards/tr/tr-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"tr-14",unitDeckId:"TR",nameJa:"パイルバンカー",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/tr/tr-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"tr-15",unitDeckId:"TR",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/tr/tr-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"tr-16",unitDeckId:"TR",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/tr/tr-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"tr-17",unitDeckId:"TR",nameJa:"パイルバンカー",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/tr/tr-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"tr-18",unitDeckId:"TR",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/tr/tr-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"tr-19",unitDeckId:"TR",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/tr/tr-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0}],P0=[{id:"zb-1",unitDeckId:"ZB",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ag/ag-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-2",unitDeckId:"ZB",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ag/ag-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-3",unitDeckId:"ZB",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ag/ag-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-4",unitDeckId:"ZB",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ag/ag-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-5",unitDeckId:"ZB",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ag/ag-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-6",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-7",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-8",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-9",unitDeckId:"ZB",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ag/ag-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-10",unitDeckId:"ZB",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ag/ag-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-11",unitDeckId:"ZB",nameJa:"ムーブセンサー",nameCn:"移动感应器",actionType:"auxiliary",frontImageId:"cards/ho/ho-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-12",unitDeckId:"ZB",nameJa:"ムーブセンサー",nameCn:"移动感应器",actionType:"auxiliary",frontImageId:"cards/ho/ho-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-13",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-14",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-15",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-16",unitDeckId:"ZB",nameJa:"ラージレーザー",nameCn:"大口径激光",actionType:"ranged",frontImageId:"cards/bg/bg-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"zb-17",unitDeckId:"ZB",nameJa:"ブレード",nameCn:"剑",actionType:"melee",frontImageId:"cards/zb/zb-17-front.png",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"zb-18",unitDeckId:"ZB",nameJa:"バルカン",nameCn:"火神炮",actionType:"ranged",frontImageId:"cards/zb/zb-18-front.png",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:2,damage:2},{id:"zb-19",unitDeckId:"ZB",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ag/ag-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-20",unitDeckId:"ZB",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ag/ag-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-21",unitDeckId:"ZB",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4},{id:"zb-22",unitDeckId:"ZB",nameJa:"ラージレーザー",nameCn:"大口径激光",actionType:"ranged",frontImageId:"cards/bg/bg-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"zb-23",unitDeckId:"ZB",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4}],R0=[{id:"ag_plus-1",unitDeckId:"AG+",nameJa:"コルセスカ",nameCn:"长柄三叉矛",actionType:"melee",frontImageId:"cards/ag_plus/ag_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ag_plus-2",unitDeckId:"AG+",nameJa:"コルセスカ",nameCn:"长柄三叉矛",actionType:"melee",frontImageId:"cards/ag_plus/ag_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ag_plus-3",unitDeckId:"AG+",nameJa:"ネット",nameCn:"网",actionType:"ranged",frontImageId:"cards/ag_plus/ag_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:5,damage:void 0},{id:"ag_plus-4",unitDeckId:"AG+",nameJa:"ボーラ",nameCn:"投石索",actionType:"ranged",frontImageId:"cards/ag_plus/ag_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:4,damage:void 0},{id:"ag_plus-5",unitDeckId:"AG+",nameJa:"バルカン",nameCn:"火神炮",actionType:"ranged",frontImageId:"cards/ag_plus/ag_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:2,damage:2}],L0=[{id:"ar_plus-1",unitDeckId:"AR+",nameJa:"ウォーハンマー",nameCn:"战锤",actionType:"melee",frontImageId:"cards/ar_plus/ar_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"ar_plus-2",unitDeckId:"AR+",nameJa:"強化機雷",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/ar_plus/ar_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,hasBombIcon:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"ar_plus-3",unitDeckId:"AR+",nameJa:"ロングアンカー",nameCn:"长锚",actionType:"ranged",frontImageId:"cards/ar_plus/ar_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:4,damage:1},{id:"ar_plus-4",unitDeckId:"AR+",nameJa:"強化機雷",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/ar_plus/ar_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,hasBombIcon:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5}],O0=[{id:"bg_plus-1",unitDeckId:"BG+",nameJa:"自爆装置",nameCn:"自爆装置",actionType:"mine",frontImageId:"cards/bg_plus/bg_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,hasBombIcon:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg_plus-2",unitDeckId:"BG+",nameJa:"大口径ロケット砲",nameCn:"大口径火箭炮",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:5},{id:"bg_plus-3",unitDeckId:"BG+",nameJa:"大口径ロケット砲",nameCn:"大口径火箭炮",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:5},{id:"bg_plus-4",unitDeckId:"BG+",nameJa:"高品質ライフル",nameCn:"高品质步枪",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3},{id:"bg_plus-5",unitDeckId:"BG+",nameJa:"スモークミサイル",nameCn:"烟雾导弹",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:5,damage:void 0}],K0=[{id:"ho_plus-1",unitDeckId:"HO+",nameJa:"スタンウィップ",nameCn:"电击鞭",actionType:"melee",frontImageId:"cards/ho_plus/ho_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:1},{id:"ho_plus-2",unitDeckId:"HO+",nameJa:"チェーンブレード",nameCn:"链锯剑",actionType:"melee",frontImageId:"cards/ho_plus/ho_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ho_plus-3",unitDeckId:"HO+",nameJa:"高品質ロケット砲",nameCn:"高品质火箭炮",actionType:"ranged",frontImageId:"cards/ho_plus/ho_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4},{id:"ho_plus-4",unitDeckId:"HO+",nameJa:"火炎放射器",nameCn:"火焰喷射器",actionType:"ranged",frontImageId:"cards/ho_plus/ho_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2}],J0=[{id:"hy_plus-1",unitDeckId:"HY+",nameJa:"ショットガン",nameCn:"散弹枪",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:3,damage:4},{id:"hy_plus-2",unitDeckId:"HY+",nameJa:"ショットガン",nameCn:"散弹枪",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:3,damage:4},{id:"hy_plus-3",unitDeckId:"HY+",nameJa:"ガトリングカノン",nameCn:"加特林炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:4},{id:"hy_plus-4",unitDeckId:"HY+",nameJa:"ガトリングカノン",nameCn:"加特林炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:4},{id:"hy_plus-5",unitDeckId:"HY+",nameJa:"ガトリングカノン",nameCn:"加特林炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:4},{id:"hy_plus-6",unitDeckId:"HY+",nameJa:"ミサイルシールド",nameCn:"导弹盾",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3},{id:"hy_plus-7",unitDeckId:"HY+",nameJa:"高品質ロケット砲",nameCn:"高品质火箭炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4},{id:"hy_plus-8",unitDeckId:"HY+",nameJa:"ミサイルシールド",nameCn:"导弹盾",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3}],B0=[{id:"lg_plus-1",unitDeckId:"LG+",nameJa:"ヒートクロー",nameCn:"热力爪",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-2",unitDeckId:"LG+",nameJa:"グレネードランチャー",nameCn:"榴弹发射器",actionType:"ranged",frontImageId:"cards/lg_plus/lg_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:5,damage:3},{id:"lg_plus-3",unitDeckId:"LG+",nameJa:"グレネードランチャー",nameCn:"榴弹发射器",actionType:"ranged",frontImageId:"cards/lg_plus/lg_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:5,damage:3},{id:"lg_plus-4",unitDeckId:"LG+",nameJa:"キャタピラ",nameCn:"履带",actionType:"auxiliary",frontImageId:"cards/lg_plus/lg_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-5",unitDeckId:"LG+",nameJa:"リボルバンカー",nameCn:"左轮打桩机",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6},{id:"lg_plus-6",unitDeckId:"LG+",nameJa:"キャタピラ",nameCn:"履带",actionType:"auxiliary",frontImageId:"cards/lg_plus/lg_plus-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-7",unitDeckId:"LG+",nameJa:"ヒートクロー",nameCn:"热力爪",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-8",unitDeckId:"LG+",nameJa:"リボルバンカー",nameCn:"左轮打桩机",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6}],F0=[{id:"lo_plus-1",unitDeckId:"LO+",nameJa:"防水膜",nameCn:"防水膜",actionType:"auxiliary",frontImageId:"cards/lo_plus/lo_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo_plus-2",unitDeckId:"LO+",nameJa:"追加装甲",nameCn:"附加装甲",actionType:"armor",frontImageId:"cards/lo_plus/lo_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"lo_plus-3",unitDeckId:"LO+",nameJa:"パルスレーザー",nameCn:"脉冲激光",actionType:"ranged",frontImageId:"cards/lo_plus/lo_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:2,isEnergyWeapon:!0},{id:"lo_plus-4",unitDeckId:"LO+",nameJa:"サウンドストーム",nameCn:"声波风暴",actionType:"melee",frontImageId:"cards/lo_plus/lo_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0}],G0=[{id:"tr_plus-1",unitDeckId:"TR+",nameJa:"サウンドウェーブ",nameCn:"声波",actionType:"melee",frontImageId:"cards/tr_plus/tr_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr_plus-2",unitDeckId:"TR+",nameJa:"バルディッシュ",nameCn:"长柄斧",actionType:"melee",frontImageId:"cards/tr_plus/tr_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"tr_plus-3",unitDeckId:"TR+",nameJa:"バルディッシュ",nameCn:"长柄斧",actionType:"melee",frontImageId:"cards/tr_plus/tr_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"tr_plus-4",unitDeckId:"TR+",nameJa:"高圧縮レーザー",nameCn:"高压缩激光",actionType:"ranged",frontImageId:"cards/tr_plus/tr_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:4,isEnergyWeapon:!0},{id:"tr_plus-5",unitDeckId:"TR+",nameJa:"高圧縮レーザー",nameCn:"高压缩激光",actionType:"ranged",frontImageId:"cards/tr_plus/tr_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:4,isEnergyWeapon:!0}],H0=[{id:"zb_plus-1",unitDeckId:"ZB+",nameJa:"広射程ミサイル",nameCn:"广射程导弹",actionType:"ranged",frontImageId:"cards/zb_plus/zb_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:3},{id:"zb_plus-2",unitDeckId:"ZB+",nameJa:"ホバー",nameCn:"悬浮器",actionType:"auxiliary",frontImageId:"cards/zb_plus/zb_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb_plus-3",unitDeckId:"ZB+",nameJa:"ホバー",nameCn:"悬浮器",actionType:"auxiliary",frontImageId:"cards/zb_plus/zb_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb_plus-4",unitDeckId:"ZB+",nameJa:"チェーンブレード",nameCn:"链锯剑",actionType:"melee",frontImageId:"cards/zb_plus/zb_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"zb_plus-5",unitDeckId:"ZB+",nameJa:"ジャイアントシザース",nameCn:"巨型剪刀",actionType:"melee",frontImageId:"cards/zb_plus/zb_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:10},{id:"zb_plus-6",unitDeckId:"ZB+",nameJa:"広射程ミサイル",nameCn:"广射程导弹",actionType:"ranged",frontImageId:"cards/zb_plus/zb_plus-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:3}],U0=[{id:"ダミー-1",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-2",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-3",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-4",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-5",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-6",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-7",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-8",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-9",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-10",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-11",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-12",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-13",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-14",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-15",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-16",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-17",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-18",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-19",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-20",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0}],W0=[{id:"強化機雷-1",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-2",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-3",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-4",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-5",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-6",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-7",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-8",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-9",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-10",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-11",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-12",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-13",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-14",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-15",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-16",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5}],Z0=[{id:"陸上機雷-1",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-2",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-3",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-4",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-5",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-6",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-7",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-8",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-9",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-10",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-11",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-12",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-13",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-14",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-15",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-16",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-17",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-18",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-19",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-20",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3}],ba={AG:M0,AR:T0,BG:E0,HO:D0,HY:z0,LG:A0,LO:$0,TR:V0,ZB:P0,"AG+":R0,"AR+":L0,"BG+":O0,"HO+":K0,"HY+":J0,"LG+":B0,"LO+":F0,"TR+":G0,"ZB+":H0,ダミー:U0,強化機雷:W0,陸上機雷:Z0};let Y0=0;function X0(e,n){return`${e}-${n}-${Y0++}`}function Q0(e,n){const a=(ba[e]??[]).map(r=>({instanceId:X0(r.id,n),defId:r.id,destroyed:!1}));return q0(a)}function q0(e){const n=[...e];for(let t=n.length-1;t>0;t--){const a=Math.floor(Math.random()*(t+1));[n[t],n[a]]=[n[a],n[t]]}return n}function wf(e,n){const t=[...e];let a=n>>>0;for(let r=t.length-1;r>0;r--){a=a+1831565813>>>0;let s=Math.imul(a^a>>>15,a|1);s^=s+Math.imul(s^s>>>7,s|61);const i=((s^s>>>14)>>>0)/4294967296,l=Math.floor(i*(r+1));[t[r],t[l]]=[t[l],t[r]]}return{shuffled:t,nextSeed:a}}function eh(e,n){const t=Math.min(n,e.length);return{drawn:e.slice(0,t),remaining:e.slice(t)}}function ne(e){for(const n of Object.values(ba)){const t=n.find(a=>a.id===e);if(t)return t}}const c=(e=0)=>({terrain:"plain",elevation:0,variant:e}),I=(e=0)=>({terrain:"sand",elevation:0,variant:e}),F=(e=0)=>({terrain:"rubble",elevation:0,variant:e}),B=(e=0)=>({terrain:"forest",elevation:0,variant:e}),P=(e=0)=>({terrain:"water",elevation:0,variant:e}),N=e=>({terrain:"highland",elevation:e,variant:e}),nh={id:"map_1a",nameJa:"基本マップ1a",nameCn:"基础地图1a",width:7,height:11,maxPlayers:2,maxTeams:2,cells:[[I(),I(),I(),I(),I(),I(),I()],[c(),c(),c(),c(),c(),c(),c()],[c(),c(),c(),c(),c(),c(),c()],[N(2),N(1),c(),c(),c(),N(2),N(2)],[N(1),N(1),c(),c(),c(),N(2),c()],[c(),c(),c(),c(),c(),N(2),c()],[c(),c(),c(),c(),c(),c(),c()],[c(),c(),c(),N(1),N(1),N(2),N(2)],[c(),c(),c(),c(),c(),c(),c()],[c(),c(),c(),c(),c(),c(),c()],[F(),F(),F(),F(),F(),F(),F()]],startZones:{0:[{row:0,col:2},{row:0,col:3},{row:0,col:4}],1:[{row:10,col:2},{row:10,col:3},{row:10,col:4}]}},th={id:"map_2a",nameJa:"基本マップ2a",nameCn:"基础地图2a",width:7,height:11,maxPlayers:2,maxTeams:2,cells:[[I(),I(),I(),I(),I(),I(),I()],[c(),c(),c(),c(),c(),c(),c()],[N(2),N(2),c(),c(),c(),c(),c()],[N(2),c(),c(),c(),c(),c(),c()],[N(2),c(),c(),c(),c(),c(),c()],[N(2),c(),c(),c(),c(),c(),c()],[N(2),N(2),c(),c(),c(),c(),c()],[c(),c(),c(),c(),B(),B(),c()],[c(),c(),c(),c(),B(),B(),c()],[c(),c(),c(),c(),c(),c(),c()],[I(),I(),I(),I(),I(),I(),I()]],startZones:{0:[{row:0,col:2},{row:0,col:3},{row:0,col:4}],1:[{row:10,col:2},{row:10,col:3},{row:10,col:4}]}},ah={id:"map_2b",nameJa:"基本マップ2b",nameCn:"基础地图2b",width:7,height:11,maxPlayers:2,maxTeams:2,cells:[[B(),B(),B(),c(),c(),c(),c()],[P(),P(),I(),c(),c(),c(),c()],[P(),P(),I(),c(),c(),c(),c()],[I(),P(),P(),I(),c(),c(),c()],[c(),I(),P(),P(),I(),c(),c()],[c(),c(),I(),P(),P(),I(),c()],[c(),c(),c(),P(),P(),I(),c()],[c(),c(),c(),I(),P(),P(),c()],[c(),c(),c(),c(),I(),P(),P()],[c(),c(),c(),c(),c(),c(),c()],[c(),c(),I(),I(),I(),c(),c()]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:0,col:2}],1:[{row:10,col:2},{row:10,col:3},{row:10,col:4}]}},rh={id:"map_3a",nameJa:"峡谷要塞",nameCn:"峡谷要塞",width:9,height:13,maxPlayers:4,maxTeams:4,cells:[[I(),I(),I(),I(),I(),I(),I(),I(),I()],[B(0),c(),c(),c(),c(),c(),c(),c(),B(1)],[c(),c(),c(),c(),c(),c(),c(),c(),c()],[N(2),N(3),N(1),c(),c(),c(),N(1),N(2),N(2)],[N(2),N(2),c(),c(),F(1),c(),c(),N(1),N(2)],[N(1),c(),F(0),F(2),c(),F(1),F(3),c(),N(1)],[c(),I(),P(0),P(1),I(),P(2),P(0),I(),c()],[N(1),c(),F(3),F(0),c(),F(2),F(1),c(),N(1)],[N(2),N(1),c(),c(),F(0),c(),c(),N(2),N(2)],[N(2),N(2),N(1),c(),c(),c(),N(1),N(3),N(2)],[c(),c(),c(),c(),c(),c(),c(),c(),c()],[B(2),c(),c(),c(),c(),c(),c(),c(),B(3)],[I(),I(),I(),I(),I(),I(),I(),I(),I()]],startZones:{0:[{row:0,col:1},{row:0,col:3},{row:0,col:4},{row:0,col:5},{row:0,col:7}],1:[{row:12,col:1},{row:12,col:3},{row:12,col:4},{row:12,col:5},{row:12,col:7}],2:[{row:2,col:0},{row:6,col:0}],3:[{row:2,col:8},{row:6,col:8}]}},oh={id:"map_3b",nameJa:"群島戦域",nameCn:"群岛战域",width:9,height:13,maxPlayers:4,maxTeams:4,cells:[[B(0),B(1),I(),I(),P(0),P(1),c(),c(),c()],[B(2),I(),c(),I(),P(2),c(),c(),I(),P(0)],[I(),P(0),I(),c(),c(),I(),P(1),P(0),P(2)],[P(1),P(2),c(),c(),N(1),c(),c(),P(2),P(1)],[P(0),I(),c(),N(1),N(2),N(1),c(),I(),P(0)],[P(2),c(),N(1),N(2),N(3),N(2),N(1),c(),P(1)],[P(1),I(),c(),N(2),B(0),N(2),c(),I(),P(2)],[P(0),c(),N(1),N(2),N(3),N(2),N(1),c(),P(0)],[P(2),I(),c(),N(1),N(2),N(1),c(),I(),P(1)],[P(1),P(0),c(),c(),N(1),c(),c(),P(0),P(2)],[P(0),P(2),P(1),I(),c(),c(),I(),P(1),I()],[c(),c(),P(0),I(),c(),I(),F(0),I(),F(1)],[c(),c(),c(),P(1),I(),I(),F(2),F(3),F(0)]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:1,col:0},{row:0,col:6},{row:0,col:7}],1:[{row:12,col:6},{row:12,col:7},{row:11,col:8},{row:12,col:0},{row:12,col:1}],2:[{row:2,col:3},{row:3,col:2}],3:[{row:10,col:4},{row:10,col:5}]}},sh={id:"map_4a",nameJa:"都市廃墟",nameCn:"都市废墟",width:11,height:15,maxPlayers:4,maxTeams:4,cells:[[F(0),I(),I(),I(),I(),I(),I(),I(),I(),I(),F(1)],[F(2),F(3),c(),c(),c(),c(),c(),B(0),B(1),c(),c()],[c(),F(0),F(1),c(),c(),F(2),c(),B(2),c(),c(),c()],[c(),c(),N(1),N(2),c(),F(3),c(),c(),c(),F(0),c()],[c(),c(),N(2),N(1),c(),c(),c(),c(),I(),P(0),I()],[F(1),c(),c(),c(),c(),F(0),c(),I(),P(1),P(2),c()],[F(2),F(0),c(),c(),c(),c(),I(),P(0),I(),c(),c()],[c(),c(),c(),c(),c(),N(3),c(),c(),c(),c(),c()],[c(),c(),I(),P(2),I(),c(),c(),c(),c(),F(1),F(2)],[c(),P(0),P(1),I(),c(),B(0),B(1),c(),c(),c(),F(0)],[c(),F(3),c(),c(),c(),B(2),B(3),c(),N(1),N(2),c()],[c(),c(),c(),F(1),c(),c(),c(),c(),N(2),N(1),c()],[c(),c(),F(2),F(0),c(),c(),c(),c(),c(),c(),c()],[c(),c(),c(),F(3),c(),c(),c(),F(1),F(2),c(),c()],[F(3),I(),I(),I(),I(),I(),I(),I(),I(),I(),F(2)]],startZones:{0:[{row:0,col:1},{row:0,col:3},{row:0,col:5},{row:0,col:7},{row:0,col:9}],1:[{row:14,col:1},{row:14,col:3},{row:14,col:5},{row:14,col:7},{row:14,col:9}],2:[{row:7,col:0},{row:8,col:0}],3:[{row:6,col:10},{row:7,col:10}]}},ih={id:"map_5a",nameJa:"三叉戦場",nameCn:"三叉战场",width:13,height:17,maxPlayers:6,maxTeams:6,cells:[[c(),c(),c(),I(),I(),I(),I(),I(),I(),I(),c(),c(),c()],[c(),c(),I(),c(),c(),c(),c(),c(),c(),c(),I(),c(),c()],[c(),B(0),c(),c(),c(),c(),c(),c(),c(),c(),c(),B(1),c()],[B(2),B(0),c(),c(),c(),F(0),c(),F(1),c(),c(),c(),B(1),B(3)],[B(0),c(),c(),c(),I(),P(0),I(),P(1),I(),c(),c(),c(),B(2)],[c(),c(),c(),I(),P(1),P(0),c(),P(2),P(0),I(),c(),c(),c()],[c(),c(),N(1),N(2),I(),c(),c(),c(),I(),N(2),N(1),c(),c()],[c(),N(1),N(2),N(3),N(2),c(),c(),c(),N(2),N(3),N(2),N(1),c()],[c(),c(),N(2),N(3),F(0),N(2),N(3),N(2),F(1),N(3),N(2),c(),c()],[c(),N(1),N(2),N(3),N(2),c(),c(),c(),N(2),N(3),N(2),N(1),c()],[c(),c(),N(1),N(2),I(),c(),c(),c(),I(),N(2),N(1),c(),c()],[c(),c(),c(),I(),P(2),P(1),c(),P(0),P(2),I(),c(),c(),c()],[B(1),c(),c(),c(),I(),P(0),I(),P(1),I(),c(),c(),c(),B(0)],[B(3),B(2),c(),c(),c(),F(2),c(),F(3),c(),c(),c(),B(0),B(1)],[c(),B(0),c(),c(),c(),c(),c(),c(),c(),c(),c(),B(2),c()],[I(),I(),I(),I(),c(),c(),c(),c(),c(),I(),I(),I(),I()],[I(),I(),I(),I(),I(),c(),c(),c(),I(),I(),I(),I(),I()]],startZones:{0:[{row:0,col:4},{row:0,col:6},{row:0,col:8}],1:[{row:16,col:0},{row:16,col:1},{row:16,col:2}],2:[{row:16,col:10},{row:16,col:11},{row:16,col:12}],3:[{row:6,col:0},{row:6,col:1},{row:10,col:0}],4:[{row:6,col:11},{row:6,col:12},{row:10,col:12}],5:[{row:2,col:0},{row:2,col:6},{row:2,col:12}]}},lh={id:"map_6a",nameJa:"環状要塞",nameCn:"环形要塞",width:15,height:17,maxPlayers:8,maxTeams:8,cells:[[c(),c(),c(),c(),I(),I(),I(),I(),I(),I(),I(),c(),c(),c(),c()],[c(),c(),c(),I(),c(),c(),c(),c(),c(),c(),c(),I(),c(),c(),c()],[c(),c(),N(1),N(2),N(2),N(1),c(),c(),c(),N(1),N(2),N(2),N(1),c(),c()],[c(),F(0),N(1),c(),c(),c(),F(1),c(),F(2),c(),c(),c(),N(1),F(3),c()],[I(),c(),c(),c(),B(0),B(1),c(),c(),c(),B(2),B(3),c(),c(),c(),I()],[I(),c(),F(0),c(),B(2),c(),c(),c(),c(),c(),B(0),c(),F(1),c(),I()],[c(),F(2),N(1),c(),c(),c(),F(3),I(),F(0),c(),c(),c(),N(1),F(1),c()],[c(),c(),c(),c(),c(),I(),P(0),P(1),P(2),I(),c(),c(),c(),c(),c()],[c(),c(),c(),c(),I(),P(2),P(0),N(3),P(1),P(0),I(),c(),c(),c(),c()],[c(),c(),c(),c(),c(),I(),P(1),P(2),P(0),I(),c(),c(),c(),c(),c()],[c(),F(3),N(1),c(),c(),c(),F(1),I(),F(2),c(),c(),c(),N(1),F(0),c()],[I(),c(),F(2),c(),B(1),c(),c(),c(),c(),c(),B(3),c(),F(3),c(),I()],[I(),c(),c(),c(),B(3),B(0),c(),c(),c(),B(1),B(2),c(),c(),c(),I()],[c(),F(1),N(1),c(),c(),c(),F(3),c(),F(0),c(),c(),c(),N(1),F(2),c()],[c(),c(),N(1),N(2),N(2),N(1),c(),c(),c(),N(1),N(2),N(2),N(1),c(),c()],[c(),c(),c(),I(),c(),c(),c(),c(),c(),c(),c(),I(),c(),c(),c()],[c(),c(),c(),c(),I(),I(),I(),I(),I(),I(),I(),c(),c(),c(),c()]],startZones:{0:[{row:0,col:5},{row:0,col:6},{row:0,col:7},{row:0,col:8}],1:[{row:16,col:5},{row:16,col:6},{row:16,col:7},{row:16,col:8}],2:[{row:4,col:0},{row:5,col:0},{row:11,col:0},{row:12,col:0}],3:[{row:4,col:14},{row:5,col:14},{row:11,col:14},{row:12,col:14}],4:[{row:0,col:0},{row:0,col:1},{row:0,col:2},{row:0,col:3}],5:[{row:0,col:11},{row:0,col:12},{row:0,col:13},{row:0,col:14}],6:[{row:16,col:0},{row:16,col:1},{row:16,col:2},{row:16,col:3}],7:[{row:16,col:11},{row:16,col:12},{row:16,col:13},{row:16,col:14}]}},ch={id:"map_7a",nameJa:"大陸戦争",nameCn:"大陆战争",width:17,height:19,maxPlayers:8,maxTeams:8,cells:[[I(),I(),I(),I(),c(),c(),c(),c(),c(),c(),c(),c(),c(),I(),I(),I(),I()],[I(),c(),c(),c(),c(),c(),B(0),c(),c(),c(),B(1),c(),c(),c(),c(),c(),I()],[c(),c(),B(0),B(1),c(),B(2),B(0),c(),c(),c(),B(1),B(3),c(),B(2),B(0),c(),c()],[c(),c(),B(2),c(),c(),c(),c(),F(0),c(),F(1),c(),c(),c(),c(),B(1),c(),c()],[c(),c(),c(),c(),N(1),N(2),c(),c(),c(),c(),c(),N(2),N(1),c(),c(),c(),c()],[c(),F(0),c(),N(1),N(2),N(3),N(1),c(),c(),c(),N(1),N(3),N(2),N(1),c(),F(1),c()],[I(),c(),c(),N(1),N(2),c(),c(),I(),P(0),I(),c(),c(),N(2),N(1),c(),c(),I()],[I(),c(),c(),c(),c(),c(),I(),P(1),P(0),P(2),I(),c(),c(),c(),c(),c(),I()],[c(),c(),F(2),c(),c(),I(),P(0),P(2),I(),P(1),P(0),I(),c(),c(),F(3),c(),c()],[c(),c(),c(),c(),I(),P(1),I(),c(),N(3),c(),I(),P(2),I(),c(),c(),c(),c()],[c(),c(),F(1),c(),c(),I(),P(2),P(0),I(),P(0),P(1),I(),c(),c(),F(0),c(),c()],[I(),c(),c(),c(),c(),c(),I(),P(0),P(1),P(2),I(),c(),c(),c(),c(),c(),I()],[I(),c(),c(),N(1),N(2),c(),c(),I(),P(2),I(),c(),c(),N(2),N(1),c(),c(),I()],[c(),F(2),c(),N(1),N(2),N(3),N(1),c(),c(),c(),N(1),N(3),N(2),N(1),c(),F(3),c()],[c(),c(),c(),c(),N(1),N(2),c(),c(),c(),c(),c(),N(2),N(1),c(),c(),c(),c()],[c(),c(),B(3),c(),c(),c(),c(),F(3),c(),F(2),c(),c(),c(),c(),B(0),c(),c()],[c(),c(),B(1),B(2),c(),B(0),B(3),c(),c(),c(),B(2),B(1),c(),B(3),B(2),c(),c()],[I(),c(),c(),c(),c(),c(),B(2),c(),c(),c(),B(0),c(),c(),c(),c(),c(),I()],[I(),I(),I(),I(),c(),c(),c(),c(),c(),c(),c(),c(),c(),I(),I(),I(),I()]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:0,col:2},{row:0,col:3},{row:1,col:0}],1:[{row:0,col:13},{row:0,col:14},{row:0,col:15},{row:0,col:16},{row:1,col:16}],2:[{row:18,col:0},{row:18,col:1},{row:18,col:2},{row:18,col:3},{row:17,col:0}],3:[{row:18,col:13},{row:18,col:14},{row:18,col:15},{row:18,col:16},{row:17,col:16}],4:[{row:6,col:0},{row:7,col:0},{row:7,col:1},{row:11,col:0},{row:12,col:0}],5:[{row:6,col:16},{row:7,col:16},{row:7,col:15},{row:11,col:16},{row:12,col:16}],6:[{row:0,col:6},{row:0,col:7},{row:0,col:8},{row:0,col:9},{row:0,col:10}],7:[{row:18,col:6},{row:18,col:7},{row:18,col:8},{row:18,col:9},{row:18,col:10}]}},dh={id:"map_8a",nameJa:"火山列島",nameCn:"火山列岛",width:15,height:19,maxPlayers:8,maxTeams:8,cells:[[I(),I(),I(),B(0),B(1),P(0),P(1),c(),P(2),P(0),B(2),B(3),I(),I(),I()],[I(),c(),c(),B(2),c(),I(),P(0),c(),P(1),I(),c(),B(0),c(),c(),I()],[B(0),c(),c(),c(),I(),P(1),P(2),c(),P(0),P(2),I(),c(),c(),c(),B(1)],[c(),c(),F(0),I(),P(0),P(1),I(),c(),I(),P(2),P(0),I(),F(1),c(),c()],[c(),c(),c(),c(),I(),I(),c(),c(),c(),I(),I(),c(),c(),c(),c()],[c(),B(0),c(),c(),c(),c(),N(1),c(),N(1),c(),c(),c(),c(),B(1),c()],[c(),B(2),c(),c(),N(1),N(2),N(2),N(1),N(2),N(2),N(1),c(),c(),B(3),c()],[P(0),I(),c(),N(1),N(2),N(3),F(0),N(2),F(1),N(3),N(2),N(1),c(),I(),P(1)],[P(1),I(),c(),N(2),N(3),F(2),N(3),N(3),N(3),F(3),N(3),N(2),c(),I(),P(0)],[P(2),c(),c(),N(1),N(2),N(3),N(3),N(3),N(3),N(3),N(2),N(1),c(),c(),P(2)],[P(0),I(),c(),N(2),N(3),F(0),N(3),N(3),N(3),F(1),N(3),N(2),c(),I(),P(1)],[P(1),I(),c(),N(1),N(2),N(3),F(2),N(2),F(3),N(3),N(2),N(1),c(),I(),P(0)],[c(),B(1),c(),c(),N(1),N(2),N(2),N(1),N(2),N(2),N(1),c(),c(),B(0),c()],[c(),B(3),c(),c(),c(),c(),N(1),c(),N(1),c(),c(),c(),c(),B(2),c()],[c(),c(),c(),c(),I(),I(),c(),c(),c(),I(),I(),c(),c(),c(),c()],[c(),c(),F(2),I(),P(2),P(0),I(),c(),I(),P(1),P(2),I(),F(3),c(),c()],[B(2),c(),c(),c(),I(),P(0),P(1),c(),P(2),P(1),I(),c(),c(),c(),B(3)],[I(),c(),c(),B(1),c(),I(),P(2),c(),P(0),I(),c(),B(3),c(),c(),I()],[I(),I(),I(),B(3),B(2),P(1),P(0),c(),P(1),P(2),B(0),B(1),I(),I(),I()]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:0,col:2},{row:1,col:0}],1:[{row:0,col:12},{row:0,col:13},{row:0,col:14},{row:1,col:14}],2:[{row:18,col:0},{row:18,col:1},{row:18,col:2},{row:17,col:0}],3:[{row:18,col:12},{row:18,col:13},{row:18,col:14},{row:17,col:14}],4:[{row:7,col:1},{row:8,col:1},{row:9,col:1},{row:10,col:1}],5:[{row:7,col:13},{row:8,col:13},{row:9,col:13},{row:10,col:13}],6:[{row:0,col:7},{row:1,col:7},{row:2,col:7},{row:3,col:7}],7:[{row:18,col:7},{row:17,col:7},{row:16,col:7},{row:15,col:7}]}},Ze=[nh,th,ah,rh,oh,sh,ih,lh,ch,dh];function uh(){try{const e="em_custom_maps_index",n="em_custom_map_",t=localStorage.getItem(e);if(!t)return Ze;const a=JSON.parse(t),r=[];for(const{id:s}of a){const i=localStorage.getItem(n+s);if(i)try{r.push(JSON.parse(i))}catch{}}return[...Ze,...r]}catch{return Ze}}function ic(e){switch(e.terrain){case"plain":return"/assets/tiles/平地0.png";case"sand":return"/assets/tiles/砂0.png";case"rubble":return`/assets/tiles/瓦礫${e.variant%4}.png`;case"forest":return`/assets/tiles/森${e.variant%4}.png`;case"water":return`/assets/tiles/水${e.variant%3}.png`;case"highland":return`/assets/tiles/高地${e.elevation}.png`;default:return"/assets/tiles/平地0.png"}}const X=[{id:"TR",deckCode:"TR",nameJa:"トルトハーン",nameCn:"托尔特哈恩",type:"M軽/単座",movement:6,evasion:8,assault:5,assaultDef:2,initiative:3,tokenId:"TR-token.jpg"},{id:"HO",deckCode:"HO",nameJa:"フォルニッセ",nameCn:"弗尼塞",type:"SS軽/単座",movement:7,evasion:10,assault:5,assaultDef:2,initiative:1,tokenId:"HO-token.jpg"},{id:"HY",deckCode:"HY",nameJa:"ヒストリクス",nameCn:"希斯特里克斯",type:"L重/単座",movement:3,evasion:3,assault:6,assaultDef:3,initiative:14,tokenId:"HY-token.jpg"},{id:"ZB",deckCode:"ZB",nameJa:"ズィマー・ブーリア",nameCn:"季马尔·布里亚",type:"S重/単座",movement:5,evasion:5,assault:6,assaultDef:3,initiative:9,tokenId:"ZB-token.jpg"},{id:"AR",deckCode:"AR",nameJa:"アラクネ",nameCn:"阿拉克涅",type:"S中/単座",movement:6,evasion:7,assault:5,assaultDef:2,initiative:5,tokenId:"AR-token.jpg"},{id:"BG",deckCode:"BG",nameJa:"ヴィスナー・グローム",nameCn:"维斯纳·格罗姆",type:"LL中/単座",movement:3,evasion:5,assault:6,assaultDef:3,initiative:13,tokenId:"BG-token.jpg"},{id:"LO",deckCode:"LO",nameJa:"リュミエール・デ・オラージュ",nameCn:"吕米耶尔",type:"L軽/単座",movement:5,evasion:7,assault:5,assaultDef:2,initiative:6,tokenId:"LO-token.jpg"},{id:"LG",deckCode:"LG",nameJa:"ルー・ガルー",nameCn:"卢·加鲁",type:"M重/単座",movement:4,evasion:4,assault:6,assaultDef:3,initiative:12,tokenId:"LG-token.jpg"},{id:"AG",deckCode:"AG",nameJa:"アルギュロス",nameCn:"阿尔古罗斯",type:"M中/単座",movement:5,evasion:6,assault:6,assaultDef:3,initiative:7,tokenId:"AG-token.jpg"}];function ph(e,n){const t=[];let a=e.col,r=e.row;const s=n.col,i=n.row,l=Math.abs(s-a),d=Math.abs(i-r),u=a<s?1:-1,p=r<i?1:-1;let m=l-d;const g=(l+d)*2+2;let x=0;for(;x++<g&&(t.push({row:r,col:a}),!(a===s&&r===i));){const h=2*m;h>-d&&(m-=d,a+=u),h<l&&(m+=l,r+=p)}return t}function vr(e,n,t){var l;if(n.row===t.row&&n.col===t.col)return!0;const a=e.cells[n.row][n.col],r=e.cells[t.row][t.col],s=Math.max(a.elevation,r.elevation),i=ph(n,t);for(const d of i){if(d.row===n.row&&d.col===n.col||d.row===t.row&&d.col===t.col)continue;const u=(l=e.cells[d.row])==null?void 0:l[d.col];if(u&&u.terrain==="highland"&&u.elevation>s)return!1}return!0}function Ne(e,n){return Math.max(Math.abs(e.row-n.row),Math.abs(e.col-n.col))}const fh={plain:{type:"plain",nameJa:"平地",nameCn:"平原",moveCost:1,blocksLOS:!1,enterable:!0,providesCover:!1},sand:{type:"sand",nameJa:"砂地",nameCn:"沙地",moveCost:1,blocksLOS:!1,enterable:!0,providesCover:!1},rubble:{type:"rubble",nameJa:"瓦礫",nameCn:"瓦砾",moveCost:2,blocksLOS:!1,enterable:!0,providesCover:!1},forest:{type:"forest",nameJa:"森",nameCn:"森林",moveCost:2,blocksLOS:!0,enterable:!0,providesCover:!0},water:{type:"water",nameJa:"水辺",nameCn:"水域",moveCost:3,blocksLOS:!1,enterable:!0,providesCover:!1},highland:{type:"highland",nameJa:"高地",nameCn:"高地",moveCost:1,blocksLOS:!1,enterable:!0,providesCover:!1}};function Sf(e){const n=fh[e];return n.enterable?n.moveCost:1/0}const Tt=[[-1,0],[1,0],[0,-1],[0,1]];function ya(e){return e==="N"?"S":e==="S"?"N":e==="E"?"W":"E"}function Et(e,n){return e===-1?"N":e===1?"S":n===-1?"W":"E"}function Dt(e,n,t){return n>=0&&n<e.height&&t>=0&&t<e.width}function oe(e,n){return e.row===n.row&&e.col===n.col}function Cf(e,n,t,a,r){const s=Array.from({length:e.height},()=>new Array(e.width).fill(-1)),i=[{pos:n,remaining:t}];s[n.row][n.col]=t;const l=[{pos:n,remaining:t}];for(;i.length>0;){const{pos:d,remaining:u}=i.shift();for(const[p,m]of Tt){const g=d.row+p,x=d.col+m;if(!Dt(e,g,x))continue;const h={row:g,col:x},f=e.cells[g][x];let _=Sf(f.terrain);if(_===1/0)continue;r!=null&&r.vernier&&(f.terrain==="rubble"||f.terrain==="forest"||f.terrain==="water")&&(_=1);const b=e.cells[d.row][d.col];let v=Math.max(0,f.elevation-b.elevation);r!=null&&r.vernier&&(v=Math.max(0,v-1));const y=_+v;if(u<y)continue;const w=u-y;a.some(D=>oe(D,h))||s[g][x]>=w||(s[g][x]=w,l.push({pos:h,remaining:w}),i.push({pos:h,remaining:w}))}}return l}function Nf(e,n,t,a,r){return Cf(e,n,t,a,r).map(s=>s.pos)}function br(e,n,t,a,r,s){const i=e.cells[a][r];let l=Sf(i.terrain);if(l===1/0)return 1/0;s!=null&&s.vernier&&(i.terrain==="rubble"||i.terrain==="forest"||i.terrain==="water")&&(l=1);const d=e.cells[n][t];let u=Math.max(0,i.elevation-d.elevation);return s!=null&&s.vernier&&(u=Math.max(0,u-1)),l+u}function ys(e,n,t,a,r,s="S"){if(t<=0)return[];const i={N:0,S:1,E:2,W:3},l=Array.from({length:e.height},()=>Array.from({length:e.width},()=>new Array(4).fill(-1))),d={pos:n,facing:s,remaining:t};l[n.row][n.col][i[s]]=t;const u=[d],p=[d];for(;u.length>0;){const{pos:x,facing:h,remaining:f}=u.shift(),_=ya(h);for(const[b,v]of Tt){const y=Et(b,v);if(y===_)continue;const w=x.row+b,T=x.col+v;if(!Dt(e,w,T))continue;const D={row:w,col:T},k=br(e,x.row,x.col,w,T,r);if(k===1/0||f<k||a.some(z=>oe(z,D)))continue;const C=f-k,A=i[y];if(l[w][T][A]>=C)continue;l[w][T][A]=C;const S={pos:D,facing:y,remaining:C};p.push(S),u.push(S)}}function m(x){const{pos:h,facing:f,remaining:_}=x,b=ya(f);for(const[v,y]of Tt){if(Et(v,y)===b)continue;const T=h.row+v,D=h.col+y;if(!Dt(e,T,D)||a.some(C=>oe(C,{row:T,col:D})))continue;const k=br(e,h.row,h.col,T,D,r);if(k!==1/0&&_>=k)return!0}return!1}const g=new Map;for(const x of p){if(oe(x.pos,n)||m(x))continue;const h=`${x.pos.row},${x.pos.col}`,f=g.get(h);(!f||x.remaining>f.remaining)&&g.set(h,{pos:x.pos,remaining:x.remaining})}return Array.from(g.values())}function lc(e,n,t,a,r,s,i){if(oe(n,a))return{path:[],finalFacing:t};const l={N:0,S:1,E:2,W:3},d=Array.from({length:e.height},()=>Array.from({length:e.width},()=>new Array(4).fill(-1))),u={pos:n,facing:t,remaining:r,parent:null};d[n.row][n.col][l[t]]=r;const p=[u];for(;p.length>0;){const m=p.shift();if(oe(m.pos,a)){const x=[];let h=m;for(;h&&h.parent!==null;)x.push(h.pos),h=h.parent;return{path:x.reverse(),finalFacing:m.facing}}const g=ya(m.facing);for(const[x,h]of Tt){const f=Et(x,h);if(f===g)continue;const _=m.pos.row+x,b=m.pos.col+h;if(!Dt(e,_,b))continue;const v={row:_,col:b},y=br(e,m.pos.row,m.pos.col,_,b,i);if(y===1/0||m.remaining<y||s.some(k=>oe(k,v))&&!oe(v,a))continue;const T=m.remaining-y,D=l[f];d[_][b][D]>=T||(d[_][b][D]=T,p.push({pos:v,facing:f,remaining:T,parent:m}))}}return null}function ni(e,n,t,a,r,s,i,l=8){if(oe(n,a)||r<=0)return[];const d=[];function u(m,g,x){const h=ya(g);for(const[f,_]of Tt){if(Et(f,_)===h)continue;const v=m.row+f,y=m.col+_;if(!Dt(e,v,y)||s.some(T=>oe(T,{row:v,col:y})))continue;const w=br(e,m.row,m.col,v,y,i);if(w!==1/0&&x>=w)return!1}return!0}function p(m,g,x,h){if(d.length>=l)return;if(oe(m,a)){u(m,g,x)&&d.push({path:[...h],finalFacing:g});return}const f=ya(g);for(const[_,b]of Tt){const v=Et(_,b);if(v===f)continue;const y=m.row+_,w=m.col+b;if(!Dt(e,y,w))continue;const T={row:y,col:w};if(oe(T,n)||h.some(C=>oe(C,T))||s.some(C=>oe(C,T))&&!oe(T,a))continue;const k=br(e,m.row,m.col,y,w,i);k===1/0||x<k||(h.push(T),p(T,v,x-k,h),h.pop())}}return p(n,t,r,[]),d}function Mf(e,n,t){const a=[];for(const[r,s]of Tt){const i=n.row+r,l=n.col+s;if(!Dt(e,i,l))continue;const d={row:i,col:l};t.some(u=>oe(u,d))||a.push(d)}return a}function mh(e,n,t,a){if(oe(n,t))return[];const r=Array.from({length:e.height},()=>new Array(e.width).fill(!1));r[n.row][n.col]=!0;const s=[{pos:n,parent:null}];for(;s.length>0;){const i=s.shift();if(oe(i.pos,t)){const p=[];let m=i;for(;m&&m.parent!==null;)p.push(m.pos),m=m.parent;return p.reverse()}const{row:l,col:d}=i.pos,u=[{row:l-1,col:d},{row:l+1,col:d},{row:l,col:d-1},{row:l,col:d+1}];for(const p of u)if(p.row>=0&&p.row<e.height&&p.col>=0&&p.col<e.width){const m=a.some(g=>oe(g,p))&&!oe(p,t);!r[p.row][p.col]&&!m&&(r[p.row][p.col]=!0,s.push({pos:p,parent:i}))}}return null}function ti(e,n,t,a){const r=n===1?e.plotSeg1:e.plotSeg2;if(!r)return 0;const s=t(r.defId);return!s||s.actionType!=="movement"?0:(s.movementValue??0)+(a!=null&&a.wheel?2:0)}function gh(e,n,t,a){const r=n===1?e.plotSeg1:e.plotSeg2;if(!r)return!1;const s=t(r.defId);return!s||s.actionType!=="movement"?!1:(s.movementValue??a)>0}function Dn(e,n,t){return e==="N"?t.row<=n.row:e==="S"?t.row>=n.row:e==="E"?t.col>=n.col:e==="W"?t.col<=n.col:!0}function yr(e,n,t){if(n!==2)return 0;if(e.plotSeg1){const a=t(e.plotSeg1.defId);if(a&&a.actionType==="aim")return 1}return 0}function hh(e,n,t,a){const r=[];if(t==="ranged"){for(const l of e.hand)if(!l.destroyed){const d=a(l.defId);(d==null?void 0:d.actionType)==="armor"&&(d.armorValue??0)>0&&r.push({instanceId:l.instanceId,defId:l.defId,armorValue:d.armorValue})}}const s=n===1?e.plotSeg1:e.plotSeg2;let i=null;if(s&&!s.destroyed){const l=a(s.defId);(l==null?void 0:l.actionType)==="armor"&&(l.armorValue??0)>0&&(i={instanceId:s.instanceId,defId:s.defId,seg:n,armorValue:l.armorValue})}return{handCards:r,plotCard:i}}function Rn(e,n,t,a){const r=n===1?e.plotSeg1:e.plotSeg2;if(!r)return null;const s=a(r.defId);return s&&(t==="ranged"&&s.actionType==="ranged"||t==="melee"&&(s.actionType==="melee"||s.actionType==="charge"))?s:null}function Go(e,n,t,a,r){var u,p;let s=e;const i=[],l=(u=a.cells[n.row])==null?void 0:u[n.col],d=(p=a.cells[t.row])==null?void 0:p[t.col];return(l==null?void 0:l.terrain)==="water"&&r.isEnergyWeapon&&(s-=1,i.push("水域能量衰减-1")),(d==null?void 0:d.terrain)==="forest"&&(s-=1,i.push("森林掩护-1")),{dmg:Math.max(0,s),reasons:i}}function Ho(e,n,t,a,r,s){const i=Rn(e,t,a,s);if(!i)return{canAttack:!1,reason:"无攻击牌",damage:0,counterDamage:0,dist:0,card:null};const l=Ne(e.position,n.position);if(a==="ranged"){if(i.rangeMin===void 0||i.rangeMax===void 0)return{canAttack:!1,reason:"卡牌无射程数据",damage:0,counterDamage:0,dist:l,card:i};if(l<i.rangeMin)return{canAttack:!1,reason:`距离过近 (${l} < ${i.rangeMin})`,damage:0,counterDamage:0,dist:l,card:i};if(l>i.rangeMax)return{canAttack:!1,reason:`射程外 (${l} > ${i.rangeMax})`,damage:0,counterDamage:0,dist:l,card:i};if(!vr(r,e.position,n.position))return{canAttack:!1,reason:"视线被遮挡",damage:0,counterDamage:0,dist:l,card:i};if(!Dn(e.facing,e.position,n.position))return{canAttack:!1,reason:`目标在机体后方（机头朝${e.facing}），无法射击`,damage:0,counterDamage:0,dist:l,card:i};let d=i.damage??0;const u=[];if(i.rangeOptimal!==void 0&&i.damageAttenuation!==void 0){const f=Math.max(0,l-i.rangeOptimal);if(f>0){const _=f*i.damageAttenuation;d=Math.max(0,d-_),u.push(`超射程-${_}`)}}const p=Go(d,e.position,n.position,r,i),m=yr(e,t,s),g=p.dmg+m,x=[...u,...p.reasons];return m>0&&x.push("瞄准+1"),{canAttack:!0,reason:`有效射击${x.length>0?`（${x.join(", ")}）`:""}`,damage:g,counterDamage:0,dist:l,card:i}}if(a==="melee"&&i.actionType==="melee"){if(l!==1)return{canAttack:!1,reason:`不相邻 (距离 ${l})`,damage:0,counterDamage:0,dist:l,card:i};const d=Go(i.damage??0,e.position,n.position,r,i),u=yr(e,t,s),p=d.dmg+u,m=[...d.reasons];return u>0&&m.push("瞄准+1"),{canAttack:!0,reason:`有效近战${m.length>0?`（${m.join(", ")}）`:""}`,damage:p,counterDamage:0,dist:l,card:i}}return a==="melee"&&i.actionType==="charge"?{canAttack:!1,reason:"突击卡需使用evaluateCharge()",damage:0,counterDamage:0,dist:l,card:i}:{canAttack:!1,reason:"非攻击时机",damage:0,counterDamage:0,dist:l,card:null}}const xh=new Set(["パイルバンカー","スパイク"]);function vh(e){return xh.has(e.nameJa)}function bh(e,n,t,a,r,s){if(Ne(n,t)===1)return Dn(s,n,t)?n:null;const l=Nf(e,n,a,r).filter(d=>Ne(d,t)===1&&Dn(s,d,t));return l.length===0?null:(l.sort((d,u)=>Ne(n,d)-Ne(n,u)),l[0])}function _r(e,n,t,a,r,s,i){const l=Rn(e,t,"melee",i);if(!l||l.actionType!=="charge")return{canAttack:!1,reason:"无突击牌",damage:0,counterDamage:0,dist:0,card:null};const d=Ne(e.position,n.position);if(vh(l)){if(d!==1)return{canAttack:!1,reason:`不相邻 (距离 ${d})，${l.nameCn} 无法攻击`,damage:0,counterDamage:0,dist:d,card:l};if(!Dn(e.facing,e.position,n.position))return{canAttack:!1,reason:`目标不在正面弧内（机头朝${e.facing}），${l.nameCn} 无法攻击`,damage:0,counterDamage:0,dist:d,card:l};const y=r.assault+1,w=Go(y,e.position,n.position,a,l),T=yr(e,t,i),D=w.dmg+T,k=Math.max(0,s.assaultDef-1),C=[...w.reasons];T>0&&C.push("瞄准+1");const A=C.length>0?`（${C.join(", ")}）`:"";return{canAttack:!0,reason:`有效${l.nameCn}攻击${A}`,damage:D,counterDamage:k,dist:d,card:l,chargeDestination:e.position}}const p=r.assault,m=bh(a,e.position,n.position,p,[n.position],e.facing);if(!m)return{canAttack:!1,reason:`突击距离不足或目标不在正面弧内 (距离 ${d}，突击值 ${p})`,damage:0,counterDamage:0,dist:d,card:l};const g=r.assault,x=Go(g,m,n.position,a,l),h=yr(e,t,i),f=x.dmg+h,_=s.assaultDef,b=[...x.reasons];return h>0&&b.push("瞄准+1"),{canAttack:!0,reason:`有效突击${b.length>0?`（${b.join(", ")}）`:""}`,damage:f,counterDamage:_,dist:d,card:l,chargeDestination:m}}function ft(e){const n=[...e.deck,...e.hand,...e.auxiliary];return e.plotSeg1&&n.push(e.plotSeg1),e.plotSeg2&&n.push(e.plotSeg2),n.filter(t=>!t.destroyed)}function Nd(e){return ft(e).length}function Dr(e){const n=[...e.hand,...e.auxiliary];return e.plotSeg1&&n.push(e.plotSeg1),e.plotSeg2&&n.push(e.plotSeg2),n.filter(t=>!t.destroyed)}function _s(e,n){var a,r;const t={...n,destroyed:!0};return{player:{...e,deck:e.deck.map(s=>s.instanceId===n.instanceId?t:s),hand:e.hand.map(s=>s.instanceId===n.instanceId?t:s),auxiliary:e.auxiliary.map(s=>s.instanceId===n.instanceId?t:s),plotSeg1:((a=e.plotSeg1)==null?void 0:a.instanceId)===n.instanceId?t:e.plotSeg1,plotSeg2:((r=e.plotSeg2)==null?void 0:r.instanceId)===n.instanceId?t:e.plotSeg2,destroyedCards:[...e.destroyedCards,t]},destroyed:t}}function tl(e,n,t,a){let r=e;const s=[];let i=n;const l=a?`[${a}] `:"";let d=0;const u=30;for(;i>0&&d<u;){i--,d++;const p=r.deck.filter(h=>!h.destroyed);if(p.length===0){s.push(`    ↳ ${l}【誘爆】牌组已空，无法继续检查`);break}const m=p[0],g=t(m.defId),x=(g==null?void 0:g.nameCn)??m.defId;if(g!=null&&g.hasBombIcon){const{player:h}=_s(r,m);r=h,i++,s.push(`    ↳ ${l}【💣 誘爆】翻开 ${x}——有炸弹标记，破坏！（连锁+1）`)}else r={...r,deck:r.deck.filter(h=>h.instanceId!==m.instanceId),discard:[...r.discard,m]},s.push(`    ↳ ${l}【誘爆】翻开 ${x}——无炸弹标记，放入弃牌区`)}return{player:r,log:s}}function et(e,n,t,a){let r=e;const s=[];let i=n,l=0;for(;i>0;){const d=r.deck.filter(v=>!v.destroyed),u=r.hand.filter(v=>!v.destroyed),p=r.auxiliary.filter(v=>!v.destroyed),m=[r.plotSeg1,r.plotSeg2].filter(v=>!!v&&!v.destroyed),g=d[0]??u[0]??p[0]??m[0];if(!g)break;const x=t(g.defId),h=(x==null?void 0:x.nameCn)??g.defId,{player:f}=_s(r,g);r=f,i--;const _=x!=null&&x.hasBombIcon?"【💣】":"",b=a?`[${a}] `:"";if(s.push(`  ▶ ${b}${h} 被摧毁${_}`),x!=null&&x.hasBombIcon&&l++,r.destroyedCards.length>30)break}if(l>0){s.push(`  ─── 誘爆检查（${l}张炸弹卡被破坏）───`);const{player:d,log:u}=tl(r,l,t,a);r=d,s.push(...u)}return{player:r,log:s}}const yh="バーニア",_h="ムーブセンサー",Ih="ホイール";function jn(e,n,t){const a=new Map;for(const m of e.auxiliary){if(m.destroyed)continue;const g=n(m.defId);g&&a.set(g.nameJa,(a.get(g.nameJa)??0)+1)}const r=a.get(yh)??0,s=a.get(_h)??0,i=a.get(Ih)??0,l=r>=2&&i>=2,d=!l&&r>=2,u=s>=2,p=!l&&i>=2;return{vernier:d&&(t==="movement"||t==="melee"),moveSensor:u&&t==="melee",wheel:p&&(t==="movement"||t==="charge")}}function Uo(e,n){const t=n.row-e.row,a=n.col-e.col;return Math.abs(t)>=Math.abs(a)?t<0?"N":"S":a>0?"E":"W"}function se(e){return`P${e.replace("player","")}`}function Wo(e){switch(e){case"movement":return"移动时机";case"ranged":return"射击时机";case"melee":return"近战时机";case"special":return"特殊时机";default:return e}}function kh(e){switch(e){case"movement":return"移动";case"ranged":return"射击";case"melee":return"近战";case"charge":return"突击";case"aim":return"瞄准";case"armor":return"装甲";case"mine":return"机雷";case"special":return"特殊";default:return e}}function al(e,n){let t=Y(e,`══════ 主要阶段${n}开始 ══════`);t=Y(t,`全员翻开阶段${n}盖卡：`);for(const a of e.playerIds){if(t.players[a].isDefeated)continue;const r=t.players[a],s=X.find(u=>u.id===r.unitId),i=se(a),l=(s==null?void 0:s.nameCn)??a,d=n===1?r.plotSeg1:r.plotSeg2;if(d){const u=ne(d.defId);u?t=Y(t,`  ${i}[${l}] →【${u.nameCn}】(${kh(u.actionType)})`):t=Y(t,`  ${i}[${l}] → (未知卡牌)`)}else t=Y(t,`  ${i}[${l}] → 未配置行动卡`)}return t}function cc(e,n,t,a="S"){const r=Q0(n,e);return{id:e,unitId:n,position:t,facing:a,deck:r,hand:[],auxiliary:[],plotSeg1:null,plotSeg2:null,discard:[],destroyedCards:[],isDefeated:!1}}function Tf(e=2,n=2){const t=Ze[0],a=da.slice(0,e),r={};for(let i=0;i<a.length;i++)r[a[i]]=i%n;const s={};for(const i of a){const l=r[i],d=t.startZones[l]??t.startZones[0]??[],u=d[Math.min(1,d.length-1)]??{row:0,col:0},p=l===0?"S":"N";s[i]=cc(i,"AG",u,p)}return{phase:"setup",roundNumber:0,activePlayer:a[0],players:s,playerIds:a,teams:r,teamCount:n,map:t,mines:[],log:[],turnOrder:[...a],currentTiming:null,plottingStep:null,pendingDamage:null,shuffleSeed:Date.now()}}function ie(e,n){return C0(e,n)}function ue(e,n,t){return N0(e,n,t)}function Y(e,n){return{...e,log:[...e.log,n]}}function zn(e,n){return{...e,log:[...e.log,`[DBG] ${n}`]}}function jh(e,n){return e.filter(t=>t.instanceId!==n)}function wh(e){const n=[],t=[];for(const a of e.deck){const r=ne(a.defId);r&&r.actionType==="auxiliary"?t.push(a):n.push(a)}return{...e,deck:n,auxiliary:[...e.auxiliary,...t]}}function Zo(e){const n=e.playerIds.filter(r=>!e.players[r].isDefeated),t=e.phase==="action_seg2"?2:1,a=n.map(r=>{const s=e.players[r],i=X.find(u=>u.id===s.unitId),l=(i==null?void 0:i.initiative)??0;let d=(i==null?void 0:i.movement)??0;if(e.currentTiming==="movement"){const u=t===1?s.plotSeg1:s.plotSeg2;if(u){const p=ne(u.defId);p&&p.movementValue!==void 0&&(d=p.movementValue)}}return{id:r,initiative:l,movementValue:d}});return e.currentTiming==="movement"?a.sort((r,s)=>r.movementValue!==s.movementValue?s.movementValue-r.movementValue:s.initiative-r.initiative):a.sort((r,s)=>s.initiative-r.initiative),a.map(r=>r.id)}function Sh(e,n){const{playerId:t,unitId:a}=n,r=e.teams[t]??0,s=e.map.startZones[r]??[],i=ie(e,t).position,l=s.some(p=>p.row===i.row&&p.col===i.col)?i:s[Math.min(1,s.length-1)]??{row:0,col:0},d=ie(e,t).facing,u=cc(t,a,l,d);return Y(ue(e,t,u),`${t} 选择了机体 ${a}`)}function Ch(e,n){const t=Ze.find(s=>s.id===n.mapId);if(!t)return e;const a={},r={};for(const s of e.playerIds){const i=e.teams[s]??0,l=t.startZones[i]??t.startZones[0]??[],d=r[i]??0;r[i]=d+1;const u=l[Math.min(d,l.length-1)]??{row:0,col:0},p=i===0?"S":"N";a[s]=cc(s,e.players[s].unitId,u,p)}return Y({...e,map:t,players:a},`选择了地图 ${t.nameCn}`)}function Nh(e,n){if(e.phase!=="setup")return e;const{playerId:t,position:a}=n,r=ie(e,t);return ue(e,t,{...r,position:a})}function Mh(e,n){if(e.phase!=="setup")return e;const{playerId:t,facing:a}=n,r=ie(e,t);return ue(e,t,{...r,facing:a})}function Th(e){var a;const n={...e.players};let t={...e,phase:"draw",roundNumber:1};for(const r of e.playerIds){const s=wh(e.players[r]);n[r]=s;for(const i of s.auxiliary){const l=ne(i.defId);t=Y(t,`${r} 补助卡【${(l==null?void 0:l.nameCn)??i.defId}】从卡组移至辅助区`)}}t={...t,players:n};for(const r of e.playerIds){const s=((a=X.find(i=>i.id===t.players[r].unitId))==null?void 0:a.evasion)??5;t=dc(t,{playerId:r,count:s})}return Y({...t,phase:"pregame",plottingStep:null,activePlayer:e.playerIds[0],currentTiming:null},"=== 第 1 回合开始 ===")}function Eh(e){if(e.phase!=="pregame")return e;const n=e.playerIds[0];return{...e,phase:"plotting",plottingStep:`transition_to_${n}`,activePlayer:n}}function dc(e,n){const t=ie(e,n.playerId),a=[],r=[];let s=t.deck.filter(g=>!g.destroyed),i=t.discard.filter(g=>!g.destroyed);const l=i.length;let d=!1,u=e.shuffleSeed;for(;r.length<n.count;){if(s.length===0){if(i.length===0)break;const f=wf([...i],u);s=f.shuffled,u=f.nextSeed,i=[],d=!0}const g=n.count-r.length,{drawn:x,remaining:h}=eh(s,g);s=h;for(const f of x){const _=ne(f.defId);_&&_.actionType==="auxiliary"?a.push(f):r.push(f)}}const p={...t,deck:s,discard:i,hand:[...t.hand,...r],auxiliary:[...t.auxiliary,...a]};let m=ue({...e,shuffleSeed:u},n.playerId,p);d&&(m=Y(m,`${n.playerId} 的卡组耗尽，弃牌区（${l} 张）洗入卡组`)),m=Y(m,`${n.playerId} 抽了 ${r.length} 张牌`);for(const g of a){const x=ne(g.defId),h=(x==null?void 0:x.nameCn)??g.defId;m=Y(m,`  ↳ 辅助卡【${h}】自动放置到辅助区`)}return m}function Dh(e,n){var p;const{playerId:t,seg:a,instanceId:r}=n,s=ie(e,t),i=s.hand.find(m=>m.instanceId===r);if(!i)return e;const l=((p=ne(i.defId))==null?void 0:p.nameCn)??i.defId;e=zn(e,`PLOT_CARD: ${se(t)} 配置【${l}】到阶段${a}`);const d=jh(s.hand,r),u={...s,hand:d,plotSeg1:a===1?i:s.plotSeg1,plotSeg2:a===2?i:s.plotSeg2};return ue(e,t,u)}function zh(e,n){const{playerId:t}=n,a=Y(e,`${t} 完成了布局`),r=e.playerIds.indexOf(t),s=e.playerIds.slice(r+1).find(u=>!a.players[u].isDefeated);if(s)return{...a,activePlayer:s,plottingStep:`transition_to_${s}`};const l={...al(a,1),activePlayer:e.playerIds[0],phase:"action_seg1",plottingStep:"complete",currentTiming:"movement",turnOrder:[]},d={...l,turnOrder:Zo(l)};return Y(d,`▸ ${Wo("movement")} — 行动顺序：${d.turnOrder.map(se).join(" → ")}`)}function Ah(e){const n=e.plottingStep;if(!n)return e;for(const t of e.playerIds)if(n===`transition_to_${t}`)return{...e,plottingStep:t,activePlayer:t};if(n==="transition"){const t=e.playerIds.indexOf(e.activePlayer);if(t>=0&&t<e.playerIds.length-1){const a=e.playerIds[t+1];return{...e,plottingStep:a,activePlayer:a}}}return e}function $h(e,n){const{playerId:t,to:a}=n;let r=ie(e,t);const s=r.position;e=zn(e,`MOVE_UNIT: ${se(t)} (${s.row},${s.col})→(${a.row},${a.col}) 阶段=${e.phase} 时机=${e.currentTiming}`);const i=e.map,l=e.playerIds.filter(g=>g!==t&&!e.players[g].isDefeated).map(g=>ie(e,g).position);if(l.some(g=>oe(g,a)))return Y(e,`${se(t)} 移动无效：目标位置 (${a.row}, ${a.col}) 已被其他机体占据`);const d=n.path??mh(i,s,a,l);let u=e;if(d&&d.length>0){let g=a,x=!1;for(const h of d){const f=u.mines.filter(_=>_.ownerId!==t&&oe(_.position,h));if(f.length>0){g=h,x=!0,r={...r,position:g},u=ue(u,t,r),u=Y(u,`${t} 移动途经 (${h.row}, ${h.col})，触发了机雷！`);for(const _ of f){u=Y(u,`机雷爆炸，对 ${se(t)} 造成 ${_.damage} 点伤害！`);const b=et(r,_.damage,ne,se(t));for(const v of b.log)u=Y(u,v);r=b.player,u=ue(u,t,r),u={...u,mines:u.mines.filter(v=>v.id!==_.id)},u={...u,lastDamageContext:{attackerId:_.ownerId,targetId:t,weaponName:"机雷"}}}break}}if(!x){const h=n.finalFacing??Uo(s,a);r={...r,position:a,facing:h},u=ue(u,t,r),u=Y(u,`${t} 移动到 (${a.row}, ${a.col})，机头朝${h}`)}return nn(u)}const p=n.finalFacing??Uo(s,a),m={...r,position:a,facing:p};return Y(ue(e,t,m),`${t} 移动到 (${a.row}, ${a.col})，机头朝${p}`)}function Vh(e,n){const{playerId:t,to:a,damage:r}=n,s={id:`mine-${Date.now()}-${Math.random().toString(36).substring(2,9)}`,ownerId:t,position:a,damage:r};let i={...e,mines:[...e.mines,s]};return i=Y(i,`${t} 在 (${a.row}, ${a.col}) 部署了机雷`),i}function Md(e,n,t){var _,b,v;const{attackerId:a,targetId:r}=n,s=e.phase==="action_seg1"?1:2,i=ie(e,a),l=ie(e,r);e=zn(e,`RESOLVE_${t.toUpperCase()}: ${se(a)}(${i.position.row},${i.position.col},${i.facing})→${se(r)}(${l.position.row},${l.position.col},${l.facing}) seg=${s}`);const d=Ho(i,l,s,t,e.map,ne),p=yr(i,s,ne)>0?a:void 0;if(!d.canAttack)return Y(e,`${a} 攻击无效：${d.reason}`);const m=((_=X.find(y=>y.id===i.unitId))==null?void 0:_.nameCn)??a,g=((b=X.find(y=>y.id===l.unitId))==null?void 0:b.nameCn)??r,x=((v=d.card)==null?void 0:v.nameCn)??"???",h=t==="ranged"?"射击":"近战";let f=e;if(t==="melee"){const y=Uo(i.position,l.position);y!==i.facing&&(f=ue(f,a,{...ie(f,a),facing:y}),f=Y(f,`${m} 近战攻击后自动转向【${y}】`))}return f=Y(f,`${m} 对 ${g} 发动${h}【${x}】→ 造成 ${d.damage} 点伤害`),f={...f,lastDamageContext:{attackerId:a,targetId:r,weaponName:x}},qa(f,r,d.damage,t,s,p,x)}function qa(e,n,t,a,r,s,i){if(t<=0)return nn(e);const l=ie(e,n),{handCards:d,plotCard:u}=hh(l,r,a,ne);return d.length>0||u!==null?{...e,pendingArmorChoice:{targetId:n,damage:t,source:a,attackerId:s,weaponName:i,handCards:d,plotCard:u}}:uc(e,n,t,a,s)}function Ph(e,n){const t=e.pendingArmorChoice;if(!t||t.targetId!==n.playerId)return e;let a={...e,pendingArmorChoice:void 0};const r=new Set(n.selectedInstanceIds);let s=0;const i=[];for(const d of r){const u=ie(a,t.targetId),p=ft(u).find(x=>x.instanceId===d);if(!p)continue;const m=ne(p.defId);if(!m||m.actionType!=="armor")continue;s+=m.armorValue??0,i.push(m.nameCn);const{player:g}=_s(u,p);a=ue(a,t.targetId,g)}s>0?a=Y(a,`[${se(t.targetId)}] 激活装甲【${i.join("、")}】减伤 -${s} 点`):a=Y(a,`[${se(t.targetId)}] 放弃使用装甲`);const l=Math.max(0,t.damage-s);return uc(a,t.targetId,l,t.source,t.attackerId)}function uc(e,n,t,a,r){if(t<=0)return nn(e);const s=ie(e,n),i=ft(s);if(i.length===0)return nn(e);if(a!=="ranged"){const l=s.deck.filter(p=>!p.destroyed).length,d=s.discard.filter(p=>!p.destroyed).length;if(!(l===0&&d===0)){let p=e,m=t;const g=Math.min(m,l);if(g>0){const{player:x,log:h}=et(ie(p,n),g,ne,se(n));for(const f of h)p=Y(p,f);p=ue(p,n,x),m-=g}if(m>0&&d>0){const x=ie(p,n),h=x.discard.filter(w=>!w.destroyed),f=x.discard.filter(w=>w.destroyed),{shuffled:_,nextSeed:b}=wf(h,p.shuffleSeed);p={...p,shuffleSeed:b};const v={...x,deck:[...x.deck,..._],discard:f};p=ue(p,n,v),p=Y(p,`${se(n)} 的卡组耗尽，弃牌区（${h.length} 张）洗入卡组`);const y=Math.min(m,h.length);if(y>0){const{player:w,log:T}=et(ie(p,n),y,ne,se(n));for(const D of T)p=Y(p,D);p=ue(p,n,w),m-=y}}if(m>0){const x=ie(p,n),h=ft(x);if(h.length===0)return nn(p);if(h.length<=m){const{player:f,log:_}=et(x,m,ne,se(n));for(const b of _)p=Y(p,b);return p=ue(p,n,f),nn(p)}return p=Y(p,`[${se(n)}] 牌组与弃牌区已耗尽，切换为防方自选伤害模式`),{...p,pendingDamage:{targetId:n,remaining:m,selectedInstanceIds:[],destroyedBombCount:0,source:a,attackerId:r}}}return nn(p)}e=Y(e,`[${se(n)}] 牌组与弃牌区已耗尽，本次${a==="charge"?"突击":"近战"}伤害切换为防方自选模式`)}if(i.length<=t){const{player:l,log:d}=et(s,t,ne,se(n));let u=e;for(const p of d)u=Y(u,p);return u=ue(u,n,l),nn(u)}if(a==="ranged"){const l=Dr(s).length,d=Math.min(t,l),u=t-d;if(d<=0){const{player:p,log:m}=et(s,t,ne,se(n));let g=e;for(const x of m)g=Y(g,x);return g=ue(g,n,p),nn(g)}return{...e,pendingDamage:{targetId:n,remaining:d,selectedInstanceIds:[],destroyedBombCount:0,source:a,attackerId:r,deckAutoCount:u}}}return{...e,pendingDamage:{targetId:n,remaining:t,selectedInstanceIds:[],destroyedBombCount:0,source:a,attackerId:r}}}function Rh(e,n){var h;const{attackerId:t,targetId:a}=n,r=e.phase==="action_seg1"?1:2,s=ie(e,t),i=ie(e,a);e=zn(e,`RESOLVE_CHARGE: ${se(t)}(${s.position.row},${s.position.col},${s.facing})→${se(a)}(${i.position.row},${i.position.col},${i.facing}) seg=${r}`);const l=X.find(f=>f.id===s.unitId),d=X.find(f=>f.id===i.unitId),u=_r(s,i,r,e.map,l,d,ne);if(!u.canAttack)return Y(e,`${t} 突击无效：${u.reason}`);const p=l.nameCn,m=d.nameCn,g=((h=u.card)==null?void 0:h.nameCn)??"突击";let x=e;if(u.chargeDestination&&(u.chargeDestination.row!==s.position.row||u.chargeDestination.col!==s.position.col)){const f=u.chargeDestination,_={...s,position:f};x=ue(x,t,_),x=Y(x,`${p} 发动突击冲锋，移动至 (${f.row}, ${f.col})`)}{const f=ie(x,t),_=Uo(f.position,i.position);_!==f.facing&&(x=ue(x,t,{...f,facing:_}),x=Y(x,`${p} 突击后自动转向【${_}】`))}if(x=Y(x,`${p} 对 ${m} 发动${g}【突击值 ${l.assault}】→ 对目标造成 ${u.damage} 点近战伤害；自机承受反伤 ${u.counterDamage} 点`),u.counterDamage>0){x={...x,pendingFollowUpDamage:{targetId:t,amount:u.counterDamage,source:"charge",attackerId:a,weaponName:"突击反伤",seg:r}},x={...x,lastDamageContext:{attackerId:t,targetId:a,weaponName:g}};const f=qa(x,a,u.damage,"charge",r,void 0,g);if(!f.pendingDamage&&!f.pendingArmorChoice){if(f.phase==="game_over")return f;const b={...{...f,pendingFollowUpDamage:void 0},lastDamageContext:{attackerId:a,targetId:t,weaponName:"突击反伤"}};return qa(b,t,u.counterDamage,"charge",r)}return f}return x={...x,lastDamageContext:{attackerId:t,targetId:a,weaponName:g}},qa(x,a,u.damage,"charge",r,void 0,g)}function Yo(e){if(!e.pendingFollowUpDamage||e.phase==="game_over")return e;const{targetId:n,amount:t,source:a,attackerId:r,weaponName:s,seg:i}=e.pendingFollowUpDamage;let l={...e,pendingFollowUpDamage:void 0};return r&&s&&(l={...l,lastDamageContext:{attackerId:r,targetId:n,weaponName:s}}),i?qa(l,n,t,a,i):uc(l,n,t,a)}function Lh(e,n){const t=e.pendingDamage;if(!t)return e;const{playerId:a,instanceId:r}=n,s=t.selectedInstanceIds.length===0,i=!!t.attackerId&&s&&!t.attackerDesignatedCardId,l=i?t.attackerId:t.targetId;if(a!==l)return e;const d=ie(e,t.targetId),u=ft(d).find(v=>v.instanceId===r&&!v.destroyed);if(!u||t.selectedInstanceIds.includes(r))return e;if(t.source==="ranged"&&!i){const v=Dr(d);if(d.deck.some(w=>w.instanceId===r&&!w.destroyed)&&v.length>0)return e}const{player:p}=_s(d,u);let m=ue(e,t.targetId,p);const g=ne(u.defId),x=(g==null?void 0:g.nameCn)??u.defId,h=g!=null&&g.hasBombIcon?"【💣】":"";m=Y(m,`  ▶ [${se(t.targetId)}] ${x} 被摧毁${h}`);let f=t.remaining-1;const _=(t.destroyedBombCount??0)+(g!=null&&g.hasBombIcon?1:0);if(f<=0){if(m={...m,pendingDamage:null},t.deckAutoCount&&t.deckAutoCount>0){const v=ie(m,t.targetId),{player:y,log:w}=et(v,t.deckAutoCount,ne,se(t.targetId));for(const T of w)m=Y(m,T);m=ue(m,t.targetId,y)}if(_>0){const v=ie(m,t.targetId);m=Y(m,`  ─── 誘爆检查（${_}张炸弹卡被破坏）───`);const{player:y,log:w}=tl(v,_,ne,se(t.targetId));for(const T of w)m=Y(m,T);m=ue(m,t.targetId,y)}return m=nn(m),Yo(m)}if(ft(ie(m,t.targetId)).length===0){if(m={...m,pendingDamage:null},_>0){const v=ie(m,t.targetId);m=Y(m,`  ─── 誘爆检查（${_}张炸弹卡被破坏）───`);const{player:y,log:w}=tl(v,_,ne,se(t.targetId));for(const T of w)m=Y(m,T);m=ue(m,t.targetId,y)}return m=nn(m),Yo(m)}return m={...m,pendingDamage:{...t,remaining:f,selectedInstanceIds:[...t.selectedInstanceIds,r],destroyedBombCount:_,attackerDesignatedCardId:i?r:t.attackerDesignatedCardId}},m}function Oh(e,n){const t=e.pendingDamage;if(!t)return e;const a=t.selectedInstanceIds.length===0,s=!!t.attackerId&&a&&!t.attackerDesignatedCardId?t.attackerId:t.targetId;if(n.playerId!==s)return e;const i=t.remaining+(t.deckAutoCount??0);if(i>0){const d=ie(e,t.targetId),{player:u,log:p}=et(d,i,ne,se(t.targetId));let m=e;for(const g of p)m=Y(m,g);return m=ue(m,t.targetId,u),m={...m,pendingDamage:null},m=nn(m),Yo(m)}let l={...e,pendingDamage:null};return Yo(l)}function Td(e){const n=["movement","ranged","melee","special"],t=n.indexOf(e.currentTiming);if(t===-1){console.warn("[GameReducer] Invalid currentTiming:",e.currentTiming);const r=zn(e,`ADVANCE_TIMING: currentTiming 无效(${e.currentTiming})，强制推进阶段`);return fn(r,{type:"ADVANCE_PHASE"})}if(t<n.length-1){const r=n[t+1],s={...e,currentTiming:r},i={...s,turnOrder:Zo(s)};return Y(i,`▸ ${Wo(r)} — 行动顺序：${i.turnOrder.map(se).join(" → ")}`)}const a=zn(e,`ADVANCE_TIMING: ${e.phase}/${e.currentTiming} 时机全部完成，推进到下一阶段`);return fn(a,{type:"ADVANCE_PHASE"})}function Kh(e){var t,a;const n=zn(e,`ADVANCE_PHASE: ${e.phase} → 推进`);switch(e.phase){case"draw":{const r=n.playerIds.find(s=>!n.players[s].isDefeated)??n.playerIds[0];return{...n,phase:"plotting",plottingStep:`transition_to_${r}`,activePlayer:r,currentTiming:null}}case"plotting":{const s={...al(n,1),phase:"action_seg1",plottingStep:"complete",currentTiming:"movement"};let l={...s,turnOrder:Zo(s)};for(const d of l.playerIds){const u=l.players[d];if(u.isDefeated)continue;const p=u.plotSeg1?((t=ne(u.plotSeg1.defId))==null?void 0:t.nameCn)??u.plotSeg1.defId:"(空)",m=u.plotSeg2?((a=ne(u.plotSeg2.defId))==null?void 0:a.nameCn)??u.plotSeg2.defId:"(空)";l=zn(l,`${se(d)} 配置: 阶段1=[${p}] 阶段2=[${m}] 位置=${u.position.row},${u.position.col} 朝向=${u.facing}`)}return Y(l,`▸ ${Wo("movement")} — 行动顺序：${l.turnOrder.map(se).join(" → ")}`)}case"action_seg1":{const s={...al(n,2),phase:"action_seg2",currentTiming:"movement"},i={...s,turnOrder:Zo(s)};return Y(i,`▸ ${Wo("movement")} — 行动顺序：${i.turnOrder.map(se).join(" → ")}`)}case"action_seg2":return Jh(n);default:return n}}function Jh(e){let n=zn(e,`CLEANUP: 第${e.roundNumber}回合结束`);for(const l of e.playerIds){const d=e.players[l];n=zn(n,`  ${se(l)}: 位置=(${d.position.row},${d.position.col}) 朝向=${d.facing} 手牌=${d.hand.length} 牌组=${d.deck.filter(u=>!u.destroyed).length} 弃牌=${d.discard.length} ${d.isDefeated?"已击破":"存活"}`)}e=n;const t=(l,d)=>!d||d.destroyed?l:{...l,discard:[...l.discard,d]},a={...e.players};for(const l of e.playerIds){let d=t(e.players[l],e.players[l].plotSeg1);d=t(d,d.plotSeg2),d={...d,plotSeg1:null,plotSeg2:null},d={...d,discard:[...d.discard,...d.hand.filter(u=>!u.destroyed)],hand:[]},a[l]=d}const r={...e,players:a,phase:"cleanup",currentTiming:null},s=Y(r,`--- 第 ${e.roundNumber} 回合结束 ---`),i=nn(s);return i.phase==="game_over"?i:Bh(i)}function Bh(e){var r;const n=e.roundNumber+1;let t=Y({...e,phase:"draw",roundNumber:n},`=== 第 ${n} 回合开始 ===`);for(const s of e.playerIds){if(t.players[s].isDefeated)continue;const i=((r=X.find(l=>l.id===t.players[s].unitId))==null?void 0:r.evasion)??5;t=dc(t,{playerId:s,count:i})}const a=e.playerIds.find(s=>!t.players[s].isDefeated)??e.playerIds[0];return{...t,phase:"plotting",plottingStep:`transition_to_${a}`,activePlayer:a,currentTiming:null}}function nn(e){const n=i=>{const l=[...i.deck,...i.hand,...i.auxiliary,...i.discard,...i.plotSeg1?[i.plotSeg1]:[],...i.plotSeg2?[i.plotSeg2]:[]].filter(u=>!u.destroyed);return l.length<=3?!0:!l.some(u=>{const p=ne(u.defId);return p&&(p.actionType==="ranged"||p.actionType==="melee"||p.actionType==="charge")})},t={...e.players};let a=!1;for(const i of e.playerIds){if(t[i].isDefeated)continue;n(t[i])&&(t[i]={...t[i],isDefeated:!0},a=!0)}if(!a)return e;let r={...e,players:t};for(const i of e.playerIds)if(!e.players[i].isDefeated&&r.players[i].isDefeated){const l=X.find(m=>m.id===r.players[i].unitId),d=e.playerIds.indexOf(i),u=d>=0?`P${d+1}`:i,p=r.lastDamageContext;if(p&&p.targetId===i&&p.attackerId){const m=X.find(h=>{var f;return h.id===((f=r.players[p.attackerId])==null?void 0:f.unitId)}),g=e.playerIds.indexOf(p.attackerId),x=g>=0?`P${g+1}`:p.attackerId;r=Y(r,`💀 ${u}[${(l==null?void 0:l.nameCn)??i}] 被 ${x}[${(m==null?void 0:m.nameCn)??p.attackerId}] 以【${p.weaponName}】击毁！`)}else r=Y(r,`💀 ${u}[${(l==null?void 0:l.nameCn)??i}] 机体严重受损，宣告报废！`)}const s=new Set;for(const i of e.playerIds)r.players[i].isDefeated||s.add(r.teams[i]);if(s.size<=1){if(s.size===0)return Y({...r,phase:"game_over"},"所有队伍同时全灭！平局！");const i=[...s][0],l=e.playerIds.filter(d=>r.teams[d]===i).map(d=>{const u=X.find(p=>p.id===r.players[d].unitId);return(u==null?void 0:u.nameCn)??d}).join("、");return Y({...r,phase:"game_over"},`队伍${i+1}（${l}）获胜！`)}return r}function Fh(e,n){if(e.currentTiming!=="melee")return e;const{playerId:t,to:a}=n,r=ie(e,t),s=e.playerIds.filter(p=>p!==t).map(p=>ie(e,p).position);if(!jn(r,ne,"melee").moveSensor)return Y(e,`${t} 移动传感器未激活（需要辅助区中有≥2张）`);if(!Mf(e.map,r.position,s).some(p=>oe(p,a)))return Y(e,`${t} 移动传感器目标格不在有效范围内`);const d={...r,position:a};let u=ue(e,t,d);return u=Y(u,`【辅助】${t} 移动传感器：向 (${a.row}, ${a.col}) 移动1格`),u}function Gh(e,n){const{playerId:t,facing:a}=n,r=ie(e,t),s=X.find(d=>d.id===r.unitId),i=(s==null?void 0:s.nameCn)??t;let l=ue(e,t,{...r,facing:a});return l=Y(l,`${i} 调整机头朝向至【${a}】`),l}function fn(e,n){switch(n.type){case"SELECT_UNIT":return Sh(e,n);case"SELECT_MAP":return Ch(e,n);case"CONFIRM_SETUP":return Th(e);case"START_PLOTTING":return Eh(e);case"SET_SPAWN_POSITION":return Nh(e,n);case"SET_SPAWN_FACING":return Mh(e,n);case"DRAW_CARDS":return dc(e,n);case"PLOT_CARD":return Dh(e,n);case"CONFIRM_PLOT":return zh(e,n);case"ADVANCE_PLOT_STEP":return Ah(e);case"MOVE_UNIT":return $h(e,n);case"ADJUST_FACING":return Gh(e,n);case"ADVANCE_TIMING":return Td(e);case"ADVANCE_PHASE":return Kh(e);case"SKIP_ACTION":return Td(e);case"RESET_GAME":return Tf(n.playerCount??2,n.teamCount??2);case"LOAD_GAME":return n.state;case"ADD_LOG":return Y(e,n.message);case"RESOLVE_RANGED":return Md(e,n,"ranged");case"RESOLVE_MELEE":return Md(e,n,"melee");case"RESOLVE_CHARGE":return Rh(e,n);case"PLACE_MINE":return Vh(e,n);case"SELECT_DAMAGE_CARD":return Lh(e,n);case"CONFIRM_DAMAGE_SELECTION":return Oh(e,n);case"CONFIRM_ARMOR_CHOICE":return Ph(e,n);case"MELEE_SENSOR_MOVE":return Fh(e,n);default:return e}}class Hh{constructor(){qe(this,"ctx",null);qe(this,"_enabled",!0);qe(this,"_volume",.5)}init(){this.ctx||(this.ctx=new AudioContext),this.ctx.state==="suspended"&&this.ctx.resume()}get enabled(){return this._enabled}set enabled(n){this._enabled=n}get volume(){return this._volume}set volume(n){this._volume=Math.max(0,Math.min(1,n))}ensure(){return!this._enabled||!this.ctx?null:(this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx)}makeGain(n,t){const a=n.createGain();return a.gain.value=t*this._volume,a.connect(n.destination),a}noiseBuffer(n,t){const a=Math.floor(n.sampleRate*t),r=n.createBuffer(1,a,n.sampleRate),s=r.getChannelData(0);for(let i=0;i<a;i++)s[i]=Math.random()*2-1;return r}cardFlip(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createBufferSource();a.buffer=this.noiseBuffer(n,.06);const r=n.createBiquadFilter();r.type="highpass",r.frequency.value=3e3;const s=this.makeGain(n,.25);s.gain.setValueAtTime(.25*this._volume,t),s.gain.exponentialRampToValueAtTime(.001,t+.05),a.connect(r),r.connect(s),a.start(t),a.stop(t+.06)}footstep(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createOscillator();a.type="sine",a.frequency.setValueAtTime(150,t),a.frequency.exponentialRampToValueAtTime(60,t+.05);const r=this.makeGain(n,.2);r.gain.setValueAtTime(.2*this._volume,t),r.gain.exponentialRampToValueAtTime(.001,t+.08),a.connect(r),a.start(t),a.stop(t+.08);const s=n.createBufferSource();s.buffer=this.noiseBuffer(n,.03);const i=n.createBiquadFilter();i.type="bandpass",i.frequency.value=800,i.Q.value=2;const l=this.makeGain(n,.1);l.gain.setValueAtTime(.1*this._volume,t),l.gain.exponentialRampToValueAtTime(.001,t+.03),s.connect(i),i.connect(l),s.start(t),s.stop(t+.03)}weaponFire(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createBufferSource();a.buffer=this.noiseBuffer(n,.15);const r=n.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(1200,t),r.frequency.exponentialRampToValueAtTime(400,t+.12),r.Q.value=3;const s=this.makeGain(n,.3);s.gain.setValueAtTime(.3*this._volume,t),s.gain.exponentialRampToValueAtTime(.001,t+.15),a.connect(r),r.connect(s),a.start(t),a.stop(t+.15);const i=n.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(800,t),i.frequency.exponentialRampToValueAtTime(200,t+.12);const l=this.makeGain(n,.15);l.gain.setValueAtTime(.15*this._volume,t),l.gain.exponentialRampToValueAtTime(.001,t+.12),i.connect(l),i.start(t),i.stop(t+.12)}metalImpact(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=[200,340];for(const i of a){const l=n.createOscillator();l.type="sine",l.frequency.value=i;const d=this.makeGain(n,.2);d.gain.setValueAtTime(.2*this._volume,t),d.gain.exponentialRampToValueAtTime(.001,t+.25),l.connect(d),l.start(t),l.stop(t+.25)}const r=n.createBufferSource();r.buffer=this.noiseBuffer(n,.02);const s=this.makeGain(n,.25);s.gain.setValueAtTime(.25*this._volume,t),s.gain.exponentialRampToValueAtTime(.001,t+.02),r.connect(s),r.start(t),r.stop(t+.02)}explosion(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createOscillator();a.type="sine",a.frequency.setValueAtTime(60,t),a.frequency.exponentialRampToValueAtTime(30,t+.5);const r=this.makeGain(n,.35);r.gain.setValueAtTime(.35*this._volume,t),r.gain.setValueAtTime(.35*this._volume,t+.1),r.gain.exponentialRampToValueAtTime(.001,t+.5),a.connect(r),a.start(t),a.stop(t+.5);const s=n.createBufferSource();s.buffer=this.noiseBuffer(n,.4);const i=n.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(3e3,t),i.frequency.exponentialRampToValueAtTime(200,t+.35);const l=this.makeGain(n,.3);l.gain.setValueAtTime(.3*this._volume,t),l.gain.exponentialRampToValueAtTime(.001,t+.35),s.connect(i),i.connect(l),s.start(t),s.stop(t+.4)}cardShatter(){const n=this.ensure();if(!n)return;const t=n.currentTime;for(let a=0;a<5;a++){const r=t+a*.03,s=n.createBufferSource();s.buffer=this.noiseBuffer(n,.02);const i=n.createBiquadFilter();i.type="highpass",i.frequency.value=1e3+a*300;const l=this.makeGain(n,.2);l.gain.setValueAtTime(.2*this._volume,r),l.gain.exponentialRampToValueAtTime(.001,r+.02),s.connect(i),i.connect(l),s.start(r),s.stop(r+.02)}}mineBeep(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=[600,800,1e3];for(let r=0;r<a.length;r++){const s=t+r*.1,i=n.createOscillator();i.type="sine",i.frequency.value=a[r];const l=this.makeGain(n,.15);l.gain.setValueAtTime(.15*this._volume,s),l.gain.setValueAtTime(.15*this._volume,s+.05),l.gain.exponentialRampToValueAtTime(.001,s+.08),i.connect(l),i.start(s),i.stop(s+.08)}}chargeRumble(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(80,t),a.frequency.linearRampToValueAtTime(120,t+.3);const r=n.createOscillator();r.type="sine",r.frequency.value=15;const s=n.createGain();s.gain.value=.15*this._volume;const i=this.makeGain(n,.25);i.gain.setValueAtTime(.25*this._volume,t),i.gain.exponentialRampToValueAtTime(.001,t+.4),r.connect(s),s.connect(i.gain),a.connect(i),r.start(t),a.start(t),r.stop(t+.4),a.stop(t+.4)}uiBlip(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createOscillator();a.type="sine",a.frequency.value=880;const r=this.makeGain(n,.1);r.gain.setValueAtTime(.1*this._volume,t),r.gain.exponentialRampToValueAtTime(.001,t+.06),a.connect(r),a.start(t),a.stop(t+.06)}}const ge=new Hh,Uh={move_step:200,card_draw:350,ranged_hit:400,melee_hit:350,charge_move:300,charge_hit:450,card_destroy:400,mine_explode:500,mine_place:300,screen_shake:300,damage_number:600,cleanup_discard:2500,batch_card_draw:1600,deck_reshuffle:800};function Wh(e){return Uh[e.type]??300}const Ef=j.createContext(null);function Is({children:e}){const[n,t]=j.useState(!1),[a,r]=j.useState(null),[s,i]=j.useState(()=>Object.fromEntries(da.map(h=>[h,null]))),l=j.useRef([]),d=j.useRef(!1),u=j.useRef(!1),p=j.useRef((()=>{try{const h=localStorage.getItem("em_anim_speed");return h==="fast"?.5:h==="off"?0:1}catch{return 1}})()).current,m=j.useCallback(()=>{if(u.current||l.current.length===0){r(null),t(!1),i(Object.fromEntries(da.map(_=>[_,null]))),d.current=!1,u.current=!1;return}const h=l.current.shift();r(h),h.type==="move_step"&&i(_=>({..._,[h.playerId]:{pos:h.to,facing:h.facing}})),Zh(h);const f=p===0?0:Wh(h)*p;f===0?m():setTimeout(()=>m(),f)},[p]),g=j.useCallback(h=>{if(h.length!==0&&p!==0&&(l.current.push(...h),!d.current)){d.current=!0,u.current=!1,t(!0);const f=h.find(_=>_.type==="move_step");f&&i(_=>({..._,[f.playerId]:{pos:f.from,facing:f.facing}})),setTimeout(()=>m(),16)}},[m,p]),x=j.useCallback(()=>{u.current=!0,l.current=[],r(null),t(!1),i(Object.fromEntries(da.map(h=>[h,null]))),d.current=!1},[]);return o.jsx(Ef.Provider,{value:{isAnimating:n,currentEvent:a,animatedPositions:s,enqueueEvents:g,skipAnimation:x,speedMultiplier:p},children:e})}function zr(){const e=j.useContext(Ef);if(!e)throw new Error("useAnimation must be used inside <AnimationProvider>");return e}function Zh(e){switch(e.type){case"card_draw":ge.cardFlip();break;case"move_step":ge.footstep();break;case"ranged_hit":ge.weaponFire(),setTimeout(()=>ge.metalImpact(),100);break;case"melee_hit":ge.metalImpact();break;case"charge_move":ge.chargeRumble();break;case"charge_hit":ge.explosion(),setTimeout(()=>ge.metalImpact(),80);break;case"card_destroy":e.isBomb?ge.explosion():ge.cardShatter();break;case"mine_explode":ge.explosion();break;case"mine_place":ge.mineBeep();break;case"cleanup_discard":case"batch_card_draw":ge.cardFlip();break;case"deck_reshuffle":ge.cardFlip(),setTimeout(()=>ge.cardFlip(),200);break}}function Yh(e,n){const{isAnimating:t,enqueueEvents:a}=zr();return j.useCallback(r=>{const s=r.type==="ADVANCE_TIMING"||r.type==="ADVANCE_PHASE"||r.type==="ADJUST_FACING"||r.type==="START_PLOTTING"||r.type==="SELECT_DAMAGE_CARD"||r.type==="CONFIRM_DAMAGE_SELECTION";if(t&&!s)return;const i=n.current,l=fn(i,r);e(r);const d=Xh(i,l,r);d.length>0&&a(d)},[e,n,t,a])}function Xh(e,n,t){switch(t.type){case"MOVE_UNIT":return Qh(e,n,t);case"RESOLVE_RANGED":return Ed(e,n,"ranged",t.attackerId,t.targetId);case"RESOLVE_MELEE":return Ed(e,n,"melee",t.attackerId,t.targetId);case"RESOLVE_CHARGE":return qh(e,n,t.attackerId,t.targetId);case"DRAW_CARDS":return ex(e,n,t.playerId);case"ADVANCE_TIMING":return e.phase==="action_seg2"&&n.phase!=="action_seg2"?[nx(e),...Dd(e,n,"player1"),...Dd(e,n,"player2")]:[];case"PLACE_MINE":return[{type:"mine_place",playerId:t.playerId,position:t.to}];case"SELECT_DAMAGE_CARD":return tx(e,n);default:return[]}}function Qh(e,n,t){const{playerId:a}=t,r=mn(e,a),s=mn(n,a),i=r.position;if(oe(i,s.position))return[];const l=[],d=t.path&&t.path.length>0?t.path:[s.position];let u=i;for(const g of d){const x=Et(g.row-u.row,g.col-u.col);if(l.push({type:"move_step",playerId:a,from:u,to:g,facing:x}),u=g,oe(g,s.position))break}const p=e.mines.filter(g=>!n.mines.some(x=>x.id===g.id));for(const g of p)l.push({type:"mine_explode",position:g.position,damage:g.damage}),l.push({type:"screen_shake",intensity:"heavy"});const m=ks(e,n,a);return js(l,a,m),l}function Ed(e,n,t,a,r){var p;const s=[],i=mn(e,r).position,l=ks(e,n,r),d=l.length;if(d===0&&!n.pendingDamage)return[];const u=d+(((p=n.pendingDamage)==null?void 0:p.remaining)??0);return s.push({type:t==="ranged"?"ranged_hit":"melee_hit",attackerId:a,targetId:r,damage:u,targetPos:i}),s.push({type:"screen_shake",intensity:t==="melee"?"medium":"light"}),u>0&&s.push({type:"damage_number",position:i,value:u}),js(s,r,l),s}function qh(e,n,t,a){var p;const r=[],s=mn(e,t),i=mn(n,t),l=mn(e,a).position;oe(s.position,i.position)||(r.push({type:"charge_move",attackerId:t,from:s.position,to:i.position}),r.push({type:"move_step",playerId:t,from:s.position,to:i.position,facing:Et(i.position.row-s.position.row,i.position.col-s.position.col)}));const d=ks(e,n,a),u=d.length+(((p=n.pendingDamage)==null?void 0:p.remaining)??0);return r.push({type:"charge_hit",attackerId:t,targetId:a,damage:u,targetPos:l}),r.push({type:"screen_shake",intensity:"heavy"}),u>0&&r.push({type:"damage_number",position:l,value:u}),js(r,a,d),r}function ex(e,n,t){const a=[],r=mn(e,t),s=mn(n,t),i=new Set(r.hand.map(u=>u.instanceId)),l=s.hand.filter(u=>!i.has(u.instanceId));if(l.length>0){const u=r.deck.filter(g=>!g.destroyed).length,p=Math.min(l.length,u),m=l.length-p;p>0&&a.push({type:"batch_card_draw",playerId:t,count:p}),m>0&&(a.push({type:"deck_reshuffle",playerId:t}),a.push({type:"batch_card_draw",playerId:t,count:m}))}const d=new Set(r.auxiliary.map(u=>u.instanceId));for(const u of s.auxiliary)d.has(u.instanceId)||a.push({type:"card_draw",playerId:t,card:u,defId:u.defId,isAuxiliary:!0});return a}function nx(e){function n(t){const a=[];for(const r of t.hand)r.destroyed||a.push(r);return t.plotSeg1&&!t.plotSeg1.destroyed&&a.push(t.plotSeg1),t.plotSeg2&&!t.plotSeg2.destroyed&&a.push(t.plotSeg2),a}return{type:"cleanup_discard",p1Cards:n(e.players.player1),p2Cards:n(e.players.player2)}}function Dd(e,n,t){const a=[],r=mn(e,t),s=mn(n,t),i=s.hand.length;if(i>0){const d=r.deck.filter(m=>!m.destroyed).length,u=Math.min(i,d),p=i-u;u>0&&a.push({type:"batch_card_draw",playerId:t,count:u}),p>0&&(a.push({type:"deck_reshuffle",playerId:t}),a.push({type:"batch_card_draw",playerId:t,count:p}))}const l=new Set(r.auxiliary.map(d=>d.instanceId));for(const d of s.auxiliary)l.has(d.instanceId)||a.push({type:"card_draw",playerId:t,card:d,defId:d.defId,isAuxiliary:!0});return a}function tx(e,n){const t=e.pendingDamage;if(!t)return[];const a=ks(e,n,t.targetId),r=[];return js(r,t.targetId,a),r}function mn(e,n){return e.players[n]}function ks(e,n,t){const a=new Set(mn(e,t).destroyedCards.map(r=>r.instanceId));return mn(n,t).destroyedCards.filter(r=>!a.has(r.instanceId))}function js(e,n,t){for(let a=0;a<t.length;a++){const r=t[a],s=ne(r.defId);e.push({type:"card_destroy",playerId:n,card:r,defId:r.defId,isBomb:(s==null?void 0:s.hasBombIcon)??!1,index:a,total:t.length})}}const ax={player1:!1,player2:!1,player1Difficulty:"hard",player2Difficulty:"hard",playerAI:{},playerDifficulty:{}};function ze(e,n){var t;return((t=e.playerAI)==null?void 0:t[n])!==void 0?e.playerAI[n]:n==="player1"?e.player1:n==="player2"?e.player2:!1}function Ar(e,n){var t;return((t=e.playerDifficulty)==null?void 0:t[n])!==void 0?e.playerDifficulty[n]:n==="player1"?e.player1Difficulty:n==="player2"?e.player2Difficulty:"hard"}function pc(e,n){const t=e.teams[n],a=e.players[n].position;let r=null,s=1/0;for(const i of e.playerIds){if(i===n||e.teams[i]===t||e.players[i].isDefeated)continue;const l=e.players[i].position,d=Math.abs(l.row-a.row)+Math.abs(l.col-a.col);d<s&&(s=d,r=i)}return r??e.playerIds.find(i=>i!==n&&!e.players[i].isDefeated&&e.teams[i]!==t)??e.playerIds.find(i=>i!==n)??n}function _a(e,n){return e.players[n]}function rx(e,n,t,a,r,s){if(!n)return 0;const i=Ne(t.position,a.position);let l;switch(n.actionType){case"ranged":case"melee":case"charge":l=5+(n.damage??0);break;case"movement":l=2+(n.movementValue??0)*.5;break;case"aim":case"armor":l=2;break;case"mine":l=1.5+(n.damage??0)*.2;break;default:l=1}n.hasBombIcon&&(s?l+=5:l+=8);const u=ft(t).filter(p=>p.defId===e.defId&&!p.destroyed).length;if(u>=3?l-=3:u===2&&(l-=1.5),n.actionType==="movement"&&i>=4&&(l+=3),n.actionType==="ranged"){const p=n.rangeMin??1,m=n.rangeMax??6;i>=p&&i<=m&&(l+=4)}return(n.actionType==="melee"||n.actionType==="charge")&&i<=2&&(l+=4),l}function Jt(e,n,t,a,r,s){if(e.actionType!=="movement")return[];const i=jn(n,r,"movement"),l=(e.movementValue??0)+(i.wheel?2:0);if(l<=0)return[];const d=[t.position],u=ys(a,n.position,l,d,i,n.facing),p=[];for(const{pos:m}of u){const g=lc(a,n.position,n.facing,m,l,[t.position],i);g&&p.push({pos:m,facing:g.finalFacing,dist:Ne(m,t.position)})}return p.sort((m,g)=>m.dist-g.dist),p}function ox(e,n,t,a,r,s){const i=Jt(e,t,a,r,s);if(i.length===0)return null;if(n.actionType==="melee")return i.find(l=>l.dist===1)??null;if(n.actionType==="ranged"){const l=n.rangeMin??1,d=n.rangeMax??6,u=n.rangeOptimal??Math.round((l+d)/2);let p=null,m=1/0;for(const g of i){if(g.dist<l||g.dist>d||!vr(r,g.pos,a.position)||!Dn(g.facing,g.pos,a.position))continue;const x=Math.abs(g.dist-u);x<m&&(m=x,p=g)}return p}return n.actionType==="charge"?i.find(l=>l.dist<=3)??null:null}function er(e,n,t,a,r,s,i){var u;let l=e.damage??0;if(e.actionType==="ranged"&&e.rangeOptimal!==void 0&&e.damageAttenuation!==void 0){const p=Math.max(0,t-e.rangeOptimal);l-=p*e.damageAttenuation}const d=(u=i.cells[n.row])==null?void 0:u[n.col];return(d==null?void 0:d.terrain)==="water"&&e.isEnergyWeapon&&(l-=1),Math.max(0,l)}function sx(e,n){const t=e.hand.filter(r=>!r.destroyed);if(t.length===0)return 0;const a=t.filter(r=>{const s=n(r.defId);return s&&s.actionType==="armor"}).length;return Math.min(1,a/t.length)}function zd(e,n,t,a,r,s){var g,x;const i=Ne(t.position,a.position),l=(g=r.cells[a.position.row])==null?void 0:g[a.position.col],d=(x=r.cells[t.position.row])==null?void 0:x[t.position.col],u=sx(a,s),p=h=>["ranged","melee","charge"].includes(h.actionType),m=(l==null?void 0:l.terrain)==="forest"?.85:1;if(e.actionType==="movement"&&p(n)){const h=ox(e,n,t,a,r,s);if(h)return er(n,h.pos,h.dist,2,!1,!1,r)*(1-u*.5)*m*3.5+2;const f=Jt(e,t,a,r,s),_=f.length>0?f[0].dist:i;return(i-_)*1.5+(n.damage??0)*.3}if(e.actionType==="aim"&&p(n)){let h=(n.damage??0)+1,f=!1;if(n.actionType==="ranged"){const b=n.rangeMin??1,v=n.rangeMax??6;if(f=i>=b&&i<=v&&vr(r,t.position,a.position)&&Dn(t.facing,t.position,a.position),f&&n.rangeOptimal&&n.damageAttenuation){const y=Math.max(0,i-n.rangeOptimal);h-=y*n.damageAttenuation}(d==null?void 0:d.terrain)==="water"&&n.isEnergyWeapon&&(h-=1)}else n.actionType==="melee"?f=i===1:n.actionType==="charge"&&(f=i<=3);h=Math.max(0,h);const _=h*(1-u*.5)*m;return f?_*4+3:_*.5}if(p(e)&&n.actionType==="movement"){let h=0;if(e.actionType==="ranged"){const b=e.rangeMin??1,v=e.rangeMax??6;i>=b&&i<=v&&vr(r,t.position,a.position)&&Dn(t.facing,t.position,a.position)?h=er(e,t.position,i,1,!1,!1,r)*(1-u*.5)*m*2.5:h=(e.damage??0)*.3}else e.actionType==="melee"?i===1?h=er(e,t.position,i,1,!1,!1,r)*(1-u*.5)*3:h=(e.damage??0)*.3:e.actionType==="charge"&&(h=i<=3?(e.damage??0)*2:(e.damage??0)*.3);const f=Jt(n,t,a,r,s),_=f.length>0?Math.max(0,i-f[0].dist)*1+1:.5;return h+_}if(p(e)&&n.actionType==="armor"){let h=qr(e,i,t.position,t.facing,a.position,r,m,u,1);const f=i<=3?2.5:i<=5?1.5:.5;return h+f}if(e.actionType==="armor"&&p(n)){const h=i<=3?2.5:i<=5?1.5:.5;let f=qr(n,i,t.position,t.facing,a.position,r,m,u,2);return h+f}if(e.actionType==="movement"&&n.actionType==="movement"){if(i<=3)return 1;const h=Jt(e,t,a,r,s),f=h.length>0?h[0].dist:i,_=i-f,b=n.movementValue??0;return(_+Math.min(b,f-1))*1.2+.5}if(p(e)&&p(n)){const h=qr(e,i,t.position,t.facing,a.position,r,m,u,1),f=qr(n,i,t.position,t.facing,a.position,r,m,u,2),_=h>1&&f>1;return h+f+(_?2:0)}if(e.actionType==="movement"&&n.actionType==="armor"){const h=Jt(e,t,a,r,s),f=h.length>0?h[0].dist:i;return(i-f)*1+(f<=3?2:.5)}if(e.actionType==="armor"&&n.actionType==="movement"){const h=i<=3?2:.5,f=Jt(n,t,a,r,s),_=f.length>0?f[0].dist:i;return h+(i-_)*1}if(e.actionType==="aim"&&!p(n))return .3+eo(n,i);if(e.actionType==="mine"||n.actionType==="mine"){const h=i<=3?1.5:.5,f=e.actionType==="mine"?n:e;return h+eo(f,i)}return eo(e,i)+eo(n,i)}function qr(e,n,t,a,r,s,i,l,d){if(e.actionType==="ranged"){const u=e.rangeMin??1,p=e.rangeMax??6;return n>=u&&n<=p&&vr(s,t,r)&&Dn(a,t,r)?er(e,t,n,d,!1,!1,s)*(1-l*.5)*i*2.5:(e.damage??0)*.3}return e.actionType==="melee"?n===1?er(e,t,n,d,!1,!1,s)*(1-l*.5)*3:(e.damage??0)*.3:e.actionType==="charge"?n<=3?(e.damage??0)*2:(e.damage??0)*.3:0}function eo(e,n){switch(e.actionType){case"movement":return(e.movementValue??0)*.4+(n>3?1:.2);case"armor":return n<=3?2:n<=5?1:.3;case"aim":return .3;case"mine":return n<=3?1.5:.5;default:return .1}}function ix(e,n,t,a,r){const s=e.hand.filter(u=>!u.destroyed);if(s.length===0)return{seg1:null,seg2:null};if(s.length===1)return{seg1:s[0].instanceId,seg2:null};if(a==="easy"){const u=[...s].sort(()=>Math.random()-.5);return{seg1:u[0].instanceId,seg2:u[1].instanceId}}let i=-1/0,l=s[0].instanceId,d=s[1].instanceId;for(let u=0;u<s.length;u++){const p=s[u],m=t(p.defId);if(m)for(let g=0;g<s.length;g++){if(u===g)continue;const x=s[g],h=t(x.defId);if(!h)continue;const f=r?zd(m,h,e,n,r,t):m.actionType!=="movement"&&h.actionType!=="movement"?zd(m,h,e,n,{width:11,height:7,cells:[]},t):0;f>i&&(i=f,l=p.instanceId,d=x.instanceId)}}return{seg1:l,seg2:d}}function lx(e,n,t,a,r){const s=_a(e,n),i=pc(e,n),l=_a(e,i),d=jn(s,a,"movement"),u=t===1?s.plotSeg1:s.plotSeg2;if(!u)return null;const p=a(u.defId);if(!p||p.actionType!=="movement")return null;const m=(p.movementValue??0)+(d.wheel?2:0);if(m<=0)return null;const g=e.playerIds.filter(S=>S!==n&&!e.players[S].isDefeated).map(S=>e.players[S].position),x=ys(e.map,s.position,m,g,d,s.facing);if(x.length===0)return null;function h(S){const z=lc(e.map,s.position,s.facing,S,m,g,d);return z?{pos:S,path:z.path,finalFacing:z.finalFacing}:null}if(r==="easy"){if(Math.random()<.5)return null;const S=[...x].sort(()=>Math.random()-.5);for(const{pos:z}of S){const M=h(z);if(M)return M}return null}const _=(t===1?2:1)===1?s.plotSeg1:s.plotSeg2,b=_?a(_.defId):null;let v;if(!b)v=1;else if(b.actionType==="ranged"){const S=b.rangeMin??1,z=b.rangeMax??6;v=b.rangeOptimal??Math.round((S+z)/2)}else b.actionType==="melee"||b.actionType==="charge"?v=1:v=2;const y=Dr(l),w=[];for(const S of y){const z=a(S.defId);z&&z.actionType==="ranged"&&w.push({min:z.rangeMin??1,max:z.rangeMax??6})}const T=e.mines.filter(S=>S.ownerId!==n),D=[];for(const{pos:S}of x){const z=Ne(S,l.position),M=-Math.abs(z-v)*3,L=T.some(O=>oe(O.position,S))?-10:0,U=e.map.cells[S.row][S.col];let V=0;U.terrain==="forest"?V=1.5:U.terrain==="water"&&(V=-1);let R=0;for(const O of w)z<O.min||z>O.max?R+=.5:R-=.5;D.push({pos:S,quickScore:M+L+V+R})}D.sort((S,z)=>z.quickScore-S.quickScore);const k=D.slice(0,5);let C=-1/0,A=null;for(const{pos:S,quickScore:z}of k){const M=h(S);if(!M)continue;const E=Dn(M.finalFacing,S,l.position)?1:-1,L=z+E;L>C&&(C=L,A=M)}if(!A)for(const{pos:S}of D.slice(5)){const z=h(S);if(z){A=z;break}}return A}function cx(e,n,t,a,r,s){const i=_a(e,n),l=pc(e,n),d=_a(e,l),u=Rn(i,t,a,r);if(!u)return!1;if(u.actionType==="charge"&&a==="melee"&&s==="hard"){const m=X.find(v=>v.id===i.unitId),g=X.find(v=>v.id===d.unitId);if(!m||!g)return!1;const x=_r(i,d,t,e.map,m,g,r);if(!x.canAttack)return!1;const h=x.counterDamage,f=Nd(i),_=Nd(d);return!(x.damage-h<0&&f<=h+2||f<=5&&h>=3||_<=3&&h>=2)}if(u.actionType==="charge"&&a==="melee"){const m=X.find(h=>h.id===i.unitId),g=X.find(h=>h.id===d.unitId);return!m||!g?!1:_r(i,d,t,e.map,m,g,r).canAttack}return Ho(i,d,t,a,e.map,r).canAttack}function dx(e,n,t,a,r=!1,s){const i=Dr(n);if(i.length===0)return null;if(a==="easy")return i[Math.floor(Math.random()*i.length)].instanceId;const l=s??n;let d=null,u=r?-1/0:1/0;for(const p of i){const m=t(p.defId),g=rx(p,m,n,l,t,r);(r?g>u:g<u)&&(u=g,d=p)}return(d==null?void 0:d.instanceId)??null}function ux(e,n,t,a,r){const s=_a(e,n),i=_a(e,pc(e,n)),l=t===1?s.plotSeg1:s.plotSeg2;if(!l)return null;const d=a(l.defId);if(!d||d.actionType!=="mine")return null;const u=e.mines.map(h=>h.position),p=[];for(let h=-1;h<=1;h++)for(let f=-1;f<=1;f++){if(h===0&&f===0)continue;const _=s.position.row+h,b=s.position.col+f;if(_<0||_>=e.map.height||b<0||b>=e.map.width)continue;const v={row:_,col:b};oe(v,s.position)||oe(v,i.position)||u.some(y=>oe(y,v))||p.push(v)}if(p.length===0)return null;if(r==="easy")return p.sort((h,f)=>Ne(h,i.position)-Ne(f,i.position)),p[0];let m=-1/0,g=null;const x=Ne(s.position,i.position);for(const h of p){let f=0;const _=Ne(h,i.position);f+=Math.max(0,5-_);const b=h.row,v=h.col;Ne(h,s.position)<x&&(f+=2),Dn(i.facing,i.position,h)&&Ne(i.position,h)<=3&&(f+=1.5);const w=b===0||b===e.map.height-1,T=v===0||v===e.map.width-1;(w||T)&&(f+=1),w&&T&&(f+=.5);const D=e.map.cells[b][v];(D.terrain==="forest"||D.terrain==="water")&&(f+=.5),f>m&&(m=f,g=h)}return g}const ws=1,px=["slot_1","slot_2","slot_3","slot_4","slot_5"],fx=10,Ir="em_saves_index",kr="em_replays_index",fc=e=>`em_save_${e}`,Xo=e=>`em_replay_${e}`;function Sa(e){try{const n=localStorage.getItem(e);return n?JSON.parse(n):[]}catch{return[]}}function Ss(e,n){localStorage.setItem(e,JSON.stringify(n))}function Ad(){return Sa(Ir).sort((n,t)=>t.timestamp-n.timestamp)}function Df(e,n,t,a){const r={slotId:e,timestamp:Date.now(),roundNumber:n.roundNumber,phase:n.phase,player1Unit:n.players.player1.unitId,player2Unit:n.players.player2.unitId,mapId:n.map.id,mapName:n.map.nameCn,isAutoSave:a},s={version:ws,metadata:r,gameState:n,aiConfig:t};try{localStorage.setItem(fc(e),JSON.stringify(s))}catch{throw new Error("存储空间不足，无法保存存档")}const l=Sa(Ir).filter(d=>d.slotId!==e);return l.push(r),Ss(Ir,l),r}function mx(e){try{const n=localStorage.getItem(fc(e));if(!n)return null;const t=JSON.parse(n);if(!hx(t))return null;const a=t;return a.gameState.playerIds||(a.gameState.playerIds=["player1","player2"],a.gameState.teams={player1:0,player2:1},a.gameState.teamCount=2,a.gameState.shuffleSeed=a.metadata.timestamp),a}catch{return null}}function gx(e){localStorage.removeItem(fc(e));const n=Sa(Ir);Ss(Ir,n.filter(t=>t.slotId!==e))}function hx(e){if(!e||typeof e!="object")return!1;const n=e;if(n.version!==ws||!n.gameState||typeof n.gameState!="object")return!1;const t=n.gameState;if(!t.phase||!t.players||!t.map)return!1;const a=t.players;return!(!a.player1||!a.player2||!n.metadata||typeof n.metadata!="object"||!n.aiConfig||typeof n.aiConfig!="object")}function $d(){return Sa(kr).sort((n,t)=>t.timestamp-n.timestamp)}function xx(e,n,t){const a=`${Date.now()}`,r={replayId:a,timestamp:Date.now(),totalRounds:e.roundNumber,totalActions:n.length,player1Unit:e.players.player1.unitId,player2Unit:e.players.player2.unitId,mapId:e.map.id,mapName:e.map.nameCn,winner:t},s={version:ws,metadata:r,initialState:e,actions:n};try{localStorage.setItem(Xo(a),JSON.stringify(s))}catch{throw new Error("存储空间不足，无法保存录像")}const i=Sa(kr);for(i.push(r),i.sort((l,d)=>l.timestamp-d.timestamp);i.length>fx;){const l=i.shift();localStorage.removeItem(Xo(l.replayId))}return Ss(kr,i),r}function Vd(e){try{const n=localStorage.getItem(Xo(e));if(!n)return null;const t=JSON.parse(n);if(!bx(t))return null;const a=t;return a.initialState.playerIds||(a.initialState.playerIds=["player1","player2"],a.initialState.teams={player1:0,player2:1},a.initialState.teamCount=2,a.initialState.shuffleSeed=a.metadata.timestamp),a}catch{return null}}function vx(e){localStorage.removeItem(Xo(e));const n=Sa(kr);Ss(kr,n.filter(t=>t.replayId!==e))}function bx(e){if(!e||typeof e!="object")return!1;const n=e;return!(n.version!==ws||!n.initialState||typeof n.initialState!="object"||!Array.isArray(n.actions)||!n.metadata||typeof n.metadata!="object")}function yx(e,n){let t=e.initialState,a=0;for(;a<e.actions.length&&!(t.roundNumber>=n);a++)t=fn(t,e.actions[a]);return{state:t,actionIndex:a}}const ua={N:"↑北",S:"↓南",E:"→东",W:"←西"},no={setup:"配置",pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"行动阶段·段落1",action_seg2:"行动阶段·段落2",cleanup:"清理阶段",game_over:"对局结束"},_x={movement:"移动时序",ranged:"射击时序",melee:"近战时序",special:"特殊时序"},Ix={movement:"移动",ranged:"射击",melee:"近战",charge:"突击",aim:"瞄准",armor:"装甲",mine:"机雷",special:"特殊",auxiliary:"辅助"};function Ln(e){var n;return((n=X.find(t=>t.id===e))==null?void 0:n.nameCn)??e}function rl(e){const n=ne(e);if(!n)return e;const t=Ix[n.actionType]??n.actionType;let a="";n.movementValue!=null&&(a=` 值${n.movementValue}`),n.damage!=null&&(a=` 伤害${n.damage}`,n.rangeMin!=null&&n.rangeMax!=null&&(a+=` 射程${n.rangeMin}-${n.rangeMax}`),n.rangeOptimal!=null&&(a+=` 最佳${n.rangeOptimal}`));const r=n.hasBombIcon?" [💣]":"",s=n.isKaiVariant?" [◆改]":"";return`${n.nameCn}(${t}${a}${r}${s})`}function ol(e){const n=rl(e.defId);return e.destroyed?`${n}[已破坏]`:n}function to(e){return e.length===0?"(无)":e.map(n=>ol(n)).join(", ")}function ao(e,n){const t=[],a=Ln(e.unitId),r=ua[e.facing]??e.facing,s=e.deck.filter(d=>!d.destroyed).length,i=e.hand.filter(d=>!d.destroyed).length,l=e.auxiliary.filter(d=>!d.destroyed).length;if(t.push(`  ${n} [${a}]  位置(${e.position.row},${e.position.col}) 朝向${r}  败北=${e.isDefeated}`),t.push(`    牌库=${s}  手牌=${i}  辅助=${l}/${e.auxiliary.length}  弃牌=${e.discard.length}  破坏=${e.destroyedCards.length}  总存活=${s+i+l+e.discard.length+(e.plotSeg1&&!e.plotSeg1.destroyed?1:0)+(e.plotSeg2&&!e.plotSeg2.destroyed?1:0)}`),t.push(`    手牌: ${to(e.hand)}`),e.auxiliary.length>0&&t.push(`    辅助: ${to(e.auxiliary)}`),e.plotSeg1||e.plotSeg2){const d=e.plotSeg1?ol(e.plotSeg1):"—",u=e.plotSeg2?ol(e.plotSeg2):"—";t.push(`    布局: 段1=[${d}]  段2=[${u}]`)}return e.discard.length>0&&t.push(`    弃牌: ${to(e.discard)}`),e.destroyedCards.length>0&&t.push(`    破坏: ${to(e.destroyedCards)}`),t.join(`
`)}function kx(e,n){const t=r=>{const s=n.players[r],i=n.playerIds.indexOf(r);return`${i>=0?`P${i+1}`:r}[${s?Ln(s.unitId):r}]`},a=(r,s)=>{const i=n.players[s];return i?[...i.deck,...i.hand,...i.auxiliary,...i.discard,...i.destroyedCards,...i.plotSeg1?[i.plotSeg1]:[],...i.plotSeg2?[i.plotSeg2]:[]].find(d=>d.instanceId===r):void 0};switch(e.type){case"SELECT_UNIT":{const r=n.playerIds.indexOf(e.playerId);return`${r>=0?`P${r+1}`:e.playerId} 选择机体 ${Ln(e.unitId)}`}case"SELECT_MAP":return`选择地图 ${e.mapId}`;case"CONFIRM_SETUP":return"确认设置，开始对局";case"SET_SPAWN_POSITION":return`${t(e.playerId)} 设置出生点 (${e.position.row},${e.position.col})`;case"SET_SPAWN_FACING":return`${t(e.playerId)} 设置初始朝向 ${ua[e.facing]??e.facing}`;case"START_PLOTTING":return"战前准备结束，进入布局阶段";case"DRAW_CARDS":return`${t(e.playerId)} 抽牌 ${e.count} 张`;case"PLOT_CARD":{const r=a(e.instanceId,e.playerId);return`${t(e.playerId)} 布局段落${e.seg}: ${r?rl(r.defId):e.instanceId}`}case"CONFIRM_PLOT":return`${t(e.playerId)} 确认布局完成`;case"ADVANCE_PLOT_STEP":return"[系统] 布局步骤推进";case"MOVE_UNIT":{const r=n.players[e.playerId],s=r?`(${r.position.row},${r.position.col})`:"(?,?)",i=`(${e.to.row},${e.to.col})`,l=e.finalFacing?` 朝向→${ua[e.finalFacing]??e.finalFacing}`:"",d=e.path?` 路径[${e.path.map(u=>`(${u.row},${u.col})`).join("→")}]`:"";return`${t(e.playerId)} 移动 ${s}→${i}${l}${d}`}case"ADJUST_FACING":return`${t(e.playerId)} 调整朝向→${ua[e.facing]??e.facing}`;case"RESOLVE_RANGED":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动射击`;case"RESOLVE_MELEE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动近战`;case"RESOLVE_CHARGE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动突击`;case"PLACE_MINE":return`${t(e.playerId)} 在 (${e.to.row},${e.to.col}) 部署机雷 (伤害${e.damage})`;case"SELECT_DAMAGE_CARD":{const r=a(e.instanceId,e.playerId);return`${t(e.playerId)} 选择摧毁: ${r?rl(r.defId):e.instanceId}`}case"CONFIRM_DAMAGE_SELECTION":return`${t(e.playerId)} 确认伤害结算`;case"SKIP_ACTION":return"[系统] 跳过行动";case"ADVANCE_TIMING":return"[系统] 推进时序";case"ADVANCE_PHASE":return"[系统] 推进阶段";case"MELEE_SENSOR_MOVE":return`${t(e.playerId)} 近战传感器移动至 (${e.to.row},${e.to.col})`;case"RESET_GAME":return"[系统] 重置游戏";case"LOAD_GAME":return"[系统] 加载存档";case"ADD_LOG":return`[系统] ${e.message}`;default:return`[未知] ${e.type}`}}function jx(e,n){const t=[],a="═".repeat(72),r="─".repeat(72);t.push(a),t.push("EMBRYO MACHINE — 对局分析日志"),t.push(a),t.push(`生成时间: ${new Date().toISOString()}`),t.push(`地图: ${e.map.nameCn} (${e.map.id}) ${e.map.width}×${e.map.height}`),t.push(`P1: ${Ln(e.players.player1.unitId)} (${e.players.player1.unitId})`),t.push(`P2: ${Ln(e.players.player2.unitId)} (${e.players.player2.unitId})`),t.push(`总操作数: ${n.length}`),t.push(""),t.push("[地图地形]");const s={plain:"平",forest:"森",rubble:"瓦",water:"水",highland:"高",sand:"砂"};let i="     ";for(let _=0;_<e.map.width;_++)i+=`  ${String(_).padStart(2)} `;t.push(i);for(let _=0;_<e.map.height;_++){let b=`  ${String(_).padStart(2)} `;for(let v=0;v<e.map.width;v++){const y=e.map.cells[_][v],w=s[y.terrain]??"?",T=y.elevation>0?String(y.elevation):" ";b+=` ${w}${T} `}t.push(b)}t.push("  地形: 平=平地 森=森林 瓦=瓦砾 水=水域 高=高地 砂=砂地  数字=海拔"),t.push(""),t.push("[初始状态]"),t.push(`  阶段: ${no[e.phase]??e.phase}  回合: ${e.roundNumber}`),t.push(ao(e.players.player1,"P1")),t.push(ao(e.players.player2,"P2")),e.mines.length>0&&t.push(`  机雷: ${e.mines.map(_=>`(${_.position.row},${_.position.col}) 所有者=${_.ownerId} 伤害=${_.damage}`).join("; ")}`),t.push("");let l=e,d=l.roundNumber,u=l.phase,p=l.currentTiming,m=0,g=l.log.length;for(let _=0;_<n.length;_++){const b=n[_],v=l;l=fn(l,b),m++,l.roundNumber!==d&&(t.push(""),t.push(a),t.push(`══ 第 ${l.roundNumber} 回合 ══`),t.push(a),d=l.roundNumber),l.phase!==u&&(t.push(""),t.push(r),t.push(`── ${no[l.phase]??l.phase} ──`),t.push(r),u=l.phase,p=l.currentTiming),l.currentTiming!==p&&l.currentTiming&&(t.push(""),t.push(`  ◆ ${_x[l.currentTiming]??l.currentTiming}  先攻顺序: [${l.turnOrder.join(", ")}]`),p=l.currentTiming);const y=kx(b,v);t.push(`  #${String(m).padStart(4,"0")}  ${y}`);const w=l.log.slice(g);for(const C of w)t.push(`         │ ${C}`);if(g=l.log.length,l.pendingDamage&&!v.pendingDamage){const C=l.pendingDamage;t.push(`         ├─ [交互伤害] 目标=${C.targetId} 剩余=${C.remaining} 来源=${C.source}${C.attackerId?` 攻方=${C.attackerId}(瞄准指定)`:""}`)}const T=l.phase!==v.phase,D=l.roundNumber!==v.roundNumber,k=l.phase==="game_over"&&v.phase!=="game_over";(T||D||k)&&(t.push(""),t.push(`  [状态快照 #${m} | ${no[l.phase]??l.phase}]`),t.push(ao(l.players.player1,"P1")),t.push(ao(l.players.player2,"P2")),l.mines.length>0&&t.push(`  机雷: ${l.mines.map(C=>`(${C.position.row},${C.position.col}) 所有者=${C.ownerId} 伤害=${C.damage}`).join("; ")}`))}t.push(""),t.push(a),t.push("══ 对局总结 ══"),t.push(a);const x=l,h=Pd(x.players.player1),f=Pd(x.players.player2);x.phase==="game_over"?x.players.player1.isDefeated&&x.players.player2.isDefeated?t.push("结果: 平局（双方同时击破）"):x.players.player1.isDefeated?t.push(`结果: P2[${Ln(x.players.player2.unitId)}] 获胜`):x.players.player2.isDefeated&&t.push(`结果: P1[${Ln(x.players.player1.unitId)}] 获胜`):t.push(`结果: 对局未结束 (当前阶段: ${no[x.phase]??x.phase})`),t.push(`最终回合: ${x.roundNumber}`),t.push(`总操作数: ${n.length}`),t.push(""),t.push(`P1[${Ln(x.players.player1.unitId)}] 最终状态:`),t.push(`  存活卡牌: ${h}  破坏: ${x.players.player1.destroyedCards.length}  败北: ${x.players.player1.isDefeated}`),t.push(`  位置: (${x.players.player1.position.row},${x.players.player1.position.col}) 朝向: ${ua[x.players.player1.facing]}`),t.push(""),t.push(`P2[${Ln(x.players.player2.unitId)}] 最终状态:`),t.push(`  存活卡牌: ${f}  破坏: ${x.players.player2.destroyedCards.length}  败北: ${x.players.player2.isDefeated}`),t.push(`  位置: (${x.players.player2.position.row},${x.players.player2.position.col}) 朝向: ${ua[x.players.player2.facing]}`),t.push(""),t.push(r),t.push("[完整引擎日志]"),t.push(r);for(let _=0;_<x.log.length;_++)t.push(`  ${String(_+1).padStart(4,"0")}  ${x.log[_]}`);return t.push(""),t.push(a),t.push("日志结束"),t.push(a),t.join(`
`)}function Pd(e){const n=t=>t.filter(a=>!a.destroyed).length;return n(e.deck)+n(e.hand)+n(e.auxiliary)+e.discard.length+(e.plotSeg1&&!e.plotSeg1.destroyed?1:0)+(e.plotSeg2&&!e.plotSeg2.destroyed?1:0)}const Cs=j.createContext(null);function zf({children:e}){const[n,t]=j.useReducer(fn,void 0,Tf),[a,r]=j.useState(ax),[s,i]=j.useState(!0),[l,d]=j.useState(!1),u=j.useRef(n);u.current=n;const p=j.useRef([]),m=j.useRef(null),g=j.useRef(-1),x=j.useCallback(b=>{const v=u.current;if(b.type==="RESET_GAME"||b.type==="LOAD_GAME"){p.current=[],m.current=null,g.current=-1,t(b);return}if(b.type==="CONFIRM_SETUP"){const w=fn(v,b);p.current=[],m.current=w,t(b);return}p.current.push(b);const y=fn(v,b);if(t(b),s&&v.phase!=="draw"&&y.phase==="draw"&&y.roundNumber!==g.current){g.current=y.roundNumber;try{Df("auto",y,a,!0)}catch{}}},[a,s]),h=Yh(x,u),f=j.useCallback(b=>ne(b),[]),_=j.useCallback(()=>m.current?{initialState:m.current,actions:[...p.current]}:null,[]);return o.jsx(Cs.Provider,{value:{state:n,dispatch:h,rawDispatch:x,getCard:f,aiConfig:a,setAIConfig:r,getReplayData:_,autoSaveEnabled:s,setAutoSaveEnabled:i,exposureMode:l,setExposureMode:d},children:e})}function ke(){const e=j.useContext(Cs);if(!e)throw new Error("useGame must be used inside <GameProvider>");return e}function $r(){return ke().state}const wx=[2,3,4,6,8];function Sx(e){const n=[];for(let t=2;t<=e;t++)e%t===0&&n.push(t);return n}function Cx({onNext:e,onBack:n,playerCount:t,setPlayerCount:a,teamCount:r,setTeamCount:s}){const{dispatch:i,rawDispatch:l}=ke(),d=j.useMemo(()=>uh(),[]),[u,p]=j.useState(d[0].id),m=j.useMemo(()=>Sx(t),[t]),g=j.useMemo(()=>d.filter(f=>{if(f.maxPlayers<t||f.maxTeams<r)return!1;const _=Math.ceil(t/r);for(let b=0;b<r;b++){const v=f.startZones[b];if(!v||v.length<_)return!1}return!0}),[t,r,d]),x=j.useMemo(()=>d.find(f=>f.id===u)??d[0],[u,d]);j.useEffect(()=>{l({type:"RESET_GAME",playerCount:t,teamCount:r});const f=Math.ceil(t/r),_=d.filter(b=>{if(b.maxPlayers<t||b.maxTeams<r)return!1;for(let v=0;v<r;v++){const y=b.startZones[v];if(!y||y.length<f)return!1}return!0});_.length>0&&(p(_[0].id),i({type:"SELECT_MAP",mapId:_[0].id}))},[t,r]),j.useEffect(()=>{m.includes(r)||s(m[0])},[m,r,s]),j.useEffect(()=>{g.length>0&&!g.find(f=>f.id===u)&&h(g[0].id)},[g]);function h(f){f!==u&&(p(f),i({type:"SELECT_MAP",mapId:f}))}return o.jsxs("div",{className:"msel-screen",children:[o.jsx("button",{className:"msel-back-btn",onClick:n,children:"← 返回主菜单"}),o.jsx("h1",{className:"msel-title",children:"Embryo Machine"}),o.jsx("p",{className:"msel-subtitle",children:"选择地图"}),o.jsxs("section",{className:"msel-section",children:[o.jsx("h2",{children:"游戏配置"}),o.jsxs("div",{className:"msel-config-row",children:[o.jsxs("label",{className:"msel-config-label",children:["玩家人数",o.jsx("select",{className:"msel-config-select",value:t,onChange:f=>a(Number(f.target.value)),children:wx.map(f=>o.jsxs("option",{value:f,children:[f,"人"]},f))})]}),o.jsxs("label",{className:"msel-config-label",children:["队伍数量",o.jsx("select",{className:"msel-config-select",value:r,onChange:f=>s(Number(f.target.value)),children:m.map(f=>o.jsxs("option",{value:f,children:[f,"队 (",t/f,"人/队)"]},f))})]})]})]}),o.jsxs("section",{className:"msel-section",children:[o.jsx("h2",{children:"地图"}),o.jsx("div",{className:"msel-map-list",children:g.map(f=>o.jsxs("button",{className:`msel-map-btn ${u===f.id?"msel-map-btn--active":""}`,onClick:()=>h(f.id),children:[f.nameCn," ",f.id.startsWith("custom_")?"✦":"",o.jsxs("span",{className:"msel-map-btn__size",children:[f.height,"×",f.width," · ≤",f.maxPlayers,"人"]})]},f.id))})]}),o.jsxs("section",{className:"msel-preview",children:[o.jsx("div",{className:"msel-preview__grid-wrap",children:o.jsx("div",{className:"msel-preview__grid",style:{display:"grid",gridTemplateColumns:`repeat(${x.width}, 1fr)`,gap:"1px"},children:x.cells.flat().map((f,_)=>{const b=Math.floor(_/x.width),v=_%x.width,y=Object.values(x.startZones).some(w=>w.some(T=>T.row===b&&T.col===v));return o.jsx("div",{className:`msel-cell msel-cell--${f.terrain}${f.elevation>0?" msel-cell--elev":""}${y?" msel-cell--start":""}`,title:`${f.terrain}${f.elevation>0?` +${f.elevation}`:""}${y?" (起始点)":""}`},_)})})}),o.jsxs("div",{className:"msel-preview__info",children:[o.jsx("span",{className:"msel-preview__name",children:x.nameCn}),o.jsxs("span",{className:"msel-preview__meta",children:[x.height,"×",x.width," · 最多",x.maxPlayers,"人 · ",x.maxTeams,"队"]}),o.jsxs("div",{className:"msel-preview__legend",children:[o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--plain"}),"平地"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--sand"}),"沙地"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--rubble"}),"废墟"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--forest"}),"森林"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--water"}),"水域"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--highland"}),"高地"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--start"}),"起点"]})]})]})]}),o.jsx("button",{className:"msel-next-btn",onClick:e,children:"下一步 →"}),o.jsx("style",{children:Nx})]})}const Nx=`
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
`,Mx={gameTitle:"Embryo Machine",statMovement:"移动力",statEvasion:"回避值",statAssault:"突击",statAssaultDef:"被突击",statInitiative:"先制值"},Mn=[["#00f0ff","#00c8e0","#40e8ff","#80f0ff"],["#ff00c8","#ff44aa","#e040d0","#ff77dd"],["#00cc88","#44dd66","#00aa6e","#66eebb"],["#ff8800","#ffaa33","#e07000","#ffcc66"],["#6688ff","#4466ee","#88aaff","#3355dd"],["#cc44ff","#aa22dd","#dd77ff","#bb00ee"],["#44dddd","#22bbbb","#66eeee","#00ccbb"],["#ff4466","#dd2244","#ff6688","#ee0033"]];function mc(e,n){const t=e.teams[n]??0,a=Mn[t%Mn.length],s=e.playerIds.filter(i=>e.teams[i]===t).indexOf(n);return a[Math.max(0,s)%a.length]}const Bt=Mx;function Tx({onNext:e,onBack:n,autoFill:t=!1}){const{state:a,dispatch:r,setAIConfig:s,setExposureMode:i}=ke(),[l,d]=j.useState({}),[u,p]=j.useState({}),[m,g]=j.useState({}),x=a.playerIds.length,h=a.teamCount,f=j.useMemo(()=>da.slice(0,x),[x]);function _(S,z){r({type:"SELECT_UNIT",playerId:S,unitId:z}),g(M=>({...M,[S]:!0}))}function b(S,z){d(M=>({...M,[S]:z}))}function v(S,z){p(M=>({...M,[S]:z}))}const y=f.map(S=>{var z;return((z=a.players[S])==null?void 0:z.unitId)??""}),w=y.every(S=>S!==""),T=new Set(y.filter(S=>S!=="")).size===y.filter(S=>S!=="").length,D=f.filter(S=>m[S]).map(S=>{var z;return((z=a.players[S])==null?void 0:z.unitId)??""}).filter(S=>S!==""),k=new Set(D).size===D.length,C=t?k:w&&T,A={};for(let S=0;S<f.length;S++){const z=S%h;A[z]||(A[z]=[]),A[z].push(f[S])}return o.jsxs("div",{className:"setup-screen",children:[o.jsx("button",{className:"setup-back-btn",onClick:n,children:"← 上一步"}),o.jsx("h1",{className:"setup-title",children:Bt.gameTitle}),o.jsx("p",{className:"setup-subtitle",children:"选择机体"}),o.jsx("div",{className:"setup-teams",children:Object.entries(A).map(([S,z])=>o.jsxs("div",{className:"setup-team",children:[o.jsxs("h3",{className:"team-header",style:{color:Mn[Number(S)%Mn.length][0]},children:["队伍 ",Number(S)+1]}),o.jsx("div",{className:"setup-players",children:z.map((M,E)=>{var $;const L=da.indexOf(M),U=Mn[Number(S)%Mn.length],V=U[E%U.length],R=(($=a.players[M])==null?void 0:$.unitId)??"",O=y.filter((J,K)=>K!==f.indexOf(M)&&J);return o.jsxs("div",{className:"setup-player-col",children:[o.jsx(Ex,{label:`P${L+1}`,selectedUnit:R,blockedUnits:O,accentColor:V,onSelect:J=>_(M,J)}),o.jsxs("div",{className:"ai-control",children:[o.jsxs("label",{className:"ai-control__label",children:[o.jsx("input",{type:"checkbox",checked:l[M]??!1,onChange:J=>b(M,J.target.checked)}),"AI控制"]}),l[M]&&o.jsxs("select",{className:"ai-control__difficulty",value:u[M]??"hard",onChange:J=>v(M,J.target.value),children:[o.jsx("option",{value:"easy",children:"简单"}),o.jsx("option",{value:"hard",children:"困难"})]})]})]},M)})})]},S))}),o.jsx("button",{className:"start-btn",onClick:()=>{const S=new Set(f.filter($=>m[$]).map($=>{var J;return((J=a.players[$])==null?void 0:J.unitId)??""}).filter($=>$!=="")),M=[...X.map($=>$.id).filter($=>!S.has($))];for(let $=M.length-1;$>0;$--){const J=Math.floor(Math.random()*($+1));[M[$],M[J]]=[M[J],M[$]]}const E={...l},L={...u};let U=0;for(const $ of f)t&&!m[$]&&U<M.length&&(r({type:"SELECT_UNIT",playerId:$,unitId:M[U]}),U++,E[$]=!0,L[$]="hard");const V={},R={};for(const $ of f)V[$]=E[$]??!1,R[$]=L[$]??"hard";s({player1:V.player1??!1,player2:V.player2??!1,player1Difficulty:R.player1??"hard",player2Difficulty:R.player2??"hard",playerAI:V,playerDifficulty:R}),f.every($=>V[$])&&i(!0),e()},disabled:!C,title:C?"":"请为所有玩家分别选择不同的机体",children:"下一步 →"}),!C&&o.jsx("p",{className:"setup-hint",children:t?"手动选择的机体之间不可重复":w?"每位玩家须选择不同的机体":"请为所有玩家各选择一台机体"}),o.jsx("style",{children:Ax})]})}function Ex({label:e,selectedUnit:n,blockedUnits:t,accentColor:a,onSelect:r}){return o.jsxs("div",{className:"unit-picker",children:[o.jsx("h2",{className:"unit-picker__title",style:{color:a},children:e}),o.jsx("div",{className:"unit-grid",children:X.map(s=>{const i=t.includes(s.id);return o.jsx(Dx,{unit:s,isSelected:s.id===n,isBlocked:i,accentColor:a,onSelect:()=>!i&&r(s.id)},s.id)})}),n&&o.jsx(zx,{unit:X.find(s=>s.id===n),accentColor:a})]})}function Dx({unit:e,isSelected:n,isBlocked:t,accentColor:a,onSelect:r}){return o.jsxs("button",{className:`unit-card ${n?"unit-card--selected":""} ${t?"unit-card--blocked":""}`,onClick:r,disabled:t,title:t?"该机体已被其他玩家选择":e.nameCn,style:n?{borderColor:a,boxShadow:`0 0 8px ${a}55`}:{},children:[o.jsx("img",{src:`/assets/tokens/${e.tokenId}`,alt:e.nameCn,className:"unit-card__token",onError:s=>{s.target.style.opacity="0.3"}}),o.jsx("span",{className:"unit-card__name",children:e.nameCn}),o.jsxs("span",{className:"unit-card__init",children:["先制 ",e.initiative]})]})}function zx({unit:e,accentColor:n}){return o.jsxs("div",{className:"unit-stats",children:[o.jsxs("div",{className:"unit-stats__name",children:[e.nameCn," ",o.jsxs("small",{children:["(",e.nameJa,")"]})]}),o.jsx("div",{className:"unit-stats__type",children:e.type}),o.jsxs("div",{className:"unit-stats__grid",children:[o.jsx(Ra,{label:Bt.statMovement,value:e.movement,color:n}),o.jsx(Ra,{label:Bt.statEvasion,value:e.evasion,color:n}),o.jsx(Ra,{label:Bt.statAssault,value:e.assault,color:n}),o.jsx(Ra,{label:Bt.statAssaultDef,value:e.assaultDef,color:n}),o.jsx(Ra,{label:Bt.statInitiative,value:e.initiative,color:n})]})]})}function Ra({label:e,value:n,color:t}){return o.jsxs("div",{className:"stat",children:[o.jsx("span",{className:"stat__label",children:e}),o.jsx("span",{className:"stat__value",style:{color:t},children:n})]})}const Ax=`
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
`,Rd=768;function Ns(){const[e,n]=j.useState(()=>typeof window<"u"&&window.innerWidth<=Rd);return j.useEffect(()=>{const t=window.matchMedia(`(max-width: ${Rd}px)`),a=r=>n(r.matches);return t.addEventListener("change",a),n(t.matches),()=>t.removeEventListener("change",a)},[]),e}const $n=18;function je({id:e,title:n,initialPos:t,width:a=300,height:r,minHeight:s=80,children:i,zIndex:l=10,defaultMinimized:d=!1,onFocus:u,siblingRects:p=[]}){const m=Ns(),[g,x]=j.useState(t),[h,f]=j.useState(d),_=j.useRef(null),b=j.useRef(!1);j.useEffect(()=>{b.current||(b.current=!0,x(t))},[]);const v=j.useCallback(y=>{if(m||y.button!==0)return;y.preventDefault(),u==null||u(e);const w=y.clientX-g.x,T=y.clientY-g.y,D=C=>{var V;let A=C.clientX-w,S=C.clientY-T;const z=window.innerWidth,M=window.innerHeight,E=(V=_.current)==null?void 0:V.getBoundingClientRect(),L=(E==null?void 0:E.width)??a,U=(E==null?void 0:E.height)??40;A<$n&&(A=0),S<$n&&(S=0),A+L>z-$n&&(A=z-L),S+U>M-$n&&(S=M-U);for(const R of p)Math.abs(A+L-R.left)<$n&&(A=R.left-L),Math.abs(A-R.right)<$n&&(A=R.right),Math.abs(S+U-R.top)<$n&&(S=R.top-U),Math.abs(S-R.bottom)<$n&&(S=R.bottom),Math.abs(S-R.top)<$n&&(S=R.top);x({x:Math.max(0,A),y:Math.max(0,S)})},k=()=>{document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",k)};document.addEventListener("mousemove",D),document.addEventListener("mouseup",k)},[e,g,u,p,a,m]);return m?o.jsxs("div",{ref:_,className:`dp dp--mobile ${h?"dp--min":""}`,onClick:()=>u==null?void 0:u(e),children:[o.jsxs("div",{className:"dp__bar dp__bar--mobile",onClick:()=>f(y=>!y),children:[o.jsx("span",{className:"dp__title",children:n}),o.jsx("span",{className:"dp__min-btn dp__min-btn--mobile",children:h?"▼":"▲"})]}),!h&&o.jsx("div",{className:"dp__body dp__body--mobile",children:i}),o.jsx("style",{children:Ld})]}):o.jsxs("div",{ref:_,className:`dp ${h?"dp--min":""}`,style:{left:g.x,top:g.y,width:a,height:h?void 0:r,minHeight:h?0:s,zIndex:l},onMouseDown:()=>u==null?void 0:u(e),children:[o.jsxs("div",{className:"dp__bar",onMouseDown:v,children:[o.jsx("span",{className:"dp__title",children:n}),o.jsx("button",{className:"dp__min-btn",onMouseDown:y=>y.stopPropagation(),onClick:()=>f(y=>!y),title:h?"展开":"最小化",children:h?"▢":"▬"})]}),!h&&o.jsx("div",{className:"dp__body",children:i}),o.jsx("style",{children:Ld})]})}const Ld=`
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
`,ta=48,$x=[{facing:"N",label:"↑N",title:"朝北"},{facing:"S",label:"↓S",title:"朝南"},{facing:"E",label:"→E",title:"朝东"},{facing:"W",label:"←W",title:"朝西"}],Od=.25,Vx=2,Kd=.1;function Px({onBack:e}){const{state:n,dispatch:t}=ke(),a=Ze.find(K=>K.id===n.map.id)??n.map,r=n.playerIds,s=a.width,i=a.height,l=j.useRef(null),[d,u]=j.useState({x:0,y:0,scale:1}),p=j.useRef(null),m=j.useRef(!1);j.useEffect(()=>{const K=l.current;if(!K)return;const G=K.clientWidth,W=K.clientHeight,Q=s*ta,ee=i*ta;if(!G||!W)return;const le=Math.min(G/Q,W/ee),de=Math.max(Od,Math.min(1.2,le)),ye=(G-Q*de)/2,xn=(W-ee*de)/2;u({x:ye,y:xn,scale:de})},[s,i]),j.useEffect(()=>{const K=l.current;if(!K)return;const G=W=>{W.preventDefault();const Q=W.deltaY<0?Kd:-Kd;u(ee=>({...ee,scale:Math.min(Vx,Math.max(Od,ee.scale+Q))}))};return K.addEventListener("wheel",G,{passive:!1}),()=>K.removeEventListener("wheel",G)},[]);const g=j.useCallback(K=>{K.button===0&&(p.current={startX:K.clientX,startY:K.clientY,origX:d.x,origY:d.y},m.current=!1)},[d.x,d.y]),x=j.useCallback(K=>{if(!p.current)return;const G=K.clientX-p.current.startX,W=K.clientY-p.current.startY;!m.current&&Math.sqrt(G*G+W*W)>5&&(m.current=!0),m.current&&u(Q=>({...Q,x:p.current.origX+G,y:p.current.origY+W}))},[]),h=j.useCallback(()=>{p.current=null,m.current=!1},[]),f=j.useMemo(()=>Object.keys(a.startZones).map(Number).sort((K,G)=>K-G),[a]),[_,b]=j.useState(()=>{const K={};for(let G=0;G<n.teamCount;G++)K[G]=G;return K});j.useEffect(()=>{const K={};for(let G=0;G<n.teamCount;G++)K[G]=G;b(K)},[a.id,n.teamCount]);function v(K,G){b(W=>{const Q=Object.entries(W).find(([,le])=>le===G),ee={...W,[K]:G};return Q&&(ee[Number(Q[0])]=W[K]),ee})}const y=j.useMemo(()=>{const K=new Map;for(let G=0;G<n.teamCount;G++){const W=_[G]??G,Q=a.startZones[W];if(Q)for(const ee of Q){const le=`${ee.row},${ee.col}`,de=K.get(le)??[];de.push(G),K.set(le,de)}}return K},[a,n.teamCount,_]),w=j.useMemo(()=>{const K={};for(const G of r){const W=n.teams[G];K[W]||(K[W]=[]),K[W].push(G)}return K},[r,n.teams]),[T,D]=j.useState(r[0]),[k,C]=j.useState(""),A=j.useMemo(()=>{for(const K of r){const G=n.players[K];if(!G)return!1;const W=n.teams[K],Q=_[W]??W,ee=a.startZones[Q];if(!ee||!ee.some(de=>de.row===G.position.row&&de.col===G.position.col))return!1}return!0},[r,n.players,n.teams,_,a]);function S(K,G){t({type:"SET_SPAWN_POSITION",playerId:K,position:G})}function z(K,G){t({type:"SET_SPAWN_FACING",playerId:K,facing:G})}function M(){A&&t({type:"CONFIRM_SETUP"})}function E(K){return mc(n,K)}function L(K){var W;const G=(W=w[K])==null?void 0:W[0];return G?E(G):Mn[K%Mn.length][0]}const U=j.useMemo(()=>{const K=new Map;for(const G of r){const W=n.players[G];if(!W)continue;const Q=X.find(de=>de.id===W.unitId);if(!Q)continue;const ee=`${W.position.row},${W.position.col}`,le=K.get(ee)??[];le.push({pid:G,color:E(G),tokenId:Q.tokenId,name:Q.nameCn}),K.set(ee,le)}return K},[r,n.players]),{x:V,y:R,scale:O}=d,$=220,J=j.useMemo(()=>{const K={},le=Math.floor((window.innerHeight-56-60)/192);return r.forEach((de,ye)=>{const xn=Math.floor(ye/le),An=ye%le;K[de]={x:window.innerWidth-($+16)*(xn+1),y:56+An*192}}),K},[r]);return o.jsxs("div",{className:"ssm__screen",children:[o.jsxs("div",{className:"ssm__topbar",children:[o.jsx("button",{className:"ssm__back-btn",onClick:e,children:"← 返回"}),o.jsx("span",{className:"ssm__title",children:"选择出击位置"}),o.jsxs("span",{className:"ssm__map-name",children:[a.nameCn," (",i,"×",s,")"]}),o.jsx("span",{style:{flex:1}}),o.jsx("button",{className:`ssm__start-btn${A?"":" ssm__start-btn--disabled"}`,onClick:M,disabled:!A,title:A?"开始战斗":"所有玩家必须先选择出击位置",children:"战斗开始 ▶"})]}),o.jsx("div",{className:"ssm__viewport",ref:l,onMouseDown:g,onMouseMove:x,onMouseUp:h,onMouseLeave:h,children:o.jsx("div",{className:"ssm__map-inner",style:{transform:`translate(${V}px, ${R}px) scale(${O})`,transformOrigin:"top left",display:"grid",gridTemplateColumns:`repeat(${s}, ${ta}px)`,gridTemplateRows:`repeat(${i}, ${ta}px)`},children:a.cells.flatMap((K,G)=>K.map((W,Q)=>{const ee=ic(W),le=`${G},${Q}`,de=y.get(le)??[],ye=U.get(le)??[],xn=de.length>0,An=de.length>0?L(de[0]):"",Na=n.teams[T],Pt=xn&&de.includes(Na);let Wn="ssm__cell";xn&&(Wn+=" ssm__cell--zone"),Pt&&(Wn+=" ssm__cell--placeable"),ye.length>0&&(Wn+=" ssm__cell--selected");function ae(q){m.current||(q.stopPropagation(),Pt&&S(T,{row:G,col:Q}))}return o.jsxs("div",{className:Wn,style:{backgroundImage:`url("${ee}")`,...xn?{borderColor:An,boxShadow:ye.length>0?`inset 0 0 10px ${An}66, 0 0 6px ${An}44`:void 0}:{}},onClick:Pt?ae:void 0,children:[ye.length===1&&o.jsx("div",{className:"ssm__token",children:o.jsx("img",{src:`/assets/tokens/${ye[0].tokenId}`,alt:ye[0].name,style:{boxShadow:`0 0 6px ${ye[0].color}`},onError:q=>{q.target.style.opacity="0.3"}})}),ye.length>1&&o.jsx("div",{className:"ssm__token ssm__token--multi",children:ye.map(q=>o.jsx("img",{src:`/assets/tokens/${q.tokenId}`,alt:q.name,className:"ssm__token-img-sm",style:{boxShadow:`0 0 4px ${q.color}`},onError:Oe=>{Oe.target.style.opacity="0.3"}},q.pid))})]},le)}))})}),r.map((K,G)=>{var ae;const W=n.players[K],Q=X.find(q=>q.id===(W==null?void 0:W.unitId)),ee=E(K),le=k===K,de=T===K,ye=n.teams[K],xn=((ae=w[ye])==null?void 0:ae[0])===K,An=_[ye]??ye,Na=_[ye]??ye,Wn=(a.startZones[Na]??[]).some(q=>q.row===W.position.row&&q.col===W.position.col);return o.jsx(je,{id:`spawn-${K}`,title:`P${G+1} ${(Q==null?void 0:Q.nameCn)??"—"}`,initialPos:J[K]??{x:100,y:100},width:$,minHeight:60,zIndex:le?50:10+G,onFocus:()=>{C(K),D(K)},children:o.jsxs("div",{className:`ssm__player-card${de?" ssm__player-card--active":""}`,style:{borderTop:`2px solid ${ee}`},onClick:()=>D(K),children:[o.jsxs("div",{className:"ssm__player-label",style:{color:ee},children:["P",G+1," ",de?"◄ 放置中":""," ",Wn?"✓":""]}),xn&&o.jsx("div",{className:"ssm__zone-select",children:o.jsxs("label",{children:["出击区域:",o.jsx("select",{value:An,onChange:q=>v(ye,Number(q.target.value)),onClick:q=>q.stopPropagation(),children:f.slice(0,a.maxTeams).map(q=>o.jsxs("option",{value:q,children:["区域 ",q+1]},q))})]})}),o.jsx("div",{className:"ssm__unit-name",children:(Q==null?void 0:Q.nameCn)??"—"}),o.jsxs("div",{className:"ssm__pos-display",children:["格 (",W.position.row,", ",W.position.col,")"]}),o.jsx("div",{className:"ssm__facing-grid",children:$x.map(({facing:q,label:Oe,title:He})=>{const Ke=W.facing===q;return o.jsx("button",{className:`ssm__facing-btn${Ke?" ssm__facing-btn--active":""}`,style:Ke?{borderColor:ee,color:ee}:void 0,title:He,onClick:()=>z(K,q),children:Oe},q)})})]})},K)}),o.jsx("style",{children:Rx})]})}const Rx=`
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
`;function Lx({onStart:e,onOnlinePlay:n,onViewRules:t,onViewData:a,onLoadGame:r,onReplay:s,onMapEditor:i,onSettings:l}){return o.jsxs("div",{className:"hs-screen",children:[o.jsxs("div",{className:"hs-center",children:[o.jsx("h1",{className:"hs-title",children:"Embryo Machine"}),o.jsx("p",{className:"hs-subtitle",children:"战棋机甲对战游戏"}),o.jsx("div",{className:"hs-divider"}),o.jsx("button",{className:"hs-btn hs-btn--primary",onClick:e,children:"▶ 开始游戏"}),o.jsx("button",{className:"hs-btn hs-btn--online",onClick:n,children:"联机对战"}),o.jsx("button",{className:"hs-btn hs-btn--secondary",onClick:r,children:"📂 加载存档"}),o.jsx("button",{className:"hs-btn hs-btn--secondary",onClick:s,children:"🎬 回放录像"}),o.jsx("div",{className:"hs-divider hs-divider--sm"}),o.jsxs("div",{className:"hs-links",children:[o.jsx("button",{className:"hs-link-btn",onClick:l,children:"⚙ 设置"}),o.jsx("button",{className:"hs-link-btn",onClick:i,children:"🗺️ 地图编辑器"}),o.jsx("button",{className:"hs-link-btn",onClick:t,children:"📖 游戏规则"}),o.jsx("button",{className:"hs-link-btn",onClick:a,children:"📊 游戏资料"})]})]}),o.jsx("style",{children:Ox})]})}const Ox=`
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
`;function Kx({onBack:e,soundEnabled:n,onToggleSound:t,soundVolume:a,onVolumeChange:r,exposureMode:s,onToggleExposure:i,autoFill:l,onToggleAutoFill:d,onCacheAssets:u}){return o.jsxs("div",{className:"set-screen",children:[o.jsxs("div",{className:"set-center",children:[o.jsxs("div",{className:"set-header",children:[o.jsx("button",{className:"set-back",onClick:e,children:"← 返回"}),o.jsx("h1",{className:"set-title",children:"设置"})]}),o.jsx("div",{className:"set-divider"}),o.jsxs("div",{className:"set-section",children:[o.jsx("h2",{className:"set-section__title",children:"音效设置"}),o.jsxs("label",{className:"set-toggle",onClick:t,children:[o.jsx("span",{className:`set-toggle__switch${n?" set-toggle__switch--on":""}`,children:o.jsx("span",{className:"set-toggle__knob"})}),o.jsx("span",{className:"set-toggle__label",children:"音效"}),o.jsx("span",{className:"set-toggle__hint",children:n?"已开启":"关闭"})]}),n&&o.jsxs("div",{className:"set-slider-row",children:[o.jsx("span",{className:"set-slider-row__label",children:"音量"}),o.jsx("input",{className:"set-slider",type:"range",min:0,max:100,value:Math.round(a*100),onChange:p=>r(Number(p.target.value)/100)}),o.jsxs("span",{className:"set-slider-row__value",children:[Math.round(a*100),"%"]})]})]}),o.jsx("div",{className:"set-divider set-divider--sm"}),o.jsxs("div",{className:"set-section",children:[o.jsx("h2",{className:"set-section__title",children:"游戏设置"}),o.jsxs("label",{className:"set-toggle",onClick:i,children:[o.jsx("span",{className:`set-toggle__switch${s?" set-toggle__switch--on":""}`,children:o.jsx("span",{className:"set-toggle__knob"})}),o.jsx("span",{className:"set-toggle__label",children:"暴露模式"}),o.jsx("span",{className:"set-toggle__hint",children:s?"已开启：所有隐藏卡牌将显示正面":"关闭"})]}),o.jsxs("label",{className:"set-toggle",onClick:d,children:[o.jsx("span",{className:`set-toggle__switch${l?" set-toggle__switch--on":""}`,children:o.jsx("span",{className:"set-toggle__knob"})}),o.jsx("span",{className:"set-toggle__label",children:"自动补位"}),o.jsx("span",{className:"set-toggle__hint",children:l?"已开启：空位自动随机选机由AI控制":"关闭"})]})]}),o.jsx("div",{className:"set-divider set-divider--sm"}),o.jsxs("div",{className:"set-section",children:[o.jsx("h2",{className:"set-section__title",children:"资源管理"}),o.jsx("button",{className:"set-btn set-btn--secondary",onClick:u,children:"缓存全部资源"}),o.jsx("p",{className:"set-hint",children:"一次性加载所有卡牌、地形等图片资源"})]})]}),o.jsx("style",{children:Jx})]})}const Jx=`
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
`;function Bx({phase:e,loaded:n,total:t,onConfirm:a,onSkip:r}){const s=t>0?Math.round(n/t*100):0,i=n>=t&&t>0;return o.jsxs("div",{className:"apd-overlay",children:[o.jsxs("div",{className:"apd-box",children:[e==="asking"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"apd-icon",children:"⚠"}),o.jsx("h2",{className:"apd-title",children:"资源未完全缓存"}),o.jsxs("p",{className:"apd-body",children:["检测到游戏图像资源（卡牌、地形、地图等）尚未完全缓存。",o.jsx("br",{}),"首次加载游戏时可能出现图片闪烁或延迟。"]}),o.jsxs("p",{className:"apd-body apd-body--sub",children:["是否现在一次性加载全部资源？",o.jsx("br",{}),o.jsxs("span",{className:"apd-hint",children:["共约 ",t," 张图片，需要较短等待时间。"]})]}),o.jsxs("div",{className:"apd-actions",children:[o.jsx("button",{className:"apd-btn apd-btn--primary",onClick:a,children:"是，立即加载"}),o.jsx("button",{className:"apd-btn apd-btn--secondary",onClick:r,children:"否，边玩边加载"})]})]}),e==="loading"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"apd-icon",children:i?"✓":"↓"}),o.jsx("h2",{className:"apd-title",children:i?"加载完成":"正在加载资源…"}),o.jsx("div",{className:"apd-bar-track",children:o.jsx("div",{className:"apd-bar-fill",style:{width:`${s}%`}})}),o.jsxs("p",{className:"apd-progress-text",children:[n," / ",t,"  (",s,"%)"]}),i&&o.jsx("p",{className:"apd-body apd-body--sub",children:"资源已全部缓存，正在进入游戏…"})]})]}),o.jsx("style",{children:Fx})]})}const Fx=`
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
`,Gx={"72ea91e355f9729a4f906f4a5981ccb94deb6c3a1eb4c9a4f255cbc86ac068a5":"/assets/cards/ag/ag-7-front.jpg",de64d1812f33cab1363e0191b2e1fe10766940cf72c1ae602a1537d6d59dee87:"/assets/ui/card-back.jpg",ca3a08c40eed141b502fe1a227ec29253a864fba0fda52930a7e55d1910a6698:"/assets/cards/ag/ag-3-front.jpg","00fec5279b30da9801db7c84419764909d349e1c210543de132af209cd3f0abd":"/assets/cards/ag/ag-4-front.jpg","608720fd8dcc5e7fe60d00f88b206e99c0688cfc20ef38f4eea05359b2ec0861":"/assets/cards/ag/ag-5-front.jpg",b0389d207312bbef32c2910744518f6f30c73796f27e573cfaec51c355862a97:"/assets/cards/ag/ag-6-front.jpg","29fa020388f199454a71e6673a19d76c4aafc4e8e8f34af0a9eeafe41c172391":"/assets/cards/ag/ag-8-front.jpg",c25abc7656b2d1eb27be27d09fecde25fd22427409e5afc79caf0ee09a8ff4f0:"/assets/cards/ag/ag-11-front.jpg","31e6d6800110b0ebfe8793074ba169f13b6fa02ea67f7e77739a4bf003670ba1":"/assets/cards/ag/ag-18-front.jpg","9762039c262e506e6bddc0449ed1ddc0449d1c6234afba1327ebfdb81a388e54":"/assets/cards/ag/ag-12-front.jpg",aa1286d4f7814991279a7aac4a75c0b194b8e7f9d6510fb8e63362939d04ec1e:"/assets/cards/ag/ag-14-front.jpg",dfe234f8d5372742a6ed4ab9f521f1ad9c693a228003aad19750c34aa7d1d49b:"/assets/cards/ag/ag-21-front.jpg","12e25c69082cbfe495f5dc49006c7c5aebc1f73574c59c39ffc5ed5b8b2fbc6d":"/assets/cards/ag/ag-17-front.jpg","9ba8361aa29742693bc83360c55e367632471dfea59493136210cfd09fd1aa48":"/assets/cards/ag/ag-19-front.jpg","67a686db8c4db82340e640db02b289fb998f14b79ede162eaffb1d2f5488a3a4":"/assets/cards/ag/ag-20-front.jpg",eb56b8c9f9b270690d535f55ac55c846dae5537649cec7021639211ff7f6cc22:"/assets/cards/ag_plus/ag_plus-2-front.jpg",e4c12ee3ba0ef3bd8c2ee9b1bb41e74c404f09b62dba8cb2e35faa2e520895e5:"/assets/cards/ag_plus/ag_plus-3-front.jpg","8f2248399528f6a051509d01cc0c78398afd381b7ad8f9915ab6381297026282":"/assets/cards/ag_plus/ag_plus-4-front.jpg",ebac68b5f2d7cf81a64094a12da6386a77e2434776de373d72ed8be4ba13159c:"/assets/cards/ag_plus/ag_plus-5-front.jpg","35999dd2727c1847d4a12d8061029cf3555bdbb7452b03c3978443401ac1022c":"/assets/cards/ar/ar-1-front.jpg","2f4a7328aaa21e26023208758042e122b483ca242c1b95ee4c64952eb7bb1dc3":"/assets/cards/ar/ar-2-front.jpg",c414ed84946840c69b6bdc4393af27f50d70a81b56a8c1849d1bfdaaa27531c1:"/assets/cards/ar/ar-4-front.jpg","9eca454c2c4f5cdb16902adfa101484f2257d1a9fe6c7985d3aaba990982c725":"/assets/cards/ar/ar-5-front.jpg",dc0d77a5ec25f65aa1ab091a1ede028f7fb1f7ebfbea4945b907adef2ece4281:"/assets/cards/ar/ar-13-front.jpg","6fbefeb90155b45f8872740038dfa38116530750caa1e623a99bab29b5f40a21":"/assets/cards/ar/ar-14-front.jpg","33a35f67e85d189889a7e8fa66ff1719a0d2680027105d1075f802d94d772bb4":"/assets/cards/ar/ar-8-front.jpg","6e7e1e6dde63265f8df8809db768b684e794f4331f9c3d7f4185a1dc612c0701":"/assets/cards/ar/ar-9-front.jpg","2f73e47fe817e7ae747aee252cc07cc1d556c8bd1b2acdf54f9a678f1ff51e02":"/assets/cards/ar/ar-12-front.jpg",aecf39488eb7018c47ea85aa4073aad5f196b9440e2c9248ed960d91e6696f22:"/assets/cards/ar/ar-15-front.jpg",cf41932a7f074826ffbd6c2e14e3bb173d95e38982bac18c2bf04773923903dd:"/assets/cards/ar/ar-16-front.jpg",cfe5a7626bb3fb179d3d056519cf477fa9bd6db3e441a7d7b3204eb4f8e5c2cb:"/assets/cards/ar/ar-17-front.jpg",a26a8dd85af73fe69b123ac4e0beae7cac68442afe22c8d44bf0312a9081381d:"/assets/cards/ar/ar-18-front.jpg","6b6d4acdc02336939dff11c9c962d9f4fe1246ee51003dfc1a70569ebd740664":"/assets/cards/ar/ar-19-front.jpg","2d5acd9b8353db95858fc7dbdcae061bda7df49032e5aea255431ad33aca98d0":"/assets/cards/ar/ar-20-front.jpg",a2d445e888ff59aa58f2ad514a9a031b486a3d56621fa7ddb5f930a045a513b2:"/assets/cards/ar_plus/ar_plus-1-front.jpg",fd85ee9cb1b56cfc5f7e5284a4cf1c67f406b29a068253f7164ea628c1e5c43a:"/assets/cards/ar_plus/ar_plus-4-front.jpg","48cbd3a065ccfa5cbcba4f0247cb0fcf166291740d54ca162580765e5d5c1d4e":"/assets/cards/ar_plus/ar_plus-3-front.jpg",f395a843fb92ff32392d84d9c8dde21b95bf3bf41b8eb787d5d8480878952bcb:"/assets/cards/bg/bg-4-front.jpg","193f6b1b0a647be282bb1b7d5013924039743a46a48383f64d5cb726859f25aa":"/assets/cards/bg/bg-14-front.jpg","0e54f575524cacb092b31f8983a537c18487fdf7405caa924653a39e4bc544db":"/assets/cards/bg/bg-16-front.jpg","2fce52c5e8cde4295b30baed6b7de68e6a2839f5e086d7e1e530ea996ffe0435":"/assets/cards/bg/bg-12-front.jpg",a391b8c4020883f8d080a6e6e83864670158aef7be5eab6d7b348ef6e6b93d10:"/assets/cards/bg/bg-15-front.jpg",fd79d96009f9b66e23c02f25edfcce4a13fdf61c3fe8188269cf83916766df31:"/assets/cards/bg/bg-18-front.jpg",ad7a449d1edd5300a57a8bae2cab2a607d5422ea37c397b7c8c69df5b3096502:"/assets/cards/bg/bg-13-front.jpg","8571242343bc19329436ac669a422140b9dfbc7544cf1de2ec298eef9b3a9257":"/assets/cards/bg/bg-17-front.jpg","64ba521997fc2f8ddbb544dd45bcc58e3145822f4927860039ec7a7921d01757":"/assets/cards/bg/bg-19-front.jpg",ab0196704ba0510bc85e9e58e6bb8323c43cddc2e8f986e6ad79a11852e2c421:"/assets/cards/bg/bg-20-front.jpg","8514e5d83cf922f035f5600a0e96d2bf3ae85d064807759af4f08155ffbe6145":"/assets/cards/bg/bg-21-front.jpg",f495acab04c9e7b539619082b1c7eab387e329794a866f80f4d49f3b8f1f693e:"/assets/cards/bg/bg-23-front.jpg",d4e423814ead1fd2c384492fac1be79e014d771712d0db3c78d93b4e2daf6699:"/assets/cards/bg_plus/bg_plus-1-front.jpg","602d9c6187bb0bb67e3435b95461e1d0f6aa432b5408d2addfe77416d08b2862":"/assets/cards/bg_plus/bg_plus-3-front.jpg",e97efab0e571ea9441ecfcef69388ac5833e96b52f196073127b5930532f920d:"/assets/cards/bg_plus/bg_plus-4-front.jpg","9e27878685e0972914ec6db331732131c20f51b80aef11ca2ed7850338dc56a5":"/assets/cards/bg_plus/bg_plus-5-front.jpg","50793b3633188783f2e78b770a325549b99cc2b0cae8be0f837c1c1bd7958bcd":"/assets/cards/ho/ho-1-front.jpg","23be89f666a01394bded8d8b4e845a176efe96c1e33b40d9edacf15c715a3dd9":"/assets/cards/ho/ho-2-front.jpg",f9b7e9cd2182ade25b13d7355f2297ca1bedd4426b653e89a45aa14ce6221ff6:"/assets/cards/ho/ho-3-front.jpg","120ffbd79d44d8dce99f704baf79e62487e73935e18b8e18bec3fe352e603da0":"/assets/cards/ho/ho-4-front.jpg","926cccef6ed7a746b53a370664d9b1e60fb27d976c4707a0f34e390dcd7ef985":"/assets/cards/ho/ho-5-front.jpg","17b7289bdbdf1c8fc0ddf23c146d0b51e2c66e8e70a20545e64685e087f78496":"/assets/cards/ho/ho-6-front.jpg","38309819fe704c2f7e58cd5c35110ca71a78198b221595d966f711f4ee17d558":"/assets/cards/ho/ho-15-front.jpg","002453cf5ab95a93e69365838d45c421e90a106e3c0bbe20d038355a8495827e":"/assets/cards/ho/ho-8-front.jpg",da0d31d7f836a648f062ee69c549fe2b3806fcc729015bcff634ea427bc94c54:"/assets/cards/ho/ho-9-front.jpg","49d1feafa8f7a1608f6ea2c9205581b056cd4d3a352a903b065be7b613d73d93":"/assets/cards/ho/ho-10-front.jpg",e23e9d4556a4c1f84670f09e14f3abb1050f0effd6b004b190bb0d51c0567a16:"/assets/cards/ho/ho-12-front.jpg",ef5f963cdb85d776e30cc08f406812b628139e1c0762da6cdd76a995d526b132:"/assets/cards/ho/ho-14-front.jpg","76445d956a01a1a6759748880ff112510881dde7c531af86812ced9080f6027d":"/assets/cards/ho/ho-17-front.jpg","5dcb19c46fe4c87775c42969ee66a2e4edf407066eb7b6e9f75ae7f06c544237":"/assets/cards/ho_plus/ho_plus-1-front.jpg",d3608718aa56d2713c83f5d14a2957ae82680551c65c06caf10fa7aab623f2b4:"/assets/cards/ho_plus/ho_plus-2-front.jpg",c0138ea658ae0afcbfe06f7c46d1dfba00a459fd012b0c81aae9c63582923191:"/assets/cards/ho_plus/ho_plus-3-front.jpg","84f830f1410ddc1388ff00d0094af433f20688408ac72c20cfd5e90bf077a494":"/assets/cards/ho_plus/ho_plus-4-front.jpg","6d418c369626afc07e65702585463fa8d7e6dc9518dab01039c73a66907ed553":"/assets/cards/hy/hy-20-front.jpg","3e5c8c4b0dc1c5c6a2e65f80c779cda8035f41399837d032585b13c9a2e58d7b":"/assets/cards/hy/hy-7-front.jpg","9541ab0e2700ffb0df842826dd163204ef7832414a0bcaa1f54f7ac98fde834f":"/assets/cards/hy/hy-24-front.jpg",e8b1063f07dd998149120cc48ce4bb6d98a7bd93967160088eba9d96b710f421:"/assets/cards/hy/hy-8-front.jpg","4f64597b35d42ae5ff6c550c73830d48ef671f57d68ff01cc630e7b2ccaf43cd":"/assets/cards/hy/hy-10-front.jpg","91850bf85a43f889c8889936afdf4db90bde65dc9e65c1b5e0108a8932ac47a9":"/assets/cards/hy/hy-11-front.jpg","91c2ebb2087607ac70d7c081e0291cc298b78781e7e3faf2ec7fc86be248dfd4":"/assets/cards/hy/hy-13-front.jpg","640e4fcde89541cd02119f60f24deed7bad79a678cf1d99cce9e7ba73f71692e":"/assets/cards/hy/hy-14-front.jpg",b24622641e65a1b75e971a3e8c31a2bf0588ba84875b5bf7d03f27f0a63af9fc:"/assets/cards/hy/hy-19-front.jpg","1576e9779c12faed9bad26006fa8a12e7be0756ed264ea3b1deb05127d239b3c":"/assets/cards/hy/hy-21-front.jpg","3674a92a567de26b6304f6aebb9823606e1f72ce9e925d7488152e2f084ec86f":"/assets/cards/hy/hy-22-front.jpg","794136e3f4a27259a85a053cf7c7adc772875f6d5e042bb0eb4aa48d4b46e434":"/assets/cards/hy/hy-23-front.jpg",d17b8a6c61b023f8b09f9ffb1748e0de2eb751a638f2d376983ae14d0bd8564d:"/assets/cards/hy_plus/hy_plus-2-front.jpg",c8310aa2df0cdec2acf8913edbd16d60aaa22deab68867b14f70cd4bba59e4f6:"/assets/cards/hy_plus/hy_plus-5-front.jpg",a8188b32f23968b98e88cb685d8af599d5a2f6570f43f4330b189dd9ce669672:"/assets/cards/hy_plus/hy_plus-8-front.jpg","237ae5dbe95f95a334369a3f6d2c4f628bc2ef4c4cfda81f637169448b0b2a78":"/assets/cards/hy_plus/hy_plus-7-front.jpg",d7c9c03a695431a59b976da9ef1433b1969e905ce1b0f7165960910d8dcda7e7:"/assets/cards/lg/lg-1-front.jpg","54e91ee7019cf98518ceff5d5eb3ae24a2c490991d9ef700107919c1d7216133":"/assets/cards/lg/lg-2-front.jpg","5109d921c42001dd49deb4453c84680c485dbd03acbbf184db44c52e20df0947":"/assets/cards/lg/lg-3-front.jpg","238151d3ee802a63f7cfab27eba567809e0f434dd0ae7ab5cbfd67e17aab320c":"/assets/cards/lg/lg-4-front.jpg",cbd722c55b5f4530d1f909ee512accfb976e160669d861b03ba8a9f1ac812088:"/assets/cards/lg/lg-10-front.jpg","51cb5bbee96271ee7948d123f441fd961511c5664f85d880339ac81e76d297ce":"/assets/cards/lg/lg-12-front.jpg","5a50ab7bd0284e099caf5991bcaebf3fd5e2f6f852a41e8164548250372e13ee":"/assets/cards/lg/lg-13-front.jpg","8b83c2b2d3abe743003e29e8ace677d3669fee9012700fbd9405fb2581c2f1c1":"/assets/cards/lg/lg-14-front.jpg",e3f20637a74add18073f9b306a299693bccd9ff1318dd1cb35bb5b237ae03b3d:"/assets/cards/lg/lg-15-front.jpg","36b7cec7580d4de56edb5692bc83f9c3c08e4a94c7a75d3dca6b9aab5c70e886":"/assets/cards/lg/lg-21-front.jpg","307424a85866d9131ebaf92eee6aa49d75c7fe86937ebb0ddb7651431de5fc2d":"/assets/cards/lg/lg-18-front.jpg","653861f0980a12fb43cbfebda4071b3ca37e094bdc80c8698d0e183d90a83ed2":"/assets/cards/lg/lg-20-front.jpg","3f3a90dac9d0a565694982c55380f9b5fb3b914147aacd6b05c37a9ca8fd19d2":"/assets/cards/lg/lg-23-front.jpg","2b4298eafb47c327a290152fbccd471da28923c5769d2a645c574c16be6a039d":"/assets/cards/lg_plus/lg_plus-7-front.jpg","3074578f141dd1726916bf8e3e4532b4b82c72b7e2d30cbd3205b91609bbfbf2":"/assets/cards/lg_plus/lg_plus-3-front.jpg",bdd1e79a3a0f11fb4aeb486ae199ac2a971f957f90ce61439360e64f5c1ffc22:"/assets/cards/lg_plus/lg_plus-6-front.jpg",c3b9c862179da114428f8db2318e87e2770ad861b7bda0046c875ddaf884683c:"/assets/cards/lg_plus/lg_plus-8-front.jpg","3b6e2c61dd5d3c61e285d5c5f1bae42d08319f1ccd8ab950dabc7012fcae2ec8":"/assets/cards/lo/lo-12-front.jpg",ec8a31e551ec7a31602e8f6dfb7266c4dd377717704a34ee1647c288e9e64013:"/assets/cards/lo/lo-10-front.jpg","58a7b4c3f1fb01ee43a7269374ed04e71909609a51d488407b9754efcd055604":"/assets/cards/lo/lo-7-front.jpg",fdffe9ed90791948ae05fe76630b10ceca9d7bd442c41e2da584527d72ad98de:"/assets/cards/lo/lo-8-front.jpg",d4574f1615eb69b5470822b40ffd0d27da741f7f3e179c671c54290ca51afc0c:"/assets/cards/lo/lo-9-front.jpg",ab0f524c4935a2945d72db20beb4776d764df5de49672ed46e91eadce168e065:"/assets/cards/lo/lo-15-front.jpg","32297c12e7745ecb9bac5727434e7fff2784c25fe2b744d73f36218acc43b0b2":"/assets/cards/lo/lo-13-front.jpg",d9ef4060c364dea670bd525f0aad18687149d8797f5a9946c66b8f14681cff0f:"/assets/cards/lo/lo-14-front.jpg","7cabdc1509214622489311c85cc0cc2857daac93cb4fc31f515fb5fb638f6098":"/assets/cards/lo/lo-16-front.jpg",d2fc0f3677e4dd64bb2bf580951612085ce1f5a36d84742f94101ba0aeb0bebd:"/assets/cards/lo/lo-17-front.jpg","492722fef12f5835e2e0917c18b55b226be409f5f60973130cfda3daaba2a963":"/assets/cards/lo/lo-18-front.jpg","03b051e124ef4ec1c76498960f9a5317bdf1bd3f91973329062ce1b1a905c796":"/assets/cards/lo/lo-19-front.jpg",c9fdad2b74bc9c08941a4348c934616abadbc335d218914419e7972dc54aaa27:"/assets/cards/lo/lo-20-front.jpg","2753d376c59037359099d989ebc9ecdc6f35b0bcc1966a526919a62e9492ba5d":"/assets/cards/lo_plus/lo_plus-1-front.jpg","78e76504372580ad38ecea1cf6ca8b6eef7f24beb4bb173023d493a2900c9213":"/assets/cards/lo_plus/lo_plus-2-front.jpg",cfd41bad24efba992152437f01605cfa070b96c24171d158eb6b38c6e062b997:"/assets/cards/lo_plus/lo_plus-3-front.jpg","56b654c93edf5b33422b575efd3ece648df66bb3b245576bcb100db2cf463b90":"/assets/cards/lo_plus/lo_plus-4-front.jpg","83e4cf361d79bf56cab85b3165d8a502c3b6369a7d91d9d74008e7446ecee5aa":"/assets/cards/tr/tr-1-front.jpg",fac9e08ed1dd2007eff99f64f58456b8f28c887ea72caf3631798f19f586c2cf:"/assets/cards/tr/tr-2-front.jpg","49e88188dd73d2dc1889616077e7b3d3a01274be0936f3cf94b0ba13ffcdd3ec":"/assets/cards/tr/tr-3-front.jpg",f9ace908e376ccf677350bf8b04446db76d5b7810e1238eed78f9636917732d5:"/assets/cards/tr/tr-4-front.jpg",e176ed5572f8b0fec1afdf7338922f6287cb2bd7e8da531363f03afad38d2855:"/assets/cards/tr/tr-5-front.jpg",dcd6e5c81f720c301fdf8b8a9bdc7d1332f5d49d859cc3b7a888c4b47abb437c:"/assets/cards/tr/tr-8-front.jpg","7a3a4bc99a08007a8634615d14bb6e8701d8046b4b357e2e53a6816b1fa4b952":"/assets/cards/tr/tr-7-front.jpg","751ef0172ef4154fa9ada26cf0748253cbdb26e77ee5d7fbeb0cb448f0417815":"/assets/cards/tr/tr-9-front.jpg","637e9420cee8da61167a68a33b51a5955c1b96d79b8b104b70a8d721fcb76d2a":"/assets/cards/tr/tr-10-front.jpg","4096df60204fa108f6f86b2219c8a27d83e68a1ccb196df7df46de4392c2b41c":"/assets/cards/tr/tr-15-front.jpg",bf2f3bb722b82651f6eae93503ee371f2eb0aeb19a3c7048ee204c111f0f7eb4:"/assets/cards/tr/tr-13-front.jpg",e3e51452f907f7c993bd47093ca97798e5c685c2662bbf839e24c197bcdec634:"/assets/cards/tr/tr-17-front.jpg","188c6abac72e21173f1f0b02deb68d8204fe9d8773eea4bf01d633d170e226e4":"/assets/cards/tr/tr-19-front.jpg","9350f91bb06a35e92994e0129874a9c12e075ecde1d97595dc94424a3d445bdf":"/assets/cards/tr_plus/tr_plus-1-front.jpg","427ee044bae11fec56f65f194e7d6f8abcb7e904b199fc4a96c58ca93bfef239":"/assets/cards/tr_plus/tr_plus-3-front.jpg",e300e383916c326e28c6ced9e9705531a202a5daef21fdee6763ad2d11e3a2d8:"/assets/cards/tr_plus/tr_plus-5-front.jpg","7438c901962c7ce3370464463ea4f1e65b4d2a4ef220b5a4032115503fc32b0b":"/assets/cards/zb/zb-1-front.jpg","1c5ed46f16057ca9fa0f10685d323abe71b88b2a416eef661e520e9ff3a4fbcf":"/assets/cards/zb/zb-2-front.jpg","64fc21d85fcd6d3a3928ce9667186a0c8316e440396b6e6ebf162ed69ea6abeb":"/assets/cards/zb/zb-3-front.jpg","69f3d2ddd129e0a3b0a3245525786cf068b2e5eafc11897c9b83e4e208fc8270":"/assets/cards/zb/zb-4-front.jpg",a96dbaf805bf2dce31353b8d02732c389101196ac8220074dd161ad97ad3b61d:"/assets/cards/zb/zb-5-front.jpg",b15c50b1b10ce0e6ee1b76b5532ba9eed3b56cdf024ff27bc6d8c5195dcd76ff:"/assets/cards/zb/zb-15-front.jpg","04c9a1429211640a93676e76f7dfe02150d7e5cd921ee79222aa156800173a71":"/assets/cards/zb/zb-9-front.jpg",cf513f83dd7e6ac363f0aaa0a028c0527a164a283b340fb356b1f607b38a8a46:"/assets/cards/zb/zb-10-front.jpg","08a5474a86442dc9ddbfbebcf9994d7d5485108285168acaa865e44cc14d5462":"/assets/cards/zb/zb-12-front.jpg","732218f61fd334436d5359accff815df2d8c54adbeb7c402336e2f2b9f04b3cd":"/assets/cards/zb/zb-22-front.jpg",ce950419d660dcd87a9760439cf739ec7878df58f21a4af49a44cc4a2265c05b:"/assets/cards/zb/zb-17-front.jpg","7efd605546127d01ae40e1be52a64b45f4174bed74d1d9c8a15a6ba2d3129bc6":"/assets/cards/zb/zb-18-front.jpg","92c305b7877de46785ee7e5b4e5c92bf94c2e761047bb4d37d3fed4ec100d8d7":"/assets/cards/zb/zb-20-front.jpg","030fd7997dc5ccd629a0e184c0ac0ad1b33d1fff9366a4131c4a1d74dbe8a9c0":"/assets/cards/zb/zb-23-front.jpg","3b5c39538c0cf52273b845c15580993cc60e2a4a67f7c27b449243029108d538":"/assets/cards/zb_plus/zb_plus-6-front.jpg","4b42de4bbd91e229d41b666598cefd2a340285f228dc0395856b5b7a22b5381b":"/assets/cards/zb_plus/zb_plus-3-front.jpg","31cd007c783ba3389e6b0a7f3ce398515d65b3ab550aab70ebfcb3d86665ad52":"/assets/cards/zb_plus/zb_plus-4-front.jpg","39a0f3d3578f021253fac1a4fb293accd68267719a9bd4707fda7419257ccfc1":"/assets/cards/zb_plus/zb_plus-5-front.jpg","2a75d8802f569be782f6ca9ef865988ecefd6f447442dd8933154a8e70dd2895":"/assets/cards/強化機雷/強化機雷-16-front.jpg","506eb3f1ac120bb2d1a61d693b9b8f00ef56b788c42a231b9203fdad0ad3aed5":"/assets/ui/card-back.jpg","2e25e08a0277638ffbe37080471ac50fe51ab4e24ea0d52a5af46b7980f76340":"/assets/cards/陸上機雷/陸上機雷-20-front.jpg","149f2bc4a9dce26a9250c94e4a9338f0edf8c90a415c999216c00440ea0a3667":"/assets/cards/ダミー/ダミー-20-front.jpg","444338c10747b07f50d0f5baeb6e9e014141c55507d748ae8d5001fe1b3e5ee3":"/assets/maps/444338c10747b07f50d0f5baeb6e9e014141c55507d748ae8d5001fe1b3e5ee3.jpg","04c1b08a573b97d5296d712ef796a7d9c5e4ed3200d8a4ae268295628de18e55":"/assets/maps/04c1b08a573b97d5296d712ef796a7d9c5e4ed3200d8a4ae268295628de18e55.jpg","9e3fcbc86b5a5563c4bb5566031e7c1fd35fda1f32d981a242889b0c2561049c":"/assets/maps/9e3fcbc86b5a5563c4bb5566031e7c1fd35fda1f32d981a242889b0c2561049c.jpg","582cf873071464b2f3ca6232d0a20b36347ffa948125d0642b330b4d8dc9c478":"/assets/maps/582cf873071464b2f3ca6232d0a20b36347ffa948125d0642b330b4d8dc9c478.jpg","0f7fd469ef1f476fc05c15df2f949f575920a92751d52fc7135f2490eb035118":"/assets/maps/0f7fd469ef1f476fc05c15df2f949f575920a92751d52fc7135f2490eb035118.jpg","224304b43b96cc1dcfb865ed84556e7b06f4068c3a5fd8c21b342a8c53c36a72":"/assets/maps/224304b43b96cc1dcfb865ed84556e7b06f4068c3a5fd8c21b342a8c53c36a72.jpg","9429fd9c15d9a339f30f6cd8ad890af69a9570e0347267c2d6636091aec8266f":"/assets/maps/9429fd9c15d9a339f30f6cd8ad890af69a9570e0347267c2d6636091aec8266f.jpg","44f518c3e3df7c83027cf6ee5990dd411a6b828f9a6d5ed1717f0a352c1654e0":"/assets/maps/44f518c3e3df7c83027cf6ee5990dd411a6b828f9a6d5ed1717f0a352c1654e0.jpg",f0abd1d4ae4b2039ed4d1b54562a66a6c9fe9b718582f6946893f42ab522a53b:"/assets/maps/f0abd1d4ae4b2039ed4d1b54562a66a6c9fe9b718582f6946893f42ab522a53b.jpg","3f14f36d964a2093258d568ac4ce3691a767cd369f3ec5ec6679a610e9f6d9bb":"/assets/maps/3f14f36d964a2093258d568ac4ce3691a767cd369f3ec5ec6679a610e9f6d9bb.jpg",e450e91d172a2414c49fef4702f6799f98b794e6ee77a412e28f81bf374ed853:"/assets/maps/e450e91d172a2414c49fef4702f6799f98b794e6ee77a412e28f81bf374ed853.jpg"},Hx="embryo_preload_v1",Ux=["/assets/tiles/平地0.png","/assets/tiles/砂0.png","/assets/tiles/瓦礫0.png","/assets/tiles/瓦礫1.png","/assets/tiles/瓦礫2.png","/assets/tiles/瓦礫3.png","/assets/tiles/森0.png","/assets/tiles/森1.png","/assets/tiles/森2.png","/assets/tiles/森3.png","/assets/tiles/水0.png","/assets/tiles/水1.png","/assets/tiles/水2.png","/assets/tiles/高地1.png","/assets/tiles/高地2.png","/assets/tiles/高地3.png"],Wx=["/assets/tokens/AG-token.jpg","/assets/tokens/AR-token.jpg","/assets/tokens/BG-token.jpg","/assets/tokens/FO-token.jpg","/assets/tokens/HO-token.jpg","/assets/tokens/HY-token.jpg","/assets/tokens/LG-token.jpg","/assets/tokens/LO-token.jpg","/assets/tokens/TR-token.jpg","/assets/tokens/ZB-token.jpg"];function Af(){const e=new Set;for(const n of Object.values(ba))for(const t of n)e.add(`/assets/${t.frontImageId}`),e.add(`/assets/${t.backImageId}`);for(const n of Ux)e.add(n);for(const n of Object.values(Gx))n.startsWith("/assets/maps/")&&e.add(n);for(const n of Wx)e.add(n);return[...e]}function Zx(e){localStorage.setItem(Hx,JSON.stringify({total:e,ts:Date.now()}))}async function Yx(e,n){const t=Af(),a=t.length;let r=0;e(0,a);const s=l=>new Promise(d=>{if(n!=null&&n.aborted){d();return}const u=new Image;u.onload=u.onerror=()=>{r++,e(r,a),d()},u.src=l}),i=10;for(let l=0;l<t.length&&!(n!=null&&n.aborted);l+=i)await Promise.all(t.slice(l,l+i).map(s));n!=null&&n.aborted||Zx(a)}const ai=.4,ri=2.5,Jd=.12,Bd=5;function Xx(e=1){const[n,t]=j.useState({x:0,y:0,scale:e}),a=j.useRef(null),r=j.useRef({x:0,y:0}),s=j.useRef(!1),i=j.useRef(null),l=j.useRef({x:0,y:0,scale:e});j.useLayoutEffect(()=>{const x=i.current;if(!x)return;const h=x.querySelector(".game-board");if(!h)return;const f=x.clientWidth,_=x.clientHeight,b=h.offsetWidth,v=h.offsetHeight;if(!f||!_||!b||!v)return;const y=Math.min(f/b,_/v),w=Math.min(ri,Math.max(ai,y)),T=(f-b*w)/2,D=(_-v*w)/2,k={x:T,y:D,scale:w};l.current=k,t(k)},[]),j.useEffect(()=>{const x=i.current;if(!x)return;const h=f=>{f.preventDefault();const _=f.deltaY<0?Jd:-Jd;t(b=>({...b,scale:Math.min(ri,Math.max(ai,b.scale+_))}))};return x.addEventListener("wheel",h,{passive:!1}),()=>x.removeEventListener("wheel",h)},[]),j.useEffect(()=>{const x=i.current;if(!x)return;let h=0,f=0,_=0,b=!1,v={x:0,y:0};const y=(k,C)=>Math.sqrt((C.clientX-k.clientX)**2+(C.clientY-k.clientY)**2),w=k=>{k.touches.length===1?(h=k.touches[0].clientX,f=k.touches[0].clientY,v={x:h,y:f},b=!1):k.touches.length===2&&(k.preventDefault(),_=y(k.touches[0],k.touches[1]),h=(k.touches[0].clientX+k.touches[1].clientX)/2,f=(k.touches[0].clientY+k.touches[1].clientY)/2)},T=k=>{if(k.touches.length===1){const C=k.touches[0].clientX-h,A=k.touches[0].clientY-f;if(!b){const S=k.touches[0].clientX-v.x,z=k.touches[0].clientY-v.y;Math.sqrt(S**2+z**2)>Bd&&(b=!0)}b&&(k.preventDefault(),t(S=>({...S,x:S.x+C,y:S.y+A}))),h=k.touches[0].clientX,f=k.touches[0].clientY}else if(k.touches.length===2){k.preventDefault();const C=y(k.touches[0],k.touches[1]),A=(k.touches[0].clientX+k.touches[1].clientX)/2,S=(k.touches[0].clientY+k.touches[1].clientY)/2;if(_>0){const E=C/_;t(L=>{const U=Math.min(ri,Math.max(ai,L.scale*E));return{...L,scale:U}})}const z=A-h,M=S-f;t(E=>({...E,x:E.x+z,y:E.y+M})),_=C,h=A,f=S}},D=k=>{k.touches.length<2&&(_=0),k.touches.length===0&&(b=!1),k.touches.length===1&&(h=k.touches[0].clientX,f=k.touches[0].clientY)};return x.addEventListener("touchstart",w,{passive:!1}),x.addEventListener("touchmove",T,{passive:!1}),x.addEventListener("touchend",D),x.addEventListener("touchcancel",D),()=>{x.removeEventListener("touchstart",w),x.removeEventListener("touchmove",T),x.removeEventListener("touchend",D),x.removeEventListener("touchcancel",D)}},[]);const d=j.useCallback(x=>{x.button===0&&(a.current={x:x.clientX,y:x.clientY},r.current={x:x.clientX,y:x.clientY},s.current=!1)},[]),u=j.useCallback(x=>{if(!a.current)return;const h=x.clientX-a.current.x,f=x.clientY-a.current.y,_=Math.sqrt(h*h+f*f);if(!s.current&&_>Bd&&(s.current=!0),s.current){const b=x.clientX-r.current.x,v=x.clientY-r.current.y;t(y=>({...y,x:y.x+b,y:y.y+v}))}r.current={x:x.clientX,y:x.clientY}},[]),p=j.useCallback(x=>{a.current=null,s.current=!1},[]),m=j.useCallback(()=>{a.current=null,s.current=!1},[]),g=j.useCallback(()=>{t(l.current)},[]);return{transform:n,viewportRef:i,isPanning:s.current,handlers:{onMouseDown:d,onMouseMove:u,onMouseUp:p,onMouseLeave:m},resetView:g}}function Qx({x:e,y:n,value:t}){return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"fx-damage-number",style:{left:e,top:n},children:["-",t]}),o.jsx("style",{children:qx})]})}const qx=`
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
`;function ev({x:e,y:n,variant:t}){return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:`fx-impact fx-impact--${t}`,style:{left:e,top:n},children:[t==="melee"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"fx-impact__slash fx-impact__slash--1"}),o.jsx("div",{className:"fx-impact__slash fx-impact__slash--2"})]}),t==="ranged"&&o.jsx("div",{className:"fx-impact__beam"}),t==="charge"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"fx-impact__ring fx-impact__ring--1"}),o.jsx("div",{className:"fx-impact__ring fx-impact__ring--2"})]})]}),o.jsx("style",{children:nv})]})}const nv=`
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
`;function tv({x:e,y:n}){return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"fx-explosion",style:{left:e,top:n},children:[o.jsx("div",{className:"fx-explosion__flash"}),o.jsx("div",{className:"fx-explosion__ring fx-explosion__ring--1"}),o.jsx("div",{className:"fx-explosion__ring fx-explosion__ring--2"}),o.jsx("div",{className:"fx-explosion__ring fx-explosion__ring--3"}),Array.from({length:8}).map((t,a)=>o.jsx("div",{className:"fx-explosion__particle",style:{"--angle":`${a*45}deg`,"--delay":`${a*20}ms`,"--dist":`${30+Math.random()*20}px`}},a))]}),o.jsx("style",{children:av})]})}const av=`
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
`;function rv({defId:e,isAuxiliary:n,playerId:t}){const a=ne(e);if(!a)return null;const r=t==="player1"?"P1":"P2",s=t==="player1"?"var(--color-accent)":"#ff00c8";return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"fx-card-reveal",style:{position:"fixed",bottom:"80px",left:"50%",transform:"translateX(-50%)",zIndex:800,pointerEvents:"none"},children:[o.jsxs("div",{className:"fx-card-reveal__label",style:{color:s},children:[r," ",n?"抽到辅助卡":"抽牌"]}),o.jsx("div",{className:"fx-card-reveal__card",style:{borderColor:s},children:o.jsxs("div",{className:"fx-card-reveal__inner",children:[o.jsx("div",{className:"fx-card-reveal__back",children:o.jsx("img",{src:"/assets/ui/card-back.jpg",alt:"card back"})}),o.jsx("div",{className:"fx-card-reveal__front",children:o.jsx("img",{src:`/assets/${a.frontImageId}`,alt:a.nameCn})})]})}),o.jsxs("div",{className:"fx-card-reveal__name",style:{color:s},children:[a.nameCn,n&&o.jsx("span",{className:"fx-card-reveal__aux-badge",children:"辅助"})]})]}),o.jsx("style",{children:ov})]})}const ov=`
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
`;function sv({defId:e,isBomb:n,index:t,total:a}){const r=ne(e);if(!r)return null;const s=n?"fx-card-destroy--bomb":"";return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:`fx-card-destroy ${s}`,style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:810,pointerEvents:"none"},children:[o.jsxs("div",{className:"fx-card-destroy__card",children:[o.jsx("img",{src:`/assets/${r.frontImageId}`,alt:r.nameCn}),o.jsx("div",{className:"fx-card-destroy__flash"})]}),o.jsxs("div",{className:"fx-card-destroy__label",children:[r.nameCn," 被摧毁",n&&o.jsx("span",{className:"fx-card-destroy__bomb-badge",children:"💣 诱爆"})]}),o.jsxs("div",{className:"fx-card-destroy__counter",children:[t+1," / ",a]})]}),o.jsx("style",{children:iv})]})}const iv=`
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
`,sl=62,oi=Math.round(sl*(1042/756)),Fd=68,lv=6,Gd=140;function cv({p1Cards:e,p2Cards:n}){const[t,a]=j.useState("init"),[r,s]=j.useState(null);return j.useEffect(()=>{const i=document.querySelector(".unit-token-abs--p1"),l=document.querySelector(".unit-token-abs--p2"),d=i==null?void 0:i.getBoundingClientRect(),u=l==null?void 0:l.getBoundingClientRect();s({p1:d?{x:d.left+d.width/2,y:d.top+d.height/2}:{x:window.innerWidth*.3,y:window.innerHeight*.55},p2:u?{x:u.left+u.width/2,y:u.top+u.height/2}:{x:window.innerWidth*.7,y:window.innerHeight*.45}});const p=setTimeout(()=>a("fan"),50),m=setTimeout(()=>a("hold"),650),g=setTimeout(()=>a("cluster"),1650),x=setTimeout(()=>a("exit"),2e3);return()=>{[p,m,g,x].forEach(clearTimeout)}},[]),r?Er.createPortal(o.jsxs("div",{style:{position:"fixed",inset:0,zIndex:900,pointerEvents:"none"},children:[o.jsx(Hd,{cards:e,origin:r.p1,phase:t,color:"#00f0ff",label:"P1"}),o.jsx(Hd,{cards:n,origin:r.p2,phase:t,color:"#ff8844",label:"P2"})]}),document.body):null}function Hd({cards:e,origin:n,phase:t,color:a,label:r}){if(e.length===0)return null;const s=e.length,l=(s-1)*Fd>window.innerWidth*.7?Math.floor(window.innerWidth*.7/Math.max(s-1,1)):Fd,d=t==="hold"||t==="cluster";return o.jsxs("div",{style:{position:"fixed",left:n.x,top:n.y},children:[o.jsxs("div",{style:{position:"absolute",top:-(Gd+oi/2+28),left:0,transform:"translateX(-50%)",color:a,fontSize:"0.78rem",fontWeight:"bold",whiteSpace:"nowrap",textShadow:`0 0 10px ${a}, 1px 1px 3px #000`,opacity:d?1:0,transition:"opacity 250ms",letterSpacing:"0.06em"},children:[r,"  弃牌 ×",s]}),e.map((u,p)=>{const m=ne(u.defId),g=(s-1)/2,x=p-g,h=x*l,f=-Gd,_=x*lv;let b,v,y,w,T;switch(t){case"init":b=0,v=0,y=0,w=.15,T=0;break;case"fan":case"hold":b=h,v=f,y=_,w=1,T=1;break;case"cluster":b=0,v=f,y=0,w=.85,T=1;break;case"exit":default:b=0,v=f-520,y=0,w=.2,T=0;break}const D=p*28;let k;switch(t){case"fan":k=[`transform 480ms cubic-bezier(0.34,1.56,0.64,1) ${D}ms`,`opacity   300ms ease-out ${D}ms`].join(", ");break;case"hold":k="none";break;case"cluster":k="transform 320ms ease-in, opacity 150ms ease-in";break;case"exit":k="transform 450ms ease-in, opacity 380ms ease-in 60ms";break;default:k="none"}return o.jsx("div",{style:{position:"absolute",width:sl,height:oi,left:-sl/2,top:-oi/2,borderRadius:5,overflow:"hidden",border:`1px solid ${a}55`,boxShadow:`0 6px 20px rgba(0,0,0,0.7), 0 0 8px ${a}44`,zIndex:p,transform:`translate(${b}px, ${v}px) rotate(${y}deg) scale(${w})`,opacity:T,transition:k,willChange:"transform, opacity"},children:m?o.jsx("img",{src:`/assets/${m.frontImageId}`,alt:m.nameCn,style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1}):o.jsx("div",{style:{width:"100%",height:"100%",background:"#222"}})},u.instanceId)})]})}const il=62,si=Math.round(il*(1042/756)),Ud=52,dv=5,Wd=120;function uv({playerId:e,count:n}){const[t,a]=j.useState("init"),[r,s]=j.useState(null),[i,l]=j.useState(null);if(j.useEffect(()=>{const u=e==="player1"?".mp__deck--p1":".mp__deck--p2",p=document.querySelector(u),m=document.querySelector(e==="player1"?".unit-token-abs--p1":".unit-token-abs--p2"),g=p==null?void 0:p.getBoundingClientRect(),x=m==null?void 0:m.getBoundingClientRect();s(g?{x:g.left+g.width/2,y:g.top+g.height/2}:{x:window.innerWidth*.5,y:window.innerHeight*.85}),l(x?{x:x.left+x.width/2,y:x.top+x.height/2}:{x:e==="player1"?window.innerWidth*.3:window.innerWidth*.7,y:e==="player1"?window.innerHeight*.55:window.innerHeight*.45});const h=setTimeout(()=>a("spread"),50),f=setTimeout(()=>a("hold"),600),_=setTimeout(()=>a("cluster"),900),b=setTimeout(()=>a("fly"),1200);return()=>{[h,f,_,b].forEach(clearTimeout)}},[e]),!r||!i)return null;const d=e==="player1"?"#00f0ff":"#ff8844";return Er.createPortal(o.jsx("div",{style:{position:"fixed",inset:0,zIndex:900,pointerEvents:"none"},children:o.jsx(pv,{count:n,deckPos:r,mechaPos:i,phase:t,color:d,playerId:e})}),document.body)}function pv({count:e,deckPos:n,mechaPos:t,phase:a,color:r,playerId:s}){if(e===0)return null;const i=e,d=(i-1)*Ud>window.innerWidth*.6?Math.floor(window.innerWidth*.6/Math.max(i-1,1)):Ud,u=t.x-n.x,p=t.y-n.y,m=a==="hold"||a==="cluster",g=`${s==="player1"?"P1":"P2"} 抽牌 ×${i}`;return o.jsxs("div",{style:{position:"fixed",left:n.x,top:n.y},children:[o.jsx("div",{style:{position:"absolute",top:-(Wd+si/2+28),left:0,transform:"translateX(-50%)",color:r,fontSize:"0.78rem",fontWeight:"bold",whiteSpace:"nowrap",textShadow:`0 0 10px ${r}, 1px 1px 3px #000`,opacity:m?1:0,transition:"opacity 250ms",letterSpacing:"0.06em"},children:g}),Array.from({length:i},(x,h)=>{const f=(i-1)/2,_=h-f,b=_*d,v=-Wd,y=_*dv;let w,T,D,k,C;switch(a){case"init":w=0,T=0,D=0,k=.15,C=0;break;case"spread":case"hold":w=b,T=v,D=y,k=1,C=1;break;case"cluster":w=0,T=v,D=0,k=.85,C=1;break;case"fly":default:w=u,T=p,D=0,k=.2,C=0;break}const A=h*24;let S;switch(a){case"spread":S=[`transform 480ms cubic-bezier(0.34,1.56,0.64,1) ${A}ms`,`opacity   300ms ease-out ${A}ms`].join(", ");break;case"hold":S="none";break;case"cluster":S="transform 280ms ease-in, opacity 150ms ease-in";break;case"fly":S="transform 400ms cubic-bezier(0.4,0,1,1), opacity 300ms ease-in 80ms";break;default:S="none"}return o.jsx("div",{style:{position:"absolute",width:il,height:si,left:-il/2,top:-si/2,borderRadius:5,overflow:"hidden",border:`1px solid ${r}55`,boxShadow:`0 6px 20px rgba(0,0,0,0.7), 0 0 8px ${r}44`,zIndex:h,transform:`translate(${w}px, ${T}px) rotate(${D}deg) scale(${k})`,opacity:C,transition:S,willChange:"transform, opacity"},children:o.jsx("img",{src:"/assets/ui/card-back.jpg",alt:"card back",style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1})},h)})]})}const ll=56,cl=Math.round(ll*(1042/756));function fv({playerId:e}){const[n,t]=j.useState("face-up"),[a,r]=j.useState(null);if(j.useEffect(()=>{const i=e==="player1"?".mp__deck--p1":".mp__deck--p2",l=document.querySelector(i),d=l==null?void 0:l.getBoundingClientRect();r(d?{x:d.left+d.width/2,y:d.top+d.height/2}:{x:window.innerWidth*.5,y:window.innerHeight*.85});const u=setTimeout(()=>t("flip"),150),p=setTimeout(()=>t("face-down"),500),m=setTimeout(()=>t("fade"),650);return()=>{[u,p,m].forEach(clearTimeout)}},[e]),!a)return null;const s=e==="player1"?"#00f0ff":"#ff8844";return Er.createPortal(o.jsxs("div",{style:{position:"fixed",inset:0,zIndex:900,pointerEvents:"none"},children:[o.jsxs("div",{style:{position:"fixed",left:a.x,top:a.y},children:[[0,1,2].map(i=>o.jsx(mv,{index:i,phase:n,color:s},i)),o.jsx("div",{style:{position:"absolute",top:-(cl/2+32),left:0,transform:"translateX(-50%)",color:s,fontSize:"0.78rem",fontWeight:"bold",whiteSpace:"nowrap",textShadow:`0 0 10px ${s}, 1px 1px 3px #000`,letterSpacing:"0.06em",opacity:n==="face-up"||n==="flip"||n==="face-down"?1:0,transition:"opacity 200ms"},children:"♻️ 重洗牌组"})]}),o.jsx("style",{children:gv})]}),document.body)}function mv({index:e,phase:n,color:t}){const a=(e-1)*3,r=(e-1)*2;let s;switch(n){case"face-up":case"flip":case"face-down":s=1;break;case"fade":s=0;break}const i=n==="flip"?"reshuffle-card--flipping":n==="face-down"||n==="fade"?"reshuffle-card--flipped":"";return o.jsxs("div",{className:`reshuffle-card ${i}`,style:{position:"absolute",width:ll,height:cl,left:-ll/2+a,top:-cl/2+r,perspective:600,opacity:s,transition:"opacity 200ms ease-in",willChange:"opacity",zIndex:e},children:[o.jsx("div",{className:"reshuffle-card__face reshuffle-card__front",style:{background:t+"33",border:`2px solid ${t}88`,borderRadius:5,boxShadow:`0 0 12px ${t}55`}}),o.jsx("div",{className:"reshuffle-card__face reshuffle-card__back",style:{borderRadius:5,overflow:"hidden",border:"1px solid #ffffff44",boxShadow:"0 4px 12px rgba(0,0,0,0.6)"},children:o.jsx("img",{src:"/assets/ui/card-back.jpg",alt:"card back",style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1})})]})}const gv=`
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
`,ln=68;function hv(){const{currentEvent:e}=zr();return e?o.jsxs("div",{className:"effects-layer",style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:20},children:[e.type==="damage_number"&&o.jsx(Qx,{x:e.position.col*ln+ln/2,y:e.position.row*ln+ln/2,value:e.value},`dmg-${Date.now()}`),(e.type==="ranged_hit"||e.type==="melee_hit"||e.type==="charge_hit")&&o.jsx(ev,{x:e.targetPos.col*ln+ln/2,y:e.targetPos.row*ln+ln/2,variant:e.type==="ranged_hit"?"ranged":e.type==="melee_hit"?"melee":"charge"},`hit-${Date.now()}`),e.type==="mine_explode"&&o.jsx(tv,{x:e.position.col*ln+ln/2,y:e.position.row*ln+ln/2},`exp-${Date.now()}`),e.type==="card_draw"&&o.jsx(rv,{defId:e.defId,isAuxiliary:e.isAuxiliary,playerId:e.playerId},`draw-${e.card.instanceId}`),e.type==="card_destroy"&&o.jsx(sv,{defId:e.defId,isBomb:e.isBomb,index:e.index,total:e.total},`destroy-${e.card.instanceId}`),e.type==="cleanup_discard"&&o.jsx(cv,{p1Cards:e.p1Cards,p2Cards:e.p2Cards},`cleanup-${Date.now()}`),e.type==="batch_card_draw"&&o.jsx(uv,{playerId:e.playerId,count:e.count},`draw-${e.playerId}-${Date.now()}`),e.type==="deck_reshuffle"&&o.jsx(fv,{playerId:e.playerId},`reshuffle-${e.playerId}-${Date.now()}`)]}):null}function Ia(){const{state:e}=ke(),{map:n,mines:t}=e,{currentEvent:a,animatedPositions:r}=zr(),{transform:s,viewportRef:i,handlers:l,resetView:d}=Xx(.9),u=(a==null?void 0:a.type)==="screen_shake"?`board-transform board-shake board-shake--${a.intensity}`:"board-transform";return o.jsxs("div",{ref:i,className:"board-viewport",...l,style:{cursor:"grab"},children:[o.jsxs("div",{className:u,style:{transform:`translate(${s.x}px, ${s.y}px) scale(${s.scale})`,transformOrigin:"top left"},children:[o.jsx("div",{className:"game-board",style:{gridTemplateColumns:`repeat(${n.width}, var(--cell-size))`,gridTemplateRows:`repeat(${n.height}, var(--cell-size))`},children:n.cells.flatMap((p,m)=>p.map((g,x)=>o.jsx(xv,{cell:g,row:m,col:x,mines:t},`${m}-${x}`)))}),e.playerIds.map((p,m)=>{const g=e.players[p];return!g||g.isDefeated?null:o.jsx(vv,{player:g,side:`p${m+1}`,playerIndex:m,color:mc(e,p),animatedPos:r[p]??null},p)}),o.jsx(hv,{})]}),o.jsx("button",{className:"board-reset-btn",onClick:d,title:"重置视角",children:"⟳"})]})}function xv({cell:e,row:n,col:t,mines:a}){const r=ic(e),s=e.terrain==="highland"&&e.elevation>0?`+${e.elevation}`:null,i=a.filter(l=>l.position.row===n&&l.position.col===t);return o.jsxs("div",{className:`board-cell board-cell--${e.terrain}`,style:{backgroundImage:`url("${r}")`},"data-row":n,"data-col":t,children:[s&&o.jsx("span",{className:"board-cell__elev",children:s}),i.map((l,d)=>o.jsx(bv,{mine:l,offset:d*4},l.id))]})}function vv({player:e,side:n,playerIndex:t,color:a,animatedPos:r}){const s=X.find(m=>m.id===e.unitId);if(!s)return null;const i=(r==null?void 0:r.pos)??e.position,l=(r==null?void 0:r.facing)??e.facing,d={N:0,E:90,S:180,W:270}[l]??0,u=(()=>{switch(l){case"N":return{top:0,left:"50%",translate:"-50% 0"};case"S":return{bottom:0,left:"50%",translate:"-50% 0"};case"E":return{right:0,top:"50%",translate:"0 -50%"};case"W":return{left:0,top:"50%",translate:"0 -50%"};default:return{top:0,left:"50%",translate:"-50% 0"}}})(),p=`P${t+1}`;return o.jsxs("div",{className:`unit-token-abs unit-token-abs--${n}`,style:{left:`calc(${i.col} * var(--cell-size))`,top:`calc(${i.row} * var(--cell-size))`,width:"var(--cell-size)",height:"var(--cell-size)","--token-color":a},children:[o.jsx("div",{className:"unit-token-abs__label",style:{borderColor:a,backgroundColor:a+"33"},title:`${p} ${s.nameCn}`,children:p}),o.jsx("span",{className:"unit-token-abs__facing-arrow",style:{...u,transform:`rotate(${d}deg)`,color:a},title:`机头朝向：${e.facing}`,children:"▲"})]})}function bv({mine:e,offset:n}){const t=e.ownerId==="player1";return o.jsx("div",{className:`mine-token mine-token--${t?"p1":"p2"}`,style:{transform:`translate(${n}px, ${n}px)`},title:`机雷 (伤害 ${e.damage})`,children:o.jsx("span",{className:"mine-token__icon",children:"💣"})})}const yv=250,_v=480,Iv=2e3,Qo=252,bo=Math.round(Qo*(1042/756)),Ot=12;function $t(){const[e,n]=j.useState(null),t=j.useRef(null),a=j.useRef(null),r=j.useRef(null),s=j.useRef({x:0,y:0}),i=j.useRef(!1),l=()=>{t.current&&(clearTimeout(t.current),t.current=null),a.current&&(clearTimeout(a.current),a.current=null),r.current&&(clearTimeout(r.current),r.current=null)},d=j.useCallback(()=>{l(),n(null)},[]),u=j.useCallback(p=>({onMouseEnter:m=>{s.current={x:m.clientX,y:m.clientY},l(),t.current=setTimeout(()=>{n({src:p,x:s.current.x,y:s.current.y})},yv)},onMouseMove:m=>{s.current={x:m.clientX,y:m.clientY},n(g=>g&&{...g,x:m.clientX,y:m.clientY})},onMouseLeave:()=>d(),onTouchStart:m=>{const g=m.touches[0];i.current=!1,l(),a.current=setTimeout(()=>{i.current||(n({src:p,x:g.clientX,y:g.clientY}),r.current=setTimeout(()=>n(null),Iv))},_v)},onTouchMove:()=>{i.current=!0,d()},onTouchEnd:()=>{l()}}),[d]);return{zoom:e,hide:d,getZoomHandlers:u}}function kv(e,n){const t=window.innerWidth,a=window.innerHeight;let r=e+18;r+Qo+Ot>t&&(r=e-Qo-18);let s=n-bo/2;return s<Ot&&(s=Ot),s+bo>a-Ot&&(s=a-bo-Ot),{left:Math.max(Ot,r),top:s}}function Vt({zoom:e}){if(!e)return null;const{left:n,top:t}=kv(e.x,e.y);return Er.createPortal(o.jsxs("div",{style:{position:"fixed",left:n,top:t,width:Qo,height:bo,zIndex:99999,pointerEvents:"none",borderRadius:8,overflow:"hidden",boxShadow:"0 12px 40px rgba(0,0,0,0.75), 0 0 0 2px rgba(255,255,255,0.15)",background:"#111",animation:"card-zoom-in 0.12s ease-out both"},children:[o.jsx("img",{src:e.src,alt:"",style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1}),o.jsx("style",{children:jv})]}),document.body)}const jv=`
@keyframes card-zoom-in {
  from { opacity: 0; transform: scale(0.88); }
  to   { opacity: 1; transform: scale(1); }
}
`;function dl(e){return`P${e.replace("player","")}`}function wv(e,n){const t=ba[n]??[];return[...e].sort((a,r)=>{const s=t.findIndex(l=>l.id===a.defId),i=t.findIndex(l=>l.id===r.defId);return s-i})}function Sv(e,n,t,a,r,s){function i(x){if(!x)return null;const h=[...e.hand,...e.auxiliary].find(f=>f.instanceId===x);return h?r(h.defId)??null:null}const l=i(t),d=i(a),u=jn(e,r,"movement"),p=e.position,m=[];let g=[p];if(l){if(l.actionType==="movement"){const x=(l.movementValue??0)+(u.wheel?2:0);if(x>0){const h=ys(s,p,x,[n],u,e.facing);g=h.map(f=>f.pos),m.push(...h.map(f=>({pos:f.pos,cls:"preview-move-s1"})))}}else if(l.actionType==="ranged"){const x=l.rangeMin??1,h=l.rangeMax??6;for(let f=0;f<s.height;f++)for(let _=0;_<s.width;_++)Ne(p,{row:f,col:_})>=x&&Ne(p,{row:f,col:_})<=h&&m.push({pos:{row:f,col:_},cls:"preview-atk-s1"})}else if(l.actionType==="melee"||l.actionType==="charge")for(const[x,h]of[[-1,0],[1,0],[0,-1],[0,1]]){const f=p.row+x,_=p.col+h;f>=0&&f<s.height&&_>=0&&_<s.width&&m.push({pos:{row:f,col:_},cls:"preview-atk-s1"})}}if(d){const x=new Map,h=f=>`${f.row},${f.col}`;if(d.actionType==="movement"){const f=(d.movementValue??0)+(u.wheel?2:0);if(f>0){for(const _ of g)Cf(s,_,f,[n],u).forEach(b=>x.set(h(b.pos),b.pos));x.forEach(_=>m.push({pos:_,cls:"preview-move-s2"}))}}else if(d.actionType==="ranged"){const f=d.rangeMin??1,_=d.rangeMax??6;for(const b of g)for(let v=0;v<s.height;v++)for(let y=0;y<s.width;y++){const w=Ne(b,{row:v,col:y});w>=f&&w<=_&&x.set(h({row:v,col:y}),{row:v,col:y})}x.forEach(b=>m.push({pos:b,cls:"preview-atk-s2"}))}else if(d.actionType==="melee"||d.actionType==="charge"){for(const f of g)for(const[_,b]of[[-1,0],[1,0],[0,-1],[0,1]]){const v=f.row+_,y=f.col+b;v>=0&&v<s.height&&y>=0&&y<s.width&&x.set(h({row:v,col:y}),{row:v,col:y})}x.forEach(f=>m.push({pos:f,cls:"preview-atk-s2"}))}}return m}const Cv=["board-cell--preview-move-s1","board-cell--preview-move-s2","board-cell--preview-atk-s1","board-cell--preview-atk-s2"];function Zd(){document.querySelectorAll(".board-cell").forEach(e=>Cv.forEach(n=>e.classList.remove(n)))}const Nv=[{id:"hand",label:"手牌",icon:"🃏"},{id:"auxiliary",label:"辅助区",icon:"⚙️"},{id:"discard",label:"弃牌区",icon:"♻️"},{id:"destroyed",label:"已破坏",icon:"💀"}];function qo(){const{state:e,dispatch:n,aiConfig:t}=ke(),{isAnimating:a}=zr(),r=()=>n({type:"ADVANCE_PLOT_STEP"});if(j.useEffect(()=>{if(e.phase!=="plotting"||a)return;const i=e.plottingStep;if(!i||!i.startsWith("transition_to_"))return;const l=i.replace("transition_to_","");if(!ze(t,l))return;const d=setTimeout(r,400);return()=>clearTimeout(d)},[e.plottingStep,e.phase,a,t]),e.phase!=="plotting"||a)return null;const s=e.plottingStep;if(s&&s.startsWith("transition_to_")){const i=s.replace("transition_to_","");return ze(t,i)?null:o.jsx(Ev,{onContinue:r,playerLabel:dl(i),hint:"请确认对方不在旁后开始布局"})}return null}function aa(){const{state:e,dispatch:n,getCard:t,aiConfig:a}=ke(),{plottingStep:r}=e;if(e.phase!=="plotting"||r==="complete"||r===null||r.startsWith("transition_to_"))return null;const s=r,i=ze(a,s),l=Ar(a,s);return o.jsx(Mv,{activePlottingPlayerId:s,getCard:t,isAI:i,aiDifficulty:l,onConfirm:(d,u)=>{n({type:"PLOT_CARD",playerId:s,seg:1,instanceId:d}),n({type:"PLOT_CARD",playerId:s,seg:2,instanceId:u}),n({type:"CONFIRM_PLOT",playerId:s})}},s)}function Mv({activePlottingPlayerId:e,getCard:n,onConfirm:t,isAI:a=!1,aiDifficulty:r="hard"}){const{state:s,dispatch:i,exposureMode:l}=ke(),[d,u]=j.useState(null),[p,m]=j.useState(null),[g,x]=j.useState("hand"),[h,f]=j.useState(e),_=h===e||l,b=s.players[h],v=s.players[e],y=M=>mc(s,M),w=y(e),T=(()=>{const M=s.playerIds.filter(V=>V!==e&&s.teams[V]!==s.teams[e]&&!s.players[V].isDefeated);if(M.length===0)return null;const E=v.position;let L=M[0],U=Math.abs(s.players[M[0]].position.row-E.row)+Math.abs(s.players[M[0]].position.col-E.col);for(let V=1;V<M.length;V++){const R=Math.abs(s.players[M[V]].position.row-E.row)+Math.abs(s.players[M[V]].position.col-E.col);R<U&&(L=M[V],U=R)}return s.players[L]})();j.useEffect(()=>{x(h===e?"hand":"auxiliary")},[h,e]),j.useEffect(()=>{const M=(T==null?void 0:T.position)??{row:0,col:0},E=Sv(v,M,d,p,n,s.map);return Zd(),E.forEach(({pos:L,cls:U})=>{const V=document.querySelector(`.board-cell[data-row="${L.row}"][data-col="${L.col}"]`);V&&V.classList.add(`board-cell--${U}`)}),Zd},[d,p]),j.useEffect(()=>{if(!a)return;const M=T??v,E=setTimeout(()=>{const{seg1:L,seg2:U}=ix(v,M,n,r,s.map);L&&U?t(L,U):L?t(L,L):i({type:"CONFIRM_PLOT",playerId:e})},800);return()=>clearTimeout(E)},[a]);function D(M){if(d===M){u(null);return}if(p===M){m(null);return}if(!d){u(M);return}if(!p){m(M);return}m(M)}function k(M){return M==="deck"?b.deck.filter(E=>!E.destroyed).length:M==="hand"?b.hand.filter(E=>!E.destroyed).length:M==="auxiliary"?b.auxiliary.length:M==="discard"?b.discard.length:M==="destroyed"?b.destroyedCards.length:0}function C(M){return M==="deck"?_?wv(b.deck,b.unitId):[]:M==="hand"?b.hand.filter(E=>!E.destroyed):M==="auxiliary"?b.auxiliary:M==="discard"?b.discard:M==="destroyed"?b.destroyedCards:[]}const A=d!==null&&p!==null,S=_,z=g==="deck"&&_;return o.jsxs("div",{className:"plot-content",children:[o.jsxs("div",{className:"plot-panel__header",children:[o.jsx("span",{className:"plot-panel__player",style:{color:w},children:dl(e)}),o.jsx("span",{className:"plot-panel__prompt",children:"布局中"})]}),o.jsx("div",{className:"plot-tab-row",children:s.playerIds.map(M=>{const E=h===M,L=M===e;return o.jsxs("button",{className:`plot-tab${E?" plot-tab--active":""}`,style:E?{color:y(M),borderBottomColor:y(M)}:void 0,onClick:()=>f(M),children:[dl(M),L&&!E&&o.jsx("span",{className:"plot-tab__dot",style:{background:y(M)}})]},M)})}),h===e?o.jsxs("div",{className:"plot-slots",children:[o.jsx(Yd,{label:"主要阶段 1",cardInstanceId:d,getCard:n,hand:v.hand,onClear:()=>u(null),color:w}),o.jsx(Yd,{label:"主要阶段 2",cardInstanceId:p,getCard:n,hand:v.hand,onClear:()=>m(null),color:w})]}):l?o.jsxs("div",{className:"plot-slots",children:[o.jsx(Xd,{label:"主要阶段 1",card:b.plotSeg1,getCard:n}),o.jsx(Xd,{label:"主要阶段 2",card:b.plotSeg2,getCard:n})]}):o.jsxs("div",{className:"plot-slots",children:[o.jsxs("div",{className:"plot-slot-locked",children:[o.jsx("span",{children:"🔒"}),o.jsx("span",{children:"主要阶段 1"}),o.jsx("span",{className:"plot-slot-locked__hint",children:"对方已锁定"})]}),o.jsxs("div",{className:"plot-slot-locked",children:[o.jsx("span",{children:"🔒"}),o.jsx("span",{children:"主要阶段 2"}),o.jsx("span",{className:"plot-slot-locked__hint",children:"对方已锁定"})]})]}),o.jsxs("div",{className:"plot-zone-tabs",children:[o.jsxs("button",{className:`plot-zone-tab${z?" plot-zone-tab--active":""}`,style:z?{borderColor:w}:void 0,onClick:S?()=>x("deck"):void 0,disabled:!S,title:S?"卡组：按资料集顺序查看":"对方卡组不可查看",children:[o.jsx("span",{className:"plot-zone-tab__icon",children:S?"🂠":"🔒"}),o.jsx("span",{className:"plot-zone-tab__label",children:"卡组"}),o.jsx("span",{className:"plot-zone-tab__count",children:b.deck.filter(M=>!M.destroyed).length})]}),Nv.map(({id:M,label:E,icon:L})=>{const U=g===M;return o.jsxs("button",{className:`plot-zone-tab${U?" plot-zone-tab--active":""}`,style:U?{borderColor:_?w:y(h)}:void 0,onClick:()=>x(M),title:`${E}：点击查看`,children:[o.jsx("span",{className:"plot-zone-tab__icon",children:L}),o.jsx("span",{className:"plot-zone-tab__label",children:E}),o.jsx("span",{className:"plot-zone-tab__count",children:k(M)})]},M)})]}),o.jsx("div",{className:"plot-zone-view",children:g==="hand"&&!_?o.jsxs("div",{className:"plot-zone-private",children:["🔒 对方手牌不可查看",o.jsx("br",{}),o.jsxs("span",{className:"plot-zone-private__count",children:["共 ",k("hand")," 张"]})]}):C(g).length===0?o.jsx("p",{className:"plot-zone-empty",children:"（此区域为空）"}):o.jsx("div",{className:"plot-card-grid",children:C(g).map(M=>{const E=n(M.defId),L=g==="hand"&&h===e,U=M.instanceId===d,V=M.instanceId===p;return o.jsx(Tv,{card:M,def:E,isSelected:U||V,segLabel:U?"①":V?"②":null,onClick:L?()=>D(M.instanceId):void 0},M.instanceId)})})}),o.jsx("div",{className:"plot-footer",children:o.jsx("button",{className:"plot-confirm-btn",disabled:!A,style:A?{borderColor:w,color:w}:void 0,onClick:()=>{d&&p&&t(d,p)},children:A?"确定布局":`请选择主要阶段 ${d?"2":"1"} 的卡牌`})}),o.jsx("style",{children:Dv})]})}function Yd({label:e,cardInstanceId:n,getCard:t,hand:a,onClear:r,color:s}){const i=a.find(g=>g.instanceId===n)??null,l=i?t(i.defId):null,{zoom:d,hide:u,getZoomHandlers:p}=$t(),m=l?`/assets/${l.frontImageId}`:"";return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"plot-slot",children:[o.jsx("div",{className:"plot-slot__label",children:e}),l&&i?o.jsxs("div",{className:"plot-slot__card",onClick:()=>{u(),r()},title:"点击取消选择",style:{borderColor:s,boxShadow:`0 0 8px ${s}55`},...p(m),children:[o.jsx("img",{src:m,alt:l.nameCn,className:"plot-slot__img",onError:g=>{g.target.style.opacity="0.4"}}),o.jsx("span",{className:"plot-slot__name",children:l.nameCn}),o.jsx("span",{className:"plot-slot__clear",children:"✕"})]}):o.jsx("div",{className:"plot-slot__empty",children:"— 未选择 —"})]}),o.jsx(Vt,{zoom:d})]})}function Xd({label:e,card:n,getCard:t}){const a=n?t(n.defId):null,r=a?`/assets/${a.frontImageId}`:"";return o.jsxs("div",{className:"plot-slot",children:[o.jsx("div",{className:"plot-slot__label",children:e}),a&&n?o.jsxs("div",{className:"plot-slot__card",style:{borderColor:"#888",cursor:"default"},children:[o.jsx("img",{src:r,alt:a.nameCn,className:"plot-slot__img",onError:s=>{s.target.style.opacity="0.4"}}),o.jsx("span",{className:"plot-slot__name",children:a.nameCn})]}):o.jsx("div",{className:"plot-slot__empty",children:"— 未布局 —"})]})}function Tv({card:e,def:n,isSelected:t,segLabel:a,onClick:r}){const{zoom:s,getZoomHandlers:i}=$t(),l=n?`/assets/${n.frontImageId}`:"";return o.jsxs(o.Fragment,{children:[o.jsxs("button",{className:`plot-card${t?" plot-card--selected":""}${r?"":" plot-card--readonly"}`,onClick:r,disabled:!r,title:(n==null?void 0:n.nameCn)??"???",...n?i(l):{},children:[n?o.jsxs(o.Fragment,{children:[o.jsx("img",{src:l,alt:n.nameCn,className:"plot-card__img",onError:d=>{d.target.style.opacity="0.3"}}),o.jsx("span",{className:"plot-card__name",children:n.nameCn}),n.damage!==void 0&&o.jsxs("span",{className:"plot-card__stat",children:["💥",n.damage]}),n.movementValue!==void 0&&o.jsxs("span",{className:"plot-card__stat",children:["🏃",n.movementValue]}),n.rangeMin!==void 0&&o.jsxs("span",{className:"plot-card__stat",children:["🎯",n.rangeMin,"–",n.rangeMax]})]}):o.jsx("span",{className:"plot-card__name",children:"???"}),a&&o.jsx("span",{className:"plot-card__badge",children:a})]}),o.jsx(Vt,{zoom:s})]})}function Ev({onContinue:e,playerLabel:n,hint:t}){return o.jsxs("div",{className:"pass-device-screen",children:[o.jsxs("div",{className:"pass-device-screen__content",children:[o.jsx("div",{className:"pass-device-screen__icon",children:"🤖"}),o.jsx("h2",{className:"pass-device-screen__title",children:"请将设备交给"}),o.jsx("h1",{className:"pass-device-screen__player",children:n}),o.jsx("p",{className:"pass-device-screen__hint",children:t}),o.jsxs("button",{className:"pass-device-screen__btn",onClick:e,children:[n," 已就位，继续"]})]}),o.jsx("style",{children:zv})]})}const Dv=`
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
`,zv=`
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
`;function ii(e,n){const t=jf(e,n);if(t.length===0)return n;if(t.length===1)return t[0];const a=e.players[n].position;let r=t[0],s=1/0;for(const i of t){const l=e.players[i].position,d=Math.abs(l.row-a.row)+Math.abs(l.col-a.col);d<s&&(s=d,r=i)}return r}function es(){const{state:e,getCard:n}=ke(),{phase:t,currentTiming:a,turnOrder:r,pendingDamage:s,pendingArmorChoice:i}=e;if(t!=="action_seg1"&&t!=="action_seg2")return null;const l=t==="action_seg1"?1:2;return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"action-hud",style:s||i?{display:"none"}:void 0,children:[a==="movement"&&o.jsx(Av,{seg:l,turnOrder:r,getCard:n},`mov-${l}`),(a==="ranged"||a==="melee")&&o.jsx(Pv,{seg:l,getCard:n},`combat-${l}-${a}`),a==="special"&&o.jsx(Lv,{seg:l,turnOrder:r,getCard:n},`special-${l}`),o.jsx("style",{children:li})]}),s&&o.jsxs(o.Fragment,{children:[o.jsx(Kv,{pendingDamage:s,getCard:n}),o.jsx("style",{children:li})]}),i&&o.jsxs(o.Fragment,{children:[o.jsx(Ov,{pendingArmorChoice:i,getCard:n}),o.jsx("style",{children:li})]})]})}function Av({seg:e,turnOrder:n,getCard:t}){const{state:a,dispatch:r,aiConfig:s,isOnline:i,localPlayerId:l,currentTurnPlayerId:d}=ke(),{map:u,pendingDamage:p,pendingArmorChoice:m,playerIds:g}=a,[x,h]=j.useState(new Set),[f,_]=j.useState(null),[b,v]=j.useState([]),[y,w]=j.useState(null),T=j.useRef(!1),D=new Map;for(const R of g){const O=a.players[R],$=X.find(J=>J.id===O.unitId);D.set(R,gh(O,e,t,$.movement))}j.useEffect(()=>{if(!(f!==null||y!==null)&&!T.current&&!(p||m)){if(i&&l){if(d!==l)return;if(D.get(l))_(l);else{const R=a.players[l],O=e===1?R.plotSeg1:R.plotSeg2;if(!O)r({type:"ADD_LOG",message:`  ${Ce(l)} 未配置行动卡，跳过`});else{const $=t(O.defId);$&&$.actionType==="movement"&&r({type:"ADD_LOG",message:`  ${Ce(l)}【${$.nameCn}】无法发动移动`})}T.current=!0,r({type:"ADVANCE_TIMING"})}return}for(const R of n)if(!x.has(R))if(D.get(R)){_(R);return}else{const O=a.players[R],$=e===1?O.plotSeg1:O.plotSeg2;if(!$)r({type:"ADD_LOG",message:`  ${Ce(R)} 未配置行动卡，跳过`});else{const J=t($.defId);J&&J.actionType==="movement"&&r({type:"ADD_LOG",message:`  ${Ce(R)}【${J.nameCn}】无法发动移动`})}h(J=>new Set([...J,R]));return}T.current=!0,r({type:"ADVANCE_TIMING"})}},[x,f,y,p,m,d]),j.useEffect(()=>{if(!f){v([]);return}const R=a.players[f],O=g.filter(W=>W!==f).map(W=>a.players[W].position),$=X.find(W=>W.id===R.unitId),J=jn(R,t,"movement"),K=ti(R,e,t,J)||$.movement,G=ys(u,R.position,K,O,J,R.facing);v(G.map(W=>W.pos))},[f,a.players,u,e]),j.useEffect(()=>{if(!f||i&&l&&f!==l||!ze(s,f))return;const O=Ar(s,f),$=setTimeout(()=>{const J=lx(a,f,e,t,O);J&&r({type:"MOVE_UNIT",playerId:f,to:J.pos,path:J.path,finalFacing:J.finalFacing}),h(K=>new Set([...K,f])),_(null),v([])},800);return()=>clearTimeout($)},[f]);function k(R,O){if(!f||ze(s,f)||!b.some(J=>oe(J,R)))return;let $=O;if(!$){const J=a.players[f],K=g.filter(ee=>ee!==f).map(ee=>a.players[ee].position),G=X.find(ee=>ee.id===J.unitId),W=jn(J,t,"movement"),Q=ti(J,e,t,W)||G.movement;$=lc(u,J.position,J.facing,R,Q,K,W)}r({type:"MOVE_UNIT",playerId:f,to:R,path:$==null?void 0:$.path,finalFacing:$==null?void 0:$.finalFacing}),v([]),w(f),_(null)}function C(){y&&(h(R=>new Set([...R,y])),w(null),i&&(T.current=!0,r({type:"ADVANCE_TIMING"})))}if(i&&l&&d&&d!==l&&!f&&!y)return o.jsx("div",{className:"action-hud__panel action-hud__panel--waiting",children:o.jsxs("span",{className:"action-hud__hint",children:["等待 ",Ce(d)," 行动中…"]})});const A=n.every(R=>!D.get(R)||x.has(R));if(!i&&A&&f===null&&y===null||i&&T.current&&f===null&&y===null)return null;if(y!==null){const R=a.players[y],O=Ce(y),$=ya(R.facing);return o.jsxs("div",{className:"action-hud__panel",children:[o.jsx("span",{className:"action-hud__mover",children:O}),o.jsx("span",{className:"action-hud__hint",children:"移动完毕，可选择调整机头方向（最多90°）"}),o.jsx($v,{playerId:y,disabledFacing:$}),o.jsx("button",{className:"action-hud__skip-btn",onClick:C,children:"确认方向"})]})}const S=f?ze(s,f):!1,z=f?Ce(f):"";if(S)return o.jsxs("div",{className:"action-hud__panel action-hud__panel--ai-thinking",children:[o.jsxs("span",{className:"action-hud__mover",children:[z," (AI)"]}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__hint",children:"思考中…"})]});const M=f?a.players[f]:null,E=f&&M?jn(M,t,"movement"):null,L=M?X.find(R=>R.id===M.unitId):null,U=f&&M&&L?ti(M,e,t,E??void 0)||L.movement:0,V=f?g.filter(R=>R!==f).map(R=>a.players[R].position):[];return o.jsxs(o.Fragment,{children:[f&&M&&o.jsx(Vv,{reachable:b,map:u,from:M.position,fromFacing:M.facing,movementValue:U,blockedPositions:V,aux:E??void 0,onCellClick:k}),o.jsx("div",{className:"action-hud__panel",children:f?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"action-hud__mover",children:z}),o.jsx("span",{className:"action-hud__hint",children:"选择目标格（步数须用尽；点击选择路径）"}),(E==null?void 0:E.vernier)&&o.jsx("span",{className:"action-hud__aux-badge",title:"地形移动消耗-1，高低差消耗-1",children:"⚙ 喷射推进器"}),(E==null?void 0:E.wheel)&&o.jsx("span",{className:"action-hud__aux-badge",title:"移动力+2",children:"⚙ 滑轮"})]}):o.jsx("span",{className:"action-hud__hint",children:"计算移动路径中…"})})]})}function $v({playerId:e,disabledFacing:n}){const{state:t,dispatch:a}=ke(),s=t.players[e].facing,i=[{facing:"N",label:"↑N"},{facing:"E",label:"E→"},{facing:"S",label:"↓S"},{facing:"W",label:"←W"}];return o.jsxs("div",{className:"facing-compass",title:"调整机头朝向（不可掉头）",children:[o.jsx("span",{className:"facing-compass__label",children:"机头"}),i.map(({facing:l,label:d})=>{const u=l===n;return o.jsx("button",{className:["facing-compass__btn",s===l?"facing-compass__btn--active":"",u?"facing-compass__btn--disabled":""].join(" ").trim(),onClick:()=>{u||a({type:"ADJUST_FACING",playerId:e,facing:l})},disabled:u,title:u?"无法180°掉头":`朝${l}方`,children:d},l)})]})}function Vv({reachable:e,map:n,from:t,fromFacing:a,movementValue:r,blockedPositions:s,aux:i,onCellClick:l}){const d=Ns(),u=j.useRef({allPaths:[],selectedIdx:0,hoveredPos:null}),[p,m]=j.useState(0),g=()=>m(h=>h+1);j.useEffect(()=>{document.querySelectorAll(".board-cell--path-ghost").forEach(w=>w.classList.remove("board-cell--path-ghost"));const{allPaths:h,selectedIdx:f,hoveredPos:_}=u.current;if(!_||h.length===0)return;const b=h[f];if(!b)return;const v=b.path.slice(0,-1);for(const w of v){const T=document.querySelector(`.board-cell[data-row="${w.row}"][data-col="${w.col}"]`);T==null||T.classList.add("board-cell--path-ghost")}const y=document.querySelector(`.board-cell[data-row="${_.row}"][data-col="${_.col}"]`);return y&&(y.dataset.pathLabel=h.length>1?`${f+1}/${h.length}`:""),()=>{document.querySelectorAll(".board-cell--path-ghost").forEach(w=>w.classList.remove("board-cell--path-ghost")),y&&delete y.dataset.pathLabel}},[p]),j.useEffect(()=>{const h=[];document.querySelectorAll(".board-cell--reachable").forEach(f=>{f.classList.remove("board-cell--reachable")});for(const f of e){const _=document.querySelector(`.board-cell[data-row="${f.row}"][data-col="${f.col}"]`);if(!_)continue;_.classList.add("board-cell--reachable");const b=()=>{const{allPaths:M,selectedIdx:E}=u.current;l(f,M[E]??null)},v=()=>{const M=ni(n,t,a,f,r,s,i);u.current={allPaths:M,selectedIdx:0,hoveredPos:f},g()},y=()=>{u.current={allPaths:[],selectedIdx:0,hoveredPos:null},g()},w=M=>{const{allPaths:E,selectedIdx:L}=u.current;if(E.length<=1)return;M.preventDefault();const U=M.deltaY>0?1:-1;u.current={...u.current,selectedIdx:(L+U+E.length)%E.length},g()};let T=null,D=0,k=0,C=!1;const A=M=>{if(D=M.touches[0].clientX,k=M.touches[0].clientY,C=!1,d){const{hoveredPos:E}=u.current;if(E&&E.row===f.row&&E.col===f.col)return;const L=ni(n,t,a,f,r,s,i);u.current={allPaths:L,selectedIdx:0,hoveredPos:f},g(),M.preventDefault();return}T=setTimeout(()=>{C=!0;const E=ni(n,t,a,f,r,s,i);u.current={allPaths:E,selectedIdx:0,hoveredPos:f},g()},400)},S=()=>{T&&(clearTimeout(T),T=null),C&&!d&&(u.current={allPaths:[],selectedIdx:0,hoveredPos:null},g()),C=!1},z=M=>{if(d||!C)return;const E=M.touches[0].clientX-D,L=M.touches[0].clientY-k;if(Math.abs(E)>40||Math.abs(L)>40){const{allPaths:U,selectedIdx:V}=u.current;if(U.length<=1)return;const R=Math.abs(E)>Math.abs(L)?E>0?1:-1:L>0?1:-1;u.current={...u.current,selectedIdx:(V+R+U.length)%U.length},g(),D=M.touches[0].clientX,k=M.touches[0].clientY}};_.addEventListener("click",b),_.addEventListener("mouseenter",v),_.addEventListener("mouseleave",y),_.addEventListener("wheel",w,{passive:!1}),_.addEventListener("touchstart",A,{passive:!0}),_.addEventListener("touchend",S),_.addEventListener("touchcancel",S),_.addEventListener("touchmove",z,{passive:!0}),h.push(()=>{T&&clearTimeout(T),_.removeEventListener("click",b),_.removeEventListener("mouseenter",v),_.removeEventListener("mouseleave",y),_.removeEventListener("wheel",w),_.removeEventListener("touchstart",A),_.removeEventListener("touchend",S),_.removeEventListener("touchcancel",S),_.removeEventListener("touchmove",z)})}return()=>{document.querySelectorAll(".board-cell--reachable").forEach(f=>f.classList.remove("board-cell--reachable")),document.querySelectorAll(".board-cell--path-ghost").forEach(f=>f.classList.remove("board-cell--path-ghost")),document.querySelectorAll(".board-cell[data-path-label]").forEach(f=>delete f.dataset.pathLabel),u.current={allPaths:[],selectedIdx:0,hoveredPos:null},h.forEach(f=>f())}},[e,n,t,a,r,s,i,l]);const x=j.useCallback(()=>{const{allPaths:h,selectedIdx:f}=u.current;h.length<=1||(u.current={...u.current,selectedIdx:(f+1)%h.length},g())},[]);if(d){const{allPaths:h,hoveredPos:f}=u.current;if(f&&h.length>1)return o.jsxs("button",{className:"move-cycle-btn",onClick:x,style:{position:"fixed",bottom:80,left:"50%",transform:"translateX(-50%)",zIndex:600,padding:"10px 24px",background:"rgba(22, 33, 62, 0.95)",border:"1px solid #ffea00",borderRadius:8,color:"#ffea00",fontFamily:"var(--font-mono)",fontSize:"0.85rem",fontWeight:"bold",cursor:"pointer",minHeight:44,backdropFilter:"blur(4px)"},children:["切换路径 (",u.current.selectedIdx+1,"/",h.length,")"]})}return null}function $f({reachable:e,onCellClick:n}){return j.useEffect(()=>(document.querySelectorAll(".board-cell").forEach(a=>{a.classList.remove("board-cell--reachable"),a.onclick=null}),e.forEach(a=>{const r=document.querySelector(`.board-cell[data-row="${a.row}"][data-col="${a.col}"]`);r&&(r.classList.add("board-cell--reachable"),r.onclick=()=>n(a))}),()=>{document.querySelectorAll(".board-cell--reachable").forEach(a=>{a.classList.remove("board-cell--reachable"),a.onclick=null})}),[e,n]),null}function Pv({seg:e,getCard:n}){const{state:t,dispatch:a,aiConfig:r,isOnline:s,localPlayerId:i,currentTurnPlayerId:l}=ke(),{map:d,turnOrder:u,currentTiming:p,pendingDamage:m,pendingArmorChoice:g}=t,[x,h]=j.useState(new Set),[f,_]=j.useState(null),[b,v]=j.useState(null),y=j.useRef(!1),[w,T]=j.useState(null);j.useEffect(()=>{f&&T(ii(t,f))},[f]);const[D,k]=j.useState(!1),[C,A]=j.useState([]),[S,z]=j.useState(!1),M=p==="ranged"?"ranged":"melee",E=M==="ranged"?"射击时机":"近战时机";if(j.useEffect(()=>{if(f===null&&!y.current&&!(m||g)){if(s&&i){if(l!==i)return;const ae=t.players[i];if(Rn(ae,e,M,n))_(i),k(!1),z(!1),A([]);else{const Oe=e===1?ae.plotSeg1:ae.plotSeg2;if(Oe){const He=n(Oe.defId);He&&(M==="ranged"&&He.actionType==="ranged"||M==="melee"&&(He.actionType==="melee"||He.actionType==="charge"))&&a({type:"ADD_LOG",message:`  ${Ce(i)}【${He.nameCn}】条件不满足，无法发动`})}y.current=!0,a({type:"ADVANCE_TIMING"})}return}for(const ae of u){if(x.has(ae))continue;const q=t.players[ae];if(!Rn(q,e,M,n)){const He=e===1?q.plotSeg1:q.plotSeg2;if(He){const Ke=n(He.defId);Ke&&(M==="ranged"&&Ke.actionType==="ranged"||M==="melee"&&(Ke.actionType==="melee"||Ke.actionType==="charge"))&&a({type:"ADD_LOG",message:`  ${Ce(ae)}【${Ke.nameCn}】条件不满足，无法发动`})}h(Ke=>new Set([...Ke,ae]));return}_(ae),k(!1),z(!1),A([]);return}y.current=!0,a({type:"ADVANCE_TIMING"})}},[x,f,m,g,n,l]),j.useEffect(()=>{if(!f||m||g||s&&i&&f!==i||!ze(r,f))return;const q=Ar(r,f),Oe=ii(t,f),He=setTimeout(()=>{if(cx(t,f,e,M,n,q)){const Ma=t.players[f],Rt=Rn(Ma,e,M,n),Xf=(Rt==null?void 0:Rt.actionType)==="charge"?"RESOLVE_CHARGE":M==="ranged"?"RESOLVE_RANGED":"RESOLVE_MELEE";a({type:Xf,attackerId:f,targetId:Oe})}else{const Ma=t.players[f],Rt=Rn(Ma,e,M,n);a({type:"ADD_LOG",message:`  ${Ce(f)} 放弃发动${Rt?`【${Rt.nameCn}】`:E}`})}h(Ma=>new Set([...Ma,f])),_(null),k(!1),z(!1),A([])},800);return()=>clearTimeout(He)},[f,m,g]),s&&i&&l&&l!==i&&!f)return o.jsx("div",{className:"action-hud__panel action-hud__panel--waiting",children:o.jsxs("span",{className:"action-hud__hint",children:["等待 ",Ce(l)," 行动中…"]})});if(!f)return null;const L=t.players[f],U=jf(t,f),V=w??ii(t,f),R=t.players[V],O=p==="melee"?jn(L,n,"melee"):{vernier:!1,moveSensor:!1},$=Rn(L,e,M,n),J=($==null?void 0:$.actionType)==="charge",K=ze(r,f),G=U.filter(ae=>{const q=t.players[ae];if(J&&M==="melee"){const Oe=X.find(Ke=>Ke.id===L.unitId),He=X.find(Ke=>Ke.id===q.unitId);return _r(L,q,e,d,Oe,He,n).canAttack}return Ho(L,q,e,M,d,n).canAttack});let W;if(J&&M==="melee"){const ae=X.find(Oe=>Oe.id===L.unitId),q=X.find(Oe=>Oe.id===R.unitId);W=_r(L,R,e,d,ae,q,n)}else W=Ho(L,R,e,M,d,n);const Q=X.find(ae=>ae.id===L.unitId),ee=X.find(ae=>ae.id===R.unitId);function le(){if(!W.canAttack||!f)return;a({type:J?"RESOLVE_CHARGE":M==="ranged"?"RESOLVE_RANGED":"RESOLVE_MELEE",attackerId:f,targetId:V}),v(`${Q.nameCn} → ${ee.nameCn}：造成 ${W.damage} 伤害`),h(q=>new Set([...q,f])),_(null),k(!1),z(!1),A([]),s&&(y.current=!0,a({type:"ADVANCE_TIMING"}))}function de(){if(!f)return;const ae=Rn(t.players[f],e,M,n);a({type:"ADD_LOG",message:`  ${Ce(f)} 放弃发动${ae?`【${ae.nameCn}】`:E}`}),v(null),h(q=>new Set([...q,f])),_(null),k(!1),z(!1),A([]),s&&(y.current=!0,a({type:"ADVANCE_TIMING"}))}function ye(){if(!f||D)return;const ae=Mf(d,L.position,[R.position]);A(ae),z(!0)}function xn(ae){!f||!S||(a({type:"MELEE_SENSOR_MOVE",playerId:f,to:ae}),k(!0),z(!1),A([]))}function An(){z(!1),A([])}const Na=Ce(f),Pt=W.card?J?`【${W.card.nameCn}】突击值 ${Q.assault} vs 防御${ee.assaultDef}`:`【${W.card.nameCn}】射程 ${W.card.rangeMin??"—"}–${W.card.rangeMax??"—"}`:null,Wn=M==="melee"&&O.moveSensor&&!D;return K?o.jsxs("div",{className:"action-hud__panel action-hud__panel--ai-thinking",children:[o.jsxs("span",{className:"action-hud__mover",children:[Ce(f)," (AI)"]}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__hint",children:"思考中…"})]}):o.jsxs(o.Fragment,{children:[S&&o.jsx($f,{reachable:C,onCellClick:xn}),!S&&o.jsx(Rv,{validTargets:G.map(ae=>({playerId:ae,pos:t.players[ae].position})),selectedTargetId:V,onSelectTarget:T}),o.jsxs("div",{className:"action-hud__panel action-hud__panel--combat",children:[o.jsx("span",{className:"action-hud__mover",children:Na}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__timing-label",children:E}),O.moveSensor&&o.jsxs("span",{className:`action-hud__aux-badge ${D?"action-hud__aux-badge--used":""}`,title:"近战前可移动1格",children:["⚙ 移动传感器",D?"（已使用）":""]}),O.vernier&&o.jsx("span",{className:"action-hud__aux-badge",title:"地形消耗-1，高低差-1",children:"⚙ 喷射推进器"}),W.card?o.jsxs("span",{className:"action-hud__card-info",children:[Pt,W.card.damage!==void 0&&o.jsxs("span",{className:"action-hud__dmg",children:[" 伤害 ",W.card.damage]})]}):o.jsxs("span",{className:"action-hud__hint",children:["无",M==="ranged"?"射击":"近战","牌"]}),o.jsx("span",{className:`action-hud__validity ${W.canAttack?"action-hud__validity--ok":"action-hud__validity--no"}`,children:W.canAttack?J?`距离 ${W.dist} ✓ → 造成 ${W.damage} 伤 / 自机反伤 ${W.counterDamage}`:`距离 ${W.dist} ✓ → ${W.damage} 伤`:W.card?W.reason:""}),b&&o.jsx("span",{className:"action-hud__result",children:b}),S?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"action-hud__hint",children:"点击高亮格移动（传感器），或"}),o.jsx("button",{className:"action-hud__skip-btn",onClick:An,children:"取消移动"})]}):o.jsxs(o.Fragment,{children:[Wn&&o.jsx("button",{className:"action-hud__sensor-btn",onClick:ye,title:"移动传感器：攻击前可移动1格",children:"传感器移动"}),G.length>1&&o.jsxs("span",{className:"action-hud__target-hint",children:["目标: ",Ce(V)," (",ee.nameCn,") — 点击地图切换目标 (",G.length,"个可选)"]}),o.jsx("button",{className:"action-hud__attack-btn",onClick:le,disabled:!W.canAttack,title:W.canAttack?`攻击 ${ee.nameCn}`:W.reason,children:"执行攻击"}),o.jsxs("button",{className:"action-hud__skip-btn",onClick:de,children:["跳过",M==="ranged"?"射击":"近战"]})]})]})]})}function Rv({validTargets:e,selectedTargetId:n,onSelectTarget:t}){return j.useEffect(()=>{document.querySelectorAll(".board-cell--target, .board-cell--target-alt").forEach(a=>{a.classList.remove("board-cell--target","board-cell--target-alt"),a.onclick=null});for(const{playerId:a,pos:r}of e){const s=document.querySelector(`.board-cell[data-row="${r.row}"][data-col="${r.col}"]`);s&&(a===n?s.classList.add("board-cell--target"):(s.classList.add("board-cell--target-alt"),s.onclick=i=>{i.stopPropagation(),t(a)}))}return()=>{document.querySelectorAll(".board-cell--target, .board-cell--target-alt").forEach(a=>{a.classList.remove("board-cell--target","board-cell--target-alt"),a.onclick=null})}},[e,n,t]),null}function Lv({seg:e,turnOrder:n,getCard:t}){const{state:a,dispatch:r,aiConfig:s,isOnline:i,localPlayerId:l,currentTurnPlayerId:d}=ke(),{map:u,pendingDamage:p,pendingArmorChoice:m}=a,[g,x]=j.useState(new Set),[h,f]=j.useState(null),[_,b]=j.useState([]),v=j.useRef(!1);if(j.useEffect(()=>{if(h===null&&!v.current&&!(p||m)){if(i&&l){if(d!==l)return;const S=a.players[l],z=e===1?S.plotSeg1:S.plotSeg2,M=z?t(z.defId):null;!M||M.actionType!=="mine"&&M.actionType!=="special"?(v.current=!0,r({type:"ADVANCE_TIMING"})):f(l);return}for(const S of n){if(g.has(S))continue;const z=a.players[S],M=e===1?z.plotSeg1:z.plotSeg2,E=M?t(M.defId):null;if(!E||E.actionType!=="mine"&&E.actionType!=="special"){x(L=>new Set([...L,S]));return}f(S);return}v.current=!0,r({type:"ADVANCE_TIMING"})}},[g,h,p,m,t,d]),j.useEffect(()=>{if(!h){b([]);return}const S=a.players[h],z=e===1?S.plotSeg1:S.plotSeg2,M=z?t(z.defId):null;if(M&&M.actionType==="mine"){const E=Nf(u,S.position,1,[]);b(E)}else b([])},[h,u,e,a.players,t]),j.useEffect(()=>{if(!h||p||m||i&&l&&h!==l||!ze(s,h))return;const z=Ar(s,h),M=setTimeout(()=>{const E=ux(a,h,e,t,z);if(E){const L=a.players[h],U=e===1?L.plotSeg1:L.plotSeg2,V=U?t(U.defId):null;r({type:"PLACE_MINE",playerId:h,to:E,damage:(V==null?void 0:V.damage)||3})}x(L=>new Set([...L,h])),f(null)},800);return()=>clearTimeout(M)},[h,p,m]),i&&l&&d&&d!==l&&!h)return o.jsx("div",{className:"action-hud__panel action-hud__panel--waiting",children:o.jsxs("span",{className:"action-hud__hint",children:["等待 ",Ce(d)," 行动中…"]})});if(!h)return null;const y=a.players[h],w=e===1?y.plotSeg1:y.plotSeg2,T=w?t(w.defId):null,D=Ce(h),k=ze(s,h);function C(){x(S=>new Set([...S,h])),f(null),i&&(v.current=!0,r({type:"ADVANCE_TIMING"}))}function A(S){!h||!T||T.actionType!=="mine"||_.some(z=>oe(z,S))&&(r({type:"PLACE_MINE",playerId:h,to:S,damage:T.damage||3}),x(z=>new Set([...z,h])),f(null),i&&(v.current=!0,r({type:"ADVANCE_TIMING"})))}return k?o.jsxs("div",{className:"action-hud__panel action-hud__panel--ai-thinking",children:[o.jsxs("span",{className:"action-hud__mover",children:[D," (AI)"]}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__hint",children:"思考中…"})]}):o.jsxs(o.Fragment,{children:[_.length>0&&o.jsx($f,{reachable:_,onCellClick:A}),o.jsxs("div",{className:"action-hud__panel action-hud__panel--special",children:[o.jsx("span",{className:"action-hud__mover",children:D}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__timing-label",children:"特殊时机"}),o.jsx("span",{className:"action-hud__card-info",children:T?`【${T.nameCn}】效果`:"（无）"}),(T==null?void 0:T.actionType)==="mine"?o.jsx("span",{className:"action-hud__hint",children:"请点击高亮格部署机雷，或"}):o.jsx("span",{className:"action-hud__hint",children:"暂无此牌效果支持，请"}),o.jsx("button",{className:"action-hud__skip-btn",onClick:C,children:"跳过"})]})]})}function Ov({pendingArmorChoice:e,getCard:n}){const{dispatch:t,aiConfig:a,isOnline:r,localPlayerId:s}=ke(),{zoom:i,getZoomHandlers:l}=$t(),{targetId:d,damage:u,source:p,handCards:m,plotCard:g}=e,[x,h]=j.useState(null),[f,_]=j.useState(new Set),b=r&&s&&d!==s,v=!b&&ze(a,d);j.useEffect(()=>{v?h(d):r||h(null)},[d,v,r]),j.useEffect(()=>{if(!v||b)return;const S=[];let z=u;g&&z>0&&(S.push(g.instanceId),z-=g.armorValue);for(const E of m){if(z<=0)break;S.push(E.instanceId),z-=E.armorValue}const M=setTimeout(()=>{t({type:"CONFIRM_ARMOR_CHOICE",playerId:d,selectedInstanceIds:S})},500);return()=>clearTimeout(M)},[d,v,b]);function y(S){_(z=>{const M=new Set(z);return M.has(S)?M.delete(S):M.add(S),M})}function w(){t({type:"CONFIRM_ARMOR_CHOICE",playerId:d,selectedInstanceIds:[...f]})}function T(){t({type:"CONFIRM_ARMOR_CHOICE",playerId:d,selectedInstanceIds:[]})}const D=[...f].reduce((S,z)=>{if((g==null?void 0:g.instanceId)===z)return S+g.armorValue;const M=m.find(E=>E.instanceId===z);return S+((M==null?void 0:M.armorValue)??0)},0),k=Math.max(0,u-D),C=p==="ranged"?"射击":p==="charge"?"突击":"近战",A=Ce(d);return b?o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"damage-pass-overlay",children:o.jsxs("div",{className:"damage-pass-card",children:[o.jsx("p",{className:"damage-pass__eyebrow",children:"— 装甲选择 —"}),o.jsx("h2",{className:"damage-pass__title",children:"等待对手选择"}),o.jsx("div",{className:"damage-pass__player",children:A}),o.jsxs("p",{className:"damage-pass__context",children:[A," 正在决定是否激活装甲牌…"]}),o.jsx("div",{className:"damage-pass__spinner",children:"⏳"})]})}),o.jsx("style",{children:ns})]}):!r&&!v&&d!==x?o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"damage-pass-overlay",children:o.jsxs("div",{className:"damage-pass-card",children:[o.jsx("p",{className:"damage-pass__eyebrow",children:"— 装甲选择 —"}),o.jsx("h2",{className:"damage-pass__title",children:"请将设备交给"}),o.jsx("div",{className:"damage-pass__player",children:A}),o.jsxs("p",{className:"damage-pass__context",children:["受到 ",u," 点",C,"伤害，可激活装甲牌减伤"]}),o.jsxs("button",{className:"damage-pass__btn",onClick:()=>h(d),children:[A," 已准备"]})]})}),o.jsx("style",{children:ns})]}):o.jsxs("div",{className:"action-hud",children:[o.jsxs("div",{className:"action-hud__panel action-hud__panel--damage",children:[o.jsxs("div",{className:"damage-panel__header",children:[o.jsx("span",{className:"damage-panel__title",children:"🛡 装甲激活"}),o.jsx("span",{className:"damage-panel__player",children:A}),o.jsxs("span",{className:"damage-panel__remaining",children:["受到 ",o.jsx("strong",{children:u})," 点",C,"伤害",D>0&&o.jsxs(o.Fragment,{children:[" → 减免后 ",o.jsx("strong",{className:"armor-reduced",children:k})," 点"]})]})]}),o.jsx("div",{className:"damage-panel__hint",children:p==="ranged"?"手牌中的装甲牌可防御射击伤害；准备区中的装甲牌可防御任意伤害。选择要激活的装甲牌，或跳过。":"准备区中的装甲牌可防御任意伤害（含突击/近战）。选择要激活的装甲牌，或跳过。"}),o.jsxs("div",{className:"damage-panel__zones",children:[m.length>0&&o.jsxs("div",{className:"damage-zone",children:[o.jsx("span",{className:"damage-zone__label",children:"手牌装甲"}),o.jsx("div",{className:"damage-zone__cards",children:m.map(S=>{const z=n(S.defId),M=f.has(S.instanceId),E=l((z==null?void 0:z.frontImageId)??"");return o.jsxs("button",{className:`damage-card-btn ${M?"damage-card-btn--selected":""}`,onClick:()=>y(S.instanceId),...E,children:[o.jsx("span",{className:"damage-card-btn__name",children:(z==null?void 0:z.nameCn)??S.defId}),o.jsxs("span",{className:"armor-value-badge",children:["-",S.armorValue]})]},S.instanceId)})})]}),g&&o.jsxs("div",{className:"damage-zone",children:[o.jsxs("span",{className:"damage-zone__label",children:["准备区装甲",o.jsxs("span",{className:"damage-zone__sub",children:["主要阶段",g.seg]})]}),o.jsx("div",{className:"damage-zone__cards",children:(()=>{const S=n(g.defId),z=f.has(g.instanceId),M=l((S==null?void 0:S.frontImageId)??"");return o.jsxs("button",{className:`damage-card-btn ${z?"damage-card-btn--selected":""}`,onClick:()=>y(g.instanceId),...M,children:[o.jsx("span",{className:"damage-card-btn__name",children:(S==null?void 0:S.nameCn)??g.defId}),o.jsxs("span",{className:"armor-value-badge",children:["-",g.armorValue]})]},g.instanceId)})()})]})]}),o.jsxs("div",{className:"damage-panel__actions",children:[o.jsxs("button",{className:"action-hud__attack-btn",onClick:w,disabled:f.size===0,children:["激活选中装甲 (-",D," 点)"]}),o.jsx("button",{className:"action-hud__skip-btn",onClick:T,children:"不使用装甲"})]})]}),o.jsx(Vt,{zoom:i})]})}function Kv({pendingDamage:e,getCard:n}){const{state:t,dispatch:a,aiConfig:r,isOnline:s,localPlayerId:i}=ke(),{targetId:l,remaining:d,selectedInstanceIds:u}=e,{zoom:p,getZoomHandlers:m}=$t(),[g,x]=j.useState(null),h=t.players[l];ft(h);const f=u.length===0,_=!!e.attackerId&&f&&!e.attackerDesignatedCardId,b=_?e.attackerId:l,v=Ce(b),y=s&&i&&b!==i,w=!y&&ze(r,b),T=Ar(r,b),D=!s&&!w&&b!==g;j.useEffect(()=>{w?x(b):s||x(null)},[b,w,s]),j.useEffect(()=>{if(!w||y||d<=0)return;const V=t.players[l],R=Dr(V),O=t.playerIds.filter(K=>K!==l&&t.teams[K]!==t.teams[l]&&!t.players[K].isDefeated),$=O.length>0?t.players[O[0]]:V,J=setTimeout(()=>{if(R.length>0){const K=dx(e,V,n,T,_,$);a(K?{type:"SELECT_DAMAGE_CARD",playerId:b,instanceId:K}:{type:"CONFIRM_DAMAGE_SELECTION",playerId:b})}else a({type:"CONFIRM_DAMAGE_SELECTION",playerId:b})},600);return()=>clearTimeout(J)},[d,b,w,y,t.players]);function k(V){a({type:"SELECT_DAMAGE_CARD",playerId:b,instanceId:V})}function C(){a({type:"CONFIRM_DAMAGE_SELECTION",playerId:b})}if(y)return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"damage-pass-overlay",children:o.jsxs("div",{className:"damage-pass-card",children:[o.jsx("p",{className:"damage-pass__eyebrow",children:"— 伤害分配 —"}),o.jsx("h2",{className:"damage-pass__title",children:"等待对手选择"}),o.jsx("div",{className:"damage-pass__player",children:v}),o.jsx("p",{className:"damage-pass__context",children:_?"【瞄准加成】攻方正在指定要摧毁的卡牌…":`${v} 正在选择要摧毁的 ${d} 张卡牌…`}),o.jsx("div",{className:"damage-pass__spinner",children:"⏳"})]})}),o.jsx("style",{children:ns})]});if(D)return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"damage-pass-overlay",children:o.jsxs("div",{className:"damage-pass-card",children:[o.jsx("p",{className:"damage-pass__eyebrow",children:"— 伤害分配 —"}),o.jsx("h2",{className:"damage-pass__title",children:"请将设备交给"}),o.jsx("div",{className:"damage-pass__player",children:v}),o.jsx("p",{className:"damage-pass__context",children:_?"【瞄准加成】攻方有权指定第一张要摧毁的卡牌":`防方选择要摧毁的 ${d} 张卡牌（可自动分配）`}),o.jsxs("button",{className:"damage-pass__btn",onClick:()=>x(b),children:[v," 已准备"]})]})}),o.jsx("style",{children:ns})]});const A=h.hand.filter(V=>!V.destroyed),S=h.plotSeg1&&!h.plotSeg1.destroyed?[h.plotSeg1]:[],z=h.plotSeg2&&!h.plotSeg2.destroyed?[h.plotSeg2]:[],M=h.auxiliary.filter(V=>!V.destroyed),E=h.deck.filter(V=>!V.destroyed),L=[];A.length>0&&L.push({label:"手牌",cards:A}),S.length>0&&L.push({label:"布局格",sublabel:"主要阶段1",cards:S}),z.length>0&&L.push({label:"布局格",sublabel:"主要阶段2",cards:z}),M.length>0&&L.push({label:"辅助区",cards:M});const U=E[0]??null;return o.jsxs("div",{className:"action-hud",children:[o.jsxs("div",{className:"action-hud__panel action-hud__panel--damage",children:[o.jsxs("div",{className:"damage-panel__header",children:[o.jsx("span",{className:"damage-panel__title",children:"⚔️ 伤害分配"}),o.jsx("span",{className:"damage-panel__player",children:_?`${v} (瞄准指定)`:v}),o.jsxs("span",{className:"damage-panel__remaining",children:["还需摧毁 ",o.jsx("strong",{children:d})," 张卡牌"]})]}),(e.destroyedBombCount??0)>0&&o.jsxs("div",{className:"damage-panel__bomb-alert",children:["💣 已选中 ",e.destroyedBombCount," 张炸弹卡，选完后将进行誘爆检查"]}),o.jsx("div",{className:"damage-panel__hint",children:_?`【瞄准加成】攻方有权指定第一张要摧毁的卡牌！可从手牌、辅助区、卡组、布局格中选择。请 ${v} 选择：`:e.source==="ranged"?"射击伤害：须先从手牌 / 布局格 / 辅助区选择卡牌破坏，不足部分自动从牌组顶破坏。":"牌组与弃牌区已耗尽，近战伤害切换为自选模式。请从手牌 / 布局格 / 辅助区选择。"}),o.jsxs("div",{className:"damage-panel__zones",children:[L.map((V,R)=>o.jsxs("div",{className:"damage-zone",children:[o.jsxs("span",{className:"damage-zone__label",children:[V.label,V.sublabel&&o.jsxs("span",{className:"damage-zone__sub",children:["（",V.sublabel,"）"]})]}),o.jsx("div",{className:"damage-zone__cards",children:V.cards.map(O=>{const $=n(O.defId),J=($==null?void 0:$.nameCn)??O.defId,K=u.includes(O.instanceId),G=$!=null&&$.frontImageId?`/assets/${$.frontImageId}`:null;return o.jsxs("button",{className:`damage-card-btn ${K?"damage-card-btn--selected":""} ${$!=null&&$.hasBombIcon?"damage-card-btn--bomb":""}`,onClick:()=>k(O.instanceId),disabled:K,title:`${J} (${($==null?void 0:$.actionType)??"?"})${$!=null&&$.hasBombIcon?" ⚠️ 含诱爆":""}`,...G?m(G):{},children:[o.jsx("span",{className:"damage-card-btn__name",children:J}),($==null?void 0:$.isKaiVariant)&&o.jsx("span",{className:"damage-card-btn__det",title:"改型",children:"◆"}),($==null?void 0:$.hasBombIcon)&&o.jsx("span",{className:"damage-card-btn__det damage-card-btn__bomb-icon",title:"诱爆卡",children:"💣"})]},O.instanceId)})})]},R)),U&&(e.source!=="ranged"||_)&&o.jsxs("div",{className:"damage-zone",children:[o.jsxs("span",{className:"damage-zone__label",children:["卡组",o.jsxs("span",{className:"damage-zone__sub",children:["（共 ",E.length," 张，正面朝下）"]})]}),o.jsx("div",{className:"damage-zone__cards",children:o.jsxs("button",{className:"damage-card-btn damage-card-btn--deck",onClick:()=>k(U.instanceId),title:"从卡组顶部翻开并摧毁 1 张（诱爆正常触发）",children:[o.jsx("span",{className:"damage-card-btn__deck-back",children:"🂠"}),o.jsx("span",{className:"damage-card-btn__name",children:"顶部 × 1"})]})})]}),U&&e.source==="ranged"&&!_&&o.jsxs("div",{className:"damage-zone",children:[o.jsxs("span",{className:"damage-zone__label",children:["卡组",o.jsxs("span",{className:"damage-zone__sub",children:["（共 ",E.length," 张）"]})]}),o.jsx("div",{className:"damage-zone__cards",children:o.jsxs("div",{className:"damage-card-btn damage-card-btn--deck",style:{opacity:.5,cursor:"default"},title:"射击伤害的牌组部分将在选完表牌后自动从顶部破坏",children:[o.jsx("span",{className:"damage-card-btn__deck-back",children:"🂠"}),o.jsx("span",{className:"damage-card-btn__name",children:"自动破坏"})]})})]})]}),o.jsx("div",{className:"damage-panel__actions",children:o.jsx("button",{className:"action-hud__skip-btn",onClick:C,title:"剩余伤害将从牌库顶部自动摧毁",children:"自动分配剩余伤害"})})]}),o.jsx(Vt,{zoom:p})]})}const li=`
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
`,ns=`
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
`;function Jv({onBack:e}){return o.jsxs("div",{className:"rules-page",children:[o.jsxs("div",{className:"rules-page__header",children:[o.jsx("button",{className:"rules-back-btn",onClick:e,children:"← 返回"}),o.jsx("h1",{className:"rules-page__title",children:"游戏规则"}),o.jsx("span",{className:"rules-page__subtitle",children:"エムブリオマシン"})]}),o.jsxs("div",{className:"rules-page__body",children:[o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"游戏概述"}),o.jsx("p",{children:"《胚胎机器》是一款双人对战策略游戏。每位玩家控制一台战机（机体），通过秘密布置行动牌来控制机体的移动与战斗。 当对手满足任意一项败北条件时，本方获胜。"})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"准备阶段"}),o.jsxs("ol",{className:"rules-list",children:[o.jsx("li",{children:"双方各选择一台机体，机体自带专属牌组。"}),o.jsx("li",{children:"选择地图，确定双方初始出生区域（地图短边中央3格）。"}),o.jsxs("li",{children:["将各自牌组洗混，游戏开始时双方各抽取等同于本机",o.jsx("b",{children:"回避值"}),"数量的手牌。"]}),o.jsx("li",{children:"双方机体初始机头朝向对手方向（玩家1朝南，玩家2朝北）。"})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"回合流程"}),o.jsxs("div",{className:"rules-flow",children:[o.jsxs("div",{className:"rules-flow__step",children:[o.jsx("span",{className:"rules-flow__num",children:"1"}),o.jsxs("div",{children:[o.jsx("strong",{children:"抽牌阶段"}),o.jsxs("p",{children:["双方各从牌组顶抽取等同于自己机体",o.jsx("b",{children:"回避值"}),"数量的牌。若牌组耗尽，废弃区的牌重新洗混后继续抽取。"]})]})]}),o.jsxs("div",{className:"rules-flow__step",children:[o.jsx("span",{className:"rules-flow__num",children:"2"}),o.jsxs("div",{children:[o.jsx("strong",{children:"布局阶段"}),o.jsxs("p",{children:["双方各自秘密为",o.jsx("b",{children:"主要阶段1"}),"和",o.jsx("b",{children:"主要阶段2"}),"各布置一张行动牌（面朝下）， 然后将设备交给对方进行同样操作。双方确认后，翻开亮牌，进入行动阶段。"]})]})]}),o.jsxs("div",{className:"rules-flow__step",children:[o.jsx("span",{className:"rules-flow__num",children:"3"}),o.jsxs("div",{children:[o.jsx("strong",{children:"行动主要阶段1 & 主要阶段2"}),o.jsxs("p",{children:["每个段落依次经历四个时机：",o.jsx("b",{children:"移动 → 射击 → 近战 → 特殊"}),'。 每个时机内，双方按该时机的优先顺序依次行动（详见"行动顺序"）。']})]})]}),o.jsxs("div",{className:"rules-flow__step",children:[o.jsx("span",{className:"rules-flow__num",children:"4"}),o.jsxs("div",{children:[o.jsx("strong",{children:"清理阶段"}),o.jsx("p",{children:"将已布置的牌（主要阶段1→主要阶段2顺序）和手中剩余的牌全部放入废弃区，准备下一回合。"})]})]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"行动顺序与先制值"}),o.jsxs("p",{children:["每台机体有固定的",o.jsx("b",{children:"先制值（数字越大越快）"}),"。先制值高的玩家在每个时机优先行动，但不同时机的排序逻辑有所不同："]}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"移动时机："}),"先比较该段落的",o.jsx("b",{children:"移动牌面数值"}),"（移动值大的先动）；移动值相同时再比先制值。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"射击/近战/特殊时机："}),"直接按",o.jsx("b",{children:"先制值"}),"排序（高者先行动）。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"平局处理："}),"先制值相同时，玩家1优先行动。"]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"机头朝向与攻击扇区"}),o.jsxs("p",{children:["每台机体具有明确的",o.jsx("b",{children:"机头朝向"}),"（N/S/E/W），初始朝向对手方向。"]}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"攻击限制："}),"射击攻击只能对准",o.jsx("b",{children:"机体正前方（含正侧方延长线）180°扇区"}),"内的目标。目标在机体正后方时无法射击。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"朝向更新："}),"机体移动后，机头自动朝向移动方向。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"手动调整："}),'可在白兵时机前使用"调整朝向"按钮免费更改机头方向，无需消耗任何牌。']}),o.jsxs("li",{children:[o.jsx("b",{children:"近战无扇区限制："}),"白兵/突击攻击不受前方扇区约束，可攻击相邻格的敌方。"]})]}),o.jsx("p",{className:"rules-note",children:"注：扇区边界（正侧方延长线上的格子）视为前方，可以攻击。"})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"行动时机说明"}),o.jsxs("div",{className:"rules-timing-grid",children:[o.jsxs("div",{className:"rules-timing-card",children:[o.jsx("span",{className:"rules-timing-icon",children:"🏃"}),o.jsx("strong",{children:"移动时机"}),o.jsxs("p",{children:["若该段落布局的是",o.jsx("b",{children:"移动牌"}),"，则可在地图上移动。移动力数值决定可移动格数；地形代价和高度差均额外消耗移动力。无移动牌则自动跳过。"]})]}),o.jsxs("div",{className:"rules-timing-card",children:[o.jsx("span",{className:"rules-timing-icon",children:"🎯"}),o.jsx("strong",{children:"射击时机"}),o.jsxs("p",{children:["若该段落布局的是",o.jsx("b",{children:"射击牌"}),"，可对正前方扇区内、射程范围内且视线通畅的敌方发动远程攻击。若",o.jsx("b",{children:"主要阶段1布置了瞄准牌"}),"，则主要阶段2的射击伤害额外+1。"]})]}),o.jsxs("div",{className:"rules-timing-card",children:[o.jsx("span",{className:"rules-timing-icon",children:"⚔️"}),o.jsx("strong",{children:"近战时机"}),o.jsxs("p",{children:["若该段落布局的是",o.jsx("b",{children:"近战牌"}),"，可对",o.jsx("b",{children:"相邻格（切比雪夫距离=1）"}),"的敌方发动近战攻击，无扇区限制。主要阶段1有瞄准牌时，主要阶段2的近战伤害也+1。"]})]}),o.jsxs("div",{className:"rules-timing-card",children:[o.jsx("span",{className:"rules-timing-icon",children:"⚡"}),o.jsx("strong",{children:"特殊时机"}),o.jsxs("p",{children:[o.jsx("b",{children:"突击牌"}),"→冲锋至目标相邻格再发动突击；",o.jsx("b",{children:"机雷牌"}),"→在附近格部署机雷；",o.jsx("b",{children:"护甲牌"}),"→在本时机被动生效（减少受到的伤害）。无特殊牌则跳过。"]})]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"移动规则"}),o.jsxs("p",{children:["移动时，机体从当前格出发按移动牌数值进行扩展，每进入一个格子消耗对应地形的基础代价 ",o.jsx("b",{children:"加上高度差"}),"："]}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"地形"}),o.jsx("th",{children:"基础移动代价"}),o.jsx("th",{children:"战斗效果"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"平地"}),o.jsx("td",{children:"1"}),o.jsx("td",{children:"无"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"砂地"}),o.jsx("td",{children:"1"}),o.jsx("td",{children:"无"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"废墟"}),o.jsx("td",{children:"2"}),o.jsx("td",{children:"无"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"森林"}),o.jsx("td",{children:"2"}),o.jsx("td",{children:"处于其中的机体受到射击伤害 −1（掩护）"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"高地"}),o.jsx("td",{children:"1 + 高度差*"}),o.jsx("td",{children:"可遮蔽视线（高地墙）；本身无伤害加成"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"水域"}),o.jsx("td",{children:"3"}),o.jsx("td",{children:"在其中发射能量武器时伤害 −1"})]})]})]}),o.jsx("p",{className:"rules-note",children:"* 高度差代价：进入比当前格海拔更高的地形时，额外消耗等同于高度差的移动力（例如从海拔0进入海拔2，共消耗 1+2=3 点）。下坡无额外代价。"}),o.jsx("p",{className:"rules-note",children:"注：机体不能占据对手所在的格子。移动途中触碰到敌方机雷将立即停止并引爆。"})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"射程、视线与距离衰减"}),o.jsxs("p",{children:["距离使用",o.jsx("b",{children:"切比雪夫距离"}),"（8方向棋格距离：行差与列差的最大值）。 射击牌有最小射程和最大射程，目标须在此范围内。"]}),o.jsx("p",{children:"视线（LOS）检查规则："}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"森林不阻断视线，"}),"但能为处于其中的机体提供掩护（受击伤害-1）。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"高地阻断："}),"若射线上存在海拔高于攻防双方的高地格，则视线被遮挡，无法射击。"]}),o.jsx("li",{children:"其他地形（平地、砂地、废墟、水域）均不影响视线。"})]}),o.jsxs("p",{children:[o.jsx("b",{children:"距离衰减（部分武器）："}),'部分武器卡设有"最佳射程"，超出最佳射程后每多1格伤害递减（递减值见卡面），但不超过最大射程仍可开火。']})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"伤害与摧毁"}),o.jsxs("p",{children:["攻击命中后，系统计算最终伤害值，然后进入",o.jsx("b",{children:"伤害分配"}),"。伤害来源不同，分配规则不同："]}),o.jsx("p",{children:o.jsx("b",{children:"🎯 射击伤害（规则 11-2-2）："})}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"先"}),"从表面朝上的卡牌中自由选择破坏：手牌、辅助区、",o.jsx("b",{children:"已布局的牌（主要阶段1/2）"}),"。每次选1张，直至选满伤害值或表面朝上卡牌耗尽。"]}),o.jsxs("li",{children:["表面朝上卡牌不足时，",o.jsx("b",{children:"剩余伤害从牌组顶端自动破坏"}),'（防守方无法选择牌组中的特定卡牌）。也可随时点击"确认"将剩余伤害交由系统从牌组顶端自动处理。']}),o.jsxs("li",{children:[o.jsx("b",{children:"使用了瞄准牌的射击："}),"攻击方额外获得一项权利——可",o.jsx("b",{children:"指定"}),"防守方必须销毁的第一张牌（范围包括牌组）。"]})]}),o.jsx("p",{children:o.jsx("b",{children:"⚔️ 白兵/突击伤害（强制翻牌库顶）："})}),o.jsxs("ul",{className:"rules-list",children:[o.jsx("li",{children:"防守方无权选择，系统直接从牌库顶翻牌销毁，数量等于最终伤害值。"}),o.jsx("li",{children:"牌库翻完后从废弃区重洗继续。若牌组与废弃区均耗尽，剩余伤害切换为防守方自选模式（可从手牌、辅助区、已布局的牌中选择）。"})]}),o.jsx("p",{children:o.jsx("b",{children:"💣 爆弹标记诱爆："})}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:["若被摧毁的牌带有",o.jsx("b",{children:"爆弹标记（💣）"}),"，将额外追加摧毁1张牌（从牌库顶强制翻出）。"]}),o.jsxs("li",{children:["该额外摧毁",o.jsx("b",{children:"不会"}),"再触发新的连锁诱爆（每次伤害结算中仅触发1次诱爆）。"]}),o.jsx("li",{children:'注意：◆标记是区分"改"型变种卡的符号，与诱爆无关。'})]}),o.jsx("p",{className:"rules-note",children:"注：若牌组耗尽，继续从废弃区（重新洗混后）取牌销毁。"})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"卡牌类型"}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"类型"}),o.jsx("th",{children:"使用时机"}),o.jsx("th",{children:"说明"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"移动牌"}),o.jsx("td",{children:"移动时机"}),o.jsx("td",{children:"按牌面数值移动；机体沿4方向移动，移动后机头自动朝向移动方向"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"射击牌"}),o.jsx("td",{children:"射击时机"}),o.jsx("td",{children:"远程攻击，需在机头前方扇区内、射程内且视线通畅；部分武器具有距离衰减"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"近战牌"}),o.jsx("td",{children:"近战时机"}),o.jsx("td",{children:"攻击相邻格（切比雪夫距离=1）的敌方，无扇区限制"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"突击牌"}),o.jsx("td",{children:"特殊时机"}),o.jsx("td",{children:"先冲锋至目标相邻格，再以（突击值−被突击防御值）为基础伤害发动突击；白兵/突击伤害强制从牌库顶翻出"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"护甲牌"}),o.jsx("td",{children:"被动防御"}),o.jsx("td",{children:"布局后，本段受到攻击时每张护甲牌抵消1点伤害"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"瞄准牌"}),o.jsx("td",{children:"攻击辅助"}),o.jsxs("td",{children:["布置于",o.jsx("b",{children:"主要阶段1"}),"时，使",o.jsx("b",{children:"主要阶段2"}),"的射击/近战/突击攻击伤害+1，且攻方可指定防守方销毁目标"]})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"机雷牌"}),o.jsx("td",{children:"特殊时机"}),o.jsx("td",{children:"在机体周围格部署机雷；敌方移动途经该格时自动引爆，造成机雷伤害"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"特殊牌"}),o.jsx("td",{children:"—"}),o.jsx("td",{children:"ダミー等占位牌，无实际效果"})]})]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"胜利条件"}),o.jsx("p",{children:"每次伤害结算结束后，系统自动检查双方是否满足败北条件。满足任意一条即判败："}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"牌组耗尽："}),"尚未进入破坏区的所有牌（手牌 + 牌库 + 辅助区 + ",o.jsx("b",{children:"已布局的牌"}),"）总数 ≤ 3"]}),o.jsxs("li",{children:[o.jsx("b",{children:"战力耗尽："}),"所有",o.jsx("b",{children:"攻击牌"}),"（射击牌、近战牌、突击牌）均被摧毁"]})]}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:["若对手率先满足败北条件 → ",o.jsx("b",{children:"己方获胜"})]}),o.jsxs("li",{children:["若双方同时满足 → ",o.jsx("b",{children:"平局"})]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"高级效果速查"}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"效果"}),o.jsx("th",{children:"触发条件"}),o.jsx("th",{children:"具体效果"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"瞄准"}),o.jsx("td",{children:"主要阶段1布局瞄准牌 + 主要阶段2布局攻击牌"}),o.jsxs("td",{children:["主要阶段2的射击/近战/突击伤害+1；且攻方可指定防守方",o.jsx("b",{children:"必须"}),"销毁的第一张牌"]})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"装甲"}),o.jsx("td",{children:"防守方在被攻击段落布局了护甲牌"}),o.jsx("td",{children:"每张护甲牌抵消1点最终伤害（下限为0）"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"森林掩护"}),o.jsx("td",{children:"防守方站在森林格中被射击"}),o.jsx("td",{children:"受到的射击伤害 −1（近战/突击无此效果）"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"水域衰减"}),o.jsx("td",{children:"攻击方站在水域中使用能量武器射击"}),o.jsx("td",{children:"射击伤害 −1"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"突击冲锋"}),o.jsx("td",{children:"突击牌布局后在特殊时机选择目标"}),o.jsx("td",{children:'先自动移动至目标相邻格，再造成（突击值−被突击防御）点伤害；伤害来源为"突击"，强制从牌库顶翻出'})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"机雷部署"}),o.jsx("td",{children:"机雷牌布局后在特殊时机选择格子"}),o.jsx("td",{children:"放置机雷标记；敌方途经时立即停止并承受机雷伤害，机雷随即消失"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"💣 爆弹诱爆"}),o.jsx("td",{children:"带爆弹标记（💣）的牌被摧毁时"}),o.jsx("td",{children:"额外从牌库顶翻出1张牌强制销毁；该额外销毁不再触发新的连锁"})]})]})]})]}),o.jsxs("section",{className:"rules-section rules-section--diff",children:[o.jsx("h2",{className:"rules-section__title rules-section__title--diff",children:"⚠ 本版本与官方原版的已知差异"}),o.jsx("p",{className:"rules-note",children:"以下是本网游版出于实现便捷性而保留的简化，与桌游官方规则（规则书/FAQ）存在差异。"}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"规则项"}),o.jsx("th",{children:"本版本实现"}),o.jsx("th",{children:"官方原版规则"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"诱爆机制"}),o.jsx("td",{children:"爆弹牌被销毁时立即追加1次额外销毁，连锁止于1层"}),o.jsx("td",{children:"所有伤害结算完毕后，统计本次被销毁的爆弹牌数N，从牌库顶翻N张：其中有爆弹标记的被销毁，无标记的入废弃堆（可能触发多轮连锁）"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"射击伤害选牌顺序"}),o.jsx("td",{children:"防守方可自由从任意区域（含牌库）选择销毁目标"}),o.jsx("td",{children:"应优先从手牌、辅助区、布局区中选择，牌库最后选取"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"回避掷骰"}),o.jsx("td",{children:"未实现；机体回避值仅影响抽牌数量"}),o.jsx("td",{children:"攻击命中前需进行回避判定；回避值影响躲避成功率"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"先制平局"}),o.jsx("td",{children:"先制值相同时玩家1固定优先"}),o.jsx("td",{children:"应由队伍标记物编号（チームチット番号）决定"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"对战模式"}),o.jsx("td",{children:"本机热座 1v1"}),o.jsx("td",{children:"官方支持最多 4v4 双人组队对战"})]})]})]})]})]}),o.jsx("style",{children:Bv})]})}const Bv=`
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
`;function Fv({onBack:e}){const[n,t]=j.useState("maps");return o.jsxs("div",{className:"data-page",children:[o.jsxs("div",{className:"data-page__header",children:[o.jsx("button",{className:"data-page__back",onClick:e,children:"← 返回"}),o.jsx("h1",{className:"data-page__title",children:"游戏资料"})]}),o.jsxs("div",{className:"data-page__tabs",children:[o.jsx("button",{className:`data-tab ${n==="maps"?"data-tab--active":""}`,onClick:()=>t("maps"),children:"地图"}),o.jsx("button",{className:`data-tab ${n==="units"?"data-tab--active":""}`,onClick:()=>t("units"),children:"机体"}),o.jsx("button",{className:`data-tab ${n==="cards"?"data-tab--active":""}`,onClick:()=>t("cards"),children:"卡牌"})]}),o.jsxs("div",{className:"data-page__content",children:[n==="maps"&&o.jsx(Gv,{}),n==="units"&&o.jsx(Wv,{}),n==="cards"&&o.jsx(Zv,{})]}),o.jsx("style",{children:Qv})]})}const Vf={plain:"#8fbc5a",sand:"#d4b483",rubble:"#9e8f7a",forest:"#2d7a2d",water:"#4477cc",highland:"#c4955a"},Pf={plain:"平地",sand:"沙地",rubble:"瓦砾",forest:"森林",water:"水域",highland:"高地"};function Gv(){const[e,n]=j.useState(Ze[0].id),t=Ze.find(a=>a.id===e);return o.jsxs("div",{className:"maps-panel",children:[o.jsx("div",{className:"maps-panel__selector",children:Ze.map(a=>o.jsx("button",{className:`map-sel-btn ${a.id===e?"map-sel-btn--active":""}`,onClick:()=>n(a.id),children:a.nameCn},a.id))}),o.jsxs("div",{className:"maps-panel__body",children:[o.jsx(Hv,{map:t}),o.jsx(Uv,{})]})]})}function Hv({map:e}){const n=new Set(e.startZones[0].map(a=>`${a.row},${a.col}`)),t=new Set(e.startZones[1].map(a=>`${a.row},${a.col}`));return o.jsxs("div",{className:"mini-map-wrapper",children:[o.jsxs("div",{className:"mini-map__title",children:[e.nameCn,"（",e.width,"×",e.height,"）"]}),o.jsx("div",{className:"mini-map__grid",style:{gridTemplateColumns:`repeat(${e.width}, 28px)`,gridTemplateRows:`repeat(${e.height}, 28px)`},children:e.cells.flatMap((a,r)=>a.map((s,i)=>{const l=`${r},${i}`,d=n.has(l),u=t.has(l),p=Vf[s.terrain]??"#888";return o.jsxs("div",{className:"mini-map__cell",style:{background:p},title:`(${i},${r}) ${Pf[s.terrain]??s.terrain}${s.terrain==="highland"?" Lv"+s.elevation:""}`,children:[d&&o.jsx("span",{className:"mini-map__marker mini-map__marker--p1",children:"①"}),u&&o.jsx("span",{className:"mini-map__marker mini-map__marker--p2",children:"②"}),s.terrain==="highland"&&o.jsx("span",{className:"mini-map__elev",children:s.elevation})]},l)}))})]})}function Uv(){return o.jsxs("div",{className:"map-legend",children:[o.jsx("div",{className:"map-legend__title",children:"地形图例"}),Object.entries(Pf).map(([e,n])=>o.jsxs("div",{className:"map-legend__item",children:[o.jsx("span",{className:"map-legend__swatch",style:{background:Vf[e]}}),o.jsx("span",{children:n})]},e)),o.jsxs("div",{className:"map-legend__item",children:[o.jsx("span",{className:"map-legend__marker-demo mini-map__marker--p1",children:"①"}),o.jsx("span",{children:"玩家1出发区"})]}),o.jsxs("div",{className:"map-legend__item",children:[o.jsx("span",{className:"map-legend__marker-demo mini-map__marker--p2",children:"②"}),o.jsx("span",{children:"玩家2出发区"})]}),o.jsx("div",{className:"map-legend__note",children:"高地格显示海拔等级（1–3），移动力消耗与平地相同，提供射程视野优势。"})]})}function Wv(){return o.jsxs("div",{className:"units-panel",children:[o.jsxs("table",{className:"units-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"机体"}),o.jsx("th",{children:"日文名"}),o.jsx("th",{children:"型号"}),o.jsx("th",{children:"先制"}),o.jsx("th",{children:"移动"}),o.jsx("th",{children:"回避"}),o.jsx("th",{children:"突击"}),o.jsx("th",{children:"防突击"})]})}),o.jsx("tbody",{children:[...X].sort((e,n)=>e.initiative-n.initiative).map(e=>o.jsxs("tr",{children:[o.jsxs("td",{className:"units-table__name",children:[o.jsx("img",{src:`/assets/tokens/${e.tokenId}`,alt:e.nameCn,className:"units-table__token",onError:n=>{n.target.style.display="none"}}),e.nameCn]}),o.jsx("td",{className:"units-table__ja",children:e.nameJa}),o.jsx("td",{children:e.type}),o.jsx("td",{className:"units-table__num",children:e.initiative}),o.jsx("td",{className:"units-table__num",children:e.movement}),o.jsx("td",{className:"units-table__num",children:e.evasion}),o.jsx("td",{className:"units-table__num",children:e.assault}),o.jsx("td",{className:"units-table__num",children:e.assaultDef})]},e.id))})]}),o.jsxs("div",{className:"units-note",children:[o.jsx("strong",{children:"型号说明："}),"SS/S/M/L/LL = 体型；軽/中/重 = 重量等级；単座 = 单人驾驶。 先制值越小先手越快，移动值为每回合最大移动格数，回避值为被击中时消耗的伤害数量。"]})]})}const Rf={movement:"移动",ranged:"射击",melee:"近战",special:"特殊",mine:"机雷",aim:"瞄准",armor:"装甲",charge:"突击",auxiliary:"辅助"},Lf={movement:"#66ccaa",ranged:"#4499ee",melee:"#ff9944",special:"#cc88ff",mine:"#ff6688",aim:"#ffdd44",armor:"#88aacc",charge:"#ff6644",auxiliary:"#aaaacc"};function Zv(){const e=Object.keys(ba),[n,t]=j.useState(e[0]),a=ba[n]??[];let r=n;const s=X.find(i=>n.startsWith(i.deckCode));return s&&(n.endsWith("+")?r=`${s.nameCn} (Plus)`:r=s.nameCn),o.jsxs("div",{className:"cards-panel",children:[o.jsx("div",{className:"cards-panel__unit-tabs",children:e.map(i=>{const l=X.find(p=>i.startsWith(p.deckCode));let d=i,u=null;return l&&(u=`/assets/tokens/${l.tokenId}`,d=i.endsWith("+")?`${l.nameCn}+`:l.nameCn),o.jsxs("button",{className:`unit-tab ${i===n?"unit-tab--active":""}`,onClick:()=>t(i),children:[u&&o.jsx("img",{src:u,alt:d,className:"unit-tab__token",onError:p=>{p.target.style.display="none"}}),o.jsx("span",{children:d})]},i)})}),o.jsxs("div",{className:"cards-panel__header",children:[o.jsx("span",{className:"cards-panel__unit-name",children:r}),o.jsxs("span",{className:"cards-panel__count",children:["共 ",a.length," 张卡牌"]})]}),o.jsx("div",{className:"cards-panel__summary",children:o.jsx(Yv,{deck:a})}),o.jsx("div",{className:"cards-panel__list",children:a.map(i=>o.jsx(Xv,{card:i},i.id))})]})}function Yv({deck:e}){const n={};for(const t of e)n[t.actionType]=(n[t.actionType]??0)+1;return o.jsx("div",{className:"card-type-summary",children:Object.entries(n).sort(([t],[a])=>t.localeCompare(a)).map(([t,a])=>o.jsxs("span",{className:"card-type-badge",style:{background:Lf[t]??"#888"},children:[Rf[t]??t," ×",a]},t))})}function Xv({card:e}){const n=Rf[e.actionType]??e.actionType,t=Lf[e.actionType]??"#888",{zoom:a,getZoomHandlers:r}=$t(),s=`/assets/${e.frontImageId}`;let i="";return e.actionType==="movement"&&e.movementValue!==void 0?i=`移动 ${e.movementValue}`:(e.actionType==="ranged"||e.actionType==="melee")&&e.damage!==void 0?e.rangeMin!==void 0&&e.rangeMax!==void 0?i=`射程 ${e.rangeMin}–${e.rangeMax}  伤害 ${e.damage}`:i=`伤害 ${e.damage}`:e.actionType==="charge"&&e.damage!==void 0&&(i=`伤害 ${e.damage}`),o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"card-row",...r(s),children:[o.jsx("div",{className:"card-row__image-wrap",children:o.jsx("img",{src:s,alt:e.nameCn,className:"card-row__image",onError:l=>{l.target.style.display="none"}})}),o.jsx("span",{className:"card-row__type",style:{background:t},children:n}),o.jsx("span",{className:"card-row__name",children:e.nameCn}),e.effectText?o.jsx("span",{className:"card-row__effect",children:e.effectText}):i&&o.jsx("span",{className:"card-row__detail",children:i}),e.isKaiVariant&&o.jsx("span",{className:"card-row__kai",title:"改型标记",children:"◆"}),e.hasBombIcon&&o.jsx("span",{className:"card-row__bomb",title:"诱爆",children:"💥"})]}),o.jsx(Vt,{zoom:a})]})}const Qv=`
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
`;function ts(){const{state:e,getCard:n,exposureMode:t}=ke(),[a,r]=j.useState(null),{zoom:s,getZoomHandlers:i}=$t(),l=e.phase==="plotting"?e.plottingStep==="player2"?"player2":"player1":e.activePlayer??"player1",d=a??l,u=e.players[d],p=X.find(x=>x.id===u.unitId),m=t?!1:qv(e),g={N:"↑北",S:"↓南",E:"→东",W:"←西"}[u.facing]??u.facing;return o.jsxs("div",{className:"mp",children:[o.jsxs("div",{className:"mp__tabs",children:[e.playerIds.map(x=>o.jsxs("button",{className:`mp__tab ${d===x?"mp__tab--active":""}`,onClick:()=>r(h=>h===x?null:x),children:[`P${e.playerIds.indexOf(x)+1}`,x===l&&o.jsx("span",{className:"mp__tab-dot"})]},x)),o.jsx("span",{className:"mp__phase-hint",children:e.phase==="plotting"?"布局中":"行动中"})]}),p&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"mp__header",children:[o.jsx("img",{src:`/assets/tokens/${p.tokenId}`,alt:p.nameCn,className:"mp__token",onError:x=>{x.target.style.opacity="0.3"}}),o.jsxs("div",{className:"mp__header-info",children:[o.jsx("div",{className:"mp__unit-name",children:p.nameCn}),o.jsx("div",{className:"mp__unit-sub",children:p.nameJa}),o.jsxs("div",{className:"mp__pos",children:["格 (",u.position.row,",",u.position.col,")   ",g]})]})]}),o.jsxs("div",{className:"mp__stats",children:[o.jsx(La,{label:"先制",value:p.initiative,color:"#f0c040"}),o.jsx(La,{label:"移动",value:p.movement,color:"#66ccaa"}),o.jsx(La,{label:"回避",value:p.evasion,color:"#88aaff"}),o.jsx(La,{label:"突击",value:p.assault,color:"#ff9944"}),o.jsx(La,{label:"被突",value:p.assaultDef,color:"#ff6666"})]}),o.jsxs("div",{className:"mp__zones",children:[o.jsxs("div",{className:"mp__zone mp__zone--aux",children:[o.jsx("div",{className:"mp__zone-label",children:"辅助区"}),u.auxiliary.length===0?o.jsx("div",{className:"mp__zone-empty",children:"—"}):(()=>{const x=new Map;for(const f of u.auxiliary){const _=n(f.defId),b=(_==null?void 0:_.nameJa)??f.defId,v=x.get(b);v?(v.totalCount++,f.destroyed||v.liveCount++):x.set(b,{nameCn:(_==null?void 0:_.nameCn)??f.defId,liveCount:f.destroyed?0:1,totalCount:1})}const h=f=>{const _=jn(u,n,"movement"),b=jn(u,n,"melee"),v=jn(u,n,"charge");return f==="バーニア"?_.vernier||b.vernier:f==="ムーブセンサー"?b.moveSensor:f==="ホイール"?_.wheel||v.wheel:!1};return o.jsxs(o.Fragment,{children:[u.auxiliary.map(f=>{const _=n(f.defId),b=_!=null&&_.frontImageId?`/assets/${_.frontImageId}`:null;return o.jsxs("div",{className:`mp__aux-card${f.destroyed?" mp__aux-card--destroyed":""}`,...b?i(b):{},children:[o.jsx("span",{className:"mp__aux-name",children:(_==null?void 0:_.nameCn)??f.defId}),f.destroyed&&o.jsx("span",{className:"mp__aux-dead",children:"✕"})]},f.instanceId)}),o.jsx("div",{className:"mp__aux-badges",children:Array.from(x.entries()).map(([f,_])=>{const b=h(f);return o.jsxs("div",{className:`mp__aux-status ${b?"mp__aux-status--on":"mp__aux-status--off"}`,title:b?"效果激活中":"需要≥2张存活才能激活",children:[b?"✓":"✗"," ",_.nameCn,o.jsxs("span",{className:"mp__aux-count",children:["(",_.liveCount,"/",_.totalCount,")"]})]},f)})})]})})()]}),o.jsxs("div",{className:"mp__counts",children:[o.jsx(ro,{icon:"🃏",label:"手牌",count:u.hand.filter(x=>!x.destroyed).length}),o.jsx(ro,{icon:"📚",label:"牌库",count:u.deck.filter(x=>!x.destroyed).length}),o.jsx(ro,{icon:"♻️",label:"弃牌",count:u.discard.filter(x=>!x.destroyed).length}),o.jsx(ro,{icon:"💀",label:"破坏",count:u.destroyedCards.length})]})]}),o.jsxs("div",{className:"mp__plot",children:[o.jsx("div",{className:"mp__plot-label",children:"布局段落"}),o.jsxs("div",{className:"mp__plot-slots",children:[o.jsx(Qd,{label:"主要阶段一",card:u.plotSeg1,getCard:n,hidden:m,getZoomHandlers:i}),o.jsx(Qd,{label:"主要阶段二",card:u.plotSeg2,getCard:n,hidden:m,getZoomHandlers:i})]})]})]}),o.jsx("style",{children:eb}),o.jsx(Vt,{zoom:s})]})}function qv(e,n){return e.phase==="plotting"?e.plottingStep!=="complete":!1}function La({label:e,value:n,color:t}){return o.jsxs("div",{className:"mp__stat",children:[o.jsx("span",{className:"mp__stat-lbl",children:e}),o.jsx("span",{className:"mp__stat-val",style:{color:t},children:n})]})}function ro({icon:e,label:n,count:t}){return o.jsxs("div",{className:"mp__zcount",children:[o.jsx("span",{className:"mp__zcount-icon",children:e}),o.jsx("span",{className:"mp__zcount-lbl",children:n}),o.jsx("span",{className:"mp__zcount-n",children:t})]})}function Qd({label:e,card:n,getCard:t,hidden:a,getZoomHandlers:r}){const s=n?t(n.defId):null,i=s!=null&&s.frontImageId?`/assets/${s.frontImageId}`:null;return o.jsxs("div",{className:"mp__slot",children:[o.jsx("div",{className:"mp__slot-lbl",children:e}),n?a?o.jsx("div",{className:"mp__slot-hidden",children:"???"}):o.jsxs("div",{className:"mp__slot-card",...i?r(i):{},children:[o.jsx("span",{className:"mp__slot-name",children:(s==null?void 0:s.nameCn)??n.defId}),o.jsx("span",{className:`mp__slot-type mp__slot-type--${(s==null?void 0:s.actionType)??"unknown"}`,children:(s==null?void 0:s.actionType)??"?"})]}):o.jsx("div",{className:"mp__slot-empty",children:"— 未布局 —"})]})}const eb=`
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
`,nb={slot_1:"存档位 1",slot_2:"存档位 2",slot_3:"存档位 3",slot_4:"存档位 4",slot_5:"存档位 5",auto:"自动存档"},tb=[...px,"auto"];function ab(e){const n=new Date(e),t=a=>String(a).padStart(2,"0");return`${n.getFullYear()}-${t(n.getMonth()+1)}-${t(n.getDate())} ${t(n.getHours())}:${t(n.getMinutes())}`}function qd({mode:e,onBack:n,onLoad:t,currentState:a,aiConfig:r}){const[s,i]=j.useState([]),[l,d]=j.useState(null),[u,p]=j.useState(null),[m,g]=j.useState(null),[x,h]=j.useState(null);j.useEffect(()=>{i(Ad())},[]);function f(){i(Ad())}function _(k){g(k),setTimeout(()=>g(null),2e3)}function b(k){return s.find(C=>C.slotId===k)}function v(k){if(!a||!r)return;if(b(k)){p(k);return}y(k)}function y(k){if(!(!a||!r))try{Df(k,a,r,!1),f(),p(null),_("存档已保存")}catch(C){h(C instanceof Error?C.message:"保存失败")}}function w(k){const C=mx(k);if(!C){h("存档数据已损坏，无法加载");return}t==null||t(C)}function T(k){gx(k),f(),d(null),_("存档已删除")}const D=e==="save"?"保存游戏":"加载存档";return o.jsxs("div",{className:"sl-screen",children:[o.jsxs("div",{className:"sl-panel",children:[o.jsx("h2",{className:"sl-title",children:D}),o.jsx("div",{className:"sl-slots",children:tb.map(k=>{const C=b(k),S=e==="save"&&!(k==="auto")&&a!=null;return o.jsxs("div",{className:`sl-slot ${C?"sl-slot--occupied":"sl-slot--empty"}`,children:[o.jsxs("div",{className:"sl-slot__label",children:[nb[k],(C==null?void 0:C.isAutoSave)&&o.jsx("span",{className:"sl-badge",children:"自动"})]}),C?o.jsxs("div",{className:"sl-slot__info",children:[o.jsxs("span",{className:"sl-slot__units",children:[C.player1Unit," vs ",C.player2Unit]}),o.jsx("span",{className:"sl-slot__map",children:C.mapName}),o.jsxs("span",{className:"sl-slot__round",children:["第 ",C.roundNumber," 回合"]}),o.jsx("span",{className:"sl-slot__time",children:ab(C.timestamp)})]}):o.jsx("div",{className:"sl-slot__info sl-slot__empty-label",children:"空存档位"}),o.jsxs("div",{className:"sl-slot__actions",children:[e==="load"&&C&&o.jsx("button",{className:"sl-btn sl-btn--primary",onClick:()=>w(k),children:"加载"}),S&&o.jsx("button",{className:"sl-btn sl-btn--primary",onClick:()=>v(k),children:C?"覆盖":"保存"}),C&&(l===k?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"sl-confirm-text",children:"确认删除？"}),o.jsx("button",{className:"sl-btn sl-btn--danger",onClick:()=>T(k),children:"确认"}),o.jsx("button",{className:"sl-btn",onClick:()=>d(null),children:"取消"})]}):o.jsx("button",{className:"sl-btn sl-btn--ghost",onClick:()=>d(k),children:"删除"}))]}),u===k&&o.jsxs("div",{className:"sl-overwrite",children:[o.jsx("span",{children:"覆盖此存档？"}),o.jsx("button",{className:"sl-btn sl-btn--primary",onClick:()=>y(k),children:"确认"}),o.jsx("button",{className:"sl-btn",onClick:()=>p(null),children:"取消"})]})]},k)})}),x&&o.jsxs("div",{className:"sl-error",onClick:()=>h(null),children:["⚠ ",x]}),o.jsx("button",{className:"sl-back-btn",onClick:n,children:"← 返回"})]}),m&&o.jsx("div",{className:"sl-toast",children:m}),o.jsx("style",{children:rb})]})}const rb=`
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
`;function ob({currentState:e}){const{rawDispatch:n}=ke();return j.useEffect(()=>{n({type:"LOAD_GAME",state:e})},[e,n]),o.jsx("div",{style:{height:"100%",width:"100%"},children:o.jsx(Ia,{})})}function sb({currentState:e}){return o.jsx(Is,{children:o.jsx(zf,{children:o.jsx(ob,{currentState:e})})})}function ib({onBack:e}){const[n,t]=j.useState("list"),[a,r]=j.useState(null);function s(l){r(l),t("playback")}function i(){r(null),t("list")}return n==="playback"&&a?o.jsx(ub,{replayData:a,onExit:i}):o.jsx(lb,{onBack:e,onPlay:s})}function Of(e){const n=jx(e.initialState,e.actions),t=new Blob([n],{type:"text/plain;charset=utf-8"}),a=URL.createObjectURL(t),r=document.createElement("a");r.href=a;const s=new Date(e.metadata.timestamp),i=d=>String(d).padStart(2,"0"),l=`replay_${e.metadata.player1Unit}_vs_${e.metadata.player2Unit}_${s.getFullYear()}${i(s.getMonth()+1)}${i(s.getDate())}_${i(s.getHours())}${i(s.getMinutes())}.txt`;r.download=l,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(a)}function lb({onBack:e,onPlay:n}){const[t,a]=j.useState([]),[r,s]=j.useState(null),[i,l]=j.useState(null);j.useEffect(()=>{a($d())},[]);function d(m){const g=Vd(m);if(!g){l("录像数据已损坏，无法播放");return}n(g)}function u(m){const g=Vd(m);if(!g){l("录像数据已损坏，无法导出");return}Of(g)}function p(m){vx(m),a($d()),s(null)}return o.jsxs("div",{className:"rp-screen",children:[o.jsxs("div",{className:"rp-panel",children:[o.jsx("h2",{className:"rp-title",children:"回放录像"}),t.length===0?o.jsx("div",{className:"rp-empty",children:"暂无保存的录像"}):o.jsx("div",{className:"rp-list",children:t.map(m=>o.jsxs("div",{className:"rp-item",children:[o.jsxs("div",{className:"rp-item__info",children:[o.jsxs("span",{className:"rp-item__units",children:[m.player1Unit," vs ",m.player2Unit]}),o.jsx("span",{className:"rp-item__map",children:m.mapName}),o.jsxs("span",{className:"rp-item__rounds",children:[m.totalRounds," 回合"]}),m.winner&&o.jsx("span",{className:"rp-item__winner",children:m.winner==="draw"?"平局":`${m.winner==="player1"?"P1":"P2"} 获胜`}),o.jsx("span",{className:"rp-item__time",children:pb(m.timestamp)})]}),o.jsxs("div",{className:"rp-item__actions",children:[o.jsx("button",{className:"rp-btn rp-btn--primary",onClick:()=>d(m.replayId),children:"▶ 播放"}),o.jsx("button",{className:"rp-btn",onClick:()=>u(m.replayId),children:"导出日志"}),r===m.replayId?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"rp-confirm",children:"确认删除？"}),o.jsx("button",{className:"rp-btn rp-btn--danger",onClick:()=>p(m.replayId),children:"确认"}),o.jsx("button",{className:"rp-btn",onClick:()=>s(null),children:"取消"})]}):o.jsx("button",{className:"rp-btn rp-btn--ghost",onClick:()=>s(m.replayId),children:"删除"})]})]},m.replayId))}),i&&o.jsxs("div",{className:"rp-error",onClick:()=>l(null),children:["⚠ ",i]}),o.jsx("button",{className:"rp-back-btn",onClick:e,children:"← 返回"})]}),o.jsx("style",{children:Kf})]})}function cb(e){const n=[0];let t=e.initialState;for(let a=0;a<e.actions.length;a++){const r=t.phase,s=t.roundNumber,i=t.plottingStep,l=t.currentTiming;t=fn(t,e.actions[a]),(t.phase!==r||t.roundNumber!==s||t.plottingStep!==i||t.currentTiming!==l)&&n.push(a+1)}return n[n.length-1]!==e.actions.length&&n.push(e.actions.length),n}function eu(e,n){let t=e.initialState;for(let a=0;a<n&&a<e.actions.length;a++)t=fn(t,e.actions[a]);return t}function db(e,n){const t=s=>{const i=n.players[s],l=X.find(d=>d.id===i.unitId);return(l==null?void 0:l.nameCn)??s},a=s=>{const i=ne(s);return(i==null?void 0:i.nameCn)??s},r=(s,i)=>{const l=n.players[i],u=[...l.deck,...l.hand,...l.auxiliary,...l.discard,...l.destroyedCards,...l.plotSeg1?[l.plotSeg1]:[],...l.plotSeg2?[l.plotSeg2]:[]].find(p=>p.instanceId===s);return u?a(u.defId):s};switch(e.type){case"DRAW_CARDS":return`${t(e.playerId)} 抽取 ${e.count} 张牌`;case"PLOT_CARD":{const s=r(e.instanceId,e.playerId);return`${t(e.playerId)} 布局段落${e.seg}：${s}`}case"CONFIRM_PLOT":return`${t(e.playerId)} 确认布局`;case"ADVANCE_PLOT_STEP":return"布局阶段推进";case"MOVE_UNIT":return`${t(e.playerId)} 移动至 (${e.to.row},${e.to.col})`;case"ADJUST_FACING":return`${t(e.playerId)} 调整朝向 → ${e.facing}`;case"RESOLVE_RANGED":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动射击`;case"RESOLVE_MELEE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动近战`;case"RESOLVE_CHARGE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动突击`;case"PLACE_MINE":return`${t(e.playerId)} 在 (${e.to.row},${e.to.col}) 布雷 (${e.damage}伤害)`;case"SELECT_DAMAGE_CARD":{const s=r(e.instanceId,e.playerId);return`${t(e.playerId)} 选择摧毁：${s}`}case"CONFIRM_DAMAGE_SELECTION":return`${t(e.playerId)} 确认伤害结算`;case"SKIP_ACTION":return"跳过行动";case"ADVANCE_TIMING":return"推进时序";case"ADVANCE_PHASE":return"推进阶段";case"MELEE_SENSOR_MOVE":return`${t(e.playerId)} 近战传感器移动至 (${e.to.row},${e.to.col})`;case"START_PLOTTING":return"进入布局阶段";default:return e.type}}function nu({player:e,label:n}){const t=X.find(l=>l.id===e.unitId),{zoom:a,getZoomHandlers:r}=$t(),s=l=>l.filter(d=>!d.destroyed),i={N:"↑北",S:"↓南",E:"→东",W:"←西"}[e.facing]??e.facing;return o.jsxs("div",{className:"rpp",children:[o.jsxs("div",{className:"rpp__header",children:[t&&o.jsx("img",{src:`/assets/tokens/${t.tokenId}`,alt:t.nameCn,className:"rpp__token",onError:l=>{l.target.style.opacity="0.3"}}),o.jsxs("div",{children:[o.jsxs("div",{className:"rpp__name",children:[n,": ",(t==null?void 0:t.nameCn)??e.unitId]}),o.jsxs("div",{className:"rpp__pos",children:["(",e.position.row,",",e.position.col,") ",i]})]})]}),o.jsxs("div",{className:"rpp__counts",children:[o.jsxs("span",{className:"rpp__count",title:"牌库",children:["📚",s(e.deck).length]}),o.jsxs("span",{className:"rpp__count",title:"手牌",children:["🃏",e.hand.length]}),o.jsxs("span",{className:"rpp__count",title:"弃牌",children:["♻️",e.discard.length]}),o.jsxs("span",{className:"rpp__count",title:"破坏",children:["💀",e.destroyedCards.length]})]}),o.jsx("div",{className:"rpp__section-label",children:"布局"}),o.jsxs("div",{className:"rpp__plot-row",children:[o.jsx(tu,{label:"阶段1",card:e.plotSeg1,getZoomHandlers:r}),o.jsx(tu,{label:"阶段2",card:e.plotSeg2,getZoomHandlers:r})]}),o.jsxs("div",{className:"rpp__section-label",children:["手牌 (",e.hand.length,")"]}),o.jsx("div",{className:"rpp__card-list",children:e.hand.length===0?o.jsx("span",{className:"rpp__empty",children:"—"}):e.hand.map(l=>o.jsx(au,{card:l,getZoomHandlers:r},l.instanceId))}),e.auxiliary.length>0&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"rpp__section-label",children:["辅助 (",s(e.auxiliary).length,"/",e.auxiliary.length,")"]}),o.jsx("div",{className:"rpp__card-list",children:e.auxiliary.map(l=>o.jsx(au,{card:l,getZoomHandlers:r},l.instanceId))})]}),o.jsx(Vt,{zoom:a})]})}function tu({label:e,card:n,getZoomHandlers:t}){const a=n?ne(n.defId):null,r=a!=null&&a.frontImageId?`/assets/${a.frontImageId}`:null,i=a?{movement:"#66ccaa",ranged:"#ff9944",melee:"#ff6060",charge:"#ff4444",aim:"#f0c040",armor:"#88aaff",mine:"#cc88ff",special:"#aaa",auxiliary:"#77ddaa"}[a.actionType]??"#888":"#555";return o.jsxs("div",{className:"rpp__plot-slot",children:[o.jsx("div",{className:"rpp__plot-label",children:e}),n&&a?o.jsxs("div",{className:"rpp__plot-card",style:{borderColor:i},...r?t(r):{},children:[o.jsx("span",{className:"rpp__plot-type",style:{color:i},children:a.actionType}),o.jsx("span",{className:"rpp__plot-name",children:a.nameCn})]}):o.jsx("div",{className:"rpp__plot-empty",children:"—"})]})}function au({card:e,getZoomHandlers:n}){const t=ne(e.defId),a=t!=null&&t.frontImageId?`/assets/${t.frontImageId}`:null,s=t?{movement:"#66ccaa",ranged:"#ff9944",melee:"#ff6060",charge:"#ff4444",aim:"#f0c040",armor:"#88aaff",mine:"#cc88ff",special:"#aaa",auxiliary:"#77ddaa"}[t.actionType]??"#888":"#555";return o.jsxs("span",{className:`rpp__chip${e.destroyed?" rpp__chip--dead":""}`,style:{borderColor:s},...a?n(a):{},children:[(t==null?void 0:t.nameCn)??e.defId,e.destroyed&&o.jsx("span",{className:"rpp__chip-x",children:"✕"})]})}function ub({replayData:e,onExit:n}){const t=j.useMemo(()=>cb(e),[e]),a=e.actions.length,[r,s]=j.useState(0),[i,l]=j.useState(e.initialState),[d,u]=j.useState(!1),[p,m]=j.useState(1),[g,x]=j.useState(""),[h,f]=j.useState(e.initialState.log.length),_=j.useRef(null),b=j.useRef(i),v=j.useRef(r);b.current=i,v.current=r;const y=j.useRef(null);j.useEffect(()=>{var R;(R=y.current)==null||R.scrollIntoView({behavior:"smooth"})},[i.log.length]);const w=j.useCallback(()=>{_.current!=null&&(clearInterval(_.current),_.current=null)},[]),T=j.useCallback(()=>{const R=v.current;if(R>=a)return w(),u(!1),!1;const O=e.actions[R],$=fn(b.current,O);return f(b.current.log.length),l($),s(R+1),!0},[e,a,w]),D=j.useCallback(()=>{const R=v.current;if(R>=a)return;const $=t.find(G=>G>R)??a;let J=b.current;const K=J.log.length;for(let G=R;G<$;G++)J=fn(J,e.actions[G]);f(K),l(J),s($),$>=a&&(w(),u(!1))},[e,a,t,w]),k=j.useCallback(()=>{const R=v.current,O=t.filter(K=>K<R),$=O.length>=2?O[O.length-2]:0,J=eu(e,$);f(0),l(J),s($)},[e,t]);j.useEffect(()=>(w(),d&&(_.current=setInterval(()=>{if(v.current>=a){w(),u(!1);return}D()},Math.round(1500/p))),w),[d,p,D,a,w]);function C(){u(R=>!R)}function A(){u(!1),f(0),l(e.initialState),s(0)}function S(){const R=parseInt(g,10);if(isNaN(R)||R<1)return;u(!1);const{state:O,actionIndex:$}=yx(e,R);f(0),l(O),s($)}const z=r>0?e.actions[r-1]:null,M=z?db(z,r>=2?eu(e,r-1):e.initialState):null,E=r>=a,L=r===0,U={pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"行动阶段1",action_seg2:"行动阶段2",cleanup:"清理阶段",game_over:"游戏结束"},V={movement:"移动",ranged:"射击",melee:"近战",special:"特殊"};return o.jsxs("div",{className:"rpv-screen",children:[o.jsxs("div",{className:"rpv-topbar",children:[o.jsxs("span",{className:"rpv-topbar__round",children:["第 ",i.roundNumber," 回合"]}),o.jsx("span",{className:"rpv-topbar__phase",children:U[i.phase]??i.phase}),i.currentTiming&&o.jsxs("span",{className:"rpv-topbar__timing",children:["▶ ",V[i.currentTiming]]}),o.jsx("span",{style:{flex:1}}),o.jsx("button",{className:"rpv-btn",onClick:A,disabled:L,title:"回到开始",children:"⏮"}),o.jsx("button",{className:"rpv-btn",onClick:k,disabled:L,title:"上一阶段",children:"◀◀"}),o.jsx("button",{className:"rpv-btn",onClick:()=>{u(!1),T()},disabled:E,title:"单步前进（单个操作）",children:"▶|"}),o.jsx("button",{className:"rpv-btn",onClick:()=>{u(!1),D()},disabled:E,title:"下一阶段",children:"▶▶"}),o.jsx("button",{className:"rpv-btn rpv-btn--primary",onClick:C,children:d?"⏸ 暂停":"▶ 自动"}),o.jsx("span",{className:"rpv-sep"}),o.jsx("span",{className:"rpv-label",children:"速度"}),[1,2,4].map(R=>o.jsxs("button",{className:`rpv-btn rpv-btn--speed ${p===R?"rpv-btn--active":""}`,onClick:()=>m(R),children:[R,"x"]},R)),o.jsx("span",{className:"rpv-sep"}),o.jsx("span",{className:"rpv-label",children:"跳至"}),o.jsx("input",{className:"rpv-input",type:"number",min:1,value:g,onChange:R=>x(R.target.value),onKeyDown:R=>R.key==="Enter"&&S(),placeholder:"回合"}),o.jsx("button",{className:"rpv-btn",onClick:S,children:"跳转"}),o.jsx("span",{className:"rpv-sep"}),o.jsxs("span",{className:"rpv-progress",children:[r,"/",a]}),o.jsx("button",{className:"rpv-btn",onClick:()=>Of(e),title:"导出完整分析日志",children:"导出日志"}),o.jsx("button",{className:"rpv-btn rpv-btn--exit",onClick:n,children:"✕ 退出"})]}),o.jsxs("div",{className:"rpv-main",children:[o.jsxs("div",{className:"rpv-map-col",children:[o.jsx("div",{className:"rpv-map-area",children:o.jsx(sb,{currentState:i})}),M&&o.jsxs("div",{className:"rpv-action-desc",children:["▶ ",M]}),o.jsxs("div",{className:"rpv-log",children:[o.jsx("div",{className:"rpv-log__header",children:"行动日志"}),o.jsxs("div",{className:"rpv-log__entries",children:[i.log.filter(R=>!R.startsWith("[DBG]")).map((R,O)=>{const $=O>=h;return o.jsx("div",{className:`rpv-log__entry ${fb(R)}${$?" rpv-log__entry--new":""}`,children:R},O)}),o.jsx("div",{ref:y})]})]})]}),o.jsxs("div",{className:"rpv-info-col",children:[o.jsx(nu,{player:i.players.player1,label:"P1"}),o.jsx("div",{className:"rpv-info-divider"}),o.jsx(nu,{player:i.players.player2,label:"P2"})]})]}),o.jsx("style",{children:Kf}),o.jsx("style",{children:mb})]})}function pb(e){const n=new Date(e),t=a=>String(a).padStart(2,"0");return`${n.getFullYear()}-${t(n.getMonth()+1)}-${t(n.getDate())} ${t(n.getHours())}:${t(n.getMinutes())}`}function fb(e){return e.startsWith("===")?"rpv-log__entry--round":e.startsWith("---")?"rpv-log__entry--sep":e.includes("发动")||e.includes("攻击")?"rpv-log__entry--attack":e.includes("摧毁")||e.includes("连锁")||e.includes("诱爆")?"rpv-log__entry--damage":e.includes("移动到")?"rpv-log__entry--move":e.includes("获胜")||e.includes("击破")||e.includes("平局")?"rpv-log__entry--victory":""}const Kf=`
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
`,mb=`
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
`,gb=50;function Jf(){return{terrain:"plain",elevation:0,variant:0}}function Bf(e,n){const t=Array.from({length:n},()=>Array.from({length:e},()=>Jf()));return{id:`custom_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,nameJa:"新しいマップ",nameCn:"新地图",width:e,height:n,cells:t,startZones:{0:[{row:0,col:Math.floor(e/2)}],1:[{row:n-1,col:Math.floor(e/2)}]},maxPlayers:2,maxTeams:2}}function ul(e){return{map:e??Bf(7,11),activeTool:"terrain",selectedTerrain:"plain",selectedElevation:1,selectedVariant:0,selectedZoneTeam:0,brushSize:1,isDirty:!1,undoStack:[],redoStack:[],showCoords:!1}}function yo(e){return{...e,cells:e.cells.map(n=>n.map(t=>({...t}))),startZones:Object.fromEntries(Object.entries(e.startZones).map(([n,t])=>[n,t.map(a=>({...a}))]))}}function xt(e){const n=[...e.undoStack,yo(e.map)];return n.length>gb&&n.shift(),{...e,undoStack:n,redoStack:[],isDirty:!0}}function ru(e,n,t,a,r,s){if(n<0||n>=e.height||t<0||t>=e.width)return e;const i=e.cells.map((l,d)=>d===n?l.map((u,p)=>p===t?{terrain:a,elevation:a==="highland"?r:0,variant:a==="highland"?r:s}:u):l);return{...e,cells:i}}function hb(e,n){switch(n.type){case"SET_TOOL":return{...e,activeTool:n.tool};case"SET_TERRAIN":return{...e,selectedTerrain:n.terrain,activeTool:"terrain"};case"SET_ELEVATION":return{...e,selectedElevation:n.elevation};case"SET_VARIANT":return{...e,selectedVariant:n.variant};case"SET_BRUSH_SIZE":return{...e,brushSize:n.size};case"SET_ZONE_TEAM":return{...e,selectedZoneTeam:n.team};case"TOGGLE_COORDS":return{...e,showCoords:!e.showCoords};case"PAINT_CELL":{const t=xt(e),a=ru(t.map,n.row,n.col,t.selectedTerrain,t.selectedElevation,t.selectedVariant);return{...t,map:a}}case"PAINT_AREA":{const t=xt(e);let a=t.map;for(const{row:r,col:s}of n.cells)a=ru(a,r,s,t.selectedTerrain,t.selectedElevation,t.selectedVariant);return{...t,map:a}}case"ADD_ZONE_CELL":{const t=xt(e),{team:a,position:r}=n,s=t.map.startZones[a]??[];if(s.some(l=>l.row===r.row&&l.col===r.col))return e;const i={...t.map.startZones,[a]:[...s,r]};return{...t,map:{...t.map,startZones:i}}}case"REMOVE_ZONE_CELL":{const t=xt(e),{team:a,position:r}=n,i=(t.map.startZones[a]??[]).filter(d=>d.row!==r.row||d.col!==r.col),l={...t.map.startZones,[a]:i};return{...t,map:{...t.map,startZones:l}}}case"CLEAR_ZONE":{const t=xt(e),a={...t.map.startZones,[n.team]:[]};return{...t,map:{...t.map,startZones:a}}}case"SET_MAP_META":{const t=xt(e),a={...t.map};return n.nameJa!==void 0&&(a.nameJa=n.nameJa),n.nameCn!==void 0&&(a.nameCn=n.nameCn),n.maxPlayers!==void 0&&(a.maxPlayers=n.maxPlayers),n.maxTeams!==void 0&&(a.maxTeams=n.maxTeams),{...t,map:a}}case"RESIZE_MAP":{const t=xt(e),{newWidth:a,newHeight:r}=n,s=Array.from({length:r},(l,d)=>Array.from({length:a},(u,p)=>d<t.map.height&&p<t.map.width?{...t.map.cells[d][p]}:Jf())),i={};for(const[l,d]of Object.entries(t.map.startZones))i[Number(l)]=d.filter(u=>u.row<r&&u.col<a);return{...t,map:{...t.map,width:a,height:r,cells:s,startZones:i}}}case"UNDO":{if(e.undoStack.length===0)return e;const t=e.undoStack[e.undoStack.length-1];return{...e,map:t,undoStack:e.undoStack.slice(0,-1),redoStack:[...e.redoStack,yo(e.map)],isDirty:!0}}case"REDO":{if(e.redoStack.length===0)return e;const t=e.redoStack[e.redoStack.length-1];return{...e,map:t,redoStack:e.redoStack.slice(0,-1),undoStack:[...e.undoStack,yo(e.map)],isDirty:!0}}case"LOAD_MAP":return{...ul(yo(n.map)),isDirty:!1};case"NEW_MAP":return ul(Bf(n.width,n.height));case"MARK_SAVED":return{...e,isDirty:!1};default:return e}}const gc="em_custom_maps_index",hc="em_custom_map_",xb=["plain","sand","rubble","forest","water","highland"];function xc(){try{const e=localStorage.getItem(gc);return e?JSON.parse(e):[]}catch{return[]}}function vb(e){const n={id:e.id,nameCn:e.nameCn,nameJa:e.nameJa,width:e.width,height:e.height,maxPlayers:e.maxPlayers,maxTeams:e.maxTeams,savedAt:Date.now()},t=xc().filter(a=>a.id!==e.id);t.push(n),localStorage.setItem(gc,JSON.stringify(t)),localStorage.setItem(hc+e.id,JSON.stringify(e))}function bb(e){try{const n=localStorage.getItem(hc+e);if(!n)return null;const t=JSON.parse(n);return Ff(t)?t:null}catch{return null}}function yb(e){const n=xc().filter(t=>t.id!==e);localStorage.setItem(gc,JSON.stringify(n)),localStorage.removeItem(hc+e)}function _b(e){return JSON.stringify(e,null,2)}function Ib(e){try{const n=JSON.parse(e);return Ff(n)?(n.id=`custom_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,n):null}catch{return null}}function kb(e){const n=_b(e),t=new Blob([n],{type:"application/json"}),a=URL.createObjectURL(t),r=document.createElement("a");r.href=a,r.download=`${e.nameCn||e.id}.json`,r.click(),URL.revokeObjectURL(a)}function Ff(e){if(!e||typeof e!="object")return!1;const n=e;if(typeof n.id!="string"||(typeof n.nameCn!="string"&&(n.nameCn="未命名"),typeof n.nameJa!="string"&&(n.nameJa=""),typeof n.width!="number"||n.width<3||n.width>25)||typeof n.height!="number"||n.height<3||n.height>25||(typeof n.maxPlayers!="number"&&(n.maxPlayers=2),typeof n.maxTeams!="number"&&(n.maxTeams=2),!Array.isArray(n.cells))||n.cells.length!==n.height)return!1;for(const t of n.cells){if(!Array.isArray(t)||t.length!==n.width)return!1;for(const a of t)if(!a||typeof a!="object"||!xb.includes(a.terrain))return!1}return(!n.startZones||typeof n.startZones!="object")&&(n.startZones={}),!0}const Gf=j.createContext(null);function Ca(){const e=j.useContext(Gf);if(!e)throw new Error("useEditor must be inside EditorCtx.Provider");return e}const oo=48,ou=.2,jb=3,su=.1,pl=[{terrain:"plain",label:"平原",icon:"🟩"},{terrain:"sand",label:"砂地",icon:"🟨"},{terrain:"rubble",label:"瓦砾",icon:"🟫"},{terrain:"forest",label:"森林",icon:"🌲"},{terrain:"water",label:"水域",icon:"🟦"},{terrain:"highland",label:"高地",icon:"⛰️"}],as=["#00f0ff","#ff00c8","#00cc88","#ff8800","#6688ff","#cc44ff","#44dddd","#ff4466"];function wb({onBack:e}){const[n,t]=j.useReducer(hb,void 0,()=>ul()),a=j.useMemo(()=>({state:n,dispatch:t}),[n]);j.useEffect(()=>{function i(l){if((l.ctrlKey||l.metaKey)&&(l.key==="z"&&!l.shiftKey&&(l.preventDefault(),t({type:"UNDO"})),l.key==="z"&&l.shiftKey&&(l.preventDefault(),t({type:"REDO"})),l.key==="y"&&(l.preventDefault(),t({type:"REDO"})),l.key==="s"&&(l.preventDefault(),r())),!l.ctrlKey&&!l.metaKey&&!l.altKey){const d=parseInt(l.key)-1;d>=0&&d<pl.length&&t({type:"SET_TERRAIN",terrain:pl[d].terrain})}}return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[]);function r(){vb(n.map),t({type:"MARK_SAVED"})}function s(){n.isDirty&&!window.confirm("有未保存的更改，确定要退出吗？")||e()}return o.jsx(Gf.Provider,{value:a,children:o.jsxs("div",{className:"me__screen",children:[o.jsx(Sb,{onBack:s,onSave:r}),o.jsx(Nb,{}),o.jsx(je,{id:"me-terrain",title:"地形画笔",initialPos:{x:8,y:56},width:200,minHeight:60,zIndex:20,children:o.jsx(Mb,{})}),o.jsx(je,{id:"me-props",title:"地图属性",initialPos:{x:8,y:380},width:200,minHeight:60,zIndex:19,children:o.jsx(Tb,{})}),o.jsx(je,{id:"me-zones",title:"出击区域",initialPos:{x:8,y:600},width:200,minHeight:60,zIndex:18,children:o.jsx(Eb,{})}),o.jsx("style",{children:Db})]})})}function Sb({onBack:e,onSave:n}){const{state:t,dispatch:a}=Ca(),[r,s]=j.useState(!1),i=j.useRef(null);function l(){t.isDirty&&!window.confirm("有未保存的更改，确定要新建吗？")||a({type:"NEW_MAP",width:7,height:11})}function d(){kb(t.map)}function u(){var m;(m=i.current)==null||m.click()}function p(m){var h;const g=(h=m.target.files)==null?void 0:h[0];if(!g)return;const x=new FileReader;x.onload=()=>{const f=Ib(x.result);f?a({type:"LOAD_MAP",map:f}):alert("无效的地图文件")},x.readAsText(g),m.target.value=""}return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"me__topbar",children:[o.jsx("button",{className:"me__btn",onClick:e,children:"← 返回"}),o.jsx("span",{className:"me__title",children:"地图编辑器"}),o.jsxs("span",{className:"me__map-name",children:[t.map.nameCn," (",t.map.height,"×",t.map.width,")",t.isDirty&&" *"]}),o.jsx("span",{style:{flex:1}}),o.jsx("button",{className:"me__btn",onClick:l,children:"新建"}),o.jsx("button",{className:"me__btn",onClick:()=>s(!0),children:"打开"}),o.jsx("button",{className:"me__btn me__btn--accent",onClick:n,children:"保存"}),o.jsx("button",{className:"me__btn",onClick:d,children:"导出"}),o.jsx("button",{className:"me__btn",onClick:u,children:"导入"}),o.jsx("input",{ref:i,type:"file",accept:".json",style:{display:"none"},onChange:p}),o.jsx("span",{className:"me__sep"}),o.jsx("button",{className:"me__btn",onClick:()=>a({type:"UNDO"}),disabled:t.undoStack.length===0,children:"撤销"}),o.jsx("button",{className:"me__btn",onClick:()=>a({type:"REDO"}),disabled:t.redoStack.length===0,children:"重做"}),o.jsx("button",{className:`me__btn${t.showCoords?" me__btn--active":""}`,onClick:()=>a({type:"TOGGLE_COORDS"}),children:"坐标"})]}),r&&o.jsx(Cb,{onClose:()=>s(!1)})]})}function Cb({onClose:e}){const{dispatch:n,state:t}=Ca(),[a]=j.useState(()=>xc());function r(l){if(t.isDirty&&!window.confirm("有未保存的更改，确定要打开吗？"))return;const d=bb(l);d&&(n({type:"LOAD_MAP",map:d}),e())}function s(l){if(t.isDirty&&!window.confirm("有未保存的更改，确定要打开吗？"))return;const d={...l,id:`custom_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,cells:l.cells.map(u=>u.map(p=>({...p}))),startZones:Object.fromEntries(Object.entries(l.startZones).map(([u,p])=>[u,p.map(m=>({...m}))]))};n({type:"LOAD_MAP",map:d}),e()}function i(l){window.confirm("确定删除此地图？")&&(yb(l),e())}return o.jsx("div",{className:"me__overlay",onClick:e,children:o.jsxs("div",{className:"me__dialog",onClick:l=>l.stopPropagation(),children:[o.jsx("h3",{children:"打开地图"}),a.length>0&&o.jsxs(o.Fragment,{children:[o.jsx("h4",{children:"自定义地图"}),o.jsx("div",{className:"me__dialog-list",children:a.map(l=>o.jsxs("div",{className:"me__dialog-item",children:[o.jsxs("span",{children:[l.nameCn," (",l.height,"×",l.width,")"]}),o.jsx("span",{className:"me__dialog-date",children:new Date(l.savedAt).toLocaleDateString()}),o.jsx("button",{className:"me__btn me__btn--sm",onClick:()=>r(l.id),children:"打开"}),o.jsx("button",{className:"me__btn me__btn--sm me__btn--danger",onClick:()=>i(l.id),children:"删除"})]},l.id))})]}),o.jsx("h4",{children:"内置地图 (作为模板)"}),o.jsx("div",{className:"me__dialog-list",children:Ze.map(l=>o.jsxs("div",{className:"me__dialog-item",children:[o.jsxs("span",{children:[l.nameCn," (",l.height,"×",l.width,")"]}),o.jsx("button",{className:"me__btn me__btn--sm",onClick:()=>s(l),children:"复制"})]},l.id))}),o.jsx("div",{className:"me__dialog-actions",children:o.jsx("button",{className:"me__btn",onClick:e,children:"取消"})})]})})}function Nb(){const{state:e,dispatch:n}=Ca(),t=j.useRef(null),[a,r]=j.useState({x:0,y:0,scale:1}),s=j.useRef(null),i=j.useRef(!1),l=j.useRef(!1),d=j.useRef(new Set),{map:u,activeTool:p,showCoords:m,selectedZoneTeam:g,brushSize:x}=e,{width:h,height:f}=u;j.useEffect(()=>{const C=t.current;if(!C)return;const A=C.clientWidth,S=C.clientHeight,z=h*oo,M=f*oo;if(!A||!S)return;const E=Math.max(ou,Math.min(1.5,Math.min(A/z,S/M)));r({x:(A-z*E)/2,y:(S-M*E)/2,scale:E})},[h,f]),j.useEffect(()=>{const C=t.current;if(!C)return;const A=S=>{S.preventDefault();const z=S.deltaY<0?su:-su;r(M=>({...M,scale:Math.min(jb,Math.max(ou,M.scale+z))}))};return C.addEventListener("wheel",A,{passive:!1}),()=>C.removeEventListener("wheel",A)},[]);const _=j.useCallback(C=>{C.button!==2&&(s.current={startX:C.clientX,startY:C.clientY,origX:a.x,origY:a.y},i.current=!1,l.current=!1,d.current.clear())},[a.x,a.y]),b=j.useCallback(C=>{if(!s.current)return;const A=C.clientX-s.current.startX,S=C.clientY-s.current.startY;!i.current&&Math.sqrt(A*A+S*S)>5&&(C.buttons===4||C.buttons===2?i.current=!0:p==="terrain"||p==="startZone"||p==="eraseZone"?l.current=!0:i.current=!0),i.current&&r(z=>({...z,x:s.current.origX+A,y:s.current.origY+S}))},[p]),v=j.useCallback(()=>{s.current=null,i.current=!1,l.current=!1,d.current.clear()},[]),y=j.useMemo(()=>{const C=new Map;for(const[A,S]of Object.entries(u.startZones)){const z=Number(A);for(const M of S)C.set(`${M.row},${M.col}`,z)}return C},[u.startZones]);function w(C,A){const S=`${C},${A}`;if(p==="terrain")if(x===1)d.current.has(S)||(d.current.add(S),n({type:"PAINT_CELL",row:C,col:A}));else{const z=[],M=Math.floor(x/2);for(let E=-M;E<=M;E++)for(let L=-M;L<=M;L++){const U=C+E,V=A+L;if(U>=0&&U<f&&V>=0&&V<h){const R=`${U},${V}`;d.current.has(R)||(d.current.add(R),z.push({row:U,col:V}))}}z.length&&n({type:"PAINT_AREA",cells:z})}else if(p==="startZone")n({type:"ADD_ZONE_CELL",team:g,position:{row:C,col:A}});else if(p==="eraseZone"){const z=y.get(S);z!==void 0&&n({type:"REMOVE_ZONE_CELL",team:z,position:{row:C,col:A}})}}const{x:T,y:D,scale:k}=a;return o.jsx("div",{className:"me__viewport",ref:t,onMouseDown:_,onMouseMove:b,onMouseUp:v,onMouseLeave:v,onContextMenu:C=>C.preventDefault(),children:o.jsx("div",{className:"me__grid",style:{transform:`translate(${T}px, ${D}px) scale(${k})`,transformOrigin:"top left",display:"grid",gridTemplateColumns:`repeat(${h}, ${oo}px)`,gridTemplateRows:`repeat(${f}, ${oo}px)`},children:u.cells.flatMap((C,A)=>C.map((S,z)=>{const M=ic(S),E=`${A},${z}`,L=y.get(E),U=L!==void 0?as[L%as.length]:"";return o.jsxs("div",{className:`me__cell${L!==void 0?" me__cell--zone":""}`,style:{backgroundImage:`url("${M}")`,backgroundSize:"cover",...L!==void 0?{borderColor:U,boxShadow:`inset 0 0 8px ${U}66`}:{}},onMouseDown:V=>{V.button===0&&!i.current&&w(A,z)},onMouseEnter:()=>{l.current&&w(A,z)},children:[S.terrain==="highland"&&o.jsxs("span",{className:"me__cell-elev",children:["+",S.elevation]}),m&&o.jsxs("span",{className:"me__cell-coord",children:[A,",",z]}),L!==void 0&&o.jsxs("span",{className:"me__cell-zone",style:{color:U},children:["Z",L]})]},E)}))})})}function Mb(){const{state:e,dispatch:n}=Ca();return o.jsxs("div",{className:"me__palette",children:[o.jsx("div",{className:"me__palette-grid",children:pl.map(({terrain:t,label:a,icon:r},s)=>o.jsxs("button",{className:`me__palette-btn${e.selectedTerrain===t&&e.activeTool==="terrain"?" me__palette-btn--active":""}`,onClick:()=>n({type:"SET_TERRAIN",terrain:t}),title:`${a} (${s+1})`,children:[r," ",a]},t))}),e.selectedTerrain==="highland"&&o.jsxs("div",{className:"me__sub-option",children:[o.jsx("label",{children:"高度:"}),[1,2,3].map(t=>o.jsxs("button",{className:`me__mini-btn${e.selectedElevation===t?" me__mini-btn--active":""}`,onClick:()=>n({type:"SET_ELEVATION",elevation:t}),children:["+",t]},t))]}),e.selectedTerrain!=="highland"&&e.selectedTerrain!=="plain"&&o.jsxs("div",{className:"me__sub-option",children:[o.jsx("label",{children:"变体:"}),[0,1,2,3].map(t=>o.jsx("button",{className:`me__mini-btn${e.selectedVariant===t?" me__mini-btn--active":""}`,onClick:()=>n({type:"SET_VARIANT",variant:t}),children:t},t))]}),o.jsxs("div",{className:"me__sub-option",children:[o.jsx("label",{children:"笔刷:"}),[1,2,3].map(t=>o.jsxs("button",{className:`me__mini-btn${e.brushSize===t?" me__mini-btn--active":""}`,onClick:()=>n({type:"SET_BRUSH_SIZE",size:t}),children:[t,"×",t]},t))]})]})}function Tb(){const{state:e,dispatch:n}=Ca(),{map:t}=e;return o.jsxs("div",{className:"me__props",children:[o.jsxs("label",{className:"me__prop-row",children:[o.jsx("span",{children:"名称(中)"}),o.jsx("input",{type:"text",value:t.nameCn,onChange:a=>n({type:"SET_MAP_META",nameCn:a.target.value})})]}),o.jsxs("label",{className:"me__prop-row",children:[o.jsx("span",{children:"名称(日)"}),o.jsx("input",{type:"text",value:t.nameJa,onChange:a=>n({type:"SET_MAP_META",nameJa:a.target.value})})]}),o.jsxs("div",{className:"me__prop-row",children:[o.jsx("span",{children:"尺寸"}),o.jsx("input",{type:"number",min:3,max:25,value:t.width,onChange:a=>n({type:"RESIZE_MAP",newWidth:Number(a.target.value),newHeight:t.height}),style:{width:50}}),"×",o.jsx("input",{type:"number",min:3,max:25,value:t.height,onChange:a=>n({type:"RESIZE_MAP",newWidth:t.width,newHeight:Number(a.target.value)}),style:{width:50}})]}),o.jsxs("label",{className:"me__prop-row",children:[o.jsx("span",{children:"最大玩家"}),o.jsx("select",{value:t.maxPlayers,onChange:a=>n({type:"SET_MAP_META",maxPlayers:Number(a.target.value)}),children:[2,3,4,6,8].map(a=>o.jsx("option",{value:a,children:a},a))})]}),o.jsxs("label",{className:"me__prop-row",children:[o.jsx("span",{children:"最大队伍"}),o.jsx("select",{value:t.maxTeams,onChange:a=>n({type:"SET_MAP_META",maxTeams:Number(a.target.value)}),children:Array.from({length:t.maxPlayers},(a,r)=>r+1).filter(a=>a>=2).map(a=>o.jsx("option",{value:a,children:a},a))})]})]})}function Eb(){const{state:e,dispatch:n}=Ca(),{map:t,activeTool:a,selectedZoneTeam:r}=e;return o.jsxs("div",{className:"me__zones",children:[o.jsxs("div",{className:"me__zones-tools",children:[o.jsx("button",{className:`me__btn me__btn--sm${a==="startZone"?" me__btn--active":""}`,onClick:()=>n({type:"SET_TOOL",tool:"startZone"}),children:"添加点"}),o.jsx("button",{className:`me__btn me__btn--sm${a==="eraseZone"?" me__btn--active":""}`,onClick:()=>n({type:"SET_TOOL",tool:"eraseZone"}),children:"删除点"})]}),Array.from({length:t.maxTeams},(s,i)=>i).map(s=>{const i=t.startZones[s]??[],l=as[s%as.length],d=r===s;return o.jsxs("div",{className:`me__zone-row${d?" me__zone-row--active":""}`,style:{borderLeftColor:l},onClick:()=>n({type:"SET_ZONE_TEAM",team:s}),children:[o.jsxs("span",{style:{color:l},children:["区域 ",s+1]}),o.jsxs("span",{className:"me__zone-count",children:[i.length," 点"]}),o.jsx("button",{className:"me__btn me__btn--sm me__btn--danger",onClick:u=>{u.stopPropagation(),n({type:"CLEAR_ZONE",team:s})},children:"清空"})]},s)})]})}const Db=`
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
`;function zb(e){return e?`(${e.row},${e.col})`:"(无)"}function Kt(e){if(!e)return"(空)";const n=ne(e.defId),t=(n==null?void 0:n.nameCn)??e.defId,a=e.destroyed?" [已摧毁]":"";return`${t}(${e.defId})${a}`}function Ab(e,n){const t=e.players[n];if(!t)return`  ${n}: (不存在)`;const a=X.find(s=>s.id===t.unitId),r=[];return r.push(`  ── ${n} ──`),r.push(`    机体: ${(a==null?void 0:a.nameCn)??t.unitId} (${t.unitId})`),r.push(`    位置: ${zb(t.position)}  朝向: ${t.facing}`),r.push(`    状态: ${t.isDefeated?"已击破":"存活"}`),r.push(`    手牌(${t.hand.length}): ${t.hand.map(s=>Kt(s)).join(", ")||"(无)"}`),r.push(`    阶段1配置: ${Kt(t.plotSeg1)}`),r.push(`    阶段2配置: ${Kt(t.plotSeg2)}`),r.push(`    辅助区(${t.auxiliary.length}): ${t.auxiliary.map(s=>Kt(s)).join(", ")||"(无)"}`),r.push(`    弃牌堆(${t.discard.length}): ${t.discard.map(s=>Kt(s)).join(", ")||"(无)"}`),r.push(`    摧毁区(${t.destroyedCards.length}): ${t.destroyedCards.map(s=>Kt(s)).join(", ")||"(无)"}`),r.push(`    卡组剩余: ${t.deck.filter(s=>!s.destroyed).length} 张`),r.join(`
`)}function $b(e){var t,a;const n=[];if(n.push("══════════════════════════════════════════"),n.push("  当前状态快照"),n.push("══════════════════════════════════════════"),n.push(`回合: ${e.roundNumber}`),n.push(`阶段: ${e.phase}`),n.push(`当前时机: ${e.currentTiming??"(无)"}`),n.push(`行动顺序: ${e.turnOrder.length>0?e.turnOrder.join(" → "):"(无)"}`),n.push(`布局步骤: ${e.plottingStep??"(无)"}`),n.push(`活跃玩家: ${e.activePlayer}`),n.push(`地图: ${((t=e.map)==null?void 0:t.id)??"(无)"}`),n.push(`地雷数: ${((a=e.mines)==null?void 0:a.length)??0}`),e.pendingDamage){const r=e.pendingDamage;n.push(`待处理伤害: 目标=${r.targetId}, 剩余=${r.remaining}, 来源=${r.source}, 攻击者=${r.attackerId??"(无)"}, 已选=${r.selectedInstanceIds.length}`)}n.push(""),n.push("── 玩家状态 ──");for(const r of e.playerIds)n.push(Ab(e,r));return n.push(""),n.join(`
`)}function Hf(e,n){const t=new Date,a=t.toISOString().replace(/[:.]/g,"-").slice(0,19),r=[];r.push("╔══════════════════════════════════════════╗"),r.push("║   Embryo Machine — 全量游戏日志导出      ║"),r.push("╚══════════════════════════════════════════╝"),r.push(`导出时间: ${t.toLocaleString("zh-CN")}`),n!=null&&n.localPlayerId&&r.push(`本地玩家: ${n.localPlayerId}`),n!=null&&n.connectionStatus&&r.push(`连接状态: ${n.connectionStatus}`),r.push(""),r.push($b(e)),r.push("══════════════════════════════════════════"),r.push("  完整游戏日志 (按时间顺序)"),r.push("══════════════════════════════════════════");const s=e.log.filter(p=>!p.startsWith("[DBG]"));for(let p=0;p<s.length;p++)r.push(`[${String(p+1).padStart(4," ")}] ${s[p]}`);r.push(""),r.push(`── 共 ${s.length} 条日志 ──`);const i=r.join(`
`),l=new Blob([i],{type:"text/plain;charset=utf-8"}),d=URL.createObjectURL(l),u=document.createElement("a");u.href=d,u.download=`embryo-log-${a}.txt`,u.click(),URL.revokeObjectURL(d)}const iu=[1e3,2e3,4e3,8e3,15e3];class Vb{constructor(n,t,a){qe(this,"ws",null);qe(this,"url");qe(this,"sessionId");qe(this,"onMessage");qe(this,"onStatus");qe(this,"reconnectAttempt",0);qe(this,"reconnectTimer",null);qe(this,"intentionallyClosed",!1);qe(this,"hasEverConnected",!1);this.url=n,this.sessionId=localStorage.getItem("embryo-session-id"),this.onMessage=t,this.onStatus=a}connect(){this.intentionallyClosed=!1,this.onStatus("connecting");const n=this.sessionId?`?sessionId=${this.sessionId}`:"";this.ws=new WebSocket(`${this.url}${n}`),this.ws.onopen=()=>{var t;if(this.intentionallyClosed){(t=this.ws)==null||t.close(),this.ws=null,this.onStatus("disconnected");return}this.hasEverConnected=!0,this.reconnectAttempt=0,this.onStatus("connected")},this.ws.onmessage=t=>{try{const a=JSON.parse(t.data);a.type==="SESSION_ID"&&(this.sessionId=a.sessionId,localStorage.setItem("embryo-session-id",a.sessionId)),this.onMessage(a)}catch{console.warn("[GameSocket] Failed to parse message:",t.data)}},this.ws.onclose=()=>{if(this.intentionallyClosed){this.onStatus("disconnected");return}this.hasEverConnected||(this.sessionId=null,localStorage.removeItem("embryo-session-id")),this.onStatus("reconnecting"),this.scheduleReconnect()},this.ws.onerror=()=>{}}send(n){var t;((t=this.ws)==null?void 0:t.readyState)===WebSocket.OPEN?this.ws.send(JSON.stringify(n)):console.warn("[GameSocket] Cannot send — not connected")}disconnect(){if(this.intentionallyClosed=!0,this.reconnectTimer&&(clearTimeout(this.reconnectTimer),this.reconnectTimer=null),this.ws){const n=this.ws.readyState;n===WebSocket.OPEN||n===WebSocket.CLOSING?(this.ws.close(),this.ws=null):n===WebSocket.CONNECTING&&(this.ws.onmessage=null,this.ws.onerror=null)}this.onStatus("disconnected")}clearSession(){this.sessionId=null,localStorage.removeItem("embryo-session-id")}get isConnected(){var n;return((n=this.ws)==null?void 0:n.readyState)===WebSocket.OPEN}scheduleReconnect(){const n=iu[Math.min(this.reconnectAttempt,iu.length-1)];this.reconnectAttempt++,this.reconnectTimer=setTimeout(()=>{this.reconnectTimer=null,this.connect()},n)}}const Uf=j.createContext(null);function Pb({serverUrl:e,children:n}){const[t,a]=j.useState(null),[r,s]=j.useState(null),[i,l]=j.useState(null),[d,u]=j.useState("disconnected"),[p,m]=j.useState(null),[g,x]=j.useState(null),[h,f]=j.useState([]),[_,b]=j.useState(null),[v,y]=j.useState(null),w=j.useRef(null),T=j.useRef(null),D=j.useRef(-1),k=j.useCallback(E=>{switch(E.type){case"SESSION_ID":break;case"ROOM_STATE":s(E.room),l(E.yourPlayerId);break;case"ROOM_LIST":f(E.rooms);break;case"GAME_STATE":{E.state.phase==="plotting"&&(T.current!=="plotting"||D.current!==E.state.roundNumber)&&m(null),T.current=E.state.phase,D.current=E.state.roundNumber,a(E.state),l(E.yourPlayerId),b(E.currentTurnPlayerId??null),y(E.turnDeadline??null);break}case"PLOTTING_STATUS":m({confirmed:E.confirmed,total:E.total});break;case"GAME_STARTED":break;case"RECONNECTED":s(E.room),a(E.state),l(E.yourPlayerId),b(E.currentTurnPlayerId??null),y(E.turnDeadline??null),T.current=E.state.phase,D.current=E.state.roundNumber;break;case"SPECTATE_STATE":a(E.state),s(E.room),l(null);break;case"ACTION_REJECTED":x(E.reason),setTimeout(()=>x(null),5e3);break;case"PLAYER_JOINED":case"PLAYER_LEFT":case"PLAYER_RECONNECTED":case"PLAYER_DISCONNECTED":break;case"ERROR":x(E.message),setTimeout(()=>x(null),5e3);break}},[]);j.useEffect(()=>{const E=new Vb(e,k,u);return w.current=E,E.connect(),()=>{E.clearSession(),E.disconnect(),w.current=null}},[e,k]);const C=j.useCallback(E=>{var L;(L=w.current)==null||L.send({type:"GAME_ACTION",action:E})},[]),A=j.useCallback(E=>{var L;(L=w.current)==null||L.send({type:"LOBBY_ACTION",action:E})},[]),S=j.useCallback(E=>{var L;(L=w.current)==null||L.send(E)},[]),z=j.useCallback(E=>ne(E),[]),M={state:t,room:r,localPlayerId:i,dispatch:C,sendLobbyAction:A,send:S,getCard:z,connectionStatus:d,plottingStatus:p,isOnline:!0,lastError:g,roomList:h,currentTurnPlayerId:_,turnDeadline:v};return o.jsx(Uf.Provider,{value:M,children:n})}function vc(){const e=j.useContext(Uf);if(!e)throw new Error("useOnlineGame must be used within OnlineGameProvider");return e}function Rb({children:e}){const{state:n,localPlayerId:t,dispatch:a,getCard:r,plottingStatus:s,send:i,currentTurnPlayerId:l}=vc(),d=j.useCallback(g=>{if(g.type==="ADVANCE_TIMING"||g.type==="ADVANCE_PHASE"){i({type:"TIMING_DONE"});return}g.type==="START_PLOTTING"||g.type==="DRAW_CARDS"||a(g)},[a,i]);if(!n||!t)return null;let u=n;if(n.phase==="plotting"){const g=(s==null?void 0:s.confirmed.includes(t))??!1;u={...n,plottingStep:g?"complete":t}}const p={player1:t!=="player1",player2:t!=="player2",player1Difficulty:"easy",player2Difficulty:"easy",playerAI:Object.fromEntries(n.playerIds.map(g=>[g,g!==t])),playerDifficulty:Object.fromEntries(n.playerIds.map(g=>[g,"easy"]))},m={state:u,dispatch:d,rawDispatch:d,getCard:r,aiConfig:p,setAIConfig:()=>{},getReplayData:()=>null,autoSaveEnabled:!1,setAutoSaveEnabled:()=>{},exposureMode:!1,setExposureMode:()=>{},isOnline:!0,localPlayerId:t,currentTurnPlayerId:l};return o.jsx(Cs.Provider,{value:m,children:e})}const Lb={lobby:"等待中",playing:"游戏中",finished:"已结束"};function Wf({onBack:e,onCreateRoom:n,onJoinRoom:t,roomList:a,onRefreshRooms:r,onSpectate:s}){const[i,l]=j.useState("create"),[d,u]=j.useState(()=>localStorage.getItem("embryo-player-name")??""),[p,m]=j.useState(""),[g,x]=j.useState(""),[h,f]=j.useState(2),[_,b]=j.useState(2),[v,y]=j.useState(Ze[0].id);function w(V){const R=[];for(let O=2;O<=V;O++)V%O===0&&R.push(O);return R}function T(V){f(V);const R=w(V);R.includes(_)||b(R[0]);const O=Ze.find($=>$.id===v);if(!O||O.maxPlayers<V){const $=Ze.find(J=>J.maxPlayers>=V);$&&y($.id)}}const[D,k]=j.useState(""),[C,A]=j.useState(!1),[S,z]=j.useState(0);function M(){const V=d.trim()||`Player_${Math.random().toString(36).slice(2,6)}`;return localStorage.setItem("embryo-player-name",V),V}function E(){n(M(),{maxPlayers:h,teamCount:_,mapId:v,turnTimeoutSeconds:S,password:C?D:void 0})}function L(){const V=p.trim().toUpperCase();V&&t(V,M(),g||void 0)}function U(V,R){m(V),R?(l("join"),x("")):t(V,M())}return o.jsxs("div",{className:"ol-screen",children:[o.jsxs("div",{className:"ol-center",children:[o.jsx("h1",{className:"ol-title",children:"联机对战"}),o.jsx("p",{className:"ol-subtitle",children:"创建、加入或浏览房间"}),o.jsx("div",{className:"ol-divider"}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"昵称"}),o.jsx("input",{className:"ol-input",value:d,onChange:V=>u(V.target.value),placeholder:"输入昵称…",maxLength:16})]}),o.jsxs("div",{className:"ol-tabs",children:[o.jsx("button",{className:`ol-tab${i==="create"?" ol-tab--active":""}`,onClick:()=>l("create"),children:"创建房间"}),o.jsx("button",{className:`ol-tab${i==="join"?" ol-tab--active":""}`,onClick:()=>l("join"),children:"加入房间"}),o.jsx("button",{className:`ol-tab${i==="browse"?" ol-tab--active":""}`,onClick:()=>{l("browse"),r==null||r()},children:"浏览房间"})]}),i==="create"&&o.jsxs("div",{className:"ol-panel",children:[o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"最大玩家数"}),o.jsx("select",{className:"ol-select",value:h,onChange:V=>T(+V.target.value),children:[2,3,4,5,6,7,8].map(V=>o.jsxs("option",{value:V,children:[V," 人"]},V))})]}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"队伍数量"}),o.jsx("select",{className:"ol-select",value:_,onChange:V=>b(+V.target.value),children:w(h).map(V=>o.jsxs("option",{value:V,children:[V," 队 (",h/V,"人/队)"]},V))})]}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"地图"}),o.jsx("select",{className:"ol-select",value:v,onChange:V=>y(V.target.value),children:Ze.filter(V=>V.maxPlayers>=h).map(V=>o.jsxs("option",{value:V.id,children:[V.nameCn," (",V.maxPlayers,"人)"]},V.id))})]}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"回合限时"}),o.jsxs("select",{className:"ol-select",value:S,onChange:V=>z(+V.target.value),children:[o.jsx("option",{value:0,children:"无限制"}),o.jsx("option",{value:30,children:"30 秒"}),o.jsx("option",{value:60,children:"60 秒"}),o.jsx("option",{value:90,children:"90 秒"}),o.jsx("option",{value:120,children:"120 秒"})]})]}),o.jsxs("label",{className:"ol-check",onClick:()=>A(!C),children:[o.jsx("span",{className:`ol-check__box${C?" ol-check__box--on":""}`,children:C?"✓":""}),o.jsx("span",{children:"设置房间密码"})]}),C&&o.jsx("div",{className:"ol-field",children:o.jsx("input",{className:"ol-input",value:D,onChange:V=>k(V.target.value),placeholder:"输入密码…",maxLength:20,type:"password"})}),o.jsx("button",{className:"ol-btn ol-btn--primary",onClick:E,children:"创建房间"})]}),i==="join"&&o.jsxs("div",{className:"ol-panel",children:[o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"房间号"}),o.jsx("input",{className:"ol-input ol-input--code",value:p,onChange:V=>m(V.target.value.toUpperCase()),placeholder:"输入6位房间号",maxLength:6})]}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"密码（若有）"}),o.jsx("input",{className:"ol-input",value:g,onChange:V=>x(V.target.value),placeholder:"无密码可留空",maxLength:20,type:"password"})]}),o.jsx("button",{className:"ol-btn ol-btn--primary",onClick:L,disabled:p.trim().length<1,children:"加入房间"})]}),i==="browse"&&o.jsxs("div",{className:"ol-panel",children:[o.jsxs("div",{className:"ol-browse-header",children:[o.jsx("span",{className:"ol-label",children:"在线房间"}),o.jsx("button",{className:"ol-refresh-btn",onClick:r,children:"刷新"})]}),!a||a.length===0?o.jsx("div",{className:"ol-empty",children:"暂无房间，创建一个吧"}):o.jsx("div",{className:"ol-room-list",children:a.map(V=>o.jsxs("div",{className:"ol-room-row",children:[o.jsx("span",{className:"ol-room-row__code",children:V.roomCode}),o.jsx("span",{className:"ol-room-row__host",children:V.hostName}),o.jsx("span",{className:`ol-room-row__status ol-room-row__status--${V.status}`,children:Lb[V.status]??V.status}),o.jsxs("span",{className:"ol-room-row__count",children:[V.playerCount,"/",V.maxPlayers]}),V.hasPassword&&o.jsx("span",{className:"ol-room-row__lock",title:"需要密码",children:"🔒"}),V.status==="lobby"?o.jsx("button",{className:"ol-room-row__join",onClick:()=>U(V.roomCode,V.hasPassword),children:"加入"}):o.jsx("button",{className:"ol-room-row__join",onClick:()=>s==null?void 0:s(V.roomCode),disabled:!s,children:"观战"})]},V.roomCode))})]}),o.jsx("button",{className:"ol-btn ol-btn--back",onClick:e,children:"返回主菜单"})]}),o.jsx("style",{children:Ob})]})}const Ob=`
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
`;function Kb({room:e,localPlayerId:n,connectionStatus:t,lastError:a,send:r,onLeave:s}){var D;const[i,l]=j.useState(""),d=e.slots.find(k=>k.playerId===n),u=n!=null&&n===((D=e.slots[0])==null?void 0:D.playerId),p=(d==null?void 0:d.isReady)??!1,m=e.slots.filter(k=>k.type!=="empty"),g=m.length>=2&&m.every(k=>k.isReady),x=e.slots.filter(k=>k.type!=="empty"&&k.playerId!==n).map(k=>k.unitId),h=j.useState(!1);j.useEffect(()=>{if(h[0]||!n)return;if(d!=null&&d.unitId&&d.unitId!=="TR"){l(d.unitId),h[1](!0);return}const k=X.filter(C=>!x.includes(C.id));if(k.length>0){const C=k[Math.floor(Math.random()*k.length)];l(C.id),r({type:"LOBBY_ACTION",action:{type:"SELECT_UNIT",playerId:n,unitId:C.id}}),h[1](!0)}},[n]);function f(k){l(k),r({type:"LOBBY_ACTION",action:{type:"SELECT_UNIT",playerId:n,unitId:k}})}function _(){const k=X.filter(A=>!x.includes(A.id)&&A.id!==i);if(k.length===0)return;const C=k[Math.floor(Math.random()*k.length)];f(C.id)}function b(){r({type:p?"UNREADY":"READY"})}function v(){r({type:"START_GAME"})}function y(k,C){r({type:"SET_SLOT_TYPE",playerId:k,slotType:C})}function w(k){r({type:"KICK_PLAYER",playerId:k})}function T(){r({type:"LEAVE_ROOM"}),s()}return o.jsxs("div",{className:"rm-screen",children:[o.jsxs("div",{className:"rm-center",children:[o.jsxs("div",{className:"rm-header",children:[o.jsx("h2",{className:"rm-room-title",children:"房间"}),o.jsx("div",{className:"rm-room-code",children:e.roomCode}),e.hasPassword&&o.jsx("span",{className:"rm-lock",title:"有密码",children:"🔒"}),o.jsx("div",{className:"rm-room-status",children:t==="connected"?o.jsx("span",{className:"rm-status rm-status--ok",children:"已连接"}):o.jsx("span",{className:"rm-status rm-status--warn",children:t})})]}),a&&o.jsx("div",{className:"rm-error",children:a}),o.jsx("div",{className:"rm-slots",children:e.slots.map((k,C)=>o.jsx(Jb,{slot:k,isLocal:k.playerId===n,isHost:u,onSetSlotType:y,onKick:w},C))}),o.jsxs("div",{className:"rm-section",children:[o.jsxs("div",{className:"rm-section-header",children:[o.jsx("div",{className:"rm-section-title",children:"选择机体"}),o.jsx("button",{className:"rm-random-btn",onClick:_,title:"随机选择机体",children:"🎲 随机"})]}),o.jsx("div",{className:"rm-unit-grid",children:X.map(k=>{const C=i||(d==null?void 0:d.unitId),A=x.includes(k.id),S=C===k.id;return o.jsxs("button",{className:`rm-unit-btn${S?" rm-unit-btn--selected":""}${A?" rm-unit-btn--taken":""}`,onClick:()=>!A&&f(k.id),disabled:A,title:`${k.nameCn} (${k.nameJa}) - MOV:${k.movement} EVA:${k.evasion} ASL:${k.assault} INIT:${k.initiative}`,children:[o.jsx("span",{className:"rm-unit-code",children:k.id}),o.jsx("span",{className:"rm-unit-name",children:k.nameCn})]},k.id)})})]}),o.jsxs("div",{className:"rm-actions",children:[o.jsx("button",{className:`rm-btn${p?" rm-btn--unready":" rm-btn--ready"}`,onClick:b,children:p?"取消准备":"准备"}),u&&o.jsx("button",{className:"rm-btn rm-btn--start",onClick:v,disabled:!g,title:g?"开始游戏":"等待所有玩家准备",children:"开始游戏"}),o.jsx("button",{className:"rm-btn rm-btn--leave",onClick:T,children:"离开房间"})]})]}),o.jsx("style",{children:Bb})]})}function Jb({slot:e,isLocal:n,isHost:t,onSetSlotType:a,onKick:r}){const s=X.find(l=>l.id===e.unitId);if(e.type==="empty")return o.jsxs("div",{className:"rm-slot rm-slot--empty",children:[o.jsxs("span",{className:"rm-slot__index",children:["#",e.index+1]}),o.jsx("span",{className:"rm-slot__name",children:"空位"}),t&&o.jsx("button",{className:"rm-slot__toggle",onClick:()=>a(e.playerId,"ai"),children:"+AI"})]});const i=Mn[e.team%Mn.length][0];return o.jsxs("div",{className:`rm-slot${n?" rm-slot--local":""}${e.isConnected?"":" rm-slot--dc"}`,children:[o.jsx("span",{className:"rm-slot__color-dot",style:{background:i},title:`队伍 ${e.team+1}`}),o.jsxs("span",{className:"rm-slot__index",children:["#",e.index+1]}),o.jsx("span",{className:"rm-slot__type-badge",children:e.type==="ai"?"AI":""}),o.jsxs("span",{className:"rm-slot__name",children:[e.playerName||e.playerId,n&&" (你)"]}),o.jsx("span",{className:"rm-slot__unit",children:s?s.nameCn:e.unitId||"未选择"}),o.jsx("span",{className:`rm-slot__ready${e.isReady?" rm-slot__ready--yes":""}`,children:e.isReady?"已准备":"未准备"}),!e.isConnected&&o.jsx("span",{className:"rm-slot__dc",children:"断线"}),t&&e.type==="ai"&&o.jsx("button",{className:"rm-slot__toggle",onClick:()=>a(e.playerId,"empty"),children:"移除"}),t&&!n&&e.type==="human"&&r&&o.jsx("button",{className:"rm-slot__toggle rm-slot__toggle--kick",onClick:()=>r(e.playerId),children:"踢出"})]})}const Bb=`
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
`;function Fb(){return"wss://embryo-machine.onrender.com/"}const Gb=Fb();function Hb({onBack:e}){const[n]=j.useState(Gb),[t,a]=j.useState("lobby"),[r,s]=j.useState(null),i=j.useCallback((m,g)=>{s({type:"create",playerName:m,settings:g}),a("connected")},[]),l=j.useCallback((m,g,x)=>{s({type:"join",roomCode:m,playerName:g,password:x}),a("connected")},[]),d=j.useCallback(m=>{s({type:"spectate",roomCode:m}),a("connected")},[]),u=j.useCallback(()=>{t!=="connected"&&(s({type:"browse"}),a("connected"))},[t]),p=j.useCallback(()=>{s(null),a("lobby")},[]);return t==="lobby"?o.jsx(Wf,{onBack:e,onCreateRoom:i,onJoinRoom:l,onRefreshRooms:u,onSpectate:d}):o.jsx(Pb,{serverUrl:n,children:o.jsx(Ub,{pendingAction:r,onBack:e,onDisconnect:p})})}function Ub({pendingAction:e,onDisconnect:n}){const{state:t,room:a,localPlayerId:r,send:s,connectionStatus:i,lastError:l,roomList:d}=vc(),[u,p]=j.useState(!1);return!u&&i==="connected"&&e&&(e.type==="create"?s({type:"CREATE_ROOM",playerName:e.playerName,settings:e.settings}):e.type==="join"?s({type:"JOIN_ROOM",roomCode:e.roomCode,playerName:e.playerName,password:e.password}):e.type==="spectate"?s({type:"SPECTATE_ROOM",roomCode:e.roomCode}):e.type==="browse"&&s({type:"LIST_ROOMS"}),p(!0)),(e==null?void 0:e.type)==="browse"&&!a&&!t?o.jsx(Wf,{onBack:n,onCreateRoom:(m,g)=>{s({type:"CREATE_ROOM",playerName:m,settings:g})},onJoinRoom:(m,g,x)=>{s({type:"JOIN_ROOM",roomCode:m,playerName:g,password:x})},roomList:d,onRefreshRooms:()=>s({type:"LIST_ROOMS"})}):i==="connecting"?o.jsxs("div",{className:"og-connecting",children:[o.jsx("div",{className:"og-spinner"}),o.jsx("p",{children:"正在连接服务器…"}),o.jsx("button",{className:"ol-btn ol-btn--back",onClick:n,children:"取消"}),o.jsx("style",{children:jr})]}):a&&!t?o.jsx(Kb,{room:a,localPlayerId:r,connectionStatus:i,lastError:l,send:s,onLeave:n}):t&&r?o.jsx(Is,{children:o.jsx(Rb,{children:o.jsx(Wb,{})})}):t&&!r?o.jsx(Zb,{state:t,room:a,onLeave:n}):o.jsxs("div",{className:"og-connecting",children:[o.jsx("div",{className:"og-spinner"}),o.jsx("p",{children:"等待服务器响应…"}),l&&o.jsx("div",{className:"rm-error",children:l}),o.jsx("button",{className:"ol-btn ol-btn--back",onClick:n,children:"返回"}),o.jsx("style",{children:jr})]})}function Wb(){const e=$r(),{dispatch:n,aiConfig:t}=ke(),{localPlayerId:a,connectionStatus:r,plottingStatus:s,lastError:i,turnDeadline:l}=vc(),[d,u]=j.useState(null);j.useEffect(()=>{if(!l){u(null);return}const k=()=>{const A=Math.max(0,Math.ceil((l-Date.now())/1e3));u(A)};k();const C=setInterval(k,500);return()=>clearInterval(C)},[l]),j.useEffect(()=>{e.phase==="pregame"&&n({type:"START_PLOTTING"})},[e.phase,n]);const[p,m]=j.useState([{id:"map",zIndex:10},{id:"log",zIndex:11},{id:"mecha",zIndex:12},{id:"plot",zIndex:100}]),g=j.useCallback(k=>{m(C=>{const A=Math.max(...C.map(U=>U.zIndex)),S=C.find(U=>U.id===k);if(S&&S.zIndex===A)return C;const z=[...C].sort((U,V)=>U.zIndex-V.zIndex),M=10,E=new Map;let L=0;for(const U of z)U.id!==k&&E.set(U.id,M+L++);return E.set(k,M+z.length-1),C.map(U=>({...U,zIndex:E.get(U.id)??U.zIndex}))})},[]),x=k=>{var C;return((C=p.find(A=>A.id===k))==null?void 0:C.zIndex)??10},h=j.useCallback(k=>[],[]),f=Ns(),_=f?window.innerWidth:Math.max(400,Math.min(window.innerWidth*.6,620)),b=300,v=window.innerWidth-b-16,y=f?window.innerWidth:380,w=window.innerWidth-y-16,T=e.phase==="plotting"&&e.plottingStep!=="complete"&&e.plottingStep!==null&&!e.plottingStep.startsWith("transition_to_")&&!ze(t,e.plottingStep),D=o.jsxs("div",{className:"og-status-bar",children:[o.jsxs("span",{className:"og-round",children:["第 ",e.roundNumber," 回合"]}),o.jsx("span",{className:"og-phase",children:Zf(e.phase)}),e.currentTiming&&o.jsxs("span",{className:"og-timing",children:["▶ ",Yf(e.currentTiming)]}),!f&&e.turnOrder.length>0&&o.jsxs("span",{className:"og-debug-info",title:"当前行动顺序",children:["[",e.turnOrder.map(k=>k.replace("player","P")).join("→"),"]"]}),d!==null&&d>0&&o.jsxs("span",{className:`og-countdown${d<=10?" og-countdown--warn":""}`,children:["⏱ ",d,"s"]}),o.jsx("span",{style:{flex:1}}),s&&e.phase==="plotting"&&o.jsxs("span",{className:"og-plotting",children:["布局进度: ",s.confirmed.length,"/",s.total]}),!f&&o.jsx("button",{className:"og-export-btn",onClick:()=>Hf(e,{localPlayerId:a??void 0,connectionStatus:r}),title:"导出全量日志（含调试状态快照）",children:"📋 导出日志"}),o.jsx("span",{className:`og-conn og-conn--${r}`,children:r==="connected"?"在线":r}),a&&o.jsx("span",{className:"og-pid",children:a.replace("player","P")})]});return f?o.jsxs("div",{className:"game-screen game-screen--mobile",children:[D,i&&o.jsx("div",{className:"rm-error",style:{margin:"4px 12px 0"},children:i}),o.jsx("div",{className:"game-screen__board-mobile",children:o.jsx(Ia,{})}),o.jsxs("div",{className:"game-screen__panels-mobile",children:[T&&o.jsx(je,{id:"plot",title:"布局阶段",initialPos:{x:0,y:0},width:y,children:o.jsx(aa,{})}),o.jsx(je,{id:"mecha",title:"机体信息",initialPos:{x:0,y:0},defaultMinimized:!0,children:o.jsx(ts,{})}),o.jsx(je,{id:"log",title:"行动日志",initialPos:{x:0,y:0},defaultMinimized:!0,children:o.jsx(wr,{})})]}),o.jsx(qo,{}),o.jsx(es,{}),o.jsx("style",{children:jr})]}):o.jsxs("div",{className:"game-screen",style:{position:"relative",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[D,i&&o.jsx("div",{className:"rm-error",style:{margin:"4px 16px 0"},children:i}),o.jsxs("div",{style:{position:"relative",flex:1},children:[o.jsx(je,{id:"map",title:"地图",initialPos:{x:16,y:8},width:_,minHeight:300,zIndex:x("map"),onFocus:g,siblingRects:h("map"),children:o.jsx("div",{style:{height:"calc(100vh - 100px)",minHeight:300},children:o.jsx(Ia,{})})}),o.jsx(je,{id:"log",title:"行动日志",initialPos:{x:v,y:8},width:b,height:260,minHeight:120,zIndex:x("log"),onFocus:g,siblingRects:h("log"),children:o.jsx(wr,{})}),o.jsx(je,{id:"mecha",title:"机体信息",initialPos:{x:v,y:280},width:b,minHeight:160,zIndex:x("mecha"),onFocus:g,siblingRects:h("mecha"),children:o.jsx(ts,{})}),T&&o.jsx(je,{id:"plot",title:"布局阶段",initialPos:{x:w,y:8},width:y,height:620,minHeight:80,zIndex:x("plot"),onFocus:g,siblingRects:h("plot"),children:o.jsx(aa,{})})]}),o.jsx(qo,{}),o.jsx(es,{}),o.jsx("style",{children:jr})]})}function Zb({state:e,room:n,onLeave:t}){const a={player1:!0,player2:!0,player1Difficulty:"easy",player2Difficulty:"easy",playerAI:Object.fromEntries(e.playerIds.map(i=>[i,!0])),playerDifficulty:Object.fromEntries(e.playerIds.map(i=>[i,"easy"]))},r=()=>{},s={state:e,dispatch:r,rawDispatch:r,getCard:i=>ne(i),aiConfig:a,setAIConfig:()=>{},getReplayData:()=>null,autoSaveEnabled:!1,setAutoSaveEnabled:()=>{},exposureMode:!1,setExposureMode:()=>{},isOnline:!0,localPlayerId:null,currentTurnPlayerId:null};return o.jsx(Cs.Provider,{value:s,children:o.jsx(Is,{children:o.jsxs("div",{className:"game-screen",style:{position:"relative",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[o.jsxs("div",{className:"og-status-bar",children:[o.jsx("span",{className:"og-spectate-badge",children:"观战中"}),o.jsxs("span",{className:"og-round",children:["第 ",e.roundNumber," 回合"]}),o.jsx("span",{className:"og-phase",children:Zf(e.phase)}),e.currentTiming&&o.jsxs("span",{className:"og-timing",children:["▶ ",Yf(e.currentTiming)]}),o.jsx("span",{style:{flex:1}}),n&&o.jsx("span",{className:"og-room-code-badge",children:n.roomCode}),o.jsx("button",{className:"rm-btn rm-btn--leave",onClick:t,children:"离开"})]}),o.jsxs("div",{style:{position:"relative",flex:1},children:[o.jsx(je,{id:"map",title:"地图",initialPos:{x:16,y:8},width:Math.max(400,Math.min(window.innerWidth*.7,700)),minHeight:300,children:o.jsx("div",{style:{height:"calc(100vh - 100px)",minHeight:300},children:o.jsx(Ia,{})})}),o.jsx(je,{id:"log",title:"行动日志",initialPos:{x:window.innerWidth-316,y:8},width:300,height:400,minHeight:120,children:o.jsx(wr,{})})]}),o.jsx("style",{children:jr})]})})})}function Zf(e){return{pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"主要阶段 1",action_seg2:"主要阶段 2",cleanup:"清理阶段",game_over:"游戏结束"}[e]??e}function Yf(e){return{movement:"移动",ranged:"射击",melee:"近战",special:"特殊"}[e]??e}const jr=`
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
`;function Yb(){const e=$r(),{rawDispatch:n,aiConfig:t,setAIConfig:a,getReplayData:r,autoSaveEnabled:s,setAutoSaveEnabled:i,exposureMode:l,setExposureMode:d}=ke(),[u,p]=j.useState("home"),[m,g]=j.useState("map"),[x,h]=j.useState(!0),[f,_]=j.useState(2),[b,v]=j.useState(2),[y,w]=j.useState(null),[T,D]=j.useState({loaded:0,total:0}),k=j.useRef(null),C=j.useCallback(()=>{ge.init(),g("map"),p("game")},[]),A=j.useCallback(()=>{const E=Af().length;D({loaded:0,total:E}),w("asking")},[]),S=j.useCallback(()=>{w("loading");const E=new AbortController;k.current=E,Yx((L,U)=>{D({loaded:L,total:U}),L>=U&&setTimeout(()=>w(null),600)},E.signal)},[]),z=j.useCallback(()=>{var E;(E=k.current)==null||E.abort(),w(null)},[]);function M(E){n({type:"LOAD_GAME",state:E.gameState}),a(E.aiConfig),p("game")}return u==="rules"?o.jsx(Jv,{onBack:()=>p((e.phase==="setup","game"))}):u==="data"?o.jsx(Fv,{onBack:()=>p("game")}):u==="load"?o.jsx(qd,{mode:"load",onBack:()=>p("home"),onLoad:M}):u==="replay"?o.jsx(ib,{onBack:()=>p("home")}):u==="save"?o.jsx(qd,{mode:"save",onBack:()=>p("game"),currentState:e,aiConfig:t}):u==="mapEditor"?o.jsx(wb,{onBack:()=>p("home")}):u==="online"?o.jsx(Hb,{onBack:()=>p("home")}):u==="settings"?o.jsxs(o.Fragment,{children:[y!==null&&o.jsx(Bx,{phase:y,loaded:T.loaded,total:T.total,onConfirm:S,onSkip:z}),o.jsx(Kx,{onBack:()=>p("home"),soundEnabled:ge.enabled,onToggleSound:()=>{ge.enabled=!ge.enabled,D(E=>({...E}))},soundVolume:ge.volume,onVolumeChange:E=>{ge.volume=E,ge.init(),ge.uiBlip(),D(L=>({...L}))},exposureMode:l,onToggleExposure:()=>d(!l),autoFill:x,onToggleAutoFill:()=>h(!x),onCacheAssets:A})]}):u==="home"?o.jsx(Lx,{onStart:C,onOnlinePlay:()=>{ge.init(),p("online")},onViewRules:()=>p("rules"),onViewData:()=>p("data"),onLoadGame:()=>p("load"),onReplay:()=>p("replay"),onMapEditor:()=>p("mapEditor"),onSettings:()=>p("settings")}):e.phase==="setup"?m==="map"?o.jsx(Cx,{onNext:()=>g("units"),onBack:()=>p("home"),playerCount:f,setPlayerCount:_,teamCount:b,setTeamCount:v}):m==="units"?o.jsx(Tx,{onNext:()=>g("spawn"),onBack:()=>g("map"),autoFill:x}):o.jsx(Px,{onBack:()=>g("units")}):e.phase==="game_over"?o.jsx(qb,{onHome:()=>{p("home"),g("map")},onSaveReplay:()=>{const E=r();if(!E)return;const L=e.players.player1.isDefeated,U=e.players.player2.isDefeated,V=L&&U?"draw":L?"player2":U?"player1":null;try{xx(E.initialState,E.actions,V),alert("录像已保存！")}catch{alert("保存失败，存储空间可能不足。")}}}):o.jsx(Xb,{onSave:()=>p("save"),autoSaveEnabled:s,onToggleAutoSave:()=>i(!s)})}function Xb({onSave:e,autoSaveEnabled:n,onToggleAutoSave:t}){const a=$r(),{dispatch:r,exposureMode:s,getCard:i,aiConfig:l}=ke();j.useEffect(()=>{a.phase==="pregame"&&r({type:"START_PLOTTING"})},[a.phase,r]);const d=j.useRef(a.phase);j.useEffect(()=>{const D=d.current;if(d.current=a.phase,!!s&&D==="plotting"&&a.phase==="action_seg1"){const k=C=>{if(!C)return"无";const A=i(C.defId);return A?A.nameCn:C.defId};for(const C of a.playerIds){const A=a.players[C];if(A.isDefeated)continue;const S=`P${C.replace("player","")}`;r({type:"ADD_LOG",message:`[暴露] ${S} 布局: 段1=${k(A.plotSeg1)} / 段2=${k(A.plotSeg2)}`})}}},[a.phase]);const[u,p]=j.useState([{id:"map",zIndex:10},{id:"log",zIndex:11},{id:"mecha",zIndex:12},{id:"plot",zIndex:100}]),m=j.useRef(new Map),g=j.useCallback(D=>{p(k=>{const C=Math.max(...k.map(L=>L.zIndex)),A=k.find(L=>L.id===D);if(A&&A.zIndex===C)return k;const S=[...k].sort((L,U)=>L.zIndex-U.zIndex),z=10,M=new Map;let E=0;for(const L of S)L.id!==D&&M.set(L.id,z+E++);return M.set(D,z+S.length-1),k.map(L=>({...L,zIndex:M.get(L.id)??L.zIndex}))})},[]),x=D=>{var k;return((k=u.find(C=>C.id===D))==null?void 0:k.zIndex)??10},h=j.useCallback(D=>{const k=[];return m.current.forEach((C,A)=>{A!==D&&C&&k.push(C.getBoundingClientRect())}),k},[]),f=Ns(),_=f?window.innerWidth:Math.max(400,Math.min(window.innerWidth*.6,620)),b=300,v=window.innerWidth-b-16,y=36,w=f?window.innerWidth:380,T=window.innerWidth-w-16;if(f){const D=a.phase==="plotting"&&a.plottingStep!=="complete"&&a.plottingStep!==null&&!a.plottingStep.startsWith("transition_to_")&&!ze(l,a.plottingStep),k=a.phase==="plotting"&&a.plottingStep!=="complete"&&a.plottingStep!==null&&!a.plottingStep.startsWith("transition_to_")&&ze(l,a.plottingStep);return o.jsxs("div",{className:"game-screen game-screen--mobile",children:[o.jsx("div",{className:"game-screen__header",style:{flexShrink:0},children:o.jsx(lu,{onSave:e,autoSaveEnabled:n,onToggleAutoSave:t})}),o.jsxs("div",{className:"game-screen__board-mobile",children:[o.jsx(Ia,{}),o.jsx(cu,{})]}),o.jsxs("div",{className:"game-screen__panels-mobile",children:[D&&o.jsx(je,{id:"plot",title:"布局阶段",initialPos:{x:0,y:0},width:w,children:o.jsx(aa,{})}),k&&o.jsx("div",{style:{width:0,height:0,overflow:"hidden",opacity:0,pointerEvents:"none"},children:o.jsx(aa,{})}),o.jsx(je,{id:"mecha",title:"机体信息",initialPos:{x:0,y:0},defaultMinimized:!0,children:o.jsx(ts,{})}),o.jsx(je,{id:"log",title:"行动日志",initialPos:{x:0,y:0},defaultMinimized:!0,children:o.jsx(wr,{})})]}),o.jsx(qo,{}),o.jsx(es,{}),o.jsx("style",{children:du})]})}return o.jsxs("div",{className:"game-screen",style:{position:"relative",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[o.jsx("div",{className:"game-screen__header",style:{flexShrink:0},children:o.jsx(lu,{onSave:e,autoSaveEnabled:n,onToggleAutoSave:t})}),o.jsxs("div",{style:{position:"relative",flex:1},children:[o.jsx(je,{id:"map",title:"地图",initialPos:{x:16,y:8},width:_,minHeight:300,zIndex:x("map"),onFocus:g,siblingRects:h("map"),children:o.jsx("div",{style:{height:`calc(100vh - ${y+60}px)`,minHeight:300},children:o.jsx(Ia,{})})}),o.jsx(je,{id:"log",title:"行动日志",initialPos:{x:v,y:8},width:b,height:260,minHeight:120,zIndex:x("log"),onFocus:g,siblingRects:h("log"),children:o.jsx(wr,{})}),o.jsx(je,{id:"mecha",title:"机体信息",initialPos:{x:v,y:280},width:b,minHeight:160,zIndex:x("mecha"),onFocus:g,siblingRects:h("mecha"),children:o.jsx(ts,{})}),a.phase==="plotting"&&a.plottingStep!=="complete"&&a.plottingStep!==null&&!a.plottingStep.startsWith("transition_to_")&&!ze(l,a.plottingStep)&&o.jsx(je,{id:"plot",title:"布局阶段",initialPos:{x:T,y:8},width:w,height:620,minHeight:80,zIndex:x("plot"),onFocus:g,siblingRects:h("plot"),children:o.jsx(aa,{})}),a.phase==="plotting"&&a.plottingStep!=="complete"&&a.plottingStep!==null&&!a.plottingStep.startsWith("transition_to_")&&ze(l,a.plottingStep)&&o.jsx("div",{style:{position:"absolute",width:0,height:0,overflow:"hidden",opacity:0,pointerEvents:"none"},children:o.jsx(aa,{})})]}),o.jsx(qo,{}),o.jsx(es,{}),o.jsx(cu,{}),o.jsx("style",{children:du})]})}function lu({onSave:e,autoSaveEnabled:n,onToggleAutoSave:t}){const a=$r(),r={pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"行动阶段 [主要阶段 1]",action_seg2:"行动阶段 [主要阶段 2]",cleanup:"清理阶段",game_over:"游戏结束"},s={movement:"移动",ranged:"射击",melee:"近战",special:"特殊"};return o.jsxs("div",{className:"phase-bar",children:[o.jsxs("span",{className:"phase-bar__round",children:["第 ",a.roundNumber," 回合"]}),o.jsx("span",{className:"phase-bar__phase",children:r[a.phase]??a.phase}),a.currentTiming&&o.jsxs("span",{className:"phase-bar__timing",children:["▶ ",s[a.currentTiming]??a.currentTiming]}),o.jsx("span",{style:{flex:1}}),o.jsx("button",{className:"phase-bar__autosave-btn",onClick:t,title:n?"自动存档已开启（点击关闭）":"自动存档已关闭（点击开启）",children:n?"💾 自动":"💾 关"}),o.jsx("button",{className:"phase-bar__save-btn",onClick:e,title:"保存游戏",children:"💾 保存"}),o.jsx("button",{className:"phase-bar__save-btn",onClick:()=>Hf(a),title:"导出全量日志（含调试状态快照）",children:"📋 日志"})]})}function Qb(e){return e.startsWith("[DBG]")?"log-panel__entry log-panel__entry--debug":e.startsWith("===")?"log-panel__entry log-panel__entry--round-start":e.startsWith("---")?"log-panel__entry log-panel__entry--round-end":e.includes("发动")||e.includes("攻击")?"log-panel__entry log-panel__entry--attack":e.includes("摧毁")||e.includes("连锁")||e.includes("诱爆")?"log-panel__entry log-panel__entry--damage":e.includes("移动到")?"log-panel__entry log-panel__entry--move":e.includes("获胜")||e.includes("击破")||e.includes("平局")?"log-panel__entry log-panel__entry--victory":"log-panel__entry"}function wr(){const e=$r();return o.jsx("div",{className:"log-panel",children:o.jsx("div",{className:"log-panel__entries",children:[...e.log].filter(n=>!n.startsWith("[DBG]")).reverse().map((n,t)=>o.jsx("div",{className:Qb(n),children:n},t))})})}function qb({onHome:e,onSaveReplay:n}){const{state:t,dispatch:a}=ke(),r=t.log[t.log.length-1]??"游戏结束",s=t.players.player1.isDefeated,i=t.players.player2.isDefeated,l=s&&i?"双方同时击破":s?"玩家 2 获胜":"玩家 1 获胜";function d(){a({type:"RESET_GAME"}),e()}return o.jsxs("div",{className:"gameover-screen",children:[o.jsx("div",{className:"gameover-icon",children:"💥"}),o.jsx("h1",{className:"gameover-title",children:l}),o.jsx("p",{className:"gameover-sub",children:r}),o.jsxs("div",{className:"gameover-actions",children:[o.jsx("button",{className:"gameover-restart",onClick:d,children:"返回主菜单"}),o.jsx("button",{className:"gameover-save-replay",onClick:n,children:"🎬 保存录像"})]}),o.jsx("style",{children:n1})]})}function cu(){const{isAnimating:e,skipAnimation:n}=zr();return e?o.jsx("button",{className:"skip-anim-btn",onClick:n,children:"⏩ 跳过"}):null}function e1(){return o.jsx(Is,{children:o.jsx(zf,{children:o.jsx(Yb,{})})})}const du=`
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
`,n1=`
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
`;ci.createRoot(document.getElementById("root")).render(o.jsx(hm.StrictMode,{children:o.jsx(e1,{})}));

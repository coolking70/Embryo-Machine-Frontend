var mf=Object.defineProperty;var ff=(e,n,t)=>n in e?mf(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var en=(e,n,t)=>ff(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function gf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ju={exports:{}},ps={},wu={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tr=Symbol.for("react.element"),hf=Symbol.for("react.portal"),xf=Symbol.for("react.fragment"),bf=Symbol.for("react.strict_mode"),vf=Symbol.for("react.profiler"),yf=Symbol.for("react.provider"),_f=Symbol.for("react.context"),If=Symbol.for("react.forward_ref"),kf=Symbol.for("react.suspense"),jf=Symbol.for("react.memo"),wf=Symbol.for("react.lazy"),Dc=Symbol.iterator;function Sf(e){return e===null||typeof e!="object"?null:(e=Dc&&e[Dc]||e["@@iterator"],typeof e=="function"?e:null)}var Su={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cu=Object.assign,Nu={};function Na(e,n,t){this.props=e,this.context=n,this.refs=Nu,this.updater=t||Su}Na.prototype.isReactComponent={};Na.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Na.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tu(){}Tu.prototype=Na.prototype;function jl(e,n,t){this.props=e,this.context=n,this.refs=Nu,this.updater=t||Su}var wl=jl.prototype=new Tu;wl.constructor=jl;Cu(wl,Na.prototype);wl.isPureReactComponent=!0;var $c=Array.isArray,Mu=Object.prototype.hasOwnProperty,Sl={current:null},Eu={key:!0,ref:!0,__self:!0,__source:!0};function Du(e,n,t){var a,r={},s=null,i=null;if(n!=null)for(a in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(s=""+n.key),n)Mu.call(n,a)&&!Eu.hasOwnProperty(a)&&(r[a]=n[a]);var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){for(var d=Array(l),u=0;u<l;u++)d[u]=arguments[u+2];r.children=d}if(e&&e.defaultProps)for(a in l=e.defaultProps,l)r[a]===void 0&&(r[a]=l[a]);return{$$typeof:Tr,type:e,key:s,ref:i,props:r,_owner:Sl.current}}function Cf(e,n){return{$$typeof:Tr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Cl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Tr}function Nf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ac=/\/+/g;function Ks(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Nf(""+e.key):n.toString(36)}function co(e,n,t,a,r){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Tr:case hf:i=!0}}if(i)return i=e,r=r(i),e=a===""?"."+Ks(i,0):a,$c(r)?(t="",e!=null&&(t=e.replace(Ac,"$&/")+"/"),co(r,n,t,"",function(u){return u})):r!=null&&(Cl(r)&&(r=Cf(r,t+(!r.key||i&&i.key===r.key?"":(""+r.key).replace(Ac,"$&/")+"/")+e)),n.push(r)),1;if(i=0,a=a===""?".":a+":",$c(e))for(var l=0;l<e.length;l++){s=e[l];var d=a+Ks(s,l);i+=co(s,n,t,d,r)}else if(d=Sf(e),typeof d=="function")for(e=d.call(e),l=0;!(s=e.next()).done;)s=s.value,d=a+Ks(s,l++),i+=co(s,n,t,d,r);else if(s==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function Lr(e,n,t){if(e==null)return e;var a=[],r=0;return co(e,a,"","",function(s){return n.call(t,s,r++)}),a}function Tf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var He={current:null},uo={transition:null},Mf={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:uo,ReactCurrentOwner:Sl};function $u(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:Lr,forEach:function(e,n,t){Lr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Lr(e,function(){n++}),n},toArray:function(e){return Lr(e,function(n){return n})||[]},only:function(e){if(!Cl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ae.Component=Na;ae.Fragment=xf;ae.Profiler=vf;ae.PureComponent=jl;ae.StrictMode=bf;ae.Suspense=kf;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mf;ae.act=$u;ae.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=Cu({},e.props),r=e.key,s=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(s=n.ref,i=Sl.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in n)Mu.call(n,d)&&!Eu.hasOwnProperty(d)&&(a[d]=n[d]===void 0&&l!==void 0?l[d]:n[d])}var d=arguments.length-2;if(d===1)a.children=t;else if(1<d){l=Array(d);for(var u=0;u<d;u++)l[u]=arguments[u+2];a.children=l}return{$$typeof:Tr,type:e.type,key:r,ref:s,props:a,_owner:i}};ae.createContext=function(e){return e={$$typeof:_f,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yf,_context:e},e.Consumer=e};ae.createElement=Du;ae.createFactory=function(e){var n=Du.bind(null,e);return n.type=e,n};ae.createRef=function(){return{current:null}};ae.forwardRef=function(e){return{$$typeof:If,render:e}};ae.isValidElement=Cl;ae.lazy=function(e){return{$$typeof:wf,_payload:{_status:-1,_result:e},_init:Tf}};ae.memo=function(e,n){return{$$typeof:jf,type:e,compare:n===void 0?null:n}};ae.startTransition=function(e){var n=uo.transition;uo.transition={};try{e()}finally{uo.transition=n}};ae.unstable_act=$u;ae.useCallback=function(e,n){return He.current.useCallback(e,n)};ae.useContext=function(e){return He.current.useContext(e)};ae.useDebugValue=function(){};ae.useDeferredValue=function(e){return He.current.useDeferredValue(e)};ae.useEffect=function(e,n){return He.current.useEffect(e,n)};ae.useId=function(){return He.current.useId()};ae.useImperativeHandle=function(e,n,t){return He.current.useImperativeHandle(e,n,t)};ae.useInsertionEffect=function(e,n){return He.current.useInsertionEffect(e,n)};ae.useLayoutEffect=function(e,n){return He.current.useLayoutEffect(e,n)};ae.useMemo=function(e,n){return He.current.useMemo(e,n)};ae.useReducer=function(e,n,t){return He.current.useReducer(e,n,t)};ae.useRef=function(e){return He.current.useRef(e)};ae.useState=function(e){return He.current.useState(e)};ae.useSyncExternalStore=function(e,n,t){return He.current.useSyncExternalStore(e,n,t)};ae.useTransition=function(){return He.current.useTransition()};ae.version="18.3.1";wu.exports=ae;var k=wu.exports;const Ef=gf(k);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Df=k,$f=Symbol.for("react.element"),Af=Symbol.for("react.fragment"),zf=Object.prototype.hasOwnProperty,Pf=Df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vf={key:!0,ref:!0,__self:!0,__source:!0};function Au(e,n,t){var a,r={},s=null,i=null;t!==void 0&&(s=""+t),n.key!==void 0&&(s=""+n.key),n.ref!==void 0&&(i=n.ref);for(a in n)zf.call(n,a)&&!Vf.hasOwnProperty(a)&&(r[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps,n)r[a]===void 0&&(r[a]=n[a]);return{$$typeof:$f,type:e,key:s,ref:i,props:r,_owner:Pf.current}}ps.Fragment=Af;ps.jsx=Au;ps.jsxs=Au;ju.exports=ps;var o=ju.exports,vi={},zu={exports:{}},sn={},Pu={exports:{}},Vu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(R,A){var B=R.length;R.push(A);e:for(;0<B;){var P=B-1>>>1,F=R[P];if(0<r(F,A))R[P]=A,R[B]=F,B=P;else break e}}function t(R){return R.length===0?null:R[0]}function a(R){if(R.length===0)return null;var A=R[0],B=R.pop();if(B!==A){R[0]=B;e:for(var P=0,F=R.length,G=F>>>1;P<G;){var X=2*(P+1)-1,Q=R[X],se=X+1,le=R[se];if(0>r(Q,B))se<F&&0>r(le,Q)?(R[P]=le,R[se]=B,P=se):(R[P]=Q,R[X]=B,P=X);else if(se<F&&0>r(le,B))R[P]=le,R[se]=B,P=se;else break e}}return A}function r(R,A){var B=R.sortIndex-A.sortIndex;return B!==0?B:R.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var d=[],u=[],f=1,m=null,g=3,h=!1,x=!1,p=!1,_=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(R){for(var A=t(u);A!==null;){if(A.callback===null)a(u);else if(A.startTime<=R)a(u),A.sortIndex=A.expirationTime,n(d,A);else break;A=t(u)}}function I(R){if(p=!1,v(R),!x)if(t(d)!==null)x=!0,M(S);else{var A=t(u);A!==null&&V(I,A.startTime-R)}}function S(R,A){x=!1,p&&(p=!1,y(N),N=-1),h=!0;var B=g;try{for(v(A),m=t(d);m!==null&&(!(m.expirationTime>A)||R&&!J());){var P=m.callback;if(typeof P=="function"){m.callback=null,g=m.priorityLevel;var F=P(m.expirationTime<=A);A=e.unstable_now(),typeof F=="function"?m.callback=F:m===t(d)&&a(d),v(A)}else a(d);m=t(d)}if(m!==null)var G=!0;else{var X=t(u);X!==null&&V(I,X.startTime-A),G=!1}return G}finally{m=null,g=B,h=!1}}var C=!1,w=null,N=-1,z=5,E=-1;function J(){return!(e.unstable_now()-E<z)}function D(){if(w!==null){var R=e.unstable_now();E=R;var A=!0;try{A=w(!0,R)}finally{A?$():(C=!1,w=null)}}else C=!1}var $;if(typeof b=="function")$=function(){b(D)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,K=L.port2;L.port1.onmessage=D,$=function(){K.postMessage(null)}}else $=function(){_(D,0)};function M(R){w=R,C||(C=!0,$())}function V(R,A){N=_(function(){R(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){x||h||(x=!0,M(S))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(d)},e.unstable_next=function(R){switch(g){case 1:case 2:case 3:var A=3;break;default:A=g}var B=g;g=A;try{return R()}finally{g=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,A){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var B=g;g=R;try{return A()}finally{g=B}},e.unstable_scheduleCallback=function(R,A,B){var P=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?P+B:P):B=P,R){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=B+F,R={id:f++,callback:A,priorityLevel:R,startTime:B,expirationTime:F,sortIndex:-1},B>P?(R.sortIndex=B,n(u,R),t(d)===null&&R===t(u)&&(p?(y(N),N=-1):p=!0,V(I,B-P))):(R.sortIndex=F,n(d,R),x||h||(x=!0,M(S))),R},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(R){var A=g;return function(){var B=g;g=A;try{return R.apply(this,arguments)}finally{g=B}}}})(Vu);Pu.exports=Vu;var Rf=Pu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lf=k,on=Rf;function W(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ru=new Set,ir={};function Vt(e,n){xa(e,n),xa(e+"Capture",n)}function xa(e,n){for(ir[e]=n,e=0;e<n.length;e++)Ru.add(n[e])}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yi=Object.prototype.hasOwnProperty,Of=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zc={},Pc={};function Kf(e){return yi.call(Pc,e)?!0:yi.call(zc,e)?!1:Of.test(e)?Pc[e]=!0:(zc[e]=!0,!1)}function Jf(e,n,t,a){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bf(e,n,t,a){if(n===null||typeof n>"u"||Jf(e,n,t,a))return!0;if(a)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ue(e,n,t,a,r,s,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=s,this.removeEmptyString=i}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pe[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Pe[n]=new Ue(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pe[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pe[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pe[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pe[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pe[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pe[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pe[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Nl=/[\-:]([a-z])/g;function Tl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Nl,Tl);Pe[n]=new Ue(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Nl,Tl);Pe[n]=new Ue(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Nl,Tl);Pe[n]=new Ue(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pe[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pe[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ml(e,n,t,a){var r=Pe.hasOwnProperty(n)?Pe[n]:null;(r!==null?r.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Bf(n,t,r,a)&&(t=null),a||r===null?Kf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,a=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,a?e.setAttributeNS(a,n,t):e.setAttribute(n,t))))}var Wn=Lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Or=Symbol.for("react.element"),Wt=Symbol.for("react.portal"),Zt=Symbol.for("react.fragment"),El=Symbol.for("react.strict_mode"),_i=Symbol.for("react.profiler"),Lu=Symbol.for("react.provider"),Ou=Symbol.for("react.context"),Dl=Symbol.for("react.forward_ref"),Ii=Symbol.for("react.suspense"),ki=Symbol.for("react.suspense_list"),$l=Symbol.for("react.memo"),Xn=Symbol.for("react.lazy"),Ku=Symbol.for("react.offscreen"),Vc=Symbol.iterator;function Aa(e){return e===null||typeof e!="object"?null:(e=Vc&&e[Vc]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Object.assign,Js;function Ha(e){if(Js===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Js=n&&n[1]||""}return`
`+Js+e}var Bs=!1;function Fs(e,n){if(!e||Bs)return"";Bs=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var a=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){a=u}e.call(n.prototype)}else{try{throw Error()}catch(u){a=u}e()}}catch(u){if(u&&a&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=a.stack.split(`
`),i=r.length-1,l=s.length-1;1<=i&&0<=l&&r[i]!==s[l];)l--;for(;1<=i&&0<=l;i--,l--)if(r[i]!==s[l]){if(i!==1||l!==1)do if(i--,l--,0>l||r[i]!==s[l]){var d=`
`+r[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=l);break}}}finally{Bs=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Ha(e):""}function Ff(e){switch(e.tag){case 5:return Ha(e.type);case 16:return Ha("Lazy");case 13:return Ha("Suspense");case 19:return Ha("SuspenseList");case 0:case 2:case 15:return e=Fs(e.type,!1),e;case 11:return e=Fs(e.type.render,!1),e;case 1:return e=Fs(e.type,!0),e;default:return""}}function ji(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zt:return"Fragment";case Wt:return"Portal";case _i:return"Profiler";case El:return"StrictMode";case Ii:return"Suspense";case ki:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ou:return(e.displayName||"Context")+".Consumer";case Lu:return(e._context.displayName||"Context")+".Provider";case Dl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $l:return n=e.displayName||null,n!==null?n:ji(e.type)||"Memo";case Xn:n=e._payload,e=e._init;try{return ji(e(n))}catch{}}return null}function Gf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ji(n);case 8:return n===El?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ju(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Hf(e){var n=Ju(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(i){a=""+i,s.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Kr(e){e._valueTracker||(e._valueTracker=Hf(e))}function Bu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Ju(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function Co(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wi(e,n){var t=n.checked;return ye({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Rc(e,n){var t=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;t=mt(n.value!=null?n.value:t),e._wrapperState={initialChecked:a,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Fu(e,n){n=n.checked,n!=null&&Ml(e,"checked",n,!1)}function Si(e,n){Fu(e,n);var t=mt(n.value),a=n.type;if(t!=null)a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ci(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ci(e,n.type,mt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Lc(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ci(e,n,t){(n!=="number"||Co(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ua=Array.isArray;function ca(e,n,t,a){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&a&&(e[t].defaultSelected=!0)}else{for(t=""+mt(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function Ni(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(W(91));return ye({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Oc(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(W(92));if(Ua(t)){if(1<t.length)throw Error(W(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:mt(t)}}function Gu(e,n){var t=mt(n.value),a=mt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),a!=null&&(e.defaultValue=""+a)}function Kc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Hu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ti(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Hu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Jr,Uu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,a,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,a,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Jr=Jr||document.createElement("div"),Jr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Jr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function lr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uf=["Webkit","ms","Moz","O"];Object.keys(Ya).forEach(function(e){Uf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ya[n]=Ya[e]})});function Wu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ya.hasOwnProperty(e)&&Ya[e]?(""+n).trim():n+"px"}function Zu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var a=t.indexOf("--")===0,r=Wu(t,n[t],a);t==="float"&&(t="cssFloat"),a?e.setProperty(t,r):e[t]=r}}var Wf=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mi(e,n){if(n){if(Wf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(W(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(W(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(W(61))}if(n.style!=null&&typeof n.style!="object")throw Error(W(62))}}function Ei(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Di=null;function Al(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $i=null,da=null,ua=null;function Jc(e){if(e=Dr(e)){if(typeof $i!="function")throw Error(W(280));var n=e.stateNode;n&&(n=xs(n),$i(e.stateNode,e.type,n))}}function Yu(e){da?ua?ua.push(e):ua=[e]:da=e}function Xu(){if(da){var e=da,n=ua;if(ua=da=null,Jc(e),n)for(e=0;e<n.length;e++)Jc(n[e])}}function Qu(e,n){return e(n)}function qu(){}var Gs=!1;function ep(e,n,t){if(Gs)return e(n,t);Gs=!0;try{return Qu(e,n,t)}finally{Gs=!1,(da!==null||ua!==null)&&(qu(),Xu())}}function cr(e,n){var t=e.stateNode;if(t===null)return null;var a=xs(t);if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(W(231,n,typeof t));return t}var Ai=!1;if(Fn)try{var za={};Object.defineProperty(za,"passive",{get:function(){Ai=!0}}),window.addEventListener("test",za,za),window.removeEventListener("test",za,za)}catch{Ai=!1}function Zf(e,n,t,a,r,s,i,l,d){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(f){this.onError(f)}}var Xa=!1,No=null,To=!1,zi=null,Yf={onError:function(e){Xa=!0,No=e}};function Xf(e,n,t,a,r,s,i,l,d){Xa=!1,No=null,Zf.apply(Yf,arguments)}function Qf(e,n,t,a,r,s,i,l,d){if(Xf.apply(this,arguments),Xa){if(Xa){var u=No;Xa=!1,No=null}else throw Error(W(198));To||(To=!0,zi=u)}}function Rt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function np(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Bc(e){if(Rt(e)!==e)throw Error(W(188))}function qf(e){var n=e.alternate;if(!n){if(n=Rt(e),n===null)throw Error(W(188));return n!==e?null:e}for(var t=e,a=n;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(a=r.return,a!==null){t=a;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Bc(r),e;if(s===a)return Bc(r),n;s=s.sibling}throw Error(W(188))}if(t.return!==a.return)t=r,a=s;else{for(var i=!1,l=r.child;l;){if(l===t){i=!0,t=r,a=s;break}if(l===a){i=!0,a=r,t=s;break}l=l.sibling}if(!i){for(l=s.child;l;){if(l===t){i=!0,t=s,a=r;break}if(l===a){i=!0,a=s,t=r;break}l=l.sibling}if(!i)throw Error(W(189))}}if(t.alternate!==a)throw Error(W(190))}if(t.tag!==3)throw Error(W(188));return t.stateNode.current===t?e:n}function tp(e){return e=qf(e),e!==null?ap(e):null}function ap(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ap(e);if(n!==null)return n;e=e.sibling}return null}var rp=on.unstable_scheduleCallback,Fc=on.unstable_cancelCallback,eg=on.unstable_shouldYield,ng=on.unstable_requestPaint,ke=on.unstable_now,tg=on.unstable_getCurrentPriorityLevel,zl=on.unstable_ImmediatePriority,op=on.unstable_UserBlockingPriority,Mo=on.unstable_NormalPriority,ag=on.unstable_LowPriority,sp=on.unstable_IdlePriority,ms=null,En=null;function rg(e){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(ms,e,void 0,(e.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:ig,og=Math.log,sg=Math.LN2;function ig(e){return e>>>=0,e===0?32:31-(og(e)/sg|0)|0}var Br=64,Fr=4194304;function Wa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Eo(e,n){var t=e.pendingLanes;if(t===0)return 0;var a=0,r=e.suspendedLanes,s=e.pingedLanes,i=t&268435455;if(i!==0){var l=i&~r;l!==0?a=Wa(l):(s&=i,s!==0&&(a=Wa(s)))}else i=t&~r,i!==0?a=Wa(i):s!==0&&(a=Wa(s));if(a===0)return 0;if(n!==0&&n!==a&&!(n&r)&&(r=a&-a,s=n&-n,r>=s||r===16&&(s&4194240)!==0))return n;if(a&4&&(a|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)t=31-jn(n),r=1<<t,a|=e[t],n&=~r;return a}function lg(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cg(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-jn(s),l=1<<i,d=r[i];d===-1?(!(l&t)||l&a)&&(r[i]=lg(l,n)):d<=n&&(e.expiredLanes|=l),s&=~l}}function Pi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ip(){var e=Br;return Br<<=1,!(Br&4194240)&&(Br=64),e}function Hs(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Mr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-jn(n),e[n]=t}function dg(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-jn(t),s=1<<r;n[r]=0,a[r]=-1,e[r]=-1,t&=~s}}function Pl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-jn(t),r=1<<a;r&n|e[a]&n&&(e[a]|=n),t&=~r}}var ce=0;function lp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var cp,Vl,dp,up,pp,Vi=!1,Gr=[],rt=null,ot=null,st=null,dr=new Map,ur=new Map,qn=[],ug="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gc(e,n){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":ot=null;break;case"mouseover":case"mouseout":st=null;break;case"pointerover":case"pointerout":dr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ur.delete(n.pointerId)}}function Pa(e,n,t,a,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:s,targetContainers:[r]},n!==null&&(n=Dr(n),n!==null&&Vl(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function pg(e,n,t,a,r){switch(n){case"focusin":return rt=Pa(rt,e,n,t,a,r),!0;case"dragenter":return ot=Pa(ot,e,n,t,a,r),!0;case"mouseover":return st=Pa(st,e,n,t,a,r),!0;case"pointerover":var s=r.pointerId;return dr.set(s,Pa(dr.get(s)||null,e,n,t,a,r)),!0;case"gotpointercapture":return s=r.pointerId,ur.set(s,Pa(ur.get(s)||null,e,n,t,a,r)),!0}return!1}function mp(e){var n=kt(e.target);if(n!==null){var t=Rt(n);if(t!==null){if(n=t.tag,n===13){if(n=np(t),n!==null){e.blockedOn=n,pp(e.priority,function(){dp(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function po(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ri(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);Di=a,t.target.dispatchEvent(a),Di=null}else return n=Dr(t),n!==null&&Vl(n),e.blockedOn=t,!1;n.shift()}return!0}function Hc(e,n,t){po(e)&&t.delete(n)}function mg(){Vi=!1,rt!==null&&po(rt)&&(rt=null),ot!==null&&po(ot)&&(ot=null),st!==null&&po(st)&&(st=null),dr.forEach(Hc),ur.forEach(Hc)}function Va(e,n){e.blockedOn===n&&(e.blockedOn=null,Vi||(Vi=!0,on.unstable_scheduleCallback(on.unstable_NormalPriority,mg)))}function pr(e){function n(r){return Va(r,e)}if(0<Gr.length){Va(Gr[0],e);for(var t=1;t<Gr.length;t++){var a=Gr[t];a.blockedOn===e&&(a.blockedOn=null)}}for(rt!==null&&Va(rt,e),ot!==null&&Va(ot,e),st!==null&&Va(st,e),dr.forEach(n),ur.forEach(n),t=0;t<qn.length;t++)a=qn[t],a.blockedOn===e&&(a.blockedOn=null);for(;0<qn.length&&(t=qn[0],t.blockedOn===null);)mp(t),t.blockedOn===null&&qn.shift()}var pa=Wn.ReactCurrentBatchConfig,Do=!0;function fg(e,n,t,a){var r=ce,s=pa.transition;pa.transition=null;try{ce=1,Rl(e,n,t,a)}finally{ce=r,pa.transition=s}}function gg(e,n,t,a){var r=ce,s=pa.transition;pa.transition=null;try{ce=4,Rl(e,n,t,a)}finally{ce=r,pa.transition=s}}function Rl(e,n,t,a){if(Do){var r=Ri(e,n,t,a);if(r===null)ti(e,n,a,$o,t),Gc(e,a);else if(pg(r,e,n,t,a))a.stopPropagation();else if(Gc(e,a),n&4&&-1<ug.indexOf(e)){for(;r!==null;){var s=Dr(r);if(s!==null&&cp(s),s=Ri(e,n,t,a),s===null&&ti(e,n,a,$o,t),s===r)break;r=s}r!==null&&a.stopPropagation()}else ti(e,n,a,null,t)}}var $o=null;function Ri(e,n,t,a){if($o=null,e=Al(a),e=kt(e),e!==null)if(n=Rt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=np(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return $o=e,null}function fp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tg()){case zl:return 1;case op:return 4;case Mo:case ag:return 16;case sp:return 536870912;default:return 16}default:return 16}}var tt=null,Ll=null,mo=null;function gp(){if(mo)return mo;var e,n=Ll,t=n.length,a,r="value"in tt?tt.value:tt.textContent,s=r.length;for(e=0;e<t&&n[e]===r[e];e++);var i=t-e;for(a=1;a<=i&&n[t-a]===r[s-a];a++);return mo=r.slice(e,1<a?1-a:void 0)}function fo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Hr(){return!0}function Uc(){return!1}function ln(e){function n(t,a,r,s,i){this._reactName=t,this._targetInst=r,this.type=a,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Hr:Uc,this.isPropagationStopped=Uc,this}return ye(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Hr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Hr)},persist:function(){},isPersistent:Hr}),n}var Ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=ln(Ta),Er=ye({},Ta,{view:0,detail:0}),hg=ln(Er),Us,Ws,Ra,fs=ye({},Er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ra&&(Ra&&e.type==="mousemove"?(Us=e.screenX-Ra.screenX,Ws=e.screenY-Ra.screenY):Ws=Us=0,Ra=e),Us)},movementY:function(e){return"movementY"in e?e.movementY:Ws}}),Wc=ln(fs),xg=ye({},fs,{dataTransfer:0}),bg=ln(xg),vg=ye({},Er,{relatedTarget:0}),Zs=ln(vg),yg=ye({},Ta,{animationName:0,elapsedTime:0,pseudoElement:0}),_g=ln(yg),Ig=ye({},Ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kg=ln(Ig),jg=ye({},Ta,{data:0}),Zc=ln(jg),wg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ng(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Cg[e])?!!n[e]:!1}function Kl(){return Ng}var Tg=ye({},Er,{key:function(e){if(e.key){var n=wg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=fo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kl,charCode:function(e){return e.type==="keypress"?fo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mg=ln(Tg),Eg=ye({},fs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yc=ln(Eg),Dg=ye({},Er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kl}),$g=ln(Dg),Ag=ye({},Ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),zg=ln(Ag),Pg=ye({},fs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vg=ln(Pg),Rg=[9,13,27,32],Jl=Fn&&"CompositionEvent"in window,Qa=null;Fn&&"documentMode"in document&&(Qa=document.documentMode);var Lg=Fn&&"TextEvent"in window&&!Qa,hp=Fn&&(!Jl||Qa&&8<Qa&&11>=Qa),Xc=" ",Qc=!1;function xp(e,n){switch(e){case"keyup":return Rg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yt=!1;function Og(e,n){switch(e){case"compositionend":return bp(n);case"keypress":return n.which!==32?null:(Qc=!0,Xc);case"textInput":return e=n.data,e===Xc&&Qc?null:e;default:return null}}function Kg(e,n){if(Yt)return e==="compositionend"||!Jl&&xp(e,n)?(e=gp(),mo=Ll=tt=null,Yt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return hp&&n.locale!=="ko"?null:n.data;default:return null}}var Jg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Jg[e.type]:n==="textarea"}function vp(e,n,t,a){Yu(a),n=Ao(n,"onChange"),0<n.length&&(t=new Ol("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var qa=null,mr=null;function Bg(e){Mp(e,0)}function gs(e){var n=qt(e);if(Bu(n))return e}function Fg(e,n){if(e==="change")return n}var yp=!1;if(Fn){var Ys;if(Fn){var Xs="oninput"in document;if(!Xs){var ed=document.createElement("div");ed.setAttribute("oninput","return;"),Xs=typeof ed.oninput=="function"}Ys=Xs}else Ys=!1;yp=Ys&&(!document.documentMode||9<document.documentMode)}function nd(){qa&&(qa.detachEvent("onpropertychange",_p),mr=qa=null)}function _p(e){if(e.propertyName==="value"&&gs(mr)){var n=[];vp(n,mr,e,Al(e)),ep(Bg,n)}}function Gg(e,n,t){e==="focusin"?(nd(),qa=n,mr=t,qa.attachEvent("onpropertychange",_p)):e==="focusout"&&nd()}function Hg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gs(mr)}function Ug(e,n){if(e==="click")return gs(n)}function Wg(e,n){if(e==="input"||e==="change")return gs(n)}function Zg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Sn=typeof Object.is=="function"?Object.is:Zg;function fr(e,n){if(Sn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var r=t[a];if(!yi.call(n,r)||!Sn(e[r],n[r]))return!1}return!0}function td(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ad(e,n){var t=td(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=td(t)}}function Ip(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ip(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function kp(){for(var e=window,n=Co();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Co(e.document)}return n}function Bl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Yg(e){var n=kp(),t=e.focusedElem,a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ip(t.ownerDocument.documentElement,t)){if(a!==null&&Bl(t)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,s=Math.min(a.start,r);a=a.end===void 0?s:Math.min(a.end,r),!e.extend&&s>a&&(r=a,a=s,s=r),r=ad(t,s);var i=ad(t,a);r&&i&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),s>a?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xg=Fn&&"documentMode"in document&&11>=document.documentMode,Xt=null,Li=null,er=null,Oi=!1;function rd(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Oi||Xt==null||Xt!==Co(a)||(a=Xt,"selectionStart"in a&&Bl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),er&&fr(er,a)||(er=a,a=Ao(Li,"onSelect"),0<a.length&&(n=new Ol("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Xt)))}function Ur(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Qt={animationend:Ur("Animation","AnimationEnd"),animationiteration:Ur("Animation","AnimationIteration"),animationstart:Ur("Animation","AnimationStart"),transitionend:Ur("Transition","TransitionEnd")},Qs={},jp={};Fn&&(jp=document.createElement("div").style,"AnimationEvent"in window||(delete Qt.animationend.animation,delete Qt.animationiteration.animation,delete Qt.animationstart.animation),"TransitionEvent"in window||delete Qt.transitionend.transition);function hs(e){if(Qs[e])return Qs[e];if(!Qt[e])return e;var n=Qt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in jp)return Qs[e]=n[t];return e}var wp=hs("animationend"),Sp=hs("animationiteration"),Cp=hs("animationstart"),Np=hs("transitionend"),Tp=new Map,od="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ht(e,n){Tp.set(e,n),Vt(n,[e])}for(var qs=0;qs<od.length;qs++){var ei=od[qs],Qg=ei.toLowerCase(),qg=ei[0].toUpperCase()+ei.slice(1);ht(Qg,"on"+qg)}ht(wp,"onAnimationEnd");ht(Sp,"onAnimationIteration");ht(Cp,"onAnimationStart");ht("dblclick","onDoubleClick");ht("focusin","onFocus");ht("focusout","onBlur");ht(Np,"onTransitionEnd");xa("onMouseEnter",["mouseout","mouseover"]);xa("onMouseLeave",["mouseout","mouseover"]);xa("onPointerEnter",["pointerout","pointerover"]);xa("onPointerLeave",["pointerout","pointerover"]);Vt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Za));function sd(e,n,t){var a=e.type||"unknown-event";e.currentTarget=t,Qf(a,n,void 0,e),e.currentTarget=null}function Mp(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],r=a.event;a=a.listeners;e:{var s=void 0;if(n)for(var i=a.length-1;0<=i;i--){var l=a[i],d=l.instance,u=l.currentTarget;if(l=l.listener,d!==s&&r.isPropagationStopped())break e;sd(r,l,u),s=d}else for(i=0;i<a.length;i++){if(l=a[i],d=l.instance,u=l.currentTarget,l=l.listener,d!==s&&r.isPropagationStopped())break e;sd(r,l,u),s=d}}}if(To)throw e=zi,To=!1,zi=null,e}function pe(e,n){var t=n[Gi];t===void 0&&(t=n[Gi]=new Set);var a=e+"__bubble";t.has(a)||(Ep(n,e,2,!1),t.add(a))}function ni(e,n,t){var a=0;n&&(a|=4),Ep(t,e,a,n)}var Wr="_reactListening"+Math.random().toString(36).slice(2);function gr(e){if(!e[Wr]){e[Wr]=!0,Ru.forEach(function(t){t!=="selectionchange"&&(e0.has(t)||ni(t,!1,e),ni(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Wr]||(n[Wr]=!0,ni("selectionchange",!1,n))}}function Ep(e,n,t,a){switch(fp(n)){case 1:var r=fg;break;case 4:r=gg;break;default:r=Rl}t=r.bind(null,n,t,e),r=void 0,!Ai||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function ti(e,n,t,a,r){var s=a;if(!(n&1)&&!(n&2)&&a!==null)e:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var l=a.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(i===4)for(i=a.return;i!==null;){var d=i.tag;if((d===3||d===4)&&(d=i.stateNode.containerInfo,d===r||d.nodeType===8&&d.parentNode===r))return;i=i.return}for(;l!==null;){if(i=kt(l),i===null)return;if(d=i.tag,d===5||d===6){a=s=i;continue e}l=l.parentNode}}a=a.return}ep(function(){var u=s,f=Al(t),m=[];e:{var g=Tp.get(e);if(g!==void 0){var h=Ol,x=e;switch(e){case"keypress":if(fo(t)===0)break e;case"keydown":case"keyup":h=Mg;break;case"focusin":x="focus",h=Zs;break;case"focusout":x="blur",h=Zs;break;case"beforeblur":case"afterblur":h=Zs;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Wc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=bg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=$g;break;case wp:case Sp:case Cp:h=_g;break;case Np:h=zg;break;case"scroll":h=hg;break;case"wheel":h=Vg;break;case"copy":case"cut":case"paste":h=kg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Yc}var p=(n&4)!==0,_=!p&&e==="scroll",y=p?g!==null?g+"Capture":null:g;p=[];for(var b=u,v;b!==null;){v=b;var I=v.stateNode;if(v.tag===5&&I!==null&&(v=I,y!==null&&(I=cr(b,y),I!=null&&p.push(hr(b,I,v)))),_)break;b=b.return}0<p.length&&(g=new h(g,x,null,t,f),m.push({event:g,listeners:p}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",g&&t!==Di&&(x=t.relatedTarget||t.fromElement)&&(kt(x)||x[Gn]))break e;if((h||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,h?(x=t.relatedTarget||t.toElement,h=u,x=x?kt(x):null,x!==null&&(_=Rt(x),x!==_||x.tag!==5&&x.tag!==6)&&(x=null)):(h=null,x=u),h!==x)){if(p=Wc,I="onMouseLeave",y="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(p=Yc,I="onPointerLeave",y="onPointerEnter",b="pointer"),_=h==null?g:qt(h),v=x==null?g:qt(x),g=new p(I,b+"leave",h,t,f),g.target=_,g.relatedTarget=v,I=null,kt(f)===u&&(p=new p(y,b+"enter",x,t,f),p.target=v,p.relatedTarget=_,I=p),_=I,h&&x)n:{for(p=h,y=x,b=0,v=p;v;v=Bt(v))b++;for(v=0,I=y;I;I=Bt(I))v++;for(;0<b-v;)p=Bt(p),b--;for(;0<v-b;)y=Bt(y),v--;for(;b--;){if(p===y||y!==null&&p===y.alternate)break n;p=Bt(p),y=Bt(y)}p=null}else p=null;h!==null&&id(m,g,h,p,!1),x!==null&&_!==null&&id(m,_,x,p,!0)}}e:{if(g=u?qt(u):window,h=g.nodeName&&g.nodeName.toLowerCase(),h==="select"||h==="input"&&g.type==="file")var S=Fg;else if(qc(g))if(yp)S=Wg;else{S=Hg;var C=Gg}else(h=g.nodeName)&&h.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=Ug);if(S&&(S=S(e,u))){vp(m,S,t,f);break e}C&&C(e,g,u),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&Ci(g,"number",g.value)}switch(C=u?qt(u):window,e){case"focusin":(qc(C)||C.contentEditable==="true")&&(Xt=C,Li=u,er=null);break;case"focusout":er=Li=Xt=null;break;case"mousedown":Oi=!0;break;case"contextmenu":case"mouseup":case"dragend":Oi=!1,rd(m,t,f);break;case"selectionchange":if(Xg)break;case"keydown":case"keyup":rd(m,t,f)}var w;if(Jl)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Yt?xp(e,t)&&(N="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(hp&&t.locale!=="ko"&&(Yt||N!=="onCompositionStart"?N==="onCompositionEnd"&&Yt&&(w=gp()):(tt=f,Ll="value"in tt?tt.value:tt.textContent,Yt=!0)),C=Ao(u,N),0<C.length&&(N=new Zc(N,e,null,t,f),m.push({event:N,listeners:C}),w?N.data=w:(w=bp(t),w!==null&&(N.data=w)))),(w=Lg?Og(e,t):Kg(e,t))&&(u=Ao(u,"onBeforeInput"),0<u.length&&(f=new Zc("onBeforeInput","beforeinput",null,t,f),m.push({event:f,listeners:u}),f.data=w))}Mp(m,n)})}function hr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ao(e,n){for(var t=n+"Capture",a=[];e!==null;){var r=e,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=cr(e,t),s!=null&&a.unshift(hr(e,s,r)),s=cr(e,n),s!=null&&a.push(hr(e,s,r))),e=e.return}return a}function Bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function id(e,n,t,a,r){for(var s=n._reactName,i=[];t!==null&&t!==a;){var l=t,d=l.alternate,u=l.stateNode;if(d!==null&&d===a)break;l.tag===5&&u!==null&&(l=u,r?(d=cr(t,s),d!=null&&i.unshift(hr(t,d,l))):r||(d=cr(t,s),d!=null&&i.push(hr(t,d,l)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var n0=/\r\n?/g,t0=/\u0000|\uFFFD/g;function ld(e){return(typeof e=="string"?e:""+e).replace(n0,`
`).replace(t0,"")}function Zr(e,n,t){if(n=ld(n),ld(e)!==n&&t)throw Error(W(425))}function zo(){}var Ki=null,Ji=null;function Bi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Fi=typeof setTimeout=="function"?setTimeout:void 0,a0=typeof clearTimeout=="function"?clearTimeout:void 0,cd=typeof Promise=="function"?Promise:void 0,r0=typeof queueMicrotask=="function"?queueMicrotask:typeof cd<"u"?function(e){return cd.resolve(null).then(e).catch(o0)}:Fi;function o0(e){setTimeout(function(){throw e})}function ai(e,n){var t=n,a=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(a===0){e.removeChild(r),pr(n);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=r}while(t);pr(n)}function it(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function dd(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Ma=Math.random().toString(36).slice(2),Tn="__reactFiber$"+Ma,xr="__reactProps$"+Ma,Gn="__reactContainer$"+Ma,Gi="__reactEvents$"+Ma,s0="__reactListeners$"+Ma,i0="__reactHandles$"+Ma;function kt(e){var n=e[Tn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Gn]||t[Tn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=dd(e);e!==null;){if(t=e[Tn])return t;e=dd(e)}return n}e=t,t=e.parentNode}return null}function Dr(e){return e=e[Tn]||e[Gn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(W(33))}function xs(e){return e[xr]||null}var Hi=[],ea=-1;function xt(e){return{current:e}}function me(e){0>ea||(e.current=Hi[ea],Hi[ea]=null,ea--)}function ue(e,n){ea++,Hi[ea]=e.current,e.current=n}var ft={},Je=xt(ft),Xe=xt(!1),Et=ft;function ba(e,n){var t=e.type.contextTypes;if(!t)return ft;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=n[s];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function Qe(e){return e=e.childContextTypes,e!=null}function Po(){me(Xe),me(Je)}function ud(e,n,t){if(Je.current!==ft)throw Error(W(168));ue(Je,n),ue(Xe,t)}function Dp(e,n,t){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return t;a=a.getChildContext();for(var r in a)if(!(r in n))throw Error(W(108,Gf(e)||"Unknown",r));return ye({},t,a)}function Vo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ft,Et=Je.current,ue(Je,e),ue(Xe,Xe.current),!0}function pd(e,n,t){var a=e.stateNode;if(!a)throw Error(W(169));t?(e=Dp(e,n,Et),a.__reactInternalMemoizedMergedChildContext=e,me(Xe),me(Je),ue(Je,e)):me(Xe),ue(Xe,t)}var Rn=null,bs=!1,ri=!1;function $p(e){Rn===null?Rn=[e]:Rn.push(e)}function l0(e){bs=!0,$p(e)}function bt(){if(!ri&&Rn!==null){ri=!0;var e=0,n=ce;try{var t=Rn;for(ce=1;e<t.length;e++){var a=t[e];do a=a(!0);while(a!==null)}Rn=null,bs=!1}catch(r){throw Rn!==null&&(Rn=Rn.slice(e+1)),rp(zl,bt),r}finally{ce=n,ri=!1}}return null}var na=[],ta=0,Ro=null,Lo=0,dn=[],un=0,Dt=null,On=1,Kn="";function yt(e,n){na[ta++]=Lo,na[ta++]=Ro,Ro=e,Lo=n}function Ap(e,n,t){dn[un++]=On,dn[un++]=Kn,dn[un++]=Dt,Dt=e;var a=On;e=Kn;var r=32-jn(a)-1;a&=~(1<<r),t+=1;var s=32-jn(n)+r;if(30<s){var i=r-r%5;s=(a&(1<<i)-1).toString(32),a>>=i,r-=i,On=1<<32-jn(n)+r|t<<r|a,Kn=s+e}else On=1<<s|t<<r|a,Kn=e}function Fl(e){e.return!==null&&(yt(e,1),Ap(e,1,0))}function Gl(e){for(;e===Ro;)Ro=na[--ta],na[ta]=null,Lo=na[--ta],na[ta]=null;for(;e===Dt;)Dt=dn[--un],dn[un]=null,Kn=dn[--un],dn[un]=null,On=dn[--un],dn[un]=null}var rn=null,an=null,ge=!1,kn=null;function zp(e,n){var t=pn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function md(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,rn=e,an=it(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,rn=e,an=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Dt!==null?{id:On,overflow:Kn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=pn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,rn=e,an=null,!0):!1;default:return!1}}function Ui(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wi(e){if(ge){var n=an;if(n){var t=n;if(!md(e,n)){if(Ui(e))throw Error(W(418));n=it(t.nextSibling);var a=rn;n&&md(e,n)?zp(a,t):(e.flags=e.flags&-4097|2,ge=!1,rn=e)}}else{if(Ui(e))throw Error(W(418));e.flags=e.flags&-4097|2,ge=!1,rn=e}}}function fd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rn=e}function Yr(e){if(e!==rn)return!1;if(!ge)return fd(e),ge=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Bi(e.type,e.memoizedProps)),n&&(n=an)){if(Ui(e))throw Pp(),Error(W(418));for(;n;)zp(e,n),n=it(n.nextSibling)}if(fd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(W(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){an=it(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}an=null}}else an=rn?it(e.stateNode.nextSibling):null;return!0}function Pp(){for(var e=an;e;)e=it(e.nextSibling)}function va(){an=rn=null,ge=!1}function Hl(e){kn===null?kn=[e]:kn.push(e)}var c0=Wn.ReactCurrentBatchConfig;function La(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(W(309));var a=t.stateNode}if(!a)throw Error(W(147,e));var r=a,s=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===s?n.ref:(n=function(i){var l=r.refs;i===null?delete l[s]:l[s]=i},n._stringRef=s,n)}if(typeof e!="string")throw Error(W(284));if(!t._owner)throw Error(W(290,e))}return e}function Xr(e,n){throw e=Object.prototype.toString.call(n),Error(W(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function gd(e){var n=e._init;return n(e._payload)}function Vp(e){function n(y,b){if(e){var v=y.deletions;v===null?(y.deletions=[b],y.flags|=16):v.push(b)}}function t(y,b){if(!e)return null;for(;b!==null;)n(y,b),b=b.sibling;return null}function a(y,b){for(y=new Map;b!==null;)b.key!==null?y.set(b.key,b):y.set(b.index,b),b=b.sibling;return y}function r(y,b){return y=ut(y,b),y.index=0,y.sibling=null,y}function s(y,b,v){return y.index=v,e?(v=y.alternate,v!==null?(v=v.index,v<b?(y.flags|=2,b):v):(y.flags|=2,b)):(y.flags|=1048576,b)}function i(y){return e&&y.alternate===null&&(y.flags|=2),y}function l(y,b,v,I){return b===null||b.tag!==6?(b=ui(v,y.mode,I),b.return=y,b):(b=r(b,v),b.return=y,b)}function d(y,b,v,I){var S=v.type;return S===Zt?f(y,b,v.props.children,I,v.key):b!==null&&(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Xn&&gd(S)===b.type)?(I=r(b,v.props),I.ref=La(y,b,v),I.return=y,I):(I=_o(v.type,v.key,v.props,null,y.mode,I),I.ref=La(y,b,v),I.return=y,I)}function u(y,b,v,I){return b===null||b.tag!==4||b.stateNode.containerInfo!==v.containerInfo||b.stateNode.implementation!==v.implementation?(b=pi(v,y.mode,I),b.return=y,b):(b=r(b,v.children||[]),b.return=y,b)}function f(y,b,v,I,S){return b===null||b.tag!==7?(b=Nt(v,y.mode,I,S),b.return=y,b):(b=r(b,v),b.return=y,b)}function m(y,b,v){if(typeof b=="string"&&b!==""||typeof b=="number")return b=ui(""+b,y.mode,v),b.return=y,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Or:return v=_o(b.type,b.key,b.props,null,y.mode,v),v.ref=La(y,null,b),v.return=y,v;case Wt:return b=pi(b,y.mode,v),b.return=y,b;case Xn:var I=b._init;return m(y,I(b._payload),v)}if(Ua(b)||Aa(b))return b=Nt(b,y.mode,v,null),b.return=y,b;Xr(y,b)}return null}function g(y,b,v,I){var S=b!==null?b.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:l(y,b,""+v,I);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Or:return v.key===S?d(y,b,v,I):null;case Wt:return v.key===S?u(y,b,v,I):null;case Xn:return S=v._init,g(y,b,S(v._payload),I)}if(Ua(v)||Aa(v))return S!==null?null:f(y,b,v,I,null);Xr(y,v)}return null}function h(y,b,v,I,S){if(typeof I=="string"&&I!==""||typeof I=="number")return y=y.get(v)||null,l(b,y,""+I,S);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Or:return y=y.get(I.key===null?v:I.key)||null,d(b,y,I,S);case Wt:return y=y.get(I.key===null?v:I.key)||null,u(b,y,I,S);case Xn:var C=I._init;return h(y,b,v,C(I._payload),S)}if(Ua(I)||Aa(I))return y=y.get(v)||null,f(b,y,I,S,null);Xr(b,I)}return null}function x(y,b,v,I){for(var S=null,C=null,w=b,N=b=0,z=null;w!==null&&N<v.length;N++){w.index>N?(z=w,w=null):z=w.sibling;var E=g(y,w,v[N],I);if(E===null){w===null&&(w=z);break}e&&w&&E.alternate===null&&n(y,w),b=s(E,b,N),C===null?S=E:C.sibling=E,C=E,w=z}if(N===v.length)return t(y,w),ge&&yt(y,N),S;if(w===null){for(;N<v.length;N++)w=m(y,v[N],I),w!==null&&(b=s(w,b,N),C===null?S=w:C.sibling=w,C=w);return ge&&yt(y,N),S}for(w=a(y,w);N<v.length;N++)z=h(w,y,N,v[N],I),z!==null&&(e&&z.alternate!==null&&w.delete(z.key===null?N:z.key),b=s(z,b,N),C===null?S=z:C.sibling=z,C=z);return e&&w.forEach(function(J){return n(y,J)}),ge&&yt(y,N),S}function p(y,b,v,I){var S=Aa(v);if(typeof S!="function")throw Error(W(150));if(v=S.call(v),v==null)throw Error(W(151));for(var C=S=null,w=b,N=b=0,z=null,E=v.next();w!==null&&!E.done;N++,E=v.next()){w.index>N?(z=w,w=null):z=w.sibling;var J=g(y,w,E.value,I);if(J===null){w===null&&(w=z);break}e&&w&&J.alternate===null&&n(y,w),b=s(J,b,N),C===null?S=J:C.sibling=J,C=J,w=z}if(E.done)return t(y,w),ge&&yt(y,N),S;if(w===null){for(;!E.done;N++,E=v.next())E=m(y,E.value,I),E!==null&&(b=s(E,b,N),C===null?S=E:C.sibling=E,C=E);return ge&&yt(y,N),S}for(w=a(y,w);!E.done;N++,E=v.next())E=h(w,y,N,E.value,I),E!==null&&(e&&E.alternate!==null&&w.delete(E.key===null?N:E.key),b=s(E,b,N),C===null?S=E:C.sibling=E,C=E);return e&&w.forEach(function(D){return n(y,D)}),ge&&yt(y,N),S}function _(y,b,v,I){if(typeof v=="object"&&v!==null&&v.type===Zt&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Or:e:{for(var S=v.key,C=b;C!==null;){if(C.key===S){if(S=v.type,S===Zt){if(C.tag===7){t(y,C.sibling),b=r(C,v.props.children),b.return=y,y=b;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Xn&&gd(S)===C.type){t(y,C.sibling),b=r(C,v.props),b.ref=La(y,C,v),b.return=y,y=b;break e}t(y,C);break}else n(y,C);C=C.sibling}v.type===Zt?(b=Nt(v.props.children,y.mode,I,v.key),b.return=y,y=b):(I=_o(v.type,v.key,v.props,null,y.mode,I),I.ref=La(y,b,v),I.return=y,y=I)}return i(y);case Wt:e:{for(C=v.key;b!==null;){if(b.key===C)if(b.tag===4&&b.stateNode.containerInfo===v.containerInfo&&b.stateNode.implementation===v.implementation){t(y,b.sibling),b=r(b,v.children||[]),b.return=y,y=b;break e}else{t(y,b);break}else n(y,b);b=b.sibling}b=pi(v,y.mode,I),b.return=y,y=b}return i(y);case Xn:return C=v._init,_(y,b,C(v._payload),I)}if(Ua(v))return x(y,b,v,I);if(Aa(v))return p(y,b,v,I);Xr(y,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,b!==null&&b.tag===6?(t(y,b.sibling),b=r(b,v),b.return=y,y=b):(t(y,b),b=ui(v,y.mode,I),b.return=y,y=b),i(y)):t(y,b)}return _}var ya=Vp(!0),Rp=Vp(!1),Oo=xt(null),Ko=null,aa=null,Ul=null;function Wl(){Ul=aa=Ko=null}function Zl(e){var n=Oo.current;me(Oo),e._currentValue=n}function Zi(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function ma(e,n){Ko=e,Ul=aa=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ze=!0),e.firstContext=null)}function xn(e){var n=e._currentValue;if(Ul!==e)if(e={context:e,memoizedValue:n,next:null},aa===null){if(Ko===null)throw Error(W(308));aa=e,Ko.dependencies={lanes:0,firstContext:e}}else aa=aa.next=e;return n}var jt=null;function Yl(e){jt===null?jt=[e]:jt.push(e)}function Lp(e,n,t,a){var r=n.interleaved;return r===null?(t.next=t,Yl(n)):(t.next=r.next,r.next=t),n.interleaved=t,Hn(e,a)}function Hn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Qn=!1;function Xl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Op(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function lt(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,oe&2){var r=a.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),a.pending=n,Hn(e,t)}return r=a.interleaved,r===null?(n.next=n,Yl(a)):(n.next=r.next,r.next=n),a.interleaved=n,Hn(e,t)}function go(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Pl(e,t)}}function hd(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=i:s=s.next=i,t=t.next}while(t!==null);s===null?r=s=n:s=s.next=n}else r=s=n;t={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:a.shared,effects:a.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Jo(e,n,t,a){var r=e.updateQueue;Qn=!1;var s=r.firstBaseUpdate,i=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var d=l,u=d.next;d.next=null,i===null?s=u:i.next=u,i=d;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==i&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=d))}if(s!==null){var m=r.baseState;i=0,f=u=d=null,l=s;do{var g=l.lane,h=l.eventTime;if((a&g)===g){f!==null&&(f=f.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,p=l;switch(g=n,h=t,p.tag){case 1:if(x=p.payload,typeof x=="function"){m=x.call(h,m,g);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=p.payload,g=typeof x=="function"?x.call(h,m,g):x,g==null)break e;m=ye({},m,g);break e;case 2:Qn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=r.effects,g===null?r.effects=[l]:g.push(l))}else h={eventTime:h,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=h,d=m):f=f.next=h,i|=g;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;g=l,l=g.next,g.next=null,r.lastBaseUpdate=g,r.shared.pending=null}}while(!0);if(f===null&&(d=m),r.baseState=d,r.firstBaseUpdate=u,r.lastBaseUpdate=f,n=r.shared.interleaved,n!==null){r=n;do i|=r.lane,r=r.next;while(r!==n)}else s===null&&(r.shared.lanes=0);At|=i,e.lanes=i,e.memoizedState=m}}function xd(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],r=a.callback;if(r!==null){if(a.callback=null,a=t,typeof r!="function")throw Error(W(191,r));r.call(a)}}}var $r={},Dn=xt($r),br=xt($r),vr=xt($r);function wt(e){if(e===$r)throw Error(W(174));return e}function Ql(e,n){switch(ue(vr,n),ue(br,e),ue(Dn,$r),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ti(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ti(n,e)}me(Dn),ue(Dn,n)}function _a(){me(Dn),me(br),me(vr)}function Kp(e){wt(vr.current);var n=wt(Dn.current),t=Ti(n,e.type);n!==t&&(ue(br,e),ue(Dn,t))}function ql(e){br.current===e&&(me(Dn),me(br))}var xe=xt(0);function Bo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var oi=[];function ec(){for(var e=0;e<oi.length;e++)oi[e]._workInProgressVersionPrimary=null;oi.length=0}var ho=Wn.ReactCurrentDispatcher,si=Wn.ReactCurrentBatchConfig,$t=0,be=null,Ce=null,Ee=null,Fo=!1,nr=!1,yr=0,d0=0;function Re(){throw Error(W(321))}function nc(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Sn(e[t],n[t]))return!1;return!0}function tc(e,n,t,a,r,s){if($t=s,be=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ho.current=e===null||e.memoizedState===null?f0:g0,e=t(a,r),nr){s=0;do{if(nr=!1,yr=0,25<=s)throw Error(W(301));s+=1,Ee=Ce=null,n.updateQueue=null,ho.current=h0,e=t(a,r)}while(nr)}if(ho.current=Go,n=Ce!==null&&Ce.next!==null,$t=0,Ee=Ce=be=null,Fo=!1,n)throw Error(W(300));return e}function ac(){var e=yr!==0;return yr=0,e}function Nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?be.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function bn(){if(Ce===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var n=Ee===null?be.memoizedState:Ee.next;if(n!==null)Ee=n,Ce=e;else{if(e===null)throw Error(W(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Ee===null?be.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function _r(e,n){return typeof n=="function"?n(e):n}function ii(e){var n=bn(),t=n.queue;if(t===null)throw Error(W(311));t.lastRenderedReducer=e;var a=Ce,r=a.baseQueue,s=t.pending;if(s!==null){if(r!==null){var i=r.next;r.next=s.next,s.next=i}a.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,a=a.baseState;var l=i=null,d=null,u=s;do{var f=u.lane;if(($t&f)===f)d!==null&&(d=d.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),a=u.hasEagerState?u.eagerState:e(a,u.action);else{var m={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};d===null?(l=d=m,i=a):d=d.next=m,be.lanes|=f,At|=f}u=u.next}while(u!==null&&u!==s);d===null?i=a:d.next=l,Sn(a,n.memoizedState)||(Ze=!0),n.memoizedState=a,n.baseState=i,n.baseQueue=d,t.lastRenderedState=a}if(e=t.interleaved,e!==null){r=e;do s=r.lane,be.lanes|=s,At|=s,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function li(e){var n=bn(),t=n.queue;if(t===null)throw Error(W(311));t.lastRenderedReducer=e;var a=t.dispatch,r=t.pending,s=n.memoizedState;if(r!==null){t.pending=null;var i=r=r.next;do s=e(s,i.action),i=i.next;while(i!==r);Sn(s,n.memoizedState)||(Ze=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),t.lastRenderedState=s}return[s,a]}function Jp(){}function Bp(e,n){var t=be,a=bn(),r=n(),s=!Sn(a.memoizedState,r);if(s&&(a.memoizedState=r,Ze=!0),a=a.queue,rc(Hp.bind(null,t,a,e),[e]),a.getSnapshot!==n||s||Ee!==null&&Ee.memoizedState.tag&1){if(t.flags|=2048,Ir(9,Gp.bind(null,t,a,r,n),void 0,null),De===null)throw Error(W(349));$t&30||Fp(t,n,r)}return r}function Fp(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=be.updateQueue,n===null?(n={lastEffect:null,stores:null},be.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Gp(e,n,t,a){n.value=t,n.getSnapshot=a,Up(n)&&Wp(e)}function Hp(e,n,t){return t(function(){Up(n)&&Wp(e)})}function Up(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Sn(e,t)}catch{return!0}}function Wp(e){var n=Hn(e,1);n!==null&&wn(n,e,1,-1)}function bd(e){var n=Nn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_r,lastRenderedState:e},n.queue=e,e=e.dispatch=m0.bind(null,be,e),[n.memoizedState,e]}function Ir(e,n,t,a){return e={tag:e,create:n,destroy:t,deps:a,next:null},n=be.updateQueue,n===null?(n={lastEffect:null,stores:null},be.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e)),e}function Zp(){return bn().memoizedState}function xo(e,n,t,a){var r=Nn();be.flags|=e,r.memoizedState=Ir(1|n,t,void 0,a===void 0?null:a)}function vs(e,n,t,a){var r=bn();a=a===void 0?null:a;var s=void 0;if(Ce!==null){var i=Ce.memoizedState;if(s=i.destroy,a!==null&&nc(a,i.deps)){r.memoizedState=Ir(n,t,s,a);return}}be.flags|=e,r.memoizedState=Ir(1|n,t,s,a)}function vd(e,n){return xo(8390656,8,e,n)}function rc(e,n){return vs(2048,8,e,n)}function Yp(e,n){return vs(4,2,e,n)}function Xp(e,n){return vs(4,4,e,n)}function Qp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function qp(e,n,t){return t=t!=null?t.concat([e]):null,vs(4,4,Qp.bind(null,n,e),t)}function oc(){}function em(e,n){var t=bn();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&nc(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function nm(e,n){var t=bn();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&nc(n,a[1])?a[0]:(e=e(),t.memoizedState=[e,n],e)}function tm(e,n,t){return $t&21?(Sn(t,n)||(t=ip(),be.lanes|=t,At|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=t)}function u0(e,n){var t=ce;ce=t!==0&&4>t?t:4,e(!0);var a=si.transition;si.transition={};try{e(!1),n()}finally{ce=t,si.transition=a}}function am(){return bn().memoizedState}function p0(e,n,t){var a=dt(e);if(t={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null},rm(e))om(n,t);else if(t=Lp(e,n,t,a),t!==null){var r=Ge();wn(t,e,a,r),sm(t,n,a)}}function m0(e,n,t){var a=dt(e),r={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null};if(rm(e))om(n,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var i=n.lastRenderedState,l=s(i,t);if(r.hasEagerState=!0,r.eagerState=l,Sn(l,i)){var d=n.interleaved;d===null?(r.next=r,Yl(n)):(r.next=d.next,d.next=r),n.interleaved=r;return}}catch{}finally{}t=Lp(e,n,r,a),t!==null&&(r=Ge(),wn(t,e,a,r),sm(t,n,a))}}function rm(e){var n=e.alternate;return e===be||n!==null&&n===be}function om(e,n){nr=Fo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function sm(e,n,t){if(t&4194240){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Pl(e,t)}}var Go={readContext:xn,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},f0={readContext:xn,useCallback:function(e,n){return Nn().memoizedState=[e,n===void 0?null:n],e},useContext:xn,useEffect:vd,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,xo(4194308,4,Qp.bind(null,n,e),t)},useLayoutEffect:function(e,n){return xo(4194308,4,e,n)},useInsertionEffect:function(e,n){return xo(4,2,e,n)},useMemo:function(e,n){var t=Nn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var a=Nn();return n=t!==void 0?t(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=p0.bind(null,be,e),[a.memoizedState,e]},useRef:function(e){var n=Nn();return e={current:e},n.memoizedState=e},useState:bd,useDebugValue:oc,useDeferredValue:function(e){return Nn().memoizedState=e},useTransition:function(){var e=bd(!1),n=e[0];return e=u0.bind(null,e[1]),Nn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var a=be,r=Nn();if(ge){if(t===void 0)throw Error(W(407));t=t()}else{if(t=n(),De===null)throw Error(W(349));$t&30||Fp(a,n,t)}r.memoizedState=t;var s={value:t,getSnapshot:n};return r.queue=s,vd(Hp.bind(null,a,s,e),[e]),a.flags|=2048,Ir(9,Gp.bind(null,a,s,t,n),void 0,null),t},useId:function(){var e=Nn(),n=De.identifierPrefix;if(ge){var t=Kn,a=On;t=(a&~(1<<32-jn(a)-1)).toString(32)+t,n=":"+n+"R"+t,t=yr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=d0++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},g0={readContext:xn,useCallback:em,useContext:xn,useEffect:rc,useImperativeHandle:qp,useInsertionEffect:Yp,useLayoutEffect:Xp,useMemo:nm,useReducer:ii,useRef:Zp,useState:function(){return ii(_r)},useDebugValue:oc,useDeferredValue:function(e){var n=bn();return tm(n,Ce.memoizedState,e)},useTransition:function(){var e=ii(_r)[0],n=bn().memoizedState;return[e,n]},useMutableSource:Jp,useSyncExternalStore:Bp,useId:am,unstable_isNewReconciler:!1},h0={readContext:xn,useCallback:em,useContext:xn,useEffect:rc,useImperativeHandle:qp,useInsertionEffect:Yp,useLayoutEffect:Xp,useMemo:nm,useReducer:li,useRef:Zp,useState:function(){return li(_r)},useDebugValue:oc,useDeferredValue:function(e){var n=bn();return Ce===null?n.memoizedState=e:tm(n,Ce.memoizedState,e)},useTransition:function(){var e=li(_r)[0],n=bn().memoizedState;return[e,n]},useMutableSource:Jp,useSyncExternalStore:Bp,useId:am,unstable_isNewReconciler:!1};function _n(e,n){if(e&&e.defaultProps){n=ye({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Yi(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:ye({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ys={isMounted:function(e){return(e=e._reactInternals)?Rt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var a=Ge(),r=dt(e),s=Jn(a,r);s.payload=n,t!=null&&(s.callback=t),n=lt(e,s,r),n!==null&&(wn(n,e,r,a),go(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=Ge(),r=dt(e),s=Jn(a,r);s.tag=1,s.payload=n,t!=null&&(s.callback=t),n=lt(e,s,r),n!==null&&(wn(n,e,r,a),go(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ge(),a=dt(e),r=Jn(t,a);r.tag=2,n!=null&&(r.callback=n),n=lt(e,r,a),n!==null&&(wn(n,e,a,t),go(n,e,a))}};function yd(e,n,t,a,r,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,i):n.prototype&&n.prototype.isPureReactComponent?!fr(t,a)||!fr(r,s):!0}function im(e,n,t){var a=!1,r=ft,s=n.contextType;return typeof s=="object"&&s!==null?s=xn(s):(r=Qe(n)?Et:Je.current,a=n.contextTypes,s=(a=a!=null)?ba(e,r):ft),n=new n(t,s),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ys,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=s),n}function _d(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&ys.enqueueReplaceState(n,n.state,null)}function Xi(e,n,t,a){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},Xl(e);var s=n.contextType;typeof s=="object"&&s!==null?r.context=xn(s):(s=Qe(n)?Et:Je.current,r.context=ba(e,s)),r.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Yi(e,n,s,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&ys.enqueueReplaceState(r,r.state,null),Jo(e,t,r,a),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Ia(e,n){try{var t="",a=n;do t+=Ff(a),a=a.return;while(a);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:n,stack:r,digest:null}}function ci(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Qi(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var x0=typeof WeakMap=="function"?WeakMap:Map;function lm(e,n,t){t=Jn(-1,t),t.tag=3,t.payload={element:null};var a=n.value;return t.callback=function(){Uo||(Uo=!0,ll=a),Qi(e,n)},t}function cm(e,n,t){t=Jn(-1,t),t.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var r=n.value;t.payload=function(){return a(r)},t.callback=function(){Qi(e,n)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Qi(e,n),typeof a!="function"&&(ct===null?ct=new Set([this]):ct.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function Id(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new x0;var r=new Set;a.set(n,r)}else r=a.get(n),r===void 0&&(r=new Set,a.set(n,r));r.has(t)||(r.add(t),e=E0.bind(null,e,n,t),n.then(e,e))}function kd(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function jd(e,n,t,a,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Jn(-1,1),n.tag=2,lt(t,n,1))),t.lanes|=1),e)}var b0=Wn.ReactCurrentOwner,Ze=!1;function Fe(e,n,t,a){n.child=e===null?Rp(n,null,t,a):ya(n,e.child,t,a)}function wd(e,n,t,a,r){t=t.render;var s=n.ref;return ma(n,r),a=tc(e,n,t,a,s,r),t=ac(),e!==null&&!Ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Un(e,n,r)):(ge&&t&&Fl(n),n.flags|=1,Fe(e,n,a,r),n.child)}function Sd(e,n,t,a,r){if(e===null){var s=t.type;return typeof s=="function"&&!mc(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=s,dm(e,n,s,a,r)):(e=_o(t.type,null,a,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,!(e.lanes&r)){var i=s.memoizedProps;if(t=t.compare,t=t!==null?t:fr,t(i,a)&&e.ref===n.ref)return Un(e,n,r)}return n.flags|=1,e=ut(s,a),e.ref=n.ref,e.return=n,n.child=e}function dm(e,n,t,a,r){if(e!==null){var s=e.memoizedProps;if(fr(s,a)&&e.ref===n.ref)if(Ze=!1,n.pendingProps=a=s,(e.lanes&r)!==0)e.flags&131072&&(Ze=!0);else return n.lanes=e.lanes,Un(e,n,r)}return qi(e,n,t,a,r)}function um(e,n,t){var a=n.pendingProps,r=a.children,s=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(oa,nn),nn|=t;else{if(!(t&1073741824))return e=s!==null?s.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ue(oa,nn),nn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=s!==null?s.baseLanes:t,ue(oa,nn),nn|=a}else s!==null?(a=s.baseLanes|t,n.memoizedState=null):a=t,ue(oa,nn),nn|=a;return Fe(e,n,r,t),n.child}function pm(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function qi(e,n,t,a,r){var s=Qe(t)?Et:Je.current;return s=ba(n,s),ma(n,r),t=tc(e,n,t,a,s,r),a=ac(),e!==null&&!Ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Un(e,n,r)):(ge&&a&&Fl(n),n.flags|=1,Fe(e,n,t,r),n.child)}function Cd(e,n,t,a,r){if(Qe(t)){var s=!0;Vo(n)}else s=!1;if(ma(n,r),n.stateNode===null)bo(e,n),im(n,t,a),Xi(n,t,a,r),a=!0;else if(e===null){var i=n.stateNode,l=n.memoizedProps;i.props=l;var d=i.context,u=t.contextType;typeof u=="object"&&u!==null?u=xn(u):(u=Qe(t)?Et:Je.current,u=ba(n,u));var f=t.getDerivedStateFromProps,m=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==a||d!==u)&&_d(n,i,a,u),Qn=!1;var g=n.memoizedState;i.state=g,Jo(n,a,i,r),d=n.memoizedState,l!==a||g!==d||Xe.current||Qn?(typeof f=="function"&&(Yi(n,t,f,a),d=n.memoizedState),(l=Qn||yd(n,t,l,a,g,d,u))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=d),i.props=a,i.state=d,i.context=u,a=l):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{i=n.stateNode,Op(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:_n(n.type,l),i.props=u,m=n.pendingProps,g=i.context,d=t.contextType,typeof d=="object"&&d!==null?d=xn(d):(d=Qe(t)?Et:Je.current,d=ba(n,d));var h=t.getDerivedStateFromProps;(f=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==m||g!==d)&&_d(n,i,a,d),Qn=!1,g=n.memoizedState,i.state=g,Jo(n,a,i,r);var x=n.memoizedState;l!==m||g!==x||Xe.current||Qn?(typeof h=="function"&&(Yi(n,t,h,a),x=n.memoizedState),(u=Qn||yd(n,t,u,a,g,x,d)||!1)?(f||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,x,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,x,d)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=x),i.props=a,i.state=x,i.context=d,a=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),a=!1)}return el(e,n,t,a,s,r)}function el(e,n,t,a,r,s){pm(e,n);var i=(n.flags&128)!==0;if(!a&&!i)return r&&pd(n,t,!1),Un(e,n,s);a=n.stateNode,b0.current=n;var l=i&&typeof t.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&i?(n.child=ya(n,e.child,null,s),n.child=ya(n,null,l,s)):Fe(e,n,l,s),n.memoizedState=a.state,r&&pd(n,t,!0),n.child}function mm(e){var n=e.stateNode;n.pendingContext?ud(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ud(e,n.context,!1),Ql(e,n.containerInfo)}function Nd(e,n,t,a,r){return va(),Hl(r),n.flags|=256,Fe(e,n,t,a),n.child}var nl={dehydrated:null,treeContext:null,retryLane:0};function tl(e){return{baseLanes:e,cachePool:null,transitions:null}}function fm(e,n,t){var a=n.pendingProps,r=xe.current,s=!1,i=(n.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(r&2)!==0),l?(s=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),ue(xe,r&1),e===null)return Wi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=a.children,e=a.fallback,s?(a=n.mode,s=n.child,i={mode:"hidden",children:i},!(a&1)&&s!==null?(s.childLanes=0,s.pendingProps=i):s=ks(i,a,0,null),e=Nt(e,a,t,null),s.return=n,e.return=n,s.sibling=e,n.child=s,n.child.memoizedState=tl(t),n.memoizedState=nl,e):sc(n,i));if(r=e.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return v0(e,n,i,a,l,r,t);if(s){s=a.fallback,i=n.mode,r=e.child,l=r.sibling;var d={mode:"hidden",children:a.children};return!(i&1)&&n.child!==r?(a=n.child,a.childLanes=0,a.pendingProps=d,n.deletions=null):(a=ut(r,d),a.subtreeFlags=r.subtreeFlags&14680064),l!==null?s=ut(l,s):(s=Nt(s,i,t,null),s.flags|=2),s.return=n,a.return=n,a.sibling=s,n.child=a,a=s,s=n.child,i=e.child.memoizedState,i=i===null?tl(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},s.memoizedState=i,s.childLanes=e.childLanes&~t,n.memoizedState=nl,a}return s=e.child,e=s.sibling,a=ut(s,{mode:"visible",children:a.children}),!(n.mode&1)&&(a.lanes=t),a.return=n,a.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=a,n.memoizedState=null,a}function sc(e,n){return n=ks({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Qr(e,n,t,a){return a!==null&&Hl(a),ya(n,e.child,null,t),e=sc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function v0(e,n,t,a,r,s,i){if(t)return n.flags&256?(n.flags&=-257,a=ci(Error(W(422))),Qr(e,n,i,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(s=a.fallback,r=n.mode,a=ks({mode:"visible",children:a.children},r,0,null),s=Nt(s,r,i,null),s.flags|=2,a.return=n,s.return=n,a.sibling=s,n.child=a,n.mode&1&&ya(n,e.child,null,i),n.child.memoizedState=tl(i),n.memoizedState=nl,s);if(!(n.mode&1))return Qr(e,n,i,null);if(r.data==="$!"){if(a=r.nextSibling&&r.nextSibling.dataset,a)var l=a.dgst;return a=l,s=Error(W(419)),a=ci(s,a,void 0),Qr(e,n,i,a)}if(l=(i&e.childLanes)!==0,Ze||l){if(a=De,a!==null){switch(i&-i){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(a.suspendedLanes|i)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Hn(e,r),wn(a,e,r,-1))}return pc(),a=ci(Error(W(421))),Qr(e,n,i,a)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=D0.bind(null,e),r._reactRetry=n,null):(e=s.treeContext,an=it(r.nextSibling),rn=n,ge=!0,kn=null,e!==null&&(dn[un++]=On,dn[un++]=Kn,dn[un++]=Dt,On=e.id,Kn=e.overflow,Dt=n),n=sc(n,a.children),n.flags|=4096,n)}function Td(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Zi(e.return,n,t)}function di(e,n,t,a,r){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:r}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=t,s.tailMode=r)}function gm(e,n,t){var a=n.pendingProps,r=a.revealOrder,s=a.tail;if(Fe(e,n,a.children,t),a=xe.current,a&2)a=a&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Td(e,t,n);else if(e.tag===19)Td(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ue(xe,a),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&Bo(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),di(n,!1,r,t,s);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Bo(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}di(n,!0,t,null,s);break;case"together":di(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function bo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Un(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),At|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(W(153));if(n.child!==null){for(e=n.child,t=ut(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=ut(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function y0(e,n,t){switch(n.tag){case 3:mm(n),va();break;case 5:Kp(n);break;case 1:Qe(n.type)&&Vo(n);break;case 4:Ql(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,r=n.memoizedProps.value;ue(Oo,a._currentValue),a._currentValue=r;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(ue(xe,xe.current&1),n.flags|=128,null):t&n.child.childLanes?fm(e,n,t):(ue(xe,xe.current&1),e=Un(e,n,t),e!==null?e.sibling:null);ue(xe,xe.current&1);break;case 19:if(a=(t&n.childLanes)!==0,e.flags&128){if(a)return gm(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ue(xe,xe.current),a)break;return null;case 22:case 23:return n.lanes=0,um(e,n,t)}return Un(e,n,t)}var hm,al,xm,bm;hm=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};al=function(){};xm=function(e,n,t,a){var r=e.memoizedProps;if(r!==a){e=n.stateNode,wt(Dn.current);var s=null;switch(t){case"input":r=wi(e,r),a=wi(e,a),s=[];break;case"select":r=ye({},r,{value:void 0}),a=ye({},a,{value:void 0}),s=[];break;case"textarea":r=Ni(e,r),a=Ni(e,a),s=[];break;default:typeof r.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=zo)}Mi(t,a);var i;t=null;for(u in r)if(!a.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var l=r[u];for(i in l)l.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ir.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in a){var d=a[u];if(l=r!=null?r[u]:void 0,a.hasOwnProperty(u)&&d!==l&&(d!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||d&&d.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in d)d.hasOwnProperty(i)&&l[i]!==d[i]&&(t||(t={}),t[i]=d[i])}else t||(s||(s=[]),s.push(u,t)),t=d;else u==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,l=l?l.__html:void 0,d!=null&&l!==d&&(s=s||[]).push(u,d)):u==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(u,""+d):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ir.hasOwnProperty(u)?(d!=null&&u==="onScroll"&&pe("scroll",e),s||l===d||(s=[])):(s=s||[]).push(u,d))}t&&(s=s||[]).push("style",t);var u=s;(n.updateQueue=u)&&(n.flags|=4)}};bm=function(e,n,t,a){t!==a&&(n.flags|=4)};function Oa(e,n){if(!ge)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Le(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags&14680064,a|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function _0(e,n,t){var a=n.pendingProps;switch(Gl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(n),null;case 1:return Qe(n.type)&&Po(),Le(n),null;case 3:return a=n.stateNode,_a(),me(Xe),me(Je),ec(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Yr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,kn!==null&&(ul(kn),kn=null))),al(e,n),Le(n),null;case 5:ql(n);var r=wt(vr.current);if(t=n.type,e!==null&&n.stateNode!=null)xm(e,n,t,a,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(W(166));return Le(n),null}if(e=wt(Dn.current),Yr(n)){a=n.stateNode,t=n.type;var s=n.memoizedProps;switch(a[Tn]=n,a[xr]=s,e=(n.mode&1)!==0,t){case"dialog":pe("cancel",a),pe("close",a);break;case"iframe":case"object":case"embed":pe("load",a);break;case"video":case"audio":for(r=0;r<Za.length;r++)pe(Za[r],a);break;case"source":pe("error",a);break;case"img":case"image":case"link":pe("error",a),pe("load",a);break;case"details":pe("toggle",a);break;case"input":Rc(a,s),pe("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!s.multiple},pe("invalid",a);break;case"textarea":Oc(a,s),pe("invalid",a)}Mi(t,s),r=null;for(var i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="children"?typeof l=="string"?a.textContent!==l&&(s.suppressHydrationWarning!==!0&&Zr(a.textContent,l,e),r=["children",l]):typeof l=="number"&&a.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Zr(a.textContent,l,e),r=["children",""+l]):ir.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&pe("scroll",a)}switch(t){case"input":Kr(a),Lc(a,s,!0);break;case"textarea":Kr(a),Kc(a);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(a.onclick=zo)}a=r,n.updateQueue=a,a!==null&&(n.flags|=4)}else{i=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=i.createElement(t,{is:a.is}):(e=i.createElement(t),t==="select"&&(i=e,a.multiple?i.multiple=!0:a.size&&(i.size=a.size))):e=i.createElementNS(e,t),e[Tn]=n,e[xr]=a,hm(e,n,!1,!1),n.stateNode=e;e:{switch(i=Ei(t,a),t){case"dialog":pe("cancel",e),pe("close",e),r=a;break;case"iframe":case"object":case"embed":pe("load",e),r=a;break;case"video":case"audio":for(r=0;r<Za.length;r++)pe(Za[r],e);r=a;break;case"source":pe("error",e),r=a;break;case"img":case"image":case"link":pe("error",e),pe("load",e),r=a;break;case"details":pe("toggle",e),r=a;break;case"input":Rc(e,a),r=wi(e,a),pe("invalid",e);break;case"option":r=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},r=ye({},a,{value:void 0}),pe("invalid",e);break;case"textarea":Oc(e,a),r=Ni(e,a),pe("invalid",e);break;default:r=a}Mi(t,r),l=r;for(s in l)if(l.hasOwnProperty(s)){var d=l[s];s==="style"?Zu(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Uu(e,d)):s==="children"?typeof d=="string"?(t!=="textarea"||d!=="")&&lr(e,d):typeof d=="number"&&lr(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ir.hasOwnProperty(s)?d!=null&&s==="onScroll"&&pe("scroll",e):d!=null&&Ml(e,s,d,i))}switch(t){case"input":Kr(e),Lc(e,a,!1);break;case"textarea":Kr(e),Kc(e);break;case"option":a.value!=null&&e.setAttribute("value",""+mt(a.value));break;case"select":e.multiple=!!a.multiple,s=a.value,s!=null?ca(e,!!a.multiple,s,!1):a.defaultValue!=null&&ca(e,!!a.multiple,a.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=zo)}switch(t){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Le(n),null;case 6:if(e&&n.stateNode!=null)bm(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(W(166));if(t=wt(vr.current),wt(Dn.current),Yr(n)){if(a=n.stateNode,t=n.memoizedProps,a[Tn]=n,(s=a.nodeValue!==t)&&(e=rn,e!==null))switch(e.tag){case 3:Zr(a.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zr(a.nodeValue,t,(e.mode&1)!==0)}s&&(n.flags|=4)}else a=(t.nodeType===9?t:t.ownerDocument).createTextNode(a),a[Tn]=n,n.stateNode=a}return Le(n),null;case 13:if(me(xe),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&an!==null&&n.mode&1&&!(n.flags&128))Pp(),va(),n.flags|=98560,s=!1;else if(s=Yr(n),a!==null&&a.dehydrated!==null){if(e===null){if(!s)throw Error(W(318));if(s=n.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(W(317));s[Tn]=n}else va(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Le(n),s=!1}else kn!==null&&(ul(kn),kn=null),s=!0;if(!s)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,n.mode&1&&(e===null||xe.current&1?Te===0&&(Te=3):pc())),n.updateQueue!==null&&(n.flags|=4),Le(n),null);case 4:return _a(),al(e,n),e===null&&gr(n.stateNode.containerInfo),Le(n),null;case 10:return Zl(n.type._context),Le(n),null;case 17:return Qe(n.type)&&Po(),Le(n),null;case 19:if(me(xe),s=n.memoizedState,s===null)return Le(n),null;if(a=(n.flags&128)!==0,i=s.rendering,i===null)if(a)Oa(s,!1);else{if(Te!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=Bo(e),i!==null){for(n.flags|=128,Oa(s,!1),a=i.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=t,t=n.child;t!==null;)s=t,e=a,s.flags&=14680066,i=s.alternate,i===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,s.type=i.type,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ue(xe,xe.current&1|2),n.child}e=e.sibling}s.tail!==null&&ke()>ka&&(n.flags|=128,a=!0,Oa(s,!1),n.lanes=4194304)}else{if(!a)if(e=Bo(i),e!==null){if(n.flags|=128,a=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Oa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!ge)return Le(n),null}else 2*ke()-s.renderingStartTime>ka&&t!==1073741824&&(n.flags|=128,a=!0,Oa(s,!1),n.lanes=4194304);s.isBackwards?(i.sibling=n.child,n.child=i):(t=s.last,t!==null?t.sibling=i:n.child=i,s.last=i)}return s.tail!==null?(n=s.tail,s.rendering=n,s.tail=n.sibling,s.renderingStartTime=ke(),n.sibling=null,t=xe.current,ue(xe,a?t&1|2:t&1),n):(Le(n),null);case 22:case 23:return uc(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&n.mode&1?nn&1073741824&&(Le(n),n.subtreeFlags&6&&(n.flags|=8192)):Le(n),null;case 24:return null;case 25:return null}throw Error(W(156,n.tag))}function I0(e,n){switch(Gl(n),n.tag){case 1:return Qe(n.type)&&Po(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return _a(),me(Xe),me(Je),ec(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ql(n),null;case 13:if(me(xe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(W(340));va()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return me(xe),null;case 4:return _a(),null;case 10:return Zl(n.type._context),null;case 22:case 23:return uc(),null;case 24:return null;default:return null}}var qr=!1,Oe=!1,k0=typeof WeakSet=="function"?WeakSet:Set,Y=null;function ra(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(a){_e(e,n,a)}else t.current=null}function rl(e,n,t){try{t()}catch(a){_e(e,n,a)}}var Md=!1;function j0(e,n){if(Ki=Do,e=kp(),Bl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var r=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var i=0,l=-1,d=-1,u=0,f=0,m=e,g=null;n:for(;;){for(var h;m!==t||r!==0&&m.nodeType!==3||(l=i+r),m!==s||a!==0&&m.nodeType!==3||(d=i+a),m.nodeType===3&&(i+=m.nodeValue.length),(h=m.firstChild)!==null;)g=m,m=h;for(;;){if(m===e)break n;if(g===t&&++u===r&&(l=i),g===s&&++f===a&&(d=i),(h=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=h}t=l===-1||d===-1?null:{start:l,end:d}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ji={focusedElem:e,selectionRange:t},Do=!1,Y=n;Y!==null;)if(n=Y,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Y=e;else for(;Y!==null;){n=Y;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var p=x.memoizedProps,_=x.memoizedState,y=n.stateNode,b=y.getSnapshotBeforeUpdate(n.elementType===n.type?p:_n(n.type,p),_);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(W(163))}}catch(I){_e(n,n.return,I)}if(e=n.sibling,e!==null){e.return=n.return,Y=e;break}Y=n.return}return x=Md,Md=!1,x}function tr(e,n,t){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var r=a=a.next;do{if((r.tag&e)===e){var s=r.destroy;r.destroy=void 0,s!==void 0&&rl(n,t,s)}r=r.next}while(r!==a)}}function _s(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var a=t.create;t.destroy=a()}t=t.next}while(t!==n)}}function ol(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function vm(e){var n=e.alternate;n!==null&&(e.alternate=null,vm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Tn],delete n[xr],delete n[Gi],delete n[s0],delete n[i0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ym(e){return e.tag===5||e.tag===3||e.tag===4}function Ed(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ym(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sl(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=zo));else if(a!==4&&(e=e.child,e!==null))for(sl(e,n,t),e=e.sibling;e!==null;)sl(e,n,t),e=e.sibling}function il(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(il(e,n,t),e=e.sibling;e!==null;)il(e,n,t),e=e.sibling}var $e=null,In=!1;function Yn(e,n,t){for(t=t.child;t!==null;)_m(e,n,t),t=t.sibling}function _m(e,n,t){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(ms,t)}catch{}switch(t.tag){case 5:Oe||ra(t,n);case 6:var a=$e,r=In;$e=null,Yn(e,n,t),$e=a,In=r,$e!==null&&(In?(e=$e,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):$e.removeChild(t.stateNode));break;case 18:$e!==null&&(In?(e=$e,t=t.stateNode,e.nodeType===8?ai(e.parentNode,t):e.nodeType===1&&ai(e,t),pr(e)):ai($e,t.stateNode));break;case 4:a=$e,r=In,$e=t.stateNode.containerInfo,In=!0,Yn(e,n,t),$e=a,In=r;break;case 0:case 11:case 14:case 15:if(!Oe&&(a=t.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){r=a=a.next;do{var s=r,i=s.destroy;s=s.tag,i!==void 0&&(s&2||s&4)&&rl(t,n,i),r=r.next}while(r!==a)}Yn(e,n,t);break;case 1:if(!Oe&&(ra(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=t.memoizedProps,a.state=t.memoizedState,a.componentWillUnmount()}catch(l){_e(t,n,l)}Yn(e,n,t);break;case 21:Yn(e,n,t);break;case 22:t.mode&1?(Oe=(a=Oe)||t.memoizedState!==null,Yn(e,n,t),Oe=a):Yn(e,n,t);break;default:Yn(e,n,t)}}function Dd(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new k0),n.forEach(function(a){var r=$0.bind(null,e,a);t.has(a)||(t.add(a),a.then(r,r))})}}function yn(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var r=t[a];try{var s=e,i=n,l=i;e:for(;l!==null;){switch(l.tag){case 5:$e=l.stateNode,In=!1;break e;case 3:$e=l.stateNode.containerInfo,In=!0;break e;case 4:$e=l.stateNode.containerInfo,In=!0;break e}l=l.return}if($e===null)throw Error(W(160));_m(s,i,r),$e=null,In=!1;var d=r.alternate;d!==null&&(d.return=null),r.return=null}catch(u){_e(r,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Im(n,e),n=n.sibling}function Im(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yn(n,e),Cn(e),a&4){try{tr(3,e,e.return),_s(3,e)}catch(p){_e(e,e.return,p)}try{tr(5,e,e.return)}catch(p){_e(e,e.return,p)}}break;case 1:yn(n,e),Cn(e),a&512&&t!==null&&ra(t,t.return);break;case 5:if(yn(n,e),Cn(e),a&512&&t!==null&&ra(t,t.return),e.flags&32){var r=e.stateNode;try{lr(r,"")}catch(p){_e(e,e.return,p)}}if(a&4&&(r=e.stateNode,r!=null)){var s=e.memoizedProps,i=t!==null?t.memoizedProps:s,l=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Fu(r,s),Ei(l,i);var u=Ei(l,s);for(i=0;i<d.length;i+=2){var f=d[i],m=d[i+1];f==="style"?Zu(r,m):f==="dangerouslySetInnerHTML"?Uu(r,m):f==="children"?lr(r,m):Ml(r,f,m,u)}switch(l){case"input":Si(r,s);break;case"textarea":Gu(r,s);break;case"select":var g=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?ca(r,!!s.multiple,h,!1):g!==!!s.multiple&&(s.defaultValue!=null?ca(r,!!s.multiple,s.defaultValue,!0):ca(r,!!s.multiple,s.multiple?[]:"",!1))}r[xr]=s}catch(p){_e(e,e.return,p)}}break;case 6:if(yn(n,e),Cn(e),a&4){if(e.stateNode===null)throw Error(W(162));r=e.stateNode,s=e.memoizedProps;try{r.nodeValue=s}catch(p){_e(e,e.return,p)}}break;case 3:if(yn(n,e),Cn(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{pr(n.containerInfo)}catch(p){_e(e,e.return,p)}break;case 4:yn(n,e),Cn(e);break;case 13:yn(n,e),Cn(e),r=e.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(cc=ke())),a&4&&Dd(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(Oe=(u=Oe)||f,yn(n,e),Oe=u):yn(n,e),Cn(e),a&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(Y=e,f=e.child;f!==null;){for(m=Y=f;Y!==null;){switch(g=Y,h=g.child,g.tag){case 0:case 11:case 14:case 15:tr(4,g,g.return);break;case 1:ra(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){a=g,t=g.return;try{n=a,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(p){_e(a,t,p)}}break;case 5:ra(g,g.return);break;case 22:if(g.memoizedState!==null){Ad(m);continue}}h!==null?(h.return=g,Y=h):Ad(m)}f=f.sibling}e:for(f=null,m=e;;){if(m.tag===5){if(f===null){f=m;try{r=m.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,d=m.memoizedProps.style,i=d!=null&&d.hasOwnProperty("display")?d.display:null,l.style.display=Wu("display",i))}catch(p){_e(e,e.return,p)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(p){_e(e,e.return,p)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:yn(n,e),Cn(e),a&4&&Dd(e);break;case 21:break;default:yn(n,e),Cn(e)}}function Cn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(ym(t)){var a=t;break e}t=t.return}throw Error(W(160))}switch(a.tag){case 5:var r=a.stateNode;a.flags&32&&(lr(r,""),a.flags&=-33);var s=Ed(e);il(e,s,r);break;case 3:case 4:var i=a.stateNode.containerInfo,l=Ed(e);sl(e,l,i);break;default:throw Error(W(161))}}catch(d){_e(e,e.return,d)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function w0(e,n,t){Y=e,km(e)}function km(e,n,t){for(var a=(e.mode&1)!==0;Y!==null;){var r=Y,s=r.child;if(r.tag===22&&a){var i=r.memoizedState!==null||qr;if(!i){var l=r.alternate,d=l!==null&&l.memoizedState!==null||Oe;l=qr;var u=Oe;if(qr=i,(Oe=d)&&!u)for(Y=r;Y!==null;)i=Y,d=i.child,i.tag===22&&i.memoizedState!==null?zd(r):d!==null?(d.return=i,Y=d):zd(r);for(;s!==null;)Y=s,km(s),s=s.sibling;Y=r,qr=l,Oe=u}$d(e)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Y=s):$d(e)}}function $d(e){for(;Y!==null;){var n=Y;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Oe||_s(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!Oe)if(t===null)a.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:_n(n.type,t.memoizedProps);a.componentDidUpdate(r,t.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var s=n.updateQueue;s!==null&&xd(n,s,a);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}xd(n,i,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var d=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&t.focus();break;case"img":d.src&&(t.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&pr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(W(163))}Oe||n.flags&512&&ol(n)}catch(g){_e(n,n.return,g)}}if(n===e){Y=null;break}if(t=n.sibling,t!==null){t.return=n.return,Y=t;break}Y=n.return}}function Ad(e){for(;Y!==null;){var n=Y;if(n===e){Y=null;break}var t=n.sibling;if(t!==null){t.return=n.return,Y=t;break}Y=n.return}}function zd(e){for(;Y!==null;){var n=Y;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{_s(4,n)}catch(d){_e(n,t,d)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var r=n.return;try{a.componentDidMount()}catch(d){_e(n,r,d)}}var s=n.return;try{ol(n)}catch(d){_e(n,s,d)}break;case 5:var i=n.return;try{ol(n)}catch(d){_e(n,i,d)}}}catch(d){_e(n,n.return,d)}if(n===e){Y=null;break}var l=n.sibling;if(l!==null){l.return=n.return,Y=l;break}Y=n.return}}var S0=Math.ceil,Ho=Wn.ReactCurrentDispatcher,ic=Wn.ReactCurrentOwner,mn=Wn.ReactCurrentBatchConfig,oe=0,De=null,Se=null,ze=0,nn=0,oa=xt(0),Te=0,kr=null,At=0,Is=0,lc=0,ar=null,We=null,cc=0,ka=1/0,Vn=null,Uo=!1,ll=null,ct=null,eo=!1,at=null,Wo=0,rr=0,cl=null,vo=-1,yo=0;function Ge(){return oe&6?ke():vo!==-1?vo:vo=ke()}function dt(e){return e.mode&1?oe&2&&ze!==0?ze&-ze:c0.transition!==null?(yo===0&&(yo=ip()),yo):(e=ce,e!==0||(e=window.event,e=e===void 0?16:fp(e.type)),e):1}function wn(e,n,t,a){if(50<rr)throw rr=0,cl=null,Error(W(185));Mr(e,t,a),(!(oe&2)||e!==De)&&(e===De&&(!(oe&2)&&(Is|=t),Te===4&&et(e,ze)),qe(e,a),t===1&&oe===0&&!(n.mode&1)&&(ka=ke()+500,bs&&bt()))}function qe(e,n){var t=e.callbackNode;cg(e,n);var a=Eo(e,e===De?ze:0);if(a===0)t!==null&&Fc(t),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(t!=null&&Fc(t),n===1)e.tag===0?l0(Pd.bind(null,e)):$p(Pd.bind(null,e)),r0(function(){!(oe&6)&&bt()}),t=null;else{switch(lp(a)){case 1:t=zl;break;case 4:t=op;break;case 16:t=Mo;break;case 536870912:t=sp;break;default:t=Mo}t=Em(t,jm.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function jm(e,n){if(vo=-1,yo=0,oe&6)throw Error(W(327));var t=e.callbackNode;if(fa()&&e.callbackNode!==t)return null;var a=Eo(e,e===De?ze:0);if(a===0)return null;if(a&30||a&e.expiredLanes||n)n=Zo(e,a);else{n=a;var r=oe;oe|=2;var s=Sm();(De!==e||ze!==n)&&(Vn=null,ka=ke()+500,Ct(e,n));do try{T0();break}catch(l){wm(e,l)}while(!0);Wl(),Ho.current=s,oe=r,Se!==null?n=0:(De=null,ze=0,n=Te)}if(n!==0){if(n===2&&(r=Pi(e),r!==0&&(a=r,n=dl(e,r))),n===1)throw t=kr,Ct(e,0),et(e,a),qe(e,ke()),t;if(n===6)et(e,a);else{if(r=e.current.alternate,!(a&30)&&!C0(r)&&(n=Zo(e,a),n===2&&(s=Pi(e),s!==0&&(a=s,n=dl(e,s))),n===1))throw t=kr,Ct(e,0),et(e,a),qe(e,ke()),t;switch(e.finishedWork=r,e.finishedLanes=a,n){case 0:case 1:throw Error(W(345));case 2:_t(e,We,Vn);break;case 3:if(et(e,a),(a&130023424)===a&&(n=cc+500-ke(),10<n)){if(Eo(e,0)!==0)break;if(r=e.suspendedLanes,(r&a)!==a){Ge(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Fi(_t.bind(null,e,We,Vn),n);break}_t(e,We,Vn);break;case 4:if(et(e,a),(a&4194240)===a)break;for(n=e.eventTimes,r=-1;0<a;){var i=31-jn(a);s=1<<i,i=n[i],i>r&&(r=i),a&=~s}if(a=r,a=ke()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*S0(a/1960))-a,10<a){e.timeoutHandle=Fi(_t.bind(null,e,We,Vn),a);break}_t(e,We,Vn);break;case 5:_t(e,We,Vn);break;default:throw Error(W(329))}}}return qe(e,ke()),e.callbackNode===t?jm.bind(null,e):null}function dl(e,n){var t=ar;return e.current.memoizedState.isDehydrated&&(Ct(e,n).flags|=256),e=Zo(e,n),e!==2&&(n=We,We=t,n!==null&&ul(n)),e}function ul(e){We===null?We=e:We.push.apply(We,e)}function C0(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var a=0;a<t.length;a++){var r=t[a],s=r.getSnapshot;r=r.value;try{if(!Sn(s(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function et(e,n){for(n&=~lc,n&=~Is,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-jn(n),a=1<<t;e[t]=-1,n&=~a}}function Pd(e){if(oe&6)throw Error(W(327));fa();var n=Eo(e,0);if(!(n&1))return qe(e,ke()),null;var t=Zo(e,n);if(e.tag!==0&&t===2){var a=Pi(e);a!==0&&(n=a,t=dl(e,a))}if(t===1)throw t=kr,Ct(e,0),et(e,n),qe(e,ke()),t;if(t===6)throw Error(W(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,_t(e,We,Vn),qe(e,ke()),null}function dc(e,n){var t=oe;oe|=1;try{return e(n)}finally{oe=t,oe===0&&(ka=ke()+500,bs&&bt())}}function zt(e){at!==null&&at.tag===0&&!(oe&6)&&fa();var n=oe;oe|=1;var t=mn.transition,a=ce;try{if(mn.transition=null,ce=1,e)return e()}finally{ce=a,mn.transition=t,oe=n,!(oe&6)&&bt()}}function uc(){nn=oa.current,me(oa)}function Ct(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,a0(t)),Se!==null)for(t=Se.return;t!==null;){var a=t;switch(Gl(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Po();break;case 3:_a(),me(Xe),me(Je),ec();break;case 5:ql(a);break;case 4:_a();break;case 13:me(xe);break;case 19:me(xe);break;case 10:Zl(a.type._context);break;case 22:case 23:uc()}t=t.return}if(De=e,Se=e=ut(e.current,null),ze=nn=n,Te=0,kr=null,lc=Is=At=0,We=ar=null,jt!==null){for(n=0;n<jt.length;n++)if(t=jt[n],a=t.interleaved,a!==null){t.interleaved=null;var r=a.next,s=t.pending;if(s!==null){var i=s.next;s.next=r,a.next=i}t.pending=a}jt=null}return e}function wm(e,n){do{var t=Se;try{if(Wl(),ho.current=Go,Fo){for(var a=be.memoizedState;a!==null;){var r=a.queue;r!==null&&(r.pending=null),a=a.next}Fo=!1}if($t=0,Ee=Ce=be=null,nr=!1,yr=0,ic.current=null,t===null||t.return===null){Te=1,kr=n,Se=null;break}e:{var s=e,i=t.return,l=t,d=n;if(n=ze,l.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var u=d,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var h=kd(i);if(h!==null){h.flags&=-257,jd(h,i,l,s,n),h.mode&1&&Id(s,u,n),n=h,d=u;var x=n.updateQueue;if(x===null){var p=new Set;p.add(d),n.updateQueue=p}else x.add(d);break e}else{if(!(n&1)){Id(s,u,n),pc();break e}d=Error(W(426))}}else if(ge&&l.mode&1){var _=kd(i);if(_!==null){!(_.flags&65536)&&(_.flags|=256),jd(_,i,l,s,n),Hl(Ia(d,l));break e}}s=d=Ia(d,l),Te!==4&&(Te=2),ar===null?ar=[s]:ar.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,n&=-n,s.lanes|=n;var y=lm(s,d,n);hd(s,y);break e;case 1:l=d;var b=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof b.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ct===null||!ct.has(v)))){s.flags|=65536,n&=-n,s.lanes|=n;var I=cm(s,l,n);hd(s,I);break e}}s=s.return}while(s!==null)}Nm(t)}catch(S){n=S,Se===t&&t!==null&&(Se=t=t.return);continue}break}while(!0)}function Sm(){var e=Ho.current;return Ho.current=Go,e===null?Go:e}function pc(){(Te===0||Te===3||Te===2)&&(Te=4),De===null||!(At&268435455)&&!(Is&268435455)||et(De,ze)}function Zo(e,n){var t=oe;oe|=2;var a=Sm();(De!==e||ze!==n)&&(Vn=null,Ct(e,n));do try{N0();break}catch(r){wm(e,r)}while(!0);if(Wl(),oe=t,Ho.current=a,Se!==null)throw Error(W(261));return De=null,ze=0,Te}function N0(){for(;Se!==null;)Cm(Se)}function T0(){for(;Se!==null&&!eg();)Cm(Se)}function Cm(e){var n=Mm(e.alternate,e,nn);e.memoizedProps=e.pendingProps,n===null?Nm(e):Se=n,ic.current=null}function Nm(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=I0(t,n),t!==null){t.flags&=32767,Se=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Te=6,Se=null;return}}else if(t=_0(t,n,nn),t!==null){Se=t;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=e}while(n!==null);Te===0&&(Te=5)}function _t(e,n,t){var a=ce,r=mn.transition;try{mn.transition=null,ce=1,M0(e,n,t,a)}finally{mn.transition=r,ce=a}return null}function M0(e,n,t,a){do fa();while(at!==null);if(oe&6)throw Error(W(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(W(177));e.callbackNode=null,e.callbackPriority=0;var s=t.lanes|t.childLanes;if(dg(e,s),e===De&&(Se=De=null,ze=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||eo||(eo=!0,Em(Mo,function(){return fa(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=mn.transition,mn.transition=null;var i=ce;ce=1;var l=oe;oe|=4,ic.current=null,j0(e,t),Im(t,e),Yg(Ji),Do=!!Ki,Ji=Ki=null,e.current=t,w0(t),ng(),oe=l,ce=i,mn.transition=s}else e.current=t;if(eo&&(eo=!1,at=e,Wo=r),s=e.pendingLanes,s===0&&(ct=null),rg(t.stateNode),qe(e,ke()),n!==null)for(a=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],a(r.value,{componentStack:r.stack,digest:r.digest});if(Uo)throw Uo=!1,e=ll,ll=null,e;return Wo&1&&e.tag!==0&&fa(),s=e.pendingLanes,s&1?e===cl?rr++:(rr=0,cl=e):rr=0,bt(),null}function fa(){if(at!==null){var e=lp(Wo),n=mn.transition,t=ce;try{if(mn.transition=null,ce=16>e?16:e,at===null)var a=!1;else{if(e=at,at=null,Wo=0,oe&6)throw Error(W(331));var r=oe;for(oe|=4,Y=e.current;Y!==null;){var s=Y,i=s.child;if(Y.flags&16){var l=s.deletions;if(l!==null){for(var d=0;d<l.length;d++){var u=l[d];for(Y=u;Y!==null;){var f=Y;switch(f.tag){case 0:case 11:case 15:tr(8,f,s)}var m=f.child;if(m!==null)m.return=f,Y=m;else for(;Y!==null;){f=Y;var g=f.sibling,h=f.return;if(vm(f),f===u){Y=null;break}if(g!==null){g.return=h,Y=g;break}Y=h}}}var x=s.alternate;if(x!==null){var p=x.child;if(p!==null){x.child=null;do{var _=p.sibling;p.sibling=null,p=_}while(p!==null)}}Y=s}}if(s.subtreeFlags&2064&&i!==null)i.return=s,Y=i;else e:for(;Y!==null;){if(s=Y,s.flags&2048)switch(s.tag){case 0:case 11:case 15:tr(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,Y=y;break e}Y=s.return}}var b=e.current;for(Y=b;Y!==null;){i=Y;var v=i.child;if(i.subtreeFlags&2064&&v!==null)v.return=i,Y=v;else e:for(i=b;Y!==null;){if(l=Y,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:_s(9,l)}}catch(S){_e(l,l.return,S)}if(l===i){Y=null;break e}var I=l.sibling;if(I!==null){I.return=l.return,Y=I;break e}Y=l.return}}if(oe=r,bt(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(ms,e)}catch{}a=!0}return a}finally{ce=t,mn.transition=n}}return!1}function Vd(e,n,t){n=Ia(t,n),n=lm(e,n,1),e=lt(e,n,1),n=Ge(),e!==null&&(Mr(e,1,n),qe(e,n))}function _e(e,n,t){if(e.tag===3)Vd(e,e,t);else for(;n!==null;){if(n.tag===3){Vd(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ct===null||!ct.has(a))){e=Ia(t,e),e=cm(n,e,1),n=lt(n,e,1),e=Ge(),n!==null&&(Mr(n,1,e),qe(n,e));break}}n=n.return}}function E0(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),n=Ge(),e.pingedLanes|=e.suspendedLanes&t,De===e&&(ze&t)===t&&(Te===4||Te===3&&(ze&130023424)===ze&&500>ke()-cc?Ct(e,0):lc|=t),qe(e,n)}function Tm(e,n){n===0&&(e.mode&1?(n=Fr,Fr<<=1,!(Fr&130023424)&&(Fr=4194304)):n=1);var t=Ge();e=Hn(e,n),e!==null&&(Mr(e,n,t),qe(e,t))}function D0(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Tm(e,t)}function $0(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(W(314))}a!==null&&a.delete(n),Tm(e,t)}var Mm;Mm=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Xe.current)Ze=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ze=!1,y0(e,n,t);Ze=!!(e.flags&131072)}else Ze=!1,ge&&n.flags&1048576&&Ap(n,Lo,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;bo(e,n),e=n.pendingProps;var r=ba(n,Je.current);ma(n,t),r=tc(null,n,a,e,r,t);var s=ac();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Qe(a)?(s=!0,Vo(n)):s=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Xl(n),r.updater=ys,n.stateNode=r,r._reactInternals=n,Xi(n,a,e,t),n=el(null,n,a,!0,s,t)):(n.tag=0,ge&&s&&Fl(n),Fe(null,n,r,t),n=n.child),n;case 16:a=n.elementType;e:{switch(bo(e,n),e=n.pendingProps,r=a._init,a=r(a._payload),n.type=a,r=n.tag=z0(a),e=_n(a,e),r){case 0:n=qi(null,n,a,e,t);break e;case 1:n=Cd(null,n,a,e,t);break e;case 11:n=wd(null,n,a,e,t);break e;case 14:n=Sd(null,n,a,_n(a.type,e),t);break e}throw Error(W(306,a,""))}return n;case 0:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:_n(a,r),qi(e,n,a,r,t);case 1:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:_n(a,r),Cd(e,n,a,r,t);case 3:e:{if(mm(n),e===null)throw Error(W(387));a=n.pendingProps,s=n.memoizedState,r=s.element,Op(e,n),Jo(n,a,null,t);var i=n.memoizedState;if(a=i.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){r=Ia(Error(W(423)),n),n=Nd(e,n,a,t,r);break e}else if(a!==r){r=Ia(Error(W(424)),n),n=Nd(e,n,a,t,r);break e}else for(an=it(n.stateNode.containerInfo.firstChild),rn=n,ge=!0,kn=null,t=Rp(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(va(),a===r){n=Un(e,n,t);break e}Fe(e,n,a,t)}n=n.child}return n;case 5:return Kp(n),e===null&&Wi(n),a=n.type,r=n.pendingProps,s=e!==null?e.memoizedProps:null,i=r.children,Bi(a,r)?i=null:s!==null&&Bi(a,s)&&(n.flags|=32),pm(e,n),Fe(e,n,i,t),n.child;case 6:return e===null&&Wi(n),null;case 13:return fm(e,n,t);case 4:return Ql(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=ya(n,null,a,t):Fe(e,n,a,t),n.child;case 11:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:_n(a,r),wd(e,n,a,r,t);case 7:return Fe(e,n,n.pendingProps,t),n.child;case 8:return Fe(e,n,n.pendingProps.children,t),n.child;case 12:return Fe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(a=n.type._context,r=n.pendingProps,s=n.memoizedProps,i=r.value,ue(Oo,a._currentValue),a._currentValue=i,s!==null)if(Sn(s.value,i)){if(s.children===r.children&&!Xe.current){n=Un(e,n,t);break e}}else for(s=n.child,s!==null&&(s.return=n);s!==null;){var l=s.dependencies;if(l!==null){i=s.child;for(var d=l.firstContext;d!==null;){if(d.context===a){if(s.tag===1){d=Jn(-1,t&-t),d.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?d.next=d:(d.next=f.next,f.next=d),u.pending=d}}s.lanes|=t,d=s.alternate,d!==null&&(d.lanes|=t),Zi(s.return,t,n),l.lanes|=t;break}d=d.next}}else if(s.tag===10)i=s.type===n.type?null:s.child;else if(s.tag===18){if(i=s.return,i===null)throw Error(W(341));i.lanes|=t,l=i.alternate,l!==null&&(l.lanes|=t),Zi(i,t,n),i=s.sibling}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===n){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}Fe(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,a=n.pendingProps.children,ma(n,t),r=xn(r),a=a(r),n.flags|=1,Fe(e,n,a,t),n.child;case 14:return a=n.type,r=_n(a,n.pendingProps),r=_n(a.type,r),Sd(e,n,a,r,t);case 15:return dm(e,n,n.type,n.pendingProps,t);case 17:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:_n(a,r),bo(e,n),n.tag=1,Qe(a)?(e=!0,Vo(n)):e=!1,ma(n,t),im(n,a,r),Xi(n,a,r,t),el(null,n,a,!0,e,t);case 19:return gm(e,n,t);case 22:return um(e,n,t)}throw Error(W(156,n.tag))};function Em(e,n){return rp(e,n)}function A0(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(e,n,t,a){return new A0(e,n,t,a)}function mc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function z0(e){if(typeof e=="function")return mc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Dl)return 11;if(e===$l)return 14}return 2}function ut(e,n){var t=e.alternate;return t===null?(t=pn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function _o(e,n,t,a,r,s){var i=2;if(a=e,typeof e=="function")mc(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Zt:return Nt(t.children,r,s,n);case El:i=8,r|=8;break;case _i:return e=pn(12,t,n,r|2),e.elementType=_i,e.lanes=s,e;case Ii:return e=pn(13,t,n,r),e.elementType=Ii,e.lanes=s,e;case ki:return e=pn(19,t,n,r),e.elementType=ki,e.lanes=s,e;case Ku:return ks(t,r,s,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lu:i=10;break e;case Ou:i=9;break e;case Dl:i=11;break e;case $l:i=14;break e;case Xn:i=16,a=null;break e}throw Error(W(130,e==null?e:typeof e,""))}return n=pn(i,t,n,r),n.elementType=e,n.type=a,n.lanes=s,n}function Nt(e,n,t,a){return e=pn(7,e,a,n),e.lanes=t,e}function ks(e,n,t,a){return e=pn(22,e,a,n),e.elementType=Ku,e.lanes=t,e.stateNode={isHidden:!1},e}function ui(e,n,t){return e=pn(6,e,null,n),e.lanes=t,e}function pi(e,n,t){return n=pn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function P0(e,n,t,a,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hs(0),this.expirationTimes=Hs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hs(0),this.identifierPrefix=a,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function fc(e,n,t,a,r,s,i,l,d){return e=new P0(e,n,t,l,d),n===1?(n=1,s===!0&&(n|=8)):n=0,s=pn(3,null,null,n),e.current=s,s.stateNode=e,s.memoizedState={element:a,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xl(s),e}function V0(e,n,t){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wt,key:a==null?null:""+a,children:e,containerInfo:n,implementation:t}}function Dm(e){if(!e)return ft;e=e._reactInternals;e:{if(Rt(e)!==e||e.tag!==1)throw Error(W(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Qe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(W(171))}if(e.tag===1){var t=e.type;if(Qe(t))return Dp(e,t,n)}return n}function $m(e,n,t,a,r,s,i,l,d){return e=fc(t,a,!0,e,r,s,i,l,d),e.context=Dm(null),t=e.current,a=Ge(),r=dt(t),s=Jn(a,r),s.callback=n??null,lt(t,s,r),e.current.lanes=r,Mr(e,r,a),qe(e,a),e}function js(e,n,t,a){var r=n.current,s=Ge(),i=dt(r);return t=Dm(t),n.context===null?n.context=t:n.pendingContext=t,n=Jn(s,i),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=lt(r,n,i),e!==null&&(wn(e,r,i,s),go(e,r,i)),i}function Yo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function gc(e,n){Rd(e,n),(e=e.alternate)&&Rd(e,n)}function R0(){return null}var Am=typeof reportError=="function"?reportError:function(e){console.error(e)};function hc(e){this._internalRoot=e}ws.prototype.render=hc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(W(409));js(e,n,null,null)};ws.prototype.unmount=hc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;zt(function(){js(null,e,null,null)}),n[Gn]=null}};function ws(e){this._internalRoot=e}ws.prototype.unstable_scheduleHydration=function(e){if(e){var n=up();e={blockedOn:null,target:e,priority:n};for(var t=0;t<qn.length&&n!==0&&n<qn[t].priority;t++);qn.splice(t,0,e),t===0&&mp(e)}};function xc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ss(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ld(){}function L0(e,n,t,a,r){if(r){if(typeof a=="function"){var s=a;a=function(){var u=Yo(i);s.call(u)}}var i=$m(n,a,e,0,null,!1,!1,"",Ld);return e._reactRootContainer=i,e[Gn]=i.current,gr(e.nodeType===8?e.parentNode:e),zt(),i}for(;r=e.lastChild;)e.removeChild(r);if(typeof a=="function"){var l=a;a=function(){var u=Yo(d);l.call(u)}}var d=fc(e,0,!1,null,null,!1,!1,"",Ld);return e._reactRootContainer=d,e[Gn]=d.current,gr(e.nodeType===8?e.parentNode:e),zt(function(){js(n,d,t,a)}),d}function Cs(e,n,t,a,r){var s=t._reactRootContainer;if(s){var i=s;if(typeof r=="function"){var l=r;r=function(){var d=Yo(i);l.call(d)}}js(n,i,e,r)}else i=L0(t,n,e,r,a);return Yo(i)}cp=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Wa(n.pendingLanes);t!==0&&(Pl(n,t|1),qe(n,ke()),!(oe&6)&&(ka=ke()+500,bt()))}break;case 13:zt(function(){var a=Hn(e,1);if(a!==null){var r=Ge();wn(a,e,1,r)}}),gc(e,1)}};Vl=function(e){if(e.tag===13){var n=Hn(e,134217728);if(n!==null){var t=Ge();wn(n,e,134217728,t)}gc(e,134217728)}};dp=function(e){if(e.tag===13){var n=dt(e),t=Hn(e,n);if(t!==null){var a=Ge();wn(t,e,n,a)}gc(e,n)}};up=function(){return ce};pp=function(e,n){var t=ce;try{return ce=e,n()}finally{ce=t}};$i=function(e,n,t){switch(n){case"input":if(Si(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var r=xs(a);if(!r)throw Error(W(90));Bu(a),Si(a,r)}}}break;case"textarea":Gu(e,t);break;case"select":n=t.value,n!=null&&ca(e,!!t.multiple,n,!1)}};Qu=dc;qu=zt;var O0={usingClientEntryPoint:!1,Events:[Dr,qt,xs,Yu,Xu,dc]},Ka={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},K0={bundleType:Ka.bundleType,version:Ka.version,rendererPackageName:Ka.rendererPackageName,rendererConfig:Ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tp(e),e===null?null:e.stateNode},findFiberByHostInstance:Ka.findFiberByHostInstance||R0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var no=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!no.isDisabled&&no.supportsFiber)try{ms=no.inject(K0),En=no}catch{}}sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O0;sn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xc(n))throw Error(W(200));return V0(e,n,null,t)};sn.createRoot=function(e,n){if(!xc(e))throw Error(W(299));var t=!1,a="",r=Am;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=fc(e,1,!1,null,null,t,!1,a,r),e[Gn]=n.current,gr(e.nodeType===8?e.parentNode:e),new hc(n)};sn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(W(188)):(e=Object.keys(e).join(","),Error(W(268,e)));return e=tp(n),e=e===null?null:e.stateNode,e};sn.flushSync=function(e){return zt(e)};sn.hydrate=function(e,n,t){if(!Ss(n))throw Error(W(200));return Cs(null,e,n,!0,t)};sn.hydrateRoot=function(e,n,t){if(!xc(e))throw Error(W(405));var a=t!=null&&t.hydratedSources||null,r=!1,s="",i=Am;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=$m(n,null,e,1,t??null,r,!1,s,i),e[Gn]=n.current,gr(e),a)for(e=0;e<a.length;e++)t=a[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new ws(n)};sn.render=function(e,n,t){if(!Ss(n))throw Error(W(200));return Cs(null,e,n,!1,t)};sn.unmountComponentAtNode=function(e){if(!Ss(e))throw Error(W(40));return e._reactRootContainer?(zt(function(){Cs(null,null,e,!1,function(){e._reactRootContainer=null,e[Gn]=null})}),!0):!1};sn.unstable_batchedUpdates=dc;sn.unstable_renderSubtreeIntoContainer=function(e,n,t,a){if(!Ss(t))throw Error(W(200));if(e==null||e._reactInternals===void 0)throw Error(W(38));return Cs(e,n,t,!1,a)};sn.version="18.3.1-next-f1338f8080-20240426";function zm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zm)}catch(e){console.error(e)}}zm(),zu.exports=sn;var Ar=zu.exports,Od=Ar;vi.createRoot=Od.createRoot,vi.hydrateRoot=Od.hydrateRoot;const ga=["player1","player2","player3","player4","player5","player6","player7","player8"];function J0(e,n){return e.players[n]}function B0(e,n,t){return{...e,players:{...e.players,[n]:t}}}function Pm(e,n){const t=e.teams[n];return e.playerIds.filter(a=>a!==n&&e.teams[a]!==t&&!e.players[a].isDefeated)}function Ne(e){return`P${e.replace("player","")}`}const F0=[{id:"ag-1",unitDeckId:"AG",nameJa:"ランス",nameCn:"长枪",actionType:"melee",frontImageId:"cards/ag/ag-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"ag-2",unitDeckId:"AG",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ag/ag-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ag-3",unitDeckId:"AG",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ag/ag-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ag-4",unitDeckId:"AG",nameJa:"スモールレーザー",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/ag/ag-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2,isEnergyWeapon:!0},{id:"ag-5",unitDeckId:"AG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ag/ag-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"ag-6",unitDeckId:"AG",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ag/ag-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-7",unitDeckId:"AG",nameJa:"ランス",nameCn:"长枪",actionType:"melee",frontImageId:"cards/ag/ag-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"ag-8",unitDeckId:"AG",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ag/ag-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-9",unitDeckId:"AG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/ag/ag-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"ag-10",unitDeckId:"AG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ag-11",unitDeckId:"AG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/ag/ag-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"ag-12",unitDeckId:"AG",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ag/ag-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"ag-13",unitDeckId:"AG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ag-14",unitDeckId:"AG",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ag/ag-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-15",unitDeckId:"AG",nameJa:"バーニア",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/ag/ag-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ag-16",unitDeckId:"AG",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/ag/ag-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ag-17",unitDeckId:"AG",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/ag/ag-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ag-18",unitDeckId:"AG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ag-19",unitDeckId:"AG",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ag/ag-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-20",unitDeckId:"AG",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ag/ag-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-21",unitDeckId:"AG",nameJa:"バーニア",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/ag/ag-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"}],G0=[{id:"ar-1",unitDeckId:"AR",nameJa:"シールド",nameCn:"护盾",actionType:"armor",frontImageId:"cards/ar/ar-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止4点射击伤害。该卡在准备区时，可以将其破坏并防止4点任意伤害。",armorValue:4},{id:"ar-2",unitDeckId:"AR",nameJa:"アンカー",nameCn:"长锚",actionType:"ranged",frontImageId:"cards/ar/ar-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:1,rangeMax:3,damage:void 0,effectText:"射击前可以改变机甲的朝向。命中后，使攻击目标强制移动到自机面前，期间目标朝向不变。"},{id:"ar-3",unitDeckId:"AR",nameJa:"陸上機雷",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/ar/ar-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"在自机周围8格不重叠地设置机雷指示物和替身雷各2个。在各个时机结束时，检查是否有机甲位于指示物所在格。若有，将指示物翻开展示，如果是机雷的话对所在格中的机甲造成伤害，然后将指示物弃掉。"},{id:"ar-4",unitDeckId:"AR",nameJa:"陸上機雷",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/ar/ar-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"在自机周围8格不重叠地设置机雷指示物和替身雷各2个。在各个时机结束时，检查是否有机甲位于指示物所在格。若有，将指示物翻开展示，如果是机雷的话对所在格中的机甲造成伤害，然后将指示物弃掉。"},{id:"ar-5",unitDeckId:"AR",nameJa:"メイス",nameCn:"狼牙棒",actionType:"melee",frontImageId:"cards/ar/ar-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ar-6",unitDeckId:"AR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ar/ar-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ar-7",unitDeckId:"AR",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ar-8",unitDeckId:"AR",nameJa:"移動６",nameCn:"移动6",actionType:"movement",frontImageId:"cards/ar/ar-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:6,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-9",unitDeckId:"AR",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ar/ar-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"ar-10",unitDeckId:"AR",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/ar/ar-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ar-11",unitDeckId:"AR",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ar-12",unitDeckId:"AR",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/ar/ar-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ar-13",unitDeckId:"AR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ar/ar-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ar-14",unitDeckId:"AR",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ar-15",unitDeckId:"AR",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ar/ar-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-16",unitDeckId:"AR",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ar/ar-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-17",unitDeckId:"AR",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ar/ar-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-18",unitDeckId:"AR",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ar/ar-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-19",unitDeckId:"AR",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ar/ar-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-20",unitDeckId:"AR",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ar/ar-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"}],H0=[{id:"bg-1",unitDeckId:"BG",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4,hasBombIcon:!0},{id:"bg-2",unitDeckId:"BG",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4,hasBombIcon:!0},{id:"bg-3",unitDeckId:"BG",nameJa:"ミドルレーザ",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/bg/bg-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3},{id:"bg-4",unitDeckId:"BG",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4,hasBombIcon:!0},{id:"bg-5",unitDeckId:"BG",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/bg/bg-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"bg-6",unitDeckId:"BG",nameJa:"スモールレーザ",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/bg/bg-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2},{id:"bg-7",unitDeckId:"BG",nameJa:"スナイパーライフル",nameCn:"狙击步枪",actionType:"ranged",frontImageId:"cards/bg/bg-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3,hasBombIcon:!0},{id:"bg-8",unitDeckId:"BG",nameJa:"スナイパーライフル",nameCn:"狙击步枪",actionType:"ranged",frontImageId:"cards/bg/bg-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3,hasBombIcon:!0},{id:"bg-9",unitDeckId:"BG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/bg/bg-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"bg-10",unitDeckId:"BG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/bg/bg-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"bg-11",unitDeckId:"BG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/bg/bg-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"bg-12",unitDeckId:"BG",nameJa:"スモールレーザ",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/bg/bg-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2},{id:"bg-13",unitDeckId:"BG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/bg/bg-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"bg-14",unitDeckId:"BG",nameJa:"ミドルレーザ",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/bg/bg-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3},{id:"bg-15",unitDeckId:"BG",nameJa:"スナイパーライフル",nameCn:"狙击步枪",actionType:"ranged",frontImageId:"cards/bg/bg-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3,hasBombIcon:!0},{id:"bg-16",unitDeckId:"BG",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/bg/bg-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"bg-17",unitDeckId:"BG",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/bg/bg-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"bg-18",unitDeckId:"BG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/bg/bg-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"bg-19",unitDeckId:"BG",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/bg/bg-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg-20",unitDeckId:"BG",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/bg/bg-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg-21",unitDeckId:"BG",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/bg/bg-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg-22",unitDeckId:"BG",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/bg/bg-22-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"bg-23",unitDeckId:"BG",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/bg/bg-23-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"}],U0=[{id:"ho-1",unitDeckId:"HO",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ho/ho-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-2",unitDeckId:"HO",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ho/ho-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-3",unitDeckId:"HO",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ho/ho-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-4",unitDeckId:"HO",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ho/ho-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-5",unitDeckId:"HO",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ho/ho-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"ho-6",unitDeckId:"HO",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ho/ho-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"ho-7",unitDeckId:"HO",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ho/ho-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ho-8",unitDeckId:"HO",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ho/ho-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-9",unitDeckId:"HO",nameJa:"移動６",nameCn:"移动6",actionType:"movement",frontImageId:"cards/ho/ho-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:6,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-10",unitDeckId:"HO",nameJa:"移動７",nameCn:"移动7",actionType:"movement",frontImageId:"cards/ho/ho-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:7,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-11",unitDeckId:"HO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ho/ho-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ho-12",unitDeckId:"HO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ho/ho-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ho-13",unitDeckId:"HO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/ho/ho-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"ho-14",unitDeckId:"HO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/ho/ho-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"ho-15",unitDeckId:"HO",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ho/ho-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ho-16",unitDeckId:"HO",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/ho/ho-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"ho-17",unitDeckId:"HO",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/ho/ho-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"}],W0=[{id:"hy-1",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-2",unitDeckId:"HY",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-3",unitDeckId:"HY",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-4",unitDeckId:"HY",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-5",unitDeckId:"HY",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-6",unitDeckId:"HY",nameJa:"ガトリングガン",nameCn:"加特林",actionType:"ranged",frontImageId:"cards/hy/hy-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:5,damage:3,hasBombIcon:!0},{id:"hy-7",unitDeckId:"HY",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-8",unitDeckId:"HY",nameJa:"ガトリングガン",nameCn:"加特林",actionType:"ranged",frontImageId:"cards/hy/hy-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:5,damage:3,hasBombIcon:!0},{id:"hy-9",unitDeckId:"HY",nameJa:"バーニア",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/hy/hy-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"hy-10",unitDeckId:"HY",nameJa:"バーニア",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/hy/hy-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"hy-11",unitDeckId:"HY",nameJa:"スパイク",nameCn:"长钉",actionType:"charge",frontImageId:"cards/hy/hy-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"不进行突击移动，选择自机正面的机甲为攻击目标。对对方造成自机突击伤害+1的近战伤害。对自机造成对方被突击伤害-1的近战伤害。"},{id:"hy-12",unitDeckId:"HY",nameJa:"シールド",nameCn:"护盾",actionType:"armor",frontImageId:"cards/hy/hy-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止4点射击伤害。该卡在准备区时，可以将其破坏并防止4点任意伤害。",armorValue:4},{id:"hy-13",unitDeckId:"HY",nameJa:"シールド",nameCn:"护盾",actionType:"armor",frontImageId:"cards/hy/hy-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止4点射击伤害。该卡在准备区时，可以将其破坏并防止4点任意伤害。",armorValue:4},{id:"hy-14",unitDeckId:"HY",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/hy/hy-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"hy-15",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-16",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-17",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-18",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-19",unitDeckId:"HY",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/hy/hy-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"hy-20",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-21",unitDeckId:"HY",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/hy/hy-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"hy-22",unitDeckId:"HY",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/hy/hy-22-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"hy-23",unitDeckId:"HY",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/hy/hy-23-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"hy-24",unitDeckId:"HY",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-24-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0}],Z0=[{id:"lg-1",unitDeckId:"LG",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/lg/lg-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-2",unitDeckId:"LG",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/lg/lg-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-3",unitDeckId:"LG",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/lg/lg-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-4",unitDeckId:"LG",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/lg/lg-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-5",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-6",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-7",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-8",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-9",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-10",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-11",unitDeckId:"LG",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/lg/lg-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"lg-12",unitDeckId:"LG",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/lg/lg-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"lg-13",unitDeckId:"LG",nameJa:"スパイク",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/lg/lg-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"lg-14",unitDeckId:"LG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/lg/lg-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"lg-15",unitDeckId:"LG",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/lg/lg-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"lg-16",unitDeckId:"LG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/lg/lg-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"lg-17",unitDeckId:"LG",nameJa:"パイルバンカー",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/lg/lg-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"lg-18",unitDeckId:"LG",nameJa:"パイルバンカー",nameCn:"长钉",actionType:"charge",frontImageId:"cards/lg/lg-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"不进行突击移动，选择自机正面的机甲为攻击目标。对对方造成自机突击伤害+1的近战伤害。对自机造成对方被突击伤害-1的近战伤害。"},{id:"lg-19",unitDeckId:"LG",nameJa:"クロー",nameCn:"爪",actionType:"melee",frontImageId:"cards/lg/lg-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:2,effectText:"（结算伤害前）如果攻击目标的手牌、辅助区、准备区中有类别包括“装甲”的卡牌，选择其中两张破坏。"},{id:"lg-20",unitDeckId:"LG",nameJa:"クロー",nameCn:"爪",actionType:"melee",frontImageId:"cards/lg/lg-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:2,effectText:"（结算伤害前）如果攻击目标的手牌、辅助区、准备区中有类别包括“装甲”的卡牌，选择其中两张破坏。"},{id:"lg-21",unitDeckId:"LG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/lg/lg-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"lg-22",unitDeckId:"LG",nameJa:"ホイール",nameCn:"滑轮",actionType:"auxiliary",frontImageId:"cards/lg/lg-22-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:○、近战:×。使用后移动力+2。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"lg-23",unitDeckId:"LG",nameJa:"ホイール",nameCn:"滑轮",actionType:"auxiliary",frontImageId:"cards/lg/lg-23-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:○、近战:×。使用后移动力+2。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"}],Y0=[{id:"lo-1",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-2",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-3",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-4",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-5",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-6",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-7",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-8",unitDeckId:"LO",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/lo/lo-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"lo-9",unitDeckId:"LO",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/lo/lo-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"lo-10",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-11",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-12",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-13",unitDeckId:"LO",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/lo/lo-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-14",unitDeckId:"LO",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/lo/lo-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-15",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-16",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-17",unitDeckId:"LO",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/lo/lo-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-18",unitDeckId:"LO",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/lo/lo-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-19",unitDeckId:"LO",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/lo/lo-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-20",unitDeckId:"LO",nameJa:"スモールレーザー",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/lo/lo-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2,isEnergyWeapon:!0}],X0=[{id:"tr-1",unitDeckId:"TR",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/tr/tr-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-2",unitDeckId:"TR",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/tr/tr-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-3",unitDeckId:"TR",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/tr/tr-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-4",unitDeckId:"TR",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/tr/tr-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-5",unitDeckId:"TR",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/tr/tr-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-6",unitDeckId:"TR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/tr/tr-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"tr-7",unitDeckId:"TR",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/tr/tr-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"tr-8",unitDeckId:"TR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/tr/tr-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"tr-9",unitDeckId:"TR",nameJa:"移動６",nameCn:"移动6",actionType:"movement",frontImageId:"cards/tr/tr-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:6,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-10",unitDeckId:"TR",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/tr/tr-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"tr-11",unitDeckId:"TR",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/tr/tr-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"tr-12",unitDeckId:"TR",nameJa:"アクス",nameCn:"斧头",actionType:"melee",frontImageId:"cards/tr/tr-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"tr-13",unitDeckId:"TR",nameJa:"アクス",nameCn:"斧头",actionType:"melee",frontImageId:"cards/tr/tr-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"tr-14",unitDeckId:"TR",nameJa:"パイルバンカー",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/tr/tr-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"tr-15",unitDeckId:"TR",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/tr/tr-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"tr-16",unitDeckId:"TR",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/tr/tr-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"tr-17",unitDeckId:"TR",nameJa:"パイルバンカー",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/tr/tr-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"tr-18",unitDeckId:"TR",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/tr/tr-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"tr-19",unitDeckId:"TR",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/tr/tr-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0}],Q0=[{id:"zb-1",unitDeckId:"ZB",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ag/ag-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-2",unitDeckId:"ZB",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ag/ag-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-3",unitDeckId:"ZB",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ag/ag-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-4",unitDeckId:"ZB",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ag/ag-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-5",unitDeckId:"ZB",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ag/ag-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-6",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-7",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-8",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-9",unitDeckId:"ZB",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ag/ag-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-10",unitDeckId:"ZB",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ag/ag-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-11",unitDeckId:"ZB",nameJa:"ムーブセンサー",nameCn:"移动感应器",actionType:"auxiliary",frontImageId:"cards/ho/ho-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-12",unitDeckId:"ZB",nameJa:"ムーブセンサー",nameCn:"移动感应器",actionType:"auxiliary",frontImageId:"cards/ho/ho-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-13",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-14",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-15",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-16",unitDeckId:"ZB",nameJa:"ラージレーザー",nameCn:"大口径激光",actionType:"ranged",frontImageId:"cards/bg/bg-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"zb-17",unitDeckId:"ZB",nameJa:"ブレード",nameCn:"剑",actionType:"melee",frontImageId:"cards/zb/zb-17-front.png",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"zb-18",unitDeckId:"ZB",nameJa:"バルカン",nameCn:"火神炮",actionType:"ranged",frontImageId:"cards/zb/zb-18-front.png",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:2,damage:2},{id:"zb-19",unitDeckId:"ZB",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ag/ag-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-20",unitDeckId:"ZB",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ag/ag-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-21",unitDeckId:"ZB",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4},{id:"zb-22",unitDeckId:"ZB",nameJa:"ラージレーザー",nameCn:"大口径激光",actionType:"ranged",frontImageId:"cards/bg/bg-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"zb-23",unitDeckId:"ZB",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4}],q0=[{id:"ag_plus-1",unitDeckId:"AG+",nameJa:"コルセスカ",nameCn:"长柄三叉矛",actionType:"melee",frontImageId:"cards/ag_plus/ag_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ag_plus-2",unitDeckId:"AG+",nameJa:"コルセスカ",nameCn:"长柄三叉矛",actionType:"melee",frontImageId:"cards/ag_plus/ag_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ag_plus-3",unitDeckId:"AG+",nameJa:"ネット",nameCn:"网",actionType:"ranged",frontImageId:"cards/ag_plus/ag_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:5,damage:void 0},{id:"ag_plus-4",unitDeckId:"AG+",nameJa:"ボーラ",nameCn:"投石索",actionType:"ranged",frontImageId:"cards/ag_plus/ag_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:4,damage:void 0},{id:"ag_plus-5",unitDeckId:"AG+",nameJa:"バルカン",nameCn:"火神炮",actionType:"ranged",frontImageId:"cards/ag_plus/ag_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:2,damage:2}],eh=[{id:"ar_plus-1",unitDeckId:"AR+",nameJa:"ウォーハンマー",nameCn:"战锤",actionType:"melee",frontImageId:"cards/ar_plus/ar_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"ar_plus-2",unitDeckId:"AR+",nameJa:"強化機雷",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/ar_plus/ar_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,hasBombIcon:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"ar_plus-3",unitDeckId:"AR+",nameJa:"ロングアンカー",nameCn:"长锚",actionType:"ranged",frontImageId:"cards/ar_plus/ar_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:4,damage:1},{id:"ar_plus-4",unitDeckId:"AR+",nameJa:"強化機雷",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/ar_plus/ar_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,hasBombIcon:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5}],nh=[{id:"bg_plus-1",unitDeckId:"BG+",nameJa:"自爆装置",nameCn:"自爆装置",actionType:"mine",frontImageId:"cards/bg_plus/bg_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,hasBombIcon:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg_plus-2",unitDeckId:"BG+",nameJa:"大口径ロケット砲",nameCn:"大口径火箭炮",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:5},{id:"bg_plus-3",unitDeckId:"BG+",nameJa:"大口径ロケット砲",nameCn:"大口径火箭炮",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:5},{id:"bg_plus-4",unitDeckId:"BG+",nameJa:"高品質ライフル",nameCn:"高品质步枪",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3},{id:"bg_plus-5",unitDeckId:"BG+",nameJa:"スモークミサイル",nameCn:"烟雾导弹",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:5,damage:void 0}],th=[{id:"ho_plus-1",unitDeckId:"HO+",nameJa:"スタンウィップ",nameCn:"电击鞭",actionType:"melee",frontImageId:"cards/ho_plus/ho_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:1},{id:"ho_plus-2",unitDeckId:"HO+",nameJa:"チェーンブレード",nameCn:"链锯剑",actionType:"melee",frontImageId:"cards/ho_plus/ho_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ho_plus-3",unitDeckId:"HO+",nameJa:"高品質ロケット砲",nameCn:"高品质火箭炮",actionType:"ranged",frontImageId:"cards/ho_plus/ho_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4},{id:"ho_plus-4",unitDeckId:"HO+",nameJa:"火炎放射器",nameCn:"火焰喷射器",actionType:"ranged",frontImageId:"cards/ho_plus/ho_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2}],ah=[{id:"hy_plus-1",unitDeckId:"HY+",nameJa:"ショットガン",nameCn:"散弹枪",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:3,damage:4},{id:"hy_plus-2",unitDeckId:"HY+",nameJa:"ショットガン",nameCn:"散弹枪",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:3,damage:4},{id:"hy_plus-3",unitDeckId:"HY+",nameJa:"ガトリングカノン",nameCn:"加特林炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:4},{id:"hy_plus-4",unitDeckId:"HY+",nameJa:"ガトリングカノン",nameCn:"加特林炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:4},{id:"hy_plus-5",unitDeckId:"HY+",nameJa:"ガトリングカノン",nameCn:"加特林炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:4},{id:"hy_plus-6",unitDeckId:"HY+",nameJa:"ミサイルシールド",nameCn:"导弹盾",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3},{id:"hy_plus-7",unitDeckId:"HY+",nameJa:"高品質ロケット砲",nameCn:"高品质火箭炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4},{id:"hy_plus-8",unitDeckId:"HY+",nameJa:"ミサイルシールド",nameCn:"导弹盾",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3}],rh=[{id:"lg_plus-1",unitDeckId:"LG+",nameJa:"ヒートクロー",nameCn:"热力爪",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-2",unitDeckId:"LG+",nameJa:"グレネードランチャー",nameCn:"榴弹发射器",actionType:"ranged",frontImageId:"cards/lg_plus/lg_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:5,damage:3},{id:"lg_plus-3",unitDeckId:"LG+",nameJa:"グレネードランチャー",nameCn:"榴弹发射器",actionType:"ranged",frontImageId:"cards/lg_plus/lg_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:5,damage:3},{id:"lg_plus-4",unitDeckId:"LG+",nameJa:"キャタピラ",nameCn:"履带",actionType:"auxiliary",frontImageId:"cards/lg_plus/lg_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-5",unitDeckId:"LG+",nameJa:"リボルバンカー",nameCn:"左轮打桩机",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6},{id:"lg_plus-6",unitDeckId:"LG+",nameJa:"キャタピラ",nameCn:"履带",actionType:"auxiliary",frontImageId:"cards/lg_plus/lg_plus-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-7",unitDeckId:"LG+",nameJa:"ヒートクロー",nameCn:"热力爪",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-8",unitDeckId:"LG+",nameJa:"リボルバンカー",nameCn:"左轮打桩机",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6}],oh=[{id:"lo_plus-1",unitDeckId:"LO+",nameJa:"防水膜",nameCn:"防水膜",actionType:"auxiliary",frontImageId:"cards/lo_plus/lo_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo_plus-2",unitDeckId:"LO+",nameJa:"追加装甲",nameCn:"附加装甲",actionType:"armor",frontImageId:"cards/lo_plus/lo_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"lo_plus-3",unitDeckId:"LO+",nameJa:"パルスレーザー",nameCn:"脉冲激光",actionType:"ranged",frontImageId:"cards/lo_plus/lo_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:2,isEnergyWeapon:!0},{id:"lo_plus-4",unitDeckId:"LO+",nameJa:"サウンドストーム",nameCn:"声波风暴",actionType:"melee",frontImageId:"cards/lo_plus/lo_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0}],sh=[{id:"tr_plus-1",unitDeckId:"TR+",nameJa:"サウンドウェーブ",nameCn:"声波",actionType:"melee",frontImageId:"cards/tr_plus/tr_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr_plus-2",unitDeckId:"TR+",nameJa:"バルディッシュ",nameCn:"长柄斧",actionType:"melee",frontImageId:"cards/tr_plus/tr_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"tr_plus-3",unitDeckId:"TR+",nameJa:"バルディッシュ",nameCn:"长柄斧",actionType:"melee",frontImageId:"cards/tr_plus/tr_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"tr_plus-4",unitDeckId:"TR+",nameJa:"高圧縮レーザー",nameCn:"高压缩激光",actionType:"ranged",frontImageId:"cards/tr_plus/tr_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:4,isEnergyWeapon:!0},{id:"tr_plus-5",unitDeckId:"TR+",nameJa:"高圧縮レーザー",nameCn:"高压缩激光",actionType:"ranged",frontImageId:"cards/tr_plus/tr_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:4,isEnergyWeapon:!0}],ih=[{id:"zb_plus-1",unitDeckId:"ZB+",nameJa:"広射程ミサイル",nameCn:"广射程导弹",actionType:"ranged",frontImageId:"cards/zb_plus/zb_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:3},{id:"zb_plus-2",unitDeckId:"ZB+",nameJa:"ホバー",nameCn:"悬浮器",actionType:"auxiliary",frontImageId:"cards/zb_plus/zb_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb_plus-3",unitDeckId:"ZB+",nameJa:"ホバー",nameCn:"悬浮器",actionType:"auxiliary",frontImageId:"cards/zb_plus/zb_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb_plus-4",unitDeckId:"ZB+",nameJa:"チェーンブレード",nameCn:"链锯剑",actionType:"melee",frontImageId:"cards/zb_plus/zb_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"zb_plus-5",unitDeckId:"ZB+",nameJa:"ジャイアントシザース",nameCn:"巨型剪刀",actionType:"melee",frontImageId:"cards/zb_plus/zb_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:10},{id:"zb_plus-6",unitDeckId:"ZB+",nameJa:"広射程ミサイル",nameCn:"广射程导弹",actionType:"ranged",frontImageId:"cards/zb_plus/zb_plus-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:3}],lh=[{id:"ダミー-1",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-2",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-3",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-4",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-5",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-6",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-7",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-8",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-9",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-10",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-11",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-12",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-13",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-14",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-15",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-16",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-17",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-18",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-19",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-20",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0}],ch=[{id:"強化機雷-1",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-2",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-3",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-4",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-5",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-6",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-7",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-8",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-9",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-10",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-11",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-12",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-13",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-14",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-15",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-16",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5}],dh=[{id:"陸上機雷-1",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-2",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-3",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-4",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-5",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-6",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-7",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-8",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-9",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-10",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-11",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-12",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-13",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-14",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-15",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-16",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-17",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-18",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-19",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-20",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3}],Pt={AG:F0,AR:G0,BG:H0,HO:U0,HY:W0,LG:Z0,LO:Y0,TR:X0,ZB:Q0,"AG+":q0,"AR+":eh,"BG+":nh,"HO+":th,"HY+":ah,"LG+":rh,"LO+":oh,"TR+":sh,"ZB+":ih,ダミー:lh,強化機雷:ch,陸上機雷:dh};let uh=0;function ph(e,n){return`${e}-${n}-${uh++}`}function mh(e,n){const a=(Pt[e]??[]).map(r=>({instanceId:ph(r.id,n),defId:r.id,destroyed:!1}));return fh(a)}function fh(e){const n=[...e];for(let t=n.length-1;t>0;t--){const a=Math.floor(Math.random()*(t+1));[n[t],n[a]]=[n[a],n[t]]}return n}function Vm(e,n){const t=[...e];let a=n>>>0;for(let r=t.length-1;r>0;r--){a=a+1831565813>>>0;let s=Math.imul(a^a>>>15,a|1);s^=s+Math.imul(s^s>>>7,s|61);const i=((s^s>>>14)>>>0)/4294967296,l=Math.floor(i*(r+1));[t[r],t[l]]=[t[l],t[r]]}return{shuffled:t,nextSeed:a}}function gh(e,n){const t=Math.min(n,e.length);return{drawn:e.slice(0,t),remaining:e.slice(t)}}function te(e){for(const n of Object.values(Pt)){const t=n.find(a=>a.id===e);if(t)return t}}const c=(e=0)=>({terrain:"plain",elevation:0,variant:e}),j=(e=0)=>({terrain:"sand",elevation:0,variant:e}),U=(e=0)=>({terrain:"rubble",elevation:0,variant:e}),H=(e=0)=>({terrain:"forest",elevation:0,variant:e}),O=(e=0)=>({terrain:"water",elevation:0,variant:e}),T=e=>({terrain:"highland",elevation:e,variant:e}),hh={id:"map_1a",nameJa:"基本マップ1a",nameCn:"基础地图1a",width:7,height:11,maxPlayers:2,maxTeams:2,cells:[[j(),j(),j(),j(),j(),j(),j()],[c(),c(),c(),c(),c(),c(),c()],[c(),c(),c(),c(),c(),c(),c()],[T(2),T(1),c(),c(),c(),T(2),T(2)],[T(1),T(1),c(),c(),c(),T(2),c()],[c(),c(),c(),c(),c(),T(2),c()],[c(),c(),c(),c(),c(),c(),c()],[c(),c(),c(),T(1),T(1),T(2),T(2)],[c(),c(),c(),c(),c(),c(),c()],[c(),c(),c(),c(),c(),c(),c()],[U(),U(),U(),U(),U(),U(),U()]],startZones:{0:[{row:0,col:2},{row:0,col:3},{row:0,col:4}],1:[{row:10,col:2},{row:10,col:3},{row:10,col:4}]}},xh={id:"map_2a",nameJa:"基本マップ2a",nameCn:"基础地图2a",width:7,height:11,maxPlayers:2,maxTeams:2,cells:[[j(),j(),j(),j(),j(),j(),j()],[c(),c(),c(),c(),c(),c(),c()],[T(2),T(2),c(),c(),c(),c(),c()],[T(2),c(),c(),c(),c(),c(),c()],[T(2),c(),c(),c(),c(),c(),c()],[T(2),c(),c(),c(),c(),c(),c()],[T(2),T(2),c(),c(),c(),c(),c()],[c(),c(),c(),c(),H(),H(),c()],[c(),c(),c(),c(),H(),H(),c()],[c(),c(),c(),c(),c(),c(),c()],[j(),j(),j(),j(),j(),j(),j()]],startZones:{0:[{row:0,col:2},{row:0,col:3},{row:0,col:4}],1:[{row:10,col:2},{row:10,col:3},{row:10,col:4}]}},bh={id:"map_2b",nameJa:"基本マップ2b",nameCn:"基础地图2b",width:7,height:11,maxPlayers:2,maxTeams:2,cells:[[H(),H(),H(),c(),c(),c(),c()],[O(),O(),j(),c(),c(),c(),c()],[O(),O(),j(),c(),c(),c(),c()],[j(),O(),O(),j(),c(),c(),c()],[c(),j(),O(),O(),j(),c(),c()],[c(),c(),j(),O(),O(),j(),c()],[c(),c(),c(),O(),O(),j(),c()],[c(),c(),c(),j(),O(),O(),c()],[c(),c(),c(),c(),j(),O(),O()],[c(),c(),c(),c(),c(),c(),c()],[c(),c(),j(),j(),j(),c(),c()]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:0,col:2}],1:[{row:10,col:2},{row:10,col:3},{row:10,col:4}]}},vh={id:"map_3a",nameJa:"峡谷要塞",nameCn:"峡谷要塞",width:9,height:13,maxPlayers:4,maxTeams:4,cells:[[j(),j(),j(),j(),j(),j(),j(),j(),j()],[H(0),c(),c(),c(),c(),c(),c(),c(),H(1)],[c(),c(),c(),c(),c(),c(),c(),c(),c()],[T(2),T(3),T(1),c(),c(),c(),T(1),T(2),T(2)],[T(2),T(2),c(),c(),U(1),c(),c(),T(1),T(2)],[T(1),c(),U(0),U(2),c(),U(1),U(3),c(),T(1)],[c(),j(),O(0),O(1),j(),O(2),O(0),j(),c()],[T(1),c(),U(3),U(0),c(),U(2),U(1),c(),T(1)],[T(2),T(1),c(),c(),U(0),c(),c(),T(2),T(2)],[T(2),T(2),T(1),c(),c(),c(),T(1),T(3),T(2)],[c(),c(),c(),c(),c(),c(),c(),c(),c()],[H(2),c(),c(),c(),c(),c(),c(),c(),H(3)],[j(),j(),j(),j(),j(),j(),j(),j(),j()]],startZones:{0:[{row:0,col:1},{row:0,col:3},{row:0,col:4},{row:0,col:5},{row:0,col:7}],1:[{row:12,col:1},{row:12,col:3},{row:12,col:4},{row:12,col:5},{row:12,col:7}],2:[{row:2,col:0},{row:6,col:0}],3:[{row:2,col:8},{row:6,col:8}]}},yh={id:"map_3b",nameJa:"群島戦域",nameCn:"群岛战域",width:9,height:13,maxPlayers:4,maxTeams:4,cells:[[H(0),H(1),j(),j(),O(0),O(1),c(),c(),c()],[H(2),j(),c(),j(),O(2),c(),c(),j(),O(0)],[j(),O(0),j(),c(),c(),j(),O(1),O(0),O(2)],[O(1),O(2),c(),c(),T(1),c(),c(),O(2),O(1)],[O(0),j(),c(),T(1),T(2),T(1),c(),j(),O(0)],[O(2),c(),T(1),T(2),T(3),T(2),T(1),c(),O(1)],[O(1),j(),c(),T(2),H(0),T(2),c(),j(),O(2)],[O(0),c(),T(1),T(2),T(3),T(2),T(1),c(),O(0)],[O(2),j(),c(),T(1),T(2),T(1),c(),j(),O(1)],[O(1),O(0),c(),c(),T(1),c(),c(),O(0),O(2)],[O(0),O(2),O(1),j(),c(),c(),j(),O(1),j()],[c(),c(),O(0),j(),c(),j(),U(0),j(),U(1)],[c(),c(),c(),O(1),j(),j(),U(2),U(3),U(0)]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:1,col:0},{row:0,col:6},{row:0,col:7}],1:[{row:12,col:6},{row:12,col:7},{row:11,col:8},{row:12,col:0},{row:12,col:1}],2:[{row:2,col:3},{row:3,col:2}],3:[{row:10,col:4},{row:10,col:5}]}},_h={id:"map_4a",nameJa:"都市廃墟",nameCn:"都市废墟",width:11,height:15,maxPlayers:4,maxTeams:4,cells:[[U(0),j(),j(),j(),j(),j(),j(),j(),j(),j(),U(1)],[U(2),U(3),c(),c(),c(),c(),c(),H(0),H(1),c(),c()],[c(),U(0),U(1),c(),c(),U(2),c(),H(2),c(),c(),c()],[c(),c(),T(1),T(2),c(),U(3),c(),c(),c(),U(0),c()],[c(),c(),T(2),T(1),c(),c(),c(),c(),j(),O(0),j()],[U(1),c(),c(),c(),c(),U(0),c(),j(),O(1),O(2),c()],[U(2),U(0),c(),c(),c(),c(),j(),O(0),j(),c(),c()],[c(),c(),c(),c(),c(),T(3),c(),c(),c(),c(),c()],[c(),c(),j(),O(2),j(),c(),c(),c(),c(),U(1),U(2)],[c(),O(0),O(1),j(),c(),H(0),H(1),c(),c(),c(),U(0)],[c(),U(3),c(),c(),c(),H(2),H(3),c(),T(1),T(2),c()],[c(),c(),c(),U(1),c(),c(),c(),c(),T(2),T(1),c()],[c(),c(),U(2),U(0),c(),c(),c(),c(),c(),c(),c()],[c(),c(),c(),U(3),c(),c(),c(),U(1),U(2),c(),c()],[U(3),j(),j(),j(),j(),j(),j(),j(),j(),j(),U(2)]],startZones:{0:[{row:0,col:1},{row:0,col:3},{row:0,col:5},{row:0,col:7},{row:0,col:9}],1:[{row:14,col:1},{row:14,col:3},{row:14,col:5},{row:14,col:7},{row:14,col:9}],2:[{row:7,col:0},{row:8,col:0}],3:[{row:6,col:10},{row:7,col:10}]}},Ih={id:"map_5a",nameJa:"三叉戦場",nameCn:"三叉战场",width:13,height:17,maxPlayers:6,maxTeams:6,cells:[[c(),c(),c(),j(),j(),j(),j(),j(),j(),j(),c(),c(),c()],[c(),c(),j(),c(),c(),c(),c(),c(),c(),c(),j(),c(),c()],[c(),H(0),c(),c(),c(),c(),c(),c(),c(),c(),c(),H(1),c()],[H(2),H(0),c(),c(),c(),U(0),c(),U(1),c(),c(),c(),H(1),H(3)],[H(0),c(),c(),c(),j(),O(0),j(),O(1),j(),c(),c(),c(),H(2)],[c(),c(),c(),j(),O(1),O(0),c(),O(2),O(0),j(),c(),c(),c()],[c(),c(),T(1),T(2),j(),c(),c(),c(),j(),T(2),T(1),c(),c()],[c(),T(1),T(2),T(3),T(2),c(),c(),c(),T(2),T(3),T(2),T(1),c()],[c(),c(),T(2),T(3),U(0),T(2),T(3),T(2),U(1),T(3),T(2),c(),c()],[c(),T(1),T(2),T(3),T(2),c(),c(),c(),T(2),T(3),T(2),T(1),c()],[c(),c(),T(1),T(2),j(),c(),c(),c(),j(),T(2),T(1),c(),c()],[c(),c(),c(),j(),O(2),O(1),c(),O(0),O(2),j(),c(),c(),c()],[H(1),c(),c(),c(),j(),O(0),j(),O(1),j(),c(),c(),c(),H(0)],[H(3),H(2),c(),c(),c(),U(2),c(),U(3),c(),c(),c(),H(0),H(1)],[c(),H(0),c(),c(),c(),c(),c(),c(),c(),c(),c(),H(2),c()],[j(),j(),j(),j(),c(),c(),c(),c(),c(),j(),j(),j(),j()],[j(),j(),j(),j(),j(),c(),c(),c(),j(),j(),j(),j(),j()]],startZones:{0:[{row:0,col:4},{row:0,col:6},{row:0,col:8}],1:[{row:16,col:0},{row:16,col:1},{row:16,col:2}],2:[{row:16,col:10},{row:16,col:11},{row:16,col:12}],3:[{row:6,col:0},{row:6,col:1},{row:10,col:0}],4:[{row:6,col:11},{row:6,col:12},{row:10,col:12}],5:[{row:2,col:0},{row:2,col:6},{row:2,col:12}]}},kh={id:"map_6a",nameJa:"環状要塞",nameCn:"环形要塞",width:15,height:17,maxPlayers:8,maxTeams:8,cells:[[c(),c(),c(),c(),j(),j(),j(),j(),j(),j(),j(),c(),c(),c(),c()],[c(),c(),c(),j(),c(),c(),c(),c(),c(),c(),c(),j(),c(),c(),c()],[c(),c(),T(1),T(2),T(2),T(1),c(),c(),c(),T(1),T(2),T(2),T(1),c(),c()],[c(),U(0),T(1),c(),c(),c(),U(1),c(),U(2),c(),c(),c(),T(1),U(3),c()],[j(),c(),c(),c(),H(0),H(1),c(),c(),c(),H(2),H(3),c(),c(),c(),j()],[j(),c(),U(0),c(),H(2),c(),c(),c(),c(),c(),H(0),c(),U(1),c(),j()],[c(),U(2),T(1),c(),c(),c(),U(3),j(),U(0),c(),c(),c(),T(1),U(1),c()],[c(),c(),c(),c(),c(),j(),O(0),O(1),O(2),j(),c(),c(),c(),c(),c()],[c(),c(),c(),c(),j(),O(2),O(0),T(3),O(1),O(0),j(),c(),c(),c(),c()],[c(),c(),c(),c(),c(),j(),O(1),O(2),O(0),j(),c(),c(),c(),c(),c()],[c(),U(3),T(1),c(),c(),c(),U(1),j(),U(2),c(),c(),c(),T(1),U(0),c()],[j(),c(),U(2),c(),H(1),c(),c(),c(),c(),c(),H(3),c(),U(3),c(),j()],[j(),c(),c(),c(),H(3),H(0),c(),c(),c(),H(1),H(2),c(),c(),c(),j()],[c(),U(1),T(1),c(),c(),c(),U(3),c(),U(0),c(),c(),c(),T(1),U(2),c()],[c(),c(),T(1),T(2),T(2),T(1),c(),c(),c(),T(1),T(2),T(2),T(1),c(),c()],[c(),c(),c(),j(),c(),c(),c(),c(),c(),c(),c(),j(),c(),c(),c()],[c(),c(),c(),c(),j(),j(),j(),j(),j(),j(),j(),c(),c(),c(),c()]],startZones:{0:[{row:0,col:5},{row:0,col:6},{row:0,col:7},{row:0,col:8}],1:[{row:16,col:5},{row:16,col:6},{row:16,col:7},{row:16,col:8}],2:[{row:4,col:0},{row:5,col:0},{row:11,col:0},{row:12,col:0}],3:[{row:4,col:14},{row:5,col:14},{row:11,col:14},{row:12,col:14}],4:[{row:0,col:0},{row:0,col:1},{row:0,col:2},{row:0,col:3}],5:[{row:0,col:11},{row:0,col:12},{row:0,col:13},{row:0,col:14}],6:[{row:16,col:0},{row:16,col:1},{row:16,col:2},{row:16,col:3}],7:[{row:16,col:11},{row:16,col:12},{row:16,col:13},{row:16,col:14}]}},jh={id:"map_7a",nameJa:"大陸戦争",nameCn:"大陆战争",width:17,height:19,maxPlayers:8,maxTeams:8,cells:[[j(),j(),j(),j(),c(),c(),c(),c(),c(),c(),c(),c(),c(),j(),j(),j(),j()],[j(),c(),c(),c(),c(),c(),H(0),c(),c(),c(),H(1),c(),c(),c(),c(),c(),j()],[c(),c(),H(0),H(1),c(),H(2),H(0),c(),c(),c(),H(1),H(3),c(),H(2),H(0),c(),c()],[c(),c(),H(2),c(),c(),c(),c(),U(0),c(),U(1),c(),c(),c(),c(),H(1),c(),c()],[c(),c(),c(),c(),T(1),T(2),c(),c(),c(),c(),c(),T(2),T(1),c(),c(),c(),c()],[c(),U(0),c(),T(1),T(2),T(3),T(1),c(),c(),c(),T(1),T(3),T(2),T(1),c(),U(1),c()],[j(),c(),c(),T(1),T(2),c(),c(),j(),O(0),j(),c(),c(),T(2),T(1),c(),c(),j()],[j(),c(),c(),c(),c(),c(),j(),O(1),O(0),O(2),j(),c(),c(),c(),c(),c(),j()],[c(),c(),U(2),c(),c(),j(),O(0),O(2),j(),O(1),O(0),j(),c(),c(),U(3),c(),c()],[c(),c(),c(),c(),j(),O(1),j(),c(),T(3),c(),j(),O(2),j(),c(),c(),c(),c()],[c(),c(),U(1),c(),c(),j(),O(2),O(0),j(),O(0),O(1),j(),c(),c(),U(0),c(),c()],[j(),c(),c(),c(),c(),c(),j(),O(0),O(1),O(2),j(),c(),c(),c(),c(),c(),j()],[j(),c(),c(),T(1),T(2),c(),c(),j(),O(2),j(),c(),c(),T(2),T(1),c(),c(),j()],[c(),U(2),c(),T(1),T(2),T(3),T(1),c(),c(),c(),T(1),T(3),T(2),T(1),c(),U(3),c()],[c(),c(),c(),c(),T(1),T(2),c(),c(),c(),c(),c(),T(2),T(1),c(),c(),c(),c()],[c(),c(),H(3),c(),c(),c(),c(),U(3),c(),U(2),c(),c(),c(),c(),H(0),c(),c()],[c(),c(),H(1),H(2),c(),H(0),H(3),c(),c(),c(),H(2),H(1),c(),H(3),H(2),c(),c()],[j(),c(),c(),c(),c(),c(),H(2),c(),c(),c(),H(0),c(),c(),c(),c(),c(),j()],[j(),j(),j(),j(),c(),c(),c(),c(),c(),c(),c(),c(),c(),j(),j(),j(),j()]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:0,col:2},{row:0,col:3},{row:1,col:0}],1:[{row:0,col:13},{row:0,col:14},{row:0,col:15},{row:0,col:16},{row:1,col:16}],2:[{row:18,col:0},{row:18,col:1},{row:18,col:2},{row:18,col:3},{row:17,col:0}],3:[{row:18,col:13},{row:18,col:14},{row:18,col:15},{row:18,col:16},{row:17,col:16}],4:[{row:6,col:0},{row:7,col:0},{row:7,col:1},{row:11,col:0},{row:12,col:0}],5:[{row:6,col:16},{row:7,col:16},{row:7,col:15},{row:11,col:16},{row:12,col:16}],6:[{row:0,col:6},{row:0,col:7},{row:0,col:8},{row:0,col:9},{row:0,col:10}],7:[{row:18,col:6},{row:18,col:7},{row:18,col:8},{row:18,col:9},{row:18,col:10}]}},wh={id:"map_8a",nameJa:"火山列島",nameCn:"火山列岛",width:15,height:19,maxPlayers:8,maxTeams:8,cells:[[j(),j(),j(),H(0),H(1),O(0),O(1),c(),O(2),O(0),H(2),H(3),j(),j(),j()],[j(),c(),c(),H(2),c(),j(),O(0),c(),O(1),j(),c(),H(0),c(),c(),j()],[H(0),c(),c(),c(),j(),O(1),O(2),c(),O(0),O(2),j(),c(),c(),c(),H(1)],[c(),c(),U(0),j(),O(0),O(1),j(),c(),j(),O(2),O(0),j(),U(1),c(),c()],[c(),c(),c(),c(),j(),j(),c(),c(),c(),j(),j(),c(),c(),c(),c()],[c(),H(0),c(),c(),c(),c(),T(1),c(),T(1),c(),c(),c(),c(),H(1),c()],[c(),H(2),c(),c(),T(1),T(2),T(2),T(1),T(2),T(2),T(1),c(),c(),H(3),c()],[O(0),j(),c(),T(1),T(2),T(3),U(0),T(2),U(1),T(3),T(2),T(1),c(),j(),O(1)],[O(1),j(),c(),T(2),T(3),U(2),T(3),T(3),T(3),U(3),T(3),T(2),c(),j(),O(0)],[O(2),c(),c(),T(1),T(2),T(3),T(3),T(3),T(3),T(3),T(2),T(1),c(),c(),O(2)],[O(0),j(),c(),T(2),T(3),U(0),T(3),T(3),T(3),U(1),T(3),T(2),c(),j(),O(1)],[O(1),j(),c(),T(1),T(2),T(3),U(2),T(2),U(3),T(3),T(2),T(1),c(),j(),O(0)],[c(),H(1),c(),c(),T(1),T(2),T(2),T(1),T(2),T(2),T(1),c(),c(),H(0),c()],[c(),H(3),c(),c(),c(),c(),T(1),c(),T(1),c(),c(),c(),c(),H(2),c()],[c(),c(),c(),c(),j(),j(),c(),c(),c(),j(),j(),c(),c(),c(),c()],[c(),c(),U(2),j(),O(2),O(0),j(),c(),j(),O(1),O(2),j(),U(3),c(),c()],[H(2),c(),c(),c(),j(),O(0),O(1),c(),O(2),O(1),j(),c(),c(),c(),H(3)],[j(),c(),c(),H(1),c(),j(),O(2),c(),O(0),j(),c(),H(3),c(),c(),j()],[j(),j(),j(),H(3),H(2),O(1),O(0),c(),O(1),O(2),H(0),H(1),j(),j(),j()]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:0,col:2},{row:1,col:0}],1:[{row:0,col:12},{row:0,col:13},{row:0,col:14},{row:1,col:14}],2:[{row:18,col:0},{row:18,col:1},{row:18,col:2},{row:17,col:0}],3:[{row:18,col:12},{row:18,col:13},{row:18,col:14},{row:17,col:14}],4:[{row:7,col:1},{row:8,col:1},{row:9,col:1},{row:10,col:1}],5:[{row:7,col:13},{row:8,col:13},{row:9,col:13},{row:10,col:13}],6:[{row:0,col:7},{row:1,col:7},{row:2,col:7},{row:3,col:7}],7:[{row:18,col:7},{row:17,col:7},{row:16,col:7},{row:15,col:7}]}},Ye=[hh,xh,bh,vh,yh,_h,Ih,kh,jh,wh];function Sh(){try{const e="em_custom_maps_index",n="em_custom_map_",t=localStorage.getItem(e);if(!t)return Ye;const a=JSON.parse(t),r=[];for(const{id:s}of a){const i=localStorage.getItem(n+s);if(i)try{r.push(JSON.parse(i))}catch{}}return[...Ye,...r]}catch{return Ye}}function bc(e){switch(e.terrain){case"plain":return"/assets/tiles/平地0.png";case"sand":return"/assets/tiles/砂0.png";case"rubble":return`/assets/tiles/瓦礫${e.variant%4}.png`;case"forest":return`/assets/tiles/森${e.variant%4}.png`;case"water":return`/assets/tiles/水${e.variant%3}.png`;case"highland":return`/assets/tiles/高地${e.elevation}.png`;default:return"/assets/tiles/平地0.png"}}const q=[{id:"TR",deckCode:"TR",nameJa:"トルトハーン",nameCn:"托尔特哈恩",type:"M軽/単座",movement:6,evasion:8,assault:5,assaultDef:2,initiative:3,tokenId:"TR-token.jpg"},{id:"HO",deckCode:"HO",nameJa:"フォルニッセ",nameCn:"弗尼塞",type:"SS軽/単座",movement:7,evasion:10,assault:5,assaultDef:2,initiative:1,tokenId:"HO-token.jpg"},{id:"HY",deckCode:"HY",nameJa:"ヒストリクス",nameCn:"希斯特里克斯",type:"L重/単座",movement:3,evasion:3,assault:6,assaultDef:3,initiative:14,tokenId:"HY-token.jpg"},{id:"ZB",deckCode:"ZB",nameJa:"ズィマー・ブーリア",nameCn:"季马尔·布里亚",type:"S重/単座",movement:5,evasion:5,assault:6,assaultDef:3,initiative:9,tokenId:"ZB-token.jpg"},{id:"AR",deckCode:"AR",nameJa:"アラクネ",nameCn:"阿拉克涅",type:"S中/単座",movement:6,evasion:7,assault:5,assaultDef:2,initiative:5,tokenId:"AR-token.jpg"},{id:"BG",deckCode:"BG",nameJa:"ヴィスナー・グローム",nameCn:"维斯纳·格罗姆",type:"LL中/単座",movement:3,evasion:5,assault:6,assaultDef:3,initiative:13,tokenId:"BG-token.jpg"},{id:"LO",deckCode:"LO",nameJa:"リュミエール・デ・オラージュ",nameCn:"吕米耶尔",type:"L軽/単座",movement:5,evasion:7,assault:5,assaultDef:2,initiative:6,tokenId:"LO-token.jpg"},{id:"LG",deckCode:"LG",nameJa:"ルー・ガルー",nameCn:"卢·加鲁",type:"M重/単座",movement:4,evasion:4,assault:6,assaultDef:3,initiative:12,tokenId:"LG-token.jpg"},{id:"AG",deckCode:"AG",nameJa:"アルギュロス",nameCn:"阿尔古罗斯",type:"M中/単座",movement:5,evasion:6,assault:6,assaultDef:3,initiative:7,tokenId:"AG-token.jpg"}];function Ch(e,n){const t=[];let a=e.col,r=e.row;const s=n.col,i=n.row,l=Math.abs(s-a),d=Math.abs(i-r),u=a<s?1:-1,f=r<i?1:-1;let m=l-d;const g=(l+d)*2+2;let h=0;for(;h++<g&&(t.push({row:r,col:a}),!(a===s&&r===i));){const x=2*m;x>-d&&(m-=d,a+=u),x<l&&(m+=l,r+=f)}return t}function ja(e,n,t){var l;if(n.row===t.row&&n.col===t.col)return!0;const a=e.cells[n.row][n.col],r=e.cells[t.row][t.col],s=Math.max(a.elevation,r.elevation),i=Ch(n,t);for(const d of i){if(d.row===n.row&&d.col===n.col||d.row===t.row&&d.col===t.col)continue;const u=(l=e.cells[d.row])==null?void 0:l[d.col];if(u&&u.terrain==="highland"&&u.elevation>s)return!1}return!0}function Ke(e,n){return Math.max(Math.abs(e.row-n.row),Math.abs(e.col-n.col))}function gt(e,n,t){return e==="N"?t.row<=n.row:e==="S"?t.row>=n.row:e==="E"?t.col>=n.col:e==="W"?t.col<=n.col:!0}function jr(e,n,t){if(n!==2)return 0;if(e.plotSeg1){const a=t(e.plotSeg1.defId);if(a&&a.actionType==="aim")return 1}return 0}function Nh(e,n,t,a){const r=[];if(t==="ranged"){for(const l of e.hand)if(!l.destroyed){const d=a(l.defId);(d==null?void 0:d.actionType)==="armor"&&(d.armorValue??0)>0&&r.push({instanceId:l.instanceId,defId:l.defId,armorValue:d.armorValue})}}const s=[],i=[{seg:1,card:e.plotSeg1},{seg:2,card:e.plotSeg2}];for(const{seg:l,card:d}of i){if(!d||d.destroyed)continue;const u=a(d.defId);(u==null?void 0:u.actionType)==="armor"&&(u.armorValue??0)>0&&s.push({instanceId:d.instanceId,defId:d.defId,seg:l,armorValue:u.armorValue})}return{handCards:r,plotCards:s}}function Ln(e,n,t,a){const r=n===1?e.plotSeg1:e.plotSeg2;if(!r)return null;const s=a(r.defId);return s&&(t==="ranged"&&s.actionType==="ranged"||t==="melee"&&(s.actionType==="melee"||s.actionType==="charge"))?s:null}function Xo(e,n,t,a,r){var u,f;let s=e;const i=[],l=(u=a.cells[n.row])==null?void 0:u[n.col],d=(f=a.cells[t.row])==null?void 0:f[t.col];return(l==null?void 0:l.terrain)==="water"&&r.isEnergyWeapon&&(s-=1,i.push("水域能量衰减-1")),(d==null?void 0:d.terrain)==="forest"&&(s-=1,i.push("森林掩护-1")),{dmg:Math.max(0,s),reasons:i}}function Qo(e,n,t,a,r,s){const i=Ln(e,t,a,s);if(!i)return{canAttack:!1,reason:"无攻击牌",damage:0,counterDamage:0,dist:0,card:null};const l=Ke(e.position,n.position);if(a==="ranged"){if(i.rangeMin===void 0||i.rangeMax===void 0)return{canAttack:!1,reason:"卡牌无射程数据",damage:0,counterDamage:0,dist:l,card:i};if(l<i.rangeMin)return{canAttack:!1,reason:`距离过近 (${l} < ${i.rangeMin})`,damage:0,counterDamage:0,dist:l,card:i};if(l>i.rangeMax)return{canAttack:!1,reason:`射程外 (${l} > ${i.rangeMax})`,damage:0,counterDamage:0,dist:l,card:i};if(!ja(r,e.position,n.position))return{canAttack:!1,reason:"视线被遮挡",damage:0,counterDamage:0,dist:l,card:i};if(!gt(e.facing,e.position,n.position))return{canAttack:!1,reason:`目标在机体后方（机头朝${e.facing}），无法射击`,damage:0,counterDamage:0,dist:l,card:i};let d=i.damage??0;const u=[];if(i.rangeOptimal!==void 0&&i.damageAttenuation!==void 0){const p=Math.max(0,l-i.rangeOptimal);if(p>0){const _=p*i.damageAttenuation;d=Math.max(0,d-_),u.push(`超射程-${_}`)}}const f=Xo(d,e.position,n.position,r,i),m=jr(e,t,s),g=f.dmg+m,h=[...u,...f.reasons];return m>0&&h.push("瞄准+1"),{canAttack:!0,reason:`有效射击${h.length>0?`（${h.join(", ")}）`:""}`,damage:g,counterDamage:0,dist:l,card:i}}if(a==="melee"&&i.actionType==="melee"){if(l!==1)return{canAttack:!1,reason:`不相邻 (距离 ${l})`,damage:0,counterDamage:0,dist:l,card:i};if(!ja(r,e.position,n.position))return{canAttack:!1,reason:"视线被遮挡",damage:0,counterDamage:0,dist:l,card:i};const d=Xo(i.damage??0,e.position,n.position,r,i),u=jr(e,t,s),f=d.dmg+u,m=[...d.reasons];return u>0&&m.push("瞄准+1"),{canAttack:!0,reason:`有效近战${m.length>0?`（${m.join(", ")}）`:""}`,damage:f,counterDamage:0,dist:l,card:i}}return a==="melee"&&i.actionType==="charge"?{canAttack:!1,reason:"突击卡需使用evaluateCharge()",damage:0,counterDamage:0,dist:l,card:i}:{canAttack:!1,reason:"非攻击时机",damage:0,counterDamage:0,dist:l,card:null}}const Th=new Set(["パイルバンカー","スパイク"]),Mh=new Set(["アンカー","ロングアンカー"]);function Eh(e){return Th.has(e.nameJa)}function vc(e){return!!e&&Mh.has(e.nameJa)}function Dh(e,n,t,a,r,s){const i=s==="N"?{row:-1,col:0}:s==="S"?{row:1,col:0}:s==="E"?{row:0,col:1}:{row:0,col:-1};let l=n,d=a;for(;d>0;){const u={row:l.row+i.row,col:l.col+i.col};if(u.row<0||u.row>=e.height||u.col<0||u.col>=e.width||r.some(p=>p.row===u.row&&p.col===u.col))break;const f=e.cells[u.row][u.col],m=e.cells[l.row][l.col],g=f.terrain==="plain"||f.terrain==="sand"?1:f.terrain==="water"?3:2,h=Math.max(0,f.elevation-m.elevation),x=g+h;if(d<x)break;d-=x,l=u}return Ke(l,t)!==1||!gt(s,l,t)?null:l}function qo(e,n,t,a,r,s,i){const l=Ln(e,t,"melee",i);if(!l||l.actionType!=="charge")return{canAttack:!1,reason:"无突击牌",damage:0,counterDamage:0,dist:0,card:null};const d=Ke(e.position,n.position);if(Eh(l)){if(d!==1)return{canAttack:!1,reason:`不相邻 (距离 ${d})，${l.nameCn} 无法攻击`,damage:0,counterDamage:0,dist:d,card:l};if(!gt(e.facing,e.position,n.position))return{canAttack:!1,reason:`目标不在正面弧内（机头朝${e.facing}），${l.nameCn} 无法攻击`,damage:0,counterDamage:0,dist:d,card:l};const v=r.assault+1,I=Xo(v,e.position,n.position,a,l),S=jr(e,t,i),C=I.dmg+S,w=Math.max(0,s.assaultDef-1),N=[...I.reasons];S>0&&N.push("瞄准+1");const z=N.length>0?`（${N.join(", ")}）`:"";return{canAttack:!0,reason:`有效${l.nameCn}攻击${z}`,damage:C,counterDamage:w,dist:d,card:l,chargeDestination:e.position}}const f=r.assault,m=Dh(a,e.position,n.position,f,[n.position],e.facing);if(!m)return{canAttack:!1,reason:`突击距离不足或目标不在正面弧内 (距离 ${d}，突击值 ${f})`,damage:0,counterDamage:0,dist:d,card:l};const g=r.assault,h=Xo(g,m,n.position,a,l),x=jr(e,t,i),p=h.dmg+x,_=s.assaultDef,y=[...h.reasons];return x>0&&y.push("瞄准+1"),{canAttack:!0,reason:`有效突击${y.length>0?`（${y.join(", ")}）`:""}`,damage:p,counterDamage:_,dist:d,card:l,chargeDestination:m}}function $n(e){const n=[...e.deck,...e.hand,...e.auxiliary];return e.plotSeg1&&n.push(e.plotSeg1),e.plotSeg2&&n.push(e.plotSeg2),n.filter(t=>!t.destroyed)}function mi(e){return $n(e).length}function wa(e){const n=[...e.hand,...e.auxiliary];return e.plotSeg1&&n.push(e.plotSeg1),e.plotSeg2&&n.push(e.plotSeg2),n.filter(t=>!t.destroyed)}function Ns(e,n){var a,r;const t={...n,destroyed:!0};return{player:{...e,deck:e.deck.map(s=>s.instanceId===n.instanceId?t:s),hand:e.hand.map(s=>s.instanceId===n.instanceId?t:s),auxiliary:e.auxiliary.map(s=>s.instanceId===n.instanceId?t:s),plotSeg1:((a=e.plotSeg1)==null?void 0:a.instanceId)===n.instanceId?t:e.plotSeg1,plotSeg2:((r=e.plotSeg2)==null?void 0:r.instanceId)===n.instanceId?t:e.plotSeg2,destroyedCards:[...e.destroyedCards,t]},destroyed:t}}function pl(e,n,t,a){let r=e;const s=[];let i=n;const l=a?`[${a}] `:"";let d=0;const u=30;for(;i>0&&d<u;){i--,d++;const f=r.deck.filter(x=>!x.destroyed);if(f.length===0){s.push(`    ↳ ${l}【誘爆】牌组已空，无法继续检查`);break}const m=f[0],g=t(m.defId),h=(g==null?void 0:g.nameCn)??m.defId;if(g!=null&&g.hasBombIcon){const{player:x}=Ns(r,m);r=x,i++,s.push(`    ↳ ${l}【💣 誘爆】翻开 ${h}——有炸弹标记，破坏！（连锁+1）`)}else r={...r,deck:r.deck.filter(x=>x.instanceId!==m.instanceId),discard:[...r.discard,m]},s.push(`    ↳ ${l}【誘爆】翻开 ${h}——无炸弹标记，放入弃牌区`)}return{player:r,log:s}}function It(e,n,t,a){let r=e;const s=[];let i=n,l=0;for(;i>0;){const d=r.deck.filter(b=>!b.destroyed),u=r.hand.filter(b=>!b.destroyed),f=r.auxiliary.filter(b=>!b.destroyed),m=[r.plotSeg1,r.plotSeg2].filter(b=>!!b&&!b.destroyed),g=d[0]??u[0]??f[0]??m[0];if(!g)break;const h=t(g.defId),x=(h==null?void 0:h.nameCn)??g.defId,{player:p}=Ns(r,g);r=p,i--;const _=h!=null&&h.hasBombIcon?"【💣】":"",y=a?`[${a}] `:"";if(s.push(`  ▶ ${y}${x} 被摧毁${_}`),h!=null&&h.hasBombIcon&&l++,r.destroyedCards.length>30)break}if(l>0){s.push(`  ─── 誘爆检查（${l}张炸弹卡被破坏）───`);const{player:d,log:u}=pl(r,l,t,a);r=d,s.push(...u)}return{player:r,log:s}}const $h={plain:{type:"plain",nameJa:"平地",nameCn:"平原",moveCost:1,blocksLOS:!1,enterable:!0,providesCover:!1},sand:{type:"sand",nameJa:"砂地",nameCn:"沙地",moveCost:1,blocksLOS:!1,enterable:!0,providesCover:!1},rubble:{type:"rubble",nameJa:"瓦礫",nameCn:"瓦砾",moveCost:2,blocksLOS:!1,enterable:!0,providesCover:!1},forest:{type:"forest",nameJa:"森",nameCn:"森林",moveCost:2,blocksLOS:!1,enterable:!0,providesCover:!0},water:{type:"water",nameJa:"水辺",nameCn:"水域",moveCost:3,blocksLOS:!1,enterable:!0,providesCover:!1},highland:{type:"highland",nameJa:"高地",nameCn:"高地",moveCost:1,blocksLOS:!1,enterable:!0,providesCover:!1}};function Rm(e){const n=$h[e];return n.enterable?n.moveCost:1/0}const Ts=[[-1,0],[1,0],[0,-1],[0,1]];function Lm(e,n){return e===-1?"N":e===1?"S":n===-1?"W":"E"}function Ms(e,n,t){return n>=0&&n<e.height&&t>=0&&t<e.width}function ve(e,n){return e.row===n.row&&e.col===n.col}function Ah(e,n,t,a,r){const s=Array.from({length:e.height},()=>new Array(e.width).fill(-1)),i=[{pos:n,remaining:t}];s[n.row][n.col]=t;const l=[{pos:n,remaining:t}];for(;i.length>0;){const{pos:d,remaining:u}=i.shift();for(const[f,m]of Ts){const g=d.row+f,h=d.col+m;if(!Ms(e,g,h))continue;const x={row:g,col:h},p=e.cells[g][h];let _=Rm(p.terrain);if(_===1/0)continue;r!=null&&r.vernier&&(p.terrain==="rubble"||p.terrain==="forest"||p.terrain==="water")&&(_=1);const y=e.cells[d.row][d.col];let b=Math.abs(p.elevation-y.elevation);r!=null&&r.vernier&&(b=Math.max(0,b-1));const v=_+b;if(u<v)continue;const I=u-v;a.some(C=>ve(C,x))||s[g][h]>=I||(s[g][h]=I,l.push({pos:x,remaining:I}),i.push({pos:x,remaining:I}))}}return l}function Tt(e){return`${e.row},${e.col}`}function Om(e,n,t,a,r,s=1/0){if(t<=0)return[];const i=new Set(a.map(Tt)),l=[],d=new Set([Tt(n)]);function u(f,m,g){if(l.length>=s)return;let h=!1;for(const[x,p]of Ts){const _={row:f.row+x,col:f.col+p};if(!Ms(e,_.row,_.col))continue;const y=Tt(_);if(d.has(y)||i.has(y))continue;const b=ml(e,f.row,f.col,_.row,_.col,r);b===1/0||m<b||(h=!0,d.add(y),g.push(_),u(_,m-b,g),g.pop(),d.delete(y))}!h&&g.length>0&&l.push({path:[...g],remaining:m})}return u(n,t,[]),l}function ml(e,n,t,a,r,s){const i=e.cells[a][r];let l=Rm(i.terrain);if(l===1/0)return 1/0;s!=null&&s.vernier&&(i.terrain==="rubble"||i.terrain==="forest"||i.terrain==="water")&&(l=1);const d=e.cells[n][t];let u=Math.abs(i.elevation-d.elevation);return s!=null&&s.vernier&&(u=Math.max(0,u-1)),l+u}function Es(e,n,t,a,r,s="S"){const i=new Map;for(const l of Om(e,n,t,a,r)){const d=l.path[l.path.length-1],u=Tt(d),f=i.get(u);(!f||l.remaining>f.remaining)&&i.set(u,{pos:d,remaining:l.remaining})}return Array.from(i.values())}function Ds(e,n,t,a,r,s,i){const l=Io(e,n,t,a,r,s,i,64);return l.length===0?null:(l.sort((d,u)=>d.path.length!==u.path.length?d.path.length-u.path.length:JSON.stringify(d.path).localeCompare(JSON.stringify(u.path))),l[0])}function zh(e,n,t,a,r,s,i){if(s.length===0)return!1;const l=new Set([Tt(n)]);let d=n,u=a;for(const f of s){if(Math.abs(f.row-d.row)+Math.abs(f.col-d.col)!==1)return!1;const m=Tt(f);if(l.has(m)||r.some(h=>ve(h,f)))return!1;const g=ml(e,d.row,d.col,f.row,f.col,i);if(g===1/0||u<g)return!1;u-=g,l.add(m),d=f}if(!ve(d,t))return!1;for(const[f,m]of Ts){const g={row:d.row+f,col:d.col+m};if(!Ms(e,g.row,g.col)||l.has(Tt(g))||r.some(x=>ve(x,g)))continue;const h=ml(e,d.row,d.col,g.row,g.col,i);if(h!==1/0&&u>=h)return!1}return!0}function Io(e,n,t,a,r,s,i,l=8){return ve(n,a)||r<=0?[]:Om(e,n,r,s,i,l*16).filter(d=>ve(d.path[d.path.length-1],a)).slice(0,l).map(d=>({path:d.path,finalFacing:t}))}function Km(e,n,t){const a=[];for(const[r,s]of Ts){const i=n.row+r,l=n.col+s;if(!Ms(e,i,l))continue;const d={row:i,col:l};t.some(u=>ve(u,d))||a.push(d)}return a}function ko(e,n,t,a){const r=n===1?e.plotSeg1:e.plotSeg2;if(!r)return 0;const s=t(r.defId);return!s||s.actionType!=="movement"?0:(s.movementValue??0)+(a!=null&&a.wheel?2:0)}function Ph(e,n,t,a){const r=n===1?e.plotSeg1:e.plotSeg2;if(!r)return!1;const s=t(r.defId);return!s||s.actionType!=="movement"?!1:(s.movementValue??a)>0}const Vh="バーニア",Rh="ムーブセンサー",Lh="ホイール";function fn(e,n,t){const a=new Map;for(const m of e.auxiliary){if(m.destroyed)continue;const g=n(m.defId);g&&a.set(g.nameJa,(a.get(g.nameJa)??0)+1)}const r=a.get(Vh)??0,s=a.get(Rh)??0,i=a.get(Lh)??0,l=r>=2&&i>=2,d=!l&&r>=2,u=s>=2,f=!l&&i>=2;return{vernier:d&&(t==="movement"||t==="melee"),moveSensor:u&&t==="melee",wheel:f&&(t==="movement"||t==="charge")}}function Oh(e){const n={};for(const t of e)n[t]={kills:0,assists:0,damageDealt:0,damageTaken:0,damagedTargets:[]};return n}function es(e,n,t,a){if(a<=0)return e;const r=e[n],s=e[t];if(!r||!s)return e;const i={...r,damageDealt:r.damageDealt+a,damagedTargets:r.damagedTargets.includes(t)?r.damagedTargets:[...r.damagedTargets,t]},l={...s,damageTaken:s.damageTaken+a};return{...e,[n]:i,[t]:l}}function Kh(e,n,t){const a=e[n];if(!a)return e;let r={...e,[n]:{...a,kills:a.kills+1}};for(const[s,i]of Object.entries(r))s!==n&&i.damagedTargets.includes(t)&&(r={...r,[s]:{...i,assists:i.assists+1}});return r}function Jh(e){const n=e.battleStats,t=[];for(const a of e.playerIds){const r=e.players[a],s=q.find(x=>x.id===r.unitId),i=e.playerIds.indexOf(a),l=n==null?void 0:n[a],d=[...r.deck,...r.hand,...r.auxiliary,...r.discard,...r.destroyedCards,...r.plotSeg1?[r.plotSeg1]:[],...r.plotSeg2?[r.plotSeg2]:[]],f=new Set(d.map(x=>x.instanceId)).size,g=$n(r).length,h=(l==null?void 0:l.damageTaken)??r.destroyedCards.length;t.push({playerId:a,unitId:r.unitId,unitName:(s==null?void 0:s.nameCn)??a,team:e.teams[a]??0,alive:!r.isDefeated,kills:(l==null?void 0:l.kills)??0,assists:(l==null?void 0:l.assists)??0,damageDealt:(l==null?void 0:l.damageDealt)??0,damageTaken:h,cardsRemaining:g,totalCards:f,label:`P${i+1}`,hpPercent:f>0?Math.round(g/f*100):0})}return t}function Bh(e,n,t=!0){return[...e].sort((a,r)=>{let s,i;switch(n){case"kills":s=a.kills,i=r.kills;break;case"assists":s=a.assists,i=r.assists;break;case"damageDealt":s=a.damageDealt,i=r.damageDealt;break;case"damageTaken":s=a.damageTaken,i=r.damageTaken;break;case"cardsRemaining":s=a.cardsRemaining,i=r.cardsRemaining;break;case"alive":s=a.alive?1:0,i=r.alive?1:0;break;case"label":s=parseInt(a.label.slice(1)),i=parseInt(r.label.slice(1));break;default:s=0,i=0}return t?i-s:s-i})}function Jm(e,n){const t=n.row-e.row,a=n.col-e.col;return Math.abs(t)>=Math.abs(a)?t<0?"N":"S":a>0?"E":"W"}function Fh(e,n){switch(n){case"N":return{row:e.row-1,col:e.col};case"S":return{row:e.row+1,col:e.col};case"E":return{row:e.row,col:e.col+1};case"W":return{row:e.row,col:e.col-1}}}function ne(e){return`P${e.replace("player","")}`}function ns(e){switch(e){case"movement":return"移动时机";case"ranged":return"射击时机";case"melee":return"近战时机";case"special":return"特殊时机";default:return e}}function Gh(e){switch(e){case"movement":return"移动";case"ranged":return"射击";case"melee":return"近战";case"charge":return"突击";case"aim":return"瞄准";case"armor":return"装甲";case"mine":return"机雷";case"special":return"特殊";default:return e}}function fl(e,n){let t=Z(e,`══════ 主要阶段${n}开始 ══════`);t=Z(t,`全员翻开阶段${n}盖卡：`);for(const a of e.playerIds){if(t.players[a].isDefeated)continue;const r=t.players[a],s=q.find(u=>u.id===r.unitId),i=ne(a),l=(s==null?void 0:s.nameCn)??a,d=n===1?r.plotSeg1:r.plotSeg2;if(d){const u=te(d.defId);u?t=Z(t,`  ${i}[${l}] →【${u.nameCn}】(${Gh(u.actionType)})`):t=Z(t,`  ${i}[${l}] → (未知卡牌)`)}else t=Z(t,`  ${i}[${l}] → 未配置行动卡`)}return t}function yc(e,n,t,a="S"){const r=mh(n,e);return{id:e,unitId:n,position:t,facing:a,deck:r,hand:[],auxiliary:[],plotSeg1:null,plotSeg2:null,discard:[],destroyedCards:[],isDefeated:!1}}function Bm(e=2,n=2){const t=Ye[0],a=ga.slice(0,e),r={};for(let i=0;i<a.length;i++)r[a[i]]=i%n;const s={};for(const i of a){const l=r[i],d=t.startZones[l]??t.startZones[0]??[],u=d[Math.min(1,d.length-1)]??{row:0,col:0},f=l===0?"S":"N";s[i]=yc(i,"AG",u,f)}return{phase:"setup",roundNumber:0,activePlayer:a[0],players:s,playerIds:a,teams:r,teamCount:n,map:t,mines:[],log:[],turnOrder:[...a],currentTiming:null,plottingStep:null,pendingDamage:null,shuffleSeed:Date.now(),battleStats:Oh(a)}}function ie(e,n){return J0(e,n)}function he(e,n,t){return B0(e,n,t)}function Z(e,n){return{...e,log:[...e.log,n]}}function An(e,n){return{...e,log:[...e.log,`[DBG] ${n}`]}}function Hh(e,n){return e.filter(t=>t.instanceId!==n)}function Uh(e){const n=[],t=[];for(const a of e.deck){const r=te(a.defId);r&&r.actionType==="auxiliary"?t.push(a):n.push(a)}return{...e,deck:n,auxiliary:[...e.auxiliary,...t]}}function ts(e){const n=e.playerIds.filter(r=>!e.players[r].isDefeated),t=e.phase==="action_seg2"?2:1,a=n.map(r=>{const s=e.players[r],i=q.find(u=>u.id===s.unitId),l=(i==null?void 0:i.initiative)??0;let d=(i==null?void 0:i.movement)??0;if(e.currentTiming==="movement"){const u=t===1?s.plotSeg1:s.plotSeg2;if(u){const f=te(u.defId);f&&f.movementValue!==void 0&&(d=f.movementValue)}}return{id:r,initiative:l,movementValue:d}});return e.currentTiming==="movement"?a.sort((r,s)=>r.movementValue!==s.movementValue?s.movementValue-r.movementValue:s.initiative-r.initiative):a.sort((r,s)=>s.initiative-r.initiative),a.map(r=>r.id)}function Wh(e,n){const{playerId:t,unitId:a}=n,r=e.teams[t]??0,s=e.map.startZones[r]??[],i=ie(e,t).position,l=s.some(f=>f.row===i.row&&f.col===i.col)?i:s[Math.min(1,s.length-1)]??{row:0,col:0},d=ie(e,t).facing,u=yc(t,a,l,d);return Z(he(e,t,u),`${t} 选择了机体 ${a}`)}function Zh(e,n){const t=Ye.find(s=>s.id===n.mapId);if(!t)return e;const a={},r={};for(const s of e.playerIds){const i=e.teams[s]??0,l=t.startZones[i]??t.startZones[0]??[],d=r[i]??0;r[i]=d+1;const u=l[Math.min(d,l.length-1)]??{row:0,col:0},f=i===0?"S":"N";a[s]=yc(s,e.players[s].unitId,u,f)}return Z({...e,map:t,players:a},`选择了地图 ${t.nameCn}`)}function Yh(e,n){if(e.phase!=="setup")return e;const{playerId:t,position:a}=n,r=ie(e,t);return he(e,t,{...r,position:a})}function Xh(e,n){if(e.phase!=="setup")return e;const{playerId:t,facing:a}=n,r=ie(e,t);return he(e,t,{...r,facing:a})}function Qh(e){var a;const n={...e.players};let t={...e,phase:"draw",roundNumber:1};for(const r of e.playerIds){const s=Uh(e.players[r]);n[r]=s;for(const i of s.auxiliary){const l=te(i.defId);t=Z(t,`${r} 补助卡【${(l==null?void 0:l.nameCn)??i.defId}】从卡组移至辅助区`)}}t={...t,players:n};for(const r of e.playerIds){const s=((a=q.find(i=>i.id===t.players[r].unitId))==null?void 0:a.evasion)??5;t=_c(t,{playerId:r,count:s})}return Z({...t,phase:"pregame",plottingStep:null,activePlayer:e.playerIds[0],currentTiming:null},"=== 第 1 回合开始 ===")}function qh(e){if(e.phase!=="pregame")return e;const n=e.playerIds[0];return{...e,phase:"plotting",plottingStep:`transition_to_${n}`,activePlayer:n}}function _c(e,n){const t=ie(e,n.playerId),a=[],r=[];let s=t.deck.filter(g=>!g.destroyed),i=t.discard.filter(g=>!g.destroyed);const l=i.length;let d=!1,u=e.shuffleSeed;for(;r.length<n.count;){if(s.length===0){if(i.length===0)break;const p=Vm([...i],u);s=p.shuffled,u=p.nextSeed,i=[],d=!0}const g=n.count-r.length,{drawn:h,remaining:x}=gh(s,g);s=x;for(const p of h){const _=te(p.defId);_&&_.actionType==="auxiliary"?a.push(p):r.push(p)}}const f={...t,deck:s,discard:i,hand:[...t.hand,...r],auxiliary:[...t.auxiliary,...a]};let m=he({...e,shuffleSeed:u},n.playerId,f);d&&(m=Z(m,`${n.playerId} 的卡组耗尽，弃牌区（${l} 张）洗入卡组`)),m=Z(m,`${n.playerId} 抽了 ${r.length} 张牌`);for(const g of a){const h=te(g.defId),x=(h==null?void 0:h.nameCn)??g.defId;m=Z(m,`  ↳ 辅助卡【${x}】自动放置到辅助区`)}return m}function ex(e,n){var f;const{playerId:t,seg:a,instanceId:r}=n,s=ie(e,t),i=s.hand.find(m=>m.instanceId===r);if(!i)return e;const l=((f=te(i.defId))==null?void 0:f.nameCn)??i.defId;e=An(e,`PLOT_CARD: ${ne(t)} 配置【${l}】到阶段${a}`);const d=Hh(s.hand,r),u={...s,hand:d,plotSeg1:a===1?i:s.plotSeg1,plotSeg2:a===2?i:s.plotSeg2};return he(e,t,u)}function nx(e,n){const{playerId:t}=n,a=Z(e,`${t} 完成了布局`),r=e.playerIds.indexOf(t),s=e.playerIds.slice(r+1).find(u=>!a.players[u].isDefeated);if(s)return{...a,activePlayer:s,plottingStep:`transition_to_${s}`};const l={...fl(a,1),activePlayer:e.playerIds[0],phase:"action_seg1",plottingStep:"complete",currentTiming:"movement",turnOrder:[]},d={...l,turnOrder:ts(l)};return Z(d,`▸ ${ns("movement")} — 行动顺序：${d.turnOrder.map(ne).join(" → ")}`)}function tx(e){const n=e.plottingStep;if(!n)return e;for(const t of e.playerIds)if(n===`transition_to_${t}`)return{...e,plottingStep:t,activePlayer:t};if(n==="transition"){const t=e.playerIds.indexOf(e.activePlayer);if(t>=0&&t<e.playerIds.length-1){const a=e.playerIds[t+1];return{...e,plottingStep:a,activePlayer:a}}}return e}function ax(e,n){var p;const{playerId:t,to:a}=n;let r=ie(e,t);if(r.isDefeated)return e;const s=r.position;e=An(e,`MOVE_UNIT: ${ne(t)} (${s.row},${s.col})→(${a.row},${a.col}) 阶段=${e.phase} 时机=${e.currentTiming}`);const i=e.map,l=e.playerIds.filter(_=>_!==t&&!e.players[_].isDefeated).map(_=>ie(e,_).position);if(l.some(_=>ve(_,a)))return Z(e,`${ne(t)} 移动无效：目标位置 (${a.row}, ${a.col}) 已被其他机体占据`);const d=e.phase==="action_seg2"?2:1,u=q.find(_=>_.id===r.unitId),f=fn(r,te,"movement"),m=u?ko(r,d,te,f)||u.movement:0,g=n.path?zh(i,s,a,m,l,n.path,f)?n.path:null:((p=Ds(i,s,r.facing,a,m,l,f))==null?void 0:p.path)??null;let h=e;if(!g||g.length===0)return Z(e,`${ne(t)} 移动无效：所选终点不满足原版移动规则`);const x=n.finalFacing??r.facing;return r={...r,position:a,facing:x},h=he(h,t,r),h=Z(h,`${t} 移动到 (${a.row}, ${a.col})，机头朝${x}`),tn(h)}function rx(e,n){const{playerId:t,damage:a}=n,r=ie(e,t),s=n.placements?n.placements:n.to?[{position:n.to,kind:"real"}]:[];if(s.length===0)return Z(e,`${ne(t)} 布雷无效：未选择任何指示物位置`);const i=!n.placements&&s.length===1;if(!i&&s.length!==4)return Z(e,`${ne(t)} 布雷无效：必须设置 4 个指示物（真雷2、替身2）`);const l=s.filter(h=>h.kind==="real").length,d=s.filter(h=>h.kind==="dummy").length;if(!i&&(l!==2||d!==2))return Z(e,`${ne(t)} 布雷无效：真雷与替身雷必须各放置 2 个`);const u=new Set(e.mines.map(h=>`${h.position.row},${h.position.col}`)),f=new Set;for(const h of s){const{row:x,col:p}=h.position;if(x<0||x>=e.map.height||p<0||p>=e.map.width)return Z(e,`${ne(t)} 布雷无效：存在超出地图范围的指示物位置`);if(Math.max(Math.abs(x-r.position.row),Math.abs(p-r.position.col))!==1)return Z(e,`${ne(t)} 布雷无效：机雷指示物只能放在自机周围 8 格`);const _=`${x},${p}`;if(u.has(_)||f.has(_))return Z(e,`${ne(t)} 布雷无效：机雷指示物不能与其他指示物重叠`);f.add(_)}const m=s.map((h,x)=>({id:`mine-${Date.now()}-${x}-${Math.random().toString(36).substring(2,9)}`,ownerId:t,position:h.position,damage:a,kind:h.kind}));let g={...e,mines:[...e.mines,...m]};if(i){const[h]=m;return g=Z(g,`${ne(t)} 在 (${h.position.row}, ${h.position.col}) 部署了机雷`),g}return g=Z(g,`${ne(t)} 在周围 8 格部署了 4 个隐藏指示物（真雷2、替身2）`),g}function Kd(e,n,t){var _,y,b;const{attackerId:a,targetId:r}=n,s=e.phase==="action_seg1"?1:2,i=ie(e,a),l=ie(e,r);if(i.isDefeated||l.isDefeated)return e;e=An(e,`RESOLVE_${t.toUpperCase()}: ${ne(a)}(${i.position.row},${i.position.col},${i.facing})→${ne(r)}(${l.position.row},${l.position.col},${l.facing}) seg=${s}`);const d=Qo(i,l,s,t,e.map,te),f=jr(i,s,te)>0?a:void 0;if(!d.canAttack)return Z(e,`${a} 攻击无效：${d.reason}`);const m=((_=q.find(v=>v.id===i.unitId))==null?void 0:_.nameCn)??a,g=((y=q.find(v=>v.id===l.unitId))==null?void 0:y.nameCn)??r,h=((b=d.card)==null?void 0:b.nameCn)??"???",x=t==="ranged"?"射击":"近战";let p=e;if(t==="melee"){const v=Jm(i.position,l.position);v!==i.facing&&(p=he(p,a,{...ie(p,a),facing:v}),p=Z(p,`${m} 近战攻击后自动转向【${v}】`))}if(p=Z(p,`${m} 对 ${g} 发动${x}【${h}】→ 造成 ${d.damage} 点伤害`),t==="ranged"&&vc(d.card)){const v=Fh(i.position,i.facing),I=v.row>=0&&v.row<p.map.height&&v.col>=0&&v.col<p.map.width,S=p.playerIds.some(C=>C!==r&&!p.players[C].isDefeated&&ve(p.players[C].position,v));I?S?p=Z(p,`${h} 命中，但自机正前方被其他机体占据，无法拖拽目标`):ve(l.position,v)?p=Z(p,`${h} 命中效果：${g} 已在自机正前方，位置不变`):(p=he(p,r,{...ie(p,r),position:v}),p=Z(p,`${h} 命中效果：${g} 被强制移动到 (${v.row}, ${v.col})，朝向保持不变`)):p=Z(p,`${h} 命中，但自机正前方超出地图，无法拖拽目标`)}return p={...p,lastDamageContext:{attackerId:a,targetId:r,weaponName:h}},p.battleStats&&d.damage>0&&(p={...p,battleStats:es(p.battleStats,a,r,d.damage)}),ha(p,r,d.damage,t,s,f,h)}function ha(e,n,t,a,r,s,i){if(t<=0)return tn(e);const l=ie(e,n),{handCards:d,plotCards:u}=Nh(l,r,a,te);return d.length>0||u.length>0?{...e,pendingArmorChoice:{targetId:n,damage:t,source:a,attackerId:s,weaponName:i,handCards:d,plotCards:u}}:Ic(e,n,t,a,s)}function ox(e,n){const t=e.pendingArmorChoice;if(!t||t.targetId!==n.playerId)return e;let a={...e,pendingArmorChoice:void 0};const r=new Set(n.selectedInstanceIds);let s=0;const i=[];for(const d of r){const u=ie(a,t.targetId),f=$n(u).find(h=>h.instanceId===d);if(!f)continue;const m=te(f.defId);if(!m||m.actionType!=="armor")continue;s+=m.armorValue??0,i.push(m.nameCn);const{player:g}=Ns(u,f);a=he(a,t.targetId,g)}s>0?a=Z(a,`[${ne(t.targetId)}] 激活装甲【${i.join("、")}】减伤 -${s} 点`):a=Z(a,`[${ne(t.targetId)}] 放弃使用装甲`);const l=Math.max(0,t.damage-s);return pt(Ic(a,t.targetId,l,t.source,t.attackerId))}function Ic(e,n,t,a,r){if(t<=0)return tn(e);const s=ie(e,n),i=$n(s);if(i.length===0)return tn(e);if(a!=="ranged"){const l=s.deck.filter(m=>!m.destroyed).length,d=s.discard.filter(m=>!m.destroyed).length;if(!(l===0&&d===0)){let m=e,g=t;const h=Math.min(g,l);if(h>0){const{player:x,log:p}=It(ie(m,n),h,te,ne(n));for(const _ of p)m=Z(m,_);m=he(m,n,x),g-=h}if(g>0&&d>0){const x=ie(m,n),p=x.discard.filter(S=>!S.destroyed),_=x.discard.filter(S=>S.destroyed),{shuffled:y,nextSeed:b}=Vm(p,m.shuffleSeed);m={...m,shuffleSeed:b};const v={...x,deck:[...x.deck,...y],discard:_};m=he(m,n,v),m=Z(m,`${ne(n)} 的卡组耗尽，弃牌区（${p.length} 张）洗入卡组`);const I=Math.min(g,p.length);if(I>0){const{player:S,log:C}=It(ie(m,n),I,te,ne(n));for(const w of C)m=Z(m,w);m=he(m,n,S),g-=I}}if(g>0){const x=ie(m,n),p=$n(x);if(p.length===0)return tn(m);if(p.length<=g){const{player:_,log:y}=It(x,g,te,ne(n));for(const b of y)m=Z(m,b);return m=he(m,n,_),tn(m)}return m=Z(m,`[${ne(n)}] 牌组与弃牌区已耗尽，切换为防方自选伤害模式`),{...m,pendingDamage:{targetId:n,remaining:g,selectedInstanceIds:[],destroyedBombCount:0,source:a,attackerId:r}}}return tn(m)}const f=a==="charge"?"突击":a==="mine"?"机雷":"近战";e=Z(e,`[${ne(n)}] 牌组与弃牌区已耗尽，本次${f}伤害切换为防方自选模式`)}if(i.length<=t){const{player:l,log:d}=It(s,t,te,ne(n));let u=e;for(const f of d)u=Z(u,f);return u=he(u,n,l),tn(u)}if(a==="ranged"){const l=wa(s).length,d=Math.min(t,l),u=t-d;if(d<=0){const{player:f,log:m}=It(s,t,te,ne(n));let g=e;for(const h of m)g=Z(g,h);return g=he(g,n,f),tn(g)}return{...e,pendingDamage:{targetId:n,remaining:d,selectedInstanceIds:[],destroyedBombCount:0,source:a,attackerId:r,deckAutoCount:u}}}return{...e,pendingDamage:{targetId:n,remaining:t,selectedInstanceIds:[],destroyedBombCount:0,source:a,attackerId:r}}}function sx(e,n){var x;const{attackerId:t,targetId:a}=n,r=e.phase==="action_seg1"?1:2,s=ie(e,t),i=ie(e,a);if(s.isDefeated||i.isDefeated)return e;e=An(e,`RESOLVE_CHARGE: ${ne(t)}(${s.position.row},${s.position.col},${s.facing})→${ne(a)}(${i.position.row},${i.position.col},${i.facing}) seg=${r}`);const l=q.find(p=>p.id===s.unitId),d=q.find(p=>p.id===i.unitId),u=qo(s,i,r,e.map,l,d,te);if(!u.canAttack)return Z(e,`${t} 突击无效：${u.reason}`);const f=l.nameCn,m=d.nameCn,g=((x=u.card)==null?void 0:x.nameCn)??"突击";let h=e;if(u.chargeDestination&&(u.chargeDestination.row!==s.position.row||u.chargeDestination.col!==s.position.col)){const p=u.chargeDestination,_={...s,position:p};h=he(h,t,_),h=Z(h,`${f} 发动突击冲锋，移动至 (${p.row}, ${p.col})`)}{const p=ie(h,t),_=Jm(p.position,i.position);_!==p.facing&&(h=he(h,t,{...p,facing:_}),h=Z(h,`${f} 突击后自动转向【${_}】`))}h=Z(h,`${f} 对 ${m} 发动${g}【突击值 ${l.assault}】→ 对目标造成 ${u.damage} 点近战伤害；自机承受反伤 ${u.counterDamage} 点`);{const p=h.battleStats;if(p){let _=p;u.damage>0&&(_=es(_,t,a,u.damage)),u.counterDamage>0&&(_=es(_,a,t,u.counterDamage)),h={...h,battleStats:_}}}if(u.counterDamage>0){h={...h,pendingFollowUpDamage:{targetId:t,amount:u.counterDamage,source:"charge",attackerId:a,weaponName:"突击反伤",seg:r}},h={...h,lastDamageContext:{attackerId:t,targetId:a,weaponName:g}};const p=ha(h,a,u.damage,"charge",r,void 0,g);if(!p.pendingDamage&&!p.pendingArmorChoice){if(p.phase==="game_over")return p;const y={...{...p,pendingFollowUpDamage:void 0},lastDamageContext:{attackerId:a,targetId:t,weaponName:"突击反伤"}};return ha(y,t,u.counterDamage,"charge",r)}return p}return h={...h,lastDamageContext:{attackerId:t,targetId:a,weaponName:g}},ha(h,a,u.damage,"charge",r,void 0,g)}function as(e){if(!e.pendingFollowUpDamage||e.phase==="game_over")return pt(e);const{targetId:n,amount:t,source:a,attackerId:r,weaponName:s,seg:i}=e.pendingFollowUpDamage;let l={...e,pendingFollowUpDamage:void 0};return r&&s&&(l={...l,lastDamageContext:{attackerId:r,targetId:n,weaponName:s}}),pt(i?ha(l,n,t,a,i):Ic(l,n,t,a))}function ix(e,n){const t=e.pendingDamage;if(!t)return e;const{playerId:a,instanceId:r}=n,s=t.selectedInstanceIds.length===0,i=!!t.attackerId&&s&&!t.attackerDesignatedCardId,l=i?t.attackerId:t.targetId;if(a!==l)return e;const d=ie(e,t.targetId),u=$n(d).find(b=>b.instanceId===r&&!b.destroyed);if(!u||t.selectedInstanceIds.includes(r))return e;if(t.source==="ranged"&&!i){const b=wa(d);if(d.deck.some(I=>I.instanceId===r&&!I.destroyed)&&b.length>0)return e}const{player:f}=Ns(d,u);let m=he(e,t.targetId,f);const g=te(u.defId),h=(g==null?void 0:g.nameCn)??u.defId,x=g!=null&&g.hasBombIcon?"【💣】":"";m=Z(m,`  ▶ [${ne(t.targetId)}] ${h} 被摧毁${x}`);let p=t.remaining-1;const _=(t.destroyedBombCount??0)+(g!=null&&g.hasBombIcon?1:0);if(p<=0){if(m={...m,pendingDamage:null},t.deckAutoCount&&t.deckAutoCount>0){const b=ie(m,t.targetId),{player:v,log:I}=It(b,t.deckAutoCount,te,ne(t.targetId));for(const S of I)m=Z(m,S);m=he(m,t.targetId,v)}if(_>0){const b=ie(m,t.targetId);m=Z(m,`  ─── 誘爆检查（${_}张炸弹卡被破坏）───`);const{player:v,log:I}=pl(b,_,te,ne(t.targetId));for(const S of I)m=Z(m,S);m=he(m,t.targetId,v)}return m=tn(m),pt(as(m))}if($n(ie(m,t.targetId)).length===0){if(m={...m,pendingDamage:null},_>0){const b=ie(m,t.targetId);m=Z(m,`  ─── 誘爆检查（${_}张炸弹卡被破坏）───`);const{player:v,log:I}=pl(b,_,te,ne(t.targetId));for(const S of I)m=Z(m,S);m=he(m,t.targetId,v)}return m=tn(m),pt(as(m))}return m={...m,pendingDamage:{...t,remaining:p,selectedInstanceIds:[...t.selectedInstanceIds,r],destroyedBombCount:_,attackerDesignatedCardId:i?r:t.attackerDesignatedCardId}},m}function lx(e,n){const t=e.pendingDamage;if(!t)return e;const a=t.selectedInstanceIds.length===0,s=!!t.attackerId&&a&&!t.attackerDesignatedCardId?t.attackerId:t.targetId;if(n.playerId!==s)return e;const i=t.remaining+(t.deckAutoCount??0);if(i>0){const d=ie(e,t.targetId),{player:u,log:f}=It(d,i,te,ne(t.targetId));let m=e;for(const g of f)m=Z(m,g);return m=he(m,t.targetId,u),m={...m,pendingDamage:null},m=tn(m),pt(as(m))}let l={...e,pendingDamage:null};return pt(as(l))}function Jd(e){const n=["movement","ranged","melee","special"],t=n.indexOf(e.currentTiming);if(t===-1){console.warn("[GameReducer] Invalid currentTiming:",e.currentTiming);const r=An(e,`ADVANCE_TIMING: currentTiming 无效(${e.currentTiming})，强制推进阶段`);return gn(r,{type:"ADVANCE_PHASE"})}if(t<n.length-1){const r=n[t+1],s={...e,currentTiming:r},i={...s,turnOrder:ts(s)};return Z(i,`▸ ${ns(r)} — 行动顺序：${i.turnOrder.map(ne).join(" → ")}`)}const a=An(e,`ADVANCE_TIMING: ${e.phase}/${e.currentTiming} 时机全部完成，推进到下一阶段`);return gn(a,{type:"ADVANCE_PHASE"})}function pt(e){return e.pendingAdvanceTiming?e.phase==="game_over"?{...e,pendingAdvanceTiming:!1}:e.pendingDamage||e.pendingArmorChoice||e.pendingFollowUpDamage?e:rs({...e,pendingAdvanceTiming:!1},!0):e}function rs(e,n){const t=e.mines.find(l=>e.playerIds.some(d=>!e.players[d].isDefeated&&ve(e.players[d].position,l.position)));if(!t)return n?Jd({...e,pendingAdvanceTiming:!1}):e;const a=e.playerIds.find(l=>!e.players[l].isDefeated&&ve(e.players[l].position,t.position));if(!a)return n?Jd({...e,pendingAdvanceTiming:!1}):e;let r={...e,mines:e.mines.filter(l=>l.id!==t.id),pendingAdvanceTiming:n,lastDamageContext:{attackerId:t.ownerId,targetId:a,weaponName:"机雷"}};if(r=Z(r,`时机结束时，(${t.position.row}, ${t.position.col}) 的隐藏指示物被翻开`),t.kind==="dummy")return r=Z(r,`翻开结果为替身雷，${ne(a)} 未受到伤害`),rs(r,n);r=Z(r,`翻开结果为机雷，爆炸对 ${ne(a)} 造成 ${t.damage} 点伤害！`),r.battleStats&&t.damage>0&&(r={...r,battleStats:es(r.battleStats,t.ownerId,a,t.damage)});const s=e.phase==="action_seg2"?2:1,i=ha(r,a,t.damage,"mine",s,void 0,"机雷");return i.pendingDamage||i.pendingArmorChoice||i.pendingFollowUpDamage||i.phase==="game_over"?i:rs(i,n)}function Bd(e){return rs({...e,pendingAdvanceTiming:!1},!0)}function cx(e){var t,a;const n=An(e,`ADVANCE_PHASE: ${e.phase} → 推进`);switch(e.phase){case"draw":{const r=n.playerIds.find(s=>!n.players[s].isDefeated)??n.playerIds[0];return{...n,phase:"plotting",plottingStep:`transition_to_${r}`,activePlayer:r,currentTiming:null}}case"plotting":{const s={...fl(n,1),phase:"action_seg1",plottingStep:"complete",currentTiming:"movement"};let l={...s,turnOrder:ts(s)};for(const d of l.playerIds){const u=l.players[d];if(u.isDefeated)continue;const f=u.plotSeg1?((t=te(u.plotSeg1.defId))==null?void 0:t.nameCn)??u.plotSeg1.defId:"(空)",m=u.plotSeg2?((a=te(u.plotSeg2.defId))==null?void 0:a.nameCn)??u.plotSeg2.defId:"(空)";l=An(l,`${ne(d)} 配置: 阶段1=[${f}] 阶段2=[${m}] 位置=${u.position.row},${u.position.col} 朝向=${u.facing}`)}return Z(l,`▸ ${ns("movement")} — 行动顺序：${l.turnOrder.map(ne).join(" → ")}`)}case"action_seg1":{const s={...fl(n,2),phase:"action_seg2",currentTiming:"movement"},i={...s,turnOrder:ts(s)};return Z(i,`▸ ${ns("movement")} — 行动顺序：${i.turnOrder.map(ne).join(" → ")}`)}case"action_seg2":return dx(n);default:return n}}function dx(e){let n=An(e,`CLEANUP: 第${e.roundNumber}回合结束`);for(const l of e.playerIds){const d=e.players[l];n=An(n,`  ${ne(l)}: 位置=(${d.position.row},${d.position.col}) 朝向=${d.facing} 手牌=${d.hand.length} 牌组=${d.deck.filter(u=>!u.destroyed).length} 弃牌=${d.discard.length} ${d.isDefeated?"已击破":"存活"}`)}e=n;const t=(l,d)=>!d||d.destroyed?l:{...l,discard:[...l.discard,d]},a={...e.players};for(const l of e.playerIds){let d=t(e.players[l],e.players[l].plotSeg1);d=t(d,d.plotSeg2),d={...d,plotSeg1:null,plotSeg2:null},d={...d,discard:[...d.discard,...d.hand.filter(u=>!u.destroyed)],hand:[]},a[l]=d}const r={...e,players:a,phase:"cleanup",currentTiming:null},s=Z(r,`--- 第 ${e.roundNumber} 回合结束 ---`),i=tn(s);return i.phase==="game_over"?i:ux(i)}function ux(e){var r;const n=e.roundNumber+1;let t=Z({...e,phase:"draw",roundNumber:n},`=== 第 ${n} 回合开始 ===`);for(const s of e.playerIds){if(t.players[s].isDefeated)continue;const i=((r=q.find(l=>l.id===t.players[s].unitId))==null?void 0:r.evasion)??5;t=_c(t,{playerId:s,count:i})}const a=e.playerIds.find(s=>!t.players[s].isDefeated)??e.playerIds[0];return{...t,phase:"plotting",plottingStep:`transition_to_${a}`,activePlayer:a,currentTiming:null}}function tn(e){const n=i=>{const l=[...i.deck,...i.hand,...i.auxiliary,...i.discard,...i.plotSeg1?[i.plotSeg1]:[],...i.plotSeg2?[i.plotSeg2]:[]].filter(u=>!u.destroyed);return l.length>3?!1:!l.some(u=>{const f=te(u.defId);return f&&(f.actionType==="ranged"||f.actionType==="melee"||f.actionType==="charge"||f.actionType==="mine")})},t={...e.players};let a=!1;for(const i of e.playerIds){if(t[i].isDefeated)continue;n(t[i])&&(t[i]={...t[i],isDefeated:!0},a=!0)}if(!a)return e;let r={...e,players:t};for(const i of e.playerIds)if(!e.players[i].isDefeated&&r.players[i].isDefeated){const l=q.find(m=>m.id===r.players[i].unitId),d=e.playerIds.indexOf(i),u=d>=0?`P${d+1}`:i,f=r.lastDamageContext;if(f&&f.targetId===i&&f.attackerId){const m=q.find(x=>{var p;return x.id===((p=r.players[f.attackerId])==null?void 0:p.unitId)}),g=e.playerIds.indexOf(f.attackerId),h=g>=0?`P${g+1}`:f.attackerId;r=Z(r,`💀 ${u}[${(l==null?void 0:l.nameCn)??i}] 被 ${h}[${(m==null?void 0:m.nameCn)??f.attackerId}] 以【${f.weaponName}】击毁！`),r.battleStats&&(r={...r,battleStats:Kh(r.battleStats,f.attackerId,i)})}else r=Z(r,`💀 ${u}[${(l==null?void 0:l.nameCn)??i}] 机体严重受损，宣告报废！`)}const s=new Set;for(const i of e.playerIds)r.players[i].isDefeated||s.add(r.teams[i]);if(s.size<=1){if(s.size===0)return Z({...r,phase:"game_over"},"所有队伍同时全灭！平局！");const i=[...s][0],l=e.playerIds.filter(d=>r.teams[d]===i).map(d=>{const u=q.find(f=>f.id===r.players[d].unitId);return(u==null?void 0:u.nameCn)??d}).join("、");return Z({...r,phase:"game_over"},`队伍${i+1}（${l}）获胜！`)}return r}function px(e,n){if(e.currentTiming!=="melee")return e;const{playerId:t,to:a}=n,r=ie(e,t),s=e.playerIds.filter(f=>f!==t).map(f=>ie(e,f).position);if(!fn(r,te,"melee").moveSensor)return Z(e,`${t} 移动传感器未激活（需要辅助区中有≥2张）`);if(!Km(e.map,r.position,s).some(f=>ve(f,a)))return Z(e,`${t} 移动传感器目标格不在有效范围内`);const d={...r,position:a};let u=he(e,t,d);return u=Z(u,`【辅助】${t} 移动传感器：向 (${a.row}, ${a.col}) 移动1格`),u}function mx(e,n){const{playerId:t,facing:a}=n,r=ie(e,t),i=(e.phase==="action_seg2"?2:1)===1?r.plotSeg1:r.plotSeg2,l=i?te(i.defId):null;if(!(e.currentTiming==="melee"&&(l==null?void 0:l.actionType)==="melee"||e.currentTiming==="special"&&(l==null?void 0:l.actionType)==="aim"||e.currentTiming==="ranged"&&vc(l)))return Z(e,`${ne(t)} 当前时机不可调整朝向`);const u=q.find(g=>g.id===r.unitId),f=(u==null?void 0:u.nameCn)??t;let m=he(e,t,{...r,facing:a});return m=Z(m,`${f} 调整机头朝向至【${a}】`),m}function gn(e,n){switch(n.type){case"SELECT_UNIT":return Wh(e,n);case"SELECT_MAP":return Zh(e,n);case"CONFIRM_SETUP":return Qh(e);case"START_PLOTTING":return qh(e);case"SET_SPAWN_POSITION":return Yh(e,n);case"SET_SPAWN_FACING":return Xh(e,n);case"DRAW_CARDS":return _c(e,n);case"PLOT_CARD":return ex(e,n);case"CONFIRM_PLOT":return nx(e,n);case"ADVANCE_PLOT_STEP":return tx(e);case"MOVE_UNIT":return ax(e,n);case"ADJUST_FACING":return mx(e,n);case"ADVANCE_TIMING":return Bd(e);case"ADVANCE_PHASE":return cx(e);case"SKIP_ACTION":return Bd(e);case"RESET_GAME":return Bm(n.playerCount??2,n.teamCount??2);case"LOAD_GAME":return n.state;case"ADD_LOG":return Z(e,n.message);case"RESOLVE_RANGED":return Kd(e,n,"ranged");case"RESOLVE_MELEE":return Kd(e,n,"melee");case"RESOLVE_CHARGE":return sx(e,n);case"PLACE_MINE":return rx(e,n);case"SELECT_DAMAGE_CARD":return ix(e,n);case"CONFIRM_DAMAGE_SELECTION":return lx(e,n);case"CONFIRM_ARMOR_CHOICE":return ox(e,n);case"MELEE_SENSOR_MOVE":return px(e,n);default:return e}}class fx{constructor(){en(this,"ctx",null);en(this,"_enabled",!0);en(this,"_volume",.5)}init(){this.ctx||(this.ctx=new AudioContext),this.ctx.state==="suspended"&&this.ctx.resume()}get enabled(){return this._enabled}set enabled(n){this._enabled=n}get volume(){return this._volume}set volume(n){this._volume=Math.max(0,Math.min(1,n))}ensure(){return!this._enabled||!this.ctx?null:(this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx)}makeGain(n,t){const a=n.createGain();return a.gain.value=t*this._volume,a.connect(n.destination),a}noiseBuffer(n,t){const a=Math.floor(n.sampleRate*t),r=n.createBuffer(1,a,n.sampleRate),s=r.getChannelData(0);for(let i=0;i<a;i++)s[i]=Math.random()*2-1;return r}cardFlip(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createBufferSource();a.buffer=this.noiseBuffer(n,.06);const r=n.createBiquadFilter();r.type="highpass",r.frequency.value=3e3;const s=this.makeGain(n,.25);s.gain.setValueAtTime(.25*this._volume,t),s.gain.exponentialRampToValueAtTime(.001,t+.05),a.connect(r),r.connect(s),a.start(t),a.stop(t+.06)}footstep(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createOscillator();a.type="sine",a.frequency.setValueAtTime(150,t),a.frequency.exponentialRampToValueAtTime(60,t+.05);const r=this.makeGain(n,.2);r.gain.setValueAtTime(.2*this._volume,t),r.gain.exponentialRampToValueAtTime(.001,t+.08),a.connect(r),a.start(t),a.stop(t+.08);const s=n.createBufferSource();s.buffer=this.noiseBuffer(n,.03);const i=n.createBiquadFilter();i.type="bandpass",i.frequency.value=800,i.Q.value=2;const l=this.makeGain(n,.1);l.gain.setValueAtTime(.1*this._volume,t),l.gain.exponentialRampToValueAtTime(.001,t+.03),s.connect(i),i.connect(l),s.start(t),s.stop(t+.03)}weaponFire(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createBufferSource();a.buffer=this.noiseBuffer(n,.15);const r=n.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(1200,t),r.frequency.exponentialRampToValueAtTime(400,t+.12),r.Q.value=3;const s=this.makeGain(n,.3);s.gain.setValueAtTime(.3*this._volume,t),s.gain.exponentialRampToValueAtTime(.001,t+.15),a.connect(r),r.connect(s),a.start(t),a.stop(t+.15);const i=n.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(800,t),i.frequency.exponentialRampToValueAtTime(200,t+.12);const l=this.makeGain(n,.15);l.gain.setValueAtTime(.15*this._volume,t),l.gain.exponentialRampToValueAtTime(.001,t+.12),i.connect(l),i.start(t),i.stop(t+.12)}metalImpact(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=[200,340];for(const i of a){const l=n.createOscillator();l.type="sine",l.frequency.value=i;const d=this.makeGain(n,.2);d.gain.setValueAtTime(.2*this._volume,t),d.gain.exponentialRampToValueAtTime(.001,t+.25),l.connect(d),l.start(t),l.stop(t+.25)}const r=n.createBufferSource();r.buffer=this.noiseBuffer(n,.02);const s=this.makeGain(n,.25);s.gain.setValueAtTime(.25*this._volume,t),s.gain.exponentialRampToValueAtTime(.001,t+.02),r.connect(s),r.start(t),r.stop(t+.02)}explosion(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createOscillator();a.type="sine",a.frequency.setValueAtTime(60,t),a.frequency.exponentialRampToValueAtTime(30,t+.5);const r=this.makeGain(n,.35);r.gain.setValueAtTime(.35*this._volume,t),r.gain.setValueAtTime(.35*this._volume,t+.1),r.gain.exponentialRampToValueAtTime(.001,t+.5),a.connect(r),a.start(t),a.stop(t+.5);const s=n.createBufferSource();s.buffer=this.noiseBuffer(n,.4);const i=n.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(3e3,t),i.frequency.exponentialRampToValueAtTime(200,t+.35);const l=this.makeGain(n,.3);l.gain.setValueAtTime(.3*this._volume,t),l.gain.exponentialRampToValueAtTime(.001,t+.35),s.connect(i),i.connect(l),s.start(t),s.stop(t+.4)}cardShatter(){const n=this.ensure();if(!n)return;const t=n.currentTime;for(let a=0;a<5;a++){const r=t+a*.03,s=n.createBufferSource();s.buffer=this.noiseBuffer(n,.02);const i=n.createBiquadFilter();i.type="highpass",i.frequency.value=1e3+a*300;const l=this.makeGain(n,.2);l.gain.setValueAtTime(.2*this._volume,r),l.gain.exponentialRampToValueAtTime(.001,r+.02),s.connect(i),i.connect(l),s.start(r),s.stop(r+.02)}}mineBeep(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=[600,800,1e3];for(let r=0;r<a.length;r++){const s=t+r*.1,i=n.createOscillator();i.type="sine",i.frequency.value=a[r];const l=this.makeGain(n,.15);l.gain.setValueAtTime(.15*this._volume,s),l.gain.setValueAtTime(.15*this._volume,s+.05),l.gain.exponentialRampToValueAtTime(.001,s+.08),i.connect(l),i.start(s),i.stop(s+.08)}}chargeRumble(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(80,t),a.frequency.linearRampToValueAtTime(120,t+.3);const r=n.createOscillator();r.type="sine",r.frequency.value=15;const s=n.createGain();s.gain.value=.15*this._volume;const i=this.makeGain(n,.25);i.gain.setValueAtTime(.25*this._volume,t),i.gain.exponentialRampToValueAtTime(.001,t+.4),r.connect(s),s.connect(i.gain),a.connect(i),r.start(t),a.start(t),r.stop(t+.4),a.stop(t+.4)}uiBlip(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createOscillator();a.type="sine",a.frequency.value=880;const r=this.makeGain(n,.1);r.gain.setValueAtTime(.1*this._volume,t),r.gain.exponentialRampToValueAtTime(.001,t+.06),a.connect(r),a.start(t),a.stop(t+.06)}}const fe=new fx,gx={move_step:200,card_draw:350,ranged_hit:400,melee_hit:350,charge_move:300,charge_hit:450,card_destroy:400,mine_explode:500,mine_place:300,screen_shake:300,damage_number:600,cleanup_discard:2500,batch_card_draw:1600,deck_reshuffle:800};function hx(e){return gx[e.type]??300}const Fm=k.createContext(null);function $s({children:e}){const[n,t]=k.useState(!1),[a,r]=k.useState(null),[s,i]=k.useState(()=>Object.fromEntries(ga.map(x=>[x,null]))),l=k.useRef([]),d=k.useRef(!1),u=k.useRef(!1),f=k.useRef((()=>{try{const x=localStorage.getItem("em_anim_speed");return x==="fast"?.5:x==="off"?0:1}catch{return 1}})()).current,m=k.useCallback(()=>{if(u.current||l.current.length===0){r(null),t(!1),i(Object.fromEntries(ga.map(_=>[_,null]))),d.current=!1,u.current=!1;return}const x=l.current.shift();r(x),x.type==="move_step"&&i(_=>({..._,[x.playerId]:{pos:x.to,facing:x.facing}})),xx(x);const p=f===0?0:hx(x)*f;p===0?m():setTimeout(()=>m(),p)},[f]),g=k.useCallback(x=>{if(x.length!==0&&f!==0&&(l.current.push(...x),!d.current)){d.current=!0,u.current=!1,t(!0);const p=x.find(_=>_.type==="move_step");p&&i(_=>({..._,[p.playerId]:{pos:p.from,facing:p.facing}})),setTimeout(()=>m(),16)}},[m,f]),h=k.useCallback(()=>{u.current=!0,l.current=[],r(null),t(!1),i(Object.fromEntries(ga.map(x=>[x,null]))),d.current=!1},[]);return o.jsx(Fm.Provider,{value:{isAnimating:n,currentEvent:a,animatedPositions:s,enqueueEvents:g,skipAnimation:h,speedMultiplier:f},children:e})}function zr(){const e=k.useContext(Fm);if(!e)throw new Error("useAnimation must be used inside <AnimationProvider>");return e}function xx(e){switch(e.type){case"card_draw":fe.cardFlip();break;case"move_step":fe.footstep();break;case"ranged_hit":fe.weaponFire(),setTimeout(()=>fe.metalImpact(),100);break;case"melee_hit":fe.metalImpact();break;case"charge_move":fe.chargeRumble();break;case"charge_hit":fe.explosion(),setTimeout(()=>fe.metalImpact(),80);break;case"card_destroy":e.isBomb?fe.explosion():fe.cardShatter();break;case"mine_explode":fe.explosion();break;case"mine_place":fe.mineBeep();break;case"cleanup_discard":case"batch_card_draw":fe.cardFlip();break;case"deck_reshuffle":fe.cardFlip(),setTimeout(()=>fe.cardFlip(),200);break}}function bx(e,n){const{isAnimating:t,enqueueEvents:a}=zr();return k.useCallback(r=>{const s=r.type==="ADVANCE_TIMING"||r.type==="ADVANCE_PHASE"||r.type==="ADJUST_FACING"||r.type==="START_PLOTTING"||r.type==="SELECT_DAMAGE_CARD"||r.type==="CONFIRM_DAMAGE_SELECTION";if(t&&!s)return;const i=n.current,l=gn(i,r);e(r);const d=vx(i,l,r);d.length>0&&a(d)},[e,n,t,a])}function vx(e,n,t){switch(t.type){case"MOVE_UNIT":return yx(e,n,t);case"RESOLVE_RANGED":return Fd(e,n,"ranged",t.attackerId,t.targetId);case"RESOLVE_MELEE":return Fd(e,n,"melee",t.attackerId,t.targetId);case"RESOLVE_CHARGE":return _x(e,n,t.attackerId,t.targetId);case"DRAW_CARDS":return Ix(e,n,t.playerId);case"ADVANCE_TIMING":return e.phase==="action_seg2"&&n.phase!=="action_seg2"?[kx(e),...Gd(e,n,"player1"),...Gd(e,n,"player2")]:[];case"PLACE_MINE":return(t.placements??(t.to?[{position:t.to,kind:"real"}]:[])).map(a=>({type:"mine_place",playerId:t.playerId,position:a.position}));case"SELECT_DAMAGE_CARD":return jx(e,n);default:return[]}}function yx(e,n,t){const{playerId:a}=t,r=hn(e,a),s=hn(n,a),i=r.position;if(ve(i,s.position))return[];const l=[],d=t.path&&t.path.length>0?t.path:[s.position];let u=i;for(const g of d){const h=Lm(g.row-u.row,g.col-u.col);if(l.push({type:"move_step",playerId:a,from:u,to:g,facing:h}),u=g,ve(g,s.position))break}const f=e.mines.filter(g=>!n.mines.some(h=>h.id===g.id));for(const g of f)g.kind==="real"&&(l.push({type:"mine_explode",position:g.position,damage:g.damage}),l.push({type:"screen_shake",intensity:"heavy"}));const m=As(e,n,a);return zs(l,a,m),l}function Fd(e,n,t,a,r){var f;const s=[],i=hn(e,r).position,l=As(e,n,r),d=l.length;if(d===0&&!n.pendingDamage)return[];const u=d+(((f=n.pendingDamage)==null?void 0:f.remaining)??0);return s.push({type:t==="ranged"?"ranged_hit":"melee_hit",attackerId:a,targetId:r,damage:u,targetPos:i}),s.push({type:"screen_shake",intensity:t==="melee"?"medium":"light"}),u>0&&s.push({type:"damage_number",position:i,value:u}),zs(s,r,l),s}function _x(e,n,t,a){var f;const r=[],s=hn(e,t),i=hn(n,t),l=hn(e,a).position;ve(s.position,i.position)||(r.push({type:"charge_move",attackerId:t,from:s.position,to:i.position}),r.push({type:"move_step",playerId:t,from:s.position,to:i.position,facing:Lm(i.position.row-s.position.row,i.position.col-s.position.col)}));const d=As(e,n,a),u=d.length+(((f=n.pendingDamage)==null?void 0:f.remaining)??0);return r.push({type:"charge_hit",attackerId:t,targetId:a,damage:u,targetPos:l}),r.push({type:"screen_shake",intensity:"heavy"}),u>0&&r.push({type:"damage_number",position:l,value:u}),zs(r,a,d),r}function Ix(e,n,t){const a=[],r=hn(e,t),s=hn(n,t),i=new Set(r.hand.map(u=>u.instanceId)),l=s.hand.filter(u=>!i.has(u.instanceId));if(l.length>0){const u=r.deck.filter(g=>!g.destroyed).length,f=Math.min(l.length,u),m=l.length-f;f>0&&a.push({type:"batch_card_draw",playerId:t,count:f}),m>0&&(a.push({type:"deck_reshuffle",playerId:t}),a.push({type:"batch_card_draw",playerId:t,count:m}))}const d=new Set(r.auxiliary.map(u=>u.instanceId));for(const u of s.auxiliary)d.has(u.instanceId)||a.push({type:"card_draw",playerId:t,card:u,defId:u.defId,isAuxiliary:!0});return a}function kx(e){function n(t){const a=[];for(const r of t.hand)r.destroyed||a.push(r);return t.plotSeg1&&!t.plotSeg1.destroyed&&a.push(t.plotSeg1),t.plotSeg2&&!t.plotSeg2.destroyed&&a.push(t.plotSeg2),a}return{type:"cleanup_discard",p1Cards:n(e.players.player1),p2Cards:n(e.players.player2)}}function Gd(e,n,t){const a=[],r=hn(e,t),s=hn(n,t),i=s.hand.length;if(i>0){const d=r.deck.filter(m=>!m.destroyed).length,u=Math.min(i,d),f=i-u;u>0&&a.push({type:"batch_card_draw",playerId:t,count:u}),f>0&&(a.push({type:"deck_reshuffle",playerId:t}),a.push({type:"batch_card_draw",playerId:t,count:f}))}const l=new Set(r.auxiliary.map(d=>d.instanceId));for(const d of s.auxiliary)l.has(d.instanceId)||a.push({type:"card_draw",playerId:t,card:d,defId:d.defId,isAuxiliary:!0});return a}function jx(e,n){const t=e.pendingDamage;if(!t)return[];const a=As(e,n,t.targetId),r=[];return zs(r,t.targetId,a),r}function hn(e,n){return e.players[n]}function As(e,n,t){const a=new Set(hn(e,t).destroyedCards.map(r=>r.instanceId));return hn(n,t).destroyedCards.filter(r=>!a.has(r.instanceId))}function zs(e,n,t){for(let a=0;a<t.length;a++){const r=t[a],s=te(r.defId);e.push({type:"card_destroy",playerId:n,card:r,defId:r.defId,isBomb:(s==null?void 0:s.hasBombIcon)??!1,index:a,total:t.length})}}const wx={player1:!1,player2:!1,player1Difficulty:"hard",player2Difficulty:"hard",playerAI:{},playerDifficulty:{}};function Ae(e,n){var t;return((t=e.playerAI)==null?void 0:t[n])!==void 0?e.playerAI[n]:n==="player1"?e.player1:n==="player2"?e.player2:!1}function Pr(e,n){var t;return((t=e.playerDifficulty)==null?void 0:t[n])!==void 0?e.playerDifficulty[n]:n==="player1"?e.player1Difficulty:n==="player2"?e.player2Difficulty:"hard"}function kc(e,n){const t=e.teams[n];return e.playerIds.filter(a=>a!==n&&e.teams[a]!==t&&!e.players[a].isDefeated)}function Ps(e,n){const t=e.players[n].position,a=kc(e,n);if(a.length===0)return e.playerIds.find(i=>i!==n)??n;let r=a[0],s=1/0;for(const i of a){const l=Ke(t,e.players[i].position);l<s&&(s=l,r=i)}return r}function Bn(e,n){return e.players[n]}function sa(e,n){const t=n.row-e.row,a=n.col-e.col;return Math.abs(t)>=Math.abs(a)?t<0?"N":"S":a>0?"E":"W"}function Ja(e){const n={};for(const t of e)t.destroyed||(n[t.defId]=(n[t.defId]??0)+1);return n}function Sx(e){return Object.values(e).reduce((n,t)=>n+t,0)}function Cx(e,n){const t={...e};for(const[a,r]of Object.entries(n))t[a]&&(t[a]=Math.max(0,t[a]-r),t[a]===0&&delete t[a]);return t}function jc(e,n){const t={};for(const[a,r]of Object.entries(e)){const s=n(a),i=(s==null?void 0:s.actionType)??"unknown";t[i]=(t[i]??0)+r}return t}function Ba(e,n,t){if(e<=0||n<=0||t<=0)return 0;const a=Math.min(t,n);let r=1;for(let s=0;s<a;s++)r*=Math.max(0,(n-e-s)/(n-s));return 1-r}function gl(e){const n=Object.entries(e).filter(([,t])=>t>0).sort((t,a)=>a[1]-t[1]).slice(0,4).map(([t,a])=>`${t}${a}`);return n.length>0?n.join("、"):"无"}function Mt(e,n,t){const a=Ja((Pt[e.unitId]??[]).map(g=>({instanceId:`${g.id}-template`,defId:g.id,destroyed:!1}))),r=t==="self"?Ja(e.hand):{},s=t==="self"?Ja(e.deck):{},i=Ja([...e.auxiliary,...e.discard,...e.destroyedCards,...e.plotSeg1?[e.plotSeg1]:[],...e.plotSeg2?[e.plotSeg2]:[]]),l=t==="self"?Ja([...e.hand,...e.deck,...e.auxiliary,...e.discard,...e.destroyedCards,...e.plotSeg1?[e.plotSeg1]:[],...e.plotSeg2?[e.plotSeg2]:[]]):i,d=t==="self"?s:Cx(a,l),u=Sx(d),f=jc(d,n),m=g=>Object.entries(d).reduce((h,[x,p])=>{const _=n(x);return h+((_==null?void 0:_.actionType)===g?p:0)},0);return{playerId:e.id,unitId:e.unitId,perspective:t,handSize:e.hand.filter(g=>!g.destroyed).length,deckSize:e.deck.filter(g=>!g.destroyed).length,exactHandCounts:r,exactDeckCounts:s,hiddenPoolCounts:d,actionTypeCounts:f,armorInHiddenHandProb:Ba(m("armor"),u,e.hand.length),rangedInHiddenHandProb:Ba(m("ranged"),u,e.hand.length),meleeInHiddenHandProb:Ba(m("melee"),u,e.hand.length),chargeInHiddenHandProb:Ba(m("charge"),u,e.hand.length),movementInHiddenHandProb:Ba(m("movement"),u,e.hand.length)}}function Gm(e,n){let t=0;return n<=5&&(t+=e.rangedInHiddenHandProb*2.2),n<=2&&(t+=e.meleeInHiddenHandProb*2.4),n<=3&&(t+=e.chargeInHiddenHandProb*2),n>=3&&(t+=e.movementInHiddenHandProb*.8),t}function Ie(e){return`[AI][${e.replace("player","P")}]`}function Nx(e,n,t,a,r,s){if(!n)return 0;const i=Ke(t.position,a.position);let l;switch(n.actionType){case"ranged":case"melee":case"charge":l=5+(n.damage??0);break;case"movement":l=2+(n.movementValue??0)*.5;break;case"aim":case"armor":case"special":l=2;break;case"mine":l=1.5+(n.damage??0)*.2;break;default:l=1}n.hasBombIcon&&(s?l+=5:l+=8);const u=$n(t).filter(p=>p.defId===e.defId&&!p.destroyed).length;u>=3?l-=3:u===2&&(l-=1.5);const f=q.find(p=>p.id===t.unitId),m=(f==null?void 0:f.movement)??3;if(n.actionType==="movement"&&(i>=4?l+=3:i<=2&&(l-=.5)),n.actionType==="ranged"||n.actionType==="melee"||n.actionType==="charge"){const p=nt(n,i,m);p>=.8?l+=4:p>=.4?l+=2:p>=.1?l+=.5:l-=2}const g=$n(t),h=g.length,x=n.actionType==="ranged"||n.actionType==="melee"||n.actionType==="charge"||n.actionType==="mine";if(h<=6&&!x){const p=g.filter(_=>{const y=r(_.defId);return y&&(y.actionType==="ranged"||y.actionType==="melee"||y.actionType==="charge"||y.actionType==="mine")}).length;h<=4?l-=4:h<=6&&p<=2&&(l-=2)}return l}function Ht(e,n,t,a,r,s){if(e.actionType!=="movement")return[];const i=fn(n,r,"movement"),l=(e.movementValue??0)+(i.wheel?2:0);if(l<=0)return[];const d=[t.position],u=Es(a,n.position,l,d,i,n.facing),f=[];for(const{pos:m}of u)Ds(a,n.position,n.facing,m,l,[t.position],i)&&f.push({pos:m,dist:Ke(m,t.position)});return f.sort((m,g)=>m.dist-g.dist),f}function Tx(e,n,t,a,r,s){const i=Ht(e,t,a,r,s);if(i.length===0)return null;if(n.actionType==="melee"){const l=i.find(d=>d.dist===1);return l?{...l,facing:sa(l.pos,a.position)}:null}if(n.actionType==="ranged"){const l=n.rangeMin??1,d=n.rangeMax??6,u=n.rangeOptimal??Math.round((l+d)/2);let f=null,m=1/0;for(const g of i){if(g.dist<l||g.dist>d||!ja(r,g.pos,a.position))continue;const h=sa(g.pos,a.position);if(!gt(h,g.pos,a.position))continue;const x=Math.abs(g.dist-u);x<m&&(m=x,f=g)}return f?{...f,facing:sa(f.pos,a.position)}:null}if(n.actionType==="charge"){const l=i.find(d=>d.dist<=3);return l?{...l,facing:sa(l.pos,a.position)}:null}return null}function or(e,n,t,a,r,s,i){var u;let l=e.damage??0;if(e.actionType==="ranged"&&e.rangeOptimal!==void 0&&e.damageAttenuation!==void 0){const f=Math.max(0,t-e.rangeOptimal);l-=f*e.damageAttenuation}const d=(u=i.cells[n.row])==null?void 0:u[n.col];return(d==null?void 0:d.terrain)==="water"&&e.isEnergyWeapon&&(l-=1),Math.max(0,l)}function Mx(e){return e.armorInHiddenHandProb}function Ex(e,n,t,a,r,s,i,l){var b,v;const d=Ke(t.position,a.position),u=(b=r.cells[a.position.row])==null?void 0:b[a.position.col],f=(v=r.cells[t.position.row])==null?void 0:v[t.position.col],m=Mx(l),g=Gm(l,d),h=I=>["ranged","melee","charge"].includes(I.actionType),x=(u==null?void 0:u.terrain)==="forest"?.85:1,p=i.actionTypeCounts.movement??0,_=i.actionTypeCounts.armor??0;if(e.actionType==="movement"&&h(n)){const I=Tx(e,n,t,a,r,s);if(I)return or(n,I.pos,I.dist,2,!1,!1,r)*(1-m*.5)*x*3.5+2+Math.max(0,1.5-g*.25);const S=Ht(e,t,a,r,s),C=S.length>0?S[0].dist:d,w=d-C,N=e.movementValue??0,z=nt(n,C,N);return w*1.5+(n.damage??0)*z*.8+(p<=1&&d>4?.6:0)}if(e.actionType==="aim"&&h(n)){let I=(n.damage??0)+1,S=!1;if(n.actionType==="ranged"){const N=n.rangeMin??1,z=n.rangeMax??6;if(S=d>=N&&d<=z&&ja(r,t.position,a.position)&&gt(t.facing,t.position,a.position),S&&n.rangeOptimal&&n.damageAttenuation){const E=Math.max(0,d-n.rangeOptimal);I-=E*n.damageAttenuation}(f==null?void 0:f.terrain)==="water"&&n.isEnergyWeapon&&(I-=1)}else n.actionType==="melee"?S=d===1:n.actionType==="charge"&&(S=d<=3);I=Math.max(0,I);const C=I*(1-m*.5)*x;if(S)return C*4+3-m*.8;const w=nt(n,d,3);return C*.5*w+.1}if(h(e)&&n.actionType==="movement"){let I=0;if(e.actionType==="ranged"){const w=e.rangeMin??1,N=e.rangeMax??6;if(d>=w&&d<=N&&ja(r,t.position,a.position)&&gt(t.facing,t.position,a.position))I=or(e,t.position,d,1,!1,!1,r)*(1-m*.5)*x*2.5;else{const E=nt(e,d,n.movementValue??0);I=(e.damage??0)*E*.8}}else if(e.actionType==="melee")if(d===1)I=or(e,t.position,d,1,!1,!1,r)*(1-m*.5)*3;else{const w=nt(e,d,n.movementValue??0);I=(e.damage??0)*w*.8}else if(e.actionType==="charge")if(d<=3)I=(e.damage??0)*2;else{const w=nt(e,d,n.movementValue??0);I=(e.damage??0)*w*.8}const S=Ht(n,t,a,r,s),C=S.length>0?Math.max(0,d-S[0].dist)*1+1:.5;return I+C}if(h(e)&&n.actionType==="armor"){let I=to(e,d,t.position,t.facing,a.position,r,x,m,1);const S=(d<=3?2.5:d<=5?1.5:.5)+g*.5;return I+S}if(e.actionType==="armor"&&h(n)){const I=(d<=3?2.5:d<=5?1.5:.5)+g*.5;let S=to(n,d,t.position,t.facing,a.position,r,x,m,2);return I+S}if(e.actionType==="movement"&&n.actionType==="movement"){if(d<=3)return 1;const I=Ht(e,t,a,r,s),S=I.length>0?I[0].dist:d,C=d-S,w=n.movementValue??0;return(C+Math.min(w,S-1))*1.2+.5}if(h(e)&&h(n)){const I=to(e,d,t.position,t.facing,a.position,r,x,m,1),S=to(n,d,t.position,t.facing,a.position,r,x,m,2),C=I>1&&S>1;return I+S+(C?2:0)}if(e.actionType==="movement"&&n.actionType==="armor"){const I=Ht(e,t,a,r,s),S=I.length>0?I[0].dist:d;return(d-S)*1+(S<=3?2:.5)}if(e.actionType==="armor"&&n.actionType==="movement"){const I=(d<=3?2:.5)+g*.3,S=Ht(n,t,a,r,s),C=S.length>0?S[0].dist:d;return I+(d-C)*1}if(e.actionType==="aim"&&!h(n))return .3+ao(n,d);if(e.actionType==="mine"||n.actionType==="mine"){const I=d<=3?1.5:.5,S=e.actionType==="mine"?n:e;return I+ao(S,d)+l.movementInHiddenHandProb}const y=_<=1&&g>2.4&&e.actionType!=="armor"&&n.actionType!=="armor"?-.8:0;return ao(e,d)+ao(n,d)+y}function nt(e,n,t){if(e.actionType==="ranged"){const a=e.rangeMin??1,r=e.rangeMax??6;if(n>=a&&n<=r)return 1;const s=n<a?a-n:n-r;return s<=t?.6-s*.1:Math.max(0,.15-(s-t)*.05)}if(e.actionType==="melee"){if(n===1)return 1;const a=n-1;return a<=t?.6-a*.1:Math.max(0,.15-(a-t)*.05)}if(e.actionType==="charge"){if(n<=3)return 1;const a=n-3;return a<=t?.6-a*.1:Math.max(0,.15-(a-t)*.05)}return 0}function to(e,n,t,a,r,s,i,l,d){const u=nt(e,n,3);if(e.actionType==="ranged"){const f=e.rangeMin??1,m=e.rangeMax??6;return n>=f&&n<=m&&ja(s,t,r)&&gt(a,t,r)?or(e,t,n,d,!1,!1,s)*(1-l*.5)*i*2.5:(e.damage??0)*u*.8}return e.actionType==="melee"?n===1?or(e,t,n,d,!1,!1,s)*(1-l*.5)*3:(e.damage??0)*u*.8:e.actionType==="charge"?n<=3?(e.damage??0)*2:(e.damage??0)*u*.8:0}function ao(e,n){switch(e.actionType){case"movement":return(e.movementValue??0)*.4+(n>3?1:.2);case"armor":return n<=3?2:n<=5?1:.3;case"aim":return .3;case"mine":return n<=3?1.5:.5;case"special":return 1;case"ranged":case"melee":case"charge":{const t=nt(e,n,3);return(e.damage??0)*t*.5+.1}default:return .1}}function Dx(e,n,t,a,r){var p;const s=e.hand.filter(_=>!_.destroyed),i=Mt(e,t,"self");if(s.length===0)return{seg1:null,seg2:null,reasoning:[`${Ie(e.id)} 手牌为空，无法布局。`]};if(s.length===1)return{seg1:s[0].instanceId,seg2:null,reasoning:[`${Ie(e.id)} 仅剩 1 张手牌，直接配置【${((p=t(s[0].defId))==null?void 0:p.nameCn)??s[0].defId}】。`]};if(a==="easy"){const _=[...s].sort(()=>Math.random()-.5);return{seg1:_[0].instanceId,seg2:_[1].instanceId,reasoning:[`${Ie(e.id)} 简单 AI 随机布局。`]}}const l=Array.isArray(n)?n:[n];let d=-1/0,u=s[0].instanceId,f=s[1].instanceId,m=null,g=null,h=null;for(let _=0;_<s.length;_++){const y=s[_],b=t(y.defId);if(b)for(let v=0;v<s.length;v++){if(_===v)continue;const I=s[v],S=t(I.defId);if(!S)continue;let C=0,w=null;if(r)for(const N of l){const z=Mt(N,t,"opponent"),E=Ex(b,S,e,N,r,t,i,z);E>C&&(C=E,w=N)}C>d&&(d=C,u=y.instanceId,f=I.instanceId,m=w,g=b,h=S)}}const x=[`${Ie(e.id)} 布局评估：手牌${s.length}张，剩余牌池=${gl(jc(i.exactDeckCounts,t))}。`];if(m&&g&&h){const _=Mt(m,t,"opponent");x.push(`${Ie(e.id)} 目标锁定 ${m.id.replace("player","P")}：其隐藏手牌装甲概率=${Math.round(_.armorInHiddenHandProb*100)}%，威胁池=${gl(_.actionTypeCounts)}。`,`${Ie(e.id)} 选择【${g.nameCn}】→【${h.nameCn}】，综合得分=${d.toFixed(1)}。`)}return{seg1:u,seg2:f,reasoning:x}}function $x(e,n,t,a,r){const s=Bn(e,n),i=kc(e,n),l=Ps(e,n),d=Bn(e,l),u=Mt(s,a,"self"),f=fn(s,a,"movement"),m=t===1?s.plotSeg1:s.plotSeg2;if(!m)return null;const g=a(m.defId);if(!g||g.actionType!=="movement")return null;const h=(g.movementValue??0)+(f.wheel?2:0);if(h<=0)return null;const x=e.playerIds.filter(K=>K!==n&&!e.players[K].isDefeated).map(K=>e.players[K].position),p=Es(e.map,s.position,h,x,f,s.facing);if(p.length===0)return null;function _(K){let M=l,V=Ke(K,d.position);for(const R of i){const A=Ke(K,e.players[R].position);A<V&&(V=A,M=R)}return{eid:M,dist:V}}function y(K){const M=Ds(e.map,s.position,s.facing,K,h,x,f);if(!M)return null;const{eid:V}=_(K);return{pos:K,path:M.path,finalFacing:sa(K,e.players[V].position),reasoning:[]}}if(r==="easy"){if(Math.random()<.5)return null;const K=[...p].sort(()=>Math.random()-.5);for(const{pos:M}of K){const V=y(M);if(V)return V}return null}const v=(t===1?2:1)===1?s.plotSeg1:s.plotSeg2,I=v?a(v.defId):null;let S;if(!I)S=1;else if(I.actionType==="ranged"){const K=I.rangeMin??1,M=I.rangeMax??6;S=I.rangeOptimal??Math.round((K+M)/2)}else I.actionType==="melee"||I.actionType==="charge"?S=1:S=2;const C=[];for(const K of i){const M=Bn(e,K),V=wa(M);for(const R of V){const A=a(R.defId);A&&A.actionType==="ranged"&&C.push({min:A.rangeMin??1,max:A.rangeMax??6,ownerPos:M.position})}}const w=e.mines.filter(K=>K.ownerId!==n),N=i.map(K=>Mt(e.players[K],a,"opponent")),z=[];for(const{pos:K}of p){const{dist:M}=_(K),V=-Math.abs(M-S)*3,A=w.some(X=>ve(X.position,K))?-10:0,B=e.map.cells[K.row][K.col];let P=0;B.terrain==="forest"?P=1.5:B.terrain==="water"&&(P=-1);let F=0;for(const X of C){const Q=Ke(K,X.ownerPos);Q<X.min||Q>X.max?F+=.3:F-=.5}let G=0;for(let X=0;X<i.length;X++){const Q=Ke(K,e.players[i[X]].position);G-=Gm(N[X],Q)*.8}z.push({pos:K,quickScore:V+A+P+F+G})}z.sort((K,M)=>M.quickScore-K.quickScore);const E=z.slice(0,5);let J=-1/0,D=null;for(const{pos:K,quickScore:M}of E){const V=y(K);if(!V)continue;let R=0;for(const B of i){const P=e.players[B].position;R+=gt(V.finalFacing,K,P)?.5:-.3}const A=M+R;A>J&&(J=A,D=V)}if(!D)for(const{pos:K}of z.slice(5)){const M=y(K);if(M){D=M;break}}if(!D)return null;const $=_(D.pos),L=Mt(e.players[$.eid],a,"opponent");return D.reasoning=[`${Ie(n)} 移动评估：本机剩余牌池=${gl(jc(u.exactDeckCounts,a))}。`,`${Ie(n)} 目标距离优先=${S}，选择终点(${D.pos.row},${D.pos.col})，终朝向=${D.finalFacing}。`,`${Ie(n)} 主要依据：贴近后续行动，同时规避敌方威胁；最近目标 ${$.eid.replace("player","P")} 装甲概率=${Math.round(L.armorInHiddenHandProb*100)}%。`],D}function Ax(e,n,t,a,r,s){const i=Bn(e,n),l=kc(e,n),d=Ps(e,n),u=Ln(i,t,a,r);if(!u)return{shouldAttack:!1,targetId:d,reasoning:[`${Ie(n)} 当前时机无可用攻击卡，放弃攻击。`]};let f=null,m=-1/0;const g=[];for(const h of l){const x=Bn(e,h),p=Mt(x,r,"opponent");if(u.actionType==="charge"&&a==="melee"){const v=q.find(C=>C.id===i.unitId),I=q.find(C=>C.id===x.unitId);if(!v||!I)continue;const S=qo(i,x,t,e.map,v,I,r);if(!S.canAttack)continue;if(s==="hard"){const C=S.counterDamage,w=mi(i),N=mi(x),z=S.damage-C;if(z<0&&w<=C+2||w<=5&&C>=3||N<=3&&C>=2)continue;const E=z*2+(20-N)-p.armorInHiddenHandProb;g.push(`${h.replace("player","P")}: 净伤=${z} 存活牌=${N} 得分=${E.toFixed(1)}`),E>m&&(m=E,f=h)}else{const C=S.damage;g.push(`${h.replace("player","P")}: 突击伤害=${C}`),C>m&&(m=C,f=h)}continue}const _=Qo(i,x,t,a,e.map,r);if(!_.canAttack)continue;const y=mi(x),b=_.damage*2+(20-y)-p.armorInHiddenHandProb*1.2;g.push(`${h.replace("player","P")}: 期望伤害=${_.damage} 存活牌=${y} 装甲概率=${Math.round(p.armorInHiddenHandProb*100)}% 得分=${b.toFixed(1)}`),b>m&&(m=b,f=h)}return f?{shouldAttack:!0,targetId:f,reasoning:[`${Ie(n)} 攻击评估：武装【${u.nameCn}】。`,`${Ie(n)} 候选目标：${g.join(" ｜ ")}`,`${Ie(n)} 选择攻击 ${f.replace("player","P")}，综合得分=${m.toFixed(1)}。`]}:{shouldAttack:!1,targetId:d,reasoning:[`${Ie(n)} 攻击评估：武装【${u.nameCn}】当前无合法目标。`]}}function Hd(e,n,t,a,r=!1,s){const i=wa(n);if(i.length===0)return{value:null,reasoning:[`${Ie(n.id)} 无可选明置牌，转为自动结算。`]};if(a==="easy")return{value:i[Math.floor(Math.random()*i.length)].instanceId,reasoning:[`${Ie(n.id)} 简单 AI 随机选择伤害牌。`]};const l=s??n;let d=null,u=r?-1/0:1/0;const f=[];for(const g of i){const h=t(g.defId),x=Nx(g,h,n,l,t,r);f.push(`${(h==null?void 0:h.nameCn)??g.defId}:${x.toFixed(1)}`),(r?x>u:x<u)&&(u=x,d=g)}const m=d?t(d.defId):null;return{value:(d==null?void 0:d.instanceId)??null,reasoning:[`${Ie(n.id)} ${r?"瞄准指定破坏":"承伤弃牌"}评估：${f.join(" ｜ ")}`,`${Ie(n.id)} 选择【${(m==null?void 0:m.nameCn)??(d==null?void 0:d.defId)??"自动结算"}】。`]}}function zx(e,n,t,a,r){const s=Bn(e,n),i=Bn(e,Ps(e,n)),l=t===1?s.plotSeg1:s.plotSeg2;if(!l)return null;const d=a(l.defId);if(!d||d.actionType!=="mine")return null;const u=e.mines.map(h=>h.position),f=[];for(let h=-1;h<=1;h++)for(let x=-1;x<=1;x++){if(h===0&&x===0)continue;const p=s.position.row+h,_=s.position.col+x;if(p<0||p>=e.map.height||_<0||_>=e.map.width)continue;const y={row:p,col:_};u.some(b=>ve(b,y))||f.push(y)}return f.length<4?null:[...f].sort((h,x)=>{const p=Ke(h,i.position),_=Ke(x,i.position);return p-_}).slice(0,4).map((h,x)=>({position:h,kind:x<2?"real":"dummy"}))}function Px(e,n,t,a,r){const s=Bn(e,n),i=t===1?s.plotSeg1:s.plotSeg2;if(!i)return null;const l=a(i.defId);if(!l)return null;if(l.actionType==="mine"){const d=zx(e,n,t,a,r);return!d||d.length===0?null:{actionType:"mine",placements:d,damage:l.damage||3,reasoning:[`${Ie(n)} 布雷评估：优先封锁靠近敌方的 4 个候选格。`,`${Ie(n)} 选点=${d.map(u=>`(${u.position.row},${u.position.col})-${u.kind==="real"?"真":"假"}`).join("、")}`]}}if(l.actionType==="aim"){const d=Ps(e,n),u=Bn(e,d),f=sa(s.position,u.position);return{actionType:"aim",facing:f,reasoning:[`${Ie(n)} 照准评估：最近敌机=${d.replace("player","P")}，先把朝向对准火力线。`,`${Ie(n)} 调整朝向为 ${f}。`]}}return null}function Vx(e,n,t){const a=[];let r=e;for(const s of t){if(r<=0)break;a.push(s.instanceId),r-=s.armorValue}for(const s of n){if(r<=0)break;a.push(s.instanceId),r-=s.armorValue}return{value:a,reasoning:[`[AI][ARMOR] 受到${e}点伤害，准备区装甲优先，其次手牌装甲。`,`[AI][ARMOR] 预计减伤后剩余=${Math.max(0,r)}。`]}}const Vs=1,Rx=["slot_1","slot_2","slot_3","slot_4","slot_5"],Lx=10,wr="em_saves_index",Sr="em_replays_index",wc=e=>`em_save_${e}`,os=e=>`em_replay_${e}`;function Ea(e){try{const n=localStorage.getItem(e);return n?JSON.parse(n):[]}catch{return[]}}function Rs(e,n){localStorage.setItem(e,JSON.stringify(n))}function Ud(){return Ea(wr).sort((n,t)=>t.timestamp-n.timestamp)}function Sc(e,n,t,a){const r={slotId:e,timestamp:Date.now(),roundNumber:n.roundNumber,phase:n.phase,player1Unit:n.players.player1.unitId,player2Unit:n.players.player2.unitId,mapId:n.map.id,mapName:n.map.nameCn,isAutoSave:a},s={version:Vs,metadata:r,gameState:n,aiConfig:t};try{localStorage.setItem(wc(e),JSON.stringify(s))}catch{throw new Error("存储空间不足，无法保存存档")}const l=Ea(wr).filter(d=>d.slotId!==e);return l.push(r),Rs(wr,l),r}function Ox(e){try{const n=localStorage.getItem(wc(e));if(!n)return null;const t=JSON.parse(n);if(!Jx(t))return null;const a=t;return a.gameState.playerIds||(a.gameState.playerIds=["player1","player2"],a.gameState.teams={player1:0,player2:1},a.gameState.teamCount=2,a.gameState.shuffleSeed=a.metadata.timestamp),a}catch{return null}}function Kx(e){localStorage.removeItem(wc(e));const n=Ea(wr);Rs(wr,n.filter(t=>t.slotId!==e))}function Jx(e){if(!e||typeof e!="object")return!1;const n=e;if(n.version!==Vs||!n.gameState||typeof n.gameState!="object")return!1;const t=n.gameState;if(!t.phase||!t.players||!t.map)return!1;const a=t.players;return!(!a.player1||!a.player2||!n.metadata||typeof n.metadata!="object"||!n.aiConfig||typeof n.aiConfig!="object")}function Wd(){return Ea(Sr).sort((n,t)=>t.timestamp-n.timestamp)}function Bx(e,n,t){const a=`${Date.now()}`,r={replayId:a,timestamp:Date.now(),totalRounds:e.roundNumber,totalActions:n.length,player1Unit:e.players.player1.unitId,player2Unit:e.players.player2.unitId,mapId:e.map.id,mapName:e.map.nameCn,winner:t},s={version:Vs,metadata:r,initialState:e,actions:n};try{localStorage.setItem(os(a),JSON.stringify(s))}catch{throw new Error("存储空间不足，无法保存录像")}const i=Ea(Sr);for(i.push(r),i.sort((l,d)=>l.timestamp-d.timestamp);i.length>Lx;){const l=i.shift();localStorage.removeItem(os(l.replayId))}return Rs(Sr,i),r}function Zd(e){try{const n=localStorage.getItem(os(e));if(!n)return null;const t=JSON.parse(n);if(!Gx(t))return null;const a=t;return a.initialState.playerIds||(a.initialState.playerIds=["player1","player2"],a.initialState.teams={player1:0,player2:1},a.initialState.teamCount=2,a.initialState.shuffleSeed=a.metadata.timestamp),a}catch{return null}}function Fx(e){localStorage.removeItem(os(e));const n=Ea(Sr);Rs(Sr,n.filter(t=>t.replayId!==e))}function Gx(e){if(!e||typeof e!="object")return!1;const n=e;return!(n.version!==Vs||!n.initialState||typeof n.initialState!="object"||!Array.isArray(n.actions)||!n.metadata||typeof n.metadata!="object")}function Hx(e,n){let t=e.initialState,a=0;for(;a<e.actions.length&&!(t.roundNumber>=n);a++)t=gn(t,e.actions[a]);return{state:t,actionIndex:a}}const sr={N:"↑北",S:"↓南",E:"→东",W:"←西"},ro={setup:"配置",pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"行动阶段·段落1",action_seg2:"行动阶段·段落2",cleanup:"清理阶段",game_over:"对局结束"},Ux={movement:"移动时序",ranged:"射击时序",melee:"近战时序",special:"特殊时序"},Wx={movement:"移动",ranged:"射击",melee:"近战",charge:"突击",aim:"瞄准",armor:"装甲",mine:"机雷",special:"特殊",auxiliary:"辅助"};function St(e){var n;return((n=q.find(t=>t.id===e))==null?void 0:n.nameCn)??e}function jo(e){const n=te(e);if(!n)return e;const t=Wx[n.actionType]??n.actionType;let a="";n.movementValue!=null&&(a=` 值${n.movementValue}`),n.damage!=null&&(a=` 伤害${n.damage}`,n.rangeMin!=null&&n.rangeMax!=null&&(a+=` 射程${n.rangeMin}-${n.rangeMax}`),n.rangeOptimal!=null&&(a+=` 最佳${n.rangeOptimal}`));const r=n.hasBombIcon?" [💣]":"",s=n.isKaiVariant?" [◆改]":"";return`${n.nameCn}(${t}${a}${r}${s})`}function hl(e){const n=jo(e.defId);return e.destroyed?`${n}[已破坏]`:n}function oo(e){return e.length===0?"(无)":e.map(n=>hl(n)).join(", ")}function so(e,n){const t=[],a=St(e.unitId),r=sr[e.facing]??e.facing,s=e.deck.filter(d=>!d.destroyed).length,i=e.hand.filter(d=>!d.destroyed).length,l=e.auxiliary.filter(d=>!d.destroyed).length;if(t.push(`  ${n} [${a}]  位置(${e.position.row},${e.position.col}) 朝向${r}  败北=${e.isDefeated}`),t.push(`    牌库=${s}  手牌=${i}  辅助=${l}/${e.auxiliary.length}  弃牌=${e.discard.length}  破坏=${e.destroyedCards.length}  总存活=${s+i+l+e.discard.length+(e.plotSeg1&&!e.plotSeg1.destroyed?1:0)+(e.plotSeg2&&!e.plotSeg2.destroyed?1:0)}`),t.push(`    手牌: ${oo(e.hand)}`),e.auxiliary.length>0&&t.push(`    辅助: ${oo(e.auxiliary)}`),e.plotSeg1||e.plotSeg2){const d=e.plotSeg1?hl(e.plotSeg1):"—",u=e.plotSeg2?hl(e.plotSeg2):"—";t.push(`    布局: 段1=[${d}]  段2=[${u}]`)}return e.discard.length>0&&t.push(`    弃牌: ${oo(e.discard)}`),e.destroyedCards.length>0&&t.push(`    破坏: ${oo(e.destroyedCards)}`),t.join(`
`)}function Zx(e,n){const t=r=>{const s=n.players[r],i=n.playerIds.indexOf(r);return`${i>=0?`P${i+1}`:r}[${s?St(s.unitId):r}]`},a=(r,s)=>{const i=n.players[s];return i?[...i.deck,...i.hand,...i.auxiliary,...i.discard,...i.destroyedCards,...i.plotSeg1?[i.plotSeg1]:[],...i.plotSeg2?[i.plotSeg2]:[]].find(d=>d.instanceId===r):void 0};switch(e.type){case"SELECT_UNIT":{const r=n.playerIds.indexOf(e.playerId);return`${r>=0?`P${r+1}`:e.playerId} 选择机体 ${St(e.unitId)}`}case"SELECT_MAP":return`选择地图 ${e.mapId}`;case"CONFIRM_SETUP":return"确认设置，开始对局";case"SET_SPAWN_POSITION":return`${t(e.playerId)} 设置出生点 (${e.position.row},${e.position.col})`;case"SET_SPAWN_FACING":return`${t(e.playerId)} 设置初始朝向 ${sr[e.facing]??e.facing}`;case"START_PLOTTING":return"战前准备结束，进入布局阶段";case"DRAW_CARDS":return`${t(e.playerId)} 抽牌 ${e.count} 张`;case"PLOT_CARD":{const r=a(e.instanceId,e.playerId);return`${t(e.playerId)} 布局段落${e.seg}: ${r?jo(r.defId):e.instanceId}`}case"CONFIRM_PLOT":return`${t(e.playerId)} 确认布局完成`;case"ADVANCE_PLOT_STEP":return"[系统] 布局步骤推进";case"MOVE_UNIT":{const r=n.players[e.playerId],s=r?`(${r.position.row},${r.position.col})`:"(?,?)",i=`(${e.to.row},${e.to.col})`,l=e.finalFacing?` 结束朝向→${sr[e.finalFacing]??e.finalFacing}`:"",d=e.path?` 路径[${e.path.map(u=>`(${u.row},${u.col})`).join("→")}]`:"";return`${t(e.playerId)} 普通移动 ${s}→${i}${l}${d}`}case"ADJUST_FACING":return`${t(e.playerId)} 调整朝向→${sr[e.facing]??e.facing}`;case"RESOLVE_RANGED":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动射击`;case"RESOLVE_MELEE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动近战`;case"RESOLVE_CHARGE":return`${t(e.attackerId)} 沿正面方向发动突击，目标=${t(e.targetId)}`;case"PLACE_MINE":{const s=(e.placements??(e.to?[{position:e.to,kind:"real"}]:[])).map(i=>`(${i.position.row},${i.position.col})`).join("、");return`${t(e.playerId)} 部署隐藏机雷指示物：${s}`}case"SELECT_DAMAGE_CARD":{const r=a(e.instanceId,e.playerId);return`${t(e.playerId)} 选择摧毁: ${r?jo(r.defId):e.instanceId}`}case"CONFIRM_DAMAGE_SELECTION":return`${t(e.playerId)} 确认伤害结算`;case"SKIP_ACTION":return"[系统] 跳过行动";case"ADVANCE_TIMING":return"[系统] 推进时序";case"ADVANCE_PHASE":return"[系统] 推进阶段";case"MELEE_SENSOR_MOVE":return`${t(e.playerId)} 近战传感器移动至 (${e.to.row},${e.to.col})`;case"CONFIRM_ARMOR_CHOICE":{const r=e.selectedInstanceIds.map(s=>{const i=a(s,e.playerId);return i?jo(i.defId):s});return`${t(e.playerId)} 确认装甲选择${r.length?"："+r.join("、"):"（不使用装甲）"}`}case"RESET_GAME":return"[系统] 重置游戏";case"LOAD_GAME":return"[系统] 加载存档";case"ADD_LOG":return`[系统] ${e.message}`;default:return`[未知] ${e.type}`}}function Yx(e,n){const t=[],a="═".repeat(72),r="─".repeat(72);t.push(a),t.push("EMBRYO MACHINE — 对局分析日志"),t.push(a),t.push(`生成时间: ${new Date().toISOString()}`),t.push(`地图: ${e.map.nameCn} (${e.map.id}) ${e.map.width}×${e.map.height}`),t.push(`P1: ${St(e.players.player1.unitId)} (${e.players.player1.unitId})`),t.push(`P2: ${St(e.players.player2.unitId)} (${e.players.player2.unitId})`),t.push(`总操作数: ${n.length}`),t.push(""),t.push("[地图地形]");const s={plain:"平",forest:"森",rubble:"瓦",water:"水",highland:"高",sand:"砂"};let i="     ";for(let x=0;x<e.map.width;x++)i+=`  ${String(x).padStart(2)} `;t.push(i);for(let x=0;x<e.map.height;x++){let p=`  ${String(x).padStart(2)} `;for(let _=0;_<e.map.width;_++){const y=e.map.cells[x][_],b=s[y.terrain]??"?",v=y.elevation>0?String(y.elevation):" ";p+=` ${b}${v} `}t.push(p)}t.push("  地形: 平=平地 森=森林 瓦=瓦砾 水=水域 高=高地 砂=砂地  数字=海拔"),t.push(""),t.push("[初始状态]"),t.push(`  阶段: ${ro[e.phase]??e.phase}  回合: ${e.roundNumber}`),t.push(so(e.players.player1,"P1")),t.push(so(e.players.player2,"P2")),e.mines.length>0&&t.push(`  隐藏指示物: ${e.mines.map(x=>`(${x.position.row},${x.position.col}) 所有者=${x.ownerId} 伤害=${x.damage}`).join("; ")}`),t.push("");let l=e,d=l.roundNumber,u=l.phase,f=l.currentTiming,m=0,g=l.log.length;for(let x=0;x<n.length;x++){const p=n[x],_=l;l=gn(l,p),m++,l.roundNumber!==d&&(t.push(""),t.push(a),t.push(`══ 第 ${l.roundNumber} 回合 ══`),t.push(a),d=l.roundNumber),l.phase!==u&&(t.push(""),t.push(r),t.push(`── ${ro[l.phase]??l.phase} ──`),t.push(r),u=l.phase,f=l.currentTiming),l.currentTiming!==f&&l.currentTiming&&(t.push(""),t.push(`  ◆ ${Ux[l.currentTiming]??l.currentTiming}  先攻顺序: [${l.turnOrder.join(", ")}]`),f=l.currentTiming);const y=Zx(p,_);t.push(`  #${String(m).padStart(4,"0")}  ${y}`);const b=l.log.slice(g);for(const C of b)t.push(`         │ ${C}`);if(g=l.log.length,l.pendingDamage&&!_.pendingDamage){const C=l.pendingDamage;t.push(`         ├─ [交互伤害] 目标=${C.targetId} 剩余=${C.remaining} 来源=${C.source}${C.attackerId?` 攻方=${C.attackerId}(瞄准指定)`:""}`)}const v=l.phase!==_.phase,I=l.roundNumber!==_.roundNumber,S=l.phase==="game_over"&&_.phase!=="game_over";(v||I||S)&&(t.push(""),t.push(`  [状态快照 #${m} | ${ro[l.phase]??l.phase}]`),t.push(so(l.players.player1,"P1")),t.push(so(l.players.player2,"P2")),l.mines.length>0&&t.push(`  隐藏指示物: ${l.mines.map(C=>`(${C.position.row},${C.position.col}) 所有者=${C.ownerId} 伤害=${C.damage}`).join("; ")}`))}t.push(""),t.push(a),t.push("══ 对局总结 ══"),t.push(a);const h=l;if(h.phase==="game_over"){const x=new Set;for(const p of h.playerIds)h.players[p].isDefeated||x.add(h.teams[p]);if(x.size===0)t.push("结果: 平局（所有队伍同时全灭）");else{const p=[...x][0],_=h.playerIds.filter(y=>h.teams[y]===p).map(y=>St(h.players[y].unitId)).join("、");t.push(`结果: 队伍${p+1}（${_}）获胜`)}}else t.push(`结果: 对局未结束 (当前阶段: ${ro[h.phase]??h.phase})`);t.push(`最终回合: ${h.roundNumber}`),t.push(`总操作数: ${n.length}`);for(const x of h.playerIds){const p=h.players[x],y=`P${h.playerIds.indexOf(x)+1}`,b=Xx(p);t.push(""),t.push(`${y}[${St(p.unitId)}] 最终状态:`),t.push(`  存活卡牌: ${b}  破坏: ${p.destroyedCards.length}  败北: ${p.isDefeated}`),t.push(`  位置: (${p.position.row},${p.position.col}) 朝向: ${sr[p.facing]}`)}t.push(""),t.push(r),t.push("[完整引擎日志]"),t.push(r);for(let x=0;x<h.log.length;x++)t.push(`  ${String(x+1).padStart(4,"0")}  ${h.log[x]}`);return t.push(""),t.push(a),t.push("日志结束"),t.push(a),t.join(`
`)}function Xx(e){const n=t=>t.filter(a=>!a.destroyed).length;return n(e.deck)+n(e.hand)+n(e.auxiliary)+e.discard.length+(e.plotSeg1&&!e.plotSeg1.destroyed?1:0)+(e.plotSeg2&&!e.plotSeg2.destroyed?1:0)}const Ls=k.createContext(null);function Hm({children:e}){const[n,t]=k.useReducer(gn,void 0,Bm),[a,r]=k.useState(wx),[s,i]=k.useState(!0),[l,d]=k.useState(!1),u=k.useRef(n);u.current=n;const f=k.useRef([]),m=k.useRef(null),g=k.useRef(-1),h=k.useCallback(y=>{const b=u.current;if(y.type==="RESET_GAME"||y.type==="LOAD_GAME"){f.current=[],m.current=null,g.current=-1,t(y);return}if(y.type==="CONFIRM_SETUP"){const I=gn(b,y);f.current=[],m.current=I,t(y);return}f.current.push(y);const v=gn(b,y);if(t(y),s&&b.phase!=="draw"&&v.phase==="draw"&&v.roundNumber!==g.current){g.current=v.roundNumber;try{Sc("auto",v,a,!0)}catch{}}},[a,s]),x=bx(h,u),p=k.useCallback(y=>te(y),[]),_=k.useCallback(()=>m.current?{initialState:m.current,actions:[...f.current]}:null,[]);return o.jsx(Ls.Provider,{value:{state:n,dispatch:x,rawDispatch:h,getCard:p,aiConfig:a,setAIConfig:r,getReplayData:_,autoSaveEnabled:s,setAutoSaveEnabled:i,exposureMode:l,setExposureMode:d},children:e})}function Me(){const e=k.useContext(Ls);if(!e)throw new Error("useGame must be used inside <GameProvider>");return e}function Vr(){return Me().state}const Qx=[2,3,4,6,8];function qx(e){const n=[];for(let t=2;t<=e;t++)e%t===0&&n.push(t);return n}function eb({onNext:e,onBack:n,playerCount:t,setPlayerCount:a,teamCount:r,setTeamCount:s}){const{dispatch:i,rawDispatch:l}=Me(),d=k.useMemo(()=>Sh(),[]),[u,f]=k.useState(d[0].id),m=k.useMemo(()=>qx(t),[t]),g=k.useMemo(()=>d.filter(p=>{if(p.maxPlayers<t||p.maxTeams<r)return!1;const _=Math.ceil(t/r);for(let y=0;y<r;y++){const b=p.startZones[y];if(!b||b.length<_)return!1}return!0}),[t,r,d]),h=k.useMemo(()=>d.find(p=>p.id===u)??d[0],[u,d]);k.useEffect(()=>{l({type:"RESET_GAME",playerCount:t,teamCount:r});const p=Math.ceil(t/r),_=d.filter(y=>{if(y.maxPlayers<t||y.maxTeams<r)return!1;for(let b=0;b<r;b++){const v=y.startZones[b];if(!v||v.length<p)return!1}return!0});_.length>0&&(f(_[0].id),i({type:"SELECT_MAP",mapId:_[0].id}))},[t,r]),k.useEffect(()=>{m.includes(r)||s(m[0])},[m,r,s]),k.useEffect(()=>{g.length>0&&!g.find(p=>p.id===u)&&x(g[0].id)},[g]);function x(p){p!==u&&(f(p),i({type:"SELECT_MAP",mapId:p}))}return o.jsxs("div",{className:"msel-screen",children:[o.jsx("button",{className:"msel-back-btn",onClick:n,children:"← 返回主菜单"}),o.jsx("h1",{className:"msel-title",children:"Embryo Machine"}),o.jsx("p",{className:"msel-subtitle",children:"选择地图"}),o.jsxs("section",{className:"msel-section",children:[o.jsx("h2",{children:"游戏配置"}),o.jsxs("div",{className:"msel-config-row",children:[o.jsxs("label",{className:"msel-config-label",children:["玩家人数",o.jsx("select",{className:"msel-config-select",value:t,onChange:p=>a(Number(p.target.value)),children:Qx.map(p=>o.jsxs("option",{value:p,children:[p,"人"]},p))})]}),o.jsxs("label",{className:"msel-config-label",children:["队伍数量",o.jsx("select",{className:"msel-config-select",value:r,onChange:p=>s(Number(p.target.value)),children:m.map(p=>o.jsxs("option",{value:p,children:[p,"队 (",t/p,"人/队)"]},p))})]})]})]}),o.jsxs("section",{className:"msel-section",children:[o.jsx("h2",{children:"地图"}),o.jsx("div",{className:"msel-map-list",children:g.map(p=>o.jsxs("button",{className:`msel-map-btn ${u===p.id?"msel-map-btn--active":""}`,onClick:()=>x(p.id),children:[p.nameCn," ",p.id.startsWith("custom_")?"✦":"",o.jsxs("span",{className:"msel-map-btn__size",children:[p.height,"×",p.width," · ≤",p.maxPlayers,"人"]})]},p.id))})]}),o.jsxs("section",{className:"msel-preview",children:[o.jsx("div",{className:"msel-preview__grid-wrap",children:o.jsx("div",{className:"msel-preview__grid",style:{display:"grid",gridTemplateColumns:`repeat(${h.width}, 1fr)`,gap:"1px"},children:h.cells.flat().map((p,_)=>{const y=Math.floor(_/h.width),b=_%h.width,v=Object.values(h.startZones).some(I=>I.some(S=>S.row===y&&S.col===b));return o.jsx("div",{className:`msel-cell msel-cell--${p.terrain}${p.elevation>0?" msel-cell--elev":""}${v?" msel-cell--start":""}`,title:`${p.terrain}${p.elevation>0?` +${p.elevation}`:""}${v?" (起始点)":""}`},_)})})}),o.jsxs("div",{className:"msel-preview__info",children:[o.jsx("span",{className:"msel-preview__name",children:h.nameCn}),o.jsxs("span",{className:"msel-preview__meta",children:[h.height,"×",h.width," · 最多",h.maxPlayers,"人 · ",h.maxTeams,"队"]}),o.jsxs("div",{className:"msel-preview__legend",children:[o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--plain"}),"平地"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--sand"}),"沙地"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--rubble"}),"废墟"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--forest"}),"森林"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--water"}),"水域"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--highland"}),"高地"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--start"}),"起点"]})]})]})]}),o.jsx("button",{className:"msel-next-btn",onClick:e,children:"下一步 →"}),o.jsx("style",{children:nb})]})}const nb=`
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
`,tb={gameTitle:"Embryo Machine",statMovement:"移动力",statEvasion:"回避值",statAssault:"突击",statAssaultDef:"被突击",statInitiative:"先制值"},Mn=[["#00f0ff","#00c8e0","#40e8ff","#80f0ff"],["#ff00c8","#ff44aa","#e040d0","#ff77dd"],["#00cc88","#44dd66","#00aa6e","#66eebb"],["#ff8800","#ffaa33","#e07000","#ffcc66"],["#6688ff","#4466ee","#88aaff","#3355dd"],["#cc44ff","#aa22dd","#dd77ff","#bb00ee"],["#44dddd","#22bbbb","#66eeee","#00ccbb"],["#ff4466","#dd2244","#ff6688","#ee0033"]];function Sa(e,n){const t=e.teams[n]??0,a=Mn[t%Mn.length],s=e.playerIds.filter(i=>e.teams[i]===t).indexOf(n);return a[Math.max(0,s)%a.length]}const Ut=tb;function ab({onNext:e,onBack:n,autoFill:t=!1}){const{state:a,dispatch:r,setAIConfig:s,setExposureMode:i}=Me(),[l,d]=k.useState({}),[u,f]=k.useState({}),[m,g]=k.useState({}),h=a.playerIds.length,x=a.teamCount,p=k.useMemo(()=>ga.slice(0,h),[h]);function _(E,J){r({type:"SELECT_UNIT",playerId:E,unitId:J}),g(D=>({...D,[E]:!0}))}function y(E,J){d(D=>({...D,[E]:J}))}function b(E,J){f(D=>({...D,[E]:J}))}const v=p.map(E=>{var J;return((J=a.players[E])==null?void 0:J.unitId)??""}),I=v.every(E=>E!==""),S=new Set(v.filter(E=>E!=="")).size===v.filter(E=>E!=="").length,C=p.filter(E=>m[E]).map(E=>{var J;return((J=a.players[E])==null?void 0:J.unitId)??""}).filter(E=>E!==""),w=new Set(C).size===C.length,N=t?w:I&&S,z={};for(let E=0;E<p.length;E++){const J=E%x;z[J]||(z[J]=[]),z[J].push(p[E])}return o.jsxs("div",{className:"setup-screen",children:[o.jsx("button",{className:"setup-back-btn",onClick:n,children:"← 上一步"}),o.jsx("h1",{className:"setup-title",children:Ut.gameTitle}),o.jsx("p",{className:"setup-subtitle",children:"选择机体"}),o.jsx("div",{className:"setup-teams",children:Object.entries(z).map(([E,J])=>o.jsxs("div",{className:"setup-team",children:[o.jsxs("h3",{className:"team-header",style:{color:Mn[Number(E)%Mn.length][0]},children:["队伍 ",Number(E)+1]}),o.jsx("div",{className:"setup-players",children:J.map((D,$)=>{var A;const L=ga.indexOf(D),K=Mn[Number(E)%Mn.length],M=K[$%K.length],V=((A=a.players[D])==null?void 0:A.unitId)??"",R=v.filter((B,P)=>P!==p.indexOf(D)&&B);return o.jsxs("div",{className:"setup-player-col",children:[o.jsx(rb,{label:`P${L+1}`,selectedUnit:V,blockedUnits:R,accentColor:M,onSelect:B=>_(D,B)}),o.jsxs("div",{className:"ai-control",children:[o.jsxs("label",{className:"ai-control__label",children:[o.jsx("input",{type:"checkbox",checked:l[D]??!1,onChange:B=>y(D,B.target.checked)}),"AI控制"]}),l[D]&&o.jsxs("select",{className:"ai-control__difficulty",value:u[D]??"hard",onChange:B=>b(D,B.target.value),children:[o.jsx("option",{value:"easy",children:"简单"}),o.jsx("option",{value:"hard",children:"困难"})]})]})]},D)})})]},E))}),o.jsx("button",{className:"start-btn",onClick:()=>{const E=new Set(p.filter(A=>m[A]).map(A=>{var B;return((B=a.players[A])==null?void 0:B.unitId)??""}).filter(A=>A!=="")),D=[...q.map(A=>A.id).filter(A=>!E.has(A))];for(let A=D.length-1;A>0;A--){const B=Math.floor(Math.random()*(A+1));[D[A],D[B]]=[D[B],D[A]]}const $={...l},L={...u};let K=0;for(const A of p)t&&!m[A]&&K<D.length&&(r({type:"SELECT_UNIT",playerId:A,unitId:D[K]}),K++,$[A]=!0,L[A]="hard");const M={},V={};for(const A of p)M[A]=$[A]??!1,V[A]=L[A]??"hard";s({player1:M.player1??!1,player2:M.player2??!1,player1Difficulty:V.player1??"hard",player2Difficulty:V.player2??"hard",playerAI:M,playerDifficulty:V}),p.every(A=>M[A])&&i(!0),e()},disabled:!N,title:N?"":"请为所有玩家分别选择不同的机体",children:"下一步 →"}),!N&&o.jsx("p",{className:"setup-hint",children:t?"手动选择的机体之间不可重复":I?"每位玩家须选择不同的机体":"请为所有玩家各选择一台机体"}),o.jsx("style",{children:ib})]})}function rb({label:e,selectedUnit:n,blockedUnits:t,accentColor:a,onSelect:r}){return o.jsxs("div",{className:"unit-picker",children:[o.jsx("h2",{className:"unit-picker__title",style:{color:a},children:e}),o.jsx("div",{className:"unit-grid",children:q.map(s=>{const i=t.includes(s.id);return o.jsx(ob,{unit:s,isSelected:s.id===n,isBlocked:i,accentColor:a,onSelect:()=>!i&&r(s.id)},s.id)})}),n&&o.jsx(sb,{unit:q.find(s=>s.id===n),accentColor:a})]})}function ob({unit:e,isSelected:n,isBlocked:t,accentColor:a,onSelect:r}){return o.jsxs("button",{className:`unit-card ${n?"unit-card--selected":""} ${t?"unit-card--blocked":""}`,onClick:r,disabled:t,title:t?"该机体已被其他玩家选择":e.nameCn,style:n?{borderColor:a,boxShadow:`0 0 8px ${a}55`}:{},children:[o.jsx("img",{src:`/assets/tokens/${e.tokenId}`,alt:e.nameCn,className:"unit-card__token",onError:s=>{s.target.style.opacity="0.3"}}),o.jsx("span",{className:"unit-card__name",children:e.nameCn}),o.jsxs("span",{className:"unit-card__init",children:["先制 ",e.initiative]})]})}function sb({unit:e,accentColor:n}){return o.jsxs("div",{className:"unit-stats",children:[o.jsxs("div",{className:"unit-stats__name",children:[e.nameCn," ",o.jsxs("small",{children:["(",e.nameJa,")"]})]}),o.jsx("div",{className:"unit-stats__type",children:e.type}),o.jsxs("div",{className:"unit-stats__grid",children:[o.jsx(Fa,{label:Ut.statMovement,value:e.movement,color:n}),o.jsx(Fa,{label:Ut.statEvasion,value:e.evasion,color:n}),o.jsx(Fa,{label:Ut.statAssault,value:e.assault,color:n}),o.jsx(Fa,{label:Ut.statAssaultDef,value:e.assaultDef,color:n}),o.jsx(Fa,{label:Ut.statInitiative,value:e.initiative,color:n})]})]})}function Fa({label:e,value:n,color:t}){return o.jsxs("div",{className:"stat",children:[o.jsx("span",{className:"stat__label",children:e}),o.jsx("span",{className:"stat__value",style:{color:t},children:n})]})}const ib=`
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
`,Yd=768;function Os(){const[e,n]=k.useState(()=>typeof window<"u"&&window.innerWidth<=Yd);return k.useEffect(()=>{const t=window.matchMedia(`(max-width: ${Yd}px)`),a=r=>n(r.matches);return t.addEventListener("change",a),n(t.matches),()=>t.removeEventListener("change",a)},[]),e}const Pn=18;function we({id:e,title:n,initialPos:t,width:a=300,height:r,minHeight:s=80,children:i,zIndex:l=10,defaultMinimized:d=!1,onFocus:u,siblingRects:f=[]}){const m=Os(),[g,h]=k.useState(t),[x,p]=k.useState(d),_=k.useRef(null),y=k.useRef(!1);k.useEffect(()=>{y.current||(y.current=!0,h(t))},[]);const b=k.useCallback(v=>{if(m||v.button!==0)return;v.preventDefault(),u==null||u(e);const I=v.clientX-g.x,S=v.clientY-g.y,C=N=>{var M;let z=N.clientX-I,E=N.clientY-S;const J=window.innerWidth,D=window.innerHeight,$=(M=_.current)==null?void 0:M.getBoundingClientRect(),L=($==null?void 0:$.width)??a,K=($==null?void 0:$.height)??40;z<Pn&&(z=0),E<Pn&&(E=0),z+L>J-Pn&&(z=J-L),E+K>D-Pn&&(E=D-K);for(const V of f)Math.abs(z+L-V.left)<Pn&&(z=V.left-L),Math.abs(z-V.right)<Pn&&(z=V.right),Math.abs(E+K-V.top)<Pn&&(E=V.top-K),Math.abs(E-V.bottom)<Pn&&(E=V.bottom),Math.abs(E-V.top)<Pn&&(E=V.top);h({x:Math.max(0,z),y:Math.max(0,E)})},w=()=>{document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",C),document.addEventListener("mouseup",w)},[e,g,u,f,a,m]);return m?o.jsxs("div",{ref:_,className:`dp dp--mobile ${x?"dp--min":""}`,onClick:()=>u==null?void 0:u(e),children:[o.jsxs("div",{className:"dp__bar dp__bar--mobile",onClick:()=>p(v=>!v),children:[o.jsx("span",{className:"dp__title",children:n}),o.jsx("span",{className:"dp__min-btn dp__min-btn--mobile",children:x?"▼":"▲"})]}),!x&&o.jsx("div",{className:"dp__body dp__body--mobile",children:i}),o.jsx("style",{children:Xd})]}):o.jsxs("div",{ref:_,className:`dp ${x?"dp--min":""}`,style:{left:g.x,top:g.y,width:a,height:x?void 0:r,minHeight:x?0:s,zIndex:l},onMouseDown:()=>u==null?void 0:u(e),children:[o.jsxs("div",{className:"dp__bar",onMouseDown:b,children:[o.jsx("span",{className:"dp__title",children:n}),o.jsx("button",{className:"dp__min-btn",onMouseDown:v=>v.stopPropagation(),onClick:()=>p(v=>!v),title:x?"展开":"最小化",children:x?"▢":"▬"})]}),!x&&o.jsx("div",{className:"dp__body",children:i}),o.jsx("style",{children:Xd})]})}const Xd=`
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
`,ia=48,lb=[{facing:"N",label:"↑N",title:"朝北"},{facing:"S",label:"↓S",title:"朝南"},{facing:"E",label:"→E",title:"朝东"},{facing:"W",label:"←W",title:"朝西"}],Qd=.25,cb=2,qd=.1;function db({onBack:e}){const{state:n,dispatch:t}=Me(),a=Ye.find(P=>P.id===n.map.id)??n.map,r=n.playerIds,s=a.width,i=a.height,l=k.useRef(null),[d,u]=k.useState({x:0,y:0,scale:1}),f=k.useRef(null),m=k.useRef(!1);k.useEffect(()=>{const P=l.current;if(!P)return;const F=P.clientWidth,G=P.clientHeight,X=s*ia,Q=i*ia;if(!F||!G)return;const se=Math.min(F/X,G/Q),le=Math.max(Qd,Math.min(1.2,se)),de=(F-X*le)/2,vn=(G-Q*le)/2;u({x:de,y:vn,scale:le})},[s,i]),k.useEffect(()=>{const P=l.current;if(!P)return;const F=G=>{G.preventDefault();const X=G.deltaY<0?qd:-qd;u(Q=>({...Q,scale:Math.min(cb,Math.max(Qd,Q.scale+X))}))};return P.addEventListener("wheel",F,{passive:!1}),()=>P.removeEventListener("wheel",F)},[]);const g=k.useCallback(P=>{P.button===0&&(f.current={startX:P.clientX,startY:P.clientY,origX:d.x,origY:d.y},m.current=!1)},[d.x,d.y]),h=k.useCallback(P=>{if(!f.current)return;const F=P.clientX-f.current.startX,G=P.clientY-f.current.startY;!m.current&&Math.sqrt(F*F+G*G)>5&&(m.current=!0),m.current&&u(X=>({...X,x:f.current.origX+F,y:f.current.origY+G}))},[]),x=k.useCallback(()=>{f.current=null,m.current=!1},[]),p=k.useMemo(()=>Object.keys(a.startZones).map(Number).sort((P,F)=>P-F),[a]),[_,y]=k.useState(()=>{const P={};for(let F=0;F<n.teamCount;F++)P[F]=F;return P});k.useEffect(()=>{const P={};for(let F=0;F<n.teamCount;F++)P[F]=F;y(P)},[a.id,n.teamCount]);function b(P,F){y(G=>{const X=Object.entries(G).find(([,se])=>se===F),Q={...G,[P]:F};return X&&(Q[Number(X[0])]=G[P]),Q})}const v=k.useMemo(()=>{const P=new Map;for(let F=0;F<n.teamCount;F++){const G=_[F]??F,X=a.startZones[G];if(X)for(const Q of X){const se=`${Q.row},${Q.col}`,le=P.get(se)??[];le.push(F),P.set(se,le)}}return P},[a,n.teamCount,_]),I=k.useMemo(()=>{const P={};for(const F of r){const G=n.teams[F];P[G]||(P[G]=[]),P[G].push(F)}return P},[r,n.teams]),[S,C]=k.useState(r[0]),[w,N]=k.useState(""),z=k.useMemo(()=>{for(const P of r){const F=n.players[P];if(!F)return!1;const G=n.teams[P],X=_[G]??G,Q=a.startZones[X];if(!Q||!Q.some(le=>le.row===F.position.row&&le.col===F.position.col))return!1}return!0},[r,n.players,n.teams,_,a]);function E(P,F){t({type:"SET_SPAWN_POSITION",playerId:P,position:F})}function J(P,F){t({type:"SET_SPAWN_FACING",playerId:P,facing:F})}function D(){z&&t({type:"CONFIRM_SETUP"})}function $(P){return Sa(n,P)}function L(P){var G;const F=(G=I[P])==null?void 0:G[0];return F?$(F):Mn[P%Mn.length][0]}const K=k.useMemo(()=>{const P=new Map;for(const F of r){const G=n.players[F];if(!G)continue;const X=q.find(le=>le.id===G.unitId);if(!X)continue;const Q=`${G.position.row},${G.position.col}`,se=P.get(Q)??[];se.push({pid:F,color:$(F),tokenId:X.tokenId,name:X.nameCn}),P.set(Q,se)}return P},[r,n.players]),{x:M,y:V,scale:R}=d,A=220,B=k.useMemo(()=>{const P={},se=Math.floor((window.innerHeight-56-60)/192);return r.forEach((le,de)=>{const vn=Math.floor(de/se),zn=de%se;P[le]={x:window.innerWidth-(A+16)*(vn+1),y:56+zn*192}}),P},[r]);return o.jsxs("div",{className:"ssm__screen",children:[o.jsxs("div",{className:"ssm__topbar",children:[o.jsx("button",{className:"ssm__back-btn",onClick:e,children:"← 返回"}),o.jsx("span",{className:"ssm__title",children:"选择出击位置"}),o.jsxs("span",{className:"ssm__map-name",children:[a.nameCn," (",i,"×",s,")"]}),o.jsx("span",{style:{flex:1}}),o.jsx("button",{className:`ssm__start-btn${z?"":" ssm__start-btn--disabled"}`,onClick:D,disabled:!z,title:z?"开始战斗":"所有玩家必须先选择出击位置",children:"战斗开始 ▶"})]}),o.jsx("div",{className:"ssm__viewport",ref:l,onMouseDown:g,onMouseMove:h,onMouseUp:x,onMouseLeave:x,children:o.jsx("div",{className:"ssm__map-inner",style:{transform:`translate(${M}px, ${V}px) scale(${R})`,transformOrigin:"top left",display:"grid",gridTemplateColumns:`repeat(${s}, ${ia}px)`,gridTemplateRows:`repeat(${i}, ${ia}px)`},children:a.cells.flatMap((P,F)=>P.map((G,X)=>{const Q=bc(G),se=`${F},${X}`,le=v.get(se)??[],de=K.get(se)??[],vn=le.length>0,zn=le.length>0?L(le[0]):"",$a=n.teams[S],Kt=vn&&le.includes($a);let Zn="ssm__cell";vn&&(Zn+=" ssm__cell--zone"),Kt&&(Zn+=" ssm__cell--placeable"),de.length>0&&(Zn+=" ssm__cell--selected");function re(ee){m.current||(ee.stopPropagation(),Kt&&E(S,{row:F,col:X}))}return o.jsxs("div",{className:Zn,style:{backgroundImage:`url("${Q}")`,...vn?{borderColor:zn,boxShadow:de.length>0?`inset 0 0 10px ${zn}66, 0 0 6px ${zn}44`:void 0}:{}},onClick:Kt?re:void 0,children:[de.length===1&&o.jsx("div",{className:"ssm__token",children:o.jsx("img",{src:`/assets/tokens/${de[0].tokenId}`,alt:de[0].name,style:{boxShadow:`0 0 6px ${de[0].color}`},onError:ee=>{ee.target.style.opacity="0.3"}})}),de.length>1&&o.jsx("div",{className:"ssm__token ssm__token--multi",children:de.map(ee=>o.jsx("img",{src:`/assets/tokens/${ee.tokenId}`,alt:ee.name,className:"ssm__token-img-sm",style:{boxShadow:`0 0 4px ${ee.color}`},onError:Be=>{Be.target.style.opacity="0.3"}},ee.pid))})]},se)}))})}),r.map((P,F)=>{var re;const G=n.players[P],X=q.find(ee=>ee.id===(G==null?void 0:G.unitId)),Q=$(P),se=w===P,le=S===P,de=n.teams[P],vn=((re=I[de])==null?void 0:re[0])===P,zn=_[de]??de,$a=_[de]??de,Zn=(a.startZones[$a]??[]).some(ee=>ee.row===G.position.row&&ee.col===G.position.col);return o.jsx(we,{id:`spawn-${P}`,title:`P${F+1} ${(X==null?void 0:X.nameCn)??"—"}`,initialPos:B[P]??{x:100,y:100},width:A,minHeight:60,zIndex:se?50:10+F,onFocus:()=>{N(P),C(P)},children:o.jsxs("div",{className:`ssm__player-card${le?" ssm__player-card--active":""}`,style:{borderTop:`2px solid ${Q}`},onClick:()=>C(P),children:[o.jsxs("div",{className:"ssm__player-label",style:{color:Q},children:["P",F+1," ",le?"◄ 放置中":""," ",Zn?"✓":""]}),vn&&o.jsx("div",{className:"ssm__zone-select",children:o.jsxs("label",{children:["出击区域:",o.jsx("select",{value:zn,onChange:ee=>b(de,Number(ee.target.value)),onClick:ee=>ee.stopPropagation(),children:p.slice(0,a.maxTeams).map(ee=>o.jsxs("option",{value:ee,children:["区域 ",ee+1]},ee))})]})}),o.jsx("div",{className:"ssm__unit-name",children:(X==null?void 0:X.nameCn)??"—"}),o.jsxs("div",{className:"ssm__pos-display",children:["格 (",G.position.row,", ",G.position.col,")"]}),o.jsx("div",{className:"ssm__facing-grid",children:lb.map(({facing:ee,label:Be,title:Ve})=>{const je=G.facing===ee;return o.jsx("button",{className:`ssm__facing-btn${je?" ssm__facing-btn--active":""}`,style:je?{borderColor:Q,color:Q}:void 0,title:Ve,onClick:()=>J(P,ee),children:Be},ee)})})]})},P)}),o.jsx("style",{children:ub})]})}const ub=`
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
  width: ${ia}px;
  height: ${ia}px;
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
`;function pb({onStart:e,onOnlinePlay:n,onViewRules:t,onViewData:a,onLoadGame:r,onReplay:s,onMapEditor:i,onSettings:l}){return o.jsxs("div",{className:"hs-screen",children:[o.jsxs("div",{className:"hs-center",children:[o.jsx("h1",{className:"hs-title",children:"Embryo Machine"}),o.jsx("p",{className:"hs-subtitle",children:"战棋机甲对战游戏"}),o.jsx("div",{className:"hs-divider"}),o.jsx("button",{className:"hs-btn hs-btn--primary",onClick:e,children:"▶ 开始游戏"}),o.jsx("button",{className:"hs-btn hs-btn--online",onClick:n,children:"联机对战"}),o.jsx("button",{className:"hs-btn hs-btn--secondary",onClick:r,children:"📂 加载存档"}),o.jsx("button",{className:"hs-btn hs-btn--secondary",onClick:s,children:"🎬 回放录像"}),o.jsx("div",{className:"hs-divider hs-divider--sm"}),o.jsxs("div",{className:"hs-links",children:[o.jsx("button",{className:"hs-link-btn",onClick:l,children:"⚙ 设置"}),o.jsx("button",{className:"hs-link-btn",onClick:i,children:"🗺️ 地图编辑器"}),o.jsx("button",{className:"hs-link-btn",onClick:t,children:"📖 游戏规则"}),o.jsx("button",{className:"hs-link-btn",onClick:a,children:"📊 游戏资料"})]})]}),o.jsx("style",{children:mb})]})}const mb=`
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
`;function fb({onBack:e,soundEnabled:n,onToggleSound:t,soundVolume:a,onVolumeChange:r,exposureMode:s,onToggleExposure:i,autoFill:l,onToggleAutoFill:d,onCacheAssets:u}){return o.jsxs("div",{className:"set-screen",children:[o.jsxs("div",{className:"set-center",children:[o.jsxs("div",{className:"set-header",children:[o.jsx("button",{className:"set-back",onClick:e,children:"← 返回"}),o.jsx("h1",{className:"set-title",children:"设置"})]}),o.jsx("div",{className:"set-divider"}),o.jsxs("div",{className:"set-section",children:[o.jsx("h2",{className:"set-section__title",children:"音效设置"}),o.jsxs("label",{className:"set-toggle",onClick:t,children:[o.jsx("span",{className:`set-toggle__switch${n?" set-toggle__switch--on":""}`,children:o.jsx("span",{className:"set-toggle__knob"})}),o.jsx("span",{className:"set-toggle__label",children:"音效"}),o.jsx("span",{className:"set-toggle__hint",children:n?"已开启":"关闭"})]}),n&&o.jsxs("div",{className:"set-slider-row",children:[o.jsx("span",{className:"set-slider-row__label",children:"音量"}),o.jsx("input",{className:"set-slider",type:"range",min:0,max:100,value:Math.round(a*100),onChange:f=>r(Number(f.target.value)/100)}),o.jsxs("span",{className:"set-slider-row__value",children:[Math.round(a*100),"%"]})]})]}),o.jsx("div",{className:"set-divider set-divider--sm"}),o.jsxs("div",{className:"set-section",children:[o.jsx("h2",{className:"set-section__title",children:"游戏设置"}),o.jsxs("label",{className:"set-toggle",onClick:i,children:[o.jsx("span",{className:`set-toggle__switch${s?" set-toggle__switch--on":""}`,children:o.jsx("span",{className:"set-toggle__knob"})}),o.jsx("span",{className:"set-toggle__label",children:"暴露模式"}),o.jsx("span",{className:"set-toggle__hint",children:s?"已开启：所有隐藏卡牌将显示正面":"关闭"})]}),o.jsxs("label",{className:"set-toggle",onClick:d,children:[o.jsx("span",{className:`set-toggle__switch${l?" set-toggle__switch--on":""}`,children:o.jsx("span",{className:"set-toggle__knob"})}),o.jsx("span",{className:"set-toggle__label",children:"自动补位"}),o.jsx("span",{className:"set-toggle__hint",children:l?"已开启：空位自动随机选机由AI控制":"关闭"})]})]}),o.jsx("div",{className:"set-divider set-divider--sm"}),o.jsxs("div",{className:"set-section",children:[o.jsx("h2",{className:"set-section__title",children:"资源管理"}),o.jsx("button",{className:"set-btn set-btn--secondary",onClick:u,children:"缓存全部资源"}),o.jsx("p",{className:"set-hint",children:"一次性加载所有卡牌、地形等图片资源"})]})]}),o.jsx("style",{children:gb})]})}const gb=`
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
`;function hb({phase:e,loaded:n,total:t,onConfirm:a,onSkip:r}){const s=t>0?Math.round(n/t*100):0,i=n>=t&&t>0;return o.jsxs("div",{className:"apd-overlay",children:[o.jsxs("div",{className:"apd-box",children:[e==="asking"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"apd-icon",children:"⚠"}),o.jsx("h2",{className:"apd-title",children:"资源未完全缓存"}),o.jsxs("p",{className:"apd-body",children:["检测到游戏图像资源（卡牌、地形、地图等）尚未完全缓存。",o.jsx("br",{}),"首次加载游戏时可能出现图片闪烁或延迟。"]}),o.jsxs("p",{className:"apd-body apd-body--sub",children:["是否现在一次性加载全部资源？",o.jsx("br",{}),o.jsxs("span",{className:"apd-hint",children:["共约 ",t," 张图片，需要较短等待时间。"]})]}),o.jsxs("div",{className:"apd-actions",children:[o.jsx("button",{className:"apd-btn apd-btn--primary",onClick:a,children:"是，立即加载"}),o.jsx("button",{className:"apd-btn apd-btn--secondary",onClick:r,children:"否，边玩边加载"})]})]}),e==="loading"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"apd-icon",children:i?"✓":"↓"}),o.jsx("h2",{className:"apd-title",children:i?"加载完成":"正在加载资源…"}),o.jsx("div",{className:"apd-bar-track",children:o.jsx("div",{className:"apd-bar-fill",style:{width:`${s}%`}})}),o.jsxs("p",{className:"apd-progress-text",children:[n," / ",t,"  (",s,"%)"]}),i&&o.jsx("p",{className:"apd-body apd-body--sub",children:"资源已全部缓存，正在进入游戏…"})]})]}),o.jsx("style",{children:xb})]})}const xb=`
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
`,bb={"72ea91e355f9729a4f906f4a5981ccb94deb6c3a1eb4c9a4f255cbc86ac068a5":"/assets/cards/ag/ag-7-front.jpg",de64d1812f33cab1363e0191b2e1fe10766940cf72c1ae602a1537d6d59dee87:"/assets/ui/card-back.jpg",ca3a08c40eed141b502fe1a227ec29253a864fba0fda52930a7e55d1910a6698:"/assets/cards/ag/ag-3-front.jpg","00fec5279b30da9801db7c84419764909d349e1c210543de132af209cd3f0abd":"/assets/cards/ag/ag-4-front.jpg","608720fd8dcc5e7fe60d00f88b206e99c0688cfc20ef38f4eea05359b2ec0861":"/assets/cards/ag/ag-5-front.jpg",b0389d207312bbef32c2910744518f6f30c73796f27e573cfaec51c355862a97:"/assets/cards/ag/ag-6-front.jpg","29fa020388f199454a71e6673a19d76c4aafc4e8e8f34af0a9eeafe41c172391":"/assets/cards/ag/ag-8-front.jpg",c25abc7656b2d1eb27be27d09fecde25fd22427409e5afc79caf0ee09a8ff4f0:"/assets/cards/ag/ag-11-front.jpg","31e6d6800110b0ebfe8793074ba169f13b6fa02ea67f7e77739a4bf003670ba1":"/assets/cards/ag/ag-18-front.jpg","9762039c262e506e6bddc0449ed1ddc0449d1c6234afba1327ebfdb81a388e54":"/assets/cards/ag/ag-12-front.jpg",aa1286d4f7814991279a7aac4a75c0b194b8e7f9d6510fb8e63362939d04ec1e:"/assets/cards/ag/ag-14-front.jpg",dfe234f8d5372742a6ed4ab9f521f1ad9c693a228003aad19750c34aa7d1d49b:"/assets/cards/ag/ag-21-front.jpg","12e25c69082cbfe495f5dc49006c7c5aebc1f73574c59c39ffc5ed5b8b2fbc6d":"/assets/cards/ag/ag-17-front.jpg","9ba8361aa29742693bc83360c55e367632471dfea59493136210cfd09fd1aa48":"/assets/cards/ag/ag-19-front.jpg","67a686db8c4db82340e640db02b289fb998f14b79ede162eaffb1d2f5488a3a4":"/assets/cards/ag/ag-20-front.jpg",eb56b8c9f9b270690d535f55ac55c846dae5537649cec7021639211ff7f6cc22:"/assets/cards/ag_plus/ag_plus-2-front.jpg",e4c12ee3ba0ef3bd8c2ee9b1bb41e74c404f09b62dba8cb2e35faa2e520895e5:"/assets/cards/ag_plus/ag_plus-3-front.jpg","8f2248399528f6a051509d01cc0c78398afd381b7ad8f9915ab6381297026282":"/assets/cards/ag_plus/ag_plus-4-front.jpg",ebac68b5f2d7cf81a64094a12da6386a77e2434776de373d72ed8be4ba13159c:"/assets/cards/ag_plus/ag_plus-5-front.jpg","35999dd2727c1847d4a12d8061029cf3555bdbb7452b03c3978443401ac1022c":"/assets/cards/ar/ar-1-front.jpg","2f4a7328aaa21e26023208758042e122b483ca242c1b95ee4c64952eb7bb1dc3":"/assets/cards/ar/ar-2-front.jpg",c414ed84946840c69b6bdc4393af27f50d70a81b56a8c1849d1bfdaaa27531c1:"/assets/cards/ar/ar-4-front.jpg","9eca454c2c4f5cdb16902adfa101484f2257d1a9fe6c7985d3aaba990982c725":"/assets/cards/ar/ar-5-front.jpg",dc0d77a5ec25f65aa1ab091a1ede028f7fb1f7ebfbea4945b907adef2ece4281:"/assets/cards/ar/ar-13-front.jpg","6fbefeb90155b45f8872740038dfa38116530750caa1e623a99bab29b5f40a21":"/assets/cards/ar/ar-14-front.jpg","33a35f67e85d189889a7e8fa66ff1719a0d2680027105d1075f802d94d772bb4":"/assets/cards/ar/ar-8-front.jpg","6e7e1e6dde63265f8df8809db768b684e794f4331f9c3d7f4185a1dc612c0701":"/assets/cards/ar/ar-9-front.jpg","2f73e47fe817e7ae747aee252cc07cc1d556c8bd1b2acdf54f9a678f1ff51e02":"/assets/cards/ar/ar-12-front.jpg",aecf39488eb7018c47ea85aa4073aad5f196b9440e2c9248ed960d91e6696f22:"/assets/cards/ar/ar-15-front.jpg",cf41932a7f074826ffbd6c2e14e3bb173d95e38982bac18c2bf04773923903dd:"/assets/cards/ar/ar-16-front.jpg",cfe5a7626bb3fb179d3d056519cf477fa9bd6db3e441a7d7b3204eb4f8e5c2cb:"/assets/cards/ar/ar-17-front.jpg",a26a8dd85af73fe69b123ac4e0beae7cac68442afe22c8d44bf0312a9081381d:"/assets/cards/ar/ar-18-front.jpg","6b6d4acdc02336939dff11c9c962d9f4fe1246ee51003dfc1a70569ebd740664":"/assets/cards/ar/ar-19-front.jpg","2d5acd9b8353db95858fc7dbdcae061bda7df49032e5aea255431ad33aca98d0":"/assets/cards/ar/ar-20-front.jpg",a2d445e888ff59aa58f2ad514a9a031b486a3d56621fa7ddb5f930a045a513b2:"/assets/cards/ar_plus/ar_plus-1-front.jpg",fd85ee9cb1b56cfc5f7e5284a4cf1c67f406b29a068253f7164ea628c1e5c43a:"/assets/cards/ar_plus/ar_plus-4-front.jpg","48cbd3a065ccfa5cbcba4f0247cb0fcf166291740d54ca162580765e5d5c1d4e":"/assets/cards/ar_plus/ar_plus-3-front.jpg",f395a843fb92ff32392d84d9c8dde21b95bf3bf41b8eb787d5d8480878952bcb:"/assets/cards/bg/bg-4-front.jpg","193f6b1b0a647be282bb1b7d5013924039743a46a48383f64d5cb726859f25aa":"/assets/cards/bg/bg-14-front.jpg","0e54f575524cacb092b31f8983a537c18487fdf7405caa924653a39e4bc544db":"/assets/cards/bg/bg-16-front.jpg","2fce52c5e8cde4295b30baed6b7de68e6a2839f5e086d7e1e530ea996ffe0435":"/assets/cards/bg/bg-12-front.jpg",a391b8c4020883f8d080a6e6e83864670158aef7be5eab6d7b348ef6e6b93d10:"/assets/cards/bg/bg-15-front.jpg",fd79d96009f9b66e23c02f25edfcce4a13fdf61c3fe8188269cf83916766df31:"/assets/cards/bg/bg-18-front.jpg",ad7a449d1edd5300a57a8bae2cab2a607d5422ea37c397b7c8c69df5b3096502:"/assets/cards/bg/bg-13-front.jpg","8571242343bc19329436ac669a422140b9dfbc7544cf1de2ec298eef9b3a9257":"/assets/cards/bg/bg-17-front.jpg","64ba521997fc2f8ddbb544dd45bcc58e3145822f4927860039ec7a7921d01757":"/assets/cards/bg/bg-19-front.jpg",ab0196704ba0510bc85e9e58e6bb8323c43cddc2e8f986e6ad79a11852e2c421:"/assets/cards/bg/bg-20-front.jpg","8514e5d83cf922f035f5600a0e96d2bf3ae85d064807759af4f08155ffbe6145":"/assets/cards/bg/bg-21-front.jpg",f495acab04c9e7b539619082b1c7eab387e329794a866f80f4d49f3b8f1f693e:"/assets/cards/bg/bg-23-front.jpg",d4e423814ead1fd2c384492fac1be79e014d771712d0db3c78d93b4e2daf6699:"/assets/cards/bg_plus/bg_plus-1-front.jpg","602d9c6187bb0bb67e3435b95461e1d0f6aa432b5408d2addfe77416d08b2862":"/assets/cards/bg_plus/bg_plus-3-front.jpg",e97efab0e571ea9441ecfcef69388ac5833e96b52f196073127b5930532f920d:"/assets/cards/bg_plus/bg_plus-4-front.jpg","9e27878685e0972914ec6db331732131c20f51b80aef11ca2ed7850338dc56a5":"/assets/cards/bg_plus/bg_plus-5-front.jpg","50793b3633188783f2e78b770a325549b99cc2b0cae8be0f837c1c1bd7958bcd":"/assets/cards/ho/ho-1-front.jpg","23be89f666a01394bded8d8b4e845a176efe96c1e33b40d9edacf15c715a3dd9":"/assets/cards/ho/ho-2-front.jpg",f9b7e9cd2182ade25b13d7355f2297ca1bedd4426b653e89a45aa14ce6221ff6:"/assets/cards/ho/ho-3-front.jpg","120ffbd79d44d8dce99f704baf79e62487e73935e18b8e18bec3fe352e603da0":"/assets/cards/ho/ho-4-front.jpg","926cccef6ed7a746b53a370664d9b1e60fb27d976c4707a0f34e390dcd7ef985":"/assets/cards/ho/ho-5-front.jpg","17b7289bdbdf1c8fc0ddf23c146d0b51e2c66e8e70a20545e64685e087f78496":"/assets/cards/ho/ho-6-front.jpg","38309819fe704c2f7e58cd5c35110ca71a78198b221595d966f711f4ee17d558":"/assets/cards/ho/ho-15-front.jpg","002453cf5ab95a93e69365838d45c421e90a106e3c0bbe20d038355a8495827e":"/assets/cards/ho/ho-8-front.jpg",da0d31d7f836a648f062ee69c549fe2b3806fcc729015bcff634ea427bc94c54:"/assets/cards/ho/ho-9-front.jpg","49d1feafa8f7a1608f6ea2c9205581b056cd4d3a352a903b065be7b613d73d93":"/assets/cards/ho/ho-10-front.jpg",e23e9d4556a4c1f84670f09e14f3abb1050f0effd6b004b190bb0d51c0567a16:"/assets/cards/ho/ho-12-front.jpg",ef5f963cdb85d776e30cc08f406812b628139e1c0762da6cdd76a995d526b132:"/assets/cards/ho/ho-14-front.jpg","76445d956a01a1a6759748880ff112510881dde7c531af86812ced9080f6027d":"/assets/cards/ho/ho-17-front.jpg","5dcb19c46fe4c87775c42969ee66a2e4edf407066eb7b6e9f75ae7f06c544237":"/assets/cards/ho_plus/ho_plus-1-front.jpg",d3608718aa56d2713c83f5d14a2957ae82680551c65c06caf10fa7aab623f2b4:"/assets/cards/ho_plus/ho_plus-2-front.jpg",c0138ea658ae0afcbfe06f7c46d1dfba00a459fd012b0c81aae9c63582923191:"/assets/cards/ho_plus/ho_plus-3-front.jpg","84f830f1410ddc1388ff00d0094af433f20688408ac72c20cfd5e90bf077a494":"/assets/cards/ho_plus/ho_plus-4-front.jpg","6d418c369626afc07e65702585463fa8d7e6dc9518dab01039c73a66907ed553":"/assets/cards/hy/hy-20-front.jpg","3e5c8c4b0dc1c5c6a2e65f80c779cda8035f41399837d032585b13c9a2e58d7b":"/assets/cards/hy/hy-7-front.jpg","9541ab0e2700ffb0df842826dd163204ef7832414a0bcaa1f54f7ac98fde834f":"/assets/cards/hy/hy-24-front.jpg",e8b1063f07dd998149120cc48ce4bb6d98a7bd93967160088eba9d96b710f421:"/assets/cards/hy/hy-8-front.jpg","4f64597b35d42ae5ff6c550c73830d48ef671f57d68ff01cc630e7b2ccaf43cd":"/assets/cards/hy/hy-10-front.jpg","91850bf85a43f889c8889936afdf4db90bde65dc9e65c1b5e0108a8932ac47a9":"/assets/cards/hy/hy-11-front.jpg","91c2ebb2087607ac70d7c081e0291cc298b78781e7e3faf2ec7fc86be248dfd4":"/assets/cards/hy/hy-13-front.jpg","640e4fcde89541cd02119f60f24deed7bad79a678cf1d99cce9e7ba73f71692e":"/assets/cards/hy/hy-14-front.jpg",b24622641e65a1b75e971a3e8c31a2bf0588ba84875b5bf7d03f27f0a63af9fc:"/assets/cards/hy/hy-19-front.jpg","1576e9779c12faed9bad26006fa8a12e7be0756ed264ea3b1deb05127d239b3c":"/assets/cards/hy/hy-21-front.jpg","3674a92a567de26b6304f6aebb9823606e1f72ce9e925d7488152e2f084ec86f":"/assets/cards/hy/hy-22-front.jpg","794136e3f4a27259a85a053cf7c7adc772875f6d5e042bb0eb4aa48d4b46e434":"/assets/cards/hy/hy-23-front.jpg",d17b8a6c61b023f8b09f9ffb1748e0de2eb751a638f2d376983ae14d0bd8564d:"/assets/cards/hy_plus/hy_plus-2-front.jpg",c8310aa2df0cdec2acf8913edbd16d60aaa22deab68867b14f70cd4bba59e4f6:"/assets/cards/hy_plus/hy_plus-5-front.jpg",a8188b32f23968b98e88cb685d8af599d5a2f6570f43f4330b189dd9ce669672:"/assets/cards/hy_plus/hy_plus-8-front.jpg","237ae5dbe95f95a334369a3f6d2c4f628bc2ef4c4cfda81f637169448b0b2a78":"/assets/cards/hy_plus/hy_plus-7-front.jpg",d7c9c03a695431a59b976da9ef1433b1969e905ce1b0f7165960910d8dcda7e7:"/assets/cards/lg/lg-1-front.jpg","54e91ee7019cf98518ceff5d5eb3ae24a2c490991d9ef700107919c1d7216133":"/assets/cards/lg/lg-2-front.jpg","5109d921c42001dd49deb4453c84680c485dbd03acbbf184db44c52e20df0947":"/assets/cards/lg/lg-3-front.jpg","238151d3ee802a63f7cfab27eba567809e0f434dd0ae7ab5cbfd67e17aab320c":"/assets/cards/lg/lg-4-front.jpg",cbd722c55b5f4530d1f909ee512accfb976e160669d861b03ba8a9f1ac812088:"/assets/cards/lg/lg-10-front.jpg","51cb5bbee96271ee7948d123f441fd961511c5664f85d880339ac81e76d297ce":"/assets/cards/lg/lg-12-front.jpg","5a50ab7bd0284e099caf5991bcaebf3fd5e2f6f852a41e8164548250372e13ee":"/assets/cards/lg/lg-13-front.jpg","8b83c2b2d3abe743003e29e8ace677d3669fee9012700fbd9405fb2581c2f1c1":"/assets/cards/lg/lg-14-front.jpg",e3f20637a74add18073f9b306a299693bccd9ff1318dd1cb35bb5b237ae03b3d:"/assets/cards/lg/lg-15-front.jpg","36b7cec7580d4de56edb5692bc83f9c3c08e4a94c7a75d3dca6b9aab5c70e886":"/assets/cards/lg/lg-21-front.jpg","307424a85866d9131ebaf92eee6aa49d75c7fe86937ebb0ddb7651431de5fc2d":"/assets/cards/lg/lg-18-front.jpg","653861f0980a12fb43cbfebda4071b3ca37e094bdc80c8698d0e183d90a83ed2":"/assets/cards/lg/lg-20-front.jpg","3f3a90dac9d0a565694982c55380f9b5fb3b914147aacd6b05c37a9ca8fd19d2":"/assets/cards/lg/lg-23-front.jpg","2b4298eafb47c327a290152fbccd471da28923c5769d2a645c574c16be6a039d":"/assets/cards/lg_plus/lg_plus-7-front.jpg","3074578f141dd1726916bf8e3e4532b4b82c72b7e2d30cbd3205b91609bbfbf2":"/assets/cards/lg_plus/lg_plus-3-front.jpg",bdd1e79a3a0f11fb4aeb486ae199ac2a971f957f90ce61439360e64f5c1ffc22:"/assets/cards/lg_plus/lg_plus-6-front.jpg",c3b9c862179da114428f8db2318e87e2770ad861b7bda0046c875ddaf884683c:"/assets/cards/lg_plus/lg_plus-8-front.jpg","3b6e2c61dd5d3c61e285d5c5f1bae42d08319f1ccd8ab950dabc7012fcae2ec8":"/assets/cards/lo/lo-12-front.jpg",ec8a31e551ec7a31602e8f6dfb7266c4dd377717704a34ee1647c288e9e64013:"/assets/cards/lo/lo-10-front.jpg","58a7b4c3f1fb01ee43a7269374ed04e71909609a51d488407b9754efcd055604":"/assets/cards/lo/lo-7-front.jpg",fdffe9ed90791948ae05fe76630b10ceca9d7bd442c41e2da584527d72ad98de:"/assets/cards/lo/lo-8-front.jpg",d4574f1615eb69b5470822b40ffd0d27da741f7f3e179c671c54290ca51afc0c:"/assets/cards/lo/lo-9-front.jpg",ab0f524c4935a2945d72db20beb4776d764df5de49672ed46e91eadce168e065:"/assets/cards/lo/lo-15-front.jpg","32297c12e7745ecb9bac5727434e7fff2784c25fe2b744d73f36218acc43b0b2":"/assets/cards/lo/lo-13-front.jpg",d9ef4060c364dea670bd525f0aad18687149d8797f5a9946c66b8f14681cff0f:"/assets/cards/lo/lo-14-front.jpg","7cabdc1509214622489311c85cc0cc2857daac93cb4fc31f515fb5fb638f6098":"/assets/cards/lo/lo-16-front.jpg",d2fc0f3677e4dd64bb2bf580951612085ce1f5a36d84742f94101ba0aeb0bebd:"/assets/cards/lo/lo-17-front.jpg","492722fef12f5835e2e0917c18b55b226be409f5f60973130cfda3daaba2a963":"/assets/cards/lo/lo-18-front.jpg","03b051e124ef4ec1c76498960f9a5317bdf1bd3f91973329062ce1b1a905c796":"/assets/cards/lo/lo-19-front.jpg",c9fdad2b74bc9c08941a4348c934616abadbc335d218914419e7972dc54aaa27:"/assets/cards/lo/lo-20-front.jpg","2753d376c59037359099d989ebc9ecdc6f35b0bcc1966a526919a62e9492ba5d":"/assets/cards/lo_plus/lo_plus-1-front.jpg","78e76504372580ad38ecea1cf6ca8b6eef7f24beb4bb173023d493a2900c9213":"/assets/cards/lo_plus/lo_plus-2-front.jpg",cfd41bad24efba992152437f01605cfa070b96c24171d158eb6b38c6e062b997:"/assets/cards/lo_plus/lo_plus-3-front.jpg","56b654c93edf5b33422b575efd3ece648df66bb3b245576bcb100db2cf463b90":"/assets/cards/lo_plus/lo_plus-4-front.jpg","83e4cf361d79bf56cab85b3165d8a502c3b6369a7d91d9d74008e7446ecee5aa":"/assets/cards/tr/tr-1-front.jpg",fac9e08ed1dd2007eff99f64f58456b8f28c887ea72caf3631798f19f586c2cf:"/assets/cards/tr/tr-2-front.jpg","49e88188dd73d2dc1889616077e7b3d3a01274be0936f3cf94b0ba13ffcdd3ec":"/assets/cards/tr/tr-3-front.jpg",f9ace908e376ccf677350bf8b04446db76d5b7810e1238eed78f9636917732d5:"/assets/cards/tr/tr-4-front.jpg",e176ed5572f8b0fec1afdf7338922f6287cb2bd7e8da531363f03afad38d2855:"/assets/cards/tr/tr-5-front.jpg",dcd6e5c81f720c301fdf8b8a9bdc7d1332f5d49d859cc3b7a888c4b47abb437c:"/assets/cards/tr/tr-8-front.jpg","7a3a4bc99a08007a8634615d14bb6e8701d8046b4b357e2e53a6816b1fa4b952":"/assets/cards/tr/tr-7-front.jpg","751ef0172ef4154fa9ada26cf0748253cbdb26e77ee5d7fbeb0cb448f0417815":"/assets/cards/tr/tr-9-front.jpg","637e9420cee8da61167a68a33b51a5955c1b96d79b8b104b70a8d721fcb76d2a":"/assets/cards/tr/tr-10-front.jpg","4096df60204fa108f6f86b2219c8a27d83e68a1ccb196df7df46de4392c2b41c":"/assets/cards/tr/tr-15-front.jpg",bf2f3bb722b82651f6eae93503ee371f2eb0aeb19a3c7048ee204c111f0f7eb4:"/assets/cards/tr/tr-13-front.jpg",e3e51452f907f7c993bd47093ca97798e5c685c2662bbf839e24c197bcdec634:"/assets/cards/tr/tr-17-front.jpg","188c6abac72e21173f1f0b02deb68d8204fe9d8773eea4bf01d633d170e226e4":"/assets/cards/tr/tr-19-front.jpg","9350f91bb06a35e92994e0129874a9c12e075ecde1d97595dc94424a3d445bdf":"/assets/cards/tr_plus/tr_plus-1-front.jpg","427ee044bae11fec56f65f194e7d6f8abcb7e904b199fc4a96c58ca93bfef239":"/assets/cards/tr_plus/tr_plus-3-front.jpg",e300e383916c326e28c6ced9e9705531a202a5daef21fdee6763ad2d11e3a2d8:"/assets/cards/tr_plus/tr_plus-5-front.jpg","7438c901962c7ce3370464463ea4f1e65b4d2a4ef220b5a4032115503fc32b0b":"/assets/cards/zb/zb-1-front.jpg","1c5ed46f16057ca9fa0f10685d323abe71b88b2a416eef661e520e9ff3a4fbcf":"/assets/cards/zb/zb-2-front.jpg","64fc21d85fcd6d3a3928ce9667186a0c8316e440396b6e6ebf162ed69ea6abeb":"/assets/cards/zb/zb-3-front.jpg","69f3d2ddd129e0a3b0a3245525786cf068b2e5eafc11897c9b83e4e208fc8270":"/assets/cards/zb/zb-4-front.jpg",a96dbaf805bf2dce31353b8d02732c389101196ac8220074dd161ad97ad3b61d:"/assets/cards/zb/zb-5-front.jpg",b15c50b1b10ce0e6ee1b76b5532ba9eed3b56cdf024ff27bc6d8c5195dcd76ff:"/assets/cards/zb/zb-15-front.jpg","04c9a1429211640a93676e76f7dfe02150d7e5cd921ee79222aa156800173a71":"/assets/cards/zb/zb-9-front.jpg",cf513f83dd7e6ac363f0aaa0a028c0527a164a283b340fb356b1f607b38a8a46:"/assets/cards/zb/zb-10-front.jpg","08a5474a86442dc9ddbfbebcf9994d7d5485108285168acaa865e44cc14d5462":"/assets/cards/zb/zb-12-front.jpg","732218f61fd334436d5359accff815df2d8c54adbeb7c402336e2f2b9f04b3cd":"/assets/cards/zb/zb-22-front.jpg",ce950419d660dcd87a9760439cf739ec7878df58f21a4af49a44cc4a2265c05b:"/assets/cards/zb/zb-17-front.jpg","7efd605546127d01ae40e1be52a64b45f4174bed74d1d9c8a15a6ba2d3129bc6":"/assets/cards/zb/zb-18-front.jpg","92c305b7877de46785ee7e5b4e5c92bf94c2e761047bb4d37d3fed4ec100d8d7":"/assets/cards/zb/zb-20-front.jpg","030fd7997dc5ccd629a0e184c0ac0ad1b33d1fff9366a4131c4a1d74dbe8a9c0":"/assets/cards/zb/zb-23-front.jpg","3b5c39538c0cf52273b845c15580993cc60e2a4a67f7c27b449243029108d538":"/assets/cards/zb_plus/zb_plus-6-front.jpg","4b42de4bbd91e229d41b666598cefd2a340285f228dc0395856b5b7a22b5381b":"/assets/cards/zb_plus/zb_plus-3-front.jpg","31cd007c783ba3389e6b0a7f3ce398515d65b3ab550aab70ebfcb3d86665ad52":"/assets/cards/zb_plus/zb_plus-4-front.jpg","39a0f3d3578f021253fac1a4fb293accd68267719a9bd4707fda7419257ccfc1":"/assets/cards/zb_plus/zb_plus-5-front.jpg","2a75d8802f569be782f6ca9ef865988ecefd6f447442dd8933154a8e70dd2895":"/assets/cards/強化機雷/強化機雷-16-front.jpg","506eb3f1ac120bb2d1a61d693b9b8f00ef56b788c42a231b9203fdad0ad3aed5":"/assets/ui/card-back.jpg","2e25e08a0277638ffbe37080471ac50fe51ab4e24ea0d52a5af46b7980f76340":"/assets/cards/陸上機雷/陸上機雷-20-front.jpg","149f2bc4a9dce26a9250c94e4a9338f0edf8c90a415c999216c00440ea0a3667":"/assets/cards/ダミー/ダミー-20-front.jpg","444338c10747b07f50d0f5baeb6e9e014141c55507d748ae8d5001fe1b3e5ee3":"/assets/maps/444338c10747b07f50d0f5baeb6e9e014141c55507d748ae8d5001fe1b3e5ee3.jpg","04c1b08a573b97d5296d712ef796a7d9c5e4ed3200d8a4ae268295628de18e55":"/assets/maps/04c1b08a573b97d5296d712ef796a7d9c5e4ed3200d8a4ae268295628de18e55.jpg","9e3fcbc86b5a5563c4bb5566031e7c1fd35fda1f32d981a242889b0c2561049c":"/assets/maps/9e3fcbc86b5a5563c4bb5566031e7c1fd35fda1f32d981a242889b0c2561049c.jpg","582cf873071464b2f3ca6232d0a20b36347ffa948125d0642b330b4d8dc9c478":"/assets/maps/582cf873071464b2f3ca6232d0a20b36347ffa948125d0642b330b4d8dc9c478.jpg","0f7fd469ef1f476fc05c15df2f949f575920a92751d52fc7135f2490eb035118":"/assets/maps/0f7fd469ef1f476fc05c15df2f949f575920a92751d52fc7135f2490eb035118.jpg","224304b43b96cc1dcfb865ed84556e7b06f4068c3a5fd8c21b342a8c53c36a72":"/assets/maps/224304b43b96cc1dcfb865ed84556e7b06f4068c3a5fd8c21b342a8c53c36a72.jpg","9429fd9c15d9a339f30f6cd8ad890af69a9570e0347267c2d6636091aec8266f":"/assets/maps/9429fd9c15d9a339f30f6cd8ad890af69a9570e0347267c2d6636091aec8266f.jpg","44f518c3e3df7c83027cf6ee5990dd411a6b828f9a6d5ed1717f0a352c1654e0":"/assets/maps/44f518c3e3df7c83027cf6ee5990dd411a6b828f9a6d5ed1717f0a352c1654e0.jpg",f0abd1d4ae4b2039ed4d1b54562a66a6c9fe9b718582f6946893f42ab522a53b:"/assets/maps/f0abd1d4ae4b2039ed4d1b54562a66a6c9fe9b718582f6946893f42ab522a53b.jpg","3f14f36d964a2093258d568ac4ce3691a767cd369f3ec5ec6679a610e9f6d9bb":"/assets/maps/3f14f36d964a2093258d568ac4ce3691a767cd369f3ec5ec6679a610e9f6d9bb.jpg",e450e91d172a2414c49fef4702f6799f98b794e6ee77a412e28f81bf374ed853:"/assets/maps/e450e91d172a2414c49fef4702f6799f98b794e6ee77a412e28f81bf374ed853.jpg"},vb="embryo_preload_v1",yb=["/assets/tiles/平地0.png","/assets/tiles/砂0.png","/assets/tiles/瓦礫0.png","/assets/tiles/瓦礫1.png","/assets/tiles/瓦礫2.png","/assets/tiles/瓦礫3.png","/assets/tiles/森0.png","/assets/tiles/森1.png","/assets/tiles/森2.png","/assets/tiles/森3.png","/assets/tiles/水0.png","/assets/tiles/水1.png","/assets/tiles/水2.png","/assets/tiles/高地1.png","/assets/tiles/高地2.png","/assets/tiles/高地3.png"],_b=["/assets/tokens/AG-token.jpg","/assets/tokens/AR-token.jpg","/assets/tokens/BG-token.jpg","/assets/tokens/FO-token.jpg","/assets/tokens/HO-token.jpg","/assets/tokens/HY-token.jpg","/assets/tokens/LG-token.jpg","/assets/tokens/LO-token.jpg","/assets/tokens/TR-token.jpg","/assets/tokens/ZB-token.jpg"];function Um(){const e=new Set;for(const n of Object.values(Pt))for(const t of n)e.add(`/assets/${t.frontImageId}`),e.add(`/assets/${t.backImageId}`);for(const n of yb)e.add(n);for(const n of Object.values(bb))n.startsWith("/assets/maps/")&&e.add(n);for(const n of _b)e.add(n);return[...e]}function Ib(e){localStorage.setItem(vb,JSON.stringify({total:e,ts:Date.now()}))}async function kb(e,n){const t=Um(),a=t.length;let r=0;e(0,a);const s=l=>new Promise(d=>{if(n!=null&&n.aborted){d();return}const u=new Image;u.onload=u.onerror=()=>{r++,e(r,a),d()},u.src=l}),i=10;for(let l=0;l<t.length&&!(n!=null&&n.aborted);l+=i)await Promise.all(t.slice(l,l+i).map(s));n!=null&&n.aborted||Ib(a)}const fi=.4,gi=2.5,eu=.12,nu=5;function jb(e=1){const[n,t]=k.useState({x:0,y:0,scale:e}),a=k.useRef(null),r=k.useRef({x:0,y:0}),s=k.useRef(!1),i=k.useRef(null),l=k.useRef({x:0,y:0,scale:e});k.useLayoutEffect(()=>{const h=i.current;if(!h)return;const x=h.querySelector(".game-board");if(!x)return;const p=h.clientWidth,_=h.clientHeight,y=x.offsetWidth,b=x.offsetHeight;if(!p||!_||!y||!b)return;const v=Math.min(p/y,_/b),I=Math.min(gi,Math.max(fi,v)),S=(p-y*I)/2,C=(_-b*I)/2,w={x:S,y:C,scale:I};l.current=w,t(w)},[]),k.useEffect(()=>{const h=i.current;if(!h)return;const x=p=>{p.preventDefault();const _=p.deltaY<0?eu:-eu;t(y=>({...y,scale:Math.min(gi,Math.max(fi,y.scale+_))}))};return h.addEventListener("wheel",x,{passive:!1}),()=>h.removeEventListener("wheel",x)},[]),k.useEffect(()=>{const h=i.current;if(!h)return;let x=0,p=0,_=0,y=!1,b={x:0,y:0};const v=(w,N)=>Math.sqrt((N.clientX-w.clientX)**2+(N.clientY-w.clientY)**2),I=w=>{w.touches.length===1?(x=w.touches[0].clientX,p=w.touches[0].clientY,b={x,y:p},y=!1):w.touches.length===2&&(w.preventDefault(),_=v(w.touches[0],w.touches[1]),x=(w.touches[0].clientX+w.touches[1].clientX)/2,p=(w.touches[0].clientY+w.touches[1].clientY)/2)},S=w=>{if(w.touches.length===1){const N=w.touches[0].clientX-x,z=w.touches[0].clientY-p;if(!y){const E=w.touches[0].clientX-b.x,J=w.touches[0].clientY-b.y;Math.sqrt(E**2+J**2)>nu&&(y=!0)}y&&(w.preventDefault(),t(E=>({...E,x:E.x+N,y:E.y+z}))),x=w.touches[0].clientX,p=w.touches[0].clientY}else if(w.touches.length===2){w.preventDefault();const N=v(w.touches[0],w.touches[1]),z=(w.touches[0].clientX+w.touches[1].clientX)/2,E=(w.touches[0].clientY+w.touches[1].clientY)/2;if(_>0){const $=N/_;t(L=>{const K=Math.min(gi,Math.max(fi,L.scale*$));return{...L,scale:K}})}const J=z-x,D=E-p;t($=>({...$,x:$.x+J,y:$.y+D})),_=N,x=z,p=E}},C=w=>{w.touches.length<2&&(_=0),w.touches.length===0&&(y=!1),w.touches.length===1&&(x=w.touches[0].clientX,p=w.touches[0].clientY)};return h.addEventListener("touchstart",I,{passive:!1}),h.addEventListener("touchmove",S,{passive:!1}),h.addEventListener("touchend",C),h.addEventListener("touchcancel",C),()=>{h.removeEventListener("touchstart",I),h.removeEventListener("touchmove",S),h.removeEventListener("touchend",C),h.removeEventListener("touchcancel",C)}},[]);const d=k.useCallback(h=>{h.button===0&&(a.current={x:h.clientX,y:h.clientY},r.current={x:h.clientX,y:h.clientY},s.current=!1)},[]),u=k.useCallback(h=>{if(!a.current)return;const x=h.clientX-a.current.x,p=h.clientY-a.current.y,_=Math.sqrt(x*x+p*p);if(!s.current&&_>nu&&(s.current=!0),s.current){const y=h.clientX-r.current.x,b=h.clientY-r.current.y;t(v=>({...v,x:v.x+y,y:v.y+b}))}r.current={x:h.clientX,y:h.clientY}},[]),f=k.useCallback(h=>{a.current=null,s.current=!1},[]),m=k.useCallback(()=>{a.current=null,s.current=!1},[]),g=k.useCallback(()=>{t(l.current)},[]);return{transform:n,viewportRef:i,isPanning:s.current,handlers:{onMouseDown:d,onMouseMove:u,onMouseUp:f,onMouseLeave:m},resetView:g}}function wb({x:e,y:n,value:t}){return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"fx-damage-number",style:{left:e,top:n},children:["-",t]}),o.jsx("style",{children:Sb})]})}const Sb=`
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
`;function Cb({x:e,y:n,variant:t}){return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:`fx-impact fx-impact--${t}`,style:{left:e,top:n},children:[t==="melee"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"fx-impact__slash fx-impact__slash--1"}),o.jsx("div",{className:"fx-impact__slash fx-impact__slash--2"})]}),t==="ranged"&&o.jsx("div",{className:"fx-impact__beam"}),t==="charge"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"fx-impact__ring fx-impact__ring--1"}),o.jsx("div",{className:"fx-impact__ring fx-impact__ring--2"})]})]}),o.jsx("style",{children:Nb})]})}const Nb=`
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
`;function Tb({x:e,y:n}){return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"fx-explosion",style:{left:e,top:n},children:[o.jsx("div",{className:"fx-explosion__flash"}),o.jsx("div",{className:"fx-explosion__ring fx-explosion__ring--1"}),o.jsx("div",{className:"fx-explosion__ring fx-explosion__ring--2"}),o.jsx("div",{className:"fx-explosion__ring fx-explosion__ring--3"}),Array.from({length:8}).map((t,a)=>o.jsx("div",{className:"fx-explosion__particle",style:{"--angle":`${a*45}deg`,"--delay":`${a*20}ms`,"--dist":`${30+Math.random()*20}px`}},a))]}),o.jsx("style",{children:Mb})]})}const Mb=`
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
`;function Eb({defId:e,isAuxiliary:n,playerId:t}){const a=te(e);if(!a)return null;const r=t==="player1"?"P1":"P2",s=t==="player1"?"var(--color-accent)":"#ff00c8";return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"fx-card-reveal",style:{position:"fixed",bottom:"80px",left:"50%",transform:"translateX(-50%)",zIndex:800,pointerEvents:"none"},children:[o.jsxs("div",{className:"fx-card-reveal__label",style:{color:s},children:[r," ",n?"抽到辅助卡":"抽牌"]}),o.jsx("div",{className:"fx-card-reveal__card",style:{borderColor:s},children:o.jsxs("div",{className:"fx-card-reveal__inner",children:[o.jsx("div",{className:"fx-card-reveal__back",children:o.jsx("img",{src:"/assets/ui/card-back.jpg",alt:"card back"})}),o.jsx("div",{className:"fx-card-reveal__front",children:o.jsx("img",{src:`/assets/${a.frontImageId}`,alt:a.nameCn})})]})}),o.jsxs("div",{className:"fx-card-reveal__name",style:{color:s},children:[a.nameCn,n&&o.jsx("span",{className:"fx-card-reveal__aux-badge",children:"辅助"})]})]}),o.jsx("style",{children:Db})]})}const Db=`
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
`;function $b({defId:e,isBomb:n,index:t,total:a}){const r=te(e);if(!r)return null;const s=n?"fx-card-destroy--bomb":"";return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:`fx-card-destroy ${s}`,style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:810,pointerEvents:"none"},children:[o.jsxs("div",{className:"fx-card-destroy__card",children:[o.jsx("img",{src:`/assets/${r.frontImageId}`,alt:r.nameCn}),o.jsx("div",{className:"fx-card-destroy__flash"})]}),o.jsxs("div",{className:"fx-card-destroy__label",children:[r.nameCn," 被摧毁",n&&o.jsx("span",{className:"fx-card-destroy__bomb-badge",children:"💣 诱爆"})]}),o.jsxs("div",{className:"fx-card-destroy__counter",children:[t+1," / ",a]})]}),o.jsx("style",{children:Ab})]})}const Ab=`
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
`,xl=62,hi=Math.round(xl*(1042/756)),tu=68,zb=6,au=140;function Pb({p1Cards:e,p2Cards:n}){const[t,a]=k.useState("init"),[r,s]=k.useState(null);return k.useEffect(()=>{const i=document.querySelector(".unit-token-abs--p1"),l=document.querySelector(".unit-token-abs--p2"),d=i==null?void 0:i.getBoundingClientRect(),u=l==null?void 0:l.getBoundingClientRect();s({p1:d?{x:d.left+d.width/2,y:d.top+d.height/2}:{x:window.innerWidth*.3,y:window.innerHeight*.55},p2:u?{x:u.left+u.width/2,y:u.top+u.height/2}:{x:window.innerWidth*.7,y:window.innerHeight*.45}});const f=setTimeout(()=>a("fan"),50),m=setTimeout(()=>a("hold"),650),g=setTimeout(()=>a("cluster"),1650),h=setTimeout(()=>a("exit"),2e3);return()=>{[f,m,g,h].forEach(clearTimeout)}},[]),r?Ar.createPortal(o.jsxs("div",{style:{position:"fixed",inset:0,zIndex:900,pointerEvents:"none"},children:[o.jsx(ru,{cards:e,origin:r.p1,phase:t,color:"#00f0ff",label:"P1"}),o.jsx(ru,{cards:n,origin:r.p2,phase:t,color:"#ff8844",label:"P2"})]}),document.body):null}function ru({cards:e,origin:n,phase:t,color:a,label:r}){if(e.length===0)return null;const s=e.length,l=(s-1)*tu>window.innerWidth*.7?Math.floor(window.innerWidth*.7/Math.max(s-1,1)):tu,d=t==="hold"||t==="cluster";return o.jsxs("div",{style:{position:"fixed",left:n.x,top:n.y},children:[o.jsxs("div",{style:{position:"absolute",top:-(au+hi/2+28),left:0,transform:"translateX(-50%)",color:a,fontSize:"0.78rem",fontWeight:"bold",whiteSpace:"nowrap",textShadow:`0 0 10px ${a}, 1px 1px 3px #000`,opacity:d?1:0,transition:"opacity 250ms",letterSpacing:"0.06em"},children:[r,"  弃牌 ×",s]}),e.map((u,f)=>{const m=te(u.defId),g=(s-1)/2,h=f-g,x=h*l,p=-au,_=h*zb;let y,b,v,I,S;switch(t){case"init":y=0,b=0,v=0,I=.15,S=0;break;case"fan":case"hold":y=x,b=p,v=_,I=1,S=1;break;case"cluster":y=0,b=p,v=0,I=.85,S=1;break;case"exit":default:y=0,b=p-520,v=0,I=.2,S=0;break}const C=f*28;let w;switch(t){case"fan":w=[`transform 480ms cubic-bezier(0.34,1.56,0.64,1) ${C}ms`,`opacity   300ms ease-out ${C}ms`].join(", ");break;case"hold":w="none";break;case"cluster":w="transform 320ms ease-in, opacity 150ms ease-in";break;case"exit":w="transform 450ms ease-in, opacity 380ms ease-in 60ms";break;default:w="none"}return o.jsx("div",{style:{position:"absolute",width:xl,height:hi,left:-xl/2,top:-hi/2,borderRadius:5,overflow:"hidden",border:`1px solid ${a}55`,boxShadow:`0 6px 20px rgba(0,0,0,0.7), 0 0 8px ${a}44`,zIndex:f,transform:`translate(${y}px, ${b}px) rotate(${v}deg) scale(${I})`,opacity:S,transition:w,willChange:"transform, opacity"},children:m?o.jsx("img",{src:`/assets/${m.frontImageId}`,alt:m.nameCn,style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1}):o.jsx("div",{style:{width:"100%",height:"100%",background:"#222"}})},u.instanceId)})]})}const bl=62,xi=Math.round(bl*(1042/756)),ou=52,Vb=5,su=120;function Rb({playerId:e,count:n}){const[t,a]=k.useState("init"),[r,s]=k.useState(null),[i,l]=k.useState(null);if(k.useEffect(()=>{const u=e==="player1"?".mp__deck--p1":".mp__deck--p2",f=document.querySelector(u),m=document.querySelector(e==="player1"?".unit-token-abs--p1":".unit-token-abs--p2"),g=f==null?void 0:f.getBoundingClientRect(),h=m==null?void 0:m.getBoundingClientRect();s(g?{x:g.left+g.width/2,y:g.top+g.height/2}:{x:window.innerWidth*.5,y:window.innerHeight*.85}),l(h?{x:h.left+h.width/2,y:h.top+h.height/2}:{x:e==="player1"?window.innerWidth*.3:window.innerWidth*.7,y:e==="player1"?window.innerHeight*.55:window.innerHeight*.45});const x=setTimeout(()=>a("spread"),50),p=setTimeout(()=>a("hold"),600),_=setTimeout(()=>a("cluster"),900),y=setTimeout(()=>a("fly"),1200);return()=>{[x,p,_,y].forEach(clearTimeout)}},[e]),!r||!i)return null;const d=e==="player1"?"#00f0ff":"#ff8844";return Ar.createPortal(o.jsx("div",{style:{position:"fixed",inset:0,zIndex:900,pointerEvents:"none"},children:o.jsx(Lb,{count:n,deckPos:r,mechaPos:i,phase:t,color:d,playerId:e})}),document.body)}function Lb({count:e,deckPos:n,mechaPos:t,phase:a,color:r,playerId:s}){if(e===0)return null;const i=e,d=(i-1)*ou>window.innerWidth*.6?Math.floor(window.innerWidth*.6/Math.max(i-1,1)):ou,u=t.x-n.x,f=t.y-n.y,m=a==="hold"||a==="cluster",g=`${s==="player1"?"P1":"P2"} 抽牌 ×${i}`;return o.jsxs("div",{style:{position:"fixed",left:n.x,top:n.y},children:[o.jsx("div",{style:{position:"absolute",top:-(su+xi/2+28),left:0,transform:"translateX(-50%)",color:r,fontSize:"0.78rem",fontWeight:"bold",whiteSpace:"nowrap",textShadow:`0 0 10px ${r}, 1px 1px 3px #000`,opacity:m?1:0,transition:"opacity 250ms",letterSpacing:"0.06em"},children:g}),Array.from({length:i},(h,x)=>{const p=(i-1)/2,_=x-p,y=_*d,b=-su,v=_*Vb;let I,S,C,w,N;switch(a){case"init":I=0,S=0,C=0,w=.15,N=0;break;case"spread":case"hold":I=y,S=b,C=v,w=1,N=1;break;case"cluster":I=0,S=b,C=0,w=.85,N=1;break;case"fly":default:I=u,S=f,C=0,w=.2,N=0;break}const z=x*24;let E;switch(a){case"spread":E=[`transform 480ms cubic-bezier(0.34,1.56,0.64,1) ${z}ms`,`opacity   300ms ease-out ${z}ms`].join(", ");break;case"hold":E="none";break;case"cluster":E="transform 280ms ease-in, opacity 150ms ease-in";break;case"fly":E="transform 400ms cubic-bezier(0.4,0,1,1), opacity 300ms ease-in 80ms";break;default:E="none"}return o.jsx("div",{style:{position:"absolute",width:bl,height:xi,left:-bl/2,top:-xi/2,borderRadius:5,overflow:"hidden",border:`1px solid ${r}55`,boxShadow:`0 6px 20px rgba(0,0,0,0.7), 0 0 8px ${r}44`,zIndex:x,transform:`translate(${I}px, ${S}px) rotate(${C}deg) scale(${w})`,opacity:N,transition:E,willChange:"transform, opacity"},children:o.jsx("img",{src:"/assets/ui/card-back.jpg",alt:"card back",style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1})},x)})]})}const vl=56,yl=Math.round(vl*(1042/756));function Ob({playerId:e}){const[n,t]=k.useState("face-up"),[a,r]=k.useState(null);if(k.useEffect(()=>{const i=e==="player1"?".mp__deck--p1":".mp__deck--p2",l=document.querySelector(i),d=l==null?void 0:l.getBoundingClientRect();r(d?{x:d.left+d.width/2,y:d.top+d.height/2}:{x:window.innerWidth*.5,y:window.innerHeight*.85});const u=setTimeout(()=>t("flip"),150),f=setTimeout(()=>t("face-down"),500),m=setTimeout(()=>t("fade"),650);return()=>{[u,f,m].forEach(clearTimeout)}},[e]),!a)return null;const s=e==="player1"?"#00f0ff":"#ff8844";return Ar.createPortal(o.jsxs("div",{style:{position:"fixed",inset:0,zIndex:900,pointerEvents:"none"},children:[o.jsxs("div",{style:{position:"fixed",left:a.x,top:a.y},children:[[0,1,2].map(i=>o.jsx(Kb,{index:i,phase:n,color:s},i)),o.jsx("div",{style:{position:"absolute",top:-(yl/2+32),left:0,transform:"translateX(-50%)",color:s,fontSize:"0.78rem",fontWeight:"bold",whiteSpace:"nowrap",textShadow:`0 0 10px ${s}, 1px 1px 3px #000`,letterSpacing:"0.06em",opacity:n==="face-up"||n==="flip"||n==="face-down"?1:0,transition:"opacity 200ms"},children:"♻️ 重洗牌组"})]}),o.jsx("style",{children:Jb})]}),document.body)}function Kb({index:e,phase:n,color:t}){const a=(e-1)*3,r=(e-1)*2;let s;switch(n){case"face-up":case"flip":case"face-down":s=1;break;case"fade":s=0;break}const i=n==="flip"?"reshuffle-card--flipping":n==="face-down"||n==="fade"?"reshuffle-card--flipped":"";return o.jsxs("div",{className:`reshuffle-card ${i}`,style:{position:"absolute",width:vl,height:yl,left:-vl/2+a,top:-yl/2+r,perspective:600,opacity:s,transition:"opacity 200ms ease-in",willChange:"opacity",zIndex:e},children:[o.jsx("div",{className:"reshuffle-card__face reshuffle-card__front",style:{background:t+"33",border:`2px solid ${t}88`,borderRadius:5,boxShadow:`0 0 12px ${t}55`}}),o.jsx("div",{className:"reshuffle-card__face reshuffle-card__back",style:{borderRadius:5,overflow:"hidden",border:"1px solid #ffffff44",boxShadow:"0 4px 12px rgba(0,0,0,0.6)"},children:o.jsx("img",{src:"/assets/ui/card-back.jpg",alt:"card back",style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1})})]})}const Jb=`
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
`,cn=68;function Bb(){const{currentEvent:e}=zr();return e?o.jsxs("div",{className:"effects-layer",style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:20},children:[e.type==="damage_number"&&o.jsx(wb,{x:e.position.col*cn+cn/2,y:e.position.row*cn+cn/2,value:e.value},`dmg-${Date.now()}`),(e.type==="ranged_hit"||e.type==="melee_hit"||e.type==="charge_hit")&&o.jsx(Cb,{x:e.targetPos.col*cn+cn/2,y:e.targetPos.row*cn+cn/2,variant:e.type==="ranged_hit"?"ranged":e.type==="melee_hit"?"melee":"charge"},`hit-${Date.now()}`),e.type==="mine_explode"&&o.jsx(Tb,{x:e.position.col*cn+cn/2,y:e.position.row*cn+cn/2},`exp-${Date.now()}`),e.type==="card_draw"&&o.jsx(Eb,{defId:e.defId,isAuxiliary:e.isAuxiliary,playerId:e.playerId},`draw-${e.card.instanceId}`),e.type==="card_destroy"&&o.jsx($b,{defId:e.defId,isBomb:e.isBomb,index:e.index,total:e.total},`destroy-${e.card.instanceId}`),e.type==="cleanup_discard"&&o.jsx(Pb,{p1Cards:e.p1Cards,p2Cards:e.p2Cards},`cleanup-${Date.now()}`),e.type==="batch_card_draw"&&o.jsx(Rb,{playerId:e.playerId,count:e.count},`draw-${e.playerId}-${Date.now()}`),e.type==="deck_reshuffle"&&o.jsx(Ob,{playerId:e.playerId},`reshuffle-${e.playerId}-${Date.now()}`)]}):null}function Ca(){const{state:e}=Me(),{map:n,mines:t}=e,{currentEvent:a,animatedPositions:r}=zr(),{transform:s,viewportRef:i,handlers:l,resetView:d}=jb(.9),u=(a==null?void 0:a.type)==="screen_shake"?`board-transform board-shake board-shake--${a.intensity}`:"board-transform";return o.jsxs("div",{ref:i,className:"board-viewport",...l,style:{cursor:"grab"},children:[o.jsxs("div",{className:u,style:{transform:`translate(${s.x}px, ${s.y}px) scale(${s.scale})`,transformOrigin:"top left"},children:[o.jsx("div",{className:"game-board",style:{gridTemplateColumns:`repeat(${n.width}, var(--cell-size))`,gridTemplateRows:`repeat(${n.height}, var(--cell-size))`},children:n.cells.flatMap((f,m)=>f.map((g,h)=>o.jsx(Fb,{cell:g,row:m,col:h,mines:t},`${m}-${h}`)))}),e.playerIds.map((f,m)=>{const g=e.players[f];return!g||g.isDefeated?null:o.jsx(Gb,{player:g,side:`p${m+1}`,playerIndex:m,color:Sa(e,f),animatedPos:r[f]??null},f)}),o.jsx(Bb,{})]}),o.jsx("button",{className:"board-reset-btn",onClick:d,title:"重置视角",children:"⟳"})]})}function Fb({cell:e,row:n,col:t,mines:a}){const r=bc(e),s=e.terrain==="highland"&&e.elevation>0?`+${e.elevation}`:null,i=a.filter(l=>l.position.row===n&&l.position.col===t);return o.jsxs("div",{className:`board-cell board-cell--${e.terrain}`,style:{backgroundImage:`url("${r}")`},"data-row":n,"data-col":t,children:[s&&o.jsx("span",{className:"board-cell__elev",children:s}),i.map((l,d)=>o.jsx(Hb,{mine:l,offset:d*4},l.id))]})}function Gb({player:e,side:n,playerIndex:t,color:a,animatedPos:r}){const s=q.find(m=>m.id===e.unitId);if(!s)return null;const i=(r==null?void 0:r.pos)??e.position,l=(r==null?void 0:r.facing)??e.facing,d={N:0,E:90,S:180,W:270}[l]??0,u=(()=>{switch(l){case"N":return{top:0,left:"50%",translate:"-50% 0"};case"S":return{bottom:0,left:"50%",translate:"-50% 0"};case"E":return{right:0,top:"50%",translate:"0 -50%"};case"W":return{left:0,top:"50%",translate:"0 -50%"};default:return{top:0,left:"50%",translate:"-50% 0"}}})(),f=`P${t+1}`;return o.jsxs("div",{className:`unit-token-abs unit-token-abs--${n}`,style:{left:`calc(${i.col} * var(--cell-size))`,top:`calc(${i.row} * var(--cell-size))`,width:"var(--cell-size)",height:"var(--cell-size)","--token-color":a},children:[o.jsx("div",{className:"unit-token-abs__label",style:{borderColor:a,backgroundColor:a+"33"},title:`${f} ${s.nameCn}`,children:f}),o.jsx("span",{className:"unit-token-abs__facing-arrow",style:{...u,transform:`rotate(${d}deg)`,color:a},title:`机头朝向：${e.facing}`,children:"▲"})]})}function Hb({mine:e,offset:n}){const t=e.kind==="real"?"隐藏机雷指示物":"隐藏替身雷指示物";return o.jsx("div",{className:"mine-token",style:{transform:`translate(${n}px, ${n}px)`},title:t,children:o.jsx("span",{className:"mine-token__icon",children:"◆"})})}const Ub=250,Wb=480,Zb=2e3,ss=252,wo=Math.round(ss*(1042/756)),Ft=12;function Lt(){const[e,n]=k.useState(null),t=k.useRef(null),a=k.useRef(null),r=k.useRef(null),s=k.useRef({x:0,y:0}),i=k.useRef(!1),l=()=>{t.current&&(clearTimeout(t.current),t.current=null),a.current&&(clearTimeout(a.current),a.current=null),r.current&&(clearTimeout(r.current),r.current=null)},d=k.useCallback(()=>{l(),n(null)},[]),u=k.useCallback(f=>({onMouseEnter:m=>{s.current={x:m.clientX,y:m.clientY},l(),t.current=setTimeout(()=>{n({src:f,x:s.current.x,y:s.current.y})},Ub)},onMouseMove:m=>{s.current={x:m.clientX,y:m.clientY},n(g=>g&&{...g,x:m.clientX,y:m.clientY})},onMouseLeave:()=>d(),onTouchStart:m=>{const g=m.touches[0];i.current=!1,l(),a.current=setTimeout(()=>{i.current||(n({src:f,x:g.clientX,y:g.clientY}),r.current=setTimeout(()=>n(null),Zb))},Wb)},onTouchMove:()=>{i.current=!0,d()},onTouchEnd:()=>{l()}}),[d]);return{zoom:e,hide:d,getZoomHandlers:u}}function Yb(e,n){const t=window.innerWidth,a=window.innerHeight;let r=e+18;r+ss+Ft>t&&(r=e-ss-18);let s=n-wo/2;return s<Ft&&(s=Ft),s+wo>a-Ft&&(s=a-wo-Ft),{left:Math.max(Ft,r),top:s}}function Ot({zoom:e}){if(!e)return null;const{left:n,top:t}=Yb(e.x,e.y);return Ar.createPortal(o.jsxs("div",{style:{position:"fixed",left:n,top:t,width:ss,height:wo,zIndex:99999,pointerEvents:"none",borderRadius:8,overflow:"hidden",boxShadow:"0 12px 40px rgba(0,0,0,0.75), 0 0 0 2px rgba(255,255,255,0.15)",background:"#111",animation:"card-zoom-in 0.12s ease-out both"},children:[o.jsx("img",{src:e.src,alt:"",style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1}),o.jsx("style",{children:Xb})]}),document.body)}const Xb=`
@keyframes card-zoom-in {
  from { opacity: 0; transform: scale(0.88); }
  to   { opacity: 1; transform: scale(1); }
}
`;function _l(e){return`P${e.replace("player","")}`}function Qb(e,n){const t=Pt[n]??[];return[...e].sort((a,r)=>{const s=t.findIndex(l=>l.id===a.defId),i=t.findIndex(l=>l.id===r.defId);return s-i})}function qb(e,n,t,a,r,s){function i(h){if(!h)return null;const x=[...e.hand,...e.auxiliary].find(p=>p.instanceId===h);return x?r(x.defId)??null:null}const l=i(t),d=i(a),u=fn(e,r,"movement"),f=e.position,m=[];let g=[f];if(l){if(l.actionType==="movement"){const h=(l.movementValue??0)+(u.wheel?2:0);if(h>0){const x=Es(s,f,h,[n],u,e.facing);g=x.map(p=>p.pos),m.push(...x.map(p=>({pos:p.pos,cls:"preview-move-s1"})))}}else if(l.actionType==="ranged"){const h=l.rangeMin??1,x=l.rangeMax??6;for(let p=0;p<s.height;p++)for(let _=0;_<s.width;_++)Ke(f,{row:p,col:_})>=h&&Ke(f,{row:p,col:_})<=x&&m.push({pos:{row:p,col:_},cls:"preview-atk-s1"})}else if(l.actionType==="melee"||l.actionType==="charge")for(const[h,x]of[[-1,0],[1,0],[0,-1],[0,1]]){const p=f.row+h,_=f.col+x;p>=0&&p<s.height&&_>=0&&_<s.width&&m.push({pos:{row:p,col:_},cls:"preview-atk-s1"})}}if(d){const h=new Map,x=p=>`${p.row},${p.col}`;if(d.actionType==="movement"){const p=(d.movementValue??0)+(u.wheel?2:0);if(p>0){for(const _ of g)Ah(s,_,p,[n],u).forEach(y=>h.set(x(y.pos),y.pos));h.forEach(_=>m.push({pos:_,cls:"preview-move-s2"}))}}else if(d.actionType==="ranged"){const p=d.rangeMin??1,_=d.rangeMax??6;for(const y of g)for(let b=0;b<s.height;b++)for(let v=0;v<s.width;v++){const I=Ke(y,{row:b,col:v});I>=p&&I<=_&&h.set(x({row:b,col:v}),{row:b,col:v})}h.forEach(y=>m.push({pos:y,cls:"preview-atk-s2"}))}else if(d.actionType==="melee"||d.actionType==="charge"){for(const p of g)for(const[_,y]of[[-1,0],[1,0],[0,-1],[0,1]]){const b=p.row+_,v=p.col+y;b>=0&&b<s.height&&v>=0&&v<s.width&&h.set(x({row:b,col:v}),{row:b,col:v})}h.forEach(p=>m.push({pos:p,cls:"preview-atk-s2"}))}}return m}const ev=["board-cell--preview-move-s1","board-cell--preview-move-s2","board-cell--preview-atk-s1","board-cell--preview-atk-s2"];function iu(){document.querySelectorAll(".board-cell").forEach(e=>ev.forEach(n=>e.classList.remove(n)))}const nv=[{id:"hand",label:"手牌",icon:"🃏"},{id:"auxiliary",label:"辅助区",icon:"⚙️"},{id:"discard",label:"弃牌区",icon:"♻️"},{id:"destroyed",label:"已破坏",icon:"💀"}];function is(){const{state:e,dispatch:n,aiConfig:t}=Me(),{isAnimating:a}=zr(),r=()=>n({type:"ADVANCE_PLOT_STEP"});if(k.useEffect(()=>{if(e.phase!=="plotting"||a)return;const i=e.plottingStep;if(!i||!i.startsWith("transition_to_"))return;const l=i.replace("transition_to_","");if(!Ae(t,l))return;const d=setTimeout(r,400);return()=>clearTimeout(d)},[e.plottingStep,e.phase,a,t]),e.phase!=="plotting"||a)return null;const s=e.plottingStep;if(s&&s.startsWith("transition_to_")){const i=s.replace("transition_to_","");return Ae(t,i)?null:o.jsx(rv,{onContinue:r,playerLabel:_l(i),hint:"请确认对方不在旁后开始布局"})}return null}function la(){const{state:e,dispatch:n,getCard:t,aiConfig:a}=Me(),{plottingStep:r}=e;if(e.phase!=="plotting"||r==="complete"||r===null||r.startsWith("transition_to_"))return null;const s=r,i=Ae(a,s),l=Pr(a,s);return o.jsx(tv,{activePlottingPlayerId:s,getCard:t,isAI:i,aiDifficulty:l,onConfirm:(d,u)=>{n({type:"PLOT_CARD",playerId:s,seg:1,instanceId:d}),n({type:"PLOT_CARD",playerId:s,seg:2,instanceId:u}),n({type:"CONFIRM_PLOT",playerId:s})}},s)}function tv({activePlottingPlayerId:e,getCard:n,onConfirm:t,isAI:a=!1,aiDifficulty:r="hard"}){const{state:s,dispatch:i,exposureMode:l}=Me(),[d,u]=k.useState(null),[f,m]=k.useState(null),[g,h]=k.useState("hand"),[x,p]=k.useState(e);function _($){for(const L of $)i({type:"ADD_LOG",message:L})}const y=x===e||l,b=s.players[x],v=s.players[e],I=$=>Sa(s,$),S=I(e),C=(()=>{const $=s.playerIds.filter(V=>V!==e&&s.teams[V]!==s.teams[e]&&!s.players[V].isDefeated);if($.length===0)return null;const L=v.position;let K=$[0],M=Math.max(Math.abs(s.players[$[0]].position.row-L.row),Math.abs(s.players[$[0]].position.col-L.col));for(let V=1;V<$.length;V++){const R=s.players[$[V]].position,A=Math.max(Math.abs(R.row-L.row),Math.abs(R.col-L.col));A<M&&(K=$[V],M=A)}return s.players[K]})();k.useEffect(()=>{h(x===e?"hand":"auxiliary")},[x,e]),k.useEffect(()=>{const $=(C==null?void 0:C.position)??{row:0,col:0},L=qb(v,$,d,f,n,s.map);return iu(),L.forEach(({pos:K,cls:M})=>{const V=document.querySelector(`.board-cell[data-row="${K.row}"][data-col="${K.col}"]`);V&&V.classList.add(`board-cell--${M}`)}),iu},[d,f]),k.useEffect(()=>{if(!a)return;const $=s.playerIds.filter(M=>M!==e&&s.teams[M]!==s.teams[e]&&!s.players[M].isDefeated).map(M=>s.players[M]),L=$.length>0?$:[v],K=setTimeout(()=>{const{seg1:M,seg2:V,reasoning:R}=Dx(v,L,n,r,s.map);_(R),M&&V?t(M,V):M?t(M,M):i({type:"CONFIRM_PLOT",playerId:e})},800);return()=>clearTimeout(K)},[a]);function w($){if(d===$){u(null);return}if(f===$){m(null);return}if(!d){u($);return}if(!f){m($);return}m($)}function N($){return $==="deck"?b.deck.filter(L=>!L.destroyed).length:$==="hand"?b.hand.filter(L=>!L.destroyed).length:$==="auxiliary"?b.auxiliary.length:$==="discard"?b.discard.length:$==="destroyed"?b.destroyedCards.length:0}function z($){return $==="deck"?y?Qb(b.deck,b.unitId):[]:$==="hand"?b.hand.filter(L=>!L.destroyed):$==="auxiliary"?b.auxiliary:$==="discard"?b.discard:$==="destroyed"?b.destroyedCards:[]}const E=d!==null&&f!==null,J=y,D=g==="deck"&&y;return o.jsxs("div",{className:"plot-content",children:[o.jsxs("div",{className:"plot-panel__header",children:[o.jsx("span",{className:"plot-panel__player",style:{color:S},children:_l(e)}),o.jsx("span",{className:"plot-panel__prompt",children:"布局中"})]}),o.jsx("div",{className:"plot-tab-row",children:s.playerIds.map($=>{const L=x===$,K=$===e;return o.jsxs("button",{className:`plot-tab${L?" plot-tab--active":""}`,style:L?{color:I($),borderBottomColor:I($)}:void 0,onClick:()=>p($),children:[_l($),K&&!L&&o.jsx("span",{className:"plot-tab__dot",style:{background:I($)}})]},$)})}),x===e?o.jsxs("div",{className:"plot-slots",children:[o.jsx(lu,{label:"主要阶段 1",cardInstanceId:d,getCard:n,hand:v.hand,onClear:()=>u(null),color:S}),o.jsx(lu,{label:"主要阶段 2",cardInstanceId:f,getCard:n,hand:v.hand,onClear:()=>m(null),color:S})]}):l?o.jsxs("div",{className:"plot-slots",children:[o.jsx(cu,{label:"主要阶段 1",card:b.plotSeg1,getCard:n}),o.jsx(cu,{label:"主要阶段 2",card:b.plotSeg2,getCard:n})]}):o.jsxs("div",{className:"plot-slots",children:[o.jsxs("div",{className:"plot-slot-locked",children:[o.jsx("span",{children:"🔒"}),o.jsx("span",{children:"主要阶段 1"}),o.jsx("span",{className:"plot-slot-locked__hint",children:"对方已锁定"})]}),o.jsxs("div",{className:"plot-slot-locked",children:[o.jsx("span",{children:"🔒"}),o.jsx("span",{children:"主要阶段 2"}),o.jsx("span",{className:"plot-slot-locked__hint",children:"对方已锁定"})]})]}),o.jsxs("div",{className:"plot-zone-tabs",children:[o.jsxs("button",{className:`plot-zone-tab${D?" plot-zone-tab--active":""}`,style:D?{borderColor:S}:void 0,onClick:J?()=>h("deck"):void 0,disabled:!J,title:J?"卡组：按资料集顺序查看":"对方卡组不可查看",children:[o.jsx("span",{className:"plot-zone-tab__icon",children:J?"🂠":"🔒"}),o.jsx("span",{className:"plot-zone-tab__label",children:"卡组"}),o.jsx("span",{className:"plot-zone-tab__count",children:b.deck.filter($=>!$.destroyed).length})]}),nv.map(({id:$,label:L,icon:K})=>{const M=g===$;return o.jsxs("button",{className:`plot-zone-tab${M?" plot-zone-tab--active":""}`,style:M?{borderColor:y?S:I(x)}:void 0,onClick:()=>h($),title:`${L}：点击查看`,children:[o.jsx("span",{className:"plot-zone-tab__icon",children:K}),o.jsx("span",{className:"plot-zone-tab__label",children:L}),o.jsx("span",{className:"plot-zone-tab__count",children:N($)})]},$)})]}),o.jsx("div",{className:"plot-zone-view",children:g==="hand"&&!y?o.jsxs("div",{className:"plot-zone-private",children:["🔒 对方手牌不可查看",o.jsx("br",{}),o.jsxs("span",{className:"plot-zone-private__count",children:["共 ",N("hand")," 张"]})]}):z(g).length===0?o.jsx("p",{className:"plot-zone-empty",children:"（此区域为空）"}):o.jsx("div",{className:"plot-card-grid",children:z(g).map($=>{const L=n($.defId),K=g==="hand"&&x===e,M=$.instanceId===d,V=$.instanceId===f;return o.jsx(av,{card:$,def:L,isSelected:M||V,segLabel:M?"①":V?"②":null,onClick:K?()=>w($.instanceId):void 0},$.instanceId)})})}),o.jsx("div",{className:"plot-footer",children:o.jsx("button",{className:"plot-confirm-btn",disabled:!E,style:E?{borderColor:S,color:S}:void 0,onClick:()=>{d&&f&&t(d,f)},children:E?"确定布局":`请选择主要阶段 ${d?"2":"1"} 的卡牌`})}),o.jsx("style",{children:ov})]})}function lu({label:e,cardInstanceId:n,getCard:t,hand:a,onClear:r,color:s}){const i=a.find(g=>g.instanceId===n)??null,l=i?t(i.defId):null,{zoom:d,hide:u,getZoomHandlers:f}=Lt(),m=l?`/assets/${l.frontImageId}`:"";return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"plot-slot",children:[o.jsx("div",{className:"plot-slot__label",children:e}),l&&i?o.jsxs("div",{className:"plot-slot__card",onClick:()=>{u(),r()},title:"点击取消选择",style:{borderColor:s,boxShadow:`0 0 8px ${s}55`},...f(m),children:[o.jsx("img",{src:m,alt:l.nameCn,className:"plot-slot__img",onError:g=>{g.target.style.opacity="0.4"}}),o.jsx("span",{className:"plot-slot__name",children:l.nameCn}),o.jsx("span",{className:"plot-slot__clear",children:"✕"})]}):o.jsx("div",{className:"plot-slot__empty",children:"— 未选择 —"})]}),o.jsx(Ot,{zoom:d})]})}function cu({label:e,card:n,getCard:t}){const a=n?t(n.defId):null,r=a?`/assets/${a.frontImageId}`:"";return o.jsxs("div",{className:"plot-slot",children:[o.jsx("div",{className:"plot-slot__label",children:e}),a&&n?o.jsxs("div",{className:"plot-slot__card",style:{borderColor:"#888",cursor:"default"},children:[o.jsx("img",{src:r,alt:a.nameCn,className:"plot-slot__img",onError:s=>{s.target.style.opacity="0.4"}}),o.jsx("span",{className:"plot-slot__name",children:a.nameCn})]}):o.jsx("div",{className:"plot-slot__empty",children:"— 未布局 —"})]})}function av({card:e,def:n,isSelected:t,segLabel:a,onClick:r}){const{zoom:s,getZoomHandlers:i}=Lt(),l=n?`/assets/${n.frontImageId}`:"";return o.jsxs(o.Fragment,{children:[o.jsxs("button",{className:`plot-card${t?" plot-card--selected":""}${r?"":" plot-card--readonly"}`,onClick:r,disabled:!r,title:(n==null?void 0:n.nameCn)??"???",...n?i(l):{},children:[n?o.jsxs(o.Fragment,{children:[o.jsx("img",{src:l,alt:n.nameCn,className:"plot-card__img",onError:d=>{d.target.style.opacity="0.3"}}),o.jsx("span",{className:"plot-card__name",children:n.nameCn}),n.damage!==void 0&&o.jsxs("span",{className:"plot-card__stat",children:["💥",n.damage]}),n.movementValue!==void 0&&o.jsxs("span",{className:"plot-card__stat",children:["🏃",n.movementValue]}),n.rangeMin!==void 0&&o.jsxs("span",{className:"plot-card__stat",children:["🎯",n.rangeMin,"–",n.rangeMax]})]}):o.jsx("span",{className:"plot-card__name",children:"???"}),a&&o.jsx("span",{className:"plot-card__badge",children:a})]}),o.jsx(Ot,{zoom:s})]})}function rv({onContinue:e,playerLabel:n,hint:t}){return o.jsxs("div",{className:"pass-device-screen",children:[o.jsxs("div",{className:"pass-device-screen__content",children:[o.jsx("div",{className:"pass-device-screen__icon",children:"🤖"}),o.jsx("h2",{className:"pass-device-screen__title",children:"请将设备交给"}),o.jsx("h1",{className:"pass-device-screen__player",children:n}),o.jsx("p",{className:"pass-device-screen__hint",children:t}),o.jsxs("button",{className:"pass-device-screen__btn",onClick:e,children:[n," 已就位，继续"]})]}),o.jsx("style",{children:sv})]})}const ov=`
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
`,sv=`
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
`;function du(e,n){const t=Pm(e,n);if(t.length===0)return n;if(t.length===1)return t[0];const a=e.players[n].position;let r=t[0],s=1/0;for(const i of t){const l=e.players[i].position,d=Math.max(Math.abs(l.row-a.row),Math.abs(l.col-a.col));d<s&&(s=d,r=i)}return r}function iv(e,n){const t=e.players[n],a=[];for(let r=-1;r<=1;r++)for(let s=-1;s<=1;s++){if(r===0&&s===0)continue;const i=t.position.row+r,l=t.position.col+s;if(i<0||i>=e.map.height||l<0||l>=e.map.width)continue;const d={row:i,col:l};e.mines.some(u=>ve(u.position,d))||a.push(d)}return a}function Rr(e,n){for(const t of n)e({type:"ADD_LOG",message:t})}function ls(){const{state:e,getCard:n}=Me(),{phase:t,currentTiming:a,turnOrder:r,pendingDamage:s,pendingArmorChoice:i}=e;if(t!=="action_seg1"&&t!=="action_seg2")return null;const l=t==="action_seg1"?1:2;return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"action-hud",style:s||i?{display:"none"}:void 0,children:[a==="movement"&&o.jsx(lv,{seg:l,turnOrder:r,getCard:n},`mov-${l}`),(a==="ranged"||a==="melee")&&o.jsx(dv,{seg:l,getCard:n},`combat-${l}-${a}`),a==="special"&&o.jsx(pv,{seg:l,turnOrder:r,getCard:n},`special-${l}`),o.jsx("style",{children:bi})]}),s&&o.jsxs(o.Fragment,{children:[o.jsx(fv,{pendingDamage:s,getCard:n}),o.jsx("style",{children:bi})]}),i&&o.jsxs(o.Fragment,{children:[o.jsx(mv,{pendingArmorChoice:i,getCard:n}),o.jsx("style",{children:bi})]})]})}function lv({seg:e,turnOrder:n,getCard:t}){const{state:a,dispatch:r,aiConfig:s,isOnline:i,localPlayerId:l,currentTurnPlayerId:d}=Me(),{map:u,pendingDamage:f,pendingArmorChoice:m,playerIds:g}=a,[h,x]=k.useState(new Set),[p,_]=k.useState(null),[y,b]=k.useState([]),[v,I]=k.useState(null),[S,C]=k.useState("N"),w=k.useRef(!1),N=new Map;for(const A of g){const B=a.players[A],P=q.find(F=>F.id===B.unitId);N.set(A,Ph(B,e,t,P.movement))}k.useEffect(()=>{if(!(p!==null||v!==null)&&!w.current&&!(f||m)){if(i&&l){if(d!==l)return;if(N.get(l))_(l);else{const A=a.players[l],B=e===1?A.plotSeg1:A.plotSeg2;if(!B)r({type:"ADD_LOG",message:`  ${Ne(l)} 未配置行动卡，跳过`});else{const P=t(B.defId);P&&P.actionType==="movement"&&r({type:"ADD_LOG",message:`  ${Ne(l)}【${P.nameCn}】无法发动移动`})}w.current=!0,r({type:"ADVANCE_TIMING"})}return}for(const A of n)if(!h.has(A))if(N.get(A)){_(A);return}else{const B=a.players[A],P=e===1?B.plotSeg1:B.plotSeg2;if(!P)r({type:"ADD_LOG",message:`  ${Ne(A)} 未配置行动卡，跳过`});else{const F=t(P.defId);F&&F.actionType==="movement"&&r({type:"ADD_LOG",message:`  ${Ne(A)}【${F.nameCn}】无法发动移动`})}x(F=>new Set([...F,A]));return}w.current=!0,r({type:"ADVANCE_TIMING"})}},[h,p,v,f,m,d]),k.useEffect(()=>{if(!p){b([]);return}const A=a.players[p],B=g.filter(Q=>Q!==p).map(Q=>a.players[Q].position),P=q.find(Q=>Q.id===A.unitId),F=fn(A,t,"movement"),G=ko(A,e,t,F)||P.movement,X=Es(u,A.position,G,B,F,A.facing);b(X.map(Q=>Q.pos))},[p,a.players,u,e]),k.useEffect(()=>{if(!p||i&&l&&p!==l||!Ae(s,p))return;const B=Pr(s,p),P=setTimeout(()=>{const F=$x(a,p,e,t,B);F&&(Rr(r,F.reasoning),r({type:"MOVE_UNIT",playerId:p,to:F.pos,path:F.path,finalFacing:F.finalFacing})),x(G=>new Set([...G,p])),_(null),b([])},800);return()=>clearTimeout(P)},[p]);function z(A,B){if(!p||Ae(s,p)||!y.some(G=>ve(G,A)))return;let P=B;if(!P){const G=a.players[p],X=g.filter(de=>de!==p).map(de=>a.players[de].position),Q=q.find(de=>de.id===G.unitId),se=fn(G,t,"movement"),le=ko(G,e,t,se)||Q.movement;P=Ds(u,G.position,G.facing,A,le,X,se)}const F=a.players[p];I({playerId:p,to:A,path:(P==null?void 0:P.path)??[]}),C(F.facing),b([]),_(null)}function E(){v&&(r({type:"MOVE_UNIT",playerId:v.playerId,to:v.to,path:v.path,finalFacing:S}),x(A=>new Set([...A,v.playerId])),I(null),i&&(w.current=!0,r({type:"ADVANCE_TIMING"})))}if(i&&l&&d&&d!==l&&!p&&!v)return o.jsx("div",{className:"action-hud__panel action-hud__panel--waiting",children:o.jsxs("span",{className:"action-hud__hint",children:["等待 ",Ne(d)," 行动中…"]})});const J=n.every(A=>!N.get(A)||h.has(A));if(!i&&J&&p===null&&v===null||i&&w.current&&p===null&&v===null)return null;if(v!==null){const A=Ne(v.playerId);return o.jsxs("div",{className:"action-hud__panel",children:[o.jsx("span",{className:"action-hud__mover",children:A}),o.jsx("span",{className:"action-hud__hint",children:"选择移动结束后的机头方向"}),o.jsx(Cc,{currentFacing:S,onSelectFacing:C}),o.jsx("button",{className:"action-hud__skip-btn",onClick:E,children:"确认移动"})]})}const D=p?Ae(s,p):!1,$=p?Ne(p):"";if(D)return o.jsxs("div",{className:"action-hud__panel action-hud__panel--ai-thinking",children:[o.jsxs("span",{className:"action-hud__mover",children:[$," (AI)"]}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__hint",children:"思考中…"})]});const L=p?a.players[p]:null,K=p&&L?fn(L,t,"movement"):null,M=L?q.find(A=>A.id===L.unitId):null,V=p&&L&&M?ko(L,e,t,K??void 0)||M.movement:0,R=p?g.filter(A=>A!==p).map(A=>a.players[A].position):[];return o.jsxs(o.Fragment,{children:[p&&L&&o.jsx(cv,{reachable:y,map:u,from:L.position,fromFacing:L.facing,movementValue:V,blockedPositions:R,aux:K??void 0,onCellClick:z}),o.jsx("div",{className:"action-hud__panel",children:p?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"action-hud__mover",children:$}),o.jsx("span",{className:"action-hud__hint",children:"选择目标格（步数须用尽；点击选择路径）"}),(K==null?void 0:K.vernier)&&o.jsx("span",{className:"action-hud__aux-badge",title:"地形移动消耗-1，高低差消耗-1",children:"⚙ 喷射推进器"}),(K==null?void 0:K.wheel)&&o.jsx("span",{className:"action-hud__aux-badge",title:"移动力+2",children:"⚙ 滑轮"})]}):o.jsx("span",{className:"action-hud__hint",children:"计算移动路径中…"})})]})}function Cc({currentFacing:e,onSelectFacing:n,disabledFacing:t}){const a=[{facing:"N",label:"↑N"},{facing:"E",label:"E→"},{facing:"S",label:"↓S"},{facing:"W",label:"←W"}];return o.jsxs("div",{className:"facing-compass",title:"调整机头朝向",children:[o.jsx("span",{className:"facing-compass__label",children:"机头"}),a.map(({facing:r,label:s})=>{const i=r===t;return o.jsx("button",{className:["facing-compass__btn",e===r?"facing-compass__btn--active":"",i?"facing-compass__btn--disabled":""].join(" ").trim(),onClick:()=>{i||n(r)},disabled:i,title:i?"当前规则下不可选":`朝${r}方`,children:s},r)})]})}function cv({reachable:e,map:n,from:t,fromFacing:a,movementValue:r,blockedPositions:s,aux:i,onCellClick:l}){const d=Os(),u=k.useRef({allPaths:[],selectedIdx:0,hoveredPos:null}),[f,m]=k.useState(0),g=()=>m(x=>x+1);k.useEffect(()=>{document.querySelectorAll(".board-cell--path-ghost").forEach(I=>I.classList.remove("board-cell--path-ghost"));const{allPaths:x,selectedIdx:p,hoveredPos:_}=u.current;if(!_||x.length===0)return;const y=x[p];if(!y)return;const b=y.path.slice(0,-1);for(const I of b){const S=document.querySelector(`.board-cell[data-row="${I.row}"][data-col="${I.col}"]`);S==null||S.classList.add("board-cell--path-ghost")}const v=document.querySelector(`.board-cell[data-row="${_.row}"][data-col="${_.col}"]`);return v&&(v.dataset.pathLabel=x.length>1?`${p+1}/${x.length}`:""),()=>{document.querySelectorAll(".board-cell--path-ghost").forEach(I=>I.classList.remove("board-cell--path-ghost")),v&&delete v.dataset.pathLabel}},[f]),k.useEffect(()=>{const x=[];document.querySelectorAll(".board-cell--reachable").forEach(p=>{p.classList.remove("board-cell--reachable")});for(const p of e){const _=document.querySelector(`.board-cell[data-row="${p.row}"][data-col="${p.col}"]`);if(!_)continue;_.classList.add("board-cell--reachable");const y=()=>{const{allPaths:D,selectedIdx:$}=u.current;l(p,D[$]??null)},b=()=>{const D=Io(n,t,a,p,r,s,i);u.current={allPaths:D,selectedIdx:0,hoveredPos:p},g()},v=()=>{u.current={allPaths:[],selectedIdx:0,hoveredPos:null},g()},I=D=>{const{allPaths:$,selectedIdx:L}=u.current;if($.length<=1)return;D.preventDefault();const K=D.deltaY>0?1:-1;u.current={...u.current,selectedIdx:(L+K+$.length)%$.length},g()};let S=null,C=0,w=0,N=!1;const z=D=>{if(C=D.touches[0].clientX,w=D.touches[0].clientY,N=!1,d){const{hoveredPos:$}=u.current;if($&&$.row===p.row&&$.col===p.col)return;const L=Io(n,t,a,p,r,s,i);u.current={allPaths:L,selectedIdx:0,hoveredPos:p},g(),D.preventDefault();return}S=setTimeout(()=>{N=!0;const $=Io(n,t,a,p,r,s,i);u.current={allPaths:$,selectedIdx:0,hoveredPos:p},g()},400)},E=()=>{S&&(clearTimeout(S),S=null),N&&!d&&(u.current={allPaths:[],selectedIdx:0,hoveredPos:null},g()),N=!1},J=D=>{if(d||!N)return;const $=D.touches[0].clientX-C,L=D.touches[0].clientY-w;if(Math.abs($)>40||Math.abs(L)>40){const{allPaths:K,selectedIdx:M}=u.current;if(K.length<=1)return;const V=Math.abs($)>Math.abs(L)?$>0?1:-1:L>0?1:-1;u.current={...u.current,selectedIdx:(M+V+K.length)%K.length},g(),C=D.touches[0].clientX,w=D.touches[0].clientY}};_.addEventListener("click",y),_.addEventListener("mouseenter",b),_.addEventListener("mouseleave",v),_.addEventListener("wheel",I,{passive:!1}),_.addEventListener("touchstart",z,{passive:!0}),_.addEventListener("touchend",E),_.addEventListener("touchcancel",E),_.addEventListener("touchmove",J,{passive:!0}),x.push(()=>{S&&clearTimeout(S),_.removeEventListener("click",y),_.removeEventListener("mouseenter",b),_.removeEventListener("mouseleave",v),_.removeEventListener("wheel",I),_.removeEventListener("touchstart",z),_.removeEventListener("touchend",E),_.removeEventListener("touchcancel",E),_.removeEventListener("touchmove",J)})}return()=>{document.querySelectorAll(".board-cell--reachable").forEach(p=>p.classList.remove("board-cell--reachable")),document.querySelectorAll(".board-cell--path-ghost").forEach(p=>p.classList.remove("board-cell--path-ghost")),document.querySelectorAll(".board-cell[data-path-label]").forEach(p=>delete p.dataset.pathLabel),u.current={allPaths:[],selectedIdx:0,hoveredPos:null},x.forEach(p=>p())}},[e,n,t,a,r,s,i,l]);const h=k.useCallback(()=>{const{allPaths:x,selectedIdx:p}=u.current;x.length<=1||(u.current={...u.current,selectedIdx:(p+1)%x.length},g())},[]);if(d){const{allPaths:x,hoveredPos:p}=u.current;if(p&&x.length>1)return o.jsxs("button",{className:"move-cycle-btn",onClick:h,style:{position:"fixed",bottom:80,left:"50%",transform:"translateX(-50%)",zIndex:600,padding:"10px 24px",background:"rgba(22, 33, 62, 0.95)",border:"1px solid #ffea00",borderRadius:8,color:"#ffea00",fontFamily:"var(--font-mono)",fontSize:"0.85rem",fontWeight:"bold",cursor:"pointer",minHeight:44,backdropFilter:"blur(4px)"},children:["切换路径 (",u.current.selectedIdx+1,"/",x.length,")"]})}return null}function Wm({reachable:e,onCellClick:n}){return k.useEffect(()=>(document.querySelectorAll(".board-cell").forEach(a=>{a.classList.remove("board-cell--reachable"),a.onclick=null}),e.forEach(a=>{const r=document.querySelector(`.board-cell[data-row="${a.row}"][data-col="${a.col}"]`);r&&(r.classList.add("board-cell--reachable"),r.onclick=()=>n(a))}),()=>{document.querySelectorAll(".board-cell--reachable").forEach(a=>{a.classList.remove("board-cell--reachable"),a.onclick=null})}),[e,n]),null}function dv({seg:e,getCard:n}){const{state:t,dispatch:a,aiConfig:r,isOnline:s,localPlayerId:i,currentTurnPlayerId:l}=Me(),{map:d,turnOrder:u,currentTiming:f,pendingDamage:m,pendingArmorChoice:g}=t,[h,x]=k.useState(new Set),[p,_]=k.useState(null),[y,b]=k.useState(null),v=k.useRef(!1),[I,S]=k.useState(null);k.useEffect(()=>{p&&S(du(t,p))},[p]);const[C,w]=k.useState(!1),[N,z]=k.useState([]),[E,J]=k.useState(!1),D=f==="ranged"?"ranged":"melee",$=D==="ranged"?"射击时机":"近战时机";if(k.useEffect(()=>{if(p===null&&!v.current&&!(m||g)){if(s&&i){if(l!==i)return;const re=t.players[i];if(Ln(re,e,D,n))_(i),w(!1),J(!1),z([]);else{const Be=e===1?re.plotSeg1:re.plotSeg2;if(Be){const Ve=n(Be.defId);Ve&&(D==="ranged"&&Ve.actionType==="ranged"||D==="melee"&&(Ve.actionType==="melee"||Ve.actionType==="charge"))&&a({type:"ADD_LOG",message:`  ${Ne(i)}【${Ve.nameCn}】条件不满足，无法发动`})}v.current=!0,a({type:"ADVANCE_TIMING"})}return}for(const re of u){if(h.has(re))continue;const ee=t.players[re];if(!Ln(ee,e,D,n)){const Ve=e===1?ee.plotSeg1:ee.plotSeg2;if(Ve){const je=n(Ve.defId);je&&(D==="ranged"&&je.actionType==="ranged"||D==="melee"&&(je.actionType==="melee"||je.actionType==="charge"))&&a({type:"ADD_LOG",message:`  ${Ne(re)}【${je.nameCn}】条件不满足，无法发动`})}x(je=>new Set([...je,re]));return}_(re),w(!1),J(!1),z([]);return}v.current=!0,a({type:"ADVANCE_TIMING"})}},[h,p,m,g,n,l]),k.useEffect(()=>{if(!p||m||g||s&&i&&p!==i||!Ae(r,p))return;const ee=Pr(r,p),Be=setTimeout(()=>{const Ve=Ax(t,p,e,D,n,ee);if(Rr(a,Ve.reasoning),Ve.shouldAttack){const je=t.players[p],Jt=Ln(je,e,D,n),pf=(Jt==null?void 0:Jt.actionType)==="charge"?"RESOLVE_CHARGE":D==="ranged"?"RESOLVE_RANGED":"RESOLVE_MELEE";a({type:pf,attackerId:p,targetId:Ve.targetId})}else{const je=t.players[p],Jt=Ln(je,e,D,n);a({type:"ADD_LOG",message:`  ${Ne(p)} 放弃发动${Jt?`【${Jt.nameCn}】`:$}`})}x(je=>new Set([...je,p])),_(null),w(!1),J(!1),z([])},800);return()=>clearTimeout(Be)},[p,m,g]),s&&i&&l&&l!==i&&!p)return o.jsx("div",{className:"action-hud__panel action-hud__panel--waiting",children:o.jsxs("span",{className:"action-hud__hint",children:["等待 ",Ne(l)," 行动中…"]})});if(!p)return null;const L=t.players[p],K=Pm(t,p),M=I??du(t,p),V=t.players[M],R=f==="melee"?fn(L,n,"melee"):{vernier:!1,moveSensor:!1},A=Ln(L,e,D,n),B=(A==null?void 0:A.actionType)==="charge",P=Ae(r,p),F=K.filter(re=>{const ee=t.players[re];if(B&&D==="melee"){const Be=q.find(je=>je.id===L.unitId),Ve=q.find(je=>je.id===ee.unitId);return qo(L,ee,e,d,Be,Ve,n).canAttack}return Qo(L,ee,e,D,d,n).canAttack});let G;if(B&&D==="melee"){const re=q.find(Be=>Be.id===L.unitId),ee=q.find(Be=>Be.id===V.unitId);G=qo(L,V,e,d,re,ee,n)}else G=Qo(L,V,e,D,d,n);const X=q.find(re=>re.id===L.unitId),Q=q.find(re=>re.id===V.unitId);function se(){if(!G.canAttack||!p)return;a({type:B?"RESOLVE_CHARGE":D==="ranged"?"RESOLVE_RANGED":"RESOLVE_MELEE",attackerId:p,targetId:M}),b(`${X.nameCn} → ${Q.nameCn}：造成 ${G.damage} 伤害`),x(ee=>new Set([...ee,p])),_(null),w(!1),J(!1),z([]),s&&(v.current=!0,a({type:"ADVANCE_TIMING"}))}function le(){if(!p)return;const re=Ln(t.players[p],e,D,n);a({type:"ADD_LOG",message:`  ${Ne(p)} 放弃发动${re?`【${re.nameCn}】`:$}`}),b(null),x(ee=>new Set([...ee,p])),_(null),w(!1),J(!1),z([]),s&&(v.current=!0,a({type:"ADVANCE_TIMING"}))}function de(){if(!p||C)return;const re=Km(d,L.position,[V.position]);z(re),J(!0)}function vn(re){!p||!E||(a({type:"MELEE_SENSOR_MOVE",playerId:p,to:re}),w(!0),J(!1),z([]))}function zn(){J(!1),z([])}const $a=Ne(p),Kt=G.card?B?`【${G.card.nameCn}】突击值 ${X.assault} vs 防御${Q.assaultDef}`:`【${G.card.nameCn}】射程 ${G.card.rangeMin??"—"}–${G.card.rangeMax??"—"}`:null,Zn=D==="melee"&&R.moveSensor&&!C;return P?o.jsxs("div",{className:"action-hud__panel action-hud__panel--ai-thinking",children:[o.jsxs("span",{className:"action-hud__mover",children:[Ne(p)," (AI)"]}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__hint",children:"思考中…"})]}):o.jsxs(o.Fragment,{children:[E&&o.jsx(Wm,{reachable:N,onCellClick:vn}),!E&&o.jsx(uv,{validTargets:F.map(re=>({playerId:re,pos:t.players[re].position})),selectedTargetId:M,onSelectTarget:S}),o.jsxs("div",{className:"action-hud__panel action-hud__panel--combat",children:[o.jsx("span",{className:"action-hud__mover",children:$a}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__timing-label",children:$}),R.moveSensor&&o.jsxs("span",{className:`action-hud__aux-badge ${C?"action-hud__aux-badge--used":""}`,title:"近战前可移动1格",children:["⚙ 移动传感器",C?"（已使用）":""]}),R.vernier&&o.jsx("span",{className:"action-hud__aux-badge",title:"地形消耗-1，高低差-1",children:"⚙ 喷射推进器"}),(D==="melee"||D==="ranged"&&vc(G.card))&&o.jsx(Cc,{currentFacing:L.facing,onSelectFacing:re=>a({type:"ADJUST_FACING",playerId:p,facing:re})}),G.card?o.jsxs("span",{className:"action-hud__card-info",children:[Kt,G.card.damage!==void 0&&o.jsxs("span",{className:"action-hud__dmg",children:[" 伤害 ",G.card.damage]})]}):o.jsxs("span",{className:"action-hud__hint",children:["无",D==="ranged"?"射击":"近战","牌"]}),o.jsx("span",{className:`action-hud__validity ${G.canAttack?"action-hud__validity--ok":"action-hud__validity--no"}`,children:G.canAttack?B?`距离 ${G.dist} ✓ → 造成 ${G.damage} 伤 / 自机反伤 ${G.counterDamage}`:`距离 ${G.dist} ✓ → ${G.damage} 伤`:G.card?G.reason:""}),y&&o.jsx("span",{className:"action-hud__result",children:y}),E?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"action-hud__hint",children:"点击高亮格移动（传感器），或"}),o.jsx("button",{className:"action-hud__skip-btn",onClick:zn,children:"取消移动"})]}):o.jsxs(o.Fragment,{children:[Zn&&o.jsx("button",{className:"action-hud__sensor-btn",onClick:de,title:"移动传感器：攻击前可移动1格",children:"传感器移动"}),F.length>1&&o.jsxs("span",{className:"action-hud__target-hint",children:["目标: ",Ne(M)," (",Q.nameCn,") — 点击地图切换目标 (",F.length,"个可选)"]}),o.jsx("button",{className:"action-hud__attack-btn",onClick:se,disabled:!G.canAttack,title:G.canAttack?`攻击 ${Q.nameCn}`:G.reason,children:"执行攻击"}),o.jsxs("button",{className:"action-hud__skip-btn",onClick:le,children:["跳过",D==="ranged"?"射击":"近战"]})]})]})]})}function uv({validTargets:e,selectedTargetId:n,onSelectTarget:t}){return k.useEffect(()=>{document.querySelectorAll(".board-cell--target, .board-cell--target-alt").forEach(a=>{a.classList.remove("board-cell--target","board-cell--target-alt"),a.onclick=null});for(const{playerId:a,pos:r}of e){const s=document.querySelector(`.board-cell[data-row="${r.row}"][data-col="${r.col}"]`);s&&(a===n?s.classList.add("board-cell--target"):(s.classList.add("board-cell--target-alt"),s.onclick=i=>{i.stopPropagation(),t(a)}))}return()=>{document.querySelectorAll(".board-cell--target, .board-cell--target-alt").forEach(a=>{a.classList.remove("board-cell--target","board-cell--target-alt"),a.onclick=null})}},[e,n,t]),null}function pv({seg:e,turnOrder:n,getCard:t}){const{state:a,dispatch:r,aiConfig:s,isOnline:i,localPlayerId:l,currentTurnPlayerId:d}=Me(),{map:u,pendingDamage:f,pendingArmorChoice:m}=a,[g,h]=k.useState(new Set),[x,p]=k.useState(null),[_,y]=k.useState([]),[b,v]=k.useState("real"),[I,S]=k.useState([]),C=k.useRef(!1);if(k.useEffect(()=>{if(x===null&&!C.current&&!(f||m)){if(i&&l){if(d!==l)return;const V=a.players[l],R=e===1?V.plotSeg1:V.plotSeg2,A=R?t(R.defId):null;!A||A.actionType!=="mine"&&A.actionType!=="special"&&A.actionType!=="aim"?(C.current=!0,r({type:"ADVANCE_TIMING"})):p(l);return}for(const V of n){if(g.has(V))continue;const R=a.players[V],A=e===1?R.plotSeg1:R.plotSeg2,B=A?t(A.defId):null;if(!B||B.actionType!=="mine"&&B.actionType!=="special"&&B.actionType!=="aim"){h(P=>new Set([...P,V]));return}p(V);return}C.current=!0,r({type:"ADVANCE_TIMING"})}},[g,x,f,m,t,d]),k.useEffect(()=>{if(!x){y([]),S([]),v("real");return}const V=a.players[x],R=e===1?V.plotSeg1:V.plotSeg2,A=R?t(R.defId):null;if(A&&A.actionType==="mine"){const B=iv(a,x);y(B)}else y([]),S([]),v("real")},[x,u,e,a,t]),k.useEffect(()=>{if(!x||f||m||i&&l&&x!==l||!Ae(s,x))return;const R=Pr(s,x),A=setTimeout(()=>{const B=Px(a,x,e,t,R);B&&(Rr(r,B.reasoning),B.actionType==="mine"?r({type:"PLACE_MINE",playerId:x,placements:B.placements,damage:B.damage}):B.actionType==="aim"&&r({type:"ADJUST_FACING",playerId:x,facing:B.facing})),h(P=>new Set([...P,x])),p(null)},800);return()=>clearTimeout(A)},[x,f,m]),i&&l&&d&&d!==l&&!x)return o.jsx("div",{className:"action-hud__panel action-hud__panel--waiting",children:o.jsxs("span",{className:"action-hud__hint",children:["等待 ",Ne(d)," 行动中…"]})});if(!x)return null;const w=a.players[x],N=e===1?w.plotSeg1:w.plotSeg2,z=N?t(N.defId):null,E=Ne(x),J=I.filter(V=>V.kind==="real").length,D=I.filter(V=>V.kind==="dummy").length,$=Ae(s,x);function L(){S([]),v("real"),h(V=>new Set([...V,x])),p(null),i&&(C.current=!0,r({type:"ADVANCE_TIMING"}))}function K(V){!x||!z||z.actionType!=="mine"||_.some(R=>ve(R,V))&&S(R=>R.find(P=>ve(P.position,V))?R.filter(P=>!ve(P.position,V)):R.length>=4||R.filter(P=>P.kind===b).length>=2?R:[...R,{position:V,kind:b}])}function M(){!x||!z||z.actionType!=="mine"||I.length!==4||J!==2||D!==2||(r({type:"PLACE_MINE",playerId:x,placements:I,damage:z.damage||3}),S([]),v("real"),h(V=>new Set([...V,x])),p(null),i&&(C.current=!0,r({type:"ADVANCE_TIMING"})))}return $?o.jsxs("div",{className:"action-hud__panel action-hud__panel--ai-thinking",children:[o.jsxs("span",{className:"action-hud__mover",children:[E," (AI)"]}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__hint",children:"思考中…"})]}):o.jsxs(o.Fragment,{children:[_.length>0&&o.jsx(Wm,{reachable:_,onCellClick:K}),o.jsxs("div",{className:"action-hud__panel action-hud__panel--special",children:[o.jsx("span",{className:"action-hud__mover",children:E}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__timing-label",children:"特殊时机"}),o.jsx("span",{className:"action-hud__card-info",children:z?`【${z.nameCn}】效果`:"（无）"}),(z==null?void 0:z.actionType)==="mine"?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"action-hud__facing-row",children:[o.jsxs("button",{className:`action-hud__facing-btn${b==="real"?" is-selected":""}`,onClick:()=>v("real"),disabled:J>=2,children:["机雷 ",J,"/2"]}),o.jsxs("button",{className:`action-hud__facing-btn${b==="dummy"?" is-selected":""}`,onClick:()=>v("dummy"),disabled:D>=2,children:["替身雷 ",D,"/2"]})]}),o.jsxs("span",{className:"action-hud__hint",children:["点击高亮格放置 ",b==="real"?"机雷":"替身雷","，再次点击已选格可取消。"]}),o.jsxs("span",{className:"action-hud__hint",children:["当前已选 ",I.length,"/4 个指示物，需放满真雷2个与替身雷2个。"]}),o.jsx("button",{className:"action-hud__attack-btn",onClick:M,disabled:I.length!==4||J!==2||D!==2,children:"确认布雷"})]}):(z==null?void 0:z.actionType)==="aim"?o.jsxs(o.Fragment,{children:[o.jsx(Cc,{currentFacing:w.facing,onSelectFacing:V=>r({type:"ADJUST_FACING",playerId:x,facing:V})}),o.jsx("span",{className:"action-hud__hint",children:"可先调整朝向，然后"})]}):o.jsx("span",{className:"action-hud__hint",children:"暂无此牌效果支持，请"}),o.jsx("button",{className:"action-hud__skip-btn",onClick:L,children:(z==null?void 0:z.actionType)==="aim"?"确认":"跳过"})]})]})}function mv({pendingArmorChoice:e,getCard:n}){const{dispatch:t,aiConfig:a,isOnline:r,localPlayerId:s}=Me(),{zoom:i,getZoomHandlers:l}=Lt(),{targetId:d,damage:u,source:f,handCards:m,plotCards:g}=e,[h,x]=k.useState(null),[p,_]=k.useState(new Set),y=r&&s&&d!==s,b=!y&&Ae(a,d);k.useEffect(()=>{b?x(d):r||x(null)},[d,b,r]),k.useEffect(()=>{if(!b||y)return;const E=Vx(u,m,g),J=setTimeout(()=>{Rr(t,E.reasoning),t({type:"CONFIRM_ARMOR_CHOICE",playerId:d,selectedInstanceIds:E.value})},500);return()=>clearTimeout(J)},[d,b,y,u,m,g,t]);function v(E){_(J=>{const D=new Set(J);return D.has(E)?D.delete(E):D.add(E),D})}function I(){t({type:"CONFIRM_ARMOR_CHOICE",playerId:d,selectedInstanceIds:[...p]})}function S(){t({type:"CONFIRM_ARMOR_CHOICE",playerId:d,selectedInstanceIds:[]})}const C=[...p].reduce((E,J)=>{const D=g.find(L=>L.instanceId===J);if(D)return E+D.armorValue;const $=m.find(L=>L.instanceId===J);return E+(($==null?void 0:$.armorValue)??0)},0),w=Math.max(0,u-C),N=f==="ranged"?"射击":f==="charge"?"突击":f==="mine"?"机雷":"近战",z=Ne(d);return y?o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"damage-pass-overlay",children:o.jsxs("div",{className:"damage-pass-card",children:[o.jsx("p",{className:"damage-pass__eyebrow",children:"— 装甲选择 —"}),o.jsx("h2",{className:"damage-pass__title",children:"等待对手选择"}),o.jsx("div",{className:"damage-pass__player",children:z}),o.jsxs("p",{className:"damage-pass__context",children:[z," 正在决定是否激活装甲牌…"]}),o.jsx("div",{className:"damage-pass__spinner",children:"⏳"})]})}),o.jsx("style",{children:cs})]}):!r&&!b&&d!==h?o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"damage-pass-overlay",children:o.jsxs("div",{className:"damage-pass-card",children:[o.jsx("p",{className:"damage-pass__eyebrow",children:"— 装甲选择 —"}),o.jsx("h2",{className:"damage-pass__title",children:"请将设备交给"}),o.jsx("div",{className:"damage-pass__player",children:z}),o.jsxs("p",{className:"damage-pass__context",children:["受到 ",u," 点",N,"伤害，可激活装甲牌减伤"]}),o.jsxs("button",{className:"damage-pass__btn",onClick:()=>x(d),children:[z," 已准备"]})]})}),o.jsx("style",{children:cs})]}):o.jsxs("div",{className:"action-hud",children:[o.jsxs("div",{className:"action-hud__panel action-hud__panel--damage",children:[o.jsxs("div",{className:"damage-panel__header",children:[o.jsx("span",{className:"damage-panel__title",children:"🛡 装甲激活"}),o.jsx("span",{className:"damage-panel__player",children:z}),o.jsxs("span",{className:"damage-panel__remaining",children:["受到 ",o.jsx("strong",{children:u})," 点",N,"伤害",C>0&&o.jsxs(o.Fragment,{children:[" → 减免后 ",o.jsx("strong",{className:"armor-reduced",children:w})," 点"]})]})]}),o.jsx("div",{className:"damage-panel__hint",children:f==="ranged"?"手牌中的装甲牌可防御射击伤害；准备区中的装甲牌可防御任意伤害。选择要激活的装甲牌，或跳过。":"准备区中的装甲牌可防御任意伤害（含突击/近战）。选择要激活的装甲牌，或跳过。"}),o.jsxs("div",{className:"damage-panel__zones",children:[m.length>0&&o.jsxs("div",{className:"damage-zone",children:[o.jsx("span",{className:"damage-zone__label",children:"手牌装甲"}),o.jsx("div",{className:"damage-zone__cards",children:m.map(E=>{const J=n(E.defId),D=p.has(E.instanceId),$=l((J==null?void 0:J.frontImageId)??"");return o.jsxs("button",{className:`damage-card-btn ${D?"damage-card-btn--selected":""}`,onClick:()=>v(E.instanceId),...$,children:[o.jsx("span",{className:"damage-card-btn__name",children:(J==null?void 0:J.nameCn)??E.defId}),o.jsxs("span",{className:"armor-value-badge",children:["-",E.armorValue]})]},E.instanceId)})})]}),g.length>0&&o.jsxs("div",{className:"damage-zone",children:[o.jsx("span",{className:"damage-zone__label",children:"准备区装甲"}),o.jsx("div",{className:"damage-zone__cards",children:g.map(E=>{const J=n(E.defId),D=p.has(E.instanceId),$=l((J==null?void 0:J.frontImageId)??"");return o.jsxs("button",{className:`damage-card-btn ${D?"damage-card-btn--selected":""}`,onClick:()=>v(E.instanceId),...$,children:[o.jsx("span",{className:"damage-card-btn__name",children:(J==null?void 0:J.nameCn)??E.defId}),o.jsxs("span",{className:"damage-zone__sub",children:["主要阶段",E.seg]}),o.jsxs("span",{className:"armor-value-badge",children:["-",E.armorValue]})]},E.instanceId)})})]})]}),o.jsxs("div",{className:"damage-panel__actions",children:[o.jsxs("button",{className:"action-hud__attack-btn",onClick:I,disabled:p.size===0,children:["激活选中装甲 (-",C," 点)"]}),o.jsx("button",{className:"action-hud__skip-btn",onClick:S,children:"不使用装甲"})]})]}),o.jsx(Ot,{zoom:i})]})}function fv({pendingDamage:e,getCard:n}){const{state:t,dispatch:a,aiConfig:r,isOnline:s,localPlayerId:i}=Me(),{targetId:l,remaining:d,selectedInstanceIds:u}=e,{zoom:f,getZoomHandlers:m}=Lt(),[g,h]=k.useState(null),[x,p]=k.useState(!1),_=t.players[l];$n(_);const y=u.length===0,b=!!e.attackerId&&y&&!e.attackerDesignatedCardId,v=b?e.attackerId:l,I=Ne(v),S=s&&i&&v!==i,C=!S&&Ae(r,v),w=Pr(r,v),N=!s&&!C&&v!==g;k.useEffect(()=>{C?h(v):s||h(null)},[v,C,s]),k.useEffect(()=>{if(!C||S||d<=0)return;const R=t.players[l],A=wa(R),B=t.playerIds.filter(G=>G!==l&&t.teams[G]!==t.teams[l]&&!t.players[G].isDefeated),P=B.length>0?t.players[B[0]]:R,F=setTimeout(()=>{if(A.length>0){const G=Hd(e,R,n,w,b,P);Rr(a,G.reasoning),G.value?a({type:"SELECT_DAMAGE_CARD",playerId:v,instanceId:G.value}):a({type:"CONFIRM_DAMAGE_SELECTION",playerId:v})}else a({type:"CONFIRM_DAMAGE_SELECTION",playerId:v})},600);return()=>clearTimeout(F)},[d,v,C,S,t.players]),k.useEffect(()=>{if(!x)return;if(d<=0){p(!1);return}const R=t.players[l],A=wa(R),B=setTimeout(()=>{if(A.length>0){const P=t.playerIds.filter(X=>X!==l&&t.teams[X]!==t.teams[l]&&!t.players[X].isDefeated),F=P.length>0?t.players[P[0]]:R,G=Hd(e,R,n,"hard",b,F);G.value?a({type:"SELECT_DAMAGE_CARD",playerId:v,instanceId:G.value}):(a({type:"CONFIRM_DAMAGE_SELECTION",playerId:v}),p(!1))}else a({type:"CONFIRM_DAMAGE_SELECTION",playerId:v}),p(!1)},150);return()=>clearTimeout(B)},[x,d,t.players]);function z(R){a({type:"SELECT_DAMAGE_CARD",playerId:v,instanceId:R})}function E(){p(!0)}if(S)return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"damage-pass-overlay",children:o.jsxs("div",{className:"damage-pass-card",children:[o.jsx("p",{className:"damage-pass__eyebrow",children:"— 伤害分配 —"}),o.jsx("h2",{className:"damage-pass__title",children:"等待对手选择"}),o.jsx("div",{className:"damage-pass__player",children:I}),o.jsx("p",{className:"damage-pass__context",children:b?"【瞄准加成】攻方正在指定要摧毁的卡牌…":`${I} 正在选择要摧毁的 ${d} 张卡牌…`}),o.jsx("div",{className:"damage-pass__spinner",children:"⏳"})]})}),o.jsx("style",{children:cs})]});if(N)return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"damage-pass-overlay",children:o.jsxs("div",{className:"damage-pass-card",children:[o.jsx("p",{className:"damage-pass__eyebrow",children:"— 伤害分配 —"}),o.jsx("h2",{className:"damage-pass__title",children:"请将设备交给"}),o.jsx("div",{className:"damage-pass__player",children:I}),o.jsx("p",{className:"damage-pass__context",children:b?"【瞄准加成】攻方有权指定第一张要摧毁的卡牌":`防方选择要摧毁的 ${d} 张卡牌（可自动分配）`}),o.jsxs("button",{className:"damage-pass__btn",onClick:()=>h(v),children:[I," 已准备"]})]})}),o.jsx("style",{children:cs})]});const J=_.hand.filter(R=>!R.destroyed),D=_.plotSeg1&&!_.plotSeg1.destroyed?[_.plotSeg1]:[],$=_.plotSeg2&&!_.plotSeg2.destroyed?[_.plotSeg2]:[],L=_.auxiliary.filter(R=>!R.destroyed),K=_.deck.filter(R=>!R.destroyed),M=[];J.length>0&&M.push({label:"手牌",cards:J}),D.length>0&&M.push({label:"布局格",sublabel:"主要阶段1",cards:D}),$.length>0&&M.push({label:"布局格",sublabel:"主要阶段2",cards:$}),L.length>0&&M.push({label:"辅助区",cards:L});const V=K[0]??null;return o.jsxs("div",{className:"action-hud",children:[o.jsxs("div",{className:"action-hud__panel action-hud__panel--damage",children:[o.jsxs("div",{className:"damage-panel__header",children:[o.jsx("span",{className:"damage-panel__title",children:"⚔️ 伤害分配"}),o.jsx("span",{className:"damage-panel__player",children:b?`${I} (瞄准指定)`:I}),o.jsxs("span",{className:"damage-panel__remaining",children:["还需摧毁 ",o.jsx("strong",{children:d})," 张卡牌"]})]}),(e.destroyedBombCount??0)>0&&o.jsxs("div",{className:"damage-panel__bomb-alert",children:["💣 已选中 ",e.destroyedBombCount," 张炸弹卡，选完后将进行誘爆检查"]}),o.jsx("div",{className:"damage-panel__hint",children:b?`【瞄准加成】攻方有权指定第一张要摧毁的卡牌！可从手牌、辅助区、卡组、布局格中选择。请 ${I} 选择：`:e.source==="ranged"?"射击伤害：须先从手牌 / 布局格 / 辅助区选择卡牌破坏，不足部分自动从牌组顶破坏。":"牌组与弃牌区已耗尽，近战伤害切换为自选模式。请从手牌 / 布局格 / 辅助区选择。"}),o.jsxs("div",{className:"damage-panel__zones",children:[M.map((R,A)=>o.jsxs("div",{className:"damage-zone",children:[o.jsxs("span",{className:"damage-zone__label",children:[R.label,R.sublabel&&o.jsxs("span",{className:"damage-zone__sub",children:["（",R.sublabel,"）"]})]}),o.jsx("div",{className:"damage-zone__cards",children:R.cards.map(B=>{const P=n(B.defId),F=(P==null?void 0:P.nameCn)??B.defId,G=u.includes(B.instanceId),X=P!=null&&P.frontImageId?`/assets/${P.frontImageId}`:null;return o.jsxs("button",{className:`damage-card-btn ${G?"damage-card-btn--selected":""} ${P!=null&&P.hasBombIcon?"damage-card-btn--bomb":""}`,onClick:()=>z(B.instanceId),disabled:G,title:`${F} (${(P==null?void 0:P.actionType)??"?"})${P!=null&&P.hasBombIcon?" ⚠️ 含诱爆":""}`,...X?m(X):{},children:[o.jsx("span",{className:"damage-card-btn__name",children:F}),(P==null?void 0:P.isKaiVariant)&&o.jsx("span",{className:"damage-card-btn__det",title:"改型",children:"◆"}),(P==null?void 0:P.hasBombIcon)&&o.jsx("span",{className:"damage-card-btn__det damage-card-btn__bomb-icon",title:"诱爆卡",children:"💣"})]},B.instanceId)})})]},A)),V&&(e.source!=="ranged"||b)&&o.jsxs("div",{className:"damage-zone",children:[o.jsxs("span",{className:"damage-zone__label",children:["卡组",o.jsxs("span",{className:"damage-zone__sub",children:["（共 ",K.length," 张，正面朝下）"]})]}),o.jsx("div",{className:"damage-zone__cards",children:o.jsxs("button",{className:"damage-card-btn damage-card-btn--deck",onClick:()=>z(V.instanceId),title:"从卡组顶部翻开并摧毁 1 张（诱爆正常触发）",children:[o.jsx("span",{className:"damage-card-btn__deck-back",children:"🂠"}),o.jsx("span",{className:"damage-card-btn__name",children:"顶部 × 1"})]})})]}),V&&e.source==="ranged"&&!b&&o.jsxs("div",{className:"damage-zone",children:[o.jsxs("span",{className:"damage-zone__label",children:["卡组",o.jsxs("span",{className:"damage-zone__sub",children:["（共 ",K.length," 张）"]})]}),o.jsx("div",{className:"damage-zone__cards",children:o.jsxs("div",{className:"damage-card-btn damage-card-btn--deck",style:{opacity:.5,cursor:"default"},title:"射击伤害的牌组部分将在选完表牌后自动从顶部破坏",children:[o.jsx("span",{className:"damage-card-btn__deck-back",children:"🂠"}),o.jsx("span",{className:"damage-card-btn__name",children:"自动破坏"})]})})]})]}),o.jsx("div",{className:"damage-panel__actions",children:o.jsx("button",{className:"action-hud__skip-btn",onClick:E,disabled:x,title:"智能选择价值最低的卡牌优先破坏，剩余部分从牌组顶部自动摧毁",children:x?"自动分配中…":"智能分配剩余伤害"})})]}),o.jsx(Ot,{zoom:f})]})}const bi=`
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
`,cs=`
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
`;function gv({onBack:e}){return o.jsxs("div",{className:"rules-page",children:[o.jsxs("div",{className:"rules-page__header",children:[o.jsx("button",{className:"rules-back-btn",onClick:e,children:"← 返回"}),o.jsx("h1",{className:"rules-page__title",children:"游戏规则"}),o.jsx("span",{className:"rules-page__subtitle",children:"エムブリオマシン"})]}),o.jsxs("div",{className:"rules-page__body",children:[o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"游戏概述"}),o.jsx("p",{children:"《胚胎机器》是一款双人对战策略游戏。每位玩家控制一台战机（机体），通过秘密布置行动牌来控制机体的移动与战斗。 当对手满足任意一项败北条件时，本方获胜。"})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"准备阶段"}),o.jsxs("ol",{className:"rules-list",children:[o.jsx("li",{children:"双方各选择一台机体，机体自带专属牌组。"}),o.jsx("li",{children:"选择地图，确定双方初始出生区域（地图短边中央3格）。"}),o.jsxs("li",{children:["将各自牌组洗混，游戏开始时双方各抽取等同于本机",o.jsx("b",{children:"回避值"}),"数量的手牌。"]}),o.jsx("li",{children:"双方机体初始机头朝向对手方向（玩家1朝南，玩家2朝北）。"})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"回合流程"}),o.jsxs("div",{className:"rules-flow",children:[o.jsxs("div",{className:"rules-flow__step",children:[o.jsx("span",{className:"rules-flow__num",children:"1"}),o.jsxs("div",{children:[o.jsx("strong",{children:"抽牌阶段"}),o.jsxs("p",{children:["双方各从牌组顶抽取等同于自己机体",o.jsx("b",{children:"回避值"}),"数量的牌。若牌组耗尽，废弃区的牌重新洗混后继续抽取。"]})]})]}),o.jsxs("div",{className:"rules-flow__step",children:[o.jsx("span",{className:"rules-flow__num",children:"2"}),o.jsxs("div",{children:[o.jsx("strong",{children:"布局阶段"}),o.jsxs("p",{children:["双方各自秘密为",o.jsx("b",{children:"主要阶段1"}),"和",o.jsx("b",{children:"主要阶段2"}),"各布置一张行动牌（面朝下）， 然后将设备交给对方进行同样操作。双方确认后，翻开亮牌，进入行动阶段。"]})]})]}),o.jsxs("div",{className:"rules-flow__step",children:[o.jsx("span",{className:"rules-flow__num",children:"3"}),o.jsxs("div",{children:[o.jsx("strong",{children:"行动主要阶段1 & 主要阶段2"}),o.jsxs("p",{children:["每个段落依次经历四个时机：",o.jsx("b",{children:"移动 → 射击 → 近战 → 特殊"}),'。 每个时机内，双方按该时机的优先顺序依次行动（详见"行动顺序"）。']})]})]}),o.jsxs("div",{className:"rules-flow__step",children:[o.jsx("span",{className:"rules-flow__num",children:"4"}),o.jsxs("div",{children:[o.jsx("strong",{children:"清理阶段"}),o.jsx("p",{children:"将已布置的牌（主要阶段1→主要阶段2顺序）和手中剩余的牌全部放入废弃区，准备下一回合。"})]})]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"行动顺序与先制值"}),o.jsxs("p",{children:["每台机体有固定的",o.jsx("b",{children:"先制值（数字越大越快）"}),"。先制值高的玩家在每个时机优先行动，但不同时机的排序逻辑有所不同："]}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"移动时机："}),"先比较该段落的",o.jsx("b",{children:"移动牌面数值"}),"（移动值大的先动）；移动值相同时再比先制值。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"射击/近战/特殊时机："}),"直接按",o.jsx("b",{children:"先制值"}),"排序（高者先行动）。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"平局处理："}),"先制值相同时，玩家1优先行动。"]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"机头朝向与攻击扇区"}),o.jsxs("p",{children:["每台机体具有明确的",o.jsx("b",{children:"机头朝向"}),"（N/S/E/W），初始朝向对手方向。"]}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"攻击限制："}),"射击攻击只能对准",o.jsx("b",{children:"机体正前方（含正侧方延长线）180°扇区"}),"内的目标。目标在机体正后方时无法射击。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"移动中的转向："}),"普通移动时改变行进方向不额外消耗移动力。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"移动结束朝向："}),"普通移动完成后，可自由决定机头最终朝向。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"手动调整："}),"白兵时机开始时，参与白兵的机体可先调整朝向；部分卡牌（如瞄准）也会允许改变朝向。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"突击限制："}),"突击与部分突击衍生武器仍要求目标位于机体正面，具体以卡面文字为准。"]})]}),o.jsx("p",{className:"rules-note",children:"注：扇区边界（正侧方延长线上的格子）视为前方，可以攻击。"})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"行动时机说明"}),o.jsxs("div",{className:"rules-timing-grid",children:[o.jsxs("div",{className:"rules-timing-card",children:[o.jsx("span",{className:"rules-timing-icon",children:"🏃"}),o.jsx("strong",{children:"移动时机"}),o.jsxs("p",{children:["若该段落布局的是",o.jsx("b",{children:"移动牌"}),"，则可在地图上移动。移动时需尽可能用完移动力，且同一次移动中不能再次进入已进入过的格子。无移动牌则自动跳过。"]})]}),o.jsxs("div",{className:"rules-timing-card",children:[o.jsx("span",{className:"rules-timing-icon",children:"🎯"}),o.jsx("strong",{children:"射击时机"}),o.jsxs("p",{children:["若该段落布局的是",o.jsx("b",{children:"射击牌"}),"，可对正前方扇区内、射程范围内且视线通畅的敌方发动远程攻击。若",o.jsx("b",{children:"主要阶段1布置了瞄准牌"}),"，则主要阶段2的射击伤害额外+1。"]})]}),o.jsxs("div",{className:"rules-timing-card",children:[o.jsx("span",{className:"rules-timing-icon",children:"⚔️"}),o.jsx("strong",{children:"近战时机"}),o.jsxs("p",{children:["若该段落布局的是",o.jsx("b",{children:"近战牌"}),"，可对",o.jsx("b",{children:"相邻格（切比雪夫距离=1）"}),"的敌方发动近战攻击，无扇区限制，但仍需满足射线条件。近战结算前，只有本时机确实有白兵牌的机体可先调整朝向；主要阶段1有瞄准牌时，主要阶段2的近战伤害也+1。"]})]}),o.jsxs("div",{className:"rules-timing-card",children:[o.jsx("span",{className:"rules-timing-icon",children:"⚡"}),o.jsx("strong",{children:"特殊时机"}),o.jsxs("p",{children:[o.jsx("b",{children:"突击牌"}),"→沿当前正面直线突进，尽可能用完突击移动力；移动结束后若正面相邻有目标则发动突击。",o.jsx("b",{children:"机雷牌"}),"→在周围8格内布置隐藏指示物（机雷2、替身雷2）。",o.jsx("b",{children:"瞄准牌"}),"→此时可调整朝向，并提供后续攻击加成。"]})]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"移动规则"}),o.jsxs("p",{children:["移动时，机体从当前格出发按移动牌数值进行扩展，每进入一个格子消耗对应地形的基础代价 ",o.jsx("b",{children:"加上高度差"}),"："]}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"步数用尽："}),"只要仍存在合法下一步，就必须继续移动。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"自由转向："}),"移动途中改变前进方向不额外消耗移动力。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"不可回踏："}),"同一次移动中，不能再次进入已经进入过的格子，也不能回到起始格。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"结束朝向："}),"普通移动完成后，可自由选择机体最终朝向。"]})]}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"地形"}),o.jsx("th",{children:"基础移动代价"}),o.jsx("th",{children:"战斗效果"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"平地"}),o.jsx("td",{children:"1"}),o.jsx("td",{children:"无"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"砂地"}),o.jsx("td",{children:"1"}),o.jsx("td",{children:"无"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"废墟"}),o.jsx("td",{children:"2"}),o.jsx("td",{children:"无"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"森林"}),o.jsx("td",{children:"2"}),o.jsx("td",{children:"处于其中的机体受到射击伤害 −1（掩护）"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"高地"}),o.jsx("td",{children:"1 + 高度差*"}),o.jsx("td",{children:"可遮蔽视线（高地墙）；本身无伤害加成"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"水域"}),o.jsx("td",{children:"3"}),o.jsx("td",{children:"在其中发射能量武器时伤害 −1"})]})]})]}),o.jsx("p",{className:"rules-note",children:"* 高度差代价：进入比当前格海拔更高的地形时，额外消耗等同于高度差的移动力（例如从海拔0进入海拔2，共消耗 1+2=3 点）。下坡无额外代价。"}),o.jsx("p",{className:"rules-note",children:"注：机体不能占据对手所在的格子。机雷指示物会在各个时机结束时，若所在格有机体则翻开并结算。"})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"射程、视线与距离衰减"}),o.jsxs("p",{children:["距离使用",o.jsx("b",{children:"切比雪夫距离"}),"（8方向棋格距离：行差与列差的最大值）。 射击牌有最小射程和最大射程，目标须在此范围内。"]}),o.jsx("p",{children:"视线（LOS）检查规则："}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"森林不阻断视线，"}),"但能为处于其中的机体提供掩护（受击伤害-1）。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"高地阻断："}),"若射线上存在海拔高于攻防双方的高地格，则视线被遮挡，无法射击。"]}),o.jsx("li",{children:"其他地形（平地、砂地、废墟、水域）均不影响视线。"})]}),o.jsxs("p",{children:[o.jsx("b",{children:"距离衰减（部分武器）："}),'部分武器卡设有"最佳射程"，超出最佳射程后每多1格伤害递减（递减值见卡面），但不超过最大射程仍可开火。']})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"伤害与摧毁"}),o.jsxs("p",{children:["攻击命中后，系统计算最终伤害值，然后进入",o.jsx("b",{children:"伤害分配"}),"。伤害来源不同，分配规则不同："]}),o.jsx("p",{children:o.jsx("b",{children:"🎯 射击伤害（规则 11-2-2）："})}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"先"}),"从表面朝上的卡牌中自由选择破坏：手牌、辅助区、",o.jsx("b",{children:"已布局的牌（主要阶段1/2）"}),"。每次选1张，直至选满伤害值或表面朝上卡牌耗尽。"]}),o.jsxs("li",{children:["表面朝上卡牌不足时，",o.jsx("b",{children:"剩余伤害从牌组顶端自动破坏"}),'（防守方无法选择牌组中的特定卡牌）。也可随时点击"确认"将剩余伤害交由系统从牌组顶端自动处理。']}),o.jsxs("li",{children:[o.jsx("b",{children:"使用了瞄准牌的射击："}),"攻击方额外获得一项权利——可",o.jsx("b",{children:"指定"}),"防守方必须销毁的第一张牌（范围包括牌组）。"]})]}),o.jsx("p",{children:o.jsx("b",{children:"⚔️ 白兵/突击伤害（强制翻牌库顶）："})}),o.jsxs("ul",{className:"rules-list",children:[o.jsx("li",{children:"防守方无权选择，系统直接从牌库顶翻牌销毁，数量等于最终伤害值。"}),o.jsx("li",{children:"牌库翻完后从废弃区重洗继续。若牌组与废弃区均耗尽，剩余伤害切换为防守方自选模式（可从手牌、辅助区、已布局的牌中选择）。"})]}),o.jsx("p",{children:o.jsx("b",{children:"💣 爆弹标记诱爆："})}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:["先完成本次基础伤害，再统计其中被摧毁的",o.jsx("b",{children:"爆弹标记（💣）"}),"卡数量。"]}),o.jsx("li",{children:"之后从牌库顶逐张翻开对应数量的牌：有爆弹标记的直接摧毁并继续追加检查，无爆弹标记的放入废弃区。"}),o.jsx("li",{children:'注意：◆标记是区分"改"型变种卡的符号，与诱爆无关。'})]}),o.jsx("p",{className:"rules-note",children:"注：若牌组耗尽，继续从废弃区（重新洗混后）取牌销毁。"})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"卡牌类型"}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"类型"}),o.jsx("th",{children:"使用时机"}),o.jsx("th",{children:"说明"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"移动牌"}),o.jsx("td",{children:"移动时机"}),o.jsx("td",{children:"按牌面数值在4方向移动；移动中可自由转向，但必须尽量走满且不能重进已进入过的格子"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"射击牌"}),o.jsx("td",{children:"射击时机"}),o.jsx("td",{children:"远程攻击，需在机头前方扇区内、射程内且视线通畅；部分武器具有距离衰减"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"近战牌"}),o.jsx("td",{children:"近战时机"}),o.jsx("td",{children:"攻击相邻格（切比雪夫距离=1）的敌方，无扇区限制"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"突击牌"}),o.jsx("td",{children:"特殊时机"}),o.jsx("td",{children:"沿正面直线进行突击移动并尽量走满；结束后若正面相邻存在目标，则结算突击与反伤"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"护甲牌"}),o.jsx("td",{children:"被动防御"}),o.jsx("td",{children:"布局后，本段受到攻击时每张护甲牌抵消1点伤害"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"瞄准牌"}),o.jsx("td",{children:"攻击辅助"}),o.jsxs("td",{children:["布置于",o.jsx("b",{children:"主要阶段1"}),"时，可调整朝向，并使",o.jsx("b",{children:"主要阶段2"}),"的射击/近战/突击攻击伤害+1，且攻方可指定防守方销毁目标"]})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"机雷牌"}),o.jsx("td",{children:"特殊时机"}),o.jsx("td",{children:"在机体周围8格放置4个隐藏指示物，其中真雷2个、替身雷2个；各时机结束时若有机体停在其上，则翻开并弃置，只有真雷会造成伤害"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"特殊牌"}),o.jsx("td",{children:"—"}),o.jsx("td",{children:"以卡面说明为准；替身雷本身不是可单独布局的行动牌，而是机雷牌放出的隐藏指示物"})]})]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"胜利条件"}),o.jsx("p",{children:"每次伤害结算结束后，系统自动检查双方是否满足败北条件。满足任意一条即判败："}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"牌组耗尽："}),"所有",o.jsx("b",{children:"尚未被破坏"}),"的牌（牌库 + 手牌 + 辅助区 + 废弃区 + ",o.jsx("b",{children:"已布局的牌"}),"）总数 ≤ 3"]}),o.jsxs("li",{children:[o.jsx("b",{children:"战力耗尽："}),"所有仍能对敌方造成伤害的牌均已失去，包括",o.jsx("b",{children:"射击牌、近战牌、突击牌、机雷牌"}),"等。"]})]}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:["若对手率先满足败北条件 → ",o.jsx("b",{children:"己方获胜"})]}),o.jsxs("li",{children:["若双方同时满足 → ",o.jsx("b",{children:"平局"})]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"高级效果速查"}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"效果"}),o.jsx("th",{children:"触发条件"}),o.jsx("th",{children:"具体效果"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"瞄准"}),o.jsx("td",{children:"主要阶段1布局瞄准牌 + 主要阶段2布局攻击牌"}),o.jsxs("td",{children:["主要阶段2的射击/近战/突击伤害+1；且攻方可指定防守方",o.jsx("b",{children:"必须"}),"销毁的第一张牌"]})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"装甲"}),o.jsx("td",{children:"防守方在被攻击段落布局了护甲牌"}),o.jsx("td",{children:"每张护甲牌抵消1点最终伤害（下限为0）；已布局的装甲可在任意受伤时机启用，且可跨第1/2阶段使用"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"森林掩护"}),o.jsx("td",{children:"防守方站在森林格中被射击"}),o.jsx("td",{children:"受到的射击伤害 −1（近战/突击无此效果）"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"水域衰减"}),o.jsx("td",{children:"攻击方站在水域中使用能量武器射击"}),o.jsx("td",{children:"射击伤害 −1"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"突击冲锋"}),o.jsx("td",{children:"突击牌布局后在特殊时机选择目标"}),o.jsx("td",{children:"沿机体正面方向直线冲锋，并尽量用完突击移动力；若结束后正面相邻存在目标，则结算突击伤害与反伤"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"机雷部署"}),o.jsx("td",{children:"机雷牌布局后在特殊时机选择 4 个不重叠的周围格"}),o.jsx("td",{children:"放置 2 个真雷与 2 个替身雷隐藏指示物；各时机结束时若格上有机体则翻开并弃置，只有真雷造成机雷伤害"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"💣 爆弹诱爆"}),o.jsx("td",{children:"带爆弹标记（💣）的牌被摧毁时"}),o.jsx("td",{children:"在基础伤害结算后，从牌库顶进行诱爆检查；翻出的爆弹牌会继续连锁诱爆，非爆弹牌进入废弃区"})]})]})]})]}),o.jsxs("section",{className:"rules-section rules-section--diff",children:[o.jsx("h2",{className:"rules-section__title rules-section__title--diff",children:"⚠ 本版本与官方原版的已知差异"}),o.jsx("p",{className:"rules-note",children:"以下是当前网页版仍保留的已知差异。已在上文实现并对齐的规则，不再重复列在这里。"}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"规则项"}),o.jsx("th",{children:"本版本实现"}),o.jsx("th",{children:"官方原版规则"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"机雷机制"}),o.jsx("td",{children:"已实现隐藏指示物、真雷/替身雷各 2 个、各时机结束时翻开结算；但线上/本地共享状态下仍不能像实体局那样彻底隔离隐藏信息"}),o.jsx("td",{children:"实体原版使用实体指示物隐藏真伪，信息保密性更强"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"回避值定义"}),o.jsx("td",{children:"当前仅用于抽牌数量展示；完整原版定义仍待补全规则书正文后再核定"}),o.jsx("td",{children:"仓库内现有速查页与大会规程未直接写明完整判定流程，需要以完整规则书/FAQ正文继续确认"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"先制平局"}),o.jsx("td",{children:"先制值相同时玩家1固定优先"}),o.jsx("td",{children:"应由队伍标记物编号（チームチット番号）决定"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"对战模式"}),o.jsx("td",{children:"本机热座 1v1"}),o.jsx("td",{children:"官方支持最多 4v4 双人组队对战"})]})]})]})]}),o.jsxs("section",{className:"rules-section rules-section--diff",children:[o.jsx("h2",{className:"rules-section__title rules-section__title--diff",children:"参考资料与完整规则书译注"}),o.jsx("p",{className:"rules-note",children:"当前仓库内可直接核对的原始资料，主要包括两张速查页和一份大会规程。为了避免把二次整理文案误当成原版规则， 本页后续补充完整规则时，将优先以这些资料和后续补入的完整规则书正文为准。"}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"资料"}),o.jsx("th",{children:"当前用途"}),o.jsx("th",{children:"状态"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"速查页 1 / 2"}),o.jsx("td",{children:"核对移动、朝向、突击、伤害处理等基础流程"}),o.jsx("td",{children:"已纳入当前网页规则整理"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"大会规程 Ver.3.0"}),o.jsx("td",{children:"补充射击伤害顺序、诱爆检查、胜负判定等条文"}),o.jsx("td",{children:"已纳入当前网页规则整理"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"完整规则书正文"}),o.jsx("td",{children:"用于核定回避值、命中判定、FAQ 优先级等未完全确认事项"}),o.jsx("td",{children:"本仓库尚未收录可直接翻译的正文文本；此区块预留为后续补充入口"})]})]})]}),o.jsx("p",{className:"rules-note",children:"当前结论：项目里关于“回避值”的实现和说明仍应视为待核定项。等完整规则书正文或官方 FAQ 正文补入仓库后， 可以直接在本区块追加逐条译注，而不必再回头重做整页结构。"})]})]}),o.jsx("style",{children:hv})]})}const hv=`
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
`;function xv({onBack:e}){const[n,t]=k.useState("maps");return o.jsxs("div",{className:"data-page",children:[o.jsxs("div",{className:"data-page__header",children:[o.jsx("button",{className:"data-page__back",onClick:e,children:"← 返回"}),o.jsx("h1",{className:"data-page__title",children:"游戏资料"})]}),o.jsxs("div",{className:"data-page__tabs",children:[o.jsx("button",{className:`data-tab ${n==="maps"?"data-tab--active":""}`,onClick:()=>t("maps"),children:"地图"}),o.jsx("button",{className:`data-tab ${n==="units"?"data-tab--active":""}`,onClick:()=>t("units"),children:"机体"}),o.jsx("button",{className:`data-tab ${n==="cards"?"data-tab--active":""}`,onClick:()=>t("cards"),children:"卡牌"})]}),o.jsxs("div",{className:"data-page__content",children:[n==="maps"&&o.jsx(bv,{}),n==="units"&&o.jsx(_v,{}),n==="cards"&&o.jsx(Iv,{})]}),o.jsx("style",{children:wv})]})}const Zm={plain:"#8fbc5a",sand:"#d4b483",rubble:"#9e8f7a",forest:"#2d7a2d",water:"#4477cc",highland:"#c4955a"},Ym={plain:"平地",sand:"沙地",rubble:"瓦砾",forest:"森林",water:"水域",highland:"高地"};function bv(){const[e,n]=k.useState(Ye[0].id),t=Ye.find(a=>a.id===e);return o.jsxs("div",{className:"maps-panel",children:[o.jsx("div",{className:"maps-panel__selector",children:Ye.map(a=>o.jsx("button",{className:`map-sel-btn ${a.id===e?"map-sel-btn--active":""}`,onClick:()=>n(a.id),children:a.nameCn},a.id))}),o.jsxs("div",{className:"maps-panel__body",children:[o.jsx(vv,{map:t}),o.jsx(yv,{})]})]})}function vv({map:e}){const n=new Set(e.startZones[0].map(a=>`${a.row},${a.col}`)),t=new Set(e.startZones[1].map(a=>`${a.row},${a.col}`));return o.jsxs("div",{className:"mini-map-wrapper",children:[o.jsxs("div",{className:"mini-map__title",children:[e.nameCn,"（",e.width,"×",e.height,"）"]}),o.jsx("div",{className:"mini-map__grid",style:{gridTemplateColumns:`repeat(${e.width}, 28px)`,gridTemplateRows:`repeat(${e.height}, 28px)`},children:e.cells.flatMap((a,r)=>a.map((s,i)=>{const l=`${r},${i}`,d=n.has(l),u=t.has(l),f=Zm[s.terrain]??"#888";return o.jsxs("div",{className:"mini-map__cell",style:{background:f},title:`(${i},${r}) ${Ym[s.terrain]??s.terrain}${s.terrain==="highland"?" Lv"+s.elevation:""}`,children:[d&&o.jsx("span",{className:"mini-map__marker mini-map__marker--p1",children:"①"}),u&&o.jsx("span",{className:"mini-map__marker mini-map__marker--p2",children:"②"}),s.terrain==="highland"&&o.jsx("span",{className:"mini-map__elev",children:s.elevation})]},l)}))})]})}function yv(){return o.jsxs("div",{className:"map-legend",children:[o.jsx("div",{className:"map-legend__title",children:"地形图例"}),Object.entries(Ym).map(([e,n])=>o.jsxs("div",{className:"map-legend__item",children:[o.jsx("span",{className:"map-legend__swatch",style:{background:Zm[e]}}),o.jsx("span",{children:n})]},e)),o.jsxs("div",{className:"map-legend__item",children:[o.jsx("span",{className:"map-legend__marker-demo mini-map__marker--p1",children:"①"}),o.jsx("span",{children:"玩家1出发区"})]}),o.jsxs("div",{className:"map-legend__item",children:[o.jsx("span",{className:"map-legend__marker-demo mini-map__marker--p2",children:"②"}),o.jsx("span",{children:"玩家2出发区"})]}),o.jsx("div",{className:"map-legend__note",children:"高地格显示海拔等级（1–3），移动力消耗与平地相同，提供射程视野优势。"})]})}function _v(){return o.jsxs("div",{className:"units-panel",children:[o.jsxs("table",{className:"units-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"机体"}),o.jsx("th",{children:"日文名"}),o.jsx("th",{children:"型号"}),o.jsx("th",{children:"先制"}),o.jsx("th",{children:"移动"}),o.jsx("th",{children:"回避"}),o.jsx("th",{children:"突击"}),o.jsx("th",{children:"防突击"})]})}),o.jsx("tbody",{children:[...q].sort((e,n)=>e.initiative-n.initiative).map(e=>o.jsxs("tr",{children:[o.jsxs("td",{className:"units-table__name",children:[o.jsx("img",{src:`/assets/tokens/${e.tokenId}`,alt:e.nameCn,className:"units-table__token",onError:n=>{n.target.style.display="none"}}),e.nameCn]}),o.jsx("td",{className:"units-table__ja",children:e.nameJa}),o.jsx("td",{children:e.type}),o.jsx("td",{className:"units-table__num",children:e.initiative}),o.jsx("td",{className:"units-table__num",children:e.movement}),o.jsx("td",{className:"units-table__num",children:e.evasion}),o.jsx("td",{className:"units-table__num",children:e.assault}),o.jsx("td",{className:"units-table__num",children:e.assaultDef})]},e.id))})]}),o.jsxs("div",{className:"units-note",children:[o.jsx("strong",{children:"型号说明："}),"SS/S/M/L/LL = 体型；軽/中/重 = 重量等级；単座 = 单人驾驶。 先制值越小先手越快，移动值为每回合最大移动格数，回避值为被击中时消耗的伤害数量。"]})]})}const Xm={movement:"移动",ranged:"射击",melee:"近战",special:"特殊",mine:"机雷",aim:"瞄准",armor:"装甲",charge:"突击",auxiliary:"辅助"},Qm={movement:"#66ccaa",ranged:"#4499ee",melee:"#ff9944",special:"#cc88ff",mine:"#ff6688",aim:"#ffdd44",armor:"#88aacc",charge:"#ff6644",auxiliary:"#aaaacc"};function Iv(){const e=Object.keys(Pt),[n,t]=k.useState(e[0]),a=Pt[n]??[];let r=n;const s=q.find(i=>n.startsWith(i.deckCode));return s&&(n.endsWith("+")?r=`${s.nameCn} (Plus)`:r=s.nameCn),o.jsxs("div",{className:"cards-panel",children:[o.jsx("div",{className:"cards-panel__unit-tabs",children:e.map(i=>{const l=q.find(f=>i.startsWith(f.deckCode));let d=i,u=null;return l&&(u=`/assets/tokens/${l.tokenId}`,d=i.endsWith("+")?`${l.nameCn}+`:l.nameCn),o.jsxs("button",{className:`unit-tab ${i===n?"unit-tab--active":""}`,onClick:()=>t(i),children:[u&&o.jsx("img",{src:u,alt:d,className:"unit-tab__token",onError:f=>{f.target.style.display="none"}}),o.jsx("span",{children:d})]},i)})}),o.jsxs("div",{className:"cards-panel__header",children:[o.jsx("span",{className:"cards-panel__unit-name",children:r}),o.jsxs("span",{className:"cards-panel__count",children:["共 ",a.length," 张卡牌"]})]}),o.jsx("div",{className:"cards-panel__summary",children:o.jsx(kv,{deck:a})}),o.jsx("div",{className:"cards-panel__list",children:a.map(i=>o.jsx(jv,{card:i},i.id))})]})}function kv({deck:e}){const n={};for(const t of e)n[t.actionType]=(n[t.actionType]??0)+1;return o.jsx("div",{className:"card-type-summary",children:Object.entries(n).sort(([t],[a])=>t.localeCompare(a)).map(([t,a])=>o.jsxs("span",{className:"card-type-badge",style:{background:Qm[t]??"#888"},children:[Xm[t]??t," ×",a]},t))})}function jv({card:e}){const n=Xm[e.actionType]??e.actionType,t=Qm[e.actionType]??"#888",{zoom:a,getZoomHandlers:r}=Lt(),s=`/assets/${e.frontImageId}`;let i="";return e.actionType==="movement"&&e.movementValue!==void 0?i=`移动 ${e.movementValue}`:(e.actionType==="ranged"||e.actionType==="melee")&&e.damage!==void 0?e.rangeMin!==void 0&&e.rangeMax!==void 0?i=`射程 ${e.rangeMin}–${e.rangeMax}  伤害 ${e.damage}`:i=`伤害 ${e.damage}`:e.actionType==="charge"&&e.damage!==void 0&&(i=`伤害 ${e.damage}`),o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"card-row",...r(s),children:[o.jsx("div",{className:"card-row__image-wrap",children:o.jsx("img",{src:s,alt:e.nameCn,className:"card-row__image",onError:l=>{l.target.style.display="none"}})}),o.jsx("span",{className:"card-row__type",style:{background:t},children:n}),o.jsx("span",{className:"card-row__name",children:e.nameCn}),e.effectText?o.jsx("span",{className:"card-row__effect",children:e.effectText}):i&&o.jsx("span",{className:"card-row__detail",children:i}),e.isKaiVariant&&o.jsx("span",{className:"card-row__kai",title:"改型标记",children:"◆"}),e.hasBombIcon&&o.jsx("span",{className:"card-row__bomb",title:"诱爆",children:"💥"})]}),o.jsx(Ot,{zoom:a})]})}const wv=`
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
`;function ds(){const{state:e,getCard:n,exposureMode:t}=Me(),[a,r]=k.useState(null),{zoom:s,getZoomHandlers:i}=Lt(),l=e.phase==="plotting"?e.plottingStep==="player2"?"player2":"player1":e.activePlayer??"player1",d=a??l,u=e.players[d],f=q.find(h=>h.id===u.unitId),m=t?!1:Sv(e),g={N:"↑北",S:"↓南",E:"→东",W:"←西"}[u.facing]??u.facing;return o.jsxs("div",{className:"mp",children:[o.jsxs("div",{className:"mp__tabs",children:[e.playerIds.map(h=>o.jsxs("button",{className:`mp__tab ${d===h?"mp__tab--active":""}`,onClick:()=>r(x=>x===h?null:h),children:[`P${e.playerIds.indexOf(h)+1}`,h===l&&o.jsx("span",{className:"mp__tab-dot"})]},h)),o.jsx("span",{className:"mp__phase-hint",children:e.phase==="plotting"?"布局中":"行动中"})]}),f&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"mp__header",children:[o.jsx("img",{src:`/assets/tokens/${f.tokenId}`,alt:f.nameCn,className:"mp__token",onError:h=>{h.target.style.opacity="0.3"}}),o.jsxs("div",{className:"mp__header-info",children:[o.jsx("div",{className:"mp__unit-name",children:f.nameCn}),o.jsx("div",{className:"mp__unit-sub",children:f.nameJa}),o.jsxs("div",{className:"mp__pos",children:["格 (",u.position.row,",",u.position.col,")   ",g]})]})]}),o.jsxs("div",{className:"mp__stats",children:[o.jsx(Ga,{label:"先制",value:f.initiative,color:"#f0c040"}),o.jsx(Ga,{label:"移动",value:f.movement,color:"#66ccaa"}),o.jsx(Ga,{label:"回避",value:f.evasion,color:"#88aaff"}),o.jsx(Ga,{label:"突击",value:f.assault,color:"#ff9944"}),o.jsx(Ga,{label:"被突",value:f.assaultDef,color:"#ff6666"})]}),o.jsxs("div",{className:"mp__zones",children:[o.jsxs("div",{className:"mp__zone mp__zone--aux",children:[o.jsx("div",{className:"mp__zone-label",children:"辅助区"}),u.auxiliary.length===0?o.jsx("div",{className:"mp__zone-empty",children:"—"}):(()=>{const h=new Map;for(const p of u.auxiliary){const _=n(p.defId),y=(_==null?void 0:_.nameJa)??p.defId,b=h.get(y);b?(b.totalCount++,p.destroyed||b.liveCount++):h.set(y,{nameCn:(_==null?void 0:_.nameCn)??p.defId,liveCount:p.destroyed?0:1,totalCount:1})}const x=p=>{const _=fn(u,n,"movement"),y=fn(u,n,"melee"),b=fn(u,n,"charge");return p==="バーニア"?_.vernier||y.vernier:p==="ムーブセンサー"?y.moveSensor:p==="ホイール"?_.wheel||b.wheel:!1};return o.jsxs(o.Fragment,{children:[u.auxiliary.map(p=>{const _=n(p.defId),y=_!=null&&_.frontImageId?`/assets/${_.frontImageId}`:null;return o.jsxs("div",{className:`mp__aux-card${p.destroyed?" mp__aux-card--destroyed":""}`,...y?i(y):{},children:[o.jsx("span",{className:"mp__aux-name",children:(_==null?void 0:_.nameCn)??p.defId}),p.destroyed&&o.jsx("span",{className:"mp__aux-dead",children:"✕"})]},p.instanceId)}),o.jsx("div",{className:"mp__aux-badges",children:Array.from(h.entries()).map(([p,_])=>{const y=x(p);return o.jsxs("div",{className:`mp__aux-status ${y?"mp__aux-status--on":"mp__aux-status--off"}`,title:y?"效果激活中":"需要≥2张存活才能激活",children:[y?"✓":"✗"," ",_.nameCn,o.jsxs("span",{className:"mp__aux-count",children:["(",_.liveCount,"/",_.totalCount,")"]})]},p)})})]})})()]}),o.jsxs("div",{className:"mp__counts",children:[o.jsx(io,{icon:"🃏",label:"手牌",count:u.hand.filter(h=>!h.destroyed).length}),o.jsx(io,{icon:"📚",label:"牌库",count:u.deck.filter(h=>!h.destroyed).length}),o.jsx(io,{icon:"♻️",label:"弃牌",count:u.discard.filter(h=>!h.destroyed).length}),o.jsx(io,{icon:"💀",label:"破坏",count:u.destroyedCards.length})]})]}),o.jsxs("div",{className:"mp__plot",children:[o.jsx("div",{className:"mp__plot-label",children:"布局段落"}),o.jsxs("div",{className:"mp__plot-slots",children:[o.jsx(uu,{label:"主要阶段一",card:u.plotSeg1,getCard:n,hidden:m,getZoomHandlers:i}),o.jsx(uu,{label:"主要阶段二",card:u.plotSeg2,getCard:n,hidden:m,getZoomHandlers:i})]})]})]}),o.jsx("style",{children:Cv}),o.jsx(Ot,{zoom:s})]})}function Sv(e,n){return e.phase==="plotting"?e.plottingStep!=="complete":!1}function Ga({label:e,value:n,color:t}){return o.jsxs("div",{className:"mp__stat",children:[o.jsx("span",{className:"mp__stat-lbl",children:e}),o.jsx("span",{className:"mp__stat-val",style:{color:t},children:n})]})}function io({icon:e,label:n,count:t}){return o.jsxs("div",{className:"mp__zcount",children:[o.jsx("span",{className:"mp__zcount-icon",children:e}),o.jsx("span",{className:"mp__zcount-lbl",children:n}),o.jsx("span",{className:"mp__zcount-n",children:t})]})}function uu({label:e,card:n,getCard:t,hidden:a,getZoomHandlers:r}){const s=n?t(n.defId):null,i=s!=null&&s.frontImageId?`/assets/${s.frontImageId}`:null;return o.jsxs("div",{className:"mp__slot",children:[o.jsx("div",{className:"mp__slot-lbl",children:e}),n?a?o.jsx("div",{className:"mp__slot-hidden",children:"???"}):o.jsxs("div",{className:"mp__slot-card",...i?r(i):{},children:[o.jsx("span",{className:"mp__slot-name",children:(s==null?void 0:s.nameCn)??n.defId}),o.jsx("span",{className:`mp__slot-type mp__slot-type--${(s==null?void 0:s.actionType)??"unknown"}`,children:(s==null?void 0:s.actionType)??"?"})]}):o.jsx("div",{className:"mp__slot-empty",children:"— 未布局 —"})]})}const Cv=`
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
`,Nv={slot_1:"存档位 1",slot_2:"存档位 2",slot_3:"存档位 3",slot_4:"存档位 4",slot_5:"存档位 5",auto:"自动存档"},Tv=[...Rx,"auto"];function Mv(e){const n=new Date(e),t=a=>String(a).padStart(2,"0");return`${n.getFullYear()}-${t(n.getMonth()+1)}-${t(n.getDate())} ${t(n.getHours())}:${t(n.getMinutes())}`}function pu({mode:e,onBack:n,onLoad:t,currentState:a,aiConfig:r}){const[s,i]=k.useState([]),[l,d]=k.useState(null),[u,f]=k.useState(null),[m,g]=k.useState(null),[h,x]=k.useState(null);k.useEffect(()=>{i(Ud())},[]);function p(){i(Ud())}function _(w){g(w),setTimeout(()=>g(null),2e3)}function y(w){return s.find(N=>N.slotId===w)}function b(w){if(!a||!r)return;if(y(w)){f(w);return}v(w)}function v(w){if(!(!a||!r))try{Sc(w,a,r,!1),p(),f(null),_("存档已保存")}catch(N){x(N instanceof Error?N.message:"保存失败")}}function I(w){const N=Ox(w);if(!N){x("存档数据已损坏，无法加载");return}t==null||t(N)}function S(w){Kx(w),p(),d(null),_("存档已删除")}const C=e==="save"?"保存游戏":"加载存档";return o.jsxs("div",{className:"sl-screen",children:[o.jsxs("div",{className:"sl-panel",children:[o.jsx("h2",{className:"sl-title",children:C}),o.jsx("div",{className:"sl-slots",children:Tv.map(w=>{const N=y(w),E=e==="save"&&!(w==="auto")&&a!=null;return o.jsxs("div",{className:`sl-slot ${N?"sl-slot--occupied":"sl-slot--empty"}`,children:[o.jsxs("div",{className:"sl-slot__label",children:[Nv[w],(N==null?void 0:N.isAutoSave)&&o.jsx("span",{className:"sl-badge",children:"自动"})]}),N?o.jsxs("div",{className:"sl-slot__info",children:[o.jsxs("span",{className:"sl-slot__units",children:[N.player1Unit," vs ",N.player2Unit]}),o.jsx("span",{className:"sl-slot__map",children:N.mapName}),o.jsxs("span",{className:"sl-slot__round",children:["第 ",N.roundNumber," 回合"]}),o.jsx("span",{className:"sl-slot__time",children:Mv(N.timestamp)})]}):o.jsx("div",{className:"sl-slot__info sl-slot__empty-label",children:"空存档位"}),o.jsxs("div",{className:"sl-slot__actions",children:[e==="load"&&N&&o.jsx("button",{className:"sl-btn sl-btn--primary",onClick:()=>I(w),children:"加载"}),E&&o.jsx("button",{className:"sl-btn sl-btn--primary",onClick:()=>b(w),children:N?"覆盖":"保存"}),N&&(l===w?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"sl-confirm-text",children:"确认删除？"}),o.jsx("button",{className:"sl-btn sl-btn--danger",onClick:()=>S(w),children:"确认"}),o.jsx("button",{className:"sl-btn",onClick:()=>d(null),children:"取消"})]}):o.jsx("button",{className:"sl-btn sl-btn--ghost",onClick:()=>d(w),children:"删除"}))]}),u===w&&o.jsxs("div",{className:"sl-overwrite",children:[o.jsx("span",{children:"覆盖此存档？"}),o.jsx("button",{className:"sl-btn sl-btn--primary",onClick:()=>v(w),children:"确认"}),o.jsx("button",{className:"sl-btn",onClick:()=>f(null),children:"取消"})]})]},w)})}),h&&o.jsxs("div",{className:"sl-error",onClick:()=>x(null),children:["⚠ ",h]}),o.jsx("button",{className:"sl-back-btn",onClick:n,children:"← 返回"})]}),m&&o.jsx("div",{className:"sl-toast",children:m}),o.jsx("style",{children:Ev})]})}const Ev=`
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
`;function Dv({currentState:e}){const{rawDispatch:n}=Me();return k.useEffect(()=>{n({type:"LOAD_GAME",state:e})},[e,n]),o.jsx("div",{style:{height:"100%",width:"100%"},children:o.jsx(Ca,{})})}function $v({currentState:e}){return o.jsx($s,{children:o.jsx(Hm,{children:o.jsx(Dv,{currentState:e})})})}function Av({onBack:e}){const[n,t]=k.useState("list"),[a,r]=k.useState(null);function s(l){r(l),t("playback")}function i(){r(null),t("list")}return n==="playback"&&a?o.jsx(Rv,{replayData:a,onExit:i}):o.jsx(zv,{onBack:e,onPlay:s})}function qm(e){const n=Yx(e.initialState,e.actions),t=new Blob([n],{type:"text/plain;charset=utf-8"}),a=URL.createObjectURL(t),r=document.createElement("a");r.href=a;const s=new Date(e.metadata.timestamp),i=d=>String(d).padStart(2,"0"),l=`replay_${e.metadata.player1Unit}_vs_${e.metadata.player2Unit}_${s.getFullYear()}${i(s.getMonth()+1)}${i(s.getDate())}_${i(s.getHours())}${i(s.getMinutes())}.txt`;r.download=l,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(a)}function zv({onBack:e,onPlay:n}){const[t,a]=k.useState([]),[r,s]=k.useState(null),[i,l]=k.useState(null);k.useEffect(()=>{a(Wd())},[]);function d(m){const g=Zd(m);if(!g){l("录像数据已损坏，无法播放");return}n(g)}function u(m){const g=Zd(m);if(!g){l("录像数据已损坏，无法导出");return}qm(g)}function f(m){Fx(m),a(Wd()),s(null)}return o.jsxs("div",{className:"rp-screen",children:[o.jsxs("div",{className:"rp-panel",children:[o.jsx("h2",{className:"rp-title",children:"回放录像"}),t.length===0?o.jsx("div",{className:"rp-empty",children:"暂无保存的录像"}):o.jsx("div",{className:"rp-list",children:t.map(m=>o.jsxs("div",{className:"rp-item",children:[o.jsxs("div",{className:"rp-item__info",children:[o.jsxs("span",{className:"rp-item__units",children:[m.player1Unit," vs ",m.player2Unit]}),o.jsx("span",{className:"rp-item__map",children:m.mapName}),o.jsxs("span",{className:"rp-item__rounds",children:[m.totalRounds," 回合"]}),m.winner&&o.jsx("span",{className:"rp-item__winner",children:m.winner==="draw"?"平局":`${m.winner==="player1"?"P1":"P2"} 获胜`}),o.jsx("span",{className:"rp-item__time",children:Lv(m.timestamp)})]}),o.jsxs("div",{className:"rp-item__actions",children:[o.jsx("button",{className:"rp-btn rp-btn--primary",onClick:()=>d(m.replayId),children:"▶ 播放"}),o.jsx("button",{className:"rp-btn",onClick:()=>u(m.replayId),children:"导出日志"}),r===m.replayId?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"rp-confirm",children:"确认删除？"}),o.jsx("button",{className:"rp-btn rp-btn--danger",onClick:()=>f(m.replayId),children:"确认"}),o.jsx("button",{className:"rp-btn",onClick:()=>s(null),children:"取消"})]}):o.jsx("button",{className:"rp-btn rp-btn--ghost",onClick:()=>s(m.replayId),children:"删除"})]})]},m.replayId))}),i&&o.jsxs("div",{className:"rp-error",onClick:()=>l(null),children:["⚠ ",i]}),o.jsx("button",{className:"rp-back-btn",onClick:e,children:"← 返回"})]}),o.jsx("style",{children:ef})]})}function Pv(e){const n=[0];let t=e.initialState;for(let a=0;a<e.actions.length;a++){const r=t.phase,s=t.roundNumber,i=t.plottingStep,l=t.currentTiming;t=gn(t,e.actions[a]),(t.phase!==r||t.roundNumber!==s||t.plottingStep!==i||t.currentTiming!==l)&&n.push(a+1)}return n[n.length-1]!==e.actions.length&&n.push(e.actions.length),n}function mu(e,n){let t=e.initialState;for(let a=0;a<n&&a<e.actions.length;a++)t=gn(t,e.actions[a]);return t}function Vv(e,n){const t=s=>{const i=n.players[s],l=q.find(d=>d.id===i.unitId);return(l==null?void 0:l.nameCn)??s},a=s=>{const i=te(s);return(i==null?void 0:i.nameCn)??s},r=(s,i)=>{const l=n.players[i],u=[...l.deck,...l.hand,...l.auxiliary,...l.discard,...l.destroyedCards,...l.plotSeg1?[l.plotSeg1]:[],...l.plotSeg2?[l.plotSeg2]:[]].find(f=>f.instanceId===s);return u?a(u.defId):s};switch(e.type){case"DRAW_CARDS":return`${t(e.playerId)} 抽取 ${e.count} 张牌`;case"PLOT_CARD":{const s=r(e.instanceId,e.playerId);return`${t(e.playerId)} 布局段落${e.seg}：${s}`}case"CONFIRM_PLOT":return`${t(e.playerId)} 确认布局`;case"ADVANCE_PLOT_STEP":return"布局阶段推进";case"MOVE_UNIT":return`${t(e.playerId)} 移动至 (${e.to.row},${e.to.col})${e.finalFacing?`，面向 ${e.finalFacing}`:""}`;case"ADJUST_FACING":return`${t(e.playerId)} 调整朝向 → ${e.facing}`;case"RESOLVE_RANGED":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动射击`;case"RESOLVE_MELEE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动近战`;case"RESOLVE_CHARGE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动突击`;case"PLACE_MINE":{const s=e.placements??(e.to?[{position:e.to,kind:"real"}]:[]);return`${t(e.playerId)} 布置隐藏指示物：${s.map(i=>`(${i.position.row},${i.position.col})`).join("、")}`}case"SELECT_DAMAGE_CARD":{const s=r(e.instanceId,e.playerId);return`${t(e.playerId)} 选择摧毁：${s}`}case"CONFIRM_DAMAGE_SELECTION":return`${t(e.playerId)} 确认伤害结算`;case"SKIP_ACTION":return"跳过行动";case"ADVANCE_TIMING":return"推进时序";case"ADVANCE_PHASE":return"推进阶段";case"MELEE_SENSOR_MOVE":return`${t(e.playerId)} 近战传感器移动至 (${e.to.row},${e.to.col})`;case"START_PLOTTING":return"进入布局阶段";default:return e.type}}function fu({player:e,label:n}){const t=q.find(l=>l.id===e.unitId),{zoom:a,getZoomHandlers:r}=Lt(),s=l=>l.filter(d=>!d.destroyed),i={N:"↑北",S:"↓南",E:"→东",W:"←西"}[e.facing]??e.facing;return o.jsxs("div",{className:"rpp",children:[o.jsxs("div",{className:"rpp__header",children:[t&&o.jsx("img",{src:`/assets/tokens/${t.tokenId}`,alt:t.nameCn,className:"rpp__token",onError:l=>{l.target.style.opacity="0.3"}}),o.jsxs("div",{children:[o.jsxs("div",{className:"rpp__name",children:[n,": ",(t==null?void 0:t.nameCn)??e.unitId]}),o.jsxs("div",{className:"rpp__pos",children:["(",e.position.row,",",e.position.col,") ",i]})]})]}),o.jsxs("div",{className:"rpp__counts",children:[o.jsxs("span",{className:"rpp__count",title:"牌库",children:["📚",s(e.deck).length]}),o.jsxs("span",{className:"rpp__count",title:"手牌",children:["🃏",e.hand.length]}),o.jsxs("span",{className:"rpp__count",title:"弃牌",children:["♻️",e.discard.length]}),o.jsxs("span",{className:"rpp__count",title:"破坏",children:["💀",e.destroyedCards.length]})]}),o.jsx("div",{className:"rpp__section-label",children:"布局"}),o.jsxs("div",{className:"rpp__plot-row",children:[o.jsx(gu,{label:"阶段1",card:e.plotSeg1,getZoomHandlers:r}),o.jsx(gu,{label:"阶段2",card:e.plotSeg2,getZoomHandlers:r})]}),o.jsxs("div",{className:"rpp__section-label",children:["手牌 (",e.hand.length,")"]}),o.jsx("div",{className:"rpp__card-list",children:e.hand.length===0?o.jsx("span",{className:"rpp__empty",children:"—"}):e.hand.map(l=>o.jsx(hu,{card:l,getZoomHandlers:r},l.instanceId))}),e.auxiliary.length>0&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"rpp__section-label",children:["辅助 (",s(e.auxiliary).length,"/",e.auxiliary.length,")"]}),o.jsx("div",{className:"rpp__card-list",children:e.auxiliary.map(l=>o.jsx(hu,{card:l,getZoomHandlers:r},l.instanceId))})]}),o.jsx(Ot,{zoom:a})]})}function gu({label:e,card:n,getZoomHandlers:t}){const a=n?te(n.defId):null,r=a!=null&&a.frontImageId?`/assets/${a.frontImageId}`:null,i=a?{movement:"#66ccaa",ranged:"#ff9944",melee:"#ff6060",charge:"#ff4444",aim:"#f0c040",armor:"#88aaff",mine:"#cc88ff",special:"#aaa",auxiliary:"#77ddaa"}[a.actionType]??"#888":"#555";return o.jsxs("div",{className:"rpp__plot-slot",children:[o.jsx("div",{className:"rpp__plot-label",children:e}),n&&a?o.jsxs("div",{className:"rpp__plot-card",style:{borderColor:i},...r?t(r):{},children:[o.jsx("span",{className:"rpp__plot-type",style:{color:i},children:a.actionType}),o.jsx("span",{className:"rpp__plot-name",children:a.nameCn})]}):o.jsx("div",{className:"rpp__plot-empty",children:"—"})]})}function hu({card:e,getZoomHandlers:n}){const t=te(e.defId),a=t!=null&&t.frontImageId?`/assets/${t.frontImageId}`:null,s=t?{movement:"#66ccaa",ranged:"#ff9944",melee:"#ff6060",charge:"#ff4444",aim:"#f0c040",armor:"#88aaff",mine:"#cc88ff",special:"#aaa",auxiliary:"#77ddaa"}[t.actionType]??"#888":"#555";return o.jsxs("span",{className:`rpp__chip${e.destroyed?" rpp__chip--dead":""}`,style:{borderColor:s},...a?n(a):{},children:[(t==null?void 0:t.nameCn)??e.defId,e.destroyed&&o.jsx("span",{className:"rpp__chip-x",children:"✕"})]})}function Rv({replayData:e,onExit:n}){const t=k.useMemo(()=>Pv(e),[e]),a=e.actions.length,[r,s]=k.useState(0),[i,l]=k.useState(e.initialState),[d,u]=k.useState(!1),[f,m]=k.useState(1),[g,h]=k.useState(""),[x,p]=k.useState(e.initialState.log.length),_=k.useRef(null),y=k.useRef(i),b=k.useRef(r);y.current=i,b.current=r;const v=k.useRef(null);k.useEffect(()=>{var V;(V=v.current)==null||V.scrollIntoView({behavior:"smooth"})},[i.log.length]);const I=k.useCallback(()=>{_.current!=null&&(clearInterval(_.current),_.current=null)},[]),S=k.useCallback(()=>{const V=b.current;if(V>=a)return I(),u(!1),!1;const R=e.actions[V],A=gn(y.current,R);return p(y.current.log.length),l(A),s(V+1),!0},[e,a,I]),C=k.useCallback(()=>{const V=b.current;if(V>=a)return;const A=t.find(F=>F>V)??a;let B=y.current;const P=B.log.length;for(let F=V;F<A;F++)B=gn(B,e.actions[F]);p(P),l(B),s(A),A>=a&&(I(),u(!1))},[e,a,t,I]),w=k.useCallback(()=>{const V=b.current,R=t.filter(P=>P<V),A=R.length>=2?R[R.length-2]:0,B=mu(e,A);p(0),l(B),s(A)},[e,t]);k.useEffect(()=>(I(),d&&(_.current=setInterval(()=>{if(b.current>=a){I(),u(!1);return}C()},Math.round(1500/f))),I),[d,f,C,a,I]);function N(){u(V=>!V)}function z(){u(!1),p(0),l(e.initialState),s(0)}function E(){const V=parseInt(g,10);if(isNaN(V)||V<1)return;u(!1);const{state:R,actionIndex:A}=Hx(e,V);p(0),l(R),s(A)}const J=r>0?e.actions[r-1]:null,D=J?Vv(J,r>=2?mu(e,r-1):e.initialState):null,$=r>=a,L=r===0,K={pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"行动阶段1",action_seg2:"行动阶段2",cleanup:"清理阶段",game_over:"游戏结束"},M={movement:"移动",ranged:"射击",melee:"近战",special:"特殊"};return o.jsxs("div",{className:"rpv-screen",children:[o.jsxs("div",{className:"rpv-topbar",children:[o.jsxs("span",{className:"rpv-topbar__round",children:["第 ",i.roundNumber," 回合"]}),o.jsx("span",{className:"rpv-topbar__phase",children:K[i.phase]??i.phase}),i.currentTiming&&o.jsxs("span",{className:"rpv-topbar__timing",children:["▶ ",M[i.currentTiming]]}),o.jsx("span",{style:{flex:1}}),o.jsx("button",{className:"rpv-btn",onClick:z,disabled:L,title:"回到开始",children:"⏮"}),o.jsx("button",{className:"rpv-btn",onClick:w,disabled:L,title:"上一阶段",children:"◀◀"}),o.jsx("button",{className:"rpv-btn",onClick:()=>{u(!1),S()},disabled:$,title:"单步前进（单个操作）",children:"▶|"}),o.jsx("button",{className:"rpv-btn",onClick:()=>{u(!1),C()},disabled:$,title:"下一阶段",children:"▶▶"}),o.jsx("button",{className:"rpv-btn rpv-btn--primary",onClick:N,children:d?"⏸ 暂停":"▶ 自动"}),o.jsx("span",{className:"rpv-sep"}),o.jsx("span",{className:"rpv-label",children:"速度"}),[1,2,4].map(V=>o.jsxs("button",{className:`rpv-btn rpv-btn--speed ${f===V?"rpv-btn--active":""}`,onClick:()=>m(V),children:[V,"x"]},V)),o.jsx("span",{className:"rpv-sep"}),o.jsx("span",{className:"rpv-label",children:"跳至"}),o.jsx("input",{className:"rpv-input",type:"number",min:1,value:g,onChange:V=>h(V.target.value),onKeyDown:V=>V.key==="Enter"&&E(),placeholder:"回合"}),o.jsx("button",{className:"rpv-btn",onClick:E,children:"跳转"}),o.jsx("span",{className:"rpv-sep"}),o.jsxs("span",{className:"rpv-progress",children:[r,"/",a]}),o.jsx("button",{className:"rpv-btn",onClick:()=>qm(e),title:"导出完整分析日志",children:"导出日志"}),o.jsx("button",{className:"rpv-btn rpv-btn--exit",onClick:n,children:"✕ 退出"})]}),o.jsxs("div",{className:"rpv-main",children:[o.jsxs("div",{className:"rpv-map-col",children:[o.jsx("div",{className:"rpv-map-area",children:o.jsx($v,{currentState:i})}),D&&o.jsxs("div",{className:"rpv-action-desc",children:["▶ ",D]}),o.jsxs("div",{className:"rpv-log",children:[o.jsx("div",{className:"rpv-log__header",children:"行动日志"}),o.jsxs("div",{className:"rpv-log__entries",children:[i.log.filter(V=>!V.startsWith("[DBG]")).map((V,R)=>{const A=R>=x;return o.jsx("div",{className:`rpv-log__entry ${Ov(V)}${A?" rpv-log__entry--new":""}`,children:V},R)}),o.jsx("div",{ref:v})]})]})]}),o.jsxs("div",{className:"rpv-info-col",children:[o.jsx(fu,{player:i.players.player1,label:"P1"}),o.jsx("div",{className:"rpv-info-divider"}),o.jsx(fu,{player:i.players.player2,label:"P2"})]})]}),o.jsx("style",{children:ef}),o.jsx("style",{children:Kv})]})}function Lv(e){const n=new Date(e),t=a=>String(a).padStart(2,"0");return`${n.getFullYear()}-${t(n.getMonth()+1)}-${t(n.getDate())} ${t(n.getHours())}:${t(n.getMinutes())}`}function Ov(e){return e.startsWith("===")?"rpv-log__entry--round":e.startsWith("---")?"rpv-log__entry--sep":e.includes("发动")||e.includes("攻击")?"rpv-log__entry--attack":e.includes("摧毁")||e.includes("连锁")||e.includes("诱爆")?"rpv-log__entry--damage":e.includes("移动到")?"rpv-log__entry--move":e.includes("获胜")||e.includes("击破")||e.includes("平局")?"rpv-log__entry--victory":""}const ef=`
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
`,Kv=`
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
`,Jv=50;function nf(){return{terrain:"plain",elevation:0,variant:0}}function tf(e,n){const t=Array.from({length:n},()=>Array.from({length:e},()=>nf()));return{id:`custom_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,nameJa:"新しいマップ",nameCn:"新地图",width:e,height:n,cells:t,startZones:{0:[{row:0,col:Math.floor(e/2)}],1:[{row:n-1,col:Math.floor(e/2)}]},maxPlayers:2,maxTeams:2}}function Il(e){return{map:e??tf(7,11),activeTool:"terrain",selectedTerrain:"plain",selectedElevation:1,selectedVariant:0,selectedZoneTeam:0,brushSize:1,isDirty:!1,undoStack:[],redoStack:[],showCoords:!1}}function So(e){return{...e,cells:e.cells.map(n=>n.map(t=>({...t}))),startZones:Object.fromEntries(Object.entries(e.startZones).map(([n,t])=>[n,t.map(a=>({...a}))]))}}function vt(e){const n=[...e.undoStack,So(e.map)];return n.length>Jv&&n.shift(),{...e,undoStack:n,redoStack:[],isDirty:!0}}function xu(e,n,t,a,r,s){if(n<0||n>=e.height||t<0||t>=e.width)return e;const i=e.cells.map((l,d)=>d===n?l.map((u,f)=>f===t?{terrain:a,elevation:a==="highland"?r:0,variant:a==="highland"?r:s}:u):l);return{...e,cells:i}}function Bv(e,n){switch(n.type){case"SET_TOOL":return{...e,activeTool:n.tool};case"SET_TERRAIN":return{...e,selectedTerrain:n.terrain,activeTool:"terrain"};case"SET_ELEVATION":return{...e,selectedElevation:n.elevation};case"SET_VARIANT":return{...e,selectedVariant:n.variant};case"SET_BRUSH_SIZE":return{...e,brushSize:n.size};case"SET_ZONE_TEAM":return{...e,selectedZoneTeam:n.team};case"TOGGLE_COORDS":return{...e,showCoords:!e.showCoords};case"PAINT_CELL":{const t=vt(e),a=xu(t.map,n.row,n.col,t.selectedTerrain,t.selectedElevation,t.selectedVariant);return{...t,map:a}}case"PAINT_AREA":{const t=vt(e);let a=t.map;for(const{row:r,col:s}of n.cells)a=xu(a,r,s,t.selectedTerrain,t.selectedElevation,t.selectedVariant);return{...t,map:a}}case"ADD_ZONE_CELL":{const t=vt(e),{team:a,position:r}=n,s=t.map.startZones[a]??[];if(s.some(l=>l.row===r.row&&l.col===r.col))return e;const i={...t.map.startZones,[a]:[...s,r]};return{...t,map:{...t.map,startZones:i}}}case"REMOVE_ZONE_CELL":{const t=vt(e),{team:a,position:r}=n,i=(t.map.startZones[a]??[]).filter(d=>d.row!==r.row||d.col!==r.col),l={...t.map.startZones,[a]:i};return{...t,map:{...t.map,startZones:l}}}case"CLEAR_ZONE":{const t=vt(e),a={...t.map.startZones,[n.team]:[]};return{...t,map:{...t.map,startZones:a}}}case"SET_MAP_META":{const t=vt(e),a={...t.map};return n.nameJa!==void 0&&(a.nameJa=n.nameJa),n.nameCn!==void 0&&(a.nameCn=n.nameCn),n.maxPlayers!==void 0&&(a.maxPlayers=n.maxPlayers),n.maxTeams!==void 0&&(a.maxTeams=n.maxTeams),{...t,map:a}}case"RESIZE_MAP":{const t=vt(e),{newWidth:a,newHeight:r}=n,s=Array.from({length:r},(l,d)=>Array.from({length:a},(u,f)=>d<t.map.height&&f<t.map.width?{...t.map.cells[d][f]}:nf())),i={};for(const[l,d]of Object.entries(t.map.startZones))i[Number(l)]=d.filter(u=>u.row<r&&u.col<a);return{...t,map:{...t.map,width:a,height:r,cells:s,startZones:i}}}case"UNDO":{if(e.undoStack.length===0)return e;const t=e.undoStack[e.undoStack.length-1];return{...e,map:t,undoStack:e.undoStack.slice(0,-1),redoStack:[...e.redoStack,So(e.map)],isDirty:!0}}case"REDO":{if(e.redoStack.length===0)return e;const t=e.redoStack[e.redoStack.length-1];return{...e,map:t,redoStack:e.redoStack.slice(0,-1),undoStack:[...e.undoStack,So(e.map)],isDirty:!0}}case"LOAD_MAP":return{...Il(So(n.map)),isDirty:!1};case"NEW_MAP":return Il(tf(n.width,n.height));case"MARK_SAVED":return{...e,isDirty:!1};default:return e}}const Nc="em_custom_maps_index",Tc="em_custom_map_",Fv=["plain","sand","rubble","forest","water","highland"];function Mc(){try{const e=localStorage.getItem(Nc);return e?JSON.parse(e):[]}catch{return[]}}function Gv(e){const n={id:e.id,nameCn:e.nameCn,nameJa:e.nameJa,width:e.width,height:e.height,maxPlayers:e.maxPlayers,maxTeams:e.maxTeams,savedAt:Date.now()},t=Mc().filter(a=>a.id!==e.id);t.push(n),localStorage.setItem(Nc,JSON.stringify(t)),localStorage.setItem(Tc+e.id,JSON.stringify(e))}function Hv(e){try{const n=localStorage.getItem(Tc+e);if(!n)return null;const t=JSON.parse(n);return af(t)?t:null}catch{return null}}function Uv(e){const n=Mc().filter(t=>t.id!==e);localStorage.setItem(Nc,JSON.stringify(n)),localStorage.removeItem(Tc+e)}function Wv(e){return JSON.stringify(e,null,2)}function Zv(e){try{const n=JSON.parse(e);return af(n)?(n.id=`custom_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,n):null}catch{return null}}function Yv(e){const n=Wv(e),t=new Blob([n],{type:"application/json"}),a=URL.createObjectURL(t),r=document.createElement("a");r.href=a,r.download=`${e.nameCn||e.id}.json`,r.click(),URL.revokeObjectURL(a)}function af(e){if(!e||typeof e!="object")return!1;const n=e;if(typeof n.id!="string"||(typeof n.nameCn!="string"&&(n.nameCn="未命名"),typeof n.nameJa!="string"&&(n.nameJa=""),typeof n.width!="number"||n.width<3||n.width>25)||typeof n.height!="number"||n.height<3||n.height>25||(typeof n.maxPlayers!="number"&&(n.maxPlayers=2),typeof n.maxTeams!="number"&&(n.maxTeams=2),!Array.isArray(n.cells))||n.cells.length!==n.height)return!1;for(const t of n.cells){if(!Array.isArray(t)||t.length!==n.width)return!1;for(const a of t)if(!a||typeof a!="object"||!Fv.includes(a.terrain))return!1}return(!n.startZones||typeof n.startZones!="object")&&(n.startZones={}),!0}const rf=k.createContext(null);function Da(){const e=k.useContext(rf);if(!e)throw new Error("useEditor must be inside EditorCtx.Provider");return e}const lo=48,bu=.2,Xv=3,vu=.1,kl=[{terrain:"plain",label:"平原",icon:"🟩"},{terrain:"sand",label:"砂地",icon:"🟨"},{terrain:"rubble",label:"瓦砾",icon:"🟫"},{terrain:"forest",label:"森林",icon:"🌲"},{terrain:"water",label:"水域",icon:"🟦"},{terrain:"highland",label:"高地",icon:"⛰️"}],us=["#00f0ff","#ff00c8","#00cc88","#ff8800","#6688ff","#cc44ff","#44dddd","#ff4466"];function Qv({onBack:e}){const[n,t]=k.useReducer(Bv,void 0,()=>Il()),a=k.useMemo(()=>({state:n,dispatch:t}),[n]);k.useEffect(()=>{function i(l){if((l.ctrlKey||l.metaKey)&&(l.key==="z"&&!l.shiftKey&&(l.preventDefault(),t({type:"UNDO"})),l.key==="z"&&l.shiftKey&&(l.preventDefault(),t({type:"REDO"})),l.key==="y"&&(l.preventDefault(),t({type:"REDO"})),l.key==="s"&&(l.preventDefault(),r())),!l.ctrlKey&&!l.metaKey&&!l.altKey){const d=parseInt(l.key)-1;d>=0&&d<kl.length&&t({type:"SET_TERRAIN",terrain:kl[d].terrain})}}return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[]);function r(){Gv(n.map),t({type:"MARK_SAVED"})}function s(){n.isDirty&&!window.confirm("有未保存的更改，确定要退出吗？")||e()}return o.jsx(rf.Provider,{value:a,children:o.jsxs("div",{className:"me__screen",children:[o.jsx(qv,{onBack:s,onSave:r}),o.jsx(n1,{}),o.jsx(we,{id:"me-terrain",title:"地形画笔",initialPos:{x:8,y:56},width:200,minHeight:60,zIndex:20,children:o.jsx(t1,{})}),o.jsx(we,{id:"me-props",title:"地图属性",initialPos:{x:8,y:380},width:200,minHeight:60,zIndex:19,children:o.jsx(a1,{})}),o.jsx(we,{id:"me-zones",title:"出击区域",initialPos:{x:8,y:600},width:200,minHeight:60,zIndex:18,children:o.jsx(r1,{})}),o.jsx("style",{children:o1})]})})}function qv({onBack:e,onSave:n}){const{state:t,dispatch:a}=Da(),[r,s]=k.useState(!1),i=k.useRef(null);function l(){t.isDirty&&!window.confirm("有未保存的更改，确定要新建吗？")||a({type:"NEW_MAP",width:7,height:11})}function d(){Yv(t.map)}function u(){var m;(m=i.current)==null||m.click()}function f(m){var x;const g=(x=m.target.files)==null?void 0:x[0];if(!g)return;const h=new FileReader;h.onload=()=>{const p=Zv(h.result);p?a({type:"LOAD_MAP",map:p}):alert("无效的地图文件")},h.readAsText(g),m.target.value=""}return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"me__topbar",children:[o.jsx("button",{className:"me__btn",onClick:e,children:"← 返回"}),o.jsx("span",{className:"me__title",children:"地图编辑器"}),o.jsxs("span",{className:"me__map-name",children:[t.map.nameCn," (",t.map.height,"×",t.map.width,")",t.isDirty&&" *"]}),o.jsx("span",{style:{flex:1}}),o.jsx("button",{className:"me__btn",onClick:l,children:"新建"}),o.jsx("button",{className:"me__btn",onClick:()=>s(!0),children:"打开"}),o.jsx("button",{className:"me__btn me__btn--accent",onClick:n,children:"保存"}),o.jsx("button",{className:"me__btn",onClick:d,children:"导出"}),o.jsx("button",{className:"me__btn",onClick:u,children:"导入"}),o.jsx("input",{ref:i,type:"file",accept:".json",style:{display:"none"},onChange:f}),o.jsx("span",{className:"me__sep"}),o.jsx("button",{className:"me__btn",onClick:()=>a({type:"UNDO"}),disabled:t.undoStack.length===0,children:"撤销"}),o.jsx("button",{className:"me__btn",onClick:()=>a({type:"REDO"}),disabled:t.redoStack.length===0,children:"重做"}),o.jsx("button",{className:`me__btn${t.showCoords?" me__btn--active":""}`,onClick:()=>a({type:"TOGGLE_COORDS"}),children:"坐标"})]}),r&&o.jsx(e1,{onClose:()=>s(!1)})]})}function e1({onClose:e}){const{dispatch:n,state:t}=Da(),[a]=k.useState(()=>Mc());function r(l){if(t.isDirty&&!window.confirm("有未保存的更改，确定要打开吗？"))return;const d=Hv(l);d&&(n({type:"LOAD_MAP",map:d}),e())}function s(l){if(t.isDirty&&!window.confirm("有未保存的更改，确定要打开吗？"))return;const d={...l,id:`custom_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,cells:l.cells.map(u=>u.map(f=>({...f}))),startZones:Object.fromEntries(Object.entries(l.startZones).map(([u,f])=>[u,f.map(m=>({...m}))]))};n({type:"LOAD_MAP",map:d}),e()}function i(l){window.confirm("确定删除此地图？")&&(Uv(l),e())}return o.jsx("div",{className:"me__overlay",onClick:e,children:o.jsxs("div",{className:"me__dialog",onClick:l=>l.stopPropagation(),children:[o.jsx("h3",{children:"打开地图"}),a.length>0&&o.jsxs(o.Fragment,{children:[o.jsx("h4",{children:"自定义地图"}),o.jsx("div",{className:"me__dialog-list",children:a.map(l=>o.jsxs("div",{className:"me__dialog-item",children:[o.jsxs("span",{children:[l.nameCn," (",l.height,"×",l.width,")"]}),o.jsx("span",{className:"me__dialog-date",children:new Date(l.savedAt).toLocaleDateString()}),o.jsx("button",{className:"me__btn me__btn--sm",onClick:()=>r(l.id),children:"打开"}),o.jsx("button",{className:"me__btn me__btn--sm me__btn--danger",onClick:()=>i(l.id),children:"删除"})]},l.id))})]}),o.jsx("h4",{children:"内置地图 (作为模板)"}),o.jsx("div",{className:"me__dialog-list",children:Ye.map(l=>o.jsxs("div",{className:"me__dialog-item",children:[o.jsxs("span",{children:[l.nameCn," (",l.height,"×",l.width,")"]}),o.jsx("button",{className:"me__btn me__btn--sm",onClick:()=>s(l),children:"复制"})]},l.id))}),o.jsx("div",{className:"me__dialog-actions",children:o.jsx("button",{className:"me__btn",onClick:e,children:"取消"})})]})})}function n1(){const{state:e,dispatch:n}=Da(),t=k.useRef(null),[a,r]=k.useState({x:0,y:0,scale:1}),s=k.useRef(null),i=k.useRef(!1),l=k.useRef(!1),d=k.useRef(new Set),{map:u,activeTool:f,showCoords:m,selectedZoneTeam:g,brushSize:h}=e,{width:x,height:p}=u;k.useEffect(()=>{const N=t.current;if(!N)return;const z=N.clientWidth,E=N.clientHeight,J=x*lo,D=p*lo;if(!z||!E)return;const $=Math.max(bu,Math.min(1.5,Math.min(z/J,E/D)));r({x:(z-J*$)/2,y:(E-D*$)/2,scale:$})},[x,p]),k.useEffect(()=>{const N=t.current;if(!N)return;const z=E=>{E.preventDefault();const J=E.deltaY<0?vu:-vu;r(D=>({...D,scale:Math.min(Xv,Math.max(bu,D.scale+J))}))};return N.addEventListener("wheel",z,{passive:!1}),()=>N.removeEventListener("wheel",z)},[]);const _=k.useCallback(N=>{N.button!==2&&(s.current={startX:N.clientX,startY:N.clientY,origX:a.x,origY:a.y},i.current=!1,l.current=!1,d.current.clear())},[a.x,a.y]),y=k.useCallback(N=>{if(!s.current)return;const z=N.clientX-s.current.startX,E=N.clientY-s.current.startY;!i.current&&Math.sqrt(z*z+E*E)>5&&(N.buttons===4||N.buttons===2?i.current=!0:f==="terrain"||f==="startZone"||f==="eraseZone"?l.current=!0:i.current=!0),i.current&&r(J=>({...J,x:s.current.origX+z,y:s.current.origY+E}))},[f]),b=k.useCallback(()=>{s.current=null,i.current=!1,l.current=!1,d.current.clear()},[]),v=k.useMemo(()=>{const N=new Map;for(const[z,E]of Object.entries(u.startZones)){const J=Number(z);for(const D of E)N.set(`${D.row},${D.col}`,J)}return N},[u.startZones]);function I(N,z){const E=`${N},${z}`;if(f==="terrain")if(h===1)d.current.has(E)||(d.current.add(E),n({type:"PAINT_CELL",row:N,col:z}));else{const J=[],D=Math.floor(h/2);for(let $=-D;$<=D;$++)for(let L=-D;L<=D;L++){const K=N+$,M=z+L;if(K>=0&&K<p&&M>=0&&M<x){const V=`${K},${M}`;d.current.has(V)||(d.current.add(V),J.push({row:K,col:M}))}}J.length&&n({type:"PAINT_AREA",cells:J})}else if(f==="startZone")n({type:"ADD_ZONE_CELL",team:g,position:{row:N,col:z}});else if(f==="eraseZone"){const J=v.get(E);J!==void 0&&n({type:"REMOVE_ZONE_CELL",team:J,position:{row:N,col:z}})}}const{x:S,y:C,scale:w}=a;return o.jsx("div",{className:"me__viewport",ref:t,onMouseDown:_,onMouseMove:y,onMouseUp:b,onMouseLeave:b,onContextMenu:N=>N.preventDefault(),children:o.jsx("div",{className:"me__grid",style:{transform:`translate(${S}px, ${C}px) scale(${w})`,transformOrigin:"top left",display:"grid",gridTemplateColumns:`repeat(${x}, ${lo}px)`,gridTemplateRows:`repeat(${p}, ${lo}px)`},children:u.cells.flatMap((N,z)=>N.map((E,J)=>{const D=bc(E),$=`${z},${J}`,L=v.get($),K=L!==void 0?us[L%us.length]:"";return o.jsxs("div",{className:`me__cell${L!==void 0?" me__cell--zone":""}`,style:{backgroundImage:`url("${D}")`,backgroundSize:"cover",...L!==void 0?{borderColor:K,boxShadow:`inset 0 0 8px ${K}66`}:{}},onMouseDown:M=>{M.button===0&&!i.current&&I(z,J)},onMouseEnter:()=>{l.current&&I(z,J)},children:[E.terrain==="highland"&&o.jsxs("span",{className:"me__cell-elev",children:["+",E.elevation]}),m&&o.jsxs("span",{className:"me__cell-coord",children:[z,",",J]}),L!==void 0&&o.jsxs("span",{className:"me__cell-zone",style:{color:K},children:["Z",L]})]},$)}))})})}function t1(){const{state:e,dispatch:n}=Da();return o.jsxs("div",{className:"me__palette",children:[o.jsx("div",{className:"me__palette-grid",children:kl.map(({terrain:t,label:a,icon:r},s)=>o.jsxs("button",{className:`me__palette-btn${e.selectedTerrain===t&&e.activeTool==="terrain"?" me__palette-btn--active":""}`,onClick:()=>n({type:"SET_TERRAIN",terrain:t}),title:`${a} (${s+1})`,children:[r," ",a]},t))}),e.selectedTerrain==="highland"&&o.jsxs("div",{className:"me__sub-option",children:[o.jsx("label",{children:"高度:"}),[1,2,3].map(t=>o.jsxs("button",{className:`me__mini-btn${e.selectedElevation===t?" me__mini-btn--active":""}`,onClick:()=>n({type:"SET_ELEVATION",elevation:t}),children:["+",t]},t))]}),e.selectedTerrain!=="highland"&&e.selectedTerrain!=="plain"&&o.jsxs("div",{className:"me__sub-option",children:[o.jsx("label",{children:"变体:"}),[0,1,2,3].map(t=>o.jsx("button",{className:`me__mini-btn${e.selectedVariant===t?" me__mini-btn--active":""}`,onClick:()=>n({type:"SET_VARIANT",variant:t}),children:t},t))]}),o.jsxs("div",{className:"me__sub-option",children:[o.jsx("label",{children:"笔刷:"}),[1,2,3].map(t=>o.jsxs("button",{className:`me__mini-btn${e.brushSize===t?" me__mini-btn--active":""}`,onClick:()=>n({type:"SET_BRUSH_SIZE",size:t}),children:[t,"×",t]},t))]})]})}function a1(){const{state:e,dispatch:n}=Da(),{map:t}=e;return o.jsxs("div",{className:"me__props",children:[o.jsxs("label",{className:"me__prop-row",children:[o.jsx("span",{children:"名称(中)"}),o.jsx("input",{type:"text",value:t.nameCn,onChange:a=>n({type:"SET_MAP_META",nameCn:a.target.value})})]}),o.jsxs("label",{className:"me__prop-row",children:[o.jsx("span",{children:"名称(日)"}),o.jsx("input",{type:"text",value:t.nameJa,onChange:a=>n({type:"SET_MAP_META",nameJa:a.target.value})})]}),o.jsxs("div",{className:"me__prop-row",children:[o.jsx("span",{children:"尺寸"}),o.jsx("input",{type:"number",min:3,max:25,value:t.width,onChange:a=>n({type:"RESIZE_MAP",newWidth:Number(a.target.value),newHeight:t.height}),style:{width:50}}),"×",o.jsx("input",{type:"number",min:3,max:25,value:t.height,onChange:a=>n({type:"RESIZE_MAP",newWidth:t.width,newHeight:Number(a.target.value)}),style:{width:50}})]}),o.jsxs("label",{className:"me__prop-row",children:[o.jsx("span",{children:"最大玩家"}),o.jsx("select",{value:t.maxPlayers,onChange:a=>n({type:"SET_MAP_META",maxPlayers:Number(a.target.value)}),children:[2,3,4,6,8].map(a=>o.jsx("option",{value:a,children:a},a))})]}),o.jsxs("label",{className:"me__prop-row",children:[o.jsx("span",{children:"最大队伍"}),o.jsx("select",{value:t.maxTeams,onChange:a=>n({type:"SET_MAP_META",maxTeams:Number(a.target.value)}),children:Array.from({length:t.maxPlayers},(a,r)=>r+1).filter(a=>a>=2).map(a=>o.jsx("option",{value:a,children:a},a))})]})]})}function r1(){const{state:e,dispatch:n}=Da(),{map:t,activeTool:a,selectedZoneTeam:r}=e;return o.jsxs("div",{className:"me__zones",children:[o.jsxs("div",{className:"me__zones-tools",children:[o.jsx("button",{className:`me__btn me__btn--sm${a==="startZone"?" me__btn--active":""}`,onClick:()=>n({type:"SET_TOOL",tool:"startZone"}),children:"添加点"}),o.jsx("button",{className:`me__btn me__btn--sm${a==="eraseZone"?" me__btn--active":""}`,onClick:()=>n({type:"SET_TOOL",tool:"eraseZone"}),children:"删除点"})]}),Array.from({length:t.maxTeams},(s,i)=>i).map(s=>{const i=t.startZones[s]??[],l=us[s%us.length],d=r===s;return o.jsxs("div",{className:`me__zone-row${d?" me__zone-row--active":""}`,style:{borderLeftColor:l},onClick:()=>n({type:"SET_ZONE_TEAM",team:s}),children:[o.jsxs("span",{style:{color:l},children:["区域 ",s+1]}),o.jsxs("span",{className:"me__zone-count",children:[i.length," 点"]}),o.jsx("button",{className:"me__btn me__btn--sm me__btn--danger",onClick:u=>{u.stopPropagation(),n({type:"CLEAR_ZONE",team:s})},children:"清空"})]},s)})]})}const o1=`
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
`;function s1(e){return e?`(${e.row},${e.col})`:"(无)"}function Gt(e){if(!e)return"(空)";const n=te(e.defId),t=(n==null?void 0:n.nameCn)??e.defId,a=e.destroyed?" [已摧毁]":"";return`${t}(${e.defId})${a}`}function i1(e,n){const t=e.players[n];if(!t)return`  ${n}: (不存在)`;const a=q.find(s=>s.id===t.unitId),r=[];return r.push(`  ── ${n} ──`),r.push(`    机体: ${(a==null?void 0:a.nameCn)??t.unitId} (${t.unitId})`),r.push(`    位置: ${s1(t.position)}  朝向: ${t.facing}`),r.push(`    状态: ${t.isDefeated?"已击破":"存活"}`),r.push(`    手牌(${t.hand.length}): ${t.hand.map(s=>Gt(s)).join(", ")||"(无)"}`),r.push(`    阶段1配置: ${Gt(t.plotSeg1)}`),r.push(`    阶段2配置: ${Gt(t.plotSeg2)}`),r.push(`    辅助区(${t.auxiliary.length}): ${t.auxiliary.map(s=>Gt(s)).join(", ")||"(无)"}`),r.push(`    弃牌堆(${t.discard.length}): ${t.discard.map(s=>Gt(s)).join(", ")||"(无)"}`),r.push(`    摧毁区(${t.destroyedCards.length}): ${t.destroyedCards.map(s=>Gt(s)).join(", ")||"(无)"}`),r.push(`    卡组剩余: ${t.deck.filter(s=>!s.destroyed).length} 张`),r.join(`
`)}function l1(e){var t,a,r;const n=[];if(n.push("══════════════════════════════════════════"),n.push("  当前状态快照"),n.push("══════════════════════════════════════════"),n.push(`回合: ${e.roundNumber}`),n.push(`阶段: ${e.phase}`),n.push(`当前时机: ${e.currentTiming??"(无)"}`),n.push(`行动顺序: ${e.turnOrder.length>0?e.turnOrder.join(" → "):"(无)"}`),n.push(`布局步骤: ${e.plottingStep??"(无)"}`),n.push(`活跃玩家: ${e.activePlayer}`),n.push(`地图: ${((t=e.map)==null?void 0:t.id)??"(无)"}`),n.push(`地雷数: ${((a=e.mines)==null?void 0:a.length)??0}`),(r=e.mines)!=null&&r.length&&n.push(`隐藏指示物: ${e.mines.map(s=>`(${s.position.row},${s.position.col}) owner=${s.ownerId}`).join("；")}`),e.pendingDamage){const s=e.pendingDamage;n.push(`待处理伤害: 目标=${s.targetId}, 剩余=${s.remaining}, 来源=${s.source}, 攻击者=${s.attackerId??"(无)"}, 已选=${s.selectedInstanceIds.length}`)}n.push(""),n.push("── 玩家状态 ──");for(const s of e.playerIds)n.push(i1(e,s));return n.push(""),n.join(`
`)}function of(e,n){const t=new Date,a=t.toISOString().replace(/[:.]/g,"-").slice(0,19),r=[];r.push("╔══════════════════════════════════════════╗"),r.push("║   Embryo Machine — 全量游戏日志导出      ║"),r.push("╚══════════════════════════════════════════╝"),r.push(`导出时间: ${t.toLocaleString("zh-CN")}`),n!=null&&n.localPlayerId&&r.push(`本地玩家: ${n.localPlayerId}`),n!=null&&n.connectionStatus&&r.push(`连接状态: ${n.connectionStatus}`),r.push(""),r.push(l1(e)),r.push("══════════════════════════════════════════"),r.push("  完整游戏日志 (按时间顺序)"),r.push("══════════════════════════════════════════");const s=e.log.filter(f=>!f.startsWith("[DBG]"));for(let f=0;f<s.length;f++)r.push(`[${String(f+1).padStart(4," ")}] ${s[f]}`);r.push(""),r.push(`── 共 ${s.length} 条日志 ──`);const i=r.join(`
`),l=new Blob([i],{type:"text/plain;charset=utf-8"}),d=URL.createObjectURL(l),u=document.createElement("a");u.href=d,u.download=`embryo-log-${a}.txt`,u.click(),URL.revokeObjectURL(d)}const yu=[1e3,2e3,4e3,8e3,15e3];class c1{constructor(n,t,a){en(this,"ws",null);en(this,"url");en(this,"sessionId");en(this,"onMessage");en(this,"onStatus");en(this,"reconnectAttempt",0);en(this,"reconnectTimer",null);en(this,"intentionallyClosed",!1);en(this,"hasEverConnected",!1);this.url=n,this.sessionId=localStorage.getItem("embryo-session-id"),this.onMessage=t,this.onStatus=a}connect(){this.intentionallyClosed=!1,this.onStatus("connecting");const n=this.sessionId?`?sessionId=${this.sessionId}`:"";this.ws=new WebSocket(`${this.url}${n}`),this.ws.onopen=()=>{var t;if(this.intentionallyClosed){(t=this.ws)==null||t.close(),this.ws=null,this.onStatus("disconnected");return}this.hasEverConnected=!0,this.reconnectAttempt=0,this.onStatus("connected")},this.ws.onmessage=t=>{try{const a=JSON.parse(t.data);a.type==="SESSION_ID"&&(this.sessionId=a.sessionId,localStorage.setItem("embryo-session-id",a.sessionId)),this.onMessage(a)}catch{console.warn("[GameSocket] Failed to parse message:",t.data)}},this.ws.onclose=()=>{if(this.intentionallyClosed){this.onStatus("disconnected");return}this.hasEverConnected||(this.sessionId=null,localStorage.removeItem("embryo-session-id")),this.onStatus("reconnecting"),this.scheduleReconnect()},this.ws.onerror=()=>{}}send(n){var t;((t=this.ws)==null?void 0:t.readyState)===WebSocket.OPEN?this.ws.send(JSON.stringify(n)):console.warn("[GameSocket] Cannot send — not connected")}disconnect(){if(this.intentionallyClosed=!0,this.reconnectTimer&&(clearTimeout(this.reconnectTimer),this.reconnectTimer=null),this.ws){const n=this.ws.readyState;n===WebSocket.OPEN||n===WebSocket.CLOSING?(this.ws.close(),this.ws=null):n===WebSocket.CONNECTING&&(this.ws.onmessage=null,this.ws.onerror=null)}this.onStatus("disconnected")}clearSession(){this.sessionId=null,localStorage.removeItem("embryo-session-id")}get isConnected(){var n;return((n=this.ws)==null?void 0:n.readyState)===WebSocket.OPEN}scheduleReconnect(){const n=yu[Math.min(this.reconnectAttempt,yu.length-1)];this.reconnectAttempt++,this.reconnectTimer=setTimeout(()=>{this.reconnectTimer=null,this.connect()},n)}}const sf=k.createContext(null);function d1({serverUrl:e,children:n}){const[t,a]=k.useState(null),[r,s]=k.useState(null),[i,l]=k.useState(null),[d,u]=k.useState("disconnected"),[f,m]=k.useState(null),[g,h]=k.useState(null),[x,p]=k.useState([]),[_,y]=k.useState(null),[b,v]=k.useState(null),[I,S]=k.useState(null),C=k.useRef(null),w=k.useRef(null),N=k.useRef(-1),z=k.useRef([]),E=k.useCallback(M=>{switch(M.type){case"SESSION_ID":break;case"ROOM_STATE":s(M.room),l(M.yourPlayerId);break;case"ROOM_LIST":p(M.rooms);break;case"GAME_STATE":{M.state.phase==="plotting"&&(w.current!=="plotting"||N.current!==M.state.roundNumber)&&m(null),w.current=M.state.phase,N.current=M.state.roundNumber,a(M.state),l(M.yourPlayerId),y(M.currentTurnPlayerId??null),v(M.turnDeadline??null),M.replayActions&&M.replayActions.length>0&&(z.current=[...z.current,...M.replayActions]);break}case"PLOTTING_STATUS":m({confirmed:M.confirmed,total:M.total});break;case"GAME_STARTED":M.initialState&&(S(M.initialState),z.current=[]);break;case"RECONNECTED":s(M.room),a(M.state),l(M.yourPlayerId),y(M.currentTurnPlayerId??null),v(M.turnDeadline??null),w.current=M.state.phase,N.current=M.state.roundNumber,M.initialState&&S(M.initialState),M.replayActions&&(z.current=M.replayActions);break;case"SPECTATE_STATE":a(M.state),s(M.room),l(null);break;case"ACTION_REJECTED":h(M.reason),setTimeout(()=>h(null),5e3);break;case"PLAYER_JOINED":case"PLAYER_LEFT":case"PLAYER_RECONNECTED":case"PLAYER_DISCONNECTED":break;case"ERROR":h(M.message),setTimeout(()=>h(null),5e3);break}},[]);k.useEffect(()=>{const M=new c1(e,E,u);return C.current=M,M.connect(),()=>{M.clearSession(),M.disconnect(),C.current=null}},[e,E]);const J=k.useCallback(M=>{var V;(V=C.current)==null||V.send({type:"GAME_ACTION",action:M})},[]),D=k.useCallback(M=>{var V;(V=C.current)==null||V.send({type:"LOBBY_ACTION",action:M})},[]),$=k.useCallback(M=>{var V;(V=C.current)==null||V.send(M)},[]),L=k.useCallback(M=>te(M),[]),K={state:t,room:r,localPlayerId:i,dispatch:J,sendLobbyAction:D,send:$,getCard:L,connectionStatus:d,plottingStatus:f,isOnline:!0,lastError:g,roomList:x,currentTurnPlayerId:_,turnDeadline:b,replayInitialState:I,replayActions:z.current};return o.jsx(sf.Provider,{value:K,children:n})}function Ec(){const e=k.useContext(sf);if(!e)throw new Error("useOnlineGame must be used within OnlineGameProvider");return e}function u1({children:e}){const{state:n,localPlayerId:t,dispatch:a,getCard:r,plottingStatus:s,send:i,currentTurnPlayerId:l,replayInitialState:d,replayActions:u}=Ec(),[f,m]=k.useState(!0),g=k.useRef(-1),h=k.useRef(null),x={player1:!1,player2:!1,player1Difficulty:"hard",player2Difficulty:"hard"},p=k.useCallback(I=>{if(I.type==="ADVANCE_TIMING"||I.type==="ADVANCE_PHASE"){i({type:"TIMING_DONE"});return}I.type==="START_PLOTTING"||I.type==="DRAW_CARDS"||a(I)},[a,i]),_=k.useCallback(()=>d?{initialState:d,actions:[...u]}:null,[d,u]);if(k.useEffect(()=>{if(!(!f||!n)){if(n.phase==="plotting"&&h.current!=="plotting"&&n.roundNumber!==g.current){g.current=n.roundNumber;try{Sc("auto",n,x,!0)}catch{}}h.current=n.phase}},[f,n]),!n||!t)return null;let y=n;if(n.phase==="plotting"){const I=(s==null?void 0:s.confirmed.includes(t))??!1;y={...n,plottingStep:I?"complete":t}}const b={player1:t!=="player1",player2:t!=="player2",player1Difficulty:"easy",player2Difficulty:"easy",playerAI:Object.fromEntries(n.playerIds.map(I=>[I,I!==t])),playerDifficulty:Object.fromEntries(n.playerIds.map(I=>[I,"easy"]))},v={state:y,dispatch:p,rawDispatch:p,getCard:r,aiConfig:b,setAIConfig:()=>{},getReplayData:_,autoSaveEnabled:f,setAutoSaveEnabled:m,exposureMode:!1,setExposureMode:()=>{},isOnline:!0,localPlayerId:t,currentTurnPlayerId:l};return o.jsx(Ls.Provider,{value:v,children:e})}const p1={lobby:"等待中",playing:"游戏中",finished:"已结束"};function lf({onBack:e,onCreateRoom:n,onJoinRoom:t,roomList:a,onRefreshRooms:r,onSpectate:s}){const[i,l]=k.useState("create"),[d,u]=k.useState(()=>localStorage.getItem("embryo-player-name")??""),[f,m]=k.useState(""),[g,h]=k.useState(""),[x,p]=k.useState(2),[_,y]=k.useState(2),[b,v]=k.useState(Ye[0].id);function I(M){const V=[];for(let R=2;R<=M;R++)M%R===0&&V.push(R);return V}function S(M){p(M);const V=I(M);V.includes(_)||y(V[0]);const R=Ye.find(A=>A.id===b);if(!R||R.maxPlayers<M){const A=Ye.find(B=>B.maxPlayers>=M);A&&v(A.id)}}const[C,w]=k.useState(""),[N,z]=k.useState(!1),[E,J]=k.useState(0);function D(){const M=d.trim()||`Player_${Math.random().toString(36).slice(2,6)}`;return localStorage.setItem("embryo-player-name",M),M}function $(){n(D(),{maxPlayers:x,teamCount:_,mapId:b,turnTimeoutSeconds:E,password:N?C:void 0})}function L(){const M=f.trim().toUpperCase();M&&t(M,D(),g||void 0)}function K(M,V){m(M),V?(l("join"),h("")):t(M,D())}return o.jsxs("div",{className:"ol-screen",children:[o.jsxs("div",{className:"ol-center",children:[o.jsx("h1",{className:"ol-title",children:"联机对战"}),o.jsx("p",{className:"ol-subtitle",children:"创建、加入或浏览房间"}),o.jsx("div",{className:"ol-divider"}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"昵称"}),o.jsx("input",{className:"ol-input",value:d,onChange:M=>u(M.target.value),placeholder:"输入昵称…",maxLength:16})]}),o.jsxs("div",{className:"ol-tabs",children:[o.jsx("button",{className:`ol-tab${i==="create"?" ol-tab--active":""}`,onClick:()=>l("create"),children:"创建房间"}),o.jsx("button",{className:`ol-tab${i==="join"?" ol-tab--active":""}`,onClick:()=>l("join"),children:"加入房间"}),o.jsx("button",{className:`ol-tab${i==="browse"?" ol-tab--active":""}`,onClick:()=>{l("browse"),r==null||r()},children:"浏览房间"})]}),i==="create"&&o.jsxs("div",{className:"ol-panel",children:[o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"最大玩家数"}),o.jsx("select",{className:"ol-select",value:x,onChange:M=>S(+M.target.value),children:[2,3,4,5,6,7,8].map(M=>o.jsxs("option",{value:M,children:[M," 人"]},M))})]}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"队伍数量"}),o.jsx("select",{className:"ol-select",value:_,onChange:M=>y(+M.target.value),children:I(x).map(M=>o.jsxs("option",{value:M,children:[M," 队 (",x/M,"人/队)"]},M))})]}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"地图"}),o.jsx("select",{className:"ol-select",value:b,onChange:M=>v(M.target.value),children:Ye.filter(M=>M.maxPlayers>=x).map(M=>o.jsxs("option",{value:M.id,children:[M.nameCn," (",M.maxPlayers,"人)"]},M.id))})]}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"回合限时"}),o.jsxs("select",{className:"ol-select",value:E,onChange:M=>J(+M.target.value),children:[o.jsx("option",{value:0,children:"无限制"}),o.jsx("option",{value:30,children:"30 秒"}),o.jsx("option",{value:60,children:"60 秒"}),o.jsx("option",{value:90,children:"90 秒"}),o.jsx("option",{value:120,children:"120 秒"})]})]}),o.jsxs("label",{className:"ol-check",onClick:()=>z(!N),children:[o.jsx("span",{className:`ol-check__box${N?" ol-check__box--on":""}`,children:N?"✓":""}),o.jsx("span",{children:"设置房间密码"})]}),N&&o.jsx("div",{className:"ol-field",children:o.jsx("input",{className:"ol-input",value:C,onChange:M=>w(M.target.value),placeholder:"输入密码…",maxLength:20,type:"password"})}),o.jsx("button",{className:"ol-btn ol-btn--primary",onClick:$,children:"创建房间"})]}),i==="join"&&o.jsxs("div",{className:"ol-panel",children:[o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"房间号"}),o.jsx("input",{className:"ol-input ol-input--code",value:f,onChange:M=>m(M.target.value.toUpperCase()),placeholder:"输入6位房间号",maxLength:6})]}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"密码（若有）"}),o.jsx("input",{className:"ol-input",value:g,onChange:M=>h(M.target.value),placeholder:"无密码可留空",maxLength:20,type:"password"})]}),o.jsx("button",{className:"ol-btn ol-btn--primary",onClick:L,disabled:f.trim().length<1,children:"加入房间"})]}),i==="browse"&&o.jsxs("div",{className:"ol-panel",children:[o.jsxs("div",{className:"ol-browse-header",children:[o.jsx("span",{className:"ol-label",children:"在线房间"}),o.jsx("button",{className:"ol-refresh-btn",onClick:r,children:"刷新"})]}),!a||a.length===0?o.jsx("div",{className:"ol-empty",children:"暂无房间，创建一个吧"}):o.jsx("div",{className:"ol-room-list",children:a.map(M=>o.jsxs("div",{className:"ol-room-row",children:[o.jsx("span",{className:"ol-room-row__code",children:M.roomCode}),o.jsx("span",{className:"ol-room-row__host",children:M.hostName}),o.jsx("span",{className:`ol-room-row__status ol-room-row__status--${M.status}`,children:p1[M.status]??M.status}),o.jsxs("span",{className:"ol-room-row__count",children:[M.playerCount,"/",M.maxPlayers]}),M.hasPassword&&o.jsx("span",{className:"ol-room-row__lock",title:"需要密码",children:"🔒"}),M.status==="lobby"?o.jsx("button",{className:"ol-room-row__join",onClick:()=>K(M.roomCode,M.hasPassword),children:"加入"}):o.jsx("button",{className:"ol-room-row__join",onClick:()=>s==null?void 0:s(M.roomCode),disabled:!s,children:"观战"})]},M.roomCode))})]}),o.jsx("button",{className:"ol-btn ol-btn--back",onClick:e,children:"返回主菜单"})]}),o.jsx("style",{children:m1})]})}const m1=`
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
`;function f1({room:e,localPlayerId:n,connectionStatus:t,lastError:a,send:r,onLeave:s}){var J;const[i,l]=k.useState(""),d=e.slots.find(D=>D.playerId===n),u=n!=null&&n===((J=e.slots[0])==null?void 0:J.playerId),f=(d==null?void 0:d.isReady)??!1,m=e.settings.teamCount,g=e.slots.filter(D=>D.type!=="empty"),h=g.length>=2&&g.every(D=>D.isReady),x=e.slots.filter(D=>D.type!=="empty").map(D=>D.unitId),p=e.slots.filter(D=>D.type!=="empty"&&D.playerId!==n).map(D=>D.unitId),_=e.slots.filter(D=>D.type==="ai"),y=k.useState(!1);k.useEffect(()=>{if(y[0]||!n)return;if(d!=null&&d.unitId&&d.unitId!=="TR"){l(d.unitId),y[1](!0);return}const D=q.filter($=>!p.includes($.id));if(D.length>0){const $=D[Math.floor(Math.random()*D.length)];l($.id),r({type:"LOBBY_ACTION",action:{type:"SELECT_UNIT",playerId:n,unitId:$.id}}),y[1](!0)}},[n]);function b(D){l(D),r({type:"LOBBY_ACTION",action:{type:"SELECT_UNIT",playerId:n,unitId:D}})}function v(){const D=new Set(e.slots.filter(L=>L.type==="human"&&L.playerId!==n).map(L=>L.unitId)),$=q.filter(L=>!D.has(L.id));if($.length>0){const L=$[Math.floor(Math.random()*$.length)];b(L.id),D.add(L.id)}if(u)for(const L of _){const K=q.filter(V=>!D.has(V.id));if(K.length===0)break;const M=K[Math.floor(Math.random()*K.length)];r({type:"LOBBY_ACTION",action:{type:"SELECT_UNIT",playerId:L.playerId,unitId:M.id}}),D.add(M.id)}}function I(){r({type:f?"UNREADY":"READY"})}function S(){r({type:"START_GAME"})}function C(D,$){r({type:"LOBBY_ACTION",action:{type:"SELECT_UNIT",playerId:D,unitId:$}})}function w(D,$){r({type:"SET_SLOT_TYPE",playerId:D,slotType:$})}function N(D,$){r({type:"SET_SLOT_TEAM",playerId:D,team:$})}function z(D){r({type:"KICK_PLAYER",playerId:D})}function E(){r({type:"LEAVE_ROOM"}),s()}return o.jsxs("div",{className:"rm-screen",children:[o.jsxs("div",{className:"rm-center",children:[o.jsxs("div",{className:"rm-header",children:[o.jsx("h2",{className:"rm-room-title",children:"房间"}),o.jsx("div",{className:"rm-room-code",children:e.roomCode}),e.hasPassword&&o.jsx("span",{className:"rm-lock",title:"有密码",children:"🔒"}),o.jsx("div",{className:"rm-room-status",children:t==="connected"?o.jsx("span",{className:"rm-status rm-status--ok",children:"已连接"}):o.jsx("span",{className:"rm-status rm-status--warn",children:t})})]}),a&&o.jsx("div",{className:"rm-error",children:a}),o.jsx("div",{className:"rm-slots",children:e.slots.map((D,$)=>o.jsx(g1,{slot:D,isLocal:D.playerId===n,isHost:u,teamCount:m,allTakenUnits:x,onSetSlotType:w,onSetSlotTeam:N,onSelectAIUnit:C,onKick:z},$))}),o.jsxs("div",{className:"rm-section",children:[o.jsxs("div",{className:"rm-section-header",children:[o.jsx("div",{className:"rm-section-title",children:"选择机体"}),o.jsx("button",{className:"rm-random-btn",onClick:v,title:"随机选择机体",children:"🎲 随机"})]}),o.jsx("div",{className:"rm-unit-grid",children:q.map(D=>{const $=i||(d==null?void 0:d.unitId),L=p.includes(D.id),K=$===D.id;return o.jsxs("button",{className:`rm-unit-btn${K?" rm-unit-btn--selected":""}${L?" rm-unit-btn--taken":""}`,onClick:()=>!L&&b(D.id),disabled:L,title:`${D.nameCn} (${D.nameJa}) - MOV:${D.movement} EVA:${D.evasion} ASL:${D.assault} INIT:${D.initiative}`,children:[o.jsx("span",{className:"rm-unit-code",children:D.id}),o.jsx("span",{className:"rm-unit-name",children:D.nameCn})]},D.id)})})]}),o.jsxs("div",{className:"rm-actions",children:[o.jsx("button",{className:`rm-btn${f?" rm-btn--unready":" rm-btn--ready"}`,onClick:I,children:f?"取消准备":"准备"}),u&&o.jsx("button",{className:"rm-btn rm-btn--start",onClick:S,disabled:!h,title:h?"开始游戏":"等待所有玩家准备",children:"开始游戏"}),o.jsx("button",{className:"rm-btn rm-btn--leave",onClick:E,children:"离开房间"})]})]}),o.jsx("style",{children:h1})]})}function g1({slot:e,isLocal:n,isHost:t,teamCount:a,allTakenUnits:r,onSetSlotType:s,onSetSlotTeam:i,onSelectAIUnit:l,onKick:d}){const u=q.find(p=>p.id===e.unitId);if(e.type==="empty")return o.jsxs("div",{className:"rm-slot rm-slot--empty",children:[o.jsxs("span",{className:"rm-slot__index",children:["#",e.index+1]}),o.jsx("span",{className:"rm-slot__name",children:"空位"}),t&&o.jsx("button",{className:"rm-slot__toggle",onClick:()=>s(e.playerId,"ai"),children:"+AI"})]});const f=Mn[e.team%Mn.length][0],m=t&&e.type==="ai",g=t&&e.type==="ai";function h(){const p=(e.team+1)%a;i(e.playerId,p)}const x=new Set(r.filter(p=>p!==e.unitId));return o.jsxs("div",{className:`rm-slot${n?" rm-slot--local":""}${e.isConnected?"":" rm-slot--dc"}`,children:[m?o.jsx("button",{className:"rm-slot__team-btn",style:{background:f,boxShadow:`0 0 6px ${f}`},onClick:h,title:`队伍 ${e.team+1} (点击切换)`}):o.jsx("span",{className:"rm-slot__color-dot",style:{background:f},title:`队伍 ${e.team+1}`}),o.jsxs("span",{className:"rm-slot__index",children:["#",e.index+1]}),o.jsx("span",{className:"rm-slot__type-badge",children:e.type==="ai"?"AI":""}),o.jsxs("span",{className:"rm-slot__name",children:[e.playerName||e.playerId,n&&" (你)"]}),m&&o.jsxs("span",{className:"rm-slot__team-label",style:{color:f},children:["T",e.team+1]}),g?o.jsx("select",{className:"rm-slot__unit-select",value:e.unitId,onChange:p=>l(e.playerId,p.target.value),children:q.map(p=>o.jsxs("option",{value:p.id,disabled:x.has(p.id),children:[p.nameCn," (",p.id,")",x.has(p.id)?" ✕":""]},p.id))}):o.jsx("span",{className:"rm-slot__unit",children:u?u.nameCn:e.unitId||"未选择"}),o.jsx("span",{className:`rm-slot__ready${e.isReady?" rm-slot__ready--yes":""}`,children:e.isReady?"已准备":"未准备"}),!e.isConnected&&o.jsx("span",{className:"rm-slot__dc",children:"断线"}),t&&e.type==="ai"&&o.jsx("button",{className:"rm-slot__toggle",onClick:()=>s(e.playerId,"empty"),children:"移除"}),t&&!n&&e.type==="human"&&d&&o.jsx("button",{className:"rm-slot__toggle rm-slot__toggle--kick",onClick:()=>d(e.playerId),children:"踢出"})]})}const h1=`
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
.rm-slot__team-btn {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  flex-shrink: 0;
  border: 2px solid rgba(255,255,255,0.3);
  cursor: pointer;
  padding: 0;
  transition: transform 0.15s, border-color 0.15s;
}
.rm-slot__team-btn:hover {
  transform: scale(1.25);
  border-color: rgba(255,255,255,0.7);
}
.rm-slot__team-label {
  font-size: 0.68rem;
  font-weight: bold;
  font-family: var(--font-mono);
  letter-spacing: 0.05em;
}
.rm-slot__unit-select {
  background: var(--color-bg);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 0.75rem;
  font-family: var(--font-mono);
  cursor: pointer;
  max-width: 130px;
}
.rm-slot__unit-select:hover,
.rm-slot__unit-select:focus {
  border-color: var(--color-accent);
  outline: none;
}
.rm-slot__unit-select option:disabled {
  color: var(--color-text-muted);
  opacity: 0.4;
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
`,x1=[{key:"alive",label:"存活",icon:"💚"},{key:"kills",label:"击杀",icon:"💀"},{key:"assists",label:"助攻",icon:"🤝"},{key:"damageDealt",label:"造成伤害",icon:"⚔️"},{key:"damageTaken",label:"承受伤害",icon:"🛡️"},{key:"cardsRemaining",label:"剩余卡牌",icon:"📋"}];function cf({state:e,onHome:n,onSaveReplay:t,isOnline:a}){const[r,s]=k.useState("kills"),[i,l]=k.useState(!0),[d,u]=k.useState("table"),[f,m]=k.useState("damageDealt"),[g,h]=k.useState(!0);k.useEffect(()=>{const v=setTimeout(()=>h(!1),800);return()=>clearTimeout(v)},[]);const x=k.useMemo(()=>Jh(e),[e]),p=k.useMemo(()=>Bh(x,r,i),[x,r,i]),_=k.useMemo(()=>{const v=new Set;for(const I of e.playerIds)e.players[I].isDefeated||v.add(e.teams[I]);if(v.size===0)return"平局 — 双方同时全灭";if(v.size===1){const I=[...v][0],S=e.playerIds.filter(C=>e.teams[C]===I).map(C=>{const w=q.find(N=>N.id===e.players[C].unitId);return(w==null?void 0:w.nameCn)??C});return`队伍 ${I+1} 获胜 — ${S.join("、")}`}return"游戏结束"},[e]);function y(v){r===v?l(!i):(s(v),l(!0))}const b=k.useMemo(()=>Math.max(1,...x.map(v=>{switch(f){case"kills":return v.kills;case"assists":return v.assists;case"damageDealt":return v.damageDealt;case"damageTaken":return v.damageTaken;case"cardsRemaining":return v.cardsRemaining;default:return 0}})),[x,f]);return o.jsxs("div",{className:`bs-screen ${g?"bs-screen--entering":""}`,children:[o.jsxs("div",{className:"bs-header",children:[o.jsx("div",{className:"bs-header__icon",children:"📊"}),o.jsx("h1",{className:"bs-header__title",children:"战斗结算"}),o.jsx("p",{className:"bs-header__subtitle",children:_}),o.jsxs("p",{className:"bs-header__round",children:["共 ",e.roundNumber," 回合"]})]}),o.jsxs("div",{className:"bs-toggle-bar",children:[o.jsx("button",{className:`bs-toggle-btn ${d==="table"?"bs-toggle-btn--active":""}`,onClick:()=>u("table"),children:"📋 数据表"}),o.jsx("button",{className:`bs-toggle-btn ${d==="chart"?"bs-toggle-btn--active":""}`,onClick:()=>u("chart"),children:"📊 图表"})]}),o.jsx("div",{className:"bs-content",children:d==="table"?o.jsx(b1,{stats:p,state:e,sortKey:r,sortDesc:i,onSort:y}):o.jsx(v1,{stats:x,state:e,metric:f,chartMax:b,onMetricChange:m})}),o.jsxs("div",{className:"bs-actions",children:[o.jsx("button",{className:"bs-btn bs-btn--primary",onClick:n,children:"🏠 返回主菜单"}),!a&&o.jsx("button",{className:"bs-btn bs-btn--secondary",onClick:t,children:"🎬 保存录像"})]}),o.jsx("style",{children:y1})]})}function b1({stats:e,state:n,sortKey:t,sortDesc:a,onSort:r}){return o.jsx("div",{className:"bs-table-wrap",children:o.jsxs("table",{className:"bs-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{className:"bs-table__th bs-table__th--player",children:"机体"}),x1.map(s=>o.jsxs("th",{className:`bs-table__th bs-table__th--sortable ${t===s.key?"bs-table__th--sorted":""}`,onClick:()=>r(s.key),title:`按${s.label}排序`,children:[o.jsx("span",{className:"bs-table__th-icon",children:s.icon}),o.jsx("span",{className:"bs-table__th-label",children:s.label}),t===s.key&&o.jsx("span",{className:"bs-table__th-arrow",children:a?"▼":"▲"})]},s.key))]})}),o.jsx("tbody",{children:e.map((s,i)=>{const l=Sa(n,s.playerId);return o.jsxs("tr",{className:`bs-table__row ${s.alive?"":"bs-table__row--defeated"}`,style:{"--delay":`${i*.08}s`,"--player-color":l},children:[o.jsxs("td",{className:"bs-table__td bs-table__td--player",children:[o.jsx("span",{className:"bs-player-badge",style:{borderColor:l,color:l},children:s.label}),o.jsx("span",{className:"bs-player-name",children:s.unitName}),s.alive&&o.jsx("span",{className:"bs-alive-dot",title:"存活"})]}),o.jsx("td",{className:"bs-table__td bs-table__td--status",children:s.alive?o.jsx("span",{className:"bs-status bs-status--alive",children:"存活"}):o.jsx("span",{className:"bs-status bs-status--dead",children:"击毁"})}),o.jsx("td",{className:"bs-table__td bs-table__td--num",children:o.jsx("span",{className:"bs-num bs-num--kills",children:s.kills})}),o.jsx("td",{className:"bs-table__td bs-table__td--num",children:o.jsx("span",{className:"bs-num",children:s.assists})}),o.jsx("td",{className:"bs-table__td bs-table__td--num",children:o.jsx("span",{className:"bs-num bs-num--damage",children:s.damageDealt})}),o.jsx("td",{className:"bs-table__td bs-table__td--num",children:o.jsx("span",{className:"bs-num bs-num--taken",children:s.damageTaken})}),o.jsx("td",{className:"bs-table__td bs-table__td--num",children:o.jsxs("div",{className:"bs-hp-cell",children:[o.jsx("span",{className:"bs-num",children:s.cardsRemaining}),o.jsx("div",{className:"bs-hp-bar",children:o.jsx("div",{className:"bs-hp-bar__fill",style:{width:`${s.hpPercent}%`,background:s.hpPercent>50?"linear-gradient(90deg, #00c864, #44ee88)":s.hpPercent>20?"linear-gradient(90deg, #ffa000, #ffcc44)":"linear-gradient(90deg, #ff3333, #ff6666)"}})})]})})]},s.playerId)})})]})})}function v1({stats:e,state:n,metric:t,chartMax:a,onMetricChange:r}){const s=[{key:"damageDealt",label:"造成伤害",icon:"⚔️",barColor:"#ff6644"},{key:"damageTaken",label:"承受伤害",icon:"🛡️",barColor:"#4488ff"},{key:"kills",label:"击杀数",icon:"💀",barColor:"#ff3366"},{key:"assists",label:"助攻数",icon:"🤝",barColor:"#44ddaa"},{key:"cardsRemaining",label:"剩余卡牌",icon:"📋",barColor:"#ffcc00"}],i=s.find(u=>u.key===t)??s[0];function l(u){switch(t){case"kills":return u.kills;case"assists":return u.assists;case"damageDealt":return u.damageDealt;case"damageTaken":return u.damageTaken;case"cardsRemaining":return u.cardsRemaining;default:return 0}}const d=[...e].sort((u,f)=>l(f)-l(u));return o.jsxs("div",{className:"bs-chart",children:[o.jsx("div",{className:"bs-chart__selector",children:s.map(u=>o.jsxs("button",{className:`bs-chart__metric-btn ${t===u.key?"bs-chart__metric-btn--active":""}`,onClick:()=>r(u.key),children:[u.icon," ",u.label]},u.key))}),o.jsx("div",{className:"bs-chart__bars",children:d.map((u,f)=>{const m=l(u),g=a>0?m/a*100:0,h=Sa(n,u.playerId);return o.jsxs("div",{className:"bs-chart__bar-row",style:{"--delay":`${f*.1}s`},children:[o.jsxs("div",{className:"bs-chart__bar-label",children:[o.jsx("span",{className:"bs-chart__bar-badge",style:{borderColor:h,color:h},children:u.label}),o.jsx("span",{className:"bs-chart__bar-name",children:u.unitName})]}),o.jsxs("div",{className:"bs-chart__bar-track",children:[o.jsx("div",{className:"bs-chart__bar-fill",style:{width:`${g}%`,background:`linear-gradient(90deg, ${i.barColor}dd, ${i.barColor}88)`,boxShadow:`0 0 12px ${i.barColor}44`}}),o.jsx("span",{className:"bs-chart__bar-value",children:m})]})]},u.playerId)})}),o.jsxs("div",{className:"bs-chart__summary",children:[o.jsx("h3",{className:"bs-chart__summary-title",children:"综合对比"}),o.jsx("div",{className:"bs-chart__summary-grid",children:d.map(u=>{const f=Sa(n,u.playerId);return o.jsxs("div",{className:"bs-chart__summary-card",style:{borderColor:`${f}44`},children:[o.jsxs("div",{className:"bs-chart__summary-header",style:{color:f},children:[u.label," ",u.unitName,!u.alive&&o.jsx("span",{className:"bs-chart__summary-dead",children:"✕"})]}),o.jsxs("div",{className:"bs-chart__summary-stats",children:[o.jsxs("div",{className:"bs-chart__summary-stat",children:[o.jsx("span",{className:"bs-chart__summary-stat-icon",children:"💀"}),o.jsx("span",{children:u.kills})]}),o.jsxs("div",{className:"bs-chart__summary-stat",children:[o.jsx("span",{className:"bs-chart__summary-stat-icon",children:"🤝"}),o.jsx("span",{children:u.assists})]}),o.jsxs("div",{className:"bs-chart__summary-stat",children:[o.jsx("span",{className:"bs-chart__summary-stat-icon",children:"⚔️"}),o.jsx("span",{children:u.damageDealt})]}),o.jsxs("div",{className:"bs-chart__summary-stat",children:[o.jsx("span",{className:"bs-chart__summary-stat-icon",children:"🛡️"}),o.jsx("span",{children:u.damageTaken})]})]}),o.jsxs("div",{className:"bs-chart__summary-hp",children:[o.jsx("div",{className:"bs-hp-bar",style:{height:6,borderRadius:3},children:o.jsx("div",{className:"bs-hp-bar__fill",style:{width:`${u.hpPercent}%`,background:u.hpPercent>50?"#00c864":u.hpPercent>20?"#ffa000":"#ff3333"}})}),o.jsxs("span",{className:"bs-chart__summary-hp-text",children:[u.cardsRemaining,"/",u.totalCards]})]})]},u.playerId)})})]})]})}const y1=`
/* ═══════════════════════════════════════════════════════
   Battle Stats Screen
   ═══════════════════════════════════════════════════════ */

.bs-screen {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-bg);
  background-image:
    radial-gradient(ellipse at 30% 20%, rgba(0, 240, 255, 0.04) 0%, transparent 60%),
    radial-gradient(ellipse at 70% 80%, rgba(255, 0, 200, 0.03) 0%, transparent 60%);
  padding: 24px;
  gap: 20px;
  overflow-y: auto;
  animation: bs-fadeIn 0.6s ease-out;
}

.bs-screen--entering {
  animation: bs-slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes bs-fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes bs-slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Header ── */
.bs-header {
  text-align: center;
  padding: 20px 0 8px;
}

.bs-header__icon {
  font-size: 3rem;
  margin-bottom: 8px;
  animation: bs-iconPulse 2s ease-in-out infinite;
}

@keyframes bs-iconPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.bs-header__title {
  font-family: var(--font-mono);
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-accent);
  text-shadow: 0 0 20px rgba(0, 240, 255, 0.4);
  margin: 0 0 8px;
  letter-spacing: 0.1em;
}

.bs-header__subtitle {
  font-size: 1.1rem;
  color: var(--color-text);
  margin: 0 0 4px;
}

.bs-header__round {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  margin: 0;
}

/* ── View Toggle ── */
.bs-toggle-bar {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.bs-toggle-btn {
  padding: 8px 24px;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-panel);
  color: var(--color-text-muted);
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.bs-toggle-btn:hover {
  border-color: var(--color-accent);
  color: var(--color-text);
}

.bs-toggle-btn--active {
  border-color: var(--color-accent);
  background: rgba(0, 240, 255, 0.1);
  color: var(--color-accent);
  box-shadow: 0 0 12px rgba(0, 240, 255, 0.2);
}

/* ── Content Area ── */
.bs-content {
  flex: 1;
  min-height: 0;
}

/* ── Table ── */
.bs-table-wrap {
  overflow-x: auto;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-panel);
  backdrop-filter: blur(8px);
}

.bs-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.88rem;
}

.bs-table__th {
  padding: 12px 14px;
  text-align: center;
  font-weight: 600;
  font-size: 0.78rem;
  color: var(--color-text-muted);
  border-bottom: 2px solid var(--color-border);
  white-space: nowrap;
  user-select: none;
}

.bs-table__th--player {
  text-align: left;
  padding-left: 20px;
}

.bs-table__th--sortable {
  cursor: pointer;
  transition: color 0.15s, background 0.15s;
}

.bs-table__th--sortable:hover {
  color: var(--color-accent);
  background: rgba(0, 240, 255, 0.05);
}

.bs-table__th--sorted {
  color: var(--color-accent);
  border-bottom-color: var(--color-accent);
}

.bs-table__th-icon {
  margin-right: 4px;
  font-size: 0.9rem;
}

.bs-table__th-label {
  vertical-align: middle;
}

.bs-table__th-arrow {
  margin-left: 4px;
  font-size: 0.65rem;
  color: var(--color-accent);
}

.bs-table__row {
  animation: bs-rowSlide 0.5s ease-out backwards;
  animation-delay: var(--delay, 0s);
  transition: background 0.15s;
}

.bs-table__row:hover {
  background: rgba(0, 240, 255, 0.04);
}

.bs-table__row--defeated {
  opacity: 0.65;
}

@keyframes bs-rowSlide {
  from { opacity: 0; transform: translateX(-20px); }
  to   { opacity: 1; transform: translateX(0); }
}

.bs-table__td {
  padding: 12px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  text-align: center;
  vertical-align: middle;
}

.bs-table__td--player {
  text-align: left;
  padding-left: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.bs-table__td--num {
  font-family: var(--font-mono);
  font-size: 0.95rem;
  font-weight: 600;
}

.bs-player-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 2px solid;
  border-radius: 50%;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  flex-shrink: 0;
  box-shadow: 0 0 8px currentColor;
}

.bs-player-name {
  color: var(--color-text);
  font-weight: 500;
  white-space: nowrap;
}

.bs-alive-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #00c864;
  box-shadow: 0 0 8px #00c864;
  animation: bs-dotPulse 2s ease-in-out infinite;
}

@keyframes bs-dotPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(0.8); }
}

.bs-status {
  font-size: 0.75rem;
  padding: 2px 10px;
  border-radius: 12px;
  font-weight: 600;
}

.bs-status--alive {
  color: #00c864;
  background: rgba(0, 200, 100, 0.12);
  border: 1px solid rgba(0, 200, 100, 0.25);
}

.bs-status--dead {
  color: #ff4466;
  background: rgba(255, 60, 60, 0.12);
  border: 1px solid rgba(255, 60, 60, 0.25);
}

.bs-num {
  color: var(--color-text);
}

.bs-num--kills {
  color: #ff6666;
}

.bs-num--damage {
  color: #ff9944;
}

.bs-num--taken {
  color: #6699ff;
}

.bs-hp-cell {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
}

.bs-hp-bar {
  width: 60px;
  height: 8px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.bs-hp-bar__fill {
  height: 100%;
  border-radius: 4px;
  transition: width 1s ease-out;
}

/* ── Chart ── */
.bs-chart {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.bs-chart__selector {
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
}

.bs-chart__metric-btn {
  padding: 6px 16px;
  border-radius: 20px;
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-text-muted);
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.bs-chart__metric-btn:hover {
  border-color: var(--color-accent);
  color: var(--color-text);
}

.bs-chart__metric-btn--active {
  border-color: var(--color-accent);
  background: rgba(0, 240, 255, 0.1);
  color: var(--color-accent);
}

/* Chart bars */
.bs-chart__bars {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  background: var(--color-bg-panel);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  backdrop-filter: blur(8px);
}

.bs-chart__bar-row {
  display: flex;
  align-items: center;
  gap: 12px;
  animation: bs-barAppear 0.6s ease-out backwards;
  animation-delay: var(--delay, 0s);
}

@keyframes bs-barAppear {
  from { opacity: 0; transform: translateX(-30px); }
  to   { opacity: 1; transform: translateX(0); }
}

.bs-chart__bar-label {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 140px;
  flex-shrink: 0;
}

.bs-chart__bar-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: 2px solid;
  border-radius: 50%;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 700;
  flex-shrink: 0;
}

.bs-chart__bar-name {
  color: var(--color-text);
  font-size: 0.85rem;
  white-space: nowrap;
}

.bs-chart__bar-track {
  flex: 1;
  height: 28px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.bs-chart__bar-fill {
  height: 100%;
  border-radius: 6px;
  transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1);
  animation: bs-barGrow 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes bs-barGrow {
  from { width: 0 !important; }
}

.bs-chart__bar-value {
  position: absolute;
  right: 10px;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-text);
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.8);
  z-index: 1;
}

/* Summary cards */
.bs-chart__summary {
  margin-top: 8px;
}

.bs-chart__summary-title {
  font-size: 0.9rem;
  color: var(--color-text-muted);
  margin: 0 0 12px;
  text-align: center;
  font-weight: 600;
}

.bs-chart__summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}

.bs-chart__summary-card {
  background: var(--color-bg-panel);
  border: 1px solid;
  border-radius: 10px;
  padding: 14px;
  backdrop-filter: blur(8px);
  transition: transform 0.2s, box-shadow 0.2s;
}

.bs-chart__summary-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.bs-chart__summary-header {
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.bs-chart__summary-dead {
  color: #ff4466;
  font-size: 1rem;
}

.bs-chart__summary-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px 12px;
  margin-bottom: 10px;
}

.bs-chart__summary-stat {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--color-text);
}

.bs-chart__summary-stat-icon {
  font-size: 0.9rem;
}

.bs-chart__summary-hp {
  display: flex;
  align-items: center;
  gap: 8px;
}

.bs-chart__summary-hp-text {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--color-text-muted);
  white-space: nowrap;
}

/* ── Actions ── */
.bs-actions {
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 12px 0 24px;
  flex-wrap: wrap;
}

.bs-btn {
  padding: 12px 36px;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
}

.bs-btn--primary {
  background: linear-gradient(135deg, var(--color-accent), #0088cc);
  color: #000;
  box-shadow: 0 0 16px rgba(0, 240, 255, 0.3);
}

.bs-btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 24px rgba(0, 240, 255, 0.5);
}

.bs-btn--secondary {
  background: var(--color-bg-panel);
  color: var(--color-text);
  border: 1px solid var(--color-border);
}

.bs-btn--secondary:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
  transform: translateY(-2px);
}

/* ═══════════════════════════════════════════════════════
   Mobile Responsive
   ═══════════════════════════════════════════════════════ */

@media (max-width: 768px) {
  .bs-screen {
    padding: 12px;
    gap: 12px;
  }

  .bs-header__title {
    font-size: 1.4rem;
  }

  .bs-header__icon {
    font-size: 2.2rem;
  }

  .bs-table {
    font-size: 0.78rem;
  }

  .bs-table__th {
    padding: 8px 6px;
    font-size: 0.68rem;
  }

  .bs-table__th-label {
    display: none;
  }

  .bs-table__th-icon {
    margin-right: 0;
    font-size: 1rem;
  }

  .bs-table__td {
    padding: 8px 6px;
  }

  .bs-table__td--player {
    padding-left: 8px;
    gap: 6px;
  }

  .bs-player-badge {
    width: 26px;
    height: 26px;
    font-size: 0.65rem;
  }

  .bs-player-name {
    font-size: 0.78rem;
  }

  .bs-chart__bar-label {
    min-width: 100px;
  }

  .bs-chart__bar-name {
    font-size: 0.75rem;
  }

  .bs-chart__summary-grid {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 8px;
  }

  .bs-chart__metric-btn {
    padding: 6px 10px;
    font-size: 0.72rem;
  }

  .bs-btn {
    padding: 12px 24px;
    font-size: 0.85rem;
  }

  .bs-hp-cell {
    flex-direction: column;
    gap: 4px;
  }

  .bs-hp-bar {
    width: 100%;
    max-width: 50px;
  }
}
`;function _1(){return"wss://embryo-machine.onrender.com/"}const I1=_1();function k1({onBack:e}){const[n]=k.useState(I1),[t,a]=k.useState("lobby"),[r,s]=k.useState(null),i=k.useCallback((m,g)=>{s({type:"create",playerName:m,settings:g}),a("connected")},[]),l=k.useCallback((m,g,h)=>{s({type:"join",roomCode:m,playerName:g,password:h}),a("connected")},[]),d=k.useCallback(m=>{s({type:"spectate",roomCode:m}),a("connected")},[]),u=k.useCallback(()=>{t!=="connected"&&(s({type:"browse"}),a("connected"))},[t]),f=k.useCallback(()=>{s(null),a("lobby")},[]);return t==="lobby"?o.jsx(lf,{onBack:e,onCreateRoom:i,onJoinRoom:l,onRefreshRooms:u,onSpectate:d}):o.jsx(d1,{serverUrl:n,children:o.jsx(j1,{pendingAction:r,onBack:e,onDisconnect:f})})}function j1({pendingAction:e,onDisconnect:n}){const{state:t,room:a,localPlayerId:r,send:s,connectionStatus:i,lastError:l,roomList:d}=Ec(),[u,f]=k.useState(!1);return!u&&i==="connected"&&e&&(e.type==="create"?s({type:"CREATE_ROOM",playerName:e.playerName,settings:e.settings}):e.type==="join"?s({type:"JOIN_ROOM",roomCode:e.roomCode,playerName:e.playerName,password:e.password}):e.type==="spectate"?s({type:"SPECTATE_ROOM",roomCode:e.roomCode}):e.type==="browse"&&s({type:"LIST_ROOMS"}),f(!0)),(e==null?void 0:e.type)==="browse"&&!a&&!t?o.jsx(lf,{onBack:n,onCreateRoom:(m,g)=>{s({type:"CREATE_ROOM",playerName:m,settings:g})},onJoinRoom:(m,g,h)=>{s({type:"JOIN_ROOM",roomCode:m,playerName:g,password:h})},roomList:d,onRefreshRooms:()=>s({type:"LIST_ROOMS"})}):i==="connecting"?o.jsxs("div",{className:"og-connecting",children:[o.jsx("div",{className:"og-spinner"}),o.jsx("p",{children:"正在连接服务器…"}),o.jsx("button",{className:"ol-btn ol-btn--back",onClick:n,children:"取消"}),o.jsx("style",{children:Cr})]}):a&&!t?o.jsx(f1,{room:a,localPlayerId:r,connectionStatus:i,lastError:l,send:s,onLeave:n}):t&&r?o.jsx($s,{children:o.jsx(u1,{children:o.jsx(w1,{})})}):t&&!r?o.jsx(S1,{state:t,room:a,onLeave:n}):o.jsxs("div",{className:"og-connecting",children:[o.jsx("div",{className:"og-spinner"}),o.jsx("p",{children:"等待服务器响应…"}),l&&o.jsx("div",{className:"rm-error",children:l}),o.jsx("button",{className:"ol-btn ol-btn--back",onClick:n,children:"返回"}),o.jsx("style",{children:Cr})]})}function w1(){const e=Vr(),{dispatch:n,aiConfig:t}=Me(),{localPlayerId:a,connectionStatus:r,plottingStatus:s,lastError:i,turnDeadline:l}=Ec(),[d,u]=k.useState(null);if(k.useEffect(()=>{if(!l){u(null);return}const w=()=>{const z=Math.max(0,Math.ceil((l-Date.now())/1e3));u(z)};w();const N=setInterval(w,500);return()=>clearInterval(N)},[l]),k.useEffect(()=>{e.phase==="pregame"&&n({type:"START_PLOTTING"})},[e.phase,n]),e.phase==="game_over")return o.jsx(cf,{state:e,onHome:()=>{window.location.reload()},onSaveReplay:()=>{},isOnline:!0});const[f,m]=k.useState([{id:"map",zIndex:10},{id:"log",zIndex:11},{id:"mecha",zIndex:12},{id:"plot",zIndex:100}]),g=k.useCallback(w=>{m(N=>{const z=Math.max(...N.map(K=>K.zIndex)),E=N.find(K=>K.id===w);if(E&&E.zIndex===z)return N;const J=[...N].sort((K,M)=>K.zIndex-M.zIndex),D=10,$=new Map;let L=0;for(const K of J)K.id!==w&&$.set(K.id,D+L++);return $.set(w,D+J.length-1),N.map(K=>({...K,zIndex:$.get(K.id)??K.zIndex}))})},[]),h=w=>{var N;return((N=f.find(z=>z.id===w))==null?void 0:N.zIndex)??10},x=k.useCallback(w=>[],[]),p=Os(),_=p?window.innerWidth:Math.max(400,Math.min(window.innerWidth*.6,620)),y=300,b=window.innerWidth-y-16,v=p?window.innerWidth:380,I=window.innerWidth-v-16,S=e.phase==="plotting"&&e.plottingStep!=="complete"&&e.plottingStep!==null&&!e.plottingStep.startsWith("transition_to_")&&!Ae(t,e.plottingStep),C=o.jsxs("div",{className:"og-status-bar",children:[o.jsxs("span",{className:"og-round",children:["第 ",e.roundNumber," 回合"]}),o.jsx("span",{className:"og-phase",children:df(e.phase)}),e.currentTiming&&o.jsxs("span",{className:"og-timing",children:["▶ ",uf(e.currentTiming)]}),!p&&e.turnOrder.length>0&&o.jsxs("span",{className:"og-debug-info",title:"当前行动顺序",children:["[",e.turnOrder.map(w=>w.replace("player","P")).join("→"),"]"]}),d!==null&&d>0&&o.jsxs("span",{className:`og-countdown${d<=10?" og-countdown--warn":""}`,children:["⏱ ",d,"s"]}),o.jsx("span",{style:{flex:1}}),s&&e.phase==="plotting"&&o.jsxs("span",{className:"og-plotting",children:["布局进度: ",s.confirmed.length,"/",s.total]}),!p&&o.jsx("button",{className:"og-export-btn",onClick:()=>of(e,{localPlayerId:a??void 0,connectionStatus:r}),title:"导出全量日志（含调试状态快照）",children:"📋 导出日志"}),o.jsx("span",{className:`og-conn og-conn--${r}`,children:r==="connected"?"在线":r}),a&&o.jsx("span",{className:"og-pid",children:a.replace("player","P")})]});return p?o.jsxs("div",{className:"game-screen game-screen--mobile",children:[C,i&&o.jsx("div",{className:"rm-error",style:{margin:"4px 12px 0"},children:i}),o.jsx("div",{className:"game-screen__board-mobile",children:o.jsx(Ca,{})}),o.jsxs("div",{className:"game-screen__panels-mobile",children:[S&&o.jsx(we,{id:"plot",title:"布局阶段",initialPos:{x:0,y:0},width:v,children:o.jsx(la,{})}),o.jsx(we,{id:"mecha",title:"机体信息",initialPos:{x:0,y:0},defaultMinimized:!0,children:o.jsx(ds,{})}),o.jsx(we,{id:"log",title:"行动日志",initialPos:{x:0,y:0},defaultMinimized:!0,children:o.jsx(Nr,{})})]}),o.jsx(is,{}),o.jsx(ls,{}),o.jsx("style",{children:Cr})]}):o.jsxs("div",{className:"game-screen",style:{position:"relative",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[C,i&&o.jsx("div",{className:"rm-error",style:{margin:"4px 16px 0"},children:i}),o.jsxs("div",{style:{position:"relative",flex:1},children:[o.jsx(we,{id:"map",title:"地图",initialPos:{x:16,y:8},width:_,minHeight:300,zIndex:h("map"),onFocus:g,siblingRects:x("map"),children:o.jsx("div",{style:{height:"calc(100vh - 100px)",minHeight:300},children:o.jsx(Ca,{})})}),o.jsx(we,{id:"log",title:"行动日志",initialPos:{x:b,y:8},width:y,height:260,minHeight:120,zIndex:h("log"),onFocus:g,siblingRects:x("log"),children:o.jsx(Nr,{})}),o.jsx(we,{id:"mecha",title:"机体信息",initialPos:{x:b,y:280},width:y,minHeight:160,zIndex:h("mecha"),onFocus:g,siblingRects:x("mecha"),children:o.jsx(ds,{})}),S&&o.jsx(we,{id:"plot",title:"布局阶段",initialPos:{x:I,y:8},width:v,height:620,minHeight:80,zIndex:h("plot"),onFocus:g,siblingRects:x("plot"),children:o.jsx(la,{})})]}),o.jsx(is,{}),o.jsx(ls,{}),o.jsx("style",{children:Cr})]})}function S1({state:e,room:n,onLeave:t}){const a={player1:!0,player2:!0,player1Difficulty:"easy",player2Difficulty:"easy",playerAI:Object.fromEntries(e.playerIds.map(i=>[i,!0])),playerDifficulty:Object.fromEntries(e.playerIds.map(i=>[i,"easy"]))},r=()=>{},s={state:e,dispatch:r,rawDispatch:r,getCard:i=>te(i),aiConfig:a,setAIConfig:()=>{},getReplayData:()=>null,autoSaveEnabled:!1,setAutoSaveEnabled:()=>{},exposureMode:!1,setExposureMode:()=>{},isOnline:!0,localPlayerId:null,currentTurnPlayerId:null};return o.jsx(Ls.Provider,{value:s,children:o.jsx($s,{children:o.jsxs("div",{className:"game-screen",style:{position:"relative",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[o.jsxs("div",{className:"og-status-bar",children:[o.jsx("span",{className:"og-spectate-badge",children:"观战中"}),o.jsxs("span",{className:"og-round",children:["第 ",e.roundNumber," 回合"]}),o.jsx("span",{className:"og-phase",children:df(e.phase)}),e.currentTiming&&o.jsxs("span",{className:"og-timing",children:["▶ ",uf(e.currentTiming)]}),o.jsx("span",{style:{flex:1}}),n&&o.jsx("span",{className:"og-room-code-badge",children:n.roomCode}),o.jsx("button",{className:"rm-btn rm-btn--leave",onClick:t,children:"离开"})]}),o.jsxs("div",{style:{position:"relative",flex:1},children:[o.jsx(we,{id:"map",title:"地图",initialPos:{x:16,y:8},width:Math.max(400,Math.min(window.innerWidth*.7,700)),minHeight:300,children:o.jsx("div",{style:{height:"calc(100vh - 100px)",minHeight:300},children:o.jsx(Ca,{})})}),o.jsx(we,{id:"log",title:"行动日志",initialPos:{x:window.innerWidth-316,y:8},width:300,height:400,minHeight:120,children:o.jsx(Nr,{})})]}),o.jsx("style",{children:Cr})]})})})}function df(e){return{pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"主要阶段 1",action_seg2:"主要阶段 2",cleanup:"清理阶段",game_over:"游戏结束"}[e]??e}function uf(e){return{movement:"移动",ranged:"射击",melee:"近战",special:"特殊"}[e]??e}const Cr=`
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
`;function C1(){const e=Vr(),{rawDispatch:n,aiConfig:t,setAIConfig:a,getReplayData:r,autoSaveEnabled:s,setAutoSaveEnabled:i,exposureMode:l,setExposureMode:d}=Me(),[u,f]=k.useState("home"),[m,g]=k.useState("map"),[h,x]=k.useState(!0),[p,_]=k.useState(2),[y,b]=k.useState(2),[v,I]=k.useState(null),[S,C]=k.useState({loaded:0,total:0}),w=k.useRef(null),N=k.useCallback(()=>{fe.init(),g("map"),f("game")},[]),z=k.useCallback(()=>{const $=Um().length;C({loaded:0,total:$}),I("asking")},[]),E=k.useCallback(()=>{I("loading");const $=new AbortController;w.current=$,kb((L,K)=>{C({loaded:L,total:K}),L>=K&&setTimeout(()=>I(null),600)},$.signal)},[]),J=k.useCallback(()=>{var $;($=w.current)==null||$.abort(),I(null)},[]);function D($){n({type:"LOAD_GAME",state:$.gameState}),a($.aiConfig),f("game")}return u==="rules"?o.jsx(gv,{onBack:()=>f((e.phase==="setup","game"))}):u==="data"?o.jsx(xv,{onBack:()=>f("game")}):u==="load"?o.jsx(pu,{mode:"load",onBack:()=>f("home"),onLoad:D}):u==="replay"?o.jsx(Av,{onBack:()=>f("home")}):u==="save"?o.jsx(pu,{mode:"save",onBack:()=>f("game"),currentState:e,aiConfig:t}):u==="mapEditor"?o.jsx(Qv,{onBack:()=>f("home")}):u==="online"?o.jsx(k1,{onBack:()=>f("home")}):u==="settings"?o.jsxs(o.Fragment,{children:[v!==null&&o.jsx(hb,{phase:v,loaded:S.loaded,total:S.total,onConfirm:E,onSkip:J}),o.jsx(fb,{onBack:()=>f("home"),soundEnabled:fe.enabled,onToggleSound:()=>{fe.enabled=!fe.enabled,C($=>({...$}))},soundVolume:fe.volume,onVolumeChange:$=>{fe.volume=$,fe.init(),fe.uiBlip(),C(L=>({...L}))},exposureMode:l,onToggleExposure:()=>d(!l),autoFill:h,onToggleAutoFill:()=>x(!h),onCacheAssets:z})]}):u==="home"?o.jsx(pb,{onStart:N,onOnlinePlay:()=>{fe.init(),f("online")},onViewRules:()=>f("rules"),onViewData:()=>f("data"),onLoadGame:()=>f("load"),onReplay:()=>f("replay"),onMapEditor:()=>f("mapEditor"),onSettings:()=>f("settings")}):e.phase==="setup"?m==="map"?o.jsx(eb,{onNext:()=>g("units"),onBack:()=>f("home"),playerCount:p,setPlayerCount:_,teamCount:y,setTeamCount:b}):m==="units"?o.jsx(ab,{onNext:()=>g("spawn"),onBack:()=>g("map"),autoFill:h}):o.jsx(db,{onBack:()=>g("units")}):e.phase==="game_over"?o.jsx(cf,{state:e,onHome:()=>{n({type:"RESET_GAME"}),f("home"),g("map")},onSaveReplay:()=>{const $=r();if(!$)return;const L=e.players.player1.isDefeated,K=e.players.player2.isDefeated,M=L&&K?"draw":L?"player2":K?"player1":null;try{Bx($.initialState,$.actions,M),alert("录像已保存！")}catch{alert("保存失败，存储空间可能不足。")}}}):o.jsx(N1,{onSave:()=>f("save"),autoSaveEnabled:s,onToggleAutoSave:()=>i(!s)})}function N1({onSave:e,autoSaveEnabled:n,onToggleAutoSave:t}){const a=Vr(),{dispatch:r,exposureMode:s,getCard:i,aiConfig:l}=Me();k.useEffect(()=>{a.phase==="pregame"&&r({type:"START_PLOTTING"})},[a.phase,r]);const d=k.useRef(a.phase);k.useEffect(()=>{const C=d.current;if(d.current=a.phase,!!s&&C==="plotting"&&a.phase==="action_seg1"){const w=N=>{if(!N)return"无";const z=i(N.defId);return z?z.nameCn:N.defId};for(const N of a.playerIds){const z=a.players[N];if(z.isDefeated)continue;const E=`P${N.replace("player","")}`;r({type:"ADD_LOG",message:`[暴露] ${E} 布局: 段1=${w(z.plotSeg1)} / 段2=${w(z.plotSeg2)}`})}}},[a.phase]);const[u,f]=k.useState([{id:"map",zIndex:10},{id:"log",zIndex:11},{id:"mecha",zIndex:12},{id:"plot",zIndex:100}]),m=k.useRef(new Map),g=k.useCallback(C=>{f(w=>{const N=Math.max(...w.map(L=>L.zIndex)),z=w.find(L=>L.id===C);if(z&&z.zIndex===N)return w;const E=[...w].sort((L,K)=>L.zIndex-K.zIndex),J=10,D=new Map;let $=0;for(const L of E)L.id!==C&&D.set(L.id,J+$++);return D.set(C,J+E.length-1),w.map(L=>({...L,zIndex:D.get(L.id)??L.zIndex}))})},[]),h=C=>{var w;return((w=u.find(N=>N.id===C))==null?void 0:w.zIndex)??10},x=k.useCallback(C=>{const w=[];return m.current.forEach((N,z)=>{z!==C&&N&&w.push(N.getBoundingClientRect())}),w},[]),p=Os(),_=p?window.innerWidth:Math.max(400,Math.min(window.innerWidth*.6,620)),y=300,b=window.innerWidth-y-16,v=36,I=p?window.innerWidth:380,S=window.innerWidth-I-16;if(p){const C=a.phase==="plotting"&&a.plottingStep!=="complete"&&a.plottingStep!==null&&!a.plottingStep.startsWith("transition_to_")&&!Ae(l,a.plottingStep),w=a.phase==="plotting"&&a.plottingStep!=="complete"&&a.plottingStep!==null&&!a.plottingStep.startsWith("transition_to_")&&Ae(l,a.plottingStep);return o.jsxs("div",{className:"game-screen game-screen--mobile",children:[o.jsx("div",{className:"game-screen__header",style:{flexShrink:0},children:o.jsx(_u,{onSave:e,autoSaveEnabled:n,onToggleAutoSave:t})}),o.jsxs("div",{className:"game-screen__board-mobile",children:[o.jsx(Ca,{}),o.jsx(Iu,{})]}),o.jsxs("div",{className:"game-screen__panels-mobile",children:[C&&o.jsx(we,{id:"plot",title:"布局阶段",initialPos:{x:0,y:0},width:I,children:o.jsx(la,{})}),w&&o.jsx("div",{style:{width:0,height:0,overflow:"hidden",opacity:0,pointerEvents:"none"},children:o.jsx(la,{})}),o.jsx(we,{id:"mecha",title:"机体信息",initialPos:{x:0,y:0},defaultMinimized:!0,children:o.jsx(ds,{})}),o.jsx(we,{id:"log",title:"行动日志",initialPos:{x:0,y:0},defaultMinimized:!0,children:o.jsx(Nr,{})})]}),o.jsx(is,{}),o.jsx(ls,{}),o.jsx("style",{children:ku})]})}return o.jsxs("div",{className:"game-screen",style:{position:"relative",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[o.jsx("div",{className:"game-screen__header",style:{flexShrink:0},children:o.jsx(_u,{onSave:e,autoSaveEnabled:n,onToggleAutoSave:t})}),o.jsxs("div",{style:{position:"relative",flex:1},children:[o.jsx(we,{id:"map",title:"地图",initialPos:{x:16,y:8},width:_,minHeight:300,zIndex:h("map"),onFocus:g,siblingRects:x("map"),children:o.jsx("div",{style:{height:`calc(100vh - ${v+60}px)`,minHeight:300},children:o.jsx(Ca,{})})}),o.jsx(we,{id:"log",title:"行动日志",initialPos:{x:b,y:8},width:y,height:260,minHeight:120,zIndex:h("log"),onFocus:g,siblingRects:x("log"),children:o.jsx(Nr,{})}),o.jsx(we,{id:"mecha",title:"机体信息",initialPos:{x:b,y:280},width:y,minHeight:160,zIndex:h("mecha"),onFocus:g,siblingRects:x("mecha"),children:o.jsx(ds,{})}),a.phase==="plotting"&&a.plottingStep!=="complete"&&a.plottingStep!==null&&!a.plottingStep.startsWith("transition_to_")&&!Ae(l,a.plottingStep)&&o.jsx(we,{id:"plot",title:"布局阶段",initialPos:{x:S,y:8},width:I,height:620,minHeight:80,zIndex:h("plot"),onFocus:g,siblingRects:x("plot"),children:o.jsx(la,{})}),a.phase==="plotting"&&a.plottingStep!=="complete"&&a.plottingStep!==null&&!a.plottingStep.startsWith("transition_to_")&&Ae(l,a.plottingStep)&&o.jsx("div",{style:{position:"absolute",width:0,height:0,overflow:"hidden",opacity:0,pointerEvents:"none"},children:o.jsx(la,{})})]}),o.jsx(is,{}),o.jsx(ls,{}),o.jsx(Iu,{}),o.jsx("style",{children:ku})]})}function _u({onSave:e,autoSaveEnabled:n,onToggleAutoSave:t}){const a=Vr(),r={pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"行动阶段 [主要阶段 1]",action_seg2:"行动阶段 [主要阶段 2]",cleanup:"清理阶段",game_over:"游戏结束"},s={movement:"移动",ranged:"射击",melee:"近战",special:"特殊"};return o.jsxs("div",{className:"phase-bar",children:[o.jsxs("span",{className:"phase-bar__round",children:["第 ",a.roundNumber," 回合"]}),o.jsx("span",{className:"phase-bar__phase",children:r[a.phase]??a.phase}),a.currentTiming&&o.jsxs("span",{className:"phase-bar__timing",children:["▶ ",s[a.currentTiming]??a.currentTiming]}),o.jsx("span",{style:{flex:1}}),o.jsx("button",{className:"phase-bar__autosave-btn",onClick:t,title:n?"自动存档已开启（点击关闭）":"自动存档已关闭（点击开启）",children:n?"💾 自动":"💾 关"}),o.jsx("button",{className:"phase-bar__save-btn",onClick:e,title:"保存游戏",children:"💾 保存"}),o.jsx("button",{className:"phase-bar__save-btn",onClick:()=>of(a),title:"导出全量日志（含调试状态快照）",children:"📋 日志"})]})}function T1(e){return e.startsWith("[DBG]")?"log-panel__entry log-panel__entry--debug":e.startsWith("===")?"log-panel__entry log-panel__entry--round-start":e.startsWith("---")?"log-panel__entry log-panel__entry--round-end":e.includes("发动")||e.includes("攻击")?"log-panel__entry log-panel__entry--attack":e.includes("摧毁")||e.includes("连锁")||e.includes("诱爆")?"log-panel__entry log-panel__entry--damage":e.includes("移动到")?"log-panel__entry log-panel__entry--move":e.includes("获胜")||e.includes("击破")||e.includes("平局")?"log-panel__entry log-panel__entry--victory":"log-panel__entry"}function Nr(){const e=Vr();return o.jsx("div",{className:"log-panel",children:o.jsx("div",{className:"log-panel__entries",children:[...e.log].filter(n=>!n.startsWith("[DBG]")).reverse().map((n,t)=>o.jsx("div",{className:T1(n),children:n},t))})})}function Iu(){const{isAnimating:e,skipAnimation:n}=zr();return e?o.jsx("button",{className:"skip-anim-btn",onClick:n,children:"⏩ 跳过"}):null}function M1(){return o.jsx($s,{children:o.jsx(Hm,{children:o.jsx(C1,{})})})}const ku=`
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
`;vi.createRoot(document.getElementById("root")).render(o.jsx(Ef.StrictMode,{children:o.jsx(M1,{})}));

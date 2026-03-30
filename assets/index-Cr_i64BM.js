var df=Object.defineProperty;var uf=(e,n,t)=>n in e?df(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var en=(e,n,t)=>uf(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();function pf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Iu={exports:{}},di={},ku={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cr=Symbol.for("react.element"),mf=Symbol.for("react.portal"),ff=Symbol.for("react.fragment"),gf=Symbol.for("react.strict_mode"),hf=Symbol.for("react.profiler"),xf=Symbol.for("react.provider"),vf=Symbol.for("react.context"),bf=Symbol.for("react.forward_ref"),yf=Symbol.for("react.suspense"),_f=Symbol.for("react.memo"),If=Symbol.for("react.lazy"),Ec=Symbol.iterator;function kf(e){return e===null||typeof e!="object"?null:(e=Ec&&e[Ec]||e["@@iterator"],typeof e=="function"?e:null)}var ju={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wu=Object.assign,Su={};function Sa(e,n,t){this.props=e,this.context=n,this.refs=Su,this.updater=t||ju}Sa.prototype.isReactComponent={};Sa.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Sa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cu(){}Cu.prototype=Sa.prototype;function Il(e,n,t){this.props=e,this.context=n,this.refs=Su,this.updater=t||ju}var kl=Il.prototype=new Cu;kl.constructor=Il;wu(kl,Sa.prototype);kl.isPureReactComponent=!0;var Dc=Array.isArray,Nu=Object.prototype.hasOwnProperty,jl={current:null},Mu={key:!0,ref:!0,__self:!0,__source:!0};function Tu(e,n,t){var a,r={},i=null,s=null;if(n!=null)for(a in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(i=""+n.key),n)Nu.call(n,a)&&!Mu.hasOwnProperty(a)&&(r[a]=n[a]);var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){for(var d=Array(l),u=0;u<l;u++)d[u]=arguments[u+2];r.children=d}if(e&&e.defaultProps)for(a in l=e.defaultProps,l)r[a]===void 0&&(r[a]=l[a]);return{$$typeof:Cr,type:e,key:i,ref:s,props:r,_owner:jl.current}}function jf(e,n){return{$$typeof:Cr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function wl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Cr}function wf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var $c=/\/+/g;function Li(e,n){return typeof e=="object"&&e!==null&&e.key!=null?wf(""+e.key):n.toString(36)}function lo(e,n,t,a,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Cr:case mf:s=!0}}if(s)return s=e,r=r(s),e=a===""?"."+Li(s,0):a,Dc(r)?(t="",e!=null&&(t=e.replace($c,"$&/")+"/"),lo(r,n,t,"",function(u){return u})):r!=null&&(wl(r)&&(r=jf(r,t+(!r.key||s&&s.key===r.key?"":(""+r.key).replace($c,"$&/")+"/")+e)),n.push(r)),1;if(s=0,a=a===""?".":a+":",Dc(e))for(var l=0;l<e.length;l++){i=e[l];var d=a+Li(i,l);s+=lo(i,n,t,d,r)}else if(d=kf(e),typeof d=="function")for(e=d.call(e),l=0;!(i=e.next()).done;)i=i.value,d=a+Li(i,l++),s+=lo(i,n,t,d,r);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function Rr(e,n,t){if(e==null)return e;var a=[],r=0;return lo(e,a,"","",function(i){return n.call(t,i,r++)}),a}function Sf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var He={current:null},co={transition:null},Cf={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:co,ReactCurrentOwner:jl};function Eu(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:Rr,forEach:function(e,n,t){Rr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Rr(e,function(){n++}),n},toArray:function(e){return Rr(e,function(n){return n})||[]},only:function(e){if(!wl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ae.Component=Sa;ae.Fragment=ff;ae.Profiler=hf;ae.PureComponent=Il;ae.StrictMode=gf;ae.Suspense=yf;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cf;ae.act=Eu;ae.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=wu({},e.props),r=e.key,i=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,s=jl.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in n)Nu.call(n,d)&&!Mu.hasOwnProperty(d)&&(a[d]=n[d]===void 0&&l!==void 0?l[d]:n[d])}var d=arguments.length-2;if(d===1)a.children=t;else if(1<d){l=Array(d);for(var u=0;u<d;u++)l[u]=arguments[u+2];a.children=l}return{$$typeof:Cr,type:e.type,key:r,ref:i,props:a,_owner:s}};ae.createContext=function(e){return e={$$typeof:vf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:xf,_context:e},e.Consumer=e};ae.createElement=Tu;ae.createFactory=function(e){var n=Tu.bind(null,e);return n.type=e,n};ae.createRef=function(){return{current:null}};ae.forwardRef=function(e){return{$$typeof:bf,render:e}};ae.isValidElement=wl;ae.lazy=function(e){return{$$typeof:If,_payload:{_status:-1,_result:e},_init:Sf}};ae.memo=function(e,n){return{$$typeof:_f,type:e,compare:n===void 0?null:n}};ae.startTransition=function(e){var n=co.transition;co.transition={};try{e()}finally{co.transition=n}};ae.unstable_act=Eu;ae.useCallback=function(e,n){return He.current.useCallback(e,n)};ae.useContext=function(e){return He.current.useContext(e)};ae.useDebugValue=function(){};ae.useDeferredValue=function(e){return He.current.useDeferredValue(e)};ae.useEffect=function(e,n){return He.current.useEffect(e,n)};ae.useId=function(){return He.current.useId()};ae.useImperativeHandle=function(e,n,t){return He.current.useImperativeHandle(e,n,t)};ae.useInsertionEffect=function(e,n){return He.current.useInsertionEffect(e,n)};ae.useLayoutEffect=function(e,n){return He.current.useLayoutEffect(e,n)};ae.useMemo=function(e,n){return He.current.useMemo(e,n)};ae.useReducer=function(e,n,t){return He.current.useReducer(e,n,t)};ae.useRef=function(e){return He.current.useRef(e)};ae.useState=function(e){return He.current.useState(e)};ae.useSyncExternalStore=function(e,n,t){return He.current.useSyncExternalStore(e,n,t)};ae.useTransition=function(){return He.current.useTransition()};ae.version="18.3.1";ku.exports=ae;var j=ku.exports;const Nf=pf(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf=j,Tf=Symbol.for("react.element"),Ef=Symbol.for("react.fragment"),Df=Object.prototype.hasOwnProperty,$f=Mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Af={key:!0,ref:!0,__self:!0,__source:!0};function Du(e,n,t){var a,r={},i=null,s=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(s=n.ref);for(a in n)Df.call(n,a)&&!Af.hasOwnProperty(a)&&(r[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps,n)r[a]===void 0&&(r[a]=n[a]);return{$$typeof:Tf,type:e,key:i,ref:s,props:r,_owner:$f.current}}di.Fragment=Ef;di.jsx=Du;di.jsxs=Du;Iu.exports=di;var o=Iu.exports,xs={},$u={exports:{}},sn={},Au={exports:{}},zu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(R,D){var F=R.length;R.push(D);e:for(;0<F;){var P=F-1>>>1,B=R[P];if(0<r(B,D))R[P]=D,R[F]=B,F=P;else break e}}function t(R){return R.length===0?null:R[0]}function a(R){if(R.length===0)return null;var D=R[0],F=R.pop();if(F!==D){R[0]=F;e:for(var P=0,B=R.length,W=B>>>1;P<W;){var X=2*(P+1)-1,Q=R[X],ie=X+1,le=R[ie];if(0>r(Q,F))ie<B&&0>r(le,Q)?(R[P]=le,R[ie]=F,P=ie):(R[P]=Q,R[X]=F,P=X);else if(ie<B&&0>r(le,F))R[P]=le,R[ie]=F,P=ie;else break e}}return D}function r(R,D){var F=R.sortIndex-D.sortIndex;return F!==0?F:R.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var d=[],u=[],f=1,m=null,g=3,h=!1,x=!1,p=!1,_=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(R){for(var D=t(u);D!==null;){if(D.callback===null)a(u);else if(D.startTime<=R)a(u),D.sortIndex=D.expirationTime,n(d,D);else break;D=t(u)}}function I(R){if(p=!1,y(R),!x)if(t(d)!==null)x=!0,M(N);else{var D=t(u);D!==null&&z(I,D.startTime-R)}}function N(R,D){x=!1,p&&(p=!1,b(S),S=-1),h=!0;var F=g;try{for(y(D),m=t(d);m!==null&&(!(m.expirationTime>D)||R&&!J());){var P=m.callback;if(typeof P=="function"){m.callback=null,g=m.priorityLevel;var B=P(m.expirationTime<=D);D=e.unstable_now(),typeof B=="function"?m.callback=B:m===t(d)&&a(d),y(D)}else a(d);m=t(d)}if(m!==null)var W=!0;else{var X=t(u);X!==null&&z(I,X.startTime-D),W=!1}return W}finally{m=null,g=F,h=!1}}var T=!1,k=null,S=-1,$=5,E=-1;function J(){return!(e.unstable_now()-E<$)}function V(){if(k!==null){var R=e.unstable_now();E=R;var D=!0;try{D=k(!0,R)}finally{D?A():(T=!1,k=null)}}else T=!1}var A;if(typeof v=="function")A=function(){v(V)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,K=O.port2;O.port1.onmessage=V,A=function(){K.postMessage(null)}}else A=function(){_(V,0)};function M(R){k=R,T||(T=!0,A())}function z(R,D){S=_(function(){R(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){x||h||(x=!0,M(N))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(d)},e.unstable_next=function(R){switch(g){case 1:case 2:case 3:var D=3;break;default:D=g}var F=g;g=D;try{return R()}finally{g=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,D){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var F=g;g=R;try{return D()}finally{g=F}},e.unstable_scheduleCallback=function(R,D,F){var P=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?P+F:P):F=P,R){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=F+B,R={id:f++,callback:D,priorityLevel:R,startTime:F,expirationTime:B,sortIndex:-1},F>P?(R.sortIndex=F,n(u,R),t(d)===null&&R===t(u)&&(p?(b(S),S=-1):p=!0,z(I,F-P))):(R.sortIndex=B,n(d,R),x||h||(x=!0,M(N))),R},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(R){var D=g;return function(){var F=g;g=D;try{return R.apply(this,arguments)}finally{g=F}}}})(zu);Au.exports=zu;var zf=Au.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vf=j,on=zf;function U(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vu=new Set,or={};function Pt(e,n){xa(e,n),xa(e+"Capture",n)}function xa(e,n){for(or[e]=n,e=0;e<n.length;e++)Vu.add(n[e])}var Bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vs=Object.prototype.hasOwnProperty,Pf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ac={},zc={};function Rf(e){return vs.call(zc,e)?!0:vs.call(Ac,e)?!1:Pf.test(e)?zc[e]=!0:(Ac[e]=!0,!1)}function Lf(e,n,t,a){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Of(e,n,t,a){if(n===null||typeof n>"u"||Lf(e,n,t,a))return!0;if(a)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ue(e,n,t,a,r,i,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=s}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ve[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Ve[n]=new Ue(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ve[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ve[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ve[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ve[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ve[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ve[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ve[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Sl=/[\-:]([a-z])/g;function Cl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Sl,Cl);Ve[n]=new Ue(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Sl,Cl);Ve[n]=new Ue(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Sl,Cl);Ve[n]=new Ue(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ve[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ve[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Nl(e,n,t,a){var r=Ve.hasOwnProperty(n)?Ve[n]:null;(r!==null?r.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Of(n,t,r,a)&&(t=null),a||r===null?Rf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,a=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,a?e.setAttributeNS(a,n,t):e.setAttribute(n,t))))}var Un=Vf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Lr=Symbol.for("react.element"),Wt=Symbol.for("react.portal"),Zt=Symbol.for("react.fragment"),Ml=Symbol.for("react.strict_mode"),bs=Symbol.for("react.profiler"),Pu=Symbol.for("react.provider"),Ru=Symbol.for("react.context"),Tl=Symbol.for("react.forward_ref"),ys=Symbol.for("react.suspense"),_s=Symbol.for("react.suspense_list"),El=Symbol.for("react.memo"),Yn=Symbol.for("react.lazy"),Lu=Symbol.for("react.offscreen"),Vc=Symbol.iterator;function Da(e){return e===null||typeof e!="object"?null:(e=Vc&&e[Vc]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Object.assign,Oi;function Fa(e){if(Oi===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Oi=n&&n[1]||""}return`
`+Oi+e}var Ki=!1;function Ji(e,n){if(!e||Ki)return"";Ki=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var a=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){a=u}e.call(n.prototype)}else{try{throw Error()}catch(u){a=u}e()}}catch(u){if(u&&a&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),i=a.stack.split(`
`),s=r.length-1,l=i.length-1;1<=s&&0<=l&&r[s]!==i[l];)l--;for(;1<=s&&0<=l;s--,l--)if(r[s]!==i[l]){if(s!==1||l!==1)do if(s--,l--,0>l||r[s]!==i[l]){var d=`
`+r[s].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=s&&0<=l);break}}}finally{Ki=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Fa(e):""}function Kf(e){switch(e.tag){case 5:return Fa(e.type);case 16:return Fa("Lazy");case 13:return Fa("Suspense");case 19:return Fa("SuspenseList");case 0:case 2:case 15:return e=Ji(e.type,!1),e;case 11:return e=Ji(e.type.render,!1),e;case 1:return e=Ji(e.type,!0),e;default:return""}}function Is(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Zt:return"Fragment";case Wt:return"Portal";case bs:return"Profiler";case Ml:return"StrictMode";case ys:return"Suspense";case _s:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ru:return(e.displayName||"Context")+".Consumer";case Pu:return(e._context.displayName||"Context")+".Provider";case Tl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case El:return n=e.displayName||null,n!==null?n:Is(e.type)||"Memo";case Yn:n=e._payload,e=e._init;try{return Is(e(n))}catch{}}return null}function Jf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Is(n);case 8:return n===Ml?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ou(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Bf(e){var n=Ou(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(s){a=""+s,i.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Or(e){e._valueTracker||(e._valueTracker=Bf(e))}function Ku(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Ou(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function So(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ks(e,n){var t=n.checked;return ye({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Pc(e,n){var t=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;t=pt(n.value!=null?n.value:t),e._wrapperState={initialChecked:a,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ju(e,n){n=n.checked,n!=null&&Nl(e,"checked",n,!1)}function js(e,n){Ju(e,n);var t=pt(n.value),a=n.type;if(t!=null)a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ws(e,n.type,t):n.hasOwnProperty("defaultValue")&&ws(e,n.type,pt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Rc(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ws(e,n,t){(n!=="number"||So(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ga=Array.isArray;function ca(e,n,t,a){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&a&&(e[t].defaultSelected=!0)}else{for(t=""+pt(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function Ss(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(U(91));return ye({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Lc(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(U(92));if(Ga(t)){if(1<t.length)throw Error(U(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:pt(t)}}function Bu(e,n){var t=pt(n.value),a=pt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),a!=null&&(e.defaultValue=""+a)}function Oc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Fu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cs(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Fu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Kr,Gu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,a,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,a,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Kr=Kr||document.createElement("div"),Kr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Kr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ir(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Wa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ff=["Webkit","ms","Moz","O"];Object.keys(Wa).forEach(function(e){Ff.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Wa[n]=Wa[e]})});function Hu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Wa.hasOwnProperty(e)&&Wa[e]?(""+n).trim():n+"px"}function Uu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var a=t.indexOf("--")===0,r=Hu(t,n[t],a);t==="float"&&(t="cssFloat"),a?e.setProperty(t,r):e[t]=r}}var Gf=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ns(e,n){if(n){if(Gf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(U(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(U(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(U(61))}if(n.style!=null&&typeof n.style!="object")throw Error(U(62))}}function Ms(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ts=null;function Dl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Es=null,da=null,ua=null;function Kc(e){if(e=Tr(e)){if(typeof Es!="function")throw Error(U(280));var n=e.stateNode;n&&(n=gi(n),Es(e.stateNode,e.type,n))}}function Wu(e){da?ua?ua.push(e):ua=[e]:da=e}function Zu(){if(da){var e=da,n=ua;if(ua=da=null,Kc(e),n)for(e=0;e<n.length;e++)Kc(n[e])}}function Yu(e,n){return e(n)}function Xu(){}var Bi=!1;function Qu(e,n,t){if(Bi)return e(n,t);Bi=!0;try{return Yu(e,n,t)}finally{Bi=!1,(da!==null||ua!==null)&&(Xu(),Zu())}}function sr(e,n){var t=e.stateNode;if(t===null)return null;var a=gi(t);if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(U(231,n,typeof t));return t}var Ds=!1;if(Bn)try{var $a={};Object.defineProperty($a,"passive",{get:function(){Ds=!0}}),window.addEventListener("test",$a,$a),window.removeEventListener("test",$a,$a)}catch{Ds=!1}function Hf(e,n,t,a,r,i,s,l,d){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(f){this.onError(f)}}var Za=!1,Co=null,No=!1,$s=null,Uf={onError:function(e){Za=!0,Co=e}};function Wf(e,n,t,a,r,i,s,l,d){Za=!1,Co=null,Hf.apply(Uf,arguments)}function Zf(e,n,t,a,r,i,s,l,d){if(Wf.apply(this,arguments),Za){if(Za){var u=Co;Za=!1,Co=null}else throw Error(U(198));No||(No=!0,$s=u)}}function Rt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function qu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Jc(e){if(Rt(e)!==e)throw Error(U(188))}function Yf(e){var n=e.alternate;if(!n){if(n=Rt(e),n===null)throw Error(U(188));return n!==e?null:e}for(var t=e,a=n;;){var r=t.return;if(r===null)break;var i=r.alternate;if(i===null){if(a=r.return,a!==null){t=a;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===t)return Jc(r),e;if(i===a)return Jc(r),n;i=i.sibling}throw Error(U(188))}if(t.return!==a.return)t=r,a=i;else{for(var s=!1,l=r.child;l;){if(l===t){s=!0,t=r,a=i;break}if(l===a){s=!0,a=r,t=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===t){s=!0,t=i,a=r;break}if(l===a){s=!0,a=i,t=r;break}l=l.sibling}if(!s)throw Error(U(189))}}if(t.alternate!==a)throw Error(U(190))}if(t.tag!==3)throw Error(U(188));return t.stateNode.current===t?e:n}function ep(e){return e=Yf(e),e!==null?np(e):null}function np(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=np(e);if(n!==null)return n;e=e.sibling}return null}var tp=on.unstable_scheduleCallback,Bc=on.unstable_cancelCallback,Xf=on.unstable_shouldYield,Qf=on.unstable_requestPaint,ke=on.unstable_now,qf=on.unstable_getCurrentPriorityLevel,$l=on.unstable_ImmediatePriority,ap=on.unstable_UserBlockingPriority,Mo=on.unstable_NormalPriority,eg=on.unstable_LowPriority,rp=on.unstable_IdlePriority,ui=null,En=null;function ng(e){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(ui,e,void 0,(e.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:rg,tg=Math.log,ag=Math.LN2;function rg(e){return e>>>=0,e===0?32:31-(tg(e)/ag|0)|0}var Jr=64,Br=4194304;function Ha(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function To(e,n){var t=e.pendingLanes;if(t===0)return 0;var a=0,r=e.suspendedLanes,i=e.pingedLanes,s=t&268435455;if(s!==0){var l=s&~r;l!==0?a=Ha(l):(i&=s,i!==0&&(a=Ha(i)))}else s=t&~r,s!==0?a=Ha(s):i!==0&&(a=Ha(i));if(a===0)return 0;if(n!==0&&n!==a&&!(n&r)&&(r=a&-a,i=n&-n,r>=i||r===16&&(i&4194240)!==0))return n;if(a&4&&(a|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)t=31-jn(n),r=1<<t,a|=e[t],n&=~r;return a}function og(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ig(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-jn(i),l=1<<s,d=r[s];d===-1?(!(l&t)||l&a)&&(r[s]=og(l,n)):d<=n&&(e.expiredLanes|=l),i&=~l}}function As(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function op(){var e=Jr;return Jr<<=1,!(Jr&4194240)&&(Jr=64),e}function Fi(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Nr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-jn(n),e[n]=t}function sg(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-jn(t),i=1<<r;n[r]=0,a[r]=-1,e[r]=-1,t&=~i}}function Al(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-jn(t),r=1<<a;r&n|e[a]&n&&(e[a]|=n),t&=~r}}var ce=0;function ip(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var sp,zl,lp,cp,dp,zs=!1,Fr=[],at=null,rt=null,ot=null,lr=new Map,cr=new Map,Qn=[],lg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fc(e,n){switch(e){case"focusin":case"focusout":at=null;break;case"dragenter":case"dragleave":rt=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":lr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":cr.delete(n.pointerId)}}function Aa(e,n,t,a,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:i,targetContainers:[r]},n!==null&&(n=Tr(n),n!==null&&zl(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function cg(e,n,t,a,r){switch(n){case"focusin":return at=Aa(at,e,n,t,a,r),!0;case"dragenter":return rt=Aa(rt,e,n,t,a,r),!0;case"mouseover":return ot=Aa(ot,e,n,t,a,r),!0;case"pointerover":var i=r.pointerId;return lr.set(i,Aa(lr.get(i)||null,e,n,t,a,r)),!0;case"gotpointercapture":return i=r.pointerId,cr.set(i,Aa(cr.get(i)||null,e,n,t,a,r)),!0}return!1}function up(e){var n=kt(e.target);if(n!==null){var t=Rt(n);if(t!==null){if(n=t.tag,n===13){if(n=qu(t),n!==null){e.blockedOn=n,dp(e.priority,function(){lp(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Vs(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);Ts=a,t.target.dispatchEvent(a),Ts=null}else return n=Tr(t),n!==null&&zl(n),e.blockedOn=t,!1;n.shift()}return!0}function Gc(e,n,t){uo(e)&&t.delete(n)}function dg(){zs=!1,at!==null&&uo(at)&&(at=null),rt!==null&&uo(rt)&&(rt=null),ot!==null&&uo(ot)&&(ot=null),lr.forEach(Gc),cr.forEach(Gc)}function za(e,n){e.blockedOn===n&&(e.blockedOn=null,zs||(zs=!0,on.unstable_scheduleCallback(on.unstable_NormalPriority,dg)))}function dr(e){function n(r){return za(r,e)}if(0<Fr.length){za(Fr[0],e);for(var t=1;t<Fr.length;t++){var a=Fr[t];a.blockedOn===e&&(a.blockedOn=null)}}for(at!==null&&za(at,e),rt!==null&&za(rt,e),ot!==null&&za(ot,e),lr.forEach(n),cr.forEach(n),t=0;t<Qn.length;t++)a=Qn[t],a.blockedOn===e&&(a.blockedOn=null);for(;0<Qn.length&&(t=Qn[0],t.blockedOn===null);)up(t),t.blockedOn===null&&Qn.shift()}var pa=Un.ReactCurrentBatchConfig,Eo=!0;function ug(e,n,t,a){var r=ce,i=pa.transition;pa.transition=null;try{ce=1,Vl(e,n,t,a)}finally{ce=r,pa.transition=i}}function pg(e,n,t,a){var r=ce,i=pa.transition;pa.transition=null;try{ce=4,Vl(e,n,t,a)}finally{ce=r,pa.transition=i}}function Vl(e,n,t,a){if(Eo){var r=Vs(e,n,t,a);if(r===null)es(e,n,a,Do,t),Fc(e,a);else if(cg(r,e,n,t,a))a.stopPropagation();else if(Fc(e,a),n&4&&-1<lg.indexOf(e)){for(;r!==null;){var i=Tr(r);if(i!==null&&sp(i),i=Vs(e,n,t,a),i===null&&es(e,n,a,Do,t),i===r)break;r=i}r!==null&&a.stopPropagation()}else es(e,n,a,null,t)}}var Do=null;function Vs(e,n,t,a){if(Do=null,e=Dl(a),e=kt(e),e!==null)if(n=Rt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=qu(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Do=e,null}function pp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qf()){case $l:return 1;case ap:return 4;case Mo:case eg:return 16;case rp:return 536870912;default:return 16}default:return 16}}var nt=null,Pl=null,po=null;function mp(){if(po)return po;var e,n=Pl,t=n.length,a,r="value"in nt?nt.value:nt.textContent,i=r.length;for(e=0;e<t&&n[e]===r[e];e++);var s=t-e;for(a=1;a<=s&&n[t-a]===r[i-a];a++);return po=r.slice(e,1<a?1-a:void 0)}function mo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Gr(){return!0}function Hc(){return!1}function ln(e){function n(t,a,r,i,s){this._reactName=t,this._targetInst=r,this.type=a,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Gr:Hc,this.isPropagationStopped=Hc,this}return ye(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Gr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Gr)},persist:function(){},isPersistent:Gr}),n}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rl=ln(Ca),Mr=ye({},Ca,{view:0,detail:0}),mg=ln(Mr),Gi,Hi,Va,pi=ye({},Mr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ll,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Va&&(Va&&e.type==="mousemove"?(Gi=e.screenX-Va.screenX,Hi=e.screenY-Va.screenY):Hi=Gi=0,Va=e),Gi)},movementY:function(e){return"movementY"in e?e.movementY:Hi}}),Uc=ln(pi),fg=ye({},pi,{dataTransfer:0}),gg=ln(fg),hg=ye({},Mr,{relatedTarget:0}),Ui=ln(hg),xg=ye({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),vg=ln(xg),bg=ye({},Ca,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yg=ln(bg),_g=ye({},Ca,{data:0}),Wc=ln(_g),Ig={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=jg[e])?!!n[e]:!1}function Ll(){return wg}var Sg=ye({},Mr,{key:function(e){if(e.key){var n=Ig[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ll,charCode:function(e){return e.type==="keypress"?mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cg=ln(Sg),Ng=ye({},pi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zc=ln(Ng),Mg=ye({},Mr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ll}),Tg=ln(Mg),Eg=ye({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dg=ln(Eg),$g=ye({},pi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ag=ln($g),zg=[9,13,27,32],Ol=Bn&&"CompositionEvent"in window,Ya=null;Bn&&"documentMode"in document&&(Ya=document.documentMode);var Vg=Bn&&"TextEvent"in window&&!Ya,fp=Bn&&(!Ol||Ya&&8<Ya&&11>=Ya),Yc=" ",Xc=!1;function gp(e,n){switch(e){case"keyup":return zg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yt=!1;function Pg(e,n){switch(e){case"compositionend":return hp(n);case"keypress":return n.which!==32?null:(Xc=!0,Yc);case"textInput":return e=n.data,e===Yc&&Xc?null:e;default:return null}}function Rg(e,n){if(Yt)return e==="compositionend"||!Ol&&gp(e,n)?(e=mp(),po=Pl=nt=null,Yt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return fp&&n.locale!=="ko"?null:n.data;default:return null}}var Lg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Lg[e.type]:n==="textarea"}function xp(e,n,t,a){Wu(a),n=$o(n,"onChange"),0<n.length&&(t=new Rl("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var Xa=null,ur=null;function Og(e){Np(e,0)}function mi(e){var n=qt(e);if(Ku(n))return e}function Kg(e,n){if(e==="change")return n}var vp=!1;if(Bn){var Wi;if(Bn){var Zi="oninput"in document;if(!Zi){var qc=document.createElement("div");qc.setAttribute("oninput","return;"),Zi=typeof qc.oninput=="function"}Wi=Zi}else Wi=!1;vp=Wi&&(!document.documentMode||9<document.documentMode)}function ed(){Xa&&(Xa.detachEvent("onpropertychange",bp),ur=Xa=null)}function bp(e){if(e.propertyName==="value"&&mi(ur)){var n=[];xp(n,ur,e,Dl(e)),Qu(Og,n)}}function Jg(e,n,t){e==="focusin"?(ed(),Xa=n,ur=t,Xa.attachEvent("onpropertychange",bp)):e==="focusout"&&ed()}function Bg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return mi(ur)}function Fg(e,n){if(e==="click")return mi(n)}function Gg(e,n){if(e==="input"||e==="change")return mi(n)}function Hg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Sn=typeof Object.is=="function"?Object.is:Hg;function pr(e,n){if(Sn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var r=t[a];if(!vs.call(n,r)||!Sn(e[r],n[r]))return!1}return!0}function nd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function td(e,n){var t=nd(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=nd(t)}}function yp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?yp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function _p(){for(var e=window,n=So();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=So(e.document)}return n}function Kl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Ug(e){var n=_p(),t=e.focusedElem,a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&yp(t.ownerDocument.documentElement,t)){if(a!==null&&Kl(t)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,i=Math.min(a.start,r);a=a.end===void 0?i:Math.min(a.end,r),!e.extend&&i>a&&(r=a,a=i,i=r),r=td(t,i);var s=td(t,a);r&&s&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),i>a?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wg=Bn&&"documentMode"in document&&11>=document.documentMode,Xt=null,Ps=null,Qa=null,Rs=!1;function ad(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Rs||Xt==null||Xt!==So(a)||(a=Xt,"selectionStart"in a&&Kl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Qa&&pr(Qa,a)||(Qa=a,a=$o(Ps,"onSelect"),0<a.length&&(n=new Rl("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Xt)))}function Hr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Qt={animationend:Hr("Animation","AnimationEnd"),animationiteration:Hr("Animation","AnimationIteration"),animationstart:Hr("Animation","AnimationStart"),transitionend:Hr("Transition","TransitionEnd")},Yi={},Ip={};Bn&&(Ip=document.createElement("div").style,"AnimationEvent"in window||(delete Qt.animationend.animation,delete Qt.animationiteration.animation,delete Qt.animationstart.animation),"TransitionEvent"in window||delete Qt.transitionend.transition);function fi(e){if(Yi[e])return Yi[e];if(!Qt[e])return e;var n=Qt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ip)return Yi[e]=n[t];return e}var kp=fi("animationend"),jp=fi("animationiteration"),wp=fi("animationstart"),Sp=fi("transitionend"),Cp=new Map,rd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ht(e,n){Cp.set(e,n),Pt(n,[e])}for(var Xi=0;Xi<rd.length;Xi++){var Qi=rd[Xi],Zg=Qi.toLowerCase(),Yg=Qi[0].toUpperCase()+Qi.slice(1);ht(Zg,"on"+Yg)}ht(kp,"onAnimationEnd");ht(jp,"onAnimationIteration");ht(wp,"onAnimationStart");ht("dblclick","onDoubleClick");ht("focusin","onFocus");ht("focusout","onBlur");ht(Sp,"onTransitionEnd");xa("onMouseEnter",["mouseout","mouseover"]);xa("onMouseLeave",["mouseout","mouseover"]);xa("onPointerEnter",["pointerout","pointerover"]);xa("onPointerLeave",["pointerout","pointerover"]);Pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ua));function od(e,n,t){var a=e.type||"unknown-event";e.currentTarget=t,Zf(a,n,void 0,e),e.currentTarget=null}function Np(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],r=a.event;a=a.listeners;e:{var i=void 0;if(n)for(var s=a.length-1;0<=s;s--){var l=a[s],d=l.instance,u=l.currentTarget;if(l=l.listener,d!==i&&r.isPropagationStopped())break e;od(r,l,u),i=d}else for(s=0;s<a.length;s++){if(l=a[s],d=l.instance,u=l.currentTarget,l=l.listener,d!==i&&r.isPropagationStopped())break e;od(r,l,u),i=d}}}if(No)throw e=$s,No=!1,$s=null,e}function pe(e,n){var t=n[Bs];t===void 0&&(t=n[Bs]=new Set);var a=e+"__bubble";t.has(a)||(Mp(n,e,2,!1),t.add(a))}function qi(e,n,t){var a=0;n&&(a|=4),Mp(t,e,a,n)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function mr(e){if(!e[Ur]){e[Ur]=!0,Vu.forEach(function(t){t!=="selectionchange"&&(Xg.has(t)||qi(t,!1,e),qi(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ur]||(n[Ur]=!0,qi("selectionchange",!1,n))}}function Mp(e,n,t,a){switch(pp(n)){case 1:var r=ug;break;case 4:r=pg;break;default:r=Vl}t=r.bind(null,n,t,e),r=void 0,!Ds||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function es(e,n,t,a,r){var i=a;if(!(n&1)&&!(n&2)&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var l=a.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(s===4)for(s=a.return;s!==null;){var d=s.tag;if((d===3||d===4)&&(d=s.stateNode.containerInfo,d===r||d.nodeType===8&&d.parentNode===r))return;s=s.return}for(;l!==null;){if(s=kt(l),s===null)return;if(d=s.tag,d===5||d===6){a=i=s;continue e}l=l.parentNode}}a=a.return}Qu(function(){var u=i,f=Dl(t),m=[];e:{var g=Cp.get(e);if(g!==void 0){var h=Rl,x=e;switch(e){case"keypress":if(mo(t)===0)break e;case"keydown":case"keyup":h=Cg;break;case"focusin":x="focus",h=Ui;break;case"focusout":x="blur",h=Ui;break;case"beforeblur":case"afterblur":h=Ui;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Uc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=gg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Tg;break;case kp:case jp:case wp:h=vg;break;case Sp:h=Dg;break;case"scroll":h=mg;break;case"wheel":h=Ag;break;case"copy":case"cut":case"paste":h=yg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Zc}var p=(n&4)!==0,_=!p&&e==="scroll",b=p?g!==null?g+"Capture":null:g;p=[];for(var v=u,y;v!==null;){y=v;var I=y.stateNode;if(y.tag===5&&I!==null&&(y=I,b!==null&&(I=sr(v,b),I!=null&&p.push(fr(v,I,y)))),_)break;v=v.return}0<p.length&&(g=new h(g,x,null,t,f),m.push({event:g,listeners:p}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",g&&t!==Ts&&(x=t.relatedTarget||t.fromElement)&&(kt(x)||x[Fn]))break e;if((h||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,h?(x=t.relatedTarget||t.toElement,h=u,x=x?kt(x):null,x!==null&&(_=Rt(x),x!==_||x.tag!==5&&x.tag!==6)&&(x=null)):(h=null,x=u),h!==x)){if(p=Uc,I="onMouseLeave",b="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(p=Zc,I="onPointerLeave",b="onPointerEnter",v="pointer"),_=h==null?g:qt(h),y=x==null?g:qt(x),g=new p(I,v+"leave",h,t,f),g.target=_,g.relatedTarget=y,I=null,kt(f)===u&&(p=new p(b,v+"enter",x,t,f),p.target=y,p.relatedTarget=_,I=p),_=I,h&&x)n:{for(p=h,b=x,v=0,y=p;y;y=Bt(y))v++;for(y=0,I=b;I;I=Bt(I))y++;for(;0<v-y;)p=Bt(p),v--;for(;0<y-v;)b=Bt(b),y--;for(;v--;){if(p===b||b!==null&&p===b.alternate)break n;p=Bt(p),b=Bt(b)}p=null}else p=null;h!==null&&id(m,g,h,p,!1),x!==null&&_!==null&&id(m,_,x,p,!0)}}e:{if(g=u?qt(u):window,h=g.nodeName&&g.nodeName.toLowerCase(),h==="select"||h==="input"&&g.type==="file")var N=Kg;else if(Qc(g))if(vp)N=Gg;else{N=Bg;var T=Jg}else(h=g.nodeName)&&h.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(N=Fg);if(N&&(N=N(e,u))){xp(m,N,t,f);break e}T&&T(e,g,u),e==="focusout"&&(T=g._wrapperState)&&T.controlled&&g.type==="number"&&ws(g,"number",g.value)}switch(T=u?qt(u):window,e){case"focusin":(Qc(T)||T.contentEditable==="true")&&(Xt=T,Ps=u,Qa=null);break;case"focusout":Qa=Ps=Xt=null;break;case"mousedown":Rs=!0;break;case"contextmenu":case"mouseup":case"dragend":Rs=!1,ad(m,t,f);break;case"selectionchange":if(Wg)break;case"keydown":case"keyup":ad(m,t,f)}var k;if(Ol)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Yt?gp(e,t)&&(S="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&(fp&&t.locale!=="ko"&&(Yt||S!=="onCompositionStart"?S==="onCompositionEnd"&&Yt&&(k=mp()):(nt=f,Pl="value"in nt?nt.value:nt.textContent,Yt=!0)),T=$o(u,S),0<T.length&&(S=new Wc(S,e,null,t,f),m.push({event:S,listeners:T}),k?S.data=k:(k=hp(t),k!==null&&(S.data=k)))),(k=Vg?Pg(e,t):Rg(e,t))&&(u=$o(u,"onBeforeInput"),0<u.length&&(f=new Wc("onBeforeInput","beforeinput",null,t,f),m.push({event:f,listeners:u}),f.data=k))}Np(m,n)})}function fr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function $o(e,n){for(var t=n+"Capture",a=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=sr(e,t),i!=null&&a.unshift(fr(e,i,r)),i=sr(e,n),i!=null&&a.push(fr(e,i,r))),e=e.return}return a}function Bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function id(e,n,t,a,r){for(var i=n._reactName,s=[];t!==null&&t!==a;){var l=t,d=l.alternate,u=l.stateNode;if(d!==null&&d===a)break;l.tag===5&&u!==null&&(l=u,r?(d=sr(t,i),d!=null&&s.unshift(fr(t,d,l))):r||(d=sr(t,i),d!=null&&s.push(fr(t,d,l)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var Qg=/\r\n?/g,qg=/\u0000|\uFFFD/g;function sd(e){return(typeof e=="string"?e:""+e).replace(Qg,`
`).replace(qg,"")}function Wr(e,n,t){if(n=sd(n),sd(e)!==n&&t)throw Error(U(425))}function Ao(){}var Ls=null,Os=null;function Ks(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Js=typeof setTimeout=="function"?setTimeout:void 0,e0=typeof clearTimeout=="function"?clearTimeout:void 0,ld=typeof Promise=="function"?Promise:void 0,n0=typeof queueMicrotask=="function"?queueMicrotask:typeof ld<"u"?function(e){return ld.resolve(null).then(e).catch(t0)}:Js;function t0(e){setTimeout(function(){throw e})}function ns(e,n){var t=n,a=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(a===0){e.removeChild(r),dr(n);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=r}while(t);dr(n)}function it(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function cd(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Na=Math.random().toString(36).slice(2),Mn="__reactFiber$"+Na,gr="__reactProps$"+Na,Fn="__reactContainer$"+Na,Bs="__reactEvents$"+Na,a0="__reactListeners$"+Na,r0="__reactHandles$"+Na;function kt(e){var n=e[Mn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Fn]||t[Mn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=cd(e);e!==null;){if(t=e[Mn])return t;e=cd(e)}return n}e=t,t=e.parentNode}return null}function Tr(e){return e=e[Mn]||e[Fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function gi(e){return e[gr]||null}var Fs=[],ea=-1;function xt(e){return{current:e}}function me(e){0>ea||(e.current=Fs[ea],Fs[ea]=null,ea--)}function ue(e,n){ea++,Fs[ea]=e.current,e.current=n}var mt={},Je=xt(mt),Xe=xt(!1),Et=mt;function va(e,n){var t=e.type.contextTypes;if(!t)return mt;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in t)r[i]=n[i];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function Qe(e){return e=e.childContextTypes,e!=null}function zo(){me(Xe),me(Je)}function dd(e,n,t){if(Je.current!==mt)throw Error(U(168));ue(Je,n),ue(Xe,t)}function Tp(e,n,t){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return t;a=a.getChildContext();for(var r in a)if(!(r in n))throw Error(U(108,Jf(e)||"Unknown",r));return ye({},t,a)}function Vo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mt,Et=Je.current,ue(Je,e),ue(Xe,Xe.current),!0}function ud(e,n,t){var a=e.stateNode;if(!a)throw Error(U(169));t?(e=Tp(e,n,Et),a.__reactInternalMemoizedMergedChildContext=e,me(Xe),me(Je),ue(Je,e)):me(Xe),ue(Xe,t)}var Pn=null,hi=!1,ts=!1;function Ep(e){Pn===null?Pn=[e]:Pn.push(e)}function o0(e){hi=!0,Ep(e)}function vt(){if(!ts&&Pn!==null){ts=!0;var e=0,n=ce;try{var t=Pn;for(ce=1;e<t.length;e++){var a=t[e];do a=a(!0);while(a!==null)}Pn=null,hi=!1}catch(r){throw Pn!==null&&(Pn=Pn.slice(e+1)),tp($l,vt),r}finally{ce=n,ts=!1}}return null}var na=[],ta=0,Po=null,Ro=0,dn=[],un=0,Dt=null,Ln=1,On="";function yt(e,n){na[ta++]=Ro,na[ta++]=Po,Po=e,Ro=n}function Dp(e,n,t){dn[un++]=Ln,dn[un++]=On,dn[un++]=Dt,Dt=e;var a=Ln;e=On;var r=32-jn(a)-1;a&=~(1<<r),t+=1;var i=32-jn(n)+r;if(30<i){var s=r-r%5;i=(a&(1<<s)-1).toString(32),a>>=s,r-=s,Ln=1<<32-jn(n)+r|t<<r|a,On=i+e}else Ln=1<<i|t<<r|a,On=e}function Jl(e){e.return!==null&&(yt(e,1),Dp(e,1,0))}function Bl(e){for(;e===Po;)Po=na[--ta],na[ta]=null,Ro=na[--ta],na[ta]=null;for(;e===Dt;)Dt=dn[--un],dn[un]=null,On=dn[--un],dn[un]=null,Ln=dn[--un],dn[un]=null}var rn=null,an=null,ge=!1,kn=null;function $p(e,n){var t=pn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function pd(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,rn=e,an=it(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,rn=e,an=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Dt!==null?{id:Ln,overflow:On}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=pn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,rn=e,an=null,!0):!1;default:return!1}}function Gs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Hs(e){if(ge){var n=an;if(n){var t=n;if(!pd(e,n)){if(Gs(e))throw Error(U(418));n=it(t.nextSibling);var a=rn;n&&pd(e,n)?$p(a,t):(e.flags=e.flags&-4097|2,ge=!1,rn=e)}}else{if(Gs(e))throw Error(U(418));e.flags=e.flags&-4097|2,ge=!1,rn=e}}}function md(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rn=e}function Zr(e){if(e!==rn)return!1;if(!ge)return md(e),ge=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ks(e.type,e.memoizedProps)),n&&(n=an)){if(Gs(e))throw Ap(),Error(U(418));for(;n;)$p(e,n),n=it(n.nextSibling)}if(md(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){an=it(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}an=null}}else an=rn?it(e.stateNode.nextSibling):null;return!0}function Ap(){for(var e=an;e;)e=it(e.nextSibling)}function ba(){an=rn=null,ge=!1}function Fl(e){kn===null?kn=[e]:kn.push(e)}var i0=Un.ReactCurrentBatchConfig;function Pa(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(U(309));var a=t.stateNode}if(!a)throw Error(U(147,e));var r=a,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(s){var l=r.refs;s===null?delete l[i]:l[i]=s},n._stringRef=i,n)}if(typeof e!="string")throw Error(U(284));if(!t._owner)throw Error(U(290,e))}return e}function Yr(e,n){throw e=Object.prototype.toString.call(n),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function fd(e){var n=e._init;return n(e._payload)}function zp(e){function n(b,v){if(e){var y=b.deletions;y===null?(b.deletions=[v],b.flags|=16):y.push(v)}}function t(b,v){if(!e)return null;for(;v!==null;)n(b,v),v=v.sibling;return null}function a(b,v){for(b=new Map;v!==null;)v.key!==null?b.set(v.key,v):b.set(v.index,v),v=v.sibling;return b}function r(b,v){return b=dt(b,v),b.index=0,b.sibling=null,b}function i(b,v,y){return b.index=y,e?(y=b.alternate,y!==null?(y=y.index,y<v?(b.flags|=2,v):y):(b.flags|=2,v)):(b.flags|=1048576,v)}function s(b){return e&&b.alternate===null&&(b.flags|=2),b}function l(b,v,y,I){return v===null||v.tag!==6?(v=cs(y,b.mode,I),v.return=b,v):(v=r(v,y),v.return=b,v)}function d(b,v,y,I){var N=y.type;return N===Zt?f(b,v,y.props.children,I,y.key):v!==null&&(v.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Yn&&fd(N)===v.type)?(I=r(v,y.props),I.ref=Pa(b,v,y),I.return=b,I):(I=yo(y.type,y.key,y.props,null,b.mode,I),I.ref=Pa(b,v,y),I.return=b,I)}function u(b,v,y,I){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=ds(y,b.mode,I),v.return=b,v):(v=r(v,y.children||[]),v.return=b,v)}function f(b,v,y,I,N){return v===null||v.tag!==7?(v=Nt(y,b.mode,I,N),v.return=b,v):(v=r(v,y),v.return=b,v)}function m(b,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=cs(""+v,b.mode,y),v.return=b,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Lr:return y=yo(v.type,v.key,v.props,null,b.mode,y),y.ref=Pa(b,null,v),y.return=b,y;case Wt:return v=ds(v,b.mode,y),v.return=b,v;case Yn:var I=v._init;return m(b,I(v._payload),y)}if(Ga(v)||Da(v))return v=Nt(v,b.mode,y,null),v.return=b,v;Yr(b,v)}return null}function g(b,v,y,I){var N=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return N!==null?null:l(b,v,""+y,I);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Lr:return y.key===N?d(b,v,y,I):null;case Wt:return y.key===N?u(b,v,y,I):null;case Yn:return N=y._init,g(b,v,N(y._payload),I)}if(Ga(y)||Da(y))return N!==null?null:f(b,v,y,I,null);Yr(b,y)}return null}function h(b,v,y,I,N){if(typeof I=="string"&&I!==""||typeof I=="number")return b=b.get(y)||null,l(v,b,""+I,N);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Lr:return b=b.get(I.key===null?y:I.key)||null,d(v,b,I,N);case Wt:return b=b.get(I.key===null?y:I.key)||null,u(v,b,I,N);case Yn:var T=I._init;return h(b,v,y,T(I._payload),N)}if(Ga(I)||Da(I))return b=b.get(y)||null,f(v,b,I,N,null);Yr(v,I)}return null}function x(b,v,y,I){for(var N=null,T=null,k=v,S=v=0,$=null;k!==null&&S<y.length;S++){k.index>S?($=k,k=null):$=k.sibling;var E=g(b,k,y[S],I);if(E===null){k===null&&(k=$);break}e&&k&&E.alternate===null&&n(b,k),v=i(E,v,S),T===null?N=E:T.sibling=E,T=E,k=$}if(S===y.length)return t(b,k),ge&&yt(b,S),N;if(k===null){for(;S<y.length;S++)k=m(b,y[S],I),k!==null&&(v=i(k,v,S),T===null?N=k:T.sibling=k,T=k);return ge&&yt(b,S),N}for(k=a(b,k);S<y.length;S++)$=h(k,b,S,y[S],I),$!==null&&(e&&$.alternate!==null&&k.delete($.key===null?S:$.key),v=i($,v,S),T===null?N=$:T.sibling=$,T=$);return e&&k.forEach(function(J){return n(b,J)}),ge&&yt(b,S),N}function p(b,v,y,I){var N=Da(y);if(typeof N!="function")throw Error(U(150));if(y=N.call(y),y==null)throw Error(U(151));for(var T=N=null,k=v,S=v=0,$=null,E=y.next();k!==null&&!E.done;S++,E=y.next()){k.index>S?($=k,k=null):$=k.sibling;var J=g(b,k,E.value,I);if(J===null){k===null&&(k=$);break}e&&k&&J.alternate===null&&n(b,k),v=i(J,v,S),T===null?N=J:T.sibling=J,T=J,k=$}if(E.done)return t(b,k),ge&&yt(b,S),N;if(k===null){for(;!E.done;S++,E=y.next())E=m(b,E.value,I),E!==null&&(v=i(E,v,S),T===null?N=E:T.sibling=E,T=E);return ge&&yt(b,S),N}for(k=a(b,k);!E.done;S++,E=y.next())E=h(k,b,S,E.value,I),E!==null&&(e&&E.alternate!==null&&k.delete(E.key===null?S:E.key),v=i(E,v,S),T===null?N=E:T.sibling=E,T=E);return e&&k.forEach(function(V){return n(b,V)}),ge&&yt(b,S),N}function _(b,v,y,I){if(typeof y=="object"&&y!==null&&y.type===Zt&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Lr:e:{for(var N=y.key,T=v;T!==null;){if(T.key===N){if(N=y.type,N===Zt){if(T.tag===7){t(b,T.sibling),v=r(T,y.props.children),v.return=b,b=v;break e}}else if(T.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Yn&&fd(N)===T.type){t(b,T.sibling),v=r(T,y.props),v.ref=Pa(b,T,y),v.return=b,b=v;break e}t(b,T);break}else n(b,T);T=T.sibling}y.type===Zt?(v=Nt(y.props.children,b.mode,I,y.key),v.return=b,b=v):(I=yo(y.type,y.key,y.props,null,b.mode,I),I.ref=Pa(b,v,y),I.return=b,b=I)}return s(b);case Wt:e:{for(T=y.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){t(b,v.sibling),v=r(v,y.children||[]),v.return=b,b=v;break e}else{t(b,v);break}else n(b,v);v=v.sibling}v=ds(y,b.mode,I),v.return=b,b=v}return s(b);case Yn:return T=y._init,_(b,v,T(y._payload),I)}if(Ga(y))return x(b,v,y,I);if(Da(y))return p(b,v,y,I);Yr(b,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(t(b,v.sibling),v=r(v,y),v.return=b,b=v):(t(b,v),v=cs(y,b.mode,I),v.return=b,b=v),s(b)):t(b,v)}return _}var ya=zp(!0),Vp=zp(!1),Lo=xt(null),Oo=null,aa=null,Gl=null;function Hl(){Gl=aa=Oo=null}function Ul(e){var n=Lo.current;me(Lo),e._currentValue=n}function Us(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function ma(e,n){Oo=e,Gl=aa=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ze=!0),e.firstContext=null)}function xn(e){var n=e._currentValue;if(Gl!==e)if(e={context:e,memoizedValue:n,next:null},aa===null){if(Oo===null)throw Error(U(308));aa=e,Oo.dependencies={lanes:0,firstContext:e}}else aa=aa.next=e;return n}var jt=null;function Wl(e){jt===null?jt=[e]:jt.push(e)}function Pp(e,n,t,a){var r=n.interleaved;return r===null?(t.next=t,Wl(n)):(t.next=r.next,r.next=t),n.interleaved=t,Gn(e,a)}function Gn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Xn=!1;function Zl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Kn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function st(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,oe&2){var r=a.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),a.pending=n,Gn(e,t)}return r=a.interleaved,r===null?(n.next=n,Wl(a)):(n.next=r.next,r.next=n),a.interleaved=n,Gn(e,t)}function fo(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Al(e,t)}}function gd(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var r=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?r=i=s:i=i.next=s,t=t.next}while(t!==null);i===null?r=i=n:i=i.next=n}else r=i=n;t={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:a.shared,effects:a.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ko(e,n,t,a){var r=e.updateQueue;Xn=!1;var i=r.firstBaseUpdate,s=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var d=l,u=d.next;d.next=null,s===null?i=u:s.next=u,s=d;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==s&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=d))}if(i!==null){var m=r.baseState;s=0,f=u=d=null,l=i;do{var g=l.lane,h=l.eventTime;if((a&g)===g){f!==null&&(f=f.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,p=l;switch(g=n,h=t,p.tag){case 1:if(x=p.payload,typeof x=="function"){m=x.call(h,m,g);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=p.payload,g=typeof x=="function"?x.call(h,m,g):x,g==null)break e;m=ye({},m,g);break e;case 2:Xn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=r.effects,g===null?r.effects=[l]:g.push(l))}else h={eventTime:h,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=h,d=m):f=f.next=h,s|=g;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;g=l,l=g.next,g.next=null,r.lastBaseUpdate=g,r.shared.pending=null}}while(!0);if(f===null&&(d=m),r.baseState=d,r.firstBaseUpdate=u,r.lastBaseUpdate=f,n=r.shared.interleaved,n!==null){r=n;do s|=r.lane,r=r.next;while(r!==n)}else i===null&&(r.shared.lanes=0);At|=s,e.lanes=s,e.memoizedState=m}}function hd(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],r=a.callback;if(r!==null){if(a.callback=null,a=t,typeof r!="function")throw Error(U(191,r));r.call(a)}}}var Er={},Dn=xt(Er),hr=xt(Er),xr=xt(Er);function wt(e){if(e===Er)throw Error(U(174));return e}function Yl(e,n){switch(ue(xr,n),ue(hr,e),ue(Dn,Er),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Cs(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Cs(n,e)}me(Dn),ue(Dn,n)}function _a(){me(Dn),me(hr),me(xr)}function Lp(e){wt(xr.current);var n=wt(Dn.current),t=Cs(n,e.type);n!==t&&(ue(hr,e),ue(Dn,t))}function Xl(e){hr.current===e&&(me(Dn),me(hr))}var xe=xt(0);function Jo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var as=[];function Ql(){for(var e=0;e<as.length;e++)as[e]._workInProgressVersionPrimary=null;as.length=0}var go=Un.ReactCurrentDispatcher,rs=Un.ReactCurrentBatchConfig,$t=0,ve=null,Ne=null,Ee=null,Bo=!1,qa=!1,vr=0,s0=0;function Re(){throw Error(U(321))}function ql(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Sn(e[t],n[t]))return!1;return!0}function ec(e,n,t,a,r,i){if($t=i,ve=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,go.current=e===null||e.memoizedState===null?u0:p0,e=t(a,r),qa){i=0;do{if(qa=!1,vr=0,25<=i)throw Error(U(301));i+=1,Ee=Ne=null,n.updateQueue=null,go.current=m0,e=t(a,r)}while(qa)}if(go.current=Fo,n=Ne!==null&&Ne.next!==null,$t=0,Ee=Ne=ve=null,Bo=!1,n)throw Error(U(300));return e}function nc(){var e=vr!==0;return vr=0,e}function Nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?ve.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function vn(){if(Ne===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var n=Ee===null?ve.memoizedState:Ee.next;if(n!==null)Ee=n,Ne=e;else{if(e===null)throw Error(U(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ee===null?ve.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function br(e,n){return typeof n=="function"?n(e):n}function os(e){var n=vn(),t=n.queue;if(t===null)throw Error(U(311));t.lastRenderedReducer=e;var a=Ne,r=a.baseQueue,i=t.pending;if(i!==null){if(r!==null){var s=r.next;r.next=i.next,i.next=s}a.baseQueue=r=i,t.pending=null}if(r!==null){i=r.next,a=a.baseState;var l=s=null,d=null,u=i;do{var f=u.lane;if(($t&f)===f)d!==null&&(d=d.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),a=u.hasEagerState?u.eagerState:e(a,u.action);else{var m={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};d===null?(l=d=m,s=a):d=d.next=m,ve.lanes|=f,At|=f}u=u.next}while(u!==null&&u!==i);d===null?s=a:d.next=l,Sn(a,n.memoizedState)||(Ze=!0),n.memoizedState=a,n.baseState=s,n.baseQueue=d,t.lastRenderedState=a}if(e=t.interleaved,e!==null){r=e;do i=r.lane,ve.lanes|=i,At|=i,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function is(e){var n=vn(),t=n.queue;if(t===null)throw Error(U(311));t.lastRenderedReducer=e;var a=t.dispatch,r=t.pending,i=n.memoizedState;if(r!==null){t.pending=null;var s=r=r.next;do i=e(i,s.action),s=s.next;while(s!==r);Sn(i,n.memoizedState)||(Ze=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,a]}function Op(){}function Kp(e,n){var t=ve,a=vn(),r=n(),i=!Sn(a.memoizedState,r);if(i&&(a.memoizedState=r,Ze=!0),a=a.queue,tc(Fp.bind(null,t,a,e),[e]),a.getSnapshot!==n||i||Ee!==null&&Ee.memoizedState.tag&1){if(t.flags|=2048,yr(9,Bp.bind(null,t,a,r,n),void 0,null),De===null)throw Error(U(349));$t&30||Jp(t,n,r)}return r}function Jp(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ve.updateQueue,n===null?(n={lastEffect:null,stores:null},ve.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Bp(e,n,t,a){n.value=t,n.getSnapshot=a,Gp(n)&&Hp(e)}function Fp(e,n,t){return t(function(){Gp(n)&&Hp(e)})}function Gp(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Sn(e,t)}catch{return!0}}function Hp(e){var n=Gn(e,1);n!==null&&wn(n,e,1,-1)}function xd(e){var n=Nn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:br,lastRenderedState:e},n.queue=e,e=e.dispatch=d0.bind(null,ve,e),[n.memoizedState,e]}function yr(e,n,t,a){return e={tag:e,create:n,destroy:t,deps:a,next:null},n=ve.updateQueue,n===null?(n={lastEffect:null,stores:null},ve.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e)),e}function Up(){return vn().memoizedState}function ho(e,n,t,a){var r=Nn();ve.flags|=e,r.memoizedState=yr(1|n,t,void 0,a===void 0?null:a)}function xi(e,n,t,a){var r=vn();a=a===void 0?null:a;var i=void 0;if(Ne!==null){var s=Ne.memoizedState;if(i=s.destroy,a!==null&&ql(a,s.deps)){r.memoizedState=yr(n,t,i,a);return}}ve.flags|=e,r.memoizedState=yr(1|n,t,i,a)}function vd(e,n){return ho(8390656,8,e,n)}function tc(e,n){return xi(2048,8,e,n)}function Wp(e,n){return xi(4,2,e,n)}function Zp(e,n){return xi(4,4,e,n)}function Yp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Xp(e,n,t){return t=t!=null?t.concat([e]):null,xi(4,4,Yp.bind(null,n,e),t)}function ac(){}function Qp(e,n){var t=vn();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&ql(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function qp(e,n){var t=vn();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&ql(n,a[1])?a[0]:(e=e(),t.memoizedState=[e,n],e)}function em(e,n,t){return $t&21?(Sn(t,n)||(t=op(),ve.lanes|=t,At|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=t)}function l0(e,n){var t=ce;ce=t!==0&&4>t?t:4,e(!0);var a=rs.transition;rs.transition={};try{e(!1),n()}finally{ce=t,rs.transition=a}}function nm(){return vn().memoizedState}function c0(e,n,t){var a=ct(e);if(t={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null},tm(e))am(n,t);else if(t=Pp(e,n,t,a),t!==null){var r=Ge();wn(t,e,a,r),rm(t,n,a)}}function d0(e,n,t){var a=ct(e),r={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null};if(tm(e))am(n,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var s=n.lastRenderedState,l=i(s,t);if(r.hasEagerState=!0,r.eagerState=l,Sn(l,s)){var d=n.interleaved;d===null?(r.next=r,Wl(n)):(r.next=d.next,d.next=r),n.interleaved=r;return}}catch{}finally{}t=Pp(e,n,r,a),t!==null&&(r=Ge(),wn(t,e,a,r),rm(t,n,a))}}function tm(e){var n=e.alternate;return e===ve||n!==null&&n===ve}function am(e,n){qa=Bo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function rm(e,n,t){if(t&4194240){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Al(e,t)}}var Fo={readContext:xn,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},u0={readContext:xn,useCallback:function(e,n){return Nn().memoizedState=[e,n===void 0?null:n],e},useContext:xn,useEffect:vd,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,ho(4194308,4,Yp.bind(null,n,e),t)},useLayoutEffect:function(e,n){return ho(4194308,4,e,n)},useInsertionEffect:function(e,n){return ho(4,2,e,n)},useMemo:function(e,n){var t=Nn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var a=Nn();return n=t!==void 0?t(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=c0.bind(null,ve,e),[a.memoizedState,e]},useRef:function(e){var n=Nn();return e={current:e},n.memoizedState=e},useState:xd,useDebugValue:ac,useDeferredValue:function(e){return Nn().memoizedState=e},useTransition:function(){var e=xd(!1),n=e[0];return e=l0.bind(null,e[1]),Nn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var a=ve,r=Nn();if(ge){if(t===void 0)throw Error(U(407));t=t()}else{if(t=n(),De===null)throw Error(U(349));$t&30||Jp(a,n,t)}r.memoizedState=t;var i={value:t,getSnapshot:n};return r.queue=i,vd(Fp.bind(null,a,i,e),[e]),a.flags|=2048,yr(9,Bp.bind(null,a,i,t,n),void 0,null),t},useId:function(){var e=Nn(),n=De.identifierPrefix;if(ge){var t=On,a=Ln;t=(a&~(1<<32-jn(a)-1)).toString(32)+t,n=":"+n+"R"+t,t=vr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=s0++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},p0={readContext:xn,useCallback:Qp,useContext:xn,useEffect:tc,useImperativeHandle:Xp,useInsertionEffect:Wp,useLayoutEffect:Zp,useMemo:qp,useReducer:os,useRef:Up,useState:function(){return os(br)},useDebugValue:ac,useDeferredValue:function(e){var n=vn();return em(n,Ne.memoizedState,e)},useTransition:function(){var e=os(br)[0],n=vn().memoizedState;return[e,n]},useMutableSource:Op,useSyncExternalStore:Kp,useId:nm,unstable_isNewReconciler:!1},m0={readContext:xn,useCallback:Qp,useContext:xn,useEffect:tc,useImperativeHandle:Xp,useInsertionEffect:Wp,useLayoutEffect:Zp,useMemo:qp,useReducer:is,useRef:Up,useState:function(){return is(br)},useDebugValue:ac,useDeferredValue:function(e){var n=vn();return Ne===null?n.memoizedState=e:em(n,Ne.memoizedState,e)},useTransition:function(){var e=is(br)[0],n=vn().memoizedState;return[e,n]},useMutableSource:Op,useSyncExternalStore:Kp,useId:nm,unstable_isNewReconciler:!1};function _n(e,n){if(e&&e.defaultProps){n=ye({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Ws(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:ye({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var vi={isMounted:function(e){return(e=e._reactInternals)?Rt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var a=Ge(),r=ct(e),i=Kn(a,r);i.payload=n,t!=null&&(i.callback=t),n=st(e,i,r),n!==null&&(wn(n,e,r,a),fo(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=Ge(),r=ct(e),i=Kn(a,r);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=st(e,i,r),n!==null&&(wn(n,e,r,a),fo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ge(),a=ct(e),r=Kn(t,a);r.tag=2,n!=null&&(r.callback=n),n=st(e,r,a),n!==null&&(wn(n,e,a,t),fo(n,e,a))}};function bd(e,n,t,a,r,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,s):n.prototype&&n.prototype.isPureReactComponent?!pr(t,a)||!pr(r,i):!0}function om(e,n,t){var a=!1,r=mt,i=n.contextType;return typeof i=="object"&&i!==null?i=xn(i):(r=Qe(n)?Et:Je.current,a=n.contextTypes,i=(a=a!=null)?va(e,r):mt),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=vi,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),n}function yd(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&vi.enqueueReplaceState(n,n.state,null)}function Zs(e,n,t,a){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},Zl(e);var i=n.contextType;typeof i=="object"&&i!==null?r.context=xn(i):(i=Qe(n)?Et:Je.current,r.context=va(e,i)),r.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Ws(e,n,i,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&vi.enqueueReplaceState(r,r.state,null),Ko(e,t,r,a),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function Ia(e,n){try{var t="",a=n;do t+=Kf(a),a=a.return;while(a);var r=t}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:r,digest:null}}function ss(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Ys(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var f0=typeof WeakMap=="function"?WeakMap:Map;function im(e,n,t){t=Kn(-1,t),t.tag=3,t.payload={element:null};var a=n.value;return t.callback=function(){Ho||(Ho=!0,il=a),Ys(e,n)},t}function sm(e,n,t){t=Kn(-1,t),t.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var r=n.value;t.payload=function(){return a(r)},t.callback=function(){Ys(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Ys(e,n),typeof a!="function"&&(lt===null?lt=new Set([this]):lt.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function _d(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new f0;var r=new Set;a.set(n,r)}else r=a.get(n),r===void 0&&(r=new Set,a.set(n,r));r.has(t)||(r.add(t),e=N0.bind(null,e,n,t),n.then(e,e))}function Id(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function kd(e,n,t,a,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Kn(-1,1),n.tag=2,st(t,n,1))),t.lanes|=1),e)}var g0=Un.ReactCurrentOwner,Ze=!1;function Fe(e,n,t,a){n.child=e===null?Vp(n,null,t,a):ya(n,e.child,t,a)}function jd(e,n,t,a,r){t=t.render;var i=n.ref;return ma(n,r),a=ec(e,n,t,a,i,r),t=nc(),e!==null&&!Ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Hn(e,n,r)):(ge&&t&&Jl(n),n.flags|=1,Fe(e,n,a,r),n.child)}function wd(e,n,t,a,r){if(e===null){var i=t.type;return typeof i=="function"&&!uc(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,lm(e,n,i,a,r)):(e=yo(t.type,null,a,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&r)){var s=i.memoizedProps;if(t=t.compare,t=t!==null?t:pr,t(s,a)&&e.ref===n.ref)return Hn(e,n,r)}return n.flags|=1,e=dt(i,a),e.ref=n.ref,e.return=n,n.child=e}function lm(e,n,t,a,r){if(e!==null){var i=e.memoizedProps;if(pr(i,a)&&e.ref===n.ref)if(Ze=!1,n.pendingProps=a=i,(e.lanes&r)!==0)e.flags&131072&&(Ze=!0);else return n.lanes=e.lanes,Hn(e,n,r)}return Xs(e,n,t,a,r)}function cm(e,n,t){var a=n.pendingProps,r=a.children,i=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(oa,nn),nn|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ue(oa,nn),nn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=i!==null?i.baseLanes:t,ue(oa,nn),nn|=a}else i!==null?(a=i.baseLanes|t,n.memoizedState=null):a=t,ue(oa,nn),nn|=a;return Fe(e,n,r,t),n.child}function dm(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Xs(e,n,t,a,r){var i=Qe(t)?Et:Je.current;return i=va(n,i),ma(n,r),t=ec(e,n,t,a,i,r),a=nc(),e!==null&&!Ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Hn(e,n,r)):(ge&&a&&Jl(n),n.flags|=1,Fe(e,n,t,r),n.child)}function Sd(e,n,t,a,r){if(Qe(t)){var i=!0;Vo(n)}else i=!1;if(ma(n,r),n.stateNode===null)xo(e,n),om(n,t,a),Zs(n,t,a,r),a=!0;else if(e===null){var s=n.stateNode,l=n.memoizedProps;s.props=l;var d=s.context,u=t.contextType;typeof u=="object"&&u!==null?u=xn(u):(u=Qe(t)?Et:Je.current,u=va(n,u));var f=t.getDerivedStateFromProps,m=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==a||d!==u)&&yd(n,s,a,u),Xn=!1;var g=n.memoizedState;s.state=g,Ko(n,a,s,r),d=n.memoizedState,l!==a||g!==d||Xe.current||Xn?(typeof f=="function"&&(Ws(n,t,f,a),d=n.memoizedState),(l=Xn||bd(n,t,l,a,g,d,u))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=d),s.props=a,s.state=d,s.context=u,a=l):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{s=n.stateNode,Rp(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:_n(n.type,l),s.props=u,m=n.pendingProps,g=s.context,d=t.contextType,typeof d=="object"&&d!==null?d=xn(d):(d=Qe(t)?Et:Je.current,d=va(n,d));var h=t.getDerivedStateFromProps;(f=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==m||g!==d)&&yd(n,s,a,d),Xn=!1,g=n.memoizedState,s.state=g,Ko(n,a,s,r);var x=n.memoizedState;l!==m||g!==x||Xe.current||Xn?(typeof h=="function"&&(Ws(n,t,h,a),x=n.memoizedState),(u=Xn||bd(n,t,u,a,g,x,d)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,x,d),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,x,d)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=x),s.props=a,s.state=x,s.context=d,a=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),a=!1)}return Qs(e,n,t,a,i,r)}function Qs(e,n,t,a,r,i){dm(e,n);var s=(n.flags&128)!==0;if(!a&&!s)return r&&ud(n,t,!1),Hn(e,n,i);a=n.stateNode,g0.current=n;var l=s&&typeof t.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&s?(n.child=ya(n,e.child,null,i),n.child=ya(n,null,l,i)):Fe(e,n,l,i),n.memoizedState=a.state,r&&ud(n,t,!0),n.child}function um(e){var n=e.stateNode;n.pendingContext?dd(e,n.pendingContext,n.pendingContext!==n.context):n.context&&dd(e,n.context,!1),Yl(e,n.containerInfo)}function Cd(e,n,t,a,r){return ba(),Fl(r),n.flags|=256,Fe(e,n,t,a),n.child}var qs={dehydrated:null,treeContext:null,retryLane:0};function el(e){return{baseLanes:e,cachePool:null,transitions:null}}function pm(e,n,t){var a=n.pendingProps,r=xe.current,i=!1,s=(n.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(r&2)!==0),l?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),ue(xe,r&1),e===null)return Hs(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=a.children,e=a.fallback,i?(a=n.mode,i=n.child,s={mode:"hidden",children:s},!(a&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=_i(s,a,0,null),e=Nt(e,a,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=el(t),n.memoizedState=qs,e):rc(n,s));if(r=e.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return h0(e,n,s,a,l,r,t);if(i){i=a.fallback,s=n.mode,r=e.child,l=r.sibling;var d={mode:"hidden",children:a.children};return!(s&1)&&n.child!==r?(a=n.child,a.childLanes=0,a.pendingProps=d,n.deletions=null):(a=dt(r,d),a.subtreeFlags=r.subtreeFlags&14680064),l!==null?i=dt(l,i):(i=Nt(i,s,t,null),i.flags|=2),i.return=n,a.return=n,a.sibling=i,n.child=a,a=i,i=n.child,s=e.child.memoizedState,s=s===null?el(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~t,n.memoizedState=qs,a}return i=e.child,e=i.sibling,a=dt(i,{mode:"visible",children:a.children}),!(n.mode&1)&&(a.lanes=t),a.return=n,a.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=a,n.memoizedState=null,a}function rc(e,n){return n=_i({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Xr(e,n,t,a){return a!==null&&Fl(a),ya(n,e.child,null,t),e=rc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function h0(e,n,t,a,r,i,s){if(t)return n.flags&256?(n.flags&=-257,a=ss(Error(U(422))),Xr(e,n,s,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=a.fallback,r=n.mode,a=_i({mode:"visible",children:a.children},r,0,null),i=Nt(i,r,s,null),i.flags|=2,a.return=n,i.return=n,a.sibling=i,n.child=a,n.mode&1&&ya(n,e.child,null,s),n.child.memoizedState=el(s),n.memoizedState=qs,i);if(!(n.mode&1))return Xr(e,n,s,null);if(r.data==="$!"){if(a=r.nextSibling&&r.nextSibling.dataset,a)var l=a.dgst;return a=l,i=Error(U(419)),a=ss(i,a,void 0),Xr(e,n,s,a)}if(l=(s&e.childLanes)!==0,Ze||l){if(a=De,a!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(a.suspendedLanes|s)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,Gn(e,r),wn(a,e,r,-1))}return dc(),a=ss(Error(U(421))),Xr(e,n,s,a)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=M0.bind(null,e),r._reactRetry=n,null):(e=i.treeContext,an=it(r.nextSibling),rn=n,ge=!0,kn=null,e!==null&&(dn[un++]=Ln,dn[un++]=On,dn[un++]=Dt,Ln=e.id,On=e.overflow,Dt=n),n=rc(n,a.children),n.flags|=4096,n)}function Nd(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Us(e.return,n,t)}function ls(e,n,t,a,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:r}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=t,i.tailMode=r)}function mm(e,n,t){var a=n.pendingProps,r=a.revealOrder,i=a.tail;if(Fe(e,n,a.children,t),a=xe.current,a&2)a=a&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Nd(e,t,n);else if(e.tag===19)Nd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ue(xe,a),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&Jo(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),ls(n,!1,r,t,i);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Jo(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}ls(n,!0,t,null,i);break;case"together":ls(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function xo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Hn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),At|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(U(153));if(n.child!==null){for(e=n.child,t=dt(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=dt(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function x0(e,n,t){switch(n.tag){case 3:um(n),ba();break;case 5:Lp(n);break;case 1:Qe(n.type)&&Vo(n);break;case 4:Yl(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,r=n.memoizedProps.value;ue(Lo,a._currentValue),a._currentValue=r;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(ue(xe,xe.current&1),n.flags|=128,null):t&n.child.childLanes?pm(e,n,t):(ue(xe,xe.current&1),e=Hn(e,n,t),e!==null?e.sibling:null);ue(xe,xe.current&1);break;case 19:if(a=(t&n.childLanes)!==0,e.flags&128){if(a)return mm(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ue(xe,xe.current),a)break;return null;case 22:case 23:return n.lanes=0,cm(e,n,t)}return Hn(e,n,t)}var fm,nl,gm,hm;fm=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};nl=function(){};gm=function(e,n,t,a){var r=e.memoizedProps;if(r!==a){e=n.stateNode,wt(Dn.current);var i=null;switch(t){case"input":r=ks(e,r),a=ks(e,a),i=[];break;case"select":r=ye({},r,{value:void 0}),a=ye({},a,{value:void 0}),i=[];break;case"textarea":r=Ss(e,r),a=Ss(e,a),i=[];break;default:typeof r.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Ao)}Ns(t,a);var s;t=null;for(u in r)if(!a.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var l=r[u];for(s in l)l.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(or.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in a){var d=a[u];if(l=r!=null?r[u]:void 0,a.hasOwnProperty(u)&&d!==l&&(d!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||d&&d.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in d)d.hasOwnProperty(s)&&l[s]!==d[s]&&(t||(t={}),t[s]=d[s])}else t||(i||(i=[]),i.push(u,t)),t=d;else u==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,l=l?l.__html:void 0,d!=null&&l!==d&&(i=i||[]).push(u,d)):u==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(u,""+d):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(or.hasOwnProperty(u)?(d!=null&&u==="onScroll"&&pe("scroll",e),i||l===d||(i=[])):(i=i||[]).push(u,d))}t&&(i=i||[]).push("style",t);var u=i;(n.updateQueue=u)&&(n.flags|=4)}};hm=function(e,n,t,a){t!==a&&(n.flags|=4)};function Ra(e,n){if(!ge)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Le(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags&14680064,a|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function v0(e,n,t){var a=n.pendingProps;switch(Bl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(n),null;case 1:return Qe(n.type)&&zo(),Le(n),null;case 3:return a=n.stateNode,_a(),me(Xe),me(Je),Ql(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,kn!==null&&(cl(kn),kn=null))),nl(e,n),Le(n),null;case 5:Xl(n);var r=wt(xr.current);if(t=n.type,e!==null&&n.stateNode!=null)gm(e,n,t,a,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(U(166));return Le(n),null}if(e=wt(Dn.current),Zr(n)){a=n.stateNode,t=n.type;var i=n.memoizedProps;switch(a[Mn]=n,a[gr]=i,e=(n.mode&1)!==0,t){case"dialog":pe("cancel",a),pe("close",a);break;case"iframe":case"object":case"embed":pe("load",a);break;case"video":case"audio":for(r=0;r<Ua.length;r++)pe(Ua[r],a);break;case"source":pe("error",a);break;case"img":case"image":case"link":pe("error",a),pe("load",a);break;case"details":pe("toggle",a);break;case"input":Pc(a,i),pe("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!i.multiple},pe("invalid",a);break;case"textarea":Lc(a,i),pe("invalid",a)}Ns(t,i),r=null;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="children"?typeof l=="string"?a.textContent!==l&&(i.suppressHydrationWarning!==!0&&Wr(a.textContent,l,e),r=["children",l]):typeof l=="number"&&a.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Wr(a.textContent,l,e),r=["children",""+l]):or.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&pe("scroll",a)}switch(t){case"input":Or(a),Rc(a,i,!0);break;case"textarea":Or(a),Oc(a);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(a.onclick=Ao)}a=r,n.updateQueue=a,a!==null&&(n.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=s.createElement(t,{is:a.is}):(e=s.createElement(t),t==="select"&&(s=e,a.multiple?s.multiple=!0:a.size&&(s.size=a.size))):e=s.createElementNS(e,t),e[Mn]=n,e[gr]=a,fm(e,n,!1,!1),n.stateNode=e;e:{switch(s=Ms(t,a),t){case"dialog":pe("cancel",e),pe("close",e),r=a;break;case"iframe":case"object":case"embed":pe("load",e),r=a;break;case"video":case"audio":for(r=0;r<Ua.length;r++)pe(Ua[r],e);r=a;break;case"source":pe("error",e),r=a;break;case"img":case"image":case"link":pe("error",e),pe("load",e),r=a;break;case"details":pe("toggle",e),r=a;break;case"input":Pc(e,a),r=ks(e,a),pe("invalid",e);break;case"option":r=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},r=ye({},a,{value:void 0}),pe("invalid",e);break;case"textarea":Lc(e,a),r=Ss(e,a),pe("invalid",e);break;default:r=a}Ns(t,r),l=r;for(i in l)if(l.hasOwnProperty(i)){var d=l[i];i==="style"?Uu(e,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Gu(e,d)):i==="children"?typeof d=="string"?(t!=="textarea"||d!=="")&&ir(e,d):typeof d=="number"&&ir(e,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(or.hasOwnProperty(i)?d!=null&&i==="onScroll"&&pe("scroll",e):d!=null&&Nl(e,i,d,s))}switch(t){case"input":Or(e),Rc(e,a,!1);break;case"textarea":Or(e),Oc(e);break;case"option":a.value!=null&&e.setAttribute("value",""+pt(a.value));break;case"select":e.multiple=!!a.multiple,i=a.value,i!=null?ca(e,!!a.multiple,i,!1):a.defaultValue!=null&&ca(e,!!a.multiple,a.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Ao)}switch(t){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Le(n),null;case 6:if(e&&n.stateNode!=null)hm(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(U(166));if(t=wt(xr.current),wt(Dn.current),Zr(n)){if(a=n.stateNode,t=n.memoizedProps,a[Mn]=n,(i=a.nodeValue!==t)&&(e=rn,e!==null))switch(e.tag){case 3:Wr(a.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wr(a.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else a=(t.nodeType===9?t:t.ownerDocument).createTextNode(a),a[Mn]=n,n.stateNode=a}return Le(n),null;case 13:if(me(xe),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&an!==null&&n.mode&1&&!(n.flags&128))Ap(),ba(),n.flags|=98560,i=!1;else if(i=Zr(n),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(U(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(U(317));i[Mn]=n}else ba(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Le(n),i=!1}else kn!==null&&(cl(kn),kn=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,n.mode&1&&(e===null||xe.current&1?Te===0&&(Te=3):dc())),n.updateQueue!==null&&(n.flags|=4),Le(n),null);case 4:return _a(),nl(e,n),e===null&&mr(n.stateNode.containerInfo),Le(n),null;case 10:return Ul(n.type._context),Le(n),null;case 17:return Qe(n.type)&&zo(),Le(n),null;case 19:if(me(xe),i=n.memoizedState,i===null)return Le(n),null;if(a=(n.flags&128)!==0,s=i.rendering,s===null)if(a)Ra(i,!1);else{if(Te!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=Jo(e),s!==null){for(n.flags|=128,Ra(i,!1),a=s.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=t,t=n.child;t!==null;)i=t,e=a,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ue(xe,xe.current&1|2),n.child}e=e.sibling}i.tail!==null&&ke()>ka&&(n.flags|=128,a=!0,Ra(i,!1),n.lanes=4194304)}else{if(!a)if(e=Jo(s),e!==null){if(n.flags|=128,a=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ra(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ge)return Le(n),null}else 2*ke()-i.renderingStartTime>ka&&t!==1073741824&&(n.flags|=128,a=!0,Ra(i,!1),n.lanes=4194304);i.isBackwards?(s.sibling=n.child,n.child=s):(t=i.last,t!==null?t.sibling=s:n.child=s,i.last=s)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=ke(),n.sibling=null,t=xe.current,ue(xe,a?t&1|2:t&1),n):(Le(n),null);case 22:case 23:return cc(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&n.mode&1?nn&1073741824&&(Le(n),n.subtreeFlags&6&&(n.flags|=8192)):Le(n),null;case 24:return null;case 25:return null}throw Error(U(156,n.tag))}function b0(e,n){switch(Bl(n),n.tag){case 1:return Qe(n.type)&&zo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return _a(),me(Xe),me(Je),Ql(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Xl(n),null;case 13:if(me(xe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(U(340));ba()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return me(xe),null;case 4:return _a(),null;case 10:return Ul(n.type._context),null;case 22:case 23:return cc(),null;case 24:return null;default:return null}}var Qr=!1,Oe=!1,y0=typeof WeakSet=="function"?WeakSet:Set,Y=null;function ra(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(a){_e(e,n,a)}else t.current=null}function tl(e,n,t){try{t()}catch(a){_e(e,n,a)}}var Md=!1;function _0(e,n){if(Ls=Eo,e=_p(),Kl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var r=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var s=0,l=-1,d=-1,u=0,f=0,m=e,g=null;n:for(;;){for(var h;m!==t||r!==0&&m.nodeType!==3||(l=s+r),m!==i||a!==0&&m.nodeType!==3||(d=s+a),m.nodeType===3&&(s+=m.nodeValue.length),(h=m.firstChild)!==null;)g=m,m=h;for(;;){if(m===e)break n;if(g===t&&++u===r&&(l=s),g===i&&++f===a&&(d=s),(h=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=h}t=l===-1||d===-1?null:{start:l,end:d}}else t=null}t=t||{start:0,end:0}}else t=null;for(Os={focusedElem:e,selectionRange:t},Eo=!1,Y=n;Y!==null;)if(n=Y,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Y=e;else for(;Y!==null;){n=Y;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var p=x.memoizedProps,_=x.memoizedState,b=n.stateNode,v=b.getSnapshotBeforeUpdate(n.elementType===n.type?p:_n(n.type,p),_);b.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=n.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(I){_e(n,n.return,I)}if(e=n.sibling,e!==null){e.return=n.return,Y=e;break}Y=n.return}return x=Md,Md=!1,x}function er(e,n,t){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var r=a=a.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&tl(n,t,i)}r=r.next}while(r!==a)}}function bi(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var a=t.create;t.destroy=a()}t=t.next}while(t!==n)}}function al(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function xm(e){var n=e.alternate;n!==null&&(e.alternate=null,xm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Mn],delete n[gr],delete n[Bs],delete n[a0],delete n[r0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vm(e){return e.tag===5||e.tag===3||e.tag===4}function Td(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rl(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ao));else if(a!==4&&(e=e.child,e!==null))for(rl(e,n,t),e=e.sibling;e!==null;)rl(e,n,t),e=e.sibling}function ol(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(ol(e,n,t),e=e.sibling;e!==null;)ol(e,n,t),e=e.sibling}var $e=null,In=!1;function Zn(e,n,t){for(t=t.child;t!==null;)bm(e,n,t),t=t.sibling}function bm(e,n,t){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(ui,t)}catch{}switch(t.tag){case 5:Oe||ra(t,n);case 6:var a=$e,r=In;$e=null,Zn(e,n,t),$e=a,In=r,$e!==null&&(In?(e=$e,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):$e.removeChild(t.stateNode));break;case 18:$e!==null&&(In?(e=$e,t=t.stateNode,e.nodeType===8?ns(e.parentNode,t):e.nodeType===1&&ns(e,t),dr(e)):ns($e,t.stateNode));break;case 4:a=$e,r=In,$e=t.stateNode.containerInfo,In=!0,Zn(e,n,t),$e=a,In=r;break;case 0:case 11:case 14:case 15:if(!Oe&&(a=t.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){r=a=a.next;do{var i=r,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&tl(t,n,s),r=r.next}while(r!==a)}Zn(e,n,t);break;case 1:if(!Oe&&(ra(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=t.memoizedProps,a.state=t.memoizedState,a.componentWillUnmount()}catch(l){_e(t,n,l)}Zn(e,n,t);break;case 21:Zn(e,n,t);break;case 22:t.mode&1?(Oe=(a=Oe)||t.memoizedState!==null,Zn(e,n,t),Oe=a):Zn(e,n,t);break;default:Zn(e,n,t)}}function Ed(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new y0),n.forEach(function(a){var r=T0.bind(null,e,a);t.has(a)||(t.add(a),a.then(r,r))})}}function yn(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var r=t[a];try{var i=e,s=n,l=s;e:for(;l!==null;){switch(l.tag){case 5:$e=l.stateNode,In=!1;break e;case 3:$e=l.stateNode.containerInfo,In=!0;break e;case 4:$e=l.stateNode.containerInfo,In=!0;break e}l=l.return}if($e===null)throw Error(U(160));bm(i,s,r),$e=null,In=!1;var d=r.alternate;d!==null&&(d.return=null),r.return=null}catch(u){_e(r,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)ym(n,e),n=n.sibling}function ym(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yn(n,e),Cn(e),a&4){try{er(3,e,e.return),bi(3,e)}catch(p){_e(e,e.return,p)}try{er(5,e,e.return)}catch(p){_e(e,e.return,p)}}break;case 1:yn(n,e),Cn(e),a&512&&t!==null&&ra(t,t.return);break;case 5:if(yn(n,e),Cn(e),a&512&&t!==null&&ra(t,t.return),e.flags&32){var r=e.stateNode;try{ir(r,"")}catch(p){_e(e,e.return,p)}}if(a&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,s=t!==null?t.memoizedProps:i,l=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Ju(r,i),Ms(l,s);var u=Ms(l,i);for(s=0;s<d.length;s+=2){var f=d[s],m=d[s+1];f==="style"?Uu(r,m):f==="dangerouslySetInnerHTML"?Gu(r,m):f==="children"?ir(r,m):Nl(r,f,m,u)}switch(l){case"input":js(r,i);break;case"textarea":Bu(r,i);break;case"select":var g=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?ca(r,!!i.multiple,h,!1):g!==!!i.multiple&&(i.defaultValue!=null?ca(r,!!i.multiple,i.defaultValue,!0):ca(r,!!i.multiple,i.multiple?[]:"",!1))}r[gr]=i}catch(p){_e(e,e.return,p)}}break;case 6:if(yn(n,e),Cn(e),a&4){if(e.stateNode===null)throw Error(U(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(p){_e(e,e.return,p)}}break;case 3:if(yn(n,e),Cn(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{dr(n.containerInfo)}catch(p){_e(e,e.return,p)}break;case 4:yn(n,e),Cn(e);break;case 13:yn(n,e),Cn(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(sc=ke())),a&4&&Ed(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(Oe=(u=Oe)||f,yn(n,e),Oe=u):yn(n,e),Cn(e),a&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(Y=e,f=e.child;f!==null;){for(m=Y=f;Y!==null;){switch(g=Y,h=g.child,g.tag){case 0:case 11:case 14:case 15:er(4,g,g.return);break;case 1:ra(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){a=g,t=g.return;try{n=a,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(p){_e(a,t,p)}}break;case 5:ra(g,g.return);break;case 22:if(g.memoizedState!==null){$d(m);continue}}h!==null?(h.return=g,Y=h):$d(m)}f=f.sibling}e:for(f=null,m=e;;){if(m.tag===5){if(f===null){f=m;try{r=m.stateNode,u?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,d=m.memoizedProps.style,s=d!=null&&d.hasOwnProperty("display")?d.display:null,l.style.display=Hu("display",s))}catch(p){_e(e,e.return,p)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(p){_e(e,e.return,p)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:yn(n,e),Cn(e),a&4&&Ed(e);break;case 21:break;default:yn(n,e),Cn(e)}}function Cn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(vm(t)){var a=t;break e}t=t.return}throw Error(U(160))}switch(a.tag){case 5:var r=a.stateNode;a.flags&32&&(ir(r,""),a.flags&=-33);var i=Td(e);ol(e,i,r);break;case 3:case 4:var s=a.stateNode.containerInfo,l=Td(e);rl(e,l,s);break;default:throw Error(U(161))}}catch(d){_e(e,e.return,d)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function I0(e,n,t){Y=e,_m(e)}function _m(e,n,t){for(var a=(e.mode&1)!==0;Y!==null;){var r=Y,i=r.child;if(r.tag===22&&a){var s=r.memoizedState!==null||Qr;if(!s){var l=r.alternate,d=l!==null&&l.memoizedState!==null||Oe;l=Qr;var u=Oe;if(Qr=s,(Oe=d)&&!u)for(Y=r;Y!==null;)s=Y,d=s.child,s.tag===22&&s.memoizedState!==null?Ad(r):d!==null?(d.return=s,Y=d):Ad(r);for(;i!==null;)Y=i,_m(i),i=i.sibling;Y=r,Qr=l,Oe=u}Dd(e)}else r.subtreeFlags&8772&&i!==null?(i.return=r,Y=i):Dd(e)}}function Dd(e){for(;Y!==null;){var n=Y;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Oe||bi(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!Oe)if(t===null)a.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:_n(n.type,t.memoizedProps);a.componentDidUpdate(r,t.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&hd(n,i,a);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}hd(n,s,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var d=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&t.focus();break;case"img":d.src&&(t.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&dr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}Oe||n.flags&512&&al(n)}catch(g){_e(n,n.return,g)}}if(n===e){Y=null;break}if(t=n.sibling,t!==null){t.return=n.return,Y=t;break}Y=n.return}}function $d(e){for(;Y!==null;){var n=Y;if(n===e){Y=null;break}var t=n.sibling;if(t!==null){t.return=n.return,Y=t;break}Y=n.return}}function Ad(e){for(;Y!==null;){var n=Y;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{bi(4,n)}catch(d){_e(n,t,d)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var r=n.return;try{a.componentDidMount()}catch(d){_e(n,r,d)}}var i=n.return;try{al(n)}catch(d){_e(n,i,d)}break;case 5:var s=n.return;try{al(n)}catch(d){_e(n,s,d)}}}catch(d){_e(n,n.return,d)}if(n===e){Y=null;break}var l=n.sibling;if(l!==null){l.return=n.return,Y=l;break}Y=n.return}}var k0=Math.ceil,Go=Un.ReactCurrentDispatcher,oc=Un.ReactCurrentOwner,mn=Un.ReactCurrentBatchConfig,oe=0,De=null,Se=null,ze=0,nn=0,oa=xt(0),Te=0,_r=null,At=0,yi=0,ic=0,nr=null,We=null,sc=0,ka=1/0,Vn=null,Ho=!1,il=null,lt=null,qr=!1,tt=null,Uo=0,tr=0,sl=null,vo=-1,bo=0;function Ge(){return oe&6?ke():vo!==-1?vo:vo=ke()}function ct(e){return e.mode&1?oe&2&&ze!==0?ze&-ze:i0.transition!==null?(bo===0&&(bo=op()),bo):(e=ce,e!==0||(e=window.event,e=e===void 0?16:pp(e.type)),e):1}function wn(e,n,t,a){if(50<tr)throw tr=0,sl=null,Error(U(185));Nr(e,t,a),(!(oe&2)||e!==De)&&(e===De&&(!(oe&2)&&(yi|=t),Te===4&&qn(e,ze)),qe(e,a),t===1&&oe===0&&!(n.mode&1)&&(ka=ke()+500,hi&&vt()))}function qe(e,n){var t=e.callbackNode;ig(e,n);var a=To(e,e===De?ze:0);if(a===0)t!==null&&Bc(t),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(t!=null&&Bc(t),n===1)e.tag===0?o0(zd.bind(null,e)):Ep(zd.bind(null,e)),n0(function(){!(oe&6)&&vt()}),t=null;else{switch(ip(a)){case 1:t=$l;break;case 4:t=ap;break;case 16:t=Mo;break;case 536870912:t=rp;break;default:t=Mo}t=Mm(t,Im.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Im(e,n){if(vo=-1,bo=0,oe&6)throw Error(U(327));var t=e.callbackNode;if(fa()&&e.callbackNode!==t)return null;var a=To(e,e===De?ze:0);if(a===0)return null;if(a&30||a&e.expiredLanes||n)n=Wo(e,a);else{n=a;var r=oe;oe|=2;var i=jm();(De!==e||ze!==n)&&(Vn=null,ka=ke()+500,Ct(e,n));do try{S0();break}catch(l){km(e,l)}while(!0);Hl(),Go.current=i,oe=r,Se!==null?n=0:(De=null,ze=0,n=Te)}if(n!==0){if(n===2&&(r=As(e),r!==0&&(a=r,n=ll(e,r))),n===1)throw t=_r,Ct(e,0),qn(e,a),qe(e,ke()),t;if(n===6)qn(e,a);else{if(r=e.current.alternate,!(a&30)&&!j0(r)&&(n=Wo(e,a),n===2&&(i=As(e),i!==0&&(a=i,n=ll(e,i))),n===1))throw t=_r,Ct(e,0),qn(e,a),qe(e,ke()),t;switch(e.finishedWork=r,e.finishedLanes=a,n){case 0:case 1:throw Error(U(345));case 2:_t(e,We,Vn);break;case 3:if(qn(e,a),(a&130023424)===a&&(n=sc+500-ke(),10<n)){if(To(e,0)!==0)break;if(r=e.suspendedLanes,(r&a)!==a){Ge(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Js(_t.bind(null,e,We,Vn),n);break}_t(e,We,Vn);break;case 4:if(qn(e,a),(a&4194240)===a)break;for(n=e.eventTimes,r=-1;0<a;){var s=31-jn(a);i=1<<s,s=n[s],s>r&&(r=s),a&=~i}if(a=r,a=ke()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*k0(a/1960))-a,10<a){e.timeoutHandle=Js(_t.bind(null,e,We,Vn),a);break}_t(e,We,Vn);break;case 5:_t(e,We,Vn);break;default:throw Error(U(329))}}}return qe(e,ke()),e.callbackNode===t?Im.bind(null,e):null}function ll(e,n){var t=nr;return e.current.memoizedState.isDehydrated&&(Ct(e,n).flags|=256),e=Wo(e,n),e!==2&&(n=We,We=t,n!==null&&cl(n)),e}function cl(e){We===null?We=e:We.push.apply(We,e)}function j0(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var a=0;a<t.length;a++){var r=t[a],i=r.getSnapshot;r=r.value;try{if(!Sn(i(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qn(e,n){for(n&=~ic,n&=~yi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-jn(n),a=1<<t;e[t]=-1,n&=~a}}function zd(e){if(oe&6)throw Error(U(327));fa();var n=To(e,0);if(!(n&1))return qe(e,ke()),null;var t=Wo(e,n);if(e.tag!==0&&t===2){var a=As(e);a!==0&&(n=a,t=ll(e,a))}if(t===1)throw t=_r,Ct(e,0),qn(e,n),qe(e,ke()),t;if(t===6)throw Error(U(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,_t(e,We,Vn),qe(e,ke()),null}function lc(e,n){var t=oe;oe|=1;try{return e(n)}finally{oe=t,oe===0&&(ka=ke()+500,hi&&vt())}}function zt(e){tt!==null&&tt.tag===0&&!(oe&6)&&fa();var n=oe;oe|=1;var t=mn.transition,a=ce;try{if(mn.transition=null,ce=1,e)return e()}finally{ce=a,mn.transition=t,oe=n,!(oe&6)&&vt()}}function cc(){nn=oa.current,me(oa)}function Ct(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,e0(t)),Se!==null)for(t=Se.return;t!==null;){var a=t;switch(Bl(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&zo();break;case 3:_a(),me(Xe),me(Je),Ql();break;case 5:Xl(a);break;case 4:_a();break;case 13:me(xe);break;case 19:me(xe);break;case 10:Ul(a.type._context);break;case 22:case 23:cc()}t=t.return}if(De=e,Se=e=dt(e.current,null),ze=nn=n,Te=0,_r=null,ic=yi=At=0,We=nr=null,jt!==null){for(n=0;n<jt.length;n++)if(t=jt[n],a=t.interleaved,a!==null){t.interleaved=null;var r=a.next,i=t.pending;if(i!==null){var s=i.next;i.next=r,a.next=s}t.pending=a}jt=null}return e}function km(e,n){do{var t=Se;try{if(Hl(),go.current=Fo,Bo){for(var a=ve.memoizedState;a!==null;){var r=a.queue;r!==null&&(r.pending=null),a=a.next}Bo=!1}if($t=0,Ee=Ne=ve=null,qa=!1,vr=0,oc.current=null,t===null||t.return===null){Te=1,_r=n,Se=null;break}e:{var i=e,s=t.return,l=t,d=n;if(n=ze,l.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var u=d,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var h=Id(s);if(h!==null){h.flags&=-257,kd(h,s,l,i,n),h.mode&1&&_d(i,u,n),n=h,d=u;var x=n.updateQueue;if(x===null){var p=new Set;p.add(d),n.updateQueue=p}else x.add(d);break e}else{if(!(n&1)){_d(i,u,n),dc();break e}d=Error(U(426))}}else if(ge&&l.mode&1){var _=Id(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),kd(_,s,l,i,n),Fl(Ia(d,l));break e}}i=d=Ia(d,l),Te!==4&&(Te=2),nr===null?nr=[i]:nr.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var b=im(i,d,n);gd(i,b);break e;case 1:l=d;var v=i.type,y=i.stateNode;if(!(i.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(lt===null||!lt.has(y)))){i.flags|=65536,n&=-n,i.lanes|=n;var I=sm(i,l,n);gd(i,I);break e}}i=i.return}while(i!==null)}Sm(t)}catch(N){n=N,Se===t&&t!==null&&(Se=t=t.return);continue}break}while(!0)}function jm(){var e=Go.current;return Go.current=Fo,e===null?Fo:e}function dc(){(Te===0||Te===3||Te===2)&&(Te=4),De===null||!(At&268435455)&&!(yi&268435455)||qn(De,ze)}function Wo(e,n){var t=oe;oe|=2;var a=jm();(De!==e||ze!==n)&&(Vn=null,Ct(e,n));do try{w0();break}catch(r){km(e,r)}while(!0);if(Hl(),oe=t,Go.current=a,Se!==null)throw Error(U(261));return De=null,ze=0,Te}function w0(){for(;Se!==null;)wm(Se)}function S0(){for(;Se!==null&&!Xf();)wm(Se)}function wm(e){var n=Nm(e.alternate,e,nn);e.memoizedProps=e.pendingProps,n===null?Sm(e):Se=n,oc.current=null}function Sm(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=b0(t,n),t!==null){t.flags&=32767,Se=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Te=6,Se=null;return}}else if(t=v0(t,n,nn),t!==null){Se=t;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=e}while(n!==null);Te===0&&(Te=5)}function _t(e,n,t){var a=ce,r=mn.transition;try{mn.transition=null,ce=1,C0(e,n,t,a)}finally{mn.transition=r,ce=a}return null}function C0(e,n,t,a){do fa();while(tt!==null);if(oe&6)throw Error(U(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(U(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(sg(e,i),e===De&&(Se=De=null,ze=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||qr||(qr=!0,Mm(Mo,function(){return fa(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=mn.transition,mn.transition=null;var s=ce;ce=1;var l=oe;oe|=4,oc.current=null,_0(e,t),ym(t,e),Ug(Os),Eo=!!Ls,Os=Ls=null,e.current=t,I0(t),Qf(),oe=l,ce=s,mn.transition=i}else e.current=t;if(qr&&(qr=!1,tt=e,Uo=r),i=e.pendingLanes,i===0&&(lt=null),ng(t.stateNode),qe(e,ke()),n!==null)for(a=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],a(r.value,{componentStack:r.stack,digest:r.digest});if(Ho)throw Ho=!1,e=il,il=null,e;return Uo&1&&e.tag!==0&&fa(),i=e.pendingLanes,i&1?e===sl?tr++:(tr=0,sl=e):tr=0,vt(),null}function fa(){if(tt!==null){var e=ip(Uo),n=mn.transition,t=ce;try{if(mn.transition=null,ce=16>e?16:e,tt===null)var a=!1;else{if(e=tt,tt=null,Uo=0,oe&6)throw Error(U(331));var r=oe;for(oe|=4,Y=e.current;Y!==null;){var i=Y,s=i.child;if(Y.flags&16){var l=i.deletions;if(l!==null){for(var d=0;d<l.length;d++){var u=l[d];for(Y=u;Y!==null;){var f=Y;switch(f.tag){case 0:case 11:case 15:er(8,f,i)}var m=f.child;if(m!==null)m.return=f,Y=m;else for(;Y!==null;){f=Y;var g=f.sibling,h=f.return;if(xm(f),f===u){Y=null;break}if(g!==null){g.return=h,Y=g;break}Y=h}}}var x=i.alternate;if(x!==null){var p=x.child;if(p!==null){x.child=null;do{var _=p.sibling;p.sibling=null,p=_}while(p!==null)}}Y=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,Y=s;else e:for(;Y!==null;){if(i=Y,i.flags&2048)switch(i.tag){case 0:case 11:case 15:er(9,i,i.return)}var b=i.sibling;if(b!==null){b.return=i.return,Y=b;break e}Y=i.return}}var v=e.current;for(Y=v;Y!==null;){s=Y;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,Y=y;else e:for(s=v;Y!==null;){if(l=Y,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:bi(9,l)}}catch(N){_e(l,l.return,N)}if(l===s){Y=null;break e}var I=l.sibling;if(I!==null){I.return=l.return,Y=I;break e}Y=l.return}}if(oe=r,vt(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(ui,e)}catch{}a=!0}return a}finally{ce=t,mn.transition=n}}return!1}function Vd(e,n,t){n=Ia(t,n),n=im(e,n,1),e=st(e,n,1),n=Ge(),e!==null&&(Nr(e,1,n),qe(e,n))}function _e(e,n,t){if(e.tag===3)Vd(e,e,t);else for(;n!==null;){if(n.tag===3){Vd(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(lt===null||!lt.has(a))){e=Ia(t,e),e=sm(n,e,1),n=st(n,e,1),e=Ge(),n!==null&&(Nr(n,1,e),qe(n,e));break}}n=n.return}}function N0(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),n=Ge(),e.pingedLanes|=e.suspendedLanes&t,De===e&&(ze&t)===t&&(Te===4||Te===3&&(ze&130023424)===ze&&500>ke()-sc?Ct(e,0):ic|=t),qe(e,n)}function Cm(e,n){n===0&&(e.mode&1?(n=Br,Br<<=1,!(Br&130023424)&&(Br=4194304)):n=1);var t=Ge();e=Gn(e,n),e!==null&&(Nr(e,n,t),qe(e,t))}function M0(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Cm(e,t)}function T0(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(U(314))}a!==null&&a.delete(n),Cm(e,t)}var Nm;Nm=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Xe.current)Ze=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ze=!1,x0(e,n,t);Ze=!!(e.flags&131072)}else Ze=!1,ge&&n.flags&1048576&&Dp(n,Ro,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;xo(e,n),e=n.pendingProps;var r=va(n,Je.current);ma(n,t),r=ec(null,n,a,e,r,t);var i=nc();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Qe(a)?(i=!0,Vo(n)):i=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Zl(n),r.updater=vi,n.stateNode=r,r._reactInternals=n,Zs(n,a,e,t),n=Qs(null,n,a,!0,i,t)):(n.tag=0,ge&&i&&Jl(n),Fe(null,n,r,t),n=n.child),n;case 16:a=n.elementType;e:{switch(xo(e,n),e=n.pendingProps,r=a._init,a=r(a._payload),n.type=a,r=n.tag=D0(a),e=_n(a,e),r){case 0:n=Xs(null,n,a,e,t);break e;case 1:n=Sd(null,n,a,e,t);break e;case 11:n=jd(null,n,a,e,t);break e;case 14:n=wd(null,n,a,_n(a.type,e),t);break e}throw Error(U(306,a,""))}return n;case 0:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:_n(a,r),Xs(e,n,a,r,t);case 1:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:_n(a,r),Sd(e,n,a,r,t);case 3:e:{if(um(n),e===null)throw Error(U(387));a=n.pendingProps,i=n.memoizedState,r=i.element,Rp(e,n),Ko(n,a,null,t);var s=n.memoizedState;if(a=s.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){r=Ia(Error(U(423)),n),n=Cd(e,n,a,t,r);break e}else if(a!==r){r=Ia(Error(U(424)),n),n=Cd(e,n,a,t,r);break e}else for(an=it(n.stateNode.containerInfo.firstChild),rn=n,ge=!0,kn=null,t=Vp(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ba(),a===r){n=Hn(e,n,t);break e}Fe(e,n,a,t)}n=n.child}return n;case 5:return Lp(n),e===null&&Hs(n),a=n.type,r=n.pendingProps,i=e!==null?e.memoizedProps:null,s=r.children,Ks(a,r)?s=null:i!==null&&Ks(a,i)&&(n.flags|=32),dm(e,n),Fe(e,n,s,t),n.child;case 6:return e===null&&Hs(n),null;case 13:return pm(e,n,t);case 4:return Yl(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=ya(n,null,a,t):Fe(e,n,a,t),n.child;case 11:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:_n(a,r),jd(e,n,a,r,t);case 7:return Fe(e,n,n.pendingProps,t),n.child;case 8:return Fe(e,n,n.pendingProps.children,t),n.child;case 12:return Fe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(a=n.type._context,r=n.pendingProps,i=n.memoizedProps,s=r.value,ue(Lo,a._currentValue),a._currentValue=s,i!==null)if(Sn(i.value,s)){if(i.children===r.children&&!Xe.current){n=Hn(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var l=i.dependencies;if(l!==null){s=i.child;for(var d=l.firstContext;d!==null;){if(d.context===a){if(i.tag===1){d=Kn(-1,t&-t),d.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?d.next=d:(d.next=f.next,f.next=d),u.pending=d}}i.lanes|=t,d=i.alternate,d!==null&&(d.lanes|=t),Us(i.return,t,n),l.lanes|=t;break}d=d.next}}else if(i.tag===10)s=i.type===n.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(U(341));s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Us(s,t,n),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===n){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Fe(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,a=n.pendingProps.children,ma(n,t),r=xn(r),a=a(r),n.flags|=1,Fe(e,n,a,t),n.child;case 14:return a=n.type,r=_n(a,n.pendingProps),r=_n(a.type,r),wd(e,n,a,r,t);case 15:return lm(e,n,n.type,n.pendingProps,t);case 17:return a=n.type,r=n.pendingProps,r=n.elementType===a?r:_n(a,r),xo(e,n),n.tag=1,Qe(a)?(e=!0,Vo(n)):e=!1,ma(n,t),om(n,a,r),Zs(n,a,r,t),Qs(null,n,a,!0,e,t);case 19:return mm(e,n,t);case 22:return cm(e,n,t)}throw Error(U(156,n.tag))};function Mm(e,n){return tp(e,n)}function E0(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(e,n,t,a){return new E0(e,n,t,a)}function uc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function D0(e){if(typeof e=="function")return uc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Tl)return 11;if(e===El)return 14}return 2}function dt(e,n){var t=e.alternate;return t===null?(t=pn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function yo(e,n,t,a,r,i){var s=2;if(a=e,typeof e=="function")uc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Zt:return Nt(t.children,r,i,n);case Ml:s=8,r|=8;break;case bs:return e=pn(12,t,n,r|2),e.elementType=bs,e.lanes=i,e;case ys:return e=pn(13,t,n,r),e.elementType=ys,e.lanes=i,e;case _s:return e=pn(19,t,n,r),e.elementType=_s,e.lanes=i,e;case Lu:return _i(t,r,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pu:s=10;break e;case Ru:s=9;break e;case Tl:s=11;break e;case El:s=14;break e;case Yn:s=16,a=null;break e}throw Error(U(130,e==null?e:typeof e,""))}return n=pn(s,t,n,r),n.elementType=e,n.type=a,n.lanes=i,n}function Nt(e,n,t,a){return e=pn(7,e,a,n),e.lanes=t,e}function _i(e,n,t,a){return e=pn(22,e,a,n),e.elementType=Lu,e.lanes=t,e.stateNode={isHidden:!1},e}function cs(e,n,t){return e=pn(6,e,null,n),e.lanes=t,e}function ds(e,n,t){return n=pn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function $0(e,n,t,a,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fi(0),this.expirationTimes=Fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.identifierPrefix=a,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function pc(e,n,t,a,r,i,s,l,d){return e=new $0(e,n,t,l,d),n===1?(n=1,i===!0&&(n|=8)):n=0,i=pn(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:a,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zl(i),e}function A0(e,n,t){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wt,key:a==null?null:""+a,children:e,containerInfo:n,implementation:t}}function Tm(e){if(!e)return mt;e=e._reactInternals;e:{if(Rt(e)!==e||e.tag!==1)throw Error(U(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Qe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(U(171))}if(e.tag===1){var t=e.type;if(Qe(t))return Tp(e,t,n)}return n}function Em(e,n,t,a,r,i,s,l,d){return e=pc(t,a,!0,e,r,i,s,l,d),e.context=Tm(null),t=e.current,a=Ge(),r=ct(t),i=Kn(a,r),i.callback=n??null,st(t,i,r),e.current.lanes=r,Nr(e,r,a),qe(e,a),e}function Ii(e,n,t,a){var r=n.current,i=Ge(),s=ct(r);return t=Tm(t),n.context===null?n.context=t:n.pendingContext=t,n=Kn(i,s),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=st(r,n,s),e!==null&&(wn(e,r,s,i),fo(e,r,s)),s}function Zo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Pd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function mc(e,n){Pd(e,n),(e=e.alternate)&&Pd(e,n)}function z0(){return null}var Dm=typeof reportError=="function"?reportError:function(e){console.error(e)};function fc(e){this._internalRoot=e}ki.prototype.render=fc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(U(409));Ii(e,n,null,null)};ki.prototype.unmount=fc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;zt(function(){Ii(null,e,null,null)}),n[Fn]=null}};function ki(e){this._internalRoot=e}ki.prototype.unstable_scheduleHydration=function(e){if(e){var n=cp();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Qn.length&&n!==0&&n<Qn[t].priority;t++);Qn.splice(t,0,e),t===0&&up(e)}};function gc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ji(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Rd(){}function V0(e,n,t,a,r){if(r){if(typeof a=="function"){var i=a;a=function(){var u=Zo(s);i.call(u)}}var s=Em(n,a,e,0,null,!1,!1,"",Rd);return e._reactRootContainer=s,e[Fn]=s.current,mr(e.nodeType===8?e.parentNode:e),zt(),s}for(;r=e.lastChild;)e.removeChild(r);if(typeof a=="function"){var l=a;a=function(){var u=Zo(d);l.call(u)}}var d=pc(e,0,!1,null,null,!1,!1,"",Rd);return e._reactRootContainer=d,e[Fn]=d.current,mr(e.nodeType===8?e.parentNode:e),zt(function(){Ii(n,d,t,a)}),d}function wi(e,n,t,a,r){var i=t._reactRootContainer;if(i){var s=i;if(typeof r=="function"){var l=r;r=function(){var d=Zo(s);l.call(d)}}Ii(n,s,e,r)}else s=V0(t,n,e,r,a);return Zo(s)}sp=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ha(n.pendingLanes);t!==0&&(Al(n,t|1),qe(n,ke()),!(oe&6)&&(ka=ke()+500,vt()))}break;case 13:zt(function(){var a=Gn(e,1);if(a!==null){var r=Ge();wn(a,e,1,r)}}),mc(e,1)}};zl=function(e){if(e.tag===13){var n=Gn(e,134217728);if(n!==null){var t=Ge();wn(n,e,134217728,t)}mc(e,134217728)}};lp=function(e){if(e.tag===13){var n=ct(e),t=Gn(e,n);if(t!==null){var a=Ge();wn(t,e,n,a)}mc(e,n)}};cp=function(){return ce};dp=function(e,n){var t=ce;try{return ce=e,n()}finally{ce=t}};Es=function(e,n,t){switch(n){case"input":if(js(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var r=gi(a);if(!r)throw Error(U(90));Ku(a),js(a,r)}}}break;case"textarea":Bu(e,t);break;case"select":n=t.value,n!=null&&ca(e,!!t.multiple,n,!1)}};Yu=lc;Xu=zt;var P0={usingClientEntryPoint:!1,Events:[Tr,qt,gi,Wu,Zu,lc]},La={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},R0={bundleType:La.bundleType,version:La.version,rendererPackageName:La.rendererPackageName,rendererConfig:La.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Un.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ep(e),e===null?null:e.stateNode},findFiberByHostInstance:La.findFiberByHostInstance||z0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eo.isDisabled&&eo.supportsFiber)try{ui=eo.inject(R0),En=eo}catch{}}sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P0;sn.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gc(n))throw Error(U(200));return A0(e,n,null,t)};sn.createRoot=function(e,n){if(!gc(e))throw Error(U(299));var t=!1,a="",r=Dm;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=pc(e,1,!1,null,null,t,!1,a,r),e[Fn]=n.current,mr(e.nodeType===8?e.parentNode:e),new fc(n)};sn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(U(188)):(e=Object.keys(e).join(","),Error(U(268,e)));return e=ep(n),e=e===null?null:e.stateNode,e};sn.flushSync=function(e){return zt(e)};sn.hydrate=function(e,n,t){if(!ji(n))throw Error(U(200));return wi(null,e,n,!0,t)};sn.hydrateRoot=function(e,n,t){if(!gc(e))throw Error(U(405));var a=t!=null&&t.hydratedSources||null,r=!1,i="",s=Dm;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=Em(n,null,e,1,t??null,r,!1,i,s),e[Fn]=n.current,mr(e),a)for(e=0;e<a.length;e++)t=a[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new ki(n)};sn.render=function(e,n,t){if(!ji(n))throw Error(U(200));return wi(null,e,n,!1,t)};sn.unmountComponentAtNode=function(e){if(!ji(e))throw Error(U(40));return e._reactRootContainer?(zt(function(){wi(null,null,e,!1,function(){e._reactRootContainer=null,e[Fn]=null})}),!0):!1};sn.unstable_batchedUpdates=lc;sn.unstable_renderSubtreeIntoContainer=function(e,n,t,a){if(!ji(t))throw Error(U(200));if(e==null||e._reactInternals===void 0)throw Error(U(38));return wi(e,n,t,!1,a)};sn.version="18.3.1-next-f1338f8080-20240426";function $m(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($m)}catch(e){console.error(e)}}$m(),$u.exports=sn;var Dr=$u.exports,Ld=Dr;xs.createRoot=Ld.createRoot,xs.hydrateRoot=Ld.hydrateRoot;const ga=["player1","player2","player3","player4","player5","player6","player7","player8"];function L0(e,n){return e.players[n]}function O0(e,n,t){return{...e,players:{...e.players,[n]:t}}}function Am(e,n){const t=e.teams[n];return e.playerIds.filter(a=>a!==n&&e.teams[a]!==t&&!e.players[a].isDefeated)}function Me(e){return`P${e.replace("player","")}`}const K0=[{id:"ag-1",unitDeckId:"AG",nameJa:"ランス",nameCn:"长枪",actionType:"melee",frontImageId:"cards/ag/ag-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"ag-2",unitDeckId:"AG",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ag/ag-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ag-3",unitDeckId:"AG",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ag/ag-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ag-4",unitDeckId:"AG",nameJa:"スモールレーザー",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/ag/ag-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2,isEnergyWeapon:!0},{id:"ag-5",unitDeckId:"AG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ag/ag-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"ag-6",unitDeckId:"AG",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ag/ag-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-7",unitDeckId:"AG",nameJa:"ランス",nameCn:"长枪",actionType:"melee",frontImageId:"cards/ag/ag-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"ag-8",unitDeckId:"AG",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ag/ag-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-9",unitDeckId:"AG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/ag/ag-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"ag-10",unitDeckId:"AG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ag-11",unitDeckId:"AG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/ag/ag-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"ag-12",unitDeckId:"AG",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ag/ag-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"ag-13",unitDeckId:"AG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ag-14",unitDeckId:"AG",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ag/ag-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-15",unitDeckId:"AG",nameJa:"バーニア",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/ag/ag-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ag-16",unitDeckId:"AG",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/ag/ag-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ag-17",unitDeckId:"AG",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/ag/ag-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ag-18",unitDeckId:"AG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ag-19",unitDeckId:"AG",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ag/ag-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-20",unitDeckId:"AG",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ag/ag-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-21",unitDeckId:"AG",nameJa:"バーニア",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/ag/ag-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"}],J0=[{id:"ar-1",unitDeckId:"AR",nameJa:"シールド",nameCn:"护盾",actionType:"armor",frontImageId:"cards/ar/ar-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止4点射击伤害。该卡在准备区时，可以将其破坏并防止4点任意伤害。",armorValue:4},{id:"ar-2",unitDeckId:"AR",nameJa:"アンカー",nameCn:"长锚",actionType:"ranged",frontImageId:"cards/ar/ar-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:1,rangeMax:3,damage:void 0,effectText:"射击前可以改变机甲的朝向。命中后，使攻击目标强制移动到自机面前，期间目标朝向不变。"},{id:"ar-3",unitDeckId:"AR",nameJa:"陸上機雷",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/ar/ar-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"在自机周围8格不重叠地设置机雷指示物和替身雷各2个。在各个时机结束时，检查是否有机甲位于指示物所在格。若有，将指示物翻开展示，如果是机雷的话对所在格中的机甲造成伤害，然后将指示物弃掉。"},{id:"ar-4",unitDeckId:"AR",nameJa:"陸上機雷",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/ar/ar-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"在自机周围8格不重叠地设置机雷指示物和替身雷各2个。在各个时机结束时，检查是否有机甲位于指示物所在格。若有，将指示物翻开展示，如果是机雷的话对所在格中的机甲造成伤害，然后将指示物弃掉。"},{id:"ar-5",unitDeckId:"AR",nameJa:"メイス",nameCn:"狼牙棒",actionType:"melee",frontImageId:"cards/ar/ar-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ar-6",unitDeckId:"AR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ar/ar-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ar-7",unitDeckId:"AR",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ar-8",unitDeckId:"AR",nameJa:"移動６",nameCn:"移动6",actionType:"movement",frontImageId:"cards/ar/ar-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:6,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-9",unitDeckId:"AR",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ar/ar-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"ar-10",unitDeckId:"AR",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/ar/ar-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ar-11",unitDeckId:"AR",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ar-12",unitDeckId:"AR",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/ar/ar-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ar-13",unitDeckId:"AR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ar/ar-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ar-14",unitDeckId:"AR",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ar-15",unitDeckId:"AR",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ar/ar-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-16",unitDeckId:"AR",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ar/ar-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-17",unitDeckId:"AR",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ar/ar-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-18",unitDeckId:"AR",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ar/ar-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-19",unitDeckId:"AR",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ar/ar-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-20",unitDeckId:"AR",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ar/ar-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"}],B0=[{id:"bg-1",unitDeckId:"BG",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4,hasBombIcon:!0},{id:"bg-2",unitDeckId:"BG",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4,hasBombIcon:!0},{id:"bg-3",unitDeckId:"BG",nameJa:"ミドルレーザ",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/bg/bg-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3},{id:"bg-4",unitDeckId:"BG",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4,hasBombIcon:!0},{id:"bg-5",unitDeckId:"BG",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/bg/bg-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"bg-6",unitDeckId:"BG",nameJa:"スモールレーザ",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/bg/bg-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2},{id:"bg-7",unitDeckId:"BG",nameJa:"スナイパーライフル",nameCn:"狙击步枪",actionType:"ranged",frontImageId:"cards/bg/bg-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3,hasBombIcon:!0},{id:"bg-8",unitDeckId:"BG",nameJa:"スナイパーライフル",nameCn:"狙击步枪",actionType:"ranged",frontImageId:"cards/bg/bg-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3,hasBombIcon:!0},{id:"bg-9",unitDeckId:"BG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/bg/bg-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"bg-10",unitDeckId:"BG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/bg/bg-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"bg-11",unitDeckId:"BG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/bg/bg-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"bg-12",unitDeckId:"BG",nameJa:"スモールレーザ",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/bg/bg-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2},{id:"bg-13",unitDeckId:"BG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/bg/bg-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"bg-14",unitDeckId:"BG",nameJa:"ミドルレーザ",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/bg/bg-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3},{id:"bg-15",unitDeckId:"BG",nameJa:"スナイパーライフル",nameCn:"狙击步枪",actionType:"ranged",frontImageId:"cards/bg/bg-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3,hasBombIcon:!0},{id:"bg-16",unitDeckId:"BG",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/bg/bg-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"bg-17",unitDeckId:"BG",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/bg/bg-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"bg-18",unitDeckId:"BG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/bg/bg-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"bg-19",unitDeckId:"BG",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/bg/bg-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg-20",unitDeckId:"BG",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/bg/bg-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg-21",unitDeckId:"BG",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/bg/bg-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg-22",unitDeckId:"BG",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/bg/bg-22-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"bg-23",unitDeckId:"BG",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/bg/bg-23-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"}],F0=[{id:"ho-1",unitDeckId:"HO",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ho/ho-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-2",unitDeckId:"HO",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ho/ho-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-3",unitDeckId:"HO",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ho/ho-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-4",unitDeckId:"HO",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ho/ho-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-5",unitDeckId:"HO",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ho/ho-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"ho-6",unitDeckId:"HO",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ho/ho-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"ho-7",unitDeckId:"HO",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ho/ho-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ho-8",unitDeckId:"HO",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ho/ho-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-9",unitDeckId:"HO",nameJa:"移動６",nameCn:"移动6",actionType:"movement",frontImageId:"cards/ho/ho-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:6,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-10",unitDeckId:"HO",nameJa:"移動７",nameCn:"移动7",actionType:"movement",frontImageId:"cards/ho/ho-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:7,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-11",unitDeckId:"HO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ho/ho-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ho-12",unitDeckId:"HO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ho/ho-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ho-13",unitDeckId:"HO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/ho/ho-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"ho-14",unitDeckId:"HO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/ho/ho-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"ho-15",unitDeckId:"HO",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ho/ho-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ho-16",unitDeckId:"HO",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/ho/ho-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"ho-17",unitDeckId:"HO",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/ho/ho-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"}],G0=[{id:"hy-1",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-2",unitDeckId:"HY",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-3",unitDeckId:"HY",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-4",unitDeckId:"HY",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-5",unitDeckId:"HY",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-6",unitDeckId:"HY",nameJa:"ガトリングガン",nameCn:"加特林",actionType:"ranged",frontImageId:"cards/hy/hy-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:5,damage:3,hasBombIcon:!0},{id:"hy-7",unitDeckId:"HY",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-8",unitDeckId:"HY",nameJa:"ガトリングガン",nameCn:"加特林",actionType:"ranged",frontImageId:"cards/hy/hy-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:5,damage:3,hasBombIcon:!0},{id:"hy-9",unitDeckId:"HY",nameJa:"バーニア",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/hy/hy-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"hy-10",unitDeckId:"HY",nameJa:"バーニア",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/hy/hy-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"hy-11",unitDeckId:"HY",nameJa:"スパイク",nameCn:"长钉",actionType:"charge",frontImageId:"cards/hy/hy-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"不进行突击移动，选择自机正面的机甲为攻击目标。对对方造成自机突击伤害+1的近战伤害。对自机造成对方被突击伤害-1的近战伤害。"},{id:"hy-12",unitDeckId:"HY",nameJa:"シールド",nameCn:"护盾",actionType:"armor",frontImageId:"cards/hy/hy-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止4点射击伤害。该卡在准备区时，可以将其破坏并防止4点任意伤害。",armorValue:4},{id:"hy-13",unitDeckId:"HY",nameJa:"シールド",nameCn:"护盾",actionType:"armor",frontImageId:"cards/hy/hy-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止4点射击伤害。该卡在准备区时，可以将其破坏并防止4点任意伤害。",armorValue:4},{id:"hy-14",unitDeckId:"HY",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/hy/hy-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"hy-15",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-16",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-17",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-18",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-19",unitDeckId:"HY",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/hy/hy-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"hy-20",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-21",unitDeckId:"HY",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/hy/hy-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"hy-22",unitDeckId:"HY",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/hy/hy-22-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"hy-23",unitDeckId:"HY",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/hy/hy-23-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"hy-24",unitDeckId:"HY",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-24-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0}],H0=[{id:"lg-1",unitDeckId:"LG",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/lg/lg-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-2",unitDeckId:"LG",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/lg/lg-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-3",unitDeckId:"LG",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/lg/lg-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-4",unitDeckId:"LG",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/lg/lg-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-5",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-6",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-7",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-8",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-9",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-10",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-11",unitDeckId:"LG",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/lg/lg-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"lg-12",unitDeckId:"LG",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/lg/lg-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"lg-13",unitDeckId:"LG",nameJa:"スパイク",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/lg/lg-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"lg-14",unitDeckId:"LG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/lg/lg-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"lg-15",unitDeckId:"LG",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/lg/lg-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"lg-16",unitDeckId:"LG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/lg/lg-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"lg-17",unitDeckId:"LG",nameJa:"パイルバンカー",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/lg/lg-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"lg-18",unitDeckId:"LG",nameJa:"パイルバンカー",nameCn:"长钉",actionType:"charge",frontImageId:"cards/lg/lg-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"不进行突击移动，选择自机正面的机甲为攻击目标。对对方造成自机突击伤害+1的近战伤害。对自机造成对方被突击伤害-1的近战伤害。"},{id:"lg-19",unitDeckId:"LG",nameJa:"クロー",nameCn:"爪",actionType:"melee",frontImageId:"cards/lg/lg-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:2,effectText:"（结算伤害前）如果攻击目标的手牌、辅助区、准备区中有类别包括“装甲”的卡牌，选择其中两张破坏。"},{id:"lg-20",unitDeckId:"LG",nameJa:"クロー",nameCn:"爪",actionType:"melee",frontImageId:"cards/lg/lg-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:2,effectText:"（结算伤害前）如果攻击目标的手牌、辅助区、准备区中有类别包括“装甲”的卡牌，选择其中两张破坏。"},{id:"lg-21",unitDeckId:"LG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/lg/lg-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"lg-22",unitDeckId:"LG",nameJa:"ホイール",nameCn:"滑轮",actionType:"auxiliary",frontImageId:"cards/lg/lg-22-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:○、近战:×。使用后移动力+2。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"lg-23",unitDeckId:"LG",nameJa:"ホイール",nameCn:"滑轮",actionType:"auxiliary",frontImageId:"cards/lg/lg-23-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:○、近战:×。使用后移动力+2。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"}],U0=[{id:"lo-1",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-2",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-3",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-4",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-5",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-6",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-7",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-8",unitDeckId:"LO",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/lo/lo-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"lo-9",unitDeckId:"LO",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/lo/lo-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"lo-10",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-11",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-12",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-13",unitDeckId:"LO",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/lo/lo-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-14",unitDeckId:"LO",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/lo/lo-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-15",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-16",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-17",unitDeckId:"LO",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/lo/lo-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-18",unitDeckId:"LO",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/lo/lo-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-19",unitDeckId:"LO",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/lo/lo-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-20",unitDeckId:"LO",nameJa:"スモールレーザー",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/lo/lo-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2,isEnergyWeapon:!0}],W0=[{id:"tr-1",unitDeckId:"TR",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/tr/tr-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-2",unitDeckId:"TR",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/tr/tr-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-3",unitDeckId:"TR",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/tr/tr-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-4",unitDeckId:"TR",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/tr/tr-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-5",unitDeckId:"TR",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/tr/tr-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-6",unitDeckId:"TR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/tr/tr-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"tr-7",unitDeckId:"TR",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/tr/tr-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"tr-8",unitDeckId:"TR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/tr/tr-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"tr-9",unitDeckId:"TR",nameJa:"移動６",nameCn:"移动6",actionType:"movement",frontImageId:"cards/tr/tr-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:6,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-10",unitDeckId:"TR",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/tr/tr-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"tr-11",unitDeckId:"TR",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/tr/tr-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"tr-12",unitDeckId:"TR",nameJa:"アクス",nameCn:"斧头",actionType:"melee",frontImageId:"cards/tr/tr-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"tr-13",unitDeckId:"TR",nameJa:"アクス",nameCn:"斧头",actionType:"melee",frontImageId:"cards/tr/tr-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"tr-14",unitDeckId:"TR",nameJa:"パイルバンカー",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/tr/tr-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"tr-15",unitDeckId:"TR",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/tr/tr-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"tr-16",unitDeckId:"TR",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/tr/tr-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"tr-17",unitDeckId:"TR",nameJa:"パイルバンカー",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/tr/tr-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"tr-18",unitDeckId:"TR",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/tr/tr-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"tr-19",unitDeckId:"TR",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/tr/tr-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0}],Z0=[{id:"zb-1",unitDeckId:"ZB",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ag/ag-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-2",unitDeckId:"ZB",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ag/ag-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-3",unitDeckId:"ZB",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ag/ag-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-4",unitDeckId:"ZB",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ag/ag-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-5",unitDeckId:"ZB",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ag/ag-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-6",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-7",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-8",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-9",unitDeckId:"ZB",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ag/ag-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-10",unitDeckId:"ZB",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ag/ag-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-11",unitDeckId:"ZB",nameJa:"ムーブセンサー",nameCn:"移动感应器",actionType:"auxiliary",frontImageId:"cards/ho/ho-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-12",unitDeckId:"ZB",nameJa:"ムーブセンサー",nameCn:"移动感应器",actionType:"auxiliary",frontImageId:"cards/ho/ho-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-13",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-14",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-15",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-16",unitDeckId:"ZB",nameJa:"ラージレーザー",nameCn:"大口径激光",actionType:"ranged",frontImageId:"cards/bg/bg-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"zb-17",unitDeckId:"ZB",nameJa:"ブレード",nameCn:"剑",actionType:"melee",frontImageId:"cards/zb/zb-17-front.png",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"zb-18",unitDeckId:"ZB",nameJa:"バルカン",nameCn:"火神炮",actionType:"ranged",frontImageId:"cards/zb/zb-18-front.png",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:2,damage:2},{id:"zb-19",unitDeckId:"ZB",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ag/ag-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-20",unitDeckId:"ZB",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ag/ag-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-21",unitDeckId:"ZB",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4},{id:"zb-22",unitDeckId:"ZB",nameJa:"ラージレーザー",nameCn:"大口径激光",actionType:"ranged",frontImageId:"cards/bg/bg-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"zb-23",unitDeckId:"ZB",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4}],Y0=[{id:"ag_plus-1",unitDeckId:"AG+",nameJa:"コルセスカ",nameCn:"长柄三叉矛",actionType:"melee",frontImageId:"cards/ag_plus/ag_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ag_plus-2",unitDeckId:"AG+",nameJa:"コルセスカ",nameCn:"长柄三叉矛",actionType:"melee",frontImageId:"cards/ag_plus/ag_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ag_plus-3",unitDeckId:"AG+",nameJa:"ネット",nameCn:"网",actionType:"ranged",frontImageId:"cards/ag_plus/ag_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:5,damage:void 0},{id:"ag_plus-4",unitDeckId:"AG+",nameJa:"ボーラ",nameCn:"投石索",actionType:"ranged",frontImageId:"cards/ag_plus/ag_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:4,damage:void 0},{id:"ag_plus-5",unitDeckId:"AG+",nameJa:"バルカン",nameCn:"火神炮",actionType:"ranged",frontImageId:"cards/ag_plus/ag_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:2,damage:2}],X0=[{id:"ar_plus-1",unitDeckId:"AR+",nameJa:"ウォーハンマー",nameCn:"战锤",actionType:"melee",frontImageId:"cards/ar_plus/ar_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"ar_plus-2",unitDeckId:"AR+",nameJa:"強化機雷",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/ar_plus/ar_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,hasBombIcon:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"ar_plus-3",unitDeckId:"AR+",nameJa:"ロングアンカー",nameCn:"长锚",actionType:"ranged",frontImageId:"cards/ar_plus/ar_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:4,damage:1},{id:"ar_plus-4",unitDeckId:"AR+",nameJa:"強化機雷",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/ar_plus/ar_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,hasBombIcon:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5}],Q0=[{id:"bg_plus-1",unitDeckId:"BG+",nameJa:"自爆装置",nameCn:"自爆装置",actionType:"mine",frontImageId:"cards/bg_plus/bg_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,hasBombIcon:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg_plus-2",unitDeckId:"BG+",nameJa:"大口径ロケット砲",nameCn:"大口径火箭炮",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:5},{id:"bg_plus-3",unitDeckId:"BG+",nameJa:"大口径ロケット砲",nameCn:"大口径火箭炮",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:5},{id:"bg_plus-4",unitDeckId:"BG+",nameJa:"高品質ライフル",nameCn:"高品质步枪",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3},{id:"bg_plus-5",unitDeckId:"BG+",nameJa:"スモークミサイル",nameCn:"烟雾导弹",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:5,damage:void 0}],q0=[{id:"ho_plus-1",unitDeckId:"HO+",nameJa:"スタンウィップ",nameCn:"电击鞭",actionType:"melee",frontImageId:"cards/ho_plus/ho_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:1},{id:"ho_plus-2",unitDeckId:"HO+",nameJa:"チェーンブレード",nameCn:"链锯剑",actionType:"melee",frontImageId:"cards/ho_plus/ho_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ho_plus-3",unitDeckId:"HO+",nameJa:"高品質ロケット砲",nameCn:"高品质火箭炮",actionType:"ranged",frontImageId:"cards/ho_plus/ho_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4},{id:"ho_plus-4",unitDeckId:"HO+",nameJa:"火炎放射器",nameCn:"火焰喷射器",actionType:"ranged",frontImageId:"cards/ho_plus/ho_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2}],eh=[{id:"hy_plus-1",unitDeckId:"HY+",nameJa:"ショットガン",nameCn:"散弹枪",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:3,damage:4},{id:"hy_plus-2",unitDeckId:"HY+",nameJa:"ショットガン",nameCn:"散弹枪",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:3,damage:4},{id:"hy_plus-3",unitDeckId:"HY+",nameJa:"ガトリングカノン",nameCn:"加特林炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:4},{id:"hy_plus-4",unitDeckId:"HY+",nameJa:"ガトリングカノン",nameCn:"加特林炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:4},{id:"hy_plus-5",unitDeckId:"HY+",nameJa:"ガトリングカノン",nameCn:"加特林炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:4},{id:"hy_plus-6",unitDeckId:"HY+",nameJa:"ミサイルシールド",nameCn:"导弹盾",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3},{id:"hy_plus-7",unitDeckId:"HY+",nameJa:"高品質ロケット砲",nameCn:"高品质火箭炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4},{id:"hy_plus-8",unitDeckId:"HY+",nameJa:"ミサイルシールド",nameCn:"导弹盾",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3}],nh=[{id:"lg_plus-1",unitDeckId:"LG+",nameJa:"ヒートクロー",nameCn:"热力爪",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-2",unitDeckId:"LG+",nameJa:"グレネードランチャー",nameCn:"榴弹发射器",actionType:"ranged",frontImageId:"cards/lg_plus/lg_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:5,damage:3},{id:"lg_plus-3",unitDeckId:"LG+",nameJa:"グレネードランチャー",nameCn:"榴弹发射器",actionType:"ranged",frontImageId:"cards/lg_plus/lg_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:5,damage:3},{id:"lg_plus-4",unitDeckId:"LG+",nameJa:"キャタピラ",nameCn:"履带",actionType:"auxiliary",frontImageId:"cards/lg_plus/lg_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-5",unitDeckId:"LG+",nameJa:"リボルバンカー",nameCn:"左轮打桩机",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6},{id:"lg_plus-6",unitDeckId:"LG+",nameJa:"キャタピラ",nameCn:"履带",actionType:"auxiliary",frontImageId:"cards/lg_plus/lg_plus-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-7",unitDeckId:"LG+",nameJa:"ヒートクロー",nameCn:"热力爪",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-8",unitDeckId:"LG+",nameJa:"リボルバンカー",nameCn:"左轮打桩机",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6}],th=[{id:"lo_plus-1",unitDeckId:"LO+",nameJa:"防水膜",nameCn:"防水膜",actionType:"auxiliary",frontImageId:"cards/lo_plus/lo_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo_plus-2",unitDeckId:"LO+",nameJa:"追加装甲",nameCn:"附加装甲",actionType:"armor",frontImageId:"cards/lo_plus/lo_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"lo_plus-3",unitDeckId:"LO+",nameJa:"パルスレーザー",nameCn:"脉冲激光",actionType:"ranged",frontImageId:"cards/lo_plus/lo_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:2,isEnergyWeapon:!0},{id:"lo_plus-4",unitDeckId:"LO+",nameJa:"サウンドストーム",nameCn:"声波风暴",actionType:"melee",frontImageId:"cards/lo_plus/lo_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0}],ah=[{id:"tr_plus-1",unitDeckId:"TR+",nameJa:"サウンドウェーブ",nameCn:"声波",actionType:"melee",frontImageId:"cards/tr_plus/tr_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr_plus-2",unitDeckId:"TR+",nameJa:"バルディッシュ",nameCn:"长柄斧",actionType:"melee",frontImageId:"cards/tr_plus/tr_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"tr_plus-3",unitDeckId:"TR+",nameJa:"バルディッシュ",nameCn:"长柄斧",actionType:"melee",frontImageId:"cards/tr_plus/tr_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"tr_plus-4",unitDeckId:"TR+",nameJa:"高圧縮レーザー",nameCn:"高压缩激光",actionType:"ranged",frontImageId:"cards/tr_plus/tr_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:4,isEnergyWeapon:!0},{id:"tr_plus-5",unitDeckId:"TR+",nameJa:"高圧縮レーザー",nameCn:"高压缩激光",actionType:"ranged",frontImageId:"cards/tr_plus/tr_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:4,isEnergyWeapon:!0}],rh=[{id:"zb_plus-1",unitDeckId:"ZB+",nameJa:"広射程ミサイル",nameCn:"广射程导弹",actionType:"ranged",frontImageId:"cards/zb_plus/zb_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:3},{id:"zb_plus-2",unitDeckId:"ZB+",nameJa:"ホバー",nameCn:"悬浮器",actionType:"auxiliary",frontImageId:"cards/zb_plus/zb_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb_plus-3",unitDeckId:"ZB+",nameJa:"ホバー",nameCn:"悬浮器",actionType:"auxiliary",frontImageId:"cards/zb_plus/zb_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb_plus-4",unitDeckId:"ZB+",nameJa:"チェーンブレード",nameCn:"链锯剑",actionType:"melee",frontImageId:"cards/zb_plus/zb_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"zb_plus-5",unitDeckId:"ZB+",nameJa:"ジャイアントシザース",nameCn:"巨型剪刀",actionType:"melee",frontImageId:"cards/zb_plus/zb_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:10},{id:"zb_plus-6",unitDeckId:"ZB+",nameJa:"広射程ミサイル",nameCn:"广射程导弹",actionType:"ranged",frontImageId:"cards/zb_plus/zb_plus-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:3}],oh=[{id:"ダミー-1",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-2",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-3",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-4",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-5",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-6",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-7",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-8",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-9",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-10",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-11",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-12",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-13",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-14",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-15",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-16",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-17",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-18",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-19",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-20",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0}],ih=[{id:"強化機雷-1",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-2",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-3",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-4",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-5",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-6",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-7",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-8",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-9",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-10",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-11",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-12",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-13",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-14",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-15",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-16",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5}],sh=[{id:"陸上機雷-1",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-2",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-3",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-4",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-5",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-6",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-7",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-8",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-9",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-10",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-11",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-12",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-13",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-14",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-15",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-16",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-17",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-18",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-19",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-20",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3}],Vt={AG:K0,AR:J0,BG:B0,HO:F0,HY:G0,LG:H0,LO:U0,TR:W0,ZB:Z0,"AG+":Y0,"AR+":X0,"BG+":Q0,"HO+":q0,"HY+":eh,"LG+":nh,"LO+":th,"TR+":ah,"ZB+":rh,ダミー:oh,強化機雷:ih,陸上機雷:sh};let lh=0;function ch(e,n){return`${e}-${n}-${lh++}`}function dh(e,n){const a=(Vt[e]??[]).map(r=>({instanceId:ch(r.id,n),defId:r.id,destroyed:!1}));return uh(a)}function uh(e){const n=[...e];for(let t=n.length-1;t>0;t--){const a=Math.floor(Math.random()*(t+1));[n[t],n[a]]=[n[a],n[t]]}return n}function zm(e,n){const t=[...e];let a=n>>>0;for(let r=t.length-1;r>0;r--){a=a+1831565813>>>0;let i=Math.imul(a^a>>>15,a|1);i^=i+Math.imul(i^i>>>7,i|61);const s=((i^i>>>14)>>>0)/4294967296,l=Math.floor(s*(r+1));[t[r],t[l]]=[t[l],t[r]]}return{shuffled:t,nextSeed:a}}function ph(e,n){const t=Math.min(n,e.length);return{drawn:e.slice(0,t),remaining:e.slice(t)}}function te(e){for(const n of Object.values(Vt)){const t=n.find(a=>a.id===e);if(t)return t}}const c=(e=0)=>({terrain:"plain",elevation:0,variant:e}),w=(e=0)=>({terrain:"sand",elevation:0,variant:e}),H=(e=0)=>({terrain:"rubble",elevation:0,variant:e}),G=(e=0)=>({terrain:"forest",elevation:0,variant:e}),L=(e=0)=>({terrain:"water",elevation:0,variant:e}),C=e=>({terrain:"highland",elevation:e,variant:e}),mh={id:"map_1a",nameJa:"基本マップ1a",nameCn:"基础地图1a",width:7,height:11,maxPlayers:2,maxTeams:2,cells:[[w(),w(),w(),w(),w(),w(),w()],[c(),c(),c(),c(),c(),c(),c()],[c(),c(),c(),c(),c(),c(),c()],[C(2),C(1),c(),c(),c(),C(2),C(2)],[C(1),C(1),c(),c(),c(),C(2),c()],[c(),c(),c(),c(),c(),C(2),c()],[c(),c(),c(),c(),c(),c(),c()],[c(),c(),c(),C(1),C(1),C(2),C(2)],[c(),c(),c(),c(),c(),c(),c()],[c(),c(),c(),c(),c(),c(),c()],[H(),H(),H(),H(),H(),H(),H()]],startZones:{0:[{row:0,col:2},{row:0,col:3},{row:0,col:4}],1:[{row:10,col:2},{row:10,col:3},{row:10,col:4}]}},fh={id:"map_2a",nameJa:"基本マップ2a",nameCn:"基础地图2a",width:7,height:11,maxPlayers:2,maxTeams:2,cells:[[w(),w(),w(),w(),w(),w(),w()],[c(),c(),c(),c(),c(),c(),c()],[C(2),C(2),c(),c(),c(),c(),c()],[C(2),c(),c(),c(),c(),c(),c()],[C(2),c(),c(),c(),c(),c(),c()],[C(2),c(),c(),c(),c(),c(),c()],[C(2),C(2),c(),c(),c(),c(),c()],[c(),c(),c(),c(),G(),G(),c()],[c(),c(),c(),c(),G(),G(),c()],[c(),c(),c(),c(),c(),c(),c()],[w(),w(),w(),w(),w(),w(),w()]],startZones:{0:[{row:0,col:2},{row:0,col:3},{row:0,col:4}],1:[{row:10,col:2},{row:10,col:3},{row:10,col:4}]}},gh={id:"map_2b",nameJa:"基本マップ2b",nameCn:"基础地图2b",width:7,height:11,maxPlayers:2,maxTeams:2,cells:[[G(),G(),G(),c(),c(),c(),c()],[L(),L(),w(),c(),c(),c(),c()],[L(),L(),w(),c(),c(),c(),c()],[w(),L(),L(),w(),c(),c(),c()],[c(),w(),L(),L(),w(),c(),c()],[c(),c(),w(),L(),L(),w(),c()],[c(),c(),c(),L(),L(),w(),c()],[c(),c(),c(),w(),L(),L(),c()],[c(),c(),c(),c(),w(),L(),L()],[c(),c(),c(),c(),c(),c(),c()],[c(),c(),w(),w(),w(),c(),c()]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:0,col:2}],1:[{row:10,col:2},{row:10,col:3},{row:10,col:4}]}},hh={id:"map_3a",nameJa:"峡谷要塞",nameCn:"峡谷要塞",width:9,height:13,maxPlayers:4,maxTeams:4,cells:[[w(),w(),w(),w(),w(),w(),w(),w(),w()],[G(0),c(),c(),c(),c(),c(),c(),c(),G(1)],[c(),c(),c(),c(),c(),c(),c(),c(),c()],[C(2),C(3),C(1),c(),c(),c(),C(1),C(2),C(2)],[C(2),C(2),c(),c(),H(1),c(),c(),C(1),C(2)],[C(1),c(),H(0),H(2),c(),H(1),H(3),c(),C(1)],[c(),w(),L(0),L(1),w(),L(2),L(0),w(),c()],[C(1),c(),H(3),H(0),c(),H(2),H(1),c(),C(1)],[C(2),C(1),c(),c(),H(0),c(),c(),C(2),C(2)],[C(2),C(2),C(1),c(),c(),c(),C(1),C(3),C(2)],[c(),c(),c(),c(),c(),c(),c(),c(),c()],[G(2),c(),c(),c(),c(),c(),c(),c(),G(3)],[w(),w(),w(),w(),w(),w(),w(),w(),w()]],startZones:{0:[{row:0,col:1},{row:0,col:3},{row:0,col:4},{row:0,col:5},{row:0,col:7}],1:[{row:12,col:1},{row:12,col:3},{row:12,col:4},{row:12,col:5},{row:12,col:7}],2:[{row:2,col:0},{row:6,col:0}],3:[{row:2,col:8},{row:6,col:8}]}},xh={id:"map_3b",nameJa:"群島戦域",nameCn:"群岛战域",width:9,height:13,maxPlayers:4,maxTeams:4,cells:[[G(0),G(1),w(),w(),L(0),L(1),c(),c(),c()],[G(2),w(),c(),w(),L(2),c(),c(),w(),L(0)],[w(),L(0),w(),c(),c(),w(),L(1),L(0),L(2)],[L(1),L(2),c(),c(),C(1),c(),c(),L(2),L(1)],[L(0),w(),c(),C(1),C(2),C(1),c(),w(),L(0)],[L(2),c(),C(1),C(2),C(3),C(2),C(1),c(),L(1)],[L(1),w(),c(),C(2),G(0),C(2),c(),w(),L(2)],[L(0),c(),C(1),C(2),C(3),C(2),C(1),c(),L(0)],[L(2),w(),c(),C(1),C(2),C(1),c(),w(),L(1)],[L(1),L(0),c(),c(),C(1),c(),c(),L(0),L(2)],[L(0),L(2),L(1),w(),c(),c(),w(),L(1),w()],[c(),c(),L(0),w(),c(),w(),H(0),w(),H(1)],[c(),c(),c(),L(1),w(),w(),H(2),H(3),H(0)]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:1,col:0},{row:0,col:6},{row:0,col:7}],1:[{row:12,col:6},{row:12,col:7},{row:11,col:8},{row:12,col:0},{row:12,col:1}],2:[{row:2,col:3},{row:3,col:2}],3:[{row:10,col:4},{row:10,col:5}]}},vh={id:"map_4a",nameJa:"都市廃墟",nameCn:"都市废墟",width:11,height:15,maxPlayers:4,maxTeams:4,cells:[[H(0),w(),w(),w(),w(),w(),w(),w(),w(),w(),H(1)],[H(2),H(3),c(),c(),c(),c(),c(),G(0),G(1),c(),c()],[c(),H(0),H(1),c(),c(),H(2),c(),G(2),c(),c(),c()],[c(),c(),C(1),C(2),c(),H(3),c(),c(),c(),H(0),c()],[c(),c(),C(2),C(1),c(),c(),c(),c(),w(),L(0),w()],[H(1),c(),c(),c(),c(),H(0),c(),w(),L(1),L(2),c()],[H(2),H(0),c(),c(),c(),c(),w(),L(0),w(),c(),c()],[c(),c(),c(),c(),c(),C(3),c(),c(),c(),c(),c()],[c(),c(),w(),L(2),w(),c(),c(),c(),c(),H(1),H(2)],[c(),L(0),L(1),w(),c(),G(0),G(1),c(),c(),c(),H(0)],[c(),H(3),c(),c(),c(),G(2),G(3),c(),C(1),C(2),c()],[c(),c(),c(),H(1),c(),c(),c(),c(),C(2),C(1),c()],[c(),c(),H(2),H(0),c(),c(),c(),c(),c(),c(),c()],[c(),c(),c(),H(3),c(),c(),c(),H(1),H(2),c(),c()],[H(3),w(),w(),w(),w(),w(),w(),w(),w(),w(),H(2)]],startZones:{0:[{row:0,col:1},{row:0,col:3},{row:0,col:5},{row:0,col:7},{row:0,col:9}],1:[{row:14,col:1},{row:14,col:3},{row:14,col:5},{row:14,col:7},{row:14,col:9}],2:[{row:7,col:0},{row:8,col:0}],3:[{row:6,col:10},{row:7,col:10}]}},bh={id:"map_5a",nameJa:"三叉戦場",nameCn:"三叉战场",width:13,height:17,maxPlayers:6,maxTeams:6,cells:[[c(),c(),c(),w(),w(),w(),w(),w(),w(),w(),c(),c(),c()],[c(),c(),w(),c(),c(),c(),c(),c(),c(),c(),w(),c(),c()],[c(),G(0),c(),c(),c(),c(),c(),c(),c(),c(),c(),G(1),c()],[G(2),G(0),c(),c(),c(),H(0),c(),H(1),c(),c(),c(),G(1),G(3)],[G(0),c(),c(),c(),w(),L(0),w(),L(1),w(),c(),c(),c(),G(2)],[c(),c(),c(),w(),L(1),L(0),c(),L(2),L(0),w(),c(),c(),c()],[c(),c(),C(1),C(2),w(),c(),c(),c(),w(),C(2),C(1),c(),c()],[c(),C(1),C(2),C(3),C(2),c(),c(),c(),C(2),C(3),C(2),C(1),c()],[c(),c(),C(2),C(3),H(0),C(2),C(3),C(2),H(1),C(3),C(2),c(),c()],[c(),C(1),C(2),C(3),C(2),c(),c(),c(),C(2),C(3),C(2),C(1),c()],[c(),c(),C(1),C(2),w(),c(),c(),c(),w(),C(2),C(1),c(),c()],[c(),c(),c(),w(),L(2),L(1),c(),L(0),L(2),w(),c(),c(),c()],[G(1),c(),c(),c(),w(),L(0),w(),L(1),w(),c(),c(),c(),G(0)],[G(3),G(2),c(),c(),c(),H(2),c(),H(3),c(),c(),c(),G(0),G(1)],[c(),G(0),c(),c(),c(),c(),c(),c(),c(),c(),c(),G(2),c()],[w(),w(),w(),w(),c(),c(),c(),c(),c(),w(),w(),w(),w()],[w(),w(),w(),w(),w(),c(),c(),c(),w(),w(),w(),w(),w()]],startZones:{0:[{row:0,col:4},{row:0,col:6},{row:0,col:8}],1:[{row:16,col:0},{row:16,col:1},{row:16,col:2}],2:[{row:16,col:10},{row:16,col:11},{row:16,col:12}],3:[{row:6,col:0},{row:6,col:1},{row:10,col:0}],4:[{row:6,col:11},{row:6,col:12},{row:10,col:12}],5:[{row:2,col:0},{row:2,col:6},{row:2,col:12}]}},yh={id:"map_6a",nameJa:"環状要塞",nameCn:"环形要塞",width:15,height:17,maxPlayers:8,maxTeams:8,cells:[[c(),c(),c(),c(),w(),w(),w(),w(),w(),w(),w(),c(),c(),c(),c()],[c(),c(),c(),w(),c(),c(),c(),c(),c(),c(),c(),w(),c(),c(),c()],[c(),c(),C(1),C(2),C(2),C(1),c(),c(),c(),C(1),C(2),C(2),C(1),c(),c()],[c(),H(0),C(1),c(),c(),c(),H(1),c(),H(2),c(),c(),c(),C(1),H(3),c()],[w(),c(),c(),c(),G(0),G(1),c(),c(),c(),G(2),G(3),c(),c(),c(),w()],[w(),c(),H(0),c(),G(2),c(),c(),c(),c(),c(),G(0),c(),H(1),c(),w()],[c(),H(2),C(1),c(),c(),c(),H(3),w(),H(0),c(),c(),c(),C(1),H(1),c()],[c(),c(),c(),c(),c(),w(),L(0),L(1),L(2),w(),c(),c(),c(),c(),c()],[c(),c(),c(),c(),w(),L(2),L(0),C(3),L(1),L(0),w(),c(),c(),c(),c()],[c(),c(),c(),c(),c(),w(),L(1),L(2),L(0),w(),c(),c(),c(),c(),c()],[c(),H(3),C(1),c(),c(),c(),H(1),w(),H(2),c(),c(),c(),C(1),H(0),c()],[w(),c(),H(2),c(),G(1),c(),c(),c(),c(),c(),G(3),c(),H(3),c(),w()],[w(),c(),c(),c(),G(3),G(0),c(),c(),c(),G(1),G(2),c(),c(),c(),w()],[c(),H(1),C(1),c(),c(),c(),H(3),c(),H(0),c(),c(),c(),C(1),H(2),c()],[c(),c(),C(1),C(2),C(2),C(1),c(),c(),c(),C(1),C(2),C(2),C(1),c(),c()],[c(),c(),c(),w(),c(),c(),c(),c(),c(),c(),c(),w(),c(),c(),c()],[c(),c(),c(),c(),w(),w(),w(),w(),w(),w(),w(),c(),c(),c(),c()]],startZones:{0:[{row:0,col:5},{row:0,col:6},{row:0,col:7},{row:0,col:8}],1:[{row:16,col:5},{row:16,col:6},{row:16,col:7},{row:16,col:8}],2:[{row:4,col:0},{row:5,col:0},{row:11,col:0},{row:12,col:0}],3:[{row:4,col:14},{row:5,col:14},{row:11,col:14},{row:12,col:14}],4:[{row:0,col:0},{row:0,col:1},{row:0,col:2},{row:0,col:3}],5:[{row:0,col:11},{row:0,col:12},{row:0,col:13},{row:0,col:14}],6:[{row:16,col:0},{row:16,col:1},{row:16,col:2},{row:16,col:3}],7:[{row:16,col:11},{row:16,col:12},{row:16,col:13},{row:16,col:14}]}},_h={id:"map_7a",nameJa:"大陸戦争",nameCn:"大陆战争",width:17,height:19,maxPlayers:8,maxTeams:8,cells:[[w(),w(),w(),w(),c(),c(),c(),c(),c(),c(),c(),c(),c(),w(),w(),w(),w()],[w(),c(),c(),c(),c(),c(),G(0),c(),c(),c(),G(1),c(),c(),c(),c(),c(),w()],[c(),c(),G(0),G(1),c(),G(2),G(0),c(),c(),c(),G(1),G(3),c(),G(2),G(0),c(),c()],[c(),c(),G(2),c(),c(),c(),c(),H(0),c(),H(1),c(),c(),c(),c(),G(1),c(),c()],[c(),c(),c(),c(),C(1),C(2),c(),c(),c(),c(),c(),C(2),C(1),c(),c(),c(),c()],[c(),H(0),c(),C(1),C(2),C(3),C(1),c(),c(),c(),C(1),C(3),C(2),C(1),c(),H(1),c()],[w(),c(),c(),C(1),C(2),c(),c(),w(),L(0),w(),c(),c(),C(2),C(1),c(),c(),w()],[w(),c(),c(),c(),c(),c(),w(),L(1),L(0),L(2),w(),c(),c(),c(),c(),c(),w()],[c(),c(),H(2),c(),c(),w(),L(0),L(2),w(),L(1),L(0),w(),c(),c(),H(3),c(),c()],[c(),c(),c(),c(),w(),L(1),w(),c(),C(3),c(),w(),L(2),w(),c(),c(),c(),c()],[c(),c(),H(1),c(),c(),w(),L(2),L(0),w(),L(0),L(1),w(),c(),c(),H(0),c(),c()],[w(),c(),c(),c(),c(),c(),w(),L(0),L(1),L(2),w(),c(),c(),c(),c(),c(),w()],[w(),c(),c(),C(1),C(2),c(),c(),w(),L(2),w(),c(),c(),C(2),C(1),c(),c(),w()],[c(),H(2),c(),C(1),C(2),C(3),C(1),c(),c(),c(),C(1),C(3),C(2),C(1),c(),H(3),c()],[c(),c(),c(),c(),C(1),C(2),c(),c(),c(),c(),c(),C(2),C(1),c(),c(),c(),c()],[c(),c(),G(3),c(),c(),c(),c(),H(3),c(),H(2),c(),c(),c(),c(),G(0),c(),c()],[c(),c(),G(1),G(2),c(),G(0),G(3),c(),c(),c(),G(2),G(1),c(),G(3),G(2),c(),c()],[w(),c(),c(),c(),c(),c(),G(2),c(),c(),c(),G(0),c(),c(),c(),c(),c(),w()],[w(),w(),w(),w(),c(),c(),c(),c(),c(),c(),c(),c(),c(),w(),w(),w(),w()]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:0,col:2},{row:0,col:3},{row:1,col:0}],1:[{row:0,col:13},{row:0,col:14},{row:0,col:15},{row:0,col:16},{row:1,col:16}],2:[{row:18,col:0},{row:18,col:1},{row:18,col:2},{row:18,col:3},{row:17,col:0}],3:[{row:18,col:13},{row:18,col:14},{row:18,col:15},{row:18,col:16},{row:17,col:16}],4:[{row:6,col:0},{row:7,col:0},{row:7,col:1},{row:11,col:0},{row:12,col:0}],5:[{row:6,col:16},{row:7,col:16},{row:7,col:15},{row:11,col:16},{row:12,col:16}],6:[{row:0,col:6},{row:0,col:7},{row:0,col:8},{row:0,col:9},{row:0,col:10}],7:[{row:18,col:6},{row:18,col:7},{row:18,col:8},{row:18,col:9},{row:18,col:10}]}},Ih={id:"map_8a",nameJa:"火山列島",nameCn:"火山列岛",width:15,height:19,maxPlayers:8,maxTeams:8,cells:[[w(),w(),w(),G(0),G(1),L(0),L(1),c(),L(2),L(0),G(2),G(3),w(),w(),w()],[w(),c(),c(),G(2),c(),w(),L(0),c(),L(1),w(),c(),G(0),c(),c(),w()],[G(0),c(),c(),c(),w(),L(1),L(2),c(),L(0),L(2),w(),c(),c(),c(),G(1)],[c(),c(),H(0),w(),L(0),L(1),w(),c(),w(),L(2),L(0),w(),H(1),c(),c()],[c(),c(),c(),c(),w(),w(),c(),c(),c(),w(),w(),c(),c(),c(),c()],[c(),G(0),c(),c(),c(),c(),C(1),c(),C(1),c(),c(),c(),c(),G(1),c()],[c(),G(2),c(),c(),C(1),C(2),C(2),C(1),C(2),C(2),C(1),c(),c(),G(3),c()],[L(0),w(),c(),C(1),C(2),C(3),H(0),C(2),H(1),C(3),C(2),C(1),c(),w(),L(1)],[L(1),w(),c(),C(2),C(3),H(2),C(3),C(3),C(3),H(3),C(3),C(2),c(),w(),L(0)],[L(2),c(),c(),C(1),C(2),C(3),C(3),C(3),C(3),C(3),C(2),C(1),c(),c(),L(2)],[L(0),w(),c(),C(2),C(3),H(0),C(3),C(3),C(3),H(1),C(3),C(2),c(),w(),L(1)],[L(1),w(),c(),C(1),C(2),C(3),H(2),C(2),H(3),C(3),C(2),C(1),c(),w(),L(0)],[c(),G(1),c(),c(),C(1),C(2),C(2),C(1),C(2),C(2),C(1),c(),c(),G(0),c()],[c(),G(3),c(),c(),c(),c(),C(1),c(),C(1),c(),c(),c(),c(),G(2),c()],[c(),c(),c(),c(),w(),w(),c(),c(),c(),w(),w(),c(),c(),c(),c()],[c(),c(),H(2),w(),L(2),L(0),w(),c(),w(),L(1),L(2),w(),H(3),c(),c()],[G(2),c(),c(),c(),w(),L(0),L(1),c(),L(2),L(1),w(),c(),c(),c(),G(3)],[w(),c(),c(),G(1),c(),w(),L(2),c(),L(0),w(),c(),G(3),c(),c(),w()],[w(),w(),w(),G(3),G(2),L(1),L(0),c(),L(1),L(2),G(0),G(1),w(),w(),w()]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:0,col:2},{row:1,col:0}],1:[{row:0,col:12},{row:0,col:13},{row:0,col:14},{row:1,col:14}],2:[{row:18,col:0},{row:18,col:1},{row:18,col:2},{row:17,col:0}],3:[{row:18,col:12},{row:18,col:13},{row:18,col:14},{row:17,col:14}],4:[{row:7,col:1},{row:8,col:1},{row:9,col:1},{row:10,col:1}],5:[{row:7,col:13},{row:8,col:13},{row:9,col:13},{row:10,col:13}],6:[{row:0,col:7},{row:1,col:7},{row:2,col:7},{row:3,col:7}],7:[{row:18,col:7},{row:17,col:7},{row:16,col:7},{row:15,col:7}]}},Ye=[mh,fh,gh,hh,xh,vh,bh,yh,_h,Ih];function kh(){try{const e="em_custom_maps_index",n="em_custom_map_",t=localStorage.getItem(e);if(!t)return Ye;const a=JSON.parse(t),r=[];for(const{id:i}of a){const s=localStorage.getItem(n+i);if(s)try{r.push(JSON.parse(s))}catch{}}return[...Ye,...r]}catch{return Ye}}function hc(e){switch(e.terrain){case"plain":return"/assets/tiles/平地0.png";case"sand":return"/assets/tiles/砂0.png";case"rubble":return`/assets/tiles/瓦礫${e.variant%4}.png`;case"forest":return`/assets/tiles/森${e.variant%4}.png`;case"water":return`/assets/tiles/水${e.variant%3}.png`;case"highland":return`/assets/tiles/高地${e.elevation}.png`;default:return"/assets/tiles/平地0.png"}}const q=[{id:"TR",deckCode:"TR",nameJa:"トルトハーン",nameCn:"托尔特哈恩",type:"M軽/単座",movement:6,evasion:8,assault:5,assaultDef:2,initiative:3,tokenId:"TR-token.jpg"},{id:"HO",deckCode:"HO",nameJa:"フォルニッセ",nameCn:"弗尼塞",type:"SS軽/単座",movement:7,evasion:10,assault:5,assaultDef:2,initiative:1,tokenId:"HO-token.jpg"},{id:"HY",deckCode:"HY",nameJa:"ヒストリクス",nameCn:"希斯特里克斯",type:"L重/単座",movement:3,evasion:3,assault:6,assaultDef:3,initiative:14,tokenId:"HY-token.jpg"},{id:"ZB",deckCode:"ZB",nameJa:"ズィマー・ブーリア",nameCn:"季马尔·布里亚",type:"S重/単座",movement:5,evasion:5,assault:6,assaultDef:3,initiative:9,tokenId:"ZB-token.jpg"},{id:"AR",deckCode:"AR",nameJa:"アラクネ",nameCn:"阿拉克涅",type:"S中/単座",movement:6,evasion:7,assault:5,assaultDef:2,initiative:5,tokenId:"AR-token.jpg"},{id:"BG",deckCode:"BG",nameJa:"ヴィスナー・グローム",nameCn:"维斯纳·格罗姆",type:"LL中/単座",movement:3,evasion:5,assault:6,assaultDef:3,initiative:13,tokenId:"BG-token.jpg"},{id:"LO",deckCode:"LO",nameJa:"リュミエール・デ・オラージュ",nameCn:"吕米耶尔",type:"L軽/単座",movement:5,evasion:7,assault:5,assaultDef:2,initiative:6,tokenId:"LO-token.jpg"},{id:"LG",deckCode:"LG",nameJa:"ルー・ガルー",nameCn:"卢·加鲁",type:"M重/単座",movement:4,evasion:4,assault:6,assaultDef:3,initiative:12,tokenId:"LG-token.jpg"},{id:"AG",deckCode:"AG",nameJa:"アルギュロス",nameCn:"阿尔古罗斯",type:"M中/単座",movement:5,evasion:6,assault:6,assaultDef:3,initiative:7,tokenId:"AG-token.jpg"}];function jh(e,n){const t=[];let a=e.col,r=e.row;const i=n.col,s=n.row,l=Math.abs(i-a),d=Math.abs(s-r),u=a<i?1:-1,f=r<s?1:-1;let m=l-d;const g=(l+d)*2+2;let h=0;for(;h++<g&&(t.push({row:r,col:a}),!(a===i&&r===s));){const x=2*m;x>-d&&(m-=d,a+=u),x<l&&(m+=l,r+=f)}return t}function ja(e,n,t){var l;if(n.row===t.row&&n.col===t.col)return!0;const a=e.cells[n.row][n.col],r=e.cells[t.row][t.col],i=Math.max(a.elevation,r.elevation),s=jh(n,t);for(const d of s){if(d.row===n.row&&d.col===n.col||d.row===t.row&&d.col===t.col)continue;const u=(l=e.cells[d.row])==null?void 0:l[d.col];if(u&&u.terrain==="highland"&&u.elevation>i)return!1}return!0}function Ke(e,n){return Math.max(Math.abs(e.row-n.row),Math.abs(e.col-n.col))}function ft(e,n,t){return e==="N"?t.row<=n.row:e==="S"?t.row>=n.row:e==="E"?t.col>=n.col:e==="W"?t.col<=n.col:!0}function Ir(e,n,t){if(n!==2)return 0;if(e.plotSeg1){const a=t(e.plotSeg1.defId);if(a&&a.actionType==="aim")return 1}return 0}function wh(e,n,t,a){const r=[];if(t==="ranged"){for(const l of e.hand)if(!l.destroyed){const d=a(l.defId);(d==null?void 0:d.actionType)==="armor"&&(d.armorValue??0)>0&&r.push({instanceId:l.instanceId,defId:l.defId,armorValue:d.armorValue})}}const i=[],s=[{seg:1,card:e.plotSeg1},{seg:2,card:e.plotSeg2}];for(const{seg:l,card:d}of s){if(!d||d.destroyed)continue;const u=a(d.defId);(u==null?void 0:u.actionType)==="armor"&&(u.armorValue??0)>0&&i.push({instanceId:d.instanceId,defId:d.defId,seg:l,armorValue:u.armorValue})}return{handCards:r,plotCards:i}}function Rn(e,n,t,a){const r=n===1?e.plotSeg1:e.plotSeg2;if(!r)return null;const i=a(r.defId);return i&&(t==="ranged"&&i.actionType==="ranged"||t==="melee"&&(i.actionType==="melee"||i.actionType==="charge"))?i:null}function Yo(e,n,t,a,r){var u,f;let i=e;const s=[],l=(u=a.cells[n.row])==null?void 0:u[n.col],d=(f=a.cells[t.row])==null?void 0:f[t.col];return(l==null?void 0:l.terrain)==="water"&&r.isEnergyWeapon&&(i-=1,s.push("水域能量衰减-1")),(d==null?void 0:d.terrain)==="forest"&&(i-=1,s.push("森林掩护-1")),{dmg:Math.max(0,i),reasons:s}}function Xo(e,n,t,a,r,i){const s=Rn(e,t,a,i);if(!s)return{canAttack:!1,reason:"无攻击牌",damage:0,counterDamage:0,dist:0,card:null};const l=Ke(e.position,n.position);if(a==="ranged"){if(s.rangeMin===void 0||s.rangeMax===void 0)return{canAttack:!1,reason:"卡牌无射程数据",damage:0,counterDamage:0,dist:l,card:s};if(l<s.rangeMin)return{canAttack:!1,reason:`距离过近 (${l} < ${s.rangeMin})`,damage:0,counterDamage:0,dist:l,card:s};if(l>s.rangeMax)return{canAttack:!1,reason:`射程外 (${l} > ${s.rangeMax})`,damage:0,counterDamage:0,dist:l,card:s};if(!ja(r,e.position,n.position))return{canAttack:!1,reason:"视线被遮挡",damage:0,counterDamage:0,dist:l,card:s};if(!ft(e.facing,e.position,n.position))return{canAttack:!1,reason:`目标在机体后方（机头朝${e.facing}），无法射击`,damage:0,counterDamage:0,dist:l,card:s};let d=s.damage??0;const u=[];if(s.rangeOptimal!==void 0&&s.damageAttenuation!==void 0){const p=Math.max(0,l-s.rangeOptimal);if(p>0){const _=p*s.damageAttenuation;d=Math.max(0,d-_),u.push(`超射程-${_}`)}}const f=Yo(d,e.position,n.position,r,s),m=Ir(e,t,i),g=f.dmg+m,h=[...u,...f.reasons];return m>0&&h.push("瞄准+1"),{canAttack:!0,reason:`有效射击${h.length>0?`（${h.join(", ")}）`:""}`,damage:g,counterDamage:0,dist:l,card:s}}if(a==="melee"&&s.actionType==="melee"){if(l!==1)return{canAttack:!1,reason:`不相邻 (距离 ${l})`,damage:0,counterDamage:0,dist:l,card:s};if(!ja(r,e.position,n.position))return{canAttack:!1,reason:"视线被遮挡",damage:0,counterDamage:0,dist:l,card:s};const d=Yo(s.damage??0,e.position,n.position,r,s),u=Ir(e,t,i),f=d.dmg+u,m=[...d.reasons];return u>0&&m.push("瞄准+1"),{canAttack:!0,reason:`有效近战${m.length>0?`（${m.join(", ")}）`:""}`,damage:f,counterDamage:0,dist:l,card:s}}return a==="melee"&&s.actionType==="charge"?{canAttack:!1,reason:"突击卡需使用evaluateCharge()",damage:0,counterDamage:0,dist:l,card:s}:{canAttack:!1,reason:"非攻击时机",damage:0,counterDamage:0,dist:l,card:null}}const Sh=new Set(["パイルバンカー","スパイク"]),Ch=new Set(["アンカー","ロングアンカー"]);function Nh(e){return Sh.has(e.nameJa)}function xc(e){return!!e&&Ch.has(e.nameJa)}function Mh(e,n,t,a,r,i){const s=i==="N"?{row:-1,col:0}:i==="S"?{row:1,col:0}:i==="E"?{row:0,col:1}:{row:0,col:-1};let l=n,d=a;for(;d>0;){const u={row:l.row+s.row,col:l.col+s.col};if(u.row<0||u.row>=e.height||u.col<0||u.col>=e.width||r.some(p=>p.row===u.row&&p.col===u.col))break;const f=e.cells[u.row][u.col],m=e.cells[l.row][l.col],g=f.terrain==="plain"||f.terrain==="sand"?1:f.terrain==="water"?3:2,h=Math.max(0,f.elevation-m.elevation),x=g+h;if(d<x)break;d-=x,l=u}return Ke(l,t)!==1||!ft(i,l,t)?null:l}function Qo(e,n,t,a,r,i,s){const l=Rn(e,t,"melee",s);if(!l||l.actionType!=="charge")return{canAttack:!1,reason:"无突击牌",damage:0,counterDamage:0,dist:0,card:null};const d=Ke(e.position,n.position);if(Nh(l)){if(d!==1)return{canAttack:!1,reason:`不相邻 (距离 ${d})，${l.nameCn} 无法攻击`,damage:0,counterDamage:0,dist:d,card:l};if(!ft(e.facing,e.position,n.position))return{canAttack:!1,reason:`目标不在正面弧内（机头朝${e.facing}），${l.nameCn} 无法攻击`,damage:0,counterDamage:0,dist:d,card:l};const y=r.assault+1,I=Yo(y,e.position,n.position,a,l),N=Ir(e,t,s),T=I.dmg+N,k=Math.max(0,i.assaultDef-1),S=[...I.reasons];N>0&&S.push("瞄准+1");const $=S.length>0?`（${S.join(", ")}）`:"";return{canAttack:!0,reason:`有效${l.nameCn}攻击${$}`,damage:T,counterDamage:k,dist:d,card:l,chargeDestination:e.position}}const f=r.assault,m=Mh(a,e.position,n.position,f,[n.position],e.facing);if(!m)return{canAttack:!1,reason:`突击距离不足或目标不在正面弧内 (距离 ${d}，突击值 ${f})`,damage:0,counterDamage:0,dist:d,card:l};const g=r.assault,h=Yo(g,m,n.position,a,l),x=Ir(e,t,s),p=h.dmg+x,_=i.assaultDef,b=[...h.reasons];return x>0&&b.push("瞄准+1"),{canAttack:!0,reason:`有效突击${b.length>0?`（${b.join(", ")}）`:""}`,damage:p,counterDamage:_,dist:d,card:l,chargeDestination:m}}function gt(e){const n=[...e.deck,...e.hand,...e.auxiliary];return e.plotSeg1&&n.push(e.plotSeg1),e.plotSeg2&&n.push(e.plotSeg2),n.filter(t=>!t.destroyed)}function us(e){return gt(e).length}function $r(e){const n=[...e.hand,...e.auxiliary];return e.plotSeg1&&n.push(e.plotSeg1),e.plotSeg2&&n.push(e.plotSeg2),n.filter(t=>!t.destroyed)}function Si(e,n){var a,r;const t={...n,destroyed:!0};return{player:{...e,deck:e.deck.map(i=>i.instanceId===n.instanceId?t:i),hand:e.hand.map(i=>i.instanceId===n.instanceId?t:i),auxiliary:e.auxiliary.map(i=>i.instanceId===n.instanceId?t:i),plotSeg1:((a=e.plotSeg1)==null?void 0:a.instanceId)===n.instanceId?t:e.plotSeg1,plotSeg2:((r=e.plotSeg2)==null?void 0:r.instanceId)===n.instanceId?t:e.plotSeg2,destroyedCards:[...e.destroyedCards,t]},destroyed:t}}function dl(e,n,t,a){let r=e;const i=[];let s=n;const l=a?`[${a}] `:"";let d=0;const u=30;for(;s>0&&d<u;){s--,d++;const f=r.deck.filter(x=>!x.destroyed);if(f.length===0){i.push(`    ↳ ${l}【誘爆】牌组已空，无法继续检查`);break}const m=f[0],g=t(m.defId),h=(g==null?void 0:g.nameCn)??m.defId;if(g!=null&&g.hasBombIcon){const{player:x}=Si(r,m);r=x,s++,i.push(`    ↳ ${l}【💣 誘爆】翻开 ${h}——有炸弹标记，破坏！（连锁+1）`)}else r={...r,deck:r.deck.filter(x=>x.instanceId!==m.instanceId),discard:[...r.discard,m]},i.push(`    ↳ ${l}【誘爆】翻开 ${h}——无炸弹标记，放入弃牌区`)}return{player:r,log:i}}function It(e,n,t,a){let r=e;const i=[];let s=n,l=0;for(;s>0;){const d=r.deck.filter(v=>!v.destroyed),u=r.hand.filter(v=>!v.destroyed),f=r.auxiliary.filter(v=>!v.destroyed),m=[r.plotSeg1,r.plotSeg2].filter(v=>!!v&&!v.destroyed),g=d[0]??u[0]??f[0]??m[0];if(!g)break;const h=t(g.defId),x=(h==null?void 0:h.nameCn)??g.defId,{player:p}=Si(r,g);r=p,s--;const _=h!=null&&h.hasBombIcon?"【💣】":"",b=a?`[${a}] `:"";if(i.push(`  ▶ ${b}${x} 被摧毁${_}`),h!=null&&h.hasBombIcon&&l++,r.destroyedCards.length>30)break}if(l>0){i.push(`  ─── 誘爆检查（${l}张炸弹卡被破坏）───`);const{player:d,log:u}=dl(r,l,t,a);r=d,i.push(...u)}return{player:r,log:i}}const Th={plain:{type:"plain",nameJa:"平地",nameCn:"平原",moveCost:1,blocksLOS:!1,enterable:!0,providesCover:!1},sand:{type:"sand",nameJa:"砂地",nameCn:"沙地",moveCost:1,blocksLOS:!1,enterable:!0,providesCover:!1},rubble:{type:"rubble",nameJa:"瓦礫",nameCn:"瓦砾",moveCost:2,blocksLOS:!1,enterable:!0,providesCover:!1},forest:{type:"forest",nameJa:"森",nameCn:"森林",moveCost:2,blocksLOS:!1,enterable:!0,providesCover:!0},water:{type:"water",nameJa:"水辺",nameCn:"水域",moveCost:3,blocksLOS:!1,enterable:!0,providesCover:!1},highland:{type:"highland",nameJa:"高地",nameCn:"高地",moveCost:1,blocksLOS:!1,enterable:!0,providesCover:!1}};function Vm(e){const n=Th[e];return n.enterable?n.moveCost:1/0}const Ci=[[-1,0],[1,0],[0,-1],[0,1]];function Pm(e,n){return e===-1?"N":e===1?"S":n===-1?"W":"E"}function Ni(e,n,t){return n>=0&&n<e.height&&t>=0&&t<e.width}function be(e,n){return e.row===n.row&&e.col===n.col}function Eh(e,n,t,a,r){const i=Array.from({length:e.height},()=>new Array(e.width).fill(-1)),s=[{pos:n,remaining:t}];i[n.row][n.col]=t;const l=[{pos:n,remaining:t}];for(;s.length>0;){const{pos:d,remaining:u}=s.shift();for(const[f,m]of Ci){const g=d.row+f,h=d.col+m;if(!Ni(e,g,h))continue;const x={row:g,col:h},p=e.cells[g][h];let _=Vm(p.terrain);if(_===1/0)continue;r!=null&&r.vernier&&(p.terrain==="rubble"||p.terrain==="forest"||p.terrain==="water")&&(_=1);const b=e.cells[d.row][d.col];let v=Math.abs(p.elevation-b.elevation);r!=null&&r.vernier&&(v=Math.max(0,v-1));const y=_+v;if(u<y)continue;const I=u-y;a.some(T=>be(T,x))||i[g][h]>=I||(i[g][h]=I,l.push({pos:x,remaining:I}),s.push({pos:x,remaining:I}))}}return l}function Mt(e){return`${e.row},${e.col}`}function Rm(e,n,t,a,r,i=1/0){if(t<=0)return[];const s=new Set(a.map(Mt)),l=[],d=new Set([Mt(n)]);function u(f,m,g){if(l.length>=i)return;let h=!1;for(const[x,p]of Ci){const _={row:f.row+x,col:f.col+p};if(!Ni(e,_.row,_.col))continue;const b=Mt(_);if(d.has(b)||s.has(b))continue;const v=ul(e,f.row,f.col,_.row,_.col,r);v===1/0||m<v||(h=!0,d.add(b),g.push(_),u(_,m-v,g),g.pop(),d.delete(b))}!h&&g.length>0&&l.push({path:[...g],remaining:m})}return u(n,t,[]),l}function ul(e,n,t,a,r,i){const s=e.cells[a][r];let l=Vm(s.terrain);if(l===1/0)return 1/0;i!=null&&i.vernier&&(s.terrain==="rubble"||s.terrain==="forest"||s.terrain==="water")&&(l=1);const d=e.cells[n][t];let u=Math.abs(s.elevation-d.elevation);return i!=null&&i.vernier&&(u=Math.max(0,u-1)),l+u}function Mi(e,n,t,a,r,i="S"){const s=new Map;for(const l of Rm(e,n,t,a,r)){const d=l.path[l.path.length-1],u=Mt(d),f=s.get(u);(!f||l.remaining>f.remaining)&&s.set(u,{pos:d,remaining:l.remaining})}return Array.from(s.values())}function Ti(e,n,t,a,r,i,s){const l=_o(e,n,t,a,r,i,s,64);return l.length===0?null:(l.sort((d,u)=>d.path.length!==u.path.length?d.path.length-u.path.length:JSON.stringify(d.path).localeCompare(JSON.stringify(u.path))),l[0])}function Dh(e,n,t,a,r,i,s){if(i.length===0)return!1;const l=new Set([Mt(n)]);let d=n,u=a;for(const f of i){if(Math.abs(f.row-d.row)+Math.abs(f.col-d.col)!==1)return!1;const m=Mt(f);if(l.has(m)||r.some(h=>be(h,f)))return!1;const g=ul(e,d.row,d.col,f.row,f.col,s);if(g===1/0||u<g)return!1;u-=g,l.add(m),d=f}if(!be(d,t))return!1;for(const[f,m]of Ci){const g={row:d.row+f,col:d.col+m};if(!Ni(e,g.row,g.col)||l.has(Mt(g))||r.some(x=>be(x,g)))continue;const h=ul(e,d.row,d.col,g.row,g.col,s);if(h!==1/0&&u>=h)return!1}return!0}function _o(e,n,t,a,r,i,s,l=8){return be(n,a)||r<=0?[]:Rm(e,n,r,i,s,l*16).filter(d=>be(d.path[d.path.length-1],a)).slice(0,l).map(d=>({path:d.path,finalFacing:t}))}function Lm(e,n,t){const a=[];for(const[r,i]of Ci){const s=n.row+r,l=n.col+i;if(!Ni(e,s,l))continue;const d={row:s,col:l};t.some(u=>be(u,d))||a.push(d)}return a}function Io(e,n,t,a){const r=n===1?e.plotSeg1:e.plotSeg2;if(!r)return 0;const i=t(r.defId);return!i||i.actionType!=="movement"?0:(i.movementValue??0)+(a!=null&&a.wheel?2:0)}function $h(e,n,t,a){const r=n===1?e.plotSeg1:e.plotSeg2;if(!r)return!1;const i=t(r.defId);return!i||i.actionType!=="movement"?!1:(i.movementValue??a)>0}const Ah="バーニア",zh="ムーブセンサー",Vh="ホイール";function fn(e,n,t){const a=new Map;for(const m of e.auxiliary){if(m.destroyed)continue;const g=n(m.defId);g&&a.set(g.nameJa,(a.get(g.nameJa)??0)+1)}const r=a.get(Ah)??0,i=a.get(zh)??0,s=a.get(Vh)??0,l=r>=2&&s>=2,d=!l&&r>=2,u=i>=2,f=!l&&s>=2;return{vernier:d&&(t==="movement"||t==="melee"),moveSensor:u&&t==="melee",wheel:f&&(t==="movement"||t==="charge")}}function Om(e,n){const t=n.row-e.row,a=n.col-e.col;return Math.abs(t)>=Math.abs(a)?t<0?"N":"S":a>0?"E":"W"}function Ph(e,n){switch(n){case"N":return{row:e.row-1,col:e.col};case"S":return{row:e.row+1,col:e.col};case"E":return{row:e.row,col:e.col+1};case"W":return{row:e.row,col:e.col-1}}}function ne(e){return`P${e.replace("player","")}`}function qo(e){switch(e){case"movement":return"移动时机";case"ranged":return"射击时机";case"melee":return"近战时机";case"special":return"特殊时机";default:return e}}function Rh(e){switch(e){case"movement":return"移动";case"ranged":return"射击";case"melee":return"近战";case"charge":return"突击";case"aim":return"瞄准";case"armor":return"装甲";case"mine":return"机雷";case"special":return"特殊";default:return e}}function pl(e,n){let t=Z(e,`══════ 主要阶段${n}开始 ══════`);t=Z(t,`全员翻开阶段${n}盖卡：`);for(const a of e.playerIds){if(t.players[a].isDefeated)continue;const r=t.players[a],i=q.find(u=>u.id===r.unitId),s=ne(a),l=(i==null?void 0:i.nameCn)??a,d=n===1?r.plotSeg1:r.plotSeg2;if(d){const u=te(d.defId);u?t=Z(t,`  ${s}[${l}] →【${u.nameCn}】(${Rh(u.actionType)})`):t=Z(t,`  ${s}[${l}] → (未知卡牌)`)}else t=Z(t,`  ${s}[${l}] → 未配置行动卡`)}return t}function vc(e,n,t,a="S"){const r=dh(n,e);return{id:e,unitId:n,position:t,facing:a,deck:r,hand:[],auxiliary:[],plotSeg1:null,plotSeg2:null,discard:[],destroyedCards:[],isDefeated:!1}}function Km(e=2,n=2){const t=Ye[0],a=ga.slice(0,e),r={};for(let s=0;s<a.length;s++)r[a[s]]=s%n;const i={};for(const s of a){const l=r[s],d=t.startZones[l]??t.startZones[0]??[],u=d[Math.min(1,d.length-1)]??{row:0,col:0},f=l===0?"S":"N";i[s]=vc(s,"AG",u,f)}return{phase:"setup",roundNumber:0,activePlayer:a[0],players:i,playerIds:a,teams:r,teamCount:n,map:t,mines:[],log:[],turnOrder:[...a],currentTiming:null,plottingStep:null,pendingDamage:null,shuffleSeed:Date.now()}}function se(e,n){return L0(e,n)}function he(e,n,t){return O0(e,n,t)}function Z(e,n){return{...e,log:[...e.log,n]}}function $n(e,n){return{...e,log:[...e.log,`[DBG] ${n}`]}}function Lh(e,n){return e.filter(t=>t.instanceId!==n)}function Oh(e){const n=[],t=[];for(const a of e.deck){const r=te(a.defId);r&&r.actionType==="auxiliary"?t.push(a):n.push(a)}return{...e,deck:n,auxiliary:[...e.auxiliary,...t]}}function ei(e){const n=e.playerIds.filter(r=>!e.players[r].isDefeated),t=e.phase==="action_seg2"?2:1,a=n.map(r=>{const i=e.players[r],s=q.find(u=>u.id===i.unitId),l=(s==null?void 0:s.initiative)??0;let d=(s==null?void 0:s.movement)??0;if(e.currentTiming==="movement"){const u=t===1?i.plotSeg1:i.plotSeg2;if(u){const f=te(u.defId);f&&f.movementValue!==void 0&&(d=f.movementValue)}}return{id:r,initiative:l,movementValue:d}});return e.currentTiming==="movement"?a.sort((r,i)=>r.movementValue!==i.movementValue?i.movementValue-r.movementValue:i.initiative-r.initiative):a.sort((r,i)=>i.initiative-r.initiative),a.map(r=>r.id)}function Kh(e,n){const{playerId:t,unitId:a}=n,r=e.teams[t]??0,i=e.map.startZones[r]??[],s=se(e,t).position,l=i.some(f=>f.row===s.row&&f.col===s.col)?s:i[Math.min(1,i.length-1)]??{row:0,col:0},d=se(e,t).facing,u=vc(t,a,l,d);return Z(he(e,t,u),`${t} 选择了机体 ${a}`)}function Jh(e,n){const t=Ye.find(i=>i.id===n.mapId);if(!t)return e;const a={},r={};for(const i of e.playerIds){const s=e.teams[i]??0,l=t.startZones[s]??t.startZones[0]??[],d=r[s]??0;r[s]=d+1;const u=l[Math.min(d,l.length-1)]??{row:0,col:0},f=s===0?"S":"N";a[i]=vc(i,e.players[i].unitId,u,f)}return Z({...e,map:t,players:a},`选择了地图 ${t.nameCn}`)}function Bh(e,n){if(e.phase!=="setup")return e;const{playerId:t,position:a}=n,r=se(e,t);return he(e,t,{...r,position:a})}function Fh(e,n){if(e.phase!=="setup")return e;const{playerId:t,facing:a}=n,r=se(e,t);return he(e,t,{...r,facing:a})}function Gh(e){var a;const n={...e.players};let t={...e,phase:"draw",roundNumber:1};for(const r of e.playerIds){const i=Oh(e.players[r]);n[r]=i;for(const s of i.auxiliary){const l=te(s.defId);t=Z(t,`${r} 补助卡【${(l==null?void 0:l.nameCn)??s.defId}】从卡组移至辅助区`)}}t={...t,players:n};for(const r of e.playerIds){const i=((a=q.find(s=>s.id===t.players[r].unitId))==null?void 0:a.evasion)??5;t=bc(t,{playerId:r,count:i})}return Z({...t,phase:"pregame",plottingStep:null,activePlayer:e.playerIds[0],currentTiming:null},"=== 第 1 回合开始 ===")}function Hh(e){if(e.phase!=="pregame")return e;const n=e.playerIds[0];return{...e,phase:"plotting",plottingStep:`transition_to_${n}`,activePlayer:n}}function bc(e,n){const t=se(e,n.playerId),a=[],r=[];let i=t.deck.filter(g=>!g.destroyed),s=t.discard.filter(g=>!g.destroyed);const l=s.length;let d=!1,u=e.shuffleSeed;for(;r.length<n.count;){if(i.length===0){if(s.length===0)break;const p=zm([...s],u);i=p.shuffled,u=p.nextSeed,s=[],d=!0}const g=n.count-r.length,{drawn:h,remaining:x}=ph(i,g);i=x;for(const p of h){const _=te(p.defId);_&&_.actionType==="auxiliary"?a.push(p):r.push(p)}}const f={...t,deck:i,discard:s,hand:[...t.hand,...r],auxiliary:[...t.auxiliary,...a]};let m=he({...e,shuffleSeed:u},n.playerId,f);d&&(m=Z(m,`${n.playerId} 的卡组耗尽，弃牌区（${l} 张）洗入卡组`)),m=Z(m,`${n.playerId} 抽了 ${r.length} 张牌`);for(const g of a){const h=te(g.defId),x=(h==null?void 0:h.nameCn)??g.defId;m=Z(m,`  ↳ 辅助卡【${x}】自动放置到辅助区`)}return m}function Uh(e,n){var f;const{playerId:t,seg:a,instanceId:r}=n,i=se(e,t),s=i.hand.find(m=>m.instanceId===r);if(!s)return e;const l=((f=te(s.defId))==null?void 0:f.nameCn)??s.defId;e=$n(e,`PLOT_CARD: ${ne(t)} 配置【${l}】到阶段${a}`);const d=Lh(i.hand,r),u={...i,hand:d,plotSeg1:a===1?s:i.plotSeg1,plotSeg2:a===2?s:i.plotSeg2};return he(e,t,u)}function Wh(e,n){const{playerId:t}=n,a=Z(e,`${t} 完成了布局`),r=e.playerIds.indexOf(t),i=e.playerIds.slice(r+1).find(u=>!a.players[u].isDefeated);if(i)return{...a,activePlayer:i,plottingStep:`transition_to_${i}`};const l={...pl(a,1),activePlayer:e.playerIds[0],phase:"action_seg1",plottingStep:"complete",currentTiming:"movement",turnOrder:[]},d={...l,turnOrder:ei(l)};return Z(d,`▸ ${qo("movement")} — 行动顺序：${d.turnOrder.map(ne).join(" → ")}`)}function Zh(e){const n=e.plottingStep;if(!n)return e;for(const t of e.playerIds)if(n===`transition_to_${t}`)return{...e,plottingStep:t,activePlayer:t};if(n==="transition"){const t=e.playerIds.indexOf(e.activePlayer);if(t>=0&&t<e.playerIds.length-1){const a=e.playerIds[t+1];return{...e,plottingStep:a,activePlayer:a}}}return e}function Yh(e,n){var p;const{playerId:t,to:a}=n;let r=se(e,t);if(r.isDefeated)return e;const i=r.position;e=$n(e,`MOVE_UNIT: ${ne(t)} (${i.row},${i.col})→(${a.row},${a.col}) 阶段=${e.phase} 时机=${e.currentTiming}`);const s=e.map,l=e.playerIds.filter(_=>_!==t&&!e.players[_].isDefeated).map(_=>se(e,_).position);if(l.some(_=>be(_,a)))return Z(e,`${ne(t)} 移动无效：目标位置 (${a.row}, ${a.col}) 已被其他机体占据`);const d=e.phase==="action_seg2"?2:1,u=q.find(_=>_.id===r.unitId),f=fn(r,te,"movement"),m=u?Io(r,d,te,f)||u.movement:0,g=n.path?Dh(s,i,a,m,l,n.path,f)?n.path:null:((p=Ti(s,i,r.facing,a,m,l,f))==null?void 0:p.path)??null;let h=e;if(!g||g.length===0)return Z(e,`${ne(t)} 移动无效：所选终点不满足原版移动规则`);const x=n.finalFacing??r.facing;return r={...r,position:a,facing:x},h=he(h,t,r),h=Z(h,`${t} 移动到 (${a.row}, ${a.col})，机头朝${x}`),tn(h)}function Xh(e,n){const{playerId:t,damage:a}=n,r=se(e,t),i=n.placements?n.placements:n.to?[{position:n.to,kind:"real"}]:[];if(i.length===0)return Z(e,`${ne(t)} 布雷无效：未选择任何指示物位置`);const s=!n.placements&&i.length===1;if(!s&&i.length!==4)return Z(e,`${ne(t)} 布雷无效：必须设置 4 个指示物（真雷2、替身2）`);const l=i.filter(h=>h.kind==="real").length,d=i.filter(h=>h.kind==="dummy").length;if(!s&&(l!==2||d!==2))return Z(e,`${ne(t)} 布雷无效：真雷与替身雷必须各放置 2 个`);const u=new Set(e.mines.map(h=>`${h.position.row},${h.position.col}`)),f=new Set;for(const h of i){const{row:x,col:p}=h.position;if(x<0||x>=e.map.height||p<0||p>=e.map.width)return Z(e,`${ne(t)} 布雷无效：存在超出地图范围的指示物位置`);if(Math.max(Math.abs(x-r.position.row),Math.abs(p-r.position.col))!==1)return Z(e,`${ne(t)} 布雷无效：机雷指示物只能放在自机周围 8 格`);const _=`${x},${p}`;if(u.has(_)||f.has(_))return Z(e,`${ne(t)} 布雷无效：机雷指示物不能与其他指示物重叠`);f.add(_)}const m=i.map((h,x)=>({id:`mine-${Date.now()}-${x}-${Math.random().toString(36).substring(2,9)}`,ownerId:t,position:h.position,damage:a,kind:h.kind}));let g={...e,mines:[...e.mines,...m]};if(s){const[h]=m;return g=Z(g,`${ne(t)} 在 (${h.position.row}, ${h.position.col}) 部署了机雷`),g}return g=Z(g,`${ne(t)} 在周围 8 格部署了 4 个隐藏指示物（真雷2、替身2）`),g}function Od(e,n,t){var _,b,v;const{attackerId:a,targetId:r}=n,i=e.phase==="action_seg1"?1:2,s=se(e,a),l=se(e,r);if(s.isDefeated||l.isDefeated)return e;e=$n(e,`RESOLVE_${t.toUpperCase()}: ${ne(a)}(${s.position.row},${s.position.col},${s.facing})→${ne(r)}(${l.position.row},${l.position.col},${l.facing}) seg=${i}`);const d=Xo(s,l,i,t,e.map,te),f=Ir(s,i,te)>0?a:void 0;if(!d.canAttack)return Z(e,`${a} 攻击无效：${d.reason}`);const m=((_=q.find(y=>y.id===s.unitId))==null?void 0:_.nameCn)??a,g=((b=q.find(y=>y.id===l.unitId))==null?void 0:b.nameCn)??r,h=((v=d.card)==null?void 0:v.nameCn)??"???",x=t==="ranged"?"射击":"近战";let p=e;if(t==="melee"){const y=Om(s.position,l.position);y!==s.facing&&(p=he(p,a,{...se(p,a),facing:y}),p=Z(p,`${m} 近战攻击后自动转向【${y}】`))}if(p=Z(p,`${m} 对 ${g} 发动${x}【${h}】→ 造成 ${d.damage} 点伤害`),t==="ranged"&&xc(d.card)){const y=Ph(s.position,s.facing),I=y.row>=0&&y.row<p.map.height&&y.col>=0&&y.col<p.map.width,N=p.playerIds.some(T=>T!==r&&!p.players[T].isDefeated&&be(p.players[T].position,y));I?N?p=Z(p,`${h} 命中，但自机正前方被其他机体占据，无法拖拽目标`):be(l.position,y)?p=Z(p,`${h} 命中效果：${g} 已在自机正前方，位置不变`):(p=he(p,r,{...se(p,r),position:y}),p=Z(p,`${h} 命中效果：${g} 被强制移动到 (${y.row}, ${y.col})，朝向保持不变`)):p=Z(p,`${h} 命中，但自机正前方超出地图，无法拖拽目标`)}return p={...p,lastDamageContext:{attackerId:a,targetId:r,weaponName:h}},ha(p,r,d.damage,t,i,f,h)}function ha(e,n,t,a,r,i,s){if(t<=0)return tn(e);const l=se(e,n),{handCards:d,plotCards:u}=wh(l,r,a,te);return d.length>0||u.length>0?{...e,pendingArmorChoice:{targetId:n,damage:t,source:a,attackerId:i,weaponName:s,handCards:d,plotCards:u}}:yc(e,n,t,a,i)}function Qh(e,n){const t=e.pendingArmorChoice;if(!t||t.targetId!==n.playerId)return e;let a={...e,pendingArmorChoice:void 0};const r=new Set(n.selectedInstanceIds);let i=0;const s=[];for(const d of r){const u=se(a,t.targetId),f=gt(u).find(h=>h.instanceId===d);if(!f)continue;const m=te(f.defId);if(!m||m.actionType!=="armor")continue;i+=m.armorValue??0,s.push(m.nameCn);const{player:g}=Si(u,f);a=he(a,t.targetId,g)}i>0?a=Z(a,`[${ne(t.targetId)}] 激活装甲【${s.join("、")}】减伤 -${i} 点`):a=Z(a,`[${ne(t.targetId)}] 放弃使用装甲`);const l=Math.max(0,t.damage-i);return ut(yc(a,t.targetId,l,t.source,t.attackerId))}function yc(e,n,t,a,r){if(t<=0)return tn(e);const i=se(e,n),s=gt(i);if(s.length===0)return tn(e);if(a!=="ranged"){const l=i.deck.filter(m=>!m.destroyed).length,d=i.discard.filter(m=>!m.destroyed).length;if(!(l===0&&d===0)){let m=e,g=t;const h=Math.min(g,l);if(h>0){const{player:x,log:p}=It(se(m,n),h,te,ne(n));for(const _ of p)m=Z(m,_);m=he(m,n,x),g-=h}if(g>0&&d>0){const x=se(m,n),p=x.discard.filter(N=>!N.destroyed),_=x.discard.filter(N=>N.destroyed),{shuffled:b,nextSeed:v}=zm(p,m.shuffleSeed);m={...m,shuffleSeed:v};const y={...x,deck:[...x.deck,...b],discard:_};m=he(m,n,y),m=Z(m,`${ne(n)} 的卡组耗尽，弃牌区（${p.length} 张）洗入卡组`);const I=Math.min(g,p.length);if(I>0){const{player:N,log:T}=It(se(m,n),I,te,ne(n));for(const k of T)m=Z(m,k);m=he(m,n,N),g-=I}}if(g>0){const x=se(m,n),p=gt(x);if(p.length===0)return tn(m);if(p.length<=g){const{player:_,log:b}=It(x,g,te,ne(n));for(const v of b)m=Z(m,v);return m=he(m,n,_),tn(m)}return m=Z(m,`[${ne(n)}] 牌组与弃牌区已耗尽，切换为防方自选伤害模式`),{...m,pendingDamage:{targetId:n,remaining:g,selectedInstanceIds:[],destroyedBombCount:0,source:a,attackerId:r}}}return tn(m)}const f=a==="charge"?"突击":a==="mine"?"机雷":"近战";e=Z(e,`[${ne(n)}] 牌组与弃牌区已耗尽，本次${f}伤害切换为防方自选模式`)}if(s.length<=t){const{player:l,log:d}=It(i,t,te,ne(n));let u=e;for(const f of d)u=Z(u,f);return u=he(u,n,l),tn(u)}if(a==="ranged"){const l=$r(i).length,d=Math.min(t,l),u=t-d;if(d<=0){const{player:f,log:m}=It(i,t,te,ne(n));let g=e;for(const h of m)g=Z(g,h);return g=he(g,n,f),tn(g)}return{...e,pendingDamage:{targetId:n,remaining:d,selectedInstanceIds:[],destroyedBombCount:0,source:a,attackerId:r,deckAutoCount:u}}}return{...e,pendingDamage:{targetId:n,remaining:t,selectedInstanceIds:[],destroyedBombCount:0,source:a,attackerId:r}}}function qh(e,n){var x;const{attackerId:t,targetId:a}=n,r=e.phase==="action_seg1"?1:2,i=se(e,t),s=se(e,a);if(i.isDefeated||s.isDefeated)return e;e=$n(e,`RESOLVE_CHARGE: ${ne(t)}(${i.position.row},${i.position.col},${i.facing})→${ne(a)}(${s.position.row},${s.position.col},${s.facing}) seg=${r}`);const l=q.find(p=>p.id===i.unitId),d=q.find(p=>p.id===s.unitId),u=Qo(i,s,r,e.map,l,d,te);if(!u.canAttack)return Z(e,`${t} 突击无效：${u.reason}`);const f=l.nameCn,m=d.nameCn,g=((x=u.card)==null?void 0:x.nameCn)??"突击";let h=e;if(u.chargeDestination&&(u.chargeDestination.row!==i.position.row||u.chargeDestination.col!==i.position.col)){const p=u.chargeDestination,_={...i,position:p};h=he(h,t,_),h=Z(h,`${f} 发动突击冲锋，移动至 (${p.row}, ${p.col})`)}{const p=se(h,t),_=Om(p.position,s.position);_!==p.facing&&(h=he(h,t,{...p,facing:_}),h=Z(h,`${f} 突击后自动转向【${_}】`))}if(h=Z(h,`${f} 对 ${m} 发动${g}【突击值 ${l.assault}】→ 对目标造成 ${u.damage} 点近战伤害；自机承受反伤 ${u.counterDamage} 点`),u.counterDamage>0){h={...h,pendingFollowUpDamage:{targetId:t,amount:u.counterDamage,source:"charge",attackerId:a,weaponName:"突击反伤",seg:r}},h={...h,lastDamageContext:{attackerId:t,targetId:a,weaponName:g}};const p=ha(h,a,u.damage,"charge",r,void 0,g);if(!p.pendingDamage&&!p.pendingArmorChoice){if(p.phase==="game_over")return p;const b={...{...p,pendingFollowUpDamage:void 0},lastDamageContext:{attackerId:a,targetId:t,weaponName:"突击反伤"}};return ha(b,t,u.counterDamage,"charge",r)}return p}return h={...h,lastDamageContext:{attackerId:t,targetId:a,weaponName:g}},ha(h,a,u.damage,"charge",r,void 0,g)}function ni(e){if(!e.pendingFollowUpDamage||e.phase==="game_over")return ut(e);const{targetId:n,amount:t,source:a,attackerId:r,weaponName:i,seg:s}=e.pendingFollowUpDamage;let l={...e,pendingFollowUpDamage:void 0};return r&&i&&(l={...l,lastDamageContext:{attackerId:r,targetId:n,weaponName:i}}),ut(s?ha(l,n,t,a,s):yc(l,n,t,a))}function ex(e,n){const t=e.pendingDamage;if(!t)return e;const{playerId:a,instanceId:r}=n,i=t.selectedInstanceIds.length===0,s=!!t.attackerId&&i&&!t.attackerDesignatedCardId,l=s?t.attackerId:t.targetId;if(a!==l)return e;const d=se(e,t.targetId),u=gt(d).find(v=>v.instanceId===r&&!v.destroyed);if(!u||t.selectedInstanceIds.includes(r))return e;if(t.source==="ranged"&&!s){const v=$r(d);if(d.deck.some(I=>I.instanceId===r&&!I.destroyed)&&v.length>0)return e}const{player:f}=Si(d,u);let m=he(e,t.targetId,f);const g=te(u.defId),h=(g==null?void 0:g.nameCn)??u.defId,x=g!=null&&g.hasBombIcon?"【💣】":"";m=Z(m,`  ▶ [${ne(t.targetId)}] ${h} 被摧毁${x}`);let p=t.remaining-1;const _=(t.destroyedBombCount??0)+(g!=null&&g.hasBombIcon?1:0);if(p<=0){if(m={...m,pendingDamage:null},t.deckAutoCount&&t.deckAutoCount>0){const v=se(m,t.targetId),{player:y,log:I}=It(v,t.deckAutoCount,te,ne(t.targetId));for(const N of I)m=Z(m,N);m=he(m,t.targetId,y)}if(_>0){const v=se(m,t.targetId);m=Z(m,`  ─── 誘爆检查（${_}张炸弹卡被破坏）───`);const{player:y,log:I}=dl(v,_,te,ne(t.targetId));for(const N of I)m=Z(m,N);m=he(m,t.targetId,y)}return m=tn(m),ut(ni(m))}if(gt(se(m,t.targetId)).length===0){if(m={...m,pendingDamage:null},_>0){const v=se(m,t.targetId);m=Z(m,`  ─── 誘爆检查（${_}张炸弹卡被破坏）───`);const{player:y,log:I}=dl(v,_,te,ne(t.targetId));for(const N of I)m=Z(m,N);m=he(m,t.targetId,y)}return m=tn(m),ut(ni(m))}return m={...m,pendingDamage:{...t,remaining:p,selectedInstanceIds:[...t.selectedInstanceIds,r],destroyedBombCount:_,attackerDesignatedCardId:s?r:t.attackerDesignatedCardId}},m}function nx(e,n){const t=e.pendingDamage;if(!t)return e;const a=t.selectedInstanceIds.length===0,i=!!t.attackerId&&a&&!t.attackerDesignatedCardId?t.attackerId:t.targetId;if(n.playerId!==i)return e;const s=t.remaining+(t.deckAutoCount??0);if(s>0){const d=se(e,t.targetId),{player:u,log:f}=It(d,s,te,ne(t.targetId));let m=e;for(const g of f)m=Z(m,g);return m=he(m,t.targetId,u),m={...m,pendingDamage:null},m=tn(m),ut(ni(m))}let l={...e,pendingDamage:null};return ut(ni(l))}function Kd(e){const n=["movement","ranged","melee","special"],t=n.indexOf(e.currentTiming);if(t===-1){console.warn("[GameReducer] Invalid currentTiming:",e.currentTiming);const r=$n(e,`ADVANCE_TIMING: currentTiming 无效(${e.currentTiming})，强制推进阶段`);return gn(r,{type:"ADVANCE_PHASE"})}if(t<n.length-1){const r=n[t+1],i={...e,currentTiming:r},s={...i,turnOrder:ei(i)};return Z(s,`▸ ${qo(r)} — 行动顺序：${s.turnOrder.map(ne).join(" → ")}`)}const a=$n(e,`ADVANCE_TIMING: ${e.phase}/${e.currentTiming} 时机全部完成，推进到下一阶段`);return gn(a,{type:"ADVANCE_PHASE"})}function ut(e){return e.pendingAdvanceTiming?e.phase==="game_over"?{...e,pendingAdvanceTiming:!1}:e.pendingDamage||e.pendingArmorChoice||e.pendingFollowUpDamage?e:ti({...e,pendingAdvanceTiming:!1},!0):e}function ti(e,n){const t=e.mines.find(l=>e.playerIds.some(d=>!e.players[d].isDefeated&&be(e.players[d].position,l.position)));if(!t)return n?Kd({...e,pendingAdvanceTiming:!1}):e;const a=e.playerIds.find(l=>!e.players[l].isDefeated&&be(e.players[l].position,t.position));if(!a)return n?Kd({...e,pendingAdvanceTiming:!1}):e;let r={...e,mines:e.mines.filter(l=>l.id!==t.id),pendingAdvanceTiming:n,lastDamageContext:{attackerId:t.ownerId,targetId:a,weaponName:"机雷"}};if(r=Z(r,`时机结束时，(${t.position.row}, ${t.position.col}) 的隐藏指示物被翻开`),t.kind==="dummy")return r=Z(r,`翻开结果为替身雷，${ne(a)} 未受到伤害`),ti(r,n);r=Z(r,`翻开结果为机雷，爆炸对 ${ne(a)} 造成 ${t.damage} 点伤害！`);const i=e.phase==="action_seg2"?2:1,s=ha(r,a,t.damage,"mine",i,void 0,"机雷");return s.pendingDamage||s.pendingArmorChoice||s.pendingFollowUpDamage||s.phase==="game_over"?s:ti(s,n)}function Jd(e){return ti({...e,pendingAdvanceTiming:!1},!0)}function tx(e){var t,a;const n=$n(e,`ADVANCE_PHASE: ${e.phase} → 推进`);switch(e.phase){case"draw":{const r=n.playerIds.find(i=>!n.players[i].isDefeated)??n.playerIds[0];return{...n,phase:"plotting",plottingStep:`transition_to_${r}`,activePlayer:r,currentTiming:null}}case"plotting":{const i={...pl(n,1),phase:"action_seg1",plottingStep:"complete",currentTiming:"movement"};let l={...i,turnOrder:ei(i)};for(const d of l.playerIds){const u=l.players[d];if(u.isDefeated)continue;const f=u.plotSeg1?((t=te(u.plotSeg1.defId))==null?void 0:t.nameCn)??u.plotSeg1.defId:"(空)",m=u.plotSeg2?((a=te(u.plotSeg2.defId))==null?void 0:a.nameCn)??u.plotSeg2.defId:"(空)";l=$n(l,`${ne(d)} 配置: 阶段1=[${f}] 阶段2=[${m}] 位置=${u.position.row},${u.position.col} 朝向=${u.facing}`)}return Z(l,`▸ ${qo("movement")} — 行动顺序：${l.turnOrder.map(ne).join(" → ")}`)}case"action_seg1":{const i={...pl(n,2),phase:"action_seg2",currentTiming:"movement"},s={...i,turnOrder:ei(i)};return Z(s,`▸ ${qo("movement")} — 行动顺序：${s.turnOrder.map(ne).join(" → ")}`)}case"action_seg2":return ax(n);default:return n}}function ax(e){let n=$n(e,`CLEANUP: 第${e.roundNumber}回合结束`);for(const l of e.playerIds){const d=e.players[l];n=$n(n,`  ${ne(l)}: 位置=(${d.position.row},${d.position.col}) 朝向=${d.facing} 手牌=${d.hand.length} 牌组=${d.deck.filter(u=>!u.destroyed).length} 弃牌=${d.discard.length} ${d.isDefeated?"已击破":"存活"}`)}e=n;const t=(l,d)=>!d||d.destroyed?l:{...l,discard:[...l.discard,d]},a={...e.players};for(const l of e.playerIds){let d=t(e.players[l],e.players[l].plotSeg1);d=t(d,d.plotSeg2),d={...d,plotSeg1:null,plotSeg2:null},d={...d,discard:[...d.discard,...d.hand.filter(u=>!u.destroyed)],hand:[]},a[l]=d}const r={...e,players:a,phase:"cleanup",currentTiming:null},i=Z(r,`--- 第 ${e.roundNumber} 回合结束 ---`),s=tn(i);return s.phase==="game_over"?s:rx(s)}function rx(e){var r;const n=e.roundNumber+1;let t=Z({...e,phase:"draw",roundNumber:n},`=== 第 ${n} 回合开始 ===`);for(const i of e.playerIds){if(t.players[i].isDefeated)continue;const s=((r=q.find(l=>l.id===t.players[i].unitId))==null?void 0:r.evasion)??5;t=bc(t,{playerId:i,count:s})}const a=e.playerIds.find(i=>!t.players[i].isDefeated)??e.playerIds[0];return{...t,phase:"plotting",plottingStep:`transition_to_${a}`,activePlayer:a,currentTiming:null}}function tn(e){const n=s=>{const l=[...s.deck,...s.hand,...s.auxiliary,...s.discard,...s.plotSeg1?[s.plotSeg1]:[],...s.plotSeg2?[s.plotSeg2]:[]].filter(u=>!u.destroyed);return l.length>3?!1:!l.some(u=>{const f=te(u.defId);return f&&(f.actionType==="ranged"||f.actionType==="melee"||f.actionType==="charge"||f.actionType==="mine")})},t={...e.players};let a=!1;for(const s of e.playerIds){if(t[s].isDefeated)continue;n(t[s])&&(t[s]={...t[s],isDefeated:!0},a=!0)}if(!a)return e;let r={...e,players:t};for(const s of e.playerIds)if(!e.players[s].isDefeated&&r.players[s].isDefeated){const l=q.find(m=>m.id===r.players[s].unitId),d=e.playerIds.indexOf(s),u=d>=0?`P${d+1}`:s,f=r.lastDamageContext;if(f&&f.targetId===s&&f.attackerId){const m=q.find(x=>{var p;return x.id===((p=r.players[f.attackerId])==null?void 0:p.unitId)}),g=e.playerIds.indexOf(f.attackerId),h=g>=0?`P${g+1}`:f.attackerId;r=Z(r,`💀 ${u}[${(l==null?void 0:l.nameCn)??s}] 被 ${h}[${(m==null?void 0:m.nameCn)??f.attackerId}] 以【${f.weaponName}】击毁！`)}else r=Z(r,`💀 ${u}[${(l==null?void 0:l.nameCn)??s}] 机体严重受损，宣告报废！`)}const i=new Set;for(const s of e.playerIds)r.players[s].isDefeated||i.add(r.teams[s]);if(i.size<=1){if(i.size===0)return Z({...r,phase:"game_over"},"所有队伍同时全灭！平局！");const s=[...i][0],l=e.playerIds.filter(d=>r.teams[d]===s).map(d=>{const u=q.find(f=>f.id===r.players[d].unitId);return(u==null?void 0:u.nameCn)??d}).join("、");return Z({...r,phase:"game_over"},`队伍${s+1}（${l}）获胜！`)}return r}function ox(e,n){if(e.currentTiming!=="melee")return e;const{playerId:t,to:a}=n,r=se(e,t),i=e.playerIds.filter(f=>f!==t).map(f=>se(e,f).position);if(!fn(r,te,"melee").moveSensor)return Z(e,`${t} 移动传感器未激活（需要辅助区中有≥2张）`);if(!Lm(e.map,r.position,i).some(f=>be(f,a)))return Z(e,`${t} 移动传感器目标格不在有效范围内`);const d={...r,position:a};let u=he(e,t,d);return u=Z(u,`【辅助】${t} 移动传感器：向 (${a.row}, ${a.col}) 移动1格`),u}function ix(e,n){const{playerId:t,facing:a}=n,r=se(e,t),s=(e.phase==="action_seg2"?2:1)===1?r.plotSeg1:r.plotSeg2,l=s?te(s.defId):null;if(!(e.currentTiming==="melee"&&(l==null?void 0:l.actionType)==="melee"||e.currentTiming==="special"&&(l==null?void 0:l.actionType)==="aim"||e.currentTiming==="ranged"&&xc(l)))return Z(e,`${ne(t)} 当前时机不可调整朝向`);const u=q.find(g=>g.id===r.unitId),f=(u==null?void 0:u.nameCn)??t;let m=he(e,t,{...r,facing:a});return m=Z(m,`${f} 调整机头朝向至【${a}】`),m}function gn(e,n){switch(n.type){case"SELECT_UNIT":return Kh(e,n);case"SELECT_MAP":return Jh(e,n);case"CONFIRM_SETUP":return Gh(e);case"START_PLOTTING":return Hh(e);case"SET_SPAWN_POSITION":return Bh(e,n);case"SET_SPAWN_FACING":return Fh(e,n);case"DRAW_CARDS":return bc(e,n);case"PLOT_CARD":return Uh(e,n);case"CONFIRM_PLOT":return Wh(e,n);case"ADVANCE_PLOT_STEP":return Zh(e);case"MOVE_UNIT":return Yh(e,n);case"ADJUST_FACING":return ix(e,n);case"ADVANCE_TIMING":return Jd(e);case"ADVANCE_PHASE":return tx(e);case"SKIP_ACTION":return Jd(e);case"RESET_GAME":return Km(n.playerCount??2,n.teamCount??2);case"LOAD_GAME":return n.state;case"ADD_LOG":return Z(e,n.message);case"RESOLVE_RANGED":return Od(e,n,"ranged");case"RESOLVE_MELEE":return Od(e,n,"melee");case"RESOLVE_CHARGE":return qh(e,n);case"PLACE_MINE":return Xh(e,n);case"SELECT_DAMAGE_CARD":return ex(e,n);case"CONFIRM_DAMAGE_SELECTION":return nx(e,n);case"CONFIRM_ARMOR_CHOICE":return Qh(e,n);case"MELEE_SENSOR_MOVE":return ox(e,n);default:return e}}class sx{constructor(){en(this,"ctx",null);en(this,"_enabled",!0);en(this,"_volume",.5)}init(){this.ctx||(this.ctx=new AudioContext),this.ctx.state==="suspended"&&this.ctx.resume()}get enabled(){return this._enabled}set enabled(n){this._enabled=n}get volume(){return this._volume}set volume(n){this._volume=Math.max(0,Math.min(1,n))}ensure(){return!this._enabled||!this.ctx?null:(this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx)}makeGain(n,t){const a=n.createGain();return a.gain.value=t*this._volume,a.connect(n.destination),a}noiseBuffer(n,t){const a=Math.floor(n.sampleRate*t),r=n.createBuffer(1,a,n.sampleRate),i=r.getChannelData(0);for(let s=0;s<a;s++)i[s]=Math.random()*2-1;return r}cardFlip(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createBufferSource();a.buffer=this.noiseBuffer(n,.06);const r=n.createBiquadFilter();r.type="highpass",r.frequency.value=3e3;const i=this.makeGain(n,.25);i.gain.setValueAtTime(.25*this._volume,t),i.gain.exponentialRampToValueAtTime(.001,t+.05),a.connect(r),r.connect(i),a.start(t),a.stop(t+.06)}footstep(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createOscillator();a.type="sine",a.frequency.setValueAtTime(150,t),a.frequency.exponentialRampToValueAtTime(60,t+.05);const r=this.makeGain(n,.2);r.gain.setValueAtTime(.2*this._volume,t),r.gain.exponentialRampToValueAtTime(.001,t+.08),a.connect(r),a.start(t),a.stop(t+.08);const i=n.createBufferSource();i.buffer=this.noiseBuffer(n,.03);const s=n.createBiquadFilter();s.type="bandpass",s.frequency.value=800,s.Q.value=2;const l=this.makeGain(n,.1);l.gain.setValueAtTime(.1*this._volume,t),l.gain.exponentialRampToValueAtTime(.001,t+.03),i.connect(s),s.connect(l),i.start(t),i.stop(t+.03)}weaponFire(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createBufferSource();a.buffer=this.noiseBuffer(n,.15);const r=n.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(1200,t),r.frequency.exponentialRampToValueAtTime(400,t+.12),r.Q.value=3;const i=this.makeGain(n,.3);i.gain.setValueAtTime(.3*this._volume,t),i.gain.exponentialRampToValueAtTime(.001,t+.15),a.connect(r),r.connect(i),a.start(t),a.stop(t+.15);const s=n.createOscillator();s.type="sawtooth",s.frequency.setValueAtTime(800,t),s.frequency.exponentialRampToValueAtTime(200,t+.12);const l=this.makeGain(n,.15);l.gain.setValueAtTime(.15*this._volume,t),l.gain.exponentialRampToValueAtTime(.001,t+.12),s.connect(l),s.start(t),s.stop(t+.12)}metalImpact(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=[200,340];for(const s of a){const l=n.createOscillator();l.type="sine",l.frequency.value=s;const d=this.makeGain(n,.2);d.gain.setValueAtTime(.2*this._volume,t),d.gain.exponentialRampToValueAtTime(.001,t+.25),l.connect(d),l.start(t),l.stop(t+.25)}const r=n.createBufferSource();r.buffer=this.noiseBuffer(n,.02);const i=this.makeGain(n,.25);i.gain.setValueAtTime(.25*this._volume,t),i.gain.exponentialRampToValueAtTime(.001,t+.02),r.connect(i),r.start(t),r.stop(t+.02)}explosion(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createOscillator();a.type="sine",a.frequency.setValueAtTime(60,t),a.frequency.exponentialRampToValueAtTime(30,t+.5);const r=this.makeGain(n,.35);r.gain.setValueAtTime(.35*this._volume,t),r.gain.setValueAtTime(.35*this._volume,t+.1),r.gain.exponentialRampToValueAtTime(.001,t+.5),a.connect(r),a.start(t),a.stop(t+.5);const i=n.createBufferSource();i.buffer=this.noiseBuffer(n,.4);const s=n.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(3e3,t),s.frequency.exponentialRampToValueAtTime(200,t+.35);const l=this.makeGain(n,.3);l.gain.setValueAtTime(.3*this._volume,t),l.gain.exponentialRampToValueAtTime(.001,t+.35),i.connect(s),s.connect(l),i.start(t),i.stop(t+.4)}cardShatter(){const n=this.ensure();if(!n)return;const t=n.currentTime;for(let a=0;a<5;a++){const r=t+a*.03,i=n.createBufferSource();i.buffer=this.noiseBuffer(n,.02);const s=n.createBiquadFilter();s.type="highpass",s.frequency.value=1e3+a*300;const l=this.makeGain(n,.2);l.gain.setValueAtTime(.2*this._volume,r),l.gain.exponentialRampToValueAtTime(.001,r+.02),i.connect(s),s.connect(l),i.start(r),i.stop(r+.02)}}mineBeep(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=[600,800,1e3];for(let r=0;r<a.length;r++){const i=t+r*.1,s=n.createOscillator();s.type="sine",s.frequency.value=a[r];const l=this.makeGain(n,.15);l.gain.setValueAtTime(.15*this._volume,i),l.gain.setValueAtTime(.15*this._volume,i+.05),l.gain.exponentialRampToValueAtTime(.001,i+.08),s.connect(l),s.start(i),s.stop(i+.08)}}chargeRumble(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(80,t),a.frequency.linearRampToValueAtTime(120,t+.3);const r=n.createOscillator();r.type="sine",r.frequency.value=15;const i=n.createGain();i.gain.value=.15*this._volume;const s=this.makeGain(n,.25);s.gain.setValueAtTime(.25*this._volume,t),s.gain.exponentialRampToValueAtTime(.001,t+.4),r.connect(i),i.connect(s.gain),a.connect(s),r.start(t),a.start(t),r.stop(t+.4),a.stop(t+.4)}uiBlip(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createOscillator();a.type="sine",a.frequency.value=880;const r=this.makeGain(n,.1);r.gain.setValueAtTime(.1*this._volume,t),r.gain.exponentialRampToValueAtTime(.001,t+.06),a.connect(r),a.start(t),a.stop(t+.06)}}const fe=new sx,lx={move_step:200,card_draw:350,ranged_hit:400,melee_hit:350,charge_move:300,charge_hit:450,card_destroy:400,mine_explode:500,mine_place:300,screen_shake:300,damage_number:600,cleanup_discard:2500,batch_card_draw:1600,deck_reshuffle:800};function cx(e){return lx[e.type]??300}const Jm=j.createContext(null);function Ei({children:e}){const[n,t]=j.useState(!1),[a,r]=j.useState(null),[i,s]=j.useState(()=>Object.fromEntries(ga.map(x=>[x,null]))),l=j.useRef([]),d=j.useRef(!1),u=j.useRef(!1),f=j.useRef((()=>{try{const x=localStorage.getItem("em_anim_speed");return x==="fast"?.5:x==="off"?0:1}catch{return 1}})()).current,m=j.useCallback(()=>{if(u.current||l.current.length===0){r(null),t(!1),s(Object.fromEntries(ga.map(_=>[_,null]))),d.current=!1,u.current=!1;return}const x=l.current.shift();r(x),x.type==="move_step"&&s(_=>({..._,[x.playerId]:{pos:x.to,facing:x.facing}})),dx(x);const p=f===0?0:cx(x)*f;p===0?m():setTimeout(()=>m(),p)},[f]),g=j.useCallback(x=>{if(x.length!==0&&f!==0&&(l.current.push(...x),!d.current)){d.current=!0,u.current=!1,t(!0);const p=x.find(_=>_.type==="move_step");p&&s(_=>({..._,[p.playerId]:{pos:p.from,facing:p.facing}})),setTimeout(()=>m(),16)}},[m,f]),h=j.useCallback(()=>{u.current=!0,l.current=[],r(null),t(!1),s(Object.fromEntries(ga.map(x=>[x,null]))),d.current=!1},[]);return o.jsx(Jm.Provider,{value:{isAnimating:n,currentEvent:a,animatedPositions:i,enqueueEvents:g,skipAnimation:h,speedMultiplier:f},children:e})}function Ar(){const e=j.useContext(Jm);if(!e)throw new Error("useAnimation must be used inside <AnimationProvider>");return e}function dx(e){switch(e.type){case"card_draw":fe.cardFlip();break;case"move_step":fe.footstep();break;case"ranged_hit":fe.weaponFire(),setTimeout(()=>fe.metalImpact(),100);break;case"melee_hit":fe.metalImpact();break;case"charge_move":fe.chargeRumble();break;case"charge_hit":fe.explosion(),setTimeout(()=>fe.metalImpact(),80);break;case"card_destroy":e.isBomb?fe.explosion():fe.cardShatter();break;case"mine_explode":fe.explosion();break;case"mine_place":fe.mineBeep();break;case"cleanup_discard":case"batch_card_draw":fe.cardFlip();break;case"deck_reshuffle":fe.cardFlip(),setTimeout(()=>fe.cardFlip(),200);break}}function ux(e,n){const{isAnimating:t,enqueueEvents:a}=Ar();return j.useCallback(r=>{const i=r.type==="ADVANCE_TIMING"||r.type==="ADVANCE_PHASE"||r.type==="ADJUST_FACING"||r.type==="START_PLOTTING"||r.type==="SELECT_DAMAGE_CARD"||r.type==="CONFIRM_DAMAGE_SELECTION";if(t&&!i)return;const s=n.current,l=gn(s,r);e(r);const d=px(s,l,r);d.length>0&&a(d)},[e,n,t,a])}function px(e,n,t){switch(t.type){case"MOVE_UNIT":return mx(e,n,t);case"RESOLVE_RANGED":return Bd(e,n,"ranged",t.attackerId,t.targetId);case"RESOLVE_MELEE":return Bd(e,n,"melee",t.attackerId,t.targetId);case"RESOLVE_CHARGE":return fx(e,n,t.attackerId,t.targetId);case"DRAW_CARDS":return gx(e,n,t.playerId);case"ADVANCE_TIMING":return e.phase==="action_seg2"&&n.phase!=="action_seg2"?[hx(e),...Fd(e,n,"player1"),...Fd(e,n,"player2")]:[];case"PLACE_MINE":return(t.placements??(t.to?[{position:t.to,kind:"real"}]:[])).map(a=>({type:"mine_place",playerId:t.playerId,position:a.position}));case"SELECT_DAMAGE_CARD":return xx(e,n);default:return[]}}function mx(e,n,t){const{playerId:a}=t,r=hn(e,a),i=hn(n,a),s=r.position;if(be(s,i.position))return[];const l=[],d=t.path&&t.path.length>0?t.path:[i.position];let u=s;for(const g of d){const h=Pm(g.row-u.row,g.col-u.col);if(l.push({type:"move_step",playerId:a,from:u,to:g,facing:h}),u=g,be(g,i.position))break}const f=e.mines.filter(g=>!n.mines.some(h=>h.id===g.id));for(const g of f)g.kind==="real"&&(l.push({type:"mine_explode",position:g.position,damage:g.damage}),l.push({type:"screen_shake",intensity:"heavy"}));const m=Di(e,n,a);return $i(l,a,m),l}function Bd(e,n,t,a,r){var f;const i=[],s=hn(e,r).position,l=Di(e,n,r),d=l.length;if(d===0&&!n.pendingDamage)return[];const u=d+(((f=n.pendingDamage)==null?void 0:f.remaining)??0);return i.push({type:t==="ranged"?"ranged_hit":"melee_hit",attackerId:a,targetId:r,damage:u,targetPos:s}),i.push({type:"screen_shake",intensity:t==="melee"?"medium":"light"}),u>0&&i.push({type:"damage_number",position:s,value:u}),$i(i,r,l),i}function fx(e,n,t,a){var f;const r=[],i=hn(e,t),s=hn(n,t),l=hn(e,a).position;be(i.position,s.position)||(r.push({type:"charge_move",attackerId:t,from:i.position,to:s.position}),r.push({type:"move_step",playerId:t,from:i.position,to:s.position,facing:Pm(s.position.row-i.position.row,s.position.col-i.position.col)}));const d=Di(e,n,a),u=d.length+(((f=n.pendingDamage)==null?void 0:f.remaining)??0);return r.push({type:"charge_hit",attackerId:t,targetId:a,damage:u,targetPos:l}),r.push({type:"screen_shake",intensity:"heavy"}),u>0&&r.push({type:"damage_number",position:l,value:u}),$i(r,a,d),r}function gx(e,n,t){const a=[],r=hn(e,t),i=hn(n,t),s=new Set(r.hand.map(u=>u.instanceId)),l=i.hand.filter(u=>!s.has(u.instanceId));if(l.length>0){const u=r.deck.filter(g=>!g.destroyed).length,f=Math.min(l.length,u),m=l.length-f;f>0&&a.push({type:"batch_card_draw",playerId:t,count:f}),m>0&&(a.push({type:"deck_reshuffle",playerId:t}),a.push({type:"batch_card_draw",playerId:t,count:m}))}const d=new Set(r.auxiliary.map(u=>u.instanceId));for(const u of i.auxiliary)d.has(u.instanceId)||a.push({type:"card_draw",playerId:t,card:u,defId:u.defId,isAuxiliary:!0});return a}function hx(e){function n(t){const a=[];for(const r of t.hand)r.destroyed||a.push(r);return t.plotSeg1&&!t.plotSeg1.destroyed&&a.push(t.plotSeg1),t.plotSeg2&&!t.plotSeg2.destroyed&&a.push(t.plotSeg2),a}return{type:"cleanup_discard",p1Cards:n(e.players.player1),p2Cards:n(e.players.player2)}}function Fd(e,n,t){const a=[],r=hn(e,t),i=hn(n,t),s=i.hand.length;if(s>0){const d=r.deck.filter(m=>!m.destroyed).length,u=Math.min(s,d),f=s-u;u>0&&a.push({type:"batch_card_draw",playerId:t,count:u}),f>0&&(a.push({type:"deck_reshuffle",playerId:t}),a.push({type:"batch_card_draw",playerId:t,count:f}))}const l=new Set(r.auxiliary.map(d=>d.instanceId));for(const d of i.auxiliary)l.has(d.instanceId)||a.push({type:"card_draw",playerId:t,card:d,defId:d.defId,isAuxiliary:!0});return a}function xx(e,n){const t=e.pendingDamage;if(!t)return[];const a=Di(e,n,t.targetId),r=[];return $i(r,t.targetId,a),r}function hn(e,n){return e.players[n]}function Di(e,n,t){const a=new Set(hn(e,t).destroyedCards.map(r=>r.instanceId));return hn(n,t).destroyedCards.filter(r=>!a.has(r.instanceId))}function $i(e,n,t){for(let a=0;a<t.length;a++){const r=t[a],i=te(r.defId);e.push({type:"card_destroy",playerId:n,card:r,defId:r.defId,isBomb:(i==null?void 0:i.hasBombIcon)??!1,index:a,total:t.length})}}const vx={player1:!1,player2:!1,player1Difficulty:"hard",player2Difficulty:"hard",playerAI:{},playerDifficulty:{}};function Ae(e,n){var t;return((t=e.playerAI)==null?void 0:t[n])!==void 0?e.playerAI[n]:n==="player1"?e.player1:n==="player2"?e.player2:!1}function zr(e,n){var t;return((t=e.playerDifficulty)==null?void 0:t[n])!==void 0?e.playerDifficulty[n]:n==="player1"?e.player1Difficulty:n==="player2"?e.player2Difficulty:"hard"}function _c(e,n){const t=e.teams[n];return e.playerIds.filter(a=>a!==n&&e.teams[a]!==t&&!e.players[a].isDefeated)}function Ai(e,n){const t=e.players[n].position,a=_c(e,n);if(a.length===0)return e.playerIds.find(s=>s!==n)??n;let r=a[0],i=1/0;for(const s of a){const l=Ke(t,e.players[s].position);l<i&&(i=l,r=s)}return r}function Jn(e,n){return e.players[n]}function ia(e,n){const t=n.row-e.row,a=n.col-e.col;return Math.abs(t)>=Math.abs(a)?t<0?"N":"S":a>0?"E":"W"}function Oa(e){const n={};for(const t of e)t.destroyed||(n[t.defId]=(n[t.defId]??0)+1);return n}function bx(e){return Object.values(e).reduce((n,t)=>n+t,0)}function yx(e,n){const t={...e};for(const[a,r]of Object.entries(n))t[a]&&(t[a]=Math.max(0,t[a]-r),t[a]===0&&delete t[a]);return t}function Ic(e,n){const t={};for(const[a,r]of Object.entries(e)){const i=n(a),s=(i==null?void 0:i.actionType)??"unknown";t[s]=(t[s]??0)+r}return t}function Ka(e,n,t){if(e<=0||n<=0||t<=0)return 0;const a=Math.min(t,n);let r=1;for(let i=0;i<a;i++)r*=Math.max(0,(n-e-i)/(n-i));return 1-r}function ml(e){const n=Object.entries(e).filter(([,t])=>t>0).sort((t,a)=>a[1]-t[1]).slice(0,4).map(([t,a])=>`${t}${a}`);return n.length>0?n.join("、"):"无"}function Tt(e,n,t){const a=Oa((Vt[e.unitId]??[]).map(g=>({instanceId:`${g.id}-template`,defId:g.id,destroyed:!1}))),r=t==="self"?Oa(e.hand):{},i=t==="self"?Oa(e.deck):{},s=Oa([...e.auxiliary,...e.discard,...e.destroyedCards,...e.plotSeg1?[e.plotSeg1]:[],...e.plotSeg2?[e.plotSeg2]:[]]),l=t==="self"?Oa([...e.hand,...e.deck,...e.auxiliary,...e.discard,...e.destroyedCards,...e.plotSeg1?[e.plotSeg1]:[],...e.plotSeg2?[e.plotSeg2]:[]]):s,d=t==="self"?i:yx(a,l),u=bx(d),f=Ic(d,n),m=g=>Object.entries(d).reduce((h,[x,p])=>{const _=n(x);return h+((_==null?void 0:_.actionType)===g?p:0)},0);return{playerId:e.id,unitId:e.unitId,perspective:t,handSize:e.hand.filter(g=>!g.destroyed).length,deckSize:e.deck.filter(g=>!g.destroyed).length,exactHandCounts:r,exactDeckCounts:i,hiddenPoolCounts:d,actionTypeCounts:f,armorInHiddenHandProb:Ka(m("armor"),u,e.hand.length),rangedInHiddenHandProb:Ka(m("ranged"),u,e.hand.length),meleeInHiddenHandProb:Ka(m("melee"),u,e.hand.length),chargeInHiddenHandProb:Ka(m("charge"),u,e.hand.length),movementInHiddenHandProb:Ka(m("movement"),u,e.hand.length)}}function Bm(e,n){let t=0;return n<=5&&(t+=e.rangedInHiddenHandProb*2.2),n<=2&&(t+=e.meleeInHiddenHandProb*2.4),n<=3&&(t+=e.chargeInHiddenHandProb*2),n>=3&&(t+=e.movementInHiddenHandProb*.8),t}function Ie(e){return`[AI][${e.replace("player","P")}]`}function _x(e,n,t,a,r,i){if(!n)return 0;const s=Ke(t.position,a.position);let l;switch(n.actionType){case"ranged":case"melee":case"charge":l=5+(n.damage??0);break;case"movement":l=2+(n.movementValue??0)*.5;break;case"aim":case"armor":case"special":l=2;break;case"mine":l=1.5+(n.damage??0)*.2;break;default:l=1}n.hasBombIcon&&(i?l+=5:l+=8);const u=gt(t).filter(g=>g.defId===e.defId&&!g.destroyed).length;u>=3?l-=3:u===2&&(l-=1.5);const f=q.find(g=>g.id===t.unitId),m=(f==null?void 0:f.movement)??3;if(n.actionType==="movement"&&(s>=4?l+=3:s<=2&&(l-=.5)),n.actionType==="ranged"||n.actionType==="melee"||n.actionType==="charge"){const g=et(n,s,m);g>=.8?l+=4:g>=.4?l+=2:g>=.1?l+=.5:l-=2}return l}function Ht(e,n,t,a,r,i){if(e.actionType!=="movement")return[];const s=fn(n,r,"movement"),l=(e.movementValue??0)+(s.wheel?2:0);if(l<=0)return[];const d=[t.position],u=Mi(a,n.position,l,d,s,n.facing),f=[];for(const{pos:m}of u)Ti(a,n.position,n.facing,m,l,[t.position],s)&&f.push({pos:m,dist:Ke(m,t.position)});return f.sort((m,g)=>m.dist-g.dist),f}function Ix(e,n,t,a,r,i){const s=Ht(e,t,a,r,i);if(s.length===0)return null;if(n.actionType==="melee"){const l=s.find(d=>d.dist===1);return l?{...l,facing:ia(l.pos,a.position)}:null}if(n.actionType==="ranged"){const l=n.rangeMin??1,d=n.rangeMax??6,u=n.rangeOptimal??Math.round((l+d)/2);let f=null,m=1/0;for(const g of s){if(g.dist<l||g.dist>d||!ja(r,g.pos,a.position))continue;const h=ia(g.pos,a.position);if(!ft(h,g.pos,a.position))continue;const x=Math.abs(g.dist-u);x<m&&(m=x,f=g)}return f?{...f,facing:ia(f.pos,a.position)}:null}if(n.actionType==="charge"){const l=s.find(d=>d.dist<=3);return l?{...l,facing:ia(l.pos,a.position)}:null}return null}function ar(e,n,t,a,r,i,s){var u;let l=e.damage??0;if(e.actionType==="ranged"&&e.rangeOptimal!==void 0&&e.damageAttenuation!==void 0){const f=Math.max(0,t-e.rangeOptimal);l-=f*e.damageAttenuation}const d=(u=s.cells[n.row])==null?void 0:u[n.col];return(d==null?void 0:d.terrain)==="water"&&e.isEnergyWeapon&&(l-=1),Math.max(0,l)}function kx(e){return e.armorInHiddenHandProb}function jx(e,n,t,a,r,i,s,l){var v,y;const d=Ke(t.position,a.position),u=(v=r.cells[a.position.row])==null?void 0:v[a.position.col],f=(y=r.cells[t.position.row])==null?void 0:y[t.position.col],m=kx(l),g=Bm(l,d),h=I=>["ranged","melee","charge"].includes(I.actionType),x=(u==null?void 0:u.terrain)==="forest"?.85:1,p=s.actionTypeCounts.movement??0,_=s.actionTypeCounts.armor??0;if(e.actionType==="movement"&&h(n)){const I=Ix(e,n,t,a,r,i);if(I)return ar(n,I.pos,I.dist,2,!1,!1,r)*(1-m*.5)*x*3.5+2+Math.max(0,1.5-g*.25);const N=Ht(e,t,a,r,i),T=N.length>0?N[0].dist:d,k=d-T,S=e.movementValue??0,$=et(n,T,S);return k*1.5+(n.damage??0)*$*.8+(p<=1&&d>4?.6:0)}if(e.actionType==="aim"&&h(n)){let I=(n.damage??0)+1,N=!1;if(n.actionType==="ranged"){const S=n.rangeMin??1,$=n.rangeMax??6;if(N=d>=S&&d<=$&&ja(r,t.position,a.position)&&ft(t.facing,t.position,a.position),N&&n.rangeOptimal&&n.damageAttenuation){const E=Math.max(0,d-n.rangeOptimal);I-=E*n.damageAttenuation}(f==null?void 0:f.terrain)==="water"&&n.isEnergyWeapon&&(I-=1)}else n.actionType==="melee"?N=d===1:n.actionType==="charge"&&(N=d<=3);I=Math.max(0,I);const T=I*(1-m*.5)*x;if(N)return T*4+3-m*.8;const k=et(n,d,3);return T*.5*k+.1}if(h(e)&&n.actionType==="movement"){let I=0;if(e.actionType==="ranged"){const k=e.rangeMin??1,S=e.rangeMax??6;if(d>=k&&d<=S&&ja(r,t.position,a.position)&&ft(t.facing,t.position,a.position))I=ar(e,t.position,d,1,!1,!1,r)*(1-m*.5)*x*2.5;else{const E=et(e,d,n.movementValue??0);I=(e.damage??0)*E*.8}}else if(e.actionType==="melee")if(d===1)I=ar(e,t.position,d,1,!1,!1,r)*(1-m*.5)*3;else{const k=et(e,d,n.movementValue??0);I=(e.damage??0)*k*.8}else if(e.actionType==="charge")if(d<=3)I=(e.damage??0)*2;else{const k=et(e,d,n.movementValue??0);I=(e.damage??0)*k*.8}const N=Ht(n,t,a,r,i),T=N.length>0?Math.max(0,d-N[0].dist)*1+1:.5;return I+T}if(h(e)&&n.actionType==="armor"){let I=no(e,d,t.position,t.facing,a.position,r,x,m,1);const N=(d<=3?2.5:d<=5?1.5:.5)+g*.5;return I+N}if(e.actionType==="armor"&&h(n)){const I=(d<=3?2.5:d<=5?1.5:.5)+g*.5;let N=no(n,d,t.position,t.facing,a.position,r,x,m,2);return I+N}if(e.actionType==="movement"&&n.actionType==="movement"){if(d<=3)return 1;const I=Ht(e,t,a,r,i),N=I.length>0?I[0].dist:d,T=d-N,k=n.movementValue??0;return(T+Math.min(k,N-1))*1.2+.5}if(h(e)&&h(n)){const I=no(e,d,t.position,t.facing,a.position,r,x,m,1),N=no(n,d,t.position,t.facing,a.position,r,x,m,2),T=I>1&&N>1;return I+N+(T?2:0)}if(e.actionType==="movement"&&n.actionType==="armor"){const I=Ht(e,t,a,r,i),N=I.length>0?I[0].dist:d;return(d-N)*1+(N<=3?2:.5)}if(e.actionType==="armor"&&n.actionType==="movement"){const I=(d<=3?2:.5)+g*.3,N=Ht(n,t,a,r,i),T=N.length>0?N[0].dist:d;return I+(d-T)*1}if(e.actionType==="aim"&&!h(n))return .3+to(n,d);if(e.actionType==="mine"||n.actionType==="mine"){const I=d<=3?1.5:.5,N=e.actionType==="mine"?n:e;return I+to(N,d)+l.movementInHiddenHandProb}const b=_<=1&&g>2.4&&e.actionType!=="armor"&&n.actionType!=="armor"?-.8:0;return to(e,d)+to(n,d)+b}function et(e,n,t){if(e.actionType==="ranged"){const a=e.rangeMin??1,r=e.rangeMax??6;if(n>=a&&n<=r)return 1;const i=n<a?a-n:n-r;return i<=t?.6-i*.1:Math.max(0,.15-(i-t)*.05)}if(e.actionType==="melee"){if(n===1)return 1;const a=n-1;return a<=t?.6-a*.1:Math.max(0,.15-(a-t)*.05)}if(e.actionType==="charge"){if(n<=3)return 1;const a=n-3;return a<=t?.6-a*.1:Math.max(0,.15-(a-t)*.05)}return 0}function no(e,n,t,a,r,i,s,l,d){const u=et(e,n,3);if(e.actionType==="ranged"){const f=e.rangeMin??1,m=e.rangeMax??6;return n>=f&&n<=m&&ja(i,t,r)&&ft(a,t,r)?ar(e,t,n,d,!1,!1,i)*(1-l*.5)*s*2.5:(e.damage??0)*u*.8}return e.actionType==="melee"?n===1?ar(e,t,n,d,!1,!1,i)*(1-l*.5)*3:(e.damage??0)*u*.8:e.actionType==="charge"?n<=3?(e.damage??0)*2:(e.damage??0)*u*.8:0}function to(e,n){switch(e.actionType){case"movement":return(e.movementValue??0)*.4+(n>3?1:.2);case"armor":return n<=3?2:n<=5?1:.3;case"aim":return .3;case"mine":return n<=3?1.5:.5;case"special":return 1;case"ranged":case"melee":case"charge":{const t=et(e,n,3);return(e.damage??0)*t*.5+.1}default:return .1}}function wx(e,n,t,a,r){var p;const i=e.hand.filter(_=>!_.destroyed),s=Tt(e,t,"self");if(i.length===0)return{seg1:null,seg2:null,reasoning:[`${Ie(e.id)} 手牌为空，无法布局。`]};if(i.length===1)return{seg1:i[0].instanceId,seg2:null,reasoning:[`${Ie(e.id)} 仅剩 1 张手牌，直接配置【${((p=t(i[0].defId))==null?void 0:p.nameCn)??i[0].defId}】。`]};if(a==="easy"){const _=[...i].sort(()=>Math.random()-.5);return{seg1:_[0].instanceId,seg2:_[1].instanceId,reasoning:[`${Ie(e.id)} 简单 AI 随机布局。`]}}const l=Array.isArray(n)?n:[n];let d=-1/0,u=i[0].instanceId,f=i[1].instanceId,m=null,g=null,h=null;for(let _=0;_<i.length;_++){const b=i[_],v=t(b.defId);if(v)for(let y=0;y<i.length;y++){if(_===y)continue;const I=i[y],N=t(I.defId);if(!N)continue;let T=0,k=null;if(r)for(const S of l){const $=Tt(S,t,"opponent"),E=jx(v,N,e,S,r,t,s,$);E>T&&(T=E,k=S)}T>d&&(d=T,u=b.instanceId,f=I.instanceId,m=k,g=v,h=N)}}const x=[`${Ie(e.id)} 布局评估：手牌${i.length}张，剩余牌池=${ml(Ic(s.exactDeckCounts,t))}。`];if(m&&g&&h){const _=Tt(m,t,"opponent");x.push(`${Ie(e.id)} 目标锁定 ${m.id.replace("player","P")}：其隐藏手牌装甲概率=${Math.round(_.armorInHiddenHandProb*100)}%，威胁池=${ml(_.actionTypeCounts)}。`,`${Ie(e.id)} 选择【${g.nameCn}】→【${h.nameCn}】，综合得分=${d.toFixed(1)}。`)}return{seg1:u,seg2:f,reasoning:x}}function Sx(e,n,t,a,r){const i=Jn(e,n),s=_c(e,n),l=Ai(e,n),d=Jn(e,l),u=Tt(i,a,"self"),f=fn(i,a,"movement"),m=t===1?i.plotSeg1:i.plotSeg2;if(!m)return null;const g=a(m.defId);if(!g||g.actionType!=="movement")return null;const h=(g.movementValue??0)+(f.wheel?2:0);if(h<=0)return null;const x=e.playerIds.filter(K=>K!==n&&!e.players[K].isDefeated).map(K=>e.players[K].position),p=Mi(e.map,i.position,h,x,f,i.facing);if(p.length===0)return null;function _(K){let M=l,z=Ke(K,d.position);for(const R of s){const D=Ke(K,e.players[R].position);D<z&&(z=D,M=R)}return{eid:M,dist:z}}function b(K){const M=Ti(e.map,i.position,i.facing,K,h,x,f);if(!M)return null;const{eid:z}=_(K);return{pos:K,path:M.path,finalFacing:ia(K,e.players[z].position),reasoning:[]}}if(r==="easy"){if(Math.random()<.5)return null;const K=[...p].sort(()=>Math.random()-.5);for(const{pos:M}of K){const z=b(M);if(z)return z}return null}const y=(t===1?2:1)===1?i.plotSeg1:i.plotSeg2,I=y?a(y.defId):null;let N;if(!I)N=1;else if(I.actionType==="ranged"){const K=I.rangeMin??1,M=I.rangeMax??6;N=I.rangeOptimal??Math.round((K+M)/2)}else I.actionType==="melee"||I.actionType==="charge"?N=1:N=2;const T=[];for(const K of s){const M=Jn(e,K),z=$r(M);for(const R of z){const D=a(R.defId);D&&D.actionType==="ranged"&&T.push({min:D.rangeMin??1,max:D.rangeMax??6,ownerPos:M.position})}}const k=e.mines.filter(K=>K.ownerId!==n),S=s.map(K=>Tt(e.players[K],a,"opponent")),$=[];for(const{pos:K}of p){const{dist:M}=_(K),z=-Math.abs(M-N)*3,D=k.some(X=>be(X.position,K))?-10:0,F=e.map.cells[K.row][K.col];let P=0;F.terrain==="forest"?P=1.5:F.terrain==="water"&&(P=-1);let B=0;for(const X of T){const Q=Ke(K,X.ownerPos);Q<X.min||Q>X.max?B+=.3:B-=.5}let W=0;for(let X=0;X<s.length;X++){const Q=Ke(K,e.players[s[X]].position);W-=Bm(S[X],Q)*.8}$.push({pos:K,quickScore:z+D+P+B+W})}$.sort((K,M)=>M.quickScore-K.quickScore);const E=$.slice(0,5);let J=-1/0,V=null;for(const{pos:K,quickScore:M}of E){const z=b(K);if(!z)continue;let R=0;for(const F of s){const P=e.players[F].position;R+=ft(z.finalFacing,K,P)?.5:-.3}const D=M+R;D>J&&(J=D,V=z)}if(!V)for(const{pos:K}of $.slice(5)){const M=b(K);if(M){V=M;break}}if(!V)return null;const A=_(V.pos),O=Tt(e.players[A.eid],a,"opponent");return V.reasoning=[`${Ie(n)} 移动评估：本机剩余牌池=${ml(Ic(u.exactDeckCounts,a))}。`,`${Ie(n)} 目标距离优先=${N}，选择终点(${V.pos.row},${V.pos.col})，终朝向=${V.finalFacing}。`,`${Ie(n)} 主要依据：贴近后续行动，同时规避敌方威胁；最近目标 ${A.eid.replace("player","P")} 装甲概率=${Math.round(O.armorInHiddenHandProb*100)}%。`],V}function Cx(e,n,t,a,r,i){const s=Jn(e,n),l=_c(e,n),d=Ai(e,n),u=Rn(s,t,a,r);if(!u)return{shouldAttack:!1,targetId:d,reasoning:[`${Ie(n)} 当前时机无可用攻击卡，放弃攻击。`]};let f=null,m=-1/0;const g=[];for(const h of l){const x=Jn(e,h),p=Tt(x,r,"opponent");if(u.actionType==="charge"&&a==="melee"){const y=q.find(T=>T.id===s.unitId),I=q.find(T=>T.id===x.unitId);if(!y||!I)continue;const N=Qo(s,x,t,e.map,y,I,r);if(!N.canAttack)continue;if(i==="hard"){const T=N.counterDamage,k=us(s),S=us(x),$=N.damage-T;if($<0&&k<=T+2||k<=5&&T>=3||S<=3&&T>=2)continue;const E=$*2+(20-S)-p.armorInHiddenHandProb;g.push(`${h.replace("player","P")}: 净伤=${$} 存活牌=${S} 得分=${E.toFixed(1)}`),E>m&&(m=E,f=h)}else{const T=N.damage;g.push(`${h.replace("player","P")}: 突击伤害=${T}`),T>m&&(m=T,f=h)}continue}const _=Xo(s,x,t,a,e.map,r);if(!_.canAttack)continue;const b=us(x),v=_.damage*2+(20-b)-p.armorInHiddenHandProb*1.2;g.push(`${h.replace("player","P")}: 期望伤害=${_.damage} 存活牌=${b} 装甲概率=${Math.round(p.armorInHiddenHandProb*100)}% 得分=${v.toFixed(1)}`),v>m&&(m=v,f=h)}return f?{shouldAttack:!0,targetId:f,reasoning:[`${Ie(n)} 攻击评估：武装【${u.nameCn}】。`,`${Ie(n)} 候选目标：${g.join(" ｜ ")}`,`${Ie(n)} 选择攻击 ${f.replace("player","P")}，综合得分=${m.toFixed(1)}。`]}:{shouldAttack:!1,targetId:d,reasoning:[`${Ie(n)} 攻击评估：武装【${u.nameCn}】当前无合法目标。`]}}function Nx(e,n,t,a,r=!1,i){const s=$r(n);if(s.length===0)return{value:null,reasoning:[`${Ie(n.id)} 无可选明置牌，转为自动结算。`]};if(a==="easy")return{value:s[Math.floor(Math.random()*s.length)].instanceId,reasoning:[`${Ie(n.id)} 简单 AI 随机选择伤害牌。`]};const l=i??n;let d=null,u=r?-1/0:1/0;const f=[];for(const g of s){const h=t(g.defId),x=_x(g,h,n,l,t,r);f.push(`${(h==null?void 0:h.nameCn)??g.defId}:${x.toFixed(1)}`),(r?x>u:x<u)&&(u=x,d=g)}const m=d?t(d.defId):null;return{value:(d==null?void 0:d.instanceId)??null,reasoning:[`${Ie(n.id)} ${r?"瞄准指定破坏":"承伤弃牌"}评估：${f.join(" ｜ ")}`,`${Ie(n.id)} 选择【${(m==null?void 0:m.nameCn)??(d==null?void 0:d.defId)??"自动结算"}】。`]}}function Mx(e,n,t,a,r){const i=Jn(e,n),s=Jn(e,Ai(e,n)),l=t===1?i.plotSeg1:i.plotSeg2;if(!l)return null;const d=a(l.defId);if(!d||d.actionType!=="mine")return null;const u=e.mines.map(h=>h.position),f=[];for(let h=-1;h<=1;h++)for(let x=-1;x<=1;x++){if(h===0&&x===0)continue;const p=i.position.row+h,_=i.position.col+x;if(p<0||p>=e.map.height||_<0||_>=e.map.width)continue;const b={row:p,col:_};u.some(v=>be(v,b))||f.push(b)}return f.length<4?null:[...f].sort((h,x)=>{const p=Ke(h,s.position),_=Ke(x,s.position);return p-_}).slice(0,4).map((h,x)=>({position:h,kind:x<2?"real":"dummy"}))}function Tx(e,n,t,a,r){const i=Jn(e,n),s=t===1?i.plotSeg1:i.plotSeg2;if(!s)return null;const l=a(s.defId);if(!l)return null;if(l.actionType==="mine"){const d=Mx(e,n,t,a,r);return!d||d.length===0?null:{actionType:"mine",placements:d,damage:l.damage||3,reasoning:[`${Ie(n)} 布雷评估：优先封锁靠近敌方的 4 个候选格。`,`${Ie(n)} 选点=${d.map(u=>`(${u.position.row},${u.position.col})-${u.kind==="real"?"真":"假"}`).join("、")}`]}}if(l.actionType==="aim"){const d=Ai(e,n),u=Jn(e,d),f=ia(i.position,u.position);return{actionType:"aim",facing:f,reasoning:[`${Ie(n)} 照准评估：最近敌机=${d.replace("player","P")}，先把朝向对准火力线。`,`${Ie(n)} 调整朝向为 ${f}。`]}}return null}function Ex(e,n,t){const a=[];let r=e;for(const i of t){if(r<=0)break;a.push(i.instanceId),r-=i.armorValue}for(const i of n){if(r<=0)break;a.push(i.instanceId),r-=i.armorValue}return{value:a,reasoning:[`[AI][ARMOR] 受到${e}点伤害，准备区装甲优先，其次手牌装甲。`,`[AI][ARMOR] 预计减伤后剩余=${Math.max(0,r)}。`]}}const zi=1,Dx=["slot_1","slot_2","slot_3","slot_4","slot_5"],$x=10,kr="em_saves_index",jr="em_replays_index",kc=e=>`em_save_${e}`,ai=e=>`em_replay_${e}`;function Ma(e){try{const n=localStorage.getItem(e);return n?JSON.parse(n):[]}catch{return[]}}function Vi(e,n){localStorage.setItem(e,JSON.stringify(n))}function Gd(){return Ma(kr).sort((n,t)=>t.timestamp-n.timestamp)}function jc(e,n,t,a){const r={slotId:e,timestamp:Date.now(),roundNumber:n.roundNumber,phase:n.phase,player1Unit:n.players.player1.unitId,player2Unit:n.players.player2.unitId,mapId:n.map.id,mapName:n.map.nameCn,isAutoSave:a},i={version:zi,metadata:r,gameState:n,aiConfig:t};try{localStorage.setItem(kc(e),JSON.stringify(i))}catch{throw new Error("存储空间不足，无法保存存档")}const l=Ma(kr).filter(d=>d.slotId!==e);return l.push(r),Vi(kr,l),r}function Ax(e){try{const n=localStorage.getItem(kc(e));if(!n)return null;const t=JSON.parse(n);if(!Vx(t))return null;const a=t;return a.gameState.playerIds||(a.gameState.playerIds=["player1","player2"],a.gameState.teams={player1:0,player2:1},a.gameState.teamCount=2,a.gameState.shuffleSeed=a.metadata.timestamp),a}catch{return null}}function zx(e){localStorage.removeItem(kc(e));const n=Ma(kr);Vi(kr,n.filter(t=>t.slotId!==e))}function Vx(e){if(!e||typeof e!="object")return!1;const n=e;if(n.version!==zi||!n.gameState||typeof n.gameState!="object")return!1;const t=n.gameState;if(!t.phase||!t.players||!t.map)return!1;const a=t.players;return!(!a.player1||!a.player2||!n.metadata||typeof n.metadata!="object"||!n.aiConfig||typeof n.aiConfig!="object")}function Hd(){return Ma(jr).sort((n,t)=>t.timestamp-n.timestamp)}function Px(e,n,t){const a=`${Date.now()}`,r={replayId:a,timestamp:Date.now(),totalRounds:e.roundNumber,totalActions:n.length,player1Unit:e.players.player1.unitId,player2Unit:e.players.player2.unitId,mapId:e.map.id,mapName:e.map.nameCn,winner:t},i={version:zi,metadata:r,initialState:e,actions:n};try{localStorage.setItem(ai(a),JSON.stringify(i))}catch{throw new Error("存储空间不足，无法保存录像")}const s=Ma(jr);for(s.push(r),s.sort((l,d)=>l.timestamp-d.timestamp);s.length>$x;){const l=s.shift();localStorage.removeItem(ai(l.replayId))}return Vi(jr,s),r}function Ud(e){try{const n=localStorage.getItem(ai(e));if(!n)return null;const t=JSON.parse(n);if(!Lx(t))return null;const a=t;return a.initialState.playerIds||(a.initialState.playerIds=["player1","player2"],a.initialState.teams={player1:0,player2:1},a.initialState.teamCount=2,a.initialState.shuffleSeed=a.metadata.timestamp),a}catch{return null}}function Rx(e){localStorage.removeItem(ai(e));const n=Ma(jr);Vi(jr,n.filter(t=>t.replayId!==e))}function Lx(e){if(!e||typeof e!="object")return!1;const n=e;return!(n.version!==zi||!n.initialState||typeof n.initialState!="object"||!Array.isArray(n.actions)||!n.metadata||typeof n.metadata!="object")}function Ox(e,n){let t=e.initialState,a=0;for(;a<e.actions.length&&!(t.roundNumber>=n);a++)t=gn(t,e.actions[a]);return{state:t,actionIndex:a}}const rr={N:"↑北",S:"↓南",E:"→东",W:"←西"},ao={setup:"配置",pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"行动阶段·段落1",action_seg2:"行动阶段·段落2",cleanup:"清理阶段",game_over:"对局结束"},Kx={movement:"移动时序",ranged:"射击时序",melee:"近战时序",special:"特殊时序"},Jx={movement:"移动",ranged:"射击",melee:"近战",charge:"突击",aim:"瞄准",armor:"装甲",mine:"机雷",special:"特殊",auxiliary:"辅助"};function St(e){var n;return((n=q.find(t=>t.id===e))==null?void 0:n.nameCn)??e}function ko(e){const n=te(e);if(!n)return e;const t=Jx[n.actionType]??n.actionType;let a="";n.movementValue!=null&&(a=` 值${n.movementValue}`),n.damage!=null&&(a=` 伤害${n.damage}`,n.rangeMin!=null&&n.rangeMax!=null&&(a+=` 射程${n.rangeMin}-${n.rangeMax}`),n.rangeOptimal!=null&&(a+=` 最佳${n.rangeOptimal}`));const r=n.hasBombIcon?" [💣]":"",i=n.isKaiVariant?" [◆改]":"";return`${n.nameCn}(${t}${a}${r}${i})`}function fl(e){const n=ko(e.defId);return e.destroyed?`${n}[已破坏]`:n}function ro(e){return e.length===0?"(无)":e.map(n=>fl(n)).join(", ")}function oo(e,n){const t=[],a=St(e.unitId),r=rr[e.facing]??e.facing,i=e.deck.filter(d=>!d.destroyed).length,s=e.hand.filter(d=>!d.destroyed).length,l=e.auxiliary.filter(d=>!d.destroyed).length;if(t.push(`  ${n} [${a}]  位置(${e.position.row},${e.position.col}) 朝向${r}  败北=${e.isDefeated}`),t.push(`    牌库=${i}  手牌=${s}  辅助=${l}/${e.auxiliary.length}  弃牌=${e.discard.length}  破坏=${e.destroyedCards.length}  总存活=${i+s+l+e.discard.length+(e.plotSeg1&&!e.plotSeg1.destroyed?1:0)+(e.plotSeg2&&!e.plotSeg2.destroyed?1:0)}`),t.push(`    手牌: ${ro(e.hand)}`),e.auxiliary.length>0&&t.push(`    辅助: ${ro(e.auxiliary)}`),e.plotSeg1||e.plotSeg2){const d=e.plotSeg1?fl(e.plotSeg1):"—",u=e.plotSeg2?fl(e.plotSeg2):"—";t.push(`    布局: 段1=[${d}]  段2=[${u}]`)}return e.discard.length>0&&t.push(`    弃牌: ${ro(e.discard)}`),e.destroyedCards.length>0&&t.push(`    破坏: ${ro(e.destroyedCards)}`),t.join(`
`)}function Bx(e,n){const t=r=>{const i=n.players[r],s=n.playerIds.indexOf(r);return`${s>=0?`P${s+1}`:r}[${i?St(i.unitId):r}]`},a=(r,i)=>{const s=n.players[i];return s?[...s.deck,...s.hand,...s.auxiliary,...s.discard,...s.destroyedCards,...s.plotSeg1?[s.plotSeg1]:[],...s.plotSeg2?[s.plotSeg2]:[]].find(d=>d.instanceId===r):void 0};switch(e.type){case"SELECT_UNIT":{const r=n.playerIds.indexOf(e.playerId);return`${r>=0?`P${r+1}`:e.playerId} 选择机体 ${St(e.unitId)}`}case"SELECT_MAP":return`选择地图 ${e.mapId}`;case"CONFIRM_SETUP":return"确认设置，开始对局";case"SET_SPAWN_POSITION":return`${t(e.playerId)} 设置出生点 (${e.position.row},${e.position.col})`;case"SET_SPAWN_FACING":return`${t(e.playerId)} 设置初始朝向 ${rr[e.facing]??e.facing}`;case"START_PLOTTING":return"战前准备结束，进入布局阶段";case"DRAW_CARDS":return`${t(e.playerId)} 抽牌 ${e.count} 张`;case"PLOT_CARD":{const r=a(e.instanceId,e.playerId);return`${t(e.playerId)} 布局段落${e.seg}: ${r?ko(r.defId):e.instanceId}`}case"CONFIRM_PLOT":return`${t(e.playerId)} 确认布局完成`;case"ADVANCE_PLOT_STEP":return"[系统] 布局步骤推进";case"MOVE_UNIT":{const r=n.players[e.playerId],i=r?`(${r.position.row},${r.position.col})`:"(?,?)",s=`(${e.to.row},${e.to.col})`,l=e.finalFacing?` 结束朝向→${rr[e.finalFacing]??e.finalFacing}`:"",d=e.path?` 路径[${e.path.map(u=>`(${u.row},${u.col})`).join("→")}]`:"";return`${t(e.playerId)} 普通移动 ${i}→${s}${l}${d}`}case"ADJUST_FACING":return`${t(e.playerId)} 调整朝向→${rr[e.facing]??e.facing}`;case"RESOLVE_RANGED":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动射击`;case"RESOLVE_MELEE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动近战`;case"RESOLVE_CHARGE":return`${t(e.attackerId)} 沿正面方向发动突击，目标=${t(e.targetId)}`;case"PLACE_MINE":{const i=(e.placements??(e.to?[{position:e.to,kind:"real"}]:[])).map(s=>`(${s.position.row},${s.position.col})`).join("、");return`${t(e.playerId)} 部署隐藏机雷指示物：${i}`}case"SELECT_DAMAGE_CARD":{const r=a(e.instanceId,e.playerId);return`${t(e.playerId)} 选择摧毁: ${r?ko(r.defId):e.instanceId}`}case"CONFIRM_DAMAGE_SELECTION":return`${t(e.playerId)} 确认伤害结算`;case"SKIP_ACTION":return"[系统] 跳过行动";case"ADVANCE_TIMING":return"[系统] 推进时序";case"ADVANCE_PHASE":return"[系统] 推进阶段";case"MELEE_SENSOR_MOVE":return`${t(e.playerId)} 近战传感器移动至 (${e.to.row},${e.to.col})`;case"CONFIRM_ARMOR_CHOICE":{const r=e.selectedInstanceIds.map(i=>{const s=a(i,e.playerId);return s?ko(s.defId):i});return`${t(e.playerId)} 确认装甲选择${r.length?"："+r.join("、"):"（不使用装甲）"}`}case"RESET_GAME":return"[系统] 重置游戏";case"LOAD_GAME":return"[系统] 加载存档";case"ADD_LOG":return`[系统] ${e.message}`;default:return`[未知] ${e.type}`}}function Fx(e,n){const t=[],a="═".repeat(72),r="─".repeat(72);t.push(a),t.push("EMBRYO MACHINE — 对局分析日志"),t.push(a),t.push(`生成时间: ${new Date().toISOString()}`),t.push(`地图: ${e.map.nameCn} (${e.map.id}) ${e.map.width}×${e.map.height}`),t.push(`P1: ${St(e.players.player1.unitId)} (${e.players.player1.unitId})`),t.push(`P2: ${St(e.players.player2.unitId)} (${e.players.player2.unitId})`),t.push(`总操作数: ${n.length}`),t.push(""),t.push("[地图地形]");const i={plain:"平",forest:"森",rubble:"瓦",water:"水",highland:"高",sand:"砂"};let s="     ";for(let x=0;x<e.map.width;x++)s+=`  ${String(x).padStart(2)} `;t.push(s);for(let x=0;x<e.map.height;x++){let p=`  ${String(x).padStart(2)} `;for(let _=0;_<e.map.width;_++){const b=e.map.cells[x][_],v=i[b.terrain]??"?",y=b.elevation>0?String(b.elevation):" ";p+=` ${v}${y} `}t.push(p)}t.push("  地形: 平=平地 森=森林 瓦=瓦砾 水=水域 高=高地 砂=砂地  数字=海拔"),t.push(""),t.push("[初始状态]"),t.push(`  阶段: ${ao[e.phase]??e.phase}  回合: ${e.roundNumber}`),t.push(oo(e.players.player1,"P1")),t.push(oo(e.players.player2,"P2")),e.mines.length>0&&t.push(`  隐藏指示物: ${e.mines.map(x=>`(${x.position.row},${x.position.col}) 所有者=${x.ownerId} 伤害=${x.damage}`).join("; ")}`),t.push("");let l=e,d=l.roundNumber,u=l.phase,f=l.currentTiming,m=0,g=l.log.length;for(let x=0;x<n.length;x++){const p=n[x],_=l;l=gn(l,p),m++,l.roundNumber!==d&&(t.push(""),t.push(a),t.push(`══ 第 ${l.roundNumber} 回合 ══`),t.push(a),d=l.roundNumber),l.phase!==u&&(t.push(""),t.push(r),t.push(`── ${ao[l.phase]??l.phase} ──`),t.push(r),u=l.phase,f=l.currentTiming),l.currentTiming!==f&&l.currentTiming&&(t.push(""),t.push(`  ◆ ${Kx[l.currentTiming]??l.currentTiming}  先攻顺序: [${l.turnOrder.join(", ")}]`),f=l.currentTiming);const b=Bx(p,_);t.push(`  #${String(m).padStart(4,"0")}  ${b}`);const v=l.log.slice(g);for(const T of v)t.push(`         │ ${T}`);if(g=l.log.length,l.pendingDamage&&!_.pendingDamage){const T=l.pendingDamage;t.push(`         ├─ [交互伤害] 目标=${T.targetId} 剩余=${T.remaining} 来源=${T.source}${T.attackerId?` 攻方=${T.attackerId}(瞄准指定)`:""}`)}const y=l.phase!==_.phase,I=l.roundNumber!==_.roundNumber,N=l.phase==="game_over"&&_.phase!=="game_over";(y||I||N)&&(t.push(""),t.push(`  [状态快照 #${m} | ${ao[l.phase]??l.phase}]`),t.push(oo(l.players.player1,"P1")),t.push(oo(l.players.player2,"P2")),l.mines.length>0&&t.push(`  隐藏指示物: ${l.mines.map(T=>`(${T.position.row},${T.position.col}) 所有者=${T.ownerId} 伤害=${T.damage}`).join("; ")}`))}t.push(""),t.push(a),t.push("══ 对局总结 ══"),t.push(a);const h=l;if(h.phase==="game_over"){const x=new Set;for(const p of h.playerIds)h.players[p].isDefeated||x.add(h.teams[p]);if(x.size===0)t.push("结果: 平局（所有队伍同时全灭）");else{const p=[...x][0],_=h.playerIds.filter(b=>h.teams[b]===p).map(b=>St(h.players[b].unitId)).join("、");t.push(`结果: 队伍${p+1}（${_}）获胜`)}}else t.push(`结果: 对局未结束 (当前阶段: ${ao[h.phase]??h.phase})`);t.push(`最终回合: ${h.roundNumber}`),t.push(`总操作数: ${n.length}`);for(const x of h.playerIds){const p=h.players[x],b=`P${h.playerIds.indexOf(x)+1}`,v=Gx(p);t.push(""),t.push(`${b}[${St(p.unitId)}] 最终状态:`),t.push(`  存活卡牌: ${v}  破坏: ${p.destroyedCards.length}  败北: ${p.isDefeated}`),t.push(`  位置: (${p.position.row},${p.position.col}) 朝向: ${rr[p.facing]}`)}t.push(""),t.push(r),t.push("[完整引擎日志]"),t.push(r);for(let x=0;x<h.log.length;x++)t.push(`  ${String(x+1).padStart(4,"0")}  ${h.log[x]}`);return t.push(""),t.push(a),t.push("日志结束"),t.push(a),t.join(`
`)}function Gx(e){const n=t=>t.filter(a=>!a.destroyed).length;return n(e.deck)+n(e.hand)+n(e.auxiliary)+e.discard.length+(e.plotSeg1&&!e.plotSeg1.destroyed?1:0)+(e.plotSeg2&&!e.plotSeg2.destroyed?1:0)}const Pi=j.createContext(null);function Fm({children:e}){const[n,t]=j.useReducer(gn,void 0,Km),[a,r]=j.useState(vx),[i,s]=j.useState(!0),[l,d]=j.useState(!1),u=j.useRef(n);u.current=n;const f=j.useRef([]),m=j.useRef(null),g=j.useRef(-1),h=j.useCallback(b=>{const v=u.current;if(b.type==="RESET_GAME"||b.type==="LOAD_GAME"){f.current=[],m.current=null,g.current=-1,t(b);return}if(b.type==="CONFIRM_SETUP"){const I=gn(v,b);f.current=[],m.current=I,t(b);return}f.current.push(b);const y=gn(v,b);if(t(b),i&&v.phase!=="draw"&&y.phase==="draw"&&y.roundNumber!==g.current){g.current=y.roundNumber;try{jc("auto",y,a,!0)}catch{}}},[a,i]),x=ux(h,u),p=j.useCallback(b=>te(b),[]),_=j.useCallback(()=>m.current?{initialState:m.current,actions:[...f.current]}:null,[]);return o.jsx(Pi.Provider,{value:{state:n,dispatch:x,rawDispatch:h,getCard:p,aiConfig:a,setAIConfig:r,getReplayData:_,autoSaveEnabled:i,setAutoSaveEnabled:s,exposureMode:l,setExposureMode:d},children:e})}function Ce(){const e=j.useContext(Pi);if(!e)throw new Error("useGame must be used inside <GameProvider>");return e}function Vr(){return Ce().state}const Hx=[2,3,4,6,8];function Ux(e){const n=[];for(let t=2;t<=e;t++)e%t===0&&n.push(t);return n}function Wx({onNext:e,onBack:n,playerCount:t,setPlayerCount:a,teamCount:r,setTeamCount:i}){const{dispatch:s,rawDispatch:l}=Ce(),d=j.useMemo(()=>kh(),[]),[u,f]=j.useState(d[0].id),m=j.useMemo(()=>Ux(t),[t]),g=j.useMemo(()=>d.filter(p=>{if(p.maxPlayers<t||p.maxTeams<r)return!1;const _=Math.ceil(t/r);for(let b=0;b<r;b++){const v=p.startZones[b];if(!v||v.length<_)return!1}return!0}),[t,r,d]),h=j.useMemo(()=>d.find(p=>p.id===u)??d[0],[u,d]);j.useEffect(()=>{l({type:"RESET_GAME",playerCount:t,teamCount:r});const p=Math.ceil(t/r),_=d.filter(b=>{if(b.maxPlayers<t||b.maxTeams<r)return!1;for(let v=0;v<r;v++){const y=b.startZones[v];if(!y||y.length<p)return!1}return!0});_.length>0&&(f(_[0].id),s({type:"SELECT_MAP",mapId:_[0].id}))},[t,r]),j.useEffect(()=>{m.includes(r)||i(m[0])},[m,r,i]),j.useEffect(()=>{g.length>0&&!g.find(p=>p.id===u)&&x(g[0].id)},[g]);function x(p){p!==u&&(f(p),s({type:"SELECT_MAP",mapId:p}))}return o.jsxs("div",{className:"msel-screen",children:[o.jsx("button",{className:"msel-back-btn",onClick:n,children:"← 返回主菜单"}),o.jsx("h1",{className:"msel-title",children:"Embryo Machine"}),o.jsx("p",{className:"msel-subtitle",children:"选择地图"}),o.jsxs("section",{className:"msel-section",children:[o.jsx("h2",{children:"游戏配置"}),o.jsxs("div",{className:"msel-config-row",children:[o.jsxs("label",{className:"msel-config-label",children:["玩家人数",o.jsx("select",{className:"msel-config-select",value:t,onChange:p=>a(Number(p.target.value)),children:Hx.map(p=>o.jsxs("option",{value:p,children:[p,"人"]},p))})]}),o.jsxs("label",{className:"msel-config-label",children:["队伍数量",o.jsx("select",{className:"msel-config-select",value:r,onChange:p=>i(Number(p.target.value)),children:m.map(p=>o.jsxs("option",{value:p,children:[p,"队 (",t/p,"人/队)"]},p))})]})]})]}),o.jsxs("section",{className:"msel-section",children:[o.jsx("h2",{children:"地图"}),o.jsx("div",{className:"msel-map-list",children:g.map(p=>o.jsxs("button",{className:`msel-map-btn ${u===p.id?"msel-map-btn--active":""}`,onClick:()=>x(p.id),children:[p.nameCn," ",p.id.startsWith("custom_")?"✦":"",o.jsxs("span",{className:"msel-map-btn__size",children:[p.height,"×",p.width," · ≤",p.maxPlayers,"人"]})]},p.id))})]}),o.jsxs("section",{className:"msel-preview",children:[o.jsx("div",{className:"msel-preview__grid-wrap",children:o.jsx("div",{className:"msel-preview__grid",style:{display:"grid",gridTemplateColumns:`repeat(${h.width}, 1fr)`,gap:"1px"},children:h.cells.flat().map((p,_)=>{const b=Math.floor(_/h.width),v=_%h.width,y=Object.values(h.startZones).some(I=>I.some(N=>N.row===b&&N.col===v));return o.jsx("div",{className:`msel-cell msel-cell--${p.terrain}${p.elevation>0?" msel-cell--elev":""}${y?" msel-cell--start":""}`,title:`${p.terrain}${p.elevation>0?` +${p.elevation}`:""}${y?" (起始点)":""}`},_)})})}),o.jsxs("div",{className:"msel-preview__info",children:[o.jsx("span",{className:"msel-preview__name",children:h.nameCn}),o.jsxs("span",{className:"msel-preview__meta",children:[h.height,"×",h.width," · 最多",h.maxPlayers,"人 · ",h.maxTeams,"队"]}),o.jsxs("div",{className:"msel-preview__legend",children:[o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--plain"}),"平地"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--sand"}),"沙地"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--rubble"}),"废墟"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--forest"}),"森林"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--water"}),"水域"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--highland"}),"高地"]}),o.jsxs("span",{className:"msel-legend",children:[o.jsx("span",{className:"msel-legend__dot msel-legend__dot--start"}),"起点"]})]})]})]}),o.jsx("button",{className:"msel-next-btn",onClick:e,children:"下一步 →"}),o.jsx("style",{children:Zx})]})}const Zx=`
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
`,Yx={gameTitle:"Embryo Machine",statMovement:"移动力",statEvasion:"回避值",statAssault:"突击",statAssaultDef:"被突击",statInitiative:"先制值"},Tn=[["#00f0ff","#00c8e0","#40e8ff","#80f0ff"],["#ff00c8","#ff44aa","#e040d0","#ff77dd"],["#00cc88","#44dd66","#00aa6e","#66eebb"],["#ff8800","#ffaa33","#e07000","#ffcc66"],["#6688ff","#4466ee","#88aaff","#3355dd"],["#cc44ff","#aa22dd","#dd77ff","#bb00ee"],["#44dddd","#22bbbb","#66eeee","#00ccbb"],["#ff4466","#dd2244","#ff6688","#ee0033"]];function wc(e,n){const t=e.teams[n]??0,a=Tn[t%Tn.length],i=e.playerIds.filter(s=>e.teams[s]===t).indexOf(n);return a[Math.max(0,i)%a.length]}const Ut=Yx;function Xx({onNext:e,onBack:n,autoFill:t=!1}){const{state:a,dispatch:r,setAIConfig:i,setExposureMode:s}=Ce(),[l,d]=j.useState({}),[u,f]=j.useState({}),[m,g]=j.useState({}),h=a.playerIds.length,x=a.teamCount,p=j.useMemo(()=>ga.slice(0,h),[h]);function _(E,J){r({type:"SELECT_UNIT",playerId:E,unitId:J}),g(V=>({...V,[E]:!0}))}function b(E,J){d(V=>({...V,[E]:J}))}function v(E,J){f(V=>({...V,[E]:J}))}const y=p.map(E=>{var J;return((J=a.players[E])==null?void 0:J.unitId)??""}),I=y.every(E=>E!==""),N=new Set(y.filter(E=>E!=="")).size===y.filter(E=>E!=="").length,T=p.filter(E=>m[E]).map(E=>{var J;return((J=a.players[E])==null?void 0:J.unitId)??""}).filter(E=>E!==""),k=new Set(T).size===T.length,S=t?k:I&&N,$={};for(let E=0;E<p.length;E++){const J=E%x;$[J]||($[J]=[]),$[J].push(p[E])}return o.jsxs("div",{className:"setup-screen",children:[o.jsx("button",{className:"setup-back-btn",onClick:n,children:"← 上一步"}),o.jsx("h1",{className:"setup-title",children:Ut.gameTitle}),o.jsx("p",{className:"setup-subtitle",children:"选择机体"}),o.jsx("div",{className:"setup-teams",children:Object.entries($).map(([E,J])=>o.jsxs("div",{className:"setup-team",children:[o.jsxs("h3",{className:"team-header",style:{color:Tn[Number(E)%Tn.length][0]},children:["队伍 ",Number(E)+1]}),o.jsx("div",{className:"setup-players",children:J.map((V,A)=>{var D;const O=ga.indexOf(V),K=Tn[Number(E)%Tn.length],M=K[A%K.length],z=((D=a.players[V])==null?void 0:D.unitId)??"",R=y.filter((F,P)=>P!==p.indexOf(V)&&F);return o.jsxs("div",{className:"setup-player-col",children:[o.jsx(Qx,{label:`P${O+1}`,selectedUnit:z,blockedUnits:R,accentColor:M,onSelect:F=>_(V,F)}),o.jsxs("div",{className:"ai-control",children:[o.jsxs("label",{className:"ai-control__label",children:[o.jsx("input",{type:"checkbox",checked:l[V]??!1,onChange:F=>b(V,F.target.checked)}),"AI控制"]}),l[V]&&o.jsxs("select",{className:"ai-control__difficulty",value:u[V]??"hard",onChange:F=>v(V,F.target.value),children:[o.jsx("option",{value:"easy",children:"简单"}),o.jsx("option",{value:"hard",children:"困难"})]})]})]},V)})})]},E))}),o.jsx("button",{className:"start-btn",onClick:()=>{const E=new Set(p.filter(D=>m[D]).map(D=>{var F;return((F=a.players[D])==null?void 0:F.unitId)??""}).filter(D=>D!=="")),V=[...q.map(D=>D.id).filter(D=>!E.has(D))];for(let D=V.length-1;D>0;D--){const F=Math.floor(Math.random()*(D+1));[V[D],V[F]]=[V[F],V[D]]}const A={...l},O={...u};let K=0;for(const D of p)t&&!m[D]&&K<V.length&&(r({type:"SELECT_UNIT",playerId:D,unitId:V[K]}),K++,A[D]=!0,O[D]="hard");const M={},z={};for(const D of p)M[D]=A[D]??!1,z[D]=O[D]??"hard";i({player1:M.player1??!1,player2:M.player2??!1,player1Difficulty:z.player1??"hard",player2Difficulty:z.player2??"hard",playerAI:M,playerDifficulty:z}),p.every(D=>M[D])&&s(!0),e()},disabled:!S,title:S?"":"请为所有玩家分别选择不同的机体",children:"下一步 →"}),!S&&o.jsx("p",{className:"setup-hint",children:t?"手动选择的机体之间不可重复":I?"每位玩家须选择不同的机体":"请为所有玩家各选择一台机体"}),o.jsx("style",{children:nv})]})}function Qx({label:e,selectedUnit:n,blockedUnits:t,accentColor:a,onSelect:r}){return o.jsxs("div",{className:"unit-picker",children:[o.jsx("h2",{className:"unit-picker__title",style:{color:a},children:e}),o.jsx("div",{className:"unit-grid",children:q.map(i=>{const s=t.includes(i.id);return o.jsx(qx,{unit:i,isSelected:i.id===n,isBlocked:s,accentColor:a,onSelect:()=>!s&&r(i.id)},i.id)})}),n&&o.jsx(ev,{unit:q.find(i=>i.id===n),accentColor:a})]})}function qx({unit:e,isSelected:n,isBlocked:t,accentColor:a,onSelect:r}){return o.jsxs("button",{className:`unit-card ${n?"unit-card--selected":""} ${t?"unit-card--blocked":""}`,onClick:r,disabled:t,title:t?"该机体已被其他玩家选择":e.nameCn,style:n?{borderColor:a,boxShadow:`0 0 8px ${a}55`}:{},children:[o.jsx("img",{src:`/assets/tokens/${e.tokenId}`,alt:e.nameCn,className:"unit-card__token",onError:i=>{i.target.style.opacity="0.3"}}),o.jsx("span",{className:"unit-card__name",children:e.nameCn}),o.jsxs("span",{className:"unit-card__init",children:["先制 ",e.initiative]})]})}function ev({unit:e,accentColor:n}){return o.jsxs("div",{className:"unit-stats",children:[o.jsxs("div",{className:"unit-stats__name",children:[e.nameCn," ",o.jsxs("small",{children:["(",e.nameJa,")"]})]}),o.jsx("div",{className:"unit-stats__type",children:e.type}),o.jsxs("div",{className:"unit-stats__grid",children:[o.jsx(Ja,{label:Ut.statMovement,value:e.movement,color:n}),o.jsx(Ja,{label:Ut.statEvasion,value:e.evasion,color:n}),o.jsx(Ja,{label:Ut.statAssault,value:e.assault,color:n}),o.jsx(Ja,{label:Ut.statAssaultDef,value:e.assaultDef,color:n}),o.jsx(Ja,{label:Ut.statInitiative,value:e.initiative,color:n})]})]})}function Ja({label:e,value:n,color:t}){return o.jsxs("div",{className:"stat",children:[o.jsx("span",{className:"stat__label",children:e}),o.jsx("span",{className:"stat__value",style:{color:t},children:n})]})}const nv=`
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
`,Wd=768;function Ri(){const[e,n]=j.useState(()=>typeof window<"u"&&window.innerWidth<=Wd);return j.useEffect(()=>{const t=window.matchMedia(`(max-width: ${Wd}px)`),a=r=>n(r.matches);return t.addEventListener("change",a),n(t.matches),()=>t.removeEventListener("change",a)},[]),e}const zn=18;function we({id:e,title:n,initialPos:t,width:a=300,height:r,minHeight:i=80,children:s,zIndex:l=10,defaultMinimized:d=!1,onFocus:u,siblingRects:f=[]}){const m=Ri(),[g,h]=j.useState(t),[x,p]=j.useState(d),_=j.useRef(null),b=j.useRef(!1);j.useEffect(()=>{b.current||(b.current=!0,h(t))},[]);const v=j.useCallback(y=>{if(m||y.button!==0)return;y.preventDefault(),u==null||u(e);const I=y.clientX-g.x,N=y.clientY-g.y,T=S=>{var M;let $=S.clientX-I,E=S.clientY-N;const J=window.innerWidth,V=window.innerHeight,A=(M=_.current)==null?void 0:M.getBoundingClientRect(),O=(A==null?void 0:A.width)??a,K=(A==null?void 0:A.height)??40;$<zn&&($=0),E<zn&&(E=0),$+O>J-zn&&($=J-O),E+K>V-zn&&(E=V-K);for(const z of f)Math.abs($+O-z.left)<zn&&($=z.left-O),Math.abs($-z.right)<zn&&($=z.right),Math.abs(E+K-z.top)<zn&&(E=z.top-K),Math.abs(E-z.bottom)<zn&&(E=z.bottom),Math.abs(E-z.top)<zn&&(E=z.top);h({x:Math.max(0,$),y:Math.max(0,E)})},k=()=>{document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",k)};document.addEventListener("mousemove",T),document.addEventListener("mouseup",k)},[e,g,u,f,a,m]);return m?o.jsxs("div",{ref:_,className:`dp dp--mobile ${x?"dp--min":""}`,onClick:()=>u==null?void 0:u(e),children:[o.jsxs("div",{className:"dp__bar dp__bar--mobile",onClick:()=>p(y=>!y),children:[o.jsx("span",{className:"dp__title",children:n}),o.jsx("span",{className:"dp__min-btn dp__min-btn--mobile",children:x?"▼":"▲"})]}),!x&&o.jsx("div",{className:"dp__body dp__body--mobile",children:s}),o.jsx("style",{children:Zd})]}):o.jsxs("div",{ref:_,className:`dp ${x?"dp--min":""}`,style:{left:g.x,top:g.y,width:a,height:x?void 0:r,minHeight:x?0:i,zIndex:l},onMouseDown:()=>u==null?void 0:u(e),children:[o.jsxs("div",{className:"dp__bar",onMouseDown:v,children:[o.jsx("span",{className:"dp__title",children:n}),o.jsx("button",{className:"dp__min-btn",onMouseDown:y=>y.stopPropagation(),onClick:()=>p(y=>!y),title:x?"展开":"最小化",children:x?"▢":"▬"})]}),!x&&o.jsx("div",{className:"dp__body",children:s}),o.jsx("style",{children:Zd})]})}const Zd=`
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
`,sa=48,tv=[{facing:"N",label:"↑N",title:"朝北"},{facing:"S",label:"↓S",title:"朝南"},{facing:"E",label:"→E",title:"朝东"},{facing:"W",label:"←W",title:"朝西"}],Yd=.25,av=2,Xd=.1;function rv({onBack:e}){const{state:n,dispatch:t}=Ce(),a=Ye.find(P=>P.id===n.map.id)??n.map,r=n.playerIds,i=a.width,s=a.height,l=j.useRef(null),[d,u]=j.useState({x:0,y:0,scale:1}),f=j.useRef(null),m=j.useRef(!1);j.useEffect(()=>{const P=l.current;if(!P)return;const B=P.clientWidth,W=P.clientHeight,X=i*sa,Q=s*sa;if(!B||!W)return;const ie=Math.min(B/X,W/Q),le=Math.max(Yd,Math.min(1.2,ie)),de=(B-X*le)/2,bn=(W-Q*le)/2;u({x:de,y:bn,scale:le})},[i,s]),j.useEffect(()=>{const P=l.current;if(!P)return;const B=W=>{W.preventDefault();const X=W.deltaY<0?Xd:-Xd;u(Q=>({...Q,scale:Math.min(av,Math.max(Yd,Q.scale+X))}))};return P.addEventListener("wheel",B,{passive:!1}),()=>P.removeEventListener("wheel",B)},[]);const g=j.useCallback(P=>{P.button===0&&(f.current={startX:P.clientX,startY:P.clientY,origX:d.x,origY:d.y},m.current=!1)},[d.x,d.y]),h=j.useCallback(P=>{if(!f.current)return;const B=P.clientX-f.current.startX,W=P.clientY-f.current.startY;!m.current&&Math.sqrt(B*B+W*W)>5&&(m.current=!0),m.current&&u(X=>({...X,x:f.current.origX+B,y:f.current.origY+W}))},[]),x=j.useCallback(()=>{f.current=null,m.current=!1},[]),p=j.useMemo(()=>Object.keys(a.startZones).map(Number).sort((P,B)=>P-B),[a]),[_,b]=j.useState(()=>{const P={};for(let B=0;B<n.teamCount;B++)P[B]=B;return P});j.useEffect(()=>{const P={};for(let B=0;B<n.teamCount;B++)P[B]=B;b(P)},[a.id,n.teamCount]);function v(P,B){b(W=>{const X=Object.entries(W).find(([,ie])=>ie===B),Q={...W,[P]:B};return X&&(Q[Number(X[0])]=W[P]),Q})}const y=j.useMemo(()=>{const P=new Map;for(let B=0;B<n.teamCount;B++){const W=_[B]??B,X=a.startZones[W];if(X)for(const Q of X){const ie=`${Q.row},${Q.col}`,le=P.get(ie)??[];le.push(B),P.set(ie,le)}}return P},[a,n.teamCount,_]),I=j.useMemo(()=>{const P={};for(const B of r){const W=n.teams[B];P[W]||(P[W]=[]),P[W].push(B)}return P},[r,n.teams]),[N,T]=j.useState(r[0]),[k,S]=j.useState(""),$=j.useMemo(()=>{for(const P of r){const B=n.players[P];if(!B)return!1;const W=n.teams[P],X=_[W]??W,Q=a.startZones[X];if(!Q||!Q.some(le=>le.row===B.position.row&&le.col===B.position.col))return!1}return!0},[r,n.players,n.teams,_,a]);function E(P,B){t({type:"SET_SPAWN_POSITION",playerId:P,position:B})}function J(P,B){t({type:"SET_SPAWN_FACING",playerId:P,facing:B})}function V(){$&&t({type:"CONFIRM_SETUP"})}function A(P){return wc(n,P)}function O(P){var W;const B=(W=I[P])==null?void 0:W[0];return B?A(B):Tn[P%Tn.length][0]}const K=j.useMemo(()=>{const P=new Map;for(const B of r){const W=n.players[B];if(!W)continue;const X=q.find(le=>le.id===W.unitId);if(!X)continue;const Q=`${W.position.row},${W.position.col}`,ie=P.get(Q)??[];ie.push({pid:B,color:A(B),tokenId:X.tokenId,name:X.nameCn}),P.set(Q,ie)}return P},[r,n.players]),{x:M,y:z,scale:R}=d,D=220,F=j.useMemo(()=>{const P={},ie=Math.floor((window.innerHeight-56-60)/192);return r.forEach((le,de)=>{const bn=Math.floor(de/ie),An=de%ie;P[le]={x:window.innerWidth-(D+16)*(bn+1),y:56+An*192}}),P},[r]);return o.jsxs("div",{className:"ssm__screen",children:[o.jsxs("div",{className:"ssm__topbar",children:[o.jsx("button",{className:"ssm__back-btn",onClick:e,children:"← 返回"}),o.jsx("span",{className:"ssm__title",children:"选择出击位置"}),o.jsxs("span",{className:"ssm__map-name",children:[a.nameCn," (",s,"×",i,")"]}),o.jsx("span",{style:{flex:1}}),o.jsx("button",{className:`ssm__start-btn${$?"":" ssm__start-btn--disabled"}`,onClick:V,disabled:!$,title:$?"开始战斗":"所有玩家必须先选择出击位置",children:"战斗开始 ▶"})]}),o.jsx("div",{className:"ssm__viewport",ref:l,onMouseDown:g,onMouseMove:h,onMouseUp:x,onMouseLeave:x,children:o.jsx("div",{className:"ssm__map-inner",style:{transform:`translate(${M}px, ${z}px) scale(${R})`,transformOrigin:"top left",display:"grid",gridTemplateColumns:`repeat(${i}, ${sa}px)`,gridTemplateRows:`repeat(${s}, ${sa}px)`},children:a.cells.flatMap((P,B)=>P.map((W,X)=>{const Q=hc(W),ie=`${B},${X}`,le=y.get(ie)??[],de=K.get(ie)??[],bn=le.length>0,An=le.length>0?O(le[0]):"",Ea=n.teams[N],Kt=bn&&le.includes(Ea);let Wn="ssm__cell";bn&&(Wn+=" ssm__cell--zone"),Kt&&(Wn+=" ssm__cell--placeable"),de.length>0&&(Wn+=" ssm__cell--selected");function re(ee){m.current||(ee.stopPropagation(),Kt&&E(N,{row:B,col:X}))}return o.jsxs("div",{className:Wn,style:{backgroundImage:`url("${Q}")`,...bn?{borderColor:An,boxShadow:de.length>0?`inset 0 0 10px ${An}66, 0 0 6px ${An}44`:void 0}:{}},onClick:Kt?re:void 0,children:[de.length===1&&o.jsx("div",{className:"ssm__token",children:o.jsx("img",{src:`/assets/tokens/${de[0].tokenId}`,alt:de[0].name,style:{boxShadow:`0 0 6px ${de[0].color}`},onError:ee=>{ee.target.style.opacity="0.3"}})}),de.length>1&&o.jsx("div",{className:"ssm__token ssm__token--multi",children:de.map(ee=>o.jsx("img",{src:`/assets/tokens/${ee.tokenId}`,alt:ee.name,className:"ssm__token-img-sm",style:{boxShadow:`0 0 4px ${ee.color}`},onError:Be=>{Be.target.style.opacity="0.3"}},ee.pid))})]},ie)}))})}),r.map((P,B)=>{var re;const W=n.players[P],X=q.find(ee=>ee.id===(W==null?void 0:W.unitId)),Q=A(P),ie=k===P,le=N===P,de=n.teams[P],bn=((re=I[de])==null?void 0:re[0])===P,An=_[de]??de,Ea=_[de]??de,Wn=(a.startZones[Ea]??[]).some(ee=>ee.row===W.position.row&&ee.col===W.position.col);return o.jsx(we,{id:`spawn-${P}`,title:`P${B+1} ${(X==null?void 0:X.nameCn)??"—"}`,initialPos:F[P]??{x:100,y:100},width:D,minHeight:60,zIndex:ie?50:10+B,onFocus:()=>{S(P),T(P)},children:o.jsxs("div",{className:`ssm__player-card${le?" ssm__player-card--active":""}`,style:{borderTop:`2px solid ${Q}`},onClick:()=>T(P),children:[o.jsxs("div",{className:"ssm__player-label",style:{color:Q},children:["P",B+1," ",le?"◄ 放置中":""," ",Wn?"✓":""]}),bn&&o.jsx("div",{className:"ssm__zone-select",children:o.jsxs("label",{children:["出击区域:",o.jsx("select",{value:An,onChange:ee=>v(de,Number(ee.target.value)),onClick:ee=>ee.stopPropagation(),children:p.slice(0,a.maxTeams).map(ee=>o.jsxs("option",{value:ee,children:["区域 ",ee+1]},ee))})]})}),o.jsx("div",{className:"ssm__unit-name",children:(X==null?void 0:X.nameCn)??"—"}),o.jsxs("div",{className:"ssm__pos-display",children:["格 (",W.position.row,", ",W.position.col,")"]}),o.jsx("div",{className:"ssm__facing-grid",children:tv.map(({facing:ee,label:Be,title:Pe})=>{const je=W.facing===ee;return o.jsx("button",{className:`ssm__facing-btn${je?" ssm__facing-btn--active":""}`,style:je?{borderColor:Q,color:Q}:void 0,title:Pe,onClick:()=>J(P,ee),children:Be},ee)})})]})},P)}),o.jsx("style",{children:ov})]})}const ov=`
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
  width: ${sa}px;
  height: ${sa}px;
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
`;function iv({onStart:e,onOnlinePlay:n,onViewRules:t,onViewData:a,onLoadGame:r,onReplay:i,onMapEditor:s,onSettings:l}){return o.jsxs("div",{className:"hs-screen",children:[o.jsxs("div",{className:"hs-center",children:[o.jsx("h1",{className:"hs-title",children:"Embryo Machine"}),o.jsx("p",{className:"hs-subtitle",children:"战棋机甲对战游戏"}),o.jsx("div",{className:"hs-divider"}),o.jsx("button",{className:"hs-btn hs-btn--primary",onClick:e,children:"▶ 开始游戏"}),o.jsx("button",{className:"hs-btn hs-btn--online",onClick:n,children:"联机对战"}),o.jsx("button",{className:"hs-btn hs-btn--secondary",onClick:r,children:"📂 加载存档"}),o.jsx("button",{className:"hs-btn hs-btn--secondary",onClick:i,children:"🎬 回放录像"}),o.jsx("div",{className:"hs-divider hs-divider--sm"}),o.jsxs("div",{className:"hs-links",children:[o.jsx("button",{className:"hs-link-btn",onClick:l,children:"⚙ 设置"}),o.jsx("button",{className:"hs-link-btn",onClick:s,children:"🗺️ 地图编辑器"}),o.jsx("button",{className:"hs-link-btn",onClick:t,children:"📖 游戏规则"}),o.jsx("button",{className:"hs-link-btn",onClick:a,children:"📊 游戏资料"})]})]}),o.jsx("style",{children:sv})]})}const sv=`
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
`;function lv({onBack:e,soundEnabled:n,onToggleSound:t,soundVolume:a,onVolumeChange:r,exposureMode:i,onToggleExposure:s,autoFill:l,onToggleAutoFill:d,onCacheAssets:u}){return o.jsxs("div",{className:"set-screen",children:[o.jsxs("div",{className:"set-center",children:[o.jsxs("div",{className:"set-header",children:[o.jsx("button",{className:"set-back",onClick:e,children:"← 返回"}),o.jsx("h1",{className:"set-title",children:"设置"})]}),o.jsx("div",{className:"set-divider"}),o.jsxs("div",{className:"set-section",children:[o.jsx("h2",{className:"set-section__title",children:"音效设置"}),o.jsxs("label",{className:"set-toggle",onClick:t,children:[o.jsx("span",{className:`set-toggle__switch${n?" set-toggle__switch--on":""}`,children:o.jsx("span",{className:"set-toggle__knob"})}),o.jsx("span",{className:"set-toggle__label",children:"音效"}),o.jsx("span",{className:"set-toggle__hint",children:n?"已开启":"关闭"})]}),n&&o.jsxs("div",{className:"set-slider-row",children:[o.jsx("span",{className:"set-slider-row__label",children:"音量"}),o.jsx("input",{className:"set-slider",type:"range",min:0,max:100,value:Math.round(a*100),onChange:f=>r(Number(f.target.value)/100)}),o.jsxs("span",{className:"set-slider-row__value",children:[Math.round(a*100),"%"]})]})]}),o.jsx("div",{className:"set-divider set-divider--sm"}),o.jsxs("div",{className:"set-section",children:[o.jsx("h2",{className:"set-section__title",children:"游戏设置"}),o.jsxs("label",{className:"set-toggle",onClick:s,children:[o.jsx("span",{className:`set-toggle__switch${i?" set-toggle__switch--on":""}`,children:o.jsx("span",{className:"set-toggle__knob"})}),o.jsx("span",{className:"set-toggle__label",children:"暴露模式"}),o.jsx("span",{className:"set-toggle__hint",children:i?"已开启：所有隐藏卡牌将显示正面":"关闭"})]}),o.jsxs("label",{className:"set-toggle",onClick:d,children:[o.jsx("span",{className:`set-toggle__switch${l?" set-toggle__switch--on":""}`,children:o.jsx("span",{className:"set-toggle__knob"})}),o.jsx("span",{className:"set-toggle__label",children:"自动补位"}),o.jsx("span",{className:"set-toggle__hint",children:l?"已开启：空位自动随机选机由AI控制":"关闭"})]})]}),o.jsx("div",{className:"set-divider set-divider--sm"}),o.jsxs("div",{className:"set-section",children:[o.jsx("h2",{className:"set-section__title",children:"资源管理"}),o.jsx("button",{className:"set-btn set-btn--secondary",onClick:u,children:"缓存全部资源"}),o.jsx("p",{className:"set-hint",children:"一次性加载所有卡牌、地形等图片资源"})]})]}),o.jsx("style",{children:cv})]})}const cv=`
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
`;function dv({phase:e,loaded:n,total:t,onConfirm:a,onSkip:r}){const i=t>0?Math.round(n/t*100):0,s=n>=t&&t>0;return o.jsxs("div",{className:"apd-overlay",children:[o.jsxs("div",{className:"apd-box",children:[e==="asking"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"apd-icon",children:"⚠"}),o.jsx("h2",{className:"apd-title",children:"资源未完全缓存"}),o.jsxs("p",{className:"apd-body",children:["检测到游戏图像资源（卡牌、地形、地图等）尚未完全缓存。",o.jsx("br",{}),"首次加载游戏时可能出现图片闪烁或延迟。"]}),o.jsxs("p",{className:"apd-body apd-body--sub",children:["是否现在一次性加载全部资源？",o.jsx("br",{}),o.jsxs("span",{className:"apd-hint",children:["共约 ",t," 张图片，需要较短等待时间。"]})]}),o.jsxs("div",{className:"apd-actions",children:[o.jsx("button",{className:"apd-btn apd-btn--primary",onClick:a,children:"是，立即加载"}),o.jsx("button",{className:"apd-btn apd-btn--secondary",onClick:r,children:"否，边玩边加载"})]})]}),e==="loading"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"apd-icon",children:s?"✓":"↓"}),o.jsx("h2",{className:"apd-title",children:s?"加载完成":"正在加载资源…"}),o.jsx("div",{className:"apd-bar-track",children:o.jsx("div",{className:"apd-bar-fill",style:{width:`${i}%`}})}),o.jsxs("p",{className:"apd-progress-text",children:[n," / ",t,"  (",i,"%)"]}),s&&o.jsx("p",{className:"apd-body apd-body--sub",children:"资源已全部缓存，正在进入游戏…"})]})]}),o.jsx("style",{children:uv})]})}const uv=`
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
`,pv={"72ea91e355f9729a4f906f4a5981ccb94deb6c3a1eb4c9a4f255cbc86ac068a5":"/assets/cards/ag/ag-7-front.jpg",de64d1812f33cab1363e0191b2e1fe10766940cf72c1ae602a1537d6d59dee87:"/assets/ui/card-back.jpg",ca3a08c40eed141b502fe1a227ec29253a864fba0fda52930a7e55d1910a6698:"/assets/cards/ag/ag-3-front.jpg","00fec5279b30da9801db7c84419764909d349e1c210543de132af209cd3f0abd":"/assets/cards/ag/ag-4-front.jpg","608720fd8dcc5e7fe60d00f88b206e99c0688cfc20ef38f4eea05359b2ec0861":"/assets/cards/ag/ag-5-front.jpg",b0389d207312bbef32c2910744518f6f30c73796f27e573cfaec51c355862a97:"/assets/cards/ag/ag-6-front.jpg","29fa020388f199454a71e6673a19d76c4aafc4e8e8f34af0a9eeafe41c172391":"/assets/cards/ag/ag-8-front.jpg",c25abc7656b2d1eb27be27d09fecde25fd22427409e5afc79caf0ee09a8ff4f0:"/assets/cards/ag/ag-11-front.jpg","31e6d6800110b0ebfe8793074ba169f13b6fa02ea67f7e77739a4bf003670ba1":"/assets/cards/ag/ag-18-front.jpg","9762039c262e506e6bddc0449ed1ddc0449d1c6234afba1327ebfdb81a388e54":"/assets/cards/ag/ag-12-front.jpg",aa1286d4f7814991279a7aac4a75c0b194b8e7f9d6510fb8e63362939d04ec1e:"/assets/cards/ag/ag-14-front.jpg",dfe234f8d5372742a6ed4ab9f521f1ad9c693a228003aad19750c34aa7d1d49b:"/assets/cards/ag/ag-21-front.jpg","12e25c69082cbfe495f5dc49006c7c5aebc1f73574c59c39ffc5ed5b8b2fbc6d":"/assets/cards/ag/ag-17-front.jpg","9ba8361aa29742693bc83360c55e367632471dfea59493136210cfd09fd1aa48":"/assets/cards/ag/ag-19-front.jpg","67a686db8c4db82340e640db02b289fb998f14b79ede162eaffb1d2f5488a3a4":"/assets/cards/ag/ag-20-front.jpg",eb56b8c9f9b270690d535f55ac55c846dae5537649cec7021639211ff7f6cc22:"/assets/cards/ag_plus/ag_plus-2-front.jpg",e4c12ee3ba0ef3bd8c2ee9b1bb41e74c404f09b62dba8cb2e35faa2e520895e5:"/assets/cards/ag_plus/ag_plus-3-front.jpg","8f2248399528f6a051509d01cc0c78398afd381b7ad8f9915ab6381297026282":"/assets/cards/ag_plus/ag_plus-4-front.jpg",ebac68b5f2d7cf81a64094a12da6386a77e2434776de373d72ed8be4ba13159c:"/assets/cards/ag_plus/ag_plus-5-front.jpg","35999dd2727c1847d4a12d8061029cf3555bdbb7452b03c3978443401ac1022c":"/assets/cards/ar/ar-1-front.jpg","2f4a7328aaa21e26023208758042e122b483ca242c1b95ee4c64952eb7bb1dc3":"/assets/cards/ar/ar-2-front.jpg",c414ed84946840c69b6bdc4393af27f50d70a81b56a8c1849d1bfdaaa27531c1:"/assets/cards/ar/ar-4-front.jpg","9eca454c2c4f5cdb16902adfa101484f2257d1a9fe6c7985d3aaba990982c725":"/assets/cards/ar/ar-5-front.jpg",dc0d77a5ec25f65aa1ab091a1ede028f7fb1f7ebfbea4945b907adef2ece4281:"/assets/cards/ar/ar-13-front.jpg","6fbefeb90155b45f8872740038dfa38116530750caa1e623a99bab29b5f40a21":"/assets/cards/ar/ar-14-front.jpg","33a35f67e85d189889a7e8fa66ff1719a0d2680027105d1075f802d94d772bb4":"/assets/cards/ar/ar-8-front.jpg","6e7e1e6dde63265f8df8809db768b684e794f4331f9c3d7f4185a1dc612c0701":"/assets/cards/ar/ar-9-front.jpg","2f73e47fe817e7ae747aee252cc07cc1d556c8bd1b2acdf54f9a678f1ff51e02":"/assets/cards/ar/ar-12-front.jpg",aecf39488eb7018c47ea85aa4073aad5f196b9440e2c9248ed960d91e6696f22:"/assets/cards/ar/ar-15-front.jpg",cf41932a7f074826ffbd6c2e14e3bb173d95e38982bac18c2bf04773923903dd:"/assets/cards/ar/ar-16-front.jpg",cfe5a7626bb3fb179d3d056519cf477fa9bd6db3e441a7d7b3204eb4f8e5c2cb:"/assets/cards/ar/ar-17-front.jpg",a26a8dd85af73fe69b123ac4e0beae7cac68442afe22c8d44bf0312a9081381d:"/assets/cards/ar/ar-18-front.jpg","6b6d4acdc02336939dff11c9c962d9f4fe1246ee51003dfc1a70569ebd740664":"/assets/cards/ar/ar-19-front.jpg","2d5acd9b8353db95858fc7dbdcae061bda7df49032e5aea255431ad33aca98d0":"/assets/cards/ar/ar-20-front.jpg",a2d445e888ff59aa58f2ad514a9a031b486a3d56621fa7ddb5f930a045a513b2:"/assets/cards/ar_plus/ar_plus-1-front.jpg",fd85ee9cb1b56cfc5f7e5284a4cf1c67f406b29a068253f7164ea628c1e5c43a:"/assets/cards/ar_plus/ar_plus-4-front.jpg","48cbd3a065ccfa5cbcba4f0247cb0fcf166291740d54ca162580765e5d5c1d4e":"/assets/cards/ar_plus/ar_plus-3-front.jpg",f395a843fb92ff32392d84d9c8dde21b95bf3bf41b8eb787d5d8480878952bcb:"/assets/cards/bg/bg-4-front.jpg","193f6b1b0a647be282bb1b7d5013924039743a46a48383f64d5cb726859f25aa":"/assets/cards/bg/bg-14-front.jpg","0e54f575524cacb092b31f8983a537c18487fdf7405caa924653a39e4bc544db":"/assets/cards/bg/bg-16-front.jpg","2fce52c5e8cde4295b30baed6b7de68e6a2839f5e086d7e1e530ea996ffe0435":"/assets/cards/bg/bg-12-front.jpg",a391b8c4020883f8d080a6e6e83864670158aef7be5eab6d7b348ef6e6b93d10:"/assets/cards/bg/bg-15-front.jpg",fd79d96009f9b66e23c02f25edfcce4a13fdf61c3fe8188269cf83916766df31:"/assets/cards/bg/bg-18-front.jpg",ad7a449d1edd5300a57a8bae2cab2a607d5422ea37c397b7c8c69df5b3096502:"/assets/cards/bg/bg-13-front.jpg","8571242343bc19329436ac669a422140b9dfbc7544cf1de2ec298eef9b3a9257":"/assets/cards/bg/bg-17-front.jpg","64ba521997fc2f8ddbb544dd45bcc58e3145822f4927860039ec7a7921d01757":"/assets/cards/bg/bg-19-front.jpg",ab0196704ba0510bc85e9e58e6bb8323c43cddc2e8f986e6ad79a11852e2c421:"/assets/cards/bg/bg-20-front.jpg","8514e5d83cf922f035f5600a0e96d2bf3ae85d064807759af4f08155ffbe6145":"/assets/cards/bg/bg-21-front.jpg",f495acab04c9e7b539619082b1c7eab387e329794a866f80f4d49f3b8f1f693e:"/assets/cards/bg/bg-23-front.jpg",d4e423814ead1fd2c384492fac1be79e014d771712d0db3c78d93b4e2daf6699:"/assets/cards/bg_plus/bg_plus-1-front.jpg","602d9c6187bb0bb67e3435b95461e1d0f6aa432b5408d2addfe77416d08b2862":"/assets/cards/bg_plus/bg_plus-3-front.jpg",e97efab0e571ea9441ecfcef69388ac5833e96b52f196073127b5930532f920d:"/assets/cards/bg_plus/bg_plus-4-front.jpg","9e27878685e0972914ec6db331732131c20f51b80aef11ca2ed7850338dc56a5":"/assets/cards/bg_plus/bg_plus-5-front.jpg","50793b3633188783f2e78b770a325549b99cc2b0cae8be0f837c1c1bd7958bcd":"/assets/cards/ho/ho-1-front.jpg","23be89f666a01394bded8d8b4e845a176efe96c1e33b40d9edacf15c715a3dd9":"/assets/cards/ho/ho-2-front.jpg",f9b7e9cd2182ade25b13d7355f2297ca1bedd4426b653e89a45aa14ce6221ff6:"/assets/cards/ho/ho-3-front.jpg","120ffbd79d44d8dce99f704baf79e62487e73935e18b8e18bec3fe352e603da0":"/assets/cards/ho/ho-4-front.jpg","926cccef6ed7a746b53a370664d9b1e60fb27d976c4707a0f34e390dcd7ef985":"/assets/cards/ho/ho-5-front.jpg","17b7289bdbdf1c8fc0ddf23c146d0b51e2c66e8e70a20545e64685e087f78496":"/assets/cards/ho/ho-6-front.jpg","38309819fe704c2f7e58cd5c35110ca71a78198b221595d966f711f4ee17d558":"/assets/cards/ho/ho-15-front.jpg","002453cf5ab95a93e69365838d45c421e90a106e3c0bbe20d038355a8495827e":"/assets/cards/ho/ho-8-front.jpg",da0d31d7f836a648f062ee69c549fe2b3806fcc729015bcff634ea427bc94c54:"/assets/cards/ho/ho-9-front.jpg","49d1feafa8f7a1608f6ea2c9205581b056cd4d3a352a903b065be7b613d73d93":"/assets/cards/ho/ho-10-front.jpg",e23e9d4556a4c1f84670f09e14f3abb1050f0effd6b004b190bb0d51c0567a16:"/assets/cards/ho/ho-12-front.jpg",ef5f963cdb85d776e30cc08f406812b628139e1c0762da6cdd76a995d526b132:"/assets/cards/ho/ho-14-front.jpg","76445d956a01a1a6759748880ff112510881dde7c531af86812ced9080f6027d":"/assets/cards/ho/ho-17-front.jpg","5dcb19c46fe4c87775c42969ee66a2e4edf407066eb7b6e9f75ae7f06c544237":"/assets/cards/ho_plus/ho_plus-1-front.jpg",d3608718aa56d2713c83f5d14a2957ae82680551c65c06caf10fa7aab623f2b4:"/assets/cards/ho_plus/ho_plus-2-front.jpg",c0138ea658ae0afcbfe06f7c46d1dfba00a459fd012b0c81aae9c63582923191:"/assets/cards/ho_plus/ho_plus-3-front.jpg","84f830f1410ddc1388ff00d0094af433f20688408ac72c20cfd5e90bf077a494":"/assets/cards/ho_plus/ho_plus-4-front.jpg","6d418c369626afc07e65702585463fa8d7e6dc9518dab01039c73a66907ed553":"/assets/cards/hy/hy-20-front.jpg","3e5c8c4b0dc1c5c6a2e65f80c779cda8035f41399837d032585b13c9a2e58d7b":"/assets/cards/hy/hy-7-front.jpg","9541ab0e2700ffb0df842826dd163204ef7832414a0bcaa1f54f7ac98fde834f":"/assets/cards/hy/hy-24-front.jpg",e8b1063f07dd998149120cc48ce4bb6d98a7bd93967160088eba9d96b710f421:"/assets/cards/hy/hy-8-front.jpg","4f64597b35d42ae5ff6c550c73830d48ef671f57d68ff01cc630e7b2ccaf43cd":"/assets/cards/hy/hy-10-front.jpg","91850bf85a43f889c8889936afdf4db90bde65dc9e65c1b5e0108a8932ac47a9":"/assets/cards/hy/hy-11-front.jpg","91c2ebb2087607ac70d7c081e0291cc298b78781e7e3faf2ec7fc86be248dfd4":"/assets/cards/hy/hy-13-front.jpg","640e4fcde89541cd02119f60f24deed7bad79a678cf1d99cce9e7ba73f71692e":"/assets/cards/hy/hy-14-front.jpg",b24622641e65a1b75e971a3e8c31a2bf0588ba84875b5bf7d03f27f0a63af9fc:"/assets/cards/hy/hy-19-front.jpg","1576e9779c12faed9bad26006fa8a12e7be0756ed264ea3b1deb05127d239b3c":"/assets/cards/hy/hy-21-front.jpg","3674a92a567de26b6304f6aebb9823606e1f72ce9e925d7488152e2f084ec86f":"/assets/cards/hy/hy-22-front.jpg","794136e3f4a27259a85a053cf7c7adc772875f6d5e042bb0eb4aa48d4b46e434":"/assets/cards/hy/hy-23-front.jpg",d17b8a6c61b023f8b09f9ffb1748e0de2eb751a638f2d376983ae14d0bd8564d:"/assets/cards/hy_plus/hy_plus-2-front.jpg",c8310aa2df0cdec2acf8913edbd16d60aaa22deab68867b14f70cd4bba59e4f6:"/assets/cards/hy_plus/hy_plus-5-front.jpg",a8188b32f23968b98e88cb685d8af599d5a2f6570f43f4330b189dd9ce669672:"/assets/cards/hy_plus/hy_plus-8-front.jpg","237ae5dbe95f95a334369a3f6d2c4f628bc2ef4c4cfda81f637169448b0b2a78":"/assets/cards/hy_plus/hy_plus-7-front.jpg",d7c9c03a695431a59b976da9ef1433b1969e905ce1b0f7165960910d8dcda7e7:"/assets/cards/lg/lg-1-front.jpg","54e91ee7019cf98518ceff5d5eb3ae24a2c490991d9ef700107919c1d7216133":"/assets/cards/lg/lg-2-front.jpg","5109d921c42001dd49deb4453c84680c485dbd03acbbf184db44c52e20df0947":"/assets/cards/lg/lg-3-front.jpg","238151d3ee802a63f7cfab27eba567809e0f434dd0ae7ab5cbfd67e17aab320c":"/assets/cards/lg/lg-4-front.jpg",cbd722c55b5f4530d1f909ee512accfb976e160669d861b03ba8a9f1ac812088:"/assets/cards/lg/lg-10-front.jpg","51cb5bbee96271ee7948d123f441fd961511c5664f85d880339ac81e76d297ce":"/assets/cards/lg/lg-12-front.jpg","5a50ab7bd0284e099caf5991bcaebf3fd5e2f6f852a41e8164548250372e13ee":"/assets/cards/lg/lg-13-front.jpg","8b83c2b2d3abe743003e29e8ace677d3669fee9012700fbd9405fb2581c2f1c1":"/assets/cards/lg/lg-14-front.jpg",e3f20637a74add18073f9b306a299693bccd9ff1318dd1cb35bb5b237ae03b3d:"/assets/cards/lg/lg-15-front.jpg","36b7cec7580d4de56edb5692bc83f9c3c08e4a94c7a75d3dca6b9aab5c70e886":"/assets/cards/lg/lg-21-front.jpg","307424a85866d9131ebaf92eee6aa49d75c7fe86937ebb0ddb7651431de5fc2d":"/assets/cards/lg/lg-18-front.jpg","653861f0980a12fb43cbfebda4071b3ca37e094bdc80c8698d0e183d90a83ed2":"/assets/cards/lg/lg-20-front.jpg","3f3a90dac9d0a565694982c55380f9b5fb3b914147aacd6b05c37a9ca8fd19d2":"/assets/cards/lg/lg-23-front.jpg","2b4298eafb47c327a290152fbccd471da28923c5769d2a645c574c16be6a039d":"/assets/cards/lg_plus/lg_plus-7-front.jpg","3074578f141dd1726916bf8e3e4532b4b82c72b7e2d30cbd3205b91609bbfbf2":"/assets/cards/lg_plus/lg_plus-3-front.jpg",bdd1e79a3a0f11fb4aeb486ae199ac2a971f957f90ce61439360e64f5c1ffc22:"/assets/cards/lg_plus/lg_plus-6-front.jpg",c3b9c862179da114428f8db2318e87e2770ad861b7bda0046c875ddaf884683c:"/assets/cards/lg_plus/lg_plus-8-front.jpg","3b6e2c61dd5d3c61e285d5c5f1bae42d08319f1ccd8ab950dabc7012fcae2ec8":"/assets/cards/lo/lo-12-front.jpg",ec8a31e551ec7a31602e8f6dfb7266c4dd377717704a34ee1647c288e9e64013:"/assets/cards/lo/lo-10-front.jpg","58a7b4c3f1fb01ee43a7269374ed04e71909609a51d488407b9754efcd055604":"/assets/cards/lo/lo-7-front.jpg",fdffe9ed90791948ae05fe76630b10ceca9d7bd442c41e2da584527d72ad98de:"/assets/cards/lo/lo-8-front.jpg",d4574f1615eb69b5470822b40ffd0d27da741f7f3e179c671c54290ca51afc0c:"/assets/cards/lo/lo-9-front.jpg",ab0f524c4935a2945d72db20beb4776d764df5de49672ed46e91eadce168e065:"/assets/cards/lo/lo-15-front.jpg","32297c12e7745ecb9bac5727434e7fff2784c25fe2b744d73f36218acc43b0b2":"/assets/cards/lo/lo-13-front.jpg",d9ef4060c364dea670bd525f0aad18687149d8797f5a9946c66b8f14681cff0f:"/assets/cards/lo/lo-14-front.jpg","7cabdc1509214622489311c85cc0cc2857daac93cb4fc31f515fb5fb638f6098":"/assets/cards/lo/lo-16-front.jpg",d2fc0f3677e4dd64bb2bf580951612085ce1f5a36d84742f94101ba0aeb0bebd:"/assets/cards/lo/lo-17-front.jpg","492722fef12f5835e2e0917c18b55b226be409f5f60973130cfda3daaba2a963":"/assets/cards/lo/lo-18-front.jpg","03b051e124ef4ec1c76498960f9a5317bdf1bd3f91973329062ce1b1a905c796":"/assets/cards/lo/lo-19-front.jpg",c9fdad2b74bc9c08941a4348c934616abadbc335d218914419e7972dc54aaa27:"/assets/cards/lo/lo-20-front.jpg","2753d376c59037359099d989ebc9ecdc6f35b0bcc1966a526919a62e9492ba5d":"/assets/cards/lo_plus/lo_plus-1-front.jpg","78e76504372580ad38ecea1cf6ca8b6eef7f24beb4bb173023d493a2900c9213":"/assets/cards/lo_plus/lo_plus-2-front.jpg",cfd41bad24efba992152437f01605cfa070b96c24171d158eb6b38c6e062b997:"/assets/cards/lo_plus/lo_plus-3-front.jpg","56b654c93edf5b33422b575efd3ece648df66bb3b245576bcb100db2cf463b90":"/assets/cards/lo_plus/lo_plus-4-front.jpg","83e4cf361d79bf56cab85b3165d8a502c3b6369a7d91d9d74008e7446ecee5aa":"/assets/cards/tr/tr-1-front.jpg",fac9e08ed1dd2007eff99f64f58456b8f28c887ea72caf3631798f19f586c2cf:"/assets/cards/tr/tr-2-front.jpg","49e88188dd73d2dc1889616077e7b3d3a01274be0936f3cf94b0ba13ffcdd3ec":"/assets/cards/tr/tr-3-front.jpg",f9ace908e376ccf677350bf8b04446db76d5b7810e1238eed78f9636917732d5:"/assets/cards/tr/tr-4-front.jpg",e176ed5572f8b0fec1afdf7338922f6287cb2bd7e8da531363f03afad38d2855:"/assets/cards/tr/tr-5-front.jpg",dcd6e5c81f720c301fdf8b8a9bdc7d1332f5d49d859cc3b7a888c4b47abb437c:"/assets/cards/tr/tr-8-front.jpg","7a3a4bc99a08007a8634615d14bb6e8701d8046b4b357e2e53a6816b1fa4b952":"/assets/cards/tr/tr-7-front.jpg","751ef0172ef4154fa9ada26cf0748253cbdb26e77ee5d7fbeb0cb448f0417815":"/assets/cards/tr/tr-9-front.jpg","637e9420cee8da61167a68a33b51a5955c1b96d79b8b104b70a8d721fcb76d2a":"/assets/cards/tr/tr-10-front.jpg","4096df60204fa108f6f86b2219c8a27d83e68a1ccb196df7df46de4392c2b41c":"/assets/cards/tr/tr-15-front.jpg",bf2f3bb722b82651f6eae93503ee371f2eb0aeb19a3c7048ee204c111f0f7eb4:"/assets/cards/tr/tr-13-front.jpg",e3e51452f907f7c993bd47093ca97798e5c685c2662bbf839e24c197bcdec634:"/assets/cards/tr/tr-17-front.jpg","188c6abac72e21173f1f0b02deb68d8204fe9d8773eea4bf01d633d170e226e4":"/assets/cards/tr/tr-19-front.jpg","9350f91bb06a35e92994e0129874a9c12e075ecde1d97595dc94424a3d445bdf":"/assets/cards/tr_plus/tr_plus-1-front.jpg","427ee044bae11fec56f65f194e7d6f8abcb7e904b199fc4a96c58ca93bfef239":"/assets/cards/tr_plus/tr_plus-3-front.jpg",e300e383916c326e28c6ced9e9705531a202a5daef21fdee6763ad2d11e3a2d8:"/assets/cards/tr_plus/tr_plus-5-front.jpg","7438c901962c7ce3370464463ea4f1e65b4d2a4ef220b5a4032115503fc32b0b":"/assets/cards/zb/zb-1-front.jpg","1c5ed46f16057ca9fa0f10685d323abe71b88b2a416eef661e520e9ff3a4fbcf":"/assets/cards/zb/zb-2-front.jpg","64fc21d85fcd6d3a3928ce9667186a0c8316e440396b6e6ebf162ed69ea6abeb":"/assets/cards/zb/zb-3-front.jpg","69f3d2ddd129e0a3b0a3245525786cf068b2e5eafc11897c9b83e4e208fc8270":"/assets/cards/zb/zb-4-front.jpg",a96dbaf805bf2dce31353b8d02732c389101196ac8220074dd161ad97ad3b61d:"/assets/cards/zb/zb-5-front.jpg",b15c50b1b10ce0e6ee1b76b5532ba9eed3b56cdf024ff27bc6d8c5195dcd76ff:"/assets/cards/zb/zb-15-front.jpg","04c9a1429211640a93676e76f7dfe02150d7e5cd921ee79222aa156800173a71":"/assets/cards/zb/zb-9-front.jpg",cf513f83dd7e6ac363f0aaa0a028c0527a164a283b340fb356b1f607b38a8a46:"/assets/cards/zb/zb-10-front.jpg","08a5474a86442dc9ddbfbebcf9994d7d5485108285168acaa865e44cc14d5462":"/assets/cards/zb/zb-12-front.jpg","732218f61fd334436d5359accff815df2d8c54adbeb7c402336e2f2b9f04b3cd":"/assets/cards/zb/zb-22-front.jpg",ce950419d660dcd87a9760439cf739ec7878df58f21a4af49a44cc4a2265c05b:"/assets/cards/zb/zb-17-front.jpg","7efd605546127d01ae40e1be52a64b45f4174bed74d1d9c8a15a6ba2d3129bc6":"/assets/cards/zb/zb-18-front.jpg","92c305b7877de46785ee7e5b4e5c92bf94c2e761047bb4d37d3fed4ec100d8d7":"/assets/cards/zb/zb-20-front.jpg","030fd7997dc5ccd629a0e184c0ac0ad1b33d1fff9366a4131c4a1d74dbe8a9c0":"/assets/cards/zb/zb-23-front.jpg","3b5c39538c0cf52273b845c15580993cc60e2a4a67f7c27b449243029108d538":"/assets/cards/zb_plus/zb_plus-6-front.jpg","4b42de4bbd91e229d41b666598cefd2a340285f228dc0395856b5b7a22b5381b":"/assets/cards/zb_plus/zb_plus-3-front.jpg","31cd007c783ba3389e6b0a7f3ce398515d65b3ab550aab70ebfcb3d86665ad52":"/assets/cards/zb_plus/zb_plus-4-front.jpg","39a0f3d3578f021253fac1a4fb293accd68267719a9bd4707fda7419257ccfc1":"/assets/cards/zb_plus/zb_plus-5-front.jpg","2a75d8802f569be782f6ca9ef865988ecefd6f447442dd8933154a8e70dd2895":"/assets/cards/強化機雷/強化機雷-16-front.jpg","506eb3f1ac120bb2d1a61d693b9b8f00ef56b788c42a231b9203fdad0ad3aed5":"/assets/ui/card-back.jpg","2e25e08a0277638ffbe37080471ac50fe51ab4e24ea0d52a5af46b7980f76340":"/assets/cards/陸上機雷/陸上機雷-20-front.jpg","149f2bc4a9dce26a9250c94e4a9338f0edf8c90a415c999216c00440ea0a3667":"/assets/cards/ダミー/ダミー-20-front.jpg","444338c10747b07f50d0f5baeb6e9e014141c55507d748ae8d5001fe1b3e5ee3":"/assets/maps/444338c10747b07f50d0f5baeb6e9e014141c55507d748ae8d5001fe1b3e5ee3.jpg","04c1b08a573b97d5296d712ef796a7d9c5e4ed3200d8a4ae268295628de18e55":"/assets/maps/04c1b08a573b97d5296d712ef796a7d9c5e4ed3200d8a4ae268295628de18e55.jpg","9e3fcbc86b5a5563c4bb5566031e7c1fd35fda1f32d981a242889b0c2561049c":"/assets/maps/9e3fcbc86b5a5563c4bb5566031e7c1fd35fda1f32d981a242889b0c2561049c.jpg","582cf873071464b2f3ca6232d0a20b36347ffa948125d0642b330b4d8dc9c478":"/assets/maps/582cf873071464b2f3ca6232d0a20b36347ffa948125d0642b330b4d8dc9c478.jpg","0f7fd469ef1f476fc05c15df2f949f575920a92751d52fc7135f2490eb035118":"/assets/maps/0f7fd469ef1f476fc05c15df2f949f575920a92751d52fc7135f2490eb035118.jpg","224304b43b96cc1dcfb865ed84556e7b06f4068c3a5fd8c21b342a8c53c36a72":"/assets/maps/224304b43b96cc1dcfb865ed84556e7b06f4068c3a5fd8c21b342a8c53c36a72.jpg","9429fd9c15d9a339f30f6cd8ad890af69a9570e0347267c2d6636091aec8266f":"/assets/maps/9429fd9c15d9a339f30f6cd8ad890af69a9570e0347267c2d6636091aec8266f.jpg","44f518c3e3df7c83027cf6ee5990dd411a6b828f9a6d5ed1717f0a352c1654e0":"/assets/maps/44f518c3e3df7c83027cf6ee5990dd411a6b828f9a6d5ed1717f0a352c1654e0.jpg",f0abd1d4ae4b2039ed4d1b54562a66a6c9fe9b718582f6946893f42ab522a53b:"/assets/maps/f0abd1d4ae4b2039ed4d1b54562a66a6c9fe9b718582f6946893f42ab522a53b.jpg","3f14f36d964a2093258d568ac4ce3691a767cd369f3ec5ec6679a610e9f6d9bb":"/assets/maps/3f14f36d964a2093258d568ac4ce3691a767cd369f3ec5ec6679a610e9f6d9bb.jpg",e450e91d172a2414c49fef4702f6799f98b794e6ee77a412e28f81bf374ed853:"/assets/maps/e450e91d172a2414c49fef4702f6799f98b794e6ee77a412e28f81bf374ed853.jpg"},mv="embryo_preload_v1",fv=["/assets/tiles/平地0.png","/assets/tiles/砂0.png","/assets/tiles/瓦礫0.png","/assets/tiles/瓦礫1.png","/assets/tiles/瓦礫2.png","/assets/tiles/瓦礫3.png","/assets/tiles/森0.png","/assets/tiles/森1.png","/assets/tiles/森2.png","/assets/tiles/森3.png","/assets/tiles/水0.png","/assets/tiles/水1.png","/assets/tiles/水2.png","/assets/tiles/高地1.png","/assets/tiles/高地2.png","/assets/tiles/高地3.png"],gv=["/assets/tokens/AG-token.jpg","/assets/tokens/AR-token.jpg","/assets/tokens/BG-token.jpg","/assets/tokens/FO-token.jpg","/assets/tokens/HO-token.jpg","/assets/tokens/HY-token.jpg","/assets/tokens/LG-token.jpg","/assets/tokens/LO-token.jpg","/assets/tokens/TR-token.jpg","/assets/tokens/ZB-token.jpg"];function Gm(){const e=new Set;for(const n of Object.values(Vt))for(const t of n)e.add(`/assets/${t.frontImageId}`),e.add(`/assets/${t.backImageId}`);for(const n of fv)e.add(n);for(const n of Object.values(pv))n.startsWith("/assets/maps/")&&e.add(n);for(const n of gv)e.add(n);return[...e]}function hv(e){localStorage.setItem(mv,JSON.stringify({total:e,ts:Date.now()}))}async function xv(e,n){const t=Gm(),a=t.length;let r=0;e(0,a);const i=l=>new Promise(d=>{if(n!=null&&n.aborted){d();return}const u=new Image;u.onload=u.onerror=()=>{r++,e(r,a),d()},u.src=l}),s=10;for(let l=0;l<t.length&&!(n!=null&&n.aborted);l+=s)await Promise.all(t.slice(l,l+s).map(i));n!=null&&n.aborted||hv(a)}const ps=.4,ms=2.5,Qd=.12,qd=5;function vv(e=1){const[n,t]=j.useState({x:0,y:0,scale:e}),a=j.useRef(null),r=j.useRef({x:0,y:0}),i=j.useRef(!1),s=j.useRef(null),l=j.useRef({x:0,y:0,scale:e});j.useLayoutEffect(()=>{const h=s.current;if(!h)return;const x=h.querySelector(".game-board");if(!x)return;const p=h.clientWidth,_=h.clientHeight,b=x.offsetWidth,v=x.offsetHeight;if(!p||!_||!b||!v)return;const y=Math.min(p/b,_/v),I=Math.min(ms,Math.max(ps,y)),N=(p-b*I)/2,T=(_-v*I)/2,k={x:N,y:T,scale:I};l.current=k,t(k)},[]),j.useEffect(()=>{const h=s.current;if(!h)return;const x=p=>{p.preventDefault();const _=p.deltaY<0?Qd:-Qd;t(b=>({...b,scale:Math.min(ms,Math.max(ps,b.scale+_))}))};return h.addEventListener("wheel",x,{passive:!1}),()=>h.removeEventListener("wheel",x)},[]),j.useEffect(()=>{const h=s.current;if(!h)return;let x=0,p=0,_=0,b=!1,v={x:0,y:0};const y=(k,S)=>Math.sqrt((S.clientX-k.clientX)**2+(S.clientY-k.clientY)**2),I=k=>{k.touches.length===1?(x=k.touches[0].clientX,p=k.touches[0].clientY,v={x,y:p},b=!1):k.touches.length===2&&(k.preventDefault(),_=y(k.touches[0],k.touches[1]),x=(k.touches[0].clientX+k.touches[1].clientX)/2,p=(k.touches[0].clientY+k.touches[1].clientY)/2)},N=k=>{if(k.touches.length===1){const S=k.touches[0].clientX-x,$=k.touches[0].clientY-p;if(!b){const E=k.touches[0].clientX-v.x,J=k.touches[0].clientY-v.y;Math.sqrt(E**2+J**2)>qd&&(b=!0)}b&&(k.preventDefault(),t(E=>({...E,x:E.x+S,y:E.y+$}))),x=k.touches[0].clientX,p=k.touches[0].clientY}else if(k.touches.length===2){k.preventDefault();const S=y(k.touches[0],k.touches[1]),$=(k.touches[0].clientX+k.touches[1].clientX)/2,E=(k.touches[0].clientY+k.touches[1].clientY)/2;if(_>0){const A=S/_;t(O=>{const K=Math.min(ms,Math.max(ps,O.scale*A));return{...O,scale:K}})}const J=$-x,V=E-p;t(A=>({...A,x:A.x+J,y:A.y+V})),_=S,x=$,p=E}},T=k=>{k.touches.length<2&&(_=0),k.touches.length===0&&(b=!1),k.touches.length===1&&(x=k.touches[0].clientX,p=k.touches[0].clientY)};return h.addEventListener("touchstart",I,{passive:!1}),h.addEventListener("touchmove",N,{passive:!1}),h.addEventListener("touchend",T),h.addEventListener("touchcancel",T),()=>{h.removeEventListener("touchstart",I),h.removeEventListener("touchmove",N),h.removeEventListener("touchend",T),h.removeEventListener("touchcancel",T)}},[]);const d=j.useCallback(h=>{h.button===0&&(a.current={x:h.clientX,y:h.clientY},r.current={x:h.clientX,y:h.clientY},i.current=!1)},[]),u=j.useCallback(h=>{if(!a.current)return;const x=h.clientX-a.current.x,p=h.clientY-a.current.y,_=Math.sqrt(x*x+p*p);if(!i.current&&_>qd&&(i.current=!0),i.current){const b=h.clientX-r.current.x,v=h.clientY-r.current.y;t(y=>({...y,x:y.x+b,y:y.y+v}))}r.current={x:h.clientX,y:h.clientY}},[]),f=j.useCallback(h=>{a.current=null,i.current=!1},[]),m=j.useCallback(()=>{a.current=null,i.current=!1},[]),g=j.useCallback(()=>{t(l.current)},[]);return{transform:n,viewportRef:s,isPanning:i.current,handlers:{onMouseDown:d,onMouseMove:u,onMouseUp:f,onMouseLeave:m},resetView:g}}function bv({x:e,y:n,value:t}){return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"fx-damage-number",style:{left:e,top:n},children:["-",t]}),o.jsx("style",{children:yv})]})}const yv=`
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
`;function _v({x:e,y:n,variant:t}){return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:`fx-impact fx-impact--${t}`,style:{left:e,top:n},children:[t==="melee"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"fx-impact__slash fx-impact__slash--1"}),o.jsx("div",{className:"fx-impact__slash fx-impact__slash--2"})]}),t==="ranged"&&o.jsx("div",{className:"fx-impact__beam"}),t==="charge"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"fx-impact__ring fx-impact__ring--1"}),o.jsx("div",{className:"fx-impact__ring fx-impact__ring--2"})]})]}),o.jsx("style",{children:Iv})]})}const Iv=`
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
`;function kv({x:e,y:n}){return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"fx-explosion",style:{left:e,top:n},children:[o.jsx("div",{className:"fx-explosion__flash"}),o.jsx("div",{className:"fx-explosion__ring fx-explosion__ring--1"}),o.jsx("div",{className:"fx-explosion__ring fx-explosion__ring--2"}),o.jsx("div",{className:"fx-explosion__ring fx-explosion__ring--3"}),Array.from({length:8}).map((t,a)=>o.jsx("div",{className:"fx-explosion__particle",style:{"--angle":`${a*45}deg`,"--delay":`${a*20}ms`,"--dist":`${30+Math.random()*20}px`}},a))]}),o.jsx("style",{children:jv})]})}const jv=`
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
`;function wv({defId:e,isAuxiliary:n,playerId:t}){const a=te(e);if(!a)return null;const r=t==="player1"?"P1":"P2",i=t==="player1"?"var(--color-accent)":"#ff00c8";return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"fx-card-reveal",style:{position:"fixed",bottom:"80px",left:"50%",transform:"translateX(-50%)",zIndex:800,pointerEvents:"none"},children:[o.jsxs("div",{className:"fx-card-reveal__label",style:{color:i},children:[r," ",n?"抽到辅助卡":"抽牌"]}),o.jsx("div",{className:"fx-card-reveal__card",style:{borderColor:i},children:o.jsxs("div",{className:"fx-card-reveal__inner",children:[o.jsx("div",{className:"fx-card-reveal__back",children:o.jsx("img",{src:"/assets/ui/card-back.jpg",alt:"card back"})}),o.jsx("div",{className:"fx-card-reveal__front",children:o.jsx("img",{src:`/assets/${a.frontImageId}`,alt:a.nameCn})})]})}),o.jsxs("div",{className:"fx-card-reveal__name",style:{color:i},children:[a.nameCn,n&&o.jsx("span",{className:"fx-card-reveal__aux-badge",children:"辅助"})]})]}),o.jsx("style",{children:Sv})]})}const Sv=`
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
`;function Cv({defId:e,isBomb:n,index:t,total:a}){const r=te(e);if(!r)return null;const i=n?"fx-card-destroy--bomb":"";return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:`fx-card-destroy ${i}`,style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:810,pointerEvents:"none"},children:[o.jsxs("div",{className:"fx-card-destroy__card",children:[o.jsx("img",{src:`/assets/${r.frontImageId}`,alt:r.nameCn}),o.jsx("div",{className:"fx-card-destroy__flash"})]}),o.jsxs("div",{className:"fx-card-destroy__label",children:[r.nameCn," 被摧毁",n&&o.jsx("span",{className:"fx-card-destroy__bomb-badge",children:"💣 诱爆"})]}),o.jsxs("div",{className:"fx-card-destroy__counter",children:[t+1," / ",a]})]}),o.jsx("style",{children:Nv})]})}const Nv=`
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
`,gl=62,fs=Math.round(gl*(1042/756)),eu=68,Mv=6,nu=140;function Tv({p1Cards:e,p2Cards:n}){const[t,a]=j.useState("init"),[r,i]=j.useState(null);return j.useEffect(()=>{const s=document.querySelector(".unit-token-abs--p1"),l=document.querySelector(".unit-token-abs--p2"),d=s==null?void 0:s.getBoundingClientRect(),u=l==null?void 0:l.getBoundingClientRect();i({p1:d?{x:d.left+d.width/2,y:d.top+d.height/2}:{x:window.innerWidth*.3,y:window.innerHeight*.55},p2:u?{x:u.left+u.width/2,y:u.top+u.height/2}:{x:window.innerWidth*.7,y:window.innerHeight*.45}});const f=setTimeout(()=>a("fan"),50),m=setTimeout(()=>a("hold"),650),g=setTimeout(()=>a("cluster"),1650),h=setTimeout(()=>a("exit"),2e3);return()=>{[f,m,g,h].forEach(clearTimeout)}},[]),r?Dr.createPortal(o.jsxs("div",{style:{position:"fixed",inset:0,zIndex:900,pointerEvents:"none"},children:[o.jsx(tu,{cards:e,origin:r.p1,phase:t,color:"#00f0ff",label:"P1"}),o.jsx(tu,{cards:n,origin:r.p2,phase:t,color:"#ff8844",label:"P2"})]}),document.body):null}function tu({cards:e,origin:n,phase:t,color:a,label:r}){if(e.length===0)return null;const i=e.length,l=(i-1)*eu>window.innerWidth*.7?Math.floor(window.innerWidth*.7/Math.max(i-1,1)):eu,d=t==="hold"||t==="cluster";return o.jsxs("div",{style:{position:"fixed",left:n.x,top:n.y},children:[o.jsxs("div",{style:{position:"absolute",top:-(nu+fs/2+28),left:0,transform:"translateX(-50%)",color:a,fontSize:"0.78rem",fontWeight:"bold",whiteSpace:"nowrap",textShadow:`0 0 10px ${a}, 1px 1px 3px #000`,opacity:d?1:0,transition:"opacity 250ms",letterSpacing:"0.06em"},children:[r,"  弃牌 ×",i]}),e.map((u,f)=>{const m=te(u.defId),g=(i-1)/2,h=f-g,x=h*l,p=-nu,_=h*Mv;let b,v,y,I,N;switch(t){case"init":b=0,v=0,y=0,I=.15,N=0;break;case"fan":case"hold":b=x,v=p,y=_,I=1,N=1;break;case"cluster":b=0,v=p,y=0,I=.85,N=1;break;case"exit":default:b=0,v=p-520,y=0,I=.2,N=0;break}const T=f*28;let k;switch(t){case"fan":k=[`transform 480ms cubic-bezier(0.34,1.56,0.64,1) ${T}ms`,`opacity   300ms ease-out ${T}ms`].join(", ");break;case"hold":k="none";break;case"cluster":k="transform 320ms ease-in, opacity 150ms ease-in";break;case"exit":k="transform 450ms ease-in, opacity 380ms ease-in 60ms";break;default:k="none"}return o.jsx("div",{style:{position:"absolute",width:gl,height:fs,left:-gl/2,top:-fs/2,borderRadius:5,overflow:"hidden",border:`1px solid ${a}55`,boxShadow:`0 6px 20px rgba(0,0,0,0.7), 0 0 8px ${a}44`,zIndex:f,transform:`translate(${b}px, ${v}px) rotate(${y}deg) scale(${I})`,opacity:N,transition:k,willChange:"transform, opacity"},children:m?o.jsx("img",{src:`/assets/${m.frontImageId}`,alt:m.nameCn,style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1}):o.jsx("div",{style:{width:"100%",height:"100%",background:"#222"}})},u.instanceId)})]})}const hl=62,gs=Math.round(hl*(1042/756)),au=52,Ev=5,ru=120;function Dv({playerId:e,count:n}){const[t,a]=j.useState("init"),[r,i]=j.useState(null),[s,l]=j.useState(null);if(j.useEffect(()=>{const u=e==="player1"?".mp__deck--p1":".mp__deck--p2",f=document.querySelector(u),m=document.querySelector(e==="player1"?".unit-token-abs--p1":".unit-token-abs--p2"),g=f==null?void 0:f.getBoundingClientRect(),h=m==null?void 0:m.getBoundingClientRect();i(g?{x:g.left+g.width/2,y:g.top+g.height/2}:{x:window.innerWidth*.5,y:window.innerHeight*.85}),l(h?{x:h.left+h.width/2,y:h.top+h.height/2}:{x:e==="player1"?window.innerWidth*.3:window.innerWidth*.7,y:e==="player1"?window.innerHeight*.55:window.innerHeight*.45});const x=setTimeout(()=>a("spread"),50),p=setTimeout(()=>a("hold"),600),_=setTimeout(()=>a("cluster"),900),b=setTimeout(()=>a("fly"),1200);return()=>{[x,p,_,b].forEach(clearTimeout)}},[e]),!r||!s)return null;const d=e==="player1"?"#00f0ff":"#ff8844";return Dr.createPortal(o.jsx("div",{style:{position:"fixed",inset:0,zIndex:900,pointerEvents:"none"},children:o.jsx($v,{count:n,deckPos:r,mechaPos:s,phase:t,color:d,playerId:e})}),document.body)}function $v({count:e,deckPos:n,mechaPos:t,phase:a,color:r,playerId:i}){if(e===0)return null;const s=e,d=(s-1)*au>window.innerWidth*.6?Math.floor(window.innerWidth*.6/Math.max(s-1,1)):au,u=t.x-n.x,f=t.y-n.y,m=a==="hold"||a==="cluster",g=`${i==="player1"?"P1":"P2"} 抽牌 ×${s}`;return o.jsxs("div",{style:{position:"fixed",left:n.x,top:n.y},children:[o.jsx("div",{style:{position:"absolute",top:-(ru+gs/2+28),left:0,transform:"translateX(-50%)",color:r,fontSize:"0.78rem",fontWeight:"bold",whiteSpace:"nowrap",textShadow:`0 0 10px ${r}, 1px 1px 3px #000`,opacity:m?1:0,transition:"opacity 250ms",letterSpacing:"0.06em"},children:g}),Array.from({length:s},(h,x)=>{const p=(s-1)/2,_=x-p,b=_*d,v=-ru,y=_*Ev;let I,N,T,k,S;switch(a){case"init":I=0,N=0,T=0,k=.15,S=0;break;case"spread":case"hold":I=b,N=v,T=y,k=1,S=1;break;case"cluster":I=0,N=v,T=0,k=.85,S=1;break;case"fly":default:I=u,N=f,T=0,k=.2,S=0;break}const $=x*24;let E;switch(a){case"spread":E=[`transform 480ms cubic-bezier(0.34,1.56,0.64,1) ${$}ms`,`opacity   300ms ease-out ${$}ms`].join(", ");break;case"hold":E="none";break;case"cluster":E="transform 280ms ease-in, opacity 150ms ease-in";break;case"fly":E="transform 400ms cubic-bezier(0.4,0,1,1), opacity 300ms ease-in 80ms";break;default:E="none"}return o.jsx("div",{style:{position:"absolute",width:hl,height:gs,left:-hl/2,top:-gs/2,borderRadius:5,overflow:"hidden",border:`1px solid ${r}55`,boxShadow:`0 6px 20px rgba(0,0,0,0.7), 0 0 8px ${r}44`,zIndex:x,transform:`translate(${I}px, ${N}px) rotate(${T}deg) scale(${k})`,opacity:S,transition:E,willChange:"transform, opacity"},children:o.jsx("img",{src:"/assets/ui/card-back.jpg",alt:"card back",style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1})},x)})]})}const xl=56,vl=Math.round(xl*(1042/756));function Av({playerId:e}){const[n,t]=j.useState("face-up"),[a,r]=j.useState(null);if(j.useEffect(()=>{const s=e==="player1"?".mp__deck--p1":".mp__deck--p2",l=document.querySelector(s),d=l==null?void 0:l.getBoundingClientRect();r(d?{x:d.left+d.width/2,y:d.top+d.height/2}:{x:window.innerWidth*.5,y:window.innerHeight*.85});const u=setTimeout(()=>t("flip"),150),f=setTimeout(()=>t("face-down"),500),m=setTimeout(()=>t("fade"),650);return()=>{[u,f,m].forEach(clearTimeout)}},[e]),!a)return null;const i=e==="player1"?"#00f0ff":"#ff8844";return Dr.createPortal(o.jsxs("div",{style:{position:"fixed",inset:0,zIndex:900,pointerEvents:"none"},children:[o.jsxs("div",{style:{position:"fixed",left:a.x,top:a.y},children:[[0,1,2].map(s=>o.jsx(zv,{index:s,phase:n,color:i},s)),o.jsx("div",{style:{position:"absolute",top:-(vl/2+32),left:0,transform:"translateX(-50%)",color:i,fontSize:"0.78rem",fontWeight:"bold",whiteSpace:"nowrap",textShadow:`0 0 10px ${i}, 1px 1px 3px #000`,letterSpacing:"0.06em",opacity:n==="face-up"||n==="flip"||n==="face-down"?1:0,transition:"opacity 200ms"},children:"♻️ 重洗牌组"})]}),o.jsx("style",{children:Vv})]}),document.body)}function zv({index:e,phase:n,color:t}){const a=(e-1)*3,r=(e-1)*2;let i;switch(n){case"face-up":case"flip":case"face-down":i=1;break;case"fade":i=0;break}const s=n==="flip"?"reshuffle-card--flipping":n==="face-down"||n==="fade"?"reshuffle-card--flipped":"";return o.jsxs("div",{className:`reshuffle-card ${s}`,style:{position:"absolute",width:xl,height:vl,left:-xl/2+a,top:-vl/2+r,perspective:600,opacity:i,transition:"opacity 200ms ease-in",willChange:"opacity",zIndex:e},children:[o.jsx("div",{className:"reshuffle-card__face reshuffle-card__front",style:{background:t+"33",border:`2px solid ${t}88`,borderRadius:5,boxShadow:`0 0 12px ${t}55`}}),o.jsx("div",{className:"reshuffle-card__face reshuffle-card__back",style:{borderRadius:5,overflow:"hidden",border:"1px solid #ffffff44",boxShadow:"0 4px 12px rgba(0,0,0,0.6)"},children:o.jsx("img",{src:"/assets/ui/card-back.jpg",alt:"card back",style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1})})]})}const Vv=`
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
`,cn=68;function Pv(){const{currentEvent:e}=Ar();return e?o.jsxs("div",{className:"effects-layer",style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:20},children:[e.type==="damage_number"&&o.jsx(bv,{x:e.position.col*cn+cn/2,y:e.position.row*cn+cn/2,value:e.value},`dmg-${Date.now()}`),(e.type==="ranged_hit"||e.type==="melee_hit"||e.type==="charge_hit")&&o.jsx(_v,{x:e.targetPos.col*cn+cn/2,y:e.targetPos.row*cn+cn/2,variant:e.type==="ranged_hit"?"ranged":e.type==="melee_hit"?"melee":"charge"},`hit-${Date.now()}`),e.type==="mine_explode"&&o.jsx(kv,{x:e.position.col*cn+cn/2,y:e.position.row*cn+cn/2},`exp-${Date.now()}`),e.type==="card_draw"&&o.jsx(wv,{defId:e.defId,isAuxiliary:e.isAuxiliary,playerId:e.playerId},`draw-${e.card.instanceId}`),e.type==="card_destroy"&&o.jsx(Cv,{defId:e.defId,isBomb:e.isBomb,index:e.index,total:e.total},`destroy-${e.card.instanceId}`),e.type==="cleanup_discard"&&o.jsx(Tv,{p1Cards:e.p1Cards,p2Cards:e.p2Cards},`cleanup-${Date.now()}`),e.type==="batch_card_draw"&&o.jsx(Dv,{playerId:e.playerId,count:e.count},`draw-${e.playerId}-${Date.now()}`),e.type==="deck_reshuffle"&&o.jsx(Av,{playerId:e.playerId},`reshuffle-${e.playerId}-${Date.now()}`)]}):null}function wa(){const{state:e}=Ce(),{map:n,mines:t}=e,{currentEvent:a,animatedPositions:r}=Ar(),{transform:i,viewportRef:s,handlers:l,resetView:d}=vv(.9),u=(a==null?void 0:a.type)==="screen_shake"?`board-transform board-shake board-shake--${a.intensity}`:"board-transform";return o.jsxs("div",{ref:s,className:"board-viewport",...l,style:{cursor:"grab"},children:[o.jsxs("div",{className:u,style:{transform:`translate(${i.x}px, ${i.y}px) scale(${i.scale})`,transformOrigin:"top left"},children:[o.jsx("div",{className:"game-board",style:{gridTemplateColumns:`repeat(${n.width}, var(--cell-size))`,gridTemplateRows:`repeat(${n.height}, var(--cell-size))`},children:n.cells.flatMap((f,m)=>f.map((g,h)=>o.jsx(Rv,{cell:g,row:m,col:h,mines:t},`${m}-${h}`)))}),e.playerIds.map((f,m)=>{const g=e.players[f];return!g||g.isDefeated?null:o.jsx(Lv,{player:g,side:`p${m+1}`,playerIndex:m,color:wc(e,f),animatedPos:r[f]??null},f)}),o.jsx(Pv,{})]}),o.jsx("button",{className:"board-reset-btn",onClick:d,title:"重置视角",children:"⟳"})]})}function Rv({cell:e,row:n,col:t,mines:a}){const r=hc(e),i=e.terrain==="highland"&&e.elevation>0?`+${e.elevation}`:null,s=a.filter(l=>l.position.row===n&&l.position.col===t);return o.jsxs("div",{className:`board-cell board-cell--${e.terrain}`,style:{backgroundImage:`url("${r}")`},"data-row":n,"data-col":t,children:[i&&o.jsx("span",{className:"board-cell__elev",children:i}),s.map((l,d)=>o.jsx(Ov,{mine:l,offset:d*4},l.id))]})}function Lv({player:e,side:n,playerIndex:t,color:a,animatedPos:r}){const i=q.find(m=>m.id===e.unitId);if(!i)return null;const s=(r==null?void 0:r.pos)??e.position,l=(r==null?void 0:r.facing)??e.facing,d={N:0,E:90,S:180,W:270}[l]??0,u=(()=>{switch(l){case"N":return{top:0,left:"50%",translate:"-50% 0"};case"S":return{bottom:0,left:"50%",translate:"-50% 0"};case"E":return{right:0,top:"50%",translate:"0 -50%"};case"W":return{left:0,top:"50%",translate:"0 -50%"};default:return{top:0,left:"50%",translate:"-50% 0"}}})(),f=`P${t+1}`;return o.jsxs("div",{className:`unit-token-abs unit-token-abs--${n}`,style:{left:`calc(${s.col} * var(--cell-size))`,top:`calc(${s.row} * var(--cell-size))`,width:"var(--cell-size)",height:"var(--cell-size)","--token-color":a},children:[o.jsx("div",{className:"unit-token-abs__label",style:{borderColor:a,backgroundColor:a+"33"},title:`${f} ${i.nameCn}`,children:f}),o.jsx("span",{className:"unit-token-abs__facing-arrow",style:{...u,transform:`rotate(${d}deg)`,color:a},title:`机头朝向：${e.facing}`,children:"▲"})]})}function Ov({mine:e,offset:n}){const t=e.kind==="real"?"隐藏机雷指示物":"隐藏替身雷指示物";return o.jsx("div",{className:"mine-token",style:{transform:`translate(${n}px, ${n}px)`},title:t,children:o.jsx("span",{className:"mine-token__icon",children:"◆"})})}const Kv=250,Jv=480,Bv=2e3,ri=252,jo=Math.round(ri*(1042/756)),Ft=12;function Lt(){const[e,n]=j.useState(null),t=j.useRef(null),a=j.useRef(null),r=j.useRef(null),i=j.useRef({x:0,y:0}),s=j.useRef(!1),l=()=>{t.current&&(clearTimeout(t.current),t.current=null),a.current&&(clearTimeout(a.current),a.current=null),r.current&&(clearTimeout(r.current),r.current=null)},d=j.useCallback(()=>{l(),n(null)},[]),u=j.useCallback(f=>({onMouseEnter:m=>{i.current={x:m.clientX,y:m.clientY},l(),t.current=setTimeout(()=>{n({src:f,x:i.current.x,y:i.current.y})},Kv)},onMouseMove:m=>{i.current={x:m.clientX,y:m.clientY},n(g=>g&&{...g,x:m.clientX,y:m.clientY})},onMouseLeave:()=>d(),onTouchStart:m=>{const g=m.touches[0];s.current=!1,l(),a.current=setTimeout(()=>{s.current||(n({src:f,x:g.clientX,y:g.clientY}),r.current=setTimeout(()=>n(null),Bv))},Jv)},onTouchMove:()=>{s.current=!0,d()},onTouchEnd:()=>{l()}}),[d]);return{zoom:e,hide:d,getZoomHandlers:u}}function Fv(e,n){const t=window.innerWidth,a=window.innerHeight;let r=e+18;r+ri+Ft>t&&(r=e-ri-18);let i=n-jo/2;return i<Ft&&(i=Ft),i+jo>a-Ft&&(i=a-jo-Ft),{left:Math.max(Ft,r),top:i}}function Ot({zoom:e}){if(!e)return null;const{left:n,top:t}=Fv(e.x,e.y);return Dr.createPortal(o.jsxs("div",{style:{position:"fixed",left:n,top:t,width:ri,height:jo,zIndex:99999,pointerEvents:"none",borderRadius:8,overflow:"hidden",boxShadow:"0 12px 40px rgba(0,0,0,0.75), 0 0 0 2px rgba(255,255,255,0.15)",background:"#111",animation:"card-zoom-in 0.12s ease-out both"},children:[o.jsx("img",{src:e.src,alt:"",style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1}),o.jsx("style",{children:Gv})]}),document.body)}const Gv=`
@keyframes card-zoom-in {
  from { opacity: 0; transform: scale(0.88); }
  to   { opacity: 1; transform: scale(1); }
}
`;function bl(e){return`P${e.replace("player","")}`}function Hv(e,n){const t=Vt[n]??[];return[...e].sort((a,r)=>{const i=t.findIndex(l=>l.id===a.defId),s=t.findIndex(l=>l.id===r.defId);return i-s})}function Uv(e,n,t,a,r,i){function s(h){if(!h)return null;const x=[...e.hand,...e.auxiliary].find(p=>p.instanceId===h);return x?r(x.defId)??null:null}const l=s(t),d=s(a),u=fn(e,r,"movement"),f=e.position,m=[];let g=[f];if(l){if(l.actionType==="movement"){const h=(l.movementValue??0)+(u.wheel?2:0);if(h>0){const x=Mi(i,f,h,[n],u,e.facing);g=x.map(p=>p.pos),m.push(...x.map(p=>({pos:p.pos,cls:"preview-move-s1"})))}}else if(l.actionType==="ranged"){const h=l.rangeMin??1,x=l.rangeMax??6;for(let p=0;p<i.height;p++)for(let _=0;_<i.width;_++)Ke(f,{row:p,col:_})>=h&&Ke(f,{row:p,col:_})<=x&&m.push({pos:{row:p,col:_},cls:"preview-atk-s1"})}else if(l.actionType==="melee"||l.actionType==="charge")for(const[h,x]of[[-1,0],[1,0],[0,-1],[0,1]]){const p=f.row+h,_=f.col+x;p>=0&&p<i.height&&_>=0&&_<i.width&&m.push({pos:{row:p,col:_},cls:"preview-atk-s1"})}}if(d){const h=new Map,x=p=>`${p.row},${p.col}`;if(d.actionType==="movement"){const p=(d.movementValue??0)+(u.wheel?2:0);if(p>0){for(const _ of g)Eh(i,_,p,[n],u).forEach(b=>h.set(x(b.pos),b.pos));h.forEach(_=>m.push({pos:_,cls:"preview-move-s2"}))}}else if(d.actionType==="ranged"){const p=d.rangeMin??1,_=d.rangeMax??6;for(const b of g)for(let v=0;v<i.height;v++)for(let y=0;y<i.width;y++){const I=Ke(b,{row:v,col:y});I>=p&&I<=_&&h.set(x({row:v,col:y}),{row:v,col:y})}h.forEach(b=>m.push({pos:b,cls:"preview-atk-s2"}))}else if(d.actionType==="melee"||d.actionType==="charge"){for(const p of g)for(const[_,b]of[[-1,0],[1,0],[0,-1],[0,1]]){const v=p.row+_,y=p.col+b;v>=0&&v<i.height&&y>=0&&y<i.width&&h.set(x({row:v,col:y}),{row:v,col:y})}h.forEach(p=>m.push({pos:p,cls:"preview-atk-s2"}))}}return m}const Wv=["board-cell--preview-move-s1","board-cell--preview-move-s2","board-cell--preview-atk-s1","board-cell--preview-atk-s2"];function ou(){document.querySelectorAll(".board-cell").forEach(e=>Wv.forEach(n=>e.classList.remove(n)))}const Zv=[{id:"hand",label:"手牌",icon:"🃏"},{id:"auxiliary",label:"辅助区",icon:"⚙️"},{id:"discard",label:"弃牌区",icon:"♻️"},{id:"destroyed",label:"已破坏",icon:"💀"}];function oi(){const{state:e,dispatch:n,aiConfig:t}=Ce(),{isAnimating:a}=Ar(),r=()=>n({type:"ADVANCE_PLOT_STEP"});if(j.useEffect(()=>{if(e.phase!=="plotting"||a)return;const s=e.plottingStep;if(!s||!s.startsWith("transition_to_"))return;const l=s.replace("transition_to_","");if(!Ae(t,l))return;const d=setTimeout(r,400);return()=>clearTimeout(d)},[e.plottingStep,e.phase,a,t]),e.phase!=="plotting"||a)return null;const i=e.plottingStep;if(i&&i.startsWith("transition_to_")){const s=i.replace("transition_to_","");return Ae(t,s)?null:o.jsx(Qv,{onContinue:r,playerLabel:bl(s),hint:"请确认对方不在旁后开始布局"})}return null}function la(){const{state:e,dispatch:n,getCard:t,aiConfig:a}=Ce(),{plottingStep:r}=e;if(e.phase!=="plotting"||r==="complete"||r===null||r.startsWith("transition_to_"))return null;const i=r,s=Ae(a,i),l=zr(a,i);return o.jsx(Yv,{activePlottingPlayerId:i,getCard:t,isAI:s,aiDifficulty:l,onConfirm:(d,u)=>{n({type:"PLOT_CARD",playerId:i,seg:1,instanceId:d}),n({type:"PLOT_CARD",playerId:i,seg:2,instanceId:u}),n({type:"CONFIRM_PLOT",playerId:i})}},i)}function Yv({activePlottingPlayerId:e,getCard:n,onConfirm:t,isAI:a=!1,aiDifficulty:r="hard"}){const{state:i,dispatch:s,exposureMode:l}=Ce(),[d,u]=j.useState(null),[f,m]=j.useState(null),[g,h]=j.useState("hand"),[x,p]=j.useState(e);function _(A){for(const O of A)s({type:"ADD_LOG",message:O})}const b=x===e||l,v=i.players[x],y=i.players[e],I=A=>wc(i,A),N=I(e),T=(()=>{const A=i.playerIds.filter(z=>z!==e&&i.teams[z]!==i.teams[e]&&!i.players[z].isDefeated);if(A.length===0)return null;const O=y.position;let K=A[0],M=Math.max(Math.abs(i.players[A[0]].position.row-O.row),Math.abs(i.players[A[0]].position.col-O.col));for(let z=1;z<A.length;z++){const R=i.players[A[z]].position,D=Math.max(Math.abs(R.row-O.row),Math.abs(R.col-O.col));D<M&&(K=A[z],M=D)}return i.players[K]})();j.useEffect(()=>{h(x===e?"hand":"auxiliary")},[x,e]),j.useEffect(()=>{const A=(T==null?void 0:T.position)??{row:0,col:0},O=Uv(y,A,d,f,n,i.map);return ou(),O.forEach(({pos:K,cls:M})=>{const z=document.querySelector(`.board-cell[data-row="${K.row}"][data-col="${K.col}"]`);z&&z.classList.add(`board-cell--${M}`)}),ou},[d,f]),j.useEffect(()=>{if(!a)return;const A=i.playerIds.filter(M=>M!==e&&i.teams[M]!==i.teams[e]&&!i.players[M].isDefeated).map(M=>i.players[M]),O=A.length>0?A:[y],K=setTimeout(()=>{const{seg1:M,seg2:z,reasoning:R}=wx(y,O,n,r,i.map);_(R),M&&z?t(M,z):M?t(M,M):s({type:"CONFIRM_PLOT",playerId:e})},800);return()=>clearTimeout(K)},[a]);function k(A){if(d===A){u(null);return}if(f===A){m(null);return}if(!d){u(A);return}if(!f){m(A);return}m(A)}function S(A){return A==="deck"?v.deck.filter(O=>!O.destroyed).length:A==="hand"?v.hand.filter(O=>!O.destroyed).length:A==="auxiliary"?v.auxiliary.length:A==="discard"?v.discard.length:A==="destroyed"?v.destroyedCards.length:0}function $(A){return A==="deck"?b?Hv(v.deck,v.unitId):[]:A==="hand"?v.hand.filter(O=>!O.destroyed):A==="auxiliary"?v.auxiliary:A==="discard"?v.discard:A==="destroyed"?v.destroyedCards:[]}const E=d!==null&&f!==null,J=b,V=g==="deck"&&b;return o.jsxs("div",{className:"plot-content",children:[o.jsxs("div",{className:"plot-panel__header",children:[o.jsx("span",{className:"plot-panel__player",style:{color:N},children:bl(e)}),o.jsx("span",{className:"plot-panel__prompt",children:"布局中"})]}),o.jsx("div",{className:"plot-tab-row",children:i.playerIds.map(A=>{const O=x===A,K=A===e;return o.jsxs("button",{className:`plot-tab${O?" plot-tab--active":""}`,style:O?{color:I(A),borderBottomColor:I(A)}:void 0,onClick:()=>p(A),children:[bl(A),K&&!O&&o.jsx("span",{className:"plot-tab__dot",style:{background:I(A)}})]},A)})}),x===e?o.jsxs("div",{className:"plot-slots",children:[o.jsx(iu,{label:"主要阶段 1",cardInstanceId:d,getCard:n,hand:y.hand,onClear:()=>u(null),color:N}),o.jsx(iu,{label:"主要阶段 2",cardInstanceId:f,getCard:n,hand:y.hand,onClear:()=>m(null),color:N})]}):l?o.jsxs("div",{className:"plot-slots",children:[o.jsx(su,{label:"主要阶段 1",card:v.plotSeg1,getCard:n}),o.jsx(su,{label:"主要阶段 2",card:v.plotSeg2,getCard:n})]}):o.jsxs("div",{className:"plot-slots",children:[o.jsxs("div",{className:"plot-slot-locked",children:[o.jsx("span",{children:"🔒"}),o.jsx("span",{children:"主要阶段 1"}),o.jsx("span",{className:"plot-slot-locked__hint",children:"对方已锁定"})]}),o.jsxs("div",{className:"plot-slot-locked",children:[o.jsx("span",{children:"🔒"}),o.jsx("span",{children:"主要阶段 2"}),o.jsx("span",{className:"plot-slot-locked__hint",children:"对方已锁定"})]})]}),o.jsxs("div",{className:"plot-zone-tabs",children:[o.jsxs("button",{className:`plot-zone-tab${V?" plot-zone-tab--active":""}`,style:V?{borderColor:N}:void 0,onClick:J?()=>h("deck"):void 0,disabled:!J,title:J?"卡组：按资料集顺序查看":"对方卡组不可查看",children:[o.jsx("span",{className:"plot-zone-tab__icon",children:J?"🂠":"🔒"}),o.jsx("span",{className:"plot-zone-tab__label",children:"卡组"}),o.jsx("span",{className:"plot-zone-tab__count",children:v.deck.filter(A=>!A.destroyed).length})]}),Zv.map(({id:A,label:O,icon:K})=>{const M=g===A;return o.jsxs("button",{className:`plot-zone-tab${M?" plot-zone-tab--active":""}`,style:M?{borderColor:b?N:I(x)}:void 0,onClick:()=>h(A),title:`${O}：点击查看`,children:[o.jsx("span",{className:"plot-zone-tab__icon",children:K}),o.jsx("span",{className:"plot-zone-tab__label",children:O}),o.jsx("span",{className:"plot-zone-tab__count",children:S(A)})]},A)})]}),o.jsx("div",{className:"plot-zone-view",children:g==="hand"&&!b?o.jsxs("div",{className:"plot-zone-private",children:["🔒 对方手牌不可查看",o.jsx("br",{}),o.jsxs("span",{className:"plot-zone-private__count",children:["共 ",S("hand")," 张"]})]}):$(g).length===0?o.jsx("p",{className:"plot-zone-empty",children:"（此区域为空）"}):o.jsx("div",{className:"plot-card-grid",children:$(g).map(A=>{const O=n(A.defId),K=g==="hand"&&x===e,M=A.instanceId===d,z=A.instanceId===f;return o.jsx(Xv,{card:A,def:O,isSelected:M||z,segLabel:M?"①":z?"②":null,onClick:K?()=>k(A.instanceId):void 0},A.instanceId)})})}),o.jsx("div",{className:"plot-footer",children:o.jsx("button",{className:"plot-confirm-btn",disabled:!E,style:E?{borderColor:N,color:N}:void 0,onClick:()=>{d&&f&&t(d,f)},children:E?"确定布局":`请选择主要阶段 ${d?"2":"1"} 的卡牌`})}),o.jsx("style",{children:qv})]})}function iu({label:e,cardInstanceId:n,getCard:t,hand:a,onClear:r,color:i}){const s=a.find(g=>g.instanceId===n)??null,l=s?t(s.defId):null,{zoom:d,hide:u,getZoomHandlers:f}=Lt(),m=l?`/assets/${l.frontImageId}`:"";return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"plot-slot",children:[o.jsx("div",{className:"plot-slot__label",children:e}),l&&s?o.jsxs("div",{className:"plot-slot__card",onClick:()=>{u(),r()},title:"点击取消选择",style:{borderColor:i,boxShadow:`0 0 8px ${i}55`},...f(m),children:[o.jsx("img",{src:m,alt:l.nameCn,className:"plot-slot__img",onError:g=>{g.target.style.opacity="0.4"}}),o.jsx("span",{className:"plot-slot__name",children:l.nameCn}),o.jsx("span",{className:"plot-slot__clear",children:"✕"})]}):o.jsx("div",{className:"plot-slot__empty",children:"— 未选择 —"})]}),o.jsx(Ot,{zoom:d})]})}function su({label:e,card:n,getCard:t}){const a=n?t(n.defId):null,r=a?`/assets/${a.frontImageId}`:"";return o.jsxs("div",{className:"plot-slot",children:[o.jsx("div",{className:"plot-slot__label",children:e}),a&&n?o.jsxs("div",{className:"plot-slot__card",style:{borderColor:"#888",cursor:"default"},children:[o.jsx("img",{src:r,alt:a.nameCn,className:"plot-slot__img",onError:i=>{i.target.style.opacity="0.4"}}),o.jsx("span",{className:"plot-slot__name",children:a.nameCn})]}):o.jsx("div",{className:"plot-slot__empty",children:"— 未布局 —"})]})}function Xv({card:e,def:n,isSelected:t,segLabel:a,onClick:r}){const{zoom:i,getZoomHandlers:s}=Lt(),l=n?`/assets/${n.frontImageId}`:"";return o.jsxs(o.Fragment,{children:[o.jsxs("button",{className:`plot-card${t?" plot-card--selected":""}${r?"":" plot-card--readonly"}`,onClick:r,disabled:!r,title:(n==null?void 0:n.nameCn)??"???",...n?s(l):{},children:[n?o.jsxs(o.Fragment,{children:[o.jsx("img",{src:l,alt:n.nameCn,className:"plot-card__img",onError:d=>{d.target.style.opacity="0.3"}}),o.jsx("span",{className:"plot-card__name",children:n.nameCn}),n.damage!==void 0&&o.jsxs("span",{className:"plot-card__stat",children:["💥",n.damage]}),n.movementValue!==void 0&&o.jsxs("span",{className:"plot-card__stat",children:["🏃",n.movementValue]}),n.rangeMin!==void 0&&o.jsxs("span",{className:"plot-card__stat",children:["🎯",n.rangeMin,"–",n.rangeMax]})]}):o.jsx("span",{className:"plot-card__name",children:"???"}),a&&o.jsx("span",{className:"plot-card__badge",children:a})]}),o.jsx(Ot,{zoom:i})]})}function Qv({onContinue:e,playerLabel:n,hint:t}){return o.jsxs("div",{className:"pass-device-screen",children:[o.jsxs("div",{className:"pass-device-screen__content",children:[o.jsx("div",{className:"pass-device-screen__icon",children:"🤖"}),o.jsx("h2",{className:"pass-device-screen__title",children:"请将设备交给"}),o.jsx("h1",{className:"pass-device-screen__player",children:n}),o.jsx("p",{className:"pass-device-screen__hint",children:t}),o.jsxs("button",{className:"pass-device-screen__btn",onClick:e,children:[n," 已就位，继续"]})]}),o.jsx("style",{children:eb})]})}const qv=`
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
`,eb=`
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
`;function lu(e,n){const t=Am(e,n);if(t.length===0)return n;if(t.length===1)return t[0];const a=e.players[n].position;let r=t[0],i=1/0;for(const s of t){const l=e.players[s].position,d=Math.max(Math.abs(l.row-a.row),Math.abs(l.col-a.col));d<i&&(i=d,r=s)}return r}function nb(e,n){const t=e.players[n],a=[];for(let r=-1;r<=1;r++)for(let i=-1;i<=1;i++){if(r===0&&i===0)continue;const s=t.position.row+r,l=t.position.col+i;if(s<0||s>=e.map.height||l<0||l>=e.map.width)continue;const d={row:s,col:l};e.mines.some(u=>be(u.position,d))||a.push(d)}return a}function Pr(e,n){for(const t of n)e({type:"ADD_LOG",message:t})}function ii(){const{state:e,getCard:n}=Ce(),{phase:t,currentTiming:a,turnOrder:r,pendingDamage:i,pendingArmorChoice:s}=e;if(t!=="action_seg1"&&t!=="action_seg2")return null;const l=t==="action_seg1"?1:2;return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"action-hud",style:i||s?{display:"none"}:void 0,children:[a==="movement"&&o.jsx(tb,{seg:l,turnOrder:r,getCard:n},`mov-${l}`),(a==="ranged"||a==="melee")&&o.jsx(rb,{seg:l,getCard:n},`combat-${l}-${a}`),a==="special"&&o.jsx(ib,{seg:l,turnOrder:r,getCard:n},`special-${l}`),o.jsx("style",{children:hs})]}),i&&o.jsxs(o.Fragment,{children:[o.jsx(lb,{pendingDamage:i,getCard:n}),o.jsx("style",{children:hs})]}),s&&o.jsxs(o.Fragment,{children:[o.jsx(sb,{pendingArmorChoice:s,getCard:n}),o.jsx("style",{children:hs})]})]})}function tb({seg:e,turnOrder:n,getCard:t}){const{state:a,dispatch:r,aiConfig:i,isOnline:s,localPlayerId:l,currentTurnPlayerId:d}=Ce(),{map:u,pendingDamage:f,pendingArmorChoice:m,playerIds:g}=a,[h,x]=j.useState(new Set),[p,_]=j.useState(null),[b,v]=j.useState([]),[y,I]=j.useState(null),[N,T]=j.useState("N"),k=j.useRef(!1),S=new Map;for(const D of g){const F=a.players[D],P=q.find(B=>B.id===F.unitId);S.set(D,$h(F,e,t,P.movement))}j.useEffect(()=>{if(!(p!==null||y!==null)&&!k.current&&!(f||m)){if(s&&l){if(d!==l)return;if(S.get(l))_(l);else{const D=a.players[l],F=e===1?D.plotSeg1:D.plotSeg2;if(!F)r({type:"ADD_LOG",message:`  ${Me(l)} 未配置行动卡，跳过`});else{const P=t(F.defId);P&&P.actionType==="movement"&&r({type:"ADD_LOG",message:`  ${Me(l)}【${P.nameCn}】无法发动移动`})}k.current=!0,r({type:"ADVANCE_TIMING"})}return}for(const D of n)if(!h.has(D))if(S.get(D)){_(D);return}else{const F=a.players[D],P=e===1?F.plotSeg1:F.plotSeg2;if(!P)r({type:"ADD_LOG",message:`  ${Me(D)} 未配置行动卡，跳过`});else{const B=t(P.defId);B&&B.actionType==="movement"&&r({type:"ADD_LOG",message:`  ${Me(D)}【${B.nameCn}】无法发动移动`})}x(B=>new Set([...B,D]));return}k.current=!0,r({type:"ADVANCE_TIMING"})}},[h,p,y,f,m,d]),j.useEffect(()=>{if(!p){v([]);return}const D=a.players[p],F=g.filter(Q=>Q!==p).map(Q=>a.players[Q].position),P=q.find(Q=>Q.id===D.unitId),B=fn(D,t,"movement"),W=Io(D,e,t,B)||P.movement,X=Mi(u,D.position,W,F,B,D.facing);v(X.map(Q=>Q.pos))},[p,a.players,u,e]),j.useEffect(()=>{if(!p||s&&l&&p!==l||!Ae(i,p))return;const F=zr(i,p),P=setTimeout(()=>{const B=Sx(a,p,e,t,F);B&&(Pr(r,B.reasoning),r({type:"MOVE_UNIT",playerId:p,to:B.pos,path:B.path,finalFacing:B.finalFacing})),x(W=>new Set([...W,p])),_(null),v([])},800);return()=>clearTimeout(P)},[p]);function $(D,F){if(!p||Ae(i,p)||!b.some(W=>be(W,D)))return;let P=F;if(!P){const W=a.players[p],X=g.filter(de=>de!==p).map(de=>a.players[de].position),Q=q.find(de=>de.id===W.unitId),ie=fn(W,t,"movement"),le=Io(W,e,t,ie)||Q.movement;P=Ti(u,W.position,W.facing,D,le,X,ie)}const B=a.players[p];I({playerId:p,to:D,path:(P==null?void 0:P.path)??[]}),T(B.facing),v([]),_(null)}function E(){y&&(r({type:"MOVE_UNIT",playerId:y.playerId,to:y.to,path:y.path,finalFacing:N}),x(D=>new Set([...D,y.playerId])),I(null),s&&(k.current=!0,r({type:"ADVANCE_TIMING"})))}if(s&&l&&d&&d!==l&&!p&&!y)return o.jsx("div",{className:"action-hud__panel action-hud__panel--waiting",children:o.jsxs("span",{className:"action-hud__hint",children:["等待 ",Me(d)," 行动中…"]})});const J=n.every(D=>!S.get(D)||h.has(D));if(!s&&J&&p===null&&y===null||s&&k.current&&p===null&&y===null)return null;if(y!==null){const D=Me(y.playerId);return o.jsxs("div",{className:"action-hud__panel",children:[o.jsx("span",{className:"action-hud__mover",children:D}),o.jsx("span",{className:"action-hud__hint",children:"选择移动结束后的机头方向"}),o.jsx(Sc,{currentFacing:N,onSelectFacing:T}),o.jsx("button",{className:"action-hud__skip-btn",onClick:E,children:"确认移动"})]})}const V=p?Ae(i,p):!1,A=p?Me(p):"";if(V)return o.jsxs("div",{className:"action-hud__panel action-hud__panel--ai-thinking",children:[o.jsxs("span",{className:"action-hud__mover",children:[A," (AI)"]}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__hint",children:"思考中…"})]});const O=p?a.players[p]:null,K=p&&O?fn(O,t,"movement"):null,M=O?q.find(D=>D.id===O.unitId):null,z=p&&O&&M?Io(O,e,t,K??void 0)||M.movement:0,R=p?g.filter(D=>D!==p).map(D=>a.players[D].position):[];return o.jsxs(o.Fragment,{children:[p&&O&&o.jsx(ab,{reachable:b,map:u,from:O.position,fromFacing:O.facing,movementValue:z,blockedPositions:R,aux:K??void 0,onCellClick:$}),o.jsx("div",{className:"action-hud__panel",children:p?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"action-hud__mover",children:A}),o.jsx("span",{className:"action-hud__hint",children:"选择目标格（步数须用尽；点击选择路径）"}),(K==null?void 0:K.vernier)&&o.jsx("span",{className:"action-hud__aux-badge",title:"地形移动消耗-1，高低差消耗-1",children:"⚙ 喷射推进器"}),(K==null?void 0:K.wheel)&&o.jsx("span",{className:"action-hud__aux-badge",title:"移动力+2",children:"⚙ 滑轮"})]}):o.jsx("span",{className:"action-hud__hint",children:"计算移动路径中…"})})]})}function Sc({currentFacing:e,onSelectFacing:n,disabledFacing:t}){const a=[{facing:"N",label:"↑N"},{facing:"E",label:"E→"},{facing:"S",label:"↓S"},{facing:"W",label:"←W"}];return o.jsxs("div",{className:"facing-compass",title:"调整机头朝向",children:[o.jsx("span",{className:"facing-compass__label",children:"机头"}),a.map(({facing:r,label:i})=>{const s=r===t;return o.jsx("button",{className:["facing-compass__btn",e===r?"facing-compass__btn--active":"",s?"facing-compass__btn--disabled":""].join(" ").trim(),onClick:()=>{s||n(r)},disabled:s,title:s?"当前规则下不可选":`朝${r}方`,children:i},r)})]})}function ab({reachable:e,map:n,from:t,fromFacing:a,movementValue:r,blockedPositions:i,aux:s,onCellClick:l}){const d=Ri(),u=j.useRef({allPaths:[],selectedIdx:0,hoveredPos:null}),[f,m]=j.useState(0),g=()=>m(x=>x+1);j.useEffect(()=>{document.querySelectorAll(".board-cell--path-ghost").forEach(I=>I.classList.remove("board-cell--path-ghost"));const{allPaths:x,selectedIdx:p,hoveredPos:_}=u.current;if(!_||x.length===0)return;const b=x[p];if(!b)return;const v=b.path.slice(0,-1);for(const I of v){const N=document.querySelector(`.board-cell[data-row="${I.row}"][data-col="${I.col}"]`);N==null||N.classList.add("board-cell--path-ghost")}const y=document.querySelector(`.board-cell[data-row="${_.row}"][data-col="${_.col}"]`);return y&&(y.dataset.pathLabel=x.length>1?`${p+1}/${x.length}`:""),()=>{document.querySelectorAll(".board-cell--path-ghost").forEach(I=>I.classList.remove("board-cell--path-ghost")),y&&delete y.dataset.pathLabel}},[f]),j.useEffect(()=>{const x=[];document.querySelectorAll(".board-cell--reachable").forEach(p=>{p.classList.remove("board-cell--reachable")});for(const p of e){const _=document.querySelector(`.board-cell[data-row="${p.row}"][data-col="${p.col}"]`);if(!_)continue;_.classList.add("board-cell--reachable");const b=()=>{const{allPaths:V,selectedIdx:A}=u.current;l(p,V[A]??null)},v=()=>{const V=_o(n,t,a,p,r,i,s);u.current={allPaths:V,selectedIdx:0,hoveredPos:p},g()},y=()=>{u.current={allPaths:[],selectedIdx:0,hoveredPos:null},g()},I=V=>{const{allPaths:A,selectedIdx:O}=u.current;if(A.length<=1)return;V.preventDefault();const K=V.deltaY>0?1:-1;u.current={...u.current,selectedIdx:(O+K+A.length)%A.length},g()};let N=null,T=0,k=0,S=!1;const $=V=>{if(T=V.touches[0].clientX,k=V.touches[0].clientY,S=!1,d){const{hoveredPos:A}=u.current;if(A&&A.row===p.row&&A.col===p.col)return;const O=_o(n,t,a,p,r,i,s);u.current={allPaths:O,selectedIdx:0,hoveredPos:p},g(),V.preventDefault();return}N=setTimeout(()=>{S=!0;const A=_o(n,t,a,p,r,i,s);u.current={allPaths:A,selectedIdx:0,hoveredPos:p},g()},400)},E=()=>{N&&(clearTimeout(N),N=null),S&&!d&&(u.current={allPaths:[],selectedIdx:0,hoveredPos:null},g()),S=!1},J=V=>{if(d||!S)return;const A=V.touches[0].clientX-T,O=V.touches[0].clientY-k;if(Math.abs(A)>40||Math.abs(O)>40){const{allPaths:K,selectedIdx:M}=u.current;if(K.length<=1)return;const z=Math.abs(A)>Math.abs(O)?A>0?1:-1:O>0?1:-1;u.current={...u.current,selectedIdx:(M+z+K.length)%K.length},g(),T=V.touches[0].clientX,k=V.touches[0].clientY}};_.addEventListener("click",b),_.addEventListener("mouseenter",v),_.addEventListener("mouseleave",y),_.addEventListener("wheel",I,{passive:!1}),_.addEventListener("touchstart",$,{passive:!0}),_.addEventListener("touchend",E),_.addEventListener("touchcancel",E),_.addEventListener("touchmove",J,{passive:!0}),x.push(()=>{N&&clearTimeout(N),_.removeEventListener("click",b),_.removeEventListener("mouseenter",v),_.removeEventListener("mouseleave",y),_.removeEventListener("wheel",I),_.removeEventListener("touchstart",$),_.removeEventListener("touchend",E),_.removeEventListener("touchcancel",E),_.removeEventListener("touchmove",J)})}return()=>{document.querySelectorAll(".board-cell--reachable").forEach(p=>p.classList.remove("board-cell--reachable")),document.querySelectorAll(".board-cell--path-ghost").forEach(p=>p.classList.remove("board-cell--path-ghost")),document.querySelectorAll(".board-cell[data-path-label]").forEach(p=>delete p.dataset.pathLabel),u.current={allPaths:[],selectedIdx:0,hoveredPos:null},x.forEach(p=>p())}},[e,n,t,a,r,i,s,l]);const h=j.useCallback(()=>{const{allPaths:x,selectedIdx:p}=u.current;x.length<=1||(u.current={...u.current,selectedIdx:(p+1)%x.length},g())},[]);if(d){const{allPaths:x,hoveredPos:p}=u.current;if(p&&x.length>1)return o.jsxs("button",{className:"move-cycle-btn",onClick:h,style:{position:"fixed",bottom:80,left:"50%",transform:"translateX(-50%)",zIndex:600,padding:"10px 24px",background:"rgba(22, 33, 62, 0.95)",border:"1px solid #ffea00",borderRadius:8,color:"#ffea00",fontFamily:"var(--font-mono)",fontSize:"0.85rem",fontWeight:"bold",cursor:"pointer",minHeight:44,backdropFilter:"blur(4px)"},children:["切换路径 (",u.current.selectedIdx+1,"/",x.length,")"]})}return null}function Hm({reachable:e,onCellClick:n}){return j.useEffect(()=>(document.querySelectorAll(".board-cell").forEach(a=>{a.classList.remove("board-cell--reachable"),a.onclick=null}),e.forEach(a=>{const r=document.querySelector(`.board-cell[data-row="${a.row}"][data-col="${a.col}"]`);r&&(r.classList.add("board-cell--reachable"),r.onclick=()=>n(a))}),()=>{document.querySelectorAll(".board-cell--reachable").forEach(a=>{a.classList.remove("board-cell--reachable"),a.onclick=null})}),[e,n]),null}function rb({seg:e,getCard:n}){const{state:t,dispatch:a,aiConfig:r,isOnline:i,localPlayerId:s,currentTurnPlayerId:l}=Ce(),{map:d,turnOrder:u,currentTiming:f,pendingDamage:m,pendingArmorChoice:g}=t,[h,x]=j.useState(new Set),[p,_]=j.useState(null),[b,v]=j.useState(null),y=j.useRef(!1),[I,N]=j.useState(null);j.useEffect(()=>{p&&N(lu(t,p))},[p]);const[T,k]=j.useState(!1),[S,$]=j.useState([]),[E,J]=j.useState(!1),V=f==="ranged"?"ranged":"melee",A=V==="ranged"?"射击时机":"近战时机";if(j.useEffect(()=>{if(p===null&&!y.current&&!(m||g)){if(i&&s){if(l!==s)return;const re=t.players[s];if(Rn(re,e,V,n))_(s),k(!1),J(!1),$([]);else{const Be=e===1?re.plotSeg1:re.plotSeg2;if(Be){const Pe=n(Be.defId);Pe&&(V==="ranged"&&Pe.actionType==="ranged"||V==="melee"&&(Pe.actionType==="melee"||Pe.actionType==="charge"))&&a({type:"ADD_LOG",message:`  ${Me(s)}【${Pe.nameCn}】条件不满足，无法发动`})}y.current=!0,a({type:"ADVANCE_TIMING"})}return}for(const re of u){if(h.has(re))continue;const ee=t.players[re];if(!Rn(ee,e,V,n)){const Pe=e===1?ee.plotSeg1:ee.plotSeg2;if(Pe){const je=n(Pe.defId);je&&(V==="ranged"&&je.actionType==="ranged"||V==="melee"&&(je.actionType==="melee"||je.actionType==="charge"))&&a({type:"ADD_LOG",message:`  ${Me(re)}【${je.nameCn}】条件不满足，无法发动`})}x(je=>new Set([...je,re]));return}_(re),k(!1),J(!1),$([]);return}y.current=!0,a({type:"ADVANCE_TIMING"})}},[h,p,m,g,n,l]),j.useEffect(()=>{if(!p||m||g||i&&s&&p!==s||!Ae(r,p))return;const ee=zr(r,p),Be=setTimeout(()=>{const Pe=Cx(t,p,e,V,n,ee);if(Pr(a,Pe.reasoning),Pe.shouldAttack){const je=t.players[p],Jt=Rn(je,e,V,n),cf=(Jt==null?void 0:Jt.actionType)==="charge"?"RESOLVE_CHARGE":V==="ranged"?"RESOLVE_RANGED":"RESOLVE_MELEE";a({type:cf,attackerId:p,targetId:Pe.targetId})}else{const je=t.players[p],Jt=Rn(je,e,V,n);a({type:"ADD_LOG",message:`  ${Me(p)} 放弃发动${Jt?`【${Jt.nameCn}】`:A}`})}x(je=>new Set([...je,p])),_(null),k(!1),J(!1),$([])},800);return()=>clearTimeout(Be)},[p,m,g]),i&&s&&l&&l!==s&&!p)return o.jsx("div",{className:"action-hud__panel action-hud__panel--waiting",children:o.jsxs("span",{className:"action-hud__hint",children:["等待 ",Me(l)," 行动中…"]})});if(!p)return null;const O=t.players[p],K=Am(t,p),M=I??lu(t,p),z=t.players[M],R=f==="melee"?fn(O,n,"melee"):{vernier:!1,moveSensor:!1},D=Rn(O,e,V,n),F=(D==null?void 0:D.actionType)==="charge",P=Ae(r,p),B=K.filter(re=>{const ee=t.players[re];if(F&&V==="melee"){const Be=q.find(je=>je.id===O.unitId),Pe=q.find(je=>je.id===ee.unitId);return Qo(O,ee,e,d,Be,Pe,n).canAttack}return Xo(O,ee,e,V,d,n).canAttack});let W;if(F&&V==="melee"){const re=q.find(Be=>Be.id===O.unitId),ee=q.find(Be=>Be.id===z.unitId);W=Qo(O,z,e,d,re,ee,n)}else W=Xo(O,z,e,V,d,n);const X=q.find(re=>re.id===O.unitId),Q=q.find(re=>re.id===z.unitId);function ie(){if(!W.canAttack||!p)return;a({type:F?"RESOLVE_CHARGE":V==="ranged"?"RESOLVE_RANGED":"RESOLVE_MELEE",attackerId:p,targetId:M}),v(`${X.nameCn} → ${Q.nameCn}：造成 ${W.damage} 伤害`),x(ee=>new Set([...ee,p])),_(null),k(!1),J(!1),$([]),i&&(y.current=!0,a({type:"ADVANCE_TIMING"}))}function le(){if(!p)return;const re=Rn(t.players[p],e,V,n);a({type:"ADD_LOG",message:`  ${Me(p)} 放弃发动${re?`【${re.nameCn}】`:A}`}),v(null),x(ee=>new Set([...ee,p])),_(null),k(!1),J(!1),$([]),i&&(y.current=!0,a({type:"ADVANCE_TIMING"}))}function de(){if(!p||T)return;const re=Lm(d,O.position,[z.position]);$(re),J(!0)}function bn(re){!p||!E||(a({type:"MELEE_SENSOR_MOVE",playerId:p,to:re}),k(!0),J(!1),$([]))}function An(){J(!1),$([])}const Ea=Me(p),Kt=W.card?F?`【${W.card.nameCn}】突击值 ${X.assault} vs 防御${Q.assaultDef}`:`【${W.card.nameCn}】射程 ${W.card.rangeMin??"—"}–${W.card.rangeMax??"—"}`:null,Wn=V==="melee"&&R.moveSensor&&!T;return P?o.jsxs("div",{className:"action-hud__panel action-hud__panel--ai-thinking",children:[o.jsxs("span",{className:"action-hud__mover",children:[Me(p)," (AI)"]}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__hint",children:"思考中…"})]}):o.jsxs(o.Fragment,{children:[E&&o.jsx(Hm,{reachable:S,onCellClick:bn}),!E&&o.jsx(ob,{validTargets:B.map(re=>({playerId:re,pos:t.players[re].position})),selectedTargetId:M,onSelectTarget:N}),o.jsxs("div",{className:"action-hud__panel action-hud__panel--combat",children:[o.jsx("span",{className:"action-hud__mover",children:Ea}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__timing-label",children:A}),R.moveSensor&&o.jsxs("span",{className:`action-hud__aux-badge ${T?"action-hud__aux-badge--used":""}`,title:"近战前可移动1格",children:["⚙ 移动传感器",T?"（已使用）":""]}),R.vernier&&o.jsx("span",{className:"action-hud__aux-badge",title:"地形消耗-1，高低差-1",children:"⚙ 喷射推进器"}),(V==="melee"||V==="ranged"&&xc(W.card))&&o.jsx(Sc,{currentFacing:O.facing,onSelectFacing:re=>a({type:"ADJUST_FACING",playerId:p,facing:re})}),W.card?o.jsxs("span",{className:"action-hud__card-info",children:[Kt,W.card.damage!==void 0&&o.jsxs("span",{className:"action-hud__dmg",children:[" 伤害 ",W.card.damage]})]}):o.jsxs("span",{className:"action-hud__hint",children:["无",V==="ranged"?"射击":"近战","牌"]}),o.jsx("span",{className:`action-hud__validity ${W.canAttack?"action-hud__validity--ok":"action-hud__validity--no"}`,children:W.canAttack?F?`距离 ${W.dist} ✓ → 造成 ${W.damage} 伤 / 自机反伤 ${W.counterDamage}`:`距离 ${W.dist} ✓ → ${W.damage} 伤`:W.card?W.reason:""}),b&&o.jsx("span",{className:"action-hud__result",children:b}),E?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"action-hud__hint",children:"点击高亮格移动（传感器），或"}),o.jsx("button",{className:"action-hud__skip-btn",onClick:An,children:"取消移动"})]}):o.jsxs(o.Fragment,{children:[Wn&&o.jsx("button",{className:"action-hud__sensor-btn",onClick:de,title:"移动传感器：攻击前可移动1格",children:"传感器移动"}),B.length>1&&o.jsxs("span",{className:"action-hud__target-hint",children:["目标: ",Me(M)," (",Q.nameCn,") — 点击地图切换目标 (",B.length,"个可选)"]}),o.jsx("button",{className:"action-hud__attack-btn",onClick:ie,disabled:!W.canAttack,title:W.canAttack?`攻击 ${Q.nameCn}`:W.reason,children:"执行攻击"}),o.jsxs("button",{className:"action-hud__skip-btn",onClick:le,children:["跳过",V==="ranged"?"射击":"近战"]})]})]})]})}function ob({validTargets:e,selectedTargetId:n,onSelectTarget:t}){return j.useEffect(()=>{document.querySelectorAll(".board-cell--target, .board-cell--target-alt").forEach(a=>{a.classList.remove("board-cell--target","board-cell--target-alt"),a.onclick=null});for(const{playerId:a,pos:r}of e){const i=document.querySelector(`.board-cell[data-row="${r.row}"][data-col="${r.col}"]`);i&&(a===n?i.classList.add("board-cell--target"):(i.classList.add("board-cell--target-alt"),i.onclick=s=>{s.stopPropagation(),t(a)}))}return()=>{document.querySelectorAll(".board-cell--target, .board-cell--target-alt").forEach(a=>{a.classList.remove("board-cell--target","board-cell--target-alt"),a.onclick=null})}},[e,n,t]),null}function ib({seg:e,turnOrder:n,getCard:t}){const{state:a,dispatch:r,aiConfig:i,isOnline:s,localPlayerId:l,currentTurnPlayerId:d}=Ce(),{map:u,pendingDamage:f,pendingArmorChoice:m}=a,[g,h]=j.useState(new Set),[x,p]=j.useState(null),[_,b]=j.useState([]),[v,y]=j.useState("real"),[I,N]=j.useState([]),T=j.useRef(!1);if(j.useEffect(()=>{if(x===null&&!T.current&&!(f||m)){if(s&&l){if(d!==l)return;const z=a.players[l],R=e===1?z.plotSeg1:z.plotSeg2,D=R?t(R.defId):null;!D||D.actionType!=="mine"&&D.actionType!=="special"&&D.actionType!=="aim"?(T.current=!0,r({type:"ADVANCE_TIMING"})):p(l);return}for(const z of n){if(g.has(z))continue;const R=a.players[z],D=e===1?R.plotSeg1:R.plotSeg2,F=D?t(D.defId):null;if(!F||F.actionType!=="mine"&&F.actionType!=="special"&&F.actionType!=="aim"){h(P=>new Set([...P,z]));return}p(z);return}T.current=!0,r({type:"ADVANCE_TIMING"})}},[g,x,f,m,t,d]),j.useEffect(()=>{if(!x){b([]),N([]),y("real");return}const z=a.players[x],R=e===1?z.plotSeg1:z.plotSeg2,D=R?t(R.defId):null;if(D&&D.actionType==="mine"){const F=nb(a,x);b(F)}else b([]),N([]),y("real")},[x,u,e,a,t]),j.useEffect(()=>{if(!x||f||m||s&&l&&x!==l||!Ae(i,x))return;const R=zr(i,x),D=setTimeout(()=>{const F=Tx(a,x,e,t,R);F&&(Pr(r,F.reasoning),F.actionType==="mine"?r({type:"PLACE_MINE",playerId:x,placements:F.placements,damage:F.damage}):F.actionType==="aim"&&r({type:"ADJUST_FACING",playerId:x,facing:F.facing})),h(P=>new Set([...P,x])),p(null)},800);return()=>clearTimeout(D)},[x,f,m]),s&&l&&d&&d!==l&&!x)return o.jsx("div",{className:"action-hud__panel action-hud__panel--waiting",children:o.jsxs("span",{className:"action-hud__hint",children:["等待 ",Me(d)," 行动中…"]})});if(!x)return null;const k=a.players[x],S=e===1?k.plotSeg1:k.plotSeg2,$=S?t(S.defId):null,E=Me(x),J=I.filter(z=>z.kind==="real").length,V=I.filter(z=>z.kind==="dummy").length,A=Ae(i,x);function O(){N([]),y("real"),h(z=>new Set([...z,x])),p(null),s&&(T.current=!0,r({type:"ADVANCE_TIMING"}))}function K(z){!x||!$||$.actionType!=="mine"||_.some(R=>be(R,z))&&N(R=>R.find(P=>be(P.position,z))?R.filter(P=>!be(P.position,z)):R.length>=4||R.filter(P=>P.kind===v).length>=2?R:[...R,{position:z,kind:v}])}function M(){!x||!$||$.actionType!=="mine"||I.length!==4||J!==2||V!==2||(r({type:"PLACE_MINE",playerId:x,placements:I,damage:$.damage||3}),N([]),y("real"),h(z=>new Set([...z,x])),p(null),s&&(T.current=!0,r({type:"ADVANCE_TIMING"})))}return A?o.jsxs("div",{className:"action-hud__panel action-hud__panel--ai-thinking",children:[o.jsxs("span",{className:"action-hud__mover",children:[E," (AI)"]}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__hint",children:"思考中…"})]}):o.jsxs(o.Fragment,{children:[_.length>0&&o.jsx(Hm,{reachable:_,onCellClick:K}),o.jsxs("div",{className:"action-hud__panel action-hud__panel--special",children:[o.jsx("span",{className:"action-hud__mover",children:E}),o.jsx("span",{className:"action-hud__divider",children:"│"}),o.jsx("span",{className:"action-hud__timing-label",children:"特殊时机"}),o.jsx("span",{className:"action-hud__card-info",children:$?`【${$.nameCn}】效果`:"（无）"}),($==null?void 0:$.actionType)==="mine"?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"action-hud__facing-row",children:[o.jsxs("button",{className:`action-hud__facing-btn${v==="real"?" is-selected":""}`,onClick:()=>y("real"),disabled:J>=2,children:["机雷 ",J,"/2"]}),o.jsxs("button",{className:`action-hud__facing-btn${v==="dummy"?" is-selected":""}`,onClick:()=>y("dummy"),disabled:V>=2,children:["替身雷 ",V,"/2"]})]}),o.jsxs("span",{className:"action-hud__hint",children:["点击高亮格放置 ",v==="real"?"机雷":"替身雷","，再次点击已选格可取消。"]}),o.jsxs("span",{className:"action-hud__hint",children:["当前已选 ",I.length,"/4 个指示物，需放满真雷2个与替身雷2个。"]}),o.jsx("button",{className:"action-hud__attack-btn",onClick:M,disabled:I.length!==4||J!==2||V!==2,children:"确认布雷"})]}):($==null?void 0:$.actionType)==="aim"?o.jsxs(o.Fragment,{children:[o.jsx(Sc,{currentFacing:k.facing,onSelectFacing:z=>r({type:"ADJUST_FACING",playerId:x,facing:z})}),o.jsx("span",{className:"action-hud__hint",children:"可先调整朝向，然后"})]}):o.jsx("span",{className:"action-hud__hint",children:"暂无此牌效果支持，请"}),o.jsx("button",{className:"action-hud__skip-btn",onClick:O,children:($==null?void 0:$.actionType)==="aim"?"确认":"跳过"})]})]})}function sb({pendingArmorChoice:e,getCard:n}){const{dispatch:t,aiConfig:a,isOnline:r,localPlayerId:i}=Ce(),{zoom:s,getZoomHandlers:l}=Lt(),{targetId:d,damage:u,source:f,handCards:m,plotCards:g}=e,[h,x]=j.useState(null),[p,_]=j.useState(new Set),b=r&&i&&d!==i,v=!b&&Ae(a,d);j.useEffect(()=>{v?x(d):r||x(null)},[d,v,r]),j.useEffect(()=>{if(!v||b)return;const E=Ex(u,m,g),J=setTimeout(()=>{Pr(t,E.reasoning),t({type:"CONFIRM_ARMOR_CHOICE",playerId:d,selectedInstanceIds:E.value})},500);return()=>clearTimeout(J)},[d,v,b,u,m,g,t]);function y(E){_(J=>{const V=new Set(J);return V.has(E)?V.delete(E):V.add(E),V})}function I(){t({type:"CONFIRM_ARMOR_CHOICE",playerId:d,selectedInstanceIds:[...p]})}function N(){t({type:"CONFIRM_ARMOR_CHOICE",playerId:d,selectedInstanceIds:[]})}const T=[...p].reduce((E,J)=>{const V=g.find(O=>O.instanceId===J);if(V)return E+V.armorValue;const A=m.find(O=>O.instanceId===J);return E+((A==null?void 0:A.armorValue)??0)},0),k=Math.max(0,u-T),S=f==="ranged"?"射击":f==="charge"?"突击":f==="mine"?"机雷":"近战",$=Me(d);return b?o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"damage-pass-overlay",children:o.jsxs("div",{className:"damage-pass-card",children:[o.jsx("p",{className:"damage-pass__eyebrow",children:"— 装甲选择 —"}),o.jsx("h2",{className:"damage-pass__title",children:"等待对手选择"}),o.jsx("div",{className:"damage-pass__player",children:$}),o.jsxs("p",{className:"damage-pass__context",children:[$," 正在决定是否激活装甲牌…"]}),o.jsx("div",{className:"damage-pass__spinner",children:"⏳"})]})}),o.jsx("style",{children:si})]}):!r&&!v&&d!==h?o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"damage-pass-overlay",children:o.jsxs("div",{className:"damage-pass-card",children:[o.jsx("p",{className:"damage-pass__eyebrow",children:"— 装甲选择 —"}),o.jsx("h2",{className:"damage-pass__title",children:"请将设备交给"}),o.jsx("div",{className:"damage-pass__player",children:$}),o.jsxs("p",{className:"damage-pass__context",children:["受到 ",u," 点",S,"伤害，可激活装甲牌减伤"]}),o.jsxs("button",{className:"damage-pass__btn",onClick:()=>x(d),children:[$," 已准备"]})]})}),o.jsx("style",{children:si})]}):o.jsxs("div",{className:"action-hud",children:[o.jsxs("div",{className:"action-hud__panel action-hud__panel--damage",children:[o.jsxs("div",{className:"damage-panel__header",children:[o.jsx("span",{className:"damage-panel__title",children:"🛡 装甲激活"}),o.jsx("span",{className:"damage-panel__player",children:$}),o.jsxs("span",{className:"damage-panel__remaining",children:["受到 ",o.jsx("strong",{children:u})," 点",S,"伤害",T>0&&o.jsxs(o.Fragment,{children:[" → 减免后 ",o.jsx("strong",{className:"armor-reduced",children:k})," 点"]})]})]}),o.jsx("div",{className:"damage-panel__hint",children:f==="ranged"?"手牌中的装甲牌可防御射击伤害；准备区中的装甲牌可防御任意伤害。选择要激活的装甲牌，或跳过。":"准备区中的装甲牌可防御任意伤害（含突击/近战）。选择要激活的装甲牌，或跳过。"}),o.jsxs("div",{className:"damage-panel__zones",children:[m.length>0&&o.jsxs("div",{className:"damage-zone",children:[o.jsx("span",{className:"damage-zone__label",children:"手牌装甲"}),o.jsx("div",{className:"damage-zone__cards",children:m.map(E=>{const J=n(E.defId),V=p.has(E.instanceId),A=l((J==null?void 0:J.frontImageId)??"");return o.jsxs("button",{className:`damage-card-btn ${V?"damage-card-btn--selected":""}`,onClick:()=>y(E.instanceId),...A,children:[o.jsx("span",{className:"damage-card-btn__name",children:(J==null?void 0:J.nameCn)??E.defId}),o.jsxs("span",{className:"armor-value-badge",children:["-",E.armorValue]})]},E.instanceId)})})]}),g.length>0&&o.jsxs("div",{className:"damage-zone",children:[o.jsx("span",{className:"damage-zone__label",children:"准备区装甲"}),o.jsx("div",{className:"damage-zone__cards",children:g.map(E=>{const J=n(E.defId),V=p.has(E.instanceId),A=l((J==null?void 0:J.frontImageId)??"");return o.jsxs("button",{className:`damage-card-btn ${V?"damage-card-btn--selected":""}`,onClick:()=>y(E.instanceId),...A,children:[o.jsx("span",{className:"damage-card-btn__name",children:(J==null?void 0:J.nameCn)??E.defId}),o.jsxs("span",{className:"damage-zone__sub",children:["主要阶段",E.seg]}),o.jsxs("span",{className:"armor-value-badge",children:["-",E.armorValue]})]},E.instanceId)})})]})]}),o.jsxs("div",{className:"damage-panel__actions",children:[o.jsxs("button",{className:"action-hud__attack-btn",onClick:I,disabled:p.size===0,children:["激活选中装甲 (-",T," 点)"]}),o.jsx("button",{className:"action-hud__skip-btn",onClick:N,children:"不使用装甲"})]})]}),o.jsx(Ot,{zoom:s})]})}function lb({pendingDamage:e,getCard:n}){const{state:t,dispatch:a,aiConfig:r,isOnline:i,localPlayerId:s}=Ce(),{targetId:l,remaining:d,selectedInstanceIds:u}=e,{zoom:f,getZoomHandlers:m}=Lt(),[g,h]=j.useState(null),x=t.players[l];gt(x);const p=u.length===0,_=!!e.attackerId&&p&&!e.attackerDesignatedCardId,b=_?e.attackerId:l,v=Me(b),y=i&&s&&b!==s,I=!y&&Ae(r,b),N=zr(r,b),T=!i&&!I&&b!==g;j.useEffect(()=>{I?h(b):i||h(null)},[b,I,i]),j.useEffect(()=>{if(!I||y||d<=0)return;const M=t.players[l],z=$r(M),R=t.playerIds.filter(P=>P!==l&&t.teams[P]!==t.teams[l]&&!t.players[P].isDefeated),D=R.length>0?t.players[R[0]]:M,F=setTimeout(()=>{if(z.length>0){const P=Nx(e,M,n,N,_,D);Pr(a,P.reasoning),P.value?a({type:"SELECT_DAMAGE_CARD",playerId:b,instanceId:P.value}):a({type:"CONFIRM_DAMAGE_SELECTION",playerId:b})}else a({type:"CONFIRM_DAMAGE_SELECTION",playerId:b})},600);return()=>clearTimeout(F)},[d,b,I,y,t.players]);function k(M){a({type:"SELECT_DAMAGE_CARD",playerId:b,instanceId:M})}function S(){a({type:"CONFIRM_DAMAGE_SELECTION",playerId:b})}if(y)return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"damage-pass-overlay",children:o.jsxs("div",{className:"damage-pass-card",children:[o.jsx("p",{className:"damage-pass__eyebrow",children:"— 伤害分配 —"}),o.jsx("h2",{className:"damage-pass__title",children:"等待对手选择"}),o.jsx("div",{className:"damage-pass__player",children:v}),o.jsx("p",{className:"damage-pass__context",children:_?"【瞄准加成】攻方正在指定要摧毁的卡牌…":`${v} 正在选择要摧毁的 ${d} 张卡牌…`}),o.jsx("div",{className:"damage-pass__spinner",children:"⏳"})]})}),o.jsx("style",{children:si})]});if(T)return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"damage-pass-overlay",children:o.jsxs("div",{className:"damage-pass-card",children:[o.jsx("p",{className:"damage-pass__eyebrow",children:"— 伤害分配 —"}),o.jsx("h2",{className:"damage-pass__title",children:"请将设备交给"}),o.jsx("div",{className:"damage-pass__player",children:v}),o.jsx("p",{className:"damage-pass__context",children:_?"【瞄准加成】攻方有权指定第一张要摧毁的卡牌":`防方选择要摧毁的 ${d} 张卡牌（可自动分配）`}),o.jsxs("button",{className:"damage-pass__btn",onClick:()=>h(b),children:[v," 已准备"]})]})}),o.jsx("style",{children:si})]});const $=x.hand.filter(M=>!M.destroyed),E=x.plotSeg1&&!x.plotSeg1.destroyed?[x.plotSeg1]:[],J=x.plotSeg2&&!x.plotSeg2.destroyed?[x.plotSeg2]:[],V=x.auxiliary.filter(M=>!M.destroyed),A=x.deck.filter(M=>!M.destroyed),O=[];$.length>0&&O.push({label:"手牌",cards:$}),E.length>0&&O.push({label:"布局格",sublabel:"主要阶段1",cards:E}),J.length>0&&O.push({label:"布局格",sublabel:"主要阶段2",cards:J}),V.length>0&&O.push({label:"辅助区",cards:V});const K=A[0]??null;return o.jsxs("div",{className:"action-hud",children:[o.jsxs("div",{className:"action-hud__panel action-hud__panel--damage",children:[o.jsxs("div",{className:"damage-panel__header",children:[o.jsx("span",{className:"damage-panel__title",children:"⚔️ 伤害分配"}),o.jsx("span",{className:"damage-panel__player",children:_?`${v} (瞄准指定)`:v}),o.jsxs("span",{className:"damage-panel__remaining",children:["还需摧毁 ",o.jsx("strong",{children:d})," 张卡牌"]})]}),(e.destroyedBombCount??0)>0&&o.jsxs("div",{className:"damage-panel__bomb-alert",children:["💣 已选中 ",e.destroyedBombCount," 张炸弹卡，选完后将进行誘爆检查"]}),o.jsx("div",{className:"damage-panel__hint",children:_?`【瞄准加成】攻方有权指定第一张要摧毁的卡牌！可从手牌、辅助区、卡组、布局格中选择。请 ${v} 选择：`:e.source==="ranged"?"射击伤害：须先从手牌 / 布局格 / 辅助区选择卡牌破坏，不足部分自动从牌组顶破坏。":"牌组与弃牌区已耗尽，近战伤害切换为自选模式。请从手牌 / 布局格 / 辅助区选择。"}),o.jsxs("div",{className:"damage-panel__zones",children:[O.map((M,z)=>o.jsxs("div",{className:"damage-zone",children:[o.jsxs("span",{className:"damage-zone__label",children:[M.label,M.sublabel&&o.jsxs("span",{className:"damage-zone__sub",children:["（",M.sublabel,"）"]})]}),o.jsx("div",{className:"damage-zone__cards",children:M.cards.map(R=>{const D=n(R.defId),F=(D==null?void 0:D.nameCn)??R.defId,P=u.includes(R.instanceId),B=D!=null&&D.frontImageId?`/assets/${D.frontImageId}`:null;return o.jsxs("button",{className:`damage-card-btn ${P?"damage-card-btn--selected":""} ${D!=null&&D.hasBombIcon?"damage-card-btn--bomb":""}`,onClick:()=>k(R.instanceId),disabled:P,title:`${F} (${(D==null?void 0:D.actionType)??"?"})${D!=null&&D.hasBombIcon?" ⚠️ 含诱爆":""}`,...B?m(B):{},children:[o.jsx("span",{className:"damage-card-btn__name",children:F}),(D==null?void 0:D.isKaiVariant)&&o.jsx("span",{className:"damage-card-btn__det",title:"改型",children:"◆"}),(D==null?void 0:D.hasBombIcon)&&o.jsx("span",{className:"damage-card-btn__det damage-card-btn__bomb-icon",title:"诱爆卡",children:"💣"})]},R.instanceId)})})]},z)),K&&(e.source!=="ranged"||_)&&o.jsxs("div",{className:"damage-zone",children:[o.jsxs("span",{className:"damage-zone__label",children:["卡组",o.jsxs("span",{className:"damage-zone__sub",children:["（共 ",A.length," 张，正面朝下）"]})]}),o.jsx("div",{className:"damage-zone__cards",children:o.jsxs("button",{className:"damage-card-btn damage-card-btn--deck",onClick:()=>k(K.instanceId),title:"从卡组顶部翻开并摧毁 1 张（诱爆正常触发）",children:[o.jsx("span",{className:"damage-card-btn__deck-back",children:"🂠"}),o.jsx("span",{className:"damage-card-btn__name",children:"顶部 × 1"})]})})]}),K&&e.source==="ranged"&&!_&&o.jsxs("div",{className:"damage-zone",children:[o.jsxs("span",{className:"damage-zone__label",children:["卡组",o.jsxs("span",{className:"damage-zone__sub",children:["（共 ",A.length," 张）"]})]}),o.jsx("div",{className:"damage-zone__cards",children:o.jsxs("div",{className:"damage-card-btn damage-card-btn--deck",style:{opacity:.5,cursor:"default"},title:"射击伤害的牌组部分将在选完表牌后自动从顶部破坏",children:[o.jsx("span",{className:"damage-card-btn__deck-back",children:"🂠"}),o.jsx("span",{className:"damage-card-btn__name",children:"自动破坏"})]})})]})]}),o.jsx("div",{className:"damage-panel__actions",children:o.jsx("button",{className:"action-hud__skip-btn",onClick:S,title:"剩余伤害将从牌库顶部自动摧毁",children:"自动分配剩余伤害"})})]}),o.jsx(Ot,{zoom:f})]})}const hs=`
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
`,si=`
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
`;function cb({onBack:e}){return o.jsxs("div",{className:"rules-page",children:[o.jsxs("div",{className:"rules-page__header",children:[o.jsx("button",{className:"rules-back-btn",onClick:e,children:"← 返回"}),o.jsx("h1",{className:"rules-page__title",children:"游戏规则"}),o.jsx("span",{className:"rules-page__subtitle",children:"エムブリオマシン"})]}),o.jsxs("div",{className:"rules-page__body",children:[o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"游戏概述"}),o.jsx("p",{children:"《胚胎机器》是一款双人对战策略游戏。每位玩家控制一台战机（机体），通过秘密布置行动牌来控制机体的移动与战斗。 当对手满足任意一项败北条件时，本方获胜。"})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"准备阶段"}),o.jsxs("ol",{className:"rules-list",children:[o.jsx("li",{children:"双方各选择一台机体，机体自带专属牌组。"}),o.jsx("li",{children:"选择地图，确定双方初始出生区域（地图短边中央3格）。"}),o.jsxs("li",{children:["将各自牌组洗混，游戏开始时双方各抽取等同于本机",o.jsx("b",{children:"回避值"}),"数量的手牌。"]}),o.jsx("li",{children:"双方机体初始机头朝向对手方向（玩家1朝南，玩家2朝北）。"})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"回合流程"}),o.jsxs("div",{className:"rules-flow",children:[o.jsxs("div",{className:"rules-flow__step",children:[o.jsx("span",{className:"rules-flow__num",children:"1"}),o.jsxs("div",{children:[o.jsx("strong",{children:"抽牌阶段"}),o.jsxs("p",{children:["双方各从牌组顶抽取等同于自己机体",o.jsx("b",{children:"回避值"}),"数量的牌。若牌组耗尽，废弃区的牌重新洗混后继续抽取。"]})]})]}),o.jsxs("div",{className:"rules-flow__step",children:[o.jsx("span",{className:"rules-flow__num",children:"2"}),o.jsxs("div",{children:[o.jsx("strong",{children:"布局阶段"}),o.jsxs("p",{children:["双方各自秘密为",o.jsx("b",{children:"主要阶段1"}),"和",o.jsx("b",{children:"主要阶段2"}),"各布置一张行动牌（面朝下）， 然后将设备交给对方进行同样操作。双方确认后，翻开亮牌，进入行动阶段。"]})]})]}),o.jsxs("div",{className:"rules-flow__step",children:[o.jsx("span",{className:"rules-flow__num",children:"3"}),o.jsxs("div",{children:[o.jsx("strong",{children:"行动主要阶段1 & 主要阶段2"}),o.jsxs("p",{children:["每个段落依次经历四个时机：",o.jsx("b",{children:"移动 → 射击 → 近战 → 特殊"}),'。 每个时机内，双方按该时机的优先顺序依次行动（详见"行动顺序"）。']})]})]}),o.jsxs("div",{className:"rules-flow__step",children:[o.jsx("span",{className:"rules-flow__num",children:"4"}),o.jsxs("div",{children:[o.jsx("strong",{children:"清理阶段"}),o.jsx("p",{children:"将已布置的牌（主要阶段1→主要阶段2顺序）和手中剩余的牌全部放入废弃区，准备下一回合。"})]})]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"行动顺序与先制值"}),o.jsxs("p",{children:["每台机体有固定的",o.jsx("b",{children:"先制值（数字越大越快）"}),"。先制值高的玩家在每个时机优先行动，但不同时机的排序逻辑有所不同："]}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"移动时机："}),"先比较该段落的",o.jsx("b",{children:"移动牌面数值"}),"（移动值大的先动）；移动值相同时再比先制值。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"射击/近战/特殊时机："}),"直接按",o.jsx("b",{children:"先制值"}),"排序（高者先行动）。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"平局处理："}),"先制值相同时，玩家1优先行动。"]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"机头朝向与攻击扇区"}),o.jsxs("p",{children:["每台机体具有明确的",o.jsx("b",{children:"机头朝向"}),"（N/S/E/W），初始朝向对手方向。"]}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"攻击限制："}),"射击攻击只能对准",o.jsx("b",{children:"机体正前方（含正侧方延长线）180°扇区"}),"内的目标。目标在机体正后方时无法射击。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"移动中的转向："}),"普通移动时改变行进方向不额外消耗移动力。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"移动结束朝向："}),"普通移动完成后，可自由决定机头最终朝向。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"手动调整："}),"白兵时机开始时，参与白兵的机体可先调整朝向；部分卡牌（如瞄准）也会允许改变朝向。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"突击限制："}),"突击与部分突击衍生武器仍要求目标位于机体正面，具体以卡面文字为准。"]})]}),o.jsx("p",{className:"rules-note",children:"注：扇区边界（正侧方延长线上的格子）视为前方，可以攻击。"})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"行动时机说明"}),o.jsxs("div",{className:"rules-timing-grid",children:[o.jsxs("div",{className:"rules-timing-card",children:[o.jsx("span",{className:"rules-timing-icon",children:"🏃"}),o.jsx("strong",{children:"移动时机"}),o.jsxs("p",{children:["若该段落布局的是",o.jsx("b",{children:"移动牌"}),"，则可在地图上移动。移动时需尽可能用完移动力，且同一次移动中不能再次进入已进入过的格子。无移动牌则自动跳过。"]})]}),o.jsxs("div",{className:"rules-timing-card",children:[o.jsx("span",{className:"rules-timing-icon",children:"🎯"}),o.jsx("strong",{children:"射击时机"}),o.jsxs("p",{children:["若该段落布局的是",o.jsx("b",{children:"射击牌"}),"，可对正前方扇区内、射程范围内且视线通畅的敌方发动远程攻击。若",o.jsx("b",{children:"主要阶段1布置了瞄准牌"}),"，则主要阶段2的射击伤害额外+1。"]})]}),o.jsxs("div",{className:"rules-timing-card",children:[o.jsx("span",{className:"rules-timing-icon",children:"⚔️"}),o.jsx("strong",{children:"近战时机"}),o.jsxs("p",{children:["若该段落布局的是",o.jsx("b",{children:"近战牌"}),"，可对",o.jsx("b",{children:"相邻格（切比雪夫距离=1）"}),"的敌方发动近战攻击，无扇区限制，但仍需满足射线条件。近战结算前，只有本时机确实有白兵牌的机体可先调整朝向；主要阶段1有瞄准牌时，主要阶段2的近战伤害也+1。"]})]}),o.jsxs("div",{className:"rules-timing-card",children:[o.jsx("span",{className:"rules-timing-icon",children:"⚡"}),o.jsx("strong",{children:"特殊时机"}),o.jsxs("p",{children:[o.jsx("b",{children:"突击牌"}),"→沿当前正面直线突进，尽可能用完突击移动力；移动结束后若正面相邻有目标则发动突击。",o.jsx("b",{children:"机雷牌"}),"→在周围8格内布置隐藏指示物（机雷2、替身雷2）。",o.jsx("b",{children:"瞄准牌"}),"→此时可调整朝向，并提供后续攻击加成。"]})]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"移动规则"}),o.jsxs("p",{children:["移动时，机体从当前格出发按移动牌数值进行扩展，每进入一个格子消耗对应地形的基础代价 ",o.jsx("b",{children:"加上高度差"}),"："]}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"步数用尽："}),"只要仍存在合法下一步，就必须继续移动。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"自由转向："}),"移动途中改变前进方向不额外消耗移动力。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"不可回踏："}),"同一次移动中，不能再次进入已经进入过的格子，也不能回到起始格。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"结束朝向："}),"普通移动完成后，可自由选择机体最终朝向。"]})]}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"地形"}),o.jsx("th",{children:"基础移动代价"}),o.jsx("th",{children:"战斗效果"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"平地"}),o.jsx("td",{children:"1"}),o.jsx("td",{children:"无"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"砂地"}),o.jsx("td",{children:"1"}),o.jsx("td",{children:"无"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"废墟"}),o.jsx("td",{children:"2"}),o.jsx("td",{children:"无"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"森林"}),o.jsx("td",{children:"2"}),o.jsx("td",{children:"处于其中的机体受到射击伤害 −1（掩护）"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"高地"}),o.jsx("td",{children:"1 + 高度差*"}),o.jsx("td",{children:"可遮蔽视线（高地墙）；本身无伤害加成"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"水域"}),o.jsx("td",{children:"3"}),o.jsx("td",{children:"在其中发射能量武器时伤害 −1"})]})]})]}),o.jsx("p",{className:"rules-note",children:"* 高度差代价：进入比当前格海拔更高的地形时，额外消耗等同于高度差的移动力（例如从海拔0进入海拔2，共消耗 1+2=3 点）。下坡无额外代价。"}),o.jsx("p",{className:"rules-note",children:"注：机体不能占据对手所在的格子。机雷指示物会在各个时机结束时，若所在格有机体则翻开并结算。"})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"射程、视线与距离衰减"}),o.jsxs("p",{children:["距离使用",o.jsx("b",{children:"切比雪夫距离"}),"（8方向棋格距离：行差与列差的最大值）。 射击牌有最小射程和最大射程，目标须在此范围内。"]}),o.jsx("p",{children:"视线（LOS）检查规则："}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"森林不阻断视线，"}),"但能为处于其中的机体提供掩护（受击伤害-1）。"]}),o.jsxs("li",{children:[o.jsx("b",{children:"高地阻断："}),"若射线上存在海拔高于攻防双方的高地格，则视线被遮挡，无法射击。"]}),o.jsx("li",{children:"其他地形（平地、砂地、废墟、水域）均不影响视线。"})]}),o.jsxs("p",{children:[o.jsx("b",{children:"距离衰减（部分武器）："}),'部分武器卡设有"最佳射程"，超出最佳射程后每多1格伤害递减（递减值见卡面），但不超过最大射程仍可开火。']})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"伤害与摧毁"}),o.jsxs("p",{children:["攻击命中后，系统计算最终伤害值，然后进入",o.jsx("b",{children:"伤害分配"}),"。伤害来源不同，分配规则不同："]}),o.jsx("p",{children:o.jsx("b",{children:"🎯 射击伤害（规则 11-2-2）："})}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"先"}),"从表面朝上的卡牌中自由选择破坏：手牌、辅助区、",o.jsx("b",{children:"已布局的牌（主要阶段1/2）"}),"。每次选1张，直至选满伤害值或表面朝上卡牌耗尽。"]}),o.jsxs("li",{children:["表面朝上卡牌不足时，",o.jsx("b",{children:"剩余伤害从牌组顶端自动破坏"}),'（防守方无法选择牌组中的特定卡牌）。也可随时点击"确认"将剩余伤害交由系统从牌组顶端自动处理。']}),o.jsxs("li",{children:[o.jsx("b",{children:"使用了瞄准牌的射击："}),"攻击方额外获得一项权利——可",o.jsx("b",{children:"指定"}),"防守方必须销毁的第一张牌（范围包括牌组）。"]})]}),o.jsx("p",{children:o.jsx("b",{children:"⚔️ 白兵/突击伤害（强制翻牌库顶）："})}),o.jsxs("ul",{className:"rules-list",children:[o.jsx("li",{children:"防守方无权选择，系统直接从牌库顶翻牌销毁，数量等于最终伤害值。"}),o.jsx("li",{children:"牌库翻完后从废弃区重洗继续。若牌组与废弃区均耗尽，剩余伤害切换为防守方自选模式（可从手牌、辅助区、已布局的牌中选择）。"})]}),o.jsx("p",{children:o.jsx("b",{children:"💣 爆弹标记诱爆："})}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:["先完成本次基础伤害，再统计其中被摧毁的",o.jsx("b",{children:"爆弹标记（💣）"}),"卡数量。"]}),o.jsx("li",{children:"之后从牌库顶逐张翻开对应数量的牌：有爆弹标记的直接摧毁并继续追加检查，无爆弹标记的放入废弃区。"}),o.jsx("li",{children:'注意：◆标记是区分"改"型变种卡的符号，与诱爆无关。'})]}),o.jsx("p",{className:"rules-note",children:"注：若牌组耗尽，继续从废弃区（重新洗混后）取牌销毁。"})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"卡牌类型"}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"类型"}),o.jsx("th",{children:"使用时机"}),o.jsx("th",{children:"说明"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"移动牌"}),o.jsx("td",{children:"移动时机"}),o.jsx("td",{children:"按牌面数值在4方向移动；移动中可自由转向，但必须尽量走满且不能重进已进入过的格子"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"射击牌"}),o.jsx("td",{children:"射击时机"}),o.jsx("td",{children:"远程攻击，需在机头前方扇区内、射程内且视线通畅；部分武器具有距离衰减"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"近战牌"}),o.jsx("td",{children:"近战时机"}),o.jsx("td",{children:"攻击相邻格（切比雪夫距离=1）的敌方，无扇区限制"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"突击牌"}),o.jsx("td",{children:"特殊时机"}),o.jsx("td",{children:"沿正面直线进行突击移动并尽量走满；结束后若正面相邻存在目标，则结算突击与反伤"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"护甲牌"}),o.jsx("td",{children:"被动防御"}),o.jsx("td",{children:"布局后，本段受到攻击时每张护甲牌抵消1点伤害"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"瞄准牌"}),o.jsx("td",{children:"攻击辅助"}),o.jsxs("td",{children:["布置于",o.jsx("b",{children:"主要阶段1"}),"时，可调整朝向，并使",o.jsx("b",{children:"主要阶段2"}),"的射击/近战/突击攻击伤害+1，且攻方可指定防守方销毁目标"]})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"机雷牌"}),o.jsx("td",{children:"特殊时机"}),o.jsx("td",{children:"在机体周围8格放置4个隐藏指示物，其中真雷2个、替身雷2个；各时机结束时若有机体停在其上，则翻开并弃置，只有真雷会造成伤害"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"特殊牌"}),o.jsx("td",{children:"—"}),o.jsx("td",{children:"以卡面说明为准；替身雷本身不是可单独布局的行动牌，而是机雷牌放出的隐藏指示物"})]})]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"胜利条件"}),o.jsx("p",{children:"每次伤害结算结束后，系统自动检查双方是否满足败北条件。满足任意一条即判败："}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:[o.jsx("b",{children:"牌组耗尽："}),"所有",o.jsx("b",{children:"尚未被破坏"}),"的牌（牌库 + 手牌 + 辅助区 + 废弃区 + ",o.jsx("b",{children:"已布局的牌"}),"）总数 ≤ 3"]}),o.jsxs("li",{children:[o.jsx("b",{children:"战力耗尽："}),"所有仍能对敌方造成伤害的牌均已失去，包括",o.jsx("b",{children:"射击牌、近战牌、突击牌、机雷牌"}),"等。"]})]}),o.jsxs("ul",{className:"rules-list",children:[o.jsxs("li",{children:["若对手率先满足败北条件 → ",o.jsx("b",{children:"己方获胜"})]}),o.jsxs("li",{children:["若双方同时满足 → ",o.jsx("b",{children:"平局"})]})]})]}),o.jsxs("section",{className:"rules-section",children:[o.jsx("h2",{className:"rules-section__title",children:"高级效果速查"}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"效果"}),o.jsx("th",{children:"触发条件"}),o.jsx("th",{children:"具体效果"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"瞄准"}),o.jsx("td",{children:"主要阶段1布局瞄准牌 + 主要阶段2布局攻击牌"}),o.jsxs("td",{children:["主要阶段2的射击/近战/突击伤害+1；且攻方可指定防守方",o.jsx("b",{children:"必须"}),"销毁的第一张牌"]})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"装甲"}),o.jsx("td",{children:"防守方在被攻击段落布局了护甲牌"}),o.jsx("td",{children:"每张护甲牌抵消1点最终伤害（下限为0）；已布局的装甲可在任意受伤时机启用，且可跨第1/2阶段使用"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"森林掩护"}),o.jsx("td",{children:"防守方站在森林格中被射击"}),o.jsx("td",{children:"受到的射击伤害 −1（近战/突击无此效果）"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"水域衰减"}),o.jsx("td",{children:"攻击方站在水域中使用能量武器射击"}),o.jsx("td",{children:"射击伤害 −1"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"突击冲锋"}),o.jsx("td",{children:"突击牌布局后在特殊时机选择目标"}),o.jsx("td",{children:"沿机体正面方向直线冲锋，并尽量用完突击移动力；若结束后正面相邻存在目标，则结算突击伤害与反伤"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"机雷部署"}),o.jsx("td",{children:"机雷牌布局后在特殊时机选择 4 个不重叠的周围格"}),o.jsx("td",{children:"放置 2 个真雷与 2 个替身雷隐藏指示物；各时机结束时若格上有机体则翻开并弃置，只有真雷造成机雷伤害"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"💣 爆弹诱爆"}),o.jsx("td",{children:"带爆弹标记（💣）的牌被摧毁时"}),o.jsx("td",{children:"在基础伤害结算后，从牌库顶进行诱爆检查；翻出的爆弹牌会继续连锁诱爆，非爆弹牌进入废弃区"})]})]})]})]}),o.jsxs("section",{className:"rules-section rules-section--diff",children:[o.jsx("h2",{className:"rules-section__title rules-section__title--diff",children:"⚠ 本版本与官方原版的已知差异"}),o.jsx("p",{className:"rules-note",children:"以下是当前网页版仍保留的已知差异。已在上文实现并对齐的规则，不再重复列在这里。"}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"规则项"}),o.jsx("th",{children:"本版本实现"}),o.jsx("th",{children:"官方原版规则"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"机雷机制"}),o.jsx("td",{children:"已实现隐藏指示物、真雷/替身雷各 2 个、各时机结束时翻开结算；但线上/本地共享状态下仍不能像实体局那样彻底隔离隐藏信息"}),o.jsx("td",{children:"实体原版使用实体指示物隐藏真伪，信息保密性更强"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"回避值定义"}),o.jsx("td",{children:"当前仅用于抽牌数量展示；完整原版定义仍待补全规则书正文后再核定"}),o.jsx("td",{children:"仓库内现有速查页与大会规程未直接写明完整判定流程，需要以完整规则书/FAQ正文继续确认"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"先制平局"}),o.jsx("td",{children:"先制值相同时玩家1固定优先"}),o.jsx("td",{children:"应由队伍标记物编号（チームチット番号）决定"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"对战模式"}),o.jsx("td",{children:"本机热座 1v1"}),o.jsx("td",{children:"官方支持最多 4v4 双人组队对战"})]})]})]})]}),o.jsxs("section",{className:"rules-section rules-section--diff",children:[o.jsx("h2",{className:"rules-section__title rules-section__title--diff",children:"参考资料与完整规则书译注"}),o.jsx("p",{className:"rules-note",children:"当前仓库内可直接核对的原始资料，主要包括两张速查页和一份大会规程。为了避免把二次整理文案误当成原版规则， 本页后续补充完整规则时，将优先以这些资料和后续补入的完整规则书正文为准。"}),o.jsxs("table",{className:"rules-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"资料"}),o.jsx("th",{children:"当前用途"}),o.jsx("th",{children:"状态"})]})}),o.jsxs("tbody",{children:[o.jsxs("tr",{children:[o.jsx("td",{children:"速查页 1 / 2"}),o.jsx("td",{children:"核对移动、朝向、突击、伤害处理等基础流程"}),o.jsx("td",{children:"已纳入当前网页规则整理"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"大会规程 Ver.3.0"}),o.jsx("td",{children:"补充射击伤害顺序、诱爆检查、胜负判定等条文"}),o.jsx("td",{children:"已纳入当前网页规则整理"})]}),o.jsxs("tr",{children:[o.jsx("td",{children:"完整规则书正文"}),o.jsx("td",{children:"用于核定回避值、命中判定、FAQ 优先级等未完全确认事项"}),o.jsx("td",{children:"本仓库尚未收录可直接翻译的正文文本；此区块预留为后续补充入口"})]})]})]}),o.jsx("p",{className:"rules-note",children:"当前结论：项目里关于“回避值”的实现和说明仍应视为待核定项。等完整规则书正文或官方 FAQ 正文补入仓库后， 可以直接在本区块追加逐条译注，而不必再回头重做整页结构。"})]})]}),o.jsx("style",{children:db})]})}const db=`
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
`;function ub({onBack:e}){const[n,t]=j.useState("maps");return o.jsxs("div",{className:"data-page",children:[o.jsxs("div",{className:"data-page__header",children:[o.jsx("button",{className:"data-page__back",onClick:e,children:"← 返回"}),o.jsx("h1",{className:"data-page__title",children:"游戏资料"})]}),o.jsxs("div",{className:"data-page__tabs",children:[o.jsx("button",{className:`data-tab ${n==="maps"?"data-tab--active":""}`,onClick:()=>t("maps"),children:"地图"}),o.jsx("button",{className:`data-tab ${n==="units"?"data-tab--active":""}`,onClick:()=>t("units"),children:"机体"}),o.jsx("button",{className:`data-tab ${n==="cards"?"data-tab--active":""}`,onClick:()=>t("cards"),children:"卡牌"})]}),o.jsxs("div",{className:"data-page__content",children:[n==="maps"&&o.jsx(pb,{}),n==="units"&&o.jsx(gb,{}),n==="cards"&&o.jsx(hb,{})]}),o.jsx("style",{children:bb})]})}const Um={plain:"#8fbc5a",sand:"#d4b483",rubble:"#9e8f7a",forest:"#2d7a2d",water:"#4477cc",highland:"#c4955a"},Wm={plain:"平地",sand:"沙地",rubble:"瓦砾",forest:"森林",water:"水域",highland:"高地"};function pb(){const[e,n]=j.useState(Ye[0].id),t=Ye.find(a=>a.id===e);return o.jsxs("div",{className:"maps-panel",children:[o.jsx("div",{className:"maps-panel__selector",children:Ye.map(a=>o.jsx("button",{className:`map-sel-btn ${a.id===e?"map-sel-btn--active":""}`,onClick:()=>n(a.id),children:a.nameCn},a.id))}),o.jsxs("div",{className:"maps-panel__body",children:[o.jsx(mb,{map:t}),o.jsx(fb,{})]})]})}function mb({map:e}){const n=new Set(e.startZones[0].map(a=>`${a.row},${a.col}`)),t=new Set(e.startZones[1].map(a=>`${a.row},${a.col}`));return o.jsxs("div",{className:"mini-map-wrapper",children:[o.jsxs("div",{className:"mini-map__title",children:[e.nameCn,"（",e.width,"×",e.height,"）"]}),o.jsx("div",{className:"mini-map__grid",style:{gridTemplateColumns:`repeat(${e.width}, 28px)`,gridTemplateRows:`repeat(${e.height}, 28px)`},children:e.cells.flatMap((a,r)=>a.map((i,s)=>{const l=`${r},${s}`,d=n.has(l),u=t.has(l),f=Um[i.terrain]??"#888";return o.jsxs("div",{className:"mini-map__cell",style:{background:f},title:`(${s},${r}) ${Wm[i.terrain]??i.terrain}${i.terrain==="highland"?" Lv"+i.elevation:""}`,children:[d&&o.jsx("span",{className:"mini-map__marker mini-map__marker--p1",children:"①"}),u&&o.jsx("span",{className:"mini-map__marker mini-map__marker--p2",children:"②"}),i.terrain==="highland"&&o.jsx("span",{className:"mini-map__elev",children:i.elevation})]},l)}))})]})}function fb(){return o.jsxs("div",{className:"map-legend",children:[o.jsx("div",{className:"map-legend__title",children:"地形图例"}),Object.entries(Wm).map(([e,n])=>o.jsxs("div",{className:"map-legend__item",children:[o.jsx("span",{className:"map-legend__swatch",style:{background:Um[e]}}),o.jsx("span",{children:n})]},e)),o.jsxs("div",{className:"map-legend__item",children:[o.jsx("span",{className:"map-legend__marker-demo mini-map__marker--p1",children:"①"}),o.jsx("span",{children:"玩家1出发区"})]}),o.jsxs("div",{className:"map-legend__item",children:[o.jsx("span",{className:"map-legend__marker-demo mini-map__marker--p2",children:"②"}),o.jsx("span",{children:"玩家2出发区"})]}),o.jsx("div",{className:"map-legend__note",children:"高地格显示海拔等级（1–3），移动力消耗与平地相同，提供射程视野优势。"})]})}function gb(){return o.jsxs("div",{className:"units-panel",children:[o.jsxs("table",{className:"units-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"机体"}),o.jsx("th",{children:"日文名"}),o.jsx("th",{children:"型号"}),o.jsx("th",{children:"先制"}),o.jsx("th",{children:"移动"}),o.jsx("th",{children:"回避"}),o.jsx("th",{children:"突击"}),o.jsx("th",{children:"防突击"})]})}),o.jsx("tbody",{children:[...q].sort((e,n)=>e.initiative-n.initiative).map(e=>o.jsxs("tr",{children:[o.jsxs("td",{className:"units-table__name",children:[o.jsx("img",{src:`/assets/tokens/${e.tokenId}`,alt:e.nameCn,className:"units-table__token",onError:n=>{n.target.style.display="none"}}),e.nameCn]}),o.jsx("td",{className:"units-table__ja",children:e.nameJa}),o.jsx("td",{children:e.type}),o.jsx("td",{className:"units-table__num",children:e.initiative}),o.jsx("td",{className:"units-table__num",children:e.movement}),o.jsx("td",{className:"units-table__num",children:e.evasion}),o.jsx("td",{className:"units-table__num",children:e.assault}),o.jsx("td",{className:"units-table__num",children:e.assaultDef})]},e.id))})]}),o.jsxs("div",{className:"units-note",children:[o.jsx("strong",{children:"型号说明："}),"SS/S/M/L/LL = 体型；軽/中/重 = 重量等级；単座 = 单人驾驶。 先制值越小先手越快，移动值为每回合最大移动格数，回避值为被击中时消耗的伤害数量。"]})]})}const Zm={movement:"移动",ranged:"射击",melee:"近战",special:"特殊",mine:"机雷",aim:"瞄准",armor:"装甲",charge:"突击",auxiliary:"辅助"},Ym={movement:"#66ccaa",ranged:"#4499ee",melee:"#ff9944",special:"#cc88ff",mine:"#ff6688",aim:"#ffdd44",armor:"#88aacc",charge:"#ff6644",auxiliary:"#aaaacc"};function hb(){const e=Object.keys(Vt),[n,t]=j.useState(e[0]),a=Vt[n]??[];let r=n;const i=q.find(s=>n.startsWith(s.deckCode));return i&&(n.endsWith("+")?r=`${i.nameCn} (Plus)`:r=i.nameCn),o.jsxs("div",{className:"cards-panel",children:[o.jsx("div",{className:"cards-panel__unit-tabs",children:e.map(s=>{const l=q.find(f=>s.startsWith(f.deckCode));let d=s,u=null;return l&&(u=`/assets/tokens/${l.tokenId}`,d=s.endsWith("+")?`${l.nameCn}+`:l.nameCn),o.jsxs("button",{className:`unit-tab ${s===n?"unit-tab--active":""}`,onClick:()=>t(s),children:[u&&o.jsx("img",{src:u,alt:d,className:"unit-tab__token",onError:f=>{f.target.style.display="none"}}),o.jsx("span",{children:d})]},s)})}),o.jsxs("div",{className:"cards-panel__header",children:[o.jsx("span",{className:"cards-panel__unit-name",children:r}),o.jsxs("span",{className:"cards-panel__count",children:["共 ",a.length," 张卡牌"]})]}),o.jsx("div",{className:"cards-panel__summary",children:o.jsx(xb,{deck:a})}),o.jsx("div",{className:"cards-panel__list",children:a.map(s=>o.jsx(vb,{card:s},s.id))})]})}function xb({deck:e}){const n={};for(const t of e)n[t.actionType]=(n[t.actionType]??0)+1;return o.jsx("div",{className:"card-type-summary",children:Object.entries(n).sort(([t],[a])=>t.localeCompare(a)).map(([t,a])=>o.jsxs("span",{className:"card-type-badge",style:{background:Ym[t]??"#888"},children:[Zm[t]??t," ×",a]},t))})}function vb({card:e}){const n=Zm[e.actionType]??e.actionType,t=Ym[e.actionType]??"#888",{zoom:a,getZoomHandlers:r}=Lt(),i=`/assets/${e.frontImageId}`;let s="";return e.actionType==="movement"&&e.movementValue!==void 0?s=`移动 ${e.movementValue}`:(e.actionType==="ranged"||e.actionType==="melee")&&e.damage!==void 0?e.rangeMin!==void 0&&e.rangeMax!==void 0?s=`射程 ${e.rangeMin}–${e.rangeMax}  伤害 ${e.damage}`:s=`伤害 ${e.damage}`:e.actionType==="charge"&&e.damage!==void 0&&(s=`伤害 ${e.damage}`),o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"card-row",...r(i),children:[o.jsx("div",{className:"card-row__image-wrap",children:o.jsx("img",{src:i,alt:e.nameCn,className:"card-row__image",onError:l=>{l.target.style.display="none"}})}),o.jsx("span",{className:"card-row__type",style:{background:t},children:n}),o.jsx("span",{className:"card-row__name",children:e.nameCn}),e.effectText?o.jsx("span",{className:"card-row__effect",children:e.effectText}):s&&o.jsx("span",{className:"card-row__detail",children:s}),e.isKaiVariant&&o.jsx("span",{className:"card-row__kai",title:"改型标记",children:"◆"}),e.hasBombIcon&&o.jsx("span",{className:"card-row__bomb",title:"诱爆",children:"💥"})]}),o.jsx(Ot,{zoom:a})]})}const bb=`
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
`;function li(){const{state:e,getCard:n,exposureMode:t}=Ce(),[a,r]=j.useState(null),{zoom:i,getZoomHandlers:s}=Lt(),l=e.phase==="plotting"?e.plottingStep==="player2"?"player2":"player1":e.activePlayer??"player1",d=a??l,u=e.players[d],f=q.find(h=>h.id===u.unitId),m=t?!1:yb(e),g={N:"↑北",S:"↓南",E:"→东",W:"←西"}[u.facing]??u.facing;return o.jsxs("div",{className:"mp",children:[o.jsxs("div",{className:"mp__tabs",children:[e.playerIds.map(h=>o.jsxs("button",{className:`mp__tab ${d===h?"mp__tab--active":""}`,onClick:()=>r(x=>x===h?null:h),children:[`P${e.playerIds.indexOf(h)+1}`,h===l&&o.jsx("span",{className:"mp__tab-dot"})]},h)),o.jsx("span",{className:"mp__phase-hint",children:e.phase==="plotting"?"布局中":"行动中"})]}),f&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"mp__header",children:[o.jsx("img",{src:`/assets/tokens/${f.tokenId}`,alt:f.nameCn,className:"mp__token",onError:h=>{h.target.style.opacity="0.3"}}),o.jsxs("div",{className:"mp__header-info",children:[o.jsx("div",{className:"mp__unit-name",children:f.nameCn}),o.jsx("div",{className:"mp__unit-sub",children:f.nameJa}),o.jsxs("div",{className:"mp__pos",children:["格 (",u.position.row,",",u.position.col,")   ",g]})]})]}),o.jsxs("div",{className:"mp__stats",children:[o.jsx(Ba,{label:"先制",value:f.initiative,color:"#f0c040"}),o.jsx(Ba,{label:"移动",value:f.movement,color:"#66ccaa"}),o.jsx(Ba,{label:"回避",value:f.evasion,color:"#88aaff"}),o.jsx(Ba,{label:"突击",value:f.assault,color:"#ff9944"}),o.jsx(Ba,{label:"被突",value:f.assaultDef,color:"#ff6666"})]}),o.jsxs("div",{className:"mp__zones",children:[o.jsxs("div",{className:"mp__zone mp__zone--aux",children:[o.jsx("div",{className:"mp__zone-label",children:"辅助区"}),u.auxiliary.length===0?o.jsx("div",{className:"mp__zone-empty",children:"—"}):(()=>{const h=new Map;for(const p of u.auxiliary){const _=n(p.defId),b=(_==null?void 0:_.nameJa)??p.defId,v=h.get(b);v?(v.totalCount++,p.destroyed||v.liveCount++):h.set(b,{nameCn:(_==null?void 0:_.nameCn)??p.defId,liveCount:p.destroyed?0:1,totalCount:1})}const x=p=>{const _=fn(u,n,"movement"),b=fn(u,n,"melee"),v=fn(u,n,"charge");return p==="バーニア"?_.vernier||b.vernier:p==="ムーブセンサー"?b.moveSensor:p==="ホイール"?_.wheel||v.wheel:!1};return o.jsxs(o.Fragment,{children:[u.auxiliary.map(p=>{const _=n(p.defId),b=_!=null&&_.frontImageId?`/assets/${_.frontImageId}`:null;return o.jsxs("div",{className:`mp__aux-card${p.destroyed?" mp__aux-card--destroyed":""}`,...b?s(b):{},children:[o.jsx("span",{className:"mp__aux-name",children:(_==null?void 0:_.nameCn)??p.defId}),p.destroyed&&o.jsx("span",{className:"mp__aux-dead",children:"✕"})]},p.instanceId)}),o.jsx("div",{className:"mp__aux-badges",children:Array.from(h.entries()).map(([p,_])=>{const b=x(p);return o.jsxs("div",{className:`mp__aux-status ${b?"mp__aux-status--on":"mp__aux-status--off"}`,title:b?"效果激活中":"需要≥2张存活才能激活",children:[b?"✓":"✗"," ",_.nameCn,o.jsxs("span",{className:"mp__aux-count",children:["(",_.liveCount,"/",_.totalCount,")"]})]},p)})})]})})()]}),o.jsxs("div",{className:"mp__counts",children:[o.jsx(io,{icon:"🃏",label:"手牌",count:u.hand.filter(h=>!h.destroyed).length}),o.jsx(io,{icon:"📚",label:"牌库",count:u.deck.filter(h=>!h.destroyed).length}),o.jsx(io,{icon:"♻️",label:"弃牌",count:u.discard.filter(h=>!h.destroyed).length}),o.jsx(io,{icon:"💀",label:"破坏",count:u.destroyedCards.length})]})]}),o.jsxs("div",{className:"mp__plot",children:[o.jsx("div",{className:"mp__plot-label",children:"布局段落"}),o.jsxs("div",{className:"mp__plot-slots",children:[o.jsx(cu,{label:"主要阶段一",card:u.plotSeg1,getCard:n,hidden:m,getZoomHandlers:s}),o.jsx(cu,{label:"主要阶段二",card:u.plotSeg2,getCard:n,hidden:m,getZoomHandlers:s})]})]})]}),o.jsx("style",{children:_b}),o.jsx(Ot,{zoom:i})]})}function yb(e,n){return e.phase==="plotting"?e.plottingStep!=="complete":!1}function Ba({label:e,value:n,color:t}){return o.jsxs("div",{className:"mp__stat",children:[o.jsx("span",{className:"mp__stat-lbl",children:e}),o.jsx("span",{className:"mp__stat-val",style:{color:t},children:n})]})}function io({icon:e,label:n,count:t}){return o.jsxs("div",{className:"mp__zcount",children:[o.jsx("span",{className:"mp__zcount-icon",children:e}),o.jsx("span",{className:"mp__zcount-lbl",children:n}),o.jsx("span",{className:"mp__zcount-n",children:t})]})}function cu({label:e,card:n,getCard:t,hidden:a,getZoomHandlers:r}){const i=n?t(n.defId):null,s=i!=null&&i.frontImageId?`/assets/${i.frontImageId}`:null;return o.jsxs("div",{className:"mp__slot",children:[o.jsx("div",{className:"mp__slot-lbl",children:e}),n?a?o.jsx("div",{className:"mp__slot-hidden",children:"???"}):o.jsxs("div",{className:"mp__slot-card",...s?r(s):{},children:[o.jsx("span",{className:"mp__slot-name",children:(i==null?void 0:i.nameCn)??n.defId}),o.jsx("span",{className:`mp__slot-type mp__slot-type--${(i==null?void 0:i.actionType)??"unknown"}`,children:(i==null?void 0:i.actionType)??"?"})]}):o.jsx("div",{className:"mp__slot-empty",children:"— 未布局 —"})]})}const _b=`
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
`,Ib={slot_1:"存档位 1",slot_2:"存档位 2",slot_3:"存档位 3",slot_4:"存档位 4",slot_5:"存档位 5",auto:"自动存档"},kb=[...Dx,"auto"];function jb(e){const n=new Date(e),t=a=>String(a).padStart(2,"0");return`${n.getFullYear()}-${t(n.getMonth()+1)}-${t(n.getDate())} ${t(n.getHours())}:${t(n.getMinutes())}`}function du({mode:e,onBack:n,onLoad:t,currentState:a,aiConfig:r}){const[i,s]=j.useState([]),[l,d]=j.useState(null),[u,f]=j.useState(null),[m,g]=j.useState(null),[h,x]=j.useState(null);j.useEffect(()=>{s(Gd())},[]);function p(){s(Gd())}function _(k){g(k),setTimeout(()=>g(null),2e3)}function b(k){return i.find(S=>S.slotId===k)}function v(k){if(!a||!r)return;if(b(k)){f(k);return}y(k)}function y(k){if(!(!a||!r))try{jc(k,a,r,!1),p(),f(null),_("存档已保存")}catch(S){x(S instanceof Error?S.message:"保存失败")}}function I(k){const S=Ax(k);if(!S){x("存档数据已损坏，无法加载");return}t==null||t(S)}function N(k){zx(k),p(),d(null),_("存档已删除")}const T=e==="save"?"保存游戏":"加载存档";return o.jsxs("div",{className:"sl-screen",children:[o.jsxs("div",{className:"sl-panel",children:[o.jsx("h2",{className:"sl-title",children:T}),o.jsx("div",{className:"sl-slots",children:kb.map(k=>{const S=b(k),E=e==="save"&&!(k==="auto")&&a!=null;return o.jsxs("div",{className:`sl-slot ${S?"sl-slot--occupied":"sl-slot--empty"}`,children:[o.jsxs("div",{className:"sl-slot__label",children:[Ib[k],(S==null?void 0:S.isAutoSave)&&o.jsx("span",{className:"sl-badge",children:"自动"})]}),S?o.jsxs("div",{className:"sl-slot__info",children:[o.jsxs("span",{className:"sl-slot__units",children:[S.player1Unit," vs ",S.player2Unit]}),o.jsx("span",{className:"sl-slot__map",children:S.mapName}),o.jsxs("span",{className:"sl-slot__round",children:["第 ",S.roundNumber," 回合"]}),o.jsx("span",{className:"sl-slot__time",children:jb(S.timestamp)})]}):o.jsx("div",{className:"sl-slot__info sl-slot__empty-label",children:"空存档位"}),o.jsxs("div",{className:"sl-slot__actions",children:[e==="load"&&S&&o.jsx("button",{className:"sl-btn sl-btn--primary",onClick:()=>I(k),children:"加载"}),E&&o.jsx("button",{className:"sl-btn sl-btn--primary",onClick:()=>v(k),children:S?"覆盖":"保存"}),S&&(l===k?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"sl-confirm-text",children:"确认删除？"}),o.jsx("button",{className:"sl-btn sl-btn--danger",onClick:()=>N(k),children:"确认"}),o.jsx("button",{className:"sl-btn",onClick:()=>d(null),children:"取消"})]}):o.jsx("button",{className:"sl-btn sl-btn--ghost",onClick:()=>d(k),children:"删除"}))]}),u===k&&o.jsxs("div",{className:"sl-overwrite",children:[o.jsx("span",{children:"覆盖此存档？"}),o.jsx("button",{className:"sl-btn sl-btn--primary",onClick:()=>y(k),children:"确认"}),o.jsx("button",{className:"sl-btn",onClick:()=>f(null),children:"取消"})]})]},k)})}),h&&o.jsxs("div",{className:"sl-error",onClick:()=>x(null),children:["⚠ ",h]}),o.jsx("button",{className:"sl-back-btn",onClick:n,children:"← 返回"})]}),m&&o.jsx("div",{className:"sl-toast",children:m}),o.jsx("style",{children:wb})]})}const wb=`
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
`;function Sb({currentState:e}){const{rawDispatch:n}=Ce();return j.useEffect(()=>{n({type:"LOAD_GAME",state:e})},[e,n]),o.jsx("div",{style:{height:"100%",width:"100%"},children:o.jsx(wa,{})})}function Cb({currentState:e}){return o.jsx(Ei,{children:o.jsx(Fm,{children:o.jsx(Sb,{currentState:e})})})}function Nb({onBack:e}){const[n,t]=j.useState("list"),[a,r]=j.useState(null);function i(l){r(l),t("playback")}function s(){r(null),t("list")}return n==="playback"&&a?o.jsx(Db,{replayData:a,onExit:s}):o.jsx(Mb,{onBack:e,onPlay:i})}function Xm(e){const n=Fx(e.initialState,e.actions),t=new Blob([n],{type:"text/plain;charset=utf-8"}),a=URL.createObjectURL(t),r=document.createElement("a");r.href=a;const i=new Date(e.metadata.timestamp),s=d=>String(d).padStart(2,"0"),l=`replay_${e.metadata.player1Unit}_vs_${e.metadata.player2Unit}_${i.getFullYear()}${s(i.getMonth()+1)}${s(i.getDate())}_${s(i.getHours())}${s(i.getMinutes())}.txt`;r.download=l,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(a)}function Mb({onBack:e,onPlay:n}){const[t,a]=j.useState([]),[r,i]=j.useState(null),[s,l]=j.useState(null);j.useEffect(()=>{a(Hd())},[]);function d(m){const g=Ud(m);if(!g){l("录像数据已损坏，无法播放");return}n(g)}function u(m){const g=Ud(m);if(!g){l("录像数据已损坏，无法导出");return}Xm(g)}function f(m){Rx(m),a(Hd()),i(null)}return o.jsxs("div",{className:"rp-screen",children:[o.jsxs("div",{className:"rp-panel",children:[o.jsx("h2",{className:"rp-title",children:"回放录像"}),t.length===0?o.jsx("div",{className:"rp-empty",children:"暂无保存的录像"}):o.jsx("div",{className:"rp-list",children:t.map(m=>o.jsxs("div",{className:"rp-item",children:[o.jsxs("div",{className:"rp-item__info",children:[o.jsxs("span",{className:"rp-item__units",children:[m.player1Unit," vs ",m.player2Unit]}),o.jsx("span",{className:"rp-item__map",children:m.mapName}),o.jsxs("span",{className:"rp-item__rounds",children:[m.totalRounds," 回合"]}),m.winner&&o.jsx("span",{className:"rp-item__winner",children:m.winner==="draw"?"平局":`${m.winner==="player1"?"P1":"P2"} 获胜`}),o.jsx("span",{className:"rp-item__time",children:$b(m.timestamp)})]}),o.jsxs("div",{className:"rp-item__actions",children:[o.jsx("button",{className:"rp-btn rp-btn--primary",onClick:()=>d(m.replayId),children:"▶ 播放"}),o.jsx("button",{className:"rp-btn",onClick:()=>u(m.replayId),children:"导出日志"}),r===m.replayId?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"rp-confirm",children:"确认删除？"}),o.jsx("button",{className:"rp-btn rp-btn--danger",onClick:()=>f(m.replayId),children:"确认"}),o.jsx("button",{className:"rp-btn",onClick:()=>i(null),children:"取消"})]}):o.jsx("button",{className:"rp-btn rp-btn--ghost",onClick:()=>i(m.replayId),children:"删除"})]})]},m.replayId))}),s&&o.jsxs("div",{className:"rp-error",onClick:()=>l(null),children:["⚠ ",s]}),o.jsx("button",{className:"rp-back-btn",onClick:e,children:"← 返回"})]}),o.jsx("style",{children:Qm})]})}function Tb(e){const n=[0];let t=e.initialState;for(let a=0;a<e.actions.length;a++){const r=t.phase,i=t.roundNumber,s=t.plottingStep,l=t.currentTiming;t=gn(t,e.actions[a]),(t.phase!==r||t.roundNumber!==i||t.plottingStep!==s||t.currentTiming!==l)&&n.push(a+1)}return n[n.length-1]!==e.actions.length&&n.push(e.actions.length),n}function uu(e,n){let t=e.initialState;for(let a=0;a<n&&a<e.actions.length;a++)t=gn(t,e.actions[a]);return t}function Eb(e,n){const t=i=>{const s=n.players[i],l=q.find(d=>d.id===s.unitId);return(l==null?void 0:l.nameCn)??i},a=i=>{const s=te(i);return(s==null?void 0:s.nameCn)??i},r=(i,s)=>{const l=n.players[s],u=[...l.deck,...l.hand,...l.auxiliary,...l.discard,...l.destroyedCards,...l.plotSeg1?[l.plotSeg1]:[],...l.plotSeg2?[l.plotSeg2]:[]].find(f=>f.instanceId===i);return u?a(u.defId):i};switch(e.type){case"DRAW_CARDS":return`${t(e.playerId)} 抽取 ${e.count} 张牌`;case"PLOT_CARD":{const i=r(e.instanceId,e.playerId);return`${t(e.playerId)} 布局段落${e.seg}：${i}`}case"CONFIRM_PLOT":return`${t(e.playerId)} 确认布局`;case"ADVANCE_PLOT_STEP":return"布局阶段推进";case"MOVE_UNIT":return`${t(e.playerId)} 移动至 (${e.to.row},${e.to.col})${e.finalFacing?`，面向 ${e.finalFacing}`:""}`;case"ADJUST_FACING":return`${t(e.playerId)} 调整朝向 → ${e.facing}`;case"RESOLVE_RANGED":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动射击`;case"RESOLVE_MELEE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动近战`;case"RESOLVE_CHARGE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动突击`;case"PLACE_MINE":{const i=e.placements??(e.to?[{position:e.to,kind:"real"}]:[]);return`${t(e.playerId)} 布置隐藏指示物：${i.map(s=>`(${s.position.row},${s.position.col})`).join("、")}`}case"SELECT_DAMAGE_CARD":{const i=r(e.instanceId,e.playerId);return`${t(e.playerId)} 选择摧毁：${i}`}case"CONFIRM_DAMAGE_SELECTION":return`${t(e.playerId)} 确认伤害结算`;case"SKIP_ACTION":return"跳过行动";case"ADVANCE_TIMING":return"推进时序";case"ADVANCE_PHASE":return"推进阶段";case"MELEE_SENSOR_MOVE":return`${t(e.playerId)} 近战传感器移动至 (${e.to.row},${e.to.col})`;case"START_PLOTTING":return"进入布局阶段";default:return e.type}}function pu({player:e,label:n}){const t=q.find(l=>l.id===e.unitId),{zoom:a,getZoomHandlers:r}=Lt(),i=l=>l.filter(d=>!d.destroyed),s={N:"↑北",S:"↓南",E:"→东",W:"←西"}[e.facing]??e.facing;return o.jsxs("div",{className:"rpp",children:[o.jsxs("div",{className:"rpp__header",children:[t&&o.jsx("img",{src:`/assets/tokens/${t.tokenId}`,alt:t.nameCn,className:"rpp__token",onError:l=>{l.target.style.opacity="0.3"}}),o.jsxs("div",{children:[o.jsxs("div",{className:"rpp__name",children:[n,": ",(t==null?void 0:t.nameCn)??e.unitId]}),o.jsxs("div",{className:"rpp__pos",children:["(",e.position.row,",",e.position.col,") ",s]})]})]}),o.jsxs("div",{className:"rpp__counts",children:[o.jsxs("span",{className:"rpp__count",title:"牌库",children:["📚",i(e.deck).length]}),o.jsxs("span",{className:"rpp__count",title:"手牌",children:["🃏",e.hand.length]}),o.jsxs("span",{className:"rpp__count",title:"弃牌",children:["♻️",e.discard.length]}),o.jsxs("span",{className:"rpp__count",title:"破坏",children:["💀",e.destroyedCards.length]})]}),o.jsx("div",{className:"rpp__section-label",children:"布局"}),o.jsxs("div",{className:"rpp__plot-row",children:[o.jsx(mu,{label:"阶段1",card:e.plotSeg1,getZoomHandlers:r}),o.jsx(mu,{label:"阶段2",card:e.plotSeg2,getZoomHandlers:r})]}),o.jsxs("div",{className:"rpp__section-label",children:["手牌 (",e.hand.length,")"]}),o.jsx("div",{className:"rpp__card-list",children:e.hand.length===0?o.jsx("span",{className:"rpp__empty",children:"—"}):e.hand.map(l=>o.jsx(fu,{card:l,getZoomHandlers:r},l.instanceId))}),e.auxiliary.length>0&&o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"rpp__section-label",children:["辅助 (",i(e.auxiliary).length,"/",e.auxiliary.length,")"]}),o.jsx("div",{className:"rpp__card-list",children:e.auxiliary.map(l=>o.jsx(fu,{card:l,getZoomHandlers:r},l.instanceId))})]}),o.jsx(Ot,{zoom:a})]})}function mu({label:e,card:n,getZoomHandlers:t}){const a=n?te(n.defId):null,r=a!=null&&a.frontImageId?`/assets/${a.frontImageId}`:null,s=a?{movement:"#66ccaa",ranged:"#ff9944",melee:"#ff6060",charge:"#ff4444",aim:"#f0c040",armor:"#88aaff",mine:"#cc88ff",special:"#aaa",auxiliary:"#77ddaa"}[a.actionType]??"#888":"#555";return o.jsxs("div",{className:"rpp__plot-slot",children:[o.jsx("div",{className:"rpp__plot-label",children:e}),n&&a?o.jsxs("div",{className:"rpp__plot-card",style:{borderColor:s},...r?t(r):{},children:[o.jsx("span",{className:"rpp__plot-type",style:{color:s},children:a.actionType}),o.jsx("span",{className:"rpp__plot-name",children:a.nameCn})]}):o.jsx("div",{className:"rpp__plot-empty",children:"—"})]})}function fu({card:e,getZoomHandlers:n}){const t=te(e.defId),a=t!=null&&t.frontImageId?`/assets/${t.frontImageId}`:null,i=t?{movement:"#66ccaa",ranged:"#ff9944",melee:"#ff6060",charge:"#ff4444",aim:"#f0c040",armor:"#88aaff",mine:"#cc88ff",special:"#aaa",auxiliary:"#77ddaa"}[t.actionType]??"#888":"#555";return o.jsxs("span",{className:`rpp__chip${e.destroyed?" rpp__chip--dead":""}`,style:{borderColor:i},...a?n(a):{},children:[(t==null?void 0:t.nameCn)??e.defId,e.destroyed&&o.jsx("span",{className:"rpp__chip-x",children:"✕"})]})}function Db({replayData:e,onExit:n}){const t=j.useMemo(()=>Tb(e),[e]),a=e.actions.length,[r,i]=j.useState(0),[s,l]=j.useState(e.initialState),[d,u]=j.useState(!1),[f,m]=j.useState(1),[g,h]=j.useState(""),[x,p]=j.useState(e.initialState.log.length),_=j.useRef(null),b=j.useRef(s),v=j.useRef(r);b.current=s,v.current=r;const y=j.useRef(null);j.useEffect(()=>{var z;(z=y.current)==null||z.scrollIntoView({behavior:"smooth"})},[s.log.length]);const I=j.useCallback(()=>{_.current!=null&&(clearInterval(_.current),_.current=null)},[]),N=j.useCallback(()=>{const z=v.current;if(z>=a)return I(),u(!1),!1;const R=e.actions[z],D=gn(b.current,R);return p(b.current.log.length),l(D),i(z+1),!0},[e,a,I]),T=j.useCallback(()=>{const z=v.current;if(z>=a)return;const D=t.find(B=>B>z)??a;let F=b.current;const P=F.log.length;for(let B=z;B<D;B++)F=gn(F,e.actions[B]);p(P),l(F),i(D),D>=a&&(I(),u(!1))},[e,a,t,I]),k=j.useCallback(()=>{const z=v.current,R=t.filter(P=>P<z),D=R.length>=2?R[R.length-2]:0,F=uu(e,D);p(0),l(F),i(D)},[e,t]);j.useEffect(()=>(I(),d&&(_.current=setInterval(()=>{if(v.current>=a){I(),u(!1);return}T()},Math.round(1500/f))),I),[d,f,T,a,I]);function S(){u(z=>!z)}function $(){u(!1),p(0),l(e.initialState),i(0)}function E(){const z=parseInt(g,10);if(isNaN(z)||z<1)return;u(!1);const{state:R,actionIndex:D}=Ox(e,z);p(0),l(R),i(D)}const J=r>0?e.actions[r-1]:null,V=J?Eb(J,r>=2?uu(e,r-1):e.initialState):null,A=r>=a,O=r===0,K={pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"行动阶段1",action_seg2:"行动阶段2",cleanup:"清理阶段",game_over:"游戏结束"},M={movement:"移动",ranged:"射击",melee:"近战",special:"特殊"};return o.jsxs("div",{className:"rpv-screen",children:[o.jsxs("div",{className:"rpv-topbar",children:[o.jsxs("span",{className:"rpv-topbar__round",children:["第 ",s.roundNumber," 回合"]}),o.jsx("span",{className:"rpv-topbar__phase",children:K[s.phase]??s.phase}),s.currentTiming&&o.jsxs("span",{className:"rpv-topbar__timing",children:["▶ ",M[s.currentTiming]]}),o.jsx("span",{style:{flex:1}}),o.jsx("button",{className:"rpv-btn",onClick:$,disabled:O,title:"回到开始",children:"⏮"}),o.jsx("button",{className:"rpv-btn",onClick:k,disabled:O,title:"上一阶段",children:"◀◀"}),o.jsx("button",{className:"rpv-btn",onClick:()=>{u(!1),N()},disabled:A,title:"单步前进（单个操作）",children:"▶|"}),o.jsx("button",{className:"rpv-btn",onClick:()=>{u(!1),T()},disabled:A,title:"下一阶段",children:"▶▶"}),o.jsx("button",{className:"rpv-btn rpv-btn--primary",onClick:S,children:d?"⏸ 暂停":"▶ 自动"}),o.jsx("span",{className:"rpv-sep"}),o.jsx("span",{className:"rpv-label",children:"速度"}),[1,2,4].map(z=>o.jsxs("button",{className:`rpv-btn rpv-btn--speed ${f===z?"rpv-btn--active":""}`,onClick:()=>m(z),children:[z,"x"]},z)),o.jsx("span",{className:"rpv-sep"}),o.jsx("span",{className:"rpv-label",children:"跳至"}),o.jsx("input",{className:"rpv-input",type:"number",min:1,value:g,onChange:z=>h(z.target.value),onKeyDown:z=>z.key==="Enter"&&E(),placeholder:"回合"}),o.jsx("button",{className:"rpv-btn",onClick:E,children:"跳转"}),o.jsx("span",{className:"rpv-sep"}),o.jsxs("span",{className:"rpv-progress",children:[r,"/",a]}),o.jsx("button",{className:"rpv-btn",onClick:()=>Xm(e),title:"导出完整分析日志",children:"导出日志"}),o.jsx("button",{className:"rpv-btn rpv-btn--exit",onClick:n,children:"✕ 退出"})]}),o.jsxs("div",{className:"rpv-main",children:[o.jsxs("div",{className:"rpv-map-col",children:[o.jsx("div",{className:"rpv-map-area",children:o.jsx(Cb,{currentState:s})}),V&&o.jsxs("div",{className:"rpv-action-desc",children:["▶ ",V]}),o.jsxs("div",{className:"rpv-log",children:[o.jsx("div",{className:"rpv-log__header",children:"行动日志"}),o.jsxs("div",{className:"rpv-log__entries",children:[s.log.filter(z=>!z.startsWith("[DBG]")).map((z,R)=>{const D=R>=x;return o.jsx("div",{className:`rpv-log__entry ${Ab(z)}${D?" rpv-log__entry--new":""}`,children:z},R)}),o.jsx("div",{ref:y})]})]})]}),o.jsxs("div",{className:"rpv-info-col",children:[o.jsx(pu,{player:s.players.player1,label:"P1"}),o.jsx("div",{className:"rpv-info-divider"}),o.jsx(pu,{player:s.players.player2,label:"P2"})]})]}),o.jsx("style",{children:Qm}),o.jsx("style",{children:zb})]})}function $b(e){const n=new Date(e),t=a=>String(a).padStart(2,"0");return`${n.getFullYear()}-${t(n.getMonth()+1)}-${t(n.getDate())} ${t(n.getHours())}:${t(n.getMinutes())}`}function Ab(e){return e.startsWith("===")?"rpv-log__entry--round":e.startsWith("---")?"rpv-log__entry--sep":e.includes("发动")||e.includes("攻击")?"rpv-log__entry--attack":e.includes("摧毁")||e.includes("连锁")||e.includes("诱爆")?"rpv-log__entry--damage":e.includes("移动到")?"rpv-log__entry--move":e.includes("获胜")||e.includes("击破")||e.includes("平局")?"rpv-log__entry--victory":""}const Qm=`
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
`,zb=`
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
`,Vb=50;function qm(){return{terrain:"plain",elevation:0,variant:0}}function ef(e,n){const t=Array.from({length:n},()=>Array.from({length:e},()=>qm()));return{id:`custom_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,nameJa:"新しいマップ",nameCn:"新地图",width:e,height:n,cells:t,startZones:{0:[{row:0,col:Math.floor(e/2)}],1:[{row:n-1,col:Math.floor(e/2)}]},maxPlayers:2,maxTeams:2}}function yl(e){return{map:e??ef(7,11),activeTool:"terrain",selectedTerrain:"plain",selectedElevation:1,selectedVariant:0,selectedZoneTeam:0,brushSize:1,isDirty:!1,undoStack:[],redoStack:[],showCoords:!1}}function wo(e){return{...e,cells:e.cells.map(n=>n.map(t=>({...t}))),startZones:Object.fromEntries(Object.entries(e.startZones).map(([n,t])=>[n,t.map(a=>({...a}))]))}}function bt(e){const n=[...e.undoStack,wo(e.map)];return n.length>Vb&&n.shift(),{...e,undoStack:n,redoStack:[],isDirty:!0}}function gu(e,n,t,a,r,i){if(n<0||n>=e.height||t<0||t>=e.width)return e;const s=e.cells.map((l,d)=>d===n?l.map((u,f)=>f===t?{terrain:a,elevation:a==="highland"?r:0,variant:a==="highland"?r:i}:u):l);return{...e,cells:s}}function Pb(e,n){switch(n.type){case"SET_TOOL":return{...e,activeTool:n.tool};case"SET_TERRAIN":return{...e,selectedTerrain:n.terrain,activeTool:"terrain"};case"SET_ELEVATION":return{...e,selectedElevation:n.elevation};case"SET_VARIANT":return{...e,selectedVariant:n.variant};case"SET_BRUSH_SIZE":return{...e,brushSize:n.size};case"SET_ZONE_TEAM":return{...e,selectedZoneTeam:n.team};case"TOGGLE_COORDS":return{...e,showCoords:!e.showCoords};case"PAINT_CELL":{const t=bt(e),a=gu(t.map,n.row,n.col,t.selectedTerrain,t.selectedElevation,t.selectedVariant);return{...t,map:a}}case"PAINT_AREA":{const t=bt(e);let a=t.map;for(const{row:r,col:i}of n.cells)a=gu(a,r,i,t.selectedTerrain,t.selectedElevation,t.selectedVariant);return{...t,map:a}}case"ADD_ZONE_CELL":{const t=bt(e),{team:a,position:r}=n,i=t.map.startZones[a]??[];if(i.some(l=>l.row===r.row&&l.col===r.col))return e;const s={...t.map.startZones,[a]:[...i,r]};return{...t,map:{...t.map,startZones:s}}}case"REMOVE_ZONE_CELL":{const t=bt(e),{team:a,position:r}=n,s=(t.map.startZones[a]??[]).filter(d=>d.row!==r.row||d.col!==r.col),l={...t.map.startZones,[a]:s};return{...t,map:{...t.map,startZones:l}}}case"CLEAR_ZONE":{const t=bt(e),a={...t.map.startZones,[n.team]:[]};return{...t,map:{...t.map,startZones:a}}}case"SET_MAP_META":{const t=bt(e),a={...t.map};return n.nameJa!==void 0&&(a.nameJa=n.nameJa),n.nameCn!==void 0&&(a.nameCn=n.nameCn),n.maxPlayers!==void 0&&(a.maxPlayers=n.maxPlayers),n.maxTeams!==void 0&&(a.maxTeams=n.maxTeams),{...t,map:a}}case"RESIZE_MAP":{const t=bt(e),{newWidth:a,newHeight:r}=n,i=Array.from({length:r},(l,d)=>Array.from({length:a},(u,f)=>d<t.map.height&&f<t.map.width?{...t.map.cells[d][f]}:qm())),s={};for(const[l,d]of Object.entries(t.map.startZones))s[Number(l)]=d.filter(u=>u.row<r&&u.col<a);return{...t,map:{...t.map,width:a,height:r,cells:i,startZones:s}}}case"UNDO":{if(e.undoStack.length===0)return e;const t=e.undoStack[e.undoStack.length-1];return{...e,map:t,undoStack:e.undoStack.slice(0,-1),redoStack:[...e.redoStack,wo(e.map)],isDirty:!0}}case"REDO":{if(e.redoStack.length===0)return e;const t=e.redoStack[e.redoStack.length-1];return{...e,map:t,redoStack:e.redoStack.slice(0,-1),undoStack:[...e.undoStack,wo(e.map)],isDirty:!0}}case"LOAD_MAP":return{...yl(wo(n.map)),isDirty:!1};case"NEW_MAP":return yl(ef(n.width,n.height));case"MARK_SAVED":return{...e,isDirty:!1};default:return e}}const Cc="em_custom_maps_index",Nc="em_custom_map_",Rb=["plain","sand","rubble","forest","water","highland"];function Mc(){try{const e=localStorage.getItem(Cc);return e?JSON.parse(e):[]}catch{return[]}}function Lb(e){const n={id:e.id,nameCn:e.nameCn,nameJa:e.nameJa,width:e.width,height:e.height,maxPlayers:e.maxPlayers,maxTeams:e.maxTeams,savedAt:Date.now()},t=Mc().filter(a=>a.id!==e.id);t.push(n),localStorage.setItem(Cc,JSON.stringify(t)),localStorage.setItem(Nc+e.id,JSON.stringify(e))}function Ob(e){try{const n=localStorage.getItem(Nc+e);if(!n)return null;const t=JSON.parse(n);return nf(t)?t:null}catch{return null}}function Kb(e){const n=Mc().filter(t=>t.id!==e);localStorage.setItem(Cc,JSON.stringify(n)),localStorage.removeItem(Nc+e)}function Jb(e){return JSON.stringify(e,null,2)}function Bb(e){try{const n=JSON.parse(e);return nf(n)?(n.id=`custom_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,n):null}catch{return null}}function Fb(e){const n=Jb(e),t=new Blob([n],{type:"application/json"}),a=URL.createObjectURL(t),r=document.createElement("a");r.href=a,r.download=`${e.nameCn||e.id}.json`,r.click(),URL.revokeObjectURL(a)}function nf(e){if(!e||typeof e!="object")return!1;const n=e;if(typeof n.id!="string"||(typeof n.nameCn!="string"&&(n.nameCn="未命名"),typeof n.nameJa!="string"&&(n.nameJa=""),typeof n.width!="number"||n.width<3||n.width>25)||typeof n.height!="number"||n.height<3||n.height>25||(typeof n.maxPlayers!="number"&&(n.maxPlayers=2),typeof n.maxTeams!="number"&&(n.maxTeams=2),!Array.isArray(n.cells))||n.cells.length!==n.height)return!1;for(const t of n.cells){if(!Array.isArray(t)||t.length!==n.width)return!1;for(const a of t)if(!a||typeof a!="object"||!Rb.includes(a.terrain))return!1}return(!n.startZones||typeof n.startZones!="object")&&(n.startZones={}),!0}const tf=j.createContext(null);function Ta(){const e=j.useContext(tf);if(!e)throw new Error("useEditor must be inside EditorCtx.Provider");return e}const so=48,hu=.2,Gb=3,xu=.1,_l=[{terrain:"plain",label:"平原",icon:"🟩"},{terrain:"sand",label:"砂地",icon:"🟨"},{terrain:"rubble",label:"瓦砾",icon:"🟫"},{terrain:"forest",label:"森林",icon:"🌲"},{terrain:"water",label:"水域",icon:"🟦"},{terrain:"highland",label:"高地",icon:"⛰️"}],ci=["#00f0ff","#ff00c8","#00cc88","#ff8800","#6688ff","#cc44ff","#44dddd","#ff4466"];function Hb({onBack:e}){const[n,t]=j.useReducer(Pb,void 0,()=>yl()),a=j.useMemo(()=>({state:n,dispatch:t}),[n]);j.useEffect(()=>{function s(l){if((l.ctrlKey||l.metaKey)&&(l.key==="z"&&!l.shiftKey&&(l.preventDefault(),t({type:"UNDO"})),l.key==="z"&&l.shiftKey&&(l.preventDefault(),t({type:"REDO"})),l.key==="y"&&(l.preventDefault(),t({type:"REDO"})),l.key==="s"&&(l.preventDefault(),r())),!l.ctrlKey&&!l.metaKey&&!l.altKey){const d=parseInt(l.key)-1;d>=0&&d<_l.length&&t({type:"SET_TERRAIN",terrain:_l[d].terrain})}}return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[]);function r(){Lb(n.map),t({type:"MARK_SAVED"})}function i(){n.isDirty&&!window.confirm("有未保存的更改，确定要退出吗？")||e()}return o.jsx(tf.Provider,{value:a,children:o.jsxs("div",{className:"me__screen",children:[o.jsx(Ub,{onBack:i,onSave:r}),o.jsx(Zb,{}),o.jsx(we,{id:"me-terrain",title:"地形画笔",initialPos:{x:8,y:56},width:200,minHeight:60,zIndex:20,children:o.jsx(Yb,{})}),o.jsx(we,{id:"me-props",title:"地图属性",initialPos:{x:8,y:380},width:200,minHeight:60,zIndex:19,children:o.jsx(Xb,{})}),o.jsx(we,{id:"me-zones",title:"出击区域",initialPos:{x:8,y:600},width:200,minHeight:60,zIndex:18,children:o.jsx(Qb,{})}),o.jsx("style",{children:qb})]})})}function Ub({onBack:e,onSave:n}){const{state:t,dispatch:a}=Ta(),[r,i]=j.useState(!1),s=j.useRef(null);function l(){t.isDirty&&!window.confirm("有未保存的更改，确定要新建吗？")||a({type:"NEW_MAP",width:7,height:11})}function d(){Fb(t.map)}function u(){var m;(m=s.current)==null||m.click()}function f(m){var x;const g=(x=m.target.files)==null?void 0:x[0];if(!g)return;const h=new FileReader;h.onload=()=>{const p=Bb(h.result);p?a({type:"LOAD_MAP",map:p}):alert("无效的地图文件")},h.readAsText(g),m.target.value=""}return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"me__topbar",children:[o.jsx("button",{className:"me__btn",onClick:e,children:"← 返回"}),o.jsx("span",{className:"me__title",children:"地图编辑器"}),o.jsxs("span",{className:"me__map-name",children:[t.map.nameCn," (",t.map.height,"×",t.map.width,")",t.isDirty&&" *"]}),o.jsx("span",{style:{flex:1}}),o.jsx("button",{className:"me__btn",onClick:l,children:"新建"}),o.jsx("button",{className:"me__btn",onClick:()=>i(!0),children:"打开"}),o.jsx("button",{className:"me__btn me__btn--accent",onClick:n,children:"保存"}),o.jsx("button",{className:"me__btn",onClick:d,children:"导出"}),o.jsx("button",{className:"me__btn",onClick:u,children:"导入"}),o.jsx("input",{ref:s,type:"file",accept:".json",style:{display:"none"},onChange:f}),o.jsx("span",{className:"me__sep"}),o.jsx("button",{className:"me__btn",onClick:()=>a({type:"UNDO"}),disabled:t.undoStack.length===0,children:"撤销"}),o.jsx("button",{className:"me__btn",onClick:()=>a({type:"REDO"}),disabled:t.redoStack.length===0,children:"重做"}),o.jsx("button",{className:`me__btn${t.showCoords?" me__btn--active":""}`,onClick:()=>a({type:"TOGGLE_COORDS"}),children:"坐标"})]}),r&&o.jsx(Wb,{onClose:()=>i(!1)})]})}function Wb({onClose:e}){const{dispatch:n,state:t}=Ta(),[a]=j.useState(()=>Mc());function r(l){if(t.isDirty&&!window.confirm("有未保存的更改，确定要打开吗？"))return;const d=Ob(l);d&&(n({type:"LOAD_MAP",map:d}),e())}function i(l){if(t.isDirty&&!window.confirm("有未保存的更改，确定要打开吗？"))return;const d={...l,id:`custom_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,cells:l.cells.map(u=>u.map(f=>({...f}))),startZones:Object.fromEntries(Object.entries(l.startZones).map(([u,f])=>[u,f.map(m=>({...m}))]))};n({type:"LOAD_MAP",map:d}),e()}function s(l){window.confirm("确定删除此地图？")&&(Kb(l),e())}return o.jsx("div",{className:"me__overlay",onClick:e,children:o.jsxs("div",{className:"me__dialog",onClick:l=>l.stopPropagation(),children:[o.jsx("h3",{children:"打开地图"}),a.length>0&&o.jsxs(o.Fragment,{children:[o.jsx("h4",{children:"自定义地图"}),o.jsx("div",{className:"me__dialog-list",children:a.map(l=>o.jsxs("div",{className:"me__dialog-item",children:[o.jsxs("span",{children:[l.nameCn," (",l.height,"×",l.width,")"]}),o.jsx("span",{className:"me__dialog-date",children:new Date(l.savedAt).toLocaleDateString()}),o.jsx("button",{className:"me__btn me__btn--sm",onClick:()=>r(l.id),children:"打开"}),o.jsx("button",{className:"me__btn me__btn--sm me__btn--danger",onClick:()=>s(l.id),children:"删除"})]},l.id))})]}),o.jsx("h4",{children:"内置地图 (作为模板)"}),o.jsx("div",{className:"me__dialog-list",children:Ye.map(l=>o.jsxs("div",{className:"me__dialog-item",children:[o.jsxs("span",{children:[l.nameCn," (",l.height,"×",l.width,")"]}),o.jsx("button",{className:"me__btn me__btn--sm",onClick:()=>i(l),children:"复制"})]},l.id))}),o.jsx("div",{className:"me__dialog-actions",children:o.jsx("button",{className:"me__btn",onClick:e,children:"取消"})})]})})}function Zb(){const{state:e,dispatch:n}=Ta(),t=j.useRef(null),[a,r]=j.useState({x:0,y:0,scale:1}),i=j.useRef(null),s=j.useRef(!1),l=j.useRef(!1),d=j.useRef(new Set),{map:u,activeTool:f,showCoords:m,selectedZoneTeam:g,brushSize:h}=e,{width:x,height:p}=u;j.useEffect(()=>{const S=t.current;if(!S)return;const $=S.clientWidth,E=S.clientHeight,J=x*so,V=p*so;if(!$||!E)return;const A=Math.max(hu,Math.min(1.5,Math.min($/J,E/V)));r({x:($-J*A)/2,y:(E-V*A)/2,scale:A})},[x,p]),j.useEffect(()=>{const S=t.current;if(!S)return;const $=E=>{E.preventDefault();const J=E.deltaY<0?xu:-xu;r(V=>({...V,scale:Math.min(Gb,Math.max(hu,V.scale+J))}))};return S.addEventListener("wheel",$,{passive:!1}),()=>S.removeEventListener("wheel",$)},[]);const _=j.useCallback(S=>{S.button!==2&&(i.current={startX:S.clientX,startY:S.clientY,origX:a.x,origY:a.y},s.current=!1,l.current=!1,d.current.clear())},[a.x,a.y]),b=j.useCallback(S=>{if(!i.current)return;const $=S.clientX-i.current.startX,E=S.clientY-i.current.startY;!s.current&&Math.sqrt($*$+E*E)>5&&(S.buttons===4||S.buttons===2?s.current=!0:f==="terrain"||f==="startZone"||f==="eraseZone"?l.current=!0:s.current=!0),s.current&&r(J=>({...J,x:i.current.origX+$,y:i.current.origY+E}))},[f]),v=j.useCallback(()=>{i.current=null,s.current=!1,l.current=!1,d.current.clear()},[]),y=j.useMemo(()=>{const S=new Map;for(const[$,E]of Object.entries(u.startZones)){const J=Number($);for(const V of E)S.set(`${V.row},${V.col}`,J)}return S},[u.startZones]);function I(S,$){const E=`${S},${$}`;if(f==="terrain")if(h===1)d.current.has(E)||(d.current.add(E),n({type:"PAINT_CELL",row:S,col:$}));else{const J=[],V=Math.floor(h/2);for(let A=-V;A<=V;A++)for(let O=-V;O<=V;O++){const K=S+A,M=$+O;if(K>=0&&K<p&&M>=0&&M<x){const z=`${K},${M}`;d.current.has(z)||(d.current.add(z),J.push({row:K,col:M}))}}J.length&&n({type:"PAINT_AREA",cells:J})}else if(f==="startZone")n({type:"ADD_ZONE_CELL",team:g,position:{row:S,col:$}});else if(f==="eraseZone"){const J=y.get(E);J!==void 0&&n({type:"REMOVE_ZONE_CELL",team:J,position:{row:S,col:$}})}}const{x:N,y:T,scale:k}=a;return o.jsx("div",{className:"me__viewport",ref:t,onMouseDown:_,onMouseMove:b,onMouseUp:v,onMouseLeave:v,onContextMenu:S=>S.preventDefault(),children:o.jsx("div",{className:"me__grid",style:{transform:`translate(${N}px, ${T}px) scale(${k})`,transformOrigin:"top left",display:"grid",gridTemplateColumns:`repeat(${x}, ${so}px)`,gridTemplateRows:`repeat(${p}, ${so}px)`},children:u.cells.flatMap((S,$)=>S.map((E,J)=>{const V=hc(E),A=`${$},${J}`,O=y.get(A),K=O!==void 0?ci[O%ci.length]:"";return o.jsxs("div",{className:`me__cell${O!==void 0?" me__cell--zone":""}`,style:{backgroundImage:`url("${V}")`,backgroundSize:"cover",...O!==void 0?{borderColor:K,boxShadow:`inset 0 0 8px ${K}66`}:{}},onMouseDown:M=>{M.button===0&&!s.current&&I($,J)},onMouseEnter:()=>{l.current&&I($,J)},children:[E.terrain==="highland"&&o.jsxs("span",{className:"me__cell-elev",children:["+",E.elevation]}),m&&o.jsxs("span",{className:"me__cell-coord",children:[$,",",J]}),O!==void 0&&o.jsxs("span",{className:"me__cell-zone",style:{color:K},children:["Z",O]})]},A)}))})})}function Yb(){const{state:e,dispatch:n}=Ta();return o.jsxs("div",{className:"me__palette",children:[o.jsx("div",{className:"me__palette-grid",children:_l.map(({terrain:t,label:a,icon:r},i)=>o.jsxs("button",{className:`me__palette-btn${e.selectedTerrain===t&&e.activeTool==="terrain"?" me__palette-btn--active":""}`,onClick:()=>n({type:"SET_TERRAIN",terrain:t}),title:`${a} (${i+1})`,children:[r," ",a]},t))}),e.selectedTerrain==="highland"&&o.jsxs("div",{className:"me__sub-option",children:[o.jsx("label",{children:"高度:"}),[1,2,3].map(t=>o.jsxs("button",{className:`me__mini-btn${e.selectedElevation===t?" me__mini-btn--active":""}`,onClick:()=>n({type:"SET_ELEVATION",elevation:t}),children:["+",t]},t))]}),e.selectedTerrain!=="highland"&&e.selectedTerrain!=="plain"&&o.jsxs("div",{className:"me__sub-option",children:[o.jsx("label",{children:"变体:"}),[0,1,2,3].map(t=>o.jsx("button",{className:`me__mini-btn${e.selectedVariant===t?" me__mini-btn--active":""}`,onClick:()=>n({type:"SET_VARIANT",variant:t}),children:t},t))]}),o.jsxs("div",{className:"me__sub-option",children:[o.jsx("label",{children:"笔刷:"}),[1,2,3].map(t=>o.jsxs("button",{className:`me__mini-btn${e.brushSize===t?" me__mini-btn--active":""}`,onClick:()=>n({type:"SET_BRUSH_SIZE",size:t}),children:[t,"×",t]},t))]})]})}function Xb(){const{state:e,dispatch:n}=Ta(),{map:t}=e;return o.jsxs("div",{className:"me__props",children:[o.jsxs("label",{className:"me__prop-row",children:[o.jsx("span",{children:"名称(中)"}),o.jsx("input",{type:"text",value:t.nameCn,onChange:a=>n({type:"SET_MAP_META",nameCn:a.target.value})})]}),o.jsxs("label",{className:"me__prop-row",children:[o.jsx("span",{children:"名称(日)"}),o.jsx("input",{type:"text",value:t.nameJa,onChange:a=>n({type:"SET_MAP_META",nameJa:a.target.value})})]}),o.jsxs("div",{className:"me__prop-row",children:[o.jsx("span",{children:"尺寸"}),o.jsx("input",{type:"number",min:3,max:25,value:t.width,onChange:a=>n({type:"RESIZE_MAP",newWidth:Number(a.target.value),newHeight:t.height}),style:{width:50}}),"×",o.jsx("input",{type:"number",min:3,max:25,value:t.height,onChange:a=>n({type:"RESIZE_MAP",newWidth:t.width,newHeight:Number(a.target.value)}),style:{width:50}})]}),o.jsxs("label",{className:"me__prop-row",children:[o.jsx("span",{children:"最大玩家"}),o.jsx("select",{value:t.maxPlayers,onChange:a=>n({type:"SET_MAP_META",maxPlayers:Number(a.target.value)}),children:[2,3,4,6,8].map(a=>o.jsx("option",{value:a,children:a},a))})]}),o.jsxs("label",{className:"me__prop-row",children:[o.jsx("span",{children:"最大队伍"}),o.jsx("select",{value:t.maxTeams,onChange:a=>n({type:"SET_MAP_META",maxTeams:Number(a.target.value)}),children:Array.from({length:t.maxPlayers},(a,r)=>r+1).filter(a=>a>=2).map(a=>o.jsx("option",{value:a,children:a},a))})]})]})}function Qb(){const{state:e,dispatch:n}=Ta(),{map:t,activeTool:a,selectedZoneTeam:r}=e;return o.jsxs("div",{className:"me__zones",children:[o.jsxs("div",{className:"me__zones-tools",children:[o.jsx("button",{className:`me__btn me__btn--sm${a==="startZone"?" me__btn--active":""}`,onClick:()=>n({type:"SET_TOOL",tool:"startZone"}),children:"添加点"}),o.jsx("button",{className:`me__btn me__btn--sm${a==="eraseZone"?" me__btn--active":""}`,onClick:()=>n({type:"SET_TOOL",tool:"eraseZone"}),children:"删除点"})]}),Array.from({length:t.maxTeams},(i,s)=>s).map(i=>{const s=t.startZones[i]??[],l=ci[i%ci.length],d=r===i;return o.jsxs("div",{className:`me__zone-row${d?" me__zone-row--active":""}`,style:{borderLeftColor:l},onClick:()=>n({type:"SET_ZONE_TEAM",team:i}),children:[o.jsxs("span",{style:{color:l},children:["区域 ",i+1]}),o.jsxs("span",{className:"me__zone-count",children:[s.length," 点"]}),o.jsx("button",{className:"me__btn me__btn--sm me__btn--danger",onClick:u=>{u.stopPropagation(),n({type:"CLEAR_ZONE",team:i})},children:"清空"})]},i)})]})}const qb=`
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
`;function e1(e){return e?`(${e.row},${e.col})`:"(无)"}function Gt(e){if(!e)return"(空)";const n=te(e.defId),t=(n==null?void 0:n.nameCn)??e.defId,a=e.destroyed?" [已摧毁]":"";return`${t}(${e.defId})${a}`}function n1(e,n){const t=e.players[n];if(!t)return`  ${n}: (不存在)`;const a=q.find(i=>i.id===t.unitId),r=[];return r.push(`  ── ${n} ──`),r.push(`    机体: ${(a==null?void 0:a.nameCn)??t.unitId} (${t.unitId})`),r.push(`    位置: ${e1(t.position)}  朝向: ${t.facing}`),r.push(`    状态: ${t.isDefeated?"已击破":"存活"}`),r.push(`    手牌(${t.hand.length}): ${t.hand.map(i=>Gt(i)).join(", ")||"(无)"}`),r.push(`    阶段1配置: ${Gt(t.plotSeg1)}`),r.push(`    阶段2配置: ${Gt(t.plotSeg2)}`),r.push(`    辅助区(${t.auxiliary.length}): ${t.auxiliary.map(i=>Gt(i)).join(", ")||"(无)"}`),r.push(`    弃牌堆(${t.discard.length}): ${t.discard.map(i=>Gt(i)).join(", ")||"(无)"}`),r.push(`    摧毁区(${t.destroyedCards.length}): ${t.destroyedCards.map(i=>Gt(i)).join(", ")||"(无)"}`),r.push(`    卡组剩余: ${t.deck.filter(i=>!i.destroyed).length} 张`),r.join(`
`)}function t1(e){var t,a,r;const n=[];if(n.push("══════════════════════════════════════════"),n.push("  当前状态快照"),n.push("══════════════════════════════════════════"),n.push(`回合: ${e.roundNumber}`),n.push(`阶段: ${e.phase}`),n.push(`当前时机: ${e.currentTiming??"(无)"}`),n.push(`行动顺序: ${e.turnOrder.length>0?e.turnOrder.join(" → "):"(无)"}`),n.push(`布局步骤: ${e.plottingStep??"(无)"}`),n.push(`活跃玩家: ${e.activePlayer}`),n.push(`地图: ${((t=e.map)==null?void 0:t.id)??"(无)"}`),n.push(`地雷数: ${((a=e.mines)==null?void 0:a.length)??0}`),(r=e.mines)!=null&&r.length&&n.push(`隐藏指示物: ${e.mines.map(i=>`(${i.position.row},${i.position.col}) owner=${i.ownerId}`).join("；")}`),e.pendingDamage){const i=e.pendingDamage;n.push(`待处理伤害: 目标=${i.targetId}, 剩余=${i.remaining}, 来源=${i.source}, 攻击者=${i.attackerId??"(无)"}, 已选=${i.selectedInstanceIds.length}`)}n.push(""),n.push("── 玩家状态 ──");for(const i of e.playerIds)n.push(n1(e,i));return n.push(""),n.join(`
`)}function af(e,n){const t=new Date,a=t.toISOString().replace(/[:.]/g,"-").slice(0,19),r=[];r.push("╔══════════════════════════════════════════╗"),r.push("║   Embryo Machine — 全量游戏日志导出      ║"),r.push("╚══════════════════════════════════════════╝"),r.push(`导出时间: ${t.toLocaleString("zh-CN")}`),n!=null&&n.localPlayerId&&r.push(`本地玩家: ${n.localPlayerId}`),n!=null&&n.connectionStatus&&r.push(`连接状态: ${n.connectionStatus}`),r.push(""),r.push(t1(e)),r.push("══════════════════════════════════════════"),r.push("  完整游戏日志 (按时间顺序)"),r.push("══════════════════════════════════════════");const i=e.log.filter(f=>!f.startsWith("[DBG]"));for(let f=0;f<i.length;f++)r.push(`[${String(f+1).padStart(4," ")}] ${i[f]}`);r.push(""),r.push(`── 共 ${i.length} 条日志 ──`);const s=r.join(`
`),l=new Blob([s],{type:"text/plain;charset=utf-8"}),d=URL.createObjectURL(l),u=document.createElement("a");u.href=d,u.download=`embryo-log-${a}.txt`,u.click(),URL.revokeObjectURL(d)}const vu=[1e3,2e3,4e3,8e3,15e3];class a1{constructor(n,t,a){en(this,"ws",null);en(this,"url");en(this,"sessionId");en(this,"onMessage");en(this,"onStatus");en(this,"reconnectAttempt",0);en(this,"reconnectTimer",null);en(this,"intentionallyClosed",!1);en(this,"hasEverConnected",!1);this.url=n,this.sessionId=localStorage.getItem("embryo-session-id"),this.onMessage=t,this.onStatus=a}connect(){this.intentionallyClosed=!1,this.onStatus("connecting");const n=this.sessionId?`?sessionId=${this.sessionId}`:"";this.ws=new WebSocket(`${this.url}${n}`),this.ws.onopen=()=>{var t;if(this.intentionallyClosed){(t=this.ws)==null||t.close(),this.ws=null,this.onStatus("disconnected");return}this.hasEverConnected=!0,this.reconnectAttempt=0,this.onStatus("connected")},this.ws.onmessage=t=>{try{const a=JSON.parse(t.data);a.type==="SESSION_ID"&&(this.sessionId=a.sessionId,localStorage.setItem("embryo-session-id",a.sessionId)),this.onMessage(a)}catch{console.warn("[GameSocket] Failed to parse message:",t.data)}},this.ws.onclose=()=>{if(this.intentionallyClosed){this.onStatus("disconnected");return}this.hasEverConnected||(this.sessionId=null,localStorage.removeItem("embryo-session-id")),this.onStatus("reconnecting"),this.scheduleReconnect()},this.ws.onerror=()=>{}}send(n){var t;((t=this.ws)==null?void 0:t.readyState)===WebSocket.OPEN?this.ws.send(JSON.stringify(n)):console.warn("[GameSocket] Cannot send — not connected")}disconnect(){if(this.intentionallyClosed=!0,this.reconnectTimer&&(clearTimeout(this.reconnectTimer),this.reconnectTimer=null),this.ws){const n=this.ws.readyState;n===WebSocket.OPEN||n===WebSocket.CLOSING?(this.ws.close(),this.ws=null):n===WebSocket.CONNECTING&&(this.ws.onmessage=null,this.ws.onerror=null)}this.onStatus("disconnected")}clearSession(){this.sessionId=null,localStorage.removeItem("embryo-session-id")}get isConnected(){var n;return((n=this.ws)==null?void 0:n.readyState)===WebSocket.OPEN}scheduleReconnect(){const n=vu[Math.min(this.reconnectAttempt,vu.length-1)];this.reconnectAttempt++,this.reconnectTimer=setTimeout(()=>{this.reconnectTimer=null,this.connect()},n)}}const rf=j.createContext(null);function r1({serverUrl:e,children:n}){const[t,a]=j.useState(null),[r,i]=j.useState(null),[s,l]=j.useState(null),[d,u]=j.useState("disconnected"),[f,m]=j.useState(null),[g,h]=j.useState(null),[x,p]=j.useState([]),[_,b]=j.useState(null),[v,y]=j.useState(null),[I,N]=j.useState(null),T=j.useRef(null),k=j.useRef(null),S=j.useRef(-1),$=j.useRef([]),E=j.useCallback(M=>{switch(M.type){case"SESSION_ID":break;case"ROOM_STATE":i(M.room),l(M.yourPlayerId);break;case"ROOM_LIST":p(M.rooms);break;case"GAME_STATE":{M.state.phase==="plotting"&&(k.current!=="plotting"||S.current!==M.state.roundNumber)&&m(null),k.current=M.state.phase,S.current=M.state.roundNumber,a(M.state),l(M.yourPlayerId),b(M.currentTurnPlayerId??null),y(M.turnDeadline??null),M.replayActions&&M.replayActions.length>0&&($.current=[...$.current,...M.replayActions]);break}case"PLOTTING_STATUS":m({confirmed:M.confirmed,total:M.total});break;case"GAME_STARTED":M.initialState&&(N(M.initialState),$.current=[]);break;case"RECONNECTED":i(M.room),a(M.state),l(M.yourPlayerId),b(M.currentTurnPlayerId??null),y(M.turnDeadline??null),k.current=M.state.phase,S.current=M.state.roundNumber,M.initialState&&N(M.initialState),M.replayActions&&($.current=M.replayActions);break;case"SPECTATE_STATE":a(M.state),i(M.room),l(null);break;case"ACTION_REJECTED":h(M.reason),setTimeout(()=>h(null),5e3);break;case"PLAYER_JOINED":case"PLAYER_LEFT":case"PLAYER_RECONNECTED":case"PLAYER_DISCONNECTED":break;case"ERROR":h(M.message),setTimeout(()=>h(null),5e3);break}},[]);j.useEffect(()=>{const M=new a1(e,E,u);return T.current=M,M.connect(),()=>{M.clearSession(),M.disconnect(),T.current=null}},[e,E]);const J=j.useCallback(M=>{var z;(z=T.current)==null||z.send({type:"GAME_ACTION",action:M})},[]),V=j.useCallback(M=>{var z;(z=T.current)==null||z.send({type:"LOBBY_ACTION",action:M})},[]),A=j.useCallback(M=>{var z;(z=T.current)==null||z.send(M)},[]),O=j.useCallback(M=>te(M),[]),K={state:t,room:r,localPlayerId:s,dispatch:J,sendLobbyAction:V,send:A,getCard:O,connectionStatus:d,plottingStatus:f,isOnline:!0,lastError:g,roomList:x,currentTurnPlayerId:_,turnDeadline:v,replayInitialState:I,replayActions:$.current};return o.jsx(rf.Provider,{value:K,children:n})}function Tc(){const e=j.useContext(rf);if(!e)throw new Error("useOnlineGame must be used within OnlineGameProvider");return e}function o1({children:e}){const{state:n,localPlayerId:t,dispatch:a,getCard:r,plottingStatus:i,send:s,currentTurnPlayerId:l,replayInitialState:d,replayActions:u}=Tc(),[f,m]=j.useState(!0),g=j.useRef(-1),h=j.useRef(null),x={player1:!1,player2:!1,player1Difficulty:"hard",player2Difficulty:"hard"},p=j.useCallback(I=>{if(I.type==="ADVANCE_TIMING"||I.type==="ADVANCE_PHASE"){s({type:"TIMING_DONE"});return}I.type==="START_PLOTTING"||I.type==="DRAW_CARDS"||a(I)},[a,s]),_=j.useCallback(()=>d?{initialState:d,actions:[...u]}:null,[d,u]);if(j.useEffect(()=>{if(!(!f||!n)){if(n.phase==="plotting"&&h.current!=="plotting"&&n.roundNumber!==g.current){g.current=n.roundNumber;try{jc("auto",n,x,!0)}catch{}}h.current=n.phase}},[f,n]),!n||!t)return null;let b=n;if(n.phase==="plotting"){const I=(i==null?void 0:i.confirmed.includes(t))??!1;b={...n,plottingStep:I?"complete":t}}const v={player1:t!=="player1",player2:t!=="player2",player1Difficulty:"easy",player2Difficulty:"easy",playerAI:Object.fromEntries(n.playerIds.map(I=>[I,I!==t])),playerDifficulty:Object.fromEntries(n.playerIds.map(I=>[I,"easy"]))},y={state:b,dispatch:p,rawDispatch:p,getCard:r,aiConfig:v,setAIConfig:()=>{},getReplayData:_,autoSaveEnabled:f,setAutoSaveEnabled:m,exposureMode:!1,setExposureMode:()=>{},isOnline:!0,localPlayerId:t,currentTurnPlayerId:l};return o.jsx(Pi.Provider,{value:y,children:e})}const i1={lobby:"等待中",playing:"游戏中",finished:"已结束"};function of({onBack:e,onCreateRoom:n,onJoinRoom:t,roomList:a,onRefreshRooms:r,onSpectate:i}){const[s,l]=j.useState("create"),[d,u]=j.useState(()=>localStorage.getItem("embryo-player-name")??""),[f,m]=j.useState(""),[g,h]=j.useState(""),[x,p]=j.useState(2),[_,b]=j.useState(2),[v,y]=j.useState(Ye[0].id);function I(M){const z=[];for(let R=2;R<=M;R++)M%R===0&&z.push(R);return z}function N(M){p(M);const z=I(M);z.includes(_)||b(z[0]);const R=Ye.find(D=>D.id===v);if(!R||R.maxPlayers<M){const D=Ye.find(F=>F.maxPlayers>=M);D&&y(D.id)}}const[T,k]=j.useState(""),[S,$]=j.useState(!1),[E,J]=j.useState(0);function V(){const M=d.trim()||`Player_${Math.random().toString(36).slice(2,6)}`;return localStorage.setItem("embryo-player-name",M),M}function A(){n(V(),{maxPlayers:x,teamCount:_,mapId:v,turnTimeoutSeconds:E,password:S?T:void 0})}function O(){const M=f.trim().toUpperCase();M&&t(M,V(),g||void 0)}function K(M,z){m(M),z?(l("join"),h("")):t(M,V())}return o.jsxs("div",{className:"ol-screen",children:[o.jsxs("div",{className:"ol-center",children:[o.jsx("h1",{className:"ol-title",children:"联机对战"}),o.jsx("p",{className:"ol-subtitle",children:"创建、加入或浏览房间"}),o.jsx("div",{className:"ol-divider"}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"昵称"}),o.jsx("input",{className:"ol-input",value:d,onChange:M=>u(M.target.value),placeholder:"输入昵称…",maxLength:16})]}),o.jsxs("div",{className:"ol-tabs",children:[o.jsx("button",{className:`ol-tab${s==="create"?" ol-tab--active":""}`,onClick:()=>l("create"),children:"创建房间"}),o.jsx("button",{className:`ol-tab${s==="join"?" ol-tab--active":""}`,onClick:()=>l("join"),children:"加入房间"}),o.jsx("button",{className:`ol-tab${s==="browse"?" ol-tab--active":""}`,onClick:()=>{l("browse"),r==null||r()},children:"浏览房间"})]}),s==="create"&&o.jsxs("div",{className:"ol-panel",children:[o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"最大玩家数"}),o.jsx("select",{className:"ol-select",value:x,onChange:M=>N(+M.target.value),children:[2,3,4,5,6,7,8].map(M=>o.jsxs("option",{value:M,children:[M," 人"]},M))})]}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"队伍数量"}),o.jsx("select",{className:"ol-select",value:_,onChange:M=>b(+M.target.value),children:I(x).map(M=>o.jsxs("option",{value:M,children:[M," 队 (",x/M,"人/队)"]},M))})]}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"地图"}),o.jsx("select",{className:"ol-select",value:v,onChange:M=>y(M.target.value),children:Ye.filter(M=>M.maxPlayers>=x).map(M=>o.jsxs("option",{value:M.id,children:[M.nameCn," (",M.maxPlayers,"人)"]},M.id))})]}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"回合限时"}),o.jsxs("select",{className:"ol-select",value:E,onChange:M=>J(+M.target.value),children:[o.jsx("option",{value:0,children:"无限制"}),o.jsx("option",{value:30,children:"30 秒"}),o.jsx("option",{value:60,children:"60 秒"}),o.jsx("option",{value:90,children:"90 秒"}),o.jsx("option",{value:120,children:"120 秒"})]})]}),o.jsxs("label",{className:"ol-check",onClick:()=>$(!S),children:[o.jsx("span",{className:`ol-check__box${S?" ol-check__box--on":""}`,children:S?"✓":""}),o.jsx("span",{children:"设置房间密码"})]}),S&&o.jsx("div",{className:"ol-field",children:o.jsx("input",{className:"ol-input",value:T,onChange:M=>k(M.target.value),placeholder:"输入密码…",maxLength:20,type:"password"})}),o.jsx("button",{className:"ol-btn ol-btn--primary",onClick:A,children:"创建房间"})]}),s==="join"&&o.jsxs("div",{className:"ol-panel",children:[o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"房间号"}),o.jsx("input",{className:"ol-input ol-input--code",value:f,onChange:M=>m(M.target.value.toUpperCase()),placeholder:"输入6位房间号",maxLength:6})]}),o.jsxs("div",{className:"ol-field",children:[o.jsx("label",{className:"ol-label",children:"密码（若有）"}),o.jsx("input",{className:"ol-input",value:g,onChange:M=>h(M.target.value),placeholder:"无密码可留空",maxLength:20,type:"password"})]}),o.jsx("button",{className:"ol-btn ol-btn--primary",onClick:O,disabled:f.trim().length<1,children:"加入房间"})]}),s==="browse"&&o.jsxs("div",{className:"ol-panel",children:[o.jsxs("div",{className:"ol-browse-header",children:[o.jsx("span",{className:"ol-label",children:"在线房间"}),o.jsx("button",{className:"ol-refresh-btn",onClick:r,children:"刷新"})]}),!a||a.length===0?o.jsx("div",{className:"ol-empty",children:"暂无房间，创建一个吧"}):o.jsx("div",{className:"ol-room-list",children:a.map(M=>o.jsxs("div",{className:"ol-room-row",children:[o.jsx("span",{className:"ol-room-row__code",children:M.roomCode}),o.jsx("span",{className:"ol-room-row__host",children:M.hostName}),o.jsx("span",{className:`ol-room-row__status ol-room-row__status--${M.status}`,children:i1[M.status]??M.status}),o.jsxs("span",{className:"ol-room-row__count",children:[M.playerCount,"/",M.maxPlayers]}),M.hasPassword&&o.jsx("span",{className:"ol-room-row__lock",title:"需要密码",children:"🔒"}),M.status==="lobby"?o.jsx("button",{className:"ol-room-row__join",onClick:()=>K(M.roomCode,M.hasPassword),children:"加入"}):o.jsx("button",{className:"ol-room-row__join",onClick:()=>i==null?void 0:i(M.roomCode),disabled:!i,children:"观战"})]},M.roomCode))})]}),o.jsx("button",{className:"ol-btn ol-btn--back",onClick:e,children:"返回主菜单"})]}),o.jsx("style",{children:s1})]})}const s1=`
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
`;function l1({room:e,localPlayerId:n,connectionStatus:t,lastError:a,send:r,onLeave:i}){var T;const[s,l]=j.useState(""),d=e.slots.find(k=>k.playerId===n),u=n!=null&&n===((T=e.slots[0])==null?void 0:T.playerId),f=(d==null?void 0:d.isReady)??!1,m=e.slots.filter(k=>k.type!=="empty"),g=m.length>=2&&m.every(k=>k.isReady),h=e.slots.filter(k=>k.type!=="empty"&&k.playerId!==n).map(k=>k.unitId),x=j.useState(!1);j.useEffect(()=>{if(x[0]||!n)return;if(d!=null&&d.unitId&&d.unitId!=="TR"){l(d.unitId),x[1](!0);return}const k=q.filter(S=>!h.includes(S.id));if(k.length>0){const S=k[Math.floor(Math.random()*k.length)];l(S.id),r({type:"LOBBY_ACTION",action:{type:"SELECT_UNIT",playerId:n,unitId:S.id}}),x[1](!0)}},[n]);function p(k){l(k),r({type:"LOBBY_ACTION",action:{type:"SELECT_UNIT",playerId:n,unitId:k}})}function _(){const k=q.filter($=>!h.includes($.id)&&$.id!==s);if(k.length===0)return;const S=k[Math.floor(Math.random()*k.length)];p(S.id)}function b(){r({type:f?"UNREADY":"READY"})}function v(){r({type:"START_GAME"})}function y(k,S){r({type:"SET_SLOT_TYPE",playerId:k,slotType:S})}function I(k){r({type:"KICK_PLAYER",playerId:k})}function N(){r({type:"LEAVE_ROOM"}),i()}return o.jsxs("div",{className:"rm-screen",children:[o.jsxs("div",{className:"rm-center",children:[o.jsxs("div",{className:"rm-header",children:[o.jsx("h2",{className:"rm-room-title",children:"房间"}),o.jsx("div",{className:"rm-room-code",children:e.roomCode}),e.hasPassword&&o.jsx("span",{className:"rm-lock",title:"有密码",children:"🔒"}),o.jsx("div",{className:"rm-room-status",children:t==="connected"?o.jsx("span",{className:"rm-status rm-status--ok",children:"已连接"}):o.jsx("span",{className:"rm-status rm-status--warn",children:t})})]}),a&&o.jsx("div",{className:"rm-error",children:a}),o.jsx("div",{className:"rm-slots",children:e.slots.map((k,S)=>o.jsx(c1,{slot:k,isLocal:k.playerId===n,isHost:u,onSetSlotType:y,onKick:I},S))}),o.jsxs("div",{className:"rm-section",children:[o.jsxs("div",{className:"rm-section-header",children:[o.jsx("div",{className:"rm-section-title",children:"选择机体"}),o.jsx("button",{className:"rm-random-btn",onClick:_,title:"随机选择机体",children:"🎲 随机"})]}),o.jsx("div",{className:"rm-unit-grid",children:q.map(k=>{const S=s||(d==null?void 0:d.unitId),$=h.includes(k.id),E=S===k.id;return o.jsxs("button",{className:`rm-unit-btn${E?" rm-unit-btn--selected":""}${$?" rm-unit-btn--taken":""}`,onClick:()=>!$&&p(k.id),disabled:$,title:`${k.nameCn} (${k.nameJa}) - MOV:${k.movement} EVA:${k.evasion} ASL:${k.assault} INIT:${k.initiative}`,children:[o.jsx("span",{className:"rm-unit-code",children:k.id}),o.jsx("span",{className:"rm-unit-name",children:k.nameCn})]},k.id)})})]}),o.jsxs("div",{className:"rm-actions",children:[o.jsx("button",{className:`rm-btn${f?" rm-btn--unready":" rm-btn--ready"}`,onClick:b,children:f?"取消准备":"准备"}),u&&o.jsx("button",{className:"rm-btn rm-btn--start",onClick:v,disabled:!g,title:g?"开始游戏":"等待所有玩家准备",children:"开始游戏"}),o.jsx("button",{className:"rm-btn rm-btn--leave",onClick:N,children:"离开房间"})]})]}),o.jsx("style",{children:d1})]})}function c1({slot:e,isLocal:n,isHost:t,onSetSlotType:a,onKick:r}){const i=q.find(l=>l.id===e.unitId);if(e.type==="empty")return o.jsxs("div",{className:"rm-slot rm-slot--empty",children:[o.jsxs("span",{className:"rm-slot__index",children:["#",e.index+1]}),o.jsx("span",{className:"rm-slot__name",children:"空位"}),t&&o.jsx("button",{className:"rm-slot__toggle",onClick:()=>a(e.playerId,"ai"),children:"+AI"})]});const s=Tn[e.team%Tn.length][0];return o.jsxs("div",{className:`rm-slot${n?" rm-slot--local":""}${e.isConnected?"":" rm-slot--dc"}`,children:[o.jsx("span",{className:"rm-slot__color-dot",style:{background:s},title:`队伍 ${e.team+1}`}),o.jsxs("span",{className:"rm-slot__index",children:["#",e.index+1]}),o.jsx("span",{className:"rm-slot__type-badge",children:e.type==="ai"?"AI":""}),o.jsxs("span",{className:"rm-slot__name",children:[e.playerName||e.playerId,n&&" (你)"]}),o.jsx("span",{className:"rm-slot__unit",children:i?i.nameCn:e.unitId||"未选择"}),o.jsx("span",{className:`rm-slot__ready${e.isReady?" rm-slot__ready--yes":""}`,children:e.isReady?"已准备":"未准备"}),!e.isConnected&&o.jsx("span",{className:"rm-slot__dc",children:"断线"}),t&&e.type==="ai"&&o.jsx("button",{className:"rm-slot__toggle",onClick:()=>a(e.playerId,"empty"),children:"移除"}),t&&!n&&e.type==="human"&&r&&o.jsx("button",{className:"rm-slot__toggle rm-slot__toggle--kick",onClick:()=>r(e.playerId),children:"踢出"})]})}const d1=`
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
`;function u1(){return"wss://embryo-machine.onrender.com/"}const p1=u1();function m1({onBack:e}){const[n]=j.useState(p1),[t,a]=j.useState("lobby"),[r,i]=j.useState(null),s=j.useCallback((m,g)=>{i({type:"create",playerName:m,settings:g}),a("connected")},[]),l=j.useCallback((m,g,h)=>{i({type:"join",roomCode:m,playerName:g,password:h}),a("connected")},[]),d=j.useCallback(m=>{i({type:"spectate",roomCode:m}),a("connected")},[]),u=j.useCallback(()=>{t!=="connected"&&(i({type:"browse"}),a("connected"))},[t]),f=j.useCallback(()=>{i(null),a("lobby")},[]);return t==="lobby"?o.jsx(of,{onBack:e,onCreateRoom:s,onJoinRoom:l,onRefreshRooms:u,onSpectate:d}):o.jsx(r1,{serverUrl:n,children:o.jsx(f1,{pendingAction:r,onBack:e,onDisconnect:f})})}function f1({pendingAction:e,onDisconnect:n}){const{state:t,room:a,localPlayerId:r,send:i,connectionStatus:s,lastError:l,roomList:d}=Tc(),[u,f]=j.useState(!1);return!u&&s==="connected"&&e&&(e.type==="create"?i({type:"CREATE_ROOM",playerName:e.playerName,settings:e.settings}):e.type==="join"?i({type:"JOIN_ROOM",roomCode:e.roomCode,playerName:e.playerName,password:e.password}):e.type==="spectate"?i({type:"SPECTATE_ROOM",roomCode:e.roomCode}):e.type==="browse"&&i({type:"LIST_ROOMS"}),f(!0)),(e==null?void 0:e.type)==="browse"&&!a&&!t?o.jsx(of,{onBack:n,onCreateRoom:(m,g)=>{i({type:"CREATE_ROOM",playerName:m,settings:g})},onJoinRoom:(m,g,h)=>{i({type:"JOIN_ROOM",roomCode:m,playerName:g,password:h})},roomList:d,onRefreshRooms:()=>i({type:"LIST_ROOMS"})}):s==="connecting"?o.jsxs("div",{className:"og-connecting",children:[o.jsx("div",{className:"og-spinner"}),o.jsx("p",{children:"正在连接服务器…"}),o.jsx("button",{className:"ol-btn ol-btn--back",onClick:n,children:"取消"}),o.jsx("style",{children:wr})]}):a&&!t?o.jsx(l1,{room:a,localPlayerId:r,connectionStatus:s,lastError:l,send:i,onLeave:n}):t&&r?o.jsx(Ei,{children:o.jsx(o1,{children:o.jsx(g1,{})})}):t&&!r?o.jsx(h1,{state:t,room:a,onLeave:n}):o.jsxs("div",{className:"og-connecting",children:[o.jsx("div",{className:"og-spinner"}),o.jsx("p",{children:"等待服务器响应…"}),l&&o.jsx("div",{className:"rm-error",children:l}),o.jsx("button",{className:"ol-btn ol-btn--back",onClick:n,children:"返回"}),o.jsx("style",{children:wr})]})}function g1(){const e=Vr(),{dispatch:n,aiConfig:t}=Ce(),{localPlayerId:a,connectionStatus:r,plottingStatus:i,lastError:s,turnDeadline:l}=Tc(),[d,u]=j.useState(null);j.useEffect(()=>{if(!l){u(null);return}const k=()=>{const $=Math.max(0,Math.ceil((l-Date.now())/1e3));u($)};k();const S=setInterval(k,500);return()=>clearInterval(S)},[l]),j.useEffect(()=>{e.phase==="pregame"&&n({type:"START_PLOTTING"})},[e.phase,n]);const[f,m]=j.useState([{id:"map",zIndex:10},{id:"log",zIndex:11},{id:"mecha",zIndex:12},{id:"plot",zIndex:100}]),g=j.useCallback(k=>{m(S=>{const $=Math.max(...S.map(K=>K.zIndex)),E=S.find(K=>K.id===k);if(E&&E.zIndex===$)return S;const J=[...S].sort((K,M)=>K.zIndex-M.zIndex),V=10,A=new Map;let O=0;for(const K of J)K.id!==k&&A.set(K.id,V+O++);return A.set(k,V+J.length-1),S.map(K=>({...K,zIndex:A.get(K.id)??K.zIndex}))})},[]),h=k=>{var S;return((S=f.find($=>$.id===k))==null?void 0:S.zIndex)??10},x=j.useCallback(k=>[],[]),p=Ri(),_=p?window.innerWidth:Math.max(400,Math.min(window.innerWidth*.6,620)),b=300,v=window.innerWidth-b-16,y=p?window.innerWidth:380,I=window.innerWidth-y-16,N=e.phase==="plotting"&&e.plottingStep!=="complete"&&e.plottingStep!==null&&!e.plottingStep.startsWith("transition_to_")&&!Ae(t,e.plottingStep),T=o.jsxs("div",{className:"og-status-bar",children:[o.jsxs("span",{className:"og-round",children:["第 ",e.roundNumber," 回合"]}),o.jsx("span",{className:"og-phase",children:sf(e.phase)}),e.currentTiming&&o.jsxs("span",{className:"og-timing",children:["▶ ",lf(e.currentTiming)]}),!p&&e.turnOrder.length>0&&o.jsxs("span",{className:"og-debug-info",title:"当前行动顺序",children:["[",e.turnOrder.map(k=>k.replace("player","P")).join("→"),"]"]}),d!==null&&d>0&&o.jsxs("span",{className:`og-countdown${d<=10?" og-countdown--warn":""}`,children:["⏱ ",d,"s"]}),o.jsx("span",{style:{flex:1}}),i&&e.phase==="plotting"&&o.jsxs("span",{className:"og-plotting",children:["布局进度: ",i.confirmed.length,"/",i.total]}),!p&&o.jsx("button",{className:"og-export-btn",onClick:()=>af(e,{localPlayerId:a??void 0,connectionStatus:r}),title:"导出全量日志（含调试状态快照）",children:"📋 导出日志"}),o.jsx("span",{className:`og-conn og-conn--${r}`,children:r==="connected"?"在线":r}),a&&o.jsx("span",{className:"og-pid",children:a.replace("player","P")})]});return p?o.jsxs("div",{className:"game-screen game-screen--mobile",children:[T,s&&o.jsx("div",{className:"rm-error",style:{margin:"4px 12px 0"},children:s}),o.jsx("div",{className:"game-screen__board-mobile",children:o.jsx(wa,{})}),o.jsxs("div",{className:"game-screen__panels-mobile",children:[N&&o.jsx(we,{id:"plot",title:"布局阶段",initialPos:{x:0,y:0},width:y,children:o.jsx(la,{})}),o.jsx(we,{id:"mecha",title:"机体信息",initialPos:{x:0,y:0},defaultMinimized:!0,children:o.jsx(li,{})}),o.jsx(we,{id:"log",title:"行动日志",initialPos:{x:0,y:0},defaultMinimized:!0,children:o.jsx(Sr,{})})]}),o.jsx(oi,{}),o.jsx(ii,{}),o.jsx("style",{children:wr})]}):o.jsxs("div",{className:"game-screen",style:{position:"relative",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[T,s&&o.jsx("div",{className:"rm-error",style:{margin:"4px 16px 0"},children:s}),o.jsxs("div",{style:{position:"relative",flex:1},children:[o.jsx(we,{id:"map",title:"地图",initialPos:{x:16,y:8},width:_,minHeight:300,zIndex:h("map"),onFocus:g,siblingRects:x("map"),children:o.jsx("div",{style:{height:"calc(100vh - 100px)",minHeight:300},children:o.jsx(wa,{})})}),o.jsx(we,{id:"log",title:"行动日志",initialPos:{x:v,y:8},width:b,height:260,minHeight:120,zIndex:h("log"),onFocus:g,siblingRects:x("log"),children:o.jsx(Sr,{})}),o.jsx(we,{id:"mecha",title:"机体信息",initialPos:{x:v,y:280},width:b,minHeight:160,zIndex:h("mecha"),onFocus:g,siblingRects:x("mecha"),children:o.jsx(li,{})}),N&&o.jsx(we,{id:"plot",title:"布局阶段",initialPos:{x:I,y:8},width:y,height:620,minHeight:80,zIndex:h("plot"),onFocus:g,siblingRects:x("plot"),children:o.jsx(la,{})})]}),o.jsx(oi,{}),o.jsx(ii,{}),o.jsx("style",{children:wr})]})}function h1({state:e,room:n,onLeave:t}){const a={player1:!0,player2:!0,player1Difficulty:"easy",player2Difficulty:"easy",playerAI:Object.fromEntries(e.playerIds.map(s=>[s,!0])),playerDifficulty:Object.fromEntries(e.playerIds.map(s=>[s,"easy"]))},r=()=>{},i={state:e,dispatch:r,rawDispatch:r,getCard:s=>te(s),aiConfig:a,setAIConfig:()=>{},getReplayData:()=>null,autoSaveEnabled:!1,setAutoSaveEnabled:()=>{},exposureMode:!1,setExposureMode:()=>{},isOnline:!0,localPlayerId:null,currentTurnPlayerId:null};return o.jsx(Pi.Provider,{value:i,children:o.jsx(Ei,{children:o.jsxs("div",{className:"game-screen",style:{position:"relative",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[o.jsxs("div",{className:"og-status-bar",children:[o.jsx("span",{className:"og-spectate-badge",children:"观战中"}),o.jsxs("span",{className:"og-round",children:["第 ",e.roundNumber," 回合"]}),o.jsx("span",{className:"og-phase",children:sf(e.phase)}),e.currentTiming&&o.jsxs("span",{className:"og-timing",children:["▶ ",lf(e.currentTiming)]}),o.jsx("span",{style:{flex:1}}),n&&o.jsx("span",{className:"og-room-code-badge",children:n.roomCode}),o.jsx("button",{className:"rm-btn rm-btn--leave",onClick:t,children:"离开"})]}),o.jsxs("div",{style:{position:"relative",flex:1},children:[o.jsx(we,{id:"map",title:"地图",initialPos:{x:16,y:8},width:Math.max(400,Math.min(window.innerWidth*.7,700)),minHeight:300,children:o.jsx("div",{style:{height:"calc(100vh - 100px)",minHeight:300},children:o.jsx(wa,{})})}),o.jsx(we,{id:"log",title:"行动日志",initialPos:{x:window.innerWidth-316,y:8},width:300,height:400,minHeight:120,children:o.jsx(Sr,{})})]}),o.jsx("style",{children:wr})]})})})}function sf(e){return{pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"主要阶段 1",action_seg2:"主要阶段 2",cleanup:"清理阶段",game_over:"游戏结束"}[e]??e}function lf(e){return{movement:"移动",ranged:"射击",melee:"近战",special:"特殊"}[e]??e}const wr=`
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
`;function x1(){const e=Vr(),{rawDispatch:n,aiConfig:t,setAIConfig:a,getReplayData:r,autoSaveEnabled:i,setAutoSaveEnabled:s,exposureMode:l,setExposureMode:d}=Ce(),[u,f]=j.useState("home"),[m,g]=j.useState("map"),[h,x]=j.useState(!0),[p,_]=j.useState(2),[b,v]=j.useState(2),[y,I]=j.useState(null),[N,T]=j.useState({loaded:0,total:0}),k=j.useRef(null),S=j.useCallback(()=>{fe.init(),g("map"),f("game")},[]),$=j.useCallback(()=>{const A=Gm().length;T({loaded:0,total:A}),I("asking")},[]),E=j.useCallback(()=>{I("loading");const A=new AbortController;k.current=A,xv((O,K)=>{T({loaded:O,total:K}),O>=K&&setTimeout(()=>I(null),600)},A.signal)},[]),J=j.useCallback(()=>{var A;(A=k.current)==null||A.abort(),I(null)},[]);function V(A){n({type:"LOAD_GAME",state:A.gameState}),a(A.aiConfig),f("game")}return u==="rules"?o.jsx(cb,{onBack:()=>f((e.phase==="setup","game"))}):u==="data"?o.jsx(ub,{onBack:()=>f("game")}):u==="load"?o.jsx(du,{mode:"load",onBack:()=>f("home"),onLoad:V}):u==="replay"?o.jsx(Nb,{onBack:()=>f("home")}):u==="save"?o.jsx(du,{mode:"save",onBack:()=>f("game"),currentState:e,aiConfig:t}):u==="mapEditor"?o.jsx(Hb,{onBack:()=>f("home")}):u==="online"?o.jsx(m1,{onBack:()=>f("home")}):u==="settings"?o.jsxs(o.Fragment,{children:[y!==null&&o.jsx(dv,{phase:y,loaded:N.loaded,total:N.total,onConfirm:E,onSkip:J}),o.jsx(lv,{onBack:()=>f("home"),soundEnabled:fe.enabled,onToggleSound:()=>{fe.enabled=!fe.enabled,T(A=>({...A}))},soundVolume:fe.volume,onVolumeChange:A=>{fe.volume=A,fe.init(),fe.uiBlip(),T(O=>({...O}))},exposureMode:l,onToggleExposure:()=>d(!l),autoFill:h,onToggleAutoFill:()=>x(!h),onCacheAssets:$})]}):u==="home"?o.jsx(iv,{onStart:S,onOnlinePlay:()=>{fe.init(),f("online")},onViewRules:()=>f("rules"),onViewData:()=>f("data"),onLoadGame:()=>f("load"),onReplay:()=>f("replay"),onMapEditor:()=>f("mapEditor"),onSettings:()=>f("settings")}):e.phase==="setup"?m==="map"?o.jsx(Wx,{onNext:()=>g("units"),onBack:()=>f("home"),playerCount:p,setPlayerCount:_,teamCount:b,setTeamCount:v}):m==="units"?o.jsx(Xx,{onNext:()=>g("spawn"),onBack:()=>g("map"),autoFill:h}):o.jsx(rv,{onBack:()=>g("units")}):e.phase==="game_over"?o.jsx(y1,{onHome:()=>{f("home"),g("map")},onSaveReplay:()=>{const A=r();if(!A)return;const O=e.players.player1.isDefeated,K=e.players.player2.isDefeated,M=O&&K?"draw":O?"player2":K?"player1":null;try{Px(A.initialState,A.actions,M),alert("录像已保存！")}catch{alert("保存失败，存储空间可能不足。")}}}):o.jsx(v1,{onSave:()=>f("save"),autoSaveEnabled:i,onToggleAutoSave:()=>s(!i)})}function v1({onSave:e,autoSaveEnabled:n,onToggleAutoSave:t}){const a=Vr(),{dispatch:r,exposureMode:i,getCard:s,aiConfig:l}=Ce();j.useEffect(()=>{a.phase==="pregame"&&r({type:"START_PLOTTING"})},[a.phase,r]);const d=j.useRef(a.phase);j.useEffect(()=>{const T=d.current;if(d.current=a.phase,!!i&&T==="plotting"&&a.phase==="action_seg1"){const k=S=>{if(!S)return"无";const $=s(S.defId);return $?$.nameCn:S.defId};for(const S of a.playerIds){const $=a.players[S];if($.isDefeated)continue;const E=`P${S.replace("player","")}`;r({type:"ADD_LOG",message:`[暴露] ${E} 布局: 段1=${k($.plotSeg1)} / 段2=${k($.plotSeg2)}`})}}},[a.phase]);const[u,f]=j.useState([{id:"map",zIndex:10},{id:"log",zIndex:11},{id:"mecha",zIndex:12},{id:"plot",zIndex:100}]),m=j.useRef(new Map),g=j.useCallback(T=>{f(k=>{const S=Math.max(...k.map(O=>O.zIndex)),$=k.find(O=>O.id===T);if($&&$.zIndex===S)return k;const E=[...k].sort((O,K)=>O.zIndex-K.zIndex),J=10,V=new Map;let A=0;for(const O of E)O.id!==T&&V.set(O.id,J+A++);return V.set(T,J+E.length-1),k.map(O=>({...O,zIndex:V.get(O.id)??O.zIndex}))})},[]),h=T=>{var k;return((k=u.find(S=>S.id===T))==null?void 0:k.zIndex)??10},x=j.useCallback(T=>{const k=[];return m.current.forEach((S,$)=>{$!==T&&S&&k.push(S.getBoundingClientRect())}),k},[]),p=Ri(),_=p?window.innerWidth:Math.max(400,Math.min(window.innerWidth*.6,620)),b=300,v=window.innerWidth-b-16,y=36,I=p?window.innerWidth:380,N=window.innerWidth-I-16;if(p){const T=a.phase==="plotting"&&a.plottingStep!=="complete"&&a.plottingStep!==null&&!a.plottingStep.startsWith("transition_to_")&&!Ae(l,a.plottingStep),k=a.phase==="plotting"&&a.plottingStep!=="complete"&&a.plottingStep!==null&&!a.plottingStep.startsWith("transition_to_")&&Ae(l,a.plottingStep);return o.jsxs("div",{className:"game-screen game-screen--mobile",children:[o.jsx("div",{className:"game-screen__header",style:{flexShrink:0},children:o.jsx(bu,{onSave:e,autoSaveEnabled:n,onToggleAutoSave:t})}),o.jsxs("div",{className:"game-screen__board-mobile",children:[o.jsx(wa,{}),o.jsx(yu,{})]}),o.jsxs("div",{className:"game-screen__panels-mobile",children:[T&&o.jsx(we,{id:"plot",title:"布局阶段",initialPos:{x:0,y:0},width:I,children:o.jsx(la,{})}),k&&o.jsx("div",{style:{width:0,height:0,overflow:"hidden",opacity:0,pointerEvents:"none"},children:o.jsx(la,{})}),o.jsx(we,{id:"mecha",title:"机体信息",initialPos:{x:0,y:0},defaultMinimized:!0,children:o.jsx(li,{})}),o.jsx(we,{id:"log",title:"行动日志",initialPos:{x:0,y:0},defaultMinimized:!0,children:o.jsx(Sr,{})})]}),o.jsx(oi,{}),o.jsx(ii,{}),o.jsx("style",{children:_u})]})}return o.jsxs("div",{className:"game-screen",style:{position:"relative",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[o.jsx("div",{className:"game-screen__header",style:{flexShrink:0},children:o.jsx(bu,{onSave:e,autoSaveEnabled:n,onToggleAutoSave:t})}),o.jsxs("div",{style:{position:"relative",flex:1},children:[o.jsx(we,{id:"map",title:"地图",initialPos:{x:16,y:8},width:_,minHeight:300,zIndex:h("map"),onFocus:g,siblingRects:x("map"),children:o.jsx("div",{style:{height:`calc(100vh - ${y+60}px)`,minHeight:300},children:o.jsx(wa,{})})}),o.jsx(we,{id:"log",title:"行动日志",initialPos:{x:v,y:8},width:b,height:260,minHeight:120,zIndex:h("log"),onFocus:g,siblingRects:x("log"),children:o.jsx(Sr,{})}),o.jsx(we,{id:"mecha",title:"机体信息",initialPos:{x:v,y:280},width:b,minHeight:160,zIndex:h("mecha"),onFocus:g,siblingRects:x("mecha"),children:o.jsx(li,{})}),a.phase==="plotting"&&a.plottingStep!=="complete"&&a.plottingStep!==null&&!a.plottingStep.startsWith("transition_to_")&&!Ae(l,a.plottingStep)&&o.jsx(we,{id:"plot",title:"布局阶段",initialPos:{x:N,y:8},width:I,height:620,minHeight:80,zIndex:h("plot"),onFocus:g,siblingRects:x("plot"),children:o.jsx(la,{})}),a.phase==="plotting"&&a.plottingStep!=="complete"&&a.plottingStep!==null&&!a.plottingStep.startsWith("transition_to_")&&Ae(l,a.plottingStep)&&o.jsx("div",{style:{position:"absolute",width:0,height:0,overflow:"hidden",opacity:0,pointerEvents:"none"},children:o.jsx(la,{})})]}),o.jsx(oi,{}),o.jsx(ii,{}),o.jsx(yu,{}),o.jsx("style",{children:_u})]})}function bu({onSave:e,autoSaveEnabled:n,onToggleAutoSave:t}){const a=Vr(),r={pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"行动阶段 [主要阶段 1]",action_seg2:"行动阶段 [主要阶段 2]",cleanup:"清理阶段",game_over:"游戏结束"},i={movement:"移动",ranged:"射击",melee:"近战",special:"特殊"};return o.jsxs("div",{className:"phase-bar",children:[o.jsxs("span",{className:"phase-bar__round",children:["第 ",a.roundNumber," 回合"]}),o.jsx("span",{className:"phase-bar__phase",children:r[a.phase]??a.phase}),a.currentTiming&&o.jsxs("span",{className:"phase-bar__timing",children:["▶ ",i[a.currentTiming]??a.currentTiming]}),o.jsx("span",{style:{flex:1}}),o.jsx("button",{className:"phase-bar__autosave-btn",onClick:t,title:n?"自动存档已开启（点击关闭）":"自动存档已关闭（点击开启）",children:n?"💾 自动":"💾 关"}),o.jsx("button",{className:"phase-bar__save-btn",onClick:e,title:"保存游戏",children:"💾 保存"}),o.jsx("button",{className:"phase-bar__save-btn",onClick:()=>af(a),title:"导出全量日志（含调试状态快照）",children:"📋 日志"})]})}function b1(e){return e.startsWith("[DBG]")?"log-panel__entry log-panel__entry--debug":e.startsWith("===")?"log-panel__entry log-panel__entry--round-start":e.startsWith("---")?"log-panel__entry log-panel__entry--round-end":e.includes("发动")||e.includes("攻击")?"log-panel__entry log-panel__entry--attack":e.includes("摧毁")||e.includes("连锁")||e.includes("诱爆")?"log-panel__entry log-panel__entry--damage":e.includes("移动到")?"log-panel__entry log-panel__entry--move":e.includes("获胜")||e.includes("击破")||e.includes("平局")?"log-panel__entry log-panel__entry--victory":"log-panel__entry"}function Sr(){const e=Vr();return o.jsx("div",{className:"log-panel",children:o.jsx("div",{className:"log-panel__entries",children:[...e.log].filter(n=>!n.startsWith("[DBG]")).reverse().map((n,t)=>o.jsx("div",{className:b1(n),children:n},t))})})}function y1({onHome:e,onSaveReplay:n}){const{state:t,dispatch:a,isOnline:r}=Ce(),i=t.log[t.log.length-1]??"游戏结束",s=t.players.player1.isDefeated,l=t.players.player2.isDefeated,d=s&&l?"双方同时击破":s?"玩家 2 获胜":"玩家 1 获胜";function u(){a({type:"RESET_GAME"}),e()}return o.jsxs("div",{className:"gameover-screen",children:[o.jsx("div",{className:"gameover-icon",children:"💥"}),o.jsx("h1",{className:"gameover-title",children:d}),o.jsx("p",{className:"gameover-sub",children:i}),o.jsxs("div",{className:"gameover-actions",children:[o.jsx("button",{className:"gameover-restart",onClick:u,children:"返回主菜单"}),!r&&o.jsx("button",{className:"gameover-save-replay",onClick:n,children:"🎬 保存录像"})]}),o.jsx("style",{children:I1})]})}function yu(){const{isAnimating:e,skipAnimation:n}=Ar();return e?o.jsx("button",{className:"skip-anim-btn",onClick:n,children:"⏩ 跳过"}):null}function _1(){return o.jsx(Ei,{children:o.jsx(Fm,{children:o.jsx(x1,{})})})}const _u=`
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
`,I1=`
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
`;xs.createRoot(document.getElementById("root")).render(o.jsx(Nf.StrictMode,{children:o.jsx(_1,{})}));

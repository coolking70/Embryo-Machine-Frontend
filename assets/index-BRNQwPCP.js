var ff=Object.defineProperty;var gf=(e,n,t)=>n in e?ff(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var en=(e,n,t)=>gf(e,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=t(o);fetch(o.href,s)}})();function hf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ju={exports:{}},ms={},wu={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mr=Symbol.for("react.element"),xf=Symbol.for("react.portal"),bf=Symbol.for("react.fragment"),vf=Symbol.for("react.strict_mode"),yf=Symbol.for("react.profiler"),_f=Symbol.for("react.provider"),If=Symbol.for("react.context"),kf=Symbol.for("react.forward_ref"),jf=Symbol.for("react.suspense"),wf=Symbol.for("react.memo"),Sf=Symbol.for("react.lazy"),Dc=Symbol.iterator;function Cf(e){return e===null||typeof e!="object"?null:(e=Dc&&e[Dc]||e["@@iterator"],typeof e=="function"?e:null)}var Su={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cu=Object.assign,Nu={};function Na(e,n,t){this.props=e,this.context=n,this.refs=Nu,this.updater=t||Su}Na.prototype.isReactComponent={};Na.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Na.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tu(){}Tu.prototype=Na.prototype;function jl(e,n,t){this.props=e,this.context=n,this.refs=Nu,this.updater=t||Su}var wl=jl.prototype=new Tu;wl.constructor=jl;Cu(wl,Na.prototype);wl.isPureReactComponent=!0;var $c=Array.isArray,Mu=Object.prototype.hasOwnProperty,Sl={current:null},Eu={key:!0,ref:!0,__self:!0,__source:!0};function Du(e,n,t){var a,o={},s=null,i=null;if(n!=null)for(a in n.ref!==void 0&&(i=n.ref),n.key!==void 0&&(s=""+n.key),n)Mu.call(n,a)&&!Eu.hasOwnProperty(a)&&(o[a]=n[a]);var l=arguments.length-2;if(l===1)o.children=t;else if(1<l){for(var d=Array(l),u=0;u<l;u++)d[u]=arguments[u+2];o.children=d}if(e&&e.defaultProps)for(a in l=e.defaultProps,l)o[a]===void 0&&(o[a]=l[a]);return{$$typeof:Mr,type:e,key:s,ref:i,props:o,_owner:Sl.current}}function Nf(e,n){return{$$typeof:Mr,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Cl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mr}function Tf(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Ac=/\/+/g;function Js(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Tf(""+e.key):n.toString(36)}function co(e,n,t,a,o){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Mr:case xf:i=!0}}if(i)return i=e,o=o(i),e=a===""?"."+Js(i,0):a,$c(o)?(t="",e!=null&&(t=e.replace(Ac,"$&/")+"/"),co(o,n,t,"",function(u){return u})):o!=null&&(Cl(o)&&(o=Nf(o,t+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Ac,"$&/")+"/")+e)),n.push(o)),1;if(i=0,a=a===""?".":a+":",$c(e))for(var l=0;l<e.length;l++){s=e[l];var d=a+Js(s,l);i+=co(s,n,t,d,o)}else if(d=Cf(e),typeof d=="function")for(e=d.call(e),l=0;!(s=e.next()).done;)s=s.value,d=a+Js(s,l++),i+=co(s,n,t,d,o);else if(s==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return i}function Lr(e,n,t){if(e==null)return e;var a=[],o=0;return co(e,a,"","",function(s){return n.call(t,s,o++)}),a}function Mf(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var He={current:null},uo={transition:null},Ef={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:uo,ReactCurrentOwner:Sl};function $u(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:Lr,forEach:function(e,n,t){Lr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Lr(e,function(){n++}),n},toArray:function(e){return Lr(e,function(n){return n})||[]},only:function(e){if(!Cl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ae.Component=Na;ae.Fragment=bf;ae.Profiler=yf;ae.PureComponent=jl;ae.StrictMode=vf;ae.Suspense=jf;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ef;ae.act=$u;ae.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=Cu({},e.props),o=e.key,s=e.ref,i=e._owner;if(n!=null){if(n.ref!==void 0&&(s=n.ref,i=Sl.current),n.key!==void 0&&(o=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in n)Mu.call(n,d)&&!Eu.hasOwnProperty(d)&&(a[d]=n[d]===void 0&&l!==void 0?l[d]:n[d])}var d=arguments.length-2;if(d===1)a.children=t;else if(1<d){l=Array(d);for(var u=0;u<d;u++)l[u]=arguments[u+2];a.children=l}return{$$typeof:Mr,type:e.type,key:o,ref:s,props:a,_owner:i}};ae.createContext=function(e){return e={$$typeof:If,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_f,_context:e},e.Consumer=e};ae.createElement=Du;ae.createFactory=function(e){var n=Du.bind(null,e);return n.type=e,n};ae.createRef=function(){return{current:null}};ae.forwardRef=function(e){return{$$typeof:kf,render:e}};ae.isValidElement=Cl;ae.lazy=function(e){return{$$typeof:Sf,_payload:{_status:-1,_result:e},_init:Mf}};ae.memo=function(e,n){return{$$typeof:wf,type:e,compare:n===void 0?null:n}};ae.startTransition=function(e){var n=uo.transition;uo.transition={};try{e()}finally{uo.transition=n}};ae.unstable_act=$u;ae.useCallback=function(e,n){return He.current.useCallback(e,n)};ae.useContext=function(e){return He.current.useContext(e)};ae.useDebugValue=function(){};ae.useDeferredValue=function(e){return He.current.useDeferredValue(e)};ae.useEffect=function(e,n){return He.current.useEffect(e,n)};ae.useId=function(){return He.current.useId()};ae.useImperativeHandle=function(e,n,t){return He.current.useImperativeHandle(e,n,t)};ae.useInsertionEffect=function(e,n){return He.current.useInsertionEffect(e,n)};ae.useLayoutEffect=function(e,n){return He.current.useLayoutEffect(e,n)};ae.useMemo=function(e,n){return He.current.useMemo(e,n)};ae.useReducer=function(e,n,t){return He.current.useReducer(e,n,t)};ae.useRef=function(e){return He.current.useRef(e)};ae.useState=function(e){return He.current.useState(e)};ae.useSyncExternalStore=function(e,n,t){return He.current.useSyncExternalStore(e,n,t)};ae.useTransition=function(){return He.current.useTransition()};ae.version="18.3.1";wu.exports=ae;var I=wu.exports;const Df=hf(I);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $f=I,Af=Symbol.for("react.element"),zf=Symbol.for("react.fragment"),Pf=Object.prototype.hasOwnProperty,Vf=$f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rf={key:!0,ref:!0,__self:!0,__source:!0};function Au(e,n,t){var a,o={},s=null,i=null;t!==void 0&&(s=""+t),n.key!==void 0&&(s=""+n.key),n.ref!==void 0&&(i=n.ref);for(a in n)Pf.call(n,a)&&!Rf.hasOwnProperty(a)&&(o[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps,n)o[a]===void 0&&(o[a]=n[a]);return{$$typeof:Af,type:e,key:s,ref:i,props:o,_owner:Vf.current}}ms.Fragment=zf;ms.jsx=Au;ms.jsxs=Au;ju.exports=ms;var r=ju.exports,yi={},zu={exports:{}},ln={},Pu={exports:{}},Vu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(k,$){var J=k.length;k.push($);e:for(;0<J;){var P=J-1>>>1,B=k[P];if(0<o(B,$))k[P]=$,k[J]=B,J=P;else break e}}function t(k){return k.length===0?null:k[0]}function a(k){if(k.length===0)return null;var $=k[0],J=k.pop();if(J!==$){k[0]=J;e:for(var P=0,B=k.length,F=B>>>1;P<F;){var X=2*(P+1)-1,Q=k[X],se=X+1,le=k[se];if(0>o(Q,J))se<B&&0>o(le,Q)?(k[P]=le,k[se]=J,P=se):(k[P]=Q,k[X]=J,P=X);else if(se<B&&0>o(le,J))k[P]=le,k[se]=J,P=se;else break e}}return $}function o(k,$){var J=k.sortIndex-$.sortIndex;return J!==0?J:k.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var d=[],u=[],f=1,m=null,g=3,h=!1,x=!1,p=!1,_=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(k){for(var $=t(u);$!==null;){if($.callback===null)a(u);else if($.startTime<=k)a(u),$.sortIndex=$.expirationTime,n(d,$);else break;$=t(u)}}function j(k){if(p=!1,v(k),!x)if(t(d)!==null)x=!0,W(C);else{var $=t(u);$!==null&&V(j,$.startTime-k)}}function C(k,$){x=!1,p&&(p=!1,y(E),E=-1),h=!0;var J=g;try{for(v($),m=t(d);m!==null&&(!(m.expirationTime>$)||k&&!R());){var P=m.callback;if(typeof P=="function"){m.callback=null,g=m.priorityLevel;var B=P(m.expirationTime<=$);$=e.unstable_now(),typeof B=="function"?m.callback=B:m===t(d)&&a(d),v($)}else a(d);m=t(d)}if(m!==null)var F=!0;else{var X=t(u);X!==null&&V(j,X.startTime-$),F=!1}return F}finally{m=null,g=J,h=!1}}var M=!1,S=null,E=-1,z=5,N=-1;function R(){return!(e.unstable_now()-N<z)}function D(){if(S!==null){var k=e.unstable_now();N=k;var $=!0;try{$=S(!0,k)}finally{$?K():(M=!1,S=null)}}else M=!1}var K;if(typeof b=="function")K=function(){b(D)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,L=A.port2;A.port1.onmessage=D,K=function(){L.postMessage(null)}}else K=function(){_(D,0)};function W(k){S=k,M||(M=!0,K())}function V(k,$){E=_(function(){k(e.unstable_now())},$)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){x||h||(x=!0,W(C))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return t(d)},e.unstable_next=function(k){switch(g){case 1:case 2:case 3:var $=3;break;default:$=g}var J=g;g=$;try{return k()}finally{g=J}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,$){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var J=g;g=k;try{return $()}finally{g=J}},e.unstable_scheduleCallback=function(k,$,J){var P=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?P+J:P):J=P,k){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=J+B,k={id:f++,callback:$,priorityLevel:k,startTime:J,expirationTime:B,sortIndex:-1},J>P?(k.sortIndex=J,n(u,k),t(d)===null&&k===t(u)&&(p?(y(E),E=-1):p=!0,V(j,J-P))):(k.sortIndex=B,n(d,k),x||h||(x=!0,W(C))),k},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(k){var $=g;return function(){var J=g;g=$;try{return k.apply(this,arguments)}finally{g=J}}}})(Vu);Pu.exports=Vu;var Lf=Pu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Of=I,sn=Lf;function U(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ru=new Set,lr={};function Rt(e,n){ba(e,n),ba(e+"Capture",n)}function ba(e,n){for(lr[e]=n,e=0;e<n.length;e++)Ru.add(n[e])}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_i=Object.prototype.hasOwnProperty,Kf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zc={},Pc={};function Jf(e){return _i.call(Pc,e)?!0:_i.call(zc,e)?!1:Kf.test(e)?Pc[e]=!0:(zc[e]=!0,!1)}function Bf(e,n,t,a){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ff(e,n,t,a){if(n===null||typeof n>"u"||Bf(e,n,t,a))return!0;if(a)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ue(e,n,t,a,o,s,i){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=s,this.removeEmptyString=i}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Pe[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Pe[n]=new Ue(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Pe[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Pe[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Pe[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Pe[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Pe[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Pe[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Pe[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Nl=/[\-:]([a-z])/g;function Tl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Nl,Tl);Pe[n]=new Ue(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Nl,Tl);Pe[n]=new Ue(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Nl,Tl);Pe[n]=new Ue(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Pe[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Pe[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ml(e,n,t,a){var o=Pe.hasOwnProperty(n)?Pe[n]:null;(o!==null?o.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Ff(n,t,o,a)&&(t=null),a||o===null?Jf(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):o.mustUseProperty?e[o.propertyName]=t===null?o.type===3?!1:"":t:(n=o.attributeName,a=o.attributeNamespace,t===null?e.removeAttribute(n):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,a?e.setAttributeNS(a,n,t):e.setAttribute(n,t))))}var Wn=Of.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Or=Symbol.for("react.element"),Zt=Symbol.for("react.portal"),Yt=Symbol.for("react.fragment"),El=Symbol.for("react.strict_mode"),Ii=Symbol.for("react.profiler"),Lu=Symbol.for("react.provider"),Ou=Symbol.for("react.context"),Dl=Symbol.for("react.forward_ref"),ki=Symbol.for("react.suspense"),ji=Symbol.for("react.suspense_list"),$l=Symbol.for("react.memo"),Xn=Symbol.for("react.lazy"),Ku=Symbol.for("react.offscreen"),Vc=Symbol.iterator;function za(e){return e===null||typeof e!="object"?null:(e=Vc&&e[Vc]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Object.assign,Bs;function Ua(e){if(Bs===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Bs=n&&n[1]||""}return`
`+Bs+e}var Fs=!1;function Gs(e,n){if(!e||Fs)return"";Fs=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var a=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){a=u}e.call(n.prototype)}else{try{throw Error()}catch(u){a=u}e()}}catch(u){if(u&&a&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),s=a.stack.split(`
`),i=o.length-1,l=s.length-1;1<=i&&0<=l&&o[i]!==s[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==s[l]){if(i!==1||l!==1)do if(i--,l--,0>l||o[i]!==s[l]){var d=`
`+o[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=l);break}}}finally{Fs=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Ua(e):""}function Gf(e){switch(e.tag){case 5:return Ua(e.type);case 16:return Ua("Lazy");case 13:return Ua("Suspense");case 19:return Ua("SuspenseList");case 0:case 2:case 15:return e=Gs(e.type,!1),e;case 11:return e=Gs(e.type.render,!1),e;case 1:return e=Gs(e.type,!0),e;default:return""}}function wi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yt:return"Fragment";case Zt:return"Portal";case Ii:return"Profiler";case El:return"StrictMode";case ki:return"Suspense";case ji:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ou:return(e.displayName||"Context")+".Consumer";case Lu:return(e._context.displayName||"Context")+".Provider";case Dl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $l:return n=e.displayName||null,n!==null?n:wi(e.type)||"Memo";case Xn:n=e._payload,e=e._init;try{return wi(e(n))}catch{}}return null}function Hf(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wi(n);case 8:return n===El?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ju(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Uf(e){var n=Ju(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,s=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return o.call(this)},set:function(i){a=""+i,s.call(this,i)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Kr(e){e._valueTracker||(e._valueTracker=Uf(e))}function Bu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Ju(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function Co(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Si(e,n){var t=n.checked;return ye({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Rc(e,n){var t=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;t=mt(n.value!=null?n.value:t),e._wrapperState={initialChecked:a,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Fu(e,n){n=n.checked,n!=null&&Ml(e,"checked",n,!1)}function Ci(e,n){Fu(e,n);var t=mt(n.value),a=n.type;if(t!=null)a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ni(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ni(e,n.type,mt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Lc(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ni(e,n,t){(n!=="number"||Co(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Wa=Array.isArray;function da(e,n,t,a){if(e=e.options,n){n={};for(var o=0;o<t.length;o++)n["$"+t[o]]=!0;for(t=0;t<e.length;t++)o=n.hasOwnProperty("$"+e[t].value),e[t].selected!==o&&(e[t].selected=o),o&&a&&(e[t].defaultSelected=!0)}else{for(t=""+mt(t),n=null,o=0;o<e.length;o++){if(e[o].value===t){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}n!==null||e[o].disabled||(n=e[o])}n!==null&&(n.selected=!0)}}function Ti(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(U(91));return ye({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Oc(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(U(92));if(Wa(t)){if(1<t.length)throw Error(U(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:mt(t)}}function Gu(e,n){var t=mt(n.value),a=mt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),a!=null&&(e.defaultValue=""+a)}function Kc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Hu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mi(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Hu(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Jr,Uu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,a,o){MSApp.execUnsafeLocalFunction(function(){return e(n,t,a,o)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Jr=Jr||document.createElement("div"),Jr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Jr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function cr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Xa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wf=["Webkit","ms","Moz","O"];Object.keys(Xa).forEach(function(e){Wf.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Xa[n]=Xa[e]})});function Wu(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Xa.hasOwnProperty(e)&&Xa[e]?(""+n).trim():n+"px"}function Zu(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var a=t.indexOf("--")===0,o=Wu(t,n[t],a);t==="float"&&(t="cssFloat"),a?e.setProperty(t,o):e[t]=o}}var Zf=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ei(e,n){if(n){if(Zf[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(U(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(U(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(U(61))}if(n.style!=null&&typeof n.style!="object")throw Error(U(62))}}function Di(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $i=null;function Al(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ai=null,ua=null,pa=null;function Jc(e){if(e=$r(e)){if(typeof Ai!="function")throw Error(U(280));var n=e.stateNode;n&&(n=bs(n),Ai(e.stateNode,e.type,n))}}function Yu(e){ua?pa?pa.push(e):pa=[e]:ua=e}function Xu(){if(ua){var e=ua,n=pa;if(pa=ua=null,Jc(e),n)for(e=0;e<n.length;e++)Jc(n[e])}}function Qu(e,n){return e(n)}function qu(){}var Hs=!1;function ep(e,n,t){if(Hs)return e(n,t);Hs=!0;try{return Qu(e,n,t)}finally{Hs=!1,(ua!==null||pa!==null)&&(qu(),Xu())}}function dr(e,n){var t=e.stateNode;if(t===null)return null;var a=bs(t);if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(U(231,n,typeof t));return t}var zi=!1;if(Fn)try{var Pa={};Object.defineProperty(Pa,"passive",{get:function(){zi=!0}}),window.addEventListener("test",Pa,Pa),window.removeEventListener("test",Pa,Pa)}catch{zi=!1}function Yf(e,n,t,a,o,s,i,l,d){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(f){this.onError(f)}}var Qa=!1,No=null,To=!1,Pi=null,Xf={onError:function(e){Qa=!0,No=e}};function Qf(e,n,t,a,o,s,i,l,d){Qa=!1,No=null,Yf.apply(Xf,arguments)}function qf(e,n,t,a,o,s,i,l,d){if(Qf.apply(this,arguments),Qa){if(Qa){var u=No;Qa=!1,No=null}else throw Error(U(198));To||(To=!0,Pi=u)}}function Lt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function np(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Bc(e){if(Lt(e)!==e)throw Error(U(188))}function eg(e){var n=e.alternate;if(!n){if(n=Lt(e),n===null)throw Error(U(188));return n!==e?null:e}for(var t=e,a=n;;){var o=t.return;if(o===null)break;var s=o.alternate;if(s===null){if(a=o.return,a!==null){t=a;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===t)return Bc(o),e;if(s===a)return Bc(o),n;s=s.sibling}throw Error(U(188))}if(t.return!==a.return)t=o,a=s;else{for(var i=!1,l=o.child;l;){if(l===t){i=!0,t=o,a=s;break}if(l===a){i=!0,a=o,t=s;break}l=l.sibling}if(!i){for(l=s.child;l;){if(l===t){i=!0,t=s,a=o;break}if(l===a){i=!0,a=s,t=o;break}l=l.sibling}if(!i)throw Error(U(189))}}if(t.alternate!==a)throw Error(U(190))}if(t.tag!==3)throw Error(U(188));return t.stateNode.current===t?e:n}function tp(e){return e=eg(e),e!==null?ap(e):null}function ap(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ap(e);if(n!==null)return n;e=e.sibling}return null}var rp=sn.unstable_scheduleCallback,Fc=sn.unstable_cancelCallback,ng=sn.unstable_shouldYield,tg=sn.unstable_requestPaint,ke=sn.unstable_now,ag=sn.unstable_getCurrentPriorityLevel,zl=sn.unstable_ImmediatePriority,op=sn.unstable_UserBlockingPriority,Mo=sn.unstable_NormalPriority,rg=sn.unstable_LowPriority,sp=sn.unstable_IdlePriority,fs=null,En=null;function og(e){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(fs,e,void 0,(e.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:lg,sg=Math.log,ig=Math.LN2;function lg(e){return e>>>=0,e===0?32:31-(sg(e)/ig|0)|0}var Br=64,Fr=4194304;function Za(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Eo(e,n){var t=e.pendingLanes;if(t===0)return 0;var a=0,o=e.suspendedLanes,s=e.pingedLanes,i=t&268435455;if(i!==0){var l=i&~o;l!==0?a=Za(l):(s&=i,s!==0&&(a=Za(s)))}else i=t&~o,i!==0?a=Za(i):s!==0&&(a=Za(s));if(a===0)return 0;if(n!==0&&n!==a&&!(n&o)&&(o=a&-a,s=n&-n,o>=s||o===16&&(s&4194240)!==0))return n;if(a&4&&(a|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)t=31-jn(n),o=1<<t,a|=e[t],n&=~o;return a}function cg(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dg(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-jn(s),l=1<<i,d=o[i];d===-1?(!(l&t)||l&a)&&(o[i]=cg(l,n)):d<=n&&(e.expiredLanes|=l),s&=~l}}function Vi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ip(){var e=Br;return Br<<=1,!(Br&4194240)&&(Br=64),e}function Us(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Er(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-jn(n),e[n]=t}function ug(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<t;){var o=31-jn(t),s=1<<o;n[o]=0,a[o]=-1,e[o]=-1,t&=~s}}function Pl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-jn(t),o=1<<a;o&n|e[a]&n&&(e[a]|=n),t&=~o}}var ce=0;function lp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var cp,Vl,dp,up,pp,Ri=!1,Gr=[],rt=null,ot=null,st=null,ur=new Map,pr=new Map,qn=[],pg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gc(e,n){switch(e){case"focusin":case"focusout":rt=null;break;case"dragenter":case"dragleave":ot=null;break;case"mouseover":case"mouseout":st=null;break;case"pointerover":case"pointerout":ur.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":pr.delete(n.pointerId)}}function Va(e,n,t,a,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:s,targetContainers:[o]},n!==null&&(n=$r(n),n!==null&&Vl(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,o!==null&&n.indexOf(o)===-1&&n.push(o),e)}function mg(e,n,t,a,o){switch(n){case"focusin":return rt=Va(rt,e,n,t,a,o),!0;case"dragenter":return ot=Va(ot,e,n,t,a,o),!0;case"mouseover":return st=Va(st,e,n,t,a,o),!0;case"pointerover":var s=o.pointerId;return ur.set(s,Va(ur.get(s)||null,e,n,t,a,o)),!0;case"gotpointercapture":return s=o.pointerId,pr.set(s,Va(pr.get(s)||null,e,n,t,a,o)),!0}return!1}function mp(e){var n=jt(e.target);if(n!==null){var t=Lt(n);if(t!==null){if(n=t.tag,n===13){if(n=np(t),n!==null){e.blockedOn=n,pp(e.priority,function(){dp(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function po(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Li(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);$i=a,t.target.dispatchEvent(a),$i=null}else return n=$r(t),n!==null&&Vl(n),e.blockedOn=t,!1;n.shift()}return!0}function Hc(e,n,t){po(e)&&t.delete(n)}function fg(){Ri=!1,rt!==null&&po(rt)&&(rt=null),ot!==null&&po(ot)&&(ot=null),st!==null&&po(st)&&(st=null),ur.forEach(Hc),pr.forEach(Hc)}function Ra(e,n){e.blockedOn===n&&(e.blockedOn=null,Ri||(Ri=!0,sn.unstable_scheduleCallback(sn.unstable_NormalPriority,fg)))}function mr(e){function n(o){return Ra(o,e)}if(0<Gr.length){Ra(Gr[0],e);for(var t=1;t<Gr.length;t++){var a=Gr[t];a.blockedOn===e&&(a.blockedOn=null)}}for(rt!==null&&Ra(rt,e),ot!==null&&Ra(ot,e),st!==null&&Ra(st,e),ur.forEach(n),pr.forEach(n),t=0;t<qn.length;t++)a=qn[t],a.blockedOn===e&&(a.blockedOn=null);for(;0<qn.length&&(t=qn[0],t.blockedOn===null);)mp(t),t.blockedOn===null&&qn.shift()}var ma=Wn.ReactCurrentBatchConfig,Do=!0;function gg(e,n,t,a){var o=ce,s=ma.transition;ma.transition=null;try{ce=1,Rl(e,n,t,a)}finally{ce=o,ma.transition=s}}function hg(e,n,t,a){var o=ce,s=ma.transition;ma.transition=null;try{ce=4,Rl(e,n,t,a)}finally{ce=o,ma.transition=s}}function Rl(e,n,t,a){if(Do){var o=Li(e,n,t,a);if(o===null)ai(e,n,a,$o,t),Gc(e,a);else if(mg(o,e,n,t,a))a.stopPropagation();else if(Gc(e,a),n&4&&-1<pg.indexOf(e)){for(;o!==null;){var s=$r(o);if(s!==null&&cp(s),s=Li(e,n,t,a),s===null&&ai(e,n,a,$o,t),s===o)break;o=s}o!==null&&a.stopPropagation()}else ai(e,n,a,null,t)}}var $o=null;function Li(e,n,t,a){if($o=null,e=Al(a),e=jt(e),e!==null)if(n=Lt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=np(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return $o=e,null}function fp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ag()){case zl:return 1;case op:return 4;case Mo:case rg:return 16;case sp:return 536870912;default:return 16}default:return 16}}var tt=null,Ll=null,mo=null;function gp(){if(mo)return mo;var e,n=Ll,t=n.length,a,o="value"in tt?tt.value:tt.textContent,s=o.length;for(e=0;e<t&&n[e]===o[e];e++);var i=t-e;for(a=1;a<=i&&n[t-a]===o[s-a];a++);return mo=o.slice(e,1<a?1-a:void 0)}function fo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Hr(){return!0}function Uc(){return!1}function cn(e){function n(t,a,o,s,i){this._reactName=t,this._targetInst=o,this.type=a,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Hr:Uc,this.isPropagationStopped=Uc,this}return ye(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Hr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Hr)},persist:function(){},isPersistent:Hr}),n}var Ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=cn(Ta),Dr=ye({},Ta,{view:0,detail:0}),xg=cn(Dr),Ws,Zs,La,gs=ye({},Dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==La&&(La&&e.type==="mousemove"?(Ws=e.screenX-La.screenX,Zs=e.screenY-La.screenY):Zs=Ws=0,La=e),Ws)},movementY:function(e){return"movementY"in e?e.movementY:Zs}}),Wc=cn(gs),bg=ye({},gs,{dataTransfer:0}),vg=cn(bg),yg=ye({},Dr,{relatedTarget:0}),Ys=cn(yg),_g=ye({},Ta,{animationName:0,elapsedTime:0,pseudoElement:0}),Ig=cn(_g),kg=ye({},Ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jg=cn(kg),wg=ye({},Ta,{data:0}),Zc=cn(wg),Sg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ng={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ng[e])?!!n[e]:!1}function Kl(){return Tg}var Mg=ye({},Dr,{key:function(e){if(e.key){var n=Sg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=fo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kl,charCode:function(e){return e.type==="keypress"?fo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Eg=cn(Mg),Dg=ye({},gs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yc=cn(Dg),$g=ye({},Dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kl}),Ag=cn($g),zg=ye({},Ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pg=cn(zg),Vg=ye({},gs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rg=cn(Vg),Lg=[9,13,27,32],Jl=Fn&&"CompositionEvent"in window,qa=null;Fn&&"documentMode"in document&&(qa=document.documentMode);var Og=Fn&&"TextEvent"in window&&!qa,hp=Fn&&(!Jl||qa&&8<qa&&11>=qa),Xc=" ",Qc=!1;function xp(e,n){switch(e){case"keyup":return Lg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xt=!1;function Kg(e,n){switch(e){case"compositionend":return bp(n);case"keypress":return n.which!==32?null:(Qc=!0,Xc);case"textInput":return e=n.data,e===Xc&&Qc?null:e;default:return null}}function Jg(e,n){if(Xt)return e==="compositionend"||!Jl&&xp(e,n)?(e=gp(),mo=Ll=tt=null,Xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return hp&&n.locale!=="ko"?null:n.data;default:return null}}var Bg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Bg[e.type]:n==="textarea"}function vp(e,n,t,a){Yu(a),n=Ao(n,"onChange"),0<n.length&&(t=new Ol("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var er=null,fr=null;function Fg(e){Mp(e,0)}function hs(e){var n=ea(e);if(Bu(n))return e}function Gg(e,n){if(e==="change")return n}var yp=!1;if(Fn){var Xs;if(Fn){var Qs="oninput"in document;if(!Qs){var ed=document.createElement("div");ed.setAttribute("oninput","return;"),Qs=typeof ed.oninput=="function"}Xs=Qs}else Xs=!1;yp=Xs&&(!document.documentMode||9<document.documentMode)}function nd(){er&&(er.detachEvent("onpropertychange",_p),fr=er=null)}function _p(e){if(e.propertyName==="value"&&hs(fr)){var n=[];vp(n,fr,e,Al(e)),ep(Fg,n)}}function Hg(e,n,t){e==="focusin"?(nd(),er=n,fr=t,er.attachEvent("onpropertychange",_p)):e==="focusout"&&nd()}function Ug(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hs(fr)}function Wg(e,n){if(e==="click")return hs(n)}function Zg(e,n){if(e==="input"||e==="change")return hs(n)}function Yg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Sn=typeof Object.is=="function"?Object.is:Yg;function gr(e,n){if(Sn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var o=t[a];if(!_i.call(n,o)||!Sn(e[o],n[o]))return!1}return!0}function td(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ad(e,n){var t=td(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=td(t)}}function Ip(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ip(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function kp(){for(var e=window,n=Co();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Co(e.document)}return n}function Bl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Xg(e){var n=kp(),t=e.focusedElem,a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ip(t.ownerDocument.documentElement,t)){if(a!==null&&Bl(t)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var o=t.textContent.length,s=Math.min(a.start,o);a=a.end===void 0?s:Math.min(a.end,o),!e.extend&&s>a&&(o=a,a=s,s=o),o=ad(t,s);var i=ad(t,a);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(n=n.createRange(),n.setStart(o.node,o.offset),e.removeAllRanges(),s>a?(e.addRange(n),e.extend(i.node,i.offset)):(n.setEnd(i.node,i.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qg=Fn&&"documentMode"in document&&11>=document.documentMode,Qt=null,Oi=null,nr=null,Ki=!1;function rd(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ki||Qt==null||Qt!==Co(a)||(a=Qt,"selectionStart"in a&&Bl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),nr&&gr(nr,a)||(nr=a,a=Ao(Oi,"onSelect"),0<a.length&&(n=new Ol("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Qt)))}function Ur(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var qt={animationend:Ur("Animation","AnimationEnd"),animationiteration:Ur("Animation","AnimationIteration"),animationstart:Ur("Animation","AnimationStart"),transitionend:Ur("Transition","TransitionEnd")},qs={},jp={};Fn&&(jp=document.createElement("div").style,"AnimationEvent"in window||(delete qt.animationend.animation,delete qt.animationiteration.animation,delete qt.animationstart.animation),"TransitionEvent"in window||delete qt.transitionend.transition);function xs(e){if(qs[e])return qs[e];if(!qt[e])return e;var n=qt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in jp)return qs[e]=n[t];return e}var wp=xs("animationend"),Sp=xs("animationiteration"),Cp=xs("animationstart"),Np=xs("transitionend"),Tp=new Map,od="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xt(e,n){Tp.set(e,n),Rt(n,[e])}for(var ei=0;ei<od.length;ei++){var ni=od[ei],qg=ni.toLowerCase(),e0=ni[0].toUpperCase()+ni.slice(1);xt(qg,"on"+e0)}xt(wp,"onAnimationEnd");xt(Sp,"onAnimationIteration");xt(Cp,"onAnimationStart");xt("dblclick","onDoubleClick");xt("focusin","onFocus");xt("focusout","onBlur");xt(Np,"onTransitionEnd");ba("onMouseEnter",["mouseout","mouseover"]);ba("onMouseLeave",["mouseout","mouseover"]);ba("onPointerEnter",["pointerout","pointerover"]);ba("onPointerLeave",["pointerout","pointerover"]);Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ya="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),n0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ya));function sd(e,n,t){var a=e.type||"unknown-event";e.currentTarget=t,qf(a,n,void 0,e),e.currentTarget=null}function Mp(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],o=a.event;a=a.listeners;e:{var s=void 0;if(n)for(var i=a.length-1;0<=i;i--){var l=a[i],d=l.instance,u=l.currentTarget;if(l=l.listener,d!==s&&o.isPropagationStopped())break e;sd(o,l,u),s=d}else for(i=0;i<a.length;i++){if(l=a[i],d=l.instance,u=l.currentTarget,l=l.listener,d!==s&&o.isPropagationStopped())break e;sd(o,l,u),s=d}}}if(To)throw e=Pi,To=!1,Pi=null,e}function pe(e,n){var t=n[Hi];t===void 0&&(t=n[Hi]=new Set);var a=e+"__bubble";t.has(a)||(Ep(n,e,2,!1),t.add(a))}function ti(e,n,t){var a=0;n&&(a|=4),Ep(t,e,a,n)}var Wr="_reactListening"+Math.random().toString(36).slice(2);function hr(e){if(!e[Wr]){e[Wr]=!0,Ru.forEach(function(t){t!=="selectionchange"&&(n0.has(t)||ti(t,!1,e),ti(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Wr]||(n[Wr]=!0,ti("selectionchange",!1,n))}}function Ep(e,n,t,a){switch(fp(n)){case 1:var o=gg;break;case 4:o=hg;break;default:o=Rl}t=o.bind(null,n,t,e),o=void 0,!zi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(n,t,{capture:!0,passive:o}):e.addEventListener(n,t,!0):o!==void 0?e.addEventListener(n,t,{passive:o}):e.addEventListener(n,t,!1)}function ai(e,n,t,a,o){var s=a;if(!(n&1)&&!(n&2)&&a!==null)e:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var l=a.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(i===4)for(i=a.return;i!==null;){var d=i.tag;if((d===3||d===4)&&(d=i.stateNode.containerInfo,d===o||d.nodeType===8&&d.parentNode===o))return;i=i.return}for(;l!==null;){if(i=jt(l),i===null)return;if(d=i.tag,d===5||d===6){a=s=i;continue e}l=l.parentNode}}a=a.return}ep(function(){var u=s,f=Al(t),m=[];e:{var g=Tp.get(e);if(g!==void 0){var h=Ol,x=e;switch(e){case"keypress":if(fo(t)===0)break e;case"keydown":case"keyup":h=Eg;break;case"focusin":x="focus",h=Ys;break;case"focusout":x="blur",h=Ys;break;case"beforeblur":case"afterblur":h=Ys;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Wc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=vg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Ag;break;case wp:case Sp:case Cp:h=Ig;break;case Np:h=Pg;break;case"scroll":h=xg;break;case"wheel":h=Rg;break;case"copy":case"cut":case"paste":h=jg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Yc}var p=(n&4)!==0,_=!p&&e==="scroll",y=p?g!==null?g+"Capture":null:g;p=[];for(var b=u,v;b!==null;){v=b;var j=v.stateNode;if(v.tag===5&&j!==null&&(v=j,y!==null&&(j=dr(b,y),j!=null&&p.push(xr(b,j,v)))),_)break;b=b.return}0<p.length&&(g=new h(g,x,null,t,f),m.push({event:g,listeners:p}))}}if(!(n&7)){e:{if(g=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",g&&t!==$i&&(x=t.relatedTarget||t.fromElement)&&(jt(x)||x[Gn]))break e;if((h||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,h?(x=t.relatedTarget||t.toElement,h=u,x=x?jt(x):null,x!==null&&(_=Lt(x),x!==_||x.tag!==5&&x.tag!==6)&&(x=null)):(h=null,x=u),h!==x)){if(p=Wc,j="onMouseLeave",y="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(p=Yc,j="onPointerLeave",y="onPointerEnter",b="pointer"),_=h==null?g:ea(h),v=x==null?g:ea(x),g=new p(j,b+"leave",h,t,f),g.target=_,g.relatedTarget=v,j=null,jt(f)===u&&(p=new p(y,b+"enter",x,t,f),p.target=v,p.relatedTarget=_,j=p),_=j,h&&x)n:{for(p=h,y=x,b=0,v=p;v;v=Ft(v))b++;for(v=0,j=y;j;j=Ft(j))v++;for(;0<b-v;)p=Ft(p),b--;for(;0<v-b;)y=Ft(y),v--;for(;b--;){if(p===y||y!==null&&p===y.alternate)break n;p=Ft(p),y=Ft(y)}p=null}else p=null;h!==null&&id(m,g,h,p,!1),x!==null&&_!==null&&id(m,_,x,p,!0)}}e:{if(g=u?ea(u):window,h=g.nodeName&&g.nodeName.toLowerCase(),h==="select"||h==="input"&&g.type==="file")var C=Gg;else if(qc(g))if(yp)C=Zg;else{C=Ug;var M=Hg}else(h=g.nodeName)&&h.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(C=Wg);if(C&&(C=C(e,u))){vp(m,C,t,f);break e}M&&M(e,g,u),e==="focusout"&&(M=g._wrapperState)&&M.controlled&&g.type==="number"&&Ni(g,"number",g.value)}switch(M=u?ea(u):window,e){case"focusin":(qc(M)||M.contentEditable==="true")&&(Qt=M,Oi=u,nr=null);break;case"focusout":nr=Oi=Qt=null;break;case"mousedown":Ki=!0;break;case"contextmenu":case"mouseup":case"dragend":Ki=!1,rd(m,t,f);break;case"selectionchange":if(Qg)break;case"keydown":case"keyup":rd(m,t,f)}var S;if(Jl)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Xt?xp(e,t)&&(E="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(E="onCompositionStart");E&&(hp&&t.locale!=="ko"&&(Xt||E!=="onCompositionStart"?E==="onCompositionEnd"&&Xt&&(S=gp()):(tt=f,Ll="value"in tt?tt.value:tt.textContent,Xt=!0)),M=Ao(u,E),0<M.length&&(E=new Zc(E,e,null,t,f),m.push({event:E,listeners:M}),S?E.data=S:(S=bp(t),S!==null&&(E.data=S)))),(S=Og?Kg(e,t):Jg(e,t))&&(u=Ao(u,"onBeforeInput"),0<u.length&&(f=new Zc("onBeforeInput","beforeinput",null,t,f),m.push({event:f,listeners:u}),f.data=S))}Mp(m,n)})}function xr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Ao(e,n){for(var t=n+"Capture",a=[];e!==null;){var o=e,s=o.stateNode;o.tag===5&&s!==null&&(o=s,s=dr(e,t),s!=null&&a.unshift(xr(e,s,o)),s=dr(e,n),s!=null&&a.push(xr(e,s,o))),e=e.return}return a}function Ft(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function id(e,n,t,a,o){for(var s=n._reactName,i=[];t!==null&&t!==a;){var l=t,d=l.alternate,u=l.stateNode;if(d!==null&&d===a)break;l.tag===5&&u!==null&&(l=u,o?(d=dr(t,s),d!=null&&i.unshift(xr(t,d,l))):o||(d=dr(t,s),d!=null&&i.push(xr(t,d,l)))),t=t.return}i.length!==0&&e.push({event:n,listeners:i})}var t0=/\r\n?/g,a0=/\u0000|\uFFFD/g;function ld(e){return(typeof e=="string"?e:""+e).replace(t0,`
`).replace(a0,"")}function Zr(e,n,t){if(n=ld(n),ld(e)!==n&&t)throw Error(U(425))}function zo(){}var Ji=null,Bi=null;function Fi(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gi=typeof setTimeout=="function"?setTimeout:void 0,r0=typeof clearTimeout=="function"?clearTimeout:void 0,cd=typeof Promise=="function"?Promise:void 0,o0=typeof queueMicrotask=="function"?queueMicrotask:typeof cd<"u"?function(e){return cd.resolve(null).then(e).catch(s0)}:Gi;function s0(e){setTimeout(function(){throw e})}function ri(e,n){var t=n,a=0;do{var o=t.nextSibling;if(e.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(a===0){e.removeChild(o),mr(n);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=o}while(t);mr(n)}function it(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function dd(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Ma=Math.random().toString(36).slice(2),Tn="__reactFiber$"+Ma,br="__reactProps$"+Ma,Gn="__reactContainer$"+Ma,Hi="__reactEvents$"+Ma,i0="__reactListeners$"+Ma,l0="__reactHandles$"+Ma;function jt(e){var n=e[Tn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Gn]||t[Tn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=dd(e);e!==null;){if(t=e[Tn])return t;e=dd(e)}return n}e=t,t=e.parentNode}return null}function $r(e){return e=e[Tn]||e[Gn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ea(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(U(33))}function bs(e){return e[br]||null}var Ui=[],na=-1;function bt(e){return{current:e}}function me(e){0>na||(e.current=Ui[na],Ui[na]=null,na--)}function ue(e,n){na++,Ui[na]=e.current,e.current=n}var ft={},Je=bt(ft),Xe=bt(!1),Dt=ft;function va(e,n){var t=e.type.contextTypes;if(!t)return ft;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var o={},s;for(s in t)o[s]=n[s];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=o),o}function Qe(e){return e=e.childContextTypes,e!=null}function Po(){me(Xe),me(Je)}function ud(e,n,t){if(Je.current!==ft)throw Error(U(168));ue(Je,n),ue(Xe,t)}function Dp(e,n,t){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return t;a=a.getChildContext();for(var o in a)if(!(o in n))throw Error(U(108,Hf(e)||"Unknown",o));return ye({},t,a)}function Vo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ft,Dt=Je.current,ue(Je,e),ue(Xe,Xe.current),!0}function pd(e,n,t){var a=e.stateNode;if(!a)throw Error(U(169));t?(e=Dp(e,n,Dt),a.__reactInternalMemoizedMergedChildContext=e,me(Xe),me(Je),ue(Je,e)):me(Xe),ue(Xe,t)}var Rn=null,vs=!1,oi=!1;function $p(e){Rn===null?Rn=[e]:Rn.push(e)}function c0(e){vs=!0,$p(e)}function vt(){if(!oi&&Rn!==null){oi=!0;var e=0,n=ce;try{var t=Rn;for(ce=1;e<t.length;e++){var a=t[e];do a=a(!0);while(a!==null)}Rn=null,vs=!1}catch(o){throw Rn!==null&&(Rn=Rn.slice(e+1)),rp(zl,vt),o}finally{ce=n,oi=!1}}return null}var ta=[],aa=0,Ro=null,Lo=0,un=[],pn=0,$t=null,On=1,Kn="";function _t(e,n){ta[aa++]=Lo,ta[aa++]=Ro,Ro=e,Lo=n}function Ap(e,n,t){un[pn++]=On,un[pn++]=Kn,un[pn++]=$t,$t=e;var a=On;e=Kn;var o=32-jn(a)-1;a&=~(1<<o),t+=1;var s=32-jn(n)+o;if(30<s){var i=o-o%5;s=(a&(1<<i)-1).toString(32),a>>=i,o-=i,On=1<<32-jn(n)+o|t<<o|a,Kn=s+e}else On=1<<s|t<<o|a,Kn=e}function Fl(e){e.return!==null&&(_t(e,1),Ap(e,1,0))}function Gl(e){for(;e===Ro;)Ro=ta[--aa],ta[aa]=null,Lo=ta[--aa],ta[aa]=null;for(;e===$t;)$t=un[--pn],un[pn]=null,Kn=un[--pn],un[pn]=null,On=un[--pn],un[pn]=null}var rn=null,an=null,ge=!1,kn=null;function zp(e,n){var t=mn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function md(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,rn=e,an=it(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,rn=e,an=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=$t!==null?{id:On,overflow:Kn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=mn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,rn=e,an=null,!0):!1;default:return!1}}function Wi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Zi(e){if(ge){var n=an;if(n){var t=n;if(!md(e,n)){if(Wi(e))throw Error(U(418));n=it(t.nextSibling);var a=rn;n&&md(e,n)?zp(a,t):(e.flags=e.flags&-4097|2,ge=!1,rn=e)}}else{if(Wi(e))throw Error(U(418));e.flags=e.flags&-4097|2,ge=!1,rn=e}}}function fd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rn=e}function Yr(e){if(e!==rn)return!1;if(!ge)return fd(e),ge=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Fi(e.type,e.memoizedProps)),n&&(n=an)){if(Wi(e))throw Pp(),Error(U(418));for(;n;)zp(e,n),n=it(n.nextSibling)}if(fd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(U(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){an=it(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}an=null}}else an=rn?it(e.stateNode.nextSibling):null;return!0}function Pp(){for(var e=an;e;)e=it(e.nextSibling)}function ya(){an=rn=null,ge=!1}function Hl(e){kn===null?kn=[e]:kn.push(e)}var d0=Wn.ReactCurrentBatchConfig;function Oa(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(U(309));var a=t.stateNode}if(!a)throw Error(U(147,e));var o=a,s=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===s?n.ref:(n=function(i){var l=o.refs;i===null?delete l[s]:l[s]=i},n._stringRef=s,n)}if(typeof e!="string")throw Error(U(284));if(!t._owner)throw Error(U(290,e))}return e}function Xr(e,n){throw e=Object.prototype.toString.call(n),Error(U(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function gd(e){var n=e._init;return n(e._payload)}function Vp(e){function n(y,b){if(e){var v=y.deletions;v===null?(y.deletions=[b],y.flags|=16):v.push(b)}}function t(y,b){if(!e)return null;for(;b!==null;)n(y,b),b=b.sibling;return null}function a(y,b){for(y=new Map;b!==null;)b.key!==null?y.set(b.key,b):y.set(b.index,b),b=b.sibling;return y}function o(y,b){return y=ut(y,b),y.index=0,y.sibling=null,y}function s(y,b,v){return y.index=v,e?(v=y.alternate,v!==null?(v=v.index,v<b?(y.flags|=2,b):v):(y.flags|=2,b)):(y.flags|=1048576,b)}function i(y){return e&&y.alternate===null&&(y.flags|=2),y}function l(y,b,v,j){return b===null||b.tag!==6?(b=pi(v,y.mode,j),b.return=y,b):(b=o(b,v),b.return=y,b)}function d(y,b,v,j){var C=v.type;return C===Yt?f(y,b,v.props.children,j,v.key):b!==null&&(b.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Xn&&gd(C)===b.type)?(j=o(b,v.props),j.ref=Oa(y,b,v),j.return=y,j):(j=_o(v.type,v.key,v.props,null,y.mode,j),j.ref=Oa(y,b,v),j.return=y,j)}function u(y,b,v,j){return b===null||b.tag!==4||b.stateNode.containerInfo!==v.containerInfo||b.stateNode.implementation!==v.implementation?(b=mi(v,y.mode,j),b.return=y,b):(b=o(b,v.children||[]),b.return=y,b)}function f(y,b,v,j,C){return b===null||b.tag!==7?(b=Tt(v,y.mode,j,C),b.return=y,b):(b=o(b,v),b.return=y,b)}function m(y,b,v){if(typeof b=="string"&&b!==""||typeof b=="number")return b=pi(""+b,y.mode,v),b.return=y,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Or:return v=_o(b.type,b.key,b.props,null,y.mode,v),v.ref=Oa(y,null,b),v.return=y,v;case Zt:return b=mi(b,y.mode,v),b.return=y,b;case Xn:var j=b._init;return m(y,j(b._payload),v)}if(Wa(b)||za(b))return b=Tt(b,y.mode,v,null),b.return=y,b;Xr(y,b)}return null}function g(y,b,v,j){var C=b!==null?b.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:l(y,b,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Or:return v.key===C?d(y,b,v,j):null;case Zt:return v.key===C?u(y,b,v,j):null;case Xn:return C=v._init,g(y,b,C(v._payload),j)}if(Wa(v)||za(v))return C!==null?null:f(y,b,v,j,null);Xr(y,v)}return null}function h(y,b,v,j,C){if(typeof j=="string"&&j!==""||typeof j=="number")return y=y.get(v)||null,l(b,y,""+j,C);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Or:return y=y.get(j.key===null?v:j.key)||null,d(b,y,j,C);case Zt:return y=y.get(j.key===null?v:j.key)||null,u(b,y,j,C);case Xn:var M=j._init;return h(y,b,v,M(j._payload),C)}if(Wa(j)||za(j))return y=y.get(v)||null,f(b,y,j,C,null);Xr(b,j)}return null}function x(y,b,v,j){for(var C=null,M=null,S=b,E=b=0,z=null;S!==null&&E<v.length;E++){S.index>E?(z=S,S=null):z=S.sibling;var N=g(y,S,v[E],j);if(N===null){S===null&&(S=z);break}e&&S&&N.alternate===null&&n(y,S),b=s(N,b,E),M===null?C=N:M.sibling=N,M=N,S=z}if(E===v.length)return t(y,S),ge&&_t(y,E),C;if(S===null){for(;E<v.length;E++)S=m(y,v[E],j),S!==null&&(b=s(S,b,E),M===null?C=S:M.sibling=S,M=S);return ge&&_t(y,E),C}for(S=a(y,S);E<v.length;E++)z=h(S,y,E,v[E],j),z!==null&&(e&&z.alternate!==null&&S.delete(z.key===null?E:z.key),b=s(z,b,E),M===null?C=z:M.sibling=z,M=z);return e&&S.forEach(function(R){return n(y,R)}),ge&&_t(y,E),C}function p(y,b,v,j){var C=za(v);if(typeof C!="function")throw Error(U(150));if(v=C.call(v),v==null)throw Error(U(151));for(var M=C=null,S=b,E=b=0,z=null,N=v.next();S!==null&&!N.done;E++,N=v.next()){S.index>E?(z=S,S=null):z=S.sibling;var R=g(y,S,N.value,j);if(R===null){S===null&&(S=z);break}e&&S&&R.alternate===null&&n(y,S),b=s(R,b,E),M===null?C=R:M.sibling=R,M=R,S=z}if(N.done)return t(y,S),ge&&_t(y,E),C;if(S===null){for(;!N.done;E++,N=v.next())N=m(y,N.value,j),N!==null&&(b=s(N,b,E),M===null?C=N:M.sibling=N,M=N);return ge&&_t(y,E),C}for(S=a(y,S);!N.done;E++,N=v.next())N=h(S,y,E,N.value,j),N!==null&&(e&&N.alternate!==null&&S.delete(N.key===null?E:N.key),b=s(N,b,E),M===null?C=N:M.sibling=N,M=N);return e&&S.forEach(function(D){return n(y,D)}),ge&&_t(y,E),C}function _(y,b,v,j){if(typeof v=="object"&&v!==null&&v.type===Yt&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Or:e:{for(var C=v.key,M=b;M!==null;){if(M.key===C){if(C=v.type,C===Yt){if(M.tag===7){t(y,M.sibling),b=o(M,v.props.children),b.return=y,y=b;break e}}else if(M.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Xn&&gd(C)===M.type){t(y,M.sibling),b=o(M,v.props),b.ref=Oa(y,M,v),b.return=y,y=b;break e}t(y,M);break}else n(y,M);M=M.sibling}v.type===Yt?(b=Tt(v.props.children,y.mode,j,v.key),b.return=y,y=b):(j=_o(v.type,v.key,v.props,null,y.mode,j),j.ref=Oa(y,b,v),j.return=y,y=j)}return i(y);case Zt:e:{for(M=v.key;b!==null;){if(b.key===M)if(b.tag===4&&b.stateNode.containerInfo===v.containerInfo&&b.stateNode.implementation===v.implementation){t(y,b.sibling),b=o(b,v.children||[]),b.return=y,y=b;break e}else{t(y,b);break}else n(y,b);b=b.sibling}b=mi(v,y.mode,j),b.return=y,y=b}return i(y);case Xn:return M=v._init,_(y,b,M(v._payload),j)}if(Wa(v))return x(y,b,v,j);if(za(v))return p(y,b,v,j);Xr(y,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,b!==null&&b.tag===6?(t(y,b.sibling),b=o(b,v),b.return=y,y=b):(t(y,b),b=pi(v,y.mode,j),b.return=y,y=b),i(y)):t(y,b)}return _}var _a=Vp(!0),Rp=Vp(!1),Oo=bt(null),Ko=null,ra=null,Ul=null;function Wl(){Ul=ra=Ko=null}function Zl(e){var n=Oo.current;me(Oo),e._currentValue=n}function Yi(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function fa(e,n){Ko=e,Ul=ra=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ze=!0),e.firstContext=null)}function xn(e){var n=e._currentValue;if(Ul!==e)if(e={context:e,memoizedValue:n,next:null},ra===null){if(Ko===null)throw Error(U(308));ra=e,Ko.dependencies={lanes:0,firstContext:e}}else ra=ra.next=e;return n}var wt=null;function Yl(e){wt===null?wt=[e]:wt.push(e)}function Lp(e,n,t,a){var o=n.interleaved;return o===null?(t.next=t,Yl(n)):(t.next=o.next,o.next=t),n.interleaved=t,Hn(e,a)}function Hn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Qn=!1;function Xl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Op(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function lt(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,oe&2){var o=a.pending;return o===null?n.next=n:(n.next=o.next,o.next=n),a.pending=n,Hn(e,t)}return o=a.interleaved,o===null?(n.next=n,Yl(a)):(n.next=o.next,o.next=n),a.interleaved=n,Hn(e,t)}function go(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Pl(e,t)}}function hd(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var o=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var i={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?o=s=i:s=s.next=i,t=t.next}while(t!==null);s===null?o=s=n:s=s.next=n}else o=s=n;t={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:a.shared,effects:a.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Jo(e,n,t,a){var o=e.updateQueue;Qn=!1;var s=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var d=l,u=d.next;d.next=null,i===null?s=u:i.next=u,i=d;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==i&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=d))}if(s!==null){var m=o.baseState;i=0,f=u=d=null,l=s;do{var g=l.lane,h=l.eventTime;if((a&g)===g){f!==null&&(f=f.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,p=l;switch(g=n,h=t,p.tag){case 1:if(x=p.payload,typeof x=="function"){m=x.call(h,m,g);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=p.payload,g=typeof x=="function"?x.call(h,m,g):x,g==null)break e;m=ye({},m,g);break e;case 2:Qn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[l]:g.push(l))}else h={eventTime:h,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=h,d=m):f=f.next=h,i|=g;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;g=l,l=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(f===null&&(d=m),o.baseState=d,o.firstBaseUpdate=u,o.lastBaseUpdate=f,n=o.shared.interleaved,n!==null){o=n;do i|=o.lane,o=o.next;while(o!==n)}else s===null&&(o.shared.lanes=0);zt|=i,e.lanes=i,e.memoizedState=m}}function xd(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],o=a.callback;if(o!==null){if(a.callback=null,a=t,typeof o!="function")throw Error(U(191,o));o.call(a)}}}var Ar={},Dn=bt(Ar),vr=bt(Ar),yr=bt(Ar);function St(e){if(e===Ar)throw Error(U(174));return e}function Ql(e,n){switch(ue(yr,n),ue(vr,e),ue(Dn,Ar),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Mi(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Mi(n,e)}me(Dn),ue(Dn,n)}function Ia(){me(Dn),me(vr),me(yr)}function Kp(e){St(yr.current);var n=St(Dn.current),t=Mi(n,e.type);n!==t&&(ue(vr,e),ue(Dn,t))}function ql(e){vr.current===e&&(me(Dn),me(vr))}var xe=bt(0);function Bo(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var si=[];function ec(){for(var e=0;e<si.length;e++)si[e]._workInProgressVersionPrimary=null;si.length=0}var ho=Wn.ReactCurrentDispatcher,ii=Wn.ReactCurrentBatchConfig,At=0,be=null,Ne=null,Ee=null,Fo=!1,tr=!1,_r=0,u0=0;function Re(){throw Error(U(321))}function nc(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Sn(e[t],n[t]))return!1;return!0}function tc(e,n,t,a,o,s){if(At=s,be=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ho.current=e===null||e.memoizedState===null?g0:h0,e=t(a,o),tr){s=0;do{if(tr=!1,_r=0,25<=s)throw Error(U(301));s+=1,Ee=Ne=null,n.updateQueue=null,ho.current=x0,e=t(a,o)}while(tr)}if(ho.current=Go,n=Ne!==null&&Ne.next!==null,At=0,Ee=Ne=be=null,Fo=!1,n)throw Error(U(300));return e}function ac(){var e=_r!==0;return _r=0,e}function Nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?be.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function bn(){if(Ne===null){var e=be.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var n=Ee===null?be.memoizedState:Ee.next;if(n!==null)Ee=n,Ne=e;else{if(e===null)throw Error(U(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ee===null?be.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function Ir(e,n){return typeof n=="function"?n(e):n}function li(e){var n=bn(),t=n.queue;if(t===null)throw Error(U(311));t.lastRenderedReducer=e;var a=Ne,o=a.baseQueue,s=t.pending;if(s!==null){if(o!==null){var i=o.next;o.next=s.next,s.next=i}a.baseQueue=o=s,t.pending=null}if(o!==null){s=o.next,a=a.baseState;var l=i=null,d=null,u=s;do{var f=u.lane;if((At&f)===f)d!==null&&(d=d.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),a=u.hasEagerState?u.eagerState:e(a,u.action);else{var m={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};d===null?(l=d=m,i=a):d=d.next=m,be.lanes|=f,zt|=f}u=u.next}while(u!==null&&u!==s);d===null?i=a:d.next=l,Sn(a,n.memoizedState)||(Ze=!0),n.memoizedState=a,n.baseState=i,n.baseQueue=d,t.lastRenderedState=a}if(e=t.interleaved,e!==null){o=e;do s=o.lane,be.lanes|=s,zt|=s,o=o.next;while(o!==e)}else o===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function ci(e){var n=bn(),t=n.queue;if(t===null)throw Error(U(311));t.lastRenderedReducer=e;var a=t.dispatch,o=t.pending,s=n.memoizedState;if(o!==null){t.pending=null;var i=o=o.next;do s=e(s,i.action),i=i.next;while(i!==o);Sn(s,n.memoizedState)||(Ze=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),t.lastRenderedState=s}return[s,a]}function Jp(){}function Bp(e,n){var t=be,a=bn(),o=n(),s=!Sn(a.memoizedState,o);if(s&&(a.memoizedState=o,Ze=!0),a=a.queue,rc(Hp.bind(null,t,a,e),[e]),a.getSnapshot!==n||s||Ee!==null&&Ee.memoizedState.tag&1){if(t.flags|=2048,kr(9,Gp.bind(null,t,a,o,n),void 0,null),De===null)throw Error(U(349));At&30||Fp(t,n,o)}return o}function Fp(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=be.updateQueue,n===null?(n={lastEffect:null,stores:null},be.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Gp(e,n,t,a){n.value=t,n.getSnapshot=a,Up(n)&&Wp(e)}function Hp(e,n,t){return t(function(){Up(n)&&Wp(e)})}function Up(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Sn(e,t)}catch{return!0}}function Wp(e){var n=Hn(e,1);n!==null&&wn(n,e,1,-1)}function bd(e){var n=Nn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:e},n.queue=e,e=e.dispatch=f0.bind(null,be,e),[n.memoizedState,e]}function kr(e,n,t,a){return e={tag:e,create:n,destroy:t,deps:a,next:null},n=be.updateQueue,n===null?(n={lastEffect:null,stores:null},be.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e)),e}function Zp(){return bn().memoizedState}function xo(e,n,t,a){var o=Nn();be.flags|=e,o.memoizedState=kr(1|n,t,void 0,a===void 0?null:a)}function ys(e,n,t,a){var o=bn();a=a===void 0?null:a;var s=void 0;if(Ne!==null){var i=Ne.memoizedState;if(s=i.destroy,a!==null&&nc(a,i.deps)){o.memoizedState=kr(n,t,s,a);return}}be.flags|=e,o.memoizedState=kr(1|n,t,s,a)}function vd(e,n){return xo(8390656,8,e,n)}function rc(e,n){return ys(2048,8,e,n)}function Yp(e,n){return ys(4,2,e,n)}function Xp(e,n){return ys(4,4,e,n)}function Qp(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function qp(e,n,t){return t=t!=null?t.concat([e]):null,ys(4,4,Qp.bind(null,n,e),t)}function oc(){}function em(e,n){var t=bn();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&nc(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function nm(e,n){var t=bn();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&nc(n,a[1])?a[0]:(e=e(),t.memoizedState=[e,n],e)}function tm(e,n,t){return At&21?(Sn(t,n)||(t=ip(),be.lanes|=t,zt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=t)}function p0(e,n){var t=ce;ce=t!==0&&4>t?t:4,e(!0);var a=ii.transition;ii.transition={};try{e(!1),n()}finally{ce=t,ii.transition=a}}function am(){return bn().memoizedState}function m0(e,n,t){var a=dt(e);if(t={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null},rm(e))om(n,t);else if(t=Lp(e,n,t,a),t!==null){var o=Ge();wn(t,e,a,o),sm(t,n,a)}}function f0(e,n,t){var a=dt(e),o={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null};if(rm(e))om(n,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var i=n.lastRenderedState,l=s(i,t);if(o.hasEagerState=!0,o.eagerState=l,Sn(l,i)){var d=n.interleaved;d===null?(o.next=o,Yl(n)):(o.next=d.next,d.next=o),n.interleaved=o;return}}catch{}finally{}t=Lp(e,n,o,a),t!==null&&(o=Ge(),wn(t,e,a,o),sm(t,n,a))}}function rm(e){var n=e.alternate;return e===be||n!==null&&n===be}function om(e,n){tr=Fo=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function sm(e,n,t){if(t&4194240){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,Pl(e,t)}}var Go={readContext:xn,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},g0={readContext:xn,useCallback:function(e,n){return Nn().memoizedState=[e,n===void 0?null:n],e},useContext:xn,useEffect:vd,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,xo(4194308,4,Qp.bind(null,n,e),t)},useLayoutEffect:function(e,n){return xo(4194308,4,e,n)},useInsertionEffect:function(e,n){return xo(4,2,e,n)},useMemo:function(e,n){var t=Nn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var a=Nn();return n=t!==void 0?t(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=m0.bind(null,be,e),[a.memoizedState,e]},useRef:function(e){var n=Nn();return e={current:e},n.memoizedState=e},useState:bd,useDebugValue:oc,useDeferredValue:function(e){return Nn().memoizedState=e},useTransition:function(){var e=bd(!1),n=e[0];return e=p0.bind(null,e[1]),Nn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var a=be,o=Nn();if(ge){if(t===void 0)throw Error(U(407));t=t()}else{if(t=n(),De===null)throw Error(U(349));At&30||Fp(a,n,t)}o.memoizedState=t;var s={value:t,getSnapshot:n};return o.queue=s,vd(Hp.bind(null,a,s,e),[e]),a.flags|=2048,kr(9,Gp.bind(null,a,s,t,n),void 0,null),t},useId:function(){var e=Nn(),n=De.identifierPrefix;if(ge){var t=Kn,a=On;t=(a&~(1<<32-jn(a)-1)).toString(32)+t,n=":"+n+"R"+t,t=_r++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=u0++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},h0={readContext:xn,useCallback:em,useContext:xn,useEffect:rc,useImperativeHandle:qp,useInsertionEffect:Yp,useLayoutEffect:Xp,useMemo:nm,useReducer:li,useRef:Zp,useState:function(){return li(Ir)},useDebugValue:oc,useDeferredValue:function(e){var n=bn();return tm(n,Ne.memoizedState,e)},useTransition:function(){var e=li(Ir)[0],n=bn().memoizedState;return[e,n]},useMutableSource:Jp,useSyncExternalStore:Bp,useId:am,unstable_isNewReconciler:!1},x0={readContext:xn,useCallback:em,useContext:xn,useEffect:rc,useImperativeHandle:qp,useInsertionEffect:Yp,useLayoutEffect:Xp,useMemo:nm,useReducer:ci,useRef:Zp,useState:function(){return ci(Ir)},useDebugValue:oc,useDeferredValue:function(e){var n=bn();return Ne===null?n.memoizedState=e:tm(n,Ne.memoizedState,e)},useTransition:function(){var e=ci(Ir)[0],n=bn().memoizedState;return[e,n]},useMutableSource:Jp,useSyncExternalStore:Bp,useId:am,unstable_isNewReconciler:!1};function _n(e,n){if(e&&e.defaultProps){n=ye({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Xi(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:ye({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var _s={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var a=Ge(),o=dt(e),s=Jn(a,o);s.payload=n,t!=null&&(s.callback=t),n=lt(e,s,o),n!==null&&(wn(n,e,o,a),go(n,e,o))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=Ge(),o=dt(e),s=Jn(a,o);s.tag=1,s.payload=n,t!=null&&(s.callback=t),n=lt(e,s,o),n!==null&&(wn(n,e,o,a),go(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Ge(),a=dt(e),o=Jn(t,a);o.tag=2,n!=null&&(o.callback=n),n=lt(e,o,a),n!==null&&(wn(n,e,a,t),go(n,e,a))}};function yd(e,n,t,a,o,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,i):n.prototype&&n.prototype.isPureReactComponent?!gr(t,a)||!gr(o,s):!0}function im(e,n,t){var a=!1,o=ft,s=n.contextType;return typeof s=="object"&&s!==null?s=xn(s):(o=Qe(n)?Dt:Je.current,a=n.contextTypes,s=(a=a!=null)?va(e,o):ft),n=new n(t,s),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=_s,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=s),n}function _d(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&_s.enqueueReplaceState(n,n.state,null)}function Qi(e,n,t,a){var o=e.stateNode;o.props=t,o.state=e.memoizedState,o.refs={},Xl(e);var s=n.contextType;typeof s=="object"&&s!==null?o.context=xn(s):(s=Qe(n)?Dt:Je.current,o.context=va(e,s)),o.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Xi(e,n,s,t),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(n=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),n!==o.state&&_s.enqueueReplaceState(o,o.state,null),Jo(e,t,o,a),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ka(e,n){try{var t="",a=n;do t+=Gf(a),a=a.return;while(a);var o=t}catch(s){o=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:n,stack:o,digest:null}}function di(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function qi(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var b0=typeof WeakMap=="function"?WeakMap:Map;function lm(e,n,t){t=Jn(-1,t),t.tag=3,t.payload={element:null};var a=n.value;return t.callback=function(){Uo||(Uo=!0,cl=a),qi(e,n)},t}function cm(e,n,t){t=Jn(-1,t),t.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var o=n.value;t.payload=function(){return a(o)},t.callback=function(){qi(e,n)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){qi(e,n),typeof a!="function"&&(ct===null?ct=new Set([this]):ct.add(this));var i=n.stack;this.componentDidCatch(n.value,{componentStack:i!==null?i:""})}),t}function Id(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new b0;var o=new Set;a.set(n,o)}else o=a.get(n),o===void 0&&(o=new Set,a.set(n,o));o.has(t)||(o.add(t),e=D0.bind(null,e,n,t),n.then(e,e))}function kd(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function jd(e,n,t,a,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Jn(-1,1),n.tag=2,lt(t,n,1))),t.lanes|=1),e)}var v0=Wn.ReactCurrentOwner,Ze=!1;function Fe(e,n,t,a){n.child=e===null?Rp(n,null,t,a):_a(n,e.child,t,a)}function wd(e,n,t,a,o){t=t.render;var s=n.ref;return fa(n,o),a=tc(e,n,t,a,s,o),t=ac(),e!==null&&!Ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Un(e,n,o)):(ge&&t&&Fl(n),n.flags|=1,Fe(e,n,a,o),n.child)}function Sd(e,n,t,a,o){if(e===null){var s=t.type;return typeof s=="function"&&!mc(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=s,dm(e,n,s,a,o)):(e=_o(t.type,null,a,n,n.mode,o),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,!(e.lanes&o)){var i=s.memoizedProps;if(t=t.compare,t=t!==null?t:gr,t(i,a)&&e.ref===n.ref)return Un(e,n,o)}return n.flags|=1,e=ut(s,a),e.ref=n.ref,e.return=n,n.child=e}function dm(e,n,t,a,o){if(e!==null){var s=e.memoizedProps;if(gr(s,a)&&e.ref===n.ref)if(Ze=!1,n.pendingProps=a=s,(e.lanes&o)!==0)e.flags&131072&&(Ze=!0);else return n.lanes=e.lanes,Un(e,n,o)}return el(e,n,t,a,o)}function um(e,n,t){var a=n.pendingProps,o=a.children,s=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(sa,nn),nn|=t;else{if(!(t&1073741824))return e=s!==null?s.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ue(sa,nn),nn|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=s!==null?s.baseLanes:t,ue(sa,nn),nn|=a}else s!==null?(a=s.baseLanes|t,n.memoizedState=null):a=t,ue(sa,nn),nn|=a;return Fe(e,n,o,t),n.child}function pm(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function el(e,n,t,a,o){var s=Qe(t)?Dt:Je.current;return s=va(n,s),fa(n,o),t=tc(e,n,t,a,s,o),a=ac(),e!==null&&!Ze?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~o,Un(e,n,o)):(ge&&a&&Fl(n),n.flags|=1,Fe(e,n,t,o),n.child)}function Cd(e,n,t,a,o){if(Qe(t)){var s=!0;Vo(n)}else s=!1;if(fa(n,o),n.stateNode===null)bo(e,n),im(n,t,a),Qi(n,t,a,o),a=!0;else if(e===null){var i=n.stateNode,l=n.memoizedProps;i.props=l;var d=i.context,u=t.contextType;typeof u=="object"&&u!==null?u=xn(u):(u=Qe(t)?Dt:Je.current,u=va(n,u));var f=t.getDerivedStateFromProps,m=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==a||d!==u)&&_d(n,i,a,u),Qn=!1;var g=n.memoizedState;i.state=g,Jo(n,a,i,o),d=n.memoizedState,l!==a||g!==d||Xe.current||Qn?(typeof f=="function"&&(Xi(n,t,f,a),d=n.memoizedState),(l=Qn||yd(n,t,l,a,g,d,u))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=d),i.props=a,i.state=d,i.context=u,a=l):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{i=n.stateNode,Op(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:_n(n.type,l),i.props=u,m=n.pendingProps,g=i.context,d=t.contextType,typeof d=="object"&&d!==null?d=xn(d):(d=Qe(t)?Dt:Je.current,d=va(n,d));var h=t.getDerivedStateFromProps;(f=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==m||g!==d)&&_d(n,i,a,d),Qn=!1,g=n.memoizedState,i.state=g,Jo(n,a,i,o);var x=n.memoizedState;l!==m||g!==x||Xe.current||Qn?(typeof h=="function"&&(Xi(n,t,h,a),x=n.memoizedState),(u=Qn||yd(n,t,u,a,g,x,d)||!1)?(f||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,x,d),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,x,d)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=x),i.props=a,i.state=x,i.context=d,a=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(n.flags|=1024),a=!1)}return nl(e,n,t,a,s,o)}function nl(e,n,t,a,o,s){pm(e,n);var i=(n.flags&128)!==0;if(!a&&!i)return o&&pd(n,t,!1),Un(e,n,s);a=n.stateNode,v0.current=n;var l=i&&typeof t.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&i?(n.child=_a(n,e.child,null,s),n.child=_a(n,null,l,s)):Fe(e,n,l,s),n.memoizedState=a.state,o&&pd(n,t,!0),n.child}function mm(e){var n=e.stateNode;n.pendingContext?ud(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ud(e,n.context,!1),Ql(e,n.containerInfo)}function Nd(e,n,t,a,o){return ya(),Hl(o),n.flags|=256,Fe(e,n,t,a),n.child}var tl={dehydrated:null,treeContext:null,retryLane:0};function al(e){return{baseLanes:e,cachePool:null,transitions:null}}function fm(e,n,t){var a=n.pendingProps,o=xe.current,s=!1,i=(n.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(s=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ue(xe,o&1),e===null)return Zi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(i=a.children,e=a.fallback,s?(a=n.mode,s=n.child,i={mode:"hidden",children:i},!(a&1)&&s!==null?(s.childLanes=0,s.pendingProps=i):s=js(i,a,0,null),e=Tt(e,a,t,null),s.return=n,e.return=n,s.sibling=e,n.child=s,n.child.memoizedState=al(t),n.memoizedState=tl,e):sc(n,i));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return y0(e,n,i,a,l,o,t);if(s){s=a.fallback,i=n.mode,o=e.child,l=o.sibling;var d={mode:"hidden",children:a.children};return!(i&1)&&n.child!==o?(a=n.child,a.childLanes=0,a.pendingProps=d,n.deletions=null):(a=ut(o,d),a.subtreeFlags=o.subtreeFlags&14680064),l!==null?s=ut(l,s):(s=Tt(s,i,t,null),s.flags|=2),s.return=n,a.return=n,a.sibling=s,n.child=a,a=s,s=n.child,i=e.child.memoizedState,i=i===null?al(t):{baseLanes:i.baseLanes|t,cachePool:null,transitions:i.transitions},s.memoizedState=i,s.childLanes=e.childLanes&~t,n.memoizedState=tl,a}return s=e.child,e=s.sibling,a=ut(s,{mode:"visible",children:a.children}),!(n.mode&1)&&(a.lanes=t),a.return=n,a.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=a,n.memoizedState=null,a}function sc(e,n){return n=js({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Qr(e,n,t,a){return a!==null&&Hl(a),_a(n,e.child,null,t),e=sc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function y0(e,n,t,a,o,s,i){if(t)return n.flags&256?(n.flags&=-257,a=di(Error(U(422))),Qr(e,n,i,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(s=a.fallback,o=n.mode,a=js({mode:"visible",children:a.children},o,0,null),s=Tt(s,o,i,null),s.flags|=2,a.return=n,s.return=n,a.sibling=s,n.child=a,n.mode&1&&_a(n,e.child,null,i),n.child.memoizedState=al(i),n.memoizedState=tl,s);if(!(n.mode&1))return Qr(e,n,i,null);if(o.data==="$!"){if(a=o.nextSibling&&o.nextSibling.dataset,a)var l=a.dgst;return a=l,s=Error(U(419)),a=di(s,a,void 0),Qr(e,n,i,a)}if(l=(i&e.childLanes)!==0,Ze||l){if(a=De,a!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(a.suspendedLanes|i)?0:o,o!==0&&o!==s.retryLane&&(s.retryLane=o,Hn(e,o),wn(a,e,o,-1))}return pc(),a=di(Error(U(421))),Qr(e,n,i,a)}return o.data==="$?"?(n.flags|=128,n.child=e.child,n=$0.bind(null,e),o._reactRetry=n,null):(e=s.treeContext,an=it(o.nextSibling),rn=n,ge=!0,kn=null,e!==null&&(un[pn++]=On,un[pn++]=Kn,un[pn++]=$t,On=e.id,Kn=e.overflow,$t=n),n=sc(n,a.children),n.flags|=4096,n)}function Td(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Yi(e.return,n,t)}function ui(e,n,t,a,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:o}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=t,s.tailMode=o)}function gm(e,n,t){var a=n.pendingProps,o=a.revealOrder,s=a.tail;if(Fe(e,n,a.children,t),a=xe.current,a&2)a=a&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Td(e,t,n);else if(e.tag===19)Td(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ue(xe,a),!(n.mode&1))n.memoizedState=null;else switch(o){case"forwards":for(t=n.child,o=null;t!==null;)e=t.alternate,e!==null&&Bo(e)===null&&(o=t),t=t.sibling;t=o,t===null?(o=n.child,n.child=null):(o=t.sibling,t.sibling=null),ui(n,!1,o,t,s);break;case"backwards":for(t=null,o=n.child,n.child=null;o!==null;){if(e=o.alternate,e!==null&&Bo(e)===null){n.child=o;break}e=o.sibling,o.sibling=t,t=o,o=e}ui(n,!0,t,null,s);break;case"together":ui(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function bo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Un(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),zt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(U(153));if(n.child!==null){for(e=n.child,t=ut(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=ut(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function _0(e,n,t){switch(n.tag){case 3:mm(n),ya();break;case 5:Kp(n);break;case 1:Qe(n.type)&&Vo(n);break;case 4:Ql(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,o=n.memoizedProps.value;ue(Oo,a._currentValue),a._currentValue=o;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(ue(xe,xe.current&1),n.flags|=128,null):t&n.child.childLanes?fm(e,n,t):(ue(xe,xe.current&1),e=Un(e,n,t),e!==null?e.sibling:null);ue(xe,xe.current&1);break;case 19:if(a=(t&n.childLanes)!==0,e.flags&128){if(a)return gm(e,n,t);n.flags|=128}if(o=n.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ue(xe,xe.current),a)break;return null;case 22:case 23:return n.lanes=0,um(e,n,t)}return Un(e,n,t)}var hm,rl,xm,bm;hm=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};rl=function(){};xm=function(e,n,t,a){var o=e.memoizedProps;if(o!==a){e=n.stateNode,St(Dn.current);var s=null;switch(t){case"input":o=Si(e,o),a=Si(e,a),s=[];break;case"select":o=ye({},o,{value:void 0}),a=ye({},a,{value:void 0}),s=[];break;case"textarea":o=Ti(e,o),a=Ti(e,a),s=[];break;default:typeof o.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=zo)}Ei(t,a);var i;t=null;for(u in o)if(!a.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(i in l)l.hasOwnProperty(i)&&(t||(t={}),t[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(lr.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in a){var d=a[u];if(l=o!=null?o[u]:void 0,a.hasOwnProperty(u)&&d!==l&&(d!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||d&&d.hasOwnProperty(i)||(t||(t={}),t[i]="");for(i in d)d.hasOwnProperty(i)&&l[i]!==d[i]&&(t||(t={}),t[i]=d[i])}else t||(s||(s=[]),s.push(u,t)),t=d;else u==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,l=l?l.__html:void 0,d!=null&&l!==d&&(s=s||[]).push(u,d)):u==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(u,""+d):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(lr.hasOwnProperty(u)?(d!=null&&u==="onScroll"&&pe("scroll",e),s||l===d||(s=[])):(s=s||[]).push(u,d))}t&&(s=s||[]).push("style",t);var u=s;(n.updateQueue=u)&&(n.flags|=4)}};bm=function(e,n,t,a){t!==a&&(n.flags|=4)};function Ka(e,n){if(!ge)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Le(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var o=e.child;o!==null;)t|=o.lanes|o.childLanes,a|=o.subtreeFlags&14680064,a|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)t|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function I0(e,n,t){var a=n.pendingProps;switch(Gl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(n),null;case 1:return Qe(n.type)&&Po(),Le(n),null;case 3:return a=n.stateNode,Ia(),me(Xe),me(Je),ec(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Yr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,kn!==null&&(pl(kn),kn=null))),rl(e,n),Le(n),null;case 5:ql(n);var o=St(yr.current);if(t=n.type,e!==null&&n.stateNode!=null)xm(e,n,t,a,o),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(U(166));return Le(n),null}if(e=St(Dn.current),Yr(n)){a=n.stateNode,t=n.type;var s=n.memoizedProps;switch(a[Tn]=n,a[br]=s,e=(n.mode&1)!==0,t){case"dialog":pe("cancel",a),pe("close",a);break;case"iframe":case"object":case"embed":pe("load",a);break;case"video":case"audio":for(o=0;o<Ya.length;o++)pe(Ya[o],a);break;case"source":pe("error",a);break;case"img":case"image":case"link":pe("error",a),pe("load",a);break;case"details":pe("toggle",a);break;case"input":Rc(a,s),pe("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!s.multiple},pe("invalid",a);break;case"textarea":Oc(a,s),pe("invalid",a)}Ei(t,s),o=null;for(var i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="children"?typeof l=="string"?a.textContent!==l&&(s.suppressHydrationWarning!==!0&&Zr(a.textContent,l,e),o=["children",l]):typeof l=="number"&&a.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Zr(a.textContent,l,e),o=["children",""+l]):lr.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&pe("scroll",a)}switch(t){case"input":Kr(a),Lc(a,s,!0);break;case"textarea":Kr(a),Kc(a);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(a.onclick=zo)}a=o,n.updateQueue=a,a!==null&&(n.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hu(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=i.createElement(t,{is:a.is}):(e=i.createElement(t),t==="select"&&(i=e,a.multiple?i.multiple=!0:a.size&&(i.size=a.size))):e=i.createElementNS(e,t),e[Tn]=n,e[br]=a,hm(e,n,!1,!1),n.stateNode=e;e:{switch(i=Di(t,a),t){case"dialog":pe("cancel",e),pe("close",e),o=a;break;case"iframe":case"object":case"embed":pe("load",e),o=a;break;case"video":case"audio":for(o=0;o<Ya.length;o++)pe(Ya[o],e);o=a;break;case"source":pe("error",e),o=a;break;case"img":case"image":case"link":pe("error",e),pe("load",e),o=a;break;case"details":pe("toggle",e),o=a;break;case"input":Rc(e,a),o=Si(e,a),pe("invalid",e);break;case"option":o=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},o=ye({},a,{value:void 0}),pe("invalid",e);break;case"textarea":Oc(e,a),o=Ti(e,a),pe("invalid",e);break;default:o=a}Ei(t,o),l=o;for(s in l)if(l.hasOwnProperty(s)){var d=l[s];s==="style"?Zu(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Uu(e,d)):s==="children"?typeof d=="string"?(t!=="textarea"||d!=="")&&cr(e,d):typeof d=="number"&&cr(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(lr.hasOwnProperty(s)?d!=null&&s==="onScroll"&&pe("scroll",e):d!=null&&Ml(e,s,d,i))}switch(t){case"input":Kr(e),Lc(e,a,!1);break;case"textarea":Kr(e),Kc(e);break;case"option":a.value!=null&&e.setAttribute("value",""+mt(a.value));break;case"select":e.multiple=!!a.multiple,s=a.value,s!=null?da(e,!!a.multiple,s,!1):a.defaultValue!=null&&da(e,!!a.multiple,a.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=zo)}switch(t){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Le(n),null;case 6:if(e&&n.stateNode!=null)bm(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(U(166));if(t=St(yr.current),St(Dn.current),Yr(n)){if(a=n.stateNode,t=n.memoizedProps,a[Tn]=n,(s=a.nodeValue!==t)&&(e=rn,e!==null))switch(e.tag){case 3:Zr(a.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zr(a.nodeValue,t,(e.mode&1)!==0)}s&&(n.flags|=4)}else a=(t.nodeType===9?t:t.ownerDocument).createTextNode(a),a[Tn]=n,n.stateNode=a}return Le(n),null;case 13:if(me(xe),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&an!==null&&n.mode&1&&!(n.flags&128))Pp(),ya(),n.flags|=98560,s=!1;else if(s=Yr(n),a!==null&&a.dehydrated!==null){if(e===null){if(!s)throw Error(U(318));if(s=n.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[Tn]=n}else ya(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Le(n),s=!1}else kn!==null&&(pl(kn),kn=null),s=!0;if(!s)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,n.mode&1&&(e===null||xe.current&1?Me===0&&(Me=3):pc())),n.updateQueue!==null&&(n.flags|=4),Le(n),null);case 4:return Ia(),rl(e,n),e===null&&hr(n.stateNode.containerInfo),Le(n),null;case 10:return Zl(n.type._context),Le(n),null;case 17:return Qe(n.type)&&Po(),Le(n),null;case 19:if(me(xe),s=n.memoizedState,s===null)return Le(n),null;if(a=(n.flags&128)!==0,i=s.rendering,i===null)if(a)Ka(s,!1);else{if(Me!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(i=Bo(e),i!==null){for(n.flags|=128,Ka(s,!1),a=i.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=t,t=n.child;t!==null;)s=t,e=a,s.flags&=14680066,i=s.alternate,i===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,s.type=i.type,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ue(xe,xe.current&1|2),n.child}e=e.sibling}s.tail!==null&&ke()>ja&&(n.flags|=128,a=!0,Ka(s,!1),n.lanes=4194304)}else{if(!a)if(e=Bo(i),e!==null){if(n.flags|=128,a=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ka(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!ge)return Le(n),null}else 2*ke()-s.renderingStartTime>ja&&t!==1073741824&&(n.flags|=128,a=!0,Ka(s,!1),n.lanes=4194304);s.isBackwards?(i.sibling=n.child,n.child=i):(t=s.last,t!==null?t.sibling=i:n.child=i,s.last=i)}return s.tail!==null?(n=s.tail,s.rendering=n,s.tail=n.sibling,s.renderingStartTime=ke(),n.sibling=null,t=xe.current,ue(xe,a?t&1|2:t&1),n):(Le(n),null);case 22:case 23:return uc(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&n.mode&1?nn&1073741824&&(Le(n),n.subtreeFlags&6&&(n.flags|=8192)):Le(n),null;case 24:return null;case 25:return null}throw Error(U(156,n.tag))}function k0(e,n){switch(Gl(n),n.tag){case 1:return Qe(n.type)&&Po(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ia(),me(Xe),me(Je),ec(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ql(n),null;case 13:if(me(xe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(U(340));ya()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return me(xe),null;case 4:return Ia(),null;case 10:return Zl(n.type._context),null;case 22:case 23:return uc(),null;case 24:return null;default:return null}}var qr=!1,Oe=!1,j0=typeof WeakSet=="function"?WeakSet:Set,Y=null;function oa(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(a){_e(e,n,a)}else t.current=null}function ol(e,n,t){try{t()}catch(a){_e(e,n,a)}}var Md=!1;function w0(e,n){if(Ji=Do,e=kp(),Bl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var o=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var i=0,l=-1,d=-1,u=0,f=0,m=e,g=null;n:for(;;){for(var h;m!==t||o!==0&&m.nodeType!==3||(l=i+o),m!==s||a!==0&&m.nodeType!==3||(d=i+a),m.nodeType===3&&(i+=m.nodeValue.length),(h=m.firstChild)!==null;)g=m,m=h;for(;;){if(m===e)break n;if(g===t&&++u===o&&(l=i),g===s&&++f===a&&(d=i),(h=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=h}t=l===-1||d===-1?null:{start:l,end:d}}else t=null}t=t||{start:0,end:0}}else t=null;for(Bi={focusedElem:e,selectionRange:t},Do=!1,Y=n;Y!==null;)if(n=Y,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Y=e;else for(;Y!==null;){n=Y;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var p=x.memoizedProps,_=x.memoizedState,y=n.stateNode,b=y.getSnapshotBeforeUpdate(n.elementType===n.type?p:_n(n.type,p),_);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(j){_e(n,n.return,j)}if(e=n.sibling,e!==null){e.return=n.return,Y=e;break}Y=n.return}return x=Md,Md=!1,x}function ar(e,n,t){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var o=a=a.next;do{if((o.tag&e)===e){var s=o.destroy;o.destroy=void 0,s!==void 0&&ol(n,t,s)}o=o.next}while(o!==a)}}function Is(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var a=t.create;t.destroy=a()}t=t.next}while(t!==n)}}function sl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function vm(e){var n=e.alternate;n!==null&&(e.alternate=null,vm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Tn],delete n[br],delete n[Hi],delete n[i0],delete n[l0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ym(e){return e.tag===5||e.tag===3||e.tag===4}function Ed(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ym(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function il(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=zo));else if(a!==4&&(e=e.child,e!==null))for(il(e,n,t),e=e.sibling;e!==null;)il(e,n,t),e=e.sibling}function ll(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(ll(e,n,t),e=e.sibling;e!==null;)ll(e,n,t),e=e.sibling}var $e=null,In=!1;function Yn(e,n,t){for(t=t.child;t!==null;)_m(e,n,t),t=t.sibling}function _m(e,n,t){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(fs,t)}catch{}switch(t.tag){case 5:Oe||oa(t,n);case 6:var a=$e,o=In;$e=null,Yn(e,n,t),$e=a,In=o,$e!==null&&(In?(e=$e,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):$e.removeChild(t.stateNode));break;case 18:$e!==null&&(In?(e=$e,t=t.stateNode,e.nodeType===8?ri(e.parentNode,t):e.nodeType===1&&ri(e,t),mr(e)):ri($e,t.stateNode));break;case 4:a=$e,o=In,$e=t.stateNode.containerInfo,In=!0,Yn(e,n,t),$e=a,In=o;break;case 0:case 11:case 14:case 15:if(!Oe&&(a=t.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){o=a=a.next;do{var s=o,i=s.destroy;s=s.tag,i!==void 0&&(s&2||s&4)&&ol(t,n,i),o=o.next}while(o!==a)}Yn(e,n,t);break;case 1:if(!Oe&&(oa(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=t.memoizedProps,a.state=t.memoizedState,a.componentWillUnmount()}catch(l){_e(t,n,l)}Yn(e,n,t);break;case 21:Yn(e,n,t);break;case 22:t.mode&1?(Oe=(a=Oe)||t.memoizedState!==null,Yn(e,n,t),Oe=a):Yn(e,n,t);break;default:Yn(e,n,t)}}function Dd(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new j0),n.forEach(function(a){var o=A0.bind(null,e,a);t.has(a)||(t.add(a),a.then(o,o))})}}function yn(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var o=t[a];try{var s=e,i=n,l=i;e:for(;l!==null;){switch(l.tag){case 5:$e=l.stateNode,In=!1;break e;case 3:$e=l.stateNode.containerInfo,In=!0;break e;case 4:$e=l.stateNode.containerInfo,In=!0;break e}l=l.return}if($e===null)throw Error(U(160));_m(s,i,o),$e=null,In=!1;var d=o.alternate;d!==null&&(d.return=null),o.return=null}catch(u){_e(o,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Im(n,e),n=n.sibling}function Im(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yn(n,e),Cn(e),a&4){try{ar(3,e,e.return),Is(3,e)}catch(p){_e(e,e.return,p)}try{ar(5,e,e.return)}catch(p){_e(e,e.return,p)}}break;case 1:yn(n,e),Cn(e),a&512&&t!==null&&oa(t,t.return);break;case 5:if(yn(n,e),Cn(e),a&512&&t!==null&&oa(t,t.return),e.flags&32){var o=e.stateNode;try{cr(o,"")}catch(p){_e(e,e.return,p)}}if(a&4&&(o=e.stateNode,o!=null)){var s=e.memoizedProps,i=t!==null?t.memoizedProps:s,l=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Fu(o,s),Di(l,i);var u=Di(l,s);for(i=0;i<d.length;i+=2){var f=d[i],m=d[i+1];f==="style"?Zu(o,m):f==="dangerouslySetInnerHTML"?Uu(o,m):f==="children"?cr(o,m):Ml(o,f,m,u)}switch(l){case"input":Ci(o,s);break;case"textarea":Gu(o,s);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?da(o,!!s.multiple,h,!1):g!==!!s.multiple&&(s.defaultValue!=null?da(o,!!s.multiple,s.defaultValue,!0):da(o,!!s.multiple,s.multiple?[]:"",!1))}o[br]=s}catch(p){_e(e,e.return,p)}}break;case 6:if(yn(n,e),Cn(e),a&4){if(e.stateNode===null)throw Error(U(162));o=e.stateNode,s=e.memoizedProps;try{o.nodeValue=s}catch(p){_e(e,e.return,p)}}break;case 3:if(yn(n,e),Cn(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{mr(n.containerInfo)}catch(p){_e(e,e.return,p)}break;case 4:yn(n,e),Cn(e);break;case 13:yn(n,e),Cn(e),o=e.child,o.flags&8192&&(s=o.memoizedState!==null,o.stateNode.isHidden=s,!s||o.alternate!==null&&o.alternate.memoizedState!==null||(cc=ke())),a&4&&Dd(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(Oe=(u=Oe)||f,yn(n,e),Oe=u):yn(n,e),Cn(e),a&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(Y=e,f=e.child;f!==null;){for(m=Y=f;Y!==null;){switch(g=Y,h=g.child,g.tag){case 0:case 11:case 14:case 15:ar(4,g,g.return);break;case 1:oa(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){a=g,t=g.return;try{n=a,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(p){_e(a,t,p)}}break;case 5:oa(g,g.return);break;case 22:if(g.memoizedState!==null){Ad(m);continue}}h!==null?(h.return=g,Y=h):Ad(m)}f=f.sibling}e:for(f=null,m=e;;){if(m.tag===5){if(f===null){f=m;try{o=m.stateNode,u?(s=o.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,d=m.memoizedProps.style,i=d!=null&&d.hasOwnProperty("display")?d.display:null,l.style.display=Wu("display",i))}catch(p){_e(e,e.return,p)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(p){_e(e,e.return,p)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:yn(n,e),Cn(e),a&4&&Dd(e);break;case 21:break;default:yn(n,e),Cn(e)}}function Cn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(ym(t)){var a=t;break e}t=t.return}throw Error(U(160))}switch(a.tag){case 5:var o=a.stateNode;a.flags&32&&(cr(o,""),a.flags&=-33);var s=Ed(e);ll(e,s,o);break;case 3:case 4:var i=a.stateNode.containerInfo,l=Ed(e);il(e,l,i);break;default:throw Error(U(161))}}catch(d){_e(e,e.return,d)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function S0(e,n,t){Y=e,km(e)}function km(e,n,t){for(var a=(e.mode&1)!==0;Y!==null;){var o=Y,s=o.child;if(o.tag===22&&a){var i=o.memoizedState!==null||qr;if(!i){var l=o.alternate,d=l!==null&&l.memoizedState!==null||Oe;l=qr;var u=Oe;if(qr=i,(Oe=d)&&!u)for(Y=o;Y!==null;)i=Y,d=i.child,i.tag===22&&i.memoizedState!==null?zd(o):d!==null?(d.return=i,Y=d):zd(o);for(;s!==null;)Y=s,km(s),s=s.sibling;Y=o,qr=l,Oe=u}$d(e)}else o.subtreeFlags&8772&&s!==null?(s.return=o,Y=s):$d(e)}}function $d(e){for(;Y!==null;){var n=Y;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Oe||Is(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!Oe)if(t===null)a.componentDidMount();else{var o=n.elementType===n.type?t.memoizedProps:_n(n.type,t.memoizedProps);a.componentDidUpdate(o,t.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var s=n.updateQueue;s!==null&&xd(n,s,a);break;case 3:var i=n.updateQueue;if(i!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}xd(n,i,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var d=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&t.focus();break;case"img":d.src&&(t.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&mr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}Oe||n.flags&512&&sl(n)}catch(g){_e(n,n.return,g)}}if(n===e){Y=null;break}if(t=n.sibling,t!==null){t.return=n.return,Y=t;break}Y=n.return}}function Ad(e){for(;Y!==null;){var n=Y;if(n===e){Y=null;break}var t=n.sibling;if(t!==null){t.return=n.return,Y=t;break}Y=n.return}}function zd(e){for(;Y!==null;){var n=Y;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Is(4,n)}catch(d){_e(n,t,d)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var o=n.return;try{a.componentDidMount()}catch(d){_e(n,o,d)}}var s=n.return;try{sl(n)}catch(d){_e(n,s,d)}break;case 5:var i=n.return;try{sl(n)}catch(d){_e(n,i,d)}}}catch(d){_e(n,n.return,d)}if(n===e){Y=null;break}var l=n.sibling;if(l!==null){l.return=n.return,Y=l;break}Y=n.return}}var C0=Math.ceil,Ho=Wn.ReactCurrentDispatcher,ic=Wn.ReactCurrentOwner,fn=Wn.ReactCurrentBatchConfig,oe=0,De=null,Se=null,ze=0,nn=0,sa=bt(0),Me=0,jr=null,zt=0,ks=0,lc=0,rr=null,We=null,cc=0,ja=1/0,Vn=null,Uo=!1,cl=null,ct=null,eo=!1,at=null,Wo=0,or=0,dl=null,vo=-1,yo=0;function Ge(){return oe&6?ke():vo!==-1?vo:vo=ke()}function dt(e){return e.mode&1?oe&2&&ze!==0?ze&-ze:d0.transition!==null?(yo===0&&(yo=ip()),yo):(e=ce,e!==0||(e=window.event,e=e===void 0?16:fp(e.type)),e):1}function wn(e,n,t,a){if(50<or)throw or=0,dl=null,Error(U(185));Er(e,t,a),(!(oe&2)||e!==De)&&(e===De&&(!(oe&2)&&(ks|=t),Me===4&&et(e,ze)),qe(e,a),t===1&&oe===0&&!(n.mode&1)&&(ja=ke()+500,vs&&vt()))}function qe(e,n){var t=e.callbackNode;dg(e,n);var a=Eo(e,e===De?ze:0);if(a===0)t!==null&&Fc(t),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(t!=null&&Fc(t),n===1)e.tag===0?c0(Pd.bind(null,e)):$p(Pd.bind(null,e)),o0(function(){!(oe&6)&&vt()}),t=null;else{switch(lp(a)){case 1:t=zl;break;case 4:t=op;break;case 16:t=Mo;break;case 536870912:t=sp;break;default:t=Mo}t=Em(t,jm.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function jm(e,n){if(vo=-1,yo=0,oe&6)throw Error(U(327));var t=e.callbackNode;if(ga()&&e.callbackNode!==t)return null;var a=Eo(e,e===De?ze:0);if(a===0)return null;if(a&30||a&e.expiredLanes||n)n=Zo(e,a);else{n=a;var o=oe;oe|=2;var s=Sm();(De!==e||ze!==n)&&(Vn=null,ja=ke()+500,Nt(e,n));do try{M0();break}catch(l){wm(e,l)}while(!0);Wl(),Ho.current=s,oe=o,Se!==null?n=0:(De=null,ze=0,n=Me)}if(n!==0){if(n===2&&(o=Vi(e),o!==0&&(a=o,n=ul(e,o))),n===1)throw t=jr,Nt(e,0),et(e,a),qe(e,ke()),t;if(n===6)et(e,a);else{if(o=e.current.alternate,!(a&30)&&!N0(o)&&(n=Zo(e,a),n===2&&(s=Vi(e),s!==0&&(a=s,n=ul(e,s))),n===1))throw t=jr,Nt(e,0),et(e,a),qe(e,ke()),t;switch(e.finishedWork=o,e.finishedLanes=a,n){case 0:case 1:throw Error(U(345));case 2:It(e,We,Vn);break;case 3:if(et(e,a),(a&130023424)===a&&(n=cc+500-ke(),10<n)){if(Eo(e,0)!==0)break;if(o=e.suspendedLanes,(o&a)!==a){Ge(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Gi(It.bind(null,e,We,Vn),n);break}It(e,We,Vn);break;case 4:if(et(e,a),(a&4194240)===a)break;for(n=e.eventTimes,o=-1;0<a;){var i=31-jn(a);s=1<<i,i=n[i],i>o&&(o=i),a&=~s}if(a=o,a=ke()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*C0(a/1960))-a,10<a){e.timeoutHandle=Gi(It.bind(null,e,We,Vn),a);break}It(e,We,Vn);break;case 5:It(e,We,Vn);break;default:throw Error(U(329))}}}return qe(e,ke()),e.callbackNode===t?jm.bind(null,e):null}function ul(e,n){var t=rr;return e.current.memoizedState.isDehydrated&&(Nt(e,n).flags|=256),e=Zo(e,n),e!==2&&(n=We,We=t,n!==null&&pl(n)),e}function pl(e){We===null?We=e:We.push.apply(We,e)}function N0(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var a=0;a<t.length;a++){var o=t[a],s=o.getSnapshot;o=o.value;try{if(!Sn(s(),o))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function et(e,n){for(n&=~lc,n&=~ks,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-jn(n),a=1<<t;e[t]=-1,n&=~a}}function Pd(e){if(oe&6)throw Error(U(327));ga();var n=Eo(e,0);if(!(n&1))return qe(e,ke()),null;var t=Zo(e,n);if(e.tag!==0&&t===2){var a=Vi(e);a!==0&&(n=a,t=ul(e,a))}if(t===1)throw t=jr,Nt(e,0),et(e,n),qe(e,ke()),t;if(t===6)throw Error(U(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,It(e,We,Vn),qe(e,ke()),null}function dc(e,n){var t=oe;oe|=1;try{return e(n)}finally{oe=t,oe===0&&(ja=ke()+500,vs&&vt())}}function Pt(e){at!==null&&at.tag===0&&!(oe&6)&&ga();var n=oe;oe|=1;var t=fn.transition,a=ce;try{if(fn.transition=null,ce=1,e)return e()}finally{ce=a,fn.transition=t,oe=n,!(oe&6)&&vt()}}function uc(){nn=sa.current,me(sa)}function Nt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,r0(t)),Se!==null)for(t=Se.return;t!==null;){var a=t;switch(Gl(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Po();break;case 3:Ia(),me(Xe),me(Je),ec();break;case 5:ql(a);break;case 4:Ia();break;case 13:me(xe);break;case 19:me(xe);break;case 10:Zl(a.type._context);break;case 22:case 23:uc()}t=t.return}if(De=e,Se=e=ut(e.current,null),ze=nn=n,Me=0,jr=null,lc=ks=zt=0,We=rr=null,wt!==null){for(n=0;n<wt.length;n++)if(t=wt[n],a=t.interleaved,a!==null){t.interleaved=null;var o=a.next,s=t.pending;if(s!==null){var i=s.next;s.next=o,a.next=i}t.pending=a}wt=null}return e}function wm(e,n){do{var t=Se;try{if(Wl(),ho.current=Go,Fo){for(var a=be.memoizedState;a!==null;){var o=a.queue;o!==null&&(o.pending=null),a=a.next}Fo=!1}if(At=0,Ee=Ne=be=null,tr=!1,_r=0,ic.current=null,t===null||t.return===null){Me=1,jr=n,Se=null;break}e:{var s=e,i=t.return,l=t,d=n;if(n=ze,l.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var u=d,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var h=kd(i);if(h!==null){h.flags&=-257,jd(h,i,l,s,n),h.mode&1&&Id(s,u,n),n=h,d=u;var x=n.updateQueue;if(x===null){var p=new Set;p.add(d),n.updateQueue=p}else x.add(d);break e}else{if(!(n&1)){Id(s,u,n),pc();break e}d=Error(U(426))}}else if(ge&&l.mode&1){var _=kd(i);if(_!==null){!(_.flags&65536)&&(_.flags|=256),jd(_,i,l,s,n),Hl(ka(d,l));break e}}s=d=ka(d,l),Me!==4&&(Me=2),rr===null?rr=[s]:rr.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,n&=-n,s.lanes|=n;var y=lm(s,d,n);hd(s,y);break e;case 1:l=d;var b=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof b.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ct===null||!ct.has(v)))){s.flags|=65536,n&=-n,s.lanes|=n;var j=cm(s,l,n);hd(s,j);break e}}s=s.return}while(s!==null)}Nm(t)}catch(C){n=C,Se===t&&t!==null&&(Se=t=t.return);continue}break}while(!0)}function Sm(){var e=Ho.current;return Ho.current=Go,e===null?Go:e}function pc(){(Me===0||Me===3||Me===2)&&(Me=4),De===null||!(zt&268435455)&&!(ks&268435455)||et(De,ze)}function Zo(e,n){var t=oe;oe|=2;var a=Sm();(De!==e||ze!==n)&&(Vn=null,Nt(e,n));do try{T0();break}catch(o){wm(e,o)}while(!0);if(Wl(),oe=t,Ho.current=a,Se!==null)throw Error(U(261));return De=null,ze=0,Me}function T0(){for(;Se!==null;)Cm(Se)}function M0(){for(;Se!==null&&!ng();)Cm(Se)}function Cm(e){var n=Mm(e.alternate,e,nn);e.memoizedProps=e.pendingProps,n===null?Nm(e):Se=n,ic.current=null}function Nm(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=k0(t,n),t!==null){t.flags&=32767,Se=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,Se=null;return}}else if(t=I0(t,n,nn),t!==null){Se=t;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=e}while(n!==null);Me===0&&(Me=5)}function It(e,n,t){var a=ce,o=fn.transition;try{fn.transition=null,ce=1,E0(e,n,t,a)}finally{fn.transition=o,ce=a}return null}function E0(e,n,t,a){do ga();while(at!==null);if(oe&6)throw Error(U(327));t=e.finishedWork;var o=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(U(177));e.callbackNode=null,e.callbackPriority=0;var s=t.lanes|t.childLanes;if(ug(e,s),e===De&&(Se=De=null,ze=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||eo||(eo=!0,Em(Mo,function(){return ga(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=fn.transition,fn.transition=null;var i=ce;ce=1;var l=oe;oe|=4,ic.current=null,w0(e,t),Im(t,e),Xg(Bi),Do=!!Ji,Bi=Ji=null,e.current=t,S0(t),tg(),oe=l,ce=i,fn.transition=s}else e.current=t;if(eo&&(eo=!1,at=e,Wo=o),s=e.pendingLanes,s===0&&(ct=null),og(t.stateNode),qe(e,ke()),n!==null)for(a=e.onRecoverableError,t=0;t<n.length;t++)o=n[t],a(o.value,{componentStack:o.stack,digest:o.digest});if(Uo)throw Uo=!1,e=cl,cl=null,e;return Wo&1&&e.tag!==0&&ga(),s=e.pendingLanes,s&1?e===dl?or++:(or=0,dl=e):or=0,vt(),null}function ga(){if(at!==null){var e=lp(Wo),n=fn.transition,t=ce;try{if(fn.transition=null,ce=16>e?16:e,at===null)var a=!1;else{if(e=at,at=null,Wo=0,oe&6)throw Error(U(331));var o=oe;for(oe|=4,Y=e.current;Y!==null;){var s=Y,i=s.child;if(Y.flags&16){var l=s.deletions;if(l!==null){for(var d=0;d<l.length;d++){var u=l[d];for(Y=u;Y!==null;){var f=Y;switch(f.tag){case 0:case 11:case 15:ar(8,f,s)}var m=f.child;if(m!==null)m.return=f,Y=m;else for(;Y!==null;){f=Y;var g=f.sibling,h=f.return;if(vm(f),f===u){Y=null;break}if(g!==null){g.return=h,Y=g;break}Y=h}}}var x=s.alternate;if(x!==null){var p=x.child;if(p!==null){x.child=null;do{var _=p.sibling;p.sibling=null,p=_}while(p!==null)}}Y=s}}if(s.subtreeFlags&2064&&i!==null)i.return=s,Y=i;else e:for(;Y!==null;){if(s=Y,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ar(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,Y=y;break e}Y=s.return}}var b=e.current;for(Y=b;Y!==null;){i=Y;var v=i.child;if(i.subtreeFlags&2064&&v!==null)v.return=i,Y=v;else e:for(i=b;Y!==null;){if(l=Y,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Is(9,l)}}catch(C){_e(l,l.return,C)}if(l===i){Y=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,Y=j;break e}Y=l.return}}if(oe=o,vt(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(fs,e)}catch{}a=!0}return a}finally{ce=t,fn.transition=n}}return!1}function Vd(e,n,t){n=ka(t,n),n=lm(e,n,1),e=lt(e,n,1),n=Ge(),e!==null&&(Er(e,1,n),qe(e,n))}function _e(e,n,t){if(e.tag===3)Vd(e,e,t);else for(;n!==null;){if(n.tag===3){Vd(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ct===null||!ct.has(a))){e=ka(t,e),e=cm(n,e,1),n=lt(n,e,1),e=Ge(),n!==null&&(Er(n,1,e),qe(n,e));break}}n=n.return}}function D0(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),n=Ge(),e.pingedLanes|=e.suspendedLanes&t,De===e&&(ze&t)===t&&(Me===4||Me===3&&(ze&130023424)===ze&&500>ke()-cc?Nt(e,0):lc|=t),qe(e,n)}function Tm(e,n){n===0&&(e.mode&1?(n=Fr,Fr<<=1,!(Fr&130023424)&&(Fr=4194304)):n=1);var t=Ge();e=Hn(e,n),e!==null&&(Er(e,n,t),qe(e,t))}function $0(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Tm(e,t)}function A0(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(t=o.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(U(314))}a!==null&&a.delete(n),Tm(e,t)}var Mm;Mm=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Xe.current)Ze=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ze=!1,_0(e,n,t);Ze=!!(e.flags&131072)}else Ze=!1,ge&&n.flags&1048576&&Ap(n,Lo,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;bo(e,n),e=n.pendingProps;var o=va(n,Je.current);fa(n,t),o=tc(null,n,a,e,o,t);var s=ac();return n.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Qe(a)?(s=!0,Vo(n)):s=!1,n.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Xl(n),o.updater=_s,n.stateNode=o,o._reactInternals=n,Qi(n,a,e,t),n=nl(null,n,a,!0,s,t)):(n.tag=0,ge&&s&&Fl(n),Fe(null,n,o,t),n=n.child),n;case 16:a=n.elementType;e:{switch(bo(e,n),e=n.pendingProps,o=a._init,a=o(a._payload),n.type=a,o=n.tag=P0(a),e=_n(a,e),o){case 0:n=el(null,n,a,e,t);break e;case 1:n=Cd(null,n,a,e,t);break e;case 11:n=wd(null,n,a,e,t);break e;case 14:n=Sd(null,n,a,_n(a.type,e),t);break e}throw Error(U(306,a,""))}return n;case 0:return a=n.type,o=n.pendingProps,o=n.elementType===a?o:_n(a,o),el(e,n,a,o,t);case 1:return a=n.type,o=n.pendingProps,o=n.elementType===a?o:_n(a,o),Cd(e,n,a,o,t);case 3:e:{if(mm(n),e===null)throw Error(U(387));a=n.pendingProps,s=n.memoizedState,o=s.element,Op(e,n),Jo(n,a,null,t);var i=n.memoizedState;if(a=i.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){o=ka(Error(U(423)),n),n=Nd(e,n,a,t,o);break e}else if(a!==o){o=ka(Error(U(424)),n),n=Nd(e,n,a,t,o);break e}else for(an=it(n.stateNode.containerInfo.firstChild),rn=n,ge=!0,kn=null,t=Rp(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ya(),a===o){n=Un(e,n,t);break e}Fe(e,n,a,t)}n=n.child}return n;case 5:return Kp(n),e===null&&Zi(n),a=n.type,o=n.pendingProps,s=e!==null?e.memoizedProps:null,i=o.children,Fi(a,o)?i=null:s!==null&&Fi(a,s)&&(n.flags|=32),pm(e,n),Fe(e,n,i,t),n.child;case 6:return e===null&&Zi(n),null;case 13:return fm(e,n,t);case 4:return Ql(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=_a(n,null,a,t):Fe(e,n,a,t),n.child;case 11:return a=n.type,o=n.pendingProps,o=n.elementType===a?o:_n(a,o),wd(e,n,a,o,t);case 7:return Fe(e,n,n.pendingProps,t),n.child;case 8:return Fe(e,n,n.pendingProps.children,t),n.child;case 12:return Fe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(a=n.type._context,o=n.pendingProps,s=n.memoizedProps,i=o.value,ue(Oo,a._currentValue),a._currentValue=i,s!==null)if(Sn(s.value,i)){if(s.children===o.children&&!Xe.current){n=Un(e,n,t);break e}}else for(s=n.child,s!==null&&(s.return=n);s!==null;){var l=s.dependencies;if(l!==null){i=s.child;for(var d=l.firstContext;d!==null;){if(d.context===a){if(s.tag===1){d=Jn(-1,t&-t),d.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?d.next=d:(d.next=f.next,f.next=d),u.pending=d}}s.lanes|=t,d=s.alternate,d!==null&&(d.lanes|=t),Yi(s.return,t,n),l.lanes|=t;break}d=d.next}}else if(s.tag===10)i=s.type===n.type?null:s.child;else if(s.tag===18){if(i=s.return,i===null)throw Error(U(341));i.lanes|=t,l=i.alternate,l!==null&&(l.lanes|=t),Yi(i,t,n),i=s.sibling}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===n){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}Fe(e,n,o.children,t),n=n.child}return n;case 9:return o=n.type,a=n.pendingProps.children,fa(n,t),o=xn(o),a=a(o),n.flags|=1,Fe(e,n,a,t),n.child;case 14:return a=n.type,o=_n(a,n.pendingProps),o=_n(a.type,o),Sd(e,n,a,o,t);case 15:return dm(e,n,n.type,n.pendingProps,t);case 17:return a=n.type,o=n.pendingProps,o=n.elementType===a?o:_n(a,o),bo(e,n),n.tag=1,Qe(a)?(e=!0,Vo(n)):e=!1,fa(n,t),im(n,a,o),Qi(n,a,o,t),nl(null,n,a,!0,e,t);case 19:return gm(e,n,t);case 22:return um(e,n,t)}throw Error(U(156,n.tag))};function Em(e,n){return rp(e,n)}function z0(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mn(e,n,t,a){return new z0(e,n,t,a)}function mc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function P0(e){if(typeof e=="function")return mc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Dl)return 11;if(e===$l)return 14}return 2}function ut(e,n){var t=e.alternate;return t===null?(t=mn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function _o(e,n,t,a,o,s){var i=2;if(a=e,typeof e=="function")mc(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Yt:return Tt(t.children,o,s,n);case El:i=8,o|=8;break;case Ii:return e=mn(12,t,n,o|2),e.elementType=Ii,e.lanes=s,e;case ki:return e=mn(13,t,n,o),e.elementType=ki,e.lanes=s,e;case ji:return e=mn(19,t,n,o),e.elementType=ji,e.lanes=s,e;case Ku:return js(t,o,s,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lu:i=10;break e;case Ou:i=9;break e;case Dl:i=11;break e;case $l:i=14;break e;case Xn:i=16,a=null;break e}throw Error(U(130,e==null?e:typeof e,""))}return n=mn(i,t,n,o),n.elementType=e,n.type=a,n.lanes=s,n}function Tt(e,n,t,a){return e=mn(7,e,a,n),e.lanes=t,e}function js(e,n,t,a){return e=mn(22,e,a,n),e.elementType=Ku,e.lanes=t,e.stateNode={isHidden:!1},e}function pi(e,n,t){return e=mn(6,e,null,n),e.lanes=t,e}function mi(e,n,t){return n=mn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function V0(e,n,t,a,o){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Us(0),this.expirationTimes=Us(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Us(0),this.identifierPrefix=a,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function fc(e,n,t,a,o,s,i,l,d){return e=new V0(e,n,t,l,d),n===1?(n=1,s===!0&&(n|=8)):n=0,s=mn(3,null,null,n),e.current=s,s.stateNode=e,s.memoizedState={element:a,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xl(s),e}function R0(e,n,t){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zt,key:a==null?null:""+a,children:e,containerInfo:n,implementation:t}}function Dm(e){if(!e)return ft;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(U(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Qe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(U(171))}if(e.tag===1){var t=e.type;if(Qe(t))return Dp(e,t,n)}return n}function $m(e,n,t,a,o,s,i,l,d){return e=fc(t,a,!0,e,o,s,i,l,d),e.context=Dm(null),t=e.current,a=Ge(),o=dt(t),s=Jn(a,o),s.callback=n??null,lt(t,s,o),e.current.lanes=o,Er(e,o,a),qe(e,a),e}function ws(e,n,t,a){var o=n.current,s=Ge(),i=dt(o);return t=Dm(t),n.context===null?n.context=t:n.pendingContext=t,n=Jn(s,i),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=lt(o,n,i),e!==null&&(wn(e,o,i,s),go(e,o,i)),i}function Yo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Rd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function gc(e,n){Rd(e,n),(e=e.alternate)&&Rd(e,n)}function L0(){return null}var Am=typeof reportError=="function"?reportError:function(e){console.error(e)};function hc(e){this._internalRoot=e}Ss.prototype.render=hc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(U(409));ws(e,n,null,null)};Ss.prototype.unmount=hc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Pt(function(){ws(null,e,null,null)}),n[Gn]=null}};function Ss(e){this._internalRoot=e}Ss.prototype.unstable_scheduleHydration=function(e){if(e){var n=up();e={blockedOn:null,target:e,priority:n};for(var t=0;t<qn.length&&n!==0&&n<qn[t].priority;t++);qn.splice(t,0,e),t===0&&mp(e)}};function xc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ld(){}function O0(e,n,t,a,o){if(o){if(typeof a=="function"){var s=a;a=function(){var u=Yo(i);s.call(u)}}var i=$m(n,a,e,0,null,!1,!1,"",Ld);return e._reactRootContainer=i,e[Gn]=i.current,hr(e.nodeType===8?e.parentNode:e),Pt(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof a=="function"){var l=a;a=function(){var u=Yo(d);l.call(u)}}var d=fc(e,0,!1,null,null,!1,!1,"",Ld);return e._reactRootContainer=d,e[Gn]=d.current,hr(e.nodeType===8?e.parentNode:e),Pt(function(){ws(n,d,t,a)}),d}function Ns(e,n,t,a,o){var s=t._reactRootContainer;if(s){var i=s;if(typeof o=="function"){var l=o;o=function(){var d=Yo(i);l.call(d)}}ws(n,i,e,o)}else i=O0(t,n,e,o,a);return Yo(i)}cp=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Za(n.pendingLanes);t!==0&&(Pl(n,t|1),qe(n,ke()),!(oe&6)&&(ja=ke()+500,vt()))}break;case 13:Pt(function(){var a=Hn(e,1);if(a!==null){var o=Ge();wn(a,e,1,o)}}),gc(e,1)}};Vl=function(e){if(e.tag===13){var n=Hn(e,134217728);if(n!==null){var t=Ge();wn(n,e,134217728,t)}gc(e,134217728)}};dp=function(e){if(e.tag===13){var n=dt(e),t=Hn(e,n);if(t!==null){var a=Ge();wn(t,e,n,a)}gc(e,n)}};up=function(){return ce};pp=function(e,n){var t=ce;try{return ce=e,n()}finally{ce=t}};Ai=function(e,n,t){switch(n){case"input":if(Ci(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var o=bs(a);if(!o)throw Error(U(90));Bu(a),Ci(a,o)}}}break;case"textarea":Gu(e,t);break;case"select":n=t.value,n!=null&&da(e,!!t.multiple,n,!1)}};Qu=dc;qu=Pt;var K0={usingClientEntryPoint:!1,Events:[$r,ea,bs,Yu,Xu,dc]},Ja={findFiberByHostInstance:jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},J0={bundleType:Ja.bundleType,version:Ja.version,rendererPackageName:Ja.rendererPackageName,rendererConfig:Ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tp(e),e===null?null:e.stateNode},findFiberByHostInstance:Ja.findFiberByHostInstance||L0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var no=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!no.isDisabled&&no.supportsFiber)try{fs=no.inject(J0),En=no}catch{}}ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K0;ln.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xc(n))throw Error(U(200));return R0(e,n,null,t)};ln.createRoot=function(e,n){if(!xc(e))throw Error(U(299));var t=!1,a="",o=Am;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=fc(e,1,!1,null,null,t,!1,a,o),e[Gn]=n.current,hr(e.nodeType===8?e.parentNode:e),new hc(n)};ln.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(U(188)):(e=Object.keys(e).join(","),Error(U(268,e)));return e=tp(n),e=e===null?null:e.stateNode,e};ln.flushSync=function(e){return Pt(e)};ln.hydrate=function(e,n,t){if(!Cs(n))throw Error(U(200));return Ns(null,e,n,!0,t)};ln.hydrateRoot=function(e,n,t){if(!xc(e))throw Error(U(405));var a=t!=null&&t.hydratedSources||null,o=!1,s="",i=Am;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),n=$m(n,null,e,1,t??null,o,!1,s,i),e[Gn]=n.current,hr(e),a)for(e=0;e<a.length;e++)t=a[e],o=t._getVersion,o=o(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,o]:n.mutableSourceEagerHydrationData.push(t,o);return new Ss(n)};ln.render=function(e,n,t){if(!Cs(n))throw Error(U(200));return Ns(null,e,n,!1,t)};ln.unmountComponentAtNode=function(e){if(!Cs(e))throw Error(U(40));return e._reactRootContainer?(Pt(function(){Ns(null,null,e,!1,function(){e._reactRootContainer=null,e[Gn]=null})}),!0):!1};ln.unstable_batchedUpdates=dc;ln.unstable_renderSubtreeIntoContainer=function(e,n,t,a){if(!Cs(t))throw Error(U(200));if(e==null||e._reactInternals===void 0)throw Error(U(38));return Ns(e,n,t,!1,a)};ln.version="18.3.1-next-f1338f8080-20240426";function zm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zm)}catch(e){console.error(e)}}zm(),zu.exports=ln;var zr=zu.exports,Od=zr;yi.createRoot=Od.createRoot,yi.hydrateRoot=Od.hydrateRoot;const ha=["player1","player2","player3","player4","player5","player6","player7","player8"];function B0(e,n){return e.players[n]}function F0(e,n,t){return{...e,players:{...e.players,[n]:t}}}function Pm(e,n){const t=e.teams[n];return e.playerIds.filter(a=>a!==n&&e.teams[a]!==t&&!e.players[a].isDefeated)}function Te(e){return`P${e.replace("player","")}`}const G0=[{id:"ag-1",unitDeckId:"AG",nameJa:"ランス",nameCn:"长枪",actionType:"melee",frontImageId:"cards/ag/ag-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"ag-2",unitDeckId:"AG",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ag/ag-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ag-3",unitDeckId:"AG",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ag/ag-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ag-4",unitDeckId:"AG",nameJa:"スモールレーザー",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/ag/ag-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2,isEnergyWeapon:!0},{id:"ag-5",unitDeckId:"AG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ag/ag-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"ag-6",unitDeckId:"AG",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ag/ag-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-7",unitDeckId:"AG",nameJa:"ランス",nameCn:"长枪",actionType:"melee",frontImageId:"cards/ag/ag-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"ag-8",unitDeckId:"AG",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ag/ag-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-9",unitDeckId:"AG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/ag/ag-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"ag-10",unitDeckId:"AG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ag-11",unitDeckId:"AG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/ag/ag-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"ag-12",unitDeckId:"AG",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ag/ag-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"ag-13",unitDeckId:"AG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ag-14",unitDeckId:"AG",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ag/ag-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-15",unitDeckId:"AG",nameJa:"バーニア",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/ag/ag-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ag-16",unitDeckId:"AG",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/ag/ag-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ag-17",unitDeckId:"AG",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/ag/ag-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ag-18",unitDeckId:"AG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ag-19",unitDeckId:"AG",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ag/ag-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-20",unitDeckId:"AG",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ag/ag-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ag-21",unitDeckId:"AG",nameJa:"バーニア",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/ag/ag-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"}],H0=[{id:"ar-1",unitDeckId:"AR",nameJa:"シールド",nameCn:"护盾",actionType:"armor",frontImageId:"cards/ar/ar-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止4点射击伤害。该卡在准备区时，可以将其破坏并防止4点任意伤害。",armorValue:4},{id:"ar-2",unitDeckId:"AR",nameJa:"アンカー",nameCn:"长锚",actionType:"ranged",frontImageId:"cards/ar/ar-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:1,rangeMax:3,damage:void 0,effectText:"射击前可以改变机甲的朝向。命中后，使攻击目标强制移动到自机面前，期间目标朝向不变。"},{id:"ar-3",unitDeckId:"AR",nameJa:"陸上機雷",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/ar/ar-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"在自机周围8格不重叠地设置机雷指示物和替身雷各2个。在各个时机结束时，检查是否有机甲位于指示物所在格。若有，将指示物翻开展示，如果是机雷的话对所在格中的机甲造成伤害，然后将指示物弃掉。"},{id:"ar-4",unitDeckId:"AR",nameJa:"陸上機雷",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/ar/ar-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"在自机周围8格不重叠地设置机雷指示物和替身雷各2个。在各个时机结束时，检查是否有机甲位于指示物所在格。若有，将指示物翻开展示，如果是机雷的话对所在格中的机甲造成伤害，然后将指示物弃掉。"},{id:"ar-5",unitDeckId:"AR",nameJa:"メイス",nameCn:"狼牙棒",actionType:"melee",frontImageId:"cards/ar/ar-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ar-6",unitDeckId:"AR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ar/ar-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ar-7",unitDeckId:"AR",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ar-8",unitDeckId:"AR",nameJa:"移動６",nameCn:"移动6",actionType:"movement",frontImageId:"cards/ar/ar-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:6,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-9",unitDeckId:"AR",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ar/ar-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"ar-10",unitDeckId:"AR",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/ar/ar-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ar-11",unitDeckId:"AR",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ar-12",unitDeckId:"AR",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/ar/ar-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"ar-13",unitDeckId:"AR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ar/ar-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ar-14",unitDeckId:"AR",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"ar-15",unitDeckId:"AR",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ar/ar-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-16",unitDeckId:"AR",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ar/ar-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-17",unitDeckId:"AR",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ar/ar-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-18",unitDeckId:"AR",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ar/ar-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-19",unitDeckId:"AR",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ar/ar-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ar-20",unitDeckId:"AR",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ar/ar-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"}],U0=[{id:"bg-1",unitDeckId:"BG",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4,hasBombIcon:!0},{id:"bg-2",unitDeckId:"BG",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4,hasBombIcon:!0},{id:"bg-3",unitDeckId:"BG",nameJa:"ミドルレーザ",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/bg/bg-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3},{id:"bg-4",unitDeckId:"BG",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4,hasBombIcon:!0},{id:"bg-5",unitDeckId:"BG",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/bg/bg-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"bg-6",unitDeckId:"BG",nameJa:"スモールレーザ",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/bg/bg-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2},{id:"bg-7",unitDeckId:"BG",nameJa:"スナイパーライフル",nameCn:"狙击步枪",actionType:"ranged",frontImageId:"cards/bg/bg-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3,hasBombIcon:!0},{id:"bg-8",unitDeckId:"BG",nameJa:"スナイパーライフル",nameCn:"狙击步枪",actionType:"ranged",frontImageId:"cards/bg/bg-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3,hasBombIcon:!0},{id:"bg-9",unitDeckId:"BG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/bg/bg-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"bg-10",unitDeckId:"BG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/bg/bg-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"bg-11",unitDeckId:"BG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/bg/bg-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"bg-12",unitDeckId:"BG",nameJa:"スモールレーザ",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/bg/bg-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2},{id:"bg-13",unitDeckId:"BG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/bg/bg-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"bg-14",unitDeckId:"BG",nameJa:"ミドルレーザ",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/bg/bg-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3},{id:"bg-15",unitDeckId:"BG",nameJa:"スナイパーライフル",nameCn:"狙击步枪",actionType:"ranged",frontImageId:"cards/bg/bg-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3,hasBombIcon:!0},{id:"bg-16",unitDeckId:"BG",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/bg/bg-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"bg-17",unitDeckId:"BG",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/bg/bg-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"bg-18",unitDeckId:"BG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/bg/bg-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"bg-19",unitDeckId:"BG",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/bg/bg-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg-20",unitDeckId:"BG",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/bg/bg-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg-21",unitDeckId:"BG",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/bg/bg-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg-22",unitDeckId:"BG",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/bg/bg-22-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"bg-23",unitDeckId:"BG",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/bg/bg-23-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"}],W0=[{id:"ho-1",unitDeckId:"HO",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ho/ho-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-2",unitDeckId:"HO",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ho/ho-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-3",unitDeckId:"HO",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ho/ho-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-4",unitDeckId:"HO",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ho/ho-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-5",unitDeckId:"HO",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ho/ho-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"ho-6",unitDeckId:"HO",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ho/ho-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"ho-7",unitDeckId:"HO",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ho/ho-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ho-8",unitDeckId:"HO",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ho/ho-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-9",unitDeckId:"HO",nameJa:"移動６",nameCn:"移动6",actionType:"movement",frontImageId:"cards/ho/ho-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:6,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-10",unitDeckId:"HO",nameJa:"移動７",nameCn:"移动7",actionType:"movement",frontImageId:"cards/ho/ho-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:7,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ho-11",unitDeckId:"HO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ho/ho-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ho-12",unitDeckId:"HO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/ho/ho-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"ho-13",unitDeckId:"HO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/ho/ho-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"ho-14",unitDeckId:"HO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/ho/ho-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"ho-15",unitDeckId:"HO",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ho/ho-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"ho-16",unitDeckId:"HO",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/ho/ho-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"ho-17",unitDeckId:"HO",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/ho/ho-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"}],Z0=[{id:"hy-1",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-2",unitDeckId:"HY",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-3",unitDeckId:"HY",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-4",unitDeckId:"HY",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-5",unitDeckId:"HY",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-6",unitDeckId:"HY",nameJa:"ガトリングガン",nameCn:"加特林",actionType:"ranged",frontImageId:"cards/hy/hy-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:5,damage:3,hasBombIcon:!0},{id:"hy-7",unitDeckId:"HY",nameJa:"短距離ミサイル",nameCn:"短距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0},{id:"hy-8",unitDeckId:"HY",nameJa:"ガトリングガン",nameCn:"加特林",actionType:"ranged",frontImageId:"cards/hy/hy-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:5,damage:3,hasBombIcon:!0},{id:"hy-9",unitDeckId:"HY",nameJa:"バーニア",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/hy/hy-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"hy-10",unitDeckId:"HY",nameJa:"バーニア",nameCn:"喷射推进器",actionType:"auxiliary",frontImageId:"cards/hy/hy-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"hy-11",unitDeckId:"HY",nameJa:"スパイク",nameCn:"长钉",actionType:"charge",frontImageId:"cards/hy/hy-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"不进行突击移动，选择自机正面的机甲为攻击目标。对对方造成自机突击伤害+1的近战伤害。对自机造成对方被突击伤害-1的近战伤害。"},{id:"hy-12",unitDeckId:"HY",nameJa:"シールド",nameCn:"护盾",actionType:"armor",frontImageId:"cards/hy/hy-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止4点射击伤害。该卡在准备区时，可以将其破坏并防止4点任意伤害。",armorValue:4},{id:"hy-13",unitDeckId:"HY",nameJa:"シールド",nameCn:"护盾",actionType:"armor",frontImageId:"cards/hy/hy-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止4点射击伤害。该卡在准备区时，可以将其破坏并防止4点任意伤害。",armorValue:4},{id:"hy-14",unitDeckId:"HY",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/hy/hy-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"hy-15",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-16",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-17",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-18",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-19",unitDeckId:"HY",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/hy/hy-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"hy-20",unitDeckId:"HY",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"hy-21",unitDeckId:"HY",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/hy/hy-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"hy-22",unitDeckId:"HY",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/hy/hy-22-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"hy-23",unitDeckId:"HY",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/hy/hy-23-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"hy-24",unitDeckId:"HY",nameJa:"長距離ミサイル",nameCn:"长距导弹",actionType:"ranged",frontImageId:"cards/hy/hy-24-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:8,rangeMax:9,damage:3,effectText:"即使视线不能看到，也能够命中。",hasBombIcon:!0}],Y0=[{id:"lg-1",unitDeckId:"LG",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/lg/lg-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-2",unitDeckId:"LG",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/lg/lg-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-3",unitDeckId:"LG",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/lg/lg-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-4",unitDeckId:"LG",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/lg/lg-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg-5",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-6",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-7",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-8",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-9",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-10",unitDeckId:"LG",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/lg/lg-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"该卡在手牌时，可以将其破坏并防止2点射击伤害。该卡在准备区时，可以将其破坏并防止2点任意伤害。",armorValue:2},{id:"lg-11",unitDeckId:"LG",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/lg/lg-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"lg-12",unitDeckId:"LG",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/lg/lg-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"lg-13",unitDeckId:"LG",nameJa:"スパイク",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/lg/lg-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"lg-14",unitDeckId:"LG",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/lg/lg-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"lg-15",unitDeckId:"LG",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/lg/lg-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"lg-16",unitDeckId:"LG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/lg/lg-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"lg-17",unitDeckId:"LG",nameJa:"パイルバンカー",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/lg/lg-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"lg-18",unitDeckId:"LG",nameJa:"パイルバンカー",nameCn:"长钉",actionType:"charge",frontImageId:"cards/lg/lg-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"不进行突击移动，选择自机正面的机甲为攻击目标。对对方造成自机突击伤害+1的近战伤害。对自机造成对方被突击伤害-1的近战伤害。"},{id:"lg-19",unitDeckId:"LG",nameJa:"クロー",nameCn:"爪",actionType:"melee",frontImageId:"cards/lg/lg-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:2,effectText:"（结算伤害前）如果攻击目标的手牌、辅助区、准备区中有类别包括“装甲”的卡牌，选择其中两张破坏。"},{id:"lg-20",unitDeckId:"LG",nameJa:"クロー",nameCn:"爪",actionType:"melee",frontImageId:"cards/lg/lg-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:2,effectText:"（结算伤害前）如果攻击目标的手牌、辅助区、准备区中有类别包括“装甲”的卡牌，选择其中两张破坏。"},{id:"lg-21",unitDeckId:"LG",nameJa:"マシンガン",nameCn:"机炮",actionType:"ranged",frontImageId:"cards/lg/lg-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:4,damage:3,hasBombIcon:!0},{id:"lg-22",unitDeckId:"LG",nameJa:"ホイール",nameCn:"滑轮",actionType:"auxiliary",frontImageId:"cards/lg/lg-22-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:○、近战:×。使用后移动力+2。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"lg-23",unitDeckId:"LG",nameJa:"ホイール",nameCn:"滑轮",actionType:"auxiliary",frontImageId:"cards/lg/lg-23-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:○、近战:×。使用后移动力+2。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"}],X0=[{id:"lo-1",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-2",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-3",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-4",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-5",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-6",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-7",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-8",unitDeckId:"LO",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/lo/lo-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"lo-9",unitDeckId:"LO",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/lo/lo-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"lo-10",unitDeckId:"LO",nameJa:"ヒートソード",nameCn:"火神剑",actionType:"melee",frontImageId:"cards/lo/lo-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3,effectText:"（造成伤害后）展示攻击目标抽牌堆顶的2张牌，进行诱爆检查。"},{id:"lo-11",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-12",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-13",unitDeckId:"LO",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/lo/lo-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-14",unitDeckId:"LO",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/lo/lo-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-15",unitDeckId:"LO",nameJa:"ラージレーザー",nameCn:"镭射L",actionType:"ranged",frontImageId:"cards/lo/lo-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"lo-16",unitDeckId:"LO",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/lo/lo-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"lo-17",unitDeckId:"LO",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/lo/lo-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-18",unitDeckId:"LO",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/lo/lo-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-19",unitDeckId:"LO",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/lo/lo-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo-20",unitDeckId:"LO",nameJa:"スモールレーザー",nameCn:"镭射S",actionType:"ranged",frontImageId:"cards/lo/lo-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2,isEnergyWeapon:!0}],Q0=[{id:"tr-1",unitDeckId:"TR",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/tr/tr-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-2",unitDeckId:"TR",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/tr/tr-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-3",unitDeckId:"TR",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/tr/tr-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-4",unitDeckId:"TR",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/tr/tr-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-5",unitDeckId:"TR",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/tr/tr-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-6",unitDeckId:"TR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/tr/tr-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"tr-7",unitDeckId:"TR",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/tr/tr-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"进行突击移动，然后对正面且相邻的攻击目标进行突击。对攻击目标造成自机的突击伤害，对自机造成攻击目标的被突击伤害。（均为近战伤害）"},{id:"tr-8",unitDeckId:"TR",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/tr/tr-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:○、突击:×、近战:○。使用后移动时受到高低差的影响-1，进入特殊地形时不需要花费额外的移动力。辅助区中只有一张时无法使用，不能与有♠标记的辅助武装同时使用。"},{id:"tr-9",unitDeckId:"TR",nameJa:"移動６",nameCn:"移动6",actionType:"movement",frontImageId:"cards/tr/tr-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:6,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr-10",unitDeckId:"TR",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/tr/tr-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"仅在主要阶段一可以使用，可以改变机甲的朝向。使主要阶段二的射击伤害+1。当射击攻击命中时，在目标的手牌（立即公开）、辅助区、抽牌堆（保持非公开）、准备区域中选择承受伤害的卡。对手在准备区中准备了装甲卡时，可以使用并触发其效果。"},{id:"tr-11",unitDeckId:"TR",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/tr/tr-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"tr-12",unitDeckId:"TR",nameJa:"アクス",nameCn:"斧头",actionType:"melee",frontImageId:"cards/tr/tr-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"tr-13",unitDeckId:"TR",nameJa:"アクス",nameCn:"斧头",actionType:"melee",frontImageId:"cards/tr/tr-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"tr-14",unitDeckId:"TR",nameJa:"パイルバンカー",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/tr/tr-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"tr-15",unitDeckId:"TR",nameJa:"ムーブセンサー",nameCn:"移动传感器",actionType:"auxiliary",frontImageId:"cards/tr/tr-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,effectText:"移动:×、突击:×、近战:○。使用后进行移动力为1的近战移动。只有一张时无法使用，不能与有♥的辅助武装同时使用。"},{id:"tr-16",unitDeckId:"TR",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/tr/tr-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"tr-17",unitDeckId:"TR",nameJa:"パイルバンカー",nameCn:"贯钉",actionType:"melee",frontImageId:"cards/tr/tr-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6,effectText:"在该卡的攻击命中后，破坏该卡。",hasBombIcon:!0},{id:"tr-18",unitDeckId:"TR",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/tr/tr-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0},{id:"tr-19",unitDeckId:"TR",nameJa:"ミドルレーザー",nameCn:"镭射M",actionType:"ranged",frontImageId:"cards/tr/tr-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:3,rangeMax:4,damage:3,isEnergyWeapon:!0}],q0=[{id:"zb-1",unitDeckId:"ZB",nameJa:"移動５",nameCn:"移动5",actionType:"movement",frontImageId:"cards/ag/ag-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:5,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-2",unitDeckId:"ZB",nameJa:"移動４",nameCn:"移动4",actionType:"movement",frontImageId:"cards/ag/ag-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:4,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-3",unitDeckId:"ZB",nameJa:"移動３",nameCn:"移动3",actionType:"movement",frontImageId:"cards/ag/ag-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:3,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-4",unitDeckId:"ZB",nameJa:"移動２",nameCn:"移动2",actionType:"movement",frontImageId:"cards/ag/ag-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:2,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-5",unitDeckId:"ZB",nameJa:"移動１",nameCn:"移动1",actionType:"movement",frontImageId:"cards/ag/ag-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-6",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-7",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-8",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ag/ag-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-9",unitDeckId:"ZB",nameJa:"突撃",nameCn:"突击",actionType:"charge",frontImageId:"cards/ag/ag-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-10",unitDeckId:"ZB",nameJa:"照準",nameCn:"瞄准",actionType:"aim",frontImageId:"cards/ag/ag-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-11",unitDeckId:"ZB",nameJa:"ムーブセンサー",nameCn:"移动感应器",actionType:"auxiliary",frontImageId:"cards/ho/ho-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-12",unitDeckId:"ZB",nameJa:"ムーブセンサー",nameCn:"移动感应器",actionType:"auxiliary",frontImageId:"cards/ho/ho-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-13",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/ar/ar-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-14",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-15",unitDeckId:"ZB",nameJa:"プレート",nameCn:"护甲板",actionType:"armor",frontImageId:"cards/hy/hy-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"zb-16",unitDeckId:"ZB",nameJa:"ラージレーザー",nameCn:"大口径激光",actionType:"ranged",frontImageId:"cards/bg/bg-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"zb-17",unitDeckId:"ZB",nameJa:"ブレード",nameCn:"剑",actionType:"melee",frontImageId:"cards/zb/zb-17-front.png",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"zb-18",unitDeckId:"ZB",nameJa:"バルカン",nameCn:"火神炮",actionType:"ranged",frontImageId:"cards/zb/zb-18-front.png",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:2,rangeMax:2,damage:2},{id:"zb-19",unitDeckId:"ZB",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ag/ag-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-20",unitDeckId:"ZB",nameJa:"バーニア",nameCn:"喷逐器",actionType:"auxiliary",frontImageId:"cards/ag/ag-21-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb-21",unitDeckId:"ZB",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4},{id:"zb-22",unitDeckId:"ZB",nameJa:"ラージレーザー",nameCn:"大口径激光",actionType:"ranged",frontImageId:"cards/bg/bg-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:4,rangeMax:5,damage:3,isEnergyWeapon:!0},{id:"zb-23",unitDeckId:"ZB",nameJa:"ロケット砲",nameCn:"火箭炮",actionType:"ranged",frontImageId:"cards/bg/bg-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4}],eh=[{id:"ag_plus-1",unitDeckId:"AG+",nameJa:"コルセスカ",nameCn:"长柄三叉矛",actionType:"melee",frontImageId:"cards/ag_plus/ag_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ag_plus-2",unitDeckId:"AG+",nameJa:"コルセスカ",nameCn:"长柄三叉矛",actionType:"melee",frontImageId:"cards/ag_plus/ag_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ag_plus-3",unitDeckId:"AG+",nameJa:"ネット",nameCn:"网",actionType:"ranged",frontImageId:"cards/ag_plus/ag_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:5,damage:void 0},{id:"ag_plus-4",unitDeckId:"AG+",nameJa:"ボーラ",nameCn:"投石索",actionType:"ranged",frontImageId:"cards/ag_plus/ag_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:4,damage:void 0},{id:"ag_plus-5",unitDeckId:"AG+",nameJa:"バルカン",nameCn:"火神炮",actionType:"ranged",frontImageId:"cards/ag_plus/ag_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:2,damage:2}],nh=[{id:"ar_plus-1",unitDeckId:"AR+",nameJa:"ウォーハンマー",nameCn:"战锤",actionType:"melee",frontImageId:"cards/ar_plus/ar_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"ar_plus-2",unitDeckId:"AR+",nameJa:"強化機雷",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/ar_plus/ar_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,hasBombIcon:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"ar_plus-3",unitDeckId:"AR+",nameJa:"ロングアンカー",nameCn:"长锚",actionType:"ranged",frontImageId:"cards/ar_plus/ar_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:4,damage:1},{id:"ar_plus-4",unitDeckId:"AR+",nameJa:"強化機雷",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/ar_plus/ar_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,hasBombIcon:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5}],th=[{id:"bg_plus-1",unitDeckId:"BG+",nameJa:"自爆装置",nameCn:"自爆装置",actionType:"mine",frontImageId:"cards/bg_plus/bg_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,hasBombIcon:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"bg_plus-2",unitDeckId:"BG+",nameJa:"大口径ロケット砲",nameCn:"大口径火箭炮",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:5},{id:"bg_plus-3",unitDeckId:"BG+",nameJa:"大口径ロケット砲",nameCn:"大口径火箭炮",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:5},{id:"bg_plus-4",unitDeckId:"BG+",nameJa:"高品質ライフル",nameCn:"高品质步枪",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:9,rangeMax:11,damage:3},{id:"bg_plus-5",unitDeckId:"BG+",nameJa:"スモークミサイル",nameCn:"烟雾导弹",actionType:"ranged",frontImageId:"cards/bg_plus/bg_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:5,damage:void 0}],ah=[{id:"ho_plus-1",unitDeckId:"HO+",nameJa:"スタンウィップ",nameCn:"电击鞭",actionType:"melee",frontImageId:"cards/ho_plus/ho_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:1},{id:"ho_plus-2",unitDeckId:"HO+",nameJa:"チェーンブレード",nameCn:"链锯剑",actionType:"melee",frontImageId:"cards/ho_plus/ho_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"ho_plus-3",unitDeckId:"HO+",nameJa:"高品質ロケット砲",nameCn:"高品质火箭炮",actionType:"ranged",frontImageId:"cards/ho_plus/ho_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4},{id:"ho_plus-4",unitDeckId:"HO+",nameJa:"火炎放射器",nameCn:"火焰喷射器",actionType:"ranged",frontImageId:"cards/ho_plus/ho_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:2,rangeMax:3,damage:2}],rh=[{id:"hy_plus-1",unitDeckId:"HY+",nameJa:"ショットガン",nameCn:"散弹枪",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:3,damage:4},{id:"hy_plus-2",unitDeckId:"HY+",nameJa:"ショットガン",nameCn:"散弹枪",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:3,damage:4},{id:"hy_plus-3",unitDeckId:"HY+",nameJa:"ガトリングカノン",nameCn:"加特林炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:4},{id:"hy_plus-4",unitDeckId:"HY+",nameJa:"ガトリングカノン",nameCn:"加特林炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:4},{id:"hy_plus-5",unitDeckId:"HY+",nameJa:"ガトリングカノン",nameCn:"加特林炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:4},{id:"hy_plus-6",unitDeckId:"HY+",nameJa:"ミサイルシールド",nameCn:"导弹盾",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3},{id:"hy_plus-7",unitDeckId:"HY+",nameJa:"高品質ロケット砲",nameCn:"高品质火箭炮",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:4},{id:"hy_plus-8",unitDeckId:"HY+",nameJa:"ミサイルシールド",nameCn:"导弹盾",actionType:"ranged",frontImageId:"cards/hy_plus/hy_plus-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:5,rangeMax:6,damage:3}],oh=[{id:"lg_plus-1",unitDeckId:"LG+",nameJa:"ヒートクロー",nameCn:"热力爪",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-2",unitDeckId:"LG+",nameJa:"グレネードランチャー",nameCn:"榴弹发射器",actionType:"ranged",frontImageId:"cards/lg_plus/lg_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:5,damage:3},{id:"lg_plus-3",unitDeckId:"LG+",nameJa:"グレネードランチャー",nameCn:"榴弹发射器",actionType:"ranged",frontImageId:"cards/lg_plus/lg_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:1,rangeMax:5,damage:3},{id:"lg_plus-4",unitDeckId:"LG+",nameJa:"キャタピラ",nameCn:"履带",actionType:"auxiliary",frontImageId:"cards/lg_plus/lg_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-5",unitDeckId:"LG+",nameJa:"リボルバンカー",nameCn:"左轮打桩机",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6},{id:"lg_plus-6",unitDeckId:"LG+",nameJa:"キャタピラ",nameCn:"履带",actionType:"auxiliary",frontImageId:"cards/lg_plus/lg_plus-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-7",unitDeckId:"LG+",nameJa:"ヒートクロー",nameCn:"热力爪",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lg_plus-8",unitDeckId:"LG+",nameJa:"リボルバンカー",nameCn:"左轮打桩机",actionType:"melee",frontImageId:"cards/lg_plus/lg_plus-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:6}],sh=[{id:"lo_plus-1",unitDeckId:"LO+",nameJa:"防水膜",nameCn:"防水膜",actionType:"auxiliary",frontImageId:"cards/lo_plus/lo_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"lo_plus-2",unitDeckId:"LO+",nameJa:"追加装甲",nameCn:"附加装甲",actionType:"armor",frontImageId:"cards/lo_plus/lo_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0,armorValue:2},{id:"lo_plus-3",unitDeckId:"LO+",nameJa:"パルスレーザー",nameCn:"脉冲激光",actionType:"ranged",frontImageId:"cards/lo_plus/lo_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:3,rangeMax:5,damage:2,isEnergyWeapon:!0},{id:"lo_plus-4",unitDeckId:"LO+",nameJa:"サウンドストーム",nameCn:"声波风暴",actionType:"melee",frontImageId:"cards/lo_plus/lo_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0}],ih=[{id:"tr_plus-1",unitDeckId:"TR+",nameJa:"サウンドウェーブ",nameCn:"声波",actionType:"melee",frontImageId:"cards/tr_plus/tr_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"tr_plus-2",unitDeckId:"TR+",nameJa:"バルディッシュ",nameCn:"长柄斧",actionType:"melee",frontImageId:"cards/tr_plus/tr_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"tr_plus-3",unitDeckId:"TR+",nameJa:"バルディッシュ",nameCn:"长柄斧",actionType:"melee",frontImageId:"cards/tr_plus/tr_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"tr_plus-4",unitDeckId:"TR+",nameJa:"高圧縮レーザー",nameCn:"高压缩激光",actionType:"ranged",frontImageId:"cards/tr_plus/tr_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:4,isEnergyWeapon:!0},{id:"tr_plus-5",unitDeckId:"TR+",nameJa:"高圧縮レーザー",nameCn:"高压缩激光",actionType:"ranged",frontImageId:"cards/tr_plus/tr_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:4,rangeMax:5,damage:4,isEnergyWeapon:!0}],lh=[{id:"zb_plus-1",unitDeckId:"ZB+",nameJa:"広射程ミサイル",nameCn:"广射程导弹",actionType:"ranged",frontImageId:"cards/zb_plus/zb_plus-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:3},{id:"zb_plus-2",unitDeckId:"ZB+",nameJa:"ホバー",nameCn:"悬浮器",actionType:"auxiliary",frontImageId:"cards/zb_plus/zb_plus-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb_plus-3",unitDeckId:"ZB+",nameJa:"ホバー",nameCn:"悬浮器",actionType:"auxiliary",frontImageId:"cards/zb_plus/zb_plus-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"zb_plus-4",unitDeckId:"ZB+",nameJa:"チェーンブレード",nameCn:"链锯剑",actionType:"melee",frontImageId:"cards/zb_plus/zb_plus-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:4},{id:"zb_plus-5",unitDeckId:"ZB+",nameJa:"ジャイアントシザース",nameCn:"巨型剪刀",actionType:"melee",frontImageId:"cards/zb_plus/zb_plus-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:void 0,rangeMax:void 0,damage:10},{id:"zb_plus-6",unitDeckId:"ZB+",nameJa:"広射程ミサイル",nameCn:"广射程导弹",actionType:"ranged",frontImageId:"cards/zb_plus/zb_plus-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!0,movementValue:void 0,rangeMin:6,rangeMax:8,damage:3}],ch=[{id:"ダミー-1",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-2",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-3",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-4",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-5",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-6",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-7",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-8",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-9",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-10",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-11",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-12",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-13",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-14",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-15",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-16",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-17",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-18",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-19",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0},{id:"ダミー-20",unitDeckId:"ダミー",nameJa:"ダミートークン",nameCn:"假目标",actionType:"special",frontImageId:"cards/ダミー/ダミー-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:void 0}],dh=[{id:"強化機雷-1",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-2",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-3",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-4",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-5",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-6",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-7",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-8",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-9",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-10",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-11",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-12",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-13",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-14",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-15",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5},{id:"強化機雷-16",unitDeckId:"強化機雷",nameJa:"強化機雷トークン",nameCn:"强化机雷",actionType:"mine",frontImageId:"cards/強化機雷/強化機雷-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,rangeMin:void 0,rangeMax:void 0,damage:5}],uh=[{id:"陸上機雷-1",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-1-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-2",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-2-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-3",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-3-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-4",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-4-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-5",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-5-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-6",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-6-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-7",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-7-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-8",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-8-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-9",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-9-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-10",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-10-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-11",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-11-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-12",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-12-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-13",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-13-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-14",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-14-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-15",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-15-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-16",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-16-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-17",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-17-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-18",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-18-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-19",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-19-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3},{id:"陸上機雷-20",unitDeckId:"陸上機雷",nameJa:"陸上機雷トークン",nameCn:"陆上机雷",actionType:"mine",frontImageId:"cards/陸上機雷/陸上機雷-20-front.jpg",backImageId:"ui/card-back.jpg",isKaiVariant:!1,hasBombIcon:!0,rangeMin:void 0,rangeMax:void 0,damage:3}],Vt={AG:G0,AR:H0,BG:U0,HO:W0,HY:Z0,LG:Y0,LO:X0,TR:Q0,ZB:q0,"AG+":eh,"AR+":nh,"BG+":th,"HO+":ah,"HY+":rh,"LG+":oh,"LO+":sh,"TR+":ih,"ZB+":lh,ダミー:ch,強化機雷:dh,陸上機雷:uh};let ph=0;function mh(e,n){return`${e}-${n}-${ph++}`}function fh(e,n){const a=(Vt[e]??[]).map(o=>({instanceId:mh(o.id,n),defId:o.id,destroyed:!1}));return gh(a)}function gh(e){const n=[...e];for(let t=n.length-1;t>0;t--){const a=Math.floor(Math.random()*(t+1));[n[t],n[a]]=[n[a],n[t]]}return n}function Vm(e,n){const t=[...e];let a=n>>>0;for(let o=t.length-1;o>0;o--){a=a+1831565813>>>0;let s=Math.imul(a^a>>>15,a|1);s^=s+Math.imul(s^s>>>7,s|61);const i=((s^s>>>14)>>>0)/4294967296,l=Math.floor(i*(o+1));[t[o],t[l]]=[t[l],t[o]]}return{shuffled:t,nextSeed:a}}function hh(e,n){const t=Math.min(n,e.length);return{drawn:e.slice(0,t),remaining:e.slice(t)}}function te(e){for(const n of Object.values(Vt)){const t=n.find(a=>a.id===e);if(t)return t}}const c=(e=0)=>({terrain:"plain",elevation:0,variant:e}),w=(e=0)=>({terrain:"sand",elevation:0,variant:e}),H=(e=0)=>({terrain:"rubble",elevation:0,variant:e}),G=(e=0)=>({terrain:"forest",elevation:0,variant:e}),O=(e=0)=>({terrain:"water",elevation:0,variant:e}),T=e=>({terrain:"highland",elevation:e,variant:e}),xh={id:"map_1a",nameJa:"基本マップ1a",nameCn:"基础地图1a",width:7,height:11,maxPlayers:2,maxTeams:2,cells:[[w(),w(),w(),w(),w(),w(),w()],[c(),c(),c(),c(),c(),c(),c()],[c(),c(),c(),c(),c(),c(),c()],[T(2),T(1),c(),c(),c(),T(2),T(2)],[T(1),T(1),c(),c(),c(),T(2),c()],[c(),c(),c(),c(),c(),T(2),c()],[c(),c(),c(),c(),c(),c(),c()],[c(),c(),c(),T(1),T(1),T(2),T(2)],[c(),c(),c(),c(),c(),c(),c()],[c(),c(),c(),c(),c(),c(),c()],[H(),H(),H(),H(),H(),H(),H()]],startZones:{0:[{row:0,col:2},{row:0,col:3},{row:0,col:4}],1:[{row:10,col:2},{row:10,col:3},{row:10,col:4}]}},bh={id:"map_2a",nameJa:"基本マップ2a",nameCn:"基础地图2a",width:7,height:11,maxPlayers:2,maxTeams:2,cells:[[w(),w(),w(),w(),w(),w(),w()],[c(),c(),c(),c(),c(),c(),c()],[T(2),T(2),c(),c(),c(),c(),c()],[T(2),c(),c(),c(),c(),c(),c()],[T(2),c(),c(),c(),c(),c(),c()],[T(2),c(),c(),c(),c(),c(),c()],[T(2),T(2),c(),c(),c(),c(),c()],[c(),c(),c(),c(),G(),G(),c()],[c(),c(),c(),c(),G(),G(),c()],[c(),c(),c(),c(),c(),c(),c()],[w(),w(),w(),w(),w(),w(),w()]],startZones:{0:[{row:0,col:2},{row:0,col:3},{row:0,col:4}],1:[{row:10,col:2},{row:10,col:3},{row:10,col:4}]}},vh={id:"map_2b",nameJa:"基本マップ2b",nameCn:"基础地图2b",width:7,height:11,maxPlayers:2,maxTeams:2,cells:[[G(),G(),G(),c(),c(),c(),c()],[O(),O(),w(),c(),c(),c(),c()],[O(),O(),w(),c(),c(),c(),c()],[w(),O(),O(),w(),c(),c(),c()],[c(),w(),O(),O(),w(),c(),c()],[c(),c(),w(),O(),O(),w(),c()],[c(),c(),c(),O(),O(),w(),c()],[c(),c(),c(),w(),O(),O(),c()],[c(),c(),c(),c(),w(),O(),O()],[c(),c(),c(),c(),c(),c(),c()],[c(),c(),w(),w(),w(),c(),c()]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:0,col:2}],1:[{row:10,col:2},{row:10,col:3},{row:10,col:4}]}},yh={id:"map_3a",nameJa:"峡谷要塞",nameCn:"峡谷要塞",width:9,height:13,maxPlayers:4,maxTeams:4,cells:[[w(),w(),w(),w(),w(),w(),w(),w(),w()],[G(0),c(),c(),c(),c(),c(),c(),c(),G(1)],[c(),c(),c(),c(),c(),c(),c(),c(),c()],[T(2),T(3),T(1),c(),c(),c(),T(1),T(2),T(2)],[T(2),T(2),c(),c(),H(1),c(),c(),T(1),T(2)],[T(1),c(),H(0),H(2),c(),H(1),H(3),c(),T(1)],[c(),w(),O(0),O(1),w(),O(2),O(0),w(),c()],[T(1),c(),H(3),H(0),c(),H(2),H(1),c(),T(1)],[T(2),T(1),c(),c(),H(0),c(),c(),T(2),T(2)],[T(2),T(2),T(1),c(),c(),c(),T(1),T(3),T(2)],[c(),c(),c(),c(),c(),c(),c(),c(),c()],[G(2),c(),c(),c(),c(),c(),c(),c(),G(3)],[w(),w(),w(),w(),w(),w(),w(),w(),w()]],startZones:{0:[{row:0,col:1},{row:0,col:3},{row:0,col:4},{row:0,col:5},{row:0,col:7}],1:[{row:12,col:1},{row:12,col:3},{row:12,col:4},{row:12,col:5},{row:12,col:7}],2:[{row:2,col:0},{row:6,col:0}],3:[{row:2,col:8},{row:6,col:8}]}},_h={id:"map_3b",nameJa:"群島戦域",nameCn:"群岛战域",width:9,height:13,maxPlayers:4,maxTeams:4,cells:[[G(0),G(1),w(),w(),O(0),O(1),c(),c(),c()],[G(2),w(),c(),w(),O(2),c(),c(),w(),O(0)],[w(),O(0),w(),c(),c(),w(),O(1),O(0),O(2)],[O(1),O(2),c(),c(),T(1),c(),c(),O(2),O(1)],[O(0),w(),c(),T(1),T(2),T(1),c(),w(),O(0)],[O(2),c(),T(1),T(2),T(3),T(2),T(1),c(),O(1)],[O(1),w(),c(),T(2),G(0),T(2),c(),w(),O(2)],[O(0),c(),T(1),T(2),T(3),T(2),T(1),c(),O(0)],[O(2),w(),c(),T(1),T(2),T(1),c(),w(),O(1)],[O(1),O(0),c(),c(),T(1),c(),c(),O(0),O(2)],[O(0),O(2),O(1),w(),c(),c(),w(),O(1),w()],[c(),c(),O(0),w(),c(),w(),H(0),w(),H(1)],[c(),c(),c(),O(1),w(),w(),H(2),H(3),H(0)]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:1,col:0},{row:0,col:6},{row:0,col:7}],1:[{row:12,col:6},{row:12,col:7},{row:11,col:8},{row:12,col:0},{row:12,col:1}],2:[{row:2,col:3},{row:3,col:2}],3:[{row:10,col:4},{row:10,col:5}]}},Ih={id:"map_4a",nameJa:"都市廃墟",nameCn:"都市废墟",width:11,height:15,maxPlayers:4,maxTeams:4,cells:[[H(0),w(),w(),w(),w(),w(),w(),w(),w(),w(),H(1)],[H(2),H(3),c(),c(),c(),c(),c(),G(0),G(1),c(),c()],[c(),H(0),H(1),c(),c(),H(2),c(),G(2),c(),c(),c()],[c(),c(),T(1),T(2),c(),H(3),c(),c(),c(),H(0),c()],[c(),c(),T(2),T(1),c(),c(),c(),c(),w(),O(0),w()],[H(1),c(),c(),c(),c(),H(0),c(),w(),O(1),O(2),c()],[H(2),H(0),c(),c(),c(),c(),w(),O(0),w(),c(),c()],[c(),c(),c(),c(),c(),T(3),c(),c(),c(),c(),c()],[c(),c(),w(),O(2),w(),c(),c(),c(),c(),H(1),H(2)],[c(),O(0),O(1),w(),c(),G(0),G(1),c(),c(),c(),H(0)],[c(),H(3),c(),c(),c(),G(2),G(3),c(),T(1),T(2),c()],[c(),c(),c(),H(1),c(),c(),c(),c(),T(2),T(1),c()],[c(),c(),H(2),H(0),c(),c(),c(),c(),c(),c(),c()],[c(),c(),c(),H(3),c(),c(),c(),H(1),H(2),c(),c()],[H(3),w(),w(),w(),w(),w(),w(),w(),w(),w(),H(2)]],startZones:{0:[{row:0,col:1},{row:0,col:3},{row:0,col:5},{row:0,col:7},{row:0,col:9}],1:[{row:14,col:1},{row:14,col:3},{row:14,col:5},{row:14,col:7},{row:14,col:9}],2:[{row:7,col:0},{row:8,col:0}],3:[{row:6,col:10},{row:7,col:10}]}},kh={id:"map_5a",nameJa:"三叉戦場",nameCn:"三叉战场",width:13,height:17,maxPlayers:6,maxTeams:6,cells:[[c(),c(),c(),w(),w(),w(),w(),w(),w(),w(),c(),c(),c()],[c(),c(),w(),c(),c(),c(),c(),c(),c(),c(),w(),c(),c()],[c(),G(0),c(),c(),c(),c(),c(),c(),c(),c(),c(),G(1),c()],[G(2),G(0),c(),c(),c(),H(0),c(),H(1),c(),c(),c(),G(1),G(3)],[G(0),c(),c(),c(),w(),O(0),w(),O(1),w(),c(),c(),c(),G(2)],[c(),c(),c(),w(),O(1),O(0),c(),O(2),O(0),w(),c(),c(),c()],[c(),c(),T(1),T(2),w(),c(),c(),c(),w(),T(2),T(1),c(),c()],[c(),T(1),T(2),T(3),T(2),c(),c(),c(),T(2),T(3),T(2),T(1),c()],[c(),c(),T(2),T(3),H(0),T(2),T(3),T(2),H(1),T(3),T(2),c(),c()],[c(),T(1),T(2),T(3),T(2),c(),c(),c(),T(2),T(3),T(2),T(1),c()],[c(),c(),T(1),T(2),w(),c(),c(),c(),w(),T(2),T(1),c(),c()],[c(),c(),c(),w(),O(2),O(1),c(),O(0),O(2),w(),c(),c(),c()],[G(1),c(),c(),c(),w(),O(0),w(),O(1),w(),c(),c(),c(),G(0)],[G(3),G(2),c(),c(),c(),H(2),c(),H(3),c(),c(),c(),G(0),G(1)],[c(),G(0),c(),c(),c(),c(),c(),c(),c(),c(),c(),G(2),c()],[w(),w(),w(),w(),c(),c(),c(),c(),c(),w(),w(),w(),w()],[w(),w(),w(),w(),w(),c(),c(),c(),w(),w(),w(),w(),w()]],startZones:{0:[{row:0,col:4},{row:0,col:6},{row:0,col:8}],1:[{row:16,col:0},{row:16,col:1},{row:16,col:2}],2:[{row:16,col:10},{row:16,col:11},{row:16,col:12}],3:[{row:6,col:0},{row:6,col:1},{row:10,col:0}],4:[{row:6,col:11},{row:6,col:12},{row:10,col:12}],5:[{row:2,col:0},{row:2,col:6},{row:2,col:12}]}},jh={id:"map_6a",nameJa:"環状要塞",nameCn:"环形要塞",width:15,height:17,maxPlayers:8,maxTeams:8,cells:[[c(),c(),c(),c(),w(),w(),w(),w(),w(),w(),w(),c(),c(),c(),c()],[c(),c(),c(),w(),c(),c(),c(),c(),c(),c(),c(),w(),c(),c(),c()],[c(),c(),T(1),T(2),T(2),T(1),c(),c(),c(),T(1),T(2),T(2),T(1),c(),c()],[c(),H(0),T(1),c(),c(),c(),H(1),c(),H(2),c(),c(),c(),T(1),H(3),c()],[w(),c(),c(),c(),G(0),G(1),c(),c(),c(),G(2),G(3),c(),c(),c(),w()],[w(),c(),H(0),c(),G(2),c(),c(),c(),c(),c(),G(0),c(),H(1),c(),w()],[c(),H(2),T(1),c(),c(),c(),H(3),w(),H(0),c(),c(),c(),T(1),H(1),c()],[c(),c(),c(),c(),c(),w(),O(0),O(1),O(2),w(),c(),c(),c(),c(),c()],[c(),c(),c(),c(),w(),O(2),O(0),T(3),O(1),O(0),w(),c(),c(),c(),c()],[c(),c(),c(),c(),c(),w(),O(1),O(2),O(0),w(),c(),c(),c(),c(),c()],[c(),H(3),T(1),c(),c(),c(),H(1),w(),H(2),c(),c(),c(),T(1),H(0),c()],[w(),c(),H(2),c(),G(1),c(),c(),c(),c(),c(),G(3),c(),H(3),c(),w()],[w(),c(),c(),c(),G(3),G(0),c(),c(),c(),G(1),G(2),c(),c(),c(),w()],[c(),H(1),T(1),c(),c(),c(),H(3),c(),H(0),c(),c(),c(),T(1),H(2),c()],[c(),c(),T(1),T(2),T(2),T(1),c(),c(),c(),T(1),T(2),T(2),T(1),c(),c()],[c(),c(),c(),w(),c(),c(),c(),c(),c(),c(),c(),w(),c(),c(),c()],[c(),c(),c(),c(),w(),w(),w(),w(),w(),w(),w(),c(),c(),c(),c()]],startZones:{0:[{row:0,col:5},{row:0,col:6},{row:0,col:7},{row:0,col:8}],1:[{row:16,col:5},{row:16,col:6},{row:16,col:7},{row:16,col:8}],2:[{row:4,col:0},{row:5,col:0},{row:11,col:0},{row:12,col:0}],3:[{row:4,col:14},{row:5,col:14},{row:11,col:14},{row:12,col:14}],4:[{row:0,col:0},{row:0,col:1},{row:0,col:2},{row:0,col:3}],5:[{row:0,col:11},{row:0,col:12},{row:0,col:13},{row:0,col:14}],6:[{row:16,col:0},{row:16,col:1},{row:16,col:2},{row:16,col:3}],7:[{row:16,col:11},{row:16,col:12},{row:16,col:13},{row:16,col:14}]}},wh={id:"map_7a",nameJa:"大陸戦争",nameCn:"大陆战争",width:17,height:19,maxPlayers:8,maxTeams:8,cells:[[w(),w(),w(),w(),c(),c(),c(),c(),c(),c(),c(),c(),c(),w(),w(),w(),w()],[w(),c(),c(),c(),c(),c(),G(0),c(),c(),c(),G(1),c(),c(),c(),c(),c(),w()],[c(),c(),G(0),G(1),c(),G(2),G(0),c(),c(),c(),G(1),G(3),c(),G(2),G(0),c(),c()],[c(),c(),G(2),c(),c(),c(),c(),H(0),c(),H(1),c(),c(),c(),c(),G(1),c(),c()],[c(),c(),c(),c(),T(1),T(2),c(),c(),c(),c(),c(),T(2),T(1),c(),c(),c(),c()],[c(),H(0),c(),T(1),T(2),T(3),T(1),c(),c(),c(),T(1),T(3),T(2),T(1),c(),H(1),c()],[w(),c(),c(),T(1),T(2),c(),c(),w(),O(0),w(),c(),c(),T(2),T(1),c(),c(),w()],[w(),c(),c(),c(),c(),c(),w(),O(1),O(0),O(2),w(),c(),c(),c(),c(),c(),w()],[c(),c(),H(2),c(),c(),w(),O(0),O(2),w(),O(1),O(0),w(),c(),c(),H(3),c(),c()],[c(),c(),c(),c(),w(),O(1),w(),c(),T(3),c(),w(),O(2),w(),c(),c(),c(),c()],[c(),c(),H(1),c(),c(),w(),O(2),O(0),w(),O(0),O(1),w(),c(),c(),H(0),c(),c()],[w(),c(),c(),c(),c(),c(),w(),O(0),O(1),O(2),w(),c(),c(),c(),c(),c(),w()],[w(),c(),c(),T(1),T(2),c(),c(),w(),O(2),w(),c(),c(),T(2),T(1),c(),c(),w()],[c(),H(2),c(),T(1),T(2),T(3),T(1),c(),c(),c(),T(1),T(3),T(2),T(1),c(),H(3),c()],[c(),c(),c(),c(),T(1),T(2),c(),c(),c(),c(),c(),T(2),T(1),c(),c(),c(),c()],[c(),c(),G(3),c(),c(),c(),c(),H(3),c(),H(2),c(),c(),c(),c(),G(0),c(),c()],[c(),c(),G(1),G(2),c(),G(0),G(3),c(),c(),c(),G(2),G(1),c(),G(3),G(2),c(),c()],[w(),c(),c(),c(),c(),c(),G(2),c(),c(),c(),G(0),c(),c(),c(),c(),c(),w()],[w(),w(),w(),w(),c(),c(),c(),c(),c(),c(),c(),c(),c(),w(),w(),w(),w()]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:0,col:2},{row:0,col:3},{row:1,col:0}],1:[{row:0,col:13},{row:0,col:14},{row:0,col:15},{row:0,col:16},{row:1,col:16}],2:[{row:18,col:0},{row:18,col:1},{row:18,col:2},{row:18,col:3},{row:17,col:0}],3:[{row:18,col:13},{row:18,col:14},{row:18,col:15},{row:18,col:16},{row:17,col:16}],4:[{row:6,col:0},{row:7,col:0},{row:7,col:1},{row:11,col:0},{row:12,col:0}],5:[{row:6,col:16},{row:7,col:16},{row:7,col:15},{row:11,col:16},{row:12,col:16}],6:[{row:0,col:6},{row:0,col:7},{row:0,col:8},{row:0,col:9},{row:0,col:10}],7:[{row:18,col:6},{row:18,col:7},{row:18,col:8},{row:18,col:9},{row:18,col:10}]}},Sh={id:"map_8a",nameJa:"火山列島",nameCn:"火山列岛",width:15,height:19,maxPlayers:8,maxTeams:8,cells:[[w(),w(),w(),G(0),G(1),O(0),O(1),c(),O(2),O(0),G(2),G(3),w(),w(),w()],[w(),c(),c(),G(2),c(),w(),O(0),c(),O(1),w(),c(),G(0),c(),c(),w()],[G(0),c(),c(),c(),w(),O(1),O(2),c(),O(0),O(2),w(),c(),c(),c(),G(1)],[c(),c(),H(0),w(),O(0),O(1),w(),c(),w(),O(2),O(0),w(),H(1),c(),c()],[c(),c(),c(),c(),w(),w(),c(),c(),c(),w(),w(),c(),c(),c(),c()],[c(),G(0),c(),c(),c(),c(),T(1),c(),T(1),c(),c(),c(),c(),G(1),c()],[c(),G(2),c(),c(),T(1),T(2),T(2),T(1),T(2),T(2),T(1),c(),c(),G(3),c()],[O(0),w(),c(),T(1),T(2),T(3),H(0),T(2),H(1),T(3),T(2),T(1),c(),w(),O(1)],[O(1),w(),c(),T(2),T(3),H(2),T(3),T(3),T(3),H(3),T(3),T(2),c(),w(),O(0)],[O(2),c(),c(),T(1),T(2),T(3),T(3),T(3),T(3),T(3),T(2),T(1),c(),c(),O(2)],[O(0),w(),c(),T(2),T(3),H(0),T(3),T(3),T(3),H(1),T(3),T(2),c(),w(),O(1)],[O(1),w(),c(),T(1),T(2),T(3),H(2),T(2),H(3),T(3),T(2),T(1),c(),w(),O(0)],[c(),G(1),c(),c(),T(1),T(2),T(2),T(1),T(2),T(2),T(1),c(),c(),G(0),c()],[c(),G(3),c(),c(),c(),c(),T(1),c(),T(1),c(),c(),c(),c(),G(2),c()],[c(),c(),c(),c(),w(),w(),c(),c(),c(),w(),w(),c(),c(),c(),c()],[c(),c(),H(2),w(),O(2),O(0),w(),c(),w(),O(1),O(2),w(),H(3),c(),c()],[G(2),c(),c(),c(),w(),O(0),O(1),c(),O(2),O(1),w(),c(),c(),c(),G(3)],[w(),c(),c(),G(1),c(),w(),O(2),c(),O(0),w(),c(),G(3),c(),c(),w()],[w(),w(),w(),G(3),G(2),O(1),O(0),c(),O(1),O(2),G(0),G(1),w(),w(),w()]],startZones:{0:[{row:0,col:0},{row:0,col:1},{row:0,col:2},{row:1,col:0}],1:[{row:0,col:12},{row:0,col:13},{row:0,col:14},{row:1,col:14}],2:[{row:18,col:0},{row:18,col:1},{row:18,col:2},{row:17,col:0}],3:[{row:18,col:12},{row:18,col:13},{row:18,col:14},{row:17,col:14}],4:[{row:7,col:1},{row:8,col:1},{row:9,col:1},{row:10,col:1}],5:[{row:7,col:13},{row:8,col:13},{row:9,col:13},{row:10,col:13}],6:[{row:0,col:7},{row:1,col:7},{row:2,col:7},{row:3,col:7}],7:[{row:18,col:7},{row:17,col:7},{row:16,col:7},{row:15,col:7}]}},Ye=[xh,bh,vh,yh,_h,Ih,kh,jh,wh,Sh];function Ch(){try{const e="em_custom_maps_index",n="em_custom_map_",t=localStorage.getItem(e);if(!t)return Ye;const a=JSON.parse(t),o=[];for(const{id:s}of a){const i=localStorage.getItem(n+s);if(i)try{o.push(JSON.parse(i))}catch{}}return[...Ye,...o]}catch{return Ye}}function bc(e){switch(e.terrain){case"plain":return"/assets/tiles/平地0.png";case"sand":return"/assets/tiles/砂0.png";case"rubble":return`/assets/tiles/瓦礫${e.variant%4}.png`;case"forest":return`/assets/tiles/森${e.variant%4}.png`;case"water":return`/assets/tiles/水${e.variant%3}.png`;case"highland":return`/assets/tiles/高地${e.elevation}.png`;default:return"/assets/tiles/平地0.png"}}const q=[{id:"TR",deckCode:"TR",nameJa:"トルトハーン",nameCn:"托尔特哈恩",type:"M軽/単座",movement:6,evasion:8,assault:5,assaultDef:2,initiative:3,tokenId:"TR-token.jpg"},{id:"HO",deckCode:"HO",nameJa:"フォルニッセ",nameCn:"弗尼塞",type:"SS軽/単座",movement:7,evasion:10,assault:5,assaultDef:2,initiative:1,tokenId:"HO-token.jpg"},{id:"HY",deckCode:"HY",nameJa:"ヒストリクス",nameCn:"希斯特里克斯",type:"L重/単座",movement:3,evasion:3,assault:6,assaultDef:3,initiative:14,tokenId:"HY-token.jpg"},{id:"ZB",deckCode:"ZB",nameJa:"ズィマー・ブーリア",nameCn:"季马尔·布里亚",type:"S重/単座",movement:5,evasion:5,assault:6,assaultDef:3,initiative:9,tokenId:"ZB-token.jpg"},{id:"AR",deckCode:"AR",nameJa:"アラクネ",nameCn:"阿拉克涅",type:"S中/単座",movement:6,evasion:7,assault:5,assaultDef:2,initiative:5,tokenId:"AR-token.jpg"},{id:"BG",deckCode:"BG",nameJa:"ヴィスナー・グローム",nameCn:"维斯纳·格罗姆",type:"LL中/単座",movement:3,evasion:5,assault:6,assaultDef:3,initiative:13,tokenId:"BG-token.jpg"},{id:"LO",deckCode:"LO",nameJa:"リュミエール・デ・オラージュ",nameCn:"吕米耶尔",type:"L軽/単座",movement:5,evasion:7,assault:5,assaultDef:2,initiative:6,tokenId:"LO-token.jpg"},{id:"LG",deckCode:"LG",nameJa:"ルー・ガルー",nameCn:"卢·加鲁",type:"M重/単座",movement:4,evasion:4,assault:6,assaultDef:3,initiative:12,tokenId:"LG-token.jpg"},{id:"AG",deckCode:"AG",nameJa:"アルギュロス",nameCn:"阿尔古罗斯",type:"M中/単座",movement:5,evasion:6,assault:6,assaultDef:3,initiative:7,tokenId:"AG-token.jpg"}];function Nh(e,n){const t=[];let a=e.col,o=e.row;const s=n.col,i=n.row,l=Math.abs(s-a),d=Math.abs(i-o),u=a<s?1:-1,f=o<i?1:-1;let m=l-d;const g=(l+d)*2+2;let h=0;for(;h++<g&&(t.push({row:o,col:a}),!(a===s&&o===i));){const x=2*m;x>-d&&(m-=d,a+=u),x<l&&(m+=l,o+=f)}return t}function wa(e,n,t){var l;if(n.row===t.row&&n.col===t.col)return!0;const a=e.cells[n.row][n.col],o=e.cells[t.row][t.col],s=Math.max(a.elevation,o.elevation),i=Nh(n,t);for(const d of i){if(d.row===n.row&&d.col===n.col||d.row===t.row&&d.col===t.col)continue;const u=(l=e.cells[d.row])==null?void 0:l[d.col];if(u&&u.terrain==="highland"&&u.elevation>s)return!1}return!0}function Ke(e,n){return Math.max(Math.abs(e.row-n.row),Math.abs(e.col-n.col))}function gt(e,n,t){return e==="N"?t.row<=n.row:e==="S"?t.row>=n.row:e==="E"?t.col>=n.col:e==="W"?t.col<=n.col:!0}function wr(e,n,t){if(n!==2)return 0;if(e.plotSeg1){const a=t(e.plotSeg1.defId);if(a&&a.actionType==="aim")return 1}return 0}function Th(e,n,t,a){const o=[];if(t==="ranged"){for(const l of e.hand)if(!l.destroyed){const d=a(l.defId);(d==null?void 0:d.actionType)==="armor"&&(d.armorValue??0)>0&&o.push({instanceId:l.instanceId,defId:l.defId,armorValue:d.armorValue})}}const s=[],i=[{seg:1,card:e.plotSeg1},{seg:2,card:e.plotSeg2}];for(const{seg:l,card:d}of i){if(!d||d.destroyed)continue;const u=a(d.defId);(u==null?void 0:u.actionType)==="armor"&&(u.armorValue??0)>0&&s.push({instanceId:d.instanceId,defId:d.defId,seg:l,armorValue:u.armorValue})}return{handCards:o,plotCards:s}}function Ln(e,n,t,a){const o=n===1?e.plotSeg1:e.plotSeg2;if(!o)return null;const s=a(o.defId);return s&&(t==="ranged"&&s.actionType==="ranged"||t==="melee"&&(s.actionType==="melee"||s.actionType==="charge"))?s:null}function Xo(e,n,t,a,o){var u,f;let s=e;const i=[],l=(u=a.cells[n.row])==null?void 0:u[n.col],d=(f=a.cells[t.row])==null?void 0:f[t.col];return(l==null?void 0:l.terrain)==="water"&&o.isEnergyWeapon&&(s-=1,i.push("水域能量衰减-1")),(d==null?void 0:d.terrain)==="forest"&&(s-=1,i.push("森林掩护-1")),{dmg:Math.max(0,s),reasons:i}}function Qo(e,n,t,a,o,s){const i=Ln(e,t,a,s);if(!i)return{canAttack:!1,reason:"无攻击牌",damage:0,counterDamage:0,dist:0,card:null};const l=Ke(e.position,n.position);if(a==="ranged"){if(i.rangeMin===void 0||i.rangeMax===void 0)return{canAttack:!1,reason:"卡牌无射程数据",damage:0,counterDamage:0,dist:l,card:i};if(l<i.rangeMin)return{canAttack:!1,reason:`距离过近 (${l} < ${i.rangeMin})`,damage:0,counterDamage:0,dist:l,card:i};if(l>i.rangeMax)return{canAttack:!1,reason:`射程外 (${l} > ${i.rangeMax})`,damage:0,counterDamage:0,dist:l,card:i};if(!wa(o,e.position,n.position))return{canAttack:!1,reason:"视线被遮挡",damage:0,counterDamage:0,dist:l,card:i};if(!gt(e.facing,e.position,n.position))return{canAttack:!1,reason:`目标在机体后方（机头朝${e.facing}），无法射击`,damage:0,counterDamage:0,dist:l,card:i};let d=i.damage??0;const u=[];if(i.rangeOptimal!==void 0&&i.damageAttenuation!==void 0){const p=Math.max(0,l-i.rangeOptimal);if(p>0){const _=p*i.damageAttenuation;d=Math.max(0,d-_),u.push(`超射程-${_}`)}}const f=Xo(d,e.position,n.position,o,i),m=wr(e,t,s),g=f.dmg+m,h=[...u,...f.reasons];return m>0&&h.push("瞄准+1"),{canAttack:!0,reason:`有效射击${h.length>0?`（${h.join(", ")}）`:""}`,damage:g,counterDamage:0,dist:l,card:i}}if(a==="melee"&&i.actionType==="melee"){if(l!==1)return{canAttack:!1,reason:`不相邻 (距离 ${l})`,damage:0,counterDamage:0,dist:l,card:i};if(!wa(o,e.position,n.position))return{canAttack:!1,reason:"视线被遮挡",damage:0,counterDamage:0,dist:l,card:i};const d=Xo(i.damage??0,e.position,n.position,o,i),u=wr(e,t,s),f=d.dmg+u,m=[...d.reasons];return u>0&&m.push("瞄准+1"),{canAttack:!0,reason:`有效近战${m.length>0?`（${m.join(", ")}）`:""}`,damage:f,counterDamage:0,dist:l,card:i}}return a==="melee"&&i.actionType==="charge"?{canAttack:!1,reason:"突击卡需使用evaluateCharge()",damage:0,counterDamage:0,dist:l,card:i}:{canAttack:!1,reason:"非攻击时机",damage:0,counterDamage:0,dist:l,card:null}}const Mh=new Set(["パイルバンカー","スパイク"]),Eh=new Set(["アンカー","ロングアンカー"]);function Dh(e){return Mh.has(e.nameJa)}function vc(e){return!!e&&Eh.has(e.nameJa)}function $h(e,n,t,a,o,s){const i=s==="N"?{row:-1,col:0}:s==="S"?{row:1,col:0}:s==="E"?{row:0,col:1}:{row:0,col:-1};let l=n,d=a;for(;d>0;){const u={row:l.row+i.row,col:l.col+i.col};if(u.row<0||u.row>=e.height||u.col<0||u.col>=e.width||o.some(p=>p.row===u.row&&p.col===u.col))break;const f=e.cells[u.row][u.col],m=e.cells[l.row][l.col],g=f.terrain==="plain"||f.terrain==="sand"?1:f.terrain==="water"?3:2,h=Math.max(0,f.elevation-m.elevation),x=g+h;if(d<x)break;d-=x,l=u}return Ke(l,t)!==1||!gt(s,l,t)?null:l}function qo(e,n,t,a,o,s,i){const l=Ln(e,t,"melee",i);if(!l||l.actionType!=="charge")return{canAttack:!1,reason:"无突击牌",damage:0,counterDamage:0,dist:0,card:null};const d=Ke(e.position,n.position);if(Dh(l)){if(d!==1)return{canAttack:!1,reason:`不相邻 (距离 ${d})，${l.nameCn} 无法攻击`,damage:0,counterDamage:0,dist:d,card:l};if(!gt(e.facing,e.position,n.position))return{canAttack:!1,reason:`目标不在正面弧内（机头朝${e.facing}），${l.nameCn} 无法攻击`,damage:0,counterDamage:0,dist:d,card:l};const v=o.assault+1,j=Xo(v,e.position,n.position,a,l),C=wr(e,t,i),M=j.dmg+C,S=Math.max(0,s.assaultDef-1),E=[...j.reasons];C>0&&E.push("瞄准+1");const z=E.length>0?`（${E.join(", ")}）`:"";return{canAttack:!0,reason:`有效${l.nameCn}攻击${z}`,damage:M,counterDamage:S,dist:d,card:l,chargeDestination:e.position}}const f=o.assault,m=$h(a,e.position,n.position,f,[n.position],e.facing);if(!m)return{canAttack:!1,reason:`突击距离不足或目标不在正面弧内 (距离 ${d}，突击值 ${f})`,damage:0,counterDamage:0,dist:d,card:l};const g=o.assault,h=Xo(g,m,n.position,a,l),x=wr(e,t,i),p=h.dmg+x,_=s.assaultDef,y=[...h.reasons];return x>0&&y.push("瞄准+1"),{canAttack:!0,reason:`有效突击${y.length>0?`（${y.join(", ")}）`:""}`,damage:p,counterDamage:_,dist:d,card:l,chargeDestination:m}}function $n(e){const n=[...e.deck,...e.hand,...e.auxiliary];return e.plotSeg1&&n.push(e.plotSeg1),e.plotSeg2&&n.push(e.plotSeg2),n.filter(t=>!t.destroyed)}function fi(e){return $n(e).length}function Sa(e){const n=[...e.hand,...e.auxiliary];return e.plotSeg1&&n.push(e.plotSeg1),e.plotSeg2&&n.push(e.plotSeg2),n.filter(t=>!t.destroyed)}function Ts(e,n){var a,o;const t={...n,destroyed:!0};return{player:{...e,deck:e.deck.map(s=>s.instanceId===n.instanceId?t:s),hand:e.hand.map(s=>s.instanceId===n.instanceId?t:s),auxiliary:e.auxiliary.map(s=>s.instanceId===n.instanceId?t:s),plotSeg1:((a=e.plotSeg1)==null?void 0:a.instanceId)===n.instanceId?t:e.plotSeg1,plotSeg2:((o=e.plotSeg2)==null?void 0:o.instanceId)===n.instanceId?t:e.plotSeg2,destroyedCards:[...e.destroyedCards,t]},destroyed:t}}function ml(e,n,t,a){let o=e;const s=[];let i=n;const l=a?`[${a}] `:"";let d=0;const u=30;for(;i>0&&d<u;){i--,d++;const f=o.deck.filter(x=>!x.destroyed);if(f.length===0){s.push(`    ↳ ${l}【誘爆】牌组已空，无法继续检查`);break}const m=f[0],g=t(m.defId),h=(g==null?void 0:g.nameCn)??m.defId;if(g!=null&&g.hasBombIcon){const{player:x}=Ts(o,m);o=x,i++,s.push(`    ↳ ${l}【💣 誘爆】翻开 ${h}——有炸弹标记，破坏！（连锁+1）`)}else o={...o,deck:o.deck.filter(x=>x.instanceId!==m.instanceId),discard:[...o.discard,m]},s.push(`    ↳ ${l}【誘爆】翻开 ${h}——无炸弹标记，放入弃牌区`)}return{player:o,log:s}}function kt(e,n,t,a){let o=e;const s=[];let i=n,l=0;for(;i>0;){const d=o.deck.filter(b=>!b.destroyed),u=o.hand.filter(b=>!b.destroyed),f=o.auxiliary.filter(b=>!b.destroyed),m=[o.plotSeg1,o.plotSeg2].filter(b=>!!b&&!b.destroyed),g=d[0]??u[0]??f[0]??m[0];if(!g)break;const h=t(g.defId),x=(h==null?void 0:h.nameCn)??g.defId,{player:p}=Ts(o,g);o=p,i--;const _=h!=null&&h.hasBombIcon?"【💣】":"",y=a?`[${a}] `:"";if(s.push(`  ▶ ${y}${x} 被摧毁${_}`),h!=null&&h.hasBombIcon&&l++,o.destroyedCards.length>30)break}if(l>0){s.push(`  ─── 誘爆检查（${l}张炸弹卡被破坏）───`);const{player:d,log:u}=ml(o,l,t,a);o=d,s.push(...u)}return{player:o,log:s}}const Ah={plain:{type:"plain",nameJa:"平地",nameCn:"平原",moveCost:1,blocksLOS:!1,enterable:!0,providesCover:!1},sand:{type:"sand",nameJa:"砂地",nameCn:"沙地",moveCost:1,blocksLOS:!1,enterable:!0,providesCover:!1},rubble:{type:"rubble",nameJa:"瓦礫",nameCn:"瓦砾",moveCost:2,blocksLOS:!1,enterable:!0,providesCover:!1},forest:{type:"forest",nameJa:"森",nameCn:"森林",moveCost:2,blocksLOS:!1,enterable:!0,providesCover:!0},water:{type:"water",nameJa:"水辺",nameCn:"水域",moveCost:3,blocksLOS:!1,enterable:!0,providesCover:!1},highland:{type:"highland",nameJa:"高地",nameCn:"高地",moveCost:1,blocksLOS:!1,enterable:!0,providesCover:!1}};function Rm(e){const n=Ah[e];return n.enterable?n.moveCost:1/0}const Ms=[[-1,0],[1,0],[0,-1],[0,1]];function Lm(e,n){return e===-1?"N":e===1?"S":n===-1?"W":"E"}function Es(e,n,t){return n>=0&&n<e.height&&t>=0&&t<e.width}function ve(e,n){return e.row===n.row&&e.col===n.col}function zh(e,n,t,a,o){const s=Array.from({length:e.height},()=>new Array(e.width).fill(-1)),i=[{pos:n,remaining:t}];s[n.row][n.col]=t;const l=[{pos:n,remaining:t}];for(;i.length>0;){const{pos:d,remaining:u}=i.shift();for(const[f,m]of Ms){const g=d.row+f,h=d.col+m;if(!Es(e,g,h))continue;const x={row:g,col:h},p=e.cells[g][h];let _=Rm(p.terrain);if(_===1/0)continue;o!=null&&o.vernier&&(p.terrain==="rubble"||p.terrain==="forest"||p.terrain==="water")&&(_=1);const y=e.cells[d.row][d.col];let b=Math.abs(p.elevation-y.elevation);o!=null&&o.vernier&&(b=Math.max(0,b-1));const v=_+b;if(u<v)continue;const j=u-v;a.some(M=>ve(M,x))||s[g][h]>=j||(s[g][h]=j,l.push({pos:x,remaining:j}),i.push({pos:x,remaining:j}))}}return l}function Mt(e){return`${e.row},${e.col}`}function Om(e,n,t,a,o,s=1/0){if(t<=0)return[];const i=new Set(a.map(Mt)),l=[],d=new Set([Mt(n)]);function u(f,m,g){if(l.length>=s)return;let h=!1;for(const[x,p]of Ms){const _={row:f.row+x,col:f.col+p};if(!Es(e,_.row,_.col))continue;const y=Mt(_);if(d.has(y)||i.has(y))continue;const b=fl(e,f.row,f.col,_.row,_.col,o);b===1/0||m<b||(h=!0,d.add(y),g.push(_),u(_,m-b,g),g.pop(),d.delete(y))}!h&&g.length>0&&l.push({path:[...g],remaining:m})}return u(n,t,[]),l}function fl(e,n,t,a,o,s){const i=e.cells[a][o];let l=Rm(i.terrain);if(l===1/0)return 1/0;s!=null&&s.vernier&&(i.terrain==="rubble"||i.terrain==="forest"||i.terrain==="water")&&(l=1);const d=e.cells[n][t];let u=Math.abs(i.elevation-d.elevation);return s!=null&&s.vernier&&(u=Math.max(0,u-1)),l+u}function Ds(e,n,t,a,o,s="S"){const i=new Map;for(const l of Om(e,n,t,a,o)){const d=l.path[l.path.length-1],u=Mt(d),f=i.get(u);(!f||l.remaining>f.remaining)&&i.set(u,{pos:d,remaining:l.remaining})}return Array.from(i.values())}function $s(e,n,t,a,o,s,i){const l=Io(e,n,t,a,o,s,i,64);return l.length===0?null:(l.sort((d,u)=>d.path.length!==u.path.length?d.path.length-u.path.length:JSON.stringify(d.path).localeCompare(JSON.stringify(u.path))),l[0])}function Ph(e,n,t,a,o,s,i){if(s.length===0)return!1;const l=new Set([Mt(n)]);let d=n,u=a;for(const f of s){if(Math.abs(f.row-d.row)+Math.abs(f.col-d.col)!==1)return!1;const m=Mt(f);if(l.has(m)||o.some(h=>ve(h,f)))return!1;const g=fl(e,d.row,d.col,f.row,f.col,i);if(g===1/0||u<g)return!1;u-=g,l.add(m),d=f}if(!ve(d,t))return!1;for(const[f,m]of Ms){const g={row:d.row+f,col:d.col+m};if(!Es(e,g.row,g.col)||l.has(Mt(g))||o.some(x=>ve(x,g)))continue;const h=fl(e,d.row,d.col,g.row,g.col,i);if(h!==1/0&&u>=h)return!1}return!0}function Io(e,n,t,a,o,s,i,l=8){return ve(n,a)||o<=0?[]:Om(e,n,o,s,i,l*16).filter(d=>ve(d.path[d.path.length-1],a)).slice(0,l).map(d=>({path:d.path,finalFacing:t}))}function Km(e,n,t){const a=[];for(const[o,s]of Ms){const i=n.row+o,l=n.col+s;if(!Es(e,i,l))continue;const d={row:i,col:l};t.some(u=>ve(u,d))||a.push(d)}return a}function ko(e,n,t,a){const o=n===1?e.plotSeg1:e.plotSeg2;if(!o)return 0;const s=t(o.defId);return!s||s.actionType!=="movement"?0:(s.movementValue??0)+(a!=null&&a.wheel?2:0)}function Vh(e,n,t,a){const o=n===1?e.plotSeg1:e.plotSeg2;if(!o)return!1;const s=t(o.defId);return!s||s.actionType!=="movement"?!1:(s.movementValue??a)>0}const Rh="バーニア",Lh="ムーブセンサー",Oh="ホイール";function gn(e,n,t){const a=new Map;for(const m of e.auxiliary){if(m.destroyed)continue;const g=n(m.defId);g&&a.set(g.nameJa,(a.get(g.nameJa)??0)+1)}const o=a.get(Rh)??0,s=a.get(Lh)??0,i=a.get(Oh)??0,l=o>=2&&i>=2,d=!l&&o>=2,u=s>=2,f=!l&&i>=2;return{vernier:d&&(t==="movement"||t==="melee"),moveSensor:u&&t==="melee",wheel:f&&(t==="movement"||t==="charge")}}function Kh(e){const n={};for(const t of e)n[t]={kills:0,assists:0,damageDealt:0,damageTaken:0,damagedTargets:[]};return n}function es(e,n,t,a){if(a<=0)return e;const o=e[n],s=e[t];if(!o||!s)return e;const i={...o,damageDealt:o.damageDealt+a,damagedTargets:o.damagedTargets.includes(t)?o.damagedTargets:[...o.damagedTargets,t]},l={...s,damageTaken:s.damageTaken+a};return{...e,[n]:i,[t]:l}}function Jh(e,n,t){const a=e[n];if(!a)return e;let o={...e,[n]:{...a,kills:a.kills+1}};for(const[s,i]of Object.entries(o))s!==n&&i.damagedTargets.includes(t)&&(o={...o,[s]:{...i,assists:i.assists+1}});return o}function Bh(e){const n=e.battleStats,t=[];for(const a of e.playerIds){const o=e.players[a],s=q.find(x=>x.id===o.unitId),i=e.playerIds.indexOf(a),l=n==null?void 0:n[a],d=[...o.deck,...o.hand,...o.auxiliary,...o.discard,...o.destroyedCards,...o.plotSeg1?[o.plotSeg1]:[],...o.plotSeg2?[o.plotSeg2]:[]],f=new Set(d.map(x=>x.instanceId)).size,g=$n(o).length,h=(l==null?void 0:l.damageTaken)??o.destroyedCards.length;t.push({playerId:a,unitId:o.unitId,unitName:(s==null?void 0:s.nameCn)??a,team:e.teams[a]??0,alive:!o.isDefeated,kills:(l==null?void 0:l.kills)??0,assists:(l==null?void 0:l.assists)??0,damageDealt:(l==null?void 0:l.damageDealt)??0,damageTaken:h,cardsRemaining:g,totalCards:f,label:`P${i+1}`,hpPercent:f>0?Math.round(g/f*100):0})}return t}function Fh(e,n,t=!0){return[...e].sort((a,o)=>{let s,i;switch(n){case"kills":s=a.kills,i=o.kills;break;case"assists":s=a.assists,i=o.assists;break;case"damageDealt":s=a.damageDealt,i=o.damageDealt;break;case"damageTaken":s=a.damageTaken,i=o.damageTaken;break;case"cardsRemaining":s=a.cardsRemaining,i=o.cardsRemaining;break;case"alive":s=a.alive?1:0,i=o.alive?1:0;break;case"label":s=parseInt(a.label.slice(1)),i=parseInt(o.label.slice(1));break;default:s=0,i=0}return t?i-s:s-i})}function Jm(e,n){const t=n.row-e.row,a=n.col-e.col;return Math.abs(t)>=Math.abs(a)?t<0?"N":"S":a>0?"E":"W"}function Gh(e,n){switch(n){case"N":return{row:e.row-1,col:e.col};case"S":return{row:e.row+1,col:e.col};case"E":return{row:e.row,col:e.col+1};case"W":return{row:e.row,col:e.col-1}}}function ne(e){return`P${e.replace("player","")}`}function ns(e){switch(e){case"movement":return"移动时机";case"ranged":return"射击时机";case"melee":return"近战时机";case"special":return"特殊时机";default:return e}}function Hh(e){switch(e){case"movement":return"移动";case"ranged":return"射击";case"melee":return"近战";case"charge":return"突击";case"aim":return"瞄准";case"armor":return"装甲";case"mine":return"机雷";case"special":return"特殊";default:return e}}function gl(e,n){let t=Z(e,`══════ 主要阶段${n}开始 ══════`);t=Z(t,`全员翻开阶段${n}盖卡：`);for(const a of e.playerIds){if(t.players[a].isDefeated)continue;const o=t.players[a],s=q.find(u=>u.id===o.unitId),i=ne(a),l=(s==null?void 0:s.nameCn)??a,d=n===1?o.plotSeg1:o.plotSeg2;if(d){const u=te(d.defId);u?t=Z(t,`  ${i}[${l}] →【${u.nameCn}】(${Hh(u.actionType)})`):t=Z(t,`  ${i}[${l}] → (未知卡牌)`)}else t=Z(t,`  ${i}[${l}] → 未配置行动卡`)}return t}function yc(e,n,t,a="S"){const o=fh(n,e);return{id:e,unitId:n,position:t,facing:a,deck:o,hand:[],auxiliary:[],plotSeg1:null,plotSeg2:null,discard:[],destroyedCards:[],isDefeated:!1}}function Bm(e=2,n=2){const t=Ye[0],a=ha.slice(0,e),o={};for(let i=0;i<a.length;i++)o[a[i]]=i%n;const s={};for(const i of a){const l=o[i],d=t.startZones[l]??t.startZones[0]??[],u=d[Math.min(1,d.length-1)]??{row:0,col:0},f=l===0?"S":"N";s[i]=yc(i,"AG",u,f)}return{phase:"setup",roundNumber:0,activePlayer:a[0],players:s,playerIds:a,teams:o,teamCount:n,map:t,mines:[],log:[],turnOrder:[...a],currentTiming:null,plottingStep:null,pendingDamage:null,shuffleSeed:Date.now(),battleStats:Kh(a)}}function ie(e,n){return B0(e,n)}function he(e,n,t){return F0(e,n,t)}function Z(e,n){return{...e,log:[...e.log,n]}}function An(e,n){return{...e,log:[...e.log,`[DBG] ${n}`]}}function Uh(e,n){return e.filter(t=>t.instanceId!==n)}function Wh(e){const n=[],t=[];for(const a of e.deck){const o=te(a.defId);o&&o.actionType==="auxiliary"?t.push(a):n.push(a)}return{...e,deck:n,auxiliary:[...e.auxiliary,...t]}}function ts(e){const n=e.playerIds.filter(o=>!e.players[o].isDefeated),t=e.phase==="action_seg2"?2:1,a=n.map(o=>{const s=e.players[o],i=q.find(u=>u.id===s.unitId),l=(i==null?void 0:i.initiative)??0;let d=(i==null?void 0:i.movement)??0;if(e.currentTiming==="movement"){const u=t===1?s.plotSeg1:s.plotSeg2;if(u){const f=te(u.defId);f&&f.movementValue!==void 0&&(d=f.movementValue)}}return{id:o,initiative:l,movementValue:d}});return e.currentTiming==="movement"?a.sort((o,s)=>o.movementValue!==s.movementValue?s.movementValue-o.movementValue:s.initiative-o.initiative):a.sort((o,s)=>s.initiative-o.initiative),a.map(o=>o.id)}function Zh(e,n){const{playerId:t,unitId:a}=n,o=e.teams[t]??0,s=e.map.startZones[o]??[],i=ie(e,t).position,l=s.some(f=>f.row===i.row&&f.col===i.col)?i:s[Math.min(1,s.length-1)]??{row:0,col:0},d=ie(e,t).facing,u=yc(t,a,l,d);return Z(he(e,t,u),`${t} 选择了机体 ${a}`)}function Yh(e,n){const t=Ye.find(s=>s.id===n.mapId);if(!t)return e;const a={},o={};for(const s of e.playerIds){const i=e.teams[s]??0,l=t.startZones[i]??t.startZones[0]??[],d=o[i]??0;o[i]=d+1;const u=l[Math.min(d,l.length-1)]??{row:0,col:0},f=i===0?"S":"N";a[s]=yc(s,e.players[s].unitId,u,f)}return Z({...e,map:t,players:a},`选择了地图 ${t.nameCn}`)}function Xh(e,n){if(e.phase!=="setup")return e;const{playerId:t,position:a}=n,o=ie(e,t);return he(e,t,{...o,position:a})}function Qh(e,n){if(e.phase!=="setup")return e;const{playerId:t,facing:a}=n,o=ie(e,t);return he(e,t,{...o,facing:a})}function qh(e){var a;const n={...e.players};let t={...e,phase:"draw",roundNumber:1};for(const o of e.playerIds){const s=Wh(e.players[o]);n[o]=s;for(const i of s.auxiliary){const l=te(i.defId);t=Z(t,`${o} 补助卡【${(l==null?void 0:l.nameCn)??i.defId}】从卡组移至辅助区`)}}t={...t,players:n};for(const o of e.playerIds){const s=((a=q.find(i=>i.id===t.players[o].unitId))==null?void 0:a.evasion)??5;t=_c(t,{playerId:o,count:s})}return Z({...t,phase:"pregame",plottingStep:null,activePlayer:e.playerIds[0],currentTiming:null},"=== 第 1 回合开始 ===")}function ex(e){if(e.phase!=="pregame")return e;const n=e.playerIds[0];return{...e,phase:"plotting",plottingStep:`transition_to_${n}`,activePlayer:n}}function _c(e,n){const t=ie(e,n.playerId),a=[],o=[];let s=t.deck.filter(g=>!g.destroyed),i=t.discard.filter(g=>!g.destroyed);const l=i.length;let d=!1,u=e.shuffleSeed;for(;o.length<n.count;){if(s.length===0){if(i.length===0)break;const p=Vm([...i],u);s=p.shuffled,u=p.nextSeed,i=[],d=!0}const g=n.count-o.length,{drawn:h,remaining:x}=hh(s,g);s=x;for(const p of h){const _=te(p.defId);_&&_.actionType==="auxiliary"?a.push(p):o.push(p)}}const f={...t,deck:s,discard:i,hand:[...t.hand,...o],auxiliary:[...t.auxiliary,...a]};let m=he({...e,shuffleSeed:u},n.playerId,f);d&&(m=Z(m,`${n.playerId} 的卡组耗尽，弃牌区（${l} 张）洗入卡组`)),m=Z(m,`${n.playerId} 抽了 ${o.length} 张牌`);for(const g of a){const h=te(g.defId),x=(h==null?void 0:h.nameCn)??g.defId;m=Z(m,`  ↳ 辅助卡【${x}】自动放置到辅助区`)}return m}function nx(e,n){var f;const{playerId:t,seg:a,instanceId:o}=n,s=ie(e,t),i=s.hand.find(m=>m.instanceId===o);if(!i)return e;const l=((f=te(i.defId))==null?void 0:f.nameCn)??i.defId;e=An(e,`PLOT_CARD: ${ne(t)} 配置【${l}】到阶段${a}`);const d=Uh(s.hand,o),u={...s,hand:d,plotSeg1:a===1?i:s.plotSeg1,plotSeg2:a===2?i:s.plotSeg2};return he(e,t,u)}function tx(e,n){const{playerId:t}=n,a=Z(e,`${t} 完成了布局`),o=e.playerIds.indexOf(t),s=e.playerIds.slice(o+1).find(u=>!a.players[u].isDefeated);if(s)return{...a,activePlayer:s,plottingStep:`transition_to_${s}`};const l={...gl(a,1),activePlayer:e.playerIds[0],phase:"action_seg1",plottingStep:"complete",currentTiming:"movement",turnOrder:[]},d={...l,turnOrder:ts(l)};return Z(d,`▸ ${ns("movement")} — 行动顺序：${d.turnOrder.map(ne).join(" → ")}`)}function ax(e){const n=e.plottingStep;if(!n)return e;for(const t of e.playerIds)if(n===`transition_to_${t}`)return{...e,plottingStep:t,activePlayer:t};if(n==="transition"){const t=e.playerIds.indexOf(e.activePlayer);if(t>=0&&t<e.playerIds.length-1){const a=e.playerIds[t+1];return{...e,plottingStep:a,activePlayer:a}}}return e}function rx(e,n){var p;const{playerId:t,to:a}=n;let o=ie(e,t);if(o.isDefeated)return e;const s=o.position;e=An(e,`MOVE_UNIT: ${ne(t)} (${s.row},${s.col})→(${a.row},${a.col}) 阶段=${e.phase} 时机=${e.currentTiming}`);const i=e.map,l=e.playerIds.filter(_=>_!==t&&!e.players[_].isDefeated).map(_=>ie(e,_).position);if(l.some(_=>ve(_,a)))return Z(e,`${ne(t)} 移动无效：目标位置 (${a.row}, ${a.col}) 已被其他机体占据`);const d=e.phase==="action_seg2"?2:1,u=q.find(_=>_.id===o.unitId),f=gn(o,te,"movement"),m=u?ko(o,d,te,f)||u.movement:0,g=n.path?Ph(i,s,a,m,l,n.path,f)?n.path:null:((p=$s(i,s,o.facing,a,m,l,f))==null?void 0:p.path)??null;let h=e;if(!g||g.length===0)return Z(e,`${ne(t)} 移动无效：所选终点不满足原版移动规则`);const x=n.finalFacing??o.facing;return o={...o,position:a,facing:x},h=he(h,t,o),h=Z(h,`${t} 移动到 (${a.row}, ${a.col})，机头朝${x}`),tn(h)}function ox(e,n){const{playerId:t,damage:a}=n,o=ie(e,t),s=n.placements?n.placements:n.to?[{position:n.to,kind:"real"}]:[];if(s.length===0)return Z(e,`${ne(t)} 布雷无效：未选择任何指示物位置`);const i=!n.placements&&s.length===1;if(!i&&s.length!==4)return Z(e,`${ne(t)} 布雷无效：必须设置 4 个指示物（真雷2、替身2）`);const l=s.filter(h=>h.kind==="real").length,d=s.filter(h=>h.kind==="dummy").length;if(!i&&(l!==2||d!==2))return Z(e,`${ne(t)} 布雷无效：真雷与替身雷必须各放置 2 个`);const u=new Set(e.mines.map(h=>`${h.position.row},${h.position.col}`)),f=new Set;for(const h of s){const{row:x,col:p}=h.position;if(x<0||x>=e.map.height||p<0||p>=e.map.width)return Z(e,`${ne(t)} 布雷无效：存在超出地图范围的指示物位置`);if(Math.max(Math.abs(x-o.position.row),Math.abs(p-o.position.col))!==1)return Z(e,`${ne(t)} 布雷无效：机雷指示物只能放在自机周围 8 格`);const _=`${x},${p}`;if(u.has(_)||f.has(_))return Z(e,`${ne(t)} 布雷无效：机雷指示物不能与其他指示物重叠`);f.add(_)}const m=s.map((h,x)=>({id:`mine-${Date.now()}-${x}-${Math.random().toString(36).substring(2,9)}`,ownerId:t,position:h.position,damage:a,kind:h.kind}));let g={...e,mines:[...e.mines,...m]};if(i){const[h]=m;return g=Z(g,`${ne(t)} 在 (${h.position.row}, ${h.position.col}) 部署了机雷`),g}return g=Z(g,`${ne(t)} 在周围 8 格部署了 4 个隐藏指示物（真雷2、替身2）`),g}function Kd(e,n,t){var _,y,b;const{attackerId:a,targetId:o}=n,s=e.phase==="action_seg1"?1:2,i=ie(e,a),l=ie(e,o);if(i.isDefeated||l.isDefeated)return e;e=An(e,`RESOLVE_${t.toUpperCase()}: ${ne(a)}(${i.position.row},${i.position.col},${i.facing})→${ne(o)}(${l.position.row},${l.position.col},${l.facing}) seg=${s}`);const d=Qo(i,l,s,t,e.map,te),f=wr(i,s,te)>0?a:void 0;if(!d.canAttack)return Z(e,`${a} 攻击无效：${d.reason}`);const m=((_=q.find(v=>v.id===i.unitId))==null?void 0:_.nameCn)??a,g=((y=q.find(v=>v.id===l.unitId))==null?void 0:y.nameCn)??o,h=((b=d.card)==null?void 0:b.nameCn)??"???",x=t==="ranged"?"射击":"近战";let p=e;if(t==="melee"){const v=Jm(i.position,l.position);v!==i.facing&&(p=he(p,a,{...ie(p,a),facing:v}),p=Z(p,`${m} 近战攻击后自动转向【${v}】`))}if(p=Z(p,`${m} 对 ${g} 发动${x}【${h}】→ 造成 ${d.damage} 点伤害`),t==="ranged"&&vc(d.card)){const v=Gh(i.position,i.facing),j=v.row>=0&&v.row<p.map.height&&v.col>=0&&v.col<p.map.width,C=p.playerIds.some(M=>M!==o&&!p.players[M].isDefeated&&ve(p.players[M].position,v));j?C?p=Z(p,`${h} 命中，但自机正前方被其他机体占据，无法拖拽目标`):ve(l.position,v)?p=Z(p,`${h} 命中效果：${g} 已在自机正前方，位置不变`):(p=he(p,o,{...ie(p,o),position:v}),p=Z(p,`${h} 命中效果：${g} 被强制移动到 (${v.row}, ${v.col})，朝向保持不变`)):p=Z(p,`${h} 命中，但自机正前方超出地图，无法拖拽目标`)}return p={...p,lastDamageContext:{attackerId:a,targetId:o,weaponName:h}},p.battleStats&&d.damage>0&&(p={...p,battleStats:es(p.battleStats,a,o,d.damage)}),xa(p,o,d.damage,t,s,f,h)}function xa(e,n,t,a,o,s,i){if(t<=0)return tn(e);const l=ie(e,n),{handCards:d,plotCards:u}=Th(l,o,a,te);return d.length>0||u.length>0?{...e,pendingArmorChoice:{targetId:n,damage:t,source:a,attackerId:s,weaponName:i,handCards:d,plotCards:u}}:Ic(e,n,t,a,s)}function sx(e,n){const t=e.pendingArmorChoice;if(!t||t.targetId!==n.playerId)return e;let a={...e,pendingArmorChoice:void 0};const o=new Set(n.selectedInstanceIds);let s=0;const i=[];for(const d of o){const u=ie(a,t.targetId),f=$n(u).find(h=>h.instanceId===d);if(!f)continue;const m=te(f.defId);if(!m||m.actionType!=="armor")continue;s+=m.armorValue??0,i.push(m.nameCn);const{player:g}=Ts(u,f);a=he(a,t.targetId,g)}s>0?a=Z(a,`[${ne(t.targetId)}] 激活装甲【${i.join("、")}】减伤 -${s} 点`):a=Z(a,`[${ne(t.targetId)}] 放弃使用装甲`);const l=Math.max(0,t.damage-s);return pt(Ic(a,t.targetId,l,t.source,t.attackerId))}function Ic(e,n,t,a,o){if(t<=0)return tn(e);const s=ie(e,n),i=$n(s);if(i.length===0)return tn(e);if(a!=="ranged"){const l=s.deck.filter(m=>!m.destroyed).length,d=s.discard.filter(m=>!m.destroyed).length;if(!(l===0&&d===0)){let m=e,g=t;const h=Math.min(g,l);if(h>0){const{player:x,log:p}=kt(ie(m,n),h,te,ne(n));for(const _ of p)m=Z(m,_);m=he(m,n,x),g-=h}if(g>0&&d>0){const x=ie(m,n),p=x.discard.filter(C=>!C.destroyed),_=x.discard.filter(C=>C.destroyed),{shuffled:y,nextSeed:b}=Vm(p,m.shuffleSeed);m={...m,shuffleSeed:b};const v={...x,deck:[...x.deck,...y],discard:_};m=he(m,n,v),m=Z(m,`${ne(n)} 的卡组耗尽，弃牌区（${p.length} 张）洗入卡组`);const j=Math.min(g,p.length);if(j>0){const{player:C,log:M}=kt(ie(m,n),j,te,ne(n));for(const S of M)m=Z(m,S);m=he(m,n,C),g-=j}}if(g>0){const x=ie(m,n),p=$n(x);if(p.length===0)return tn(m);if(p.length<=g){const{player:_,log:y}=kt(x,g,te,ne(n));for(const b of y)m=Z(m,b);return m=he(m,n,_),tn(m)}return m=Z(m,`[${ne(n)}] 牌组与弃牌区已耗尽，切换为防方自选伤害模式`),{...m,pendingDamage:{targetId:n,remaining:g,selectedInstanceIds:[],destroyedBombCount:0,source:a,attackerId:o}}}return tn(m)}const f=a==="charge"?"突击":a==="mine"?"机雷":"近战";e=Z(e,`[${ne(n)}] 牌组与弃牌区已耗尽，本次${f}伤害切换为防方自选模式`)}if(i.length<=t){const{player:l,log:d}=kt(s,t,te,ne(n));let u=e;for(const f of d)u=Z(u,f);return u=he(u,n,l),tn(u)}if(a==="ranged"){const l=Sa(s).length,d=Math.min(t,l),u=t-d;if(d<=0){const{player:f,log:m}=kt(s,t,te,ne(n));let g=e;for(const h of m)g=Z(g,h);return g=he(g,n,f),tn(g)}return{...e,pendingDamage:{targetId:n,remaining:d,selectedInstanceIds:[],destroyedBombCount:0,source:a,attackerId:o,deckAutoCount:u}}}return{...e,pendingDamage:{targetId:n,remaining:t,selectedInstanceIds:[],destroyedBombCount:0,source:a,attackerId:o}}}function ix(e,n){var x;const{attackerId:t,targetId:a}=n,o=e.phase==="action_seg1"?1:2,s=ie(e,t),i=ie(e,a);if(s.isDefeated||i.isDefeated)return e;e=An(e,`RESOLVE_CHARGE: ${ne(t)}(${s.position.row},${s.position.col},${s.facing})→${ne(a)}(${i.position.row},${i.position.col},${i.facing}) seg=${o}`);const l=q.find(p=>p.id===s.unitId),d=q.find(p=>p.id===i.unitId),u=qo(s,i,o,e.map,l,d,te);if(!u.canAttack)return Z(e,`${t} 突击无效：${u.reason}`);const f=l.nameCn,m=d.nameCn,g=((x=u.card)==null?void 0:x.nameCn)??"突击";let h=e;if(u.chargeDestination&&(u.chargeDestination.row!==s.position.row||u.chargeDestination.col!==s.position.col)){const p=u.chargeDestination,_={...s,position:p};h=he(h,t,_),h=Z(h,`${f} 发动突击冲锋，移动至 (${p.row}, ${p.col})`)}{const p=ie(h,t),_=Jm(p.position,i.position);_!==p.facing&&(h=he(h,t,{...p,facing:_}),h=Z(h,`${f} 突击后自动转向【${_}】`))}h=Z(h,`${f} 对 ${m} 发动${g}【突击值 ${l.assault}】→ 对目标造成 ${u.damage} 点近战伤害；自机承受反伤 ${u.counterDamage} 点`);{const p=h.battleStats;if(p){let _=p;u.damage>0&&(_=es(_,t,a,u.damage)),u.counterDamage>0&&(_=es(_,a,t,u.counterDamage)),h={...h,battleStats:_}}}if(u.counterDamage>0){h={...h,pendingFollowUpDamage:{targetId:t,amount:u.counterDamage,source:"charge",attackerId:a,weaponName:"突击反伤",seg:o}},h={...h,lastDamageContext:{attackerId:t,targetId:a,weaponName:g}};const p=xa(h,a,u.damage,"charge",o,void 0,g);if(!p.pendingDamage&&!p.pendingArmorChoice){if(p.phase==="game_over")return p;const y={...{...p,pendingFollowUpDamage:void 0},lastDamageContext:{attackerId:a,targetId:t,weaponName:"突击反伤"}};return xa(y,t,u.counterDamage,"charge",o)}return p}return h={...h,lastDamageContext:{attackerId:t,targetId:a,weaponName:g}},xa(h,a,u.damage,"charge",o,void 0,g)}function as(e){if(!e.pendingFollowUpDamage||e.phase==="game_over")return pt(e);const{targetId:n,amount:t,source:a,attackerId:o,weaponName:s,seg:i}=e.pendingFollowUpDamage;let l={...e,pendingFollowUpDamage:void 0};return o&&s&&(l={...l,lastDamageContext:{attackerId:o,targetId:n,weaponName:s}}),pt(i?xa(l,n,t,a,i):Ic(l,n,t,a))}function lx(e,n){const t=e.pendingDamage;if(!t)return e;const{playerId:a,instanceId:o}=n,s=t.selectedInstanceIds.length===0,i=!!t.attackerId&&s&&!t.attackerDesignatedCardId,l=i?t.attackerId:t.targetId;if(a!==l)return e;const d=ie(e,t.targetId),u=$n(d).find(b=>b.instanceId===o&&!b.destroyed);if(!u||t.selectedInstanceIds.includes(o))return e;if(t.source==="ranged"&&!i){const b=Sa(d);if(d.deck.some(j=>j.instanceId===o&&!j.destroyed)&&b.length>0)return e}const{player:f}=Ts(d,u);let m=he(e,t.targetId,f);const g=te(u.defId),h=(g==null?void 0:g.nameCn)??u.defId,x=g!=null&&g.hasBombIcon?"【💣】":"";m=Z(m,`  ▶ [${ne(t.targetId)}] ${h} 被摧毁${x}`);let p=t.remaining-1;const _=(t.destroyedBombCount??0)+(g!=null&&g.hasBombIcon?1:0);if(p<=0){if(m={...m,pendingDamage:null},t.deckAutoCount&&t.deckAutoCount>0){const b=ie(m,t.targetId),{player:v,log:j}=kt(b,t.deckAutoCount,te,ne(t.targetId));for(const C of j)m=Z(m,C);m=he(m,t.targetId,v)}if(_>0){const b=ie(m,t.targetId);m=Z(m,`  ─── 誘爆检查（${_}张炸弹卡被破坏）───`);const{player:v,log:j}=ml(b,_,te,ne(t.targetId));for(const C of j)m=Z(m,C);m=he(m,t.targetId,v)}return m=tn(m),pt(as(m))}if($n(ie(m,t.targetId)).length===0){if(m={...m,pendingDamage:null},_>0){const b=ie(m,t.targetId);m=Z(m,`  ─── 誘爆检查（${_}张炸弹卡被破坏）───`);const{player:v,log:j}=ml(b,_,te,ne(t.targetId));for(const C of j)m=Z(m,C);m=he(m,t.targetId,v)}return m=tn(m),pt(as(m))}return m={...m,pendingDamage:{...t,remaining:p,selectedInstanceIds:[...t.selectedInstanceIds,o],destroyedBombCount:_,attackerDesignatedCardId:i?o:t.attackerDesignatedCardId}},m}function cx(e,n){const t=e.pendingDamage;if(!t)return e;const a=t.selectedInstanceIds.length===0,s=!!t.attackerId&&a&&!t.attackerDesignatedCardId?t.attackerId:t.targetId;if(n.playerId!==s)return e;const i=t.remaining+(t.deckAutoCount??0);if(i>0){const d=ie(e,t.targetId),{player:u,log:f}=kt(d,i,te,ne(t.targetId));let m=e;for(const g of f)m=Z(m,g);return m=he(m,t.targetId,u),m={...m,pendingDamage:null},m=tn(m),pt(as(m))}let l={...e,pendingDamage:null};return pt(as(l))}function Jd(e){const n=["movement","ranged","melee","special"],t=n.indexOf(e.currentTiming);if(t===-1){console.warn("[GameReducer] Invalid currentTiming:",e.currentTiming);const o=An(e,`ADVANCE_TIMING: currentTiming 无效(${e.currentTiming})，强制推进阶段`);return on(o,{type:"ADVANCE_PHASE"})}if(t<n.length-1){const o=n[t+1],s={...e,currentTiming:o},i={...s,turnOrder:ts(s)};return Z(i,`▸ ${ns(o)} — 行动顺序：${i.turnOrder.map(ne).join(" → ")}`)}const a=An(e,`ADVANCE_TIMING: ${e.phase}/${e.currentTiming} 时机全部完成，推进到下一阶段`);return on(a,{type:"ADVANCE_PHASE"})}function pt(e){return e.pendingAdvanceTiming?e.phase==="game_over"?{...e,pendingAdvanceTiming:!1}:e.pendingDamage||e.pendingArmorChoice||e.pendingFollowUpDamage?e:rs({...e,pendingAdvanceTiming:!1},!0):e}function rs(e,n){const t=e.mines.find(l=>e.playerIds.some(d=>!e.players[d].isDefeated&&ve(e.players[d].position,l.position)));if(!t)return n?Jd({...e,pendingAdvanceTiming:!1}):e;const a=e.playerIds.find(l=>!e.players[l].isDefeated&&ve(e.players[l].position,t.position));if(!a)return n?Jd({...e,pendingAdvanceTiming:!1}):e;let o={...e,mines:e.mines.filter(l=>l.id!==t.id),pendingAdvanceTiming:n,lastDamageContext:{attackerId:t.ownerId,targetId:a,weaponName:"机雷"}};if(o=Z(o,`时机结束时，(${t.position.row}, ${t.position.col}) 的隐藏指示物被翻开`),t.kind==="dummy")return o=Z(o,`翻开结果为替身雷，${ne(a)} 未受到伤害`),rs(o,n);o=Z(o,`翻开结果为机雷，爆炸对 ${ne(a)} 造成 ${t.damage} 点伤害！`),o.battleStats&&t.damage>0&&(o={...o,battleStats:es(o.battleStats,t.ownerId,a,t.damage)});const s=e.phase==="action_seg2"?2:1,i=xa(o,a,t.damage,"mine",s,void 0,"机雷");return i.pendingDamage||i.pendingArmorChoice||i.pendingFollowUpDamage||i.phase==="game_over"?i:rs(i,n)}function Bd(e){return rs({...e,pendingAdvanceTiming:!1},!0)}function dx(e){var t,a;const n=An(e,`ADVANCE_PHASE: ${e.phase} → 推进`);switch(e.phase){case"draw":{const o=n.playerIds.find(s=>!n.players[s].isDefeated)??n.playerIds[0];return{...n,phase:"plotting",plottingStep:`transition_to_${o}`,activePlayer:o,currentTiming:null}}case"plotting":{const s={...gl(n,1),phase:"action_seg1",plottingStep:"complete",currentTiming:"movement"};let l={...s,turnOrder:ts(s)};for(const d of l.playerIds){const u=l.players[d];if(u.isDefeated)continue;const f=u.plotSeg1?((t=te(u.plotSeg1.defId))==null?void 0:t.nameCn)??u.plotSeg1.defId:"(空)",m=u.plotSeg2?((a=te(u.plotSeg2.defId))==null?void 0:a.nameCn)??u.plotSeg2.defId:"(空)";l=An(l,`${ne(d)} 配置: 阶段1=[${f}] 阶段2=[${m}] 位置=${u.position.row},${u.position.col} 朝向=${u.facing}`)}return Z(l,`▸ ${ns("movement")} — 行动顺序：${l.turnOrder.map(ne).join(" → ")}`)}case"action_seg1":{const s={...gl(n,2),phase:"action_seg2",currentTiming:"movement"},i={...s,turnOrder:ts(s)};return Z(i,`▸ ${ns("movement")} — 行动顺序：${i.turnOrder.map(ne).join(" → ")}`)}case"action_seg2":return ux(n);default:return n}}function ux(e){let n=An(e,`CLEANUP: 第${e.roundNumber}回合结束`);for(const l of e.playerIds){const d=e.players[l];n=An(n,`  ${ne(l)}: 位置=(${d.position.row},${d.position.col}) 朝向=${d.facing} 手牌=${d.hand.length} 牌组=${d.deck.filter(u=>!u.destroyed).length} 弃牌=${d.discard.length} ${d.isDefeated?"已击破":"存活"}`)}e=n;const t=(l,d)=>!d||d.destroyed?l:{...l,discard:[...l.discard,d]},a={...e.players};for(const l of e.playerIds){let d=t(e.players[l],e.players[l].plotSeg1);d=t(d,d.plotSeg2),d={...d,plotSeg1:null,plotSeg2:null},d={...d,discard:[...d.discard,...d.hand.filter(u=>!u.destroyed)],hand:[]},a[l]=d}const o={...e,players:a,phase:"cleanup",currentTiming:null},s=Z(o,`--- 第 ${e.roundNumber} 回合结束 ---`),i=tn(s);return i.phase==="game_over"?i:px(i)}function px(e){var o;const n=e.roundNumber+1;let t=Z({...e,phase:"draw",roundNumber:n},`=== 第 ${n} 回合开始 ===`);for(const s of e.playerIds){if(t.players[s].isDefeated)continue;const i=((o=q.find(l=>l.id===t.players[s].unitId))==null?void 0:o.evasion)??5;t=_c(t,{playerId:s,count:i})}const a=e.playerIds.find(s=>!t.players[s].isDefeated)??e.playerIds[0];return{...t,phase:"plotting",plottingStep:`transition_to_${a}`,activePlayer:a,currentTiming:null}}function tn(e){const n=i=>{const l=[...i.deck,...i.hand,...i.auxiliary,...i.discard,...i.plotSeg1?[i.plotSeg1]:[],...i.plotSeg2?[i.plotSeg2]:[]].filter(u=>!u.destroyed);return l.length<=3?!0:!l.some(u=>{const f=te(u.defId);return f&&(f.actionType==="ranged"||f.actionType==="melee"||f.actionType==="charge"||f.actionType==="mine")})},t={...e.players};let a=!1;for(const i of e.playerIds){if(t[i].isDefeated)continue;n(t[i])&&(t[i]={...t[i],isDefeated:!0},a=!0)}if(!a)return e;let o={...e,players:t};for(const i of e.playerIds)if(!e.players[i].isDefeated&&o.players[i].isDefeated){const l=q.find(m=>m.id===o.players[i].unitId),d=e.playerIds.indexOf(i),u=d>=0?`P${d+1}`:i,f=o.lastDamageContext;if(f&&f.targetId===i&&f.attackerId){const m=q.find(x=>{var p;return x.id===((p=o.players[f.attackerId])==null?void 0:p.unitId)}),g=e.playerIds.indexOf(f.attackerId),h=g>=0?`P${g+1}`:f.attackerId;o=Z(o,`💀 ${u}[${(l==null?void 0:l.nameCn)??i}] 被 ${h}[${(m==null?void 0:m.nameCn)??f.attackerId}] 以【${f.weaponName}】击毁！`),o.battleStats&&(o={...o,battleStats:Jh(o.battleStats,f.attackerId,i)})}else o=Z(o,`💀 ${u}[${(l==null?void 0:l.nameCn)??i}] 机体严重受损，宣告报废！`)}const s=new Set;for(const i of e.playerIds)o.players[i].isDefeated||s.add(o.teams[i]);if(s.size<=1){if(s.size===0)return Z({...o,phase:"game_over"},"所有队伍同时全灭！平局！");const i=[...s][0],l=e.playerIds.filter(d=>o.teams[d]===i).map(d=>{const u=q.find(f=>f.id===o.players[d].unitId);return(u==null?void 0:u.nameCn)??d}).join("、");return Z({...o,phase:"game_over"},`队伍${i+1}（${l}）获胜！`)}return o}function mx(e,n){if(e.currentTiming!=="melee")return e;const{playerId:t,to:a}=n,o=ie(e,t),s=e.playerIds.filter(f=>f!==t).map(f=>ie(e,f).position);if(!gn(o,te,"melee").moveSensor)return Z(e,`${t} 移动传感器未激活（需要辅助区中有≥2张）`);if(!Km(e.map,o.position,s).some(f=>ve(f,a)))return Z(e,`${t} 移动传感器目标格不在有效范围内`);const d={...o,position:a};let u=he(e,t,d);return u=Z(u,`【辅助】${t} 移动传感器：向 (${a.row}, ${a.col}) 移动1格`),u}function fx(e,n){const{playerId:t,facing:a}=n,o=ie(e,t),i=(e.phase==="action_seg2"?2:1)===1?o.plotSeg1:o.plotSeg2,l=i?te(i.defId):null;if(!(e.currentTiming==="melee"&&(l==null?void 0:l.actionType)==="melee"||e.currentTiming==="special"&&(l==null?void 0:l.actionType)==="aim"||e.currentTiming==="ranged"&&vc(l)))return Z(e,`${ne(t)} 当前时机不可调整朝向`);const u=q.find(g=>g.id===o.unitId),f=(u==null?void 0:u.nameCn)??t;let m=he(e,t,{...o,facing:a});return m=Z(m,`${f} 调整机头朝向至【${a}】`),m}function on(e,n){switch(n.type){case"SELECT_UNIT":return Zh(e,n);case"SELECT_MAP":return Yh(e,n);case"CONFIRM_SETUP":return qh(e);case"START_PLOTTING":return ex(e);case"SET_SPAWN_POSITION":return Xh(e,n);case"SET_SPAWN_FACING":return Qh(e,n);case"DRAW_CARDS":return _c(e,n);case"PLOT_CARD":return nx(e,n);case"CONFIRM_PLOT":return tx(e,n);case"ADVANCE_PLOT_STEP":return ax(e);case"MOVE_UNIT":return rx(e,n);case"ADJUST_FACING":return fx(e,n);case"ADVANCE_TIMING":return Bd(e);case"ADVANCE_PHASE":return dx(e);case"SKIP_ACTION":return Bd(e);case"RESET_GAME":return Bm(n.playerCount??2,n.teamCount??2);case"LOAD_GAME":return n.state;case"ADD_LOG":return Z(e,n.message);case"RESOLVE_RANGED":return Kd(e,n,"ranged");case"RESOLVE_MELEE":return Kd(e,n,"melee");case"RESOLVE_CHARGE":return ix(e,n);case"PLACE_MINE":return ox(e,n);case"SELECT_DAMAGE_CARD":return lx(e,n);case"CONFIRM_DAMAGE_SELECTION":return cx(e,n);case"CONFIRM_ARMOR_CHOICE":return sx(e,n);case"MELEE_SENSOR_MOVE":return mx(e,n);default:return e}}class gx{constructor(){en(this,"ctx",null);en(this,"_enabled",!0);en(this,"_volume",.5)}init(){this.ctx||(this.ctx=new AudioContext),this.ctx.state==="suspended"&&this.ctx.resume()}get enabled(){return this._enabled}set enabled(n){this._enabled=n}get volume(){return this._volume}set volume(n){this._volume=Math.max(0,Math.min(1,n))}ensure(){return!this._enabled||!this.ctx?null:(this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx)}makeGain(n,t){const a=n.createGain();return a.gain.value=t*this._volume,a.connect(n.destination),a}noiseBuffer(n,t){const a=Math.floor(n.sampleRate*t),o=n.createBuffer(1,a,n.sampleRate),s=o.getChannelData(0);for(let i=0;i<a;i++)s[i]=Math.random()*2-1;return o}cardFlip(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createBufferSource();a.buffer=this.noiseBuffer(n,.06);const o=n.createBiquadFilter();o.type="highpass",o.frequency.value=3e3;const s=this.makeGain(n,.25);s.gain.setValueAtTime(.25*this._volume,t),s.gain.exponentialRampToValueAtTime(.001,t+.05),a.connect(o),o.connect(s),a.start(t),a.stop(t+.06)}footstep(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createOscillator();a.type="sine",a.frequency.setValueAtTime(150,t),a.frequency.exponentialRampToValueAtTime(60,t+.05);const o=this.makeGain(n,.2);o.gain.setValueAtTime(.2*this._volume,t),o.gain.exponentialRampToValueAtTime(.001,t+.08),a.connect(o),a.start(t),a.stop(t+.08);const s=n.createBufferSource();s.buffer=this.noiseBuffer(n,.03);const i=n.createBiquadFilter();i.type="bandpass",i.frequency.value=800,i.Q.value=2;const l=this.makeGain(n,.1);l.gain.setValueAtTime(.1*this._volume,t),l.gain.exponentialRampToValueAtTime(.001,t+.03),s.connect(i),i.connect(l),s.start(t),s.stop(t+.03)}weaponFire(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createBufferSource();a.buffer=this.noiseBuffer(n,.15);const o=n.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(1200,t),o.frequency.exponentialRampToValueAtTime(400,t+.12),o.Q.value=3;const s=this.makeGain(n,.3);s.gain.setValueAtTime(.3*this._volume,t),s.gain.exponentialRampToValueAtTime(.001,t+.15),a.connect(o),o.connect(s),a.start(t),a.stop(t+.15);const i=n.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(800,t),i.frequency.exponentialRampToValueAtTime(200,t+.12);const l=this.makeGain(n,.15);l.gain.setValueAtTime(.15*this._volume,t),l.gain.exponentialRampToValueAtTime(.001,t+.12),i.connect(l),i.start(t),i.stop(t+.12)}metalImpact(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=[200,340];for(const i of a){const l=n.createOscillator();l.type="sine",l.frequency.value=i;const d=this.makeGain(n,.2);d.gain.setValueAtTime(.2*this._volume,t),d.gain.exponentialRampToValueAtTime(.001,t+.25),l.connect(d),l.start(t),l.stop(t+.25)}const o=n.createBufferSource();o.buffer=this.noiseBuffer(n,.02);const s=this.makeGain(n,.25);s.gain.setValueAtTime(.25*this._volume,t),s.gain.exponentialRampToValueAtTime(.001,t+.02),o.connect(s),o.start(t),o.stop(t+.02)}explosion(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createOscillator();a.type="sine",a.frequency.setValueAtTime(60,t),a.frequency.exponentialRampToValueAtTime(30,t+.5);const o=this.makeGain(n,.35);o.gain.setValueAtTime(.35*this._volume,t),o.gain.setValueAtTime(.35*this._volume,t+.1),o.gain.exponentialRampToValueAtTime(.001,t+.5),a.connect(o),a.start(t),a.stop(t+.5);const s=n.createBufferSource();s.buffer=this.noiseBuffer(n,.4);const i=n.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(3e3,t),i.frequency.exponentialRampToValueAtTime(200,t+.35);const l=this.makeGain(n,.3);l.gain.setValueAtTime(.3*this._volume,t),l.gain.exponentialRampToValueAtTime(.001,t+.35),s.connect(i),i.connect(l),s.start(t),s.stop(t+.4)}cardShatter(){const n=this.ensure();if(!n)return;const t=n.currentTime;for(let a=0;a<5;a++){const o=t+a*.03,s=n.createBufferSource();s.buffer=this.noiseBuffer(n,.02);const i=n.createBiquadFilter();i.type="highpass",i.frequency.value=1e3+a*300;const l=this.makeGain(n,.2);l.gain.setValueAtTime(.2*this._volume,o),l.gain.exponentialRampToValueAtTime(.001,o+.02),s.connect(i),i.connect(l),s.start(o),s.stop(o+.02)}}mineBeep(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=[600,800,1e3];for(let o=0;o<a.length;o++){const s=t+o*.1,i=n.createOscillator();i.type="sine",i.frequency.value=a[o];const l=this.makeGain(n,.15);l.gain.setValueAtTime(.15*this._volume,s),l.gain.setValueAtTime(.15*this._volume,s+.05),l.gain.exponentialRampToValueAtTime(.001,s+.08),i.connect(l),i.start(s),i.stop(s+.08)}}chargeRumble(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(80,t),a.frequency.linearRampToValueAtTime(120,t+.3);const o=n.createOscillator();o.type="sine",o.frequency.value=15;const s=n.createGain();s.gain.value=.15*this._volume;const i=this.makeGain(n,.25);i.gain.setValueAtTime(.25*this._volume,t),i.gain.exponentialRampToValueAtTime(.001,t+.4),o.connect(s),s.connect(i.gain),a.connect(i),o.start(t),a.start(t),o.stop(t+.4),a.stop(t+.4)}uiBlip(){const n=this.ensure();if(!n)return;const t=n.currentTime,a=n.createOscillator();a.type="sine",a.frequency.value=880;const o=this.makeGain(n,.1);o.gain.setValueAtTime(.1*this._volume,t),o.gain.exponentialRampToValueAtTime(.001,t+.06),a.connect(o),a.start(t),a.stop(t+.06)}}const fe=new gx,hx={move_step:200,card_draw:350,ranged_hit:400,melee_hit:350,charge_move:300,charge_hit:450,card_destroy:400,mine_explode:500,mine_place:300,screen_shake:300,damage_number:600,cleanup_discard:2500,batch_card_draw:1600,deck_reshuffle:800};function xx(e){return hx[e.type]??300}const Fm=I.createContext(null);function As({children:e}){const[n,t]=I.useState(!1),[a,o]=I.useState(null),[s,i]=I.useState(()=>Object.fromEntries(ha.map(x=>[x,null]))),l=I.useRef([]),d=I.useRef(!1),u=I.useRef(!1),f=I.useRef((()=>{try{const x=localStorage.getItem("em_anim_speed");return x==="fast"?.5:x==="off"?0:1}catch{return 1}})()).current,m=I.useCallback(()=>{if(u.current||l.current.length===0){o(null),t(!1),i(Object.fromEntries(ha.map(_=>[_,null]))),d.current=!1,u.current=!1;return}const x=l.current.shift();o(x),x.type==="move_step"&&i(_=>({..._,[x.playerId]:{pos:x.to,facing:x.facing}})),bx(x);const p=f===0?0:xx(x)*f;p===0?m():setTimeout(()=>m(),p)},[f]),g=I.useCallback(x=>{if(x.length!==0&&f!==0&&(l.current.push(...x),!d.current)){d.current=!0,u.current=!1,t(!0);const p=x.find(_=>_.type==="move_step");p&&i(_=>({..._,[p.playerId]:{pos:p.from,facing:p.facing}})),setTimeout(()=>m(),16)}},[m,f]),h=I.useCallback(()=>{u.current=!0,l.current=[],o(null),t(!1),i(Object.fromEntries(ha.map(x=>[x,null]))),d.current=!1},[]);return r.jsx(Fm.Provider,{value:{isAnimating:n,currentEvent:a,animatedPositions:s,enqueueEvents:g,skipAnimation:h,speedMultiplier:f},children:e})}function Ea(){const e=I.useContext(Fm);if(!e)throw new Error("useAnimation must be used inside <AnimationProvider>");return e}function bx(e){switch(e.type){case"card_draw":fe.cardFlip();break;case"move_step":fe.footstep();break;case"ranged_hit":fe.weaponFire(),setTimeout(()=>fe.metalImpact(),100);break;case"melee_hit":fe.metalImpact();break;case"charge_move":fe.chargeRumble();break;case"charge_hit":fe.explosion(),setTimeout(()=>fe.metalImpact(),80);break;case"card_destroy":e.isBomb?fe.explosion():fe.cardShatter();break;case"mine_explode":fe.explosion();break;case"mine_place":fe.mineBeep();break;case"cleanup_discard":case"batch_card_draw":fe.cardFlip();break;case"deck_reshuffle":fe.cardFlip(),setTimeout(()=>fe.cardFlip(),200);break}}function Gm(e,n){const{isAnimating:t,enqueueEvents:a}=Ea();return I.useCallback(o=>{const s=o.type==="ADVANCE_TIMING"||o.type==="ADVANCE_PHASE"||o.type==="ADJUST_FACING"||o.type==="START_PLOTTING"||o.type==="SELECT_DAMAGE_CARD"||o.type==="CONFIRM_DAMAGE_SELECTION";if(t&&!s)return;const i=n.current,l=on(i,o);e(o);const d=vx(i,l,o);d.length>0&&a(d)},[e,n,t,a])}function vx(e,n,t){switch(t.type){case"MOVE_UNIT":return yx(e,n,t);case"RESOLVE_RANGED":return Fd(e,n,"ranged",t.attackerId,t.targetId);case"RESOLVE_MELEE":return Fd(e,n,"melee",t.attackerId,t.targetId);case"RESOLVE_CHARGE":return _x(e,n,t.attackerId,t.targetId);case"DRAW_CARDS":return Ix(e,n,t.playerId);case"ADVANCE_TIMING":return e.phase==="action_seg2"&&n.phase!=="action_seg2"?[kx(e),...Gd(e,n,"player1"),...Gd(e,n,"player2")]:[];case"PLACE_MINE":return(t.placements??(t.to?[{position:t.to,kind:"real"}]:[])).map(a=>({type:"mine_place",playerId:t.playerId,position:a.position}));case"SELECT_DAMAGE_CARD":return jx(e,n);default:return[]}}function yx(e,n,t){const{playerId:a}=t,o=hn(e,a),s=hn(n,a),i=o.position;if(ve(i,s.position))return[];const l=[],d=t.path&&t.path.length>0?t.path:[s.position];let u=i;for(const g of d){const h=Lm(g.row-u.row,g.col-u.col);if(l.push({type:"move_step",playerId:a,from:u,to:g,facing:h}),u=g,ve(g,s.position))break}const f=e.mines.filter(g=>!n.mines.some(h=>h.id===g.id));for(const g of f)g.kind==="real"&&(l.push({type:"mine_explode",position:g.position,damage:g.damage}),l.push({type:"screen_shake",intensity:"heavy"}));const m=zs(e,n,a);return Ps(l,a,m),l}function Fd(e,n,t,a,o){var f;const s=[],i=hn(e,o).position,l=zs(e,n,o),d=l.length;if(d===0&&!n.pendingDamage)return[];const u=d+(((f=n.pendingDamage)==null?void 0:f.remaining)??0);return s.push({type:t==="ranged"?"ranged_hit":"melee_hit",attackerId:a,targetId:o,damage:u,targetPos:i}),s.push({type:"screen_shake",intensity:t==="melee"?"medium":"light"}),u>0&&s.push({type:"damage_number",position:i,value:u}),Ps(s,o,l),s}function _x(e,n,t,a){var f;const o=[],s=hn(e,t),i=hn(n,t),l=hn(e,a).position;ve(s.position,i.position)||(o.push({type:"charge_move",attackerId:t,from:s.position,to:i.position}),o.push({type:"move_step",playerId:t,from:s.position,to:i.position,facing:Lm(i.position.row-s.position.row,i.position.col-s.position.col)}));const d=zs(e,n,a),u=d.length+(((f=n.pendingDamage)==null?void 0:f.remaining)??0);return o.push({type:"charge_hit",attackerId:t,targetId:a,damage:u,targetPos:l}),o.push({type:"screen_shake",intensity:"heavy"}),u>0&&o.push({type:"damage_number",position:l,value:u}),Ps(o,a,d),o}function Ix(e,n,t){const a=[],o=hn(e,t),s=hn(n,t),i=new Set(o.hand.map(u=>u.instanceId)),l=s.hand.filter(u=>!i.has(u.instanceId));if(l.length>0){const u=o.deck.filter(g=>!g.destroyed).length,f=Math.min(l.length,u),m=l.length-f;f>0&&a.push({type:"batch_card_draw",playerId:t,count:f}),m>0&&(a.push({type:"deck_reshuffle",playerId:t}),a.push({type:"batch_card_draw",playerId:t,count:m}))}const d=new Set(o.auxiliary.map(u=>u.instanceId));for(const u of s.auxiliary)d.has(u.instanceId)||a.push({type:"card_draw",playerId:t,card:u,defId:u.defId,isAuxiliary:!0});return a}function kx(e){function n(t){const a=[];for(const o of t.hand)o.destroyed||a.push(o);return t.plotSeg1&&!t.plotSeg1.destroyed&&a.push(t.plotSeg1),t.plotSeg2&&!t.plotSeg2.destroyed&&a.push(t.plotSeg2),a}return{type:"cleanup_discard",p1Cards:n(e.players.player1),p2Cards:n(e.players.player2)}}function Gd(e,n,t){const a=[],o=hn(e,t),s=hn(n,t),i=s.hand.length;if(i>0){const d=o.deck.filter(m=>!m.destroyed).length,u=Math.min(i,d),f=i-u;u>0&&a.push({type:"batch_card_draw",playerId:t,count:u}),f>0&&(a.push({type:"deck_reshuffle",playerId:t}),a.push({type:"batch_card_draw",playerId:t,count:f}))}const l=new Set(o.auxiliary.map(d=>d.instanceId));for(const d of s.auxiliary)l.has(d.instanceId)||a.push({type:"card_draw",playerId:t,card:d,defId:d.defId,isAuxiliary:!0});return a}function jx(e,n){const t=e.pendingDamage;if(!t)return[];const a=zs(e,n,t.targetId),o=[];return Ps(o,t.targetId,a),o}function hn(e,n){return e.players[n]}function zs(e,n,t){const a=new Set(hn(e,t).destroyedCards.map(o=>o.instanceId));return hn(n,t).destroyedCards.filter(o=>!a.has(o.instanceId))}function Ps(e,n,t){for(let a=0;a<t.length;a++){const o=t[a],s=te(o.defId);e.push({type:"card_destroy",playerId:n,card:o,defId:o.defId,isBomb:(s==null?void 0:s.hasBombIcon)??!1,index:a,total:t.length})}}const wx={player1:!1,player2:!1,player1Difficulty:"hard",player2Difficulty:"hard",playerAI:{},playerDifficulty:{}};function Ae(e,n){var t;return((t=e.playerAI)==null?void 0:t[n])!==void 0?e.playerAI[n]:n==="player1"?e.player1:n==="player2"?e.player2:!1}function Pr(e,n){var t;return((t=e.playerDifficulty)==null?void 0:t[n])!==void 0?e.playerDifficulty[n]:n==="player1"?e.player1Difficulty:n==="player2"?e.player2Difficulty:"hard"}function kc(e,n){const t=e.teams[n];return e.playerIds.filter(a=>a!==n&&e.teams[a]!==t&&!e.players[a].isDefeated)}function Vs(e,n){const t=e.players[n].position,a=kc(e,n);if(a.length===0)return e.playerIds.find(i=>i!==n)??n;let o=a[0],s=1/0;for(const i of a){const l=Ke(t,e.players[i].position);l<s&&(s=l,o=i)}return o}function Bn(e,n){return e.players[n]}function ia(e,n){const t=n.row-e.row,a=n.col-e.col;return Math.abs(t)>=Math.abs(a)?t<0?"N":"S":a>0?"E":"W"}function Ba(e){const n={};for(const t of e)t.destroyed||(n[t.defId]=(n[t.defId]??0)+1);return n}function Sx(e){return Object.values(e).reduce((n,t)=>n+t,0)}function Cx(e,n){const t={...e};for(const[a,o]of Object.entries(n))t[a]&&(t[a]=Math.max(0,t[a]-o),t[a]===0&&delete t[a]);return t}function jc(e,n){const t={};for(const[a,o]of Object.entries(e)){const s=n(a),i=(s==null?void 0:s.actionType)??"unknown";t[i]=(t[i]??0)+o}return t}function Fa(e,n,t){if(e<=0||n<=0||t<=0)return 0;const a=Math.min(t,n);let o=1;for(let s=0;s<a;s++)o*=Math.max(0,(n-e-s)/(n-s));return 1-o}function hl(e){const n=Object.entries(e).filter(([,t])=>t>0).sort((t,a)=>a[1]-t[1]).slice(0,4).map(([t,a])=>`${t}${a}`);return n.length>0?n.join("、"):"无"}function Et(e,n,t){const a=Ba((Vt[e.unitId]??[]).map(g=>({instanceId:`${g.id}-template`,defId:g.id,destroyed:!1}))),o=t==="self"?Ba(e.hand):{},s=t==="self"?Ba(e.deck):{},i=Ba([...e.auxiliary,...e.discard,...e.destroyedCards,...e.plotSeg1?[e.plotSeg1]:[],...e.plotSeg2?[e.plotSeg2]:[]]),l=t==="self"?Ba([...e.hand,...e.deck,...e.auxiliary,...e.discard,...e.destroyedCards,...e.plotSeg1?[e.plotSeg1]:[],...e.plotSeg2?[e.plotSeg2]:[]]):i,d=t==="self"?s:Cx(a,l),u=Sx(d),f=jc(d,n),m=g=>Object.entries(d).reduce((h,[x,p])=>{const _=n(x);return h+((_==null?void 0:_.actionType)===g?p:0)},0);return{playerId:e.id,unitId:e.unitId,perspective:t,handSize:e.hand.filter(g=>!g.destroyed).length,deckSize:e.deck.filter(g=>!g.destroyed).length,exactHandCounts:o,exactDeckCounts:s,hiddenPoolCounts:d,actionTypeCounts:f,armorInHiddenHandProb:Fa(m("armor"),u,e.hand.length),rangedInHiddenHandProb:Fa(m("ranged"),u,e.hand.length),meleeInHiddenHandProb:Fa(m("melee"),u,e.hand.length),chargeInHiddenHandProb:Fa(m("charge"),u,e.hand.length),movementInHiddenHandProb:Fa(m("movement"),u,e.hand.length)}}function Hm(e,n){let t=0;return n<=5&&(t+=e.rangedInHiddenHandProb*2.2),n<=2&&(t+=e.meleeInHiddenHandProb*2.4),n<=3&&(t+=e.chargeInHiddenHandProb*2),n>=3&&(t+=e.movementInHiddenHandProb*.8),t}function Ie(e){return`[AI][${e.replace("player","P")}]`}function Nx(e,n,t,a,o,s){if(!n)return 0;const i=Ke(t.position,a.position);let l;switch(n.actionType){case"ranged":case"melee":case"charge":l=5+(n.damage??0);break;case"movement":l=2+(n.movementValue??0)*.5;break;case"aim":case"armor":case"special":l=2;break;case"mine":l=1.5+(n.damage??0)*.2;break;default:l=1}n.hasBombIcon&&(s?l+=5:l+=8);const u=$n(t).filter(p=>p.defId===e.defId&&!p.destroyed).length;u>=3?l-=3:u===2&&(l-=1.5);const f=q.find(p=>p.id===t.unitId),m=(f==null?void 0:f.movement)??3;if(n.actionType==="movement"&&(i>=4?l+=3:i<=2&&(l-=.5)),n.actionType==="ranged"||n.actionType==="melee"||n.actionType==="charge"){const p=nt(n,i,m);p>=.8?l+=4:p>=.4?l+=2:p>=.1?l+=.5:l-=2}const g=$n(t),h=g.length,x=n.actionType==="ranged"||n.actionType==="melee"||n.actionType==="charge"||n.actionType==="mine";if(h<=6&&!x){const p=g.filter(_=>{const y=o(_.defId);return y&&(y.actionType==="ranged"||y.actionType==="melee"||y.actionType==="charge"||y.actionType==="mine")}).length;h<=4?l-=4:h<=6&&p<=2&&(l-=2)}return l}function Ut(e,n,t,a,o,s){if(e.actionType!=="movement")return[];const i=gn(n,o,"movement"),l=(e.movementValue??0)+(i.wheel?2:0);if(l<=0)return[];const d=[t.position],u=Ds(a,n.position,l,d,i,n.facing),f=[];for(const{pos:m}of u)$s(a,n.position,n.facing,m,l,[t.position],i)&&f.push({pos:m,dist:Ke(m,t.position)});return f.sort((m,g)=>m.dist-g.dist),f}function Tx(e,n,t,a,o,s){const i=Ut(e,t,a,o,s);if(i.length===0)return null;if(n.actionType==="melee"){const l=i.find(d=>d.dist===1);return l?{...l,facing:ia(l.pos,a.position)}:null}if(n.actionType==="ranged"){const l=n.rangeMin??1,d=n.rangeMax??6,u=n.rangeOptimal??Math.round((l+d)/2);let f=null,m=1/0;for(const g of i){if(g.dist<l||g.dist>d||!wa(o,g.pos,a.position))continue;const h=ia(g.pos,a.position);if(!gt(h,g.pos,a.position))continue;const x=Math.abs(g.dist-u);x<m&&(m=x,f=g)}return f?{...f,facing:ia(f.pos,a.position)}:null}if(n.actionType==="charge"){const l=i.find(d=>d.dist<=3);return l?{...l,facing:ia(l.pos,a.position)}:null}return null}function sr(e,n,t,a,o,s,i){var u;let l=e.damage??0;if(e.actionType==="ranged"&&e.rangeOptimal!==void 0&&e.damageAttenuation!==void 0){const f=Math.max(0,t-e.rangeOptimal);l-=f*e.damageAttenuation}const d=(u=i.cells[n.row])==null?void 0:u[n.col];return(d==null?void 0:d.terrain)==="water"&&e.isEnergyWeapon&&(l-=1),Math.max(0,l)}function Mx(e){return e.armorInHiddenHandProb}function Ex(e,n,t,a,o,s,i,l){var b,v;const d=Ke(t.position,a.position),u=(b=o.cells[a.position.row])==null?void 0:b[a.position.col],f=(v=o.cells[t.position.row])==null?void 0:v[t.position.col],m=Mx(l),g=Hm(l,d),h=j=>["ranged","melee","charge"].includes(j.actionType),x=(u==null?void 0:u.terrain)==="forest"?.85:1,p=i.actionTypeCounts.movement??0,_=i.actionTypeCounts.armor??0;if(e.actionType==="movement"&&h(n)){const j=Tx(e,n,t,a,o,s);if(j)return sr(n,j.pos,j.dist,2,!1,!1,o)*(1-m*.5)*x*3.5+2+Math.max(0,1.5-g*.25);const C=Ut(e,t,a,o,s),M=C.length>0?C[0].dist:d,S=d-M,E=e.movementValue??0,z=nt(n,M,E);return S*1.5+(n.damage??0)*z*.8+(p<=1&&d>4?.6:0)}if(e.actionType==="aim"&&h(n)){let j=(n.damage??0)+1,C=!1;if(n.actionType==="ranged"){const E=n.rangeMin??1,z=n.rangeMax??6;if(C=d>=E&&d<=z&&wa(o,t.position,a.position)&&gt(t.facing,t.position,a.position),C&&n.rangeOptimal&&n.damageAttenuation){const N=Math.max(0,d-n.rangeOptimal);j-=N*n.damageAttenuation}(f==null?void 0:f.terrain)==="water"&&n.isEnergyWeapon&&(j-=1)}else n.actionType==="melee"?C=d===1:n.actionType==="charge"&&(C=d<=3);j=Math.max(0,j);const M=j*(1-m*.5)*x;if(C)return M*4+3-m*.8;const S=nt(n,d,3);return M*.5*S+.1}if(h(e)&&n.actionType==="movement"){let j=0;if(e.actionType==="ranged"){const S=e.rangeMin??1,E=e.rangeMax??6;if(d>=S&&d<=E&&wa(o,t.position,a.position)&&gt(t.facing,t.position,a.position))j=sr(e,t.position,d,1,!1,!1,o)*(1-m*.5)*x*2.5;else{const N=nt(e,d,n.movementValue??0);j=(e.damage??0)*N*.8}}else if(e.actionType==="melee")if(d===1)j=sr(e,t.position,d,1,!1,!1,o)*(1-m*.5)*3;else{const S=nt(e,d,n.movementValue??0);j=(e.damage??0)*S*.8}else if(e.actionType==="charge")if(d<=3)j=(e.damage??0)*2;else{const S=nt(e,d,n.movementValue??0);j=(e.damage??0)*S*.8}const C=Ut(n,t,a,o,s),M=C.length>0?Math.max(0,d-C[0].dist)*1+1:.5;return j+M}if(h(e)&&n.actionType==="armor"){let j=to(e,d,t.position,t.facing,a.position,o,x,m,1);const C=(d<=3?2.5:d<=5?1.5:.5)+g*.5;return j+C}if(e.actionType==="armor"&&h(n)){const j=(d<=3?2.5:d<=5?1.5:.5)+g*.5;let C=to(n,d,t.position,t.facing,a.position,o,x,m,2);return j+C}if(e.actionType==="movement"&&n.actionType==="movement"){if(d<=3)return 1;const j=Ut(e,t,a,o,s),C=j.length>0?j[0].dist:d,M=d-C,S=n.movementValue??0;return(M+Math.min(S,C-1))*1.2+.5}if(h(e)&&h(n)){const j=to(e,d,t.position,t.facing,a.position,o,x,m,1),C=to(n,d,t.position,t.facing,a.position,o,x,m,2),M=j>1&&C>1;return j+C+(M?2:0)}if(e.actionType==="movement"&&n.actionType==="armor"){const j=Ut(e,t,a,o,s),C=j.length>0?j[0].dist:d;return(d-C)*1+(C<=3?2:.5)}if(e.actionType==="armor"&&n.actionType==="movement"){const j=(d<=3?2:.5)+g*.3,C=Ut(n,t,a,o,s),M=C.length>0?C[0].dist:d;return j+(d-M)*1}if(e.actionType==="aim"&&!h(n))return .3+ao(n,d);if(e.actionType==="mine"||n.actionType==="mine"){const j=d<=3?1.5:.5,C=e.actionType==="mine"?n:e;return j+ao(C,d)+l.movementInHiddenHandProb}const y=_<=1&&g>2.4&&e.actionType!=="armor"&&n.actionType!=="armor"?-.8:0;return ao(e,d)+ao(n,d)+y}function nt(e,n,t){if(e.actionType==="ranged"){const a=e.rangeMin??1,o=e.rangeMax??6;if(n>=a&&n<=o)return 1;const s=n<a?a-n:n-o;return s<=t?.6-s*.1:Math.max(0,.15-(s-t)*.05)}if(e.actionType==="melee"){if(n===1)return 1;const a=n-1;return a<=t?.6-a*.1:Math.max(0,.15-(a-t)*.05)}if(e.actionType==="charge"){if(n<=3)return 1;const a=n-3;return a<=t?.6-a*.1:Math.max(0,.15-(a-t)*.05)}return 0}function to(e,n,t,a,o,s,i,l,d){const u=nt(e,n,3);if(e.actionType==="ranged"){const f=e.rangeMin??1,m=e.rangeMax??6;return n>=f&&n<=m&&wa(s,t,o)&&gt(a,t,o)?sr(e,t,n,d,!1,!1,s)*(1-l*.5)*i*2.5:(e.damage??0)*u*.8}return e.actionType==="melee"?n===1?sr(e,t,n,d,!1,!1,s)*(1-l*.5)*3:(e.damage??0)*u*.8:e.actionType==="charge"?n<=3?(e.damage??0)*2:(e.damage??0)*u*.8:0}function ao(e,n){switch(e.actionType){case"movement":return(e.movementValue??0)*.4+(n>3?1:.2);case"armor":return n<=3?2:n<=5?1:.3;case"aim":return .3;case"mine":return n<=3?1.5:.5;case"special":return 1;case"ranged":case"melee":case"charge":{const t=nt(e,n,3);return(e.damage??0)*t*.5+.1}default:return .1}}function Dx(e,n,t,a,o){var p;const s=e.hand.filter(_=>!_.destroyed),i=Et(e,t,"self");if(s.length===0)return{seg1:null,seg2:null,reasoning:[`${Ie(e.id)} 手牌为空，无法布局。`]};if(s.length===1)return{seg1:s[0].instanceId,seg2:null,reasoning:[`${Ie(e.id)} 仅剩 1 张手牌，直接配置【${((p=t(s[0].defId))==null?void 0:p.nameCn)??s[0].defId}】。`]};if(a==="easy"){const _=[...s].sort(()=>Math.random()-.5);return{seg1:_[0].instanceId,seg2:_[1].instanceId,reasoning:[`${Ie(e.id)} 简单 AI 随机布局。`]}}const l=Array.isArray(n)?n:[n];let d=-1/0,u=s[0].instanceId,f=s[1].instanceId,m=null,g=null,h=null;for(let _=0;_<s.length;_++){const y=s[_],b=t(y.defId);if(b)for(let v=0;v<s.length;v++){if(_===v)continue;const j=s[v],C=t(j.defId);if(!C)continue;let M=0,S=null;if(o)for(const E of l){const z=Et(E,t,"opponent"),N=Ex(b,C,e,E,o,t,i,z);N>M&&(M=N,S=E)}M>d&&(d=M,u=y.instanceId,f=j.instanceId,m=S,g=b,h=C)}}const x=[`${Ie(e.id)} 布局评估：手牌${s.length}张，剩余牌池=${hl(jc(i.exactDeckCounts,t))}。`];if(m&&g&&h){const _=Et(m,t,"opponent");x.push(`${Ie(e.id)} 目标锁定 ${m.id.replace("player","P")}：其隐藏手牌装甲概率=${Math.round(_.armorInHiddenHandProb*100)}%，威胁池=${hl(_.actionTypeCounts)}。`,`${Ie(e.id)} 选择【${g.nameCn}】→【${h.nameCn}】，综合得分=${d.toFixed(1)}。`)}return{seg1:u,seg2:f,reasoning:x}}function $x(e,n,t,a,o){const s=Bn(e,n),i=kc(e,n),l=Vs(e,n),d=Bn(e,l),u=Et(s,a,"self"),f=gn(s,a,"movement"),m=t===1?s.plotSeg1:s.plotSeg2;if(!m)return null;const g=a(m.defId);if(!g||g.actionType!=="movement")return null;const h=(g.movementValue??0)+(f.wheel?2:0);if(h<=0)return null;const x=e.playerIds.filter(L=>L!==n&&!e.players[L].isDefeated).map(L=>e.players[L].position),p=Ds(e.map,s.position,h,x,f,s.facing);if(p.length===0)return null;function _(L){let W=l,V=Ke(L,d.position);for(const k of i){const $=Ke(L,e.players[k].position);$<V&&(V=$,W=k)}return{eid:W,dist:V}}function y(L){const W=$s(e.map,s.position,s.facing,L,h,x,f);if(!W)return null;const{eid:V}=_(L);return{pos:L,path:W.path,finalFacing:ia(L,e.players[V].position),reasoning:[]}}if(o==="easy"){if(Math.random()<.5)return null;const L=[...p].sort(()=>Math.random()-.5);for(const{pos:W}of L){const V=y(W);if(V)return V}return null}const v=(t===1?2:1)===1?s.plotSeg1:s.plotSeg2,j=v?a(v.defId):null;let C;if(!j)C=1;else if(j.actionType==="ranged"){const L=j.rangeMin??1,W=j.rangeMax??6;C=j.rangeOptimal??Math.round((L+W)/2)}else j.actionType==="melee"||j.actionType==="charge"?C=1:C=2;const M=[];for(const L of i){const W=Bn(e,L),V=Sa(W);for(const k of V){const $=a(k.defId);$&&$.actionType==="ranged"&&M.push({min:$.rangeMin??1,max:$.rangeMax??6,ownerPos:W.position})}}const S=e.mines.filter(L=>L.ownerId!==n),E=i.map(L=>Et(e.players[L],a,"opponent")),z=[];for(const{pos:L}of p){const{dist:W}=_(L),V=-Math.abs(W-C)*3,$=S.some(X=>ve(X.position,L))?-10:0,J=e.map.cells[L.row][L.col];let P=0;J.terrain==="forest"?P=1.5:J.terrain==="water"&&(P=-1);let B=0;for(const X of M){const Q=Ke(L,X.ownerPos);Q<X.min||Q>X.max?B+=.3:B-=.5}let F=0;for(let X=0;X<i.length;X++){const Q=Ke(L,e.players[i[X]].position);F-=Hm(E[X],Q)*.8}z.push({pos:L,quickScore:V+$+P+B+F})}z.sort((L,W)=>W.quickScore-L.quickScore);const N=z.slice(0,5);let R=-1/0,D=null;for(const{pos:L,quickScore:W}of N){const V=y(L);if(!V)continue;let k=0;for(const J of i){const P=e.players[J].position;k+=gt(V.finalFacing,L,P)?.5:-.3}const $=W+k;$>R&&(R=$,D=V)}if(!D)for(const{pos:L}of z.slice(5)){const W=y(L);if(W){D=W;break}}if(!D)return null;const K=_(D.pos),A=Et(e.players[K.eid],a,"opponent");return D.reasoning=[`${Ie(n)} 移动评估：本机剩余牌池=${hl(jc(u.exactDeckCounts,a))}。`,`${Ie(n)} 目标距离优先=${C}，选择终点(${D.pos.row},${D.pos.col})，终朝向=${D.finalFacing}。`,`${Ie(n)} 主要依据：贴近后续行动，同时规避敌方威胁；最近目标 ${K.eid.replace("player","P")} 装甲概率=${Math.round(A.armorInHiddenHandProb*100)}%。`],D}function Ax(e,n,t,a,o,s){const i=Bn(e,n),l=kc(e,n),d=Vs(e,n),u=Ln(i,t,a,o);if(!u)return{shouldAttack:!1,targetId:d,reasoning:[`${Ie(n)} 当前时机无可用攻击卡，放弃攻击。`]};let f=null,m=-1/0;const g=[];for(const h of l){const x=Bn(e,h),p=Et(x,o,"opponent");if(u.actionType==="charge"&&a==="melee"){const v=q.find(M=>M.id===i.unitId),j=q.find(M=>M.id===x.unitId);if(!v||!j)continue;const C=qo(i,x,t,e.map,v,j,o);if(!C.canAttack)continue;if(s==="hard"){const M=C.counterDamage,S=fi(i),E=fi(x),z=C.damage-M;if(z<0&&S<=M+2||S<=5&&M>=3||E<=3&&M>=2)continue;const N=z*2+(20-E)-p.armorInHiddenHandProb;g.push(`${h.replace("player","P")}: 净伤=${z} 存活牌=${E} 得分=${N.toFixed(1)}`),N>m&&(m=N,f=h)}else{const M=C.damage;g.push(`${h.replace("player","P")}: 突击伤害=${M}`),M>m&&(m=M,f=h)}continue}const _=Qo(i,x,t,a,e.map,o);if(!_.canAttack)continue;const y=fi(x),b=_.damage*2+(20-y)-p.armorInHiddenHandProb*1.2;g.push(`${h.replace("player","P")}: 期望伤害=${_.damage} 存活牌=${y} 装甲概率=${Math.round(p.armorInHiddenHandProb*100)}% 得分=${b.toFixed(1)}`),b>m&&(m=b,f=h)}return f?{shouldAttack:!0,targetId:f,reasoning:[`${Ie(n)} 攻击评估：武装【${u.nameCn}】。`,`${Ie(n)} 候选目标：${g.join(" ｜ ")}`,`${Ie(n)} 选择攻击 ${f.replace("player","P")}，综合得分=${m.toFixed(1)}。`]}:{shouldAttack:!1,targetId:d,reasoning:[`${Ie(n)} 攻击评估：武装【${u.nameCn}】当前无合法目标。`]}}function Hd(e,n,t,a,o=!1,s){const i=Sa(n);if(i.length===0)return{value:null,reasoning:[`${Ie(n.id)} 无可选明置牌，转为自动结算。`]};if(a==="easy")return{value:i[Math.floor(Math.random()*i.length)].instanceId,reasoning:[`${Ie(n.id)} 简单 AI 随机选择伤害牌。`]};const l=s??n;let d=null,u=o?-1/0:1/0;const f=[];for(const g of i){const h=t(g.defId),x=Nx(g,h,n,l,t,o);f.push(`${(h==null?void 0:h.nameCn)??g.defId}:${x.toFixed(1)}`),(o?x>u:x<u)&&(u=x,d=g)}const m=d?t(d.defId):null;return{value:(d==null?void 0:d.instanceId)??null,reasoning:[`${Ie(n.id)} ${o?"瞄准指定破坏":"承伤弃牌"}评估：${f.join(" ｜ ")}`,`${Ie(n.id)} 选择【${(m==null?void 0:m.nameCn)??(d==null?void 0:d.defId)??"自动结算"}】。`]}}function zx(e,n,t,a,o){const s=Bn(e,n),i=Bn(e,Vs(e,n)),l=t===1?s.plotSeg1:s.plotSeg2;if(!l)return null;const d=a(l.defId);if(!d||d.actionType!=="mine")return null;const u=e.mines.map(h=>h.position),f=[];for(let h=-1;h<=1;h++)for(let x=-1;x<=1;x++){if(h===0&&x===0)continue;const p=s.position.row+h,_=s.position.col+x;if(p<0||p>=e.map.height||_<0||_>=e.map.width)continue;const y={row:p,col:_};u.some(b=>ve(b,y))||f.push(y)}return f.length<4?null:[...f].sort((h,x)=>{const p=Ke(h,i.position),_=Ke(x,i.position);return p-_}).slice(0,4).map((h,x)=>({position:h,kind:x<2?"real":"dummy"}))}function Px(e,n,t,a,o){const s=Bn(e,n),i=t===1?s.plotSeg1:s.plotSeg2;if(!i)return null;const l=a(i.defId);if(!l)return null;if(l.actionType==="mine"){const d=zx(e,n,t,a,o);return!d||d.length===0?null:{actionType:"mine",placements:d,damage:l.damage||3,reasoning:[`${Ie(n)} 布雷评估：优先封锁靠近敌方的 4 个候选格。`,`${Ie(n)} 选点=${d.map(u=>`(${u.position.row},${u.position.col})-${u.kind==="real"?"真":"假"}`).join("、")}`]}}if(l.actionType==="aim"){const d=Vs(e,n),u=Bn(e,d),f=ia(s.position,u.position);return{actionType:"aim",facing:f,reasoning:[`${Ie(n)} 照准评估：最近敌机=${d.replace("player","P")}，先把朝向对准火力线。`,`${Ie(n)} 调整朝向为 ${f}。`]}}return null}function Vx(e,n,t){const a=[];let o=e;for(const s of t){if(o<=0)break;a.push(s.instanceId),o-=s.armorValue}for(const s of n){if(o<=0)break;a.push(s.instanceId),o-=s.armorValue}return{value:a,reasoning:[`[AI][ARMOR] 受到${e}点伤害，准备区装甲优先，其次手牌装甲。`,`[AI][ARMOR] 预计减伤后剩余=${Math.max(0,o)}。`]}}const Rs=1,Rx=["slot_1","slot_2","slot_3","slot_4","slot_5"],Lx=10,Sr="em_saves_index",Cr="em_replays_index",wc=e=>`em_save_${e}`,os=e=>`em_replay_${e}`;function Da(e){try{const n=localStorage.getItem(e);return n?JSON.parse(n):[]}catch{return[]}}function Ls(e,n){localStorage.setItem(e,JSON.stringify(n))}function Ud(){return Da(Sr).sort((n,t)=>t.timestamp-n.timestamp)}function Sc(e,n,t,a){const o={slotId:e,timestamp:Date.now(),roundNumber:n.roundNumber,phase:n.phase,player1Unit:n.players.player1.unitId,player2Unit:n.players.player2.unitId,mapId:n.map.id,mapName:n.map.nameCn,isAutoSave:a},s={version:Rs,metadata:o,gameState:n,aiConfig:t};try{localStorage.setItem(wc(e),JSON.stringify(s))}catch{throw new Error("存储空间不足，无法保存存档")}const l=Da(Sr).filter(d=>d.slotId!==e);return l.push(o),Ls(Sr,l),o}function Ox(e){try{const n=localStorage.getItem(wc(e));if(!n)return null;const t=JSON.parse(n);if(!Jx(t))return null;const a=t;return a.gameState.playerIds||(a.gameState.playerIds=["player1","player2"],a.gameState.teams={player1:0,player2:1},a.gameState.teamCount=2,a.gameState.shuffleSeed=a.metadata.timestamp),a}catch{return null}}function Kx(e){localStorage.removeItem(wc(e));const n=Da(Sr);Ls(Sr,n.filter(t=>t.slotId!==e))}function Jx(e){if(!e||typeof e!="object")return!1;const n=e;if(n.version!==Rs||!n.gameState||typeof n.gameState!="object")return!1;const t=n.gameState;if(!t.phase||!t.players||!t.map)return!1;const a=t.players;return!(!a.player1||!a.player2||!n.metadata||typeof n.metadata!="object"||!n.aiConfig||typeof n.aiConfig!="object")}function Wd(){return Da(Cr).sort((n,t)=>t.timestamp-n.timestamp)}function Bx(e,n,t){const a=`${Date.now()}`,o={replayId:a,timestamp:Date.now(),totalRounds:e.roundNumber,totalActions:n.length,player1Unit:e.players.player1.unitId,player2Unit:e.players.player2.unitId,mapId:e.map.id,mapName:e.map.nameCn,winner:t},s={version:Rs,metadata:o,initialState:e,actions:n};try{localStorage.setItem(os(a),JSON.stringify(s))}catch{throw new Error("存储空间不足，无法保存录像")}const i=Da(Cr);for(i.push(o),i.sort((l,d)=>l.timestamp-d.timestamp);i.length>Lx;){const l=i.shift();localStorage.removeItem(os(l.replayId))}return Ls(Cr,i),o}function Zd(e){try{const n=localStorage.getItem(os(e));if(!n)return null;const t=JSON.parse(n);if(!Gx(t))return null;const a=t;return a.initialState.playerIds||(a.initialState.playerIds=["player1","player2"],a.initialState.teams={player1:0,player2:1},a.initialState.teamCount=2,a.initialState.shuffleSeed=a.metadata.timestamp),a}catch{return null}}function Fx(e){localStorage.removeItem(os(e));const n=Da(Cr);Ls(Cr,n.filter(t=>t.replayId!==e))}function Gx(e){if(!e||typeof e!="object")return!1;const n=e;return!(n.version!==Rs||!n.initialState||typeof n.initialState!="object"||!Array.isArray(n.actions)||!n.metadata||typeof n.metadata!="object")}function Hx(e,n){let t=e.initialState,a=0;for(;a<e.actions.length&&!(t.roundNumber>=n);a++)t=on(t,e.actions[a]);return{state:t,actionIndex:a}}const ir={N:"↑北",S:"↓南",E:"→东",W:"←西"},ro={setup:"配置",pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"行动阶段·段落1",action_seg2:"行动阶段·段落2",cleanup:"清理阶段",game_over:"对局结束"},Ux={movement:"移动时序",ranged:"射击时序",melee:"近战时序",special:"特殊时序"},Wx={movement:"移动",ranged:"射击",melee:"近战",charge:"突击",aim:"瞄准",armor:"装甲",mine:"机雷",special:"特殊",auxiliary:"辅助"};function Ct(e){var n;return((n=q.find(t=>t.id===e))==null?void 0:n.nameCn)??e}function jo(e){const n=te(e);if(!n)return e;const t=Wx[n.actionType]??n.actionType;let a="";n.movementValue!=null&&(a=` 值${n.movementValue}`),n.damage!=null&&(a=` 伤害${n.damage}`,n.rangeMin!=null&&n.rangeMax!=null&&(a+=` 射程${n.rangeMin}-${n.rangeMax}`),n.rangeOptimal!=null&&(a+=` 最佳${n.rangeOptimal}`));const o=n.hasBombIcon?" [💣]":"",s=n.isKaiVariant?" [◆改]":"";return`${n.nameCn}(${t}${a}${o}${s})`}function xl(e){const n=jo(e.defId);return e.destroyed?`${n}[已破坏]`:n}function oo(e){return e.length===0?"(无)":e.map(n=>xl(n)).join(", ")}function so(e,n){const t=[],a=Ct(e.unitId),o=ir[e.facing]??e.facing,s=e.deck.filter(d=>!d.destroyed).length,i=e.hand.filter(d=>!d.destroyed).length,l=e.auxiliary.filter(d=>!d.destroyed).length;if(t.push(`  ${n} [${a}]  位置(${e.position.row},${e.position.col}) 朝向${o}  败北=${e.isDefeated}`),t.push(`    牌库=${s}  手牌=${i}  辅助=${l}/${e.auxiliary.length}  弃牌=${e.discard.length}  破坏=${e.destroyedCards.length}  总存活=${s+i+l+e.discard.length+(e.plotSeg1&&!e.plotSeg1.destroyed?1:0)+(e.plotSeg2&&!e.plotSeg2.destroyed?1:0)}`),t.push(`    手牌: ${oo(e.hand)}`),e.auxiliary.length>0&&t.push(`    辅助: ${oo(e.auxiliary)}`),e.plotSeg1||e.plotSeg2){const d=e.plotSeg1?xl(e.plotSeg1):"—",u=e.plotSeg2?xl(e.plotSeg2):"—";t.push(`    布局: 段1=[${d}]  段2=[${u}]`)}return e.discard.length>0&&t.push(`    弃牌: ${oo(e.discard)}`),e.destroyedCards.length>0&&t.push(`    破坏: ${oo(e.destroyedCards)}`),t.join(`
`)}function Zx(e,n){const t=o=>{const s=n.players[o],i=n.playerIds.indexOf(o);return`${i>=0?`P${i+1}`:o}[${s?Ct(s.unitId):o}]`},a=(o,s)=>{const i=n.players[s];return i?[...i.deck,...i.hand,...i.auxiliary,...i.discard,...i.destroyedCards,...i.plotSeg1?[i.plotSeg1]:[],...i.plotSeg2?[i.plotSeg2]:[]].find(d=>d.instanceId===o):void 0};switch(e.type){case"SELECT_UNIT":{const o=n.playerIds.indexOf(e.playerId);return`${o>=0?`P${o+1}`:e.playerId} 选择机体 ${Ct(e.unitId)}`}case"SELECT_MAP":return`选择地图 ${e.mapId}`;case"CONFIRM_SETUP":return"确认设置，开始对局";case"SET_SPAWN_POSITION":return`${t(e.playerId)} 设置出生点 (${e.position.row},${e.position.col})`;case"SET_SPAWN_FACING":return`${t(e.playerId)} 设置初始朝向 ${ir[e.facing]??e.facing}`;case"START_PLOTTING":return"战前准备结束，进入布局阶段";case"DRAW_CARDS":return`${t(e.playerId)} 抽牌 ${e.count} 张`;case"PLOT_CARD":{const o=a(e.instanceId,e.playerId);return`${t(e.playerId)} 布局段落${e.seg}: ${o?jo(o.defId):e.instanceId}`}case"CONFIRM_PLOT":return`${t(e.playerId)} 确认布局完成`;case"ADVANCE_PLOT_STEP":return"[系统] 布局步骤推进";case"MOVE_UNIT":{const o=n.players[e.playerId],s=o?`(${o.position.row},${o.position.col})`:"(?,?)",i=`(${e.to.row},${e.to.col})`,l=e.finalFacing?` 结束朝向→${ir[e.finalFacing]??e.finalFacing}`:"",d=e.path?` 路径[${e.path.map(u=>`(${u.row},${u.col})`).join("→")}]`:"";return`${t(e.playerId)} 普通移动 ${s}→${i}${l}${d}`}case"ADJUST_FACING":return`${t(e.playerId)} 调整朝向→${ir[e.facing]??e.facing}`;case"RESOLVE_RANGED":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动射击`;case"RESOLVE_MELEE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动近战`;case"RESOLVE_CHARGE":return`${t(e.attackerId)} 沿正面方向发动突击，目标=${t(e.targetId)}`;case"PLACE_MINE":{const s=(e.placements??(e.to?[{position:e.to,kind:"real"}]:[])).map(i=>`(${i.position.row},${i.position.col})`).join("、");return`${t(e.playerId)} 部署隐藏机雷指示物：${s}`}case"SELECT_DAMAGE_CARD":{const o=a(e.instanceId,e.playerId);return`${t(e.playerId)} 选择摧毁: ${o?jo(o.defId):e.instanceId}`}case"CONFIRM_DAMAGE_SELECTION":return`${t(e.playerId)} 确认伤害结算`;case"SKIP_ACTION":return"[系统] 跳过行动";case"ADVANCE_TIMING":return"[系统] 推进时序";case"ADVANCE_PHASE":return"[系统] 推进阶段";case"MELEE_SENSOR_MOVE":return`${t(e.playerId)} 近战传感器移动至 (${e.to.row},${e.to.col})`;case"CONFIRM_ARMOR_CHOICE":{const o=e.selectedInstanceIds.map(s=>{const i=a(s,e.playerId);return i?jo(i.defId):s});return`${t(e.playerId)} 确认装甲选择${o.length?"："+o.join("、"):"（不使用装甲）"}`}case"RESET_GAME":return"[系统] 重置游戏";case"LOAD_GAME":return"[系统] 加载存档";case"ADD_LOG":return`[系统] ${e.message}`;default:return`[未知] ${e.type}`}}function Yx(e,n){const t=[],a="═".repeat(72),o="─".repeat(72);t.push(a),t.push("EMBRYO MACHINE — 对局分析日志"),t.push(a),t.push(`生成时间: ${new Date().toISOString()}`),t.push(`地图: ${e.map.nameCn} (${e.map.id}) ${e.map.width}×${e.map.height}`),t.push(`P1: ${Ct(e.players.player1.unitId)} (${e.players.player1.unitId})`),t.push(`P2: ${Ct(e.players.player2.unitId)} (${e.players.player2.unitId})`),t.push(`总操作数: ${n.length}`),t.push(""),t.push("[地图地形]");const s={plain:"平",forest:"森",rubble:"瓦",water:"水",highland:"高",sand:"砂"};let i="     ";for(let x=0;x<e.map.width;x++)i+=`  ${String(x).padStart(2)} `;t.push(i);for(let x=0;x<e.map.height;x++){let p=`  ${String(x).padStart(2)} `;for(let _=0;_<e.map.width;_++){const y=e.map.cells[x][_],b=s[y.terrain]??"?",v=y.elevation>0?String(y.elevation):" ";p+=` ${b}${v} `}t.push(p)}t.push("  地形: 平=平地 森=森林 瓦=瓦砾 水=水域 高=高地 砂=砂地  数字=海拔"),t.push(""),t.push("[初始状态]"),t.push(`  阶段: ${ro[e.phase]??e.phase}  回合: ${e.roundNumber}`),t.push(so(e.players.player1,"P1")),t.push(so(e.players.player2,"P2")),e.mines.length>0&&t.push(`  隐藏指示物: ${e.mines.map(x=>`(${x.position.row},${x.position.col}) 所有者=${x.ownerId} 伤害=${x.damage}`).join("; ")}`),t.push("");let l=e,d=l.roundNumber,u=l.phase,f=l.currentTiming,m=0,g=l.log.length;for(let x=0;x<n.length;x++){const p=n[x],_=l;l=on(l,p),m++,l.roundNumber!==d&&(t.push(""),t.push(a),t.push(`══ 第 ${l.roundNumber} 回合 ══`),t.push(a),d=l.roundNumber),l.phase!==u&&(t.push(""),t.push(o),t.push(`── ${ro[l.phase]??l.phase} ──`),t.push(o),u=l.phase,f=l.currentTiming),l.currentTiming!==f&&l.currentTiming&&(t.push(""),t.push(`  ◆ ${Ux[l.currentTiming]??l.currentTiming}  先攻顺序: [${l.turnOrder.join(", ")}]`),f=l.currentTiming);const y=Zx(p,_);t.push(`  #${String(m).padStart(4,"0")}  ${y}`);const b=l.log.slice(g);for(const M of b)t.push(`         │ ${M}`);if(g=l.log.length,l.pendingDamage&&!_.pendingDamage){const M=l.pendingDamage;t.push(`         ├─ [交互伤害] 目标=${M.targetId} 剩余=${M.remaining} 来源=${M.source}${M.attackerId?` 攻方=${M.attackerId}(瞄准指定)`:""}`)}const v=l.phase!==_.phase,j=l.roundNumber!==_.roundNumber,C=l.phase==="game_over"&&_.phase!=="game_over";(v||j||C)&&(t.push(""),t.push(`  [状态快照 #${m} | ${ro[l.phase]??l.phase}]`),t.push(so(l.players.player1,"P1")),t.push(so(l.players.player2,"P2")),l.mines.length>0&&t.push(`  隐藏指示物: ${l.mines.map(M=>`(${M.position.row},${M.position.col}) 所有者=${M.ownerId} 伤害=${M.damage}`).join("; ")}`))}t.push(""),t.push(a),t.push("══ 对局总结 ══"),t.push(a);const h=l;if(h.phase==="game_over"){const x=new Set;for(const p of h.playerIds)h.players[p].isDefeated||x.add(h.teams[p]);if(x.size===0)t.push("结果: 平局（所有队伍同时全灭）");else{const p=[...x][0],_=h.playerIds.filter(y=>h.teams[y]===p).map(y=>Ct(h.players[y].unitId)).join("、");t.push(`结果: 队伍${p+1}（${_}）获胜`)}}else t.push(`结果: 对局未结束 (当前阶段: ${ro[h.phase]??h.phase})`);t.push(`最终回合: ${h.roundNumber}`),t.push(`总操作数: ${n.length}`);for(const x of h.playerIds){const p=h.players[x],y=`P${h.playerIds.indexOf(x)+1}`,b=Xx(p);t.push(""),t.push(`${y}[${Ct(p.unitId)}] 最终状态:`),t.push(`  存活卡牌: ${b}  破坏: ${p.destroyedCards.length}  败北: ${p.isDefeated}`),t.push(`  位置: (${p.position.row},${p.position.col}) 朝向: ${ir[p.facing]}`)}t.push(""),t.push(o),t.push("[完整引擎日志]"),t.push(o);for(let x=0;x<h.log.length;x++)t.push(`  ${String(x+1).padStart(4,"0")}  ${h.log[x]}`);return t.push(""),t.push(a),t.push("日志结束"),t.push(a),t.join(`
`)}function Xx(e){const n=t=>t.filter(a=>!a.destroyed).length;return n(e.deck)+n(e.hand)+n(e.auxiliary)+e.discard.length+(e.plotSeg1&&!e.plotSeg1.destroyed?1:0)+(e.plotSeg2&&!e.plotSeg2.destroyed?1:0)}const Os=I.createContext(null);function Um({children:e}){const[n,t]=I.useReducer(on,void 0,Bm),[a,o]=I.useState(wx),[s,i]=I.useState(!0),[l,d]=I.useState(!1),u=I.useRef(n);u.current=n;const f=I.useRef([]),m=I.useRef(null),g=I.useRef(-1),h=I.useCallback(y=>{const b=u.current;if(y.type==="RESET_GAME"||y.type==="LOAD_GAME"){f.current=[],m.current=null,g.current=-1,t(y);return}if(y.type==="CONFIRM_SETUP"){const j=on(b,y);f.current=[],m.current=j,t(y);return}f.current.push(y);const v=on(b,y);if(t(y),s&&b.phase!=="draw"&&v.phase==="draw"&&v.roundNumber!==g.current){g.current=v.roundNumber;try{Sc("auto",v,a,!0)}catch{}}},[a,s]),x=Gm(h,u),p=I.useCallback(y=>te(y),[]),_=I.useCallback(()=>m.current?{initialState:m.current,actions:[...f.current]}:null,[]);return r.jsx(Os.Provider,{value:{state:n,dispatch:x,rawDispatch:h,getCard:p,aiConfig:a,setAIConfig:o,getReplayData:_,autoSaveEnabled:s,setAutoSaveEnabled:i,exposureMode:l,setExposureMode:d},children:e})}function Ce(){const e=I.useContext(Os);if(!e)throw new Error("useGame must be used inside <GameProvider>");return e}function Vr(){return Ce().state}const Qx=[2,3,4,6,8];function qx(e){const n=[];for(let t=2;t<=e;t++)e%t===0&&n.push(t);return n}function eb({onNext:e,onBack:n,playerCount:t,setPlayerCount:a,teamCount:o,setTeamCount:s}){const{dispatch:i,rawDispatch:l}=Ce(),d=I.useMemo(()=>Ch(),[]),[u,f]=I.useState(d[0].id),m=I.useMemo(()=>qx(t),[t]),g=I.useMemo(()=>d.filter(p=>{if(p.maxPlayers<t||p.maxTeams<o)return!1;const _=Math.ceil(t/o);for(let y=0;y<o;y++){const b=p.startZones[y];if(!b||b.length<_)return!1}return!0}),[t,o,d]),h=I.useMemo(()=>d.find(p=>p.id===u)??d[0],[u,d]);I.useEffect(()=>{l({type:"RESET_GAME",playerCount:t,teamCount:o});const p=Math.ceil(t/o),_=d.filter(y=>{if(y.maxPlayers<t||y.maxTeams<o)return!1;for(let b=0;b<o;b++){const v=y.startZones[b];if(!v||v.length<p)return!1}return!0});_.length>0&&(f(_[0].id),i({type:"SELECT_MAP",mapId:_[0].id}))},[t,o]),I.useEffect(()=>{m.includes(o)||s(m[0])},[m,o,s]),I.useEffect(()=>{g.length>0&&!g.find(p=>p.id===u)&&x(g[0].id)},[g]);function x(p){p!==u&&(f(p),i({type:"SELECT_MAP",mapId:p}))}return r.jsxs("div",{className:"msel-screen",children:[r.jsx("button",{className:"msel-back-btn",onClick:n,children:"← 返回主菜单"}),r.jsx("h1",{className:"msel-title",children:"Embryo Machine"}),r.jsx("p",{className:"msel-subtitle",children:"选择地图"}),r.jsxs("section",{className:"msel-section",children:[r.jsx("h2",{children:"游戏配置"}),r.jsxs("div",{className:"msel-config-row",children:[r.jsxs("label",{className:"msel-config-label",children:["玩家人数",r.jsx("select",{className:"msel-config-select",value:t,onChange:p=>a(Number(p.target.value)),children:Qx.map(p=>r.jsxs("option",{value:p,children:[p,"人"]},p))})]}),r.jsxs("label",{className:"msel-config-label",children:["队伍数量",r.jsx("select",{className:"msel-config-select",value:o,onChange:p=>s(Number(p.target.value)),children:m.map(p=>r.jsxs("option",{value:p,children:[p,"队 (",t/p,"人/队)"]},p))})]})]})]}),r.jsxs("section",{className:"msel-section",children:[r.jsx("h2",{children:"地图"}),r.jsx("div",{className:"msel-map-list",children:g.map(p=>r.jsxs("button",{className:`msel-map-btn ${u===p.id?"msel-map-btn--active":""}`,onClick:()=>x(p.id),children:[p.nameCn," ",p.id.startsWith("custom_")?"✦":"",r.jsxs("span",{className:"msel-map-btn__size",children:[p.height,"×",p.width," · ≤",p.maxPlayers,"人"]})]},p.id))})]}),r.jsxs("section",{className:"msel-preview",children:[r.jsx("div",{className:"msel-preview__grid-wrap",children:r.jsx("div",{className:"msel-preview__grid",style:{display:"grid",gridTemplateColumns:`repeat(${h.width}, 1fr)`,gap:"1px"},children:h.cells.flat().map((p,_)=>{const y=Math.floor(_/h.width),b=_%h.width,v=Object.values(h.startZones).some(j=>j.some(C=>C.row===y&&C.col===b));return r.jsx("div",{className:`msel-cell msel-cell--${p.terrain}${p.elevation>0?" msel-cell--elev":""}${v?" msel-cell--start":""}`,title:`${p.terrain}${p.elevation>0?` +${p.elevation}`:""}${v?" (起始点)":""}`},_)})})}),r.jsxs("div",{className:"msel-preview__info",children:[r.jsx("span",{className:"msel-preview__name",children:h.nameCn}),r.jsxs("span",{className:"msel-preview__meta",children:[h.height,"×",h.width," · 最多",h.maxPlayers,"人 · ",h.maxTeams,"队"]}),r.jsxs("div",{className:"msel-preview__legend",children:[r.jsxs("span",{className:"msel-legend",children:[r.jsx("span",{className:"msel-legend__dot msel-legend__dot--plain"}),"平地"]}),r.jsxs("span",{className:"msel-legend",children:[r.jsx("span",{className:"msel-legend__dot msel-legend__dot--sand"}),"沙地"]}),r.jsxs("span",{className:"msel-legend",children:[r.jsx("span",{className:"msel-legend__dot msel-legend__dot--rubble"}),"废墟"]}),r.jsxs("span",{className:"msel-legend",children:[r.jsx("span",{className:"msel-legend__dot msel-legend__dot--forest"}),"森林"]}),r.jsxs("span",{className:"msel-legend",children:[r.jsx("span",{className:"msel-legend__dot msel-legend__dot--water"}),"水域"]}),r.jsxs("span",{className:"msel-legend",children:[r.jsx("span",{className:"msel-legend__dot msel-legend__dot--highland"}),"高地"]}),r.jsxs("span",{className:"msel-legend",children:[r.jsx("span",{className:"msel-legend__dot msel-legend__dot--start"}),"起点"]})]})]})]}),r.jsx("button",{className:"msel-next-btn",onClick:e,children:"下一步 →"}),r.jsx("style",{children:nb})]})}const nb=`
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
`,tb={gameTitle:"Embryo Machine",statMovement:"移动力",statEvasion:"回避值",statAssault:"突击",statAssaultDef:"被突击",statInitiative:"先制值"},Mn=[["#00f0ff","#00c8e0","#40e8ff","#80f0ff"],["#ff00c8","#ff44aa","#e040d0","#ff77dd"],["#00cc88","#44dd66","#00aa6e","#66eebb"],["#ff8800","#ffaa33","#e07000","#ffcc66"],["#6688ff","#4466ee","#88aaff","#3355dd"],["#cc44ff","#aa22dd","#dd77ff","#bb00ee"],["#44dddd","#22bbbb","#66eeee","#00ccbb"],["#ff4466","#dd2244","#ff6688","#ee0033"]];function ht(e,n){const t=e.teams[n]??0,a=Mn[t%Mn.length],s=e.playerIds.filter(i=>e.teams[i]===t).indexOf(n);return a[Math.max(0,s)%a.length]}const Wt=tb;function ab({onNext:e,onBack:n,autoFill:t=!1}){const{state:a,dispatch:o,setAIConfig:s,setExposureMode:i}=Ce(),[l,d]=I.useState({}),[u,f]=I.useState({}),[m,g]=I.useState({}),h=a.playerIds.length,x=a.teamCount,p=I.useMemo(()=>ha.slice(0,h),[h]);function _(N,R){o({type:"SELECT_UNIT",playerId:N,unitId:R}),g(D=>({...D,[N]:!0}))}function y(N,R){d(D=>({...D,[N]:R}))}function b(N,R){f(D=>({...D,[N]:R}))}const v=p.map(N=>{var R;return((R=a.players[N])==null?void 0:R.unitId)??""}),j=v.every(N=>N!==""),C=new Set(v.filter(N=>N!=="")).size===v.filter(N=>N!=="").length,M=p.filter(N=>m[N]).map(N=>{var R;return((R=a.players[N])==null?void 0:R.unitId)??""}).filter(N=>N!==""),S=new Set(M).size===M.length,E=t?S:j&&C,z={};for(let N=0;N<p.length;N++){const R=N%x;z[R]||(z[R]=[]),z[R].push(p[N])}return r.jsxs("div",{className:"setup-screen",children:[r.jsx("button",{className:"setup-back-btn",onClick:n,children:"← 上一步"}),r.jsx("h1",{className:"setup-title",children:Wt.gameTitle}),r.jsx("p",{className:"setup-subtitle",children:"选择机体"}),r.jsx("div",{className:"setup-teams",children:Object.entries(z).map(([N,R])=>r.jsxs("div",{className:"setup-team",children:[r.jsxs("h3",{className:"team-header",style:{color:Mn[Number(N)%Mn.length][0]},children:["队伍 ",Number(N)+1]}),r.jsx("div",{className:"setup-players",children:R.map((D,K)=>{var $;const A=ha.indexOf(D),L=Mn[Number(N)%Mn.length],W=L[K%L.length],V=(($=a.players[D])==null?void 0:$.unitId)??"",k=v.filter((J,P)=>P!==p.indexOf(D)&&J);return r.jsxs("div",{className:"setup-player-col",children:[r.jsx(rb,{label:`P${A+1}`,selectedUnit:V,blockedUnits:k,accentColor:W,onSelect:J=>_(D,J)}),r.jsxs("div",{className:"ai-control",children:[r.jsxs("label",{className:"ai-control__label",children:[r.jsx("input",{type:"checkbox",checked:l[D]??!1,onChange:J=>y(D,J.target.checked)}),"AI控制"]}),l[D]&&r.jsxs("select",{className:"ai-control__difficulty",value:u[D]??"hard",onChange:J=>b(D,J.target.value),children:[r.jsx("option",{value:"easy",children:"简单"}),r.jsx("option",{value:"hard",children:"困难"})]})]})]},D)})})]},N))}),r.jsx("button",{className:"start-btn",onClick:()=>{const N=new Set(p.filter($=>m[$]).map($=>{var J;return((J=a.players[$])==null?void 0:J.unitId)??""}).filter($=>$!=="")),D=[...q.map($=>$.id).filter($=>!N.has($))];for(let $=D.length-1;$>0;$--){const J=Math.floor(Math.random()*($+1));[D[$],D[J]]=[D[J],D[$]]}const K={...l},A={...u};let L=0;for(const $ of p)t&&!m[$]&&L<D.length&&(o({type:"SELECT_UNIT",playerId:$,unitId:D[L]}),L++,K[$]=!0,A[$]="hard");const W={},V={};for(const $ of p)W[$]=K[$]??!1,V[$]=A[$]??"hard";s({player1:W.player1??!1,player2:W.player2??!1,player1Difficulty:V.player1??"hard",player2Difficulty:V.player2??"hard",playerAI:W,playerDifficulty:V}),p.every($=>W[$])&&i(!0),e()},disabled:!E,title:E?"":"请为所有玩家分别选择不同的机体",children:"下一步 →"}),!E&&r.jsx("p",{className:"setup-hint",children:t?"手动选择的机体之间不可重复":j?"每位玩家须选择不同的机体":"请为所有玩家各选择一台机体"}),r.jsx("style",{children:ib})]})}function rb({label:e,selectedUnit:n,blockedUnits:t,accentColor:a,onSelect:o}){return r.jsxs("div",{className:"unit-picker",children:[r.jsx("h2",{className:"unit-picker__title",style:{color:a},children:e}),r.jsx("div",{className:"unit-grid",children:q.map(s=>{const i=t.includes(s.id);return r.jsx(ob,{unit:s,isSelected:s.id===n,isBlocked:i,accentColor:a,onSelect:()=>!i&&o(s.id)},s.id)})}),n&&r.jsx(sb,{unit:q.find(s=>s.id===n),accentColor:a})]})}function ob({unit:e,isSelected:n,isBlocked:t,accentColor:a,onSelect:o}){return r.jsxs("button",{className:`unit-card ${n?"unit-card--selected":""} ${t?"unit-card--blocked":""}`,onClick:o,disabled:t,title:t?"该机体已被其他玩家选择":e.nameCn,style:n?{borderColor:a,boxShadow:`0 0 8px ${a}55`}:{},children:[r.jsx("img",{src:`/assets/tokens/${e.tokenId}`,alt:e.nameCn,className:"unit-card__token",onError:s=>{s.target.style.opacity="0.3"}}),r.jsx("span",{className:"unit-card__name",children:e.nameCn}),r.jsxs("span",{className:"unit-card__init",children:["先制 ",e.initiative]})]})}function sb({unit:e,accentColor:n}){return r.jsxs("div",{className:"unit-stats",children:[r.jsxs("div",{className:"unit-stats__name",children:[e.nameCn," ",r.jsxs("small",{children:["(",e.nameJa,")"]})]}),r.jsx("div",{className:"unit-stats__type",children:e.type}),r.jsxs("div",{className:"unit-stats__grid",children:[r.jsx(Ga,{label:Wt.statMovement,value:e.movement,color:n}),r.jsx(Ga,{label:Wt.statEvasion,value:e.evasion,color:n}),r.jsx(Ga,{label:Wt.statAssault,value:e.assault,color:n}),r.jsx(Ga,{label:Wt.statAssaultDef,value:e.assaultDef,color:n}),r.jsx(Ga,{label:Wt.statInitiative,value:e.initiative,color:n})]})]})}function Ga({label:e,value:n,color:t}){return r.jsxs("div",{className:"stat",children:[r.jsx("span",{className:"stat__label",children:e}),r.jsx("span",{className:"stat__value",style:{color:t},children:n})]})}const ib=`
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
`,Yd=768;function Ks(){const[e,n]=I.useState(()=>typeof window<"u"&&window.innerWidth<=Yd);return I.useEffect(()=>{const t=window.matchMedia(`(max-width: ${Yd}px)`),a=o=>n(o.matches);return t.addEventListener("change",a),n(t.matches),()=>t.removeEventListener("change",a)},[]),e}const Pn=18;function we({id:e,title:n,initialPos:t,width:a=300,height:o,minHeight:s=80,children:i,zIndex:l=10,defaultMinimized:d=!1,onFocus:u,siblingRects:f=[]}){const m=Ks(),[g,h]=I.useState(t),[x,p]=I.useState(d),_=I.useRef(null),y=I.useRef(!1);I.useEffect(()=>{y.current||(y.current=!0,h(t))},[]);const b=I.useCallback(v=>{if(m||v.button!==0)return;v.preventDefault(),u==null||u(e);const j=v.clientX-g.x,C=v.clientY-g.y,M=E=>{var W;let z=E.clientX-j,N=E.clientY-C;const R=window.innerWidth,D=window.innerHeight,K=(W=_.current)==null?void 0:W.getBoundingClientRect(),A=(K==null?void 0:K.width)??a,L=(K==null?void 0:K.height)??40;z<Pn&&(z=0),N<Pn&&(N=0),z+A>R-Pn&&(z=R-A),N+L>D-Pn&&(N=D-L);for(const V of f)Math.abs(z+A-V.left)<Pn&&(z=V.left-A),Math.abs(z-V.right)<Pn&&(z=V.right),Math.abs(N+L-V.top)<Pn&&(N=V.top-L),Math.abs(N-V.bottom)<Pn&&(N=V.bottom),Math.abs(N-V.top)<Pn&&(N=V.top);h({x:Math.max(0,z),y:Math.max(0,N)})},S=()=>{document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",S)};document.addEventListener("mousemove",M),document.addEventListener("mouseup",S)},[e,g,u,f,a,m]);return m?r.jsxs("div",{ref:_,className:`dp dp--mobile ${x?"dp--min":""}`,onClick:()=>u==null?void 0:u(e),children:[r.jsxs("div",{className:"dp__bar dp__bar--mobile",onClick:()=>p(v=>!v),children:[r.jsx("span",{className:"dp__title",children:n}),r.jsx("span",{className:"dp__min-btn dp__min-btn--mobile",children:x?"▼":"▲"})]}),!x&&r.jsx("div",{className:"dp__body dp__body--mobile",children:i}),r.jsx("style",{children:Xd})]}):r.jsxs("div",{ref:_,className:`dp ${x?"dp--min":""}`,style:{left:g.x,top:g.y,width:a,height:x?void 0:o,minHeight:x?0:s,zIndex:l},onMouseDown:()=>u==null?void 0:u(e),children:[r.jsxs("div",{className:"dp__bar",onMouseDown:b,children:[r.jsx("span",{className:"dp__title",children:n}),r.jsx("button",{className:"dp__min-btn",onMouseDown:v=>v.stopPropagation(),onClick:()=>p(v=>!v),title:x?"展开":"最小化",children:x?"▢":"▬"})]}),!x&&r.jsx("div",{className:"dp__body",children:i}),r.jsx("style",{children:Xd})]})}const Xd=`
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
`,la=48,lb=[{facing:"N",label:"↑N",title:"朝北"},{facing:"S",label:"↓S",title:"朝南"},{facing:"E",label:"→E",title:"朝东"},{facing:"W",label:"←W",title:"朝西"}],Qd=.25,cb=2,qd=.1;function db({onBack:e}){const{state:n,dispatch:t}=Ce(),a=Ye.find(P=>P.id===n.map.id)??n.map,o=n.playerIds,s=a.width,i=a.height,l=I.useRef(null),[d,u]=I.useState({x:0,y:0,scale:1}),f=I.useRef(null),m=I.useRef(!1);I.useEffect(()=>{const P=l.current;if(!P)return;const B=P.clientWidth,F=P.clientHeight,X=s*la,Q=i*la;if(!B||!F)return;const se=Math.min(B/X,F/Q),le=Math.max(Qd,Math.min(1.2,se)),de=(B-X*le)/2,vn=(F-Q*le)/2;u({x:de,y:vn,scale:le})},[s,i]),I.useEffect(()=>{const P=l.current;if(!P)return;const B=F=>{F.preventDefault();const X=F.deltaY<0?qd:-qd;u(Q=>({...Q,scale:Math.min(cb,Math.max(Qd,Q.scale+X))}))};return P.addEventListener("wheel",B,{passive:!1}),()=>P.removeEventListener("wheel",B)},[]);const g=I.useCallback(P=>{P.button===0&&(f.current={startX:P.clientX,startY:P.clientY,origX:d.x,origY:d.y},m.current=!1)},[d.x,d.y]),h=I.useCallback(P=>{if(!f.current)return;const B=P.clientX-f.current.startX,F=P.clientY-f.current.startY;!m.current&&Math.sqrt(B*B+F*F)>5&&(m.current=!0),m.current&&u(X=>({...X,x:f.current.origX+B,y:f.current.origY+F}))},[]),x=I.useCallback(()=>{f.current=null,m.current=!1},[]),p=I.useMemo(()=>Object.keys(a.startZones).map(Number).sort((P,B)=>P-B),[a]),[_,y]=I.useState(()=>{const P={};for(let B=0;B<n.teamCount;B++)P[B]=B;return P});I.useEffect(()=>{const P={};for(let B=0;B<n.teamCount;B++)P[B]=B;y(P)},[a.id,n.teamCount]);function b(P,B){y(F=>{const X=Object.entries(F).find(([,se])=>se===B),Q={...F,[P]:B};return X&&(Q[Number(X[0])]=F[P]),Q})}const v=I.useMemo(()=>{const P=new Map;for(let B=0;B<n.teamCount;B++){const F=_[B]??B,X=a.startZones[F];if(X)for(const Q of X){const se=`${Q.row},${Q.col}`,le=P.get(se)??[];le.push(B),P.set(se,le)}}return P},[a,n.teamCount,_]),j=I.useMemo(()=>{const P={};for(const B of o){const F=n.teams[B];P[F]||(P[F]=[]),P[F].push(B)}return P},[o,n.teams]),[C,M]=I.useState(o[0]),[S,E]=I.useState(""),z=I.useMemo(()=>{for(const P of o){const B=n.players[P];if(!B)return!1;const F=n.teams[P],X=_[F]??F,Q=a.startZones[X];if(!Q||!Q.some(le=>le.row===B.position.row&&le.col===B.position.col))return!1}return!0},[o,n.players,n.teams,_,a]);function N(P,B){t({type:"SET_SPAWN_POSITION",playerId:P,position:B})}function R(P,B){t({type:"SET_SPAWN_FACING",playerId:P,facing:B})}function D(){z&&t({type:"CONFIRM_SETUP"})}function K(P){return ht(n,P)}function A(P){var F;const B=(F=j[P])==null?void 0:F[0];return B?K(B):Mn[P%Mn.length][0]}const L=I.useMemo(()=>{const P=new Map;for(const B of o){const F=n.players[B];if(!F)continue;const X=q.find(le=>le.id===F.unitId);if(!X)continue;const Q=`${F.position.row},${F.position.col}`,se=P.get(Q)??[];se.push({pid:B,color:K(B),tokenId:X.tokenId,name:X.nameCn}),P.set(Q,se)}return P},[o,n.players]),{x:W,y:V,scale:k}=d,$=220,J=I.useMemo(()=>{const P={},se=Math.floor((window.innerHeight-56-60)/192);return o.forEach((le,de)=>{const vn=Math.floor(de/se),zn=de%se;P[le]={x:window.innerWidth-($+16)*(vn+1),y:56+zn*192}}),P},[o]);return r.jsxs("div",{className:"ssm__screen",children:[r.jsxs("div",{className:"ssm__topbar",children:[r.jsx("button",{className:"ssm__back-btn",onClick:e,children:"← 返回"}),r.jsx("span",{className:"ssm__title",children:"选择出击位置"}),r.jsxs("span",{className:"ssm__map-name",children:[a.nameCn," (",i,"×",s,")"]}),r.jsx("span",{style:{flex:1}}),r.jsx("button",{className:`ssm__start-btn${z?"":" ssm__start-btn--disabled"}`,onClick:D,disabled:!z,title:z?"开始战斗":"所有玩家必须先选择出击位置",children:"战斗开始 ▶"})]}),r.jsx("div",{className:"ssm__viewport",ref:l,onMouseDown:g,onMouseMove:h,onMouseUp:x,onMouseLeave:x,children:r.jsx("div",{className:"ssm__map-inner",style:{transform:`translate(${W}px, ${V}px) scale(${k})`,transformOrigin:"top left",display:"grid",gridTemplateColumns:`repeat(${s}, ${la}px)`,gridTemplateRows:`repeat(${i}, ${la}px)`},children:a.cells.flatMap((P,B)=>P.map((F,X)=>{const Q=bc(F),se=`${B},${X}`,le=v.get(se)??[],de=L.get(se)??[],vn=le.length>0,zn=le.length>0?A(le[0]):"",Aa=n.teams[C],Jt=vn&&le.includes(Aa);let Zn="ssm__cell";vn&&(Zn+=" ssm__cell--zone"),Jt&&(Zn+=" ssm__cell--placeable"),de.length>0&&(Zn+=" ssm__cell--selected");function re(ee){m.current||(ee.stopPropagation(),Jt&&N(C,{row:B,col:X}))}return r.jsxs("div",{className:Zn,style:{backgroundImage:`url("${Q}")`,...vn?{borderColor:zn,boxShadow:de.length>0?`inset 0 0 10px ${zn}66, 0 0 6px ${zn}44`:void 0}:{}},onClick:Jt?re:void 0,children:[de.length===1&&r.jsx("div",{className:"ssm__token",children:r.jsx("img",{src:`/assets/tokens/${de[0].tokenId}`,alt:de[0].name,style:{boxShadow:`0 0 6px ${de[0].color}`},onError:ee=>{ee.target.style.opacity="0.3"}})}),de.length>1&&r.jsx("div",{className:"ssm__token ssm__token--multi",children:de.map(ee=>r.jsx("img",{src:`/assets/tokens/${ee.tokenId}`,alt:ee.name,className:"ssm__token-img-sm",style:{boxShadow:`0 0 4px ${ee.color}`},onError:Be=>{Be.target.style.opacity="0.3"}},ee.pid))})]},se)}))})}),o.map((P,B)=>{var re;const F=n.players[P],X=q.find(ee=>ee.id===(F==null?void 0:F.unitId)),Q=K(P),se=S===P,le=C===P,de=n.teams[P],vn=((re=j[de])==null?void 0:re[0])===P,zn=_[de]??de,Aa=_[de]??de,Zn=(a.startZones[Aa]??[]).some(ee=>ee.row===F.position.row&&ee.col===F.position.col);return r.jsx(we,{id:`spawn-${P}`,title:`P${B+1} ${(X==null?void 0:X.nameCn)??"—"}`,initialPos:J[P]??{x:100,y:100},width:$,minHeight:60,zIndex:se?50:10+B,onFocus:()=>{E(P),M(P)},children:r.jsxs("div",{className:`ssm__player-card${le?" ssm__player-card--active":""}`,style:{borderTop:`2px solid ${Q}`},onClick:()=>M(P),children:[r.jsxs("div",{className:"ssm__player-label",style:{color:Q},children:["P",B+1," ",le?"◄ 放置中":""," ",Zn?"✓":""]}),vn&&r.jsx("div",{className:"ssm__zone-select",children:r.jsxs("label",{children:["出击区域:",r.jsx("select",{value:zn,onChange:ee=>b(de,Number(ee.target.value)),onClick:ee=>ee.stopPropagation(),children:p.slice(0,a.maxTeams).map(ee=>r.jsxs("option",{value:ee,children:["区域 ",ee+1]},ee))})]})}),r.jsx("div",{className:"ssm__unit-name",children:(X==null?void 0:X.nameCn)??"—"}),r.jsxs("div",{className:"ssm__pos-display",children:["格 (",F.position.row,", ",F.position.col,")"]}),r.jsx("div",{className:"ssm__facing-grid",children:lb.map(({facing:ee,label:Be,title:Ve})=>{const je=F.facing===ee;return r.jsx("button",{className:`ssm__facing-btn${je?" ssm__facing-btn--active":""}`,style:je?{borderColor:Q,color:Q}:void 0,title:Ve,onClick:()=>R(P,ee),children:Be},ee)})})]})},P)}),r.jsx("style",{children:ub})]})}const ub=`
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
  width: ${la}px;
  height: ${la}px;
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
`;function pb({onStart:e,onOnlinePlay:n,onViewRules:t,onViewData:a,onLoadGame:o,onReplay:s,onMapEditor:i,onSettings:l}){return r.jsxs("div",{className:"hs-screen",children:[r.jsxs("div",{className:"hs-center",children:[r.jsx("h1",{className:"hs-title",children:"Embryo Machine"}),r.jsx("p",{className:"hs-subtitle",children:"战棋机甲对战游戏"}),r.jsx("div",{className:"hs-divider"}),r.jsx("button",{className:"hs-btn hs-btn--primary",onClick:e,children:"▶ 开始游戏"}),r.jsx("button",{className:"hs-btn hs-btn--online",onClick:n,children:"联机对战"}),r.jsx("button",{className:"hs-btn hs-btn--secondary",onClick:o,children:"📂 加载存档"}),r.jsx("button",{className:"hs-btn hs-btn--secondary",onClick:s,children:"🎬 回放录像"}),r.jsx("div",{className:"hs-divider hs-divider--sm"}),r.jsxs("div",{className:"hs-links",children:[r.jsx("button",{className:"hs-link-btn",onClick:l,children:"⚙ 设置"}),r.jsx("button",{className:"hs-link-btn",onClick:i,children:"🗺️ 地图编辑器"}),r.jsx("button",{className:"hs-link-btn",onClick:t,children:"📖 游戏规则"}),r.jsx("button",{className:"hs-link-btn",onClick:a,children:"📊 游戏资料"})]})]}),r.jsx("style",{children:mb})]})}const mb=`
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
`;function fb({onBack:e,soundEnabled:n,onToggleSound:t,soundVolume:a,onVolumeChange:o,exposureMode:s,onToggleExposure:i,autoFill:l,onToggleAutoFill:d,onCacheAssets:u}){return r.jsxs("div",{className:"set-screen",children:[r.jsxs("div",{className:"set-center",children:[r.jsxs("div",{className:"set-header",children:[r.jsx("button",{className:"set-back",onClick:e,children:"← 返回"}),r.jsx("h1",{className:"set-title",children:"设置"})]}),r.jsx("div",{className:"set-divider"}),r.jsxs("div",{className:"set-section",children:[r.jsx("h2",{className:"set-section__title",children:"音效设置"}),r.jsxs("label",{className:"set-toggle",onClick:t,children:[r.jsx("span",{className:`set-toggle__switch${n?" set-toggle__switch--on":""}`,children:r.jsx("span",{className:"set-toggle__knob"})}),r.jsx("span",{className:"set-toggle__label",children:"音效"}),r.jsx("span",{className:"set-toggle__hint",children:n?"已开启":"关闭"})]}),n&&r.jsxs("div",{className:"set-slider-row",children:[r.jsx("span",{className:"set-slider-row__label",children:"音量"}),r.jsx("input",{className:"set-slider",type:"range",min:0,max:100,value:Math.round(a*100),onChange:f=>o(Number(f.target.value)/100)}),r.jsxs("span",{className:"set-slider-row__value",children:[Math.round(a*100),"%"]})]})]}),r.jsx("div",{className:"set-divider set-divider--sm"}),r.jsxs("div",{className:"set-section",children:[r.jsx("h2",{className:"set-section__title",children:"游戏设置"}),r.jsxs("label",{className:"set-toggle",onClick:i,children:[r.jsx("span",{className:`set-toggle__switch${s?" set-toggle__switch--on":""}`,children:r.jsx("span",{className:"set-toggle__knob"})}),r.jsx("span",{className:"set-toggle__label",children:"暴露模式"}),r.jsx("span",{className:"set-toggle__hint",children:s?"已开启：所有隐藏卡牌将显示正面":"关闭"})]}),r.jsxs("label",{className:"set-toggle",onClick:d,children:[r.jsx("span",{className:`set-toggle__switch${l?" set-toggle__switch--on":""}`,children:r.jsx("span",{className:"set-toggle__knob"})}),r.jsx("span",{className:"set-toggle__label",children:"自动补位"}),r.jsx("span",{className:"set-toggle__hint",children:l?"已开启：空位自动随机选机由AI控制":"关闭"})]})]}),r.jsx("div",{className:"set-divider set-divider--sm"}),r.jsxs("div",{className:"set-section",children:[r.jsx("h2",{className:"set-section__title",children:"资源管理"}),r.jsx("button",{className:"set-btn set-btn--secondary",onClick:u,children:"缓存全部资源"}),r.jsx("p",{className:"set-hint",children:"一次性加载所有卡牌、地形等图片资源"})]})]}),r.jsx("style",{children:gb})]})}const gb=`
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
`;function hb({phase:e,loaded:n,total:t,onConfirm:a,onSkip:o}){const s=t>0?Math.round(n/t*100):0,i=n>=t&&t>0;return r.jsxs("div",{className:"apd-overlay",children:[r.jsxs("div",{className:"apd-box",children:[e==="asking"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"apd-icon",children:"⚠"}),r.jsx("h2",{className:"apd-title",children:"资源未完全缓存"}),r.jsxs("p",{className:"apd-body",children:["检测到游戏图像资源（卡牌、地形、地图等）尚未完全缓存。",r.jsx("br",{}),"首次加载游戏时可能出现图片闪烁或延迟。"]}),r.jsxs("p",{className:"apd-body apd-body--sub",children:["是否现在一次性加载全部资源？",r.jsx("br",{}),r.jsxs("span",{className:"apd-hint",children:["共约 ",t," 张图片，需要较短等待时间。"]})]}),r.jsxs("div",{className:"apd-actions",children:[r.jsx("button",{className:"apd-btn apd-btn--primary",onClick:a,children:"是，立即加载"}),r.jsx("button",{className:"apd-btn apd-btn--secondary",onClick:o,children:"否，边玩边加载"})]})]}),e==="loading"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"apd-icon",children:i?"✓":"↓"}),r.jsx("h2",{className:"apd-title",children:i?"加载完成":"正在加载资源…"}),r.jsx("div",{className:"apd-bar-track",children:r.jsx("div",{className:"apd-bar-fill",style:{width:`${s}%`}})}),r.jsxs("p",{className:"apd-progress-text",children:[n," / ",t,"  (",s,"%)"]}),i&&r.jsx("p",{className:"apd-body apd-body--sub",children:"资源已全部缓存，正在进入游戏…"})]})]}),r.jsx("style",{children:xb})]})}const xb=`
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
`,bb={"72ea91e355f9729a4f906f4a5981ccb94deb6c3a1eb4c9a4f255cbc86ac068a5":"/assets/cards/ag/ag-7-front.jpg",de64d1812f33cab1363e0191b2e1fe10766940cf72c1ae602a1537d6d59dee87:"/assets/ui/card-back.jpg",ca3a08c40eed141b502fe1a227ec29253a864fba0fda52930a7e55d1910a6698:"/assets/cards/ag/ag-3-front.jpg","00fec5279b30da9801db7c84419764909d349e1c210543de132af209cd3f0abd":"/assets/cards/ag/ag-4-front.jpg","608720fd8dcc5e7fe60d00f88b206e99c0688cfc20ef38f4eea05359b2ec0861":"/assets/cards/ag/ag-5-front.jpg",b0389d207312bbef32c2910744518f6f30c73796f27e573cfaec51c355862a97:"/assets/cards/ag/ag-6-front.jpg","29fa020388f199454a71e6673a19d76c4aafc4e8e8f34af0a9eeafe41c172391":"/assets/cards/ag/ag-8-front.jpg",c25abc7656b2d1eb27be27d09fecde25fd22427409e5afc79caf0ee09a8ff4f0:"/assets/cards/ag/ag-11-front.jpg","31e6d6800110b0ebfe8793074ba169f13b6fa02ea67f7e77739a4bf003670ba1":"/assets/cards/ag/ag-18-front.jpg","9762039c262e506e6bddc0449ed1ddc0449d1c6234afba1327ebfdb81a388e54":"/assets/cards/ag/ag-12-front.jpg",aa1286d4f7814991279a7aac4a75c0b194b8e7f9d6510fb8e63362939d04ec1e:"/assets/cards/ag/ag-14-front.jpg",dfe234f8d5372742a6ed4ab9f521f1ad9c693a228003aad19750c34aa7d1d49b:"/assets/cards/ag/ag-21-front.jpg","12e25c69082cbfe495f5dc49006c7c5aebc1f73574c59c39ffc5ed5b8b2fbc6d":"/assets/cards/ag/ag-17-front.jpg","9ba8361aa29742693bc83360c55e367632471dfea59493136210cfd09fd1aa48":"/assets/cards/ag/ag-19-front.jpg","67a686db8c4db82340e640db02b289fb998f14b79ede162eaffb1d2f5488a3a4":"/assets/cards/ag/ag-20-front.jpg",eb56b8c9f9b270690d535f55ac55c846dae5537649cec7021639211ff7f6cc22:"/assets/cards/ag_plus/ag_plus-2-front.jpg",e4c12ee3ba0ef3bd8c2ee9b1bb41e74c404f09b62dba8cb2e35faa2e520895e5:"/assets/cards/ag_plus/ag_plus-3-front.jpg","8f2248399528f6a051509d01cc0c78398afd381b7ad8f9915ab6381297026282":"/assets/cards/ag_plus/ag_plus-4-front.jpg",ebac68b5f2d7cf81a64094a12da6386a77e2434776de373d72ed8be4ba13159c:"/assets/cards/ag_plus/ag_plus-5-front.jpg","35999dd2727c1847d4a12d8061029cf3555bdbb7452b03c3978443401ac1022c":"/assets/cards/ar/ar-1-front.jpg","2f4a7328aaa21e26023208758042e122b483ca242c1b95ee4c64952eb7bb1dc3":"/assets/cards/ar/ar-2-front.jpg",c414ed84946840c69b6bdc4393af27f50d70a81b56a8c1849d1bfdaaa27531c1:"/assets/cards/ar/ar-4-front.jpg","9eca454c2c4f5cdb16902adfa101484f2257d1a9fe6c7985d3aaba990982c725":"/assets/cards/ar/ar-5-front.jpg",dc0d77a5ec25f65aa1ab091a1ede028f7fb1f7ebfbea4945b907adef2ece4281:"/assets/cards/ar/ar-13-front.jpg","6fbefeb90155b45f8872740038dfa38116530750caa1e623a99bab29b5f40a21":"/assets/cards/ar/ar-14-front.jpg","33a35f67e85d189889a7e8fa66ff1719a0d2680027105d1075f802d94d772bb4":"/assets/cards/ar/ar-8-front.jpg","6e7e1e6dde63265f8df8809db768b684e794f4331f9c3d7f4185a1dc612c0701":"/assets/cards/ar/ar-9-front.jpg","2f73e47fe817e7ae747aee252cc07cc1d556c8bd1b2acdf54f9a678f1ff51e02":"/assets/cards/ar/ar-12-front.jpg",aecf39488eb7018c47ea85aa4073aad5f196b9440e2c9248ed960d91e6696f22:"/assets/cards/ar/ar-15-front.jpg",cf41932a7f074826ffbd6c2e14e3bb173d95e38982bac18c2bf04773923903dd:"/assets/cards/ar/ar-16-front.jpg",cfe5a7626bb3fb179d3d056519cf477fa9bd6db3e441a7d7b3204eb4f8e5c2cb:"/assets/cards/ar/ar-17-front.jpg",a26a8dd85af73fe69b123ac4e0beae7cac68442afe22c8d44bf0312a9081381d:"/assets/cards/ar/ar-18-front.jpg","6b6d4acdc02336939dff11c9c962d9f4fe1246ee51003dfc1a70569ebd740664":"/assets/cards/ar/ar-19-front.jpg","2d5acd9b8353db95858fc7dbdcae061bda7df49032e5aea255431ad33aca98d0":"/assets/cards/ar/ar-20-front.jpg",a2d445e888ff59aa58f2ad514a9a031b486a3d56621fa7ddb5f930a045a513b2:"/assets/cards/ar_plus/ar_plus-1-front.jpg",fd85ee9cb1b56cfc5f7e5284a4cf1c67f406b29a068253f7164ea628c1e5c43a:"/assets/cards/ar_plus/ar_plus-4-front.jpg","48cbd3a065ccfa5cbcba4f0247cb0fcf166291740d54ca162580765e5d5c1d4e":"/assets/cards/ar_plus/ar_plus-3-front.jpg",f395a843fb92ff32392d84d9c8dde21b95bf3bf41b8eb787d5d8480878952bcb:"/assets/cards/bg/bg-4-front.jpg","193f6b1b0a647be282bb1b7d5013924039743a46a48383f64d5cb726859f25aa":"/assets/cards/bg/bg-14-front.jpg","0e54f575524cacb092b31f8983a537c18487fdf7405caa924653a39e4bc544db":"/assets/cards/bg/bg-16-front.jpg","2fce52c5e8cde4295b30baed6b7de68e6a2839f5e086d7e1e530ea996ffe0435":"/assets/cards/bg/bg-12-front.jpg",a391b8c4020883f8d080a6e6e83864670158aef7be5eab6d7b348ef6e6b93d10:"/assets/cards/bg/bg-15-front.jpg",fd79d96009f9b66e23c02f25edfcce4a13fdf61c3fe8188269cf83916766df31:"/assets/cards/bg/bg-18-front.jpg",ad7a449d1edd5300a57a8bae2cab2a607d5422ea37c397b7c8c69df5b3096502:"/assets/cards/bg/bg-13-front.jpg","8571242343bc19329436ac669a422140b9dfbc7544cf1de2ec298eef9b3a9257":"/assets/cards/bg/bg-17-front.jpg","64ba521997fc2f8ddbb544dd45bcc58e3145822f4927860039ec7a7921d01757":"/assets/cards/bg/bg-19-front.jpg",ab0196704ba0510bc85e9e58e6bb8323c43cddc2e8f986e6ad79a11852e2c421:"/assets/cards/bg/bg-20-front.jpg","8514e5d83cf922f035f5600a0e96d2bf3ae85d064807759af4f08155ffbe6145":"/assets/cards/bg/bg-21-front.jpg",f495acab04c9e7b539619082b1c7eab387e329794a866f80f4d49f3b8f1f693e:"/assets/cards/bg/bg-23-front.jpg",d4e423814ead1fd2c384492fac1be79e014d771712d0db3c78d93b4e2daf6699:"/assets/cards/bg_plus/bg_plus-1-front.jpg","602d9c6187bb0bb67e3435b95461e1d0f6aa432b5408d2addfe77416d08b2862":"/assets/cards/bg_plus/bg_plus-3-front.jpg",e97efab0e571ea9441ecfcef69388ac5833e96b52f196073127b5930532f920d:"/assets/cards/bg_plus/bg_plus-4-front.jpg","9e27878685e0972914ec6db331732131c20f51b80aef11ca2ed7850338dc56a5":"/assets/cards/bg_plus/bg_plus-5-front.jpg","50793b3633188783f2e78b770a325549b99cc2b0cae8be0f837c1c1bd7958bcd":"/assets/cards/ho/ho-1-front.jpg","23be89f666a01394bded8d8b4e845a176efe96c1e33b40d9edacf15c715a3dd9":"/assets/cards/ho/ho-2-front.jpg",f9b7e9cd2182ade25b13d7355f2297ca1bedd4426b653e89a45aa14ce6221ff6:"/assets/cards/ho/ho-3-front.jpg","120ffbd79d44d8dce99f704baf79e62487e73935e18b8e18bec3fe352e603da0":"/assets/cards/ho/ho-4-front.jpg","926cccef6ed7a746b53a370664d9b1e60fb27d976c4707a0f34e390dcd7ef985":"/assets/cards/ho/ho-5-front.jpg","17b7289bdbdf1c8fc0ddf23c146d0b51e2c66e8e70a20545e64685e087f78496":"/assets/cards/ho/ho-6-front.jpg","38309819fe704c2f7e58cd5c35110ca71a78198b221595d966f711f4ee17d558":"/assets/cards/ho/ho-15-front.jpg","002453cf5ab95a93e69365838d45c421e90a106e3c0bbe20d038355a8495827e":"/assets/cards/ho/ho-8-front.jpg",da0d31d7f836a648f062ee69c549fe2b3806fcc729015bcff634ea427bc94c54:"/assets/cards/ho/ho-9-front.jpg","49d1feafa8f7a1608f6ea2c9205581b056cd4d3a352a903b065be7b613d73d93":"/assets/cards/ho/ho-10-front.jpg",e23e9d4556a4c1f84670f09e14f3abb1050f0effd6b004b190bb0d51c0567a16:"/assets/cards/ho/ho-12-front.jpg",ef5f963cdb85d776e30cc08f406812b628139e1c0762da6cdd76a995d526b132:"/assets/cards/ho/ho-14-front.jpg","76445d956a01a1a6759748880ff112510881dde7c531af86812ced9080f6027d":"/assets/cards/ho/ho-17-front.jpg","5dcb19c46fe4c87775c42969ee66a2e4edf407066eb7b6e9f75ae7f06c544237":"/assets/cards/ho_plus/ho_plus-1-front.jpg",d3608718aa56d2713c83f5d14a2957ae82680551c65c06caf10fa7aab623f2b4:"/assets/cards/ho_plus/ho_plus-2-front.jpg",c0138ea658ae0afcbfe06f7c46d1dfba00a459fd012b0c81aae9c63582923191:"/assets/cards/ho_plus/ho_plus-3-front.jpg","84f830f1410ddc1388ff00d0094af433f20688408ac72c20cfd5e90bf077a494":"/assets/cards/ho_plus/ho_plus-4-front.jpg","6d418c369626afc07e65702585463fa8d7e6dc9518dab01039c73a66907ed553":"/assets/cards/hy/hy-20-front.jpg","3e5c8c4b0dc1c5c6a2e65f80c779cda8035f41399837d032585b13c9a2e58d7b":"/assets/cards/hy/hy-7-front.jpg","9541ab0e2700ffb0df842826dd163204ef7832414a0bcaa1f54f7ac98fde834f":"/assets/cards/hy/hy-24-front.jpg",e8b1063f07dd998149120cc48ce4bb6d98a7bd93967160088eba9d96b710f421:"/assets/cards/hy/hy-8-front.jpg","4f64597b35d42ae5ff6c550c73830d48ef671f57d68ff01cc630e7b2ccaf43cd":"/assets/cards/hy/hy-10-front.jpg","91850bf85a43f889c8889936afdf4db90bde65dc9e65c1b5e0108a8932ac47a9":"/assets/cards/hy/hy-11-front.jpg","91c2ebb2087607ac70d7c081e0291cc298b78781e7e3faf2ec7fc86be248dfd4":"/assets/cards/hy/hy-13-front.jpg","640e4fcde89541cd02119f60f24deed7bad79a678cf1d99cce9e7ba73f71692e":"/assets/cards/hy/hy-14-front.jpg",b24622641e65a1b75e971a3e8c31a2bf0588ba84875b5bf7d03f27f0a63af9fc:"/assets/cards/hy/hy-19-front.jpg","1576e9779c12faed9bad26006fa8a12e7be0756ed264ea3b1deb05127d239b3c":"/assets/cards/hy/hy-21-front.jpg","3674a92a567de26b6304f6aebb9823606e1f72ce9e925d7488152e2f084ec86f":"/assets/cards/hy/hy-22-front.jpg","794136e3f4a27259a85a053cf7c7adc772875f6d5e042bb0eb4aa48d4b46e434":"/assets/cards/hy/hy-23-front.jpg",d17b8a6c61b023f8b09f9ffb1748e0de2eb751a638f2d376983ae14d0bd8564d:"/assets/cards/hy_plus/hy_plus-2-front.jpg",c8310aa2df0cdec2acf8913edbd16d60aaa22deab68867b14f70cd4bba59e4f6:"/assets/cards/hy_plus/hy_plus-5-front.jpg",a8188b32f23968b98e88cb685d8af599d5a2f6570f43f4330b189dd9ce669672:"/assets/cards/hy_plus/hy_plus-8-front.jpg","237ae5dbe95f95a334369a3f6d2c4f628bc2ef4c4cfda81f637169448b0b2a78":"/assets/cards/hy_plus/hy_plus-7-front.jpg",d7c9c03a695431a59b976da9ef1433b1969e905ce1b0f7165960910d8dcda7e7:"/assets/cards/lg/lg-1-front.jpg","54e91ee7019cf98518ceff5d5eb3ae24a2c490991d9ef700107919c1d7216133":"/assets/cards/lg/lg-2-front.jpg","5109d921c42001dd49deb4453c84680c485dbd03acbbf184db44c52e20df0947":"/assets/cards/lg/lg-3-front.jpg","238151d3ee802a63f7cfab27eba567809e0f434dd0ae7ab5cbfd67e17aab320c":"/assets/cards/lg/lg-4-front.jpg",cbd722c55b5f4530d1f909ee512accfb976e160669d861b03ba8a9f1ac812088:"/assets/cards/lg/lg-10-front.jpg","51cb5bbee96271ee7948d123f441fd961511c5664f85d880339ac81e76d297ce":"/assets/cards/lg/lg-12-front.jpg","5a50ab7bd0284e099caf5991bcaebf3fd5e2f6f852a41e8164548250372e13ee":"/assets/cards/lg/lg-13-front.jpg","8b83c2b2d3abe743003e29e8ace677d3669fee9012700fbd9405fb2581c2f1c1":"/assets/cards/lg/lg-14-front.jpg",e3f20637a74add18073f9b306a299693bccd9ff1318dd1cb35bb5b237ae03b3d:"/assets/cards/lg/lg-15-front.jpg","36b7cec7580d4de56edb5692bc83f9c3c08e4a94c7a75d3dca6b9aab5c70e886":"/assets/cards/lg/lg-21-front.jpg","307424a85866d9131ebaf92eee6aa49d75c7fe86937ebb0ddb7651431de5fc2d":"/assets/cards/lg/lg-18-front.jpg","653861f0980a12fb43cbfebda4071b3ca37e094bdc80c8698d0e183d90a83ed2":"/assets/cards/lg/lg-20-front.jpg","3f3a90dac9d0a565694982c55380f9b5fb3b914147aacd6b05c37a9ca8fd19d2":"/assets/cards/lg/lg-23-front.jpg","2b4298eafb47c327a290152fbccd471da28923c5769d2a645c574c16be6a039d":"/assets/cards/lg_plus/lg_plus-7-front.jpg","3074578f141dd1726916bf8e3e4532b4b82c72b7e2d30cbd3205b91609bbfbf2":"/assets/cards/lg_plus/lg_plus-3-front.jpg",bdd1e79a3a0f11fb4aeb486ae199ac2a971f957f90ce61439360e64f5c1ffc22:"/assets/cards/lg_plus/lg_plus-6-front.jpg",c3b9c862179da114428f8db2318e87e2770ad861b7bda0046c875ddaf884683c:"/assets/cards/lg_plus/lg_plus-8-front.jpg","3b6e2c61dd5d3c61e285d5c5f1bae42d08319f1ccd8ab950dabc7012fcae2ec8":"/assets/cards/lo/lo-12-front.jpg",ec8a31e551ec7a31602e8f6dfb7266c4dd377717704a34ee1647c288e9e64013:"/assets/cards/lo/lo-10-front.jpg","58a7b4c3f1fb01ee43a7269374ed04e71909609a51d488407b9754efcd055604":"/assets/cards/lo/lo-7-front.jpg",fdffe9ed90791948ae05fe76630b10ceca9d7bd442c41e2da584527d72ad98de:"/assets/cards/lo/lo-8-front.jpg",d4574f1615eb69b5470822b40ffd0d27da741f7f3e179c671c54290ca51afc0c:"/assets/cards/lo/lo-9-front.jpg",ab0f524c4935a2945d72db20beb4776d764df5de49672ed46e91eadce168e065:"/assets/cards/lo/lo-15-front.jpg","32297c12e7745ecb9bac5727434e7fff2784c25fe2b744d73f36218acc43b0b2":"/assets/cards/lo/lo-13-front.jpg",d9ef4060c364dea670bd525f0aad18687149d8797f5a9946c66b8f14681cff0f:"/assets/cards/lo/lo-14-front.jpg","7cabdc1509214622489311c85cc0cc2857daac93cb4fc31f515fb5fb638f6098":"/assets/cards/lo/lo-16-front.jpg",d2fc0f3677e4dd64bb2bf580951612085ce1f5a36d84742f94101ba0aeb0bebd:"/assets/cards/lo/lo-17-front.jpg","492722fef12f5835e2e0917c18b55b226be409f5f60973130cfda3daaba2a963":"/assets/cards/lo/lo-18-front.jpg","03b051e124ef4ec1c76498960f9a5317bdf1bd3f91973329062ce1b1a905c796":"/assets/cards/lo/lo-19-front.jpg",c9fdad2b74bc9c08941a4348c934616abadbc335d218914419e7972dc54aaa27:"/assets/cards/lo/lo-20-front.jpg","2753d376c59037359099d989ebc9ecdc6f35b0bcc1966a526919a62e9492ba5d":"/assets/cards/lo_plus/lo_plus-1-front.jpg","78e76504372580ad38ecea1cf6ca8b6eef7f24beb4bb173023d493a2900c9213":"/assets/cards/lo_plus/lo_plus-2-front.jpg",cfd41bad24efba992152437f01605cfa070b96c24171d158eb6b38c6e062b997:"/assets/cards/lo_plus/lo_plus-3-front.jpg","56b654c93edf5b33422b575efd3ece648df66bb3b245576bcb100db2cf463b90":"/assets/cards/lo_plus/lo_plus-4-front.jpg","83e4cf361d79bf56cab85b3165d8a502c3b6369a7d91d9d74008e7446ecee5aa":"/assets/cards/tr/tr-1-front.jpg",fac9e08ed1dd2007eff99f64f58456b8f28c887ea72caf3631798f19f586c2cf:"/assets/cards/tr/tr-2-front.jpg","49e88188dd73d2dc1889616077e7b3d3a01274be0936f3cf94b0ba13ffcdd3ec":"/assets/cards/tr/tr-3-front.jpg",f9ace908e376ccf677350bf8b04446db76d5b7810e1238eed78f9636917732d5:"/assets/cards/tr/tr-4-front.jpg",e176ed5572f8b0fec1afdf7338922f6287cb2bd7e8da531363f03afad38d2855:"/assets/cards/tr/tr-5-front.jpg",dcd6e5c81f720c301fdf8b8a9bdc7d1332f5d49d859cc3b7a888c4b47abb437c:"/assets/cards/tr/tr-8-front.jpg","7a3a4bc99a08007a8634615d14bb6e8701d8046b4b357e2e53a6816b1fa4b952":"/assets/cards/tr/tr-7-front.jpg","751ef0172ef4154fa9ada26cf0748253cbdb26e77ee5d7fbeb0cb448f0417815":"/assets/cards/tr/tr-9-front.jpg","637e9420cee8da61167a68a33b51a5955c1b96d79b8b104b70a8d721fcb76d2a":"/assets/cards/tr/tr-10-front.jpg","4096df60204fa108f6f86b2219c8a27d83e68a1ccb196df7df46de4392c2b41c":"/assets/cards/tr/tr-15-front.jpg",bf2f3bb722b82651f6eae93503ee371f2eb0aeb19a3c7048ee204c111f0f7eb4:"/assets/cards/tr/tr-13-front.jpg",e3e51452f907f7c993bd47093ca97798e5c685c2662bbf839e24c197bcdec634:"/assets/cards/tr/tr-17-front.jpg","188c6abac72e21173f1f0b02deb68d8204fe9d8773eea4bf01d633d170e226e4":"/assets/cards/tr/tr-19-front.jpg","9350f91bb06a35e92994e0129874a9c12e075ecde1d97595dc94424a3d445bdf":"/assets/cards/tr_plus/tr_plus-1-front.jpg","427ee044bae11fec56f65f194e7d6f8abcb7e904b199fc4a96c58ca93bfef239":"/assets/cards/tr_plus/tr_plus-3-front.jpg",e300e383916c326e28c6ced9e9705531a202a5daef21fdee6763ad2d11e3a2d8:"/assets/cards/tr_plus/tr_plus-5-front.jpg","7438c901962c7ce3370464463ea4f1e65b4d2a4ef220b5a4032115503fc32b0b":"/assets/cards/zb/zb-1-front.jpg","1c5ed46f16057ca9fa0f10685d323abe71b88b2a416eef661e520e9ff3a4fbcf":"/assets/cards/zb/zb-2-front.jpg","64fc21d85fcd6d3a3928ce9667186a0c8316e440396b6e6ebf162ed69ea6abeb":"/assets/cards/zb/zb-3-front.jpg","69f3d2ddd129e0a3b0a3245525786cf068b2e5eafc11897c9b83e4e208fc8270":"/assets/cards/zb/zb-4-front.jpg",a96dbaf805bf2dce31353b8d02732c389101196ac8220074dd161ad97ad3b61d:"/assets/cards/zb/zb-5-front.jpg",b15c50b1b10ce0e6ee1b76b5532ba9eed3b56cdf024ff27bc6d8c5195dcd76ff:"/assets/cards/zb/zb-15-front.jpg","04c9a1429211640a93676e76f7dfe02150d7e5cd921ee79222aa156800173a71":"/assets/cards/zb/zb-9-front.jpg",cf513f83dd7e6ac363f0aaa0a028c0527a164a283b340fb356b1f607b38a8a46:"/assets/cards/zb/zb-10-front.jpg","08a5474a86442dc9ddbfbebcf9994d7d5485108285168acaa865e44cc14d5462":"/assets/cards/zb/zb-12-front.jpg","732218f61fd334436d5359accff815df2d8c54adbeb7c402336e2f2b9f04b3cd":"/assets/cards/zb/zb-22-front.jpg",ce950419d660dcd87a9760439cf739ec7878df58f21a4af49a44cc4a2265c05b:"/assets/cards/zb/zb-17-front.jpg","7efd605546127d01ae40e1be52a64b45f4174bed74d1d9c8a15a6ba2d3129bc6":"/assets/cards/zb/zb-18-front.jpg","92c305b7877de46785ee7e5b4e5c92bf94c2e761047bb4d37d3fed4ec100d8d7":"/assets/cards/zb/zb-20-front.jpg","030fd7997dc5ccd629a0e184c0ac0ad1b33d1fff9366a4131c4a1d74dbe8a9c0":"/assets/cards/zb/zb-23-front.jpg","3b5c39538c0cf52273b845c15580993cc60e2a4a67f7c27b449243029108d538":"/assets/cards/zb_plus/zb_plus-6-front.jpg","4b42de4bbd91e229d41b666598cefd2a340285f228dc0395856b5b7a22b5381b":"/assets/cards/zb_plus/zb_plus-3-front.jpg","31cd007c783ba3389e6b0a7f3ce398515d65b3ab550aab70ebfcb3d86665ad52":"/assets/cards/zb_plus/zb_plus-4-front.jpg","39a0f3d3578f021253fac1a4fb293accd68267719a9bd4707fda7419257ccfc1":"/assets/cards/zb_plus/zb_plus-5-front.jpg","2a75d8802f569be782f6ca9ef865988ecefd6f447442dd8933154a8e70dd2895":"/assets/cards/強化機雷/強化機雷-16-front.jpg","506eb3f1ac120bb2d1a61d693b9b8f00ef56b788c42a231b9203fdad0ad3aed5":"/assets/ui/card-back.jpg","2e25e08a0277638ffbe37080471ac50fe51ab4e24ea0d52a5af46b7980f76340":"/assets/cards/陸上機雷/陸上機雷-20-front.jpg","149f2bc4a9dce26a9250c94e4a9338f0edf8c90a415c999216c00440ea0a3667":"/assets/cards/ダミー/ダミー-20-front.jpg","444338c10747b07f50d0f5baeb6e9e014141c55507d748ae8d5001fe1b3e5ee3":"/assets/maps/444338c10747b07f50d0f5baeb6e9e014141c55507d748ae8d5001fe1b3e5ee3.jpg","04c1b08a573b97d5296d712ef796a7d9c5e4ed3200d8a4ae268295628de18e55":"/assets/maps/04c1b08a573b97d5296d712ef796a7d9c5e4ed3200d8a4ae268295628de18e55.jpg","9e3fcbc86b5a5563c4bb5566031e7c1fd35fda1f32d981a242889b0c2561049c":"/assets/maps/9e3fcbc86b5a5563c4bb5566031e7c1fd35fda1f32d981a242889b0c2561049c.jpg","582cf873071464b2f3ca6232d0a20b36347ffa948125d0642b330b4d8dc9c478":"/assets/maps/582cf873071464b2f3ca6232d0a20b36347ffa948125d0642b330b4d8dc9c478.jpg","0f7fd469ef1f476fc05c15df2f949f575920a92751d52fc7135f2490eb035118":"/assets/maps/0f7fd469ef1f476fc05c15df2f949f575920a92751d52fc7135f2490eb035118.jpg","224304b43b96cc1dcfb865ed84556e7b06f4068c3a5fd8c21b342a8c53c36a72":"/assets/maps/224304b43b96cc1dcfb865ed84556e7b06f4068c3a5fd8c21b342a8c53c36a72.jpg","9429fd9c15d9a339f30f6cd8ad890af69a9570e0347267c2d6636091aec8266f":"/assets/maps/9429fd9c15d9a339f30f6cd8ad890af69a9570e0347267c2d6636091aec8266f.jpg","44f518c3e3df7c83027cf6ee5990dd411a6b828f9a6d5ed1717f0a352c1654e0":"/assets/maps/44f518c3e3df7c83027cf6ee5990dd411a6b828f9a6d5ed1717f0a352c1654e0.jpg",f0abd1d4ae4b2039ed4d1b54562a66a6c9fe9b718582f6946893f42ab522a53b:"/assets/maps/f0abd1d4ae4b2039ed4d1b54562a66a6c9fe9b718582f6946893f42ab522a53b.jpg","3f14f36d964a2093258d568ac4ce3691a767cd369f3ec5ec6679a610e9f6d9bb":"/assets/maps/3f14f36d964a2093258d568ac4ce3691a767cd369f3ec5ec6679a610e9f6d9bb.jpg",e450e91d172a2414c49fef4702f6799f98b794e6ee77a412e28f81bf374ed853:"/assets/maps/e450e91d172a2414c49fef4702f6799f98b794e6ee77a412e28f81bf374ed853.jpg"},vb="embryo_preload_v1",yb=["/assets/tiles/平地0.png","/assets/tiles/砂0.png","/assets/tiles/瓦礫0.png","/assets/tiles/瓦礫1.png","/assets/tiles/瓦礫2.png","/assets/tiles/瓦礫3.png","/assets/tiles/森0.png","/assets/tiles/森1.png","/assets/tiles/森2.png","/assets/tiles/森3.png","/assets/tiles/水0.png","/assets/tiles/水1.png","/assets/tiles/水2.png","/assets/tiles/高地1.png","/assets/tiles/高地2.png","/assets/tiles/高地3.png"],_b=["/assets/tokens/AG-token.jpg","/assets/tokens/AR-token.jpg","/assets/tokens/BG-token.jpg","/assets/tokens/FO-token.jpg","/assets/tokens/HO-token.jpg","/assets/tokens/HY-token.jpg","/assets/tokens/LG-token.jpg","/assets/tokens/LO-token.jpg","/assets/tokens/TR-token.jpg","/assets/tokens/ZB-token.jpg"];function Wm(){const e=new Set;for(const n of Object.values(Vt))for(const t of n)e.add(`/assets/${t.frontImageId}`),e.add(`/assets/${t.backImageId}`);for(const n of yb)e.add(n);for(const n of Object.values(bb))n.startsWith("/assets/maps/")&&e.add(n);for(const n of _b)e.add(n);return[...e]}function Ib(e){localStorage.setItem(vb,JSON.stringify({total:e,ts:Date.now()}))}async function kb(e,n){const t=Wm(),a=t.length;let o=0;e(0,a);const s=l=>new Promise(d=>{if(n!=null&&n.aborted){d();return}const u=new Image;u.onload=u.onerror=()=>{o++,e(o,a),d()},u.src=l}),i=10;for(let l=0;l<t.length&&!(n!=null&&n.aborted);l+=i)await Promise.all(t.slice(l,l+i).map(s));n!=null&&n.aborted||Ib(a)}const gi=.4,hi=2.5,eu=.12,nu=5;function jb(e=1){const[n,t]=I.useState({x:0,y:0,scale:e}),a=I.useRef(null),o=I.useRef({x:0,y:0}),s=I.useRef(!1),i=I.useRef(null),l=I.useRef({x:0,y:0,scale:e});I.useLayoutEffect(()=>{const h=i.current;if(!h)return;const x=h.querySelector(".game-board");if(!x)return;const p=h.clientWidth,_=h.clientHeight,y=x.offsetWidth,b=x.offsetHeight;if(!p||!_||!y||!b)return;const v=Math.min(p/y,_/b),j=Math.min(hi,Math.max(gi,v)),C=(p-y*j)/2,M=(_-b*j)/2,S={x:C,y:M,scale:j};l.current=S,t(S)},[]),I.useEffect(()=>{const h=i.current;if(!h)return;const x=p=>{p.preventDefault();const _=p.deltaY<0?eu:-eu;t(y=>({...y,scale:Math.min(hi,Math.max(gi,y.scale+_))}))};return h.addEventListener("wheel",x,{passive:!1}),()=>h.removeEventListener("wheel",x)},[]),I.useEffect(()=>{const h=i.current;if(!h)return;let x=0,p=0,_=0,y=!1,b={x:0,y:0};const v=(S,E)=>Math.sqrt((E.clientX-S.clientX)**2+(E.clientY-S.clientY)**2),j=S=>{S.touches.length===1?(x=S.touches[0].clientX,p=S.touches[0].clientY,b={x,y:p},y=!1):S.touches.length===2&&(S.preventDefault(),_=v(S.touches[0],S.touches[1]),x=(S.touches[0].clientX+S.touches[1].clientX)/2,p=(S.touches[0].clientY+S.touches[1].clientY)/2)},C=S=>{if(S.touches.length===1){const E=S.touches[0].clientX-x,z=S.touches[0].clientY-p;if(!y){const N=S.touches[0].clientX-b.x,R=S.touches[0].clientY-b.y;Math.sqrt(N**2+R**2)>nu&&(y=!0)}y&&(S.preventDefault(),t(N=>({...N,x:N.x+E,y:N.y+z}))),x=S.touches[0].clientX,p=S.touches[0].clientY}else if(S.touches.length===2){S.preventDefault();const E=v(S.touches[0],S.touches[1]),z=(S.touches[0].clientX+S.touches[1].clientX)/2,N=(S.touches[0].clientY+S.touches[1].clientY)/2;if(_>0){const K=E/_;t(A=>{const L=Math.min(hi,Math.max(gi,A.scale*K));return{...A,scale:L}})}const R=z-x,D=N-p;t(K=>({...K,x:K.x+R,y:K.y+D})),_=E,x=z,p=N}},M=S=>{S.touches.length<2&&(_=0),S.touches.length===0&&(y=!1),S.touches.length===1&&(x=S.touches[0].clientX,p=S.touches[0].clientY)};return h.addEventListener("touchstart",j,{passive:!1}),h.addEventListener("touchmove",C,{passive:!1}),h.addEventListener("touchend",M),h.addEventListener("touchcancel",M),()=>{h.removeEventListener("touchstart",j),h.removeEventListener("touchmove",C),h.removeEventListener("touchend",M),h.removeEventListener("touchcancel",M)}},[]);const d=I.useCallback(h=>{h.button===0&&(a.current={x:h.clientX,y:h.clientY},o.current={x:h.clientX,y:h.clientY},s.current=!1)},[]),u=I.useCallback(h=>{if(!a.current)return;const x=h.clientX-a.current.x,p=h.clientY-a.current.y,_=Math.sqrt(x*x+p*p);if(!s.current&&_>nu&&(s.current=!0),s.current){const y=h.clientX-o.current.x,b=h.clientY-o.current.y;t(v=>({...v,x:v.x+y,y:v.y+b}))}o.current={x:h.clientX,y:h.clientY}},[]),f=I.useCallback(h=>{a.current=null,s.current=!1},[]),m=I.useCallback(()=>{a.current=null,s.current=!1},[]),g=I.useCallback(()=>{t(l.current)},[]);return{transform:n,viewportRef:i,isPanning:s.current,handlers:{onMouseDown:d,onMouseMove:u,onMouseUp:f,onMouseLeave:m},resetView:g}}function wb({x:e,y:n,value:t}){return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"fx-damage-number",style:{left:e,top:n},children:["-",t]}),r.jsx("style",{children:Sb})]})}const Sb=`
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
`;function Cb({x:e,y:n,variant:t}){return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:`fx-impact fx-impact--${t}`,style:{left:e,top:n},children:[t==="melee"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"fx-impact__slash fx-impact__slash--1"}),r.jsx("div",{className:"fx-impact__slash fx-impact__slash--2"})]}),t==="ranged"&&r.jsx("div",{className:"fx-impact__beam"}),t==="charge"&&r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"fx-impact__ring fx-impact__ring--1"}),r.jsx("div",{className:"fx-impact__ring fx-impact__ring--2"})]})]}),r.jsx("style",{children:Nb})]})}const Nb=`
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
`;function Tb({x:e,y:n}){return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"fx-explosion",style:{left:e,top:n},children:[r.jsx("div",{className:"fx-explosion__flash"}),r.jsx("div",{className:"fx-explosion__ring fx-explosion__ring--1"}),r.jsx("div",{className:"fx-explosion__ring fx-explosion__ring--2"}),r.jsx("div",{className:"fx-explosion__ring fx-explosion__ring--3"}),Array.from({length:8}).map((t,a)=>r.jsx("div",{className:"fx-explosion__particle",style:{"--angle":`${a*45}deg`,"--delay":`${a*20}ms`,"--dist":`${30+Math.random()*20}px`}},a))]}),r.jsx("style",{children:Mb})]})}const Mb=`
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
`;function Eb({defId:e,isAuxiliary:n,playerId:t}){const a=te(e);if(!a)return null;const o=t==="player1"?"P1":"P2",s=t==="player1"?"var(--color-accent)":"#ff00c8";return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"fx-card-reveal",style:{position:"fixed",bottom:"80px",left:"50%",transform:"translateX(-50%)",zIndex:800,pointerEvents:"none"},children:[r.jsxs("div",{className:"fx-card-reveal__label",style:{color:s},children:[o," ",n?"抽到辅助卡":"抽牌"]}),r.jsx("div",{className:"fx-card-reveal__card",style:{borderColor:s},children:r.jsxs("div",{className:"fx-card-reveal__inner",children:[r.jsx("div",{className:"fx-card-reveal__back",children:r.jsx("img",{src:"/assets/ui/card-back.jpg",alt:"card back"})}),r.jsx("div",{className:"fx-card-reveal__front",children:r.jsx("img",{src:`/assets/${a.frontImageId}`,alt:a.nameCn})})]})}),r.jsxs("div",{className:"fx-card-reveal__name",style:{color:s},children:[a.nameCn,n&&r.jsx("span",{className:"fx-card-reveal__aux-badge",children:"辅助"})]})]}),r.jsx("style",{children:Db})]})}const Db=`
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
`;function $b({defId:e,isBomb:n,index:t,total:a}){const o=te(e);if(!o)return null;const s=n?"fx-card-destroy--bomb":"";return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:`fx-card-destroy ${s}`,style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:810,pointerEvents:"none"},children:[r.jsxs("div",{className:"fx-card-destroy__card",children:[r.jsx("img",{src:`/assets/${o.frontImageId}`,alt:o.nameCn}),r.jsx("div",{className:"fx-card-destroy__flash"})]}),r.jsxs("div",{className:"fx-card-destroy__label",children:[o.nameCn," 被摧毁",n&&r.jsx("span",{className:"fx-card-destroy__bomb-badge",children:"💣 诱爆"})]}),r.jsxs("div",{className:"fx-card-destroy__counter",children:[t+1," / ",a]})]}),r.jsx("style",{children:Ab})]})}const Ab=`
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
`,bl=62,xi=Math.round(bl*(1042/756)),tu=68,zb=6,au=140;function Pb({p1Cards:e,p2Cards:n}){const[t,a]=I.useState("init"),[o,s]=I.useState(null);return I.useEffect(()=>{const i=document.querySelector(".unit-token-abs--p1"),l=document.querySelector(".unit-token-abs--p2"),d=i==null?void 0:i.getBoundingClientRect(),u=l==null?void 0:l.getBoundingClientRect();s({p1:d?{x:d.left+d.width/2,y:d.top+d.height/2}:{x:window.innerWidth*.3,y:window.innerHeight*.55},p2:u?{x:u.left+u.width/2,y:u.top+u.height/2}:{x:window.innerWidth*.7,y:window.innerHeight*.45}});const f=setTimeout(()=>a("fan"),50),m=setTimeout(()=>a("hold"),650),g=setTimeout(()=>a("cluster"),1650),h=setTimeout(()=>a("exit"),2e3);return()=>{[f,m,g,h].forEach(clearTimeout)}},[]),o?zr.createPortal(r.jsxs("div",{style:{position:"fixed",inset:0,zIndex:900,pointerEvents:"none"},children:[r.jsx(ru,{cards:e,origin:o.p1,phase:t,color:"#00f0ff",label:"P1"}),r.jsx(ru,{cards:n,origin:o.p2,phase:t,color:"#ff8844",label:"P2"})]}),document.body):null}function ru({cards:e,origin:n,phase:t,color:a,label:o}){if(e.length===0)return null;const s=e.length,l=(s-1)*tu>window.innerWidth*.7?Math.floor(window.innerWidth*.7/Math.max(s-1,1)):tu,d=t==="hold"||t==="cluster";return r.jsxs("div",{style:{position:"fixed",left:n.x,top:n.y},children:[r.jsxs("div",{style:{position:"absolute",top:-(au+xi/2+28),left:0,transform:"translateX(-50%)",color:a,fontSize:"0.78rem",fontWeight:"bold",whiteSpace:"nowrap",textShadow:`0 0 10px ${a}, 1px 1px 3px #000`,opacity:d?1:0,transition:"opacity 250ms",letterSpacing:"0.06em"},children:[o,"  弃牌 ×",s]}),e.map((u,f)=>{const m=te(u.defId),g=(s-1)/2,h=f-g,x=h*l,p=-au,_=h*zb;let y,b,v,j,C;switch(t){case"init":y=0,b=0,v=0,j=.15,C=0;break;case"fan":case"hold":y=x,b=p,v=_,j=1,C=1;break;case"cluster":y=0,b=p,v=0,j=.85,C=1;break;case"exit":default:y=0,b=p-520,v=0,j=.2,C=0;break}const M=f*28;let S;switch(t){case"fan":S=[`transform 480ms cubic-bezier(0.34,1.56,0.64,1) ${M}ms`,`opacity   300ms ease-out ${M}ms`].join(", ");break;case"hold":S="none";break;case"cluster":S="transform 320ms ease-in, opacity 150ms ease-in";break;case"exit":S="transform 450ms ease-in, opacity 380ms ease-in 60ms";break;default:S="none"}return r.jsx("div",{style:{position:"absolute",width:bl,height:xi,left:-bl/2,top:-xi/2,borderRadius:5,overflow:"hidden",border:`1px solid ${a}55`,boxShadow:`0 6px 20px rgba(0,0,0,0.7), 0 0 8px ${a}44`,zIndex:f,transform:`translate(${y}px, ${b}px) rotate(${v}deg) scale(${j})`,opacity:C,transition:S,willChange:"transform, opacity"},children:m?r.jsx("img",{src:`/assets/${m.frontImageId}`,alt:m.nameCn,style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1}):r.jsx("div",{style:{width:"100%",height:"100%",background:"#222"}})},u.instanceId)})]})}const vl=62,bi=Math.round(vl*(1042/756)),ou=52,Vb=5,su=120;function Rb({playerId:e,count:n}){const[t,a]=I.useState("init"),[o,s]=I.useState(null),[i,l]=I.useState(null);if(I.useEffect(()=>{const u=e==="player1"?".mp__deck--p1":".mp__deck--p2",f=document.querySelector(u),m=document.querySelector(e==="player1"?".unit-token-abs--p1":".unit-token-abs--p2"),g=f==null?void 0:f.getBoundingClientRect(),h=m==null?void 0:m.getBoundingClientRect();s(g?{x:g.left+g.width/2,y:g.top+g.height/2}:{x:window.innerWidth*.5,y:window.innerHeight*.85}),l(h?{x:h.left+h.width/2,y:h.top+h.height/2}:{x:e==="player1"?window.innerWidth*.3:window.innerWidth*.7,y:e==="player1"?window.innerHeight*.55:window.innerHeight*.45});const x=setTimeout(()=>a("spread"),50),p=setTimeout(()=>a("hold"),600),_=setTimeout(()=>a("cluster"),900),y=setTimeout(()=>a("fly"),1200);return()=>{[x,p,_,y].forEach(clearTimeout)}},[e]),!o||!i)return null;const d=e==="player1"?"#00f0ff":"#ff8844";return zr.createPortal(r.jsx("div",{style:{position:"fixed",inset:0,zIndex:900,pointerEvents:"none"},children:r.jsx(Lb,{count:n,deckPos:o,mechaPos:i,phase:t,color:d,playerId:e})}),document.body)}function Lb({count:e,deckPos:n,mechaPos:t,phase:a,color:o,playerId:s}){if(e===0)return null;const i=e,d=(i-1)*ou>window.innerWidth*.6?Math.floor(window.innerWidth*.6/Math.max(i-1,1)):ou,u=t.x-n.x,f=t.y-n.y,m=a==="hold"||a==="cluster",g=`${s==="player1"?"P1":"P2"} 抽牌 ×${i}`;return r.jsxs("div",{style:{position:"fixed",left:n.x,top:n.y},children:[r.jsx("div",{style:{position:"absolute",top:-(su+bi/2+28),left:0,transform:"translateX(-50%)",color:o,fontSize:"0.78rem",fontWeight:"bold",whiteSpace:"nowrap",textShadow:`0 0 10px ${o}, 1px 1px 3px #000`,opacity:m?1:0,transition:"opacity 250ms",letterSpacing:"0.06em"},children:g}),Array.from({length:i},(h,x)=>{const p=(i-1)/2,_=x-p,y=_*d,b=-su,v=_*Vb;let j,C,M,S,E;switch(a){case"init":j=0,C=0,M=0,S=.15,E=0;break;case"spread":case"hold":j=y,C=b,M=v,S=1,E=1;break;case"cluster":j=0,C=b,M=0,S=.85,E=1;break;case"fly":default:j=u,C=f,M=0,S=.2,E=0;break}const z=x*24;let N;switch(a){case"spread":N=[`transform 480ms cubic-bezier(0.34,1.56,0.64,1) ${z}ms`,`opacity   300ms ease-out ${z}ms`].join(", ");break;case"hold":N="none";break;case"cluster":N="transform 280ms ease-in, opacity 150ms ease-in";break;case"fly":N="transform 400ms cubic-bezier(0.4,0,1,1), opacity 300ms ease-in 80ms";break;default:N="none"}return r.jsx("div",{style:{position:"absolute",width:vl,height:bi,left:-vl/2,top:-bi/2,borderRadius:5,overflow:"hidden",border:`1px solid ${o}55`,boxShadow:`0 6px 20px rgba(0,0,0,0.7), 0 0 8px ${o}44`,zIndex:x,transform:`translate(${j}px, ${C}px) rotate(${M}deg) scale(${S})`,opacity:E,transition:N,willChange:"transform, opacity"},children:r.jsx("img",{src:"/assets/ui/card-back.jpg",alt:"card back",style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1})},x)})]})}const yl=56,_l=Math.round(yl*(1042/756));function Ob({playerId:e}){const[n,t]=I.useState("face-up"),[a,o]=I.useState(null);if(I.useEffect(()=>{const i=e==="player1"?".mp__deck--p1":".mp__deck--p2",l=document.querySelector(i),d=l==null?void 0:l.getBoundingClientRect();o(d?{x:d.left+d.width/2,y:d.top+d.height/2}:{x:window.innerWidth*.5,y:window.innerHeight*.85});const u=setTimeout(()=>t("flip"),150),f=setTimeout(()=>t("face-down"),500),m=setTimeout(()=>t("fade"),650);return()=>{[u,f,m].forEach(clearTimeout)}},[e]),!a)return null;const s=e==="player1"?"#00f0ff":"#ff8844";return zr.createPortal(r.jsxs("div",{style:{position:"fixed",inset:0,zIndex:900,pointerEvents:"none"},children:[r.jsxs("div",{style:{position:"fixed",left:a.x,top:a.y},children:[[0,1,2].map(i=>r.jsx(Kb,{index:i,phase:n,color:s},i)),r.jsx("div",{style:{position:"absolute",top:-(_l/2+32),left:0,transform:"translateX(-50%)",color:s,fontSize:"0.78rem",fontWeight:"bold",whiteSpace:"nowrap",textShadow:`0 0 10px ${s}, 1px 1px 3px #000`,letterSpacing:"0.06em",opacity:n==="face-up"||n==="flip"||n==="face-down"?1:0,transition:"opacity 200ms"},children:"♻️ 重洗牌组"})]}),r.jsx("style",{children:Jb})]}),document.body)}function Kb({index:e,phase:n,color:t}){const a=(e-1)*3,o=(e-1)*2;let s;switch(n){case"face-up":case"flip":case"face-down":s=1;break;case"fade":s=0;break}const i=n==="flip"?"reshuffle-card--flipping":n==="face-down"||n==="fade"?"reshuffle-card--flipped":"";return r.jsxs("div",{className:`reshuffle-card ${i}`,style:{position:"absolute",width:yl,height:_l,left:-yl/2+a,top:-_l/2+o,perspective:600,opacity:s,transition:"opacity 200ms ease-in",willChange:"opacity",zIndex:e},children:[r.jsx("div",{className:"reshuffle-card__face reshuffle-card__front",style:{background:t+"33",border:`2px solid ${t}88`,borderRadius:5,boxShadow:`0 0 12px ${t}55`}}),r.jsx("div",{className:"reshuffle-card__face reshuffle-card__back",style:{borderRadius:5,overflow:"hidden",border:"1px solid #ffffff44",boxShadow:"0 4px 12px rgba(0,0,0,0.6)"},children:r.jsx("img",{src:"/assets/ui/card-back.jpg",alt:"card back",style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1})})]})}const Jb=`
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
`,dn=68;function Bb(){const{currentEvent:e}=Ea();return e?r.jsxs("div",{className:"effects-layer",style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:20},children:[e.type==="damage_number"&&r.jsx(wb,{x:e.position.col*dn+dn/2,y:e.position.row*dn+dn/2,value:e.value},`dmg-${Date.now()}`),(e.type==="ranged_hit"||e.type==="melee_hit"||e.type==="charge_hit")&&r.jsx(Cb,{x:e.targetPos.col*dn+dn/2,y:e.targetPos.row*dn+dn/2,variant:e.type==="ranged_hit"?"ranged":e.type==="melee_hit"?"melee":"charge"},`hit-${Date.now()}`),e.type==="mine_explode"&&r.jsx(Tb,{x:e.position.col*dn+dn/2,y:e.position.row*dn+dn/2},`exp-${Date.now()}`),e.type==="card_draw"&&r.jsx(Eb,{defId:e.defId,isAuxiliary:e.isAuxiliary,playerId:e.playerId},`draw-${e.card.instanceId}`),e.type==="card_destroy"&&r.jsx($b,{defId:e.defId,isBomb:e.isBomb,index:e.index,total:e.total},`destroy-${e.card.instanceId}`),e.type==="cleanup_discard"&&r.jsx(Pb,{p1Cards:e.p1Cards,p2Cards:e.p2Cards},`cleanup-${Date.now()}`),e.type==="batch_card_draw"&&r.jsx(Rb,{playerId:e.playerId,count:e.count},`draw-${e.playerId}-${Date.now()}`),e.type==="deck_reshuffle"&&r.jsx(Ob,{playerId:e.playerId},`reshuffle-${e.playerId}-${Date.now()}`)]}):null}function Ca(){const{state:e}=Ce(),{map:n,mines:t}=e,{currentEvent:a,animatedPositions:o}=Ea(),{transform:s,viewportRef:i,handlers:l,resetView:d}=jb(.9),u=(a==null?void 0:a.type)==="screen_shake"?`board-transform board-shake board-shake--${a.intensity}`:"board-transform";return r.jsxs("div",{ref:i,className:"board-viewport",...l,style:{cursor:"grab"},children:[r.jsxs("div",{className:u,style:{transform:`translate(${s.x}px, ${s.y}px) scale(${s.scale})`,transformOrigin:"top left"},children:[r.jsx("div",{className:"game-board",style:{gridTemplateColumns:`repeat(${n.width}, var(--cell-size))`,gridTemplateRows:`repeat(${n.height}, var(--cell-size))`},children:n.cells.flatMap((f,m)=>f.map((g,h)=>r.jsx(Fb,{cell:g,row:m,col:h,mines:t},`${m}-${h}`)))}),e.playerIds.map((f,m)=>{const g=e.players[f];return!g||g.isDefeated?null:r.jsx(Gb,{player:g,side:`p${m+1}`,playerIndex:m,color:ht(e,f),animatedPos:o[f]??null},f)}),r.jsx(Bb,{})]}),r.jsx("button",{className:"board-reset-btn",onClick:d,title:"重置视角",children:"⟳"})]})}function Fb({cell:e,row:n,col:t,mines:a}){const o=bc(e),s=e.terrain==="highland"&&e.elevation>0?`+${e.elevation}`:null,i=a.filter(l=>l.position.row===n&&l.position.col===t);return r.jsxs("div",{className:`board-cell board-cell--${e.terrain}`,style:{backgroundImage:`url("${o}")`},"data-row":n,"data-col":t,children:[s&&r.jsx("span",{className:"board-cell__elev",children:s}),i.map((l,d)=>r.jsx(Hb,{mine:l,offset:d*4},l.id))]})}function Gb({player:e,side:n,playerIndex:t,color:a,animatedPos:o}){const s=q.find(m=>m.id===e.unitId);if(!s)return null;const i=(o==null?void 0:o.pos)??e.position,l=(o==null?void 0:o.facing)??e.facing,d={N:0,E:90,S:180,W:270}[l]??0,u=(()=>{switch(l){case"N":return{top:0,left:"50%",translate:"-50% 0"};case"S":return{bottom:0,left:"50%",translate:"-50% 0"};case"E":return{right:0,top:"50%",translate:"0 -50%"};case"W":return{left:0,top:"50%",translate:"0 -50%"};default:return{top:0,left:"50%",translate:"-50% 0"}}})(),f=`P${t+1}`;return r.jsxs("div",{className:`unit-token-abs unit-token-abs--${n}`,style:{left:`calc(${i.col} * var(--cell-size))`,top:`calc(${i.row} * var(--cell-size))`,width:"var(--cell-size)",height:"var(--cell-size)","--token-color":a},children:[r.jsx("div",{className:"unit-token-abs__label",style:{borderColor:a,backgroundColor:a+"33"},title:`${f} ${s.nameCn}`,children:f}),r.jsx("span",{className:"unit-token-abs__facing-arrow",style:{...u,transform:`rotate(${d}deg)`,color:a},title:`机头朝向：${e.facing}`,children:"▲"})]})}function Hb({mine:e,offset:n}){const t=e.kind==="real"?"隐藏机雷指示物":"隐藏替身雷指示物";return r.jsx("div",{className:"mine-token",style:{transform:`translate(${n}px, ${n}px)`},title:t,children:r.jsx("span",{className:"mine-token__icon",children:"◆"})})}const Ub=250,Wb=480,Zb=2e3,ss=252,wo=Math.round(ss*(1042/756)),Gt=12;function Ot(){const[e,n]=I.useState(null),t=I.useRef(null),a=I.useRef(null),o=I.useRef(null),s=I.useRef({x:0,y:0}),i=I.useRef(!1),l=()=>{t.current&&(clearTimeout(t.current),t.current=null),a.current&&(clearTimeout(a.current),a.current=null),o.current&&(clearTimeout(o.current),o.current=null)},d=I.useCallback(()=>{l(),n(null)},[]),u=I.useCallback(f=>({onMouseEnter:m=>{s.current={x:m.clientX,y:m.clientY},l(),t.current=setTimeout(()=>{n({src:f,x:s.current.x,y:s.current.y})},Ub)},onMouseMove:m=>{s.current={x:m.clientX,y:m.clientY},n(g=>g&&{...g,x:m.clientX,y:m.clientY})},onMouseLeave:()=>d(),onTouchStart:m=>{const g=m.touches[0];i.current=!1,l(),a.current=setTimeout(()=>{i.current||(n({src:f,x:g.clientX,y:g.clientY}),o.current=setTimeout(()=>n(null),Zb))},Wb)},onTouchMove:()=>{i.current=!0,d()},onTouchEnd:()=>{l()}}),[d]);return{zoom:e,hide:d,getZoomHandlers:u}}function Yb(e,n){const t=window.innerWidth,a=window.innerHeight;let o=e+18;o+ss+Gt>t&&(o=e-ss-18);let s=n-wo/2;return s<Gt&&(s=Gt),s+wo>a-Gt&&(s=a-wo-Gt),{left:Math.max(Gt,o),top:s}}function Kt({zoom:e}){if(!e)return null;const{left:n,top:t}=Yb(e.x,e.y);return zr.createPortal(r.jsxs("div",{style:{position:"fixed",left:n,top:t,width:ss,height:wo,zIndex:99999,pointerEvents:"none",borderRadius:8,overflow:"hidden",boxShadow:"0 12px 40px rgba(0,0,0,0.75), 0 0 0 2px rgba(255,255,255,0.15)",background:"#111",animation:"card-zoom-in 0.12s ease-out both"},children:[r.jsx("img",{src:e.src,alt:"",style:{width:"100%",height:"100%",objectFit:"fill",display:"block"},draggable:!1}),r.jsx("style",{children:Xb})]}),document.body)}const Xb=`
@keyframes card-zoom-in {
  from { opacity: 0; transform: scale(0.88); }
  to   { opacity: 1; transform: scale(1); }
}
`;function is(e){return`P${e.replace("player","")}`}function Qb(e,n){const t=Vt[n]??[];return[...e].sort((a,o)=>{const s=t.findIndex(l=>l.id===a.defId),i=t.findIndex(l=>l.id===o.defId);return s-i})}function qb(e,n,t,a,o,s){function i(h){if(!h)return null;const x=[...e.hand,...e.auxiliary].find(p=>p.instanceId===h);return x?o(x.defId)??null:null}const l=i(t),d=i(a),u=gn(e,o,"movement"),f=e.position,m=[];let g=[f];if(l){if(l.actionType==="movement"){const h=(l.movementValue??0)+(u.wheel?2:0);if(h>0){const x=Ds(s,f,h,[n],u,e.facing);g=x.map(p=>p.pos),m.push(...x.map(p=>({pos:p.pos,cls:"preview-move-s1"})))}}else if(l.actionType==="ranged"){const h=l.rangeMin??1,x=l.rangeMax??6;for(let p=0;p<s.height;p++)for(let _=0;_<s.width;_++)Ke(f,{row:p,col:_})>=h&&Ke(f,{row:p,col:_})<=x&&m.push({pos:{row:p,col:_},cls:"preview-atk-s1"})}else if(l.actionType==="melee"||l.actionType==="charge")for(const[h,x]of[[-1,0],[1,0],[0,-1],[0,1]]){const p=f.row+h,_=f.col+x;p>=0&&p<s.height&&_>=0&&_<s.width&&m.push({pos:{row:p,col:_},cls:"preview-atk-s1"})}}if(d){const h=new Map,x=p=>`${p.row},${p.col}`;if(d.actionType==="movement"){const p=(d.movementValue??0)+(u.wheel?2:0);if(p>0){for(const _ of g)zh(s,_,p,[n],u).forEach(y=>h.set(x(y.pos),y.pos));h.forEach(_=>m.push({pos:_,cls:"preview-move-s2"}))}}else if(d.actionType==="ranged"){const p=d.rangeMin??1,_=d.rangeMax??6;for(const y of g)for(let b=0;b<s.height;b++)for(let v=0;v<s.width;v++){const j=Ke(y,{row:b,col:v});j>=p&&j<=_&&h.set(x({row:b,col:v}),{row:b,col:v})}h.forEach(y=>m.push({pos:y,cls:"preview-atk-s2"}))}else if(d.actionType==="melee"||d.actionType==="charge"){for(const p of g)for(const[_,y]of[[-1,0],[1,0],[0,-1],[0,1]]){const b=p.row+_,v=p.col+y;b>=0&&b<s.height&&v>=0&&v<s.width&&h.set(x({row:b,col:v}),{row:b,col:v})}h.forEach(p=>m.push({pos:p,cls:"preview-atk-s2"}))}}return m}const ev=["board-cell--preview-move-s1","board-cell--preview-move-s2","board-cell--preview-atk-s1","board-cell--preview-atk-s2"];function iu(){document.querySelectorAll(".board-cell").forEach(e=>ev.forEach(n=>e.classList.remove(n)))}const nv=[{id:"hand",label:"手牌",icon:"🃏"},{id:"auxiliary",label:"辅助区",icon:"⚙️"},{id:"discard",label:"弃牌区",icon:"♻️"},{id:"destroyed",label:"已破坏",icon:"💀"}];function ls(){const{state:e,dispatch:n,aiConfig:t}=Ce(),{isAnimating:a}=Ea(),o=()=>n({type:"ADVANCE_PLOT_STEP"});if(I.useEffect(()=>{if(e.phase!=="plotting"||a)return;const i=e.plottingStep;if(!i||!i.startsWith("transition_to_"))return;const l=i.replace("transition_to_","");if(!Ae(t,l))return;const d=setTimeout(o,400);return()=>clearTimeout(d)},[e.plottingStep,e.phase,a,t]),e.phase!=="plotting"||a)return null;const s=e.plottingStep;if(s&&s.startsWith("transition_to_")){const i=s.replace("transition_to_","");return Ae(t,i)?null:r.jsx(ov,{onContinue:o,playerLabel:is(i),hint:"请确认对方不在旁后开始布局"})}return null}function ca(){const{state:e,dispatch:n,getCard:t,aiConfig:a}=Ce(),{plottingStep:o}=e;if(e.phase!=="plotting"||o==="complete"||o===null||o.startsWith("transition_to_"))return null;if(o==="waiting_online")return r.jsx(tv,{});const s=o,i=Ae(a,s),l=Pr(a,s);return r.jsx(av,{activePlottingPlayerId:s,getCard:t,isAI:i,aiDifficulty:l,onConfirm:(d,u)=>{d&&n({type:"PLOT_CARD",playerId:s,seg:1,instanceId:d}),u&&n({type:"PLOT_CARD",playerId:s,seg:2,instanceId:u}),n({type:"CONFIRM_PLOT",playerId:s})}},s)}function tv(){const{state:e,plottingStatus:n}=Ce(),t=e.playerIds.filter(a=>!(n!=null&&n.confirmed.includes(a))&&!e.players[a].isDefeated);return r.jsxs("div",{className:"plot-content",style:{justifyContent:"center",alignItems:"center",textAlign:"center",padding:"10%"},children:[r.jsx("div",{style:{fontSize:"3.5rem",marginBottom:"20px"},children:"⏳"}),r.jsx("h2",{style:{color:"var(--color-text-light)",fontFamily:"var(--font-mono)"},children:"等待其他玩家布局"}),t.length>0?r.jsxs("div",{style:{marginTop:"30px",fontSize:"0.9rem",color:"var(--color-text-muted)"},children:["未确认玩家：",r.jsx("div",{style:{display:"flex",gap:"8px",justifyContent:"center",marginTop:"14px",flexWrap:"wrap"},children:t.map(a=>r.jsx("span",{style:{background:"var(--color-bg-card)",padding:"6px 12px",borderRadius:"4px",border:`1px solid ${ht(e,a)}`,color:ht(e,a),fontFamily:"var(--font-mono)",fontWeight:"bold"},children:is(a)},a))})]}):r.jsx("div",{style:{marginTop:"30px",fontSize:"0.95rem",color:"var(--color-text-muted)",fontFamily:"var(--font-mono)"},children:"等待服务器响应..."})]})}function av({activePlottingPlayerId:e,getCard:n,onConfirm:t,isAI:a=!1,aiDifficulty:o="hard"}){const{state:s,dispatch:i,exposureMode:l}=Ce(),[d,u]=I.useState(null),[f,m]=I.useState(null),[g,h]=I.useState("hand"),[x,p]=I.useState(e);function _(A){for(const L of A)i({type:"ADD_LOG",message:L})}const y=x===e||l,b=s.players[x],v=s.players[e],j=A=>ht(s,A),C=j(e),M=(()=>{const A=s.playerIds.filter(k=>k!==e&&s.teams[k]!==s.teams[e]&&!s.players[k].isDefeated);if(A.length===0)return null;const L=v.position;let W=A[0],V=Math.max(Math.abs(s.players[A[0]].position.row-L.row),Math.abs(s.players[A[0]].position.col-L.col));for(let k=1;k<A.length;k++){const $=s.players[A[k]].position,J=Math.max(Math.abs($.row-L.row),Math.abs($.col-L.col));J<V&&(W=A[k],V=J)}return s.players[W]})();I.useEffect(()=>{h(x===e?"hand":"auxiliary")},[x,e]),I.useEffect(()=>{const A=(M==null?void 0:M.position)??{row:0,col:0},L=qb(v,A,d,f,n,s.map);return iu(),L.forEach(({pos:W,cls:V})=>{const k=document.querySelector(`.board-cell[data-row="${W.row}"][data-col="${W.col}"]`);k&&k.classList.add(`board-cell--${V}`)}),iu},[d,f]),I.useEffect(()=>{if(!a)return;const A=s.playerIds.filter(V=>V!==e&&s.teams[V]!==s.teams[e]&&!s.players[V].isDefeated).map(V=>s.players[V]),L=A.length>0?A:[v],W=setTimeout(()=>{const{seg1:V,seg2:k,reasoning:$}=Dx(v,L,n,o,s.map);_($),V&&k?t(V,k):t(V||null,null)},800);return()=>clearTimeout(W)},[a]);function S(A){if(N<=1){if(d===A){u(null),m(A);return}if(f===A){m(null);return}u(A);return}if(d===A){u(null);return}if(f===A){m(null);return}if(!d){u(A);return}if(!f){m(A);return}m(A)}function E(A){return A==="deck"?b.deck.filter(L=>!L.destroyed).length:A==="hand"?b.hand.filter(L=>!L.destroyed).length:A==="auxiliary"?b.auxiliary.length:A==="discard"?b.discard.length:A==="destroyed"?b.destroyedCards.length:0}function z(A){return A==="deck"?y?Qb(b.deck,b.unitId):[]:A==="hand"?b.hand.filter(L=>!L.destroyed):A==="auxiliary"?b.auxiliary:A==="discard"?b.discard:A==="destroyed"?b.destroyedCards:[]}const N=v.hand.filter(A=>!A.destroyed).length,R=N===0?!0:N===1?d!==null||f!==null:d!==null&&f!==null,D=y,K=g==="deck"&&y;return r.jsxs("div",{className:"plot-content",children:[r.jsxs("div",{className:"plot-panel__header",children:[r.jsx("span",{className:"plot-panel__player",style:{color:C},children:is(e)}),r.jsx("span",{className:"plot-panel__prompt",children:"布局中"})]}),r.jsx("div",{className:"plot-tab-row",children:s.playerIds.map(A=>{const L=x===A,W=A===e;return r.jsxs("button",{className:`plot-tab${L?" plot-tab--active":""}`,style:L?{color:j(A),borderBottomColor:j(A)}:void 0,onClick:()=>p(A),children:[is(A),W&&!L&&r.jsx("span",{className:"plot-tab__dot",style:{background:j(A)}})]},A)})}),x===e?r.jsxs("div",{className:"plot-slots",children:[r.jsx(lu,{label:"主要阶段 1",cardInstanceId:d,getCard:n,hand:v.hand,onClear:()=>u(null),color:C}),r.jsx(lu,{label:"主要阶段 2",cardInstanceId:f,getCard:n,hand:v.hand,onClear:()=>m(null),color:C})]}):l?r.jsxs("div",{className:"plot-slots",children:[r.jsx(cu,{label:"主要阶段 1",card:b.plotSeg1,getCard:n}),r.jsx(cu,{label:"主要阶段 2",card:b.plotSeg2,getCard:n})]}):r.jsxs("div",{className:"plot-slots",children:[r.jsxs("div",{className:"plot-slot-locked",children:[r.jsx("span",{children:"🔒"}),r.jsx("span",{children:"主要阶段 1"}),r.jsx("span",{className:"plot-slot-locked__hint",children:"对方已锁定"})]}),r.jsxs("div",{className:"plot-slot-locked",children:[r.jsx("span",{children:"🔒"}),r.jsx("span",{children:"主要阶段 2"}),r.jsx("span",{className:"plot-slot-locked__hint",children:"对方已锁定"})]})]}),r.jsxs("div",{className:"plot-zone-tabs",children:[r.jsxs("button",{className:`plot-zone-tab${K?" plot-zone-tab--active":""}`,style:K?{borderColor:C}:void 0,onClick:D?()=>h("deck"):void 0,disabled:!D,title:D?"卡组：按资料集顺序查看":"对方卡组不可查看",children:[r.jsx("span",{className:"plot-zone-tab__icon",children:D?"🂠":"🔒"}),r.jsx("span",{className:"plot-zone-tab__label",children:"卡组"}),r.jsx("span",{className:"plot-zone-tab__count",children:b.deck.filter(A=>!A.destroyed).length})]}),nv.map(({id:A,label:L,icon:W})=>{const V=g===A;return r.jsxs("button",{className:`plot-zone-tab${V?" plot-zone-tab--active":""}`,style:V?{borderColor:y?C:j(x)}:void 0,onClick:()=>h(A),title:`${L}：点击查看`,children:[r.jsx("span",{className:"plot-zone-tab__icon",children:W}),r.jsx("span",{className:"plot-zone-tab__label",children:L}),r.jsx("span",{className:"plot-zone-tab__count",children:E(A)})]},A)})]}),r.jsx("div",{className:"plot-zone-view",children:g==="hand"&&!y?r.jsxs("div",{className:"plot-zone-private",children:["🔒 对方手牌不可查看",r.jsx("br",{}),r.jsxs("span",{className:"plot-zone-private__count",children:["共 ",E("hand")," 张"]})]}):z(g).length===0?r.jsx("p",{className:"plot-zone-empty",children:"（此区域为空）"}):r.jsx("div",{className:"plot-card-grid",children:z(g).map(A=>{const L=n(A.defId),W=g==="hand"&&x===e,V=A.instanceId===d,k=A.instanceId===f;return r.jsx(rv,{card:A,def:L,isSelected:V||k,segLabel:V?"①":k?"②":null,onClick:W?()=>S(A.instanceId):void 0},A.instanceId)})})}),r.jsx("div",{className:"plot-footer",children:r.jsx("button",{className:"plot-confirm-btn",disabled:!R,style:R?{borderColor:C,color:C}:void 0,onClick:()=>{R&&t(d,f)},children:R?N===0?"确定布局（无手牌可部署）":N===1&&(!d||!f)?`确定布局（仅部署主要阶段 ${d?"1":"2"}）`:"确定布局":`请选择主要阶段 ${d?"2":"1"} 的卡牌`})}),r.jsx("style",{children:sv})]})}function lu({label:e,cardInstanceId:n,getCard:t,hand:a,onClear:o,color:s}){const i=a.find(g=>g.instanceId===n)??null,l=i?t(i.defId):null,{zoom:d,hide:u,getZoomHandlers:f}=Ot(),m=l?`/assets/${l.frontImageId}`:"";return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"plot-slot",children:[r.jsx("div",{className:"plot-slot__label",children:e}),l&&i?r.jsxs("div",{className:"plot-slot__card",onClick:()=>{u(),o()},title:"点击取消选择",style:{borderColor:s,boxShadow:`0 0 8px ${s}55`},...f(m),children:[r.jsx("img",{src:m,alt:l.nameCn,className:"plot-slot__img",onError:g=>{g.target.style.opacity="0.4"}}),r.jsx("span",{className:"plot-slot__name",children:l.nameCn}),r.jsx("span",{className:"plot-slot__clear",children:"✕"})]}):r.jsx("div",{className:"plot-slot__empty",children:"— 未选择 —"})]}),r.jsx(Kt,{zoom:d})]})}function cu({label:e,card:n,getCard:t}){const a=n?t(n.defId):null,o=a?`/assets/${a.frontImageId}`:"";return r.jsxs("div",{className:"plot-slot",children:[r.jsx("div",{className:"plot-slot__label",children:e}),a&&n?r.jsxs("div",{className:"plot-slot__card",style:{borderColor:"#888",cursor:"default"},children:[r.jsx("img",{src:o,alt:a.nameCn,className:"plot-slot__img",onError:s=>{s.target.style.opacity="0.4"}}),r.jsx("span",{className:"plot-slot__name",children:a.nameCn})]}):r.jsx("div",{className:"plot-slot__empty",children:"— 未布局 —"})]})}function rv({card:e,def:n,isSelected:t,segLabel:a,onClick:o}){const{zoom:s,getZoomHandlers:i}=Ot(),l=n?`/assets/${n.frontImageId}`:"";return r.jsxs(r.Fragment,{children:[r.jsxs("button",{className:`plot-card${t?" plot-card--selected":""}${o?"":" plot-card--readonly"}`,onClick:o,disabled:!o,title:(n==null?void 0:n.nameCn)??"???",...n?i(l):{},children:[n?r.jsxs(r.Fragment,{children:[r.jsx("img",{src:l,alt:n.nameCn,className:"plot-card__img",onError:d=>{d.target.style.opacity="0.3"}}),r.jsx("span",{className:"plot-card__name",children:n.nameCn}),n.damage!==void 0&&r.jsxs("span",{className:"plot-card__stat",children:["💥",n.damage]}),n.movementValue!==void 0&&r.jsxs("span",{className:"plot-card__stat",children:["🏃",n.movementValue]}),n.rangeMin!==void 0&&r.jsxs("span",{className:"plot-card__stat",children:["🎯",n.rangeMin,"–",n.rangeMax]})]}):r.jsx("span",{className:"plot-card__name",children:"???"}),a&&r.jsx("span",{className:"plot-card__badge",children:a})]}),r.jsx(Kt,{zoom:s})]})}function ov({onContinue:e,playerLabel:n,hint:t}){return r.jsxs("div",{className:"pass-device-screen",children:[r.jsxs("div",{className:"pass-device-screen__content",children:[r.jsx("div",{className:"pass-device-screen__icon",children:"🤖"}),r.jsx("h2",{className:"pass-device-screen__title",children:"请将设备交给"}),r.jsx("h1",{className:"pass-device-screen__player",children:n}),r.jsx("p",{className:"pass-device-screen__hint",children:t}),r.jsxs("button",{className:"pass-device-screen__btn",onClick:e,children:[n," 已就位，继续"]})]}),r.jsx("style",{children:iv})]})}const sv=`
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
`,iv=`
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
`;function du(e,n){const t=Pm(e,n);if(t.length===0)return n;if(t.length===1)return t[0];const a=e.players[n].position;let o=t[0],s=1/0;for(const i of t){const l=e.players[i].position,d=Math.max(Math.abs(l.row-a.row),Math.abs(l.col-a.col));d<s&&(s=d,o=i)}return o}function lv(e,n){const t=e.players[n],a=[];for(let o=-1;o<=1;o++)for(let s=-1;s<=1;s++){if(o===0&&s===0)continue;const i=t.position.row+o,l=t.position.col+s;if(i<0||i>=e.map.height||l<0||l>=e.map.width)continue;const d={row:i,col:l};e.mines.some(u=>ve(u.position,d))||a.push(d)}return a}function Rr(e,n){for(const t of n)e({type:"ADD_LOG",message:t})}function cs(){const{state:e,getCard:n}=Ce(),{phase:t,currentTiming:a,turnOrder:o,pendingDamage:s,pendingArmorChoice:i}=e;if(t!=="action_seg1"&&t!=="action_seg2")return null;const l=t==="action_seg1"?1:2;return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"action-hud",style:s||i?{display:"none"}:void 0,children:[a==="movement"&&r.jsx(cv,{seg:l,turnOrder:o,getCard:n},`mov-${l}`),(a==="ranged"||a==="melee")&&r.jsx(uv,{seg:l,getCard:n},`combat-${l}-${a}`),a==="special"&&r.jsx(mv,{seg:l,turnOrder:o,getCard:n},`special-${l}`),r.jsx("style",{children:vi})]}),s&&r.jsxs(r.Fragment,{children:[r.jsx(gv,{pendingDamage:s,getCard:n}),r.jsx("style",{children:vi})]}),i&&r.jsxs(r.Fragment,{children:[r.jsx(fv,{pendingArmorChoice:i,getCard:n}),r.jsx("style",{children:vi})]})]})}function cv({seg:e,turnOrder:n,getCard:t}){const{state:a,dispatch:o,aiConfig:s,isOnline:i,localPlayerId:l,currentTurnPlayerId:d}=Ce(),{map:u,pendingDamage:f,pendingArmorChoice:m,playerIds:g}=a,[h,x]=I.useState(new Set),[p,_]=I.useState(null),[y,b]=I.useState([]),[v,j]=I.useState(null),[C,M]=I.useState("N"),S=I.useRef(!1),E=new Map;for(const $ of g){const J=a.players[$],P=q.find(B=>B.id===J.unitId);E.set($,Vh(J,e,t,P.movement))}I.useEffect(()=>{if(!(p!==null||v!==null)&&!S.current&&!(f||m)){if(i&&l){if(d!==l)return;if(E.get(l))_(l);else{const $=a.players[l],J=e===1?$.plotSeg1:$.plotSeg2;if(!J)o({type:"ADD_LOG",message:`  ${Te(l)} 未配置行动卡，跳过`});else{const P=t(J.defId);P&&P.actionType==="movement"&&o({type:"ADD_LOG",message:`  ${Te(l)}【${P.nameCn}】无法发动移动`})}S.current=!0,o({type:"ADVANCE_TIMING"})}return}for(const $ of n)if(!h.has($))if(E.get($)){_($);return}else{const J=a.players[$],P=e===1?J.plotSeg1:J.plotSeg2;if(!P)o({type:"ADD_LOG",message:`  ${Te($)} 未配置行动卡，跳过`});else{const B=t(P.defId);B&&B.actionType==="movement"&&o({type:"ADD_LOG",message:`  ${Te($)}【${B.nameCn}】无法发动移动`})}x(B=>new Set([...B,$]));return}S.current=!0,o({type:"ADVANCE_TIMING"})}},[h,p,v,f,m,d]),I.useEffect(()=>{if(!p){b([]);return}const $=a.players[p],J=g.filter(Q=>Q!==p).map(Q=>a.players[Q].position),P=q.find(Q=>Q.id===$.unitId),B=gn($,t,"movement"),F=ko($,e,t,B)||P.movement,X=Ds(u,$.position,F,J,B,$.facing);b(X.map(Q=>Q.pos))},[p,a.players,u,e]),I.useEffect(()=>{if(!p||i&&l&&p!==l||!Ae(s,p))return;const J=Pr(s,p),P=setTimeout(()=>{const B=$x(a,p,e,t,J);B&&(Rr(o,B.reasoning),o({type:"MOVE_UNIT",playerId:p,to:B.pos,path:B.path,finalFacing:B.finalFacing})),x(F=>new Set([...F,p])),_(null),b([])},800);return()=>clearTimeout(P)},[p]);function z($,J){if(!p||Ae(s,p)||!y.some(F=>ve(F,$)))return;let P=J;if(!P){const F=a.players[p],X=g.filter(de=>de!==p).map(de=>a.players[de].position),Q=q.find(de=>de.id===F.unitId),se=gn(F,t,"movement"),le=ko(F,e,t,se)||Q.movement;P=$s(u,F.position,F.facing,$,le,X,se)}const B=a.players[p];j({playerId:p,to:$,path:(P==null?void 0:P.path)??[]}),M(B.facing),b([]),_(null)}function N(){v&&(o({type:"MOVE_UNIT",playerId:v.playerId,to:v.to,path:v.path,finalFacing:C}),x($=>new Set([...$,v.playerId])),j(null),i&&(S.current=!0,o({type:"ADVANCE_TIMING"})))}if(i&&l&&d&&d!==l&&!p&&!v)return r.jsx("div",{className:"action-hud__panel action-hud__panel--waiting",children:r.jsxs("span",{className:"action-hud__hint",children:["等待 ",Te(d)," 行动中…"]})});const R=n.every($=>!E.get($)||h.has($));if(!i&&R&&p===null&&v===null||i&&S.current&&p===null&&v===null)return null;if(v!==null){const $=Te(v.playerId);return r.jsxs("div",{className:"action-hud__panel",children:[r.jsx("span",{className:"action-hud__mover",children:$}),r.jsx("span",{className:"action-hud__hint",children:"选择移动结束后的机头方向"}),r.jsx(Cc,{currentFacing:C,onSelectFacing:M}),r.jsx("button",{className:"action-hud__skip-btn",onClick:N,children:"确认移动"})]})}const D=p?Ae(s,p):!1,K=p?Te(p):"";if(D)return r.jsxs("div",{className:"action-hud__panel action-hud__panel--ai-thinking",children:[r.jsxs("span",{className:"action-hud__mover",children:[K," (AI)"]}),r.jsx("span",{className:"action-hud__divider",children:"│"}),r.jsx("span",{className:"action-hud__hint",children:"思考中…"})]});const A=p?a.players[p]:null,L=p&&A?gn(A,t,"movement"):null,W=A?q.find($=>$.id===A.unitId):null,V=p&&A&&W?ko(A,e,t,L??void 0)||W.movement:0,k=p?g.filter($=>$!==p).map($=>a.players[$].position):[];return r.jsxs(r.Fragment,{children:[p&&A&&r.jsx(dv,{reachable:y,map:u,from:A.position,fromFacing:A.facing,movementValue:V,blockedPositions:k,aux:L??void 0,onCellClick:z}),r.jsx("div",{className:"action-hud__panel",children:p?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"action-hud__mover",children:K}),r.jsx("span",{className:"action-hud__hint",children:"选择目标格（步数须用尽；点击选择路径）"}),(L==null?void 0:L.vernier)&&r.jsx("span",{className:"action-hud__aux-badge",title:"地形移动消耗-1，高低差消耗-1",children:"⚙ 喷射推进器"}),(L==null?void 0:L.wheel)&&r.jsx("span",{className:"action-hud__aux-badge",title:"移动力+2",children:"⚙ 滑轮"})]}):r.jsx("span",{className:"action-hud__hint",children:"计算移动路径中…"})})]})}function Cc({currentFacing:e,onSelectFacing:n,disabledFacing:t}){const a=[{facing:"N",label:"↑N"},{facing:"E",label:"E→"},{facing:"S",label:"↓S"},{facing:"W",label:"←W"}];return r.jsxs("div",{className:"facing-compass",title:"调整机头朝向",children:[r.jsx("span",{className:"facing-compass__label",children:"机头"}),a.map(({facing:o,label:s})=>{const i=o===t;return r.jsx("button",{className:["facing-compass__btn",e===o?"facing-compass__btn--active":"",i?"facing-compass__btn--disabled":""].join(" ").trim(),onClick:()=>{i||n(o)},disabled:i,title:i?"当前规则下不可选":`朝${o}方`,children:s},o)})]})}function dv({reachable:e,map:n,from:t,fromFacing:a,movementValue:o,blockedPositions:s,aux:i,onCellClick:l}){const d=Ks(),u=I.useRef({allPaths:[],selectedIdx:0,hoveredPos:null}),[f,m]=I.useState(0),g=()=>m(x=>x+1);I.useEffect(()=>{document.querySelectorAll(".board-cell--path-ghost").forEach(j=>j.classList.remove("board-cell--path-ghost"));const{allPaths:x,selectedIdx:p,hoveredPos:_}=u.current;if(!_||x.length===0)return;const y=x[p];if(!y)return;const b=y.path.slice(0,-1);for(const j of b){const C=document.querySelector(`.board-cell[data-row="${j.row}"][data-col="${j.col}"]`);C==null||C.classList.add("board-cell--path-ghost")}const v=document.querySelector(`.board-cell[data-row="${_.row}"][data-col="${_.col}"]`);return v&&(v.dataset.pathLabel=x.length>1?`${p+1}/${x.length}`:""),()=>{document.querySelectorAll(".board-cell--path-ghost").forEach(j=>j.classList.remove("board-cell--path-ghost")),v&&delete v.dataset.pathLabel}},[f]),I.useEffect(()=>{const x=[];document.querySelectorAll(".board-cell--reachable").forEach(p=>{p.classList.remove("board-cell--reachable")});for(const p of e){const _=document.querySelector(`.board-cell[data-row="${p.row}"][data-col="${p.col}"]`);if(!_)continue;_.classList.add("board-cell--reachable");const y=()=>{const{allPaths:D,selectedIdx:K}=u.current;l(p,D[K]??null)},b=()=>{const D=Io(n,t,a,p,o,s,i);u.current={allPaths:D,selectedIdx:0,hoveredPos:p},g()},v=()=>{u.current={allPaths:[],selectedIdx:0,hoveredPos:null},g()},j=D=>{const{allPaths:K,selectedIdx:A}=u.current;if(K.length<=1)return;D.preventDefault();const L=D.deltaY>0?1:-1;u.current={...u.current,selectedIdx:(A+L+K.length)%K.length},g()};let C=null,M=0,S=0,E=!1;const z=D=>{if(M=D.touches[0].clientX,S=D.touches[0].clientY,E=!1,d){const{hoveredPos:K}=u.current;if(K&&K.row===p.row&&K.col===p.col)return;const A=Io(n,t,a,p,o,s,i);u.current={allPaths:A,selectedIdx:0,hoveredPos:p},g(),D.preventDefault();return}C=setTimeout(()=>{E=!0;const K=Io(n,t,a,p,o,s,i);u.current={allPaths:K,selectedIdx:0,hoveredPos:p},g()},400)},N=()=>{C&&(clearTimeout(C),C=null),E&&!d&&(u.current={allPaths:[],selectedIdx:0,hoveredPos:null},g()),E=!1},R=D=>{if(d||!E)return;const K=D.touches[0].clientX-M,A=D.touches[0].clientY-S;if(Math.abs(K)>40||Math.abs(A)>40){const{allPaths:L,selectedIdx:W}=u.current;if(L.length<=1)return;const V=Math.abs(K)>Math.abs(A)?K>0?1:-1:A>0?1:-1;u.current={...u.current,selectedIdx:(W+V+L.length)%L.length},g(),M=D.touches[0].clientX,S=D.touches[0].clientY}};_.addEventListener("click",y),_.addEventListener("mouseenter",b),_.addEventListener("mouseleave",v),_.addEventListener("wheel",j,{passive:!1}),_.addEventListener("touchstart",z,{passive:!0}),_.addEventListener("touchend",N),_.addEventListener("touchcancel",N),_.addEventListener("touchmove",R,{passive:!0}),x.push(()=>{C&&clearTimeout(C),_.removeEventListener("click",y),_.removeEventListener("mouseenter",b),_.removeEventListener("mouseleave",v),_.removeEventListener("wheel",j),_.removeEventListener("touchstart",z),_.removeEventListener("touchend",N),_.removeEventListener("touchcancel",N),_.removeEventListener("touchmove",R)})}return()=>{document.querySelectorAll(".board-cell--reachable").forEach(p=>p.classList.remove("board-cell--reachable")),document.querySelectorAll(".board-cell--path-ghost").forEach(p=>p.classList.remove("board-cell--path-ghost")),document.querySelectorAll(".board-cell[data-path-label]").forEach(p=>delete p.dataset.pathLabel),u.current={allPaths:[],selectedIdx:0,hoveredPos:null},x.forEach(p=>p())}},[e,n,t,a,o,s,i,l]);const h=I.useCallback(()=>{const{allPaths:x,selectedIdx:p}=u.current;x.length<=1||(u.current={...u.current,selectedIdx:(p+1)%x.length},g())},[]);if(d){const{allPaths:x,hoveredPos:p}=u.current;if(p&&x.length>1)return r.jsxs("button",{className:"move-cycle-btn",onClick:h,style:{position:"fixed",bottom:80,left:"50%",transform:"translateX(-50%)",zIndex:600,padding:"10px 24px",background:"rgba(22, 33, 62, 0.95)",border:"1px solid #ffea00",borderRadius:8,color:"#ffea00",fontFamily:"var(--font-mono)",fontSize:"0.85rem",fontWeight:"bold",cursor:"pointer",minHeight:44,backdropFilter:"blur(4px)"},children:["切换路径 (",u.current.selectedIdx+1,"/",x.length,")"]})}return null}function Zm({reachable:e,onCellClick:n}){return I.useEffect(()=>(document.querySelectorAll(".board-cell").forEach(a=>{a.classList.remove("board-cell--reachable"),a.onclick=null}),e.forEach(a=>{const o=document.querySelector(`.board-cell[data-row="${a.row}"][data-col="${a.col}"]`);o&&(o.classList.add("board-cell--reachable"),o.onclick=()=>n(a))}),()=>{document.querySelectorAll(".board-cell--reachable").forEach(a=>{a.classList.remove("board-cell--reachable"),a.onclick=null})}),[e,n]),null}function uv({seg:e,getCard:n}){const{state:t,dispatch:a,aiConfig:o,isOnline:s,localPlayerId:i,currentTurnPlayerId:l}=Ce(),{map:d,turnOrder:u,currentTiming:f,pendingDamage:m,pendingArmorChoice:g}=t,[h,x]=I.useState(new Set),[p,_]=I.useState(null),[y,b]=I.useState(null),v=I.useRef(!1),[j,C]=I.useState(null);I.useEffect(()=>{p&&C(du(t,p))},[p]);const[M,S]=I.useState(!1),[E,z]=I.useState([]),[N,R]=I.useState(!1),D=f==="ranged"?"ranged":"melee",K=D==="ranged"?"射击时机":"近战时机";if(I.useEffect(()=>{if(p===null&&!v.current&&!(m||g)){if(s&&i){if(l!==i)return;const re=t.players[i];if(Ln(re,e,D,n))_(i),S(!1),R(!1),z([]);else{const Be=e===1?re.plotSeg1:re.plotSeg2;if(Be){const Ve=n(Be.defId);Ve&&(D==="ranged"&&Ve.actionType==="ranged"||D==="melee"&&(Ve.actionType==="melee"||Ve.actionType==="charge"))&&a({type:"ADD_LOG",message:`  ${Te(i)}【${Ve.nameCn}】条件不满足，无法发动`})}v.current=!0,a({type:"ADVANCE_TIMING"})}return}for(const re of u){if(h.has(re))continue;const ee=t.players[re];if(!Ln(ee,e,D,n)){const Ve=e===1?ee.plotSeg1:ee.plotSeg2;if(Ve){const je=n(Ve.defId);je&&(D==="ranged"&&je.actionType==="ranged"||D==="melee"&&(je.actionType==="melee"||je.actionType==="charge"))&&a({type:"ADD_LOG",message:`  ${Te(re)}【${je.nameCn}】条件不满足，无法发动`})}x(je=>new Set([...je,re]));return}_(re),S(!1),R(!1),z([]);return}v.current=!0,a({type:"ADVANCE_TIMING"})}},[h,p,m,g,n,l]),I.useEffect(()=>{if(!p||m||g||s&&i&&p!==i||!Ae(o,p))return;const ee=Pr(o,p),Be=setTimeout(()=>{const Ve=Ax(t,p,e,D,n,ee);if(Rr(a,Ve.reasoning),Ve.shouldAttack){const je=t.players[p],Bt=Ln(je,e,D,n),mf=(Bt==null?void 0:Bt.actionType)==="charge"?"RESOLVE_CHARGE":D==="ranged"?"RESOLVE_RANGED":"RESOLVE_MELEE";a({type:mf,attackerId:p,targetId:Ve.targetId})}else{const je=t.players[p],Bt=Ln(je,e,D,n);a({type:"ADD_LOG",message:`  ${Te(p)} 放弃发动${Bt?`【${Bt.nameCn}】`:K}`})}x(je=>new Set([...je,p])),_(null),S(!1),R(!1),z([])},800);return()=>clearTimeout(Be)},[p,m,g]),s&&i&&l&&l!==i&&!p)return r.jsx("div",{className:"action-hud__panel action-hud__panel--waiting",children:r.jsxs("span",{className:"action-hud__hint",children:["等待 ",Te(l)," 行动中…"]})});if(!p)return null;const A=t.players[p],L=Pm(t,p),W=j??du(t,p),V=t.players[W],k=f==="melee"?gn(A,n,"melee"):{vernier:!1,moveSensor:!1},$=Ln(A,e,D,n),J=($==null?void 0:$.actionType)==="charge",P=Ae(o,p),B=L.filter(re=>{const ee=t.players[re];if(J&&D==="melee"){const Be=q.find(je=>je.id===A.unitId),Ve=q.find(je=>je.id===ee.unitId);return qo(A,ee,e,d,Be,Ve,n).canAttack}return Qo(A,ee,e,D,d,n).canAttack});let F;if(J&&D==="melee"){const re=q.find(Be=>Be.id===A.unitId),ee=q.find(Be=>Be.id===V.unitId);F=qo(A,V,e,d,re,ee,n)}else F=Qo(A,V,e,D,d,n);const X=q.find(re=>re.id===A.unitId),Q=q.find(re=>re.id===V.unitId);function se(){if(!F.canAttack||!p)return;a({type:J?"RESOLVE_CHARGE":D==="ranged"?"RESOLVE_RANGED":"RESOLVE_MELEE",attackerId:p,targetId:W}),b(`${X.nameCn} → ${Q.nameCn}：造成 ${F.damage} 伤害`),x(ee=>new Set([...ee,p])),_(null),S(!1),R(!1),z([]),s&&(v.current=!0,a({type:"ADVANCE_TIMING"}))}function le(){if(!p)return;const re=Ln(t.players[p],e,D,n);a({type:"ADD_LOG",message:`  ${Te(p)} 放弃发动${re?`【${re.nameCn}】`:K}`}),b(null),x(ee=>new Set([...ee,p])),_(null),S(!1),R(!1),z([]),s&&(v.current=!0,a({type:"ADVANCE_TIMING"}))}function de(){if(!p||M)return;const re=Km(d,A.position,[V.position]);z(re),R(!0)}function vn(re){!p||!N||(a({type:"MELEE_SENSOR_MOVE",playerId:p,to:re}),S(!0),R(!1),z([]))}function zn(){R(!1),z([])}const Aa=Te(p),Jt=F.card?J?`【${F.card.nameCn}】突击值 ${X.assault} vs 防御${Q.assaultDef}`:`【${F.card.nameCn}】射程 ${F.card.rangeMin??"—"}–${F.card.rangeMax??"—"}`:null,Zn=D==="melee"&&k.moveSensor&&!M;return P?r.jsxs("div",{className:"action-hud__panel action-hud__panel--ai-thinking",children:[r.jsxs("span",{className:"action-hud__mover",children:[Te(p)," (AI)"]}),r.jsx("span",{className:"action-hud__divider",children:"│"}),r.jsx("span",{className:"action-hud__hint",children:"思考中…"})]}):r.jsxs(r.Fragment,{children:[N&&r.jsx(Zm,{reachable:E,onCellClick:vn}),!N&&r.jsx(pv,{validTargets:B.map(re=>({playerId:re,pos:t.players[re].position})),selectedTargetId:W,onSelectTarget:C}),r.jsxs("div",{className:"action-hud__panel action-hud__panel--combat",children:[r.jsx("span",{className:"action-hud__mover",children:Aa}),r.jsx("span",{className:"action-hud__divider",children:"│"}),r.jsx("span",{className:"action-hud__timing-label",children:K}),k.moveSensor&&r.jsxs("span",{className:`action-hud__aux-badge ${M?"action-hud__aux-badge--used":""}`,title:"近战前可移动1格",children:["⚙ 移动传感器",M?"（已使用）":""]}),k.vernier&&r.jsx("span",{className:"action-hud__aux-badge",title:"地形消耗-1，高低差-1",children:"⚙ 喷射推进器"}),(D==="melee"||D==="ranged"&&vc(F.card))&&r.jsx(Cc,{currentFacing:A.facing,onSelectFacing:re=>a({type:"ADJUST_FACING",playerId:p,facing:re})}),F.card?r.jsxs("span",{className:"action-hud__card-info",children:[Jt,F.card.damage!==void 0&&r.jsxs("span",{className:"action-hud__dmg",children:[" 伤害 ",F.card.damage]})]}):r.jsxs("span",{className:"action-hud__hint",children:["无",D==="ranged"?"射击":"近战","牌"]}),r.jsx("span",{className:`action-hud__validity ${F.canAttack?"action-hud__validity--ok":"action-hud__validity--no"}`,children:F.canAttack?J?`距离 ${F.dist} ✓ → 造成 ${F.damage} 伤 / 自机反伤 ${F.counterDamage}`:`距离 ${F.dist} ✓ → ${F.damage} 伤`:F.card?F.reason:""}),y&&r.jsx("span",{className:"action-hud__result",children:y}),N?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"action-hud__hint",children:"点击高亮格移动（传感器），或"}),r.jsx("button",{className:"action-hud__skip-btn",onClick:zn,children:"取消移动"})]}):r.jsxs(r.Fragment,{children:[Zn&&r.jsx("button",{className:"action-hud__sensor-btn",onClick:de,title:"移动传感器：攻击前可移动1格",children:"传感器移动"}),B.length>1&&r.jsxs("span",{className:"action-hud__target-hint",children:["目标: ",Te(W)," (",Q.nameCn,") — 点击地图切换目标 (",B.length,"个可选)"]}),r.jsx("button",{className:"action-hud__attack-btn",onClick:se,disabled:!F.canAttack,title:F.canAttack?`攻击 ${Q.nameCn}`:F.reason,children:"执行攻击"}),r.jsxs("button",{className:"action-hud__skip-btn",onClick:le,children:["跳过",D==="ranged"?"射击":"近战"]})]})]})]})}function pv({validTargets:e,selectedTargetId:n,onSelectTarget:t}){return I.useEffect(()=>{document.querySelectorAll(".board-cell--target, .board-cell--target-alt").forEach(a=>{a.classList.remove("board-cell--target","board-cell--target-alt"),a.onclick=null});for(const{playerId:a,pos:o}of e){const s=document.querySelector(`.board-cell[data-row="${o.row}"][data-col="${o.col}"]`);s&&(a===n?s.classList.add("board-cell--target"):(s.classList.add("board-cell--target-alt"),s.onclick=i=>{i.stopPropagation(),t(a)}))}return()=>{document.querySelectorAll(".board-cell--target, .board-cell--target-alt").forEach(a=>{a.classList.remove("board-cell--target","board-cell--target-alt"),a.onclick=null})}},[e,n,t]),null}function mv({seg:e,turnOrder:n,getCard:t}){const{state:a,dispatch:o,aiConfig:s,isOnline:i,localPlayerId:l,currentTurnPlayerId:d}=Ce(),{map:u,pendingDamage:f,pendingArmorChoice:m}=a,[g,h]=I.useState(new Set),[x,p]=I.useState(null),[_,y]=I.useState([]),[b,v]=I.useState("real"),[j,C]=I.useState([]),M=I.useRef(!1);if(I.useEffect(()=>{if(x===null&&!M.current&&!(f||m)){if(i&&l){if(d!==l)return;const V=a.players[l],k=e===1?V.plotSeg1:V.plotSeg2,$=k?t(k.defId):null;!$||$.actionType!=="mine"&&$.actionType!=="special"&&$.actionType!=="aim"?(M.current=!0,o({type:"ADVANCE_TIMING"})):p(l);return}for(const V of n){if(g.has(V))continue;const k=a.players[V],$=e===1?k.plotSeg1:k.plotSeg2,J=$?t($.defId):null;if(!J||J.actionType!=="mine"&&J.actionType!=="special"&&J.actionType!=="aim"){h(P=>new Set([...P,V]));return}p(V);return}M.current=!0,o({type:"ADVANCE_TIMING"})}},[g,x,f,m,t,d]),I.useEffect(()=>{if(!x){y([]),C([]),v("real");return}const V=a.players[x],k=e===1?V.plotSeg1:V.plotSeg2,$=k?t(k.defId):null;if($&&$.actionType==="mine"){const J=lv(a,x);y(J)}else y([]),C([]),v("real")},[x,u,e,a,t]),I.useEffect(()=>{if(!x||f||m||i&&l&&x!==l||!Ae(s,x))return;const k=Pr(s,x),$=setTimeout(()=>{const J=Px(a,x,e,t,k);J&&(Rr(o,J.reasoning),J.actionType==="mine"?o({type:"PLACE_MINE",playerId:x,placements:J.placements,damage:J.damage}):J.actionType==="aim"&&o({type:"ADJUST_FACING",playerId:x,facing:J.facing})),h(P=>new Set([...P,x])),p(null)},800);return()=>clearTimeout($)},[x,f,m]),i&&l&&d&&d!==l&&!x)return r.jsx("div",{className:"action-hud__panel action-hud__panel--waiting",children:r.jsxs("span",{className:"action-hud__hint",children:["等待 ",Te(d)," 行动中…"]})});if(!x)return null;const S=a.players[x],E=e===1?S.plotSeg1:S.plotSeg2,z=E?t(E.defId):null,N=Te(x),R=j.filter(V=>V.kind==="real").length,D=j.filter(V=>V.kind==="dummy").length,K=Ae(s,x);function A(){C([]),v("real"),h(V=>new Set([...V,x])),p(null),i&&(M.current=!0,o({type:"ADVANCE_TIMING"}))}function L(V){!x||!z||z.actionType!=="mine"||_.some(k=>ve(k,V))&&C(k=>k.find(P=>ve(P.position,V))?k.filter(P=>!ve(P.position,V)):k.length>=4||k.filter(P=>P.kind===b).length>=2?k:[...k,{position:V,kind:b}])}function W(){!x||!z||z.actionType!=="mine"||j.length!==4||R!==2||D!==2||(o({type:"PLACE_MINE",playerId:x,placements:j,damage:z.damage||3}),C([]),v("real"),h(V=>new Set([...V,x])),p(null),i&&(M.current=!0,o({type:"ADVANCE_TIMING"})))}return K?r.jsxs("div",{className:"action-hud__panel action-hud__panel--ai-thinking",children:[r.jsxs("span",{className:"action-hud__mover",children:[N," (AI)"]}),r.jsx("span",{className:"action-hud__divider",children:"│"}),r.jsx("span",{className:"action-hud__hint",children:"思考中…"})]}):r.jsxs(r.Fragment,{children:[_.length>0&&r.jsx(Zm,{reachable:_,onCellClick:L}),r.jsxs("div",{className:"action-hud__panel action-hud__panel--special",children:[r.jsx("span",{className:"action-hud__mover",children:N}),r.jsx("span",{className:"action-hud__divider",children:"│"}),r.jsx("span",{className:"action-hud__timing-label",children:"特殊时机"}),r.jsx("span",{className:"action-hud__card-info",children:z?`【${z.nameCn}】效果`:"（无）"}),(z==null?void 0:z.actionType)==="mine"?r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"action-hud__facing-row",children:[r.jsxs("button",{className:`action-hud__facing-btn${b==="real"?" is-selected":""}`,onClick:()=>v("real"),disabled:R>=2,children:["机雷 ",R,"/2"]}),r.jsxs("button",{className:`action-hud__facing-btn${b==="dummy"?" is-selected":""}`,onClick:()=>v("dummy"),disabled:D>=2,children:["替身雷 ",D,"/2"]})]}),r.jsxs("span",{className:"action-hud__hint",children:["点击高亮格放置 ",b==="real"?"机雷":"替身雷","，再次点击已选格可取消。"]}),r.jsxs("span",{className:"action-hud__hint",children:["当前已选 ",j.length,"/4 个指示物，需放满真雷2个与替身雷2个。"]}),r.jsx("button",{className:"action-hud__attack-btn",onClick:W,disabled:j.length!==4||R!==2||D!==2,children:"确认布雷"})]}):(z==null?void 0:z.actionType)==="aim"?r.jsxs(r.Fragment,{children:[r.jsx(Cc,{currentFacing:S.facing,onSelectFacing:V=>o({type:"ADJUST_FACING",playerId:x,facing:V})}),r.jsx("span",{className:"action-hud__hint",children:"可先调整朝向，然后"})]}):r.jsx("span",{className:"action-hud__hint",children:"暂无此牌效果支持，请"}),r.jsx("button",{className:"action-hud__skip-btn",onClick:A,children:(z==null?void 0:z.actionType)==="aim"?"确认":"跳过"})]})]})}function fv({pendingArmorChoice:e,getCard:n}){const{dispatch:t,aiConfig:a,isOnline:o,localPlayerId:s}=Ce(),{zoom:i,getZoomHandlers:l}=Ot(),{targetId:d,damage:u,source:f,handCards:m,plotCards:g}=e,[h,x]=I.useState(null),[p,_]=I.useState(new Set),y=o&&s&&d!==s,b=!y&&Ae(a,d);I.useEffect(()=>{b?x(d):o||x(null)},[d,b,o]),I.useEffect(()=>{if(!b||y)return;const N=Vx(u,m,g),R=setTimeout(()=>{Rr(t,N.reasoning),t({type:"CONFIRM_ARMOR_CHOICE",playerId:d,selectedInstanceIds:N.value})},500);return()=>clearTimeout(R)},[d,b,y,u,m,g,t]);function v(N){_(R=>{const D=new Set(R);return D.has(N)?D.delete(N):D.add(N),D})}function j(){t({type:"CONFIRM_ARMOR_CHOICE",playerId:d,selectedInstanceIds:[...p]})}function C(){t({type:"CONFIRM_ARMOR_CHOICE",playerId:d,selectedInstanceIds:[]})}const M=[...p].reduce((N,R)=>{const D=g.find(A=>A.instanceId===R);if(D)return N+D.armorValue;const K=m.find(A=>A.instanceId===R);return N+((K==null?void 0:K.armorValue)??0)},0),S=Math.max(0,u-M),E=f==="ranged"?"射击":f==="charge"?"突击":f==="mine"?"机雷":"近战",z=Te(d);return y?r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"damage-pass-overlay",children:r.jsxs("div",{className:"damage-pass-card",children:[r.jsx("p",{className:"damage-pass__eyebrow",children:"— 装甲选择 —"}),r.jsx("h2",{className:"damage-pass__title",children:"等待对手选择"}),r.jsx("div",{className:"damage-pass__player",children:z}),r.jsxs("p",{className:"damage-pass__context",children:[z," 正在决定是否激活装甲牌…"]}),r.jsx("div",{className:"damage-pass__spinner",children:"⏳"})]})}),r.jsx("style",{children:ds})]}):!o&&!b&&d!==h?r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"damage-pass-overlay",children:r.jsxs("div",{className:"damage-pass-card",children:[r.jsx("p",{className:"damage-pass__eyebrow",children:"— 装甲选择 —"}),r.jsx("h2",{className:"damage-pass__title",children:"请将设备交给"}),r.jsx("div",{className:"damage-pass__player",children:z}),r.jsxs("p",{className:"damage-pass__context",children:["受到 ",u," 点",E,"伤害，可激活装甲牌减伤"]}),r.jsxs("button",{className:"damage-pass__btn",onClick:()=>x(d),children:[z," 已准备"]})]})}),r.jsx("style",{children:ds})]}):r.jsxs("div",{className:"action-hud",children:[r.jsxs("div",{className:"action-hud__panel action-hud__panel--damage",children:[r.jsxs("div",{className:"damage-panel__header",children:[r.jsx("span",{className:"damage-panel__title",children:"🛡 装甲激活"}),r.jsx("span",{className:"damage-panel__player",children:z}),r.jsxs("span",{className:"damage-panel__remaining",children:["受到 ",r.jsx("strong",{children:u})," 点",E,"伤害",M>0&&r.jsxs(r.Fragment,{children:[" → 减免后 ",r.jsx("strong",{className:"armor-reduced",children:S})," 点"]})]})]}),r.jsx("div",{className:"damage-panel__hint",children:f==="ranged"?"手牌中的装甲牌可防御射击伤害；准备区中的装甲牌可防御任意伤害。选择要激活的装甲牌，或跳过。":"准备区中的装甲牌可防御任意伤害（含突击/近战）。选择要激活的装甲牌，或跳过。"}),r.jsxs("div",{className:"damage-panel__zones",children:[m.length>0&&r.jsxs("div",{className:"damage-zone",children:[r.jsx("span",{className:"damage-zone__label",children:"手牌装甲"}),r.jsx("div",{className:"damage-zone__cards",children:m.map(N=>{const R=n(N.defId),D=p.has(N.instanceId),K=l((R==null?void 0:R.frontImageId)??"");return r.jsxs("button",{className:`damage-card-btn ${D?"damage-card-btn--selected":""}`,onClick:()=>v(N.instanceId),...K,children:[r.jsx("span",{className:"damage-card-btn__name",children:(R==null?void 0:R.nameCn)??N.defId}),r.jsxs("span",{className:"armor-value-badge",children:["-",N.armorValue]})]},N.instanceId)})})]}),g.length>0&&r.jsxs("div",{className:"damage-zone",children:[r.jsx("span",{className:"damage-zone__label",children:"准备区装甲"}),r.jsx("div",{className:"damage-zone__cards",children:g.map(N=>{const R=n(N.defId),D=p.has(N.instanceId),K=l((R==null?void 0:R.frontImageId)??"");return r.jsxs("button",{className:`damage-card-btn ${D?"damage-card-btn--selected":""}`,onClick:()=>v(N.instanceId),...K,children:[r.jsx("span",{className:"damage-card-btn__name",children:(R==null?void 0:R.nameCn)??N.defId}),r.jsxs("span",{className:"damage-zone__sub",children:["主要阶段",N.seg]}),r.jsxs("span",{className:"armor-value-badge",children:["-",N.armorValue]})]},N.instanceId)})})]})]}),r.jsxs("div",{className:"damage-panel__actions",children:[r.jsxs("button",{className:"action-hud__attack-btn",onClick:j,disabled:p.size===0,children:["激活选中装甲 (-",M," 点)"]}),r.jsx("button",{className:"action-hud__skip-btn",onClick:C,children:"不使用装甲"})]})]}),r.jsx(Kt,{zoom:i})]})}function gv({pendingDamage:e,getCard:n}){const{state:t,dispatch:a,aiConfig:o,isOnline:s,localPlayerId:i}=Ce(),{targetId:l,remaining:d,selectedInstanceIds:u}=e,{zoom:f,getZoomHandlers:m}=Ot(),[g,h]=I.useState(null),[x,p]=I.useState(!1),_=t.players[l];$n(_);const y=u.length===0,b=!!e.attackerId&&y&&!e.attackerDesignatedCardId,v=b?e.attackerId:l,j=Te(v),C=s&&i&&v!==i,M=!C&&Ae(o,v),S=Pr(o,v),E=!s&&!M&&v!==g;I.useEffect(()=>{M?h(v):s||h(null)},[v,M,s]),I.useEffect(()=>{if(!M||C||d<=0)return;const k=t.players[l],$=Sa(k),J=t.playerIds.filter(F=>F!==l&&t.teams[F]!==t.teams[l]&&!t.players[F].isDefeated),P=J.length>0?t.players[J[0]]:k,B=setTimeout(()=>{if($.length>0){const F=Hd(e,k,n,S,b,P);Rr(a,F.reasoning),F.value?a({type:"SELECT_DAMAGE_CARD",playerId:v,instanceId:F.value}):a({type:"CONFIRM_DAMAGE_SELECTION",playerId:v})}else a({type:"CONFIRM_DAMAGE_SELECTION",playerId:v})},600);return()=>clearTimeout(B)},[d,v,M,C,t.players]),I.useEffect(()=>{if(!x)return;if(d<=0){p(!1);return}const k=t.players[l],$=Sa(k),J=setTimeout(()=>{if($.length>0){const P=t.playerIds.filter(X=>X!==l&&t.teams[X]!==t.teams[l]&&!t.players[X].isDefeated),B=P.length>0?t.players[P[0]]:k,F=Hd(e,k,n,"hard",b,B);F.value?a({type:"SELECT_DAMAGE_CARD",playerId:v,instanceId:F.value}):(a({type:"CONFIRM_DAMAGE_SELECTION",playerId:v}),p(!1))}else a({type:"CONFIRM_DAMAGE_SELECTION",playerId:v}),p(!1)},150);return()=>clearTimeout(J)},[x,d,t.players]);function z(k){a({type:"SELECT_DAMAGE_CARD",playerId:v,instanceId:k})}function N(){p(!0)}if(C)return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"damage-pass-overlay",children:r.jsxs("div",{className:"damage-pass-card",children:[r.jsx("p",{className:"damage-pass__eyebrow",children:"— 伤害分配 —"}),r.jsx("h2",{className:"damage-pass__title",children:"等待对手选择"}),r.jsx("div",{className:"damage-pass__player",children:j}),r.jsx("p",{className:"damage-pass__context",children:b?"【瞄准加成】攻方正在指定要摧毁的卡牌…":`${j} 正在选择要摧毁的 ${d} 张卡牌…`}),r.jsx("div",{className:"damage-pass__spinner",children:"⏳"})]})}),r.jsx("style",{children:ds})]});if(E)return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"damage-pass-overlay",children:r.jsxs("div",{className:"damage-pass-card",children:[r.jsx("p",{className:"damage-pass__eyebrow",children:"— 伤害分配 —"}),r.jsx("h2",{className:"damage-pass__title",children:"请将设备交给"}),r.jsx("div",{className:"damage-pass__player",children:j}),r.jsx("p",{className:"damage-pass__context",children:b?"【瞄准加成】攻方有权指定第一张要摧毁的卡牌":`防方选择要摧毁的 ${d} 张卡牌（可自动分配）`}),r.jsxs("button",{className:"damage-pass__btn",onClick:()=>h(v),children:[j," 已准备"]})]})}),r.jsx("style",{children:ds})]});const R=_.hand.filter(k=>!k.destroyed),D=_.plotSeg1&&!_.plotSeg1.destroyed?[_.plotSeg1]:[],K=_.plotSeg2&&!_.plotSeg2.destroyed?[_.plotSeg2]:[],A=_.auxiliary.filter(k=>!k.destroyed),L=_.deck.filter(k=>!k.destroyed),W=[];R.length>0&&W.push({label:"手牌",cards:R}),D.length>0&&W.push({label:"布局格",sublabel:"主要阶段1",cards:D}),K.length>0&&W.push({label:"布局格",sublabel:"主要阶段2",cards:K}),A.length>0&&W.push({label:"辅助区",cards:A});const V=L[0]??null;return r.jsxs("div",{className:"action-hud",children:[r.jsxs("div",{className:"action-hud__panel action-hud__panel--damage",children:[r.jsxs("div",{className:"damage-panel__header",children:[r.jsx("span",{className:"damage-panel__title",children:"⚔️ 伤害分配"}),r.jsx("span",{className:"damage-panel__player",children:b?`${j} (瞄准指定)`:j}),r.jsxs("span",{className:"damage-panel__remaining",children:["还需摧毁 ",r.jsx("strong",{children:d})," 张卡牌"]})]}),(e.destroyedBombCount??0)>0&&r.jsxs("div",{className:"damage-panel__bomb-alert",children:["💣 已选中 ",e.destroyedBombCount," 张炸弹卡，选完后将进行誘爆检查"]}),r.jsx("div",{className:"damage-panel__hint",children:b?`【瞄准加成】攻方有权指定第一张要摧毁的卡牌！可从手牌、辅助区、卡组、布局格中选择。请 ${j} 选择：`:e.source==="ranged"?"射击伤害：须先从手牌 / 布局格 / 辅助区选择卡牌破坏，不足部分自动从牌组顶破坏。":"牌组与弃牌区已耗尽，近战伤害切换为自选模式。请从手牌 / 布局格 / 辅助区选择。"}),r.jsxs("div",{className:"damage-panel__zones",children:[W.map((k,$)=>r.jsxs("div",{className:"damage-zone",children:[r.jsxs("span",{className:"damage-zone__label",children:[k.label,k.sublabel&&r.jsxs("span",{className:"damage-zone__sub",children:["（",k.sublabel,"）"]})]}),r.jsx("div",{className:"damage-zone__cards",children:k.cards.map(J=>{const P=n(J.defId),B=(P==null?void 0:P.nameCn)??J.defId,F=u.includes(J.instanceId),X=P!=null&&P.frontImageId?`/assets/${P.frontImageId}`:null;return r.jsxs("button",{className:`damage-card-btn ${F?"damage-card-btn--selected":""} ${P!=null&&P.hasBombIcon?"damage-card-btn--bomb":""}`,onClick:()=>z(J.instanceId),disabled:F,title:`${B} (${(P==null?void 0:P.actionType)??"?"})${P!=null&&P.hasBombIcon?" ⚠️ 含诱爆":""}`,...X?m(X):{},children:[r.jsx("span",{className:"damage-card-btn__name",children:B}),(P==null?void 0:P.isKaiVariant)&&r.jsx("span",{className:"damage-card-btn__det",title:"改型",children:"◆"}),(P==null?void 0:P.hasBombIcon)&&r.jsx("span",{className:"damage-card-btn__det damage-card-btn__bomb-icon",title:"诱爆卡",children:"💣"})]},J.instanceId)})})]},$)),V&&(e.source!=="ranged"||b)&&r.jsxs("div",{className:"damage-zone",children:[r.jsxs("span",{className:"damage-zone__label",children:["卡组",r.jsxs("span",{className:"damage-zone__sub",children:["（共 ",L.length," 张，正面朝下）"]})]}),r.jsx("div",{className:"damage-zone__cards",children:r.jsxs("button",{className:"damage-card-btn damage-card-btn--deck",onClick:()=>z(V.instanceId),title:"从卡组顶部翻开并摧毁 1 张（诱爆正常触发）",children:[r.jsx("span",{className:"damage-card-btn__deck-back",children:"🂠"}),r.jsx("span",{className:"damage-card-btn__name",children:"顶部 × 1"})]})})]}),V&&e.source==="ranged"&&!b&&r.jsxs("div",{className:"damage-zone",children:[r.jsxs("span",{className:"damage-zone__label",children:["卡组",r.jsxs("span",{className:"damage-zone__sub",children:["（共 ",L.length," 张）"]})]}),r.jsx("div",{className:"damage-zone__cards",children:r.jsxs("div",{className:"damage-card-btn damage-card-btn--deck",style:{opacity:.5,cursor:"default"},title:"射击伤害的牌组部分将在选完表牌后自动从顶部破坏",children:[r.jsx("span",{className:"damage-card-btn__deck-back",children:"🂠"}),r.jsx("span",{className:"damage-card-btn__name",children:"自动破坏"})]})})]})]}),r.jsx("div",{className:"damage-panel__actions",children:r.jsx("button",{className:"action-hud__skip-btn",onClick:N,disabled:x,title:"智能选择价值最低的卡牌优先破坏，剩余部分从牌组顶部自动摧毁",children:x?"自动分配中…":"智能分配剩余伤害"})})]}),r.jsx(Kt,{zoom:f})]})}const vi=`
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
`,ds=`
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
`;function hv({onBack:e}){return r.jsxs("div",{className:"rules-page",children:[r.jsxs("div",{className:"rules-page__header",children:[r.jsx("button",{className:"rules-back-btn",onClick:e,children:"← 返回"}),r.jsx("h1",{className:"rules-page__title",children:"游戏规则"}),r.jsx("span",{className:"rules-page__subtitle",children:"エムブリオマシン"})]}),r.jsxs("div",{className:"rules-page__body",children:[r.jsxs("section",{className:"rules-section",children:[r.jsx("h2",{className:"rules-section__title",children:"游戏概述"}),r.jsx("p",{children:"《胚胎机器》是一款双人对战策略游戏。每位玩家控制一台战机（机体），通过秘密布置行动牌来控制机体的移动与战斗。 当对手满足任意一项败北条件时，本方获胜。"})]}),r.jsxs("section",{className:"rules-section",children:[r.jsx("h2",{className:"rules-section__title",children:"准备阶段"}),r.jsxs("ol",{className:"rules-list",children:[r.jsx("li",{children:"双方各选择一台机体，机体自带专属牌组。"}),r.jsx("li",{children:"选择地图，确定双方初始出生区域（地图短边中央3格）。"}),r.jsxs("li",{children:["将各自牌组洗混，游戏开始时双方各抽取等同于本机",r.jsx("b",{children:"回避值"}),"数量的手牌。"]}),r.jsx("li",{children:"双方机体初始机头朝向对手方向（玩家1朝南，玩家2朝北）。"})]})]}),r.jsxs("section",{className:"rules-section",children:[r.jsx("h2",{className:"rules-section__title",children:"回合流程"}),r.jsxs("div",{className:"rules-flow",children:[r.jsxs("div",{className:"rules-flow__step",children:[r.jsx("span",{className:"rules-flow__num",children:"1"}),r.jsxs("div",{children:[r.jsx("strong",{children:"抽牌阶段"}),r.jsxs("p",{children:["双方各从牌组顶抽取等同于自己机体",r.jsx("b",{children:"回避值"}),"数量的牌。若牌组耗尽，废弃区的牌重新洗混后继续抽取。"]})]})]}),r.jsxs("div",{className:"rules-flow__step",children:[r.jsx("span",{className:"rules-flow__num",children:"2"}),r.jsxs("div",{children:[r.jsx("strong",{children:"布局阶段"}),r.jsxs("p",{children:["双方各自秘密为",r.jsx("b",{children:"主要阶段1"}),"和",r.jsx("b",{children:"主要阶段2"}),"各布置一张行动牌（面朝下）， 然后将设备交给对方进行同样操作。双方确认后，翻开亮牌，进入行动阶段。"]})]})]}),r.jsxs("div",{className:"rules-flow__step",children:[r.jsx("span",{className:"rules-flow__num",children:"3"}),r.jsxs("div",{children:[r.jsx("strong",{children:"行动主要阶段1 & 主要阶段2"}),r.jsxs("p",{children:["每个段落依次经历四个时机：",r.jsx("b",{children:"移动 → 射击 → 近战 → 特殊"}),'。 每个时机内，双方按该时机的优先顺序依次行动（详见"行动顺序"）。']})]})]}),r.jsxs("div",{className:"rules-flow__step",children:[r.jsx("span",{className:"rules-flow__num",children:"4"}),r.jsxs("div",{children:[r.jsx("strong",{children:"清理阶段"}),r.jsx("p",{children:"将已布置的牌（主要阶段1→主要阶段2顺序）和手中剩余的牌全部放入废弃区，准备下一回合。"})]})]})]})]}),r.jsxs("section",{className:"rules-section",children:[r.jsx("h2",{className:"rules-section__title",children:"行动顺序与先制值"}),r.jsxs("p",{children:["每台机体有固定的",r.jsx("b",{children:"先制值（数字越大越快）"}),"。先制值高的玩家在每个时机优先行动，但不同时机的排序逻辑有所不同："]}),r.jsxs("ul",{className:"rules-list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"移动时机："}),"先比较该段落的",r.jsx("b",{children:"移动牌面数值"}),"（移动值大的先动）；移动值相同时再比先制值。"]}),r.jsxs("li",{children:[r.jsx("b",{children:"射击/近战/特殊时机："}),"直接按",r.jsx("b",{children:"先制值"}),"排序（高者先行动）。"]}),r.jsxs("li",{children:[r.jsx("b",{children:"平局处理："}),"先制值相同时，玩家1优先行动。"]})]})]}),r.jsxs("section",{className:"rules-section",children:[r.jsx("h2",{className:"rules-section__title",children:"机头朝向与攻击扇区"}),r.jsxs("p",{children:["每台机体具有明确的",r.jsx("b",{children:"机头朝向"}),"（N/S/E/W），初始朝向对手方向。"]}),r.jsxs("ul",{className:"rules-list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"攻击限制："}),"射击攻击只能对准",r.jsx("b",{children:"机体正前方（含正侧方延长线）180°扇区"}),"内的目标。目标在机体正后方时无法射击。"]}),r.jsxs("li",{children:[r.jsx("b",{children:"移动中的转向："}),"普通移动时改变行进方向不额外消耗移动力。"]}),r.jsxs("li",{children:[r.jsx("b",{children:"移动结束朝向："}),"普通移动完成后，可自由决定机头最终朝向。"]}),r.jsxs("li",{children:[r.jsx("b",{children:"手动调整："}),"白兵时机开始时，参与白兵的机体可先调整朝向；部分卡牌（如瞄准）也会允许改变朝向。"]}),r.jsxs("li",{children:[r.jsx("b",{children:"突击限制："}),"突击与部分突击衍生武器仍要求目标位于机体正面，具体以卡面文字为准。"]})]}),r.jsx("p",{className:"rules-note",children:"注：扇区边界（正侧方延长线上的格子）视为前方，可以攻击。"})]}),r.jsxs("section",{className:"rules-section",children:[r.jsx("h2",{className:"rules-section__title",children:"行动时机说明"}),r.jsxs("div",{className:"rules-timing-grid",children:[r.jsxs("div",{className:"rules-timing-card",children:[r.jsx("span",{className:"rules-timing-icon",children:"🏃"}),r.jsx("strong",{children:"移动时机"}),r.jsxs("p",{children:["若该段落布局的是",r.jsx("b",{children:"移动牌"}),"，则可在地图上移动。移动时需尽可能用完移动力，且同一次移动中不能再次进入已进入过的格子。无移动牌则自动跳过。"]})]}),r.jsxs("div",{className:"rules-timing-card",children:[r.jsx("span",{className:"rules-timing-icon",children:"🎯"}),r.jsx("strong",{children:"射击时机"}),r.jsxs("p",{children:["若该段落布局的是",r.jsx("b",{children:"射击牌"}),"，可对正前方扇区内、射程范围内且视线通畅的敌方发动远程攻击。若",r.jsx("b",{children:"主要阶段1布置了瞄准牌"}),"，则主要阶段2的射击伤害额外+1。"]})]}),r.jsxs("div",{className:"rules-timing-card",children:[r.jsx("span",{className:"rules-timing-icon",children:"⚔️"}),r.jsx("strong",{children:"近战时机"}),r.jsxs("p",{children:["若该段落布局的是",r.jsx("b",{children:"近战牌"}),"，可对",r.jsx("b",{children:"相邻格（切比雪夫距离=1）"}),"的敌方发动近战攻击，无扇区限制，但仍需满足射线条件。近战结算前，只有本时机确实有白兵牌的机体可先调整朝向；主要阶段1有瞄准牌时，主要阶段2的近战伤害也+1。"]})]}),r.jsxs("div",{className:"rules-timing-card",children:[r.jsx("span",{className:"rules-timing-icon",children:"⚡"}),r.jsx("strong",{children:"特殊时机"}),r.jsxs("p",{children:[r.jsx("b",{children:"突击牌"}),"→沿当前正面直线突进，尽可能用完突击移动力；移动结束后若正面相邻有目标则发动突击。",r.jsx("b",{children:"机雷牌"}),"→在周围8格内布置隐藏指示物（机雷2、替身雷2）。",r.jsx("b",{children:"瞄准牌"}),"→此时可调整朝向，并提供后续攻击加成。"]})]})]})]}),r.jsxs("section",{className:"rules-section",children:[r.jsx("h2",{className:"rules-section__title",children:"移动规则"}),r.jsxs("p",{children:["移动时，机体从当前格出发按移动牌数值进行扩展，每进入一个格子消耗对应地形的基础代价 ",r.jsx("b",{children:"加上高度差"}),"："]}),r.jsxs("ul",{className:"rules-list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"步数用尽："}),"只要仍存在合法下一步，就必须继续移动。"]}),r.jsxs("li",{children:[r.jsx("b",{children:"自由转向："}),"移动途中改变前进方向不额外消耗移动力。"]}),r.jsxs("li",{children:[r.jsx("b",{children:"不可回踏："}),"同一次移动中，不能再次进入已经进入过的格子，也不能回到起始格。"]}),r.jsxs("li",{children:[r.jsx("b",{children:"结束朝向："}),"普通移动完成后，可自由选择机体最终朝向。"]})]}),r.jsxs("table",{className:"rules-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"地形"}),r.jsx("th",{children:"基础移动代价"}),r.jsx("th",{children:"战斗效果"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"平地"}),r.jsx("td",{children:"1"}),r.jsx("td",{children:"无"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"砂地"}),r.jsx("td",{children:"1"}),r.jsx("td",{children:"无"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"废墟"}),r.jsx("td",{children:"2"}),r.jsx("td",{children:"无"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"森林"}),r.jsx("td",{children:"2"}),r.jsx("td",{children:"处于其中的机体受到射击伤害 −1（掩护）"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"高地"}),r.jsx("td",{children:"1 + 高度差*"}),r.jsx("td",{children:"可遮蔽视线（高地墙）；本身无伤害加成"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"水域"}),r.jsx("td",{children:"3"}),r.jsx("td",{children:"在其中发射能量武器时伤害 −1"})]})]})]}),r.jsx("p",{className:"rules-note",children:"* 高度差代价：进入比当前格海拔更高的地形时，额外消耗等同于高度差的移动力（例如从海拔0进入海拔2，共消耗 1+2=3 点）。下坡无额外代价。"}),r.jsx("p",{className:"rules-note",children:"注：机体不能占据对手所在的格子。机雷指示物会在各个时机结束时，若所在格有机体则翻开并结算。"})]}),r.jsxs("section",{className:"rules-section",children:[r.jsx("h2",{className:"rules-section__title",children:"射程、视线与距离衰减"}),r.jsxs("p",{children:["距离使用",r.jsx("b",{children:"切比雪夫距离"}),"（8方向棋格距离：行差与列差的最大值）。 射击牌有最小射程和最大射程，目标须在此范围内。"]}),r.jsx("p",{children:"视线（LOS）检查规则："}),r.jsxs("ul",{className:"rules-list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"森林不阻断视线，"}),"但能为处于其中的机体提供掩护（受击伤害-1）。"]}),r.jsxs("li",{children:[r.jsx("b",{children:"高地阻断："}),"若射线上存在海拔高于攻防双方的高地格，则视线被遮挡，无法射击。"]}),r.jsx("li",{children:"其他地形（平地、砂地、废墟、水域）均不影响视线。"})]}),r.jsxs("p",{children:[r.jsx("b",{children:"距离衰减（部分武器）："}),'部分武器卡设有"最佳射程"，超出最佳射程后每多1格伤害递减（递减值见卡面），但不超过最大射程仍可开火。']})]}),r.jsxs("section",{className:"rules-section",children:[r.jsx("h2",{className:"rules-section__title",children:"伤害与摧毁"}),r.jsxs("p",{children:["攻击命中后，系统计算最终伤害值，然后进入",r.jsx("b",{children:"伤害分配"}),"。伤害来源不同，分配规则不同："]}),r.jsx("p",{children:r.jsx("b",{children:"🎯 射击伤害（规则 11-2-2）："})}),r.jsxs("ul",{className:"rules-list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"先"}),"从表面朝上的卡牌中自由选择破坏：手牌、辅助区、",r.jsx("b",{children:"已布局的牌（主要阶段1/2）"}),"。每次选1张，直至选满伤害值或表面朝上卡牌耗尽。"]}),r.jsxs("li",{children:["表面朝上卡牌不足时，",r.jsx("b",{children:"剩余伤害从牌组顶端自动破坏"}),'（防守方无法选择牌组中的特定卡牌）。也可随时点击"确认"将剩余伤害交由系统从牌组顶端自动处理。']}),r.jsxs("li",{children:[r.jsx("b",{children:"使用了瞄准牌的射击："}),"攻击方额外获得一项权利——可",r.jsx("b",{children:"指定"}),"防守方必须销毁的第一张牌（范围包括牌组）。"]})]}),r.jsx("p",{children:r.jsx("b",{children:"⚔️ 白兵/突击伤害（强制翻牌库顶）："})}),r.jsxs("ul",{className:"rules-list",children:[r.jsx("li",{children:"防守方无权选择，系统直接从牌库顶翻牌销毁，数量等于最终伤害值。"}),r.jsx("li",{children:"牌库翻完后从废弃区重洗继续。若牌组与废弃区均耗尽，剩余伤害切换为防守方自选模式（可从手牌、辅助区、已布局的牌中选择）。"})]}),r.jsx("p",{children:r.jsx("b",{children:"💣 爆弹标记诱爆："})}),r.jsxs("ul",{className:"rules-list",children:[r.jsxs("li",{children:["先完成本次基础伤害，再统计其中被摧毁的",r.jsx("b",{children:"爆弹标记（💣）"}),"卡数量。"]}),r.jsx("li",{children:"之后从牌库顶逐张翻开对应数量的牌：有爆弹标记的直接摧毁并继续追加检查，无爆弹标记的放入废弃区。"}),r.jsx("li",{children:'注意：◆标记是区分"改"型变种卡的符号，与诱爆无关。'})]}),r.jsx("p",{className:"rules-note",children:"注：若牌组耗尽，继续从废弃区（重新洗混后）取牌销毁。"})]}),r.jsxs("section",{className:"rules-section",children:[r.jsx("h2",{className:"rules-section__title",children:"卡牌类型"}),r.jsxs("table",{className:"rules-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"类型"}),r.jsx("th",{children:"使用时机"}),r.jsx("th",{children:"说明"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"移动牌"}),r.jsx("td",{children:"移动时机"}),r.jsx("td",{children:"按牌面数值在4方向移动；移动中可自由转向，但必须尽量走满且不能重进已进入过的格子"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"射击牌"}),r.jsx("td",{children:"射击时机"}),r.jsx("td",{children:"远程攻击，需在机头前方扇区内、射程内且视线通畅；部分武器具有距离衰减"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"近战牌"}),r.jsx("td",{children:"近战时机"}),r.jsx("td",{children:"攻击相邻格（切比雪夫距离=1）的敌方，无扇区限制"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"突击牌"}),r.jsx("td",{children:"特殊时机"}),r.jsx("td",{children:"沿正面直线进行突击移动并尽量走满；结束后若正面相邻存在目标，则结算突击与反伤"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"护甲牌"}),r.jsx("td",{children:"被动防御"}),r.jsx("td",{children:"布局后，本段受到攻击时每张护甲牌抵消1点伤害"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"瞄准牌"}),r.jsx("td",{children:"攻击辅助"}),r.jsxs("td",{children:["布置于",r.jsx("b",{children:"主要阶段1"}),"时，可调整朝向，并使",r.jsx("b",{children:"主要阶段2"}),"的射击/近战/突击攻击伤害+1，且攻方可指定防守方销毁目标"]})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"机雷牌"}),r.jsx("td",{children:"特殊时机"}),r.jsx("td",{children:"在机体周围8格放置4个隐藏指示物，其中真雷2个、替身雷2个；各时机结束时若有机体停在其上，则翻开并弃置，只有真雷会造成伤害"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"特殊牌"}),r.jsx("td",{children:"—"}),r.jsx("td",{children:"以卡面说明为准；替身雷本身不是可单独布局的行动牌，而是机雷牌放出的隐藏指示物"})]})]})]})]}),r.jsxs("section",{className:"rules-section",children:[r.jsx("h2",{className:"rules-section__title",children:"胜利条件"}),r.jsx("p",{children:"每次伤害结算结束后，系统自动检查双方是否满足败北条件。满足任意一条即判败："}),r.jsxs("ul",{className:"rules-list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"牌组耗尽："}),"所有",r.jsx("b",{children:"尚未被破坏"}),"的牌（牌库 + 手牌 + 辅助区 + 废弃区 + ",r.jsx("b",{children:"已布局的牌"}),"）总数 ≤ 3"]}),r.jsxs("li",{children:[r.jsx("b",{children:"战力耗尽："}),"所有仍能对敌方造成伤害的牌均已失去，包括",r.jsx("b",{children:"射击牌、近战牌、突击牌、机雷牌"}),"等。"]})]}),r.jsxs("ul",{className:"rules-list",children:[r.jsxs("li",{children:["若对手率先满足败北条件 → ",r.jsx("b",{children:"己方获胜"})]}),r.jsxs("li",{children:["若双方同时满足 → ",r.jsx("b",{children:"平局"})]})]})]}),r.jsxs("section",{className:"rules-section",children:[r.jsx("h2",{className:"rules-section__title",children:"高级效果速查"}),r.jsxs("table",{className:"rules-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"效果"}),r.jsx("th",{children:"触发条件"}),r.jsx("th",{children:"具体效果"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"瞄准"}),r.jsx("td",{children:"主要阶段1布局瞄准牌 + 主要阶段2布局攻击牌"}),r.jsxs("td",{children:["主要阶段2的射击/近战/突击伤害+1；且攻方可指定防守方",r.jsx("b",{children:"必须"}),"销毁的第一张牌"]})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"装甲"}),r.jsx("td",{children:"防守方在被攻击段落布局了护甲牌"}),r.jsx("td",{children:"每张护甲牌抵消1点最终伤害（下限为0）；已布局的装甲可在任意受伤时机启用，且可跨第1/2阶段使用"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"森林掩护"}),r.jsx("td",{children:"防守方站在森林格中被射击"}),r.jsx("td",{children:"受到的射击伤害 −1（近战/突击无此效果）"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"水域衰减"}),r.jsx("td",{children:"攻击方站在水域中使用能量武器射击"}),r.jsx("td",{children:"射击伤害 −1"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"突击冲锋"}),r.jsx("td",{children:"突击牌布局后在特殊时机选择目标"}),r.jsx("td",{children:"沿机体正面方向直线冲锋，并尽量用完突击移动力；若结束后正面相邻存在目标，则结算突击伤害与反伤"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"机雷部署"}),r.jsx("td",{children:"机雷牌布局后在特殊时机选择 4 个不重叠的周围格"}),r.jsx("td",{children:"放置 2 个真雷与 2 个替身雷隐藏指示物；各时机结束时若格上有机体则翻开并弃置，只有真雷造成机雷伤害"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"💣 爆弹诱爆"}),r.jsx("td",{children:"带爆弹标记（💣）的牌被摧毁时"}),r.jsx("td",{children:"在基础伤害结算后，从牌库顶进行诱爆检查；翻出的爆弹牌会继续连锁诱爆，非爆弹牌进入废弃区"})]})]})]})]}),r.jsxs("section",{className:"rules-section rules-section--diff",children:[r.jsx("h2",{className:"rules-section__title rules-section__title--diff",children:"⚠ 本版本与官方原版的已知差异"}),r.jsx("p",{className:"rules-note",children:"以下是当前网页版仍保留的已知差异。已在上文实现并对齐的规则，不再重复列在这里。"}),r.jsxs("table",{className:"rules-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"规则项"}),r.jsx("th",{children:"本版本实现"}),r.jsx("th",{children:"官方原版规则"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"机雷机制"}),r.jsx("td",{children:"已实现隐藏指示物、真雷/替身雷各 2 个、各时机结束时翻开结算；但线上/本地共享状态下仍不能像实体局那样彻底隔离隐藏信息"}),r.jsx("td",{children:"实体原版使用实体指示物隐藏真伪，信息保密性更强"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"回避值定义"}),r.jsx("td",{children:"当前仅用于抽牌数量展示；完整原版定义仍待补全规则书正文后再核定"}),r.jsx("td",{children:"仓库内现有速查页与大会规程未直接写明完整判定流程，需要以完整规则书/FAQ正文继续确认"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"先制平局"}),r.jsx("td",{children:"先制值相同时玩家1固定优先"}),r.jsx("td",{children:"应由队伍标记物编号（チームチット番号）决定"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"对战模式"}),r.jsx("td",{children:"本机热座 1v1"}),r.jsx("td",{children:"官方支持最多 4v4 双人组队对战"})]})]})]})]}),r.jsxs("section",{className:"rules-section rules-section--diff",children:[r.jsx("h2",{className:"rules-section__title rules-section__title--diff",children:"参考资料与完整规则书译注"}),r.jsx("p",{className:"rules-note",children:"当前仓库内可直接核对的原始资料，主要包括两张速查页和一份大会规程。为了避免把二次整理文案误当成原版规则， 本页后续补充完整规则时，将优先以这些资料和后续补入的完整规则书正文为准。"}),r.jsxs("table",{className:"rules-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"资料"}),r.jsx("th",{children:"当前用途"}),r.jsx("th",{children:"状态"})]})}),r.jsxs("tbody",{children:[r.jsxs("tr",{children:[r.jsx("td",{children:"速查页 1 / 2"}),r.jsx("td",{children:"核对移动、朝向、突击、伤害处理等基础流程"}),r.jsx("td",{children:"已纳入当前网页规则整理"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"大会规程 Ver.3.0"}),r.jsx("td",{children:"补充射击伤害顺序、诱爆检查、胜负判定等条文"}),r.jsx("td",{children:"已纳入当前网页规则整理"})]}),r.jsxs("tr",{children:[r.jsx("td",{children:"完整规则书正文"}),r.jsx("td",{children:"用于核定回避值、命中判定、FAQ 优先级等未完全确认事项"}),r.jsx("td",{children:"本仓库尚未收录可直接翻译的正文文本；此区块预留为后续补充入口"})]})]})]}),r.jsx("p",{className:"rules-note",children:"当前结论：项目里关于“回避值”的实现和说明仍应视为待核定项。等完整规则书正文或官方 FAQ 正文补入仓库后， 可以直接在本区块追加逐条译注，而不必再回头重做整页结构。"})]})]}),r.jsx("style",{children:xv})]})}const xv=`
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
`;function bv({onBack:e}){const[n,t]=I.useState("maps");return r.jsxs("div",{className:"data-page",children:[r.jsxs("div",{className:"data-page__header",children:[r.jsx("button",{className:"data-page__back",onClick:e,children:"← 返回"}),r.jsx("h1",{className:"data-page__title",children:"游戏资料"})]}),r.jsxs("div",{className:"data-page__tabs",children:[r.jsx("button",{className:`data-tab ${n==="maps"?"data-tab--active":""}`,onClick:()=>t("maps"),children:"地图"}),r.jsx("button",{className:`data-tab ${n==="units"?"data-tab--active":""}`,onClick:()=>t("units"),children:"机体"}),r.jsx("button",{className:`data-tab ${n==="cards"?"data-tab--active":""}`,onClick:()=>t("cards"),children:"卡牌"})]}),r.jsxs("div",{className:"data-page__content",children:[n==="maps"&&r.jsx(vv,{}),n==="units"&&r.jsx(Iv,{}),n==="cards"&&r.jsx(kv,{})]}),r.jsx("style",{children:Sv})]})}const Ym={plain:"#8fbc5a",sand:"#d4b483",rubble:"#9e8f7a",forest:"#2d7a2d",water:"#4477cc",highland:"#c4955a"},Xm={plain:"平地",sand:"沙地",rubble:"瓦砾",forest:"森林",water:"水域",highland:"高地"};function vv(){const[e,n]=I.useState(Ye[0].id),t=Ye.find(a=>a.id===e);return r.jsxs("div",{className:"maps-panel",children:[r.jsx("div",{className:"maps-panel__selector",children:Ye.map(a=>r.jsx("button",{className:`map-sel-btn ${a.id===e?"map-sel-btn--active":""}`,onClick:()=>n(a.id),children:a.nameCn},a.id))}),r.jsxs("div",{className:"maps-panel__body",children:[r.jsx(yv,{map:t}),r.jsx(_v,{})]})]})}function yv({map:e}){const n=new Set(e.startZones[0].map(a=>`${a.row},${a.col}`)),t=new Set(e.startZones[1].map(a=>`${a.row},${a.col}`));return r.jsxs("div",{className:"mini-map-wrapper",children:[r.jsxs("div",{className:"mini-map__title",children:[e.nameCn,"（",e.width,"×",e.height,"）"]}),r.jsx("div",{className:"mini-map__grid",style:{gridTemplateColumns:`repeat(${e.width}, 28px)`,gridTemplateRows:`repeat(${e.height}, 28px)`},children:e.cells.flatMap((a,o)=>a.map((s,i)=>{const l=`${o},${i}`,d=n.has(l),u=t.has(l),f=Ym[s.terrain]??"#888";return r.jsxs("div",{className:"mini-map__cell",style:{background:f},title:`(${i},${o}) ${Xm[s.terrain]??s.terrain}${s.terrain==="highland"?" Lv"+s.elevation:""}`,children:[d&&r.jsx("span",{className:"mini-map__marker mini-map__marker--p1",children:"①"}),u&&r.jsx("span",{className:"mini-map__marker mini-map__marker--p2",children:"②"}),s.terrain==="highland"&&r.jsx("span",{className:"mini-map__elev",children:s.elevation})]},l)}))})]})}function _v(){return r.jsxs("div",{className:"map-legend",children:[r.jsx("div",{className:"map-legend__title",children:"地形图例"}),Object.entries(Xm).map(([e,n])=>r.jsxs("div",{className:"map-legend__item",children:[r.jsx("span",{className:"map-legend__swatch",style:{background:Ym[e]}}),r.jsx("span",{children:n})]},e)),r.jsxs("div",{className:"map-legend__item",children:[r.jsx("span",{className:"map-legend__marker-demo mini-map__marker--p1",children:"①"}),r.jsx("span",{children:"玩家1出发区"})]}),r.jsxs("div",{className:"map-legend__item",children:[r.jsx("span",{className:"map-legend__marker-demo mini-map__marker--p2",children:"②"}),r.jsx("span",{children:"玩家2出发区"})]}),r.jsx("div",{className:"map-legend__note",children:"高地格显示海拔等级（1–3），移动力消耗与平地相同，提供射程视野优势。"})]})}function Iv(){return r.jsxs("div",{className:"units-panel",children:[r.jsxs("table",{className:"units-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"机体"}),r.jsx("th",{children:"日文名"}),r.jsx("th",{children:"型号"}),r.jsx("th",{children:"先制"}),r.jsx("th",{children:"移动"}),r.jsx("th",{children:"回避"}),r.jsx("th",{children:"突击"}),r.jsx("th",{children:"防突击"})]})}),r.jsx("tbody",{children:[...q].sort((e,n)=>e.initiative-n.initiative).map(e=>r.jsxs("tr",{children:[r.jsxs("td",{className:"units-table__name",children:[r.jsx("img",{src:`/assets/tokens/${e.tokenId}`,alt:e.nameCn,className:"units-table__token",onError:n=>{n.target.style.display="none"}}),e.nameCn]}),r.jsx("td",{className:"units-table__ja",children:e.nameJa}),r.jsx("td",{children:e.type}),r.jsx("td",{className:"units-table__num",children:e.initiative}),r.jsx("td",{className:"units-table__num",children:e.movement}),r.jsx("td",{className:"units-table__num",children:e.evasion}),r.jsx("td",{className:"units-table__num",children:e.assault}),r.jsx("td",{className:"units-table__num",children:e.assaultDef})]},e.id))})]}),r.jsxs("div",{className:"units-note",children:[r.jsx("strong",{children:"型号说明："}),"SS/S/M/L/LL = 体型；軽/中/重 = 重量等级；単座 = 单人驾驶。 先制值越小先手越快，移动值为每回合最大移动格数，回避值为被击中时消耗的伤害数量。"]})]})}const Qm={movement:"移动",ranged:"射击",melee:"近战",special:"特殊",mine:"机雷",aim:"瞄准",armor:"装甲",charge:"突击",auxiliary:"辅助"},qm={movement:"#66ccaa",ranged:"#4499ee",melee:"#ff9944",special:"#cc88ff",mine:"#ff6688",aim:"#ffdd44",armor:"#88aacc",charge:"#ff6644",auxiliary:"#aaaacc"};function kv(){const e=Object.keys(Vt),[n,t]=I.useState(e[0]),a=Vt[n]??[];let o=n;const s=q.find(i=>n.startsWith(i.deckCode));return s&&(n.endsWith("+")?o=`${s.nameCn} (Plus)`:o=s.nameCn),r.jsxs("div",{className:"cards-panel",children:[r.jsx("div",{className:"cards-panel__unit-tabs",children:e.map(i=>{const l=q.find(f=>i.startsWith(f.deckCode));let d=i,u=null;return l&&(u=`/assets/tokens/${l.tokenId}`,d=i.endsWith("+")?`${l.nameCn}+`:l.nameCn),r.jsxs("button",{className:`unit-tab ${i===n?"unit-tab--active":""}`,onClick:()=>t(i),children:[u&&r.jsx("img",{src:u,alt:d,className:"unit-tab__token",onError:f=>{f.target.style.display="none"}}),r.jsx("span",{children:d})]},i)})}),r.jsxs("div",{className:"cards-panel__header",children:[r.jsx("span",{className:"cards-panel__unit-name",children:o}),r.jsxs("span",{className:"cards-panel__count",children:["共 ",a.length," 张卡牌"]})]}),r.jsx("div",{className:"cards-panel__summary",children:r.jsx(jv,{deck:a})}),r.jsx("div",{className:"cards-panel__list",children:a.map(i=>r.jsx(wv,{card:i},i.id))})]})}function jv({deck:e}){const n={};for(const t of e)n[t.actionType]=(n[t.actionType]??0)+1;return r.jsx("div",{className:"card-type-summary",children:Object.entries(n).sort(([t],[a])=>t.localeCompare(a)).map(([t,a])=>r.jsxs("span",{className:"card-type-badge",style:{background:qm[t]??"#888"},children:[Qm[t]??t," ×",a]},t))})}function wv({card:e}){const n=Qm[e.actionType]??e.actionType,t=qm[e.actionType]??"#888",{zoom:a,getZoomHandlers:o}=Ot(),s=`/assets/${e.frontImageId}`;let i="";return e.actionType==="movement"&&e.movementValue!==void 0?i=`移动 ${e.movementValue}`:(e.actionType==="ranged"||e.actionType==="melee")&&e.damage!==void 0?e.rangeMin!==void 0&&e.rangeMax!==void 0?i=`射程 ${e.rangeMin}–${e.rangeMax}  伤害 ${e.damage}`:i=`伤害 ${e.damage}`:e.actionType==="charge"&&e.damage!==void 0&&(i=`伤害 ${e.damage}`),r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"card-row",...o(s),children:[r.jsx("div",{className:"card-row__image-wrap",children:r.jsx("img",{src:s,alt:e.nameCn,className:"card-row__image",onError:l=>{l.target.style.display="none"}})}),r.jsx("span",{className:"card-row__type",style:{background:t},children:n}),r.jsx("span",{className:"card-row__name",children:e.nameCn}),e.effectText?r.jsx("span",{className:"card-row__effect",children:e.effectText}):i&&r.jsx("span",{className:"card-row__detail",children:i}),e.isKaiVariant&&r.jsx("span",{className:"card-row__kai",title:"改型标记",children:"◆"}),e.hasBombIcon&&r.jsx("span",{className:"card-row__bomb",title:"诱爆",children:"💥"})]}),r.jsx(Kt,{zoom:a})]})}const Sv=`
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
`;function us(){const{state:e,getCard:n,exposureMode:t}=Ce(),[a,o]=I.useState(null),{zoom:s,getZoomHandlers:i}=Ot(),l=e.phase==="plotting"?e.plottingStep==="player2"?"player2":"player1":e.activePlayer??"player1",d=a??l,u=e.players[d],f=q.find(h=>h.id===u.unitId),m=t?!1:Cv(e),g={N:"↑北",S:"↓南",E:"→东",W:"←西"}[u.facing]??u.facing;return r.jsxs("div",{className:"mp",children:[r.jsxs("div",{className:"mp__tabs",children:[e.playerIds.map(h=>r.jsxs("button",{className:`mp__tab ${d===h?"mp__tab--active":""}`,onClick:()=>o(x=>x===h?null:h),children:[`P${e.playerIds.indexOf(h)+1}`,h===l&&r.jsx("span",{className:"mp__tab-dot"})]},h)),r.jsx("span",{className:"mp__phase-hint",children:e.phase==="plotting"?"布局中":"行动中"})]}),f&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"mp__header",children:[r.jsx("img",{src:`/assets/tokens/${f.tokenId}`,alt:f.nameCn,className:"mp__token",onError:h=>{h.target.style.opacity="0.3"}}),r.jsxs("div",{className:"mp__header-info",children:[r.jsx("div",{className:"mp__unit-name",children:f.nameCn}),r.jsx("div",{className:"mp__unit-sub",children:f.nameJa}),r.jsxs("div",{className:"mp__pos",children:["格 (",u.position.row,",",u.position.col,")   ",g]})]})]}),r.jsxs("div",{className:"mp__stats",children:[r.jsx(Ha,{label:"先制",value:f.initiative,color:"#f0c040"}),r.jsx(Ha,{label:"移动",value:f.movement,color:"#66ccaa"}),r.jsx(Ha,{label:"回避",value:f.evasion,color:"#88aaff"}),r.jsx(Ha,{label:"突击",value:f.assault,color:"#ff9944"}),r.jsx(Ha,{label:"被突",value:f.assaultDef,color:"#ff6666"})]}),r.jsxs("div",{className:"mp__zones",children:[r.jsxs("div",{className:"mp__zone mp__zone--aux",children:[r.jsx("div",{className:"mp__zone-label",children:"辅助区"}),u.auxiliary.length===0?r.jsx("div",{className:"mp__zone-empty",children:"—"}):(()=>{const h=new Map;for(const p of u.auxiliary){const _=n(p.defId),y=(_==null?void 0:_.nameJa)??p.defId,b=h.get(y);b?(b.totalCount++,p.destroyed||b.liveCount++):h.set(y,{nameCn:(_==null?void 0:_.nameCn)??p.defId,liveCount:p.destroyed?0:1,totalCount:1})}const x=p=>{const _=gn(u,n,"movement"),y=gn(u,n,"melee"),b=gn(u,n,"charge");return p==="バーニア"?_.vernier||y.vernier:p==="ムーブセンサー"?y.moveSensor:p==="ホイール"?_.wheel||b.wheel:!1};return r.jsxs(r.Fragment,{children:[u.auxiliary.map(p=>{const _=n(p.defId),y=_!=null&&_.frontImageId?`/assets/${_.frontImageId}`:null;return r.jsxs("div",{className:`mp__aux-card${p.destroyed?" mp__aux-card--destroyed":""}`,...y?i(y):{},children:[r.jsx("span",{className:"mp__aux-name",children:(_==null?void 0:_.nameCn)??p.defId}),p.destroyed&&r.jsx("span",{className:"mp__aux-dead",children:"✕"})]},p.instanceId)}),r.jsx("div",{className:"mp__aux-badges",children:Array.from(h.entries()).map(([p,_])=>{const y=x(p);return r.jsxs("div",{className:`mp__aux-status ${y?"mp__aux-status--on":"mp__aux-status--off"}`,title:y?"效果激活中":"需要≥2张存活才能激活",children:[y?"✓":"✗"," ",_.nameCn,r.jsxs("span",{className:"mp__aux-count",children:["(",_.liveCount,"/",_.totalCount,")"]})]},p)})})]})})()]}),r.jsxs("div",{className:"mp__counts",children:[r.jsx(io,{icon:"🃏",label:"手牌",count:u.hand.filter(h=>!h.destroyed).length}),r.jsx(io,{icon:"📚",label:"牌库",count:u.deck.filter(h=>!h.destroyed).length}),r.jsx(io,{icon:"♻️",label:"弃牌",count:u.discard.filter(h=>!h.destroyed).length}),r.jsx(io,{icon:"💀",label:"破坏",count:u.destroyedCards.length})]})]}),r.jsxs("div",{className:"mp__plot",children:[r.jsx("div",{className:"mp__plot-label",children:"布局段落"}),r.jsxs("div",{className:"mp__plot-slots",children:[r.jsx(uu,{label:"主要阶段一",card:u.plotSeg1,getCard:n,hidden:m,getZoomHandlers:i}),r.jsx(uu,{label:"主要阶段二",card:u.plotSeg2,getCard:n,hidden:m,getZoomHandlers:i})]})]})]}),r.jsx("style",{children:Nv}),r.jsx(Kt,{zoom:s})]})}function Cv(e,n){return e.phase==="plotting"?e.plottingStep!=="complete":!1}function Ha({label:e,value:n,color:t}){return r.jsxs("div",{className:"mp__stat",children:[r.jsx("span",{className:"mp__stat-lbl",children:e}),r.jsx("span",{className:"mp__stat-val",style:{color:t},children:n})]})}function io({icon:e,label:n,count:t}){return r.jsxs("div",{className:"mp__zcount",children:[r.jsx("span",{className:"mp__zcount-icon",children:e}),r.jsx("span",{className:"mp__zcount-lbl",children:n}),r.jsx("span",{className:"mp__zcount-n",children:t})]})}function uu({label:e,card:n,getCard:t,hidden:a,getZoomHandlers:o}){const s=n?t(n.defId):null,i=s!=null&&s.frontImageId?`/assets/${s.frontImageId}`:null;return r.jsxs("div",{className:"mp__slot",children:[r.jsx("div",{className:"mp__slot-lbl",children:e}),n?a?r.jsx("div",{className:"mp__slot-hidden",children:"???"}):r.jsxs("div",{className:"mp__slot-card",...i?o(i):{},children:[r.jsx("span",{className:"mp__slot-name",children:(s==null?void 0:s.nameCn)??n.defId}),r.jsx("span",{className:`mp__slot-type mp__slot-type--${(s==null?void 0:s.actionType)??"unknown"}`,children:(s==null?void 0:s.actionType)??"?"})]}):r.jsx("div",{className:"mp__slot-empty",children:"— 未布局 —"})]})}const Nv=`
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
`,Tv={slot_1:"存档位 1",slot_2:"存档位 2",slot_3:"存档位 3",slot_4:"存档位 4",slot_5:"存档位 5",auto:"自动存档"},Mv=[...Rx,"auto"];function Ev(e){const n=new Date(e),t=a=>String(a).padStart(2,"0");return`${n.getFullYear()}-${t(n.getMonth()+1)}-${t(n.getDate())} ${t(n.getHours())}:${t(n.getMinutes())}`}function pu({mode:e,onBack:n,onLoad:t,currentState:a,aiConfig:o}){const[s,i]=I.useState([]),[l,d]=I.useState(null),[u,f]=I.useState(null),[m,g]=I.useState(null),[h,x]=I.useState(null);I.useEffect(()=>{i(Ud())},[]);function p(){i(Ud())}function _(S){g(S),setTimeout(()=>g(null),2e3)}function y(S){return s.find(E=>E.slotId===S)}function b(S){if(!a||!o)return;if(y(S)){f(S);return}v(S)}function v(S){if(!(!a||!o))try{Sc(S,a,o,!1),p(),f(null),_("存档已保存")}catch(E){x(E instanceof Error?E.message:"保存失败")}}function j(S){const E=Ox(S);if(!E){x("存档数据已损坏，无法加载");return}t==null||t(E)}function C(S){Kx(S),p(),d(null),_("存档已删除")}const M=e==="save"?"保存游戏":"加载存档";return r.jsxs("div",{className:"sl-screen",children:[r.jsxs("div",{className:"sl-panel",children:[r.jsx("h2",{className:"sl-title",children:M}),r.jsx("div",{className:"sl-slots",children:Mv.map(S=>{const E=y(S),N=e==="save"&&!(S==="auto")&&a!=null;return r.jsxs("div",{className:`sl-slot ${E?"sl-slot--occupied":"sl-slot--empty"}`,children:[r.jsxs("div",{className:"sl-slot__label",children:[Tv[S],(E==null?void 0:E.isAutoSave)&&r.jsx("span",{className:"sl-badge",children:"自动"})]}),E?r.jsxs("div",{className:"sl-slot__info",children:[r.jsxs("span",{className:"sl-slot__units",children:[E.player1Unit," vs ",E.player2Unit]}),r.jsx("span",{className:"sl-slot__map",children:E.mapName}),r.jsxs("span",{className:"sl-slot__round",children:["第 ",E.roundNumber," 回合"]}),r.jsx("span",{className:"sl-slot__time",children:Ev(E.timestamp)})]}):r.jsx("div",{className:"sl-slot__info sl-slot__empty-label",children:"空存档位"}),r.jsxs("div",{className:"sl-slot__actions",children:[e==="load"&&E&&r.jsx("button",{className:"sl-btn sl-btn--primary",onClick:()=>j(S),children:"加载"}),N&&r.jsx("button",{className:"sl-btn sl-btn--primary",onClick:()=>b(S),children:E?"覆盖":"保存"}),E&&(l===S?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"sl-confirm-text",children:"确认删除？"}),r.jsx("button",{className:"sl-btn sl-btn--danger",onClick:()=>C(S),children:"确认"}),r.jsx("button",{className:"sl-btn",onClick:()=>d(null),children:"取消"})]}):r.jsx("button",{className:"sl-btn sl-btn--ghost",onClick:()=>d(S),children:"删除"}))]}),u===S&&r.jsxs("div",{className:"sl-overwrite",children:[r.jsx("span",{children:"覆盖此存档？"}),r.jsx("button",{className:"sl-btn sl-btn--primary",onClick:()=>v(S),children:"确认"}),r.jsx("button",{className:"sl-btn",onClick:()=>f(null),children:"取消"})]})]},S)})}),h&&r.jsxs("div",{className:"sl-error",onClick:()=>x(null),children:["⚠ ",h]}),r.jsx("button",{className:"sl-back-btn",onClick:n,children:"← 返回"})]}),m&&r.jsx("div",{className:"sl-toast",children:m}),r.jsx("style",{children:Dv})]})}const Dv=`
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
`;function $v({currentState:e}){const{rawDispatch:n}=Ce();return I.useEffect(()=>{n({type:"LOAD_GAME",state:e})},[e,n]),r.jsx("div",{style:{height:"100%",width:"100%"},children:r.jsx(Ca,{})})}function Av({currentState:e}){return r.jsx(As,{children:r.jsx(Um,{children:r.jsx($v,{currentState:e})})})}function zv({onBack:e}){const[n,t]=I.useState("list"),[a,o]=I.useState(null);function s(l){o(l),t("playback")}function i(){o(null),t("list")}return n==="playback"&&a?r.jsx(Lv,{replayData:a,onExit:i}):r.jsx(Pv,{onBack:e,onPlay:s})}function ef(e){const n=Yx(e.initialState,e.actions),t=new Blob([n],{type:"text/plain;charset=utf-8"}),a=URL.createObjectURL(t),o=document.createElement("a");o.href=a;const s=new Date(e.metadata.timestamp),i=d=>String(d).padStart(2,"0"),l=`replay_${e.metadata.player1Unit}_vs_${e.metadata.player2Unit}_${s.getFullYear()}${i(s.getMonth()+1)}${i(s.getDate())}_${i(s.getHours())}${i(s.getMinutes())}.txt`;o.download=l,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(a)}function Pv({onBack:e,onPlay:n}){const[t,a]=I.useState([]),[o,s]=I.useState(null),[i,l]=I.useState(null);I.useEffect(()=>{a(Wd())},[]);function d(m){const g=Zd(m);if(!g){l("录像数据已损坏，无法播放");return}n(g)}function u(m){const g=Zd(m);if(!g){l("录像数据已损坏，无法导出");return}ef(g)}function f(m){Fx(m),a(Wd()),s(null)}return r.jsxs("div",{className:"rp-screen",children:[r.jsxs("div",{className:"rp-panel",children:[r.jsx("h2",{className:"rp-title",children:"回放录像"}),t.length===0?r.jsx("div",{className:"rp-empty",children:"暂无保存的录像"}):r.jsx("div",{className:"rp-list",children:t.map(m=>r.jsxs("div",{className:"rp-item",children:[r.jsxs("div",{className:"rp-item__info",children:[r.jsxs("span",{className:"rp-item__units",children:[m.player1Unit," vs ",m.player2Unit]}),r.jsx("span",{className:"rp-item__map",children:m.mapName}),r.jsxs("span",{className:"rp-item__rounds",children:[m.totalRounds," 回合"]}),m.winner&&r.jsx("span",{className:"rp-item__winner",children:m.winner==="draw"?"平局":`${m.winner==="player1"?"P1":"P2"} 获胜`}),r.jsx("span",{className:"rp-item__time",children:Ov(m.timestamp)})]}),r.jsxs("div",{className:"rp-item__actions",children:[r.jsx("button",{className:"rp-btn rp-btn--primary",onClick:()=>d(m.replayId),children:"▶ 播放"}),r.jsx("button",{className:"rp-btn",onClick:()=>u(m.replayId),children:"导出日志"}),o===m.replayId?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"rp-confirm",children:"确认删除？"}),r.jsx("button",{className:"rp-btn rp-btn--danger",onClick:()=>f(m.replayId),children:"确认"}),r.jsx("button",{className:"rp-btn",onClick:()=>s(null),children:"取消"})]}):r.jsx("button",{className:"rp-btn rp-btn--ghost",onClick:()=>s(m.replayId),children:"删除"})]})]},m.replayId))}),i&&r.jsxs("div",{className:"rp-error",onClick:()=>l(null),children:["⚠ ",i]}),r.jsx("button",{className:"rp-back-btn",onClick:e,children:"← 返回"})]}),r.jsx("style",{children:nf})]})}function Vv(e){const n=[0];let t=e.initialState;for(let a=0;a<e.actions.length;a++){const o=t.phase,s=t.roundNumber,i=t.plottingStep,l=t.currentTiming;t=on(t,e.actions[a]),(t.phase!==o||t.roundNumber!==s||t.plottingStep!==i||t.currentTiming!==l)&&n.push(a+1)}return n[n.length-1]!==e.actions.length&&n.push(e.actions.length),n}function mu(e,n){let t=e.initialState;for(let a=0;a<n&&a<e.actions.length;a++)t=on(t,e.actions[a]);return t}function Rv(e,n){const t=s=>{const i=n.players[s],l=q.find(d=>d.id===i.unitId);return(l==null?void 0:l.nameCn)??s},a=s=>{const i=te(s);return(i==null?void 0:i.nameCn)??s},o=(s,i)=>{const l=n.players[i],u=[...l.deck,...l.hand,...l.auxiliary,...l.discard,...l.destroyedCards,...l.plotSeg1?[l.plotSeg1]:[],...l.plotSeg2?[l.plotSeg2]:[]].find(f=>f.instanceId===s);return u?a(u.defId):s};switch(e.type){case"DRAW_CARDS":return`${t(e.playerId)} 抽取 ${e.count} 张牌`;case"PLOT_CARD":{const s=o(e.instanceId,e.playerId);return`${t(e.playerId)} 布局段落${e.seg}：${s}`}case"CONFIRM_PLOT":return`${t(e.playerId)} 确认布局`;case"ADVANCE_PLOT_STEP":return"布局阶段推进";case"MOVE_UNIT":return`${t(e.playerId)} 移动至 (${e.to.row},${e.to.col})${e.finalFacing?`，面向 ${e.finalFacing}`:""}`;case"ADJUST_FACING":return`${t(e.playerId)} 调整朝向 → ${e.facing}`;case"RESOLVE_RANGED":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动射击`;case"RESOLVE_MELEE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动近战`;case"RESOLVE_CHARGE":return`${t(e.attackerId)} 对 ${t(e.targetId)} 发动突击`;case"PLACE_MINE":{const s=e.placements??(e.to?[{position:e.to,kind:"real"}]:[]);return`${t(e.playerId)} 布置隐藏指示物：${s.map(i=>`(${i.position.row},${i.position.col})`).join("、")}`}case"SELECT_DAMAGE_CARD":{const s=o(e.instanceId,e.playerId);return`${t(e.playerId)} 选择摧毁：${s}`}case"CONFIRM_DAMAGE_SELECTION":return`${t(e.playerId)} 确认伤害结算`;case"SKIP_ACTION":return"跳过行动";case"ADVANCE_TIMING":return"推进时序";case"ADVANCE_PHASE":return"推进阶段";case"MELEE_SENSOR_MOVE":return`${t(e.playerId)} 近战传感器移动至 (${e.to.row},${e.to.col})`;case"START_PLOTTING":return"进入布局阶段";default:return e.type}}function fu({player:e,label:n}){const t=q.find(l=>l.id===e.unitId),{zoom:a,getZoomHandlers:o}=Ot(),s=l=>l.filter(d=>!d.destroyed),i={N:"↑北",S:"↓南",E:"→东",W:"←西"}[e.facing]??e.facing;return r.jsxs("div",{className:"rpp",children:[r.jsxs("div",{className:"rpp__header",children:[t&&r.jsx("img",{src:`/assets/tokens/${t.tokenId}`,alt:t.nameCn,className:"rpp__token",onError:l=>{l.target.style.opacity="0.3"}}),r.jsxs("div",{children:[r.jsxs("div",{className:"rpp__name",children:[n,": ",(t==null?void 0:t.nameCn)??e.unitId]}),r.jsxs("div",{className:"rpp__pos",children:["(",e.position.row,",",e.position.col,") ",i]})]})]}),r.jsxs("div",{className:"rpp__counts",children:[r.jsxs("span",{className:"rpp__count",title:"牌库",children:["📚",s(e.deck).length]}),r.jsxs("span",{className:"rpp__count",title:"手牌",children:["🃏",e.hand.length]}),r.jsxs("span",{className:"rpp__count",title:"弃牌",children:["♻️",e.discard.length]}),r.jsxs("span",{className:"rpp__count",title:"破坏",children:["💀",e.destroyedCards.length]})]}),r.jsx("div",{className:"rpp__section-label",children:"布局"}),r.jsxs("div",{className:"rpp__plot-row",children:[r.jsx(gu,{label:"阶段1",card:e.plotSeg1,getZoomHandlers:o}),r.jsx(gu,{label:"阶段2",card:e.plotSeg2,getZoomHandlers:o})]}),r.jsxs("div",{className:"rpp__section-label",children:["手牌 (",e.hand.length,")"]}),r.jsx("div",{className:"rpp__card-list",children:e.hand.length===0?r.jsx("span",{className:"rpp__empty",children:"—"}):e.hand.map(l=>r.jsx(hu,{card:l,getZoomHandlers:o},l.instanceId))}),e.auxiliary.length>0&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"rpp__section-label",children:["辅助 (",s(e.auxiliary).length,"/",e.auxiliary.length,")"]}),r.jsx("div",{className:"rpp__card-list",children:e.auxiliary.map(l=>r.jsx(hu,{card:l,getZoomHandlers:o},l.instanceId))})]}),r.jsx(Kt,{zoom:a})]})}function gu({label:e,card:n,getZoomHandlers:t}){const a=n?te(n.defId):null,o=a!=null&&a.frontImageId?`/assets/${a.frontImageId}`:null,i=a?{movement:"#66ccaa",ranged:"#ff9944",melee:"#ff6060",charge:"#ff4444",aim:"#f0c040",armor:"#88aaff",mine:"#cc88ff",special:"#aaa",auxiliary:"#77ddaa"}[a.actionType]??"#888":"#555";return r.jsxs("div",{className:"rpp__plot-slot",children:[r.jsx("div",{className:"rpp__plot-label",children:e}),n&&a?r.jsxs("div",{className:"rpp__plot-card",style:{borderColor:i},...o?t(o):{},children:[r.jsx("span",{className:"rpp__plot-type",style:{color:i},children:a.actionType}),r.jsx("span",{className:"rpp__plot-name",children:a.nameCn})]}):r.jsx("div",{className:"rpp__plot-empty",children:"—"})]})}function hu({card:e,getZoomHandlers:n}){const t=te(e.defId),a=t!=null&&t.frontImageId?`/assets/${t.frontImageId}`:null,s=t?{movement:"#66ccaa",ranged:"#ff9944",melee:"#ff6060",charge:"#ff4444",aim:"#f0c040",armor:"#88aaff",mine:"#cc88ff",special:"#aaa",auxiliary:"#77ddaa"}[t.actionType]??"#888":"#555";return r.jsxs("span",{className:`rpp__chip${e.destroyed?" rpp__chip--dead":""}`,style:{borderColor:s},...a?n(a):{},children:[(t==null?void 0:t.nameCn)??e.defId,e.destroyed&&r.jsx("span",{className:"rpp__chip-x",children:"✕"})]})}function Lv({replayData:e,onExit:n}){const t=I.useMemo(()=>Vv(e),[e]),a=e.actions.length,[o,s]=I.useState(0),[i,l]=I.useState(e.initialState),[d,u]=I.useState(!1),[f,m]=I.useState(1),[g,h]=I.useState(""),[x,p]=I.useState(e.initialState.log.length),_=I.useRef(null),y=I.useRef(i),b=I.useRef(o);y.current=i,b.current=o;const v=I.useRef(null);I.useEffect(()=>{var V;(V=v.current)==null||V.scrollIntoView({behavior:"smooth"})},[i.log.length]);const j=I.useCallback(()=>{_.current!=null&&(clearInterval(_.current),_.current=null)},[]),C=I.useCallback(()=>{const V=b.current;if(V>=a)return j(),u(!1),!1;const k=e.actions[V],$=on(y.current,k);return p(y.current.log.length),l($),s(V+1),!0},[e,a,j]),M=I.useCallback(()=>{const V=b.current;if(V>=a)return;const $=t.find(B=>B>V)??a;let J=y.current;const P=J.log.length;for(let B=V;B<$;B++)J=on(J,e.actions[B]);p(P),l(J),s($),$>=a&&(j(),u(!1))},[e,a,t,j]),S=I.useCallback(()=>{const V=b.current,k=t.filter(P=>P<V),$=k.length>=2?k[k.length-2]:0,J=mu(e,$);p(0),l(J),s($)},[e,t]);I.useEffect(()=>(j(),d&&(_.current=setInterval(()=>{if(b.current>=a){j(),u(!1);return}M()},Math.round(1500/f))),j),[d,f,M,a,j]);function E(){u(V=>!V)}function z(){u(!1),p(0),l(e.initialState),s(0)}function N(){const V=parseInt(g,10);if(isNaN(V)||V<1)return;u(!1);const{state:k,actionIndex:$}=Hx(e,V);p(0),l(k),s($)}const R=o>0?e.actions[o-1]:null,D=R?Rv(R,o>=2?mu(e,o-1):e.initialState):null,K=o>=a,A=o===0,L={pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"行动阶段1",action_seg2:"行动阶段2",cleanup:"清理阶段",game_over:"游戏结束"},W={movement:"移动",ranged:"射击",melee:"近战",special:"特殊"};return r.jsxs("div",{className:"rpv-screen",children:[r.jsxs("div",{className:"rpv-topbar",children:[r.jsxs("span",{className:"rpv-topbar__round",children:["第 ",i.roundNumber," 回合"]}),r.jsx("span",{className:"rpv-topbar__phase",children:L[i.phase]??i.phase}),i.currentTiming&&r.jsxs("span",{className:"rpv-topbar__timing",children:["▶ ",W[i.currentTiming]]}),r.jsx("span",{style:{flex:1}}),r.jsx("button",{className:"rpv-btn",onClick:z,disabled:A,title:"回到开始",children:"⏮"}),r.jsx("button",{className:"rpv-btn",onClick:S,disabled:A,title:"上一阶段",children:"◀◀"}),r.jsx("button",{className:"rpv-btn",onClick:()=>{u(!1),C()},disabled:K,title:"单步前进（单个操作）",children:"▶|"}),r.jsx("button",{className:"rpv-btn",onClick:()=>{u(!1),M()},disabled:K,title:"下一阶段",children:"▶▶"}),r.jsx("button",{className:"rpv-btn rpv-btn--primary",onClick:E,children:d?"⏸ 暂停":"▶ 自动"}),r.jsx("span",{className:"rpv-sep"}),r.jsx("span",{className:"rpv-label",children:"速度"}),[1,2,4].map(V=>r.jsxs("button",{className:`rpv-btn rpv-btn--speed ${f===V?"rpv-btn--active":""}`,onClick:()=>m(V),children:[V,"x"]},V)),r.jsx("span",{className:"rpv-sep"}),r.jsx("span",{className:"rpv-label",children:"跳至"}),r.jsx("input",{className:"rpv-input",type:"number",min:1,value:g,onChange:V=>h(V.target.value),onKeyDown:V=>V.key==="Enter"&&N(),placeholder:"回合"}),r.jsx("button",{className:"rpv-btn",onClick:N,children:"跳转"}),r.jsx("span",{className:"rpv-sep"}),r.jsxs("span",{className:"rpv-progress",children:[o,"/",a]}),r.jsx("button",{className:"rpv-btn",onClick:()=>ef(e),title:"导出完整分析日志",children:"导出日志"}),r.jsx("button",{className:"rpv-btn rpv-btn--exit",onClick:n,children:"✕ 退出"})]}),r.jsxs("div",{className:"rpv-main",children:[r.jsxs("div",{className:"rpv-map-col",children:[r.jsx("div",{className:"rpv-map-area",children:r.jsx(Av,{currentState:i})}),D&&r.jsxs("div",{className:"rpv-action-desc",children:["▶ ",D]}),r.jsxs("div",{className:"rpv-log",children:[r.jsx("div",{className:"rpv-log__header",children:"行动日志"}),r.jsxs("div",{className:"rpv-log__entries",children:[i.log.filter(V=>!V.startsWith("[DBG]")).map((V,k)=>{const $=k>=x;return r.jsx("div",{className:`rpv-log__entry ${Kv(V)}${$?" rpv-log__entry--new":""}`,children:V},k)}),r.jsx("div",{ref:v})]})]})]}),r.jsxs("div",{className:"rpv-info-col",children:[r.jsx(fu,{player:i.players.player1,label:"P1"}),r.jsx("div",{className:"rpv-info-divider"}),r.jsx(fu,{player:i.players.player2,label:"P2"})]})]}),r.jsx("style",{children:nf}),r.jsx("style",{children:Jv})]})}function Ov(e){const n=new Date(e),t=a=>String(a).padStart(2,"0");return`${n.getFullYear()}-${t(n.getMonth()+1)}-${t(n.getDate())} ${t(n.getHours())}:${t(n.getMinutes())}`}function Kv(e){return e.startsWith("===")?"rpv-log__entry--round":e.startsWith("---")?"rpv-log__entry--sep":e.includes("发动")||e.includes("攻击")?"rpv-log__entry--attack":e.includes("摧毁")||e.includes("连锁")||e.includes("诱爆")?"rpv-log__entry--damage":e.includes("移动到")?"rpv-log__entry--move":e.includes("获胜")||e.includes("击破")||e.includes("平局")?"rpv-log__entry--victory":""}const nf=`
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
`,Jv=`
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
`,Bv=50;function tf(){return{terrain:"plain",elevation:0,variant:0}}function af(e,n){const t=Array.from({length:n},()=>Array.from({length:e},()=>tf()));return{id:`custom_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,nameJa:"新しいマップ",nameCn:"新地图",width:e,height:n,cells:t,startZones:{0:[{row:0,col:Math.floor(e/2)}],1:[{row:n-1,col:Math.floor(e/2)}]},maxPlayers:2,maxTeams:2}}function Il(e){return{map:e??af(7,11),activeTool:"terrain",selectedTerrain:"plain",selectedElevation:1,selectedVariant:0,selectedZoneTeam:0,brushSize:1,isDirty:!1,undoStack:[],redoStack:[],showCoords:!1}}function So(e){return{...e,cells:e.cells.map(n=>n.map(t=>({...t}))),startZones:Object.fromEntries(Object.entries(e.startZones).map(([n,t])=>[n,t.map(a=>({...a}))]))}}function yt(e){const n=[...e.undoStack,So(e.map)];return n.length>Bv&&n.shift(),{...e,undoStack:n,redoStack:[],isDirty:!0}}function xu(e,n,t,a,o,s){if(n<0||n>=e.height||t<0||t>=e.width)return e;const i=e.cells.map((l,d)=>d===n?l.map((u,f)=>f===t?{terrain:a,elevation:a==="highland"?o:0,variant:a==="highland"?o:s}:u):l);return{...e,cells:i}}function Fv(e,n){switch(n.type){case"SET_TOOL":return{...e,activeTool:n.tool};case"SET_TERRAIN":return{...e,selectedTerrain:n.terrain,activeTool:"terrain"};case"SET_ELEVATION":return{...e,selectedElevation:n.elevation};case"SET_VARIANT":return{...e,selectedVariant:n.variant};case"SET_BRUSH_SIZE":return{...e,brushSize:n.size};case"SET_ZONE_TEAM":return{...e,selectedZoneTeam:n.team};case"TOGGLE_COORDS":return{...e,showCoords:!e.showCoords};case"PAINT_CELL":{const t=yt(e),a=xu(t.map,n.row,n.col,t.selectedTerrain,t.selectedElevation,t.selectedVariant);return{...t,map:a}}case"PAINT_AREA":{const t=yt(e);let a=t.map;for(const{row:o,col:s}of n.cells)a=xu(a,o,s,t.selectedTerrain,t.selectedElevation,t.selectedVariant);return{...t,map:a}}case"ADD_ZONE_CELL":{const t=yt(e),{team:a,position:o}=n,s=t.map.startZones[a]??[];if(s.some(l=>l.row===o.row&&l.col===o.col))return e;const i={...t.map.startZones,[a]:[...s,o]};return{...t,map:{...t.map,startZones:i}}}case"REMOVE_ZONE_CELL":{const t=yt(e),{team:a,position:o}=n,i=(t.map.startZones[a]??[]).filter(d=>d.row!==o.row||d.col!==o.col),l={...t.map.startZones,[a]:i};return{...t,map:{...t.map,startZones:l}}}case"CLEAR_ZONE":{const t=yt(e),a={...t.map.startZones,[n.team]:[]};return{...t,map:{...t.map,startZones:a}}}case"SET_MAP_META":{const t=yt(e),a={...t.map};return n.nameJa!==void 0&&(a.nameJa=n.nameJa),n.nameCn!==void 0&&(a.nameCn=n.nameCn),n.maxPlayers!==void 0&&(a.maxPlayers=n.maxPlayers),n.maxTeams!==void 0&&(a.maxTeams=n.maxTeams),{...t,map:a}}case"RESIZE_MAP":{const t=yt(e),{newWidth:a,newHeight:o}=n,s=Array.from({length:o},(l,d)=>Array.from({length:a},(u,f)=>d<t.map.height&&f<t.map.width?{...t.map.cells[d][f]}:tf())),i={};for(const[l,d]of Object.entries(t.map.startZones))i[Number(l)]=d.filter(u=>u.row<o&&u.col<a);return{...t,map:{...t.map,width:a,height:o,cells:s,startZones:i}}}case"UNDO":{if(e.undoStack.length===0)return e;const t=e.undoStack[e.undoStack.length-1];return{...e,map:t,undoStack:e.undoStack.slice(0,-1),redoStack:[...e.redoStack,So(e.map)],isDirty:!0}}case"REDO":{if(e.redoStack.length===0)return e;const t=e.redoStack[e.redoStack.length-1];return{...e,map:t,redoStack:e.redoStack.slice(0,-1),undoStack:[...e.undoStack,So(e.map)],isDirty:!0}}case"LOAD_MAP":return{...Il(So(n.map)),isDirty:!1};case"NEW_MAP":return Il(af(n.width,n.height));case"MARK_SAVED":return{...e,isDirty:!1};default:return e}}const Nc="em_custom_maps_index",Tc="em_custom_map_",Gv=["plain","sand","rubble","forest","water","highland"];function Mc(){try{const e=localStorage.getItem(Nc);return e?JSON.parse(e):[]}catch{return[]}}function Hv(e){const n={id:e.id,nameCn:e.nameCn,nameJa:e.nameJa,width:e.width,height:e.height,maxPlayers:e.maxPlayers,maxTeams:e.maxTeams,savedAt:Date.now()},t=Mc().filter(a=>a.id!==e.id);t.push(n),localStorage.setItem(Nc,JSON.stringify(t)),localStorage.setItem(Tc+e.id,JSON.stringify(e))}function Uv(e){try{const n=localStorage.getItem(Tc+e);if(!n)return null;const t=JSON.parse(n);return rf(t)?t:null}catch{return null}}function Wv(e){const n=Mc().filter(t=>t.id!==e);localStorage.setItem(Nc,JSON.stringify(n)),localStorage.removeItem(Tc+e)}function Zv(e){return JSON.stringify(e,null,2)}function Yv(e){try{const n=JSON.parse(e);return rf(n)?(n.id=`custom_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,n):null}catch{return null}}function Xv(e){const n=Zv(e),t=new Blob([n],{type:"application/json"}),a=URL.createObjectURL(t),o=document.createElement("a");o.href=a,o.download=`${e.nameCn||e.id}.json`,o.click(),URL.revokeObjectURL(a)}function rf(e){if(!e||typeof e!="object")return!1;const n=e;if(typeof n.id!="string"||(typeof n.nameCn!="string"&&(n.nameCn="未命名"),typeof n.nameJa!="string"&&(n.nameJa=""),typeof n.width!="number"||n.width<3||n.width>25)||typeof n.height!="number"||n.height<3||n.height>25||(typeof n.maxPlayers!="number"&&(n.maxPlayers=2),typeof n.maxTeams!="number"&&(n.maxTeams=2),!Array.isArray(n.cells))||n.cells.length!==n.height)return!1;for(const t of n.cells){if(!Array.isArray(t)||t.length!==n.width)return!1;for(const a of t)if(!a||typeof a!="object"||!Gv.includes(a.terrain))return!1}return(!n.startZones||typeof n.startZones!="object")&&(n.startZones={}),!0}const of=I.createContext(null);function $a(){const e=I.useContext(of);if(!e)throw new Error("useEditor must be inside EditorCtx.Provider");return e}const lo=48,bu=.2,Qv=3,vu=.1,kl=[{terrain:"plain",label:"平原",icon:"🟩"},{terrain:"sand",label:"砂地",icon:"🟨"},{terrain:"rubble",label:"瓦砾",icon:"🟫"},{terrain:"forest",label:"森林",icon:"🌲"},{terrain:"water",label:"水域",icon:"🟦"},{terrain:"highland",label:"高地",icon:"⛰️"}],ps=["#00f0ff","#ff00c8","#00cc88","#ff8800","#6688ff","#cc44ff","#44dddd","#ff4466"];function qv({onBack:e}){const[n,t]=I.useReducer(Fv,void 0,()=>Il()),a=I.useMemo(()=>({state:n,dispatch:t}),[n]);I.useEffect(()=>{function i(l){if((l.ctrlKey||l.metaKey)&&(l.key==="z"&&!l.shiftKey&&(l.preventDefault(),t({type:"UNDO"})),l.key==="z"&&l.shiftKey&&(l.preventDefault(),t({type:"REDO"})),l.key==="y"&&(l.preventDefault(),t({type:"REDO"})),l.key==="s"&&(l.preventDefault(),o())),!l.ctrlKey&&!l.metaKey&&!l.altKey){const d=parseInt(l.key)-1;d>=0&&d<kl.length&&t({type:"SET_TERRAIN",terrain:kl[d].terrain})}}return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[]);function o(){Hv(n.map),t({type:"MARK_SAVED"})}function s(){n.isDirty&&!window.confirm("有未保存的更改，确定要退出吗？")||e()}return r.jsx(of.Provider,{value:a,children:r.jsxs("div",{className:"me__screen",children:[r.jsx(e1,{onBack:s,onSave:o}),r.jsx(t1,{}),r.jsx(we,{id:"me-terrain",title:"地形画笔",initialPos:{x:8,y:56},width:200,minHeight:60,zIndex:20,children:r.jsx(a1,{})}),r.jsx(we,{id:"me-props",title:"地图属性",initialPos:{x:8,y:380},width:200,minHeight:60,zIndex:19,children:r.jsx(r1,{})}),r.jsx(we,{id:"me-zones",title:"出击区域",initialPos:{x:8,y:600},width:200,minHeight:60,zIndex:18,children:r.jsx(o1,{})}),r.jsx("style",{children:s1})]})})}function e1({onBack:e,onSave:n}){const{state:t,dispatch:a}=$a(),[o,s]=I.useState(!1),i=I.useRef(null);function l(){t.isDirty&&!window.confirm("有未保存的更改，确定要新建吗？")||a({type:"NEW_MAP",width:7,height:11})}function d(){Xv(t.map)}function u(){var m;(m=i.current)==null||m.click()}function f(m){var x;const g=(x=m.target.files)==null?void 0:x[0];if(!g)return;const h=new FileReader;h.onload=()=>{const p=Yv(h.result);p?a({type:"LOAD_MAP",map:p}):alert("无效的地图文件")},h.readAsText(g),m.target.value=""}return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:"me__topbar",children:[r.jsx("button",{className:"me__btn",onClick:e,children:"← 返回"}),r.jsx("span",{className:"me__title",children:"地图编辑器"}),r.jsxs("span",{className:"me__map-name",children:[t.map.nameCn," (",t.map.height,"×",t.map.width,")",t.isDirty&&" *"]}),r.jsx("span",{style:{flex:1}}),r.jsx("button",{className:"me__btn",onClick:l,children:"新建"}),r.jsx("button",{className:"me__btn",onClick:()=>s(!0),children:"打开"}),r.jsx("button",{className:"me__btn me__btn--accent",onClick:n,children:"保存"}),r.jsx("button",{className:"me__btn",onClick:d,children:"导出"}),r.jsx("button",{className:"me__btn",onClick:u,children:"导入"}),r.jsx("input",{ref:i,type:"file",accept:".json",style:{display:"none"},onChange:f}),r.jsx("span",{className:"me__sep"}),r.jsx("button",{className:"me__btn",onClick:()=>a({type:"UNDO"}),disabled:t.undoStack.length===0,children:"撤销"}),r.jsx("button",{className:"me__btn",onClick:()=>a({type:"REDO"}),disabled:t.redoStack.length===0,children:"重做"}),r.jsx("button",{className:`me__btn${t.showCoords?" me__btn--active":""}`,onClick:()=>a({type:"TOGGLE_COORDS"}),children:"坐标"})]}),o&&r.jsx(n1,{onClose:()=>s(!1)})]})}function n1({onClose:e}){const{dispatch:n,state:t}=$a(),[a]=I.useState(()=>Mc());function o(l){if(t.isDirty&&!window.confirm("有未保存的更改，确定要打开吗？"))return;const d=Uv(l);d&&(n({type:"LOAD_MAP",map:d}),e())}function s(l){if(t.isDirty&&!window.confirm("有未保存的更改，确定要打开吗？"))return;const d={...l,id:`custom_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,cells:l.cells.map(u=>u.map(f=>({...f}))),startZones:Object.fromEntries(Object.entries(l.startZones).map(([u,f])=>[u,f.map(m=>({...m}))]))};n({type:"LOAD_MAP",map:d}),e()}function i(l){window.confirm("确定删除此地图？")&&(Wv(l),e())}return r.jsx("div",{className:"me__overlay",onClick:e,children:r.jsxs("div",{className:"me__dialog",onClick:l=>l.stopPropagation(),children:[r.jsx("h3",{children:"打开地图"}),a.length>0&&r.jsxs(r.Fragment,{children:[r.jsx("h4",{children:"自定义地图"}),r.jsx("div",{className:"me__dialog-list",children:a.map(l=>r.jsxs("div",{className:"me__dialog-item",children:[r.jsxs("span",{children:[l.nameCn," (",l.height,"×",l.width,")"]}),r.jsx("span",{className:"me__dialog-date",children:new Date(l.savedAt).toLocaleDateString()}),r.jsx("button",{className:"me__btn me__btn--sm",onClick:()=>o(l.id),children:"打开"}),r.jsx("button",{className:"me__btn me__btn--sm me__btn--danger",onClick:()=>i(l.id),children:"删除"})]},l.id))})]}),r.jsx("h4",{children:"内置地图 (作为模板)"}),r.jsx("div",{className:"me__dialog-list",children:Ye.map(l=>r.jsxs("div",{className:"me__dialog-item",children:[r.jsxs("span",{children:[l.nameCn," (",l.height,"×",l.width,")"]}),r.jsx("button",{className:"me__btn me__btn--sm",onClick:()=>s(l),children:"复制"})]},l.id))}),r.jsx("div",{className:"me__dialog-actions",children:r.jsx("button",{className:"me__btn",onClick:e,children:"取消"})})]})})}function t1(){const{state:e,dispatch:n}=$a(),t=I.useRef(null),[a,o]=I.useState({x:0,y:0,scale:1}),s=I.useRef(null),i=I.useRef(!1),l=I.useRef(!1),d=I.useRef(new Set),{map:u,activeTool:f,showCoords:m,selectedZoneTeam:g,brushSize:h}=e,{width:x,height:p}=u;I.useEffect(()=>{const E=t.current;if(!E)return;const z=E.clientWidth,N=E.clientHeight,R=x*lo,D=p*lo;if(!z||!N)return;const K=Math.max(bu,Math.min(1.5,Math.min(z/R,N/D)));o({x:(z-R*K)/2,y:(N-D*K)/2,scale:K})},[x,p]),I.useEffect(()=>{const E=t.current;if(!E)return;const z=N=>{N.preventDefault();const R=N.deltaY<0?vu:-vu;o(D=>({...D,scale:Math.min(Qv,Math.max(bu,D.scale+R))}))};return E.addEventListener("wheel",z,{passive:!1}),()=>E.removeEventListener("wheel",z)},[]);const _=I.useCallback(E=>{E.button!==2&&(s.current={startX:E.clientX,startY:E.clientY,origX:a.x,origY:a.y},i.current=!1,l.current=!1,d.current.clear())},[a.x,a.y]),y=I.useCallback(E=>{if(!s.current)return;const z=E.clientX-s.current.startX,N=E.clientY-s.current.startY;!i.current&&Math.sqrt(z*z+N*N)>5&&(E.buttons===4||E.buttons===2?i.current=!0:f==="terrain"||f==="startZone"||f==="eraseZone"?l.current=!0:i.current=!0),i.current&&o(R=>({...R,x:s.current.origX+z,y:s.current.origY+N}))},[f]),b=I.useCallback(()=>{s.current=null,i.current=!1,l.current=!1,d.current.clear()},[]),v=I.useMemo(()=>{const E=new Map;for(const[z,N]of Object.entries(u.startZones)){const R=Number(z);for(const D of N)E.set(`${D.row},${D.col}`,R)}return E},[u.startZones]);function j(E,z){const N=`${E},${z}`;if(f==="terrain")if(h===1)d.current.has(N)||(d.current.add(N),n({type:"PAINT_CELL",row:E,col:z}));else{const R=[],D=Math.floor(h/2);for(let K=-D;K<=D;K++)for(let A=-D;A<=D;A++){const L=E+K,W=z+A;if(L>=0&&L<p&&W>=0&&W<x){const V=`${L},${W}`;d.current.has(V)||(d.current.add(V),R.push({row:L,col:W}))}}R.length&&n({type:"PAINT_AREA",cells:R})}else if(f==="startZone")n({type:"ADD_ZONE_CELL",team:g,position:{row:E,col:z}});else if(f==="eraseZone"){const R=v.get(N);R!==void 0&&n({type:"REMOVE_ZONE_CELL",team:R,position:{row:E,col:z}})}}const{x:C,y:M,scale:S}=a;return r.jsx("div",{className:"me__viewport",ref:t,onMouseDown:_,onMouseMove:y,onMouseUp:b,onMouseLeave:b,onContextMenu:E=>E.preventDefault(),children:r.jsx("div",{className:"me__grid",style:{transform:`translate(${C}px, ${M}px) scale(${S})`,transformOrigin:"top left",display:"grid",gridTemplateColumns:`repeat(${x}, ${lo}px)`,gridTemplateRows:`repeat(${p}, ${lo}px)`},children:u.cells.flatMap((E,z)=>E.map((N,R)=>{const D=bc(N),K=`${z},${R}`,A=v.get(K),L=A!==void 0?ps[A%ps.length]:"";return r.jsxs("div",{className:`me__cell${A!==void 0?" me__cell--zone":""}`,style:{backgroundImage:`url("${D}")`,backgroundSize:"cover",...A!==void 0?{borderColor:L,boxShadow:`inset 0 0 8px ${L}66`}:{}},onMouseDown:W=>{W.button===0&&!i.current&&j(z,R)},onMouseEnter:()=>{l.current&&j(z,R)},children:[N.terrain==="highland"&&r.jsxs("span",{className:"me__cell-elev",children:["+",N.elevation]}),m&&r.jsxs("span",{className:"me__cell-coord",children:[z,",",R]}),A!==void 0&&r.jsxs("span",{className:"me__cell-zone",style:{color:L},children:["Z",A]})]},K)}))})})}function a1(){const{state:e,dispatch:n}=$a();return r.jsxs("div",{className:"me__palette",children:[r.jsx("div",{className:"me__palette-grid",children:kl.map(({terrain:t,label:a,icon:o},s)=>r.jsxs("button",{className:`me__palette-btn${e.selectedTerrain===t&&e.activeTool==="terrain"?" me__palette-btn--active":""}`,onClick:()=>n({type:"SET_TERRAIN",terrain:t}),title:`${a} (${s+1})`,children:[o," ",a]},t))}),e.selectedTerrain==="highland"&&r.jsxs("div",{className:"me__sub-option",children:[r.jsx("label",{children:"高度:"}),[1,2,3].map(t=>r.jsxs("button",{className:`me__mini-btn${e.selectedElevation===t?" me__mini-btn--active":""}`,onClick:()=>n({type:"SET_ELEVATION",elevation:t}),children:["+",t]},t))]}),e.selectedTerrain!=="highland"&&e.selectedTerrain!=="plain"&&r.jsxs("div",{className:"me__sub-option",children:[r.jsx("label",{children:"变体:"}),[0,1,2,3].map(t=>r.jsx("button",{className:`me__mini-btn${e.selectedVariant===t?" me__mini-btn--active":""}`,onClick:()=>n({type:"SET_VARIANT",variant:t}),children:t},t))]}),r.jsxs("div",{className:"me__sub-option",children:[r.jsx("label",{children:"笔刷:"}),[1,2,3].map(t=>r.jsxs("button",{className:`me__mini-btn${e.brushSize===t?" me__mini-btn--active":""}`,onClick:()=>n({type:"SET_BRUSH_SIZE",size:t}),children:[t,"×",t]},t))]})]})}function r1(){const{state:e,dispatch:n}=$a(),{map:t}=e;return r.jsxs("div",{className:"me__props",children:[r.jsxs("label",{className:"me__prop-row",children:[r.jsx("span",{children:"名称(中)"}),r.jsx("input",{type:"text",value:t.nameCn,onChange:a=>n({type:"SET_MAP_META",nameCn:a.target.value})})]}),r.jsxs("label",{className:"me__prop-row",children:[r.jsx("span",{children:"名称(日)"}),r.jsx("input",{type:"text",value:t.nameJa,onChange:a=>n({type:"SET_MAP_META",nameJa:a.target.value})})]}),r.jsxs("div",{className:"me__prop-row",children:[r.jsx("span",{children:"尺寸"}),r.jsx("input",{type:"number",min:3,max:25,value:t.width,onChange:a=>n({type:"RESIZE_MAP",newWidth:Number(a.target.value),newHeight:t.height}),style:{width:50}}),"×",r.jsx("input",{type:"number",min:3,max:25,value:t.height,onChange:a=>n({type:"RESIZE_MAP",newWidth:t.width,newHeight:Number(a.target.value)}),style:{width:50}})]}),r.jsxs("label",{className:"me__prop-row",children:[r.jsx("span",{children:"最大玩家"}),r.jsx("select",{value:t.maxPlayers,onChange:a=>n({type:"SET_MAP_META",maxPlayers:Number(a.target.value)}),children:[2,3,4,6,8].map(a=>r.jsx("option",{value:a,children:a},a))})]}),r.jsxs("label",{className:"me__prop-row",children:[r.jsx("span",{children:"最大队伍"}),r.jsx("select",{value:t.maxTeams,onChange:a=>n({type:"SET_MAP_META",maxTeams:Number(a.target.value)}),children:Array.from({length:t.maxPlayers},(a,o)=>o+1).filter(a=>a>=2).map(a=>r.jsx("option",{value:a,children:a},a))})]})]})}function o1(){const{state:e,dispatch:n}=$a(),{map:t,activeTool:a,selectedZoneTeam:o}=e;return r.jsxs("div",{className:"me__zones",children:[r.jsxs("div",{className:"me__zones-tools",children:[r.jsx("button",{className:`me__btn me__btn--sm${a==="startZone"?" me__btn--active":""}`,onClick:()=>n({type:"SET_TOOL",tool:"startZone"}),children:"添加点"}),r.jsx("button",{className:`me__btn me__btn--sm${a==="eraseZone"?" me__btn--active":""}`,onClick:()=>n({type:"SET_TOOL",tool:"eraseZone"}),children:"删除点"})]}),Array.from({length:t.maxTeams},(s,i)=>i).map(s=>{const i=t.startZones[s]??[],l=ps[s%ps.length],d=o===s;return r.jsxs("div",{className:`me__zone-row${d?" me__zone-row--active":""}`,style:{borderLeftColor:l},onClick:()=>n({type:"SET_ZONE_TEAM",team:s}),children:[r.jsxs("span",{style:{color:l},children:["区域 ",s+1]}),r.jsxs("span",{className:"me__zone-count",children:[i.length," 点"]}),r.jsx("button",{className:"me__btn me__btn--sm me__btn--danger",onClick:u=>{u.stopPropagation(),n({type:"CLEAR_ZONE",team:s})},children:"清空"})]},s)})]})}const s1=`
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
`;function i1(e){return e?`(${e.row},${e.col})`:"(无)"}function Ht(e){if(!e)return"(空)";const n=te(e.defId),t=(n==null?void 0:n.nameCn)??e.defId,a=e.destroyed?" [已摧毁]":"";return`${t}(${e.defId})${a}`}function l1(e,n){const t=e.players[n];if(!t)return`  ${n}: (不存在)`;const a=q.find(s=>s.id===t.unitId),o=[];return o.push(`  ── ${n} ──`),o.push(`    机体: ${(a==null?void 0:a.nameCn)??t.unitId} (${t.unitId})`),o.push(`    位置: ${i1(t.position)}  朝向: ${t.facing}`),o.push(`    状态: ${t.isDefeated?"已击破":"存活"}`),o.push(`    手牌(${t.hand.length}): ${t.hand.map(s=>Ht(s)).join(", ")||"(无)"}`),o.push(`    阶段1配置: ${Ht(t.plotSeg1)}`),o.push(`    阶段2配置: ${Ht(t.plotSeg2)}`),o.push(`    辅助区(${t.auxiliary.length}): ${t.auxiliary.map(s=>Ht(s)).join(", ")||"(无)"}`),o.push(`    弃牌堆(${t.discard.length}): ${t.discard.map(s=>Ht(s)).join(", ")||"(无)"}`),o.push(`    摧毁区(${t.destroyedCards.length}): ${t.destroyedCards.map(s=>Ht(s)).join(", ")||"(无)"}`),o.push(`    卡组剩余: ${t.deck.filter(s=>!s.destroyed).length} 张`),o.join(`
`)}function c1(e){var t,a,o;const n=[];if(n.push("══════════════════════════════════════════"),n.push("  当前状态快照"),n.push("══════════════════════════════════════════"),n.push(`回合: ${e.roundNumber}`),n.push(`阶段: ${e.phase}`),n.push(`当前时机: ${e.currentTiming??"(无)"}`),n.push(`行动顺序: ${e.turnOrder.length>0?e.turnOrder.join(" → "):"(无)"}`),n.push(`布局步骤: ${e.plottingStep??"(无)"}`),n.push(`活跃玩家: ${e.activePlayer}`),n.push(`地图: ${((t=e.map)==null?void 0:t.id)??"(无)"}`),n.push(`地雷数: ${((a=e.mines)==null?void 0:a.length)??0}`),(o=e.mines)!=null&&o.length&&n.push(`隐藏指示物: ${e.mines.map(s=>`(${s.position.row},${s.position.col}) owner=${s.ownerId}`).join("；")}`),e.pendingDamage){const s=e.pendingDamage;n.push(`待处理伤害: 目标=${s.targetId}, 剩余=${s.remaining}, 来源=${s.source}, 攻击者=${s.attackerId??"(无)"}, 已选=${s.selectedInstanceIds.length}`)}n.push(""),n.push("── 玩家状态 ──");for(const s of e.playerIds)n.push(l1(e,s));return n.push(""),n.join(`
`)}function sf(e,n){const t=new Date,a=t.toISOString().replace(/[:.]/g,"-").slice(0,19),o=[];o.push("╔══════════════════════════════════════════╗"),o.push("║   Embryo Machine — 全量游戏日志导出      ║"),o.push("╚══════════════════════════════════════════╝"),o.push(`导出时间: ${t.toLocaleString("zh-CN")}`),n!=null&&n.localPlayerId&&o.push(`本地玩家: ${n.localPlayerId}`),n!=null&&n.connectionStatus&&o.push(`连接状态: ${n.connectionStatus}`),o.push(""),o.push(c1(e)),o.push("══════════════════════════════════════════"),o.push("  完整游戏日志 (按时间顺序)"),o.push("══════════════════════════════════════════");const s=e.log.filter(f=>!f.startsWith("[DBG]"));for(let f=0;f<s.length;f++)o.push(`[${String(f+1).padStart(4," ")}] ${s[f]}`);o.push(""),o.push(`── 共 ${s.length} 条日志 ──`);const i=o.join(`
`),l=new Blob([i],{type:"text/plain;charset=utf-8"}),d=URL.createObjectURL(l),u=document.createElement("a");u.href=d,u.download=`embryo-log-${a}.txt`,u.click(),URL.revokeObjectURL(d)}const yu=[1e3,2e3,4e3,8e3,15e3];class d1{constructor(n,t,a){en(this,"ws",null);en(this,"url");en(this,"sessionId");en(this,"onMessage");en(this,"onStatus");en(this,"reconnectAttempt",0);en(this,"reconnectTimer",null);en(this,"intentionallyClosed",!1);en(this,"hasEverConnected",!1);this.url=n,this.sessionId=localStorage.getItem("embryo-session-id"),this.onMessage=t,this.onStatus=a}connect(){this.intentionallyClosed=!1,this.onStatus("connecting");const n=this.sessionId?`?sessionId=${this.sessionId}`:"";this.ws=new WebSocket(`${this.url}${n}`),this.ws.onopen=()=>{var t;if(this.intentionallyClosed){(t=this.ws)==null||t.close(),this.ws=null,this.onStatus("disconnected");return}this.hasEverConnected=!0,this.reconnectAttempt=0,this.onStatus("connected")},this.ws.onmessage=t=>{try{const a=JSON.parse(t.data);a.type==="SESSION_ID"&&(this.sessionId=a.sessionId,localStorage.setItem("embryo-session-id",a.sessionId)),this.onMessage(a)}catch{console.warn("[GameSocket] Failed to parse message:",t.data)}},this.ws.onclose=()=>{if(this.intentionallyClosed){this.onStatus("disconnected");return}this.hasEverConnected||(this.sessionId=null,localStorage.removeItem("embryo-session-id")),this.onStatus("reconnecting"),this.scheduleReconnect()},this.ws.onerror=()=>{}}send(n){var t;((t=this.ws)==null?void 0:t.readyState)===WebSocket.OPEN?this.ws.send(JSON.stringify(n)):console.warn("[GameSocket] Cannot send — not connected")}disconnect(){if(this.intentionallyClosed=!0,this.reconnectTimer&&(clearTimeout(this.reconnectTimer),this.reconnectTimer=null),this.ws){const n=this.ws.readyState;n===WebSocket.OPEN||n===WebSocket.CLOSING?(this.ws.close(),this.ws=null):n===WebSocket.CONNECTING&&(this.ws.onmessage=null,this.ws.onerror=null)}this.onStatus("disconnected")}clearSession(){this.sessionId=null,localStorage.removeItem("embryo-session-id")}get isConnected(){var n;return((n=this.ws)==null?void 0:n.readyState)===WebSocket.OPEN}scheduleReconnect(){const n=yu[Math.min(this.reconnectAttempt,yu.length-1)];this.reconnectAttempt++,this.reconnectTimer=setTimeout(()=>{this.reconnectTimer=null,this.connect()},n)}}const lf=I.createContext(null);function u1({serverUrl:e,children:n}){const[t,a]=I.useState(null),[o,s]=I.useState(null),[i,l]=I.useState(null),[d,u]=I.useState("disconnected"),[f,m]=I.useState(null),[g,h]=I.useState(null),[x,p]=I.useState([]),[_,y]=I.useState(null),[b,v]=I.useState(null),[j,C]=I.useState(null),[M,S]=I.useState([]),E=I.useRef(null),z=I.useRef(null),N=I.useRef(-1),R=I.useRef([]),D=I.useCallback(k=>{switch(k.type){case"SESSION_ID":break;case"ROOM_STATE":s(k.room),l(k.yourPlayerId);break;case"ROOM_LIST":p(k.rooms);break;case"GAME_STATE":{k.state.phase==="plotting"&&(z.current!=="plotting"||N.current!==k.state.roundNumber)&&m(null),z.current=k.state.phase,N.current=k.state.roundNumber,a(k.state),l(k.yourPlayerId),y(k.currentTurnPlayerId??null),v(k.turnDeadline??null),k.replayActions&&k.replayActions.length>0?(R.current=[...R.current,...k.replayActions],S(k.replayActions)):S([]);break}case"PLOTTING_STATUS":m({confirmed:k.confirmed,total:k.total});break;case"GAME_STARTED":k.initialState&&(C(k.initialState),R.current=[],S([]));break;case"RECONNECTED":s(k.room),a(k.state),l(k.yourPlayerId),y(k.currentTurnPlayerId??null),v(k.turnDeadline??null),z.current=k.state.phase,N.current=k.state.roundNumber,k.initialState&&C(k.initialState),k.replayActions&&(R.current=k.replayActions,S([]));break;case"SPECTATE_STATE":a(k.state),s(k.room),l(null);break;case"ACTION_REJECTED":h(k.reason),setTimeout(()=>h(null),5e3);break;case"PLAYER_JOINED":case"PLAYER_LEFT":case"PLAYER_RECONNECTED":case"PLAYER_DISCONNECTED":break;case"ERROR":h(k.message),setTimeout(()=>h(null),5e3);break}},[]);I.useEffect(()=>{const k=new d1(e,D,u);return E.current=k,k.connect(),()=>{k.clearSession(),k.disconnect(),E.current=null}},[e,D]);const K=I.useCallback(k=>{var $;($=E.current)==null||$.send({type:"GAME_ACTION",action:k})},[]),A=I.useCallback(k=>{var $;($=E.current)==null||$.send({type:"LOBBY_ACTION",action:k})},[]),L=I.useCallback(k=>{var $;($=E.current)==null||$.send(k)},[]),W=I.useCallback(k=>te(k),[]),V={state:t,room:o,localPlayerId:i,dispatch:K,sendLobbyAction:A,send:L,getCard:W,connectionStatus:d,plottingStatus:f,isOnline:!0,lastError:g,roomList:x,currentTurnPlayerId:_,turnDeadline:b,replayInitialState:j,replayActions:R.current,latestDeltaActions:M};return r.jsx(lf.Provider,{value:V,children:n})}function Ec(){const e=I.useContext(lf);if(!e)throw new Error("useOnlineGame must be used within OnlineGameProvider");return e}function p1({children:e}){var V;const{state:n,localPlayerId:t,dispatch:a,getCard:o,plottingStatus:s,send:i,currentTurnPlayerId:l,replayInitialState:d,replayActions:u,latestDeltaActions:f,room:m}=Ec(),[g,h]=I.useState(!0),x=I.useRef(-1),p=I.useRef(null),_={player1:!1,player2:!1,player1Difficulty:"hard",player2Difficulty:"hard"},y=((V=m==null?void 0:m.settings)==null?void 0:V.simplifiedMode)!==!1,[b,v]=I.useState(n),j=I.useRef(b);j.current=b;const[C,M]=I.useState(!1);I.useEffect(()=>{(n==null?void 0:n.phase)!=="plotting"&&M(!1)},[n==null?void 0:n.phase]);const S=I.useCallback(k=>{v($=>on($,k))},[]),E=Gm(S,j),{isAnimating:z}=Ea(),N=I.useRef([]),R=I.useRef(n);I.useEffect(()=>{n&&n!==R.current&&(R.current=n,y?(v(n),N.current=[]):f&&f.length>0?N.current.push(...f):(v(n),N.current=[]))},[n,f,y]),I.useEffect(()=>{if(!z&&N.current.length>0){const k=N.current.shift();E(k),N.current.length===0&&setTimeout(()=>v(R.current),200)}},[z,E]);const D=I.useCallback(k=>{if(k.type==="ADVANCE_TIMING"||k.type==="ADVANCE_PHASE"){i({type:"TIMING_DONE"});return}k.type==="START_PLOTTING"||k.type==="DRAW_CARDS"||(k.type==="CONFIRM_PLOT"&&M(!0),a(k))},[a,i]),K=I.useCallback(()=>d?{initialState:d,actions:[...u]}:null,[d,u]);if(I.useEffect(()=>{if(!(!g||!n)){if(n.phase==="plotting"&&p.current!=="plotting"&&n.roundNumber!==x.current){x.current=n.roundNumber;try{Sc("auto",n,_,!0)}catch{}}p.current=n.phase}},[g,n]),!n||!t)return null;let A=b;if(A.phase==="plotting"){const k=C||((s==null?void 0:s.confirmed.includes(t))??!1);A={...A,plottingStep:k?"waiting_online":t}}const L={player1:t!=="player1",player2:t!=="player2",player1Difficulty:"easy",player2Difficulty:"easy",playerAI:Object.fromEntries(n.playerIds.map(k=>[k,k!==t])),playerDifficulty:Object.fromEntries(n.playerIds.map(k=>[k,"easy"]))},W={state:A,dispatch:D,rawDispatch:D,getCard:o,aiConfig:L,setAIConfig:()=>{},getReplayData:K,autoSaveEnabled:g,setAutoSaveEnabled:h,exposureMode:!1,setExposureMode:()=>{},isOnline:!0,localPlayerId:t,currentTurnPlayerId:l,plottingStatus:s};return r.jsx(Os.Provider,{value:W,children:e})}const m1={lobby:"等待中",playing:"游戏中",finished:"已结束"};function cf({onBack:e,onCreateRoom:n,onJoinRoom:t,roomList:a,onRefreshRooms:o,onSpectate:s}){const[i,l]=I.useState("create"),[d,u]=I.useState(()=>localStorage.getItem("embryo-player-name")??""),[f,m]=I.useState(""),[g,h]=I.useState(""),[x,p]=I.useState(2),[_,y]=I.useState(2),[b,v]=I.useState(Ye[0].id);function j(k){const $=[];for(let J=2;J<=k;J++)k%J===0&&$.push(J);return $}function C(k){p(k);const $=j(k);$.includes(_)||y($[0]);const J=Ye.find(P=>P.id===b);if(!J||J.maxPlayers<k){const P=Ye.find(B=>B.maxPlayers>=k);P&&v(P.id)}}const[M,S]=I.useState(""),[E,z]=I.useState(!1),[N,R]=I.useState(0),[D,K]=I.useState(!0);function A(){const k=d.trim()||`Player_${Math.random().toString(36).slice(2,6)}`;return localStorage.setItem("embryo-player-name",k),k}function L(){n(A(),{maxPlayers:x,teamCount:_,mapId:b,turnTimeoutSeconds:N,password:E?M:void 0,simplifiedMode:D})}function W(){const k=f.trim().toUpperCase();k&&t(k,A(),g||void 0)}function V(k,$){m(k),$?(l("join"),h("")):t(k,A())}return r.jsxs("div",{className:"ol-screen",children:[r.jsxs("div",{className:"ol-center",children:[r.jsx("h1",{className:"ol-title",children:"联机对战"}),r.jsx("p",{className:"ol-subtitle",children:"创建、加入或浏览房间"}),r.jsx("div",{className:"ol-divider"}),r.jsxs("div",{className:"ol-field",children:[r.jsx("label",{className:"ol-label",children:"昵称"}),r.jsx("input",{className:"ol-input",value:d,onChange:k=>u(k.target.value),placeholder:"输入昵称…",maxLength:16})]}),r.jsxs("div",{className:"ol-tabs",children:[r.jsx("button",{className:`ol-tab${i==="create"?" ol-tab--active":""}`,onClick:()=>l("create"),children:"创建房间"}),r.jsx("button",{className:`ol-tab${i==="join"?" ol-tab--active":""}`,onClick:()=>l("join"),children:"加入房间"}),r.jsx("button",{className:`ol-tab${i==="browse"?" ol-tab--active":""}`,onClick:()=>{l("browse"),o==null||o()},children:"浏览房间"})]}),i==="create"&&r.jsxs("div",{className:"ol-panel",children:[r.jsxs("div",{className:"ol-field",children:[r.jsx("label",{className:"ol-label",children:"最大玩家数"}),r.jsx("select",{className:"ol-select",value:x,onChange:k=>C(+k.target.value),children:[2,3,4,5,6,7,8].map(k=>r.jsxs("option",{value:k,children:[k," 人"]},k))})]}),r.jsxs("div",{className:"ol-field",children:[r.jsx("label",{className:"ol-label",children:"队伍数量"}),r.jsx("select",{className:"ol-select",value:_,onChange:k=>y(+k.target.value),children:j(x).map(k=>r.jsxs("option",{value:k,children:[k," 队 (",x/k,"人/队)"]},k))})]}),r.jsxs("div",{className:"ol-field",children:[r.jsx("label",{className:"ol-label",children:"地图"}),r.jsx("select",{className:"ol-select",value:b,onChange:k=>v(k.target.value),children:Ye.filter(k=>k.maxPlayers>=x).map(k=>r.jsxs("option",{value:k.id,children:[k.nameCn," (",k.maxPlayers,"人)"]},k.id))})]}),r.jsxs("div",{className:"ol-field",children:[r.jsx("label",{className:"ol-label",children:"回合限时"}),r.jsxs("select",{className:"ol-select",value:N,onChange:k=>R(+k.target.value),children:[r.jsx("option",{value:0,children:"无限制"}),r.jsx("option",{value:30,children:"30 秒"}),r.jsx("option",{value:60,children:"60 秒"}),r.jsx("option",{value:90,children:"90 秒"}),r.jsx("option",{value:120,children:"120 秒"})]})]}),r.jsxs("label",{className:"ol-check",onClick:()=>K(!D),children:[r.jsx("span",{className:`ol-check__box${D?" ol-check__box--on":""}`,children:D?"✓":""}),r.jsx("span",{children:"简易模式（无战斗动画，快速结算）"})]}),r.jsxs("label",{className:"ol-check",onClick:()=>z(!E),children:[r.jsx("span",{className:`ol-check__box${E?" ol-check__box--on":""}`,children:E?"✓":""}),r.jsx("span",{children:"设置房间密码"})]}),E&&r.jsx("div",{className:"ol-field",children:r.jsx("input",{className:"ol-input",value:M,onChange:k=>S(k.target.value),placeholder:"输入密码…",maxLength:20,type:"password"})}),r.jsx("button",{className:"ol-btn ol-btn--primary",onClick:L,children:"创建房间"})]}),i==="join"&&r.jsxs("div",{className:"ol-panel",children:[r.jsxs("div",{className:"ol-field",children:[r.jsx("label",{className:"ol-label",children:"房间号"}),r.jsx("input",{className:"ol-input ol-input--code",value:f,onChange:k=>m(k.target.value.toUpperCase()),placeholder:"输入6位房间号",maxLength:6})]}),r.jsxs("div",{className:"ol-field",children:[r.jsx("label",{className:"ol-label",children:"密码（若有）"}),r.jsx("input",{className:"ol-input",value:g,onChange:k=>h(k.target.value),placeholder:"无密码可留空",maxLength:20,type:"password"})]}),r.jsx("button",{className:"ol-btn ol-btn--primary",onClick:W,disabled:f.trim().length<1,children:"加入房间"})]}),i==="browse"&&r.jsxs("div",{className:"ol-panel",children:[r.jsxs("div",{className:"ol-browse-header",children:[r.jsx("span",{className:"ol-label",children:"在线房间"}),r.jsx("button",{className:"ol-refresh-btn",onClick:o,children:"刷新"})]}),!a||a.length===0?r.jsx("div",{className:"ol-empty",children:"暂无房间，创建一个吧"}):r.jsx("div",{className:"ol-room-list",children:a.map(k=>r.jsxs("div",{className:"ol-room-row",children:[r.jsx("span",{className:"ol-room-row__code",children:k.roomCode}),r.jsx("span",{className:"ol-room-row__host",children:k.hostName}),r.jsx("span",{className:`ol-room-row__status ol-room-row__status--${k.status}`,children:m1[k.status]??k.status}),r.jsxs("span",{className:"ol-room-row__count",children:[k.playerCount,"/",k.maxPlayers]}),k.hasPassword&&r.jsx("span",{className:"ol-room-row__lock",title:"需要密码",children:"🔒"}),k.status==="lobby"?r.jsx("button",{className:"ol-room-row__join",onClick:()=>V(k.roomCode,k.hasPassword),children:"加入"}):r.jsx("button",{className:"ol-room-row__join",onClick:()=>s==null?void 0:s(k.roomCode),disabled:!s,children:"观战"})]},k.roomCode))})]}),r.jsx("button",{className:"ol-btn ol-btn--back",onClick:e,children:"返回主菜单"})]}),r.jsx("style",{children:f1})]})}const f1=`
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
`;function g1({room:e,localPlayerId:n,connectionStatus:t,lastError:a,send:o,onLeave:s}){var R;const[i,l]=I.useState(""),d=e.slots.find(D=>D.playerId===n),u=n!=null&&n===((R=e.slots[0])==null?void 0:R.playerId),f=(d==null?void 0:d.isReady)??!1,m=e.settings.teamCount,g=e.slots.filter(D=>D.type!=="empty"),h=g.length>=2&&g.every(D=>D.isReady),x=e.slots.filter(D=>D.type!=="empty").map(D=>D.unitId),p=e.slots.filter(D=>D.type!=="empty"&&D.playerId!==n).map(D=>D.unitId),_=e.slots.filter(D=>D.type==="ai"),y=I.useState(!1);I.useEffect(()=>{if(y[0]||!n)return;if(d!=null&&d.unitId&&d.unitId!=="TR"){l(d.unitId),y[1](!0);return}const D=q.filter(K=>!p.includes(K.id));if(D.length>0){const K=D[Math.floor(Math.random()*D.length)];l(K.id),o({type:"LOBBY_ACTION",action:{type:"SELECT_UNIT",playerId:n,unitId:K.id}}),y[1](!0)}},[n]);function b(D){l(D),o({type:"LOBBY_ACTION",action:{type:"SELECT_UNIT",playerId:n,unitId:D}})}function v(){const D=new Set(e.slots.filter(A=>A.type==="human"&&A.playerId!==n).map(A=>A.unitId)),K=q.filter(A=>!D.has(A.id));if(K.length>0){const A=K[Math.floor(Math.random()*K.length)];b(A.id),D.add(A.id)}if(u)for(const A of _){const L=q.filter(V=>!D.has(V.id));if(L.length===0)break;const W=L[Math.floor(Math.random()*L.length)];o({type:"LOBBY_ACTION",action:{type:"SELECT_UNIT",playerId:A.playerId,unitId:W.id}}),D.add(W.id)}}function j(){o({type:f?"UNREADY":"READY"})}function C(){o({type:"START_GAME"})}function M(D,K){o({type:"LOBBY_ACTION",action:{type:"SELECT_UNIT",playerId:D,unitId:K}})}function S(D,K){o({type:"SET_SLOT_TYPE",playerId:D,slotType:K})}function E(D,K){o({type:"SET_SLOT_TEAM",playerId:D,team:K})}function z(D){o({type:"KICK_PLAYER",playerId:D})}function N(){o({type:"LEAVE_ROOM"}),s()}return r.jsxs("div",{className:"rm-screen",children:[r.jsxs("div",{className:"rm-center",children:[r.jsxs("div",{className:"rm-header",children:[r.jsx("h2",{className:"rm-room-title",children:"房间"}),r.jsx("div",{className:"rm-room-code",children:e.roomCode}),e.hasPassword&&r.jsx("span",{className:"rm-lock",title:"有密码",children:"🔒"}),r.jsx("div",{className:"rm-room-status",children:t==="connected"?r.jsx("span",{className:"rm-status rm-status--ok",children:"已连接"}):r.jsx("span",{className:"rm-status rm-status--warn",children:t})})]}),a&&r.jsx("div",{className:"rm-error",children:a}),r.jsx("div",{className:"rm-slots",children:e.slots.map((D,K)=>r.jsx(h1,{slot:D,isLocal:D.playerId===n,isHost:u,teamCount:m,allTakenUnits:x,onSetSlotType:S,onSetSlotTeam:E,onSelectAIUnit:M,onKick:z},K))}),r.jsxs("div",{className:"rm-section",children:[r.jsxs("div",{className:"rm-section-header",children:[r.jsx("div",{className:"rm-section-title",children:"选择机体"}),r.jsx("button",{className:"rm-random-btn",onClick:v,title:"随机选择机体",children:"🎲 随机"})]}),r.jsx("div",{className:"rm-unit-grid",children:q.map(D=>{const K=i||(d==null?void 0:d.unitId),A=p.includes(D.id),L=K===D.id;return r.jsxs("button",{className:`rm-unit-btn${L?" rm-unit-btn--selected":""}${A?" rm-unit-btn--taken":""}`,onClick:()=>!A&&b(D.id),disabled:A,title:`${D.nameCn} (${D.nameJa}) - MOV:${D.movement} EVA:${D.evasion} ASL:${D.assault} INIT:${D.initiative}`,children:[r.jsx("span",{className:"rm-unit-code",children:D.id}),r.jsx("span",{className:"rm-unit-name",children:D.nameCn})]},D.id)})})]}),r.jsxs("div",{className:"rm-actions",children:[r.jsx("button",{className:`rm-btn${f?" rm-btn--unready":" rm-btn--ready"}`,onClick:j,children:f?"取消准备":"准备"}),u&&r.jsx("button",{className:"rm-btn rm-btn--start",onClick:C,disabled:!h,title:h?"开始游戏":"等待所有玩家准备",children:"开始游戏"}),r.jsx("button",{className:"rm-btn rm-btn--leave",onClick:N,children:"离开房间"})]})]}),r.jsx("style",{children:x1})]})}function h1({slot:e,isLocal:n,isHost:t,teamCount:a,allTakenUnits:o,onSetSlotType:s,onSetSlotTeam:i,onSelectAIUnit:l,onKick:d}){const u=q.find(p=>p.id===e.unitId);if(e.type==="empty")return r.jsxs("div",{className:"rm-slot rm-slot--empty",children:[r.jsxs("span",{className:"rm-slot__index",children:["#",e.index+1]}),r.jsx("span",{className:"rm-slot__name",children:"空位"}),t&&r.jsx("button",{className:"rm-slot__toggle",onClick:()=>s(e.playerId,"ai"),children:"+AI"})]});const f=Mn[e.team%Mn.length][0],m=t&&e.type==="ai",g=t&&e.type==="ai";function h(){const p=(e.team+1)%a;i(e.playerId,p)}const x=new Set(o.filter(p=>p!==e.unitId));return r.jsxs("div",{className:`rm-slot${n?" rm-slot--local":""}${e.isConnected?"":" rm-slot--dc"}`,children:[m?r.jsx("button",{className:"rm-slot__team-btn",style:{background:f,boxShadow:`0 0 6px ${f}`},onClick:h,title:`队伍 ${e.team+1} (点击切换)`}):r.jsx("span",{className:"rm-slot__color-dot",style:{background:f},title:`队伍 ${e.team+1}`}),r.jsxs("span",{className:"rm-slot__index",children:["#",e.index+1]}),r.jsx("span",{className:"rm-slot__type-badge",children:e.type==="ai"?"AI":""}),r.jsxs("span",{className:"rm-slot__name",children:[e.playerName||e.playerId,n&&" (你)"]}),m&&r.jsxs("span",{className:"rm-slot__team-label",style:{color:f},children:["T",e.team+1]}),g?r.jsx("select",{className:"rm-slot__unit-select",value:e.unitId,onChange:p=>l(e.playerId,p.target.value),children:q.map(p=>r.jsxs("option",{value:p.id,disabled:x.has(p.id),children:[p.nameCn," (",p.id,")",x.has(p.id)?" ✕":""]},p.id))}):r.jsx("span",{className:"rm-slot__unit",children:u?u.nameCn:e.unitId||"未选择"}),r.jsx("span",{className:`rm-slot__ready${e.isReady?" rm-slot__ready--yes":""}`,children:e.isReady?"已准备":"未准备"}),!e.isConnected&&r.jsx("span",{className:"rm-slot__dc",children:"断线"}),t&&e.type==="ai"&&r.jsx("button",{className:"rm-slot__toggle",onClick:()=>s(e.playerId,"empty"),children:"移除"}),t&&!n&&e.type==="human"&&d&&r.jsx("button",{className:"rm-slot__toggle rm-slot__toggle--kick",onClick:()=>d(e.playerId),children:"踢出"})]})}const x1=`
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
`,b1=[{key:"alive",label:"存活",icon:"💚"},{key:"kills",label:"击杀",icon:"💀"},{key:"assists",label:"助攻",icon:"🤝"},{key:"damageDealt",label:"造成伤害",icon:"⚔️"},{key:"damageTaken",label:"承受伤害",icon:"🛡️"},{key:"cardsRemaining",label:"剩余卡牌",icon:"📋"}];function df({state:e,onHome:n,onSaveReplay:t,isOnline:a}){const[o,s]=I.useState("kills"),[i,l]=I.useState(!0),[d,u]=I.useState("table"),[f,m]=I.useState("damageDealt"),[g,h]=I.useState(!0);I.useEffect(()=>{const v=setTimeout(()=>h(!1),800);return()=>clearTimeout(v)},[]);const x=I.useMemo(()=>Bh(e),[e]),p=I.useMemo(()=>Fh(x,o,i),[x,o,i]),_=I.useMemo(()=>{const v=new Set;for(const j of e.playerIds)e.players[j].isDefeated||v.add(e.teams[j]);if(v.size===0)return"平局 — 双方同时全灭";if(v.size===1){const j=[...v][0],C=e.playerIds.filter(M=>e.teams[M]===j).map(M=>{const S=q.find(E=>E.id===e.players[M].unitId);return(S==null?void 0:S.nameCn)??M});return`队伍 ${j+1} 获胜 — ${C.join("、")}`}return"游戏结束"},[e]);function y(v){o===v?l(!i):(s(v),l(!0))}const b=I.useMemo(()=>Math.max(1,...x.map(v=>{switch(f){case"kills":return v.kills;case"assists":return v.assists;case"damageDealt":return v.damageDealt;case"damageTaken":return v.damageTaken;case"cardsRemaining":return v.cardsRemaining;default:return 0}})),[x,f]);return r.jsxs("div",{className:`bs-screen ${g?"bs-screen--entering":""}`,children:[r.jsxs("div",{className:"bs-header",children:[r.jsx("div",{className:"bs-header__icon",children:"📊"}),r.jsx("h1",{className:"bs-header__title",children:"战斗结算"}),r.jsx("p",{className:"bs-header__subtitle",children:_}),r.jsxs("p",{className:"bs-header__round",children:["共 ",e.roundNumber," 回合"]})]}),r.jsxs("div",{className:"bs-toggle-bar",children:[r.jsx("button",{className:`bs-toggle-btn ${d==="table"?"bs-toggle-btn--active":""}`,onClick:()=>u("table"),children:"📋 数据表"}),r.jsx("button",{className:`bs-toggle-btn ${d==="chart"?"bs-toggle-btn--active":""}`,onClick:()=>u("chart"),children:"📊 图表"})]}),r.jsx("div",{className:"bs-content",children:d==="table"?r.jsx(v1,{stats:p,state:e,sortKey:o,sortDesc:i,onSort:y}):r.jsx(y1,{stats:x,state:e,metric:f,chartMax:b,onMetricChange:m})}),r.jsxs("div",{className:"bs-actions",children:[r.jsx("button",{className:"bs-btn bs-btn--primary",onClick:n,children:"🏠 返回主菜单"}),!a&&r.jsx("button",{className:"bs-btn bs-btn--secondary",onClick:t,children:"🎬 保存录像"})]}),r.jsx("style",{children:_1})]})}function v1({stats:e,state:n,sortKey:t,sortDesc:a,onSort:o}){return r.jsx("div",{className:"bs-table-wrap",children:r.jsxs("table",{className:"bs-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{className:"bs-table__th bs-table__th--player",children:"机体"}),b1.map(s=>r.jsxs("th",{className:`bs-table__th bs-table__th--sortable ${t===s.key?"bs-table__th--sorted":""}`,onClick:()=>o(s.key),title:`按${s.label}排序`,children:[r.jsx("span",{className:"bs-table__th-icon",children:s.icon}),r.jsx("span",{className:"bs-table__th-label",children:s.label}),t===s.key&&r.jsx("span",{className:"bs-table__th-arrow",children:a?"▼":"▲"})]},s.key))]})}),r.jsx("tbody",{children:e.map((s,i)=>{const l=ht(n,s.playerId);return r.jsxs("tr",{className:`bs-table__row ${s.alive?"":"bs-table__row--defeated"}`,style:{"--delay":`${i*.08}s`,"--player-color":l},children:[r.jsxs("td",{className:"bs-table__td bs-table__td--player",children:[r.jsx("span",{className:"bs-player-badge",style:{borderColor:l,color:l},children:s.label}),r.jsx("span",{className:"bs-player-name",children:s.unitName}),s.alive&&r.jsx("span",{className:"bs-alive-dot",title:"存活"})]}),r.jsx("td",{className:"bs-table__td bs-table__td--status",children:s.alive?r.jsx("span",{className:"bs-status bs-status--alive",children:"存活"}):r.jsx("span",{className:"bs-status bs-status--dead",children:"击毁"})}),r.jsx("td",{className:"bs-table__td bs-table__td--num",children:r.jsx("span",{className:"bs-num bs-num--kills",children:s.kills})}),r.jsx("td",{className:"bs-table__td bs-table__td--num",children:r.jsx("span",{className:"bs-num",children:s.assists})}),r.jsx("td",{className:"bs-table__td bs-table__td--num",children:r.jsx("span",{className:"bs-num bs-num--damage",children:s.damageDealt})}),r.jsx("td",{className:"bs-table__td bs-table__td--num",children:r.jsx("span",{className:"bs-num bs-num--taken",children:s.damageTaken})}),r.jsx("td",{className:"bs-table__td bs-table__td--num",children:r.jsxs("div",{className:"bs-hp-cell",children:[r.jsx("span",{className:"bs-num",children:s.cardsRemaining}),r.jsx("div",{className:"bs-hp-bar",children:r.jsx("div",{className:"bs-hp-bar__fill",style:{width:`${s.hpPercent}%`,background:s.hpPercent>50?"linear-gradient(90deg, #00c864, #44ee88)":s.hpPercent>20?"linear-gradient(90deg, #ffa000, #ffcc44)":"linear-gradient(90deg, #ff3333, #ff6666)"}})})]})})]},s.playerId)})})]})})}function y1({stats:e,state:n,metric:t,chartMax:a,onMetricChange:o}){const s=[{key:"damageDealt",label:"造成伤害",icon:"⚔️",barColor:"#ff6644"},{key:"damageTaken",label:"承受伤害",icon:"🛡️",barColor:"#4488ff"},{key:"kills",label:"击杀数",icon:"💀",barColor:"#ff3366"},{key:"assists",label:"助攻数",icon:"🤝",barColor:"#44ddaa"},{key:"cardsRemaining",label:"剩余卡牌",icon:"📋",barColor:"#ffcc00"}],i=s.find(u=>u.key===t)??s[0];function l(u){switch(t){case"kills":return u.kills;case"assists":return u.assists;case"damageDealt":return u.damageDealt;case"damageTaken":return u.damageTaken;case"cardsRemaining":return u.cardsRemaining;default:return 0}}const d=[...e].sort((u,f)=>l(f)-l(u));return r.jsxs("div",{className:"bs-chart",children:[r.jsx("div",{className:"bs-chart__selector",children:s.map(u=>r.jsxs("button",{className:`bs-chart__metric-btn ${t===u.key?"bs-chart__metric-btn--active":""}`,onClick:()=>o(u.key),children:[u.icon," ",u.label]},u.key))}),r.jsx("div",{className:"bs-chart__bars",children:d.map((u,f)=>{const m=l(u),g=a>0?m/a*100:0,h=ht(n,u.playerId);return r.jsxs("div",{className:"bs-chart__bar-row",style:{"--delay":`${f*.1}s`},children:[r.jsxs("div",{className:"bs-chart__bar-label",children:[r.jsx("span",{className:"bs-chart__bar-badge",style:{borderColor:h,color:h},children:u.label}),r.jsx("span",{className:"bs-chart__bar-name",children:u.unitName})]}),r.jsxs("div",{className:"bs-chart__bar-track",children:[r.jsx("div",{className:"bs-chart__bar-fill",style:{width:`${g}%`,background:`linear-gradient(90deg, ${i.barColor}dd, ${i.barColor}88)`,boxShadow:`0 0 12px ${i.barColor}44`}}),r.jsx("span",{className:"bs-chart__bar-value",children:m})]})]},u.playerId)})}),r.jsxs("div",{className:"bs-chart__summary",children:[r.jsx("h3",{className:"bs-chart__summary-title",children:"综合对比"}),r.jsx("div",{className:"bs-chart__summary-grid",children:d.map(u=>{const f=ht(n,u.playerId);return r.jsxs("div",{className:"bs-chart__summary-card",style:{borderColor:`${f}44`},children:[r.jsxs("div",{className:"bs-chart__summary-header",style:{color:f},children:[u.label," ",u.unitName,!u.alive&&r.jsx("span",{className:"bs-chart__summary-dead",children:"✕"})]}),r.jsxs("div",{className:"bs-chart__summary-stats",children:[r.jsxs("div",{className:"bs-chart__summary-stat",children:[r.jsx("span",{className:"bs-chart__summary-stat-icon",children:"💀"}),r.jsx("span",{children:u.kills})]}),r.jsxs("div",{className:"bs-chart__summary-stat",children:[r.jsx("span",{className:"bs-chart__summary-stat-icon",children:"🤝"}),r.jsx("span",{children:u.assists})]}),r.jsxs("div",{className:"bs-chart__summary-stat",children:[r.jsx("span",{className:"bs-chart__summary-stat-icon",children:"⚔️"}),r.jsx("span",{children:u.damageDealt})]}),r.jsxs("div",{className:"bs-chart__summary-stat",children:[r.jsx("span",{className:"bs-chart__summary-stat-icon",children:"🛡️"}),r.jsx("span",{children:u.damageTaken})]})]}),r.jsxs("div",{className:"bs-chart__summary-hp",children:[r.jsx("div",{className:"bs-hp-bar",style:{height:6,borderRadius:3},children:r.jsx("div",{className:"bs-hp-bar__fill",style:{width:`${u.hpPercent}%`,background:u.hpPercent>50?"#00c864":u.hpPercent>20?"#ffa000":"#ff3333"}})}),r.jsxs("span",{className:"bs-chart__summary-hp-text",children:[u.cardsRemaining,"/",u.totalCards]})]})]},u.playerId)})})]})]})}const _1=`
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
`;function I1(){return"wss://embryo-machine.onrender.com/"}const k1=I1();function j1({onBack:e}){const[n]=I.useState(k1),[t,a]=I.useState("lobby"),[o,s]=I.useState(null),i=I.useCallback((m,g)=>{s({type:"create",playerName:m,settings:g}),a("connected")},[]),l=I.useCallback((m,g,h)=>{s({type:"join",roomCode:m,playerName:g,password:h}),a("connected")},[]),d=I.useCallback(m=>{s({type:"spectate",roomCode:m}),a("connected")},[]),u=I.useCallback(()=>{t!=="connected"&&(s({type:"browse"}),a("connected"))},[t]),f=I.useCallback(()=>{s(null),a("lobby")},[]);return t==="lobby"?r.jsx(cf,{onBack:e,onCreateRoom:i,onJoinRoom:l,onRefreshRooms:u,onSpectate:d}):r.jsx(u1,{serverUrl:n,children:r.jsx(w1,{pendingAction:o,onBack:e,onDisconnect:f})})}function w1({pendingAction:e,onDisconnect:n}){const{state:t,room:a,localPlayerId:o,send:s,connectionStatus:i,lastError:l,roomList:d}=Ec(),[u,f]=I.useState(!1);return!u&&i==="connected"&&e&&(e.type==="create"?s({type:"CREATE_ROOM",playerName:e.playerName,settings:e.settings}):e.type==="join"?s({type:"JOIN_ROOM",roomCode:e.roomCode,playerName:e.playerName,password:e.password}):e.type==="spectate"?s({type:"SPECTATE_ROOM",roomCode:e.roomCode}):e.type==="browse"&&s({type:"LIST_ROOMS"}),f(!0)),(e==null?void 0:e.type)==="browse"&&!a&&!t?r.jsx(cf,{onBack:n,onCreateRoom:(m,g)=>{s({type:"CREATE_ROOM",playerName:m,settings:g})},onJoinRoom:(m,g,h)=>{s({type:"JOIN_ROOM",roomCode:m,playerName:g,password:h})},roomList:d,onRefreshRooms:()=>s({type:"LIST_ROOMS"})}):i==="connecting"?r.jsxs("div",{className:"og-connecting",children:[r.jsx("div",{className:"og-spinner"}),r.jsx("p",{children:"正在连接服务器…"}),r.jsx("button",{className:"ol-btn ol-btn--back",onClick:n,children:"取消"}),r.jsx("style",{children:Nr})]}):a&&!t?r.jsx(g1,{room:a,localPlayerId:o,connectionStatus:i,lastError:l,send:s,onLeave:n}):t&&o?r.jsx(As,{children:r.jsx(p1,{children:r.jsx(S1,{onLeaveRoom:n})})}):t&&!o?r.jsx(C1,{state:t,room:a,onLeave:n}):r.jsxs("div",{className:"og-connecting",children:[r.jsx("div",{className:"og-spinner"}),r.jsx("p",{children:"等待服务器响应…"}),l&&r.jsx("div",{className:"rm-error",children:l}),r.jsx("button",{className:"ol-btn ol-btn--back",onClick:n,children:"返回"}),r.jsx("style",{children:Nr})]})}function S1({onLeaveRoom:e}){const n=Vr(),{dispatch:t,aiConfig:a}=Ce(),{localPlayerId:o,connectionStatus:s,plottingStatus:i,send:l,lastError:d,turnDeadline:u}=Ec(),[f,m]=I.useState(null);I.useEffect(()=>{if(!u){m(null);return}const z=()=>{const R=Math.max(0,Math.ceil((u-Date.now())/1e3));m(R)};z();const N=setInterval(z,500);return()=>clearInterval(N)},[u]),I.useEffect(()=>{n.phase==="pregame"&&t({type:"START_PLOTTING"})},[n.phase,t]);const[g,h]=I.useState([{id:"map",zIndex:10},{id:"log",zIndex:11},{id:"mecha",zIndex:12},{id:"plot",zIndex:100}]),x=I.useCallback(z=>{h(N=>{const R=Math.max(...N.map(V=>V.zIndex)),D=N.find(V=>V.id===z);if(D&&D.zIndex===R)return N;const K=[...N].sort((V,k)=>V.zIndex-k.zIndex),A=10,L=new Map;let W=0;for(const V of K)V.id!==z&&L.set(V.id,A+W++);return L.set(z,A+K.length-1),N.map(V=>({...V,zIndex:L.get(V.id)??V.zIndex}))})},[]),p=z=>{var N;return((N=g.find(R=>R.id===z))==null?void 0:N.zIndex)??10},_=I.useCallback(z=>[],[]),y=Ks();if(n.phase==="game_over")return r.jsx(df,{state:n,onHome:()=>{l({type:"LEAVE_ROOM"}),e()},onSaveReplay:()=>{},isOnline:!0});const b=y?window.innerWidth:Math.max(400,Math.min(window.innerWidth*.6,620)),v=300,j=window.innerWidth-v-16,C=y?window.innerWidth:380,M=window.innerWidth-C-16,S=n.phase==="plotting"&&n.plottingStep!=="complete"&&n.plottingStep!==null&&!n.plottingStep.startsWith("transition_to_")&&!Ae(a,n.plottingStep),E=r.jsxs("div",{className:"og-status-bar",children:[r.jsxs("span",{className:"og-round",children:["第 ",n.roundNumber," 回合"]}),r.jsx("span",{className:"og-phase",children:uf(n.phase)}),n.currentTiming&&r.jsxs("span",{className:"og-timing",children:["▶ ",pf(n.currentTiming)]}),!y&&n.turnOrder.length>0&&r.jsxs("span",{className:"og-debug-info",title:"当前行动顺序",children:["[",n.turnOrder.map(z=>z.replace("player","P")).join("→"),"]"]}),f!==null&&f>0&&r.jsxs("span",{className:`og-countdown${f<=10?" og-countdown--warn":""}`,children:["⏱ ",f,"s"]}),r.jsx("span",{style:{flex:1}}),i&&n.phase==="plotting"&&r.jsxs("span",{className:"og-plotting",children:["布局进度: ",i.confirmed.length,"/",i.total]}),!y&&r.jsx("button",{className:"og-export-btn",onClick:()=>sf(n,{localPlayerId:o??void 0,connectionStatus:s}),title:"导出全量日志（含调试状态快照）",children:"📋 导出日志"}),r.jsx("span",{className:`og-conn og-conn--${s}`,children:s==="connected"?"在线":s}),o&&r.jsx("span",{className:"og-pid",children:o.replace("player","P")})]});return y?r.jsxs("div",{className:"game-screen game-screen--mobile",children:[E,d&&r.jsx("div",{className:"rm-error",style:{margin:"4px 12px 0"},children:d}),r.jsx("div",{className:"game-screen__board-mobile",children:r.jsx(Ca,{})}),r.jsxs("div",{className:"game-screen__panels-mobile",children:[S&&r.jsx(we,{id:"plot",title:"布局阶段",initialPos:{x:0,y:0},width:C,children:r.jsx(ca,{})}),r.jsx(we,{id:"mecha",title:"机体信息",initialPos:{x:0,y:0},defaultMinimized:!0,children:r.jsx(us,{})}),r.jsx(we,{id:"log",title:"行动日志",initialPos:{x:0,y:0},defaultMinimized:!0,children:r.jsx(Tr,{})})]}),r.jsx(ls,{}),r.jsx(cs,{}),r.jsx("style",{children:Nr})]}):r.jsxs("div",{className:"game-screen",style:{position:"relative",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[E,d&&r.jsx("div",{className:"rm-error",style:{margin:"4px 16px 0"},children:d}),r.jsxs("div",{style:{position:"relative",flex:1},children:[r.jsx(we,{id:"map",title:"地图",initialPos:{x:16,y:8},width:b,minHeight:300,zIndex:p("map"),onFocus:x,siblingRects:_("map"),children:r.jsx("div",{style:{height:"calc(100vh - 100px)",minHeight:300},children:r.jsx(Ca,{})})}),r.jsx(we,{id:"log",title:"行动日志",initialPos:{x:j,y:8},width:v,height:260,minHeight:120,zIndex:p("log"),onFocus:x,siblingRects:_("log"),children:r.jsx(Tr,{})}),r.jsx(we,{id:"mecha",title:"机体信息",initialPos:{x:j,y:280},width:v,minHeight:160,zIndex:p("mecha"),onFocus:x,siblingRects:_("mecha"),children:r.jsx(us,{})}),S&&r.jsx(we,{id:"plot",title:"布局阶段",initialPos:{x:M,y:8},width:C,height:620,minHeight:80,zIndex:p("plot"),onFocus:x,siblingRects:_("plot"),children:r.jsx(ca,{})})]}),r.jsx(ls,{}),r.jsx(cs,{}),r.jsx("style",{children:Nr})]})}function C1({state:e,room:n,onLeave:t}){const a={player1:!0,player2:!0,player1Difficulty:"easy",player2Difficulty:"easy",playerAI:Object.fromEntries(e.playerIds.map(i=>[i,!0])),playerDifficulty:Object.fromEntries(e.playerIds.map(i=>[i,"easy"]))},o=()=>{},s={state:e,dispatch:o,rawDispatch:o,getCard:i=>te(i),aiConfig:a,setAIConfig:()=>{},getReplayData:()=>null,autoSaveEnabled:!1,setAutoSaveEnabled:()=>{},exposureMode:!1,setExposureMode:()=>{},isOnline:!0,localPlayerId:null,currentTurnPlayerId:null};return r.jsx(Os.Provider,{value:s,children:r.jsx(As,{children:r.jsxs("div",{className:"game-screen",style:{position:"relative",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{className:"og-status-bar",children:[r.jsx("span",{className:"og-spectate-badge",children:"观战中"}),r.jsxs("span",{className:"og-round",children:["第 ",e.roundNumber," 回合"]}),r.jsx("span",{className:"og-phase",children:uf(e.phase)}),e.currentTiming&&r.jsxs("span",{className:"og-timing",children:["▶ ",pf(e.currentTiming)]}),r.jsx("span",{style:{flex:1}}),n&&r.jsx("span",{className:"og-room-code-badge",children:n.roomCode}),r.jsx("button",{className:"rm-btn rm-btn--leave",onClick:t,children:"离开"})]}),r.jsxs("div",{style:{position:"relative",flex:1},children:[r.jsx(we,{id:"map",title:"地图",initialPos:{x:16,y:8},width:Math.max(400,Math.min(window.innerWidth*.7,700)),minHeight:300,children:r.jsx("div",{style:{height:"calc(100vh - 100px)",minHeight:300},children:r.jsx(Ca,{})})}),r.jsx(we,{id:"log",title:"行动日志",initialPos:{x:window.innerWidth-316,y:8},width:300,height:400,minHeight:120,children:r.jsx(Tr,{})})]}),r.jsx("style",{children:Nr})]})})})}function uf(e){return{pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"主要阶段 1",action_seg2:"主要阶段 2",cleanup:"清理阶段",game_over:"游戏结束"}[e]??e}function pf(e){return{movement:"移动",ranged:"射击",melee:"近战",special:"特殊"}[e]??e}const Nr=`
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
`;function N1(){const e=Vr(),{rawDispatch:n,aiConfig:t,setAIConfig:a,getReplayData:o,autoSaveEnabled:s,setAutoSaveEnabled:i,exposureMode:l,setExposureMode:d}=Ce(),[u,f]=I.useState("home"),[m,g]=I.useState("map"),[h,x]=I.useState(!0),[p,_]=I.useState(2),[y,b]=I.useState(2),[v,j]=I.useState(null),[C,M]=I.useState({loaded:0,total:0}),S=I.useRef(null),E=I.useCallback(()=>{fe.init(),g("map"),f("game")},[]),z=I.useCallback(()=>{const K=Wm().length;M({loaded:0,total:K}),j("asking")},[]),N=I.useCallback(()=>{j("loading");const K=new AbortController;S.current=K,kb((A,L)=>{M({loaded:A,total:L}),A>=L&&setTimeout(()=>j(null),600)},K.signal)},[]),R=I.useCallback(()=>{var K;(K=S.current)==null||K.abort(),j(null)},[]);function D(K){n({type:"LOAD_GAME",state:K.gameState}),a(K.aiConfig),f("game")}return u==="rules"?r.jsx(hv,{onBack:()=>f((e.phase==="setup","game"))}):u==="data"?r.jsx(bv,{onBack:()=>f("game")}):u==="load"?r.jsx(pu,{mode:"load",onBack:()=>f("home"),onLoad:D}):u==="replay"?r.jsx(zv,{onBack:()=>f("home")}):u==="save"?r.jsx(pu,{mode:"save",onBack:()=>f("game"),currentState:e,aiConfig:t}):u==="mapEditor"?r.jsx(qv,{onBack:()=>f("home")}):u==="online"?r.jsx(j1,{onBack:()=>f("home")}):u==="settings"?r.jsxs(r.Fragment,{children:[v!==null&&r.jsx(hb,{phase:v,loaded:C.loaded,total:C.total,onConfirm:N,onSkip:R}),r.jsx(fb,{onBack:()=>f("home"),soundEnabled:fe.enabled,onToggleSound:()=>{fe.enabled=!fe.enabled,M(K=>({...K}))},soundVolume:fe.volume,onVolumeChange:K=>{fe.volume=K,fe.init(),fe.uiBlip(),M(A=>({...A}))},exposureMode:l,onToggleExposure:()=>d(!l),autoFill:h,onToggleAutoFill:()=>x(!h),onCacheAssets:z})]}):u==="home"?r.jsx(pb,{onStart:E,onOnlinePlay:()=>{fe.init(),f("online")},onViewRules:()=>f("rules"),onViewData:()=>f("data"),onLoadGame:()=>f("load"),onReplay:()=>f("replay"),onMapEditor:()=>f("mapEditor"),onSettings:()=>f("settings")}):e.phase==="setup"?m==="map"?r.jsx(eb,{onNext:()=>g("units"),onBack:()=>f("home"),playerCount:p,setPlayerCount:_,teamCount:y,setTeamCount:b}):m==="units"?r.jsx(ab,{onNext:()=>g("spawn"),onBack:()=>g("map"),autoFill:h}):r.jsx(db,{onBack:()=>g("units")}):e.phase==="game_over"?r.jsx(df,{state:e,onHome:()=>{n({type:"RESET_GAME"}),f("home"),g("map")},onSaveReplay:()=>{const K=o();if(!K)return;const A=e.players.player1.isDefeated,L=e.players.player2.isDefeated,W=A&&L?"draw":A?"player2":L?"player1":null;try{Bx(K.initialState,K.actions,W),alert("录像已保存！")}catch{alert("保存失败，存储空间可能不足。")}}}):r.jsx(T1,{onSave:()=>f("save"),autoSaveEnabled:s,onToggleAutoSave:()=>i(!s)})}function T1({onSave:e,autoSaveEnabled:n,onToggleAutoSave:t}){const a=Vr(),{dispatch:o,exposureMode:s,getCard:i,aiConfig:l}=Ce();I.useEffect(()=>{a.phase==="pregame"&&o({type:"START_PLOTTING"})},[a.phase,o]);const d=I.useRef(a.phase);I.useEffect(()=>{const M=d.current;if(d.current=a.phase,!!s&&M==="plotting"&&a.phase==="action_seg1"){const S=E=>{if(!E)return"无";const z=i(E.defId);return z?z.nameCn:E.defId};for(const E of a.playerIds){const z=a.players[E];if(z.isDefeated)continue;const N=`P${E.replace("player","")}`;o({type:"ADD_LOG",message:`[暴露] ${N} 布局: 段1=${S(z.plotSeg1)} / 段2=${S(z.plotSeg2)}`})}}},[a.phase]);const[u,f]=I.useState([{id:"map",zIndex:10},{id:"log",zIndex:11},{id:"mecha",zIndex:12},{id:"plot",zIndex:100}]),m=I.useRef(new Map),g=I.useCallback(M=>{f(S=>{const E=Math.max(...S.map(A=>A.zIndex)),z=S.find(A=>A.id===M);if(z&&z.zIndex===E)return S;const N=[...S].sort((A,L)=>A.zIndex-L.zIndex),R=10,D=new Map;let K=0;for(const A of N)A.id!==M&&D.set(A.id,R+K++);return D.set(M,R+N.length-1),S.map(A=>({...A,zIndex:D.get(A.id)??A.zIndex}))})},[]),h=M=>{var S;return((S=u.find(E=>E.id===M))==null?void 0:S.zIndex)??10},x=I.useCallback(M=>{const S=[];return m.current.forEach((E,z)=>{z!==M&&E&&S.push(E.getBoundingClientRect())}),S},[]),p=Ks(),_=p?window.innerWidth:Math.max(400,Math.min(window.innerWidth*.6,620)),y=300,b=window.innerWidth-y-16,v=36,j=p?window.innerWidth:380,C=window.innerWidth-j-16;if(p){const M=a.phase==="plotting"&&a.plottingStep!=="complete"&&a.plottingStep!==null&&!a.plottingStep.startsWith("transition_to_")&&!Ae(l,a.plottingStep),S=a.phase==="plotting"&&a.plottingStep!=="complete"&&a.plottingStep!==null&&!a.plottingStep.startsWith("transition_to_")&&Ae(l,a.plottingStep);return r.jsxs("div",{className:"game-screen game-screen--mobile",children:[r.jsx("div",{className:"game-screen__header",style:{flexShrink:0},children:r.jsx(_u,{onSave:e,autoSaveEnabled:n,onToggleAutoSave:t})}),r.jsxs("div",{className:"game-screen__board-mobile",children:[r.jsx(Ca,{}),r.jsx(Iu,{})]}),r.jsxs("div",{className:"game-screen__panels-mobile",children:[M&&r.jsx(we,{id:"plot",title:"布局阶段",initialPos:{x:0,y:0},width:j,children:r.jsx(ca,{})}),S&&r.jsx("div",{style:{width:0,height:0,overflow:"hidden",opacity:0,pointerEvents:"none"},children:r.jsx(ca,{})}),r.jsx(we,{id:"mecha",title:"机体信息",initialPos:{x:0,y:0},defaultMinimized:!0,children:r.jsx(us,{})}),r.jsx(we,{id:"log",title:"行动日志",initialPos:{x:0,y:0},defaultMinimized:!0,children:r.jsx(Tr,{})})]}),r.jsx(ls,{}),r.jsx(cs,{}),r.jsx("style",{children:ku})]})}return r.jsxs("div",{className:"game-screen",style:{position:"relative",height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},children:[r.jsx("div",{className:"game-screen__header",style:{flexShrink:0},children:r.jsx(_u,{onSave:e,autoSaveEnabled:n,onToggleAutoSave:t})}),r.jsxs("div",{style:{position:"relative",flex:1},children:[r.jsx(we,{id:"map",title:"地图",initialPos:{x:16,y:8},width:_,minHeight:300,zIndex:h("map"),onFocus:g,siblingRects:x("map"),children:r.jsx("div",{style:{height:`calc(100vh - ${v+60}px)`,minHeight:300},children:r.jsx(Ca,{})})}),r.jsx(we,{id:"log",title:"行动日志",initialPos:{x:b,y:8},width:y,height:260,minHeight:120,zIndex:h("log"),onFocus:g,siblingRects:x("log"),children:r.jsx(Tr,{})}),r.jsx(we,{id:"mecha",title:"机体信息",initialPos:{x:b,y:280},width:y,minHeight:160,zIndex:h("mecha"),onFocus:g,siblingRects:x("mecha"),children:r.jsx(us,{})}),a.phase==="plotting"&&a.plottingStep!=="complete"&&a.plottingStep!==null&&!a.plottingStep.startsWith("transition_to_")&&!Ae(l,a.plottingStep)&&r.jsx(we,{id:"plot",title:"布局阶段",initialPos:{x:C,y:8},width:j,height:620,minHeight:80,zIndex:h("plot"),onFocus:g,siblingRects:x("plot"),children:r.jsx(ca,{})}),a.phase==="plotting"&&a.plottingStep!=="complete"&&a.plottingStep!==null&&!a.plottingStep.startsWith("transition_to_")&&Ae(l,a.plottingStep)&&r.jsx("div",{style:{position:"absolute",width:0,height:0,overflow:"hidden",opacity:0,pointerEvents:"none"},children:r.jsx(ca,{})})]}),r.jsx(ls,{}),r.jsx(cs,{}),r.jsx(Iu,{}),r.jsx("style",{children:ku})]})}function _u({onSave:e,autoSaveEnabled:n,onToggleAutoSave:t}){const a=Vr(),o={pregame:"战前准备",draw:"抽牌阶段",plotting:"布局阶段",action_seg1:"行动阶段 [主要阶段 1]",action_seg2:"行动阶段 [主要阶段 2]",cleanup:"清理阶段",game_over:"游戏结束"},s={movement:"移动",ranged:"射击",melee:"近战",special:"特殊"};return r.jsxs("div",{className:"phase-bar",children:[r.jsxs("span",{className:"phase-bar__round",children:["第 ",a.roundNumber," 回合"]}),r.jsx("span",{className:"phase-bar__phase",children:o[a.phase]??a.phase}),a.currentTiming&&r.jsxs("span",{className:"phase-bar__timing",children:["▶ ",s[a.currentTiming]??a.currentTiming]}),r.jsx("span",{style:{flex:1}}),r.jsx("button",{className:"phase-bar__autosave-btn",onClick:t,title:n?"自动存档已开启（点击关闭）":"自动存档已关闭（点击开启）",children:n?"💾 自动":"💾 关"}),r.jsx("button",{className:"phase-bar__save-btn",onClick:e,title:"保存游戏",children:"💾 保存"}),r.jsx("button",{className:"phase-bar__save-btn",onClick:()=>sf(a),title:"导出全量日志（含调试状态快照）",children:"📋 日志"})]})}function M1(e){return e.startsWith("[DBG]")?"log-panel__entry log-panel__entry--debug":e.startsWith("===")?"log-panel__entry log-panel__entry--round-start":e.startsWith("---")?"log-panel__entry log-panel__entry--round-end":e.includes("发动")||e.includes("攻击")?"log-panel__entry log-panel__entry--attack":e.includes("摧毁")||e.includes("连锁")||e.includes("诱爆")?"log-panel__entry log-panel__entry--damage":e.includes("移动到")?"log-panel__entry log-panel__entry--move":e.includes("获胜")||e.includes("击破")||e.includes("平局")?"log-panel__entry log-panel__entry--victory":"log-panel__entry"}function Tr(){const e=Vr();return r.jsx("div",{className:"log-panel",children:r.jsx("div",{className:"log-panel__entries",children:[...e.log].filter(n=>!n.startsWith("[DBG]")).reverse().map((n,t)=>r.jsx("div",{className:M1(n),children:n},t))})})}function Iu(){const{isAnimating:e,skipAnimation:n}=Ea();return e?r.jsx("button",{className:"skip-anim-btn",onClick:n,children:"⏩ 跳过"}):null}function E1(){return r.jsx(As,{children:r.jsx(Um,{children:r.jsx(N1,{})})})}const ku=`
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
`;yi.createRoot(document.getElementById("root")).render(r.jsx(Df.StrictMode,{children:r.jsx(E1,{})}));

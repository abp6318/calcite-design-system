/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0-next.9
 */
import{a as r,S as t,i as n,b as e,c as o,r as u,f}from"./p-f9ef5b99.js";var c=Array.isArray,a=t?t.prototype:void 0,i=a?a.toString:void 0;function l(t){if("string"==typeof t)return t;if(c(t))return function(r,t){for(var n=-1,e=null==r?0:r.length,o=Array(e);++n<e;)o[n]=t(r[n],n,r);return o}(t,l)+"";if(r(t))return i?i.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}function s(r){return r}var b=/^(?:0|[1-9]\d*)$/;function v(r,t){var n=typeof r;return!!(t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&b.test(r))&&r>-1&&r%1==0&&r<t}function p(r){return"number"==typeof r&&r>-1&&r%1==0&&r<=9007199254740991}var y=Object.prototype;function j(r){return o(r)&&"[object Arguments]"==e(r)}var d=Object.prototype,m=d.hasOwnProperty,x=d.propertyIsEnumerable,g=j(function(){return arguments}())?j:function(r){return o(r)&&m.call(r,"callee")&&!x.call(r,"callee")},O="object"==typeof exports&&exports&&!exports.nodeType&&exports,h=O&&"object"==typeof module&&module&&!module.nodeType&&module,A=h&&h.exports===O?u.Buffer:void 0,F=(A?A.isBuffer:void 0)||function(){return!1},$={};$["[object Float32Array]"]=$["[object Float64Array]"]=$["[object Int8Array]"]=$["[object Int16Array]"]=$["[object Int32Array]"]=$["[object Uint8Array]"]=$["[object Uint8ClampedArray]"]=$["[object Uint16Array]"]=$["[object Uint32Array]"]=!0,$["[object Arguments]"]=$["[object Array]"]=$["[object ArrayBuffer]"]=$["[object Boolean]"]=$["[object DataView]"]=$["[object Date]"]=$["[object Error]"]=$["[object Function]"]=$["[object Map]"]=$["[object Number]"]=$["[object Object]"]=$["[object RegExp]"]=$["[object Set]"]=$["[object String]"]=$["[object WeakMap]"]=!1;var w,E="object"==typeof exports&&exports&&!exports.nodeType&&exports,R=E&&"object"==typeof module&&module&&!module.nodeType&&module,S=R&&R.exports===E&&f.process,k=function(){try{return R&&R.require&&R.require("util").types||S&&S.binding&&S.binding("util")}catch(r){}}(),G=k&&k.isTypedArray,L=G?(w=G,function(r){return w(r)}):function(r){return o(r)&&p(r.length)&&!!$[e(r)]},N=Object.prototype.hasOwnProperty;var P=Object.prototype.hasOwnProperty;function T(r){return null!=(t=r)&&p(t.length)&&!function(r){if(!n(r))return!1;var t=e(r);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}(t)?function(r,t){var n=c(r),e=!n&&g(r),o=!n&&!e&&F(r),u=!n&&!e&&!o&&L(r),f=n||e||o||u,a=f?function(r,t){for(var n=-1,e=Array(r);++n<r;)e[n]=t(n);return e}(r.length,String):[],i=a.length;for(var l in r)!t&&!N.call(r,l)||f&&("length"==l||o&&("offset"==l||"parent"==l)||u&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||v(l,i))||a.push(l);return a}(r,!0):function(r){if(!n(r))return function(r){var t=[];if(null!=r)for(var n in Object(r))t.push(n);return t}(r);var t,e,o=(t=r)===("function"==typeof(e=t&&t.constructor)&&e.prototype||y),u=[];for(var f in r)("constructor"!=f||!o&&P.call(r,f))&&u.push(f);return u}(r);var t}var q=/[\\^$.*+?()[\]{}|]/g,z=RegExp(q.source);function B(r,t){return null==r?r:function(r,t,n){for(var e=-1,o=Object(r),u=n(r),f=u.length;f--;){var c=u[++e];if(!1===t(o[c],c,o))break}return r}(r,"function"==typeof(n=t)?n:s,T);var n}const C=(r,t)=>{const n=function(r){var t;return(r=null==(t=r)?"":l(t))&&z.test(r)?r.replace(q,"\\$&"):r}(t),e=new RegExp(n,"i");0===r.length&&console.warn("No data was passed to the filter function.\n    The data argument should be an array of objects");const o=(r,t)=>{if(r?.constant||r?.filterDisabled)return!0;let n=!1;return B(r,(r=>{"function"!=typeof r&&null!=r&&(Array.isArray(r)||"object"==typeof r&&null!==r?o(r,t)&&(n=!0):t.test(r)&&(n=!0))})),n};return r.filter((r=>o(r,e)))};export{C as f}
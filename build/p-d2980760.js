/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0-next.9
 */
import{g as n}from"./p-a2b8d6f6.js";import{g as t}from"./p-2bc2c05a.js";const s={};function c(){throw new Error("could not fetch component message bundle")}function o(n){n.messages={...n.defaultMessages,...n.messageOverrides}}async function a(n){n.defaultMessages=await i(n,n.effectiveLocale),o(n)}async function i(o,a){const{el:i}=o,e=i.tagName.toLowerCase().replace("calcite-","");return async function(t,o){const a=`${o}_${t}`;return s[a]||(s[a]=fetch(n(`./assets/${o}/t9n/messages_${t}.json`)).then((n=>(n.ok||c(),n.json()))).catch((()=>c()))),s[a]}(t(a,"t9n"),e)}async function e(n,t){n.defaultMessages=await i(n,t),o(n)}function f(n){n.onMessagesChange=r}function u(n){n.onMessagesChange=void 0}function r(){o(this)}export{f as c,u as d,a as s,e as u}
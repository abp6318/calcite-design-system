/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0-next.9
 */
import{f as n}from"./p-a2b8d6f6.js";const a=new WeakMap,e=new WeakMap;function s(n){e.set(n,new Promise((e=>a.set(n,e))))}function t(n){a.get(n)()}function o(n){return e.get(n)}async function r(a){return await o(a),n(a),new Promise((n=>requestAnimationFrame((()=>n()))))}export{t as a,o as b,r as c,s}
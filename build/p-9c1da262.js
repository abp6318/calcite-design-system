/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0-next.9
 */
import{f as t}from"./p-a2b8d6f6.js";import{c as o}from"./p-0c0a5f97.js";const n=new Set;let c;const f={childList:!0};function s(t){c||(c=o("mutation",i)),c.observe(t.el,f)}function a(t){n.delete(t.el),i(c.takeRecords()),c.disconnect();for(const[t]of n.entries())c.observe(t,f)}function i(o){o.forEach((({target:o})=>{t(o)}))}export{s as c,a as d}
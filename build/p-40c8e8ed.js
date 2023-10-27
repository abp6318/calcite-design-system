/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0-next.9
 */
import{c as t}from"./p-0c0a5f97.js";const n=["lang","role","aria-expanded"],o=new Map;let a;function c(t,o,a=!1){const{el:c}=t,e=a?t.globalAttributes:{};o.filter((t=>!!n.includes(t)&&!!c.hasAttribute(t))).forEach((t=>{const n=c.getAttribute(t);null!==n&&(e[t]=n)})),t.globalAttributes=e}function e(t){t.forEach((({target:t})=>{const[n,a]=o.get(t);c(n,a.attributeFilter)}))}function s(n,s){const{el:i}=n,r={attributeFilter:s};o.set(i,[n,r]),c(n,s,!0),a||(a=t("mutation",e)),a.observe(i,r)}function i(t){o.delete(t.el),e(a.takeRecords()),a.disconnect();for(const[t,[,n]]of o.entries())a.observe(t,n)}export{i as u,s as w}
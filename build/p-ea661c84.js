/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0-next.9
 */
import{h as t}from"./p-a2b8d6f6.js";const e={width:12,height:6,strokeWidth:1},i=({floatingLayout:i,key:o,ref:r})=>{const{width:a,height:h,strokeWidth:s}=e,d=a/2,n="vertical"===i,l=`M0,0 H${a} L${a-d},${h} Q${d},${h} ${d},${h} Z`;return t("svg",{"aria-hidden":"true",class:"calcite-floating-ui-arrow",height:a,key:o,ref:r,viewBox:`0 0 ${a} ${a+(n?0:s)}`,width:a+(n?s:0)},s>0&&t("path",{class:"calcite-floating-ui-arrow__stroke",d:l,fill:"none","stroke-width":s+1}),t("path",{d:l,stroke:"none"}))};export{i as F}
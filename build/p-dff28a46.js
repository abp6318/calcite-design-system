/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0-next.9
 */
let t;function e(t,e){return parseInt(t.getPropertyValue(e))}async function a(){return t||(t=new Promise((t=>{requestAnimationFrame((()=>{const a=getComputedStyle(document.body);t({width:{large:e(a,"--calcite-app-breakpoint-width-lg"),medium:e(a,"--calcite-app-breakpoint-width-md"),small:e(a,"--calcite-app-breakpoint-width-sm"),xsmall:e(a,"--calcite-app-breakpoint-width-xs"),xxsmall:e(a,"--calcite-app-breakpoint-width-xxs")}})}))})),t)}export{a as g}
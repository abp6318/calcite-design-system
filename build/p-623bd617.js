/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0-next.9
 */
import{q as n,c as t}from"./p-d2216e3b.js";import{h as e}from"./p-a2b8d6f6.js";!function(n){function t(n,t,e){throw new n("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+t+".",e)}"function"!=typeof n.requestSubmit&&(n.requestSubmit=function(n){n?(function(n,e){n instanceof HTMLElement||t(TypeError,"parameter 1 is not of type 'HTMLElement'"),"submit"==n.type||t(TypeError,"The specified element is not a submit button"),n.form==e||t(DOMException,"The specified element is not owned by this form element","NotFoundError")}(n,this),n.click()):((n=document.createElement("input")).type="submit",n.hidden=!0,this.appendChild(n),n.click(),this.removeChild(n))})}(HTMLFormElement.prototype);const o="hidden-form-input";function r(n){return"checked"in n}const i=new WeakMap,s=new WeakSet;function c(n){const{formEl:t}=n;return!!t&&(t.requestSubmit(),!0)}function u(n){n.formEl?.reset()}function f(n){const{el:e,value:o}=n,c=m(n);if(!c||function(n,e){if(t(e.parentElement,"[form]"))return!0;const o="calciteInternalFormComponentRegister";let r=!1;return n.addEventListener(o,(n=>{r=n.composedPath().some((n=>s.has(n))),n.stopPropagation()}),{once:!0}),e.dispatchEvent(new CustomEvent(o,{bubbles:!0,composed:!0})),r}(c,e))return;n.formEl=c,n.defaultValue=o,r(n)&&(n.defaultChecked=n.checked);const u=(n.onFormReset||a).bind(n);c.addEventListener("reset",u),i.set(n.el,u),s.add(e)}function m(e){const{el:o,form:r}=e;return r?n(o,{id:r}):t(o,"form")}function a(){r(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function l(n){const{el:t,formEl:e}=n;if(!e)return;const o=i.get(t);e.removeEventListener("reset",o),i.delete(t),n.formEl=null,s.delete(t)}function p(n,t){n.defaultValue=t}const d=n=>{n.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:!0}))},h=n=>n.removeEventListener("change",d);function b(n,t,e){const{defaultValue:o,disabled:i,form:s,name:c,required:u}=n;t.defaultValue=o,t.disabled=i,t.name=c,t.required=u,t.tabIndex=-1,s?t.setAttribute("form",s):t.removeAttribute("form"),r(n)?(t.checked=n.checked,t.defaultChecked=n.defaultChecked,t.value=n.checked?e||"on":""):t.value=e||"",n.syncHiddenFormInput?.(t)}const E=({component:n})=>(function(n){const{el:t,formEl:e,name:r,value:i}=n,{ownerDocument:s}=t,c=t.querySelectorAll(`input[slot="${o}"]`);if(!e||!r)return void c.forEach((n=>{h(n),n.remove()}));const u=Array.isArray(i)?i:[i],f=[],m=new Set;let a;c.forEach((t=>{const e=u.find((n=>n==t.value));null!=e?(m.add(e),b(n,t,e)):f.push(t)})),u.forEach((t=>{if(m.has(t))return;let e=f.pop();e||(e=s.createElement("input"),e.slot=o),a||(a=s.createDocumentFragment()),a.append(e),e.addEventListener("change",d),b(n,e,t)})),a&&t.append(a),f.forEach((n=>{h(n),n.remove()}))}(n),e("slot",{name:o}));export{E as H,p as a,f as c,l as d,m as f,u as r,c as s}
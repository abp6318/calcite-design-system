/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0-next.9
 */
import{g as t}from"./p-8e7e3e00.js";import{d as i,e as s,t as n}from"./p-d2216e3b.js";import{d as e}from"./p-f9ef5b99.js";import{h as a,H as o}from"./p-a2b8d6f6.js";const c={heading:"heading",container:"container",indented:"container--indented"},r={parentItem:"parent-item"};function l(){this.setUpItems(),this.setUpFilter(),this.deselectRemovedItems()}const h=["ArrowUp","ArrowDown"];function u(){this.setUpItems(),this.setUpFilter(),this.emitCalciteListChange=e(F.bind(this),0),this.emitCalciteListFilter=e(A.bind(this),0)}function f(){this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0})}function d(){this.mutationObserver?.disconnect()}function m(t){const{selectedValues:s}=this,{item:n,value:e,selected:a,shiftPressed:o}=t.detail;a?(this.multiple&&o&&this.selectSiblings(n),this.multiple||this.deselectSiblingItems(n),s.set(e,n)):(s.delete(e),this.multiple&&o&&this.selectSiblings(n,!0)),this.multiple||(y(n,a),a&&i(n)),this.lastSelectedItem=n,this.emitCalciteListChange()}function p(t){const i=t.detail.oldValue,s=this.selectedValues;if(s.has(i)){const n=s.get(i);s.delete(i),s.set(t.detail.newValue,n)}t.stopPropagation()}function v(t){const{el:i,items:s,multiple:n,selectedValues:e}=this;n||i.contains(t.relatedTarget)||x(s).forEach((i=>{y(i,0===e.size?i.contains(t.target)||t.target===i:i.selected)}))}function g(t){const{key:s,target:n}=t;if(!function(t){return!!h.find((i=>i===t))}(s))return;const{items:e,multiple:a,selectionFollowsFocus:o}=this,{length:c}=e,r=e.indexOf(n);if(!c||-1===r)return;t.preventDefault();const l=e[b(this,n,"ArrowUp"===s?"up":"down")];e.forEach((t=>y(t,t===l))),!a&&o&&(l.selected=!0),i(l)}function b(i,s,n){const{items:e}=i,{length:a}=e,o=e.indexOf(s),c="up"===n?-1:1;let r=1,l=t(o+c*r++,a);const h=l;for(;e[l].disabled&&(l=t(o+c*r++,a),l!==h););return l}function w(t,i){const{items:s}=t;return s.indexOf(i)}function x(t){return t.filter((t=>!t.disabled))}function A(){this.calciteListFilter.emit()}function F(){this.calciteListChange.emit(this.selectedValues)}function E(t){if(t.defaultPrevented)return;const i=t.target,s=this.selectedValues;"CALCITE-PICK-LIST-GROUP"===i.parentElement.tagName&&i.slot===r.parentItem?(i.parentElement.remove(),Array.from(i.parentElement.children).forEach((t=>s.delete(t.value)))):(i.remove(),s.delete(i.value)),this.emitCalciteListChange()}function y(t,i){t.disabled||(i?t.removeAttribute("tabindex"):t.setAttribute("tabindex","-1"))}async function C(t){if(this.filterEnabled&&"filter"===t)return void await i(this.filterEl);const{items:s,multiple:n,selectionFollowsFocus:e}=this;if(0===s.length)return;if(n)return x(s)[0]?.setFocus();const a=x(s),o=a.find((t=>t.selected))||a[0];return e&&o&&(o.selected=!0),o.setFocus()}function k(t){this.items=Array.from(this.el.querySelectorAll(t));let i=!1;const{items:s}=this;s.forEach((t=>{t.icon=this.getIconType(),this.multiple||(t.deselectDisabled=!0,y(t,!1)),t.selected&&(i=!0,y(t,!0),this.selectedValues.set(t.value,t))}));const[n]=s;i||!n||n.disabled||y(n,!0)}function I(){const t=this.selectedValues,i=this.items.map((({value:t})=>t));t.forEach((t=>{i.includes(t.value)||this.selectedValues.delete(t.value)}))}function j(t){this.items.forEach((i=>{i.value!==t.value&&(i.toggleSelected(!1),this.selectedValues.has(i.value)&&this.selectedValues.delete(i.value))}))}function S(t,i=!1){if(!this.lastSelectedItem)return;const{items:s}=this,n=s.findIndex((t=>t.value===this.lastSelectedItem.value)),e=s.findIndex((i=>i.value===t.value));s.slice(Math.min(n,e),Math.max(n,e)).forEach((t=>{t.toggleSelected(!i),i?this.selectedValues.delete(t.value):this.selectedValues.set(t.value,t)}))}let L;function P(t=!1){const{filteredData:i,filterText:n}=this,e=i.map((t=>t.value));let a=!1;L||(L=new Set);const o=this.items?.filter((t=>{const i=t.parentElement;i.matches("calcite-pick-list-group")&&L.add(i);const s=!n||e.includes(t.value);return t.hidden=!s,a||(a=s&&t.selected),s}))||[];L.forEach((t=>{const i=o.some((i=>t.contains(i)));if(t.hidden=!i,!i)return;const n=s(t,"parent-item");n&&(n.hidden=!1,o.includes(n)&&Array.from(t.children).forEach((t=>t.hidden=!1)))})),L.clear(),o.length>0&&!a&&!this.multiple&&y(o[0],!0),this.setFilteredItems(o),t&&this.emitCalciteListFilter()}function T(){const t=this.filterEl?.filteredItems;t&&(this.filteredData=t),this.handleFilter()}function D(t){t.stopPropagation();const{filteredItems:i,value:s}=t.currentTarget;this.filterText=s,this.filteredData=i,this.handleFilter(!0)}function U(){return this.items.map((t=>({label:t.label,description:t.description,metadata:t.metadata,value:t.value})))}var q;!function(t){t.circle="circle",t.square="square",t.grip="grip"}(q||(q={}));const M=({props:{disabled:t,loading:i,filterEnabled:s,dataForFilter:e,handleFilterEvent:c,filterPlaceholder:r,filterText:l,setFilterEl:h,dragEnabled:u,storeAssistiveEl:f},...d})=>{const m=a("slot",null);return a(o,{"aria-busy":n(i),role:"menu",...d},a("section",null,u?a("span",{"aria-live":"assertive",class:"assistive-text",ref:f}):null,a("header",{class:{"sticky-pos":!0}},s?a("calcite-filter",{"aria-label":r,disabled:i||t,items:e,onCalciteFilterChange:c,placeholder:r,value:l,ref:h}):null,a("slot",{name:"menu-actions"})),i?a("calcite-scrim",{loading:i}):null,m))},V={actions:"actions",actionsEnd:"actions--end",actionsStart:"actions--start",description:"description",handle:"handle",handleActivated:"handle--activated",highlight:"highlight",icon:"icon",iconDot:"icon-dot",label:"label",remove:"remove",title:"title",textContainer:"text-container"},G={checked:"check",remove:"x"},H={actionsEnd:"actions-end",actionsStart:"actions-start"};export{V as C,q as I,M as L,H as S,j as a,D as b,U as c,I as d,b as e,f,w as g,P as h,u as i,T as j,g as k,d as l,l as m,v as n,m as o,p,k as q,E as r,S as s,C as t,r as u,c as v,G as w}
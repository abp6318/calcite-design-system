/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0-next.9
 */
import{r as e,c as t,h as i,H as n,a as o}from"./p-a2b8d6f6.js";import{d as s,z as c,e as a,b as r,g as l,t as h,A as d}from"./p-d2216e3b.js";import{c as m,d as u}from"./p-9c1da262.js";import{c as p,d as f,u as b}from"./p-2e1b2031.js";import{C as v}from"./p-f8ee0d71.js";import{g as k}from"./p-90c940c9.js";import"./p-9c138760.js";import"./p-0c0a5f97.js";import"./p-3f10228f.js";function x(e){return"CALCITE-TREE-ITEM"===e?.tagName}const g=class{constructor(i){e(this,i),this.calciteTreeSelect=t(this,"calciteTreeSelect",6),this.keyDownHandler=e=>{if(this.child)return;const t=this.el,i=e.target;if(!x(i)||!this.el.contains(i)||!["ArrowRight","ArrowDown","ArrowLeft","ArrowUp","Home","End","Tab"].includes(e.key))return;const n=function(e){return Array.from(e.querySelectorAll("calcite-tree-item:not([disabled])")).filter((t=>{let i=t;for(;i!==e&&void 0!==i;){const e=i.parentElement;if(x(e)&&e.hasChildren&&!e.expanded)return!1;i=i.parentElement}return!0}))}(t);if("Tab"!==e.key){if("ArrowDown"===e.key){const t=n.indexOf(i);return n[t+1]?.focus(),void e.preventDefault()}if("ArrowUp"===e.key){const t=n.indexOf(i);return n[t-1]?.focus(),void e.preventDefault()}if("ArrowLeft"===e.key)return i.hasChildren&&i.expanded?(i.expanded=!1,void e.preventDefault()):(n.slice(0,n.indexOf(i)).reverse().find((e=>e.depth===i.depth-1))?.focus(),void e.preventDefault());if("ArrowRight"!==e.key)if("Home"!==e.key)if("End"!==e.key);else{const t=n.pop();t&&(t.focus(),e.preventDefault())}else{const t=n.shift();t&&(t.focus(),e.preventDefault())}else if(!i.disabled&&i.hasChildren)if(i.expanded){const t=n.indexOf(i);n[t+1]?.focus(),e.preventDefault()}else i.expanded=!0,e.preventDefault()}else n.forEach((e=>e.tabIndex=-1))},this.lines=!1,this.child=void 0,this.scale="m",this.selectionMode="single",this.selectedItems=[]}componentWillRender(){const e=this.el.parentElement?.closest("calcite-tree");this.lines=e?e.lines:this.lines,this.scale=e?e.scale:this.scale,this.selectionMode=e?e.selectionMode:this.selectionMode,this.child=!!e}render(){return i(n,{"aria-multiselectable":this.child?void 0:("multiple"===this.selectionMode||"multichildren"===this.selectionMode).toString(),onKeyDown:this.keyDownHandler,role:this.child?void 0:"tree",tabIndex:this.getRootTabIndex()},i("slot",null))}onFocus(){if(!this.child){const e=this.el.querySelector("calcite-tree-item[selected]:not([disabled])")||this.el.querySelector("calcite-tree-item:not([disabled])");s(e)}}onFocusIn(e){(e.relatedTarget===this.el||!this.el.contains(e.relatedTarget))&&this.el.removeAttribute("tabindex")}onFocusOut(e){!this.el.contains(e.relatedTarget)&&(this.el.tabIndex=this.getRootTabIndex())}onInternalTreeItemSelect(e){if(this.child)return;const t=e.target,i=c(t.querySelectorAll("calcite-tree-item"));if(e.preventDefault(),e.stopPropagation(),"ancestors"===this.selectionMode)return void this.updateAncestorTree(e);const n="none"===this.selectionMode,o=null!==this.selectionMode&&(!t.hasChildren||t.hasChildren&&("children"===this.selectionMode||"multichildren"===this.selectionMode)),s="multichildren"===this.selectionMode&&t.hasChildren,a=!n&&e.detail.modifyCurrentSelection&&("multiple"===this.selectionMode||"multichildren"===this.selectionMode),r=!a&&(("single"===this.selectionMode||"multiple"===this.selectionMode)&&i.length<=0||"children"===this.selectionMode||"multichildren"===this.selectionMode),l=["multiple","none","single","single-persist"].includes(this.selectionMode)&&t.hasChildren,h=[];o&&h.push(t),r&&c(this.el.querySelectorAll("calcite-tree-item[selected]")).forEach((e=>{h.includes(e)||(e.selected=!1)})),l&&["multiple","none","single","single-persist"].includes(this.selectionMode)&&(t.expanded=!t.expanded),s&&i.forEach((e=>{e.selected=!1,e.hasChildren&&(e.expanded=!1)})),a&&window.getSelection().removeAllRanges(),a&&t.selected?h.forEach((e=>{e.disabled||(e.selected=!1)})):n||h.forEach((e=>{e.disabled||(e.selected=!0)})),this.selectedItems=n?[]:c(this.el.querySelectorAll("calcite-tree-item")).filter((e=>e.selected)),this.calciteTreeSelect.emit(),e.stopPropagation()}updateAncestorTree(e){const t=e.target,i=e.detail.updateItem;if(t.disabled||t.indeterminate&&!i)return;const n=[];let o=t.parentElement.closest("calcite-tree-item");for(;o;)n.push(o),o=o.parentElement.closest("calcite-tree-item");const s=Array.from(t.querySelectorAll("calcite-tree-item:not([disabled])")),a=s.filter((e=>!e.hasChildren)),r=s.filter((e=>e.hasChildren));let l;function h(e,t){const i=e.filter((e=>e.selected)),n=e.filter((e=>!e.selected));t.selected=i.length===e.length,t.indeterminate=i.length>0&&n.length>0}l=i?t.hasChildren?!(t.selected||t.indeterminate):!t.selected:t.selected,a.forEach((e=>{e.selected=l,e.indeterminate=!1})),r.reverse().forEach((e=>{h(Array.from(e.querySelectorAll(":scope > calcite-tree > calcite-tree-item")),e)})),i&&(t.hasChildren?h(s,t):(t.selected=l,t.indeterminate=!1)),n.forEach((e=>{const t=c(e.querySelectorAll("calcite-tree-item")),i=t.filter((e=>e.selected));if(0===i.length)return e.selected=!1,void(e.indeterminate=!1);const n=i.length<t.length;e.indeterminate=n,e.selected=!n})),this.selectedItems=c(this.el.querySelectorAll("calcite-tree-item")).filter((e=>e.selected)),i&&this.calciteTreeSelect.emit()}getRootTabIndex(){return this.child?-1:0}get el(){return o(this)}};g.style=":host{display:block}:host(:focus){outline:2px solid transparent;outline-offset:2px}:host([hidden]){display:none}[hidden]{display:none}";const y="children",w="bullet-point",z="check",A=class{constructor(i){e(this,i),this.calciteInternalTreeItemSelect=t(this,"calciteInternalTreeItemSelect",6),this.iconClickHandler=e=>{e.stopPropagation(),this.expanded=!this.expanded},this.childrenClickHandler=e=>e.stopPropagation(),this.userChangedValue=!1,this.updateParentIsExpanded=(e,t)=>{a(e,y,{all:!0,selector:"calcite-tree-item"}).forEach((e=>e.parentExpanded=t))},this.actionsEndSlotChangeHandler=e=>{this.hasEndActions=r(e)},this.disabled=!1,this.expanded=!1,this.iconFlipRtl=void 0,this.iconStart=void 0,this.selected=!1,this.parentExpanded=!1,this.depth=-1,this.hasChildren=null,this.lines=void 0,this.scale=void 0,this.indeterminate=!1,this.selectionMode=void 0,this.hasEndActions=!1,this.updateAfterInitialRender=!1}expandedHandler(e){this.updateParentIsExpanded(this.el,e)}handleSelectedChange(e){"ancestors"!==this.selectionMode||this.userChangedValue||(e&&(this.indeterminate=!1),this.calciteInternalTreeItemSelect.emit({modifyCurrentSelection:!0,updateItem:!1}))}getSelectionMode(){this.isSelectionMultiLike="multiple"===this.selectionMode||"multichildren"===this.selectionMode}connectedCallback(){if(this.parentTreeItem=this.el.parentElement?.closest("calcite-tree-item"),this.parentTreeItem){const{expanded:e}=this.parentTreeItem;this.updateParentIsExpanded(this.parentTreeItem,e)}m(this),p(this)}disconnectedCallback(){u(this),f(this)}componentWillRender(){this.hasChildren=!!this.el.querySelector("calcite-tree"),this.depth=0;let e,t=this.el.closest("calcite-tree");if(t)for(this.selectionMode=t.selectionMode,this.scale=t.scale||"m",this.lines=t.lines;t&&(e=t.parentElement?.closest("calcite-tree"),e!==t);)t=e,this.depth=this.depth+1}componentWillLoad(){requestAnimationFrame((()=>this.updateAfterInitialRender=!0))}componentDidLoad(){this.updateAncestorTree()}componentDidRender(){b(this,(()=>!1))}render(){const e="rtl"===l(this.el),t="single"===this.selectionMode||"children"===this.selectionMode,o="multiple"===this.selectionMode||"multichildren"===this.selectionMode,s="none"===this.selectionMode&&!this.hasChildren,c=this.hasChildren?i("calcite-icon",{class:{chevron:!0,[v.rtl]:e},"data-test-id":"icon",icon:"chevron-right",onClick:this.iconClickHandler,scale:k(this.scale)}):null,a=i("slot",{key:"default-slot"}),r="ancestors"===this.selectionMode?i("label",{class:"checkbox-label",key:"checkbox-label"},i("calcite-checkbox",{checked:this.selected,class:"checkbox","data-test-id":"checkbox",indeterminate:this.hasChildren&&this.indeterminate,scale:this.scale,tabIndex:-1}),a):null,d=t?w:o?z:s?"blank":null,m=d?i("calcite-icon",{class:{"bullet-point":d===w,checkmark:d===z,[v.rtl]:e},icon:d,scale:k(this.scale)}):null,u=!(this.parentExpanded||1===this.depth),p=this.updateAfterInitialRender&&this.expanded,{hasEndActions:f}=this,b=i("slot",{key:"actionsEndSlot",name:"actions-end",onSlotchange:this.actionsEndSlotChangeHandler}),x=i("calcite-icon",{class:"icon-start",flipRtl:"start"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconStart,scale:k(this.scale)});return i(n,{"aria-expanded":this.hasChildren?h(p):void 0,"aria-hidden":h(u),"aria-selected":this.selected?"true":o?"false":void 0,"calcite-hydrated-hidden":u,role:"treeitem"},i("div",{class:{"item--expanded":p}},i("div",{class:"node-actions-container"},i("div",{class:{"node-container":!0,[v.rtl]:e},"data-selection-mode":this.selectionMode,ref:e=>this.defaultSlotWrapper=e},c,m,this.iconStart?x:null,r||a),i("div",{class:"actions-end",hidden:!f,ref:e=>this.actionSlotWrapper=e},b)),i("div",{class:{"children-container":!0,[v.rtl]:e},"data-test-id":"calcite-tree-children",onClick:this.childrenClickHandler,role:this.hasChildren?"group":void 0},i("slot",{name:y}))))}onClick(e){if(this.disabled||this.isActionEndEvent(e))return;const[t]=d(this.el,"a");t&&"a"!==e.composedPath()[0].tagName.toLowerCase()&&window.open(t.href,""===t.target?"_self":t.target),this.calciteInternalTreeItemSelect.emit({modifyCurrentSelection:"ancestors"===this.selectionMode||this.isSelectionMultiLike,updateItem:!0}),this.userChangedValue=!0}keyDownHandler(e){if(!this.isActionEndEvent(e)&&!e.defaultPrevented)switch(e.key){case" ":this.userChangedValue=!0,this.calciteInternalTreeItemSelect.emit({modifyCurrentSelection:this.isSelectionMultiLike,updateItem:!0}),e.preventDefault();break;case"Enter":const t=Array.from(this.el.children).find((e=>e.matches("a")));this.userChangedValue=!0,t?(t.click(),this.selected=!0):this.calciteInternalTreeItemSelect.emit({modifyCurrentSelection:this.isSelectionMultiLike,updateItem:!0}),e.preventDefault()}}isActionEndEvent(e){return e.composedPath().includes(this.actionSlotWrapper)}updateAncestorTree(){const e=this.parentTreeItem;if("ancestors"===this.selectionMode&&e)if(this.selected){const t=Array.from(this.el.parentElement?.children),i=t.filter((e=>e.selected));t.length===i.length?(e.selected=!0,e.indeterminate=!1):i.length>0&&(e.indeterminate=!0),Array.from(this.el.querySelectorAll("calcite-tree-item:not([disabled])")).forEach((e=>{e.selected=!0,e.indeterminate=!1}))}else this.indeterminate&&(this.parentTreeItem.indeterminate=!0)}get el(){return o(this)}static get watchers(){return{expanded:["expandedHandler"],selected:["handleSelectedChange"],selectionMode:["getSelectionMode"]}}};A.style=':host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;max-inline-size:100%;cursor:pointer;color:var(--calcite-ui-text-3)}.node-actions-container{display:flex}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .node-actions-container{min-block-size:1.5rem}:host([scale=s]) .node-actions-container .node-container .checkbox,:host([scale=s]) .node-actions-container .node-container .chevron,:host([scale=s]) .node-actions-container .node-container .checkmark,:host([scale=s]) .node-actions-container .node-container .bullet-point{margin-inline:0.25rem}:host([scale=s]) .node-actions-container .node-container .icon-start{margin-inline:0.75rem}:host([scale=m]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .node-actions-container{min-block-size:2rem}:host([scale=m]) .node-actions-container .node-container .checkbox,:host([scale=m]) .node-actions-container .node-container .chevron,:host([scale=m]) .node-actions-container .node-container .checkmark,:host([scale=m]) .node-actions-container .node-container .bullet-point{margin-inline:0.5rem}:host([scale=m]) .node-actions-container .node-container .icon-start{margin-inline:0.75rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .node-actions-container{min-block-size:2.75rem}:host([scale=l]) .node-actions-container .node-container .checkbox,:host([scale=l]) .node-actions-container .node-container .chevron,:host([scale=l]) .node-actions-container .node-container .checkmark,:host([scale=l]) .node-actions-container .node-container .bullet-point{margin-inline:0.75rem}:host([scale=l]) .node-actions-container .node-container .icon-start{margin-inline:0.75rem}:host([lines]) .children-container:after{position:absolute;inset-block-start:0px;z-index:var(--calcite-app-z-index);inline-size:1px;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;block-size:96%;content:"";background-color:var(--calcite-ui-border-2)}:host(:not([lines])) .node-container:after{display:none}::slotted(*){min-inline-size:0px;max-inline-size:100%;overflow-wrap:break-word;color:inherit;text-decoration:none !important}::slotted(*):hover{text-decoration:none !important}::slotted(a){inline-size:100%;text-decoration-line:none}:host{outline:2px solid transparent;outline-offset:2px}:host .node-container{outline-color:transparent}:host:focus .node-container,:host:active .node-container{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host(:focus:not([disabled])) .node-container{outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.actions-end{display:flex;flex-direction:row;align-items:center;align-self:stretch}.checkbox{line-height:0}.checkbox-label{pointer-events:none;display:flex;align-items:center}.checkbox:focus{outline:2px solid transparent;outline-offset:2px}.children-container{position:relative;block-size:0px;transform-origin:top;overflow:hidden;opacity:0;margin-inline-start:1.25rem;transform:scaleY(0);transition:var(--calcite-animation-timing) cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity var(--calcite-animation-timing) cubic-bezier(0.215, 0.44, 0.42, 0.88), all var(--calcite-animation-timing) ease-in-out}.item--expanded>.children-container{overflow:visible;opacity:1;transform:none;block-size:auto}.node-container{position:relative;display:flex;min-inline-size:0px;flex-grow:1;align-items:center}.node-container .checkmark,.node-container .bullet-point{opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;color:var(--calcite-ui-border-1)}.node-container:hover .checkmark,.node-container:hover .bullet-point,:host([selected]) .node-container:hover .checkmark,:host([selected]) .node-container:hover .bullet-point,:host(:focus:not([disabled])) .node-container .checkmark,:host(:focus:not([disabled])) .node-container .bullet-point{opacity:1}:host([selected]) .node-container,:host([selected]) .node-container:hover{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([selected]) .node-container .bullet-point,:host([selected]) .node-container .checkmark,:host([selected]) .node-container:hover .bullet-point,:host([selected]) .node-container:hover .checkmark{opacity:1;color:var(--calcite-ui-brand)}:host([selection-mode=none]:not([has-children])):host([scale=s]) .node-container{padding-inline-start:0.5rem}:host([selection-mode=none]:not([has-children])):host([scale=m]) .node-container{padding-inline-start:1rem}:host([selection-mode=none]:not([has-children])):host([scale=l]) .node-container{padding-inline-start:1.5rem}:host(:not([has-children])):host([scale=s]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.25rem}:host(:not([has-children])):host([scale=m]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.5rem}:host(:not([has-children])):host([scale=l]) .node-container[data-selection-mode=ancestors] .checkbox{padding-inline-start:1.75rem}:host([has-children]) .node-container[data-selection-mode=ancestors] .checkbox{margin-inline-start:0}:host([has-children]) .node-container .bullet-point,:host([has-children]) .node-container .checkmark{display:none}.chevron{position:relative;align-self:center;color:var(--calcite-ui-text-3);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;flex:0 0 auto;transform:rotate(0deg)}.calcite--rtl .chevron{transform:rotate(180deg)}.item--expanded .node-container>.chevron{transform:rotate(90deg)}:host([selected]) .checkmark,:host([selected]) .bullet-point{color:var(--calcite-ui-brand)}:host([hidden]){display:none}[hidden]{display:none}';export{g as calcite_tree,A as calcite_tree_item}
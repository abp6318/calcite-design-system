/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0-next.9
 */
import{r as t,c as i,h as e,H as n,a as o}from"./p-a2b8d6f6.js";import{t as s,i as a,l as r,d as c}from"./p-d2216e3b.js";import{f as l,c as d,d as h,a as p,F as m,r as u}from"./p-b3f9d7de.js";import{g as f}from"./p-9c138760.js";import{c as g,u as w,d as b}from"./p-2e1b2031.js";import{i as v}from"./p-6294fd29.js";import{c as k,s as x,a as y}from"./p-dca33159.js";import{c as z}from"./p-0c0a5f97.js";import{o as D}from"./p-756d283a.js";import{g as C}from"./p-90c940c9.js";import"./p-f8ee0d71.js";import"./p-f9ef5b99.js";import"./p-3f10228f.js";const I=class{constructor(e){t(this,e),this.calciteDropdownSelect=i(this,"calciteDropdownSelect",6),this.calciteDropdownBeforeClose=i(this,"calciteDropdownBeforeClose",6),this.calciteDropdownClose=i(this,"calciteDropdownClose",6),this.calciteDropdownBeforeOpen=i(this,"calciteDropdownBeforeOpen",6),this.calciteDropdownOpen=i(this,"calciteDropdownOpen",6),this.items=[],this.groups=[],this.mutationObserver=z("mutation",(()=>this.updateItems())),this.resizeObserver=z("resize",(t=>this.resizeObserverCallback(t))),this.openTransitionProp="opacity",this.guid=`calcite-dropdown-${f()}`,this.defaultAssignedElements=[],this.slotChangeHandler=t=>{this.defaultAssignedElements=t.target.assignedElements({flatten:!0}),this.updateItems()},this.setFilteredPlacements=()=>{const{el:t,flipPlacements:i}=this;this.filteredFlipPlacements=i?l(i,t):null},this.updateTriggers=t=>{this.triggers=t.target.assignedElements({flatten:!0}),this.reposition(!0)},this.updateItems=()=>{this.items=this.groups.map((t=>Array.from(t?.querySelectorAll("calcite-dropdown-item")))).reduce(((t,i)=>[...t,...i]),[]),this.updateSelectedItems(),this.reposition(!0),this.items.forEach((t=>t.scale=this.scale))},this.updateGroups=t=>{const i=t.target.assignedElements({flatten:!0}).filter((t=>t?.matches("calcite-dropdown-group")));this.groups=i,this.updateItems()},this.resizeObserverCallback=t=>{t.forEach((t=>{const{target:i}=t;i===this.referenceEl?this.setDropdownWidth():i===this.scrollerEl&&this.setMaxScrollerHeight()}))},this.setDropdownWidth=()=>{const{referenceEl:t,scrollerEl:i}=this,e=t?.clientWidth;e&&i&&(i.style.minWidth=`${e}px`)},this.setMaxScrollerHeight=()=>{const{scrollerEl:t}=this;if(!t)return;this.reposition(!0);const i=this.getMaxScrollerHeight();t.style.maxHeight=i>0?`${i}px`:"",this.reposition(!0)},this.setScrollerAndTransitionEl=t=>{this.resizeObserver.observe(t),this.scrollerEl=t,this.transitionEl=t},this.setReferenceEl=t=>{this.referenceEl=t,d(this,this.referenceEl,this.floatingEl),this.resizeObserver.observe(t)},this.setFloatingEl=t=>{this.floatingEl=t,d(this,this.referenceEl,this.floatingEl)},this.keyDownHandler=t=>{if(!t.composedPath().includes(this.referenceEl))return;const{defaultPrevented:i,key:e}=t;if(!i){if(this.open){if("Escape"===e)return this.closeCalciteDropdown(),void t.preventDefault();if(t.shiftKey&&"Tab"===e)return this.closeCalciteDropdown(),void t.preventDefault()}v(e)?(this.openCalciteDropdown(),t.preventDefault()):"Escape"===e&&(this.closeCalciteDropdown(),t.preventDefault())}},this.focusOnFirstActiveOrFirstItem=()=>{this.getFocusableElement(this.items.find((t=>t.selected))||this.items[0])},this.toggleOpenEnd=()=>{this.focusOnFirstActiveOrFirstItem(),this.el.removeEventListener("calciteDropdownOpen",this.toggleOpenEnd)},this.openCalciteDropdown=()=>{this.open=!this.open,this.open&&this.el.addEventListener("calciteDropdownOpen",this.toggleOpenEnd)},this.open=!1,this.closeOnSelectDisabled=!1,this.disabled=!1,this.flipPlacements=void 0,this.maxItems=0,this.overlayPositioning="absolute",this.placement=h,this.selectedItems=[],this.type="click",this.width=void 0,this.scale="m"}openHandler(t){if(!this.disabled)return t&&this.reposition(!0),void D(this);this.open=!1}handleDisabledChange(t){t||(this.open=!1)}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}maxItemsHandler(){this.setMaxScrollerHeight()}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}handlePropsChange(){this.updateItems()}async setFocus(){await k(this),this.el.focus()}connectedCallback(){this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0}),this.setFilteredPlacements(),this.reposition(!0),this.open&&(this.openHandler(this.open),D(this)),g(this),this.updateItems()}componentWillLoad(){x(this)}componentDidLoad(){y(this),this.reposition(!0)}componentDidRender(){w(this)}disconnectedCallback(){this.mutationObserver?.disconnect(),this.resizeObserver?.disconnect(),b(this),p(this,this.referenceEl,this.floatingEl)}render(){const{open:t,guid:i}=this;return e(n,null,e("div",{class:"calcite-trigger-container",id:`${i}-menubutton`,onClick:this.openCalciteDropdown,onKeyDown:this.keyDownHandler,ref:this.setReferenceEl},e("slot",{"aria-controls":`${i}-menu`,"aria-expanded":s(t),"aria-haspopup":"menu",name:"trigger",onSlotchange:this.updateTriggers})),e("div",{"aria-hidden":s(!t),class:"calcite-dropdown-wrapper",ref:this.setFloatingEl},e("div",{"aria-labelledby":`${i}-menubutton`,class:{"calcite-dropdown-content":!0,[m.animation]:!0,[m.animationActive]:t},id:`${i}-menu`,role:"menu",ref:this.setScrollerAndTransitionEl},e("slot",{onSlotchange:this.updateGroups}))))}async reposition(t=!1){const{floatingEl:i,referenceEl:e,placement:n,overlayPositioning:o,filteredFlipPlacements:s}=this;return u(this,{floatingEl:i,referenceEl:e,overlayPositioning:o,placement:n,flipPlacements:s,type:"menu"},t)}closeCalciteDropdownOnClick(t){!this.disabled&&a(t)&&this.open&&!t.composedPath().includes(this.el)&&this.closeCalciteDropdown(!1)}closeCalciteDropdownOnEvent(t){this.closeCalciteDropdown(),t.stopPropagation()}closeCalciteDropdownOnOpenEvent(t){t.composedPath().includes(this.el)||(this.open=!1)}pointerEnterHandler(){this.disabled||"hover"!==this.type||this.openCalciteDropdown()}pointerLeaveHandler(){this.disabled||"hover"!==this.type||this.closeCalciteDropdown()}calciteInternalDropdownItemKeyEvent(t){const{keyboardEvent:i}=t.detail,e=i.target;switch(i.key){case"Tab":this.open=!1,this.updateTabIndexOfItems(e);break;case"ArrowDown":r(this.items,e,"next");break;case"ArrowUp":r(this.items,e,"previous");break;case"Home":r(this.items,e,"first");break;case"End":r(this.items,e,"last")}t.stopPropagation()}handleItemSelect(t){this.updateSelectedItems(),t.stopPropagation(),this.calciteDropdownSelect.emit(),this.closeOnSelectDisabled&&"none"!==t.detail.requestedDropdownGroup.selectionMode||this.closeCalciteDropdown(),t.stopPropagation()}onBeforeOpen(){this.calciteDropdownBeforeOpen.emit()}onOpen(){this.calciteDropdownOpen.emit()}onBeforeClose(){this.calciteDropdownBeforeClose.emit()}onClose(){this.calciteDropdownClose.emit()}updateSelectedItems(){this.selectedItems=this.items.filter((t=>t.selected))}getMaxScrollerHeight(){const{maxItems:t,items:i}=this;let e,n=0,o=0;return this.groups.forEach((i=>{t>0&&n<t&&Array.from(i.children).forEach(((i,s)=>{0===s&&(isNaN(e)&&(e=i.offsetTop),o+=e),n<t&&(o+=i.offsetHeight,n+=1)}))})),i.length>t?o:0}closeCalciteDropdown(t=!0){this.open=!1,t&&c(this.triggers[0])}getFocusableElement(t){if(!t)return;const i=t.attributes.isLink?t.shadowRoot.querySelector("a"):t;c(i)}updateTabIndexOfItems(t){this.items.forEach((i=>{i.tabIndex=t!==i?-1:0}))}static get delegatesFocus(){return!0}get el(){return o(this)}static get watchers(){return{open:["openHandler"],disabled:["handleDisabledChange"],flipPlacements:["flipPlacementsHandler"],maxItems:["maxItemsHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],scale:["handlePropsChange"]}}};I.style=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-flex;flex:0 1 auto}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host .calcite-dropdown-wrapper{--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.calcite-dropdown-wrapper .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}.calcite-dropdown-wrapper[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}.calcite-dropdown-wrapper[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}.calcite-dropdown-wrapper[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}.calcite-dropdown-wrapper[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}.calcite-dropdown-wrapper[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([open]) .calcite-dropdown-wrapper{visibility:visible}:host .calcite-dropdown-content{max-block-size:45vh;inline-size:auto;overflow-y:auto;overflow-x:hidden;background-color:var(--calcite-ui-foreground-1);inline-size:var(--calcite-dropdown-width)}.calcite-trigger-container{position:relative;display:flex;flex:1 1 auto;word-wrap:break-word;word-break:break-word}@media (forced-colors: active){:host([open]) .calcite-dropdown-wrapper{border:1px solid canvasText}}:host([width=s]){--calcite-dropdown-width:12rem}:host([width=m]){--calcite-dropdown-width:14rem}:host([width=l]){--calcite-dropdown-width:16rem}:host([hidden]){display:none}[hidden]{display:none}";const E="container",H=class{constructor(e){t(this,e),this.calciteInternalDropdownItemChange=i(this,"calciteInternalDropdownItemChange",6),this.updateItems=()=>{Array.from(this.el.querySelectorAll("calcite-dropdown-item")).forEach((t=>t.selectionMode=this.selectionMode))},this.mutationObserver=z("mutation",(()=>this.updateItems())),this.groupTitle=void 0,this.scale="m",this.selectionMode="single"}handlePropsChange(){this.updateItems()}connectedCallback(){this.updateItems(),this.mutationObserver?.observe(this.el,{childList:!0})}componentWillLoad(){this.groupPosition=this.getGroupPosition()}disconnectedCallback(){this.mutationObserver?.disconnect()}render(){const t=this.groupTitle?e("span",{"aria-hidden":"true",class:"dropdown-title"},this.groupTitle):null,i=this.groupPosition>0?e("div",{class:"dropdown-separator",role:"separator"}):null;return e(n,{"aria-label":this.groupTitle,role:"group"},e("div",{class:{[E]:!0,[`${E}--${this.scale}`]:!0}},i,t,e("slot",null)))}updateActiveItemOnChange(t){this.requestedDropdownGroup=t.detail.requestedDropdownGroup,this.requestedDropdownItem=t.detail.requestedDropdownItem,this.calciteInternalDropdownItemChange.emit({requestedDropdownGroup:this.requestedDropdownGroup,requestedDropdownItem:this.requestedDropdownItem})}getGroupPosition(){return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"),this.el)}static get delegatesFocus(){return!0}get el(){return o(this)}static get watchers(){return{selectionMode:["handlePropsChange"]}}};H.style=":host{position:relative;display:block}.container{text-align:start}.container--s{font-size:var(--calcite-font-size--2);line-height:1rem}.container--s .dropdown-title{padding:0.5rem}.container--m{font-size:var(--calcite-font-size--1);line-height:1rem}.container--m .dropdown-title{padding:0.75rem}.container--l{font-size:var(--calcite-font-size-0);line-height:1.25rem}.container--l .dropdown-title{padding:1rem}.dropdown-title{margin-block-end:-1px;display:block;cursor:default;overflow-wrap:break-word;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-2)}.dropdown-separator{display:block;block-size:1px;background-color:var(--calcite-ui-border-3)}:host([hidden]){display:none}[hidden]{display:none}";const P=class{constructor(e){t(this,e),this.calciteDropdownItemSelect=i(this,"calciteDropdownItemSelect",6),this.calciteInternalDropdownItemSelect=i(this,"calciteInternalDropdownItemSelect",6),this.calciteInternalDropdownItemKeyEvent=i(this,"calciteInternalDropdownItemKeyEvent",6),this.calciteInternalDropdownCloseRequest=i(this,"calciteInternalDropdownCloseRequest",6),this.selected=!1,this.iconFlipRtl=void 0,this.iconStart=void 0,this.iconEnd=void 0,this.href=void 0,this.label=void 0,this.rel=void 0,this.target=void 0,this.selectionMode="single",this.scale="m"}async setFocus(){await k(this),this.el?.focus()}componentWillLoad(){x(this),this.initialize()}componentDidLoad(){y(this)}connectedCallback(){this.initialize()}render(){const{href:t,selectionMode:i,label:o,iconFlipRtl:a,scale:r}=this,c=e("calcite-icon",{class:"dropdown-item-icon-start",flipRtl:"start"===a||"both"===a,icon:this.iconStart,scale:C(this.scale)}),l=e("span",{class:"dropdown-item-content"},e("slot",null)),d=e("calcite-icon",{class:"dropdown-item-icon-end",flipRtl:"end"===a||"both"===a,icon:this.iconEnd,scale:C(this.scale)}),h=this.iconStart&&this.iconEnd?[c,l,d]:this.iconStart?[c,l]:this.iconEnd?[l,d]:l,p=t?e("a",{"aria-label":o,class:"dropdown-link",href:t,rel:this.rel,tabIndex:-1,target:this.target,ref:t=>this.childLink=t},h):h,m=t?null:"single"===i?"menuitemradio":"multiple"===i?"menuitemcheckbox":"menuitem",u="none"!==i?s(this.selected):null;return e(n,{"aria-checked":u,"aria-label":t?"":o,role:m,tabindex:"0"},e("div",{class:{[E]:!0,"container--link":!!t,[`${E}--${r}`]:!0,"container--multi-selection":"multiple"===i,"container--single-selection":"single"===i,"container--none-selection":"none"===i}},"none"!==i?e("calcite-icon",{class:"dropdown-item-icon",icon:"multiple"===i?"check":"bullet-point",scale:C(this.scale)}):null,p))}onClick(){this.emitRequestedItem()}keyDownHandler(t){switch(t.key){case" ":case"Enter":this.emitRequestedItem(),this.href&&this.childLink.click(),t.preventDefault();break;case"Escape":this.calciteInternalDropdownCloseRequest.emit(),t.preventDefault();break;case"Tab":this.calciteInternalDropdownItemKeyEvent.emit({keyboardEvent:t});break;case"ArrowUp":case"ArrowDown":case"Home":case"End":t.preventDefault(),this.calciteInternalDropdownItemKeyEvent.emit({keyboardEvent:t})}}updateActiveItemOnChange(t){t.composedPath().includes(this.parentDropdownGroupEl)&&(this.requestedDropdownGroup=t.detail.requestedDropdownGroup,this.requestedDropdownItem=t.detail.requestedDropdownItem,this.determineActiveItem()),t.stopPropagation()}initialize(){this.parentDropdownGroupEl=this.el.closest("calcite-dropdown-group"),"none"===this.selectionMode&&(this.selected=!1)}determineActiveItem(){switch(this.selectionMode){case"multiple":this.el===this.requestedDropdownItem&&(this.selected=!this.selected);break;case"single":this.el===this.requestedDropdownItem?this.selected=!0:this.requestedDropdownGroup===this.parentDropdownGroupEl&&(this.selected=!1);break;case"none":this.selected=!1}}emitRequestedItem(){this.calciteDropdownItemSelect.emit(),this.calciteInternalDropdownItemSelect.emit({requestedDropdownItem:this.el,requestedDropdownGroup:this.parentDropdownGroupEl})}get el(){return o(this)}};P.style=".container--s{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;padding-inline-end:0.5rem;padding-inline-start:1.5rem}.container--m{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;padding-inline-end:0.75rem;padding-inline-start:2rem}.container--l{padding-block:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-inline-end:1rem;padding-inline-start:2.5rem}.container--s.container--none-selection{padding-inline-start:0.25rem}.container--s.container--none-selection .dropdown-link{padding-inline-start:0px}.container--m.container--none-selection{padding-inline-start:0.5rem}.container--m.container--none-selection .dropdown-link{padding-inline-start:0px}.container--l.container--none-selection{padding-inline-start:0.75rem}.container--l.container--none-selection .dropdown-link{padding-inline-start:0px}:host{position:relative;display:flex;flex-grow:1;align-items:center}.container{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-ui-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);text-align:start}.dropdown-item-content{flex:1 1 auto;padding-block:0.125rem;padding-inline-end:auto;padding-inline-start:0.25rem}:host,.container--link a{outline-color:transparent}:host(:focus){outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.container--link{padding:0px}.container--link a{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-ui-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.container--s .dropdown-link{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;padding-inline-end:0.5rem;padding-inline-start:1.5rem}.container--m .dropdown-link{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;padding-inline-end:0.75rem;padding-inline-start:2rem}.container--l .dropdown-link{padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-inline-end:1rem;padding-inline-start:2.5rem}:host(:hover) .container,:host(:active) .container{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);text-decoration-line:none}:host(:hover) .container--link .dropdown-link,:host(:active) .container--link .dropdown-link{color:var(--calcite-ui-text-1)}:host(:focus) .container{color:var(--calcite-ui-text-1);text-decoration-line:none}:host(:active) .container{background-color:var(--calcite-ui-foreground-3)}:host(:hover) .container:before,:host(:active) .container:before,:host(:focus) .container:before{opacity:1}:host([selected]) .container:not(.container--none-selection),:host([selected]) .container--link .dropdown-link{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([selected]) .container:not(.container--none-selection):before,:host([selected]) .container--link .dropdown-link:before{opacity:1;color:var(--calcite-ui-brand)}:host([selected]) .container:not(.container--none-selection) calcite-icon,:host([selected]) .container--link .dropdown-link calcite-icon{color:var(--calcite-ui-brand)}.container--multi-selection:before,.container--none-selection:before{display:none}.container--s:before{inset-inline-start:0.5rem}.container--m:before{inset-inline-start:0.75rem}.container--l:before{inset-inline-start:1rem}.dropdown-item-icon{position:absolute;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:scale(0.9)}.container--s .dropdown-item-icon{inset-inline-start:0.25rem}.container--m .dropdown-item-icon{inset-inline-start:0.5rem}.container--l .dropdown-item-icon{inset-inline-start:0.75rem}:host(:hover) .dropdown-item-icon{color:var(--calcite-ui-border-1);opacity:1}:host([selected]) .dropdown-item-icon{color:var(--calcite-ui-brand);opacity:1}.container--s .dropdown-item-icon-start{margin-inline-end:0.5rem;margin-inline-start:0.25rem}.container--s .dropdown-item-icon-end{margin-inline-start:0.5rem}.container--m .dropdown-item-icon-start{margin-inline-end:0.75rem;margin-inline-start:0.25rem}.container--m .dropdown-item-icon-end{margin-inline-start:0.75rem}.container--l .dropdown-item-icon-start{margin-inline-end:1rem;margin-inline-start:0.25rem}.container--l .dropdown-item-icon-end{margin-inline-start:1rem}:host([hidden]){display:none}[hidden]{display:none}";export{I as calcite_dropdown,H as calcite_dropdown_group,P as calcite_dropdown_item}
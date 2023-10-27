/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0-next.9
 */
import{r as e,c as i,h as t,H as a,a as n}from"./p-a2b8d6f6.js";import{c as o,d as s}from"./p-9c1da262.js";import{f as c,e as l,t as r,g as d}from"./p-d2216e3b.js";import{c as h,d as g,u}from"./p-2e1b2031.js";import{c as p,d as m}from"./p-2bc2c05a.js";import{u as f,c as b,d as v,s as x}from"./p-d2980760.js";import{H as k}from"./p-0bde18fd.js";import{c as w,s as y,a as z}from"./p-dca33159.js";import{o as C}from"./p-756d283a.js";import{i as j}from"./p-6294fd29.js";import"./p-0c0a5f97.js";import"./p-9c138760.js";import"./p-f8ee0d71.js";import"./p-3f10228f.js";const _="content",L="toggle",B="header",D="icon",O="icon",H="control",I="header-menu-actions",M={opened:"chevron-up",closed:"chevron-down",valid:"check-circle",invalid:"exclamation-mark-triangle"},q=class{constructor(t){e(this,t),this.calciteBlockBeforeClose=i(this,"calciteBlockBeforeClose",6),this.calciteBlockBeforeOpen=i(this,"calciteBlockBeforeOpen",6),this.calciteBlockClose=i(this,"calciteBlockClose",6),this.calciteBlockOpen=i(this,"calciteBlockOpen",6),this.calciteBlockToggle=i(this,"calciteBlockToggle",6),this.openTransitionProp="opacity",this.onHeaderClick=()=>{this.open=!this.open,this.calciteBlockToggle.emit()},this.setTransitionEl=e=>{this.transitionEl=e},this.collapsible=!1,this.disabled=!1,this.dragHandle=!1,this.heading=void 0,this.headingLevel=void 0,this.loading=!1,this.open=!1,this.status=void 0,this.description=void 0,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}openHandler(){C(this)}onMessagesChange(){}async setFocus(){await w(this),c(this.el)}onBeforeOpen(){this.calciteBlockBeforeOpen.emit()}onOpen(){this.calciteBlockOpen.emit()}onBeforeClose(){this.calciteBlockBeforeClose.emit()}onClose(){this.calciteBlockClose.emit()}effectiveLocaleChange(){f(this,this.effectiveLocale)}connectedCallback(){o(this),h(this),p(this),b(this)}disconnectedCallback(){g(this),m(this),v(this),s(this)}async componentWillLoad(){await x(this),y(this),this.open&&C(this)}componentDidLoad(){z(this)}componentDidRender(){u(this)}renderScrim(){const{loading:e}=this,i=t("slot",null);return[e?t("calcite-scrim",{loading:e}):null,i]}renderIcon(){const{loading:e,messages:i,status:a}=this,n=!!l(this.el,O);return e?t("div",{class:D,key:"loader"},t("calcite-loader",{inline:!0,label:i.loading})):a?t("div",{class:D,key:"status-icon"},t("calcite-icon",{class:{"status-icon":!0,valid:"valid"==a,invalid:"invalid"==a},icon:M[a],scale:"s"})):n?t("div",{class:D,key:"icon-slot"},t("slot",{key:"icon-slot",name:O})):null}renderTitle(){const{heading:e,headingLevel:i,description:a}=this;return e||a?t("div",{class:"title"},t(k,{class:"heading",level:i},e),a?t("div",{class:"description"},a):null):null}render(){const{collapsible:e,el:i,loading:n,open:o,messages:s}=this,c=o?s.collapse:s.expand,d=t("header",{class:"header",id:B},this.renderIcon(),this.renderTitle()),h=!!l(i,H),g=!!l(i,I),u=o?M.opened:M.closed,p=t("div",{class:"header-container"},this.dragHandle?t("calcite-handle",null):null,e?t("button",{"aria-controls":_,"aria-describedby":B,"aria-expanded":e?r(o):null,class:"toggle",id:L,onClick:this.onHeaderClick,title:c},d,t("calcite-icon",{"aria-hidden":"true",class:"toggle-icon",icon:u,scale:"s"})):d,h?t("div",{class:"control-container"},t("slot",{name:H})):null,g?t("calcite-action-menu",{label:s.options},t("slot",{name:I})):null);return t(a,null,t("article",{"aria-busy":r(n),class:{container:!0}},p,t("section",{"aria-labelledby":L,class:"content",hidden:!o,id:_,ref:this.setTransitionEl},this.renderScrim())))}static get assetsDirs(){return["assets"]}get el(){return n(this)}static get watchers(){return{open:["openHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};q.style=':host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-shrink:0;flex-grow:0;flex-direction:column;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding:0px;transition-property:margin;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);flex-basis:auto}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.header{justify-content:flex-start;padding:0px}.header,.toggle{grid-area:header}.header-container{display:grid;align-items:stretch;grid-template:auto/auto 1fr auto auto;grid-template-areas:"handle header control menu";grid-column:header-start/menu-end;grid-row:1/2}.toggle{margin:0px;display:flex;cursor:pointer;flex-wrap:nowrap;align-items:center;justify-content:space-between;border-style:none;padding:0px;font-family:inherit;outline-color:transparent;text-align:initial;background-color:transparent}.toggle:hover{background-color:var(--calcite-ui-foreground-2)}.toggle:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}calcite-loader[inline]{grid-area:control;align-self:center}calcite-handle{grid-area:handle}.title{margin:0px;padding:0.75rem}.header .title .heading{padding:0px;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;color:var(--calcite-ui-text-2);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}.description{margin-block-start:0.125rem;padding:0px;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-ui-text-3);word-wrap:break-word;word-break:break-word}.icon{display:flex;margin-inline-start:0.75rem;margin-inline-end:0px}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}@keyframes spin{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}.toggle-icon{margin-block:0.75rem;align-self:center;justify-self:end;color:var(--calcite-ui-text-3);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:0.75rem;margin-inline-start:auto}.toggle:hover .toggle-icon{color:var(--calcite-ui-text-1)}.container{position:relative;display:flex;block-size:100%;flex-direction:column}.content{position:relative;min-block-size:0px;flex:1 1 0%}@keyframes in{0%{opacity:0}100%{opacity:1}}.content{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;padding-block:var(--calcite-block-padding, 0.5rem);padding-inline:var(--calcite-block-padding, 0.625rem)}.control-container{margin:0px;display:flex;grid-area:control}calcite-action-menu{grid-area:menu}:host([open]){margin-block:0.5rem}:host([open]) .header .title .heading{color:var(--calcite-ui-text-1)}:host([hidden]){display:none}[hidden]{display:none}';const S="content",T="toggle",F="toggle",R={menuOpen:"chevron-down",menuClosedLeft:"chevron-left",menuClosedRight:"chevron-right",valid:"check-circle",invalid:"exclamation-mark-triangle"},W=class{constructor(t){e(this,t),this.calciteBlockSectionToggle=i(this,"calciteBlockSectionToggle",6),this.handleHeaderKeyDown=e=>{j(e.key)&&(this.toggleSection(),e.preventDefault(),e.stopPropagation())},this.toggleSection=()=>{this.open=!this.open,this.calciteBlockSectionToggle.emit()},this.open=!1,this.status=void 0,this.text=void 0,this.toggleDisplay="button",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}onMessagesChange(){}async setFocus(){await w(this),c(this.el)}effectiveLocaleChange(){f(this,this.effectiveLocale)}connectedCallback(){p(this),b(this)}async componentWillLoad(){await x(this),y(this)}componentDidLoad(){z(this)}disconnectedCallback(){m(this),v(this)}renderStatusIcon(){const{status:e}=this,i=R[e]??!1;return i?t("calcite-icon",{class:{"status-icon":!0,valid:"valid"==e,invalid:"invalid"==e},icon:i,scale:"s"}):null}render(){const{el:e,messages:i,open:n,text:o,toggleDisplay:s}=this,c=d(e),l=n?R.menuOpen:"rtl"===c?R.menuClosedLeft:R.menuClosedRight,h=n?i.collapse:i.expand,g="switch"===s?t("div",{class:{"toggle--switch-container":!0}},t("div",{"aria-controls":S,"aria-expanded":r(n),class:{[F]:!0,"toggle--switch":!0},id:T,onClick:this.toggleSection,onKeyDown:this.handleHeaderKeyDown,role:"button",tabIndex:0,title:h},t("div",{class:"toggle--switch__content"},t("span",{class:"toggle--switch__text"},o)),this.renderStatusIcon()),t("calcite-label",{class:"focus-guard",layout:"inline",tabIndex:-1},t("calcite-switch",{checked:n,label:h,scale:"s"}))):t("button",{"aria-controls":S,"aria-expanded":r(n),class:{"section-header":!0,[F]:!0},id:T,onClick:this.toggleSection},t("calcite-icon",{icon:l,scale:"s"}),t("span",{class:"section-header__text"},o),this.renderStatusIcon());return t(a,null,g,t("section",{"aria-labelledby":T,class:"content",hidden:!n,id:S},t("slot",null)))}static get assetsDirs(){return["assets"]}get el(){return n(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};W.style=":host{box-sizing:border-box;display:block;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}:host([open]){border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-ui-border-3)}:host(:last-child){border-block-end-width:0px}.toggle{inline-size:100%;border-width:0px;background-color:transparent;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}.toggle--switch,.section-header{margin-inline:0px;margin-block:0.25rem;display:flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;padding-inline:0px;padding-block:0.5rem;font-size:var(--calcite-font-size--1);outline-color:transparent}.toggle--switch:focus,.section-header:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.toggle--switch:hover,.section-header:hover{color:var(--calcite-ui-text-1)}.section-header .status-icon{align-self:flex-end}.section-header__text{margin-inline:0.75rem;margin-block:0px;flex:1 1 auto;text-align:initial;word-wrap:anywhere}.toggle--switch-container{position:relative;display:flex;inline-size:100%;align-items:center;background-color:transparent}.toggle--switch-container .focus-guard{--calcite-label-margin-bottom:0;pointer-events:none;position:absolute;inset-inline-end:0;margin-inline-start:0.25rem}.toggle--switch .status-icon{margin-inline-start:0.5rem}.toggle--switch__content{display:flex;flex:1 1 auto;align-items:center}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}:host([hidden]){display:none}[hidden]{display:none}";export{q as calcite_block,W as calcite_block_section}
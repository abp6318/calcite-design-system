/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0-next.9
 */
import{r as t,c as e,h as s,H as i,a as o}from"./p-a2b8d6f6.js";import{g as a}from"./p-d2216e3b.js";import{c as l,u as c,d as n}from"./p-2e1b2031.js";import{s as r,a as d,c as h}from"./p-dca33159.js";import{c as p,d as b}from"./p-2bc2c05a.js";import{c as m,s as f,d as u,u as g}from"./p-d2980760.js";import{S as v}from"./p-fc9cd612.js";import"./p-9c138760.js";import"./p-f8ee0d71.js";import"./p-3f10228f.js";import"./p-6294fd29.js";import"./p-0c0a5f97.js";const w=class{constructor(s){t(this,s),this.calciteFlowItemBack=e(this,"calciteFlowItemBack",7),this.calciteFlowItemScroll=e(this,"calciteFlowItemScroll",6),this.calciteFlowItemClose=e(this,"calciteFlowItemClose",6),this.calciteFlowItemToggle=e(this,"calciteFlowItemToggle",6),this.handlePanelScroll=t=>{t.stopPropagation(),this.calciteFlowItemScroll.emit()},this.handlePanelClose=t=>{t.stopPropagation(),this.calciteFlowItemClose.emit()},this.handlePanelToggle=t=>{t.stopPropagation(),this.collapsed=t.target.collapsed,this.calciteFlowItemToggle.emit()},this.backButtonClick=()=>{this.calciteFlowItemBack.emit()},this.setBackRef=t=>{this.backButtonEl=t},this.setContainerRef=t=>{this.containerEl=t},this.closable=!1,this.closed=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.beforeBack=void 0,this.description=void 0,this.disabled=!1,this.heading=void 0,this.headingLevel=void 0,this.loading=!1,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.showBackButton=!1,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){l(this),p(this),m(this)}async componentWillLoad(){await f(this),r(this)}componentDidRender(){c(this)}disconnectedCallback(){n(this),b(this),u(this)}componentDidLoad(){d(this)}effectiveLocaleChange(){g(this,this.effectiveLocale)}async setFocus(){await h(this);const{backButtonEl:t,containerEl:e}=this;return t?t.setFocus():e?e.setFocus():void 0}async scrollContentTo(t){await(this.containerEl?.scrollContentTo(t))}renderBackButton(){const{el:t}=this,e="rtl"===a(t),{showBackButton:i,backButtonClick:o,messages:l}=this,c=l.back;return i?s("calcite-action",{"aria-label":c,class:"back-button",icon:e?"chevron-right":"chevron-left",key:"flow-back-button",onClick:o,scale:"s",slot:"header-actions-start",text:c,title:c,ref:this.setBackRef}):null}render(){const{collapsed:t,collapseDirection:e,collapsible:o,closable:a,closed:l,description:c,disabled:n,heading:r,headingLevel:d,loading:h,menuOpen:p,messages:b}=this;return s(i,null,s("calcite-panel",{closable:a,closed:l,collapseDirection:e,collapsed:t,collapsible:o,description:c,disabled:n,heading:r,headingLevel:d,loading:h,menuOpen:p,messageOverrides:b,onCalcitePanelClose:this.handlePanelClose,onCalcitePanelScroll:this.handlePanelScroll,onCalcitePanelToggle:this.handlePanelToggle,ref:this.setContainerRef},this.renderBackButton(),s("slot",{name:"action-bar",slot:v.actionBar}),s("slot",{name:"header-actions-start",slot:v.headerActionsStart}),s("slot",{name:"header-actions-end",slot:v.headerActionsEnd}),s("slot",{name:"header-content",slot:v.headerContent}),s("slot",{name:"header-menu-actions",slot:v.headerMenuActions}),s("slot",{name:"fab",slot:v.fab}),s("slot",{name:"footer-actions",slot:v.footerActions}),s("slot",{name:"footer",slot:v.footer}),s("slot",null)))}static get assetsDirs(){return["assets"]}get el(){return o(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};w.style=":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding);--calcite-panel-header-border-block-end:var(--calcite-flow-item-header-border-block-end)}:host([hidden]){display:none}[hidden]{display:none}";export{w as calcite_flow_item}
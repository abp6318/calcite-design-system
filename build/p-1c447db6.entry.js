/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.10.0-next.9
 */
import{r as t,c as i,h as e,H as s,a as n}from"./p-a2b8d6f6.js";import{e as o,h as a,g as l}from"./p-d2216e3b.js";import{s as r,c,d as h,H as d}from"./p-623bd617.js";import{c as u,d as p,u as b}from"./p-2e1b2031.js";import{c as m,d as f,g as v}from"./p-cbd4dd1e.js";import{s as g,a as x,c as k}from"./p-dca33159.js";import{c as y,d as w}from"./p-2bc2c05a.js";import{c as z}from"./p-0c0a5f97.js";import{C as I}from"./p-f8ee0d71.js";import{u as j,c as C,d as L,s as D}from"./p-d2980760.js";import{g as E}from"./p-90c940c9.js";import"./p-9c138760.js";import"./p-3f10228f.js";import"./p-6294fd29.js";const H=class{constructor(e){t(this,e),this.calciteInternalInputTextFocus=i(this,"calciteInternalInputTextFocus",7),this.calciteInternalInputTextBlur=i(this,"calciteInternalInputTextBlur",7),this.calciteInputTextInput=i(this,"calciteInputTextInput",7),this.calciteInputTextChange=i(this,"calciteInputTextChange",7),this.previousValueOrigin="initial",this.mutationObserver=z("mutation",(()=>this.setDisabledAction())),this.userChangedValue=!1,this.keyDownHandler=t=>{this.readOnly||this.disabled||(this.isClearable&&"Escape"===t.key&&(this.clearInputTextValue(t),t.preventDefault()),"Enter"!==t.key||t.defaultPrevented||r(this)&&t.preventDefault())},this.clearInputTextValue=t=>{this.setValue({committing:!0,nativeEvent:t,origin:"user",value:""})},this.emitChangeIfUserModified=()=>{"user"===this.previousValueOrigin&&this.value!==this.previousEmittedValue&&(this.calciteInputTextChange.emit(),this.setPreviousEmittedValue(this.value))},this.inputTextBlurHandler=()=>{this.calciteInternalInputTextBlur.emit({element:this.childEl,value:this.value}),this.emitChangeIfUserModified()},this.clickHandler=t=>{if(this.disabled)return;const i=o(this.el,"action");t.target!==i&&this.setFocus()},this.inputTextFocusHandler=()=>{this.calciteInternalInputTextFocus.emit({element:this.childEl,value:this.value})},this.inputTextInputHandler=t=>{this.disabled||this.readOnly||this.setValue({nativeEvent:t,origin:"user",value:t.target.value})},this.inputTextKeyDownHandler=t=>{this.disabled||this.readOnly||"Enter"===t.key&&this.emitChangeIfUserModified()},this.hiddenInputChangeHandler=t=>{t.target.name===this.name&&this.setValue({value:t.target.value,origin:"direct"}),t.stopPropagation()},this.setChildElRef=t=>{this.childEl=t},this.setInputValue=t=>{this.childEl&&(this.childEl.value=t)},this.setPreviousEmittedValue=t=>{this.previousEmittedValue=t},this.setPreviousValue=t=>{this.previousValue=t},this.setValue=({committing:t=!1,nativeEvent:i,origin:e,previousValue:s,value:n})=>{this.setPreviousValue(s??this.value),this.previousValueOrigin=e,this.userChangedValue="user"===e&&n!==this.value,this.value=n,"direct"===e&&(this.setInputValue(n),this.setPreviousEmittedValue(n)),i&&(this.calciteInputTextInput.emit().defaultPrevented?this.value=this.previousValue:t&&this.emitChangeIfUserModified())},this.alignment="start",this.autofocus=!1,this.clearable=!1,this.disabled=!1,this.form=void 0,this.hidden=!1,this.icon=void 0,this.iconFlipRtl=!1,this.label=void 0,this.loading=!1,this.maxLength=void 0,this.minLength=void 0,this.name=void 0,this.placeholder=void 0,this.prefixText=void 0,this.readOnly=!1,this.required=!1,this.scale="m",this.status="idle",this.autocomplete=void 0,this.inputMode="text",this.enterKeyHint=void 0,this.pattern=void 0,this.suffixText=void 0,this.editingEnabled=!1,this.value="",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0,this.slottedActionElDisabledInternally=!1}disabledWatcher(){this.setDisabledAction()}onMessagesChange(){}valueWatcher(t,i){this.userChangedValue||this.setValue({origin:"direct",previousValue:i,value:t||""}),this.userChangedValue=!1}updateRequestedIcon(){this.requestedIcon=a({},this.icon,"text")}get isClearable(){return this.clearable&&this.value.length>0}effectiveLocaleChange(){j(this,this.effectiveLocale)}connectedCallback(){u(this),y(this),C(this),this.inlineEditableEl=this.el.closest("calcite-inline-editable"),this.inlineEditableEl&&(this.editingEnabled=this.inlineEditableEl.editingEnabled||!1),this.setPreviousEmittedValue(this.value),this.setPreviousValue(this.value),m(this),c(this),this.mutationObserver?.observe(this.el,{childList:!0}),this.setDisabledAction(),this.el.addEventListener("calciteInternalHiddenInputChange",this.hiddenInputChangeHandler)}disconnectedCallback(){p(this),f(this),h(this),w(this),L(this),this.mutationObserver?.disconnect(),this.el.removeEventListener("calciteInternalHiddenInputChange",this.hiddenInputChangeHandler)}async componentWillLoad(){g(this),this.requestedIcon=a({},this.icon,"text"),await D(this)}componentDidLoad(){x(this)}componentDidRender(){b(this)}async setFocus(){await k(this),this.childEl?.focus()}async selectText(){this.childEl?.select()}onLabelClick(){this.setFocus()}onFormReset(){this.setValue({origin:"reset",value:this.defaultValue})}syncHiddenFormInput(t){null!=this.minLength&&(t.minLength=this.minLength),null!=this.maxLength&&(t.maxLength=this.maxLength)}setDisabledAction(){const t=o(this.el,"action");t&&(this.disabled?(null==t.getAttribute("disabled")&&(this.slottedActionElDisabledInternally=!0),t.setAttribute("disabled","")):this.slottedActionElDisabledInternally&&(t.removeAttribute("disabled"),this.slottedActionElDisabledInternally=!1))}render(){const t=l(this.el),i=e("div",{class:"loader"},e("calcite-progress",{label:this.messages.loading,type:"indeterminate"})),n=e("button",{"aria-label":this.messages.clear,class:"clear-button",disabled:this.disabled||this.readOnly,onClick:this.clearInputTextValue,tabIndex:-1,type:"button"},e("calcite-icon",{icon:"x",scale:E(this.scale)})),o=e("calcite-icon",{class:"icon",flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:E(this.scale)}),a=e("div",{class:"prefix"},this.prefixText),r=e("div",{class:"suffix"},this.suffixText),c=e("input",{"aria-label":v(this),autocomplete:this.autocomplete,autofocus:!!this.autofocus||null,class:{"editing-enabled":this.editingEnabled,"inline-child":!!this.inlineEditableEl},defaultValue:this.defaultValue,disabled:!!this.disabled||null,enterKeyHint:this.enterKeyHint,inputMode:this.inputMode,maxLength:this.maxLength,minLength:this.minLength,name:this.name,onBlur:this.inputTextBlurHandler,onFocus:this.inputTextFocusHandler,onInput:this.inputTextInputHandler,onKeyDown:this.inputTextKeyDownHandler,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readOnly,required:!!this.required||null,tabIndex:this.disabled||this.inlineEditableEl&&!this.editingEnabled?-1:null,type:"text",value:this.value,ref:this.setChildElRef});return e(s,{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},e("div",{class:{wrapper:!0,[I.rtl]:"rtl"===t}},this.prefixText?a:null,e("div",{class:"element-wrapper"},c,this.isClearable?n:null,this.requestedIcon?o:null,this.loading?i:null),e("div",{class:"action-wrapper"},e("slot",{name:"action"})),this.suffixText?r:null,e(d,{component:this})))}static get assetsDirs(){return["assets"]}get el(){return n(this)}static get watchers(){return{disabled:["disabledWatcher"],messageOverrides:["onMessagesChange"],value:["valueWatcher"],icon:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}}};H.style=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;border-radius:0px;background-color:var(--calcite-ui-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1)}:host input{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);color:var(--calcite-ui-text-1)}:host input::placeholder,:host input:-ms-input-placeholder,:host input::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}:host input:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}:host input[readonly]{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}:host input[readonly]:focus{color:var(--calcite-ui-text-1)}:host calcite-icon{color:var(--calcite-ui-text-3)}input{outline-color:transparent}input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([status=invalid]) input{border-color:var(--calcite-ui-danger)}:host([status=invalid]) input:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;z-index:var(--calcite-app-z-index);display:block;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-ui-foreground-2);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-ui-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-ui-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.clear-button:disabled{opacity:var(--calcite-ui-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-ui-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) input{text-align:start}:host([alignment=end]) input{text-align:end}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-ui-border-1)}.inline-child{background-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.inline-child .editing-enabled{background-color:inherit}.inline-child:not(.editing-enabled){display:flex;cursor:pointer;border-color:transparent;padding-inline-start:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}";export{H as calcite_input_text}
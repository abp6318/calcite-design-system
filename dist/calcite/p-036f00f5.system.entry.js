System.register(["./p-dd45b0da.system.js","./p-4af00110.system.js"],(function(t){"use strict";var e,i,a,s,n,o;return{setters:[function(t){e=t.r;i=t.h;a=t.H;s=t.g},function(t){n=t.a;o=t.g}],execute:function(){var l=":host([hidden]){display:none}:host([scale=s]){--calcite-input-message-spacing-value:4px}:host([scale=s]) .calcite-input-message-icon{margin-top:-2px}:host([scale=m]){--calcite-input-message-spacing-value:8px}:host([scale=l]){--calcite-input-message-spacing-value:12px}:host{--calcite-input-message-floating-background:rgba(255, 255, 255, 0.96)}:host([theme=dark]){--calcite-input-message-floating-background:rgba(43, 43, 43, 0.96)}:host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--calcite-ui-text-2);font-weight:500;line-height:1.25;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;visibility:hidden;opacity:0;height:0}:host([active]){opacity:1;height:auto;visibility:visible;margin-top:var(--calcite-input-message-spacing-value)}:host([type=floating]){-webkit-transform:translate3d(0, -1.5rem, 0);transform:translate3d(0, -1.5rem, 0);background-color:var(--calcite-input-message-floating-background);position:absolute;width:100%;top:100%;left:0;right:0;height:auto;margin-top:-1.5rem;border-radius:var(--calcite-border-radius);-webkit-box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);padding:var(--calcite-input-message-spacing-value);z-index:101}:host([type=floating][active]){-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}.calcite-input-message-icon{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-negative:0;flex-shrink:0;pointer-events:none;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;margin:-1px 0.75rem 0 0;transition:150ms ease-in-out}:host([dir=rtl]) .calcite-input-message-icon{margin:-1px 0 0 0.75rem}:host([status=invalid]) .calcite-input-message-icon{color:var(--calcite-ui-red-1)}:host([status=valid]) .calcite-input-message-icon{color:var(--calcite-ui-green-1)}:host([status=idle]) .calcite-input-message-icon{color:var(--calcite-ui-blue-1)}:host([type=floating][active]){-webkit-animation:floatingMessagePulse 0.5s ease-in-out;animation:floatingMessagePulse 0.5s ease-in-out;-webkit-animation-iteration-count:1;animation-iteration-count:1}@-webkit-keyframes floatingMessagePulse{0%{top:100%}25%{top:110%}50%{top:100%}75%{top:105%}100%{top:100%}}@keyframes floatingMessagePulse{0%{top:100%}25%{top:110%}50%{top:100%}75%{top:105%}100%{top:100%}}";var c=t("calcite_input_message",function(){function t(t){e(this,t);this.active=false;this.appearance="default";this.type="default";this.iconDefaults={valid:"check-circle",invalid:"exclamation-mark-triangle",idle:"information"}}t.prototype.connectedCallback=function(){var t=["default","minimal"];if(!t.includes(this.appearance))this.appearance="default";var e=["invalid","valid","idle"];if(!e.includes(this.status))this.status=n(this.el.parentElement,"status","idle");var i=["s","m","l"];if(!i.includes(this.scale))this.scale=n(this.el.parentElement,"scale","m");var a=["default","floating"];if(!a.includes(this.type))this.type="default"};t.prototype.componentWillUpdate=function(){this.iconEl=this.setIcon(this.iconDefaults[this.status])};t.prototype.render=function(){var t=o(this.el);this.iconEl=this.setIcon(this.iconDefaults[this.status]);return i(a,{theme:this.theme,dir:t},this.icon?this.iconEl:null,i("slot",null))};t.prototype.setIcon=function(t){return i("calcite-icon",{class:"calcite-input-message-icon",scale:"s",icon:t})};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});return t}());c.style=l}}}));
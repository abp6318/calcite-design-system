import { Component, Element, h, Host, Prop, VNode } from "@stencil/core";
import { CSS } from "./resources";

@Component({
  tag: "calcite-nav",
  styleUrl: "nav.scss",
  shadow: true
})

/**
 * @slot logo - A slot for adding a `calcite-logo` component to the primary nav level.
 * @slot user - A slot for adding a `calcite-user` component to the primary nav level.
 * @slot progress - A slot for adding a `calcite-progress` component to the primary nav level.
 * @slot primary-content-start - A slot for adding a `calcite-menu`, `calcite-action`, or other interactive elements in the start position of the primary nav level.
 * @slot primary-content-center - A slot for adding a `calcite-menu`, `calcite-action`, or other interactive elements in the center position of the primary nav level.
 * @slot primary-content-end - A slot for adding a `calcite-menu`, `calcite-action`, or other interactive elements in the end position of the primary nav level.
 * @slot secondary-content-start - A slot for adding a `calcite-menu`, `calcite-action`, or other interactive elements in the start position of the secondary nav level.
 * @slot secondary-content-end - A slot for adding a `calcite-menu`, `calcite-action`, or other interactive elements in the end position of the secondary nav level.
 * @slot tertiary-content-start - A slot for adding a `calcite-menu`, `calcite-action`, or other interactive elements in the start position of the tertiary nav level.
 * @slot tertiary-content-end - A slot for adding a `calcite-menu`, `calcite-action`, or other interactive elements in the end position of the tertiary nav level.
 */
export class CalciteNav {
  //--------------------------------------------------------------------------
  //
  //  Element
  //
  //--------------------------------------------------------------------------
  @Element() el: HTMLCalciteNavElement;

  //--------------------------------------------------------------------------
  //
  //  Properties
  //
  //--------------------------------------------------------------------------
  @Prop({ reflect: true }) hidden = false;

  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------

  renderNavLevel(level: "primary" | "secondary" | "tertiary"): VNode {
    const progress = this.el.querySelector('[slot="progress"]');
    const logo = this.el.querySelector('[slot="logo"]');
    const user = this.el.querySelector('[slot="user"]');
    const start = this.el.querySelector(`[slot="${level}-content-start"]`);
    const center = this.el.querySelector(`[slot="${level}-content-center"]`);
    const end = this.el.querySelector(`[slot="${level}-content-end"]`);

    const showMenu = (level === "primary" && (logo || user)) || center || start || end;

    return showMenu ? (
      <div
        class={{
          [CSS.navContainer]: true,
          [`nav-${level}`]: true
        }}
      >
        {progress ? <slot name="progress" /> : null}
        <div class={CSS.navContainerContent}>
          {level === "primary" && logo ? <slot name="logo" /> : null}
          {start ? <slot name={`${level}-content-start`} /> : null}
          {center ? <slot name={`${level}-content-center`} /> : null}
          {end ? <slot name={`${level}-content-end`} /> : null}
          {level === "primary" && user ? <slot name="user" /> : null}
        </div>
      </div>
    ) : null;
  }

  render(): VNode {
    return (
      <Host>
        {this.renderNavLevel("primary")}
        {this.renderNavLevel("secondary")}
        {this.renderNavLevel("tertiary")}
      </Host>
    );
  }
}

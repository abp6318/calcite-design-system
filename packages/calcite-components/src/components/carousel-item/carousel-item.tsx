import { Component, Element, Fragment, h, Prop, State, VNode, Watch } from "@stencil/core";
import {
  ConditionalSlotComponent,
  connectConditionalSlotComponent,
  disconnectConditionalSlotComponent
} from "../../utils/conditionalSlot";
import { connectLocalized, disconnectLocalized, LocalizedComponent } from "../../utils/locale";
import {
  connectMessages,
  disconnectMessages,
  setUpMessages,
  T9nComponent,
  updateMessages
} from "../../utils/t9n";
import { CarouselItemMessages } from "./assets/carousel-item/t9n";
import { CSS } from "./resources";

/**
 * @slot - A slot for adding text and a hyperlink.
 * @slot thumbnail - A slot for adding an HTML image element.
 */
@Component({
  tag: "calcite-carousel-item",
  styleUrl: "carousel-item.scss",
  shadow: true,
  assetsDirs: ["assets"]
})
export class CarouselItem implements ConditionalSlotComponent, LocalizedComponent, T9nComponent {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * The component label text.
   */
  @Prop() label!: string;

  /**
   * When `true`, the component is selected if it has a parent `calcite-carousel`.
   *
   * Only one tip can be selected within the `calcite-carousel` parent.
   */
  @Prop({ reflect: true }) selected = false;

  /**
   * Made into a prop for testing purposes only
   *
   * @internal
   */
  @Prop() messages: CarouselItemMessages;

  /**
   * Use this property to override individual strings used by the component.
   */
  @Prop() messageOverrides: Partial<CarouselItemMessages>;

  @Watch("messageOverrides")
  onMessagesChange(): void {
    /* wired up by t9n util */
  }

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteCarouselItemElement;

  @State() defaultMessages: CarouselItemMessages;

  @State() effectiveLocale = "";

  @Watch("effectiveLocale")
  effectiveLocaleChange(): void {
    updateMessages(this, this.effectiveLocale);
  }

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  connectedCallback(): void {
    connectConditionalSlotComponent(this);
    connectLocalized(this);
    connectMessages(this);
  }

  async componentWillLoad(): Promise<void> {
    await setUpMessages(this);
  }

  disconnectedCallback(): void {
    disconnectConditionalSlotComponent(this);
    disconnectLocalized(this);
    disconnectMessages(this);
  }

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------

  renderInfoNode(): VNode {
    return (
      <div class={CSS.info}>
        <slot />
      </div>
    );
  }

  renderContent(): VNode {
    return <div class={CSS.content}>{this.renderInfoNode()}</div>;
  }

  render(): VNode {
    return (
      <Fragment>
        <article class={CSS.container}>{this.renderContent()}</article>
      </Fragment>
    );
  }
}

import {
  Build,
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Method,
  Prop,
  State,
  VNode,
  Watch,
} from "@stencil/core";
import {
  ConditionalSlotComponent,
  connectConditionalSlotComponent,
  disconnectConditionalSlotComponent,
} from "../../utils/conditionalSlot";
import { getSlotted, toAriaBoolean } from "../../utils/dom";
import { connectLocalized, disconnectLocalized, LocalizedComponent } from "../../utils/locale";
import {
  connectMessages,
  disconnectMessages,
  setUpMessages,
  T9nComponent,
  updateMessages,
} from "../../utils/t9n";

import { LogicalFlowPosition, Scale } from "../interfaces";
import { CardMessages } from "./assets/card/t9n";
import { CSS, ICONS, SLOTS } from "./resources";
import { SelectionMode } from "../interfaces";
import { createObserver } from "../../utils/observers";

/**
 * Cards do not include a grid or bounding container
 * - cards will expand to fit the width of their container
 */

/**
 * @slot - A slot for adding subheader/description content.
 * @slot thumbnail - A slot for adding a thumbnail to the component.
 * @slot heading - A slot for adding a heading.
 * @slot description - A slot for adding a description or short summary.
 * @slot footer-start - A slot for adding a leading footer.
 * @slot footer-end - A slot for adding a trailing footer.
 */

@Component({
  tag: "calcite-card",
  styleUrl: "card.scss",
  shadow: true,
  assetsDirs: ["assets"],
})
export class Card implements ConditionalSlotComponent, LocalizedComponent, T9nComponent {
  //--------------------------------------------------------------------------
  //
  //  Public Properties
  //
  //--------------------------------------------------------------------------

  /**  When `true`, a busy indicator is displayed. */
  @Prop({ reflect: true }) loading = false;

  /** Sets the placement of the thumbnail defined in the `thumbnail` slot. */
  @Prop({ reflect: true }) thumbnailPosition: LogicalFlowPosition = "block-start";

  /**
   * Made into a prop for testing purposes only
   *
   * @internal
   */
  // eslint-disable-next-line @stencil-community/strict-mutable -- updated by t9n module
  @Prop({ mutable: true }) messages: CardMessages;

  /** When `true`, interaction is prevented and the component is displayed with lower opacity. */
  @Prop({ reflect: true }) disabled = false;

  /**
   * When true, enables the card to be focused, and allows the `calciteCardSelect` to emit.
   * This is set to `true` by a parent Card Group component.
   *
   * @internal
   */
  @Prop() interactive = false;

  /**
   * This internal property, managed by a containing `calcite-card-group`, is
   * conditionally set based on the `selectionMode` of the parent
   *
   * @internal
   */
  @Prop() selectionMode: Extract<"multiple" | "single" | "single-persist" | "none", SelectionMode> =
    "none";

  /** When `true`, the component is selected.  */
  @Prop({ reflect: true, mutable: true }) selected = false;

  /**
   * Use this property to override individual strings used by the component.
   */
  // eslint-disable-next-line @stencil-community/strict-mutable -- updated by t9n module
  @Prop({ mutable: true }) messageOverrides: Partial<CardMessages>;

  @Watch("messageOverrides")
  onMessagesChange(): void {
    /* wired up by t9n util */
  }

  /** Specifies the size of the component. */
  @Prop({ reflect: true }) scale: Scale = "m";

  private containerEl: HTMLDivElement;

  private contentEl: HTMLDivElement;

  @State() private hasContent = false;

  private mutationObserver = createObserver("mutation", () => this.updateHasContent());

  private updateHasContent() {
    // this.hasContent = this.contentEl?.textContent.trim().length > 0;
  }

  private setupContentObserver() {
    //  this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
  }

  //--------------------------------------------------------------------------
  //
  //  Events
  //
  //--------------------------------------------------------------------------

  /** Fires when `interactive` is `true` and the component is selected. */
  @Event({ cancelable: false }) calciteCardSelect: EventEmitter<void>;

  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------

  /** Sets focus on the component. */
  @Method()
  async setFocus(): Promise<void> {
    //   await componentLoaded(this);
    if (this.interactive) {
      this.containerEl?.focus();
    }
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
    this.setupContentObserver();
  }

  disconnectedCallback(): void {
    disconnectConditionalSlotComponent(this);
    disconnectLocalized(this);
    disconnectMessages(this);
  }

  async componentWillLoad(): Promise<void> {
    await setUpMessages(this);
    if (Build.isBrowser) {
      this.updateHasContent();
    }
  }

  render(): VNode {
    const thumbnailInline = this.thumbnailPosition.startsWith("inline");
    const thumbnailStart = this.thumbnailPosition.endsWith("start");

    return (
      <div
        class={{ "calcite-card-container": true, inline: thumbnailInline }}
        // eslint-disable-next-line react/jsx-sort-props
        ref={(el) => (this.containerEl = el)}
        key="container-el"
        tabIndex={this.interactive && this.selectionMode !== "none" ? 0 : -1}
        onKeyDown={this.keyDownHandler}
      >
        {this.loading ? (
          <div aria-live="polite" class="calcite-card-loader-container">
            <calcite-loader label={this.messages.loading} />
          </div>
        ) : null}
        {thumbnailStart && this.renderThumbnail()}
        <section aria-busy={toAriaBoolean(this.loading)} class={{ [CSS.container]: true }}>
          {this.renderHeader()}
          <div
            class={{ "card-content": true, [CSS.contentSlotted]: this.hasContent }}
            ref={(el) => (this.contentEl = el)}
          >
            <slot />
          </div>
          {this.renderFooter()}
        </section>
        {!thumbnailStart && this.renderThumbnail()}
      </div>
    );
  }
  //--------------------------------------------------------------------------
  //
  //  Private State/Props
  //
  //--------------------------------------------------------------------------

  @Element() el: HTMLCalciteCardElement;

  @State() effectiveLocale: string;

  @Watch("effectiveLocale")
  effectiveLocaleChange(): void {
    updateMessages(this, this.effectiveLocale);
  }

  @State() defaultMessages: CardMessages;

  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------

  private keyDownHandler(event: KeyboardEvent): void {
    switch (event.key) {
      case " ":
      case "Enter":
        event.preventDefault();
        this.calciteCardSelect.emit();
        break;
    }
  }

  private cardSelectClick = (): void => {
    this.calciteCardSelect.emit();
  };

  private renderThumbnail(): VNode {
    return getSlotted(this.el, SLOTS.thumbnail) ? (
      <section class={CSS.thumbnailWrapper}>
        <slot name={SLOTS.thumbnail} />
      </section>
    ) : null;
  }

  private renderSelectionIcon(): VNode {
    const icon =
      this.selectionMode === "multiple" && this.selected
        ? ICONS.selected
        : this.selectionMode === "multiple"
        ? ICONS.unselected
        : this.selected
        ? ICONS.selectedSingle
        : ICONS.unselectedSingle;

    const role =
      this.selectionMode === "multiple" && this.interactive
        ? "checkbox"
        : this.selectionMode !== "none" && this.interactive
        ? "radio"
        : this.interactive
        ? "button"
        : undefined;
    return (
      <calcite-action
        active={this.selected}
        onClick={this.cardSelectClick}
        class={CSS.checkboxWrapper}
        icon={icon}
        role={role}
        text="Select <label>"
      />
    );
  }

  private renderHeader(): VNode {
    const { el } = this;
    const title = getSlotted(el, SLOTS.heading);
    const subtitle = getSlotted(el, SLOTS.description);
    const hasHeader = title || subtitle;
    // todo conditionally render prop or slot, slot if present
    return hasHeader ? (
      <header class={CSS.header}>
        <div class={CSS.headerTextContainer}>
          <slot name={SLOTS.heading} />
          <slot name={SLOTS.description} />
        </div>
        {this.selectionMode !== "none" && this.renderSelectionIcon()}
      </header>
    ) : null;
  }

  private renderFooter(): VNode {
    const { el } = this;
    const startFooter = getSlotted(el, SLOTS.footerStart);
    const endFooter = getSlotted(el, SLOTS.footerEnd);

    const hasFooter = startFooter || endFooter;
    return hasFooter ? (
      <footer class={CSS.footer}>
        <slot name={SLOTS.footerStart} />
        <slot name={SLOTS.footerEnd} />
      </footer>
    ) : null;
  }
}

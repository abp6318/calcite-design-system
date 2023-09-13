import { Component, Element, Fragment, h, Method, Prop, State, VNode, Watch } from "@stencil/core";
import { getElementDir } from "../../utils/dom";
import { guid } from "../../utils/guid";
import { connectLocalized, disconnectLocalized } from "../../utils/locale";
import { createObserver } from "../../utils/observers";
import {
  connectMessages,
  disconnectMessages,
  setUpMessages,
  updateMessages,
} from "../../utils/t9n";
import { HeadingLevel } from "../functional/Heading";
import { CarouselMessages } from "./assets/carousel/t9n";
import { CSS, ICONS } from "./resources";
import { Scale } from "../interfaces";

/**
 * @slot - A slot for adding `calcite-carousel-item`s.
 */
@Component({
  tag: "calcite-carousel",
  styleUrl: "carousel.scss",
  shadow: true,
  assetsDirs: ["assets"],
})
export class Carousel {
  // --------------------------------------------------------------------------
  //
  //  Properties
  //
  // --------------------------------------------------------------------------

  /**
   * Specifies the number at which section headings should start.
   */
  @Prop({ reflect: true }) headingLevel: HeadingLevel;

  /**
   * Made into a prop for testing purposes only
   *
   * @internal
   */
  @Prop() messages: CarouselMessages;

  /**
   * Use this property to override individual strings used by the component.
   */
  @Prop() messageOverrides: Partial<CarouselMessages>;

  @Watch("messageOverrides")
  onMessagesChange(): void {
    /* wired up by t9n util */
  }

  /**
   * control if the dot / bar and arrows are overlaid on the slotted content container or displayed adjacent to the slotted content
   */
  @Prop() controlOverlay?: boolean;

  /**
   * control how the dots are displayed - top, bottom, start, end (automatically positions vertically / horizontally)
   */
  @Prop() controlPosition?: "top" | "bottom" = "bottom";

  /**
   * control if the displayed control are dot, or bar
   */
  @Prop() controlType?: "circle" | "square" = "circle";

  /**
   * control if the displayed control are dot, or bar
   */
  @Prop() displayArrows?: boolean;

  /** Specifies the size of the component. */
  @Prop({ reflect: true }) scale: Scale = "m";

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  @Element() el: HTMLCalciteCarouselElement;

  @State() selectedIndex: number;

  @Watch("selectedIndex")
  selectedChangeHandler(): void {
    this.showSelectedTip();
  }

  @State() tips: HTMLCalciteCarouselItemElement[];

  @State() total: number;

  @State() direction: "advancing" | "retreating";

  mutationObserver = createObserver("mutation", () => this.setUpTips());

  container: HTMLDivElement;

  @State() defaultMessages: CarouselMessages;

  @State() effectiveLocale = "";

  @Watch("effectiveLocale")
  async effectiveLocaleChange(): Promise<void> {
    await updateMessages(this, this.effectiveLocale);
  }

  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------

  connectedCallback(): void {
    connectLocalized(this);
    connectMessages(this);
    this.setUpTips();
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
  }

  async componentWillLoad(): Promise<void> {
    await setUpMessages(this);
  }

  disconnectedCallback(): void {
    this.mutationObserver?.disconnect();
    disconnectLocalized(this);
    disconnectMessages(this);
  }

  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------

  /** Selects the next `calcite-carousel-item` to display. */
  @Method()
  async nextTip(): Promise<void> {
    this.direction = "advancing";
    const nextIndex = this.selectedIndex + 1;
    this.selectedIndex = (nextIndex + this.total) % this.total;
  }

  /** Selects the previous `calcite-carousel-item` to display. */
  @Method()
  async previousTip(): Promise<void> {
    this.direction = "retreating";
    const previousIndex = this.selectedIndex - 1;
    this.selectedIndex = (previousIndex + this.total) % this.total;
  }

  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------

  setUpTips(): void {
    const tips = Array.from(this.el.querySelectorAll("calcite-carousel-item"));
    this.total = tips.length;
    if (this.total === 0) {
      return;
    }
    const selectedTip = this.el.querySelector<HTMLCalciteCarouselItemElement>(
      "calcite-carousel-item[selected]"
    );

    this.tips = tips;
    this.selectedIndex = selectedTip ? tips.indexOf(selectedTip) : 0;

    this.showSelectedTip();
  }

  showSelectedTip(): void {
    this.tips.forEach((tip, index) => {
      const isSelected = this.selectedIndex === index;
      tip.selected = isSelected;
      tip.hidden = !isSelected;
    });
  }

  goToClick = (step: number): void => {
    this.selectedIndex = step;
  };

  previousClicked = (): void => {
    this.previousTip();
  };

  nextClicked = (): void => {
    this.nextTip();
  };

  tipManagerKeyDownHandler = (event: KeyboardEvent): void => {
    if (event.target !== this.container) {
      return;
    }

    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        this.nextTip();
        break;
      case "ArrowLeft":
        event.preventDefault();
        this.previousTip();
        break;
      case "Home":
        event.preventDefault();
        this.selectedIndex = 0;
        break;
      case "End":
        event.preventDefault();
        this.selectedIndex = this.total - 1;
        break;
    }
  };

  storeContainerRef = (el: HTMLDivElement): void => {
    this.container = el;
  };

  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderPagination(): VNode {
    const { selectedIndex } = this;

    return (
      <div
        class={{
          [CSS.pagination]: true,
          ["is-overlay"]: this.controlOverlay,
          ["is-bar"]: this.controlType === "square",
        }}
      >
        {this.tips.map((tip, index) => (
          <Fragment>
            <calcite-button
              appearance={this.controlOverlay ? "solid" : "transparent"}
              class={`pagination-item${index === selectedIndex ? " active-icon" : ""}`}
              iconStart={
                index === selectedIndex && this.controlType !== "square"
                  ? "circle-area"
                  : index === selectedIndex
                  ? "square-area"
                  : this.controlType !== "square"
                  ? "circle"
                  : "square"
              }
              id={`${guid}-${index}`}
              kind={index === selectedIndex ? "neutral" : "neutral"}
              label={tip.label}
              onClick={() => this.goToClick(index)}
              round={this.controlType !== "square"}
              scale={this.scale}
            />
            <calcite-tooltip placement="bottom" reference-element={`${guid}-${index}`}>
              {tip.label}
            </calcite-tooltip>
          </Fragment>
        ))}
      </div>
    );
  }

  renderArrows(): VNode {
    const dir = getElementDir(this.el);
    const { messages } = this;

    const nextLabel = messages.next;
    const previousLabel = messages.previous;

    return (
      <Fragment>
        <calcite-button
          class={CSS.pagePrevious}
          iconEnd={dir === "ltr" ? ICONS.chevronLeft : ICONS.chevronRight}
          kind="neutral"
          label={previousLabel}
          onClick={this.previousClicked}
          round={this.controlType === "circle"}
          scale={this.scale}
        />
        <calcite-button
          class={CSS.pageNext}
          iconStart={dir === "ltr" ? ICONS.chevronRight : ICONS.chevronLeft}
          kind="neutral"
          label={nextLabel}
          onClick={this.nextClicked}
          round={this.controlType === "circle"}
          scale={this.scale}
        />
      </Fragment>
    );
  }

  render(): VNode {
    const { direction, selectedIndex, total } = this;

    if (total === 0) {
      return null;
    }

    return (
      <section
        class={{ [CSS.container]: true, [this.controlPosition]: !!this.controlPosition }}
        onKeyDown={this.tipManagerKeyDownHandler}
        tabIndex={0}
        // eslint-disable-next-line react/jsx-sort-props
        ref={this.storeContainerRef}
      >
        <div
          class={{
            [CSS.tipContainer]: true,
            [CSS.tipContainerAdvancing]: direction === "advancing",
            [CSS.tipContainerRetreating]: direction === "retreating",
          }}
          key={selectedIndex}
        >
          <slot />
        </div>
        {this.displayArrows && this.tips.length > 1 && this.renderArrows()}
        {this.tips.length > 1 && this.renderPagination()}
      </section>
    );
  }
}

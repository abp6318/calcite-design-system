# calcite-carousel

The `calcite-carousel` component contains multiple `calcite-carousel-item`s that a user can view through via interactive arrows to go back and forth through the tips in the deck.

<!-- Auto Generated Below -->

## Usage

### Basic

Renders a tip manager using a group of tips as well as a single tip.

```html
<calcite-carousel>
  <calcite-carousel-item heading="CarouselItem heading" selected>
    <img slot="thumbnail" src="https://placeimg.com/200/200" alt="This is an image." />
    <p>
      CarouselItem description lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua.
    </p>
    <p>
      This is another slotted paragraph. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </p>
    <calcite-link href="https://www.esri.com" target="_blank" rel="noopener noreferrer">A calcite-link</calcite-link>
  </calcite-carousel-item>
  <calcite-carousel-item heading="The Long Trees" hidden>
    <img slot="thumbnail" src="https://placeimg.com/200/200" alt="This is an image." />
    <p>This tip has an image that is a pretty tall. And the text will run out before the end of the image.</p>
    <p>In astronomy, the terms object and body are often used interchangeably.</p>
    <calcite-link href="https://www.esri.com" target="_blank" rel="noopener noreferrer">A calcite-link</calcite-link>
  </calcite-carousel-item>
  <calcite-carousel-item heading="Square Nature" hidden>
    <img slot="thumbnail" src="https://placeimg.com/200/200" alt="This is an image." />
    <p>This tip has an image that is square. And the text will run out before the end of the image.</p>
    <p>In astronomy, the terms object and body are often used interchangeably.</p>
    <p>
      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form
      of a document without relying on meaningful content (also called greeking). Replacing the actual content with
      placeholder text allows designers to design the form of the content before the content itself has been produced.
    </p>
    <calcite-link href="https://www.esri.com" target="_blank" rel="noopener noreferrer">A calcite-link</calcite-link>
  </calcite-carousel-item>
  <calcite-carousel-item heading="The lack of imagery" hidden>
    <p>This tip has no image. As such, the content area will take up the entire width of the tip.</p>
    <p>
      This is the next paragraph and should show how wide the content area is now. Of course, the width of the overall
      tip will affect things. In astronomy, the terms object and body are often used interchangeably.
    </p>
    <calcite-link href="https://www.esri.com" target="_blank" rel="noopener noreferrer">A calcite-link</calcite-link>
  </calcite-carousel-item>
</calcite-carousel>
```

## Properties

| Property           | Attribute           | Description                                                             | Type                         | Default     |
| ------------------ | ------------------- | ----------------------------------------------------------------------- | ---------------------------- | ----------- |
| `closed`           | `closed`            | When `true`, does not display or position the component.                | `boolean`                    | `false`     |
| `headingLevel`     | `heading-level`     | Specifies the number at which section headings should start.            | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | `undefined` |
| `messageOverrides` | `message-overrides` | Use this property to override individual strings used by the component. | `TipManagerMessages`         | `undefined` |

## Events

| Event                    | Description                               | Type                |
| ------------------------ | ----------------------------------------- | ------------------- |
| `calciteTipManagerClose` | Emits when the component has been closed. | `CustomEvent<void>` |

## Methods

### `nextTip() => Promise<void>`

Selects the next `calcite-carousel-item` to display.

#### Returns

Type: `Promise<void>`

### `previousTip() => Promise<void>`

Selects the previous `calcite-carousel-item` to display.

#### Returns

Type: `Promise<void>`

## Slots

| Slot | Description                                 |
| ---- | ------------------------------------------- |
|      | A slot for adding `calcite-carousel-item`s. |

## CSS Custom Properties

| Name                                | Description                                                                  |
| ----------------------------------- | ---------------------------------------------------------------------------- |
| `--calcite-carousel-height`         | The maximum height of the component.                                         |
| `--calcite-carousel-item-max-width` | The maximum width of a slotted `calcite-carousel-item` within the component. |

## Dependencies

### Depends on

- [calcite-action](../action)
- [calcite-icon](../icon)

### Graph

```mermaid
graph TD;
  calcite-carousel --> calcite-action
  calcite-carousel --> calcite-icon
  calcite-action --> calcite-loader
  calcite-action --> calcite-icon
  style calcite-carousel fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_

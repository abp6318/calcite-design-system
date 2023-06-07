import { newE2EPage } from "@stencil/core/testing";
import { accessible, hidden, renders, defaults, t9n } from "../../tests/commonTests";
import { CSS } from "./resources";

describe("calcite-carousel-item", () => {
  it("renders", async () => renders("calcite-carousel-item", { display: "flex" }));

  it("honors hidden attribute", async () => hidden("calcite-carousel-item"));

  it("has property defaults", async () =>
    defaults("calcite-carousel-item", [
      {
        propertyName: "headingLevel",
        defaultValue: undefined
      }
    ]));

  it("is accessible", async () =>
    accessible(`<calcite-carousel-item heading="sample"><p>not dismissible</p></calcite-carousel-item>`));

  it("should remove the closeButton if closeDisabled prop is true", async () => {
    const page = await newE2EPage();

    await page.setContent(`<calcite-carousel-item close-disabled><p>not dismissible</p></calcite-carousel-item>`);

    const closeButton = await page.find(`calcite-carousel-item >>> .${CSS.close}`);
    expect(closeButton).toBeNull();
  });

  it("should be hidden after the close button is clicked", async () => {
    const page = await newE2EPage({
      html: `<calcite-carousel-item><p>testing close button</p></calcite-carousel-item>`
    });

    const eventSpy = await page.spyOnEvent("calciteTipDismiss", "window");

    const closeButton = await page.find(`calcite-carousel-item >>> .${CSS.close}`);

    await closeButton.click();

    const tip = await page.find(`calcite-carousel-item`);

    const isVisible = await tip.isVisible();

    expect(isVisible).toBe(false);

    expect(eventSpy).toHaveReceivedEvent();
  });

  it("header should only be visible if has a heading", async () => {
    const page = await newE2EPage();
    await page.setContent(`<calcite-carousel-item><p>testing</p></calcite-carousel-item>`);

    let header = await page.find(`calcite-carousel-item >>> .${CSS.header}`);

    expect(header).toBeNull();

    const tip = await page.find("calcite-carousel-item");

    tip.setProperty("heading", "test");

    await page.waitForChanges();

    header = await page.find(`calcite-carousel-item >>> .${CSS.header}`);

    expect(header).not.toBeNull();
  });

  it("supports translations", () => t9n("calcite-carousel-item"));
});

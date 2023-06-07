import { newE2EPage } from "@stencil/core/testing";
import { accessible, defaults, hidden, renders, t9n } from "../../tests/commonTests";
import { CSS, TEXT } from "./resources";

describe("calcite-carousel", () => {
  it("renders", async () => renders("calcite-carousel", { display: "block" }));

  it("honors hidden attribute", async () => hidden("calcite-carousel"));

  describe("first render", () => {
    it("should render and show the default title", async () => {
      const page = await newE2EPage();

      await page.setContent(
        `<calcite-carousel><calcite-carousel-item><p>basic render</p></calcite-carousel-item></calcite-carousel>`
      );
      const tipManager = await page.find("calcite-carousel");
      expect(tipManager).not.toBeNull();
      const isVisible = await tipManager.isVisible();
      expect(isVisible).toBe(true);

      const title = await page.find(`calcite-carousel >>> .${CSS.heading}`);
      expect(title.innerText).toBe(TEXT.defaultGroupTitle);
    });

    it("has property defaults", async () =>
      defaults("calcite-carousel", [
        {
          propertyName: "headingLevel",
          defaultValue: undefined
        }
      ]));

    it("is accessible", async () =>
      accessible(
        `<calcite-carousel><calcite-carousel-item heading="sample"><p>basic render</p></calcite-carousel-item></calcite-carousel>`
      ));

    it("should pre-select the correct tip if the selected attribute is set", async () => {
      const page = await newE2EPage();
      await page.setContent(
        `<calcite-carousel>
          <calcite-carousel-item id="one"><p>no pre-selected attribute</p></calcite-carousel-item>
          <calcite-carousel-item id="two" selected><p>pre-selected and not first</p></calcite-carousel-item>
        </calcite-carousel>`
      );

      await page.waitForChanges();

      const tipManager = await page.find("calcite-carousel");

      const selectedTip = await tipManager.find(`calcite-carousel-item[selected]`);
      expect(selectedTip.id).toEqual("two");
    });
  });
  describe("close button", () => {
    it("should be hidden after the close button is clicked", async () => {
      const page = await newE2EPage({
        html: `<calcite-carousel><calcite-carousel-item><p>Close behavior</p></calcite-carousel-item></calcite-carousel>`
      });

      let container = await page.find(`calcite-carousel >>> .${CSS.container}`);
      let isVisible = await container.isVisible();
      expect(isVisible).toBe(true);

      const closeButton = await page.find(`calcite-carousel >>> .${CSS.close}`);
      await closeButton.click();
      await page.waitForChanges();

      container = await page.find(`calcite-carousel >>> .${CSS.container}`);

      isVisible = await container.isVisible();
      expect(isVisible).toBe(false);
    });
  });
  describe("pagination", () => {
    it("should select the first tip by default and change the selectedIndex when the previous or next buttons are clicked", async () => {
      const page = await newE2EPage({
        html: `<calcite-carousel>
      <calcite-carousel-item id="one"><p>first tip default selected</p></calcite-carousel-item>
      <calcite-carousel-item id="two"><p>next/prev behavior</p></calcite-carousel-item>
    </calcite-carousel>`
      });

      await page.waitForChanges();

      const tipManager = await page.find("calcite-carousel");

      let selectedTip = await tipManager.find(`calcite-carousel-item[selected]`);
      expect(selectedTip.id).toEqual("one"); // default selected tip is index 0

      let paginationText = await page.find(`calcite-carousel >>> .${CSS.pagePosition}`);
      expect(paginationText.textContent).toEqual(`${TEXT.defaultPaginationLabel} 1/2`);

      const nextButton = await page.find(`calcite-carousel >>> .${CSS.pageNext}`);
      await nextButton.click();
      await page.waitForChanges();

      selectedTip = await tipManager.find(`calcite-carousel-item[selected]`);
      expect(selectedTip.id).toEqual("two");

      paginationText = await page.find(`calcite-carousel >>> .${CSS.pagePosition}`);
      expect(paginationText.textContent).toEqual(`${TEXT.defaultPaginationLabel} 2/2`);

      const previousButton = await page.find(`calcite-carousel >>> .${CSS.pagePrevious}`);
      await previousButton.click();
      await page.waitForChanges();

      selectedTip = await tipManager.find(`calcite-carousel-item[selected]`);
      expect(selectedTip.id).toEqual("one");

      paginationText = await page.find(`calcite-carousel >>> .${CSS.pagePosition}`);
      expect(paginationText.textContent).toEqual(`${TEXT.defaultPaginationLabel} 1/2`);
    });

    //Ø TODO: split the group-title test into one for first render, and another for pagination
    it("should update the group title to match the selected tips attribute", async () => {
      const sharedTitle = "group1";
      const title2 = "group2";

      const page = await newE2EPage({
        html: `<calcite-carousel>
        <calcite-carousel-item><p>group title behavior</p></calcite-carousel-item>
        <calcite-carousel-item><p>same title as first one</p></calcite-carousel-item>
        <calcite-carousel-item><p>different title</p></calcite-carousel-item>
        <calcite-carousel-item><p>default title</p></calcite-carousel-item>
    </calcite-carousel>`
      });

      await page.waitForChanges();

      const title = await page.find(`calcite-carousel >>> .${CSS.heading}`);
      expect(title.innerText).toBe(sharedTitle);

      const nextButton = await page.find(`calcite-carousel >>> .${CSS.pageNext}`);
      await nextButton.click();

      const sharedtitleNode = await page.find(`calcite-carousel >>> .${CSS.heading}`);
      expect(sharedtitleNode.innerText).toBe(sharedTitle);

      await nextButton.click();

      const title2Node = await page.find(`calcite-carousel >>> .${CSS.heading}`);
      expect(title2Node.innerText).toBe(title2);

      await nextButton.click();

      const defaultTitleNode = await page.find(`calcite-carousel >>> .${CSS.heading}`);
      expect(defaultTitleNode.innerText).toBe(TEXT.defaultGroupTitle);
    });
    it("pagination should be hidden if there is 1 or fewer tips", async () => {
      const page = await newE2EPage();
      await page.setContent(
        `<calcite-carousel><calcite-carousel-item><p>basic render</p></calcite-carousel-item></calcite-carousel>`
      );

      const pagination = await page.find(`calcite-carousel >>> .${CSS.pagination}`);
      expect(pagination).toBeNull();
    });
  });
  describe("handling dom updates after initial render", () => {
    it("should update if tips are added after intial load", async () => {
      const page = await newE2EPage({
        html: `<calcite-carousel>
      <calcite-carousel-item><p>dynamically adding/removing tips</p></calcite-carousel-item>
    </calcite-carousel>`
      });

      const tipManager = await page.find("calcite-carousel");
      const newTipId = "newTip";
      await page.evaluate((newId) => {
        const mgr = document.querySelector("calcite-carousel");
        const newTip = mgr.querySelector("calcite-carousel-item:last-child").cloneNode(true);
        (newTip as HTMLElement).id = newId;
        mgr.appendChild(newTip);
      }, newTipId);
      await page.waitForChanges();

      const tips = await page.findAll("calcite-carousel calcite-carousel-item");
      expect(tips.length).toBe(2);

      const nextButton = await page.find(`calcite-carousel >>> .${CSS.pageNext}`);
      await nextButton.click();
      await page.waitForChanges();

      const selectedTip = await tipManager.find(`calcite-carousel-item[selected]`);
      expect(selectedTip.id).toEqual(newTipId);
    });
    it("should update visible tip if active tip is removed", async () => {
      const page = await newE2EPage();
      await page.setContent(
        `<calcite-carousel>
          <calcite-carousel-item id="one"><p>dynamically adding/removing tips</p></calcite-carousel-item>
          <calcite-carousel-item id="two"><p>dynamically adding/removing tips</p></calcite-carousel-item>
        </calcite-carousel>`
      );
      const tipManager = await page.find("calcite-carousel");

      await page.evaluate(() => {
        document.querySelector("calcite-carousel-item:first-child").remove();
      });
      await page.waitForChanges();

      const selectedTip = await tipManager.find(`calcite-carousel-item[selected]`);
      expect(selectedTip.id).toEqual("two");
    });
  });

  it("should set headingLevel of tip", async () => {
    const page = await newE2EPage();

    await page.setContent(
      `<calcite-carousel heading-level="1">
        <calcite-carousel-item id="one" heading="test"><p>no pre-selected attribute</p></calcite-carousel-item>
      </calcite-carousel>`
    );

    await page.waitForChanges();

    const tipManager = await page.find("calcite-carousel");

    expect(await tipManager.getProperty("headingLevel")).toEqual(1);

    const heading = await page.find(`calcite-carousel-item >>> .${CSS.heading}`);

    expect(heading.tagName).toEqual("H2");
  });

  it("supports translations", () => t9n("calcite-carousel"));
});

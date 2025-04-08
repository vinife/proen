const accordionList = [];
for (const brAccordion of document.querySelectorAll(".br-accordion")) {
  accordionList.push(
    Object.create(new core.BRAccordion("br-accordion", brAccordion))
  );
}

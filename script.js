const accordionList = [];
for (const brAccordion of document.querySelectorAll(".br-accordion")) {
  accordionList.push(
    Object.create(new core.BRAccordion("br-accordion", brAccordion))
  );
}

const headerList = [];
for (const brHeader of window.document.querySelectorAll(".br-header")) {
  headerList.push(new core.BRHeader("br-header", brHeader));
}

const listFooter = [];
for (const brFooter of window.document.querySelectorAll(".br-footer")) {
  listFooter.push(new core.BRFooter("br-footer", brFooter));
}

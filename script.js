// Modularizar criação de componentes
function initComponents(selector, ComponentClass) {
  const elements = document.querySelectorAll(selector);
  return elements.length
    ? Array.from(elements).map((el) => new ComponentClass(selector, el))
    : [];
}

// Uso
const accordions = initComponents(".br-accordion", core.BRAccordion);
const headers = initComponents(".br-header", core.BRHeader);
const footers = initComponents(".br-footer", core.BRFooter);

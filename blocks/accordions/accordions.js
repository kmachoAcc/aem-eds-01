function toogleAccordion(row) {
  const openDetails = document.querySelectorAll('.accordions-block.is-open');

  openDetails.forEach((detail) => {
    detail.classList.remove('is-open');
  });

  row.classList.add('is-open');
}

export default function decorate(block) {
  [...block.children].forEach((row) => {
    const accordionTitle = row.firstElementChild;
    const accordionDescription = row.lastElementChild;

    accordionTitle.className = 'accordions-block-title';
    accordionDescription.className = 'accordions-block-description';
    row.className = 'accordions-block';

    accordionTitle.addEventListener('click', () => toogleAccordion(row));
  });
}

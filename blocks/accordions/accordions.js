import { createOptimizedPicture } from '../../scripts/aem.js';


/**
 * Toggles all nav sections
 * @param {Element} sections The container element
 * @param {Boolean} expanded Whether the element should be expanded or collapsed
 */
function toogleAccordion(row) {
  const openDetails = document.querySelectorAll('.accordions-block.is-open');

  
  openDetails.forEach(detail => {
    detail.classList.remove('is-open');
  });

  row.classList.add('is-open');
}

export default function decorate(block) {
  console.log(block);
  /* change to ul, li */
  [...block.children].forEach((row) => {
    let accordionTitle = row.firstElementChild;
    let accordionDescription = row.lastElementChild;
   
    accordionTitle.className = 'accordions-block-title';
    accordionDescription.className = 'accordions-block-description';
    row.className = 'accordions-block';

    accordionTitle.addEventListener('click', () => toogleAccordion(row));
  });
}

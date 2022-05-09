import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';

import '@shoelace-style/shoelace/dist/components/visually-hidden/visually-hidden.js';

const basePath = document.documentElement.getAttribute('data-base-path');
setBasePath(basePath);

import { LitElement, html, css, render } from 'lit';

function removeCarousel() {
  const content = document.getElementById('content');

  const observer = new MutationObserver((mutations) => {
    for (const _ of mutations) {
      const carousel = document.querySelector('.c-carousel');
      if (carousel) {
        console.log(carousel);
        observer.disconnect();
        const parent = carousel.parentNode;

        render(
          html` <sl-visually-hidden> ${carousel} </sl-visually-hidden> `,
          parent
        );
      }
    }
  });

  observer.observe(content, {
    childList: true,
    subtree: true,
  });
}

removeCarousel();

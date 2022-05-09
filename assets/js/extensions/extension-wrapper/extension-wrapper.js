import { LitElement, html, css, render } from 'lit';

import '@shoelace-style/shoelace/dist/components/visually-hidden/visually-hidden.js';

import '../components/element-upgrade/element-upgrade.js';

class ExtensionWrapper extends LitElement {
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    const profileImage = Array.from(
      this.querySelectorAll('*[aria-label]')
    ).filter((el) => el.getAttribute('aria-label').includes('Google Account'));
    upgradeElement(profileImage[0], 'element-upgrade');
    // console.log(Array.from(this.querySelectorAll('*[aria-label]')));
    /**
     * This may need to hook into slotchanged event.
     * this runs once but may need to action on future changes.
     * Changes such as adding or removing elements.
     */
    const observer = new MutationObserver((mutations) => {
      // let completed = [];
      // for (const mutation of mutations) {
      //   if (!completed.includes('actions')) {
      //     // should maybe store in state, but this is fine for now
      //     const actions = mutation.target.closest('.erc-user-actions');
      //     if (actions) {
      //       // Watching for new dom elements to be added to the actions container, skip once they've been added
      //       // Should add an early break when all conditions are met
      //       completed.push('actions');
      //       const parent = actions.parentNode;
      //       const markup = document.createElement('header-actions');
      //       // Add any attributes at this point
      //       // Insert your component into the DOM and populate it with the elemnt you are replacing
      //       parent.insertBefore(markup, actions);
      //       render(actions, markup);
      //     }
      //   }
      //   if (!completed.includes('carousel')) {
      //     const carousel = mutation.target.closest('.c-hero-carousel');
      //     if (carousel) {
      // completed.push('carousel');
      // const parent = carousel.parentNode;
      // const markup = document.createElement('sl-visually-hidden');
      // parent.insertBefore(markup, carousel);
      // render(carousel, markup);
      //     }
      //   }
      //   // Early break once all items are found
      //   // stop observing and kill the loop
      //   if (completed.length === 2) {
      //     observer.disconnect();
      //     break;
      //   }
      // }
    });
    observer.observe(this, {
      childList: true,
      subtree: true,
    });

    this.addEventListener('setting-change', (event) => {
      console.log(event.detail);
    });
  }
  render() {
    return html` <slot @slotchange=${this._handleSlotChange}></slot> `;
  }
}

customElements.define('extension-wrapper', ExtensionWrapper);

function upgradeElement(element, webComponent, attributes) {
  console.log(element, webComponent);
  const parent = element.parentNode;
  const markup = document.createElement(webComponent);
  for (const key in attributes) {
    markup.setAttribute(key, attributes[key]);
  }

  parent.insertBefore(markup, element);
  render(element, markup);
}

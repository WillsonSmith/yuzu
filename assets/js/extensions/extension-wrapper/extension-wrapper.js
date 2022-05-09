import { LitElement, html, css, render } from 'lit';

import '@shoelace-style/shoelace/dist/components/visually-hidden/visually-hidden.js';

import '../components/element-upgrade/element-upgrade.js';

class ExtensionWrapper extends LitElement {
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();

    // Get some element on the page
    const profileImage = this.querySelector('[aria-label*="Google Account');

    // If we found one, we can upgrade it
    upgradeElement(profileImage, 'element-upgrade');

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList') {
          // watch for added elements
          for (const addedNode of mutation.addedNodes) {
          }

          // watch for removed elements
          for (const removedNode of mutation.removedNodes) {
          }

          // if some condition is met, stop the observer
          if (mutation.addedNodes.length || false) {
            observer.disconnect();
            break;
          }
        }
      }
    });
    observer.observe(this, {
      childList: true,
      subtree: true,
    });

    this.addEventListener('setting-changed', (event) => {
      console.log(event.detail);
    });
  }
  render() {
    return html` <slot @slotchange=${this._handleSlotChange}></slot> `;
  }
}

customElements.define('extension-wrapper', ExtensionWrapper);

function upgradeElement(element, webComponent, attributes) {
  if (!element) return;
  const parent = element.parentNode;
  const markup = document.createElement(webComponent);
  for (const key in attributes) {
    markup.setAttribute(key, attributes[key]);
  }

  parent.insertBefore(markup, element);
  render(element, markup);
}

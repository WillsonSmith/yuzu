import { LitElement, html, css } from 'lit';

import '@shoelace-style/shoelace/dist/components/visually-hidden/visually-hidden.js';

class UpperCase extends LitElement {
  static get properties() {
    return {
      text: { type: String, attribute: false },
    };
  }
  static get styles() {
    return css`
      .uppercase {
        text-transform: uppercase;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <span aria-hidden="true" class="uppercase">${this.textContent}</span>
      <sl-visually-hidden>
        <slot></slot>
      </sl-visually-hidden>
    `;
  }
}
customElements.define('upper-case', UpperCase);

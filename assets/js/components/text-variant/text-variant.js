import { LitElement, html, css } from 'lit';

class TextVariant extends LitElement {
  static get properties() {
    return {
      variant: { type: String },
    };
  }
  static get styles() {
    return css``;
  }

  constructor() {
    super();
    this.variant = '';
  }

  firstUpdated() {
    if (this.variant == 'uppercase') import('./components/upper-case.js');
  }

  render() {
    if (this.uppercase) {
      return html` <upper-case>${this.textContent}</upper-case> `;
    }
    return html` <span>${this.textContent}</span> `;
  }
}
customElements.define('text-variant', TextVariant);

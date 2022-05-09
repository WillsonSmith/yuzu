import { LitElement, html, css } from 'lit';

class ElementUpgrade extends LitElement {
  static get properties() {
    return {};
  }
  static get styles() {
    return css``;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`<slot @slotchange=${this._upgrade}></slot>`;
  }

  _upgrade() {
    this.querySelector('*')?.setAttribute('data-upgraded', true);
  }
}

customElements.define('element-upgrade', ElementUpgrade);

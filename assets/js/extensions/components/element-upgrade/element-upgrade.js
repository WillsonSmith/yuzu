import { LitElement, html, css } from 'lit';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import '@shoelace-style/shoelace/dist/components/menu-label/menu-label.js';

class ElementUpgrade extends LitElement {
  static get properties() {
    return {};
  }
  static get styles() {
    return css`
      .upgrade-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: var(--sl-spacing-2x-small);
      }
      .upgrade-menu {
        margin-top: var(--sl-spacing-2x-small);
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html` <div class="upgrade-wrapper">
      <slot @slotchange=${this._upgrade}></slot>
      <sl-dropdown class="upgrade-dropdown">
        <sl-button slot="trigger" circle>
          <sl-icon name="gear"></sl-icon>
        </sl-button>
        <sl-menu class="upgrade-menu">
          <sl-menu-label>Settings</sl-menu-label>
          <sl-menu-item>Extension setting 1</sl-menu-item>
          <sl-menu-item>Extension setting 2</sl-menu-item>
        </sl-menu>
      </sl-dropdown>
    </div>`;
  }

  _upgrade() {
    this.querySelector('*')?.setAttribute('data-upgraded', true);
  }
}

customElements.define('element-upgrade', ElementUpgrade);

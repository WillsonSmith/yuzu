import { LitElement, html, css } from 'lit';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import '@shoelace-style/shoelace/dist/components/menu-label/menu-label.js';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';

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

      .settings-dialog {
        font-family: var(--sl-font-sans);
        font-size: var(--sl-font-size-medium);
        font-weight: var(--sl-font-weight-normal);
        letter-spacing: var(--sl-letter-spacing-normal);
        background-color: var(--sl-color-neutral-0);
        color: var(--sl-color-neutral-900);
        line-height: var(--sl-line-height-normal);
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
        <sl-menu
          value="one"
          @sl-select=${this._changeSetting}
          class="upgrade-menu"
        >
          <sl-menu-label>Settings</sl-menu-label>
          <sl-menu-item value="dialog">Open dialog</sl-menu-item>
          <sl-menu-item value="one">Extension setting 1</sl-menu-item>
          <sl-menu-item value="two">Extension setting 2</sl-menu-item>
        </sl-menu>
      </sl-dropdown>
      <sl-dialog label="Settings" class="settings-dialog">
        <span>Add some settings to your extension</span>
        <sl-button slot="footer" @click=${this._closeSettings}>Close</sl-button>
      </sl-dialog>
    </div>`;
  }

  _upgrade() {
    this.querySelector('*')?.setAttribute('data-upgraded', true);
  }

  _closeSettings() {
    this.shadowRoot.querySelector('.settings-dialog').hide();
  }

  _changeSetting(event) {
    if (event.detail.item.value === 'dialog') {
      this.shadowRoot.querySelector('.settings-dialog').show();
      return;
    }
    // Send some new setting to the extension-wrapper to handle
    this.dispatchEvent(
      new CustomEvent('setting-changed', {
        detail: {
          setting: event.detail.item.value,
        },
        bubbles: true,
      })
    );
  }
}

customElements.define('element-upgrade', ElementUpgrade);

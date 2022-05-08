import { LitElement, html, css } from 'lit';

import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';

import '../colorize-word/colorize-word.js';
import '../star-sheet/star-sheet.js';

class PageHeader extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      .header {
        background: var(--sl-color-neutral-0);
        position: sticky;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;

        border-bottom: 1px solid var(--sl-color-neutral-300);
        padding: var(--sl-spacing-x-small) var(--sl-spacing-small);

        z-index: 1;
      }

      .header h1 {
        margin: 0;
        font-family: 'Fredoka', var(--sl-font-sans);
        font-size: var(--sl-font-size-2x-large);
        line-height: var(--sl-line-height-normal);
        font-weight: var(--sl-font-weight-semibold);
        color: var(--sl-color-neutral-900);
      }

      .header h1 a {
        text-decoration: none;
        color: var(--sl-color-neutral-900);
      }

      .header sl-dropdown {
        margin-right: var(--sl-spacing-2x-small);
      }

      colorize-word {
        font-family: 'Fredoka', var(--sl-font-sans);
      }

      star-sheet {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        z-index: -1;
      }
    `;
  }

  render() {
    return html` <div class="header">
      <star-sheet></star-sheet>
      <h1>
        <a href="/" aria-label="Willson">
          <colorize-word>Willson</colorize-word>
        </a>
      </h1>
      <nav>
        <div class="social">
          <sl-dropdown>
            <sl-button slot="trigger" pill size="small" caret>
              <sl-icon name="moon" label="Select theme"></sl-icon>
            </sl-button>
            <sl-menu value="automatic" @sl-select=${this._handleThemeChange}>
              <sl-menu-item value="light">Light</sl-menu-item>
              <sl-menu-item value="dark">Dark</sl-menu-item>
              <sl-menu-item value="automatic">Automatic</sl-menu-item>
            </sl-menu>
          </sl-dropdown>
        </div>
        <sl-tooltip content="Twitter">
          <sl-icon-button
            name="twitter"
            label="Twitter"
            href="https://twitter.com/modfox"
            target="_blank"
          ></sl-icon-button>
        </sl-tooltip>
        <sl-tooltip content="GitHub">
          <sl-icon-button
            name="github"
            label="GitHub"
            href="https://github.com/willsonsmith/willsonsmith.com"
            target="_blank"
          ></sl-icon-button>
        </sl-tooltip>
      </nav>
    </div>`;
  }

  _handleThemeChange(event) {
    const theme = event.detail.item.value;
    this.dispatchEvent(new CustomEvent('theme-change', { detail: { theme } }));
  }
}

customElements.define('page-header', PageHeader);

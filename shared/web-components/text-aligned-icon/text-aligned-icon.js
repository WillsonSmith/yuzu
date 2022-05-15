import { LitElement, html, css } from 'lit';

import '@shoelace-style/shoelace/dist/components/icon/icon.js';

class TextAlignedIcon extends LitElement {
  static get properties() {
    return {
      icon: { type: String },
      label: { type: String },
    };
  }
  static get styles() {
    return css`
      :host {
        --padding: var(--sl-spacing-3x-small);
        --icon-spacing: var(--sl-spacing-2x-small);
      }

      .text {
        display: flex;
        align-items: center;
        padding: var(--padding);
      }

      .text sl-icon {
        margin-left: var(--icon-spacing);
      }
    `;
  }

  constructor() {
    super();
    this.icon = '';
    this.label = '';
  }

  render() {
    return html`
      <span class="text">
        <slot></slot>
        <sl-icon label=${this.label} name="${this.icon}"></sl-icon>
      </span>
    `;
  }
}

customElements.define('text-aligned-icon', TextAlignedIcon);

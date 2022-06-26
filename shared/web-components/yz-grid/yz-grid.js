import { LitElement, html, css } from "lit";

import { styleMap } from "lit/directives/style-map.js";

import { spacing } from "../_system/tokens/spacing.js";

class Grid extends LitElement {
  static properties = {
    rows: { type: Number },
    columns: { type: Number },
    gap: { type: Number },
  };
  static styles = [
    spacing,
    css`
      :host {
        display: block;
      }
      .grid {
        display: grid;
      }
    `,
  ];

  render() {
    return html`
      <div
        part="container"
        class="grid"
        style=${styleMap({
          gridTemplateColumns: `repeat(${this.columns}, 1fr)`,
          gridTemplateRows: `repeat(${this.rows}, 1fr)`,
          gridGap: `var(--yz-spacing-0${this.gap});`,
        })}
      >
        <slot></slot>
      </div>
    `;
  }
}
import(`./components/yz-grid-item.js`);
customElements.define(`yz-grid`, Grid);

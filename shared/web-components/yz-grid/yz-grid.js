import { LitElement, html, css } from "lit";

import { styleMap } from "lit/directives/style-map.js";

class Grid extends LitElement {
  static properties = {
    rows: { type: Number },
    columns: { type: Number },
  };
  static styles = [
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
        class="grid"
        style=${styleMap({
          gridTemplateColumns: `repeat(${this.columns}, 1fr)`,
          gridTemplateRows: `repeat(${this.rows}, 1fr)`,
        })}
      >
        <slot></slot>
      </div>
    `;
  }
}
import(`./components/yz-grid-item.js`);
customElements.define(`yz-grid`, Grid);

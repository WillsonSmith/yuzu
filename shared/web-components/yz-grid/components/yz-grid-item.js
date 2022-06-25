import { LitElement, html, css } from "lit";
import { styleMap } from "lit/directives/style-map.js";

class GridItem extends LitElement {
  static properties = {
    rows: { type: Number },
    columns: { type: Number },
  };
  static styles = [
    css`
      :host {
        display: contents;
      }
      .grid-item {
        --column-end: auto;
        --row-end: auto;
        grid-column-end: var(--column-end);
        grid-row-end: var(--row-end);
      }
    `,
  ];

  render() {
    return html`
      <div
        class="grid-item"
        style=${styleMap({
          "--column-end": this.columns ? `span ${this.columns}` : undefined,
          "--row-end": this.rows ? `span ${this.rows}` : undefined,
        })}
      >
        <slot></slot>
      </div>
    `;
  }
}

customElements.define(`yz-grid-item`, GridItem);

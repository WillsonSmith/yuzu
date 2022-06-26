import { LitElement, html, css } from "lit";
import { styleMap } from "lit/directives/style-map.js";

class GridItem extends LitElement {
  static properties = {
    rows: { type: Number },
    columns: { type: Number },
    order: { type: Number },
  };
  static styles = [
    css`
      :host {
        display: contents;
        --order: 0;
      }
      .grid-item {
        --column-end: auto;
        --row-end: auto;
        grid-column-end: var(--column-end);
        grid-row-end: var(--row-end);
        order: var(--order);
      }
    `,
  ];

  constructor() {
    super();
    this.rows = undefined;
    this.columns = undefined;
    this.order = undefined;
  }

  render() {
    return html`
      <div
        class="grid-item"
        style=${styleMap({
          "--order": this.order ?? undefined,
          "--row-end": this.rows ? `span ${this.rows}` : undefined,
          "--column-end": this.columns ? `span ${this.columns}` : undefined,
        })}
      >
        <slot></slot>
      </div>
    `;
  }
}

customElements.define(`yz-grid-item`, GridItem);

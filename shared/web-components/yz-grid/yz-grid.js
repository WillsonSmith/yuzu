import { LitElement, html, css } from "lit";
import { styleMap } from "lit/directives/style-map.js";

import { spacing } from "../_system/tokens/spacing.js";

class Grid extends LitElement {
  static properties = {
    rows: {},
    columns: {},
    gap: { type: Number },
  };
  static styles = [
    spacing,
    css`
      :host {
        --grid-template-column-default: repeat(auto-fit, 1fr);
        --grid-template-row-default: repeat(auto-fit, 1fr);
        --grid-gap-default: var(--yz-spacing-00);
        display: block;
      }
      .grid {
        display: grid;
        grid-template-columns: var(
          --grid-template-columns,
          --grid-template-column-default
        );
        grid-template-rows: var(
          --grid-template-rows,
          --grid-template-row-default
        );
        grid-gap: var(--grid-gap, --grid-gap-default);
      }
    `,
  ];

  constructor() {
    super();
    this.rows = undefined;
    this.columns = undefined;
    this.gap = undefined;
  }

  render() {
    let columns;
    if (this.columns && isNaN(Number(this.columns))) columns = this.columns;
    if (this.columns && !isNaN(Number(this.columns)))
      columns = `repeat(${this.columns}, 1fr)`;

    let rows;
    if (this.rows && isNaN(Number(this.rows))) rows = this.rows;
    if (this.rows && !isNaN(Number(this.rows)))
      rows = `repeat(${this.rows}, 1fr)`;

    const styles = {
      "--grid-template-columns": columns,
      "--grid-template-rows": rows,
      "--grid-gap": `var(--yz-spacing-0${this.gap})`,
    };
    return html`
      <div part="container" class="grid" style=${styleMap(styles)}>
        <slot></slot>
      </div>
    `;
  }
}
import(`./components/yz-grid-item.js`);
customElements.define(`yz-grid`, Grid);

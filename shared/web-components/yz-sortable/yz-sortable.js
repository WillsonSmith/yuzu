import { LitElement, html, css, render } from "lit";

// Make a DraggableLitElement class that extends LitElement

class Sortable extends LitElement {
  static styles = [
    css`
      :host {
        display: contents;
      }
    `,
  ];

  static properties = {
    sortableChildren: { type: Array },
  };

  firstUpdated() {
    this.sortableChildren = Array.from(this.children);
    render(html` ${this.sortableChildren?.map(this.wrapWithItem)} `, this);

    this.addEventListener(`yz-evt-sort`, (event) => {
      const { dropTargetOrder, draggingItemOrder } = event.detail;

      const dropTarget = this.querySelector(`[order="${dropTargetOrder}"]`);
      const draggingItem = this.querySelector(`[order="${draggingItemOrder}"]`);

      dropTarget.setAttribute(`order`, draggingItemOrder);
      draggingItem.setAttribute(`order`, dropTargetOrder);
    });
  }

  handleEvent(event) {
    switch (event.type) {
      case `dragstart`:
        this.dragging = true;
        break;
      case `dragend`:
        this.dragging = false;
        break;
      case `drop`:
        console.log(`drop`);
        this.dragging = false;
        break;
    }
  }

  render() {
    return html`<slot></slot>`;
  }

  wrapWithItem = (node, index) => {
    return html` <yz-sortable-item order=${index}>${node}</yz-sortable-item>`;
  };
}

customElements.define(`yz-sortable`, Sortable);

import(`./components/yz-sortable-item/yz-sortable-item.js`);

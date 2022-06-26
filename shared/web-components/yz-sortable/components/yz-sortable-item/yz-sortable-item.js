import { LitElement, html, css } from "lit";

class SortableItem extends LitElement {
  static styles = [
    css`
      :host {
        display: contents;
      }
    `,
  ];

  static properties = {
    order: { type: Number },
    dragTarget: {},
  };

  constructor() {
    super();
    this.order = 0;
  }

  firstUpdated() {
    this.addEventListener(`dragstart`, (event) => {
      event.dataTransfer.setData(`text/plain`, `${this.order}`);
    });
    this.addEventListener(`dragenter`, (event) => event.preventDefault());
    this.addEventListener(`dragover`, (event) => event.preventDefault());
    this.addEventListener(`drop`, (event) => {
      // @ts-ignore
      const dropTarget = event.target.closest(`yz-sortable-item`);
      const dropTargetOrder = dropTarget.getAttribute(`order`);
      const draggingItemOrder = event.dataTransfer.getData(`text/plain`);
      if (dropTargetOrder !== draggingItemOrder) {
        this.dispatchEvent(
          new CustomEvent(`yz-evt-sort`, {
            detail: {
              dropTargetOrder,
              draggingItemOrder,
            },
            bubbles: true,
          })
        );
      }
    });

    let firstGridItem = this.firstElementChild;
    while (getComputedStyle(firstGridItem).display === `contents`) {
      firstGridItem = firstGridItem.firstElementChild;
    }
    firstGridItem.setAttribute(`draggable`, `true`);
    this.dragTarget = firstGridItem;

    for (const child of Array.from(firstGridItem.querySelectorAll(`*`))) {
      child.setAttribute(`draggable`, `false`);
    }
  }

  updated(changedProperties) {
    if (changedProperties.has(`order`)) {
      //@ts-ignore
      this.firstElementChild.style.setProperty(`--order`, this.order);
    }

    if (changedProperties.has(`dragTarget`)) {
    }
  }

  render() {
    return html`<slot></slot> `;
  }
}

customElements.define(`yz-sortable-item`, SortableItem);

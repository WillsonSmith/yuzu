import { LitElement, html, css } from "lit";

class Sortable extends LitElement {
  static styles = [
    css`
      :host {
        display: contents;
      }
    `,
  ];

  firstUpdated() {
    this.sortableNodes = Array.from(this.children);
    for (const [index, node] of Object.entries(this.sortableNodes)) {
      node.style.setProperty(`--order`, index);
      node.addEventListener(`dragstart`, this.handleDragStart);
      node.addEventListener(`dragend`, this.handleDragEnd);
      node.setAttribute(`draggable`, `true`);
    }
  }

  render() {
    return html` <slot></slot> `;
  }

  slotChange() {
    this.sortableNodes = Array.from(this.children);
    for (const node of this.sortableNodes) {
      node.addEventListener(`dragstart`, this.handleDragStart);
      node.addEventListener(`dragend`, this.handleDragEnd);

      node.setAttribute(`draggable`, `true`);
      console.log(node.firstChild);
      node.firstChild.setAttribute(`draggable`, `false`);

      node.removeEventListener(`dragover`, this.handleDragEnter);
      node.addEventListener(`dragover`, this.handleDragEnter);
    }
  }

  handleDragEnter(event) {
    console.log(`drag-enter`);
    console.log(event);
  }

  handleDragStart(event) {
    console.log(`drag-start`);
    this.dragging = true;
    event.dataTransfer.setData(
      `text/plain`,
      event.target.style.getPropertyValue(`--order`)
    );
    console.log(event.target);
    console.log(event.target.style.getPropertyValue(`--order`));
  }
  handleDragEnd() {
    console.log(`drag-end`);

    this.dragging = false;
  }
}

customElements.define(`yz-sortable`, Sortable);

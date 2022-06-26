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

    this.addEventListener(`drop`, this.handleDrop);
  }

  render() {
    return html` <slot @slotchange=${this.handleSlotChange}></slot> `;
  }

  handleSlotChange() {
    this.sortableNodes = Array.from(this.children);
    for (const node of this.sortableNodes) {
      this.resetNode(node);
      this.setupNode(node);
    }
  }

  resetNode(node) {
    node.removeEventListener(`dragstart`, this.handleDragStart);
    node.removeEventListener(`dragend`, this.handleDragEnd);
    node.removeEventListener(`dragenter`, this.handleDragEnter);

    let sortableChildren = Array.from(node.querySelectorAll(`*`));
    sortableChildren = nestedChildren(sortableChildren);
    for (const child of sortableChildren) {
      child.removeAttribute(`draggable`);
    }

    node.removeAttribute(`draggable`);
  }

  setupNode(node) {
    node.setAttribute(`draggable`, `true`);
    let sortableChildren = Array.from(node.querySelectorAll(`*`));
    sortableChildren = nestedChildren(sortableChildren);
    for (const child of sortableChildren) {
      child.setAttribute(`draggable`, `false`);
    }
    node.addEventListener(`drop`, this.handleDrop);
    node.addEventListener(`dragstart`, this.handleDragStart);
    node.addEventListener(`dragenter`, this.handleDragEnter);
    node.addEventListener(`dragend`, this.handleDragEnd);
  }

  handleDragEnter(event) {}

  handleDragStart(event) {
    this.dragging = true;
    event.dataTransfer.setData(
      `text/plain`,
      event.target.style.getPropertyValue(`--order`)
    );
    // console.log(event.target.style.getPropertyValue(`--order`));
  }

  handleDrop(event) {
    console.log(`drop`, event.target);
    console.log(event.dataTransfer.getData(`text/plain`));
  }

  // if you drop and aren't over something, animate it back to position
  handleDragEnd(event) {
    this.dragging = false;
  }
}

customElements.define(`yz-sortable`, Sortable);

/** Utilities */
function nestedChildren(node) {
  const first = node.firstElementChild;
  if (first) {
    return Array.from(first.querySelectorAll(`*`));
  }
  return [];
}

import { LitElement, html } from "lit";

class DropBucket extends LitElement {
  static properties = {
    customEvent: { attribute: `custom-event`, type: String },
  };

  constructor() {
    super();
    this.customEvent = undefined;
  }

  firstUpdated() {
    this.addEventListener(`dragover`, this.handleEvent(`dragover`));
    this.addEventListener(`dragenter`, this.handleEvent(`dragenter`));
    this.addEventListener(`dragleave`, this.handleEvent(`dragleave`));
    this.addEventListener(`drop`, this.handleEvent(`drop`));
  }

  handleEvent(eventName) {
    return (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.updateAttributes(attributesToToggle(eventName));
    };
  }

  render() {
    return html` <slot></slot> `;
  }

  get event() {
    if (this.customEvent) return this.customEvent;
    else return `yz-evt-drop`;
  }

  emit(event) {
    const yzDropEvent = new CustomEvent(this.event, {
      detail: {
        event,
      },
    });
    this.dispatchEvent(yzDropEvent);
  }

  handleDrop(event) {
    stopEvent(event);
    this.emit(event);
    this.resetAttributes();
  }

  resetAttributes = () => this.updateAttributes();
  updateAttributes(updates = {}) {
    const defaultAttributes = {
      dragOver: false,
      dragEnter: false,
      dragLeave: false,
    };

    const toggledAttributes = {
      ...defaultAttributes,
      ...updates,
    };

    for (const [attribute, attributeEnabled] of Object.entries(
      toggledAttributes
    )) {
      this.removeAttribute(attribute);
      if (attributeEnabled) {
        this.setAttribute(attribute, attribute);
      }
    }
  }
}

function attributesToToggle(event) {
  switch (event.type) {
    case `dragover`:
      return {
        dragOver: true,
        dragEnter: true,
        dragLeave: false,
      };
    case `dragenter`:
      return {
        dragOver: true,
        dragEnter: true,
        dragLeave: false,
      };
    case `dragleave`:
      return {
        dragOver: false,
        dragEnter: false,
        dragLeave: true,
      };
    case `drop`:
      return {
        dragOver: false,
        dragEnter: false,
        dragLeave: false,
      };
    default:
      return {};
  }
}

/** Utilities */
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

customElements.define(`yz-drop-bucket`, DropBucket);

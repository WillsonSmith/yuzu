import { LitElement, html } from "lit";

class FileDrop extends LitElement {
  static properties = {
    customEvent: { attribute: `custom-event`, type: String },
    dragEnter: { attribute: `drag-enter`, type: Boolean, reflect: true },
    dragOver: { attribute: `drag-over`, type: Boolean, reflect: true },
    dragLeave: { attribute: `drag-leave`, type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.customEvent = undefined;
    this.dragEnter = false;
    this.dragOver = false;
    this.dragLeave = false;
  }

  firstUpdated() {
    this.addEventListener(`dragenter`, this.handleEvent);
    this.addEventListener(`dragover`, this.handleEvent);
    this.addEventListener(`dragleave`, this.handleEvent);
    this.addEventListener(`drop`, this.handleEvent);
  }

  handleEvent(event) {
    if ([`dragenter`, `dragover`, `drop`].includes(event.type)) {
      event.preventDefault();
    }
    this.updateAttributes(attributesToToggle(event.type));
    if (event.type === `drop`) this.emit(event);
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

  resetAttributes = () => this.updateAttributes();
  updateAttributes(updates = {}) {
    const defaultAttributes = {
      dragEnter: false,
      dragOver: false,
      dragLeave: false,
    };

    const toggledAttributes = {
      ...defaultAttributes,
      ...updates,
    };

    const entries = Object.entries(toggledAttributes);
    for (const [attribute, enabled] of entries) {
      this[attribute] = enabled;
    }
  }
}

function attributesToToggle(eventType) {
  return (
    {
      dragenter: { dragEnter: true, dragOver: true },
      dragover: { dragEnter: true, dragOver: true },
      dragleave: { dragLeave: true },
    }[eventType] || {}
  );
}

customElements.define(`yz-file-drop`, FileDrop);

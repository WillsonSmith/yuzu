import { LitElement, html } from "lit";

class DropBucket extends LitElement {
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
    this.addEventListener(`dragenter`, this.handleEvent(`dragenter`));
    this.addEventListener(`dragover`, this.handleEvent(`dragover`));
    this.addEventListener(`dragleave`, this.handleEvent(`dragleave`));
    this.addEventListener(`drop`, this.handleEvent(`drop`));
  }

  handleEvent(eventName) {
    return (event) => {
      if ([`dragenter`, `dragover`].includes(event.type)) {
        event.preventDefault();
      }
      if (event.type === `drop`) {
        event.preventDefault();
        this.emit(event);
      }
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
  switch (eventType) {
    case `dragenter`:
      return {
        dragOver: true,
        dragEnter: true,
      };
    case `dragover`:
      return {
        dragOver: true,
        dragEnter: true,
      };
    case `dragleave`:
      return {
        dragLeave: true,
      };
    case `drop`:
      return {};
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

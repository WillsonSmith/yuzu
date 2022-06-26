import { LitElement, html, css } from "lit";

import { ClockController } from "./controllers/clock-controller.js";

class Clock extends LitElement {
  constructor() {
    super();
    this.clock = new ClockController(this, 100);
  }
  render() {
    const formattedTime = timeFormat.format(this.clock.time);
    return html`${formattedTime}`;
  }
}

const timeFormat = new Intl.DateTimeFormat(`en-US`, {
  hour: `numeric`,
  minute: `numeric`,
});

customElements.define(`yz-clock`, Clock);

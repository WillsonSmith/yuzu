export class ClockController {
  host = undefined;
  timeout = undefined;
  _timerID = undefined;
  time = new Date();
  constructor(host, timeout) {
    this.host = host;
    this.host.addController(this);
    this.timeout = timeout;
  }

  hostConnected() {
    this._timerID = setInterval(() => {
      this.time = new Date();
      this.host.requestUpdate();
    }, this.timeout);
  }
  hostDisconnected() {
    clearInterval(this._timerID);
    this._timerID = undefined;
  }
}

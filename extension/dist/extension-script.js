var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

// node_modules/javascript-color-gradient/src/index.js
var require_src = __commonJS({
  "node_modules/javascript-color-gradient/src/index.js"(exports, module) {
    var GradientColor = class {
      constructor(startColor = "", endColor = "", minNum = 0, maxNum = 10) {
        this.setColorGradient = (colorStart, colorEnd) => {
          startColor = getHexColor(colorStart);
          endColor = getHexColor(colorEnd);
        };
        this.setMidpoint = (minNumber, maxNumber) => {
          minNum = minNumber;
          maxNum = maxNumber;
        };
        this.getColor = (numberValue) => {
          if (numberValue) {
            return "#" + generateHex(numberValue, startColor.substring(0, 2), endColor.substring(0, 2)) + generateHex(numberValue, startColor.substring(2, 4), endColor.substring(2, 4)) + generateHex(numberValue, startColor.substring(4, 6), endColor.substring(4, 6));
          }
        };
        const generateHex = (number, start, end) => {
          if (number < minNum) {
            number = minNum;
          } else if (number > maxNum) {
            number = maxNum;
          }
          const midPoint = maxNum - minNum;
          const startBase = parseInt(start, 16);
          const endBase = parseInt(end, 16);
          const average = (endBase - startBase) / midPoint;
          const finalBase = Math.round(average * (number - minNum) + startBase);
          const balancedFinalBase = finalBase < 16 ? "0" + finalBase.toString(16) : finalBase.toString(16);
          return balancedFinalBase;
        };
        const getHexColor = (color) => {
          return color.substring(color.length - 6, color.length);
        };
      }
    };
    var Gradient2 = class {
      constructor(colorGradients = "", maxNum = 10, colors = ["", ""], intervals = []) {
        const setColorGradient = (gradientColors) => {
          if (gradientColors.length < 2) {
            throw new Error(`setColorGradient should have more than ${gradientColors.length} color`);
          } else {
            const increment = maxNum / (gradientColors.length - 1);
            const firstColorGradient = new GradientColor();
            const lower = 0;
            const upper = 0 + increment;
            firstColorGradient.setColorGradient(gradientColors[0], gradientColors[1]);
            firstColorGradient.setMidpoint(lower, upper);
            colorGradients = [firstColorGradient];
            intervals = [
              {
                lower,
                upper
              }
            ];
            for (let i9 = 1; i9 < gradientColors.length - 1; i9++) {
              const gradientColor = new GradientColor();
              const lower2 = 0 + increment * i9;
              const upper2 = 0 + increment * (i9 + 1);
              gradientColor.setColorGradient(gradientColors[i9], gradientColors[i9 + 1]);
              gradientColor.setMidpoint(lower2, upper2);
              colorGradients[i9] = gradientColor;
              intervals[i9] = {
                lower: lower2,
                upper: upper2
              };
            }
            colors = gradientColors;
          }
        };
        this.setColorGradient = (...gradientColors) => {
          setColorGradient(gradientColors);
          return this;
        };
        this.getColors = () => {
          const gradientColorsArray = [];
          for (let j = 0; j < intervals.length; j++) {
            const interval = intervals[j];
            const start = interval.lower === 0 ? 1 : Math.ceil(interval.lower);
            const end = interval.upper === maxNum ? interval.upper + 1 : Math.ceil(interval.upper);
            for (let i9 = start; i9 < end; i9++) {
              gradientColorsArray.push(colorGradients[j].getColor(i9));
            }
          }
          return gradientColorsArray;
        };
        this.getColor = (numberValue) => {
          if (isNaN(numberValue)) {
            throw new TypeError(`getColor should be a number`);
          } else if (numberValue <= 0) {
            throw new TypeError(`getColor should be greater than ${numberValue}`);
          } else {
            const toInsert = numberValue + 1;
            const segment = (maxNum - 0) / colorGradients.length;
            const index = Math.min(Math.floor((Math.max(numberValue, 0) - 0) / segment), colorGradients.length - 1);
            return colorGradients[index].getColor(toInsert);
          }
        };
        this.setMidpoint = (maxNumber) => {
          if (!isNaN(maxNumber) && maxNumber >= 0) {
            maxNum = maxNumber;
            setColorGradient(colors);
          } else if (maxNumber <= 0) {
            throw new RangeError(`midPoint should be greater than ${maxNumber}`);
          } else {
            throw new RangeError("midPoint should be a number");
          }
          return this;
        };
      }
    };
    module.exports = Gradient2;
  }
});

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NFF2HMIT.js
var basePath = "";
function setBasePath(path) {
  basePath = path;
}
function getBasePath() {
  return basePath.replace(/\/$/, "");
}
var scripts = [...document.getElementsByTagName("script")];
var configScript = scripts.find((script) => script.hasAttribute("data-shoelace"));
if (configScript) {
  setBasePath(configScript.getAttribute("data-shoelace"));
} else {
  const fallbackScript = scripts.find((s10) => /shoelace(\.min)?\.js($|\?)/.test(s10.src));
  let path = "";
  if (fallbackScript) {
    path = fallbackScript.getAttribute("src");
  }
  setBasePath(path.split("/").slice(0, -1).join("/"));
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ICGTMF5Z.js
var __defProp2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a6, b3) => {
  for (var prop in b3 || (b3 = {}))
    if (__hasOwnProp2.call(b3, prop))
      __defNormalProp(a6, prop, b3[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b3)) {
      if (__propIsEnum.call(b3, prop))
        __defNormalProp(a6, prop, b3[prop]);
    }
  return a6;
};
var __spreadProps = (a6, b3) => __defProps(a6, __getOwnPropDescs(b3));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc2(target, key) : target;
  for (var i9 = decorators.length - 1, decorator; i9 >= 0; i9--)
    if (decorator = decorators[i9])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp2(target, key, result);
  return result;
};

// extension/utilities/initialize.js
function initializeExtensionScript() {
  const extensionHeader = document.querySelector("page-header");
  extensionHeader.addEventListener("theme-change", handleUpdateTheme);
  chrome.storage.sync.get("theme", ({ theme }) => {
    setLiveTheme(theme);
  });
}
function handleUpdateTheme(event) {
  const { theme } = event.detail;
  setLiveTheme(theme);
  chrome.storage.sync.set({ theme });
}
function setLiveTheme(theme) {
  const root = document.documentElement;
  root.classList.toggle("sl-theme-dark", isDarkMode(theme));
}
function isDarkMode(savedTheme) {
  if (savedTheme === "dark")
    return true;
  const mediaQuery = "(prefers-color-scheme: dark)";
  if (savedTheme === "automatic" && window.matchMedia(mediaQuery))
    return true;
  return false;
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PEQICPKO.js
var t = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var e = Symbol();
var n = /* @__PURE__ */ new Map();
var s = class {
  constructor(t33, n52) {
    if (this._$cssResult$ = true, n52 !== e)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t33;
  }
  get styleSheet() {
    let e42 = n.get(this.cssText);
    return t && e42 === void 0 && (n.set(this.cssText, e42 = new CSSStyleSheet()), e42.replaceSync(this.cssText)), e42;
  }
  toString() {
    return this.cssText;
  }
};
var o = (t33) => new s(typeof t33 == "string" ? t33 : t33 + "", e);
var r = (t33, ...n52) => {
  const o52 = t33.length === 1 ? t33[0] : n52.reduce((e42, n62, s52) => e42 + ((t42) => {
    if (t42._$cssResult$ === true)
      return t42.cssText;
    if (typeof t42 == "number")
      return t42;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t42 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n62) + t33[s52 + 1], t33[0]);
  return new s(o52, e);
};
var i = (e42, n52) => {
  t ? e42.adoptedStyleSheets = n52.map((t33) => t33 instanceof CSSStyleSheet ? t33 : t33.styleSheet) : n52.forEach((t33) => {
    const n62 = document.createElement("style"), s52 = window.litNonce;
    s52 !== void 0 && n62.setAttribute("nonce", s52), n62.textContent = t33.cssText, e42.appendChild(n62);
  });
};
var S = t ? (t33) => t33 : (t33) => t33 instanceof CSSStyleSheet ? ((t42) => {
  let e42 = "";
  for (const n52 of t42.cssRules)
    e42 += n52.cssText;
  return o(e42);
})(t33) : t33;
var s2;
var e2 = window.trustedTypes;
var r2 = e2 ? e2.emptyScript : "";
var h = window.reactiveElementPolyfillSupport;
var o2 = { toAttribute(t33, i32) {
  switch (i32) {
    case Boolean:
      t33 = t33 ? r2 : null;
      break;
    case Object:
    case Array:
      t33 = t33 == null ? t33 : JSON.stringify(t33);
  }
  return t33;
}, fromAttribute(t33, i32) {
  let s52 = t33;
  switch (i32) {
    case Boolean:
      s52 = t33 !== null;
      break;
    case Number:
      s52 = t33 === null ? null : Number(t33);
      break;
    case Object:
    case Array:
      try {
        s52 = JSON.parse(t33);
      } catch (t42) {
        s52 = null;
      }
  }
  return s52;
} };
var n2 = (t33, i32) => i32 !== t33 && (i32 == i32 || t33 == t33);
var l = { attribute: true, type: String, converter: o2, reflect: false, hasChanged: n2 };
var a = class extends HTMLElement {
  constructor() {
    super(), this._$Et = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$Ei = null, this.o();
  }
  static addInitializer(t33) {
    var i32;
    (i32 = this.l) !== null && i32 !== void 0 || (this.l = []), this.l.push(t33);
  }
  static get observedAttributes() {
    this.finalize();
    const t33 = [];
    return this.elementProperties.forEach((i32, s52) => {
      const e42 = this._$Eh(s52, i32);
      e42 !== void 0 && (this._$Eu.set(e42, s52), t33.push(e42));
    }), t33;
  }
  static createProperty(t33, i32 = l) {
    if (i32.state && (i32.attribute = false), this.finalize(), this.elementProperties.set(t33, i32), !i32.noAccessor && !this.prototype.hasOwnProperty(t33)) {
      const s52 = typeof t33 == "symbol" ? Symbol() : "__" + t33, e42 = this.getPropertyDescriptor(t33, s52, i32);
      e42 !== void 0 && Object.defineProperty(this.prototype, t33, e42);
    }
  }
  static getPropertyDescriptor(t33, i32, s52) {
    return { get() {
      return this[i32];
    }, set(e42) {
      const r42 = this[t33];
      this[i32] = e42, this.requestUpdate(t33, r42, s52);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t33) {
    return this.elementProperties.get(t33) || l;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return false;
    this.finalized = true;
    const t33 = Object.getPrototypeOf(this);
    if (t33.finalize(), this.elementProperties = new Map(t33.elementProperties), this._$Eu = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const t42 = this.properties, i32 = [...Object.getOwnPropertyNames(t42), ...Object.getOwnPropertySymbols(t42)];
      for (const s52 of i32)
        this.createProperty(s52, t42[s52]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i32) {
    const s52 = [];
    if (Array.isArray(i32)) {
      const e42 = new Set(i32.flat(1 / 0).reverse());
      for (const i42 of e42)
        s52.unshift(S(i42));
    } else
      i32 !== void 0 && s52.push(S(i32));
    return s52;
  }
  static _$Eh(t33, i32) {
    const s52 = i32.attribute;
    return s52 === false ? void 0 : typeof s52 == "string" ? s52 : typeof t33 == "string" ? t33.toLowerCase() : void 0;
  }
  o() {
    var t33;
    this._$Ep = new Promise((t42) => this.enableUpdating = t42), this._$AL = /* @__PURE__ */ new Map(), this._$Em(), this.requestUpdate(), (t33 = this.constructor.l) === null || t33 === void 0 || t33.forEach((t42) => t42(this));
  }
  addController(t33) {
    var i32, s52;
    ((i32 = this._$Eg) !== null && i32 !== void 0 ? i32 : this._$Eg = []).push(t33), this.renderRoot !== void 0 && this.isConnected && ((s52 = t33.hostConnected) === null || s52 === void 0 || s52.call(t33));
  }
  removeController(t33) {
    var i32;
    (i32 = this._$Eg) === null || i32 === void 0 || i32.splice(this._$Eg.indexOf(t33) >>> 0, 1);
  }
  _$Em() {
    this.constructor.elementProperties.forEach((t33, i32) => {
      this.hasOwnProperty(i32) && (this._$Et.set(i32, this[i32]), delete this[i32]);
    });
  }
  createRenderRoot() {
    var t33;
    const s52 = (t33 = this.shadowRoot) !== null && t33 !== void 0 ? t33 : this.attachShadow(this.constructor.shadowRootOptions);
    return i(s52, this.constructor.elementStyles), s52;
  }
  connectedCallback() {
    var t33;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t33 = this._$Eg) === null || t33 === void 0 || t33.forEach((t42) => {
      var i32;
      return (i32 = t42.hostConnected) === null || i32 === void 0 ? void 0 : i32.call(t42);
    });
  }
  enableUpdating(t33) {
  }
  disconnectedCallback() {
    var t33;
    (t33 = this._$Eg) === null || t33 === void 0 || t33.forEach((t42) => {
      var i32;
      return (i32 = t42.hostDisconnected) === null || i32 === void 0 ? void 0 : i32.call(t42);
    });
  }
  attributeChangedCallback(t33, i32, s52) {
    this._$AK(t33, s52);
  }
  _$ES(t33, i32, s52 = l) {
    var e42, r42;
    const h32 = this.constructor._$Eh(t33, s52);
    if (h32 !== void 0 && s52.reflect === true) {
      const n52 = ((r42 = (e42 = s52.converter) === null || e42 === void 0 ? void 0 : e42.toAttribute) !== null && r42 !== void 0 ? r42 : o2.toAttribute)(i32, s52.type);
      this._$Ei = t33, n52 == null ? this.removeAttribute(h32) : this.setAttribute(h32, n52), this._$Ei = null;
    }
  }
  _$AK(t33, i32) {
    var s52, e42, r42;
    const h32 = this.constructor, n52 = h32._$Eu.get(t33);
    if (n52 !== void 0 && this._$Ei !== n52) {
      const t42 = h32.getPropertyOptions(n52), l42 = t42.converter, a32 = (r42 = (e42 = (s52 = l42) === null || s52 === void 0 ? void 0 : s52.fromAttribute) !== null && e42 !== void 0 ? e42 : typeof l42 == "function" ? l42 : null) !== null && r42 !== void 0 ? r42 : o2.fromAttribute;
      this._$Ei = n52, this[n52] = a32(i32, t42.type), this._$Ei = null;
    }
  }
  requestUpdate(t33, i32, s52) {
    let e42 = true;
    t33 !== void 0 && (((s52 = s52 || this.constructor.getPropertyOptions(t33)).hasChanged || n2)(this[t33], i32) ? (this._$AL.has(t33) || this._$AL.set(t33, i32), s52.reflect === true && this._$Ei !== t33 && (this._$E_ === void 0 && (this._$E_ = /* @__PURE__ */ new Map()), this._$E_.set(t33, s52))) : e42 = false), !this.isUpdatePending && e42 && (this._$Ep = this._$EC());
  }
  async _$EC() {
    this.isUpdatePending = true;
    try {
      await this._$Ep;
    } catch (t42) {
      Promise.reject(t42);
    }
    const t33 = this.scheduleUpdate();
    return t33 != null && await t33, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t33;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Et && (this._$Et.forEach((t42, i42) => this[i42] = t42), this._$Et = void 0);
    let i32 = false;
    const s52 = this._$AL;
    try {
      i32 = this.shouldUpdate(s52), i32 ? (this.willUpdate(s52), (t33 = this._$Eg) === null || t33 === void 0 || t33.forEach((t42) => {
        var i42;
        return (i42 = t42.hostUpdate) === null || i42 === void 0 ? void 0 : i42.call(t42);
      }), this.update(s52)) : this._$EU();
    } catch (t42) {
      throw i32 = false, this._$EU(), t42;
    }
    i32 && this._$AE(s52);
  }
  willUpdate(t33) {
  }
  _$AE(t33) {
    var i32;
    (i32 = this._$Eg) === null || i32 === void 0 || i32.forEach((t42) => {
      var i42;
      return (i42 = t42.hostUpdated) === null || i42 === void 0 ? void 0 : i42.call(t42);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t33)), this.updated(t33);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Ep;
  }
  shouldUpdate(t33) {
    return true;
  }
  update(t33) {
    this._$E_ !== void 0 && (this._$E_.forEach((t42, i32) => this._$ES(i32, this[i32], t42)), this._$E_ = void 0), this._$EU();
  }
  updated(t33) {
  }
  firstUpdated(t33) {
  }
};
a.finalized = true, a.elementProperties = /* @__PURE__ */ new Map(), a.elementStyles = [], a.shadowRootOptions = { mode: "open" }, h == null || h({ ReactiveElement: a }), ((s2 = globalThis.reactiveElementVersions) !== null && s2 !== void 0 ? s2 : globalThis.reactiveElementVersions = []).push("1.2.3");
var t2;
var i2 = globalThis.trustedTypes;
var s3 = i2 ? i2.createPolicy("lit-html", { createHTML: (t33) => t33 }) : void 0;
var e3 = `lit$${(Math.random() + "").slice(9)}$`;
var o3 = "?" + e3;
var n3 = `<${o3}>`;
var l2 = document;
var h2 = (t33 = "") => l2.createComment(t33);
var r3 = (t33) => t33 === null || typeof t33 != "object" && typeof t33 != "function";
var d = Array.isArray;
var u = (t33) => {
  var i32;
  return d(t33) || typeof ((i32 = t33) === null || i32 === void 0 ? void 0 : i32[Symbol.iterator]) == "function";
};
var c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var v = /-->/g;
var a2 = />/g;
var f = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g;
var _ = /'/g;
var m = /"/g;
var g = /^(?:script|style|textarea|title)$/i;
var p = (t33) => (i32, ...s52) => ({ _$litType$: t33, strings: i32, values: s52 });
var $ = p(1);
var y = p(2);
var b = Symbol.for("lit-noChange");
var w = Symbol.for("lit-nothing");
var T = /* @__PURE__ */ new WeakMap();
var x = (t33, i32, s52) => {
  var e42, o52;
  const n52 = (e42 = s52 == null ? void 0 : s52.renderBefore) !== null && e42 !== void 0 ? e42 : i32;
  let l42 = n52._$litPart$;
  if (l42 === void 0) {
    const t42 = (o52 = s52 == null ? void 0 : s52.renderBefore) !== null && o52 !== void 0 ? o52 : null;
    n52._$litPart$ = l42 = new N(i32.insertBefore(h2(), t42), t42, void 0, s52 != null ? s52 : {});
  }
  return l42._$AI(t33), l42;
};
var A = l2.createTreeWalker(l2, 129, null, false);
var C = (t33, i32) => {
  const o52 = t33.length - 1, l42 = [];
  let h32, r42 = i32 === 2 ? "<svg>" : "", d22 = c;
  for (let i42 = 0; i42 < o52; i42++) {
    const s52 = t33[i42];
    let o62, u3, p22 = -1, $22 = 0;
    for (; $22 < s52.length && (d22.lastIndex = $22, u3 = d22.exec(s52), u3 !== null); )
      $22 = d22.lastIndex, d22 === c ? u3[1] === "!--" ? d22 = v : u3[1] !== void 0 ? d22 = a2 : u3[2] !== void 0 ? (g.test(u3[2]) && (h32 = RegExp("</" + u3[2], "g")), d22 = f) : u3[3] !== void 0 && (d22 = f) : d22 === f ? u3[0] === ">" ? (d22 = h32 != null ? h32 : c, p22 = -1) : u3[1] === void 0 ? p22 = -2 : (p22 = d22.lastIndex - u3[2].length, o62 = u3[1], d22 = u3[3] === void 0 ? f : u3[3] === '"' ? m : _) : d22 === m || d22 === _ ? d22 = f : d22 === v || d22 === a2 ? d22 = c : (d22 = f, h32 = void 0);
    const y22 = d22 === f && t33[i42 + 1].startsWith("/>") ? " " : "";
    r42 += d22 === c ? s52 + n3 : p22 >= 0 ? (l42.push(o62), s52.slice(0, p22) + "$lit$" + s52.slice(p22) + e3 + y22) : s52 + e3 + (p22 === -2 ? (l42.push(void 0), i42) : y22);
  }
  const u22 = r42 + (t33[o52] || "<?>") + (i32 === 2 ? "</svg>" : "");
  if (!Array.isArray(t33) || !t33.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [s3 !== void 0 ? s3.createHTML(u22) : u22, l42];
};
var E = class {
  constructor({ strings: t33, _$litType$: s52 }, n52) {
    let l42;
    this.parts = [];
    let r42 = 0, d22 = 0;
    const u22 = t33.length - 1, c22 = this.parts, [v22, a32] = C(t33, s52);
    if (this.el = E.createElement(v22, n52), A.currentNode = this.el.content, s52 === 2) {
      const t42 = this.el.content, i32 = t42.firstChild;
      i32.remove(), t42.append(...i32.childNodes);
    }
    for (; (l42 = A.nextNode()) !== null && c22.length < u22; ) {
      if (l42.nodeType === 1) {
        if (l42.hasAttributes()) {
          const t42 = [];
          for (const i32 of l42.getAttributeNames())
            if (i32.endsWith("$lit$") || i32.startsWith(e3)) {
              const s62 = a32[d22++];
              if (t42.push(i32), s62 !== void 0) {
                const t52 = l42.getAttribute(s62.toLowerCase() + "$lit$").split(e3), i42 = /([.?@])?(.*)/.exec(s62);
                c22.push({ type: 1, index: r42, name: i42[2], strings: t52, ctor: i42[1] === "." ? M : i42[1] === "?" ? H : i42[1] === "@" ? I : S2 });
              } else
                c22.push({ type: 6, index: r42 });
            }
          for (const i32 of t42)
            l42.removeAttribute(i32);
        }
        if (g.test(l42.tagName)) {
          const t42 = l42.textContent.split(e3), s62 = t42.length - 1;
          if (s62 > 0) {
            l42.textContent = i2 ? i2.emptyScript : "";
            for (let i32 = 0; i32 < s62; i32++)
              l42.append(t42[i32], h2()), A.nextNode(), c22.push({ type: 2, index: ++r42 });
            l42.append(t42[s62], h2());
          }
        }
      } else if (l42.nodeType === 8)
        if (l42.data === o3)
          c22.push({ type: 2, index: r42 });
        else {
          let t42 = -1;
          for (; (t42 = l42.data.indexOf(e3, t42 + 1)) !== -1; )
            c22.push({ type: 7, index: r42 }), t42 += e3.length - 1;
        }
      r42++;
    }
  }
  static createElement(t33, i32) {
    const s52 = l2.createElement("template");
    return s52.innerHTML = t33, s52;
  }
};
function P(t33, i32, s52 = t33, e42) {
  var o52, n52, l42, h32;
  if (i32 === b)
    return i32;
  let d22 = e42 !== void 0 ? (o52 = s52._$Cl) === null || o52 === void 0 ? void 0 : o52[e42] : s52._$Cu;
  const u22 = r3(i32) ? void 0 : i32._$litDirective$;
  return (d22 == null ? void 0 : d22.constructor) !== u22 && ((n52 = d22 == null ? void 0 : d22._$AO) === null || n52 === void 0 || n52.call(d22, false), u22 === void 0 ? d22 = void 0 : (d22 = new u22(t33), d22._$AT(t33, s52, e42)), e42 !== void 0 ? ((l42 = (h32 = s52)._$Cl) !== null && l42 !== void 0 ? l42 : h32._$Cl = [])[e42] = d22 : s52._$Cu = d22), d22 !== void 0 && (i32 = P(t33, d22._$AS(t33, i32.values), d22, e42)), i32;
}
var V = class {
  constructor(t33, i32) {
    this.v = [], this._$AN = void 0, this._$AD = t33, this._$AM = i32;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  p(t33) {
    var i32;
    const { el: { content: s52 }, parts: e42 } = this._$AD, o52 = ((i32 = t33 == null ? void 0 : t33.creationScope) !== null && i32 !== void 0 ? i32 : l2).importNode(s52, true);
    A.currentNode = o52;
    let n52 = A.nextNode(), h32 = 0, r42 = 0, d22 = e42[0];
    for (; d22 !== void 0; ) {
      if (h32 === d22.index) {
        let i42;
        d22.type === 2 ? i42 = new N(n52, n52.nextSibling, this, t33) : d22.type === 1 ? i42 = new d22.ctor(n52, d22.name, d22.strings, this, t33) : d22.type === 6 && (i42 = new L(n52, this, t33)), this.v.push(i42), d22 = e42[++r42];
      }
      h32 !== (d22 == null ? void 0 : d22.index) && (n52 = A.nextNode(), h32++);
    }
    return o52;
  }
  m(t33) {
    let i32 = 0;
    for (const s52 of this.v)
      s52 !== void 0 && (s52.strings !== void 0 ? (s52._$AI(t33, s52, i32), i32 += s52.strings.length - 2) : s52._$AI(t33[i32])), i32++;
  }
};
var N = class {
  constructor(t33, i32, s52, e42) {
    var o52;
    this.type = 2, this._$AH = w, this._$AN = void 0, this._$AA = t33, this._$AB = i32, this._$AM = s52, this.options = e42, this._$Cg = (o52 = e42 == null ? void 0 : e42.isConnected) === null || o52 === void 0 || o52;
  }
  get _$AU() {
    var t33, i32;
    return (i32 = (t33 = this._$AM) === null || t33 === void 0 ? void 0 : t33._$AU) !== null && i32 !== void 0 ? i32 : this._$Cg;
  }
  get parentNode() {
    let t33 = this._$AA.parentNode;
    const i32 = this._$AM;
    return i32 !== void 0 && t33.nodeType === 11 && (t33 = i32.parentNode), t33;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t33, i32 = this) {
    t33 = P(this, t33, i32), r3(t33) ? t33 === w || t33 == null || t33 === "" ? (this._$AH !== w && this._$AR(), this._$AH = w) : t33 !== this._$AH && t33 !== b && this.$(t33) : t33._$litType$ !== void 0 ? this.T(t33) : t33.nodeType !== void 0 ? this.S(t33) : u(t33) ? this.A(t33) : this.$(t33);
  }
  M(t33, i32 = this._$AB) {
    return this._$AA.parentNode.insertBefore(t33, i32);
  }
  S(t33) {
    this._$AH !== t33 && (this._$AR(), this._$AH = this.M(t33));
  }
  $(t33) {
    this._$AH !== w && r3(this._$AH) ? this._$AA.nextSibling.data = t33 : this.S(l2.createTextNode(t33)), this._$AH = t33;
  }
  T(t33) {
    var i32;
    const { values: s52, _$litType$: e42 } = t33, o52 = typeof e42 == "number" ? this._$AC(t33) : (e42.el === void 0 && (e42.el = E.createElement(e42.h, this.options)), e42);
    if (((i32 = this._$AH) === null || i32 === void 0 ? void 0 : i32._$AD) === o52)
      this._$AH.m(s52);
    else {
      const t42 = new V(o52, this), i42 = t42.p(this.options);
      t42.m(s52), this.S(i42), this._$AH = t42;
    }
  }
  _$AC(t33) {
    let i32 = T.get(t33.strings);
    return i32 === void 0 && T.set(t33.strings, i32 = new E(t33)), i32;
  }
  A(t33) {
    d(this._$AH) || (this._$AH = [], this._$AR());
    const i32 = this._$AH;
    let s52, e42 = 0;
    for (const o52 of t33)
      e42 === i32.length ? i32.push(s52 = new N(this.M(h2()), this.M(h2()), this, this.options)) : s52 = i32[e42], s52._$AI(o52), e42++;
    e42 < i32.length && (this._$AR(s52 && s52._$AB.nextSibling, e42), i32.length = e42);
  }
  _$AR(t33 = this._$AA.nextSibling, i32) {
    var s52;
    for ((s52 = this._$AP) === null || s52 === void 0 || s52.call(this, false, true, i32); t33 && t33 !== this._$AB; ) {
      const i42 = t33.nextSibling;
      t33.remove(), t33 = i42;
    }
  }
  setConnected(t33) {
    var i32;
    this._$AM === void 0 && (this._$Cg = t33, (i32 = this._$AP) === null || i32 === void 0 || i32.call(this, t33));
  }
};
var S2 = class {
  constructor(t33, i32, s52, e42, o52) {
    this.type = 1, this._$AH = w, this._$AN = void 0, this.element = t33, this.name = i32, this._$AM = e42, this.options = o52, s52.length > 2 || s52[0] !== "" || s52[1] !== "" ? (this._$AH = Array(s52.length - 1).fill(new String()), this.strings = s52) : this._$AH = w;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t33, i32 = this, s52, e42) {
    const o52 = this.strings;
    let n52 = false;
    if (o52 === void 0)
      t33 = P(this, t33, i32, 0), n52 = !r3(t33) || t33 !== this._$AH && t33 !== b, n52 && (this._$AH = t33);
    else {
      const e52 = t33;
      let l42, h32;
      for (t33 = o52[0], l42 = 0; l42 < o52.length - 1; l42++)
        h32 = P(this, e52[s52 + l42], i32, l42), h32 === b && (h32 = this._$AH[l42]), n52 || (n52 = !r3(h32) || h32 !== this._$AH[l42]), h32 === w ? t33 = w : t33 !== w && (t33 += (h32 != null ? h32 : "") + o52[l42 + 1]), this._$AH[l42] = h32;
    }
    n52 && !e42 && this.k(t33);
  }
  k(t33) {
    t33 === w ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t33 != null ? t33 : "");
  }
};
var M = class extends S2 {
  constructor() {
    super(...arguments), this.type = 3;
  }
  k(t33) {
    this.element[this.name] = t33 === w ? void 0 : t33;
  }
};
var k = i2 ? i2.emptyScript : "";
var H = class extends S2 {
  constructor() {
    super(...arguments), this.type = 4;
  }
  k(t33) {
    t33 && t33 !== w ? this.element.setAttribute(this.name, k) : this.element.removeAttribute(this.name);
  }
};
var I = class extends S2 {
  constructor(t33, i32, s52, e42, o52) {
    super(t33, i32, s52, e42, o52), this.type = 5;
  }
  _$AI(t33, i32 = this) {
    var s52;
    if ((t33 = (s52 = P(this, t33, i32, 0)) !== null && s52 !== void 0 ? s52 : w) === b)
      return;
    const e42 = this._$AH, o52 = t33 === w && e42 !== w || t33.capture !== e42.capture || t33.once !== e42.once || t33.passive !== e42.passive, n52 = t33 !== w && (e42 === w || o52);
    o52 && this.element.removeEventListener(this.name, this, e42), n52 && this.element.addEventListener(this.name, this, t33), this._$AH = t33;
  }
  handleEvent(t33) {
    var i32, s52;
    typeof this._$AH == "function" ? this._$AH.call((s52 = (i32 = this.options) === null || i32 === void 0 ? void 0 : i32.host) !== null && s52 !== void 0 ? s52 : this.element, t33) : this._$AH.handleEvent(t33);
  }
};
var L = class {
  constructor(t33, i32, s52) {
    this.element = t33, this.type = 6, this._$AN = void 0, this._$AM = i32, this.options = s52;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t33) {
    P(this, t33);
  }
};
var z = window.litHtmlPolyfillSupport;
z == null || z(E, N), ((t2 = globalThis.litHtmlVersions) !== null && t2 !== void 0 ? t2 : globalThis.litHtmlVersions = []).push("2.1.3");
var l3;
var o4;
var s4 = class extends a {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Dt = void 0;
  }
  createRenderRoot() {
    var t33, e42;
    const i32 = super.createRenderRoot();
    return (t33 = (e42 = this.renderOptions).renderBefore) !== null && t33 !== void 0 || (e42.renderBefore = i32.firstChild), i32;
  }
  update(t33) {
    const i32 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t33), this._$Dt = x(i32, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t33;
    super.connectedCallback(), (t33 = this._$Dt) === null || t33 === void 0 || t33.setConnected(true);
  }
  disconnectedCallback() {
    var t33;
    super.disconnectedCallback(), (t33 = this._$Dt) === null || t33 === void 0 || t33.setConnected(false);
  }
  render() {
    return b;
  }
};
s4.finalized = true, s4._$litElement$ = true, (l3 = globalThis.litElementHydrateSupport) === null || l3 === void 0 || l3.call(globalThis, { LitElement: s4 });
var n4 = globalThis.litElementPolyfillSupport;
n4 == null || n4({ LitElement: s4 });
((o4 = globalThis.litElementVersions) !== null && o4 !== void 0 ? o4 : globalThis.litElementVersions = []).push("3.1.2");

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KNVYX3FQ.js
var component_styles_default = r`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.UZCU23EP.js
var card_styles_default = r`
  ${component_styles_default}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image ::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card__body {
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3IYPB6RR.js
var HasSlotController = class {
  constructor(host, ...slotNames) {
    this.slotNames = [];
    (this.host = host).addController(this);
    this.slotNames = slotNames;
    this.handleSlotChange = this.handleSlotChange.bind(this);
  }
  hasDefaultSlot() {
    return [...this.host.childNodes].some((node) => {
      if (node.nodeType === node.TEXT_NODE && node.textContent.trim() !== "") {
        return true;
      }
      if (node.nodeType === node.ELEMENT_NODE) {
        const el = node;
        const tagName = el.tagName.toLowerCase();
        if (tagName === "sl-visually-hidden") {
          return false;
        }
        if (!el.hasAttribute("slot")) {
          return true;
        }
      }
      return false;
    });
  }
  hasNamedSlot(name) {
    return this.host.querySelector(`:scope > [slot="${name}"]`) !== null;
  }
  test(slotName) {
    return slotName === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(slotName);
  }
  hostConnected() {
    this.host.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
  }
  hostDisconnected() {
    this.host.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
  }
  handleSlotChange(event) {
    const slot = event.target;
    if (this.slotNames.includes("[default]") && !slot.name || slot.name && this.slotNames.includes(slot.name)) {
      this.host.requestUpdate();
    }
  }
};
function getTextContent(slot) {
  if (!slot) {
    return "";
  }
  const nodes = slot.assignedNodes({ flatten: true });
  let text = "";
  [...nodes].forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      text += node.textContent;
    }
  });
  return text;
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2JQPDYNA.js
var t3 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
var e4 = (t22) => (...e22) => ({ _$litDirective$: t22, values: e22 });
var i3 = class {
  constructor(t22) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t22, e22, i23) {
    this._$Ct = t22, this._$AM = e22, this._$Ci = i23;
  }
  _$AS(t22, e22) {
    return this.update(t22, e22);
  }
  update(t22, e22) {
    return this.render(...e22);
  }
};

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7BXY5XRG.js
var o5 = e4(class extends i3 {
  constructor(t22) {
    var i23;
    if (super(t22), t22.type !== t3.ATTRIBUTE || t22.name !== "class" || ((i23 = t22.strings) === null || i23 === void 0 ? void 0 : i23.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t22) {
    return " " + Object.keys(t22).filter((i23) => t22[i23]).join(" ") + " ";
  }
  update(i23, [s10]) {
    var r8, o23;
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), i23.strings !== void 0 && (this.et = new Set(i23.strings.join(" ").split(/\s/).filter((t22) => t22 !== "")));
      for (const t22 in s10)
        s10[t22] && !((r8 = this.et) === null || r8 === void 0 ? void 0 : r8.has(t22)) && this.st.add(t22);
      return this.render(s10);
    }
    const e22 = i23.element.classList;
    this.st.forEach((t22) => {
      t22 in s10 || (e22.remove(t22), this.st.delete(t22));
    });
    for (const t22 in s10) {
      const i32 = !!s10[t22];
      i32 === this.st.has(t22) || ((o23 = this.et) === null || o23 === void 0 ? void 0 : o23.has(t22)) || (i32 ? (e22.add(t22), this.st.add(t22)) : (e22.remove(t22), this.st.delete(t22)));
    }
    return b;
  }
});

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.72DLNKYZ.js
var n5 = (n32) => (e42) => typeof e42 == "function" ? ((n42, e52) => (window.customElements.define(n42, e52), e52))(n32, e42) : ((n42, e52) => {
  const { kind: t22, elements: i32 } = e52;
  return { kind: t22, elements: i32, finisher(e62) {
    window.customElements.define(n42, e62);
  } };
})(n32, e42);
var i4 = (i32, e42) => e42.kind === "method" && e42.descriptor && !("value" in e42.descriptor) ? __spreadProps(__spreadValues({}, e42), { finisher(n32) {
  n32.createProperty(e42.key, i32);
} }) : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e42.key, initializer() {
  typeof e42.initializer == "function" && (this[e42.key] = e42.initializer.call(this));
}, finisher(n32) {
  n32.createProperty(e42.key, i32);
} };
function e5(e42) {
  return (n32, t22) => t22 !== void 0 ? ((i32, e52, n42) => {
    e52.constructor.createProperty(n42, i32);
  })(e42, n32, t22) : i4(e42, n32);
}
function t4(t22) {
  return e5(__spreadProps(__spreadValues({}, t22), { state: true }));
}
var o6 = ({ finisher: e42, descriptor: t22 }) => (o23, n32) => {
  var r8;
  if (n32 === void 0) {
    const n42 = (r8 = o23.originalKey) !== null && r8 !== void 0 ? r8 : o23.key, i32 = t22 != null ? { kind: "method", placement: "prototype", key: n42, descriptor: t22(o23.key) } : __spreadProps(__spreadValues({}, o23), { key: n42 });
    return e42 != null && (i32.finisher = function(t33) {
      e42(t33, n42);
    }), i32;
  }
  {
    const r22 = o23.constructor;
    t22 !== void 0 && Object.defineProperty(o23, n32, t22(n32)), e42 == null || e42(r22, n32);
  }
};
function i22(i32, n32) {
  return o6({ descriptor: (o23) => {
    const t22 = { get() {
      var o32, n42;
      return (n42 = (o32 = this.renderRoot) === null || o32 === void 0 ? void 0 : o32.querySelector(i32)) !== null && n42 !== void 0 ? n42 : null;
    }, enumerable: true, configurable: true };
    if (n32) {
      const n42 = typeof o23 == "symbol" ? Symbol() : "__" + o23;
      t22.get = function() {
        var o32, t33;
        return this[n42] === void 0 && (this[n42] = (t33 = (o32 = this.renderRoot) === null || o32 === void 0 ? void 0 : o32.querySelector(i32)) !== null && t33 !== void 0 ? t33 : null), this[n42];
      };
    }
    return t22;
  } });
}
var n22;
var e32 = ((n22 = window.HTMLSlotElement) === null || n22 === void 0 ? void 0 : n22.prototype.assignedElements) != null ? (o23, n32) => o23.assignedElements(n32) : (o23, n32) => o23.assignedNodes(n32).filter((o32) => o32.nodeType === Node.ELEMENT_NODE);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.HPWFXYUR.js
var SlCard = class extends s4 {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "footer", "header", "image");
  }
  render() {
    return $`
      <div
        part="base"
        class=${o5({
      card: true,
      "card--has-footer": this.hasSlotController.test("footer"),
      "card--has-image": this.hasSlotController.test("image"),
      "card--has-header": this.hasSlotController.test("header")
    })}
      >
        <div part="image" class="card__image">
          <slot name="image"></slot>
        </div>

        <div part="header" class="card__header">
          <slot name="header"></slot>
        </div>

        <div part="body" class="card__body">
          <slot></slot>
        </div>

        <div part="footer" class="card__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
};
SlCard.styles = card_styles_default;
SlCard = __decorateClass([
  n5("sl-card")
], SlCard);

// node_modules/@lit/reactive-element/css-tag.js
var t5 = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var e6 = Symbol();
var n6 = /* @__PURE__ */ new Map();
var s5 = class {
  constructor(t8, n10) {
    if (this._$cssResult$ = true, n10 !== e6)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t8;
  }
  get styleSheet() {
    let e10 = n6.get(this.cssText);
    return t5 && e10 === void 0 && (n6.set(this.cssText, e10 = new CSSStyleSheet()), e10.replaceSync(this.cssText)), e10;
  }
  toString() {
    return this.cssText;
  }
};
var o7 = (t8) => new s5(typeof t8 == "string" ? t8 : t8 + "", e6);
var r4 = (t8, ...n10) => {
  const o13 = t8.length === 1 ? t8[0] : n10.reduce((e10, n11, s10) => e10 + ((t9) => {
    if (t9._$cssResult$ === true)
      return t9.cssText;
    if (typeof t9 == "number")
      return t9;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t9 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(n11) + t8[s10 + 1], t8[0]);
  return new s5(o13, e6);
};
var i5 = (e10, n10) => {
  t5 ? e10.adoptedStyleSheets = n10.map((t8) => t8 instanceof CSSStyleSheet ? t8 : t8.styleSheet) : n10.forEach((t8) => {
    const n11 = document.createElement("style"), s10 = window.litNonce;
    s10 !== void 0 && n11.setAttribute("nonce", s10), n11.textContent = t8.cssText, e10.appendChild(n11);
  });
};
var S3 = t5 ? (t8) => t8 : (t8) => t8 instanceof CSSStyleSheet ? ((t9) => {
  let e10 = "";
  for (const n10 of t9.cssRules)
    e10 += n10.cssText;
  return o7(e10);
})(t8) : t8;

// node_modules/@lit/reactive-element/reactive-element.js
var s6;
var e7 = window.trustedTypes;
var r5 = e7 ? e7.emptyScript : "";
var h3 = window.reactiveElementPolyfillSupport;
var o8 = { toAttribute(t8, i9) {
  switch (i9) {
    case Boolean:
      t8 = t8 ? r5 : null;
      break;
    case Object:
    case Array:
      t8 = t8 == null ? t8 : JSON.stringify(t8);
  }
  return t8;
}, fromAttribute(t8, i9) {
  let s10 = t8;
  switch (i9) {
    case Boolean:
      s10 = t8 !== null;
      break;
    case Number:
      s10 = t8 === null ? null : Number(t8);
      break;
    case Object:
    case Array:
      try {
        s10 = JSON.parse(t8);
      } catch (t9) {
        s10 = null;
      }
  }
  return s10;
} };
var n7 = (t8, i9) => i9 !== t8 && (i9 == i9 || t8 == t8);
var l4 = { attribute: true, type: String, converter: o8, reflect: false, hasChanged: n7 };
var a3 = class extends HTMLElement {
  constructor() {
    super(), this._$Et = /* @__PURE__ */ new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$Ei = null, this.o();
  }
  static addInitializer(t8) {
    var i9;
    (i9 = this.l) !== null && i9 !== void 0 || (this.l = []), this.l.push(t8);
  }
  static get observedAttributes() {
    this.finalize();
    const t8 = [];
    return this.elementProperties.forEach((i9, s10) => {
      const e10 = this._$Eh(s10, i9);
      e10 !== void 0 && (this._$Eu.set(e10, s10), t8.push(e10));
    }), t8;
  }
  static createProperty(t8, i9 = l4) {
    if (i9.state && (i9.attribute = false), this.finalize(), this.elementProperties.set(t8, i9), !i9.noAccessor && !this.prototype.hasOwnProperty(t8)) {
      const s10 = typeof t8 == "symbol" ? Symbol() : "__" + t8, e10 = this.getPropertyDescriptor(t8, s10, i9);
      e10 !== void 0 && Object.defineProperty(this.prototype, t8, e10);
    }
  }
  static getPropertyDescriptor(t8, i9, s10) {
    return { get() {
      return this[i9];
    }, set(e10) {
      const r8 = this[t8];
      this[i9] = e10, this.requestUpdate(t8, r8, s10);
    }, configurable: true, enumerable: true };
  }
  static getPropertyOptions(t8) {
    return this.elementProperties.get(t8) || l4;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return false;
    this.finalized = true;
    const t8 = Object.getPrototypeOf(this);
    if (t8.finalize(), this.elementProperties = new Map(t8.elementProperties), this._$Eu = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const t9 = this.properties, i9 = [...Object.getOwnPropertyNames(t9), ...Object.getOwnPropertySymbols(t9)];
      for (const s10 of i9)
        this.createProperty(s10, t9[s10]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), true;
  }
  static finalizeStyles(i9) {
    const s10 = [];
    if (Array.isArray(i9)) {
      const e10 = new Set(i9.flat(1 / 0).reverse());
      for (const i10 of e10)
        s10.unshift(S3(i10));
    } else
      i9 !== void 0 && s10.push(S3(i9));
    return s10;
  }
  static _$Eh(t8, i9) {
    const s10 = i9.attribute;
    return s10 === false ? void 0 : typeof s10 == "string" ? s10 : typeof t8 == "string" ? t8.toLowerCase() : void 0;
  }
  o() {
    var t8;
    this._$Ep = new Promise((t9) => this.enableUpdating = t9), this._$AL = /* @__PURE__ */ new Map(), this._$Em(), this.requestUpdate(), (t8 = this.constructor.l) === null || t8 === void 0 || t8.forEach((t9) => t9(this));
  }
  addController(t8) {
    var i9, s10;
    ((i9 = this._$Eg) !== null && i9 !== void 0 ? i9 : this._$Eg = []).push(t8), this.renderRoot !== void 0 && this.isConnected && ((s10 = t8.hostConnected) === null || s10 === void 0 || s10.call(t8));
  }
  removeController(t8) {
    var i9;
    (i9 = this._$Eg) === null || i9 === void 0 || i9.splice(this._$Eg.indexOf(t8) >>> 0, 1);
  }
  _$Em() {
    this.constructor.elementProperties.forEach((t8, i9) => {
      this.hasOwnProperty(i9) && (this._$Et.set(i9, this[i9]), delete this[i9]);
    });
  }
  createRenderRoot() {
    var t8;
    const s10 = (t8 = this.shadowRoot) !== null && t8 !== void 0 ? t8 : this.attachShadow(this.constructor.shadowRootOptions);
    return i5(s10, this.constructor.elementStyles), s10;
  }
  connectedCallback() {
    var t8;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t8 = this._$Eg) === null || t8 === void 0 || t8.forEach((t9) => {
      var i9;
      return (i9 = t9.hostConnected) === null || i9 === void 0 ? void 0 : i9.call(t9);
    });
  }
  enableUpdating(t8) {
  }
  disconnectedCallback() {
    var t8;
    (t8 = this._$Eg) === null || t8 === void 0 || t8.forEach((t9) => {
      var i9;
      return (i9 = t9.hostDisconnected) === null || i9 === void 0 ? void 0 : i9.call(t9);
    });
  }
  attributeChangedCallback(t8, i9, s10) {
    this._$AK(t8, s10);
  }
  _$ES(t8, i9, s10 = l4) {
    var e10, r8;
    const h5 = this.constructor._$Eh(t8, s10);
    if (h5 !== void 0 && s10.reflect === true) {
      const n10 = ((r8 = (e10 = s10.converter) === null || e10 === void 0 ? void 0 : e10.toAttribute) !== null && r8 !== void 0 ? r8 : o8.toAttribute)(i9, s10.type);
      this._$Ei = t8, n10 == null ? this.removeAttribute(h5) : this.setAttribute(h5, n10), this._$Ei = null;
    }
  }
  _$AK(t8, i9) {
    var s10, e10, r8;
    const h5 = this.constructor, n10 = h5._$Eu.get(t8);
    if (n10 !== void 0 && this._$Ei !== n10) {
      const t9 = h5.getPropertyOptions(n10), l9 = t9.converter, a6 = (r8 = (e10 = (s10 = l9) === null || s10 === void 0 ? void 0 : s10.fromAttribute) !== null && e10 !== void 0 ? e10 : typeof l9 == "function" ? l9 : null) !== null && r8 !== void 0 ? r8 : o8.fromAttribute;
      this._$Ei = n10, this[n10] = a6(i9, t9.type), this._$Ei = null;
    }
  }
  requestUpdate(t8, i9, s10) {
    let e10 = true;
    t8 !== void 0 && (((s10 = s10 || this.constructor.getPropertyOptions(t8)).hasChanged || n7)(this[t8], i9) ? (this._$AL.has(t8) || this._$AL.set(t8, i9), s10.reflect === true && this._$Ei !== t8 && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t8, s10))) : e10 = false), !this.isUpdatePending && e10 && (this._$Ep = this._$E_());
  }
  async _$E_() {
    this.isUpdatePending = true;
    try {
      await this._$Ep;
    } catch (t9) {
      Promise.reject(t9);
    }
    const t8 = this.scheduleUpdate();
    return t8 != null && await t8, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t8;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Et && (this._$Et.forEach((t9, i10) => this[i10] = t9), this._$Et = void 0);
    let i9 = false;
    const s10 = this._$AL;
    try {
      i9 = this.shouldUpdate(s10), i9 ? (this.willUpdate(s10), (t8 = this._$Eg) === null || t8 === void 0 || t8.forEach((t9) => {
        var i10;
        return (i10 = t9.hostUpdate) === null || i10 === void 0 ? void 0 : i10.call(t9);
      }), this.update(s10)) : this._$EU();
    } catch (t9) {
      throw i9 = false, this._$EU(), t9;
    }
    i9 && this._$AE(s10);
  }
  willUpdate(t8) {
  }
  _$AE(t8) {
    var i9;
    (i9 = this._$Eg) === null || i9 === void 0 || i9.forEach((t9) => {
      var i10;
      return (i10 = t9.hostUpdated) === null || i10 === void 0 ? void 0 : i10.call(t9);
    }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t8)), this.updated(t8);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Ep;
  }
  shouldUpdate(t8) {
    return true;
  }
  update(t8) {
    this._$EC !== void 0 && (this._$EC.forEach((t9, i9) => this._$ES(i9, this[i9], t9)), this._$EC = void 0), this._$EU();
  }
  updated(t8) {
  }
  firstUpdated(t8) {
  }
};
a3.finalized = true, a3.elementProperties = /* @__PURE__ */ new Map(), a3.elementStyles = [], a3.shadowRootOptions = { mode: "open" }, h3 == null || h3({ ReactiveElement: a3 }), ((s6 = globalThis.reactiveElementVersions) !== null && s6 !== void 0 ? s6 : globalThis.reactiveElementVersions = []).push("1.3.2");

// node_modules/lit-html/lit-html.js
var t6;
var i6 = globalThis.trustedTypes;
var s7 = i6 ? i6.createPolicy("lit-html", { createHTML: (t8) => t8 }) : void 0;
var e8 = `lit$${(Math.random() + "").slice(9)}$`;
var o9 = "?" + e8;
var n8 = `<${o9}>`;
var l5 = document;
var h4 = (t8 = "") => l5.createComment(t8);
var r6 = (t8) => t8 === null || typeof t8 != "object" && typeof t8 != "function";
var d2 = Array.isArray;
var u2 = (t8) => {
  var i9;
  return d2(t8) || typeof ((i9 = t8) === null || i9 === void 0 ? void 0 : i9[Symbol.iterator]) == "function";
};
var c2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var v2 = /-->/g;
var a4 = />/g;
var f2 = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g;
var _2 = /'/g;
var m2 = /"/g;
var g2 = /^(?:script|style|textarea|title)$/i;
var p2 = (t8) => (i9, ...s10) => ({ _$litType$: t8, strings: i9, values: s10 });
var $2 = p2(1);
var y2 = p2(2);
var b2 = Symbol.for("lit-noChange");
var w2 = Symbol.for("lit-nothing");
var T2 = /* @__PURE__ */ new WeakMap();
var x2 = (t8, i9, s10) => {
  var e10, o13;
  const n10 = (e10 = s10 == null ? void 0 : s10.renderBefore) !== null && e10 !== void 0 ? e10 : i9;
  let l9 = n10._$litPart$;
  if (l9 === void 0) {
    const t9 = (o13 = s10 == null ? void 0 : s10.renderBefore) !== null && o13 !== void 0 ? o13 : null;
    n10._$litPart$ = l9 = new N2(i9.insertBefore(h4(), t9), t9, void 0, s10 != null ? s10 : {});
  }
  return l9._$AI(t8), l9;
};
var A2 = l5.createTreeWalker(l5, 129, null, false);
var C2 = (t8, i9) => {
  const o13 = t8.length - 1, l9 = [];
  let h5, r8 = i9 === 2 ? "<svg>" : "", d3 = c2;
  for (let i10 = 0; i10 < o13; i10++) {
    const s10 = t8[i10];
    let o14, u4, p3 = -1, $3 = 0;
    for (; $3 < s10.length && (d3.lastIndex = $3, u4 = d3.exec(s10), u4 !== null); )
      $3 = d3.lastIndex, d3 === c2 ? u4[1] === "!--" ? d3 = v2 : u4[1] !== void 0 ? d3 = a4 : u4[2] !== void 0 ? (g2.test(u4[2]) && (h5 = RegExp("</" + u4[2], "g")), d3 = f2) : u4[3] !== void 0 && (d3 = f2) : d3 === f2 ? u4[0] === ">" ? (d3 = h5 != null ? h5 : c2, p3 = -1) : u4[1] === void 0 ? p3 = -2 : (p3 = d3.lastIndex - u4[2].length, o14 = u4[1], d3 = u4[3] === void 0 ? f2 : u4[3] === '"' ? m2 : _2) : d3 === m2 || d3 === _2 ? d3 = f2 : d3 === v2 || d3 === a4 ? d3 = c2 : (d3 = f2, h5 = void 0);
    const y3 = d3 === f2 && t8[i10 + 1].startsWith("/>") ? " " : "";
    r8 += d3 === c2 ? s10 + n8 : p3 >= 0 ? (l9.push(o14), s10.slice(0, p3) + "$lit$" + s10.slice(p3) + e8 + y3) : s10 + e8 + (p3 === -2 ? (l9.push(void 0), i10) : y3);
  }
  const u3 = r8 + (t8[o13] || "<?>") + (i9 === 2 ? "</svg>" : "");
  if (!Array.isArray(t8) || !t8.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [s7 !== void 0 ? s7.createHTML(u3) : u3, l9];
};
var E2 = class {
  constructor({ strings: t8, _$litType$: s10 }, n10) {
    let l9;
    this.parts = [];
    let r8 = 0, d3 = 0;
    const u3 = t8.length - 1, c3 = this.parts, [v3, a6] = C2(t8, s10);
    if (this.el = E2.createElement(v3, n10), A2.currentNode = this.el.content, s10 === 2) {
      const t9 = this.el.content, i9 = t9.firstChild;
      i9.remove(), t9.append(...i9.childNodes);
    }
    for (; (l9 = A2.nextNode()) !== null && c3.length < u3; ) {
      if (l9.nodeType === 1) {
        if (l9.hasAttributes()) {
          const t9 = [];
          for (const i9 of l9.getAttributeNames())
            if (i9.endsWith("$lit$") || i9.startsWith(e8)) {
              const s11 = a6[d3++];
              if (t9.push(i9), s11 !== void 0) {
                const t10 = l9.getAttribute(s11.toLowerCase() + "$lit$").split(e8), i10 = /([.?@])?(.*)/.exec(s11);
                c3.push({ type: 1, index: r8, name: i10[2], strings: t10, ctor: i10[1] === "." ? M2 : i10[1] === "?" ? H2 : i10[1] === "@" ? I2 : S4 });
              } else
                c3.push({ type: 6, index: r8 });
            }
          for (const i9 of t9)
            l9.removeAttribute(i9);
        }
        if (g2.test(l9.tagName)) {
          const t9 = l9.textContent.split(e8), s11 = t9.length - 1;
          if (s11 > 0) {
            l9.textContent = i6 ? i6.emptyScript : "";
            for (let i9 = 0; i9 < s11; i9++)
              l9.append(t9[i9], h4()), A2.nextNode(), c3.push({ type: 2, index: ++r8 });
            l9.append(t9[s11], h4());
          }
        }
      } else if (l9.nodeType === 8)
        if (l9.data === o9)
          c3.push({ type: 2, index: r8 });
        else {
          let t9 = -1;
          for (; (t9 = l9.data.indexOf(e8, t9 + 1)) !== -1; )
            c3.push({ type: 7, index: r8 }), t9 += e8.length - 1;
        }
      r8++;
    }
  }
  static createElement(t8, i9) {
    const s10 = l5.createElement("template");
    return s10.innerHTML = t8, s10;
  }
};
function P2(t8, i9, s10 = t8, e10) {
  var o13, n10, l9, h5;
  if (i9 === b2)
    return i9;
  let d3 = e10 !== void 0 ? (o13 = s10._$Cl) === null || o13 === void 0 ? void 0 : o13[e10] : s10._$Cu;
  const u3 = r6(i9) ? void 0 : i9._$litDirective$;
  return (d3 == null ? void 0 : d3.constructor) !== u3 && ((n10 = d3 == null ? void 0 : d3._$AO) === null || n10 === void 0 || n10.call(d3, false), u3 === void 0 ? d3 = void 0 : (d3 = new u3(t8), d3._$AT(t8, s10, e10)), e10 !== void 0 ? ((l9 = (h5 = s10)._$Cl) !== null && l9 !== void 0 ? l9 : h5._$Cl = [])[e10] = d3 : s10._$Cu = d3), d3 !== void 0 && (i9 = P2(t8, d3._$AS(t8, i9.values), d3, e10)), i9;
}
var V2 = class {
  constructor(t8, i9) {
    this.v = [], this._$AN = void 0, this._$AD = t8, this._$AM = i9;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  p(t8) {
    var i9;
    const { el: { content: s10 }, parts: e10 } = this._$AD, o13 = ((i9 = t8 == null ? void 0 : t8.creationScope) !== null && i9 !== void 0 ? i9 : l5).importNode(s10, true);
    A2.currentNode = o13;
    let n10 = A2.nextNode(), h5 = 0, r8 = 0, d3 = e10[0];
    for (; d3 !== void 0; ) {
      if (h5 === d3.index) {
        let i10;
        d3.type === 2 ? i10 = new N2(n10, n10.nextSibling, this, t8) : d3.type === 1 ? i10 = new d3.ctor(n10, d3.name, d3.strings, this, t8) : d3.type === 6 && (i10 = new L2(n10, this, t8)), this.v.push(i10), d3 = e10[++r8];
      }
      h5 !== (d3 == null ? void 0 : d3.index) && (n10 = A2.nextNode(), h5++);
    }
    return o13;
  }
  m(t8) {
    let i9 = 0;
    for (const s10 of this.v)
      s10 !== void 0 && (s10.strings !== void 0 ? (s10._$AI(t8, s10, i9), i9 += s10.strings.length - 2) : s10._$AI(t8[i9])), i9++;
  }
};
var N2 = class {
  constructor(t8, i9, s10, e10) {
    var o13;
    this.type = 2, this._$AH = w2, this._$AN = void 0, this._$AA = t8, this._$AB = i9, this._$AM = s10, this.options = e10, this._$Cg = (o13 = e10 == null ? void 0 : e10.isConnected) === null || o13 === void 0 || o13;
  }
  get _$AU() {
    var t8, i9;
    return (i9 = (t8 = this._$AM) === null || t8 === void 0 ? void 0 : t8._$AU) !== null && i9 !== void 0 ? i9 : this._$Cg;
  }
  get parentNode() {
    let t8 = this._$AA.parentNode;
    const i9 = this._$AM;
    return i9 !== void 0 && t8.nodeType === 11 && (t8 = i9.parentNode), t8;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t8, i9 = this) {
    t8 = P2(this, t8, i9), r6(t8) ? t8 === w2 || t8 == null || t8 === "" ? (this._$AH !== w2 && this._$AR(), this._$AH = w2) : t8 !== this._$AH && t8 !== b2 && this.$(t8) : t8._$litType$ !== void 0 ? this.T(t8) : t8.nodeType !== void 0 ? this.k(t8) : u2(t8) ? this.S(t8) : this.$(t8);
  }
  M(t8, i9 = this._$AB) {
    return this._$AA.parentNode.insertBefore(t8, i9);
  }
  k(t8) {
    this._$AH !== t8 && (this._$AR(), this._$AH = this.M(t8));
  }
  $(t8) {
    this._$AH !== w2 && r6(this._$AH) ? this._$AA.nextSibling.data = t8 : this.k(l5.createTextNode(t8)), this._$AH = t8;
  }
  T(t8) {
    var i9;
    const { values: s10, _$litType$: e10 } = t8, o13 = typeof e10 == "number" ? this._$AC(t8) : (e10.el === void 0 && (e10.el = E2.createElement(e10.h, this.options)), e10);
    if (((i9 = this._$AH) === null || i9 === void 0 ? void 0 : i9._$AD) === o13)
      this._$AH.m(s10);
    else {
      const t9 = new V2(o13, this), i10 = t9.p(this.options);
      t9.m(s10), this.k(i10), this._$AH = t9;
    }
  }
  _$AC(t8) {
    let i9 = T2.get(t8.strings);
    return i9 === void 0 && T2.set(t8.strings, i9 = new E2(t8)), i9;
  }
  S(t8) {
    d2(this._$AH) || (this._$AH = [], this._$AR());
    const i9 = this._$AH;
    let s10, e10 = 0;
    for (const o13 of t8)
      e10 === i9.length ? i9.push(s10 = new N2(this.M(h4()), this.M(h4()), this, this.options)) : s10 = i9[e10], s10._$AI(o13), e10++;
    e10 < i9.length && (this._$AR(s10 && s10._$AB.nextSibling, e10), i9.length = e10);
  }
  _$AR(t8 = this._$AA.nextSibling, i9) {
    var s10;
    for ((s10 = this._$AP) === null || s10 === void 0 || s10.call(this, false, true, i9); t8 && t8 !== this._$AB; ) {
      const i10 = t8.nextSibling;
      t8.remove(), t8 = i10;
    }
  }
  setConnected(t8) {
    var i9;
    this._$AM === void 0 && (this._$Cg = t8, (i9 = this._$AP) === null || i9 === void 0 || i9.call(this, t8));
  }
};
var S4 = class {
  constructor(t8, i9, s10, e10, o13) {
    this.type = 1, this._$AH = w2, this._$AN = void 0, this.element = t8, this.name = i9, this._$AM = e10, this.options = o13, s10.length > 2 || s10[0] !== "" || s10[1] !== "" ? (this._$AH = Array(s10.length - 1).fill(new String()), this.strings = s10) : this._$AH = w2;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t8, i9 = this, s10, e10) {
    const o13 = this.strings;
    let n10 = false;
    if (o13 === void 0)
      t8 = P2(this, t8, i9, 0), n10 = !r6(t8) || t8 !== this._$AH && t8 !== b2, n10 && (this._$AH = t8);
    else {
      const e11 = t8;
      let l9, h5;
      for (t8 = o13[0], l9 = 0; l9 < o13.length - 1; l9++)
        h5 = P2(this, e11[s10 + l9], i9, l9), h5 === b2 && (h5 = this._$AH[l9]), n10 || (n10 = !r6(h5) || h5 !== this._$AH[l9]), h5 === w2 ? t8 = w2 : t8 !== w2 && (t8 += (h5 != null ? h5 : "") + o13[l9 + 1]), this._$AH[l9] = h5;
    }
    n10 && !e10 && this.C(t8);
  }
  C(t8) {
    t8 === w2 ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t8 != null ? t8 : "");
  }
};
var M2 = class extends S4 {
  constructor() {
    super(...arguments), this.type = 3;
  }
  C(t8) {
    this.element[this.name] = t8 === w2 ? void 0 : t8;
  }
};
var k2 = i6 ? i6.emptyScript : "";
var H2 = class extends S4 {
  constructor() {
    super(...arguments), this.type = 4;
  }
  C(t8) {
    t8 && t8 !== w2 ? this.element.setAttribute(this.name, k2) : this.element.removeAttribute(this.name);
  }
};
var I2 = class extends S4 {
  constructor(t8, i9, s10, e10, o13) {
    super(t8, i9, s10, e10, o13), this.type = 5;
  }
  _$AI(t8, i9 = this) {
    var s10;
    if ((t8 = (s10 = P2(this, t8, i9, 0)) !== null && s10 !== void 0 ? s10 : w2) === b2)
      return;
    const e10 = this._$AH, o13 = t8 === w2 && e10 !== w2 || t8.capture !== e10.capture || t8.once !== e10.once || t8.passive !== e10.passive, n10 = t8 !== w2 && (e10 === w2 || o13);
    o13 && this.element.removeEventListener(this.name, this, e10), n10 && this.element.addEventListener(this.name, this, t8), this._$AH = t8;
  }
  handleEvent(t8) {
    var i9, s10;
    typeof this._$AH == "function" ? this._$AH.call((s10 = (i9 = this.options) === null || i9 === void 0 ? void 0 : i9.host) !== null && s10 !== void 0 ? s10 : this.element, t8) : this._$AH.handleEvent(t8);
  }
};
var L2 = class {
  constructor(t8, i9, s10) {
    this.element = t8, this.type = 6, this._$AN = void 0, this._$AM = i9, this.options = s10;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t8) {
    P2(this, t8);
  }
};
var z2 = window.litHtmlPolyfillSupport;
z2 == null || z2(E2, N2), ((t6 = globalThis.litHtmlVersions) !== null && t6 !== void 0 ? t6 : globalThis.litHtmlVersions = []).push("2.2.3");

// node_modules/lit-element/lit-element.js
var l6;
var o10;
var s8 = class extends a3 {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Dt = void 0;
  }
  createRenderRoot() {
    var t8, e10;
    const i9 = super.createRenderRoot();
    return (t8 = (e10 = this.renderOptions).renderBefore) !== null && t8 !== void 0 || (e10.renderBefore = i9.firstChild), i9;
  }
  update(t8) {
    const i9 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t8), this._$Dt = x2(i9, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t8;
    super.connectedCallback(), (t8 = this._$Dt) === null || t8 === void 0 || t8.setConnected(true);
  }
  disconnectedCallback() {
    var t8;
    super.disconnectedCallback(), (t8 = this._$Dt) === null || t8 === void 0 || t8.setConnected(false);
  }
  render() {
    return b2;
  }
};
s8.finalized = true, s8._$litElement$ = true, (l6 = globalThis.litElementHydrateSupport) === null || l6 === void 0 || l6.call(globalThis, { LitElement: s8 });
var n9 = globalThis.litElementPolyfillSupport;
n9 == null || n9({ LitElement: s8 });
((o10 = globalThis.litElementVersions) !== null && o10 !== void 0 ? o10 : globalThis.litElementVersions = []).push("3.2.0");

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.DIQYRTQ3.js
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "x" : "y";
}
function getLengthFromAxis(axis) {
  return axis === "y" ? "height" : "width";
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === "x";
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  if (false) {
    if (platform2 == null) {
      console.error(["Floating UI: `platform` property was not passed to config. If you", "want to use Floating UI on the web, install @floating-ui/dom", "instead of the /core package. Otherwise, you can create your own", "`platform`: https://floating-ui.com/docs/platform"].join(" "));
    }
    if (middleware.filter((_ref) => {
      let {
        name
      } = _ref;
      return name === "autoPlacement" || name === "flip";
    }).length > 1) {
      throw new Error(["Floating UI: duplicate `flip` and/or `autoPlacement`", "middleware detected. This will lead to an infinite loop. Ensure only", "one of either has been passed to the `middleware` array."].join(" "));
    }
  }
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x: x3,
    y: y3
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  const skippedMiddlewareNames = /* @__PURE__ */ new Set();
  let _debug_loop_count_ = 0;
  for (let i9 = 0; i9 < middleware.length; i9++) {
    if (false) {
      _debug_loop_count_++;
      if (_debug_loop_count_ > 100) {
        throw new Error(["Floating UI: The middleware lifecycle appears to be", "running in an infinite loop. This is usually caused by a `reset`", "continually being returned without a break condition."].join(" "));
      }
    }
    const {
      name,
      fn
    } = middleware[i9];
    if (skippedMiddlewareNames.has(name)) {
      continue;
    }
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x: x3,
      y: y3,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x3 = nextX != null ? nextX : x3;
    y3 = nextY != null ? nextY : y3;
    middlewareData = __spreadProps(__spreadValues({}, middlewareData), {
      [name]: __spreadValues(__spreadValues({}, middlewareData[name]), data)
    });
    if (reset) {
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x: x3,
          y: y3
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
        if (reset.skip !== false) {
          skippedMiddlewareNames.add(name);
        }
      }
      i9 = -1;
      continue;
    }
  }
  return {
    x: x3,
    y: y3,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
function expandPaddingObject(padding) {
  return __spreadValues({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, padding);
}
function getSideObjectFromPadding(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return __spreadProps(__spreadValues({}, rect), {
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
async function detectOverflow(middlewareArguments, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x: x3,
    y: y3,
    platform: platform2,
    rects,
    elements,
    strategy
  } = middlewareArguments;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = options;
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary
  }));
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: elementContext === "floating" ? __spreadProps(__spreadValues({}, rects.floating), {
      x: x3,
      y: y3
    }) : rects.reference,
    offsetParent: await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating)),
    strategy
  }) : rects[elementContext]);
  return {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
}
var min = Math.min;
var max = Math.max;
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
var arrow = (options) => ({
  name: "arrow",
  options,
  async fn(middlewareArguments) {
    const {
      element,
      padding = 0
    } = options != null ? options : {};
    const {
      x: x3,
      y: y3,
      placement,
      rects,
      platform: platform2
    } = middlewareArguments;
    if (element == null) {
      if (false) {
        console.warn("Floating UI: No `element` was passed to the `arrow` middleware.");
      }
      return {};
    }
    const paddingObject = getSideObjectFromPadding(padding);
    const coords = {
      x: x3,
      y: y3
    };
    const axis = getMainAxisFromPlacement(placement);
    const length = getLengthFromAxis(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const minProp = axis === "y" ? "top" : "left";
    const maxProp = axis === "y" ? "bottom" : "right";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    const clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    const centerToReference = endDiff / 2 - startDiff / 2;
    const min3 = paddingObject[minProp];
    const max3 = clientSize - arrowDimensions[length] - paddingObject[maxProp];
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = within(min3, center, max3);
    return {
      data: {
        [axis]: offset2,
        centerOffset: center - offset2
      }
    };
  }
});
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (matched) => hash$1[matched]);
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (matched) => hash[matched]);
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(middlewareArguments) {
      var _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = middlewareArguments;
      const _a = options, {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        flipAlignment = true
      } = _a, detectOverflowOptions = __objRest(_a, [
        "mainAxis",
        "crossAxis",
        "fallbackPlacements",
        "fallbackStrategy",
        "flipAlignment"
      ]);
      const side = getSide(placement);
      const isBasePlacement = side === initialPlacement;
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const {
          main,
          cross
        } = getAlignmentSides(placement, rects, await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)));
        overflows.push(overflow[main], overflow[cross]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip$, _middlewareData$flip2;
        const nextIndex = ((_middlewareData$flip$ = (_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) != null ? _middlewareData$flip$ : 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              skip: false,
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = "bottom";
        switch (fallbackStrategy) {
          case "bestFit": {
            var _overflowsData$slice$;
            const placement2 = (_overflowsData$slice$ = overflowsData.slice().sort((a6, b3) => a6.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0) - b3.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0))[0]) == null ? void 0 : _overflowsData$slice$.placement;
            if (placement2) {
              resetPlacement = placement2;
            }
            break;
          }
          case "initialPlacement":
            resetPlacement = initialPlacement;
            break;
        }
        return {
          reset: {
            placement: resetPlacement
          }
        };
      }
      return {};
    }
  };
};
function convertValueToCoords(placement, rects, value, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getMainAxisFromPlacement(placement) === "x";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  let crossAxisMulti = 1;
  if (alignment === "end") {
    crossAxisMulti = -1;
  }
  if (rtl && isVertical) {
    crossAxisMulti *= -1;
  }
  const rawValue = typeof value === "function" ? value(__spreadProps(__spreadValues({}, rects), {
    placement
  })) : value;
  const {
    mainAxis,
    crossAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0
  } : __spreadValues({
    mainAxis: 0,
    crossAxis: 0
  }, rawValue);
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(value) {
  if (value === void 0) {
    value = 0;
  }
  return {
    name: "offset",
    options: value,
    async fn(middlewareArguments) {
      const {
        x: x3,
        y: y3,
        placement,
        rects,
        platform: platform2,
        elements
      } = middlewareArguments;
      const diffCoords = convertValueToCoords(placement, rects, value, await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)));
      return {
        x: x3 + diffCoords.x,
        y: y3 + diffCoords.y,
        data: diffCoords
      };
    }
  };
};
function getCrossAxis(axis) {
  return axis === "x" ? "y" : "x";
}
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(middlewareArguments) {
      const {
        x: x3,
        y: y3,
        placement
      } = middlewareArguments;
      const _a = options, {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x22,
              y: y22
            } = _ref;
            return {
              x: x22,
              y: y22
            };
          }
        }
      } = _a, detectOverflowOptions = __objRest(_a, [
        "mainAxis",
        "crossAxis",
        "limiter"
      ]);
      const coords = {
        x: x3,
        y: y3
      };
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const mainAxis = getMainAxisFromPlacement(getSide(placement));
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min3 = mainAxisCoord + overflow[minSide];
        const max3 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = within(min3, mainAxisCoord, max3);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min3 = crossAxisCoord + overflow[minSide];
        const max3 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = within(min3, crossAxisCoord, max3);
      }
      const limitedCoords = limiter.fn(__spreadProps(__spreadValues({}, middlewareArguments), {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      }));
      return __spreadProps(__spreadValues({}, limitedCoords), {
        data: {
          x: limitedCoords.x - x3,
          y: limitedCoords.y - y3
        }
      });
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(middlewareArguments) {
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = middlewareArguments;
      const _a = options, {
        apply
      } = _a, detectOverflowOptions = __objRest(_a, [
        "apply"
      ]);
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const xMin = max(overflow.left, 0);
      const xMax = max(overflow.right, 0);
      const yMin = max(overflow.top, 0);
      const yMax = max(overflow.bottom, 0);
      const dimensions = {
        height: rects.floating.height - (["left", "right"].includes(placement) ? 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom)) : overflow[heightSide]),
        width: rects.floating.width - (["top", "bottom"].includes(placement) ? 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right)) : overflow[widthSide])
      };
      apply == null ? void 0 : apply(__spreadValues(__spreadValues({}, dimensions), rects));
      return {
        reset: {
          rects: true
        }
      };
    }
  };
};
function isWindow(value) {
  return (value == null ? void 0 : value.toString()) === "[object Window]";
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (!isWindow(node)) {
    const ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeName(node) {
  return isWindow(node) ? "" : node ? (node.nodeName || "").toLowerCase() : "";
}
function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function isShadowRoot(node) {
  const OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const isFirefox = navigator.userAgent.toLowerCase().includes("firefox");
  const css = getComputedStyle$1(element);
  return css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].includes(css.willChange) || isFirefox && css.willChange === "filter" || isFirefox && (css.filter ? css.filter !== "none" : false);
}
var min2 = Math.min;
var max2 = Math.max;
var round = Math.round;
function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  const clientRect = element.getBoundingClientRect();
  let scaleX = 1;
  let scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  return {
    width: clientRect.width / scaleX,
    height: clientRect.height / scaleY,
    top: clientRect.top / scaleY,
    right: clientRect.right / scaleX,
    bottom: clientRect.bottom / scaleY,
    left: clientRect.left / scaleX,
    x: clientRect.left / scaleX,
    y: clientRect.top / scaleY
  };
}
function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}
function getNodeScroll(element) {
  if (isWindow(element)) {
    return {
      scrollLeft: element.pageXOffset,
      scrollTop: element.pageYOffset
    };
  }
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function isScaled(element) {
  const rect = getBoundingClientRect(element);
  return round(rect.width) !== element.offsetWidth || round(rect.height) !== element.offsetHeight;
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const rect = getBoundingClientRect(element, isOffsetParentAnElement && isScaled(offsetParent));
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  return node.assignedSlot || node.parentNode || (isShadowRoot(node) ? node.host : null) || getDocumentElement(node);
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && !["html", "body"].includes(getNodeName(currentNode))) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  const window2 = getWindow(element);
  let offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getDimensions(element) {
  if (isHTMLElement(element)) {
    return {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }
  const rect = getBoundingClientRect(element);
  return {
    width: rect.width,
    height: rect.height
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return __spreadProps(__spreadValues({}, rect), {
    x: rect.x - scroll.scrollLeft + offsets.x,
    y: rect.y - scroll.scrollTop + offsets.y
  });
}
function getViewportRect(element) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x3 = 0;
  let y3 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    if (Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) < 0.01) {
      x3 = visualViewport.offsetLeft;
      y3 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x3,
    y: y3
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  const width = max2(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  const height = max2(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  let x3 = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y3 = -scroll.scrollTop;
  if (getComputedStyle$1(body || html).direction === "rtl") {
    x3 += max2(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x: x3,
    y: y3
  };
}
function getNearestOverflowAncestor(node) {
  if (["html", "body", "#document"].includes(getNodeName(node))) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isOverflowElement(node)) {
    return node;
  }
  return getNearestOverflowAncestor(getParentNode(node));
}
function getOverflowAncestors(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  const target = isBody ? [win].concat(win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []) : scrollableAncestor;
  const updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(getOverflowAncestors(getParentNode(target)));
}
function contains(parent, child) {
  const rootNode = child.getRootNode == null ? void 0 : child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    let next = child;
    do {
      if (next && parent === next) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getInnerBoundingClientRect(element) {
  const clientRect = getBoundingClientRect(element);
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  return {
    top,
    left,
    x: left,
    y: top,
    right: left + element.clientWidth,
    bottom: top + element.clientHeight,
    width: element.clientWidth,
    height: element.clientHeight
  };
}
function getClientRectFromClippingAncestor(element, clippingParent) {
  if (clippingParent === "viewport") {
    return rectToClientRect(getViewportRect(element));
  }
  if (isElement(clippingParent)) {
    return getInnerBoundingClientRect(clippingParent);
  }
  return rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingAncestors(element) {
  const clippingAncestors = getOverflowAncestors(getParentNode(element));
  const canEscapeClipping = ["absolute", "fixed"].includes(getComputedStyle$1(element).position);
  const clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingAncestors.filter((clippingAncestors2) => isElement(clippingAncestors2) && contains(clippingAncestors2, clipperElement) && getNodeName(clippingAncestors2) !== "body");
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary
  } = _ref;
  const mainClippingAncestors = boundary === "clippingAncestors" ? getClippingAncestors(element) : [].concat(boundary);
  const clippingAncestors = [...mainClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor);
    accRect.top = max2(rect.top, accRect.top);
    accRect.right = min2(rect.right, accRect.right);
    accRect.bottom = min2(rect.bottom, accRect.bottom);
    accRect.left = max2(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
var platform = {
  getClippingRect,
  convertOffsetParentRelativeRectToViewportRelativeRect,
  isElement,
  getDimensions,
  getOffsetParent,
  getDocumentElement,
  getElementRects: (_ref) => {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    return {
      reference: getRectRelativeToOffsetParent(reference, getOffsetParent(floating), strategy),
      floating: __spreadProps(__spreadValues({}, getDimensions(floating)), {
        x: 0,
        y: 0
      })
    };
  },
  getClientRects: (element) => Array.from(element.getClientRects()),
  isRTL: (element) => getComputedStyle$1(element).direction === "rtl"
};
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll: _ancestorScroll = true,
    ancestorResize: _ancestorResize = true,
    elementResize: _elementResize = true,
    animationFrame = false
  } = options;
  let cleanedUp = false;
  const ancestorScroll = _ancestorScroll && !animationFrame;
  const ancestorResize = _ancestorResize && !animationFrame;
  const elementResize = _elementResize && !animationFrame;
  const ancestors = ancestorScroll || ancestorResize ? [...isElement(reference) ? getOverflowAncestors(reference) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  let observer = null;
  if (elementResize) {
    observer = new ResizeObserver(update);
    isElement(reference) && observer.observe(reference);
    observer.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    if (cleanedUp) {
      return;
    }
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  return () => {
    var _observer;
    cleanedUp = true;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    (_observer = observer) == null ? void 0 : _observer.disconnect();
    observer = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var computePosition2 = (reference, floating, options) => computePosition(reference, floating, __spreadValues({
  platform
}, options));

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2BK5N6NV.js
var dropdown_styles_default = r`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .dropdown {
    position: relative;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__positioner {
    position: absolute;
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    box-shadow: var(--sl-shadow-large);
    overflow: auto;
    overscroll-behavior: none;
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    pointer-events: all;
  }

  .dropdown__positioner[data-placement^='top'] .dropdown__panel {
    transform-origin: bottom;
  }

  .dropdown__positioner[data-placement^='bottom'] .dropdown__panel {
    transform-origin: top;
  }

  .dropdown__positioner[data-placement^='left'] .dropdown__panel {
    transform-origin: right;
  }

  .dropdown__positioner[data-placement^='right'] .dropdown__panel {
    transform-origin: left;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.SCUNOITN.js
function isTabbable(el) {
  const tag = el.tagName.toLowerCase();
  if (el.getAttribute("tabindex") === "-1") {
    return false;
  }
  if (el.hasAttribute("disabled")) {
    return false;
  }
  if (el.hasAttribute("aria-disabled") && el.getAttribute("aria-disabled") !== "false") {
    return false;
  }
  if (tag === "input" && el.getAttribute("type") === "radio" && !el.hasAttribute("checked")) {
    return false;
  }
  if (el.offsetParent === null) {
    return false;
  }
  if (window.getComputedStyle(el).visibility === "hidden") {
    return false;
  }
  if ((tag === "audio" || tag === "video") && el.hasAttribute("controls")) {
    return true;
  }
  if (el.hasAttribute("tabindex")) {
    return true;
  }
  if (el.hasAttribute("contenteditable") && el.getAttribute("contenteditable") !== "false") {
    return true;
  }
  return ["button", "input", "select", "textarea", "a", "audio", "video", "summary"].includes(tag);
}
function getTabbableBoundary(root) {
  var _a, _b;
  const allElements = [];
  function walk(el) {
    if (el instanceof HTMLElement) {
      allElements.push(el);
      if (el.shadowRoot !== null && el.shadowRoot.mode === "open") {
        walk(el.shadowRoot);
      }
    }
    [...el.querySelectorAll("*")].forEach((e10) => walk(e10));
  }
  walk(root);
  const start = (_a = allElements.find((el) => isTabbable(el))) != null ? _a : null;
  const end = (_b = allElements.reverse().find((el) => isTabbable(el))) != null ? _b : null;
  return { start, end };
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.H262HIXG.js
function getOffset(element, parent) {
  return {
    top: Math.round(element.getBoundingClientRect().top - parent.getBoundingClientRect().top),
    left: Math.round(element.getBoundingClientRect().left - parent.getBoundingClientRect().left)
  };
}
function scrollIntoView(element, container, direction = "vertical", behavior = "smooth") {
  const offset2 = getOffset(element, container);
  const offsetTop = offset2.top + container.scrollTop;
  const offsetLeft = offset2.left + container.scrollLeft;
  const minX = container.scrollLeft;
  const maxX = container.scrollLeft + container.offsetWidth;
  const minY = container.scrollTop;
  const maxY = container.scrollTop + container.offsetHeight;
  if (direction === "horizontal" || direction === "both") {
    if (offsetLeft < minX) {
      container.scrollTo({ left: offsetLeft, behavior });
    } else if (offsetLeft + element.clientWidth > maxX) {
      container.scrollTo({ left: offsetLeft - container.offsetWidth + element.clientWidth, behavior });
    }
  }
  if (direction === "vertical" || direction === "both") {
    if (offsetTop < minY) {
      container.scrollTo({ top: offsetTop, behavior });
    } else if (offsetTop + element.clientHeight > maxY) {
      container.scrollTo({ top: offsetTop - container.offsetHeight + element.clientHeight, behavior });
    }
  }
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.YBI4N56R.js
function animateTo(el, keyframes, options) {
  return new Promise((resolve) => {
    if ((options == null ? void 0 : options.duration) === Infinity) {
      throw new Error("Promise-based animations must be finite.");
    }
    const animation = el.animate(keyframes, __spreadProps(__spreadValues({}, options), {
      duration: prefersReducedMotion() ? 0 : options.duration
    }));
    animation.addEventListener("cancel", resolve, { once: true });
    animation.addEventListener("finish", resolve, { once: true });
  });
}
function parseDuration(delay) {
  delay = delay.toString().toLowerCase();
  if (delay.indexOf("ms") > -1) {
    return parseFloat(delay);
  }
  if (delay.indexOf("s") > -1) {
    return parseFloat(delay) * 1e3;
  }
  return parseFloat(delay);
}
function prefersReducedMotion() {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  return query.matches;
}
function stopAnimations(el) {
  return Promise.all(el.getAnimations().map((animation) => {
    return new Promise((resolve) => {
      const handleAnimationEvent = requestAnimationFrame(resolve);
      animation.addEventListener("cancel", () => handleAnimationEvent, { once: true });
      animation.addEventListener("finish", () => handleAnimationEvent, { once: true });
      animation.cancel();
    });
  }));
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6SAGALY4.js
var defaultAnimationRegistry = /* @__PURE__ */ new Map();
var customAnimationRegistry = /* @__PURE__ */ new WeakMap();
function ensureAnimation(animation) {
  return animation != null ? animation : { keyframes: [], options: { duration: 0 } };
}
function setDefaultAnimation(animationName, animation) {
  defaultAnimationRegistry.set(animationName, ensureAnimation(animation));
}
function getAnimation(el, animationName) {
  const customAnimation = customAnimationRegistry.get(el);
  if (customAnimation == null ? void 0 : customAnimation[animationName]) {
    return customAnimation[animationName];
  }
  const defaultAnimation = defaultAnimationRegistry.get(animationName);
  if (defaultAnimation) {
    return defaultAnimation;
  }
  return {
    keyframes: [],
    options: { duration: 0 }
  };
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PQ5VRVXF.js
function watch(propName, options) {
  const resolvedOptions = __spreadValues({
    waitUntilFirstUpdate: false
  }, options);
  return (proto, decoratedFnName) => {
    const { update } = proto;
    if (propName in proto) {
      const propNameKey = propName;
      proto.update = function(changedProps) {
        if (changedProps.has(propNameKey)) {
          const oldValue = changedProps.get(propNameKey);
          const newValue = this[propNameKey];
          if (oldValue !== newValue) {
            if (!resolvedOptions.waitUntilFirstUpdate || this.hasUpdated) {
              this[decoratedFnName](oldValue, newValue);
            }
          }
        }
        update.call(this, changedProps);
      };
    }
  };
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.CDTZZV7W.js
function emit(el, name, options) {
  const event = new CustomEvent(name, __spreadValues({
    bubbles: true,
    cancelable: false,
    composed: true,
    detail: {}
  }, options));
  el.dispatchEvent(event);
  return event;
}
function waitForEvent(el, eventName) {
  return new Promise((resolve) => {
    function done(event) {
      if (event.target === el) {
        el.removeEventListener(eventName, done);
        resolve();
      }
    }
    el.addEventListener(eventName, done);
  });
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6RGOUGV6.js
var SlDropdown = class extends s4 {
  constructor() {
    super(...arguments);
    this.open = false;
    this.placement = "bottom-start";
    this.disabled = false;
    this.stayOpenOnSelect = false;
    this.distance = 0;
    this.skidding = 0;
    this.hoist = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.handleMenuItemActivate = this.handleMenuItemActivate.bind(this);
    this.handlePanelSelect = this.handlePanelSelect.bind(this);
    this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
    this.handleDocumentMouseDown = this.handleDocumentMouseDown.bind(this);
    if (!this.containingElement) {
      this.containingElement = this;
    }
  }
  async firstUpdated() {
    this.panel.hidden = !this.open;
    if (this.open) {
      await this.updateComplete;
      this.addOpenListeners();
      this.startPositioner();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeOpenListeners();
    this.hide();
    this.stopPositioner();
  }
  focusOnTrigger() {
    const slot = this.trigger.querySelector("slot");
    const trigger = slot.assignedElements({ flatten: true })[0];
    if (typeof (trigger == null ? void 0 : trigger.focus) === "function") {
      trigger.focus();
    }
  }
  getMenu() {
    const slot = this.panel.querySelector("slot");
    return slot.assignedElements({ flatten: true }).find((el) => el.tagName.toLowerCase() === "sl-menu");
  }
  handleDocumentKeyDown(event) {
    var _a;
    if (event.key === "Escape") {
      this.hide();
      this.focusOnTrigger();
      return;
    }
    if (event.key === "Tab") {
      if (this.open && ((_a = document.activeElement) == null ? void 0 : _a.tagName.toLowerCase()) === "sl-menu-item") {
        event.preventDefault();
        this.hide();
        this.focusOnTrigger();
        return;
      }
      setTimeout(() => {
        var _a2, _b, _c;
        const activeElement = ((_a2 = this.containingElement) == null ? void 0 : _a2.getRootNode()) instanceof ShadowRoot ? (_c = (_b = document.activeElement) == null ? void 0 : _b.shadowRoot) == null ? void 0 : _c.activeElement : document.activeElement;
        if (!this.containingElement || (activeElement == null ? void 0 : activeElement.closest(this.containingElement.tagName.toLowerCase())) !== this.containingElement) {
          this.hide();
        }
      });
    }
  }
  handleDocumentMouseDown(event) {
    const path = event.composedPath();
    if (this.containingElement && !path.includes(this.containingElement)) {
      this.hide();
    }
  }
  handleMenuItemActivate(event) {
    const item = event.target;
    scrollIntoView(item, this.panel);
  }
  handlePanelSelect(event) {
    const target = event.target;
    if (!this.stayOpenOnSelect && target.tagName.toLowerCase() === "sl-menu") {
      this.hide();
      this.focusOnTrigger();
    }
  }
  handlePopoverOptionsChange() {
    this.updatePositioner();
  }
  handleTriggerClick() {
    if (this.open) {
      this.hide();
    } else {
      this.show();
    }
  }
  handleTriggerKeyDown(event) {
    if (event.key === "Escape") {
      this.focusOnTrigger();
      this.hide();
      return;
    }
    if ([" ", "Enter"].includes(event.key)) {
      event.preventDefault();
      this.handleTriggerClick();
      return;
    }
    const menu = this.getMenu();
    if (menu) {
      const menuItems = menu.defaultSlot.assignedElements({ flatten: true });
      const firstMenuItem = menuItems[0];
      const lastMenuItem = menuItems[menuItems.length - 1];
      if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
        event.preventDefault();
        if (!this.open) {
          this.show();
        }
        if (menuItems.length > 0) {
          requestAnimationFrame(() => {
            if (event.key === "ArrowDown" || event.key === "Home") {
              menu.setCurrentItem(firstMenuItem);
              firstMenuItem.focus();
            }
            if (event.key === "ArrowUp" || event.key === "End") {
              menu.setCurrentItem(lastMenuItem);
              lastMenuItem.focus();
            }
          });
        }
      }
      const ignoredKeys = ["Tab", "Shift", "Meta", "Ctrl", "Alt"];
      if (this.open && !ignoredKeys.includes(event.key)) {
        menu.typeToSelect(event);
      }
    }
  }
  handleTriggerKeyUp(event) {
    if (event.key === " ") {
      event.preventDefault();
    }
  }
  handleTriggerSlotChange() {
    this.updateAccessibleTrigger();
  }
  updateAccessibleTrigger() {
    const slot = this.trigger.querySelector("slot");
    const assignedElements = slot.assignedElements({ flatten: true });
    const accessibleTrigger = assignedElements.find((el) => getTabbableBoundary(el).start);
    let target;
    if (accessibleTrigger) {
      switch (accessibleTrigger.tagName.toLowerCase()) {
        case "sl-button":
        case "sl-icon-button":
          target = accessibleTrigger.button;
          break;
        default:
          target = accessibleTrigger;
      }
      target.setAttribute("aria-haspopup", "true");
      target.setAttribute("aria-expanded", this.open ? "true" : "false");
    }
  }
  async show() {
    if (this.open) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "sl-after-show");
  }
  async hide() {
    if (!this.open) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "sl-after-hide");
  }
  reposition() {
    this.updatePositioner();
  }
  addOpenListeners() {
    this.panel.addEventListener("sl-activate", this.handleMenuItemActivate);
    this.panel.addEventListener("sl-select", this.handlePanelSelect);
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    document.addEventListener("mousedown", this.handleDocumentMouseDown);
  }
  removeOpenListeners() {
    this.panel.removeEventListener("sl-activate", this.handleMenuItemActivate);
    this.panel.removeEventListener("sl-select", this.handlePanelSelect);
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    document.removeEventListener("mousedown", this.handleDocumentMouseDown);
  }
  async handleOpenChange() {
    if (this.disabled) {
      this.open = false;
      return;
    }
    this.updateAccessibleTrigger();
    if (this.open) {
      emit(this, "sl-show");
      this.addOpenListeners();
      await stopAnimations(this);
      this.startPositioner();
      this.panel.hidden = false;
      const { keyframes, options } = getAnimation(this, "dropdown.show");
      await animateTo(this.panel, keyframes, options);
      emit(this, "sl-after-show");
    } else {
      emit(this, "sl-hide");
      this.removeOpenListeners();
      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, "dropdown.hide");
      await animateTo(this.panel, keyframes, options);
      this.panel.hidden = true;
      this.stopPositioner();
      emit(this, "sl-after-hide");
    }
  }
  startPositioner() {
    this.stopPositioner();
    this.updatePositioner();
    this.positionerCleanup = autoUpdate(this.trigger, this.positioner, this.updatePositioner.bind(this));
  }
  updatePositioner() {
    if (!this.open || !this.trigger || !this.positioner) {
      return;
    }
    computePosition2(this.trigger, this.positioner, {
      placement: this.placement,
      middleware: [
        offset({ mainAxis: this.distance, crossAxis: this.skidding }),
        flip(),
        shift(),
        size({
          apply: ({ width, height }) => {
            Object.assign(this.panel.style, {
              maxWidth: `${width}px`,
              maxHeight: `${height}px`
            });
          },
          padding: 8
        })
      ],
      strategy: this.hoist ? "fixed" : "absolute"
    }).then(({ x: x3, y: y3, placement }) => {
      this.positioner.setAttribute("data-placement", placement);
      Object.assign(this.positioner.style, {
        position: this.hoist ? "fixed" : "absolute",
        left: `${x3}px`,
        top: `${y3}px`
      });
    });
  }
  stopPositioner() {
    if (this.positionerCleanup) {
      this.positionerCleanup();
      this.positionerCleanup = void 0;
      this.positioner.removeAttribute("data-placement");
    }
  }
  render() {
    return $`
      <div
        part="base"
        id="dropdown"
        class=${o5({
      dropdown: true,
      "dropdown--open": this.open
    })}
      >
        <span
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        >
          <slot name="trigger" @slotchange=${this.handleTriggerSlotChange}></slot>
        </span>

        <!-- Position the panel with a wrapper since the popover makes use of translate. This let's us add animations
        on the panel without interfering with the position. -->
        <div class="dropdown__positioner">
          <div
            part="panel"
            class="dropdown__panel"
            aria-hidden=${this.open ? "false" : "true"}
            aria-labelledby="dropdown"
          >
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
};
SlDropdown.styles = dropdown_styles_default;
__decorateClass([
  i22(".dropdown__trigger")
], SlDropdown.prototype, "trigger", 2);
__decorateClass([
  i22(".dropdown__panel")
], SlDropdown.prototype, "panel", 2);
__decorateClass([
  i22(".dropdown__positioner")
], SlDropdown.prototype, "positioner", 2);
__decorateClass([
  e5({ type: Boolean, reflect: true })
], SlDropdown.prototype, "open", 2);
__decorateClass([
  e5({ reflect: true })
], SlDropdown.prototype, "placement", 2);
__decorateClass([
  e5({ type: Boolean })
], SlDropdown.prototype, "disabled", 2);
__decorateClass([
  e5({ attribute: "stay-open-on-select", type: Boolean, reflect: true })
], SlDropdown.prototype, "stayOpenOnSelect", 2);
__decorateClass([
  e5({ attribute: false })
], SlDropdown.prototype, "containingElement", 2);
__decorateClass([
  e5({ type: Number })
], SlDropdown.prototype, "distance", 2);
__decorateClass([
  e5({ type: Number })
], SlDropdown.prototype, "skidding", 2);
__decorateClass([
  e5({ type: Boolean })
], SlDropdown.prototype, "hoist", 2);
__decorateClass([
  watch("distance"),
  watch("hoist"),
  watch("placement"),
  watch("skidding")
], SlDropdown.prototype, "handlePopoverOptionsChange", 1);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], SlDropdown.prototype, "handleOpenChange", 1);
SlDropdown = __decorateClass([
  n5("sl-dropdown")
], SlDropdown);
setDefaultAnimation("dropdown.show", {
  keyframes: [
    { opacity: 0, transform: "scale(0.9)" },
    { opacity: 1, transform: "scale(1)" }
  ],
  options: { duration: 100, easing: "ease" }
});
setDefaultAnimation("dropdown.hide", {
  keyframes: [
    { opacity: 1, transform: "scale(1)" },
    { opacity: 0, transform: "scale(0.9)" }
  ],
  options: { duration: 100, easing: "ease" }
});

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.C7PPQWMA.js
var library = {
  name: "default",
  resolver: (name) => `${getBasePath()}/assets/icons/${name}.svg`
};
var library_default_default = library;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.IDYSXN6R.js
var icons = {
  "check-lg": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
    </svg>
  `,
  "chevron-down": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
  "chevron-left": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,
  "chevron-right": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
  eye: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,
  "eye-slash": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,
  eyedropper: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,
  "grip-vertical": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
    </svg>
  `,
  "person-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,
  "play-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,
  "pause-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,
  "star-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,
  x: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
  "x-circle-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `
};
var systemLibrary = {
  name: "system",
  resolver: (name) => {
    if (name in icons) {
      return `data:image/svg+xml,${encodeURIComponent(icons[name])}`;
    }
    return "";
  }
};
var library_system_default = systemLibrary;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.UCCHCS2E.js
var registry = [library_default_default, library_system_default];
var watchedIcons = [];
function watchIcon(icon) {
  watchedIcons.push(icon);
}
function unwatchIcon(icon) {
  watchedIcons = watchedIcons.filter((el) => el !== icon);
}
function getIconLibrary(name) {
  return registry.find((lib) => lib.name === name);
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.RPB53XXV.js
var includeFiles = /* @__PURE__ */ new Map();
function requestInclude(src, mode = "cors") {
  if (includeFiles.has(src)) {
    return includeFiles.get(src);
  }
  const fileDataPromise = fetch(src, { mode }).then(async (response) => {
    return {
      ok: response.ok,
      status: response.status,
      html: await response.text()
    };
  });
  includeFiles.set(src, fileDataPromise);
  return fileDataPromise;
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P52GZVKG.js
var iconFiles = /* @__PURE__ */ new Map();
async function requestIcon(url) {
  if (iconFiles.has(url)) {
    return iconFiles.get(url);
  }
  const fileData = await requestInclude(url);
  const iconFileData = {
    ok: fileData.ok,
    status: fileData.status,
    svg: null
  };
  if (fileData.ok) {
    const div = document.createElement("div");
    div.innerHTML = fileData.html;
    const svg = div.firstElementChild;
    iconFileData.svg = (svg == null ? void 0 : svg.tagName.toLowerCase()) === "svg" ? svg.outerHTML : "";
  }
  iconFiles.set(url, iconFileData);
  return iconFileData;
}

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NPYVPRSA.js
var icon_styles_default = r`
  ${component_styles_default}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    box-sizing: content-box !important;
  }

  .icon,
  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.R37SUKY2.js
var l7 = (l22) => l22 != null ? l22 : w;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.DDXYEXJR.js
var e33 = class extends i3 {
  constructor(i23) {
    if (super(i23), this.it = w, i23.type !== t3.CHILD)
      throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(r8) {
    if (r8 === w || r8 == null)
      return this.vt = void 0, this.it = r8;
    if (r8 === b)
      return r8;
    if (typeof r8 != "string")
      throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (r8 === this.it)
      return this.vt;
    this.it = r8;
    const s22 = [r8];
    return s22.raw = s22, this.vt = { _$litType$: this.constructor.resultType, strings: s22, values: [] };
  }
};
e33.directiveName = "unsafeHTML", e33.resultType = 1;
var o11 = e4(e33);
var t32 = class extends e33 {
};
t32.directiveName = "unsafeSVG", t32.resultType = 2;
var o22 = e4(t32);
var parser = new DOMParser();
var SlIcon = class extends s4 {
  constructor() {
    super(...arguments);
    this.svg = "";
    this.label = "";
    this.library = "default";
  }
  connectedCallback() {
    super.connectedCallback();
    watchIcon(this);
  }
  firstUpdated() {
    this.setIcon();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    unwatchIcon(this);
  }
  getUrl() {
    const library2 = getIconLibrary(this.library);
    if (this.name && library2) {
      return library2.resolver(this.name);
    }
    return this.src;
  }
  redraw() {
    this.setIcon();
  }
  async setIcon() {
    var _a;
    const library2 = getIconLibrary(this.library);
    const url = this.getUrl();
    if (url) {
      try {
        const file = await requestIcon(url);
        if (url !== this.getUrl()) {
          return;
        } else if (file.ok) {
          const doc = parser.parseFromString(file.svg, "text/html");
          const svgEl = doc.body.querySelector("svg");
          if (svgEl !== null) {
            (_a = library2 == null ? void 0 : library2.mutator) == null ? void 0 : _a.call(library2, svgEl);
            this.svg = svgEl.outerHTML;
            emit(this, "sl-load");
          } else {
            this.svg = "";
            emit(this, "sl-error");
          }
        } else {
          this.svg = "";
          emit(this, "sl-error");
        }
      } catch (e42) {
        emit(this, "sl-error");
      }
    } else if (this.svg.length > 0) {
      this.svg = "";
    }
  }
  handleChange() {
    this.setIcon();
  }
  render() {
    const hasLabel = typeof this.label === "string" && this.label.length > 0;
    return $` <div
      part="base"
      class="icon"
      role=${l7(hasLabel ? "img" : void 0)}
      aria-label=${l7(hasLabel ? this.label : void 0)}
      aria-hidden=${l7(hasLabel ? void 0 : "true")}
    >
      ${o22(this.svg)}
    </div>`;
  }
};
SlIcon.styles = icon_styles_default;
__decorateClass([
  t4()
], SlIcon.prototype, "svg", 2);
__decorateClass([
  e5()
], SlIcon.prototype, "name", 2);
__decorateClass([
  e5()
], SlIcon.prototype, "src", 2);
__decorateClass([
  e5()
], SlIcon.prototype, "label", 2);
__decorateClass([
  e5()
], SlIcon.prototype, "library", 2);
__decorateClass([
  watch("name"),
  watch("src"),
  watch("library")
], SlIcon.prototype, "setIcon", 1);
SlIcon = __decorateClass([
  n5("sl-icon")
], SlIcon);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.IVOHDN3H.js
var hasFocusVisible = (() => {
  const style = document.createElement("style");
  let isSupported;
  try {
    document.head.appendChild(style);
    style.sheet.insertRule(":focus-visible { color: inherit }");
    isSupported = true;
  } catch (e10) {
    isSupported = false;
  } finally {
    style.remove();
  }
  return isSupported;
})();
var focusVisibleSelector = o(hasFocusVisible ? ":focus-visible" : ":focus");

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.FE67GRYM.js
var icon_button_styles_default = r`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button${focusVisibleSelector} {
    box-shadow: var(--sl-focus-ring);
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BN5JWAGI.js
var SlIconButton = class extends s4 {
  constructor() {
    super(...arguments);
    this.label = "";
    this.disabled = false;
  }
  render() {
    const isLink = this.href ? true : false;
    const interior = $`
      <sl-icon
        name=${l7(this.name)}
        library=${l7(this.library)}
        src=${l7(this.src)}
        aria-hidden="true"
      ></sl-icon>
    `;
    return isLink ? $`
          <a
            part="base"
            class="icon-button"
            href=${l7(this.href)}
            target=${l7(this.target)}
            download=${l7(this.download)}
            rel=${l7(this.target ? "noreferrer noopener" : void 0)}
            role="button"
            aria-disabled=${this.disabled ? "true" : "false"}
            aria-label="${this.label}"
            tabindex=${this.disabled ? "-1" : "0"}
          >
            ${interior}
          </a>
        ` : $`
          <button
            part="base"
            class=${o5({
      "icon-button": true,
      "icon-button--disabled": this.disabled
    })}
            ?disabled=${this.disabled}
            type="button"
            aria-label=${this.label}
          >
            ${interior}
          </button>
        `;
  }
};
SlIconButton.styles = icon_button_styles_default;
__decorateClass([
  i22(".icon-button")
], SlIconButton.prototype, "button", 2);
__decorateClass([
  e5()
], SlIconButton.prototype, "name", 2);
__decorateClass([
  e5()
], SlIconButton.prototype, "library", 2);
__decorateClass([
  e5()
], SlIconButton.prototype, "src", 2);
__decorateClass([
  e5()
], SlIconButton.prototype, "href", 2);
__decorateClass([
  e5()
], SlIconButton.prototype, "target", 2);
__decorateClass([
  e5()
], SlIconButton.prototype, "download", 2);
__decorateClass([
  e5()
], SlIconButton.prototype, "label", 2);
__decorateClass([
  e5({ type: Boolean, reflect: true })
], SlIconButton.prototype, "disabled", 2);
SlIconButton = __decorateClass([
  n5("sl-icon-button")
], SlIconButton);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZCXSKGAA.js
var tooltip_styles_default = r`
  ${component_styles_default}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip-target {
    display: contents;
  }

  .tooltip-positioner {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    pointer-events: none;
  }

  .tooltip-positioner[data-placement^='top'] .tooltip {
    transform-origin: bottom;
  }

  .tooltip-positioner[data-placement^='bottom'] .tooltip {
    transform-origin: top;
  }

  .tooltip-positioner[data-placement^='left'] .tooltip {
    transform-origin: right;
  }

  .tooltip-positioner[data-placement^='right'] .tooltip {
    transform-origin: left;
  }

  .tooltip__content {
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
  }

  .tooltip__arrow {
    position: absolute;
    background: var(--sl-tooltip-background-color);
    width: calc(var(--sl-tooltip-arrow-size) * 2);
    height: calc(var(--sl-tooltip-arrow-size) * 2);
    transform: rotate(45deg);
    z-index: -1;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.MDVLR3AN.js
var SlTooltip = class extends s4 {
  constructor() {
    super(...arguments);
    this.content = "";
    this.placement = "top";
    this.disabled = false;
    this.distance = 10;
    this.open = false;
    this.skidding = 0;
    this.trigger = "hover focus";
    this.hoist = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.updateComplete.then(() => {
      this.addEventListener("blur", this.handleBlur, true);
      this.addEventListener("focus", this.handleFocus, true);
      this.addEventListener("click", this.handleClick);
      this.addEventListener("keydown", this.handleKeyDown);
      this.addEventListener("mouseover", this.handleMouseOver);
      this.addEventListener("mouseout", this.handleMouseOut);
      this.target = this.getTarget();
    });
  }
  async firstUpdated() {
    this.tooltip.hidden = !this.open;
    if (this.open) {
      await this.updateComplete;
      this.updatePositioner();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("blur", this.handleBlur, true);
    this.removeEventListener("focus", this.handleFocus, true);
    this.removeEventListener("click", this.handleClick);
    this.removeEventListener("keydown", this.handleKeyDown);
    this.removeEventListener("mouseover", this.handleMouseOver);
    this.removeEventListener("mouseout", this.handleMouseOut);
    this.stopPositioner();
  }
  async show() {
    if (this.open) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "sl-after-show");
  }
  async hide() {
    if (!this.open) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "sl-after-hide");
  }
  getTarget() {
    const target = [...this.children].find((el) => el.tagName.toLowerCase() !== "style" && el.getAttribute("slot") !== "content");
    if (!target) {
      throw new Error("Invalid tooltip target: no child element was found.");
    }
    return target;
  }
  handleBlur() {
    if (this.hasTrigger("focus")) {
      this.hide();
    }
  }
  handleClick() {
    if (this.hasTrigger("click")) {
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
    }
  }
  handleFocus() {
    if (this.hasTrigger("focus")) {
      this.show();
    }
  }
  handleKeyDown(event) {
    if (this.open && event.key === "Escape") {
      event.stopPropagation();
      this.hide();
    }
  }
  handleMouseOver() {
    if (this.hasTrigger("hover")) {
      const delay = parseDuration(getComputedStyle(this).getPropertyValue("--show-delay"));
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = window.setTimeout(() => void this.show(), delay);
    }
  }
  handleMouseOut() {
    if (this.hasTrigger("hover")) {
      const delay = parseDuration(getComputedStyle(this).getPropertyValue("--hide-delay"));
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = window.setTimeout(() => void this.hide(), delay);
    }
  }
  async handleOpenChange() {
    if (this.disabled) {
      return;
    }
    if (this.open) {
      emit(this, "sl-show");
      await stopAnimations(this.tooltip);
      this.startPositioner();
      this.tooltip.hidden = false;
      const { keyframes, options } = getAnimation(this, "tooltip.show");
      await animateTo(this.tooltip, keyframes, options);
      emit(this, "sl-after-show");
    } else {
      emit(this, "sl-hide");
      await stopAnimations(this.tooltip);
      const { keyframes, options } = getAnimation(this, "tooltip.hide");
      await animateTo(this.tooltip, keyframes, options);
      this.tooltip.hidden = true;
      this.stopPositioner();
      emit(this, "sl-after-hide");
    }
  }
  handleOptionsChange() {
    this.updatePositioner();
  }
  handleDisabledChange() {
    if (this.disabled && this.open) {
      this.hide();
    }
  }
  hasTrigger(triggerType) {
    const triggers = this.trigger.split(" ");
    return triggers.includes(triggerType);
  }
  startPositioner() {
    this.stopPositioner();
    this.updatePositioner();
    this.positionerCleanup = autoUpdate(this.target, this.positioner, this.updatePositioner.bind(this));
  }
  updatePositioner() {
    if (!this.open || !this.target || !this.positioner) {
      return;
    }
    computePosition2(this.target, this.positioner, {
      placement: this.placement,
      middleware: [
        offset({ mainAxis: this.distance, crossAxis: this.skidding }),
        flip(),
        shift(),
        arrow({
          element: this.arrow,
          padding: 10
        })
      ],
      strategy: this.hoist ? "fixed" : "absolute"
    }).then(({ x: x3, y: y3, middlewareData, placement }) => {
      const arrowX = middlewareData.arrow.x;
      const arrowY = middlewareData.arrow.y;
      const staticSide = { top: "bottom", right: "left", bottom: "top", left: "right" }[placement.split("-")[0]];
      this.positioner.setAttribute("data-placement", placement);
      Object.assign(this.positioner.style, {
        position: this.hoist ? "fixed" : "absolute",
        left: `${x3}px`,
        top: `${y3}px`
      });
      Object.assign(this.arrow.style, {
        left: typeof arrowX === "number" ? `${arrowX}px` : "",
        top: typeof arrowY === "number" ? `${arrowY}px` : "",
        right: "",
        bottom: "",
        [staticSide]: "calc(var(--sl-tooltip-arrow-size) * -1)"
      });
    });
  }
  stopPositioner() {
    if (this.positionerCleanup) {
      this.positionerCleanup();
      this.positionerCleanup = void 0;
      this.positioner.removeAttribute("data-placement");
    }
  }
  render() {
    return $`
      <div class="tooltip-target" aria-describedby="tooltip">
        <slot></slot>
      </div>

      <div class="tooltip-positioner">
        <div
          part="base"
          id="tooltip"
          class=${o5({
      tooltip: true,
      "tooltip--open": this.open
    })}
          role="tooltip"
          aria-hidden=${this.open ? "false" : "true"}
        >
          <div class="tooltip__arrow"></div>
          <div class="tooltip__content" aria-live=${this.open ? "polite" : "off"}>
            <slot name="content"> ${this.content} </slot>
          </div>
        </div>
      </div>
    `;
  }
};
SlTooltip.styles = tooltip_styles_default;
__decorateClass([
  i22(".tooltip-positioner")
], SlTooltip.prototype, "positioner", 2);
__decorateClass([
  i22(".tooltip")
], SlTooltip.prototype, "tooltip", 2);
__decorateClass([
  i22(".tooltip__arrow")
], SlTooltip.prototype, "arrow", 2);
__decorateClass([
  e5()
], SlTooltip.prototype, "content", 2);
__decorateClass([
  e5()
], SlTooltip.prototype, "placement", 2);
__decorateClass([
  e5({ type: Boolean, reflect: true })
], SlTooltip.prototype, "disabled", 2);
__decorateClass([
  e5({ type: Number })
], SlTooltip.prototype, "distance", 2);
__decorateClass([
  e5({ type: Boolean, reflect: true })
], SlTooltip.prototype, "open", 2);
__decorateClass([
  e5({ type: Number })
], SlTooltip.prototype, "skidding", 2);
__decorateClass([
  e5()
], SlTooltip.prototype, "trigger", 2);
__decorateClass([
  e5({ type: Boolean })
], SlTooltip.prototype, "hoist", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], SlTooltip.prototype, "handleOpenChange", 1);
__decorateClass([
  watch("content"),
  watch("distance"),
  watch("hoist"),
  watch("placement"),
  watch("skidding")
], SlTooltip.prototype, "handleOptionsChange", 1);
__decorateClass([
  watch("disabled")
], SlTooltip.prototype, "handleDisabledChange", 1);
SlTooltip = __decorateClass([
  n5("sl-tooltip")
], SlTooltip);
setDefaultAnimation("tooltip.show", {
  keyframes: [
    { opacity: 0, transform: "scale(0.8)" },
    { opacity: 1, transform: "scale(1)" }
  ],
  options: { duration: 150, easing: "ease" }
});
setDefaultAnimation("tooltip.hide", {
  keyframes: [
    { opacity: 1, transform: "scale(1)" },
    { opacity: 0, transform: "scale(0.8)" }
  ],
  options: { duration: 150, easing: "ease" }
});

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.LOYEL7IY.js
var r7 = (t8, ...e10) => ({ _$litStatic$: e10.reduce((e22, o13, r22) => e22 + ((t22) => {
  if (t22._$litStatic$ !== void 0)
    return t22._$litStatic$;
  throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t22}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
})(o13) + t8[r22 + 1], t8[0]) });
var i7 = /* @__PURE__ */ new Map();
var a5 = (t8) => (e10, ...o13) => {
  var r22;
  const a22 = o13.length;
  let l22, s22;
  const n10 = [], u3 = [];
  let c3, $22 = 0, v3 = false;
  for (; $22 < a22; ) {
    for (c3 = e10[$22]; $22 < a22 && (s22 = o13[$22], l22 = (r22 = s22) === null || r22 === void 0 ? void 0 : r22._$litStatic$) !== void 0; )
      c3 += l22 + e10[++$22], v3 = true;
    u3.push(s22), n10.push(c3), $22++;
  }
  if ($22 === a22 && n10.push(e10[a22]), v3) {
    const t22 = n10.join("$$lit$$");
    (e10 = i7.get(t22)) === void 0 && (n10.raw = n10, i7.set(t22, e10 = n10)), o13 = u3;
  }
  return t8(e10, ...o13);
};
var l8 = a5($);
var s9 = a5(y);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BIBTLNIT.js
var button_styles_default = r`
  ${component_styles_default}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label ::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default${focusVisibleSelector}:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary${focusVisibleSelector}:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success${focusVisibleSelector}:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral${focusVisibleSelector}:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning${focusVisibleSelector}:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger${focusVisibleSelector}:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
    box-shadow: var(--sl-focus-ring);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default${focusVisibleSelector}:not(.button--disabled) {
    border-color: var(--sl-color-primary-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary${focusVisibleSelector}:not(.button--disabled) {
    border-color: var(--sl-color-primary-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success${focusVisibleSelector}:not(.button--disabled) {
    border-color: var(--sl-color-success-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral${focusVisibleSelector}:not(.button--disabled) {
    border-color: var(--sl-color-neutral-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning${focusVisibleSelector}:not(.button--disabled) {
    border-color: var(--sl-color-warning-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger${focusVisibleSelector}:not(.button--disabled) {
    border-color: var(--sl-color-danger-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text${focusVisibleSelector}:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
    box-shadow: var(--sl-focus-ring);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    display: flex;
    align-items: center;
  }

  .button--caret .button__caret svg {
    width: 1em;
    height: 1em;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-left: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-left: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-right: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-right: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-right: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-left: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--focus, .sl-button-group__button--first, [variant='default']):not(:hover, :active, :focus))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.N2T2IJMA.js
var FormDataEventPolyfill = class extends Event {
  constructor(formData) {
    super("formdata");
    this.formData = formData;
  }
};
var FormDataPolyfill = class extends FormData {
  constructor(form) {
    super(form);
    this.form = form;
    form.dispatchEvent(new FormDataEventPolyfill(this));
  }
  append(name, value) {
    let input = this.form.elements[name];
    if (!input) {
      input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      this.form.appendChild(input);
    }
    if (this.has(name)) {
      const entries = this.getAll(name);
      const index = entries.indexOf(input.value);
      if (index !== -1) {
        entries.splice(index, 1);
      }
      entries.push(value);
      this.set(name, entries);
    } else {
      super.append(name, value);
    }
    input.value = value;
  }
};
function supportsFormDataEvent() {
  const form = document.createElement("form");
  let isSupported = false;
  document.body.append(form);
  form.addEventListener("submit", (event) => {
    new FormData(event.target);
    event.preventDefault();
  });
  form.addEventListener("formdata", () => isSupported = true);
  form.dispatchEvent(new Event("submit", { cancelable: true }));
  form.remove();
  return isSupported;
}
function polyfillFormData() {
  if (!window.FormData || supportsFormDataEvent()) {
    return;
  }
  window.FormData = FormDataPolyfill;
  window.addEventListener("submit", (event) => {
    if (!event.defaultPrevented) {
      new FormData(event.target);
    }
  });
}
if (document.readyState === "complete") {
  polyfillFormData();
} else {
  window.addEventListener("DOMContentLoaded", () => polyfillFormData());
}
var FormSubmitController = class {
  constructor(host, options) {
    (this.host = host).addController(this);
    this.options = __spreadValues({
      form: (input) => input.closest("form"),
      name: (input) => input.name,
      value: (input) => input.value,
      disabled: (input) => input.disabled,
      reportValidity: (input) => {
        return typeof input.reportValidity === "function" ? input.reportValidity() : true;
      }
    }, options);
    this.handleFormData = this.handleFormData.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  hostConnected() {
    document.addEventListener("formdata", this.handleFormData, { capture: true });
    document.addEventListener("submit", this.handleFormSubmit, { capture: true });
  }
  hostDisconnected() {
    document.removeEventListener("formdata", this.handleFormData, { capture: true });
    document.removeEventListener("submit", this.handleFormSubmit, { capture: true });
  }
  handleFormData(event) {
    const disabled = this.options.disabled(this.host);
    const name = this.options.name(this.host);
    const value = this.options.value(this.host);
    if (!disabled && typeof name === "string" && typeof value !== "undefined") {
      if (Array.isArray(value)) {
        value.forEach((val) => {
          event.formData.append(name, val.toString());
        });
      } else {
        event.formData.append(name, value.toString());
      }
    }
  }
  handleFormSubmit(event) {
    const form = this.options.form(this.host);
    const disabled = this.options.disabled(this.host);
    const reportValidity = this.options.reportValidity;
    if (event.target === form && !disabled && !(form == null ? void 0 : form.noValidate) && !reportValidity(this.host)) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }
  submit(submitter) {
    const form = this.options.form(this.host);
    if (form) {
      const button = document.createElement("button");
      button.type = "submit";
      button.style.position = "absolute";
      button.style.width = "0";
      button.style.height = "0";
      button.style.clipPath = "inset(50%)";
      button.style.overflow = "hidden";
      button.style.whiteSpace = "nowrap";
      if (submitter) {
        ["formaction", "formmethod", "formnovalidate", "formtarget"].forEach((attr) => {
          if (submitter.hasAttribute(attr)) {
            button.setAttribute(attr, submitter.getAttribute(attr));
          }
        });
      }
      form.append(button);
      button.click();
      button.remove();
    }
  }
};

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.CUSQ3RKJ.js
var SlButton = class extends s4 {
  constructor() {
    super(...arguments);
    this.formSubmitController = new FormSubmitController(this, {
      form: (input) => {
        if (input.hasAttribute("form")) {
          const doc = input.getRootNode();
          const formId = input.getAttribute("form");
          return doc.getElementById(formId);
        }
        return input.closest("form");
      }
    });
    this.hasSlotController = new HasSlotController(this, "[default]", "prefix", "suffix");
    this.hasFocus = false;
    this.variant = "default";
    this.size = "medium";
    this.caret = false;
    this.disabled = false;
    this.loading = false;
    this.outline = false;
    this.pill = false;
    this.circle = false;
    this.type = "button";
  }
  click() {
    this.button.click();
  }
  focus(options) {
    this.button.focus(options);
  }
  blur() {
    this.button.blur();
  }
  handleBlur() {
    this.hasFocus = false;
    emit(this, "sl-blur");
  }
  handleFocus() {
    this.hasFocus = true;
    emit(this, "sl-focus");
  }
  handleClick(event) {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    if (this.type === "submit") {
      this.formSubmitController.submit(this);
    }
  }
  render() {
    const isLink = this.href ? true : false;
    const tag = isLink ? r7`a` : r7`button`;
    return l8`
      <${tag}
        part="base"
        class=${o5({
      button: true,
      "button--default": this.variant === "default",
      "button--primary": this.variant === "primary",
      "button--success": this.variant === "success",
      "button--neutral": this.variant === "neutral",
      "button--warning": this.variant === "warning",
      "button--danger": this.variant === "danger",
      "button--text": this.variant === "text",
      "button--small": this.size === "small",
      "button--medium": this.size === "medium",
      "button--large": this.size === "large",
      "button--caret": this.caret,
      "button--circle": this.circle,
      "button--disabled": this.disabled,
      "button--focused": this.hasFocus,
      "button--loading": this.loading,
      "button--standard": !this.outline,
      "button--outline": this.outline,
      "button--pill": this.pill,
      "button--has-label": this.hasSlotController.test("[default]"),
      "button--has-prefix": this.hasSlotController.test("prefix"),
      "button--has-suffix": this.hasSlotController.test("suffix")
    })}
        ?disabled=${l7(isLink ? void 0 : this.disabled)}
        type=${this.type}
        name=${l7(isLink ? void 0 : this.name)}
        value=${l7(isLink ? void 0 : this.value)}
        href=${l7(this.href)}
        target=${l7(this.target)}
        download=${l7(this.download)}
        rel=${l7(this.target ? "noreferrer noopener" : void 0)}
        role="button"
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <span part="prefix" class="button__prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label" class="button__label">
          <slot></slot>
        </span>
        <span part="suffix" class="button__suffix">
          <slot name="suffix"></slot>
        </span>
        ${this.caret ? l8`
                <span part="caret" class="button__caret">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              ` : ""}
        ${this.loading ? l8`<sl-spinner></sl-spinner>` : ""}
      </${tag}>
    `;
  }
};
SlButton.styles = button_styles_default;
__decorateClass([
  i22(".button")
], SlButton.prototype, "button", 2);
__decorateClass([
  t4()
], SlButton.prototype, "hasFocus", 2);
__decorateClass([
  e5({ reflect: true })
], SlButton.prototype, "variant", 2);
__decorateClass([
  e5({ reflect: true })
], SlButton.prototype, "size", 2);
__decorateClass([
  e5({ type: Boolean, reflect: true })
], SlButton.prototype, "caret", 2);
__decorateClass([
  e5({ type: Boolean, reflect: true })
], SlButton.prototype, "disabled", 2);
__decorateClass([
  e5({ type: Boolean, reflect: true })
], SlButton.prototype, "loading", 2);
__decorateClass([
  e5({ type: Boolean, reflect: true })
], SlButton.prototype, "outline", 2);
__decorateClass([
  e5({ type: Boolean, reflect: true })
], SlButton.prototype, "pill", 2);
__decorateClass([
  e5({ type: Boolean, reflect: true })
], SlButton.prototype, "circle", 2);
__decorateClass([
  e5()
], SlButton.prototype, "type", 2);
__decorateClass([
  e5()
], SlButton.prototype, "name", 2);
__decorateClass([
  e5()
], SlButton.prototype, "value", 2);
__decorateClass([
  e5()
], SlButton.prototype, "href", 2);
__decorateClass([
  e5()
], SlButton.prototype, "target", 2);
__decorateClass([
  e5()
], SlButton.prototype, "download", 2);
__decorateClass([
  e5()
], SlButton.prototype, "form", 2);
__decorateClass([
  e5({ attribute: "formaction" })
], SlButton.prototype, "formAction", 2);
__decorateClass([
  e5({ attribute: "formmethod" })
], SlButton.prototype, "formMethod", 2);
__decorateClass([
  e5({ attribute: "formnovalidate", type: Boolean })
], SlButton.prototype, "formNoValidate", 2);
__decorateClass([
  e5({ attribute: "formtarget" })
], SlButton.prototype, "formTarget", 2);
SlButton = __decorateClass([
  n5("sl-button")
], SlButton);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.AMWHV6KC.js
var spinner_styles_default = r`
  ${component_styles_default}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
    mix-blend-mode: multiply;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.FTWX6OPR.js
var SlSpinner = class extends s4 {
  render() {
    return $`
      <svg part="base" class="spinner" role="status">
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
  }
};
SlSpinner.styles = spinner_styles_default;
SlSpinner = __decorateClass([
  n5("sl-spinner")
], SlSpinner);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.R2YZVUVK.js
var menu_styles_default = r`
  ${component_styles_default}

  :host {
    display: block;
  }

  .menu {
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    background: var(--sl-panel-background-color);
    padding: var(--sl-spacing-x-small) 0;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7Z6S4O4Z.js
var SlMenu = class extends s4 {
  constructor() {
    super(...arguments);
    this.typeToSelectString = "";
  }
  firstUpdated() {
    this.setAttribute("role", "menu");
  }
  getAllItems(options = { includeDisabled: true }) {
    return [...this.defaultSlot.assignedElements({ flatten: true })].filter((el) => {
      if (el.getAttribute("role") !== "menuitem") {
        return false;
      }
      if (!options.includeDisabled && el.disabled) {
        return false;
      }
      return true;
    });
  }
  getCurrentItem() {
    return this.getAllItems({ includeDisabled: false }).find((i23) => i23.getAttribute("tabindex") === "0");
  }
  setCurrentItem(item) {
    const items = this.getAllItems({ includeDisabled: false });
    const activeItem = item.disabled ? items[0] : item;
    items.forEach((i23) => {
      i23.setAttribute("tabindex", i23 === activeItem ? "0" : "-1");
    });
  }
  typeToSelect(event) {
    var _a;
    const items = this.getAllItems({ includeDisabled: false });
    clearTimeout(this.typeToSelectTimeout);
    this.typeToSelectTimeout = window.setTimeout(() => this.typeToSelectString = "", 1e3);
    if (event.key === "Backspace") {
      if (event.metaKey || event.ctrlKey) {
        this.typeToSelectString = "";
      } else {
        this.typeToSelectString = this.typeToSelectString.slice(0, -1);
      }
    } else {
      this.typeToSelectString += event.key.toLowerCase();
    }
    if (!hasFocusVisible) {
      items.forEach((item) => item.classList.remove("sl-focus-invisible"));
    }
    for (const item of items) {
      const slot = (_a = item.shadowRoot) == null ? void 0 : _a.querySelector("slot:not([name])");
      const label = getTextContent(slot).toLowerCase().trim();
      if (label.startsWith(this.typeToSelectString)) {
        this.setCurrentItem(item);
        item.focus();
        break;
      }
    }
  }
  handleClick(event) {
    const target = event.target;
    const item = target.closest("sl-menu-item");
    if ((item == null ? void 0 : item.disabled) === false) {
      emit(this, "sl-select", { detail: { item } });
    }
  }
  handleKeyUp() {
    if (!hasFocusVisible) {
      const items = this.getAllItems();
      items.forEach((item) => {
        item.classList.remove("sl-focus-invisible");
      });
    }
  }
  handleKeyDown(event) {
    if (event.key === "Enter") {
      const item = this.getCurrentItem();
      event.preventDefault();
      item == null ? void 0 : item.click();
    }
    if (event.key === " ") {
      event.preventDefault();
    }
    if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
      const items = this.getAllItems({ includeDisabled: false });
      const activeItem = this.getCurrentItem();
      let index = activeItem ? items.indexOf(activeItem) : 0;
      if (items.length > 0) {
        event.preventDefault();
        if (event.key === "ArrowDown") {
          index++;
        } else if (event.key === "ArrowUp") {
          index--;
        } else if (event.key === "Home") {
          index = 0;
        } else if (event.key === "End") {
          index = items.length - 1;
        }
        if (index < 0) {
          index = items.length - 1;
        }
        if (index > items.length - 1) {
          index = 0;
        }
        this.setCurrentItem(items[index]);
        items[index].focus();
        return;
      }
    }
    this.typeToSelect(event);
  }
  handleMouseDown(event) {
    const target = event.target;
    if (target.getAttribute("role") === "menuitem") {
      this.setCurrentItem(target);
      if (!hasFocusVisible) {
        target.classList.add("sl-focus-invisible");
      }
    }
  }
  handleSlotChange() {
    const items = this.getAllItems({ includeDisabled: false });
    if (items.length > 0) {
      this.setCurrentItem(items[0]);
    }
  }
  render() {
    return $`
      <div
        part="base"
        class="menu"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @keyup=${this.handleKeyUp}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }
};
SlMenu.styles = menu_styles_default;
__decorateClass([
  i22(".menu")
], SlMenu.prototype, "menu", 2);
__decorateClass([
  i22("slot")
], SlMenu.prototype, "defaultSlot", 2);
SlMenu = __decorateClass([
  n5("sl-menu")
], SlMenu);

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.PWMZHGCP.js
var menu_item_styles_default = r`
  ${component_styles_default}

  :host {
    display: block;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    text-align: left;
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    color: var(--sl-color-neutral-400);
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix ::slotted(*) {
    margin-right: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix ::slotted(*) {
    margin-left: var(--sl-spacing-x-small);
  }

  :host(:focus) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'])) .menu-item,
  :host(${focusVisibleSelector}:not(.sl-focus-invisible):not([aria-disabled='true'])) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.XTJ7LSDZ.js
var SlMenuItem = class extends s4 {
  constructor() {
    super(...arguments);
    this.checked = false;
    this.value = "";
    this.disabled = false;
  }
  firstUpdated() {
    this.setAttribute("role", "menuitem");
  }
  handleCheckedChange() {
    this.setAttribute("aria-checked", this.checked ? "true" : "false");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  render() {
    return $`
      <div
        part="base"
        class=${o5({
      "menu-item": true,
      "menu-item--checked": this.checked,
      "menu-item--disabled": this.disabled,
      "menu-item--has-submenu": false
    })}
      >
        <span class="menu-item__check">
          <sl-icon name="check-lg" library="default" aria-hidden="true"></sl-icon>
        </span>

        <span part="prefix" class="menu-item__prefix">
          <slot name="prefix"></slot>
        </span>

        <span part="label" class="menu-item__label">
          <slot></slot>
        </span>

        <span part="suffix" class="menu-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span class="menu-item__chevron">
          <sl-icon name="chevron-right" library="default" aria-hidden="true"></sl-icon>
        </span>
      </div>
    `;
  }
};
SlMenuItem.styles = menu_item_styles_default;
__decorateClass([
  i22(".menu-item")
], SlMenuItem.prototype, "menuItem", 2);
__decorateClass([
  e5({ type: Boolean, reflect: true })
], SlMenuItem.prototype, "checked", 2);
__decorateClass([
  e5()
], SlMenuItem.prototype, "value", 2);
__decorateClass([
  e5({ type: Boolean, reflect: true })
], SlMenuItem.prototype, "disabled", 2);
__decorateClass([
  watch("checked")
], SlMenuItem.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled")
], SlMenuItem.prototype, "handleDisabledChange", 1);
SlMenuItem = __decorateClass([
  n5("sl-menu-item")
], SlMenuItem);

// assets/js/components/colorize-word/colorize-word.js
var import_javascript_color_gradient = __toESM(require_src(), 1);

// node_modules/lit-html/directive.js
var t7 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
var e9 = (t8) => (...e10) => ({ _$litDirective$: t8, values: e10 });
var i8 = class {
  constructor(t8) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t8, e10, i9) {
    this._$Ct = t8, this._$AM = e10, this._$Ci = i9;
  }
  _$AS(t8, e10) {
    return this.update(t8, e10);
  }
  update(t8, e10) {
    return this.render(...e10);
  }
};

// node_modules/lit-html/directives/class-map.js
var o12 = e9(class extends i8 {
  constructor(t8) {
    var i9;
    if (super(t8), t8.type !== t7.ATTRIBUTE || t8.name !== "class" || ((i9 = t8.strings) === null || i9 === void 0 ? void 0 : i9.length) > 2)
      throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t8) {
    return " " + Object.keys(t8).filter((i9) => t8[i9]).join(" ") + " ";
  }
  update(i9, [s10]) {
    var r8, o13;
    if (this.et === void 0) {
      this.et = /* @__PURE__ */ new Set(), i9.strings !== void 0 && (this.st = new Set(i9.strings.join(" ").split(/\s/).filter((t8) => t8 !== "")));
      for (const t8 in s10)
        s10[t8] && !((r8 = this.st) === null || r8 === void 0 ? void 0 : r8.has(t8)) && this.et.add(t8);
      return this.render(s10);
    }
    const e10 = i9.element.classList;
    this.et.forEach((t8) => {
      t8 in s10 || (e10.remove(t8), this.et.delete(t8));
    });
    for (const t8 in s10) {
      const i10 = !!s10[t8];
      i10 === this.et.has(t8) || ((o13 = this.st) === null || o13 === void 0 ? void 0 : o13.has(t8)) || (i10 ? (e10.add(t8), this.et.add(t8)) : (e10.remove(t8), this.et.delete(t8)));
    }
    return b2;
  }
});

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.WCLQWUBK.js
var visually_hidden_styles_default = r`
  ${component_styles_default}

  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`;

// node_modules/@shoelace-style/shoelace/dist/chunks/chunk.AH76SDKP.js
var SlVisuallyHidden = class extends s4 {
  render() {
    return $` <slot></slot> `;
  }
};
SlVisuallyHidden.styles = visually_hidden_styles_default;
SlVisuallyHidden = __decorateClass([
  n5("sl-visually-hidden")
], SlVisuallyHidden);

// assets/js/components/colorize-word/colorize-word.js
var COLORS = [
  "#e74c3c",
  "#e67e22",
  "#f1c40f",
  "#2ecc71",
  "#3498db",
  "#9b59b6",
  "#5b3256"
];
var ColorizeWord = class extends s8 {
  static get properties() {
    return {
      uppercase: { type: Boolean }
    };
  }
  static get styles() {
    return r4`
      .split-word {
        display: flex;
      }
      .split-word span {
        text-shadow: 2px 2px var(--color);
      }
      .split-word span:not(:first-child) {
        margin-left: var(--sl-spacing-2x-small);
      }

      .uppercase {
        text-transform: uppercase;
      }
    `;
  }
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
    const text = this.textContent;
    this._setText(text);
  }
  render() {
    return $2`
      <span
        class=${o12({ "split-word": true, uppercase: this.uppercase })}
        aria-hidden="true"
      >
        ${this.letters.map((letter, index) => {
      return $2`
            <span style=${`--color: ${this.colors[index]}`}> ${letter} </span>
          `;
    })}
        <sl-visually-hidden>
          <slot @slotchange=${this._handleSlotChange}></slot>
        </sl-visually-hidden>
      </span>
    `;
  }
  _setText(text) {
    this.letters = text.split("");
    this.colors = new import_javascript_color_gradient.default().setColorGradient(...COLORS).setMidpoint(this.letters.length).getColors();
  }
};
customElements.define("colorize-word", ColorizeWord);

// assets/js/components/star-sheet/star-sheet.js
var StarSheet = class extends s8 {
  static get properties() {
    return {
      seed: { type: Number },
      starCount: { type: Number, attribure: "star-count" },
      stars: { type: Array }
    };
  }
  constructor() {
    super();
    this.seed = Date.now();
    this.rng = seededPseudoRandom(this.seed);
  }
  firstUpdated() {
    this.canvas = this.shadowRoot.querySelector("canvas");
    this.context = this.canvas.getContext("2d");
    this.context.scale(window.devicePixelRatio, window.devicePixelRatio);
    this.canvas.width = this.offsetWidth * window.devicePixelRatio;
    this.canvas.height = this.offsetHeight * window.devicePixelRatio;
    this.canvas.style.width = `${this.offsetWidth}px`;
    this.canvas.style.height = `${this.offsetHeight}px`;
    this._generateStars();
    this.renderStars();
  }
  updated(changedProperties) {
    if (changedProperties.has("starCount")) {
      this.renderStars();
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        this.canvas.width = this.offsetWidth * window.devicePixelRatio;
        this.canvas.height = this.offsetHeight * window.devicePixelRatio;
        this.canvas.style.width = `${this.offsetWidth}px`;
        this.canvas.style.height = `${this.offsetHeight}px`;
        this.starCount = this.offsetWidth / 100 * 20;
        this.rng = seededPseudoRandom(this.seed);
        this._generateStars();
        requestAnimationFrame(() => {
          this.renderStars();
        });
      }
    });
    this.resizeObserver.observe(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver.unobserve(this);
  }
  render() {
    return $2` <canvas></canvas> `;
  }
  renderStars() {
    this.context.fillStyle = "#000";
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillStyle = "#fff";
    this.stars.forEach((star) => {
      this.context.beginPath();
      this.context.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
      this.context.fill();
    });
  }
  _generateStars() {
    this.starCount = this.offsetWidth / 100 * 2;
    this.stars = [];
    for (let i9 = 0; i9 < this.starCount; i9++) {
      this.stars.push({
        x: this.rng.next() * this.canvas.width,
        y: this.rng.next() * this.canvas.height,
        radius: this.rng.next() * 5
      });
    }
  }
};
function seededPseudoRandom(initSeed) {
  let seed = initSeed % 2147483647;
  if (seed <= 0)
    seed += 2147483646;
  function next() {
    return seed = seed * 16807 % 2147483647;
  }
  return {
    next() {
      return (next() - 1) / 2147483646;
    }
  };
}
customElements.define("star-sheet", StarSheet);

// assets/js/components/page-header/page-header.js
var PageHeader = class extends s8 {
  static get properties() {
    return {
      title: { type: String },
      noActions: { type: Boolean, attribute: "no-actions" }
    };
  }
  static get styles() {
    return r4`
      :host {
        --font-family: 'Fredoka', var(--sl-font-sans), sans-serif;
        --header-title-font-size: var(--sl-font-size-2x-large);
      }

      .header {
        background: var(--sl-color-neutral-0);
        position: sticky;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;

        border-bottom: 1px solid var(--sl-color-neutral-300);
        padding: var(--sl-spacing-x-small) var(--sl-spacing-small);

        z-index: 1;
      }

      .header-title {
        margin: 0;
        font-family: var(--font-family);
        font-size: var(--header-title-font-size);
        line-height: var(--sl-line-height-normal);
        font-weight: var(--sl-font-weight-semibold);
        color: var(--sl-color-neutral-900);
      }

      .header-title ::slotted(a) {
        text-decoration: none;
        color: var(--sl-color-neutral-900);
      }

      .header-social {
        display: flex;
        align-items: center;
      }

      colorize-word {
        font-family: 'Fredoka', var(--sl-font-sans);
      }

      star-sheet {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        z-index: -1;
      }

      sl-dropdown {
        margin-right: var(--sl-spacing-2x-small);
      }

      sl-menu {
        margin-top: var(--sl-spacing-2x-small);
      }
    `;
  }
  constructor() {
    super();
    this.title = "Page Title";
  }
  render() {
    return $2`
      <header class="header">
        <star-sheet></star-sheet>
        <h1 class="header-title">
          <slot name="title"></slot>
        </h1>
        ${this.noActions ? "" : $2` <nav class="header-social">
              <sl-dropdown>
                <sl-button slot="trigger" pill size="small" caret>
                  <sl-icon name="moon" label="Select theme"></sl-icon>
                </sl-button>
                <sl-menu
                  value="automatic"
                  @sl-select=${this._handleThemeChange}
                >
                  <sl-menu-item value="light">Light</sl-menu-item>
                  <sl-menu-item value="dark">Dark</sl-menu-item>
                  <sl-menu-item value="automatic">Automatic</sl-menu-item>
                </sl-menu>
              </sl-dropdown>

              <sl-tooltip content="Twitter">
                <sl-icon-button
                  name="twitter"
                  label="Twitter"
                  href="https://twitter.com/modfox"
                  target="_blank"
                ></sl-icon-button>
              </sl-tooltip>
              <sl-tooltip content="GitHub">
                <sl-icon-button
                  name="github"
                  label="GitHub"
                  href="https://github.com/willsonsmith/willsonsmith.com"
                  target="_blank"
                ></sl-icon-button>
              </sl-tooltip>
            </nav>`}
      </header>
    `;
  }
  _handleThemeChange(event) {
    const theme = event.detail.item.value;
    this.dispatchEvent(new CustomEvent("theme-change", { detail: { theme } }));
  }
};
customElements.define("page-header", PageHeader);

// extension/extension-script.js
setBasePath("./assets/vendor/shoelace/dist");
initializeExtensionScript();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

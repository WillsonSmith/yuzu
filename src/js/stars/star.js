"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Star = /** @class */ (function () {
    function Star(opacity, radiusMultiplier) {
        this.opacity = opacity;
        this.radius = Math.floor(radiusMultiplier * 7) + 1;
    }
    return Star;
}());
exports.default = Star;
//# sourceMappingURL=star.js.map
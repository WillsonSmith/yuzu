"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Prng = /** @class */ (function () {
    function Prng(seed) {
        this.initSeed(seed);
    }
    Prng.prototype.next = function () {
        return this.seed = this.seed * 16807 % 2147483647;
    };
    Prng.prototype.nextFloat = function () {
        return (this.next() - 1) / 2147483646;
    };
    Prng.prototype.initSeed = function (seed) {
        this.seed = seed % 2147483647;
        if (this.seed <= 0) {
            this.seed += 2147483646;
        }
        ;
    };
    return Prng;
}());
exports.default = Prng;
//# sourceMappingURL=prng.js.map
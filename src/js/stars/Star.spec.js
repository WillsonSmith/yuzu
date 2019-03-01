"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var assert = require("assert");
var Star_1 = require("./Star");
describe('Star', function () {
    describe('constructor', function () {
        it('should set opacity to given opacity', function () {
            var newStar = new Star_1.default(0.5, 0.5);
            assert.equal(0.5, newStar.opacity);
        });
        it('should have a radius of 8 times the radius multiplier given', function () {
            var newStar = new Star_1.default(0, 0.5);
            assert.equal(4, newStar.radius);
        });
    });
});
//# sourceMappingURL=Star.spec.js.map
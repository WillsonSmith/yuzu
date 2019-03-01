"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var sinon = require("sinon");
var assert = require("assert");
var StarSheet_1 = require("./StarSheet");
describe('StarSheet', function () {
    var Stars = null;
    var fakeCanvas = null;
    beforeEach(function (done) {
        function buildContextFunction() {
            var scale = sinon.spy();
            var beginPath = sinon.spy();
            var arc = sinon.spy();
            var fill = sinon.spy();
            return function () {
                return {
                    fillStyle: '',
                    scale: scale,
                    beginPath: beginPath,
                    arc: arc,
                    fill: fill,
                };
            };
        }
        ;
        fakeCanvas = function () {
            return {
                get offsetWidth() { return parseInt(this.style.width, 10); },
                get offsetHeight() { return parseInt(this.style.height, 10); },
                style: {
                    width: '300px',
                    height: '150px',
                },
                getContext: buildContextFunction(),
            };
        }();
        Stars = new StarSheet_1.default({
            canvas: fakeCanvas,
            numberOfStars: 100,
            startSeed: 10,
            height: 500,
            width: 500,
            ratio: 2,
        });
        done();
    });
    describe('constructor', function () {
        it('assigns values on construction', function () {
            assert.equal(Stars.seed, 10);
            assert.equal(Stars.width, 500);
            assert.equal(Stars.height, 500);
        });
        it('scales the canvas for pixel ratio', function () {
            assert(Stars.context.scale.calledWith(2, 2));
        });
        it('draws the stars', function () {
            assert.equal(Stars.context.beginPath.callCount, 100);
            assert.equal(Stars.context.arc.callCount, 100);
            assert.equal(Stars.context.fill.callCount, 100);
        });
    });
});
//# sourceMappingURL=StarSheet.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prng_1 = require("../helpers/prng");
var star_1 = require("./star");
var StarSheet = /** @class */ (function () {
    function StarSheet(_a) {
        var canvas = _a.canvas, numberOfStars = _a.numberOfStars, startSeed = _a.startSeed, width = _a.width, height = _a.height, ratio = _a.ratio;
        this.seed = startSeed;
        this.seededRng = new prng_1.default(this.seed);
        var pixelRatio = ratio || 1;
        this.canvas = canvas;
        canvas.width = width * pixelRatio;
        canvas.height = height * pixelRatio;
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        this.width = canvas.offsetWidth;
        this.height = canvas.offsetHeight;
        this.context = canvas.getContext('2d');
        this.context.scale(pixelRatio, pixelRatio);
        this.drawStars(numberOfStars);
    }
    StarSheet.prototype.createStar = function () {
        var star = new star_1.default(this.seededRng.nextFloat(), this.seededRng.nextFloat());
        return {
            star: star,
            properties: [
                star.radius + (this.seededRng.nextFloat() * this.width),
                star.radius + (this.seededRng.nextFloat() * this.height),
                star.radius * this.seededRng.nextFloat(),
                0,
                Math.PI * 2
            ],
        };
    };
    StarSheet.prototype.drawStars = function (number) {
        for (var star = 0; star < number; star++) {
            var starData = this.createStar();
            var context = this.context;
            context.beginPath();
            context.arc.apply(context, starData.properties.concat([false]));
            context.fillStyle = "rgba(255, 255, 255, " + starData.star.opacity + ")";
            context.fill();
        }
    };
    return StarSheet;
}());
exports.default = StarSheet;
//# sourceMappingURL=StarSheet.js.map
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var stars_1 = __webpack_require__(1);
var c = document.getElementById('stars');
var seed = Date.now();
var numberOfStars = (window.innerWidth / 100) * 20;
var stars = new stars_1["default"](c, numberOfStars, seed);
window.addEventListener('resize', function () {
    window.requestAnimationFrame(function () {
        stars = new stars_1["default"](c, numberOfStars, seed);
    });
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var prng_1 = __webpack_require__(3);
var Star = (function () {
    function Star(randomSeed) {
        if (randomSeed === void 0) { randomSeed = Date.now(); }
        var seededRng = new prng_1["default"](randomSeed);
        this.opacity = seededRng.nextFloat();
        this.radius = Math.floor(seededRng.nextFloat() * 7) + 1;
    }
    return Star;
}());
var StarSheet = (function () {
    function StarSheet(canvas, numberOfStars, startSeed) {
        this.seed = startSeed;
        this.seededRng = new prng_1["default"](this.seed);
        var pixelRatio = window.devicePixelRatio || 1;
        this.canvas = canvas;
        canvas.width = window.innerWidth * pixelRatio;
        canvas.height = window.innerHeight * pixelRatio;
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";
        this.width = canvas.offsetWidth;
        this.height = canvas.offsetHeight;
        this.context = canvas.getContext('2d');
        this.context.scale(pixelRatio, pixelRatio);
        this.drawStars(numberOfStars);
    }
    StarSheet.prototype.createStar = function () {
        var star = new Star(this.seed);
        return {
            star: star,
            properties: [
                star.radius + (this.seededRng.nextFloat() * this.width),
                star.radius + (this.seededRng.nextFloat() * this.height),
                star.radius * this.seededRng.nextFloat(),
                0,
                Math.PI * 2
            ]
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
exports["default"] = StarSheet;


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Prng = (function () {
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
exports["default"] = Prng;


/***/ })
/******/ ]);
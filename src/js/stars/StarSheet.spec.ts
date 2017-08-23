import 'mocha';
import assert = require('assert');

import StarSheet from './StarSheet';

describe('StarSheet', () => {
  let Stars = null;
  let fakeCanvas = null;

  beforeEach((done) => {

    fakeCanvas = function() {
      return {
        get offsetWidth() { return parseInt(this.style.width, 10) },
        get offsetHeight() { return parseInt(this.style.height, 10) },
        style: {
          width: '300px',
          height: '150px',
        },
        getContext() {
          return {
            fillStyle: '',
            scale(scaleX, scaleY) {},
            beginPath() {},
            arc() {},
            fill() {},
          }
        }
      }
    }

    Stars = new StarSheet({
      canvas:fakeCanvas() as any,
      numberOfStars: 100,
      startSeed: 10,
      height: 500,
      width: 500,
      ratio: 2,
    });

    done();
  });

  describe('constructor', () => {
    it('assigns values on construction', () => {
      assert.equal(Stars.seed, 10);
      assert.equal(Stars.width, 500)
      assert.equal(Stars.height, 500)
    });
  });
});

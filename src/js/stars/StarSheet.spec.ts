import 'mocha';
import assert = require('assert');

import StarSheet from './StarSheet';

describe('StarSheet', () => {
  let Stars = null;
  let window = null;

  beforeEach((done) => {
    const fakeCanvas = {
      width: 300,
      height: 150,
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
    };

    Stars = new StarSheet({
      canvas:fakeCanvas as any,
      numberOfStars: 100,
      startSeed: 10,
      height: 500,
      width: 500,
      ratio: 2,
    });

    done();
  });

  describe('constructor', () => {
    it('assigns the seed, rng, canvas, width, height, and context to the instance', () => {
      assert.equal(10, Stars.seed);
    });
  });
});

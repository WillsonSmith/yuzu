import 'mocha';
import assert = require('assert');

import StarSheet from './StarSheet';

describe('StarSheet', () => {
  let Stars = null;
  beforeEach((done) => {
    const canvas = document.createElement('canvas');
    Stars = new StarSheet(canvas, 100, 10);
  });
  describe('constructor', () => {
    it('assigns the seed, rng, canvas, width, height, and context to the instance', () => {
      assert.equal(10, Stars.seed);
    });
  });
});

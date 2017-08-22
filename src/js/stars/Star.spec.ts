import 'assert';
import Star from './Star';

describe('Star', () => {
  describe('constructor', () => {
    it('should set opacity to given opacity', () => {
      const newStar = new Star(0.5, 0.5);
      assert.equal(0.5, newStar.opacity);
    });
  });
});

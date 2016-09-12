'use strict';

const assert = require('assert'),
      swapInPlace = require('./swap-in-place');

describe('swapInPlace', function() {
  it('should be a function', function() {
    assert.equal(typeof swapInPlace, 'function');
  });

  it('should swap array elements in place', function() {
    let array = [1, 2, 3];
    swapInPlace(array, 0, 2);
    assert.deepStrictEqual(array, [3, 2, 1]);
  });

  it('should return undefined', function() {
    let array = [1, 2, 3],
    returnedValue = swapInPlace(array, 0, 2);
    assert.strictEqual(returnedValue, undefined);
  });
});

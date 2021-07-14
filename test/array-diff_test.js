const difference = require('../JavaScript/6kyu_array-diff');
const assert = require('assert');

// arrayDiff test

describe('arrayDiff', function() {
    it('identifies difference between two arrays', function() {
      assert.deepEqual(difference.arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
      assert.deepEqual(difference.arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
      assert.deepEqual(difference.arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
      assert.deepEqual(difference.arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
      assert.deepEqual(difference.arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
      assert.deepEqual(difference.arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
    });
}); 
const test = require('../JavaScript/6kyu_is-integer-array');
const assert = require('assert');

describe("isIntArray", () => {
    it("returns true if all elements in an array are integers or floats", () => {
        assert.deepEqual(test.isIntArray([]), true, "Input: []");
        assert.deepEqual(test.isIntArray([1, 2, 3, 4]), true, "Input: [1, 2, 3, 4]");
        assert.deepEqual(test.isIntArray([1, 2, 3, NaN]), false, "Input: [1, 2, 3, NaN]");
    });
  });
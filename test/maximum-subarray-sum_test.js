const test = require('../JavaScript/5kyu_maximum-subarray-sum');
const assert = require('assert');

describe('maxSequence', () => {
    it('finds the highest max subarray sum', () => {
        assert.equal(test.maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
        assert.equal(test.maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4]), 0);
        assert.equal(test.maxSequence([1, 2, 3, 4]), 10);
    });
});
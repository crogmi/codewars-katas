const test = require('../JavaScript/6kyu_detect-pangram');
const assert = require('assert');

describe('isPangram', () => {
    it('properly detects if string is pangram', () => {
        assert.equal(test.isPangram('The quick brown fox jumps over the lazy dog.'), true);
        assert.equal(test.isPangram('This is not a pangram.'), false);
    });
});
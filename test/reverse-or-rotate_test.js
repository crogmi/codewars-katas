const test = require('../JavaScript/6kyu_reverse-or-rotate');
const assert = require('assert');

describe('reverse or rotate', () => {
    it('properly reverses or rotates based on chunks of string', () => {
        assert.equal(test.revrot('733049910872815764', 5), '330479108928157');
        assert.equal(test.revrot('1234', 5), '');
        assert.equal(test.revrot('1234', 0), '');
    })
})
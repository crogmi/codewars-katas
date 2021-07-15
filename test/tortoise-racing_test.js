const test = require('../JavaScript/6kyu_tortoise-racing');
const assert = require('assert');

const actual1 = test.race(720, 850, 70);
const actual2 = test.race(80, 91, 37);
const actual3 = test.race(80, 100, 40);

const expected1 = [0, 32, 18];
const expected2 = [3, 21, 49];
const expected3 = [2, 0, 0];

describe('tortoise racing', () => {
    it('displays accurate time it takes for second tortoise to reach the first', () => {
        assert.deepEqual(actual1, expected1);
        assert.deepEqual(actual2, expected2);
        assert.deepEqual(actual3, expected3);
    });
});
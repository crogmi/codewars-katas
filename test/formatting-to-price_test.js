const test = require('../JavaScript/5kyu_formatting-as-price');
const assert = require('assert');

describe('numberToPrice' , () => {
    it('properly converts number to price format', () => {
        assert.equal(test.numberToPrice(1000000.050), '1,000,000.05');
        assert.equal(test.numberToPrice(13422.129), '13,422.12');
        assert.equal(test.numberToPrice(100.5), '100.50');
    });
});
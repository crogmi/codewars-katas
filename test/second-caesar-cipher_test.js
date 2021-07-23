const test = require('../JavaScript/5kyu_second-caesar-cipher');
const assert = require('assert');

const message = "I should have known that you would have a perfect answer for me!!!";
const encoded = ["ijJ tipvme ibw", "f lopxo uibu z", "pv xpvme ibwf ", "b qfsgfdu botx", "fs gps nf!!!"];

describe('Caesar cipher', () => {
    it('properly encodes string based on provided shift value', () => {
        assert.deepEqual(test.encodeStr(message, 1), encoded);
    });
    it('properly decodes an encoded string', () => {
        assert.deepEqual(test.decode(encoded), message);
    });
});
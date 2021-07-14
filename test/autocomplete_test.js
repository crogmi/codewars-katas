const test =  require('../JavaScript/6kyu_autocomplete');
const assert = require('assert');

const actual1 = test.autocomplete('ai', ['airplane','airport','apple','ball']);
const actual2 = test.autocomplete('wi', ['window','will','where','wall']);
const actual3 = test.autocomplete('n~!@#$%^&*()_+1234567890ope',['Nopesville','Green','Narnia']);

describe('autocomplete', function() {
    it ('returns an array that only contains strings that start with the input', function() {
        assert.deepEqual(actual1, ['airplane', 'airport']);
        assert.deepEqual(actual2, ['window', 'will']);
        assert.deepEqual(actual3, ['Nopesville']);
    });
});
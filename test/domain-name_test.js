const test = require('../JavaScript/5kyu_domain-name');
const assert = require('assert');

describe('domainName', () => {
    it('extracts domain name from the URL', () => {
        assert.equal(test.domainName('http://google.com'), 'google');
        assert.equal(test.domainName('http://google.co.jp'), 'google');
        assert.equal(test.domainName('www.xakep.ru'), 'xakep');
        assert.equal(test.domainName('https://youtube.com'), 'youtube');
    });
});
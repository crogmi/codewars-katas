const fileNameExtractor = require('../JavaScript/6kyu_extract-file-name');
const assert = require('assert');

describe('fileNameExtractor', function() {
    it('extracts a simplified file name without extensions', function() {
        assert.equal(fileNameExtractor.extractFileName("1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION"),"FILE_NAME.EXTENSION");
        assert.equal(fileNameExtractor.extractFileName("1_FILE_NAME.EXTENSION.OTHEREXTENSIONadasdassdassds34"),"FILE_NAME.EXTENSION");
        assert.equal(fileNameExtractor.extractFileName("1_FILE_NAM-E.EXTENSION.OTHEREXTENSIONadasdassdassds34"), "FILE_NAM-E.EXTENSION", 'please verify that you are handling well character - as part of the name');
    });
});
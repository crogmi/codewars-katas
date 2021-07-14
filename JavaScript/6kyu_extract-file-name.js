/*

You have to extract a portion of the file name as follows:

Assume it will start with date represented as long number
Followed by an underscore
You'll have then a filename with an extension
it will always have an extra extension at the end

Acceptable characters for random tests:
abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789

*/

function  extractFileName(dirtyFileName) {
  const arr = dirtyFileName.split('_')
                            .slice(1)
                            .join('_')
                            .split('.');
  arr.pop();
  return arr.join('.')
}

extractFileName("1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION");

module.exports.extractFileName = extractFileName;
/*

Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}
returns true / True if every element in an array is an integer or a float with no decimals.
returns true / True if array is empty.
returns false / False for every other input.

*/



function isIntArray(arr) {
    if (!Array.isArray(arr) || arr.includes(NaN) || arr.includes(null) || arr.includes(undefined)) {
        return false;
    }

    const array = arr.filter(x => {
        if (typeof x !== 'number' || x % 1 !== 0) {
            return x;
        }
    });

    return array.length === 0 ? true : false;
}

isIntArray([undefined]);

module.exports.isIntArray = isIntArray;
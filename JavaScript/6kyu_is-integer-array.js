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
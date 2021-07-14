function comp(array1, array2) {
    if (array1 === null || array2 === null) {
        return false;
    }
    
    const arr = array1.map(x => Math.pow(x, 2));
    const result1 = arr.map(x => arr.filter(y => x === y).length === array2.filter(z => x === z).length ? true : false);
    const result2 = array2.map(x => arr.filter(y => x === y).length === array2.filter(z => x === z).length ? true : false);
    if (result1.includes(false) || result2.includes(false)) {
        return false;
    } else {
        return true;
    }
}

const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
const a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

comp(a1, a2);
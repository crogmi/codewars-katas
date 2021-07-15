/*

The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

*/


function revrot(str, sz) {
    
    if (sz === 0 || sz > str.length) {
        return '';
    }

    const arr = str.split('');
    const result = [];
    let temp = [];
    

    for (let x = 0; x < arr.length; x++) {
        temp.push(arr[x]);
        if (temp.length >= sz) {
            let sum = temp.reduce((x, y) => { 
                return parseInt(x) + parseInt(y) 
            });
            if (sum % 2 === 0) {
                result.push(temp.reverse());
                temp = [];
            } else {
                let value = temp.shift();
                temp.push(value);
                result.push(temp);
                temp = [];
            }
        }
    }

    return result.reduce((x, y) => x.concat(y), [])
                 .join('');
}

revrot('733049910872815764', 5);

module.exports.revrot = revrot;
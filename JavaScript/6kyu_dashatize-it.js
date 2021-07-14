/* 
Description:
Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return an empty value.
*/

function dashatize(num) {
    if(num === NaN) {
      return num;
    }
    let arr = Math.abs(num)
                  .toString()
                  .split('')
                  .map(x => x % 2 === 1 ? ['-', x, '-'] : x)
                  .reduce((y, z) => y.concat(z), []);
    for (let i = 0; i < arr.length; i++) {
      if (i === 0 && arr[i] === '-' || i === arr.length-1 && arr[i] === '-') {
        arr.splice(i, 1);
      } else if (arr[i] === '-' && arr[i-1] === '-') {
        arr.splice(i, 1);
      }
    }
    return arr.join('');
  }

  dashatize(6815);
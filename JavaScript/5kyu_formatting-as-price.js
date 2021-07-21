/*

Your objective is to add formatting to a plain number to display it as price.

The function should return a string like this:

var price = numberToPrice(13253.5123);
console.log(price); // 13,253.51
Numbers should use the standard comma for every 3 numbers and dot to separate the cents, cents need to be truncated to 2 decimals, in the case that the decimal part of the number is 1 character long or none you should add 0's so that the result will always have 2 decimal characters, the function will also evaluate negative numbers.

function should return a string 'NaN' if the input is not a valid number

*/

const numberToPrice = (number) => {
    if(typeof number !== 'number' || isNaN(number)) {
      return 'NaN';
    }
  
    const arr = number.toString()
              .split('.');
    if (arr.length > 1) {
      if (arr[1].length > 2) {
        const decimalDigits = arr[1].split('');
        arr[1] = decimalDigits[0] + decimalDigits[1];
      }
    }
    
    number  = parseFloat(arr.join('.'));
    
    return number.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

numberToPrice(1000000.050);

module.exports.numberToPrice = numberToPrice;
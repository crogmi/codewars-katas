/*

In this country soldiers are poor but they need a certain level of secrecy for their communications so, though they do not know Caesar cypher, they reinvent it in the following way.

They use ASCII, without really knowing it, but code only letters a-z and A-Z. Other characters are kept such as.

They change the "rotate" each new message. This "rotate" is a prefix for their message once the message is coded. The prefix is built of 2 letters, the second one being shifted from the first one by the "rotate", the first one is the first letter, after being downcased, of the uncoded message.

For example if the "rotate" is 2, if the first letter of the uncoded message is 'J' the prefix should be 'jl'.

To lessen risk they cut the coded message and the prefix in five pieces since they have only five runners and each runner has only one piece.

If possible the message will be evenly split between the five runners; if not possible, parts 1, 2, 3, 4 will be longer and part 5 shorter. The fifth part can have length equal to the other ones or shorter. If there are many options of how to split, choose the option where the fifth part has the longest length, provided that the previous conditions are fulfilled. If the last part is the empty string don't put this empty string in the resulting array.

For example, if the coded message has a length of 17 the five parts will have lengths of 4, 4, 4, 4, 1. The parts 1, 2, 3, 4 are evenly split and the last part of length 1 is shorter. If the length is 16 the parts will be of lengths 4, 4, 4, 4, 0. Parts 1, 2, 3, 4 are evenly split and the fifth runner will stay at home since his part is the empty string and is not kept.

Could you ease them in programming their coding?

Example with shift = 1 :

message : "I should have known that you would have a perfect answer for me!!!"

code : => ["ijJ tipvme ibw", "f lopxo uibu z", "pv xpvme ibwf ", "b qfsgfdu botx", "fs gps nf!!!"]

By the way, maybe could you give them a hand to decode?

*/

const encodeStr = (s, shift) => {
    // Split the string into an array, convert char to charCode
    const result = [];
    
    const regex = /[a-zA-Z]/;
    const arr = s.split('').map(function(x) {
        if (!x.match(regex)) {
            return x.charCodeAt(0);
        } else if (x === x.toUpperCase() && x.charCodeAt(0) + shift < 91) {
            return x.charCodeAt(0) + shift;
        } else if (x === x.toUpperCase() && x.charCodeAt(0) + shift > 90) {
            return (x.charCodeAt(0) + shift) - 90 + 64;
        } else if (x === x.toLowerCase() && x.charCodeAt(0) + shift < 123) {
            return x.charCodeAt(0) + shift;
        } else if (x === x.toLowerCase() && x.charCodeAt(0) + shift > 122) {
            return (x.charCodeAt(0) + shift) - 122 + 96;
        }
    });

    // Determine the prefix and add to the array

    const prefix1 = s[0].toLowerCase().charCodeAt(0);
    const prefix2 = prefix1 + shift;
    arr.unshift(prefix1, prefix2);

    // Convert the char codes to characters
    const charArr = arr.map(x => String.fromCharCode(x));

    // Find the length of the string and figure out even split in length

    const length = Math.ceil(charArr.length / 5);
    let tempStr = '';
    for (let i = 0; i < charArr.length; i++) {
        tempStr = tempStr.concat(charArr[i]);
        if (tempStr.length === length) {
            result.push(tempStr);
            tempStr = '';
        } else if (i === charArr.length - 1) {
            result.push(tempStr);
        }
    }

    return result;

}

const decode = (encoded) => {
    // Map an array of char codes
    const arr = encoded.join('').split('').map(x => x.charCodeAt(0));
    // Determine the shift value and determine alphabetical letters through regex; Removes the prefix
    let shift;
    const regex = /[a-zA-Z]/;
    const prefix1 = String.fromCharCode(arr[0]);
    const prefix2 = String.fromCharCode(arr[1]);
    if (prefix1.match(regex) && prefix2.match(regex)) {
        shift = arr[1] - arr[0];
    } else {
        shift = -1;
    }
    
    arr.splice(0, 2);
    // Map over array of char codes to shift backwards based on shift
    const decoded = arr.map(function(x) {
        if (shift >= 0) {
            if (!String.fromCharCode(x).match(regex)) {
                return String.fromCharCode(x);
            } else if (x <= 90 && x - shift > 64) {
                return String.fromCharCode(x - shift);
            } else if (x <= 90 && x - shift < 65) {
                return String.fromCharCode(x - shift - 64 + 90);
            } else if (x <= 122 && x - shift > 96) {
                return String.fromCharCode(x - shift);
            } else if (x <= 122 && x - shift < 97) {
                return String.fromCharCode(x - shift - 96 + 90);
            }
        } else {
            if (!String.fromCharCode(x).match(regex)) {
                return String.fromCharCode(x);
            } else if (x <= 90 && x - shift > 64) {
                if (x - shift <= 90){
                    return String.fromCharCode(x - shift);
                } else {
                    return String.fromCharCode(64 - shift);
                }
            } else if (x <= 90 && x - shift < 65) {
                return String.fromCharCode(x - shift - 64 + 90);
            } else if (x <= 122 && x - shift > 96) {
                if (x - shift <= 122) {
                    return String.fromCharCode(x - shift);
                } else {
                    return String.fromCharCode(96 - shift);
                }
            } else if (x <= 122 && x - shift < 97) {
                return String.fromCharCode(x - shift - 96 + 90);
            }
        }
    }).join('')

    return decoded;
} 

const message = 'I have spread my dreams under your feet; Tread softly because you tread on my dreams. William B Yeats (1865-1939)';
const encoded = ["ijJ tipvme ibw", "f lopxo uibu z", "pv xpvme ibwf ", "b qfsgfdu botx", "fs gps nf!!!"]

encodeStr(message, 1);
decode(encoded);

module.exports.encodeStr = encodeStr;
module.exports.decode = decode;
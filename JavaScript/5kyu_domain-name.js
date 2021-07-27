/*

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

*/

const domainName = (str) => {
    const regex = /[./]+/;
    const sentence = str;
    const array = sentence.split(regex);
    let index = 0;
    if(array.includes('www')) {
        index = array.indexOf('www') + 1;
    } else if (array.includes('http:')) {
        index = array.indexOf('http:') + 1;
    } else if (array.includes('https:')) {
        index = array.indexOf('https:') + 1;
    }
    
    return array[index];
}

domainName('https://google.co.jp');

module.exports.domainName = domainName;
/*

It's time to create an autocomplete function! Yay!

The autocomplete function will take in an input string and a dictionary array and return the values from the dictionary that start with the input string. If there are more than 5 matches, restrict your output to the first 5 results. If there are no matches, return an empty array.

Example:

autocomplete('ai', ['airplane','airport','apple','ball']) = ['airplane','airport']
For this kata, the dictionary will always be a valid array of strings. Please return all results in the order given in the dictionary, even if they're not always alphabetical. The search should NOT be case sensitive, but the case of the word should be preserved when it's returned.

For example, "Apple" and "airport" would both return for an input of 'a'. However, they should return as "Apple" and "airport" in their original cases.

*/

function autocomplete(input, dictionary) {
    const specialChar = /[^a-z-\s]/i;
    const str = input.toString();
    const adjInput = str.split(specialChar)
                          .join('')
                          .toLowerCase();
    const arr = dictionary.map(x => x.split(specialChar)
                                      .join(''))
                          .filter(x => x.toLowerCase()
                                        .startsWith(adjInput));
    console.log(arr);
    return arr.slice(0,5);
}

autocomplete('n~!@#$%^&*()_+1234567890ope',['Nopesville','Green','Narnia']);

module.exports.autocomplete = autocomplete;
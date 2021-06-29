// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// reverse
// input: str
// return: input er reverse string
// method:
//      1. jodi str empty string hoy:
//          1.1. return empty string
//      2. input str er length bair korbo
//      3. reversedString empty str
//      4. length theke 0 index porjonto iterate:
//          4.1. reversedString e concat str[index]
//      5. return reversedString
function reverse(str) {
    if(str === ""){
        return "";
    }
    var length = str.length-1;
    var reversedString = "";
    for(var index  = length; index > -1; index--){
        reversedString += str[index];
    }
    return reversedString;
}

module.exports = reverse;
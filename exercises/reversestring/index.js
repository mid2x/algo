// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  n = str.length;
  var rev = '';
  for (var i=(n-1);i>=0;i--){
// for (let character of str){
// rev = character + rev;
// }
    rev = rev+str[i];
  }
  return rev;
}

module.exports = reverse;

// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    count = str.length;
    nei = str.replace(/[aiueo]/gi, '').length;
     // console.log(count);
     // console.log(nei);
    return count - nei;
  }
module.exports = vowels;

//  alternate solution:
// function vowels(str) {
//     count = 0;
//     check = 'aiueo';
//     for (a of str.toLowerCase()){
//       if (check.includes(a)){
//         count++;
//       }
//     }
//     return count;
//   }
//  another using regular explession  
// function vowels(str) {
//     matches = str.match(/[aiueo]/ig);
//     return matches ? matches.length : 0;
//   }
//
//   vowels('bunda kandung');

// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA)===cleanString(stringB);
//   lowA = stringA.toLowerCase();
//   cleanA = lowA.replace(/[^\w]/g,"");
//   lowB = stringB.toLowerCase();
//   cleanB = lowB.replace(/[^\w]/g,"");
//
//   // this is how you build an character maps manually
//   // let objectA = {};
//   // for (let each of cleanA){
//   //   if (objectA[each]) {
//   //     objectA[each]++;
//   //   }else {
//   //     objectA[each] = 1;
//   //   }
//   // }
//   // let objectB = {};
//   // for (let each of cleanB){
//   //   if (objectB[each]) {
//   //     objectB[each]++;
//   //   }else {
//   //     objectB[each] = 1;
//   //         }
//   // } this is beeing replaced by charMaps Function below
//   objectA = charMaps(cleanA);
//   objectB = charMaps(cleanB);
//   if (cleanA.length !== cleanB.length){
//     return false;
//     }else{
//
//   for (key in objectB){
//     if(objectA[key]!==objectB[key])
//     {
//       return false;
//       break;
//     }else {
//       return true;
//     }
//   }
// }
}
function cleanString(str){
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
// function charMaps(str){
//   const cr ={};
//   for (let char of str){
//     cr[char] = cr[char] + 1 || 1;
//   }
//   return cr;
// }

module.exports = anagrams;

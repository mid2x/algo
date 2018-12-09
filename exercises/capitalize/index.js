// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str){
  //original solution by forcing
  // empty = '';
  //   for (let i in str){
  //     if(i == 0){
  //        empty = empty + str[i].toUpperCase();
  //     }else{
  //     if (str[i-1] === ' '){
  //         empty = empty + str[i].toUpperCase();
  //          }else{
  //     empty =  empty + str[i];
  //     }
  //   }
  //   }
  //   return empty;

  words = [];
  for (let word of str.split(' ')){
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(' ');
}



module.exports = capitalize;

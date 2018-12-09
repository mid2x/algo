// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let object = {};
  for (let each of str){ // remember 'of' this can be used for looping a string or array
    if (object[each]) {
      object[each]++;
    }else {
      object[each] = 1;

  }
  let max = 0;
  let maxKey = [];
  for (let each in object){
    if (object[each] > max){
      max = object[each];
      maxKey = each;
    }
  }
  return maxKey;
}
// maxChar("halllo)");
module.exports = maxChar;

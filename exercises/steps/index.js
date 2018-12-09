// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
function steps(n) {
  for (i=0;i<n;i++){
    step = '';
    for (j=0;j<n;j++){
      if (j<=i){
        step += '#';
      }else{
        step += ' ';
      }
    }
    console.log(step);
  }
}

module.exports = steps;
// solusi hamid
// function steps(n) {
//   b = ' '.repeat(n).split('');
//   for (let i = 0; i<n; i++){
//     b[i]= '#';
//     console.log(b.join(''));
//   }
// }

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
function pyramid(n) {
  for (i=1;i<=n;i++){
    tri = '';
    a = (n*2)-1;
    for (j=1;j<=a;j++){
      if ((j>(n-i))&&(j<(n+i))){
        tri += '#';
      }else{
        tri += ' ';
      }
    }
    console.log(tri);
  }
}
// recursive solution
// function pyramid(n, row=0, tri='') {
//   if (row === n){
//   return;
//   }
//   if (tri.length === 2 * n - 1){
//     console.log(tri);
//     return pyramid (n, row + 1);
//   }
//   if (n-1 - row <= tri.length && n-1 + row >= tri.length){
//     tri += '#';
//   }else{
//     tri += ' ';
//   }
//   pyramid (n, row, tri)
// }

module.exports = pyramid;

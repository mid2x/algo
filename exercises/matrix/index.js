// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
hasil =[];
for (i=0;i<n;i++){
  hasil[i]= new Array(n);
  }
  km = 0;
  ks = n-1;
  bm = 0;
  bs = n-1;
  cnt = 1;

  while (cnt <= n*n){
    for (i = km; i<=ks;i++){
      hasil[bm][i] = cnt;
      cnt++;
    }
    bm++;
    for (i = bm; i<=bs; i++){
      hasil[i][bs] = cnt;
      cnt++;
    }
    ks--;
    for (i = ks; i>=km; i--){
      hasil[bs][i] = cnt;
      cnt++
    }
    bs--;
    for (i=bs; i>=bm; i--){
      hasil[i][km] = cnt;
      cnt++;
    }
    km++;
  }
  return hasil;
}

module.exports = matrix;

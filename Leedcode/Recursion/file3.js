// const factorial = (n) => {
//     if (n === 0) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   };
//   console.log(factorial(10));
//   // 3628800
//   const getMaxCallStackSize = (i) => {
//   try {
//     return getMaxCallStackSize(++i);
//   } catch {
//     return i;
//   }
// };

// console.log(getMaxCallStackSize(0));
A= [23,56,79.90]
function ReverseArr(A){
  let ReverseArr=[];
  let Arr=A.length;
  for(let i=A.length-1; i>=0; i--){
    ReverseArr.push(A[i])
  }
  return ReverseArr;
}
console.log(ReverseArr(A));
// function abc(a){
//     let b = a-1;
//     if (a==3) return 30;
//     return abc (b)
// }
// abc (2)
function func(a){
  return a + func(a-1);
}

func(5);
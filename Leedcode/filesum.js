function fun(...param){
  console.log(param[2]++);

}
var arr = [6,3,1,4];
var arr2 = [...arr];

fun(...arr2);

low = 3, high = 7
coutnum =[3,5,7]
var coutnum  =function(low, high){
    let count =0;
    for(let i=low; i<=high; i++)
    
{
    if(i%2!==0){
     count++
    }
}
    return count;
 }
  console.log(coutnum(high, low))

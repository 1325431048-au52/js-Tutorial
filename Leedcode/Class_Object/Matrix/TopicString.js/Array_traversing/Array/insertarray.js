// Insert Array
let Array = [50, 49, 34, 12, 8, 10]
let newvalue=80;
let position = 3;
for(let i= Array.length-1; i>=0; i--){
    if(i>=position){
        Array[i+1] = Array[i];
        if(i==position){
            Array[i]=newvalue;
        }
    }
}
 console.log(Array)
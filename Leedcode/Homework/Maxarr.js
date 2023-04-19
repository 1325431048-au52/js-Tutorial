arr =[1,-7,67,4,9,90,34]
// wrtie a fuction to return from maximum array parameter

function getMaxArray(arr){
    let maxvalue = arr[0];
    for(let i=0; i<arr.length; i++){
        if (arr[i] > maxvalue){
            maxvalue = arr[i]
        }
    }
    return maxvalue;
}
    console.log(getMaxArray(arr));

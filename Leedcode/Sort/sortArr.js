Arr =[4,8,10,3,2,9,4,1]
function Selectionsort(Arr){
    for(let i=0; i<Arr.length; i++){
        let min =i;
        for(let j=i; j<Arr.length; j++){
            if(Arr[j]<Arr[min]) min = j;
        }
        [Arr[i],Arr[min]] = [Arr[min],Arr[i]]
    }
    return Arr;
}
console.log(Selectionsort(Arr))
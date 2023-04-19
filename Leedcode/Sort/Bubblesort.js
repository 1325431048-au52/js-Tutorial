 Arr = [12,5,9,1,6,82,45]
// function bubblesort(Arr){
//     for(let i =0; i<Arr.length; i++){
//         for(let j=0; j<Arr.length-1-i; j++){
//             if (Arr[j]>Arr[j+1]){
//                 [Arr[j], Arr[j+1]]= [Arr[j+1],Arr[j]]
//             }

//             }
           
//         }
//         return Arr 
//     }
//     console.log(bubblesort(Arr ))
//  function Bubblesort(Arr){
//     for(let i =0; i<Arr.length; i++){
//         for(let j=0; j<Arr.length-i-1; j++){
//             if(Arr[j]>Arr[j+1]){
//                 [Arr[j], Arr[j+1]] = [Arr[j+1], Arr[j]]
//             }
//         }
//     }
//     return Arr
//  } console.log(Bubblesort(Arr))
// Facotial
function Facotial(item){
    if(item==0){
        return 1
    }return item*Facotial(item-1);

}
let data =8
console.log(Facotial(data))
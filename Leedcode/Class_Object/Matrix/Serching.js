arr = [12,4,8,7,45,78]
target=8;
// o/p true OR False

function serching( arr, target){
    for(let i=0; i<arr.length; i++){
        if(target == arr[i]){
            return true;
        }
    }
        return false;
}
console.log(serching(arr, target))
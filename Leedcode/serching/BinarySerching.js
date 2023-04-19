arr = [3,8,12,54,7,9,10,74,89,90]
target =74;
// birary Search 
function birarysearch(arr, target){
let start = 0;
let end = arr.length-1;
while(start<=end){
    let mid = Math.floor((start+end)/2);
    if(arr[mid]==target)
    return true;
     else if(arr[mid]<target)
    start = mid+1;
    
     else if(arr[mid]>target)
    end = mid - 1;
}
    return false;    
}

console.log(birarysearch(arr,target))
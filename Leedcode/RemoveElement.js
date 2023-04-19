nums=[3,2,2,3];
val = 3;
function removeElement(nums, val){
    for(let i = nums.length-1; i>=0; i--){
        if(nums[i]== val){
            nums.splice(i,1)
        }
    }
    return nums ,val
}console.log(removeElement(nums,val))
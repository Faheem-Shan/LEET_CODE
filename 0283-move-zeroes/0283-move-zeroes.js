/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let postn = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
           nums[postn]= nums[i];
            postn ++;
        }
    }
        for (let i = postn; i < nums.length; i++) {
        nums[i] = 0;
    }
    
     return nums
};
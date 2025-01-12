var reduce = function(nums, fn, init) {
    if(nums.length==0){
        return init
    } else {
        var acc=0
        if(!init){
            for(count=0;count<nums.length;count++){
                acc = fn(acc, nums[count])
            }
            return acc;
        } else {
            for(count=0;count<nums.length;count++){
                 acc = fn(acc, nums[count])
           }
           return acc+init;
        }
    }
} 


function fn(acc,val){
    if(!init)
        return acc += val
    else
        return acc += val*val
}

var nums = [1,2,3,4]

var result = reduce(nums,fn,0)
console.log(result);
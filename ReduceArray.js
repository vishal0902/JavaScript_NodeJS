const reduceArray = (arr, funcToCombine, start) =>{
    let currentItem = start;
    for(item of arr) {
        currentItem = funcToCombine(currentItem, item)
    }
    return currentItem;
} 


console.log(reduceArray([1,3,4,5,5], (a,b)=>a+b, 0))
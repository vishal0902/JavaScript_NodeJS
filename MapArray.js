function mapArray (arr, transform) {
    let arr1 =[]
    for (a of arr) {
        arr1.push(transform(a))
    }
    return arr1;
}

console.log(mapArray([2,3,4,5],(item)=>{return item*item}))
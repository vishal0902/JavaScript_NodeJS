const filterArray = (arr, action) => {
    let filtered = []
    for(item of arr) {
        if(action(item)){
            filtered.push(item)
        }
    }
    return filtered;
}

console.log(filterArray([20,33,43,12,345, 3],(item)=>(item > 18)))
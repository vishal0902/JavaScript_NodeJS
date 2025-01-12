var chunk = function(arr, size) {
    var mainArr = []
    for(i=0;i<arr.length;i=i+size){
        var subArr = []
        for(j=i;j<i+size;j++){
            if(arr[j])
            subArr.push(arr[j])
        }
        mainArr.push([...subArr])        
    }
    return mainArr
};

console.log(chunk([1,2,3,4,5],2))
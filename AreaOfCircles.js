const radius = [3,5,4,1]

const findArea = (arr, calArea) => {
    arr.forEach(element => {
        console.log(calArea(element))
    });
}



const calArea = (r) => {
    return r*(22/7)
}

findArea(radius,calArea);
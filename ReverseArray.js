const reverseArray  =  (arr) => {
    console.log("Reversing array using new array")
    console.log("arr :" + arr)
    const reversedArr = [];
    for(arrayItem of arr) {
        reversedArr.unshift(arrayItem)
    }
    return reversedArr;
}

const ReverseArrayInPlace = (arr) => {
    console.log("Reversing array using the same array")
    console.log("arr : " + arr)
    let poppedElement;
    const lengthOfArray = arr.length;
    for(i=lengthOfArray-1, c = 0 ; i >= 0; i--,c++) {
        arr[lengthOfArray+c] = arr [i]
    }
    for(i=0; i< lengthOfArray; i++) {
        arr.shift()
    }
    return arr;
 }

console.log("Reversed Array: "+ reverseArray([3,2,41]));
console.log("Reversed Array: "+ ReverseArrayInPlace([3,2,41]));
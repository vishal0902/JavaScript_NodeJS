const findMinimum = function(number1, number2) {
    if(number1 < number2) {
        return number1
    } else{
        return number2
    }

}

console.log(`the minimum number is ${findMinimum(23,33)}`)
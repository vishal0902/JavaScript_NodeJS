const findEvenOdd = (number) =>{
    if(number < 0){
        number *= -1
    }

    if(number === 0){
        return "Even"
    } 
    else if(number === 1) {
        return "Odd"
    } else {
        return findEvenOdd(number-2)
    }

}

console.log(findEvenOdd(-24))
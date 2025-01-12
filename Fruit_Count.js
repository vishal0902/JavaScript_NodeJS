const fruits = [
    { Apple: 2, Grapes: 5, Guava:3 },
    { Pinapple: 2, Chiku: 5, Apple:3 },
    { Guava: 2, Grapes: 6, Chiku:2 }
]

// const result = fruits.reduce(function(acc,curr) {
//     acc['Apple'] = curr.Apple
    
// },{})

const res = fruits.reduce((acc, curr)=>{
    if(!acc.Apple && curr.Apple){
        acc['Apple'] = curr.Apple
    }
    
    else if(acc.Apple && curr.Apple){
        console.log(curr.Apple);
        acc.Apple = acc.Apple + curr.Apple
        // console.log('hjsjdflk');
    } 
    else{}
    return acc
},{})


console.log(res);


// const ojj = {}

// ojj['ok'] = 1

// console.log(ojj)
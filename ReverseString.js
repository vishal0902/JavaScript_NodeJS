const reverseString = (str) => {
    // let rev=[];
    let arr = str.split(' ');
    
    console.log(arr);
    arr =   arr.map((element)=>{
                return element.split('').reverse().join('');
            });
    // arr.forEach(element => {
    //     rev.push(element.split('').reverse().join(''));
    // });
    // return rev.join(' ');
    return arr.join(' ');
}

const result  = reverseString("this is java");
console.log(result);
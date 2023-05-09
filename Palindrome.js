
//function which counts how many palindromes are there in given string;

let palindrome = (str) => {
    let count=0;

    for (let i=1; i<str.length; i++){
        for (let j=0; j<i; j++){
            let subStr = str.substring(j,i+1);
            // console.log(subStr);
            if(subStr === subStr.split('').reverse().join('')){
                count = count+1;
            }
        }
    }
    return count;
}


let myString = "madamaba";
console.log("the string: "+myString+" contains "+palindrome(myString)+" palindromes.");
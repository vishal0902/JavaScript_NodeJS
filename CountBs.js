const countBs = (str, char) => {
    let i=0, count=0;
    while (i < str.length){
        if(str[i] ===  char){
            count++;
        }
        i++
    }
    return count;
}

console.log(countBs('BBBaB','B'))
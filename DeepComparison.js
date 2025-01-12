function deepCompare(value1 , value2) {
    console.log(JSON.stringify( value1))
    
    if(value1 === value2){
        return true
    }
    
    if(typeof value1 == Object && typeof value2 == Object){
        if(JSON.stringify(value1) === JSON.stringify(value2)) {
            return true;
        }
    } 
    return false;
}

console.log(deepCompare({name: "Vishal"},{name: "Vishal"}))

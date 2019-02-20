function sum(){
    let numberOfOperands = arguments.length;
    var totalSum=0;
    
    for (let i=0; i<numberOfOperands; i++){
        totalSum = totalSum + arguments[i];
    }

    return totalSum;
}

console.log(sum(1,3,5,7,9));
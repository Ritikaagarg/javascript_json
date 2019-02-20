function sum (operand){
    return function(operand1){
        if(typeof operand1!=='undefined'){
            operand+=operand1;
            return arguments.callee;
        }
        else{
            return operand;
        }
    }
}

console.log(sum(5)(3)(9)(1)());
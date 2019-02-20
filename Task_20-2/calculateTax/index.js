//default value of type is taken 'a' and initial amount = 0 in case of values other than givrn in array.

function calculateTax(typeOfAmount="a", initialAmount=0){

let arraytoCheck = [
    {"type":"a", "percent":"5"},
    {"type":"b", "percent":"10"},
    {"type":"c", "percent":"15"},
    {"type":"d", "percent":"20"},
    {"type":"e", "percent" :"25"}
]

    for(let i=0; i<arraytoCheck.length; i++){
        if(arraytoCheck[i].type===typeOfAmount){
            var percentDeducted= arraytoCheck[i].percent;
        }
    }
    let amountDeducted = (percentDeducted/100)*initialAmount;
    let netAmount = initialAmount - amountDeducted;

    var printObject={"type":typeOfAmount,
                    "Amount":initialAmount,
                    "Percent to be deducted":percentDeducted,
                    "AmountDetected":amountDeducted,
                    "NetAmount":netAmount};
                
    return (printObject);
}

console.log(calculateTax("b",100));
console.log(calculateTax("e",500));


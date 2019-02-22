function checkDatatype(checkvalue) {

    //check for object
    if (checkvalue && typeof (checkvalue) === 'object' && checkvalue.constructor === Object) {
        console.log("It's an Object");
        var keys = Object.keys(checkvalue);
        var values = Object.values(checkvalue);
        console.log("{")
        keys.map( (x,i)=>{
            console.log(x + ": " + values[i] + ",");
        })
        console.log("}")

    }

    //check for null
    else if (checkvalue === null) {
        console.log('Type : NULL')
        console.log('value: ' + checkvalue)
    }

    //check for array
    else if (typeof (checkvalue) === 'object' && typeof (checkvalue[0]) !== 'object') {
        console.log("Type: array");
        checkvalue.map((X) => {
            console.log(X);
        });
    }

    //check for array of objects
    else if (typeof (checkvalue) === 'object' && typeof (checkvalue[0]) === 'object') {
        console.log("Type: Array of objects.");
        checkvalue.map((X) => {
            console.log(X);
        });
    }

    //check for undefined
    else if (typeof checkvalue === 'undefined') {
        console.log('Type : Undefined')
    }

    //check for string
    else if (typeof checkvalue === 'string' || checkvalue instanceof String) {
        console.log('Type : String')
        console.log('value: ' + checkvalue)
    }

    //check for number
    else if (typeof checkvalue === 'number' && isFinite(checkvalue)) {
        console.log('Type : Number')
        console.log('value: ' + checkvalue)
    }

    //check for NaN
    else if (isNaN(checkvalue) && typeof checkvalue === 'number'){
        console.log('Type: NaN')
    }

    //check for boolean
    else if (typeof checkvalue === 'boolean'){
        console.log('Type: Boolean')
        console.log('value: '+ checkvalue)
    }
}

var array = [10, 20, 30]
var arraytest = [{ 'a': 1 }, { 'b': 2 }]

checkDatatype(798)
checkDatatype("hi there!")
checkDatatype(null)
checkDatatype(array)
checkDatatype(true)
checkDatatype(arraytest)
checkDatatype({ 'a': 1, 'b': 2 })
checkDatatype(1-{})
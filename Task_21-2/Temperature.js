var temperature_data=[{
    "temp":89
},
{
    "temp":67
},
{
    "temp":90
},
{
    "temp":112
},
{
    "temp":52
}
]

var maxTemp = 0;
var minTemp = 0;
var meanTemp = 0;

function insert(newTemp){
    temperature_data.push({'temp':newTemp});
    console.log('New Temperature:'+ temperature_data[temperature_data.length - 1].temp);
}

function findMax(){
    for(var i=0; i<temperature_data.length; i++){
        if (temperature_data[i].temp>maxTemp){
            maxTemp=temperature_data[i].temp;
        }
    }
    console.log("Maximum Tmeperature: "+ maxTemp);
}

function findMin(){
    minTemp = maxTemp;
    for (var i=0; i<temperature_data.length; i++){
        if (minTemp>temperature_data[i].temp){
            minTemp = temperature_data[i].temp;
        }
    }
    console.log("Minimum Temperature: "+minTemp);
}

function findMean(){
    for(var i=0;i<temperature_data.length;i++){
        var sum = 0;
        sum +=temperature_data[i].temp;
    }
    meanTemp = sum / temperature_data.length;
    console.log("Mean of temperature: " + meanTemp);
}

function findMode(){
    var maxValue = 0;
    var maxCount = 0;
    for(var i=0;i<temperature_data.length;i++){
        var count = 0;
        for(var j=0; j<temperature_data.length;j++){
            if (temperature_data[j].temp==temperature_data[i].temp){
                count++;
            }
        }
        if(count>maxCount){
            maxCount = count;
            maxValue = temperature_data[i].temp;

        }
    }
    console.log("Mode of temperature: " + maxValue);
}

insert(56)
findMax();
findMin();
findMean();
findMode();
//always hungry
var hungerList = ["a","food","x","g","food"];
function allwaysHungry(arr){
    for(var i = 0; i < arr.length; i++) {
        if(arr[i]=="food"){
            console.log("hungry");
        }
        else{
            console.log("not even hungry");
        }
    }

}
allwaysHungry(hungerList);
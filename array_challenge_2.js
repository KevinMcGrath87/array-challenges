var freq = [120, 440, 534, 1260, 800, 424, 100, 60 ];
function highPass(arr,cutOff){
    for(var i =0; i < arr.length; i++) {
        if (arr[i] > cutOff) {
            console.log(arr[i]);
        }
    }
}

highPass(freq,200);
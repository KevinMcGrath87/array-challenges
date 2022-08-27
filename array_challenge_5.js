//fionacci numbers.
function fibArray(n) {
    let arrayFib = [0,1];
    if(n>=2){
        for(var i = 2; i<=n; i++){
            arrayFib[i]=arrayFib[i-2]+arrayFib[i-1];
        }
    return(arrayFib);
    }
    else if(n==1){
        return(arrayFib);
    }
    else{
        return([0]);
    }
}
console.log(fibArray(11));

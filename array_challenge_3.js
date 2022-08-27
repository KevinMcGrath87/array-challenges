// //better than avarage
// function avgFunc(arr){
//     var sum = 0;
//     function arraySum(arr){
//         for(i=0; i<arr.length; i++){
//             let current = arr[i];
//             sum = sum + current;
//         }
//         return(sum);
//     }
//     arraySum(arr);
//     greaterThans(sum, arr);
// }
// function avgFunc(arr){
    //     var sum = 0;
    //     function arraySum(arr){
//         for(i=0; i<arr.length; i++){
//             let current = arr[i];
//             sum = sum + current;
//         }
//         return(sum);
//     }
//     function greaterThans(sum, arr) {
//         let average = sum/arr.length;
//         let count = 0;
//         for(i = 0; i<arr.length; i++) {
    //             if(arr[i]>average){
        //                 count = count +1;
//             }
//         }
//         return(count);
//     }
//     arraySum(arr);
//     greaterThans(sum, arr);
// }

// var arr1 = [10, 34, 44, 55, 66, 23, 12, 90, 57, 1290, 234598]
// console.log(avgFunc([10, 34, 44, 55, 66, 23, 12, 90, 57, 1290, 234598]));


//better than average
function avgFunc(arr){
    let sum = 0;
    function arraySum(arr){
        for(i=0; i<arr.length; i++){
            let current = arr[i];
            sum = sum + current;
            console.log(sum);
        }
        return(sum);
    }
    function greaterThans(sum, arr) {
        let average = sum/arr.length;
        console.log(average);
        let count = 0;
        for(i = 0; i < arr.length; i++) {
            if(arr[i]>average){
                count = count +1;
            }
        }
        return(count);
    }
    return(greaterThans(arraySum(arr),arr));



}

var arr1 = [2,3,4,5,6,2,2,2,2];
console.log(avgFunc([23,33,44,1,2,5678,22,1,0,0,0,0,0,0,0,0,0,-234,5,-2345]));



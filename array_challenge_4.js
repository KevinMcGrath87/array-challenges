//write a function that will reverse the order of the array and print out the elements in the reverse order. 
var seq1 = ["1st", "2nd","3rd","4th","5th","6th"];
function reverse (seq) {
    let seq2 = []
    let j = 0;
    for(var i = seq.length-1; i >= 0; i--){
        seq2[i]=seq[j];
        j++;
        }
    return(seq2);
}
console.log(reverse(seq1));
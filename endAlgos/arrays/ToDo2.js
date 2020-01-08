// Break, working on part 1
var properArray = [1, 2, 3, 4, 5];
function swapPairs(array) {
    for (var index = 0; index < (array.length)/2; index ++) {
        var pairStart = array[index];
        var pairEnd = array[array.length-index-1];
        console.log(pairStart);
        console.log(pairEnd);
        array[index] = pairEnd;
        array[array.length-index-1] = pairStart;
    }
    return array;
}
console.log(swapPairs(properArray))
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.
var notMinFront = [4,2,1,3,5];
function MinToFront(array){
    var minimumIndex = 0;
    for (var index = 1; index < array.length; index++){
        var currentValue = array[index];
        if (currentValue < array[minimumIndex]) {
            minimumIndex = index;
        }
    }
    return pushfront(array, removeAt(array, minimumIndex));
}
console.log(MinToFront(notMinFront));

function pushfront(array, value) {
    for (var index = array.length; index > 0; index --) {
        var currentValue = array[index - 1];
        array[index] = currentValue;
    }
    array[0] = value;
    return array;
}
function removeAt(array, position) {
    var returnValue = array[position];
    for (var index = position; index < array.length; index++) {
        var currentValue = array[index + 1];
        array[index] = currentValue;
    }
    array.length--;
    return returnValue;
}
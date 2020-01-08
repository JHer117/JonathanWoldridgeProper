var properArray = [1, 2, 3, 4, 5];
function pushfront(array, value) {
    for (var index = array.length; index > 0; index --) {
        var currentValue = array[index - 1];
        array[index] = currentValue;
        console.log(array);
    }
    array[0] = value;
    return array;
}
console.log(pushfront(properArray, 10));
console.log('properArray');

// Break, working part 2
var properArray = [1, 2, 3, 4, 5];
function popFront(array) {
    var returnValue = array[0];
    for (var index = 1; index < array.length; index ++){
        var currentValue = array[index];
        array[index - 1] = currentValue;
    }
    array.length--;
    console.log(array);
    return returnValue;
}
console.log(popFront(properArray));

// Break, working part 3
var properArray = [1, 2, 3, 4, 5];
function insertAt(array, position, value) {
    for (var index = array.length; index > position; index--) {
        var currentValue = array[index-1];
        array[index] = currentValue;
    }
    array[position] = value;
    console.log(array);
    return array;
}
console.log(insertAt(properArray, 3, 10));

// Break, working part 4
var properArray = [1, 2, 3, 4, 5];
function removeAt(array, position) {
    var returnValue = array[position];
    for (var index = position; index < array.length; index++) {
        var currentValue = array[index + 1];
        array[index] = currentValue;
    }
    array.length--;
    console.log('removeAt', array);
    return returnValue;
}
console.log(removeAt(properArray, 3));

// Break, working part 5
var properArray = [1, 2, 3, 4, 5];
function swapPairs(array) {
    for (var index = 0; index < array.length-1; index += 2) {
        var pairStart = array[index];
        var pairEnd = array[index+1];
        console.log(pairStart);
        console.log(pairEnd);
        array[index] = pairEnd;
        array[index+1] = pairStart;
    }
    return array;
}
console.log(swapPairs(properArray))

// Break, working part 6
var properArray = [1, 1, 2, 3, 3, 3, 4, 5];
function onlyUnique(array) {
    var count = 0
    for (var index = 0; index < array.length; index++){
        for (var nestedIndex = index + 1; nestedIndex < array.length; nestedIndex++){ 
            console.log('Both' + array[index] + ' and ' + array[nestedIndex])
            if (array[index] === array[nestedIndex]) {
                removeAt(array, nestedIndex)
                if (array[index] === array[nestedIndex]) {
                    removeAt(array, nestedIndex)
                }
            }
        }
    }
    return properArray;
}
console.log(onlyUnique(properArray))

function removeAt(array, position) {
    var returnValue = array[position];
    for (var index = position; index < array.length; index++) {
        var currentValue = array[index + 1];
        array[index] = currentValue;
    }
    array.length--;
    return returnValue;
}
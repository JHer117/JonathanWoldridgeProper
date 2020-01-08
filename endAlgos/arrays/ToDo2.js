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

// Break, working on part 2


//Break, working on part 3
var properArray = [ 0, 0, 1, 1, 2, 3, 3, 4, 5];
function minAndMax(array, min, max) {
    var count = 0
    for (var index = 0; index < array.length; index++){
        if (array[index] < min || array[index] > max){
            removeAt(array, index)
        }
        if (array[index-1] < min || array[index-1] > max){
            removeAt(array, index-1)
        }
        if (array[index-1] < min || array[index-1] > max){
            removeAt(array, index-1)
        }
        if (array[index+1] < min || array[index+1] > max){
            removeAt(array, index+1)
        }
        if (array[index+1] < min || array[index+1] > max){
            removeAt(array, index+1)
        }
    }
    return properArray;
}
console.log(minAndMax(properArray, 2, 4))

function removeAt(array, position) {
    var returnValue = array[position];
    for (var index = position; index < array.length; index++) {
        var currentValue = array[index + 1];
        array[index] = currentValue;
    }
    array.length--;
    return returnValue;
}

// Break, working on part 4
function arrayUnique(arrayOne, arrayTwo) {
    var newArray = []
    for(var index = 0; index < arrayOne.length; index++) {
        newArray.push(arrayOne[index]);
    }
    for(var secondIndex = 0; secondIndex < arrayTwo.length; secondIndex++){
        newArray.push(arrayTwo[secondIndex])
    }
    console.log(arrayOne)
    console.log(arrayTwo)
    return newArray;
}
console.log(arrayUnique(["a","b"], [1, 2]))

// Break, working on part 5
var properArray = [ 0, 0, 1, 1, 2, 3, 3, 4, 5];
function skyLine(array) {
    var count = 0
    for (var index = 0; index < array.length; index++){
        for (var nestedIndex = index + 1; nestedIndex < array.length; nestedIndex++){ 
            var ultraNestedIndex = nestedIndex + 1
            console.log('Both' + array[index] + ' and ' + array[nestedIndex])
            if (array[index] < 1) {
                removeAt(array, index)
                console.log("Halp")
                if (array[nestedIndex] >= 1 ){
                    if (array[ultraNestedIndex] <= array[nestedIndex]){
                    removeAt(array, nestedIndex)
                    }
                }
            }
            else if (array[index] >= array[nestedIndex]) {
                removeAt(array, nestedIndex)
                if (array[index] > array[nestedIndex]) {
                    removeAt(array, nestedIndex)
                }
            } 

        }
    }
    return properArray;
}
console.log(skyLine(properArray))

function removeAt(array, position) {
    var returnValue = array[position];
    for (var index = position; index < array.length; index++) {
        var currentValue = array[index + 1];
        array[index] = currentValue;
    }
    array.length--;
    return returnValue;
}
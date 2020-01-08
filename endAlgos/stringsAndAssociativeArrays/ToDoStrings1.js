//REMOVE BLANKS
function removeblanks(string){
    var stringArray = string.split(" ");
    stringArray = stringArray.join("");
    return stringArray;
}
console.log(removeblanks("Pl ayTha tF u nkyM usi c"));

//GET DIGITS 
// NOT YET COMPLETED
function getDigits(str){
    var splitStr = str.split("");
    splitStr.splice(0,2);
    splitStr.splice(1,1);
    splitStr.splice(2,1);
    splitStr.splice(3,1);
    splitStr.splice(4,1);
    splitStr.splice(5,1);
    splitStr.splice(6,1);
    splitStr.splice(7,1);
    splitStr.splice(8,1);
    splitStr.splice(9,1);
    splitStr.splice(9,1);
    return splitStr;
}
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

// GET DIGITS
// NOT YET COMPLETED
function getDigits(str){
    newStr = []
    var splitStr = str.split("");
    for (var index = 0; index < splitStr.length; index++){
        console.log(splitStr)
        if (typeof splitStr[index] != typeof(1)){
            newStr += splitStr[index];
            newStr.join("");
        }
    }
    return newStr;
}
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

//ACRONYMS
function acronyms(str){
    var acronymLetters = [];
    var acronymString = str.split(" ");
    for(var index =0; index < acronymString.length; index++){
        acronymLetters += acronymString[index][0];
        
    }
    return acronymLetters;
}
console.log(acronyms("there's no free lunch - gotta pay yer way."));

//COUNT NON-SPACES
function countNonSpaces(str){
    var count = 0;
    var countSplit = str.split(" ");
    console.log(countSplit);
    for(var index = 0; index < countSplit.length; index++){
        count += countSplit[index].length;
    }
    return count;
}
console.log(countNonSpaces("Honey pie, you are driving me crazy"));

//REMOVE SHORTER STRINGS
// NOT YET COMPLETED
function removeShorterStrings(str,val){
    var stringSplit = str.split(" ");
    for( var index = 0; index < stringSplit.length; index++){
        console.log("Higher up test.")
        if(stringSplit[index].length < val){
        console.log("Testing some stuff.")
        removeAt(array, stringSplit[index])
        }
    }
    return stringSplit;
}
console.log(removeShorterStrings("The cow jumped over the moon.", 4));

function removeAt(array, position) {
    var returnValue = array[position];
    for (var index = position; index < array.length; index++) {
        var currentValue = array[index + 1];
        array[index] = currentValue;
    }
    array.length--;
    return returnValue;
}
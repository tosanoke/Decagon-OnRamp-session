// QUESTION 1

function binarySearch(sortedArray, key){
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            // found the element
            return "Element Found";
        } else if (sortedArray[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
	// key wasn't found
    return "Element Not Found";
}

binarySearch([1,3,5,7,8,9], 6);


// QUESTION 2

function divisible(arr) {

    let answer = arr.filter(num => num % 2 === 0 && num > 15 )
    let result = answer.length
    return result;
    
}

divisible([5, 8, 6, 12]);

// QUESTION 3

function noOfElements(Y, X, Z) {

    let elements = Y.filter(n => n >= X && n <= Z);
    let count = elements.length
    return count;
  
}

noOfElements([3,3,3,5,18,6,20], 15, 308);


// QUESTION 4

function highestSum(X, Y) {

    let arr1 = X.reduce((a, b) => a + b);
    let arr2 = Y.reduce((a, b) => a + b);
    let highest = Math.max(arr1, arr2)
    return highest;
}

highestSum([15, 7], [12, 17]);


// QUESTION 5

function smallestElement(arr, k) {

    let element = arr.sort((a, b) => a - b);
    let answer = element[k-1]
    return answer;
    
}

smallestElement([7,10,4,3,20,15], 4)
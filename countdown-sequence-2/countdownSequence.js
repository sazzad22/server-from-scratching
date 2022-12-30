function findSequences(arr) {
  let numberOfSequences = 0;
  let countdownSequences = [];
//loop through the original array
  let i = 0;
    while (i < arr.length) {
      //check if the array is sequenced
    if (isCountdownSequence(arr.slice(i))) {
      numberOfSequences += 1;
      countdownSequences.push(arr.slice(i, i + arr[i]));
      i += arr[i];
    } else {
      i += 1;
    }
  }

  // Return the number of countdown sequences and the sequences themselves in an array
  return [numberOfSequences, countdownSequences];
}

function isCountdownSequence(arr) {
    console.log(arr);
  // Check if the array is a countdown sequence
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === 1) {
            return true;
      }
    if (arr[i] !== arr[i - 1] - 1) {
      return false;
    }
  }
}

//*Driver
const myArray = [4,3,2,1, 4, 4, 3, 2, 1, 8, 3, 2, 1];
console.log(findSequences(myArray));

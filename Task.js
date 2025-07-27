function reverseArrayDtimes(arr, d) {
    // Function to reverse the entire array once
    function reverseOnce(arrayToReverse) {
      let start = 0;
      let end = arrayToReverse.length - 1;
      while (start < end) {
        // Swap elements
        let temp = arrayToReverse[start];
        arrayToReverse[start] = arrayToReverse[end];
        arrayToReverse[end] = temp;
        start++;
        end--;
      }
    }
  
    // Apply the reverseOnce function 'd' times
    for (let i = 0; i < d; i++) {
      reverseOnce(arr);
    }
  
    return arr;
  }
  
  // Example usage:
  let myArray = [1, 2, 3, 4, 5];
  let numberOfReversals = 3;
  let reversedArray = reverseArrayDtimes(myArray, numberOfReversals);
  console.log(reversedArray); // Output: [1, 2, 3, 4, 5] (reversed twice, so it's back to original)
  
  myArray = [1, 2, 3, 4, 5];
  numberOfReversals = 1;
  reversedArray = reverseArrayDtimes(myArray, numberOfReversals);
  console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
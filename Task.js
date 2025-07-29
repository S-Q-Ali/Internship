// function reverseArrayDtimes(arr, d) {
//     // Function to reverse the entire array once
//     function reverseOnce(arrayToReverse) {
//       let start = 0;
//       let end = arrayToReverse.length - 1;
//       while (start < end) {
//         // Swap elements
//         let temp = arrayToReverse[start];
//         arrayToReverse[start] = arrayToReverse[end];
//         arrayToReverse[end] = temp;
//         start++;
//         end--;
//       }
//     }
  
//     // Apply the reverseOnce function 'd' times
//     for (let i = 0; i < d; i++) {
//       reverseOnce(arr);
//     }
  
//     return arr;
//   }
  
//   // Example usage:
//   let myArray = [6,7,8,9,10];
//   let numberOfReversals = 2;
//   let reversedArray = reverseArrayDtimes(myArray, numberOfReversals);
//   console.log(reversedArray); // Output: [1, 2, 3, 4, 5] (reversed twice, so it's back to original)
  
//   myArray = [1, 2, 3, 4, 5];
//   numberOfReversals = 1;
//   reversedArray = reverseArrayDtimes(myArray, numberOfReversals);
//   console.log(reversedArray); // Output: [5, 4, 3, 2, 1]




  // Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    // Declare a variable for the message
    // WRITE YOUR CODE HERE
    var message = "%c" + txt;
    
    // Declare a variable for the style
    // WRITE YOUR CODE HERE
    var style = `color:${color};`;

    // Append background style to the style variable
    // WRITE YOUR CODE HERE
    style += ` background:${background};`;

    // Append font size style to the style variable
    // WRITE YOUR CODE HERE
    style += ` font-size:${fontSize};`;

    // Log the message with the applied style
    // WRITE YOUR CODE HERE
    console.log(message, style);
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    // Declare a fontStyle variable with default styles
    // WRITE YOUR CODE HERE
    var fontStyle = "color:tomato; font-size:50px";
    
    // Check if the reason is "birthday"
    // WRITE YOUR CODE HERE
    if (reason === "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    }

    // If reason is "champions", log a congrats message
    // WRITE YOUR CODE HERE
    else if (reason === "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    }

    // For any other reason, log a default message
    // WRITE YOUR CODE HERE
    else {
        console.log('%cCondition not satisfied', fontStyle);
    }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
// Call the consoleStyler function with appropriate arguments
// WRITE YOUR CODE HERE
consoleStyler('#1d5c63', '#ede6db', "40px", "Congrats!");

// Call the celebrateStyler function with an appropriate argument
// WRITE YOUR CODE HERE
celebrateStyler("champions");

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    // Call consoleStyler with the first four arguments
    // WRITE YOUR CODE HERE
    consoleStyler(color, background, fontSize, txt);

    // Call celebrateStyler with the last argument
    // WRITE YOUR CODE HERE
    celebrateStyler(reason);
}

// Call styleAndCelebrate with appropriate arguments
// WRITE YOUR CODE HERE
styleAndCelebrate('#ef7c8e', '#fae8e0', '30px', 'You made it!', 'champions');




'use strict';
let dice_num_Display = document.querySelector('.dice');
let roll_button = document.querySelector('.btn--roll');
let current_score_0 = document.querySelector('#current--0');
let current_score_1 = document.querySelector('#current--1');
const reset_game = document.querySelector('.btn--new');
let score_element_0 = document.querySelector('#score--0');
let score_element_1 = document.querySelector('#score--1');
const hold_button = document.querySelector('.btn--hold');

let activePlayer = 0;
let random;
let Score_1;
let Score_2;
roll_button.addEventListener('click', function () {
  random = Math.floor(Math.random() * 6) + 1;
  console.log(random);
  dice_num_Display.src = `dice-${random}.png`;

  if (activePlayer == 1) {
    if (random !== 1) {
      Score_1 = random;
      current_score_0.textContent = random;
    } else {
      current_score_0.textContent = 0;
      activePlayer = 0;
    }
  } else {
    if (activePlayer == 0) {
      if (random !== 1) {
        Score_2 = random;
        current_score_1.textContent = random;
      } else {
        current_score_1.textContent = 0;
        activePlayer = 1;
      }
    } else {
      console.log('Not Reached!');
    }
  }
});

random = Math.floor(Math.random() * 6) + 1;
let Total_1=0;
let Total_2=0;
hold_button.addEventListener('click', function () {

    if (activePlayer == 1 && Score_1 !== 1) {
      Total_1 += Score_1;
      score_element_0.textContent = Total_1;
      activePlayer = 0;
      current_score_0.textContent = 0;
    } else {
      if (activePlayer == 0 && Score_2 !== 1) {
        Total_2 += Score_2;
        score_element_1.textContent = Total_2;
        activePlayer = 1;
        current_score_1.textContent = 0;
      }
    }
      if (Total_1 >= 100) {
    alert('Player 1 Won!');
  } else if (Total_2 >= 100) {
    alert('Player 2 Won');
  } else {
    console.log("Try Again!");
  }
});
reset_game.addEventListener('click', function () {
  current_score_0.textContent = 0;
  current_score_1.textContent = 0;
  score_element_0.textContent = 0;
  score_element_1.textContent = 0;
  dice_num_Display.src = `dice-${random}.png`;
});


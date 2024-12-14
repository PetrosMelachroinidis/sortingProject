// We want to check if an array is sorted

// I want to use while loop
// I want to end the loop if the user adds an empty string
let userInput;
let userValues = [];

while (userInput !== "") {
  userInput = prompt(
    "Add your text below. Input proccess will end whn you add an empty string"
  );

  if (userInput !== "") {
    userValues.push(userInput);
  }
}

// console.log("This is the final array", userValues);

// in every loop I want to check the element with the next element
//  if item i is smaller that the item i+1 we continue the loop
//  else we show the message "not sorted" and the loop breaks
// if all the table is sorted then we show the message "sorted"

const confirmThatAllLoopsAreDone = true;

// solution 1
// for (let i = 0; i < userValues.length; i++) {
//   if (userValues[i] > userValues[i + 1]) {
//     alert("Not sorted");
//     confirmThatAllLoopsAreDone = false;
//     break;
//   }
// }

// if (confirmThatAllLoopsAreDone === true) {
//   alert("Sorted");
// }

// solution 2
// let alertMessage = "Sorted";
// for (let i = 0; i < userValues.length; i++) {
//   if (userValues[i] > userValues[i + 1]) {
//     alertMessage = "Not sorted";
//     break;
//   }
// }
// alert(alertMessage);

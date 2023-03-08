// Assignment code here
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specialChars = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", ">", "=", "?", "@", "[", "/", "]", "^", "_", "`", "{", "}", "|", "~"];
let passArray = [];

// debugging here
let randomIndex = 0;

var randomIndexFunction = function(){
  randomIndex = Math.floor(Math.random() * passArray.length);
  return randomIndex;
}

let passLength = prompt("How many characters would you like to have in your password?");

let firstQuestion = prompt("Would you like lowercase characters in your password? \n y/n");
let secondQuestion = prompt("Would you like uppercase characters in your password? \n y/n");
let thirdQuestion = prompt("Would you like numbers in your password? \n y/n");
let fourthQuestion = prompt("Would you like special characters in your password? \n y/n");

if(firstQuestion == "y"){
  passArray = passArray.concat(lowerCase);
}
if(secondQuestion == "y"){
  passArray = passArray.concat(upperCase);
}
if(thirdQuestion == "y"){
  passArray = passArray.concat(numbers);
}
if(fourthQuestion == "y"){
  passArray = passArray.concat(specialChars);
}

for (let i = 0; i < passLength; i++){
  var passwordText = `${passArray[randomIndexFunction()]}`;
  console.log(passwordText);
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specialChars = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", ">", "=", "?", "@", "[", "/", "]", "^", "_", "`", "{", "}", "|", "~"];

var generatePassword = function(){
  // initializing variables and arrays that must be reset every time this function is called
  let randomIndex = 0;
  let passArray = [];
  let passwordText = [];

  // grabs a new random index number every time this function is called
  var randomIndexFunction = function(){
    randomIndex = Math.floor(Math.random() * passArray.length);
    return randomIndex;
  }

  let passLength = prompt("How many characters would you like to have in your password? \nYou must have more than 8, but less than 128 characters.");
  // turns this value into an integer
  passLength = parseInt(passLength);

  // checks to make sure the value is a number, and within the correct range
  if(!passLength){
    return passwordText = "(Please enter a number)";
  }
  if (passLength < 8){
    return passwordText = "(You must choose more than 8 characters)";
  }
  if (passLength > 128){
    return passwordText = "(You must choose less than 128 characters)";
  }

  let firstQuestion = prompt("Would you like lowercase characters in your password? \n y/n");

  // checks to make sure the answers to the questions are valid
  for(i = 0; i < 1; i + 0){
    if(firstQuestion === "y"){
      passArray = passArray.concat(lowerCase);
      i++;
    }
    else if(firstQuestion === "n"){
      console.log(firstQuestion);
      i++;
    }
    else{
      window.alert("Please enter a proper answer.")
      firstQuestion = prompt("Would you like lowercase characters in your password? \n y/n");
    }
  }

  let secondQuestion = prompt("Would you like uppercase characters in your password? \n y/n");

  for(i = 0; i < 1; i + 0){
    if(secondQuestion === "y"){
      passArray = passArray.concat(upperCase);
      i++;
    }
    else if(secondQuestion === "n"){
      i++;
    }
    else{
      window.alert("Please enter a proper answer.")
      secondQuestion = prompt("Would you like uppercase characters in your password? \n y/n");
    }
  }

  let thirdQuestion = prompt("Would you like numbers in your password? \n y/n");

  for(i = 0; i < 1; i + 0){
    if(thirdQuestion === "y"){
      passArray = passArray.concat(numbers);
      i++;
    }
    else if(thirdQuestion === "n"){
      i++;
    }
    else{
      window.alert("Please enter a proper answer.")
      thirdQuestion = prompt("Would you like numbers in your password? \n y/n");
    }
  }

  let fourthQuestion = prompt("Would you like special characters in your password? \n y/n");

  for(i = 0; i < 1; i + 0){
    if(fourthQuestion === "y"){
      passArray = passArray.concat(specialChars);
      i++;
    }
    else if(fourthQuestion === "n"){
      i++;
    }
    else{
      window.alert("Please enter a proper answer.")
      fourthQuestion = prompt("Would you like special characters in your password? \n y/n");
    }
  }

  for (let i = 0; i < passLength; i++){
    passwordText = passwordText.concat(passArray[randomIndexFunction()]);
  }

  // the .join prints the array on one line without any brackets or commas in between
  return passwordText.join("");
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

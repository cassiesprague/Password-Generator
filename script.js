//Below shows the possible characters they can choose to include in their password when generated
function generatePassword () {
  //Below are the special characters the user can input
var character = "`", "~", "!","@", "#", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "[", "}", "]", ":", ";", "<", ",", ">", ".", "/", "?";
//Below are the numbers the user can input
var number = "1", "2", "3", "4", "5", "6", "7", "8", "9", "0";
//Below are the lowercase letters the user can input
var lowercase = "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z";
//Below are the uppercase letters the user can input
var uppercase = "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z";
}

//Below is the prompt for asking the user how many characters they would like the password to be
charactersNumber = prompt("How many characters would you like your password to be. Must have a mininum of 8 and maximum of 128.");
if (charactersNumber < 8 || charactersNumber > 128) {
  return "Please choose between 8-128 characters.";
}

//Below is asking if they user would like the password to contain special characters
containsSpecialCharacters = confirm("Would you like your password to contain special characters?");
if (containsSpecialCharacters) {
  alert("Your password will contain special characters.");
}
else {
  alert("Your password will NOT contain special characters.");
}

//Below is asking if they user would like the password to contain numbers
containsNumbers = confirm("Would you like your password to contain numbers?");
if (containsNumbers) {
  alert("Your password will contain numbers.");
}
else {
  alert("Your password will NOT contain numbers.");
}

//Below is asking if they user would like the password to contain lowercase letters
containsLowercase = confirm("Would you like your password to contain lowercase letters?");
if (containsLowercase) {
  alert("Your password will contain lowercase letters.");
}
else {
  alert("Your password will NOT contain lowercase letters.");
}

//Below is asking if they user would like the password to contain uppercase letters
containsUppercase = confirm("Would you like your password to contain uppercase letters?");
if (containsUppercase) {
  alert("Your password will contain uppercase letters.");
}
else {
  alert("Your password will NOT contain uppercase letters.");
}

//Below is what will happen if they do not answer any question
if (containsSpecialCharacters === false && containsNumbers === false && containsLowercase === false && containsUppercase === false) {
  alert("Please choose at least one of of the criteria");
};




// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

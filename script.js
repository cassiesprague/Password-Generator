//Below shows what the user can input
var enter;
var number;
var character;
var lowercase;
var uppercase;

//Below are the special characters the user can input
character = "`", "~", "!","@", "#", "#", "$", "%", "^", 
"&", "*", "(", ")", "-", "_", "=", "+", "{", "[", "}", 
"]", ":", ";", "<", ",", ">", ".", "/", "?";
//Below are the numbers the user can input
number = "1", "2", "3", "4", "5", "6", "7", "8", "9", "0";
//Below are the lowercase letters the user can input
lowercase = "a", "b", "c", "d", "e", "f", "g", "h", 
"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", 
"t", "u", "v", "w", "x", "y", "z";
//Below are the uppercase letters the user can input
uppercase = "A", "B", "C", "D", "E", "F", "G", "H", 
"I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", 
"T", "U", "V", "W", "X", "Y", "Z";


<button id="generate" class="btn">Generate Password</button>

const element = document.getElementById("generatePassword");
element.addEventListener("click", myFunction);


//Below is the function to generate a password
function myFunction() {
  //Below asks how long the password should be
  document.getElementById("lengthQuestion").innerHTML = "How many characters would you like your password to contain? The minimum is 8 characters and the maximum is 128 characters.";
}

if (!enter) {
  console.log("A value between 8 and 128 must be entered to move on");
} else if (enter < 8 || enter > 128);
  
else {
  number = confirm("Would you like your password to contain numbers?");
  character = confirm("Would you like your password to contain special characters?");
  
}

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

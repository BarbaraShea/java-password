// global variables
var generateBtn = document.querySelector("#generate");
var passwordLength
var promptLowercase
var promptUppercase
var promptNumbers 
var promptSpecialChar 

var lowercase = charLooper(97,122)
var uppercase = charLooper(65,90)
var number = charLooper(48,57)
var specialChar = charLooper(33,47).concat(charLooper(58,64)).concat(charLooper(91,96)).concat(charLooper(123,126))


function charLooper(low, high) {
  var charLoopArray = []
  for (var i = low; i <= high; i++){
    charLoopArray.push(i)
  }
return charLoopArray;
}


function generatePassword() {
//input for length
  passwordLength = parseInt(prompt("How long would you like your password to be (8-128)?"));

//input for characters
if (passwordLength > 7 && passwordLength < 129) {
  promptLowercase = confirm("Would you like to include lowercase?");
  promptUppercase = confirm("Would you like to include uppercase?");
  promptNumbers = confirm("Would you like to include numbers?");
  promptSpecialChar = confirm("Would you like to include special characters?"); 
} else {
  alert("Enter a number between 8 and 128.");
  generatePassword();
}
 //error protections
if (!promptLowercase && !promptNumbers && !promptSpecialChar && !promptUppercase) {
  userChoice = alert("Please select at least one option!");
}
//all options are selected
else if (promptLowercase && promptUppercase && promptNumbers && promptSpecialChar){
  userChoice = lowercase.concat(uppercase, number, specialChar);
}

//3 of 4 are selected
else if (promptLowercase && promptUppercase && promptNumbers){
  userChoice = lowercase.concat(uppercase, number);
}

else if (promptLowercase && promptUppercase && promptSpecialChar){
  userChoice = lowercase.concat(uppercase, specialChar);
}

else if (promptLowercase && promptSpecialChar && promptNumbers){
  userChoice = lowercase.concat(specialChar, number);
}

else if (promptSpecialChar && promptNumbers && promptUppercase){
  userChoice = specialChar.concat(number, uppercase);
}
//2 of 4 are selected
else if (promptLowercase && promptUppercase){
  userChoice = lowercase.concat(uppercase);
}

else if (promptLowercase && promptSpecialChar){
  userChoice = lowercase.concat(specialChar);
}

else if (promptLowercase && promptNumbers){
  userChoice = lowercase.concat(number);
}

else if (promptUppercase && promptSpecialChar){
  userChoice = uppercase.concat(specialChar);
}

else if (promptUppercase && promptNumbers){
  userChoice = uppercase.concat(number);
}

else if (promptSpecialChar && promptNumbers){
  userChoice = specialChar.concat(number);
}

//1 of 4 selected
else if (promptLowercase){
userChoice = lowercase;
}
else if (promptUppercase){
  userChoice = uppercase;
}
else if (promptNumbers){
  userChoice = number;
}
else if (promptSpecialChar){
  userChoice = specialChar;
}

var genPassword = []

for (var i = 0; i < passwordLength; i++) {
  var randomCharCode = userChoice[Math.floor(Math.random()*userChoice.length)];
  genPassword.push(String.fromCharCode(randomCharCode));

}
return genPassword.join("")
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


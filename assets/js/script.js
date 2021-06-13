// Challenge Acceptance Criteria 
    // GIVEN I need a new, secure password
    // WHEN I click the button to generate a password
    // THEN I am presented with a series of prompts for password criteria
    // WHEN prompted for password criteria
    // THEN I select which criteria to include in the password
    // WHEN prompted for the length of the password
    // THEN I choose a length of at least 8 characters and no more than 128 characters
    // WHEN asked for character types to include in the password
    // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    // WHEN I answer each prompt
    // THEN my input should be validated and at least one character type should be selected
    // THE CRITERIA ABOVE IS MET



    // WHEN all prompts are answered
    // THEN a password is generated that matches the selected criteria
    // WHEN the password is generated
    // THEN the password is either displayed in an alert or written to the page


// Assignment code here


var generatePassword = function() {

  // Takes user input to determine how long the password should be
  var passwordLength = prompt("How many characters long should your password be?");
  
  passwordLength = parseInt(passwordLength);

  if (passwordLength < 8 || !passwordLength) {
    alert("Your password must be at least 8 characters long. Please enter a valid password length");
    generatePassword();
  }
  else if (passwordLength > 128) {
    alert("Your password should not be longer than 128 characters. Please enter a valid password length.");
    generatePassword();
  }

  // Takes users input to determine what type of characters to include
  var confirmLowercase = confirm("Should your password include lowercase characters?");
  var confirmUppercase = confirm("Should your password include uppercase characters?");
  var confirmNumbers = confirm("Should your password include numeric characters?");
  var confirmSpecial = confirm("Should your password include special characters?");
  
  if (!confirmUppercase && !confirmLowercase && !confirmNumbers && !confirmSpecial) {
    alert("You did not choose at least one character type for your password. Please try again.")
    generatePassword();
  }
  // else if (!confirmUppercase && confirmLowercase && !confirmNumbers && !confirmSpecial) {
  //   charset = "abcdefghijklmnopqrstuvwxyz"
  // }
  // else if (confirmUppercase && !confirmLowercase && !confirmNumbers && !confirmSpecial) {
  //   charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  // }
  // else if (!confirmUppercase && !confirmLowercase && confirmNumbers && !confirmSpecial) {
  //   charset = "123456789"
  // }
  // else if (!confirmUppercase && !confirmLowercase && !confirmNumbers && confirmSpecial) {
  //   charset = "@!#$^%&*"
  // }
  

};

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

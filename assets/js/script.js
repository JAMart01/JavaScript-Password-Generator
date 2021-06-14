// Assignment code here


// This leads to the button on the page 
var generateBtn = document.querySelector("#generate");


// Arrays that hold all of our possible characters
var lowercase = ["abcdefghijklmnopqrstuvwxyz"];

var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

var numbers = ["1234567890"];

var special = ["@!#$^%&*"];


// function that will reset array values
var resetArrays = function() {
  writePassword();

  lowercase = ["abcdefghijklmnopqrstuvwxyz"];

  uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

  numbers = ["1234567890"];

  special = ["@!#$^%&*"];
};  

//function that is going to generate the password 
var generatePassword = function() {

  // Takes user input to determine how long the password should be
  var passwordLength = prompt("How many characters long should your password be?");
  
  // Added as a precautionary measure to ensure the users input is an whole number 
  passwordLength = parseInt(passwordLength);


  // checks to make sure the password is no less than 8 character and no more than 128
  if (passwordLength < 8 || !passwordLength) {
    alert("Your password must be at least 8 characters long. Please enter a valid password length");
    resetArrays();
  }
  else if (passwordLength > 128) {
    alert("Your password should not be longer than 128 characters. Please enter a valid password length.");
    resetArrays();
  }

  // Takes users input to determine what type of characters to include
  var confirmLowercase = confirm("Should your password include lowercase characters?");
  var confirmUppercase = confirm("Should your password include uppercase characters?");
  var confirmNumbers = confirm("Should your password include numeric characters?");
  var confirmSpecial = confirm("Should your password include special characters?");
  
  // if statements to change the value of the arrays based on users preffered parameters
  if (!confirmLowercase) {
    lowercase = []
  }
  if (!confirmUppercase) {
    uppercase = []
  }
  if (!confirmNumbers) {
    numbers = []
  }
  if (!confirmSpecial) {
    special = [] 
  }

    // If statement to confirm that at least one character type is chosen if not then it takes the user back to the beggining
    if (!confirmUppercase && !confirmLowercase && !confirmNumbers && !confirmSpecial) {
      alert("You did not choose at least one character type for your password. Please try again.")
      resetArrays();
    }


// Separate variable to combine arrays and make it easier to randomize passwords
var passParameters = lowercase + uppercase + numbers + special
    
// container to hold generated password
    var completePass = "";
    for (i= 0; i < passwordLength; i++) {
      var randomize = passParameters[Math.floor(Math.random() * passParameters.length)];
      completePass += randomize;

    }   
    return completePass
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", resetArrays);

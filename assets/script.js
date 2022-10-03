// Save the #generate element to generateButton
var generateButton = document.querySelector("#generate");
console.log(generateButton); // **debug**

// Ask the user for their password criteria
function askForPasswordCriteria() {
  // Prompt function
  function passwordPrompt( passwordPrompt, defaultValue, convertAnswer = false ) {
    var answer = prompt(passwordPrompt, defaultValue)
    if (convertAnswer) { answer = Number.parseFloat(answer) }  // Convert the answer to a number or NaN (makes it easier to check for password-length errors)
    return answer
  }
  //
  // Define prompt headers
  var passwordLengthHeader = "Length \n"
  var lowercaseCharactersHeader = "Lowercase Characters \n"
  var uppercaseCharactersHeader = "Uppercase Characters \n"
  var integersHeader = "Integers \n"
  var specialCharactersHeader = "Special Characters \n"
  //
  // Prompt the user to enter a password length
  var passwordLength = passwordPrompt( passwordLengthHeader + "Enter the length of the password. It must be an integer between 8 and 128.", 20, true )
  // Check for password-length errors
  while ( Number.isNaN(passwordLength) || Number.isInteger(passwordLength) === false || passwordLength < 8 || passwordLength > 128 ) {
    // If the password length is a string
    if ( Number.isNaN(passwordLength) ) {
      passwordLength = passwordPrompt( passwordLengthHeader + "Sorry, that’s a string. You must enter an integer between 8 and 128.", 20, true )
    // If the password length is a decimal number
    } else if ( Number.isInteger(passwordLength) === false ) {
      passwordLength = passwordPrompt( passwordLengthHeader + "Sorry, that’s a decimal number. You must enter an integer between 8 and 128.", 20, true )
    // If the password length is less than 8
    } else if (passwordLength < 8) {
      passwordLength = passwordPrompt( passwordLengthHeader + "Sorry, that’s less than 8. You must enter an integer between 8 and 128.", 20, true )
    // If the password length is greater than 128
    } else if (passwordLength > 128) {
      passwordLength = passwordPrompt( passwordLengthHeader + "Sorry, that’s greater than 128. You must enter an integer between 8 and 128.", 20, true )
    }
  }
  //
  // Remind the user to choose at least one of the criteria.
  alert("Next, you’ll choose whether to include lowercase or uppercase characters, integers, or special characters. Remember to choose at least one of these criteria.")
  //
  while ( Number.isNaN( lowercaseCharacters + uppercaseCharacters + integers + specialCharacters ) || lowercaseCharacters + uppercaseCharacters + integers + specialCharacters < 1 ) {
    // Prompt the user to choose whether they’d like to include lowercase characters
    var lowercaseCharacters = passwordPrompt( lowercaseCharactersHeader + "Choose whether you’d like to include lowercase characters (Yes or No):", "Yes" )
    // Check for lowercase-character errors
    while ( lowercaseCharacters !== "Yes" && lowercaseCharacters !== "No" ) {
      // If their choice is not Yes or No
      if ( lowercaseCharacters !== "Yes" && lowercaseCharacters !== "No") {
        lowercaseCharacters = passwordPrompt( lowercaseCharactersHeader + "Sorry, you must enter Yes or No:", "Yes" )
      }
    }
    //
    // Prompt the user to choose whether they’d like to include uppercase characters
    var uppercaseCharacters = passwordPrompt( uppercaseCharactersHeader + "Choose whether you’d like to include uppercase characters (Yes or No):", "Yes" )
    // Check for uppercase-character errors
    while ( uppercaseCharacters !== "Yes" && uppercaseCharacters !== "No" ) {
      // If their choice is not Yes or No
      if ( uppercaseCharacters !== "Yes" && uppercaseCharacters !== "No") {
        uppercaseCharacters = passwordPrompt( uppercaseCharactersHeader + "Sorry, you must enter Yes or No:", "Yes" )
      }
    }
    //
    // Prompt the user to choose whether they’d like to include integers
    var integers = passwordPrompt( integersHeader + "Choose whether you’d like to include integers (Yes or No):", "Yes" )
    // Check for integer errors
    while ( integers !== "Yes" && integers !== "No" ) {
      // If their choice is not Yes or No
      if ( integers !== "Yes" && integers !== "No") {
        integers = passwordPrompt( integersHeader + "Sorry, you must enter Yes or No:", "Yes" )
      }
    }
    //
    // Prompt the user to choose whether they’d like to include special characters
    var specialCharacters = passwordPrompt( specialCharactersHeader + "Choose whether you’d like to include special characters (Yes or No):", "Yes" )
    // Check for special-character errors
    while ( specialCharacters !== "Yes" && specialCharacters !== "No" ) {
      // If their choice is not Yes or No
      if ( specialCharacters !== "Yes" && specialCharacters !== "No") {
        specialCharacters = passwordPrompt( specialCharactersHeader + "Sorry, you must enter Yes or No:", "Yes" )
      }
    }
    //
    // Convert Yes and No to true and false, respectively
    if (lowercaseCharacters === "Yes") { lowercaseCharacters = true } else { lowercaseCharacters = false }
    if (uppercaseCharacters === "Yes") { uppercaseCharacters = true } else { uppercaseCharacters = false }
    if (integers === "Yes") { integers = true } else { integers = false }
    if (specialCharacters === "Yes") { specialCharacters = true } else { specialCharacters = false }
    //
    if ( lowercaseCharacters + uppercaseCharacters + integers + specialCharacters < 1 ) {
      alert("You must enter Yes for at least one of the criteria. Let’s try that again.")
    }
    //
  }
  //
  // Save the user’s choices
  var passwordChoices = {
    passwordLength,
    lowercaseCharacters,
    uppercaseCharacters,
    integers,
    specialCharacters
  }
  //

  console.log(passwordChoices); // **debug**
  

  //
} // eof askForPasswordCriteria()

// Write the password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password); // **debug**
  var passwordText = document.querySelector("#password"); // Store the #password element to the passwordText variable

  passwordText.value = password;

  // Generate a password for the user
  function generatePassword() {
    askForPasswordCriteria()
    return "placeholder 😝"; // temp
  } // eof generatePassword()

} // eof writePassword()

// Add a listener event to generateButton
generateButton.addEventListener("click", writePassword);
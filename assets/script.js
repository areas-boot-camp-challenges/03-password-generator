var generateButton = document.querySelector("#generate"); // Store the #generate element to generateButton
console.log(generateButton); // **debug**

// Write the password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password); // **debug**
  var passwordText = document.querySelector("#password"); // Store the #password element to the passwordText variable

  passwordText.value = password;

  // Generate a password for the user
  function generatePassword() {
    //
    // Prompt the user for their password criteria and convert their answer to a number or NaN (by default, the user’s answer is stored as a string)
    function passwordPrompt(passwordPrompt, defaultValue, convertAnswer) {
      var answer = prompt(passwordPrompt, defaultValue)
      if (convertAnswer) { answer = Number.parseFloat(answer) }
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
    var passwordLength = passwordPrompt(
      passwordLengthHeader +
      "Enter the length of the password. It must be an integer between 8 and 128.",
      20,
      true
    )
    //
    // Check for password-length errors
    while ( Number.isNaN(passwordLength) || Number.isInteger(passwordLength) === false || passwordLength < 8 || passwordLength > 128 ) {
      // If the password length is a string
      if ( Number.isNaN(passwordLength) ) {
        passwordLength = passwordPrompt(
          passwordLengthHeader +
          "Sorry, that’s a string. You must enter an integer between 8 and 128.",
          20,
          true
          )
      // If the password length is a decimal number
      } else if ( Number.isInteger(passwordLength) === false ) {
        passwordLength = passwordPrompt(
          passwordLengthHeader +
          "Sorry, that’s a decimal number. You must enter an integer between 8 and 128.",
          20,
          true
          )
      // If the password length is less than 8
      } else if (passwordLength < 8) {
        passwordLength = passwordPrompt(
          passwordLengthHeader +
          "Sorry, that’s less than 8. You must enter an integer between 8 and 128.",
          20,
          true
          )
      // If the password length is greater than 128
      } else if (passwordLength > 128) {
        passwordLength = passwordPrompt(
          passwordLengthHeader +
          "Sorry, that’s greater than 128. You must enter an integer between 8 and 128.",
          20,
          true
          )
      }
    }
    //
    // Prompt the user to choose whether they’d like to include lowercase characters
    var lowercaseCharacters = passwordPrompt(
      lowercaseCharactersHeader +
      "Choose whether you’d like to include lowercase characters (Yes or No):",
      "Yes",
      false
    )
    //
    // Check for lowercase-character errors
    while ( lowercaseCharacters !== "Yes" && lowercaseCharacters !== "No" ) {
      // If their choice is not Yes or No
      if ( lowercaseCharacters !== "Yes" && lowercaseCharacters !== "No") {
        lowercaseCharacters = passwordPrompt(
          lowercaseCharactersHeader +
          "Sorry, you must enter Yes or No:",
          "Yes",
          false
        )
      }
    }
    //
    // Prompt the user to choose whether they’d like to include uppercase characters
    var uppercaseCharacters = passwordPrompt(
      uppercaseCharactersHeader +
      "Choose whether you’d like to include uppercase characters (Yes or No):",
      "Yes",
      false
    )
    //
    // Check for uppercase-character errors
    while ( uppercaseCharacters !== "Yes" && uppercaseCharacters !== "No" ) {
      // If their choice is not Yes or No
      if ( uppercaseCharacters !== "Yes" && uppercaseCharacters !== "No") {
        uppercaseCharacters = passwordPrompt(
          uppercaseCharactersHeader +
          "Sorry, you must enter Yes or No:",
          "Yes",
          false
        )
      }
    }
    //
    // Prompt the user to choose whether they’d like to include integers
    var integers = passwordPrompt(
      integersHeader +
      "Choose whether you’d like to include integers (Yes or No):",
      "Yes",
      false
    )
    //
    // Check for integer errors
    while ( integers !== "Yes" && integers !== "No" ) {
      // If their choice is not Yes or No
      if ( integers !== "Yes" && integers !== "No") {
        integers = passwordPrompt(
          integersHeader +
          "Sorry, you must enter Yes or No:",
          "Yes",
          false
        )
      }
    }
    //
    // Prompt the user to choose whether they’d like to include special characters
    var specialCharacters = passwordPrompt(
      specialCharactersHeader +
      "Choose whether you’d like to include special characters (Yes or No):",
      "Yes",
      false
    )
    //
    // Check for special-character errors
    while ( specialCharacters !== "Yes" && specialCharacters !== "No" ) {
      // If their choice is not Yes or No
      if ( specialCharacters !== "Yes" && specialCharacters !== "No") {
        specialCharacters = passwordPrompt(
          specialCharactersHeader +
          "Sorry, you must enter Yes or No:",
          "Yes",
          false
        )
      }
    }
    //
    // Convert Yes and No to true and false, respectively
    if (lowercaseCharacters === "Yes") { lowercaseCharacters = true } else { lowercaseCharacters = false }
    if (uppercaseCharacters === "Yes") { uppercaseCharacters = true } else { uppercaseCharacters = false }
    if (integers === "Yes") { integers = true } else { integers = false }
    if (specialCharacters === "Yes") { specialCharacters = true } else { specialCharacters = false }
    //
    // Save the user’s choices
    var passwordChoices = {
      passwordLength,
      lowercaseCharacters,
      uppercaseCharacters,
      integers,
      specialCharacters
    }

    console.log(passwordChoices); // **debug**

    return "password123"; // temp

  } // eof generatePassword()

} // eof writePassword()

generateButton.addEventListener("click", writePassword);  // Add a listener event to generateButton
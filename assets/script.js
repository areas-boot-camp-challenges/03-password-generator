// Save the #generate element to generateButton
var generateButton = document.querySelector("#generate");
console.log(generateButton); // **debug**

// Write the password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); // Store the #password element to the passwordText variable

  passwordText.value = password;

  // Generate a password for the user.
  function generatePassword() {
    // Ask the user for their password criteria.
    function askForPasswordCriteria() {
      // Define a prompt function.
      function passwordPrompt( passwordPrompt, defaultValue, convertAnswer = false ) {
        var answer = prompt(passwordPrompt, defaultValue)
        if (convertAnswer) { answer = Number.parseFloat(answer) }  // Convert the answer to a number or NaN (makes it easier to check for password-length errors).
        return answer
      }
      //
      // Define prompt headers.
      var lengthHeader = "Length \n"
      var lowercaseHeader = "Lowercase Characters \n"
      var uppercaseHeader = "Uppercase Characters \n"
      var integersHeader = "Integers \n"
      var specialHeader = "Special Characters \n"
      //
      // Define error messages.
      var yesNoError = "Sorry, you must enter Yes or No."
      //
      // Prompt the user to enter a password length.
      var length = passwordPrompt( lengthHeader + "The length of your password matters — the longer the better. Tell us how long you’d like it to be (or press Enter to use the recommended default). You must enter a whole number between 8 and 128.", 20, true )
      // Check for errors.
      while ( Number.isNaN(length) || Number.isInteger(length) === false || length < 8 || length > 128 ) {
        // If the password length is a string:
        if ( Number.isNaN(length) ) {
          length = passwordPrompt( lengthHeader + "Sorry, that’s not a number. You must enter whole number between 8 and 128.", 20, true )
        // If the password length is a decimal number:
        } else if ( Number.isInteger(length) === false ) {
          length = passwordPrompt( lengthHeader + "Sorry, that’s not a whole number. You must enter whole number between 8 and 128.", 20, true )
        // If the password length is less than 8:
        } else if (length < 8) {
          length = passwordPrompt( lengthHeader + "Sorry, that’s less than 8. You must enter whole number between 8 and 128.", 20, true )
        // If the password length is greater than 128:
        } else if (length > 128) {
          length = passwordPrompt( lengthHeader + "Sorry, that’s greater than 128. You must enter whole number between 8 and 128.", 20, true )
        }
      }
      //
      // Remind the user to choose at least one of the criteria.
      alert("Next, you’ll choose whether to include lowercase or uppercase characters, numbers, or special characters in your password. Remember to choose at least one of these options.")
      //
      // Check that the user chose at least one of the criteria.
      while ( Number.isNaN( lowercase + uppercase + integers + special ) || lowercase + uppercase + integers + special < 1 ) {
        // Prompt the user to choose whether they’d like to include lowercase characters.
        var lowercase = passwordPrompt( lowercaseHeader + "Choose whether you’d like to include lowercase characters (Yes or No):", "Yes" )
        // Check for errors.
        while ( lowercase !== "Yes" && lowercase !== "No" ) {
          // If their choice is not Yes or No:
          if ( lowercase !== "Yes" && lowercase !== "No") {
            lowercase = passwordPrompt( lowercaseHeader + yesNoError, "Yes" )
          }
        }
        //
        // Prompt the user to choose whether they’d like to include uppercase characters.
        var uppercase = passwordPrompt( uppercaseHeader + "Choose whether you’d like to include uppercase characters (Yes or No):", "Yes" )
        // Check for uppercase-character errors.
        while ( uppercase !== "Yes" && uppercase !== "No" ) {
          // If their choice is not Yes or No
          if ( uppercase !== "Yes" && uppercase !== "No") {
            uppercase = passwordPrompt( uppercaseHeader + yesNoError, "Yes" )
          }
        }
        //
        // Prompt the user to choose whether they’d like to include integers.
        var integers = passwordPrompt( integersHeader + "Choose whether you’d like to include integers (Yes or No):", "Yes" )
        // Check for integer errors.
        while ( integers !== "Yes" && integers !== "No" ) {
          // If their choice is not Yes or No
          if ( integers !== "Yes" && integers !== "No") {
            integers = passwordPrompt( integersHeader + yesNoError, "Yes" )
          }
        }
        //
        // Prompt the user to choose whether they’d like to include special characters.
        var special = passwordPrompt( specialHeader + "Choose whether you’d like to include special characters (Yes or No):", "Yes" )
        // Check for special-character errors.
        while ( special !== "Yes" && special !== "No" ) {
          // If their choice is not Yes or No
          if ( special !== "Yes" && special !== "No") {
            special = passwordPrompt( specialHeader + yesNoError, "Yes" )
          }
        }
        //
        // Convert Yes and No to true and false, respectively.
        if (lowercase === "Yes") { lowercase = true } else { lowercase = false }
        if (uppercase === "Yes") { uppercase = true } else { uppercase = false }
        if (integers === "Yes") { integers = true } else { integers = false }
        if (special === "Yes") { special = true } else { special = false }
        //
        // If the user didn’t choose at least one criteria, remind them they must enter Yes at least once.
        if ( lowercase + uppercase + integers + special < 1 ) {
          alert("Sorry, you must enter Yes for at least one of the options. Let’s try that again.")
        }
        //
      }
      //
      // Return an object with the password criteria.
      return { length, lowercase, uppercase, integers, special }
      //
    } // eof askForPasswordCriteria()
    //
    // Call the askForPasswordCriteria() function and save the user’s password criteria.
    var passwordCriteria = askForPasswordCriteria()
    //
    // Define all possible password characters.
    var passwordCharacters = {
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      integer: "0123456789",
      special: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
    }
    // Save the random character generators in an object.
    var randomCharacterGenerators = {
      // Generate a random lowercase character.
      lowercase: function() {
        return passwordCharacters.lowercase[ Math.floor( Math.random() * passwordCharacters.lowercase.length ) ]
      },
      // Generate a random uppercase character.
      uppercase: function() {
        return passwordCharacters.uppercase[ Math.floor( Math.random() * passwordCharacters.uppercase.length ) ]
      },
      // Generate a random integer.
      integer: function() {
        return passwordCharacters.integer[ Math.floor( Math.random() * passwordCharacters.integer.length ) ]
      },
      // Generate a random special character.
      special: function() {
        return passwordCharacters.special[ Math.floor( Math.random() * passwordCharacters.special.length ) ]
      }
    }
    //
    // Choose a random random character generator
    function chooseARandomRandomCharacterGenerator() {
      return Object.keys(randomCharacterGenerators)[ Math.floor( Math.random() * Object.keys(randomCharacterGenerators).length ) ]
    }
    //
    // Start with an empty password.
    var password = ""
    // Add random characters to the password until its length matches the user’s criteria
    while ( password.length < passwordCriteria.length ) {
      // If user asked for lowercase characters:
      if (passwordCriteria.lowercase && chooseARandomRandomCharacterGenerator() === "lowercase") {
        password = password + randomCharacterGenerators.lowercase()
      }
      // If user asked for uppercase characters:
      if (passwordCriteria.uppercase && chooseARandomRandomCharacterGenerator() === "uppercase") {
        password = password + randomCharacterGenerators.uppercase()
      }
      // If user asked for integers:
      if (passwordCriteria.integers) {
        password = password + randomCharacterGenerators.integer()
      }
      // If user asked for special characters:
      if (passwordCriteria.special) {
        password = password + randomCharacterGenerators.special()
      }
      //
    }
    //
    // Return the generated password.
    return password
    //
  } // eof generatePassword()

} // eof writePassword()

// Add a listener event to generateButton
generateButton.addEventListener("click", writePassword);
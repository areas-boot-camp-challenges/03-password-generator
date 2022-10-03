var generateButton = document.querySelector("#generate"); // Store the #generate element to generateButton
console.log(generateButton); // **debug**

// Write the password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password); // **debug**
  var passwordText = document.querySelector("#password"); // Store the #password element to the passwordText variable

  passwordText.value = password;

  // Prompt the user for password criteria
  function generatePassword() {

    // Prompt the user to enter a password length
    var passwordLength = prompt("Enter the length of the password. It must be an integer between 8 and 128.", 20);
    //
    // Convert their answer to a number or NaN (by default, the user’s answer is stored as a string)
    passwordLength = Number.parseFloat(passwordLength);
    //
    // If the password length is not a number
    if ( Number.isNaN(passwordLength) ) {
      console.log("passWordLength is not a number."); // **debug**
    // If the password length is not an integer
    } else if ( Number.isInteger(passwordLength) === false ) {
      console.log("passWordLength is not an integer."); // **debug**
    // If the password length is less than 8
    } else if (passwordLength < 8) {
      console.log("passWordLength is less than 8."); // **debug**
    // If the password length is greater than 128
    } else if (passwordLength > 128) {
      console.log("passWordLength is greater than 128."); // **debug**
    // Success
    } else {
      console.log("passWordLength is an integer and is between 8 and 128. Noice.") // **debug**  
    }

    // Prompt the user to choose whether they’d like to include lowercase characters
    var passwordCharactersLowercase = prompt("Choose whether you’d like to include lowercase characters (Yes or No):", "Yes");
    //
    // If their choice is not Yes or No
    if ( passwordCharactersLowercase !== "Yes" && passwordCharactersLowercase !== "No") {
      console.log("passwordCharactersLowercase is not Yes or No."); // **debug**
    // Success
    } else {
      console.log("passwordCharactersLowercase is Yes or No. Noice."); // **debug**
    }

    // Prompt the user to choose whether they’d like to include uppercase characters
    var passwordCharactersUppercase = prompt("Choose whether you’d like to include uppercase characters (Yes or No):", "Yes");
    //
    // If their choice is not Yes or No
    if ( passwordCharactersUppercase !== "Yes" && passwordCharactersUppercase !== "No") {
      console.log("passwordCharactersUppercase is not Yes or No."); // **debug**
    // Success
    } else {
      console.log("passwordCharactersUppercase is Yes or No. Noice."); // **debug**
    }

    // Prompt the user to choose whether they’d like to include integers
    var passwordCharactersIntegers = prompt("Choose whether you’d like to include integers (Yes or No):", "Yes");
    //
    // If their choice is not Yes or No
    if ( passwordCharactersIntegers !== "Yes" && passwordCharactersIntegers !== "No") {
      console.log("passwordCharactersIntegers is not Yes or No."); // **debug**
    // Success
    } else {
      console.log("passwordCharactersIntegers is Yes or No. Noice."); // **debug**
    }

    // Prompt the user to choose whether they’d like to include special characters
    var passwordCharactersSpecial = prompt("Choose whether you’d like to include special characters (Yes or No):", "Yes");
    //
    // If their choice is not Yes or No
    if ( passwordCharactersSpecial !== "Yes" && passwordCharactersSpecial !== "No") {
      console.log("passwordCharactersSpecial is not Yes or No."); // **debug**
    // Success
    } else {
      console.log("passwordCharactersSpecial is Yes or No. Noice."); // **debug**
    }

    var passwordChoices = {
      passwordLength,
      passwordCharactersLowercase,
      passwordCharactersUppercase,
      passwordCharactersIntegers,
      passwordCharactersSpecial
    }

    console.log(passwordChoices); // **debug**

    return "password123";

  }

}

generateButton.addEventListener("click", writePassword);  // Add a listener event to generateButton
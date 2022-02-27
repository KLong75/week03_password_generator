// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//possible characters
const lowercaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const uppercaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W','X', 'Y', 'Z']
const numberChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "+", "=", "(", ")", "'", "\"", " ", ",", ".", "/", ":", ";", "<", ">", "?", "[", "]", "/", "_", "`", "{", "}", "|", "~"];

// get user parameters (length, numbers, uppercase, lowercase, special characters)
function generatePasswordOptions() {
  var lengthInput = parseInt(prompt('Enter the number of characters for your password'))

  if(isNaN(lengthInput) === true) {
    alert('Password length must be a number')
    writePassword()
    return
  }

  if (lengthInput < 8) {
    alert('Password must be at least 8 characters long')
    writePassword()
    return
  }

  if (lengthInput > 128) {
    alert('Password must be less than 128 characters')
    writePassword()
    return
  }

 var hasLowercaseCharsInput = confirm('Click to confirm that you want lowercase characters in your password')

 var hasUppercaseCharsInput = confirm('Click to confirm that you want uppercase characters in your password')

 var hasNumbersInput = confirm('Click to confirm that you want numbers in your password')

 var hasSpecialCharsInput = confirm('Click to confirm that you want special characters in your password')


   var passwordOptions = {
     length: lengthInput,
     hasLowercaseChars: hasLowercaseCharsInput,
     hasUppercaseChars: hasUppercaseCharsInput,
     hasNumbers: hasNumbersInput,
     hasSpecialChars: hasSpecialCharsInput
   }

   return passwordOptions;
} 

// build password using user parameters (random)
function generatePassword() {
  var options = generatePasswordOptions() 
  console.log(options) 
  let selectedChars = [];
  let myPassword = "";

  if(options.hasUppercaseChars){
    selectedChars = selectedChars.concat(uppercaseChars);
  }

  if(options.hasLowercaseChars){
    selectedChars = selectedChars.concat(lowercaseChars);
  }

  if(options.hasNumbers){
    selectedChars = selectedChars.concat(numberChars);
  }

  if(options.hasSpecialChars){
    selectedChars = selectedChars.concat(specialChars);
  }

  for(let i = 0; i < options.length ; i++){
    const randomNumber = Math.floor(Math.random() * selectedChars.length);
    const randomCharacter = selectedChars[randomNumber]
    myPassword = myPassword + randomCharacter;
  }
  // return password through generatePassword()
  return myPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password")
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



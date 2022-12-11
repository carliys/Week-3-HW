

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

var passwordLength = prompt("How many characters would you like?");
if (passwordLength <8 || passwordLength >128){
  alert('password must be between 8-56')
  return
}

// password lenght must be no shorter than 8!
// password cant be longer than 56 characters!

var special = confirm('Click "OK" to include special characters.')
var number = confirm('Click "OK" to include numeric characters.')
var lower = confirm('Click "OK" to include lowercase characters.')
var upper = confirm('Click "OK" to include uppercase characters.')

var specialCharacters = "!@#$%^&*"
var numbers = "1234567890"
var lowerCase = "zxcvbnmasdfghjklqwertyuiop"
var upperCase = "ZXCVBNMASDFGHJKLQWERTYUIOP"

var chars = ""
if (special){
chars += specialCharacters
}
if(number){
  chars += numbers
}
if (lower){
  chars += lowerCase
}
if (upper){
  chars += upperCase
}

var password = "";
  for (var i = 0; i < passwordLength; i++) { 
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.charAt(randomNumber);
    console.log(password);
  } 
  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

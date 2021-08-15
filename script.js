// Get references to the #generate element

var generateBtn = document.querySelector("#generate");
var passwordArray = [];
// Prompt user for input
var passwordLength = prompt("How many characters do you want in your password? Please choose between 8-128.")
//requests input from user
if (passwordLength >= 8 && passwordLength <= 128)  {
  var getLower = confirm("Include lower case letters?")
  var getUpper = confirm("Include upper case letters?")
  var getNumber = confirm("Include numbers?")
  var getSpecial = confirm("Inlcude special characters?")
  alert("Your options are saved. Click Generate Password.") 
} 
else {
alert("Length must be 8-128 characters");
}



   
var randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomUpper,
  special: getRandomSpecial
}


  // Add event listener to generate button
generateBtn.addEventListener("click", () => {
  var length = parseInt(passwordLength);
  var hasLower = getLower;
  var hasUpper = getUpper;
  var hasNumber = getNumber;
  var hasSpecial = getSpecial;

password.innerText = password(
  hasLower,
  hasUpper,
  hasNumber,
  hasSpecial,
  length
  )
  
});
    
//   MOVED     MOVED    MOVED
/*

  console.log(typeArray);

if(typeArray.length === 0) {
  alert("You must choose at lease 1 option.");
}*/


  
}

function generatePassword(lower, upper, number, special, length) {
  generatedPassword = "";
  var typesCount = lower + upper + number + special;
 // console.log("typesArr: ", typesArr);
}
for(var i = 0; i = passwordLength; i += typeArray) {
  typeArray.forEach(type => {
    const randomFunction = Object.keys(type) [0];
    generatedPassword = "";
    const typeArray = [{getLower}, {getUpper}, {getNumber}, {getSpecial}].filter
    (item => Object.values(item) [0]);
  
    console.log(typeArray);
  
  if(typeArray.length === 0) {
    alert("You must choose at lease 1 option.");
  }
  });

// generate random charactors from charactor code
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() *10 ) + 48);
  }
  
  function getRandomSpecial() {
    return String.fromCharCode(Math.floor(Math.random() *15 ) + 33);
    
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
}
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

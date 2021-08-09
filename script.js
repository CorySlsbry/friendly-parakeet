// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
const arrayTypes = [{getLower}, {getUpper}, {getNumber}, {getSpecial}]
console.log('arayTypes: ', arrayTypes);

// Prompt user for input

var passwordLength = prompt("How many characters do you want in your password? Please choose between 8-128.")
//Checks input
if (passwordLength >= 8 && passwordLength <= 128)  {
console.log(passwordLength)

var getLower = confirm("Include lower case letters?")
var getUpper = confirm("Include upper case letters?")
var getNumber = confirm("Include numbers?")
var getSpecial = confirm("Inlcude special characters?") 

} else { (passwordLength < 8 || passwordLength > 128) 
  alert("Length must be 8-128 characters");
}
//Generates password character 

  // Functions to generate random characters
  randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomUpper,
    special: getRandomSpecial  
  }; 
  
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


 /*
//Array
let selectedChar = [getRandomLower || getRandomUpper || getRandomNumber || getRandomSpecial];
let Length = [Number(passwordLength)];  

  {
    
    if (getRandomLower) {
      selectedChar += getRandomLower;
    }

    if (getRandomUpper) {
      selectedChar += getRandomUpper;
    }
    
    if (getRandomNumber) {
      selectedChar += getRandomNumber;    
    }

    if (getRandomSpecial) {
      selectedChar += getRandomSpecial;
    }

    console.log(selectedChar);
  }
*/
// Write password to the #password input
function writePassword() {
  /* const length = +passwordLength.value;
  const hasLower = lower.true;
  const hasUpper = upper.true;
  const hasNumber = number.true;
  const hasSpecial = special.true; */
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

console.log(hasLower, hasNumber, hasSpecial, hasUpper)
  for (var i = o; i < passwordLength; i++) {
    result.innerText = characters(Math.floor(Math.random() * passwordLength));
  }

  passwordText.value = password;


}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




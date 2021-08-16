// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordArray = [];


// generate random charactors from charactor code
lower = getRandomLower()
upper = getRandomUpper()
number = getRandomNumber()
special = getRandomSpecial()  


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


  // Add event listener to generate button
generateBtn.addEventListener("click", (element) => {
  element.preventDefault()
  const passwordLengthEl = parseInt(passwordLength)
  const getLowerEl = getLower
  const getUpperEl = getUpper
  const getSpecialEl = getSpecial
  const getNumberEl = getNumber
  const password = generatePassword(passwordLengthEl, getLowerEl, getUpperEl, getSpecialEl, getNumberEl)
  passwordArea.innerText = password
  console.log(password)
   
})

function generatePassword(passwordLengthEl, getLowerEl, getUpperEl, getSpecialEl, getNumberEl,) {
  let generatedPassword = []
    if (getLowerEl) generatedPassword = generatedPassword.concat(lower)
    if (getUpperEl) generatedPassword = generatedPassword.concat(upper)
    if (getNumberEl) generatedPassword = generatedPassword.concat(number)
    if (getSpecialEl) generatedPassword = generatedPassword.concat(special)
  
  let passwordCharacters = []
  for (let i = 0; i < parseInt(passwordLengthEl); i++) {
    const characterList = generatedPassword[Math.floor(Math.random() * generatedPassword.length)]
    passwordCharacters.push(String.fromCharCode(characterList))
  }

  return passwordCharacters.join('')
  
}

/*function passwordArray() {
  const array = []
  for (let i = 0; i <= passwordLengthEl; i++) {
    array.push(i)
  }
  return array  
}*/






  
 


  

/*password.innerText = passwordArray(
  getLower,
  getUpper,
  getNumber,
  getSpecial,
  length) */
//}


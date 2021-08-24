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
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSpecial() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}



// Add event listener to generate button
generateBtn.addEventListener("click", (element) => {
  element.preventDefault()
  // Prompt user for input
  var passwordLength = prompt("How many characters do you want in your password? Please choose between 8-128.")
  //requests input from user
  if (passwordLength >= 8 && passwordLength <= 128) {
    var getLower = confirm("Include lower case letters?")
    var getUpper = confirm("Include upper case letters?")
    var getNumber = confirm("Include numbers?")
    var getSpecial = confirm("Inlcude special characters?")
  }
  else {
    alert("Length must be 8-128 characters");
  }

  const passwordLengthEl = parseInt(passwordLength)
  // const getLowerEl = getLower
  // const getUpperEl = getUpper
  // const getSpecialEl = getSpecial
  // const getNumberEl = getNumber
  const password = generatePassword(passwordLengthEl, getLower, getUpper, getSpecial, getNumber)
  passwordArea.innerText = password
  

})

function generatePassword(passwordLengthEl, getLowerEl, getUpperEl, getSpecialEl, getNumberEl,) {
  let generatedPassword = ""
  for (let i = 0; i < parseInt(passwordLengthEl); i++)  {
  // Picking a random number from 4 options each one representing character in password
    var pick = Math.floor(Math.random() * 4) + 1
  // Create if statements
      // if lower true
   if (getLowerEl && pick === 1) {
      var x = getRandomLower()
      generatedPassword += x
    } else if (getUpperEl && pick === 2) {
        var x = getRandomUpper()
        generatedPassword += x
      
    } else if (getSpecialEl && pick === 3) {
      var x = getRandomSpecial()
      generatedPassword += x
    
  } else if (getNumberEl && pick === 4) {
    var x = getRandomNumber()
    generatedPassword += x
  
}
  
}
}
console.log(generatedPassword);

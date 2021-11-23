// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var characters = prompt("Please enter a password lenght between 8-128.");
  var 
  characterlenghttotal = parseInt(characters);
  if (
    characterlenghttotal >= 8 && 
    characterlenghttotal <= 128) {
    var newpassword =[];
    var possible = [];

    var letters = "abcdefghijklmnopqrstuvwxyz".split('');
    var lettersup = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    var special = "`~!@#$%^&*()_-+=:;?/.,<>".split('');
    var zero = "0123456789".split('');

    var lcinclusion = confirm("Would you like to include lowercase letters?");
    var upcinclusion = confirm("Would you like to include uppercase letters?");
    var spcinclusion = confirm("Would you like to include special characters?");
    var numbinclusion = confirm("Would you like to include numbers?");

    if (lcinclusion) {
      possible = possible.concat(letters);
    }

    if (upcinclusion) {
      possible = possible.concat(lettersup);
    }

    if (spcinclusion) {
      possible = possible.concat(special);
    }

    if (numbinclusion) {
      possible = possible.concat(zero);
    }

    for (var i = 0; i < 
      characterlenghttotal; i++) {
      var random = Math.floor(Math.random() * possible.length);
      console.log(random);
      newpassword.push(possible[random]);
    }
    return newpassword.join('');
  } else {
    console.log("Wrong! Try again!");
    alert("Wrong! Try again!");
    generatePassword();
  }
  return "";
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;}

// add event listener to generate button
generateBtn.addEventListener("click", writePassword);
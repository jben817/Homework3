const form = document.getElementById('passGen')
const passwordLengthElement = document.getElementById('passwordLength')
const includeLowerElement = document.getElementById('includeLower')
const includeUpperElement = document.getElementById('includeUpper')
const includeNumberElement = document.getElementById('includeNumber')
const includeSymbolsElement = document.getElementById('includeSymbols')
const blankBox = document.getElementById('blankBox')
const generateIt = document.getElementById('generateIt')

generateIt.addEventListener('click', e => {
    e.preventDefault()
const passwordLength = parseInt(passwordLengthElement.value)
const includeLower = includeLowerElement.checked
const includeUpper = includeUpperElement.checked
const includeNumber = includeNumberElement.checked
const includeSymbols = includeSymbolsElement.checked
blankBox.innerText = generatePassword (passwordLength, includeUpper, includeLower, includeNumber, includeSymbols)
});



function generatePassword (passwordLength, includeUpper, includeLower, includeNumber, includeSymbols) {
let pwString = "";
let password = "";

if (includeLower === true)
pwString = pwString + "abcdefghijklmnopqrstuvwxyz";

if (includeUpper === true)
pwString = pwString + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

if (includeNumber === true)
pwString = pwString + "1234567890";

if (includeSymbols === true)
pwString = pwString + "!@#$%^&*()+{}:?";

console.log(pwString)

for(let i=0; i < passwordLength; i++){
    password += pwString[Math.floor(Math.random() * pwString.length)]
}
return password
    }

   
// function includeLowerCase() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// };
// includeLowerCase();

// function includeUpperCase() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// };
// includeUpperCase();

// function includeNumberFunc() {
//     return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// };
// includeNumberFunc();

// function includeSymbolFunc() {
//     var symbols = "!@#$%^&*()+{}:?";
//     return symbols[Math.floor(Math.random() * 15)]; 
// };
// includeSymbolFunc();

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
    if(includeLower === true)
    return includeLowerCase();
    if(includeUpper === true)
    return includeUpperCase();
    if(includeNumber === true)
    return includeNumberFunc();
    if(includeSymbols === true)
    return includeSymbolFunc();
}

function includeLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

function includeUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

function includeNumberFunc() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

function includeSymbolFunc() {
    var symbols = "!@#$%^&*()+{}:?";
    return symbols[Math.floor(Math.random() * 15)]; 
};


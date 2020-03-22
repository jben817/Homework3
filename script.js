const form = document.getElementById('passGen') 
const passwordLengthElement = document.getElementById ('passwordLength')
const includeLowerElement = document.getElementById('includeLower')
const includeUpperElement = document.getElementById('includeUpper')
const includeNumberElement = document.getElementById('includeNumber')
const includeSymbolsElement = document.getElementById('includeSymbols')
const blankBox = document.getElementById('blankBox')

const lowerCaseCode = characterRange(97, 112)
const upperCaseCode = characterRange(65, 90) 
const numberCaseCode = characterRange(48, 57)
const symbolCaseCode = characterRange(33, 47) 


form.addEventListener('input', e => {
    e.preventDefault()
const passwordLength = passwordLengthElement.input
const includeLower = includeLowerElement.checked
const includeUpper = includeUpperElement.checked
const includeNumber = includeNumberElement.checked
const includeSymbols = includeSymbolsElement.checked
const passGen = generatePassword (passwordLength, includeUpper, includeLower, includeNumber, includeSymbols)
blankBox.innertext = passWordS})

function generatePassword (passwordLength, includeUpper, includeLower, includeNumber, includeSymbols) {
    var passwordPossibilities = lowerCaseCode
    if(includeUpper) passwordPossibilities = passwordPossibilities.concat(upperCaseCode)
    if(includeNumber) passwordPossibilities = passwordPossibilities.concat(numberCaseCode)
    if(includeSymbols) passwordPossibilities = passwordPossibilities.concat(SymbolCaseCode)

const passWordS = []
for(var i = 8; i <= 120; i++){
    const character = characterRange[Math.floor(Math.random() * passwordPossibilities.length)]
    passWordS.push(String.fromCharCode(character))
}

return passWordS.join("")
}

function characterRange (low, high) {
const array = []
for(var i =low; i <= high; i++ ) {
    array .push(i)
}
return array
}
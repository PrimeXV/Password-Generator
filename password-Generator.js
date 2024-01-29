// Get all the necessary elements
const passwordOutput = document.getElementById('passwordOutput');
const lengthInput = document.getElementById('length');
const numberCheckbox = document.getElementById('checkbox1');
const specialCharCheckbox = document.getElementById('checkbox2');
const generatePasswordButton = document.querySelector('.generate-password');




// Characters for the password
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseLetters = lowerCaseLetters.toUpperCase();
const numbers = '0123456789';
const specialCharacters = '!@#$%^&*()_+-=[]{}|;:,.<>?';




// Function to generate a password
function generatePassword() {
    let allPossibleCharacters = lowerCaseLetters + upperCaseLetters;
    if (numberCheckbox.checked) {
        allPossibleCharacters += numbers;
    }
    if (specialCharCheckbox.checked) {
        allPossibleCharacters += specialCharacters;
    }

    let password = '';
    for (let i = 0; i < lengthInput.value; i++) {
        const randomIndex = Math.floor(Math.random() * allPossibleCharacters.length);
        console.log(randomIndex);
        password += allPossibleCharacters[randomIndex];
    }

    return password;
}



// Event listener for the generate password button
generatePasswordButton.addEventListener('click', () => {
    passwordOutput.value = generatePassword();
});

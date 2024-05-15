const generateBtn = document.getElementById('generateBtn');
const passwordDisplay = document.getElementById('password');
const lengthInput = document.getElementById('length');

generateBtn.addEventListener('click', () => {
    const length = lengthInput.value;
    const password = generatePassword(length);
    passwordDisplay.textContent = password;
});

const generatePassword = (length) => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-='; 
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
};

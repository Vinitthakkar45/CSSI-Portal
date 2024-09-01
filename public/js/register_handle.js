document.querySelector('form').addEventListener('submit', function (event) {
    console.log("ertyui");
    const emailInput = document.getElementById('email');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@sot\.pdpu\.ac\.in$/;

    if (!emailPattern.test(emailInput.value)) {
        event.preventDefault(); 
        document.getElementById('emailError').textContent = 'Invalid email format.';
    } else {
        document.getElementById('emailError').textContent = ''; 
    }

    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordError = document.getElementById('passwordError');
    const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d#@$!%*?&]{8,}$/;

    if (!strongPasswordPattern.test(passwordInput.value)) {
        event.preventDefault(); 
        passwordError.textContent = 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
    } else {
        passwordError.textContent = ''; 
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        event.preventDefault(); 
        passwordError.textContent += ' Passwords do not match.'; 
    }
});

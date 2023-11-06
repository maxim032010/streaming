function togglePassword() {
    var passwordField = document.getElementById('password');
    var checkbox = document.getElementById('showPassword');
    passwordField.type = checkbox.checked ? 'text' : 'password';
}

function login(event) {
    event.preventDefault(); 
    
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var emailValue = email.value;
    var passwordValue = password.value;

    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    // Überprüfe, ob die E-Mail und das Passwort übereinstimmen
    var isValid = existingUsers.some(function(user) {
        return user.email === emailValue && user.password === passwordValue;
    });

    if (isValid) {
        console.log('Zugriff gewährt');
        email.classList.remove('error-border');
        password.classList.remove('error-border');
        email.classList.add('success-border');
        password.classList.add('success-border');

        // Setze die angemeldete E-Mail im Local Storage
        localStorage.setItem('angemeldeteEmail', emailValue);

        window.location.href = 'Home/home.html';
    } else {
        console.log('Zugriff abgelehnt');
        email.classList.remove('success-border');
        password.classList.remove('success-border');
        email.classList.add('error-border');
        password.classList.add('error-border');
        
        // Fehlermeldung und rote Box anzeigen
        var errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block';
        
        var errorBox = document.getElementById('error-box');
        errorBox.style.display = 'block';
    }
}

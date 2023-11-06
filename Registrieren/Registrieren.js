function togglePassword() {
    var passwordField = document.getElementById('password');
    var checkbox = document.getElementById('showPassword');
    passwordField.type = checkbox.checked ? 'text' : 'password';
}

function registrieren(event) {
    event.preventDefault(); 
    
    var vorname = document.getElementById('vorname').value;
    var nachname = document.getElementById('nachname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    // Überprüfe, ob die E-Mail, Vorname, Nachname und das Passwort bereits existieren
    var isExisting = existingUsers.some(function(user) {
        return user.email === email || (user.vorname === vorname && user.nachname === nachname && user.password === password);
    });

    if (isExisting) {
        var errorBox = document.getElementById('error-box');
        errorBox.style.display = 'block';
    } else {
        var newUser = {
            vorname: vorname,
            nachname: nachname,
            email: email,
            password: password
        };

        existingUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUsers));

        var registrierungsErfolg = document.getElementById('registrierungs-erfolg');
        registrierungsErfolg.textContent = `Registrierung erfolgreich! Willkommen, ${vorname} ${nachname} (${email})`;
    }
}


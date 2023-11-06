document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event wurde aufgerufen.'); 
    var angemeldeteEmail = localStorage.getItem('angemeldeteEmail');

    if (angemeldeteEmail) {
        document.getElementById('angemeldeteEmail').textContent = angemeldeteEmail;
    }
});

function logout() {
    localStorage.removeItem('angemeldeteEmail');
    window.location.href = '../index.html';
}

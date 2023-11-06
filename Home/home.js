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

function toggleAsideMenu() {
    const aside = document.querySelector('aside');
    aside.classList.toggle('open');
  }
  
  function toggleAsideMenu() {
    const aside = document.querySelector('aside');
    
    if (aside.classList.contains('closed')) {
      aside.classList.remove('closed');
      aside.classList.add('open');
      // Füge hier Code hinzu, der ausgeführt werden soll, wenn aside geöffnet ist
      // Beispiel: aside.style.textAlign = 'left';
    } else {
      aside.classList.remove('open');
      aside.classList.add('closed');
      // Füge hier Code hinzu, der ausgeführt werden soll, wenn aside geschlossen ist
      // Beispiel: aside.style.textAlign = 'center';
    }
  }
  
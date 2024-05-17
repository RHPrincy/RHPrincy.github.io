const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


// when we click on hamburger icon its close 

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier si le mode sombre doit être activé par défaut
    const darkMode = localStorage.getItem('darkMode') === 'true';
    
    if (darkMode) {
        document.body.classList.add('dark-mode');
    }
    
    // Écouter l'événement change sur le checkbox
    document.getElementById('modeToggle').addEventListener('change', function(e) {
        if (e.target.checked) {
            // Appliquer le mode sombre
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', true);
        } else {
            // Retourner au mode clair
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', false);
        }
    });
});
// Sélectionnez tous les éléments.nav-link et .intro-buttons
const navLinks = document.querySelectorAll('.nav-link');
const btn = document.querySelectorAll('.intro-buttons');

// Fonction pour afficher l'alerte
function showErrorAlert() {
    alert("Site en cours de construction, veuillez réessayer ultérieurement.");
}

// Ajoutez l'écouteur d'événements à chaque élément.nav-link et .intro-buttons
navLinks.forEach(navLink => {
    navLink.addEventListener("click", showErrorAlert);
});
btn.forEach(btn => {
    btn.addEventListener("click", showErrorAlert);
});



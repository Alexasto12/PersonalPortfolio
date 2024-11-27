let currentAnimation = null;

/**
 * Toggles the style between light and dark mode.
 * Changes the class of the document element and loads the appropriate Lottie animation.
 */
function toggleStyleButton() {
    if (document.documentElement.classList.contains('light')) {
        document.documentElement.classList.replace('light', 'dark'); // Canvia la classe de light a dark 
        setTimeout(() => {
            lottieAnimation('./media/JSON/Dark-Background.json'); // Carrega l'animació per al mode fosc
        }, 50); // Espera 180ms per a que es canvii l'animació
    } else {
        document.documentElement.classList.replace('dark', 'light'); // Canvia la classe de dark a light
        setTimeout(() => {
            lottieAnimation('./media/JSON/Light-Background.json'); // Carrega l'animació per al mode clar
        }, 50); // Espera 180ms per a que es canvii l'animació
    }
}

/**
 * Loads a Lottie animation.
 * Destroys the current animation if it exists, then loads a new animation from the specified path.
 * 
 * @param {string} path - The path to the Lottie animation JSON file.
 */
function lottieAnimation(path) {
    var actualFrame = 0; // Guarda l'últim frame de l'animació
    if (currentAnimation) {
        actualFrame = currentAnimation.currentFrame;
        currentAnimation.destroy(); // Destrueix l'animació anterior
    }
    currentAnimation = lottie.loadAnimation({ 
        container: document.getElementById('lottie-container'),  // Element on es carregarà l'animació
        renderer: 'svg',  // Tipus de renderització
        loop: true,   // Bucle
        autoplay: true,  // Reproducció automàtica
        path: path  // Path de l'arxiu JSON de l'animació passat per paràmetre
    });
    currentAnimation.setSpeed(0.2); // Velocitat de l'animació
    currentAnimation.goToAndStop(actualFrame, true); // Va al frame actual
}

/**
 * Event listener for when the DOM content is loaded.
 * Loads the appropriate Lottie animation based on the current document class.
 */
document.addEventListener('DOMContentLoaded', (event) => { // Quan la pàgina s'ha carregat
    if (document.documentElement.classList.contains('light')) {
        lottieAnimation('./media/JSON/Light-Background.json');
    } else {
        lottieAnimation('./media/JSON/Dark-Background.json');
    }
});
window.onload = function() {
    showElement('grid-container');
    setInterval(() => {
        document.getElementsByClassName('time-text')[0].innerHTML = new Date().toLocaleTimeString().substring(0,5)
    }, 1000);
document.getElementsByClassName('day-text')[0].innerHTML = new Date().toLocaleDateString();
}

function showElement(className) {
    var div = document.getElementsByClassName(className)[0];
    var val = div.style.display;
    
    if (val === "none") {
        div.style.display = "grid";
        div.style.opacity = "0";
        setTimeout(() => {
            div.style.transition = "opacity 0.5s ease-in";
            div.style.opacity = "1";
        }, 300);
    } else {
        div.style.transition = "opacity 0.5s ease";
        div.style.transitionDelay = ".25s";
        div.style.opacity = "0";
        setTimeout(() => {
            div.style.display = "none";
        }, 300);
    }

    return false;
}
function hideElement(className) {
    var div = document.getElementsByClassName(className)[0];
    var val = div.style.display;
    
    if (val !== "none") {
            div.style.transition = "opacity 0.5s ease";
            div.style.transitionDelay = ".25s";
            div.style.opacity = "0";
            setTimeout(() => {
                div.style.display = "none";
            }, 300);
        }

    return false;
}

function toggleNav() {
    var navScreen = document.querySelector('.nav-screen');
    if (navScreen.style.width === '0px' || navScreen.style.width === '') {
        navScreen.style.width = '250px';
    } else {
        navScreen.style.width = '0';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const startDate = new Date(2024, 9, 30);
    const currentDate = new Date();
    const daysPast = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));

    document.getElementById('daysPast').innerHTML = daysPast;
});

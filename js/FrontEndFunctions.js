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
        lottieAnimation('./media/JSON/Light-Background.json'); // Carrega l'animació per al mode clar si la pàgina s'ha carregat en mode clar
    } else {
        lottieAnimation('./media/JSON/Dark-Background.json'); // Carrega l'animació per al mode fosc si la pàgina s'ha carregat en mode fosc 
    }
});
window.onload = function() {
    setInterval(() => {
        document.getElementsByClassName('time-text')[0].innerHTML = new Date().toLocaleTimeString().substring(0,5) // Mostra l'hora actual
    }, 1000); // Mostra l'hora actual
document.getElementsByClassName('day-text')[0].innerHTML = new Date().toDayString(); // Mostra la data actual
}
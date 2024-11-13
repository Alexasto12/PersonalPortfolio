let currentAnimation = null;

function toggleStyleButton() {
   
    if (document.documentElement.classList.contains('light')) {
        document.documentElement.classList.replace('light', 'dark'); // Canvia la classe de light a dark 
        setTimeout(() => {
        lottieAnimation('./media/JSON/Dark-Background.json'); // Carrega l'animació per al mode fosc
        }, 250);
    } else {
        document.documentElement.classList.replace('dark', 'light'); // Canvia la classe de dark a light
        setTimeout(() => {

            lottieAnimation('./media/JSON/Light-Background.json'); // Carrega l'animació per al mode clar
        }, 250);
    }
}

function lottieAnimation(path) {
    if (currentAnimation) {
        currentAnimation.destroy(); // Destrueix l'animació anterior
    }
    currentAnimation = lottie.loadAnimation({
        container: document.getElementById('lottie-container'), // Contenedor para la animación
        renderer: 'svg', // Renderiza como SVG para alta calidad
        loop: true, // Activa el loop para que se repita contínuament
        autoplay: true, // Reproduce automàticament
        path: path // Ruta al archivo JSON de la animación
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    if (document.documentElement.classList.contains('light')) {
        lottieAnimation('./media/JSON/Light-Background.json'); // Carrega l'animació per al mode clar
    } else {
        lottieAnimation('./media/JSON/Dark-Background.json'); // Carrega l'animació per al mode fosc
    }
});
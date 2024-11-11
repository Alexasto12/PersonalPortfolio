function toggleStyleButton() {
    const videoElement = document.getElementById('myVideo');
    if (document.documentElement.classList.contains('light')) {
        document.documentElement.classList.replace('light', 'dark'); // Canvia la classe de light a dark
        videoElement.src = './media/dark-background.mp4'; // Canvia el src del vídeo a dark
        videoElement.playbackRate = 0.75; // Ajusta la velocitat de reproducció per al mode fosc
        lottieAnimation('./media/JSON/Dark-Background.json'); // Carrega l'animació per al mode fosc
    } else {
        document.documentElement.classList.replace('dark', 'light'); // Canvia la classe de dark a light
        videoElement.src = './media/light-background.mp4'; // Canvia el src del vídeo a light
        videoElement.playbackRate = 1.0; // Ajusta la velocitat de reproducció per al mode clar
        lottieAnimation('./media/JSON/Light-Background.json'); // Carrega l'animació per al mode clar
    }
}

function lottieAnimation(path) {
    lottie.loadAnimation({
        container: document.getElementById('lottie-container'), // Contenedor para la animación
        renderer: 'svg', // Renderiza como SVG para alta calidad
        loop: true, // Activa el loop para que se repita continuamente
        autoplay: true, // Reproduce automáticamente
        path: path // Ruta al archivo JSON de la animación
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    lottieAnimation('./media/JSON/Dark-Background.json');
    lottieAnimation('./media/JSON/Light-Background.json') // Carrega l'animació per defecte
});
function toggleStyleButton() {
    const videoElement = document.getElementById('myVideo');
    if (document.documentElement.classList.contains('light')) {
        document.documentElement.classList.replace('light', 'dark'); // Canvia la classe de light a dark
        videoElement.src = './media/dark-background.mp4'; // Canvia el src del vídeo a dark
        videoElement.playbackRate = 0.75; // Ajusta la velocitat de reproducció per al mode fosc
    } else {
        document.documentElement.classList.replace('dark', 'light'); // Canvia la classe de dark a light
        videoElement.src = './media/light-background.mp4'; // Canvia el src del vídeo a light
        videoElement.playbackRate = 0.75; // Ajusta la velocitat de reproducció per al mode clar
    }
}
function toggleStyleButton() {
    if (document.documentElement.classList.contains('light')) {
        document.documentElement.classList.replace('light','dark'); // Amb el replace es canvia el valor de la classe light per dark (Arg: token1, newtoken)
    }else{
        document.documentElement.classList.replace('dark','light');
    }
    
    
}
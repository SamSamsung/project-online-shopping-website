setTimeout(function() {
    if(document.cookie.indexOf("dark_theme=true") != -1) { // On regarde si dark_theme=3 est présent dans les cookies.
        if(document.body.style.backgroundColor != "black") // Si l'arrière plan n'est pas noir (si la fonction n'a pas été activée)
        dark_theme() // On appelle la fonction dark-theme()
    }
},100) // On met un délai pour laisser du temps a la page de se charger sinon, la valeur sera de 0.


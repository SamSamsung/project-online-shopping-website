var timeout; // On initialise la variable timeout
document.onmousemove = function() {
    clearTimeout(timeout); // On clear le timer a chaque mouvement de souris
    timeout = setTimeout(function(){
        document.getElementById("pop_up_ecran").classList.add("active"); // On rajoute active a la classe pour faire apparaitre le pop up
        document.getElementById("gif").classList.add("active"); // On rajoute active a la classe pour faire apparaitre l'overlay


    },15000) // On met le temps d'attente a 60s
}




function pop_up_ecran() {
    document.getElementById("pop_up_ecran").classList.remove("active"); // On enleve la classe active pour faire disparaitre le pop_up
    document.getElementById("gif").classList.remove("active"); // On enleve la classe active pour faire disparaitre le gif
}


function voir_plus(num){ // La fonction nous permet d'activer le "voir plus"
    const readMoreBtn = document.querySelector(`.voir_plus${num}`); // On met en paramètre les numéros pour éviter que ça active le mauvais voir_plus
    const text = document.querySelector(`.text${num}`)
    
    if(readMoreBtn.innerText == "Voir plus") { // Si le bouton s'appelle Voir plus :
        readMoreBtn.innerText = "Voir moins" // On change le nom du bonton 
        text.classList.add('montrer_plus') // Et on rajoute la class Montrer_plus mon montrer le surplus de texte
    } else { // Si le bouton s'appelle autrement (voir moins)
        readMoreBtn.innerText = "Voir plus"  // On change le nom du bonton 
        text.classList.remove('montrer_plus') // Et on supprime
        
    }
    
}




let count = 0; // On initialise la variable count

function slideSuivante() { // Fonction appelé si l'on souhaite aller a la fonction suivante
    const items = document.querySelectorAll('#images_def img'); 
    const nbSlide = items.length;
    items[count].classList.remove("active"); // On supprime la class active de l'image montrée pour la faire disparaitre

    if(count < nbSlide -1) { // Si le count est inférieur au nbb de Slide 
        count++; // On rajoute un 
    } else {
        count = 0 // Sinon on le reinitialise 
    }

    items[count].classList.add("active") // On rajoute la classe active pour montrer la nouvelle image
}

function slidePrecedente() { // Fonction appelé si l'on souhaite aller a la fonction précédente
    const items = document.querySelectorAll('#images_def img');
    const nbSlide = items.length;
    items[count].classList.remove("active");  // On supprime la class active de l'image montrée pour la faire disparaitre

    if(count > 0) { // Si le count est inférieur à zéro
        count--; // On enlève 1
    } else {
        count = nbSlide - 1 // Sinon on enlève 1 au nombre de slides
    }

    items[count].classList.add("active") // On rajoute la classe active pour montrer la nouvelle image
    
}



function dark_theme() { // Cette fonction permet de lancer le thème obscur
    if (document.getElementById("butt").innerText === "Dark theme") { // Si le bouton s'appelle Dark theme
        document.getElementById("butt").innerText = "Light theme" // On change le nom du bouton ( en light theme)
        document.body.classList.add("dark-theme"); // On rajoute au body la class dark theme
        document.getElementById("id_banner").classList.add("dark-theme"); // On rajoute a la bannière la class dark theme
        try{ // On creer une condition car certains éléments se trouvent dans une page et d'autres dans une autre et ça empeche le dark mode de fonctionner
            document.getElementById("id_container").classList.add("dark-theme");  // On va chercher les boites de la page d'accueil
        } catch {
            document.getElementById("boite").classList.add("dark-theme"); // On cherche celui avec l'id boite qui n'est pas dans la meme page
        }

        document.cookie = "dark_theme=true" // On change le cookie en vrai
	    
    } else { // Si le bouton s'appelle autrement (Light Theme)
        document.getElementById("butt").innerText = "Dark theme"  // On change le nom du bouton (en dark theme)
        document.body.classList.remove("dark-theme");
        document.getElementById("id_banner").classList.remove("dark-theme");  
        try{
            document.getElementById("id_container").classList.remove("dark-theme"); // On va chercher les boites de la page d'accueil
        } catch {
            document.getElementById("boite").classList.remove("dark-theme"); // On cherche celui avec l'id boite qui n'est pas dans la meme page
        }
        document.cookie = "dark_theme=false" // On change le cookie en faux
	    
    }

} 

function counter() {
    // Recuperer les données de l'input
    var words = document.getElementById("avis_txt").value;

    // On initialise le compteur
    var count = 0;

    // On split chaque caractere
    // avec chaque caractère

    // On augmente le compteur
    // Si chaque caractère est là
    for (var i = 0; i < words.length; i++) {
        count += 1;
    }
    // L'afficher a coté
    document.getElementById("show").innerHTML = count; // On montre le nb de caractères

    if (count==0) {
        return false // On retrourne faux si il n'y aucun caractères écrits.
    }

}

// Cette fonction active un pop lorsque l'on laisse un avis sur la page
function pop_up_avis(bool) {
    if (bool == false) { // Le paramètre est si l'utilisateur a déja entré des caractères
        document.getElementById("notvalid").style.color = "red"; // on fait apparaitre un texte en rouge 
    }
    else {
        document.getElementById("notvalid").style.color = "transparent"; // On remet le texte en transparent
        const pop = document.getElementById("pop_up"); // On cherche l'élément pop_up
        const overl = document.getElementById("overlay"); // On cherche l'élément overlay
        pop.classList.add("active") // On rajoute la class active pour l'afficher
        overl.classList.add("active") // On rajoute la class active pour l'afficher
    }

}

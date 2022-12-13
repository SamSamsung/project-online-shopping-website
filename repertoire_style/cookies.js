const cookieBox = document.querySelector("#pop_up_cookie"), // On cherche l'ID du pop_up
cookieBackground = document.querySelector("#overlay"), // On cherche l'ID de l'overlay
acceptBtn = cookieBox.querySelector("#bouton_cookie"); // On cherche l'ID du bouton

acceptBtn.onclick = ()=>{
    document.cookie = "CookieBy=Samuel-Eddy-Victor; max-age="+60*60*24*30; // On donne la date d'expiration du cookie a un mois (2592000s dans un mois)
    if(document.cookie){ // Si les cookies sont déja présents
        cookieBox.classList.remove("active"); // On enlève la class active pour le faire disparaitre
        cookieBackground.classList.remove("active") // On enlève la class active pour le faire disparaitre


        
    } else{
        alert("Le cookie ne peut pas etre mis, avez vous bien mis en mode serveur ? ");
        cookieBox.classList.remove("active"); // On enlève la class active pour le faire disparaitre
        cookieBackground.classList.remove("active"); // On enlève la class active pour le faire disparaitre
    }


}
let checkCookie = document.cookie.indexOf("CookieBy=Samuel-Eddy-Victor");
if(checkCookie != -1) { // On regarde si on remet les cookies a chaque reload
    cookieBox.classList.remove("active"); // On enlève la class active pour le faire disparaitre
    cookieBackground.classList.remove("active"); // On enlève la class active pour le faire disparaitre
} else {
    cookieBox.classList.add("active"); // On rajoute la class active pour le faire apparaitre
    cookieBackground.classList.add("active"); // On rajoute la class active pour le faire apparaitre
}





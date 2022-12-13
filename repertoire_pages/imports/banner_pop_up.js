document.write(`
<div id="pop_up_ecran">
<p>Vous avez &eacute;t&eacute; inactifs pendant plus de 15s.</p>
<p>&Ecirc;tes vous toujours la ?</p>
<button id="bouton_ferme" onclick="pop_up_ecran()">Je suis toujours la</button>
</div>
<div id="gif"></div>
<nav class="banner" id="id_banner">
    <a href="../accueil.html"><img class="logo" src="../repertoire_img/logo.png"></a>
        <h1 class="titre_princ">Bienvenue sur <strong><a href="../accueil.html">Flash Fives </strong></a>!</h1>
        <div class="search-box">
            <input class="search-txt" type="search" placeholder="Recherchez n'importe quel article (EN CONSTRUCTION)">
            <article class="search-btn">
                <i class ="fas fa-search"></i>
            </a>
        </div>
        <a href="page_panier.html" class="panier" id="id_4">
            <i class ="fa-solid fa-basket-shopping"></i>
        </a>
        <a href="page_compte.html" class="compte" id="id_5">
            <i class ="fa-solid fa-user"></i>
        </a>
            <button class="bouton" id="butt" onclick="dark_theme()">Dark theme</button>
</nav> 
`);
// ---
// ###Exercice 3 : Afficher / Cacher du texte
// Objectif : Utiliser style.display pour modifier la visibilité d’un élément.
// Un paragraphe de texte.
// Un bouton "Afficher / Cacher".
// Quand on clique, le texte apparaît ou disparaît.

const bouton = document.getElementById("bouton");
let buttonState = false;

bouton.addEventListener("click", function(){
    if (buttonState===false){
        buttonState = true;
    document.querySelector("p").style.display = "none";
    }
    else if (buttonState===true) {
        buttonState = false;
        document.querySelector("p").style.display = "block";
    }
});


const ajouter = document.getElementById("add");
const enlever = document.getElementById("remove");
const remettre = document.getElementById("putBack");
let compteur = 0;


ajouter.addEventListener("click", () =>{
   document.querySelector("p").innerText = compteur;
   compteur = compteur + 1 ;
   document.querySelector("p").innerText = compteur;

});

enlever.addEventListener("click", () =>{
    compteur = compteur - 1 ;
    document.querySelector("p").innerText = compteur;
});

remettre.addEventListener("click", () =>{
    compteur = 0;
    document.querySelector("p").innerText = compteur;
});




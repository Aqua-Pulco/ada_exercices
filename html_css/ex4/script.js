const button = document.getElementById("button");


button.addEventListener("click", () =>{
    
    let nom = document.getElementById("prenom").value;
    document.querySelector("p").innerText= `Bonjour, ${nom}!`;
    document.getElementById("prenom").value = "";

})
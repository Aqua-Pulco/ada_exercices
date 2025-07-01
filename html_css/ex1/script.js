const redButton = document.getElementById("bouton1");
const greenButton = document.getElementById("bouton2");
const blueButton = document.getElementById("bouton3");

const carre = document.querySelector("#carré");

console.log (redButton);

redButton.addEventListener("click", () => {
    carre.style.backgroundColor = "red";
});

greenButton.addEventListener("click", () => {
    carre.style.backgroundColor = "green";
});

blueButton.addEventListener("click", () => {
    carre.style.backgroundColor = "blue"
})
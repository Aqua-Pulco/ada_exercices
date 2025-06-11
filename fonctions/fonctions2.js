// Ce matin on a fait un exercice pour réviser les fonctions et les tableaux. Voici l'énoncé :
// Écris une fonction calcTotalPrice qui prend en paramètre un tableau articles sous forme de tableau de prix (par exemple : [10, 4, 8]). La fonction calcul la somme totale et retourne le résultat. Par exemple calcTotalPrice([10, 2, 8]) retourne 20, et calcTotalPrice([4, 8]) retourne 12.

articles1 = [10, 2, 8];
articles2 = [4, 8];
function calcTotalPrice(tab){
    let compte = 0;
    for (let i=0; i<=tab.length-1; i++){
        //console.log(tab[i]);
        compte = compte + tab[i];}
        return compte;
    }

console.log(calcTotalPrice(articles1))
console.log(calcTotalPrice(articles2));

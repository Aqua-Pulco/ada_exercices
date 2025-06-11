// EXERCICE MOMENT DE LA JOURNEE

// Écrire une fonction qui prend en paramètre un moment de la journée (soit "matin", "midi", "après-midi", "soir")
// "matin" -> "J'ai trop hâte de continuer de coder !"
// "midi" -> "J'ai faim, j'en ai marre des bugs..."
// "après-midi" -> "Tchao les copins"
// "soir" -> "ZzzzZZZzzz"
// Appeler la fonction pour tester tous les cas possibles

function emotionWeather(moment){
    if (moment === "matin") {
        return `J'ai trop hâte de continuer à coder !`;
    }
    else if (moment === "midi") {
        return `J'ai faim, j'en ai marre des bugs...`;
    }
    else if (moment === "apres midi") {
        return `Tchao les copains`;
    }
    else if (moment === "soir") {
        return `ZzzzZZZzzz`;
    }
    return `désolée mais ${moment} n'est pas une entrée valide`;
}

let heures = ["matin", "midi", "apres midi", "soir","apres-midi"];

for (i= 0; i<heures.length; i++){
    console.log(emotionWeather(heures[i]));
}
console.log(`\n---FIN DE L'EXERCICE---\n`);

// EXERCICE HEURES DE LA JOURNEE

    let heures2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0];

    
function quelMoment(heure){

    if(heure >= 0 && heure <= 4){
    return `h :)  c'est la nuit !`
    }
    else if (heure > 4 && heure <= 11){
    return `h :)  c'est le matin !`
    }
    else if(heure > 12 && heure <= 17){
    return `h :)  c'est l'apres midi !`
    }
    else if(heure === 12){
    return `h :)  il est midi !`
    }
    else if(heure >= 18 && heure <= 23){
    return `h :)  c'est le soir !`
    }
    else{
        return `${heure} :(`
    }
}

for (i= 0; i<heures2.length; i++){
     console.log(heures2[i], quelMoment(heures2[i]));
}
let a = "i";

console.log(quelMoment(a));




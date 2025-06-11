//tuto object

// let objet1 = {
//     firstName : 'iris',
//     clefs : false
//     };
// //appeler une valeur du tableau (par sa key)
// console.log(objet1.clefs);
// console.log(objet1['clefs']);
// //modifier une valeur du tableau
// objet1.nom = "Iris";
// console.log(objet1.nom);

let keyList = [
    { firstName: 'Jerem', hasKey: false },
    { firstName: 'Laure', hasKey: true },
    { firstName: 'Pierre', hasKey: true },
    { firstName: 'Vi', hasKey: true },
    { firstName: 'Maiko', hasKey: false }];

function hasKey() {
    console.log(`>>>ENTREE DANS LA FCT°`);
    console.log(`la liste compte ${keyList.length} éléments`);
    console.log(`si clef : ecrit le nom associé`);
    console.log(`pas de clef = pas de nom.`);
    for (let i = 0; i < keyList.length; i++) {
        console.log(`tour---${i}--`);
        if (keyList[i].hasKey === true) {
            console.log(`>>>hasKey=true`); 
            console.log(keyList[i].firstName);
        }}
    console.log(`>>>>>> SORTIE DE LA FONCT°`)
    return ('');
}
console.log(hasKey());

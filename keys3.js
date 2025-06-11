

let keyList = [
    { firstName: 'Jerem', hasKey: false },
    { firstName: 'Laure', hasKey: true },
    { firstName: 'Pierre', hasKey: true },
    { firstName: 'Vi', hasKey: true },
    { firstName: 'Maiko', hasKey: false }];

function hasKey() {
    const gotThem = [];
    console.log(`>>>ENTREE DANS LA FCT°`);
    console.log(`la liste compte ${keyList.length} éléments`);
    console.log(`si a la clef de l'école: ecrit le nom associé`);
    console.log(`pas de clef = pas de nom.`);
    for (let i = 0; i < keyList.length; i++) {
        console.log(`tour---${i}--`);
        if (keyList[i].hasKey === true) { 
            console.log(`${keyList[i].firstName}`);
            console.log(`>>>hasKey=true`);
            gotThem.push(keyList[i].firstName);
        }}
    console.log(`>>> SORTIE DE LA FONCT° impression du tableau`)
   return (`${gotThem}`);
}
console.log(hasKey());

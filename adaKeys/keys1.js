const keyList = ['Laure', 'Vi', 'Pierre', 'Mathilde'];

function hasKey(firstName) {

    for (let i = 0; i < keyList.length; i++) {
        if (keyList[i] === firstName) {
            return 'oui';
        }
    }
    return 'non';
}


console.log(hasKey('Pierre'));
console.log(hasKey('Iris'));
console.log(hasKey('Laure'));
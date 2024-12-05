/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'EugEnio';

// Dichiara la funzione qui.

function searchVowels(word) {
    const vowels = "aAeEiIoOuU";
    const numOfVowels = [];
    for (let i = 0; i < word.length; i++) {
        if(vowels.includes(word[i])) {
            numOfVowels.push(word[i]);
        }
    }
    return numOfVowels
}

// Invoca la funzione qui e stampa il risultato in console

const countVowels = searchVowels(word)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)

console.log(countVowels)
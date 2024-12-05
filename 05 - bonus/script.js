/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.


function hourSalut(name) {
const d = new Date();
let hour = d.getHours();
console.log(hour)
let salut;
    if (hour < 13) {
    salut = `Buongiorno ${name}`
    } else if (hour < 20) {
    salut = `Buonpomeriggio ${name}`
    } else {
    salut = `Buonasera ${name}`
    }
    // return `Buonasera ${name}`
}

// Invoca la funzione qui e stampa il risultato in console

const newSalut = hourSalut(name)

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.

console.log(newSalut)
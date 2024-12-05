/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

function salut(userName) {
    // return "Ciao" + " " + userName;
    return `Ciao ${userName}`
}

// Invoca la funzione qui e stampa il risultato in console

const autoSalut = salut(userName)

//Risultato atteso se si passa 'Mario': // ciao Mario

console.log(autoSalut)

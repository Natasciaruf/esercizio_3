// Obiettivo: Scrivi una funzione che prenda due numeri come parametri e ritorni la loro somma.

// Istruzioni:

// Crea una funzione chiamata somma che accetti due parametri numerici.
// La funzione deve ritornare la somma dei due numeri.

function somma(a, b){
    return a + b
}
let results = somma(2, 5);
console.log(results) //possiamo utilizzare questa variabile come se fosse una funzione: FUNCTION EXPRESSION 

// Obiettivo: Crea una funzione anonima che prenda un numero e lo moltiplichi per 2.

// Istruzioni:

// Crea una variabile chiamata moltiplicaPerDue che contenga una funzione anonima.
// La funzione deve prendere un numero e restituire il suo doppio


// Definiamo la funzione anonima e la assegniamo alla variabile moltiplicaPerDue
let moltiplicaPerDue = function(numero) {
    return numero * 2;  // Restituisce il doppio del numero
};

// Invocazione della funzione con un argomento
let risultato = moltiplicaPerDue(5); // Passiamo 5 come parametro

console.log(risultato); // Stampa: 10


// Esercizio 3 - Arrow Function
// Obiettivo: Usa una funzione arrow per calcolare l'area di un rettangolo.

// Istruzioni:

// Crea una funzione arrow chiamata calcolaArea che prenda due parametri, la lunghezza e la larghezza del rettangolo.
// La funzione deve ritornare l'area del rettangolo (lunghezza * larghezza).

const calcolaArea = (lunghezza, larghezza) => lunghezza * larghezza;
let moltiplicazione = calcolaArea(10, 20)
console.log(moltiplicazione)



// Esercizio 4 - Funzione con parametri e valori di ritorno
// Obiettivo: Crea una funzione che calcoli il fattoriale di un numero.

// Istruzioni:

// Crea una funzione chiamata fattoriale che prenda un numero intero come parametro.
// La funzione deve calcolare e ritornare il fattoriale del numero (es. 5! = 5 * 4 * 3 * 2 * 1).

const fattoriale = (numero) => {
    let risultato = 1;

    for (let i = 1; i <= numero; i++) {
        risultato *= i  
    }
    return risultato;
}

let numeroFattoriale = fattoriale(5);
console.log(numeroFattoriale) 

// Esercizio 5 - Funzione con più parametri e valore di ritorno
// Obiettivo: Scrivi una funzione che restituisca la media di tre numeri.
// Crea una funzione chiamata media che prenda tre numeri come parametri.
// La funzione deve restituire la media di questi tre numeri.

function media(valore1, valore2, valore3){
    return (valore1 + valore2 + valore3) / 3 
}
 let valori = media(5, 10, 15);
 console.log(valori)




// Esercizio 6 - Funzione con valore di ritorno e gestione di condizioni
// Obiettivo: Crea una funzione che verifichi se un numero è pari o dispari.
// Crea una funzione chiamata verificaPariDispari che prenda un numero come parametro.
// La funzione deve restituire "Pari" se il numero è pari e "Dispari" se il numero è dispari.

// const numero1 = function verifica(pariDispari){
//  if (pariDispari / 2){
//     console.log("Il numero è pari")
// } else {
//     console.log("Il numero è dispari")
// }
// }

// let number = numero1(9);
// console.log(number)


// Funzione che verifica se un numero è pari o dispari
function verificaPariDispari(numero) {
    if (numero % 2 === 0) {
        return "Pari";  // Se il resto della divisione per 2 è 0, il numero è pari
    } else {
        return "Dispari";  // Altrimenti, il numero è dispari
    }
}

// Esempio di utilizzo della funzione
let risultat = verificaPariDispari(9);  // Passiamo 9 come parametro
console.log(risultat);  // Stampa: Dispari

let risultato2 = verificaPariDispari(10);  // Passiamo 10 come parametro
console.log(risultato2);  // Stampa: Pari






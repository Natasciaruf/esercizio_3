//CONDIZIONI

// 1. CONDIZIONE IF: Crea una variabile chiamata numero e assegna a questa variabile un valore numerico.
// Se il valore della variabile numero è maggiore di 10, stampa "Il numero è maggiore di 10", 
// altrimenti stampa "Il numero è minore o uguale a 10".

let number = 7;
if (number > 10) {
    console.log("Il numero è maggiore di 10");
} else {
    console.log("Il numero è minore o uguale a 10")
}

// 2 CONDIZIONE ELSE IF: Crea una variabile chiamata eta e assegna un valore numerico.
// Usa una struttura condizionale if, else if ed else per stampare:
// "Sei un minorenne" se eta è minore di 18,
// "Sei un adulto" se eta è tra 18 e 65 (inclusi),
// "Sei un senior" se eta è maggiore di 65.

let età = 80

if (età < 18) {
    console.log("sei un minorenne")
} else if (età <= 65) {
    console.log("sei un adulto")
} else {
    console.log("sei un senior")
}

// Esercizio 1 - Operatori logici (AND, OR, NOT):
// Crea due variabili booleane:

// a = true
// b = false
// Usa gli operatori logici per fare le seguenti verifiche:

// Verifica se a è true e b è true (AND)
// Verifica se a è true o b è true (OR)
// Verifica se a è non uguale a b (NOT)
// Stampa il risultato nel console log.


let a = true;
let b = false

console.log(a === true && b === true);
console.log(a === true || b === true);
console.log(a != b)

// Esercizio 2 - Costrutto if else:
// Crea una variabile age e assegna un valore numerico (ad esempio 20).
//  Verifica se age è maggiore di 18. Se è vero, stampa "Sei maggiorenne", altrimenti stampa "Sei minorenne".

let age = 20
if (age < 18) {
    console.log("sei maggiorenne");
} else {
    console.log("sei minorenne");
}

// Crea una variabile isAdult che contenga un valore booleano (true o false). Usa l'operatore ternario per stampare:

// "Puoi entrare" se isAdult è true,
// "Non puoi entrare" se isAdult è false.

let isAdult = false

console.log(isAdult?"puoi entrare":"non puoi entrare")

//abbiamo utilizzato l'operatore ternario si utilizza "?" come se fosse un if e i ":" come se fosse un else,
// si potrebbero omettere le parentesi ma otteniamo un codice più comprensibile utilizzandole.


// Esercizio 4 - Costrutto switch:
// Crea una variabile day che rappresenti un giorno della settimana (ad esempio, 1 per Lunedì, 2 per Martedì, ecc.).
//  Usa il costrutto switch per stampare il nome del giorno in base al valore di day. Ad esempio:

// 1 = "Lunedì"
// 2 = "Martedì"
// 3 = "Mercoledì"
// e così via per i giorni della settimana.


//allo switch si passa la variabile 
let day = 4
switch (day) {
    case 1:
        console.log(" è lunedi")
        break;
    case 2:
        console.log("è martedi")
        break;
    case 3:
        console.log("è mercoledi")
        break;
    case 4:
        console.log("è giovedi")
        break;
    case 5:
        console.log("è venerdi")
        break;
    case 6:
        console.log("è sabato")
        break;
    case 7:
        console.log("è domenica")
        break;
    default:
        console.log("il giorno non è valido")

}

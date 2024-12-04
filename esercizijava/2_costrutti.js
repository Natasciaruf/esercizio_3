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

console.log(isAdult ? "puoi entrare" : "non puoi entrare")

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


// Esercizio 5 - Combinazione di if else e operatori logici:
// Crea due variabili x e y e assegna loro dei valori numerici. Verifica se:

// x è maggiore di y e y è maggiore di 5.
// Se la condizione è vera, stampa "Condizione 1 soddisfatta".
// Altrimenti, se x è uguale a y o y è uguale a 5, stampa "Condizione 2 soddisfatta".
// Se nessuna delle condizioni è vera, stampa "Nessuna condizione soddisfatta".


let x = 5
let y = 8

if (x > y && y > 5) {
    console.log("condizione 1 soddisfatta");
} else if (x == y || y == 5) {
    console.log("condizione 2 soddisfatta");
} else {
    console.log("nessuna condizione soddisfatta")
}


// Esercizio 6 - switch con break e default:
// Crea una variabile month che rappresenti un mese dell'anno (ad esempio, 1 per Gennaio, 2 per Febbraio, ecc.). 
// Usa il costrutto switch per stampare:
// Il nome del mese corrispondente al valore di month.
// Se month è 1, stampa "Gennaio".
// Se month è 12, stampa "Dicembre".
// Se month è fuori dal range 1-12, usa il caso default per stampare "Mese non valido".

let month = 7

switch (month) {
    case 1:
        console.log("gennaio")
        break;
    case 2:
        console.log("febbraio")
        break;
    case 3:
        console.log("marzo")
        break;
    case 4:
        console.log("aprile")
        break;
    case 5:
        console.log("maggio")
        break;
    case 6:
        console.log("giugno")
        break;
    case 7:
        console.log("luglio")
        break;
    case 8:
        console.log("agosto")
        break;
    case 9:
        console.log("settembre")
        break;
    case 10:
        console.log("ottobre")
        break;
    case 11:
        console.log("novembre")
        break;
    case 12:
        console.log("dicembre")
        break;
    default: console.log("Mese non valido")
}



// Esercizio 7 - Operatore ternario combinato con if else:
// Crea una variabile score che rappresenta il punteggio di un esame (un numero intero). Usa l'operatore ternario per:

// Stampare "Passato" se score è maggiore o uguale a 50,
// Stampare "Non passato" se score è minore di 50.
// Poi, usa un if else per stampare un messaggio extra:

// Se il punteggio è maggiore di 80, stampa "Eccellente!",
// Altrimenti, stampa "Hai bisogno di migliorare".

let score = 70 

console.log( score >= 50 ? "Passato" : "Non passato" )

if ( score > 80 ){
    console.log("Eccellente!")
} else {
    console.log("Hai bisogno di migliorare")
}

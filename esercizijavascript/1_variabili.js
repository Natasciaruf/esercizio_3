//ESERIZI RIPETIZIONE VARIABILI 

// 1 DICHIARARE VARIABILI: 
// Crea tre variabili: una chiamata nome di tipo stringa, una chiamata eta di tipo numero, 
// e una chiamata isStudente di tipo booleano.
// Assegna i seguenti valori: "Giovanni" alla variabile nome, 25 alla variabile eta, e true alla variabile isStudente.
// javascript
// domanda: prova a stampare in console

let nome = "giovanni";
 let età = 25;
 let isStudente = true 
console.log(nome, età, isStudente);

// 2 TIPI DI DATO 
// Crea una variabile chiamata saluto che contenga una stringa con il 
// messaggio di benvenuto "Ciao, sono [nome]!" dove [nome] è una variabile che contiene il tuo nome.
// Usa il valore della variabile nome nel saluto. Stampa il risultato nella console.
// Suggerimento: Usa l'operatore + per concatenare le stringhe.

let saluto = "ciao, sono" + " " + nome + " !"
console.log(saluto);

// 3 OPERATORI ARITMETICI
// Crea due variabili chiamate a e b di tipo numero e assegna loro i valori 10 e 5 rispettivamente.
// Crea una terza variabile che contenga la somma, la differenza, il prodotto e il quoziente tra a e b.
// Stampa i risultati di ciascuna operazione.

let a = 10 
let b = 5 

let somma = a + b
let differenza = a - b 
let prodotto = a * b 
let quoziente = a / b 
console.log(somma)
console.log(differenza)
console.log(prodotto)
console.log(quoziente)


// Usa let per dichiarare una variabile chiamata nomeUtente e assegna un valore a scelta.
// Usa const per dichiarare una variabile chiamata annoDiNascita che rappresenta l'anno in cui sei nato.
// Usa var per dichiarare una variabile chiamata messaggio e assegnale una stringa.
// Modifica il valore di nomeUtente ma lascia invariato annoDiNascita e messaggio.

let nomeUtente = "Natascia"
const annoDiNascita = 2002
var messaggio = "studentessa"

nomeUtente = "alfonso"
console.log(nomeUtente)

// Crea una variabile chiamata mioArray ma non assegnarle alcun valore.
// Crea una variabile chiamata risultato e inizializzala come undefined.
// Crea una funzione che controlla se una variabile è undefined e restituisce "Variabile non definita" se lo è.

let mioArray 
let risultato = undefined
if (mioArray == undefined){
    console.log(undefined)
}else{
    console.log("la variabile è definita")
}
console.log(risultato)

// Crea una variabile numeroStringa che contiene un numero come stringa, ad esempio "123".
// Converte la variabile numeroStringa in un numero (usando parseInt() o Number()) 
// e salvalo in una nuova variabile numero.
// Crea una variabile numeroDecimale come un numero con decimali, ad esempio 3.14.
// Converte numeroDecimale in una stringa e salva il risultato in una variabile decimaleStringa.

let numeroStringa = "123";
numeroStringa = Number(123);
 let numero = Number(123);
console.log(numeroStringa)

let numeroDecimale = 3.14;
numeroDecimale = String("3.14");
let decimaleStringa = "3.14"
console.log(numeroDecimale)


// Comparazione di numeri: Crea due variabili, a e b. Assegna a a il valore 5 e a b il valore 10.
//  Verifica se a è maggiore di b usando
//  l'operatore di confronto >, e se a è uguale a b usando l'operatore ===. Stampa il risultato nel console log.

let c = 5 
let d = 10 
console.log(c > d)
console.log( c === d)

// Esercizio 2 - 
// Comparazione di stringhe: Crea due variabili, str1 e str2, con i valori "JavaScript" e "javascript".
//  Verifica se le due stringhe sono uguali con === (nota che JavaScript è case-sensitive).
//   Stampa il risultato nel console log.

let str1 = "JavaScript";
let str2 = "javascript";
console.log(str1 === str2)

// Esercizio 3 - Uso dell'operatore typeof: Crea una variabile x e assegnale un valore numerico (ad esempio 100).
//  Usa typeof per verificare il tipo di x e stampalo nel console log

let x = 100 
console.log(typeof x)  //type of si utilizza per capire il tipo di variabile

// Esercizio 4 - Comparazione con typeof: Crea una variabile y e assegnale un valore booleano true. 
// Usa l'operatore typeof per verificare che tipo di dato è y e confronta il risultato con la stringa "boolean".

let y = true 
console.log(typeof y === "boolean");

//LIVELLO INTERMEDIO 
// Esercizio 5 - Comparazione tra null e undefined: Crea due variabili, a e b.
//  Assegna a a il valore null e a b il valore undefined.
//   Verifica se sono uguali usando l'operatore di uguaglianza == e poi confrontali con l'operatore ===. 
//   Stampa i risultati nel console log.

let e = null
let f = undefined
console.log( e == f);
console.log( e === f);

// Esercizio 6 - Verifica il tipo di variabili miste:
//  Crea una variabile var1 e assegnale una stringa,
//   una variabile var2 con un numero e una variabile var3 con un valore booleano.
//    Usa typeof per verificare il tipo di ciascuna variabile e stampali nel console log.

let var1 = "buonasera";
let var2 = 23;
let var3 = false
console.log(typeof var1);
console.log(typeof var2);
console.log(typeof var3);


// Esercizio 7 - Uso dell'operatore == e ===: Crea due variabili, 
// x e y, dove x = "5" (una stringa) e y = 5 (un numero). Confrontale prima con l'operatore == e poi con ===. 
// Stampa i risultati nel console log e spiega la differenza.
 
let z =  "5";
let n = 5;
console.log( z == n);
console.log( z === n ); 
//spiegazione
// z == n ci dà come risultato true poichè le due variabili ci riconducono allo stesso risultato
// z === n ci dà come risultato false poichè le due variabili non sono strettamente uguali perchè la
// variabile z è una stringa e la variabile n è un numero intero 


// Esercizio 8 - Comparazione con valori di tipo diverso: Crea una variabile a e assegnale il valore 5 come numero, 
// e crea una variabile b con valore "5" come stringa. Verifica se a è uguale a b con == e con ===.
//  Poi, verifica anche se il tipo di a è lo stesso di b usando typeof. Stampa i risultati nel console log.

var h = 5;
var s = "5";
console.log( h == s);
console.log( h === s);
console.log(typeof h === typeof s)

// Esercizio 9 - Confronto di oggetti: Crea due oggetti con le stesse proprietà e valori,
//  ad esempio {name: "Alice", age: 25}. Confronta questi oggetti
//  con l'operatore === e spiega perché il risultato sarà false, anche se le proprietà e i valori sono identici.

let utenteUno = {
    nome: "natascia",
    età: 22
}

let utenteDue = {
    nome: "natascia",
    età: 22
}
console.log(utenteUno === utenteDue)

//il risultato è false perchè i due oggetti riconducono allo stesso risultato ma non sono strettamentre uguali


// Esercizio 10 - Funzione che confronta i tipi: Scrivi una funzione compareTypes(x, y)
//  che accetti due parametri e restituisca:

// "I tipi sono uguali" se i tipi di x e y sono gli stessi.
// "I tipi sono diversi" se i tipi sono diversi.
// Usa questa funzione per confrontare variabili di tipo number e string, 
// e per variabili di tipo boolean e undefined.

function compareTypes(x, y) {
    if (typeof x === typeof y) {
        console.log("I tipi sono uguali");
    } else {
        console.log("I tipi sono diversi");
    }
}

compareTypes(5, "5"); // I tipi sono diversi
compareTypes(true, undefined); // I tipi sono diversi

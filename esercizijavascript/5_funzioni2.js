// Scrivi una funzione somma(a, b) che accetta due numeri come argomenti e restituisce la loro somma.

function somma(a, b){
    return a + b
}
let risultato = somma(3, 3);
console.log(risultato)

// Scrivi una funzione saluto(nome) che accetta un nome come argomento e restituisce un messaggio di saluto: "Ciao, [nome]!"

function saluto(saluto){
return "Ciao" + " " + (saluto);
}

let nome = "Natascia";
console.log("Ciao" + " " + (nome))

// Scrivi una funzione pariDispari(numero) che accetta un numero e restituisce "pari" se il numero è pari e 
// "dispari" se è dispari.

function pariDispari(numero){
    if (numero % 2 === 0 ){
        console.log("Pari")
    } else{
        console.log("Dispari")
    }
}
let restituire = pariDispari(11);

// Scrivi una funzione massimo(a, b) che restituisce il maggiore tra due numeri.

function massimo(a, b){
 return a > b ? a : b 
}

let numeri = massimo(10, 8);
console.log(numeri)

// Crea una funzione differenza(a, b) che restituisca la differenza tra a e b (cioè a - b).

function differenza(a, b){
    return a - b
}
let difference = differenza(6, 2)
console.log(difference)

// Verifica se un numero è positivo, negativo o zero
// Scrivi una funzione verificaNumero(num) che prenda un numero e
// restituisca una stringa che indichi se il numero è "positivo", "negativo" "zero".

function verificaNumero(numero){
    if (25 > 0){
        console.log("Positivo")
    } else if( 25 < 0){
        console.log("Negativo")
    } else {
        console.log("Zero")
    }
}

let stinga = verificaNumero(25)

// Crea una funzione perimetroRettangolo(lunghezza, larghezza) che calcoli il perimetro di un rettangolo.

function perimetro(lunghezza, larghezza){
    return lunghezza * larghezza
}

let moltiplicazione = perimetro(10, 5)
console.log(moltiplicazione)

// Scrivi una funzione divisibilePer3e5(num) che prenda un numero e restituisca true se è divisibile per 3 e 5, altrimenti false.

function divisione(numero){
if(numero % 3, 5 === true){
    console.log(true)
} else {
    console.log(false)
}
}
let sum = divisione(17)

// Scrivi una funzione quadrato(num) che restituisca il quadrato del numero passato come argomento (ad esempio, quadrato(3) deve restituire 9).

function quadrato(numero){
    return numero * 3
}

let square = quadrato(3)
console.log(square)

// Crea una funzione sommaFinoAN(n) che calcoli e restituisca la somma di tutti i numeri da 1 a n inclusi.



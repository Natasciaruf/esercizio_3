//SINTASSI
function operazione(callback) {
    // Esegui qualche operazione
    console.log("Operazione completata!");
    callback(); // Chiamata alla callback
}

function callbackFunzione() {
    console.log("Callback eseguita!");
}

operazione(callbackFunzione);

// Crea una funzione eseguiOperazione(callback) che simula
//  un'operazione (come il log di un messaggio) e poi esegue una funzione di callback passata come argomento.

function eseguiOperazione(callback) {
    console.log("Stampa messaggio...");
    callback()
}

function oggetto() {
    console.log("Messaggio stampato");
}

eseguiOperazione(oggetto);

// Crea una funzione sommaConCallback(a, b, callback)
//  che prende due numeri e una funzione di callback. 
//  La funzione di callback deve ricevere la somma dei due numeri come argomento

// function sommaConCallback(a, b, callback) {
//     let risultato = a + b;
//     callback(risultato);
// }

// sommaConCallback(5, 3, function(risultato) {
//     console.log("La somma è:", risultato);
// });


function sommaConCallback(a, b, callback) {
    let risultato = a + b;
    callback(risultato);
}

sommaConCallback(3, 5, function (risultato) {
    console.log("la somma è:", risultato)
})

// Crea una funzione differenzaConCallback(a, b, callback) che prenda due numeri e una funzione di callback. 
// La funzione di callback deve ricevere la differenza dei due numeri come argomento.

function differenza(a, b, callback) {
    let difference = a - b;
    callback(difference);
}

differenza(6, 2, function (difference) {
    console.log("la differenza è...", difference)
})


// Scrivi una funzione moltiplicazioneConCallback(a, b, callback) che prenda due numeri e una funzione di callback. 
// La callback deve ricevere il prodotto dei due numeri come argomento.

function moltiplicazioneConCallback(a, b, callback) {
    let moltiplicazione = a * b;
    callback(moltiplicazione);
}

moltiplicazioneConCallback(2, 3, function (moltiplicazione) {
    console.log("risultato moltiplicazione", moltiplicazione)
})

// Crea una funzione mediaConCallback(a, b, callback) che prenda due numeri e una funzione di callback.
//  La callback deve ricevere la media dei due numeri come argomento.

function mediaConCallback(a, b, callback){
 let media = (a + b) / 2;
 callback(media);
}

mediaConCallback(5, 6, function(media){
    console.log("la media dei numeri è", media)
})

// Crea una funzione verificaPariConCallback(num, callback) che prenda un numero e una funzione di callback.
//  La funzione di callback deve ricevere un valore booleano che indica se il numero è pari (true) o dispari (false).

function verificaPariConCallback(num, callback){
    let verifica = (num %2 === true);
    callback(verifica);
}

verificaPariConCallback(9, function(verifica){
console.log("il numero è", verifica)
})

// Crea una funzione sommaArrayConCallback(array, callback) che prenda un array di numeri e una funzione di callback.
//  La callback deve ricevere la somma di tutti i numeri nell'array.

function sommaArrayConCallback(array, callback) {
    let somma = array.reduce((acc, num) => acc + num, 0);
    callback(somma);
}

sommaArrayConCallback([1, 2, 3, 4, 5], function(somma) {
    console.log("La somma dell'array è:", somma);
});

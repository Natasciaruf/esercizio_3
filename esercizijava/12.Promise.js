//Sintassi base di una promise
let promise = new Promise((resolve, reject) => {
    // Qui dentro fai qualcosa di asincrono (come una richiesta a un server)
    let success = true;

    if (success) {
        resolve("Operazione riuscita!"); // Se va tutto bene
    } else {
        reject("Si è verificato un errore!"); // Se c'è un problema
    }
});

// Come si usa la promise
promise
    .then((message) => {
        console.log(message); // Questo viene eseguito se la promise è "risolta"
    })
    .catch((error) => {
        console.log(error); // Questo viene eseguito se la promise è "rifiutata"
    });


    // In questo primo esercizio, creiamo una promessa che si "risolve" con un messaggio di successo dopo 2 secondi. 
    // Usando setTimeout(), simuleremo l'operazione asincrona.
    
// Utilizza setInterval per chiamare la funzione "visualizzaOrologio" ogni secondo.


//  function visualizzaOrologio() {
//    const orarioCorrente = new Date();
//    const ore = orarioCorrente.getHours();
//   const minuti = orarioCorrente.getMinutes();
//   const secondi = orarioCorrente.getSeconds();
  
//  console.log(`Ora attuale: ${ore}:${minuti}:${secondi}`);
//  }

//  setInterval(visualizzaOrologio, 1000)     //richiami la funzione con i secondi


// Crea una funzione chiamata "contoAllaRovescia" che diminuirà il conto alla rovescia di 1 unità e visualizzerà il tempo rimanente in console.
// Utilizza setInterval per chiamare la funzione contoAllaRovescia ogni secondo.
// Visualizza il messaggio "Conto alla rovescia in corso..." all'inizio.
// Quando il conto alla rovescia raggiunge 0, visualizza un messaggio che indica che il conto alla rovescia è terminato.



// console.log("Conto alla rovescia in corso...");
// let counter = 10;

// function contoAllaRovescia() {
//     counter--; // Diminuisce il contatore di 1
//     console.log("Conto alla rovescia iniziato: " + counter);
    
//     if (counter <= 0) {
//         clearInterval(intervalId); // Ferma il conto alla rovescia quando il contatore arriva a 0
//         console.log("Conto alla rovescia terminato");
//     }
// }

// // Impostiamo l'intervallo per chiamare la funzione ogni secondo
// let intervalId = setInterval(contoAllaRovescia, 1000);


// Utilizza setTimeout per chiamare la funzione "mostraPromemoria" dopo un ritardo di 5 secondi.
// Prima che scadano i 5 secondi stampa in console: "Il promemoria è in fase di impostazione".


function mostraPromemoria() {
  console.log("Promemoria: È ora di fare una pausa!");
}

console.log("Il promemoria è in fase di impostazione")
setTimeout(mostraPromemoria, 5000)
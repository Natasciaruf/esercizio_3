//  Esercizio 2: Crea una funzione che prende due numeri come input e restituisce la loro somma.
//  Utilizza questa funzione per sommare due numeri e mostrare il risultato in un alert.

 function somma(a, b){
return a + b
 }

 let sommaFunzione = somma(5, 5)

//  alert("la somma è" + sommaFunzione)
 
//  Crea un ciclo for che stampa i numeri da 1 a 10 nella console.

for (let i = 1; i <= 10; i++){
    console.log(i);
}

//Scrivi una funzione che controlli se un numero è maggiore di 10 e stampi un messaggio di conseguenza.

function numbers(number){
    if (number > 10){
        console.log("Il numero è maggiore di 10")
    } else{
        console.log("Il numero è minore di 10")
    }
}

numbers(7)

// Scrivi una funzione chiamata doubleArray che accetta un array e una funzione di callback come argomenti.
// doubleArray deve applicare la funzione di callback a ciascun elemento dell'array e restituire un nuovo array con i valori trasformati.

function doubleArray(arr, callback) {
   return arr.map(callback)
  }
  function doubleValue(num) {
    return num * 2;
  }
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = doubleArray(numbers, doubleValue);
  console.log(doubledNumbers); // Should output [2, 4, 6, 8, 10]

//   Crea una funzione chiamata delay che accetta una funzione di callback e un ritardo temporale in millisecondi come argomenti.
// delay dovrebbe eseguire la funzione di callback dopo il ritardo specificato.

function delay(callback, delayTime) {
    setTimeout(callback, delayTime)
   }
   function sayHi() {
     console.log("Hi, there!");
   }
   delay(sayHi, 2000); // Should log "Hi, there!" after a 2-second delay.

//    Scrivi una funzione chiamata filterArray che accetta un array e una funzione di callback come argomenti. -La funzione callback deve filtrare
//     e restituire i numeri pari passati come argomento alla funzione filterArray
// filterArray dovrebbe restituire un nuovo array contenente solo gli elementi per i quali la funzione di callback restituisce true.

function filterArray(arr, callback) {
    return arr.filter(callback)
   }
   
   function isEven(num) {

    return  num % 2 === 0
   }
   
   const numbers1 = [1, 2, 3, 4, 5, 6];
   const evenNumbers = filterArray(numbers1, isEven);
   console.log(evenNumbers); // Should output [2, 4, 6]
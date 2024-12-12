/**************
 SIMULAZIONE PROGRAMMA SENZA GUI (SCHERMO IN HTML)
 - aggiungere libri
 - rimuovere libri
 - visualizzare libri
 - simulare una login
 */

function addBooks(newbook, arr) {
   arr.push(newbook)
}

function stampoSistemato(arr) {
   if (arr.length > 0) {
      console.log("Libri: ");
      arr.forEach((book) => {
         console.log("-book: " + book.book + "-author" + book.author + "-quantity: " + book.quantity)
      })} else {
console.log("Non ci sono libri")
      }
   }

let books = []
let book1 = { book: "shadwhunters", author: "Cassandra clare", quantity: 100 }
addBooks(book1, books) //passo la varaiabile dove ho definito il parametro e l'array
console.log(books) //stampo l'array per vedere il risultato
stampoSistemato(books)
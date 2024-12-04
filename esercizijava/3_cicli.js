//CICLI
//1. CICLO FOR
//Crea un ciclo for che stampi tutti i numeri da 1 a 10 nella console.

for (let i = 0; i < 10; i++)
console.log(i)

//2. CICLO WHILE
// Crea una variabile contatore e inizializzala a 0.
// Usa un ciclo while per incrementare il valore di contatore fino a 5 e stampare ogni valore nella console.

let i = 0
while (i <= 5 ){
    console.log(i);
    i++ }

    //3. CICLO FOR ...IN SU UN OGGETTO
    //Crea un oggetto persona con le proprietà nome, eta e citta.
//Usa un ciclo for...in per stampare tutte le chiavi dell'oggetto (ad esempio: nome, eta, citta).

let user = { nome: "alfonso", 
    età: 25, 
    città: "vietri"}
for ( let i in user){
    console.log(i)
}


// 4. FOR OFF ARRAY
// Crea un array frutti con alcuni nomi di frutta.
// Usa un ciclo for...of per stampare ogni frutto dell'array nella console.

let frutta = [ "mela", "banana", "kiwi", "mandarino"]

for(let f of frutta ){
    console.log(f)
}



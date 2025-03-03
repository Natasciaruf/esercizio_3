// Scrivi una funzione che accetti l'età di una persona e restituisca un messaggio che indichi se la persona è maggiorenne o minorenne.
//  Utilizza l'operatore logico && per verificare se l'età è superiore a 18.

function age(age) {
  if (age > 18) {
    console.log("è maggiorenne");
  } else {
    console.log("è minorenne");
  }
}

age(20);

// Scrivi una funzione che prenda un numero e utilizzi l'operatore logico || per verificare se è positivo o negativo.
//  Restituisci un messaggio appropriato

function number(number) {
  if (number > 0) {
    console.log("è positivo");
  } else {
    console.log("è negativo");
  }
}

number(-3);

// Scrivi una funzione che prenda due variabili booleane e restituisca true se almeno una delle due è true utilizzando l'operatore logico ||.
// Restituisci false altrimenti.

function verifica(una, due) {
  if (una == true || due == true) {
    console.log("una delle due è vera");
  } else {
    console.log("sono entrambe false");
  }
}

verifica(true, false);

// Scrivi una funzione che verifichi se un numero è compreso tra 10 e 20 (inclusi). Utilizza gli operatori logici && per fare il controllo.

function limite(numero) {
  if (numero >= 10 && numero <= 20) {
    console.log("è compreso");
  } else {
    console.log("non è compreso");
  }
}

limite(30);

// Scrivi una funzione che prenda il numero di un giorno (1 per lunedì, 7 per domenica)
//  e restituisca il nome del giorno della settimana utilizzando una serie di if o un switch.

function week(day) {
  switch (day) {
    case 1:
      console.log("lunedi");
      break;
    case 2:
      console.log("martedi");
      break;
    case 3:
      console.log("mercoledi");
      break;
    case 4:
      console.log("giovedi");
      break;
    case 5:
      console.log("venerdi");
    case 6:
      console.log("sabato");
      break;
    case 7:
      console.log("domenica");
      break;
  }
}

// Scrivi una funzione che prenda un numero e restituisca "Pari" o "Dispari" utilizzando if e else.

function pariDispari(numero){
    if(numero % 2 == 0){
        console.log("é divisibile per due")
    }else{
        console.log("non è divisibile per due")
    }
}

pariDispari(5)

// Scrivi una funzione che prenda un numero e,
//  utilizzando un controllo di flusso if/else, restituisca un messaggio che dica se il numero è positivo, negativo o zero.

function number(numero){
    if(numero > 0){
        console.log("positivo")
    }else if(numero < 0){
        console.log("negativo")
    }else{
        console.log("è zero")
    }
}

number(0)

// Scrivi una funzione che calcoli la somma di tutti i numeri da 1 a N (incluso) utilizzando un ciclo for.

function ciclo(num){
let somma = 0;
for(let i = 1; i <= num; i ++){
    somma += i;
}
return somma
}


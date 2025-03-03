//Differenza valore e riferimento

//Valore

// let Alfonso = 25 
// let Natascia = 30

// //Riferimento 

// let contenitore = {
//     oggetto1: "bottiglia",
//     ogetto2: "bicchiere"
// }

// function stampaOggetto(Natascia){
// console.log(Natascia.ogetto2)
// }

// stampaOggetto(contenitore)

const oggetti = [
    {
      id: 1,
      nome: "Natina",
      cognome: "Rufina",
      età: 92,
    },
    {
      id: 2,
      nome: "Alfonsina",
      cognome: "Lambiasina",
      età: 83,
    },
    {
      id: 3,
      nome: "Cristina",
      cognome: "Rinalducci",
      età: 100,
    },
  ];

  let nuovoArr = oggetti.filter((items) => {
console.log(items.age >= 85)
  })

  console.log(nuovoArr)
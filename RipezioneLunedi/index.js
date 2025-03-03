

// 1. Crea un array chiamato "users" che contiene oggetti, dove ogni oggetto rappresenta un utente con proprietà come "name", "age" e "isActive".
// 2. Scrivi una funzione `filterAndSortUsers` che filtra gli utenti attivi (isActive: true) e ordina l'array in base all'età (dal più giovane al più anziano).
// 3. Scrivi una funzione `processUserData` che prende come argomento l'array "users" e due callback: una per filtrare e ordinare i dati e una per visualizzare l'array risultante.
// 4. Usa `setInterval` per eseguire `processUserData` ogni 5 secondi, passando come argomento l'array "users" e le due callback.
// 5. Aggiungi un timeout che ferma l'intervallo dopo 25 secondi.
// 6. Usa il **destructuring** per accedere alle proprietà dell'oggetto utente all'interno delle callback.
// 7. Utilizza lo **spread operator** per creare nuove versioni dell'array quando necessario.
// 8. Usa lo **spread parameter** per passare un numero arbitrario di utenti a una funzione che esegue un'operazione su tutti gli utenti.

let users = [
    {
        name: "Alfonso",
        age: 25,
        isActive: true 
    },
    {
        name: "Maria",
        age: 30,
        isActive: false
    },
    {
        name: "Giorgia",
        age: 18,
        isActive: true 
    }
]

function filterAndSortUsers(){
   const filter = users.filter((user) => user.isActive === true)
   console.log(filter)

   const sort = users.sort((a, b) => a.age - b.age )
   console.log(sort)
}



function StampaArray(){
    users.forEach((user) =>{
        console.log("Nome Utente: " + user.name, "Età utente: " + user.age, "Utente attivo: " + user.isActive)
    })
}

    function processUserData(users, filterAndSort, callbackStampa){
let processUserData = filterAndSort(users)
callbackStampa(filterAndSort)
}



let interval = setInterval(() => {
    processUserData(users, filterAndSortUsers, StampaArray)
},5000)

setTimeout(() => {
    clearInterval(interval)
    console.log("Intervallo terminato")
}, 25000)

let newUser = { name: "Luca", age: 22, isActive: true };
let updatedUsers = [...users, newUser]; //Spead Operator

//DESTRUTURING PER UTILIZZARE SPEAD PARAMETER
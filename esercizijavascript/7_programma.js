/**************
 SIMULAZIONE PROGRAMMA SENZA GUI (SCHERMO IN HTML)
 - aggiungere libri
 - rimuovere libri
 - visualizzare libri
 - simulare una login
 */

//funzioni
function addMakeUp(newMakeUp, arr) {
    arr.push(newMakeUp);
}

function nameMakeUp(arr) {
    if (arr.length > 0) {
        console.log("Makeup:")
        arr.forEach(element => {
            console.log(" _id: " + element.id + "_makeup: " + element.makeup + "_brand " + element.brand + "_quantity " + element.quantity);
        })
    } else {
        console.log("Prodotto esaurito")
    }

}


function loading() {
    console.log("Loading...");
}

function prodottoEsaurito() {
    makeup.pop()
    console.log("Prodotto Chanel esaurito")
}

function login(username, password) {
    let usernameValido = "Utente1"
    let passwordValida = "Password1"

    if (usernameValido === username && passwordValida === password) {
        console.log("Login effettuato")
    } else { console.log("Login non effettuto") }
}

//array

let makeup = [];
console.log("Avvio programma in corso...");

setTimeout(() => login("Utente1", "Password1"), 2000)

setTimeout(() => {
    console.log("Inserimento prodotti in corso...")
    let makeup1 = { id: 1, makeup: "mascara", brand: "maybelline", quantity: 100 };
    addMakeUp(makeup1, makeup)

    let makeup2 = { id: 2, makeup: "blush", brand: "Dior", quantity: 200 };
    addMakeUp(makeup2, makeup)

    let makeup3 = { id: 3, makeup: "foundation", brand: "Chanel", quantity: 50 };
    addMakeUp(makeup3, makeup)


    nameMakeUp(makeup)
}, 3000)

setTimeout(loading, 5000);
setTimeout(prodottoEsaurito, 6000);
setTimeout(() => nameMakeUp(makeup), 8000);


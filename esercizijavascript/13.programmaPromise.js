/************** 
 SIMULAZIONE PROGRAMMA SENZA GUI (SCHERMO IN HTML) 
 - aggiungere libri
 - rimuovere libri
 - visualizzare libri
 - simulare una login 
 */

// Funzioni che restituiscono una Promise
function addMakeUp(newMakeUp, arr) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            arr.push(newMakeUp);
            resolve(`Prodotto aggiunto: ${newMakeUp.makeup}`);
        }, 1000);  // Simula un delay per l'aggiunta
    });
}

function nameMakeUp(arr) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (arr.length > 0) {
                console.log("Makeup:");
                arr.forEach(element => {
                    console.log(` _id: ${element.id} _makeup: ${element.makeup} _brand: ${element.brand} _quantity: ${element.quantity}`);
                });
                resolve("Elenco prodotti visualizzato.");
            } else {
                reject("Prodotto esaurito");
            }
        }, 1000);  // Simula il tempo per visualizzare i prodotti
    });
}

function loading() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Loading...");
            resolve("Caricamento completato.");
        }, 2000);  // Simula un tempo di caricamento
    });
}

function prodottoEsaurito(makeup) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const removed = makeup.pop();
            console.log(`Prodotto ${removed.makeup} esaurito`);
            resolve("Prodotto rimosso");
        }, 1000);  // Simula il tempo per rimuovere il prodotto
    });
}

function login(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usernameValido = "Utente1";
            const passwordValida = "Password1";

            if (usernameValido === username && passwordValida === password) {
                resolve("Login effettuato");
            } else {
                reject("Login non effettuato");
            }
        }, 2000);  // Simula il tempo per il login
    });
}

// Array
let makeup = [];
console.log("Avvio programma in corso...");

// Eseguiamo il flusso delle operazioni
login("Utente1", "Password1")
    .then((loginMessage) => {
        console.log(loginMessage);
        console.log("Inserimento prodotti in corso...");

        return addMakeUp({ id: 1, makeup: "mascara", brand: "Maybelline", quantity: 100 }, makeup);
    })
    .then((message1) => {
        console.log(message1);
        return addMakeUp({ id: 2, makeup: "blush", brand: "Dior", quantity: 200 }, makeup);
    })
    .then((message2) => {
        console.log(message2);
        return addMakeUp({ id: 3, makeup: "foundation", brand: "Chanel", quantity: 50 }, makeup);
    })
    .then((message3) => {
        console.log(message3);
        return nameMakeUp(makeup);
    })
    .then((nameMessage) => {
        console.log(nameMessage);
        return loading();
    })
    .then((loadingMessage) => {
        console.log(loadingMessage);
        return prodottoEsaurito(makeup);
    })
    .then((prodottoEsauritoMessage) => {
        console.log(prodottoEsauritoMessage);
        return nameMakeUp(makeup);
    })
    .catch((error) => {
        console.log("Errore: " + error);
    });

    
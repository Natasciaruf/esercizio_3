// Partendo dall'esercizio Le Callback - 5, includi la gestione degli errori. Se la funzione di callback genera un errore, catturalo e gestiscilo.
// Modificare la funzione performOperation per gestire l'errore e registrare un messaggio di errore.

// function performOperation(a, b, callback) {
//     let result = a + b 
//   callback(result)
//   }
  
//   function displayResult(result) {
//   console.log("result is" + result)
//   }
  
//   performOperation(5, 3, displayResult);

  function performOperation(a, b, callback) {
    if ( a < b){
        callback(null, "Ok");
    } else {
        callback(new Error("No"), null)
    }
   }
   
   function displayResult(error, result) {
    if (error){
        console.log(error);
    } else {
        console.log(result)
    }
   }
   
   performOperation(5, 3, displayResult);
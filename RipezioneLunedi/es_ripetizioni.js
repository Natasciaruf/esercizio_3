// Dato il seguente array di oggetti:
// const students = [
// { id: 1, name: "Luca", surname: "Rossi", age: 20, hobby: 'gamer'},
// { id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: 'sportsman'},
// { id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: 'gamer'},
// { id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: 'photographer'},
// ];

// Creare una funzione che passi in rassegna gli elementi dell'array e produca il seguente output:

// Luca
// Life Is a Game, Play to Win!
// Mario
// Never give up!
// Giovanna
// Life Is a Game, Play to Win!
// Carmelo
// A picture is worth a thousand words!
// Il più giovane è Carmelo
// Il cognome più lungo è Brambilla

const students = [
{ id: 1, name: "Luca", surname: "Rossi", age: 20, hobby: 'gamer'},
{ id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: 'sportsman'},
{ id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: 'gamer'},
{ id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: 'photographer'},
];

function stampaOggetto(){
    students.forEach((student) => {
    console.log(students[0].name),
    console.log("Life Is a Game, Play to Win!")
    console.log(students[1].name),
    console.log("Never give up!")
    })
}

stampaOggetto()

// # Generatore di password
// - creare le variabili che dopo chideremo all'utente

//     - variabile nome
let userName;
//     - variabile cognome
let userSurname;
//     - variabile colore preferito
let userFavoriteColor;
// - chiedere all'utente delle informazioni e immagazzinare le informazioni nelle variabili
//     - chiedere all'utente il suo nome
//         - creare il prompt
//         - assegnare il valore restituito dal prompt alla variabile 

userName = prompt('Benvenuto nel genaratore di passoword, come ti chiami?');
console.log(userName);
//     - chiedere all'utente il suo congnome
//         - creare il prompt
//         - assegnare il valore restituito dal prompt alla variabile
userSurname = prompt('E qual è il tuo cognome?');
console.log(userSurname);
//     - chiedere all'utente il suo colore preferito
//         - creare il prompt
//         - assegnare il valore restituito dal prompt alla variabile
userFavoriteColor = prompt('qual è il tuo colore preferito?');
console.log(userFavoriteColor);
// - concatenare le 3 variabili ottenute dai prompt + una variabile numerica
let randomNumber;
randomNumber = Math.floor((Math.random() * 30) + 1) ;
let newPassoword = userName + userSurname +userFavoriteColor + randomNumber;
// console.log('la tua nuova password è'+ ' ' + userName + userSurname +userFavoriteColor + randomNumber )
console.log(newPassoword);
        
// - stampare sulla pagina le informazioni concatenate in modo da generare una password
const passwordDomElement = document.getElementById('new-password');
passwordDomElement.innerHTML ="la tua password è : " + newPassoword;
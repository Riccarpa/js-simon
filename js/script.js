/*Un alert() espone 5 numeri generati casualmente. 
(Decidete voi se debbano essere tutti diversi)
Non appena l'utente schiaccia "ok", parte un timer di 30 secondi. 
(Bonus: visualizzare il timer)
Al termine dei 30 secondi l'utente deve inserire, uno alla volta,
 i numeri che ha visto precedentemente, tramite il prompt(). (Bonus: far inserire i numeri da un form)
Dopo che sono stati inseriti i 5 numeri, il software mostra in un 
alert quanti e quali dei numeri da indovinare sono stati individuati.
 (Bonus: stampare in pagina il risultato, in alternativa all'alert.)
*/



// INTRODURRE VARIABILI*****************************************

let numbersList = [];
let countDownNumber = 4;

let delayNumber = 0;
let userNumberlist = [];

//link to html
let htmlCountDown = document.getElementById('count-down');



// INIZIO ESERCIZIO***********************************************

//riempo array di numeri 
numbersList = fiveRandom(numbersList);

//genero un alert in cui sono presenti i numeri da ricordare
const memoryBox = alert('Memorizza questi numeri : ' + numbersList + ' successivamente premi ok ');

//faccio partire il timer di 30 secondi

setInterval(countDown, 1000);


// dopo 30 secondi avvio una funzione che raccoglie confornta inumeri dell'utente

setTimeout(function() {
    //chiedo i numeri all'utente per 5 volte 
    while (userNumberlist.length < 5) {

        let userNumber = parseInt(prompt('inserisci i numeri che ti ricordi'));
        //inserisco i numeri in un array
        userNumberlist.push(userNumber);

    }
    console.log(numbersList);
    console.log(userNumberlist);
    // confronto l'array dei numeri casuali e quello dei numeri inseriti dall'utente
    let numberGuessed = 0;
    let correctNumber = '';

    for (i = 0; i < userNumberlist.length; i++) {
        // se il numero dell'utente è contenuto nei numeri casuali aumento il numero delle risposte corrette
        if (numbersList.includes(userNumberlist[i])) {
            correctNumber += userNumberlist[i]; //registro i numeri corretti
            numberGuessed++;
        }


    }
    console.log(correctNumber);
    //inserisco in un alert il numero di risposte corrette e quali sono.
    alert('Hai indovinato ' + numberGuessed + ' numeri. ' + ' I numeri che hai indovinato sono ' + correctNumber + ' ');

}, 5000)

//confronto gli elementi dei due array










// FUNZIONI*****************************************************

//numeri casuali
function fiveRandom(arr) {
    while (arr.length < 5) {
        const num = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        if (!arr.includes(num)) {

            arr.push(num);
        }
    }
    return arr;
}

// timer 30 sec
function countDown() {

    if (countDownNumber > 0) {
        countDownNumber--;

        htmlCountDown.innerHTML = countDownNumber;
    } else {
        clearInterval();
        htmlCountDown.innerHTML = '';
    }



}

function result() {
    if (!correctNumber) {
        'non hai indovinato nessun numero'
    } else {
        ' I numeri che hai indovinato sono ' + correctNumber;

    }
}
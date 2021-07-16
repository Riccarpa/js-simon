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


// INTRODURRE VARIABILI*****************************************

let numbersList = [];
let countDownNumber = 4;

//link to html
let htmlCountDown = document.getElementById('count-down');



// INIZIO ESERCIZIO***********************************************

//riempo array di numeri 
numbersList = fiveRandom(numbersList);
//genero un alert in cui sono presenti i numeri da ricordare
const memoryBox = alert('Memorizza questi numeri : ' + numbersList + ' successivamente premi ok ');

//faccio partire il timer di 30 secondi

let toZero = setInterval(countDown, 1000);
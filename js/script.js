//Definizione variabili - PART 1
const countdown = document.getElementById('countdown')
const instructions = document.getElementById('instructions')
const numbersList = document.getElementById('numbers-list')
const answersForm = document.getElementById('answers-form')
const form = document.getElementById('answers-form')
const inputs = document.querySelectorAll('.form-control')
const button = document.querySelector('button.btn')
const messageText = document.getElementById('message')

//Funzione per generare 5 numeri casuali
function getRandInt(max, times){
    //Array per salvare i numeri casuali
    const randoms = []

    //Ciclo FOR per salvare i numeri generati
    for(let i=0; i<times; i++){
        randoms.push(Math.floor(Math.random()*max)) 
    }

    //Return ARRAY
    return randoms;
}

//Funzione per CheckRisposte
function checkRisposte(risposteRicevute, risposteEsatte){
    let risposteOk = []
    for(let i = 0; i<risposteRicevute.length; i++){
        if(risposteEsatte.includes(risposteRicevute[i])){
            risposteOk.push(risposteRicevute[i])
        }
    }
    return risposteOk
}

//Generazione numeri casuali
const gameRandoms = getRandInt(50,5)

//Start Game: countdown 

//Definizione della variabile i per mostrare secondi
let i = 0;
countdown.innerText = i; 
numbersList.innerText = gameRandoms.join(' ')
//Avvio countdown
const interval = setInterval(() => {
    i++;
    countdown.innerText = i;
}, 1000);

//Tempo scaduto
setTimeout(() => {
    //Interrompo countdown
    clearInterval(interval)

    //Nascondo elementi del pre-game
    countdown.classList.add('d-none')
    instructions.classList.add('d-none')
    numbersList.classList.add('d-none')

    //Mostro input fields
    answersForm.classList.remove('d-none')
}, 4000);


//Ricevo i dati inseriti dall'utente
form.addEventListener('submit',function(e){
    e.preventDefault();

    //Gestione del bottone
    button.innerText = 'Gioca ancora'; 
    button.classList.add('btn-success')
    button.classList.remove('btn-primary')
    button.onclick = function() {
        window.location.reload();
    };

    //Generare array delle risposte ricevute
    let risposteRicevute = []
    for(let i = 0; i<inputs.length;i++){
        risposteRicevute.push(parseInt(inputs[i].value));
        inputs[i].disabled = true; 
    }
    console.log(risposteRicevute, gameRandoms);
    const risultato = checkRisposte(risposteRicevute, gameRandoms);
    console.log(risultato);
})

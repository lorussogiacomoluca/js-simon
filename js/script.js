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
    for (let i = 0; i < times; i++) {
        randoms.push(Math.floor(Math.random() * max) + 1); 
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

    if(risposteOk.length ===1){
        messageText.innerText = `Hai indovinato ${risposteOk.length} numero. 
        Devi migliorare!
        I numeri mostrati erano ${risposteEsatte.join(' ')}. 
        Tu hai indicato ${risposteRicevute.join(' ')}, indovindando solo ${risposteOk.join(' ')}`
    }else if (risposteOk.length <=4){
        messageText.classList.add('text-warning')
        messageText.classList.remove('text-danger')
        messageText.innerText = `Bravo! Hai indovinato ${risposteOk.length} numeri.
        Gioca ancora!
        I numeri mostrati erano ${risposteEsatte.join(' ')}.
        Tu hai indicato ${risposteRicevute.join(' ')}, indovindando ${risposteOk.join(' ')}`
    }else if (risposteOk.length ===5 ){
        messageText.classList.add('text-success')
        messageText.classList.remove('text-danger')
        messageText.innerText = `Ottimo!
        Hai indovinato tutti i ${risposteOk.length} numeri.
        I numeri mostrati erano ${risposteEsatte.join(' ')}. 
        Tu hai indicato ${risposteRicevute.join(' ')}, indovindando ${risposteOk.join(' ')}`
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
        inputs[i].disabled = true; 

        //Gestione dei valori unici in array ricevuto
        if(!risposteRicevute.includes(parseInt(inputs[i].value))){
            risposteRicevute.push(parseInt(inputs[i].value));
                
        }
    }
    console.log(risposteRicevute, gameRandoms);
    const risultato = checkRisposte(risposteRicevute, gameRandoms);
    console.log(risultato);
})

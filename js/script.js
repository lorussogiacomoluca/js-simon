//Definizione variabili - PART 1
const countdown = document.getElementById('countdown')
const instructions = document.getElementById('instructions')
const numbersList = document.getElementById('numbers-list')

//Start Game: countdown 

//Definizione della variabile i per mostrare secondi
let i = 0;
countdown.innerText = i; 

const interval = setInterval(() => {
    i++;
    countdown.innerText = i;
}, 1000);

setTimeout(() => {
    clearInterval(interval)
    countdown.classList.add('d-none')
    instructions.classList.add('d-none')
}, 4000);
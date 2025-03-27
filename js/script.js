//Definizione variabili - PART 1
const countdown = document.getElementById('countdown')
const instructions = document.getElementById('instructions')
const numbersList = document.getElementById('numbers-list')



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

//Generazione numeri casuali
const gameRandoms = getRandInt(100,5)


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
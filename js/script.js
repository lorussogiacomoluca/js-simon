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
console.log(gameRandoms);

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
    
}, 4000);
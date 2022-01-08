let items = ["Rock", "Paper", "Scissors"];

const computerchoice = document.querySelector('.computer-choice');

const computerplay = document.createElement('div');
computerplay.classList.add('computerplay');

computerchoice.appendChild(computerplay);

function computerPlay() {

    randomItem = items[(Math.floor(Math.random() * (0, 3)))];

    return randomItem
}

computerPlay()

//DOM Buttons for ROCK, PAPER, and SCISSORS:

const div = document.querySelector('.choices');

const rockbtn = document.createElement('button');
rockbtn.classList.add('rock');
rockbtn.textContent = 'ROCK'

const paperbtn = document.createElement('button');
paperbtn.classList.add('paper');
paperbtn.textContent = 'PAPER'

const scissorsbtn = document.createElement('button')
scissorsbtn.classList.add('scissors');
scissorsbtn.textContent = 'SCISSORS'

div.appendChild(rockbtn)
div.appendChild(paperbtn);
div.appendChild(scissorsbtn);

let computerScore = 0;
let playerScore = 0;

const display = document.querySelector('.result')

const textBar = document.createElement('div');
textBar.classList.add('resultdisplay');

display.appendChild(textBar)


function refreshPage() {
    const restart = document.querySelector('.gameover');

    const refresh = document.createElement('button');

    refresh.classList.add('refresh');
    
    restart.appendChild(refresh);
    const reset = document.createTextNode('RESET');
    refresh.appendChild(reset)
    if (playerScore == 5) {
        refresh.addEventListener('click', () => {
            location.reload()
        })    
    } else if (computerScore == 5) {
        refresh.addEventListener('click', () => {
            location.reload()
        })    
    }
}

function playRound(e) {

    let computerSelection = computerPlay()
    let playerSelection = e.target.className

    if (playerSelection == 'rock' && computerSelection == 'Paper') {
        computerplay.textContent = computerSelection
        computerScore++
        computerscore.textContent = "Computer's score: " + computerScore
        playerscore.textContent = "Your score: " + playerScore
        textBar.textContent = 'You lose this round! Paper beats rock'
        

    } else if (playerSelection == 'rock' && computerSelection == 'Scissors') {
        computerplay.textContent = computerSelection
        playerScore++
        computerscore.textContent = "Computer's score: " + computerScore
        playerscore.textContent = "Your score: " + playerScore
        textBar.textContent = 'You win this round! Rock beats scissors'
        
    
    } else if (playerSelection == 'rock' && computerSelection == 'Rock') {
        computerplay.textContent = computerSelection
        computerscore.textContent = "Computer's score: " + computerScore
        playerscore.textContent = "Your score: " + playerScore
        textBar.textContent = "It's a tie!"

    } else if (playerSelection == 'paper' && computerSelection == "Rock") {
        computerplay.textContent = computerSelection
        playerScore++
        computerscore.textContent = "Computer's score: " + computerScore
        playerscore.textContent = "Your score: " + playerScore
        textBar.textContent = 'You win this round! Paper beats rock'
        

    } else if (playerSelection == 'paper' && computerSelection == "Scissors") {
        computerplay.textContent = computerSelection
        computerScore++
        computerscore.textContent = "Computer's score: " + computerScore
        playerscore.textContent = "Your score: " + playerScore
        textBar.textContent = 'You lose this round! Scissors beats paper'
        

    } else if (playerSelection == 'paper' && computerSelection == "Paper") {
        computerplay.textContent = computerSelection
        computerscore.textContent = "Computer's score: " + computerScore
        playerscore.textContent = "Your score: " + playerScore
        textBar.textContent = "It's a tie!"

    } else if (playerSelection == 'scissors' && computerSelection == "Rock") {
        computerplay.textContent = computerSelection
        computerScore++
        computerscore.textContent = "Computer's score: " + computerScore
        playerscore.textContent = "Your score: " + playerScore
        textBar.textContains = 'You lose this round! Rock beats scissors'
        

    } else if (playerSelection == 'scissors' && computerSelection == "Paper") {
        computerplay.textContent = computerSelection
        playerScore++
        computerscore.textContent = "Computer's score: " + computerScore
        playerscore.textContent = "Your score: " + playerScore
        textBar.textContent = 'You win this round! Scissors beats paper'
        

    } else if (playerSelection == 'scissors' && computerSelection == "Scissors") {
        computerplay.textContent = computerSelection
        computerscore.textContent = "Computer's score: " + computerScore
        playerscore.textContent = "Your score: " + playerScore
        textBar.textContent = "It's a tie!"
    }

    if (playerScore == 5) {
        gameresult.textContent = "You win the game!"
        refreshPage()

    } else if (computerScore == 5) {
        gameresult.textContent = "Computer wins the game!"
        refreshPage()
    }
}



//DOM divs for computerScore and playerScore

const scoredisplay = document.querySelector('.scoredisplay');

const computerscore = document.createElement('div');
computerscore.classList.add('computerscore')

const playerscore = document.createElement('div');
playerscore.classList.add('playerscore');

const gameresult = document.createElement('p');
gameresult.classList.add('gameresult');

scoredisplay.appendChild(computerscore);
scoredisplay.appendChild(playerscore);
scoredisplay.appendChild(gameresult);

//Rock event:
const button1 = document.querySelector('.rock')
button1.addEventListener('click', playRound) 
    
//Paper event:
const button2 = document.querySelector('.paper')
button2.addEventListener('click', playRound) 
    
//Scissors event:
const button3 = document.querySelector('.scissors')
button3.addEventListener('click', playRound)
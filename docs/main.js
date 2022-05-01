let computerPlay = () => {
    let choice = Math.floor(Math.random() * (4-1) + 1);
    if (choice === 1){
        return "Rock"
    }
    else if (choice === 2){
        return "Paper"
    }
    else if (choice === 3){
        return "Scissors"
    }
}

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection){
        return "You Tied!";
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper"){
        return "You Lose! " + computerSelection + " beats " + playerSelection + "."; 
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        return "You Lose! " + computerSelection + " beats " + playerSelection + "."; 
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        return "You Lose! " + computerSelection + " beats " + playerSelection + "."; 
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock"){
        return "You Win! " + playerSelection + " beats " + computerSelection + "."; 
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        return "You Win! " + playerSelection + " beats " + computerSelection + "."; 
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        return "You Win! " + playerSelection + " beats " + computerSelection + "."; 
    }
}

let dissipateResults = () => start.classList.add('start-f');

let showScore = () => { 
    let score = document.createElement('div');
    score.textContent = userScore + " - " + compScore;
    scores.classList.add('start');
    scores.appendChild(score);
};

let play = () => {
    if (plays === 0){
        dissipateResults();
        showScore();
    }
    plays++;
}

/* let reset = () => {

} */

var start = document.querySelector("#start");
var scores = document.querySelector("#score");
var playerChoice;
var userScore = 0;
var compScore = 0;
var plays = 0;

var rock = document.querySelector("#rock");
rock.addEventListener('click', () => {
    playerChoice = "Rock";
    play();
});

let paper = document.querySelector("#paper");
paper.addEventListener('click', () => {
    playerChoice = "Paper";
    play();
});

let scissors = document.querySelector("#scissors");
scissors.addEventListener('click', () => {
    playerChoice = "Scissors";
    play();
});


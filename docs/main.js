function computerPlay(){
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

function playRound(playerSelection, computerSelection){
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

function dissipateResults(str){
    str.classList.add('start-f');
}

let start = document.querySelector("#start");
let playerChoice;

let rock = document.querySelector("#rock");
rock.addEventListener('click', () => {
    playerChoice = "Rock";
    dissipateResults(start);
});

let paper = document.querySelector("#paper");
paper.addEventListener('click', () => {
    playerChoice = "Paper";
    dissipateResults(start);
});

let scissors = document.querySelector("#scissors");
scissors.addEventListener('click', () => {
    playerCHoice = "Scissors";
    dissipateResults(start);
});


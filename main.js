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

let computerSelection = computerPlay();
let playerSelection = "Rock";
console.log("Computer: " + computerSelection);
console.log("Player: " + playerSelection);
console.log(playRound(playerSelection, computerSelection));
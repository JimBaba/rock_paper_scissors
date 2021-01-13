
    let playerScore = 0;
    let cpuScore = 0;
    let numberOfGames = 5;


function computerPlay(){
    let rnd = Math.floor(Math.random() *10);
    if(rnd <= 3){
        return "rock"
    } else if(rnd > 3 && rnd <= 6){
        return "paper"
    } else {
        return "scissors"
    }
    
}




function playRound(){
    let playerSelection = prompt("Rock, Paper or Scissors?")
    playerSelection = playerSelection.toLowerCase()
    let computerSelection = computerPlay()


    if(playerSelection == computerSelection){
        console.log("Tie! Try again")
    } else if(playerSelection == "rock" && computerSelection == "paper"){
        cpuScore += 1;
        console.log(playerSelection + " loses against " + computerSelection + "! " + " The score is: " + "Player: " + playerScore + " Computer: " + cpuScore)
    } else if(playerSelection == "rock" && computerSelection == "scissors"){
        playerScore += 1;
        console.log("You win " + playerSelection + " beats " + computerSelection + "! " + " The score is: " + "Player: " + playerScore + " Computer: " + cpuScore)
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        playerScore += 1;
        console.log("You win " + playerSelection + " beats " + computerSelection + "! " + " The score is: " + "Player: " + playerScore + " Computer: " + cpuScore)
    } else if(playerSelection == "paper" && computerSelection == "scissors"){
        cpuScore += 1;
        console.log(playerSelection + " loses against " + computerSelection + "! " + " The score is: " + "Player: " + playerScore + " Computer: " + cpuScore)
    } else if(playerSelection == "scissors" && computerSelection == "paper"){
        playerScore += 1;
        console.log("You win " + playerSelection + " beats " + computerSelection + "! " + " The score is: " + "Player: " + playerScore + " Computer: " + cpuScore)
    } else {
        cpuScore += 1;
        console.log(playerSelection + " loses against " + computerSelection + "! " + " The score is: " + "Player: " + playerScore + " Computer: " + cpuScore)
    }


}

function game(){

    for(let i = 0; i < numberOfGames; i++){
        playRound();
    }
    console.log("Player: " + playerScore + " - CPU: " + cpuScore)
    playerScore = 0;
    cpuScore = 0;
}


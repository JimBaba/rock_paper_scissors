let playerSelection = prompt("Rock, Paper or Scissors?")
playerSelection = playerSelection.toLowerCase()
let computerSelection = computerPlay()

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

function playRound(playerSelection, computerSelection){

    if(playerSelection == computerSelection){
        return "Tie! Try again"
    } else if(playerSelection == "rock" && computerSelection == "paper"){
        return ()
    }

}


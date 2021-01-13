function computerPlay(){
    let rnd = Math.floor(Math.random() *10);
    if(rnd <= 3){
        return "Rock"
    } else if(rnd > 3 && rnd <= 6){
        return "Paper"
    } else {
        return "Scissors"
    }
    
}
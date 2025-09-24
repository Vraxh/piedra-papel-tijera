function getComputerChoice() {

    let numRan = Math.random() * (4 - 1) + 1;
    let rps = "vacio";
    
    if(numRan >= 1 && numRan < 2){
        rps = "Rock";
    }else if (numRan >= 2 && numRan < 3){
        rps = "Paper";
    }else{
        rps = "Scisors";
    }
    return rps;
}

console.log(getComputerChoice());

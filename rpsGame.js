let  humanScore = 0,  computerScore = 0;

function getComputerChoice(){
    let numRan = Math.random() * (4 - 1) + 1;
    let rps = "Rock_Paper_Scisors";

    if(numRan >= 1 && numRan < 2){
        rps = "Rock";
    }else if (numRan >= 2 && numRan < 3){
        rps = "Paper";
    }else{
        rps = "Scisors";
    }
    return rps;
}

function getHumanChoice(){
    let rps = "Rock_Paper_Scisors";
    let aux = (window.prompt("| 1 - Rock \n| 2 - Paper \n| 3 - Scisors")).toUpperCase()

    if(aux === "ROCK"){
        rps = "Rock";
    }else if (aux === "PAPER"){
        rps = "Paper";
    }else if (aux === "SCISORS"){
        rps = "Scisors";
    }
    return rps;
}

function playRound(humanChoice, computerChoice){
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
 



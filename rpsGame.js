function getComputerChoice() {

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

function getHumanChoice(choice){

    let rps = "Rock_Paper_Scisors";
    if(choice == 1){
        rps = "Rock";
    }else if (choice == 2){
        rps = "Paper";
    }else if (choice == 3){
        rps = "Scisors";
    }
    return rps;
}


result = window.prompt("1 - Rock | 2 - Paper | 3 - Scisors");
console.log(getHumanChoice(result));


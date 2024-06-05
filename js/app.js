let humanScore = 0;
let computerScore = 0;
let choiceTranslationSymbols = ["rock","paper","scissors"];

let decisionMatrix = [
    [[0,0], [-1,1], [1,-1]],
    [[1,-1],[0,0],[-1,1]],
    [[-1,1],[1,-1],[0,0]]
];



playGame();















function playGame(){
    for(let i =0; i<5;i++){
        console.log("ROUND" + " " + (i+1))
        if(playRound(getHumanChoice(),getComputerChoice()) == -1){
            break;
        }
    }
}


function getRandomInt(max){
    return Math.floor(Math.random()*max);
}

function getComputerChoice(){
    let randomInt = getRandomInt(3);
    if(randomInt == 0){
        return 0;
    }
    else if(randomInt == 1){
        return 1;
    }
    else{
        return 2;
    }
}

function getHumanChoice(){
    
    while(true){
        let choice = prompt("Rock Paper Scissors? (Enter rock / paper / scissors):");
        console.log(choice);
        if(choice == null){
            return -1;
        }
        
        if(choice.toLowerCase() == "rock"){
            return 0;
        }
        else if(choice.toLowerCase()=="paper"){
            return 1;
        }
        else if (choice.toLowerCase() == "scissors"){
            return 2;
        } 
        else {
            alert("ERROR: Please input either rock / paper / scissors");
        }

    }
}

function playRound(humanChoice,computerChoice){
    if(humanChoice == -1){

        return -1;
    }

    let humanChoice_outcome = decisionMatrix[humanChoice][computerChoice][0];
    let computerChoice_outcome = decisionMatrix[humanChoice][computerChoice][1];

    console.log(choiceTranslationSymbols[humanChoice] + " vs " + choiceTranslationSymbols[computerChoice]);
    console.log(humanChoice_outcome + " : " + computerChoice_outcome)
    if(humanChoice_outcome == computerChoice_outcome){
        console.log("DRAW");
    }
    else if(humanChoice_outcome < computerChoice_outcome){
        computerScore++;
        console.log("COMPUTER WINS");
    }
    else if (humanChoice_outcome > computerChoice_outcome){
        humanScore++;
        console.log("HUMAN WINS");
    }
}   


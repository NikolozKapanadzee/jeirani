const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
            computer = "ჭა";
            break;
        case 2:
            computer = "ბადე";
            break;
        case 3:
            computer = "მაკრატელი";
            break;
    }
}
function checkWinner(){
    if(player == computer){
        return "ფრე!";
    }
    else if(computer == "ჭა"){
        return (player == "ბადე") ? "შენ მოიგე!" : "შენ წააგე!";
    }
    else if(computer == "ბადე"){
        return (player == "მაკრატელი") ? "შენ მოიგე!" : "შენ წააგე!";
    }
    else if(computer == "მაკრატელი"){
        return (player == "ჭა") ? "შენ მოიგე!" : "შენ წააგე!";
    }
}
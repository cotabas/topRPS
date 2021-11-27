
const para = document.querySelector('p');

//are we playing the same game?
function checkPlayable(x) {
    if (x === "rock" || x === "paper" || x === "scissor") {
        return x;
    } else {
        x = prompt("You must choose Rock, Paper, or Scissor!");
        return checkPlayable(x);
    }
}


// random computer choice
function getCompChoice() {
    const a = Math.floor(Math.random() * 3);
    if (a === 0) {
        return "rock";
    } else if (a === 1){
        return "paper";
    } else {
        return "scissor"
    }
}

//check who won
function checkWinner(a, b) {
    //rock greater than scissor
    //scissor greater than paper
    //paper greater than rock
    if (a === b) {
        return "Tie";
    } else if ((a === "rock" && b === "scissor") || (a === "scissor" && b === "paper") || (a === "paper" && b === "rock")) {
        return "User";
    } else {
        return "Computer";
    }
}

function getNiceMessage(x) {
    if (x === "Tie") {
        return "It was a tie! Everybody loses!";
    } else if (x === "User") {
        return "You won! You beat the very dumb computer!";
    } else {
        return "The Computer won! You should try harder!";
    }
}

let userPick 
let cumText
for (i = 1; i <= 5; i++) {
    userPick = prompt("Rock, Paper, or Scissor?");
    (userPick === null) ? userPick = prompt("Rock, Paper, or Scissor?") : userPick = userPick.toLowerCase();
    userPick = checkPlayable(userPick);
    compPick = getCompChoice();

    console.log("User: " + userPick);
    console.log("Computer: " + compPick);
    console.log("Winner: " + checkWinner(userPick, compPick));
    (cumText === undefined) ? cumText = getNiceMessage(checkWinner(userPick, compPick)) : cumText = cumText + "<br>" + getNiceMessage(checkWinner(userPick, compPick));
    para.innerHTML = cumText;
    
}








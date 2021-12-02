
const userScore = document.getElementById('userScore');
const compScore = document.getElementById('compScore');
const buts = document.querySelectorAll('svg');

const left = document.getElementById('left');
const right = document.getElementById('right');
const rock = document.getElementById('rockTile');
const paper = document.getElementById('paperTile');
const scissor = document.getElementById('scissorTile');
const mainButs = document.getElementById('buts');
const results = document.getElementById('result');
const overlay = document.getElementById('overlay');
const tieOL = document.getElementById('tieOL');

//left.appendChild(rock);
//right.appendChild(paper)
//mainButs.insertBefore(rock, mainButs.childNodes[0]);


let user = 0;
let comp = 0;

buts.forEach((x) => {
    x.addEventListener('click', () => {
        userPick(x.id);
    });
});

function userPick(user) {
    let compPick = getCompChoice();
    giveWinner(checkWinner(user, compPick)[0]);
    showResults(checkWinner(user, compPick), user, compPick);
}

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

function checkWinner(a, b) {
    if (a === b) {
        return ["Tie", "Tie"];
    } else if ((a === "rock" && b === "scissor") || (a === "scissor" && b === "paper") || (a === "paper" && b === "rock")) {
        return ["User", "Computer"];
    } else {
        return ["Computer", "User"];
    }
}

function giveWinner(x) {
    console.log(x)
    if (x === "Tie") {
        return;
    } else if (x === "User") {
        user++;
        userScore.textContent = user;
    } else {
        comp++;
        compScore.textContent = comp;
    }
}

function showResults(result, userPick, compPick) {
    if (result[0] === "Tie") {
        tieOL.style.visibility = "visible";
        setTimeout(() => {tieOL.style.visibility = "hidden";}, 2000);
        return;
    }
    console.log(result);
    console.log(userPick + compPick);
    overlay.style.visibility = "visible";
    left.appendChild(window[userPick + "Tile"]);
    right.appendChild(window[compPick + "Tile"]);
    results.childNodes[1].textContent = result[0] + " Won AND " + result[1] + " Lost";
    setTimeout(function() {
        overlay.style.visibility = "hidden";
        mainButs.insertBefore(scissor, mainButs.childNodes[0]);
        mainButs.insertBefore(paper, mainButs.childNodes[0]);
        mainButs.insertBefore(rock, mainButs.childNodes[0]);   
        if (user === 2 || comp === 2) {
            (user > comp) ? tieOL.childNodes[3].textContent = "USER WON" : tieOL.childNodes[3].textContent = "COMPUTER WON";
            tieOL.childNodes[1].textContent = "GAME OVER";
            tieOL.style.visibility = "visible";
            setTimeout(() => {tieOL.style.visibility = "hidden";}, 2000);
            reset();
            return; 
        }
    }, 2000);

}

function reset() {
    user = 0;
    comp = 0;
    userScore.textContent = user;
    compScore.textContent = comp;
}






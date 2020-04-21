let playersChoice = "";
let options = ["paper", "rock", "scissors"];
let computersChoice = "";

const paperImg = document.getElementById("paper-button");
const rockImg = document.getElementById("rock-button");
const scissorsImg = document.getElementById("scissors-button");

paperImg.onclick = function() {
    playersChoice = "paper";
    document.getElementById("humanSelection").setAttribute("src", "paper.png");
    setComputersChoice();
}

rockImg.onclick = function() {
    playersChoice = "rock";
    document.getElementById("humanSelection").setAttribute("src", "rock.png");
    setComputersChoice();
}

scissorsImg.onclick = function() {
    playersChoice = "scissors";
    document.getElementById("humanSelection").setAttribute("src", "scissors.png");
    setComputersChoice();
}

function setComputersChoice () {
    computersChoice = options[Math.floor(Math.random() * options.length)];
    switch(true) {
        case (computersChoice === "paper"):
            document.getElementById("cpuSelection").setAttribute("src", "paper.png");
            break;
        case (computersChoice === "rock"):
            document.getElementById("cpuSelection").setAttribute("src", "rock.png");
            break;
        case (computersChoice === "scissors"):
            document.getElementById("cpuSelection").setAttribute("src", "scissors.png");
            break;
        }
}


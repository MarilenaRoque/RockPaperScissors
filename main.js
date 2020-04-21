let playersChoice = "";
let options = ["paper", "rock", "scissors"];
let computersChoice = "";
let result=document.getElementById("results");
let resetButton= document.getElementById("reset");

const paperImg = document.getElementById("paper-button");
const rockImg = document.getElementById("rock-button");
const scissorsImg = document.getElementById("scissors-button");


    paperImg.onclick = function() {
        if(document.getElementById("cpuSelection").getAttribute("src")=="pc.svg"){
            playersChoice = "paper";
            document.getElementById("humanSelection").setAttribute("src", "paper.png");
            setComputersChoice();
        }
        else{
            alert("Press Play Again!");
        }

    }
 


    rockImg.onclick = function() {
        if(document.getElementById("cpuSelection").getAttribute("src")=="pc.svg"){
            playersChoice = "rock";
            document.getElementById("humanSelection").setAttribute("src", "rock.png");
            setComputersChoice();;
        }
        else{
            alert("Press Play Again!");
        }
    }
     

    scissorsImg.onclick = function() {
        if(document.getElementById("cpuSelection").getAttribute("src")=="pc.svg"){
            playersChoice = "scissors";
            document.getElementById("humanSelection").setAttribute("src", "scissors.png");
            setComputersChoice();
        }
        else{
            alert("Press Play Again!");
        } 

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

    resultAnalyze();

      
}

function resultAnalyze() {


    if(computersChoice=="paper" && playersChoice=="paper"){
            result.innerHTML="It's a Draw!";
    }
    if(computersChoice=="scissors" && playersChoice=="scissors"){
        result.innerHTML="It's a Draw!";
    }
    if(computersChoice=="rock" && playersChoice=="rock"){
        result.innerHTML="It's a Draw!";
    }


    if(computersChoice=="scissors" && playersChoice=="rock"){
        result.innerHTML="You Won!";
    }
    if(computersChoice=="paper" && playersChoice=="scissors"){
        result.innerHTML="You Won!";
    }
    if(computersChoice=="rock" && playersChoice=="paper"){
        result.innerHTML="You Won!";
    }


    if(computersChoice=="scissors" && playersChoice=="paper"){
        result.innerHTML="You Lose!";
    }
    if(computersChoice=="paper" && playersChoice=="rock"){
        result.innerHTML="You Lose!";
    }
    if(computersChoice=="rock" && playersChoice=="scissors"){
        result.innerHTML="You Lose!";
    }
    
}

resetButton.onclick = function (){
    document.getElementById("cpuSelection").setAttribute("src", "pc.svg");
    document.getElementById("humanSelection").setAttribute("src", "user.svg");
    result.innerHTML="Choose your Option:";
}








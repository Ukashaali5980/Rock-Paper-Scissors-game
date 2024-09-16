let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");

const genCompChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const randInx = Math.floor(Math.random() * 3);
    return options[randInx];
};

const drawGame = ()=>{
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "purple";
    msg.style.color = "white";

};

const showWinner = (userWin ,userChoice , compChoice)=>{
     if(userWin){
        userScore++;
        userscore.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "lightBlue";
     }else{
        compScore++;
        compscore.innerText = compScore;
        msg.innerText = `you lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
     }
};

const playGame = (userChoice)=>{
    //generate computer choice;
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissors , paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //scissors , rock
            userWin = compChoice === "scissors" ? false : true;
        } else{
            //rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    };

};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});
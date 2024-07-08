let userScore=0;
let compScore=0;
const choices = document.querySelectorAll(".choice");
//const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const getCompchoice=()=>{
    let options =["rock","paper","scissor"];
    let index=Math.floor(Math.random()*3);
    return options[index];
};

const drawGame=()=>{
    msg.innerText="THE GAME WAS DRAW";
    msg.style.backgroundColor="#081b31";

};

const showWinners=(userWins, userChoice, compChoice)=>{
    if(userWins){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText= `YOU LOSE! Your ${userChoice} is beaten by ${compChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    const compChoice=getCompchoice();
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWins=true;
    if(userChoice==="rock"){
        userWins=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        userWins=compChoice==="scissors"?false:true;
    }
    else{
        userWins=compChoice==="rock"?false:true;
    }
    showWinners(userWins, userChoice, compChoice);
    }
};
/*
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})
*/
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
  });
let userscore = 0;
let comscore = 0;


constmsg = document.querySelector('#msg');
const choices = document.querySelectorAll('.choice');

const userscorepara=document.querySelector('#user-score');
const comscorepara=document.querySelector('#com-score');

const showWinner = (userwin,userchoice,compchoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText=userscore;
        console.log("You Win");
        msg.innerText = `You Win!! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="Green";
    }
    else {
        comscore++;
        comscorepara.innerText=comscore;
        console.log("You lose");
        msg.innerText = `You Lose!! ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor="Red";
    }

}

const genCompChoice = () => {
    //rock paper scissors

    let options = ["rock", "paper", "scissors"];
    let randidx = Math.floor(Math.random() * 3);
    return options[randidx];


}
const drawGame = () => {
    console.log("Game Was Draw");

    msg.innerText = "The Game Was Draw!!Play Again";
    msg.style.backgroundColor="#081b31";
}

const playGame = (userchoice) => {
    console.log("userchoice:", userchoice);

    //Generate Computer Choice --> Modular Way

    const compchoice = genCompChoice();
    console.log("computer choice:", compchoice);

    if (userchoice === compchoice) {
        drawGame();
    }
    else {
        let userwin = true;
        if (userchoice == 'rock') {
            //scissors  paper
            userwin = compchoice === 'paper' ? false : true;
        }
        else if (userchoice == "paper") {
            //rock scissors
            userwin = compchoice === 'scissors' ? false : true;
        }
        else {
            //rock paper
            userwin = compchoice === 'rock' ? false : true;
        }
        showWinner(userwin,userchoice,compchoice);
    }

}


choices.forEach((ch) => {
    ch.addEventListener("click", () => {
        const userchoice = ch.getAttribute("id");
        console.log("Button Was Clicked");
        playGame(userchoice);
    }
    )
})

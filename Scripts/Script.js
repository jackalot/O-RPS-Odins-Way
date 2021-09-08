let computerPlay = () => {
    let compChoice = Math.floor(Math.random() * 3);
    console.log(compChoice);
    switch(compChoice)
    {
        case 0:
        return "rock";
        case 1:
        return "paper";
        case 2:
        return "scissors";
        default:
        console.log("something happened with the comp choice");
        break;
    }
}
    let playerWins = 0;
    let computerWins = 0;
    function game (playerSelection) {
        const computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if(result === "You win! (You) " + playerSelection + " beats " + computerSelection + " (Computer)!")
        {
            playerWins += 1;
        }
        else if(result === "You lose! (Computer) " + computerSelection + " beats " + playerSelection + " (You)!")
        {
            computerWins += 1;
        }
        const winnerContainer = document.querySelector("#Winner");
        const Paragraph = winnerContainer.firstChild;
        Paragraph.textContent = result + " Player Wins: " + playerWins + " Computer Wins: " + computerWins;
        winnerContainer.append(Paragraph);
        console.log(result + " Player Wins: " + playerWins + " Computer Wins: " + computerWins);
    }
    function playRound (playerSelection, computerSelection) 
    {
        if (playerSelection === "rock" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "scissors")
        {
            return "There was a tie!";
        }
        else if(playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock")
        {
            return "You lose! (Computer) " + computerSelection + " beats " + playerSelection + " (You)!"
        }
        else
        {
            return "You win! (You) " + playerSelection + " beats " + computerSelection + " (Computer)!";
        }

    }
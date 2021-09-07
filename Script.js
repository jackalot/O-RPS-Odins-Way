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
for(i = 0; i < 5; i++)
{
game();
}
    function game () {
        const playerSelection = window.prompt("Choose Rock, Paper or Scissors");
        const computerSelection = computerPlay();
        let playerWins = 0;
        let computerWins = 0;
        let result = playRound(playerSelection, computerSelection);
        if(result === "You win! (You) " + lowerPS + " beats " + computerSelection + " (Computer)!")
        {
            playerWins += 1;
        }
        else if(result === "You lose! (Computer) " + computerSelection + " beats " + lowerPS + " (You)!")
        {
            computerWins += 1;
        }
    }
    function playRound (playerSelection, computerSelection) {
    let lowerPS = playerSelection.toLowerCase(); 
    if (lowerPS === "rock" && computerSelection === "rock" || lowerPS === "paper" && computerSelection === "paper" || lowerPS === "scissors" && computerSelection === "scissors")
    {
        return "There was a tie!";
    }
    else if(lowerPS === "rock" && computerSelection === "paper" || lowerPS === "paper" && computerSelection === "scissors" || lowerPS === "scissors" && computerSelection === "rock")
    {
        return "You lose! (Computer) " + computerSelection + " beats " + lowerPS + " (You)!"
    }
    else
    {
        return "You win! (You) " + lowerPS + " beats " + computerSelection + " (Computer)!";
    }

    }
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
    function game () {
        const playerSelection = window.prompt("Choose Rock, Paper or Scissors");
        let lowerPS = playerSelection.toLowerCase(); 
        const computerSelection = computerPlay();
        let result = playRound(lowerPS, computerSelection);
        if(result === "You win! (You) " + lowerPS + " beats " + computerSelection + " (Computer)!")
        {
            playerWins += 1;
        }
        else if(result === "You lose! (Computer) " + computerSelection + " beats " + lowerPS + " (You)!")
        {
            computerWins += 1;
        }
        console.log(result + " Player Wins: " + playerWins + " Computer Wins: " + computerWins);
    }
    function playRound (lowerPS, computerSelection) {
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
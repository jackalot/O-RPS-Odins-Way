function computerPlay () {
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
console.log(playRound("scissors", "rock"));
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
        return "You win! (You) " + LowerPS + " beats " + computerSelection + " (Computer)!";
    }

}
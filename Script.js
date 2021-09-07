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
function playRound (playerSelection, computerSelection) {
    let LowerPS = playerSelection.toLowerCase(); 
    if (LowerPS === "rock" && computerSelection === "rock" || LowerPS === "paper" && computerSelection === "paper" || LowerPS === "scissors" && computerSelection === "scissors")
    {
        console.log("There was a tie!");
    }
    
}
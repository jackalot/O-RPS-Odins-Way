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
    if (LowerPS === "Rock" && computerSelection === "Rock" || LowerPS === "Paper" && computerSelection === "Paper" || LowerPS === "Scissors" && computerSelection === "Scissors")
    {
        console.log("There was a tie!");
    }
}
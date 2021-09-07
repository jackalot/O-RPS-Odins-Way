computerPlay();
function computerPlay () {
let compChoice = Math.floor(Math.random() * 3);
console.log(compChoice);
switch(compChoice)
{
    case 0:
    return "rock";
    case 1:
    return "paper";
    return
    case 2:
    return "scissors";
    default:
    console.log("something happened with the comp choice");
    break;
}
}
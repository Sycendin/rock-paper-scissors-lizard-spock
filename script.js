// import { startConfetti, removeConfetti, stopConfetti } from "./confetti.js"
const playerScoreEl = document.querySelector('#player-score')
const playerChoiceEl = document.querySelector('#player-choice')

const computerScoreEl = document.querySelector('#computer-score')
const computerChoiceEl = document.querySelector('#computer-choice')

const resultText =document.querySelector('#resultText')

const playerRock = document.querySelector('#playerRock')
const playerPaper = document.querySelector('#playerPaper')
const playerScissors = document.querySelector('#playerScissors')
const playerLizard = document.querySelector('#playerLizard')
const playerSpock = document.querySelector('#playerSpock')

const computerRock = document.querySelector('#computerRock')
const computerPaper = document.querySelector('#computerPaper')
const computerScissors = document.querySelector('#computerScissors')
const computerLizard = document.querySelector('#computerLizard')
const computerSpock = document.querySelector('#computerSpock')

const allGameIcons = document.querySelectorAll('.far')

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let computerChoice = '';
let playerScoreNumber = 0;
let computerScoreNumber = 0;
//Reset all selected icons
const resetSelected = () =>{
  allGameIcons.forEach((icon)=>{
    icon.classList.remove('selected');
  });
}
// Reset score and playerchoice and computer choice
const resetAll = () =>{
  stopConfetti()
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  playerChoice = "";
  computerChoice = "";
  resultText.textContent = "";
  resetSelected();
}
//Random choice from computer
const computerRandomChoice = () =>{
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.2){
    computerChoice = 'rock'
  }
  else if( computerChoiceNumber <= 0.4){
    computerChoice = 'paper'
  }
  else if( computerChoiceNumber <= 0.6){
    computerChoice = 'scissors'
  }
  else if( computerChoiceNumber <= 0.8){
    computerChoice = 'lizard'
  }
  else{ 
    computerChoice = 'spock'
  }
}

const displayComputerChoice= () =>{

  // Change styling and playerChoice
  switch(computerChoice){
    case 'rock':
        computerRock.classList.add('selected');
        computerChoiceEl.textContent = '---Rock';
        break;
    case 'paper':
        computerPaper.classList.add('selected');
        computerChoiceEl.textContent = '---Paper';
        break;
    case 'scissors':
        computerScissors.classList.add('selected');
        computerChoiceEl.textContent = '---Scissors';
        break;   
    case 'lizard':
        computerLizard.classList.add('selected');
        computerChoiceEl.textContent = '---Lizard';
        break;
    case 'spock':
        computerSpock.classList.add('selected');
        computerChoiceEl.textContent = '---Spock';
        break;
    default:
        break;
  }
}
// Update score and result text
const updateScore = (playerChoice) =>{
  removeConfetti()
  if (playerChoice === computerChoice){
    resultText.textContent = "It's a tie.";
  }
  else{
    const choice = choices[playerChoice]
    if (choice.defeats.indexOf(computerChoice) > -1){
      resultText.textContent = "You Won!"
      playerScoreNumber ++;
      playerScoreEl.textContent = playerScoreNumber
      startConfetti();
    }
    else{
      resultText.textContent = "You Lose..."
      computerScoreNumber ++;
      computerScoreEl.textContent = computerScoreNumber
    }
  }

}
// call functions to process turn
const checkResult= (playerChoice) =>{
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice)
}
// Passing player selection
const select= (playerChoice) =>{
  checkResult(playerChoice);
  // Change styling and playerChoice
  switch(playerChoice){
    case 'rock':
        playerRock.classList.add('selected');
        playerChoiceEl.textContent = '---Rock';
        break;
    case 'paper':
        playerPaper.classList.add('selected');
        playerChoiceEl.textContent = '---Paper';
        break;
    case 'scissors':
        playerScissors.classList.add('selected');
        playerChoiceEl.textContent = '---Scissors';
        break;   
    case 'lizard':
        playerLizard.classList.add('selected');
        playerChoiceEl.textContent = '---Lizard';
        break;
    case 'spock':
        playerSpock.classList.add('selected');
        playerChoiceEl.textContent = '---Spock';
        break;
    default:
        break;
  }
}
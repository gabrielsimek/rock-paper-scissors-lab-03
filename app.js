// import functions and grab DOM elements
import { getComputerChoice } from './utils.js';
const playButton = document.getElementById('play-button');
const resultEl = document.getElementById('result');
const computerChoiceEl = document.getElementById('computer-choice');
const totalGamesEl = document.getElementById('total-games');
const totalWinsEl = document.getElementById('total-wins');
const totalDrawsEl = document.getElementById('total-draws');
const totalLossesEl = document.getElementById('total-losses');



// initialize state
let totalGames = 0;
let totalWins = 0;
let totalDraws = 0;



// set event listeners to update state and DOM

playButton.addEventListener('click', () => {
    totalGames++;

    let randomNum = Math.floor(Math.random() * 3);

    let computerChoice = getComputerChoice(randomNum);

    const currentlySelectedButton = document.querySelector('input:checked');

    let userChoice = currentlySelectedButton.value;

    console.log(userChoice, computerChoice);
    function declareWinner(userChoice, computerChoice) {

        if (userChoice === computerChoice) {
            totalDraws++;
            resultEl.textContent = 'Tie';
        } else if (userChoice === 'rock') {
            if (computerChoice === 'paper') {
                resultEl.textContent = 'You lose!';
            } else {
                totalWins++;
                resultEl.textContent = 'You win!';
            }
        } else if (userChoice === 'paper') {
            if (computerChoice === 'scissors') {
                resultEl.textContent = 'You lose!';
            } else {
                totalWins++;
                resultEl.textContent = 'You win!';
            }
        } else if (userChoice === 'scissors') {
            if (computerChoice === 'rock') {
                resultEl.textContent = 'You lose!';
            } else {
                totalWins++;
                resultEl.textContent = 'You win!';
            }
        }
    }



    declareWinner(userChoice, computerChoice);





    totalDrawsEl.textContent = totalDraws;
    totalWinsEl.textContent = totalWins;
    totalGamesEl.textContent = totalGames;
    computerChoiceEl.textContent = computerChoice;
    totalLossesEl.textContent = totalGames - totalDraws - totalWins;


});
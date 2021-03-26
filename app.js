// import functions and grab DOM elements
import { getComputerChoice, declareWinner } from './utils.js';
const playButton = document.getElementById('play-button');
const resultEl = document.getElementById('result');
const computerChoiceEl = document.getElementById('computer-choice');
const totalGamesEl = document.getElementById('total-games');
const totalWinsEl = document.getElementById('total-wins');
const totalDrawsEl = document.getElementById('total-draws');
const totalLossesEl = document.getElementById('total-losses');
const resetButton = document.querySelector('#reset-button');
const hidden = document.querySelector('.hidden')
console.log(hidden);

// initialize state
let totalGames = 0;
let totalWins = 0;
let totalDraws = 0;



// set event listeners to update state and DOM

playButton.addEventListener('click', () => {
    totalGames++;
    hidden.classList.remove('hidden')

    let randomNum = Math.floor(Math.random() * 3);
    // console.log(randomNum);

    let computerChoice = getComputerChoice(randomNum);

    const currentlySelectedButton = document.querySelector('input:checked');

    let userChoice = currentlySelectedButton.value;

    console.log(userChoice, computerChoice);

    const winner = declareWinner(userChoice, computerChoice);

    if (winner === 'You Win!') {
        totalWins++;
        resultEl.textContent = winner;
    } else if (winner === 'Draw') {
        totalDraws++;
        resultEl.textContent = winner;
    } else {
        resultEl.textContent = winner;
    }




    totalDrawsEl.textContent = totalDraws;
    totalWinsEl.textContent = totalWins;
    totalGamesEl.textContent = totalGames;
    computerChoiceEl.textContent = computerChoice;
    totalLossesEl.textContent = totalGames - totalDraws - totalWins;


});

resetButton.addEventListener('click', () => {
    totalGames = 0;
    totalWins = 0;
    totalDraws = 0;

    totalDrawsEl.textContent = totalDraws;
    totalWinsEl.textContent = totalWins;
    totalGamesEl.textContent = totalGames;
    computerChoiceEl.textContent = '';
    totalLossesEl.textContent = 0;

    hidden.classList.add('hidden')
});
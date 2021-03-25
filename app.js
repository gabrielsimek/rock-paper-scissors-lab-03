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
    console.log(getComputerChoice(randomNum));
    



});
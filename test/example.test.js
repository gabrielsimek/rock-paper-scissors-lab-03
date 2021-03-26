// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { declareWinner } from '../utils.js';

//import { declareWinner } from '../utils.js';
const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const draw = 'Draw';
    const win = 'You Win!';
    const lose = 'You Lose!';

    //Act 
    // Call the function you're testing and set the result to a const


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(declareWinner('rock', 'rock'), draw, 'should be a draw');
    expect.equal(declareWinner('paper', 'paper'), draw, 'should be a draw');
    expect.equal(declareWinner('scissors', 'scissors'), draw, 'should be a draw');

    expect.equal(declareWinner('rock', 'paper'), lose, 'rc - p lose');

    expect.equal(declareWinner('rock', 'scissors'), win, 'r, p win');

    expect.equal(declareWinner('paper', 'scissors'), lose, 'pap, sci lose');

    expect.equal(declareWinner('paper', 'rock'), win, 'pap, rck win');

    expect.equal(declareWinner('scissors', 'rock'), lose, 'sci, rck lose');

    expect.equal(declareWinner('scissors', 'paper'), win, 'sci, pap win');

    // expect.equal(declareWinner());
});

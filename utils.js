export function getComputerChoice(randomNum) {
    if (randomNum === 0) {
        return 'rock';
    } else if (randomNum === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }

}

export function declareWinner(userChoice, computerChoice) {

    if (userChoice === computerChoice) {
        return 'Draw';
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'You Lose!';
        } else {
            return 'You Win!';
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'You Lose!';
        } else {
            return 'You Win!';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'You Lose!';
        } else {
            return 'You Win!';
        }
    }
}


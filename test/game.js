export function score(player1, player2) {
    if (player1 === 'rock' && player2 === 'rock') 
        return 'tie';
        if (player1 === 'scissors' && player2 === 'scissors') 
        return 'tie';
        if (player1 === 'paper' && player2 === 'paper') 
        return 'tie';
    if (player1 === 'scissors' && player2 === 'rock') 
        return 'player2';

    if (player1 === 'rock' && player2 === 'paper')
        return 'player2';

    if (player1 === 'paper' && player2 === 'scissors')
        return 'player2';

    if (player1 === 'scissors' && player2 === 'rock')
        return 'player2';

    if (player1 === 'rock' && player2 === 'scissors')
        return 'player1';

    if (player1 === 'scissors' && player2 === 'paper')
        return 'player1';

    if (player1 === 'paper' && player2 === 'rock')
        return 'player1';
}

const throws = ['rock, paper, scissors'];

console.log(throws[0]);
console.log(throws[1]);
console.log(throws[2]);
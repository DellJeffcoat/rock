// IMPORT MODULES under test here:
// import { score } from '../game.js';

import { score } from "./game.js";

const test = QUnit.test;
// tie 

test('player1 rock, player2 rock is tie', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player1 = 'rock';
    const player2 = 'rock';
    const expected = 'tie';
    const actual = score(player1, player2);
    expect.equal(expected, actual);
});

test('player1 scissors, player2 scissors is tie', (expect) => {
    const player1 = 'scissors';
    const player2 = 'scissors';
    const expected = 'tie';
    const actual = score(player1, player2);
    expect.equal(expected, actual);
});

test('player1 paper, player2 paper is tie', (expect) => {
    const player1 = 'paper';
    const player2 = 'paper';
    const expected = 'tie';
    const actual = score(player1, player2);
    expect.equal(expected, actual);
});

//player2

test('player1 rock, player2 paper is player2', (expect) => {
    const player1 = 'rock';
    const player2 = 'paper';
    const expected = 'player2';
    const actual = score(player1, player2);
    expect.equal(expected, actual);
    
});

test('player1 paper, player2 scissors is player2', (expect) => {
    const player1 = 'paper';
    const player2 = 'scissors';
    const expected = 'player2';
    const actual = score(player1, player2);
    expect.equal(expected, actual);
});

test('player1 scissors, player2 rock is player2', (expect) => {
    const player1 = 'scissors';
    const player2 = 'rock';
    const expected = 'player2';
    const actual = score(player1, player2);
    expect.equal(expected, actual);
});

// player1
test('player1 paper, player2 rock is player1', (expect) => {
    const player1 = 'paper';
    const player2 = 'rock';
    const expected = 'player1';
    const actual = score(player1, player2);
    expect.equal(expected, actual);
});
test('player1 scissors, player2 paper is player1', (expect) => {
    const player1 = 'scissors';
    const player2 = 'paper';
    const expected = 'player1';
    const actual = score(player1, player2);
    expect.equal(expected, actual);
});

test('player1 rock, player2 scissors is player1', (expect) => {
    const player1 = 'rock';
    const player2 = 'scissors';
    const expected = 'player1';
    const actual = score(player1, player2);
    expect.equal(expected, actual);
    
});



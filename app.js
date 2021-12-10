import { score, generateThrow } from './test/game.js';
// Import functions
const rockButton = document.getElementById('rock');
const results = document.getElementById('results');

const scissorsButton = document.getElementById('scissors');


const paperButton = document.getElementById('paper');
const audio = document.getElementById('sound');
// Grab all elements by ID
rockButton.addEventListener('click', () =>{ 
    const computer = generateThrow();
    const player = rockButton.id;
    const newResults = score(player, computer);
    results.textContent = newResults; 
    audio.src = 'assets/rocks.wav';
    audio.play();
}); 
scissorsButton.addEventListener('click', () =>{ 
    const computer = generateThrow();
    const player = scissorsButton.id;
    const newResults = score(player, computer);
    results.textContent = newResults;
    audio.src = 'assets/scissors.wav';
    audio.play();
});
paperButton.addEventListener('click', () =>{ 
    const computer = generateThrow();
    const player = scissorsButton.id;
    const newResults = score(player, computer);
    results.textContent = newResults;
    audio.src = 'assets/paper.mp3';
    audio.play();
});
// Set eventLister to all buttons
// Display results on screen





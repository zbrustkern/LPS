// Sets up tracking for the player and the computer - should be generalized
let player = {
  choice: null,
  wins: 0,
  losses: 0,
  gameCount: 0,
  ties: 0
}
let computer = {
  choice: null,
  wins: 0,
  losses: 0,
  gameCount: 0,
  ties: 0
}

// the three options for comparison in the game
const options =["lapis","papyrus", "scalpellus"];

//an html holders for the outcomes
const results = document.createElement('p');

// returns a random integer and sets the choice for the computers choice   
function computerChooses() {
  const random = Math.floor(Math.random() * options.length);
  computer.choice = options[random]; 
}
//a function that tallies all the trackers if the player wins 
function playerWins() { document.querySelector('p.results').innerText = `Player Wins! \n Total Wins: ${player.wins}\nTotal Games: ${player.gameCount}\n`;
  player.wins += 1;
  computer.losses += 1;
  player.gameCount += 1;
  computer.gameCount +=1;
}
//a function that tallies all the trackers if the computer wins
function computerWins() { document.querySelector('p.results').innerText = `Computer Wins! \n Total Wins: ${player.wins}\nTotal Games: ${player.gameCount}\n`;
  player.losses += 1;
  computer.wins += 1;
  player.gameCount += 1;
  computer.gameCount +=1;
}
//a function that tallies all the trackers if the player ties
function playerTies() { document.querySelector('p.results').innerText = `It's a tie! \n Total Wins: ${player.wins}\nTotal Games: ${player.gameCount}\n`;
  player.ties += 1;
  computer.ties += 1;
  player.gameCount += 1;
  computer.gameCount +=1;
}

//this function assumes both playerChoice and computerChoice have been set and then calls an appropriate win/tie function based on the game logic
function compareChoices() {
if (player.choice === computer.choice) {
  playerTies();
} else if (player.choice === options[0] && computer.choice === options[1]) {
  computerWins();
} else if (player.choice === options[0] && computer.choice === options[2]) {
  playerWins();
} else if (player.choice === options[1] && computer.choice === options[0]) {
  playerWins();
} else if (player.choice === options[1] && computer.choice === options[2]) {
   computerWins();
} else if (player.choice === options[2] && computer.choice === options[0]) {
  computerWins();
} else if (player.choice === options[2] && computer.choice === options[1]) {
  playerWins();
}

//this function sets player's choice basd on the input and then runs the computer choose funciton and finally calls the comparison/ game logic function
}
function playTest(test) {
  player.choice = test;
  computerChooses();
  compareChoices();
}

//add eventlisteners to receive a user click on the button and pass the correct value into the game
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('Lapis').addEventListener('click', playTest.bind(null,options[0]));
  document.getElementById('Papyrus').addEventListener('click', playTest.bind(null,options[1]));
  document.getElementById('Scalpellus').addEventListener('click', playTest.bind(null,options[2]));
});

// LISNER on ALL BUTTONS
//  we "dowload" a button with the word "new game"
var newGameBtn = document.getElementById('js-newGameButton');

//what it's happaning when you click the button (New Game)
newGameBtn.addEventListener('click', newGame);

// we "dowload" a buttons with the words "paper"/"stone"/"scisors"
var pickRock = document.getElementById('js-playerPick_rock'),
     pickPaper = document.getElementById('js-playerPick_paper'),
     pickScissors = document.getElementById('js-playerPick_scissors');

// what it's happening when you click the buttons: "rock"/"paper"/"scisors"
// when you click the button, calling function playerPick
pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });

// initial values
// object player [ with game status]
var gameState = 'notStarted',  //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

// containers:js-newGameElement(button:new game),
var newGameElem = document.getElementById('js-newGameElement'),
// js-playerPickElement(buttons paper/stone/scissors),
    pickElem = document.getElementById('js-playerPickElement'),
//  js-resultsTableElement(table)
    resultsElem = document.getElementById('js-resultsTableElement');

// what we see when we first started/started the next time/we finished
function setGameElements() {
  switch(gameState) {
    // when we started the next time
    case 'started':
      // we see table and buttons: paper/scisorrs/stone
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
      break;

      // when we finished game
    case 'ended':
      // we see only button - again?
        newGameBtn.innerText = 'again?';
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
      break;

    // when we first time started
    case 'notStarted':
      // we see only button - new game
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
      break;

    // this code is not needed now
    default:
        // console.log("Nie udalo się znalezc opdowiedniego case'a")
  }
}
// calling this function [at the end of the code]
// setGameElements();

// variable like:
    // score player
var playerPointsElem = document.getElementById('js-playerPoints'),
    // name player
    playerNameElem = document.getElementById('js-playerName'),
    // score computer
    computerPointsElem = document.getElementById('js-computerPoints');

// function when you clik the button: new game/ again?
function newGame() {
  // write your name
  player.name = prompt('Please enter your name', 'imię gracza');
  // if you write your name
  if (player.name) {
    // score player and computer are 0
    player.score = computer.score = 0;
    // status game is Started and we calling function setGameElements()(show us buttons and table)
    gameState = 'started';
    setGameElements();

    // write name player in table
    playerNameElem.innerHTML = player.name;
    setGamePoints();
  }
}

// function - choice computer
function getComputerPick() {
    // computer capabilities
    var possiblePicks = ['rock', 'paper', 'scissors'];
    // draw: rock[0]/paper[1]/scisors[2]
    // math.floor-->rounds floating-point numbers down to an integer
    return possiblePicks[Math.floor(Math.random()*3)];
}

// data in the table:
  // choice player --> in the table
var playerPickElem = document.getElementById('js-playerPick'),
  // choice computer --> in the table
    computerPickElem = document.getElementById('js-computerPick'),
    // write in table (you win/you lost/remis) for player
    playerResultElem = document.getElementById('js-playerResult'),
    // write in table (you win/you lost/remis) for computer
    computerResultElem = document.getElementById('js-computerResult'),
    // write in table score for player
    playerPoints = document.getElementById('js-playerPoints'),
    // write in table score for computer
    computerPoints = document.getElementById('js-computerPoints');

// function - choice player
function playerPick(playerPick) {
  // function - choice compueter(papaer/stone/scisors) assigned to a variable: computerPick
    var computerPick = getComputerPick();

    // in the table -write player choice
    playerPickElem.innerHTML = playerPick;
    // in the table -write computer choice
    computerPickElem.innerHTML = computerPick;
    // choice computer and choice player use in function checkRoundWinner(
    checkRoundWinner(playerPick, computerPick);
}

// function checkRoundWinner(playerPick, computerPick) {
//   playerResultElem.innerHTML = computerResultElem.innerHTML = '';
//
//   var winnerIs = 'player';
//
//     if (playerPick == computerPick) {
//         winnerIs = 'noone'; // remis
//     } else if (
//         (computerPick == 'rock' &&  playerPick == 'scissors') ||
//         (computerPick == 'scissors' &&  playerPick == 'paper') ||
//         (computerPick == 'paper' &&  playerPick == 'rock')) {
//
//         winnerIs = 'computer';
//     }
//
//     if (winnerIs == 'player') {
//         playerResultElem.innerHTML = "Win!";
//         player.score++;
//     } else if (winnerIs == 'computer') {
//         computerResultElem.innerHTML = "Win!";
//         computer.score++;
//     }
//
// }

// logic game
function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = 'Remis';

  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
        console.log('winner is  ' + winnerIs);
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {

        winnerIs = 'computer';
        console.log('winner is ' + winnerIs);
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "You win!";
        computerResultElem.innerHTML = "You lost!"
        player.score++;
        playerPoints.innerHTML = player.score;

        console.log("winner is " + winnerIs)

    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = " You win!";
        playerResultElem.innerHTML = "You lost!"
        computer.score++;
        computerPoints.innerHTML = computer.score;
    }
    // update score
    setGamePoints();
    // the end of the game when score = 10
    endGame();
}

// every time when we click the button with paper/scissors/stone function
function playerPick(playerPick) {
    // choice computer
    var computerPick = getComputerPick();

    // stored in the table -> player selection (one of the buttons)
    playerPickElem.innerHTML = playerPick;
    // stored in the table -> computer selection (function random)
    computerPickElem.innerHTML = computerPick;
    // calling function logic game (who won)
    checkRoundWinner(playerPick, computerPick);
}

// update score player and computer
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

function endGame() {
    if (computer.score == 10) {
        alert('YOU LOST! GAME OVER');
      // status game (we show only button)
        gameState = 'ended';
        // call a function that shows us new game / again? / button and table
        setGameElements();
    } else if (player.score == 10) {
        alert('YOU WIN! GAME OVER');
      // status game (we show only button)
        gameState = 'ended';
        // call a function that shows us new game / again? / button and table
        setGameElements();
    }
}

//  what we see when we first started/started the next time/we finished
setGameElements();

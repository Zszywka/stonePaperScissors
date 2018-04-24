var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'),
     pickPaper = document.getElementById('js-playerPick_paper'),
     pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });

var gameState = 'notStarted',  //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');

function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
      break;
    case 'ended':
        newGameBtn.innerText = 'Jeszcze raz';
    case 'notStarted':
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
  }
}

setGameElements();

var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

function newGame() {
  player.name = prompt('Please enter your name', 'imię gracza');
  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();

    playerNameElem.innerHTML = player.name;
    setGamePoints(); // This function has not been created yet
  }
}

function playerPick(playerPick) {
    console.log(playerPick);
}

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

// your choice (paper or scisors or stone)
var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),

    // you points or computer points
    playerPoints = document.getElementById('js-playerPoints'),
    computerPoints = document.getElementById('js-computerPoints'),

// answer like remis or you lost or you win
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult'),

// function playerPick(playerPick) {
//     var computerPick = getComputerPick();
//
//     playerPickElem.innerHTML = playerPick;
//     computerPickElem.innerHTML = computerPick;
//
//     checkRoundWinner(playerPick, computerPick);
// }


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

}

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

function endGame() {

  if (player.score == 10) {
    playerResultElem.innerHTML = "You win all gameplay! GAME OVER";
    computerResultElem.innerHTML = "You lost all gameplay! GAME OVER"
    break;
  }
  else if (computer.score == 10) {
    computerResultElem.innerHTML = "You win all gameplay! GAME OVER";
    playerResultElem.innerHTML = "You lost all gameplay! GAME OVER"
    break;
  }
}

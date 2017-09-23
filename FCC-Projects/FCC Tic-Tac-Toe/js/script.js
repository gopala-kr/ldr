//variables
var currentCell;
var currentCellIndex;
var compMove = 0;
var score = 0;
var compMoveComplete = true;
var chooseModal = document.getElementById('chooseModal');
var winModal = document.getElementById('winModal');
var xButton = document.getElementsByClassName("x")[0];
var oButton = document.getElementsByClassName("o")[0];
var playAs;
var playerWins = 0;
var computerWins = 0;
var playerWinSpan = document.getElementsByClassName("youWon")[0];
var computerWinSpan = document.getElementsByClassName("compWon")[0];

/* Initial game state */
//Create grid of 9 squares
var grid = [
  {x1:0, y1:0, x2:98, y2:98, filled:false, value: 0},
  {x1:102, y1:0, x2:198, y2:98, filled:false, value: 0},
  {x1:202, y1:0, x2:300, y2:98, filled:false, value: 0},
  {x1:0, y1:102, x2:98, y2:198, filled:false, value: 0},
  {x1:102, y1:102, x2:198, y2:198, filled:false, value: 0},
  {x1:202, y1:102, x2:300, y2:198, filled:false, value: 0},
  {x1:0, y1:202, x2:98, y2:300, filled:false, value: 0},
  {x1:102, y1:202, x2:198, y2:300, filled:false, value: 0},
  {x1:202, y1:202, x2:300, y2:300, filled:false, value: 0}
];

//define rows and columns
var row1 = [grid[0], grid[1], grid[2]];
var row2 = [grid[3], grid[4], grid[5]];
var row3 = [grid[6], grid[7], grid[8]];
var diagonalRtL = [grid[2], grid[4], grid[6]];
var diagonalLtR = [grid[0], grid[4], grid[8]];
var col1 = [grid[0], grid[3], grid[6]];
var col2 = [grid[1], grid[4], grid[7]];
var col3 = [grid[2], grid[5], grid[8]];

// Row/Column/Diagonal values
var row1Val = grid[0].value + grid[1].value + grid[2].value;
var row2Val = grid[3].value + grid[4].value + grid[5].value;
var row3Val = grid[6].value + grid[7].value + grid[8].value;
var diagonalRtLVal = grid[2].value + grid[4].value + grid[6].value;
var diagonalLtRVal = grid[0].value + grid[4].value + grid[8].value;
var col1Val = grid[0].value + grid[3].value + grid[6].value;
var col2Val = grid[1].value + grid[4].value + grid[7].value;
var col3Val = grid[2].value + grid[5].value + grid[8].value;

//Draw the grid
var canvas = document.getElementById("board");
var canvasLeft = canvas.offsetLeft;
var canvasTop = canvas.offsetTop;
var ctx = canvas.getContext("2d");
ctx.moveTo(100,0);
ctx.lineTo(100,300);
ctx.stroke();
ctx.moveTo(200,0);
ctx.lineTo(200,300);
ctx.stroke();
ctx.moveTo(0,100);
ctx.lineTo(300,100);
ctx.stroke();
ctx.moveTo(0,200);
ctx.lineTo(300,200);
ctx.stroke();

/* Functions */

//Choose who goes first
function goFirst() {
  var flip = Math.floor(Math.random() * 2);
  if (flip === 1) {
    whoseTurn("Computer's Turn");
    return "computer";
  } else {
    whoseTurn("Your Turn");
    return "player";
  }
}

//redraw canvas for new game
function drawCanvas() {
  canvas = document.getElementById("board");
  canvasLeft = canvas.offsetLeft;
  canvasTop = canvas.offsetTop;
  ctx = canvas.getContext("2d");
  ctx.moveTo(100,0);
  ctx.lineTo(100,300);
  ctx.stroke();
  ctx.moveTo(200,0);
  ctx.lineTo(200,300);
  ctx.stroke();
  ctx.moveTo(0,100);
  ctx.lineTo(300,100);
  ctx.stroke();
  ctx.moveTo(0,200);
  ctx.lineTo(300,200);
  ctx.stroke();
}

//redefine game variables on restart
function gameState(){
  grid.forEach(function(cell){
    cell.filled = false;
    cell.value = 0;
  });

  //define rows and columns
  row1 = [grid[0], grid[1], grid[2]];
  row2 = [grid[3], grid[4], grid[5]];
  row3 = [grid[6], grid[7], grid[8]];
  diagonalRtL = [grid[2], grid[4], grid[6]];
  diagonalLtR = [grid[0], grid[4], grid[8]];
  col1 = [grid[0], grid[3], grid[6]];
  col2 = [grid[1], grid[4], grid[7]];
  col3 = [grid[2], grid[5], grid[8]];

  // Row/Column/Diagonal values
  row1Val = grid[0].value + grid[1].value + grid[2].value;
  row2Val = grid[3].value + grid[4].value + grid[5].value;
  row3Val = grid[6].value + grid[7].value + grid[8].value;
  diagonalRtLVal = grid[2].value + grid[4].value + grid[6].value;
  diagonalLtRVal = grid[0].value + grid[4].value + grid[8].value;
  col1Val = grid[0].value + grid[3].value + grid[6].value;
  col2Val = grid[1].value + grid[4].value + grid[7].value;
  col3Val = grid[2].value + grid[5].value + grid[8].value;

  currentCell = null;
  currentCellIndex = null;
  compMove = 0;
  score = 0;
  playAs = null;
  playerWins = 0;
  computerWins = 0;
  compMoveComplete = true;
  starter = goFirst();
  if (starter === "computer") {
    whoseTurn("Computer's Turn");
    compMoveComplete = false;
    setTimeout(computerMove, 2000);
  }
  //console.log(compMoveComplete);
}

oButton.onclick = function() {
    chooseModal.style.display = "none";
    playAs = "o";
    var starter = goFirst();
    //If computer is starter, let it go
    if (starter === "computer") {
      whoseTurn("Computer's Turn");
      compMoveComplete = false;
      setTimeout(computerMove, 2000);
    }
};

xButton.onclick = function() {
    chooseModal.style.display = "none";
    playAs = "x";
    var starter = goFirst();
    //If computer is starter, let it go
    if (starter === "computer") {
      whoseTurn("Computer's Turn");
      compMoveComplete = false;
      setTimeout(computerMove, 2000);
    }
};

function drawO(cell) {
  var centerX = (cell.x2 + cell.x1) / 2;
  var centerY = (cell.y2 + cell.y1) / 2;
  ctx.beginPath();
  ctx.arc(centerX,centerY,40,0,2*Math.PI);
  ctx.stroke();
  cell.filled = true;
}

function drawX(cell) {
  //draw an x
  ctx.moveTo(cell.x1,cell.y1);
  ctx.lineTo(cell.x2,cell.y2);
  ctx.stroke();
  ctx.moveTo(cell.x2,cell.y1);
  ctx.lineTo(cell.x1,cell.y2);
  ctx.stroke();
  cell.filled = true;
}

function whoseTurn(newPlayer){
  var playerTurn = "<p>";
  playerTurn += newPlayer;
  playerTurn += "</p>";
  document.getElementById("player").innerHTML = playerTurn;
}

function randomCell() {
  var randoCell = [];
  for (var i = 0; i < grid.length; i++){
    if (!grid[i].filled) {
      randoCell.push(grid[i]);
    }
  }
  return randoCell[Math.floor(Math.random()*randoCell.length)];
}

function getScores() {
  //Calculate values
  row1Val = grid[0].value + grid[1].value + grid[2].value;
  row2Val = grid[3].value + grid[4].value + grid[5].value;
  row3Val = grid[6].value + grid[7].value + grid[8].value;
  diagonalRtLVal = grid[2].value + grid[4].value + grid[6].value;
  diagonalLtRVal = grid[0].value + grid[4].value + grid[8].value;
  col1Val = grid[0].value + grid[3].value + grid[6].value;
  col2Val = grid[1].value + grid[4].value + grid[7].value;
  col3Val = grid[2].value + grid[5].value + grid[8].value;
}

//Check for win/lose conditions
function checkBoard() {
  getScores();
  if(row1Val === 3 ||
     row2Val === 3 ||
     row3Val === 3 ||
     col1Val === 3 ||
     col2Val === 3 ||
     col3Val === 3 ||
     diagonalRtLVal === 3 ||
     diagonalLtRVal === 3) {
    score = 3;
    endGame(score);
    return true;
  } else if (row1Val === -3 ||
     row2Val === -3 ||
     row3Val === -3 ||
     col1Val === -3 ||
     col2Val === -3 ||
     col3Val === -3 ||
     diagonalRtLVal === -3 ||
     diagonalLtRVal === -3) {
    //lose
    score = -3;
    endGame(score);
    return true;
  } else {
    //draw
    var draw = grid.every(function(cell){
      return cell.filled === true;
    });
    if (draw){
      score = 0;
      endGame(score);
      return true;
    }
    //console.log(draw);
  }
}

function endGame(gameScore) {
  var message = "<p>";
  //console.log(gameScore);
  if (gameScore === -3) {
    message += "You lose!";
    computerWins++;
    computerWinSpan.innerHTML = "Computer: " + computerWins;
  } else if (gameScore === 3) {
    message += "You win!";
    playerWins++;
    playerWinSpan.innerHTML = "You: " + playerWins;
  } else {
    message += "It's a draw!";
  }
  message += "</p>";
  winModal.style.display = "block";
  document.getElementById("winModal").getElementsByClassName("modal-content")[0].innerHTML = message;
  setTimeout(gameRestart, 1500);
}

function gameRestart() {
  winModal.style.display = "none";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  drawCanvas();
  gameState();
}

//Allow user to click in square and show their character
canvas.addEventListener('click', function(clickEvent) {
  //console.log(compMoveComplete);
  if (compMoveComplete) {
    //clickEvent.x will change based on screensize
    //find offset x and y of clickEvent
      var x = clickEvent.pageX - canvasLeft,
          y = clickEvent.pageY - canvasTop;
    grid.forEach(function(cell) {
      //find the cell in which the event occured
      if (!cell.filled) {
        if(cell.x1 <= x && x<= cell.x2 && cell.y1 <= y && y <= cell.y2) {
          if (playAs === "x"){
            drawX(cell);
          } else {
            drawO(cell);
          }

          cell.value = 1;
          //console.log(checkBoard());
          if (checkBoard()){
            return;
          } else {
            whoseTurn("Computer's Turn");
            //console.log("computer move 2");
            setTimeout(computerMove, 2000);
          }
        }
      }
    });
  }
  compMoveComplete = false;
}, false);

//Have computer fill in a move
function computerMove() {
  //make intelligent moves
  var compCell;
  compMove++;
  compMoveComplete = false;
  //console.log(compMoveComplete);
  whoseTurn("Computer's Turn");
  //console.log(compMove);
  if(compMove === 1) {
    //both strategies
    //if the center is empty, take it
    if(!grid[4].filled) {
      compCell = grid[4];
    } else {
      //going second
      //take a corner
      if (grid[4].filled) {
        if (!grid[0].filled) {
          compCell = grid[0];
        } else if (!grid[2].filled) {
          compCell = grid[2];
        } else if (!grid[6].filled) {
          compCell = grid[6];
        } else if (!grid[8].filled) {
          compCell = grid[8];
        }
      }
    }
  }

  if (compMove >= 2) {
    //console.log("Moving");
    //check if two in a row anywhere
    if (Math.abs(row1Val) === 2) {
      row1.forEach(function(cell) {
        if (!cell.filled) {
          compCell = cell;
        }
      });
    } else if (Math.abs(row2Val) === 2) {
      row2.forEach(function(cell) {
        if (!cell.filled) {
          compCell = cell;
        }
      });
    } else if (Math.abs(row3Val) === 2) {
      row3.forEach(function(cell) {
        if (!cell.filled) {
          compCell = cell;
        }
      });
    } else if (Math.abs(diagonalRtLVal) === 2) {
      diagonalRtL.forEach(function(cell) {
        if (!cell.filled) {
          compCell = cell;
        }
      });
    } else if (Math.abs(diagonalLtRVal) === 2) {
      diagonalLtR.forEach(function(cell) {
        if (!cell.filled) {
          compCell = cell;
        }
      });
    } else if (Math.abs(col1Val) === 2) {
      col1.forEach(function(cell) {
        if (!cell.filled) {
          compCell = cell;
        }
      });
    } else if (Math.abs(col2Val) === 2) {
      col2.forEach(function(cell) {
        if (!cell.filled) {
          compCell = cell;
        }
      });
    } else if (Math.abs(col3Val) === 2) {
      col3.forEach(function(cell) {
        if (!cell.filled) {
          compCell = cell;
        }
      });
    } else {
      if (!grid[0].filled) {
        compCell = grid[0];
      } else if (!grid[2].filled) {
        compCell = grid[2];
      } else if (!grid[6].filled) {
        compCell = grid[6];
      } else if (!grid[8].filled) {
        compCell = grid[8];
      } else {
        compCell = randomCell();
      }
    }
  }

  if (!compCell.filled) {
    //console.log("computer move");
    //draw an x or o
    if (playAs === "x"){
      drawO(compCell);
    } else {
      drawX(compCell);
    }

    compCell.value = -1;
    checkBoard();
  }
  compMoveComplete = true;
  //console.log(compMoveComplete);
  whoseTurn("Your Turn");
}

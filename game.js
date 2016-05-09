$(function() {
  // get all my elemements from the DOM

  // using this to incriment between player one and player two
  var currentPlayer = playerOne;


  // add a click event to a button to start the game
  $(button).click(start);
})


function start(){
  // start the game

  gameOver();
}

function gameOver() {
  // evaluate score

  currentPlayer = playerTwo;
  if currentPlayer === playerTwo;
  start()
}


function getWinner() {
  // show trophy depending 

}

function reset() {
  // reset the game
}
$(function() {

  audio3.src = "sounds/song.mp3";
  audio3.play();
  var gameCounter = 1;
  var isPlayer1Turn = true;
  var P1result = 0;
  var P2result = 0;
  var level = 0;
  var speedincrementer = 0;
  var audio = document.getElementById("audio");
  var gameRunning = false;

  var $timer = $('#timer');
  var $box = $('.testbox');
  var counter;

  $.each($box, function(index, element) {
        $(element).hide();
      });

  var $startGame = $("#startGame");
  var backgroundInterval = setInterval(function(){
      $startGame.toggleClass("backgroundRed");
   },500)


  $('#startGame').click(startGame);
 
//-------------------------------------------------------------------------
  function startTimer() {
    $startGame.toggleClass("backgroundClear");
    var count = 1300;
    counter = setInterval(timer, 10); //10 will  run it every 100th of a second
    $('.testbox').show();
    function timer(){ 
      if (count <= 0) { 
        stopTimer();
        roundLose();
        audio2.src = "sounds/error.mp3";
        audio2.play();
        return;
      }
      count--;
      document.getElementById("timer").innerHTML="<h1>Time: </h1>" + count /100; 
    }
  }
//-------------------------------------------------------------------------
  function checkClick() {

      if(gameRunning) {
           var counter = allNumbersSorted.length;
           number = $(this).data("number");
           if (number == allNumbersSorted[0]) {
             $(this).remove();
             allNumbersSorted.shift();
              audio.src = "sounds/bomb.mp3";
              audio.play();
                if (counter < 2){
                  roundWin();
                  stopTimer();
                  audio.src = "sounds/cheer.mp3";
                  audio.play();
                }
            }
      }
  }
 
//-------------------------------------------------------------------------

  function stopTimer() {
    clearInterval(counter); 
  }
//-------------------------------------------------------------------------

  function setupLevel() {
    
    allNumbersSorted = makenewarray();
    console.log(allNumbersSorted);
    
    $(allNumbersSorted).each(function(index, element){
        var newBox = $('<div></div>');
        newBox.addClass("testbox a");
        newBox.html("<p>"+ element + "</p>");
        newBox.data("number", element);
        newBox.on("click", checkClick);
        $("#mainArea").append(newBox);
    });
} 

//-------------------------------------------------------------------------


  function roundLose() {

    $('#trophy').css('background-image','url(http://i.imgur.com/sT6Lj8k.gif)','no-repeat', 'scroll', '0% 0%', 'transparent');

      gameRunning = false;

      if (isPlayer1Turn) {
        P1result = P1result; 
        document.getElementById("player1score").innerHTML=P1result;
        speedincrementer = speedincrementer + 0.01
      } else {
        P2result = P2result;
        document.getElementById("player2score").innerHTML=P2result; 
        speedincrementer = speedincrementer + 0.01
      }

      if (gameCounter % 2 === 0) {
        isPlayer1Turn = false;
      } else {
        isPlayer1Turn = true;
      }

      isGameOver()
   
  }
  //-------------------------------------------------------------------------

  function roundWin() {

    $('#trophy').css('background-image','url(http://i.imgur.com/d0E2Dgt.gif)','no-repeat', 'scroll', '0% 0%', 'transparent');
    
    gameRunning = false;
    
    if (isPlayer1Turn) {
      P1result++;
      document.getElementById("player1score").innerHTML=P1result;
      speedincrementer = speedincrementer + 0.01
    } else {
      P2result++;
      document.getElementById("player2score").innerHTML=P2result;
      speedincrementer = speedincrementer + 0.01
      console.log(speedincrementer);
    }

    if (gameCounter % 2 === 0) {
      isPlayer1Turn = false;
    } else {
      isPlayer1Turn = true;
    }

    isGameOver()
  }

  //-------------------------------------------------------------------------

  function isGameOver() {

    console.log("game counter = " +gameCounter)

   if ((gameCounter == 7) && (P1result > P2result)) { 
    console.log("p1 wins")
    $startGame.html("P1 Wins")
    } else if ((gameCounter == 7) && (P1result < P2result)) {
    console.log("p2 wins")
    $startGame.html("P2 Wins")
     } else if ((gameCounter == 7) && (P1result == P2result)) { 
      console.log("TIE")
      $startGame.html("Tie!")
    } else {
      console.log("nothing")

    }
  
}

  console.log("game counter = " +gameCounter)


  //-------------------------------------------------------------------------

  function startGame(player) {
    if (isPlayer1Turn) {
      $('label').html("player 1");
    } else {
      $('label').html("player 2");
    }

    gameCounter++;
    console.log(gameCounter);

    $('#trophy').css('background-image','none');
    gameRunning = true;
    startTimer();
    setupLevel();
    $(".a").each(animateDiv)
  }



    //Box animation functions ------------------------------------------------

    

    function animateDiv(index , element){
      var newq = makeNewPosition();
      var oldq = $(element).offset();
      var speed = calcSpeed([oldq.top, oldq.right], newq);    
      $(element).animate({ top: newq[0], left: newq[1] }, speed, function(){
        animateDiv(index, element);        
      });   
    };

    function makeNewPosition(){   
      var container = $(".columnContainer")
      var h = $(container).height() - 150;
      var w = $(container).width() - 650;    
      var nh = Math.floor(Math.random() * h);
      var nw = Math.floor(Math.random() * w);   
      return [nh,nw];    
    };



    function calcSpeed(prev, next) {  
      var x = Math.abs(prev[1] - next[1]);
      var y = Math.abs(prev[0] - next[0]);  
      var greatest = x > y ? x : y;   
      var speedModifier = 0.1 + speedincrementer;
      var speed = Math.ceil(greatest/speedModifier);
      return speed;
    };

  //----------------------------------------------------------


  function makenewarray() {

  var allNumbers = [];

  while(allNumbers.length < 8) {
    var randomnumber=Math.ceil(Math.random()*99);
    var found=false;
    for(var i=0;i<allNumbers.length;i++){
      if(allNumbers[i]==randomnumber) {found=true;break};
    }
    if(!found)allNumbers[allNumbers.length]=randomnumber; 
  }
   
  allNumbersSorted = allNumbers.sort(function (a, b) { 
        return a - b; 
   });
   
   return allNumbersSorted;
  }



});

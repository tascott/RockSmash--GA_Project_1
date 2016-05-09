$(function() {

  var $box = $('.testbox');
  $.each($box, function(index, element) {
        $(element).hide();
      });

  $('#start-game').click(startGame);


  function startTimer() {
    var count = 1000;
    var counter = setInterval(timer, 10); //10 will  run it every 100th of a second
    $('.testbox').show();
    function timer(){ 
      if (count <= 0) { 
        clearInterval(counter); 
        gameOver();
        return; 
      }
      count--;
      document.getElementById("timer").innerHTML="<h1>Time: </h1>" + count /100; 
    }
  }

  function currentLevel() {
    var allNumbers = [21, 17, 32, 56, 8, 11, 2, 99];
    allNumbersSorted = allNumbers.sort(function (a, b) { 
      return a - b; 
    });

    var $box = $('.testbox');
    var counter2 = 0;

    $.each($box, function(index, element) {
      $(this).on("click", function() {
        var counter = allNumbersSorted.length;
        number = $(this).data("number");

        if (number == allNumbersSorted[0]) {
          $(element).hide();
          allNumbers.shift();
          counter2 ++;
          $('#tally').html("<h1>Tally: " + counter2 +"</h1>");
          if (counter == 1){
            $('#trophy').css('background-image','url(http://i.imgur.com/d0E2Dgt.gif)','no-repeat', 'scroll', '0% 0%', 'transparent');
          }
        };
      })
    });
  }



  //Box animation functions ----------------------------------

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
    var h = $(container).height() - 350;
    var w = $(container).width() - 50;    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);   
    return [nh,nw];    
  };

  function calcSpeed(prev, next) {  
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);  
    var greatest = x > y ? x : y;   
    var speedModifier = 0.15;
    var speed = Math.ceil(greatest/speedModifier);
    return speed;
  };

  //----------------------------------------------------------



  function startGame() {
    startTimer();
    currentLevel();
    $(".a").each(animateDiv)
  }

  function gameOver() {
    // assign scores to player
  }

});

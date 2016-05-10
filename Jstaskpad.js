array = [1, 6, 7, 8]

var randomnumber=Math.ceil(Math.random()*100) 

 






console.log($box1.html());  //getinnherHTML (exactly)



console.log(allNumbersSorted[1]);


if click number is 2, hide the first div

$('#box1').on("click", function() {

  counter ++;
  console.log(counter)

  if (counter === 3){
    $('#box1').hide();
  }

});






var allNumbers = [];

///randomArrayGeneratorFunction -------------------------
while(allNumbers.length < 8) {
  var randomnumber=Math.ceil(Math.random()*99);
  var found=false;
  for(var i=0;i<allNumbers.length;i++){
    if(allNumbers[i]==randomnumber) {found=true;break};
  }
  if(!found)allNumbers[allNumbers.length]=randomnumber; 
  
}
  
  
  
  allNumbers.sort();
  console.log(allNumbers);






if ((counter < 2) && (startTimer() > 0)){
  $('#trophy').css('background-image','url(http://i.imgur.com/d0E2Dgt.gif)','no-repeat', 'scroll', '0% 0%', 'transparent');

  










  

var $box = $('.testbox');

$.each($box, function(index, element) {

  $(this).on("click", function() {

    var counter = allNumbersSorted.length;
    number = $(this).data("number");
    
    if (number == allNumbersSorted[0]) {
    $(element).hide();
    allNumbers.shift();
    if (counter <= 1){alert("Done!")};
} 
})
});


//Function(s) to move divs around containers----------------------------------
$(".a").each(animateDiv)

    animateDiv();
    
function makeNewPosition(){   
    var container = $(".columnContainer")
    var h = $(container).height() - 350;
    var w = $(container).width() - 50;    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);    
    return [nh,nw];    
}
function animateDiv(index , element){
    var newq = makeNewPosition();
    var oldq = $(element).offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);    
    $(element).animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv(index, element);        
    });   
};
function calcSpeed(prev, next) {  
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);  
    var greatest = x > y ? x : y;   
    var speedModifier = 0.3;
    var speed = Math.ceil(greatest/speedModifier);
    return speed;
}
//---------------------------------------------------------------------------


});


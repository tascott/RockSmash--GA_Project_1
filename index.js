$(function(){

var allNumbers = [21, 17, 32, 56];
allNumbersSorted = allNumbers.sort();
//var $box1 = $("#box1");
var counter = 0;
var $box = $('.testbox');

console.log(allNumbersSorted);

var counter1 = 0;


console.log($box.data("number"));

// $($box).on("click", function() {

//         counter1++;

//          $.each($box, function(index, element){

//              if (element.innerHTML == counter1) {
//              $(element).hide();
//              console.log(counter1);
//          } 
// });
// });


$.each($box, function(index, element) {

  $(this).on("click", function() {

    number = $(this).data("number");
      
    console.log(number);

    if (number == allNumbersSorted[0]) {
    
    $(element).hide();

    allNumbers.shift();

} 

})

});











// function dissappear() {

//   number = $(this).data("number");


//innerHTML of each box can be a random number, however each box can have a fixed ID with a number (e.g ID= "1")

//the click count ('clicknumber') goes up with each click. On click, if the 'clicknumber' is equal to the (id?) of the next box you are supposed to click, it dissappears



});


//if box clicked 





///pseudo code



// outer container

//To start;
// array of random numbers (1-99) (firstly, with 4)
// 4 boxes with 4 of those number in.
// user clicks box - if the first number in the array is clicked, box dissapears, counter goes up.











// write out user stories - e.g player 'must' be able to do something (click something, view leaderboard/correct row counter, ...bacuase...e.g press a number...because.... x(as many as possible)

//hear a sound when number is clicked (not important) - box dissapears too (more important)

//write out how complex this is - fibonacci scale - 1, 2, 3, 5, 8 or 13 - then put things in priority (not complexity) order

//needs to be two player
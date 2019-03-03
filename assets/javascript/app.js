$(document).ready(function(){

//HTML loads on screen, click start the questions appear, counter starts at 120 seconds, 4 questions appear

//These are the variables that hold the correct, incorrect, and unaswered score. 

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;


 
    //  Set our number counter to 60. This counts down the time
var number = 120;

     //  Variable that will hold our interval ID when we execute
    //  the "run" function
var intervalId;

//clicking start loads new screen, header stays where it is.
var trivia =  {


    startGame: function(){
        // restarting game results
        
        // remove start button
        $('#start').hide();
        
        // Reveals the questions since they are hidden
        $('#questionfirst').show();
      
        
        $('#questionsecond').show();
        
        $('#questionthird').show();
        $('#questionfourth').show();
        $('#questionfifth').show();
        
        
        //Hides the done button until the start button is clicked
        $('#done').show();
        //starts the timer that counts down!
        

      
        run();
        
    },
    
    finishGame: function(){

      
//Question answer conditions

      //Question 1

      if (!$('input[name="optradio"]:checked').val()) {

        unanswered++;
      
      } else if ($('input[name="optradio"]:checked').val() === "2" ) {
        
        correctAnswers++;
        
        
      } else { 
        incorrectAnswers++;
       
       
      

      };

      //Question 2

      if (!$('input[name="optradio2"]:checked').val())  {

        unanswered++;

      } else if ($('input[name="optradio2"]:checked').val() === "1" ) {
        
        correctAnswers++;
       
      
      }else {
        incorrectAnswers++;
        



      
      };

    // Question 3  

    if (!$('input[name="optradio3"]:checked').val()) {

      unanswered++;

    } else if ($('input[name="optradio3"]:checked').val() === "4" ) {
        
        correctAnswers++;
        
        console.log(correctAnswers);
        console.log(unanswered);
      
      }else{
        incorrectAnswers++;
       
     
        console.log(incorrectAnswers);
        console.log(unanswered);
     
     
     
      };

    // Question 4  
  

    if (!$('input[name="optradio4"]:checked').val()) {

      unanswered++;

    } else if ($('input[name="optradio4"]:checked').val() === "3" ) {
        
        correctAnswers++;
        
        
      
      }else{
        incorrectAnswers++;
       
     
     
     
      };

      
    // Question 5  
  

    if (!$('input[name="optradio5"]:checked').val()) {

      unanswered++;

    } else if ($('input[name="optradio5"]:checked').val() === "1" ) {
        
        correctAnswers++;
        
        
      
      }else{
        incorrectAnswers++;
       
     
     
     
      };







      





      //hides done button and questions.

      $('#done').hide();
      
      $('#questionfirst').hide();
      


         
      $('#questionsecond').hide();
        
      $('#questionthird').hide();

      $('#questionfourth').hide();

      $('#questionfifth').hide();

    
     //stops timer 

     stop();
     
     
     //hides timer
    
     $('#remaining-time').hide();

     //shows results

     $('#results').append('<h2>Correct Answers: '+ correctAnswers + '</h2>'); 
     $('#results').append('<h2>Incorrect Answers: ' + incorrectAnswers  + '</h2>'); 
     $('#results').append('<h2>Unanswered: '+ unanswered  + '</h2>');    

     

  },  


};





  


//this points to the startGame function inside Var Trivia and ////activates the click 
$("#start").on("click", trivia.startGame); 
console.log(trivia.startGame);

//this points to the finishGame function inside Var Trivia and ///activates the click
$("#done").on("click", trivia.finishGame);
console.log(trivia.finishGame);

// This styles the radio buttons
$(":radio").wrap("<span style='background-color:none'>");







 //////////////////////runs the timer!/////////////

    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

      //  The decrement function.
      function decrement() {

        //  Decrease number by one.
        number--;
  
        //  Show the number in the #show-number tag.
        $("#remaining-time").html("<h2>"+ "Time Remainig: " + number + " Seconds" + "</h2>");
  
  
//////////////////////////////////////////////////// CONDITIONS//////////////////////////////////////////        
      
        //  Once number hits zero...
        if (number === 0) {
  
          //  ...run the stop function.
          $('#done').trigger('click');
          stop();
  
         
        
        }
      }

      function stop() {
        

        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);

        
     
        //$('#done').hide();
      
        //$('#questionfirst').hide();
          




      }
  
      
    


  }); //jQuery End
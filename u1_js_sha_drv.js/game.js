var playerScore=0;   // player score
var dealerScore=0;  //computer score

/**
 * @desc make  a randome number between 1-11
 * @return a random number
 */

function makeRandomNumber(){
    randomNumber= Math.floor(Math.random()*11)+1;
    return randomNumber;
}

/**
 * @description draw a card from player side
 * @description shows card value and player score, by using a randomeNumber
 * @param var randomNumber 
 * @returns var playerScore- how many scores player has.
 */
function addToPlayerCard(randomNumber){

    playerScore+=randomNumber;

    console.log('Player draws:'+ randomNumber);

    console.log('Player score is: ' + playerScore);

    return playerScore;
}

/**
 * @description it works same the previous function, here dealer is computer!
 * @param var randomNumber
 * @returns var dealerScore, how many scores dealer has!
 */
function addToDealerCard(randomNumber){

    dealerScore+=randomNumber;

    console.log('Dealer draws:'+ randomNumber);

    console.log('Dealer score is :'+ dealerScore);

    return dealerScore;
}

/** 
 * @description it checks the rule of the game, who is the winner?
 * @description alerts the message you win/you loose!
 * @description rules:  
 * if playerScore = 21 , then player is the winner!
 * if playerScore >21 then , dealer is the winner!
 * if dealerScore > 21 then, player is the winner!
 * if dealerScore = 21 then , dealer is the winner!
 * if their score is same together so is a tie!!
 * if player and dealer score is less than 21 , then need to check that higher score is the winner
*/
function checkWinner(){

    if(playerScore==21 && dealerScore!=21) 
        {
            alert("Good Job! Player won the game, with score:"+ + "\n"+
             playerScore +' '+ 'Dealer final score is: '+ dealerScore);
        }

    else if(playerScore>21) {           

        alert("Ooops!Player lose the game,  with score:" + "\n"
        + playerScore+ ' '+'Dealer is winner and dealer score is '+ dealerScore);

    } 

    else if(dealerScore>21){         

        alert("Player is the winner with score: " + "\n"
        + playerScore +" \n"+'Dealer score is '+' '+dealerScore);
    }

    else if(playerScore!=21 && dealerScore==21){         

        alert("Dealer gain the final point which is 21!"+ "\n"+ ' '+ dealerScore);
    }

    else if(playerScore==dealerScore){  

        alert("Draw a card"+ "\n"+ ' '+ "keyD!" + playerScore+' '+dealerScore);

        }

    else if(playerScore & dealerScore <21 && playerScore > dealerScore){ 

        alert("Player is the winner,  with score:"+ ' ' + playerScore +" \n"+ 
        ' playerScore is higher than dealerScore'+ ' ' + dealerScore);
    }

    else if(playerScore & dealerScore <21 && dealerScore > playerScore){

        alert("Dealer win the game, with score" + ' '+ dealerScore+ 
        " \n"+ 'Dealer Score is higher than PlayerScore!'+ ' ' + 'playerScore is'+' ' + playerScore);
    }

  }
  /**
   * @description make the game started!
   * in this function, all the functions we have will be placed, 
    in order to start the game!
   */

function getStarted(){

    addToPlayerCard(makeRandomNumber());
    addToDealerCard(makeRandomNumber());
    addToDealerCard(makeRandomNumber());
    checkWinner();
}

getStarted();   
       
/** @description make eventLister!
 * first check if player click key D, then player gets a card (hint)
 * then check if player is stopped, with key S, then dealer draws a card!
 * then, it will check who will be a winner! by calling checkWinner function!
 * 
 */


 window.addEventListener("keydown", function(event){

    if (event.code === 'KeyD') {                

        console.log("Player draws a new card.");

        addToPlayerCard(getRandomNumber());        

        checkWinner();                           
  
            } 
            
        else if (event.code === 'KeyS') {                

                     console.log("Player stops here.");

                            if(dealerScore < 17){                           

                               addToDealerCard(getRandomNumber());
                            }

        checkWinner();                             
         
    }
  
  });
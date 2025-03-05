//Number Guessing Game
function startSecretNumberGame(){
    //Get the system 
    const sysNumber = Math.floor(Math.random()*10)+1;
    let attemptCount = 1;
    let userInput, userInputtoNum;

    function reTry(){
        userInput = prompt("Guess a number between 1 and 10");
        userInputtoNum = Number(userInput);
        if(userInput === ''){
            reTry();
        }else if(userInput !== null){//if not cancel
            //console.log(sysNumber);
            if(userInputtoNum !== sysNumber){
                attemptCount += 1;
                if(userInputtoNum>sysNumber){
                    console.log("Your guess is higher. Try a smaller number.");
                }else{
                    console.log("Your guess is lower. Try a bigger number.");
                }
                //Guess until it's not matched
                reTry();
            }
        }else{
            console.log("You have exited from the game");
        }
    }
    reTry();
    if(userInputtoNum === sysNumber){
        console.log(`Congrats!!! You have guessed the number ${attemptCount}time(s). The number was ${sysNumber}`);
        //To play again
        const playAgainPrompt = prompt("Do You Want to Play Again? (yes/no)")
        const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";
        if (playAgain === "yes") {
            startSecretNumberGame();
        } else {
            console.log("Thanks for Playing! See you Next Time")
        }
    }
}

startSecretNumberGame();
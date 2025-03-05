//Number Guessing Game
function startSecretNumberGame(){
    //Get the system 
    const sysNumber = Math.floor(Math.random()*10)+1;
    let attemptCount = 0;
    let userInput = Number(prompt("Guess a number between 1 and 10"));
    if(userInput !== null){
        console.log(sysNumber);
        while(userInput !== sysNumber){
            attemptCount += 1
            reTry(userInput, sysNumber);
            //Guess until it's not matched
            userInput = Number(prompt("Guess a number between 1 and 10"));
            console.log(typeof userInput, typeof sysNumber)
        }

        console.log(`Congrats!!! You have guessed the number ${attemptCount}times. The number was ${sysNumber}`);
        //To play again
        const playAgainPrompt = prompt("Do You Want to Play Again? (yes/no)")
        const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";
        if (playAgain === "yes") {
            startSecretNumberGame();
        } else {
            console.log("Thanks for Playing! See you Next Time")
        }
    }else{
        console.log("You have exited from the game");
    }
}

function reTry(userInput,sysNumber){
    if(userInput>sysNumber){
        console.log("Your guess is higher. Try a smaller number.");
    }else{
        console.log("Your guess is lower. Try a bigger number.");
    }
}

//Start the game
startSecretNumberGame();
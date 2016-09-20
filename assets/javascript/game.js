 // user guesses random letter 
		 var alphabet = "abcdefghijklmnopqrstuvwxyz";
		 var lettersArray = alphabet.split(''); 
		 var wins = 0;
		 var losses = 0;
		 var guessesLeft = 50;
		 var letsGuessed=[]; //prevent letter repeats

		 //this whole function starts with the press of a key
		 document.onkeypress = function(e) {
		 	e = e || window.event;

		 	//e.which is the character code
		 	//we converted the character code into a string so that we can see what the user actually typed
		 	var characterInput = String.fromCharCode(e.which);

		 	//log to console the users input to take a look
		 	console.log(characterInput);
		 	//if the index of character input is greater than -1 (guessed letter is in the lettersArray)
		 	//AND guessesLeft is greater than or equal to 1
		 	if (lettersArray.indexOf(characterInput) > -1 && guessesLeft >= 1){
		 		//run computerResponse and pass in characterInput
		 		computerResponse(characterInput);
		 		letsGuessed.push(characterInput); //push to letsGuessed
		 	}


		 }

		 function computerResponse (usersGuess){
		 	//computer generates a random number that indicates letter's index
		 	 var index = Math.random() * (lettersArray.length - 1) + 0; 
		 	 //this takes the random number and applies it to the letter's index
		 	 var computerGuess = lettersArray[index];

		 	 if (computerGuess === usersGuess){
		 		
			 		wins++;
						
					} else {
						losses++;
						
					}
					guessesLeft--;

			console.log("total wins: " + wins);
			console.log("total losses: " + losses);
			console.log("guesses left: "+ guessesLeft);


			document.querySelector('#game').innerHTML =
			  '<p>Wins: ' + wins + '</p>' +
			  '<p>Losses: ' + losses + '</p>' +
			  '<p>Guesses Left: ' + guessesLeft + '</p>'; 
			 
				 }

		  
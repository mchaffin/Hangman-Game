// Game Object - all the functions, all the goodies
var game = {
    theWord: [],
    theGuess: [],
    theScore: [],
    maxAttempts: 9,
    rounds: 0,
    hits: 0,
    misses: 0,
    
    // startGame function initializes the game
    startGame: function () 
    {
        if (this.theWord.length > 1) {
            // Check for existence of word
            document.getElementById("pStatus").innerHTML = "Sorry! The word has already been set.";
        }
        else {
            // push inputWord to theWord array
            this.theWord = document.getElementById('inputWord').value.split("");

            // loop through array to display values
            var pval = "";
            var pval2 ="";
            for (i = 0; i < this.theWord.length; i++) {
                pval = pval + this.theWord[i];
                // initialize the scoreBoard
                this.theScore[i] = "_ ";
                pval2 = pval2 + this.theScore[i];
            }
            // write out values
            document.getElementById('pHidden').innerHTML = pval;
            document.getElementById('pScore').innerHTML = pval2;
        }
    },
    
    attemptGuess: function () 
    {
        if (document.getElementById('inputGuess').value.split("") == "") {
            document.getElementById("pStatus").innerHTML = "Please enter a guess. Try the whole word big man!";
        }
        else {
            // push inputGuess to theGuess array
            this.theGuess = document.getElementById('inputGuess').value.split("");

            // evaluate a full wordGuess
            if (this.theGuess.length > 1) {
                this.hits = 0;
                for (i = 0; i < this.theWord.length; i++) {
                    if (this.theGuess[i] === this.theWord[i]) {
                        this.hits++;
                        console.log("hit");
                    }
                }
                if (this.hits === this.theWord.length) {
                    this.theScore = this.theGuess.splice(0);
                    console.log("winner!!");
                    document.getElementById("pStatus").innerHTML = "WINNER!!";
                    // Show pretty Mickey
                    document.getElementById('mImage').src='assets/images/mickey0.jpeg';
                }
            }
            else {
                // evaluate a single charGuess
                this.hits = 0;
                for (i = 0; i < this.theWord.length; i++) {
                    if (this.theGuess[0] === this.theWord[i]) {
                        this.hits++;
                        console.log("hit");
                        console.log(this.rounds);
                        this.theScore.splice(i,1,this.theGuess[0]);
                    }
                }
                if (this.hits === 0 ) {
                    this.misses++;
                    console.log("miss");
                    // Show ugly Mickey
                }
                if (this.hits === this.theWord.length) {
                    this.theScore = this.theGuess.splice(0);
                    console.log("winner!!");
                    document.getElementById("pStatus").innerHTML = "WINNER!!";
                    // Show pretty Mickey
                    document.getElementById('mImage').src='assets/images/mickey0.jpeg';
                }
            }
            // increment rounds
            this.rounds++;

            // loop through array for display
            var pval = "";
            for (i = 0; i < this.theScore.length; i++) {
                pval = pval + this.theScore[i];
            }
            document.getElementById('pScore').innerHTML = pval;
            document.getElementById('pRounds').innerHTML = "Round #: "+this.rounds;
            document.getElementById('mImage').src='assets/images/mickey'+this.misses+'.jpeg';
        }
    },
    // clear out any array passed into the function
    clearArray: function(array) {
        while (array.length) {
            array.pop();
        }
    },

    resetGame: function() {
        // reset all arrays and variables, clear screen
        this.clearArray(this.theWord);
        this.clearArray(this.theGuess);
        this.clearArray(this.theScore);
        this.maxAttempts = 9;
        this.rounds = 0;
        this.hits = 0;
        this.misses = 0;
        document.getElementById('pStatus').innerHTML = "";
        document.getElementById('pHidden').innerHTML = "";
        document.getElementById('pScore').innerHTML = "";
        document.getElementById('pRounds').innerHTML = "";

    },

  }; //end object
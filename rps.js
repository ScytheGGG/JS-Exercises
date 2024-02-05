function rps() {
        const message = document.querySelector('.rpsMessage');
        const score = document.querySelector('.score');
        const buttons = document.querySelectorAll('button');
    
        // Move winnerScores inside a closure
        let winnerScores = [0, 0];
    
        // Add event listeners to buttons
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', playGame);
        }
    
        function playGame(e) {
            // Setup player's selection
            let playerSelection = e.target.innerText;
    
            // Setup a random number to select for computer
            let computerSelection = Math.random();
    
            // Determine computer's selection
            if (computerSelection < 0.34) {
                computerSelection = 'Rock';
            } else if (computerSelection <= 0.67) {
                computerSelection = 'Paper';
            } else {
                computerSelection = 'Scissors';
            }
    
            // Setup a function to compare winners and return result
            let result = checkWinner(playerSelection, computerSelection);
    
            // Output scores to the DOM
            if (result === 'Player') {
                result += ' wins!';
                // Update score
                winnerScores[0]++;
            }
    
            if (result === 'Computer') {
                result += ' wins!';
                winnerScores[1]++;
            }
    
            if (result === 'Draw') {
                result += '. It\'s a tie!';
            }
    
            // Output score into Score DIV
            score.innerHTML = 'Player: [ ' + winnerScores[0] + ' ] Computer: [ ' + winnerScores[1] + ' ]';
    
            // Output player and computer's selections
            messenger('Player: <strong>' + playerSelection + '</strong> Computer: <strong>' + computerSelection + '</strong><br>' + result);
        }
    
        function messenger(selectionMessage) {
            message.innerHTML = selectionMessage;
        }
    
        function checkWinner(player, computer) {
            if (player === computer) {
                return 'Draw';
            }
    
            if (player === 'Rock') {
                return (computer === 'Paper') ? 'Computer' : 'Player';
            }
    
            if (player === 'Paper') {
                return (computer === 'Scissors') ? 'Computer' : 'Player';
            }
    
            if (player === 'Scissors') {
                return (computer === 'Rock') ? 'Computer' : 'Player';
            }
        }
}
    
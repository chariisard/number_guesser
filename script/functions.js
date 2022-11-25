window.addEventListener('load', () => {  

    //Declare variables
    const container = document.querySelector('#container2')
    const correct = document.querySelector('.guessCorrect')
    const wrong = document.querySelector('.guessWrong')
    const form = document.querySelector('#guessForm')
    const guess = document.querySelector('#guessValue')
    const guessSubmit = document.querySelector('#guessButton')
    const newButton = document.querySelector('.newGuessButton')

    var chances = 3
    

    //Generate numbers between 1 and 10
    var randomNum = Math.floor(Math.random() * 10) + 1
    
    loadEventListeners();

    //Load event listeners
    function loadEventListeners() {
        guessSubmit.addEventListener('click', startGuess)
    }

    console.log(randomNum)

    function startGuess() {      
        if (guess.value == '') {
            alert("Please enter a valid input (Any number between 1 and 10)")
            guess.value = ""
        } else if (guess.value > 10 || guess.value <= 0) {
            alert("Please enter a valid number between 1 and 10") 
            guess.value = ""
        } else if (chances > 0) {
            chances--  

            if (guess.value == randomNum) {
                correct.innerHTML = guess.value + " is correct!"
                correct.style.color = "#689F38"
                guess.style.borderColor = "#689F38" 
                guess.disabled = true 
                guessSubmit.style.display ='none'
                newButton.style.display = 'block'
            } else if (guess.value != randomNum && chances > 1) {
                correct.innerHTML = guess.value + " is not correct, you have " + chances + " guesses left"
                correct.style.color = "#F44336"             
                guessSubmit.style.display ='block'
                newButton.style.display = 'none'           
                guess.value = ""
            } else if (chances == 1) {
                correct.innerHTML = guess.value + " is not correct, you have " + chances + " guess left"
                correct.style.color = "#F44336"                
                guessSubmit.style.display ='block'
                newButton.style.display = 'none'           
                guess.value = ""
            } else if (chances == 0) {
            correct.innerHTML = "Sorry, game over, the correct answer was " + randomNum
            correct.style.color = "#F44336"
            guess.style.borderColor = "#F44336" 
            newButton.style.display = 'block'
            guessSubmit.style.display = 'none'
            guess.disabled = true            
            }    
        }
    }

    newButton.addEventListener('click', () => {
        randomNum = Math.floor(Math.random() * 10) + 1
        console.log(randomNum)
        chances = 3
        newButton.style.display = "none"
        guessSubmit.style.display = 'block'
        correct.style.display = "block"
        correct.innerHTML = "What do you think is the number?"
        correct.style.color = "#723d46"
        guess.disabled = false
        guess.style.border = "solid #777777 2px"
        guess.value = ""
    })
    

    
})
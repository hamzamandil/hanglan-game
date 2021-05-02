class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'Playing'
    }
    calcStatus(){
        let finished = true

        this.word.forEach((letter) => {
            if(this.guessedLetters.includes(letter) || letter === ' '){
                
            } else {
                finished = false
            }
        })
    
        if(this.remainingGuesses === 0){
            this.status = 'Failed'
        } else if (finished){
            this.status = 'Finished'
        } else {
            this.status = 'Playing'
        }   
    }
    get StatusMessage() {
        if(this.status === 'Playing'){
            return `Guesses left ${this.remainingGuesses}`
        } else if (this.status === 'Finished'){
            return 'Great work! you guessed the word.'
        } else if (this.status === 'Failed') {
            return `Nice Try! the word was "${this.word.join('')}"`
        }
    }
    get puzzle() {
        let puzzle = ''
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' '){
                puzzle += letter
            } else {
                puzzle += '*'
            }
        });
            
        return puzzle
    }
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
    
        if(this.status !== 'Playing'){
            return
        }
    
        if(isUnique){
            this.guessedLetters.push(guess)
        }
        if(isUnique && isBadGuess) {
            this.remainingGuesses--
        }
        this.calcStatus()
    }
}
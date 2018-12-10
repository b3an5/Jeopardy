class Clue {
  constructor() {
    this.question;
    this.answerplace = 0; 
    this.player = 0;
    this.guessCount = 0;
  }
  checkAnswer(input) {
    if ( round.currentClues[this.answerplace].answer !== input ) {
      game.players[this.player].score  -= round.currentClues[this.answerplace].pointValue;
      this.guessCount++
      domUpdates.displayScores()
      domUpdates.wrongAnswer()
      domUpdates.clueDisable(this.answerplace)
      this.player++
      if(this.guessCount === 3 ) {
        alert("hello world yall all wrong")
        round.completedClues++
        domUpdates.tearDownCard()
        this.guessCount = 0;
      }
    }
    if ( this.player === 3) {
      this.player = 0;
    }
    domUpdates.displayTurn(this.player)
    if( round.currentClues[this.answerplace].answer ===  input ) {
      game.players[this.player].score  += round.currentClues[this.answerplace].pointValue;
      domUpdates.displayScores()
      domUpdates.tearDownCard()
      domUpdates.rightAnswer()
      round.completedClues++
      this.guessCount = 0;
      domUpdates.clueDisable(this.answerplace)
    } 
  }

  cluePopup(some) {
    this.question = some.question;
    this.answer = some.answer;
    let div = $(
      `<div class="popup">
        <p class="clue-value">${some.question}</p>
        <form class="clue-form">
          <label  class="clue-label"> What is 
            <input type="text" class="clue-input">?
          </label>
          <button class="clue-button">enter</button>
        </form>
      </div>`)
    $('#board').append(div);
    // setTimeout(() => {
    //   domUpdates.wrongAnswer();
    //   this.player++;
    // } , 10000)
  }

  dailyDoublePopup() {
    let div = $(
      `<div class='dd-popup'>
        <h1>DAILY</h1>
        <h1>DOUBLE</h1>
        <input class='dd-input' typle ='text' >
        <button class='dd-button'>Enter</button>
      </div>`
      )
  }
} 


if (typeof module !== 'undefined') {
  module.exports = Clue;
}
class Clue {
  constructor() {
    this.question;
    this.answerplace = 0; 
    this.player = 0;
    this.guessCount = 0;
    this.wager;
  }
  checkAnswer(input) {
    if ( round.currentClues[this.answerplace].answer.toLowerCase() !== input.toLowerCase() ) {
      game.players[this.player].score -= parseInt(this.wager) || (round.currentClues[this.answerplace].pointValue * game.round);
      this.wager = undefined;
      this.guessCount++
      domUpdates.displayScores()
      domUpdates.wrongAnswer()
      domUpdates.clueDisable(this.answerplace)
      this.player++
      if (this.guessCount === 3 ) {
        domUpdates.tearDownCard()
        this.rightAnswer()
        round.completedClues++
        this.guessCount = 0;
      }
    }
    if ( this.player === 3) {
      this.player = 0;
    }
    domUpdates.displayTurn(this.player)
    if ( round.currentClues[this.answerplace].answer.toLowerCase() ===  input.toLowerCase() ) {
      game.players[this.player].score += parseInt(this.wager) || (round.currentClues[this.answerplace].pointValue * game.round)
      domUpdates.displayScores()
      domUpdates.tearDownCard()
      domUpdates.rightAnswer()
      round.completedClues++
      this.guessCount = 0;
      domUpdates.clueDisable(this.answerplace)
    } 
  }
  takeInWager() {
    if (game.players[this.player].score >=  $('.dd-input').val() ||   round.currentClues[14].pointValue >= $('.dd-input').val()) {
      this.wager = $('.dd-input').val();
      domUpdates.tearDownCard();
      this.cluePopup(dailyDoubleClue)
    } else {
      console.log('wage not accepted')
    }
  }
  cluePopup(some) {
    this.question = some.question;
    this.answer = some.answer;
    let div = $(
      `<div class="popup">
        <p class="clue-value">${some.question}</p>
        <form class="clue-form">
          <label  class="popup-label clue-label"> What is 
            <input type="text" class="clue-input">?
          </label>
          <button class="popup-button clue-button">enter</button>
        </form>
      </div>`)
    $('body').append(div);
  }

  rightAnswer() {
    let div = $(
      `<div class='popup'>
        <h2>answer is</h2>
        <p class="answer-value">${round.currentClues[this.answerplace].answer}</p>
      </div>`
    )
    $('body').append(div);
    domUpdates.tearDownCardTime();
  }

  dailyDoublePopup(index) {
    let div = $(
      `<div class='popup'>
        <h1>DAILY</h1>
        <h1>DOUBLE</h1>
        <input class='popup-input dd-input' typle ='text' >
        <button class='popup-button dd-button'>Enter</button>
      </div>`
    )
    $('body').append(div);
  }
} 

if (typeof module !== 'undefined') {
  module.exports = Clue;
}
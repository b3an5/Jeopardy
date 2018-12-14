class Clue {
  constructor() {
    this.question;
    this.answerplace = 0;
    this.player = 0;
    this.guessCount = 0;
    this.wager;
  }
  checkAnswer(input) {
    if (game.roundClass.currentClues[this.answerplace].answer.toLowerCase() !== input.toLowerCase()) {
      game.players[this.player].score -= parseInt(this.wager) || (game.roundClass.currentClues[this.answerplace].pointValue * game.round);
      this.wager = undefined;
      this.guessCount++;
      domUpdates.displayScores();
      domUpdates.wrongAnswer();
      domUpdates.clueDisable(this.answerplace);
      this.player++;
      if(this.guessCount === 3) {
        domUpdates.tearDownCard();
        game.roundClass.completedClues++;
        this.guessCount = 0;
        domUpdates.displayRightAnswer();
      }
    }
    if (this.player === 3) {
      this.player = 0;
    }
    domUpdates.displayTurn(this.player)
    if (game.roundClass.currentClues[this.answerplace].answer.toLowerCase() ===  input.toLowerCase()) {
      game.players[this.player].score += parseInt(this.wager) || (game.roundClass.currentClues[this.answerplace].pointValue * game.round);
      domUpdates.displayScores();
      domUpdates.tearDownCard();
      domUpdates.rightAnswer();
      game.roundClass.completedClues++;
      this.guessCount = 0;
      this.wager = 0;
      domUpdates.clueDisable(this.answerplace);
    } 
  }
  takeInWager() {
    if (game.players[this.player].score >= $('.dd-input').val() || game.roundClass.currentClues[14].pointValue >= $('.dd-input').val()) {
      this.wager = $('.dd-input').val();
      domUpdates.tearDownCard();
      this.cluePopup(dailyDoubleClue)
    }else {
      domUpdates.wagerRejection();
    }
  }
  cluePopup(some) {
    this.question = some.question;
    this.answer = some.answer;
    domUpdates.displayCluePopup(some);
  }
  rightAnswer() {
    domUpdates.displayRightAnswer();
    domUpdates.tearDownCardTime();
  }
} 

if (typeof module !== 'undefined') {
  module.exports = Clue;
}
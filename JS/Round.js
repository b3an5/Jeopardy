class Round {
  constructor(currentQuestions) {
    //this.round = 0 moved this.round to game
    this.currentQuestions = currentQuestions //pass through our array of objects that we use
  }

  scoreMultipy() {
    if (Game.round === 1) {
      // Player.score += score value * 1
    } if (Game.round === 2) {
      // Player.score += score value * 2
    } else {
      return;
    }
  }

  changeTurn() {
    //if guess is wrong change to next player
  }
}

class Round3 extends Round {
  constructor() {
    super()

  }
}

if (typeof module !== 'undefined') {
  module.exports = Round;
}
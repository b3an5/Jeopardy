class Round {
  constructor() {
    this.round = 0
  }

  scoreMultipy() {
    if (this.round === 1) {
      // Player.score += score value * 1
    } if (this.round === 2) {
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
    super(round = 3)

  }
}
class Game {
  constructor() {
    this.round = 0;
    this.players = [];
    this.round3 = false;
    this.data
    this.roundClass = new Round();
    this.round3Class;
    this.clueClass = new Clue();
  }
  init() {
    this.players.push(new Player($('.js-player1-name-input').val()));
    this.players.push(new Player($('.js-player2-name-input').val()));
    this.players.push(new Player($('.js-player3-name-input').val()));
    domUpdates.displayNames();
    domUpdates.displayScores();
    domUpdates.displayGame();
    domUpdates.displayTurn();
    this.round++;
  }
  parseData() {
    let clues = (Object.values(data)[2]);
    this.data = (Object.keys(Object.values(data)[1])).map((category, index) => {
      let clueVal = [];
      clues.forEach((clue) => {
        if (clue.categoryId === index + 1) {
          clueVal.push(clue);
        }
      })
      return { category, clues: clueVal };
    })
  }
  startRound() {
    this.round ++
    game.roundClass.grabCategories(game.data);
    game.roundClass.grabClues();
    game.roundClass.displayClue();
    $('.card-cover').css('display', 'block');
  }
  endRound() {
    game.roundClass.inUseArr = [];
  }
  reset() {
    this.round = 0;
    game.clueClass.player = 0;
    game = new Game();
    domUpdates.splashReset();
    domUpdates.tearDownCard();
  }
}

if (typeof module !== 'undefined') {
  module.exports = Game;
}
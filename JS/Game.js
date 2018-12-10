class Game {
  constructor() {
    this.round = 0,
    this.players = [], // {player1: 'whatever is put in imput', ...}
    this.round3 = false,
    this.winner = null
    this.data;
  }

  init() {
    //starts game
    this.players.push(new Player($('.js-player1-name-input').val()));
    this.players.push(new Player($('.js-player2-name-input').val()));
    this.players.push(new Player($('.js-player3-name-input').val()));
    domUpdates.displayNames();
    domUpdates.displayScores();
    domUpdates.displayGame();
    domUpdates.displayTurn() 
    this.round++;
  }

  parseData() {
    let clues = (Object.values(data)[2])

    this.data = (Object.keys(Object.values(data)[1])).map((category, index) => {
      let clueVal = []
      clues.forEach((clue) => {
        if (clue.categoryId === index + 1) {
          clueVal.push(clue)
        }
      })
      return { category, clues: clueVal }
    })
  }

  endGame() {
    //displays winner and presents a restart button
  }

  startRound() {
    this.round ++
    round.grabCategories(game.data);
    round.grabClues()
    round.displayClue()
    $('.card-cover').css('display', 'block')
    //run generate Board function in Board.js
  }

  endRound() {
    round.inUseArr = [];
  }

  reset() {
    //Round.round = 0
    //resets game 
  }
  random() {
    //use to create random number for the game
  }
}

if (typeof module !== 'undefined') {
  module.exports = Game;
}
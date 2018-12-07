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
    for (let i = 1; i < 4; i++) {
      let player = new Player($(`.js-player${i}-name-input`).val());
      this.players.push(player);
    }
    domUpdates.displayNames();
    domUpdates.displayScores();
    domUpdates.displayGame();
    this.round++;
  }

  parseData() {
    let clues = data.clues;

    this.data = (Object.keys(data.categories)).map((category, index) => {
      let clueVal = []
      let clue = clues.filter((clue) => {
        return clue.categoryId === index + 1 
      })
      clueVal.push(clue)
      return { category, clues: clueVal }
    })
  }

  endGame() {
    //displays winner and presents a restart button
  }

  startRound() {
    //this.round ++
    //run generate Board function in Board.js
  }

  endRound() {
    //clears board 
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
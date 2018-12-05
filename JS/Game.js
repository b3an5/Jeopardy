class Game {
  constructor() {
    this.round = 0,
    this.players = {}, // {player1: 'whatever is put in imput', ...}
    this.round3 = false,
    this.winner = null
  }

  init() {
    //starts game
    //this.round++
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
}

if (typeof module !== 'undefined') {
  module.exports = Game;
}
class Game {
  constructor() {
    this.round = 0,
    this.players = [], // {player1: 'whatever is put in imput', ...}
    this.round3 = false,
    this.winner = null
  }

  init() {
    //starts game
    domUpdates.displayNames()
    let playerOneName = $('.js-player1-name-input').val()
    let playerTwoName = $('.js-player2-name-input').val()
    let playerThreeName = $('.js-player3-name-input').val()
    let playerOne = new Player(playerOneName);
    this.players.push(playerOne)
    let playerTwo = new Player(playerTwoName);
    this.players.push(playerTwo)
    let playerThree = new Player(playerThreeName);
    this.players.push(playerThree)
    this.round++
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
class Board {
  constructor() {
    this.currentCatigories = [],
    this.currentClues = [],
    this.completedClues = 0, //if this equals 16 this.completed = true and run end round instead of moving to next player
    this.completed = false
  }

  populateBoard() {
    // runs dom fn
    //gets values from dataset
  }

  emptyBoard() {
    // moves used catigories and cards to 'trash array'
    // dom disable fn
  }
}

if (typeof module !== 'undefined') {
  module.exports = Board;
}
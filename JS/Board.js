class Board {
  constructor() {
    this.currentCatigories = [],
    this.currentClues = [],
    this.completedClues = 0, //if this equals 16 this.completed = true and run end round instead of moving to next player
    this.completed = false
  }


  /////this needs refactoring
  populateBoard() {
    // runs dom fn
    let clues = (Object.values(data)[2])
    console.log('clues', clues)

    let fullData = (Object.keys(Object.values(data)[1])).map((category, index) => {
      let clueVal = []
      clues.forEach((clue) => {
        if (clue.categoryId === index + 1) {
          clueVal.push(clue)
        }
      })
      return { category, clues: clueVal }
    })

    let inUseArr = []

    for (var i = 0; i < 4; i++) {
      let randomIndex = Math.floor(Math.random() * fullData.length);
      let category = fullData.splice(randomIndex, 1)
      inUseArr.push(category)
    }

    inUseArr.forEach((inUse) => {
      this.currentCatigories.push(inUse[0].category);
    })

    domUpdates.displayCat(this.currentCatigories);
  }

  emptyBoard() {
    // moves used catigories and cards to 'trash array'
    // dom disable fn
  }
}

if (typeof module !== 'undefined') {
  module.exports = Board;
}
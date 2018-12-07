class Round {
  constructor() {
    //this.round = 0 moved this.round to game
    this.currentCategories = [],
    this.inUseArr = [],
    this.completedClues = 0,
    this.completed = false
  }

  grabCategories(fullData) {
    for (var i = 0; i < 4; i++) {
      let randomIndex = Math.floor(Math.random() * fullData.length);
      let category = fullData.splice(randomIndex, 1)
      this.inUseArr.push(category)
    }

    this.inUseArr = this.inUseArr.reduce((acc, arr) => {
      return acc.concat(arr)
    }, [])

    this.inUseArr.forEach((inUse) => {
      this.currentCategories.push(inUse.category);
    })

    domUpdates.displayCat(this.currentCategories);
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
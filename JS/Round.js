class Round {
  constructor() {
    //this.round = 0 moved this.round to game
    this.currentCategories = [],
    this.currentClues = [],
    this.inUseArr = [],
    this.completedClues = 0,
    this.completed = false
  }

  grabCategories(fullData) {
    this.currentCategories = [];
    for (var i = 0; i < 4; i++) {
      let randomIndex = Math.floor(Math.random() * fullData.length);
      let category = fullData.splice(randomIndex, 1)
      this.inUseArr.push(category)
    }

    this.inUseArr.forEach((inUse) => {
      this.currentCategories.push(inUse[0].category);
    })

    this.inUseArr = this.inUseArr.reduce((acc, arr) => { return acc.concat(arr) }, [])

    domUpdates.displayCat(this.currentCategories);
  }


  // ---------------------------------
  grabClues() {
    let thecluesforthegame = this.inUseArr.reduce((acc, clue) => {
      acc.push(clue.clues)
      return acc
    }, []).map((clue) => {
      let cluess = clue
      for (let i = cluess.length - 1; i > 0; i--) {
        const a = Math.floor(Math.random() * (i + 1));
        [cluess[i], cluess[a]] = [cluess[a], cluess[i]];
      }
      return clue
    })

    let theFourClue = thecluesforthegame.map((clue) => {
      let clueSets = []
      for (let i = 0; i < 4; i++) {
        clueSets.push(clue.find((clue, index) => clue.pointValue === ((i + 1) * 100)))
      }
      return clueSets
    })

    this.currentClues = theFourClue.reduce((acc, hello) => {
      return acc.concat(hello)
    }, []).sort((clueA, clueB) => {
      return clueA.pointValue - clueB.pointValue
    })
    this.makeDailyDouble();
  }

  displayClue() {
    $('.cards-value').each((index, clue) => {
      $(clue).text(this.currentClues[index].pointValue * game.round);
    })
  }


  //---------------------------------

  scoreMultipy() {
    if (Game.round === 1) {
      // Player.score += score value * 1
    } if (Game.round === 2) {
      // Player.score += score value * 2
    } else {
      return;
    }
  }

  changeRound() {
    if (this.completedClues === 16) {
      game.endRound()
      game.startRound()
      this.completedClues = 0
    }
  }

  makeDailyDouble() {
    for (let i = 0; i < game.round; i++) {
      let randomIndex = Math.floor(Math.random() * 16);
      this.currentClues[randomIndex].categoryId = true;
      console.log(randomIndex)
    }
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
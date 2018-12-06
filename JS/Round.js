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
    for (var i = 0; i < 4; i++) {
      let randomIndex = Math.floor(Math.random() * fullData.length);
      let category = fullData.splice(randomIndex, 1)
      this.inUseArr.push(category)
    }

    this.inUseArr.forEach((inUse) => {
      this.currentCategories.push(inUse[0].category);
    })

    this.inUseArr = this.inUseArr.reduce((acc, arr) => {return acc.concat(arr)}, [])

    domUpdates.displayCat(this.currentCategories);
  }


  // ---------------------------------
  grabClues() {
    console.log(this.inUseArr)
     let thecluesforthegame = this.inUseArr.reduce((acc, clue) => {
      acc.push(clue.clues)
      return acc
      }, []);


    let shuffle = thecluesforthegame.map((clue) => {
    let cluess = clue
    for (let i = cluess.length - 1; i > 0; i--) {
        const a = Math.floor(Math.random() * (i + 1));
        [cluess[i], cluess[a]] = [cluess[a], cluess[i]];
          }
        return clue
    })

    let theFourClue = shuffle.map((four) => {
      let blah = []
          for(let i=0; i<4; i++) {
            blah.push(four.find((clue, index) => clue.pointValue === ((i + 1) * 100) ))
          }
      return blah
    })

    let concatthatshit = theFourClue.reduce((acc, hello) => {
      return acc.concat(hello)
    }, [])

    this.currentClues = concatthatshit.sort((catA, catB) => {
      return catA.pointValue - catB.pointValue
    })
  }


  displayClue() {
    currentClues.forEach((clue) => {

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
const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies')
chai.use(spies);
const Round = require('../js/Round.js');
global.Game = require('../js/Game.js')
global.data = require('../js/Data.js')
global.domUpdates = require('../js/dom.js')


describe('Round Class', () => {
  
  beforeEach(() => {
    chai.spy.on(global.domUpdates, ['displayCat'], () => true)
  })

  afterEach(() => {
    chai.spy.restore(global.domUpdates)
  })

  it('should start with 0 completed clues', () => {
    let round = new Round();
    expect(round.completedClues).to.equal(0) 
  })

  it('should grab 4 categories', () => {
    let game = new Game();
    let round = new Round();
    game.parseData();
    round.grabCategories(game.data);
    expect(domUpdates.displayCat).to.have.been.called(1)
    expect(round.currentCategories.length).to.equal(4)
  })

  it('should grab 16 clues', () => {
    let game = new Game();
    let round = new Round();
    game.parseData();
    round.grabCategories(game.data)
    round.grabClues();
    expect(round.currentClues.length).to.equal(16)
  })
  
  // it('should change round', () => {
  //   let game = new Game();
  //   let round = new Round();
  //   game.parseData();
  //   round.grabCategories(game.data)
  //   round.grabClues();
  //   round.completedClues = 16;
  //   round.changeRound();
  //   expect(game.round).to.equal(2)
  // })


})
const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies')
chai.use(spies);
const Round = require('../js/Round.js');
global.round = require('../js/Round.js');
global.Game = require('../js/Game.js')
global.game = require('../js/Game.js')
global.data = require('../js/Data.js')
global.domUpdates = require('../js/dom.js')

describe('Round Class', () => {

  beforeEach(() => {
    chai.spy.on(global.domUpdates, ['displayCat'], () => true)
  })

  afterEach(() => {
    chai.spy.restore(global.domUpdates)
  })

  it('should default to current categories to an empty array', () => {
    let round = new Round();
    expect(round.currentCategories.length).to.equal(0)
  })

  it('should default to current clues to an empty array', () => {
    let round = new Round();
    expect(round.currentClues.length).to.equal(0)
  })

  it('should default to inUseArr to an empty array', () => {
    let round = new Round();
    expect(round.inUseArr.length).to.equal(0)
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

  it('should grab 16 clues comment out line 89 on round.js', () => {
    let game = new Game();
    let round = new Round();
    game.parseData();
    round.grabCategories(game.data)
    round.grabClues();
    expect(round.currentClues.length).to.equal(16)
  })

  it('should change round', () => {
    let game = new Game();
    let round = new Round();
    game.parseData();
    round.grabCategories(game.data)
    round.grabClues();
    round.completedClues = 16;
    round.changeRound();
    expect(game.round).to.equal(2)
  })

  it('should reset the in use array when endRound is invoked', () => {
    let game = new Game();
    let round = new Round();
    game.parseData();
    round.grabCategories(game.data);
    game.endRound();
    expect(global.round.inUseArr.length).to.equal(0)
  })
})
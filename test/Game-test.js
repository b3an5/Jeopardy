const chai = require('chai');
const expect = chai.expect;
const Game = require('../js/Game.js');
global.Round = require('../js/Round.js')

describe('Game Class', () => {

  beforeEach(() => {
    chai.spy.on(global.domUpdates, ['displayCat'], () => true)
  })

  afterEach(() => {
    chai.spy.restore(global.domUpdates)
  })

  it('should start with round 3 being false', () => {
    let game = new Game();
    expect(game.round3).to.equal(false)
  })

  it('should parse data into an array of 10 objects', () => {
    let game = new Game();
    game.parseData();
    expect(game.data.length).to.equal(10)
  })
  
  // it('should reset the in use array when endRound is invoked', () => {
  //   let game = new Game();
  //   let round = new Round();
  //   game.parseData();
  //   round.grabCategories(game.data);
  //   game.endRound();
  //   expect(round.inUseArr.length).to.equal(0)
  // })


})
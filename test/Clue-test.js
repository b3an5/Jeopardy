const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies')
chai.use(spies);
const Clue = require('../js/Clue.js');

describe('Clue class', () => {

  it('should have an inital value of question of undefined', () => {
    let clue = new Clue();
    expect(clue.question).to.equal(undefined);
  })

  it('should have an initial value of answerplace of 0', () => {
    let clue = new Clue();
    expect(clue.answerplace).to.equal(0);
  })
  
  it('should have an inital value of player of 0', () => {
    let clue = new Clue();
    expect(clue.player).to.equal(0)
  })

  it('should have an inital value of guessCount of 0', () => {
    let clue = new Clue();
    expect(clue.guessCount).to.equal(0)
  })
})
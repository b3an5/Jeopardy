const chai = require('chai');
const expect = chai.expect;
const Player = require('../js/Player.js');

describe('Player Class', () => {
  
  it('should have a default name of watson', () => {
    let player = new Player();
    expect(player.name).to.equal('Watson')
  })

  it('should take in a name', () => {
    let player = new Player('John');
    expect(player.name).to.equal('John')
  })

  it('should start with a score of 0', () => {
    let player = new Player('John');
    expect(player.score).to.equal(0)
  })
})
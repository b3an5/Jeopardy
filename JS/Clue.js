class Clue {
  constructor() {
    this.question;
    this.answer; 
    this.player = 0;
  }
  checkAnswer() {
    let guessCount = 0;
    if( answer != input && player === 2) {
      // displey something to indicate next players turn
      player = 0;
    }else if ( answer != input) {
      // displey something to indicate next players turn
      player++
    }else /*( answer === input.toLowerCase()) */ {
      // displey something to indicate won and pick next value on board
    }
    
  }
  cluePopup(some) {
    this.question = some.question;
    this.answer = some.answer;
    let div = $(
      `<div class="popup">
        <p class="clue-value">${some.question}</p>
        <form class="clue-form">
          <label> What is 
            <input type="text" class="clue-input">?
          </label>
          <button class="clue-button">enter</button>
        </form>
      </div>`)
    $('#board').append(div);
    //start time
  } 

}


if (typeof module !== 'undefined') {
  module.exports = Clue;
}
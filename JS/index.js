let game = new Game()
let round;

$('.start-button').on('click', (e) => {
  e.preventDefault();
  game.init();
  domUpdates.splash();
  game.parseData();
  round = new Round()
  round.grabCategories(game.data);
  round.grabClues()
  round.displayClue() 
})

$('.cards-value').on('click', function(event) {
  let clue = new Clue;
   clue.cluePopup(round.currentClues[$('.cards-value').index($(event.target))]);
});
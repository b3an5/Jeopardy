let game = new Game();
let clue = new Clue();
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
  clue.cluePopup(round.currentClues[$('.cards-value').index($(event.target))]);
  clue.answerplace = $('.cards-value').index($(event.target));
});

$(window).on('click', (e) => {
  e.preventDefault();
 if ($(event.target).hasClass('clue-button')) {
  console.log($('.clue-input').val())
    clue.checkAnswer($('.clue-input').val());
}})
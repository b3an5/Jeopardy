let game = new Game();
let round;

$('.start-button').on('click', (e) => {
  e.preventDefault();
  game.init();
  domUpdates.splash();
  game.parseData();
  round = new Round()
  round.grabCategories(game.data);
})

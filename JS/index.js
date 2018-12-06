let game = new Game()
let board = new Board()
let round;

$('.start-button').on('click', (e) => {
  e.preventDefault();
  game.init();
  domUpdates.splash();
  game.parseData();
  round = new Round()
  round.grabCategories(game.data);
})

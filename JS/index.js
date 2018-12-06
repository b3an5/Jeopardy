//this file will just be in charge of logic that we have as methods in our classes triggered by event listeners
let game = new Game()


$('.start-button').on('click', (e) => {
  e.preventDefault();
  game.init();
  domUpdates.splash();
})

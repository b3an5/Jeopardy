//this file will just be in charge of logic that we have as methods in our classes triggered by event listeners
let game = new Game()
let board = new Board()
let round;


$('.start-button').on('click', (e) => {
  e.preventDefault()
  $('.form').css('display', 'none');
  $('#tv-frame').css('animation', 'tvframe 5s')
  game.init();
  setTimeout(() => {
    $('#splash-page').css('display', 'none')
  }, 2000)
  $('.hidden').css('display', 'block')
  game.parseData();
  round = new Round()
  round.grabCategories(game.data);
})

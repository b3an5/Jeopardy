let game = new Game();
let dailyDoubleClue;

let dailyDoubleSound = new Audio('./sound/DD.mp3');
let negSound = new Audio('./sound/negative.mp3');
let posSound = new Audio('./sound/positive.mp3');
let themeMusic = new Audio('./sound/theme.mp3');

function playLoopingAudio(theme) {
  theme.play();
  theme.addEventListener('ended', () => {
    theme.play();
  });
}

$('.start-button').on('click', (e) => {
  e.preventDefault();
  game.init();
  domUpdates.splash();
  domUpdates.backgroundBox();
  game.parseData();
  game.roundClass.grabCategories(game.data);
  game.roundClass.grabClues();
  game.roundClass.displayClue();
  playLoopingAudio(themeMusic);
})

$('.cards-value').on('click', function(event) {
  if (game.roundClass.currentClues[$('.cards-value').index($(event.target))].categoryId === true ) {
    dailyDoubleClue = game.roundClass.currentClues[$('.cards-value').index($(event.target))];
    game.clueClass.answerplace = $('.cards-value').index($(event.target));
    domUpdates.displayDailyDouble();
  } else {
    game.clueClass.cluePopup(game.roundClass.currentClues[$('.cards-value').index($(event.target))]);
    game.clueClass.answerplace = $('.cards-value').index($(event.target));
  }
});

$(window).on('click', (event) => {
  event.preventDefault();
  if ($(event.target).hasClass('clue-button')) {
    game.clueClass.checkAnswer($('.clue-input').val());
    game.roundClass.changeRound();
  }
})

$(window).on('click', (event) => {
  event.preventDefault();
  if ($(event.target).hasClass('dd-button')) {
    game.clueClass.takeInWager();
  }
})

$(window).on('click', (event) => {
  event.preventDefault();
  if ($(event.target).hasClass('round3-button')) {
    game.roundClass.checkAnswer();
  }
})

$('.reset').on('click', (event) => {
  event.preventDefault();
  game.reset();
})
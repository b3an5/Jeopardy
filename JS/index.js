let game = new Game();
let clue = new Clue();
let round;
let round3;
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
  round = new Round();
  round.grabCategories(game.data);
  round.grabClues();
  round.displayClue();
  playLoopingAudio(themeMusic);
})

$('.cards-value').on('click', function(event) {
  if (round.currentClues[$('.cards-value').index($(event.target))].categoryId === true ) {
    dailyDoubleClue = round.currentClues[$('.cards-value').index($(event.target))];
    clue.answerplace = $('.cards-value').index($(event.target));
    domUpdates.displayDailyDouble();
  } else {
    clue.cluePopup(round.currentClues[$('.cards-value').index($(event.target))]);
    clue.answerplace = $('.cards-value').index($(event.target));
  }
});

$(window).on('click', (event) => {
  event.preventDefault();
  if ($(event.target).hasClass('clue-button')) {
    clue.checkAnswer($('.clue-input').val());
    round.changeRound();
  }
})

$(window).on('click', (event) => {
  event.preventDefault();
  if ($(event.target).hasClass('dd-button')) {
    clue.takeInWager();
  }
})

$(window).on('click', (event) => {
  event.preventDefault();
  if ($(event.target).hasClass('round3-button')) {
    round3.checkAnswer();
  }
})

$('.reset').on('click', (event) => {
  event.preventDefault();
  game.reset();
})
let domUpdates = {
  splash() {
    $('.form').css('display', 'none');
    $('#tv-frame').css('animation', 'tvframe 5s');
    setTimeout(() => {
      $('#splash-page').css('display', 'none');
    }, 2000);
    $('.hidden').css('display', 'block');
  },
  displayNames() {
    for (let i = 0; i < 3; i++) {
      $(`#js-player${i + 1}-name`).text(game.players[i].name);
    }
  },
  displayScores() {
    for (let i = 0; i < 3; i++) {
      $(`#js-player${i + 1}-score`).text(game.players[i].score);
    }
  },
  displayTurn(index = 0) {
    $('h2').css('background-image', 'linear-gradient(to bottom right, #a9afc7, #4e5174)');
    $('h2').eq((index * 2) + 1 ).css('background-image', 'linear-gradient(to bottom right, #a9afc7, #ffa100');
    $('h2').eq(index * 2 ).css('background-image', 'linear-gradient(to bottom right, #a9afc7, #ffa100');
  },
  displayGame() {
    $('.title-section').css('animation', 'title 2s forwards')
    $('#one').css({'animation' : 'card 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both', 'animation-delay' : '3s'});
    $('#two, #five').css({'animation' : 'card 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both', 'animation-delay' : '3.2s'});
    $('#three, #six, #nine').css({'animation' : 'card 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both', 'animation-delay' : '3.4s'});
    $('#four, #seven, #ten, #thirteen').css({'animation' : 'card 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both', 'animation-delay' : '3.6s'});
    $('#eight, #eleven, #fourteen, #seventeen').css({'animation' : 'card 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both', 'animation-delay' : '3.8s'});
    $('#twelve, #fifteen, #eighteen').css({'animation' : 'card 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both', 'animation-delay' : '4s'});
    $('#sixteen, #nineteen').css({'animation' : 'card 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both', 'animation-delay' : '4.2s'});
    $('#twenty').css({'animation' : 'card 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both', 'animation-delay' : '4.4s'});
    setTimeout(() => {
      $('#podium').css('display', 'block');
    }, 2000 )
  },
  displayCat(cats) {
    $('#one').text(cats[0].split(/(?=[A-Z])/).join(' '));
    $('#two').text(cats[1].split(/(?=[A-Z])/).join(' '));
    $('#three').text(cats[2].split(/(?=[A-Z])/).join(' '));
    $('#four').text(cats[3].split(/(?=[A-Z])/).join(' '));
  },
  tearDownCard() {
    $('.popup').remove();
  },
  tearDownCardTime() {
    setTimeout(() => {
      $('.popup').remove();
    }, 4000)
  },
  rightAnswer() {
    setTimeout( () => {
      $('.check').css('display', 'block');
      posSound.play();
      themeMusic.volume = 0.6;
    }, 500)
    setTimeout(() => {
      $('.check').hide()
      themeMusic.volume = 1;
    }, 1500);
  },
  wrongAnswer() {
    $('.wrong').css('display', 'block');
    negSound.play();
    setTimeout(() => {
      $('.wrong').hide();
    }, 1000)
  },
  clueDisable(index) {
    $('.card-cover').eq(index).hide();
  },
  backgroundBox() {
    $('.box').each((index, box) => {
      let rand = (Math.random() * 10);
      $(box).css({'animation': 'boxanim 8s ease-in infinite', 'animation-delay': `-${rand}s`});
    })
  },
  displayWinner(player) {
    let div = $(`
    <div class="popup">
      <h1>CoNgRaTuLaTiOnS!!!!!</h1>
      <h1>${player.name}</h1>
      <h1>YoU WiN!!!!</h1>
    </div>`);
    $('body').append(div);
  },
  displayRound() {
    let div = $(`
      <div class="popup">
        <h1>Round</h1>
        <h1>${game.round}</h1>
      </div
      `);
    $('body').append(div);
    this.tearDownCardTime();
  },
  splashReset() {
    $('.form').css('display', 'block');
    $('#tv-frame').css('animation', 'none');
    $('#splash-page').css('display', 'block');
    $('.hidden').css('display', 'none');
    $('#podium').css('display', 'none');
    $('.card-cover').css('display', 'block');
    $('.form').css('display', 'inline-block');
    $('#start').css('display', 'block');
    $('.title-section').css('animation', 'none')
  },
  wagerRejection() {
    let div = $(`
      <div class="popup error">
        <h1>Please input valid wager</h1>
        <h1>valid wager is your points or highest point on the board</h1>
      </div
      `);
    $('body').append(div);
    setTimeout(() => {
      $('.error').remove();
    }, 2000);
  },
  displayCluePopup(some) {
    let div = $(
      `<div class="popup">
        <p class="clue-value">${some.question}</p>
        <form class="clue-form">
          <label  class="popup-label clue-label"> What is 
            <input type="text" class="clue-input">?
          </label>
          <button class="popup-button clue-button">enter</button>
        </form>
      </div>`);
    $('body').append(div);
  },
  displayRightAnswer() {
    let div = $(
      `<div class='popup'>
        <h4 class="answer-response">answer is</h4>
        <p class="answer-value">${game.roundClass.currentClues[game.clueClass.answerplace].answer}</p>
      </div>`
      );
    $('body').append(div);
    this.tearDownCardTime()
  },
  displayDailyDouble() {
    let div = $(
      `<div class='popup'>
        <h1>DAILY</h1>
        <h1>DOUBLE</h1>
        <input class='popup-input dd-input' typle ='text' >
        <button class='popup-button dd-button'>Enter</button>
      </div>`
      );
    $('body').append(div);
    dailyDoubleSound.play()
  },
  displayRoundThreeCard() {
    let div = $(
      `<div class="popup">
        <p class="clue-value">${game.roundClass.bonusQuestion.question}</p>
        <form class="clue-form">
          <label  class="wager-label"> player 1 Make Your Wager!
          <input type="text" class="player-1-wager-input">
          </label>
        <label  class="wager-label"> player 2 Make Your Wager!
          <input type="text" class="player-2-wager-input">
        </label>
        <label  class="wager-label"> player 3 Make Your Wager!
          <input type="text" class="player-3-wager-input">
        </label>
          <label  class="clue-label"> What is 
          <input type="text" class="player-1-clue-input">?
            <input type="text" class="player-2-clue-input">?
            <input type="text" class="player-3-clue-input">?
          </label>
          <button class="round3-button">enter</button>
        </form>
      </div>`);
    $('body').append(div);
  }
}
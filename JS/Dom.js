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
  displayGame() {
    $('#one').css({'animation' : 'card 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both', 'animation-delay' : '3s'})
    $('#two, #five').css({'animation' : 'card 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both', 'animation-delay' : '3.2s'})
    $('#three, #six, #nine').css({'animation' : 'card 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both', 'animation-delay' : '3.4s'})
    $('#four, #seven, #ten, #thirteen').css({'animation' : 'card 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both', 'animation-delay' : '3.6s'})
    $('#eight, #eleven, #fourteen, #seventeen').css({'animation' : 'card 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both', 'animation-delay' : '3.8s'})
    $('#twelve, #fifteen, #eighteen').css({'animation' : 'card 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both', 'animation-delay' : '4s'})
    $('#sixteen, #nineteen').css({'animation' : 'card 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both', 'animation-delay' : '4.2s'})
    $('#twenty').css({'animation' : 'card 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both', 'animation-delay' : '4.4s'})
    setTimeout(() => {
      $('#podium').css('display', 'block')
    }, 2000 )
  },
  displayCat(cats) {
    $('#one').text(cats[0]);
    $('#two').text(cats[1]);
    $('#three').text(cats[2]);
    $('#four').text(cats[3]);
  },
  tearDownCard() {
    setTimeout(() => {
      $('.popup').remove();
    }, 1000)

  },
  rightAnswer() {
    setTimeout( () => {
      $('#check').css('display', 'block');
      posSound.play();
      themeMusic.volume = 0.6
    }, 1000)
    setTimeout(() => {
      $('#check').hide()
      themeMusic.volume = 1
    }, 2000);
    //new div cover
  },
  wrongAnswer() {
    $('#check').css('display', 'block');
    negSound.play()
    setTimeout(() => {
      $('#check').hide();
    }, 1000)
  }
}
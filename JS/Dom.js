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
    $('#js-player1-name').text(game.players[0].name);
    $('#js-player2-name').text(game.players[1].name);
    $('#js-player3-name').text(game.players[2].name);
  },
  displayScores() {
    $('#js-player1-score').text(game.players[0].score);
    $('#js-player2-score').text(game.players[1].score);
    $('#js-player3-score').text(game.players[2].score);
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
  }
  // startTimer() {

  // }
}
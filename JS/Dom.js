let domUpdates = {

  displayNames() {
    $('#js-player1-name').text($('.js-player1-name-input').val())
    $('#js-player2-name').text($('.js-player2-name-input').val())
    $('#js-player3-name').text($('.js-player3-name-input').val())
  }
  displayScore() {
    $('#js-player1-score')
    $('#js-player2-score')
    $('#js-player3-score')
  }
}
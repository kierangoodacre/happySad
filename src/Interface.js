$(document).ready(function() {

  var emotion = new Emotion();

  $('#unknown').show();
  $('#smile').hide();
  $('#sad').hide();

  $('#submit-button').click (function(event) {
    event.preventDefault();
    emotion.userInput($('#input-text').val());
    $('#emotion').text(emotion.response);
    $('#input-text').attr('value', '');
    if ($('#emotion').text() === 'Happy'){
      $('#smile').show();
      $('#unknown').hide();
      $('#sad').hide();
    } else if ($('#emotion').text() === 'Sad'){
      $('#sad').show();
      $('#unknown').hide();
      $('#smile').hide();
    } else {
      $('#unknown').show();
      $('#sad').hide();
      $('#smile').hide();
    }
  });


});

describe('EmoBible', function(){

  describe('Interface', function(){

    beforeEach(function(){
      jasmine.getFixtures().fixturesPath = '..';
      loadFixtures('index.html');
    });

    it('Displays emotion as Unknown', function(){
      expect('#emotion').toContainText('Unknown');
    });

    it('Displays form for input', function(){
      var formValue = $('#input-text').attr('placeholder');
      expect(formValue).toEqual("Test Your Text");
    });

    it('Displays button for submit', function(){
      var buttonValue = $('#submit-button').attr('value');
      expect(buttonValue).toEqual('Submit');
    });

  });

  describe('Interface logic', function(){


    beforeEach(function(){
      jasmine.getFixtures().fixturesPath = '..';
      loadFixtures('index.html');
      appendSetFixtures('<script src="./src/Interface.js"></script>');
      $.holdReady(false);
    });

    it('Will return happy if 50% more happy words than sad', function(){
      $('#input-text').val('I am delighted it is a pleasant day and not miserable');
      $('#submit-button').click();
      expect($('#emotion').text()).toEqual('Happy');
    });

    it('Will return sad if 50% more sad words than happy', function(){
      $('#input-text').val('I am disappointed it is a pleasant day and not miserable');
      $('#submit-button').click();
      expect($('#emotion').text()).toEqual('Sad');
    });

    it('Will return unknown if not any happy or sad words', function(){
      $('#input-text').val('hello');
      $('#submit-button').click();
      expect($('#emotion').text()).toEqual('Unknown');
    });

  });

});

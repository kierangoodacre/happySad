describe('Emotion', function(){

    var emotion;

    beforeEach(function(){
      emotion = new Emotion();
    });

    describe('Default Status', function(){

      it('Will be unknown', function(){
        expect(emotion.response).toBe('Unknown');
      });

    });

    describe('Happy', function(){

      var happyArray = ["delight", "delighted", "delightful", "happy",
                       "glad", "joy", "joyful", "merry", "pleasant"];

      it('List of words', function(){
        expect(emotion._happyWords()).toEqual(happyArray);
      });

      it('Return number of words in a sentence', function(){
        expect(emotion._happySearch('I am delighted it is a pleasant day and not miserable')).toBe(2);
      });

      it('Return percentage comparison to sad', function(){
        expect(emotion._happyPercentage('I am delighted it is a pleasant day and not miserable')).toBe(100);
      });

    });

    describe('Sad', function(){

      var sadArray = ['disappointed', 'miserable', 'sad', 'sorrow', 'unhappy']

      it('List of words', function(){
        expect(emotion._sadWords()).toEqual(sadArray);
      });

      it('Return number of words in a sentence', function(){
        expect(emotion._sadSearch('I am delighted it is a pleasant day and not miserable')).toBe(1);
      });

      it('Return percentage comparison to happy', function(){
        expect(emotion._sadPercentage('I am delighted it is a pleasant day and not miserable')).toBe(-50);
      });

    });

    describe('Emotion Comparison',   function(){

      it('Response happy if number is 50% more than sad', function(){
        emotion.userInput('I am delighted it is a pleasant day and not miserable');
        expect(emotion.response).toBe("Happy");
      });

      it('Response sad if number is 50% more than happy', function(){
        emotion.userInput('I am disappointed it is a pleasant day and not miserable');
        expect(emotion.response).toBe("Sad");
      });

    });

});

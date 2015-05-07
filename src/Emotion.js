var Emotion = function(){
  this.response = "Unknown";
};

Emotion.prototype.userInput = function(sentence){
  return this._happySadComparison(sentence);
};

//private methods

Emotion.prototype._happySadComparison = function(sentence){
  if (this._happyPercentage(sentence) >= 50) {
    this.response = "Happy"
  } else if (this._sadPercentage(sentence) >= 50){
    this.response = "Sad"
  } else {
    this.response = "Unknown"
  }
};

Emotion.prototype._happySearch = function(sentence){
  var happyArray = [];
  var stringArray = sentence.split(" ");
  for (var i=0; i < this._happyWords().length; i++){
    for (var j=0; j < stringArray.length; j++){
      if ( this._happyWords()[i] === stringArray[j]){
        happyArray.push( this._happyWords()[i] );
      }
    }
  }
  return happyArray.length
};

Emotion.prototype._happyPercentage = function(sentence){
  return (((this._happySearch(sentence)/this._sadSearch(sentence)) - 1) * 100)
};

Emotion.prototype._sadSearch = function(sentence){
  var sadArray = [];
  var stringArray = sentence.split(" ");
  for (var i=0; i < this._sadWords().length; i++){
    for (var j=0; j < stringArray.length; j++){
      if ( this._sadWords()[i] === stringArray[j]){
        sadArray.push( this._sadWords()[i] );
      }
    }
  }
  return sadArray.length
};

Emotion.prototype._sadPercentage = function(sentence){
  return (((this._sadSearch(sentence)/this._happySearch(sentence)) - 1) * 100)
};

Emotion.prototype._happyWords = function(){
  return ['delight', 'delighted', 'delightful', 'happy', 'glad', 'joy', 'joyful', 'merry', 'pleasant'];
};

Emotion.prototype._sadWords = function(){
  return ['disappointed', 'miserable', 'sad', 'sorrow', 'unhappy'];
};

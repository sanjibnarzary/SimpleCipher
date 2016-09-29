var Caesar = function(){
  // this.str = str;
  // this.key = key;
  this.alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
                  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' '];
}

Caesar.prototype.encrypt = function(text,key){
  var str = text.toUpperCase();
  //log(str);

  var m=0, n = 0, res = "";
  for(i=0;i<str.length;i++){
    m = this.alphabets.indexOf(str.charAt(i));
    n = (m+key)%27;
    res += this.alphabets[n];
  }
  return res;
}

Caesar.prototype.decrypt = function(text,key){
  var str = text.toUpperCase();
  //log(str);

  var m=0, n = 0, res = ""
  for(i=0;i<str.length;i++){
    m = this.alphabets.indexOf(str.charAt(i));
    n = (m-key)%27;
    res += this.alphabets[n];
  }
  return res;
}

module.exports = Caesar;

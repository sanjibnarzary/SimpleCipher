/**
* Program: Caesar Cipher Nodejs Library module
* Name: Sanjib Narzary
* Email: <san@cit.ac.in>
* Organization: CIT Kokrajhar
* Website: http://www.cit.ac.in/CSE
*
**/

// This Caesar class has only one property that is array of aplhabets and inspect
// it has two prototype function encrypt and decrypy
// This is a Caesar class
var Caesar = function(){
  // Lets create the allowed characters for Caesar cipher. Here
  // I have created 27 character array as it was only 26 in the
  // book. I have added one more character to support for space :)
  this.alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
                  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' '];
}
// The function for encrypting message. This is a function which takes
// two arguments first parameter is the plaintext to be encrypted and the second
// parameter is the secret key. this function will return the encrypted message

Caesar.prototype.encrypt = function(text,key){
  // we dont support lowercase so lets make upper case
  // you may implement yourself to support both lower case and upper case

  var str = text.toUpperCase();
  //initialize some variables
  var m=0, n = 0, res = "";
  for(i=0;i<str.length;i++){
    m = this.alphabets.indexOf(str.charAt(i));
    n = (m+key)%27;
    res += this.alphabets[n];
  }
  return res;
}
//The function for decrypting any encrypted message which are encrypted
//with caesar cipher. This function accepts two arguments, first argument
//is the encrypted message and the second parameter is the secret key
//After decrypting this function will return original plaintext message

Caesar.prototype.decrypt = function(text,key){
  //Making the upper cases
  var str = text.toUpperCase();
  //initialize variables to be used in the for loops
  var m=0, n = 0, res = ""
  for(i=0;i<str.length;i++){
    m = this.alphabets.indexOf(str.charAt(i));
    n = (m-key)%27;
    res += this.alphabets[n];
  }
  return res;
}

//export the Caesar class as module so that we can import it using required or import
module.exports = Caesar;

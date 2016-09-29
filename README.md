# SimpleCipher
Here is some NodeJS implementation of Simple Cipher technique discussed in the William Stalling book Cryptography and Network Security.
## Structure of the project
This project has a folder named **library** which consists of library
function implementation. All the Simple Cipher technique will have
separate file. Example Caesar cipher implementation will have caesar.js file.

## How to use
Before using any of the code described here make sure you have the NodeJS installed on your machine. If you do not have nodejs installed please install it.

To install nodejs on Ubuntu its pretty straight forward just you have to type `$sudo apt-get install nodejs`

To demonstrate the code examples index.js have all the implementation. First of all clone the github project in your local machine

`$git clone https://github.com/sanjibnarzary/SimpleCipher.git`

`$cd SimpleCipher`

`$nano index.js`


If you have something to edit you can edit else leave as it is. Now type

`$node index.js`

It will run with the default values. you can now play around with it or implement your own code which extends the feature of Caesar Cipher.

**Create a file** example.js and write the following
```
var log = console.log;
var Caesar = require('./library/caesar.js');
var c = new Caesar();
var o = c.encrypt('Hello',5);
var d =c.decrypt(o,5);
log(o);
log(d);
```

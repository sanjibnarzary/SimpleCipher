var log = console.log;
var Caesar = require('./library/caesar.js')
var c = new Caesar();
var o = c.encrypt('Hello',5);
var d =c.decrypt(o,5);
log(o)
log(d)

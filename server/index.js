var JsDiff = require('diff');

var one = 'beep boop';
var other = 'beep boob blah';

var diffStr = JsDiff.createPatch('s', one, other);

debugger
console.log(JsDiff.applyPatch(one, diffStr))
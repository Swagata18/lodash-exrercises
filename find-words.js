var fs = require('fs');
var _ = require('lodash');

var words = fs.readFileSync('/usr/share/dict/words').toString().split("\n");

var outputResult = function(name, finder) {
};

outputResult("First word that has the string 'foo' in it", function(words) {
});

outputResult("First five-letter word", function(words) {
});

outputResult("Number of three-letter words", function(words) {
});

outputResult("The total number of characters in the words", function(words) {
});

outputResult("The most common word length", function(words) {
});

outputResult("The five most common characters", function(words) {
});

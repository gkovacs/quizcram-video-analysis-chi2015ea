// Generated by LiveScript 1.2.0
(function(){
  var root, fs, ref$, sum, average, readFileLines, readResults;
  root = typeof exports != 'undefined' && exports !== null ? exports : this;
  fs = require('fs');
  ref$ = require('prelude-ls'), sum = ref$.sum, average = ref$.average;
  readFileLines = function(filename){
    return fs.readFileSync(filename, 'utf-8');
  };
  readResults = function(filename1, filename2){
    var output, results1, results2;
    output = [];
    results1 = readLines(filename1);
    return results2 = readlines(filename2);
  };
}).call(this);
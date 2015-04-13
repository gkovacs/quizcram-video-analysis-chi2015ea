// Generated by LiveScript 1.3.1
(function(){
  var firsthalf_text, firsthalf, i$, ref$, len$, line, ref1$, percent, user, secondhalf_text, secondhalf, exec, ttest_rel, average, conditions, quizcram_results, invideo_results, firsthalf_results, secondhalf_results, condition, score1, score2;
  firsthalf_text = '6 minh1\n3 angelicachavez\n6 nathanjones1\n6 sakshisundaram1\n5 angilewis1\n5 marcellaweiss1\n4 dionnejackson\n3 johnnyxu\n7 jiawenli\n3 annereynolds\n5 lorant\n5 dinianapiekutowski\n2 emilytruong\n5 celinajackson\n7 crystalromero\n4 yanyan\n7 michelleloya\n6 dorondorfman\n7 ngocbui\n5 jonathangriffin\n6 sydneyosifeso\n4 sarahsimmons';
  firsthalf = {};
  for (i$ = 0, len$ = (ref$ = firsthalf_text.split('\n')).length; i$ < len$; ++i$) {
    line = ref$[i$];
    ref1$ = line.split(' '), percent = ref1$[0], user = ref1$[ref1$.length - 1];
    firsthalf[user] = parseFloat(percent);
  }
  secondhalf_text = '6  minh1\n7 angelicachavez\n4 marcellaweiss1\n6 angilewis1\n5 johnnyxu\n6 jiawenli\n6 annereynolds\n6 lorant\n6 dinianapiekutowski\n7 emilytruong\n7 crystalromero\n5 yanyan\n7 michelleloya\n1 dorondorfman\n4 celinajackson\n5 ngocbui\n3 jonathangriffin\n6 sydneyosifeso';
  secondhalf = {};
  for (i$ = 0, len$ = (ref$ = secondhalf_text.split('\n')).length; i$ < len$; ++i$) {
    line = ref$[i$];
    ref1$ = line.split(' '), percent = ref1$[0], user = ref1$[ref1$.length - 1];
    secondhalf[user] = parseFloat(percent);
  }
  console.log(firsthalf);
  console.log(secondhalf);
  exec = require('shelljs').exec;
  ttest_rel = function(list_a, list_b){
    return exec("python ttest_rel.py '" + JSON.stringify(list_a) + "' '" + JSON.stringify(list_b) + "'").output;
  };
  average = require('prelude-ls').average;
  conditions = require('./conditionsv2').conditions;
  quizcram_results = [];
  invideo_results = [];
  firsthalf_results = [];
  secondhalf_results = [];
  for (user in conditions) {
    condition = conditions[user];
    score1 = firsthalf[user];
    score2 = secondhalf[user];
    if (score1 == null) {
      console.log(user);
    }
    if (score2 == null) {
      console.log(user);
    }
    firsthalf_results.push(score1);
    secondhalf_results.push(score2);
    switch (condition) {
    case 0:
      quizcram_results.push(score2);
      invideo_results.push(score1);
      break;
    case 1:
      quizcram_results.push(score1);
      invideo_results.push(score2);
    }
  }
  console.log(quizcram_results);
  console.log(invideo_results);
  console.log('quizcram:');
  console.log(average(quizcram_results));
  console.log('invideo:');
  console.log(average(invideo_results));
  console.log('ttest:');
  console.log(ttest_rel(quizcram_results, invideo_results));
  console.log('part1:');
  console.log(average(firsthalf_results));
  console.log('part2:');
  console.log(average(secondhalf_results));
  console.log('ttest:');
  console.log(ttest_rel(firsthalf_results, secondhalf_results));
}).call(this);

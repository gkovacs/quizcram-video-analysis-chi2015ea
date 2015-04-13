// Generated by LiveScript 1.3.1
(function(){
  var firsthalf_text, firsthalf, i$, ref$, len$, line, ref1$, percent, user, secondhalf_text, secondhalf, exec, ttest_rel, average, conditions, quizcram_results, invideo_results, firsthalf_results, secondhalf_results, condition, score1, score2;
  firsthalf_text = '0.7498888889  angelicachavez\n0.8332222222  minh1\n0.05555555556  nathanjones1\n0.09255555556  angilewis1\n0.6295555556  marcellaweiss1\n0.9628888889  sakshisundaram1\n0.5925555556  johnnyxu\n0.8147777778  jiawenli\n0.4626666667  lorant\n0.2406666667  annereynolds\n0.9444444444  emilytruong\n0.7222222222  dinianapiekutowski\n0.1666666667  dorondorfman\n0.1758888889  yanyan\n0.6111111111  celinajackson\n0.8611111111  crystalromero\n0.6294444444  michelleloya\n1  ngocbui\n0.6201111111  jonathangriffin\n0.5462222222  sydneyosifeso\n0.7035555556  sarahsimmons';
  firsthalf = {};
  for (i$ = 0, len$ = (ref$ = firsthalf_text.split('\n')).length; i$ < len$; ++i$) {
    line = ref$[i$];
    ref1$ = line.split(' '), percent = ref1$[0], user = ref1$[ref1$.length - 1];
    firsthalf[user] = parseFloat(percent);
  }
  secondhalf_text = '0.5118571429 angelicachavez\n1 minh1\n0.3094285714  nathanjones1\n0.7498571429  angilewis1\n0.369 marcellaweiss1\n0.5831428571  sakshisundaram1\n0.5 johnnyxu\n0.3571428571  jiawenli\n0.5714285714  lorant\n0.6784285714  annereynolds\n0.7261428571  emilytruong\n0.5118571429  dinianapiekutowski\n0.1428571429  dorondorfman\n0.3808571429  yanyan\n0.3808571429  celinajackson\n0.7261428571  crystalromero\n0.6665714286  michelleloya\n0.8571428571  ngocbui\n0.4404285714  jonathangriffin\n0.5118571429  sarahsimmons\n0.7141428571  sydneyosifeso';
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

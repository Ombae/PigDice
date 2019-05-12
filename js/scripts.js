var output = [];
var initScore = 0;

function roll() {
  var dice = Math.floor(Math.random() * 6) + 1;
  var score = document.getElementById("score").innerHTML = dice;
  var totalScore = initScore += dice;
  output.unshift(score);
  console.log(output);

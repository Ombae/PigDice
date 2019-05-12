var output = [];
var initScore = 0;

function roll() {
  var dice = Math.floor(Math.random() * 6) + 1;
  var score = document.getElementById("score").innerHTML = dice;
  var totalScore = initScore += dice;
  output.unshift(score);
  console.log(output);

  if (totalScore >= 100) {
    $(document).ready(function() {
      $("#player1").toggle(2000);
      $("#player1").fadeOut(2000);
      $("#win1").slideDown(2000);
    })
  } else {
    if (dice == 1) {
      $(document).ready(function() {
        output.length = 0;
        $("#player1").fadeOut(2000);
        $("#alert1").fadeIn();
      })
    } else {
      document.getElementById("roll1").innerHTML = totalScore;
    }
  }
}
function roll2() {
  var dice2 = Math.floor(Math.random() * 6) + 1;
  var score = document.getElementById("score2").innerHTML = dice2;
  var newScore = initScore += dice2;
  document.getElementById("roll2").innerHTML = newScore;

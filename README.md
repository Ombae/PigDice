# PIG DICE
#### An Application that allows a user to play the pig dice game, 13/05/2019.
#### By **SETH OMBAE**

## Description
This pig dice game lets a user roll dice and cumulates the total score for the specific player.
The player whose score reaches 100 first wins the game.

## Setup/Installation Requirements
* A working computer.
* A web browser-preferably chrome.
* A working internet connection.
* Open your browser and enter this link to access the landing page of the app.. https://ombae.github.io/PigDice
* Click on start game then roll the dice.
* Let the next player roll dice after three rolls or when you get a one.

##BDD
Below is a BDD table that shows expected behaviour of various input data and their expected output.

<table>
  <tr>
    <th>BEHAVIOUR</th>
    <th>INPUTS</th>
    <th>OUTPUT</th>
  </tr>
  <tr>
  <td>Player Rolls the Dice</td>
  <td>Get a score (1 - 6)</td>
  <td>Show Score</td>
  </tr>
  <tr>
  <td>Player Rolls Dice Again</td>
  <td>Give player second score</td>
  <td>Show total score</td>
  </tr>
  <tr>
  <td>Player Rolls Dice Again</td>
  <td>Give player third score</td>
  <td>Show new total cummulated score</td>
  </tr>
  <tr>
    <td>PLayer Holds or Pass Dice</td>
    <td>Maintain Last score</td>
    <td>Show the total score</td>
  </tr>
  <tr>
    <td>PLayer reaches score 100</td>
    <td>Show Total Score</td>
    <td>PLayer Wins Game</td>
  </tr>
</table>

## Known Bugs
This app currently has no known bugs with this app at this stage of development. Should one come across a bug, kindly give feedback.

## Technologies Used
This app has been coded using three main languages: HTML, CSS, Javascript and JQUERY.

## Support and contact details
In case you want to contribute to this project or have any queries then please reach me at ombaejr@gmail.com

### License
Kindly check the link to the MIT license for this project https://github.com/Ombae/PigDice/blob/master/LICENSE
Copyright (c) 2019 Seth Ombae.

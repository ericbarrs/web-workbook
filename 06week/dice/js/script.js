var dieChar = ["", "&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"]

function roll() {
document.getElementById("dice").innerHTML = "";
for (a=0; a<5; a++) {
var roll = Math.floor(Math.random()*6)+1;
document.getElementById("dice").innerHTML += "<span class='die' data-roll='"+roll+"'>"+dieChar[roll]+"</span>";
}

report();
}

roll();

//////////////////////////////////////////////////////
// Add code here that uses loops and conditional statements
// to determine if any of the following cases are true:
//
function report() {
var pair = 0;
var pairOne = 0;
var pairTwo = 0;
var fullHouse = false;
var numberOfDice = 0;
var moreThanThree = 0;
var smallStraight = false;
var largeStraight = false;
var six = 6;
var one = 1;
document.getElementById("report").innerHTML = ""; // clear out the report box
let diceHtml = document.getElementsByClassName('die'); // this puts all the individual die HTML elements in diceHtml
for (var dieVal = 1; dieVal < 7; dieVal++) { // we set up a nested loop, first we check for all the 1s, then 2s, etc
let howManyDice = 0; // we zero out our counter

for (var die = 0; die < 5; die++) { // we create the inner loop that cycles through the rolled dice
if (dieVal == diceHtml[die].dataset.roll) { // we check if the rolled die is equal to the one's we're counting
howManyDice++; // if so, we add one to the count

}
}//end of second loop
if (howManyDice===2) {
// we check after the counting is done if it is equal to '2'
// document.getElementById("report").innerHTML += "There are a pair of "+dieVal+"s<br>"; // if yes, we report a pair
pair++;
//When a pair has been count it will save the first die value
if (pair === 1){
pairOne = dieVal;
pairTwo = 0;
}
//When the increase to 2 the second value is saved
if (pair === 2){
pairTwo = dieVal;
}
}
if (howManyDice > 2){
  numberOfDice = howManyDice;
  moreThanThree = dieVal
}

} //end of main loop
if (numberOfDice ===0){
for (var die = 0; die < 5; die++) { // we create the inner loop that cycles through the rolled dice
if (six == diceHtml[die].dataset.roll){ // we check if the rolled die is equal to 6
largeStraight = true;
}
}
for (var die = 0; die < 5; die++) { // we create the inner loop that cycles through the rolled dice
if (one == diceHtml[die].dataset.roll){ // we check if the rolled die is equal to 1
smallStraight = true;
}
}
}
// three of dice have the same points, like 2 4 5 4 4 - called three;
if (numberOfDice ===3 && pair ===0){
document.getElementById("report").innerHTML += "!!You have 3 of a Kind!! You have three "+moreThanThree+"s<br>"; // if yes, we report a three of a kind
}
// pair and three at once, like 1 6 6 1 6 - called full-house;
else if (numberOfDice ===3 && pair ===1){
document.getElementById("report").innerHTML += "You have a Full House!!! You have three "+moreThanThree+"s and a Pair "+pairOne+"s<br>"; // if yes, we report a Full House
fullHouse = true;
}
// four of dice have the same points, like 1 4 1 1 1 - called four;
else if(numberOfDice ===4){
document.getElementById("report").innerHTML += "!!!!You have a Four of a kind!!!! Four "+moreThanThree+"s <br>"; // if yes, we report a four of a Kind
}
// all five dice have the same points, like 2 2 2 2 2 - called yacht;
else if(numberOfDice ===5){
document.getElementById("report").innerHTML += "!!!!!Yacht!!!!! Five "+moreThanThree+"s <br>"; // if yes, we report a Yacht
}
// sequence from 1 to 5, like 2 4 3 5 1 - called small-straight;
// sequence from 2 to 6, like 6 3 4 2 5 - called big-straight.

// two of dice have the same points, like 3 6 5 6 1 - called pair: example solved for you. Complete the other cases below:
else  if(pair ===1 && (fullHouse === false)){
document.getElementById("report").innerHTML += "There are a pair of "+pairOne+"s<br>"; // if yes, we report a pair
}
// two pairs at once, like 3 6 5 3 5 - called two-pairs;
else if(pair ===2){
document.getElementById("report").innerHTML += "There are two pairs "+pairOne+"s and "+pairTwo+"s<br>"; // if yes , we report 2 pairs
}
else if(smallStraight === true && largeStraight === false){
  document.getElementById("report").innerHTML += "You have a !!!Small Straight!!!<br>"
}
else if(largeStraight === true && smallStraight === false){
  document.getElementById("report").innerHTML += "You have a !!!Large Straight!!!<br>"
}

// report the results in the div with the ID 'report'.
report();
//resets the pair
pairOne = 0;
pairTwo = 0;
pair = 0;
fullHouse = false;
numberOfDice = 0;
moreThanThree = 0;
smallStraight = false;
largeStraight = false;
}

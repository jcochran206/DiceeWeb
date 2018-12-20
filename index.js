//random number generator

// condensed way
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 - 6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //
//dice Image random
var randomDiceImg = "dice" + randomNumber1 + ".png"; // dice1 to dice6
var randomDiceImg2 = "dice" + randomNumber2 + ".png"; //dice 1 to dice 6
// document source
var randomImageSource = "images/" + randomDiceImg;
var randomImageSource2 = "images/" + randomDiceImg2;

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

//set images with selector
image1.setAttribute("src", randomImageSource);
image2.setAttribute("src", randomImageSource2);

//Heading changed
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHtml = "Player1 Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHtml = "Player 2 Wins";
} else {
  document.querySelector("h1").innerHtml = "Draws";
}

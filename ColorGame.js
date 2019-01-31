var numberOfSquare = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();


function init() {
	setUpModeButton();
	setUpSquare();
}
function setUpSquare() {
		for (var i = 0; i < squares.length; i++) {
		// add click listener to squares
		squares[i].addEventListener("click", function() {
		// grab color
		var clickedColor = this.style.background; 
		// compare colors
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?"
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	})
	}
	reset();
}
function setUpModeButton() {
		for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent == "Easy") {
			numberOfSquare = 3
		} else {
			numberOfSquare = 6
		}
		reset();
})
}
}
function reset() {
	// generate all new colors
	colors = generateRandomColor(numberOfSquare);
	// pick a new random color from array
	pickedColor = pickRandomColor();
	// change color Display
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		squares[i].style.background = colors[i]; 
	}
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New colors";
}

resetButton.addEventListener("click", function(){
	reset();
})
// change 6 squares color to the right one
function changeColors(correctColor) {
for (var i = 0; i < colors.length; i++) {
	squares[i].style.background = correctColor;
}
}
function pickRandomColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColor(number) {
// make an array
	var colorArr = [] 
//add number random colors to array
	for(var i = 0; i < number; i++) {
		colorArr.push(randomColor());
//get random color and push into an array 
}
// return that array
	return colorArr; 
}
function randomColor() {
// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256)
// pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256)
// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256)
	return "rgb(" + r + ", " + g + ", " + b + ")"
}

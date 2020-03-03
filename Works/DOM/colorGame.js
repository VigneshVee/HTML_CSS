
/*var colors = [
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, )",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"
]*/

//var colors = generateRandomColors(6);
var colors = [] ;
var numColors = 6;
var pickedColor;

var squares = document.querySelectorAll(".square");
//var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
/*var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");*/

var modeButtons = document.querySelectorAll(".mode");

init();

function init(){    
    setUpModeButton();
    setUpSquares();
    reset();
}


function setUpSquares(){
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];

        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;

            if (pickedColor === clickedColor){
                messageDisplay.textContent = "Correct!!!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }

}

function setUpModeButton(){
    //mode button event listener
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numColors = 3: numColors = 6; 
            reset();
        });    
    }
}

function reset(){
    colors = generateRandomColors(numColors);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]){
            squares[i].style.display = "block";    
            squares[i].style.backgroundColor = colors[i];    
        } else {
            squares[i].style.display = "none";    
        }
    }
    h1.style.backgroundColor = "steelblue";   
}


/*easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numColors = 3;
    colors = generateRandomColors(numColors);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
	if (colors[i]) {
		squares[i].style.backgroundColor = colors[i];
	} else {
		squares[i].style.display = "none";
	}
	}
});



hardBtn.addEventListener("click", function(){
hardBtn.classList.add("selected");
easyBtn.classList.remove("selected");
numColors = 6;
colors = generateRandomColors(numColors);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
}
});
*/

resetButton.addEventListener("click", function(){
   reset();
 /*colors = generateRandomColors(numColors);
 pickedColor = pickColor();
 colorDisplay.textContent = pickedColor;
 messageDisplay.textContent = "";
 this.textContent = "New Colors";
for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	} 
   h1.style.backgroundColor = "steelblue";*/
});

//colorDisplay.textContent = pickedColor;


function changeColors(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb("+ r +", " + g + ", " + b + ")";

}
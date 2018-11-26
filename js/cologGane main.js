//variables
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDispaly = document.getElementById("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var head_background = document.querySelector(".head-section");
var resetButton = document.querySelector("#reset");
var tick = document.querySelector(".tick");
var preload = document.querySelector(".preload");

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(6);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display
    colorDisplay.textContent = pickedColor;
    //change colors of squeres
    for (var i = 0; i < squares.length; i++) {
        //change each color on correct one
        squares[i].style.backgroundColor = colors[i];
    }
    head_background.style.backgroundColor = "#d32f2f";
    this.textContent = "new colors";
    messageDisplay.textContent = "";
    tick.style.display = "none";
    preload.style.display = "block";
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add colors to squares
    squares[i].style.backgroundColor = colors[i];

    //listeners for squares
    squares[i].addEventListener("click", function(){
        //grab color
        var clickedColor = this.style.backgroundColor;
        //compare colors to picked
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct :)";
            changeColors(clickedColor);
            head_background.style.background = clickedColor;
            resetButton.textContent = "play again ?";
            tick.style.display = "block";
            preload.style.display = "none";
        }
        else {
            this.style.background = "#f5f5f5";
            messageDisplay.textContent = "Try Again ;P";
        }
    });
}





//functions
function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        //change each color on correct one
        squares[i].style.backgroundColor = color;
    }
}

function pickColor () {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = []
    //repeat num times
    for(var i = 0; i < num; i++){
        //get random color and push into arr
        arr.push(randomColor())        
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick rgb 0 - 255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";

}
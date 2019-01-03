var numSquares = 6;
var color = [];
var pickedColor;
var squares  =document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message  = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton  =document.querySelector("#reset");
var modeButtons  = document.querySelectorAll(".mode");

init();

function init(){
  // mode buttons event listeners
  setUpModeButtons();
  // checking the result and  assigning the color
  setUpSquares();
   reset();
}

function setUpSquares(){
  for(var i=0; i<squares.length; i++){
    squares[i].addEventListener("click" , function(){
      var clickedColor = this.style.backgroundColor;
      if(clickedColor===pickedColor){
         message.textContent = "Correct!";
         message.style.color="#009432";
         changeColors(clickedColor);
         resetButton.textContent = "Play Again?"
      } else{
        this.style.backgroundColor  = "#EEEEEE";
        message.textContent = "Try Again";
        message.style.color="#EA2027";
      }
    });
  }
}

function setUpModeButtons(){
  for(var i =0;i<modeButtons.length;i++){
    modeButtons[i].addEventListener("click" , function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");

      this.classList.add("selected");
      this.textContent === "Easy"? numSquares=3:numSquares=6;
      reset();
    });
  }
}

function reset(){
  color = generateRandomColor(numSquares);
  pickedColor = pickColor();
  message.textContent ="";
  resetButton.textContent = "New Colors"
  colorDisplay.textContent = pickedColor;
  for(var i =0;i<squares.length;i++){
    if (color[i]) {
        squares[i].style.display = "block";
      squares[i].style.backgroundColor = color[i];
    } else {
      squares[i].style.display = "none";
    }
  }
   h1.style.backgroundColor = "#212121";
}

resetButton.addEventListener("click" ,function(){
   reset();
});

function changeColors(color){
  for(var i =0;i<squares.length;i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random()*color.length);
  return color[random];
}

function generateRandomColor(num){
  var arr =[];
  for(var i=0;i<num;i++){
    arr.push(randomColor());
}
  return arr;
}

function randomColor(){
  var r =Math.floor(Math.random()*256);
  var g =Math.floor(Math.random()*256);
  var b =Math.floor(Math.random()*256);
  return "rgb("+ r +", "+ g +", "+ b +")";

}

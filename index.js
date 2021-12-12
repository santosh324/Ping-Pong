let barObj1 = {
  x:0,
  y: 50,
  width:10,
  height:40
};

let barObj2 = {
  x:290,
  y: 50,
  width:10,
  height:40
};

let cirObj = {
  x: 130,
  y: 75
};

let canvasMeasure = {
  width:1000,
  height:600
}

let keyPress =  true;
let gameStart = true;
let can, draw,speedX = 1,speedY = 0;
let direction = "toRight";


//creating canvas
function canvas(){

if(gameStart){
 can = document.getElementById("table");
 draw = can.getContext("2d");  
 draw.fillStyle = "lightgreen"
 draw.fillRect(0,0,canvasMeasure.width,canvasMeasure.height)
 renderObject()
}
}

//making side paddles or rectangles
function renderObject(){    

draw.fillStyle = "red";
draw.fillRect(barObj1.x, barObj1.y, barObj1.width, barObj1.height);
draw.fillRect(barObj2.x, barObj2.y, barObj2.width, barObj2.height);

}

//making circle
function renderCircle() {
  setTimeout(function(){ 
    if(gameStart){
  canvas()
  cirObj.x = cirObj.x + speedX
  cirObj.y = cirObj.y + speedY

  if(cirObj.x <= 0 || cirObj.x >= 300){
    gameStart = false;
    alert("Game Over!")
  }

  //if ball touched left bar that mean ball coming to left direction is toLeft
  if(direction == "toLeft" && cirObj.x == 15 && barObj1.y<50){
    direction = "toRight";
    speedX =  parseInt(Math.random()*2+1)*5
    speedY = -parseInt(Math.random()*2+1)*5
  }

  if(direction == "toLeft" && cirObj.x == 15 && barObj1.y>50){
    direction = "toRight";
    speedX =  parseInt(Math.random()*2+1)*5
    speedY = -parseInt(Math.random()*2+1)*5
  }

  //if ball hit the roof and going to right direction
  if(direction == "toRight" && cirObj.y == 5){
    direction = "toRight"
    speedY = parseInt(Math.random()*2+1)*5
    speedX = parseInt(Math.random()*2+1)*5
  }
 // if ball hit the floor and going to right direction
  if(direction == "toRight" && cirObj.y == 145){
    direction = "toRight"
    speedY = -parseInt(Math.random()*2+1)*5
    speedX = parseInt(Math.random()*2+1)*5
  }

  //if ball hit right bar and coming from right direction 
  if(direction == "toRight" && cirObj.x == 285 && barObj1.y<50){
    direction = "toLeft";
    speedX =  -parseInt(Math.random()*2+1)*5
    speedY =  parseInt(Math.random()*2+1)*5
  }

  if(direction == "toRight" && cirObj.x == 285 && barObj1.y>50){
    direction = "toLeft";
    speedX =  -parseInt(Math.random()*2+1)*5
    speedY =  -parseInt(Math.random()*2+1)*5
  }

  //if ball hit the roof and going to left direction
  if(cirObj.y==5 && direction == "toLeft"){
    direction = "toLeft";
    speedY = parseInt(Math.random()*2+1)*5
    speedX = -parseInt(Math.random()*2+1)*5
  }

  //if ball hit the floor and going to the left direction
  if(cirObj.y==145 && direction == "toLeft"){
    direction = "toLeft";
    speedY = -parseInt(Math.random()*2+1)*5
    speedX = -parseInt(Math.random()*2+1)*5
  }

  draw.fillStyle = "black";
  draw.beginPath();
  draw.arc(cirObj.x, cirObj.y, 5, 0, 2 * Math.PI, false)
  draw.fill();

  renderCircle()
}
     }, 10);

}



//eventlistener for keydown or can say key hold, function keep repeating untill key is in hold
document.addEventListener("keydown",function(e){
  if(e.code == "ArrowUp" && barObj1.y>0 && barObj2.y>0){    
    keyHoldUp()    
  }

  if(e.code == "ArrowDown" && barObj1.y<110 && barObj2.y<110){  
    keyHoldDown()
  }
  // clearCanvas()
  canvas();
  // renderObject();  
  // main();
})

function keyHoldUp(){
  barObj1.y = barObj1.y - 5
  barObj2.y = barObj2.y - 5
}   

function keyHoldDown(){
  barObj1.y = barObj1.y + 5
  barObj2.y = barObj2.y + 5
}

document.addEventListener("keydown",function(e){

})

canvas()
renderCircle()

var player1;
var position;
var database;
var form,player,game;
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
 player1  = createSprite(displayWidth/2,displayHeight/2,30,30)
 var playerPosition  = database.ref("player/position")
 playerPosition.on("value",readPosition)
}


function draw(){
  background(mouseX,mouseY,mouseX/mouseY);
 
  drawSprites ()
}
function readPosition(data){
  position = data.val()
  player1.x = position.x
  player1.y = position.y
}
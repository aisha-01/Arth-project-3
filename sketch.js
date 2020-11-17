var player,house1,house2,house3;
var playerImage,house1Image,house2Image,house3Image;
var Background,backgroundImage;
var gameState=0;
var stress,stressImage;
var playButton,playButtonImg;
var response;
function preload()
{
  playerImage=loadImage("happydog.JPG");
  house1Image=loadImage("GAMEHOUSE.JPG");
  house2Image=loadImage("MUSICHOUSE.JPG");
  house3Image=loadImage("STORYHOUSE.JPG");
  backgroundImage=loadImage("BgImage.JPG");
  stressImage=loadImage("coverpage.jpg");
  playButtonImg=loadImage("playbutton.png")
  
}

function setup() {
  createCanvas(displayWidth-20, displayHeight-30);
  
  playButton = createSprite(300, 300);
  playButton.addImage(playButtonImg);
  playButton.scale = 0.5;

  
}


function draw() {
 background("white");
 if (mousePressedOver(playButton)&& gameState===0) {
  play();
}
if (mousePressedOver(house2)&& gameState===1) {
  musichouse();
}
  drawSprites();
 
}


function play(){
  playButton.visible = false;
  player=createSprite(displayWidth/2,displayHeight-150);
  player.addImage(playerImage);
  house1=createSprite((displayWidth/4)*3,displayHeight/4-100);
  house1.addImage(house1Image);
  house2=createSprite(displayWidth/2,displayHeight/4-100);
  house2.addImage(house2Image);
  house3=createSprite(displayWidth/4,displayHeight/4-100);
  house3.addImage(house3Image);

  gameState=1;

}
function gamehouse(){
  player.visible = false;
  house1.visible = false;
  house2.visible = false;
  house3.visible = false;
  

}
function storyhouse(){
  player.visible = false;
  house1.visible = false;
  house2.visible = false;
  house3.visible = false;

  var storyb1 = createSprite(200,200);

}

function musichouse(){
  player.visible = false;
  house1.visible = false;
  house2.visible = false;
  house3.visible = false;

}



var canvas , car , carIMG ; 
var play , tutorial , back ,left , right , leftIMG , rightIMG , playIMG , tutorialIMG , backIMG ;
var gameState=0
var bg1 , road , roadIMG ;
var rand ;

function preload() {
  roadIMG = loadImage('images/track.png');
  carIMG = loadImage('images/ezgif.com-crop (1).png');
  leftIMG = loadImage('images/ezgif.com-rotate.png');
  rightIMG = loadImage('images/ezgif.com-rotate (1).png');
  playIMG = loadImage('images/play.png');
  tutorialIMG = loadImage('images/tutorial.png');
  backIMG = loadImage('images/back.png');
  npc1 = loadImage('images/ezgif.com-crop.png');
  npc2 = loadImage('images/ezgif.com-crop (1) (1).png');
  npc3 = loadImage('images/ezgif.com-crop (2).png');
  npc4 = loadImage('images/ezgif.com-crop (3).png');
  npc5 = loadImage('images/ezgif.com-crop (4).png');
  npc6 = loadImage('images/ezgif.com-crop (5).png');
  npc7 = loadImage('images/ezgif.com-gif-maker.png');
  bg=loadImage("images/wy.jpg")
  roady=loadImage("images/image1.png")
}
function setup(){
  canvas = createCanvas(windowWidth-30,windowHeight-30);

  road = createSprite(700,-400);
  //road1 = createSprite(700,-500);
  road.velocityY = 5 ;
  road.addImage(roady);
  road.scale = 1.5; 
  road.visible = false;
  /*road1.velocityY = 5 ;
  road1.addImage(roadIMG);
  road1.scale = 1.5; 
  road1.visible = false;*/

  play = createSprite(700,500,60,20);
  play.addImage(playIMG);
  play.scale = 1; 

  tutorial = createSprite(500,500,60,20);
  tutorial.addImage(tutorialIMG);
  tutorial.scale = 1; 

  back = createSprite(600,400,60,20);
  back.addImage(backIMG);
  back.scale = 0.2; 
  back.visible = false;

  left= createSprite(1100,490,60,20);
  left.addImage(leftIMG);
  left.scale = 0.5; 
  left.visible = false;

  right= createSprite(1200,490,60,20);
  right.addImage(rightIMG);
  right.scale = 0.5; 
  right.visible = false;

  car= createSprite(600,500,60,20);
  car.addImage(carIMG);
  car.visible = false;
  
  //roadIMG="white";
}

function draw(){
  background(bg);
//console.log(road1.y);
console.log(road.y);
if (mousePressedOver(tutorial)) {
  play.visible = false;
  tutorial.visible = false;
  fill("red");
  back.visible=true;
  back.shapeColor = "red";
  gameState = 1;
}
if(gameState===1){
  text("sprite",200,200);
}

if (mousePressedOver(back)) {
  gameState=3;
  play.visible = true;
  tutorial.visible = true;
  back.visible = false;
}

if (mousePressedOver(play)) {
  road.visible = true;
 // road1.visible = true;
  tutorial.visible = false;
  play.visible = false;
  left.visible = true;
  right.visible = true;
  car.visible = true;
  gameState = 2;
}

reset()
if (car.x < 300) {
  car.x = 300 ;
}
if (car.x > 1107) {
  car.x = 1107 ;
}
NPC()
if (gameState === 2) {
  controls();  
}

  drawSprites();
  text("X:"+mouseX+"Y:"+mouseY,mouseX,mouseY);
}

function controls() {
  if (mousePressedOver(left)) {
    car.x = car.x - 10;
  } 
  if (mousePressedOver(right)) {
    car.x = car.x + 10;
  } 
}

function reset() {
  if (road.y > 950) {
    road.y = -300 ;
  }
 /* if (road1.y > 800) {
    road1.y = road1.height/2-600 ;
  }*/
}

function NPC() {
  if (frameCount%120===0) {
    var npc = createSprite(random(300,1107),-10);
    npc.velocityY = 5 ;
    rand = Math.round(random(1,6))
    switch(rand){
      case 1 : npc.addImage(npc1);
      break ;
      case 2 : npc.addImage(npc2);
      break ;
      case 3 : npc.addImage(npc3);
      break ;
      case 4 : npc.addImage(npc4);
      break ;
      case 5 : npc.addImage(npc5);
      break ;
      case 6 : npc.addImage(npc6);
      break ;
      default: break ;
    }
    npc.lifetime = 150 ;
  }
}
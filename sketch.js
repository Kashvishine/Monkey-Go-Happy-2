
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,invisibleGround
var bg,bg1

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  bg=loadImage("background.png");
 
}



function setup() {
createCanvas(800,400)
bg1=createSprite(0,0,600,600)
  bg1.addImage(bg)
  bg1.scale=1
  bg1.velocityX=-4
  
  monkey=createSprite(80,315,20,20)
monkey.addAnimation("moving",monkey_running)
monkey.scale=0.1 
  
  ground=createSprite(400,380,900,10)
  ground.velocityX=-4;
  ground.x=ground.width/2
  ground.visible=false
  
  
  FoodGroup=new Group();
  obstacleGroup=new Group();
  
  score=0
  
  invisibleGround=createSprite(400,400,900,10)
  invisibleGround.visible=false
  
}


function draw() {
background("lightblue")
 if(ground.x<0){
   ground.x=ground.width/2
 }
  if(bg1.x<100){
    bg1.x=bg1.width/2
  }
  if(keyDown("UP_ARROW")){
    monkey.velocityY=-12;

  }
  monkey.velocityY= monkey.velocityY+ 0.8;
  
  monkey.collide(invisibleGround)
 
  
  Spawnbanana();
  Spawnobstacles();
   if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0;
     monkey.velocityY=0;
     obstacleGroup.setVelocityXEach(0)
     FoodGroup.setVelocityXEach(0)
  }
drawSprites();
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach()
    score=score+2
  }
  
  fill("black")
  textSize(14)
  //score=Math.round(frameCount/frameRate())
  text("Score= "+score,150,50)
  
}

function Spawnbanana(){
  if(frameCount%80===0){
    banana=createSprite(600,250,40,10)
    banana.y=random(120,200)
    banana.velocityX=-4;
    banana.addImage(bananaImage)
    banana.scale=0.1
    FoodGroup.add(banana)
  }
}
function Spawnobstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(400,350,50,50)
    obstacle.velocityX=-4
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.2
    obstacleGroup.add(obstacle)
  }
}

















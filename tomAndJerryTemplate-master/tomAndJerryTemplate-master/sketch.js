var bgImg;
var cat;
var tom;
var jerry;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,600);
    tom.addAnimation("tomsleeping",catImg1);
    tom.scale = 0.2;

    jerry = createSprite(200,600);
    jerry.addAnimation("jerrystanding",mouseImg1);
    jerry.scale = 0.15;
 
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
     
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX = 0;
        tom.addAnimation("tomlastImage",catImg3);
        tom.x = 300;
        tom.scale = 0.2;
        tom.changeAnimation("tomlastImage");
        jerry.addAnimation("jerrylastImage",mouseImg3);
        jerry.scale = 0.15;
        jerry.changeAnimation("jerrylastImage");
    }





    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      tom.velocityX = -5;
      tom.addAnimation("tomRunning",catImg2);
      tom.changeAnimation("tomRunning");

      jerry.addAnimation("mouseTeasing",mouseImg2);
      jerry.changeAnimation("mouseTeasing");
      jerry.frameDelay = 25;
  }
}

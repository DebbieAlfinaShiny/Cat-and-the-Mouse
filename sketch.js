var cat1, cat2, cat3, cat4;
var cat1Img, cat2Img, cat3Img, cat4Img;
var mouse1, mouse2, mouse3, mouse4;
var mouse1Img, mouse2Img, mouse3Img, mouse4Img;
var garden;

function preload() {
    //load the images here
    cat1Img = loadImage("cat1.png");
    cat2Img = loadImage("cat2.png");
    cat3Img = loadImage("cat3.png");
    cat4Img = loadImage("cat4.png");
    mouse1Img = loadImage("mouse1.png");
    mouse2Img = loadImage("mouse2.png");
    mouse3Img = loadImage("mouse3.png");
    mouse4Img = loadImage("mouse4.png");
    gardenImg = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
        //write code here to change animation
        cat.addAnimation("catLastImage",cat3Img);
        cat.changeAnimation("catLastImage");
    }
    text(mouseX + ',' + mouseY, 10, 45);
    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    cat.velocityX =-5;
    cat.addAnimation("catRunning",cat2Img);
    cat.changeAnimation("catRunning");
}
}
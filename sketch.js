var fighter,fighterImg;
var zombie1,zombie2,zombie1Img,zombie2Img,zombiehut,zombiehutImg;
var cross,crossImg;
var zone;
var bgImg;
var bullet,bulletImg;

function preload(){
fighterImg=loadImage("images/fighter.png");
bgImg=loadImage("images/ground.jpeg");
crossImg=loadImage("images/cross.png");
zombie1Img=loadAnimation("images/zombie10.png","images/zombie11.png","images/zombie12.png","images/zombie13.png");
zombie2Img=loadAnimation("images/zombie20.png","images/zombie21.png","images/zombie22.png","images/zombie23.png");
zombiehutImg=loadImage("images/hut.png");
bulletImg=loadImage("images/bullet.png");
}

function setup(){
canvas=createCanvas(1200,400);
zone=createSprite(100,200,200,400);
zone.shapeColor="aqua";

fighter=createSprite(130,200);
fighter.addImage(fighterImg);
fighter.scale=0.5;

cross=createSprite(50,200);
cross.addImage(crossImg);
cross.scale=0.5;

zombie1=createSprite(800,300);
zombie1.addAnimation("standing",zombie1Img);


zombie2=createSprite(900,200);
zombie2.addAnimation("standing",zombie2Img);

zombiehut=createSprite(1120,200);
zombiehut.addImage(zombiehutImg);


}

function draw(){
background(bgImg);
if(keyDown("space")){

    bullet=createSprite(530,200);
    bullet.addImage(bulletImg);
    bullet.scale=0.1;
}
drawSprites();
}

var bin1,bin2,bin3;
var paperBall;
var groundObject;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload(){
    bin1Img = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
   
    engine = Engine.create();
	world = engine.world;

    bin1 = createSprite(1165,490,200,20);
    bin1.addImage(bin1Img);

    bin2 = new bin(1055,500,20,333);
	bin3 = new bin(1276,500,20,333);
    paperBall = new paper(110,445,50);
    groundObject=new ground(width/2,670,width,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

   paperBall.display();
   groundObject.display();
   bin1.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-105});
	 }
   }
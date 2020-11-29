
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	basket1 = loadImage("dustbingreen.png");
}
var engine,world;
function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(800, 660, 1600, 20);
	//Create the Bodies Here.
	Paperball=new Ball(100,100,20);
	Dustbin=new Basket(900,600,20,150);
	Dustbin1=new Basket(1000,640,200,20);
	Dustbin2=new Basket(1100,600,20,150);
	basket = createSprite(1000,550,100,100);
	basket.addImage(basket1);
	basket.scale = 0.8;
	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background(255);
  Paperball.display();
  Dustbin.display();
  Dustbin1.display();
  Dustbin2.display();
  ground.display();
  drawSprites();
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(Paperball.ball,Paperball.ball.position,{x:85,y:-85});
	}
}


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground = new Ground(300,600,1200,10);
 dustbin = new Dustbin(500,589,200,10);
 dustbin1 = new Dustbin(400,554,10,80);
 dustbin2 = new Dustbin(600,545,10,100);
 paper = new Paper(50,590,20,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbin.display();
  dustbin1.display();
  dustbin2.display();
  paper.display();
  drawSprites();
 
}

function keyPressed(){
  if (keyCode===LEFT_ARROW ){

    Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-55});
  }
}




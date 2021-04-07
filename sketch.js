
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

	roof = new Ground(350,200,420,50)
	
	bob1 = new Bob(180,600,70);
	bob2 = new Bob(250,600,70);
	bob3 = new Bob(320,600,70);
	bob4 = new Bob(390,600,70);
	bob5 = new Bob(460,600,70);
	bob6 = new Bob(530,600,70);

	rope1 = new Chain(roof,bob1);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);

  roof.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  rope1.display();

  drawSprites();
 
}




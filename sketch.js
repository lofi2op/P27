
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Ground(100,200,1500,50)
	
	bob1 = new Bob(50,600,70);
	bob2 = new Bob(100,600,70);
	bob3 = new Bob(150,600,70);
	bob4 = new Bob(200,600,70);
	bob5 = new Bob(250,600,50);
	

	rope1 = new Chain(bob1.body,roof.body,200,0);
	rope2 = new Chain(bob2.body,roof.body,300,0);
	rope3 = new Chain(bob3.body,roof.body,400,0);
	rope4 = new Chain(bob4.body,roof.body,500,0);
	rope5 = new Chain(bob5.body,roof.body,600,0);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(255);

  roof.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:100,y:100})
	}
}
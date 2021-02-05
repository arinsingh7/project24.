const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var paper1;
var ground1;
var dustbin1, dustbin2, dustbin3;



function setup() {
	var canvas = createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ground1 = new ground(width/2, 670, width, 20);
	paper1 = new paper(200, 650, 40);

	
	dustbin1 = new Dustbin(1200, 650);
	//dustbin2 = new Dustbin(580, 645, 20, 90);
	//dustbin3 = new Dustbin(625, 680, 110, 20);
	
	Engine.run(engine);
}


function draw() {
  background(0);

  Engine.update(engine);

  
  ground1.display();
  paper1.display();

  dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();

  
  //keyPressed();

 //drawSprites();
}
function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 85, y: -85});

	}

}




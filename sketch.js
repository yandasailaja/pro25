const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball, box1, box2, box3, ground;

function preload(){
	
}

function setup() {
	createCanvas(1600, 800);

	engine = Engine.create();
	world = engine.world;

	paperball = new Paper(300, 100, 87);
	box1 = new ImageBox(1200, 590, 220, 20);
	box2 = new Dustbin(1100, 530, 20, 200);
	box3 = new Dustbin(1300, 530, 20, 200);
	box3.image
	ground = new Ground(800, 780, 1600, 40);
	
	Engine.run(engine);
  
}


function draw() {
  background("pink");
  paperball.display();
  box2.display();
  box3.display();
  ground.display();
  box1.display();
  drawSprites();
 
}

function keyPressed(){
 if(keyCode===UP_ARROW){
	Body.applyForce(paperball.body, paperball.body.position, {x:438,y:-438});
 }
}



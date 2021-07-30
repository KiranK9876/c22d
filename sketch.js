const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball
var ball1
var ball2
var ball3
var ball4
var rope
var rope1
var rope2
var rope3
var rope4


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution: 0.8
	  }

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	ball = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball);

  	ball1 = Bodies.circle(350,10,20,ball_options);
  World.add(world,ball1);

  	ball2 = Bodies.circle(200,50,10,ball_options);
  World.add(world,ball2);

  	ball3 = Bodies.circle(350,10,20,ball_options);
  World.add(world,ball3);

  ball4 = Bodies.circle(350,10,20,ball_options);
  World.add(world,ball3);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

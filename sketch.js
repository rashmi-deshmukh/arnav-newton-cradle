
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Contraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var st1,st2,st3,st4,st5;
var Roof;
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

    Roof= new Box(380,100,250,10);
    bob1= new ball(300,300,50);
    bob2= new ball(350,300,50);
    bob3= new ball(400,300,50);
    bob4= new ball(450,300,50);
    st1= new  String(bob1.body,{x:10,y:10});
  //  st2= new  String(bob2.body,{x:5,y:0});
   // st3= new  String(bob3.body,{x:5,y:0});
    //st4= new  String(bob4.body,{x:5,y:0});
}


function draw() {
  background(200);
  Engine.update(engine);
  drawSprites();
  Roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  st1.display();
  //st2.display();
  //st3.display();
  //st4.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-12,y:-105});
  
  }
}


// é usado para criar o motor de física
const Engine = Matter.Engine;
// é usado para criar o mundo físico e adicionar objetos a ele
const World = Matter.World;

// é usado para criar objetos físicos que habitam o mundo
const Bodies = Matter.Bodies;

// é usado para criar o objeto geral 
const Body = Matter.Body;


let engine;
let world;

var ball;
var ground;
var left, right, top_wall;

var btn1, btn2;


function setup() {
  createCanvas(400, 400);
  
  engine = Engine.create();
  world = engine.world;
  
  ground = new Border(200, 390, 400, 20);
  right = new Border(390, 200, 20, 400);
  left = new Border(10, 200, 20, 400);
  top_wall = new Border(200, 10, 400, 20);

  
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

}

function draw() 
{
  background(51);

  

  ground.show();
  top_wall.show();
  left.show();
  right.show();
  
  // Mantém o movimento do meu objeto ativo
  Engine.update(engine);

}








// ellipse(ball.position.x,ball.position.y,20);

// function createButtons()
// {
//   btn1 = createImg('right.png');
//   btn1.position(220,30);
//   btn1.size(50,50);
//   btn1.mouseClicked(horizontalForce);
  
//   btn2 = createImg('up.png');
//   btn2.position(20,30);
//   btn2.size(50,50);
//   btn2.mouseClicked(verticalForce);
// }

// function horizontalForce()
// {
//   Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
// }

// function verticalForce()
// {
//   Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
// }

// var ball_options = {
//   restitution: 0.95
// }

// ball = Bodies.circle(200,100,20,ball_options);
// World.add(world,ball);
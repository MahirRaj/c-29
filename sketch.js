const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ground , rope , fruit;
var fruit_con;

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(250,690,700,20);
  rope = new Rope(6,{x:350,y:30});

  var fruit_options = {
    density : 0.001
  }
  fruit = Bodies.circle(300,300,15,fruit_options);
  World.add(world,fruit);

  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.display();
  rope.show();

  ellipseMode(RADIUS);
  ellipse(fruit.position.x,fruit.position.y,15,15);
   
}





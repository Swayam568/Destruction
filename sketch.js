const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(3000,1200);

  engine = Engine.create();
  world = engine.world;
  box1 = new Box(700,900,70,70)
  box2 = new Box(700,800,70,70)
  box3 = new Box(700,700,70,70)
  box4 = new Box(700,600,70,70)
  box5 = new Box(700,500,70,70)
  box6 = new Box(700,400,70,70)
  box7 = new Box(700,300,70,70)
  box8 = new Box(700,200,70,70)
  ground = new Ground(1000,1000,3000,50)
  ball = new Ball(1000,400,50,50)
  rope = new Rope(ball.body,{x:500,y:400})
}


function draw() 
{
  background(51);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  ball.display();
  rope.display();
}


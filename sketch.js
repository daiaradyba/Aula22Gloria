const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world,objeto;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var options = {
    isStatic: true,
    
  }
   objeto = Bodies.rectangle(200,10,50,50);
  
  World.add(world,objeto);
 
  
}

function draw() {
  background("white");  
  rectMode(CENTER)
  Engine.update(engine);
  rect(objeto.position.x,objeto.position.y,50,50)
 

}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particle, plinko, division, ground;

var score=0;
var gamestate = start;
var gamestate = End;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  particle = Bodies.circle(240,780,10);
  World.add(world,particle);

  ground = Bodies.rectangle(240,20,20,480);
  World.add(world,ground);

  division = Bodies.rectangle(240,20,480,20);
  World.division(world.add);

}

var divisionHeight=300;

var particles = [];
var plinkos = [];
var divisions = [];

function draw() {
  background(255,255,255);

  textSize(35);
  text("score:"+score,700,50);
  
  particle.display();
  plinko.display();
  division.display();
  ground.display();
}

for (var k = 0; k <=innerWidth; k = k + 80) {
  divisions.push(new Divisions(k, height-divisionHeight))
}

for (var j = 40; j <=innerWidth; j=j+50)
{
  plinkos.push(new plinko(j,75));
}

for (var j = 15; j<=width-10; j+j+50)
{
  plinko.push(new plinko(j,175));
}

for (j = 0; j < particles.length; j++) 
{
  particles[j].display();
}

for (var k = 0; k< divisions.length; k++) 
{
  disvisions[k].display();
}

if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10, width/2+10, 10), 10))
}

function mousePressed() {
  if(gamestate!=="end") {
    count++;
    particle=new Particle(mouseX, 10, 10, 10);
  }
}

if(particle = null) {
  particle.display();

  if(particle.body.position.y>760) {
    if(particle.body.x < 300) {
      score=score+500;
      particle=null;
      if(count>=5) gamestate = "End";
    }
  }

}

if(particle = null) {
  particle.display();

  if(particle.body.position.y>760) {
    if(particle.body.x > 301) {
      if(particle.body.x <600) {

      score=score+100;
      particle=null;
      if(count>=5) gamestate = "End";
      }
    }
  }

}

if(particle = null) {
  particle.display();

  if(particle.body.position.y>760) {
    if(particle.body.x > 601) {
      if(particle.body.x < 900) {
      score=score+200;
      particle=null;
      if(count>=5) gamestate = "End";
      }
    }
  }

}


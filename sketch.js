const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function preload() {
    backgroundImg = loadImage("./assets/background.gif")
}

function setup(){
     canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    angle = -PI/4
tower = new Tower(150,350,160,310)
ground = new Ground(0,height-1 , width*2, 1)
    canon = new Canon(180,110,100,50,angle)
}

function draw(){
    background(189);
    image (backgroundImg, 0,0,width, height)
    Engine.update(engine);
   tower.display()
   ground.display()
   canon.display()
}

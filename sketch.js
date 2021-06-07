const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var D1,D2,D3,paper,ground;
var slingshot;

function preload(){
}

function setup() 
{
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	ground = new Ground(600,height,1200,20);
	D1= new Dustbin(600,680,200,20);
    D2=new Dustbin(500,615,20,150);
    D3=new Dustbin(700,615,20,150);
    paper= new Paper (100,600,50);

  }

function draw() 
{
 background("lightblue");
 drawSprites();

 paper.display();
 ground.display();
 D1.display();
 D2.display();
 D3.display();

}

function mouseDragged(){
    Matter.Body.setPosition(Paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}



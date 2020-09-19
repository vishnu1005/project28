
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rock;
var ground;
var tree;
var boy,boyimg;
var mango1,mango2,mango3,mango4,mango5;
var mango6,mango7,mango8,mango9,mango10;
var catapult;
var test;

function preload()
{
	boyimage=loadImage("boy.png");
}

function setup() {
	createCanvas(1250, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	rock= new Rock(130,650,40);

	ground = new Ground(600,height,1400,20);

	tree= new Tree(1000,600,20,20);

	boy =new Boy(200,645,200);
	
	
	mango1 =  new Mango(900,215,50);
	mango2 =  new Mango(1000,200,50);
	mango3=  new Mango(900,300,50);
	mango4 =  new Mango(950,400,50);
	mango5 =  new Mango(900,150,50);

	catapult= new Catapult(rock.body,{x:200,y:100});

//	mango6 =  new Mango(925,200,70);
//	mango7 =  new Mango(900,175,50);
//	mango8 =  new Mango(900,200,50);
//	mango9 =  new Mango(900,200,50);
//	mango10 =  new Mango(125,200,50);

//test=createSprite("400,200,20,20");
}


function draw() {
  rectMode(CENTER);
  background("cyan");
 
  rock.display();

  ground.display();

  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  boy.display();

 // mango6.display();
 // mango7.display();
  //mango8.display();
 // mango9.display();
  //mango10.display();

  //boy.collide(ground);

  detectcollision(rock,mango1);
  detectcollision(rock,mango2);
  detectcollision(rock,mango3);
  detectcollision(rock,mango4);
  detectcollision(rock,mango5);

  text("Press space to get a second chance to play",20,20)
  
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    catapult.fly();
}

function detectcollision(rock,mango1)
{
  mangoBodyPosition=mango1.body.position
  rockBodyPosition=rock.body.position

  var distance=dist(mangoBodyPosition.x,mangoBodyPosition.y,rockBodyPosition.x,rockBodyPosition.y)

  if(distance<-mango1.r+rock.r)
  {
     Matter.Body.setStatic(mango1.body,false);
  }

}

function keyPressed()
{
  if(keyCode==32)
  {
    Matter.Body.setPosition(rock.body,{x:235,y:420})
    catapult.attach(rock.body);
  }
}




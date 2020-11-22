
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, boyImage;
var tree,treeImage;

function preload()
{
	boyImage= loadImage("boy.png");
	treeImage=loadImage("tree.png");
}

function setup() {
	createCanvas(1200, 700);
	
	boy=createSprite(230,570,10,10);
	boy.addImage(boyImage);
	boy.scale=0.2;
	
	
	
	engine = Engine.create();
	world = engine.world;

	ground=Bodies.rectangle(600,680,1200,40,options={isStatic:true});
	World.add(world,ground);
	tree=new Tree(800,380);
	mango1 =new Mango(850,100);
	mango2 =new Mango(800,150);
	mango3 =new Mango(700,150);
	mango4 =new Mango(850,250);
	mango5 =new Mango(750,350);
	mango6 =new Mango(900,300);
	mango7 =new Mango(500,250);
	mango8 =new Mango(700,250);
	mango9 =new Mango(600,350);
	mango10 =new Mango(600,280);
	mango11 =new Mango(900,150);
	mango12 =new Mango(1000,250);
	mango13 =new Mango(1100,350);
	//Create the Bodies Here.
	stone= new Stone(130,450);
	chain=new Chain(stone.body,{x:130,y:450});
	console.log(chain)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill(132,73,19);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1200,40);
  
  drawSprites();
 
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  stone.display();
  chain.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
  detectCollision(stone,mango13);
}
function mouseDragged()
{
	Matter.Body.setPosition(stone.body,{x : mouseX, y : mouseY});
}
function mouseReleased()
{
	chain.fly();
}
function keyPressed()
{
	if(keyCode===32)
	{
		chain.attach(stone.body);
		Matter.Body.setPositon(stone.body,{x:130,y:450})
		
	}
}
function detectCollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

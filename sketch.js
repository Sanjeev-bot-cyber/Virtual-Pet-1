//Create variables here
var dog, happyDog;
var database;
var foodS;
var foodStock; 

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(250, 300, 10, 10);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  foodStock = database.ref("Food");
  foodStock.on("value", readStock);


}


function draw() {  
background(46, 139, 87);


  if(keyWentDown(UP_ARROW)){
    foodS = foodS-1
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }

  drawSprites();
fill("white");
textSize(15);
  text("Note:Press UP_ARROW key to feed Drago Milk",150,50);
  fill("white");
  textSize(15);
text("Food remaining:"+foodS,150,100);

}



function readStock(data){
  foodS=data.val();
}



function writeStock(x){
  database.ref("/").update({
    Food:x
  })}
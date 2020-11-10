var bullet,wall;
var speed,weight;
var thickness,damage;



function setup() {
  createCanvas(1600,400); 
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1200,200,thickness,200);
  
}

function draw() {
  background(0);  
  //wall.debug=true;
  //bullet.debug=true;
  wall.shapeColor=color(80,80,80);
  bullet.velocityX=speed;
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;

    damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor="red";
    }
     if(damage<10){
      wall.shapeColor="green";
      }
      
        
  }
  drawSprites();
}

function hasCollided(object1,object2){
 if(object1.x+(object1.width/2)-object2.x-(object2.width/2)>-1 ){
   return true
 }
 else{
   return false
 }
}
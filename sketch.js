var bullet,wall;
var speed,weight,damage,thickness;
function setup() {
  createCanvas(800,400);
 speed=random(103,221);
 weight=random(30,52);
 thickness = random(22,38);

  bullet = createSprite(400, 200, 25, 10);
  bullet.shapecolor = "red";
  wall = createSprite(700,200,100,thickness,height/2);
 wall.fill = "blue";
  damage = 0.5*bullet.weight*bullet.speed*bullet.speed/wall.thickness*wall.thickness*wall.thickness

}

function draw() {
  background(0);  
  bullet.velocityX = speed;

if (hasCollided(bullet,wall)){
var damage = 0.5*bullet.weight*bullet.speed*bullet.speed/wall.thickness*wall.thickness*wall.thickness;
}

if (hasCollided(bullet,wall)){
  bullet.speed = 0;
}
if (damage>10){
  bullet.shapeColor = "green";
}
if (damage<10){
  bullet.shapeColor = "blue";
}
  
hasCollided(bullet,wall);
  drawSprites();
}

function hasCollided(bullet,wall){
bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;
if (bulletRightEdge>=wallLeftEdge){
  return true;
  
}
return false;

}
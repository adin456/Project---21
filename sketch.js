var car,wall,speed,weight,thickness;



function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,152);
  thickness=random(22,83);
  car =createSprite(50, 200, 50, 50);
  wall =createSprite(1200,200,thickness,height/2);

  car.velocityX = speed;

}

function draw() {

  background(255,255,255);  
  d = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
  if(wall.x-car.x<wall.width/2+car.width/2){
    car.velocityX=0;
    if(d<10){
      car.shapeColor ="green";
    }
    
    if (d>10){
      car.shapeColor="red";
    }
  }

  drawSprites();
}
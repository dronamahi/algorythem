var mrectangle
var frectangle
var rect1
function setup() {
  createCanvas(800,400);
  mrectangle = createSprite(400, 200, 50, 50);
mrectangle.shapeColor = "red"
frectangle = createSprite(440, 200, 50, 50);
frectangle.shapeColor = "red"
rect1 = createSprite(150,350,50,50)
rect1.shapeColor = "yellow"
}

function draw() {
  background(255,255,255);  
  mrectangle.x = mouseX
  mrectangle.y = mouseY
 if( istouching(mrectangle,frectangle)){
   mrectangle.shapeColor = "blue"
   frectangle.shapeColor = "blue"
 }
 else if  (istouching (mrectangle,rect1)){
   mrectangle.shapeColor = "blue"
   rect1.shapeColor = "blue"
 }
 else{
  mrectangle.shapeColor = "red"
  frectangle.shapeColor = "red"
 }


  drawSprites();
  
}

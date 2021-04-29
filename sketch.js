var fix,move


function setup() {
  createCanvas(800,400);
  fix = createSprite(300, 200, 20, 50);
 move = createSprite(35, 60, 50, 20);
 fix.shapeColor = "red" 
move.shapeColor = "blue"
fix.debug = true
move.debug = true
}

function draw() {
  background(255,255,255);  
  
  move.x = World.mouseX
  move.y = World.mouseY
  
 if(isTouching())
  {  move.shapeColor = "yellow"; fix.shapeColor = "yellow"
  }
 
  else{move.shapeColor = "green"; fix.shapeColor = "green"
}

  
  
  
  
  drawSprites();
}
function isTouching(){
  if(move.x - fix.x < fix.width / 2 + move.width / 2 &&
    fix.x - move.x <  fix.width / 2 + move.width / 2 &&
    move.y - fix.y < fix.height / 2 + move.height /  2 &&
    fix.y - move.y  < fix.height / 2 + move.height /  2 
      ){
    return true
      }
    else{return false }
}



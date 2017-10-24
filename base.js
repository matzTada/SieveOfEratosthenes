var nums;

function setup(){
  size=1200;
  createCanvas(size, size*MAX_NUM / 200+130); // initialize canvas for drawing
  nums = [];
  //nums.push(""); //prepare "box" used as sieve
  for (var i = 0; i <= MAX_NUM; i++) {
    nums.push(""); // "alive" : alive, "dead" : dead(sieved)
  }
  startup();
  drawUpdate();
  drawNow(1);
}

function stampYellow(x,y){
  nums[x+10*y+1]= "alive"
}

function stampBlue(x,y){
  nums[x+10*y+1]= "dead"
}

function draw() {
}

// 表示する
function say(str){
    fill(0);
    textSize(50)
    text(str, 0, height-80);
}

function keyTyped() {
  switch (key) {
    case ' ':
      spaceKeyPressed();
      drawUpdate();
      drawNow(drawItr);
      break;
  }
  return false;
}

function drawUpdate(){
  var x = 0;
  var y = 0;
  var rectSize = width / 20;
  i = 1;
  while(i <= MAX_NUM){
    if(nums[i]=="dead"){
      fill(0, 255 ,255);
    }else{
      fill(255, 255 ,0);
    }
    rect(x, y, rectSize, rectSize);
    fill(0);
    textSize(rectSize * 0.2);
    text(i, x, y + rectSize);      
    x += rectSize;
    if(floor(i % 10) == 0){
      x = 0;
      y += rectSize;
    }
    i += 1;
  }
}


function drawNow(val){
  var x = 0;
  var y = 0;
  var rectSize = width / 20;
  i = 1;
  while(i < val-1){
    x += rectSize;
    if(floor(i % 10) == 0){
      x = 0;
      y += rectSize;
    }
    i += 1;
  }
  rectSize = width / 20 / 4;
  fill(0, 255, 0);
  rect(x, y, rectSize, rectSize);
  fill(0);
  textSize(rectSize * 0.2);
  text(drawItr, x, y + rectSize);
}

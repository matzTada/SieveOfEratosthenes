var MAX_NUM = 5000;
var rectSize = 10;
var currentNum = 1;
var nums = new Array(MAX_NUM); //prepare "box" used as sieve

function setup() {
  createCanvas(1200, 800); // initialize canvas for drawing
  resetSieve();
}

function draw() {
  background(50, 89, 100);
  for (var i = 0; i < MAX_NUM; i++) {
    rectSize = width / 100;
    // var x = floor(i % currentNum) * rectSize;
    // var y = floor(i / currentNum) * rectSize;
    var x = floor(i % 100) * rectSize;
    var y = floor(i / 100) * rectSize;
    nums[i] ? fill(255) : fill(127);
    if (i == currentNum) fill(255, 0, 0);
    else if (floor(i % currentNum) == 0) fill(0, 255, 255);
    else if (i == ceil(Math.sqrt(MAX_NUM))) fill(0, 255, 0);
    rect(x, y, rectSize, rectSize);
    nums[i] ? fill(0) : fill(255);
    textSize(rectSize * 0.2);
    text(i, x, y + rectSize);
  }
}

function resetSieve() {
  for (var i = 0; i < MAX_NUM; i++) {
    nums[i] = true; // "true" : alive, "false" : dead(sieved)
  }
  nums[0] = false;
  nums[1] = false;
}

function sieve(n) {
  if (nums[n] === true) {
    for (var j = n * 2; j < MAX_NUM; j += n) {
      nums[j] = false;
    }
  }
}

function keyTyped() {
  switch (key) {
    case 'a':
      do {
        currentNum += 1
      } while (nums[currentNum] === false);
      sieve(currentNum);
      break;
    case 'A':
      currentNum -= 1;
      resetSieve();
      for (var i = 0; i < currentNum; i++) {
        sieve(i);
      }
      break;
    case 'R':
      resetSieve();
      break;
  }
  return false;
}
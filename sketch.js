var MAX_NUM = 500;
var rectSize = 10;
var currentNum = 2;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(50, 89, 100);
    for (var i = 0; i < MAX_NUM; i++) {
      rectSize = width / 30;
        var x = floor(i % currentNum) * rectSize;
        var y = floor(i / currentNum) * rectSize;
        fill(255);
        rect(x, y, rectSize, rectSize);
        fill(0);
        textSize(rectSize * 0.2);
        text(i, x, y + rectSize);
    }
}

function keyTyped() {
    switch (key) {
        case 'a':
            currentNum += 1;
            break;
       case 'A':
            currentNum -= 1;
            break;    }
    return false;
}
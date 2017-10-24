var drawItr
var multipleItr
var MAX_NUM=100 // 最大値

// 最初に呼ばれる
function startup(){ // when |> clicked
  x=0 // set x to 0
  y=0 // set y to 0
  drawItr=1 // set drawItr to 1
  while(!(drawItr>MAX_NUM)){ // repeat until multipleItr>100
    stampYellow(x,y) // switch costume to ball-a, stamp
    x=x+1 // change x by 1
    if(drawItr%10==0){ // if drawItr mod 10 = 0 then
      x=0 // set x to 0
      y=y+1 // change y by 1
    }
    drawItr=drawItr+1 // change drawItr by 1
  }
  x=0 // set x to 0
  y=0 // set y to 0
  stampBlue(x,y) // switch costume to ball-b, stamp
  drawItr=2 // set drawItr to 2
}


// スペースキーが押されると呼ばれる
function spaceKeyPressed(){ // when space key pressed
  if(drawItr>sqrt(MAX_NUM)){ // if drawItr>100 then
    say("The remainings are prime numbers.")
    // say "The remainings are prime numbers."
    return // 終了
  }
  x=0 // set x to 0
  y=0 // set y to 0
  multipleItr=1 // set multiPleItr to 1
  while(!(multipleItr>MAX_NUM)){ // repeat until multipleItr>100
    if(multipleItr%drawItr==0&&multipleItr>drawItr){
    // if multipleItr mod drawItr = 0 and multipleItr<drawItr then
      stampBlue(x,y) // switch costume to ball-b, stamp
    }
    x=x+1 // change x by 1
    if(multipleItr%10==0){ // if multipleItr mod 10 = 0 then
      x=0 // set x to 0
      y=y+1 // change y by 1
    }
    multipleItr=multipleItr+1 // change multipleItr by 1
  }
  drawItr=drawItr+1 // change drawItr by 1
}


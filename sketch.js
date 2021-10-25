var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
  red_bt = createButton("RED");
  red_bt.position(100,50);
  red_bt.mousePressed(red_bg);

  green_bt = createButton("GREEN");
  green_bt.position(250,50);
  green_bt.mousePressed(green_bg)
}

function draw() {
  background(r,g,b);
}

function red_bg(){
  r = 255;
  g = 0;
  b = 0;
}

function green_bg(){
  r = 0;
  g = 255;
  b = 0;

}


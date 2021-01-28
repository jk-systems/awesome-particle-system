//* behavious and streering systems
//* fun pexels projects 2D
//* Code by Joseph Mwadime inspired by crayg
//* js and p5.js technology
var font, fontsize, data, dataPoints, pt, dot;
var dots = [];
var words = ['Partcles', 'Physics', 'Demo', 'By', 'Joseph'];

//controller
fontsize = 165;
data = words[4];
//************************************************//
function preload(){
  font = loadFont('data/SourceSansPro-Regular.otf');
}
//************************************************//
function setup() {
  createCanvas(650, 300);
  background(52);
  dataPoints = font.textToPoints(data, 50, 150, fontsize);
  for (var i = 0; i < dataPoints.length; i++) {
    pt = dataPoints[i];
    dot = new Dot(pt.x, pt.y);
    dots.push(dot);
  }
}
//************************************************//
function draw() {
  background(52);
  for (var i = 0; i < dots.length; i++) {
    dots[i].update();       //update all dots
    dots[i].behavious();    //add up all behavious
    dots[i].show();         //show dem babies
    //dots[i].gravity();      //pull dots down
  }
}
//************************************************//
//TODO change word animation
//function mousePressed(){

//}
//************************************************//
function clearDots(){
  //code here
  for (var i = 0; i < dots.length; i++) {
    dots[i].kill();
    dots.pop(i);
    clear();
  }
}
//************************************************//

function preload(){
    }
function setup(){
    canvas = createCanvas(700, 500);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    background(228, 245, 98);
    image(video, 120, 120, 426, 320);
    stroke(214, 41, 41);
    fill(214, 41, 41);
    strokeWeight(10);
    circle(120,120,40);
    stroke(25, 156, 60);
    line(120, 120, 545, 120);
    stroke(214, 41, 41);
    circle(542,120,40);
    stroke(25, 156, 60);
    line(542, 120, 542, 440);
    stroke(214, 41, 41);
    circle(542, 440, 40);
    stroke(25, 156, 60);
    line(542, 440, 120, 440);
    stroke(214, 41, 41);
    circle(120, 440, 40);
    stroke(25, 156, 60);
    line(120, 440, 120, 120);
}
function takeSnapshot(){
    save("picture.png");
}
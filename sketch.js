

//background circles
//https://openprocessing.org/sketch/112858 


let resolution = 260; // how many points in the circle
let rad = 300;
let xcir = 1;
let ycir = 1;
//float prevX;
//float prevY;

let t = 0; // time passed
let tChange = .002; // how quick time flies

let nVal; // noise value
let nInt = .01; // noise intensity
let nAmp = 0.5; // noise amplitude

let filled = false;
let text_x; 
let text_y; 



function setup() {
    let canvas = createCanvas((0.75*windowWidth), 0.75*windowHeight);
  canvas.parent('sketch-container');

  
  

  noiseDetail(8); 
}

function draw() {
  background(255);
  fill(22, 222, 16);
    push()
    translate(width/2,height/2);
    // oP
    if (filled) {
        noStroke();
        fill(0);
    } 
    else {
        noFill();
        stroke(22, 222, 16);
        strokeWeight(1);
    }
    nInt = map(mouseX, 0, width, 0.1, 0.1); // map mouseX to noise intensity
    nAmp = map(mouseY, 0, height, 0.0, .1); // map mouseY to noise amplitude

    beginShape();
    for (let a=0; a<=TWO_PI; a+=TWO_PI/resolution) {
        //nVal = map(noise(cos(a)*nInt+1, sin(a)*nInt+1, t ), 0.0, 1.0, nAmp, 1.0); // map noise value to match the amplitude
        nVal = map(noise(cos(a)*nInt+1, sin(a)*nInt+1, t ), 0.0, 1.0, nAmp, 1.0); // map noise value to match the amplitude
        xcir = cos(a)*rad *nVal;
        ycir = sin(a)*rad *nVal;
        vertex(xcir, ycir);
        }
    endShape(CLOSE);
    t += tChange;
    pop();
    fill(139, 50, 168);
    textSize(50);
    textFont("forma-djr-display");
    strokeWeight(200)
    textAlign(CENTER);
    //rectMode(CENTER);
    text_x = 50;
    text_y = (height/2)-50;
    
    text("Hi, I'm Lucia.",text_x, text_y, width-100, height);
}

function windowResized(){
  resizeCanvas((0.75*windowWidth), 0.75*windowHeight);
  text_x = 50;
  text_y = (height/2)-50;
}


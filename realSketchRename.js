
var circleX, circleY, circleU, circleV;
circleX = [150, 300, 600,900]
circleY = [100,600,1000,740];
circleU = [200,800,350,200];
circleV = [100,900,200,200];

function setup(){
    // important!!!!
    const cnv = createCanvas(windowWidth, windowHeight);
    cnv.id('sketch');
    // cnv.position(0,0, sticky);

    // blendMode(MULTIPLY);
    // background(131,10,71);
    //set in style.css
    
}
function draw(){
    background("white");
    for (let i = 0; i<circleX.length; i++ ){
        cutCircle(circleX[i], circleY[i], circleU[i], circleV[i]);
    }
}

function mouseWheel(event){
    for (let i = 0; i<circleX.length; i++ ){
        circleX[i]+=(event.delta*.05);
    }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function cutCircle(x,y,rad1,rad2){
    fill(255);
    erase();
    ellipse(x,y,rad1,rad2);
    // erase(255,200);
    noErase();
    noFill();
    strokeWeight(10);
    ellipse(x,y,rad1,rad2);
}
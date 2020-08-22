let box;
let roughness;
let size;
let pushForce;
let state;
let frictionControl = [];
let widthControl = [];
let heightControl = [];
let speedControl = [];
let restartButton;
let runButton;
let pic;
function preload() {
    pic = loadImage('https://thumbs.dreamstime.com/b/simple-background-10181840.jpg');
}    
function drawArrow(base, vec, myColor) {
    push();
    stroke(myColor);
    strokeWeight(3);
    fill(myColor);
    translate(base.x, base.y);
    line(0, 0, vec.x, vec.y);
    rotate(vec.heading());
    let arrowSize = 7;
    translate(vec.mag() - arrowSize, 0);
    triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    pop();
}
function drawForce(forceMag, forceDir, colour) {
    drawArrow(forceMag, forceDir, colour);
}    
function drawGround() {
    fill(0);
    stroke(0);
    rect(0, 450, width, 150);
}
function setup() {
    createCanvas(600, 600);
    roughness = 0.5;
    size = createVector(20, 20);
    restartButton = new Button(createVector(40, 40), 60, 30, 'RESTART', 11);   
    runButton = new Button(createVector(40, 80), 60, 30, 'GO', 11);   
    box = new Box(createVector(20, 20), 2);
    if (runButton.amPressed()) {
        state = 'go';
    }
    for (let i = 0; i < 10; i ++) {
        let pos = createVector(400 + 20 * i, 100);
        frictionControl[i] = new Button(pos, 10, 10, i + 1, 7);
    }
    for (let i = 0; i < 10; i ++) {
        let pos = createVector(400 + 20 * i, 200);
        widthControl[i] = new Button(pos, 10, 10, i + 1, 7);
    }
    for (let i = 0; i < 10; i ++) {
        let pos = createVector(175 + 20 * i, 100);
        heightControl[i] = new Button(pos, 10, 10, i + 1, 7);
    }
    for (let i = 0; i < 10; i ++) {
        let pos = createVector(175 + 20 * i, 200);
        speedControl[i] = new Button(pos, 10, 10, i + 1, 7);
    }
    state = 'setBox';
}
function draw() {
    image(pic, 0, 0, 600, 600);   
    drawGround();
    
    restartButton.show();
    runButton.show();
    if (runButton.amPressed()) {
        state = 'go';
    }
    if (restartButton.amPressed()) {
        state = 'setBox';
        box.speed = 0;
        box.pos = createVector(100, 450);
    }
    textAlign(CENTER, CENTER);
    textSize(18);
    fill(50);
    text('Control the Roughness', 490, 75);
    text(roughness, 490, 125);
    text('Control the Width', 490, 175);
    text(box.size.x, 490, 225);
    text('Control the Height', 265, 75);
    text(box.size.y, 265, 125);
    text('Control the Starting Speed', 265, 175);
    text(box.speed, 265, 225);
    text(box.frictionalForce, 100, 300);
    
        
    if (state === 'setBox') {
        box.show();
        box.distanceTravelled = 0;
        for (let button of frictionControl) {
        button.show();
        if (button.amPressed()) {
            roughness = button.buttonText / 100;
        }
    }
    for (let button of widthControl) {
        button.show();
        if (button.amPressed()) {
           size.x = 10 * button.buttonText;
        }
    }
    for (let button of heightControl) {
        button.show();
        if (button.amPressed()) {
            size.y = 10 * button.buttonText;
        }
    }
    box.cOfFriction = roughness;
    box.size = createVector(size.x, size.y);
    box.weight = size.x * size.y;
    for (let button of speedControl) {
        button.show();
        if (button.amPressed()) {
            box.speed = button.buttonText / 2;
        }
     }
    } else if (state === 'go') {
        box.run();
    }
    
}

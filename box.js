class Box {
    constructor(size, roughness) {
        this.size = size;
        this.pos = createVector(100, 450);
        this.friction = 0;
        this.speed = 0;
        this.cOfFriction = roughness;
        this.distanceTravelled = 0;
        this.weight = this.size.x * this.size.y;
    };
    distanceTravelled_() {
        this.distanceTravelled = floor((this.pos.x - 100) / 10);
    }    
    show() {
        fill(100);
        stroke(0);
        strokeWeight(1);
        let yToDraw = this.pos.y - this.size.y;
        let xToDraw = this.pos.x;
        if (this.pos.x > width - this.size.x) {
            xToDraw = width - this.size.x;
        }    
        fill(0, 0, 255);
        rect(xToDraw, yToDraw, this.size.x, this.size.y);
        textSize(20);
        fill(100);
        text(this.distanceTravelled, constrain(xToDraw + this.size.x / 2, 0, width - 20), yToDraw - 10);
    };
    move() {
        this.speed -= this.friction;
        if (this.speed < 0) {
            this.speed = 0;
        }    
        this.pos.x += this.speed;
        this.friction = 0;
    };
    calculateFriction() {
        let frictionalForce = this.weight * this.cOfFriction / 10000;
        this.friction += frictionalForce;
    };
    run() {
        this.distanceTravelled_();
        this.show();
        this.calculateFriction();
        this.move();
    };
}

class Button {
    constructor(centrePos, buttonWidth, buttonHeight, buttonText, buttonTextSize) {
        this.centralPos = centrePos;
        this.totalWidth = buttonWidth;
        this.totalHeight = buttonHeight;
        this.leftSideX = this.centralPos.x - this.totalWidth / 2;
        this.topSideY = this.centralPos.y - this.totalHeight / 2;
        this.buttonText = buttonText;
        this.colour = 100;
        this.buttonTextSize = buttonTextSize;
    };

    amPressed() {
        if (mouseIsPressed === true && mouseX < this.leftSideX + this.totalWidth && mouseX > this.leftSideX && mouseY < this.topSideY + this.totalHeight && mouseY > this.topSideY) {
            this.colour = 150;
            return true;
        } else {
            this.colour = 100;
            return false;
        }
    };
    show() {
        fill(this.colour);
        noStroke();
        rectMode(CORNER);
        rect(this.leftSideX, this.topSideY, this.totalWidth, this.totalHeight);
        fill(255);
        noStroke();
        textSize(this.buttonTextSize);
        textAlign(CENTER);
        text(this.buttonText, this.centralPos.x, this.centralPos.y + 1);
    };
}

class NumberButton extends Button {
    constructor(centrePos, buttonWidth, buttonHeight, buttonText, buttonTextSize) {
      super(centrePos, buttonWidth, buttonHeight, buttonText, buttonTextSize);
      this.clicked = false;
    };
    amPressed() {
      if (this.clicked === true && mouseX < this.leftSideX + this.totalWidth && mouseX > this.leftSideX && mouseY < this.topSideY + this.totalHeight && mouseY > this.topSideY) {
        print('yes');
        this.clicked = false;
        return true;
      } else {
        this.clicked = false;
        return false;
      }
  
    }
  }
class CircleButton {
    constructor(centrePos, radius, buttonText, buttonTextSize) {
        this.centralPos = centrePos;
        this.radius = radius;
        this.buttonText = buttonText;
        this.colour = 100;
        this.buttonTextSize = buttonTextSize;
    };

    amPressed() {
        if (mouseIsPressed === true && dist(mouseX, mouseY, this.centralPos.x, this.centralPos.y) < this.radius) {
            this.colour = 150;
            return true;
        } else {
            this.colour = 100;
            return false;
        }
    };
    show() {
        fill(this.colour);
        noStroke();
        ellipse(this.centralPos.x, this.centralPos.y, this.radius * 2, this.radius * 2);
        textSize(this.buttonTextSize);
        fill(255);
        textAlign(CENTER, CENTER);
        text(this.buttonText, this.centralPos.x, this.centralPos.y + 1);
    };
}
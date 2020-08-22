class NumberChooser {
    constructor(xPos, yPos) {
        this.numberOfDigits = 5;
        this.buttons = [];
        this.digits = [];
        this.textSize = 10;
        this.height = 60;
        this.digitWidth = 20;
        this.interval = 25;
        this.totalWidth = this.digitWidth + this.interval * (this.numberOfDigits - 1);
        this.xPos = xPos;
        this.yPos = yPos;
        this.centreX = this.xPos + this.totalWidth / 2;
        this.buttonHeight = 15;
        for (let i = 0; i < this.numberOfDigits; i++) {
            this.digits[i] = 0;
        }
        for (let i = 0; i < this.numberOfDigits; i++) {
            this.buttons[i] = []
        }
        let letter;
        for (let i = 0; i < this.buttons.length; i++) {
            for (let j = 0; j < 2; j ++) {
                if (j === 0) {
                    letter = '^';
                } else {
                    letter = 'v';
                }
                let centrePos = createVector(this.xPos + this.digitWidth / 2 + this.interval * i, this.yPos + this.height * j);
                this.buttons[i][j] = new NumberButton(centrePos, this.digitWidth, this.buttonHeight, letter, this.textSize);
            }
        }
    };
    updateDigit() {
        for (let i = 0; i < this.buttons.length; i++) {
            for (let j = 0; j < this.buttons[i].length; j ++) {
                if (this.buttons[i][j].amPressed()) {
                    if (j === 0 && this.digits[i] !== 9) {
                        this.digits[i]++;
                    } else if (j === 1 && this.digits[i] !== 0) {
                        this.digits[i]--;
                    }
                }
            }
        }
    };
    show() {
        for (let i = 0; i < this.buttons.length; i++) {
            for (let j = 0; j < this.buttons[i].length; j++) {
                this.buttons[i][j].show();
            }
        }
        
        for (let i = 0; i < this.digits.length; i++) {
            textSize(20);
            textAlign(CENTER, CENTER);
            text(this.digits[i], this.xPos + this.digitWidth / 2 + this.interval * i, this.yPos + this.height / 2);
        }
    };
    calculateVal() {
        return this.digits.reduce((x, current, j) => x + current * Math.pow(10, 4 - j), 0);
    }
    run() {
        this.updateDigit();
        this.show();
    }
}

class NumberArray {
    constructor() {
        this.numbers = [];
        this.numbersToSolve = [];
        this.maxNumbers = 5;
        this.totalNumbers = 3;
        this.chooseTotalNumbersButtons = [];
        this.currentNumbers = [];
        this.go = false;
        for (let i = 0; i < this.maxNumbers; i ++) {
            this.numbers[i] = new NumberChooser(i * width / 5 + 22, height / 2 + 20);
        }
        this.currentNumbers = this.numbers.slice(0, this.totalNumbers);
        for (let i = 0; i < this.maxNumbers - 1; i++) {
            let pos = createVector(width / 2 - 75 + 50 * (i), height / 4);
            let buttonHeight = 30;
            let buttonWidth = 20;
            this.chooseTotalNumbersButtons[i] = new Button(pos, buttonWidth, buttonHeight, i + 2, 20);
        }
        this.goButton = new Button(createVector(width / 2, height * 5 / 6), 80, 40, 'GO', 20);
    };
    update() {
        for (let i = 0; i < this.maxNumbers - 1; i ++) {
            if (this.chooseTotalNumbersButtons[i].amPressed()) {
                this.totalNumbers = i + 2;
            }
        }
        this.currentNumbers = this.numbers.slice(0, this.totalNumbers);
        for (let i = 0; i < this.currentNumbers.length; i++) {
            
        }
        for (let i = 0; i < this.currentNumbers.length; i++) {
            this.currentNumbers[i].updateDigit();
            this.numbersToSolve[i] = this.numbers[i].calculateVal();
        }
        if (this.goButton.amPressed()){
            for (let number of this.numbersToSolve) {
                if (number === 0) {
                    textAlign(CENTER, CENTER);
                    textSize(20);
                    fill(255, 0, 0);
                    text('Number Cannot Be 0!', width / 2, height - 50);
                } else {
                    this.go = true;
                }
            }
        }
    };
    show() {
        stroke(0);
        for (let i = 0; i < this.currentNumbers.length; i++) {
            this.currentNumbers[i].show();
        }
        this.goButton.show();
        for (let i = 0; i < this.maxNumbers - 1; i ++) {
            this.chooseTotalNumbersButtons[i].show();
        }    
        textAlign(CENTER, CENTER);
        textSize(20);
        fill(0);
        text('Choose The Number Of Numbers', width / 2, height / 7);
        text('Choose The Numbers', width / 2, height / 2 - 50);
    };
    run() {
        this.update();
        this.show();
    }
}

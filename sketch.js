let timeTable;
let addEventButton;
let addWorkButton;
function setup() {
    createCanvas(700, 400);
    timeTable = new Timetable();
    addEventButton = new Button(createVector(width / 3, 10), 30, 20, 'add event', 10);
    addWorkButton = new Button(createVector(2 * width / 3, 10), 30, 20, 'add work', 10);
    timeTable.addEvent(300, 400, 3, 'CS');
}
function draw(){
    background(20, 20, 20);
    timeTable.show();
    addEventButton.show();
    addWorkButton.show();
}
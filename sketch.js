let timeTable;
function setup() {
    createCanvas(700, 400);
    timeTable = new Timetable();
    timeTable.addEvent(300, 400, 3, 'CS');
}
function draw(){
    background(20, 20, 20);
    timeTable.show();
}

class Timetable{
    constructor(){
        this.events = [];
    }
    addEvent(start, end, day, label) {
        let event = new Event(start, end, day, label);
        this.events.push(event);
    };
    addHomework(whichEvent, priority, name) {
        this.events[whichEvent].addWork(name, priority);
    };
    show() {
        for (let event of this.events) {
            event.show();
        } 
    }
}
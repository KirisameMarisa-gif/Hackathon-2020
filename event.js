class Event {
    constructor(start, end, day, label) {
        this.start = start;
        this.end = end;
        this.day = day;
        this.label = label;
        this.work = [];
        this.duration = this.end - this.start;
    };
    addWork(workName, priority) {
        let work = new Work(workName, priority);
        this.work.push(work);
    };
    show() {
        let x = map(event.start, 0, 600, 0, width);
        let y = event.day * height / 7;
        rect(x, y, map(event.duration, 0, 600, 0, width), height / 7);
    }


}
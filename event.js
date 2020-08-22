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
        let x = map(this.start, 0, 600, 0, width);
        let y = this.day * height / 7;
        let eventWidth = map(this.duration, 0, 600, 0, width);
        rect(x, y, eventWidth, height / 7);
        textAlign(CENTER, CENTER);
        text(this.label, x + eventWidth / 2, y + height / 14);

    };


}
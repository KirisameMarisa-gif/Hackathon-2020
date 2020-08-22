class Event {
    constructor(start, end, day, label) {
        this.start = start;
        this.end = end;
        this.day = day;
        this.label = label;
        this.work = [];
    };
    addWork(workName, priority) {
        let work = new Work(workName, prioority);
        this.work.push(work);
    };
    

}
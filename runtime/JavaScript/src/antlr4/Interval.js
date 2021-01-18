/* stop is not included! */
export default class Interval {

    constructor(start, stop) {
        this.start = start;
        this.stop = stop;
    }

    contains(item) {
        return item >= this.start && item < this.stop;
    }

    toString() {
        if (this.start === this.stop - 1) {
            return this.start.toString();
        } else {
            return this.start.toString() + ".." + (this.stop - 1).toString();
        }
    }

    get length() {
        return this.stop - this.start;
    }
}

Interval.INVALID_INTERVAL = new Interval(-1, -2);

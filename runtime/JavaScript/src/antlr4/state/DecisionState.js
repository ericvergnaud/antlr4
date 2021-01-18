import ATNState from "./ATNState";

export default class DecisionState extends ATNState {

    constructor() {
        super();
        this.decision = -1;
        this.nonGreedy = false;
        return this;
    }
}
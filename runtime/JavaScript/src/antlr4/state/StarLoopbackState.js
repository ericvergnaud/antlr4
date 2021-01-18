import ATNState from "./ATNState";

export default class StarLoopbackState extends ATNState {

    constructor() {
        super();
        this.stateType = ATNState.STAR_LOOP_BACK;
        return this;
    }
}
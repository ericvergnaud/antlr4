import ATNState from "./ATNState";

export default class BasicState extends ATNState {

    constructor() {
        super();
        this.stateType = ATNState.BASIC;
    }
}
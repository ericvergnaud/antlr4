import DecisionState from "./DecisionState";
import ATNState from "./ATNState";

/**
 * Decision state for {@code A+} and {@code (A|B)+}.  It has two transitions:
 * one to the loop back to start of the block and one to exit.
 */
export default class PlusLoopbackState extends DecisionState {

    constructor() {
        super();
        this.stateType = ATNState.PLUS_LOOP_BACK;
        return this;
    }
}
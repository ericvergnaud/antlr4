import DecisionState from "./DecisionState";

/**
 *  The start of a regular {@code (...)} block
 */
export default class BlockStartState extends DecisionState {

    constructor() {
        super();
        this.endState = null;
        return this;
    }
}
import BlockStartState from "./BlockStartState";
import ATNState from "./ATNState";

export default class BasicBlockStartState extends BlockStartState {

    constructor() {
        super();
        this.stateType = ATNState.BLOCK_START;
        return this;
    }
}
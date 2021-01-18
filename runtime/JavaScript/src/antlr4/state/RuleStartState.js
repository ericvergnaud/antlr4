import ATNState from "./ATNState";

export default class RuleStartState extends ATNState {

    constructor() {
        super();
        this.stateType = ATNState.RULE_START;
        this.stopState = null;
        this.isPrecedenceRule = false;
        return this;
    }
}
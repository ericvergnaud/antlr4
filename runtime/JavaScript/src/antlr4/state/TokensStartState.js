import DecisionState from "./DecisionState";
import ATNState from "./ATNState";

/**
 * The Tokens rule start state linking to each lexer rule start state
 */
export default class TokensStartState extends DecisionState {

    constructor() {
        super();
        this.stateType = ATNState.TOKEN_START;
        return this;
    }
}
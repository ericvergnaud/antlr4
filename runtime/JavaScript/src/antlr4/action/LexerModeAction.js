import LexerAction from "./LexerAction";
import LexerActionType from "../atn/LexerActionType";

/**
 * Implements the {@code mode} lexer action by calling {@link Lexer//mode} with
 * the assigned mode
 */
export default class LexerModeAction extends LexerAction {
    constructor(mode) {
        super(LexerActionType.MODE);
        this.mode = mode;
    }

    /**
     * <p>This action is implemented by calling {@link Lexer//mode} with the
     * value provided by {@link //getMode}.</p>
     */
    execute(lexer) {
        lexer.mode(this.mode);
    }

    updateHashCode(hash) {
        hash.update(this.actionType, this.mode);
    }

    equals(other) {
        if (this === other) {
            return true;
        } else if (!(other instanceof LexerModeAction)) {
            return false;
        } else {
            return this.mode === other.mode;
        }
    }

    toString() {
        return "mode(" + this.mode + ")";
    }
}
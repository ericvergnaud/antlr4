import LexerAction from "./LexerAction";
import LexerActionType from "../atn/LexerActionType";

/**
 * Implements the {@code skip} lexer action by calling {@link Lexer//skip}.
 *
 * <p>The {@code skip} command does not have any parameters, so this action is
 * implemented as a singleton instance exposed by {@link //INSTANCE}.</p>
 */
export default class LexerSkipAction extends LexerAction {

    constructor() {
        super(LexerActionType.SKIP);
    }

    // noinspection JSMethodCanBeStatic
    execute(lexer) {
        lexer.skip();
    }

    toString() {
        return "skip";
    }
}


// Provides a singleton instance of this parameterless lexer action.
LexerSkipAction.INSTANCE = new LexerSkipAction();
import LexerAction from "./LexerAction";
import LexerActionType from "../atn/LexerActionType";

/**
 * Implements the {@code more} lexer action by calling {@link Lexer//more}.
 *
 * <p>The {@code more} command does not have any parameters, so this action is
 * implemented as a singleton instance exposed by {@link //INSTANCE}.</p>
 */
export default class LexerMoreAction extends LexerAction {

    constructor() {
        super(LexerActionType.MORE);
    }

    // noinspection JSMethodCanBeStatic
    /**
     * <p>This action is implemented by calling {@link Lexer//popMode}.</p>
     */
    execute(lexer) {
        lexer.more();
    }

    toString() {
        return "more";
    }
}

LexerMoreAction.INSTANCE = new LexerMoreAction();
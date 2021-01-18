import LexerAction from "./LexerAction";

/**
 * Implements the {@code popMode} lexer action by calling {@link Lexer//popMode}.
 *
 * <p>The {@code popMode} command does not have any parameters, so this action is
 * implemented as a singleton instance exposed by {@link //INSTANCE}.</p>
 */
export default class LexerPopModeAction extends LexerAction {

    constructor() {
        super(LexerActionType.POP_MODE);
    }

    // noinspection JSMethodCanBeStatic
    /**
     * <p>This action is implemented by calling {@link Lexer//popMode}.</p>
     */
    execute(lexer) {
        lexer.popMode();
    }

    toString() {
        return "popMode";
    }
}

LexerPopModeAction.INSTANCE = new LexerPopModeAction();
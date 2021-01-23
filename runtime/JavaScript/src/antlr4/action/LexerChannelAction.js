import LexerAction from "./LexerAction";
import LexerActionType from "../atn/LexerActionType";

/**
 * Implements the {@code channel} lexer action by calling
 * {@link Lexer//setChannel} with the assigned channel.
 * Constructs a new {@code channel} action with the specified channel value.
 * @param channel The channel value to pass to {@link Lexer//setChannel}
 */
export default class LexerChannelAction extends LexerAction {
    constructor(channel) {
        super(LexerActionType.CHANNEL);
        this.channel = channel;
    }

    /**
     * <p>This action is implemented by calling {@link Lexer//setChannel} with the
     * value provided by {@link //getChannel}.</p>
     */
    execute(lexer) {
        lexer._channel = this.channel;
    }

    updateHashCode(hash) {
        hash.update(this.actionType, this.channel);
    }

    equals(other) {
        if (this === other) {
            return true;
        } else if (!(other instanceof LexerChannelAction)) {
            return false;
        } else {
            return this.channel === other.channel;
        }
    }

    toString() {
        return "channel(" + this.channel + ")";
    }
}
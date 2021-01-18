import RecognitionException from "./RecognitionException";

export default class LexerNoViableAltException extends RecognitionException {

    constructor(lexer, input, startIndex, deadEndConfigs) {
        super({message: "", recognizer: lexer, input: input, ctx: null});
        this.startIndex = startIndex;
        // noinspection JSUnusedGlobalSymbols
        this.deadEndConfigs = deadEndConfigs;
    }

    toString() {
        let symbol = "";
        if (this.startIndex >= 0 && this.startIndex < this.input.size) {
            symbol = this.input.getText({start: this.startIndex, stop: this.startIndex});
        }
        return "LexerNoViableAltException" + symbol;
    }
}
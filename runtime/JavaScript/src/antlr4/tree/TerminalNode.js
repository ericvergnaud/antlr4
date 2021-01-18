import ParseTree from "./ParseTree";
import Interval from "../Interval";
import Token from "../Token";

export default class TerminalNode extends ParseTree {

    constructor(symbol) {
        super();
        this.parentCtx = null;
        this.symbol = symbol;
    }

    // noinspection JSMethodCanBeStatic
    getChild(/*i*/) {
        return null;
    }

    // noinspection JSUnusedGlobalSymbols
    getSymbol() {
        return this.symbol;
    }

    getParent() {
        return this.parentCtx;
    }

    getPayload() {
        return this.symbol;
    }

    // noinspection JSUnusedGlobalSymbols
    getSourceInterval() {
        if (this.symbol === null) {
            return Interval.INVALID_INTERVAL;
        }
        const tokenIndex = this.symbol.tokenIndex;
        return new Interval(tokenIndex, tokenIndex);
    }

    // noinspection JSMethodCanBeStatic
    getChildCount() {
        return 0;
    }

    accept(visitor) {
        return visitor.visitTerminal(this);
    }

    getText() {
        return this.symbol.text;
    }

    toString() {
        if (this.symbol.type === Token.EOF) {
            return "<EOF>";
        } else {
            return this.symbol.text;
        }
    }
}


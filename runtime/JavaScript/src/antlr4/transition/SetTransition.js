// A transition containing a set of values.
import IntervalSet from "../IntervalSet";
import Token from "../Token";
import Transition from "./Transition";

export default class SetTransition extends Transition {
    constructor(target, set) {
        super(target);
        this.serializationType = Transition.SET;
        if (set !== undefined && set !== null) {
            this.label = set;
        } else {
            this.label = new IntervalSet();
            this.label.addOne(Token.INVALID_TYPE);
        }
    }

    matches(symbol, minVocabSymbol, maxVocabSymbol) {
        return this.label.contains(symbol);
    }

    toString() {
        return this.label.toString();
    }
}
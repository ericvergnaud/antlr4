import SetTransition from "./SetTransition";
import Transition from "./Transition";

export default class NotSetTransition extends SetTransition {

    constructor(target, set) {
        super(target, set);
        this.serializationType = Transition.NOT_SET;
    }

    matches(symbol, minVocabSymbol, maxVocabSymbol) {
        return symbol >= minVocabSymbol && symbol <= maxVocabSymbol &&
            !super.matches(symbol, minVocabSymbol, maxVocabSymbol);
    }

    toString() {
        return '~' + super.toString();
    }
}
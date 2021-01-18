import Transition from "./Transition";

export default class WildcardTransition extends Transition {
    constructor(target) {
        super(target);
        this.serializationType = Transition.WILDCARD;
    }

    // noinspection JSMethodCanBeStatic
    matches(symbol, minVocabSymbol, maxVocabSymbol) {
        return symbol >= minVocabSymbol && symbol <= maxVocabSymbol;
    }

    toString() {
        return ".";
    }
}
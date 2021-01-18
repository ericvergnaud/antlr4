import Transition from "./Transition";

export default class EpsilonTransition extends Transition {
    constructor(target, outermostPrecedenceReturn) {
        super(target);
        this.serializationType = Transition.EPSILON;
        this.isEpsilon = true;
        this.outermostPrecedenceReturn = outermostPrecedenceReturn;
    }

    // noinspection JSUnusedLocalSymbols,JSMethodCanBeStatic
    matches(symbol, minVocabSymbol, maxVocabSymbol) {
        return false;
    }

    toString() {
        return "epsilon";
    }
}
import AbstractPredicateTransition from "./AbstractPredicateTransition";
import Transition from "./Transition";
import PrecedencePredicate from "../atn/PrecedencePredicate";

export default class PrecedencePredicateTransition extends AbstractPredicateTransition {
    constructor(target, precedence) {
        super(target);
        this.serializationType = Transition.PRECEDENCE;
        this.precedence = precedence;
        this.isEpsilon = true;
    }

    // noinspection JSUnusedLocalSymbols,JSMethodCanBeStatic
    matches(symbol, minVocabSymbol, maxVocabSymbol) {
        return false;
    }

    getPredicate() {
        return new PrecedencePredicate(this.precedence);
    }

    toString() {
        return this.precedence + " >= _p";
    }
}
import AbstractPredicateTransition from "./AbstractPredicateTransition";
import Transition from "./Transition";
import Predicate from "../atn/Predicate";

export default class PredicateTransition extends AbstractPredicateTransition {

    constructor(target, ruleIndex, predIndex, isCtxDependent) {
        super(target);
        this.serializationType = Transition.PREDICATE;
        this.ruleIndex = ruleIndex;
        this.predIndex = predIndex;
        this.isCtxDependent = isCtxDependent; // e.g., $i ref in pred
        this.isEpsilon = true;
    }

    // noinspection JSUnusedLocalSymbols,JSMethodCanBeStatic
    matches(symbol, minVocabSymbol, maxVocabSymbol) {
        return false;
    }

    getPredicate() {
        return new Predicate(this.ruleIndex, this.predIndex, this.isCtxDependent);
    }

    toString() {
        return "pred_" + this.ruleIndex + ":" + this.predIndex;
    }
}
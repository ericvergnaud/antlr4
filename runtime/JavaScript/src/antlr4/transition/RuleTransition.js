import Transition from "./Transition";

export default class RuleTransition extends Transition {
    constructor(ruleStart, ruleIndex, precedence, followState) {
        super(ruleStart);
        // ptr to the rule definition object for this rule ref
        this.ruleIndex = ruleIndex;
        this.precedence = precedence;
        // what node to begin computations following ref to rule
        this.followState = followState;
        this.serializationType = Transition.RULE;
        this.isEpsilon = true;
    }

    // noinspection JSUnusedLocalSymbols,JSMethodCanBeStatic
    matches(symbol, minVocabSymbol, maxVocabSymbol) {
        return false;
    }
}
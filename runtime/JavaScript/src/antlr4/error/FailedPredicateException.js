import RecognitionException from "./RecognitionException";
import PredicateTransition from "../transition/PredicateTransition";

function formatMessage(predicate, message) {
    if (message !==null) {
        return message;
    } else {
        return "failed predicate: {" + predicate + "}?";
    }
}

/**
 * A semantic predicate failed during validation. Validation of predicates
 * occurs when normally parsing the alternative just like matching a token.
 * Disambiguating predicate evaluation occurs when we test a predicate during
 * prediction.
 */
export default class FailedPredicateException extends RecognitionException {
    constructor(recognizer, predicate, message) {
        super({
            message: formatMessage(predicate, message || null), recognizer: recognizer,
            input: recognizer.getInputStream(), ctx: recognizer._ctx
        });
        const s = recognizer._interp.atn.states[recognizer.state];
        const trans = s.transitions[0];
        if (trans instanceof PredicateTransition) {
            this.ruleIndex = trans.ruleIndex;
            // noinspection JSUnusedGlobalSymbols
            this.predicateIndex = trans.predIndex;
        } else {
            this.ruleIndex = 0;
            // noinspection JSUnusedGlobalSymbols
            this.predicateIndex = 0;
        }
        // noinspection JSUnusedGlobalSymbols
        this.predicate = predicate;
        this.offendingToken = recognizer.getCurrentToken();
    }
}
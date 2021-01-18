import SemanticContext from "../context/SemanticContext";

export default class PrecedencePredicate extends SemanticContext {

    constructor(precedence) {
        super();
        this.precedence = precedence === undefined ? 0 : precedence;
    }

    evaluate(parser, outerContext) {
        return parser.precpred(outerContext, this.precedence);
    }

    evalPrecedence(parser, outerContext) {
        if (parser.precpred(outerContext, this.precedence)) {
            return SemanticContext.NONE;
        } else {
            return null;
        }
    }

    compareTo(other) {
        return this.precedence - other.precedence;
    }

    // noinspection JSMethodCanBeStatic
    updateHashCode(hash) {
        hash.update(31);
    }

    equals(other) {
        if (this === other) {
            return true;
        } else if (!(other instanceof PrecedencePredicate)) {
            return false;
        } else {
            return this.precedence === other.precedence;
        }
    }

    toString() {
        return "{" + this.precedence + ">=prec}?";
    }

}
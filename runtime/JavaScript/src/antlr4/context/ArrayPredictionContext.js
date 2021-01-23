import PredictionContext from "./PredictionContext";
import {equalArrays, Hash} from "../Utils";

export default class ArrayPredictionContext extends PredictionContext {

    constructor(parents, returnStates) {
        /**
         * Parent can be null only if full ctx mode and we make an array
         * from {@link //EMPTY} and non-empty. We merge {@link //EMPTY} by using
         * null parent and
         * returnState == {@link //EMPTY_RETURN_STATE}.
         */
        const h = new Hash();
        h.update(parents, returnStates);
        const hashCode = h.finish();
        super(hashCode);
        this.parents = parents;
        this.returnStates = returnStates;
        return this;
    }

    isEmpty() {
        // since EMPTY_RETURN_STATE can only appear in the last position, we
        // don't need to verify that size==1
        return this.returnStates[0] === PredictionContext.EMPTY_RETURN_STATE;
    }

    getParent(index) {
        return this.parents[index];
    }

    getReturnState(index) {
        return this.returnStates[index];
    }

    equals(other) {
        if (this === other) {
            return true;
        } else if (!(other instanceof ArrayPredictionContext)) {
            return false;
        } else if (this.hashCode() !== other.hashCode()) {
            return false; // can't be same if hash is different
        } else {
            return equalArrays(this.returnStates, other.returnStates) &&
                equalArrays(this.parents, other.parents);
        }
    }

    toString() {
        if (this.isEmpty()) {
            return "[]";
        } else {
            let s = "[";
            for (let i = 0; i < this.returnStates.length; i++) {
                if (i > 0) {
                    s = s + ", ";
                }
                if (this.returnStates[i] === PredictionContext.EMPTY_RETURN_STATE) {
                    s = s + "$";
                    continue;
                }
                s = s + this.returnStates[i];
                if (this.parents[i] !== null) {
                    s = s + " " + this.parents[i];
                } else {
                    s = s + "null";
                }
            }
            return s + "]";
        }
    }

    get length() {
        return this.returnStates.length;
    }
}
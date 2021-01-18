import PredictionContext from "./PredictionContext";

/**
 * Used to cache {@link PredictionContext} objects. Its used for the shared
 * context cash associated with contexts in DFA states. This cache
 * can be used for both lexers and parsers.
 */
export default class PredictionContextCache {

    constructor() {
        this.cache = new Map();
    }

    /**
     * Add a context to the cache and return it. If the context already exists,
     * return that one instead and do not add a new context to the cache.
     * Protect shared cache from unsafe thread access.
     */
    add(ctx) {
        if (ctx === PredictionContext.EMPTY) {
            return PredictionContext.EMPTY;
        }
        const existing = this.cache.get(ctx) || null;
        if (existing !== null) {
            return existing;
        }
        this.cache.put(ctx, ctx);
        return ctx;
    }

    get(ctx) {
        return this.cache.get(ctx) || null;
    }

    get length() {
        return this.cache.length;
    }
}
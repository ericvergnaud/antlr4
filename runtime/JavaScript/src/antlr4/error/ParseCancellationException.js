class ParseCancellationException extends Error {

    constructor() {
        super();
        // noinspection JSUnresolvedFunction
        Error.captureStackTrace(this, ParseCancellationException);
    }
}
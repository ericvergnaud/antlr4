import DFASerializer from "./DFASerializer";

export default class LexerDFASerializer extends DFASerializer {

    constructor(dfa) {
        super(dfa, null);
    }

    getEdgeLabel(i) {
        return "'" + String.fromCharCode(i) + "'";
    }
}
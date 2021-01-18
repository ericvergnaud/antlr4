import ParseTree from "./ParseTree";

export default class RuleNode extends ParseTree {
    constructor() {
        super();
    }

    getRuleContext() {
        throw new Error("missing interface implementation")
    }
}
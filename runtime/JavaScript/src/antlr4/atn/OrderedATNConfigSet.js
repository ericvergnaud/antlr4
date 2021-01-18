import * as Utils from "../Utils";
import ATNConfigSet from "./ATNConfigSet";

export default class OrderedATNConfigSet extends ATNConfigSet {

    constructor() {
        super();
        // noinspection JSUnusedGlobalSymbols
        this.configLookup = new Utils.Set();
    }

}
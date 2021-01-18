/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

import Token from "./Token";
import ProxyErrorListener from "./error/ProxyErrorListener";


export default class Recognizer {
    constructor() {
        this._listeners = [ ConsoleErrorListener.INSTANCE ];
        this._interp = null;
        this._stateNumber = -1;
    }

    // noinspection JSMethodCanBeStatic,JSUnusedGlobalSymbols
    checkVersion(toolVersion) {
        const runtimeVersion = "4.9.1";
        if (runtimeVersion !== toolVersion) {
            console.log("ANTLR runtime and generated code versions disagree: " + runtimeVersion + "!=" + toolVersion);
        }
    }

    // noinspection JSUnusedGlobalSymbols
    addErrorListener(listener) {
        this._listeners.push(listener);
    }

    // noinspection JSUnusedGlobalSymbols
    removeErrorListeners() {
        this._listeners = [];
    }

    getTokenTypeMap() {
        // noinspection JSUnresolvedFunction
        const tokenNames = this.getTokenNames();
        if (tokenNames===null) {
            throw("The current recognizer does not provide a list of token names.");
        }
        // noinspection JSUnresolvedVariable
        let result = this.tokenTypeMapCache[tokenNames];
        if(result === undefined) {
            result = tokenNames.reduce(function(o, k, i) { o[k] = i; });
            result.EOF = Token.EOF;
            // noinspection JSUnresolvedVariable
            this.tokenTypeMapCache[tokenNames] = result;
        }
        return result;
    }

    /**
     * Get a map from rule names to rule indexes.
     * <p>Used for XPath and tree pattern compilation.</p>
     */
    getRuleIndexMap() {
        // noinspection JSUnresolvedVariable
        const ruleNames = this.ruleNames;
        if (ruleNames===null) {
            throw("The current recognizer does not provide a list of rule names.");
        }
        // noinspection JSUnresolvedVariable
        let result = this.ruleIndexMapCache[ruleNames]; // todo: should it be Recognizer.ruleIndexMapCache ?
        if(result===undefined) {
            result = ruleNames.reduce(function(o, k, i) { o[k] = i; });
            // noinspection JSUnresolvedVariable
            this.ruleIndexMapCache[ruleNames] = result;
        }
        return result;
    }

    // noinspection JSUnusedGlobalSymbols
    getTokenType(tokenName) {
        const ttype = this.getTokenTypeMap()[tokenName];
        if (ttype !==undefined) {
            return ttype;
        } else {
            return Token.INVALID_TYPE;
        }
    }

    // What is the error header, normally line/character position information?
    // noinspection JSUnusedGlobalSymbols,JSMethodCanBeStatic
    getErrorHeader(e) {
        // noinspection JSUnresolvedFunction
        const line = e.getOffendingToken().line;
        // noinspection JSUnresolvedFunction
        const column = e.getOffendingToken().column;
        return "line " + line + ":" + column;
    }

    // noinspection JSUnusedGlobalSymbols,JSMethodCanBeStatic
    /**
     * How should a token be displayed in an error message? The default
     * is to display just the text, but during development you might
     * want to have a lot of information spit out.  Override in that case
     * to use t.toString() (which, for CommonToken, dumps everything about
     * the token). This is better than forcing you to override a method in
     * your token objects because you don't have to go modify your lexer
     * so that it creates a new Java type.
     *
     * @deprecated This method is not called by the ANTLR 4 Runtime. Specific
     * implementations of {@link ANTLRErrorStrategy} may provide a similar
     * feature when necessary. For example, see
     * {@link DefaultErrorStrategy //getTokenErrorDisplay}.*/
    getTokenErrorDisplay(t) {
        if (t===null) {
            return "<no token>";
        }
        let s = t.text;
        if (s===null) {
            if (t.type===Token.EOF) {
                s = "<EOF>";
            } else {
                s = "<" + t.type + ">";
            }
        }
        s = s.replace("\n","\\n").replace("\r","\\r").replace("\t","\\t");
        return "'" + s + "'";
    }

    getErrorListenerDispatch() {
        return new ProxyErrorListener(this._listeners);
    }

    // noinspection JSMethodCanBeStatic
    /**
     * subclass needs to override these if there are sempreds or actions
     * that the ATN interp needs to execute
     */
    sempred(/*localctx, ruleIndex, actionIndex*/) {
        return true;
    }

    // noinspection JSUnusedGlobalSymbols,JSMethodCanBeStatic
    precpred(/*localctx , precedence*/) {
        return true;
    }

    get state(){
        return this._stateNumber;
    }

    set state(state) {
        this._stateNumber = state;
    }
}

Recognizer.tokenTypeMapCache = {};
Recognizer.ruleIndexMapCache = {};


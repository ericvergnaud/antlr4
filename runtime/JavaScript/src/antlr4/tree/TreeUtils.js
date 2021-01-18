/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

import Token from "./../Token";
import {escapeWhitespace} from "../Utils";
import RuleNode from "./RuleNode";
import ErrorNode from "./ErrorNode";
import TerminalNode from "./TerminalNode";


/**
 * Print out a whole tree in LISP form. {@link //getNodeText} is used on the
 *  node payloads to get the text for the nodes.  Detect
 *  parse trees and extract data appropriately.
 */
export function toStringTree(tree, ruleNames, recog) {
    ruleNames = ruleNames || null;
    recog = recog || null;
    if(recog!==null) {
        // noinspection JSUnresolvedVariable
        ruleNames = recog.ruleNames;
    }
    let s = getNodeText(tree, ruleNames);
    s = escapeWhitespace(s, false);
    const c = tree.getChildCount();
    if(c===0) {
        return s;
    }
    let res = "(" + s + ' ';
    if(c>0) {
        s = toStringTree(tree.getChild(0), ruleNames);
        res = res.concat(s);
    }
    for(let i=1;i<c;i++) {
        s = toStringTree(tree.getChild(i), ruleNames);
        res = res.concat(' ' + s);
    }
    res = res.concat(")");
    return res;
}

// noinspection JSUnusedGlobalSymbols
export function getNodeText(t, ruleNames, recog) {
    ruleNames = ruleNames || null;
    recog = recog || null;
    if(recog!==null) {
        // noinspection JSUnresolvedVariable
        ruleNames = recog.ruleNames;
    }
    if(ruleNames!==null) {
        if (t instanceof RuleNode) {
            const context = t.getRuleContext();
            const altNumber = context.getAltNumber();
            // use const value of ATN.INVALID_ALT_NUMBER to avoid circular dependency
            if ( altNumber !== 0 ) {
                return ruleNames[t.ruleIndex]+":"+altNumber;
            }
            return ruleNames[t.ruleIndex];
        } else if ( t instanceof ErrorNode) {
            return t.toString();
        } else if(t instanceof TerminalNode) {
            if(t.symbol!==null) {
                return t.symbol.text;
            }
        }
    }
    // no recog for rule names
    const payload = t.getPayload();
    if (payload instanceof Token ) {
        return payload.text;
    }
    return t.getPayload().toString();
}

// noinspection JSUnusedGlobalSymbols
/**
 * Return ordered list of all children of this node
 */
export function getChildren(t) {
    const list = [];
    for(let i=0;i<t.getChildCount();i++) {
        list.push(t.getChild(i));
    }
    return list;
}

// noinspection JSUnusedGlobalSymbols
/**
 * Return a list of all ancestors of this node.  The first node of
 * list is the root and the last is the parent of this node.
 */
export function getAncestors(t) {
    let ancestors = [];
    t = t.getParent();
    while(t!==null) {
        ancestors = [t].concat(ancestors);
        t = t.getParent();
    }
    return ancestors;
}

// noinspection JSUnusedGlobalSymbols
export function findAllTokenNodes(t, ttype) {
    return findAllNodes(t, ttype, true);
}

// noinspection JSUnusedGlobalSymbols
export function findAllRuleNodes(t, ruleIndex) {
    return findAllNodes(t, ruleIndex, false);
}

export function findAllNodes(t, index, findTokens) {
    const nodes = [];
    _findAllNodes(t, index, findTokens, nodes);
    return nodes;
}

function _findAllNodes(t, index, findTokens, nodes) {
    // check this node (the root) first
    if(findTokens && (t instanceof TerminalNode)) {
        if(t.symbol.type===index) {
            nodes.push(t);
        }
    } else if(!findTokens && (t instanceof RuleNode)) {
        if(t.ruleIndex===index) {
            nodes.push(t);
        }
    }
    // check children
    for(let i=0;i<t.getChildCount();i++) {
        _findAllNodes(t.getChild(i), index, findTokens, nodes);
    }
}

// noinspection JSUnusedGlobalSymbols
export function descendants(t) {
    let nodes = [t];
    for(let i=0;i<t.getChildCount();i++) {
        nodes = nodes.concat(descendants(t.getChild(i)));
    }
    return nodes;
}

export default {}
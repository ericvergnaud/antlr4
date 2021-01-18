/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

import * as TreeUtils from "./TreeUtils";
import RuleNode from "./RuleNode";
import ErrorNode from "./ErrorNode";
import TerminalNode from "./TerminalNode";
import ParseTreeListener from "./ParseTreeListener";
import ParseTreeVisitor from "./ParseTreeVisitor";
import ParseTreeWalker from "./ParseTreeWalker";

const tree = { ...TreeUtils, RuleNode,
    ErrorNode,
    ErrorNodeImpl : ErrorNode,
    TerminalNode,
    TerminalNodeImpl: TerminalNode,
    ParseTreeListener,
    ParseTreeVisitor,
    ParseTreeWalker,
};

export default tree;

/* Copyright (c) 2012-2017 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */
import atn from "./atn/index";
import dfa from "./dfa/index";
import tree from "./tree/index";
import error from "./error/index";
import codepointat from "./polyfills/codepointat";
import fromcodepoint from "./polyfills/fromcodepoint";
import CharStreams from "./CharStreams";
import InputStream from "./InputStream";
import FileStream from "./FileStream";
import CommonTokenStream from "./CommonTokenStream";
import Lexer from "./Lexer";
import Parser from "./Parser";
import ParserRuleContext from "./context/ParserRuleContext";
import * as Utils from "./Utils";
import LL1Analyzer from "./atn/LL1Analyzer";
import PredictionContextCache from "./context/PredictionContextCache";
import CommonToken from "./CommonToken";
import Interval from "./Interval";
import IntervalSet from "./IntervalSet";
import Token from "./Token";

const antlr4 = { atn, dfa, tree, error, codepointat, fromcodepoint,
    Token, CommonToken, CharStreams, InputStream, FileStream, CommonTokenStream,
    Lexer, Parser, PredictionContextCache, ParserRuleContext, LL1Analyzer,
    Interval, IntervalSet, Utils };

export default antlr4;

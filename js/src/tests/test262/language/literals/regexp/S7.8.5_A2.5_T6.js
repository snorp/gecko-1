// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "RegularExpressionChar :: BackslashSequence :: \\LineTerminator is incorrect"
es5id: 7.8.5_A2.5_T6
description: Paragraph separator, with eval
---*/

//CHECK#1
try {
   eval("/a\\\u2029/").source;
   $ERROR('#1.1: RegularExpressionChar :: BackslashSequence :: \\Paragraph separator is incorrect. Actual: ' + (eval("/a\\\u2029/").source)); 
}
catch (e) {
  if ((e instanceof SyntaxError) !== true) {
     $ERROR('#1.2: RegularExpressionChar :: BackslashSequence :: \\Paragraph separator is incorrect. Actual: ' + (e));
  }
}

reportCompare(0, 0);

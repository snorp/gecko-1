'use strict';
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.1.1-1gs
description: Strict Mode - 'this' object at the global scope is not undefined
flags: [onlyStrict]
---*/

"use strict";

assert.notSameValue(this, undefined);

reportCompare(0, 0);

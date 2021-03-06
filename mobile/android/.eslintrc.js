"use strict";

module.exports = {
  rules: {
    // XXX Bug 1358949 - This should be reduced down - probably to 20 or to
    // be removed & synced with the mozilla/recommended value.
    "complexity": ["error", 31],

    // Rules enabled in mozilla/recommended, and disabled for now, we should
    // re-enable these over time.
    "consistent-return": "off",
    "no-empty": "off",
    "no-native-reassign": "off",
    "no-nested-ternary": "off",
    "no-new-object": "off",
    "no-octal": "off",
    "no-redeclare": "off",
    "no-useless-call": "off",
    "no-useless-concat": "off",
    "no-undef": "off",
    "no-unused-vars": "off",
    "object-shorthand": "off",
  }
};

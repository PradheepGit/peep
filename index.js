/**
 * @fileoverview Plugin for DOM specific rules
 * @author Pradheep
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

const allRules = requireIndex(__dirname + "/rules");

// import all rules in lib/rules
module.exports.rules = allRules;

module.exports.configs = {
	recommended: {
      plugins: [
        'webperf'
      ],
      rules : {
      	'webperf/show-last' : 2,
      	'webperf/layout-thrashing' : 2,
      	'webperf/no-closure' : 2,
      	'webperf/no-multipleDOMLookup' : 2,
      	'webperf/no-attribute-selectors' : 2,
      	'webperf/directly-select-with-id' : 2,
      	'webperf/disable-comment' : 2,
      	'webperf/no-async-false' : 2,
      	'webperf/no-global-variables' : 2,
      	'webperf/no-complex-selector' : 2,
      	'webperf/no-animate' : 2,
      }
}
};



// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';


function defer(prim, prim$1) {
  setTimeout(prim, prim$1);
  return /* () */0;
}

function nextTick(prim) {
  setImmediate(prim);
  return /* () */0;
}

var hardwareConcurrency = self.navigator.hardwareConcurrency;

exports.defer = defer;
exports.nextTick = nextTick;
exports.hardwareConcurrency = hardwareConcurrency;
/* hardwareConcurrency Not a pure module */
'use strict';
pxsim.noRefCounting();
pxsim.setTitle("base");
pxsim.setConfigData({}, {});
pxsim.pxtrt.mapKeyNames = [
 ""
];
__this.setupPerfCounters([]);


var _main___P1 = entryPoint = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    r0 = globals._pollEventQueue___123;
    r0 = undefined;
    globals._pollEventQueue___123 = (r0);
    r0 = globals.i___142;
    r0 = 1;
    globals.i___142 = (r0);
    r0 = globals.f___143;
    r0 = 0.5;
    globals.f___143 = (r0);
    r0 = globals.i___142;
    s.tmp_0 = r0;
    r0 = globals.f___143;
    s.tmp_1 = r0;
    r0 = (s.tmp_0 + s.tmp_1);
    s.tmp_2 = r0;
    r0 = globals.plus___144;
    r0 = s.tmp_2;
    globals.plus___144 = (r0);
    r0 = globals.i___142;
    s.tmp_0 = r0;
    r0 = globals.f___143;
    s.tmp_1 = r0;
    r0 = (s.tmp_0 - s.tmp_1);
    s.tmp_2 = r0;
    r0 = globals.minus___145;
    r0 = s.tmp_2;
    globals.minus___145 = (r0);
    r0 = pxsim.Math_.random();
    s.tmp_0 = r0;
    r0 = globals.r___146;
    r0 = s.tmp_0;
    globals.r___146 = (r0);
    r0 = pxsim.Math_.randomRange(5, 10);
    s.tmp_0 = r0;
    r0 = globals.ri___147;
    r0 = s.tmp_0;
    globals.ri___147 = (r0);
    s.tmp_0 = { fn: forever__P128, parent: s };
    r0 = inline__P148;
    s.tmp_0.arg0 = r0;
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
_main___P1.info = {"start":0,"length":0,"line":0,"column":0,"endLine":0,"endColumn":0,"fileName":"test.ts","functionName":"<main>"}
_main___P1.continuations = [  ]



var inline__P148  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    s.tmp_0 = { fn: pause__P129, parent: s };
    r0 = 100;
    s.tmp_0.arg0 = r0;
    s.pc = 2;
    return actionCall(s.tmp_0)
  case 2:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
inline__P148.info = {"start":122,"length":24,"line":8,"column":8,"endLine":10,"endColumn":1,"fileName":"test.ts","functionName":"inline"}



var pause__P129  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    s.tmp_0 = r0;
    setupResume(s, 2);
    pxsim.loops.pause(s.tmp_0);
    checkResumeConsumed();
    return;
  case 2:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
pause__P129.info = {"start":5265,"length":57,"line":179,"column":0,"endLine":181,"endColumn":1,"fileName":"control.ts","functionName":"pause"}



var forever__P128  = function (s) {
var r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0)) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    s.tmp_0 = r0;
    r0 = pxsim.loops.forever(s.tmp_0);
    return leave(s, r0)
  default: oops()
} } }
forever__P128.info = {"start":4953,"length":63,"line":168,"column":0,"endLine":170,"endColumn":1,"fileName":"control.ts","functionName":"forever"}


setupDebugger(1)

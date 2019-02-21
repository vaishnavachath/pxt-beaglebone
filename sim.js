var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../node_modules/pxt-core/localtypings/pxtarget.d.ts"/>
/// <reference path="../built/common-sim.d.ts"/>
var pxsim;
(function (pxsim) {
    function pinByName(name) {
        var v = pxsim.pinIds[name];
        if (v == null) {
            v = pxsim.getConfig(pxsim.getConfigKey("PIN_" + name));
        }
        var p = pxsim.pxtcore.getPin(v);
        if (!p)
            console.error("missing pin: " + name + "(" + v + ")");
        return p;
    }
    pxsim.pinByName = pinByName;
    var DalBoard = /** @class */ (function (_super) {
        __extends(DalBoard, _super);
        function DalBoard(boardDefinition) {
            var _this = _super.call(this) || this;
            _this.boardDefinition = boardDefinition;
            var pinList = [];
            var servos = {};
            function pinId(name) {
                var key = pxsim.getConfigKey("PIN_" + name);
                if (key != null)
                    return pxsim.getConfig(key);
                // this is for P03 format used by NRF - these are direct names of CPU pins
                var m = /^P(\d+)$/.exec(name);
                if (m)
                    return parseInt(m[1]);
                return null;
            }
            pxsim.pinIds = {};
            for (var _i = 0, _a = boardDefinition.visual.pinBlocks; _i < _a.length; _i++) {
                var block = _a[_i];
                // scan labels
                for (var _b = 0, _c = block.labels; _b < _c.length; _b++) {
                    var lbl = _c[_b];
                    for (var _d = 0, _e = lbl.split(/[\/,]/); _d < _e.length; _d++) {
                        var sublbl = _e[_d];
                        sublbl = sublbl.replace(/[~\s]+/g, "");
                        var id = pinId(sublbl);
                        if (id != null) {
                            if (pinList.indexOf(id) < 0) {
                                pinList.push(id);
                                if ((2 /* PA02 */ <= id && id <= 11 /* PA11 */) ||
                                    (32 /* PB00 */ <= id && id <= 41 /* PB09 */))
                                    servos[sublbl] = id;
                            }
                            pxsim.pinIds[lbl] = id;
                            pxsim.pinIds[sublbl] = id;
                        }
                    }
                }
            }
            // also add pins that might not have visual representation
            for (var _f = 0, _g = pxsim.getAllConfigKeys(); _f < _g.length; _f++) {
                var k = _g[_f];
                if (/^P/.test(k) || /^U/.test(k)) {
                    var id = pxsim.getConfig(pxsim.getConfigKey(k));
                    if (id != null) {
                        if (pinList.indexOf(id) < 0)
                            pinList.push(id);
                        pxsim.pinIds[k.replace(/^PIN_/, "")] = id;
                    }
                }
            }
            _this.neopixelPin = new pxsim.Pin(pxsim.getConfig(20 /* CFG_PIN_NEOPIXEL */) ||
                pxsim.getConfig(8 /* CFG_PIN_DOTSTAR_DATA */) ||
                30 /* PA30 */);
            // todo fix this
            _this.pixelPin = _this.neopixelPin;
            _this._neopixelState = {};
            _this.microphoneState = new pxsim.AnalogSensorState(3001 /* DEVICE_ID_MICROPHONE */, 52, 120, 75, 96);
            _this.storageState = new pxsim.StorageState();
            //this.jacdacState = new JacDacState(this);
            // TODO we need this.buttonState set for pxtcore.getButtonByPin(), but
            // this should be probably merged with buttonpair somehow
            _this.builtinParts["pinbuttons"] = _this.builtinParts["buttons"]
                = _this.buttonState = new pxsim.CommonButtonState();
            _this.builtinParts["touch"] = _this.touchButtonState = new pxsim.TouchButtonState(pinList);
            // components
            _this.builtinParts["neopixel"] = function (pin) { return _this.neopixelState(pin.id); }; //this.neopixelState(this.neopixelPin.id);
            _this.builtinParts["audio"] = _this.audioState = new pxsim.AudioState();
            _this.builtinParts["edgeconnector"] = _this.edgeConnectorState = new pxsim.EdgeConnectorState({
                pins: pinList,
                servos: servos
            });
            _this.builtinParts["microservo"] = _this.edgeConnectorState;
            _this.builtinParts["accelerometer"] = _this.accelerometerState = new pxsim.AccelerometerState(pxsim.runtime);
            ;
            _this.builtinParts["screen"] = _this.screenState = new pxsim.ScreenState([], pxsim.getConfig(37 /* CFG_DISPLAY_WIDTH */) || 160, pxsim.getConfig(38 /* CFG_DISPLAY_HEIGHT */) || 128);
            _this.builtinVisuals["buttons"] = function () { return new pxsim.visuals.ButtonView(); };
            _this.builtinVisuals["microservo"] = function () { return new pxsim.visuals.MicroServoView(parsePinString); };
            _this.builtinPartVisuals["buttons"] = function (xy) { return pxsim.visuals.mkBtnSvg(xy); };
            _this.builtinPartVisuals["microservo"] = function (xy) { return pxsim.visuals.mkMicroServoPart(xy); };
            _this.builtinParts["slideswitch"] = function (pin) { return new pxsim.ToggleState(pin); };
            _this.builtinVisuals["slideswitch"] = function () { return new pxsim.visuals.ToggleComponentVisual(parsePinString); };
            _this.builtinPartVisuals["slideswitch"] = function (xy) { return pxsim.visuals.mkSideSwitchPart(xy); };
            _this.builtinParts["led"] = function (pin) { return new pxsim.ToggleState(pin); };
            _this.builtinVisuals["led"] = function () { return new pxsim.visuals.LedView(parsePinString); };
            _this.builtinPartVisuals["led"] = function (xy) { return pxsim.visuals.mkLedPart(xy); };
            _this.builtinVisuals["photocell"] = function () { return new pxsim.visuals.PhotoCellView(parsePinString); };
            _this.builtinPartVisuals["photocell"] = function (xy) { return pxsim.visuals.mkPhotoCellPart(xy); };
            _this.builtinVisuals["screen"] = function () { return new pxsim.visuals.ScreenView(); };
            _this.builtinPartVisuals["screen"] = function (xy) { return pxsim.visuals.mkScreenPart(xy); };
            return _this;
        }
        DalBoard.prototype.receiveMessage = function (msg) {
            _super.prototype.receiveMessage.call(this, msg);
            if (!pxsim.runtime || pxsim.runtime.dead)
                return;
            switch (msg.type || "") {
                case "eventbus":
                    var ev = msg;
                    this.bus.queue(ev.id, ev.eventid, ev.value);
                    break;
                case "serial":
                    var data = msg.data || "";
                    // TODO
                    break;
                case "radiopacket":
                    var packet = msg;
                    //this.radioState.recievePacket(packet);
                    break;
            }
        };
        DalBoard.prototype.kill = function () {
            _super.prototype.kill.call(this);
            pxsim.AudioContextManager.stop();
        };
        DalBoard.prototype.initAsync = function (msg) {
            _super.prototype.initAsync.call(this, msg);
            var options = (msg.options || {});
            var boardDef = msg.boardDefinition;
            var cmpsList = msg.parts;
            cmpsList.sort();
            var cmpDefs = msg.partDefinitions || {};
            var fnArgs = msg.fnArgs;
            var opts = {
                state: this,
                boardDef: boardDef,
                partsList: cmpsList,
                partDefs: cmpDefs,
                fnArgs: fnArgs,
                maxWidth: "100%",
                maxHeight: "100%",
            };
            var viewHost = new pxsim.visuals.BoardHost(pxsim.visuals.mkBoardView({
                visual: boardDef.visual,
                boardDef: boardDef
            }), opts);
            document.body.innerHTML = ""; // clear children
            document.body.appendChild(this.view = viewHost.getView());
            this.accelerometerState.attachEvents(this.view);
            return Promise.resolve();
        };
        DalBoard.prototype.accelerometer = function () {
            return this.accelerometerState.accelerometer;
        };
        DalBoard.prototype.getDefaultPitchPin = function () {
            // amp always on PA02, regardless which name is has
            return pxsim.pxtcore.getPin(2 /* PA02 */);
        };
        DalBoard.prototype.defaultNeopixelPin = function () {
            return this.neopixelPin;
        };
        DalBoard.prototype.tryGetNeopixelState = function (pinId) {
            return this._neopixelState[pinId];
        };
        DalBoard.prototype.neopixelState = function (pinId) {
            var state = this._neopixelState[pinId];
            if (!state)
                state = this._neopixelState[pinId] = new pxsim.CommonNeoPixelState();
            return state;
        };
        return DalBoard;
    }(pxsim.CoreBoard));
    pxsim.DalBoard = DalBoard;
    function initRuntimeWithDalBoard(msg) {
        pxsim.U.assert(!pxsim.runtime.board);
        var b = new DalBoard(msg.boardDefinition);
        pxsim.runtime.board = b;
        pxsim.runtime.postError = function (e) {
            // TODO
            pxsim.runtime.updateDisplay();
        };
    }
    pxsim.initRuntimeWithDalBoard = initRuntimeWithDalBoard;
    if (!pxsim.initCurrentRuntime) {
        pxsim.initCurrentRuntime = initRuntimeWithDalBoard;
    }
    function parsePinString(pinString) {
        var pinName = pxsim.readPin(pinString);
        return pinName ? pxsim.pxtcore.getPin(pxsim.pinIds[pinName]) : undefined;
    }
    pxsim.parsePinString = parsePinString;
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        var svg = pxsim.svg;
        visuals.VIEW_WIDTH = 372.3404255319149;
        visuals.VIEW_HEIGHT = 361.70212765957444;
        var TOP_MARGIN = 20;
        var MID_MARGIN = 40;
        var BOT_MARGIN = 20;
        var PIN_LBL_SIZE = visuals.PIN_DIST * 0.7;
        var PIN_LBL_HOVER_SIZE = PIN_LBL_SIZE * 1.5;
        var SQUARE_PIN_WIDTH = visuals.PIN_DIST * 0.66666;
        var SQUARE_PIN_HOVER_WIDTH = visuals.PIN_DIST * 0.66666 + visuals.PIN_DIST / 3.0;
        var STYLE = "\n.sim-board-pin {\n    stroke: #404040;\n    fill: #000000;\n}\n.sim-board-button {\n    stroke: #aaa;\n    stroke-width: 3px;\n    fill: #666;\n}\n.sim-board-button.pressed {\n    fill: #ee0;\n}\n.sim-board-button:hover {\n    stroke-width: 4px;\n    stroke: #ee0;\n    cursor: pointer;\n}\n    ";
        visuals.themes = ["#3ADCFE"].map(function (accent) {
            return {
                accent: accent,
                pin: "#D4AF37",
                pinTouched: "#FFA500",
                pinActive: "#FF5500",
                ledOn: "#ff7777",
                ledOff: "#fff",
                buttonOuter: "#979797",
                buttonUps: ["#000", "#000", "#000"],
                buttonDown: "#FFA500",
                virtualButtonDown: "#FFA500",
                virtualButtonOuter: "#333",
                virtualButtonUp: "#fff",
                lightLevelOn: "yellow",
                lightLevelOff: "#555",
                soundLevelOn: "#7f8c8d",
                soundLevelOff: "#555",
            };
        });
        function randomTheme() {
            return visuals.themes[Math.floor(Math.random() * visuals.themes.length)];
        }
        visuals.randomTheme = randomTheme;
        function getBoardDimensions(vis) {
            var scaleFn = function (n) { return n * (visuals.PIN_DIST / vis.pinDist); };
            var width = scaleFn(vis.width);
            return {
                scaleFn: scaleFn,
                height: scaleFn(vis.height),
                width: width,
                xOff: (visuals.VIEW_WIDTH - width) / 2.0,
                yOff: TOP_MARGIN
            };
        }
        visuals.getBoardDimensions = getBoardDimensions;
        var MetroBoardSvg = /** @class */ (function (_super) {
            __extends(MetroBoardSvg, _super);
            function MetroBoardSvg(props) {
                var _this = _super.call(this, props) || this;
                _this.props = props;
                var el = _this.getView().el;
                _this.addDefs(el);
                _this.onBoardLeds = [];
                _this.onBoardNeopixels = [];
                _this.onBoardTouchPads = [];
                _this.onBoardButtons = [];
                // neopixels/leds
                for (var _i = 0, _a = props.visualDef.leds || []; _i < _a.length; _i++) {
                    var l = _a[_i];
                    if (l.color == "neopixel") {
                        var onBoardNeopixel = new BoardNeopixel(l.label, l.x, l.y, l.w || 0);
                        _this.onBoardNeopixels.push(onBoardNeopixel);
                        el.appendChild(onBoardNeopixel.element);
                    }
                    else {
                        var pin = pxsim.pinByName(l.label);
                        if (pin) {
                            var bl = new BoardLed(l.x, l.y, l.color, pxsim.pinByName(l.label), l.w || 9, l.h || 8);
                            _this.onBoardLeds.push(bl);
                            el.appendChild(bl.element);
                        }
                    }
                }
                _this.onBoardNeopixels.sort(function (l, r) {
                    var li = parseInt(l.name.replace(/^[^\d]*/, '')) || 0;
                    var ri = parseInt(r.name.replace(/^[^\d]*/, '')) || 0;
                    return li < ri ? -1 : li > ri ? 1 : 0;
                });
                // reset button
                if (props.visualDef.reset) {
                    _this.onBoardReset = new BoardResetButton(props.visualDef.reset);
                    el.appendChild(_this.onBoardReset.element);
                }
                // touch pads
                for (var _b = 0, _c = props.visualDef.touchPads || []; _b < _c.length; _b++) {
                    var l = _c[_b];
                    var pin = pxsim.pinIds[l.label];
                    if (!pin) {
                        console.error("touch pin " + pin + " not found");
                        continue;
                    }
                    var tp = new BoardTouchButton(l, pin);
                    _this.onBoardTouchPads.push(tp);
                    el.appendChild(tp.element);
                }
                // regular buttons
                for (var _d = 0, _e = props.visualDef.buttons || []; _d < _e.length; _d++) {
                    var l = _e[_d];
                    var tp = new BoardButton(l);
                    _this.onBoardButtons.push(tp);
                    el.appendChild(tp.element);
                }
                if (props && props.theme)
                    _this.updateTheme();
                if (props && props.runtime) {
                    _this.board = _this.props.runtime.board;
                    _this.board.updateSubscribers.push(function () { return _this.updateState(); });
                    _this.updateState();
                }
                return _this;
            }
            MetroBoardSvg.prototype.updateTheme = function () {
            };
            MetroBoardSvg.prototype.updateState = function () {
                this.onBoardLeds.forEach(function (l) { return l.updateState(); });
                var state = this.board.neopixelState(this.board.defaultNeopixelPin().id);
                if (state.buffer) {
                    for (var i = 0; i < this.onBoardNeopixels.length; ++i) {
                        var rgb = state.pixelColor(i);
                        if (rgb !== null)
                            this.onBoardNeopixels[i].setColor(rgb);
                    }
                }
            };
            MetroBoardSvg.prototype.addDefs = function (el) {
                var defs = svg.child(el, "defs", {});
                var neopixelglow = svg.child(defs, "filter", { id: "neopixelglow", x: "-200%", y: "-200%", width: "400%", height: "400%" });
                svg.child(neopixelglow, "feGaussianBlur", { stdDeviation: "4.3", result: "coloredBlur" });
                var neopixelmerge = svg.child(neopixelglow, "feMerge", {});
                svg.child(neopixelmerge, "feMergeNode", { in: "coloredBlur" });
                svg.child(neopixelmerge, "feMergeNode", { in: "SourceGraphic" });
                var style = svg.child(el, "style", {});
                style.textContent = STYLE;
            };
            return MetroBoardSvg;
        }(visuals.GenericBoardSvg));
        visuals.MetroBoardSvg = MetroBoardSvg;
        var BoardResetButton = /** @class */ (function () {
            function BoardResetButton(p) {
                var _this = this;
                p.w = p.w || 15;
                p.h = p.h || 15;
                this.element = svg.elt("circle", {
                    cx: p.x + p.w / 2,
                    cy: p.y + p.h / 2,
                    r: Math.max(p.w, p.h) / 2,
                    class: "sim-board-button"
                });
                svg.title(this.element, "RESET");
                // hooking up events
                pxsim.pointerEvents.down.forEach(function (evid) { return _this.element.addEventListener(evid, function (ev) {
                    svg.addClass(_this.element, "pressed");
                    pxsim.Runtime.postMessage({
                        type: "simulator",
                        command: "restart"
                    });
                }); });
                this.element.addEventListener(pxsim.pointerEvents.leave, function (ev) {
                    svg.removeClass(_this.element, "pressed");
                });
                this.element.addEventListener(pxsim.pointerEvents.up, function (ev) {
                    svg.removeClass(_this.element, "pressed");
                });
            }
            return BoardResetButton;
        }());
        var BoardLed = /** @class */ (function () {
            function BoardLed(x, y, colorOn, pin, w, h) {
                this.colorOn = colorOn;
                this.pin = pin;
                this.colorOff = "#aaa";
                this.element = svg.elt("rect", { x: x, y: y, width: w, height: h, fill: this.colorOff });
            }
            BoardLed.prototype.updateTheme = function (colorOff, colorOn) {
                if (colorOff) {
                    this.colorOff = colorOff;
                }
                if (colorOn) {
                    this.colorOn = colorOn;
                }
            };
            BoardLed.prototype.updateState = function () {
                if (this.pin.value > 0) {
                    this.element.setAttribute("fill", this.colorOn);
                    svg.filter(this.element, "url(#neopixelglow)");
                }
                else {
                    this.element.setAttribute("fill", this.colorOff);
                    svg.filter(this.element, null);
                }
            };
            return BoardLed;
        }());
        var BoardNeopixel = /** @class */ (function () {
            function BoardNeopixel(name, x, y, r) {
                this.name = name;
                this.element = svg.elt("circle", { cx: x + r / 2, cy: y + r / 2, r: 10 });
                svg.title(this.element, name);
            }
            BoardNeopixel.prototype.setColor = function (rgb) {
                var hsl = visuals.rgbToHsl(rgb);
                var h = hsl[0], s = hsl[1], l = hsl[2];
                var lx = Math.max(l * 1.3, 85);
                // at least 10% luminosity
                l = l * 90 / 100 + 10;
                this.element.style.stroke = "hsl(" + h + ", " + s + "%, " + Math.min(l * 3, 75) + "%)";
                this.element.style.strokeWidth = "1.5";
                svg.fill(this.element, "hsl(" + h + ", " + s + "%, " + lx + "%)");
                svg.filter(this.element, "url(#neopixelglow)");
            };
            return BoardNeopixel;
        }());
        var BoardButton = /** @class */ (function () {
            function BoardButton(def) {
                var _this = this;
                this.def = def;
                def.w = def.w || 15;
                def.h = def.h || 15;
                this.element = svg.elt("circle", {
                    cx: def.x + def.w / 2,
                    cy: def.y + def.h / 2,
                    r: Math.max(def.w, def.h) / 2,
                    class: "sim-board-button"
                });
                svg.title(this.element, def.label);
                // resolve button
                this.button = def.index !== undefined
                    ? pxsim.pxtcore.getButton(def.index)
                    : pxsim.pxtcore.getButtonByPin(pxsim.pinIds[def.label]);
                // hooking up events
                pxsim.pointerEvents.down.forEach(function (evid) { return _this.element.addEventListener(evid, function (ev) {
                    _this.button.setPressed(true);
                    svg.addClass(_this.element, "pressed");
                }); });
                this.element.addEventListener(pxsim.pointerEvents.leave, function (ev) {
                    svg.removeClass(_this.element, "pressed");
                    _this.button.setPressed(false);
                });
                this.element.addEventListener(pxsim.pointerEvents.up, function (ev) {
                    svg.removeClass(_this.element, "pressed");
                    _this.button.setPressed(false);
                });
            }
            return BoardButton;
        }());
        var BoardTouchButton = /** @class */ (function () {
            function BoardTouchButton(def, pinId) {
                var _this = this;
                this.def = def;
                def.w = def.w || 15;
                def.h = def.h || 15;
                this.element = svg.elt("circle", {
                    cx: def.x + def.w / 2,
                    cy: def.y + def.h / 2,
                    r: Math.max(def.w, def.h) / 2,
                    class: "sim-board-button"
                });
                svg.title(this.element, def.label);
                // resolve button
                this.button = pxsim.pxtcore.getTouchButton(pinId);
                // hooking up events
                pxsim.pointerEvents.down.forEach(function (evid) { return _this.element.addEventListener(evid, function (ev) {
                    _this.button.setPressed(true);
                    svg.addClass(_this.element, "pressed");
                }); });
                this.element.addEventListener(pxsim.pointerEvents.leave, function (ev) {
                    svg.removeClass(_this.element, "pressed");
                    _this.button.setPressed(false);
                });
                this.element.addEventListener(pxsim.pointerEvents.up, function (ev) {
                    svg.removeClass(_this.element, "pressed");
                    _this.button.setPressed(false);
                });
            }
            return BoardTouchButton;
        }());
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        visuals.mkBoardView = function (opts) {
            return new visuals.MetroBoardSvg({
                runtime: pxsim.runtime,
                theme: visuals.randomTheme(),
                visualDef: opts.visual,
                boardDef: opts.boardDef,
                disableTilt: false,
                wireframe: opts.wireframe
            });
        };
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));
/// <reference path="../../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../../libs/core/dal.d.ts"/>
var pxsim;
(function (pxsim) {
    var visuals;
    (function (visuals) {
        var ButtonView = /** @class */ (function () {
            function ButtonView() {
                this.style = visuals.BUTTON_PAIR_STYLE;
            }
            ButtonView.prototype.init = function (bus, state, svgEl, otherParams) {
                this.state = state;
                this.bus = bus;
                this.defs = [];
                this.element = this.mkBtn();
                var pinStr = pxsim.readPin(otherParams["button"]);
                this.pinId = pxsim.pinIds[pinStr];
                this.button = new pxsim.CommonButton(this.pinId);
                this.state.buttonsByPin[this.pinId] = this.button;
                this.updateState();
                this.attachEvents();
            };
            ButtonView.prototype.moveToCoord = function (xy) {
                var btnWidth = visuals.PIN_DIST * 3;
                var x = xy[0], y = xy[1];
                visuals.translateEl(this.btn, [x, y]);
            };
            ButtonView.prototype.updateState = function () {
            };
            ButtonView.prototype.updateTheme = function () { };
            ButtonView.prototype.mkBtn = function () {
                this.btn = visuals.mkBtnSvg([0, 0]).el;
                var mkVirtualBtn = function () {
                    var numPins = 2;
                    var w = visuals.PIN_DIST * 2.8;
                    var offset = (w - (numPins * visuals.PIN_DIST)) / 2;
                    var corner = visuals.PIN_DIST / 2;
                    var cx = 0 - offset + w / 2;
                    var cy = cx;
                    var txtSize = visuals.PIN_DIST * 1.3;
                    var x = -offset;
                    var y = -offset;
                    var txtXOff = visuals.PIN_DIST / 7;
                    var txtYOff = visuals.PIN_DIST / 10;
                    var btng = pxsim.svg.elt("g");
                    var btn = pxsim.svg.child(btng, "rect", { class: "sim-button-virtual", x: x, y: y, rx: corner, ry: corner, width: w, height: w });
                    var btnTxt = visuals.mkTxt(cx + txtXOff, cy + txtYOff, txtSize, 0, "A+B");
                    pxsim.svg.addClass(btnTxt, "sim-text");
                    pxsim.svg.addClass(btnTxt, "sim-text-virtual");
                    btng.appendChild(btnTxt);
                    return btng;
                };
                var el = pxsim.svg.elt("g");
                pxsim.svg.addClass(el, "sim-buttonpair");
                el.appendChild(this.btn);
                return el;
            };
            ButtonView.prototype.attachEvents = function () {
                var _this = this;
                var btnSvgs = [this.btn];
                btnSvgs.forEach(function (btn, index) {
                    pxsim.pointerEvents.down.forEach(function (evid) { return btn.addEventListener(evid, function (ev) {
                        _this.button.setPressed(true);
                    }); });
                    btn.addEventListener(pxsim.pointerEvents.leave, function (ev) {
                        _this.button.setPressed(false);
                    });
                    btn.addEventListener(pxsim.pointerEvents.up, function (ev) {
                        _this.button.setPressed(false);
                    });
                });
            };
            return ButtonView;
        }());
        visuals.ButtonView = ButtonView;
    })(visuals = pxsim.visuals || (pxsim.visuals = {}));
})(pxsim || (pxsim = {}));

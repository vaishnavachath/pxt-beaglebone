/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts" />
/// <reference path="../libs/core/dal.d.ts" />
declare namespace pxsim.input {
    function onGesture(gesture: number, handler: RefAction): void;
    function rotation(kind: number): number;
    function setAccelerometerRange(range: number): void;
    function acceleration(dimension: number): number;
}
declare namespace pxsim {
    /**
      * Co-ordinate systems that can be used.
      * RAW: Unaltered data. Data will be returned directly from the accelerometer.
      *
      * SIMPLE_CARTESIAN: Data will be returned based on an easy to understand alignment, consistent with the cartesian system taught in schools.
      * When held upright, facing the user:
      *
      *                            /
      *    +--------------------+ z
      *    |                    |
      *    |       .....        |
      *    | *     .....      * |
      * ^  |       .....        |
      * |  |                    |
      * y  +--------------------+  x-->
      *
      *
      * NORTH_EAST_DOWN: Data will be returned based on the industry convention of the North East Down (NED) system.
      * When held upright, facing the user:
      *
      *                            z
      *    +--------------------+ /
      *    |                    |
      *    |       .....        |
      *    | *     .....      * |
      * ^  |       .....        |
      * |  |                    |
      * x  +--------------------+  y-->
      *
      */
    enum MicroBitCoordinateSystem {
        RAW = 0,
        SIMPLE_CARTESIAN = 1,
        NORTH_EAST_DOWN = 2,
    }
    class Accelerometer {
        runtime: Runtime;
        private sigma;
        private lastGesture;
        private currentGesture;
        private sample;
        private shake;
        private pitch;
        private roll;
        private id;
        isActive: boolean;
        sampleRange: number;
        constructor(runtime: Runtime);
        setSampleRange(range: number): void;
        activate(): void;
        /**
         * Reads the acceleration data from the accelerometer, and stores it in our buffer.
         * This is called by the tick() member function, if the interrupt is set!
         */
        update(x: number, y: number, z: number): void;
        instantaneousAccelerationSquared(): number;
        /**
         * Service function. Determines the best guess posture of the device based on instantaneous data.
         * This makes no use of historic data (except for shake), and forms this input to the filter implemented in updateGesture().
         *
         * @return A best guess of the current posture of the device, based on instantaneous data.
         */
        private instantaneousPosture();
        updateGesture(): void;
        /**
          * Reads the X axis value of the latest update from the accelerometer.
          * @param system The coordinate system to use. By default, a simple cartesian system is provided.
          * @return The force measured in the X axis, in milli-g.
          *
          * Example:
          * @code
          * uBit.accelerometer.getX();
          * uBit.accelerometer.getX(RAW);
          * @endcode
          */
        getX(system?: MicroBitCoordinateSystem): number;
        /**
          * Reads the Y axis value of the latest update from the accelerometer.
          * @param system The coordinate system to use. By default, a simple cartesian system is provided.
          * @return The force measured in the Y axis, in milli-g.
          *
          * Example:
          * @code
          * uBit.accelerometer.getY();
          * uBit.accelerometer.getY(RAW);
          * @endcode
          */
        getY(system?: MicroBitCoordinateSystem): number;
        /**
          * Reads the Z axis value of the latest update from the accelerometer.
          * @param system The coordinate system to use. By default, a simple cartesian system is provided.
          * @return The force measured in the Z axis, in milli-g.
          *
          * Example:
          * @code
          * uBit.accelerometer.getZ();
          * uBit.accelerometer.getZ(RAW);
          * @endcode
          */
        getZ(system?: MicroBitCoordinateSystem): number;
        /**
          * Provides a rotation compensated pitch of the device, based on the latest update from the accelerometer.
          * @return The pitch of the device, in degrees.
          *
          * Example:
          * @code
          * uBit.accelerometer.getPitch();
          * @endcode
          */
        getPitch(): number;
        getPitchRadians(): number;
        /**
          * Provides a rotation compensated roll of the device, based on the latest update from the accelerometer.
          * @return The roll of the device, in degrees.
          *
          * Example:
          * @code
          * uBit.accelerometer.getRoll();
          * @endcode
          */
        getRoll(): number;
        getRollRadians(): number;
        /**
         * Recalculate roll and pitch values for the current sample.
         * We only do this at most once per sample, as the necessary trigonemteric functions are rather
         * heavyweight for a CPU without a floating point unit...
         */
        recalculatePitchRoll(): void;
    }
    class AccelerometerState {
        accelerometer: Accelerometer;
        useShake: boolean;
        private tiltDecayer;
        private element;
        constructor(runtime: Runtime);
        attachEvents(element: SVGElement): void;
        private updateTilt();
    }
}
declare namespace pxsim {
    interface AccelerometerBoard extends CommonBoard {
        accelerometerState: AccelerometerState;
        invertAccelerometerXAxis?: boolean;
        invertAccelerometerYAxis?: boolean;
        invertAccelerometerZAxis?: boolean;
    }
    function accelerometer(): AccelerometerState;
}
declare namespace pxsim.control {
    let runInParallel: typeof thread.runInBackground;
    let delay: typeof thread.pause;
    function reset(): void;
    function waitMicros(micros: number): void;
    function deviceName(): string;
    function deviceSerialNumber(): string;
    function deviceVersion(): string;
    function deviceBonescriptVersion(): string;
    function createBufferFromUTF8():void
    function deviceDalVersion(): string;
    function internalOnEvent(id: number, evid: number, handler: RefAction): void;
    function waitForEvent(id: number, evid: number): void;
    function allocateNotifyEvent(): number;
    function raiseEvent(id: number, evid: number, mode: number): void;
    function millis(): number;
    function delayMicroseconds(us: number): void;
    function createBuffer(size: number): RefBuffer;
    function dmesg(msg: string): void;
    function dmesgPtr(msg: string, ptr: any): void;
    function dmesgValue(ptr: any): void;
    function gc(): void;
    function profilingEnabled(): boolean;
    function __log(priority: number, str: string): void;
    function heapDump(): void;
}
declare namespace pxsim {
    interface CommonBoard extends CoreBoard {
        buttonState: CommonButtonState;
        edgeConnectorState: EdgeConnectorState;
    }
    function board(): CommonBoard;
}
declare namespace pxsim.pxtcore {
    function registerWithDal(id: number, evid: number, handler: RefAction, mode?: number): void;
    function getPin(id: number): pxsim.Pin;
    function getPinCfg(key: number): pxsim.Pin;
}
declare namespace pxsim.loops {
    let pause: typeof thread.pause;
    let forever: typeof thread.forever;
}
declare namespace pxsim {
    class CommonButton extends Button {
        private _pressedTime;
        private _clickedTime;
        private _wasPressed;
        setPressed(p: boolean): void;
        wasPressed(): boolean;
        isPressed(): boolean;
    }
    class CommonButtonState {
        usesButtonAB: boolean;
        buttons: CommonButton[];
        buttonsByPin: Map<CommonButton>;
        constructor(buttons?: CommonButton[]);
    }
}
declare namespace pxsim.pxtcore {
    function getButtonByPin(pinId: number): CommonButton;
    function getButtonByPinCfg(key: number): CommonButton;
    function getButton(buttonId: number): CommonButton;
}
declare namespace pxsim.ButtonMethods {
    function onEvent(button: pxsim.Button, ev: number, body: pxsim.RefAction): void;
    function isPressed(button: pxsim.Button): boolean;
    function wasPressed(button: pxsim.Button): boolean;
    function id(button: pxsim.Button): number;
}
declare namespace pxsim.DigitalInOutPinMethods {
    function pushButton(pin: pins.DigitalInOutPin): Button;
}
declare namespace pxsim.network {
    function cableSendPacket(buf: RefBuffer): void;
    function cablePacket(): RefBuffer;
    function onCablePacket(body: RefAction): void;
    function onCableError(body: RefAction): void;
}
declare namespace pxsim {
    class CableState {
        packet: RefBuffer;
        packetReceived: boolean;
        PULSE_CABLE_COMPONENT_ID: number;
        PULSE_PACKET_EVENT: number;
        PULSE_PACKET_ERROR_EVENT: number;
        send(buf: RefBuffer): void;
        listen(body: RefAction): void;
        listenError(body: RefAction): void;
        receive(buf: RefBuffer): void;
    }
    interface CableBoard extends CommonBoard {
        cableState: CableState;
    }
    function getCableState(): CableState;
}
declare namespace pxsim {
    class AnalogSensorState {
        id: number;
        private min;
        private max;
        private lowThreshold;
        private highThreshold;
        sensorUsed: boolean;
        private level;
        private state;
        constructor(id: number, min?: number, max?: number, lowThreshold?: number, highThreshold?: number);
        setUsed(): void;
        setLevel(level: number): void;
        getLevel(): number;
        setLowThreshold(value: number): void;
        setHighThreshold(value: number): void;
        private clampValue(value);
        private setState(state);
    }
}
declare namespace pxsim.visuals {
    function mkBtnSvg(xy: Coord): SVGAndSize<SVGGElement>;
    const BUTTON_PAIR_STYLE: string;
    class ButtonPairView implements IBoardPart<ButtonPairState> {
        element: SVGElement;
        defs: SVGElement[];
        style: string;
        private state;
        private bus;
        private aBtn;
        private bBtn;
        private abBtn;
        init(bus: EventBus, state: ButtonPairState): void;
        moveToCoord(xy: Coord): void;
        updateState(): void;
        updateTheme(): void;
        private mkBtns();
        private attachEvents();
    }
}
declare namespace pxsim {
    enum PinFlags {
        Unused = 0,
        Digital = 1,
        Analog = 2,
        Input = 4,
        Output = 8,
        Touch = 16,
    }
    class Pin {
        id: number;
        constructor(id: number);
        touched: boolean;
        value: number;
        period: number;
        servoAngle: number;
        mode: PinFlags;
        pitch: boolean;
        pull: number;
        eventMode: number;
        setValue(value: number): void;
        digitalReadPin(): number;
        digitalWritePin(value: number): void;
        pinMode(pull: number): void;
        analogReadPin(): number;
        analogWritePin(value: number,frequency: number): void;
        analogSetPeriod(micros: number): void;
        servoWritePin(value: number): void;
        servoSetPulse(pinId: number, micros: number): void;
        isTouched(): boolean;
        onEvent(ev: number, handler: RefAction): void;
    }
    interface EdgeConnectorProps {
        pins: number[];
        servos?: {
            [name: string]: number;
        };
    }
    class EdgeConnectorState {
        props: EdgeConnectorProps;
        pins: Pin[];
        constructor(props: EdgeConnectorProps);
        getPin(id: number): Pin;
    }
}
declare namespace pxsim.visuals {
    function mkLedPart(xy?: Coord): SVGElAndSize;
    class LedView implements IBoardPart<EdgeConnectorState> {
        element: SVGElement;
        defs: SVGElement[];
        private led;
        private text;
        private parsePinString;
        private color;
        private part;
        private bus;
        style: string;
        private state;
        private pin;
        private currentValue;
        private currentMode;
        constructor(parsePinString: (s: string) => Pin);
        init(bus: EventBus, state: EdgeConnectorState, svgEl: SVGSVGElement, otherParams: Map<string>): void;
        initDom(): void;
        moveToCoord(xy: Coord): void;
        updateTheme(): void;
        updateState(): void;
    }
}
declare namespace pxsim.visuals {
    function mkMicroServoPart(xy?: Coord): SVGElAndSize;
    class MicroServoView implements IBoardPart<EdgeConnectorState> {
        style: string;
        overElement: SVGElement;
        element: SVGElement;
        defs: SVGElement[];
        state: EdgeConnectorState;
        bus: EventBus;
        private currentAngle;
        private targetAngle;
        private lastAngleTime;
        private pin;
        private crankEl;
        private crankTransform;        
        init(bus: EventBus, state: EdgeConnectorState, svgEl: SVGSVGElement, otherParams: Map<string>): void;
        constructor(parsePinString: (s: string) => Pin);
        initDom(): void;
        moveToCoord(xy: visuals.Coord): void;
        updateState(): void;
        updateTheme(): void;
    }
}
declare namespace pxsim.visuals {
    function mkPhotoCellPart(xy?: Coord): SVGElAndSize;
    class PhotoCellView implements IBoardPart<EdgeConnectorState> {
        element: SVGElement;
        defs: SVGElement[];
        private text;
        private parsePinString;
        private color;
        private part;
        private bus;
        style: string;
        private pin;
        private currentValue;
        private currentMode;
        constructor(parsePinString: (s: string) => Pin);
        init(bus: EventBus, state: EdgeConnectorState, svgEl: SVGSVGElement, otherParams: Map<string>): void;
        initDom(): void;
        moveToCoord(xy: Coord): void;
        updateTheme(): void;
        updateState(): void;
    }
}
declare namespace pxsim.pins {
    class CommonPin extends Pin {
        used: boolean;
    }
    class DigitalInOutPin extends CommonPin {
    }
    class AnalogInOutPin extends CommonPin {
    }
    class PwmOnlyPin extends CommonPin {
    }
    class PwmPin extends CommonPin {
    }
    function markUsed(name: CommonPin): void;
}
declare namespace pxsim.DigitalInOutPinMethods {
    function digitalRead(name: pins.DigitalInOutPin): number;
    /**
    * Set a pin or connector value to either 0 or 1.
    * @param value value to set on the pin, 1 eg,0
    */
    function digitalWrite(name: pins.DigitalInOutPin, value: number): void;
    /**
    * Configures this pin to a digital input, and generates events where the timestamp is the duration
    * that this pin was either ``high`` or ``low``.
    */
    function onPulsed(name: pins.DigitalInOutPin, high: boolean, body: RefAction): void;
    function onEvent(name: pins.DigitalInOutPin, ev: number, body: RefAction): void;
    /**
    * Returns the duration of a pulse in microseconds
    * @param value the value of the pulse (default high)
    * @param maximum duration in micro-seconds
    */
    function pulseIn(name: pins.DigitalInOutPin, high: boolean, maxDuration?: number): number;
    /**
    * Configures the pull of this pin.
    * @param pull one of the mbed pull configurations: PullUp, PullDown, PullNone
    */
    function pinMode(name: pins.DigitalInOutPin, pull: number): void;
    /**
     * Get the pin state (pressed or not). Requires to hold the ground to close the circuit.
     * @param name pin used to detect the touch
     */
    function isPressed(name: pins.DigitalInOutPin): boolean;
}
declare namespace pxsim.AnalogInPinMethods {
    /**
     * Read the connector value as analog, that is, as a value comprised between 0 and 1023.
     */
    function analogRead(name: pins.AnalogInOutPin): number;
}
declare namespace pxsim.AnalogOutPinMethods {
    /**
 * Set the connector value as analog. Value must be comprised between 0 and 1023.
 * @param value value to write to the pin between ``0`` and ``100``. eg:1023,0
 * @param frequency value to write to the pin between ``0`` and ``10000``. eg:1023,0
 */
    function analogWrite(name: pins.AnalogInOutPin, value: number): void;
}
declare namespace pxsim.PwmOnlyPinMethods {
    function analogSetPeriod(name: pins.PwmOnlyPin, micros: number): void;
    function servoWrite(name: pins.PwmOnlyPin, value: number): void;
    function servoSetPulse(name: pins.PwmOnlyPin, micros: number): void;
}
declare namespace pxsim.pins {
    function pulseDuration(): number;
    function createBuffer(sz: number): RefBuffer;
    function i2cReadBuffer(address: number, size: number, repeat?: boolean): RefBuffer;
    function i2cWriteBuffer(address: number, buf: RefBuffer, repeat?: boolean): void;
    function spiWrite(value: number): number;
    function spiMode(mode: number): void;
    function spiTransfer(command: RefBuffer, response: RefBuffer): number;
    function spiFrequency(f: number): void;
    function spiFormat(bits: number, mode: number): void;
    function spiPins(mosi: number, miso: number, sck: number): void;
}
declare namespace pxsim.visuals {
    function mkSideSwitchPart(xy?: Coord): SVGElAndSize;
    class ToggleComponentVisual implements IBoardPart<ToggleStateConstructor> {
        style: string;
        element: SVGElement;
        overElement: SVGElement;
        defs: SVGElement[];
        private onElement;
        private offElement;
        private state;
        private currentlyOn;
        private parsePinString;
        constructor(parsePinString: (str: string) => Pin);
        moveToCoord(xy: Coord): void;
        init(bus: EventBus, state: ToggleStateConstructor, svgEl: SVGSVGElement, otherParams: Map<string>): void;
        updateState(): void;
        updateTheme(): void;
        private initImage(svgData);
    }
}
declare namespace pxsim {
    class ToggleState {
        private pin;
        constructor(pin: Pin);
        toggle(): void;
        on(): boolean;
    }
    interface ToggleStateConstructor {
        (pin: Pin): ToggleState;
    }
}
declare namespace pxsim.info {
    function updateHighScore(score: number): number;
}
declare namespace pxsim.gamepad {
    function setButton(index: number, up: boolean): void;
    function move(index: number, x: number, y: number): void;
    function setThrottle(index: number, value: number): void;
}
declare namespace pxsim {
}
declare namespace pxsim.network {
    function infraredSendPacket(buf: RefBuffer): void;
    function infraredPacket(): RefBuffer;
    function onInfraredPacket(body: RefAction): void;
    function onInfraredError(body: RefAction): void;
}
declare namespace pxsim {
    class InfraredState {
        packet: RefBuffer;
        packetReceived: boolean;
        IR_COMPONENT_ID: number;
        IR_PACKET_EVENT: number;
        IR_PACKET_ERROR_EVENT: number;
        send(buf: RefBuffer): void;
        listen(body: RefAction): void;
        listenError(body: RefAction): void;
        receive(buf: RefBuffer): void;
    }
    interface InfraredBoard extends CommonBoard {
        irState: InfraredState;
    }
    function getInfraredState(): InfraredState;
}
declare namespace pxsim.jacdac {
    enum DAL {
        DEVICE_OK = 0,
        DEVICE_COMPONENT_RUNNING = 4096,
        DEVICE_COMPONENT_STATUS_SYSTEM_TICK = 8192,
        DEVICE_ID_JD_DYNAMIC_ID = 3000,
        DEVICE_NO_RESOURCES = -1005,
        CONTROL_PACKET_PAYLOAD_SIZE = 4,
        JD_SERIAL_MAX_BUFFERS = 10,
        JD_SERIAL_RECEIVING = 2,
        JD_SERIAL_TRANSMITTING = 4,
        JD_SERIAL_TX_DRAIN_ENABLE = 8,
        JD_SERIAL_EVT_DATA_READY = 1,
        JD_SERIAL_EVT_BUS_ERROR = 2,
        JD_SERIAL_EVT_DRAIN = 3,
        JD_SERIAL_HEADER_SIZE = 4,
        JD_SERIAL_DATA_SIZE = 32,
        JD_SERIAL_PACKET_SIZE = 36,
        JD_SERIAL_MAXIMUM_BUFFERS = 10,
        JD_SERIAL_DMA_TIMEOUT = 2,
        JD_JD_FLAGS_LOSSY = 1,
        JD_DEVICE_ERROR_MSK = 15,
        JD_BRIDGE_HISTORY_SIZE = 8,
        JD_DRIVER_CLASS_CONTROL = 0,
        JD_DRIVER_CLASS_ARCADE = 1,
        JD_DRIVER_CLASS_JOYSTICK = 2,
        JD_DRIVER_CLASS_MESSAGE_BUS = 3,
        JD_DRIVER_CLASS_RADIO = 4,
        JD_DRIVER_CLASS_BRIDGE = 5,
        JD_DRIVER_CLASS_BUTTON = 6,
        JD_DRIVER_CLASS_PIN = 7,
        JD_DRIVER_CLASS_RELIABILITY_TESTER = 8,
        JD_MESSAGEBUS_TYPE_EVENT = 1,
        JD_MESSAGEBUS_TYPE_LISTEN = 2,
        SetDigital = 0,
        SetAnalog = 1,
        SetServo = 2,
        JD_DRIVER_EVT_CONNECTED = 1,
        JD_DRIVER_EVT_DISCONNECTED = 2,
        JD_DRIVER_EVT_FILL_CONTROL_PACKET = 3,
        JD_DRIVER_EVT_PAIRED = 3,
        JD_DRIVER_EVT_UNPAIRED = 4,
        JD_DRIVER_EVT_PAIR_REJECTED = 5,
        JD_DRIVER_EVT_PAIRING_RESPONSE = 6,
        JD_DEVICE_FLAGS_LOCAL = 32768,
        JD_DEVICE_FLAGS_REMOTE = 16384,
        JD_DEVICE_FLAGS_BROADCAST = 8192,
        JD_DEVICE_FLAGS_PAIR = 4096,
        JD_DEVICE_DRIVER_MODE_MSK = 61440,
        JD_DEVICE_FLAGS_PAIRABLE = 2048,
        JD_DEVICE_FLAGS_PAIRED = 1024,
        JD_DEVICE_FLAGS_PAIRING = 512,
        JD_DEVICE_FLAGS_INITIALISED = 128,
        JD_DEVICE_FLAGS_INITIALISING = 64,
        JD_DEVICE_FLAGS_CP_SEEN = 32,
        JD_DEVICE_FLAGS_BROADCAST_MAP = 16,
        JD_LOGIC_DRIVER_MAX_FILTERS = 20,
        JD_LOGIC_DRIVER_TIMEOUT = 254,
        JD_LOGIC_ADDRESS_ALLOC_TIME = 16,
        JD_LOGIC_DRIVER_CTRLPACKET_TIME = 112,
        CONTROL_JD_FLAGS_RESERVED = 32768,
        CONTROL_JD_FLAGS_PAIRING_MODE = 16384,
        CONTROL_JD_FLAGS_PAIRABLE = 8192,
        CONTROL_JD_FLAGS_PAIRED = 4096,
        CONTROL_JD_FLAGS_CONFLICT = 2048,
        CONTROL_JD_FLAGS_UNCERTAIN = 1024,
        CONTROL_JD_FLAGS_NACK = 512,
        CONTROL_JD_FLAGS_ACK = 256,
        CONTROL_JD_TYPE_HELLO = 1,
        CONTROL_JD_TYPE_PAIRING_REQUEST = 2,
        JD_PROTOCOL_EVT_SEND_CONTROL = 1,
        JD_PROTOCOL_DRIVER_ARRAY_SIZE = 20,
        VirtualDriver = 16384,
        PairedDriver = 12288,
        HostDriver = 32768,
        PairableHostDriver = 34816,
        BroadcastDriver = 40960,
        SnifferDriver = 24576,
        JD_RADIO_HISTORY_SIZE = 4,
        JD_RADIO_MAXIMUM_BUFFERS = 10,
        JD_RADIO_HEADER_SIZE = 4,
        DEVICE_ID_JACDAC0 = 29,
        DEVICE_ID_JACDAC1 = 30,
        JD_SERIAL_EVT_BUS_CONNECTED = 5,
        JD_SERIAL_EVT_BUS_DISCONNECTED = 6,
        JD_LOGIC_DRIVER_EVT_CHANGED = 2,
    }
    function start(): void;
    function stop(): void;
    function isRunning(): boolean;
    function isConnected(): boolean;
    function clearBridge(): void;
    function state(): number;
    function eventId(): number;
    function logicEventId(): number;
    function __internalDrivers(): pxsim.RefBuffer;
    function __internalSendPacket(data: pxsim.RefBuffer, address: number): number;
    function __internalAddDriver(driverType: number, deviceClass: number, methods: RefCollection, controlData: pxsim.RefBuffer): JDProxyDriver;
    function __internalRemoveDriver(d: JDProxyDriver): void;
    class JDDriver {
        id: number;
        device: JDDevice;
        constructor(id: number, device: JDDevice);
        pair(): void;
        isConnected(): boolean;
        fillControlPacket(pkt: JDPacket): number;
        handleControlPacketAsync(p: JDPacket): Promise<number>;
        handlePacketAsync(p: JDPacket): Promise<number>;
        handleLogicPacket(p: JDPacket): DAL;
        deviceConnected(device: JDDevice): number;
        deviceRemoved(): number;
        sendPairingPacket(d: JDDevice): number;
        partnerDisconnected(): void;
    }
    class JDLogicDriver extends JDDriver {
        status: number;
        address_filters: Map<boolean>;
        constructor(id: number);
        populateControlPacket(driver: JDDriver, cp: ControlPacket): void;
        periodicCallback(): void;
        /**
          * Given a control packet, finds the associated driver, or if no associated device, associates a remote device with a driver.
          **/
        handlePacketAsync(p: JDPacket): Promise<number>;
        addToFilter(address: number): number;
        removeFromFilter(address: number): number;
        filterPacket(address: number): boolean;
    }
    class JDProtocol {
        drivers: jacdac.JDDriver[];
        logic: jacdac.JDLogicDriver;
        bridge: jacdac.JDDriver;
        _nextId: DAL;
        readonly nextId: number;
        constructor();
        add(d: jacdac.JDDriver): DAL.DEVICE_OK | DAL.DEVICE_NO_RESOURCES;
        remove(d: jacdac.JDDriver): DAL;
        onPacketReceived(pkt: jacdac.JDPacket): void;
        sendPacket(pkt: JDPacket): number;
        sendBuffer(data: pxsim.RefBuffer, address: number): number;
        driverDevices(): pxsim.RefBuffer;
    }
    class JDProxyDriver extends jacdac.JDDriver {
        methods: RefCollection;
        controlData: pxsim.RefBuffer;
        constructor(id: number, driverType: number, deviceClass: number, methods: RefCollection, controlData: pxsim.RefBuffer);
        fillControlPacket(p: jacdac.JDPacket): number;
        handleControlPacketAsync(p: JDPacket): Promise<number>;
        handlePacketAsync(p: jacdac.JDPacket): Promise<number>;
    }
}
declare namespace pxsim.JacDacDriverStatusMethods {
    function isPairedInstanceAddress(proxy: jacdac.JDProxyDriver, address: number): number;
    function setBridge(proxy: jacdac.JDProxyDriver): void;
    function id(proxy: jacdac.JDProxyDriver): number;
    function device(proxy: jacdac.JDProxyDriver): pxsim.RefBuffer;
    function setError(proxy: jacdac.JDProxyDriver, error: number): void;
    function isConnected(proxy: jacdac.JDProxyDriver): boolean;
}
declare namespace pxsim.jacdac {
    class JDDevice {
        static SIZE: number;
        buf: pxsim.RefBuffer;
        constructor(buf: pxsim.RefBuffer);
        static mk(address: number, flags: number, serialNumber: number, driverClass: number): JDDevice;
        address: number;
        rollingCounter: number;
        flags: number;
        serialNumber: number;
        readonly driverClass: number;
        error: number;
        isConnected(): boolean;
        isConnecting(): boolean;
        isVirtualDriver(): boolean;
        isPairedDriver(): boolean;
        isHostDriver(): boolean;
        isBroadcastDriver(): boolean;
        isSnifferDriver(): boolean;
        isPaired(): boolean;
        isPairable(): boolean;
        isPairing(): boolean;
    }
    class JDPacket {
        buf: RefBuffer;
        constructor(buf: RefBuffer);
        static mk(data: RefBuffer, address: number): JDPacket;
        readonly crc: number;
        address: number;
        size: number;
        data: RefBuffer;
        getNumber(format: BufferMethods.NumberFormat, offset: number): number;
        setNumber(format: BufferMethods.NumberFormat, offset: number, value: number): void;
    }
    class ControlPacket {
        buf: RefBuffer;
        constructor(buf: RefBuffer);
        packetType: number;
        address: number;
        flags: number;
        driverClass: number;
        serialNumber: number;
    }
}
declare namespace pxsim {
    interface SimulatorJacDacMessage extends SimulatorBroadcastMessage {
        type: "jacdac";
        broadcast: true;
        packet: Uint8Array;
    }
    class JacDacState {
        eventId: number;
        board: BaseBoard;
        protocol: jacdac.JDProtocol;
        running: boolean;
        runtimeId: string;
        constructor(board: BaseBoard);
        start(): void;
        stop(): void;
        processMessage(msg: pxsim.SimulatorMessage): void;
    }
    interface JacDacBoard extends CommonBoard {
        jacdacState: JacDacState;
    }
    function getJacDacState(): JacDacState;
}
declare namespace pxsim.keyboard {
    function type(s: string): void;
    function key(c: string, event: number): void;
    function mediaKey(key: number, event: number): void;
    function functionKey(key: number, event: number): void;
}
declare namespace pxsim {
    class CommonNeoPixelState {
        buffer: Uint8Array;
        mode: number;
        readonly length: number;
        readonly stride: number;
        pixelColor(pixel: number): number[];
    }
    interface CommonNeoPixelStateConstructor {
        (pin: Pin): CommonNeoPixelState;
    }
}
declare namespace pxsim.light {
    function sendBuffer(pin: pins.DigitalInOutPin, mode: number, b: RefBuffer): void;
    function defaultPin(): Pin;
}
declare namespace pxsim {
    interface LightBoard extends CommonBoard {
        tryGetNeopixelState(pinId: number): CommonNeoPixelState;
        neopixelState(pinId: number): CommonNeoPixelState;
        defaultNeopixelPin(): Pin;
    }
    function neopixelState(pinId: number): CommonNeoPixelState;
}
declare namespace pxsim.input {
    function lightLevel(): number;
    function onLightConditionChanged(condition: number, body: RefAction): void;
    function setLightThreshold(condition: number, value: number): void;
}
declare namespace pxsim {
    interface LightSensorBoard extends CommonBoard {
        lightSensorState: AnalogSensorState;
    }
    function lightSensorState(): AnalogSensorState;
}
declare namespace pxsim.input {
    function soundLevel(): number;
    function onLoudSound(body: RefAction): void;
    function setLoudSoundThreshold(value: number): void;
}
declare namespace pxsim {
    interface MicrophoneBoard extends CommonBoard {
        microphoneState: AnalogSensorState;
    }
    function microphoneState(): AnalogSensorState;
}
declare namespace pxsim.music {
    function playInstructions(b: RefBuffer): Promise<void>;
    function forceOutput(mode: number): void;
}
declare namespace pxsim.mouse {
    function setButton(button: number, down: boolean): void;
    function move(x: number, y: number): void;
    function turnWheel(w: number): void;
}
declare namespace pxsim {
    class AudioState {
        private playing;
        outputDestination_: number;
        pitchPin_: Pin;
        volume: number;
        constructor();
        startPlaying(): void;
        stopPlaying(): void;
        isPlaying(): boolean;
    }
}
declare namespace pxsim.music {
    function noteFrequency(note: number): number;
    function setOutput(mode: number): void;
    function setVolume(volume: number): void;
    function setPitchPin(pin: Pin): void;
    function setTone(buffer: RefBuffer): void;
    function playTone(frequency: number, ms: number): void;
}
declare namespace pxsim {
    interface MusicBoard extends CommonBoard {
        audioState: AudioState;
        getDefaultPitchPin(): Pin;
    }
    function getAudioState(): AudioState;
}
declare namespace pxsim {
    interface PixelBoard extends CommonBoard {
        pixelPin: Pin;
    }
    function pixelPin(): Pin;
}
declare namespace pxsim.pixel {
    const defaultPin: typeof light.defaultPin;
    function sendBuffer(data: RefBuffer): void;
}
declare namespace pxsim {
    class RefImage {
        _width: number;
        _height: number;
        _bpp: number;
        data: Uint8Array;
        dirty: boolean;
        constructor(w: number, h: number, bpp: number);
        pix(x: number, y: number): number;
        inRange(x: number, y: number): boolean;
        color(c: number): number;
        clamp(x: number, y: number): number[];
        makeWritable(): void;
    }
}
declare namespace pxsim.ImageMethods {
    function width(img: RefImage): number;
    function height(img: RefImage): number;
    function isMono(img: RefImage): boolean;
    function setPixel(img: RefImage, x: number, y: number, c: number): void;
    function getPixel(img: RefImage, x: number, y: number): number;
    function fill(img: RefImage, c: number): void;
    function fillRect(img: RefImage, x: number, y: number, w: number, h: number, c: number): void;
    function _fillRect(img: RefImage, xy: number, wh: number, c: number): void;
    function clone(img: RefImage): RefImage;
    function flipX(img: RefImage): void;
    function flipY(img: RefImage): void;
    function transposed(img: RefImage): RefImage;
    function copyFrom(img: RefImage, from: RefImage): void;
    function scroll(img: RefImage, dx: number, dy: number): void;
    function replace(img: RefImage, from: number, to: number): void;
    function doubledX(img: RefImage): RefImage;
    function doubledY(img: RefImage): RefImage;
    function doubled(img: RefImage): RefImage;
    function drawImage(img: RefImage, from: RefImage, x: number, y: number): void;
    function drawTransparentImage(img: RefImage, from: RefImage, x: number, y: number): void;
    function overlapsWith(img: RefImage, other: RefImage, x: number, y: number): boolean;
    function _drawLine(img: RefImage, xy: number, wh: number, c: number): void;
    function drawLine(img: RefImage, x0: number, y0: number, x1: number, y1: number, c: number): void;
    function drawIcon(img: RefImage, icon: RefBuffer, x: number, y: number, color: number): void;
    function _drawIcon(img: RefImage, icon: RefBuffer, xy: number, color: number): void;
}
declare namespace pxsim.image {
    function create(w: number, h: number): RefImage;
    function ofBuffer(buf: RefBuffer): RefImage;
    function toBuffer(img: RefImage): RefBuffer;
    function doubledIcon(buf: RefBuffer): RefBuffer;
}
declare namespace pxsim.pxtcore {
    function updateScreen(img: RefImage): void;
    function updateStats(s: string): void;
    function setPalette(b: RefBuffer): void;
}
declare namespace pxsim {
    class ScreenState {
        width: number;
        height: number;
        screen: Uint32Array;
        palette: Uint32Array;
        lastImage: RefImage;
        lastImageFlushTime: number;
        changed: boolean;
        stats: string;
        onChange: () => void;
        constructor(paletteSrc: string[], w?: number, h?: number);
        setPalette(buf: RefBuffer): void;
        bpp(): 1 | 4;
        didChange(): boolean;
        maybeForceUpdate(): void;
        showImage(img: RefImage): void;
        updateStats(stats: string): void;
        bindToSvgImage(lcd: SVGImageElement): void;
    }
    interface ScreenBoard extends CommonBoard {
        screenState: ScreenState;
    }
    function getScreenState(): ScreenState;
}
declare namespace pxsim.visuals {
    function mkScreenPart(xy?: Coord): SVGElAndSize;
    class ScreenView implements IBoardPart<ScreenState> {
        bus: pxsim.EventBus;
        style: string;
        element: SVGElement;
        overElement?: SVGElement;
        defs: SVGElement[];
        state: ScreenState;
        canvas: SVGImageElement;
        lastLocation: Coord;
        constructor();
        init(bus: EventBus, state: ScreenState, svgEl: SVGSVGElement, otherParams: Map<string>): void;
        moveToCoord(xy: visuals.Coord): void;
        private updateLoc();
        updateState(): void;
        updateTheme(): void;
    }
}
declare namespace pxsim.serial {
    function onEvent(event: number, handler: RefAction): void;
    function setTxBufferSize(size: number): void;
    function setRxBufferSize(size: number): void;
    function read(): number;
    function readUntil(delimiter: string): string;
    function readString(): string;
    function readBuffer(): RefBuffer;
    function writeString(str: string): void;
    function writeBuffer(buffer: any): void;
    function attachToConsole(): void;
    function setBaudRate(rate: number): void;
    function redirect(tx: pins.DigitalInOutPin, rx: pins.DigitalInOutPin, rate: number): void;
    function onDelimiterReceived(delimiter: number, handler: RefAction): void;
}
declare namespace pxsim {
    class StorageState {
        files: pxsim.Map<number[]>;
    }
    interface StorageBoard extends CommonBoard {
        storageState: StorageState;
    }
    function storageState(): StorageState;
}
declare namespace pxsim.storage {
    function init(): void;
    function appendBuffer(filename: string, data: RefBuffer): void;
    function overwriteWithBuffer(filename: string, data: RefBuffer): void;
    function exists(filename: string): boolean;
    function remove(filename: string): void;
    function size(filename: string): number;
    function readAsBuffer(filename: string): RefBuffer;
}
declare namespace pxsim {
    interface SlideSwitchBoard extends CommonBoard {
        slideSwitchState: SlideSwitchState;
    }
}
declare namespace pxsim {
    class SlideSwitchState {
        static id: number;
        private left;
        setState(left: boolean): void;
        isLeft(): boolean;
    }
}
declare namespace pxsim.input {
    function onSwitchMoved(direction: number, body: RefAction): void;
    function switchRight(): boolean;
}
declare namespace pxsim {
    interface TemperatureBoard extends CommonBoard {
        thermometerState: AnalogSensorState;
        thermometerUnitState: TemperatureUnit;
    }
    function thermometerState(): AnalogSensorState;
    function setThermometerUnit(unit: TemperatureUnit): void;
}
declare namespace pxsim {
    enum TemperatureUnit {
        Celsius = 0,
        Fahrenheit = 1,
    }
}
declare namespace pxsim.input {
    function temperature(unit: number): number;
    function onTemperatureConditionChanged(condition: number, temperature: number, unit: number, body: RefAction): void;
}
declare namespace pxsim {
    interface CapTouchBoard extends CommonBoard {
        touchButtonState: TouchButtonState;
    }
}
declare namespace pxsim {
    class CapacitiveSensorState {
        capacity: number[];
        reading: boolean[];
        mapping: Map<number>;
        constructor(mapping: Map<number>);
        private getCap(pinId);
        readCap(pinId: number, samples: number): number;
        isReadingPin(pinId: number, pin: Pin): boolean;
        isReading(capId: number): boolean;
        startReading(pinId: number, pin: Pin): void;
        capacitiveSensor(capId: number, samples: number): number;
        reset(capId: number): void;
    }
    class TouchButton extends CommonButton {
        _threshold: number;
        constructor(pin: number);
        setThreshold(value: number): void;
        threshold(): number;
        value(): number;
        calibrate(): void;
    }
    class TouchButtonState {
        buttons: TouchButton[];
        constructor(pins: number[]);
    }
}
declare namespace pxsim.pxtcore {
    function getTouchButton(index: number): TouchButton;
}
declare namespace pxsim.TouchButtonMethods {
    function setThreshold(button: pxsim.TouchButton, value: number): void;
    function threshold(button: pxsim.TouchButton): number;
    function value(button: pxsim.TouchButton): number;
    function calibrate(button: pxsim.TouchButton): void;
}
declare namespace pxsim.AnalogInOutPinMethods {
    function touchButton(name: pins.AnalogInOutPin): TouchButton;
}
declare namespace pxsim.textFile {
    function readTextfile(name: string): string;
    function writeTextfile(name: string,content: string): void;
}

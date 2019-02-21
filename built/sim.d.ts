/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts" />
/// <reference path="../node_modules/pxt-core/localtypings/pxtarget.d.ts" />
/// <reference path="common-sim.d.ts" />
/// <reference path="../libs/core/dal.d.ts" />
declare namespace pxsim {
    let pinIds: Map<number>;
    function pinByName(name: string): Pin;
    class DalBoard extends CoreBoard implements MusicBoard, LightBoard, CapTouchBoard, AccelerometerBoard, PixelBoard, StorageBoard, LightSensorBoard, TemperatureBoard, MicrophoneBoard, ScreenBoard {
        boardDefinition: BoardDefinition;
        view: SVGElement;
        edgeConnectorState: EdgeConnectorState;
        lightSensorState: AnalogSensorState;
        buttonState: CommonButtonState;
        _neopixelState: pxt.Map<CommonNeoPixelState>;
        audioState: AudioState;
        neopixelPin: Pin;
        pixelPin: Pin;
        touchButtonState: TouchButtonState;
        accelerometerState: AccelerometerState;
        storageState: StorageState;
        thermometerState: AnalogSensorState;
        thermometerUnitState: TemperatureUnit;
        microphoneState: AnalogSensorState;
        screenState: ScreenState;
        constructor(boardDefinition: BoardDefinition);
        receiveMessage(msg: SimulatorMessage): void;
        kill(): void;
        initAsync(msg: SimulatorRunMessage): Promise<void>;
        accelerometer(): Accelerometer;
        getDefaultPitchPin(): Pin;
        defaultNeopixelPin(): Pin;
        tryGetNeopixelState(pinId: number): CommonNeoPixelState;
        neopixelState(pinId: number): CommonNeoPixelState;
    }
    function initRuntimeWithDalBoard(msg: SimulatorRunMessage): void;
    function parsePinString(pinString: string): Pin;
}
declare namespace pxsim.visuals {
    const VIEW_WIDTH = 372.3404255319149;
    const VIEW_HEIGHT = 361.70212765957444;
    interface IBoardTheme {
        accent?: string;
        display?: string;
        pin?: string;
        pinTouched?: string;
        pinActive?: string;
        ledOn?: string;
        ledOff?: string;
        buttonOuter?: string;
        buttonUps: string[];
        buttonDown?: string;
        virtualButtonOuter?: string;
        virtualButtonUp?: string;
        virtualButtonDown?: string;
        lightLevelOn?: string;
        lightLevelOff?: string;
        soundLevelOn?: string;
        soundLevelOff?: string;
    }
    var themes: IBoardTheme[];
    function randomTheme(): IBoardTheme;
    type ComputedBoardDimensions = {
        scaleFn: (n: number) => number;
        height: number;
        width: number;
        xOff: number;
        yOff: number;
    };
    function getBoardDimensions(vis: BoardImageDefinition): ComputedBoardDimensions;
    interface MetroBoardProps extends GenericBoardProps {
        runtime?: pxsim.Runtime;
        theme?: IBoardTheme;
        disableTilt?: boolean;
    }
    class MetroBoardSvg extends GenericBoardSvg {
        props: MetroBoardProps;
        board: pxsim.DalBoard;
        private onBoardLeds;
        private onBoardNeopixels;
        private onBoardReset;
        private onBoardButtons;
        private onBoardTouchPads;
        constructor(props: MetroBoardProps);
        updateTheme(): void;
        updateState(): void;
        private addDefs(el);
    }
}
declare namespace pxsim.visuals {
}
declare namespace pxsim.visuals {
    class ButtonView implements IBoardPart<CommonButtonState> {
        element: SVGElement;
        defs: SVGElement[];
        style: string;
        private state;
        private bus;
        private btn;
        private pinId;
        private button;
        init(bus: EventBus, state: CommonButtonState, svgEl: SVGSVGElement, otherParams: Map<string>): void;
        moveToCoord(xy: Coord): void;
        updateState(): void;
        updateTheme(): void;
        private mkBtn();
        private attachEvents();
    }
}

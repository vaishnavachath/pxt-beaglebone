// Auto-generated. Do not edit.
declare const enum DAL {
    // /libraries/codal-core/inc/JACDAC/JACDAC.h
    JD_VERSION = 4,
    JD_SERIAL_MAX_BUFFERS = 10,
    JD_SERIAL_RECEIVING = 2,
    JD_SERIAL_TRANSMITTING = 4,
    JD_SERIAL_TX_DRAIN_ENABLE = 8,
    JD_SERIAL_BUS_RISE = 16,
    JD_SERIAL_EVT_DATA_READY = 1,
    JD_SERIAL_EVT_BUS_ERROR = 2,
    JD_SERIAL_EVT_DRAIN = 3,
    JD_SERIAL_EVT_RX_TIMEOUT = 4,
    JD_SERIAL_EVT_BUS_CONNECTED = 5,
    JD_SERIAL_EVT_BUS_DISCONNECTED = 6,
    JD_SERIAL_HEADER_SIZE = 4,
    JD_SERIAL_DATA_SIZE = 32,
    JD_SERIAL_PACKET_SIZE = 36,
    JD_SERIAL_MAXIMUM_BUFFERS = 10,
    JD_SERIAL_DMA_TIMEOUT = 2,
    JD_SERIAL_MAX_BAUD = 1000000,
    JD_SERIAL_TX_MAX_BACKOFF = 4000,
    JD_SERIAL_TX_MIN_BACKOFF = 1000,
    Receiving = 0,
    Transmitting = 1,
    High = 2,
    Low = 3,
    Baud1M = 1,
    Baud500K = 2,
    Baud250K = 4,
    Baud125K = 8,
    // /libraries/codal-core/inc/JACDAC/JDAccelerometerDriver.h
    JD_ACCEL_EVT_SEND_DATA = 1,
    // /libraries/codal-core/inc/JACDAC/JDBridgeDriver.h
    JD_BRIDGE_HISTORY_SIZE = 8,
    // /libraries/codal-core/inc/JACDAC/JDClasses.h
    STATIC_CLASS_START = 0,
    STATIC_CLASS_END = 16777215,
    DYNAMIC_CLASS_END = 4294967295,
    JD_DRIVER_CLASS_CODAL_START = 0,
    JD_DRIVER_CLASS_CODAL_END = 2000,
    JD_DRIVER_CLASS_MAKECODE_START = 2000,
    JD_DRIVER_CLASS_MAKECODE_END = 4000,
    JD_DRIVER_CLASS_CONTROL = 0,
    JD_DRIVER_CLASS_JOYSTICK = 1,
    JD_DRIVER_CLASS_MESSAGE_BUS = 2,
    JD_DRIVER_CLASS_BRIDGE = 3,
    JD_DRIVER_CLASS_BUTTON = 4,
    JD_DRIVER_CLASS_PIN = 5,
    JD_DRIVER_CLASS_RELIABILITY_TESTER = 6,
    JD_DRIVER_CLASS_ACCELEROMETER = 7,
    JD_DRIVER_CLASS_CAPTOUCH_BUTTON = 8,
    // /libraries/codal-core/inc/JACDAC/JDMessageBusDriver.h
    JD_MESSAGEBUS_TYPE_EVENT = 1,
    JD_MESSAGEBUS_TYPE_LISTEN = 2,
    // /libraries/codal-core/inc/JACDAC/JDPinDriver.h
    SetDigital = 0,
    SetAnalog = 1,
    SetServo = 2,
    // /libraries/codal-core/inc/JACDAC/JDProtocol.h
    JD_DRIVER_EVT_CONNECTED = 65520,
    JD_DRIVER_EVT_DISCONNECTED = 65521,
    JD_DRIVER_EVT_PAIRED = 65522,
    JD_DRIVER_EVT_UNPAIRED = 65523,
    JD_DRIVER_EVT_PAIR_REJECTED = 65524,
    JD_DRIVER_EVT_PAIRING_RESPONSE = 65525,
    JD_DRIVER_EVT_ERROR = 65526,
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
    JD_DEVICE_ERROR_MSK = 15,
    JD_LOGIC_DRIVER_MAX_FILTERS = 20,
    JD_LOGIC_DRIVER_TIMEOUT = 254,
    JD_LOGIC_ADDRESS_ALLOC_TIME = 254,
    JD_LOGIC_DRIVER_CTRLPACKET_TIME = 112,
    JD_LOGIC_DRIVER_EVT_CHANGED = 2,
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
    CONTROL_JD_TYPE_ERROR = 3,
    CONTROL_JD_TYPE_PANIC = 255,
    JD_PROTOCOL_EVT_SEND_CONTROL = 1,
    JD_PROTOCOL_DRIVER_ARRAY_SIZE = 20,
    CONTROL_PACKET_ERROR_NAME_LENGTH = 6,
    VirtualDriver = 16384,
    PairedDriver = 12288,
    HostDriver = 32768,
    PairableHostDriver = 34816,
    BroadcastDriver = 40960,
    SnifferDriver = 24576,
    DRIVER_OK = 0,
    DRIVER_CALIBRATION_IN_PROGRESS = 1,
    DRIVER_CALIBRATION_REQUIRED = 2,
    DRIVER_NO_RESOURCES = 3,
    DRIVER_BUSY = 4,
    DRIVER_COMMS_ERROR = 5,
    DRIVER_INVALID_STATE = 6,
    DRIVER_PERIPHERAL_MALFUNCTION = 7,
    // /libraries/codal-core/inc/JACDAC/JDReliabilityTester.h
    RELIABILITY_TEST_FINISHED = 7,
    RELIABILITY_STATUS_TEST_IN_PROGRESS = 2,
    RELIABILITY_STATUS_TEST_READY = 4,
    RELIABILITY_STATUS_TEST_FINISHED = 8,
    // /libraries/codal-core/inc/core/CodalComponent.h
    DEVICE_ID_BUTTON_A = 1,
    DEVICE_ID_BUTTON_B = 2,
    DEVICE_ID_BUTTON_AB = 3,
    DEVICE_ID_BUTTON_RESET = 4,
    DEVICE_ID_ACCELEROMETER = 5,
    DEVICE_ID_COMPASS = 6,
    DEVICE_ID_DISPLAY = 7,
    DEVICE_ID_THERMOMETER = 8,
    DEVICE_ID_RADIO = 9,
    DEVICE_ID_RADIO_DATA_READY = 10,
    DEVICE_ID_MULTIBUTTON_ATTACH = 11,
    DEVICE_ID_SERIAL = 12,
    DEVICE_ID_GESTURE = 13,
    DEVICE_ID_SYSTEM_TIMER = 14,
    DEVICE_ID_SCHEDULER = 15,
    DEVICE_ID_COMPONENT = 16,
    DEVICE_ID_LIGHT_SENSOR = 17,
    DEVICE_ID_TOUCH_SENSOR = 18,
    DEVICE_ID_SYSTEM_DAC = 19,
    DEVICE_ID_SYSTEM_MICROPHONE = 20,
    DEVICE_ID_SYSTEM_LEVEL_DETECTOR = 21,
    DEVICE_ID_SYSTEM_LEVEL_DETECTOR_SPL = 22,
    DEVICE_ID_MSC = 23,
    DEVICE_ID_SPI = 24,
    DEVICE_ID_DISTANCE = 25,
    DEVICE_ID_GYROSCOPE = 26,
    DEVICE_ID_HUMIDITY = 27,
    DEVICE_ID_PRESSURE = 28,
    DEVICE_ID_JACDAC0 = 29,
    DEVICE_ID_JACDAC1 = 30,
    DEVICE_ID_JACDAC_PROTOCOL = 31,
    DEVICE_ID_JACKROUTER = 32,
    DEVICE_ID_GAME_ENGINE = 33,
    DEVICE_ID_GAME_STATE_MANAGER = 34,
    DEVICE_ID_SPRITE = 35,
    DEVICE_ID_SINGLE_WIRE_SERIAL = 36,
    DEVICE_ID_IO_P0 = 100,
    DEVICE_ID_MESSAGE_BUS_LISTENER = 1021,
    DEVICE_ID_NOTIFY_ONE = 1022,
    DEVICE_ID_NOTIFY = 1023,
    DEVICE_ID_BUTTON_UP = 2000,
    DEVICE_ID_BUTTON_DOWN = 2001,
    DEVICE_ID_BUTTON_LEFT = 2002,
    DEVICE_ID_BUTTON_RIGHT = 2003,
    DEVICE_ID_JD_DYNAMIC_ID = 3000,
    DEVICE_COMPONENT_RUNNING = 4096,
    DEVICE_COMPONENT_STATUS_SYSTEM_TICK = 8192,
    DEVICE_COMPONENT_STATUS_IDLE_TICK = 16384,
    DEVICE_COMPONENT_LISTENERS_CONFIGURED = 1,
    DEVICE_COMPONENT_EVT_SYSTEM_TICK = 1,
    // /libraries/codal-core/inc/core/CodalFiber.h
    DEVICE_SCHEDULER_RUNNING = 1,
    DEVICE_SCHEDULER_IDLE = 2,
    DEVICE_FIBER_FLAG_FOB = 1,
    DEVICE_FIBER_FLAG_PARENT = 2,
    DEVICE_FIBER_FLAG_CHILD = 4,
    DEVICE_FIBER_FLAG_DO_NOT_PAGE = 8,
    DEVICE_SCHEDULER_EVT_TICK = 1,
    DEVICE_SCHEDULER_EVT_IDLE = 2,
    // /libraries/codal-core/inc/core/CodalListener.h
    MESSAGE_BUS_LISTENER_PARAMETERISED = 1,
    MESSAGE_BUS_LISTENER_METHOD = 2,
    MESSAGE_BUS_LISTENER_BUSY = 4,
    MESSAGE_BUS_LISTENER_REENTRANT = 8,
    MESSAGE_BUS_LISTENER_QUEUE_IF_BUSY = 16,
    MESSAGE_BUS_LISTENER_DROP_IF_BUSY = 32,
    MESSAGE_BUS_LISTENER_NONBLOCKING = 64,
    MESSAGE_BUS_LISTENER_URGENT = 128,
    MESSAGE_BUS_LISTENER_DELETING = 32768,
    MESSAGE_BUS_LISTENER_IMMEDIATE = 192,
    // /libraries/codal-core/inc/core/ErrorNo.h
    DEVICE_OK = 0,
    DEVICE_INVALID_PARAMETER = -1001,
    DEVICE_NOT_SUPPORTED = -1002,
    DEVICE_CALIBRATION_IN_PROGRESS = -1003,
    DEVICE_CALIBRATION_REQUIRED = -1004,
    DEVICE_NO_RESOURCES = -1005,
    DEVICE_BUSY = -1006,
    DEVICE_CANCELLED = -1007,
    DEVICE_I2C_ERROR = -1010,
    DEVICE_SERIAL_IN_USE = -1011,
    DEVICE_NO_DATA = -1012,
    DEVICE_NOT_IMPLEMENTED = -1013,
    DEVICE_SPI_ERROR = -1014,
    DEVICE_INVALID_STATE = -1015,
    DEVICE_OOM = 20,
    DEVICE_HEAP_ERROR = 30,
    DEVICE_NULL_DEREFERENCE = 40,
    DEVICE_USB_ERROR = 50,
    DEVICE_HARDWARE_CONFIGURATION_ERROR = 90,
    // /libraries/codal-core/inc/core/NotifyEvents.h
    DISPLAY_EVT_FREE = 1,
    CODAL_SERIAL_EVT_TX_EMPTY = 2,
    BLE_EVT_SERIAL_TX_EMPTY = 3,
    ARCADE_PLAYER_JOIN_RESULT = 4,
    DEVICE_NOTIFY_USER_EVENT_BASE = 1024,
    // /libraries/codal-core/inc/driver-models/AbstractButton.h
    DEVICE_BUTTON_EVT_DOWN = 1,
    DEVICE_BUTTON_EVT_UP = 2,
    DEVICE_BUTTON_EVT_CLICK = 3,
    DEVICE_BUTTON_EVT_LONG_CLICK = 4,
    DEVICE_BUTTON_EVT_HOLD = 5,
    DEVICE_BUTTON_EVT_DOUBLE_CLICK = 6,
    DEVICE_BUTTON_LONG_CLICK_TIME = 1000,
    DEVICE_BUTTON_HOLD_TIME = 1500,
    DEVICE_BUTTON_STATE = 1,
    DEVICE_BUTTON_STATE_HOLD_TRIGGERED = 2,
    DEVICE_BUTTON_STATE_CLICK = 4,
    DEVICE_BUTTON_STATE_LONG_CLICK = 8,
    DEVICE_BUTTON_SIGMA_MIN = 0,
    DEVICE_BUTTON_SIGMA_MAX = 12,
    DEVICE_BUTTON_SIGMA_THRESH_HI = 8,
    DEVICE_BUTTON_SIGMA_THRESH_LO = 2,
    DEVICE_BUTTON_DOUBLE_CLICK_THRESH = 50,
    DEVICE_BUTTON_SIMPLE_EVENTS = 0,
    DEVICE_BUTTON_ALL_EVENTS = 1,
    ACTIVE_LOW = 0,
    ACTIVE_HIGH = 1,
    // /libraries/codal-core/inc/driver-models/Accelerometer.h
    ACCELEROMETER_IMU_DATA_VALID = 2,
    ACCELEROMETER_EVT_DATA_UPDATE = 1,
    ACCELEROMETER_EVT_NONE = 0,
    ACCELEROMETER_EVT_TILT_UP = 1,
    ACCELEROMETER_EVT_TILT_DOWN = 2,
    ACCELEROMETER_EVT_TILT_LEFT = 3,
    ACCELEROMETER_EVT_TILT_RIGHT = 4,
    ACCELEROMETER_EVT_FACE_UP = 5,
    ACCELEROMETER_EVT_FACE_DOWN = 6,
    ACCELEROMETER_EVT_FREEFALL = 7,
    ACCELEROMETER_EVT_3G = 8,
    ACCELEROMETER_EVT_6G = 9,
    ACCELEROMETER_EVT_8G = 10,
    ACCELEROMETER_EVT_SHAKE = 11,
    ACCELEROMETER_REST_TOLERANCE = 200,
    ACCELEROMETER_TILT_TOLERANCE = 200,
    ACCELEROMETER_FREEFALL_TOLERANCE = 400,
    ACCELEROMETER_SHAKE_TOLERANCE = 400,
    ACCELEROMETER_3G_TOLERANCE = 3072,
    ACCELEROMETER_6G_TOLERANCE = 6144,
    ACCELEROMETER_8G_TOLERANCE = 8192,
    ACCELEROMETER_GESTURE_DAMPING = 5,
    ACCELEROMETER_SHAKE_DAMPING = 10,
    ACCELEROMETER_SHAKE_RTX = 30,
    ACCELEROMETER_SHAKE_COUNT_THRESHOLD = 4,
    // /libraries/codal-core/inc/driver-models/Compass.h
    COMPASS_STATUS_RUNNING = 1,
    COMPASS_STATUS_CALIBRATED = 2,
    COMPASS_STATUS_CALIBRATING = 4,
    COMPASS_STATUS_ADDED_TO_IDLE = 8,
    COMPASS_EVT_DATA_UPDATE = 1,
    COMPASS_EVT_CONFIG_NEEDED = 2,
    COMPASS_EVT_CALIBRATE = 3,
    COMPASS_EVT_CALIBRATION_NEEDED = 4,
    // /libraries/codal-core/inc/driver-models/Gyroscope.h
    GYROSCOPE_IMU_DATA_VALID = 2,
    GYROSCOPE_EVT_DATA_UPDATE = 1,
    // /libraries/codal-core/inc/driver-models/Pin.h
    IO_STATUS_DIGITAL_IN = 1,
    IO_STATUS_DIGITAL_OUT = 2,
    IO_STATUS_ANALOG_IN = 4,
    IO_STATUS_ANALOG_OUT = 8,
    IO_STATUS_TOUCH_IN = 16,
    IO_STATUS_EVENT_ON_EDGE = 32,
    IO_STATUS_EVENT_PULSE_ON_EDGE = 64,
    DEVICE_PIN_MAX_OUTPUT = 1023,
    DEVICE_PIN_MAX_SERVO_RANGE = 180,
    DEVICE_PIN_DEFAULT_SERVO_RANGE = 2000,
    DEVICE_PIN_DEFAULT_SERVO_CENTER = 1500,
    DEVICE_PIN_EVENT_NONE = 0,
    DEVICE_PIN_EVENT_ON_EDGE = 1,
    DEVICE_PIN_EVENT_ON_PULSE = 2,
    DEVICE_PIN_EVENT_ON_TOUCH = 3,
    DEVICE_PIN_EVT_RISE = 2,
    DEVICE_PIN_EVT_FALL = 3,
    DEVICE_PIN_EVT_PULSE_HI = 4,
    DEVICE_PIN_EVT_PULSE_LO = 5,
    PIN_CAPABILITY_DIGITAL = 1,
    PIN_CAPABILITY_ANALOG = 2,
    PIN_CAPABILITY_AD = 3,
    PIN_CAPABILITY_ALL = 3,
    None = 0,
    Down = 1,
    Up = 2,
    // /libraries/codal-core/inc/driver-models/Radio.h
    RADIO_EVT_DATA_READY = 2,
    // /libraries/codal-core/inc/driver-models/SPIFlash.h
    SPIFLASH_PAGE_SIZE = 256,
    SPIFLASH_SMALL_ROW_PAGES = 16,
    SPIFLASH_BIG_ROW_PAGES = 256,
    // /libraries/codal-core/inc/driver-models/Sensor.h
    SENSOR_THRESHOLD_LOW = 1,
    SENSOR_THRESHOLD_HIGH = 2,
    SENSOR_UPDATE_NEEDED = 3,
    SENSOR_INITIALISED = 1,
    SENSOR_HIGH_THRESHOLD_PASSED = 2,
    SENSOR_LOW_THRESHOLD_PASSED = 4,
    SENSOR_LOW_THRESHOLD_ENABLED = 8,
    SENSOR_HIGH_THRESHOLD_ENABLED = 16,
    SENSOR_DEFAULT_SENSITIVITY = 868,
    SENSOR_DEFAULT_SAMPLE_PERIOD = 500,
    // /libraries/codal-core/inc/driver-models/Serial.h
    CODAL_SERIAL_DEFAULT_BAUD_RATE = 115200,
    CODAL_SERIAL_DEFAULT_BUFFER_SIZE = 20,
    CODAL_SERIAL_EVT_DELIM_MATCH = 1,
    CODAL_SERIAL_EVT_HEAD_MATCH = 2,
    CODAL_SERIAL_EVT_RX_FULL = 3,
    CODAL_SERIAL_RX_IN_USE = 1,
    CODAL_SERIAL_TX_IN_USE = 2,
    CODAL_SERIAL_RX_BUFF_INIT = 4,
    CODAL_SERIAL_TX_BUFF_INIT = 8,
    ASYNC = 0,
    SYNC_SPINWAIT = 1,
    SYNC_SLEEP = 2,
    RxInterrupt = 0,
    TxInterrupt = 1,
    // /libraries/codal-core/inc/driver-models/SingleWireSerial.h
    SWS_EVT_DATA_RECEIVED = 1,
    SWS_EVT_DATA_SENT = 2,
    SWS_EVT_ERROR = 3,
    SWS_EVT_DATA_DROPPED = 4,
    SingleWireRx = 0,
    SingleWireTx = 1,
    SingleWireDisconnected = 2,
    // /libraries/codal-core/inc/driver-models/Timer.h
    CODAL_TIMER_DEFAULT_EVENT_LIST_SIZE = 10,
    // /libraries/codal-core/inc/drivers/AnalogSensor.h
    ANALOG_THRESHOLD_LOW = 1,
    ANALOG_THRESHOLD_HIGH = 2,
    ANALOG_SENSOR_UPDATE_NEEDED = 3,
    ANALOG_SENSOR_INITIALISED = 1,
    ANALOG_SENSOR_HIGH_THRESHOLD_PASSED = 2,
    ANALOG_SENSOR_LOW_THRESHOLD_PASSED = 4,
    ANALOG_SENSOR_LOW_THRESHOLD_ENABLED = 8,
    ANALOG_SENSOR_HIGH_THRESHOLD_ENABLED = 16,
    // /libraries/codal-core/inc/drivers/AnimatedDisplay.h
    DISPLAY_EVT_ANIMATION_COMPLETE = 1,
    DISPLAY_DEFAULT_AUTOCLEAR = 1,
    DISPLAY_SPACING = 1,
    DISPLAY_ANIMATE_DEFAULT_POS = -255,
    DISPLAY_DEFAULT_SCROLL_SPEED = 120,
    DISPLAY_DEFAULT_SCROLL_STRIDE = -1,
    DISPLAY_DEFAULT_PRINT_SPEED = 400,
    ANIMATION_MODE_NONE = 0,
    ANIMATION_MODE_STOPPED = 1,
    ANIMATION_MODE_SCROLL_TEXT = 2,
    ANIMATION_MODE_PRINT_TEXT = 3,
    ANIMATION_MODE_SCROLL_IMAGE = 4,
    ANIMATION_MODE_ANIMATE_IMAGE = 5,
    ANIMATION_MODE_ANIMATE_IMAGE_WITH_CLEAR = 6,
    ANIMATION_MODE_PRINT_CHARACTER = 7,
    // /libraries/codal-core/inc/drivers/FAT.h
    FAT_RESERVED_SECTORS = 1,
    FAT_ROOT_DIR_SECTORS = 4,
    // /libraries/codal-core/inc/drivers/HID.h
    HID_REQUEST_GET_REPORT = 1,
    HID_REQUEST_GET_IDLE = 2,
    HID_REQUEST_GET_PROTOCOL = 3,
    HID_REQUEST_SET_REPORT = 9,
    HID_REQUEST_SET_IDLE = 10,
    HID_REQUEST_SET_PROTOCOL = 11,
    // /libraries/codal-core/inc/drivers/HIDKeyboard.h
    HID_KEYBOARD_NUM_REPORTS = 3,
    HID_KEYBOARD_REPORT_GENERIC = 1,
    HID_KEYBOARD_REPORT_CONSUMER = 2,
    HID_KEYBOARD_KEYSTATE_SIZE_GENERIC = 8,
    HID_KEYBOARD_KEYSTATE_SIZE_CONSUMER = 2,
    HID_KEYBOARD_MODIFIER_OFFSET = 2,
    HID_KEYBOARD_DELAY_DEFAULT = 10,
    PressKey = 0,
    ReleaseKey = 1,
    // /libraries/codal-core/inc/drivers/JackRouter.h
    AllDown = 1,
    HeadPhones = 2,
    Buzzer = 3,
    BuzzerAndSerial = 4,
    // /libraries/codal-core/inc/drivers/KeyMap.h
    KEYMAP_ALL_KEYS_UP_Val = 1,
    KEYMAP_ALL_KEYS_UP_POS = 28,
    KEYMAP_NORMAL_KEY_Val = 0,
    KEYMAP_MODIFIER_KEY_Val = 1,
    KEYMAP_MODIFIER_POS = 29,
    KEYMAP_MEDIA_KEY_Val = 1,
    KEYMAP_MEDIA_POS = 30,
    KEYMAP_KEY_UP_Val = 0,
    KEYMAP_KEY_DOWN_Val = 1,
    KEYMAP_KEY_DOWN_POS = 31,
    // /libraries/codal-core/inc/drivers/LEDMatrix.h
    LED_MATRIX_GREYSCALE_BIT_DEPTH = 8,
    LED_MATRIX_EVT_LIGHT_SENSE = 2,
    LED_MATRIX_EVT_FRAME_TIMEOUT = 3,
    LED_MATRIX_MINIMUM_BRIGHTNESS = 1,
    LED_MATRIX_MAXIMUM_BRIGHTNESS = 255,
    LED_MATRIX_DEFAULT_BRIGHTNESS = 255,
    DISPLAY_MODE_BLACK_AND_WHITE = 0,
    DISPLAY_MODE_GREYSCALE = 1,
    DISPLAY_MODE_BLACK_AND_WHITE_LIGHT_SENSE = 2,
    MATRIX_DISPLAY_ROTATION_0 = 0,
    MATRIX_DISPLAY_ROTATION_90 = 1,
    MATRIX_DISPLAY_ROTATION_180 = 2,
    MATRIX_DISPLAY_ROTATION_270 = 3,
    NO_CONN = 0,
    // /libraries/codal-core/inc/drivers/MAG3110.h
    MAG3110_DEFAULT_ADDR = 29,
    MAG_DR_STATUS = 0,
    MAG_OUT_X_MSB = 1,
    MAG_OUT_X_LSB = 2,
    MAG_OUT_Y_MSB = 3,
    MAG_OUT_Y_LSB = 4,
    MAG_OUT_Z_MSB = 5,
    MAG_OUT_Z_LSB = 6,
    MAG_WHOAMI = 7,
    MAG_SYSMOD = 8,
    MAG_OFF_X_MSB = 9,
    MAG_OFF_X_LSB = 10,
    MAG_OFF_Y_MSB = 11,
    MAG_OFF_Y_LSB = 12,
    MAG_OFF_Z_MSB = 13,
    MAG_OFF_Z_LSB = 14,
    MAG_DIE_TEMP = 15,
    MAG_CTRL_REG1 = 16,
    MAG_CTRL_REG2 = 17,
    MAG3110_SAMPLE_RATES = 11,
    MAG3110_WHOAMI_VAL = 196,
    // /libraries/codal-core/inc/drivers/MMA8653.h
    MICROBIT_ACCEL_PITCH_ROLL_VALID = 2,
    MICROBIT_ACCEL_ADDED_TO_IDLE = 4,
    MMA8653_DEFAULT_ADDR = 58,
    MMA8653_STATUS = 0,
    MMA8653_OUT_X_MSB = 1,
    MMA8653_WHOAMI = 13,
    MMA8653_XYZ_DATA_CFG = 14,
    MMA8653_CTRL_REG1 = 42,
    MMA8653_CTRL_REG2 = 43,
    MMA8653_CTRL_REG3 = 44,
    MMA8653_CTRL_REG4 = 45,
    MMA8653_CTRL_REG5 = 46,
    MMA8653_WHOAMI_VAL = 90,
    MMA8653_SAMPLE_RANGES = 3,
    MMA8653_SAMPLE_RATES = 8,
    // /libraries/codal-core/inc/drivers/MultiButton.h
    MULTI_BUTTON_STATE_1 = 1,
    MULTI_BUTTON_STATE_2 = 2,
    MULTI_BUTTON_HOLD_TRIGGERED_1 = 4,
    MULTI_BUTTON_HOLD_TRIGGERED_2 = 8,
    MULTI_BUTTON_SUPRESSED_1 = 16,
    MULTI_BUTTON_SUPRESSED_2 = 32,
    MULTI_BUTTON_ATTACHED = 64,
    // /libraries/codal-core/inc/drivers/ST7735.h
    MADCTL_MY = 128,
    MADCTL_MX = 64,
    MADCTL_MV = 32,
    MADCTL_ML = 16,
    MADCTL_RGB = 0,
    MADCTL_BGR = 8,
    MADCTL_MH = 4,
    // /libraries/codal-core/inc/drivers/TouchButton.h
    TOUCH_BUTTON_CALIBRATION_PERIOD = 10,
    TOUCH_BUTTON_CALIBRATION_LINEAR_OFFSET = 2,
    TOUCH_BUTTON_CALIBRATION_PERCENTAGE_OFFSET = 5,
    TOUCH_BUTTON_CALIBRATING = 16,
    // /libraries/codal-core/inc/drivers/TouchSensor.h
    TOUCH_SENSOR_MAX_BUTTONS = 10,
    TOUCH_SENSOR_SAMPLE_PERIOD = 50,
    TOUCH_SENSE_SAMPLE_MAX = 1000,
    TOUCH_SENSOR_UPDATE_NEEDED = 1,
    // /libraries/codal-core/inc/drivers/USB_HID_Keys.h
    KEY_MOD_LCTRL = 1,
    KEY_MOD_LSHIFT = 2,
    KEY_MOD_LALT = 4,
    KEY_MOD_LMETA = 8,
    KEY_MOD_RCTRL = 16,
    KEY_MOD_RSHIFT = 32,
    KEY_MOD_RALT = 64,
    KEY_MOD_RMETA = 128,
    KEY_NONE = 0,
    KEY_ERR_OVF = 1,
    KEY_A = 4,
    KEY_B = 5,
    KEY_C = 6,
    KEY_D = 7,
    KEY_E = 8,
    KEY_F = 9,
    KEY_G = 10,
    KEY_H = 11,
    KEY_I = 12,
    KEY_J = 13,
    KEY_K = 14,
    KEY_L = 15,
    KEY_M = 16,
    KEY_N = 17,
    KEY_O = 18,
    KEY_P = 19,
    KEY_Q = 20,
    KEY_R = 21,
    KEY_S = 22,
    KEY_T = 23,
    KEY_U = 24,
    KEY_V = 25,
    KEY_W = 26,
    KEY_X = 27,
    KEY_Y = 28,
    KEY_Z = 29,
    KEY_1 = 30,
    KEY_2 = 31,
    KEY_3 = 32,
    KEY_4 = 33,
    KEY_5 = 34,
    KEY_6 = 35,
    KEY_7 = 36,
    KEY_8 = 37,
    KEY_9 = 38,
    KEY_0 = 39,
    KEY_ENTER = 40,
    KEY_ESC = 41,
    KEY_BACKSPACE = 42,
    KEY_TAB = 43,
    KEY_SPACE = 44,
    KEY_MINUS = 45,
    KEY_EQUAL = 46,
    KEY_LEFTBRACE = 47,
    KEY_RIGHTBRACE = 48,
    KEY_BACKSLASH = 49,
    KEY_HASHTILDE = 50,
    KEY_SEMICOLON = 51,
    KEY_APOSTROPHE = 52,
    KEY_GRAVE = 53,
    KEY_COMMA = 54,
    KEY_DOT = 55,
    KEY_SLASH = 56,
    KEY_CAPSLOCK = 57,
    KEY_F1 = 58,
    KEY_F2 = 59,
    KEY_F3 = 60,
    KEY_F4 = 61,
    KEY_F5 = 62,
    KEY_F6 = 63,
    KEY_F7 = 64,
    KEY_F8 = 65,
    KEY_F9 = 66,
    KEY_F10 = 67,
    KEY_F11 = 68,
    KEY_F12 = 69,
    KEY_SYSRQ = 70,
    KEY_SCROLLLOCK = 71,
    KEY_PAUSE = 72,
    KEY_INSERT = 73,
    KEY_HOME = 74,
    KEY_PAGEUP = 75,
    KEY_DELETE = 76,
    KEY_END = 77,
    KEY_PAGEDOWN = 78,
    KEY_RIGHT = 79,
    KEY_LEFT = 80,
    KEY_DOWN = 81,
    KEY_UP = 82,
    KEY_NUMLOCK = 83,
    KEY_KPSLASH = 84,
    KEY_KPASTERISK = 85,
    KEY_KPMINUS = 86,
    KEY_KPPLUS = 87,
    KEY_KPENTER = 88,
    KEY_KP1 = 89,
    KEY_KP2 = 90,
    KEY_KP3 = 91,
    KEY_KP4 = 92,
    KEY_KP5 = 93,
    KEY_KP6 = 94,
    KEY_KP7 = 95,
    KEY_KP8 = 96,
    KEY_KP9 = 97,
    KEY_KP0 = 98,
    KEY_KPDOT = 99,
    KEY_102ND = 100,
    KEY_COMPOSE = 101,
    KEY_POWER = 102,
    KEY_KPEQUAL = 103,
    KEY_F13 = 104,
    KEY_F14 = 105,
    KEY_F15 = 106,
    KEY_F16 = 107,
    KEY_F17 = 108,
    KEY_F18 = 109,
    KEY_F19 = 110,
    KEY_F20 = 111,
    KEY_F21 = 112,
    KEY_F22 = 113,
    KEY_F23 = 114,
    KEY_F24 = 115,
    KEY_OPEN = 116,
    KEY_HELP = 117,
    KEY_PROPS = 118,
    KEY_FRONT = 119,
    KEY_STOP = 120,
    KEY_AGAIN = 121,
    KEY_UNDO = 122,
    KEY_CUT = 123,
    KEY_COPY = 124,
    KEY_PASTE = 125,
    KEY_FIND = 126,
    KEY_MUTE = 127,
    KEY_VOLUMEUP = 128,
    KEY_VOLUMEDOWN = 129,
    KEY_KPCOMMA = 133,
    KEY_RO = 135,
    KEY_KATAKANAHIRAGANA = 136,
    KEY_YEN = 137,
    KEY_HENKAN = 138,
    KEY_MUHENKAN = 139,
    KEY_KPJPCOMMA = 140,
    KEY_HANGEUL = 144,
    KEY_HANJA = 145,
    KEY_KATAKANA = 146,
    KEY_HIRAGANA = 147,
    KEY_ZENKAKUHANKAKU = 148,
    KEY_KPLEFTPAREN = 182,
    KEY_KPRIGHTPAREN = 183,
    KEY_LEFTCTRL = 224,
    KEY_LEFTSHIFT = 225,
    KEY_LEFTALT = 226,
    KEY_LEFTMETA = 227,
    KEY_RIGHTCTRL = 228,
    KEY_RIGHTSHIFT = 229,
    KEY_RIGHTALT = 230,
    KEY_RIGHTMETA = 231,
    KEY_MEDIA_PLAYPAUSE = 232,
    KEY_MEDIA_STOPCD = 233,
    KEY_MEDIA_PREVIOUSSONG = 234,
    KEY_MEDIA_NEXTSONG = 235,
    KEY_MEDIA_EJECTCD = 236,
    KEY_MEDIA_VOLUMEUP = 237,
    KEY_MEDIA_VOLUMEDOWN = 238,
    KEY_MEDIA_MUTE = 239,
    KEY_MEDIA_WWW = 240,
    KEY_MEDIA_BACK = 241,
    KEY_MEDIA_FORWARD = 242,
    KEY_MEDIA_STOP = 243,
    KEY_MEDIA_FIND = 244,
    KEY_MEDIA_SCROLLUP = 245,
    KEY_MEDIA_SCROLLDOWN = 246,
    KEY_MEDIA_EDIT = 247,
    KEY_MEDIA_SLEEP = 248,
    KEY_MEDIA_COFFEE = 249,
    KEY_MEDIA_REFRESH = 250,
    KEY_MEDIA_CALC = 251,
    // /libraries/codal-core/inc/drivers/uf2format.h
    UF2FORMAT_H = 1,
    APP_START_ADDRESS = 8192,
    UF2_FLAG_NOFLASH = 1,
    // /libraries/codal-core/inc/streams/DataStream.h
    DATASTREAM_MAXIMUM_BUFFERS = 1,
    // /libraries/codal-core/inc/streams/LevelDetector.h
    LEVEL_THRESHOLD_LOW = 1,
    LEVEL_THRESHOLD_HIGH = 2,
    LEVEL_DETECTOR_INITIALISED = 1,
    LEVEL_DETECTOR_HIGH_THRESHOLD_PASSED = 2,
    LEVEL_DETECTOR_LOW_THRESHOLD_PASSED = 4,
    LEVEL_DETECTOR_DEFAULT_WINDOW_SIZE = 128,
    // /libraries/codal-core/inc/streams/LevelDetectorSPL.h
    LEVEL_DETECTOR_SPL_INITIALISED = 1,
    LEVEL_DETECTOR_SPL_HIGH_THRESHOLD_PASSED = 2,
    LEVEL_DETECTOR_SPL_LOW_THRESHOLD_PASSED = 4,
    LEVEL_DETECTOR_SPL_DEFAULT_WINDOW_SIZE = 128,
    // /libraries/codal-core/inc/streams/Synthesizer.h
    SYNTHESIZER_SAMPLE_RATE = 44100,
    TONE_WIDTH = 1024,
    // /libraries/codal-core/inc/types/BitmapFont.h
    BITMAP_FONT_WIDTH = 5,
    BITMAP_FONT_HEIGHT = 5,
    BITMAP_FONT_ASCII_START = 32,
    BITMAP_FONT_ASCII_END = 126,
    // /libraries/codal-core/inc/types/CoordinateSystem.h
    COORDINATE_SPACE_ROTATED_0 = 0,
    COORDINATE_SPACE_ROTATED_90 = 1,
    COORDINATE_SPACE_ROTATED_180 = 2,
    COORDINATE_SPACE_ROTATED_270 = 3,
    RAW = 0,
    SIMPLE_CARTESIAN = 1,
    NORTH_EAST_DOWN = 2,
    NORTH_EAST_UP = 3,
    // /libraries/codal-core/inc/types/Event.h
    DEVICE_ID_ANY = 0,
    DEVICE_EVT_ANY = 0,
    CREATE_ONLY = 0,
    CREATE_AND_FIRE = 1,
    DEVICE_EVENT_DEFAULT_LAUNCH_MODE = 1,
    // /libraries/codal-core/inc/types/RefCounted.h
    REF_TAG_STRING = 1,
    REF_TAG_BUFFER = 2,
    REF_TAG_IMAGE = 3,
    REF_TAG_USER = 32,
    // /pxtapp/configkeys.h
    CFG_PIN_ACCELEROMETER_INT = 1,
    CFG_PIN_ACCELEROMETER_SCL = 2,
    CFG_PIN_ACCELEROMETER_SDA = 3,
    CFG_PIN_BTN_A = 4,
    CFG_PIN_BTN_B = 5,
    CFG_PIN_BTN_SLIDE = 6,
    CFG_PIN_DOTSTAR_CLOCK = 7,
    CFG_PIN_DOTSTAR_DATA = 8,
    CFG_PIN_FLASH_CS = 9,
    CFG_PIN_FLASH_MISO = 10,
    CFG_PIN_FLASH_MOSI = 11,
    CFG_PIN_FLASH_SCK = 12,
    CFG_PIN_LED = 13,
    CFG_PIN_LIGHT = 14,
    CFG_PIN_MICROPHONE = 15,
    CFG_PIN_MIC_CLOCK = 16,
    CFG_PIN_MIC_DATA = 17,
    CFG_PIN_MISO = 18,
    CFG_PIN_MOSI = 19,
    CFG_PIN_NEOPIXEL = 20,
    CFG_PIN_RX = 21,
    CFG_PIN_RXLED = 22,
    CFG_PIN_SCK = 23,
    CFG_PIN_SCL = 24,
    CFG_PIN_SDA = 25,
    CFG_PIN_SPEAKER_AMP = 26,
    CFG_PIN_TEMPERATURE = 27,
    CFG_PIN_TX = 28,
    CFG_PIN_TXLED = 29,
    CFG_PIN_IR_OUT = 30,
    CFG_PIN_IR_IN = 31,
    CFG_PIN_DISPLAY_SCK = 32,
    CFG_PIN_DISPLAY_MISO = 33,
    CFG_PIN_DISPLAY_MOSI = 34,
    CFG_PIN_DISPLAY_CS = 35,
    CFG_PIN_DISPLAY_DC = 36,
    CFG_DISPLAY_WIDTH = 37,
    CFG_DISPLAY_HEIGHT = 38,
    CFG_DISPLAY_CFG0 = 39,
    CFG_DISPLAY_CFG1 = 40,
    CFG_DISPLAY_CFG2 = 41,
    CFG_DISPLAY_CFG3 = 42,
    CFG_PIN_DISPLAY_RST = 43,
    CFG_PIN_DISPLAY_BL = 44,
    CFG_PIN_SERVO_1 = 45,
    CFG_PIN_SERVO_2 = 46,
    CFG_PIN_BTN_LEFT = 47,
    CFG_PIN_BTN_RIGHT = 48,
    CFG_PIN_BTN_UP = 49,
    CFG_PIN_BTN_DOWN = 50,
    CFG_PIN_BTN_MENU = 51,
    CFG_PIN_LED_R = 52,
    CFG_PIN_LED_G = 53,
    CFG_PIN_LED_B = 54,
    CFG_PIN_LED1 = 55,
    CFG_PIN_LED2 = 56,
    CFG_PIN_LED3 = 57,
    CFG_PIN_LED4 = 58,
    CFG_SPEAKER_VOLUME = 59,
    CFG_PIN_JACK_TX = 60,
    CFG_PIN_JACK_SENSE = 61,
    CFG_PIN_JACK_HPEN = 62,
    CFG_PIN_JACK_BZEN = 63,
    CFG_PIN_JACK_PWREN = 64,
    CFG_PIN_JACK_SND = 65,
    CFG_PIN_JACK_BUSLED = 66,
    CFG_PIN_JACK_COMMLED = 67,
    CFG_PIN_BTNMX_LATCH = 66,
    CFG_PIN_BTNMX_CLOCK = 67,
    CFG_PIN_BTNMX_DATA = 68,
    CFG_PIN_BTN_SOFT_RESET = 69,
    CFG_ACCELEROMETER_TYPE = 70,
    ACCELEROMETER_TYPE_LIS3DH = 50,
    ACCELEROMETER_TYPE_MMA8453 = 56,
    ACCELEROMETER_TYPE_FXOS8700 = 60,
    ACCELEROMETER_TYPE_MMA8653 = 58,
    ACCELEROMETER_TYPE_MSA300 = 76,
    CFG_USR0 = 1,
    CFG_USR1 = 2,
    CFG_USR2 = 3,
    CFG_USR3 = 4,
    CFG_P8_01 = 100,
    CFG_P8_02 = 101,
    CFG_P8_03 = 102,
    CFG_P8_04 = 103,
    CFG_P8_05 = 104,
    CFG_P8_06 = 105,
    CFG_P8_07 = 106,
    CFG_P8_08 = 107,
    CFG_P8_09 = 108,
    CFG_P8_10 = 109,
    CFG_P8_11 = 110,
    CFG_P8_12 = 111,
    CFG_P8_13 = 112,
    CFG_P8_14 = 113,
    CFG_P8_15 = 114,
    CFG_P8_16 = 115,
    CFG_P8_17 = 116,
    CFG_P8_18 = 117,
    CFG_P8_19 = 118,
    CFG_P8_20 = 119,
    CFG_P8_21 = 120,
    CFG_P8_22 = 121,
    CFG_P8_23 = 122,    
    CFG_P8_24 = 123,
    CFG_P8_25 = 124,
    CFG_P8_26 = 125,    
    CFG_P8_27 = 126,
    CFG_P8_28 = 127,
    CFG_P8_29 = 128,
    CFG_P8_30 = 129,
    CFG_P8_31 = 130,
    CFG_P8_32 = 131,
    CFG_P8_33 = 132,
    CFG_P8_34 = 133,
    CFG_P8_35 = 134,
    CFG_P8_36 = 135,
    CFG_P8_37 = 136,
    CFG_P8_38 = 137,
    CFG_P8_39 = 138,
    CFG_P8_40 = 139,
    CFG_P8_41 = 140,    
    CFG_P8_42 = 141,    
    CFG_P8_43 = 142,
    CFG_P8_44 = 143,    
    CFG_P8_45 = 144,    
    CFG_P8_46 = 145,    
    CFG_P9_01 = 150,
    CFG_P9_02 = 151,
    CFG_P9_03 = 152,
    CFG_P9_04 = 153,
    CFG_P9_05 = 154,
    CFG_P9_06 = 155,
    CFG_P9_07 = 156,
    CFG_P9_08 = 157,
    CFG_P9_09 = 158,
    CFG_P9_10 = 159,
    CFG_P9_11 = 160,
    CFG_P9_12 = 161,
    CFG_P9_13 = 162,
    CFG_P9_14 = 163,
    CFG_P9_15 = 164,
    CFG_P9_16 = 165,
    CFG_P9_17 = 166,
    CFG_P9_18 = 167,
    CFG_P9_19 = 168,
    CFG_P9_20 = 169,
    CFG_P9_21 = 170,
    CFG_P9_22 = 171,
    CFG_P9_23 = 172,    
    CFG_P9_24 = 173,
    CFG_P9_25 = 174,
    CFG_P9_26 = 175,    
    CFG_P9_27 = 176,
    CFG_P9_28 = 177,
    CFG_P9_29 = 178,
    CFG_P9_30 = 179,
    CFG_P9_31 = 180,
    CFG_P9_32 = 181,
    CFG_P9_33 = 182,
    CFG_P9_34 = 183,
    CFG_P9_35 = 184,
    CFG_P9_36 = 185,
    CFG_P9_37 = 186,
    CFG_P9_38 = 187,
    CFG_P9_39 = 188,
    CFG_P9_40 = 189,
    CFG_P9_41 = 190,    
    CFG_P9_42 = 191,    
    CFG_P9_43 = 192,
    CFG_P9_44 = 193,    
    CFG_P9_45 = 194,    
    CFG_P9_46 = 195,
    CFG_P1_01 = 200,
    CFG_P1_02 = 201,
    CFG_P1_03 = 202,
    CFG_P1_04 = 203,
    CFG_P1_05 = 204,
    CFG_P1_06 = 205,
    CFG_P1_07 = 206,
    CFG_P1_08 = 207,
    CFG_P1_09 = 208,
    CFG_P1_10 = 209,
    CFG_P1_11 = 210,
    CFG_P1_12 = 211,
    CFG_P1_13 = 212,
    CFG_P1_14 = 213,
    CFG_P1_15 = 214,
    CFG_P1_16 = 215,
    CFG_P1_17 = 216,
    CFG_P1_18 = 217,
    CFG_P1_19 = 218,
    CFG_P1_20 = 219,
    CFG_P1_21 = 220,
    CFG_P1_22 = 221,
    CFG_P1_23 = 222,    
    CFG_P1_24 = 223,
    CFG_P1_25 = 224,
    CFG_P1_26 = 225,    
    CFG_P1_27 = 226,
    CFG_P1_28 = 227,
    CFG_P1_29 = 228,
    CFG_P1_30 = 229,
    CFG_P1_31 = 230,
    CFG_P1_32 = 231,
    CFG_P1_33 = 232,
    CFG_P1_34 = 233,
    CFG_P1_35 = 234,
    CFG_P1_36 = 235,
    CFG_P2_01 = 250,
    CFG_P2_02 = 251,
    CFG_P2_03 = 252,
    CFG_P2_04 = 253,
    CFG_P2_05 = 254,
    CFG_P2_06 = 255,
    CFG_P2_07 = 256,
    CFG_P2_08 = 257,
    CFG_P2_09 = 258,
    CFG_P2_10 = 259,
    CFG_P2_11 = 260,
    CFG_P2_12 = 261,
    CFG_P2_13 = 262,
    CFG_P2_14 = 263,
    CFG_P2_15 = 264,
    CFG_P2_16 = 265,
    CFG_P2_17 = 266,
    CFG_P2_18 = 267,
    CFG_P2_19 = 268,
    CFG_P2_20 = 269,
    CFG_P2_21 = 270,
    CFG_P2_22 = 271,
    CFG_P2_23 = 272,    
    CFG_P2_24 = 273,
    CFG_P2_25 = 274,
    CFG_P2_26 = 275,    
    CFG_P2_27 = 276,
    CFG_P2_28 = 277,
    CFG_P2_29 = 278,
    CFG_P2_30 = 279,
    CFG_P2_31 = 280,
    CFG_P2_32 = 281,
    CFG_P2_33 = 282,
    CFG_P2_34 = 283,
    CFG_P2_35 = 284,
    CFG_P2_36 = 285,
    CFG_PIN_A0 = 100,
    CFG_PIN_A1 = 101,
    CFG_PIN_A2 = 102,
    CFG_PIN_A3 = 103,
    CFG_PIN_A4 = 104,
    CFG_PIN_A5 = 105,
    CFG_PIN_A6 = 106,
    CFG_PIN_A7 = 107,
    CFG_PIN_A8 = 108,
    CFG_PIN_A9 = 109,
    CFG_PIN_A10 = 110,
    CFG_PIN_A11 = 111,
    CFG_PIN_A12 = 112,
    CFG_PIN_A13 = 113,
    CFG_PIN_A14 = 114,
    CFG_PIN_A15 = 115,
    CFG_PIN_D0 = 150,
    CFG_PIN_D1 = 151,
    CFG_PIN_D2 = 152,
    CFG_PIN_D3 = 153,
    CFG_PIN_D4 = 154,
    CFG_PIN_D5 = 155,
    CFG_PIN_D6 = 156,
    CFG_PIN_D7 = 157,
    CFG_PIN_D8 = 158,
    CFG_PIN_D9 = 159,
    CFG_PIN_D10 = 160,
    CFG_PIN_D11 = 161,
    CFG_PIN_D12 = 162,
    CFG_PIN_D13 = 163,
    CFG_PIN_D14 = 164,
    CFG_PIN_D15 = 165,
    CFG_NUM_NEOPIXELS = 200,
    CFG_NUM_DOTSTARS = 201,
    CFG_DEFAULT_BUTTON_MODE = 202,
    CFG_SWD_ENABLED = 203,
    CFG_FLASH_BYTES = 204,
    CFG_RAM_BYTES = 205,
    CFG_SYSTEM_HEAP_BYTES = 206,
    CFG_LOW_MEM_SIMULATION_KB = 207,
    // /pxtapp/hf2dbg.h
    HF2DBG_H = 1,
    // /pxtapp/mixer---none/melody.h
    SW_TRIANGLE = 1,
    SW_SAWTOOTH = 2,
    SW_SINE = 3,
    SW_NOISE = 4,
    SW_SQUARE_10 = 11,
    SW_SQUARE_50 = 15,
    // /pxtapp/pins.h
    BUTTON_ACTIVE_HIGH_PULL_DOWN = 17,
    BUTTON_ACTIVE_HIGH_PULL_UP = 33,
    BUTTON_ACTIVE_HIGH_PULL_NONE = 49,
    BUTTON_ACTIVE_LOW_PULL_DOWN = 16,
    BUTTON_ACTIVE_LOW_PULL_UP = 32,
    BUTTON_ACTIVE_LOW_PULL_NONE = 48,
    // /pxtapp/platform.h
    PAGE_SIZE = 512,
    DEV_NUM_PINS = 64,
    PXT_BOOTLOADER_CFG_MAGIC = 3191854542,
    PXT_74HC165 = 1,
    IMAGE_BITS = 4,
    PA00 = 0,
    PA01 = 1,
    PA02 = 2,
    PA03 = 3,
    PA04 = 4,
    PA05 = 5,
    PA06 = 6,
    PA07 = 7,
    PA08 = 8,
    PA09 = 9,
    PA10 = 10,
    PA11 = 11,
    PA12 = 12,
    PA13 = 13,
    PA14 = 14,
    PA15 = 15,
    PA16 = 16,
    PA17 = 17,
    PA18 = 18,
    PA19 = 19,
    PA20 = 20,
    PA21 = 21,
    PA22 = 22,
    PA23 = 23,
    PA24 = 24,
    PA25 = 25,
    PA26 = 26,
    PA27 = 27,
    PA28 = 28,
    PA29 = 29,
    PA30 = 30,
    PA31 = 31,
    PB00 = 32,
    PB01 = 33,
    PB02 = 34,
    PB03 = 35,
    PB04 = 36,
    PB05 = 37,
    PB06 = 38,
    PB07 = 39,
    PB08 = 40,
    PB09 = 41,
    PB10 = 42,
    PB11 = 43,
    PB12 = 44,
    PB13 = 45,
    PB14 = 46,
    PB15 = 47,
    PB16 = 48,
    PB17 = 49,
    PB18 = 50,
    PB19 = 51,
    PB20 = 52,
    PB21 = 53,
    PB22 = 54,
    PB23 = 55,
    PB24 = 56,
    PB25 = 57,
    PB26 = 58,
    PB27 = 59,
    PB28 = 60,
    PB29 = 61,
    PB30 = 62,
    PB31 = 63,
    // /pxtapp/pxt.h
    DEVICE_ID_BUTTON_SLIDE = 3000,
    DEVICE_ID_MICROPHONE = 3001,
    DEVICE_ID_FIRST_BUTTON = 4000,
    DEVICE_ID_FIRST_TOUCHBUTTON = 4100,
    // /pxtapp/pxtbase.h
    PXT_REFCNT_FLASH = 65534,
    VTABLE_MAGIC = 249,
    Undefined = 0,
    Boolean = 1,
    Number = 2,
    String = 3,
    Object = 4,
    Function = 5,
    BoxedString = 1,
    BoxedNumber = 2,
    BoxedBuffer = 3,
    RefAction = 4,
    RefImage = 5,
    RefCollection = 6,
    RefRefLocal = 7,
    RefMap = 8,
    User0 = 16,
    Int8LE = 1,
    UInt8LE = 2,
    Int16LE = 3,
    UInt16LE = 4,
    Int32LE = 5,
    Int8BE = 6,
    UInt8BE = 7,
    Int16BE = 8,
    UInt16BE = 9,
    Int32BE = 10,
    UInt32LE = 11,
    UInt32BE = 12,
    Float32LE = 13,
    Float64LE = 14,
    Float32BE = 15,
    Float64BE = 16,
    GC = 0,
    // /pxtapp/pxtconfig.h
    PXT_GC = 1,
    // /pxtapp/uf2hid.h
    UF2_HID_H = 1,
}

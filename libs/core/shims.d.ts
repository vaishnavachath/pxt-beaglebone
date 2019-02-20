declare namespace pins {

    /**
     * Create a new zero-initialized buffer.
     * @param size number of bytes in the buffer
     */
    //% shim=pins::createBuffer
    function createBuffer(size: int32): Buffer;    
}

declare interface AnalogInPin {
    /**
     * Read the connector value as analog, that is, as a value comprised between 0 and 1023.
     * @param name pin to write to
     */
    //% help=pins/analog-read weight=53
    //% blockId=device_get_analog_pin block="analog read|pin %name" blockGap="8"
    //% blockNamespace=pins
    //% parts="photocell" trackArgs=0
    //% name.fieldEditor="gridpicker"
    //% name.fieldOptions.width=220
    //% name.fieldOptions.columns=4
    //% promise shim=AnalogInPinMethods::analogRead
    analogRead(): int32;
}


declare interface AnalogOutPin {
    /**
     * Set the connector value as analog. Value must be comprised between 0 and 1023.
     * @param name pin name to write to
     * @param value value to write to the pin between ``0`` and ``10``. eg:1023,0
     * @param frequency value to write to the pin between ``0`` and ``10000``. eg:1023,0
     */
    //% help=pins/analog-write weight=52
    //% blockId=device_set_analog_pin block="analog write|pin %name|to %value duty| and %frequency Hz" blockGap=8
    //% blockNamespace=pins
    //% parts="analogled" trackArgs=0
    //% name.fieldEditor="gridpicker"
    //% name.fieldOptions.width=220
    //% name.fieldOptions.columns=4
    //% value.min=0 value.max=100
    //% value.defl=50
    //% frequency.min=0 frequency.max=10000 frequency.defl=2000 shim=AnalogOutPinMethods::analogWrite
    analogWrite(value: number,frequency: number): void;
}


declare interface DigitalInOutPin {
    /**
     * Read a pin or connector as either 0 or 1
     * @param name pin to read from
     */
    //% help=pins/digital-read weight=61
    //% blockId=device_get_digital_pin block="digital read|pin %name" blockGap=8
    //% parts="slideswitch" trackArgs=0
    //% blockNamespace=pins
    //% name.fieldEditor="gridpicker"
    //% name.fieldOptions.width=220
    //% name.fieldOptions.columns=4 
    //% promise shim=DigitalInOutPinMethods::digitalRead
    digitalRead(): boolean;
    
    /**
     * Set a pin or connector value to either 0 or 1.
     * @param name pin to write to
     * @param value value to set on the pin
     */
    //% help=pins/digital-write weight=60
    //% blockId=device_set_digital_pin block="digital write|pin %name|to %value=toggleHighLow"
    //% parts="led" trackArgs=0
    //% blockNamespace=pins
    //% name.fieldEditor="gridpicker"
    //% name.fieldOptions.width=220
    //% name.fieldOptions.columns=4 shim=DigitalInOutPinMethods::digitalWrite
    digitalWrite(value: boolean): void;


    /**
     * Register code to run when a pin event occurs. 
     */
    //% help=pins/on-event weight=20 blockGap=8
    //% blockId=pinsonevent block="on|pin %pin|%event"
    //% blockNamespace=pins
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=220
    //% pin.fieldOptions.columns=4
    //% deprecated=1 parts="slideswitch" trackArgs=0 shim=DigitalInOutPinMethods::onEvent
    onEvent(event: PinEvent, body: () => void): void;

    /**
     * Set the pinMode direction of this pin.
     * @param name pin to set the pin mode
     * @param pull one of the pinMode configurations: INPUT,INPUT_PULLUP,OUTPUT,ANALOG_OUTPUT
     */
    //% help=pins/set-pull weight=62 blockGap=8
    //% blockId=device_set_pull block="set |pin %pin|to %pull"
    //% blockNamespace=pins
    //% name.fieldEditor="gridpicker"
    //% name.fieldOptions.width=220
    //% name.fieldOptions.columns=4 shim=DigitalInOutPinMethods::pinMode
    pinMode(pull: PinPullMode): void;

    /**
     * Get the PinMode of a pin
     * @param name pin to get
     * @param value value to get
     */
    //% help=pins/getPinMode weight=61
    //% blockId=device_get_pinMode block="get Pinmode|pin %name| value %value" blockGap=8
    //% blockNamespace=pins
    //% name.fieldEditor="gridpicker"
    //% name.fieldOptions.width=220
    //% name.fieldOptions.columns=4
    //% promise shim=DigitalInOutPinMethods::getPinMode
    getPinMode(value: getPinModeEnums ): string;
}


declare interface PwmPin {}


declare interface PwmOnlyPin {
    /**
     * Write a value to the servo to control the rotation of the shaft. On a standard servo, this will
     * set the angle of the shaft (in degrees), moving the shaft to that orientation. On a continuous
     * rotation servo, this will set the speed of the servo (with ``0`` being full-speed in one
     * direction, ``180`` being full speed in the other, and a value near ``90`` being no movement).
     * @param name pin to write to
     * @param value angle or rotation speed
     */
    //% help=pins/servo-write weight=41 group="Servo"
    //% blockId=device_set_servo_pin block="servo write|pin %name|to %value=protractorPicker" blockGap=8
    //% parts=microservo trackArgs=0
    //% blockNamespace=pins
    //% name.fieldEditor="gridpicker"
    //% name.fieldOptions.width=220
    //% name.fieldOptions.columns=4
    //% value.defl=90 shim=PwmOnlyPinMethods::servoWrite
    servoWrite(value?: int32): void;
}
declare namespace control {

 
}
declare namespace pins {

}
// Auto-generated. Do not edit.



    //% indexerGet=BufferMethods::getByte indexerSet=BufferMethods::setByte
declare interface Buffer {
    /**
     * Write a number in specified format in the buffer.
     */
    //% shim=BufferMethods::setNumber
    setNumber(format: NumberFormat, offset: int32, value: number): void;

    /**
     * Read a number in specified format from the buffer.
     */
    //% shim=BufferMethods::getNumber
    getNumber(format: NumberFormat, offset: int32): number;

    /** Returns the length of a Buffer object. */
    //% property shim=BufferMethods::length
    length: int32;

    /**
     * Fill (a fragment) of the buffer with given value.
     */
    //% offset.defl=0 length.defl=-1 shim=BufferMethods::fill
    fill(value: int32, offset?: int32, length?: int32): void;

    /**
     * Return a copy of a fragment of a buffer.
     */
    //% offset.defl=0 length.defl=-1 shim=BufferMethods::slice
    slice(offset?: int32, length?: int32): Buffer;

    /**
     * Shift buffer left in place, with zero padding.
     * @param offset number of bytes to shift; use negative value to shift right
     * @param start start offset in buffer. Default is 0.
     * @param length number of elements in buffer. If negative, length is set as the buffer length minus
     * start. eg: -1
     */
    //% start.defl=0 length.defl=-1 shim=BufferMethods::shift
    shift(offset: int32, start?: int32, length?: int32): void;

    /**
     * Convert a buffer to string assuming UTF8 encoding
     */
    //% shim=BufferMethods::toString
    toString(): string;

    /**
     * Convert a buffer to its hexadecimal representation.
     */
    //% shim=BufferMethods::toHex
    toHex(): string;

    /**
     * Rotate buffer left in place.
     * @param offset number of bytes to shift; use negative value to shift right
     * @param start start offset in buffer. Default is 0.
     * @param length number of elements in buffer. If negative, length is set as the buffer length minus
     * start. eg: -1
     */
    //% start.defl=0 length.defl=-1 shim=BufferMethods::rotate
    rotate(offset: int32, start?: int32, length?: int32): void;

    /**
     * Write contents of `src` at `dstOffset` in current buffer.
     */
    //% shim=BufferMethods::write
    write(dstOffset: int32, src: Buffer): void;
}
declare namespace control {

    /**
     * Create a new zero-initialized buffer.
     * @param size number of bytes in the buffer
     */
    //% shim=control::createBuffer
    function createBuffer(size: int32): Buffer;

    /**
     * Create a new buffer with UTF8-encoded string
     * @param str the string to put in the buffer
     */
    //% shim=control::createBufferFromUTF8
    function createBufferFromUTF8(str: string): Buffer;
}
declare namespace loops {

    /**
     * Repeats the code forever in the background. On each iteration, allows other codes to run.
     * @param body code to execute
     */
    //% help=loops/forever weight=100 afterOnStart=true deprecated=true
    //% blockId=forever_deprecated block="forever" blockAllowMultiple=1 shim=loops::forever
    function forever(a: () => void): void;

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
     */
    //% help=loops/pause weight=99 deprecated=true
    //% async block="pause %pause=timePicker|ms"
    //% blockId=device_pause_deprecated shim=loops::pause
    function pause(ms: int32): void;
}
declare namespace textFile {

    /**
     * Derive a unique, consistent serial number of this control from internal data.
     */
    //% blockId="textFile_read" block="read Textfile %s | .txt" weight=53
    //% promise async shim=textFile::readTextfile
    function readTextfile(s: string): string;

    /**
     * Derive a unique, consistent serial number of this control from internal data.
     */
    //% blockId="textFile_write" block="write %d |to %f | .txt " weight=52 shim=textFile::writeTextfile
    function writeTextfile(f: string, d: string): void;
}
declare namespace control {

    /**
     * Gets the number of milliseconds elapsed since power on.
     */
    //% help=control/millis weight=50
    //% blockId=control_running_time block="millis (ms)" shim=control::millis
    function millis(): int32;

    /**
     * Run other code in the parallel.
     */
    //% help=control/run-in-parallel handlerStatement=1
    //% blockId="control_run_in_parallel" block="run in parallel" blockGap=8 shim=control::runInParallel
    function runInParallel(a: () => void): void;

    /**
     * Derive a unique, consistent serial number of this control from internal data.
     */
    //% blockId="control_control_serial_number" block="device serial number" weight=54
    //% help=control/control-serial-number
    //% promise shim=control::deviceSerialNumber
    function deviceSerialNumber(): int32;

    /**
     * Derive a unique, consistent serial number of this control from internal data.
     */
    //% blockId="control_control_name" block="device name" weight=55
    //% promise shim=control::deviceName
    function deviceName(): int32;

    /**
     * Derive a unique, consistent serial number of this control from internal data.
     */
    //% blockId="control_control_version" block="device version" weight=53
    //% promise shim=control::deviceVersion
    function deviceVersion(): int32;

    /**
     * Derive a unique, consistent serial number of this control from internal data.
     */
    //% blockId="control_control_bonescript" block="bonescript version" weight=52
    //% promise shim=control::deviceBonescriptVersion
    function deviceBonescriptVersion(): int32;

    /**
     *
     */
    //% shim=control::__log
    function __log(prority: int32, text: string): void;

    /**
     * Dump internal information about a value.
     */
    //% shim=control::dmesgValue
    function dmesgValue(v: any): void;

    /**
     * Force GC and dump basic information about heap.
     */
    //% shim=control::gc
    function gc(): void;

    /**
     * Return true if profiling is enabled in the current build.
     */
    //% shim=control::profilingEnabled
    function profilingEnabled(): boolean;
}

// Auto-generated. Do not edit. Really.

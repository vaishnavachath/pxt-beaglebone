#include "pxtbase.h"


namespace control {
    /**
    * Gets the number of milliseconds elapsed since power on.
    */
    //% help=control/millis weight=50
    //% blockId=control_running_time block="millis (ms)"
    int millis() {
        return current_time_ms();
    }

   
    
  

    /**
     * Run other code in the parallel.
     */
    //% help=control/run-in-parallel handlerStatement=1
    //% blockId="control_run_in_parallel" block="run in parallel" blockGap=8
    void runInParallel(Action a) {
        pxt::runInParallel(a);
    }

     /**
    * Derive a unique, consistent serial number of this control from internal data.
    */
    //% blockId="control_control_serial_number" block="device serial number" weight=54
    //% help=control/control-serial-number
    //% promise
    int deviceSerialNumber() {
        return 0;
    }

    /**
    * Derive a unique, consistent serial number of this control from internal data.
    */
    //% blockId="control_control_name" block="device name" weight=55
    //% promise
    int deviceName() {
        return 0;
    }

    /**
    * Derive a unique, consistent serial number of this control from internal data.
    */
    //% blockId="control_control_version" block="device version" weight=53
    //% promise
    int deviceVersion() {
        return 0;
    }
    
    /**
    * Derive a unique, consistent serial number of this control from internal data.
    */
    //% blockId="control_control_bonescript" block="bonescript version" weight=52
    //% promise
    int deviceBonescriptVersion() {
        return 0;
    }
    
    
    /**
    *
    */
    //%
    void __log(int prority, String text) {
        if (NULL == text) return;
        pxt::sendSerial(text->getUTF8Data(), text->getUTF8Size());
    }

    /**
     * Dump internal information about a value.
     */
    //%
    void dmesgValue(TValue v) {
        anyPrint(v);
    }

    /**
     * Force GC and dump basic information about heap.
     */
    //%
    void gc() {
        pxt::gc(1);
    }

    /**
     * Return true if profiling is enabled in the current build.
     */
    //%
    bool profilingEnabled() {
#ifdef PXT_PROFILE
        return true;
#else
        return false;
#endif
    }
}

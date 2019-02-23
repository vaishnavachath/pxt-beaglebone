# Magic Glow

Control the brightness of an LED with a light sensor.

```blocks
forever(function () {
    let brightness = pins.P9_35.analogRead();
    pins.P9_14.analogWrite(brightness,2000);
})
```

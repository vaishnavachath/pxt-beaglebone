# Blink to Light

## Introduction @unplugged

Blink an LED where the tempo is controlled by a light sensor.

![An LED blinking based on a light sensor](/static/projects/analog-io/blink-to-light/gallery.gif)

## Step 1 @fullscreen

Add the code to drives a **blinking LED** on pin **USR0**.

```blocks
forever(function () {
    pins.USR0.digitalWrite(true)
    pause(100)
    pins.USR0.digitalWrite(false)
    pause(100)
})
```

## Step 2 @fullscreen

Insert a ``||pins:analog read||`` block for **P9_35** in the first ``||loops:pause||`` block.
The ``||pins:analog read||`` returns a value between 0 (no input) to 1 (full input) which will be translated in milliseconds of pause.

```blocks
forever(function () {
    pins.USR0.digitalWrite(true)
    pause(pins.P9_35.analogRead() * 1000)
    pins.USR0.digitalWrite(false)
    pause(100)
})
```

## Step 3 @fullscreen

Look at the simulator and make sure your program works as expected. 

If you have a @boardname@, wire up the circuit and the code should work now on the connected board.

Click on the **wrench** icon under the simulator to get detailed breadboarding instructions.

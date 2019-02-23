# Switchy

## Introduction @unplugged

Attach a switch on a digital pin to turn a LED on or off.

![A simulated breadboard with a switch that controls an LED](/static/projects/digital-io/switch-led/gallery.gif)

## Step 1 @fullscreen

Add a ``||pins:digital write||`` block under the ``||loops:forever||`` to set pin **USR0** to ``LOW`` (false).

```blocks
forever(function () {
    pins.USR0.digitalWrite(false)
})
```

## Step 2 @fullscreen

Add a ``||pins:digital read||`` block in the ``LOW``/``HIGH`` slot. Change the pin to **P8_07**.

```blocks
forever(function () {
    pins.USR0.digitalWrite(pins.P8_07.digitalRead())
})
```

## Step 3 @fullscreen

Look at the simulator and test if your program works as you would expect. If you move the switch, the LED
should turn on and off.

## Step 4 @fullscreen

If you have a @boardname@, wire up the circuit and the code should work now on the connected board and click the **wrench** to get detailed breadboarding instructions.


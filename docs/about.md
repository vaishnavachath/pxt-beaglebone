# About

The **Beaglebone MakeCode editor** allows to program [various Beaglebone Boards using bonescript](/boards).

## Programming: [Blocks](/blocks) or [JavaScript](/javascript)

You can program the @boardname@ using [Blocks](/blocks) or [JavaScript](/javascript) in your web browser.

```blocks
forever(function() {
    pins.USR0.digitalWrite(true)
    pause(500)
    pins.USR0.digitalWrite(false)
    pause(500)    
})
```

```typescript
forever(function() {
    pins.USR0.digitalWrite(true)
    pause(500)
    pins.USR0.digitalWrite(false)
    pause(500)    
})
```


The editor work in [most modern browsers](/browsers), work [offline](/offline) once loaded and do not require any installation.

## Simulator: Test Your Code

You can run your code using the Beaglebone Makecode simulator, all within the confines of a web browser.

```sim
forever(function() {
    pins.USR0.digitalWrite(true)
    pause(500)
    pins.USR0.digitalWrite(false)
    pause(500)    
})
```

## Open Source

Makecode Beaglebone is open source on GitHub at https://github.com/vaishnav98/pxt-beaglebone .
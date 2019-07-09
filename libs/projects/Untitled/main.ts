forever(function () {
    pins.P2_11.digitalWrite(false)
    pause(100)
    pins.P2_11.digitalWrite(true)
    pause(100)
})

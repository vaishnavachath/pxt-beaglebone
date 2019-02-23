# Glowy

Turn on and off **gradually** an LED to create a glowing effect.

```blocks
forever(function () {
    for (let i = 0; i <= 10; i++) {
        pins.P9_14.analogWrite(i * 10,2000)
        pause(100)
    }
    for (let j = 0; j <= 10; j++) {
        pins.P9_14.analogWrite(100- j *10,2000)
        pause(100)
    }
})
```

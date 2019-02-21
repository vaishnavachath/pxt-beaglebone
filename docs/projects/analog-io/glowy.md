# Glowy

Turn on and off **gradually** an LED to create a glowing effect.

```blocks
forever(function () {
    for (let i = 0; i <= 10; i++) {
        pins.A1.analogWrite(i * 0.1,2000)
        pause(100)
    }
    for (let j = 0; j <= 10; j++) {
        pins.A1.analogWrite(1- j *0.1,2000)
        pause(100)
    }
})
```

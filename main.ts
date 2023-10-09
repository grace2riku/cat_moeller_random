radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        for (let index = 0; index < 14; index++) {
            basic.pause(5000)
            pins.digitalWritePin(DigitalPin.P14, randint(0, 1))
            pins.analogWritePin(AnalogPin.P16, randint(500, 1000))
            pins.digitalWritePin(DigitalPin.P13, randint(0, 1))
            pins.analogWritePin(AnalogPin.P15, randint(500, 1000))
            basic.pause(1500)
            pins.digitalWritePin(DigitalPin.P13, 1)
            pins.digitalWritePin(DigitalPin.P15, 1)
            pins.digitalWritePin(DigitalPin.P14, 1)
            pins.digitalWritePin(DigitalPin.P16, 1)
        }
    }
})
radio.setGroup(7)
basic.forever(function () {
	
})

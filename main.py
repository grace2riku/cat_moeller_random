def on_received_string(receivedString):
    if receivedString == "A":
        for index in range(14):
            basic.pause(5000)
            pins.digital_write_pin(DigitalPin.P14, randint(0, 1))
            pins.analog_write_pin(AnalogPin.P16, randint(500, 1000))
            pins.digital_write_pin(DigitalPin.P13, randint(0, 1))
            pins.analog_write_pin(AnalogPin.P15, randint(500, 1000))
            basic.pause(1500)
            pins.digital_write_pin(DigitalPin.P13, 1)
            pins.digital_write_pin(DigitalPin.P15, 1)
            pins.digital_write_pin(DigitalPin.P14, 1)
            pins.digital_write_pin(DigitalPin.P16, 1)
radio.on_received_string(on_received_string)

radio.set_group(7)

def on_forever():
    pass
basic.forever(on_forever)
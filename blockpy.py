import machine
import time

def test():
    pin = Pin(25, Pin.OUT)
    while True:
        pin.off()
        time.sleep(1)
        pin.on()
        time.sleep(1)

def rangeFinder(gpio, unit) {
    pin = Pin(gpio, Pin.OUT)
    pin.off()
    time.sleep_us(200)
    pin.on()
    time.sleep_us(5)
    pin.off()
    time.sleep_us(750)
    pin.mode(Pin.IN)


    t = machine.time_pulse_us(pin, 1)

    if unit == 'cm':
        return 0.0343*t/2
    elif unit == 'inches':
        return 0
    else:
        return 0
}
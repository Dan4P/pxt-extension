namespace hello {
    //%block
    export function showHi() {
        led.toggle(0, 0)
        led.toggle(0, 1)
        led.toggle(0, 2)
        led.toggle(0, 3)
        led.toggle(0, 4)
        led.toggle(1, 2)
        led.toggle(2, 4)
        led.toggle(2, 3)
        led.toggle(2, 2)
        led.toggle(4, 0)
        led.toggle(4, 2)
        led.toggle(4, 3)
        led.toggle(4, 4)



    }
}

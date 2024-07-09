input.onButtonPressed(Button.A, function () {
    if (alive == 1) {
        alive = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        alive = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (mode == 1) {
        mode = 0
        basic.showLeds(`
            . # # # .
            # . . . .
            # . . . .
            # . . . .
            . # # # .
            `)
    } else {
        mode = 1
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
    }
})
let hz = 0
let alive = 0
let mode = 0
mode = 0
alive = 1
let c_maj_pent_scale = [
41.2,
49,
55,
65.4,
73.4,
82.4,
98,
110,
130.8,
146.8,
164.8,
196,
220,
261.6,
293.7,
329.6,
392,
440,
523.3,
587.3,
659.3,
783.99,
880,
1046.5,
1174.7,
1318.5,
1568,
1760
]
let small_c_pent_scale = [
261.6,
293.7,
329.6,
392,
440,
523.3
]
basic.showLeds(`
    . # # # .
    # . . . .
    # . . . .
    # . . . .
    . # # # .
    `)
basic.forever(function () {
    if (mode == 0) {
        hz = small_c_pent_scale[Math.floor(Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1200, 0, small_c_pent_scale.length - 1))]
    } else {
        hz = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 1200, 40, 1000)
    }
    makerbit.showStringOnLcd1602("P0", makerbit.position1602(LcdPosition1602.Pos1), 2)
    makerbit.showStringOnLcd1602("" + pins.analogReadPin(AnalogPin.P0), makerbit.position1602(LcdPosition1602.Pos4), 12)
    makerbit.showStringOnLcd1602("HZ", makerbit.position1602(LcdPosition1602.Pos17), 2)
    makerbit.showStringOnLcd1602("" + hz, makerbit.position1602(LcdPosition1602.Pos20), 12)
    if (alive == 1) {
        music.ringTone(hz)
    } else {
        music.stopAllSounds()
    }
})

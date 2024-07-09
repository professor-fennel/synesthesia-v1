input.onButtonPressed(Button.A, function () {
    if (alive == 1) {
        alive = 0
    } else {
        alive = 1
    }
})
let light_level = 0
let alive = 0
alive = 1
basic.forever(function () {
    light_level = Math.map(pins.analogReadPin(AnalogPin.P0), 0, 900, 100, 700)
    makerbit.showStringOnLcd1602("P0", makerbit.position1602(LcdPosition1602.Pos1), 2)
    makerbit.showStringOnLcd1602("" + (pins.analogReadPin(AnalogPin.P0)), makerbit.position1602(LcdPosition1602.Pos4), 12)
    makerbit.showStringOnLcd1602("LL", makerbit.position1602(LcdPosition1602.Pos17), 2)
    makerbit.showStringOnLcd1602("" + (light_level), makerbit.position1602(LcdPosition1602.Pos20), 12)
    if (alive == 1) {
        music.play(music.tonePlayable(light_level, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    }
})

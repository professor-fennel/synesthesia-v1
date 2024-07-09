light_level = 0

def on_forever():
    global light_level
    light_level = pins.digital_read_pin(DigitalPin.P0)
    music.play(music.tone_playable(light_level, music.beat(BeatFraction.WHOLE)),
        music.PlaybackMode.UNTIL_DONE)
basic.forever(on_forever)

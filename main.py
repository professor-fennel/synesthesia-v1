def on_button_pressed_a():
    global alive
    if alive == 1:
        alive = 0
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
    else:
        alive = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global mode
    if mode == 1:
        mode = 0
        basic.show_leds("""
            . # # # .
            # . . . .
            # . . . .
            # . . . .
            . # # # .
            """)
    else:
        mode = 1
        basic.show_leds("""
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            """)
input.on_button_pressed(Button.B, on_button_pressed_b)

hz = 0
alive = 0
mode = 0
mode = 0
alive = 1
c_major_scale = [41.2,
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
    1760]
basic.show_leds("""
    . # # # .
    # . . . .
    # . . . .
    # . . . .
    . # # # .
    """)

def on_forever():
    global hz
    if mode == 0:
        hz = c_major_scale[Math.floor(Math.map(pins.analog_read_pin(AnalogPin.P0),
                0,
                900,
                0,
                len(c_major_scale) - 1))]
    else:
        hz = Math.map(pins.analog_read_pin(AnalogPin.P0),
            0,
            900,
            c_major_scale[0],
            c_major_scale[len(c_major_scale) - 1])
    makerbit.show_string_on_lcd1602("P0", makerbit.position1602(LcdPosition1602.POS1), 2)
    makerbit.show_string_on_lcd1602("" + str(pins.analog_read_pin(AnalogPin.P0)),
        makerbit.position1602(LcdPosition1602.POS4),
        12)
    makerbit.show_string_on_lcd1602("HZ", makerbit.position1602(LcdPosition1602.POS17), 2)
    makerbit.show_string_on_lcd1602("" + str(hz),
        makerbit.position1602(LcdPosition1602.POS20),
        12)
    if alive == 1:
        music.ring_tone(hz)
    else:
        music.stop_all_sounds()
basic.forever(on_forever)

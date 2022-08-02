let timer = 0
input.onButtonPressed(Button.A, function () {
    timer = randint(5, 15)
    basic.showIcon(IconNames.Diamond)
    music.playMelody("C D E F G A B C5 ", 120)
    music.playMelody("C5 B A G F E D C ", 120)
    music.playMelody("E B C5 A B G A F ", 120)
    music.playMelody("A F E F D G E F ", 120)
    music.playMelody("C5 A B G A F G E ", 120)
    music.playMelody("G B A G C5 B A B ", 120)
    music.playMelody("B A G A G F A C5 ", 120)
    music.playMelody("G F G A - F E D ", 120)
    music.playMelody("E D G F B A C5 B ", 120)
    music.playMelody("C5 G B A F A C5 B ", 120)
    while (0 < timer) {
        basic.pause(1000)
        timer += -1
    }
    basic.showIcon(IconNames.Ghost)
    music.playMelody("C C C C C C C C ", 120)
})

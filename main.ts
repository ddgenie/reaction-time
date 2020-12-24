let 開始時間 = 0
let 結束時間 = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.clearScreen()
    basic.pause(randint(1000, 1500))
    開始時間 = input.runningTime()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (結束時間 - 開始時間))
})
input.onButtonPressed(Button.B, function () {
    結束時間 = input.runningTime()
    basic.showString("" + (結束時間 - 開始時間))
})

function ר () {
    basic.showLeds(`
        . . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # . . .
        . # . . .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        # # # # .
        . . . # .
        . . . # .
        . . . # .
        `)
}
function נ () {
    basic.showLeds(`
        . . . . .
        # . . . .
        # . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # . . .
        . # . . .
        # # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # . .
        . . # . .
        # # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . . # .
        # # # # .
        . . . . .
        `)
}
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    ר()
    ו()
    נ()
    י()
    ת()
})
function ת () {
    basic.showLeds(`
        . . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # . . .
        . # . . .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # . .
        # . # . .
        # . # . .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # . # .
        # # . # .
        `)
}
function י () {
    basic.showLeds(`
        . . . . .
        # . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . # . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
function ו () {
    basic.showLeds(`
        . . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
}

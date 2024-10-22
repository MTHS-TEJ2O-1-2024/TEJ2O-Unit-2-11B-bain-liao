/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Bain Liao
 * Created on: Oct 2024
 * This program compares two numbers
*/

// cleanup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// variables
let randomNumberA: number = 0
let randomNumberB: number = 0
randomNumberA = randint(0, 99)
randomNumberB = randint(0, 99)

// show first number
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString('#1: ' + randomNumberA)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

// show second number
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString('#2: ' + randomNumberB)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

// compare numbers
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    if (randomNumberA < randomNumberB)
        basic.showString(randomNumberA + '<' + randomNumberB)
    else
        basic.showString(randomNumberA + '>' + randomNumberB)
    basic.clearScreen()
    basic.showIcon(IconNames.Sad)
})

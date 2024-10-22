/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Bain Liao
 * Created on: Oct 2024
 * This program generates two random numbers and compares them
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// variables
let randomNumberA: number = 0
let randomNumberB: number = 0

input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    randomNumberA = randint(0, 99)
    basic.showString("#1:" + basic.showNumber(randomNumberA))
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    randomNumberB = randint(0, 99)
    basic.showNumber(randomNumberB)
    basic.showIcon(IconNames.Happy)
})

input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()

    // if randomNumberA < randomNumberB
    if (randomNumberA < randomNumberB) {
        basic.showString(randomNumberA + "<" + randomNumberB)
    }
    else
        basic.showString(randomNumberB + "<" + randomNumberA)
})
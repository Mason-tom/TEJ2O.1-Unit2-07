/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mason
 * Created on: Jan 2026
 * This program makes a microbit version of cookie clicker
*/

let cookies = 0
let cookiesPerClick = 1

input.onButtonPressed(Button.A, function () {
    cookies = cookies + cookiesPerClick
    basic.showNumber(cookies)
})

// Reset everything when Button B is pressed
input.onButtonPressed(Button.B, function () {
    cookies = 0
    cookiesPerClick = 1
    basic.showNumber(0)
    basic.clearScreen()
})

input.onButtonPressed(Button.AB, function () {
    basic.showNumber(cookies)
})

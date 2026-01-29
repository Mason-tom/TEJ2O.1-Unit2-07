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

input.onButtonPressed(Button.B, function () {
    if (cookies >= 10) {
        cookies = cookies - 10
        cookiesPerClick = cookiesPerClick + 1
        basic.showString("UP")
    } else {
        basic.showString("NO")
    }
})

input.onButtonPressed(Button.AB, function () {
    basic.showNumber(cookies)
})

basic.showString("GO")


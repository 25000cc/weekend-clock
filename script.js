'use strict'

const timer = document.getElementById('timer')

function updateTimer() {
    let time;

    const today = new Date()
    const dayOfWeek = today.getDay()
    const dnumNow = today.getTime();

    const inputYear = today.getFullYear()
    const inputMonth = today.getMonth()
    const inputDate = today.getDate() + (7 - dayOfWeek)
    const inputHour = 0
    const inputMin = 0
    const inputSec = 0
    const targetDate = new Date(inputYear, inputMonth, inputDate, inputHour, inputMin, inputSec);
    const dnumTarget = targetDate.getTime();

    let diff2Dates = dnumTarget - dnumNow;

    const dHour = diff2Dates / (1000 * 60 * 60); // 時間
    diff2Dates = diff2Dates % (1000 * 60 * 60);
    const dMin = diff2Dates / (1000 * 60); // 分
    diff2Dates = diff2Dates % (1000 * 60);
    const dSec = diff2Dates / 1000; // 秒
    const dmSec = diff2Dates % 1000; // ミリ秒

    if (dayOfWeek === 0 || dayOfWeek === 6) {
        time = '00:00:00.000'
    } else {
        time = `${('00' + Math.floor(dHour)).slice(-2)}:${('00' + Math.floor(dMin)).slice(-2)}:${('00' + Math.floor(dSec)).slice(-2)}.${('000' + dmSec).slice(-3)}`
    }

    timer.innerHTML = time
}

setInterval(updateTimer, 10);
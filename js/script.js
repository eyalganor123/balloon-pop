/*
                     balloon-pop
*/
'use strict'
var gBalloons = [{
    bottom: 10,
    speed: 2
}, {
    bottom: 110,
    speed: 3
}, {
    bottom: 20,
    speed: 15
}, {
    bottom: 220,
    speed: 10
}]
var startFromBottom = -900;

function init() {
    var balloons = [...document.querySelectorAll(".balloon")];
    console.log(balloons);

    var goUp = setInterval(function () {
        for (var i = 0; i < balloons.length; i++) {
            var balloon = balloons[i];
            var balloonBottom = gBalloons[i].bottom;
            var speed = gBalloons[i].speed;
            gBalloons[i].speed *= 1.009;
            balloon.style.bottom = speed + balloonBottom + startFromBottom + 'px';
            startFromBottom++;
            if (startFromBottom > 1200) clearInterval(goUp);
        }
    }, 20);
}

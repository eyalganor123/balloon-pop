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
            if (startFromBottom > 1200) {
                clearInterval(goUp);
                location.reload();
            }
        }
    }, 20);

}
function pop(that, e) {
    // that.style.display = 'none';
    e.target.innerText='100 points!!';
    e.target.style='text-align:center;z-index:-1;font-size:700px;position:fixed;left:0;width:1000px;height:1000px;opacity:0;transition:all 1.3s ease';
    var popSound = new Audio('./mp3/pop.mp3');
    popSound.play();
}
function drawBall(className) {
    const result = document.getElementById('result');

    const ball = document.createElement('div');
    ball.classList.add('ball', className);
    result.appendChild(ball);
}

function reset() {
    const result = document.getElementById('result');
    const slider = document.getElementById('slider');
    result.innerText = '';
    slider.value = 0.5
    calibrate(0.5);
}

function getBall(threshold) {
    console.log(threshold);
    const n = Math.random();
    console.log(n);

    if (n > threshold) {
        drawBall('purple');
    } else {
        drawBall('orange');
    }
}

function calibrate(threshold) {
    const orange = document.getElementById('orangeBall');
    const purple = document.getElementById('purpleBall');
    orange.innerText = `${Math.round(threshold * 100)}%`;
    purple.innerText = `${Math.round((1 - threshold) * 100)}%`;
}

const slider = document.getElementById('slider');
slider.oninput = (ev) => calibrate(ev.target.value);

const button = document.getElementById('get-ball');
button.onclick = () => { 
    getBall(slider.value);
}
const resetButton = document.getElementById('reset');
resetButton.onclick = () => { reset(); }

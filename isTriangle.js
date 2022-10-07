const inputAngle = document.querySelectorAll('.input-angle');
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const output = document.querySelector('#output-box');

function calculateSumOfTriangle(angle1, angle2, angle3) {
    const sumOfTriangle = angle1 + angle2 + angle3;
    if (sumOfTriangle === 180) {
        output.innerText = "yay!! Angles form a Triangle";
    } else {
        output.innerText = "oh! Angles dont form a Triangle";
    }
}

function isTriangle() {
    const sumOfTriangle = calculateSumOfTriangle(Number(inputAngle[0].value), Number(inputAngle[1].value), Number(inputAngle[2].value));
}

isTriangleBtn.addEventListener('click', isTriangle);
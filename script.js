const matrix = document.querySelector('.matrix');
const cols = Math.floor(window.innerWidth / 20);
const yPositions = Array(cols).fill(0);

function matrixEffect() {
    matrix.innerHTML = yPositions
        .map((y, i) => {
            const text = Math.random() > 0.5 ? '1' : '0';
            const x = i * 20;
            return `<span style="position: absolute; top: ${y}px; left: ${x}px; color: limegreen;">${text}</span>`;
        })
        .join('');

    yPositions.forEach((y, i) => {
        if (y > window.innerHeight && Math.random() > 0.975) {
            yPositions[i] = 0;
        } else {
            yPositions[i] = y + 20;
        }
    });
}

setInterval(matrixEffect, 30);

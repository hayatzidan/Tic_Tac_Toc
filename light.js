const canvas = document.getElementById('CanvasSS');
const ctx = canvas.getContext('2d');
const circleRadius = 35;
const size = 40;

// Initialize circle position
let circleX = canvas.width / 2;
let circleY = canvas.height / 2;

// Function to draw the circle with a glow effect
function drawCircle(x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();  
    ctx.shadwBlur = 60;
    ctx.shadwColor = 'cyan';     
    ctx.arc(x, y, circleRadius, 0, Math.PI * 2);
    ctx.fillStyle = 'cyan';         
    ctx.fill();
}

// Update circle position based on mouse move
canvas.addEventListener('mousemove', (event) => {
    // Get mouse position relative to the canvas
    const rect = canvas.getBoundingClientRect();
    let mouseX = event.clientX - rect.left;
    let mouseY = event.clientY - rect.top;

    // Constrain circle within canvas boundaries
    mouseX = Math.max(circleRadius, Math.min(mouseX, canvas.width - circleRadius));
    mouseY = Math.max(circleRadius, Math.min(mouseY, canvas.height - circleRadius));

    // Update circle position
    circleX = mouseX;
    circleY = mouseY;

    drawCircle(circleX ,circleY);

});
drawCircle(circleX ,circleY);



let variable = true;

function coloriuug() {
    variable =! variable;
    variable ?
      document.body.style.backgroundColor = "rgb(231, 203, 227)"
    : document.body.style.backgroundColor = "green";
    
    console.log(`Variable is now: ${variable}`);
}

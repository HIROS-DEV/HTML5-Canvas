const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = 'rgba(255,0,0, .3)';
ctx.fillRect(100, 100, 100, 100);
ctx.fillStyle = 'rgba(0,0,255, .7)';
ctx.fillRect(500, 500, 100, 100);
ctx.fillStyle = 'rgba(0, 255, 0, .6)';
ctx.fillRect(400, 300, 100, 100);

// Draw Line
ctx.beginPath();
ctx.moveTo(50, 300);
ctx.lineTo(300, 100);
ctx.lineTo(400, 300);
ctx.strokeStyle = '#fa34a3';
ctx.stroke();

// Draw Arc / Draw A Circle
// ctx.beginPath();
// ctx.arc(300, 300, 50, 0, Math.PI * 2, false);
// ctx.strokeStyle = 'blue';
// ctx.stroke();

// many times circle
for (let i = 0; i < 100; i++) {
	let x = Math.random() * window.innerWidth;
	let y = Math.random() * window.innerHeight;
	ctx.beginPath();
	ctx.arc(x, y, 50, 0, Math.PI * 2, false);
    ctx.strokeStyle = 'blue';
	ctx.stroke();
}

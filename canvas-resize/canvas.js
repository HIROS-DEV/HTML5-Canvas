const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ctx.fillStyle = 'rgba(255,0,0, .3)';
// ctx.fillRect(100, 100, 100, 100);
// ctx.fillStyle = 'rgba(0,0,255, .7)';
// ctx.fillRect(500, 500, 100, 100);
// ctx.fillStyle = 'rgba(0, 255, 0, .6)';
// ctx.fillRect(400, 300, 100, 100);

// Draw Line
// ctx.beginPath();
// ctx.moveTo(50, 300);
// ctx.lineTo(300, 100);
// ctx.lineTo(400, 300);
// ctx.strokeStyle = '#fa34a3';
// ctx.stroke();

// Draw Arc / Draw A Circle
// ctx.beginPath();
// ctx.arc(300, 300, 50, 0, Math.PI * 2, false);
// ctx.strokeStyle = 'blue';
// ctx.stroke();

// many times circle
// for (let i = 0; i < 100; i++) {
// 	let x = Math.random() * window.innerWidth;
// 	let y = Math.random() * window.innerHeight;
// 	ctx.beginPath();
// 	ctx.arc(x, y, 50, 0, Math.PI * 2, false);
//     ctx.strokeStyle = 'blue';
// 	ctx.stroke();
// }

function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function () {
		ctx.beginPath();
		ctx.arc(
			this.x,
			this.y,
			this.radius,
			0,
			Math.PI * 2,
			false
		);
		ctx.strokeStyle = 'blue';
		ctx.stroke();
	};

	this.update = function () {
		if (
			this.x + this.radius > innerWidth ||
			this.x - this.radius < 0
		) {
			this.dx = -this.dx;
		}

		if (
			this.y + this.radius > innerHeight ||
			this.y - this.radius < 0
		) {
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;
		this.draw();
	};
}


let circleArray = [];

for (let i = 0; i < 100; i++) {
	let radius = 30;
	let x = Math.random() * (innerWidth - radius * 2) + radius;
	let y = Math.random() * (innerHeight - radius * 2) + radius;
	let dx = (Math.random() - 0.5);
	let dy = (Math.random() - 0.5);
	circleArray.push(new Circle(x,y,dx,dy,radius));
}

function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0, 0, innerWidth, innerHeight);

	for (let i = 0; i < circleArray.length; i++) {
		circleArray[i].update();		
	}
}

animate();

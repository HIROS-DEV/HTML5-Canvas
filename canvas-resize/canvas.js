const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillRect(100, 100, 100, 100);
ctx.fillRect(500, 500, 100, 100);
ctx.fillRect(400, 300, 100, 100);
// particle.js
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 10;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw() {
        ctx.fillStyle = "#ffff"; // Particle color
        ctx.font = `${this.size}px Arial`;
        ctx.fillText("'';", this.x, this.y);
    }
}

function createParticles(x, y) {
    for (let i = 0; i < 1; i++) {
        const particle = new Particle(x, y);
        particles.push(particle);
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animate);
}

canvas.addEventListener("mousemove", (e) => {
    createParticles(e.clientX, e.clientY);
});

animate();

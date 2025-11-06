
// Fireworks animation adapted simple canvas fireworks
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

class Firework {
    constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height;
        this.targetX = Math.random() * canvas.width;
        this.targetY = Math.random() * canvas.height * 0.5;
        this.particles = [];
        this.exploded = false;
    }

    update() {
        if (!this.exploded) {
            let dx = this.targetX - this.x;
            let dy = this.targetY - this.y;
            this.x += dx * 0.05;
            this.y += dy * 0.05;

            if (Math.abs(dx) < 5 && Math.abs(dy) < 5) {
                this.explode();
            }
        }
    }

    explode() {
        this.exploded = true;
        for (let i = 0; i < 40; i++) {
            this.particles.push(new Particle(this.x, this.y));
        }
    }

    draw() {
        if (!this.exploded) {
            ctx.fillStyle = "white";
            ctx.fillRect(this.x, this.y, 3, 3);
        } else {
            this.particles.forEach(p => p.update());
            this.particles.forEach(p => p.draw());
        }
    }
}

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = Math.random() * 5 + 2;
        this.angle = Math.random() * Math.PI * 2;
        this.alpha = 1;
    }

    update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.alpha -= 0.02;
    }

    draw() {
        ctx.fillStyle = `rgba(0, 200, 255, ${this.alpha})`;
        ctx.fillRect(this.x, this.y, 3, 3);
    }
}

function loop() {
    ctx.fillStyle = "rgba(0,0,0,0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (fireworks.length < 10) {
        fireworks.push(new Firework());
    }

    fireworks.forEach(f => {
        f.update();
        f.draw();
    });

    requestAnimationFrame(loop);
}

loop();

// Sequence timing
setTimeout(() => {
    document.getElementById("logoContainer").style.opacity = 1;
}, 3500);

setTimeout(() => {
    document.getElementById("comingSoon").style.opacity = 1;
}, 6000);

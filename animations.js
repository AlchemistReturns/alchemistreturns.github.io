
document.addEventListener('DOMContentLoaded', () => {
    // 1. Mouse Trail Effect
    const trailContainer = document.createElement('div');
    trailContainer.style.position = 'fixed';
    trailContainer.style.top = '0';
    trailContainer.style.left = '0';
    trailContainer.style.width = '100%';
    trailContainer.style.height = '100%';
    trailContainer.style.pointerEvents = 'none';
    trailContainer.style.zIndex = '9999';
    document.body.appendChild(trailContainer);

    const particles = [];
    const maxParticles = 20;

    document.addEventListener('mousemove', (e) => {
        createParticle(e.clientX, e.clientY);
    });

    function createParticle(x, y) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.background = `hsla(${Math.random() * 60 + 260}, 100%, 70%, 1)`; // Purple/Pink range
        particle.style.borderRadius = '50%';
        particle.style.transform = 'translate(-50%, -50%)';
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.transition = 'opacity 1s ease, transform 1s ease';

        trailContainer.appendChild(particle);
        particles.push({ element: particle, created: Date.now() });

        // Cleanup older particles
        if (particles.length > maxParticles) {
            const old = particles.shift();
            old.element.style.opacity = '0';
            setTimeout(() => old.element.remove(), 1000);
        }

        // Auto fade out
        setTimeout(() => {
            particle.style.opacity = '0';
            particle.style.transform = 'translate(-50%, -50%) scale(0.2)';
            setTimeout(() => particle.remove(), 1000);
        }, 100);
    }

    // 2. 3D Card Tilt Effect
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg tilt
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    // 3. Magnetic Buttons (Subtle pull)
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
});

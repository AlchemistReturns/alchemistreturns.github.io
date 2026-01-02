document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card, .skill-card, .timeline-item');

    cards.forEach(card => {
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
    });

    function handleMouseMove(e) {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max rotation deg
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

        // Add shine effect
        updateShine(card, x, y);
    }

    function handleMouseLeave(e) {
        const card = e.currentTarget;
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';

        const shine = card.querySelector('.shine');
        if (shine) {
            shine.style.opacity = '0';
        }
    }

    function updateShine(card, x, y) {
        let shine = card.querySelector('.shine');
        if (!shine) {
            shine = document.createElement('div');
            shine.classList.add('shine');
            // Shine styles injected here or in CSS. Let's do inline for simplicity or check CSS.
            // Using inline for dynamic background pos mostly needed, but base styles better in CSS.
            // For now, minimal inline styles to ensure it works.
            Object.assign(shine.style, {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 80%)',
                opacity: '0',
                pointerEvents: 'none',
                zIndex: '10',
                mixBlendMode: 'overlay',
                transition: 'opacity 0.4s ease' // smooth out fade in
            });
            card.appendChild(shine);
        }

        // We need to move the gradient center to mouse pos
        shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`;
        shine.style.opacity = '1';
    }
});

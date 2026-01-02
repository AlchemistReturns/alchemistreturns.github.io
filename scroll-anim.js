// scroll-anim.js
document.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // 1. Parallax Blobs
    const blobs = document.querySelectorAll('.blob');
    blobs.forEach((blob, index) => {
        const speed = (index + 1) * 0.1;
        blob.style.transform = `translateY(${scrollY * speed}px)`;
    });

    // 2. Safe Color Shift (Interpolating RGB)
    // We will shift the --accent-primary color slightly as we scroll.
    // Start: Indigo (#6366f1) -> RGB(99, 102, 241)
    // End:   Sky    (#0ea5e9) -> RGB(14, 165, 233)

    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;
    const scrollPercent = Math.min(scrollY / (documentHeight - windowHeight), 1);

    // Interpolate
    const r = Math.round(99 + (14 - 99) * scrollPercent);
    const g = Math.round(102 + (165 - 102) * scrollPercent);
    const b = Math.round(241 + (233 - 241) * scrollPercent);

    const newColor = `rgb(${r}, ${g}, ${b})`;

    // Update CSS Variable
    document.documentElement.style.setProperty('--accent-primary', newColor);

    // Also update the gradient to match
    // Secondary: Violet (#8b5cf6) -> RGB(139, 92, 246)
    // Let's shift it to something complementary
    // End Secondary: Blue (#3b82f6) -> RGB(59, 130, 246)

    const r2 = Math.round(139 + (59 - 139) * scrollPercent);
    const g2 = Math.round(92 + (130 - 92) * scrollPercent);
    const b2 = Math.round(246 + (246 - 246) * scrollPercent);

    const newSecondary = `rgb(${r2}, ${g2}, ${b2})`;
    document.documentElement.style.setProperty('--accent-secondary', newSecondary);
});

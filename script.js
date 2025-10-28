const cursor = document.querySelector('.custom-cursor');
const clickableElements = document.querySelectorAll('a, .case-study-card, .cta-button');

// 1. Mouse Movement: Make the cursor follow the mouse
document.addEventListener('mousemove', e => {
    // Set the custom cursor's position based on mouse coordinates
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// 2. Interaction: Add active class on hover
clickableElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
    });
    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
    });
});
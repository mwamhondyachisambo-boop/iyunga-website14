document.addEventListener('DOMContentLoaded', () => {
    
    // 1. INTERACTIVE COUNTER MECHANISM
    // Targets the '.counter' container from your CSS
    const counterElement = document.querySelector('.counter');
    
    if (counterElement) {
        // Initialize a simple dynamic counter
        let count = 0;
        
        // Structure the inner HTML cleanly
        counterElement.innerHTML = `
            <div style="font-size: 2rem; margin-bottom: 10px;">${count}</div>
            <button class="btn-increment" style="padding: 10px 20px; font-size: 1rem; cursor: pointer;">Click Me</button>
        `;
        
        const display = counterElement.querySelector('div');
        const button = counterElement.querySelector('.btn-increment');
        
        button.addEventListener('click', () => {
            count++;
            display.textContent = count;
        });
    }

    // 2. SMOOTH SCROLLING FOR NAVIGATION
    // Targets 'nav a' links from your CSS to smoothly jump to sections like #about or #contact
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Only intercept if it's an internal anchor link
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

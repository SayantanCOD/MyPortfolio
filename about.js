// Type headre2

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer','BCA Student','Web Designer','Backend Developer'], // Corrected to 'strings'
    typeSpeed: 70,  // Corrected from 'typed' to 'typeSpeed'
    backSpeed: 70,
    backDelay: 1000,
    loop: true
});

// Initialize ScrollReveal
    const sr = ScrollReveal();

    // Apply ScrollReveal to specific elements with different animations
    sr.reveal('.reveal-left', {
        duration: 1000, // Animation duration in milliseconds
        origin: 'left', // Animation direction
        distance: '50px', // Distance to move element
        easing: 'ease-in-out' // Animation easing function
    });

    sr.reveal('.reveal-bottom', {
        duration: 1000, // Animation duration in milliseconds
        origin: 'bottom', // Animation direction
        distance: '50px', // Distance to move element
        easing: 'ease-in-out' // Animation easing function
    });



    function toggleNav() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    }

    // Add 'active' class to the clicked link and remove it from others
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (event) => {
            // Remove 'active' class from all links
            document.querySelectorAll('.nav-links a').forEach(item => item.classList.remove('active'));
            // Add 'active' class to the clicked link
            event.target.classList.add('active');

            // Close the nav menu
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.remove('active');
        });
    });

    // Close the nav when clicking outside
    document.addEventListener('click', (event) => {
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger');
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
    
            // Check if the current scroll position is within the section
            if (pageYOffset >= sectionTop - 300 && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
    
        // Update the active class on navigation links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
    // document.addEventListener("DOMContentLoaded", () => {
    //     const sections = document.querySelectorAll("section[id]");
    //     const navLinks = document.querySelectorAll(".nav-links a");
    
    //     // IntersectionObserver to detect visible sections
    //     const observer = new IntersectionObserver(
    //         (entries) => {
                
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting) {
    //                     // Remove 'active' class from all links
    //                     navLinks.forEach((link) => link.classList.remove("active"));
    
    //                     // Add 'active' class to the link corresponding to the visible section
    //                     const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
    //                     if (activeLink) {
    //                         activeLink.classList.add("active");
    //                     }
    //                 }
    //             });
    //         },
    //         {
    //             root: null, // Use the viewport as the root
    //             threshold: 0.1, // Trigger when 50% of the section is visible
    //         }
    //     );
    
    //     // Observe each section
    //     sections.forEach((section) => observer.observe(section));
    // });
// Wait for the DOM to fully load before running scripts
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Gallery Toggle Logic ---
    const galleryBtn = document.getElementById('view-gallery-btn');
    const galleryDiv = document.getElementById('gallery-content');

    if (galleryBtn && galleryDiv) {
        galleryBtn.addEventListener('click', () => {
            // Check if gallery is currently hidden
            if (galleryDiv.style.display === "grid") {
                galleryDiv.style.display = "none";
                galleryBtn.textContent = "Show Gallery";
            } else {
                galleryDiv.style.display = "grid";
                galleryBtn.textContent = "Hide Gallery";
            }
        });
    }

    // --- 2. Smooth Scrolling for Navbar ---
    const navLinks = document.querySelectorAll('.navbar a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- 3. Optional: Active Link Highlighter ---
    // Highlights the navbar link as you scroll through sections
    window.addEventListener('scroll', () => {
        let current = "";
        const sections = document.querySelectorAll('section, aside');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
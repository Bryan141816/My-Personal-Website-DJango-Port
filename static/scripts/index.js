document.addEventListener('DOMContentLoaded', function() {
    const navToggleBtn = document.getElementById('nav-toggle-btn');
    const navbarLinks = document.querySelectorAll('.navlink');
    const navLinkContainer = document.getElementById('nav-link-container');

    navToggleBtn.addEventListener('click', function() {
        if (window.getComputedStyle(navLinkContainer).display === 'none') {
            // Open the menu
            navLinkContainer.style.display = 'flex';
            navToggleBtn.textContent = '✕'; // Change to close icon
            // Disable scrolling
            document.body.style.overflow = 'hidden';
        } else {
            // Close the menu
            navLinkContainer.style.display = 'none';
            navToggleBtn.textContent = '☰'; // Change to menu icon
            // Enable scrolling
            document.body.style.overflow = 'auto';
        }
        navbarLinks.forEach(link => {
            // Delay adding the class by 50 milliseconds
            setTimeout(() => {
                link.classList.toggle('navvisible');
            }, 100);
        });
    });
    if((window.innerWidth <=763)){
        setTimeout(() => {
            const Boxes = document.querySelectorAll(".factBox");
            const Image = document.getElementById("mainImage");
            Image.classList.add("imageVisible");
            Boxes.forEach(Box => {
                Box.classList.add("visible");
            });
        }, 100); 
    }
});




window.addEventListener('scroll', function() {
    let navbarToggle = document.getElementById('navbar-toggle');
    
    // Check if navbar-toggle is hidden
    if (window.getComputedStyle(navbarToggle).getPropertyValue('display') === 'none') {
        let mainImage = document.getElementById('mainImage');
        let factBoxes = document.querySelectorAll('.factBox');
        let scrollTop = window.scrollY;

        // Main image scaling effect
        let maxScale = 1; // Maximum scale
        let minScale = 0.94; // Minimum scale
        let startScroll = 0; // Pixels to scroll before starting the effect
        let maxScroll = 100; // Pixels to scroll before reaching maximum scale

        if (scrollTop > startScroll) {
            let scale = 1 - Math.min((scrollTop - startScroll) / maxScroll, 1) * (1 - minScale);
            mainImage.style.transform = 'scale(' + scale + ')';
            mainImage.style.borderRadius = 500 * (1 - scale) + 'px';
        } else {
            mainImage.style.transform = 'scale(1)';
            mainImage.style.borderRadius = '0';
        }

        // Fade and slide-in effect for factBox elements
        let delay = 0;
        let previousRight = 0;
        factBoxes.forEach(function(factBox, index) {
            if (isElementInViewport(factBox) && factBox.getBoundingClientRect().left >= previousRight) {
                setTimeout(function() {
                    factBox.classList.add('visible');
                }, delay);
                delay += 100; // Adjust the delay here (100ms for each box)
                previousRight = factBox.getBoundingClientRect().right;
            }
        });
    }
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const halfHeight = rect.height / 2; // Half the height of the element
    return (
        rect.top >= -halfHeight &&
        rect.bottom <= windowHeight + halfHeight + 100
    );
}

$(document).ready(function() {
    const navToggleBtn = $('#nav-toggle-btn');
    const navbarLinks = $('.navlink');
    const navLinkContainer = $('#nav-link-container');

    navToggleBtn.click(function() {
        if (navLinkContainer.css('display') === 'none') {
            // Open the menu
            navLinkContainer.css('display', 'flex');
            navToggleBtn.text('✕'); // Change to close icon
            // Disable scrolling
            $('body').css('overflow', 'hidden');
        } else {
            // Close the menu
            navLinkContainer.css('display', 'none');
            navToggleBtn.text('☰'); // Change to menu icon
            // Enable scrolling
            $('body').css('overflow', 'auto');
        }
        navbarLinks.each(function(index, link) {
            // Delay adding the class by 50 milliseconds
            setTimeout(function() {
                $(link).toggleClass('navvisible');
            }, 100);
        });
    });
});

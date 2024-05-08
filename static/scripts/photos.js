$(document).ready(function() {
    const navToggleBtn = $('#nav-toggle-btn');
    const navbarLinks = $('.navlink');
    const navLinkContainer = $('#nav-link-container');
    const items = $('.imageBox');

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
    
    items.mouseover(function() {
        items.not($(this)).addClass('dimmed');
        $(this).removeClass('dimmed');
    });

    items.mouseout(function() {
        items.removeClass('dimmed');
    });

    setTimeout(function() {
        $(".imageBox").addClass("visible");
        $("#mainText").addClass("textVisible");
    }, 200); // Adjust the delay time (in milliseconds) as needed

    const modalContainer = $('#modalContainer');
    const fullScreenImage = $('#fullScreenImage');
    const prevBtn = $('#prevBtn');
    const nextBtn = $('#nextBtn');
    const images = $('.imageBox');

    images.click(function() {
        const imageUrl = $(this).css('background-image').replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
        fullScreenImage.attr('src', imageUrl);
        modalContainer.show();
        $('body').addClass('modal-open'); // Add a class to disable scrolling
    });

    $('.closeBtn').click(function() {
        modalContainer.hide();
        $('body').removeClass('modal-open'); // Remove the class to enable scrolling
    });

    prevBtn.click(function() {
        const currentImage = fullScreenImage.attr('src');
        const index = images.filter(function() {
            return $(this).css('background-image').replace(/url\(['"]?(.*?)['"]?\)/i, '$1') === currentImage;
        }).index();
        const prevIndex = (index - 1 + images.length) % images.length;
        const prevImage = images.eq(prevIndex).css('background-image').replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
        fullScreenImage.attr('src', prevImage);
    });

    nextBtn.click(function() {
        const currentImage = fullScreenImage.attr('src');
        const index = images.filter(function() {
            return $(this).css('background-image').replace(/url\(['"]?(.*?)['"]?\)/i, '$1') === currentImage;
        }).index();
        const nextIndex = (index + 1) % images.length;
        const nextImage = images.eq(nextIndex).css('background-image').replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
        fullScreenImage.attr('src', nextImage);
    });
});

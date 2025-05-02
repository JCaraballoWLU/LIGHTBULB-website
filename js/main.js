$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });
    
    // Animate team cards on scroll
    $(window).scroll(function() {
        $('.team-card').each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200) {
                $(this).addClass('animated');
            }
        });
    });
    
    // Navbar background change on scroll
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').css('background-color', 'rgba(0, 20, 27, 0.9)');
        } else {
            $('.navbar').css('background-color', 'transparent');
        }
    });

    // Image loading error handling
    $('img').on('error', function() {
        console.log('Image failed to load: ' + $(this).attr('src'));
        $(this).attr('src', 'images/placeholder.jpg');
    });
});
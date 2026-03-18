$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function() {
          const header = $('header');
          let activeSectionIndex = 0;
          const scrollPosition = $(window).scrollTop() - header.outerHeight();

          if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
            } else {
                if (scrollPosition <= 0) {
    header.css({
        'box-shadow': 'none',
        'backdrop-filter': 'none',
        'background-color': 'transparent'
    });
} else {
    header.css({
        'box-shadow': '0 4px 12px rgba(0,0,0,0.1)',
        'backdrop-filter': 'blur(10px)',
        'background-color': 'rgba(255,255,255,0.8)'
    });
}
            }

          sections.each(function(i) {
               const section = $(this);
               const sectionTop = section.offset().top - 96;
               const sectionBottom = sectionTop + section.outerHeight();

               if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                   activeSectionIndex = i;
                   return false;
               }
           })

           navItems.removeClass('active');
           $(navItems[activeSectionIndex]).addClass('active');
       });

       ScrollReveal().reveal('#cta', {
         origin: 'left',
         duration: 1200,
         distance: '50px',
         easing: 'ease-in-out'
       });

        ScrollReveal().reveal('.dish', {
         origin: 'left',
         duration: 2000,
         distance: '20%',
       })

        ScrollReveal().reveal('#testimonial_chef, #feedback', {
         origin: 'bottom',
         duration: 1200,
         distance: '40px',
         interval: 200,
        });

       $('#mobile_btn').on('click', function() {
    $('#mobile_menu').toggleClass('active');
    $('#mobile_btn').toggleClass('open');
    });
    
    $('.fa-facebook, .fa-whatsapp').on('click', function(e) {
        e.preventDefault();
        $('#memePopup').fadeIn();
    });

    $('#memePopup').on('click', function() {
        $(this).fadeOut();
    });

    $('.social-link').on('click', function(e) {
    e.preventDefault();

    const link = $(this).attr('href');

    $('#loadingScreen').addClass('active');

    setTimeout(() => {
        if (link && link !== '#') {
            window.open(link, '_blank');
        } else {
            // abre o meme popup
            $('#loadingScreen').removeClass('active');
            $('#memePopup').fadeIn();
            }
        }, 1200);
    });
});

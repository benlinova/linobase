(function ($, Drupal) {
    Drupal.behaviors.linoBehaviors = {
        attach: function (context, settings) {
            $('main', context).once('linoBehaviors');

            var mySwiper = new Swiper('.swiper-container', {
//                // Optional parameters
//                direction: 'horizontal',
                loop: true,

                // If we need pagination
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,

                },

                // Navigation arrows
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                effect: 'fade',
            });


            // jQuery
            $('.grid').masonry({
//                columnWidth: 200,
                itemSelector: '.grid-item'
            });
            
            const lightbox = GLightbox({
                touchNavigation: true,
                loop: true,
                autoplayVideos: true
            });
            
        }//fin behaviors

    };

})(jQuery, Drupal);

  
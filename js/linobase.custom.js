(function ($, Drupal) {
    Drupal.behaviors.linoBehaviors = {
        attach: function (context, settings) {
            $('main', context).once('linoBehaviors');
                  var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

            // jQuery
            $('.masonry-grid').masonry({
//                columnWidth: 200,
                itemSelector: '.grid-item',
                gutter: '.gutter-sizer',
                fitWidth: true
            });
            

            
        }//fin behaviors

    };

})(jQuery, Drupal);

  
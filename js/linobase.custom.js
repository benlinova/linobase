Drupal.behaviors.initJSLinobase = {
  attach: function (context, settings) {
    // Use context to filter the DOM to only the elements of interest,
    // and use once() to guarantee that our callback function processes
    // any given element one time at most, regardless of how many times
    // the behaviour itself is called (it is not sufficient in general
    // to assume an element will only ever appear in a single context).
    once("initJSLinobase", "html").forEach(function (element) {
        swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        autoplay: {
          delay: 25000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

      })
      //*** parralax */
      gsap.utils.toArray(".parallax").forEach((section, i) => {
        
        section.bg = section.querySelector(".paragraph--type--section");

        // Give the backgrounds some random images
        //section.bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;

        // Do the parallax effect on each section
        if (i>=0) {
          console.log(i);
          

          gsap.to(section.bg, {
            backgroundPosition: `50% 100%`,
            ease: "none",

            scrollTrigger: {
              trigger: section,
              scrub: true,
              markers: true,
            },
          });
        }
      });
    });
  },
};

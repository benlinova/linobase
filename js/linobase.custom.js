Drupal.behaviors.initJSLinobase = {
  attach: function (context, settings) {
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
      });
      //*** parralax */
      gsap.utils.toArray(".parallax").forEach((section, i) => {
        section.bg = section.querySelector(".paragraph--type--section");

        // Give the backgrounds some random images
        //section.bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;

        // Do the parallax effect on each section
        if (i >= 0) {
          console.log(i);

          gsap.to(section.bg, {
            backgroundPosition: `50% 100%`,
            ease: "none",

            scrollTrigger: {
              trigger: section,
              scrub: true,
              //markers: true,
            },
          });
        }
      });

      gsap.utils.toArray(".gsFade").forEach((fade, i) => {
        gsap.set(fade, {
          opacity: 0,
          y: +300,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: fade,
            start: "20% bottom",

            scrub: false,
            markers: true,
            toggleActions: "play none none none",
          },
        });
        var duration = (Math.random() * 5 + 5) / 10;
        tl.to(fade, { opacity: 1, y: 0, duration: duration });

        //   tl.to(".fade", { opacity: 1, y: 0, duration: 0.5 });
      });

      gsap.utils.toArray(".gsFadeFromLeft").forEach((fade, i) => {
        gsap.set(fade, {
          opacity: 0,
          y: +300,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: fade,
            start: "20% bottom",

            scrub: false,
            markers: true,
            toggleActions: "play reverse play reverse",
          },
        });
        var duration = 0.5;
        tl.to(fade, { opacity: 1, y: 0, duration: duration });

        //   tl.to(".fade", { opacity: 1, y: 0, duration: 0.5 });
      });
      // Gestion des fadein avec gsap
      //   gsap.set(".fade", {
      //     opacity: 0,
      //     y: +300,
      //   });
      //   const tl = gsap.timeline({
      //     scrollTrigger: {
      //       trigger: ".fade",
      //       start: "center bottom",

      //       scrub: false,
      //       markers: true,
      //       toggleActions: "play reverse play reverse",
      //     },
      //   });

      //   tl.to(".fade", { opacity: 1, y: 0, duration: 0.5 });


      const tooltipTriggerList = document.querySelectorAll(
        '[data-bs-toggle="tooltip"]'
      );
      const tooltipList = [...tooltipTriggerList].map(
        (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
      );
    // FIN DE LINSTANCIATION POUR DRUPAL
    });
  },
};

// Initialize AlpineJS
document.addEventListener('alpine:init', () => {

});



window.addEventListener('load', (event) => {
  gsap.to('.gsap-hero-map', {
    // scrollTrigger: {
    //   trigger: 'body',
    //   start: '0',
    //   end: '400px',
    //   // markers: true,
    //   scrub: true,
    //   once: true
    // },
    y: 2200,
    ease: 'none',
    duration: 120,
    repeat: -1,
  });
  // console.log('page is fully loaded');
});


document.addEventListener(
  'DOMContentLoaded',
  function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.gsap-glow', {
      keyframes: {
        y: [0, '-10%', 0],
        scale: [1, 1.1, 1]
      },
      // ease: 'sine.inOut',
      ease: 'linear',
      duration: 3,
      stagger: 1,
      repeat: -1,
    });

    // gsap.to('.gsap-glowfly-outer', {
    //   keyframes: {
    //     x: [0, '-25%', '25%', 0],
    //     scale: [1, 0.7, 1.4, 1]
    //   },
    //   yoyoEase: true,
    //   ease: 'sine.inOut',
    //   duration: 20,
    //   repeat: -1,
    // });

    // gsap.to('.gsap-glowfly-outer', {
    //   keyframes: {
    //     y: [0, '-15%', '15%', 0],
    //   },
    //   yoyoEase: true,
    //   ease: 'sine.inOut',
    //   duration: 12,
    //   repeat: -1,
    // });

    // gsap.to('.gsap-glowfly-outer', {
    //   keyframes: {
    //     rotation: [0, -360],
    //   },
    //   ease: 'linear',
    //   duration: 10,
    //   yoyoEase: true,
    //   repeat: -1,
    // });

    // gsap.to('.gsap-glowfly-inner-1', {
    //   keyframes: {
    //     rotation: [0, 360],
    //   },
    //   yoyoEase: true,
    //   ease: 'sine.inOut',
    //   duration: 24,
    //   repeat: -1,
    // });

    // gsap.to('.gsap-glowfly-inner-2', {
    //   keyframes: {
    //     x: [0, '-15%', '15%', 0],
    //     // scale: [1, 0.6, 1.2, 1]
    //   },
    //   yoyoEase: true,
    //   ease: 'sine.inOut',
    //   duration: 24,
    //   repeat: -1,
    // });

    // gsap.to('.gsap-glowfly-inner-2', {
    //   keyframes: {
    //     y: [0, '-15%', '15%', 0],
    //   },
    //   yoyoEase: true,
    //   ease: 'sine.inOut',
    //   duration: 12,
    //   repeat: -1,
    // });

    // gsap.to('.gsap-glowfly-inner-2', {
    //   keyframes: {
    //     rotation: [0, 360],
    //   },
    //   yoyoEase: true,
    //   ease: 'sine.inOut',
    //   duration: 24,
    //   repeat: -1,
    // });

    barba.init({
      transitions: [
        {
          name: 'opacity-transition',
          leave(data) {
            return gsap.to(data.current.container, {
              opacity: 0,
            });
          },
          enter(data) {
            return gsap.from(data.next.container, {
              opacity: 0,
            });
          },
        },
      ],
    });
  },
  false
);


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


    gsap.to('.gsap-glowfly-outer', {
      keyframes: {
        x: [0, '-25%', '25%', 0],
      },
      yoyoEase: true,
      ease: 'sine.inOut',
      duration: 24,
      repeat: -1,
    });

    gsap.to('.gsap-glowfly-outer', {
      keyframes: {
        y: [0, '-15%', '15%', 0],
      },
      yoyoEase: true,
      ease: 'sine.inOut',
      duration: 12,
      repeat: -1,
    });

    gsap.to('.gsap-glowfly-outer', {
      keyframes: {
        rotation: [0, 360],
      },
      ease: 'linear',
      duration: 12,
      yoyoEase: true,
      repeat: -1,
    });


    gsap.to('.gsap-glowfly-inner', {
      keyframes: {
        x: [0, '-15%', '15%', 0],
      },
      yoyoEase: true,
      ease: 'sine.inOut',
      duration: 24,
      repeat: -1,
    });

    gsap.to('.gsap-glowfly-inner', {
      keyframes: {
        y: [0, '-15%', '15%', 0],
      },
      yoyoEase: true,
      ease: 'sine.inOut',
      duration: 12,
      repeat: -1,
    });

    gsap.to('.gsap-glowfly-inner', {
      keyframes: {
        rotation: [0, 360],
      },
      yoyoEase: true,
      ease: 'sine.inOut',
      duration: 12,
      repeat: -1,
    });
    

    // gsap.to('.gsap-glowfly-3', {
    //   keyframes: {
    //     y: [0, '-10%', '10%', 0],
    //   },
    //   ease: 'power1.inOut',
    //   duration: 1,
    //   repeat: -1,
    // });
    
    // gsap.to('.gsap-glowfly-4', {
    //   keyframes: {
    //     y: [0, '-10%', '10%', 0],
    //   },
    //   ease: 'power1.inOut',
    //   duration: 1,
    //   repeat: -1,
    // });








    // then we can control the whole thing easily...
    // tl.pause();
    // tl.resume();
    // tl.seek(1.5);
    // tl.reverse();



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


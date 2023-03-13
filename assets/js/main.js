// Initialize AlpineJS
document.addEventListener('alpine:init', () => {
  Alpine.data('main', () => ({
    gridCols: 2,
    darkMode: false,
    filterID: 'all',

    toggleDarkMode() {
      if (this.darkMode == false) {
        document.querySelector('html').classList.toggle('dark');
        document.querySelector('html').classList.remove('bg-[#EDEDED]');
        document.querySelector('html').classList.add('bg-black');
        this.darkMode = !this.darkMode;
      } else {
        document.querySelector('html').classList.toggle('dark');
        document.querySelector('html').classList.remove('bg-black');
        document.querySelector('html').classList.add('bg-[#EDEDED]');
        this.darkMode = !this.darkMode;
      }
    },
    filterWork() {
      console.log(this.searchTerm);
      let searchTerm = this.searchTerm.toLowerCase();
      let icons = document.querySelectorAll('.grid-icon');
      console.log(icons.length);
      for (let i = 0; i < icons.length; i++) {
        let searchContent = icons[i]
          .getAttribute('data-keywords')
          .toLowerCase();
        console.log(searchContent);
        icons[i].style.display = searchContent.includes(searchTerm)
          ? 'flex'
          : 'none';
        console.log('hello');
      }
    },
  }));
});


document.addEventListener(
  'DOMContentLoaded',
  function () {
    gsap.registerPlugin(ScrollTrigger);

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

    // var grid = document.querySelector('.js-grid');
    // var iso = new Isotope(grid);

    gsap.to('.gsap-content', {
      opacity: 1,
      duration: 3,
      ease: 'expo.out',
    });

    gsap.from('.gsap-hero', {
      height: '100svh',
      duration: 2,
      ease: 'expo.inOut',
      delay: .2,
    });

    gsap.from('.gsap-header', {
      y: -100,
      opacity: 0,
      duration: 2,
      ease: 'expo.inOut',
      delay: .4
    });

    gsap.from('.gsap-footer', {
      y: 100,
      opacity: 0,
      duration: 2,
      ease: 'expo.inOut',
      delay: .4,
    });

    let scrollX = 0;
    let scrollY = 0;

    barba.init({
      views: [
        {
          namespace: 'home',
          afterEnter() {
            // refresh the parallax based on new page content
            gsap.to('.gsap-circle', {
              scrollTrigger: {
                trigger: 'body',
                // markers: true,
                start: 'top top',
                end: '+=800',
                scrub: true,
              },
              y: -200,
            });
          },
        },
        {
          namespace: 'work',
          afterEnter() {
            // refresh the parallax based on new page content
            gsap.to('.gsap-circle', {
              scrollTrigger: {
                trigger: 'body',
                markers: false,
                start: 0,
                scrub: true,
              },
              y: -300,
            });
          },
        },
      ],
      transitions: [
        {
          to: { namespace: ['home'] },
          leave(data) {
            let fadeOutContent = gsap.to('.gsap-content', {
              opacity: 0,
              duration: 0.4,
              ease: 'expo.inOut',
            });

            let footer = gsap.to('.gsap-footer', {
              y: 100,
              duration: 0.4,
              ease: 'expo.inOut',
            });
            return fadeOutContent, footer;
          },
          beforeEnter(data) {
            // then later in the code...
            window.scrollTo(scrollX, scrollY);
          },
          after(data) {
            let fadeInContent = gsap.to('.gsap-content', {
              opacity: 1,
              duration: 1,
              ease: 'expo.out',
            });

            let slideInFooter = gsap.from('.gsap-footer', {
              y: 100,
              duration: 0.4,
              ease: 'expo.out',
              delay: 0,
              onComplete() {
                let element = document.querySelector('.gsap-hero');
                element.style.removeProperty('height');
                // element.classList.remove('h-screen', 'overflow-hidden');
              },
            });

            return fadeInContent, slideInFooter;
          },
        },
        {
          to: { namespace: ['work'] },
          beforeLeave(data) {
            scrollX = barba.history.current.scroll.x;
            scrollY = barba.history.current.scroll.y;
            console.log(scrollY);
          },
          leave(data) {
            let fadeOutContent = gsap.to('.gsap-content', {
              opacity: 0,
              duration: 0.4,
              ease: 'expo.inOut',
            });

            let footer = gsap.to('.gsap-footer', {
              y: 100,
              duration: 0.4,
              ease: 'expo.inOut',
            });
            return fadeOutContent, footer;
          },
          beforeEnter() {
            window.scrollTo(0, 0);
            gsap.set('.gsap-circle-card', {
              x: '20%',
            });
          },
          after(data) {
            let fadeInContent = gsap.to('.gsap-content', {
              opacity: 1,
              duration: 1,
              ease: 'expo.out',
            });

            let slideCard = gsap.to('.gsap-circle-card', {
              translateX: '0',
              duration: 1,
              ease: 'expo.out',
              delay: 0,
            });

            let scaleDownHero = gsap.from('.gsap-hero', {
              height: '100svh',
              duration: 1,
              ease: 'expo.inOut',
              delay: 0.2,
            });

            let slideInFooter = gsap.from('.gsap-footer', {
              y: 100,
              duration: 1,
              ease: 'expo.inOut',
              delay: 0.4,
              onComplete() {
                let element = document.querySelector('.gsap-hero');
                element.style.removeProperty('height');
                // element.classList.remove('h-screen', 'overflow-hidden');
              },
            });

            return fadeInContent, slideCard, scaleDownHero, slideInFooter;
          },
        },
      ],
    });

    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }
  },
  false
);


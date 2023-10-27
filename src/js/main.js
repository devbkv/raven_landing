document.addEventListener('DOMContentLoaded', function () {
  // First Slider
  new Splide('#splide1', {
    pagination: false,
    perPage: 1,
    breakpoints: {
      479.99: {
        gap: '1rem',
      },
      767.99: {
        gap: '1rem',
      },
    },
  }).mount();

  // Second Slider
  let mobileConfig = {
    direction: 'ltr',
    gap: '10px',
    perPage: 1,
    keyboard: 'global',
    wheel: false,
    releaseWheel: true,
    breakpoints: {
      479.99: {
        gap: '10px',
      },
      767.99: {
        gap: '2rem',
      },
    },
  };

  let desktopConfig = {
    direction: 'ttb',
    gap: '10px',
    perPage: 1,
    height: 'fit-content',
    keyboard: 'global',
    wheel: true,
    releaseWheel: true,
  };

  let activeConfig;

  function handleResize() {
    if (window.innerWidth < 767.99 && activeConfig !== mobileConfig) {
      activeConfig = mobileConfig;
      splide.options = mobileConfig;
      if (activeConfig === mobileConfig) {
        splide.options.wheel = mobileConfig.wheel;
      } else {
        splide.options.wheel = desktopConfig.wheel;
      }
      splide.refresh();
    } else if (window.innerWidth >= 767.99 && activeConfig !== desktopConfig) {
      activeConfig = desktopConfig;
      splide.options = desktopConfig;
      if (activeConfig === mobileConfig) {
        splide.options.wheel = mobileConfig.wheel;
      } else {
        splide.options.wheel = desktopConfig.wheel;
      }
      splide.refresh();
    }
  }

  window.addEventListener('resize', handleResize);

  // Инициализация слайдера при загрузке страницы
  activeConfig = window.innerWidth < 767.99 ? mobileConfig : desktopConfig;
  var splide = new Splide('#splide2', activeConfig).mount();

  // BURGER MENU
  function toggleMenu() {
    const burger = document.querySelector('#burger');
    const menu = document.querySelector('#mobile-menu');
    const body = document.querySelector('body');

    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      menu.classList.toggle('hidden');
      menu.classList.toggle('flex');
      body.classList.toggle('overflow-hidden');
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 767.99) {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
        burger.classList.remove('active');
        body.classList.remove('overflow-hidden');
      }
    });
  }

  toggleMenu();

  // Accordion
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(function (item) {
    const title = item.querySelector('.accordion-title');
    const content = item.querySelector('.accordion-content');
    const faqArrow = item.querySelector('.faq-arrow');

    title.addEventListener('click', function () {
      content.classList.toggle('accordion-content-fr1');

      content.classList.contains('accordion-content-fr1')
        ? faqArrow.classList.add('faq-arrow-open')
        : faqArrow.classList.remove('faq-arrow-open');
      // adding border
      content.classList.contains('accordion-content-fr1')
        ? item.classList.add('border-faq')
        : item.classList.remove('border-faq');
    });
  });
});

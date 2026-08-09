
    try {
        const swiper = new Swiper('.gallery-swiper', {
            slidesPerView: 1.05,
            spaceBetween: 16,
            centeredSlides: true,
            loop: true,

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            breakpoints: {
                700: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },

                1100: {
                    slidesPerView: 2.3,
                    spaceBetween: 24,
                    centeredSlides: false,
                }
            }
        });

    } catch (e) {
        console.warn('Swiper gallery init failed:', e);
    }


    try {
        const benefitsSwiper = new Swiper('.benefits-swiper', {
            slidesPerView: 1.05,
            spaceBetween: 14,
            loop: true,

            pagination: {
                el: '.benefits-pagination',
                clickable: true,
            },

            navigation: {
                nextEl: '.benefits-next',
                prevEl: '.benefits-prev',
            },

            breakpoints: {
                700: {
                    slidesPerView: 2.1,
                    spaceBetween: 18,
                },

                1100: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                    loop: false,
                    centeredSlides: false,
                }
            }
        });

    } catch (e) {
        console.warn('Swiper benefits init failed:', e);
    }


    /* =========================
       MENU MOBILE
    ========================= */

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav');

    if (menuToggle && navMenu) {

        menuToggle.addEventListener('click', function () {

            const aberto = navMenu.classList.toggle('open');

            menuToggle.classList.toggle('open', aberto);

            menuToggle.setAttribute(
                'aria-expanded',
                aberto ? 'true' : 'false'
            );

            menuToggle.setAttribute(
                'aria-label',
                aberto ? 'Fechar menu' : 'Abrir menu'
            );

        });


        /* Fecha o menu quando clicar em algum link */

        navMenu.querySelectorAll('a').forEach(function (link) {

            link.addEventListener('click', function () {

                navMenu.classList.remove('open');

                menuToggle.classList.remove('open');

                menuToggle.setAttribute(
                    'aria-expanded',
                    'false'
                );

                menuToggle.setAttribute(
                    'aria-label',
                    'Abrir menu'
                );

            });

        });

    }

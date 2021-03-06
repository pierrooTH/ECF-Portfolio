const scroll = ScrollReveal();

scroll.reveal('.header__maintitle', {
    duration: 1500,
    origin: 'top',
    reset: true,
    distance: '70px'
});

scroll.reveal('.header__title', {
    duration: 1500,
    origin: 'top',
    delay: 300,
    reset: true,
    distance: '70px'
});
scroll.reveal('.section__title--about', {
    duration: 1500,
    origin: 'top',
    delay: 300,
    reset: true,
    distance: '100px'
});
scroll.reveal('.about__img', {
    origin: 'left',
    duration: 1500,
    reset: true,
    distance: '100px'
});
scroll.reveal('.about__paragraph', {
    duration: 1500,
    origin: 'right',
    delay: 500,
    reset: true,
    distance: '120px'
});
scroll.reveal('.about__btn', {
    duration: 1500,
    delay: 500,
    reset: true,
    distance: '70px'
});
scroll.reveal('.header__btn', {
    duration: 1500,
    delay: 800,
    reset: true,
    distance: '70px'
});

scroll.reveal('.tools', {
    duration: 2000,
    origin: 'top',
    distance: '100px'
}, 150);

scroll.reveal('.lang', {
    duration: 2000,
    distance: '100px'
}, 150);

scroll.reveal('.projects__card', {
    duration: 2000,
    origin: 'left',
    distance: '150px'
}, 150);


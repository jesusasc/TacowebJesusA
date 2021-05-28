//inicia el carrucel cuando inicie tambien la pagina de cargar 
document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 40,
        dist: -80,
        shift: 3,
        padding: 5,
        numVisible: 3,
        indicators: true,

    });
});


const owlCaroselTeam = () => {
    $('.owl-team').owlCarousel({
        autoplay: true,
        stagePadding: 0,
        margin: 0,
        nav: true,
        autoplaySpeed: 1500,
        autoplayTimeout: 3000,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            650: {
                items: 1
            },
            800: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
}

export default owlCaroselTeam;
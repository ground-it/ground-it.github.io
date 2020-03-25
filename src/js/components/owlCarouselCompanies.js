const owlCaroselCompanies = () => {
    $('.owl-carousel').owlCarousel({
        autoplay: true,
        stagePadding: 0,
        margin: 0,
        autoplaySpeed: 1500,
        autoplayTimeout: 3000,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            520: {
                items: 2
            },
            650: {
                items: 2
            },
            800: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
}

export default owlCaroselCompanies;
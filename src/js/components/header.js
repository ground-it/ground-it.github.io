const Header = () => {
    var headerBtn = $('.burger');
    var headerMenu = $('.menu');
    var headerLink = $('.menu ul li a');


    //show-hide header menu on click
    headerBtn.on('click', () => {
        headerMenu.toggleClass('menu-active');
    });


    //hide header menu and remove class .burger-active after tap on link
    headerLink.on('click', () => {
        headerMenu.toggleClass('menu-active');
        headerBtn.toggleClass('burger-active');
    });


    //change burger styles
    headerBtn.on('click', () => {
        headerBtn.toggleClass('burger-active');
    });



    //minimize header after scroll
    $(window).scroll(() => {
        let height = $(window).scrollTop();
        if (height > 100) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    });
}


export default Header;
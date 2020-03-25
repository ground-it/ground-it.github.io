const toTopBtn = () => {
    $(window).scroll(() => {
        let height = $(window).scrollTop();
        if (height > 2000) {
            $('.toTopBtn').addClass('toTopBtn-active');
        } else {
            $('.toTopBtn').removeClass('toTopBtn-active');
        }
    });
}

export default toTopBtn;
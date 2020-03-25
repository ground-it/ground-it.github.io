const preloader = () => {
    var preloader = $('.preloader');

    const hidePreloader = () => {
        preloader.addClass('preloader-hide')
    }

    setTimeout(hidePreloader, 2000)
}


export default preloader;

// Global var to use it across components
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '../scss/styles.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

// Class and Function Imports
import Header from './components/header.js';
import smoothScroll from './components/smoothScroll';
import toTopBtn from './components/toTopBtn';
import owlCaroselTeam from './components/owlCarouselTeam';
import owlCaroselCompanies from './components/owlCarouselCompanies';
import preloader from './components/preloader';
import footerDate from './components/footerDate';

// JQuery $(document).ready function 
$(window).on('load', () => {
    console.log('Rendered');
    console.log('jquery is ready');
    Header();
    smoothScroll();
    toTopBtn();
    owlCaroselTeam();
    owlCaroselCompanies();
    preloader();
    footerDate();
});



// () => {
    
// }
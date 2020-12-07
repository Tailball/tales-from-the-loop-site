import SmoothScroll from 'smooth-scroll';

const options = {
    offset: 70
};

new SmoothScroll('.navbar a[href*="#"], .action-buttons a[href*="#"]', options);
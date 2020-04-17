(function() {
    
    const scrollButton = document.querySelector('.scroll-top-btn');

    window.addEventListener('scroll', (e) => {
        const pageTop = window.pageYOffset;
        if(pageTop > 150) {
            scrollButton.style.transform = 'translateX(0)';
            scrollButton.style.opacity = 1;
        } else {
            scrollButton.style.transform = 'translateX(10rem)';
            scrollButton.style.opacity = 0;
        }
    });

    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

})();
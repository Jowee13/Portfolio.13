window.addEventListener('scroll', function () {
    const portfolio = document.getElementById('portfolio');
    const portfolioPosition = portfolio.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Add or remove 'visible' class based on portfolio position in viewport
    portfolio.classList.toggle('visible', portfolioPosition <= windowHeight * 0.8);
});

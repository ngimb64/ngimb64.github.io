const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // When the burger is clicked //
    burger.addEventListener('click', () => {
        // Toggle the nav bar //
        nav.classList.toggle('nav-active');

        // Iterate through nav links //
        navLinks.forEach((link, index) => {
            // If the animation is still active //
            if (link.style.animation) {
                link.style.animation = '';
            }
            // If there is no animation //
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        // Animate burger appearance //
        burger.classList.toggle('toggle');
    });
}

navSlide();
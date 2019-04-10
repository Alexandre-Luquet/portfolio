$('.project-box').on('mouseover', function() {
    $('.title', this).show();
});

$('.project-box').on('mouseout', function() {
    $('.title', this).hide();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
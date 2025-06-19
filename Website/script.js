// Mobile menu toggle
document.getElementById("menu-button").addEventListener("click", function() {
    document.getElementById("nav-links").classList.toggle("nav-open");
});

// Swiper carousel functionality
window.addEventListener("load", function() {
    let slides = document.querySelectorAll(".swiper-slide");
    let index = 0;

    function showSlide() {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        index = (index + 1) % slides.length;
        showSlide();
    }

    showSlide();
    setInterval(nextSlide, 4000);
});
